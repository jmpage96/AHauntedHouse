import base64
import io
import json
from pathlib import Path
import re
import tempfile
import unittest

from PIL import Image, ImageChops, ImageColor
from character import ANCHOR, DIRECTIONS, SIZE, STATES, export, investigator, make_character
from generate import PALETTE, make_assets, room
from animate import checker, sheet


class CharacterTests(unittest.TestCase):
    def test_dimensions_transparency_and_palette(self):
        self.assertEqual(SIZE, (32, 48))
        allowed = {ImageColor.getrgb(c)+(255,) for c in PALETTE.values()} | {(0, 0, 0, 0)}
        for frames in make_character().values():
            self.assertEqual(len(frames), 5)
            for frame in frames:
                self.assertEqual(frame.size, SIZE)
                self.assertEqual(frame.mode, "RGBA")
                self.assertEqual(set(frame.getchannel("A").tobytes()), {0, 255})
                self.assertLessEqual(set(zip(*[iter(frame.tobytes())]*4)), allowed)
                self.assertIsNone(frame.crop((0, 0, 3, 48)).getbbox())
                self.assertIsNone(frame.crop((30, 0, 32, 48)).getbbox())

    def test_alignment_fixed_head_and_ground_anchor(self):
        self.assertEqual(ANCHOR, (16, 44))
        for seed in range(40):
            for direction, frames in make_character(seed).items():
                reference = frames[0].crop((0, 0, 32, 22)).tobytes()
                for frame in frames:
                    self.assertEqual(frame.crop((0, 0, 32, 22)).tobytes(), reference, direction)
                    self.assertEqual(frame.getbbox()[1], 5)
                    self.assertEqual(frame.getbbox()[3], 45)  # at least one planted boot
                    # Hair crown and face remain aligned; only lower curls may sway.
                    self.assertEqual(frame.crop((0, 5, 32, 19)).tobytes(),
                                     frames[0].crop((0, 5, 32, 19)).tobytes())
                self.assertEqual(len({f.tobytes() for f in frames[1:]}), 4, direction)

    def test_reproducibility_and_validation(self):
        a, b = make_character(13), make_character(13)
        for direction in DIRECTIONS:
            self.assertEqual(sheet(a[direction]).tobytes(), sheet(b[direction]).tobytes())
        with self.assertRaises(ValueError):
            investigator("up")
        with self.assertRaises(ValueError):
            investigator("south", 4)

    def test_exports_atlas_frames_gifs_and_embedded_room(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent.parent) as folder:
            export(folder)
            root = Path(folder)
            character = make_character()
            meta = json.loads((root / "manifest.json").read_text())
            self.assertEqual(meta["anchor"], [16, 44])
            with Image.open(root / "investigator.png") as atlas:
                self.assertEqual(atlas.size, (160, 192))
                for row, direction in enumerate(DIRECTIONS):
                    frames = character[direction]
                    for col, state in enumerate(STATES):
                        self.assertEqual(atlas.crop((col*32, row*48, col*32+32, row*48+48)).tobytes(), frames[col].tobytes())
                        with Image.open(root / direction / f"{state}.png") as png:
                            self.assertEqual(png.tobytes(), frames[col].tobytes())
                    with Image.open(root / direction / "walk.gif") as gif:
                        self.assertEqual(gif.n_frames, 4)
                        self.assertEqual(gif.info["loop"], 0)
                        for i in range(4):
                            gif.seek(i)
                            self.assertEqual(gif.info["duration"], 120)
                            bg = checker(SIZE)
                            bg.alpha_composite(frames[i+1])
                            expected = bg.resize((128, 192), Image.Resampling.NEAREST).convert("RGB")
                            self.assertEqual(gif.convert("RGB").tobytes(), expected.tobytes())
            with Image.open(root / "room_native.png") as png:
                self.assertEqual(png.tobytes(), room(make_assets()).tobytes())
            page = (root / "play.html").read_text(encoding="utf-8")
            self.assertNotIn("__ROOM_DATA__", page)
            self.assertNotIn("__ATLAS_DATA__", page)
            embedded = re.findall(r'data:image/png;base64,([A-Za-z0-9+/=]+)', page)
            self.assertEqual(len(embedded), 2)
            with Image.open(io.BytesIO(base64.b64decode(embedded[0]))) as png:
                self.assertEqual(png.tobytes(), room(make_assets()).tobytes())


if __name__ == "__main__":
    unittest.main()
