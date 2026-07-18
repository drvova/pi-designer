---
name: train-station-ui
description: Build train station UI components (grand departure hall, arched glass ceiling, platform number indicators, departure board split-flap display, clock tower, luggage cart accents, iron column structures, steam locomotive silhouettes) with industrial iron-and-glass architecture, split-flap animation, and the romance of rail travel. Trigger this skill when the user asks for train station design, departure board UI, split-flap display, platform indicator, railway station aesthetic, iron-and-glass architecture, grand clock face, steam locomotive silhouette, departure hall interface, or rail travel aesthetic.
---

# Train Station / Railway Terminal UI

Use this skill to design and implement grand, atmospheric interfaces inspired by Victorian-era railway terminals: arched glass ceilings with iron framework, split-flap departure boards with mechanical flip animations, platform number indicators, grand station clocks with Roman numerals, and steam locomotive silhouettes. The aesthetic is industrial romance -- iron dark and glass pale blue grounded in stone floors, brass warmth from clock mechanisms, and the kinetic energy of a departure board updating in real time.

## Non-Negotiable Foundations

- The arched glass ceiling pattern (grid window with iron frame) must appear in at least one element per view -- it is the signature architectural identity of the grand station.
- Split-flap departure board with flipping character animation must be present in at least one component per page -- the mechanical heartbeat of the station.
- The palette must remain iron-dark dominant: dark iron backgrounds with glass pale blue, stone floor grays, clock face cream, and brass accents. No bright saturated primaries, no pastels, no digital-feeling neon.
- Platform number indicators (bold numerals in circular frames) must appear in at least one element per page to ground the railway theme.
- The atmosphere must feel grand, industrial, and kinetic -- this is a bustling transit hub, not a quiet gallery. Movement and mechanical energy are features.
- All split-flap animations must respect `prefers-reduced-motion` and degrade to static final-state characters.

## Core Material Recipes

### 1) Arched Glass Ceiling Header

Grid window pattern with iron frame, the signature architectural element.

```html
<div class="relative w-full h-52 bg-[#2a2a2a] overflow-hidden">
  <!-- Glass panels (grid) -->
  <div class="absolute inset-0 bg-[#1a2a3a]/30">
    <!-- Iron frame vertical bars -->
    <div class="absolute top-0 bottom-0 left-[10%] w-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute top-0 bottom-0 left-[25%] w-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute top-0 bottom-0 left-[40%] w-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute top-0 bottom-0 left-[55%] w-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute top-0 bottom-0 left-[70%] w-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute top-0 bottom-0 left-[85%] w-0.5 bg-[#2a2a2a]"></div>
    <!-- Iron frame horizontal bars -->
    <div class="absolute left-0 right-0 top-[25%] h-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute left-0 right-0 top-[50%] h-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute left-0 right-0 top-[75%] h-0.5 bg-[#2a2a2a]"></div>
    <!-- Arch curve overlay -->
    <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
      <path d="M0,260 Q200,0 400,260" fill="none" stroke="#2a2a2a" stroke-width="3"/>
    </svg>
  </div>
  <!-- Glass pale blue tint -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#b0c4d8]/10 to-transparent"></div>
  <!-- Iron arch frame -->
  <div class="absolute bottom-0 left-0 right-0 h-3 bg-[#2a2a2a]"></div>
  <!-- Rivet dots along bottom beam -->
  <div class="absolute bottom-1 left-[10%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-1 left-[25%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-1 left-[40%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-1 left-[55%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-1 left-[70%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-1 left-[85%] w-1.5 h-1.5 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
```

### 2) Split-Flap Departure Board

Flipping letter characters via CSS transform, the kinetic heartbeat of the station.

