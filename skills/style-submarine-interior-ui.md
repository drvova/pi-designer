---
name: submarine-interior-ui
description: Build submarine interior UI components (riveted hull panels, brass instruments, periscope well, sonar scope, torpedo room, cramped crew quarters, pressure hatch) with the claustrophobic tubular interior, functional military hardware, and the tense atmosphere of deep-sea operations. Trigger this skill when the user asks for submarine interior, hull panel, riveted steel, brass instrument, periscope well, sonar scope, torpedo room, crew quarters, pressure hatch, deep-sea interior, submarine control room, naval vessel interior, watertight door, submarine bulkhead, or underwater habitat aesthetics.
---

# Submarine Interior UI

Use this skill to design and implement submarine interior interfaces with cylindrical hull panels, riveted steel surfaces, sonar scope screens, brass instruments, pressure hatch doors, cramped crew quarters, torpedo room controls, and the claustrophobic tubular atmosphere of a military submarine operating at depth.

## Non-Negotiable Foundations

- A submarine interior is a cylindrical pressure vessel: every surface curves with the hull, panels follow the tube geometry, and edges bow outward at the top and bottom. Flat panels violate the physics of the space.
- The environment is claustrophobic and dense: panels are tightly packed, controls are within arm's reach of the captain's chair, and every square inch serves a survival-critical function. There is no decorative whitespace.
- Materials are heavy and industrial: riveted steel plating, brass instrument housings, rubber gaskets, and welded seam lines. Nothing floats, nothing is lightweight, nothing is purely decorative.
- Lighting is scarce and purposeful: dim overhead caged bulbs, green phosphor glow from sonar and radar scopes, red emergency strips along deck edges, and the amber indicator lights of instrument panels.
- Sound and pressure are felt through the interface: the hull groans at depth, condensation drips from overhead pipes, and the sonar ping echoes through the compartment. The UI communicates this atmospheric tension.
- Typography is military-functional: stenciled compartment labels, stamped placards with bolt-down mounting, monospace digital readouts on CRT-style displays, and engraved brass nameplates. No decorative fonts.
- The emotional register is controlled tension: the crew is professional under extreme pressure, the interface reflects disciplined monitoring of hull integrity, depth, oxygen, and weapon readiness.
- Space constraints define the layout: crew quarters are bunks stacked three high against the hull wall, the control room is a ring of instruments around the periscope well, and the torpedo room houses tubes that are the ship's primary reason for existing.

## Core Material Recipes

### 1) Cylindrical Hull Panel (the foundational surface)

The signature submarine interior surface: a curved rectangular panel that follows the tube geometry of the pressure hull. The top and bottom edges bow outward to suggest the cylindrical cross-section.

- Background: `bg-gradient-to-b from-[#4a5a4a] via-[#3f4f3f] to-[#2f3f2f]` simulating the curved light falloff of a cylindrical surface.
- Curved edges: top and bottom corners are `rounded-t-[32px] rounded-b-[32px]` to suggest hull curvature, or use a `clip-path: ellipse(52% 48% at 50% 50%)` on the container.
- Riveted steel texture: repeating grid of small raised circles using a radial-gradient pattern.
- Beveled steel edges: `border-2 border-t-[#5a6a5a] border-l-[#5a6a5a] border-b-[#2a3a2a] border-r-[#2a3a2a]` for the pressed-steel bevel.
- Inner shadow for depth: `shadow-[inset_0_3px_12px_rgba(0,0,0,0.5),inset_0_-2px_8px_rgba(0,0,0,0.3)]`.
- Welded seam: horizontal `after` pseudo-element at the midpoint with `bg-gradient-to-r from-transparent via-[#2a3a2a]/60 to-transparent h-[2px]`.

```css
.hull-rivets {
  background-image:
    radial-gradient(circle at 12px 12px, #5a6a5a 1.5px, transparent 2.5px),
    radial-gradient(circle at 36px 36px, #5a6a5a 1.5px, transparent 2.5px);
  background-size: 48px 48px;
  background-position: 0 0, 24px 24px;
}
```

### 2) Brass Instrument Cluster (gauges and dials)

The operational heart of the control room: clusters of brass-rimmed circular instruments displaying depth, pressure, heading, and speed.

