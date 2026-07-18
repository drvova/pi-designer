---
name: synthesizer-rack-ui
description: Build synthesizer rack UI components (patch cables, knob row, filter slider, oscilloscope trace, modular panel, MIDI jack, VCO label) with modular synthesizer aesthetics, tangled patch cables, and the electronic music production of analog synthesis. Trigger this skill when the user asks for synthesizer UI, modular synth design, synth rack interface, patch bay aesthetic, analog synthesis UI, eurorack design, VCO/VCF/VCA panel, audio production interface, or hardware synth-inspired layouts.
---

# Synthesizer Rack UI

Use this skill to design and implement modular synthesizer rack interfaces with patch cable curves, knob rows, filter sliders, oscilloscope traces, modular panel grids, MIDI jacks, and the tactile, knob-heavy, cable-tangled aesthetic of analog synthesis hardware. This is the world of Eurorack, Moog, Buchla, and the hands-on manipulation of electronic sound.

## Non-Negotiable Foundations

- Synthesizer rack UI simulates a rack of modular synthesizer panels: dark metal faceplates with knobs, sliders, jacks, switches, and patch cables connecting them.
- The background is always near-black (`#0a0a0a` to `#1a1a1a`) -- the color of anodized aluminum panels and dark studio environments.
- Panels are rectangular modules arranged in a rack grid, each with a silver/dark faceplate (`#c0c0c0` brushed metal or `#2a2a2a` dark panel) and labeled sections.
- Patch cables arc between panels in bold colors (red, yellow, blue, green, orange, white) -- they are the visual signature of modular synthesis. Cables curve naturally under gravity (catenary arcs), never straight lines.
- Knobs are circular with a visible position indicator (notch or line showing current value), arranged in rows across panels.
- Sliders/faders move horizontally (filter cutoff, resonance) with a track and thumb.
- The oscilloscope is a small green-on-black screen showing a live waveform (sine, square, saw, triangle) -- the visual heartbeat of the synth.
- Labels use a clean technical sans-serif (or condensed monospace): VCO, VCF, VCA, LFO, ENV, HPF, LPF, MIX, OUT, IN, CLK.
- The aesthetic is tactile, precise, and dense -- every knob has a purpose, every cable carries a signal, every panel is a building block of sound.

## Core Material Recipes

### 1) Rack Background

The dark studio environment where the synth rack lives.

```css
.synth-rack-bg {
  background-color: #0a0a0a;
  background-image:
    /* Rack rail grooves */
    linear-gradient(0deg, transparent 0%, transparent 48%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0.03) 52%, transparent 52%),
    /* Subtle panel edge reflections */
    linear-gradient(90deg, transparent 0%, transparent 19.8%, rgba(255,255,255,0.02) 19.8%, rgba(255,255,255,0.02) 20.2%, transparent 20.2%),
    linear-gradient(90deg, transparent 0%, transparent 39.8%, rgba(255,255,255,0.02) 39.8%, rgba(255,255,255,0.02) 40.2%, transparent 40.2%),
    linear-gradient(90deg, transparent 0%, transparent 59.8%, rgba(255,255,255,0.02) 59.8%, rgba(255,255,255,0.02) 60.2%, transparent 60.2%);
  background-size: 100% 60px, 100% 100%, 100% 100%, 100% 100%;
}
```

Tailwind simplified:
- `bg-[#0a0a0a]` base. Rack rails implied by horizontal groove lines every 60px.

### 2) Modular Panel

A single synth module in the rack -- the fundamental building block.

- Dark panel: `bg-[#1a1a1a] border border-[#333] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.5)]`.
- Silver panel variant: `bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] border border-[#888] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)]`.
- Panel screws: 4 small Phillips-head screws in corners -- `absolute w-2.5 h-2.5 rounded-full bg-[#555] border border-[#444] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]`.
- Panel label strip at top: `border-b border-[#333] pb-2 mb-3` with module name in bold uppercase.
- Module screws attach to rack rails: small `w-3 h-6 bg-[#444]` tab at top and bottom center.

