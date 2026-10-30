"""Build the native 32px Victorian Tiled kit; existing assets are read, not rewritten."""
from pathlib import Path
import argparse
from architectural.exporter import export

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output" / "architecture")
    args = parser.parse_args()
    result = export(args.output, args.seed)
    print(f"20 material families; {sum(t['active'] for t in result['tilesets'].values())} active tiles; "
          f"{len(result['assemblies'])} assemblies. Exported to {args.output.resolve()}")
