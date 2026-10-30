import tempfile
import unittest
from pathlib import Path

from PIL import Image, ImageColor

from generate import PALETTE, SIZES, export, make_assets, preview, room


class AssetTests(unittest.TestCase):
    def test_dimensions_and_modes(self):
        self.assertEqual(SIZES, {"floor": (32, 32), "wallpaper": (32, 32),
                                 "door": (64, 64), "bookcase": (64, 96)})
        for name, im in make_assets().items():
            self.assertEqual(im.size, SIZES[name], name)
            self.assertEqual(im.mode, "RGBA", name)

    def test_furniture_transparency(self):
        for seed in (0, 13, 99):
            assets = make_assets(seed)
            for name in ("door", "bookcase"):
                im = assets[name]
                alpha = im.getchannel("A")
                self.assertEqual(set(alpha.tobytes()), {0, 255}, name)
                self.assertEqual(im.getpixel((0, im.height//2))[3], 0)
                self.assertGreater(sum(a == 255 for a in alpha.tobytes()), 1600)

    def test_seamless_tile_edges_across_seeds(self):
        for seed in range(40):
            for name in ("floor", "wallpaper"):
                im = make_assets(seed)[name]
                self.assertEqual(im.getchannel("A").getextrema(), (255, 255))
                self.assertEqual(im.crop((0, 0, 1, 32)).tobytes(),
                                 im.crop((31, 0, 32, 32)).tobytes(), (name, seed, "horizontal"))
                self.assertEqual(im.crop((0, 0, 32, 1)).tobytes(),
                                 im.crop((0, 31, 32, 32)).tobytes(), (name, seed, "vertical"))

    def test_palette_and_no_partial_alpha(self):
        allowed = {ImageColor.getrgb(c) + (255,) for c in PALETTE.values()} | {(0, 0, 0, 0)}
        assets = make_assets()
        for name, im in {**assets, "preview": preview(assets), "room": room(assets)}.items():
            pixels = set(zip(*[iter(im.tobytes())]*4))
            self.assertLessEqual(pixels, allowed, name)

    def test_seed_reproducibility_and_variation(self):
        a, b, c = make_assets(13), make_assets(13), make_assets(14)
        for name in SIZES:
            self.assertEqual(a[name].tobytes(), b[name].tobytes())
        for name in ("floor", "bookcase"):
            self.assertNotEqual(a[name].tobytes(), c[name].tobytes())

    def test_export_and_exact_nearest_scaling(self):
        with tempfile.TemporaryDirectory(dir=Path(__file__).resolve().parent.parent) as folder:
            export(folder)
            for name, size in SIZES.items():
                with Image.open(Path(folder) / f"{name}.png") as im:
                    self.assertEqual(im.size, size)
            for name, native in (("preview", preview(make_assets())), ("room", room(make_assets()))):
                with Image.open(Path(folder) / f"{name}.png") as enlarged:
                    self.assertEqual(enlarged.size, (native.width*4, native.height*4))
                    self.assertEqual(enlarged.tobytes(), native.resize(enlarged.size, Image.Resampling.NEAREST).tobytes())
            for name, size in (("comparison", (896, 568)), ("room_comparison", (1568, 624))):
                with Image.open(Path(folder) / f"{name}.png") as im:
                    self.assertEqual(im.size, size)

    def test_new_art_is_not_two_times_upscaled(self):
        for name, im in make_assets().items():
            down = im.resize((im.width//2, im.height//2), Image.Resampling.NEAREST)
            self.assertNotEqual(im.tobytes(), down.resize(im.size, Image.Resampling.NEAREST).tobytes(), name)

    def test_room_and_preview_native_dimensions(self):
        self.assertEqual(room(make_assets()).size, (384, 288))
        self.assertEqual(preview(make_assets()).size, (544, 224))


if __name__ == "__main__":
    unittest.main()
