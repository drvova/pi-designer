---
name: pottery-kiln-room-ui
description: Build pottery kiln room UI components (kiln brick chamber, pyrometer dial, fire brick shelves, glazed ware awaiting firing, cone pack, ash residue) with kiln-fired heat effects, brick textures, and the transformative fire of ceramic firing. Trigger this skill when the user asks for kiln design, fire brick UI, pyrometer gauge, ceramic firing, kiln chamber, glazed ware display, cone pack indicator, ash texture, kiln door, or pottery firing room interfaces.
---

# Pottery Kiln Room UI

Use this skill to design and implement interfaces inspired by the pottery kiln room: heavy brick kiln chambers with fire glow visible through the door opening, analog pyrometer dials showing rising temperature, fire brick shelf surfaces with heat-stained patina, colorful glazed ware pieces arranged before or after firing, cone pack melting indicators that bend at target temperature, ash residue textures from previous firings, and the imposing iron-and-brick kiln door. Every surface should feel heat-soaked, permanently changed by fire, and carrying the memory of temperatures that transform raw glaze into glass.

## Non-Negotiable Foundations

- The kiln room is a space of transformation through fire: raw bisque ware enters, glaze melts into glass, and finished pottery emerges permanently changed. Every surface should feel like it has been through firing — heat-stained, ash-dusted, brick-textured, and carrying the permanent marks of extreme temperature.
- Materials are industrial-organic: fire brick (rough, porous, heat-creamed), iron (heavy, dark, heat-warped), glazed ceramic (glossy, colorful, glass-over-clay), ash (fine, grey, powdery), pyrometer metal (brushed steel, dial glass), and kiln wash (white refractory coating on shelves).
- Colors are kiln-derived: brick red, fire glow orange, fire brick cream, ash grey, glazed pottery jewel tones, pyrometer silver, kiln interior dark, and brick mortar grey. The mood is a working kiln room — hot, industrial, transformative, with the glow of the kiln interior bleeding through every crack and seam.
- Motion is heat-driven: the pyrometer needle climbs slowly, heat shimmer rises from the kiln door, ash particles drift in convection currents, and the glow inside the kiln pulses with temperature. Motion is not playful — it is the measured, inevitable climb toward melting point.
- Typography blends industrial utility with the patina of kiln-room signage — the feel of hand-painted temperature warnings on brick walls.
- The aesthetic is heat-soaked, industrial, and transformative — everything should feel like it exists in proximity to a kiln at 1200 degrees Celsius.

## Core Material Recipes

### 1) Fire Brick Chamber Surface (the foundational background)

The signature kiln room surface: rough fire brick with heat-stained patina and mortar lines.

- Background gradient: `bg-gradient-to-b from-[#8a3a2a] via-[#7a3020] to-[#6a2818]`.
- Brick pattern: repeating rectangular cells with mortar lines — SVG or CSS grid of offset rectangles.
- Heat stain: gradient overlays in `#c46020` at `opacity-[0.08-0.15]` to suggest uneven heat exposure.
- Ash dusting: subtle speckled noise texture in `#8a8a7a` at `opacity-[0.04]` at the base.
- Full: `bg-gradient-to-b from-[#8a3a2a] via-[#7a3020] to-[#6a2818] relative overflow-hidden p-6 rounded-lg`.

```html
<div class="relative w-full h-32 bg-gradient-to-b from-[#8a3a2a] via-[#7a3020] to-[#6a2818] rounded-lg overflow-hidden">
  <!-- Brick pattern -->
  <svg class="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 100">
    <!-- Row 1 -->
    <rect x="2" y="2" width="45" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="50" y="2" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="101" y="2" width="46" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="150" y="2" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <!-- Row 2 (offset) -->
    <rect x="26" y="24" width="47" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="76" y="24" width="45" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="124" y="24" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="175" y="24" width="23" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <!-- Row 3 -->
    <rect x="2" y="46" width="45" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="50" y="46" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="101" y="46" width="46" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="150" y="46" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <!-- Row 4 (offset) -->
    <rect x="26" y="68" width="47" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="76" y="68" width="45" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="124" y="68" width="48" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
    <rect x="175" y="68" width="23" height="20" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="1"/>
  </svg>
  <!-- Heat stain -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(224,96,32,0.12)_0%,transparent_60%)]"></div>
</div>
```

