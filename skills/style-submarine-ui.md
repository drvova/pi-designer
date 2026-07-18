---
name: submarine-ui
description: Build submarine UI components (underwater vessel interior, brass pressure gauges, periscope crosshairs, sonar pings, porthole windows, riveted iron bulkheads, depth charge indicators, torpedo tube controls) with pressurized metal surfaces, sonar sweep animations, and the claustrophobic tactical tension of deep-sea military operations. Trigger this skill when the user asks for submarine, underwater vessel, u-boat, sonar interface, depth gauge, periscope, naval command, torpedo control, bulkhead panels, porthole windows, or deep-sea military aesthetics.
---

# Submarine UI

Use this skill to design and implement underwater vessel interfaces with riveted iron bulkheads, brass pressure gauges, periscope crosshairs, sonar ping animations, porthole-framed content, vertical depth meters, and the claustrophobic tactical tension of a military submarine operating at crush depth.

## Non-Negotiable Foundations

- A submarine interior is pressurized metal: every surface is riveted iron, steel plating, or brass instrumentation. Nothing is light, thin, or decorative without purpose.
- Lighting is functional and scarce: dim incandescent bulbs, red emergency lighting, and the green glow of sonar and radar scopes. The palette is dark, muted, and tactical.
- Space is claustrophobic: panels are tightly packed, information density is high, and every component serves a survival-critical function. There is no wasted space.
- Motion is mechanical and analog: sweeping sonar arcs, oscillating gauge needles, spinning depth counters, and the slow mechanical rhythm of a vessel under pressure.
- Typography is military-industrial: stenciled labels, monospace digital readouts, and stamped metal placards. No decorative fonts.
- The emotional register is tension: the interface should communicate that hull integrity, depth, and oxygen are finite resources being monitored constantly.
- Water and pressure are omnipresent threats: creaking hull sounds, condensation on surfaces, and the knowledge that outside is crushing darkness.

## Core Material Recipes

### 1) Riveted Iron Bulkhead Panel (the foundational surface)

The signature submarine surface: dark gray-green riveted iron plating.

