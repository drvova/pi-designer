---
name: constructivism-ui
description: Build constructivist UI components (Soviet avant-garde, bold red/black/white, diagonal compositions, photomontage, condensed industrial typography, propaganda poster energy) with revolutionary visual language, geometric abstraction, and mobilizing design. Trigger this skill when the user asks for constructivism, Soviet design, propaganda poster aesthetic, revolutionary UI, agitprop style, or Rodchenko/Lissitzky-inspired interfaces.
---

# Constructivism UI

Use this skill to design and implement bold, revolutionary interfaces inspired by 1920s Soviet constructivism: red/black/white palettes, diagonal compositions, photomontage, condensed industrial typography, and the mobilizing visual language of agitprop posters.

## Non-Negotiable Foundations

- Constructivism is art with purpose: it was built to mobilize people toward collective action. Every visual element serves an ideological function.
- The palette is severely restricted: red, black, and white (warm parchment). Occasionally yellow. No other colors.
- Composition is DYNAMIC: diagonal lines, rotated text, off-axis elements, and asymmetric energy. Nothing is centered or static.
- Typography is architecture: condensed, heavy, industrial fonts act as structural elements. Words are buildings.
- Photomontage is key: combining photography with geometric shapes and bold type creates the signature constructivist tension.
- The aesthetic communicates URGENCY and MOVEMENT. It is not decorative; it is mobilizing.

## Core Material Recipes

### 1) Red Block Panel

The foundational constructivist surface: a bold red rectangle with condensed type.

- `bg-[#dc2626] text-white p-8`.
- Diagonal variant: `[clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-30px))]` (angled bottom edge).
- Text: `font-condensed text-4xl font-black uppercase tracking-tight leading-none`.

### 2) Diagonal Split Layout

The signature constructivist composition: two fields split at an angle.

```css
.diagonal-split {
  background: linear-gradient(105deg, #dc2626 0%, #dc2626 50%, #1a1a1a 50%, #1a1a1a 100%);
}
```

Or using two divs with clip-path:
- Left: `bg-[#dc2626] [clip-path:polygon(0_0,55%_0,45%_100%,0_100%)]`.
- Right: `bg-[#1a1a1a] [clip-path:polygon(55%_0,100%_0,100%_100%,45%_100%)]`.

### 3) Rotated Banner Text

Text rotated at an angle, cutting across the composition.

- `rotate-[-4deg] bg-[#dc2626] text-white font-black text-2xl uppercase tracking-wider px-4 py-1`.
- Or: `rotate-[8deg] text-[#1a1a1a] font-condensed font-black text-6xl uppercase`.

### 4) Photomontage Card

High-contrast black and white photo combined with geometric overlays.

- Photo: `grayscale contrast-125 brightness-110`.
- Overlay shapes: red rectangles, black bars, white circles positioned at angles over the photo.
- Text over photo: `text-white font-condensed text-3xl font-black uppercase mix-blend-difference`.

### 5) Constructivist Button

Bold, geometric, utilitarian button.

- `bg-[#dc2626] text-white font-condensed font-black text-lg uppercase tracking-wider px-8 py-3 hover:bg-[#1a1a1a] transition-colors`.
- Angled: add `[clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]`.
- Outline: `border-4 border-[#dc2626] text-[#dc2626] font-black uppercase px-8 py-3 hover:bg-[#dc2626] hover:text-white`.

### 6) Circle / Sunburst Motif

El Lissitzky-inspired geometric circle element.

- `w-32 h-32 rounded-full bg-[#dc2626] flex items-center justify-center`.
- With radiating lines: SVG with radiating strokes from center.
- Half-circle: `[clip-path:polygon(0_0,100%_0,100%_50%,0_50%)]` on a circle.

### 7) Industrial Number / Data Display

Large condensed numbers used as architectural elements.

- `font-condensed text-[10rem] font-black text-[#dc2626] leading-[0.8] tracking-tighter`.

## Color Palette System

### The ONLY Allowed Colors

| Color | Hex | Role |
|---|---|---|
| Revolutionary Red | `#dc2626` | Primary, energy, action, urgency |
| True Black | `#1a1a1a` | Structure, text, contrast |
| White / Parchment | `#f5f0e8` | Background, negative space, counterpoint |
| Yellow | `#facc15` | Occasional accent (use sparingly) |

Rules: Red + Black + White is the non-negotiable core. Yellow is the ONLY allowed additional color, used extremely sparingly. No blues, greens, or pastels. The restriction IS the ideology.

