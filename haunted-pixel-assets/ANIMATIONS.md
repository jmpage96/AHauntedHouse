# Animation experiment

```sh
python animate.py
python animate.py --seed 42 --output output/animations-42
python -m unittest discover -s tests -v
```

Pillow only, using the existing 15-colour palette. `animate.py` imports the
existing drawing helpers and room renderer without changing either. Old assets,
exports and tests remain intact. Default output: `output/animations/`.

| Object | Native canvas | States | Playback |
| --- | --- | --- | --- |
| Clock | 48 × 112 | 6 pendulum frames | 200 ms each, 1.2 s loop |
| Fireplace | 64 × 64 | 4 flame frames | 100 ms each, 0.4 s loop |
| Portrait | 40 × 48 | normal, following | 2.2 s normal, 1 s following |
| Candelabra | 32 × 48 | 4 lit frames, extinguished | 100 ms lit frames; off is a selectable state |

The clock canvas accommodates a tall case at the same pixel density as the
64 × 96 bookcase. All drawing uses native integer pixel coordinates. The clock
hands are fixed; only the pendulum animates. The fireplace masonry, logs and
opening stay fixed. Candelabra arms, wax and wicks stay fixed, including when
extinguished. The portrait moves two pupils one pixel to the right: four changed
pixels total, no flashing eyes or head movement. A game can choose either state
based on player position; these are two authored states, not live gaze tracking.

## Files per object

- `static.png`: transparent base, without the moving pixels.
- `motion_sheet.png`: transparent moving layers, horizontal, no padding.
- `sheet.png`: complete transparent frames, horizontal, no padding.
- Named frame PNGs and matching `_motion.png` layers, all on the full fixed canvas.
- `preview.gif`: looping preview at 4× nearest-neighbour scale over a checkerboard.
- Candelabra also has `states.gif`, including an extinguished hold, and
  `extinguished.png`. Its regular preview loops only the four lit frames.

Composite `static.png` then the selected motion frame at the same origin. No
trimmed frames, shifting pivots, interpolation or partial alpha. The portrait
eyes overwrite the eye region on the base. The fireplace motion layer includes
stationary grate bars in front of the fire, since those must occlude the flames.
Its motion layer therefore remains transparent elsewhere, rather than being a
replacement rectangular background.

`manifest.json` records frame sizes, state names, durations, motion rectangles
and demonstration positions. Rectangles use Pillow crop conventions: left/top
inclusive, right/bottom exclusive. There is no duplicate closing frame. The
clock's return positions intentionally repeat along its back swing.

## Preview and demonstration

`preview_native.png` and `preview.png` show every frame; the labelled sheet is
enlarged 4×. `room_native.png` / `room.png` show the first demo frame at 1× / 4×.
`room.gif` runs for six seconds at 2× nearest-neighbour scale. The existing room
is the unchanged background, with four new objects composited over it. Clock
and fireplace continue looping; at 4 s the sitter glances right, and at 5.2 s
the candelabra goes out. The loop resets at 6 s. This timed sequence demonstrates
state selection, not a proposed room redesign or gameplay implementation.

GIFs use an explicit shared indexed palette, with no adaptive quantization or
dithering. They are opaque checkerboard previews; all production PNG sheets,
frames and layers retain transparency. The seed controls the fireplace's ember
placement. Fixed geometry and cyclic flame poses are deterministic.

## Inspection and tests

Inspected the first contact sheet and room render. Separate narrow fire tongues
looked too much like candles; the second pass connected them into a broad ember
bed with changing gold cores. Reduced the portrait sclera contrast so the
one-pixel glance is easier to doubt. Inspected the revised sheet and decoded
GIF frame samples. Playback tests compare every object GIF frame against its
intended nearest-neighbour rendering, catching trails, palette changes and
incorrect frame disposal as well as duration errors.

Additional tests cover frame counts and dimensions, binary transparency, palette,
seed reproducibility, motion bounds across 40 seeds, fixed object alpha masks,
the exact four-pixel portrait change, the extinguished layer, exported sheets and
frames, GIF loops and timing, and preservation of room pixels outside the new
objects' bounds. Existing asset tests still run, including seamless textures
across 40 seeds.
