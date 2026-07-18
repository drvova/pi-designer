---
name: lighthouse-interior-ui
description: Build lighthouse interior UI components (spiral iron staircase, lantern room Fresnel lens, keeper logbook, oil lamp, curved white walls, storm outside) with tight curved interior spaces, the warm glow of the lantern room, and the dramatic contrast of storm raging beyond thick glass. Trigger this skill when the user asks for lighthouse design, lantern room UI, Fresnel lens, keeper logbook, spiral staircase, maritime tower, coastal beacon, storm-through-window, oil lamp glow, lighthouse interior, or nautical tower interface.
---

# Lighthouse Interior UI

Use this skill to design and build immersive interfaces inspired by the interior of a working lighthouse: tight curved white walls that follow the circular tower shape, a spiral iron staircase winding upward, the warm golden glow of the lantern room with its Fresnel lens prismatic refractions, oil lamp flame accents, a keeper's logbook with handwriting-style text areas, and beyond the thick glass windows — a storm raging with rain streaks and lightning. The aesthetic is intimate, warm, slightly claustrophobic, and dramatically lit — the lonely interior of a coastal beacon standing against the sea.

## Non-Negotiable Foundations

These principles are absolute. Every lighthouse interior UI must satisfy all of them. No exceptions.

1. **Curved walls define every surface.** The lighthouse is a cylinder. Every panel, card, and container must evoke curved white walls that wrap around the viewer. Use subtle CSS curves (`border-radius`, curved box-shadows, perspective transforms) to suggest the cylindrical interior. Flat rectangular surfaces break the lighthouse illusion. The curve is the architecture.

2. **The lantern room is the warm heart.** The top of every page or primary section radiates warm golden light from the lantern room. This is the brightest, warmest area — it draws the eye upward and provides the dominant light source. Use `#ffcc66` warm glow with soft radial gradients. Everything below the lantern room is lit by its warm cast.

3. **Storm is always visible.** Beyond the thick glass windows, a storm rages. Rain streaks, occasional lightning flashes, and the dark ocean sky are always present in the background layer. The storm provides the dramatic contrast that makes the warm interior feel safe. Without the storm, the lighthouse has no story.

4. **Iron staircase is structural and decorative.** The spiral iron staircase is both a functional element (navigation metaphor) and a visual motif. Its concentric circles when viewed from above provide a powerful geometric pattern. Use it for progress indicators, navigation elements, and section transitions.

5. **The keeper's logbook is the voice.** Handwriting-style text areas in cream/logbook paper texture represent the keeper's voice — notes, observations, records. These should feel hand-written, slightly imperfect, with serif or handwriting fonts. They are the human element in the mechanical lighthouse.

6. **Oil lamp warmth punctuates the darkness.** Small flame-shaped accent elements in amber and warm yellow appear as decorative punctuation — status indicators, notification dots, activity markers. They are the small warm lights scattered through the keeper's working space.

7. **The Fresnel lens is sacred geometry.** Concentric arcs and prismatic light refractions are the visual signature of the lantern room. Use concentric arc SVGs with subtle rainbow tints to represent the Fresnel lens. These appear in header areas, hero sections, and light-related UI elements. They are precise, geometric, and luminous.

8. **Tight spaces create intimacy.** Unlike the expansive conservatory, the lighthouse is a tight vertical tube. Content should feel enclosed, slightly compressed, cozy. Use generous padding on sides but keep horizontal space constrained. The viewer should feel they could reach out and touch both walls.

## Core Material Recipes

### 1) Curved White Interior Wall

The primary surface — a curved white wall panel that evokes the cylindrical lighthouse interior. Subtle curvature through border-radius and inner shadow suggests the round tower shape.

```html
<div class="relative bg-[#f5f0e0] rounded-2xl border border-[#e0d8c0] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.04),0_0_30px_rgba(255,204,102,0.06)]">
  <!-- Inner shadow suggests curved wall surface -->
  <!-- Warm lantern glow cast from above -->
  <div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#ffcc66]/8 to-transparent rounded-t-2xl pointer-events-none"></div>
  <!-- Content -->
</div>
```

Tailwind: `bg-[#f5f0e0] rounded-2xl border border-[#e0d8c0] shadow-[inset_0_0_40px_rgba(0,0,0,0.04),0_0_30px_rgba(255,204,102,0.06)]`.

For more pronounced curvature, use `rounded-[40px]` and add a perspective wrapper:
```html
<div class="perspective-[800px]">
  <div class="bg-[#f5f0e0] rounded-[40px] border border-[#e0d8c0] p-6 transform-[rotateX(1deg)] shadow-[inset_0_0_60px_rgba(0,0,0,0.05)]">
    <!-- Content on curved wall -->
  </div>
</div>
```

### 2) Spiral Staircase (View from Above)

