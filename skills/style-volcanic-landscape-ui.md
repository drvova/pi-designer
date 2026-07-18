---
name: volcanic-landscape-ui
description: Build volcanic landscape UI components (lava flow, obsidian black, sulfur vent, ash gray sky, molten glow, cooled basalt, thermal pool) with volcanic terrain textures, molten lava accents, and the raw geological power of volcanic landscapes. Trigger this skill when the user asks for volcanic landscape design, lava flow UI, obsidian landscape, sulfur vent interface, ash sky aesthetic, basalt terrain components, thermal pool design, or geothermal landscape interfaces.
---

# Volcanic Landscape UI

Use this skill to design and implement sweeping volcanic terrain interfaces: flowing lava gradients that cascade across surfaces, obsidian black glass with subtle reflections, sulfur vent yellow accents, ash-gray hazy skies, molten glow underlighting, cooled basalt hexagonal patterns, and the vivid mineral-colored thermal pools that mark geothermal activity in volcanic terrain.

## Non-Negotiable Foundations

- Volcanic Landscape UI is about FLOW within STRUCTURE: the landscape tells a story of molten material cooling into geometric basalt, of ash settling into haze, of thermal pools glowing with dissolved minerals.
- The signature visual is the lava flow gradient: a flowing red-orange-yellow pattern that moves across surfaces like rivers of molten rock carving through dark terrain.
- Obsidian provides the reflective black ground: glossy, dark, with subtle highlights that suggest glass-like volcanic stone.
- Ash sky creates the atmospheric canopy: a gray-brown haze gradient that diffuses light across the entire interface like volcanic smog.
- Colors span the full volcanic spectrum: deep obsidian black, lava red-orange-yellow, sulfur vent yellow, ash gray-brown, basalt dark charcoal, and the surprisingly vivid teal-blue-green of mineral-rich thermal pools.
- Cooled basalt introduces hexagonal geometric texture: the natural columnar jointing pattern of basalt formations rendered as repeating hex shapes.
- The aesthetic communicates geological time, elemental force, and the beauty of landscapes shaped by eruption, flow, cooling, and erosion.

## Core Material Recipes

### 1) Lava Flow Gradient

The flowing molten river pattern that crosses dark terrain surfaces.

- Background: `bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00]`.
- Overlay on dark surface: `bg-[linear-gradient(135deg,#e03030_0%,#ff6600_40%,#ffcc00_70%,#ff6600_85%,#e03030_100%)] opacity-80`.
- Animated flow: `animate-[lava-flow_12s_ease-in-out_infinite_alternate]`.
- Container: `relative overflow-hidden rounded-2xl` with `bg-[#0a0a0a]` base and the gradient applied via a `::before` pseudo-element or child div at `opacity-60 mix-blend-screen`.

```css
@keyframes lava-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.lava-flow-bg {
  background-size: 200% 200%;
  animation: lava-flow 12s ease-in-out infinite alternate;
}
```

Tailwind equivalent: `bg-[length:200%_200%] animate-[lava-flow_12s_ease-in-out_infinite_alternate]`.

### 2) Obsidian Surface

Glossy black volcanic glass with subtle reflective highlights.

