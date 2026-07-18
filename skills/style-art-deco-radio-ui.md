---
name: art-deco-radio-ui
description: Build vintage radio UI components (1930s bakelite/wooden cabinet radio, catalin plastic, tuning dial with city names, vacuum tube warm glow, brass knobs, speaker grill cloth, broadcast frequency markers) with warm bakelite surfaces, glowing tube indicators, and the golden age of radio broadcasting. Trigger this skill when the user asks for art deco radio design, vintage radio UI, bakelite radio, catalin plastic, tuning dial, vacuum tube glow, broadcast frequency, golden age of radio, cabinet radio, or speaker grill cloth interfaces.
---

# Art Deco Radio UI

Use this skill to design and implement warm, tactile interfaces inspired by 1930s bakelite and catalin cabinet radios: tuning dials with city frequency markers, vacuum tube amber glow indicators, brass tuning knobs, woven speaker grill cloth textures, and the golden age of radio broadcasting craftsmanship.

## Non-Negotiable Foundations

- Bakelite and catalin cabinet surfaces use warm brown gradients — never flat fills.
- Vacuum tube elements must emit a warm amber glow via layered box-shadow.
- The tuning dial is the centerpiece — circular or horizontal with city/broadcast markers.
- Brass accents on all knobs, bezels, and trim — gold gradients, not flat yellow.
- Speaker grill cloth texture uses a crosshatch woven pattern via CSS gradients or SVG.
- Typography evokes art deco signage and broadcast call letters.
- Every surface feels warm, glossy, and lacquered — bakelite has depth and sheen.

## Core Material Recipes

### 1) Bakelite Cabinet Panel

Warm bakelite/catalin radio cabinet surface with glossy depth.

- `bg-gradient-to-b from-[#3a2a1a] via-[#2a1a0a] to-[#1a0a04] border-2 border-[#4a3a2a] p-8 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6),0_8px_24px_rgba(0,0,0,0.4)]`.
- Glossy top highlight: overlay `bg-gradient-to-b from-white/10 to-transparent` at the top third.
- Lacquer sheen: `before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr from-transparent via-white/5 to-transparent`.

### 2) Circular Tuning Dial with City Markers

SVG circular tuning dial with city frequency markers around the circumference.

```html
<div class="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#f0ead0] to-[#d4c8a8] border-4 border-[#c4a043] shadow-[inset_0_4px_12px_rgba(0,0,0,0.3),0_4px_16px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
  <!-- Frequency tick marks -->
  <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full text-[#3a2a1a]">
    <!-- Major frequency ticks -->
    <g stroke="currentColor" stroke-width="1.5">
      <line x1="100" y1="10" x2="100" y2="22"/>
      <line x1="100" y1="178" x2="100" y2="190"/>
      <line x1="10" y1="100" x2="22" y2="100"/>
      <line x1="178" y1="100" x2="190" y2="100"/>
    </g>
    <!-- Minor ticks every 10deg -->
    <g stroke="currentColor" stroke-width="0.5" opacity="0.5">
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(30 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(60 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(120 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(150 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(210 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(240 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(300 100 100)"/>
      <line x1="100" y1="10" x2="100" y2="16" transform="rotate(330 100 100)"/>
    </g>
    <!-- City frequency labels -->
    <text x="100" y="34" text-anchor="middle" font-size="9" fill="#3a2a1a" font-family="serif" font-weight="bold">PARIS</text>
    <text x="170" y="105" text-anchor="middle" font-size="9" fill="#3a2a1a" font-family="serif" font-weight="bold">LONDON</text>
    <text x="100" y="176" text-anchor="middle" font-size="9" fill="#3a2a1a" font-family="serif" font-weight="bold">BERLIN</text>
    <text x="30" y="105" text-anchor="middle" font-size="9" fill="#3a2a1a" font-family serif" font-weight="bold">NEW YORK</text>
    <!-- Frequency numbers -->
    <text x="138" y="40" text-anchor="middle" font-size="7" fill="#8a6a3a">580</text>
    <text x="165" y="65" text-anchor="middle" font-size="7" fill="#8a6a3a">720</text>
    <text x="170" y="145" text-anchor="middle" font-size="7" fill="#8a6a3a">880</text>
    <text x="138" y="170" text-anchor="middle" font-size="7" fill="#8a6a3a">1040</text>
    <text x="62" y="170" text-anchor="middle" font-size="7" fill="#8a6a3a">1200</text>
    <text x="35" y="145" text-anchor="middle" font-size="7" fill="#8a6a3a">1360</text>
    <text x="30" y="65" text-anchor="middle" font-size="7" fill="#8a6a3a">1500</text>
    <text x="62" y="40" text-anchor="middle" font-size="7" fill="#8a6a3a">1650</text>
  </svg>
  <!-- Tuning needle -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-[#c43030] shadow-[0_0_4px_rgba(255,0,0,0.6)]"></div>
  <!-- Center hub -->
  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#c4a043] to-[#8a6a1a] border border-[#5a3a0a] shadow-md"></div>
</div>
```

