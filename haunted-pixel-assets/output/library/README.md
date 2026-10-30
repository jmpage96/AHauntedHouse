# A library worth haunting

A native-pixel Victorian furniture catalogue for the existing mansion architecture.
**112 base types, 302 sprites, eight categories**, with an authored 832 x 704
library containing 80 placed furniture and clutter objects. All drawing is Python
and Pillow at native resolution; no downloaded art or external image generation.

## Build and verify

```sh
python build_library.py
python build_library.py --seed 42 --output output/library-42
python -m unittest discover -s tests -v
node --test tests/viewer.test.cjs
python verify_library.py
```

The default export is `output/library/`. `--no-room-gif` skips only the larger room
animation; individual animated-object GIFs are still exported. `verify_library.py`
uses the installed Tiled `tmxrasterizer`; supply `--rasterizer` if it is elsewhere,
or `--root output/library-42` for a different export.

All original generators, assets, character frames and previews are preserved.
The export includes its own copy of the existing architectural recipes' PNG/TSX
output for the requested seed, under `architecture/`. The complete library export
is therefore movable as one folder, without broken references to sibling files.

## Browse the pack

- `library.png` / `library_native.png`: the furnished room at 2x / native resolution.
- `library.gif`: subtle fire, candle and pendulum motion in the same room, native size.
- `library.tmx`: the editable scene with architecture tile layers and furniture objects.
- `collision_preview.png`: the scene with floor footprints outlined for placement review.
- `overview.png`: one full native sprite for every requested type, grouped by category.
- `contact_sheet.png` / `contact_sheet_native.png`: exhaustive labelled contact sheet,
  including every exported direction, finish and state, at 2x / native resolution.
- `galleries/{category}.png` and `_native.png`: easier-to-inspect category pages.
- `{category}.png`: transparent category sprite sheet.
- `{category}.tsx`: Tiled image-collection tileset for whole furniture sprites.
- `sprites/{category}/{asset_id}.png`: individually exported native transparent images.
- `layers/{group}/static.png` and state PNGs: separate static / motion layers for lights,
  clock, fireplace and portrait.
- `animations/`: looping 4x nearest-neighbour GIF previews for cyclic assets.
- `manifest.json`: the complete machine-readable asset and scene index.
- `validation/`: real Tiled renders of all category atlases and the room, plus a report.

All image dimensions are multiples of 32, including multi-cell furniture. Tiny
clutter occupies only part of a 32 x 32 cell. The manifest records actual visible
bounds so an inkpot is not mistaken for a table-sized object. Nothing is stretched
to fill its grid cell. The full catalogue is intentionally tall; category pages
are more convenient for close inspection.

## Catalogue coverage

| Category | Required types | Exported sprites | Main variations |
| --- | ---: | ---: | --- |
| bookshelves | 16 | 48 | Three finishes/arrangements each; narrow through extra tall, corner, glass, built-in, crowned, empty, partial, overstuffed, ornamented, locked lower cabinets, revolving and display |
| desks | 12 | 42 | Two finishes; four views for grand desks, reading tables and writing bureaux; roll-top, secretary, round, pedestal, side and tea tables, lectern, document stand, open drawers |
| seating | 10 | 63 | Front/back/left/right where meaningful; leather, green velvet, burgundy, carved chairs, sofa, chaise, stools and bench |
| lighting | 10 | 38 | Banker, brass and reading lamps; oil, candles, three/five-light holders, sconce, standing lamp, chandelier; lit/unlit or flickering/extinguished |
| clutter | 24 | 40 | All requested books, papers, writing tools, instruments, letter accessories and tea service; three binding/ribbon colours where useful |
| decorations | 20 | 24 | Globes, busts, mirror, portrait, prints, maps, butterfly display, dome, vase, telescope, hourglass, clock, certificate, corvid, urn, fern, curtains and rug |
| large_furnishings | 12 | 25 | Ladders, mantel, grate, basket, tools, folding screen, display/curiosity/catalogue/writing cabinets, grandfather clock |
| mysteries | 8 | 22 | Mechanism and locked bookcases, marked tome, safe, puzzle box, brass device, secret desk and conspicuous ivory book; separate visual states |