Concentric iron circles narrowing downward, creating the iconic lighthouse spiral staircase view. Used as a decorative element, navigation metaphor, or section divider.

```html
<svg viewBox="0 0 300 300" class="w-48 h-48 mx-auto opacity-30">
  <!-- Outer ring (top of staircase, closest to viewer) -->
  <circle cx="150" cy="150" r="140" fill="none" stroke="#3a3a3a" stroke-width="3" opacity="0.8"/>
  <circle cx="150" cy="150" r="130" fill="none" stroke="#3a3a3a" stroke-width="2" opacity="0.7"/>
  <!-- Stair treads (radial lines) -->
  <g stroke="#3a3a3a" stroke-width="1" opacity="0.5">
    <line x1="150" y1="10" x2="150" y2="50"/>
    <line x1="150" y1="250" x2="150" y2="290"/>
    <line x1="10" y1="150" x2="50" y2="150"/>
    <line x1="250" y1="150" x2="290" y2="150"/>
    <line x1="51" y1="51" x2="78" y2="78"/>
    <line x1="249" y1="51" x2="222" y2="78"/>
    <line x1="51" y1="249" x2="78" y2="222"/>
    <line x1="249" y1="249" x2="222" y2="222"/>
  </g>
  <!-- Middle rings -->
  <circle cx="150" cy="150" r="100" fill="none" stroke="#3a3a3a" stroke-width="2" opacity="0.6"/>
  <circle cx="150" cy="150" r="70" fill="none" stroke="#3a3a3a" stroke-width="1.5" opacity="0.5"/>
  <circle cx="150" cy="150" r="45" fill="none" stroke="#3a3a3a" stroke-width="1.5" opacity="0.4"/>
  <!-- Inner rings (deeper, smaller) -->
  <circle cx="150" cy="150" r="25" fill="none" stroke="#3a3a3a" stroke-width="1" opacity="0.3"/>
  <circle cx="150" cy="150" r="12" fill="none" stroke="#3a3a3a" stroke-width="1" opacity="0.25"/>
  <!-- Center void (the shaft going down) -->
  <circle cx="150" cy="150" r="5" fill="#1a2a3a" opacity="0.4"/>
  <!-- Central pillar -->
  <circle cx="150" cy="150" r="3" fill="#3a3a3a" opacity="0.6"/>
</svg>
```

Tailwind: `opacity-30` on the SVG container. The rings decrease in stroke-width and opacity as they shrink, creating depth. The center is dark (the shaft descending into darkness).

### 3) Fresnel Lens Prismatic Element

Concentric arc SVG with light refraction tints — the prismatic heart of the lantern room. These arcs split white light into spectral colors, creating the lighthouse beam.

```html
<svg viewBox="0 0 300 150" class="w-full h-auto">
  <defs>
    <linearGradient id="prismatic-1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff6666" stop-opacity="0.3"/>
      <stop offset="25%" stop-color="#ffcc66" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#66cc66" stop-opacity="0.3"/>
      <stop offset="75%" stop-color="#6699ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#cc66ff" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="prismatic-2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff9966" stop-opacity="0.25"/>
      <stop offset="33%" stop-color="#ffff66" stop-opacity="0.25"/>
      <stop offset="66%" stop-color="#66ffcc" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#9966ff" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <!-- Outer prismatic arc -->
  <path d="M30,140 Q150,10 270,140" fill="none" stroke="url(#prismatic-1)" stroke-width="3"/>
  <!-- Middle arc -->
  <path d="M60,140 Q150,40 240,140" fill="none" stroke="url(#prismatic-2)" stroke-width="2.5"/>
  <!-- Inner arc -->
  <path d="M90,140 Q150,65 210,140" fill="none" stroke="url(#prismatic-1)" stroke-width="2"/>
  <!-- Core arc -->
  <path d="M110,140 Q150,85 190,140" fill="none" stroke="url(#prismatic-2)" stroke-width="1.5"/>
  <!-- Central glow -->
  <circle cx="150" cy="130" r="15" fill="#ffcc66" opacity="0.15"/>
  <circle cx="150" cy="130" r="8" fill="#ffcc66" opacity="0.25"/>
</svg>
```

Tailwind: `w-full h-auto` on the SVG. The prismatic gradients sweep through rainbow tints at low opacity (0.25-0.30) — they suggest color without overwhelming. The central glow represents the focused light source.

### 4) Storm Through Window

Rain streaks and dark ocean sky visible through a thick glass window. The storm provides the dramatic contrast that makes the warm interior feel safe and sheltered.

