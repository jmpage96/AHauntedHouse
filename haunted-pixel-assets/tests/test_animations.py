import json
import tempfile
import unittest
from pathlib import Path

from PIL import Image, ImageChops, ImageColor
from animate import (POSITIONS, checker, demo_frames, export, make_animations, sheet)
from generate import PALETTE, make_assets, room


class AnimationTests(unittest.TestCase):
    def test_frame_counts_sizes_and_alpha(self):
        expected = {"clock": ((48, 112), 6), "fireplace": ((64, 64), 4),
                    "portrait": ((40, 48), 2), "candelabra": ((32, 48), 5)}
        for name, anim in make_animations().items():
            size, count = expected[name]
            self.assertEqual(anim.static.size, size)
            self.assertEqual(len(anim.frames), count)
            for frame in [anim.static]+anim.frames+anim.layers:
                self.assertEqual(frame.size, size)
                self.assertEqual(frame.mode, "RGBA")
                self.assertLessEqual(set(frame.getchannel("A").tobytes()), {0, 255})
                self.assertEqual(frame.getpixel((0, size[1]-1))[3], 0)
            self.assertEqual(sheet(anim.frames).size, (size[0]*count, size[1]))

    def test_palette_and_reproducibility(self):
        allowed = {ImageColor.getrgb(c)+(255,) for c in PALETTE.values()} | {(0, 0, 0, 0)}
        a, b = make_animations(13), make_animations(13)
        for name, anim in a.items():
            self.assertEqual(sheet(anim.frames).tobytes(), sheet(b[name].frames).tobytes())
            for frame in anim.frames:
                self.assertLessEqual(set(zip(*[iter(frame.tobytes())]*4)), allowed)
        self.assertNotEqual(sheet(a["fireplace"].frames).tobytes(),
                            sheet(make_animations(42)["fireplace"].frames).tobytes())

    def test_motion_confined_to_declared_region(self):
        for seed in range(40):
            for name, anim in make_animations(seed).items():
                for layer, frame in zip(anim.layers, anim.frames):
                    outside = layer.copy()
                    outside.paste((0, 0, 0, 0), anim.motion_box)
                    self.assertIsNone(outside.getbbox(), (name, seed))
                    # Check all channels; RGBA difference getbbox alone can miss RGB changes.
                    diff = ImageChops.difference(frame, anim.static)
                    diff.paste((0, 0, 0, 0), anim.motion_box)
                    self.assertEqual(diff.tobytes(), bytes(len(diff.tobytes())), name)
                if name != "candelabra":
                    for frame in anim.frames:
                        self.assertEqual(frame.getchannel("A").tobytes(), anim.static.getchannel("A").tobytes())

    def test_portrait_glance_and_extinguished_state(self):
        animations = make_animations()
        normal, following = animations["portrait"].frames
        normal_pixels = list(zip(*[iter(normal.convert("RGB").tobytes())]*3))
        following_pixels = list(zip(*[iter(following.convert("RGB").tobytes())]*3))
        changed = [i for i, (a, b) in enumerate(zip(normal_pixels, following_pixels)) if a != b]
        self.assertEqual(len(changed), 4)  # two pupils, each moves exactly one pixel
        self.assertEqual({i//40 for i in changed}, {21})
        candle = animations["candelabra"]
        self.assertIsNone(candle.layers[-1].getbbox())
        self.assertEqual(candle.frames[-1].tobytes(), candle.static.tobytes())
        self.assertEqual(len({im.tobytes() for im in candle.frames[:4]}), 4)

    def test_room_preserves_original_outside_added_objects(self):
        background = room(make_assets())
        frames = demo_frames(make_animations())
        self.assertEqual(len(frames), 60)
        for frame in frames:
            self.assertEqual(frame.size, background.size)
            diff = ImageChops.difference(frame, background)
            for name, (x, y) in POSITIONS.items():
                w, h = make_animations()[name].static.size
                diff.paste((0, 0, 0, 0), (x, y, x+w, y+h))
            self.assertEqual(diff.tobytes(), bytes(len(diff.tobytes())))

    def test_exports_and_gif_roundtrip(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent.parent) as folder:
            export(folder)
            root = Path(folder)
            manifest = json.loads((root / "manifest.json").read_text())
            animations = make_animations()
            self.assertEqual(set(manifest["assets"]), set(animations))
            for name, anim in animations.items():
                with Image.open(root / name / "sheet.png") as png:
                    self.assertEqual(png.tobytes(), sheet(anim.frames).tobytes())
                for label, expected in zip(anim.names, anim.frames):
                    with Image.open(root / name / f"{label}.png") as png:
                        self.assertEqual(png.tobytes(), expected.tobytes())
                count = 4 if name == "candelabra" else len(anim.frames)
                with Image.open(root / name / "preview.gif") as gif:
                    self.assertEqual(gif.n_frames, count)
                    self.assertEqual(gif.info["loop"], 0)
                    for i in range(count):
                        gif.seek(i)
                        self.assertEqual(gif.info["duration"], anim.durations[i])
                        expected = checker(anim.static.size)
                        expected.alpha_composite(anim.frames[i])
                        expected = expected.resize(gif.size, Image.Resampling.NEAREST).convert("RGB")
                        self.assertEqual(gif.convert("RGB").tobytes(), expected.tobytes(), (name, i))
                with Image.open(root / name / "motion_sheet.png") as png:
                    self.assertEqual(png.tobytes(), sheet(anim.layers).tobytes())
            with Image.open(root / "room.gif") as gif:
                self.assertEqual(gif.size, (768, 576))
                self.assertEqual(gif.n_frames, 60)
                self.assertEqual(gif.info["duration"], 100)
            with Image.open(root / "candelabra" / "states.gif") as gif:
                self.assertEqual(gif.n_frames, 5)
                gif.seek(4)
                self.assertEqual(gif.info["duration"], 1200)


if __name__ == "__main__":
    unittest.main()
