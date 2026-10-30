# Victorian mansion architecture kit

Native 32-pixel tiles for an orthogonal, top-down mansion in Tiled. All new art
is drawn directly with Pillow at native resolution. Existing furniture, doors,
animations, heroine and original room exports remain intact.

The kit contains **10 floor families, 10 wall families, 753 active tile cells,
106 assembly stamps, and 10 editable demonstration rooms**. Transparent reserved
cells are intentional expansion space, not additional artwork.

## Generate and check

```sh
python build_architecture.py
python build_architecture.py --seed 42 --output output/architecture-42
python -m unittest discover -s tests -v
node --test tests/viewer.test.cjs
```

Pillow is the only generation dependency. Tiled is optional for generation.
If installed, run the independent integration check:

```sh
python verify_tiled.py
python verify_tiled.py --rasterizer "C:/Program Files/Tiled/tmxrasterizer.exe"
```

Default output: `output/architecture/`. Paths in TSX/TMX are relative, so move
or distribute this whole output directory together. `README.md` is copied into
the output as a construction reference.

## Start in Tiled

1. Open `maps/room_02_green_damask.tmx` for an assembled parquet drawing room.
   Alternatively create an **orthogonal 32 x 32** map and add `floors.tsx`,
   `walls.tsx`, and `architecture.tsx` as external tilesets.
2. Keep floor, wall facade, shared architecture, and furniture on separate layers,
   in that draw order. The examples show the intended construction.
3. Fill floors with a material's Terrain Set. For oak and parquet choose its
   **phase locked** set, or use its supplied 2 x 2 assembly stamp.
4. Build the back facade using the `upper`, `middle`, `lower` tiles, in three
   consecutive rows. Repeat columns to make the room as wide as needed.
5. Add `vertical_left` / `vertical_right` for cutaway side walls and
   `horizontal_south` for the foreground cutaway. Use the four `room_*` corners.
6. Replace two facade columns with the family's **2 x 3** window or door assembly.
   The finished 64 x 64 door goes in the bottom two rows of that door assembly.
   It is included unchanged in `architecture.tsx` and as `existing.door.tmx`.
7. Select a multi-cell rectangle directly in a tileset to use as a stamp. Or open
   its map under `assemblies/`, select its cells, copy, then paste into your map.

Each floor repeat, wall opening and shared assembly occupies a rectangular area
of its source atlas. No manual reconstruction from a horizontal strip is needed.
Do not drag blank reserved cells into a map. The manifest is the exact ID index.

### Wall construction convention

The north-facing facade is **96 pixels high**, matching the scale and upper-left
lighting of the existing door and bookcase. The top row includes an 8-pixel
cornice, the middle row carries the material, and the lower row ends in an
8-pixel skirting. Half panelling starts 48 pixels down the facade; full panelling
has uninterrupted tall carved frames across all three rows.

Side and foreground walls are **8-pixel cutaways**, a top-down interior convention.
They are not rotated full-height north-facing facades. The left cutaway occupies
the last eight pixels of its cell, the right cutaway the first eight. The south
cutaway occupies the first eight rows of its cell. This leaves the floor inside
the room, with its exterior margin transparent.

An 8 x 8 example, with corners and three-row north facade:

```text
NW  U   U   U   U   U   U   NE
 L  M   M   M   M   M   M    R
 L  B   B   B   B   B   B    R
 L  .   .   .   .   .   .    R
 L  .   .   .   .   .   .    R
 L  .   .   .   .   .   .    R
 L  .   .   .   .   .   .    R
SW  S   S   S   S   S   S   SE
```

`U/M/B` = upper/middle/lower facade. `L/R` = side cutaways. `S` = south cutaway.
`.` = floor. Lay floor under the facade as well; opaque facade tiles cover it.
Door and window assemblies replace two adjacent `U/M/B` columns.

`outer_*` and `inner_*` tiles provide L trims for partition turns, using different
edge orientations. `horizontal_north` sits at the bottom of its cell for an
opposing cutaway edge; `horizontal_south` sits at the top. `end_left` and
`end_right` finish narrow vertical cutaways. Shared 96-pixel pilasters/end caps
finish the tall facade. No rotations are required or enabled, preserving lighting.

