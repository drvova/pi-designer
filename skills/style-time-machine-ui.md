---
name: time-machine-ui
description: Build time machine UI components (spinning gyroscope, clock face, vortex tunnel, temporal readout, Victorian brass, flux capacitor, time crystal) with Victorian-era brass mechanisms, swirling time vortex effects, and the paradoxical wonder of time travel. Trigger this skill when the user asks for time machine design, temporal UI, Victorian brass aesthetic, clock face interface, vortex tunnel components, time travel interface, steampunk clockwork, or temporal readout systems.
---

# Time Machine UI

Use this skill to design and implement dark, atmospheric interfaces inspired by a Victorian-era time machine: spinning brass gyroscopes with nested rotating rings, clock faces with Roman numerals on circular dials, spiraling vortex tunnels that pull the eye inward, digital temporal readouts ticking through centuries, patinated brass surfaces riveted and burnished, glowing time crystals, and the unmistakable hum of a flux capacitor charging. The palette balances warm Victorian brass and aged wood against cool temporal energy and deep-time void.

## Non-Negotiable Foundations

- Time Machine UI draws from Victorian-era science fiction: brass gyroscopes, analog clock faces, spiraling vortex tunnels, digital temporal counters, patinated metal surfaces, faceted time crystals, and electromagnetic flux capacitors.
- Materials are a mix of mechanical brass and temporal energy: patinated copper, burnished brass, riveted steel, polished wood, crystal glass, and volatile temporal glow.
- Colors are warm brass and dark wood with vivid temporal accents: brass copper, copper patina, clock cream, vortex purple, time crystal cyan, Victorian wood, temporal green, and deep-time void.
- The layout centers on circular and concentric motifs: clock faces as primary displays, gyroscope rings as decorative elements, vortex spirals as transition effects, and crystal facets as accent geometry.
- The mood is wondrous, mechanical, and slightly dangerous — the interface should feel like stepping into a brass-and-glass laboratory where time itself is a raw material.
- Temporal energy effects are essential: vortex purple swirls, cyan crystal luminescence, green temporal readout glow, and the warm reflective sheen of polished brass.

## Core Material Recipes

### 1) Spinning Gyroscope (Nested Rotating Rings)

Three nested rings rotating at different speeds, the centerpiece mechanical animation.

```html
<div class="relative w-40 h-40 mx-auto">
  <!-- Outer ring -->
  <div class="absolute inset-0 rounded-full border-2 border-[#b87333]/70 shadow-[0_0_12px_rgba(184,115,51,0.2)] animate-[spin_8s_linear_infinite]">
    <div class="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#b87333]"></div>
    <div class="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#b87333]"></div>
  </div>
  <!-- Middle ring (tilted) -->
  <div class="absolute inset-3 rounded-full border-2 border-[#c09040]/60 shadow-[0_0_8px_rgba(192,144,64,0.2)] animate-[spin_5s_linear_infinite_reverse]" style="transform: rotateX(60deg);">
    <div class="absolute -top-1 left-1/2 -ml-1 w-1.5 h-1.5 rounded-full bg-[#c09040]"></div>
    <div class="absolute -bottom-1 left-1/2 -ml-1 w-1.5 h-1.5 rounded-full bg-[#c09040]"></div>
  </div>
  <!-- Inner ring (opposite tilt) -->
  <div class="absolute inset-6 rounded-full border-2 border-[#40e0e0]/50 shadow-[0_0_10px_rgba(64,224,224,0.3)] animate-[spin_3s_linear_infinite]" style="transform: rotateY(60deg);">
    <div class="absolute top-1/2 -left-1 -mt-1 w-1.5 h-1.5 rounded-full bg-[#40e0e0]"></div>
    <div class="absolute top-1/2 -right-1 -mt-1 w-1.5 h-1.5 rounded-full bg-[#40e0e0]"></div>
  </div>
  <!-- Center crystal -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-4 h-4 bg-[#40e0e0] rounded-sm rotate-45 shadow-[0_0_12px_#40e0e0,0_0_24px_rgba(64,224,224,0.4)] animate-pulse"></div>
  </div>
</div>
```

### 2) Clock Face (Roman Numerals on Circular Dial)

An analog clock with Roman numeral hour markers on a cream dial with brass bezel.