```html
<style>
@keyframes flap-down { 0% { transform: rotateX(0deg); } 100% { transform: rotateX(-90deg); } }
@keyframes flap-up { 0% { transform: rotateX(90deg); } 100% { transform: rotateX(0deg); } }
</style>
<div class="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
  <!-- Board header -->
  <div class="flex items-center justify-between mb-3 px-2">
    <span class="text-[#f5f0e0] text-xs font-mono uppercase tracking-[0.2em] opacity-50">Departures</span>
    <span class="text-[#b8a040] text-[10px] font-mono">LIVE</span>
  </div>
  <!-- Column headers -->
  <div class="grid grid-cols-[80px_1fr_120px_80px] gap-3 px-2 mb-2">
    <span class="text-[#f5f0e0]/40 text-[10px] font-mono uppercase tracking-widest">Time</span>
    <span class="text-[#f5f0e0]/40 text-[10px] font-mono uppercase tracking-widest">Destination</span>
    <span class="text-[#f5f0e0]/40 text-[10px] font-mono uppercase tracking-widest">Train</span>
    <span class="text-[#f5f0e0]/40 text-[10px] font-mono uppercase tracking-widest text-right">Plat</span>
  </div>
  <!-- Departure rows -->
  <div class="space-y-1">
    <div class="grid grid-cols-[80px_1fr_120px_80px] gap-3 px-2 py-1.5 bg-[#222] rounded">
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wider">14:35</span>
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wide">London Kings Cross</span>
      <span class="text-[#f5f0e0]/60 text-sm font-mono">1A42</span>
      <span class="text-[#b8a040] text-sm font-mono font-bold text-right">3</span>
    </div>
    <div class="grid grid-cols-[80px_1fr_120px_80px] gap-3 px-2 py-1.5">
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wider">15:02</span>
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wide">Edinburgh Waverley</span>
      <span class="text-[#f5f0e0]/60 text-sm font-mono">2B18</span>
      <span class="text-[#b8a040] text-sm font-mono font-bold text-right">7</span>
    </div>
    <div class="grid grid-cols-[80px_1fr_120px_80px] gap-3 px-2 py-1.5 bg-[#222] rounded">
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wider">15:18</span>
      <span class="text-[#f5f0e0] text-sm font-mono tracking-wide">Manchester Piccadilly</span>
      <span class="text-[#f5f0e0]/60 text-sm font-mono">3C09</span>
      <span class="text-[#b8a040] text-sm font-mono font-bold text-right">1</span>
    </div>
  </div>
  <!-- Flap character example -->
  <div class="flex gap-0.5 mt-4 justify-center">
    <div class="relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]">
      <div class="absolute inset-0 flex items-center justify-center text-[#f5f0e0] text-lg font-mono font-bold">1</div>
      <div class="absolute top-1/2 left-0 right-0 h-px bg-[#0a0a0a]"></div>
    </div>
    <div class="relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]">
      <div class="absolute inset-0 flex items-center justify-center text-[#f5f0e0] text-lg font-mono font-bold">4</div>
      <div class="absolute top-1/2 left-0 right-0 h-px bg-[#0a0a0a]"></div>
    </div>
    <div class="relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]">
      <div class="absolute inset-0 flex items-center justify-center text-[#f5f0e0] text-lg font-mono font-bold">:</div>
      <div class="absolute top-1/2 left-0 right-0 h-px bg-[#0a0a0a]"></div>
    </div>
    <div class="relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]">
      <div class="absolute inset-0 flex items-center justify-center text-[#f5f0e0] text-lg font-mono font-bold">3</div>
      <div class="absolute top-1/2 left-0 right-0 h-px bg-[#0a0a0a]"></div>
    </div>
    <div class="relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]">
      <div class="absolute inset-0 flex items-center justify-center text-[#f5f0e0] text-lg font-mono font-bold">5</div>
      <div class="absolute top-1/2 left-0 right-0 h-px bg-[#0a0a0a]"></div>
    </div>
  </div>
</div>
```

### 3) Platform Number Indicator

Bold numeral in circular iron frame.

```html
<div class="relative w-16 h-16 mx-auto">
  <!-- Outer iron ring -->
  <div class="absolute inset-0 rounded-full border-4 border-[#3a3a3a] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"></div>
  <!-- Inner circle -->
  <div class="absolute inset-1 rounded-full bg-[#1a1a1a] flex items-center justify-center">
    <span class="text-[#f5f0e0] text-2xl font-bold font-mono">3</span>
  </div>
  <!-- Rivet accents -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-2 h-2 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5 w-2 h-2 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 w-2 h-2 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
  <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0.5 w-2 h-2 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
```

### 4) Grand Station Clock

