---
name: topographic-ui
description: Build topographic map UI components (contour lines, elevation data, terrain visualization, cartographic typography, coordinate systems, survey markers) with concentric isolines, gradient terrain color, and the precise visual language of geographic survey maps. Trigger this skill when the user asks for topographic map design, contour line UI, elevation aesthetic, cartographic interfaces, survey/map design, or terrain visualization.
---

# Topographic Map UI

Use this skill to design and implementation interfaces inspired by topographic maps: concentric contour lines representing elevation, cartographic color gradients (green valleys to brown peaks), coordinate grid overlays, survey markers, and the precise visual language of geographic survey maps.

## Non-Negotiable Foundations

- Topographic UI uses CONTOUR LINES as the primary visual texture: concentric curves that represent elevation changes across a surface.
- Colors follow cartographic conventions: green for low elevation, yellow/tan for mid, brown for high, white for peaks.
- Coordinate grids (latitude/longitude or UTM) overlay the surface as a reference system.
- Typography is cartographic: clean sans-serif labels with elevation values, coordinates, and place names.
- Survey markers (benchmarks, triangles, elevation markers) serve as interactive anchors.
- The aesthetic is precise, scientific, and grounded in real-world geographic data.

## Core Material Recipes

### 1) Contour Line Background

The signature surface: topographic contour lines.

SVG approach (most authentic):
```html
<svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
  <g fill="none" stroke="#5a8a4a" stroke-width="0.5">
    <path d="M50,50 Q100,30 150,50 T250,60 T350,50"/>
    <path d="M60,70 Q110,50 160,70 T260,80 T360,70"/>
    <path d="M70,90 Q120,70 170,90 T270,100 T370,90"/>
    <!-- More concentric paths at regular intervals -->
  </g>
</svg>
```

CSS approximation:
- `bg-[radial-gradient(ellipse_at_30%_40%,transparent_10%,rgba(90,138,74,0.1)_11%,transparent_12%,transparent_20%,rgba(90,138,74,0.08)_21%,transparent_22%)]`.

### 2) Terrain Gradient Surface

Cartographic color gradient (green to brown elevation).

- Valley: `bg-gradient-to-b from-[#a8c88a] to-[#8aa86a]` (low elevation green).
- Mid: `bg-gradient-to-b from-[#c4b88a] to-[#a89868]` (mid elevation tan).
- Peak: `bg-gradient-to-b from-[#8a7a5a] to-[#6a5a3a]` (high elevation brown).

### 3) Survey Marker / Benchmark

Geographic survey marker (interactive anchor point).

- `w-8 h-8 flex items-center justify-center`.
- Triangle marker: SVG triangle with center dot `text-[#8a1a1a]`.
- Elevation label: `font-mono text-[10px] text-[#5a3a1a]` below the marker.

### 4) Coordinate Grid Overlay

Latitude/longitude grid lines.

- `bg-[linear-gradient(rgba(90,138,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(90,138,74,0.1)_1px,transparent_1px)] bg-[size:60px_60px]`.
- Coordinate labels: `font-mono text-[10px] text-[#5a8a4a]/60` at grid intersections.

### 5) Topo Button

Button styled as a map annotation.

- `bg-[#f5ead0] text-[#3a2a0a] font-mono font-medium text-sm border border-[#8a7a5a] px-6 py-2 shadow-[1px_1px_0_rgba(0,0,0,0.1)] hover:bg-[#e8dcc0] transition-colors`.

### 6) Contour Line Divider

Elevation-styled divider that follows a contour curve.

```html
<svg viewBox="0 0 200 8" class="w-full text-[#5a8a4a]">
  <path d="M0,4 Q40,2 80,5 T160,3 T198,4" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.6"/>
  <path d="M0,5 Q40,3 80,6 T160,4 T198,5" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
</svg>
```

### 7) Compass Rose

Cartographic compass decoration.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 opacity-40">
  <circle cx="30" cy="30" r="25" fill="none" stroke="#5a8a4a" stroke-width="0.5"/>
  <path d="M30,5 L35,30 L30,55 L25,30 Z" fill="#5a8a4a" opacity="0.6"/>
  <text x="30" y="3" font-size="6" fill="#5a8a4a" text-anchor="middle">N</text>
