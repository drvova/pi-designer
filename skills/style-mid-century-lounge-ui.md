---
name: mid-century-lounge-ui
description: Build mid-century lounge UI components (Eames chair silhouette, teak sideboard, Sputnik lamp, shag rug texture, conversation pit seating, record player turntable, atomic starburst clock) with warm wood furniture tones, organic shapes, plush textures, and the sophisticated comfort of 1960s lounge culture. Trigger this skill when the user asks for mid-century lounge UI, 1960s lounge design, Eames chair aesthetic, teak sideboard surfaces, Sputnik lamp accents, shag texture, conversation pit layout, record player interface, atomic clock motif, retro lounge interior, warm wood furniture design, or sophisticated mid-century comfort.
---

# Mid-Century Lounge UI

Use this skill to design and implement warm, sophisticated interfaces inspired by mid-century lounge culture (late 1950s-1960s): teak sideboard wood surfaces, Eames molded chair silhouettes, Sputnik spreading-arm lamp accents, shag rug plush textures, sunken conversation pit layouts, record player turntable interfaces, and atomic starburst clock decorations. The lounge aesthetic is warmer, softer, and more indulgent than clean-line mid-century modern -- it is the cocktail-hour cousin: plush, inviting, and confident in its material richness.

## Non-Negotiable Foundations

- Mid-century lounge is defined by PLUSH MATERIALITY. Surfaces reference teak, walnut, molded plywood, brass, and shag carpet -- never cold metal, never sterile white. The palette is warm wood and upholstery tones: teak amber, avocado upholstery, harvest gold, burnt orange, and cream.
- The shape language is ORGANIC AND SUNKEN. Conversation pit layouts use nested, sunken containers with generous padding and soft radii. Cards and panels feel like upholstered furniture -- rounded corners, generous inner spacing, cushioned shadows. Never sharp or skeletal.
- Shag texture is the signature material accent. Fuzzy pile surfaces, plush gradients, and soft-focus radial overlays evoke the tactile richness of 1960s lounge carpeting and upholstery. Every lounge UI should have at least one textural accent referencing pile or fabric.
- Sputnik lamp motifs are the decorative signature: spreading-arm chandelier forms with radiating spokes ending in small spheres or bulbs. These appear as SVG accents, header decorations, or card ornaments -- more elaborate than a simple starburst, they reference the full multi-arm Sputnik chandelier design.
- Eames chair silhouettes (molded plywood shell on wire dowel base) appear as decorative SVG icons, avatar frames, or brand marks. The distinctive curved shell profile and thin angled legs are unmistakable.
- Record player turntable forms appear as circular play buttons, progress rings, or album art containers -- a circular platter with a tonearm reference evokes the turntable experience.
- The aesthetic is evening sophistication, cocktail culture, vinyl records, and deep comfortable seating -- not morning-bright suburban optimism.

## Core Material Recipes

### 1) Conversation Pit Container

The foundational lounge layout: a sunken, nested container with deep shadows and plush padding, evoking the sunken seating areas of 1960s modernist homes.

```html
<div class="bg-[#5a3a1a] rounded-2xl p-2 shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)]">
  <div class="bg-[#a07040] rounded-xl p-8 shadow-[inset_0_2px_8px_rgba(90,58,26,0.5),0_4px_16px_rgba(0,0,0,0.2)]">
    <!-- Sunken content area -->
    <div class="bg-[#e8dcc0] rounded-lg p-6 shadow-[inset_0_1px_4px_rgba(90,58,26,0.3)]">
      <!-- Content sits in the deepest pit layer -->
    </div>
  </div>
</div>
```

Deeper conversation pit variant with three nested layers:

```html
<div class="bg-gradient-to-b from-[#3a2210] to-[#2a1608] rounded-3xl p-1">
  <div class="bg-[#6a4a2a] rounded-2xl p-2 shadow-[inset_0_3px_10px_rgba(0,0,0,0.35)]">
    <div class="bg-gradient-to-br from-[#a07040] to-[#8a6030] rounded-xl p-3 shadow-[inset_0_2px_6px_rgba(90,58,26,0.4)]">
      <div class="bg-[#e8dcc0] rounded-lg p-6 shadow-[inset_0_1px_3px_rgba(90,58,26,0.25)]">
        <!-- Deepest pit content -->
      </div>
    </div>
  </div>
</div>
```

