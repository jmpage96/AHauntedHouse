"""Periodic floor and wall surfaces. No image resampling is used here."""
import random
from PIL import Image, ImageColor, ImageDraw
from generate import PALETTE

COLORS = {**PALETTE,
    "oak": "#493337", "oak_light": "#634448", "oak_dark": "#35272d",
    "ivory": "#b6aa93", "ivory_light": "#c9bea7", "ivory_dark": "#958875",
    "charcoal": "#34333c", "charcoal_light": "#4b4750",
    "stone": "#68605d", "stone_light": "#81766b", "stone_dark": "#4b4548",
    "forest": "#2e4140", "forest_light": "#4e6156", "sage": "#78836a",
    "slate": "#4e5867", "slate_light": "#737f89", "blue_dark": "#38404e",
    "rose": "#957573", "terra": "#835b4e", "terra_dark": "#61423e"}
FLOORS = ("dark_oak", "herringbone", "checker_marble", "flagstone", "attic_boards",
          "red_carpet", "floral_carpet", "utility_tiles", "cellar_stone", "conservatory")
WALLS = ("burgundy_damask", "green_damask", "blue_floral", "cream_floral",
         "wood_panelling", "half_panelling", "plaster", "brick", "cellar_wall", "striped")
WALL_SCHEMES = {
    "burgundy_damask": ("burgundy_dark", "burgundy", "burgundy_light", "wood"),
    "green_damask": ("forest", "forest_light", "sage", "wood"),
    "blue_floral": ("blue_dark", "slate", "slate_light", "wood_dark"),
    "cream_floral": ("ivory_dark", "ivory", "rose", "wood"),
    "wood_panelling": ("wood_dark", "wood", "wood_light", "wood"),
    "half_panelling": ("burgundy_dark", "burgundy", "purple", "wood"),
    "plaster": ("ivory_dark", "ivory", "stone_light", "ivory_dark"),
    "brick": ("terra_dark", "terra", "wood_light", "stone_dark"),
    "cellar_wall": ("stone_dark", "charcoal_light", "forest", "stone_dark"),
    "striped": ("burgundy_dark", "purple_dark", "ivory_dark", "wood")}


def new(size, color=None):
    return Image.new("RGBA", size, COLORS[color] if color else (0, 0, 0, 0))


def box(d, xy, color):
    d.rectangle(xy, fill=COLORS[color])


def stroke(d, xy, color):
    d.line(xy, fill=COLORS[color], width=1)


def bevel(d, xy, fill, highlight, shadow="ink"):
    x, y, r, b = xy
    box(d, xy, shadow)
    box(d, (x+1, y+1, r-1, b-1), fill)
    stroke(d, [(x+1, b-1), (x+1, y+1), (r-1, y+1)], highlight)


def fleuron(d, x, y, color, light, gold=False):
    for sign in (-1, 1):
        def p(coords):
            return [(x+sign*a, y+b) for a, b in coords]
        d.polygon(p([(0, -9), (4, -6), (4, -3), (2, 0), (7, -2),
                     (7, 1), (5, 5), (1, 7), (0, 10)]), fill=COLORS[color])
        stroke(d, p([(0, 6), (4, 3), (5, 0)]), light)
        stroke(d, p([(1, -2), (2, -5)]), light)
    stroke(d, [(x, y-7), (x, y+8)], light)
    if gold:
        d.point((x, y-9), fill=COLORS["brass_dark"])


def flower(d, x, y, petal="rose", leaf="sage"):
    stroke(d, [(x, y+7), (x, y), (x+3, y-5)], leaf)
    stroke(d, [(x, y+4), (x-4, y+1), (x-2, y+1)], leaf)
    for dx, dy in ((-2, 0), (2, 0), (0, -2), (0, 2)):
        d.point((x+dx, y+dy), fill=COLORS[petal])
        d.point((x+dx+1, y+dy), fill=COLORS[petal])
        d.point((x+dx, y+dy+1), fill=COLORS[petal])
    d.point((x, y), fill=COLORS["ivory_dark"])


