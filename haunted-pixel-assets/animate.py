"""Native pixel animation experiment. Run independently of generate.py."""
import argparse
import json
from dataclasses import dataclass
from pathlib import Path
import random

from PIL import Image, ImageColor, ImageDraw, ImageFont
from generate import PALETTE, canvas, rect, line, panel, make_assets, room


@dataclass
class Animation:
    static: Image.Image
    layers: list
    durations: list
    names: list
    motion_box: tuple

    @property
    def frames(self):
        return [Image.alpha_composite(self.static, layer) for layer in self.layers]


def clock():
    im = canvas((48, 112))
    d = ImageDraw.Draw(im)
    rect(d, (8, 7, 39, 107), "ink")
    panel(d, (10, 9, 37, 103), "wood_dark")
    panel(d, (13, 47, 34, 94), "shadow", "brass_dark")
    rect(d, (14, 49, 33, 92), "ink")
    # Dial and carved hood are entirely stationary.
    d.ellipse((11, 10, 36, 36), fill=PALETTE["ink"])
    d.ellipse((13, 12, 34, 34), fill=PALETTE["brass_dark"])
    d.ellipse((15, 14, 32, 32), fill=PALETTE["dust"])
    for x, y in ((23, 15), (30, 22), (23, 30), (16, 22)):
        line(d, [(x, y), (x, y+1)], "ink")
    for x, y in ((18, 17), (28, 17), (18, 28), (28, 28)):
        d.point((x, y), fill=PALETTE["wood_dark"])
    line(d, [(24, 23), (24, 17)], "ink")
    line(d, [(24, 23), (28, 25)], "ink")
    d.point((24, 23), fill=PALETTE["gold"])
    panel(d, (14, 38, 33, 44), "wood_dark")
    line(d, [(17, 40), (30, 40)], "wood_light")
    for x in (8, 37):
        rect(d, (x, 38, x+2, 98), "wood")
        line(d, [(x, 39), (x, 96)], "wood_glint")
    for y in (7, 35, 99, 104):
        rect(d, (7, y, 40, y+2), "wood_dark")
        line(d, [(8, y), (39, y)], "wood_glint")
    d.polygon([(7, 6), (12, 3), (19, 3), (23, 0), (27, 3), (35, 3), (40, 6)], fill=PALETTE["wood"])
    line(d, [(14, 4), (20, 4), (23, 2), (26, 4), (33, 4)], "wood_light")
    for x in (10, 32):
        rect(d, (x, 107, x+5, 111), "ink")
        line(d, [(x, 108), (x+4, 108)], "wood_light")
    layers = []
    # Samples of a sinusoidal swing; fixed pivot, fixed rod length (rounded pixels).
    for dx, yy in ((-5, 83), (-2, 84), (2, 84), (5, 83), (2, 84), (-2, 84)):
        layer = canvas(im.size)
        ld = ImageDraw.Draw(layer)
        x = 24+dx
        line(ld, [(24, 51), (x, yy)], "brass_dark")
        line(ld, [(24, 52), (x-1, yy-1)], "brass")
        ld.ellipse((x-4, yy-4, x+4, yy+4), fill=PALETTE["brass_dark"])
        ld.ellipse((x-3, yy-3, x+2, yy+2), fill=PALETTE["brass"])
        line(ld, [(x-2, yy-2), (x, yy-3)], "gold")
        layers.append(layer)
    return Animation(im, layers, [200]*6, [f"swing_{i}" for i in range(6)], (14, 49, 34, 93))


def flame(d, x, base, height, lean=0):
    """A fixed wick/root and moving tip, using three hard-edged palette colours."""
    d.polygon([(x-2, base), (x-3, base-3), (x-1, base-height+3),
               (x+lean, base-height), (x+2, base-4), (x+2, base)], fill=PALETTE["brass_dark"])
    d.polygon([(x-1, base), (x-1, base-4), (x+lean, base-height+2),
               (x+1, base-3), (x+1, base)], fill=PALETTE["brass"])
    line(d, [(x, base-1), (x, base-4)], "gold")