The example rooms use widths 10, 12 and 14 tiles and heights 9, 10 and 11 tiles.
The renderer is also tested with other rectangular proportions.

## Material catalogue

Every floor has **five distinct deterministic variants**: one primary treatment
and four subtle wear variations. Edge collars are invariant across the five.

| Floor family | Treatment | Native repeat |
| --- | --- | --- |
| dark_oak | Long polished boards, staggered joints, fine fibres and nails | 64 x 64 / 2 x 2 cells |
| herringbone | Diagonal interlocking timber dominoes, bevels and grain | 64 x 64 / 2 x 2 cells |
| checker_marble | Aged ivory / charcoal squares, hard pixel veins | 32 x 32 |
| flagstone | Warm grey staggered slabs, chips, shallow pits and wear | 32 x 32 |
| attic_boards | Narrow rough timber, knots and nail heads | 32 x 32 |
| red_carpet | Deep burgundy with restrained woven pile | 32 x 32 |
| floral_carpet | Dusty rose flowers, sage stems and small woven diamonds | 32 x 32 |
| utility_tiles | Small terracotta / cream ceramics, charcoal joints | 32 x 32 |
| cellar_stone | Dark blocks, deep mortar, damp marks and chipped facets | 32 x 32 |
| conservatory | Sage, terracotta and ivory geometric encaustic repeat | 32 x 32 |

Wall families: **burgundy_damask, green_damask, blue_floral, cream_floral,
wood_panelling, half_panelling, plaster, brick, cellar_wall, striped**.
Each includes 51 named tile cells:

| Parts | Roles |
| --- | --- |
| Facade | upper, middle, lower, surface, middle_v1 through middle_v4 |
| Trim | skirting, cornice, wall_to_floor |
| Cutaways | horizontal_north, horizontal_south, vertical_left, vertical_right |
| Corners | room_nw/ne/sw/se, outer_nw/ne/sw/se, inner_nw/ne/sw/se |
| Ends | end_left, end_right |
| Openings | door_0_0 through door_1_2, window_0_0 through window_1_2 |
| Separate surrounds | surround_left_0/1/2, surround_right_0/1/2 |
| Headers / thresholds | header_left/right, threshold_left/right |

Middle variations provide extra surface wear where applicable. Structural panels
remain fixed. Opaque family doorway assemblies include wall behind the jambs and
an ink-dark passage. Separate shared frames have transparent centres for layering.

## Shared architecture

Sixteen construction types, with wood, stone and plaster variants where useful:

- Plain, ornate and double-width interior doorway openings.
- Wooden and carved wooden door frames; stone and wooden archways.
- Tall Victorian and smaller service-window surrounds with muted glass and mullions.
- Wooden and stone skirting; plain plaster and ornate cornices.
- Pilasters, tall wall end caps, and floor thresholds.

Doorways are normally 64 x 96; double doorways are 128 x 96. Tall windows are
64 x 96 and service windows 64 x 64. Pilasters/end caps are 32 x 96. Strips and
thresholds occupy 32 x 32 cells and extend seamlessly along a repeated row.
Material-specific items are generated only in their intended material; generic
items have all three trim treatments. The shared full-height openings can be
used for open passages; family door assemblies align to the shorter finished
door under a band of wallpaper. Existing door and bookcase assembly images are
byte-for-byte reconstructions of the finished sprites.

## Output structure

```text
floors.png / floors.tsx             512 x 640 atlas, 80 active cells
walls.png / walls.tsx               512 x 1280 atlas, 510 active cells
architecture.png / architecture.tsx 512 x 2176 atlas, 163 active cells
manifest.json                      all IDs, roles, phases, assemblies and palette
tiles/{tileset}/                    individually named transparent 32 x 32 PNGs
assemblies/                        106 native PNG assemblies and matching TMX stamps
maps/                              ten editable example room TMX maps
rooms/                             matching native and 2x PNG room renders
floors_preview.png                  labelled repeated swatches and variant strips, 2x
walls_preview.png                   all facade families assembled, 2x
architecture_preview.png            shared architecture catalogue, 2x
room_gallery.png                   all ten room themes at native pixel density
tiled_validation/                  optional real Tiled renders and verification report
```

