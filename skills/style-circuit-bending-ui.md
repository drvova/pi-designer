---
name: circuit-bending-ui
description: Build circuit bending UI components (exposed circuit board, bent wire paths, glitch artifacts, toy shell casing, battery compartment, speaker cone, random LED) with hacked electronics aesthetics, glitch effects, and the chaotic creativity of circuit bending. Trigger this skill when the user asks for circuit bending design, glitch electronics UI, toy hacking aesthetic, bent circuit interface, hacked toy electronics, chaotic hardware UI, or deconstructed electronics interfaces.
---

# Circuit Bending UI

Use this skill to design and implement circuit-bent electronics interfaces with exposed green PCB surfaces, bent wire paths, visual glitch artifacts, colorful toy shell casings, battery compartments, speaker cones, and the chaotic, playful, unhinged energy of circuit-bent toys and hacked electronics. This is not clean PCB design -- it is the joyful destruction and creative rewiring of consumer electronics.

## Non-Negotiable Foundations

- Circuit bending UI simulates the surface of a hacked, rewired consumer electronic device: exposed PCB substrate with chaotic colored wires crossing at odd angles, glitch artifacts from short circuits, and the colorful plastic shell of a children's toy opened up and modified.
- The background is always a dark PCB green (`#0d2e0d` to `#1a4a1a`) -- but unlike clean circuit board design, the surface is scratched, worn, and partially exposed through gaps in a toy shell casing.
- Toy shell casing panels (`#e84040`, `#4090e8`, `#f0c030`, `#40c840`) wrap around sections like the original plastic housing has been pried open, revealing the board underneath.
- Bent wires (`#c41e1e` red, `#2a4a8a` blue, `#f0d020` yellow, `#40c840` green) cross irregularly at non-standard angles -- they are NOT routed cleanly. Wires are bent by hand, sometimes looping, sometimes crossing other wires.
- Glitch artifacts are visual distortion blocks: horizontal slices offset from the main content, RGB channel splitting, scanline interference, and digital noise blocks that suggest the circuit is producing unpredictable output.
- Battery compartment accents (battery symbols, spring contacts, AA battery outlines) anchor the power source area and provide a familiar consumer-electronics reference point.
- Speaker cone circles are round mesh-grille elements that suggest sound output -- the device is alive and making noise.
- Random blinking LED dots are scattered across the surface in red, green, yellow, and blue -- some blink at irregular intervals, some flicker, some stay lit. They suggest the device has its own chaotic life.
- Typography is a mix: monospace for technical labels (component designators, voltage readings) and a slightly rough/retro pixel font for playful labels (toy brand names, "HACKED", "MOD").
- The aesthetic is chaotic, playful, handmade, and defiantly alive -- like a child's toy that has been opened up, rewired, and made to do things its manufacturer never intended.

## Core Material Recipes

### 1) Exposed PCB Surface with Toy Shell Frame

The foundational layout: a dark green PCB visible through gaps in a colorful plastic toy shell.

```css
.circuit-bend-bg {
  background-color: #0d2e0d;
  background-image:
    /* PCB trace chaos */
    linear-gradient(137deg, transparent 0%, transparent 15%, rgba(184,134,11,0.25) 15%, rgba(184,134,11,0.25) 16%, transparent 16%),
    linear-gradient(203deg, transparent 0%, transparent 35%, rgba(184,134,11,0.20) 35%, rgba(184,134,11,0.20) 36.5%, transparent 36.5%),
    linear-gradient(78deg, transparent 0%, transparent 55%, rgba(184,134,11,0.15) 55%, rgba(184,134,11,0.15) 56%, transparent 56%),
    linear-gradient(312deg, transparent 0%, transparent 72%, rgba(184,134,11,0.20) 72%, rgba(184,134,11,0.20) 73%, transparent 73%),
    /* Scratched texture */
    repeating-linear-gradient(87deg, transparent, transparent 3px, rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px),
    /* Subtle grid */
    linear-gradient(rgba(0,255,0,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,0,0.02) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 16px 16px, 16px 16px;
}
```