### 2) Teak Sideboard Surface

Long, low horizontal surface with warm teak wood grain, evoking the iconic long cabinet silhouette of mid-century teak sideboards.

```html
<div class="bg-gradient-to-r from-[#a07040] via-[#9a6838] to-[#a07040] relative rounded-lg overflow-hidden">
  <!-- Teak wood grain lines -->
  <div class="absolute inset-0 opacity-[0.07] pointer-events-none
              bg-[repeating-linear-gradient(92deg,transparent,transparent_6px,#5a3a1a_6px,#5a3a1a_7px)]"></div>
  <!-- Subtle horizontal shelf line -->
  <div class="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#5a3a1a]/30 to-transparent"></div>
  <div class="relative px-8 py-5">
    <!-- Sideboard content -->
  </div>
</div>
```

Dark walnut sideboard variant (for headers and nav):

```html
<div class="bg-gradient-to-r from-[#5a3a1a] via-[#4a2a12] to-[#5a3a1a] relative overflow-hidden">
  <div class="absolute inset-0 opacity-[0.05] pointer-events-none
              bg-[repeating-linear-gradient(88deg,transparent,transparent_10px,#2a1208_10px,#2a1208_11px)]"></div>
  <div class="relative px-8 py-4">
    <!-- Dark sideboard content with cream text -->
  </div>
</div>
```

### 3) Sputnik Lamp Chandelier Accent

Spreading-arm chandelier with radiating arms ending in small glowing bulbs -- the signature lounge lighting fixture.

```html
<svg viewBox="0 0 240 240" class="w-40 h-40">
  <defs>
    <radialGradient id="sputnik-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#d4a848" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#d4a848" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Ambient glow -->
  <circle cx="120" cy="120" r="100" fill="url(#sputnik-glow)"/>
  <g stroke="#a07040" stroke-width="2" stroke-linecap="round">
    <!-- 8 spreading arms at various angles -->
    <line x1="120" y1="120" x2="120" y2="30"/>
    <line x1="120" y1="120" x2="120" y2="210"/>
    <line x1="120" y1="120" x2="30" y2="120"/>
    <line x1="120" y1="120" x2="210" y2="120"/>
    <line x1="120" y1="120" x2="52" y2="52"/>
    <line x1="120" y1="120" x2="188" y2="52"/>
    <line x1="120" y1="120" x2="52" y2="188"/>
    <line x1="120" y1="120" x2="188" y2="188"/>
  </g>
  <g fill="#d4a848">
    <!-- Bulb spheres at arm ends -->
    <circle cx="120" cy="26" r="6"/>
    <circle cx="120" cy="214" r="6"/>
    <circle cx="26" cy="120" r="6"/>
    <circle cx="214" cy="120" r="6"/>
    <circle cx="48" cy="48" r="5"/>
    <circle cx="192" cy="48" r="5"/>
    <circle cx="48" cy="192" r="5"/>
    <circle cx="192" cy="192" r="5"/>
  </g>
  <!-- Center hub -->
  <circle cx="120" cy="120" r="10" fill="#a07040" stroke="#5a3a1a" stroke-width="2"/>
  <circle cx="120" cy="120" r="4" fill="#d4a848"/>
</svg>
```

Compact Sputnik icon variant (for card accents and small decorations):