### 2) Kiln Chamber Opening with Fire Glow

The defining visual element: a rectangular kiln opening with orange fire glow radiating from the interior.

```html
<div class="relative w-72 h-48 mx-auto">
  <!-- Brick surround -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#8a3a2a] to-[#6a2818] rounded-lg">
    <svg class="absolute inset-0 w-full h-full opacity-[0.2]" viewBox="0 0 200 140">
      <!-- Brick courses around opening -->
      <rect x="5" y="5" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="46" y="5" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="87" y="5" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="128" y="5" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="169" y="5" width="28" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="5" y="24" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="169" y="24" width="28" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="5" y="95" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="46" y="95" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="87" y="95" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="128" y="95" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="169" y="95" width="28" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="5" y="114" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="46" y="114" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="87" y="114" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="128" y="114" width="38" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="169" y="114" width="28" height="16" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
    </svg>
  </div>
  <!-- Kiln opening (dark interior) -->
  <div class="absolute top-12 left-16 right-16 bottom-12 bg-[#1a0a0a] rounded-sm overflow-hidden">
    <!-- Fire glow from depth -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(224,96,32,0.6)_0%,rgba(196,64,20,0.3)_40%,rgba(26,10,10,0.9)_75%)]"></div>
    <!-- Inner glow pulse -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,120,40,0.2)_0%,transparent_50%)]" style="animation: kiln-pulse 5s ease-in-out infinite alternate"></div>
    <!-- Heat shimmer lines -->
    <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgba(224,96,32,0.15)] to-transparent"></div>
    <!-- Shelf silhouette inside -->
    <div class="absolute bottom-4 left-2 right-2 h-1 bg-[#4a4a3a] opacity-40"></div>
    <div class="absolute bottom-10 left-2 right-2 h-1 bg-[#4a4a3a] opacity-30"></div>
  </div>
  <!-- Heat shimmer outside door -->
  <div class="absolute -top-4 left-1/4 right-1/4 h-8 bg-gradient-to-t from-[rgba(224,96,32,0.06)] to-transparent" style="animation: heat-shimmer 3s ease-in-out infinite"></div>
</div>
```

### 3) Pyrometer Dial Gauge

An analog temperature gauge with a climbing needle — the voice of the kiln.

```html
<div class="relative w-32 h-32 mx-auto">
  <!-- Gauge face -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-b from-[#d4d4d4] to-[#a0a0a0] shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)]">
    <!-- Dial face -->
    <div class="absolute inset-2 rounded-full bg-[#f0f0f0] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]">
      <!-- Temperature markings -->
      <svg class="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)]" viewBox="0 0 100 100">
        <!-- Arc marks -->
        <path d="M20,80 A40,40 0 0,1 80,80" fill="none" stroke="#666" stroke-width="0.5"/>
        <!-- Tick marks -->
        <line x1="22" y1="72" x2="26" y2="68" stroke="#333" stroke-width="1"/>
        <line x1="25" y1="58" x2="29" y2="55" stroke="#333" stroke-width="1"/>
        <line x1="32" y1="46" x2="35" y2="44" stroke="#333" stroke-width="1"/>
        <line x1="42" y1="38" x2="44" y2="35" stroke="#333" stroke-width="1"/>
        <line x1="50" y1="34" x2="50" y2="30" stroke="#333" stroke-width="1.5"/>
        <line x1="58" y1="38" x2="56" y2="35" stroke="#333" stroke-width="1"/>
        <line x1="68" y1="46" x2="65" y2="44" stroke="#333" stroke-width="1"/>
        <line x1="75" y1="58" x2="71" y2="55" stroke="#333" stroke-width="1"/>
        <line x1="78" y1="72" x2="74" y2="68" stroke="#333" stroke-width="1"/>
        <!-- Danger zone -->
        <path d="M70,36 A40,40 0 0,1 80,52" fill="none" stroke="#c44040" stroke-width="2" opacity="0.6"/>
        <!-- Labels -->
        <text x="20" y="78" font-size="4" fill="#666" text-anchor="middle">400</text>
        <text x="50" y="28" font-size="4" fill="#666" text-anchor="middle">1200</text>
        <text x="80" y="78" font-size="4" fill="#c44040" text-anchor="middle">1300</text>
        <!-- Unit label -->
        <text x="50" y="68" font-size="4" fill="#888" text-anchor="middle">Celsius</text>
      </svg>
      <!-- Needle (animated to climb) -->
      <div class="absolute bottom-1/2 left-1/2 origin-bottom w-0.5 h-12 bg-[#c44040] rounded-t -translate-x-1/2 pyrometer-needle" style="transform: translateX(-50%) rotate(-45deg); animation: pyrometer-climb 8s ease-in forwards"></div>
      <!-- Center cap -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#888] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    </div>
    <!-- Glass cover reflection -->
    <div class="absolute inset-3 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
  </div>
</div>
```

