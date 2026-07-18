---
name: mosaic-tile-ui
description: Build mosaic tile UI components (ancient Roman/Byzantine tesserae, grouted tile grids, geometric floor patterns, glass paste tiles, pebble mosaics, opus tessellatum) with small colored tile grids, visible grout lines, and the ancient craft of assembling images from thousands of tiny stone/glass pieces. Trigger this skill when the user asks for mosaic, tesserae, Roman tile, Byzantine mosaic, opus tessellatum, guilloche pattern, pebble mosaic, grouted tile grid, or ancient tile floor interfaces.
---

# Mosaic Tile UI

Use this skill to design and implement interfaces inspired by the ancient craft of mosaic: small colored tesserae assembled in grids with visible grout lines, geometric Roman floor patterns, Byzantine gold-glass accents, and the patient artistry of assembling images from thousands of tiny stone and glass pieces.

## Non-Negotiable Foundations

- Mosaic tile UI is defined by GRID ASSEMBLY: the interface is built from small colored square tiles (tesserae) separated by visible grout lines.
- Grout lines are the SIGNATURE structural element — dark gaps between tiles are mandatory. Without grout, it is not a mosaic.
- Tesserae are small and uniform in grid structure: each tile is a discrete colored cell, like CSS Grid cells with `gap` showing the dark grout beneath.
- Colors reflect ancient Mediterranean materials: terracotta, stone, dark blue (lapis), gold-leaf glass, cream marble, deep red, olive green, and charcoal.
- The grout color is always dark: charcoal gray (`#3a342e`) or dark brown (`#2a241e`), suggesting the mortar between real stone tiles.
- Geometric Roman patterns (guilloche interlocking rings, meander keys, spiral borders) must appear as decorative dividers or section accents.
- Byzantine gold-glass tiles provide luminous accent points — gold tiles glow against the earthy stone palette.
- The aesthetic evokes ancient craft: patient, deliberate, material-driven, and grounded in real stone and glass texture.
- Tiles must feel slightly irregular — not pixel-perfect uniform. Slight variation in opacity or tone per tile suggests hand-set tesserae.

## Core Material Recipes

### 1) Tesserae Grid Background

The signature surface: a grid of small colored tiles with visible dark grout.

```html
<div class="bg-[#3a342e] grid grid-cols-12 gap-[2px] p-[2px]">
  <div class="aspect-square bg-[#c87850]"></div>
  <div class="aspect-square bg-[#e8dcc0]"></div>
  <div class="aspect-square bg-[#2a4a7a]"></div>
  <div class="aspect-square bg-[#c8a040]"></div>
  <div class="aspect-square bg-[#8a5a3a]"></div>
  <div class="aspect-square bg-[#d4b896]"></div>
  <!-- ... repeat with varied ancient palette tiles ... -->
</div>
```

The dark `bg-[#3a342e]` shows through the `gap-[2px]` as grout lines. Each tile is a single ancient-palette color.

### 2) Grouted Tile Card

A content card built as a mosaic panel with a grout-bordered frame.

- Frame: `bg-[#3a342e] p-[3px] rounded-sm` (dark grout border).
- Inner panel: `bg-[#e8dcc0] p-6` (cream marble surface for content).
- With tile accent border: a single row of colored tesserae around the card edge: `bg-[#3a342e] grid grid-cols-[repeat(8,1fr)] gap-[2px] p-[2px]` containing small colored tiles, then inner content panel.

### 3) Guilloche Pattern Divider

Interlocking double-strand guilloche border (classic Roman floor motif).

```html
<div class="flex items-center gap-0 h-8" aria-hidden="true">
  <div class="w-8 h-8 rounded-full border-[3px] border-[#c8a040] border-b-transparent"></div>
  <div class="w-8 h-8 rounded-full border-[3px] border-[#2a4a7a] border-t-transparent -ml-4"></div>
  <div class="w-8 h-8 rounded-full border-[3px] border-[#c8a040] border-b-transparent -ml-4"></div>
  <div class="w-8 h-8 rounded-full border-[3px] border-[#2a4a7a] border-t-transparent -ml-4"></div>
  <!-- ... repeat for full width ... -->
</div>
```