Clock face with Roman numerals, the centerpiece of the departure hall.

```html
<div class="relative w-48 h-48 mx-auto">
  <!-- Clock outer ring (brass) -->
  <div class="absolute inset-0 rounded-full border-4 border-[#b8a040] shadow-[0_0_15px_rgba(184,160,64,0.15)]"></div>
  <!-- Clock face -->
  <div class="absolute inset-2 rounded-full bg-[#f5f0e0] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]">
    <!-- Roman numerals -->
    <span class="absolute top-[8%] left-1/2 -translate-x-1/2 text-[#2a2a2a] text-sm font-serif font-bold">XII</span>
    <span class="absolute top-[22%] right-[12%] text-[#2a2a2a] text-xs font-serif">I</span>
    <span class="absolute top-[45%] right-[5%] text-[#2a2a2a] text-xs font-serif">III</span>
    <span class="absolute bottom-[22%] right-[12%] text-[#2a2a2a] text-xs font-serif">V</span>
    <span class="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-[#2a2a2a] text-sm font-serif font-bold">VI</span>
    <span class="absolute bottom-[22%] left-[12%] text-[#2a2a2a] text-xs font-serif">VII</span>
    <span class="absolute top-[45%] left-[5%] text-[#2a2a2a] text-xs font-serif">IX</span>
    <span class="absolute top-[22%] left-[12%] text-[#2a2a2a] text-xs font-serif">XI</span>
    <!-- Hour markers -->
    <div class="absolute top-[12%] left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#2a2a2a]"></div>
    <div class="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#2a2a2a]"></div>
    <div class="absolute left-[12%] top-1/2 -translate-y-1/2 w-3 h-0.5 bg-[#2a2a2a]"></div>
    <div class="absolute right-[12%] top-1/2 -translate-y-1/2 w-3 h-0.5 bg-[#2a2a2a]"></div>
    <!-- Clock hands -->
    <div class="absolute top-1/2 left-1/2 w-1 h-16 bg-[#2a2a2a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[30deg] rounded-full"></div>
    <div class="absolute top-1/2 left-1/2 w-0.5 h-20 bg-[#2a2a2a] origin-bottom -translate-x-1/2 -translate-y-full rotate-[170deg] rounded-full"></div>
    <!-- Center cap -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#b8a040] rounded-full shadow-sm"></div>
  </div>
  <!-- Clock rim detail -->
  <div class="absolute inset-0 rounded-full border border-[#b8a040]/30"></div>
</div>
```

### 5) Iron Column Support Accent

Structural vertical element dividing content.

```html
<div class="relative w-8 h-full">
  <!-- Column shaft -->
  <div class="absolute inset-x-1 top-0 bottom-0 bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#3a3a3a] rounded-sm"></div>
  <!-- Column flutes (vertical grooves) -->
  <div class="absolute top-0 bottom-0 left-[30%] w-px bg-[#222]"></div>
  <div class="absolute top-0 bottom-0 left-[50%] w-px bg-[#222]"></div>
  <div class="absolute top-0 bottom-0 left-[70%] w-px bg-[#222]"></div>
  <!-- Capital (top) -->
  <div class="absolute -top-1 left-0 right-0 h-3 bg-[#3a3a3a] rounded-t-sm"></div>
  <!-- Base (bottom) -->
  <div class="absolute -bottom-1 left-0 right-0 h-3 bg-[#3a3a3a] rounded-b-sm"></div>
  <!-- Rivet at capital -->
  <div class="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#444] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>
</div>
```

### 6) Steam Locomotive Silhouette

Decorative silhouette accent for section headers.

