"""Grid-sized architectural assemblies; split into 32px cells only on export."""
from PIL import ImageDraw
from .materials import COLORS, new, box, stroke, bevel, fleuron

KINDS = ("plain_doorway", "ornate_doorway", "double_doorway", "wood_door_frame",
         "carved_door_frame", "stone_archway", "wood_archway", "tall_window",
         "service_window", "wood_skirting", "stone_skirting", "plaster_cornice",
         "ornate_cornice", "pilaster", "end_cap", "threshold")
SCHEMES = ("wood", "stone", "plaster")
TRIMS = {"wood": ("wood_dark", "wood", "wood_glint"),
         "stone": ("stone_dark", "stone", "stone_light"),
         "plaster": ("ivory_dark", "ivory", "ivory_light")}


def doorway(kind, scheme="wood"):
    w = 128 if kind == "double_doorway" else 64
    im = new((w, 96))
    d = ImageDraw.Draw(im)
    dark, fill, light = TRIMS[scheme]
    frame_only = kind in ("wood_door_frame", "carved_door_frame")
    arched = kind in ("stone_archway", "wood_archway", "ornate_doorway")
    if not frame_only:
        box(d, (12, 26, w-13, 94), "ink")
        if arched:
            d.pieslice((12, 10, w-13, 42), 180, 360, fill=COLORS["ink"])
        else:
            box(d, (12, 16, w-13, 26), "ink")
    for x in (6, w-13):
        bevel(d, (x, 18 if arched else 10, x+6, 94), fill, light)
        stroke(d, [(x+3, 26), (x+3, 87)], dark)
        for y in (26, 87):
            box(d, (x-1, y, x+7, y+3), dark)
            stroke(d, [(x, y), (x+6, y)], light)
    if arched:
        # Nested hard-edge arcs form a structural arch, not a stretched doorway.
        d.arc((6, 4, w-7, 48), 180, 360, fill=COLORS[dark], width=7)
        d.arc((7, 5, w-8, 47), 180, 360, fill=COLORS[light], width=1)
        d.arc((11, 9, w-12, 43), 180, 360, fill=COLORS[fill], width=2)
        for x, y in ((14, 13), (23, 8), (w-24, 8), (w-15, 13)):
            stroke(d, [(x, y), (x+1, y+4)], dark)
        box(d, (w//2-3, 3, w//2+3, 10), dark)
        stroke(d, [(w//2-2, 4), (w//2+2, 4)], light)
    else:
        bevel(d, (3, 6, w-4, 14), fill, light)
        stroke(d, [(7, 10), (w-8, 10)], "brass_dark")
    if kind in ("ornate_doorway", "carved_door_frame"):
        for x in (9, w-10):
            for y in (38, 62):
                stroke(d, [(x, y-4), (x+2, y), (x, y+4), (x-2, y)], "brass_dark")
        for x in range(15, w-14, 7):
            stroke(d, [(x, 14), (x+2, 14)], dark)
    bevel(d, (7, 93, w-8, 95), dark, "brass_dark")
    return im


def window(kind="tall_window", scheme="wood"):
    h = 96 if kind == "tall_window" else 64
    im = new((64, h))
    d = ImageDraw.Draw(im)
    dark, fill, light = TRIMS[scheme]
    bevel(d, (8, 6, 55, h-9), fill, light)
    bevel(d, (13, 11, 50, h-14), "blue_dark", dark)
    for x in (16, 34):
        for y in range(14, h-20, 24):
            box(d, (x, y, x+13, min(y+20, h-18)), "slate")
            stroke(d, [(x+1, y+3), (x+4, y)], "slate_light")
            stroke(d, [(x+6, y+12), (x+10, y+8)], "blue_dark")
    stroke(d, [(31, 12), (31, h-15)], dark)
    stroke(d, [(32, 12), (32, h-15)], light)
    for y in range(36, h-16, 24):
        box(d, (14, y, 49, y+2), dark)
        stroke(d, [(15, y), (48, y)], light)
    bevel(d, (5, h-10, 58, h-5), fill, light)
    if kind == "tall_window":
        fleuron(d, 31, 5, dark, "brass_dark")
    return im


def shared(kind, scheme):
    if kind in KINDS[:7]:
        return doorway(kind, scheme)
    if kind in ("tall_window", "service_window"):
        return window(kind, scheme)
    dark, fill, light = TRIMS[scheme]
    if kind in ("pilaster", "end_cap"):
        im = new((32, 96))
        d = ImageDraw.Draw(im)
        bevel(d, (10, 5, 21, 94), fill, light)
        for x in (13, 17):
            stroke(d, [(x, 14), (x, 81)], dark)
        for y in (3, 9, 84, 91):
            bevel(d, (6, y, 25, y+3), fill, light)
        if kind == "pilaster":
            fleuron(d, 15, 27, dark, "brass_dark")
        return im
    im = new((32, 32))
    d = ImageDraw.Draw(im)
    if kind in ("wood_skirting", "stone_skirting", "threshold"):
        y = 24
        box(d, (0, y, 31, 31), dark)
        stroke(d, [(0, y), (31, y)], light)
        stroke(d, [(0, y+2), (31, y+2)], fill)
        if kind == "threshold":
            stroke(d, [(0, 28), (31, 28)], "brass_dark")
            for x in (4, 27):
                d.point((x, 29), fill=COLORS["brass"])
    else:
        box(d, (0, 0, 31, 7), dark)
        stroke(d, [(0, 0), (31, 0)], light)
        stroke(d, [(0, 3), (31, 3)], fill)
        if kind == "ornate_cornice":
            for x in range(3, 31, 8):
                box(d, (x, 5, x+2, 7), "ink")
                d.point((x, 4), fill=COLORS["brass_dark"])
    return im