### 4) Fire Brick Shelf Surface

The heat-resistant kiln shelf — a flat, kiln-washed surface that holds ware through firing.

- Base: `bg-gradient-to-b from-[#d4c8a0] to-[#c4b890]`.
- Kiln wash coating: subtle white-ish overlay at `opacity-[0.15]` to suggest the refractory wash.
- Heat marks: irregular brownish-orange stains at `opacity-[0.08]` from previous firings.
- Surface cracks: thin dark lines at `opacity-[0.1]` from thermal stress.
- Combined: `bg-gradient-to-b from-[#d4c8a0] to-[#c4b890] relative overflow-hidden rounded shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.

### 5) Cone Pack Melting Indicator

Pyrometric cones that bend and melt at specific temperatures — the kiln's truth-teller.

```html
<div class="flex items-end gap-1.5 p-3 bg-[#d4c8a0] rounded-lg shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
  <!-- Cone 06 (still standing - low temp) -->
  <div class="w-2 h-8 relative">
    <svg viewBox="0 0 10 30" class="w-full h-full">
      <path d="M3,28 L5,2 L7,28 Z" fill="#c8b890" stroke="#8a8a7a" stroke-width="0.5"/>
    </svg>
    <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[3px] text-[#6a6a5a] font-mono">06</span>
  </div>
  <!-- Cone 04 (slightly bent - approaching target) -->
  <div class="w-2 h-8 relative">
    <svg viewBox="0 0 14 30" class="w-full h-full">
      <path d="M4,28 L6,2 L9,4 Q10,6 8,10 L7,28 Z" fill="#c8b890" stroke="#8a8a7a" stroke-width="0.5"/>
    </svg>
    <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[3px] text-[#6a6a5a] font-mono">04</span>
  </div>
  <!-- Cone 4 (bent over - target reached) -->
  <div class="w-2 h-8 relative">
    <svg viewBox="0 0 20 30" class="w-full h-full">
      <path d="M3,28 L5,6 Q6,2 10,3 Q14,4 15,8 L16,28 Z" fill="#c8b890" stroke="#8a8a7a" stroke-width="0.5"/>
    </svg>
    <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[3px] text-[#6a6a5a] font-mono">4</span>
  </div>
  <!-- Cone 8 (fully melted/flowed - over-fired) -->
  <div class="w-2 h-8 relative">
    <svg viewBox="0 0 20 30" class="w-full h-full">
      <path d="M2,28 Q4,24 6,22 Q10,18 14,22 Q16,24 18,28 Z" fill="#b8a880" stroke="#8a8a7a" stroke-width="0.5" opacity="0.7"/>
    </svg>
    <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[3px] text-[#6a6a5a] font-mono">8</span>
  </div>
  <!-- Cone 10 (completely melted flat) -->
  <div class="w-2 h-8 relative">
    <svg viewBox="0 0 20 30" class="w-full h-full">
      <ellipse cx="10" cy="26" rx="8" ry="3" fill="#a89870" stroke="#8a8a7a" stroke-width="0.5" opacity="0.5"/>
    </svg>
    <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[3px] text-[#6a6a5a] font-mono">10</span>
  </div>
</div>
```

### 6) Ash Residue Texture

Fine grey ash from previous firings — the residue that coats everything in the kiln room.

- Base: any surface color.
- Ash overlay: scattered small circles in `#8a8a7a` at varying `opacity-[0.06-0.15]` and sizes `w-0.5 h-0.5` to `w-1.5 h-1.5`.
- Concentration: heavier near the bottom of elements (ash settles with gravity).
- Combined with fire brick: `bg-[radial-gradient(circle_at_50%_100%,rgba(138,138,122,0.15)_0%,transparent_50%)]`.

### 7) Kiln Door

A heavy brick-and-iron door that seals the kiln chamber — massive, industrial, final.

```html
<div class="relative w-48 h-64 mx-auto">
  <!-- Door frame (iron) -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded border-2 border-[#4a4a4a]">
    <!-- Iron rivet details -->
    <div class="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#5a5a5a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
    <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#5a5a5a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
    <div class="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#5a5a5a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
    <div class="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#5a5a5a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
  </div>
  <!-- Brick inlay -->
  <div class="absolute inset-3 bg-gradient-to-b from-[#8a3a2a] to-[#6a2818] rounded overflow-hidden">
    <svg class="absolute inset-0 w-full h-full opacity-[0.25]" viewBox="0 0 120 200">
      <rect x="2" y="2" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="60" y="2" width="58" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="30" y="22" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="88" y="22" width="30" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="2" y="42" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="60" y="42" width="58" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="30" y="62" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="88" y="62" width="30" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="2" y="82" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="60" y="82" width="58" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="30" y="102" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="88" y="102" width="30" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="2" y="122" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="60" y="122" width="58" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="30" y="142" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="88" y="142" width="30" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="2" y="162" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="60" y="162" width="58" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
      <rect x="30" y="182" width="55" height="18" rx="1" fill="#9a4a3a" stroke="#4a4a3a" stroke-width="0.8"/>
    </svg>
    <!-- Heat glow seeping through cracks -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(224,96,32,0.2)_0%,transparent_60%)]"></div>
  </div>
  <!-- Iron handle -->
  <div class="absolute top-1/2 right-1 -translate-y-1/2 w-4 h-16 bg-gradient-to-b from-[#5a5a5a] to-[#3a3a3a] rounded-r shadow-[2px_0_4px_rgba(0,0,0,0.3)]"></div>
  <!-- Handle grip -->
  <div class="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-8 bg-[#4a4a4a] rounded-r-sm shadow-[1px_0_2px_rgba(0,0,0,0.4)]"></div>
</div>
```

### 8) Glazed Ware Display

Colorful glazed pottery pieces — each unique, each transformed by fire.

```html
<div class="flex gap-4 items-end p-4 bg-[#d4c8a0] rounded-lg">
  <!-- Bowl -->
  <div class="w-14 h-10 relative">
    <svg viewBox="0 0 50 35" class="w-full h-full">
      <path d="M5,8 Q8,2 25,2 Q42,2 45,8 Q48,18 40,28 Q32,34 25,34 Q18,34 10,28 Q2,18 5,8 Z" fill="#3a7a7a" stroke="#2a5a5a" stroke-width="0.8"/>
      <ellipse cx="25" cy="8" rx="18" ry="5" fill="#4a8a8a" stroke="#2a5a5a" stroke-width="0.6"/>
      <!-- Glaze highlight -->
      <path d="M12,10 Q18,6 25,8" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    </svg>
  </div>
  <!-- Tall vase -->
  <div class="w-10 h-16 relative">
    <svg viewBox="0 0 36 60" class="w-full h-full">
      <path d="M13,56 Q10,48 10,38 Q10,28 14,20 Q16,16 14,10 Q12,6 14,4 Q16,2 18,2 Q20,2 22,4 Q24,6 22,10 Q20,16 22,20 Q26,28 26,38 Q26,48 23,56 Z" fill="#c44040" stroke="#a03030" stroke-width="0.8"/>
      <!-- Glaze drip -->
      <path d="M14,10 Q15,16 13,22" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="18" cy="2" rx="4" ry="2" fill="#d85050" stroke="#a03030" stroke-width="0.6"/>
    </svg>
  </div>
  <!-- Wide plate -->
  <div class="w-16 h-6 relative">
    <svg viewBox="0 0 60 20" class="w-full h-full">
      <ellipse cx="30" cy="14" rx="26" ry="5" fill="#2a4a8a" stroke="#1a3a6a" stroke-width="0.8"/>
      <ellipse cx="30" cy="10" rx="24" ry="6" fill="#3a5a9a" stroke="#1a3a6a" stroke-width="0.6"/>
      <ellipse cx="30" cy="10" rx="18" ry="4" fill="#4a6aaa" stroke="#1a3a6a" stroke-width="0.4" opacity="0.5"/>
    </svg>
  </div>
  <!-- Small cup -->
  <div class="w-8 h-10 relative">
    <svg viewBox="0 0 30 36" class="w-full h-full">
      <path d="M6,32 L8,10 Q10,4 15,4 Q20,4 22,10 L24,32 Z" fill="#d4a848" stroke="#b88828" stroke-width="0.8"/>
      <!-- Handle -->
      <path d="M22,12 Q28,16 28,22 Q28,28 22,28" fill="none" stroke="#b88828" stroke-width="1.5"/>
      <ellipse cx="15" cy="4" rx="6" ry="2.5" fill="#e0b858" stroke="#b88828" stroke-width="0.5"/>
    </svg>
  </div>
</div>
```

### 9) Heat Shimmer Animation

The rising heat distortion visible above a hot kiln opening.

```css
@keyframes heat-shimmer {
  0%, 100% { opacity: 0.3; transform: translateY(0) scaleX(1); }
  50% { opacity: 0.6; transform: translateY(-4px) scaleX(1.02); }
}
@keyframes kiln-pulse {
  0% { opacity: 0.4; }
  100% { opacity: 0.7; }
}
@keyframes pyrometer-climb {
  0% { transform: translateX(-50%) rotate(-45deg); }
  30% { transform: translateX(-50%) rotate(-20deg); }
  60% { transform: translateX(-50%) rotate(5deg); }
  80% { transform: translateX(-50%) rotate(20deg); }
  100% { transform: translateX(-50%) rotate(35deg); }
}
```

### 10) Kiln Room Metal Panel

Brushed steel or iron paneling of kiln room equipment — industrial, heat-resistant, functional.

- Base: `bg-gradient-to-b from-[#6a6a6a] to-[#4a4a4a]`.
- Brushed texture: horizontal gradient lines at `opacity-[0.06]` in `#8a8a8a`.
- Heat discoloration: radial gradient patches in `#7a5a3a` at `opacity-[0.08]` near edges.
- Rivets: small circles `w-1.5 h-1.5 rounded-full bg-[#5a5a5a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]`.
- Combined: `bg-gradient-to-b from-[#6a6a6a] to-[#4a4a4a] relative overflow-hidden rounded shadow-[0_2px_6px_rgba(0,0,0,0.3)]`.

### 11) Kiln Room Button

Heavy industrial button with iron-plate feel.

- `bg-gradient-to-b from-[#6a6a6a] to-[#4a4a4a] text-[#f0f0f0] font-medium px-6 py-3 rounded border-2 border-t-[#7a7a7a] border-b-[#3a3a3a] shadow-[0_3px_0_#3a3a3a,inset_0_1px_0_rgba(255,255,255,0.15)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#3a3a3a] active:shadow-none transition-all duration-200`.

### 12) Ash Residue Divider

A divider made of accumulated kiln ash — soft, grey, settled.

- `h-1.5 bg-gradient-to-r from-transparent via-[#8a8a7a]/40 to-transparent rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]`.

## Color Palette System

### Core Pottery Kiln Room Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Kiln Brick Red | `#8a3a2a` | Fire brick wall surface | Primary surface, kiln body |
| Fire Glow Orange | `#e06020` | Active kiln fire interior | Hot accent, fire elements |
| Fire Brick Cream | `#d4c8a0` | Fire brick shelf surface | Shelf surfaces, light panels |
| Ash Grey | `#8a8a7a` | Kiln ash residue | Muted secondary, dust, residue |
| Glazed Teal | `#3a7a7a` | Copper-oxide ceramic glaze | Decorative accent, ware color |
| Glazed Red | `#c44040` | Iron-oxide ceramic glaze | Decorative accent, ware color |
| Glazed Blue | `#2a4a8a` | Cobalt-oxide ceramic glaze | Decorative accent, ware color |
| Glazed Gold | `#d4a848` | Iron-oxide amber glaze | Decorative accent, ware color |
| Pyrometer Silver | `#c0c0c0` | Brushed steel gauge face | Instrument surfaces, metallic |
| Kiln Interior Dark | `#1a0a0a` | Kiln chamber interior | Deep shadows, chamber depth |
| Brick Mortar | `#4a4a3a` | Refractory mortar between bricks | Mortar lines, subtle borders |
| Kiln Iron | `#3a3a3a` | Iron kiln door and hardware | Structural elements, frames |
| Heat Stain | `#7a4a2a` | Discoloration from heat exposure | Organic heat damage accents |
| Kiln Wash White | `#e8e0d0` | Refractory kiln wash coating | Light overlay on shelves |

Rules: Brick red and fire glow orange dominate — they are the kiln itself. Fire brick cream provides the lighter working surface. Ash grey appears as settled residue. Glazed ware colors (teal, red, blue, gold) are the jewel-toned accents that emerge from the kiln — small, brilliant, and earned through fire. Pyrometer silver and kiln iron provide industrial structure. The palette should feel like standing next to a running kiln — hot, brick-red, with the orange glow bleeding through every seam and the ash settling on every horizontal surface. Never cool-toned or clean — everything carries the patina of heat.

## Typography Recommendations

Kiln room typography blends industrial utility signage with the patina of hand-painted warnings:

- **Display headings:** Oswald, Barlow Condensed, or Roboto Condensed (industrial, strong, vertical — like painted kiln room signage).
- **Temperature readings:** Barlow Mono or JetBrains Mono (precise, numeric, the voice of instruments).
- **Body:** Source Serif Pro, Lora, or Merriweather (warm readable serif for process descriptions and firing logs).
- **Warning labels:** Barlow SemiCondensed bold (urgent, utilitarian, like safety signage on hot equipment).
- **Firing log entries:** monospace `font-mono text-xs text-[#8a8a7a] tracking-wider` (like stamped or typed kiln records).
- **Labels:** `font-sans font-medium text-sm tracking-wide text-[#4a4a3a]` for brick-mounted shelf labels.
- Avoid playful, rounded, or decorative fonts. The kiln room is industrial and serious — temperature matters, safety matters, and the typography reflects that gravity.

## Component Architecture Pattern

1. Fire brick gradient background (the kiln room walls and atmosphere).
2. Kiln chamber opening as a central or hero element (the heart of the transformative fire).
3. Fire glow radial gradients bleeding from openings and seams (the kiln's living breath).
4. Pyrometer dial as a status or monitoring element (the kiln's voice).
5. Fire brick shelf surfaces for display areas (where ware rests and transforms).
6. Ash residue texture on horizontal surfaces (the settling residue of firings).
7. Glazed ware pieces as colorful focal points against brick and ash (the rewarded outcome).
8. Cone pack indicators for progress or threshold states (the truth-teller).
9. Kiln door as a structural frame or panel border (the heavy seal).
10. Metal panel surfaces for equipment and instrumentation (industrial function).
11. Ash residue dividers between sections (soft grey settling lines).

## Interaction Rules

- Default state: hot, glowing, steady. The kiln is always running, always radiating.
- Hover: heat intensifies (`hover:brightness-110 hover:saturate-110`), like leaning closer to the kiln opening.
  - `hover:brightness-110 hover:saturate-110 hover:shadow-[0_4px_16px_rgba(224,96,32,0.2)] transition-all duration-300`.
- Active: heavy press (`active:translate-y-0.5 active:scale-[0.99] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.3)]`).
- Focus: fire glow ring `focus:ring-2 focus:ring-[#e06020]/50 focus:ring-offset-2 focus:ring-offset-[#d4c8a0]`.
- Transitions: `transition-all duration-400 ease-in-out` (slow, measured, like temperature change — thermal mass takes time).
- Pyrometer climb: slow 8s ease-in animation for the needle to reach operating temperature.
- Kiln pulse: subtle 5s opacity oscillation on the interior glow (the kiln breathes with heat).
- Heat shimmer: gentle vertical oscillation above openings (3s cycle, barely perceptible).
- No quick, snappy, or bouncy animations. Thermal mass is massive — heat changes are slow, inevitable, and powerful. Every transition should feel like temperature change: gradual, relentless, irreversible.

## Reusable Tailwind Tokens

- Fire brick surface: `bg-gradient-to-b from-[#8a3a2a] via-[#7a3020] to-[#6a2818]`
- Brick pattern: SVG `<rect>` tessellation with `#4a4a3a` stroke mortar at `opacity-[0.15]-[0.25]`
- Kiln interior: `bg-[#1a0a0a]` with `bg-[radial-gradient(ellipse_at_50%_60%,rgba(224,96,32,0.6)_0%,rgba(196,64,20,0.3)_40%,rgba(26,10,10,0.9)_75%)]`
- Fire glow: `bg-[radial-gradient(circle_at_center,rgba(224,96,32,0.25)_0%,transparent_60%)]`
- Fire brick shelf: `bg-gradient-to-b from-[#d4c8a0] to-[#c4b890]`
- Kiln wash overlay: `bg-[linear-gradient(180deg,rgba(232,224,208,0.15)_0%,transparent_100%)]`
- Kiln room button: `bg-gradient-to-b from-[#6a6a6a] to-[#4a4a4a] text-[#f0f0f0] rounded border-2 border-t-[#7a7a7a] border-b-[#3a3a3a] shadow-[0_3px_0_#3a3a3a]`
- Ash residue: scattered `rounded-full bg-[#8a8a7a]` circles at `opacity-[0.06-0.15]` sizes `w-0.5` to `w-1.5`
- Ash divider: `h-1.5 bg-gradient-to-r from-transparent via-[#8a8a7a]/40 to-transparent rounded-full`
- Pyrometer gauge: `rounded-full bg-gradient-to-b from-[#d4d4d4] to-[#a0a0a0]` outer ring with `bg-[#f0f0f0]` face
- Metal panel: `bg-gradient-to-b from-[#6a6a6a] to-[#4a4a4a]` with horizontal brush lines
- Heat stain: `bg-[radial-gradient(ellipse_at_position,rgba(122,74,42,0.08)_0%,transparent_60%)]`
- Brick mortar: `stroke="#4a4a3a" stroke-width="0.8-1"` on SVG brick patterns
- Kiln pulse: `@keyframes kiln-pulse { 0%{opacity:0.4} 100%{opacity:0.7} }`
- Heat shimmer: `@keyframes heat-shimmer { 0%,100%{opacity:0.3;transform:translateY(0)} 50%{opacity:0.6;transform:translateY(-4px)} }`
- Pyrometer climb: `@keyframes pyrometer-climb { 0%{transform:rotate(-45deg)} 100%{transform:rotate(35deg)} }`

## Quality Checklist (must pass)

- At least one kiln chamber opening with fire glow visible (the defining craft element).
- Fire brick pattern present on at least one surface (rectangular bricks with mortar lines).
- Pyrometer or temperature gauge element present (the kiln's voice).
- Fire brick shelf surface in at least one display area (where ware rests).
- Ash residue texture on at least one horizontal surface (settled kiln dust).
- At least one glazed ware piece displayed (colorful ceramic piece — the reward of firing).
- Cone pack or temperature threshold indicator present (the truth-teller).
- Kiln door or heavy structural element present (brick and iron frame).
- Heat glow effects (orange radial gradients bleeding from openings).
- Heat shimmer animation above hot surfaces (subtle rising distortion).
- Color palette is kiln-derived — brick red, fire orange, brick cream, ash grey.
- Glazed ware provides jewel-toned color accents against the brick-and-ash field.
- Typography is industrial and utilitarian — condensed, bold, temperature-precise.
- Interactions are slow and measured (no quick snaps — thermal mass changes gradually).
- The aesthetic reads as a pottery kiln room — hot, industrial, transformative, fire-driven.
- At least one metal/iron structural element (door, panel, or hardware).
- Ash residue divider or soft grey settling line between major sections.

## Anti-Patterns

- Cool or pastel colors (everything is heat-derived — brick, fire, ash, iron).
- Quick, snappy, or bouncy animations (thermal mass changes slowly and inevitably).
- Flat, untextured surfaces (brick needs pattern, shelves need kiln wash, metal needs brush).
- Missing fire glow (the kiln interior IS the kiln room interface).
- Decorative or playful typography (the kiln room is industrial and safety-conscious).
- Glossy, plastic, or chrome-feeling surfaces (fire brick is rough, iron is heavy, ash is powdery).
- Perfectly clean or pristine surfaces (everything has heat stains, ash residue, or wear from firings).
- Missing ash elements (ash is the permanent residue that proves firings have occurred).
- Digital or UI-chrome-feeling elements (the kiln room is analog and industrial).
- Missing glazed ware (the colorful reward of firing is what makes the kiln purposeful).
- Monochrome or single-tone palette (glazed ware provides essential color against brick and ash).
- Pure white or pure black backgrounds (use fire brick cream `#d4c8a0` or kiln interior `#1a0a0a`).
- Missing temperature or heat-related elements (temperature is the defining variable of the kiln).
- Lightweight, thin, or delicate structural elements (everything in the kiln room is heavy and massive).

## Accessibility Considerations

- Fire brick cream (`#d4c8a0`) with brick mortar text (`#4a4a3a`) provides good contrast (WCAG AA).
- Kiln interior dark (`#1a0a0a`) with fire brick cream text (`#d4c8a0`) — verify WCAG AAA.
- Metal panel silver (`#c0c0c0`) requires dark text (`#2a2a2a`) — verify WCAG AA minimum.
- Pyrometer needle animation must respect `prefers-reduced-motion` (show final temperature without climb animation).
- Kiln pulse animation must respect `prefers-reduced-motion` (static glow without oscillation).
- Heat shimmer must respect `prefers-reduced-motion` (static heat haze without movement).
- Fire glow effects must not reduce text contrast below WCAG AA thresholds on nearby text.
- Pyrometer and cone pack interactive elements need `aria-label` describing temperature or state.
- Decorative brick patterns, ash textures, and glazed ware silhouettes must be `aria-hidden="true"`.
- Focus states must be visible against brick surfaces (`focus:ring-2 focus:ring-[#e06020]/50`).
- Touch targets must meet minimum 44x44px despite industrial angular styling.
- Glazed ware color indicators must have text labels or `aria-label` for color-blind users.
- Temperature-dependent state changes must not rely solely on color (use text labels like "Firing", "Cooling", "Complete").
- Fire glow must not be the sole indicator of kiln status — pair with text or icon changes.
- Heavy visual weight must not compromise readability — ensure text layers have sufficient background opacity.
