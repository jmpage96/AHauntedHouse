"""Explicit catalogue: one required furniture type per entry, with useful views/states."""
from dataclasses import dataclass, field
import random
from PIL import Image, ImageDraw
from animate import clock, fireplace, portrait
from .common import COLORS, new, stroke, closed_book
from .furniture import SHELVES, DESKS, SEATING, LARGE, shelves, desk, seating, large
from .objects import LIGHTING, CLUTTER, DECOR, MYSTERY, clutter, decor, lighting, mystery, padded_animation

CATEGORIES = {"bookshelves": SHELVES, "desks": DESKS, "seating": SEATING, "lighting": LIGHTING,
              "clutter": CLUTTER, "decorations": DECOR, "large_furnishings": LARGE, "mysteries": MYSTERY}
DIRECTIONS = ("south", "north", "east", "west")
WALL_DECOR = {"wall_mirror", "framed_portrait", "botanical_print", "antique_map", "butterfly_display", "certificate", "velvet_curtain"}
FLOOR_DECOR = {"terrestrial_globe", "celestial_globe", "marble_bust", "bronze_bust", "telescope"}
FINISH_NAMES = ("mahogany", "oak", "ebonised")


@dataclass
class Sprite:
    category: str
    kind: str
    variant: int
    direction: str
    state: str
    image: Image.Image
    local_id: int
    collision: list
    placement: str
    interactable: bool = False
    source: str = "native library drawing"
    duration: int = 0
    loop: list = field(default_factory=list)
    static: Image.Image | None = None
    motion: Image.Image | None = None

    @property
    def key(self):
        return f"library.{self.category}.{self.kind}.v{self.variant}.{self.direction}.{self.state}"

    @property
    def group(self):
        return f"library.{self.category}.{self.kind}.v{self.variant}.{self.direction}"

    @property
    def anchor(self):
        b = self.image.getbbox()
        return [self.image.width//2, b[3]-1] if self.placement.startswith("floor") else [self.image.width//2, self.image.height//2]


def placement_and_collision(category, kind, im, direction="south"):
    w, h = im.size
    bbox = im.getbbox()
    x, y, r, b = bbox
    if category == "clutter":
        return "tabletop overlay", []
    if category == "decorations":
        if kind in WALL_DECOR:
            return "north wall overlay", []
        if kind == "ornate_rug":
            return "floor under furniture", []
        if kind not in FLOOR_DECOR:
            return "tabletop or shelf overlay", []
    if category == "lighting":
        if kind == "chandelier":
            return "ceiling overlay", []
        if kind == "wall_sconce":
            return "north wall overlay", []
        if kind != "standing_lamp":
            return "tabletop overlay", []
    if category == "mysteries" and kind in ("marked_book", "puzzle_box", "brass_device"):
        return "tabletop interactable overlay", []
    if kind == "fireplace_grate":
        return "hearth overlay", []
    if direction in ("east", "west") and kind in ("tufted_sofa", "chaise_longue", "bench"):
        footprint = [6, 18, w-12, h-22]
    elif direction in ("east", "west") and kind == "reading_table":
        footprint = [8, 28, w-16, h-32]
    elif category == "bookshelves" or kind in ("display_cabinet", "curiosity_cabinet", "catalogue_cabinet", "writing_cabinet",
                                              "mechanism_bookcase", "locked_bookcase", "odd_bookcase"):
        footprint = [x+2, max(y, b-17), max(1, r-x-4), 14]
    elif category in ("desks", "seating") or kind == "secret_desk":
        footprint = [max(x+1, 6), max(y, b-27), max(1, min(r-1, w-6)-max(x+1, 6)), min(24, b-y)]
    else:
        footprint = [x+2, max(y, b-12), max(1, r-x-4), min(10, b-y)]
    return "floor; feet anchored; north facade" if category == "bookshelves" else "floor; feet anchored", [footprint]


def build(seed=13):
    sprites = []

    def add(category, kind, im, variant=0, direction="south", state="default", state_index=0, **extras):
        placement, collision = placement_and_collision(category, kind, im, direction)
        tid = CATEGORIES[category].index(kind)*128+variant*32+DIRECTIONS.index(direction)*8+state_index
        sprites.append(Sprite(category, kind, variant, direction, state, im, tid, collision, placement,
                              category == "mysteries", **extras))

    def add_animation(category, kind, animation, variant=0, source="native library animation"):
        loops = []
        if kind == "grandfather_clock":
            loops = list(range(6))
        elif kind == "framed_portrait":
            loops = []  # authored normal/following states, not an automatic haunting
        elif len(animation.frames) >= 4:
            loops = list(range(4))
        base = CATEGORIES[category].index(kind)*128+variant*32
        for i, (name, frame) in enumerate(zip(animation.names, animation.frames)):
            add(category, kind, frame, variant, state=name, state_index=i, source=source,
                duration=animation.durations[i], loop=[base+j for j in loops],
                static=animation.static, motion=animation.layers[i])

    for kind in SHELVES:
        for variant in range(3):
            add("bookshelves", kind, shelves(kind, variant, seed), variant,
                source="generate.bookcase (unchanged)" if kind == "double_bookcase" and variant == 0 else "library casework")
    for kind in DESKS:
        for variant in range(2):
            views = DIRECTIONS if kind in ("grand_desk", "reading_table", "writing_bureau") else ("south",)
            for direction in views:
                add("desks", kind, desk(kind, variant, direction), variant, direction)
    for kind in SEATING:
        for variant in range(1 if kind in ("wooden_stool", "reading_chair") else 2):
            for direction in (("south",) if kind in ("footstool", "wooden_stool") else DIRECTIONS):
                add("seating", kind, seating(kind, variant, direction), variant, direction)
    for kind in LIGHTING:
        add_animation("lighting", kind, lighting(kind), source="animate.candelabra, padded only" if kind == "three_candelabrum" else "library light layers; animate.Animation convention")
    for kind in CLUTTER:
        # Colour variants are worthwhile for bindings and ceramics; paper/tools stay curated.
        variants = range(3) if kind in ("closed_book", "two_books", "tall_books", "scattered_books", "journal", "atlas", "ancient_tome", "bookmark") else range(1)
        for variant in variants:
            add("clutter", kind, clutter(kind, variant), variant)
    for kind in DECOR:
        if kind == "framed_portrait":
            add_animation("decorations", kind, padded_animation(portrait(), (64, 64), (12, 8)),
                          source="animate.portrait, padded only")
        else:
            for variant in (range(2) if kind in ("ornate_rug", "velvet_curtain", "ceramic_vase") else range(1)):
                add("decorations", kind, decor(kind, variant), variant)
    for kind in LARGE:
        if kind == "grandfather_clock":
            add_animation("large_furnishings", kind, padded_animation(clock(), (64, 128), (8, 8)), source="animate.clock, padded only")
        elif kind == "library_mantel":
            old = fireplace(random.Random(f"{seed}:fireplace"))
            d = ImageDraw.Draw(old.static)
            # A pair of bookends and a tiny mantel volume personalize the existing stonework.
            closed_book(d, 10, 3, 13, 4, "burgundy")
            stroke(d, [(25, 3), (25, 6)], "brass_dark")
            add_animation("large_furnishings", kind, old, source="animate.fireplace with native mantel dressing")
        else:
            for variant in (range(2) if kind in ("catalogue_cabinet", "folding_screen", "display_cabinet", "curiosity_cabinet", "writing_cabinet") else range(1)):
                add("large_furnishings", kind, large(kind, variant, seed), variant)
    for kind in MYSTERY:
        states = ("closed",) if kind == "odd_bookcase" else ("closed", "open")
        for variant in (range(2) if kind.endswith("bookcase") or kind == "secret_desk" else range(1)):
            for i, state in enumerate(states):
                add("mysteries", kind, mystery(kind, variant, seed, state), variant, state=state, state_index=i)
    return sprites
