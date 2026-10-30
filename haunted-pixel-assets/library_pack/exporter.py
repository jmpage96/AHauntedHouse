"""Whole-sprite Tiled tile objects, category atlases, metadata and a furnished library."""
from collections import defaultdict
import hashlib
import json
import math
from pathlib import Path
import xml.etree.ElementTree as ET
from PIL import Image, ImageColor, ImageDraw, ImageFont
from architectural.exporter import build as build_architecture, map_xml, properties, write_xml, tsx
from .catalogue import CATEGORIES, FINISH_NAMES, build
from .common import COLORS, new, box, stroke
from .scene import WIDTH, HEIGHT, LAYER_ORDER, architecture_background, placements, ordered, render_scene


def label(d, xy, text, size=8, c="gold"):
    d.fontmode = "1"
    d.text(xy, text, font=ImageFont.load_default(size=size), fill=COLORS[c])


def save_gif(frames, path, durations, scale=2):
    colors = list(dict.fromkeys(ImageColor.getrgb(c) for c in COLORS.values()))
    lookup = {rgb: i for i, rgb in enumerate(colors)}
    palette = [c for rgb in colors for c in rgb]+[0]*(768-3*len(colors))
    images = []
    for original in frames:
        bg = new(original.size, "ink")
        bg.alpha_composite(original)
        raw = bg.convert("RGB").tobytes()
        im = Image.new("P", original.size)
        im.putpalette(palette)
        im.putdata([lookup[tuple(raw[i:i+3])] for i in range(0, len(raw), 3)])
        images.append(im.resize((im.width*scale, im.height*scale), Image.Resampling.NEAREST))
    images[0].save(path, save_all=True, append_images=images[1:], duration=durations,
                   disposal=2, loop=0, optimize=False)


def category_tsx(category, sprites):
    root = ET.Element("tileset", version="1.10", name=f"victorian_library_{category}",
        tilewidth=str(max(s.image.width for s in sprites)), tileheight=str(max(s.image.height for s in sprites)),
        tilecount=str(len(sprites)), columns="0", objectalignment="topleft")
    properties(root, {"schema": "victorian.library.v1", "native_grid": 32,
                       "placement": "tile objects, whole sprites, native size", "lighting": "upper-left"})
    ET.SubElement(root, "transformations", hflip="0", vflip="0", rotate="0", preferuntransformed="1")
    for s in sorted(sprites, key=lambda s: s.local_id):
        tile = ET.SubElement(root, "tile", id=str(s.local_id), type="LibraryFurniture")
        properties(tile, {"asset_id": s.key, "category": category, "kind": s.kind, "variant": s.variant,
            "direction": s.direction, "placement": s.placement, "state": s.state,
            "interactable": s.interactable, "blocking": bool(s.collision),
            "anchor_x": s.anchor[0], "anchor_y": s.anchor[1], "source": s.source})
        ET.SubElement(tile, "image", source=f"sprites/{category}/{s.key}.png", width=str(s.image.width), height=str(s.image.height))
        if s.collision:
            og = ET.SubElement(tile, "objectgroup", draworder="index")
            for i, (x, y, w, h) in enumerate(s.collision, 1):
                ET.SubElement(og, "object", id=str(i), name="footprint", type="Collision", x=str(x), y=str(y), width=str(w), height=str(h))
        if s.loop and s.local_id == s.loop[0]:
            animation = ET.SubElement(tile, "animation")
            for tid in s.loop:
                other = next(t for t in sprites if t.local_id == tid)
                ET.SubElement(animation, "frame", tileid=str(tid), duration=str(other.duration))
    return root


def write_scene(root, sprites, layers, placed, firstgids):
    doc = map_xml(layers, WIDTH, HEIGHT, "architecture/")
    # Tileset references precede all layers; collection IDs reserve 128 IDs per base type.
    insert = 3
    for category in CATEGORIES:
        doc.insert(insert, ET.Element("tileset", firstgid=str(firstgids[category]), source=f"{category}.tsx"))
        insert += 1
    next_layer = len(layers)+1
    oid = 1
    for layer in LAYER_ORDER:
        og = ET.SubElement(doc, "objectgroup", id=str(next_layer), name=layer, draworder="index")
        next_layer += 1
        for p in [p for p in ordered(placed) if p["layer"] == layer]:
            s = p["sprite"]
            obj = ET.SubElement(og, "object", id=str(oid), name=s.kind, gid=str(firstgids[s.category]+s.local_id),
                x=str(p["x"]), y=str(p["y"]), width=str(s.image.width), height=str(s.image.height))
            properties(obj, {"asset_id": s.key, "parent_surface": p["parent"] or "", "authored_layer": layer})
            oid += 1
    doc.set("nextlayerid", str(next_layer))
    doc.set("nextobjectid", str(oid))
    write_xml(doc, root / "library.tmx")