```html
<div class="relative w-full h-12 bg-[#2a2a2a] overflow-hidden rounded-lg flex items-center">
  <svg viewBox="0 0 200 50" class="h-8 ml-4 opacity-20" style="pointer-events: none;">
    <!-- Locomotive body -->
    <rect x="10" y="20" width="80" height="20" rx="2" fill="#1a1a1a"/>
    <!-- Boiler -->
    <rect x="40" y="12" width="50" height="16" rx="8" fill="#1a1a1a"/>
    <!-- Smokestack -->
    <rect x="45" y="4" width="8" height="10" fill="#1a1a1a"/>
    <rect x="42" y="2" width="14" height="4" rx="2" fill="#1a1a1a"/>
    <!-- Cab -->
    <rect x="90" y="14" width="20" height="26" rx="1" fill="#1a1a1a"/>
    <rect x="94" y="18" width="6" height="8" rx="1" fill="#2a2a2a"/>
    <!-- Wheels -->
    <circle cx="25" cy="42" r="7" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <circle cx="55" cy="42" r="7" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <circle cx="100" cy="42" r="5" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <!-- Connecting rod -->
    <line x1="25" y1="42" x2="55" y2="42" stroke="#1a1a1a" stroke-width="1.5"/>
    <!-- Cowcatcher -->
    <polygon points="5,40 15,30 15,40" fill="#1a1a1a"/>
    <!-- Steam -->
    <circle cx="49" cy="1" r="2" fill="#f0f0f0" opacity="0.1"/>
    <circle cx="44" cy="-1" r="3" fill="#f0f0f0" opacity="0.08"/>
    <circle cx="52" cy="-3" r="2.5" fill="#f0f0f0" opacity="0.06"/>
  </svg>
  <span class="ml-4 text-[#f5f0e0]/30 text-xs font-mono uppercase tracking-[0.3em]">Platform 3 -- Express Services</span>
</div>
```

### 7) Luggage Cart Accent

Decorative SVG luggage cart for sidebar or footer.

```html
<div class="relative w-20 h-16">
  <svg viewBox="0 0 80 60" class="w-full h-full opacity-15" style="pointer-events: none;">
    <!-- Cart platform -->
    <rect x="5" y="35" width="70" height="4" rx="1" fill="#2a2a2a"/>
    <!-- Handle -->
    <line x1="70" y1="35" x2="75" y2="15" stroke="#2a2a2a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="75" cy="13" r="2" fill="#2a2a2a"/>
    <!-- Luggage stack -->
    <rect x="10" y="18" width="18" height="17" rx="1" fill="#2a2a2a"/>
    <rect x="30" y="22" width="14" height="13" rx="1" fill="#2a2a2a"/>
    <rect x="46" y="20" width="12" height="15" rx="1" fill="#2a2a2a"/>
    <!-- Wheels -->
    <circle cx="18" cy="45" r="5" fill="none" stroke="#2a2a2a" stroke-width="2"/>
    <circle cx="18" cy="45" r="1.5" fill="#2a2a2a"/>
    <circle cx="60" cy="45" r="5" fill="none" stroke="#2a2a2a" stroke-width="2"/>
    <circle cx="60" cy="45" r="1.5" fill="#2a2a2a"/>
  </svg>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Iron Dark | `#2a2a2a` | Primary background, iron structures, column frames, dominant dark |
| Glass Pale Blue | `#b0c4d8` | Glass ceiling tint, atmospheric accents, cold light through windows |
| Platform Stone | `#8a8a7a` | Stone floor textures, structural neutral, warm-gray ground |
| Departure Board Black | `#1a1a1a` | Departure board background, deepest darkness, board surfaces |
| Clock Face Cream | `#f5f0e0` | Clock faces, text on dark boards, warm parchment accent |
| Steam White | `#f0f0f0` | Steam accents, bright text on departure boards, clean highlights |
| Brass | `#b8a040` | Clock hands, platform numbers, premium interactive accents |
| Iron Light | `#3a3a3a` | Rivets, frame borders, structural detail, lighter iron |
| Stone Warm | `#7a7a6a` | Secondary stone accent, floor tile variation |
| Steel Blue | `#4a5a6a` | Structural steel accents, secondary glass tint, rail track color |

Rules: Iron dark dominates all structural and background elements. Glass pale blue provides atmospheric depth and the feeling of natural light filtering through glass. Clock face cream and steam white provide all text readability against dark surfaces. Brass appears only as premium accent -- clock mechanisms, platform numbers, interactive highlights. Stone grays ground the industrial palette in physical reality. The palette should feel like standing in a grand Victorian railway terminal -- iron and glass overhead, stone underfoot, brass catching the light, and the mechanical energy of departure boards clicking through destinations.

## Typography Recommendations

