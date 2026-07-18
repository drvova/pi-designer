---
name: space-station-module-ui
description: Build space station module UI components (cylindrical habitat, viewport Earth view, equipment racks, handrails for zero-g, airlock door, MRE packets) with the functional white interior of orbital habitation, Earth visible through small viewports, and the organized clutter of life in microgravity. Trigger this skill when the user asks for space station, orbital module, ISS interior, habitat module, viewport Earth, equipment rack, zero-g handrail, airlock door, MRE packet, microgravity living, space habitat, spacecraft interior, crew compartment, or orbital station aesthetics.
---

# Space Station Module UI

Use this skill to design and implement space station module interfaces with cylindrical habitat interiors, Earth-viewing viewports, modular equipment racks, zero-gravity handrails, airlock doors, MRE packet details, and the functional white-and-gray atmosphere of long-duration orbital habitation.

## Non-Negotiable Foundations

- A space station module is a cylinder in vacuum: the interior is a rounded tube with curved ceiling panels following the module cross-section, equipment mounted to all four walls, and handrails everywhere for zero-gravity locomotion.
- The palette is functional and clinical: white and light gray panels dominate, with equipment in medium gray, Earth blue visible through viewports, yellow safety handrails, and green status indicators. It is bright but not sterile — lived-in and functional.
- Equipment is modular and labeled: racks are standardized bay units with mounting rails, handle pulls, identification labels, and status LEDs. Everything has a label, a handle, and a procedure card.
- Zero gravity means no up or down: visual cues like handrails, equipment orientation, and viewport placement establish the convention, but the interface should suggest floating and weightlessness.
- Clutter is organized: personal items are velcroed to surfaces, MRE packets float in mesh bags, photos are taped to equipment panels, and crew personalization coexists with military-grade organization.
- Lighting is even and functional: LED panel lighting from the ceiling, supplemented by individual equipment lights and the cool blue glow of Earth through the viewport. No dramatic shadows.
- Typography is technical and systematic: equipment labels use clean sans-serif at small sizes, status displays use monospace, and identification numbers use fixed-width fonts for alignment in rack columns.
- The emotional register is quiet competence: life in orbit is routine but extraordinary, the interface should feel like a workplace that happens to be floating 400 kilometers above the Earth.

## Core Material Recipes

### 1) Cylindrical Module Interior (the foundational surface)

The signature space station surface: a rounded rectangle with curved ceiling suggesting the cylindrical cross-section of the module.

- Background: `bg-gradient-to-b from-[#d0d0d0] via-[#e0e0e0] to-[#d8d8d8]` — light gray with subtle vertical variation.
- Curved ceiling: top corners `rounded-t-[40px]` and a subtle ceiling curve using `before` pseudo-element with `bg-gradient-to-b from-[#c0c0c0] to-transparent rounded-t-[40px] h-8`.
- Floor line: bottom `after` pseudo-element `bg-gradient-to-b from-transparent to-[#b8b8b8] h-6` suggesting the floor-wall junction.
- Panel seams: vertical and horizontal `bg-[#d0d0d0]` lines dividing the interior into standardized panel sections, using `border border-[#c8c8c8]`.
- Surface texture: very subtle `bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,0,0,0.02)_1px,rgba(0,0,0,0.02)_2px)]` for the slight texture of painted metal.
- Mounting points: small `w-2 h-2 rounded-full bg-[#b0b0b0] border border-[#a0a0a0]` dots at panel intersections suggesting bolt/rivet locations.

```css
.module-interior {
  background: linear-gradient(180deg, #d0d0d0 0%, #e0e0e0 30%, #e0e0e0 70%, #d8d8d8 100%);
  position: relative;
}
.module-interior::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  background: linear-gradient(180deg, #c0c0c0, transparent);
  border-radius: 40px 40px 0 0;
  pointer-events: none;
}
```

### 2) Earth Viewport (the emotional anchor)

The circular window showing Earth below: a small round viewport in the module wall with the blue marble visible through thick glass.