```html
<div class="relative bg-[#1a2a3a] rounded-xl overflow-hidden border-4 border-[#3a3a3a] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
  <!-- Window frame (thick glass edge) -->
  <div class="absolute inset-0 border-8 border-[#f5f0e0]/10 rounded-xl pointer-events-none z-10"></div>
  <!-- Dark storm sky -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a1520] via-[#1a2a3a] to-[#0d1a28]"></div>
  <!-- Lightning flash (subtle) -->
  <div class="absolute inset-0 bg-white/0 animate-[lightning-flash_12s_ease-in-out_infinite] pointer-events-none"></div>
  <!-- Rain streaks -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-0 left-[15%] w-[1px] h-[60%] bg-gradient-to-b from-white/0 via-white/15 to-white/0 rotate-[8deg] animate-[rain-fall_0.8s_linear_infinite]"></div>
    <div class="absolute top-0 left-[30%] w-[1px] h-[70%] bg-gradient-to-b from-white/0 via-white/12 to-white/0 rotate-[6deg] animate-[rain-fall_0.6s_linear_0.2s_infinite]"></div>
    <div class="absolute top-0 left-[48%] w-[1px] h-[55%] bg-gradient-to-b from-white/0 via-white/18 to-white/0 rotate-[10deg] animate-[rain-fall_0.7s_linear_0.1s_infinite]"></div>
    <div class="absolute top-0 left-[65%] w-[1px] h-[65%] bg-gradient-to-b from-white/0 via-white/10 to-white/0 rotate-[7deg] animate-[rain-fall_0.9s_linear_0.4s_infinite]"></div>
    <div class="absolute top-0 left-[82%] w-[1px] h-[50%] bg-gradient-to-b from-white/0 via-white/14 to-white/0 rotate-[9deg] animate-[rain-fall_0.75s_linear_0.3s_infinite]"></div>
    <div class="absolute top-0 left-[42%] w-[1px] h-[45%] bg-gradient-to-b from-white/0 via-white/8 to-white/0 rotate-[11deg] animate-[rain-fall_0.65s_linear_0.5s_infinite]"></div>
  </div>
  <!-- Content overlay (e.g., time, weather data) -->
  <div class="relative z-10 p-6 text-[#f5f0e0]/80">
    <!-- Dashboard content -->
  </div>
</div>

<style>
@keyframes rain-fall {
  0% { transform: translateY(-100%) rotate(8deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(200%) rotate(8deg); opacity: 0; }
}

@keyframes lightning-flash {
  0%, 94%, 96%, 100% { background-color: transparent; }
  95% { background-color: rgba(255,255,255,0.04); }
  97% { background-color: rgba(255,255,255,0.02); }
}
</style>
```

Tailwind for the window frame: `bg-[#1a2a3a] rounded-xl overflow-hidden border-4 border-[#3a3a3a] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]`. Lightning is a brief, rare flash — 95-97% of the cycle is darkness. Rain streaks are thin, angled, and fast.

### 5) Keeper Logbook Page

A cream-colored paper surface with subtle ruled lines and handwriting-style typography. This is the keeper's voice — handwritten observations in the tower log.

```html
<div class="relative bg-[#f0ead0] border border-[#d4c8a0] rounded-sm p-6 shadow-[2px_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
  <!-- Ruled lines -->
  <div class="absolute inset-0 pointer-events-none" style="background-image: repeating-linear-gradient(transparent, transparent 27px, #d4c8a0 27px, #d4c8a0 28px); background-position: 0 12px;"></div>
  <!-- Left margin line -->
  <div class="absolute top-0 bottom-0 left-16 w-[1px] bg-[#c8a080]/40 pointer-events-none"></div>
  <!-- Logbook content -->
  <div class="relative z-10 font-['Caveat','Patrick_Hand',cursive] text-[#3a3020] text-lg leading-[28px] pl-20">
    <p>June 14, 1923 — Storm arrived at dusk. Wind from the northeast, steady 40 knots. Fresnel lens cleaned at 1800. Oil reserves adequate for 12 days.</p>
  </div>
  <!-- Page curl effect (bottom-right corner) -->
  <div class="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#d4c8a0] to-[#f0ead0] shadow-[-2px_-2px_4px_rgba(0,0,0,0.05)] rounded-tl-sm"></div>
</div>
```

Tailwind: `bg-[#f0ead0] border border-[#d4c8a0] rounded-sm shadow-[2px_2px_8px_rgba(0,0,0,0.08)]`. The ruled lines use `repeating-linear-gradient` at 28px intervals. The margin line sits at `left-16`. Typography uses Google Font `Caveat` or `Patrick Hand` for the handwriting feel.

### 6) Oil Lamp Flame Accent

A small flame-shaped element that serves as a status indicator, notification dot, or warm accent. The flame flickers gently and casts a tiny amber glow.

