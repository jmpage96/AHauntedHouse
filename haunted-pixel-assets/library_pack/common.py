"""Shared native-pixel joinery, bindings, turned legs and upholstery."""
from PIL import ImageDraw
from architectural.materials import COLORS, new, box, stroke, bevel, fleuron, flower

FINISHES = (("wood_dark", "wood", "wood_light", "wood_glint"),
            ("oak_dark", "oak", "oak_light", "wood_light"),
            ("ink", "shadow", "wood_dark", "wood_light"))
FABRICS = {"burgundy": ("burgundy_dark", "burgundy", "burgundy_light"),
           "green": ("forest", "forest_light", "sage"),
           "plum": ("purple_dark", "purple", "dust"),
           "leather": ("terra_dark", "wood", "terra")}


def ellipse(d, xy, c, outline=None):
    d.ellipse(xy, fill=COLORS[c], outline=COLORS[outline] if outline else None)


def book(d, x, bottom, width, height, color, lean=0):
    if width < 3:
        stroke(d, [(x, bottom-height), (x, bottom)], color)
        return
    d.polygon([(x+lean, bottom-height), (x+width-1+lean, bottom-height),
               (x+width-1, bottom), (x, bottom)], fill=COLORS["ink"])
    d.polygon([(x+lean, bottom-height), (x+width-2+lean, bottom-height),
               (x+width-2, bottom-1), (x, bottom-1)], fill=COLORS[color])
    for yy in (bottom-height+3, bottom-3):
        dx = round(lean*(bottom-yy)/height)
        stroke(d, [(x+1+dx, yy), (x+width-2+dx, yy)], "brass_dark")
    if width >= 5:
        yy = bottom-height+6
        dx = round(lean*(bottom-yy)/height)
        box(d, (x+2+dx, yy, x+width-3+dx, yy+2), "shadow")
        d.point((x+2+dx, yy), fill=COLORS["brass"])


def closed_book(d, x, y, w=16, h=10, c="burgundy", ornate=False):
    box(d, (x, y, x+w-1, y+h-1), "ink")
    box(d, (x+1, y+1, x+w-2, y+h-3), c)
    stroke(d, [(x+2, y+h-2), (x+w-3, y+h-2)], "ivory_dark")
    stroke(d, [(x+2, y+1), (x+2, y+h-3)], "brass_dark")
    if ornate and h >= 8:
        d.rectangle((x+4, y+2, x+w-4, y+h-4), outline=COLORS["brass_dark"])
        d.point((x+w//2, y+h//2-1), fill=COLORS["brass"])


def open_book(d, x, y, w=24, h=14):
    d.polygon([(x, y+1), (x+w//2, y+3), (x+w-1, y), (x+w-1, y+h-2),
               (x+w//2, y+h), (x, y+h-2)], fill=COLORS["wood_dark"])
    d.polygon([(x+1, y+1), (x+w//2-1, y+3), (x+w//2-1, y+h-2),
               (x+1, y+h-3)], fill=COLORS["ivory"])
    d.polygon([(x+w//2, y+3), (x+w-2, y+1), (x+w-2, y+h-3),
               (x+w//2, y+h-2)], fill=COLORS["ivory_light"])
    for yy in range(y+5, y+h-3, 3):
        stroke(d, [(x+3, yy), (x+w//2-3, yy+1)], "ivory_dark")
        stroke(d, [(x+w//2+3, yy+1), (x+w-4, yy)], "ivory_dark")


def leg(d, x, top, bottom, finish=0):
    dark, wood, light, glint = FINISHES[finish]
    box(d, (x, top, x+3, bottom), "ink")
    stroke(d, [(x+1, top), (x+1, bottom-2)], wood)
    for yy in (top+2, bottom-4):
        stroke(d, [(x-1, yy), (x+3, yy)], light)
    d.point((x+1, top+1), fill=COLORS[glint])


def carved_panel(d, xy, finish=0, gothic=False):
    dark, wood, light, glint = FINISHES[finish]
    bevel(d, xy, dark, light)
    x, y, r, b = xy
    if r-x > 10 and b-y > 10:
        bevel(d, (x+3, y+3, r-3, b-3), dark, wood)
        if gothic:
            cx = (x+r)//2
            stroke(d, [(x+5, b-5), (x+5, y+8), (cx, y+5), (r-5, y+8), (r-5, b-5)], light)


def drawer(d, xy, finish=0, label=False):
    dark, wood, light, glint = FINISHES[finish]
    bevel(d, xy, wood, light)
    x, y, r, b = xy
    cx, cy = (x+r)//2, (y+b)//2
    if label and r-x >= 10:
        box(d, (cx-3, cy-2, cx+3, cy+1), "brass_dark")
        stroke(d, [(cx-2, cy-1), (cx+2, cy-1)], "ivory_dark")
    stroke(d, [(cx-1, cy+2), (cx+1, cy+2)], "brass")


def tuft(d, xy, fabric="burgundy", spacing=8):
    dark, fill, light = FABRICS[fabric]
    x, y, r, b = xy
    bevel(d, xy, fill, light, dark)
    for yy in range(y+4, b-2, spacing):
        for xx in range(x+4+(yy//spacing%2)*3, r-2, spacing):
            stroke(d, [(xx-2, yy-1), (xx, yy), (xx+2, yy-1)], dark)
            d.point((xx, yy+1), fill=COLORS[light])


def gear(d, x, y, radius=5):
    ellipse(d, (x-radius, y-radius, x+radius, y+radius), "brass_dark", "ink")
    for dx, dy in ((radius, 0), (-radius, 0), (0, radius), (0, -radius)):
        box(d, (x+dx-1, y+dy-1, x+dx+1, y+dy+1), "brass")
    ellipse(d, (x-2, y-2, x+2, y+2), "wood_dark")
    d.point((x-1, y-1), fill=COLORS["gold"])
