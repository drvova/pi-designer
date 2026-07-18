---
name: antique-map-ui
description: Build antique map UI components (aged treasure map parchment, compass rose, sea monster illustrations, trade route dashed lines, latitude/longitude grid, decorative cartouche borders, "Here Be Dragons" marginalia, ink-on-velum calligraphy) with aged paper textures, hand-drawn coastlines, and the romantic cartography of the Age of Exploration. Trigger this skill when the user asks for antique map design, treasure map UI, parchment aesthetic, Age of Exploration interface, cartouche borders, sea monster decoration, or calligraphy cartography.
---

# Antique Map UI

Use this skill to design and implement interfaces inspired by antique maps: aged vellum parchment with foxing and burn marks, large compass roses, dashed trade route lines with ship icons, sea monster decorations, ornate cartouche border frames, and the romantic cartography of the Age of Exploration.

## Non-Negotiable Foundations

- Antique map UI uses AGED PARCHMENT as the primary surface: vellum-colored backgrounds with foxing spots, burn marks, and organic staining.
- Colors follow the palette of old inks and dyes: sepia brown for ink, faded ocean blue, compass red, and decorative gold leaf.
- Hand-drawn coastlines replace clean vector borders: wavy, slightly irregular strokes that feel quill-penned.
- A large compass rose is the signature decorative anchor, with N/S/E/W cardinal labels and an 8-point star.
- Dashed trade route lines connect points across "ocean" areas, sometimes with small ship icons traveling the route.
- Sea monster and creature illustrations occupy empty ocean space (the "Here Be Dragons" tradition).
- Decorative cartouche borders frame content panels with ornate scrollwork and corner flourishes.
- Typography is calligraphic: serif or handwritten-style fonts for place names, italics for marginalia notes.
- Latitude/longitude grid lines are drawn as faint ruled lines, often skewed or hand-measured.

## Core Material Recipes

### 1) Aged Parchment Background

The signature surface: vellum paper with foxing spots and organic staining.

CSS approximation:
- `bg-[radial-gradient(ellipse_at_15%_25%,rgba(180,150,100,0.15)_0%,transparent_25%),radial-gradient(ellipse_at_80%_70%,rgba(140,100,50,0.12)_0%,transparent_30%),radial-gradient(ellipse_at_50%_90%,rgba(120,80,30,0.1)_0%,transparent_20%),#e8dcc0]`.

SVG foxing spots (most authentic):
```html
<svg class="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
  <circle cx="45" cy="80" r="6" fill="#8a6a3a" opacity="0.3"/>
  <circle cx="52" cy="85" r="3" fill="#6a4a1a" opacity="0.2"/>
  <circle cx="310" cy="220" r="8" fill="#8a6a3a" opacity="0.25"/>
  <circle cx="316" cy="226" r="4" fill="#6a4a1a" opacity="0.15"/>
  <ellipse cx="200" cy="360" rx="15" ry="8" fill="#6a4a1a" opacity="0.12"/>
  <circle cx="350" cy="50" r="4" fill="#8a6a3a" opacity="0.2"/>
</svg>
```

### 2) Burn Mark Edges

Darkened, irregular burn marks along parchment edges.

- `shadow-[inset_0_0_60px_rgba(90,60,20,0.3),inset_0_0_20px_rgba(60,40,10,0.2)]`.
- Edge mask SVG for torn/burned perimeter (irregular border path).

### 3) Large Compass Rose

The signature 8-point compass rose decoration.

```html
<svg viewBox="0 0 120 120" class="w-28 h-28 opacity-70">
  <!-- Outer ring -->
  <circle cx="60" cy="60" r="55" fill="none" stroke="#3a2a0a" stroke-width="0.75"/>
  <circle cx="60" cy="60" r="48" fill="none" stroke="#3a2a0a" stroke-width="0.5"/>
  <!-- 8-point star: 4 cardinal long points + 4 diagonal short points -->
  <path d="M60,5 L65,55 L60,60 L55,55 Z" fill="#8a1a1a"/>
  <path d="M60,115 L55,65 L60,60 L65,65 Z" fill="#3a2a0a"/>
  <path d="M5,60 L55,55 L60,60 L55,65 Z" fill="#3a2a0a"/>
  <path d="M115,60 L65,55 L60,60 L65,65 Z" fill="#3a2a0a"/>
  <!-- Diagonal points -->
  <path d="M21,21 L56,56 L60,60 L56,64 Z" fill="#3a2a0a" opacity="0.6"/>
  <path d="M99,21 L64,56 L60,60 L64,64 Z" fill="#3a2a0a" opacity="0.6"/>
  <path d="M21,99 L56,64 L60,60 L56,56 Z" fill="#3a2a0a" opacity="0.6"/>
  <path d="M99,99 L64,64 L60,60 L64,56 Z" fill="#3a2a0a" opacity="0.6"/>
  <!-- Cardinal labels -->
  <text x="60" y="3" font-size="7" fill="#3a2a0a" text-anchor="middle" font-family="serif">N</text>
  <text x="60" y="119" font-size="7" fill="#3a2a0a" text-anchor="middle" font-family="serif">S</text>
  <text x="3" y="63" font-size="7" fill="#3a2a0a" text-anchor="middle" font-family="serif">W</text>
  <text x="117" y="63" font-size="7" fill="#3a2a0a" text-anchor="middle" font-family="serif">E</text>
</svg>
```

