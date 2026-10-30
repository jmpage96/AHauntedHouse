"""Casework, desks, upholstery and large library furnishings."""
import random
from PIL import ImageDraw
from generate import bookcase as original_bookcase
from .common import *

SHELVES = ("narrow_bookcase", "double_bookcase", "triple_bookcase", "extra_tall_bookcase",
           "half_bookcase", "corner_bookcase", "glass_bookcase", "built_in_shelving",
           "crowned_bookcase", "empty_bookcase", "partial_bookcase", "overstuffed_bookcase",
           "ornament_bookcase", "locked_cabinet_bookcase", "revolving_bookcase", "book_display")
DESKS = ("grand_desk", "roll_top_desk", "secretary_desk", "writing_bureau", "reading_table",
         "round_reading_table", "ornate_side_table", "pedestal_table", "tea_table", "lectern",
         "document_stand", "open_drawer_desk")
SEATING = ("leather_wingback", "green_armchair", "burgundy_armchair", "reading_chair",
           "desk_chair", "tufted_sofa", "chaise_longue", "footstool", "wooden_stool", "bench")
LARGE = ("rolling_ladder", "wooden_ladder", "library_mantel", "fireplace_grate", "firewood_basket",
         "fireplace_tools", "folding_screen", "display_cabinet", "curiosity_cabinet",
         "catalogue_cabinet", "grandfather_clock", "writing_cabinet")


