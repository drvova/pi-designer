---
name: arctic-ui
description: Build arctic UI components (icy frozen surfaces, crystalline white-blue palette, frost textures, aurora borealis accents, glacial depth, polar cold) with ice-crystal patterns, cool gradients, and the stark pristine beauty of frozen landscapes. Trigger this skill when the user asks for arctic design, ice UI, frozen aesthetic, polar design, glacial interface, frost texture, or cold crystalline interfaces.
---

# Arctic UI

Use this skill to design and implementation cold, pristine interfaces inspired by Arctic landscapes: icy white-blue gradients, frost texture overlays, crystalline surfaces, aurora borealis accent glows, and the stark, luminous beauty of frozen environments.

## Non-Negotiable Foundations

- Arctic UI is COLD: every surface, color, and texture should communicate freezing temperature and crystalline purity.
- Colors are icy: white, pale blue, glacial cyan, frost gray, and deep arctic navy. No warm tones whatsoever.
- Frost and ice crystal textures are essential: surfaces look like frozen glass or crystallized water.
- Aurora borealis provides the only color variation: subtle green/purple/teal glows in the background sky.
- Surfaces have a crystalline quality: sharp light reflections, prismatic edges, and glass-like transparency.
- The aesthetic is pristine, vast, and slightly alien — the frozen emptiness of polar regions.

## Core Material Recipes

### 1) Glacial Background

Icy gradient backdrop.

- `bg-gradient-to-b from-[#e0f0ff] via-[#c0e0f5] to-[#a0d0ee]` (sky-to-ice gradient).
- Frost texture: `bg-[radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px]`.
- Aurora overlay: `bg-[linear-gradient(to_bottom,rgba(0,255,160,0.05)_0%,rgba(138,92,246,0.05)_40%,transparent_70%)]`.

### 2) Ice Crystal Surface

Translucent panel with frost-like crystalline texture.

- `bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_4px_16px_rgba(160,208,238,0.2)] p-6`.
- Frost edge: `before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] before:bg-[size:8px_8px] before:pointer-events-none`.

### 3) Ice Button

Crystalline button with cool glow.

- `bg-gradient-to-b from-[#e0f0ff] to-[#a0c0ee] text-[#1a3a5a] font-medium rounded-full px-8 py-3 border border-white shadow-[0_2px_8px_rgba(160,208,238,0.4),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_4px_16px_rgba(160,208,238,0.5)] transition-all`.

### 4) Aurora Glow Accent

Northern lights colored glow behind key elements.

- `shadow-[0_0_30px_rgba(0,255,160,0.15),0_0_60px_rgba(138,92,246,0.1)]` (green + purple aurora glow).

### 5) Snowflake Decoration

Intricate snowflake SVG accent.

```html
<svg viewBox="0 0 40 40" class="w-10 h-10 text-[#a0c0ee] opacity-40">
  <g fill="none" stroke="currentColor" stroke-width="0.5">
    <line x1="20" y1="2" x2="20" y2="38"/>
    <line x1="2" y1="20" x2="38" y2="20"/>
    <line x1="6" y1="6" x2="34" y2="34"/>
    <line x1="34" y1="6" x2="6" y2="34"/>
    <path d="M16,6 L20,2 L24,6 M16,34 L20,38 L24,34 M6,16 L2,20 L6,24 M34,16 L38,20 L34,24"/>
  </g>
</svg>
```

### 6) Frozen Input

Icy translucent input.

- `bg-white/40 backdrop-blur-sm border border-white/60 rounded-full px-6 py-3 outline-none focus:border-[#a0d0ee] focus:ring-2 focus:ring-[#a0d0ee]/20 transition-all placeholder:text-[#80a0c0]`.

### 7) Glacier Divider

Crystalline ice-shard divider.

```html
<svg viewBox="0 0 200 8" class="w-full text-[#a0c0ee] opacity-30">
  <path fill="currentColor" d="M0,4 L20,0 L40,4 L60,1 L80,4 L100,0 L120,4 L140,2 L160,4 L180,0 L200,4 L200,8 L0,8 Z"/>
</svg>
```

## Color Palette System