### 4) Dashed Trade Route Line

Sea route with ship icon traveling the path.

```html
<svg viewBox="0 0 300 100" class="w-full opacity-60">
  <path d="M10,50 Q80,20 150,50 T290,40" fill="none" stroke="#5a7a9a" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Ship icon at midpoint -->
  <g transform="translate(140,40)">
    <path d="M-6,2 L6,2 L4,6 L-4,6 Z" fill="#3a2a0a"/>
    <line x1="0" y1="2" x2="0" y2="-8" stroke="#3a2a0a" stroke-width="0.75"/>
    <path d="M0,-8 L4,-4 L0,-4 Z" fill="#3a2a0a"/>
  </g>
</svg>
```

### 5) Sea Monster Decoration

Creature illustration for empty ocean space.

```html
<svg viewBox="0 0 100 60" class="w-24 opacity-40">
  <!-- Serpentine body -->
  <path d="M5,35 Q15,15 30,30 Q45,45 60,25 Q75,10 90,30" fill="none" stroke="#5a7a9a" stroke-width="2" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="90" cy="30" r="6" fill="none" stroke="#5a7a9a" stroke-width="1.5"/>
  <circle cx="92" cy="28" r="1" fill="#5a7a9a"/>
  <!-- Fins/humps -->
  <path d="M20,28 Q22,20 25,28" fill="none" stroke="#5a7a9a" stroke-width="1"/>
  <path d="M50,28 Q52,18 55,28" fill="none" stroke="#5a7a9a" stroke-width="1"/>
</svg>
```

### 6) Decorative Cartouche Border

Ornate scrollwork frame for content panels.

```html
<div class="relative p-6 bg-[#e8dcc0] border-2 border-[#c4a043]">
  <!-- Corner flourishes (repeat for all 4 corners) -->
  <svg class="absolute top-0 left-0 w-8 h-8 text-[#c4a043]" viewBox="0 0 32 32">
    <path d="M0,0 Q16,0 16,16 Q16,0 32,0 M0,0 Q0,16 16,16" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute top-0 right-0 w-8 h-8 text-[#c4a043] -scale-x-100" viewBox="0 0 32 32">
    <path d="M0,0 Q16,0 16,16 Q16,0 32,0 M0,0 Q0,16 16,16" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute bottom-0 left-0 w-8 h-8 text-[#c4a043] -scale-y-100" viewBox="0 0 32 32">
    <path d="M0,0 Q16,0 16,16 Q16,0 32,0 M0,0 Q0,16 16,16" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute bottom-0 right-0 w-8 h-8 text-[#c4a043] -scale-100" viewBox="0 0 32 32">
    <path d="M0,0 Q16,0 16,16 Q16,0 32,0 M0,0 Q0,16 16,16" fill="none" stroke="currentColor" stroke-width="1"/>
    <circle cx="16" cy="16" r="2" fill="currentColor"/>
  </svg>
  <!-- Content -->
  <p class="font-serif text-[#3a2a0a]">Cartouche content</p>
</div>
```

### 7) Latitude/Longitude Grid

Faint hand-ruled grid lines.

- `bg-[linear-gradient(rgba(58,42,10,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(58,42,10,0.08)_1px,transparent_1px)] bg-[size:50px_50px]`.
- Latitude labels: `font-serif italic text-[10px] text-[#3a2a0a]/50` at grid lines.

### 8) Calligraphy Place Name Label

Hand-lettered location name with underline flourish.

- `font-serif italic text-lg text-[#3a2a0a] tracking-wide`.
- Underline flourish: SVG wavy path beneath text `stroke="#3a2a0a" stroke-width="0.5" opacity="0.5"`.

### 9) Parchment Button

Button styled as an ink stamp or wax seal annotation.