```html
<div class="relative w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b8] border-4 border-[#b87333] shadow-[0_0_16px_rgba(184,115,51,0.3),0_8px_24px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]">
  <!-- Roman numerals -->
  <div class="absolute inset-0 flex items-center justify-center text-[#5a3a1a] font-serif text-xs font-bold">
    <span class="absolute top-3 left-1/2 -translate-x-1/2">XII</span>
    <span class="absolute bottom-3 left-1/2 -translate-x-1/2">VI</span>
    <span class="absolute top-1/2 left-3 -translate-y-1/2">IX</span>
    <span class="absolute top-1/2 right-3 -translate-y-1/2">III</span>
    <span class="absolute top-[14%] right-[18%]">I</span>
    <span class="absolute top-[26%] right-[7%]">II</span>
    <span class="absolute bottom-[26%] right-[7%]">IV</span>
    <span class="absolute bottom-[14%] right-[18%]">V</span>
    <span class="absolute bottom-[14%] left-[18%]">VII</span>
    <span class="absolute bottom-[26%] left-[7%]">VIII</span>
    <span class="absolute top-[26%] left-[7%]">X</span>
    <span class="absolute top-[14%] left-[18%]">XI</span>
  </div>
  <!-- Hour hand -->
  <div class="absolute top-1/2 left-1/2 w-1 h-14 bg-[#5a3a1a] origin-bottom -translate-x-1/2 -translate-y-full rounded-full rotate-[30deg] shadow-[0_0_4px_rgba(90,58,26,0.3)]"></div>
  <!-- Minute hand -->
  <div class="absolute top-1/2 left-1/2 w-[2px] h-16 bg-[#3a2a1a] origin-bottom -translate-x-1/2 -translate-y-full rounded-full rotate-[180deg]"></div>
  <!-- Center pin -->
  <div class="absolute top-1/2 left-1/2 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-[#b87333] border border-[#8a5a2a] shadow-[0_0_4px_rgba(184,115,51,0.5)]"></div>
  <!-- Tick marks -->
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
    <g stroke="#5a3a1a" stroke-width="1" opacity="0.4">
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(0 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(30 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(60 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(90 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(120 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(150 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(180 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(210 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(240 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(270 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(300 96 96)"/>
      <line x1="96" y1="8" x2="96" y2="18" transform="rotate(330 96 96)"/>
    </g>
  </svg>
</div>
```

### 3) Vortex Tunnel (Spiraling Tunnel Effect)

A concentric-rings vortex that creates the illusion of a spiraling time tunnel.

```html
<div class="relative w-full h-48 overflow-hidden bg-[#0a0a2a]">
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="relative">
      <div class="absolute -inset-16 rounded-full border border-[#6a2a8a]/20 animate-[spin_12s_linear_infinite]"></div>
      <div class="absolute -inset-12 rounded-full border border-[#6a2a8a]/30 animate-[spin_8s_linear_infinite_reverse]"></div>
      <div class="absolute -inset-8 rounded-full border border-[#6a2a8a]/40 animate-[spin_6s_linear_infinite]"></div>
      <div class="absolute -inset-4 rounded-full border border-[#6a2a8a]/50 animate-[spin_4s_linear_infinite_reverse]"></div>
      <div class="absolute -inset-1 rounded-full border-2 border-[#40e0e0]/30 animate-[spin_3s_linear_infinite] shadow-[0_0_8px_rgba(64,224,224,0.2)]"></div>
      <div class="w-3 h-3 rounded-full bg-[#40e0e0] shadow-[0_0_12px_#40e0e0,0_0_24px_rgba(64,224,224,0.5)] animate-pulse"></div>
    </div>
  </div>
  <!-- Radial fade -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a2a_80%)]"></div>
</div>
```

### 4) Temporal Readout (Digital Counter)

A glowing green digital counter displaying temporal coordinates, like a Nixie tube display.

```html
<div class="inline-flex items-center gap-3 bg-[#0a0a2a] border border-[#40c060]/30 rounded-lg px-5 py-3 shadow-[0_0_16px_rgba(64,192,96,0.15),inset_0_1px_0_rgba(255,255,255,0.04)]">
  <div class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#40c060]/60">Temporal Coord</div>
  <div class="flex gap-1 font-mono text-2xl font-bold tracking-wider">
    <span class="text-[#40c060] shadow-[0_0_8px_rgba(64,192,96,0.5)]">1</span>
    <span class="text-[#40c060]/40">:</span>
    <span class="text-[#40c060] shadow-[0_0_8px_rgba(64,192,96,0.5)]">8</span>
    <span class="text-[#40c060] shadow-[0_0_8px_rgba(64,192,96,0.5)]">8</span>
    <span class="text-[#40c060]/40">:</span>
    <span class="text-[#40c060] shadow-[0_0_8px_rgba(64,192,96,0.5)]">9</span>
    <span class="text-[#40c060] shadow-[0_0_8px_rgba(64,192,96,0.5)]">2</span>
    <span class="text-[10px] text-[#40c060]/40 self-end mb-0.5">AD</span>
  </div>
</div>
```