### Core Arctic Palette

| Color | Hex | Role |
|---|---|---|
| Ice White | `#f0f8ff` | Lightest surface |
| Pale Blue | `#e0f0ff` | Primary background |
| Sky Blue | `#a0d0ee` | Secondary accent |
| Glacial Cyan | `#80c0e0` | Interactive accent |
| Frost Gray | `#c0d0e0` | Muted surfaces |
| Arctic Navy | `#1a3a5a` | Primary text |
| Deep Blue | `#0a2a4a` | Deep contrast |
| Aurora Green | `#00ffa0` | Glow accent (sparingly) |
| Aurora Purple | `#8a5cf5` | Glow accent (sparingly) |
| Ice Crystal | `#d0e8f5` | Borders, highlights |

Rules: Icy whites and pale blues dominate. The only non-blue tones are aurora glows (green/purple) which appear as subtle background effects. Everything should feel cold, clean, and crystalline.

## Typography Recommendations

- **Display:** Outfit, Sora, or Inter (clean, geometric, cold sans-serif).
- **Body:** Inter, DM Sans (clean, readable, modern).
- **Data:** JetBrains Mono (for temperature readings, coordinates).
- **Labels:** `font-medium text-sm tracking-wide` (clean, without warmth).
- Typography should feel COLD and precise — like instructions printed on scientific equipment.

## Interaction Rules

- Default: cold, pristine, crystalline.
- Hover: frost glow intensifies, surface brightens.
  - `hover:shadow-[0_4px_16px_rgba(160,208,238,0.5)] hover:bg-white/70 transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#80c0e0]/40`.
- Transitions: `transition-all duration-300 ease-out` (smooth, like ice melting/refreezing).

## Reusable Tailwind Tokens

- Glacial bg: `bg-gradient-to-b from-[#e0f0ff] via-[#c0e0f5] to-[#a0d0ee]`.
- Ice panel: `bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_4px_16px_rgba(160,208,238,0.2)]`.
- Ice button: `bg-gradient-to-b from-[#e0f0ff] to-[#a0c0ee] text-[#1a3a5a] border border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]`.
- Aurora glow: `shadow-[0_0_30px_rgba(0,255,160,0.15),0_0_60px_rgba(138,92,246,0.1)]`.
- Frozen input: `bg-white/40 backdrop-blur-sm border border-white/60 rounded-full focus:ring-[#a0d0ee]/20`.

## Quality Checklist

- Background is icy white-blue gradient.
- Frost texture or ice crystal pattern present.
- At least one aurora glow effect (green/purple subtle glow).
- Color palette is exclusively cold (white, blue, cyan — no warm tones).
- At least one snowflake decoration.
- Translucent crystalline panels with backdrop-blur.
- Buttons have icy gradient with white inner highlight.
- Typography is clean geometric sans (cold and precise).
- The aesthetic reads as an Arctic/glacial/frozen environment.
- Everything feels COLD, clean, and pristine.

## Anti-Patterns

- Warm color tones of any kind (arctic is exclusively cold).
- Earth tones, browns, or oranges (these break the frozen palette).
- Missing frost or ice texture (crystalline surfaces are essential).
- Heavy opaque panels (use translucent crystalline surfaces).
- Missing aurora glow (this is the signature atmospheric accent).
- Dark backgrounds (arctic is bright and reflective — ice and snow).
- Warm serif typography (arctic uses cold geometric sans).
- Missing snowflake decorations (these are the signature motif).
- Rounded organic shapes without crystalline quality (everything should feel like ice).
- Dense cluttered layouts (arctic is vast, open, and pristine).

## Accessibility Considerations

- Pale icy backgrounds with navy text provide excellent contrast (WCAG AAA).
- Translucent panels must maintain text contrast — verify at all background states.
- Focus states: `focus:ring-2 focus:ring-[#80c0e0]/40` (glacial cyan ring).
- Frost texture overlays must not reduce text contrast (keep at low opacity).
- Snowflake and aurora SVGs must be `aria-hidden="true"`.
- The bright icy palette is naturally accessible but may cause glare on some screens.
- Touch targets must be adequate despite crystalline border styling.