### 3) Vacuum Tube Warm Glow

Amber-glowing vacuum tube indicator element.

```html
<div class="relative w-12 h-20 rounded-b-xl rounded-t-lg bg-gradient-to-b from-[#2a1a0a] to-[#1a0a04] border border-[#4a3a2a] flex items-end justify-center pb-2">
  <!-- Inner glass glow -->
  <div class="w-8 h-14 rounded-full bg-gradient-to-b from-[#ff8c30] via-[#cc6020] to-[#8a4010] shadow-[0_0_12px_rgba(255,140,48,0.8),0_0_24px_rgba(255,140,48,0.4)] animate-pulse"></div>
  <!-- Tube top filament -->
  <div class="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-[#ffaa50] shadow-[0_0_8px_rgba(255,170,80,0.9)]"></div>
</div>
```

Multiple tubes at varying heights create the warm "powered on" radio feel. Vary glow intensity and pulse timing.

### 4) Brass Tuning Knob

Ridged brass tuning knob with rotation.

```html
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#e4c063] via-[#c4a043] to-[#8a6a1a] border-2 border-[#5a3a0a] shadow-[inset_0_2px_4px_rgba(255,215,0,0.3),0_4px_8px_rgba(0,0,0,0.3)] flex items-center justify-center">
  <!-- Knurling ridges -->
  <svg viewBox="0 0 64 64" class="absolute inset-0 w-full h-full opacity-30">
    <g stroke="#3a2a0a" stroke-width="0.5">
      <line x1="32" y1="2" x2="32" y2="8"/>
      <line x1="32" y1="56" x2="32" y2="62"/>
      <line x1="2" y1="32" x2="8" y2="32"/>
      <line x1="56" y1="32" x2="62" y2="32"/>
      <line x1="10" y1="10" x2="14" y2="14"/>
      <line x1="50" y1="50" x2="54" y2="54"/>
      <line x1="54" y1="10" x2="50" y2="14"/>
      <line x1="14" y1="50" x2="10" y2="54"/>
    </g>
  </svg>
  <!-- Indicator notch -->
  <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#1a0a04] rounded-full"></div>
  <!-- Center cap -->
  <div class="w-4 h-4 rounded-full bg-[#1a0a04]"></div>
</div>
```

### 5) Speaker Grill Cloth Texture

Woven crosshatch speaker grill cloth using CSS gradients.

```css
.speaker-grill {
  background-color: #d4c8a8;
  background-image:
    repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 6px),
    repeating-linear-gradient(-45deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.0) 1px, transparent 1px, transparent 6px);
  box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
}
```

```html
<div class="speaker-grill w-full h-32 rounded-lg border-2 border-[#4a3a2a]"></div>
```

For a perforated metal speaker look instead: use `radial-gradient(circle at center, #1a0a04 1px, transparent 2px)` with `background-size: 8px 8px`.

### 6) Horizontal Frequency Scale

Linear broadcast frequency scale with AM band markers.

```html
<div class="bg-gradient-to-b from-[#1a0a04] to-[#2a1a0a] border border-[#4a3a2a] p-4 rounded">
  <div class="bg-gradient-to-b from-[#f0ead0] to-[#d4c8a8] rounded p-3 relative">
    <!-- Frequency scale -->
    <div class="flex justify-between items-end h-8 text-[#3a2a1a]">
      <span class="font-serif font-bold text-xs">540</span>
      <span class="font-serif font-bold text-xs">700</span>
      <span class="font-serif font-bold text-xs">900</span>
      <span class="font-serif font-bold text-xs">1100</span>
      <span class="font-serif font-bold text-xs">1300</span>
      <span class="font-serif font-bold text-xs">1600</span>
    </div>
    <!-- Tick scale line -->
    <div class="relative h-4 mt-1">
      <div class="absolute inset-x-0 top-0 h-px bg-[#3a2a1a]"></div>
      <!-- Major ticks -->
      <div class="absolute inset-0 flex justify-between">
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
        <div class="w-px h-3 bg-[#3a2a1a]"></div>
      </div>
    </div>
    <!-- Tuning needle -->
    <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c43030] shadow-[0_0_6px_rgba(255,60,60,0.7)]"></div>
  </div>
</div>
```

