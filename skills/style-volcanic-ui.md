---
name: volcanic-ui
description: Build volcanic UI components (dark lava surfaces, magma glow, obsidian glass, igneous rock textures, fire-emitting cracks, sulfurous yellow accents) with molten orange edges, cracked stone surfaces, and the primal power of volcanic eruption. Trigger this skill when the user asks for volcanic design, lava UI, magma aesthetic, obsidian interface, eruption design, or igneous rock interfaces.
---

# Volcanic UI

Use this skill to design and implement dark, powerful interfaces inspired by active volcanoes: black igneous rock surfaces, glowing magma cracks, obsidian glass panels, sulfurous yellow accents, and the primal, dangerous beauty of molten earth.

## Non-Negotiable Foundations

- Volcanic UI is about HEAT within DARKNESS: surfaces are black/charcoal igneous rock, but glowing magma cracks emit orange-red light from within.
- The signature visual is the magma crack: dark surface with bright glowing lines/crevices suggesting molten lava beneath.
- Obsidian (volcanic glass) provides the translucent panel material: dark, shiny, reflective.
- Colors are limited: black, charcoal, dark gray, with molten orange-red and sulfurous yellow as the only light sources.
- Textures are rough and geological: pumice, basalt, obsidian, and ash.
- The aesthetic communicates danger, power, and primal geological force.

## Core Material Recipes

### 1) Basalt Surface

Dark volcanic rock background.

- `bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#080808]`.
- Texture: `bg-[radial-gradient(rgba(40,40,40,0.4)_2px,transparent_2px)] bg-[size:12px_12px]` (pumice-like porous texture).

### 2) Magma Crack

The signature element: glowing crack in dark surface.

```css
.magma-crack {
  background: #1a1a1a;
  position: relative;
}
.magma-crack::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* Irregular glowing crack lines */
  filter: drop-shadow(0 0 4px rgba(255,100,0,0.6));
}
```

Simpler approach: `shadow-[inset_0_0_20px_rgba(255,80,0,0.15)]` combined with SVG crack paths `stroke-[#ff6600]` with `[filter:drop-shadow(0_0_3px_rgba(255,100,0,0.6))]`.

### 3) Obsidian Panel

Translucent dark volcanic glass.

- `bg-black/60 backdrop-blur-xl border border-[#3a3a3a] rounded-2xl shadow-[0_0_20px_rgba(255,80,0,0.08),inset_0_1px_0_rgba(80,80,80,0.3)] p-6`.

### 4) Magma Glow Button

Button that glows with molten energy.

- `bg-gradient-to-b from-[#cc3300] to-[#660000] text-[#ffaa00] font-bold uppercase tracking-wider px-8 py-3 border border-[#ff6600]/50 shadow-[0_0_15px_rgba(255,100,0,0.4),inset_0_1px_0_rgba(255,150,0,0.3)] hover:shadow-[0_0_25px_rgba(255,100,0,0.6)] transition-all`.

### 5) Sulfur Accent

Bright yellow-green sulfurous highlight.

- `text-[#ddcc00]` for data values or warnings.
- Glow: `[text-shadow:0_0_5px_rgba(221,204,0,0.5)]`.

### 6) Ember Particle Animation

Slowly rising ember particles (like sparks from lava).

```css
@keyframes ember-rise {
  0% { transform: translateY(100vh) translateX(0); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-10vh) translateX(20px); opacity: 0; }
}
.ember {
  position: fixed;
  width: 3px;
  height: 3px;
  background: #ff6600;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255,100,0,0.8);
  animation: ember-rise 8s linear infinite;
  pointer-events: none;
}
```

### 7) Ash/Charcoal Divider

Dark divider with subtle ember glow.

- `h-px bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Basalt Black | `#1a1a1a` | Primary surface |
| Deep Charcoal | `#0f0f0f` | Darker variation |
| Ash Gray | `#3a3a3a` | Borders, highlights |
| Magma Orange | `#ff6600` | Primary glow accent |
| Lava Red | `#cc3300` | Deep glow |
| Ember Yellow | `#ffaa00` | Text glow |
| Sulfur Yellow | `#ddcc00` | Data/warning accent |
| Obsidian | `#0a0a0a` | Deepest black |

Rules: Black and charcoal dominate 90% of surfaces. Magma orange and sulfur yellow are the ONLY warm colors, appearing as glow, cracks, and accents. Everything should feel HOT beneath DARK.

## Typography Recommendations

- **Display:** Oswald, Bebas Neue (condensed, heavy, geological weight).
- **Body:** Inter, DM Sans (clean readable sans).
- **Data:** JetBrains Mono (temperature readings, seismic data).
- **Labels:** `font-bold uppercase tracking-widest text-sm text-[#ff6600]`.

## Interaction Rules

- Default: dark, smoldering, powerful.
- Hover: magma glow intensifies.
  - `hover:shadow-[0_0_25px_rgba(255,100,0,0.6)] transition-all duration-300`.
- Active: `active:shadow-[0_0_10px_rgba(255,100,0,0.3)]` (glow reduces — pressed).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ff6600]/50`.
- Transitions: `transition-all duration-300` (like lava cooling/heating).

## Reusable Tailwind Tokens

- Basalt bg: `bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#080808]`.
- Obsidian panel: `bg-black/60 backdrop-blur-xl border border-[#3a3a3a] shadow-[0_0_20px_rgba(255,80,0,0.08)]`.
- Magma button: `bg-gradient-to-b from-[#cc3300] to-[#660000] text-[#ffaa00] border border-[#ff6600]/50 shadow-[0_0_15px_rgba(255,100,0,0.4)]`.
- Magma glow shadow: `shadow-[0_0_15px_rgba(255,100,0,0.4)]`.
- Sulfur text: `text-[#ddcc00] [text-shadow:0_0_5px_rgba(221,204,0,0.5)]`.

## Quality Checklist

- Background is dark basalt/charcoal (not pure black — needs texture).
- At least one magma crack or glow element present.
- Obsidian (translucent dark glass) panels used for content.
- Color palette is black + orange-red + sulfur yellow only.
- Magma glow appears on interactive elements (buttons, borders).
- Ember particle animation present (ambient rising sparks).
- Surfaces feel rough and geological (pumice/basalt texture).
- The aesthetic reads as an active volcanic environment.
- Magma glow uses layered shadows (inner + outer glow).
- Everything communicates HEAT and POWER within DARKNESS.

## Anti-Patterns

- Bright or light backgrounds (volcanic is dark basalt).
- Cool color palettes (no blues or greens — only magma orange/red).
- Missing the magma glow (the crack/glow is the signature element).
- Smooth flat surfaces (need rough geological texture).
- Pastel or muted tones (palette is dark + intense glow).
- Missing obsidian panels (dark translucent glass is essential).
- Light, airy layouts (volcanic is heavy, dark, and compressed).
- Sans-serif decorative fonts without weight (need heavy condensed display).
- Missing ember particles (these add the living-fire atmosphere).
- Clean modern aesthetic (volcanic is primal and geological).

## Accessibility Considerations

- Dark backgrounds with orange/yellow text provide good contrast (verify WCAG AA — `#ffaa00` on `#1a1a1a` passes for large text).
- Focus states: `focus:ring-2 focus:ring-[#ff6600]/50` (magma orange ring on basalt).
- Ember particles must be `pointer-events-none` and respect `prefers-reduced-motion`.
- Magma glow should not blur text edges.
- Obsidian translucent panels must maintain text contrast.
- Touch targets must be adequate despite dark heavy styling.
