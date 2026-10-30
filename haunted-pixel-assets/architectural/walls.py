"""Three-row facade with independent cutaway sides, corners and openings."""
from PIL import ImageDraw
from .materials import COLORS, WALL_SCHEMES, new, wall_surface, box, stroke, bevel
from .pieces import TRIMS, doorway, window

ROLES = ("upper", "middle", "lower", "surface", "middle_v1", "middle_v2", "middle_v3", "middle_v4",
         "skirting", "cornice", "horizontal_north", "horizontal_south", "vertical_left", "vertical_right",
         "room_nw", "room_ne", "room_sw", "room_se",
         "outer_nw", "outer_ne", "outer_sw", "outer_se",
         "inner_nw", "inner_ne", "inner_sw", "inner_se", "end_left", "end_right",
         "window_0_0", "window_1_0", "window_0_1", "window_1_1", "window_0_2", "window_1_2",
         "door_0_0", "door_1_0", "door_0_1", "door_1_1", "door_0_2", "door_1_2",
         "surround_left_0", "surround_left_1", "surround_left_2",
         "surround_right_0", "surround_right_1", "surround_right_2",
         "header_left", "header_right", "threshold_left", "threshold_right", "wall_to_floor")

# Keep openings rectangular in the source sheet so Tiled can select them as stamps.
OPENING_SLOTS = {f"{feature}_{x}_{y}": origin+x+y*16
                 for feature, origin in (("window", 10), ("door", 12))
                 for y in range(3) for x in range(2)}
_free = iter(i for i in range(64) if i not in OPENING_SLOTS.values())
SLOTS = {role: OPENING_SLOTS[role] if role in OPENING_SLOTS else next(_free) for role in ROLES}


def material_trim(family):
    return "stone" if family in ("brick", "cellar_wall") else "plaster" if family == "plaster" else "wood"


def facade(family, band, variant=0, seed=13):
    im = wall_surface(family, variant, seed)
    d = ImageDraw.Draw(im)
    trim = WALL_SCHEMES[family][3]
    highlight = TRIMS[material_trim(family)][2]
    if family == "wood_panelling":
        full = new((32, 96), "wood_dark")
        fd = ImageDraw.Draw(full)
        bevel(fd, (2, 0, 29, 95), "wood", "wood_light")
        bevel(fd, (5, 10, 26, 85), "wood_dark", "wood")
        stroke(fd, [(9, 77), (9, 25), (15, 16), (22, 25), (22, 77)], "wood_light")
        stroke(fd, [(13, 28), (13, 70)], "wood")
        row = ("upper", "middle", "lower").index(band)
        im = full.crop((0, row*32, 32, row*32+32))
        d = ImageDraw.Draw(im)
    if family == "half_panelling" and band in ("middle", "lower"):
        wainscot = new((32, 48), "wood")
        wd = ImageDraw.Draw(wainscot)
        bevel(wd, (0, 0, 31, 47), "wood", "wood_light")
        bevel(wd, (4, 5, 27, 40), "wood_dark", "wood")
        stroke(wd, [(8, 34), (8, 12), (23, 12)], "wood")
        stroke(wd, [(0, 0), (31, 0)], "brass_dark")
        im.paste(wainscot.crop((0, 0, 32, 16)) if band == "middle" else wainscot.crop((0, 16, 32, 48)),
                 (0, 16 if band == "middle" else 0))
    if band == "upper":
        box(d, (0, 0, 31, 7), trim)
        stroke(d, [(0, 0), (31, 0)], highlight)
        stroke(d, [(0, 3), (31, 3)], "brass_dark")
        if family not in ("plaster", "brick", "cellar_wall"):
            for x in range(3, 31, 8):
                box(d, (x, 5, x+2, 7), "shadow")
    elif band == "lower":
        box(d, (0, 24, 31, 31), trim)
        stroke(d, [(0, 24), (31, 24)], highlight)
        stroke(d, [(0, 27), (31, 27)], "shadow")
        stroke(d, [(0, 31), (31, 31)], "ink")
    return im


def strip(d, orientation, trim):
    if orientation in ("left", "right"):
        x = 24 if orientation == "left" else 0
        box(d, (x, 0, x+7, 31), "ink")
        box(d, (x+1, 0, x+5, 31), trim)
        stroke(d, [(x+1, 0), (x+1, 31)], "wood_light" if trim.startswith("wood") else "stone_light")
    else:
        y = 0 if orientation == "south" else 24
        box(d, (0, y, 31, y+7), "ink")
        box(d, (0, y+1, 31, y+5), trim)
        stroke(d, [(0, y+1), (31, y+1)], "wood_light" if trim.startswith("wood") else "stone_light")