```html
<svg viewBox="0 0 80 80" class="w-12 h-12">
  <g stroke="#d4a848" stroke-width="1.5" stroke-linecap="round">
    <line x1="40" y1="40" x2="40" y2="10"/>
    <line x1="40" y1="40" x2="40" y2="70"/>
    <line x1="40" y1="40" x2="10" y2="40"/>
    <line x1="40" y1="40" x2="70" y2="40"/>
    <line x1="40" y1="40" x2="19" y2="19"/>
    <line x1="40" y1="40" x2="61" y2="19"/>
    <line x1="40" y1="40" x2="19" y2="61"/>
    <line x1="40" y1="40" x2="61" y2="61"/>
  </g>
  <circle cx="40" cy="40" r="4" fill="#a07040"/>
  <circle cx="40" cy="10" r="3" fill="#d4a848"/>
  <circle cx="40" cy="70" r="3" fill="#d4a848"/>
  <circle cx="10" cy="40" r="3" fill="#d4a848"/>
  <circle cx="70" cy="40" r="3" fill="#d4a848"/>
  <circle cx="19" cy="19" r="2.5" fill="#c4a030"/>
  <circle cx="61" cy="19" r="2.5" fill="#c4a030"/>
  <circle cx="19" cy="61" r="2.5" fill="#c4a030"/>
  <circle cx="61" cy="61" r="2.5" fill="#c4a030"/>
</svg>
```

### 4) Shag Rug Texture Surface

Plush pile texture overlay for cards and section backgrounds, evoking thick shag carpeting.

```html
<div class="bg-[#e8dcc0] relative overflow-hidden rounded-xl">
  <!-- Shag pile texture: multiple soft radial dots in a tight grid -->
  <div class="absolute inset-0 pointer-events-none opacity-40"
       style="background-image:
         radial-gradient(ellipse 3px 4px at 50% 50%, rgba(160,112,64,0.15) 0%, transparent 100%),
         radial-gradient(ellipse 2px 5px at 30% 50%, rgba(160,112,64,0.1) 0%, transparent 100%),
         radial-gradient(ellipse 4px 3px at 70% 50%, rgba(160,112,64,0.12) 0%, transparent 100%);
         background-size: 8px 10px, 8px 10px, 8px 10px;
         background-position: 0 0, 4px 5px, 2px 3px;"></div>
  <!-- Soft plush shadow overlay -->
  <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-transparent"></div>
  <div class="relative p-6">
    <!-- Content on shag surface -->
  </div>
</div>
```

Avocado shag variant:

```html
<div class="bg-[#6a8a3a] relative overflow-hidden rounded-xl">
  <div class="absolute inset-0 pointer-events-none opacity-30"
       style="background-image: radial-gradient(ellipse 3px 4px at 50% 50%, rgba(90,120,50,0.2) 0%, transparent 100%);
         background-size: 7px 9px;"></div>
  <div class="relative p-6">
    <!-- Content -->
  </div>
</div>
```

### 5) Record Player Turntable

Circular turntable form used as play button, progress indicator, or album art container.

```html
<div class="relative w-32 h-32">
  <!-- Outer platter ring -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#5a3a1a] to-[#3a2210]
              shadow-[0_2px_12px_rgba(58,42,26,0.3)]"></div>
  <!-- Groove rings (vinyl grooves) -->
  <div class="absolute inset-2 rounded-full border border-[#5a3a1a]/20"></div>
  <div class="absolute inset-4 rounded-full border border-[#5a3a1a]/15"></div>
  <div class="absolute inset-6 rounded-full border border-[#5a3a1a]/10"></div>
  <!-- Record surface -->
  <div class="absolute inset-3 rounded-full bg-gradient-to-br from-[#2a1a0a] to-[#1a0e04]"></div>
  <!-- Label center -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-10 h-10 rounded-full bg-[#c46030] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]"></div>
  </div>
  <!-- Spindle hole -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-2 h-2 rounded-full bg-[#1a0e04]"></div>
  </div>
  <!-- Tonearm -->
  <div class="absolute top-2 right-3 w-px h-14 bg-[#a07040] origin-top rotate-[25deg]
              shadow-[0_0_2px_rgba(160,112,64,0.4)]"></div>
  <div class="absolute top-[52px] right-[18px] w-2 h-3 bg-[#a07040] rounded-sm rotate-[25deg]"></div>
</div>
```

Spinning turntable variant (for loading or playing state):