Atlases have no spacing, margins, scaling or extruded gutters. Configure your game
renderer for nearest-neighbour sampling, or add extrusion in your engine's packer
if it requires it. Every production image uses binary alpha and only the explicit
palette. Original palette entries are preserved; `architectural/materials.py`
extends them with additional atmospheric greens, slate, ivory and terracotta.

## IDs, metadata and terrain painting

Stable string identifiers use names such as `floor.herringbone.v2.1.0` or
`wall.green_damask.window_1_2`. Numeric local tile IDs are deterministic and
independent of the seed. Unused positions are reserved for future additions.
Do not reorder the family, kind, scheme or role-slot definitions after adopting
this version in maps.

- Floors reserve 32 IDs per family. Local ID is `family_index*32 + variant*2 +
  phase_y*16 + phase_x`; 2 x 2 phases are naturally rectangular in the sheet.
- Walls reserve 64 IDs per family. The explicit `SLOTS` table keeps 2 x 3 windows
  and doors rectangular. Resolve roles using `wall_id()` or the manifest.
- Architecture reserves four atlas rows per kind. Three materials occupy
  four-column blocks, with spare cells for future pieces. Existing sprite cells
  occupy the final reserved block.

Properties include asset identifier, material family, part role, spatial phase,
variant, repeat size, assembly coordinates, wall height and passability hints.
`passable` describes the tile's intended architectural role; it is not exported
physics geometry. Add engine-specific feet colliders or map object-layer collision
shapes when integrating gameplay, especially around jambs and narrow cutaways.

Tiled [TSX/TMX tilesets and Wang metadata](https://docs.mapeditor.org/en/latest/reference/tmx-map-format/)
are generated as XML, with relative image and tileset references. Eight materials
have homogeneous interior-fill terrain sets; oak and parquet each have an
edge-colour terrain set encoding their 2 x 2 phase. This restricts adjacent picks
to compatible phases while retaining all five wear variants. Whole repeats also
have supplied stamp maps. Do not scramble these two materials with a purely
random tile brush. The phase colors represent connectivity, not visible paint.

Terrain sets do **not** include blended transitions between different floor
materials. Use crisp architectural borders, thresholds or explicit floor joins.
Walls are explicit multi-row construction pieces rather than an automatic wall
terrain solver; this preserves asymmetric trim and the chosen cutaway perspective.

Seam tests compare each phase's two-pixel boundary collar across all variants.
They deliberately do not demand that left and right pixels match inside a tile:
that would destroy checkerboard phase and diagonal parquet. Parquet periodicity
is also checked analytically across both 64-pixel repeat axes. Texture wear never
moves structural seams or ornament positions.

## Implementation and visual review

- `architectural/materials.py`: palette extension, periodic floors, surface motifs.
- `architectural/walls.py`: facade bands, corners, cutaways, openings and role slots.
- `architectural/pieces.py`: shared native-size frames, arches, windows and trim.
- `architectural/exporter.py`: atlases, metadata, terrain sets, stamp maps and previews.
- `build_architecture.py`: CLI entry point.
- `verify_tiled.py`: optional integration check using Tiled's own rasterizer.

Inspected the first material sheets, shared-piece catalogue and ten-room gallery.
Revised the full panelling from stacked squares to tall carved frames, raised the
wainscoting to true half-height, removed the doubled doorway headers around the
finished door, and added chipped stone facets. Wrapped floral wallpaper stems
periodically. Extended oak to longer boards and locked both timber patterns to
their repeat phase. Inspected the revised swatches, parquet room and panelled room.

Validation includes all existing tests, five distinct floor variants and locked
edges across 40 seeds, palette/binary alpha, stable IDs, exact reuse of the finished
sprites, structural connections, phase-correct terrain edges, valid TSX/TMX
references, room proportions and assembly PNG reconstruction. Tiled's real
rasterizer independently renders all ten maps and seven representative stamps;
all 17 results match Pillow exactly. The report is generated by the integration
script rather than asserted from XML parsing alone.
