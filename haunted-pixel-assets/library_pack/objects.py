"""Small readable curios, paper, brass instruments and compatible light layers."""
import random
from PIL import ImageDraw
from animate import Animation, flame, candelabra, clock, fireplace, portrait
from .common import *

LIGHTING = ("banker_lamp", "brass_desk_lamp", "oil_lamp", "candle_holder", "three_candelabrum",
            "five_candelabrum", "wall_sconce", "standing_lamp", "chandelier", "reading_lamp")
CLUTTER = ("closed_book", "open_book", "two_books", "tall_books", "scattered_books", "journal", "atlas", "ancient_tome",
           "parchment", "tied_letters", "loose_papers", "manuscript", "inkpot", "quill", "magnifying_glass",
           "letter_opener", "bookends", "spectacles", "wax_seal", "document_box", "bookmark", "tea_cup", "teapot", "paperweight")
DECOR = ("terrestrial_globe", "celestial_globe", "marble_bust", "bronze_bust", "wall_mirror", "framed_portrait",
         "botanical_print", "antique_map", "butterfly_display", "specimen_dome", "ceramic_vase", "telescope", "hourglass",
         "ornamental_clock", "certificate", "taxidermy_bird", "urn", "potted_fern", "velvet_curtain", "ornate_rug")
MYSTERY = ("mechanism_bookcase", "locked_bookcase", "marked_book", "hidden_safe", "puzzle_box", "brass_device",
           "secret_desk", "odd_bookcase")


def paper(d, x, y, w=17, h=21, script=False):
    box(d, (x, y, x+w, y+h), "ivory_dark")
    box(d, (x+1, y, x+w-1, y+h-1), "ivory")
    d.polygon([(x+w-4, y), (x+w, y+4), (x+w-4, y+4)], fill=COLORS["ivory_light"])
    for yy in range(y+5, y+h-2, 3):
        length = w-5-(yy%3)*2
        stroke(d, [(x+3, yy), (x+length, yy)], "ivory_dark")
        if script:
            stroke(d, [(x+4, yy-1), (x+6, yy+1), (x+9, yy)], "wood_light")