- Viewport frame: `w-36 h-36 rounded-full bg-gradient-to-br from-[#7a7a7a] via-[#6a6a6a] to-[#5a5a5a] border-3 border-[#4a4a4a] p-2 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_2px_6px_rgba(255,255,255,0.1)]`.
- Inner bezel: `rounded-full bg-[#5a5a5a] border border-[#4a4a4a] p-1.5`.
- Glass: innermost `rounded-full bg-[#1a3a6a] overflow-hidden relative` with the Earth scene inside.
- Earth surface: `bg-gradient-to-br from-[#2a6abf] via-[#1a5aaf] to-[#0a4a9f]` base with white cloud swirl overlays using `radial-gradient` at various positions.
- Cloud swirls: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(255,255,255,0.3)_0%,transparent_40%)]`.
- Atmospheric edge: inner `shadow-[inset_0_0_20px_rgba(100,160,255,0.3)]` for the blue atmospheric glow.
- Glass reflection: `after` pseudo-element with `bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-full` at a 30-degree angle.
- Earth glow: the viewport casts a subtle blue light onto surrounding surfaces: `shadow-[0_0_30px_rgba(42,106,191,0.15)]` on the frame.

```html
<div class="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#7a7a7a] via-[#6a6a6a] to-[#5a5a5a] p-2 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
  <div class="w-full h-full rounded-full bg-[#5a5a5a] p-1.5">
    <div class="w-full h-full rounded-full bg-gradient-to-br from-[#2a6abf] via-[#1a5aaf] to-[#0a4a9f] overflow-hidden relative shadow-[inset_0_0_20px_rgba(100,160,255,0.3)]">
      <!-- Cloud swirls -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(255,255,255,0.3)_0%,transparent_40%)]"></div>
    </div>
  </div>