- Instrument housing: `w-24 h-24 rounded-full bg-gradient-to-br from-[#c4a043] via-[#b8942f] to-[#7a6019] border-3 border-[#6a5019] shadow-[0_2px_8px_rgba(0,0,0,0.6)]`.
- Gauge face: inner circle `bg-[#0f1208] rounded-full p-1 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]`.
- Tick marks: SVG lines radiating from center at 5-degree intervals, major ticks every 30 degrees.
- Needle: `w-0.5 h-10 bg-[#ff4444] origin-bottom` rotating via `transform: rotate(var(--needle-angle))`.
- Center cap: `w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#d4b04a] to-[#8a7029]`.
- Mounting screws: 4 tiny `w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#9a8029] to-[#6a5019]` at corners of the instrument cluster backing plate.
- Backing plate: `bg-gradient-to-br from-[#3a4a3a] to-[#2a3a2a] rounded-lg p-3 border border-[#4a5a4a]` behind a group of instruments.

```css
.instrument-needle {
  transform-origin: bottom center;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.instrument-cluster {
  background: linear-gradient(135deg, #3a4a3a 0%, #2a3a2a 100%);
  box-shadow: inset 0 1px 0 #4a5a4a, 0 4px 12px rgba(0,0,0,0.5);
}
```

### 3) Sonar Scope Screen (green phosphor display)

The iconic tactical display: a circular screen with a rotating sweep line, concentric range rings, and contact blips.

- Scope housing: `w-56 h-56 rounded-full bg-gradient-to-br from-[#2a3a2a] to-[#1a2a1a] border-4 border-[#3a4a3a] p-2 shadow-[0_4px_16px_rgba(0,0,0,0.7)]`.
- Screen: inner `rounded-full bg-[#060f06] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,255,65,0.05)]`.
- Sweep line: rotating conic gradient `bg-[conic-gradient(from_0deg,transparent_0deg,transparent_310deg,rgba(0,255,65,0.12)_340deg,rgba(0,255,65,0.35)_355deg,rgba(0,255,65,0.5)_360deg)] animate-[spin_4s_linear_infinite]`.
- Range rings: concentric circles using nested divs `border border-[#0a2a0a] rounded-full`.
- Contact blips: small `w-2 h-2 rounded-full bg-[#00ff41] shadow-[0_0_6px_#00ff41] animate-pulse`.
- CRT scanlines: `before` pseudo-element with `bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]`.
- Screen glass: `after` pseudo-element with `bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-full pointer-events-none`.

### 4) Pressure Hatch (round watertight door)

The compartment divider: a heavy circular door with a wheel locking mechanism and dogging bolts around the flange.