### 5) Victorian Brass Surface (Patinated Metal Panel)

A warm brass panel with rivet details, the primary container for time machine controls.

```html
<div class="relative bg-gradient-to-br from-[#b87333] via-[#a06828] to-[#8a5a20] p-8 rounded-lg border border-[#c09040]/50 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)]">
  <!-- Brushed metal texture -->
  <div class="absolute inset-0 rounded-lg bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px)]"></div>
  <!-- Patina spots -->
  <div class="absolute top-4 right-6 w-8 h-3 rounded-full bg-[#4a8a6a]/20 blur-sm"></div>
  <div class="absolute bottom-6 left-8 w-6 h-2 rounded-full bg-[#4a8a6a]/15 blur-sm"></div>
  <!-- Rivets -->
  <div class="absolute top-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#c09040] to-[#8a5a20] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#c09040] to-[#8a5a20] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#c09040] to-[#8a5a20] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <div class="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#c09040] to-[#8a5a20] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]"></div>
  <!-- Content -->
  <div class="relative z-10 text-[#f0e8d0]">
    <p class="font-serif text-sm leading-relaxed">Chrono-Displacement controls and temporal calibration panel.</p>
  </div>
</div>
```

### 6) Flux Capacitor (Charging Energy Core)

A Y-shaped energy core that pulses with cyan temporal energy.

```html
<div class="relative w-32 h-32 mx-auto">
  <!-- Background glow -->
  <div class="absolute inset-0 rounded-full bg-[#40e0e0]/5 blur-xl"></div>
  <!-- Y-shape arms -->
  <svg viewBox="0 0 128 128" class="absolute inset-0 w-full h-full">
    <!-- Brass housing -->
    <line x1="64" y1="64" x2="64" y2="20" stroke="#b87333" stroke-width="6" stroke-linecap="round"/>
    <line x1="64" y1="64" x2="30" y2="100" stroke="#b87333" stroke-width="6" stroke-linecap="round"/>
    <line x1="64" y1="64" x2="98" y2="100" stroke="#b87333" stroke-width="6" stroke-linecap="round"/>
    <!-- Energy core -->
    <line x1="64" y1="64" x2="64" y2="24" stroke="#40e0e0" stroke-width="2" opacity="0.8" class="animate-[pulse_2s_ease-in-out_infinite]"/>
    <line x1="64" y1="64" x2="34" y2="97" stroke="#40e0e0" stroke-width="2" opacity="0.8" class="animate-[pulse_2s_ease-in-out_infinite_0.3s]"/>
    <line x1="64" y1="64" x2="94" y2="97" stroke="#40e0e0" stroke-width="2" opacity="0.8" class="animate-[pulse_2s_ease-in-out_infinite_0.6s]"/>
    <!-- Center node -->
    <circle cx="64" cy="64" r="6" fill="#b87333" stroke="#8a5a20" stroke-width="1"/>
    <circle cx="64" cy="64" r="3" fill="#40e0e0" class="animate-pulse"/>
  </svg>
</div>
```

### 7) Time Crystal (Faceted Glowing Crystal)

A faceted crystal that glows with inner temporal light, used as a power indicator.

```html
<div class="relative w-16 h-24 mx-auto">
  <!-- Crystal body (hexagonal faceted shape) -->
  <div class="absolute inset-0" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
    <div class="absolute inset-0 bg-gradient-to-b from-[#40e0e0]/40 via-[#40e0e0]/60 to-[#2a8a8a]/80 shadow-[0_0_20px_rgba(64,224,224,0.3)]"></div>
    <!-- Facet lines -->
    <div class="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]"></div>
    <!-- Inner glow -->
    <div class="absolute inset-3 bg-gradient-to-b from-white/10 to-transparent"></div>
  </div>
  <!-- Specular highlight -->
  <div class="absolute top-4 left-5 w-3 h-6 bg-white/15 rounded-full blur-[2px] rotate-[-15deg]"></div>
  <!-- Base mount -->
  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-b from-[#b87333] to-[#8a5a20] rounded-b-sm border border-[#a06828]"></div>
</div>
```

