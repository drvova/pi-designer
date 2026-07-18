---
name: origami-ui
description: Build origami UI components (folded paper creases, sharp triangular facets, crisp white surfaces, geometric fold lines, shadow-cast depth) with diagonal crease patterns, angular polygonal shapes, and the precise elegance of Japanese paper folding. Trigger this skill when the user asks for origami design, paper-fold UI, creased geometric, Japanese paper craft, or angular fold interfaces.
---

# Origami UI

Use this skill to design and implement crisp, angular interfaces inspired by origami paper folding: sharp triangular facets, visible crease lines, shadow-cast depth from overlapping folds, pure white or single-color paper surfaces, and the geometric elegance of folded paper art.

## Non-Negotiable Foundations

- Origami UI simulates folded paper: surfaces have visible CREASE LINES (diagonal lines where the paper was folded).
- Shapes are angular and geometric: triangles, diamonds, and asymmetric polygons created by folds.
- Depth comes from SHADOW CAST BY FOLDS: overlapping paper layers cast hard-edged shadows on each other.
- Colors are restrained: pure white paper, or a single color on one side (traditional origami paper is colored on one side, white on the other).
- Everything should look crisp, precise, and deliberate — like a master folder's creation.
- The aesthetic is minimalist but texturally rich through fold shadows and crease details.

## Core Material Recipes

### 1) Folded Paper Surface

White surface with visible crease lines and fold shadows.

- `bg-white rounded-none p-8 shadow-[2px_2px_0_rgba(0,0,0,0.06),4px_4px_0_rgba(0,0,0,0.03)]`.
- Crease overlay: SVG diagonal lines `stroke="#e0e0e0" stroke-width="0.5"` across the surface.
- Fold shadow: `shadow-[inset_4px_-4px_0_rgba(0,0,0,0.03)]` on one corner (suggesting a folded-under edge).

### 2) Triangular Fold Card

Card with a folded corner (dog-ear fold).

- `bg-white [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.08)]`.
- Folded corner shadow: pseudo-element with gradient from `rgba(0,0,0,0.1)` at the clipped corner.

### 3) Origami Crane/Accent

Geometric origami animal or shape SVG.

```html
<svg viewBox="0 0 60 60" class="w-16 h-16">
  <g fill="none" stroke="#1a1a1a" stroke-width="0.75">
    <path d="M10,40 L30,10 L50,40 L30,30 Z" fill="#ffffff"/>
    <path d="M30,30 L30,55" stroke-width="0.5"/>
    <path d="M10,40 L5,50" stroke-width="0.5"/>
    <path d="M50,40 L55,50" stroke-width="0.5"/>
    <path d="M30,10 L35,5 L40,15" stroke-width="0.5"/>
  </g>
</svg>
```

### 4) Crease Button

Angular button with fold-line detailing.

- `bg-white text-[#1a1a1a] font-medium text-sm uppercase tracking-wider px-8 py-3 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] shadow-[2px_2px_0_rgba(0,0,0,0.08)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.08)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all`.
- Crease line: thin SVG diagonal line across the button face.

### 5) Layered Fold Stack

Multiple overlapping folded paper elements.

- Layer 1: `absolute top-0 left-0 w-full h-full bg-white rotate-[-1deg] shadow-[2px_2px_4px_rgba(0,0,0,0.05)]`.
- Layer 2: `absolute top-2 left-2 w-full h-full bg-[#f5f5f5] rotate-[1deg] shadow-[2px_2px_4px_rgba(0,0,0,0.05)]`.
- Layer 3 (content): `relative bg-white p-8 shadow-[4px_4px_12px_rgba(0,0,0,0.08)]`.

### 6) Single-Color Accent

Traditional origami uses colored paper on one side. Show this with a colored fold.

- A card that is mostly white but has a colored triangular section: `bg-[#dc2626] [clip-path:polygon(0_0,100%_0,0_100%)] w-8 h-8 absolute top-0 left-0` (red triangle showing the colored underside of a fold).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Pure White | `#ffffff` | Primary surface (unfolded paper) |
| Soft Gray | `#f5f5f5` | Secondary fold layer |
| Crease Gray | `#e0e0e0` | Crease/fold lines |
| Shadow | `rgba(0,0,0,0.06)` | Fold shadows |
| Ink Black | `#1a1a1a` | Text, crease outlines |
| Accent Red | `#dc2626` | Single-color paper fold |
| Accent Blue | `#1a3a8a` | Alternative fold color |

Rules: Predominantly white with minimal color. If color appears, it is from the "colored side" of the origami paper showing through a fold. Maximum ONE accent color per composition.

## Typography Recommendations

- **Display:** Inter, DM Sans, or Poppins (clean geometric sans-serif).
- **Body:** Same family at `font-normal`.
- **Labels:** `font-medium text-sm tracking-wide`.
- Typography should be as crisp and precise as the folds.

## Reusable Tailwind Tokens

- Folded card: `bg-white [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%)] shadow-[2px_2px_8px_rgba(0,0,0,0.08)]`.
- Crease button: `bg-white [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] shadow-[2px_2px_0_rgba(0,0,0,0.08)]`.
- Fold shadow: `shadow-[inset_4px_-4px_0_rgba(0,0,0,0.03)]`.
- Colored fold: `bg-[#dc2626] [clip-path:polygon(0_0,100%_0,0_100%)]`.

## Quality Checklist

- At least one element with visible crease/fold lines.
- At least one clip-path angular shape (folded corner or hexagonal button).
- Hard-edged fold shadows (not soft blur shadows).
- Predominantly white/cream surfaces.
- Maximum one accent color from a "colored paper" fold.
- Angular geometric shapes throughout.
- The aesthetic reads as folded paper / origami art.
- Everything feels crisp, precise, and deliberate.
- Crease lines are subtle but visible (thin gray SVG strokes).

## Anti-Patterns

- Soft blurred drop shadows (origami uses hard-edged fold shadows).
- Curved or organic shapes (origami is angular and geometric).
- Multiple accent colors (one color showing through folds max).
- Heavy textures (origami paper is smooth and crisp).
- Dark backgrounds (origami is traditionally light/white paper).
- Missing crease/fold lines (these are the signature detail).
- Rounded corners (origami shapes are angular and sharp).
- Missing clip-path angular shapes (folds create angular edges).
- Warm cozy textures (origami is precise and architectural).
- Too many overlapping layers (origami is clean — 2-3 fold layers max).