The standard mahogany double bookcase is reused exactly from `generate.py`.
New casework shares its proportions, single-pixel bevels, shelf shading and brass
binding details. Colours and contents are seeded independently per type/variant.
Mahogany, oak and ebonised finishes are distinct in the cases; shelf contents mix
upright volumes, tilted spines, horizontal stacks and small ornaments.

The existing clock and candelabrum are padded onto grid-sized canvases without
scaling; their original frame pixels remain unchanged. The existing portrait
supplies normal/following states, and the fireplace gains a few native-pixel
mantel books. New candle motion uses the same `animate.Animation` static/layer/
duration convention and the existing `flame` primitive. GIFs use the explicit
shared palette with no dithering or frame-dependent colour quantization.

Some familiar forms intentionally share construction, but the large writing
cabinet has broad pigeonholes and labelled drawers, the secretary has tall carved
doors and a writing flap, and the roll-top has horizontal tambour slats. Curiosity
cases contain miniature busts, bottles, pinned butterflies, globes, hourglasses,
specimen domes, birds and minerals rather than duplicated book rows.

## Tiled placement

Open **`library.tmx`** as the placement example. To reuse furniture in another map:

1. Use an orthogonal map with a 32 x 32 grid.
2. Add the appropriate category `.tsx` as an external tileset.
3. Add an **object layer**. Select the furniture and use Tiled's tile-object tool.
4. Keep the object's width and height at their exported native dimensions. Large
   furniture is one object, not a mosaic of disconnected 32-pixel cells.
5. Tilesets explicitly use **top-left object alignment**, matching the architecture
   project's existing convention. `(x, y)` is the image's top-left placement.
6. For feet-based placement, subtract the manifest `anchor` from the desired world
   foot coordinate. For tabletop props, the anchor is the cell centre and
   `visible_bounds` gives the small painted region within it.

This uses Tiled's documented [image collection and tile-object alignment format](https://docs.mapeditor.org/en/stable/reference/tmx-map-format/).
The native image is referenced by each tile, with its own width, height and
collision object group. Category sprite sheets are also exported for game engines
that prefer atlases; the manifest's `sprite_sheet_region` tells you exactly which
rectangle to sample. The category sheets themselves are not sliced into 32-pixel
map tiles, because that would split large furniture and its collision geometry.

### Direction and depth

`south` shows the front of wall furniture, suitable against the north wall.
`north` shows a visible furniture back; `east` and `west` show separately drawn
side views. No finished sprite is rotated to manufacture a new direction. The
lighting remains upper-left. Side-facing sofas show a long seating plane, while
their front view is broad; these orientations can have different frame dimensions.
Ordinary tabletop clutter and symmetric stools do not need four directions.

Layer rugs before solid furniture, wall decorations before freestanding items,
and tabletop clutter above its parent surface. The sample uses explicit indexed
object-layer order, with solid furniture sorted by foot position. The renderer
does not blindly sort every quill or lamp by image bottom, which could put a lamp
behind the table it sits on. Parent surface names and authored layers are recorded
in both the scene manifest and Tiled object properties.

### Collision and interaction metadata

Solid furniture includes explicit, sprite-local **ground footprint rectangles**
in the TSX tile's collision object group. These are not the full tall silhouette:
the top of a bookcase, clock or wingback backrest should not block floor tiles
behind its feet. Side-facing long tables and sofas have extended plan footprints
to cover their length. Narrow cabinet, globe, lamp and ladder bases use smaller
rectangles. Tabletop clutter, wall pictures, curtains, rugs, ceiling lamps and
decorative hearth grates are nonblocking.

An engine must transform tile-local collision objects with the tile object's
placement. The Tiled scene is an artwork/placement demonstration, not a new game
runtime or pathfinding implementation. Footprints are practical axis-aligned
approximations; tune them to the final player collider where a narrow passage
needs different clearance. Keep object scaling at 1x to preserve pixel density.