Tailwind simplified:
- `bg-[#0d2e0d]` base with SVG overlay of chaotic non-orthogonal trace paths at irregular angles.
- Toy shell border panels: `border-4 border-[#e84040] rounded-xl` (or any toy plastic color).

### 2) Toy Shell Panel

A section styled as the colorful plastic housing of a consumer toy, partially opened.

- `bg-gradient-to-br from-[#e84040] to-[#c02020] border-2 border-[#ff6060]/50 rounded-xl p-4 shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.4)] relative overflow-hidden`.
- Screw holes: `absolute w-3 h-3 rounded-full bg-[#333] border border-[#555] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]` in each corner (mimicking the Phillips-head screws that hold toy shells together).
- Shell crack: `absolute inset-0` with an SVG jagged line simulating where the plastic was pried open with a screwdriver.

### 3) Bent Wire Path

Irregular colored wire crossing the surface at non-standard angles -- NOT clean routing.

- Wire body: `absolute h-[3px] bg-gradient-to-r` using wire colors (`from-[#c41e1e] via-[#c41e1e] to-[#a01818]`) with `rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)]`.
- Wire bend point: `absolute w-2 h-2 rounded-full bg-[#c41e1e] shadow-[0_0_4px_rgba(196,30,30,0.4)]` at each angle change.
- Wire insulation strip: small exposed copper section near connection points -- `bg-gradient-to-r from-[#b87333] to-[#d4a060]` inline segment.
- Multiple wires should cross over each other at different angles, never running parallel.
- SVG path version for complex wire routing:

```html
<svg viewBox="0 0 400 200" class="w-full h-full absolute inset-0" aria-hidden="true">
  <!-- Red wire: bent path crossing from top-left to bottom-right -->
  <path fill="none" stroke="#c41e1e" stroke-width="3" stroke-linecap="round"
    d="M20,30 L80,30 L90,50 L200,50 L210,80 L350,80 L360,100 L380,100"/>
  <!-- Blue wire: crossing under red at an angle -->
  <path fill="none" stroke="#2a4a8a" stroke-width="3" stroke-linecap="round"
    d="M380,20 L300,20 L290,60 L180,60 L170,100 L100,100 L90,140 L30,140"/>
  <!-- Yellow wire: looping messily -->
  <path fill="none" stroke="#f0d020" stroke-width="3" stroke-linecap="round"
    d="M40,180 L120,180 L130,160 L250,160 L260,130 L320,130 L330,110 L370,110"/>
  <!-- Bend points -->
  <circle cx="90" cy="50" r="3" fill="#c41e1e"/>
  <circle cx="210" cy="80" r="3" fill="#c41e1e"/>
  <circle cx="290" cy="60" r="3" fill="#2a4a8a"/>
  <circle cx="130" cy="160" r="3" fill="#f0d020"/>
  <!-- Wire crossing (z-order illusion) -->
  <rect x="175" y="47" width="12" height="9" fill="#0d2e0d"/>
  <path fill="none" stroke="#2a4a8a" stroke-width="3" stroke-linecap="round" d="M175,50 L187,50"/>
</svg>
```

### 4) Glitch Artifact Block

Horizontal distortion slices that suggest the circuit is producing unpredictable visual output.

- Glitch slice: `absolute h-2 to h-6` with `bg-[#ff40c0]/10` or `bg-[#40e0ff]/10` and `mix-blend-screen` -- horizontal strips that offset content.
- RGB split: duplicate a text element three times with `text-[#ff2020]` shifted left 2px, `text-[#40e0ff]` shifted right 2px, and original at 0 -- creating a chromatic aberration effect.
- Scanline interference: `background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)` overlaid on glitch regions.
- Noise block: small rectangular area filled with random-colored 1px dots using a CSS noise technique or SVG `feTurbulence`:

```css
.glitch-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E");
  mix-blend-mode: screen;
  opacity: 0.4;
}
```

### 5) Battery Compartment Accent

The battery bay area with spring contacts and battery outlines -- the power source for the hacked device.

- Compartment frame: `bg-[#1a1a1a] border border-[#333] rounded-lg p-4 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]`.
- Battery outline: `border-2 border-[#555] rounded-md p-2` with a `+` and `-` terminal label in monospace.
- Battery spring: SVG coil pattern at the negative terminal.
- AA battery body: `bg-gradient-to-b from-[#f0d020] to-[#d4b820] border border-[#c0a010] rounded-sm h-16 w-8` with a small metallic positive nub at top.
- Battery label: `text-[8px] font-mono text-[#888] uppercase tracking-widest` -- "1.5V AA", "ALKALINE", or voltage readings.
- Power indicator LED next to compartment: `w-2 h-2 rounded-full bg-[#00ff00] shadow-[0_0_6px_rgba(0,255,0,0.8)]` when powered, `bg-[#333]` when off.

### 6) Speaker Cone Circle

A round speaker grille element suggesting the device is producing sound.

- Speaker cone outer ring: `w-20 h-20 rounded-full bg-gradient-to-br from-[#333] to-[#1a1a1a] border-2 border-[#444] shadow-[0_0_8px_rgba(0,0,0,0.5),inset_0_0_12px_rgba(0,0,0,0.4)]`.
- Speaker grille mesh: concentric circles using CSS `radial-gradient` or SVG:

```css
.speaker-grille {
  background: radial-gradient(circle, transparent 15%, #222 16%, #222 18%, transparent 19%,
    transparent 28%, #222 29%, #222 31%, transparent 32%,
    transparent 42%, #222 43%, #222 45%, transparent 46%,
    transparent 55%, #222 56%, #222 58%, transparent 59%,
    transparent 70%, #222 71%, #222 73%, transparent 74%);
}
```

- Speaker dust cap: center circle `w-6 h-6 rounded-full bg-gradient-to-br from-[#444] to-[#222] border border-[#555]`.
- Sound waves (optional animation): concentric arcs expanding outward using CSS keyframes or SVG circles with decreasing opacity.
- Speaker terminal wires: two bent wires (`red` and `black`) leading to the speaker from the board.

### 7) Random Blinking LED Dot

Scattered LED indicators with irregular blink patterns suggesting chaotic circuit behavior.

- LED base: `w-1.5 h-1.5 rounded-full` with color-specific classes:
  - Red: `bg-[#ff2020] shadow-[0_0_4px_rgba(255,32,32,0.7)]`.
  - Green: `bg-[#20ff20] shadow-[0_0_4px_rgba(32,255,32,0.7)]`.
  - Yellow: `bg-[#f0d020] shadow-[0_0_4px_rgba(240,208,32,0.7)]`.
  - Blue: `bg-[#40e0ff] shadow-[0_0_4px_rgba(64,224,255,0.7)]`.
- Blink animations (CSS keyframes applied inline or via Tailwind config):

```css
@keyframes led-blink-fast { 0%,100% { opacity: 1; } 50% { opacity: 0.1; } }
@keyframes led-blink-slow { 0%,100% { opacity: 1; } 50% { opacity: 0.2; } }
@keyframes led-flicker { 0% { opacity: 1; } 10% { opacity: 0.3; } 20% { opacity: 1; }
  40% { opacity: 0.6; } 60% { opacity: 1; } 80% { opacity: 0.4; } 100% { opacity: 1; } }
@keyframes led-random { 0% { opacity: 1; } 33% { opacity: 0.1; } 66% { opacity: 0.8; }
  100% { opacity: 0.2; } }
```

- Scatter LEDs at irregular positions across the board -- NOT in a grid. Some near traces, some in corners, some near the battery compartment.
- At least 5-8 LEDs visible per panel, mixed colors, mixed blink rates.
- Some LEDs should appear burned out: `bg-[#333] shadow-none opacity-30` (dark, no glow).

