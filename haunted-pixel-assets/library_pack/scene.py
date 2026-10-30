"""An authored, asymmetrical library; placements are editable native pixel coordinates."""
from PIL import ImageDraw
from architectural.exporter import build as architecture, room_map, wall_id, FIRST, render
from .common import new

WIDTH, HEIGHT = 26, 22


def architecture_background(seed=13):
    atlases, _, _ = architecture(seed)
    layers = room_map("herringbone", "green_damask", WIDTH, HEIGHT, seed)
    layers.pop("Existing furniture")
    layers["Architecture"] = [0]*(WIDTH*HEIGHT)
    # Restore the sample's default window / door, then place our own asymmetrical openings.
    for x0 in (2, WIDTH//2):
        for y, role in enumerate(("upper", "middle", "lower")):
            for x in range(2):
                layers["Walls"][y*WIDTH+x0+x] = FIRST["walls"]+wall_id("green_damask", role)
    for feature, x0 in (("window", 8), ("window", 17), ("door", 21)):
        for y in range(3):
            for x in range(2):
                layers["Walls"][y*WIDTH+x0+x] = FIRST["walls"]+wall_id("green_damask", f"{feature}_{x}_{y}")
    for y in range(2):
        for x in range(2):
            layers["Architecture"][(y+1)*WIDTH+21+x] = FIRST["architecture"]+1024+y*16+x
    return render(layers, WIDTH, HEIGHT, atlases), layers


def placements(sprites):
    index = {(s.kind, s.variant, s.direction, s.state): s for s in sprites}
    placed = []

    def put(kind, x, y, variant=0, direction="south", state=None, layer="Furniture", parent=None):
        candidates = [s for s in sprites if s.kind == kind and s.variant == variant and s.direction == direction]
        sprite = index[(kind, variant, direction, state)] if state else candidates[0]
        placed.append({"sprite": sprite, "x": x, "y": y, "layer": layer, "parent": parent})

    # Wall-backed casework: different silhouettes, not a mirrored pair of shelves.
    put("narrow_bookcase", 40, 48)
    put("double_bookcase", 80, 48)
    put("crowned_bookcase", 144, 16)
    put("extra_tall_bookcase", 328, 8, 1)
    put("library_mantel", 416, 80)
    put("grandfather_clock", 488, 16)
    put("overstuffed_bookcase", 608, 48, 1)
    put("glass_bookcase", 736, 48)
    put("rolling_ladder", 216, 104)
    put("corner_bookcase", 32, 192)
    put("partial_bookcase", 736, 240, 2)
    put("catalogue_cabinet", 48, 336)
    put("display_cabinet", 656, 272, 1)
    put("curiosity_cabinet", 736, 416)
    put("built_in_shelving", 32, 528)
    put("half_bookcase", 704, 608)
    # Wall details: the portrait above the hearth is quite sure it owns the house.
    for kind, x, y in (("framed_portrait", 416, 8), ("wall_sconce", 392, 16),
                       ("wall_sconce", 640, 16), ("velvet_curtain", 544, 0),
                       ("certificate", 768, 8)):
        put(kind, x, y, layer="Wall decorations")
    # The working desk: green blotter, a cooling cup, correspondence and an open drawer.
    put("grand_desk", 184, 248)
    put("desk_chair", 208, 296, direction="north")
    put("green_armchair", 112, 240, direction="east")
    put("banker_lamp", 240, 246, layer="Tabletop clutter", parent="grand_desk")
    put("manuscript", 204, 252, layer="Tabletop clutter", parent="grand_desk")
    put("inkpot", 176, 248, layer="Tabletop clutter", parent="grand_desk")
    put("quill", 188, 252, layer="Tabletop clutter", parent="grand_desk")
    put("tea_cup", 244, 252, layer="Tabletop clutter", parent="grand_desk")
    put("wax_seal", 226, 252, layer="Tabletop clutter", parent="grand_desk")
    put("document_stand", 296, 244)
    # Reading table, offset chairs, and a deliberate trail of research.
    put("reading_table", 456, 304)
    put("reading_chair", 472, 256)
    put("reading_chair", 536, 264)
    put("reading_chair", 480, 360, direction="north")
    put("reading_chair", 548, 352, direction="north")
    put("open_book", 476, 312, layer="Tabletop clutter", parent="reading_table")
    put("atlas", 516, 310, layer="Tabletop clutter", parent="reading_table")
    put("three_candelabrum", 548, 278, layer="Tabletop clutter", parent="reading_table")
    put("magnifying_glass", 500, 326, layer="Tabletop clutter", parent="reading_table")
    put("spectacles", 464, 329, layer="Tabletop clutter", parent="reading_table")
    put("two_books", 536, 324, 2, layer="Tabletop clutter", parent="reading_table")
    # Fireside grouping; the rug is an underlay, so no chair legs get painted over.
    put("ornate_rug", 392, 152, layer="Floor details")
    put("burgundy_armchair", 392, 184, direction="east")
    put("leather_wingback", 520, 184, direction="west")
    put("ornate_side_table", 472, 184)
    put("oil_lamp", 472, 181, layer="Tabletop clutter", parent="ornate_side_table")
    put("firewood_basket", 448, 140)
    put("fireplace_tools", 480, 112)
    put("footstool", 448, 244)
    # A second, less formal sitting area with a half-abandoned tea service.
    put("ornate_rug", 168, 432, 1, layer="Floor details")
    put("tufted_sofa", 176, 440)
    put("tea_table", 208, 520)
    put("teapot", 208, 520, layer="Tabletop clutter", parent="tea_table")
    put("tea_cup", 236, 528, layer="Tabletop clutter", parent="tea_table")
    put("closed_book", 224, 512, 1, layer="Tabletop clutter", parent="tea_table")
    put("footstool", 296, 500, 1)
    put("standing_lamp", 144, 424)
    put("chaise_longue", 520, 520, 1)
    put("pedestal_table", 624, 528)
    put("specimen_dome", 624, 525, layer="Tabletop clutter", parent="pedestal_table")
    put("potted_fern", 664, 552, layer="Tabletop clutter", parent="mechanism_bookcase")
    put("secret_desk", 360, 512, state="open")
    put("desk_chair", 392, 572, 1, direction="north")
    put("puzzle_box", 368, 515, state="open", layer="Tabletop clutter", parent="secret_desk")
    put("marked_book", 400, 516, state="open", layer="Tabletop clutter", parent="secret_desk")
    # Archives and curios, breaking up the central circulation space.
    put("revolving_bookcase", 328, 376, 1)
    put("book_display", 192, 368)
    put("terrestrial_globe", 360, 264)
    put("marble_bust", 656, 168)
    put("lectern", 608, 376)
    put("mechanism_bookcase", 640, 568)
    put("wooden_ladder", 776, 496)
    put("telescope", 304, 592)
    put("bench", 440, 592)
    put("scattered_books", 280, 336, 1, layer="Floor clutter")
    put("tall_books", 304, 354, layer="Floor clutter")
    put("loose_papers", 280, 376, layer="Floor clutter")
    put("tied_letters", 70, 358, layer="Tabletop clutter", parent="catalogue_cabinet")
    put("ornamental_clock", 98, 348, layer="Tabletop clutter", parent="catalogue_cabinet")
    return placed


LAYER_ORDER = ("Floor details", "Wall decorations", "Furniture", "Floor clutter", "Tabletop clutter")


def ordered(placed):
    result = []
    for layer in LAYER_ORDER:
        items = [p for p in placed if p["layer"] == layer]
        if layer == "Furniture":
            items.sort(key=lambda p: p["y"]+p["sprite"].anchor[1])
        result.extend(items)
    return result


def render_scene(background, placed, tick=0):
    im = background.copy()
    for p in ordered(placed):
        s = p["sprite"]
        # Static preview selects authored initial frames. The GIF swaps only moving layers.
        image = s.image
        if tick and s.loop:
            candidates = p.get("animation")
            if candidates:
                duration = 200 if s.kind == "grandfather_clock" else 100
                image = candidates[(tick*100//duration)%len(candidates)].image
        im.alpha_composite(image, (p["x"], p["y"]))
    return im
