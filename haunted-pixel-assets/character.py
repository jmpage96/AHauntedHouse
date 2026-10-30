"""32x48 investigator, native pixel drawing and an offline playable room."""
import argparse
import base64
import io
import json
from pathlib import Path
import random

from PIL import Image, ImageDraw, ImageFont
from generate import PALETTE, canvas, rect, line, panel, make_assets, room
from animate import checker, save_gif, sheet
from heroine import draw_heroine as investigator

SIZE = (32, 48)
ANCHOR = (16, 44)  # ground contact; identical in every direction and pose
DIRECTIONS = ("south", "west", "east", "north")
STATES = ("idle", "walk_0", "walk_1", "walk_2", "walk_3")
# Two contact poses alternating with two passing poses. No duplicated end frame.
GAIT = ((-2, 2, 0, 0), (0, 0, 2, 0), (2, -2, 0, 0), (0, 0, 0, 2))


def satchel(d, x, y):
    panel(d, (x, y, x+6, y+8), "wood", "wood_light")
    rect(d, (x+1, y+1, x+5, y+3), "wood_dark")
    line(d, [(x+1, y+4), (x+5, y+4)], "wood_glint")
    rect(d, (x+3, y+3, x+4, y+5), "brass_dark")
    d.point((x+3, y+3), fill=PALETTE["brass"])


def boot(d, x, y, profile=False):
    rect(d, (x, y-7, x+3, y), "ink")
    rect(d, (x+1, y-6, x+2, y-2), "wood_dark")
    line(d, [(x+1, y-5), (x+2, y-5)], "brass_dark")
    if profile:
        rect(d, (x+2, y-2, x+5, y), "ink")
        line(d, [(x+3, y-2), (x+4, y-2)], "purple_dark")
    else:
        line(d, [(x+1, y-1), (x+3, y-1)], "purple_dark")