def fireplace(rng):
    im = canvas((64, 64))
    d = ImageDraw.Draw(im)
    rect(d, (5, 9, 58, 58), "ink")
    panel(d, (7, 12, 56, 56), "purple_dark", "purple")
    # Fixed opening, pillars, hearth, logs and grate.
    rect(d, (17, 26, 46, 54), "ink")
    d.pieslice((17, 16, 46, 38), 180, 360, fill=PALETTE["ink"])
    for x in (8, 49):
        panel(d, (x, 16, x+6, 55), "purple_dark", "purple")
        line(d, [(x+2, 20), (x+2, 51)], "shadow")
        for y in (17, 51):
            line(d, [(x, y), (x+6, y)], "dust")
    rect(d, (3, 7, 60, 12), "ink")
    line(d, [(4, 7), (59, 7)], "dust")
    line(d, [(5, 9), (58, 9)], "purple")
    for x in range(11, 56, 7):
        line(d, [(x, 13), (x+2, 13)], "brass_dark")
    d.polygon([(31, 14), (35, 18), (31, 22), (27, 18)], fill=PALETTE["brass_dark"])
    d.point((31, 17), fill=PALETTE["brass"])
    for x in (21, 32):
        rect(d, (x, 49, x+10, 52), "wood_dark")
        line(d, [(x, 49), (x+9, 49)], "wood_light")
    rect(d, (2, 58, 61, 62), "ink")
    line(d, [(3, 58), (60, 58)], "purple")
    line(d, [(5, 60), (58, 60)], "purple_dark")
    layers = []
    # The seed changes fixed embers, never the masonry silhouette.
    embers = [(rng.randrange(20, 44), rng.randrange(50, 53)) for _ in range(5)]
    for i in range(4):
        layer = canvas(im.size)
        ld = ImageDraw.Draw(layer)
        # A connected bed makes this read as a fire rather than separate candles.
        ld.polygon([(20, 49), (20, 44), (23, 42), (26, 44), (29, 41),
                    (33, 43), (37, 41), (42, 44), (43, 49)],
                   fill=PALETTE["brass_dark"])
        for j, x in enumerate((24, 31, 39)):
            flame(ld, x, 49, (10, 14, 12, 16)[(i+j)%4], (-1, 1, 0, -1)[(i+j)%4])
        ld.polygon([(22, 49), (25, 46-i%2), (28, 48), (32, 44+i%2),
                    (35, 47), (39, 46), (42, 49)], fill=PALETTE["brass"])
        line(ld, [(27, 48), (30, 47), (34, 48)], "gold")
        for x, y in embers:
            ld.point((x, y), fill=PALETTE["gold" if i%2 else "brass_dark"])
        # Grate overlays the flames, without re-drawing the fireplace body.
        line(ld, [(19, 50), (44, 50)], "shadow")
        for x in range(20, 45, 6):
            line(ld, [(x, 47), (x, 53)], "ink")
        layers.append(layer)
    return Animation(im, layers, [100]*4, [f"fire_{i}" for i in range(4)], (18, 30, 46, 54))


