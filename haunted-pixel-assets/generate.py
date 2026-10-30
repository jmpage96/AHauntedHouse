"""Tiny, editable haunted mansion assets. Pillow only; all drawing is native pixels."""
from pathlib import Path
import argparse
import random

from PIL import Image, ImageColor, ImageDraw, ImageFont


# All artwork (including highlights and shadows) uses these 15 colours.
PALETTE = {
    "ink": "#201923", "shadow": "#30202b",
    "wood_dark": "#402832", "wood": "#57323b", "wood_light": "#71434a",
    "wood_glint": "#8b5555", "burgundy_dark": "#432334",
    "burgundy": "#623345", "burgundy_light": "#854858",
    "purple_dark": "#403346", "purple": "#665269", "dust": "#947c8d",
    "brass_dark": "#726044", "brass": "#ad8c58", "gold": "#e5bb70",
}
SIZES = {"floor": (32, 32), "wallpaper": (32, 32),
         "door": (64, 64), "bookcase": (64, 96)}


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
    im = canvas((32, 32), "wood")
    d = ImageDraw.Draw(im)
    for y, joint in [(0, 0), (16, 16)]:
        line(d, [(0, y), (31, y)], "wood_dark")
        line(d, [(0, y+1), (31, y+1)], "wood_light")
        line(d, [(joint, y+2), (joint, y+15)], "wood_dark")
        line(d, [(joint+1, y+2), (joint+1, y+14)], "wood_light")
        # Long, broken, single-pixel fibres instead of enlarged coarse marks.
        for yy in (y+5, y+11):
            x = rng.randrange(3, 19)
            length = rng.randrange(7, 13)
            line(d, [(x, yy), (x+length//2, yy),
                     (min(x+length//2+2, 29), yy+1), (min(x+length, 29), yy+1)],
                 "wood_dark")
            if rng.random() < .5:
                line(d, [(x+2, yy-1), (min(x+6, 29), yy-1)], "wood_light")
        if y == 16:
            x = rng.randrange(7, 12)
            line(d, [(x-3, y+8), (x, y+7), (x+3, y+8), (x, y+9), (x-3, y+8)], "wood_dark")
            d.point((x, y+8), fill=PALETTE["wood_light"])
        # Small nail heads, deliberately much smaller than a doubled old pixel.
        for yy in (y+4, y+12):
            d.point((joint+3, yy), fill=PALETTE["brass_dark"])
    for y in range(32):
        im.putpixel((31, y), im.getpixel((0, y)))
    for x in range(32):
        im.putpixel((x, 31), im.getpixel((x, 0)))
    return im


def wallpaper(rng):
    im = canvas((32, 32), "burgundy_dark")
    d = ImageDraw.Draw(im)
    for x in (4, 27):
        line(d, [(x, 0), (x, 31)], "burgundy")
        for y in range(3, 30, 8):
            d.point((x+1, y), fill=PALETTE["brass_dark"])
    # Bilateral acanthus scrolls, with veins inside each leaf.
    for mirror in (False, True):
        def points(coords):
            return [(31-x if mirror else x, y) for x, y in coords]
        d.polygon(points([(15, 6), (11, 8), (10, 12), (12, 16), (8, 14),
                          (7, 16), (8, 21), (12, 23), (15, 26), (15, 20),
                          (12, 19), (10, 17), (13, 18), (15, 15)]),
                  fill=PALETTE["burgundy"])
        line(d, points([(15, 23), (12, 21), (10, 19), (9, 16)]), "burgundy_light")
        line(d, points([(14, 15), (12, 12), (13, 10)]), "purple")
        line(d, points([(7, 8), (9, 5), (12, 4)]), "burgundy")
        line(d, points([(8, 26), (11, 28), (14, 28)]), "burgundy")
    d.polygon([(15, 3), (18, 7), (16, 11), (13, 7)], fill=PALETTE["purple"])
    line(d, [(15, 6), (15, 26)], "burgundy_light")
    for y in (4, 26):
        d.point((15, y), fill=PALETTE["brass_dark"])
    for _ in range(6):
        x, y = rng.randrange(6, 26), rng.randrange(1, 31)
        if im.getpixel((x, y)) == (*ImageColor.getrgb(PALETTE["burgundy_dark"]), 255):
            d.point((x, y), fill=PALETTE["shadow"])
    return im


def door(rng):
    im = canvas((64, 64))
    d = ImageDraw.Draw(im)
    rect(d, (6, 3, 57, 63), "ink")
    rect(d, (8, 6, 55, 61), "wood_dark")
    rect(d, (14, 10, 49, 60), "wood")
    for x in (8, 53):
        rect(d, (x, 6, x+2, 61), "wood_light")
        line(d, [(x, 7), (x, 60)], "wood_glint")
        line(d, [(x+3, 8), (x+3, 60)], "shadow")
    for x in (16, 34):
        panel(d, (x, 14, x+13, 35), "burgundy_dark")
        panel(d, (x+2, 16, x+11, 33), "wood_dark", "wood")
        # Pointed inset and carved corner flourishes.
        line(d, [(x+3, 30), (x+3, 22), (x+6, 18), (x+10, 22), (x+10, 30)], "wood_light")
        panel(d, (x, 43, x+13, 56), "wood_dark")
        line(d, [(x+3, 53), (x+3, 46), (x+10, 46)], "wood")
    for x in (15, 31, 48):
        for y in (12, 37, 58):
            line(d, [(x, y), (x, min(y+3, 60))], "wood_light")
    rect(d, (4, 2, 59, 6), "wood_dark")
    line(d, [(5, 2), (58, 2)], "wood_glint")
    line(d, [(6, 4), (57, 4)], "brass_dark")
    rect(d, (7, 0, 56, 1), "wood")
    for x in range(10, 55, 5):
        rect(d, (x, 5, x+1, 7), "ink")
    for y in (18, 49):
        rect(d, (12, y, 16, y+2), "brass_dark")
        d.point((14, y), fill=PALETTE["brass"])
    # Shaped escutcheon, round knob and visible keyhole.
    d.polygon([(45, 34), (48, 34), (49, 37), (48, 43), (45, 43), (44, 37)],
              fill=PALETTE["brass_dark"])
    line(d, [(45, 35), (47, 35)], "brass")
    d.ellipse((44, 36, 48, 39), fill=PALETTE["brass"])
    d.point((45, 36), fill=PALETTE["gold"])
    line(d, [(46, 41), (46, 42)], "ink")
    line(d, [(8, 62), (55, 62)], "brass_dark")
    return im


def book(draw, x, baseline, width, height, color, rng):
    rect(draw, (x, baseline-height, x+width-1, baseline), "ink")
    rect(draw, (x, baseline-height, x+width-2, baseline-1), color)
    top = baseline-height
    line(draw, [(x, top+1), (x, baseline-2)], "wood_light" if color != "purple" else "dust")
    for y in (top+3, baseline-3):
        line(draw, [(x+1, y), (x+width-2, y)], "brass_dark")
    if width >= 5:
        rect(draw, (x+2, top+6, x+width-3, top+8), "shadow")
        draw.point((x+2, top+6), fill=PALETTE["brass"])
        if rng.random() < .65:
            draw.point((x+2, top+10), fill=PALETTE["brass_dark"])


def bookcase(rng):
    im = canvas((64, 96))
    d = ImageDraw.Draw(im)
    rect(d, (6, 13, 57, 90), "ink")
    rect(d, (10, 17, 53, 83), "shadow")
    for y in (17, 41):
        rect(d, (11, y, 52, y+3), "ink")
        for x in (20, 34, 47):
            line(d, [(x, y+4), (x, y+19)], "wood_dark")
    for baseline in (37, 61):
        x = 12
        while x < 51:
            if baseline == 61 and x >= 38:
                x = 42
                for j, color in enumerate(("burgundy", "purple", "wood_light")):
                    yy = baseline-j*4
                    rect(d, (x, yy-3, 51, yy), "ink")
                    rect(d, (x, yy-3, 50, yy-1), color)
                    line(d, [(x+2, yy-2), (49, yy-2)], "brass_dark")
                break
            width = min(rng.randrange(4, 8), 52-x)
            if baseline == 61:
                width = min(width, 40-x)
            book(d, x, baseline, width, rng.randrange(13, 20),
                 rng.choice(["burgundy", "purple", "wood_light", "brass_dark"]), rng)
            x += width + rng.choice([0, 0, 1])
    for x in (12, 34):
        panel(d, (x, 68, x+17, 85), "wood_dark")
        panel(d, (x+3, 71, x+14, 82), "wood_dark", "wood")
        line(d, [(x+5, 79), (x+5, 75), (x+8, 73), (x+11, 75)], "wood_light")
    for x in (26, 36):
        d.ellipse((x, 76, x+2, 78), fill=PALETTE["brass_dark"])
        d.point((x, 76), fill=PALETTE["brass"])
    for x in (6, 54):
        rect(d, (x, 14, x+3, 88), "wood")
        line(d, [(x, 15), (x, 87)], "wood_glint")
        line(d, [(x+2, 19), (x+2, 83)], "wood_dark")
        for y in (15, 84):
            rect(d, (x-1, y, x+4, y+2), "wood_light")
    for y in (38, 62, 86):
        rect(d, (8, y, 55, y+3), "wood_dark")
        line(d, [(9, y), (54, y)], "wood_glint")
        line(d, [(10, y+1), (53, y+1)], "wood")
    rect(d, (4, 10, 59, 14), "wood_dark")
    line(d, [(4, 10), (59, 10)], "wood_glint")
    line(d, [(7, 12), (56, 12)], "wood_light")
    for x in range(10, 55, 5):
        rect(d, (x, 14, x+1, 16), "ink")
    for x in (8, 48):
        rect(d, (x, 90, x+7, 95), "ink")
        line(d, [(x+1, 90), (x+6, 90)], "wood_light")
        rect(d, (x+1, 91, x+5, 93), "wood_dark")
    # Wax column, drip, brass stem and shaped flame.
    rect(d, (42, 9, 51, 9), "brass_dark")
    line(d, [(44, 8), (49, 8)], "brass")
    rect(d, (46, 6, 47, 8), "brass")
    rect(d, (45, 3, 48, 5), "brass_dark")
    rect(d, (45, 3, 46, 5), "gold")
    d.point((48, 6), fill=PALETTE["brass"])
    line(d, [(46, 0), (47, 2)], "gold")
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
    im = canvas((384, 288), "ink")
    repeat_tile(im, assets["wallpaper"], (16, 16, 368, 96))
    repeat_tile(im, assets["floor"], (16, 96, 368, 272))
    d = ImageDraw.Draw(im)
    rect(d, (16, 88, 366, 98), "wood_dark")
    line(d, [(16, 88), (366, 88)], "brass_dark")
    line(d, [(16, 98), (366, 98)], "ink")
    # Burgundy rug: simple stepped corners and a narrow brass border.
    rect(d, (98, 156, 284, 238), "ink")
    rect(d, (102, 158, 280, 236), "burgundy_dark")
    d.rectangle((108, 164, 274, 230), outline=PALETTE["brass_dark"])
    d.rectangle((114, 170, 268, 224), outline=PALETTE["burgundy"])
    d.polygon([(190, 180), (216, 196), (190, 214), (164, 196)],
              outline=PALETTE["burgundy_light"])
    line(d, [(182, 196), (198, 196)], "brass_dark")
    line(d, [(190, 190), (190, 202)], "brass_dark")
    for x in range(110, 274, 12):
        line(d, [(x, 154), (x, 156)], "brass_dark")
        line(d, [(x, 238), (x, 240)], "brass_dark")
    im.alpha_composite(assets["door"], (160, 36))
    for x in (40, 280):
        rect(d, (x+6, 138, x+60, 148), "wood_dark")
        im.alpha_composite(assets["bookcase"], (x, 50))
    return im


def preview(assets):
    im = canvas((544, 224), "ink")
    d = ImageDraw.Draw(im)
    font = ImageFont.load_default(size=16)
    # bitmap font mode avoids antialiasing even on Pillow versions with scalable fonts.
    d.fontmode = "1"
    for i, (name, asset) in enumerate(assets.items()):
        x = 16 + i*132
        d.text((x, 10), name.upper(), font=font, fill=PALETTE["gold"])
        d.text((x, 32), f"{asset.width}x{asset.height}", font=font, fill=PALETTE["dust"])
        for yy in range(64, 176, 8):
            for xx in range(x, x+96, 8):
                rect(d, (xx, yy, xx+7, yy+7),
                     "shadow" if ((xx-x)//8+yy//8) % 2 else "purple_dark")
        if name in ("floor", "wallpaper"):
            repeat_tile(im, asset, (x, 72, x+96, 168))
        else:
            im.alpha_composite(asset, (x+16, 72))
    d.text((16, 192), "NATIVE PIXELS / 4X NEAREST / SEEDABLE", font=font,
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
    comparison(output, seed)


def comparison(output, seed=13):
    """Regenerate both revisions with the same seed, at equal display footprints."""
    import importlib.util
    spec = importlib.util.spec_from_file_location("before_generator", Path(__file__).parent / "before" / "generate.py")
    before = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(before)
    versions = [(before.make_assets(seed), 4), (make_assets(seed), 2)]
    sheet = canvas((896, 568), "ink")
    d = ImageDraw.Draw(sheet)
    d.fontmode = "1"
    font = ImageFont.load_default(size=14)
    for row, (assets, scale) in enumerate(versions):
        y = row*280
        d.text((16, y+6), f"{'BEFORE: 16px tiles / 4x' if row == 0 else 'AFTER: 32px tiles / 2x'}  |  seed {seed}", font=font, fill=PALETTE["gold"])
        for i, (name, asset) in enumerate(assets.items()):
            x = 16+i*220
            d.text((x, y+32), f"{name.upper()} {asset.width}x{asset.height}", font=font, fill=PALETTE["dust"])
            patch = canvas((192, 192), "purple_dark")
            pd = ImageDraw.Draw(patch)
            for yy in range(0, 192, 8):
                for xx in range(0, 192, 8):
                    if (xx//8+yy//8) % 2:
                        rect(pd, (xx, yy, xx+7, yy+7), "shadow")
            display = asset.resize((asset.width*scale, asset.height*scale), Image.Resampling.NEAREST)
            if name in ("floor", "wallpaper"):
                repeat_tile(patch, display, (0, 0, 192, 192))
            else:
                patch.alpha_composite(display, ((192-display.width)//2, 0))
            sheet.alpha_composite(patch, (x, y+60))
    sheet.save(Path(output) / "comparison.png")
    rooms = canvas((1568, 624), "ink")
    rd = ImageDraw.Draw(rooms)
    rd.fontmode = "1"
    for i, (assets, scale) in enumerate(versions):
        native = before.room(assets) if i == 0 else room(assets)
        rd.text((16+i*784, 12), "BEFORE / 16px tiles" if i == 0 else "AFTER / 32px tiles", font=font, fill=PALETTE["gold"])
        rooms.alpha_composite(native.resize((768, 576), Image.Resampling.NEAREST), (8+i*784, 40))
    rooms.save(Path(output) / "room_comparison.png")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output")
    args = parser.parse_args()
    export(args.output, args.seed)
