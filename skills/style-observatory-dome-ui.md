---
name: observatory-dome-ui
description: Build observatory dome UI components (slit opening, telescope barrel, star chart, control panel, dome rotation, eyepiece, celestial map) with astronomical precision, deep sky views, and the focused silence of a stargazing observatory. Trigger this skill when the user asks for observatory dome UI, telescope interface, star chart, celestial map, planetarium, astronomy control panel, dome rotation, or deep-sky observation interfaces.
---

# Observatory Dome UI

Use this skill to design and implement precise, instrument-grade interfaces rooted in the imagery of a stargazing observatory: the dome slit revealing deep sky, the telescope barrel aimed at distant objects, constellation charts with connecting lines, control panels with readouts, and the quiet authority of scientific observation.

## Non-Negotiable Foundations

- Observatory Dome UI is instrument-driven. Every surface is a housing, every panel is a readout, every control is precision-machined. The design language is engineered, not decorative.
- The palette is split between the dome interior (warm off-whites, instrument grays, matte blacks) and the sky visible through the slit (deep indigo, star white, celestial blue). This contrast IS the design.
- The slit opening is the focal point. It is a narrow vertical gap in the dome that reveals the sky behind — the most important compositional element on any page.
- Star charts use thin white lines on deep blue-black fields. Connecting lines between stars are 1px strokes, never thick. Constellation labels are small, precise, and quiet.
- Control panels use a dark matte surface with recessed button wells, glowing status indicators, and clean numerical readouts. They feel like real instrument panels, not web forms.
- The dome surface itself is a smooth, light gray with subtle curvature gradients that imply a spherical structure.

## Core Material Recipes

### 1) Dome Surface (the foundation)

A smooth, light gray surface with a subtle radial gradient that implies spherical curvature — the outer shell of the observatory dome.

```css
background:
  radial-gradient(ellipse 120% 80% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%),
  linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #b8b8b8 100%);
```

Tailwind arbitrary value equivalent:
- `bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(255,255,255,0.15),transparent_60%),linear-gradient(180deg,#e8e8e8,#d0d0d0_50%,#b8b8b8)]`

### 2) Slit Opening (vertical sky reveal)

A narrow vertical rectangle cut into the dome surface, revealing the deep sky behind. The slit has sharp mechanical edges and a slight inner shadow suggesting depth.

```css
.slit-frame {
  background: linear-gradient(180deg, #8a8a8a 0%, #6a6a6a 100%);
  box-shadow:
    inset 0 0 12px rgba(0,0,0,0.5),
    inset 2px 0 4px rgba(0,0,0,0.3),
    inset -2px 0 4px rgba(0,0,0,0.3);
}
.slit-sky {
  background:
    radial-gradient(circle at 30% 20%, rgba(42,74,138,0.6) 0%, transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(42,74,138,0.4) 0%, transparent 35%),
    linear-gradient(180deg, #0a0a2a 0%, #0d0d35 100%);
}
```

Tailwind approach:
- Frame: `bg-gradient-to-b from-[#8a8a8a] to-[#6a6a6a] shadow-[inset_0_0_12px_rgba(0,0,0,0.5),inset_2px_0_4px_rgba(0,0,0,0.3),inset_-2px_0_4px_rgba(0,0,0,0.3)]`
- Sky inside slit: `bg-[radial-gradient(circle_at_30%_20%,rgba(42,74,138,0.6),transparent_40%),linear-gradient(180deg,#0a0a2a,#0d0d35)]`

### 3) Telescope Barrel (large cylindrical lens)

A long cylindrical tube rendered as a horizontal gradient cylinder with specular highlights suggesting polished metal.

```css
.barrel-body {
  background: linear-gradient(
    180deg,
    #4a4a4a 0%,
    #2a2a2a 20%,
    #1a1a1a 50%,
    #2a2a2a 80%,
    #3a3a3a 100%
  );
  border-radius: 9999px;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.3),
    inset 0 1px 2px rgba(255,255,255,0.08);
}
.barrel-lens {
  background: radial-gradient(circle, #2a4a8a 0%, #1a2a5a 40%, #0a0a3a 80%);
  border: 2px solid #3a3a3a;
  box-shadow:
    inset 0 0 8px rgba(42,74,138,0.4),
    0 0 12px rgba(42,74,138,0.2);
}
```

Tailwind approach:
- Barrel: `h-12 rounded-full bg-gradient-to-b from-[#4a4a4a] via-[#1a1a1a] to-[#3a3a3a] shadow-md`
- Lens: `w-10 h-10 rounded-full bg-[radial-gradient(circle,#2a4a8a,#0a0a3a_80%)] border-2 border-[#3a3a3a] shadow-[inset_0_0_8px_rgba(42,74,138,0.4),0_0_12px_rgba(42,74,138,0.2)]`