## Typography Recommendations

Constructivism typography is condensed, heavy, and industrial:

- **Display headings:** Bebas Neue, Oswald (condensed extra-bold), or Archivo Black.
- **Condensed body:** Barlow Condensed, Oswald at `font-medium`.
- **Labels:** `font-condensed font-bold uppercase tracking-widest text-sm`.
- **Mono:** Space Mono, IBM Plex Mono for data/labels.
- Alternative display: Druk Wide, or Anton (heavy, impactful, billboard-like).
- Avoid serif fonts. Constructivism is industrial sans-serif.
- Typography should feel like it was stamped, printed, or stenciled.

## Component Architecture Pattern

1. Parchment or white background (the canvas).
2. Bold red and black geometric blocks at angles.
3. Diagonal split compositions (red vs black fields).
4. Oversized condensed typography as architectural elements.
5. Photomontage elements (grayscale high-contrast photos with shape overlays).
6. Rotated banners and diagonal text cutting across the composition.
7. Circle/sunburst geometric motifs (El Lissitzky references).

## Interaction Rules

- Default state: bold, urgent, dynamic.
- Hover: color inversion (red becomes black, black becomes red).
  - `hover:bg-[#1a1a1a] hover:text-white transition-colors duration-150`.
- Active: `active:bg-[#f5f0e8] active:text-[#dc2626]`.
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#dc2626]`.
- Transitions: `transition-colors duration-150` (fast, decisive, urgent).
- No decorative animations. Motion is purely functional color change.

## Reusable Tailwind Tokens

- Red panel: `bg-[#dc2626] text-white p-8`
- Black panel: `bg-[#1a1a1a] text-white p-8`
- Parchment: `bg-[#f5f0e8]`
- Diagonal split: `bg-[linear-gradient(105deg,#dc2626_0%,#dc2626_50%,#1a1a1a_50%,#1a1a1a_100%)]`
- Rotated banner: `rotate-[-4deg] bg-[#dc2626] text-white font-black uppercase tracking-wider`
- Constructivist button: `bg-[#dc2626] text-white font-black uppercase tracking-wider px-8 py-3 hover:bg-[#1a1a1a]`
- Display number: `font-['Bebas_Neue'] text-[10rem] font-black text-[#dc2626] leading-[0.8]`
- Circle motif: `w-32 h-32 rounded-full bg-[#dc2626]`
- Angled clip: `[clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]`

## Quality Checklist (must pass)

- Color palette is restricted to red, black, white/parchment (yellow sparingly).
- At least one diagonal element (rotated text, angled clip-path, diagonal split).
- Typography is condensed and heavy (`font-black`, `font-condensed`).
- Composition is asymmetric and dynamic (not centered or static).
- At least one photomontage element (photo + geometric overlay).
- Red blocks and black blocks create visual tension.
- Oversized typography acts as architectural structure.
- Circle or sunburst geometric motifs are present.
- Text is uppercase with wide tracking for labels.
- The aesthetic reads as a propaganda poster or revolutionary publication.

## Anti-Patterns

- Any color outside red/black/white/yellow (constructivism has a strict palette).
- Centered, static compositions (constructivism demands diagonal energy).
- Light, thin typography (constructivism is heavy and industrial).
- Serif fonts (only condensed sans-serif).
- Decorative elements without purpose (constructivism is utilitarian).
- Smooth, gentle transitions (motion is fast and decisive).
- Rounded corners (constructivism is sharp and angular).
- Pastel or muted colors (the palette is bold primary red).
- Missing diagonal elements (diagonals create the revolutionary energy).
- More than four colors (red + black + white + occasional yellow is the limit).
- Symmetrical balance (asymmetry and tension are essential).

## Accessibility Considerations

- High contrast (red/white, black/white) provides excellent text legibility.
- Red on white meets WCAG AA at `#dc2626` for large text and bold weights.
- Diagonal elements and clip-path must not cut off interactive areas.
- Focus states: `focus:ring-4 focus:ring-[#dc2626]` (visible against all backgrounds).
- Photomontage elements must have `alt` text describing the combined meaning.
- Oversized display numbers should be readable at smaller sizes too (responsive scaling).
- Rotated text must remain readable (max rotation 8-10 degrees).
- Be aware of political context: Soviet aesthetics carry historical weight. Use thoughtfully.
- Color should not be the sole information channel (include text labels alongside red indicators).