CSS-only approximation: `h-2 bg-[repeating-linear-gradient(90deg,#c8a040_0px,#c8a040_8px,#2a4a7a_8px,#2a4a7a_16px)] rounded-full`.

### 4) Byzantine Gold-Glass Tile Accent

Luminous gold tile that glows against the earthy palette.

- Gold tile: `bg-gradient-to-br from-[#e8c850] via-[#c8a040] to-[#d4b050] shadow-[inset_0_0_4px_rgba(255,220,100,0.3),0_0_8px_rgba(200,160,64,0.3)]` (gold-leaf glass with inner luminosity and outer glow).
- Gold tile in grid: replace select cells with the gold gradient to create accents, focal points, or letter forms.

### 5) Meander Key Pattern Border

Greek key / meander pattern as a section divider or frame.

```css
.meander-border {
  height: 24px;
  background-color: #3a342e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24' viewBox='0 0 40 24'%3E%3Cpath d='M0 4h20v16h-16v-8h8v4' fill='none' stroke='%23c8a040' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
}
```

Tailwind approximation: `h-6 bg-[#3a342e] border-y-2 border-[#c8a040]` with a repeating SVG meander overlay.

### 6) Pebble Mosaic Surface

Irregular rounded-tile texture (opus signium / pebble mosaic).

```css
.pebble-mosaic {
  background-color: #3a342e;
  background-image:
    radial-gradient(circle at 15% 20%, #c87850 6px, transparent 7px),
    radial-gradient(circle at 45% 35%, #e8dcc0 5px, transparent 6px),
    radial-gradient(circle at 75% 15%, #8a5a3a 7px, transparent 8px),
    radial-gradient(circle at 25% 60%, #2a4a7a 5px, transparent 6px),
    radial-gradient(circle at 65% 70%, #c8a040 6px, transparent 7px),
    radial-gradient(circle at 90% 55%, #d4b896 5px, transparent 6px),
    radial-gradient(circle at 10% 85%, #6a7a4a 7px, transparent 8px),
    radial-gradient(circle at 50% 90%, #c87850 5px, transparent 6px);
  background-size: 120px 120px;
}
```

### 7) Mosaic Button

Grout-framed tile button with tactile press.

- Primary: `bg-[#2a4a7a] text-[#e8dcc0] font-bold tracking-wide px-8 py-3 border-[3px] border-[#3a342e] ring-1 ring-[#5a6a8a] shadow-[0_3px_0_#1a2a4a,inset_0_1px_0_rgba(255,255,255,0.1)] hover:translate-y-0.5 hover:shadow-[0_2px_0_#1a2a4a] active:translate-y-1 active:shadow-none transition-all`.
- Gold accent button: `bg-gradient-to-br from-[#e8c850] to-[#c8a040] text-[#3a342e] font-bold tracking-wide px-8 py-3 border-[3px] border-[#3a342e] shadow-[0_3px_0_#8a6a20] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all`.

### 8) Opus Tessellatum Image Panel

A panel where tiles are colored to form a simple image or pattern (like a real mosaic figure).

```html
<div class="bg-[#3a342e] grid grid-cols-8 gap-[2px] p-[2px] w-max">
  <!-- Row 1 -->
  <div class="w-6 h-6 bg-[#e8dcc0]"></div>
  <div class="w-6 h-6 bg-[#e8dcc0]"></div>
  <div class="w-6 h-6 bg-[#c87850]"></div>
  <div class="w-6 h-6 bg-[#c87850]"></div>
  <div class="w-6 h-6 bg-[#c87850]"></div>
  <div class="w-6 h-6 bg-[#c87850]"></div>
  <div class="w-6 h-6 bg-[#e8dcc0]"></div>
  <div class="w-6 h-6 bg-[#e8dcc0]"></div>
  <!-- ... more rows forming a pattern or figure ... -->
</div>
```

Each cell's color is chosen to compose a larger image, exactly like ancient opus tessellatum technique.

## Color Palette System