</div>
```

### 3) Equipment Rack Grid (modular bay system)

The standard storage and equipment mounting system: rectangular bays with mounting rails, handle pulls, identification labels, and status LEDs.

- Rack frame: `bg-[#8a8a8a] border border-[#6a6a6a] rounded-sm p-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)]`.
- Bay unit: `bg-gradient-to-b from-[#e8e8e8] via-[#e0e0e0] to-[#d8d8d8] border border-[#b8b8b8] rounded-sm p-2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]`.
- Mounting rail: left `w-1.5 bg-[#6a6a6a] rounded-full` vertical strip with `w-1 h-1 rounded-full bg-[#5a5a5a]` bolt holes at intervals.
- Handle pull: `w-12 h-3 bg-gradient-to-b from-[#9a9a9a] to-[#7a7a7a] rounded-full border border-[#6a6a6a] shadow-[0_1px_2px_rgba(0,0,0,0.2)]` centered at the bottom of each bay.
- Label strip: `bg-white/80 border border-[#c0c0c0] rounded-sm px-1.5 py-0.5` with `text-[#3a3a3a] text-[10px] font-mono uppercase tracking-wide`.
- Status LED: `w-2 h-2 rounded-full` with green `bg-[#00ff66] shadow-[0_0_4px_#00ff66]` or amber `bg-[#e8c020] shadow-[0_0_4px_#e8c020]` positioned at the top-right corner of each bay.
- Ventilation slot: `w-full h-0.5 bg-[#b8b8b8] my-1` horizontal line at the top of each bay unit suggesting airflow vents.

```css
.equipment-rack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2px;
  background: #8a8a8a;
  padding: 2px;
  border: 1px solid #6a6a6a;
}
.rack-bay {
  background: linear-gradient(180deg, #e8e8e8 0%, #e0e0e0 50%, #d8d8d8 100%);
  border: 1px solid #b8b8b8;
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.5);
}
```

### 4) Yellow Zero-Gravity Handrails

The safety handrails running along module walls for crew locomotion in microgravity.

- Rail tube: `h-3 bg-gradient-to-b from-[#e8d020] via-[#e0c020] to-[#c8a818] rounded-full border border-[#a0900a] shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.
- Mounting brackets: `w-4 h-5 bg-[#8a8a8a] border border-[#6a6a6a] rounded-sm` at each end and midpoint, with `w-1.5 h-1.5 rounded-full bg-[#5a5a5a]` bolt detail.
- Rail runs: horizontal `w-full` along module walls, vertical `h-full` between decks, and angled `rotate-45` for diagonal transitions.
- Grip texture: subtle `bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.05)_3px,rgba(0,0,0,0.05)_4px)]` across the rail surface.
- End caps: `w-3 h-3 rounded-full bg-[#c8a818] border border-[#a0900a]` at each rail terminus.
- Safety stripes: optional high-visibility `bg-[repeating-linear-gradient(45deg,#e8d020,#e8d020_2px,#c8a818_2px,#c8a818_6px)]` on critical grab points.

```html
<div class="relative w-full h-3 bg-gradient-to-b from-[#e8d020] via-[#e0c020] to-[#c8a818] rounded-full border border-[#a0900a] shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
  <!-- Mounting bracket -->
  <div class="absolute -left-1 -top-1 w-4 h-5 bg-[#8a8a8a] border border-[#6a6a6a] rounded-sm"></div>
  <div class="absolute -right-1 -top-1 w-4 h-5 bg-[#8a8a8a] border border-[#6a6a6a] rounded-sm"></div>
</div>
```

### 5) Circular Airlock Door

The sealed entry/exit point: a heavy circular door with a mechanical locking mechanism and status indicators.

- Door body: `w-56 h-56 rounded-full bg-gradient-to-br from-[#7a7a7a] via-[#6a6a6a] to-[#5a5a5a] border-4 border-[#4a4a4a] shadow-[0_6px_24px_rgba(0,0,0,0.3)]`.
- Locking bolts: 6 `w-3 h-3 rounded-full bg-gradient-to-br from-[#8a8a8a] to-[#5a5a5a] border border-[#4a4a4a]` evenly spaced around the door perimeter at 60-degree intervals.
- Center wheel: `w-14 h-14 rounded-full bg-gradient-to-br from-[#9a9a9a] to-[#6a6a6a] border-2 border-[#5a5a5a]` with 3 spokes as `bg-[#7a7a7a] rounded-full` bars crossing through the center.
- Pressure gauge: small `w-8 h-8 rounded-full bg-[#2a2a2a] border border-[#4a4a4a]` mounted on the door face showing internal/external pressure differential.
- Status ring: `rounded-full border-2 border-[#00ff66]` or `border-[#ff4444]` inside the door frame indicating sealed or unsealed state.
- Inner viewport: `w-16 h-16 rounded-full bg-[#1a3a6a] border-2 border-[#5a5a5a]` small window in the door center showing the adjacent module or EVA space.
- Label: `text-[#3a3a3a] text-[10px] font-mono uppercase tracking-widest` below the door reading "AIRLOCK" and the bay identifier.

### 6) MRE Packet / Velcro-Attached Item

The personal and consumable items that define lived-in space station life.

- MRE wrapper: `w-20 h-28 bg-gradient-to-b from-[#c4b898] to-[#b0a880] border border-[#9a9070] rounded-sm shadow-[1px_2px_4px_rgba(0,0,0,0.15)]` floating at a slight angle.
- Label on wrapper: `bg-white/70 border border-[#c0b890] rounded-sm p-1` with `text-[#3a3a3a] text-[8px] font-mono` showing meal designation.
- Velcro tab: small `w-6 h-3 bg-[#e8e0d0] border border-[#c0b890] rounded-sm` at the top of the packet with a textured dot pattern.
- Velcro dot on wall: `w-6 h-6 rounded-full bg-[#e8e0d0] border border-[#d0c8b8]` with `bg-[repeating-radial-gradient(circle,transparent_0px,transparent_1px,rgba(0,0,0,0.08)_1px,rgba(0,0,0,0.08)_2px)]` texture.
- Floating items: use `animate-[float_6s_ease-in-out_infinite]` with a gentle bobbing motion.

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(1deg); }
}
.velcro-texture {
  background-image: repeating-radial-gradient(circle, transparent 0px, transparent 1px, rgba(0,0,0,0.08) 1px, rgba(0,0,0,0.08) 2px);
}
```

### 7) Status Indicator Light Panel

The wall-mounted panel showing all module system statuses.

- Panel: `bg-[#e0e0e0] border border-[#b8b8b8] rounded-lg p-3 shadow-[0_2px_8px_rgba(0,0,0,0.1)]`.
- LED grid: rows of status lights in `grid grid-cols-8 gap-1.5`.
- Active LED: `w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66]`.
- Warning LED: `w-2.5 h-2.5 rounded-full bg-[#e8c020] shadow-[0_0_6px_#e8c020]`.
- Critical LED: `w-2.5 h-2.5 rounded-full bg-[#ff4444] shadow-[0_0_6px_#ff4444] animate-pulse`.
- Inactive LED: `w-2.5 h-2.5 rounded-full bg-[#b0b0b0]`.
- Section labels: `text-[#5a5a5a] text-[9px] font-mono uppercase tracking-widest` above each row.
- Panel mounting: 4 corner `w-2 h-2 rounded-full bg-[#c0c0c0] border border-[#a0a0a0]` screw heads.

### 8) Crew Workstation Display

The flat-panel display at each crew work position showing procedures, telemetry, and communications.

- Monitor frame: `w-72 h-48 bg-[#3a3a3a] border-2 border-[#2a2a2a] rounded-lg p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3)]`.
- Screen: `w-full h-full bg-[#0a1a2a] rounded` with content area.
- Screen content: `text-[#00ff66] font-mono text-xs` for telemetry, `text-[#e0e0e0] text-sm` for procedures.
- Status bar: top `h-4 bg-[#1a2a3a] flex items-center px-2 gap-2` with `text-[#8a8a8a] text-[9px] font-mono`.
- Task light: `w-6 h-2 bg-[#e0d0a0] rounded-full shadow-[0_0_12px_rgba(224,208,160,0.4)]` attached to the monitor top edge.
- Mounting arm: `w-2 h-8 bg-[#6a6a6a] rounded` connecting the monitor to the module wall.

## Color Palette System

### Core Space Station Module Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Module White | `#e0e0e0` | Painted interior panels | Primary wall/ceiling surfaces |
| Panel Light | `#e8e8e8` | Lit panel surface | Highlights, raised surfaces |
| Panel Shadow | `#d0d0d0` | Shadowed panel | Gradient midtones |
| Floor Gray | `#b8b8b8` | Deck surface | Floor areas, transitions |
| Equipment Gray | `#8a8a8a` | Unpainted equipment | Rack frames, hardware |
| Hardware Dark | `#6a6a6a` | Steel hardware | Bolts, rails, mounting points |
| Frame Dark | `#5a5a5a` | Heavy hardware | Door frames, deep mounts |
| Earth Blue | `#2a6abf` | Ocean from orbit | Viewport Earth scene |
| Earth Blue Deep | `#1a5aaf` | Deep ocean | Viewport water |
| Earth Blue Dark | `#0a4a9f` | Ocean abyss | Viewport deepest blue |
| Cloud White | `#ffffff/40` | Atmospheric clouds | Viewport cloud overlays |
| Handrail Yellow | `#e0c020` | Safety handrails | Grab rails, safety markings |
| Handrail Yellow Light | `#e8d020` | Lit handrail | Top surface highlight |
| Handrail Yellow Dark | `#c8a818` | Shadowed handrail | Bottom edge |
| Status Green | `#00ff66` | System operational | Normal status indicators |
| Status Amber | `#e8c020` | Caution state | Warning indicators |
| Status Red | `#ff4444` | Critical alert | Emergency indicators |
| Velcro Tan | `#c4b898` | Velcro fabric | Attached items, packets |
| Velcro Light | `#e8e0d0` | Velcro hooks | Velcro dot surfaces |
| Monitor Dark | `#0a1a2a` | LCD screen | Display backgrounds |
| Monitor Frame | `#3a3a3a` | Plastic bezel | Monitor housings |
| Label White | `#ffffff/80` | Paper/plastic label | Rack bay labels |

Rules: Module white and light gray dominate surfaces, creating the bright but functional interior of an orbital habitat. Earth blue appears only through viewports and reflected light. Handrail yellow is reserved exclusively for safety grab rails and safety markings. Status green, amber, and red follow standard system indicator conventions. Velcro tan marks personal items and consumables. The palette should feel like the interior of the International Space Station — bright, organized, functional, and alive with the presence of Earth below.

## Typography Recommendations

Space station module typography is clean, technical, and optimized for legibility in variable lighting:

- **Equipment labels:** Inter, Roboto, or Source Sans Pro at `text-[10px] font-mono uppercase tracking-widest text-[#3a3a3a]` (standardized rack bay identification).
- **Status readouts:** IBM Plex Mono or JetBrains Mono at `text-xs text-[#00ff66] font-mono` (system telemetry on displays and panels).
- **Procedure text:** Inter or Noto Sans at `text-sm text-[#4a4a4a]` (crew procedure cards and checklists displayed on screens).
- **Warning labels:** Roboto Condensed or Oswald at `font-bold uppercase tracking-wider text-[#ff4444]` (safety warnings near airlocks and equipment).
- **Identification numbers:** Courier New or Roboto Mono at `text-[9px] font-mono text-[#5a5a5a]` (serial numbers, bay identifiers, component tracking).
- **Display headers:** Space Mono or Fira Code at `text-sm font-bold text-[#e0e0e0]` on dark monitor backgrounds (screen section headers).
- Labels use sentence case or uppercase with moderate letter-spacing — clean and systematic, not decorative.
- Rack bay labels are always monospace for column alignment across standardized rack widths.
- Status text uses green monospace to maintain the flight-computer aesthetic on displays.

## Component Architecture Pattern

1. Cylindrical module interior background with curved ceiling and floor lines (the habitat tube).
2. Equipment rack grid as the primary content organization system (modular bay units).
3. Yellow handrails as structural and visual elements running along module walls.
4. Earth viewport as the focal point and emotional anchor of the module.
5. Circular airlock door as compartment dividers and exterior access points.
6. Status indicator panel as the central system monitoring hub.
7. Crew workstation displays at individual work positions.
8. Velcro-attached personal items and MRE packets for lived-in atmosphere.
9. LED panel lighting from the ceiling for even, functional illumination.
10. Standardized mounting points and bolt patterns for equipment attachment.

## Interaction Rules

- Default state: bright, even lighting with soft shadows, Earth blue glow from viewports, status indicators glowing steadily.
- Hover: equipment bay handles brighten (`hover:brightness-110`), status LEDs increase glow intensity, rack labels become more prominent.
- Active: light tactile press (`active:scale-[0.98]` with subtle depth change — pressing a button on a rack panel).
- Focus: status green glow ring `focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-[#e0e0e0]` — bright and visible against white surfaces.
- Transitions: `transition-all duration-200 ease-in-out` (clean, efficient, no wasted motion — like systems in a functioning spacecraft).
- Floating items: gentle 6-second bobbing animation with slight rotation for zero-gravity feel.
- Earth rotation: extremely slow `animate-[spin_360s_linear_infinite]` on cloud layers inside the viewport (barely perceptible).
- Airlock cycle: locking bolts retract sequentially with staggered delays, center wheel rotates, status ring transitions from red to green.
- Status LEDs: active states use `animate-pulse` at low frequency for a living-system feel, not frantic blinking.
- Rack bay expansion: smooth `transition-all duration-300` when a bay opens to reveal contents.

## Reusable Tailwind Tokens

- Module interior: `bg-gradient-to-b from-[#d0d0d0] via-[#e0e0e0] to-[#d8d8d8] rounded-t-[40px]`
- Earth viewport: `rounded-full bg-gradient-to-br from-[#7a7a7a] via-[#6a6a6a] to-[#5a5a5a] p-2 shadow-[0_4px_16px_rgba(0,0,0,0.3),0_0_30px_rgba(42,106,191,0.15)]`
- Earth surface: `bg-gradient-to-br from-[#2a6abf] via-[#1a5aaf] to-[#0a4a9f] shadow-[inset_0_0_20px_rgba(100,160,255,0.3)]`
- Equipment rack: `bg-[#8a8a8a] border border-[#6a6a6a] rounded-sm p-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)]`
- Rack bay: `bg-gradient-to-b from-[#e8e8e8] via-[#e0e0e0] to-[#d8d8d8] border border-[#b8b8b8] rounded-sm p-2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]`
- Handrail: `h-3 bg-gradient-to-b from-[#e8d020] via-[#e0c020] to-[#c8a818] rounded-full border border-[#a0900a] shadow-[0_2px_4px_rgba(0,0,0,0.2)]`
- Airlock door: `rounded-full bg-gradient-to-br from-[#7a7a7a] via-[#6a6a6a] to-[#5a5a5a] border-4 border-[#4a4a4a] shadow-[0_6px_24px_rgba(0,0,0,0.3)]`
- Status LED green: `w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66]`
- Status LED amber: `w-2.5 h-2.5 rounded-full bg-[#e8c020] shadow-[0_0_6px_#e8c020]`
- Status LED red: `w-2.5 h-2.5 rounded-full bg-[#ff4444] shadow-[0_0_6px_#ff4444] animate-pulse`
- Monitor: `bg-[#3a3a3a] border-2 border-[#2a2a2a] rounded-lg p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3)]`
- Monitor screen: `bg-[#0a1a2a] rounded text-[#00ff66] font-mono text-xs`
- Rack label: `bg-white/80 border border-[#c0c0c0] rounded-sm px-1.5 py-0.5 text-[#3a3a3a] text-[10px] font-mono uppercase tracking-wide`
- MRE packet: `bg-gradient-to-b from-[#c4b898] to-[#b0a880] border border-[#9a9070] rounded-sm shadow-[1px_2px_4px_rgba(0,0,0,0.15)]`
- Velcro dot: `rounded-full bg-[#e8e0d0] border border-[#d0c8b8] bg-[repeating-radial-gradient(circle,transparent_0px,transparent_1px,rgba(0,0,0,0.08)_1px,rgba(0,0,0,0.08)_2px)]`
- Warning label: `bg-[#ff4444]/10 border border-[#ff4444] text-[#ff4444] text-xs font-bold uppercase tracking-wider rounded-sm px-2 py-1`
- Floating animation: `animate-[float_6s_ease-in-out_infinite]` with the `@keyframes float` rule

## Quality Checklist (must pass)

- Module interior has curved ceiling suggesting the cylindrical cross-section of the pressure vessel.
- Surfaces use the white-to-light-gray palette with subtle gradient variation for painted metal panels.
- Equipment is organized in modular rack bays with mounting rails, handles, labels, and status LEDs.
- Yellow handrails are present as visual and functional elements suggesting zero-gravity locomotion.
- At least one viewport shows Earth (blue marble with cloud swirls) as the emotional anchor of the module.
- Status indicators use the standard green/amber/red LED convention with appropriate glow effects.
- Typography is clean and technical: monospace for data, sans-serif for labels, all optimized for legibility.
- Lived-in details are present: MRE packets, velcro-attached items, personal photos, or equipment showing use.
- The palette is bright and functional, not dark and moody — this is an orbital habitat, not a submarine.
- Shadows are soft and diffuse (even LED panel lighting, not dramatic directional light).
- Airlock doors use circular construction with visible locking mechanisms.
- The overall aesthetic reads as a functional space station module — organized, labeled, and alive with orbital activity.

## Anti-Patterns

- Dark or moody color palettes (space station interiors are bright, well-lit, and clinical — the darkness is outside the hull).
- Missing viewport or Earth view (the connection to Earth is the defining emotional element of orbital habitation).
- Unorganized or cluttered equipment without labels (space station equipment is meticulously labeled, tracked, and organized).
- Dramatic shadows or directional lighting (module lighting is even LED panels from above, not cinematic).
- Missing handrails or zero-gravity visual cues (handrails are everywhere in a space station — they are the primary locomotion aid).
- Futuristic holographic displays (ISS-era technology is flat-panel LCDs, physical switches, and printed labels — not sci-fi).
- Using blue as a primary interior color (blue appears only through viewports; the interior is white, gray, and yellow).
- Heavy industrial or military aesthetics (space stations are research laboratories and living quarters, not warships).
- Missing personal touches (crews live here for months — personal items, photos, and food packets make it human).
- Ornamental or decorative elements (everything has a function; aesthetics emerge from utility and organization).
- Smooth curved surfaces without visible mounting hardware (real space station panels have bolts, rails, and attachment points).
- Perfect pristine cleanliness (long-duration stations show wear, tape residue, velcro marks, and the patina of habitation).

## Accessibility Considerations

- Earth blue (`#2a6abf`) through viewports provides no text content — ensure viewports are decorative or have `aria-label` describing the Earth view.
- Status green (`#00ff66`) on monitor dark (`#0a1a2a`) provides strong contrast; verify all text combinations against WCAG AA on lighter panel backgrounds.
- Handrail yellow (`#e0c020`) on module white (`#e0e0e0`) may have insufficient contrast for text — use `text-[#5a5a5a]` or darker for labels near handrails.
- Floating animations must respect `prefers-reduced-motion` — items should remain static in their default position without bobbing.
- Earth viewport cloud rotation animation must respect `prefers-reduced-motion` — freeze the scene at a pleasant composition.
- Status LED indicators must have text alternatives (`aria-label="Oxygen system: nominal"`) — never rely on color alone for status communication.
- Focus states use status green glow (`focus:ring-2 focus:ring-[#00ff66]`) with `focus:ring-offset-2 focus:ring-offset-[#e0e0e0]` for visibility against white backgrounds.
- Airlock door locking mechanism must be operable via keyboard with clear `aria-expanded` and `aria-label` states.
- Equipment rack bay labels must be readable at their rendered size; test at the actual `text-[10px]` size for legibility.
- Decorative elements (handrails, velcro textures, panel seams, bolt patterns) must be `aria-hidden="true"`.
- Touch targets must meet minimum 44x44px — expand rack bay handles and status LEDs with invisible padding.
- Monitor displays must have `role="img"` with descriptive `aria-label` when showing static status information, or proper ARIA live regions for changing values.
- The bright white palette is generally accessible but must be verified for users with light sensitivity — ensure sufficient contrast depth for all interactive elements.
- Airlock status transitions (sealed/unsealed) must be announced to screen readers via `aria-live="polite"` region updates.