</svg>
```

## Color Palette System

### Cartographic Elevation Palette

| Elevation | Color | Hex | Role |
|---|---|---|---|
| Water/Sea Level | Deep Blue | `#2a5a8a` | Lowest elevation |
| Floodplain | Light Blue | `#6a9aba` | Near water |
| Valley | Green | `#8aa86a` to `#a8c88a` | Lowland |
| Foothills | Tan/Yellow | `#c4b88a` to `#d4c89a` | Mid elevation |
| Mountain | Brown | `#8a7a5a` to `#6a5a3a` | High elevation |
| Peak | White | `#f5f5f0` | Highest |
| Contour Lines | Dark Green/Brown | `#5a8a4a` / `#5a4a2a` | Line work |
| Map Text | Dark Brown | `#3a2a0a` | Labels, coordinates |
| Paper Base | Cream | `#f5ead0` | Map background |
| Survey Red | Red | `#8a1a1a` | Markers, benchmarks |

Rules: Follow cartographic conventions. The gradient from green (low) to brown (high) to white (peak) is standard. Contour lines are thin and semi-transparent. Survey markers are the only bright accent.

## Typography Recommendations

Topographic typography is cartographic — clean, precise, and informative:

- **Primary:** Inter, Source Sans Pro, or Open Sans (clean map label sans-serif).
- **Monospace:** JetBrains Mono, IBM Plex Mono (coordinates, elevation data).
- **Labels:** `font-sans text-sm` for place names; `font-mono text-xs` for coordinates.
- **Headings:** `font-sans font-medium text-lg` (like a map title).
- The typography should feel like a USGS topographic map legend.

## Component Architecture Pattern

1. Cream or terrain-gradient background.
2. Contour line SVG overlay (concentric curves).
3. Coordinate grid overlay (optional, subtle).
4. Content cards styled as map annotations (cream with brown borders).
5. Survey marker interactive elements.
6. Contour line dividers.
7. Compass rose decoration.
8. Monospace coordinate/elevation data displays.

## Interaction Rules

- Default state: cartographic, precise, informative.
- Hover: survey markers highlight, contour lines brighten.
  - `hover:text-[#8a1a1a] hover:scale-110 transition-all duration-200`.
- Active: `active:scale-100`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8a1a1a]/40`.
- Transitions: `transition-all duration-200` (precise, measured, like surveying).
- Optional: zoom/pan on the map background (like a real topo map viewer).

## Reusable Tailwind Tokens

- Contour bg: SVG concentric paths at `opacity-20` in green.
- Coordinate grid: `bg-[linear-gradient(rgba(90,138,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(90,138,74,0.1)_1px,transparent_1px)] bg-[size:60px_60px]`
- Terrain gradient: `bg-gradient-to-b from-[#a8c88a] to-[#6a5a3a]`.
- Map annotation card: `bg-[#f5ead0] border border-[#8a7a5a] font-mono shadow-[1px_1px_0_rgba(0,0,0,0.1)]`
- Survey marker: SVG triangle with center dot in `#8a1a1a`.
- Cream bg: `bg-[#f5ead0]`

## Quality Checklist (must pass)

- Contour lines (concentric curves) are visible on the background.
- Color palette follows cartographic conventions (green to brown elevation gradient).
- At least one survey marker or benchmark element.
- Coordinate grid or reference system present.
- Typography includes monospace data (coordinates, elevations).
- Compass rose or cartographic decoration present.
- Contour line dividers between sections.
- Cards styled as map annotations (cream paper with brown borders).
- The aesthetic reads as a USGS topographic survey map.
- Everything is precise, scientific, and geographically grounded.

## Anti-Patterns

- Bright neon or non-cartographic colors (the palette follows map conventions).
- Missing contour lines (these are the signature visual element).
- Sans-serif data displays without monospace (coordinates need monospace).
- Missing survey markers (these are the interactive anchor points).
- Dark backgrounds (topographic maps are printed on light/cream paper).
- Smooth gradients replacing contour lines (contour LINES are the point, not smooth fills).
- Missing the cartographic color gradient (green valley to brown peak is standard).
- Modern minimalist design (topo maps are information-dense).
- Missing coordinate grid (the reference system is part of the aesthetic).
- Decorative non-geographic elements (everything should feel like map data).

## Accessibility Considerations

- Cream backgrounds with dark brown text provide excellent contrast (WCAG AAA).
- Contour line overlays must not reduce text contrast (keep at low opacity).
- Focus states: `focus:ring-2 focus:ring-[#8a1a1a]/40` (survey red ring on cream).
- Survey markers must be keyboard accessible (not just mouse-clickable).
- Compass rose and contour SVGs must be `aria-hidden="true"`.
- Coordinate data displays need proper `aria-label` for screen readers.
- The information-dense layout should maintain logical reading order.
- Touch targets (survey markers) may be small — ensure minimum 44x44px hit area.
