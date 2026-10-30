"""Optional integration check using Tiled's real command-line rasterizer."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
from PIL import Image


def verify(root, rasterizer):
    root = Path(root).resolve()
    destination = root / "tiled_validation"
    destination.mkdir(exist_ok=True)
    targets = [(p, root / "rooms" / (p.stem[5:]+"_native.png")) for p in sorted((root / "maps").glob("*.tmx"))]
    for name in ("floor.herringbone.v0", "architecture.double_doorway.wood", "architecture.stone_archway.stone",
                 "architecture.tall_window.wood", "wall.green_damask.door", "existing.door", "existing.bookcase"):
        targets.append((root / "assemblies" / f"{name}.tmx", root / "assemblies" / f"{name}.png"))
    report = []
    for tmx, expected in targets:
        output = destination / (tmx.stem+".png")
        result = subprocess.run([str(rasterizer), "--scale", "1", str(tmx), str(output)],
                                capture_output=True, text=True, timeout=30)
        if result.returncode or not output.is_file():
            raise RuntimeError(f"Tiled could not render {tmx.name}: {result.stderr}")
        with Image.open(output) as actual, Image.open(expected) as reference:
            if actual.convert("RGBA").tobytes() != reference.convert("RGBA").tobytes() or actual.size != reference.size:
                raise AssertionError(f"Tiled/Pillow render differs: {tmx.name}")
            report.append({"map": tmx.name, "exact_pixel_match": True, "size": actual.size,
                           "sha256": hashlib.sha256(actual.convert("RGBA").tobytes()).hexdigest()})
    (destination / "report.json").write_text(json.dumps(report, indent=2))
    print(f"Tiled rasterizer: {len(report)} maps / stamps render identically to Pillow.")
    return report


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).parent / "output" / "architecture")
    parser.add_argument("--rasterizer", type=Path, default=shutil.which("tmxrasterizer") or r"C:\Program Files\Tiled\tmxrasterizer.exe")
    args = parser.parse_args()
    if not args.rasterizer.is_file():
        parser.error("Tiled is optional. Supply --rasterizer with the installed tmxrasterizer executable.")
    verify(args.root, args.rasterizer)
