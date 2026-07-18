---
name: space-station-ui
description: Build space station UI components (orbital habitat interior, observation cupola Earth view, zero-gravity indicators, airlock indicators, solar panel arrays, orbital trajectory displays, ISS-inspired modular panels) with curved viewport windows showing Earth, micrometeoroid data, and the confined wonder of living in orbit. Trigger this skill when the user asks for space station design, observation cupola, Earth view window, zero-gravity indicator, airlock status, solar panel array, orbital trajectory display, ISS modular panels, micrometeoroid data readout, altitude velocity telemetry, space habitat interior, or orbital habitat interfaces.
---

# Space Station UI

Use this skill to design and implement interfaces inspired by the orbital space station: curved observation cupola windows revealing the blue limb of Earth below, modular hexagonal and rectangular panels bolted to a pressurized frame, airlock indicator lights glowing green for pressurized and red for evacuate, solar panel arrays silhouetted against the starfield, zero-gravity particles drifting through the cabin, telemetry readouts displaying altitude and velocity in glowing monospace, and the confined, humming wonder of living two hundred fifty miles above the planet.

## Non-Negotiable Foundations

- Space Station UI simulates the interior of an orbital habitat: modular panels, observation cupolas, airlock indicators, solar arrays, trajectory displays, and zero-g ambiance.
- The observation cupola is the SIGNATURE hero element — a circular or curved viewport window showing the Earth limb blue gradient, the curve of the planet, and the blackness of space beyond. It must appear as the focal point of the layout.
- Modular panel grids are the signature structural containers — hexagonal or rectangular modules bolted together with visible fasteners, seal lines, and panel gaps, evoking the ISS interior.
- Airlock indicator lights are the signature status system — green for pressurized, red for evacuate, amber for caution, using labeled LED-style indicators on every critical section.
- The orbital trajectory display is the signature data visualization — an SVG arc showing the station's orbital path around Earth, with position markers, apogee/perigee labels, and a moving current-position dot.
- Solar panel array silhouette is the signature decorative reinforcement — dark blue grid-textured rectangles extending from the station frame, used as decorative borders and section accents.
- Zero-gravity floating particles are the signature ambient effect — small particles drifting slowly upward and laterally, conveying weightlessness in the cabin atmosphere.
- Telemetry data readouts are the signature text treatment — altitude, velocity, orbital period, and attitude displayed in glowing monospace with subtle scroll or update flicker.
- Colors are station white-gray, space black, Earth blue, Earth limb cyan glow, warning amber, and status green — the palette of a real orbital habitat.
- The aesthetic is confined, engineered, luminous, and quietly awe-inspiring — the controlled environment of a pressurized module with the infinite spectacle of Earth visible through every window.

## Core Material Recipes

### 1) Observation Cupola Window

The signature circular viewport showing Earth limb, usable as hero sections and focal points.

- Cupola frame: `bg-gradient-to-b from-[#9a9a9e] via-[#8a8a8e] to-[#6a6a6e] rounded-full p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15)] border-4 border-[#7a7a7e]`.
- Window glass: `rounded-full overflow-hidden relative bg-gradient-to-b from-[#000814] via-[#001428] to-[#002854]`.
- Earth limb gradient: `absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#1a4a8a] via-[#2a6abf] to-[#3a8adf] rounded-b-full`.
- Earth atmosphere glow: `absolute bottom-[55%] inset-x-0 h-6 bg-gradient-to-t from-[#2a6abf]/60 to-transparent blur-[3px]`.
- Limb highlight (cyan): `absolute bottom-[58%] inset-x-[10%] h-1 bg-[#5acaf0] blur-[1px] opacity-80`.
- Cloud swirl overlay: `absolute bottom-[20%] left-[20%] w-16 h-6 bg-white/10 rounded-full blur-[4px]`.
- Starfield: `absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_15%,white,transparent),radial-gradient(1px_1px_at_60%_10%,white,transparent),radial-gradient(1px_1px_at_80%_25%,rgba(255,255,255,0.7),transparent),radial-gradient(1px_1px_at_35%_8%,rgba(255,255,255,0.5),transparent)]`.
- Glass reflection streak: `absolute top-2 left-4 w-8 h-20 bg-gradient-to-b from-white/15 to-transparent rounded-full rotate-12 blur-[2px]`.
- Frame bolts: child elements at cardinal points `w-1.5 h-1.5 rounded-full bg-[#5a5a5e] shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]`.