### 4) Star Chart (constellation map)

A deep blue-black field with scattered star dots and thin connecting lines forming constellations.

```css
.star-field {
  background:
    radial-gradient(circle at 15% 25%, #0d0d35 0%, transparent 50%),
    radial-gradient(circle at 75% 60%, #0f0f3a 0%, transparent 45%),
    linear-gradient(180deg, #080820 0%, #0a0a2a 100%);
}
.star-dot {
  background: #f0f0ff;
  border-radius: 9999px;
  box-shadow: 0 0 4px rgba(240,240,255,0.8);
}
.constellation-line {
  stroke: rgba(240,240,255,0.25);
  stroke-width: 1;
  stroke-linecap: round;
}
```

Tailwind approach:
- Star field: `bg-[radial-gradient(circle_at_15%_25%,#0d0d35,transparent_50%),linear-gradient(180deg,#080820,#0a0a2a)]`
- Star dots: 1-3px circles with `bg-[#f0f0ff] shadow-[0_0_4px_rgba(240,240,255,0.8)]`
- Constellation lines: SVG `<line>` elements with `stroke="rgba(240,240,255,0.25)"` and `stroke-width="1"`

### 5) Control Panel (instrument readout surface)

A dark, matte panel with recessed sections, glowing indicators, and precise numerical displays — like a real observatory instrument panel.

```css
.panel-surface {
  background: linear-gradient(135deg, #2a2a2e 0%, #1a1a1e 100%);
  border: 1px solid #3a3a3e;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.4);
}
.readout-display {
  background: #0a0a0e;
  border: 1px solid #2a2a2e;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  color: #4ade80;
  box-shadow: inset 0 0 8px rgba(0,0,0,0.6);
}
.indicator-glow {
  box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
}
```

Tailwind approach:
- Panel: `bg-gradient-to-br from-[#2a2a2e] to-[#1a1a1e] border border-[#3a3a3e] shadow-inner rounded-lg`
- Readout: `bg-[#0a0a0e] border border-[#2a2a2e] rounded px-3 py-1 font-mono text-[#4ade80] shadow-inner`
- Green indicator: `w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80,0_0_16px_#4ade80]`
- Amber indicator: `w-2 h-2 rounded-full bg-[#fbbf24] shadow-[0_0_8px_#fbbf24,0_0_16px_#fbbf24]`
- Red indicator: `w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444,0_0_16px_#ef4444]`

### 6) Dome Rotation Mechanism

A circular gauge showing dome azimuth, rendered as an arc with tick marks and a moving indicator needle.

```css
.rotation-ring {
  border: 3px solid #6a6a6e;
  border-radius: 9999px;
  box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
}
.rotation-needle {
  background: #ef4444;
  width: 2px;
  height: 40%;
  transform-origin: bottom center;
}
.rotation-tick {
  background: #8a8a8e;
  width: 1px;
  height: 6px;
}
```