```html
<div class="relative inline-flex items-center justify-center w-6 h-8">
  <!-- Flame glow -->
  <div class="absolute bottom-0 w-10 h-6 bg-[#e0a030]/20 rounded-full blur-[6px]"></div>
  <!-- Flame body -->
  <svg viewBox="0 0 20 30" class="w-4 h-6 relative z-10 animate-[flame-flicker_2s_ease-in-out_infinite]">
    <defs>
      <linearGradient id="flame-grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#e0a030"/>
        <stop offset="40%" stop-color="#ffcc66"/>
        <stop offset="70%" stop-color="#ffee88"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
    </defs>
    <path d="M10,0 Q14,8 13,14 Q16,10 14,18 Q12,24 10,26 Q8,24 6,18 Q4,10 7,14 Q6,8 10,0Z" fill="url(#flame-grad)" opacity="0.9"/>
    <!-- Blue base -->
    <ellipse cx="10" cy="26" rx="3" ry="2" fill="#4488cc" opacity="0.4"/>
  </svg>
  <!-- Wick (thin line below flame) -->
  <div class="absolute bottom-0 w-[1px] h-2 bg-[#3a3020]"></div>
</div>

<style>
@keyframes flame-flicker {
  0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.9; }
  25% { transform: scaleX(0.95) scaleY(1.03); opacity: 0.85; }
  50% { transform: scaleX(1.02) scaleY(0.97); opacity: 0.92; }
  75% { transform: scaleX(0.97) scaleY(1.01); opacity: 0.88; }
}
</style>
```

Tailwind: `animate-[flame-flicker_2s_ease-in-out_infinite]` on the SVG. The flame uses a vertical gradient from amber to white with a blue base. The flicker is subtle — no more than 5% scale variance. The glow underneath provides ambient warmth.

### 7) Lighthouse Window Frame

A circular or arched window frame that represents the thick glass windows of the lighthouse tower. Used as a container for storm views, data displays, or decorative elements.

```html
<div class="relative w-64 h-64 mx-auto">
  <!-- Outer iron frame -->
  <div class="absolute inset-0 rounded-full border-8 border-[#3a3a3a] shadow-[0_0_0_4px_#2a2a2a,0_0_20px_rgba(0,0,0,0.2)]"></div>
  <!-- Inner glass pane -->
  <div class="absolute inset-8 rounded-full bg-[#1a2a3a] overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]">
    <!-- Storm view inside -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a1520] to-[#1a2a3a]"></div>
    <!-- Rain streaks -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0 rotate-[8deg] animate-[rain-fall_0.7s_linear_infinite]"></div>
      <div class="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-white/0 via-white/8 to-white/0 rotate-[6deg] animate-[rain-fall_0.8s_linear_0.3s_infinite]"></div>
    </div>
    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center h-full text-[#f5f0e0] text-sm font-serif">
      <!-- Data or content here -->
    </div>
  </div>
  <!-- Cross mullions (iron window dividers) -->
  <div class="absolute inset-0 flex items-center pointer-events-none z-20">
    <div class="w-full h-[3px] bg-[#3a3a3a] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
  </div>
  <div class="absolute inset-0 flex justify-center pointer-events-none z-20">
    <div class="h-full w-[3px] bg-[#3a3a3a] shadow-[1px_0_2px_rgba(0,0,0,0.3)]"></div>
  </div>
  <!-- Iron frame rivets at compass points -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-[#3a3a3a] border border-[#2a2a2a] z-30"></div>
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3 h-3 rounded-full bg-[#3a3a3a] border border-[#2a2a2a] z-30"></div>
  <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-3 rounded-full bg-[#3a3a3a] border border-[#2a2a2a] z-30"></div>
  <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3 h-3 rounded-full bg-[#3a3a3a] border border-[#2a2a2a] z-30"></div>
</div>
```

### 8) Lighthouse Interior Button

A warm, lantern-lit button that feels like it belongs on the keeper's control panel.

- `relative bg-gradient-to-b from-[#f5f0e0] to-[#e8dcc0] text-[#3a3020] font-medium rounded-lg px-6 py-3 border border-[#3a3a3a]/30 shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,204,102,0.2),0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-500`.
- For a "lantern room active" state, add warm glow: `hover:shadow-[0_0_20px_rgba(255,204,102,0.3)] hover:border-[#ffcc66]/30`.

### 9) Iron Staircase Navigation

A vertical navigation element using the spiral staircase motif. Each step is a navigation link, with the active step highlighted in warm lantern light.

```html
<nav class="flex flex-col items-center gap-1 py-4">
  <div class="w-8 h-1 rounded-full bg-[#3a3a3a]/20"></div>
  <a href="#" class="w-10 h-1 rounded-full bg-[#3a3a3a]/40 hover:bg-[#ffcc66]/60 transition-all duration-500"></a>
  <a href="#" class="w-12 h-1 rounded-full bg-[#ffcc66] shadow-[0_0_8px_rgba(255,204,102,0.4)]"></a>
  <a href="#" class="w-10 h-1 rounded-full bg-[#3a3a3a]/40 hover:bg-[#ffcc66]/60 transition-all duration-500"></a>
  <a href="#" class="w-8 h-1 rounded-full bg-[#3a3a3a]/30 hover:bg-[#ffcc66]/50 transition-all duration-500"></a>
  <a href="#" class="w-6 h-1 rounded-full bg-[#3a3a3a]/20 hover:bg-[#ffcc66]/40 transition-all duration-500"></a>
  <div class="w-4 h-4 mt-2 rounded-full bg-[#1a2a3a] border border-[#3a3a3a]/40"></div>
</nav>
```