```html
<div class="relative w-24 h-24 animate-[spin_3s_linear_infinite]">
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1a0a] to-[#1a0e04]
              shadow-[0_2px_8px_rgba(58,42,26,0.25)]"></div>
  <div class="absolute inset-3 rounded-full border border-[#5a3a1a]/15"></div>
  <div class="absolute inset-5 rounded-full border border-[#5a3a1a]/10"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-8 h-8 rounded-full bg-[#c46030]"></div>
  </div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-1.5 h-1.5 rounded-full bg-[#1a0e04]"></div>
  </div>
</div>
```

### 6) Eames Chair Silhouette Icon

The distinctive molded plywood shell on wire dowel base -- an iconic mark for lounge branding.

```html
<svg viewBox="0 0 100 100" class="w-16 h-16">
  <!-- Molded plywood shell -->
  <path d="M20,45 Q22,28 35,22 Q50,18 65,22 Q78,28 80,45 Q78,58 65,62 Q50,65 35,62 Q22,58 20,45 Z"
        fill="#a07040" stroke="#5a3a1a" stroke-width="1.5"/>
  <!-- Shell highlight -->
  <path d="M30,38 Q35,28 50,26 Q65,28 70,38"
        fill="none" stroke="#c4a030" stroke-width="0.8" opacity="0.5"/>
  <!-- Wire dowel base (Eiffel tower base) -->
  <line x1="35" y1="62" x2="28" y2="90" stroke="#5a3a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="65" y1="62" x2="72" y2="90" stroke="#5a3a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="45" y1="62" x2="40" y2="88" stroke="#5a3a1a" stroke-width="1" stroke-linecap="round"/>
  <line x1="55" y1="62" x2="60" y2="88" stroke="#5a3a1a" stroke-width="1" stroke-linecap="round"/>
  <!-- Cross brace -->
  <line x1="30" y1="82" x2="70" y2="82" stroke="#5a3a1a" stroke-width="0.8" opacity="0.6"/>
</svg>
```

### 7) Atomic Starburst Clock

Lounge-era wall clock with radiating rays and asymmetric hour markers.

```html
<svg viewBox="0 0 200 200" class="w-32 h-32">
  <!-- Clock face -->
  <circle cx="100" cy="100" r="80" fill="#e8dcc0" stroke="#a07040" stroke-width="2"/>
  <!-- Outer ring -->
  <circle cx="100" cy="100" r="85" fill="none" stroke="#c46030" stroke-width="1" opacity="0.4"/>
  <!-- Radiating hour markers -->
  <g stroke="#5a3a1a" stroke-width="2" stroke-linecap="round">
    <line x1="100" y1="22" x2="100" y2="38"/>
    <line x1="100" y1="162" x2="100" y2="178"/>
    <line x1="22" y1="100" x2="38" y2="100"/>
    <line x1="162" y1="100" x2="178" y2="100"/>
  </g>
  <!-- Shorter markers at diagonals -->
  <g stroke="#a07040" stroke-width="1.5" stroke-linecap="round">
    <line x1="45" y1="45" x2="56" y2="56"/>
    <line x1="145" y1="45" x2="134" y2="56"/>
    <line x1="45" y1="145" x2="56" y2="134"/>
    <line x1="145" y1="145" x2="134" y2="134"/>
  </g>
  <!-- Starburst accent rays -->
  <g stroke="#d4a848" stroke-width="0.8" stroke-linecap="round" opacity="0.5">
    <line x1="100" y1="12" x2="100" y2="20"/>
    <line x1="100" y1="180" x2="100" y2="188"/>
    <line x1="12" y1="100" x2="20" y2="100"/>
    <line x1="180" y1="100" x2="188" y2="100"/>
  </g>
  <!-- Clock hands -->
  <line x1="100" y1="100" x2="100" y2="45" stroke="#5a3a1a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="100" x2="135" y2="85" stroke="#5a3a1a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="100" x2="115" y2="130" stroke="#c46030" stroke-width="0.8" stroke-linecap="round"/>
  <!-- Center cap -->
  <circle cx="100" cy="100" r="4" fill="#a07040"/>
  <circle cx="100" cy="100" r="2" fill="#d4a848"/>
</svg>
```

### 8) Lounge Button

Plush, confident button with cushioned shadow and warm lounge palette.