- Door body: `w-64 h-64 rounded-full bg-gradient-to-br from-[#4a5a4a] via-[#3f4f3f] to-[#2a3a2a] border-4 border-[#2a3a2a] shadow-[0_6px_24px_rgba(0,0,0,0.7),inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Dogging bolts: 8 small `w-3 h-3 rounded-full bg-gradient-to-br from-[#6a7a6a] to-[#3a4a3a]` evenly spaced around the flange perimeter at 45-degree intervals.
- Wheel lock: center `w-16 h-16 rounded-full bg-gradient-to-br from-[#6a7a6a] to-[#3a4a3a] border-2 border-[#4a5a4a]` with 4 spokes using `before` and `after` pseudo-elements as crossed bars.
- Handle notch: `w-3 h-8 bg-[#2a3a2a] rounded-full` on one spoke for grip.
- Inner viewport: optional `w-20 h-20 rounded-full bg-[#0a1a0a] border-2 border-[#3a4a3a]` small porthole in the door center.
- Seals: `shadow-[inset_0_0_0_3px_#1a2a1a]` rubber gasket line inside the flange.

```html
<div class="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#4a5a4a] via-[#3f4f3f] to-[#2a3a2a] border-4 border-[#2a3a2a] shadow-[0_6px_24px_rgba(0,0,0,0.7)]">
  <!-- Dogging bolts around perimeter -->
  <div class="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#6a7a6a] to-[#3a4a3a] top-2 left-1/2 -translate-x-1/2"></div>
  <!-- ... 7 more bolts at 45-degree intervals ... -->
  <!-- Wheel lock center -->
  <div class="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#6a7a6a] to-[#3a4a3a] border-2 border-[#4a5a4a]">
    <div class="absolute inset-0 m-auto w-12 h-1.5 bg-[#4a5a4a] rounded"></div>
    <div class="absolute inset-0 m-auto w-1.5 h-12 bg-[#4a5a4a] rounded"></div>
  </div>
</div>
```

### 5) Periscope Well Cylinder

The vertical tube through which the periscope extends: a cylindrical housing rising through the control room ceiling.

- Well housing: `w-20 h-48 bg-gradient-to-r from-[#3a4a3a] via-[#4a5a4a] to-[#3a4a3a] rounded-full border-2 border-[#2a3a2a] shadow-[0_0_12px_rgba(0,0,0,0.5)]`.
- Collar ring: top `w-24 h-6 bg-gradient-to-b from-[#c4a043] to-[#8a7029] rounded-full border border-[#6a5019] mx-auto -mt-1`.
- Viewing window: centered `w-12 h-24 bg-[#0a1a0a] rounded border border-[#2a3a2a]` showing the optical view.
- Scale markings: `text-[#00ff41] font-mono text-[8px]` alongside the well for bearing readout.
- Base plate: `w-28 h-4 bg-gradient-to-b from-[#3a4a3a] to-[#2a3a2a] rounded-b-lg mx-auto`.
- Rotation indicator: small `w-2 h-2 rounded-full bg-[#c4a043]` dot that orbits the collar via CSS animation.

### 6) Cramped Crew Quarters Bunk

The three-high stacked sleeping berth: narrow, close to the hull wall, with minimal personal space.

- Bunk frame: `w-80 h-20 bg-gradient-to-b from-[#3a4a3a] to-[#2a3a2a] border border-[#4a5a4a] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`.
- Mattress: inner `bg-[#2a3520] border border-[#3a4530] rounded-sm p-2 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]` (olive drab canvas).
- Reading light: small `w-4 h-4 rounded-full bg-[#e8a828] shadow-[0_0_8px_#e8a828]` at the head of the bunk.
- Privacy curtain rail: `w-full h-0.5 bg-[#4a5a4a]` at the bunk opening edge.
- Personal locker: `w-8 h-8 bg-gradient-to-br from-[#3a4a3a] to-[#2a3a2a] border border-[#4a5a4a] rounded-sm` beside the pillow area.
- Stacked arrangement: three bunks with `gap-1` between them, the entire stack `bg-[#1a2a1a] p-2 rounded-lg` against the hull wall.

### 7) Torpedo Room Tube End Cap

The aft end of a torpedo tube: a massive steel circle with a loading mechanism and status indicators.

- End cap: `w-72 h-72 rounded-full bg-gradient-to-br from-[#4a5a4a] via-[#3f4f3f] to-[#2a3a2a] border-6 border-[#2a3a2a] shadow-[0_8px_32px_rgba(0,0,0,0.7)]`.
- Loading ring: inner `rounded-full border-2 border-[#5a6a5a]` concentric circle.
- Status indicator strip: `w-full h-2 bg-[#2a3a2a] rounded-full mt-4 overflow-hidden` with a filling bar `bg-[#00ff41]` or `bg-[#ff4444]` depending on loaded state.
- Tube number: stenciled `text-[#c4a043] font-mono text-lg uppercase` centered on the cap.
- Hydraulic lines: 2-3 horizontal `h-1 bg-gradient-to-r from-[#2a3a2a] via-[#3a4a3a] to-[#2a3a2a] rounded-full` running from the cap to the hull wall.
- Warning stripes: diagonal `bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#c4a043_4px,#c4a043_8px)]` on the loading rail adjacent to the tube.

### 8) Compartment Status Panel

The wall-mounted information board showing all compartment statuses along the boat.

- Panel backing: `bg-gradient-to-b from-[#3a4a3a] to-[#2a3a2a] border border-[#4a5a4a] rounded-lg p-3 shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]`.
- Compartment rows: `flex items-center gap-2 py-1 border-b border-[#2a3a2a]` for each compartment.
- Status indicators: `w-2.5 h-2.5 rounded-full` with green `bg-[#00ff41]`, amber `bg-[#e8a828]`, or red `bg-[#ff4444]` plus `shadow-[0_0_4px_currentColor]`.
- Compartment names: `text-[#c4a043] text-xs font-mono uppercase tracking-wider`.
- Pressure readings: `text-[#00ff41] font-mono text-xs` right-aligned.
- Divider rivets: pairs of `w-1 h-1 rounded-full bg-[#5a6a5a]` between sections.

## Color Palette System

### Core Submarine Interior Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Hull Green-Gray | `#4a5a4a` | Painted pressure hull | Primary panel surfaces |
| Hull Green-Gray Light | `#5a6a5a` | Lit hull surface | Top edges, highlights |
| Hull Green-Gray Dark | `#3f4f3f` | Shadowed hull | Gradient midtones |
| Steel Dark | `#2a3a2a` | Unpainted hull steel | Borders, frames, deepest shadows |
| Steel Deep | `#1a2a1a` | Shadow void | Deepest background recesses |
| Brass | `#c4a043` | Instrument housings | Gauge rims, labels, fittings |
| Brass Light | `#d4b04a` | Polished brass | Highlights, knob tops |
| Brass Dark | `#8a7029` | Aged brass | Bottom edges, patina |
| Brass Deep | `#6a5019` | Oxidized brass | Borders, screw heads |
| Sonar Green | `#00ff41` | Phosphor CRT display | Active readouts, scope data |
| Sonar Green Dim | `#0a2a0a` | Faint CRT glow | Scope grid, inactive data |
| Sonar Green Mid | `#0a3a0a` | CRT grid lines | Range rings, tick marks |
| Dark Interior | `#1a1a1a` | Absence of light | Scope faces, deepest voids |
| Scope Black | `#060f06` | CRT phosphor dark | Sonar screen background |
| Gauge Face | `#0f1208` | Instrument dial dark | Gauge face backgrounds |
| Pressure Red | `#ff4444` | Emergency lighting | Critical warnings, gauges |
| Pressure Red Deep | `#aa1111` | Emergency button | Danger button gradients |
| Warning Amber | `#e8a828` | Caution indicator | Moderate alerts, attention |
| Steel Gray | `#6a7a7a` | Raw steel surface | Bolt heads, hardware |
| Rubber Black | `#1a1a1a` | Gasket rubber | Seals, gasket lines |
| Canvas Olive | `#2a3520` | Military canvas | Bunk mattresses, fabric |
| Caged Light | `#e8d070` | Incandescent bulb | Reading lights, warm accents |

Rules: Hull green-gray dominates all surfaces, creating the pressed-metal tube feel. Brass is exclusively for instrument housings, fittings, labels, and hardware — never general surfaces. Sonar green is the data display color on CRT and digital readouts. Pressure red is reserved for emergency states and critical weapon system indicators. The palette must feel like the inside of a steel cylinder surrounded by crushing ocean darkness — heavy, muted, pressurized, and functional.

## Typography Recommendations

Submarine interior typography is military-functional and purpose-built for low-light readability:

- **Compartment labels:** Oswald, Anton, or Impact at `font-bold uppercase tracking-[0.15em]` with `text-[#c4a043]` (stamped brass placards bolted to hull).
- **Data readouts:** Share Tech Mono, VT323, or DSEG7-Classic at `text-[#00ff41] font-mono` (phosphor CRT display style with subtle text-shadow glow).
- **Body/crew text:** IBM Plex Mono or JetBrains Mono at `text-sm text-[#9aaa9a]` (dim ambient readability for crew instructions).
- **Warning labels:** Black Ops One or Stencil at `font-bold uppercase tracking-widest text-[#ff4444]` (emergency placards).
- **Pressure/depth values:** Courier Prime or Roboto Mono at `text-lg font-bold text-[#00ff41]` (large-format critical readouts).
- **Stencil markings:** Permanent Marker or Special Elite at `text-xs uppercase text-[#5a6a5a]` (hull identification numbers, faded paint stencils).
- Labels are ALWAYS uppercase with wide letter-spacing to mimic stamped or stenciled metal markings.
- Data values use the phosphor green glow effect: `text-[#00ff41] [text-shadow:0_0_4px_rgba(0,255,65,0.5)]`.
- Numbers on analog instruments use condensed fonts that fit within narrow gauge arcs.

## Component Architecture Pattern

1. Cylindrical hull panel background with curved top/bottom edges and riveted steel texture (the tube interior).
2. Dark steel framed compartment sections with welded seam dividers (bulkhead structure).
3. Brass instrument clusters for data display — gauges, dials, and CRT screens grouped on backing plates.
4. Periscope well cylinder as a vertical structural element in the control room layout.
5. Pressure hatch doors as circular dividers between compartments with wheel lock mechanisms.
6. Cramped crew quarters as stacked bunk arrangements against the hull wall.
7. Torpedo room as a distinct section with tube end caps and loading mechanisms.
8. Compartment status panel as the central information hub showing all boat systems.
9. Caged incandescent lights and red emergency strips for atmospheric lighting.
10. Stenciled brass placard labels on every compartment, instrument, and control.

## Interaction Rules

- Default state: dim ambient lighting, instruments glowing with green phosphor and warm brass highlights, the hull visible as a dark curved presence.
- Hover: brass instruments brighten (`hover:brightness-110 hover:shadow-[0_0_8px_rgba(196,160,67,0.3)]`), sonar blips intensify, gauge needles quiver slightly.
- Active: heavy mechanical press (`active:translate-y-px` with deepening shadow — like pressing a steel button into the bulkhead).
- Focus: green phosphor glow ring `focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#1a2a1a]`.
- Transitions: `transition-all duration-300 ease-out` (mechanical, deliberate, analog feel — nothing snaps instantly).
- Sonar sweep: continuous 4-second rotation, blips pulse on 2-second intervals, contact markers fade in gradually.
- Gauge needles: springy overshoot with `cubic-bezier(0.34, 1.56, 0.64, 1)` when values change, settling over 0.8 seconds.
- Pressure hatch: wheel rotates on unlock (`transition-transform duration-700`), then the door swings on `transform-origin: left center`.
- Emergency mode: instant red filter shift across the entire interface, all green readouts change to red, alarm strobe activates.
- Depth changes: indicators slide smoothly with slight mechanical resistance feel via easing curves.

## Reusable Tailwind Tokens

- Hull panel: `bg-gradient-to-b from-[#4a5a4a] via-[#3f4f3f] to-[#2f3f2f] rounded-t-[32px] rounded-b-[32px] border-2 border-t-[#5a6a5a] border-l-[#5a6a5a] border-b-[#2a3a2a] border-r-[#2a3a2a] shadow-[inset_0_3px_12px_rgba(0,0,0,0.5)]`
- Brass gauge rim: `rounded-full bg-gradient-to-br from-[#c4a043] via-[#b8942f] to-[#7a6019] border-3 border-[#6a5019] shadow-[0_2px_8px_rgba(0,0,0,0.6)]`
- Sonar scope: `rounded-full bg-[#060f06] border-4 border-[#3a4a3a] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,255,65,0.05)]`
- Phosphor text: `text-[#00ff41] font-mono [text-shadow:0_0_4px_rgba(0,255,65,0.5)]`
- Brass placard label: `text-[#c4a043] text-xs font-mono uppercase tracking-[0.15em]`
- Pressure hatch: `rounded-full bg-gradient-to-br from-[#4a5a4a] via-[#3f4f3f] to-[#2a3a2a] border-4 border-[#2a3a2a] shadow-[0_6px_24px_rgba(0,0,0,0.7)]`
- Iron button: `bg-gradient-to-b from-[#4a5a4a] to-[#2a3a2a] border-2 border-[#3a4a3a] text-[#00ff41] font-mono uppercase tracking-wider shadow-[0_3px_0_#1a2a1a,inset_0_1px_0_#5a6a5a] active:translate-y-px active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]`
- Danger button: `bg-gradient-to-b from-[#ff4444] to-[#aa1111] border-2 border-[#660000] text-white font-bold uppercase tracking-wider shadow-[0_3px_0_#660000,inset_0_1px_0_#ff6666]`
- Bunk frame: `bg-gradient-to-b from-[#3a4a3a] to-[#2a3a2a] border border-[#4a5a4a] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`
- Emergency overlay: `filter-[sepia(1)_hue-rotate(-50deg)_saturate(3)_brightness(0.85)]`
- Welded seam: `h-[2px] bg-gradient-to-r from-transparent via-[#2a3a2a]/60 to-transparent`
- Caged light: `w-4 h-4 rounded-full bg-[#e8d070] shadow-[0_0_8px_#e8d070,0_0_16px_rgba(232,208,112,0.3)]`
- CRT scanlines: `bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)]`

## Quality Checklist (must pass)

- Hull panels have curved top and bottom edges suggesting the cylindrical tube geometry of the pressure hull.
- All surfaces use riveted steel texture with the dark green-gray gradient palette.
- Brass appears only on instrument housings, fittings, labels, and hardware — never on general surfaces.
- At least one animated element: sonar sweep, gauge needle movement, or depth indicator shift.
- Color palette is dominated by hull green-gray with brass accents and sonar green data readouts.
- Typography is military-functional: stenciled brass placard labels and monospace phosphor green data readouts.
- Data display uses analog gauges, CRT sonar scopes, or mechanical readouts — not flat modern charts.
- Shadows are deep and heavy (everything exists inside a pressurized steel cylinder).
- Pressure red is reserved exclusively for emergency states and critical weapon system indicators.
- Pressure hatch elements use circular steel construction with wheel lock mechanisms.
- Crew quarters convey the cramped, stacked-bunk reality of submarine life.
- The overall aesthetic reads as the interior of a military submarine operating at depth, not a generic dark theme.

## Anti-Patterns

- Bright, airy, or spacious layouts (submarine interiors are dense, cramped, and claustrophobic by nature).
- Flat rectangular panels without hull curvature suggestion (the tube shape is fundamental to the space).
- Lightweight or floating elements (everything is bolted, welded, or riveted to the hull — it has weight and permanence).
- Smooth digital animations without mechanical character (motion should feel analog: sweeping needles, rotating wheels, expanding sonar rings).
- Missing rivet texture or bulkhead surface detail (panels without rivets look like generic dark cards).
- Using blue as a primary color (the interior is green-gray and brass, not ocean blue — the ocean is outside).
- Clean pristine surfaces (the hull is lived-in, slightly worn, and shows the patina of sustained deep-sea operations).
- Using red for non-critical UI elements (red is exclusively for emergencies and weapon systems).
- Open or minimalist spacing (every inch is used, every surface has a purpose, space is at a premium).
- Missing the phosphor green glow on data readouts (CRT displays glow in the dark — they do not look like flat modern text).
- Decorative or ornamental elements (everything in a submarine serves a functional purpose — beauty emerges from utility).
- Modern sans-serif typography (all type must be military-functional: stenciled, monospace, or stamped).

## Accessibility Considerations

- Sonar green (`#00ff41`) on scope black (`#060f06`) provides strong contrast for data readouts — verify WCAG AA for all text combinations.
- Brass (`#c4a043`) on hull green-gray (`#3a4a3a`) must be verified for sufficient contrast; use `text-[#d4b04a]` on darker backgrounds when needed.
- Dark backgrounds dominate; every text color must be tested against its specific background for WCAG compliance.
- Sonar sweep, gauge needle, and ping animations must respect `prefers-reduced-motion` — provide static scope with fixed sweep position and steady gauge readings.
- Pressure hatch wheel lock must be operable via keyboard — provide `role="button"` with `aria-label` for lock/unlock toggle.
- Gauge and sonar values must have text alternatives (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) for screen readers.
- Focus states use visible green phosphor glow (`focus:ring-2 focus:ring-[#00ff41]`) with sufficient offset against dark backgrounds.
- Emergency mode red filter must not eliminate all color distinction; pair red alerts with text labels, icons, and pattern changes.
- Decorative elements (rivet textures, CRT scanlines, welded seams, sonar grid lines) must be `aria-hidden="true"`.
- Touch targets must meet minimum 44x44px despite compact military styling — use padding to expand interactive areas.
- Emergency strobe animation must respect `prefers-reduced-motion`; provide a static solid red warning state as fallback.
- Depth meters, gauges, and scope displays must not rely on color alone; include numeric text values alongside visual indicators.
- Compartment labels must be readable at the low contrast ratios inherent to the dark palette; test with actual rendered sizes.
- The cylindrical hull curvature at panel edges must not cause content clipping — ensure text and controls stay within the safe inner area.