Earth limb glow pulse keyframes:
```css
@keyframes limb-glow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
```

### 2) Modular Panel Grid

Hexagonal or rectangular modules bolted together, the signature structural container.

- Rectangular module: `bg-gradient-to-b from-[#d0d0d4] via-[#c8c8cc] to-[#b0b0b4] rounded-md p-4 border border-[#8a8a8e] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.5)] relative`.
- Panel gap separator: `border-r-2 border-[#5a5a5e]` between adjacent modules.
- Bolt fasteners (corners): `before:absolute before:top-1 before:left-1 before:w-2 before:h-2 before:rounded-full before:bg-[#6a6a6e] before:shadow-[inset_0_1px_1px_rgba(0,0,0,0.4)]` (repeat for each corner with additional pseudo or child elements).
- Seal line: `after:absolute after:inset-2 after:border after:border-dashed after:border-[#9a9a9e]/40 after:rounded-sm`.
- Module label tab: `absolute -top-2 left-3 bg-[#8a8a8e] text-[#000814] text-xs font-mono font-bold px-2 py-0.5 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.3)]`.
- Hexagonal variant: `bg-gradient-to-b from-[#d0d0d4] to-[#a0a0a4] [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)] p-4`.
- Warning stripe variant: `border-t-4 border-[#ffaa00]`.

### 3) Airlock Indicator Lights

LED-style status indicators with green/amber/red labeling.

- Indicator housing: `bg-[#1a1a1e] rounded-sm p-2 border border-[#3a3a3e] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] flex items-center gap-2`.
- Green LED (pressurized): `w-3 h-3 rounded-full bg-[#00ff66] shadow-[0_0_8px_rgba(0,255,102,0.7),0_0_16px_rgba(0,255,102,0.4),inset_0_0_2px_rgba(255,255,255,0.5)]`.
- Red LED (evacuate): `w-3 h-3 rounded-full bg-[#ff2d2d] shadow-[0_0_8px_rgba(255,45,45,0.7),0_0_16px_rgba(255,45,45,0.4),inset_0_0_2px_rgba(255,255,255,0.5)]`.
- Amber LED (caution): `w-3 h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.7),0_0_16px_rgba(255,170,0,0.4),inset_0_0_2px_rgba(255,255,255,0.5)]`.
- Label: `font-mono text-xs uppercase tracking-wider text-[#d0d0d4]`.
- Status text: `font-mono text-sm font-bold text-[#00ff66]` (green), `text-[#ff2d2d]` (red), `text-[#ffaa00]` (amber).

LED pulse keyframes:
```css
@keyframes led-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px currentColor, 0 0 16px currentColor; }
  50% { opacity: 0.7; box-shadow: 0 0 4px currentColor, 0 0 8px currentColor; }
}
```

### 4) Orbital Trajectory Display

SVG arc showing the station's orbital path with position markers.

- Display container: `bg-[#000814] rounded-lg p-4 border border-[#3a5a8a] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_0_16px_rgba(42,106,191,0.1)] relative overflow-hidden`.
- Grid overlay: `before:absolute before:inset-0 before:bg-[linear-gradient(rgba(90,202,240,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(90,202,240,0.08)_1px,transparent_1px)] before:bg-[length:20px_20px]`.
- SVG orbit path: `<path d="M20,100 Q150,20 280,100 T540,100" stroke="#5acaf0" stroke-width="1.5" fill="none" stroke-dasharray="4 4" opacity="0.5"/>`.
- SVG current position: `<circle cx="150" cy="60" r="4" fill="#00ff66" filter="drop-shadow(0_0_4px #00ff66)"/>`.
- Position trail: `<circle cx="140" cy="62" r="2" fill="#00ff66" opacity="0.4"/>` (trailing dots decreasing opacity).
- Apogee/perigee labels: `<text x="20" y="115" fill="#8a8a8e" font-family="monospace" font-size="10">PERIGEE 408km</text>`.
- Earth disc: `<circle cx="280" cy="140" r="50" fill="url(#earth-grad)" opacity="0.6"/>` with radial gradient `#2a6abf` to `#001428`.