def galleries(root, sprites):
    # Every exported view/state/variant has its own labelled entry, not just a representative.
    masters = []
    for category in CATEGORIES:
        group = [s for s in sprites if s.category == category]
        cell_w = max(128, max(s.image.width for s in group)+16)
        cell_h = max(s.image.height for s in group)+43
        columns = 8 if cell_w <= 144 else 6
        rows = math.ceil(len(group)/columns)
        page = new((columns*cell_w, rows*cell_h+24), "ink")
        d = ImageDraw.Draw(page)
        label(d, (8, 4), category.replace("_", " ").upper(), 12)
        for i, s in enumerate(group):
            x, y = i%columns*cell_w, i//columns*cell_h+24
            label(d, (x+5, y), s.kind.replace("_", " "), 7)
            label(d, (x+5, y+9), f"v{s.variant} {s.direction} {s.state}", 7, "dust")
            px, py = x+(cell_w-s.image.width)//2, y+21
            # Quiet flat backdrop rather than a noisy checkerboard hiding dark outlines.
            box(d, (x+4, py, x+cell_w-5, py+cell_h-26), "shadow")
            page.alpha_composite(s.image, (px, py))
            label(d, (x+5, y+cell_h-10), f"{s.image.width}x{s.image.height}  #{s.local_id}", 7, "dust")
        page.save(root / "galleries" / f"{category}_native.png")
        page.resize((page.width*2, page.height*2), Image.Resampling.NEAREST).save(root / "galleries" / f"{category}.png")
        masters.append(page)
    # Full catalogue: every row contains the same native pixels as its category page.
    w = max(p.width for p in masters)
    h = sum(p.height+16 for p in masters)
    full = new((w, h), "ink")
    y = 0
    for page in masters:
        full.alpha_composite(page, (0, y))
        y += page.height+16
    full.save(root / "contact_sheet_native.png")
    full.resize((w*2, h*2), Image.Resampling.NEAREST).save(root / "contact_sheet.png")
    # Compact, legible one-of-each-type overview alongside the exhaustive catalogue.
    heights = {c: max(s.image.height for s in sprites if s.category == c)+24 for c in CATEGORIES}
    total = sum(36+math.ceil(len(kinds)/8)*heights[c] for c, kinds in CATEGORIES.items())
    thumb = new((1280, total), "ink")
    td = ImageDraw.Draw(thumb)
    y = 0
    for category, kinds in CATEGORIES.items():
        label(td, (8, y+2), category.replace("_", " ").upper(), 11)
        rows = math.ceil(len(kinds)/8)
        height = heights[category]
        for i, kind in enumerate(kinds):
            s = next(s for s in sprites if s.kind == kind)
            x, yy = i%8*160, y+24+i//8*height
            label(td, (x+6, yy), kind.replace("_", " "), 7)
            # Keep full native sprite proportions. Very tall pieces use the full card.
            thumb.alpha_composite(s.image, (x+(160-s.image.width)//2, yy+14))
        y += 24+rows*height+12
    thumb = thumb.crop((0, 0, 1280, max(y, 1)))
    thumb.save(root / "overview.png")


def export(output, seed=13, preview_gif=True):
    root = Path(output)
    for folder in (root, root / "sprites", root / "layers", root / "galleries", root / "animations", root / "architecture"):
        folder.mkdir(parents=True, exist_ok=True)
    sprites = build(seed)
    # Embed unchanged architectural recipes under this export: custom seeds remain self-contained.
    architecture_atlases, architecture_records, _ = build_architecture(seed)
    for group, atlas in architecture_atlases.items():
        atlas.save(root / "architecture" / f"{group}.png")
        write_xml(tsx(group, atlas, architecture_records[group]), root / "architecture" / f"{group}.tsx")
    by_category = {c: [s for s in sprites if s.category == c] for c in CATEGORIES}
    firstgids = {}
    cursor = 4097
    entries = []
    groups = defaultdict(list)
    for s in sprites:
        groups[s.group].append(s)
    for category, group in by_category.items():
        firstgids[category] = cursor
        cursor += len(CATEGORIES[category])*128
        dest = root / "sprites" / category
        dest.mkdir(exist_ok=True)
        cw, ch = max(s.image.width for s in group), max(s.image.height for s in group)
        cols = 8 if cw == 32 else 4
        atlas = new((cw*cols, math.ceil(len(group)/cols)*ch))
        for i, s in enumerate(group):
            px, py = i%cols*cw, i//cols*ch
            atlas.alpha_composite(s.image, (px, py))
            s.image.save(dest / f"{s.key}.png")
            related = groups[s.group]
            variants = sorted({t.variant for t in group if t.kind == s.kind})
            frames = [t.key for t in related]
            if s.static is not None:
                layerdir = root / "layers" / s.group
                layerdir.mkdir(exist_ok=True)
                s.static.save(layerdir / "static.png")
                s.motion.save(layerdir / f"{s.state}.png")
            entry = {"asset_id": s.key, "category": category, "kind": s.kind, "local_tile_id": s.local_id,
                "description": s.kind.replace("_", " ")+f", {s.direction} view, {s.state} state",
                "sprite_sheet": f"{category}.png", "sprite_sheet_region": [px, py, s.image.width, s.image.height],
                "image": f"sprites/{category}/{s.key}.png", "dimensions": list(s.image.size),
                "direction": s.direction, "placement": s.placement, "anchor": s.anchor,
                "visible_bounds": list(s.image.getbbox()), "collision_footprint": s.collision,
                "decorative": not s.interactable, "interactable": s.interactable, "variant": s.variant,
                "available_variants": variants, "state": s.state, "related_states": frames,
                "animation_tile_ids": s.loop, "duration_ms": s.duration, "source": s.source,
                "pixel_sha256": hashlib.sha256(s.image.tobytes()).hexdigest()}
            if category in ("bookshelves", "desks"):
                entry["variant_name"] = FINISH_NAMES[s.variant]
            elif category == "clutter" and len(variants) > 1:
                entry["variant_name"] = ("burgundy binding", "forest binding", "plum binding")[s.variant]
            else:
                entry["variant_name"] = "primary treatment" if not s.variant else "alternate upholstery, glaze or finish"
            if s.static is not None:
                entry["static_layer"] = f"layers/{s.group}/static.png"
                entry["motion_layer"] = f"layers/{s.group}/{s.state}.png"
            entries.append(entry)
        atlas.save(root / f"{category}.png")
        write_xml(category_tsx(category, group), root / f"{category}.tsx")
    animations = []
    for name, members in groups.items():
        first = members[0]
        if first.loop:
            frames = [next(t for t in members if t.local_id == tid) for tid in first.loop]
            save_gif([t.image for t in frames], root / "animations" / f"{name}.gif", [t.duration for t in frames], scale=4)
            animations.append({"group": name, "frames": [t.key for t in frames], "path": f"animations/{name}.gif"})
    galleries(root, sprites)
    background, layers = architecture_background(seed)
    placed = placements(sprites)
    for p in placed:
        p["animation"] = [t for t in groups[p["sprite"].group] if t.local_id in p["sprite"].loop]
    scene = render_scene(background, placed)
    background.save(root / "library_background_native.png")
    scene.save(root / "library_native.png")
    scene.resize((scene.width*2, scene.height*2), Image.Resampling.NEAREST).save(root / "library.png")
    footprints = scene.copy()
    footprint_draw = ImageDraw.Draw(footprints)
    for p in placed:
        for x, y, w, h in p["sprite"].collision:
            footprint_draw.rectangle((p["x"]+x, p["y"]+y, p["x"]+x+w-1, p["y"]+y+h-1), outline=COLORS["sage"])
    footprints.save(root / "collision_preview.png")
    write_scene(root, sprites, layers, placed, firstgids)
    if preview_gif:
        save_gif([render_scene(background, placed, i) for i in range(12)], root / "library.gif", [100]*12, scale=1)
    scene_meta = [{"asset_id": p["sprite"].key, "x": p["x"], "y": p["y"], "layer": p["layer"],
                   "parent_surface": p["parent"]} for p in ordered(placed)]
    manifest = {"schema": "victorian.library.v1", "seed": seed, "native_grid": 32,
        "base_types": sum(map(len, CATEGORIES.values())), "sprite_count": len(sprites),
        "category_counts": {c: len(g) for c, g in by_category.items()}, "firstgids": firstgids,
        "palette": COLORS, "assets": entries, "animations": animations,
        "scene": {"map": "library.tmx", "width": WIDTH*32, "height": HEIGHT*32, "placements": scene_meta}}
    (root / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    guide = Path(__file__).resolve().parent.parent / "LIBRARY.md"
    if guide.is_file():
        (root / "README.md").write_text(guide.read_text(encoding="utf-8"), encoding="utf-8")
    return manifest