Tailwind approach:
- Ring: `w-24 h-24 rounded-full border-2 border-[#6a6a6e] shadow-inner relative`
- Needle: `absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[40%] bg-[#ef4444] origin-bottom`
- Tick marks: absolute-positioned `w-px h-1.5 bg-[#8a8a8e]` at intervals around the ring
- Center cap: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4a4a4e]`

### 7) Eyepiece Circle (focus view)

A circular viewport simulating the telescope eyepiece view — dark field with stars, slight vignetting at edges, and crosshair lines.

```css
.eyepiece {
  background: #060614;
  border-radius: 9999px;
  box-shadow:
    inset 0 0 40px rgba(0,0,0,0.8),
    inset 0 0 80px rgba(0,0,0,0.4),
    0 0 0 4px #3a3a3e,
    0 0 0 6px #2a2a2e;
}
.crosshair {
  stroke: rgba(240,240,255,0.15);
  stroke-width: 0.5;
}
```

Tailwind approach:
- Eyepiece: `w-48 h-48 rounded-full bg-[#060614] shadow-[inset_0_0_40px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(0,0,0,0.4),0_0_0_4px_#3a3a3e,0_0_0_6px_#2a2a2e] relative overflow-hidden`
- Crosshairs: SVG `<line>` elements centered in the circle with `stroke="rgba(240,240,255,0.15)"` and `stroke-width="0.5"`

### 8) Celestial Map Projection

A circular or rectangular projection of the night sky with a coordinate grid (right ascension and declination lines) and labeled deep-sky objects.

```css
.celestial-grid {
  background: #080818;
  border-radius: 8px;
}
.grid-line {
  stroke: rgba(240,240,255,0.08);
  stroke-width: 0.5;
}
.grid-line-major {
  stroke: rgba(240,240,255,0.15);
  stroke-width: 0.5;
}
.deep-sky-object {
  background: radial-gradient(circle, rgba(42,74,138,0.6) 0%, transparent 60%);
  border-radius: 9999px;
}
.object-label {
  font-size: 0.625rem;
  color: rgba(240,240,255,0.5);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em;
}
```

Tailwind approach:
- Map field: `bg-[#080818] rounded-lg relative overflow-hidden`
- Grid lines: SVG with `stroke="rgba(240,240,255,0.08)"` for minor and `stroke="rgba(240,240,255,0.15)"` for major
- Deep-sky objects: small `w-3 h-3 rounded-full bg-[radial-gradient(circle,rgba(42,74,138,0.6),transparent_60%)]`
- Labels: `text-[0.625rem] font-mono text-[rgba(240,240,255,0.5)] tracking-wide`

## Color Palette System

### Observatory Exterior

| Token             | Hex       | Role                          | Tailwind Class               |
|--------------------|-----------|-------------------------------|------------------------------|
| dome-white         | `#e8e8e8` | Dome surface, primary light   | `bg-[#e8e8e8]`               |
| dome-gray          | `#8a8a8a` | Dome shadow, mechanical parts | `bg-[#8a8a8a]`               |
| dome-dark          | `#6a6a6a` | Deep shadow, slit frame       | `bg-[#6a6a6a]`               |
| dome-highlight     | `#f0f0f0` | Specular highlight on dome    | `bg-[#f0f0f0]`               |
| concrete-gray      | `#b0b0b0` | Foundation, platform          | `bg-[#b0b0b0]`               |

### Deep Sky

| Token             | Hex       | Role                          | Tailwind Class               |
|--------------------|-----------|-------------------------------|------------------------------|
| sky-deep           | `#0a0a2a` | Primary sky background        | `bg-[#0a0a2a]`               |
| sky-mid            | `#0d0d35` | Mid-field sky gradient        | `bg-[#0d0d35]`               |
| sky-field          | `#080820` | Darkest sky edges             | `bg-[#080820]`               |
| star-white         | `#f0f0ff` | Stars, bright points          | `text-[#f0f0ff]`             |
| star-dim           | `#a0a0c0` | Faint stars                   | `text-[#a0a0c0]`             |
| celestial-blue     | `#2a4a8a` | Nebulae, deep-sky objects     | `bg-[#2a4a8a]`               |
| nebula-glow        | `#4a6aaa` | Brighter nebula regions       | `bg-[#4a6aaa]`               |

### Instruments

| Token             | Hex       | Role                          | Tailwind Class               |
|--------------------|-----------|-------------------------------|------------------------------|
| telescope-black    | `#1a1a1a` | Barrel, dark instrument body  | `bg-[#1a1a1a]`               |
| instrument-gray    | `#2a2a2e` | Panel surface, housing        | `bg-[#2a2a2e]`               |
| panel-border       | `#3a3a3e` | Panel edges, recessed frames  | `border-[#3a3a3e]`           |
| readout-green      | `#4ade80` | Active readout, status OK     | `text-[#4ade80]`             |
| readout-amber      | `#fbbf24` | Warning readout, attention    | `text-[#fbbf24]`             |
| readout-red        | `#ef4444` | Error readout, critical       | `text-[#ef4444]`             |
| lens-purple        | `#6a4a8a` | Lens coating, optical accent  | `bg-[#6a4a8a]`               |
| crosshair-white    | `rgba(240,240,255,0.15)` | Eyepiece crosshairs | SVG stroke |

### Warm Interior

| Token             | Hex       | Role                          | Tailwind Class               |
|--------------------|-----------|-------------------------------|------------------------------|
| warm-wall          | `#d8d0c8` | Observatory interior walls    | `bg-[#d8d0c8]`               |
| warm-floor         | `#c0b8a8` | Floor, lower interior         | `bg-[#c0b8a8]`               |
| desk-surface       | `#a89880` | Work desk, control surface    | `bg-[#a89880]`               |
| lamp-warm          | `#e8c878` | Warm task lighting            | `bg-[#e8c878]`               |

Rules: choose 3-5 colors per layout. Deep sky and instrument palettes dominate for observation interfaces. Dome exterior colors for structural elements. Warm interior colors are accents only — used for office or control room views. Never mix warm-interior and deep-sky as competing primary backgrounds.

## Typography Recommendations

- Observatory Dome UI favors precision typefaces. Monospaced fonts for readouts and coordinates, clean sans-serif for labels and headings.
- Recommended readout fonts: **JetBrains Mono**, **SF Mono**, **Fira Code** — for numerical displays and coordinate readouts.
- Recommended heading fonts: **Inter** (clean authority), **IBM Plex Sans** (technical precision), **DM Sans** (modern clarity).
- Recommended body fonts: **Inter** or **IBM Plex Sans** for descriptions and documentation.
- Readout display: `font-mono text-sm tracking-wider text-[#4ade80]` on `bg-[#0a0a0e]`.
- Coordinate labels: `font-mono text-[0.625rem] uppercase tracking-widest text-[rgba(240,240,255,0.5)]`.
- Heading sizes: `text-2xl` to `text-4xl`, `font-bold`, `tracking-tight`.
- Body sizes: `text-sm` to `text-base`, `font-normal`, generous `leading-relaxed`.
- Keep density low on observation screens. Data panels are compact; viewing areas are spacious.

## Component Architecture Pattern

1. Dome surface or deep sky background (the structural context — either the dome shell or the sky view).
2. Slit opening or viewport (the focal aperture through which sky content is revealed).
3. Instrument housing (dark matte panels containing controls, readouts, and indicators).
4. Data layer (star charts, celestial maps, coordinate grids — positioned within viewports or as standalone panels).
5. Control surface (buttons, knobs, sliders, and readouts styled as physical instruments with recessed wells and glowing indicators).
6. Eyepiece view (optional circular viewport with crosshairs for detailed observation).

Layout hierarchy:
- Full-page observation: dome surface framing a large slit/sky view, instrument panel at bottom or side.
- Dashboard: grid of instrument panels with readouts, a star chart in the center, rotation gauge in the corner.
- Detail view: eyepiece circle as the primary focus, surrounding metadata in compact readout displays.

## Interaction Rules

- Button press: recessed well effect — `active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:translate-y-[1px]`.
- Button hover: subtle glow on status — `hover:shadow-[0_0_12px_rgba(74,222,128,0.3)]`.
- Readout updates: numbers should snap (not scroll) to new values. Use `transition-all duration-200` for smooth value changes.
- Star chart hover: constellation lines brighten on hover — `hover:stroke-[rgba(240,240,255,0.5)]` transition.
- Dome rotation: smooth 300ms ease-out rotation animation on the azimuth gauge when the dome target changes.
- Eyepiece zoom: 200ms ease-in-out scale transition on the eyepiece view when magnification changes.
- Crosshair drift: optional slow, subtle oscillation of crosshair position (4-8s loop) simulating atmospheric seeing.
- All animations respect `prefers-reduced-motion`.

## Reusable Tailwind Tokens

- Dome surface: `bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(255,255,255,0.15),transparent_60%),linear-gradient(180deg,#e8e8e8,#d0d0d0_50%,#b8b8b8)]`
- Deep sky field: `bg-[radial-gradient(circle_at_15%_25%,#0d0d35,transparent_50%),linear-gradient(180deg,#080820,#0a0a2a)]`
- Instrument panel: `bg-gradient-to-br from-[#2a2a2e] to-[#1a1a1e] border border-[#3a3a3e] shadow-inner rounded-lg`
- Readout display: `bg-[#0a0a0e] border border-[#2a2a2e] rounded px-3 py-1 font-mono text-[#4ade80] shadow-inner`
- Green indicator: `w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80,0_0_16px_#4ade80]`
- Amber indicator: `w-2 h-2 rounded-full bg-[#fbbf24] shadow-[0_0_8px_#fbbf24,0_0_16px_#fbbf24]`
- Red indicator: `w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444,0_0_16px_#ef4444]`
- Telescope barrel: `h-12 rounded-full bg-gradient-to-b from-[#4a4a4a] via-[#1a1a1a] to-[#3a3a3a] shadow-md`
- Lens coating: `rounded-full bg-[radial-gradient(circle,#2a4a8a,#0a0a3a_80%)] border-2 border-[#3a3a3e]`
- Eyepiece: `rounded-full bg-[#060614] shadow-[inset_0_0_40px_rgba(0,0,0,0.8),0_0_0_4px_#3a3a3e]`
- Star dot: `w-1 h-1 rounded-full bg-[#f0f0ff] shadow-[0_0_4px_rgba(240,240,255,0.8)]`
- Text on sky: `text-[#f0f0ff]` or `text-[rgba(240,240,255,0.6)]`
- Text on panel: `text-[#d0d0d4]` or `text-[#9a9aa0]`
- Recessed well: `shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] rounded`
- Active glow: `shadow-[0_0_12px_rgba(74,222,128,0.3)]`
- Warm interior wall: `bg-[#d8d0c8]`
- Warm task lamp: `bg-[#e8c878] shadow-[0_0_20px_rgba(232,200,120,0.3)]`

## Quality Checklist (must pass)

- Background uses either dome surface gradient or deep sky field (no flat color fills for primary surfaces).
- Slit opening (if present) is a clear vertical gap with mechanical edges and visible sky behind.
- Star charts use thin 1px connecting lines on deep blue-black fields (no thick lines or bright connectors).
- Control panels use dark matte surfaces with recessed wells and glowing indicators.
- Readout displays use monospace fonts with green/amber/red status coloring.
- Dome rotation (if present) uses a circular gauge with tick marks and a needle indicator.
- Eyepiece view (if present) has circular framing, crosshairs, and vignetting.
- All numerical displays use monospace font and consistent formatting.
- Color contrast meets WCAG AA on all text elements (sky text, panel text, readout text).
- `prefers-reduced-motion` disables all rotation, drift, and glow-pulse animations.
- Instrument buttons have visible pressed/recessed state on `active`.
- Star and constellation colors are distinguishable from background without relying on brightness alone.

## Anti-Patterns

- Flat gray backgrounds for sky areas (sky must be deep blue-black with gradient depth).
- Thick constellation connecting lines (these are 1px precision strokes, not highways).
- Bright, saturated colors on instrument panels (instruments are muted, dark, and precise).
- Neon glow on everything (glow is reserved for status indicators and active elements only).
- Overcrowded star fields (real star charts have breathing room between objects).
- Web-form-style inputs on control panels (inputs are recessed wells with monospace readouts).
- Rounded, bubbly buttons (instrument buttons are rectangular, with subtle rounding at most).
- Decorative constellation art that is not astronomically plausible (constellations should follow real patterns).
- Warm interior colors used in observation-view layouts (warm colors belong in office/control room scenes).
- Fast-rotating dome gauges (dome rotation is smooth and deliberate, 300ms+ transitions).
- Missing crosshairs on eyepiece views (crosshairs are the defining element of an eyepiece).
- Animated star twinkling that is too fast (real stars twinkle slowly, 4-8s cycles).

## Typography and Density

- Observatory Dome UI has two density modes: observation screens (spacious, low density) and control panels (compact, high density).
- Observation screen headings: `text-2xl` to `text-4xl`, `font-bold`, `text-[#f0f0ff]` on sky.
- Control panel headings: `text-sm` to `text-lg`, `font-semibold`, `text-[#d0d0d4]` on dark panels.
- Readout values: `font-mono text-lg tracking-wider text-[#4ade80]` on `bg-[#0a0a0e]`.
- Coordinate labels: `font-mono text-[0.625rem] uppercase tracking-widest text-[rgba(240,240,255,0.5)]`.
- Star labels: `font-mono text-[0.5rem] text-[rgba(240,240,255,0.4)]` — quiet and unobtrusive.
- Body text: `text-sm` to `text-base`, `font-normal`, `leading-relaxed`, `text-[#9a9aa0]` on panels.
- Keep line-height tight on readouts (`leading-none` to `leading-tight`) and generous on descriptions.
- Panel padding: `p-3` to `p-4`. Observation viewport padding: `p-6` to `p-8`.

## Accessibility Considerations

- Verify text contrast against both dome-gray and deep-sky backgrounds — light text on dark sky usually passes, but instrument panel text must also meet AA.
- All status indicator colors (green, amber, red) must have a text label or icon companion — never communicate status by color alone.
- Readout displays must have `aria-live="polite"` for values that update in real time.
- Star chart interactive elements must be keyboard navigable with visible focus rings (`ring-2 ring-[#4ade80] ring-offset-1 ring-offset-[#0a0a2a]`).
- Dome rotation animations must respect `prefers-reduced-motion` — show the final position without the rotation animation.
- Eyepiece crosshairs are decorative; add `aria-hidden="true"` when non-interactive.
- Constellation labels must be readable at the rendered size; test at `text-[0.5rem]` to ensure legibility.
- Do not rely on glow intensity alone to convey status — combine with shape, label, or icon differences.
- Provide a non-animated fallback for all pulsing indicator glows.
- Ensure the slit opening contrast (sky behind dome) is sufficient for any overlaid text or labels.
- Control panel buttons must have clear, descriptive `aria-label` attributes — "Increase exposure time" not just "Up".