- Background gradient: `bg-gradient-to-br from-[#3a4a3a] via-[#2f3f2f] to-[#1f2f1f]`.
- Riveted texture: regular grid of small circles using a repeating radial-gradient background image.
- Beveled edge: `border-2 border-t-[#4a5a4a] border-l-[#4a5a4a] border-b-[#1a2a1a] border-r-[#1a2a1a]`.
- Inner shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]`.
- Rivet dots: pseudo-elements or background pattern with `radial-gradient(circle_at_center,#5a6a5a_0%,#1a2a1a_70%)` at 20px intervals.
- Surface condensation: optional `before` pseudo-element with `bg-gradient-to-b from-transparent via-transparent to-[rgba(255,255,255,0.03)]`.

```css
.bulkhead-rivets {
  background-image:
    radial-gradient(circle at 10px 10px, #5a6a5a 1px, transparent 2px),
    radial-gradient(circle at 30px 30px, #5a6a5a 1px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}
```

### 2) Brass Pressure Gauge (circular instrument)

The tactical data display: brass-rimmed gauge with a sweeping needle.

- Outer ring: `w-28 h-28 rounded-full bg-gradient-to-br from-[#d4b04a] via-[#c4a043] to-[#8a7029] border-4 border-[#6a5019]`.
- Face: inner circle `bg-[#1a1a0a] rounded-full` with `shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]`.
- Ticks: SVG lines radiating from center at 10-degree intervals, major ticks longer and wider.
- Needle: absolutely positioned `w-1 h-12 bg-[#ff4444] origin-bottom` that rotates via `transform: rotate(var(--gauge-value))`.
- Glass cover: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-2px_4px_rgba(255,255,255,0.05)]`.
- Center cap: `w-3 h-3 rounded-full bg-gradient-to-br from-[#d4b04a] to-[#8a7029]`.
- Label: stenciled text below gauge `text-[#c4a043] text-xs font-mono uppercase tracking-widest`.

```css
.gauge-needle {
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 3) Periscope Crosshair Overlay

SVG overlay with bearing markings for targeting and navigation.

```html
<svg viewBox="0 0 400 400" class="absolute inset-0 w-full h-full pointer-events-none">
  <!-- Crosshair lines -->
  <line x1="0" y1="200" x2="400" y2="200" stroke="#00ff41" stroke-width="1" opacity="0.6" stroke-dasharray="4 2" />
  <line x1="200" y1="0" x2="200" y2="400" stroke="#00ff41" stroke-width="1" opacity="0.6" stroke-dasharray="4 2" />
  <!-- Bearing ticks -->
  <line x1="200" y1="20" x2="200" y2="40" stroke="#00ff41" stroke-width="2" />
  <line x1="200" y1="360" x2="200" y2="380" stroke="#00ff41" stroke-width="2" />
  <line x1="20" y1="200" x2="40" y2="200" stroke="#00ff41" stroke-width="2" />
  <line x1="360" y1="200" x2="380" y2="200" stroke="#00ff41" stroke-width="2" />
  <!-- Range rings -->
  <circle cx="200" cy="200" r="60" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.4" />
  <circle cx="200" cy="200" r="120" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.3" />
  <circle cx="200" cy="200" r="180" fill="none" stroke="#00ff41" stroke-width="0.5" opacity="0.2" />
  <!-- Bearing labels -->
  <text x="200" y="16" fill="#00ff41" font-size="10" text-anchor="middle" font-family="monospace">N 000</text>
  <text x="200" y="396" fill="#00ff41" font-size="10" text-anchor="middle" font-family="monospace">S 180</text>
  <text x="8" y="204" fill="#00ff41" font-size="10" font-family="monospace">W 270</text>
  <text x="372" y="204" fill="#00ff41" font-size="10" font-family="monospace">E 090</text>
</svg>
```

### 4) Sonar Ping Animation

Expanding circle animation emanating from a central point.

```css
.sonar-ping {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #00ff41;
  animation: sonarSweep 3s ease-out infinite;
}
.sonar-ping:nth-child(2) { animation-delay: 1s; }
.sonar-ping:nth-child(3) { animation-delay: 2s; }
@keyframes sonarSweep {
  0%   { width: 0; height: 0; opacity: 0.8; border-width: 2px; }
  100% { width: 300px; height: 300px; opacity: 0; border-width: 0.5px; }
}
```

Sonar scope base:
- Scope: `w-64 h-64 rounded-full bg-[#0a1a0a] border-4 border-[#2a3a2a] overflow-hidden relative`.
- Sweep line: rotating conic gradient `bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(0,255,65,0.15)_350deg,rgba(0,255,65,0.4)_360deg)] animate-[spin_4s_linear_infinite]`.
- Grid: concentric circles with `border border-[#0a3a0a] rounded-full`.
- Blips: small `w-1.5 h-1.5 rounded-full bg-[#00ff41]` dots with `animate-pulse`.

### 5) Porthole Window Frame

Round porthole-framed content area with brass ring and riveted flange.

- Outer flange: `w-48 h-48 rounded-full bg-gradient-to-br from-[#3a4a3a] to-[#1a2a1a] border-4 border-[#2a3a2a]`.
- Brass ring: inner `rounded-full bg-gradient-to-br from-[#d4b04a] via-[#c4a043] to-[#8a7029] border-2 border-[#6a5019] p-2`.
- Glass/content: innermost `rounded-full bg-[#0a0a0a] overflow-hidden`.
- Rivets: 8 small circles evenly spaced around the brass ring using absolute positioning.
- Glass reflection: `after` pseudo-element with `bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full`.

```html
<div class="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#3a4a3a] to-[#1a2a1a] p-3 border-4 border-[#2a3a2a] shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
  <div class="w-full h-full rounded-full bg-gradient-to-br from-[#d4b04a] via-[#c4a043] to-[#8a7029] border-2 border-[#6a5019] p-2">
    <div class="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden relative">
      <!-- Content here -->
    </div>
  </div>
</div>
```

### 6) Vertical Depth Meter

Vertical display showing current depth with tick marks and a moving indicator.

- Container: `w-16 h-64 bg-gradient-to-b from-[#1a2a1a] to-[#0a1a0a] border-2 border-[#2a3a2a] rounded relative`.
- Track: inner `w-full bg-gradient-to-b from-[#0a3a0a]/30 to-[#ff4444]/20`.
- Ticks: horizontal lines at intervals using border-top, labeled with depth values in meters/feet.
- Depth indicator: `w-full h-1 bg-[#00ff41] shadow-[0_0_8px_#00ff41] absolute` positioned by depth value.
- Digital readout: `text-[#00ff41] font-mono text-sm` below the meter showing exact depth.
- Danger zone: bottom portion with `bg-[#ff4444]/10` tint.

### 7) Red Emergency Lighting Mode

Override mode that shifts the entire interface to red-tinted illumination.

```css
.emergency-mode {
  filter: sepia(1) hue-rotate(-50deg) saturate(3) brightness(0.85);
}
```

- Emergency overlay: full-screen `bg-[#ff0000]/5 pointer-events-none`.
- Warning banner: `bg-[#ff4444]/20 border-y-2 border-[#ff4444] text-[#ff6666] font-mono uppercase tracking-widest text-sm animate-pulse`.
- All green readouts shift: `text-[#ff6666]` instead of `text-[#00ff41]`.
- Alarm strobe: `animate-[strobe_0.5s_ease-in-out_infinite_alternate]`.

```css
@keyframes strobe {
  0%   { opacity: 0.3; }
  100% { opacity: 1; }
}
```

### 8) Torpedo Tube Control Panel

Dedicated firing control with status indicators and launch sequence.

- Panel: bulkhead iron surface with stenciled label `text-[#c4a043] font-mono uppercase tracking-widest`.
- Tube status lights: row of `w-3 h-3 rounded-full` indicators — green `bg-[#00ff41]` for ready, red `bg-[#ff4444]` for loaded, dark `bg-[#2a3a2a]` for empty.
- Arming switch: toggle with `bg-gradient-to-b from-[#d4b04a] to-[#8a7029]` lever.
- Fire button: large `rounded-full bg-gradient-to-br from-[#ff4444] to-[#aa1111] border-4 border-[#660000]` with safety cover.
- Safety cover: hinged `bg-gradient-to-br from-[#c4a043] to-[#6a5019] rounded` overlay that flips on `hover`.
- Launch counter: `text-[#ff4444] font-mono text-lg` countdown display.

## Color Palette System

### Core Submarine Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Bulkhead Green-Gray | `#3a4a3a` | Riveted iron plating | Primary panel surfaces |
| Dark Steel | `#2a3a2a` | Pressurized hull steel | Dark backgrounds, frames |
| Hull Black | `#1a2a1a` | Interior shadow | Deepest backgrounds |
| Porthole Black | `#0a0a0a` | Deep water darkness | Scope/gauge faces |
| Brass | `#c4a043` | Ship instrumentation | Gauge rims, fittings |
| Brass Light | `#d4b04a` | Polished brass | Highlights, top edges |
| Brass Dark | `#8a7029` | Aged brass | Bottom edges, shadows |
| Brass Deep | `#6a5019` | Oxidized brass | Borders, rivet rims |
| Sonar Green | `#00ff41` | Phosphor CRT display | Active readouts, scopes |
| Sonar Green Dim | `#0a3a0a` | Dim CRT glow | Grid lines, inactive scope |
| Danger Red | `#ff4444` | Emergency lighting | Warnings, critical alerts |
| Danger Red Deep | `#aa1111` | Battle stations | Emergency buttons |
| Warning Amber | `#e8a828` | Caution indicator | Moderate alerts, attention |
| Rivet Gray | `#5a6a5a` | Iron rivet heads | Rivet texture detail |

Rules: Dark greens and steel dominate surfaces. Brass is reserved for instrumentation rims and fittings. Sonar green is the primary data display color. Danger red is reserved exclusively for emergencies and weapon systems. The palette should feel like the inside of a pressurized steel tube surrounded by crushing darkness.

## Typography Recommendations

Submarine typography is military-industrial and functional:

- **Display headings:** Oswald, Anton, or Impact at `font-bold uppercase tracking-widest` (stenciled military lettering).
- **Body:** IBM Plex Mono, Courier Prime, or JetBrains Mono at `text-sm` (teletype printout style).
- **Data readouts:** Share Tech Mono, VT323, or DSEG7-Classic (digital phosphor display).
- **Labels/stencils:** Black Ops One, Stencil, or Bebas Neue (stamped metal placards).
- **Alternative mono:** Roboto Mono or Source Code Pro (clean tactical readout).
- Critical values use `font-mono text-[#00ff41]` for the phosphor glow effect.
- Labels are ALWAYS uppercase with `tracking-widest` or `tracking-[0.2em]` for stenciled military look.

## Component Architecture Pattern

1. Riveted iron bulkhead background with the rivet texture pattern (the hull interior).
2. Dark steel framed panels for major content sections (compartment dividers).
3. Brass-rimmed gauges and instruments for data display (the instrument cluster).
4. Sonar scope with active ping animation for spatial awareness displays.
5. Porthole-framed content areas for media or focal points.
6. Vertical depth meters for progress or quantity displays.
7. Red emergency lighting as a stateful overlay mode for critical states.
8. Stenciled military labels with monospace data values throughout.

## Interaction Rules

- Default state: dim, pressurized, instruments glowing softly in green and brass.
- Hover: brass brightens (`hover:brightness-110`), gauge needle twitches, sonar blip intensifies.
- Active: mechanical press (`active:translate-y-0.5` with collapsing shadow — like pressing a heavy iron button).
- Focus: green phosphor glow ring `focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#1a2a1a]`.
- Transitions: `transition-all duration-300` (mechanical, deliberate, analog feel).
- Sonar sweep: continuous 4-second rotation, pings expand on 3-second intervals.
- Gauge needle: springy oscillation with `cubic-bezier(0.34, 1.56, 0.64, 1)` when values change.
- Emergency mode: instant filter shift with alarm strobe, no smooth transition.
- Depth changes: indicator slides smoothly but with slight mechanical stutter.

## Reusable Tailwind Tokens

- Bulkhead panel: `bg-gradient-to-br from-[#3a4a3a] via-[#2f3f2f] to-[#1f2f1f] border-2 border-t-[#4a5a4a] border-l-[#4a5a4a] border-b-[#1a2a1a] border-r-[#1a2a1a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]`
- Brass gauge rim: `rounded-full bg-gradient-to-br from-[#d4b04a] via-[#c4a043] to-[#8a7029] border-4 border-[#6a5019]`
- Sonar scope: `rounded-full bg-[#0a1a0a] border-4 border-[#2a3a2a] overflow-hidden relative`
- Phosphor text: `text-[#00ff41] font-mono [text-shadow:0_0_4px_rgba(0,255,65,0.6)]`
- Porthole frame: `rounded-full bg-gradient-to-br from-[#3a4a3a] to-[#1a2a1a] border-4 border-[#2a3a2a] shadow-[0_4px_12px_rgba(0,0,0,0.6)]`
- Iron button: `bg-gradient-to-b from-[#3a4a3a] to-[#1a2a1a] border-2 border-[#2a3a2a] text-[#00ff41] font-mono uppercase tracking-wider shadow-[0_3px_0_#0a1a0a,inset_0_1px_0_#4a5a4a] active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]`
- Danger button: `bg-gradient-to-b from-[#ff4444] to-[#aa1111] border-2 border-[#660000] text-white font-bold uppercase tracking-wider shadow-[0_3px_0_#660000,inset_0_1px_0_#ff6666]`
- Stencil label: `text-[#c4a043] text-xs font-mono uppercase tracking-[0.2em]`
- Emergency overlay: `filter-[sepia(1)_hue-rotate(-50deg)_saturate(3)_brightness(0.85)]`
- Depth meter track: `bg-gradient-to-b from-[#0a3a0a]/30 to-[#ff4444]/20 border-2 border-[#2a3a2a] rounded`

## Quality Checklist (must pass)

- Surfaces use riveted iron bulkhead textures with the dark green-gray gradient.
- Brass is reserved for instrumentation rims and fittings, not general surfaces.
- At least one animated element: sonar ping, gauge needle, or depth indicator movement.
- Color palette is dark and tactical: bulkhead green-gray dominates, sonar green for data, danger red for emergencies.
- Typography is military-industrial: stenciled labels with monospace data readouts, all uppercase.
- Data display uses analog gauges, sonar scopes, or depth meters (not flat modern charts).
- Shadows are heavy and deep (everything exists inside a pressurized tube).
- Red is used exclusively for danger, emergency, or weapon systems.
- Porthole or scope elements use circular brass-framed containers.
- The aesthetic reads as the interior of a military submarine at depth.

## Anti-Patterns

- Bright or cheerful color palettes (submarine interiors are dark, muted, and tactical).
- Lightweight or floating elements (everything is bolted to a bulkhead — it has weight).
- Flat modern data displays (use analog gauges, scopes, and mechanical readouts).
- Smooth digital animations (motion is mechanical: sweeping needles, pinging sonar, spinning counters).
- Missing rivets or bulkhead texture (panels look incomplete without the riveted iron surface).
- Decorative or ornamental typography (all type is functional, military, stenciled).
- Using red for non-critical UI elements (red is reserved for emergencies and weapons only).
- Open or airy layouts (submarine layouts are dense, compact, and claustrophobic).
- Missing the phosphor green glow on data readouts (readouts should glow on dark backgrounds).
- Clean pristine surfaces (the hull should feel lived-in, pressurized, and slightly worn).
- Blue color palettes (despite the underwater setting, the interior is green-gray and brass, not blue).

## Accessibility Considerations

- Sonar green (`#00ff41`) on porthole black (`#0a0a0a`) provides strong contrast for data readouts.
- Brass (`#c4a043`) on bulkhead green-gray provides adequate contrast for labels.
- Dark backgrounds require careful verification of all text against WCAG AA standards.
- Sonar ping and sweep animations must respect `prefers-reduced-motion` (stop expansion and rotation).
- Gauge and depth meter values must have text alternatives (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) for screen readers.
- Focus states must use visible green phosphor glow (`focus:ring-2 focus:ring-[#00ff41]`) against dark backgrounds.
- Emergency mode red filter must not eliminate all color distinction for colorblind users; pair red alerts with text labels and icons.
- Decorative scope crosshairs, sonar grids, and rivet patterns must be `aria-hidden="true"`.
- Touch targets must meet minimum size (44x44px) despite compact military styling.
- The emergency strobe animation must respect `prefers-reduced-motion` to avoid vestibular issues; provide a static warning state as fallback.
- Depth meters and gauges must not rely on color alone to communicate danger levels; include text depth/pressure values.