def shelves(kind, variant=0, seed=13, state="default"):
    if kind == "double_bookcase" and variant == 0:
        return original_bookcase(random.Random(f"{seed}:bookcase"))
    size = {"narrow_bookcase": (32, 96), "triple_bookcase": (96, 96),
            "extra_tall_bookcase": (64, 160), "half_bookcase": (64, 64),
            "corner_bookcase": (96, 96), "built_in_shelving": (128, 128),
            "crowned_bookcase": (96, 128), "revolving_bookcase": (64, 64),
            "book_display": (64, 64)}.get(kind, (64, 96))
    w, h = size
    im = new(size)
    d = ImageDraw.Draw(im)
    finish = variant%3
    dark, wood, light, glint = FINISHES[finish]
    rng = random.Random(f"{seed}:{kind}:{variant}")
    left, right = 5, w-6
    top = 18 if kind == "crowned_bookcase" else 7
    bottom = h-7
    if kind == "revolving_bookcase":
        ellipse(d, (10, 53, 54, 61), dark, "ink")
        box(d, (29, 42, 34, 55), wood)
        left, right, bottom = 9, 54, 49
    if kind == "book_display":
        for x in (12, 47):
            leg(d, x, 37, 61, finish)
        d.polygon([(8, 13), (53, 13), (58, 44), (5, 44)], fill=COLORS[dark])
        stroke(d, [(8, 13), (53, 13)], glint)
        for x, c in ((12, "burgundy"), (33, "forest")):
            closed_book(d, x, 22, 17, 20, c, True)
        bevel(d, (4, 43, 59, 47), wood, light)
        return im
    bevel(d, (left, top, right, bottom), dark, light)
    box(d, (left+4, top+4, right-4, bottom-5), "shadow")
    cabinet = kind in ("double_bookcase", "triple_bookcase", "ornament_bookcase", "locked_cabinet_bookcase",
                       "crowned_bookcase", "corner_bookcase")
    content_bottom = bottom-25 if cabinet else bottom-5
    bays = max(1, w//32)
    if kind == "corner_bookcase":
        bays = 2
        right = 63
        # A shallow return: visible top plane and narrower oblique shelves.
        d.polygon([(64, 10), (87, 20), (87, 85), (64, 87)], fill=COLORS[dark])
        stroke(d, [(64, 10), (87, 20)], glint)
        for yy in (32, 55, 78):
            stroke(d, [(65, yy), (86, yy-2)], light)
            for xx in range(68, 84, 5):
                book(d, xx, yy-3, 4, rng.randrange(10, 17), rng.choice(("burgundy", "purple", "forest_light")))
    for bay in range(bays):
        bx = left+4+bay*(right-left-7)//bays
        br = left+4+(bay+1)*(right-left-7)//bays-2
        for baseline in range(top+26, content_bottom+1, 24):
            x = bx+1
            while x < br-2:
                if kind == "empty_bookcase" or (kind == "partial_bookcase" and rng.random() < .45):
                    x += 9
                    continue
                width = min(rng.randrange(4, 8), br-x)
                height = rng.randrange(12, 20)
                color = rng.choice(("burgundy", "purple", "forest_light", "brass_dark", "wood_light", "slate"))
                if kind == "ornament_bookcase" and rng.random() < .22:
                    ellipse(d, (x, baseline-10, x+6, baseline-1), "brass_dark")
                    box(d, (x+2, baseline-12, x+4, baseline-9), "brass")
                    x += 10
                elif rng.random() < (.35 if kind == "overstuffed_bookcase" else .12) and br-x > 12:
                    for j in range(rng.randrange(2, 4)):
                        closed_book(d, x, baseline-4-j*4, 12, 4, color)
                    x += 14
                else:
                    lean = rng.choice((-2, 0, 0, 1)) if x > bx+3 and x+width < br-3 else 0
                    book(d, x, baseline-1, width, height, color, lean)
                    x += width+rng.choice((0, 1, 2))
            bevel(d, (bx-1, baseline, br+1, baseline+3), wood, light)
        if bay:
            box(d, (bx-3, top+3, bx-1, content_bottom+3), wood)
            stroke(d, [(bx-3, top+4), (bx-3, content_bottom+3)], glint)
    if cabinet:
        for bay in range(bays):
            x = left+4+bay*(right-left-7)//bays
            r = left+4+(bay+1)*(right-left-7)//bays-2
            carved_panel(d, (x, bottom-21, r, bottom-3), finish, True)
            d.point((r-3, bottom-12), fill=COLORS["brass"])
        if kind == "locked_cabinet_bookcase":
            box(d, (w//2-2, bottom-15, w//2+2, bottom-10), "brass_dark")
            d.point((w//2, bottom-13), fill=COLORS["ink"])
    for x in (left, right-2):
        box(d, (x, top+3, x+2, bottom), wood)
        stroke(d, [(x, top+4), (x, bottom-1)], glint)
        for yy in (top+3, bottom-3):
            stroke(d, [(x-1, yy), (x+3, yy)], light)
    bevel(d, (left-2, top, (w-4 if kind == "corner_bookcase" else right+2), top+4), wood, glint)
    if kind == "crowned_bookcase":
        d.polygon([(8, 17), (13, 11), (33, 11), (47, 3), (62, 11), (81, 11), (87, 17)], fill=COLORS[wood])
        stroke(d, [(14, 12), (35, 12), (47, 5), (60, 12), (80, 12)], glint)
        fleuron(d, 47, 15, dark, "brass_dark")
    if kind == "glass_bookcase":
        for x in (left+3, w//2):
            d.rectangle((x, top+4, x+(w-14)//2, bottom-2), outline=COLORS[wood])
            stroke(d, [(x+4, top+15), (x+10, top+8)], "slate_light")
            stroke(d, [(x+11, top+33), (x+17, top+26)], "slate")
            d.point((x+20, h//2), fill=COLORS["brass"])
    for x in (left+1, right-6):
        leg(d, x, bottom, min(bottom+5, h-2), finish)
    return im


def desk(kind, variant=0, direction="south", state="default"):
    size = {"grand_desk": (96, 64), "roll_top_desk": (96, 96), "secretary_desk": (64, 128),
            "writing_bureau": (64, 64), "reading_table": (128, 64), "round_reading_table": (64, 64),
            "ornate_side_table": (32, 64), "pedestal_table": (32, 64), "tea_table": (64, 64),
            "lectern": (32, 64), "document_stand": (32, 64), "open_drawer_desk": (96, 64)}[kind]
    # A side-facing desk has its own narrower top and visible side panel.
    if direction in ("east", "west") and kind in ("grand_desk", "reading_table", "writing_bureau"):
        size = (64, 96 if kind == "reading_table" else 64)
    w, h = size
    im = new(size)
    d = ImageDraw.Draw(im)
    dark, wood, light, glint = FINISHES[variant%3]
    if kind in ("lectern", "document_stand"):
        ellipse(d, (6, h-9, 26, h-3), dark, "ink")
        box(d, (14, 26, 18, h-7), wood)
        stroke(d, [(14, 27), (14, h-9)], light)
        d.polygon([(5, 9), (25, 9), (29, 30), (3, 30)], fill=COLORS[dark])
        d.polygon([(6, 10), (24, 10), (27, 27), (5, 27)], fill=COLORS[wood])
        stroke(d, [(6, 10), (24, 10)], glint)
        if kind == "lectern":
            open_book(d, 7, 15, 18, 10)
        else:
            bevel(d, (9, 15, 23, 25), "ivory", "ivory_light")
            stroke(d, [(12, 19), (20, 19)], "ivory_dark")
        bevel(d, (2, 28, 29, 31), wood, light)
        return im
    pedestal = kind in ("round_reading_table", "pedestal_table", "ornate_side_table", "tea_table")
    if pedestal:
        cx = w//2
        surface_bottom = 7+max(10, (w-6)//2)
        if kind == "tea_table":
            for xx in (12, w-17):
                leg(d, xx, surface_bottom+2, h-5, variant%3)
        else:
            for dx in (-9, 8):
                stroke(d, [(cx, h-20), (cx+dx, h-5), (cx+dx+4, h-4)], dark)
            leg(d, cx-1, surface_bottom+3, h-7, variant%3)
        ellipse(d, (3, 9, w-4, surface_bottom+3), dark, "ink")
        ellipse(d, (3, 7, w-4, surface_bottom), wood, light)
        d.arc((6, 9, w-7, surface_bottom-2), 185, 280, fill=COLORS[glint])
        if kind == "ornate_side_table":
            fleuron(d, cx, 18, dark, "brass_dark")
        return im
    top = 8
    if kind == "roll_top_desk":
        top = 39
        d.rounded_rectangle((5, 5, w-6, 47), radius=13, fill=COLORS[dark], outline=COLORS["ink"])
        for yy in range(9, 38, 4):
            stroke(d, [(12, yy), (w-13, yy)], light)
            stroke(d, [(12, yy+1), (w-13, yy+1)], wood)
        box(d, (12, 36, w-13, 46), "shadow")
        for x in range(18, w-18, 15):
            box(d, (x, 36, x+1, 44), wood)
    elif kind == "secretary_desk":
        top = 77
        bevel(d, (7, 6, w-8, 78), dark, light)
        for x in (11, 34):
            carved_panel(d, (x, 12, x+18, 65), variant%3, True)
            d.point((x+13, 45), fill=COLORS["brass"])
        bevel(d, (5, 5, w-6, 10), wood, glint)
    for x in (8, w-13):
        leg(d, x, h-26, h-3, variant%3)
    top_bottom = h-28
    bevel(d, (4, top, w-5, top_bottom+3), dark, light)
    box(d, (6, top+1, w-7, top_bottom-2), wood)
    stroke(d, [(7, top+2), (w-9, top+2)], glint)
    for yy in range(top+7, top_bottom-3, 8):
        stroke(d, [(10, yy), (w//2-4, yy)], dark)
    if kind in ("grand_desk", "open_drawer_desk", "writing_bureau"):
        bevel(d, (w//3, top+5, w*2//3+4, top_bottom-4), "forest", "forest_light")
        for x in (9, w-15):
            stroke(d, [(x, top+7), (x, top+4), (x+4, top+4)], "brass_dark")
    if kind not in ("reading_table",):
        if direction == "north":
            carved_panel(d, (7, top_bottom+4, w-8, h-9), variant%3)
            stroke(d, [(12, h-13), (w-13, h-13)], wood)
        elif direction in ("east", "west"):
            carved_panel(d, (7, top_bottom+4, w-8, h-9), variant%3, True)
            drawer(d, (6 if direction == "west" else w-24, top_bottom+4,
                       23 if direction == "west" else w-7, h-12), variant%3)
        else:
            for x in (8, w-29):
                for yy in range(top_bottom+5, h-10, 8):
                    drawer(d, (x, yy, x+20, min(yy+7, h-10)), variant%3)
            if w >= 90:
                stroke(d, [(33, top_bottom+6), (w//2, top_bottom+9), (w-34, top_bottom+6)], light)
            if kind == "open_drawer_desk" or state == "open":
                bevel(d, (9, h-17, 31, h-5), dark, light)
                box(d, (12, h-16, 28, h-11), "shadow")
                box(d, (14, h-15, 24, h-12), "ivory_dark")
                stroke(d, [(17, h-6), (23, h-6)], "brass")
    else:
        stroke(d, [(10, h-12), (w-11, h-12)], dark)
    return im


def seating(kind, variant=0, direction="south"):
    size = {"tufted_sofa": (128, 64), "chaise_longue": (96, 64), "bench": (96, 64),
            "footstool": (32, 32), "wooden_stool": (32, 32), "reading_chair": (32, 64),
            "desk_chair": (32, 64)}.get(kind, (64, 64))
    if direction in ("east", "west") and kind in ("tufted_sofa", "chaise_longue", "bench"):
        size = (32 if kind == "bench" else 64, 96)
    w, h = size
    im = new(size)
    d = ImageDraw.Draw(im)
    fabric = {"leather_wingback": "leather", "green_armchair": "green", "burgundy_armchair": "burgundy"}.get(kind,
             "burgundy" if variant == 0 else "green")
    if variant and kind in ("green_armchair", "burgundy_armchair", "leather_wingback"):
        fabric = "plum"
    dark, fill, light = FABRICS[fabric]
    wooden = kind in ("reading_chair", "wooden_stool")
    for x in (7, w-12):
        leg(d, x, h-20, h-3, 0)
    if kind in ("footstool", "wooden_stool"):
        if wooden:
            ellipse(d, (4, 4, 27, 20), "wood_dark", "ink")
            ellipse(d, (4, 3, 27, 17), "wood", "wood_light")
            stroke(d, [(10, 7), (23, 7)], "wood_dark")
        else:
            tuft(d, (3, 3, 28, 21), fabric)
            stroke(d, [(5, 20), (26, 20)], "brass_dark")
        return im
    side = direction in ("east", "west")
    if side:
        if kind == "bench":
            for xx in (7, 22):
                for yy in (16, h-15):
                    leg(d, xx, yy, yy+9)
            bevel(d, (5, 9, w-6, h-16), "wood_dark", "wood_light")
            tuft(d, (8, 12, w-9, h-20), fabric)
            return im
        if kind in ("tufted_sofa", "chaise_longue"):
            bx = 7 if direction == "east" else w-21
            bevel(d, (bx, 10, bx+13, h-15), "wood_dark", "wood_glint")
            tuft(d, (bx+2, 13, bx+10, h-21), fabric)
            sx = 22 if direction == "east" else 10
            tuft(d, (sx, 20, sx+29, h-20), fabric, 12)
            for yy in (17, h-25):
                bevel(d, (6, yy, w-6, yy+8), dark, light)
                ellipse(d, (7, yy-3, w-7, yy+4), fill, light)
            if kind == "chaise_longue":
                tuft(d, (sx+2, 24, sx+26, 42), fabric)
            return im
        # Draw the back at its actual side, keeping highlights on screen-left.
        bx = 7 if direction == "east" else w-22
        back_width = 14 if not wooden else 10
        bevel(d, (bx, 7, bx+back_width, h-20), "wood_dark", "wood_light")
        if not wooden:
            tuft(d, (bx+2, 10, bx+back_width-2, h-24), fabric)
        else:
            for yy in range(13, h-22, 8):
                stroke(d, [(bx+2, yy), (bx+8, yy)], "wood_glint")
        bevel(d, (8, h-30, w-8, h-15), "wood", "wood_light")
        if not wooden:
            tuft(d, (11, h-29, w-10, h-18), fabric)
            tuft(d, (12, h-21, w-11, h-13), fabric, 12)
            bevel(d, (6, h-28, w-6, h-23), dark, light)
            ellipse(d, (7, h-31, w-7, h-25), fill, light)
            stroke(d, [(11, h-13), (w-12, h-13)], "brass_dark")
        return im
    back_y = 5 if kind != "chaise_longue" else 13
    if kind != "bench":
        bevel(d, (7, back_y, w-8, h-23), "wood_dark", "wood_glint")
        if direction == "north":
            # Exposed carved timber back, not a vertically flipped seat cushion.
            carved_panel(d, (10, back_y+3, w-11, h-22), 0, kind == "desk_chair")
            if w > 50:
                fleuron(d, w//2, 18, "wood", "wood_light")
        elif wooden:
            for x in range(12, w-9, 5):
                stroke(d, [(x, 10), (x, h-26)], "wood_light")
        else:
            tuft(d, (10, back_y+3, w-11, h-25), fabric)
            if kind == "leather_wingback":
                for x in (5, w-13):
                    tuft(d, (x, 10, x+7, h-28), fabric, 12)
    bevel(d, (6, h-28, w-7, h-13), "wood_dark", "wood_light")
    if wooden:
        bevel(d, (9, h-27, w-10, h-17), "wood", "wood_light")
    else:
        tuft(d, (9, h-28, w-10, h-17), fabric, 10)
        for x in (4, w-13):
            bevel(d, (x, h-32, x+8, h-15), dark, light)
            ellipse(d, (x, h-34, x+8, h-28), fill, light)
    if kind == "chaise_longue":
        tuft(d, (8, 8, 27, 35), fabric)
        ellipse(d, (8, 5, 27, 17), fill, light)
        for x in range(32, w-20, 13):
            stroke(d, [(x, h-27), (x+2, h-20)], dark)
    if kind == "tufted_sofa":
        for x in (43, 82):
            stroke(d, [(x, h-27), (x, h-18)], dark)
        stroke(d, [(9, h-12), (w-10, h-12)], "brass_dark")
    return im


def large(kind, variant=0, seed=13):
    if kind in ("display_cabinet", "curiosity_cabinet", "writing_cabinet"):
        if kind == "writing_cabinet":
            im = new((96, 128))
            d = ImageDraw.Draw(im)
            bevel(d, (6, 7, 89, 119), "wood_dark", "wood_light")
            bevel(d, (4, 5, 91, 11), "wood", "wood_glint")
            for yy in (17, 40):
                for xx in (12, 37, 62):
                    bevel(d, (xx, yy, xx+21, yy+20), "shadow", "wood")
                    if (xx+yy)%3:
                        for j in range(3):
                            closed_book(d, xx+3, yy+13-j*3, 14, 4, "ivory_dark")
                    else:
                        book(d, xx+5, yy+17, 5, 13, "burgundy")
            bevel(d, (4, 68, 91, 82), "wood", "wood_glint")
            for yy in (87, 101):
                for xx in (11, 38, 65):
                    drawer(d, (xx, yy, xx+21, yy+11), variant%3, True)
            for xx in (10, 81):
                leg(d, xx, 117, 125, variant%3)
            return im
        im = shelves("glass_bookcase" if kind == "display_cabinet" else "extra_tall_bookcase", variant, seed)
        d = ImageDraw.Draw(im)
        w, h = im.size
        # Replace some bays with specimen silhouettes, rather than more book spines.
        for row, yy in enumerate(range(13, h-25, 24)):
            box(d, (13, yy+1, w-14, yy+18), "shadow")
            motif = (row+variant)%4
            if motif == 0:  # cameo bust and stoppered chemical flask
                ellipse(d, (19, yy+4, 25, yy+11), "ivory_dark", "ivory")
                d.polygon([(17, yy+16), (19, yy+11), (25, yy+11), (28, yy+16)], fill=COLORS["ivory_dark"])
                ellipse(d, (36, yy+8, 45, yy+17), "forest", "sage")
                box(d, (39, yy+4, 42, yy+10), "slate")
                stroke(d, [(39, yy+4), (42, yy+4)], "brass_dark")
            elif motif == 1:  # mounted butterfly and a small terrestrial globe
                bevel(d, (16, yy+3, 29, yy+17), "ivory_dark", "wood_light")
                for dx in (19, 24):
                    ellipse(d, (dx, yy+7, dx+3, yy+12), "terra")
                stroke(d, [(23, yy+6), (23, yy+13)], "ink")
                ellipse(d, (36, yy+4, 46, yy+14), "slate", "brass_dark")
                stroke(d, [(38, yy+8), (43, yy+6), (42, yy+10)], "sage")
                stroke(d, [(41, yy+15), (41, yy+17)], "brass_dark")
            elif motif == 2:  # tiny hourglass and a specimen under glass
                for y0 in (yy+3, yy+16):
                    stroke(d, [(17, y0), (28, y0)], "brass")
                stroke(d, [(19, yy+4), (25, yy+15), (19, yy+15), (25, yy+4)], "ivory_dark")
                d.arc((35, yy+2, 47, yy+23), 180, 360, fill=COLORS["slate_light"])
                stroke(d, [(35, yy+12), (35, yy+17), (47, yy+17), (47, yy+12)], "slate")
                stroke(d, [(41, yy+16), (39, yy+10), (43, yy+8)], "forest_light")
            else:  # a bronze bird and a faceted plum mineral
                ellipse(d, (19, yy+8, 27, yy+13), "brass_dark")
                ellipse(d, (25, yy+5, 29, yy+9), "brass")
                stroke(d, [(21, yy+12), (17, yy+16)], "wood_light")
                d.polygon([(36, yy+16), (38, yy+5), (42, yy+3), (47, yy+14), (45, yy+17)], fill=COLORS["purple"])
                stroke(d, [(42, yy+4), (41, yy+14)], "slate_light")
            stroke(d, [(35, yy+17), (47, yy+17)], "brass_dark")
            stroke(d, [(16, yy+4), (22, yy+1)], "slate_light")
        stroke(d, [(31, 15), (31, h-10)], "wood_light")
        for xx in (10, 52):
            stroke(d, [(xx, 14), (xx, h-10)], "wood")
        for xx in (28, 34):
            d.point((xx, h//2), fill=COLORS["brass"])
        return im
    size = {"rolling_ladder": (32, 128), "wooden_ladder": (32, 96), "catalogue_cabinet": (96, 96),
            "folding_screen": (96, 96), "fireplace_grate": (64, 32), "firewood_basket": (32, 32),
            "fireplace_tools": (32, 64)}[kind]
    im = new(size)
    d = ImageDraw.Draw(im)
    w, h = size
    if "ladder" in kind:
        for x in (8, 22):
            stroke(d, [(x+3, 5), (x-3, h-9)], "ink")
            stroke(d, [(x+2, 5), (x-4, h-9)], "wood_light")
        for yy in range(14, h-12, 12):
            offset = (yy-5)*6//(h-14)
            bevel(d, (9-offset, yy, 23-offset, yy+3), "wood", "wood_glint")
        if kind == "rolling_ladder":
            stroke(d, [(3, 7), (28, 7)], "brass_dark")
            for x in (6, 21):
                ellipse(d, (x-3, h-9, x+3, h-3), "ink", "brass_dark")
        return im
    if kind == "catalogue_cabinet":
        bevel(d, (4, 6, 91, 88), "wood_dark", "wood_light")
        bevel(d, (2, 4, 93, 9), "wood", "wood_glint")
        for yy in range(13, 80, 13):
            for xx in range(9, 86, 19):
                drawer(d, (xx, yy, xx+16, yy+11), variant%3, True)
        for xx in (7, 83):
            leg(d, xx, 87, 93, variant%3)
    elif kind == "folding_screen":
        for i in range(3):
            x, off = 3+i*30, (5 if i == 1 else 0)
            carved_panel(d, (x, 6+off, x+27, 88+off), variant%3, True)
            tuft(d, (x+6, 24+off, x+21, 77+off), "green" if variant else "burgundy", 12)
            for yy in (27, 69):
                box(d, (x+27, yy, x+29, yy+4), "brass_dark")
    elif kind == "fireplace_grate":
        stroke(d, [(7, 19), (56, 19)], "charcoal_light")
        for xx in range(10, 56, 8):
            stroke(d, [(xx, 7), (xx, 26)], "ink")
            d.point((xx, 7), fill=COLORS["brass_dark"])
    elif kind == "firewood_basket":
        ellipse(d, (5, 12, 27, 29), "wood_dark", "ink")
        for yy in range(18, 28, 3):
            stroke(d, [(7, yy), (25, yy)], "wood_light")
        for xx, yy in ((6, 9), (14, 7), (20, 11)):
            bevel(d, (xx, yy, xx+5, yy+12), "wood", "wood_glint")
    else:
        ellipse(d, (7, 54, 26, 61), "brass_dark", "ink")
        stroke(d, [(16, 9), (16, 56)], "brass")
        stroke(d, [(6, 13), (26, 13)], "brass_dark")
        for xx in (8, 16, 24):
            stroke(d, [(xx, 15), (xx, 51)], "ink")
            ellipse(d, (xx-2, 13, xx+2, 17), "brass_dark")
        box(d, (6, 44, 10, 51), "charcoal_light")
    return im