Orbit position keyframes:
```css
@keyframes orbit-move {
  0% { offset-distance: 0%; }
  100% { offset-distance: 100%; }
}
```

### 5) Solar Panel Array Silhouette

Dark blue grid-textured panels as decorative borders and section accents.

- Panel body: `bg-gradient-to-b from-[#1a3a6a] to-[#0a1a3a] relative overflow-hidden border border-[#3a5a8a]`.
- Solar cell grid: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(90,202,240,0.15)_11px,rgba(90,202,240,0.15)_12px),repeating-linear-gradient(90deg,transparent,transparent_11px,rgba(90,202,240,0.15)_11px,rgba(90,202,240,0.15)_12px)]`.
- Reflective sheen: `after:absolute after:inset-0 after:bg-[linear-gradient(115deg,transparent_35%,rgba(90,202,240,0.12)_50%,transparent_65%)]`.
- Support strut: `h-1 bg-gradient-to-r from-[#5a5a5e] via-[#8a8a8e] to-[#5a5a5e]`.
- Panel edge frame: `border-2 border-[#3a5a8a] shadow-[0_2px_8px_rgba(0,0,0,0.4)]`.

### 6) Zero-Gravity Floating Particles

Ambient weightless particles drifting through the cabin for atmospheric depth.

- Particle field container: `absolute inset-0 overflow-hidden pointer-events-none`.
- Particle base: `absolute w-1 h-1 rounded-full bg-[#5acaf0]/30`.
- Large particle: `w-1.5 h-1.5 rounded-full bg-white/20`.
- Small bright particle: `w-0.5 h-0.5 rounded-full bg-[#5acaf0]/50`.
- Slow drift animation: `animate-[zero-g-drift_12s_ease-in-out_infinite]`.
- Stagger via inline style: `style="animation-delay: -3s; left: 15%; bottom: 20%;"` for each particle.

Zero-g drift keyframes:
```css
@keyframes zero-g-drift {
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 0.6; }
  50% { transform: translate(15px, -40px); opacity: 0.4; }
  90% { opacity: 0.3; }
  100% { transform: translate(-10px, -80px); opacity: 0; }
}
```

### 7) Telemetry Data Readout

Glowing monospace data display for altitude, velocity, and orbital parameters.

- Readout panel: `bg-[#000814]/90 rounded-md p-4 border border-[#3a5a8a] font-mono shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_0_12px_rgba(42,106,191,0.08)]`.
- Data label: `text-[#5a7a9a] text-xs uppercase tracking-[0.15em]`.
- Data value: `text-[#5acaf0] text-lg font-bold [text-shadow:0_0_6px_rgba(90,202,240,0.5)]`.
- Data unit: `text-[#3a6a9a] text-sm`.
- Scanning line: `before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-[#5acaf0]/40 before:to-transparent before:animate-[scan-line_4s_linear_infinite]`.
- Grid lines: `after:absolute after:inset-0 after:bg-[linear-gradient(rgba(90,202,240,0.05)_1px,transparent_1px)] after:bg-[length:100%_24px]`.
- Critical value variant: `text-[#ffaa00] [text-shadow:0_0_6px_rgba(255,170,0,0.6)]`.
- Danger value variant: `text-[#ff2d2d] [text-shadow:0_0_6px_rgba(255,45,45,0.6)]`.

Scan line keyframes:
```css
@keyframes scan-line {
  0% { transform: translateY(0); }
  100% { transform: translateY(200px); }
}
```

### 8) Space Station Exterior Hull Accent

Brushed metal hull texture for panel borders, section dividers, and frame elements.

- Hull surface: `bg-gradient-to-b from-[#b0b0b4] via-[#9a9a9e] to-[#7a7a7e] relative overflow-hidden`.
- Brushed metal texture: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(0,0,0,0.04)_1px,rgba(0,0,0,0.04)_2px)]`.
- Rivet line: `flex items-center gap-4 px-2` with rivet children `w-1.5 h-1.5 rounded-full bg-[#6a6a6e] shadow-[inset_0_1px_1px_rgba(0,0,0,0.4),0_1px_1px_rgba(255,255,255,0.2)]`.
- Panel seam: `h-px bg-gradient-to-r from-transparent via-[#5a5a5e] to-transparent`.
- Warning chevron stripe: `bg-[repeating-linear-gradient(45deg,#ffaa00_0px,#ffaa00_8px,#1a1a1e_8px,#1a1a1e_16px)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Station White | `#d0d0d4` | Module surfaces, labels, text on dark, primary hull tone |
| Station Light | `#e8e8ec` | Module highlights, surface reflections, bright trim |
| Station Gray | `#8a8a8e` | Module borders, structural framing, neutral mid-tone |
| Station Dark | `#6a6a6e` | Hull shadows, bolt fasteners, deep panel edges |
| Space Black | `#000814` | Display backgrounds, deep space areas, window interior |
| Space Blue-Black | `#001428` | Intermediate space gradients, display panel bases |
| Earth Blue | `#2a6abf` | Earth limb, orbital trajectory lines, primary data accent |
| Earth Blue Deep | `#1a4a8a` | Earth ocean depths, trajectory path fills |
| Earth Blue Light | `#3a8adf` | Earth surface highlights, coastal glow |
| Earth Limb Cyan | `#5acaf0` | Limb glow, telemetry text glow, grid lines, LED cyan |
| Warning Amber | `#ffaa00` | Caution LEDs, critical values, warning chevrons |
| Status Green | `#00ff66` | Pressurized indicator, position markers, go status |
| Status Red | `#ff2d2d` | Evacuate indicator, danger values, alert status |
| Star White | `#ffffff` | Starfield points, specular highlights, bright reflections |
| Solar Panel Blue | `#1a3a6a` | Solar array surfaces, dark accent panels |
| Solar Grid Cyan | `#3a5a8a` | Solar cell grid lines, trajectory borders |
| Hull Metal Dark | `#5a5a5e` | Rivets, seams, deep structural elements |

Rules: Station white-gray is the dominant structural material — every module, panel, and hull surface uses the brushed metal gradient. Space black is the dominant background for displays, windows, and deep sections. Earth blue is the primary data and trajectory accent color. Earth limb cyan is the signature glow color for telemetry, grid lines, and readout text. Warning amber, status green, and status red are reserved for airlock indicators and status systems only — they are never decorative. Star white provides high-contrast highlights and starfield points. The palette balances warm metallic hull tones with the cool blue-cyan of space and Earth.

## Typography Recommendations

Space Station typography mixes mission-control monospace with engineered industrial labels:

- **Display headings:** Orbitron, Rajdhani, or Saira (engineered, geometric, aerospace-grade).
- **Telemetry data:** Share Tech Mono, IBM Plex Mono, or Roboto Mono (mission-control monospace for all data readouts).
- **Module labels:** `font-mono font-bold text-xs uppercase tracking-[0.15em]` (stenciled panel identification).
- **Data values:** `font-mono font-bold text-lg [text-shadow:0_0_6px_currentColor]` (glowing telemetry numbers).
- **Body text:** Inter, Roboto, or Exo 2 at `font-normal` (clean, engineered readability).
- **Warning labels:** `font-mono font-bold text-sm uppercase tracking-wider text-[#ffaa00]` (caution stenciled text).
- **Crew notices / announcements:** Rajdhani or Saira Semi Condensed (official crew communication style).
- **Window/cupola captions:** `font-mono text-xs text-[#5acaf0]/70 uppercase tracking-wider` (observation log captions).
- Text on telemetry displays should glow: `[text-shadow:0_0_6px_rgba(90,202,240,0.5)]`.
- Text on station hull surfaces should use space black (`#000814`) for high contrast.
- Text on space black displays should use Earth limb cyan (`#5acaf0`) or station white (`#d0d0d4`).

## Component Architecture Pattern

1. Observation cupola as the hero/focal element (circular window with Earth limb, starfield, atmosphere glow).
2. Modular panel grid as the primary structural layout (rectangular or hexagonal modules bolted together with seal lines and fasteners).
3. Telemetry data readout panels for all quantitative content (altitude, velocity, period — glowing monospace on space black).
4. Airlock indicator lights on every critical or status-oriented section (green/amber/red LEDs with labeled status text).
5. Orbital trajectory display for navigation, progress, or path data (SVG arc with position markers and Earth disc).
6. Solar panel array silhouette as decorative borders or section dividers (dark blue grid-textured panels with support struts).
7. Zero-gravity floating particles as ambient atmospheric layer (slow-drifting cyan particles across the background).
8. Hull metal accent strips for section headers and structural framing (brushed metal with rivets and panel seams).
9. Warning chevron stripes for caution sections and critical boundaries (amber/black diagonal hazard pattern).
10. Starfield background closing the layout (deep space with scattered star points beyond the station windows).

## Interaction Rules

- Default state: the station hums with life — telemetry gently scanning, LEDs softly pulsing, particles drifting in zero-g, Earth limb glowing.
- Hover (modules): module brightens slightly, revealing panel seal lines and bolt detail.
  - `hover:shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_3px_rgba(255,255,255,0.6)] hover:border-[#a0a0a4] transition-all duration-200`.
- Hover (airlock LEDs): LED brightens and glow intensifies.
  - `hover:shadow-[0_0_12px_currentColor,0_0_24px_currentColor,inset_0_0_2px_rgba(255,255,255,0.6)] transition-all duration-150`.
- Active (buttons): depress like pressing a physical control panel button.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5acaf0] focus:ring-offset-2 focus:ring-offset-[#000814]`.
- Telemetry value update: value flashes cyan, scan line sweeps across the readout panel.
- Airlock state change: LED transitions color (green to amber to red) with a brief bright flash.
- Trajectory position: current-position dot moves along the orbital path in real-time or on interaction.
- Cupola zoom: Earth limb detail increases on focus, cloud swirls become more visible.
- Transitions: `transition-all duration-200` (crisp, engineered — like a pressure seal locking into place).
- Continuous animations: zero-g particle drift, LED pulse, telemetry scan line, Earth limb glow pulse, starfield twinkle.

Starfield twinkle keyframes:
```css
@keyframes star-twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

## Reusable Tailwind Tokens

- Cupola frame: `bg-gradient-to-b from-[#9a9a9e] via-[#8a8a8e] to-[#6a6a6e] rounded-full border-4 border-[#7a7a7e] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15)]`
- Earth limb: `bg-gradient-to-t from-[#1a4a8a] via-[#2a6abf] to-[#3a8adf]`
- Earth atmosphere glow: `bg-gradient-to-t from-[#2a6abf]/60 to-transparent blur-[3px]`
- Limb highlight: `bg-[#5acaf0] blur-[1px]`
- Module panel: `bg-gradient-to-b from-[#d0d0d4] via-[#c8c8cc] to-[#b0b0b4] rounded-md border border-[#8a8a8e] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.5)]`
- Module label tab: `bg-[#8a8a8e] text-[#000814] text-xs font-mono font-bold px-2 py-0.5 rounded-sm`
- Airlock housing: `bg-[#1a1a1e] rounded-sm border border-[#3a3a3e] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]`
- Green LED: `bg-[#00ff66] shadow-[0_0_8px_rgba(0,255,102,0.7),0_0_16px_rgba(0,255,102,0.4)]`
- Red LED: `bg-[#ff2d2d] shadow-[0_0_8px_rgba(255,45,45,0.7),0_0_16px_rgba(255,45,45,0.4)]`
- Amber LED: `bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.7),0_0_16px_rgba(255,170,0,0.4)]`
- Trajectory display: `bg-[#000814] rounded-lg border border-[#3a5a8a] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_0_16px_rgba(42,106,191,0.1)]`
- Telemetry panel: `bg-[#000814]/90 rounded-md border border-[#3a5a8a] font-mono shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_0_12px_rgba(42,106,191,0.08)]`
- Telemetry value: `text-[#5acaf0] font-mono font-bold [text-shadow:0_0_6px_rgba(90,202,240,0.5)]`
- Solar panel: `bg-gradient-to-b from-[#1a3a6a] to-[#0a1a3a] border border-[#3a5a8a]`
- Solar grid: `bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(90,202,240,0.15)_11px,rgba(90,202,240,0.15)_12px),repeating-linear-gradient(90deg,transparent,transparent_11px,rgba(90,202,240,0.15)_11px,rgba(90,202,240,0.15)_12px)]`
- Hull metal: `bg-gradient-to-b from-[#b0b0b4] via-[#9a9a9e] to-[#7a7a7e]`
- Warning chevron: `bg-[repeating-linear-gradient(45deg,#ffaa00_0px,#ffaa00_8px,#1a1a1e_8px,#1a1a1e_16px)]`

## Quality Checklist (must pass)

- At least one observation cupola window element (circular viewport with Earth limb gradient and starfield).
- Modular panel grid present with visible seal lines, bolt fasteners, or panel gaps.
- Airlock indicator lights present with green/amber/red LED styling on at least one status section.
- Telemetry data readout panel present with glowing monospace values on space black background.
- Orbital trajectory display present with SVG arc, position markers, and Earth reference.
- Solar panel array silhouette present as decorative border or section accent.
- Zero-gravity floating particles present as ambient atmospheric layer.
- Hull metal brushed texture present on at least one structural element (rivets or panel seams).
- Earth limb cyan glow used for all telemetry text and grid line glows.
- Color palette is station white-gray + space black + Earth blue + limb cyan + amber + green + red.
- Typography mixes engineered display fonts with mission-control monospace telemetry.
- Warning chevron stripes present on at least one caution or critical boundary.
- The aesthetic reads as orbital space station interior — confined, engineered, luminous, awe-inspiring.
- Everything feels pressurized, modular, and quietly humming with the wonder of orbit.

## Anti-Patterns

- Missing the observation cupola window (the curved Earth viewport is the instant station identity signal).
- Flat single-color module panels (station modules are brushed metal with gradients, fasteners, and seal lines).
- Using bright decorative colors for LEDs (status LEDs are strictly green/amber/red — never decorative blue or purple).
- Missing telemetry glow on data values (mission-control text must illuminate with cyan text-shadow).
- Square corners on cupola windows (the viewport is circular or curved — never rectangular).
- Plain dark backgrounds without starfield or space gradient (space backgrounds need star points and depth).
- Modern flat minimal surfaces without hull texture (station surfaces are metallic, riveted, and sealed).
- Missing the orbital trajectory display for navigation data (the SVG arc is the signature path visualization).
- Static, lifeless panels (the station is alive — particles drift, LEDs pulse, telemetry scans).
- Using generic status colors without LED glow (airlock indicators must have radial glow shadows).
- Missing module label tabs (every module needs a stenciled identification label).
- Sans-serif body text without monospace telemetry elements (needs both engineered headings and mono data).
- No zero-gravity ambient effect (floating particles are the signature weightlessness signal).
- Overuse of warning amber to the point of alarm fatigue (amber/red are reserved for actual caution states).
- Sterile, corporate feel (the space station is confined wonder, not an office — the Earth is always visible).

## Accessibility Considerations

- Observation cupola windows are decorative viewports — do not place critical text content directly on the Earth limb gradient.
- Telemetry display text uses cyan glow on near-black backgrounds — verify WCAG AA contrast for `#5acaf0` on `#000814`.
- Airlock indicator LEDs must not rely on color alone — always include text labels (PRESSURIZED, EVACUATE, CAUTION).
- LED pulse animation must respect `prefers-reduced-motion` (steady glow instead of pulsing).
- Zero-gravity particle drift must respect `prefers-reduced-motion` (static particles instead of drifting).
- Telemetry scan line must respect `prefers-reduced-motion` (static panel instead of scanning line).
- Earth limb glow pulse must respect `prefers-reduced-motion` (steady glow instead of pulsing).
- Starfield, solar panel grid, and hull brushed textures are decorative — `aria-hidden="true"` on purely decorative layers.
- Trajectory SVG must include `<title>` and `<desc>` elements describing the orbital path for screen readers.
- Focus states: `focus:ring-2 focus:ring-[#5acaf0]` (cyan ring visible against hull and space backgrounds).
- Touch targets minimum 44x44px on all interactive modules, LEDs, and trajectory controls.
- Color should not be the sole indicator of airlock status — pair every LED with a text label and icon.
- Verify WCAG AA contrast for space black (`#000814`) text on station white (`#d0d0d4`) module surfaces.
- Verify WCAG AA contrast for station white (`#d0d0d4`) text on space black (`#000814`) display backgrounds.
- Warning amber (`#ffaa00`) text must meet contrast minimums or be paired with an icon for readability.
- Telemetry values must be readable with glow disabled — the glow is enhancement, not the sole legibility source.
- Module panel content must be navigable via keyboard with logical tab order following the visual grid layout.