def portrait():
    im = canvas((40, 48))
    d = ImageDraw.Draw(im)
    panel(d, (2, 1, 37, 46), "brass_dark", "brass")
    panel(d, (5, 4, 34, 43), "wood_dark", "wood_glint")
    rect(d, (8, 7, 31, 40), "purple_dark")
    for x in (3, 34):
        for y in (2, 42):
            line(d, [(x, y+2), (x+2, y), (x+2, y+3)], "gold")
    # Severe Victorian sitter, dusty hair, high collar, muted skin tones.
    d.polygon([(10, 40), (12, 32), (17, 29), (23, 29), (29, 34), (30, 40)], fill=PALETTE["ink"])
    d.ellipse((13, 11, 26, 29), fill=PALETTE["shadow"])
    d.ellipse((15, 14, 25, 30), fill=PALETTE["wood_light"])
    line(d, [(16, 16), (17, 13), (22, 12), (25, 15)], "dust")
    line(d, [(24, 17), (25, 23), (23, 27)], "wood")
    line(d, [(20, 22), (19, 25), (21, 25)], "wood_glint")
    line(d, [(18, 28), (22, 28)], "burgundy_dark")
    for x in (16, 22):
        line(d, [(x, 20), (x+2, 20)], "shadow")
        line(d, [(x, 22), (x+2, 22)], "wood")
    d.polygon([(15, 31), (19, 34), (17, 38)], fill=PALETTE["purple"])
    d.polygon([(24, 31), (20, 34), (22, 38)], fill=PALETTE["purple_dark"])
    d.point((20, 36), fill=PALETTE["brass_dark"])
    layers = []
    for offset in (0, 1):
        layer = canvas(im.size)
        ld = ImageDraw.Draw(layer)
        for x in (16, 22):
            line(ld, [(x, 21), (x+2, 21)], "wood_glint")
            ld.point((x+1+offset, 21), fill=PALETTE["ink"])
        layers.append(layer)
    return Animation(im, layers, [2200, 1000], ["normal", "following"], (16, 21, 25, 22))


def candelabra():
    im = canvas((32, 48))
    d = ImageDraw.Draw(im)
    d.ellipse((7, 43, 25, 47), fill=PALETTE["brass_dark"])
    line(d, [(9, 43), (23, 43)], "brass")
    rect(d, (14, 26, 17, 43), "brass_dark")
    line(d, [(14, 27), (14, 41)], "brass")
    for y in (29, 39):
        line(d, [(12, y), (19, y)], "brass")
    for coords in ([(15, 30), (9, 29), (5, 24), (5, 21)],
                   [(16, 30), (23, 29), (27, 24), (27, 21)]):
        line(d, coords, "brass_dark")
        line(d, [(x, y-1) for x, y in coords], "brass")
    for x, base in ((5, 20), (16, 15), (27, 20)):
        rect(d, (x-2, base-6, x+1, base), "brass_dark")
        rect(d, (x-2, base-6, x-1, base-1), "gold")
        line(d, [(x-3, base+1), (x+3, base+1)], "brass")
        line(d, [(x, base-8), (x, base-7)], "ink")
        d.point((x+1, base-3), fill=PALETTE["brass"])
    layers = []
    for i in range(4):
        layer = canvas(im.size)
        ld = ImageDraw.Draw(layer)
        for j, (x, base) in enumerate(((5, 12), (16, 7), (27, 12))):
            flame(ld, x, base, (6, 7, 5, 6)[(i+j)%4], (0, 1, -1, 0)[(i+j)%4])
        layers.append(layer)
    layers.append(canvas(im.size))
    return Animation(im, layers, [100]*4+[1200], [f"lit_{i}" for i in range(4)]+["extinguished"], (2, 0, 30, 13))


def make_animations(seed=13):
    return {"clock": clock(), "fireplace": fireplace(random.Random(f"{seed}:fireplace")),
            "portrait": portrait(), "candelabra": candelabra()}


def sheet(frames):
    im = canvas((frames[0].width*len(frames), frames[0].height))
    for i, frame in enumerate(frames):
        im.alpha_composite(frame, (i*frame.width, 0))
    return im


