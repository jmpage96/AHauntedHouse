"""Tiny, editable haunted mansion assets. Pillow only; all drawing is native pixels."""
from pathlib import Path
import argparse
import random

from PIL import Image, ImageDraw, ImageFont


# All artwork (including highlights and shadows) uses these 15 colours.
PALETTE = {
    "ink": "#201923", "shadow": "#30202b",
    "wood_dark": "#402832", "wood": "#57323b", "wood_light": "#71434a",
    "wood_glint": "#8b5555", "burgundy_dark": "#432334",
    "burgundy": "#623345", "burgundy_light": "#854858",
    "purple_dark": "#403346", "purple": "#665269", "dust": "#947c8d",
    "brass_dark": "#726044", "brass": "#ad8c58", "gold": "#e5bb70",
}
SIZES = {"floor": (16, 16), "wallpaper": (16, 16),
         "door": (32, 32), "bookcase": (32, 48)}


def canvas(size, color=None):
    return Image.new("RGBA", size, PALETTE[color] if color else (0, 0, 0, 0))


def rect(draw, box, color):
    draw.rectangle(box, fill=PALETTE[color])


def line(draw, points, color):
    draw.line(points, fill=PALETTE[color], width=1)


def panel(draw, box, fill="wood", light="wood_light"):
    """One-pixel bevel, reused by door panels and furniture."""
    x0, y0, x1, y1 = box
    rect(draw, box, "ink")
    rect(draw, (x0+1, y0+1, x1-1, y1-1), fill)
    line(draw, [(x0+1, y1-1), (x0+1, y0+1), (x1-1, y0+1)], light)


def floor(rng):
    im = canvas((16, 16), "wood")
    d = ImageDraw.Draw(im)
    for y, joint in [(0, 0), (8, 8)]:
        rect(d, (0, y, 15, y), "wood_dark")
        line(d, [(0, y+1), (15, y+1)], "wood_light")
        line(d, [(joint, y+1), (joint, y+7)], "wood_dark")
        for _ in range(4):
            x, yy = rng.randrange(1, 14), rng.randrange(y+2, y+7)
            line(d, [(x, yy), (min(x+rng.randrange(3, 7), 14), yy)],
                 "wood_dark")
        d.point((joint+1, y+3), fill=PALETTE["brass_dark"])
    # Boundary pixels agree exactly; no random grain can create a boundary stripe.
    for y in range(16):
        im.putpixel((15, y), im.getpixel((0, y)))
    for x in range(16):
        im.putpixel((x, 15), im.getpixel((x, 0)))
    return im


def wallpaper(rng):
    im = canvas((16, 16), "burgundy_dark")
    d = ImageDraw.Draw(im)
    for x in (2, 13):
        line(d, [(x, 0), (x, 15)], "burgundy")
    # A restrained fleur / damask silhouette with dusty purple inner petals.
    d.polygon([(8, 2), (10, 5), (9, 7), (12, 6), (12, 9),
               (9, 10), (8, 13), (7, 10), (4, 9), (4, 6), (7, 7), (6, 5)],
              fill=PALETTE["burgundy"])
    line(d, [(8, 4), (8, 11)], "purple")
    line(d, [(5, 7), (8, 9), (11, 7)], "burgundy_light")
    d.point((8, 3), fill=PALETTE["brass_dark"])
    for x, y in [(5, 3), (11, 12)]:
        if rng.random() > .25:
            d.point((x, y), fill=PALETTE["burgundy"])
    return im


def door(rng):
    im = canvas((32, 32))
    d = ImageDraw.Draw(im)
    rect(d, (3, 1, 28, 31), "ink")
    rect(d, (4, 2, 27, 30), "wood_dark")
    line(d, [(4, 30), (4, 2), (27, 2)], "wood_glint")
    line(d, [(6, 29), (6, 4), (25, 4)], "brass_dark")
    rect(d, (7, 5, 24, 29), "wood")
    for x in (8, 17):
        panel(d, (x, 7, x+6, 17), "burgundy_dark")
        panel(d, (x, 21, x+6, 27), "wood_dark")
    # Heavy architrave, hinges, brass lock plate and tiny knob highlight.
    rect(d, (2, 0, 29, 2), "ink")
    line(d, [(3, 0), (28, 0)], "wood_glint")
    line(d, [(3, 2), (28, 2)], "brass_dark")
    for y in (9, 25):
        rect(d, (6, y, 8, y+1), "brass_dark")
    rect(d, (22, 17, 24, 21), "brass_dark")
    rect(d, (22, 17, 23, 19), "brass")
    d.point((22, 17), fill=PALETTE["gold"])
    d.point((23, 21), fill=PALETTE["ink"])
    line(d, [(4, 31), (27, 31)], "brass_dark")
    return im


def book(draw, x, baseline, width, height, color, rng):
    rect(draw, (x, baseline-height, x+width-1, baseline), "ink")
    rect(draw, (x, baseline-height, x+width-2, baseline-1), color)
    if width > 2:
        line(draw, [(x, baseline-height+2), (x+width-2, baseline-height+2)], "brass_dark")
    if height > 7 and rng.random() < .7:
        draw.point((x, baseline-3), fill=PALETTE["brass"])