### Tesserae Tile Colors

| Color | Hex | Ancient Material |
|---|---|---|
| Terracotta Red | `#c87850` | Fired clay tile |
| Cream Marble | `#e8dcc0` | White marble tessera |
| Lapis Blue | `#2a4a7a` | Lapis lazuli / blue glass paste |
| Gold-Glass | `#c8a040` | Byzantine gold-leaf glass |
| Gold Light | `#e8c850` | Gold-glass highlight gradient |
| Olive Green | `#6a7a4a` | Serpentine / green stone |
| Sandstone | `#d4b896` | Sandstone tessera |
| Dark Red | `#8a3a2a` | Red iron-rich stone |
| Charcoal Stone | `#4a443e` | Dark limestone |

### Grout and Structure Colors

| Color | Hex | Material |
|---|---|---| 
| Dark Grout | `#3a342e` | Standard mortar between tiles |
| Dark Brown Grout | `#2a241e` | Aged / deeper mortar variant |
| Warm Grout | `#4a4034` | Lighter sandy mortar |

### Accent Colors

| Color | Hex | Material |
|---|---|---|
| Gold Glow | `rgba(200,160,64,0.3)` | Gold-glass luminosity shadow |
| Tile Highlight | `rgba(255,255,255,0.1)` | Inner tile sheen |
| Tile Shadow | `#1a2a4a` | Button press depth shadow |

Rules: Tile colors are earthy and mineral — they reference real stone, fired clay, and glass paste. Grout is always dark (`#3a342e` default). Gold tiles are the only luminous accent — they glow against the matte stone palette. 6-9 tile colors should be used in any mosaic grid for sufficient variety without chaos. The palette should feel like a Mediterranean archaeological site.

## Typography Recommendations

Mosaic tile typography echoes ancient Roman inscriptions and archaeological signage:

- **Display headings:** Trajan Pro, Cinzel, or Cinzel Decorative (Roman capital inscription style).
- **Sub-display:** Cormorant Garamond or EB Garamond (classical serif for section titles).
- **Body:** Lora, Crimson Text, or Source Serif Pro (readable classical serif).
- **Labels:** `font-serif font-bold text-xs uppercase tracking-[0.2em]` (inscription label style).
- Avoid sans-serif for primary text. Mosaic UI is grounded in ancient classical typography.

## Component Architecture Pattern

1. Dark grout background (`#3a342e`) as the base surface.
2. Tesserae grid panels (colored tiles in CSS Grid with `gap-[2px]` showing grout).
3. Grout-framed content cards with cream marble inner panels for readable text.
4. Guilloche or meander pattern dividers between sections.
5. Byzantine gold-glass accent tiles for highlights and focal points.
6. Opus tessellatum image panels for hero/feature areas.
7. Grout-bordered tile buttons with tactile press animation.
8. Classical serif inscription typography.
9. Pebble mosaic texture on accent/secondary surfaces.

## Interaction Rules

- Default state: earthy, grouted, material-grounded, ancient.
- Hover: tile or card lifts slightly from the grout plane.
  - `hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-300`.
- Active (buttons): press into the grout plane (tactile tile-set feel).
  - `active:translate-y-1 active:shadow-none transition-all`.
