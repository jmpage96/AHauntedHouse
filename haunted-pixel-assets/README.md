# Haunted pixel assets

A small Pillow-only procedural asset generator for a top-down gothic Victorian
room. All shapes are drawn at native resolution, using 15 colours, integer
coordinates and fully opaque or fully transparent pixels. No downloaded art,
external services, antialiasing or paid dependencies.

## Run

```sh
python -m pip install -r requirements.txt
python generate.py
python -m unittest discover -s tests -v
```

Use `python generate.py --seed 42 --output output-42` for a variation. Output paths
are relative to your current directory when explicitly supplied; the default
is this project's `output` directory. Each asset gets an independent seeded RNG.
The seed varies floor grain, wallpaper wear and book arrangements; door geometry
stays fixed deliberately.

## Outputs

| File | Size | Purpose |
| --- | --- | --- |
| `floor.png` | 16 Ã— 16 | Opaque mahogany planks |
| `wallpaper.png` | 16 Ã— 16 | Opaque burgundy damask |
| `door.png` | 32 Ã— 32 | Transparent panel door and brass fittings |
| `bookcase.png` | 32 Ã— 48 | Transparent shelves, cupboards, books and candle |
| `preview.png` | 1088 Ã— 448 | Labelled 4Ã— sheet, 3Ã—3 texture samples, checkerboard behind sprites |
| `room.png` | 768 Ã— 576 | Example room at 4Ã— nearest-neighbour scale |
| `comparison.png` | 896 × 568 | Before (4×) and after (2×), equal displayed asset sizes |
| `room_comparison.png` | 1568 × 624 | Equal-size 768 × 576 room renders, before left / after right |
| `preview_native.png`, `room_native.png` | 272 Ã— 112; 192 Ã— 144 | Unscaled compositions |

The rug, trim and furniture shadows are simple room dressing drawn in `room()`;
the four standalone assets are composited unchanged. There is no perspective,
collision or game-engine integration.

## Edit the art

Start with `PALETTE` at the top of `generate.py`. The four asset functions are
short drawing recipes. `rect`, `line`, `panel` and `book` are reusable primitives.
Pillow rectangles include both endpoints. Use `repeat_tile` for texture fills,
and `alpha_composite` for furniture. Preview labels use monochrome font rendering.
Only the final preview and room are enlarged; exported assets remain native size.

The texture boundaries match exactly on opposite sides, including corners.
Wallpaper leaves its boundary undisturbed; floor grain stays inside the tile and
its border pixels are explicitly matched. This is a conservative seamless-edge
contract, checked across 40 seeds. It prevents mismatched edge pixels; visual
repetition still needs judgment, hence the repeated samples and room render.

## Visual iteration

The original 16px generator and its PNGs are preserved in `before/`. Comparisons
regenerate both versions with the requested seed: the old assets display at 4×,
the new assets at 2×, giving identical physical footprints and the same number
of texture repetitions. The default preview and room still export at 4×.
Keep `before/generate.py` with the project to regenerate the comparisons.

The 32px version redraws every asset at native resolution: single-pixel wood
fibres and nail heads, small knots, mirrored acanthus leaves and veins, pointed
door insets, layered cornices, an escutcheon and keyhole, fluted furniture posts,
book spine labels and binding bands, stacked volumes, and shaped candle details.
No old sprite is resized to make the new artwork. Only final display images use
nearest-neighbour resizing. The room layout doubles in native dimensions so its
composition stays comparable, with finer single-pixel decorative outlines.

Inspected the first larger-resolution asset and room comparisons. Door details
and damask read well, but the floor grain clustered too uniformly and the books
were all upright. A further pass spread out and reduced the fibres, added a
small knot, and introduced horizontal volumes. The final sheet and room were
inspected again. The palette remains exactly the original 15 colours.

Eight tests cover literal native sizes and RGBA mode, furniture transparency,
opaque textures, exact opposite edges across 40 seeds, palette membership
(including labels and room), reproducibility, variation, PNG exports, comparison
dimensions, and exact nearest-neighbour display scaling. A regression check also
ensures each new asset has detail finer than a doubled pixel block. Test temporary
directories stay inside this project for restricted Windows environments.

## Victorian architecture kit

See [ARCHITECTURE.md](ARCHITECTURE.md) for the separate 20-family Tiled tileset generator, construction guide and validation instructions.