- `bg-[#0a0a0a] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_60%,transparent_100%)] border border-white/5 rounded-2xl`.
- Reflection highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.5)]`.
- Glossy sheen: add `after:absolute after:inset-0 after:bg-[linear-gradient(165deg,rgba(255,255,255,0.04)_0%,transparent_30%)] after:rounded-2xl after:pointer-events-none`.
- Full panel: `bg-[#0a0a0a] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_60%,transparent_100%)] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.5)] rounded-2xl p-6`.

### 3) Sulfur Vent Accent

Bright sulfurous yellow that marks gas vents and active fumaroles.

- Text: `text-[#e0c020]`.
- Glow: `[text-shadow:0_0_6px_rgba(224,192,32,0.5)]`.
- Vent glow on surface: `shadow-[0_0_30px_rgba(224,192,32,0.15)]`.
- Sulfur border: `border-[#e0c020]/40`.
- Sulfur badge: `bg-[#e0c020]/10 text-[#e0c020] border border-[#e0c020]/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider`.

### 4) Ash Sky Gradient

The atmospheric haze canopy that blankets the volcanic landscape.

- Top gradient: `bg-gradient-to-b from-[#6a6a5a] via-[#4a4a3a] to-[#2a2a2a]`.
- Full-screen atmospheric: `bg-gradient-to-b from-[#7a7a6a] via-[#5a5a4a] via-[#3a3a2a] to-[#0a0a0a]`.
- Ash haze overlay: `bg-[#6a6a5a]/10 backdrop-blur-sm` layered over content to simulate settling ash.
- Subtle particle texture: `bg-[radial-gradient(rgba(106,106,90,0.15)_1px,transparent_1px)] bg-[size:8px_8px]` (fine ash grain).

### 5) Molten Glow Underlighting

Warm underglow emanating from below panels, suggesting hidden lava beneath.

- Panel with underglow: `shadow-[0_4px_30px_rgba(255,102,0,0.12),0_0_60px_rgba(224,48,48,0.06)]`.
- Bottom-edge glow: `shadow-[inset_0_-2px_0_rgba(255,102,0,0.3),0_4px_20px_rgba(255,102,0,0.15)]`.
- Button underglow: `shadow-[0_4px_15px_rgba(255,102,0,0.3),0_0_40px_rgba(224,48,48,0.1)] hover:shadow-[0_6px_25px_rgba(255,102,0,0.5),0_0_60px_rgba(224,48,48,0.15)]`.
- Ground-level ambient: a fixed bottom gradient `bg-gradient-to-t from-[#e03030]/8 via-[#ff6600]/4 to-transparent h-32` at the viewport bottom.

### 6) Cooled Basalt Hexagonal Pattern

The geometric columnar jointing texture of cooled basalt formations.

```css
.basalt-hex {
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232a2a2a' fill-opacity='0.4'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

Tailwind: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232a2a2a' fill-opacity='0.35'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`.
- Overlay on dark surface: combine with `bg-[#0a0a0a]` base.
- Subtle variant: reduce opacity with `opacity-30`.
- Colored variant with basalt glow: `bg-[url("...")] shadow-[inset_0_0_40px_rgba(255,102,0,0.05)]`.

### 7) Thermal Pool Gradient

The vivid mineral-colored pools found in volcanic terrain: blue-green-orange from dissolved sulfur, iron, and silica.

- Full pool surface: `bg-[linear-gradient(135deg,#2a8a7a_0%,#1a6a6a_30%,#3a9a4a_50%,#2a7a6a_70%,#4a8a3a_100%)]`.
- Shallow edge: `bg-gradient-to-r from-[#2a8a7a] via-[#4a9a3a] to-[#ffcc00]/40`.
- Pool with depth shimmer: `bg-[radial-gradient(ellipse_at_center,#2a8a7a_0%,#1a6a5a_50%,#0a3a3a_100%)]`.
- Mineral deposit ring: `border-2 border-[#e0c020]/30 rounded-full` with inner `bg-[radial-gradient(circle,#2a8a7a,#1a5a5a)]`.
- Thermal pool card: `bg-[radial-gradient(ellipse_at_bottom,#2a8a7a,#1a5a5a,#0a0a0a)] border border-[#2a8a7a]/30 rounded-2xl shadow-[0_0_30px_rgba(42,138,122,0.15)]`.

### 8) Lava Flow Divider

A flowing molten divider between content sections.

- `h-1 bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00] rounded-full shadow-[0_0_10px_rgba(255,102,0,0.4)]`.
- Animated: `animate-[lava-flow_8s_ease-in-out_infinite_alternate] bg-[length:200%_100%]`.
- Thin variant: `h-px bg-gradient-to-r from-transparent via-[#ff6600]/40 to-transparent`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Lava Red | `#e03030` | Deep molten glow, danger accents |
| Lava Orange | `#ff6600` | Primary lava flow color, interactive glow |
| Lava Yellow | `#ffcc00` | Hot flow highlights, data emphasis |
| Obsidian Black | `#0a0a0a` | Primary surface, deepest dark |
| Ash Gray | `#6a6a5a` | Atmospheric haze, muted text |
| Sulfur Yellow | `#e0c020` | Vent accents, warnings, badges |
| Basalt Dark | `#2a2a2a` | Secondary surfaces, borders, patterns |
| Thermal Teal | `#2a8a7a` | Thermal pool color, cool contrast accent |

Rules: Obsidian black and basalt dark dominate 80% of surfaces. Lava red-orange-yellow form the molten flow gradient, appearing on flowing elements, glows, dividers, and active states. Sulfur yellow marks fumaroles, vents, and warning states. Ash gray provides the atmospheric haze. Thermal teal is the rare cool accent, reserved exclusively for thermal pool elements and geothermal data. The palette balances extreme heat (lava) with extreme cool (thermal pools) against a dark volcanic ground.

## Typography Recommendations

- **Display:** Oswald, Bebas Neue, Anton (condensed heavy weight — geological mass, eruption force).
- **Body:** Inter, DM Sans, Geist (clean sans-serif for readability against dark textured backgrounds).
- **Data:** JetBrains Mono, Fira Code (geological measurements, temperature readings, flow rates).
- **Labels:** `font-bold uppercase tracking-widest text-xs text-[#ff6600]` for section headers.
- **Sulfur accents:** `text-[#e0c020] font-semibold` for highlighted values.
- **Thermal data:** `text-[#2a8a7a] font-mono` for geothermal readings.
- **Ash text:** `text-[#6a6a5a]` for secondary, atmospheric, or muted content.
- Line height: 1.6 for body text on dark backgrounds (increased from 1.5 for readability).

## Component Architecture Pattern

### Card: Obsidian Landscape Card
```
<div class="bg-[#0a0a0a] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_60%,transparent_100%)] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_30px_rgba(255,102,0,0.08)] rounded-2xl p-6 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('...basalt-hex...')] opacity-20 pointer-events-none" />
  <!-- content over obsidian surface with basalt texture -->
</div>
```

### Card: Lava Flow Card
```
<div class="relative overflow-hidden rounded-2xl bg-[#0a0a0a] p-6 border border-[#ff6600]/10">
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00] shadow-[0_0_10px_rgba(255,102,0,0.4)]" />
  <!-- content with lava flow accent at bottom -->
</div>
```

### Card: Thermal Pool Card
```
<div class="bg-[radial-gradient(ellipse_at_bottom,#2a8a7a_0%,#1a5a5a_40%,#0a0a0a_100%)] border border-[#2a8a7a]/30 rounded-2xl shadow-[0_0_30px_rgba(42,138,122,0.15)] p-6">
  <!-- content over thermal pool gradient -->
</div>
```

### Button: Lava Button
```
<button class="bg-gradient-to-b from-[#e03030] to-[#990000] text-[#ffcc00] font-bold uppercase tracking-wider px-8 py-3 rounded-xl border border-[#ff6600]/50 shadow-[0_4px_15px_rgba(255,102,0,0.3),inset_0_1px_0_rgba(255,150,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,102,0,0.5),inset_0_1px_0_rgba(255,150,0,0.4)] active:shadow-[0_2px_8px_rgba(255,102,0,0.3)] transition-all duration-300">
```

### Button: Thermal Button
```
<button class="bg-gradient-to-b from-[#2a8a7a] to-[#1a5a5a] text-white font-semibold px-6 py-3 rounded-xl border border-[#2a8a7a]/50 shadow-[0_4px_15px_rgba(42,138,122,0.3)] hover:shadow-[0_6px_25px_rgba(42,138,122,0.5)] transition-all duration-300">
```

### Badge: Sulfur Vent Badge
```
<span class="bg-[#e0c020]/10 text-[#e0c020] border border-[#e0c020]/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider [text-shadow:0_0_5px_rgba(224,192,32,0.4)]">
```

### Divider: Lava Flow Divider
```
<div class="h-1 bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00] rounded-full shadow-[0_0_10px_rgba(255,102,0,0.4)]" />
```

## Interaction Rules

- Default: dark obsidian surface, basalt texture visible, no glow.
- Hover: molten glow intensifies from below.
  - `hover:shadow-[0_6px_25px_rgba(255,102,0,0.5),0_0_40px_rgba(224,48,48,0.1)] transition-all duration-300`.
- Active/Pressed: glow contracts inward (lava recedes).
  - `active:shadow-[0_2px_8px_rgba(255,102,0,0.3)]`.
- Focus: visible ring in lava orange.
  - `focus:outline-none focus:ring-2 focus:ring-[#ff6600]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]`.
- Transitions: `transition-all duration-300 ease-out` (like lava advancing and cooling).
- Lava flow animations: `transition-[background-position] duration-12000` for slow flowing gradients.
- Thermal pool hover: `hover:shadow-[0_0_30px_rgba(42,138,122,0.3)]` (pool glow intensifies).
- Page load: elements rise from below with opacity fade-in (`animate-[rise-in_0.6s_ease-out]`).

## Reusable Tailwind Tokens

- Obsidian surface: `bg-[#0a0a0a] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_60%,transparent_100%)] border border-white/5`.
- Basalt texture: `bg-[radial-gradient(rgba(42,42,42,0.3)_1px,transparent_1px)] bg-[size:8px_8px]`.
- Lava gradient: `bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00]`.
- Lava gradient diagonal: `bg-[linear-gradient(135deg,#e03030,#ff6600,#ffcc00)]`.
- Sulfur glow text: `text-[#e0c020] [text-shadow:0_0_6px_rgba(224,192,32,0.5)]`.
- Molten underglow: `shadow-[0_4px_30px_rgba(255,102,0,0.12)]`.
- Thermal pool surface: `bg-[radial-gradient(ellipse_at_bottom,#2a8a7a,#1a5a5a,#0a0a0a)]`.
- Thermal glow: `shadow-[0_0_30px_rgba(42,138,122,0.15)]`.
- Ash haze: `bg-[#6a6a5a]/10 backdrop-blur-sm`.
- Ash text: `text-[#6a6a5a]`.
- Basalt dark surface: `bg-[#2a2a2a]`.
- Lava divider: `h-1 bg-gradient-to-r from-[#e03030] via-[#ff6600] to-[#ffcc00] rounded-full shadow-[0_0_10px_rgba(255,102,0,0.4)]`.

## Quality Checklist

- Background is obsidian black `#0a0a0a` with subtle basalt texture or hexagonal pattern.
- At least one lava flow gradient element present (flowing red-orange-yellow).
- Ash sky gradient visible in header or atmospheric sections.
- Obsidian panels with glossy reflection highlights used for content containers.
- Sulfur yellow accents on data values, badges, or warning states.
- Molten glow underlighting on interactive elements (buttons, cards).
- Cooled basalt hexagonal texture visible on at least one surface.
- Thermal pool gradient appears on at least one accent element (teal-green mineral colors).
- Lava flow divider separates major content sections.
- Lava flow divider between major sections.
- Color palette spans full volcanic spectrum: lava red-orange-yellow, obsidian black, ash gray, sulfur yellow, basalt dark, thermal teal.
- Lava flow animations are slow and organic (12s+ cycles, ease-in-out).
- Interactive elements have layered glow shadows (inner + outer).
- The aesthetic reads as a volcanic landscape: terrain, flow, cooling, mineral pools.
- Dark surfaces maintain text readability with sufficient contrast.
- Thermal pool elements use cool teal-green, clearly distinct from lava warm palette.
- Ember or ash particles present for atmospheric depth.

## Anti-Patterns

- Light or bright backgrounds (volcanic landscape is dark terrain).
- Missing lava flow gradient (the flowing red-orange-yellow is the signature element).
- Cool colors used for lava elements (lava is warm: red, orange, yellow only).
- Warm colors used for thermal pool elements (pools are teal, green, blue — cool spectrum).
- Flat solid surfaces without basalt or obsidian texture (surfaces need geological character).
- Smooth sans-serif only typography without condensed display font for headings.
- Missing ash sky gradient (the atmospheric haze defines the landscape feel).
- Small harsh shadows instead of wide diffused glow (volcanic glow is expansive and soft).
- Clean minimal aesthetic without geological texture (volcanic landscape is textured and raw).
- Missing thermal pool element (the cool teal provides essential contrast to the heat).
- Uniform brightness across the page (volcanic terrain has dark valleys and bright flows).
- Pastel or muted lava colors (lava is intense: saturated red-orange-yellow).
- Missing basalt hexagonal pattern (it provides the signature cooled-rock geometry).
- Fast or snappy transitions (lava flows slowly — transitions should be 300ms+).
- Pure black `#000000` as primary background (use obsidian `#0a0a0a` with texture).

## Accessibility Considerations

- Dark backgrounds with warm text provide strong contrast: `#ffcc00` on `#0a0a0a` passes WCAG AAA for all text sizes; `#ff6600` on `#0a0a0a` passes WCAG AA for large text.
- Ash gray `#6a6a5a` on `#0a0a0a` passes WCAG AA for large text (18px+) — avoid for small body text without additional contrast.
- Sulfur yellow `#e0c020` on `#0a0a0a` passes WCAG AA for normal text and AAA for large text.
- Thermal teal `#2a8a7a` on `#0a0a0a` passes WCAG AA for large text — use `#4aaa9a` for small text contrast.
- Focus states: `focus:ring-2 focus:ring-[#ff6600]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (lava orange ring on obsidian offset).
- Lava flow animations must respect `prefers-reduced-motion: reduce` — disable or slow to static gradient.
- Ember/ash particles must be `pointer-events-none` and respect `prefers-reduced-motion`.
- Molten glow shadows must not blur or obscure text edges (test at all viewport sizes).
- Obsidian translucent panels must maintain minimum 4.5:1 text contrast ratio against background.
- Touch targets: minimum 44x44px despite dark volcanic styling.
- Cooled basalt hexagonal patterns must not create visual noise that impairs readability — use low opacity (20-35%).
- Thermal pool gradients used as card backgrounds must support readable text overlay — add dark scrim if needed: `bg-black/40` over pool gradient.
- Ash haze overlays must not reduce contrast below WCAG AA thresholds for underlying text.