def clutter(kind, variant=0):
    im = new((32, 32))
    d = ImageDraw.Draw(im)
    c = ("burgundy", "forest", "purple")[variant%3]
    if kind in ("closed_book", "journal", "atlas", "ancient_tome"):
        w, h = (25, 19) if kind == "atlas" else (22, 21) if kind == "ancient_tome" else (17, 23) if kind == "journal" else (20, 14)
        x, y = (32-w)//2, (32-h)//2
        closed_book(d, x, y, w, h, c, kind != "closed_book")
        if kind == "atlas":
            ellipse(d, (11, 10, 22, 21), "brass_dark")
            stroke(d, [(16, 11), (16, 20)], c)
            stroke(d, [(12, 15), (21, 15)], c)
        if kind == "ancient_tome":
            for xx, yy in ((x+1, y+1), (x+w-3, y+1), (x+1, y+h-6), (x+w-3, y+h-6)):
                box(d, (xx, yy, xx+1, yy+1), "brass")
            box(d, (x+w-4, y+h//2, x+w-1, y+h//2+2), "brass_dark")
        if kind == "journal":
            stroke(d, [(x+w-5, y+1), (x+w-5, y+h-4)], "wood_dark")
            d.point((x+w-4, y+10), fill=COLORS["brass"])
    elif kind == "open_book":
        open_book(d, 3, 7, 26, 17)
        stroke(d, [(17, 20), (17, 27)], "burgundy")
    elif kind in ("two_books", "tall_books", "scattered_books"):
        if kind == "scattered_books":
            closed_book(d, 3, 16, 19, 12, c)
            closed_book(d, 13, 4, 15, 18, "purple", True)
        else:
            count = 2 if kind == "two_books" else 5
            for i in range(count):
                closed_book(d, 5+i%2*2, 24-i*4, 21-i%3, 5, (c, "wood_light", "slate")[i%3], i == count-1)
    elif kind in ("loose_papers", "manuscript", "tied_letters"):
        if kind == "loose_papers":
            paper(d, 3, 8, 18, 20)
            paper(d, 10, 3, 18, 20)
        elif kind == "manuscript":
            paper(d, 5, 5, 21, 23, True)
            stroke(d, [(8, 9), (16, 9)], "wood_dark")
        else:
            for yy in (13, 10, 7):
                bevel(d, (4, yy, 27, yy+12), "ivory", "ivory_light")
            stroke(d, [(4, 12), (15, 17), (27, 12)], "ivory_dark")
            stroke(d, [(15, 7), (15, 24)], "wood_light")
            stroke(d, [(5, 15), (26, 15)], "wood_light")
            ellipse(d, (12, 13, 17, 17), "burgundy")
    elif kind == "parchment":
        box(d, (5, 10, 26, 23), "ivory")
        for xx in (5, 25):
            ellipse(d, (xx-2, 8, xx+2, 25), "ivory_dark", "wood_light")
        stroke(d, [(10, 14), (21, 14)], "ivory_dark")
        stroke(d, [(10, 18), (19, 18)], "ivory_dark")
        stroke(d, [(16, 10), (16, 23)], "burgundy")
    elif kind == "inkpot":
        ellipse(d, (10, 16, 22, 25), "ink", "purple")
        box(d, (12, 12, 20, 20), "ink")
        ellipse(d, (12, 11, 20, 15), "brass_dark", "brass")
        stroke(d, [(12, 17), (12, 20)], "slate_light")
    elif kind == "quill":
        d.polygon([(7, 23), (11, 12), (22, 4), (25, 5), (24, 11), (17, 20)], fill=COLORS["ivory_dark"])
        stroke(d, [(6, 28), (23, 6)], "ivory_light")
        for x, y in ((12, 18), (16, 13), (20, 8)):
            stroke(d, [(x, y), (x+5, y-1)], "ivory")
    elif kind == "magnifying_glass":
        ellipse(d, (6, 4, 21, 19), "brass_dark", "brass")
        ellipse(d, (8, 6, 19, 17), "blue_dark")
        stroke(d, [(10, 11), (14, 7)], "slate_light")
        stroke(d, [(18, 18), (25, 26)], "wood_light")
        stroke(d, [(19, 18), (26, 25)], "wood_dark")
    elif kind == "letter_opener":
        d.polygon([(5, 25), (18, 10), (26, 5), (21, 13), (8, 27)], fill=COLORS["brass_dark"])
        stroke(d, [(10, 23), (24, 7)], "brass")
        stroke(d, [(6, 24), (10, 28)], "wood_dark")
    elif kind == "bookends":
        for x in (4, 22):
            box(d, (x, 10, x+3, 25), "brass_dark")
            stroke(d, [(x, 25), (x+6, 25)], "brass")
            ellipse(d, (x-1, 6, x+4, 12), "wood_dark", "wood_light")
    elif kind == "spectacles":
        for x in (4, 18):
            d.ellipse((x, 13, x+9, 21), outline=COLORS["brass_dark"])
            d.point((x+2, 14), fill=COLORS["brass"])
        stroke(d, [(13, 16), (18, 16)], "brass_dark")
        stroke(d, [(5, 13), (9, 7)], "brass_dark")
        stroke(d, [(26, 13), (29, 8)], "brass_dark")
    elif kind == "wax_seal":
        ellipse(d, (5, 20, 16, 27), "burgundy_dark", "burgundy_light")
        d.point((10, 23), fill=COLORS["brass_dark"])
        ellipse(d, (21, 9, 27, 18), "wood", "wood_light")
        box(d, (23, 18, 25, 22), "brass")
        ellipse(d, (20, 22, 28, 25), "brass_dark")
    elif kind == "document_box":
        bevel(d, (4, 10, 27, 25), "wood_dark", "wood_light")
        bevel(d, (4, 7, 27, 17), "wood", "wood_glint")
        box(d, (14, 16, 17, 20), "brass_dark")
        d.point((15, 17), fill=COLORS["brass"])
    elif kind == "bookmark":
        d.polygon([(12, 4), (19, 4), (19, 26), (16, 23), (12, 26)], fill=COLORS[c])
        stroke(d, [(14, 6), (17, 6)], "brass")
        stroke(d, [(15, 4), (15, 2)], "brass_dark")
    elif kind == "tea_cup":
        ellipse(d, (5, 15, 27, 26), "ivory_dark", "ivory")
        ellipse(d, (10, 11, 23, 22), "ivory")
        ellipse(d, (11, 10, 22, 16), "wood_dark", "brass_dark")
        d.arc((20, 13, 28, 20), 270, 90, fill=COLORS["ivory_light"], width=2)
        stroke(d, [(12, 18), (12, 20)], "ivory_light")
    elif kind == "teapot":
        ellipse(d, (10, 10, 24, 26), "ivory_dark", "ivory")
        d.polygon([(11, 15), (5, 10), (3, 10), (6, 20), (12, 22)], fill=COLORS["ivory"])
        d.arc((21, 11, 30, 23), 270, 90, fill=COLORS["ivory_dark"], width=2)
        ellipse(d, (11, 8, 23, 13), "ivory")
        ellipse(d, (15, 5, 19, 9), "brass_dark")
        flower(d, 16, 18, "rose", "forest_light")
    else:
        ellipse(d, (8, 15, 24, 26), "brass_dark", "ink")
        ellipse(d, (10, 12, 22, 22), "brass")
        stroke(d, [(12, 14), (17, 14)], "gold")
        d.point((16, 20), fill=COLORS["wood_dark"])
    return im


def decor(kind, variant=0):
    size = {"terrestrial_globe": (32, 64), "celestial_globe": (32, 64), "marble_bust": (32, 64),
            "bronze_bust": (32, 64), "wall_mirror": (64, 96), "framed_portrait": (64, 64),
            "botanical_print": (32, 64), "antique_map": (64, 64), "butterfly_display": (32, 32),
            "specimen_dome": (32, 32), "telescope": (64, 64), "velvet_curtain": (64, 128),
            "ornate_rug": (160, 128)}.get(kind, (32, 32))
    im = new(size)
    d = ImageDraw.Draw(im)
    w, h = size
    c = "burgundy" if variant == 0 else "forest_light"
    if kind.endswith("globe"):
        for x in (7, 24):
            stroke(d, [(16, 43), (x, 60)], "wood_dark")
        leg(d, 15, 31, 56)
        d.arc((1, 7, 29, 39), 45, 240, fill=COLORS["brass"], width=2)
        ellipse(d, (5, 9, 27, 33), "slate" if kind == "celestial_globe" else "forest", "brass_dark")
        if kind == "terrestrial_globe":
            for points in ([(9, 14), (14, 12), (16, 17), (12, 19), (13, 24), (9, 22)],
                           [(19, 22), (23, 19), (25, 24), (20, 29)]):
                d.polygon(points, fill=COLORS["ivory_dark"])
        else:
            for x, y in ((11, 14), (19, 13), (20, 25), (13, 28), (8, 23)):
                d.point((x, y), fill=COLORS["gold"])
            stroke(d, [(11, 14), (19, 13), (20, 25)], "brass_dark")
        d.arc((8, 10, 24, 32), 90, 270, fill=COLORS["brass_dark"])
        stroke(d, [(6, 21), (25, 21)], "brass_dark")
        bevel(d, (8, 59, 25, 62), "wood", "wood_light")
    elif kind.endswith("bust"):
        stone = "ivory" if kind == "marble_bust" else "brass_dark"
        highlight = "ivory_light" if kind == "marble_bust" else "brass"
        bevel(d, (8, 40, 25, 60), "stone_dark", "stone_light")
        bevel(d, (6, 37, 27, 42), "stone", "stone_light")
        d.polygon([(7, 35), (9, 27), (14, 24), (14, 20), (21, 20), (21, 25), (26, 30), (27, 35)], fill=COLORS[stone])
        ellipse(d, (11, 7, 24, 24), stone, "stone_dark")
        stroke(d, [(13, 10), (13, 17), (15, 21)], highlight)
        stroke(d, [(14, 9), (20, 8), (23, 12)], "stone_dark")
        stroke(d, [(16, 27), (12, 31), (18, 35)], highlight)
        d.point((20, 15), fill=COLORS["wood_dark"])
    elif kind in ("wall_mirror", "framed_portrait", "botanical_print", "antique_map", "butterfly_display", "certificate"):
        if kind == "framed_portrait":
            im.alpha_composite(portrait().frames[0], (12, 8))
            return im
        bevel(d, (3, 4, w-4, h-4), "wood_dark", "wood_glint")
        bevel(d, (6, 7, w-7, h-7), "brass_dark", "brass")
        box(d, (9, 10, w-10, h-10), "slate" if kind == "wall_mirror" else "ivory_dark")
        if kind == "wall_mirror":
            d.polygon([(12, 13), (w-13, 13), (12, h-20)], fill=COLORS["slate_light"])
            stroke(d, [(15, h-29), (w-15, 25)], "dust")
            fleuron(d, w//2, 7, "wood", "brass_dark")
        elif kind == "botanical_print":
            for yy in (23, 39):
                flower(d, 16, yy, "rose", "forest")
            stroke(d, [(12, 52), (21, 52)], "wood_light")
        elif kind == "antique_map":
            for points in ([(13, 18), (23, 15), (32, 22), (26, 32), (16, 29)],
                           [(36, 31), (49, 22), (51, 42), (40, 48)]):
                d.polygon(points, fill=COLORS["sage"])
            for yy in range(14, 52, 8):
                stroke(d, [(11, yy), (52, yy)], "stone_light")
            for xx in range(16, 52, 10):
                stroke(d, [(xx, 12), (xx, 52)], "stone_light")
            stroke(d, [(47, 16), (47, 24)], "wood_dark")
            stroke(d, [(43, 20), (51, 20)], "wood_dark")
        elif kind == "butterfly_display":
            for x in (13, 21):
                ellipse(d, (x-3, 13, x, 18), "burgundy")
                ellipse(d, (x+1, 13, x+4, 18), "terra")
                stroke(d, [(x+1, 14), (x+1, 20)], "wood_dark")
        else:
            for yy in range(13, 23, 3):
                stroke(d, [(11, yy), (21, yy)], "wood_light")
            ellipse(d, (18, 22, 23, 26), "burgundy")
    elif kind == "velvet_curtain":
        stroke(d, [(3, 6), (60, 6)], "brass_dark")
        for x, sign in ((5, 1), (58, -1)):
            d.polygon([(x, 8), (x+sign*20, 8), (x+sign*12, 58), (x+sign*19, 118), (x, 123)], fill=COLORS[c])
            for dx in (4, 10, 15):
                stroke(d, [(x+sign*dx, 12), (x+sign*6, 60), (x+sign*dx, 116)], "burgundy_dark" if variant == 0 else "forest")
            stroke(d, [(x, 60), (x+sign*12, 62)], "brass")
        for x in (3, 59):
            ellipse(d, (x-2, 3, x+2, 8), "brass")
    elif kind == "ornate_rug":
        d.rounded_rectangle((3, 4, w-4, h-5), radius=5, fill=COLORS["burgundy_dark" if not variant else "forest"])
        for inset, color in ((7, "brass_dark"), (10, "burgundy_light"), (16, "brass_dark")):
            d.rectangle((inset, inset, w-inset-1, h-inset-1), outline=COLORS[color])
        d.polygon([(w//2, 28), (w-32, h//2), (w//2, h-29), (31, h//2)], outline=COLORS["rose"])
        for x, y in ((25, 25), (w-26, 25), (25, h-26), (w-26, h-26), (w//2, h//2)):
            fleuron(d, x, y, "burgundy" if not variant else "forest_light", "brass_dark")
        for x in range(9, w-9, 5):
            stroke(d, [(x, 1), (x, 3)], "brass_dark")
            stroke(d, [(x, h-4), (x, h-2)], "brass_dark")
    elif kind == "telescope":
        for x in (11, 48):
            stroke(d, [(31, 28), (x, 60)], "wood_light")
            stroke(d, [(32, 29), (x+1, 60)], "wood_dark")
        stroke(d, [(32, 31), (31, 60)], "brass_dark")
        d.polygon([(12, 27), (45, 10), (50, 18), (17, 34)], fill=COLORS["brass_dark"])
        stroke(d, [(13, 27), (45, 11)], "brass")
        ellipse(d, (43, 9, 51, 18), "blue_dark", "brass")
        stroke(d, [(17, 29), (21, 33)], "wood_dark")
    elif kind == "potted_fern":
        d.polygon([(10, 22), (24, 22), (22, 29), (12, 29)], fill=COLORS["terra_dark"])
        stroke(d, [(10, 22), (24, 22)], "terra")
        for tx, ty in ((5, 7), (11, 4), (18, 3), (25, 6), (29, 12), (3, 15)):
            stroke(d, [(17, 22), (tx, ty)], "forest_light")
            for j in range(2, 6):
                x, y = 17+(tx-17)*j//6, 22+(ty-22)*j//6
                stroke(d, [(x-2, y-1), (x, y), (x+2, y-2)], "sage")
    elif kind in ("ceramic_vase", "urn"):
        glaze = "slate" if variant else "ivory_dark"
        shine = "slate_light" if variant else "ivory"
        ellipse(d, (8, 10, 24, 28), glaze, shine)
        box(d, (12, 7, 20, 13), glaze)
        ellipse(d, (11, 5, 21, 9), "wood_dark", "brass_dark")
        stroke(d, [(11, 15), (11, 22)], "ivory_light")
        if kind == "urn":
            for x in (6, 23):
                d.arc((x-1, 12, x+4, 22), 90, 270, fill=COLORS["brass_dark"])
            bevel(d, (10, 28, 23, 30), "ivory_dark", "ivory")
        else:
            flower(d, 16, 19, "rose", "forest_light")
    elif kind == "hourglass":
        for yy in (5, 26):
            bevel(d, (7, yy, 25, yy+3), "wood", "wood_light")
        for x in (9, 22):
            stroke(d, [(x, 8), (x, 25)], "brass_dark")
        d.polygon([(12, 9), (20, 9), (17, 17), (20, 24), (12, 24), (15, 17)], outline=COLORS["slate_light"])
        d.polygon([(13, 10), (19, 10), (16, 16)], fill=COLORS["brass_dark"])
        d.polygon([(13, 23), (16, 20), (19, 23)], fill=COLORS["brass"])
    elif kind == "ornamental_clock":
        bevel(d, (5, 11, 27, 28), "wood_dark", "wood_light")
        ellipse(d, (9, 7, 24, 24), "ivory_dark", "brass")
        stroke(d, [(17, 10), (17, 16), (21, 18)], "wood_dark")
        for x in (7, 25):
            d.point((x, 29), fill=COLORS["brass"])
    elif kind == "specimen_dome":
        ellipse(d, (5, 23, 27, 29), "wood_dark", "wood_light")
        d.arc((6, 4, 26, 31), 180, 360, fill=COLORS["slate_light"])
        for x in (6, 26):
            stroke(d, [(x, 16), (x, 25)], "slate")
        flower(d, 16, 17, "burgundy_light", "forest_light")
        stroke(d, [(9, 12), (12, 8)], "ivory_dark")
    else:  # Taxidermy: one small corvid on its branch and plinth.
        ellipse(d, (6, 26, 27, 30), "wood_dark", "wood_light")
        stroke(d, [(9, 24), (24, 18)], "wood_light")
        ellipse(d, (10, 11, 23, 21), "charcoal", "ink")
        ellipse(d, (19, 6, 26, 14), "ink")
        d.polygon([(25, 10), (29, 12), (25, 13)], fill=COLORS["brass_dark"])
        d.polygon([(11, 15), (5, 23), (13, 20)], fill=COLORS["ink"])
        d.point((23, 9), fill=COLORS["brass"])
    return im


def lighting(kind):
    if kind == "three_candelabrum":
        old = candelabra()
        return padded_animation(old, (32, 64), (0, 8))
    size = {"standing_lamp": (32, 96), "chandelier": (96, 64), "five_candelabrum": (64, 64),
            "wall_sconce": (32, 64)}.get(kind, (32, 32))
    w, h = size
    static = new(size)
    d = ImageDraw.Draw(static)
    flames = []
    if kind in ("banker_lamp", "brass_desk_lamp", "reading_lamp"):
        ellipse(d, (8, 24, 26, 29), "brass_dark", "ink")
        stroke(d, [(17, 24), (17, 14)], "brass")
        if kind == "banker_lamp":
            d.rounded_rectangle((4, 5, 28, 16), radius=4, fill=COLORS["forest"], outline=COLORS["ink"])
            stroke(d, [(7, 7), (24, 7)], "forest_light")
            stroke(d, [(5, 16), (27, 16)], "brass_dark")
        elif kind == "brass_desk_lamp":
            d.polygon([(12, 5), (23, 5), (29, 17), (6, 17)], fill=COLORS["brass_dark"])
            stroke(d, [(12, 5), (23, 5), (27, 15)], "brass")
        else:
            d.polygon([(11, 6), (22, 6), (26, 16), (7, 16)], fill=COLORS["ivory_dark"])
            stroke(d, [(11, 6), (22, 6)], "ivory")
            for x in (13, 18, 22):
                stroke(d, [(x, 8), (x, 14)], "stone_light")
        on = new(size)
        stroke(ImageDraw.Draw(on), [(8, 16), (25, 16)], "gold")
        return Animation(static, [on, new(size)], [1000, 1000], ["lit", "unlit"], (4, 5, 29, 18))
    if kind in ("five_candelabrum", "chandelier"):
        cx = w//2
        if kind == "chandelier":
            stroke(d, [(cx, 1), (cx, 25)], "brass_dark")
            ellipse(d, (cx-3, 22, cx+3, 28), "brass")
            bases = [(cx+dx, 43-abs(dx)//4) for dx in (-35, -18, 0, 18, 35)]
        else:
            ellipse(d, (22, 56, 43, 61), "brass_dark", "ink")
            box(d, (30, 32, 33, 56), "brass_dark")
            stroke(d, [(30, 34), (30, 54)], "brass")
            bases = [(cx+dx, 25+abs(dx)//3) for dx in (-24, -12, 0, 12, 24)]
        for x, y in bases:
            stroke(d, [(cx, 49 if kind != "chandelier" else 28), ((cx+x)//2, y+12), (x, y+7)], "brass_dark")
            stroke(d, [(cx, 48 if kind != "chandelier" else 27), ((cx+x)//2, y+11), (x, y+6)], "brass")
            box(d, (x-2, y-1, x+1, y+7), "ivory_dark")
            stroke(d, [(x-2, y), (x-2, y+6)], "ivory")
            stroke(d, [(x-3, y+8), (x+3, y+8)], "brass")
            flames.append((x, y-3))
    elif kind == "standing_lamp":
        ellipse(d, (5, 87, 27, 93), "brass_dark", "ink")
        box(d, (15, 32, 17, 88), "brass_dark")
        stroke(d, [(15, 35), (15, 84)], "brass")
        for yy in (44, 73):
            ellipse(d, (12, yy, 20, yy+5), "brass_dark")
        d.polygon([(8, 10), (24, 10), (29, 31), (3, 31)], fill=COLORS["burgundy_dark"])
        for xx in (9, 15, 21):
            stroke(d, [(xx, 11), (xx+(xx-16)//4, 30)], "burgundy")
        stroke(d, [(3, 32), (29, 32)], "brass")
        # This shaded gas standard changes only its warm lower rim.
        on = new(size)
        stroke(ImageDraw.Draw(on), [(6, 32), (26, 32)], "gold")
        return Animation(static, [on, new(size)], [1000]*2, ["lit", "unlit"], (3, 31, 30, 34))
    elif kind == "wall_sconce":
        ellipse(d, (10, 24, 23, 50), "wood_dark", "brass_dark")
        stroke(d, [(17, 43), (24, 44), (26, 37), (19, 34)], "brass")
        box(d, (17, 21, 20, 34), "ivory_dark")
        stroke(d, [(17, 22), (17, 33)], "ivory")
        flames = [(19, 19)]
    elif kind == "oil_lamp":
        ellipse(d, (7, 21, 25, 29), "brass_dark", "brass")
        ellipse(d, (12, 10, 21, 24), "blue_dark", "slate")
        stroke(d, [(12, 10), (12, 5), (21, 5), (21, 10)], "slate_light")
        flames = [(16, 20)]
    else:
        ellipse(d, (5, 24, 27, 29), "brass_dark", "brass")
        d.arc((22, 18, 30, 27), 270, 90, fill=COLORS["brass_dark"], width=2)
        box(d, (13, 12, 18, 24), "ivory_dark")
        stroke(d, [(13, 12), (13, 22)], "ivory")
        d.point((19, 19), fill=COLORS["ivory"])
        flames = [(16, 10)]
    layers = []
    for i in range(4):
        layer = new(size)
        ld = ImageDraw.Draw(layer)
        for j, (x, y) in enumerate(flames):
            flame(ld, x, y, (6, 8, 7, 5)[(i+j)%4], (-1, 0, 1, 0)[(i+j)%4])
        layers.append(layer)
    layers.append(new(size))
    return Animation(static, layers, [100]*4+[1200], [f"lit_{i}" for i in range(4)]+["extinguished"], (0, 0, w, h))


def padded_animation(old, size, offset):
    static = new(size)
    static.alpha_composite(old.static, offset)
    layers = []
    for original in old.layers:
        layer = new(size)
        layer.alpha_composite(original, offset)
        layers.append(layer)
    return Animation(static, layers, old.durations, old.names,
                     tuple(v+offset[i%2] for i, v in enumerate(old.motion_box)))


def mystery(kind, variant=0, seed=13, state="closed"):
    from .furniture import shelves, desk
    if kind in ("mechanism_bookcase", "locked_bookcase", "odd_bookcase"):
        im = shelves("locked_cabinet_bookcase" if kind == "locked_bookcase" else "ornament_bookcase", variant, seed)
        d = ImageDraw.Draw(im)
        if kind == "mechanism_bookcase":
            if state == "open":
                box(d, (12, 67, 51, 84), "ink")
                gear(d, 24, 76, 6)
                gear(d, 39, 78, 4)
                stroke(d, [(28, 71), (40, 69)], "brass_dark")
            else:
                d.point((48, 64), fill=COLORS["brass"])
        elif kind == "locked_bookcase":
            if state == "open":
                box(d, (25, 73, 37, 80), "shadow")
                stroke(d, [(30, 73), (34, 70), (37, 74)], "brass")
            else:
                stroke(d, [(17, 74), (47, 74)], "brass_dark")
                box(d, (30, 72, 35, 79), "brass_dark")
                d.point((32, 76), fill=COLORS["ink"])
        else:
            book(d, 43, 36, 7, 20, "ivory_dark")
            d.point((46, 24), fill=COLORS["burgundy_light"])
        return im
    if kind == "secret_desk":
        im = desk("grand_desk", variant, "south", "open" if state == "open" else "default")
        if state == "open":
            d = ImageDraw.Draw(im)
            box(d, (39, 42, 55, 52), "ink")
            paper(d, 42, 44, 10, 6)
        return im
    im = new((32, 32))
    d = ImageDraw.Draw(im)
    if kind == "marked_book":
        closed_book(d, 5, 5, 22, 24, "purple_dark", True)
        stroke(d, [(13, 12), (20, 17), (13, 21), (13, 12)], "brass_dark" if state == "closed" else "gold")
        if state == "open":
            for x, y in ((10, 10), (23, 20), (20, 8)):
                d.point((x, y), fill=COLORS["gold"])
    elif kind == "hidden_safe":
        bevel(d, (3, 4, 28, 28), "charcoal", "charcoal_light")
        bevel(d, (6, 7, 25, 25), "stone_dark", "stone")
        if state == "open":
            box(d, (7, 8, 22, 24), "ink")
            box(d, (10, 17, 18, 21), "ivory_dark")
            d.polygon([(24, 7), (30, 11), (30, 28), (24, 25)], fill=COLORS["charcoal_light"])
        else:
            ellipse(d, (11, 12, 20, 21), "brass_dark", "brass")
            stroke(d, [(15, 13), (15, 17), (19, 17)], "ink")
    elif kind == "puzzle_box":
        bevel(d, (4, 9, 27, 26), "wood_dark", "wood_light")
        d.polygon([(4, 9), (10, 4), (25, 4), (27, 9)], fill=COLORS["wood"])
        if state == "open":
            box(d, (7, 12, 24, 19), "ink")
            gear(d, 16, 15, 3)
        else:
            d.polygon([(16, 12), (22, 18), (16, 23), (10, 18)], outline=COLORS["brass_dark"])
            d.point((16, 18), fill=COLORS["brass"])
    else:
        ellipse(d, (4, 24, 28, 29), "wood_dark", "wood_light")
        gear(d, 12, 17, 7)
        gear(d, 22, 19, 4)
        stroke(d, [(10, 8), (19, 5), (26, 10)], "brass_dark")
        if state == "open":
            stroke(d, [(12, 17), (17, 12)], "gold")
        else:
            stroke(d, [(12, 17), (9, 21)], "brass")
    return im
