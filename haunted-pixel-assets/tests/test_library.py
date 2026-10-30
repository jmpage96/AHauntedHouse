import hashlib
import json
from pathlib import Path
import random
import tempfile
import unittest
import xml.etree.ElementTree as ET

from PIL import Image, ImageColor
from animate import candelabra, clock, portrait
from generate import make_assets
from library_pack.catalogue import CATEGORIES, build
from library_pack.exporter import export, category_tsx
from library_pack.scene import architecture_background, placements, render_scene, WIDTH, HEIGHT
from architectural.materials import COLORS


class LibraryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.sprites = build()

    def test_requested_catalogue_complete_and_ids_unique(self):
        self.assertEqual({c: len(k) for c, k in CATEGORIES.items()},
            {"bookshelves": 16, "desks": 12, "seating": 10, "lighting": 10,
             "clutter": 24, "decorations": 20, "large_furnishings": 12, "mysteries": 8})
        self.assertEqual(len({s.key for s in self.sprites}), len(self.sprites))
        for category, kinds in CATEGORIES.items():
            group = [s for s in self.sprites if s.category == category]
            self.assertEqual({s.kind for s in group}, set(kinds))
            self.assertEqual(len({s.local_id for s in group}), len(group))
        for kind in ("leather_wingback", "green_armchair", "burgundy_armchair", "desk_chair", "tufted_sofa", "chaise_longue"):
            self.assertEqual({s.direction for s in self.sprites if s.kind == kind}, {"north", "south", "east", "west"})

    def test_native_dimensions_alpha_palette_and_bounds(self):
        allowed = {ImageColor.getrgb(c)+(255,) for c in COLORS.values()} | {(0, 0, 0, 0)}
        for s in self.sprites:
            w, h = s.image.size
            self.assertEqual((w%32, h%32), (0, 0), s.key)
            self.assertEqual(s.image.mode, "RGBA")
            self.assertEqual(set(s.image.getchannel("A").tobytes()), {0, 255}, s.key)
            self.assertLessEqual(set(zip(*[iter(s.image.tobytes())]*4)), allowed, s.key)
            x, y, r, b = s.image.getbbox()
            self.assertTrue(0 <= x < r <= w and 0 <= y < b <= h, s.key)
            if s.category == "clutter":
                self.assertEqual(s.image.size, (32, 32))
                self.assertLess(sum(s.image.getchannel("A").tobytes())//255, 32*32*.8)

    def test_collision_is_local_ground_footprint_and_clutter_nonblocking(self):
        for s in self.sprites:
            if s.category == "clutter" or s.placement.startswith(("tabletop", "north wall overlay", "ceiling")) or s.kind == "ornate_rug":
                self.assertEqual(s.collision, [], s.key)
            for x, y, w, h in s.collision:
                self.assertTrue(0 <= x < x+w <= s.image.width, s.key)
                self.assertTrue(0 <= y < y+h <= s.image.height, s.key)
                long_side = s.direction in ("east", "west") and s.kind in ("reading_table", "tufted_sofa", "chaise_longue", "bench")
                if long_side:
                    self.assertGreater(h, 32)
                else:
                    self.assertLessEqual(h, 27)
                    self.assertGreaterEqual(y, s.image.getbbox()[3]-28)
                overlap = s.image.crop((x, y, x+w, y+h)).getchannel("A")
                self.assertGreater(sum(overlap.tobytes()), 0, s.key)
                self.assertLessEqual(s.anchor[1], s.image.height)

    def test_deterministic_seed_and_stable_identifiers(self):
        again, changed = build(), build(42)
        self.assertEqual([(s.key, s.local_id) for s in self.sprites], [(s.key, s.local_id) for s in changed])
        self.assertEqual([s.image.tobytes() for s in self.sprites], [s.image.tobytes() for s in again])
        self.assertTrue(any(a.image.tobytes() != b.image.tobytes() for a, b in zip(self.sprites, changed)))
        for s in self.sprites:
            related = [t for t in self.sprites if t.group == s.group]
            self.assertTrue(all(t.image.size == s.image.size for t in related), s.key)
            self.assertTrue(all(t.anchor == s.anchor for t in related), s.key)

    def test_exact_reuse_and_static_motion_reconstruction(self):
        originals = make_assets()
        double = next(s for s in self.sprites if s.kind == "double_bookcase" and s.variant == 0)
        self.assertEqual(double.image.tobytes(), originals["bookcase"].tobytes())
        clock_sprite = next(s for s in self.sprites if s.kind == "grandfather_clock")
        self.assertEqual(clock_sprite.image.crop((8, 8, 56, 120)).tobytes(), clock().frames[0].tobytes())
        candle = next(s for s in self.sprites if s.kind == "three_candelabrum")
        self.assertEqual(candle.image.crop((0, 8, 32, 56)).tobytes(), candelabra().frames[0].tobytes())
        for s in self.sprites:
            if s.static is not None:
                self.assertEqual(Image.alpha_composite(s.static, s.motion).tobytes(), s.image.tobytes(), s.key)

    def test_scene_is_furnished_unclipped_and_clutter_has_real_parents(self):
        placed = placements(self.sprites)
        self.assertGreaterEqual(len(placed), 75)
        kinds = {p["sprite"].kind for p in placed}
        self.assertTrue({"grand_desk", "reading_table", "tufted_sofa", "library_mantel", "ornate_rug", "terrestrial_globe"} <= kinds)
        self.assertGreaterEqual(len({k for k in kinds if "bookcase" in k or "shelving" in k}), 6)
        for p in placed:
            s = p["sprite"]
            self.assertTrue(0 <= p["x"] and p["x"]+s.image.width <= WIDTH*32, s.key)
            self.assertTrue(0 <= p["y"] and p["y"]+s.image.height <= HEIGHT*32, s.key)
            if p["parent"]:
                parents = [q for q in placed if q["sprite"].kind == p["parent"]]
                self.assertTrue(parents, s.key)
                # Object's visible centre sits over a parent surface, not an empty floor cell.
                b = s.image.getbbox()
                cx, cy = p["x"]+(b[0]+b[2])/2, p["y"]+(b[1]+b[3])/2
                self.assertTrue(any(q["x"]-8 <= cx <= q["x"]+q["sprite"].image.width+8 and
                                    q["y"]-8 <= cy <= q["y"]+q["sprite"].image.height for q in parents), s.key)
        bg, _ = architecture_background()
        self.assertEqual(render_scene(bg, placed).size, (832, 704))

    def test_tiled_collision_objects_and_collection_metadata(self):
        for category in CATEGORIES:
            group = [s for s in self.sprites if s.category == category]
            doc = category_tsx(category, group)
            self.assertEqual(doc.get("objectalignment"), "topleft")
            self.assertEqual(len(doc.findall("tile")), len(group))
            for s in group:
                t = doc.find(f"tile[@id='{s.local_id}']")
                self.assertEqual(int(t.find("image").get("width")), s.image.width)
                shapes = t.findall("objectgroup/object")
                self.assertEqual(len(shapes), len(s.collision))
                for shape, rect in zip(shapes, s.collision):
                    self.assertEqual([int(shape.get(k)) for k in ("x", "y", "width", "height")], rect)
                for f in t.findall("animation/frame"):
                    self.assertIn(int(f.get("tileid")), {q.local_id for q in group})

    def test_export_manifest_sheets_references_and_gif_decoding(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent.parent) as folder:
            root = Path(folder)
            m = export(root, preview_gif=False)
            self.assertEqual(m["base_types"], 112)
            self.assertEqual(len(m["assets"]), len(self.sprites))
            for s, entry in zip(self.sprites, m["assets"]):
                with Image.open(root / entry["image"]) as png:
                    self.assertEqual(png.tobytes(), s.image.tobytes())
                with Image.open(root / entry["sprite_sheet"]) as atlas:
                    x, y, w, h = entry["sprite_sheet_region"]
                    self.assertEqual(atlas.crop((x, y, x+w, y+h)).tobytes(), s.image.tobytes())
            for path in [*root.glob("*.tsx"), *(root / "architecture").glob("*.tsx")]:
                doc = ET.parse(path).getroot()
                for im in doc.findall(".//image"):
                    self.assertTrue((path.parent / im.get("source")).is_file(), str(path))
            doc = ET.parse(root / "library.tmx").getroot()
            for tileset in doc.findall("tileset"):
                self.assertTrue((root / tileset.get("source")).is_file())
            for animation in m["animations"]:
                with Image.open(root / animation["path"]) as gif:
                    self.assertEqual(gif.n_frames, len(animation["frames"]))
                    self.assertEqual(gif.info["loop"], 0)
                    for i, key in enumerate(animation["frames"]):
                        gif.seek(i)
                        s = next(s for s in self.sprites if s.key == key)
                        self.assertEqual(gif.info["duration"], s.duration)
                        bg = Image.new("RGBA", s.image.size, COLORS["ink"])
                        bg.alpha_composite(s.image)
                        self.assertEqual(gif.convert("RGB").tobytes(),
                            bg.resize((bg.width*4, bg.height*4), Image.Resampling.NEAREST).convert("RGB").tobytes())


if __name__ == "__main__":
    unittest.main()
