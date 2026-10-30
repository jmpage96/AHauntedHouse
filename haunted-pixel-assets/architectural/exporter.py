"""Stable atlases, TSX terrain metadata, repeat stamps, and assembled TMX rooms."""
from pathlib import Path
import json
import math
import random
import xml.etree.ElementTree as ET
from PIL import Image, ImageDraw, ImageFont
from generate import make_assets
from .materials import COLORS, FLOORS, WALLS, new, floor_variants, box
from .walls import ROLES, SLOTS, wall_tiles
from .pieces import KINDS, SCHEMES, shared

TILE = 32
COUNTS = {"floors": 320, "walls": 640, "architecture": 1088}
FIRST = {"floors": 1, "walls": 321, "architecture": 961}
ONLY = {"wood_door_frame": "wood", "carved_door_frame": "wood", "stone_archway": "stone",
        "wood_archway": "wood", "wood_skirting": "wood", "stone_skirting": "stone",
        "plaster_cornice": "plaster"}


def floor_id(family, variant=0, px=0, py=0):
    return FLOORS.index(family)*32+variant*2+py*16+px


def wall_id(family, role):
    return WALLS.index(family)*64+SLOTS[role]


def piece_id(kind, scheme="wood", part=0):
    return KINDS.index(kind)*64+SCHEMES.index(scheme)*4+part


