---
name: cassette-futurism-ui
description: Build cassette futurism UI components (70s-80s sci-fi interfaces, chunky physical bezels, amber phosphor CRTs, toggle switches, analog gauges, tape decks) with Alien/Aliens-inspired control panels, beige housings, and the tactile engineered future that never arrived. Trigger this skill when the user asks for cassette futurism, retro sci-fi UI, Alien movie interface, 70s-80s futuristic design, analog-tech UI, or Nostromo-style control panels.
---

# Cassette Futurism UI

Use this skill to design and implement retro-sci-fi interfaces inspired by 1970s-80s visions of the future: chunky physical bezels, amber/green phosphor CRTs, toggle switches, analog gauges, beige housings, and the tactile, engineered aesthetic of a future where technology still felt physical.

## Non-Negotiable Foundations

- Cassette futurism imagines the future as envisioned in the 1970s-80s: technology is physical, mechanical, and analog. Think Alien (1979), Blade Runner, 2001: A Space Odyssey, and Signalis.
- Every interface element should look like it was engineered, not designed. Buttons depress, switches toggle, screens emit light through phosphor.
- Colors are constrained and utilitarian: beige/cream housings, amber or green phosphor displays, occasional red/green LED indicators, and dark panel backgrounds.
- Imperfection is information: scan lines, noise, slight misalignment, and warm color drift signal that the system is alive and analog.
- Typography respects the display medium: monospaced, dot-matrix, or pixel-snapped letterforms.
- Interactions carry weight: everything clicks, clunks, and feels mechanical. Nothing is frictionless.

## Core Material Recipes

### 1) Beige Housing Panel (the foundational surface)

The signature cassette futurism surface: beige plastic housing with vents and bezels.

- Background gradient: `bg-gradient-to-br from-[#c8b896] via-[#d4c4a0] to-[#a89870]`.
- Beveled edges: `border-2 border-t-[#e0d4b0] border-l-[#e0d4b0] border-b-[#8a7a5a] border-r-[#8a7a5a]`.
- Inner shadow: `shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Vents: repeating horizontal lines at top/bottom: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,#8a7a5a_4px,#8a7a5a_5px)] h-2`.

### 2) Amber Phosphor CRT Screen

The iconic display: dark screen with amber text glow.