### 7) Cabinet Radio Card

Full cabinet radio form factor card with grill, dial, knobs, and tubes.

- `bg-gradient-to-b from-[#3a2a1a] via-[#2a1a0a] to-[#1a0a04] border-2 border-[#4a3a2a] rounded-2xl p-6 shadow-[inset_0_2px_12px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.5)]`.
- Top section: speaker grill cloth panel.
- Middle section: tuning dial + vacuum tubes row.
- Bottom section: brass knob row + brand call sign plate.

### 8) Broadcast Call Sign Plate

Engraved metal brand plate for station identification.

- `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a04] font-serif font-bold text-sm tracking-[0.3em] uppercase px-4 py-1.5 border border-[#5a3a0a] shadow-[inset_0_1px_0_rgba(255,215,0,0.3)]`.

### 9) Art Deco Radio Button

Beveled bakelite toggle button.

- `bg-gradient-to-b from-[#4a3a2a] to-[#2a1a0a] text-[#d4c8a8] font-serif text-sm px-6 py-2.5 border-2 border-[#5a4a3a] rounded shadow-[0_3px_0_#1a0a04,inset_0_1px_0_rgba(255,255,255,0.08)] hover:from-[#5a4a3a] hover:to-[#3a2a1a] active:translate-y-0.5 active:shadow-[0_1px_0_#1a0a04] transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Bakelite Brown | `#3a2a1a` | Cabinet body, primary surface |
| Dark Bakelite | `#1a0a04` | Cabinet shadows, deep recesses |
| Brass | `#c4a043` | Knobs, bezels, trim, plates |
| Dark Brass | `#8a6a1a` | Knob shadows, engraved text |
| Tube Amber | `#ff8c30` | Vacuum tube glow, indicators |
| Tube Bright | `#ffaa50` | Tube filament, hot center |
| Grill Cream | `#d4c8a8` | Speaker cloth, secondary text |
| Dial White | `#f0ead0` | Tuning dial face |
| Tuning Red | `#c43030` | Tuning needle, warning |
| Warm Text | `#d4c8a8` | Labels on dark bakelite |

Rules: Bakelite brown and dark bakelite dominate the cabinet. Brass accents all interactive elements and trim. Vacuum tube amber glow provides the only saturated warmth. Dial white is reserved for tuning dial faces. The palette should feel like a 1930s radio sitting warm in a dim parlor at dusk.

## Typography Recommendations

- **Display:** Poiret One, Cinzel (art deco geometric capitals for brand call signs and headers).
- **Body:** Cormorant Garamond, EB Garamond (elegant broadcast-era serif).
- **Call Signs / Frequency Labels:** `font-serif font-bold tracking-[0.3em] uppercase` for station identifiers like "WABC" or "RADIO CORPORATION".
- **Dial Numerals:** `font-serif font-bold` serif numerals for frequency values (540, 880, 1200 kHz).
- **City Labels:** `font-serif font-bold text-xs` for city markers on the tuning dial (PARIS, LONDON, BERLIN).
- **Numerals:** Lining figures with generous tracking on dial faces.

## Component Architecture Pattern

```
ArtDecoRadio
├── CabinetPanel (bakelite gradient shell, glossy lacquer overlay)
│   ├── BrandPlate (brass call sign engraving)
│   ├── SpeakerGrill (woven crosshatch cloth or perforated metal)
│   ├── DialSection
│   │   ├── TuningDial (circular SVG or horizontal scale with city markers)
│   │   ├── TuningNeedle (red indicator)
│   │   └── FrequencyTicks (major/minor broadcast frequency marks)
│   ├── VacuumTubeBank (row of glowing amber tubes at varied heights)
│   └── ControlRow
│       ├── BrassKnob (tunable, rotatable)
│       └── BakeliteButton (toggle switches, band selector)
```

Each component is composable: the dial can be circular or horizontal, the grill panel can be cloth or perforated metal, the tube bank can scale from one to many tubes.

## Interaction Rules

- **Tuning dial rotation:** Click or drag the dial to rotate the city markers. Use `transform: rotate()` with smooth transition `transition-transform duration-300 ease-out`.
- **Vacuum tube warmup:** On power-on, tubes fade from dim to full glow over 1.5s with `animate-pulse` settling to steady glow.
- **Brass knob rotation:** Drag to rotate the knob indicator. Track rotation degrees mapped to a value range.
- **Speaker grill hover:** Subtle warm glow emanates from behind the grill on hover — `shadow-[0_0_20px_rgba(255,140,48,0.2)]`.
- **Station selection:** Clicking a city marker snaps the needle to that position and triggers a soft amber pulse across the tube bank.
- **Power toggle:** Toggling power fades tubes in/out and toggles the dial backlight glow.
- **All mechanical transitions** use ease-out curves to feel like physical bakelite hardware.