### 3) Knob

Circular rotary knob with position indicator -- the primary control of analog synthesis.

- Knob body: `w-10 h-10 rounded-full bg-gradient-to-b from-[#555] to-[#333] border border-[#666] shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] relative`.
- Knob indicator notch: `absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#fff] rounded-full` -- rotates based on value.
- Knob rotation: apply `transform: rotate(Xdeg)` where X is the mapped value (typically -135deg to +135deg range, 270deg total travel).
- Knob ring (value arc): SVG arc around the knob showing the parameter range:

```html
<svg viewBox="0 0 44 44" class="absolute -inset-1">
  <!-- Background arc (full range) -->
  <circle cx="22" cy="22" r="20" fill="none" stroke="#333" stroke-width="2"
    stroke-dasharray="94.2 31.4" stroke-dashoffset="-15.7"
    transform="rotate(0 22 22)"/>
  <!-- Value arc (current position) -->
  <circle cx="22" cy="22" r="20" fill="none" stroke="#00ff41" stroke-width="2"
    stroke-dasharray="X 31.4" stroke-dashoffset="-15.7"
    transform="rotate(0 22 22)"/>
</svg>
```

- Knob label: `text-[8px] font-mono text-[#888] uppercase tracking-widest text-center mt-1`.
- Knob value readout: `text-[10px] font-mono text-[#00ff41] text-center` below the label.
- Small knob variant: `w-7 h-7` for secondary parameters.
- Large knob variant: `w-14 h-14` for primary parameters (cutoff, frequency).

### 4) Patch Cable

Colored cable arcing between two jacks on different panels -- the signal routing of modular synthesis.

- Cable SVG arc (catenary curve between two points):

```html
<svg viewBox="0 0 400 300" class="w-full h-full absolute inset-0 pointer-events-none" aria-hidden="true">
  <!-- Patch cable: red, from output jack to input jack -->
  <path fill="none" stroke="#c41e1e" stroke-width="4" stroke-linecap="round"
    d="M80,180 C80,120 320,120 320,180"/>
  <!-- Cable shadow -->
  <path fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="6" stroke-linecap="round"
    d="M82,182 C82,122 322,122 322,182"/>
  <!-- Plug end left -->
  <rect x="72" y="176" width="16" height="12" rx="2" fill="#333" stroke="#555"/>
  <circle cx="80" cy="182" r="3" fill="#c41e1e"/>
  <!-- Plug end right -->
  <rect x="312" y="176" width="16" height="12" rx="2" fill="#333" stroke="#555"/>
  <circle cx="320" cy="182" r="3" fill="#c41e1e"/>
</svg>
```

- Cable colors: `#c41e1e` red, `#f0d020` yellow, `#2a4a8a` blue, `#40c840` green, `#e88020` orange, `#f0f0f0` white.
- Cable sag: the arc control point Y should be above the start/end points by 40-80px (natural gravity droop).
- Multiple cables overlap and tangle -- this is intentional. Cables are never perfectly parallel.
- Cable plug: small `w-4 h-3 bg-[#333] border border-[#555] rounded-sm` at each end with a colored center dot.

### 5) Jack Port

Input/output jack -- the circular port where patch cables connect.

- Jack outer ring: `w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-[#555] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]`.
- Jack inner hole: `absolute inset-0.5 rounded-full bg-[#0a0a0a]` with optional `border border-[#333]`.
- Jack label: `text-[7px] font-mono text-[#666] uppercase` above or below.
- Jack with cable inserted: show plug end overlapping the jack outer ring.
- Jack types distinguished by ring color: input `border-[#444]`, output `border-[#00ff41]/40`.

### 6) Oscilloscope Screen

Small green-on-black waveform display -- the visual heartbeat of the synthesizer.

