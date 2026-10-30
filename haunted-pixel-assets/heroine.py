"""Victorian heroine drawing recipe: native pixels, shared mansion palette."""
import random
from PIL import Image, ImageDraw
from generate import PALETTE, canvas, rect, line


def draw_heroine(direction, phase=None, seed=13):
    if direction not in ("south", "north", "east", "west") or phase not in (None, 0, 1, 2, 3):
        raise ValueError("Expected a cardinal direction and phase None or 0..3")
    im = canvas((32, 48))
    d = ImageDraw.Draw(im)
    sway = 0 if phase is None else (-1, 0, 1, 0)[phase]
    step = 0 if phase is None else (-1, 0, 1, 0)[phase]
    lift = 0 if phase is None else (0, 1, 0, -1)[phase]
    side = direction in ("east", "west")
    # Tiny boot tips are visible below the long skirt; one remains planted.
    for x, up in ((12+step, max(lift, 0)), (18-step, max(-lift, 0))):
        rect(d, (x, 40, x+3, 44-up), "ink")
        line(d, [(x+1, 43-up), (x+2, 43-up)], "wood_dark")
    # Back hair lies behind the bodice and sleeves.
    d.polygon([(11, 8), (12, 5), (19, 5), (22, 8), (22, 19),
               (24, 25), (21, 28), (17, 25), (12, 28), (9, 24), (10, 17)],
              fill=PALETTE["wood_dark"])
    # Fitted waist opens into a full, weighted skirt rather than trouser legs.
    if side:
        outline = [(13, 20), (19, 20), (21, 24), (19, 28), (22, 32),
                   (25+sway, 41), (22+sway, 42), (8+sway, 42), (7+sway, 40),
                   (10, 31), (12, 27), (11, 23)]
    else:
        outline = [(12, 20), (20, 20), (23, 23), (20, 28), (23, 32),
                   (27+sway, 41), (23+sway, 42), (8+sway, 42), (5+sway, 41),
                   (9, 32), (12, 28), (9, 23)]
    d.polygon(outline, fill=PALETTE["ink"])
    d.polygon([(13, 21), (19, 21), (20, 24), (18, 28), (21, 33),
               (24+sway, 40), (9+sway, 40), (11, 32), (14, 28), (12, 24)],
              fill=PALETTE["purple_dark"])
    # Plum overskirt, dusty violet underskirt and narrow single-pixel folds.
    d.polygon([(14, 29), (18, 29), (20+sway, 40), (12+sway, 40)], fill=PALETTE["purple"])
    d.polygon([(12, 29), (15, 29), (12+sway, 36), (8+sway, 39)], fill=PALETTE["burgundy_dark"])
    d.polygon([(18, 29), (21, 31), (24+sway, 39), (20+sway, 36)], fill=PALETTE["burgundy_dark"])
    line(d, [(15, 32), (14+sway, 39)], "dust")
    line(d, [(18, 34), (19+sway, 39)], "purple_dark")
    line(d, [(8+sway, 40), (10+sway, 41), (14+sway, 41),
             (16+sway, 40), (19+sway, 41), (23+sway, 40)], "burgundy_light")
    line(d, [(12, 28), (19, 28)], "burgundy")
    d.point((16, 28), fill=PALETTE["brass"])
    # Puff sleeves, fitted forearms and small warm hands.
    for x, swing in ((10, step), (21, -step)):
        d.ellipse((x-1, 21, x+2, 25), fill=PALETTE["purple"])
        line(d, [(x, 25), (x+swing, 29)], "purple_dark")
        line(d, [(x+swing, 29), (x+swing, 30)], "dust")
        d.point((x+swing, 31), fill=PALETTE["wood_glint"])
    if direction == "north":
        # Hair covers the back collar: long sculpted waves and a ribbon half-up.
        d.polygon([(11, 8), (13, 5), (19, 5), (22, 9), (21, 17),
                   (23+sway, 24), (20+sway, 28), (17, 26), (13+sway, 28),
                   (10+sway, 25), (11, 18)], fill=PALETTE["wood"])
        for x in (13, 17, 20):
            line(d, [(x, 9), (x-1, 14), (x, 19)], "wood_light")
            line(d, [(x, 21), (x+1+sway, 24), (x+sway, 26)], "wood_light")
        line(d, [(12, 17), (20, 17)], "burgundy_dark")
        d.polygon([(13, 16), (16, 17), (19, 16), (19, 19), (16, 18), (13, 19)], fill=PALETTE["burgundy"])
        d.point((16, 17), fill=PALETTE["brass_dark"])
    elif side:
        rect(d, (17, 9, 20, 16), "dust")
        rect(d, (20, 11, 21, 15), "wood_glint")
        d.point((22, 13), fill=PALETTE["wood_glint"])
        d.point((20, 12), fill=PALETTE["ink"])
        d.point((20, 16), fill=PALETTE["burgundy_light"])
        line(d, [(18, 17), (18, 19)], "dust")
        line(d, [(17, 20), (20, 21)], "dust")
        d.polygon([(11, 8), (13, 5), (18, 5), (20, 8), (17, 9), (16, 14),
                   (17, 19), (16+sway, 24), (13+sway, 28), (10+sway, 25),
                   (12, 18), (10, 13)], fill=PALETTE["wood"])
        line(d, [(13, 8), (12, 12), (14, 17), (13, 21)], "wood_light")
        line(d, [(13+sway, 23), (12+sway, 26)], "wood_light")
        d.point((18, 17), fill=PALETTE["brass"])
    else:
        # A tapered face, dark lashes, side-parted chestnut hair and cameo collar.
        d.polygon([(13, 9), (19, 9), (20, 12), (19, 16), (17, 18),
                   (15, 18), (12, 15), (12, 11)], fill=PALETTE["wood_glint"])
        line(d, [(14, 10), (17, 10), (17, 14)], "dust")
        for x in (13, 18):
            line(d, [(x, 12), (x+1, 12)], "wood_dark")
            d.point((x+1, 13), fill=PALETTE["ink"])
        d.point((16, 15), fill=PALETTE["dust"])
        line(d, [(15, 17), (17, 17)], "burgundy_light")
        rect(d, (15, 18, 17, 20), "wood_glint")
        line(d, [(12, 20), (16, 22), (20, 20)], "dust")
        d.point((16, 22), fill=PALETTE["brass"])
        d.polygon([(10, 9), (12, 6), (15, 5), (19, 5), (22, 8), (22, 16),
                   (20, 18), (20, 11), (18, 8), (14, 9), (12, 12), (12, 17),
                   (10, 19), (9, 15)], fill=PALETTE["wood"])
        line(d, [(12, 8), (15, 6), (18, 6)], "wood_light")
        line(d, [(21, 10), (21, 15)], "wood_light")
        for x in (10, 21):
            line(d, [(x, 20), (x+1+sway, 24), (x+sway, 27)], "wood_light")
    # Tiny reticule at her left hip, replacing the broad cross-body satchel.
    if direction in ("south", "north"):
        x = 23 if direction == "south" else 5
        line(d, [(x+1, 29), (x+2, 31)], "brass_dark")
        rect(d, (x, 32, x+3, 36), "wood_dark")
        d.point((x+1, 32), fill=PALETTE["brass"])
    rng = random.Random(f"{seed}:dress")
    for _ in range(3):
        x, y = rng.randrange(14, 18), rng.randrange(35, 40)
        if im.getpixel((x, y))[:3] == tuple(bytes.fromhex(PALETTE["purple"][1:])):
            d.point((x, y), fill=PALETTE["purple_dark"])
    if direction == "west":
        reflected = im.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
        im = canvas((32, 48))
        im.alpha_composite(reflected, (1, 0))
    if phase is not None:
        # Reuse the fixed head/shoulder layer; flowing ends begin below this cut.
        still = draw_heroine(direction, None, seed)
        im.paste(still.crop((0, 0, 32, 22)), (0, 0))
    return im