The steps narrow toward the bottom (the descending staircase), with the widest step being the active page. The center dot at the bottom represents the shaft going down. The active step glows with `#ffcc66` lantern light.

### 10) Keeper Status Dashboard Card

A curved wall panel showing lighthouse operational status — light status, oil level, weather, and keeper notes.

```html
<div class="relative bg-[#f5f0e0] rounded-[30px] border border-[#e0d8c0] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.04),0_0_30px_rgba(255,204,102,0.06)]">
  <!-- Lantern glow from top -->
  <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#ffcc66]/10 to-transparent rounded-t-[30px] pointer-events-none"></div>
  <!-- Status header -->
  <div class="flex items-center gap-3 mb-4">
    <!-- Oil lamp flame indicator -->
    <div class="w-5 h-6 flex items-center justify-center">
      <svg viewBox="0 0 20 30" class="w-3 h-5 animate-[flame-flicker_2s_ease-in-out_infinite]">
        <path d="M10,2 Q14,10 13,16 Q16,12 14,20 Q12,26 10,28 Q8,26 6,20 Q4,12 7,16 Q6,10 10,2Z" fill="#e0a030"/>
      </svg>
    </div>
    <h3 class="font-serif text-lg text-[#3a3020] tracking-wide">Tower Status</h3>
  </div>
  <!-- Status grid -->
  <div class="grid grid-cols-2 gap-3">
    <div class="bg-[#f5f0e0]/60 rounded-xl p-3 border border-[#e0d8c0]/60">
      <span class="text-xs font-serif uppercase tracking-wider text-[#3a3020]/40">Light</span>
      <p class="text-[#2a6a2a] font-medium mt-1">Active — Beam OK</p>
    </div>
    <div class="bg-[#f5f0e0]/60 rounded-xl p-3 border border-[#e0d8c0]/60">
      <span class="text-xs font-serif uppercase tracking-wider text-[#3a3020]/40">Oil Level</span>
      <p class="text-[#e0a030] font-medium mt-1">72% — 9 days</p>
    </div>
    <div class="bg-[#f5f0e0]/60 rounded-xl p-3 border border-[#e0d8c0]/60">
      <span class="text-xs font-serif uppercase tracking-wider text-[#3a3020]/40">Weather</span>
      <p class="text-[#1a2a3a] font-medium mt-1">NE 40kt — Storm</p>
    </div>
    <div class="bg-[#f5f0e0]/60 rounded-xl p-3 border border-[#e0d8c0]/60">
      <span class="text-xs font-serif uppercase tracking-wider text-[#3a3020]/40">Visibility</span>
      <p class="text-[#8a6a3a] font-medium mt-1">0.3 nm — Poor</p>
    </div>
  </div>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Wall White | `#f5f0e0` | Primary interior surface. The curved white-plastered walls of the lighthouse tower, slightly warm from age and oil lamp light. Used for card backgrounds, content surfaces. |
| Iron Staircase | `#3a3a3a` | Structural iron — staircase, window frames, railings, hardware. The dark cast iron of maritime engineering. Used for framework, borders, grid lines, navigation elements. |
| Lantern Warm | `#ffcc66` | The golden glow of the lantern room. Primary accent for active states, highlights, warm light effects. The most luminous color in the palette. |
| Fresnel Prismatic | rainbow tints at 0.25-0.30 opacity | Spectral light refractions from the Fresnel lens. Used only on concentric arc elements in the lantern room area. Never used on text or interactive surfaces. |
| Oil Lamp Amber | `#e0a030` | Warm amber of oil lamp flames. Used for flame accents, warm indicators, secondary highlights. Darker and more orange than the lantern gold. |
| Storm Dark | `#1a2a3a` | The dark ocean sky during a storm. Used for window backgrounds, dark UI sections, and the dramatic exterior contrast. |
| Wood Warm | `#8a6a3a` | Aged wood of the keeper's desk, stairs treads, door frames. Used for secondary warm accents and text on light backgrounds. |
| Logbook Cream | `#f0ead0` | The yellowed cream of old paper. Used specifically for logbook/note surfaces and handwriting areas. Distinct from the cooler wall white. |
| Wall Shadow | `rgba(0,0,0,0.04)` | The subtle shadow that suggests wall curvature. Used as inset box-shadows on wall panels. Never harsh — the interior is softly lit. |
| Lightning Flash | `rgba(255,255,255,0.04)` | The barely-perceptible white flash of distant lightning through storm clouds. Rare, brief, low-opacity. |