def wall_tiles(family, seed=13):
    tiles = {band: facade(family, band, seed=seed) for band in ("upper", "middle", "lower")}
    tiles["surface"] = wall_surface(family, seed=seed)
    for i in range(1, 5):
        tiles[f"middle_v{i}"] = facade(family, "middle", i, seed)
    trim = WALL_SCHEMES[family][3]
    for name, band in (("skirting", "lower"), ("wall_to_floor", "lower"), ("cornice", "upper")):
        im = new((32, 32))
        y = 24 if band == "lower" else 0
        im.paste(tiles[band].crop((0, y, 32, y+8)), (0, y))
        tiles[name] = im
    for name, orientation in (("horizontal_north", "north"), ("horizontal_south", "south"),
                              ("vertical_left", "left"), ("vertical_right", "right"),
                              ("end_left", "left"), ("end_right", "right")):
        im = new((32, 32))
        d = ImageDraw.Draw(im)
        strip(d, orientation, trim)
        if name.startswith("end"):
            x = 24 if orientation == "left" else 0
            stroke(d, [(x, 0), (x+7, 0)], "brass_dark")
        tiles[name] = im
    for group in ("room", "outer", "inner"):
        for corner in ("nw", "ne", "sw", "se"):
            im = new((32, 32))
            d = ImageDraw.Draw(im)
            left, top = "w" in corner, "n" in corner
            # Room corners occupy the exterior margin of a rectangular room.
            if group == "room":
                x = 24 if left else 0
                strip(d, "left" if left else "right", trim)
                y = 0 if top else 0
                box(d, (x, y, x+7, y+7), trim)
                stroke(d, [(x, y), (x+7, y)], "wood_light" if material_trim(family) == "wood" else "stone_light")
                # South corners only extend upward to the foreground cutaway.
                if not top:
                    im = new((32, 32))
                    d = ImageDraw.Draw(im)
                    box(d, (x, 0, x+7, 7), trim)
                    stroke(d, [(x, 1), (x+7, 1)], "wood_light")
            else:
                # L trims for partition turns: outer occupies edges, inner their inverse.
                x = 0 if left else 24
                y = 0 if top else 24
                if group == "inner":
                    x, y = 24-x, 24-y
                box(d, (x, 0, x+7, 31), trim)
                box(d, (0, y, 31, y+7), trim)
                stroke(d, [(x+1, 0), (x+1, 31)], "wood_light")
                stroke(d, [(0, y+1), (31, y+1)], "wood_light")
            tiles[f"{group}_{corner}"] = im
    # Windows and openings are true two-column / three-row wall assemblies.
    for feature in ("window", "door"):
        assembly = new((64, 96))
        for y, band in enumerate(("upper", "middle", "lower")):
            for x in range(2):
                assembly.alpha_composite(tiles[band], (x*32, y*32))
        if feature == "window":
            assembly.alpha_composite(window("tall_window", material_trim(family)))
        else:
            # Door head starts one row below the cornice, aligned to the finished 64px door.
            portal = doorway("plain_doorway", material_trim(family))
            assembly.alpha_composite(portal.crop((0, 0, 64, 70)), (0, 26))
        for y in range(3):
            for x in range(2):
                tiles[f"{feature}_{x}_{y}"] = assembly.crop((x*32, y*32, x*32+32, y*32+32))
    surround = doorway("wood_door_frame", material_trim(family))
    for y in range(3):
        for x, side in ((0, "left"), (1, "right")):
            part = surround.crop((x*32, y*32, x*32+32, y*32+32))
            tiles[f"surround_{side}_{y}"] = part
    for x, side in ((0, "left"), (1, "right")):
        head = new((32, 32))
        head.paste(surround.crop((x*32, 0, x*32+32, 16)), (0, 0))
        tiles[f"header_{side}"] = head
        foot = new((32, 32))
        foot.paste(surround.crop((x*32, 88, x*32+32, 96)), (0, 24))
        tiles[f"threshold_{side}"] = foot
    assert set(tiles) == set(ROLES)
    return tiles