### 8) Temporal Control Dial

A rotary dial with settings for temporal displacement, built from a brass ring with notched positions.

```html
<div class="relative w-28 h-28 mx-auto">
  <!-- Outer dial ring -->
  <div class="absolute inset-0 rounded-full border-4 border-[#b87333] bg-gradient-to-br from-[#2a1a0a] to-[#1a0a00] shadow-[0_0_12px_rgba(184,115,51,0.2),inset_0_2px_8px_rgba(0,0,0,0.5)]">
    <!-- Position notches -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
      <g fill="#c09040" opacity="0.6">
        <circle cx="56" cy="8" r="2"/>
        <circle cx="96" cy="24" r="2"/>
        <circle cx="104" cy="56" r="2"/>
        <circle cx="96" cy="88" r="2"/>
        <circle cx="56" cy="104" r="2"/>
        <circle cx="16" cy="88" r="2"/>
        <circle cx="8" cy="56" r="2"/>
        <circle cx="16" cy="24" r="2"/>
      </g>
      <!-- Labels -->
      <text x="56" y="22" text-anchor="middle" fill="#f0e8d0" font-size="5" font-family="serif" opacity="0.5">PAST</text>
      <text x="56" y="100" text-anchor="middle" fill="#f0e8d0" font-size="5" font-family="serif" opacity="0.5">FUTURE</text>
    </svg>
    <!-- Knob center -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#c09040] to-[#8a5a20] border-2 border-[#b87333] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_2px_8px_rgba(0,0,0,0.4)]">
        <div class="absolute top-2 left-1/2 -ml-0.5 w-1 h-3 bg-[#f0e8d0]/60 rounded-full"></div>
      </div>
    </div>
  </div>
</div>
```

### 9) Brass Panel Button

A raised brass button with a warm metallic finish and tactile click feel.

```html
<button class="relative px-6 py-3 bg-gradient-to-b from-[#c09040] via-[#b87333] to-[#8a5a20] text-[#f0e8d0] font-serif font-medium text-sm tracking-wider border border-[#c09040]/60 rounded shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.4),0_0_12px_rgba(184,115,51,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:translate-y-[1px] active:translate-y-[2px] active:shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-150">
  ENGAGE
</button>
```

### 10) Vortex Transition Overlay

A full-screen vortex overlay for scene transitions or loading states.

```html
<div class="fixed inset-0 z-50 bg-[#0a0a2a] flex items-center justify-center">
  <div class="relative">
    <div class="absolute -inset-32 rounded-full border border-[#6a2a8a]/30 animate-[spin_6s_linear_infinite]"></div>
    <div class="absolute -inset-24 rounded-full border border-[#6a2a8a]/40 animate-[spin_5s_linear_infinite_reverse]"></div>
    <div class="absolute -inset-16 rounded-full border border-[#6a2a8a]/50 animate-[spin_4s_linear_infinite]"></div>
    <div class="absolute -inset-8 rounded-full border-2 border-[#40e0e0]/30 animate-[spin_3s_linear_infinite_reverse] shadow-[0_0_12px_rgba(64,224,224,0.15)]"></div>
    <div class="absolute -inset-4 rounded-full border border-[#40e0e0]/50 animate-[spin_2s_linear_infinite] shadow-[0_0_8px_rgba(64,224,224,0.2)]"></div>
    <div class="w-6 h-6 rounded-full bg-[#40e0e0] shadow-[0_0_20px_#40e0e0,0_0_40px_rgba(64,224,224,0.4)] animate-pulse"></div>
  </div>
  <div class="absolute bottom-12 text-[#40e0e0]/60 font-mono text-sm tracking-[0.3em] uppercase animate-pulse">Displacing through time...</div>
</div>
```

## Color Palette System

### Core Time Machine Palette

| Color | Hex | Role |
|---|---|---|
| Brass | `#b87333` | Primary metal surface, panel frames, dial bezels |
| Copper Patina | `#4a8a6a` | Aged oxidation spots, verdigris accents |
| Clock Cream | `#f0e8d0` | Clock dial faces, text on dark, warm highlights |
| Vortex Purple | `#6a2a8a` | Vortex tunnel energy, temporal distortion |
| Time Crystal | `#40e0e0` | Crystal glow, flux capacitor energy, temporal accent |
| Victorian Wood | `#5a3a1a` | Clock hands, wood paneling, leather straps |
| Temporal Green | `#40c060` | Digital readout glow, Nixie tube display |
| Deep Time | `#0a0a2a` | Deep background, void between eras |

