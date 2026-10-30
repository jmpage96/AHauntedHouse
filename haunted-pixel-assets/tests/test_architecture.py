import json
from pathlib import Path
import random
import tempfile
import unittest
import xml.etree.ElementTree as ET

from PIL import Image, ImageColor
from generate import PALETTE, make_assets
from architectural.materials import (COLORS, FLOORS, WALLS, floor_pattern, floor_variants,
                                     parquet_color, wall_surface)
from architectural.pieces import KINDS, shared
from architectural.walls import ROLES, facade, wall_tiles
from architectural.exporter import (COUNTS, FIRST, build, export, floor_id, map_xml,
                                    piece_id, render, room_map, tsx, wall_id)


class ArchitectureTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.atlases, cls.records, cls.assemblies = build()

    def test_complete_families_dimensions_palette_and_transparency(self):
        self.assertEqual(len(FLOORS), 10)
        self.assertEqual(len(WALLS), 10)
        self.assertTrue(PALETTE.items() <= COLORS.items())
        allowed = {ImageColor.getrgb(c)+(255,) for c in COLORS.values()} | {(0, 0, 0, 0)}
        assets = set()
        for group, atlas in self.atlases.items():
            self.assertEqual(atlas.size, (512, COUNTS[group]//16*32))
            self.assertLessEqual(set(zip(*[iter(atlas.tobytes())]*4)), allowed)
            self.assertLessEqual(set(atlas.getchannel("A").tobytes()), {0, 255})
            for tid, record in self.records[group].items():
                self.assertLess(tid, COUNTS[group])
                self.assertNotIn(record["asset"], assets)
                assets.add(record["asset"])
        for family in WALLS:
            self.assertEqual(set(wall_tiles(family)), set(ROLES))
        for family in FLOORS:
            for variant in floor_variants(family):
                self.assertEqual(variant.getchannel("A").getextrema(), (255, 255))

    def test_five_distinct_variants_and_compatible_phase_edges_across_40_seeds(self):
        # Compatibility means identical edge collars for the SAME spatial phase.
        # Opposite edges need not be equal: checkerboard squares and parquet cross them.
        for seed in range(40):
            for family in FLOORS:
                base = floor_pattern(family)
                variants = floor_variants(family, seed)
                self.assertEqual(len({v.tobytes() for v in variants}), 5, (seed, family))
                for im in variants:
                    for y in range(0, im.height, 32):
                        for x in range(0, im.width, 32):
                            for edge in ((x, y, x+2, y+32), (x+30, y, x+32, y+32),
                                         (x, y, x+32, y+2), (x, y+30, x+32, y+32)):
                                self.assertEqual(im.crop(edge).tobytes(), base.crop(edge).tobytes(), (seed, family, edge))

    def test_parquet_is_periodic_in_both_axes_and_terrain_phase_matches(self):
        for y in range(-2, 66):
            for x in range(-2, 66):
                self.assertEqual(parquet_color(x, y), parquet_color(x+64, y))
                self.assertEqual(parquet_color(x, y), parquet_color(x, y+64))
        floor_tsx = tsx("floors", self.atlases["floors"], self.records["floors"])
        ws = next(w for w in floor_tsx.findall("wangsets/wangset") if w.get("name").startswith("herringbone"))
        ids = {int(w.get("tileid")): list(map(int, w.get("wangid").split(","))) for w in ws.findall("wangtile")}
        for v in range(5):
            for y in range(2):
                for x in range(2):
                    here = ids[floor_id("herringbone", v, x, y)]
                    for other_v in range(5):
                        self.assertEqual(here[2], ids[floor_id("herringbone", other_v, (x+1)%2, y)][6])
                        self.assertEqual(here[4], ids[floor_id("herringbone", other_v, x, (y+1)%2)][0])

    def test_ids_are_stable_and_original_finished_sprites_unchanged(self):
        _, other, _ = build(42)
        for group in self.records:
            self.assertEqual(self.records[group], other[group])
        originals = make_assets()
        for name in ("door", "bookcase"):
            assembly = self.assemblies[f"existing.{name}"]
            layers = {"Artwork": [FIRST["architecture"]+t for t in assembly["tiles"]]}
            result = render(layers, assembly["width"], assembly["height"], self.atlases)
            self.assertEqual(result.tobytes(), originals[name].tobytes())

    def test_shared_pieces_and_architectural_connections(self):
        self.assertEqual(len(KINDS), 16)
        self.assertEqual(shared("double_doorway", "wood").width,
                         shared("plain_doorway", "wood").width*2)
        self.assertEqual(shared("carved_door_frame", "wood").getpixel((32, 48))[3], 0)
        for key, assembly in self.assemblies.items():
            self.assertEqual(len(assembly["tiles"]), assembly["width"]*assembly["height"])
            for tid in assembly["tiles"]:
                self.assertIn(tid, self.records[assembly["group"]], key)
        for family in WALLS:
            tiles = wall_tiles(family)
            # Side-wall alpha collars connect through both top and bottom corners.
            for corner, side in (("room_nw", "vertical_left"), ("room_ne", "vertical_right")):
                self.assertEqual(tiles[corner].getchannel("A").crop((0, 31, 32, 32)).tobytes(),
                                 tiles[side].getchannel("A").crop((0, 0, 32, 1)).tobytes())
            for role in ("upper", "middle", "lower"):
                self.assertEqual(tiles[role].getchannel("A").getextrema(), (255, 255))
        # Full-height wood panel has uninterrupted long vertical inset at band seams.
        for y in (0, 31):
            self.assertEqual(facade("wood_panelling", "middle").getpixel((5, y)),
                             facade("wood_panelling", "lower").getpixel((5, y)))

    def test_rectangular_rooms_and_valid_gid_references(self):
        for w, h in ((8, 7), (10, 9), (13, 11), (18, 12)):
            for floor, wall in zip(FLOORS, WALLS):
                layers = room_map(floor, wall, w, h)
                for values in layers.values():
                    self.assertEqual(len(values), w*h)
                    for gid in values:
                        if gid:
                            group = next(g for g in reversed(FIRST) if gid >= FIRST[g])
                            self.assertIn(gid-FIRST[group], self.records[group])
                im = render(layers, w, h, self.atlases)
                self.assertEqual(im.size, (w*32, h*32))
                self.assertEqual(im.getpixel((0, 0))[3], 0)
                self.assertEqual(im.getpixel((w*16, (h-2)*32))[3], 255)

    def test_exported_tsx_tmx_png_and_manifest_consistency(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent.parent) as folder:
            root = Path(folder)
            manifest = export(root)
            self.assertEqual(json.loads((root / "manifest.json").read_text())["schema"], manifest["schema"])
            for group, atlas in self.atlases.items():
                doc = ET.parse(root / f"{group}.tsx").getroot()
                self.assertEqual(int(doc.get("tilecount")), COUNTS[group])
                self.assertEqual(doc.get("tilewidth"), "32")
                self.assertTrue((root / doc.find("image").get("source")).is_file())
                self.assertEqual(len(doc.findall("tile")), len(self.records[group]))
                with Image.open(root / f"{group}.png") as png:
                    self.assertEqual(png.tobytes(), atlas.tobytes())
                for ws in doc.findall("wangsets/wangset"):
                    max_color = len(ws.findall("wangcolor"))
                    for t in ws.findall("wangtile"):
                        self.assertIn(int(t.get("tileid")), self.records[group])
                        self.assertEqual(len(t.get("wangid").split(",")), 8)
                        self.assertTrue(all(0 <= int(v) <= max_color for v in t.get("wangid").split(",")))
            for path in [*(root / "maps").glob("*.tmx"), *(root / "assemblies").glob("*.tmx")]:
                doc = ET.parse(path).getroot()
                w, h = int(doc.get("width")), int(doc.get("height"))
                for ts in doc.findall("tileset"):
                    self.assertTrue((path.parent / ts.get("source")).is_file())
                layers = {}
                for layer in doc.findall("layer"):
                    layers[layer.get("name")] = list(map(int, layer.find("data").text.replace("\n", "").split(",")))
                    self.assertEqual(len(layers[layer.get("name")]), w*h)
                expected = render(layers, w, h, self.atlases)
                png_path = path.with_suffix(".png") if path.parent.name == "assemblies" else root / "rooms" / (path.stem[5:]+"_native.png")
                with Image.open(png_path) as png:
                    self.assertEqual(png.tobytes(), expected.tobytes(), path.name)


if __name__ == "__main__":
    unittest.main()