- Screen frame: `bg-[#0a0a0a] border-2 border-[#333] rounded-sm p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]`.
- Screen glass: `bg-[#001a00] rounded-sm overflow-hidden relative` with subtle CRT scanline overlay.
- Waveform: SVG path in oscilloscope green (`#00ff41`) with optional glow:

```html
<svg viewBox="0 0 200 60" class="w-full h-full">
  <!-- Grid lines -->
  <line x1="0" y1="15" x2="200" y2="15" stroke="#003300" stroke-width="0.5"/>
  <line x1="0" y1="30" x2="200" y2="30" stroke="#003300" stroke-width="0.5"/>
  <line x1="0" y1="45" x2="200" y2="45" stroke="#003300" stroke-width="0.5"/>
  <line x1="50" y1="0" x2="50" y2="60" stroke="#003300" stroke-width="0.5"/>
  <line x1="100" y1="0" x2="100" y2="60" stroke="#003300" stroke-width="0.5"/>
  <line x1="150" y1="0" x2="150" y2="60" stroke="#003300" stroke-width="0.5"/>
  <!-- Waveform glow (thicker, blurred) -->
  <path fill="none" stroke="#00ff41" stroke-width="3" opacity="0.3"
    d="M0,30 Q25,5 50,30 Q75,55 100,30 Q125,5 150,30 Q175,55 200,30"
    filter="url(#glow)"/>
  <!-- Waveform main -->
  <path fill="none" stroke="#00ff41" stroke-width="1.5"
    d="M0,30 Q25,5 50,30 Q75,55 100,30 Q125,5 150,30 Q175,55 200,30"/>
  <!-- Center line -->
  <line x1="0" y1="30" x2="200" y2="30" stroke="#00ff41" stroke-width="0.5" opacity="0.3"/>
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
</svg>
```

- Waveform types: sine (smooth), square (stepped), sawtooth (diagonal), triangle (angular) -- each as a different SVG path.
- CRT scanline overlay: `background-image: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)`.
- Screen phosphor glow: `shadow-[0_0_10px_rgba(0,255,65,0.15)]` on the screen frame.

### 7) Filter Slider (Horizontal Fader)

Horizontal slider for filter cutoff or resonance -- a tactile control element.

- Slider track: `relative h-2 bg-[#1a1a1a] border border-[#333] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]`.
- Slider thumb: `absolute top-1/2 -translate-y-1/2 w-4 h-6 bg-gradient-to-b from-[#ccc] to-[#888] border border-[#aaa] rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing`.
- Slider fill: `absolute left-0 top-0 h-full bg-gradient-to-r from-[#00ff41]/30 to-[#00ff41] rounded-full`.
- Tick marks: small `w-px h-1 bg-[#444]` at regular intervals along the track.
- Slider label: `text-[8px] font-mono text-[#666] uppercase tracking-widest` below the track.
- Value display: `text-[10px] font-mono text-[#00ff41]` showing current value (e.g., "2.4 kHz").

### 8) MIDI Jack

5-pin DIN connector for MIDI communication -- round, distinctive, iconic.

- Jack body: `w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#555] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]`.
- 5 pin holes: arranged in a semicircle arc -- 5 small `w-1 h-1 rounded-full bg-[#333] border border-[#444]` dots positioned in an arc pattern.
- Jack label: `text-[7px] font-mono text-[#666] uppercase` below -- "MIDI IN", "MIDI OUT", "MIDI THRU".
- Jack shield ring: `absolute inset-0 rounded-full border border-[#666]` outer metallic ring.

### 9) Module Label (VCO / VCF / VCA)

The bold technical label identifying each module's function.

- Module name: `font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#c0c0c0]` on dark panels, `text-[#1a1a1a]` on silver panels.
- Module subtitle: `font-mono text-[8px] uppercase tracking-widest text-[#555]` -- "VOLTAGE CONTROLLED OSCILLATOR", "LOW PASS FILTER", etc.
- Module number: `font-mono text-[7px] text-[#00ff41]/40` -- "MOD-001", "VCO-3A".
- Section dividers within a module: `border-t border-[#333] my-2`.
- Parameter labels: `text-[8px] font-mono text-[#666] uppercase tracking-widest` for "FREQ", "RES", "GAIN", "PWM", etc.

