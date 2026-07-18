---
name: travel-poster-ui
description: Build travel poster UI components (1930s flat-illustration style, bold simplified landscapes, dramatic perspective, limited color palettes, oversized destination typography, romanticized adventure) with flat block colors, dramatic compositions, and the golden age of travel advertising. Trigger this skill when the user asks for travel poster, vintage travel ad, Art Deco poster, destination design, 1930s illustration, or Cassandre interfaces.
---

# Travel Poster UI

Use this skill to design and implementation romantic, adventurous interfaces inspired by 1930s golden-age travel posters: flat block-color illustrations, dramatically simplified landscapes, oversized destination typography, limited palettes, romanticized viewpoints, and the Art Deco poster aesthetic of A.M. Cassandre and the WPA.

## Core Material Recipes

### 1) Flat Block Landscape

Simplified layered landscape (mountains/sky/sea as flat bands).

```html
<div class="rounded-lg overflow-hidden">
  <div class="h-24 bg-[#ff8c42]"></div> <!-- Sky -->
  <div class="h-16 bg-[#c4471a]"></div> <!-- Mid mountains -->
  <div class="h-12 bg-[#5a2a4a]"></div> <!-- Far mountains -->
  <div class="h-8 bg-[#1a1a3a]"></div> <!-- Water -->
</div>
```

### 2) Oversized Destination Typography

Massive destination name as the dominant element.

- `text-7xl font-black uppercase tracking-tighter text-[#c41e1e] leading-[0.85]` showing "PARIS" or "TOKYO" or "EGYPT".

### 3) Flat Silhouette Accent

Simplified flat-color landmark silhouette.

```html
<svg viewBox="0 0 100 80" class="w-full opacity-90">
  <!-- Eiffel Tower silhouette (flat fill, no detail) -->
  <path d="M45,80 L48,50 L46,40 L44,50 L47,80 M53,80 L52,50 L54,40 L56,50 L53,80 M43,80 L57,80 L50,30 L43,80 M48,20 L52,20 L50,5 L48,20" fill="#1a1a1a"/>
</svg>
```

### 4) Poster Frame

Classic travel poster border with text blocks.

- `bg-[#f5ead0] border-[3px] border-[#1a1a1a] p-4 shadow-[4px_4px_0_rgba(0,0,0,0.1)]`.
- Bottom text block: `bg-[#1a1a1a] text-[#f5cc3a] font-bold uppercase text-sm tracking-widest text-center py-2` showing "VISIT SWITZERLAND".

### 5) Travel Poster Button

Bold flat block-color button.

- `bg-[#1a3a5a] text-white font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-none hover:bg-[#0a2a4a] transition-colors shadow-[3px_3px_0_rgba(0,0,0,0.15)]`.

### 6) Sun/Moon Disc

Flat circular sun or moon (a classic travel poster motif).

- Sun: `w-20 h-20 rounded-full bg-[#ffcc00]` (flat disc, no glow).
- Moon: `w-16 h-16 rounded-full bg-[#f5ead0]` with crescent shadow: `box-shadow: inset -8px 0 0 rgba(26,26,58,0.3)`.

## Color Palette System

Travel posters use DRAMATIC limited palettes — typically 4-6 colors maximum:

### Sunset Journey Palette

| Color | Hex | Element |
|---|---|---|
| Sunset Orange | `#ff8c42` | Sky |
| Deep Red | `#c4471a` | Mountains |
| Royal Purple | `#5a2a4a` | Distant peaks |
| Midnight Blue | `#1a1a3a` | Water/shadow |
| Cream | `#f5ead0` | Paper/text |
| Ink Black | `#1a1a1a` | Silhouettes/text |

### Alpine Cool Palette

| Color | Hex | Element |
|---|---|---|
| Sky Blue | `#5acaf0` | Sky |
| Snow White | `#ffffff` | Peaks |
| Forest Green | `#2a5a3a` | Hills |
| Earth Brown | `#5a3a1a` | Ground |
| Cream | `#f5ead0` | Paper |

Rules: 4-6 FLAT colors maximum (no gradients, no blends). Colors should be SATURATED and BOLD. The palette should feel romantic and adventurous — the dream of travel.

## Typography Recommendations

- **Display:** Bebas Neue, Oswald, or Druk (bold condensed — like vintage poster lettering).
- **Alternative:** Playfair Display Black (for elegant European destinations).
- **Body:** Source Sans Pro, DM Sans (clean readable sans).
- **Labels:** `font-bold uppercase tracking-[0.2em] text-sm` (poster banner text).
- Destination names should be ENORMOUS — the biggest element on the page.

## Reusable Tailwind Tokens

- Flat landscape: stacked flat-color `div` bands at different heights.
- Destination type: `text-7xl font-black uppercase tracking-tighter`.
- Poster frame: `bg-[#f5ead0] border-[3px] border-[#1a1a1a] shadow-[4px_4px_0_rgba(0,0,0,0.1)]`.
- Travel button: `bg-[#1a3a5a] text-white font-bold uppercase tracking-widest rounded-none shadow-[3px_3px_0_rgba(0,0,0,0.15)]`.
- Sun disc: `rounded-full bg-[#ffcc00]`.

## Quality Checklist

- At least one flat block-color landscape composition.
- Oversized destination typography as dominant element.
- At least one flat silhouette (landmark or landscape).
- Limited palette of 4-6 flat colors (no gradients).
- Classic poster frame with bottom text block.
- Sun or moon flat disc decoration.
- Bold condensed poster typography.
- The aesthetic reads as 1930s travel poster / WPA / Cassandre.
- Everything feels romantic, adventurous, and nostalgically glamorous.
- Hard offset shadows (no blur — `shadow-[3px_3px_0]`).

## Anti-Patterns

- Gradients or smooth color transitions (travel posters are FLAT blocks).
- More than 6 colors (the palette is strictly limited for poster printing).
- Missing oversized destination typography (the city/country name is the STAR).
- Missing flat silhouettes (landmarks rendered as simplified flat shapes).
- Blurred soft shadows (use hard offset shadows only).
- Detailed realistic illustration (travel posters SIMPLIFY dramatically).
- Missing the bottom text block ("VISIT [DESTINATION]" banner is iconic).
- Light thin typography (poster type is BLACK bold condensed).
- Missing the sun/moon disc (this is a classic poster composition element).
- Modern flat design (this is 1930s flat ILLUSTRATION, not modern minimalism).

## Accessibility Considerations

- Flat color blocks with bold text provide excellent contrast (WCAG AAA).
- Limited palette aids colorblind users (fewer colors to distinguish).
- Focus states: `focus:ring-4 focus:ring-[#1a1a1a]/30` (thick dark ring on cream).
- Decorative silhouette SVGs must be `aria-hidden="true"`.
- Destination text must use semantic heading tags for SEO and screen readers.
- Touch targets must be adequate despite bold border styling.
- The bold high-contrast palette is naturally very accessible.
