---
name: soviet-space-program-ui
description: Build Soviet Space Program UI components (space race propaganda, red star motifs, Cyrillic typography, Sputnik graphics, cosmonaut iconography, industrial precision) with bold red/white/black palette, heroic industrial design, and Cold War space competition aesthetic. Trigger this skill when the user asks for Soviet space program, space race design, Sputsk, cosmonaut UI, Cold War space, or CCCP aerospace interfaces.
---

# Soviet Space Program UI

Use this skill to design and implement heroic, industrial interfaces inspired by the Soviet space program: bold propaganda poster aesthetics, red star rocket motifs, Cyrillic typography accents, Sputnik orbital graphics, cosmonaut iconography, and the Cold War competition that launched humanity into space.

## Core Material Recipes

### 1) Propaganda Poster Surface

Bold red panel with star motif.

- `bg-[#c41e1e] text-white p-8` with large red star SVG accent.
- Bold typography: `font-bold text-3xl uppercase tracking-tight`.

### 2) Rocket/Sputnik Graphic

Simple geometric rocket or satellite SVG.

```html
<svg viewBox="0 0 60 100" class="w-12 h-20">
  <!-- Rocket body -->
  <path d="M30,5 Q25,15 25,40 L25,80 L35,80 L35,40 Q35,15 30,5 Z" fill="#e0e0e0" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Fins -->
  <path d="M25,70 L15,85 L25,80 Z" fill="#c41e1e"/>
  <path d="M35,70 L45,85 L35,80 Z" fill="#c41e1e"/>
  <!-- Window -->
  <circle cx="30" cy="35" r="4" fill="#1a3a8a"/>
  <!-- Red star -->
  <path d="M30,50 L32,55 L37,55 L33,58 L35,63 L30,60 L25,63 L27,58 L23,55 L28,55 Z" fill="#c41e1e"/>
</svg>
```

### 3) Cyrillic Label

Russian text label accent.

- `font-mono font-bold uppercase tracking-widest text-[#c41e1e] text-xs` showing "CCCP" or "СПУТНИК" or "КОСМОНАВТ".

### 4) Industrial Steel Surface

Cold War industrial control panel.

- `bg-gradient-to-br from-[#4a4a4a] via-[#3a3a3a] to-[#2a2a2a] border-2 border-[#5a5a5a] p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.

### 5) Cosmonaut Button

Red and white star-emblazoned button.

- `bg-[#c41e1e] text-white font-bold uppercase tracking-wider px-8 py-3 border-2 border-white hover:bg-[#a01515] transition-colors`.

### 6) Orbital Path Decoration

Dashed orbital ellipse with satellite.

```html
<svg viewBox="0 0 200 100" class="w-full">
  <ellipse cx="100" cy="50" rx="90" ry="35" fill="none" stroke="#c41e1e" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
  <circle cx="180" cy="40" r="4" fill="#c41e1e"/>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Soviet Red | `#c41e1e` | Primary, propaganda, stars |
| Pure White | `#ffffff` | Contrast, text on red |
| Industrial Gray | `#3a3a3a` | Control panels |
| Steel | `#5a5a5a` | Borders, equipment |
| Space Black | `#0a0a0a` | Deep space |
| Orbit Blue | `#1a3a8a` | Accent, portholes |

Rules: Red and white dominate (propaganda poster palette). Industrial gray for equipment surfaces. The aesthetic is bold, heroic, and uncompromisingly Soviet.

## Typography Recommendations

- **Display:** Oswald, Bebas Neue (bold condensed, propaganda poster style).
- **Cyrillic:** Any font that supports Cyrillic for Russian text accents.
- **Body:** Roboto (has Cyrillic support, industrial feel).
- **Labels:** `font-bold uppercase tracking-widest text-sm`.

## Reusable Tailwind Tokens

- Propaganda panel: `bg-[#c41e1e] text-white`.
- Industrial panel: `bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] border-2 border-[#5a5a5a]`.
- Cosmonaut button: `bg-[#c41e1e] text-white font-bold uppercase border-2 border-white`.
- Orbital path: SVG dashed ellipse `stroke="#c41e1e" stroke-dasharray="4 4"`.

## Quality Checklist

- At least one red star or rocket SVG motif.
- Bold red/white propaganda poster palette.
- At least one Cyrillic text accent (CCCP, СПУТНИК).
- Industrial steel/gray control panel surfaces.
- Orbital path decoration present.
- Typography is bold condensed sans-serif.
- The aesthetic reads as Soviet space program / Cold War space race.
- Everything feels heroic, industrial, and ideologically charged.

## Anti-Patterns

- Muted or soft colors (Soviet aesthetic is bold red and stark white).
- Missing rocket/star iconography (these are essential space program symbols).
- Missing Cyrillic text accents (Russian labels add authenticity).
- Modern corporate design (this is state propaganda poster energy).
- Curved elegant shapes (the aesthetic is industrial and geometric).
- Light pastel palettes (palette is red/white/gray/black).
- Missing industrial control panel surfaces.
- Decorative flourish (Soviet design is bold and functional).