## Reusable Tailwind Tokens

- Bakelite cabinet: `bg-gradient-to-b from-[#3a2a1a] via-[#2a1a0a] to-[#1a0a04] border-2 border-[#4a3a2a]`.
- Glossy lacquer: overlay `bg-gradient-to-b from-white/10 to-transparent`.
- Brass panel: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] border border-[#5a3a0a]`.
- Brass knob: `bg-gradient-to-br from-[#e4c063] via-[#c4a043] to-[#8a6a1a] border-2 border-[#5a3a0a]`.
- Dial face: `bg-gradient-to-br from-[#f0ead0] to-[#d4c8a8] border-4 border-[#c4a043]`.
- Vacuum tube glow: `shadow-[0_0_12px_rgba(255,140,48,0.8),0_0_24px_rgba(255,140,48,0.4)]`.
- Speaker grill cloth: `repeating-linear-gradient` crosshatch at 45deg/-45deg with `#d4c8a8` base.
- Call sign plate: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a0a04] font-serif font-bold tracking-[0.3em] uppercase`.
- Tuning needle: `bg-[#c43030] shadow-[0_0_6px_rgba(255,60,60,0.7)]`.
- Bakelite button: `bg-gradient-to-b from-[#4a3a2a] to-[#2a1a0a] text-[#d4c8a8] border-2 border-[#5a4a3a] shadow-[0_3px_0_#1a0a04]`.
- Tube warm glow overlay: `absolute inset-0 bg-[#ff8c30]/5`.

## Quality Checklist

- At least one tuning dial with city/broadcast frequency markers.
- Vacuum tube elements with warm amber glow (not flat orange).
- Brass knobs with knurling ridge detail and gradient sheen.
- Speaker grill cloth or perforated metal texture present.
- Bakelite cabinet surfaces use warm brown gradients with lacquer sheen.
- Broadcast call sign plate with wide tracking uppercase lettering.
- Art deco typography (Poiret One / Cinzel for display, serif for body).
- Color palette stays within bakelite brown, brass, tube amber, and dial cream.
- Everything feels warm, tactile, and lacquered — like holding bakelite.
- Frequency numbers and city labels readable on the dial face.
- Horizontal or circular tuning dial has a red tuning needle indicator.
- Cabinet has depth via inset shadows and glossy highlight overlays.
- The aesthetic reads as 1930s golden age of radio / art deco broadcast.

## Anti-Patterns

- Missing tuning dial or frequency markers (this is the defining centerpiece).
- Flat brown surfaces without gradient depth (bakelite has sheen and lacquer).
- Vacuum tubes without glow (the amber glow IS the visual signature).
- Flat yellow instead of brass gold (brass needs metallic gradient).
- Missing speaker grill texture (the grill cloth is essential radio identity).
- Modern sans-serif typography (art deco needs geometric or classical serif).
- Cold blue or bright non-warm colors (palette is warm amber/brown/brass only).
- Missing brass knobs (knobs are how you operate a radio).
- Cheap-looking flat orange tubes (tubes need layered glow shadows).
- Digital LCD or LED-style displays (this is ANALOG broadcast radio).
- Smooth untextured surfaces (bakelite and grill cloth need tactile texture).
- Missing call sign or station identification plate (radios have brand plates).
- Neon or fluorescent colors (this is warm incandescent tube glow, not neon).

## Accessibility Considerations

- Dial white (`#f0ead0`) with dark bakelite brown (`#3a2a1a`) text provides excellent contrast (WCAG AAA).
- Warm text (`#d4c8a8`) on dark bakelite (`#1a0a04`) provides strong contrast for labels.
- Vacuum tube glow animations must respect `prefers-reduced-motion` — reduce to steady glow.
- Tuning dial SVGs need `aria-label` describing the current station or frequency.
- City frequency markers should have text alternatives for screen readers.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/50` (brass gold ring).
- Brass call sign plates with dark text meet contrast standards on all brass shades.
- Touch targets for knobs and buttons must be adequate despite decorative circular styling.
- Tuning needle color (`#c43030`) must not be the sole indicator — pair with position or label.
- The warm gradient overlays should not reduce text contrast on cabinet surfaces.
- `prefers-reduced-motion` disables tube pulse and dial rotation animations.