def coated_investigator(direction, phase=None, seed=13):
    if direction not in DIRECTIONS or phase not in (None, 0, 1, 2, 3):
        raise ValueError("Expected a cardinal direction and phase None or 0..3")
    im = canvas(SIZE)
    d = ImageDraw.Draw(im)
    a, b, lift_a, lift_b = (0, 0, 0, 0) if phase is None else GAIT[phase]
    profile = direction in ("east", "west")
    # Legs are drawn first, under a fixed torso. One boot always touches y=44.
    if profile:
        boot(d, 12+a, 44-lift_a, True)
        boot(d, 15+b, 44-lift_b, True)
        d.polygon([(12, 18), (20, 18), (22, 24), (21, 31),
                   (23, 36), (19, 38), (12, 36), (10, 32)], fill=PALETTE["ink"])
        d.polygon([(13, 19), (19, 20), (20, 28), (19, 34),
                   (21, 35), (14, 35), (12, 30)], fill=PALETTE["purple_dark"])
        line(d, [(13, 23), (13, 31), (15, 34)], "purple")
        # Far-side hand follows the rear leg, within a small fixed motion region.
        rect(d, (18-a//2, 27, 20-a//2, 31), "shadow")
        rect(d, (18-a//2, 31, 19-a//2, 33), "wood_glint")
    else:
        boot(d, 11+a//2, 44-lift_a)
        boot(d, 18+b//2, 44-lift_b)
        d.polygon([(11, 18), (20, 18), (23, 22), (23, 28),
                   (22, 30), (24, 36), (17, 38), (8, 36), (10, 29), (8, 24)],
                  fill=PALETTE["ink"])
        d.polygon([(12, 19), (19, 19), (21, 24), (20, 30),
                   (22, 35), (17, 36), (10, 35), (12, 28)], fill=PALETTE["purple_dark"])
        line(d, [(12, 24), (11, 31), (12, 34)], "purple")
        line(d, [(19, 29), (20, 34)], "shadow")
        # Sleeves and gloves move minimally; head and shoulder width do not bob.
        for x, swing in ((8, a//2), (22, b//2)):
            rect(d, (x, 23, x+2, 29+swing), "shadow")
            line(d, [(x, 24), (x, 27+swing)], "purple_dark")
            rect(d, (x, 30+swing, x+1, 31+swing), "wood_glint")
    # Face uses existing muted warm colours; no extra skin palette.
    if direction == "north":
        rect(d, (12, 11, 20, 18), "wood_dark")
        line(d, [(12, 15), (13, 17), (19, 17), (20, 15)], "wood")
        line(d, [(11, 19), (16, 21), (21, 19)], "purple")
        line(d, [(16, 23), (16, 34)], "shadow")
        line(d, [(17, 32), (18, 35)], "purple")
        line(d, [(21, 19), (11, 30)], "wood_light")
        line(d, [(20, 19), (10, 30)], "wood_dark")
        satchel(d, 6, 29)
    elif profile:
        rect(d, (13, 11, 20, 17), "wood_dark")
        rect(d, (18, 12, 21, 17), "wood_glint")
        rect(d, (21, 14, 22, 15), "wood_light")
        d.point((20, 13), fill=PALETTE["ink"])
        line(d, [(17, 18), (20, 18), (19, 21)], "purple")
        # Near sleeve and glove counter-swing, without shifting the shoulder.
        sx = a//2
        line(d, [(16, 23), (16+sx, 28), (17+sx, 30)], "shadow")
        line(d, [(16, 24), (16+sx, 28)], "purple")
        rect(d, (17+sx, 31, 18+sx, 32), "wood_glint")
        # East sees the far side of the bag; west sees its flap after reflection.
        if direction == "east":
            line(d, [(14, 20), (13, 30)], "wood_dark")
            rect(d, (11, 29, 13, 36), "wood")
        else:
            line(d, [(14, 20), (17, 29)], "wood_light")
            satchel(d, 14, 28)
    else:
        rect(d, (12, 11, 20, 16), "wood_glint")
        rect(d, (13, 16, 19, 18), "wood_light")
        line(d, [(12, 12), (12, 15)], "wood_dark")
        for x in (14, 18):
            d.point((x, 13), fill=PALETTE["ink"])
        d.point((16, 15), fill=PALETTE["wood_light"])
        line(d, [(15, 17), (17, 17)], "burgundy_dark")
        d.polygon([(11, 19), (15, 21), (14, 25)], fill=PALETTE["purple"])
        d.polygon([(20, 19), (16, 21), (18, 25)], fill=PALETTE["shadow"])
        line(d, [(15, 21), (16, 25)], "burgundy")
        for y in (27, 31):
            d.point((16, y), fill=PALETTE["brass_dark"])
        line(d, [(11, 20), (22, 30)], "wood_light")
        line(d, [(12, 20), (23, 30)], "wood_dark")
        satchel(d, 21, 29)
    # Fixed cloth wear is seeded once per pose, so it cannot sparkle during walks.
    rng = random.Random(f"{seed}:coat")
    for _ in range(3):
        x, y = rng.randrange(14, 19), rng.randrange(26, 34)
        if im.getpixel((x, y)) == (*tuple(bytes.fromhex(PALETTE["purple_dark"][1:])), 255):
            d.point((x, y), fill=PALETTE["shadow"])
    # Dark felt hat, one-pixel crown highlight and a restrained brass pin.
    rect(d, (11, 5, 21, 10), "ink")
    rect(d, (12, 5, 20, 8), "purple_dark")
    line(d, [(13, 5), (19, 5)], "purple")
    line(d, [(12, 9), (20, 9)], "burgundy_dark")
    line(d, [(8, 11), (24, 11)], "ink")
    line(d, [(9, 10), (23, 10)], "shadow")
    if direction != "north":
        d.point((20, 9), fill=PALETTE["brass_dark"])
    # Reflect only geometry for west; its bag was authored for the near side.
    if direction == "west":
        reflected = im.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
        im = canvas(SIZE)
        im.alpha_composite(reflected, (1, 0))  # reflect around x=16, not x=15.5
    return im


def make_character(seed=13):
    return {direction: [investigator(direction, None, seed)]+
            [investigator(direction, i, seed) for i in range(4)] for direction in DIRECTIONS}


def data_url(im):
    buffer = io.BytesIO()
    im.save(buffer, format="PNG")
    return "data:image/png;base64,"+base64.b64encode(buffer.getvalue()).decode("ascii")


def export(output, seed=13):
    output = Path(output)
    output.mkdir(parents=True, exist_ok=True)
    character = make_character(seed)
    atlas = canvas((160, 192))
    preview = canvas((224, 240), "ink")
    pd = ImageDraw.Draw(preview)
    pd.fontmode = "1"
    font = ImageFont.load_default(size=8)
    metadata = {"frame_size": SIZE, "anchor": ANCHOR, "directions": DIRECTIONS,
                "columns": STATES, "walk_duration_ms": 120, "seed": seed,
                "layout": "rows: directions; columns: idle then four walk frames"}
    for row, (direction, frames) in enumerate(character.items()):
        folder = output / direction
        folder.mkdir(exist_ok=True)
        strip = sheet(frames)
        atlas.alpha_composite(strip, (0, row*48))
        strip.save(folder / "sheet.png")
        for state, frame in zip(STATES, frames):
            frame.save(folder / f"{state}.png")
        save_gif(frames[1:], folder / "walk.gif", [120]*4)
        save_gif([frames[0]], folder / "idle.gif", [1000])
        pd.text((4, row*60+2), direction.upper(), font=font, fill=PALETTE["gold"])
        for col, frame in enumerate(frames):
            bg = checker(SIZE)
            bg.alpha_composite(frame)
            preview.alpha_composite(bg, (42+col*36, row*60+10))
    atlas.save(output / "investigator.png")
    cycles = []
    for phase in range(4):
        cycle = canvas((176, 64), "ink")
        cd = ImageDraw.Draw(cycle)
        cd.fontmode = "1"
        for col, direction in enumerate(DIRECTIONS):
            cd.text((col*44+2, 1), direction.upper(), font=font, fill=PALETTE["gold"])
            bg = checker(SIZE)
            bg.alpha_composite(character[direction][phase+1])
            cycle.alpha_composite(bg, (col*44+5, 14))
        cycles.append(cycle)
    save_gif(cycles, output / "walk_all.gif", [120]*4)
    preview.save(output / "preview_native.png")
    preview.resize((896, 960), Image.Resampling.NEAREST).save(output / "preview.png")
    (output / "manifest.json").write_text(json.dumps(metadata, indent=2))
    background = room(make_assets(seed))
    # Export the reused room separately and embed both PNGs for an offline HTML demo.
    background.save(output / "room_native.png")
    demo = Path(__file__).with_name("viewer.html").read_text(encoding="utf-8")
    demo = demo.replace("__ROOM_DATA__", data_url(background)).replace("__ATLAS_DATA__", data_url(atlas))
    (output / "play.html").write_text(demo, encoding="utf-8")
    shot = background.copy()
    shot.alpha_composite(character["south"][0], (176, 148))
    shot.resize((768, 576), Image.Resampling.NEAREST).save(output / "room_preview.png")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output" / "character")
    args = parser.parse_args()
    export(args.output, args.seed)
