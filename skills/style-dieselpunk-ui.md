---
name: dieselpunk-ui
description: Build dieselpunk UI components (interwar/WWII-era diesel technology, grit, military precision, riveted steel, oil-stained machinery, propaganda posters) with steel grays, military olive, warning yellow, and the industrial aesthetic of the 1920s-1940s. Trigger this skill when the user asks for dieselpunk, WWII sci-fi, interwar industrial design, diesel-era UI, or grit-tier military-tech interfaces.
---

# Dieselpunk UI

Use this skill to design and implement gritty, industrial interfaces inspired by the interwar and WWII era: riveted steel panels, diesel engines, military precision, oil-stained machinery, warning stripes, and the utilitarian aesthetic of technology built for war.

## Non-Negotiable Foundations

- Dieselpunk covers the period roughly 1920s-1950s: diesel engines, riveted steel, military hardware, and wartime industrial design.
- Materials are heavy and industrial: steel, iron, brass fittings, rubber, canvas, and oil-stained metal.
- Colors are gritty and utilitarian: steel gray, military olive drab, warning yellow, rust orange, and black.
- The aesthetic is precision-engineered but worn — everything looks like it has been used hard and maintained through a war.
- Typography is industrial and stencil-inspired: heavy slab serifs or condensed sans-serifs that look like they were stenciled onto crates.
- Unlike steampunk (Victorian elegance) or atompunk (optimistic future), dieselpunk is GRITTY, PRACTICAL, and MILITARY.

## Core Material Recipes

### 1) Riveted Steel Panel

The foundational dieselpunk surface: heavy steel with visible rivets.

- Background gradient: `bg-gradient-to-br from-[#5a5a5a] via-[#4a4a4a] to-[#3a3a3a]`.
- Beveled edges: `border-2 border-t-[#6a6a6a] border-b-[#2a2a2a]`.
- Inner shadow: `shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`.
- Rivets: grid of small circles: pseudo-elements or background pattern.
  - `bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] bg-[size:24px_24px]` faint rivet grid.
  - Or explicit: `w-2 h-2 rounded-full bg-[#6a6a6a] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.5)]` at corners.

### 2) Military Stencil Button

Heavy button with stenciled military lettering.

- `bg-[#4a5a3a] text-[#d4d4a0] font-stencil font-bold uppercase tracking-widest text-sm px-8 py-3 border-2 border-[#3a4a2a] shadow-[0_3px_0_#2a3a1a,inset_0_1px_0_rgba(255,255,255,0.1)] active:translate-y-[3px] active:shadow-none transition-all`.

### 3) Warning Stripe Accent

Hazard-warning yellow/black stripes for dangerous or critical elements.

- `bg-[repeating-linear-gradient(45deg,#facc15,#facc15_10px,#1a1a1a_10px,#1a1a1a_20px)] h-3`.

### 4) Oil Gauge / Pressure Meter

Industrial analog gauge with heavy bezel.

