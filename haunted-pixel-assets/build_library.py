"""Generate the Victorian library furniture catalogue and furnished Tiled demonstration."""
import argparse
from pathlib import Path
from library_pack.exporter import export

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--output", type=Path, default=Path(__file__).parent / "output" / "library")
    parser.add_argument("--no-room-gif", action="store_true", help="Skip only the larger animated room preview")
    args = parser.parse_args()
    m = export(args.output, args.seed, not args.no_room_gif)
    print(f"{m['base_types']} library types; {m['sprite_count']} sprites; {len(m['scene']['placements'])} room objects. {args.output.resolve()}")