- **Display:** Playfair Display, Libre Baskerville (serif grandeur -- like engraved station nameplates and Victorian signage).
- **Body:** Inter, IBM Plex Sans (clean readable sans-serif for platform information and schedules).
- **Departure Board:** `font-mono text-[#f5f0e0] text-sm tracking-wider` (monospace for mechanical flap character feel).
- **Platform Numbers:** `font-mono text-[#f5f0e0] text-2xl font-bold` (large, commanding numerals in circular frames).
- **Station Name:** `font-serif text-[#f5f0e0] text-2xl tracking-wide uppercase` (grand station nameplates above entrance).
- **Labels:** `font-medium uppercase tracking-[0.25em] text-[10px] text-[#f5f0e0]/40` (section dividers, column headers, track indicators).
- Typography should feel like Victorian railway signage -- large engraved serif station names, mechanical monospace departure characters, and precise sans-serif schedule data.

## Component Architecture Pattern

- **Arched Glass Ceiling Banner:** Full-width arched grid window pattern with iron frame, establishing the grand station hall atmosphere.
- **Departure Board Panels:** Dark departure board containers (`bg-[#1a1a1a]`) with monospace cream text, flap character dividers, and brass platform numbers.
- **Platform Indicator Clusters:** Groups of circular platform number indicators with iron borders, used as navigation or status elements.
- **Station Clock Centerpiece:** Grand clock face as a hero element or sidebar accent, anchoring the temporal nature of rail travel.
- **Iron Column Dividers:** Vertical structural elements separating content columns, reinforcing the iron-and-glass architecture.
- **Locomotive Silhouette Headers:** Section headers featuring steam locomotive SVG silhouettes with tracking text.

## Interaction Rules

- Departure board characters flip with CSS 3D transform animation (`rotateX`) when values change -- top half flips down, bottom half reveals new character.
- Flip animation should cascade row by row with 50-100ms delay per row, creating a wave of mechanical updates across the board.
- Platform number indicators scale slightly (`1.05x`) on hover with brass glow intensification, as if illuminated by gas lamp.
- Station clock second hand ticks with discrete jumps (not smooth rotation) at 1-second intervals, matching mechanical clock behavior.
- Iron column accents have subtle parallax movement on scroll, creating depth as if columns are structural.
- Arched glass ceiling panels have a gentle opacity pulse (0.08 to 0.15 over 8s) suggesting light shifting through glass.
- Departure rows highlight with a brief cream flash (`bg-[#f5f0e0]/5`) when their status changes, then return to normal.
- Steam locomotive silhouette drifts slowly across the header (15s cycle) with opacity fade at edges.
- All mechanical animations pause when `prefers-reduced-motion` is active.

## Reusable Tailwind Tokens

- Iron dark: `bg-[#2a2a2a]`.
- Departure board: `bg-[#1a1a1a] border border-[#3a3a3a]`.
- Flap character cell: `relative w-8 h-10 bg-[#111] rounded-sm overflow-hidden border border-[#333]` with `bg-[#0a0a0a]` divider line at `top-1/2`.
- Flap text: `text-[#f5f0e0] text-lg font-mono font-bold`.
- Platform circle: `relative w-16 h-16 rounded-full border-4 border-[#3a3a3a]` inner `bg-[#1a1a1a]`.
- Platform number: `text-[#f5f0e0] text-2xl font-bold font-mono`.
- Clock face: `rounded-full bg-[#f5f0e0] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]`.
- Clock ring: `rounded-full border-4 border-[#b8a040] shadow-[0_0_15px_rgba(184,160,64,0.15)]`.
- Clock hands: `bg-[#2a2a2a] origin-bottom rounded-full`.
- Brass accent: `text-[#b8a040]` or `border-[#b8a040]`.
- Brass hardware: `bg-[#b8a040] shadow-sm`.
- Rivet: `w-2 h-2 bg-[#3a3a3a] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
- Iron column: `bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#3a3a3a] rounded-sm`.
- Glass ceiling: `bg-[#b0c4d8]/10` over `bg-[#1a2a3a]/30` with iron frame bars.
- Stone floor: `bg-[#8a8a7a]`.
- Steam white: `text-[#f0f0f0]`.
- Clock cream: `text-[#f5f0e0]`.
- Steel blue: `text-[#4a5a6a]` or `border-[#4a5a6a]`.
- Iron rivet beam: `bg-[#2a2a2a]` with child rivet dots at regular intervals.