### 8) Circuit Bending Switch

Toggle switches and momentary buttons that control the hack -- the user's control over the chaos.

- Toggle switch: `relative w-10 h-5 bg-[#333] border border-[#555] rounded-full cursor-pointer` with an inner knob that slides.
- Switch ON state: knob slides right, `bg-[#20ff20] shadow-[0_0_6px_rgba(32,255,32,0.5)]` LED nearby.
- Momentary push button: `w-8 h-8 rounded-full bg-gradient-to-b from-[#ff4040] to-[#cc2020] border-2 border-[#ff6060] shadow-[0_3px_0_#881010,0_0_6px_rgba(255,64,64,0.3)] active:translate-y-[2px] active:shadow-[0_1px_0_#881010]`.
- DIP switch block: row of small sliders (`w-3 h-5` each) in a `bg-[#1a1a1a] border border-[#444] p-1` housing.

## Color Palette System

### Core Circuit Bending Palette

| Color | Hex | Role |
|---|---|---|
| PCB Green Dark | `#0d2e0d` | Primary background (exposed board) |
| PCB Green Light | `#1a4a1a` | Card surfaces on exposed board |
| Copper Trace | `#b87333` | Traces on exposed board |
| Light Copper | `#d4a060` | Highlighted traces, exposed wire ends |
| Toy Red | `#e84040` | Toy shell casing (primary) |
| Toy Blue | `#4090e8` | Toy shell casing (secondary) |
| Toy Yellow | `#f0c030` | Toy shell casing (accent) |
| Toy Green | `#40c840` | Toy shell casing (tertiary) |
| Wire Red | `#c41e1e` | Bent wire path |
| Wire Blue | `#2a4a8a` | Bent wire path |
| Wire Yellow | `#f0d020` | Bent wire path |
| Wire Green | `#40c840` | Bent wire path |
| Glitch Magenta | `#ff40c0` | Glitch artifact overlay |
| Glitch Cyan | `#40e0ff` | Glitch artifact overlay |
| LED Red | `#ff2020` | Blinking LED indicator |
| LED Green | `#20ff20` | Blinking LED indicator |
| LED Yellow | `#f0d020` | Blinking LED indicator |
| Solder Silver | `#c0c0c0` | Solder joints, battery contacts |
| Battery Black | `#1a1a1a` | Battery compartment, dark accents |
| Phosphor Green | `#88ff88` | Primary text on dark PCB |

Rules: Dark PCB green dominates the exposed surface. Toy plastic colors frame sections and provide playful contrast. Wire colors (red, blue, yellow, green) are the primary accent -- they cross chaotically. Glitch magenta and cyan appear only in distortion artifacts. LEDs provide scattered status color. Text on dark backgrounds is phosphor green. The palette should feel like a toy store explosion meets a hardware lab.

## Typography Recommendations

Circuit bending typography mixes technical monospace with playful rough text -- it IS the tension between electronics precision and chaotic hacking:

- **Primary (technical labels):** JetBrains Mono, IBM Plex Mono -- for voltage readings, component designators, technical annotations.
- **Display (toy/brand):** Press Start 2P, Silkscreen -- pixel/retro fonts for "HACKED", "MOD", "CIRCUIT BEND", toy brand mockups.
- **Glitch text:** Any monospace with `text-shadow` RGB split for chromatic aberration effect.
- **Labels:** `font-mono text-[10px] uppercase tracking-widest` for technical component labels.
- **Body text:** `font-mono text-sm text-[#88ff88]` for any readable content on dark PCB.
- **Bold callouts:** `font-mono font-black text-lg text-[#ff40c0]` for glitch-affected labels.
- Mixed font usage is intentional -- it reinforces the chaotic, cobbled-together nature of circuit bending.

## Component Architecture Pattern