## Color Palette System

### Core Synthesizer Rack Palette

| Color | Hex | Role |
|---|---|---|
| Panel Black | `#1a1a1a` | Primary panel background (dark modules) |
| Panel Dark | `#2a2a2a` | Panel surface (slightly lighter variant) |
| Panel Silver | `#c0c0c0` | Silver/aluminum panel variant |
| Brushed Metal | `#a0a0a0` | Panel gradient midpoint |
| Rack Black | `#0a0a0a` | Rack background, jack holes |
| Screw Gray | `#555555` | Panel screws, jack rings |
| Border Gray | `#333333` | Panel borders, section dividers |
| Cable Red | `#c41e1e` | Patch cable |
| Cable Yellow | `#f0d020` | Patch cable |
| Cable Blue | `#2a4a8a` | Patch cable |
| Cable Green | `#40c840` | Patch cable |
| Cable Orange | `#e88020` | Patch cable |
| Cable White | `#f0f0f0` | Patch cable |
| Oscilloscope Green | `#00ff41` | Waveforms, value readouts, active indicators |
| Screen Dark | `#001a00` | Oscilloscope background |
| Knob Gray | `#6a6a6a` | Knob body |
| Knob Highlight | `#888888` | Knob top highlight |
| LED Red | `#ff2020` | Active/clip indicator |
| LED Green | `#20ff20` | Signal present |
| LED Amber | `#f0a020` | Warning/peak |
| Label Silver | `#888888` | Parameter labels on dark panels |
| Label Dark | `#333333` | Parameter labels on silver panels |
| Text Bright | `#f0f0f0` | Primary text, module names |

Rules: Near-black dominates. Panel surfaces are dark gray or silver. Oscilloscope green (`#00ff41`) is the primary accent color for values, waveforms, and active indicators. Patch cable colors (red, yellow, blue, green, orange, white) are the most vibrant elements -- they are the visual arteries of the synth. Knobs are neutral gray. LEDs provide small colored status dots. The palette should feel like a dark studio with focused, purposeful color.

## Typography Recommendations

Synthesizer typography is clean, technical, and dense -- it must fit small panel labels while remaining readable:

- **Primary (module labels):** IBM Plex Mono, JetBrains Mono -- clean monospace for "VCO", "VCF", "VCA", "LFO".
- **Secondary (parameter labels):** Same mono family, smaller size -- "FREQ", "RES", "GAIN", "PW", "FM", "PWM".
- **Display (brand/title):** Space Grotesk, DM Sans -- clean geometric sans-serif for "SYNTH RACK" header or brand name.
- **Value readouts:** `font-mono text-[10px] text-[#00ff41]` -- oscilloscope-green numeric values.
- **Panel labels:** `font-mono text-[8px] uppercase tracking-[0.2em] text-[#888]` -- compact, scannable.
- **Module name:** `font-mono font-bold text-xs uppercase tracking-[0.15em] text-[#c0c0c0]` -- prominent but not large.
- All labels are uppercase -- synthesizer panels universally use uppercase for legibility at small sizes.
- Letter-spacing is generous (`tracking-widest` or `tracking-[0.2em]`) to improve readability at tiny sizes.

## Component Architecture Pattern

1. Rack background (near-black with subtle rail grooves).
2. Modular panels arranged in a horizontal rack grid (each module is a rectangular panel).
3. Panel header with module name (VCO, VCF, VCA) and screws.
4. Knob rows for primary parameters (frequency, resonance, gain).
5. Horizontal sliders for filter parameters (cutoff, resonance).
6. Jack ports at the bottom or top of panels for patch cable connections.
7. Oscilloscope screen showing live waveform.
8. Patch cables arcing between panels (drawn as SVG overlay on top of everything).
9. LED indicators for signal presence, clipping, and sync.
10. MIDI jack ports for external control.
11. Labels are dense, small, uppercase, monospace.

