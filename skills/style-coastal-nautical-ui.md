---
name: coastal-nautical-ui
description: Build coastal / nautical UI components (lighthouse stripes, rope knots, sailor knots, ocean blues, sail canvas, compass roses, signal flags, beach glass textures, weathered driftwood) with navy/white/red palettes, rope textures, and the fresh breezy aesthetic of maritime life. Trigger this skill when the user asks for coastal design, nautical UI, maritime aesthetic, beach interface, sailor design, lighthouse stripes, or seaside interfaces.
---

# Coastal / Nautical UI

Use this skill to design and implementation fresh, breezy interfaces inspired by maritime life: navy/white/red lighthouse stripes, rope and knot textures, sail canvas surfaces, compass rose decorations, signal flag patterns, beach glass translucency, and the salty, sun-bleached aesthetic of the coast.

## Core Material Recipes

### 1) Lighthouse Stripe Background

Navy and white horizontal stripes (classic lighthouse/nautical pattern).

- `bg-[repeating-linear-gradient(0deg,#1a2a4a_0px,#1a2a4a_20px,#ffffff_20px,#ffffff_40px)]`.

### 2) Sail Canvas Card

Off-white textured canvas surface (like a boat sail).

- `bg-[#f5f0e6] rounded-lg p-6 border border-[#d4c8a8] shadow-[0_2px_8px_rgba(26,42,74,0.1)]`.
- Canvas texture: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(0,0,0,0.015)_3px,rgba(0,0,0,0.015)_4px)]` (woven fabric texture).

### 3) Compass Rose Decoration

Nautical compass rose SVG.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20 opacity-30">
  <g fill="none" stroke="#1a2a4a" stroke-width="0.5">
    <circle cx="50" cy="50" r="40"/>
    <circle cx="50" cy="50" r="25"/>
    <!-- Cardinal points -->
    <path d="M50,10 L55,50 L50,90 L45,50 Z" fill="#1a2a4a" opacity="0.3"/>
    <path d="M10,50 L50,45 L90,50 L50,55 Z" fill="#1a2a4a" opacity="0.3"/>
    <!-- Intercardinal points -->
    <path d="M22,22 L48,48 L78,78 L52,52 Z" fill="#c41e1e" opacity="0.2"/>
    <path d="M78,22 L52,48 L22,78 L48,52 Z" fill="#c41e1e" opacity="0.2"/>
  </g>
  <text x="50" y="8" font-size="6" fill="#1a2a4a" text-anchor="middle" font-weight="bold">N</text>
</svg>
```

### 4) Rope Knot Divider

Textured rope divider.

```html
<div class="flex items-center justify-center gap-2 my-4">
  <div class="h-2 flex-1 bg-[#8a6a3a] rounded-full bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_5px)]"></div>
  <span class="text-[#8a6a3a] text-lg">⚓</span>
  <div class="h-2 flex-1 bg-[#8a6a3a] rounded-full bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_5px)]"></div>
</div>
```

### 5) Signal Flag Pattern

International maritime signal flag color blocks.

- Grid of small rectangles in signal flag colors: red `#c41e1e`, yellow `#ffcc00`, blue `#1a3a8a`, white `#ffffff`, black `#1a1a1a`.

### 6) Nautical Button

Navy button with rope-texture border.

- `bg-[#1a2a4a] text-white font-medium rounded-full px-8 py-3 border-2 border-[#8a6a3a] shadow-[0_3px_6px_rgba(26,42,74,0.2)] hover:bg-[#2a3a5a] transition-colors`.

### 7) Beach Glass Panel

Translucent sea-glass panel.

- `bg-[#5acaf0]/15 backdrop-blur-md border border-[#5acaf0]/30 rounded-2xl p-6 shadow-[0_0_15px_rgba(90,202,240,0.1)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Navy | `#1a2a4a` | Primary, text, dark surfaces |
| Ocean Blue | `#2a5a8a` | Secondary blue |
| Sail White | `#f5f0e6` | Canvas surfaces |
| Lighthouse Red | `#c41e1e` | Accent, stripes |
| Rope Tan | `#8a6a3a` | Divider, borders |
| Brass Gold | `#c4a043` | Compass, accents |
| Beach Aqua | `#5acaf0` | Translucent panels |
| Sand | `#e8dcc0` | Light surfaces |
| Signal Yellow | `#ffcc00` | Flag patterns |

Rules: Navy and white dominate (the maritime palette). Red and rope-tan provide warm accents. The palette should feel like a fresh sea breeze — crisp, clean, and nautical.

## Typography Recommendations

- **Display:** Bebas Neue, Oswald (tall condensed — like ship lettering).
- **Body:** DM Sans, Source Sans Pro (clean readable sans).
- **Labels:** `font-medium uppercase tracking-widest text-sm text-[#1a2a4a]` (like boat registration lettering).
- Typography should feel like it was painted on a boat hull or stamped on a nautical chart.

## Reusable Tailwind Tokens

- Lighthouse stripe: `bg-[repeating-linear-gradient(0deg,#1a2a4a_0px,#1a2a4a_20px,#ffffff_20px,#ffffff_40px)]`.
- Sail canvas: `bg-[#f5f0e6] border border-[#d4c8a8]`.
- Nautical button: `bg-[#1a2a4a] text-white rounded-full border-2 border-[#8a6a3a]`.
- Beach glass: `bg-[#5acaf0]/15 backdrop-blur-md border border-[#5acaf0]/30`.
- Rope divider: `bg-[#8a6a3a] rounded-full bg-[repeating-linear-gradient(...)]`.

## Quality Checklist

- Navy/white/red palette dominates.
- At least one lighthouse stripe pattern element.
- At least one compass rose SVG decoration.
- Sail canvas textured card surfaces present.
- Rope-textured dividers with anchor motifs.
- Beach glass translucent panels used.
- Signal flag color blocks as decorative pattern.
- Typography is clean and nautical.
- The aesthetic reads as maritime / seaside / nautical.
- Everything feels fresh, breezy, and salt-air clean.

## Anti-Patterns

- Warm desert or earth tones (nautical is navy/blue/white).
- Missing compass rose or nautical SVG decorations.
- Missing lighthouse stripe pattern (this is the signature visual element).
- Dark heavy moody atmosphere (coastal is bright and breezy).
- Missing rope/knot textures (these are essential maritime references).
- Sans-serif without tracking (labels need wide tracking for boat-lettering feel).
- Missing sail canvas texture (the fabric texture is key to the aesthetic).
- Missing beach glass translucency (the frosted sea-glass panels add depth).
- Cluttered dense layouts (coastal design is open and airy).
- Bright neon colors (palette is navy, white, red — not neon).