- Primary (harvest gold): `bg-[#d4a848] text-[#3a2210] font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full shadow-[0_4px_12px_rgba(160,112,64,0.3)] hover:shadow-[0_2px_6px_rgba(160,112,64,0.2)] hover:translate-y-[1px] transition-all duration-200 border border-[#a07040]/30`.
- Burnt orange: `bg-[#c46030] text-[#e8dcc0] font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full shadow-[0_4px_12px_rgba(196,96,48,0.3)] hover:shadow-[0_2px_6px_rgba(196,96,48,0.2)] hover:translate-y-[1px] transition-all duration-200`.
- Avocado: `bg-[#6a8a3a] text-[#e8dcc0] font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full shadow-[0_4px_12px_rgba(106,138,58,0.25)] hover:shadow-[0_2px_6px_rgba(106,138,58,0.15)] hover:translate-y-[1px] transition-all duration-200`.
- Ghost (on wood surface): `bg-transparent text-[#e8dcc0] font-bold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full border-2 border-[#e8dcc0]/40 hover:bg-[#e8dcc0]/10 transition-all duration-200`.

### 9) Shag Rug Divider

Soft, textured divider evoking the plush pile of shag carpeting.

```html
<div class="relative h-4 overflow-hidden">
  <div class="absolute inset-0 bg-[#e8dcc0]"></div>
  <div class="absolute inset-0 opacity-30"
       style="background-image: radial-gradient(ellipse 2px 3px at 50% 50%, rgba(160,112,64,0.25) 0%, transparent 100%);
         background-size: 6px 8px;"></div>
  <div class="absolute inset-0 flex items-center">
    <div class="w-full h-px bg-gradient-to-r from-transparent via-[#a07040]/30 to-transparent"></div>
  </div>
</div>
```

### 10) Vinyl Record Badge

Small circular badge styled as a mini vinyl record for labels, status indicators, or avatar frames.

```html
<div class="relative w-8 h-8 rounded-full bg-[#1a0e04] shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
  <div class="absolute inset-[3px] rounded-full border border-[#5a3a1a]/20"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-2.5 h-2.5 rounded-full bg-[#c46030]"></div>
  </div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-[3px] h-[3px] rounded-full bg-[#1a0e04]"></div>
  </div>
</div>
```

## Color Palette System

### Mid-Century Lounge Palette

| Color | Hex | Role |
|---|---|---|
| Teak Warm | `#a07040` | Primary surface, wood furniture tone, structural warmth |
| Walnut | `#5a3a1a` | Dark surface, text, borders, structural depth |
| Deep Walnut | `#3a2210` | Darkest accents, shadows, deep structural elements |
| Avocado Green | `#6a8a3a` | Upholstery accent, secondary color, nature reference |
| Harvest Gold | `#d4a848` | Primary interactive accent, lamp glow, optimism |
| Burnt Orange | `#c46030` | Warm tertiary accent, vinyl labels, energetic warmth |
| Mustard | `#c4a030` | Supporting accent, earthy warmth between gold and orange |
| Shag Cream | `#e8dcc0` | Light background, base canvas, shag rug reference |
| Atomic White | `#f5f0e0` | Lightest surface, off-white warm highlights |
| Soft Black | `#2a1a0a` | Body text, fine detail, darkest readable element |

Rules: Teak warm (`#a07040`) is the dominant surface color -- it represents the material foundation of the lounge. Harvest gold, burnt orange, and avocado green are the three upholstery accents used on interactive elements and emphasis. Walnut and deep walnut provide structural depth. Shag cream is the default light background, never pure white. The palette should feel like a dimly-lit cocktail lounge with warm wood surfaces, plush upholstery, and the golden glow of Sputnik lamp bulbs.

## Typography Recommendations

Mid-century lounge typography is confident, warm, and slightly more refined than bare-bones mid-century modern:

- **Display headings:** Poppins or DM Serif Display (a geometric sans-serif or a warm transitional serif for contrast). The lounge aesthetic allows one elegant serif accent in display sizes. `font-bold` to `font-black` for commanding presence.
- **Secondary heading:** Poppins, DM Sans, or Montserrat at `font-semibold` to `font-bold` -- geometric and clean.
- **Body:** DM Sans, Work Sans, or Inter at `font-normal` to `font-medium` -- clean and readable with warm tone.
- **Labels and caps:** `font-bold uppercase tracking-[0.15em] text-xs` -- confident, structured, period-appropriate signage feel.
- **Accent text (for quotes, pull-outs):** DM Serif Display or Playfair Display at `font-medium italic` -- adds the cocktail-lounge elegance.
- Avoid condensed or compressed typefaces (the lounge is generous and relaxed, not tight).
- Avoid monospace fonts (no technical or utilitarian aesthetic).
- Consider warm off-black text color (`#2a1a0a` or `#3a2210`) rather than pure black for softer readability.

## Component Architecture Pattern

1. Deep walnut (`#3a2210`) or dark background as the outermost frame (evening lounge ambiance).
2. Conversation pit nested containers: outer dark frame, teak middle layer, cream inner content.
3. Teak sideboard surfaces for navigation bars, headers, and primary content areas.
4. Shag texture overlays on accent cards and feature panels.
5. Sputnik chandelier SVGs as header decorations and section dividers.
6. Record player turntable forms for circular interactive elements.
7. Eames chair silhouette icons for branding and avatar frames.
8. Atomic starburst clocks for time displays and decorative accents.
9. Harvest gold, burnt orange, and avocado green on interactive elements and CTAs.
10. Generous padding and spacing throughout -- the lounge is never cramped.

## Interaction Rules

- Default state: warm, plush, deeply comfortable.
- Hover: elements lift with soft shadow expansion.
  - `hover:shadow-[0_6px_20px_rgba(90,58,26,0.25)] hover:-translate-y-0.5 transition-all duration-250` (gentle cushioned lift).
- Buttons: cushioned press that sinks into the surface.
  - `hover:shadow-[0_2px_6px_rgba(160,112,64,0.2)] hover:translate-y-[1px] transition-all duration-200`
  - `active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] active:translate-y-[2px]` (sinks into upholstery).
- Cards: conversation pit containers deepen on hover with inset shadow increase.
  - `hover:shadow-[inset_0_3px_10px_rgba(0,0,0,0.45)] transition-all duration-300`