- Screen background: `bg-[#1a0e00]` (very dark warm brown-black).
- Curved screen: `[border-radius:30px/40px]` (elliptical, like a CRT tube).
- Text: `text-[#ffb000] [text-shadow:0_0_2px_rgba(255,176,0,0.8),0_0_8px_rgba(255,176,0,0.5),0_0_16px_rgba(255,176,0,0.3)]` (layered phosphor glow).
- Scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]`.
- Vignette: `shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]` (darkening toward edges).
- Specular highlight: pseudo-element top-left: `before:absolute before:top-[5%] before:left-[5%] before:h-[20%] before:w-[30%] before:rounded-full before:bg-gradient-to-br from-white/10 to-transparent`.

### 3) Green Phosphor Variant

Alternative display color.

- Screen: `bg-[#000800]`.
- Text: `text-[#00ff41] [text-shadow:0_0_2px_rgba(0,255,65,0.8),0_0_8px_rgba(0,255,65,0.5)]`.

### 4) Toggle Switch

Physical mechanical toggle switch.

- Base plate: `w-16 h-8 bg-gradient-to-b from-[#8a7a5a] to-[#6a5a3a] border border-[#5a4a2a] rounded`.
- Switch track: `w-12 h-6 mx-auto bg-[#1a1a1a] rounded-sm border border-[#333]`.
- Toggle knob (off): `w-5 h-5 bg-gradient-to-b from-[#d4c4a0] to-[#8a7a5a] rounded-sm translate-x-1 shadow-[0_2px_4px_rgba(0,0,0,0.5)]`.
- Toggle knob (on): `translate-x-6 bg-gradient-to-b from-[#5cd6ff] to-[#3a86ff]` (blue LED indicator).
- Label: `font-mono text-[10px] uppercase tracking-wider text-[#8a7a5a]`.

### 5) Analog Gauge / Meter

Circular gauge with a swinging needle for data display.

- Bezel ring: `w-24 h-24 rounded-full bg-gradient-to-br from-[#d4c4a0] to-[#8a7a5a] border-2 border-[#6a5a3a] p-2`.
- Dial face: `rounded-full bg-[#1a1a1a] flex items-center justify-center`.
- Ticks: small lines around perimeter: SVG or pseudo-elements at regular intervals.
- Needle: absolutely positioned thin line `w-1 h-10 bg-[#ff4444] origin-bottom rotate-[var(--gauge-angle)]`.
- Glow: `shadow-[0_0_10px_rgba(255,176,0,0.2)]`.

### 6) Chunky Mechanical Button

Physical button that depresses into the housing.

- Base: `bg-gradient-to-b from-[#d4c4a0] to-[#a89870] border-2 border-t-[#e0d4b0] border-b-[#6a5a3a] text-[#3a2a0a] font-mono font-bold uppercase text-sm px-6 py-3`.
- Shadow: `shadow-[0_3px_0_#6a5a3a,inset_0_1px_0_#e8dcc0]`.
- Pressed: `active:translate-y-[3px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`.
- LED indicator: small dot `w-2 h-2 rounded-full bg-[#5cd6ff] shadow-[0_0_4px_rgba(92,214,255,0.8)]` when active.

### 7) Tape Reel Decoration

Animated rotating tape reels as decorative elements.

- Reel base: `w-16 h-16 rounded-full border-4 border-[#8a7a5a] bg-[#1a1a1a]`.
- Reel holes: three small circles arranged in a triangle pattern inside.
- Animation: `animate-[spin_8s_linear_infinite]`.

## Color Palette System

### Standard Cassette Futurism Palette

| Color | Hex | Role |
|---|---|---|
| Beige Light | `#d4c4a0` | Housing highlights, top edges |
| Beige | `#c8b896` | Primary housing color |
| Beige Dark | `#a89870` | Bottom edges, shadows |
| Beige Deep | `#8a7a5a` | Borders, labels, vents |
| Amber Phosphor | `#ffb000` | Display text, indicators |
| Green Phosphor | `#00ff41` | Alternative display text |
| LED Red | `#ff4444` | Warning, danger indicators |
| LED Green | `#5cd6ff` / `#00ff00` | Active, power indicators |
| LED Blue | `#5cd6ff` | Info, status indicators |
| Screen Black | `#1a0e00` (amber) or `#000800` (green) | Display backgrounds |
| Panel Dark | `#2a2a2a` | Dark control panels |

Rules: The palette is utilitarian and constrained. Beige housings dominate. Phosphor amber or green is the primary display color. LEDs are the only saturated accents. No vibrant gradients or pastels.

## Typography Recommendations

Cassette futurism typography is engineered and monospaced:

- **Display headings:** Orbitron, Audiowide, or Russo One (techno/geometric sans).
- **Monospace body:** JetBrains Mono, IBM Plex Mono, or Share Tech Mono (cold, architectural monospace).
- **Dot-matrix:** VT323, Press Start 2P (for authentic CRT/pixel displays).
- **Labels:** `font-mono text-xs uppercase tracking-widest` with LED-like color.
- Avoid warm humanist fonts. This aesthetic is cold, engineered, and utilitarian.

## Component Architecture Pattern

1. Beige housing panel (the control unit).
2. CRT display screen (amber or green phosphor).
3. Analog gauges and meters (circular, needle-based).
4. Toggle switches and chunky mechanical buttons.
5. LED indicators (red/green/blue dots with glow).
6. Tape reel decorations (optional, for tape-deck references).
7. Vent details and bezel screws (hardware realism).

## Interaction Rules

- Default state: physical, mechanical, slightly worn.
- Hover: mechanical click feel, LED brightens.
- Active: button depresses fully (`active:translate-y-[3px]`), switch clicks.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffb000]`.
- Transitions: `transition-all duration-100` (mechanical, instant — no smooth easing).
- CRT power-on: optional boot sequence (scanline sweep on load).
- Glitch: occasional random jitter on CRT text (`animate-[glitch_0.3s_steps(2)_infinite]`).

## Reusable Tailwind Tokens

- Beige housing: `bg-gradient-to-br from-[#c8b896] via-[#d4c4a0] to-[#a89870] border-2 border-t-[#e0d4b0] border-b-[#8a7a5a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`
- Amber CRT: `bg-[#1a0e00] text-[#ffb000] [text-shadow:0_0_2px_rgba(255,176,0,0.8),0_0_8px_rgba(255,176,0,0.5)] [border-radius:30px/40px]`
- CRT scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]`
- Mechanical button: `bg-gradient-to-b from-[#d4c4a0] to-[#a89870] border-2 text-[#3a2a0a] font-mono font-bold uppercase px-6 py-3 shadow-[0_3px_0_#6a5a3a] active:translate-y-[3px]`
- LED indicator: `w-2 h-2 rounded-full bg-[#5cd6ff] shadow-[0_0_4px_rgba(92,214,255,0.8)]`
- Vents: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_4px,#8a7a5a_4px,#8a7a5a_5px)] h-2`

## Quality Checklist (must pass)

- Housings use beige/cream gradient with beveled edges.
- Displays use phosphor glow (amber or green) with layered text-shadow.
- CRT scanlines are present on all screen elements.
- Screens have curved border-radius (elliptical, like a CRT tube).
- Vignette darkens screen edges (inset shadow).
- Buttons are chunky and mechanical (translate-y press interaction).
- LED indicators use small glowing dots in red/green/blue.
- Analog gauges with needles are used for data display.
- Typography is monospaced and uppercase for labels.
- The aesthetic reads as a 1970s-80s sci-fi film interface.

## Anti-Patterns

- Smooth, frictionless digital interactions (everything must feel mechanical).
- Bright saturated colors (palette is utilitarian beige + phosphor).
- Modern minimalist typography (needs monospace and dot-matrix fonts).
- Flat screen displays (CRT curvature and scanlines are essential).
- Missing physical hardware details (vents, screws, bezels, LEDs).
- Glassmorphism or transparency (cassette futurism is opaque and physical).
- Pure black backgrounds (screen backgrounds are warm dark tones, `#1a0e00`).
- Soft, gentle animations (interactions should click and clunk).
- Missing scanlines on CRT displays (they are the defining feature).
- Using vibrant UI colors (the palette is deliberately constrained and industrial).

## Accessibility Considerations

- Phosphor text on dark screens has good contrast but may cause eye strain in prolonged use.
- Amber phosphor (`#ffb000`) on `#1a0e00` provides excellent contrast (WCAG AAA).
- Scanlines are decorative: `pointer-events-none` and moderate opacity.
- CRT vignette should not darken text past readability.
- Mechanical button press animations must not interfere with keyboard navigation.
- Focus states: `focus:ring-2 focus:ring-[#ffb000]` (amber ring visible on beige).
- Analog gauges need `aria-valuenow` and `aria-label` for screen readers.
- Glitch effects must respect `prefers-reduced-motion` (disable jitter).
- LED indicators must not rely on color alone — include text labels.