## Interaction Rules

- Default state: static knobs at set positions, oscilloscope showing waveform, LEDs lit for active signals.
- Knob drag: rotation follows mouse/touch angle, value updates in real-time.
  - `cursor-grab active:cursor-grabbing` on knobs.
  - Knob rotation: `transform: rotate(Xdeg) transition-transform duration-75`.
  - Value readout updates live during drag.
- Slider drag: thumb follows horizontal mouse/touch position, fill bar tracks.
  - `cursor-grab active:cursor-grabbing` on slider thumb.
  - Slider fill: `transition-all duration-50` for smooth response.
- Jack hover: nearby jack rings glow oscilloscope green (`border-[#00ff41]`) suggesting connection readiness.
- Cable insertion: when a cable is dragged from one jack to another, the cable arc follows the cursor in real-time before snapping to the connected position.
- Oscilloscope: waveform animates continuously -- use CSS `@keyframes` to shift the SVG path horizontally, creating a scrolling effect.
- LED blink: active signal LEDs pulse at audio rate -- `animate-[led-pulse_0.5s_ease-in-out_infinite]` for LFO-rate indicators.
- Panel hover: subtle brightness increase -- `hover:brightness-110 transition-all duration-150`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#00ff41]` on interactive controls.
- No transitions on cable paths during normal interaction -- cables are static once connected.

## Reusable Tailwind Tokens

- Rack background: `bg-[#0a0a0a]` with subtle horizontal rail groove lines.
- Dark panel: `bg-[#1a1a1a] border border-[#333] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`.
- Silver panel: `bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] border border-[#888] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]`.
- Knob: `w-10 h-10 rounded-full bg-gradient-to-b from-[#555] to-[#333] border border-[#666] shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] cursor-grab active:cursor-grabbing`.
- Small knob: `w-7 h-7 rounded-full bg-gradient-to-b from-[#555] to-[#333] border border-[#666] shadow-[0_2px_4px_rgba(0,0,0,0.5)]`.
- Large knob: `w-14 h-14 rounded-full bg-gradient-to-b from-[#555] to-[#333] border border-[#666] shadow-[0_2px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]`.
- Knob indicator: `absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-[#fff] rounded-full`.
- Patch cable (use SVG): `stroke="#c41e1e" stroke-width="4" stroke-linecap="round"` with catenary arc path.
- Cable plug: `w-4 h-3 bg-[#333] border border-[#555] rounded-sm` with colored center dot.
- Jack port: `w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#555] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]`.
- Oscilloscope screen: `bg-[#001a00] border-2 border-[#333] rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0_10px_rgba(0,255,65,0.15)]`.
- Waveform trace: `stroke="#00ff41" stroke-width="1.5" fill="none"` with optional glow filter.
- Filter slider track: `h-2 bg-[#1a1a1a] border border-[#333] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]`.
- Slider thumb: `w-4 h-6 bg-gradient-to-b from-[#ccc] to-[#888] border border-[#aaa] rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.5)] cursor-grab`.
- Slider fill: `h-full bg-gradient-to-r from-[#00ff41]/30 to-[#00ff41] rounded-full`.
- MIDI jack: `w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#555] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]`.
- Module label: `font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#c0c0c0]`.
- Parameter label: `font-mono text-[8px] uppercase tracking-widest text-[#888]`.
- Value readout: `font-mono text-[10px] text-[#00ff41]`.
- LED red: `w-1.5 h-1.5 rounded-full bg-[#ff2020] shadow-[0_0_4px_rgba(255,32,32,0.7)]`.
- LED green: `w-1.5 h-1.5 rounded-full bg-[#20ff20] shadow-[0_0_4px_rgba(32,255,32,0.7)]`.
- Panel screw: `absolute w-2.5 h-2.5 rounded-full bg-[#555] border border-[#444] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]`.
- Section divider: `border-t border-[#333]`.