def masonry(d, size, dark, fill, light, height=16, stagger=True):
    w, h = size
    box(d, (0, 0, w-1, h-1), fill)
    for y in range(0, h, height):
        stroke(d, [(0, y), (w-1, y)], dark)
        stroke(d, [(0, y+1), (w-1, y+1)], light)
        offset = 16 if stagger and (y//height)%2 else 0
        for x in range(offset, w, 32):
            stroke(d, [(x, y), (x, y+height-1)], dark)
            stroke(d, [(x+1, y+2), (x+1, y+height-2)], light)


def parquet_color(x, y):
    u, v = x+y, y-x
    cu, cv = u//8, v//8
    s = (cu+cv)%4
    hu, hv = (cu-(s == 1), cv) if s < 2 else (cu, cv-(s == 3))
    along, across = (u-hu*8, v-hv*8) if s < 2 else (v-hv*8, u-hu*8)
    c = "oak" if (hu*3+hv)%4 else "wood"
    if along == 0 or across == 0:
        c = "oak_dark"
    elif across == 1:
        c = "oak_light"
    elif across in (3, 6) and 3 < along < 12:
        c = "wood_dark"
    return c


def floor_pattern(family):
    """Structural pattern is invariant across variants and seeds."""
    size = 64 if family in ("herringbone", "dark_oak") else 32
    im = new((size, size), "wood_dark")
    d = ImageDraw.Draw(im)
    if family == "herringbone":
        # Domino herringbone in a diagonal integer lattice: every cell has one owner.
        for y in range(size):
            for x in range(size):
                c = parquet_color(x, y)
                im.putpixel((x, y), ImageColor.getrgb(COLORS[c])+(255,))
    elif family == "dark_oak":
        box(d, (0, 0, 63, 63), "oak")
        for y in range(0, 64, 16):
            joint = 32 if y%32 else 0
            stroke(d, [(0, y), (63, y)], "oak_dark")
            stroke(d, [(0, y+1), (63, y+1)], "oak_light")
            stroke(d, [(joint, y+1), (joint, y+15)], "oak_dark")
            d.point((joint+2, y+4), fill=COLORS["brass_dark"])
            for x in (5, 36):
                stroke(d, [(x, y+5), (x+8, y+5), (x+11, y+6), (x+22, y+6)], "wood_dark")
                stroke(d, [(x+4, y+12), (x+15, y+12)], "wood_dark")
    elif family == "attic_boards":
        masonry(d, im.size, "oak_dark", "oak", "oak_light", 8)
        for y in range(4, 32, 8):
            stroke(d, [(4, y), (12, y), (15, y+1), (26, y+1)], "wood_dark")
            stroke(d, [(18, y+1), (21, y), (24, y+1), (21, y+2), (18, y+1)], "oak_dark")
            d.point((2, y), fill=COLORS["brass_dark"])
    elif family == "checker_marble":
        for y in (0, 16):
            for x in (0, 16):
                pale = (x+y)%32 == 0
                box(d, (x, y, x+15, y+15), "ivory" if pale else "charcoal")
                stroke(d, [(x, y+15), (x, y), (x+15, y)], "ivory_dark" if pale else "charcoal_light")
                stroke(d, [(x+4, y+3), (x+7, y+6), (x+6, y+9), (x+10, y+13)],
                       "ivory_light" if pale else "stone_dark")
    elif family in ("flagstone", "cellar_stone"):
        cellar = family == "cellar_stone"
        masonry(d, im.size, "ink" if cellar else "stone_dark", "stone_dark" if cellar else "stone",
                "charcoal_light" if cellar else "stone_light")
        for x, y in ((7, 7), (23, 22)):
            stroke(d, [(x, y), (x+3, y+1), (x+2, y+3)], "charcoal" if cellar else "stone_dark")
        # Chipped corners, worn facets and shallow pits, kept away from tile collars.
        for x, y in ((3, 3), (19, 19)):
            stroke(d, [(x, y+2), (x+2, y), (x+6, y)], "stone" if cellar else "stone_light")
            stroke(d, [(x+4, y+9), (x+9, y+9), (x+11, y+8)], "charcoal" if cellar else "stone_dark")
            box(d, (x+7, y+4, x+9, y+5), "charcoal_light" if cellar else "stone_light")
        for x, y in ((3, 19), (18, 4), (10, 26), (27, 11)):
            d.point((x, y), fill=COLORS["ink" if cellar else "stone_dark"])
        if cellar:
            stroke(d, [(3, 25), (6, 26), (10, 26)], "forest")
    elif family == "red_carpet":
        box(d, (0, 0, 31, 31), "burgundy_dark")
        for y in range(2, 32, 4):
            for x in range((y%8)//2, 32, 8):
                d.point((x, y), fill=COLORS["burgundy"])
    elif family == "floral_carpet":
        box(d, (0, 0, 31, 31), "purple_dark")
        for x, y in ((8, 8), (24, 24)):
            flower(d, x, y)
        for x, y in ((24, 8), (8, 24)):
            d.polygon([(x, y-3), (x+3, y), (x, y+3), (x-3, y)], outline=COLORS["brass_dark"])
    elif family == "utility_tiles":
        box(d, (0, 0, 31, 31), "charcoal")
        for y in range(0, 32, 8):
            for x in range(0, 32, 8):
                c = "terra" if (x+y)%16 else "ivory_dark"
                box(d, (x+1, y+1, x+6, y+6), c)
                d.point((x+2, y+2), fill=COLORS["stone_light"])
    elif family == "conservatory":
        box(d, (0, 0, 31, 31), "ivory_dark")
        d.polygon([(16, 1), (30, 16), (16, 30), (1, 16)], fill=COLORS["forest"])
        d.polygon([(16, 4), (27, 16), (16, 27), (4, 16)], outline=COLORS["sage"])
        for dx, dy in ((0, -5), (5, 0), (0, 5), (-5, 0)):
            d.polygon([(16+dx, 12+dy), (20+dx, 16+dy), (16+dx, 20+dy), (12+dx, 16+dy)], fill=COLORS["terra"])
        d.rectangle((14, 14, 18, 18), fill=COLORS["ivory"])
        for x, y in ((1, 1), (29, 1), (1, 29), (29, 29)):
            d.point((x, y), fill=COLORS["terra_dark"])
    return im


def floor_variants(family, seed=13):
    base = floor_pattern(family)
    variants = []
    # Wear stays within each phase's interior; shared 2px collars lock every seam.
    for variant in range(5):
        im = base.copy()
        rng = random.Random(f"{seed}:{family}:{variant}")
        for _ in range(12 if family not in ("herringbone", "red_carpet") else 20):
            x, y = rng.randrange(2, im.width-2), rng.randrange(2, im.height-2)
            if x%32 < 2 or x%32 > 29 or y%32 < 2 or y%32 > 29:
                continue
            c = im.getpixel((x, y))
            exchanges = {"oak": "wood_dark", "wood": "wood_light", "ivory": "ivory_light",
                         "charcoal": "charcoal_light", "stone": "stone_light", "stone_dark": "charcoal_light",
                         "burgundy_dark": "burgundy", "purple_dark": "shadow", "terra": "terra_dark",
                         "ivory_dark": "ivory", "forest": "forest_light"}
            for source, target in exchanges.items():
                if c[:3] == ImageColor.getrgb(COLORS[source]):
                    im.putpixel((x, y), ImageColor.getrgb(COLORS[target])+(255,))
                    break
        variants.append(im)
    return variants


def wall_surface(family, variant=0, seed=13):
    base, motif, light, trim = WALL_SCHEMES[family]
    im = new((32, 32), base)
    d = ImageDraw.Draw(im)
    if family in ("burgundy_damask", "green_damask", "half_panelling"):
        for x in (3, 28):
            stroke(d, [(x, 0), (x, 31)], motif)
        fleuron(d, 15, 15, motif, light, True)
    elif family in ("blue_floral", "cream_floral"):
        # Wrap whole botanical sprigs, including stems that cross a repeat edge.
        for dx in (-32, 0, 32):
            for dy in (-32, 0, 32):
                flower(d, 10+dx, 12+dy, light, motif)
                flower(d, 25+dx, 27+dy, light, motif)
    elif family == "wood_panelling":
        bevel(d, (2, 0, 29, 31), "wood", "wood_light")
        bevel(d, (5, 4, 26, 27), "wood_dark", "wood")
        stroke(d, [(9, 23), (9, 11), (15, 6), (22, 11), (22, 23)], "wood_light")
    elif family in ("brick", "cellar_wall"):
        masonry(d, im.size, "shadow", motif, "wood_dark" if family == "brick" else "stone",
                8 if family == "brick" else 16)
    elif family == "striped":
        for x in range(0, 32, 8):
            box(d, (x+2, 0, x+4, 31), motif)
            stroke(d, [(x+6, 0), (x+6, 31)], light)
            for y in (5, 21):
                d.point((x+3, y), fill=COLORS["brass_dark"])
    rng = random.Random(f"{seed}:wall:{family}:{variant}")
    # Sparse handmade texture, including on plain plaster; no blurry gradients.
    for _ in range(16):
        x, y = rng.randrange(2, 30), rng.randrange(2, 30)
        pixel = im.getpixel((x, y))[:3]
        if pixel == ImageColor.getrgb(COLORS[base]):
            d.point((x, y), fill=COLORS[motif])
        elif family in ("brick", "cellar_wall") and pixel == ImageColor.getrgb(COLORS[motif]):
            d.point((x, y), fill=COLORS[light])
    return im
