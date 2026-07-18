---
name: cubism-ui
description: Build cubism UI components (Picasso/Braque-inspired fragmented geometry, multi-perspective views, overlapping planes, muted earth palettes, analytic deconstruction) with shattered shapes, geometric fragmentation, and the revolutionary visual language of early 20th-century cubist art. Trigger this skill when the user asks for cubism, cubist design, fragmented geometric UI, Picasso-inspired, Braque aesthetic, or multi-perspective interfaces.
---

# Cubism UI

Use this skill to design and implementation fragmented, multi-perspective interfaces inspired by Picasso and Braque's Cubist movement: overlapping geometric planes, shattered forms, analytical deconstruction, muted earth palettes, and the revolutionary visual language that changed how we see.

## Non-Negotiable Foundations

- Cubism deconstructs objects into overlapping geometric planes viewed from multiple perspectives simultaneously. A single element may show its front, side, and top at once.
- Shapes are angular and fragmented: triangles, rhombuses, and irregular polygons overlap to create faceted compositions.
- Colors are muted and earthy (Analytical Cubism): ochre, brown, gray, muted green, and cream. Later Cubism (Synthetic) introduces brighter accents.
- Overlapping planes create depth through LAYERING, not perspective. Elements stack, intersect, and fragment across each other.
- Typography can be fragmented or overlapped, echoing the multi-perspective deconstruction.
- The composition should feel deconstructed and reassembled — familiar but seen from a new angle.

## Core Material Recipes

### 1) Fragmented Geometric Background

Overlapping angular planes in muted tones.

Using CSS `clip-path` polygons:
```html
<div class="relative w-full h-96 overflow-hidden bg-[#d4c4a8]">
  <div class="absolute top-0 left-0 w-2/3 h-2/3 bg-[#b8a888]" style="clip-path: polygon(0 0, 100% 30%, 80% 100%, 0 70%)"></div>
  <div class="absolute top-1/4 right-0 w-1/2 h-3/4 bg-[#a09878]" style="clip-path: polygon(20% 0, 100% 0, 100% 80%, 0 100%)"></div>
  <div class="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#c4b498]" style="clip-path: polygon(0 20%, 100% 0, 80% 100%, 20% 80%)"></div>
</div>
```

### 2) Faceted Card

Card composed of overlapping angular fragments.

- `relative bg-[#d4c4a8] p-8`.
- Fragment 1 overlay: `absolute top-0 left-0 w-1/2 h-full bg-[#c4b498]/60 [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]`.
- Fragment 2 overlay: `absolute bottom-0 right-0 w-1/2 h-2/3 bg-[#a09878]/40 [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]`.
- Content sits above fragments: `relative z-10`.

### 3) Cubist Button

Angular button with overlapping color fragments.

- `bg-[#8a7a5a] text-[#f0e8d8] font-bold px-8 py-3 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_50%,calc(100%-10px)_100%,10px_100%,0_50%)] shadow-[3px_3px_0_#6a5a3a] hover:shadow-[1px_1px_0_#6a5a3a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all`.

### 4) Analytical Palette Surface

Muted earth-tone surface typical of Analytical Cubism.

- `bg-gradient-to-br from-[#d4c4a8] via-[#b8a888] to-[#a09878]`.

### 5) Overlapping Plane Divider

Divider made of overlapping angular fragments.

```html
<div class="relative h-4 my-6">
  <div class="absolute top-0 left-0 w-1/3 h-full bg-[#8a7a5a]" style="clip-path: polygon(0 0, 100% 30%, 80% 100%, 0 100%)"></div>
  <div class="absolute top-0 left-1/3 w-1/3 h-full bg-[#a09878]" style="clip-path: polygon(20% 0, 100% 20%, 80% 100%, 0 80%)"></div>
  <div class="absolute top-0 right-0 w-1/3 h-full bg-[#c4b498]" style="clip-path: polygon(20% 20%, 100% 0, 100% 100%, 0 100%)"></div>
</div>
```

### 6) Fragmented Typography Treatment

Text overlapped or shifted to create cubist deconstruction.

- Layer 1: `text-[#3a2a1a] text-5xl font-black`.
- Layer 2 (offset): `absolute top-1 left-1 text-[#8a7a5a]/50 text-5xl font-black` (shadow/ghost layer).
- Creates the sense of seeing the text from two perspectives simultaneously.

## Color Palette System

### Analytical Cubism Palette

