# The heroine

Native 32 × 48 transparent RGBA frames in the existing 15-colour palette:
flowing chestnut hair, a fitted plum Victorian gown, pale collar, brass cameo,
small boots and a tiny reticule. The skirt has a violet underskirt and a softly
scalloped burgundy hem. No new dependencies or external art.

```sh
python character.py
python character.py --seed 42 --output output/character-42
python -m unittest discover -s tests -v
node --test tests/viewer.test.cjs
```

Open `output/character/play.html` in a browser. The generated page embeds its PNGs
and works offline without a server. Arrow keys or WASD move; release to idle.
Click the room if keyboard focus has moved elsewhere. The size button toggles
native / 2× display; reset returns to the rug. The browser demo was chosen because
Pygame is unavailable in the current environment. No installation is required.

## Export layout

- `investigator.png`: 160 × 192 transparent atlas, no padding.
- Rows: **south, west, east, north**, as recorded in `manifest.json`.
- Columns: **idle, walk_0, walk_1, walk_2, walk_3**.
- Each direction folder contains a transparent `sheet.png` (160 × 48), five
  individual PNG frames, `walk.gif` (4×, four frames at 120 ms), and `idle.gif`.
- `walk_all.gif` shows all four walking cycles together at 4× nearest-neighbour.
- `preview_native.png` / `preview.png` show every state at 1× / 4×.
- `room_native.png` is the original room, unchanged. `room_preview.png` is a 2×
  still of the investigator in it; `play.html` is the interactive version.

GIF checkerboards are preview backgrounds only. Production PNGs are transparent,
with no partial alpha. GIF previews reuse the animation module's explicit shared
palette and exact nearest-neighbour scaling. No dithering or adaptive colours.

## Alignment and editing

All frames use foot anchor **(16, 44)** on the full 32 × 48 canvas. To render at
world foot position `(x, y)`, draw at `(x - 16, y - 44)`. No frame trimming or
automatic recentering. Head and shoulders stay fixed throughout each walking
cycle; the lower curls, sleeves, skirt folds and hem move with the steps. Two contacts alternate with two passing poses; one boot remains planted
on row 44. Side-facing hands counter-swing. The west reflection is shifted one
pixel to reflect around x=16 rather than the canvas midpoint x=15.5.

The reticule hangs at her left hip in the front and rear views. West reflects
around x=16, maintaining the same foot anchor. Seeded dress texture stays fixed
across frames. Edit `heroine.py` for the active drawing recipe. The original
coat-and-hat recipe remains available as `character.coated_investigator`; the
export system calls the heroine recipe through its existing `investigator` name
so atlas paths and demo controls stay compatible.

## Demo behaviour

`viewer.html` is the editable source template; regenerate after changing it.
Canvas draws at the room's native 384 × 288 resolution. Rendering rounds positions
to integer pixels and disables smoothing. Movement keeps fractional positions
internally, runs at 64 native pixels/second, normalizes diagonals, slides along
colliders, and idles when movement is blocked. Wall and existing bookcase-foot
colliders keep the character inside the room. Bookcases occlude a character
behind them. The rug stays walkable. Blur and tab hiding clear pressed keys.

The existing room, generator, object animations and tests are preserved. This
is a movement prototype with the original static room; it adds no gameplay,
interactions, pathfinding or room redesign.

## Inspection and validation

Inspected the heroine contact sheet and room preview at the existing pixel
scale. Her head and shoulders are composited from the idle pose so only lower
hair ends sway. Replaced the straight hem highlight with a scalloped line to
soften the gown's silhouette, then inspected the final sheet. Updated the old
hat-specific alignment assertion to check hair/head stability instead.

Python tests check dimensions, palette, transparency, every atlas cell, individual
frames, GIF frame contents/timing, four unique walking poses per direction,
reproducibility, fixed heads, ground contact and hair alignment across 40 seeds,
and exact reuse of the room PNG embedded in the offline viewer. All previous
asset and animation tests still run.

Node's built-in tests exercise the viewer logic with a minimal DOM/canvas stub:
keyboard press/release, directional atlas selection, idle, diagonal speed,
collisions, focus loss and reset. The app's browser automation rejects local file
URLs, so a real browser play-through could not be performed in this session.
These logic tests do not substitute for that manual browser check.