### Extended Accent Palette

| Color | Hex | Role |
|---|---|---|
| Burnished Gold | `#c09040` | Brass highlights, rivet accents, bright metal |
| Dark Brass | `#8a5a20` | Shadow on brass, deep metal tones |
| Warm Void | `#1a0a00` | Deepest brass shadow, dark wood interior |
| Crystal White | `#e0ffff` | Crystal specular highlights, bright flash |
| Patina Green | `#3a6a4a` | Aged copper, weathered metal accents |
| Vortex Magenta | `#8a2a8a` | Secondary vortex color, energy variation |
| Temporal Amber | `#d0a030` | Warning glow, temporal flux indicator |
| Deep Indigo | `#2a1a4a` | Vortex depth, temporal void |

Rules: Brass and deep time dominate the background. Vortex purple and time crystal cyan appear as energy effects on interactive elements. Temporal green is reserved for digital readouts and counters. Clock cream is the primary light-on-dark text color. Victorian wood appears only on clock hands and mechanical linkage elements. Copper patina is used sparingly as an aging detail.

## Typography Recommendations

Time Machine typography blends Victorian mechanical precision with scientific instrument readability:

- **Display headings:** Playfair Display, Cinzel, or Cormorant SC (Victorian mechanical elegance, engraved lettering).
- **Body text:** EB Garamond, Spectral, or Crimson Pro (readable serif with historical warmth).
- **Digital readout:** `font-mono text-[#40c060] shadow-[0_0_6px_rgba(64,192,96,0.5)]` for temporal counters and Nixie tube displays.
- **Labels:** `font-serif font-medium uppercase tracking-[0.2em] text-[10px] text-[#c09040]/70` (engraved brass label style).
- **Panel headers:** `font-serif font-bold text-lg text-[#f0e8d0] tracking-wider` (Victorian instrument panel header).
- **Control text:** `font-mono text-xs text-[#40c060]/80` (instrument readout style for dials and gauges).
- Avoid sans-serif for primary text. Avoid pure white for headings — use clock cream or burnished gold instead.

## Component Architecture Pattern

1. Deep time background (`#0a0a2a`) as the ambient base.
2. Victorian brass panels with rivet details as primary containers.
3. Clock face components for primary data display.
4. Gyroscope animations as decorative focal points or loading indicators.
5. Vortex tunnel effects for transitions and section dividers.
6. Temporal readout displays for digital data and counters.
7. Time crystals as status indicators and power symbols.
8. Flux capacitor components for charging states and energy visualization.
9. Brass panel buttons for all interactive controls.
10. Control dials for settings and adjustment interfaces.

## Interaction Rules

- Default state: warm, mechanical, softly glowing — like a machine at idle.
- Hover: brass brightens, temporal energy intensifies, crystal glow increases.
  - `hover:shadow-[0_0_20px_rgba(184,115,51,0.4)] hover:border-[#c09040] transition-all duration-300`.
- Active: `active:translate-y-[2px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]` (mechanical button press feel).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#40e0e0]/50 focus:shadow-[0_0_12px_rgba(64,224,224,0.2)]` (crystal cyan ring).
- Transitions: `transition-all duration-300` (mechanical precision, not sluggish).
- Temporal activation: on engagement, vortex rings accelerate and crystal flashes.
  - `@keyframes activate { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(64,224,224,0.4); } 50% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(64,224,224,0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(64,224,224,0); } }`.
- Loading state: gyroscope rings spin and vortex pulses with `animate-[spin_3s_linear_infinite]`.
- Temporal displacement: vortex rings converge toward center over 2 seconds, then reverse outward.

## Reusable Tailwind Tokens