| Color | Hex | Role |
|---|---|---|
| Ochre | `#d4c4a8` | Primary surface |
| Warm Brown | `#8a7a5a` | Accent, borders |
| Earth Gray | `#a09878` | Secondary surface |
| Dark Brown | `#5a4a3a` | Text, deep contrast |
| Muted Green | `#7a8a6a` | Occasional accent |
| Charcoal | `#3a3a2a` | Deep shadows |
| Cream | `#f0e8d8` | Lightest surface |

### Synthetic Cubism Palette (brighter accents)

| Color | Hex | Role |
|---|---|---|
| Cadmium Red | `#c43a2a` | Bold accent |
| Prussian Blue | `#2a4a6a` | Bold accent |
| Mustard | `#d4a838` | Bold accent |

Rules: Analytical Cubism uses muted earth tones (ochre, brown, gray). Synthetic Cubism introduces brighter accents but still within a muted framework. No pure primaries or neon colors.

## Typography Recommendations

Cubism typography is bold, geometric, and potentially fragmented:

- **Display:** Archivo Black, Impact, or Anton (heavy, impactful, geometric).
- **Body:** DM Sans, Archivo (clean geometric sans).
- **Labels:** `font-bold uppercase tracking-wide`.
- For a cubist twist: overlap text layers with slight offsets to create the multi-perspective effect.
- Avoid serif fonts. Cubism is geometric sans-serif.

## Component Architecture Pattern

1. Fragmented geometric background (overlapping clip-path polygons).
2. Faceted cards with overlapping angular fragments.
3. Muted earth-tone palette throughout.
4. Cubist angular buttons with hexagonal/diamond clip-paths.
5. Overlapping plane dividers between sections.
6. Optional fragmented typography (ghost-layer text).
7. Geometric SVG decorations (overlapping triangles, diamonds).

## Interaction Rules

- Default state: fragmented, analytical, layered.
- Hover: fragments shift slightly (echoing multi-perspective movement).
  - `hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150`.
- Active: `active:translate-x-[4px] active:translate-y-[4px]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8a7a5a]`.
- Transitions: `transition-all duration-150` (analytical, precise, geometric).

## Reusable Tailwind Tokens

- Fragmented bg: overlapping `clip-path: polygon()` divs in earth tones.
- Faceted card: `bg-[#d4c4a8]` with overlapping fragment overlays.
- Cubist button: `bg-[#8a7a5a] text-[#f0e8d8] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_50%,calc(100%-10px)_100%,10px_100%,0_50%)] shadow-[3px_3px_0_#6a5a3a]`
- Analytical surface: `bg-gradient-to-br from-[#d4c4a8] via-[#b8a888] to-[#a09878]`
- Overlapping divider: multiple clip-path fragments in a row.

## Quality Checklist (must pass)

- Shapes are fragmented and angular (clip-path polygons, triangles, diamonds).
- Multiple overlapping planes create depth (layering, not perspective).
- Color palette is muted earth tones (ochre, brown, gray — analytical cubism).
- At least one faceted card with overlapping fragments.
- Angular clip-path buttons present.
- Overlapping plane dividers between sections.
- Typography is bold geometric sans-serif.
- The composition feels deconstructed and reassembled.
- Depth comes from overlapping shapes, not shadows.
- The aesthetic reads as early 20th-century Cubist art.

## Anti-Patterns

- Smooth curves or organic shapes (cubism is angular and geometric).
- Bright saturated colors (analytical cubism is muted earth tones).
- Symmetrical centered layouts (cubism is asymmetric and fragmented).
- Soft shadows for depth (depth comes from overlapping planes, not shadow).
- Serif typography (cubism is geometric sans-serif).
- Single-perspective representations (cubism shows multiple perspectives).
- Clean, simple composition (cubism is dense and layered).
- Pure flat shapes without overlap (overlapping is essential).
- Missing clip-path or angular fragmentation (this is the core technique).
- Rounded corners (cubism is sharp and angular).

## Accessibility Considerations

- Earth-tone palettes with dark text provide adequate contrast (verify WCAG AA).
- Overlapping fragments must not reduce text readability.
- Focus states: `focus:ring-2 focus:ring-[#8a7a5a]` (warm brown, visible on cream).
- Angular clip-path shapes must not cut off interactive areas.
- Fragmented typography treatments must remain readable (ghost layers at low opacity).
- Decorative fragment SVGs must be `aria-hidden="true"`.
- The layered composition should not confuse screen reader reading order — use semantic HTML.
- Touch targets must be adequate despite angular shapes.