def build(seed=13):
    atlases = {name: new((512, math.ceil(count/16)*32)) for name, count in COUNTS.items()}
    records = {name: {} for name in COUNTS}
    assemblies = {}

    def add(group, tid, im, **meta):
        assert im.size == (32, 32)
        assert tid not in records[group]
        atlases[group].alpha_composite(im, (tid%16*32, tid//16*32))
        records[group][tid] = {"id": tid, **meta}

    for family in FLOORS:
        for v, pattern in enumerate(floor_variants(family, seed)):
            n = pattern.width//32
            for y in range(n):
                for x in range(n):
                    tid = floor_id(family, v, x, y)
                    add("floors", tid, pattern.crop((x*32, y*32, x*32+32, y*32+32)),
                        asset=f"floor.{family}.v{v}.{x}.{y}", family=family, variant=v,
                        phase_x=x, phase_y=y, repeat_width=n, repeat_height=n, role="floor", passable=True)
            assemblies[f"floor.{family}.v{v}"] = {"group": "floors", "width": n, "height": n,
                "tiles": [floor_id(family, v, x, y) for y in range(n) for x in range(n)]}
    for family in WALLS:
        for role, im in wall_tiles(family, seed).items():
            tid = wall_id(family, role)
            add("walls", tid, im, asset=f"wall.{family}.{role}", family=family,
                role=role, passable=role.startswith("door_"), wall_height=96)
        for feature in ("door", "window"):
            assemblies[f"wall.{family}.{feature}"] = {"group": "walls", "width": 2, "height": 3,
                "tiles": [wall_id(family, f"{feature}_{x}_{y}") for y in range(3) for x in range(2)]}
    for kind in KINDS:
        for scheme in SCHEMES:
            if kind in ONLY and ONLY[kind] != scheme:
                continue
            im = shared(kind, scheme)
            w, h = im.width//32, im.height//32
            ids = []
            for y in range(h):
                for x in range(w):
                    part = y*16+x
                    tid = piece_id(kind, scheme, part)
                    add("architecture", tid, im.crop((x*32, y*32, x*32+32, y*32+32)),
                        asset=f"architecture.{kind}.{scheme}.{x}.{y}", family=scheme, role=kind,
                        part_x=x, part_y=y, assembly_width=w, assembly_height=h,
                        passable=kind not in ("pilaster", "end_cap"))
                    ids.append(tid)
            assemblies[f"architecture.{kind}.{scheme}"] = {"group": "architecture", "width": w,
                "height": h, "tiles": ids}
    originals = make_assets(seed)
    for name, offset in (("door", 1024), ("bookcase", 1028)):
        im = originals[name]
        w, h = im.width//32, im.height//32
        ids = []
        for y in range(h):
            for x in range(w):
                tid = offset+y*16+x
                add("architecture", tid, im.crop((x*32, y*32, x*32+32, y*32+32)),
                    asset=f"existing.{name}.{x}.{y}", family="original", role=name,
                    part_x=x, part_y=y, passable=False)
                ids.append(tid)
        assemblies[f"existing.{name}"] = {"group": "architecture", "width": w, "height": h, "tiles": ids}
    return atlases, records, assemblies


def properties(parent, values):
    props = ET.SubElement(parent, "properties")
    for name, value in values.items():
        kind = "bool" if isinstance(value, bool) else "int" if isinstance(value, int) else "string"
        ET.SubElement(props, "property", name=name, type=kind,
                      value=str(value).lower() if isinstance(value, bool) else str(value))


def write_xml(root, path):
    ET.indent(root, space="  ")
    ET.ElementTree(root).write(path, encoding="utf-8", xml_declaration=True)


def tsx(group, atlas, records):
    root = ET.Element("tileset", version="1.10", name=f"victorian_{group}", tilewidth="32", tileheight="32",
                      tilecount=str(COUNTS[group]), columns="16", objectalignment="topleft", spacing="0", margin="0")
    properties(root, {"schema": "victorian.architecture.v1", "native_pixel_size": 32,
                      "wall_height_pixels": 96, "lighting": "upper-left", "id_policy": "append-only reserved blocks"})
    ET.SubElement(root, "image", source=f"{group}.png", width=str(atlas.width), height=str(atlas.height))
    ET.SubElement(root, "transformations", hflip="0", vflip="0", rotate="0", preferuntransformed="1")
    for tid, record in sorted(records.items()):
        tile = ET.SubElement(root, "tile", id=str(tid), type="Floor" if group == "floors" else "Architecture",
                             probability="6" if record.get("variant") == 0 else "1")
        properties(tile, {k: v for k, v in record.items() if k != "id"})
    if group == "floors":
        wangsets = ET.SubElement(root, "wangsets")
        for family in FLOORS:
            if family in ("herringbone", "dark_oak"):
                continue
            ws = ET.SubElement(wangsets, "wangset", name=family+" (interior fill)", tile=str(floor_id(family)))
            ET.SubElement(ws, "wangcolor", name=family, color=COLORS["brass_dark"], tile=str(floor_id(family)), probability="1")
            for v in range(5):
                ET.SubElement(ws, "wangtile", tileid=str(floor_id(family, v)), wangid="1,1,1,1,1,1,1,1")
        # Eight phase-specific edge colours prevent terrain painting from scrambling parquet.
        for family in ("herringbone", "dark_oak"):
            ws = ET.SubElement(wangsets, "wangset", name=family+" (phase locked)", tile=str(floor_id(family)))
            for axis in ("horizontal", "vertical"):
                for r in range(2):
                    for c in range(2):
                        ET.SubElement(ws, "wangcolor", name=f"{axis}_{r}_{c}", color=COLORS["oak_light"],
                                      tile=str(floor_id(family, 0, c, r)), probability="1")
            for v in range(5):
                for r in range(2):
                    for c in range(2):
                        edges = (1+r*2+c, 0, 5+r*2+c, 0, 1+((r+1)%2)*2+c, 0, 5+r*2+(c+1)%2, 0)
                        ET.SubElement(ws, "wangtile", tileid=str(floor_id(family, v, c, r)), wangid=",".join(map(str, edges)))
    return root


def blank_layers(w, h):
    return {name: [0]*(w*h) for name in ("Floors", "Walls", "Architecture", "Existing furniture")}


def room_map(floor, wall, w=12, h=10, seed=13, assemblies=None):
    assert w >= 8 and h >= 7
    layers = blank_layers(w, h)
    rng = random.Random(f"{seed}:{floor}:{wall}:{w}:{h}")

    def place(layer, x, y, group, tid):
        layers[layer][y*w+x] = FIRST[group]+tid

    n = 2 if floor in ("herringbone", "dark_oak") else 1
    # All phases of each 2x2 block share a variant, preserving complete grain patterns.
    variants = {}
    for y in range(1, h-1):
        for x in range(1, w-1):
            key = ((x-1)//n, (y-1)//n)
            if key not in variants:
                variants[key] = rng.choices(range(5), weights=(6, 1, 1, 1, 1))[0]
            place("Floors", x, y, "floors", floor_id(floor, variants[key], (x-1)%n, (y-1)%n))
    for y, role in enumerate(("upper", "middle", "lower")):
        for x in range(1, w-1):
            place("Walls", x, y, "walls", wall_id(wall, role))
    for y in range(h-1):
        place("Walls", 0, y, "walls", wall_id(wall, "room_nw" if y == 0 else "vertical_left"))
        place("Walls", w-1, y, "walls", wall_id(wall, "room_ne" if y == 0 else "vertical_right"))
    for x in range(1, w-1):
        place("Walls", x, h-1, "walls", wall_id(wall, "horizontal_south"))
    for x, role in ((0, "room_sw"), (w-1, "room_se")):
        place("Walls", x, h-1, "walls", wall_id(wall, role))
    for feature, start in (("window", 2), ("door", w//2)):
        for y in range(3):
            for x in range(2):
                place("Walls", start+x, y, "walls", wall_id(wall, f"{feature}_{x}_{y}"))
    # Reuse the existing finished door and bookcase sprites without redrawing them.
    for y in range(2):
        for x in range(2):
            place("Architecture", w//2+x, y+1, "architecture", 1024+y*16+x)
    for x0 in (1, w-3):
        for y in range(3):
            for x in range(2):
                place("Existing furniture", x0+x, 2+y, "architecture", 1028+y*16+x)
    return layers


def map_xml(layers, w, h, tileset_prefix="../"):
    root = ET.Element("map", version="1.10", orientation="orthogonal", renderorder="right-down", width=str(w),
                      height=str(h), tilewidth="32", tileheight="32", infinite="0", nextlayerid=str(len(layers)+1), nextobjectid="1")
    for name, first in FIRST.items():
        ET.SubElement(root, "tileset", firstgid=str(first), source=f"{tileset_prefix}{name}.tsx")
    for i, (name, values) in enumerate(layers.items(), 1):
        layer = ET.SubElement(root, "layer", id=str(i), name=name, width=str(w), height=str(h))
        data = ET.SubElement(layer, "data", encoding="csv")
        data.text = "\n"+",\n".join(",".join(map(str, values[y*w:(y+1)*w])) for y in range(h))+"\n"
    return root


def render(layers, w, h, atlases):
    im = new((w*32, h*32))
    for values in layers.values():
        for cell, gid in enumerate(values):
            if not gid:
                continue
            group = next(g for g in reversed(FIRST) if gid >= FIRST[g])
            tid = gid-FIRST[group]
            tile = atlases[group].crop((tid%16*32, tid//16*32, tid%16*32+32, tid//16*32+32))
            im.alpha_composite(tile, (cell%w*32, cell//w*32))
    return im


def label(d, xy, text, size=9):
    d.fontmode = "1"
    d.text(xy, text, font=ImageFont.load_default(size=size), fill=COLORS["gold"])


def previews(root, seed, atlases, records, assemblies):
    # Native material swatches plus a strip showing all five variant interiors.
    floors = new((960, 432), "ink")
    fd = ImageDraw.Draw(floors)
    for i, family in enumerate(FLOORS):
        x, y = i%5*192, i//5*216
        label(fd, (x+8, y+4), family.replace("_", " ").upper())
        patterns = floor_variants(family, seed)
        for yy in range(0, 128, patterns[0].height):
            for xx in range(0, 128, patterns[0].width):
                floors.alpha_composite(patterns[0], (x+8+xx, y+24+yy))
        for v, pattern in enumerate(patterns):
            floors.alpha_composite(pattern.crop((0, 0, 32, 32)), (x+8+v*34, y+160))
        label(fd, (x+8, y+198), "BASE + FOUR VARIATIONS", 7)
    floors.resize((1920, 864), Image.Resampling.NEAREST).save(root / "floors_preview.png")
    walls = new((960, 304), "ink")
    wd = ImageDraw.Draw(walls)
    for i, family in enumerate(WALLS):
        x, y = i%5*192, i//5*152
        label(wd, (x+8, y+4), family.replace("_", " ").upper())
        tiles = wall_tiles(family, seed)
        for r, role in enumerate(("upper", "middle", "lower")):
            for c in range(4):
                walls.alpha_composite(tiles[role], (x+8+c*32, y+24+r*32))
        label(wd, (x+8, y+130), "CORNICE / FACE / SKIRT", 7)
    walls.resize((1920, 608), Image.Resampling.NEAREST).save(root / "walls_preview.png")
    gallery = new((1280, 672), "ink")
    gd = ImageDraw.Draw(gallery)
    for i, (floor, wall) in enumerate(zip(FLOORS, WALLS)):
        w, h = (10+i%3*2, 9+i%3)
        layers = room_map(floor, wall, w, h, seed, assemblies)
        write_xml(map_xml(layers, w, h), root / "maps" / f"room_{i+1:02d}_{wall}.tmx")
        im = render(layers, w, h, atlases)
        im.save(root / "rooms" / f"{i+1:02d}_{wall}_native.png")
        im.resize((im.width*2, im.height*2), Image.Resampling.NEAREST).save(root / "rooms" / f"{i+1:02d}_{wall}.png")
        # Overview has one common 8x8 construction at native resolution; no downsampling.
        x, y = i%5*256, i//5*336
        small = render(room_map(floor, wall, 8, 8, seed, assemblies), 8, 8, atlases)
        label(gd, (x+8, y+8), wall.replace("_", " ").upper())
        gallery.alpha_composite(small, (x, y+28))
        label(gd, (x+8, y+292), floor.replace("_", " "), 8)
    gallery.save(root / "room_gallery.png")
    pieces = new((1664, 528), "ink")
    pd = ImageDraw.Draw(pieces)
    for i, kind in enumerate(KINDS):
        x, y = i%4*416, i//4*132
        label(pd, (x+8, y+3), kind.replace("_", " ").upper())
        for k, scheme in enumerate(SCHEMES):
            if kind in ONLY and ONLY[kind] != scheme:
                continue
            im = shared(kind, scheme)
            pieces.alpha_composite(im, (x+8+k*136, y+24))
            label(pd, (x+8+k*136, y+16), scheme, 7)
    pieces.resize((3328, 1056), Image.Resampling.NEAREST).save(root / "architecture_preview.png")


def export(output, seed=13):
    root = Path(output)
    for folder in (root, root / "maps", root / "rooms", root / "assemblies", root / "tiles"):
        folder.mkdir(parents=True, exist_ok=True)
    atlases, records, assemblies = build(seed)
    for group, atlas in atlases.items():
        atlas.save(root / f"{group}.png")
        write_xml(tsx(group, atlas, records[group]), root / f"{group}.tsx")
        dest = root / "tiles" / group
        dest.mkdir(exist_ok=True)
        for tid, record in records[group].items():
            tile = atlas.crop((tid%16*32, tid//16*32, tid%16*32+32, tid//16*32+32))
            tile.save(dest / f"{record['asset']}.png")
    for name, assembly in assemblies.items():
        group, w, h = assembly["group"], assembly["width"], assembly["height"]
        layers = {"Assembly": [FIRST[group]+t for t in assembly["tiles"]]}
        write_xml(map_xml(layers, w, h), root / "assemblies" / f"{name}.tmx")
        render(layers, w, h, atlases).save(root / "assemblies" / f"{name}.png")
    manifest = {"schema": "victorian.architecture.v1", "seed": seed, "tile_size": 32,
                "wall_height": 96, "palette": COLORS, "floor_families": FLOORS, "wall_families": WALLS,
                "tilesets": {g: {"capacity": COUNTS[g], "active": len(r), "firstgid": FIRST[g],
                                  "tiles": list(r.values())} for g, r in records.items()}, "assemblies": assemblies}
    (root / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    guide = Path(__file__).resolve().parent.parent / "ARCHITECTURE.md"
    if guide.is_file():
        (root / "README.md").write_text(guide.read_text(encoding="utf-8"), encoding="utf-8")
    previews(root, seed, atlases, records, assemblies)
    return manifest