def bookcase(rng):
    im = canvas((32, 48))
    d = ImageDraw.Draw(im)
    rect(d, (3, 6, 28, 45), "ink")
    rect(d, (5, 8, 26, 41), "shadow")
    for baseline in (18, 30):
        x = 6
        while x < 25:
            width = min(rng.randrange(2, 5), 26-x)
            book(d, x, baseline, width, rng.randrange(6, 10),
                 rng.choice(["burgundy", "purple", "wood_light", "brass_dark"]), rng)
            x += width + rng.choice([0, 0, 1])
    # Lower cupboard keeps the silhouette legible at game scale.
    for x in (6, 17):
        panel(d, (x, 34, x+8, 42), "wood_dark")
    for x in (12, 18):
        d.point((x, 38), fill=PALETTE["brass"])
    for x in (3, 27):
        rect(d, (x, 7, x+1, 44), "wood")
        line(d, [(x, 8), (x, 43)], "wood_glint")
    for y in (19, 31, 43):
        rect(d, (4, y, 27, y+1), "wood")
        line(d, [(5, y), (26, y)], "wood_light")
    rect(d, (2, 5, 29, 7), "wood_dark")
    line(d, [(2, 5), (29, 5)], "wood_glint")
    rect(d, (4, 45, 7, 47), "ink")
    rect(d, (24, 45, 27, 47), "ink")
    # Brass candlestick and a three-pixel flame, with no blurred glow.
    rect(d, (21, 4, 25, 4), "brass_dark")
    rect(d, (23, 2, 23, 3), "brass")
    d.point((23, 1), fill=PALETTE["gold"])
    d.point((23, 0), fill=PALETTE["gold"])
    return im


def make_assets(seed=13):
    return {name: globals()[name](random.Random(f"{seed}:{name}")) for name in SIZES}


def repeat_tile(target, tile, box):
    """Repeat an opaque tile into a rectangle, clipping partial repetitions."""
    x0, y0, x1, y1 = box
    patch = canvas((x1-x0, y1-y0))
    for y in range(0, patch.height, tile.height):
        for x in range(0, patch.width, tile.width):
            patch.paste(tile, (x, y))
    target.alpha_composite(patch, (x0, y0))


def room(assets):
    im = canvas((192, 144), "ink")
    repeat_tile(im, assets["wallpaper"], (8, 8, 184, 48))
    repeat_tile(im, assets["floor"], (8, 48, 184, 136))
    d = ImageDraw.Draw(im)
    rect(d, (8, 44, 183, 49), "wood_dark")
    line(d, [(8, 44), (183, 44)], "brass_dark")
    line(d, [(8, 49), (183, 49)], "ink")
    # Burgundy rug: simple stepped corners and a narrow brass border.
    rect(d, (49, 78, 142, 119), "ink")
    rect(d, (51, 79, 140, 118), "burgundy_dark")
    d.rectangle((54, 82, 137, 115), outline=PALETTE["brass_dark"])
    d.rectangle((57, 85, 134, 112), outline=PALETTE["burgundy"])
    d.polygon([(95, 90), (108, 98), (95, 107), (82, 98)],
              outline=PALETTE["burgundy_light"])
    line(d, [(91, 98), (99, 98)], "brass_dark")
    line(d, [(95, 95), (95, 101)], "brass_dark")
    for x in range(55, 137, 6):
        line(d, [(x, 77), (x, 78)], "brass_dark")
        line(d, [(x, 119), (x, 120)], "brass_dark")
    im.alpha_composite(assets["door"], (80, 18))
    for x in (20, 140):
        rect(d, (x+3, 69, x+30, 74), "wood_dark")
        im.alpha_composite(assets["bookcase"], (x, 25))
    return im


def preview(assets):
    im = canvas((272, 112), "ink")
    d = ImageDraw.Draw(im)
    font = ImageFont.load_default(size=8)
    # bitmap font mode avoids antialiasing even on Pillow versions with scalable fonts.
    d.fontmode = "1"
    for i, (name, asset) in enumerate(assets.items()):
        x = 8 + i*66
        d.text((x, 5), name.upper(), font=font, fill=PALETTE["gold"])
        d.text((x, 16), f"{asset.width}x{asset.height}", font=font, fill=PALETTE["dust"])
        for yy in range(32, 88, 4):
            for xx in range(x, x+48, 4):
                rect(d, (xx, yy, xx+3, yy+3),
                     "shadow" if ((xx-x)//4+yy//4) % 2 else "purple_dark")
        if name in ("floor", "wallpaper"):
            repeat_tile(im, asset, (x, 36, x+48, 84))
        else:
            im.alpha_composite(asset, (x+8, 36))
    d.text((8, 96), "NATIVE PIXELS / 4X NEAREST / SEEDABLE", font=font,
           fill=PALETTE["dust"])
    return im


def export(output, seed=13):
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    assets = make_assets(seed)
    for name, im in assets.items():
        im.save(output / f"{name}.png")
    for name, im in [("preview", preview(assets)), ("room", room(assets))]:
        im.save(output / f"{name}_native.png")
        im.resize((im.width*4, im.height*4), Image.Resampling.NEAREST).save(output / f"{name}.png")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output")
    args = parser.parse_args()
    export(args.output, args.seed)