- Gold tile hover: glow intensifies.
  - `hover:shadow-[inset_0_0_4px_rgba(255,220,100,0.4),0_0_12px_rgba(200,160,64,0.5)] transition-all`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c8a040] focus:ring-offset-2 focus:ring-offset-[#3a342e]`.
- Transitions: `transition-all duration-300 ease-out` (smooth, deliberate — like setting a tile).

## Reusable Tailwind Tokens

- Tesserae grid: `bg-[#3a342e] grid grid-cols-12 gap-[2px] p-[2px]` with `aspect-square` colored cells.
- Grout frame: `bg-[#3a342e] p-[3px]` wrapping an inner content panel.
- Cream content panel: `bg-[#e8dcc0] p-6` (marble surface inside grout frame).
- Guilloche divider: alternating gold (`#c8a040`) and lapis (`#2a4a7a`) half-circles or `bg-[repeating-linear-gradient(90deg,#c8a040_0px,#c8a040_8px,#2a4a7a_8px,#2a4a7a_16px)]`.
- Gold tile: `bg-gradient-to-br from-[#e8c850] via-[#c8a040] to-[#d4b050] shadow-[inset_0_0_4px_rgba(255,220,100,0.3),0_0_8px_rgba(200,160,64,0.3)]`.
- Meander border: `h-6 bg-[#3a342e] border-y-2 border-[#c8a040]` with SVG meander overlay.
- Pebble mosaic: multi-layer radial gradients of colored circles on `#3a342e` base.
- Mosaic button: `bg-[#2a4a7a] text-[#e8dcc0] border-[3px] border-[#3a342e] ring-1 ring-[#5a6a8a] shadow-[0_3px_0_#1a2a4a]`.
- Gold button: `bg-gradient-to-br from-[#e8c850] to-[#c8a040] text-[#3a342e] border-[3px] border-[#3a342e] shadow-[0_3px_0_#8a6a20]`.

## Quality Checklist (must pass)

- Tesserae grid with visible dark grout lines is present on at least one major surface.
- Grout color is dark (`#3a342e` or darker) and clearly visible through grid gaps.
- At least 6 varied tile colors from the ancient Mediterranean palette are used in grids.
- At least one guilloche or meander geometric pattern as a divider or border.
- Byzantine gold-glass accent tiles are present and appear luminous against the stone palette.
- Grout-framed cards with cream marble inner panels hold readable content.
- Opus tessellatum image panel present where a hero/feature image area is needed.
- Buttons have grout-bordered tile aesthetic with tactile press animation.
- Typography is classical serif (Roman inscription display, readable serif body).
- Pebble mosaic texture on at least one accent/secondary surface.
- The aesthetic reads as an ancient Roman or Byzantine mosaic floor/wall.
- Tiles feel slightly varied in tone (not pixel-perfect uniform — hand-set quality).

## Anti-Patterns

- Missing visible grout lines (without dark gaps between tiles, it is not a mosaic).
- Bright neon or pastel colors (the palette is earthy, mineral, Mediterranean stone).
- Uniform seamless surfaces (mosaics are ASSEMBLED from discrete tiles).
- Thin or invisible grout (grout must be clearly visible — `gap-[2px]` minimum on dark base).
- Sans-serif typography (mosaic UI is classical, ancient, serif).
- Missing geometric patterns (guilloche, meander keys are essential Roman floor motifs).
- Missing gold accents (Byzantine gold-glass tiles are the luminous signature).
- Pixel-art aesthetic (mosaics are hand-set stone, not digital pixels — use earthy tones, not saturated).
- Missing the material reference (mosaic is a PHYSICAL craft — tiles should feel like stone and glass).
- Perfectly uniform tile colors (real tesserae have slight variation — add subtle opacity or tone differences).
- Light or white grout (grout is dark mortar — always charcoal or dark brown).
- Rounded soft shapes on tiles (tesserae are square or roughly cut stone, not pill-shaped).

## Accessibility Considerations

- Cream marble panels (`#e8dcc0`) with dark serif text provide good contrast for readable content.
- Tesserae grid backgrounds must not be placed behind body text — use grout-framed cream panels for text.
- Gold tile accents on dark backgrounds must have sufficient luminance contrast for visibility.
- Focus states: `focus:ring-2 focus:ring-[#c8a040] focus:ring-offset-2 focus:ring-offset-[#3a342e]` (gold ring visible on dark grout).
- Decorative geometric patterns (guilloche, meander) must be `aria-hidden="true"`.
- Opus tessellatum image panels are decorative — content must be accessible without the tile image.
- The dark grout background requires light text (`#e8dcc0`) on surfaces without cream panels.
- Button press animation must respect `prefers-reduced-motion` (disable translate-y on active).
- Touch targets must be adequate despite grout borders (`px-8 py-3` provides sufficient size).
- The earthy palette should be tested for users with color vision deficiencies — ensure text-to-background contrast meets WCAG AA.