- `bg-[#e8dcc0] text-[#3a2a0a] font-serif italic text-sm border border-[#6a4a1a] px-6 py-2 shadow-[2px_2px_4px_rgba(58,42,10,0.2)] hover:bg-[#dccab0] hover:border-[#3a2a0a] transition-colors`.

### 10) Hand-Drawn Coastline Border

Irregular wavy border replacing clean rectangles.

```html
<svg class="w-full h-3 text-[#3a2a0a]" viewBox="0 0 400 12" preserveAspectRatio="none">
  <path d="M0,6 Q20,2 40,7 T80,5 T120,8 T160,4 T200,7 T240,3 T280,6 T320,5 T360,8 T398,6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
</svg>
```

### 11) "Here Be Dragons" Marginalia

Italic note in the margin, like a scribe's warning.

```html
<p class="font-serif italic text-sm text-[#3a2a0a]/60 rotate-[-2deg]">"Here Be Dragons"</p>
```

### 12) Wax Seal Stamp

Circular wax seal as a decorative stamp or badge.

```html
<svg viewBox="0 0 60 60" class="w-14 h-14">
  <circle cx="30" cy="30" r="28" fill="#8a1a1a" opacity="0.8"/>
  <circle cx="30" cy="30" r="24" fill="none" stroke="#5a0a0a" stroke-width="0.5"/>
  <text x="30" y="35" font-size="9" fill="#e8dcc0" text-anchor="middle" font-family="serif" font-weight="bold">SIGIL</text>
</svg>
```

## Color Palette System

### Antique Cartography Palette

| Element | Color | Hex | Role |
|---|---|---|---|
| Parchment | Vellum | `#e8dcc0` | Base background |
| Foxing/Dark Parchment | Dark Vellum | `#dccab0` | Hover/aged variant |
| Sepia Ink | Dark Brown | `#3a2a0a` | Primary text, line work |
| Compass Red | Deep Red | `#8a1a1a` | Cardinal north, accents |
| Ocean Blue | Faded Blue | `#5a7a9a` | Sea areas, trade routes |
| Decorative Gold | Gold Leaf | `#c4a043` | Cartouche borders, flourishes |
| Burnt Edge | Dark Brown | `#6a4a1a` | Edges, borders, shadows |
| Wax Seal Red | Dark Red | `#5a0a0a` | Seal stamp, deep accents |
| Marginalia Ink | Faded Sepia | `#6a5a3a` | Secondary text, notes |
| Land Mass | Tan | `#c4b890` | Land/continent fills |

Rules: Parchment is always the base. Sepia ink is primary text. Compass red is the only saturated accent (reserved for north/important markers). Gold is for borders and decoration only, never for body text. Ocean blue is muted/faded, never bright. The palette must feel aged, hand-mixed, and low-saturation.

## Typography Recommendations

Antique map typography is calligraphic and scholarly:

- **Primary:** EB Garamond, Crimson Text, or Cormorant Garamond (calligraphic serif for place names, headings).
- **Italic/Marginalia:** Cormorant Italic, EB Garamond Italic (scribe's notes, warnings, annotations).
- **Monospace:** IM Fell English, or EB Garamond small-caps (coordinates, latitude/longitude labels).
- **Labels:** `font-serif italic text-base text-[#3a2a0a]` for place names.
- **Headings:** `font-serif font-bold text-2xl text-[# parchment] tracking-wide` for map titles.
- **Marginalia:** `font-serif italic text-sm text-[#3a2a0a]/60 rotate-[-1deg]` for notes and warnings.
- The typography should feel like ink-on-velum calligraphy from the 16th century.

## Component Architecture Pattern

1. Parchment background (vellum base with foxing spots overlay).
2. Burn mark inner shadow on container edges.
3. Latitude/longitude grid overlay (faint, hand-ruled).
4. Hand-drawn coastline borders on content cards (wavy SVG paths).
5. Large compass rose decoration (8-point star with cardinal labels).
6. Dashed trade route connectors between content sections (with optional ship icons).
7. Sea monster decorations in negative space.
8. Decorative cartouche borders with corner flourishes on primary panels.
9. Calligraphy place-name labels with underline flourishes.
10. "Here Be Dragons" marginalia in margins.
11. Wax seal stamps as badges or section markers.

## Interaction Rules

- Default state: aged, romantic, hand-crafted.
- Hover: parchment darkens slightly, gold borders brighten.
  - `hover:bg-[#dccab0] hover:border-[#c4a043] hover:shadow-[3px_3px_6px_rgba(58,42,10,0.25)] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8a1a1a]/40`.
- Transitions: `transition-all duration-300` (leisurely, like unrolling a scroll).
- Trade route lines can animate a ship icon traveling the path (`stroke-dashoffset` animation).
- Compass rose can rotate on hover/scroll.
- Wax seal stamps can "press" on click (`active:scale-95`).
- Optional: subtle paper texture shimmer on mouse move (parallax foxing spots).

## Reusable Tailwind Tokens

- Parchment bg: `bg-[#e8dcc0]`
- Foxing overlay: SVG scattered brown circles at `opacity-30`.
- Burn shadow: `shadow-[inset_0_0_60px_rgba(90,60,20,0.3),inset_0_0_20px_rgba(60,40,10,0.2)]`
- Compass rose: SVG 8-point star with `#8a1a1a` north point and `#3a2a0a` others.
- Trade route: SVG dashed path `stroke-dasharray="6,4"` in `#5a7a9a`.
- Cartouche border: `border-2 border-[#c4a043]` with SVG corner flourishes.
- Lat/long grid: `bg-[linear-gradient(rgba(58,42,10,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(58,42,10,0.08)_1px,transparent_1px)] bg-[size:50px_50px]`
- Calligraphy label: `font-serif italic text-lg text-[#3a2a0a] tracking-wide`
- Parchment button: `bg-[#e8dcc0] text-[#3a2a0a] font-serif italic border border-[#6a4a1a] shadow-[2px_2px_4px_rgba(58,42,10,0.2)]`
- Wax seal: SVG circle `fill="#8a1a1a" opacity="0.8"` with serif text.
- Hand-drawn coast: SVG wavy path `stroke-width="1" opacity="0.6"`.
- Marginalia: `font-serif italic text-sm text-[#3a2a0a]/60 rotate-[-2deg]`

## Quality Checklist (must pass)

- Parchment background (#e8dcc0) is the base surface everywhere.
- Foxing spots or organic staining visible on the background.
- A large compass rose (8-point star) with N/S/E/W cardinal labels is present.
- At least one dashed trade route line with a ship icon.
- At least one sea monster or creature decoration in ocean/negative space.
- Decorative cartouche borders with gold corner flourishes on primary panels.
- Calligraphy serif/italic typography for place names and headings.
- Latitude/longitude grid lines are visible (faint, hand-ruled).
- "Here Be Dragons" or similar marginalia note present.
- Burn mark shadow on container edges (inset shadow).
- Hand-drawn coastline borders (wavy SVG paths) replace clean rectangles.
- At least one wax seal stamp or ink stamp decoration.
- The aesthetic reads as a 16th-century treasure map from the Age of Exploration.
- Everything feels aged, romantic, hand-crafted, and low-saturation.

## Anti-Patterns

- Bright neon or high-saturation colors (the palette is aged, muted, hand-mixed).
- Missing the compass rose (this is the signature decorative anchor).
- Clean vector borders (use hand-drawn wavy coastlines instead).
- Modern sans-serif typography (use calligraphic serifs and italics).
- Missing parchment texture/foxing (the aged surface is the foundation).
- Bright ocean blue (use faded, muted blue #5a7a9a, never #0066cc).
- Smooth gradients replacing dashed trade routes (trade routes are dashed lines with ships).
- Missing sea monster decorations (ocean space needs creatures, not emptiness).
- Plain rectangular cards without cartouche borders (every panel needs ornate framing).
- Missing marginalia (the "Here Be Dragons" tradition is part of the aesthetic).
- Dark backgrounds (antique maps are on light parchment).
- Sharp, geometric icons (use hand-drawn, organic SVG illustrations).
- Missing latitude/longitude grid (the reference system is part of the aesthetic).
- Gold used for body text (gold is for borders and decoration only).

## Accessibility Considerations

- Parchment (#e8dcc0) with sepia ink (#3a2a0a) provides excellent contrast (WCAG AAA).
- Foxing and burn mark overlays must not reduce text contrast (keep decorative SVGs at low opacity, behind text).
- Focus states: `focus:ring-2 focus:ring-[#8a1a1a]/40` (compass red ring on parchment).
- Compass rose, sea monsters, and decorative SVGs must be `aria-hidden="true"`.
- Calligraphy labels need proper `aria-label` for screen readers (decorative rotation does not affect accessibility).
- Trade route lines should have text alternatives for the route information they convey.
- Lat/long grid is decorative; it must not create a false grid for screen reader navigation.
- Touch targets (wax seals, ship icons) may be small — ensure minimum 44x44px hit area for interactive elements.
- Marginalia text must remain readable despite decorative rotation (limit rotation to 2-3 degrees).