Mystery variants are **art states only**, without puzzle code or invented rules.
`closed` / `open` identify the two visual treatments; for the marked book this
means dormant / glowing markings, and for the brass device it means two pointer
positions. The conspicuous ivory book is intentionally a single visual state.
The clock and flames loop; a portrait gaze or opened compartment is an explicitly
selected state, not an automatic gameplay event.

## Manifest and stable identifiers

Each asset entry includes:

- Stable string ID, category, kind and description.
- Stable local Tiled tile ID; category first GIDs for the sample map.
- Individual image, category sheet, source rectangle and native dimensions.
- Direction, placement, foot/centre anchor and visible painted bounds.
- Collision rectangles, decorative/interactable flags, and variant names.
- Available visual variants, related states, animation tile IDs and durations.
- Static/motion image paths where applicable, source/reuse attribution, pixel hash.

IDs reserve **128 local slots per base type**, 32 per finish/view group, with
direction and state subslots. Image collections support these intentional gaps.
Changing a seed changes arrangements, not IDs or file names. Do not reorder the
catalogue tuples when extending a pack already used by maps. Append new entries
or use reserved slots so existing IDs remain stable.

`bookshelves` and `desks` variants 0/1/2 mean mahogany/oak/ebonised where generated.
Seating alternatives use plum or green upholstery; colour information is visible
in the gallery and recorded as the primary/alternate treatment. Not every object
has redundant colour alternatives: tools and papers retain curated single designs.

## Visual review and validation

Inspected the existing architectural gallery, native bookcase, clock, fireplace,
portrait, palette and export code before drawing. Inspected every new category
page and the furnished room. Revisions included:

- Broader upholstered side profiles and rolled arms instead of plank-like chairs.
- Long side-facing sofa seat planes, with directional rather than rotated details.
- Flatter side-table tops and continuous pedestal supports.
- Distinct tea-table legs, reading-lamp shade and large writing-cabinet joinery.
- Individual curiosity specimens instead of repeated indistinct oval ornaments.
- Clutter kept on visible desk/table surfaces, wall pictures moved back onto walls,
  and enough space between reading, writing, archive and fireside areas.
- A complete dynamically sized overview, so tall casework cannot clip later rows.

The library has **80 authored placements**, including several shelf silhouettes,
a writing desk, reading table and four chairs, a fireside pair, sofa/tea grouping,
chaise, archive drawers, display cabinets, globe, ladder, window/doorway, rugs,
lamps, papers and a quieter secret writing corner. It is deliberately asymmetrical.

The Python suite covers all 112 requested types, native grid dimensions, palette,
binary transparency, IDs, seeded determinism, state anchors, exact reused pixels,
layer reconstruction, collision bounds, small nonblocking clutter, unclipped scene
placements, parent surfaces, sheet crops, TSX/TMX paths and decoded GIF frames.
All previous architecture, animation and character tests remain in the suite.

`verify_library.py` renders **all 302 sprites**, arranged at their actual native
sizes, through Tiled's own renderer. Each of eight category renders is compared
pixel-for-pixel with its Pillow atlas; the ninth comparison is the entire furnished
scene. The JSON report records the real results. This checks native tile-object
placement, relative paths and image-collection loading in addition to XML parsing.

## Source map

- `library_pack/common.py`: bindings, joinery, drawers, upholstery, legs and gears.
- `library_pack/furniture.py`: casework, desks, seating and large furnishings.
- `library_pack/objects.py`: lighting layers, clutter, curios and mystery treatments.
- `library_pack/catalogue.py`: the explicit coverage list and metadata conventions.
- `library_pack/scene.py`: editable room layout and layering.
- `library_pack/exporter.py`: atlases, Tiled files, manifest, contact sheets and GIFs.
- `build_library.py` / `verify_library.py`: generation and real Tiled validation.