## Quality Checklist (must pass)

- Background is near-black (`#0a0a0a` to `#1a1a1a`) with subtle rack rail grooves.
- At least one modular panel with dark or silver faceplate, screws, and label.
- At least 3 knobs with visible position indicators (notch/line showing rotation).
- At least one horizontal filter slider with track, thumb, and fill.
- At least 2 jack ports with correct 5-pin or 1/4" styling.
- At least one oscilloscope screen with green waveform on dark background.
- At least 2 patch cables arcing between panels (colored, with catenary sag).
- Module labels use correct synthesizer terminology (VCO, VCF, VCA, LFO, ENV).
- Knob values and parameter labels are visible and readable.
- LED indicators present (signal, clip, or sync status).
- All typography is uppercase, monospace, and small -- matching real synth panels.
- The overall layout reads as a modular synthesizer rack.
- Color palette is dark panels + oscilloscope green accent + colorful patch cables.
- Interactions include knob rotation and slider dragging.
- Patch cables visually connect modules and overlap/tangle naturally.

## Anti-Patterns

- Light or bright backgrounds (synth racks are in dark studios).
- Large, airy typography (synth panels use small, dense, uppercase labels).
- Missing patch cables (they are the visual signature of modular synthesis).
- Straight-line patch cables (cables sag under gravity -- use catenary arcs).
- Knobs without position indicators (the notch/line is essential for reading value).
- Sans-serif font for module labels (monospace IS the synth aesthetic).
- Missing oscilloscope (the waveform display is the heartbeat of the synth).
- Rounded corners on panels (synth panels are rectangular with defined edges).
- Missing panel screws (screws attach modules to the rack -- they are structural).
- Cables all the same color (modular synthesis uses color-coded cables for signal type).
- Oversized controls (synth panels are dense -- every millimeter is used).
- Smooth/gradient panel transitions (panels are discrete modules with clear borders).
- Missing jacks/ports (modules connect through jacks -- they are essential).
- Uniform knob sizes (primary parameters use larger knobs, secondary use smaller).
- Missing value readouts (every knob needs a numeric readout).
- Straight vertical cables (cables always sag in arcs).
- Non-technical labels (use correct terminology: VCO, VCF, VCA -- not "Sound Maker").
- Missing LED indicators (signal presence and clip LEDs are standard on synth panels).

## Accessibility Considerations

- Dark panels with light text provide strong contrast (verify WCAG AA for all text on `#1a1a1a` backgrounds).
- Oscilloscope green on dark background (`#00ff41` on `#001a00`) has excellent contrast but is narrow-band -- pair waveform visuals with text labels for hearing-impaired users.
- Focus states: `focus:ring-1 focus:ring-[#00ff41]` on all interactive knobs, sliders, and jacks.
- Knob rotation must be operable via keyboard (arrow keys) -- not just mouse drag.
- Slider must be a native `<input type="range">` or have equivalent ARIA slider role.
- Patch cable SVGs are decorative/informational -- use `aria-hidden="true"` when purely visual, or `role="img"` with `aria-label="Patch cable from VCO output to VCF input"` when informational.
- LED indicators must not be the sole status indicator -- pair with text readouts.
- Oscilloscope waveform is supplementary visual feedback -- pair with numeric frequency/pitch display.
- Jack ports that are interactive must have `aria-label` describing their function ("VCO 1 Output", "VCF Cutoff Input").
- Module labels should be actual text elements, not images, for screen reader access.
- Touch targets for knobs must be at least 44x44px -- the `w-10 h-10` knob meets this.
- The dense panel layout should maintain logical tab order (left-to-right, top-to-bottom per module).
- Value readouts update in real-time during knob/slider interaction -- announce changes via `aria-live="polite"` for screen readers.
- Color-coded patch cables should also be labeled (cable color is not the only way to identify signal routing).