- Bezel: `w-24 h-24 rounded-full bg-gradient-to-br from-[#5a5a5a] to-[#3a3a3a] border-4 border-[#2a2a2a]`.
- Face: `rounded-full bg-[#1a2a1a]` (dark military green face).
- Needle: `w-0.5 h-10 bg-[#facc15] origin-bottom` (warning yellow needle).
- Ticks: small lines around perimeter.
- Glass reflection: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]`.

### 5) Brushed Metal Surface

Textured metal with directional brush marks.

- `bg-[#8a8a8a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)]`.

### 6) Military Tag / Crate Label

Stenciled label reminiscent of military shipping crates.

- `bg-[#d4c4a0] text-[#3a2a0a] font-mono font-bold uppercase text-xs tracking-widest border border-[#a0987a] px-4 py-2`.
- Alternative: stamped on steel: `bg-[#3a3a3a] text-[#facc15] font-bold uppercase text-xs`.

### 7) Heavy Lever Switch

Industrial toggle/lever control.

- Base plate: `w-20 h-10 bg-gradient-to-b from-[#5a5a5a] to-[#3a3a3a] border-2 border-[#2a2a2a]`.
- Lever: `w-3 h-12 bg-gradient-to-b from-[#8a8a8a] to-[#4a4a4a] rounded-sm mx-auto`.
- Label: `font-mono text-[10px] uppercase text-[#a0a0a0]`.

## Color Palette System

### Core Dieselpunk Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Steel Gray | `#5a5a5a` | Brushed steel | Primary surface |
| Dark Steel | `#3a3a3a` | Heavy iron | Bottom edges, shadows |
| Light Steel | `#8a8a8a` | Polished steel | Highlights, rivets |
| Military Olive | `#4a5a3a` | OD green | Military surfaces, buttons |
| Warning Yellow | `#facc15` | Hazard paint | Gauges, warnings, critical |
| Rust Orange | `#b8651a` | Oxidized iron | Accents, weathering |
| Black | `#1a1a1a` | Iron/coal | Deep shadows, text on light |
| Canvas | `#c4b896` | Military canvas | Light surfaces, labels |
| Brass Fitting | `#8a6a2a` | Aged brass | Small hardware accents |

Rules: Steel grays and military olive dominate. Warning yellow is the primary accent for critical elements. Everything looks worn, oiled, and functional. No bright colors or pastels.

## Typography Recommendations

Dieselpunk typography is industrial, stenciled, and heavy:

- **Display headings:** Oswald, Bebas Neue, orStencil (condensed military stencil type).
- **Slab serif:** Roboto Slab, Aleo, or Arvo (industrial slab serifs).
- **Monospace:** JetBrains Mono, IBM Plex Mono (technical data, gauges).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (military stencil style).
- Avoid elegant serif fonts. Dieselpunk is industrial and heavy.

## Component Architecture Pattern

1. Dark steel or military olive background.
2. Riveted steel panels (primary content surfaces).
3. Military stencil typography for headings and labels.
4. Warning stripe accents (yellow/black hazard stripes).
5. Oil gauges and pressure meters for data display.
6. Heavy lever switches and mechanical buttons.
7. Brushed metal surfaces and oil-stained textures.
8. Crate label tags for metadata and categorization.

## Interaction Rules

- Default state: heavy, industrial, military-grade.
- Hover: metal brightens slightly, gauge needle twitches.
- Active: heavy mechanical press (`active:translate-y-[3px]`).
- Focus: warning yellow ring `focus:outline-none focus:ring-2 focus:ring-[#facc15]`.
- Transitions: `transition-all duration-100` (mechanical, instant, military precision).
- No gentle or playful animations. Everything feels like heavy machinery.

## Reusable Tailwind Tokens

- Steel panel: `bg-gradient-to-br from-[#5a5a5a] via-[#4a4a4a] to-[#3a3a3a] border-2 border-t-[#6a6a6a] border-b-[#2a2a2a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`
- Military button: `bg-[#4a5a3a] text-[#d4d4a0] font-bold uppercase tracking-widest px-8 py-3 border-2 border-[#3a4a2a] shadow-[0_3px_0_#2a3a1a]`
- Warning stripe: `bg-[repeating-linear-gradient(45deg,#facc15,#facc15_10px,#1a1a1a_10px,#1a1a1a_20px)]`
- Brushed metal: `bg-[#8a8a8a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)]`
- Crate label: `bg-[#d4c4a0] text-[#3a2a0a] font-mono font-bold uppercase text-xs tracking-widest border border-[#a0987a]`
- Gauge bezel: `w-24 h-24 rounded-full bg-gradient-to-br from-[#5a5a5a] to-[#3a3a3a] border-4 border-[#2a2a2a]`

## Quality Checklist (must pass)

- Surfaces use steel/metal gradients with rivets and beveled edges.
- Color palette is gritty (steel gray, military olive, warning yellow).
- At least one warning stripe (yellow/black hazard pattern).
- Typography is industrial stencil or slab serif.
- At least one analog gauge or meter for data display.
- Military stencil labels present.
- Everything looks worn, heavy, and functional (not pristine).
- Shadows are heavy and industrial.
- The aesthetic reads as WWII-era military-industrial technology.
- No elegant, decorative, or playful elements.

## Anti-Patterns

- Elegant Victorian ornamentation (that is steampunk, not dieselpunk).
- Optimistic space-age curves (that is atompunk).
- Bright cheerful colors (dieselpunk is gritty and utilitarian).
- Lightweight shadows (everything has heavy physical weight).
- Missing rivets or mechanical fasteners (industrial panels require them).
- Modern minimalist typography (dieselpunk is stencil and slab serif).
- Smooth, frictionless interactions (everything feels mechanical and heavy).
- Pristine surfaces (dieselpunk is worn, oiled, and battle-scarred).
- Pastel or warm color palettes (dieselpunk is cold steel and military).
- Missing warning/hazard elements (yellow-black stripes are essential).

## Accessibility Considerations

- Steel gray with light text provides good contrast (verify WCAG AA).
- Military olive (`#4a5a3a`) with light text (`#d4d4a0`) provides adequate contrast.
- Warning yellow (`#facc15`) on dark backgrounds is high-visibility.
- Focus states: `focus:ring-2 focus:ring-[#facc15]` (bright yellow, visible on steel).
- Gauge values need `aria-valuenow` and `aria-label` for screen readers.
- Warning stripes must not be the sole indicator — include text labels.
- Heavy mechanical animations must respect `prefers-reduced-motion`.
- Touch targets must be adequate despite industrial styling.