## Quality Checklist

- Arched glass ceiling pattern (grid window with iron frame) is visually prominent in at least one element per view.
- Split-flap departure board with monospace characters and flap divider line present in at least one component per page.
- Platform number indicators (bold numerals in circular iron frames) appear in at least one element per page.
- Grand station clock with Roman numerals present as hero element or sidebar accent.
- Iron dark dominates all structural and background elements.
- Clock face cream and steam white provide readable text against all dark surfaces.
- Brass accents used consistently for clock mechanisms, platform numbers, and interactive highlights.
- Stone gray grounds the palette in physical reality -- used for floor textures and structural neutrals.
- Departure board uses mechanical monospace typography with proper flap character cell structure.
- Iron column accents reinforce the architectural framework between content sections.
- Steam locomotive silhouette appears as decorative section header accent.
- Typography feels like Victorian railway signage -- engraved serif, mechanical monospace, precise sans-serif.
- The aesthetic reads as a grand railway terminal -- iron and glass, stone and brass, mechanical and kinetic.

## Anti-Patterns

- Bright white backgrounds (railway terminals have dark iron and glass, not white gallery walls).
- Digital or neon-feeling accents (the palette is Victorian industrial, not modern digital).
- Missing arched glass ceiling pattern (the architectural identity IS iron-and-glass).
- Missing split-flap departure board (the mechanical heartbeat of the station).
- Missing platform number indicators (the essential navigational element of rail travel).
- Busy dense layouts with no structural rhythm (the station hall has grand columns and open space).
- Smooth continuous clock hand animation (Victorian clocks tick in discrete mechanical steps).
- Sans-serif everywhere without serif display faces (station nameplates and Victorian signage demand serif typography).
- Missing rivet details or iron texture (the mechanical construction aesthetic is essential).
- Pastel or saturated primary colors (the palette is industrial: iron, glass, stone, brass).
- Missing locomotive silhouette or rail motifs (the railway theme must be present).
- Departure board characters in proportional font (split-flap boards demand monospace).
- Fast flashy animations (mechanical flaps flip with deliberate mechanical timing).
- Clock without Roman numerals (the grand station clock is a Victorian centerpiece).
- Brass used as dominant color (it is an accent, not a background -- the station is iron-dark).

## Accessibility Considerations

- Split-flap flip animations must respect `prefers-reduced-motion: reduce` -- replace with instant character replacement, no 3D transform.
- Clock face cream `#f5f0e0` on departure board black `#1a1a1a` exceeds 15:1 contrast ratio -- use this for all primary text.
- Steam white `#f0f0f0` on iron dark `#2a2a2a` exceeds 14:1 contrast ratio -- safe for all text.
- Brass `#b8a040` on departure board black `#1a1a1a` exceeds 6:1 contrast ratio -- safe for interactive elements and platform numbers.
- Brass `#b8a040` on clock face cream `#f5f0e0` falls below 3:1 -- never use brass text on cream clock faces.
- Glass pale blue `#b0c4d8` on iron dark `#2a2a2a` exceeds 6:1 contrast ratio -- safe for secondary text and labels.
- Platform stone `#8a8a7a` on iron dark `#2a2a2a` exceeds 3:1 -- use only for decorative elements and large structural surfaces, not for text.
- Iron frame structural bars must use sufficient visual weight (minimum 2px) to be perceivable -- thin decorative lines may vanish at low resolution.
- Departure board rows must maintain clear visual separation -- use alternating subtle background shifts within the dark range (`#1a1a1a` to `#222`).
- All interactive platform indicators and departure board elements must have visible focus indicators -- use `ring-2 ring-[#f5f0e0]` on focus-visible.
- Station clock hands must have sufficient contrast against the cream face -- use `#2a2a2a` (exceeds 10:1 on cream).
- Arched glass ceiling grid lines must remain below 0.3 opacity to avoid creating visual noise that competes with content.
- Locomotive silhouette and luggage cart accents must use `opacity` values that maintain the decorative nature without interfering with content hierarchy.