def checker(size):
    im = canvas(size, "purple_dark")
    d = ImageDraw.Draw(im)
    for y in range(0, size[1], 4):
        for x in range(0, size[0], 4):
            if (x//4+y//4)%2:
                rect(d, (x, y, x+3, y+3), "shadow")
    return im


def save_gif(frames, path, durations, scale=4):
    # Explicit shared palette: no adaptive quantization or frame-to-frame colour drift.
    colors = [ImageColor.getrgb(c) for c in PALETTE.values()]
    indices = {rgb: i for i, rgb in enumerate(colors)}
    palette = [c for rgb in colors for c in rgb]+[0]*(768-len(colors)*3)
    indexed = []
    for frame in frames:
        bg = checker(frame.size)
        bg.alpha_composite(frame)
        rgb = bg.convert("RGB")
        data = rgb.tobytes()
        out = Image.new("P", rgb.size)
        out.putpalette(palette)
        out.putdata([indices[tuple(data[i:i+3])] for i in range(0, len(data), 3)])
        indexed.append(out.resize((out.width*scale, out.height*scale), Image.Resampling.NEAREST))
    indexed[0].save(path, save_all=True, append_images=indexed[1:], duration=durations,
                    loop=0, optimize=False, disposal=2)


POSITIONS = {"clock": (104, 16), "fireplace": (220, 66),
             "portrait": (232, 16), "candelabra": (262, 137)}


def demo_frames(animations, seed=13):
    background = room(make_assets(seed))
    frames = []
    for tick in range(60):
        im = background.copy()
        selection = {"clock": (tick//2)%6, "fireplace": tick%4,
                     "portrait": int(tick >= 40), "candelabra": 4 if tick >= 52 else tick%4}
        for name, pos in POSITIONS.items():
            anim = animations[name]
            im.alpha_composite(anim.static, pos)
            im.alpha_composite(anim.layers[selection[name]], pos)
        frames.append(im)
    return frames


def contact_sheet(animations):
    im = canvas((432, 328), "ink")
    d = ImageDraw.Draw(im)
    d.fontmode = "1"
    font = ImageFont.load_default(size=9)
    for name, y in (("clock", 18), ("fireplace", 148), ("portrait", 230), ("candelabra", 294)):
        anim = animations[name]
        # Candelabra uses a second column beside portrait, leaving space for labels.
        if name == "candelabra":
            y, start = 230, 160
        else:
            start = 8
        d.text((start, y-14), name.upper(), font=font, fill=PALETTE["gold"])
        for i, frame in enumerate(anim.frames):
            bg = checker(frame.size)
            bg.alpha_composite(frame)
            im.alpha_composite(bg, (start+i*(frame.width+4), y))
            if name == "portrait":
                d.text((start+i*44, y+50), anim.names[i], font=ImageFont.load_default(size=7), fill=PALETTE["dust"])
        if name == "candelabra":
            d.text((start, y+52), "4 LIT FRAMES + EXTINGUISHED", font=font, fill=PALETTE["dust"])
    return im


def export(output, seed=13):
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    animations = make_animations(seed)
    metadata = {"seed": seed, "sheet_layout": "horizontal, no padding", "assets": {}}
    for name, anim in animations.items():
        folder = output / name
        folder.mkdir(exist_ok=True)
        anim.static.save(folder / "static.png")
        sheet(anim.frames).save(folder / "sheet.png")
        sheet(anim.layers).save(folder / "motion_sheet.png")
        for label, frame, layer in zip(anim.names, anim.frames, anim.layers):
            frame.save(folder / f"{label}.png")
            layer.save(folder / f"{label}_motion.png")
        count = 4 if name == "candelabra" else len(anim.frames)
        save_gif(anim.frames[:count], folder / "preview.gif", anim.durations[:count])
        if name == "candelabra":
            save_gif(anim.frames, folder / "states.gif", anim.durations)
        metadata["assets"][name] = {"size": list(anim.static.size), "states": anim.names,
            "durations_ms": anim.durations, "motion_box": anim.motion_box,
            "demo_position": POSITIONS[name]}
    native = contact_sheet(animations)
    native.save(output / "preview_native.png")
    native.resize((native.width*4, native.height*4), Image.Resampling.NEAREST).save(output / "preview.png")
    frames = demo_frames(animations, seed)
    frames[0].save(output / "room_native.png")
    frames[0].resize((1536, 1152), Image.Resampling.NEAREST).save(output / "room.png")
    save_gif(frames, output / "room.gif", [100]*len(frames), scale=2)
    (output / "manifest.json").write_text(json.dumps(metadata, indent=2))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output" / "animations")
    args = parser.parse_args()
    export(args.output, args.seed)