- Brass panel: `bg-gradient-to-br from-[#b87333] via-[#a06828] to-[#8a5a20] border border-[#c09040]/50 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]`
- Clock face: `bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b8] border-4 border-[#b87333] shadow-[0_0_16px_rgba(184,115,51,0.3),0_8px_24px_rgba(0,0,0,0.5)]`
- Temporal readout: `bg-[#0a0a2a] border border-[#40c060]/30 text-[#40c060] font-mono shadow-[0_0_16px_rgba(64,192,96,0.15)]`
- Vortex energy: `border-[#6a2a8a]/40 shadow-[0_0_12px_rgba(106,42,138,0.2)]`
- Crystal glow: `bg-gradient-to-b from-[#40e0e0]/40 to-[#2a8a8a]/80 shadow-[0_0_20px_rgba(64,224,224,0.3)]`
- Deep time background: `bg-[#0a0a2a]`
- Victorian wood text: `text-[#5a3a1a]`
- Clock cream text: `text-[#f0e8d0]`
- Brass label: `font-serif font-medium uppercase tracking-[0.2em] text-[10px] text-[#c09040]/70`
- Temporal green text: `text-[#40c060] shadow-[0_0_6px_rgba(64,192,96,0.5)]`
- Brass button: `bg-gradient-to-b from-[#c09040] via-[#b87333] to-[#8a5a20] text-[#f0e8d0] border border-[#c09040]/60 shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]`
- Vortex divider: `h-px bg-gradient-to-r from-transparent via-[#6a2a8a]/40 to-transparent`
- Copper patina accent: `bg-[#4a8a6a]/20 blur-sm`
- Patina verdigris: `text-[#4a8a6a]`

## Quality Checklist (must pass)

- Background is deep time (`#0a0a2a`) or dark Victorian interior.
- At least one brass-surfaced panel with visible rivet details and brushed metal texture.
- Clock face or temporal readout displaying data (analog or digital).
- Vortex spiral element present (concentric rotating rings or tunnel transition).
- Gyroscope animation with nested rotating rings visible somewhere in the layout.
- Time crystal or flux capacitor as a power/status indicator.
- Copper patina or verdigris accent spots on brass surfaces.
- Typography is Victorian serif (Playfair Display, Cinzel, or similar for display).
- Digital readout uses monospace font with temporal green glow.
- The overall atmosphere reads as a Victorian-era time travel laboratory.
- Color balance: warm brass surfaces with cool temporal energy accents (cyan, purple, green).
- All glowing effects use `box-shadow` or `text-shadow` rather than solid color blocks.
- Brass surfaces show subtle wear (patina spots, brushed texture) rather than looking freshly polished.

## Anti-Patterns

- Light or bright backgrounds (time machine lab is dark and mechanical).
- Modern flat design without metal texture (brass and wood texture is mandatory).
- Missing glow effects (temporal energy ambiance is essential to the theme).
- Sans-serif typography for headings (Victorian serif is required).
- Missing circular or concentric motifs (clocks, gyroscopes, and vortex spirals define the visual language).
- Warm-only or cool-only palette (the theme requires warm brass against cool temporal energy).
- Missing the sense of wonder and danger (the interface should feel like time travel is real and risky).
- No brass or metal surface elements (Victorian brass is core to the identity).
- Overly clean or sterile surfaces (brass should show patina, rivets, and mechanical wear).
- Missing digital readout or temporal display (temporal coordinates are essential).
- Harsh white text on dark backgrounds (use clock cream or burnished gold, never pure white).
- Missing vortex or temporal distortion effect (the time travel element must be visible).
- All components at the same visual depth (gyroscopes and crystals should float with shadow depth).
- Green temporal readout used for non-data content (temporal green is reserved for counters and coordinates).

## Accessibility Considerations

- Deep time backgrounds with clock cream text provide strong contrast (WCAG AA or AAA).
- Focus states: `focus:ring-2 focus:ring-[#40e0e0]/50` (time crystal cyan, clearly visible against dark backgrounds).
- Decorative SVGs (gyroscope rings, vortex spirals, clock numerals) must be `aria-hidden="true"`.
- Gyroscope and vortex animations must respect `prefers-reduced-motion` — disable `animate-[spin]` and pulsing effects.
- Temporal energy glow shadows must not reduce text readability — verify contrast on all text within glowing containers.
- Clock face numerals must include accessible labels or `aria-label` for screen readers (Roman numeral accessibility).
- Vortex transition overlays must include a visible status message and be dismissible for screen reader users.
- The dark atmosphere may cause eye strain in well-lit environments — ensure text is bright enough for extended reading sessions.
- Touch targets must remain adequate (minimum 44x44px) despite ornamental brass borders and rivet details.
- Brass button hover/active states must be communicated through more than color alone — use icon changes or text shifts.
- Temporal readout text must maintain sufficient contrast (the `#40c060` on `#0a0a2a` combination passes WCAG AA).
- Color is never the sole indicator of state — pair temporal green glow changes with icons or text changes for state communication.
- Animated gyroscope rings must not cause vestibular issues — provide reduced-motion alternatives with static ring positions.