1. Dark green PCB background with chaotic non-orthogonal trace patterns.
2. Toy shell casing panels (colorful plastic) framing sections, with screw holes and pry marks.
3. Bent wire paths crossing irregularly between sections and components.
4. Glitch artifact blocks overlaid on sections -- horizontal slices, RGB splits, noise blocks.
5. Battery compartment accent area with battery outlines and power LED.
6. Speaker cone circles suggesting audio output.
7. Scattered random blinking LEDs across the surface.
8. Circuit bending switches (toggle, momentary, DIP) for user control.
9. Component pads and solder points on exposed PCB areas.
10. Mixed monospace + pixel typography.
11. The layout should feel asymmetrical, organic, and slightly chaotic -- not a clean grid.

## Interaction Rules

- Default state: chaotic, alive, electrically active with blinking LEDs and occasional glitch flickers.
- Hover: nearby LEDs flicker faster, wire paths glow slightly, glitch intensity increases.
  - `hover:shadow-[0_0_8px_rgba(255,64,192,0.3)]` on elements near glitch zones.
  - `hover:animate-[led-flicker_0.3s_ease-in-out]` on adjacent LEDs.
- Active/Click: glitch burst -- a brief flash of magenta/cyan overlay, LED all blink simultaneously.
  - `active:shadow-[inset_0_0_20px_rgba(255,64,192,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#40e0ff] focus:ring-offset-2 focus:ring-offset-[#0d2e0d]` (cyan glow on PCB background).
- Transitions: `transition-all duration-100` for quick electronic response; glitch effects use `duration-50` for sharp flickers.
- Sound-related elements: optional CSS animation that simulates speaker cone vibration -- `animate-[speaker-pulse_0.1s_ease-in-out_infinite]` with subtle scale oscillation.
- Power toggle: switching on causes LEDs to blink on in sequence (staggered animation delays), switching off fades all LEDs to dark.

## Reusable Tailwind Tokens

- Circuit bend PCB bg: `bg-[#0d2e0d]` with SVG chaotic non-orthogonal trace overlay.
- Toy shell panel: `bg-gradient-to-br from-[#e84040] to-[#c02020] border-2 border-[#ff6060]/50 rounded-xl shadow-[inset_0_2px_0_rgba(255,255,255,0.3)]`.
- Bent wire: `absolute h-[3px] bg-[#c41e1e] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)]` (change color per wire).
- Wire bend point: `absolute w-2 h-2 rounded-full bg-[#c41e1e] shadow-[0_0_4px_rgba(196,30,30,0.4)]`.
- Glitch slice: `absolute w-full h-3 bg-[#ff40c0]/10 mix-blend-screen`.
- RGB split text: layered `text-[#ff2020]` (offset left 2px) + `text-[#40e0ff]` (offset right 2px) + original.
- Battery compartment: `bg-[#1a1a1a] border border-[#333] rounded-lg shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]`.
- Speaker cone: `w-20 h-20 rounded-full bg-gradient-to-br from-[#333] to-[#1a1a1a] border-2 border-[#444]`.
- LED red: `w-1.5 h-1.5 rounded-full bg-[#ff2020] shadow-[0_0_4px_rgba(255,32,32,0.7)] animate-[led-blink-fast_1.5s_ease-in-out_infinite]`.
- LED green: `w-1.5 h-1.5 rounded-full bg-[#20ff20] shadow-[0_0_4px_rgba(32,255,32,0.7)] animate-[led-blink-slow_3s_ease-in-out_infinite]`.
- LED burned out: `w-1.5 h-1.5 rounded-full bg-[#333] opacity-30`.
- Solder dot: `w-2 h-2 rounded-full bg-[#c0c0c0] shadow-[0_0_3px_rgba(192,192,192,0.5)]`.
- Toggle switch (ON): `relative w-10 h-5 bg-[#1a4a1a] border border-[#00ff00]/40 rounded-full shadow-[0_0_4px_rgba(0,255,0,0.2)]`.
- Push button: `w-8 h-8 rounded-full bg-gradient-to-b from-[#ff4040] to-[#cc2020] border-2 border-[#ff6060] shadow-[0_3px_0_#881010] active:translate-y-[2px]`.
- Screw hole: `absolute w-3 h-3 rounded-full bg-[#333] border border-[#555] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]`.