Rules: The palette is a warm-cool duality. Interior surfaces are warm (wall white, lantern gold, amber, wood, cream). Exterior is dark and cold (storm dark). Iron elements are neutral-dark and structural. Prismatic colors appear only on Fresnel lens elements. The warm interior should feel like a refuge from the cold storm outside — warmth dominates the foreground, cold dominates the background.

## Typography Recommendations

- **Display:** Playfair Display, EB Garamond (authoritative serif with nautical character). For section titles and dashboard headers — commanding and period-appropriate.
- **Body:** Lora, Source Serif 4 (warm readable serif). Body text should feel like printed matter from the keeper's era — formal but warm.
- **Logbook text:** Caveat, Patrick Hand, or similar handwriting font (for keeper's notes). Applied at `font-['Caveat',cursive] text-lg leading-[28px]` for the ruled-line logbook effect.
- **Technical annotations:** `font-mono text-xs text-[#3a3a3a]/50` for measurements, coordinates, and instrumental readings. The monospace suggests precision instruments.
- **Section dividers:** `font-serif uppercase tracking-[0.25em] text-[10px] text-[#3a3a3a]/30` for horizontal rules between sections — like engraved text on brass plaques.
- Typography should feel like it belongs in a maritime keeper's station: serif-dominant, slightly formal, warm from lamplight. Never futuristic, never cold sans-serif for display, never casual for primary headings.

## Component Architecture Pattern

Lighthouse interior UI follows a vertical layered architecture that mirrors the physical tower — warm interior wrapped around a dark core, with storm visible through openings:

**Layer 1 — Storm Exterior (outermost background):** The dark storm sky visible through windows. `bg-[#1a2a3a]` with rain streak animations. Always present as the deepest background layer, providing dramatic contrast.

**Layer 2 — Iron Window Frame:** Thick iron frames that define window openings. These are the boundaries between the warm interior and the cold storm. `border-[#3a3a3a]` at 4-8px width. They create the porthole/window shapes through which the storm is visible.

**Layer 3 — Curved White Wall:** The primary content surface. `bg-[#f5f0e0]` with subtle curvature (border-radius, inset shadows) and warm lantern glow from above. This is where all interactive content lives.

**Layer 4 — Lantern Glow:** A warm golden light cast from above, suggesting the lantern room overhead. `bg-gradient-to-b from-[#ffcc66]/10 to-transparent` at the top of wall panels. This is always present and always originates from the top.

**Layer 5 — Logbook / Detail Surface:** Specialized content surfaces like logbook pages, instrument panels, and status cards. These sit on top of the wall surface with their own paper texture and shadow.

**Layer 6 — Flame Accents:** Oil lamp flame indicators that dot the interface. Small, warm, gently flickering. They are the final decorative layer.

Component hierarchy:
```
LighthouseShell (Layer 1: storm background)
  IronFrame (Layer 2: window boundaries)
    CurvedWall (Layer 3: content surface)
      LanternGlow (Layer 4: overhead warm light)
        ContentArea (interactive elements)
          LogbookPage (Layer 5: specialized surfaces)
          StatusCard (Layer 5: instrument panels)
          FlameIndicator (Layer 6: oil lamp accents)
        FresnelLens (prismatic arcs, lantern room area)
      StaircaseNav (spiral staircase navigation)
```

The critical relationship is the warm interior (Layers 3-6) always surrounded by the cold storm (Layer 1) visible through iron-framed openings (Layer 2). This contrast is the emotional core of the lighthouse aesthetic.

## Interaction Rules

1. **Hover warms the surface.** When a user hovers over a wall panel, increase the lantern glow opacity from 0.06 to 0.12 and add a subtle warm shadow. The lantern room seems to brighten in response to attention.

2. **Lightning illuminates through windows.** When lightning flashes in the storm background, the interior surfaces should briefly pick up a cool blue-white cast. This is a subtle 50ms flash at very low opacity — `rgba(200,210,230,0.03)` — that makes the storm feel real and present.

3. **Flame accents flicker independently.** Each oil lamp flame element should have a different animation duration (1.8-2.5s) and different keyframe offsets. Flames never synchronize — they are individual light sources.

4. **Scroll reveals the staircase.** As the user scrolls, the spiral staircase navigation element should rotate very slightly (0.5-1 degree per 100px scrolled), creating the illusion of looking down into the shaft as you descend the page.

5. **Storm intensifies at edges.** Rain streaks should be more visible near window-frame elements and fade away near the center of wall panels. The storm is always pressing against the glass but the interior feels sheltered in the center.

6. **Logbook text types on appearance.** When a logbook entry scrolls into view, text should appear with a subtle typewriter effect — not character-by-character (too slow) but line-by-line with a 200ms delay per line. This mimics the keeper writing in real time.

7. **Fresnel arcs pulse with light.** The prismatic concentric arcs should have a very slow opacity pulse (0.25 to 0.35 over 6s) suggesting the rotating beam of the lighthouse sweeping through the lens.

8. **Transitions are measured and deliberate.** All transitions use `duration-500` to `duration-700`. The lighthouse interior is a place of routine and steadiness. Quick transitions feel like panic, not keeper's calm.

9. **Click feedback is a lantern brightening.** Button active states should briefly increase the warm glow around the button — `shadow-[0_0_20px_rgba(255,204,102,0.3)]` for 200ms then settling back. The click triggers a momentary brightening of the lantern.

10. **Window views shift on scroll.** The storm scene visible through windows should shift subtly (parallax at 0.3x scroll speed) to suggest the viewer moving past windows on the spiral staircase.

## Reusable Tailwind Tokens

- **Curved wall:** `bg-[#f5f0e0] rounded-2xl border border-[#e0d8c0] shadow-[inset_0_0_40px_rgba(0,0,0,0.04)]`
- **Lantern glow top:** `bg-gradient-to-b from-[#ffcc66]/8 to-transparent`
- **Iron frame:** `border-[#3a3a3a] border-4 shadow-[0_0_0_4px_#2a2a2a]`
- **Storm background:** `bg-gradient-to-b from-[#0a1520] via-[#1a2a3a] to-[#0d1a28]`
- **Rain streak:** `w-[1px] bg-gradient-to-b from-white/0 via-white/12 to-white/0 rotate-[8deg]`
- **Lightning flash:** `animate-[lightning-flash_12s_ease-in-out_infinite]`
- **Logbook paper:** `bg-[#f0ead0] border border-[#d4c8a0] shadow-[2px_2px_8px_rgba(0,0,0,0.08)]`
- **Logbook lines:** `repeating-linear-gradient(transparent,transparent 27px,#d4c8a0 27px,#d4c8a0 28px)`
- **Oil flame:** `animate-[flame-flicker_2s_ease-in-out_infinite]` on flame SVG
- **Flame glow:** `bg-[#e0a030]/20 rounded-full blur-[6px]`
- **Fresnel arc:** concentric `<path>` arcs with prismatic linearGradient at 0.25-0.30 opacity
- **Staircase ring:** `<circle>` elements with decreasing radius, stroke-width, and opacity
- **Warm button:** `bg-gradient-to-b from-[#f5f0e0] to-[#e8dcc0] border border-[#3a3a3a]/30 shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]`
- **Brass divider:** `font-serif uppercase tracking-[0.25em] text-[10px] text-[#3a3a3a]/30`
- **Window porthole:** `rounded-full border-8 border-[#3a3a3a] shadow-[0_0_0_4px_#2a2a2a,0_0_20px_rgba(0,0,0,0.2)]`
- **Interior warm ambient:** `shadow-[0_0_30px_rgba(255,204,102,0.06)]`

## Quality Checklist

- At least one curved white wall panel with `rounded-2xl` or greater and warm inset shadow.
- Lantern room warm glow present at the top of primary panels (`from-[#ffcc66]/8`).
- Storm visible through at least one window element with rain streak animation.
- Spiral staircase motif present (concentric circles SVG or stepped navigation).
- Oil lamp flame accent with flicker animation (at least one per page).
- Fresnel lens prismatic arcs in the lantern room / header area.
- Keeper logbook page surface with ruled lines and handwriting typography.
- Color palette maintains warm-interior / cold-storm duality.
- Iron framework (`#3a3a3a`) visible as window frames, staircase, or railings.
- Typography is serif-dominant with handwriting font for logbook text.
- All animations respect `prefers-reduced-motion`.
- Transitions are 500ms+ for steady, measured pacing.
- The overall impression reads as "inside a lighthouse during a storm" — warm, intimate, slightly claustrophobic, dramatically lit.
- Lightning flashes are rare and subtle — never strobing, never frequent.

## Anti-Patterns

- **Flat white backgrounds.** The lighthouse interior is never pure white. Walls are `#f5f0e0` (warm cream) and always have curvature shadows and lantern glow. Pure `bg-white` feels clinical, not coastal.
- **Missing storm exterior.** Without the storm outside, the lighthouse has no story or contrast. Every view should have at least a hint of dark storm through a window element.
- **Bright, even lighting.** The lighthouse is lit by oil lamps and the lantern room — warm, directional, creating shadows. Flat, even illumination destroys the atmosphere. Use gradients and inset shadows to create directional light.
- **Synchronized flames.** All flame animations on the same timing looks like a digital clock, not real fire. Each flame must have independent timing.
- **Missing iron staircase motif.** The spiral staircase is the defining architectural element. Its absence makes the interface feel like a generic round room rather than a lighthouse.
- **Sans-serif display typography.** Maritime and lighthouse aesthetics demand serif fonts. Inter or Roboto as display type breaks the period character entirely.
- **Rain streaks that are too thick or too fast.** Rain should be thin (`w-[1px]`), semi-transparent, and fast but not frantic. Thick rain streaks look like a cartoon. Below 0.5s duration they create visual noise.
- **Prismatic colors on non-lens elements.** The rainbow Fresnel refractions belong only on the concentric arc lens elements. Using prismatic gradients on buttons, cards, or text backgrounds is thematic pollution.
- **Wide, expansive layouts.** The lighthouse is a tight cylinder. Content should feel enclosed and vertical. Full-width horizontal layouts that span the viewport width feel like an open office, not a tower.
- **Cold blue-tinted interior surfaces.** The interior is warm. Cold blue tints belong on the storm exterior and window views. Applying blue tints to wall panels or content surfaces reverses the warm-cold duality.
- **Missing logbook element.** The keeper's logbook is the human voice of the lighthouse. Every lighthouse UI should have at least one handwriting-style text surface.
- **Overly tall flame elements.** Flames should be small accent elements (20-30px tall). Large flame decorations look like campfire graphics, not oil lamp accents.
- **Missing window mullions.** Windows without iron cross-bars look like modern portholes, not Victorian lighthouse windows. The iron cross is a structural and visual signature.

## Accessibility Considerations

- **Contrast on warm white walls.** Text on `#f5f0e0` backgrounds must meet WCAG AA 4.5:1. Use `#3a3020` for body text (contrast ratio ~7.5:1 against `#f5f0e0`) and `#3a3a3a` for secondary text (~6:1). Avoid `#8a6a3a` for small text — use it only for decorative elements or large headings.
- **Storm animations respect prefers-reduced-motion.** Rain streaks, lightning flashes, and all storm motion are decorative. Under `prefers-reduced-motion: reduce`, replace rain with static angled lines at mid-opacity, remove lightning animation, and keep storm colors static. The storm's presence is conveyed through color and composition, not motion.
- **Flame flicker respects prefers-reduced-motion.** Under reduced-motion preference, flame SVGs should be static at their default transform with a fixed opacity of 0.9. The flame shape itself conveys the metaphor without animation.
- **Logbook handwriting font readability.** Handwriting fonts (Caveat, Patrick Hand) have lower legibility than standard serifs. Ensure logbook text is at minimum 16px, has adequate line-height (1.75+), and is never used for essential UI labels or interactive text. Keep handwriting for decorative/ambient text only; functional text uses standard serif fonts.
- **Lightning flash does not trigger photosensitivity.** The lightning animation flashes at 0.04 opacity for 200ms with at least 10 seconds between flashes. This is well below photosensitive epilepsy thresholds (3 flashes per second). Never increase flash opacity above 0.08 or shorten the interval below 8 seconds.
- **Storm background color contrast.** Content displayed over the storm dark background (`#1a2a3a`) must use light text (`#f5f0e0` at full opacity). Verify contrast ratio — `#f5f0e0` against `#1a2a3a` provides approximately 10:1, which exceeds WCAG AAA.
- **Fresnel lens arcs are decorative.** All prismatic SVG elements should have `aria-hidden="true"`. They convey atmosphere, not information. No screen reader should announce arc descriptions or gradient definitions.
- **Iron staircase navigation is keyboard-accessible.** If the staircase motif is used as navigation, each step must be a focusable element with visible focus indicators. The active step should have `aria-current="page"` and all steps need `aria-label` text describing the destination.
- **Window frame semantics.** Iron-framed window elements that contain meaningful data (weather, time, status) must use `<figure>` with `<figcaption>` or `role="img"` with `aria-label` to associate the visual window with its content meaning.
- **Logbook page curl is decorative.** The page curl effect on logbook cards must have `aria-hidden="true"` and `pointer-events-none`. It adds visual character but has no interactive or informational purpose.
- **Flame indicators convey status without color alone.** If flame elements indicate status (active/inactive), they must also include text labels or icon shape changes. A user who cannot distinguish amber from gray should still understand whether the system is active.
- **Storm wind/rain does not cause motion sickness.** Parallax movement on storm elements when scrolling must be limited to 0.3x scroll speed or less. Larger parallax offsets on full-screen storm backgrounds can trigger vestibular discomfort.
- **Focus indicators work on both warm and dark surfaces.** Since the UI alternates between warm-white wall panels and dark storm backgrounds, focus indicators need to adapt: use `focus-visible:ring-2 focus-visible:ring-[#ffcc66] focus-visible:ring-offset-2` on wall surfaces and `focus-visible:ring-2 focus-visible:ring-[#ffcc66] focus-visible:ring-offset-[#1a2a3a]` on storm backgrounds.