- Turntable: `animate-[spin_3s_linear_infinite]` on play state; stops on pause.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4a848] focus:ring-offset-2 focus:ring-offset-[#3a2210]` (harvest gold ring on dark offset).
- Transitions: `duration-200` to `duration-300` (smooth and cushioned, never snappy or mechanical).
- Motion should feel like sinking into a plush seat -- smooth, weighted, deliberate.

## Reusable Tailwind Tokens

- Lounge dark frame: `bg-[#3a2210]`
- Teak surface: `bg-gradient-to-r from-[#a07040] via-[#9a6838] to-[#a07040]`
- Walnut surface: `bg-gradient-to-b from-[#5a3a1a] to-[#3a2210]`
- Shag cream canvas: `bg-[#e8dcc0]`
- Conversation pit: `rounded-2xl p-2 shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)]`
- Harvest gold button: `bg-[#d4a848] text-[#3a2210] font-bold uppercase tracking-[0.12em] rounded-full shadow-[0_4px_12px_rgba(160,112,64,0.3)]`
- Burnt orange button: `bg-[#c46030] text-[#e8dcc0] font-bold uppercase tracking-[0.12em] rounded-full shadow-[0_4px_12px_rgba(196,96,48,0.3)]`
- Avocado button: `bg-[#6a8a3a] text-[#e8dcc0] font-bold uppercase tracking-[0.12em] rounded-full shadow-[0_4px_12px_rgba(106,138,58,0.25)]`
- Display heading: `font-sans text-5xl font-black tracking-tight text-[#3a2210]`
- Body text: `font-sans text-base font-normal text-[#2a1a0a]`
- Label: `font-sans font-bold uppercase tracking-[0.15em] text-xs text-[#a07040]`
- Accent quote: `font-serif text-2xl font-medium italic text-[#5a3a1a]`
- Vinyl record badge: `w-8 h-8 rounded-full bg-[#1a0e04]` with inner `w-2.5 h-2.5 rounded-full bg-[#c46030]`
- Deep cushioned shadow: `shadow-[0_4px_16px_rgba(90,58,26,0.3)]`
- Inset pit shadow: `shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)]`
- Sputnik glow: `shadow-[0_0_30px_rgba(212,168,72,0.15)]`

## Quality Checklist (must pass)

- At least one conversation pit nested container (multiple inset shadow layers).
- Teak or walnut wood-tone surface present (gradient with grain overlay).
- Shag rug texture accent on at least one element (soft radial dot pattern).
- Sputnik chandelier SVG or spreading-arm motif present (more elaborate than a simple starburst).
- Eames chair silhouette icon present (molded shell on wire dowel base).
- Record player turntable form for at least one circular interactive element.
- Atomic starburst clock motif present.
- Color palette includes harvest gold, burnt orange, and avocado green.
- Cream or shag cream backgrounds, never pure white.
- Dark background framing (`#3a2210`) for overall composition -- the lounge is an evening space.
- Typography is geometric sans-serif or warm transitional serif -- never monospace or decorative script.
- Borders and shadows use warm dark brown (`#5a3a1a`), never pure black.
- Buttons have cushioned press effect (shadow deepens, element sinks).
- Generous padding and spacing -- the lounge is never cramped or minimal.
- The aesthetic reads as sophisticated evening lounge comfort, not morning-bright suburbia.

## Anti-Patterns

- Pure white backgrounds (use shag cream `#e8dcc0` or dark walnut framing).
- Pure black borders or text (use warm dark brown `#3a2210` or soft black `#2a1a0a`).
- Thin, sharp, skeletal layouts (lounge is plush, generous, and cushioned).
- Cold or sterile color palette (no grays, no blues, no cool tones dominating).
- Missing wood-tone surfaces (teak/walnut is the material foundation).
- Missing texture accents (every lounge UI needs shag, wood grain, or upholstery reference).
- Simple starburst instead of full Sputnik chandelier (the lounge demands the multi-arm fixture).
- Snappy or mechanical hover effects (lounge motion is smooth and cushioned).
- Monospace or typewriter fonts (the lounge is refined, not utilitarian).
- Cramped spacing or dense information layout (lounge UI breathes with generous whitespace).
- Neon or saturated colors (the palette is warm, earthy, and golden).
- Pure white text on warm backgrounds (use shag cream `#e8dcc0` or atomic white `#f5f0e0`).
- Missing the conversation pit container pattern (sunken nested layers are the layout signature).
- Fast aggressive animations (lounge motion is weighted and deliberate).

## Accessibility Considerations

- Harvest gold (`#d4a848`) text on cream needs dark text (`#3a2210`) for body copy -- gold is accent only.
- Burnt orange (`#c46030`) and avocado green (`#6a8a3a`) on shag cream provide good contrast for headings.
- Cream text (`#e8dcc0`) on teak (`#a07040`) is borderline -- use dark text on teak for body, light text only for large headings.
- Cream text on dark walnut (`#3a2210`) provides strong contrast -- safe for all text sizes.
- Focus states must be clearly visible: `focus:ring-2 focus:ring-[#d4a848] focus:ring-offset-2 focus:ring-offset-[#3a2210]` (gold ring on dark offset is highly visible).
- Decorative SVG elements (Sputnik chandeliers, Eames icons, starburst clocks) must be `aria-hidden="true"` and `pointer-events-none`.
- Turntable spin animation must respect `prefers-reduced-motion` -- reduce to static display.
- Shag texture overlays must not reduce text contrast below WCAG AA (keep opacity low, test against all text colors).
- Touch targets must meet minimum 44x44px despite rounded, organic styling.
- Color should never be the sole differentiator -- burnt orange and avocado green can be confused by colorblind users; pair with text labels and positional context.
- The nested conversation pit pattern must maintain logical heading hierarchy even when visually nested.
- Vinyl record groove rings are decorative -- mark as `aria-hidden="true"` to reduce screen reader noise.