## Quality Checklist (must pass)

- Background is dark PCB green (`#0d2e0d` to `#1a4a1a`) with visible copper traces at non-standard angles.
- At least one toy shell casing panel (colorful plastic border/frame) with screw holes and pry marks.
- At least 2-3 bent wire paths crossing irregularly -- wires are NOT routed cleanly or orthogonally.
- At least one glitch artifact block (horizontal slice, RGB split, or noise block).
- Battery compartment accent with battery outlines and terminal details.
- At least one speaker cone circle with mesh grille pattern.
- At least 5 scattered blinking LEDs across the surface (mixed colors, mixed blink rates, some burned out).
- Circuit bending toggle switches or momentary buttons present.
- Mixed typography: monospace for technical labels, pixel font for playful labels.
- Glitch effects are subtle overlays, not the entire interface -- the device is broken but still usable.
- The overall layout feels asymmetrical and chaotic but not illegible.
- The aesthetic reads as a circuit-bent toy or hacked consumer electronic device.
- Color palette balances dark PCB green with bright toy plastic colors and wire colors.

## Anti-Patterns

- Clean, symmetrical layout (circuit bending is chaotic and handmade -- symmetry kills the aesthetic).
- All wires routed at 90-degree angles (bent wires cross at irregular angles, loop, and overlap).
- Missing toy shell casing (the plastic housing is what makes this "circuit bending" vs clean "PCB design").
- Missing glitch artifacts (glitch effects are the signature visual of broken/hacked circuits).
- No speaker cone (the device should suggest it makes sound -- circuit-bent toys are audio devices).
- Only one LED color or all LEDs blinking in sync (LEDs should be chaotic, mixed, irregular).
- Overusing glitch effects (too much glitch makes the interface illegible -- subtlety is key).
- Light or bright backgrounds (the exposed board is always dark green).
- Sans-serif only typography (the pixel font for playful labels is part of the character).
- Perfectly clean wire routing (wires should look hand-bent, not machine-routed).
- Missing battery compartment (power source is a key visual element of portable toys).
- All components perfectly aligned (misalignment and asymmetry are features, not bugs).
- Missing solder points where wires connect to the board.
- Smooth rounded corners on toy shell panels (plastic shells have defined edges, not fully rounded).
- Uniform blink timing across all LEDs (use staggered, irregular animation delays).

## Accessibility Considerations

- Dark green PCB backgrounds with phosphor green text (`#88ff88` on `#0d2e0d`) provide strong contrast (verify WCAG AA).
- Glitch text with RGB split must maintain sufficient contrast on the original text layer -- decorative copies should be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#40e0ff] focus:ring-offset-2 focus:ring-offset-[#0d2e0d]` (cyan ring clearly visible on dark PCB).
- Blinking LEDs must respect `prefers-reduced-motion` -- disable all blink animations and show LEDs as static lit/unlit.
- Glitch artifact overlays should use `aria-hidden="true"` and not obscure interactive content.
- Speaker cone elements are decorative when not interactive -- use `aria-hidden="true"`.
- Wire path SVGs crossing the interface are decorative -- use `aria-hidden="true"`.
- Battery compartment labels and voltage readings use monospace which is legible but can be wide -- ensure adequate container width.
- Toy shell panel screw holes are decorative -- use `aria-hidden="true"` or `role="presentation"`.
- Toggle switches and push buttons must have visible focus states and accessible labels (`aria-label` or associated `<label>`).
- The chaotic layout should not break logical reading order -- use proper DOM order even if visual positioning is irregular.
- Touch targets on switches and buttons must be at least 44x44px despite the small, playful styling.
- Color alone should not convey status -- combine LED color with text labels or icons for meaning.
