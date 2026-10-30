"""Render all furniture through Tiled, checking full-size objects and authored room layers."""
import argparse
import json
from pathlib import Path
import shutil
import subprocess
import xml.etree.ElementTree as ET
from PIL import Image
from architectural.exporter import write_xml


def verify(root, rasterizer):
    root = Path(root).resolve()
    dest = root / "validation"
    dest.mkdir(exist_ok=True)
    manifest = json.loads((root / "manifest.json").read_text(encoding="utf-8"))
    jobs = [(root / "library.tmx", root / "library_native.png", dest / "library_tiled.png")]
    for category in manifest["category_counts"]:
        with Image.open(root / f"{category}.png") as atlas:
            width, height = atlas.size
        group = [a for a in manifest["assets"] if a["category"] == category]
        doc = ET.Element("map", version="1.10", orientation="orthogonal", renderorder="right-down",
                         width=str(width//32), height=str(height//32), tilewidth="32", tileheight="32", infinite="0")
        ET.SubElement(doc, "tileset", firstgid="1", source=f"../{category}.tsx")
        og = ET.SubElement(doc, "objectgroup", id="1", name="Full-size furniture", draworder="index")
        for i, asset in enumerate(group, 1):
            x, y, w, h = asset["sprite_sheet_region"]
            ET.SubElement(og, "object", id=str(i), gid=str(asset["local_tile_id"]+1),
                          x=str(x), y=str(y), width=str(w), height=str(h))
        path = dest / f"{category}.tmx"
        write_xml(doc, path)
        jobs.append((path, root / f"{category}.png", dest / f"{category}_tiled.png"))
    results = []
    for tmx, expected, output in jobs:
        process = subprocess.run([str(rasterizer), "--scale", "1", str(tmx), str(output)],
                                 capture_output=True, text=True, timeout=30)
        if process.returncode or not output.is_file():
            raise RuntimeError(f"Tiled could not render {tmx.name}: {process.stderr}")
        with Image.open(output) as actual, Image.open(expected) as reference:
            if actual.size != reference.size or actual.convert("RGBA").tobytes() != reference.convert("RGBA").tobytes():
                raise AssertionError(f"Tiled/Pillow mismatch: {tmx.name}")
            results.append({"map": tmx.name, "pixel_match": True, "dimensions": actual.size})
    report = {"checks": results, "sprite_count": manifest["sprite_count"],
              "base_types": manifest["base_types"], "all_pixels_match": True}
    (dest / "tiled_report.json").write_text(json.dumps(report, indent=2))
    print(f"Tiled: {len(jobs)} exact pixel matches; all {manifest['sprite_count']} sprites and the furnished room verified.")
    return report


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).parent / "output" / "library")
    parser.add_argument("--rasterizer", type=Path, default=shutil.which("tmxrasterizer") or r"C:\Program Files\Tiled\tmxrasterizer.exe")
    args = parser.parse_args()
    if not args.rasterizer.is_file():
        parser.error("Supply the installed Tiled tmxrasterizer executable with --rasterizer")
    verify(args.root, args.rasterizer)
