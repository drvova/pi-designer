---
name: haunted-forest-ui
description: Build haunted forest UI components (twisted tree, ghost orb, gravestone, cobweb corner, moonlight shaft, raven silhouette, iron fence) with dark twisted nature, spectral glow, and the eerie atmosphere of a haunted woodland. Trigger this skill when the user asks for haunted forest design, spooky UI, ghost orb aesthetic, gravestone interface, moonlight components, raven silhouette layout, or eerie woodland interfaces.
---

# Haunted Forest UI

Use this skill to design and implement dark, atmospheric interfaces inspired by a haunted woodland: twisted trees with gnarled branch silhouettes, floating ghost orbs pulsing with spectral light, weathered gravestones bearing carved inscriptions, delicate cobweb corners framing content, pale moonlight shafts cutting diagonally through darkness, raven silhouettes perched watchfully, and wrought iron fences with pointed finials. The palette balances deep forest darkness and cold stone against pale moonlight and spectral ghost glow.

## Non-Negotiable Foundations

- Haunted Forest UI draws from gothic horror woodland lore: twisted ancient trees, floating ghost orbs, carved gravestones, intricate cobwebs, pale moonlight, watchful ravens, and wrought iron cemetery fences.
- Materials are a mix of dead nature and spectral energy: gnarled bark, weathered stone, corroded iron, wispy cobwebs, pale moonlight, and translucent ghost energy.
- Colors are deep forest dark and cold stone with ethereal spectral accents: forest dark, ghost pale, moonlight white, raven black, stone gray, cobweb gray-translucent, iron dark, and mist blue-gray.
- The layout centers on organic and gothic motifs: twisted tree silhouettes as backgrounds, gravestone shapes as cards, cobweb corners as decorative frames, moonlight shafts as accent lighting, and iron fence patterns as dividers.
- The mood is eerie, still, and slightly menacing — the interface should feel like standing in a moonlit graveyard at the edge of a haunted forest, where every shadow might move.
- Spectral glow effects are essential: ghost orb pale-blue luminescence, moonlight shaft white, cobweb silver shimmer, and the cold blue-gray of mist.

## Core Material Recipes

### 1) Twisted Tree Silhouette

A gnarled tree with asymmetric branches, used as a background element or decorative frame.

```html
<div class="relative w-full h-64 overflow-hidden bg-[#0a1a0a]">
  <svg viewBox="0 0 400 256" class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
    <!-- Trunk -->
    <path d="M190,256 Q185,220 188,180 Q190,140 186,110 Q184,90 190,70 Q195,50 192,30" stroke="#1a1a1a" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M190,256 Q195,220 192,180 Q190,140 194,110 Q196,90 190,70 Q185,50 188,30" stroke="#1a1a1a" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.6"/>
    <!-- Left branches -->
    <path d="M188,110 Q170,95 140,85 Q120,80 100,82" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M140,85 Q135,70 125,60" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M140,85 Q130,75 120,70" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M186,90 Q160,80 135,75 Q115,72 95,78" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M186,80 Q155,65 130,55 Q110,50 90,55" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M90,55 Q80,45 70,40" stroke="#1a1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- Right branches (asymmetric) -->
    <path d="M192,100 Q210,85 240,80 Q260,78 280,82" stroke="#1a1a1a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M240,80 Q245,65 255,55" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M194,75 Q220,60 250,50 Q270,45 290,50" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M290,50 Q300,40 310,35" stroke="#1a1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M250,50 Q258,38 265,30" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M190,60 Q200,45 215,35 Q225,28 240,30" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Root tendrils -->
    <path d="M188,256 Q170,250 155,248 Q140,246 125,250" stroke="#1a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M192,256 Q210,252 225,250 Q240,248 255,252" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>
</div>
```

### 2) Ghost Orb (Floating Translucent Sphere)

A floating orb of spectral light with a soft ethereal glow, used as a status indicator or decorative element.

```html
<div class="relative w-16 h-16 mx-auto">
  <!-- Outer glow -->
  <div class="absolute -inset-4 rounded-full bg-[#c0d8e0]/10 blur-xl animate-pulse"></div>
  <!-- Orb body -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#c0d8e0]/30 via-[#c0d8e0]/50 to-[#c0d8e0]/10 border border-[#c0d8e0]/30 shadow-[0_0_20px_rgba(192,216,224,0.3),0_0_40px_rgba(192,216,224,0.15),inset_0_-8px_16px_rgba(192,216,224,0.1)] backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]">
    <!-- Inner wisps -->
    <div class="absolute inset-2 rounded-full bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]"></div>
    <!-- Specular highlight -->
    <div class="absolute top-2 left-3 w-4 h-3 rounded-full bg-white/10 blur-[1px] rotate-[-20deg]"></div>
    <!-- Faint inner movement -->
    <div class="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_60%_70%,rgba(192,216,224,0.1),transparent_50%)] animate-[drift_6s_ease-in-out_infinite_alternate]"></div>
  </div>
</div>
```

### 3) Gravestone Shape (Carved Stone Marker)

A weathered gravestone card with carved inscription, used as a content container.

```html
<div class="relative w-48 mx-auto bg-gradient-to-b from-[#6a6a5a] via-[#5a5a4a] to-[#4a4a3a] border border-[#7a7a6a]/50 shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]" style="clip-path: polygon(0% 15%, 10% 5%, 30% 1%, 50% 0%, 70% 1%, 90% 5%, 100% 15%, 100% 100%, 0% 100%);">
  <!-- Stone texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(0,0,0,0.04)_3px,rgba(0,0,0,0.04)_4px)]"></div>
  <!-- Weathering crack -->
  <div class="absolute top-8 right-4 w-12 h-px bg-[#4a4a3a] rotate-[15deg] opacity-60"></div>
  <div class="absolute top-12 left-6 w-8 h-px bg-[#4a4a3a] rotate-[-8deg] opacity-40"></div>
  <!-- Carved content -->
  <div class="relative z-10 p-6 pt-8 text-center">
    <div class="font-serif text-xs uppercase tracking-[0.2em] text-[#c0d8e0]/60 mb-3">Here Lies</div>
    <div class="font-serif text-lg text-[#e0e8f0]/80 italic">Forgotten Data</div>
    <div class="mt-3 font-serif text-[10px] text-[#c0d8e0]/40 tracking-wider">R.I.P.</div>
    <!-- Moss growth -->
    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#2a3a1a]/40 to-transparent"></div>
  </div>
</div>
```

### 4) Cobweb Corner (Delicate Web Pattern)

An intricate spiderweb pattern placed in a corner, framing content edges.

```html
<div class="relative p-8">
  <!-- Top-left cobweb -->
  <svg class="absolute top-0 left-0 w-24 h-24 text-[#c0d8e0]/20" viewBox="0 0 100 100" fill="none">
    <!-- Radial threads -->
    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="100" y2="50" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="80" y2="100" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="100" y2="80" stroke="currentColor" stroke-width="0.5"/>
    <!-- Spiral rings -->
    <path d="M10,0 Q10,10 0,10" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M20,0 Q20,20 0,20" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M35,0 Q35,35 0,35" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M50,0 Q50,50 0,50" stroke="currentColor" stroke-width="0.5" fill="none"/>
    <path d="M65,2 Q65,65 2,65" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M80,5 Q80,80 5,80" stroke="currentColor" stroke-width="0.3" fill="none"/>
    <!-- Dew drops -->
    <circle cx="15" cy="8" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="8" cy="15" r="0.8" fill="currentColor" opacity="0.3"/>
    <circle cx="30" cy="18" r="0.7" fill="currentColor" opacity="0.25"/>
  </svg>
  <!-- Bottom-right cobweb (mirrored) -->
  <svg class="absolute bottom-0 right-0 w-24 h-24 text-[#c0d8e0]/15" viewBox="0 0 100 100" fill="none" style="transform: rotate(180deg);">
    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="100" y2="50" stroke="currentColor" stroke-width="0.5"/>
    <line x1="0" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.5"/>
    <path d="M15,0 Q15,15 0,15" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M30,0 Q30,30 0,30" stroke="currentColor" stroke-width="0.4" fill="none"/>
    <path d="M50,0 Q50,50 0,50" stroke="currentColor" stroke-width="0.5" fill="none"/>
    <path d="M70,2 Q70,70 2,70" stroke="currentColor" stroke-width="0.3" fill="none"/>
  </svg>
  <!-- Content area -->
  <div class="relative z-10 text-[#e0e8f0]">
    <p class="text-sm leading-relaxed">Content framed by spectral cobwebs.</p>
  </div>
</div>
```

### 5) Moonlight Shaft (Diagonal Pale Light)

A diagonal beam of pale moonlight cutting across the scene, used as an accent light.

```html
<div class="relative w-full h-48 overflow-hidden bg-[#0a1a0a]">
  <!-- Moonlight beam -->
  <div class="absolute top-0 left-1/3 w-32 h-full bg-gradient-to-b from-[#e0e8f0]/15 via-[#e0e8f0]/08 to-transparent skew-x-[-15deg] blur-[1px]"></div>
  <!-- Secondary thinner beam -->
  <div class="absolute top-0 left-[42%] w-8 h-2/3 bg-gradient-to-b from-[#e0e8f0]/10 via-[#e0e8f0]/04 to-transparent skew-x-[-12deg] blur-[2px]"></div>
  <!-- Dust motes in moonlight -->
  <div class="absolute top-8 left-[38%] w-1 h-1 rounded-full bg-[#e0e8f0]/30 animate-[drift_5s_ease-in-out_infinite_alternate]"></div>
  <div class="absolute top-16 left-[36%] w-0.5 h-0.5 rounded-full bg-[#e0e8f0]/20 animate-[drift_7s_ease-in-out_infinite_alternate-reverse]"></div>
  <div class="absolute top-24 left-[40%] w-0.5 h-0.5 rounded-full bg-[#e0e8f0]/25 animate-[drift_4s_ease-in-out_infinite_alternate]"></div>
  <!-- Ground illumination pool -->
  <div class="absolute bottom-0 left-[28%] w-40 h-8 bg-[#e0e8f0]/05 blur-lg"></div>
</div>
```

### 6) Raven Silhouette

A perched raven silhouette in solid dark, used as a decorative accent or avatar placeholder.

```html
<div class="relative w-20 h-20">
  <svg viewBox="0 0 80 80" class="w-full h-full text-[#1a1a1a]">
    <!-- Body -->
    <path d="M40,65 Q38,55 36,48 Q34,42 36,36 Q38,30 42,28 Q44,26 46,28 Q48,30 47,34 Q46,38 44,40" fill="currentColor" opacity="0.95"/>
    <!-- Head -->
    <circle cx="46" cy="26" r="5" fill="currentColor" opacity="0.95"/>
    <!-- Beak -->
    <path d="M51,25 L58,23 L51,27 Z" fill="currentColor" opacity="0.95"/>
    <!-- Eye -->
    <circle cx="48" cy="24.5" r="0.8" fill="#e0e8f0" opacity="0.6"/>
    <!-- Tail feathers -->
    <path d="M36,48 Q30,52 25,58 Q28,55 32,54 Q28,58 24,62 Q30,58 36,56" fill="currentColor" opacity="0.9"/>
    <!-- Wing suggestion -->
    <path d="M36,36 Q28,38 22,44 Q26,42 30,40 Q26,44 20,48 Q28,44 36,42" fill="currentColor" opacity="0.85"/>
    <!-- Feet -->
    <path d="M40,65 L38,72 M40,65 L42,72" stroke="currentColor" stroke-width="1" fill="none"/>
  </svg>
  <!-- Perch line (branch) -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-[#3a3a2a]"></div>
</div>
```

### 7) Iron Fence (Pointed Vertical Bars)

A wrought iron fence pattern used as a divider or border element.

```html
<div class="relative w-full h-12 overflow-hidden">
  <!-- Top rail -->
  <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></div>
  <!-- Bottom rail -->
  <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-[0_-1px_2px_rgba(0,0,0,0.3)]"></div>
  <!-- Vertical bars with pointed finials -->
  <div class="absolute top-1 bottom-1 left-0 right-0 flex justify-evenly">
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
      <div class="w-[2px] flex-1 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]"></div>
    </div>
  </div>
</div>
```

### 8) Ghost Orb Status Card

A card container with a ghost orb as a status indicator, for haunted content display.

```html
<div class="relative bg-[#0a1a0a] border border-[#6a6a5a]/30 rounded-lg p-6 shadow-[0_4px_16px_rgba(0,0,0,0.6)] overflow-hidden">
  <!-- Cobweb corner decoration -->
  <svg class="absolute top-0 right-0 w-16 h-16 text-[#c0d8e0]/10" viewBox="0 0 60 60" fill="none">
    <line x1="60" y1="0" x2="0" y2="60" stroke="currentColor" stroke-width="0.5"/>
    <line x1="60" y1="0" x2="0" y2="30" stroke="currentColor" stroke-width="0.4"/>
    <line x1="60" y1="0" x2="30" y2="60" stroke="currentColor" stroke-width="0.4"/>
    <path d="M50,0 Q50,50 0,50" stroke="currentColor" stroke-width="0.3" fill="none"/>
    <path d="M40,0 Q40,40 0,40" stroke="currentColor" stroke-width="0.3" fill="none"/>
  </svg>
  <!-- Content -->
  <div class="relative z-10 flex items-start gap-4">
    <!-- Ghost orb indicator -->
    <div class="relative shrink-0 w-10 h-10">
      <div class="absolute -inset-2 rounded-full bg-[#c0d8e0]/10 blur-lg animate-pulse"></div>
      <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#c0d8e0]/40 to-[#c0d8e0]/15 border border-[#c0d8e0]/30 shadow-[0_0_12px_rgba(192,216,224,0.2)]"></div>
    </div>
    <div class="text-[#c0d8e0]/80 text-sm leading-relaxed">
      <div class="font-serif font-medium text-[#e0e8f0] mb-1">Spectral Reading</div>
      <p>Ethereal presence detected in the northern sector.</p>
    </div>
  </div>
</div>
```

### 9) Moonlit Graveyard Card

A full atmospheric card combining moonlight, gravestone, and raven elements.

```html
<div class="relative w-full max-w-sm mx-auto bg-gradient-to-b from-[#0a1a0a] via-[#0e1e0e] to-[#0a1a0a] border border-[#6a6a5a]/20 rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
  <!-- Moon -->
  <div class="absolute top-4 right-6 w-10 h-10 rounded-full bg-[#e0e8f0] shadow-[0_0_20px_rgba(224,232,240,0.2),0_0_40px_rgba(224,232,240,0.1)]"></div>
  <!-- Moonlight shaft -->
  <div class="absolute top-0 right-10 w-20 h-full bg-gradient-to-b from-[#e0e8f0]/08 via-[#e0e8f0]/03 to-transparent skew-x-[-10deg]"></div>
  <!-- Gravestone -->
  <div class="relative mt-16 mx-auto w-24 bg-gradient-to-b from-[#6a6a5a]/80 to-[#5a5a4a]/60 border border-[#7a7a6a]/30 shadow-[0_4px_12px_rgba(0,0,0,0.4)]" style="clip-path: polygon(0% 12%, 15% 3%, 50% 0%, 85% 3%, 100% 12%, 100% 100%, 0% 100%);">
    <div class="p-4 pt-6 text-center">
      <div class="font-serif text-[9px] uppercase tracking-[0.15em] text-[#c0d8e0]/50">1887</div>
    </div>
  </div>
  <!-- Content -->
  <div class="relative z-10 p-6 pt-4 text-center">
    <h3 class="font-serif text-lg text-[#e0e8f0] mb-2">Forgotten Section</h3>
    <p class="font-serif text-xs text-[#c0d8e0]/60 leading-relaxed">Something stirs among the headstones when the moon is full.</p>
  </div>
  <!-- Ground mist -->
  <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#c0d8e0]/05 to-transparent"></div>
</div>
```

### 10) Haunted Forest Button

A dark, weathered button with a spectral glow on interaction.

```html
<button class="relative px-6 py-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[#c0d8e0] font-serif text-sm tracking-wider border border-[#6a6a5a]/40 rounded shadow-[0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-[#c0d8e0]/30 hover:shadow-[0_0_12px_rgba(192,216,224,0.15),0_4px_8px_rgba(0,0,0,0.5)] hover:text-[#e0e8f0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#c0d8e0]/30 transition-all duration-300">
  Enter the Forest
</button>
```

## Color Palette System

### Core Haunted Forest Palette

| Color | Hex | Role |
|---|---|---|
| Forest Dark | `#0a1a0a` | Primary background, deep woodland darkness |
| Ghost Pale | `#c0d8e0` | Ghost orb glow, spectral text, ethereal accents |
| Moonlight | `#e0e8f0` | Moonlight shafts, moon, bright spectral highlights |
| Raven Black | `#1a1a1a` | Raven silhouettes, deepest shadows, text on light |
| Stone Gray | `#6a6a5a` | Gravestone surfaces, weathered stone, borders |
| Cobweb Translucent | `#c0d8e0/20` | Cobweb lines, delicate web patterns |
| Iron Dark | `#2a2a2a` | Iron fence, wrought metal, dark structural elements |
| Mist Blue-Gray | `#c0d8e0` at low opacity | Ground mist, fog, atmospheric haze |

### Extended Accent Palette

| Color | Hex | Role |
|---|---|---|
| Grave Moss | `#2a3a1a` | Moss on gravestones, aged vegetation |
| Bark Dark | `#3a3a2a` | Tree bark, wooden elements, branches |
| Spectral Blue | `#80a0b0` | Ghost orb secondary glow, cold spectral energy |
| Dried Blood | `#4a1a1a` | Subtle horror accent, aged stains |
| Fog White | `#e0e8f0` at 5% opacity | Dense fog layers, background mist |
| Dead Leaf | `#5a4a2a` | Dried leaves, autumn decay accents |
| Moon Silver | `#b0b8c0` | Moonlit metal, silver highlights |
| Night Indigo | `#0a0a2a` | Deepest night sky behind tree canopy |

Rules: Forest dark dominates the background. Ghost pale and moonlight provide the only sources of light. Stone gray appears on all gravestone and masonry elements. Iron dark is reserved for fence and structural metal. Cobweb translucent is used exclusively for web patterns. Mist blue-gray appears only as atmospheric fog. Raven black is used for silhouettes and deepest shadows.

## Typography Recommendations

Haunted Forest typography blends gothic gravestone carving with spectral elegance:

- **Display headings:** Cinzel, UnifrakturMaguntia, or Creepster (gothic gravestone carving, ominous display).
- **Body text:** EB Garamond, Spectral, or Crimson Pro (readable serif with gothic warmth).
- **Inscription text:** `font-serif italic text-[#c0d8e0]/60` (carved gravestone inscription style).
- **Labels:** `font-serif font-medium uppercase tracking-[0.2em] text-[10px] text-[#6a6a5a]` (chiseled stone label style).
- **Ghost text:** `font-serif text-[#c0d8e0]/50 animate-pulse` (spectral, flickering text for ghost messages).
- **Date markers:** `font-mono text-[10px] text-[#c0d8e0]/40 tracking-wider` (engraved dates on stone).
- Avoid sans-serif for primary text. Avoid pure white for headings — use moonlight or ghost pale instead.
- Consider text-shadow for a spectral glow effect on important headings: `text-shadow: 0 0 8px rgba(192,216,224,0.3)`.

## Component Architecture Pattern

1. Forest dark background (`#0a1a0a`) as the ambient base.
2. Gravestone-shaped cards as primary content containers.
3. Moonlight shafts as accent lighting across sections.
4. Cobweb corners framing content areas and cards.
5. Ghost orbs as status indicators and ambient decoration.
6. Iron fence patterns as section dividers and borders.
7. Twisted tree silhouettes as background textures and hero elements.
8. Raven silhouettes as avatars, decorative accents, or section markers.
9. Ground mist as a transition effect between sections.
10. Stone texture overlays on all masonry elements.

## Interaction Rules

- Default state: still, eerie, softly glowing — like a moonlit graveyard at rest.
- Hover: ghost orb brightens, spectral glow intensifies, cobweb shimmers.
  - `hover:shadow-[0_0_16px_rgba(192,216,224,0.2)] hover:border-[#c0d8e0]/30 transition-all duration-500`.
- Active: `active:scale-[0.98] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]` (stone-press feel).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c0d8e0]/30 focus:shadow-[0_0_12px_rgba(192,216,224,0.15)]` (ghost pale ring).
- Transitions: `transition-all duration-500` (slow, ghostly, deliberate).
- Ghost appear: elements fade in from transparent with a slight upward drift.
  - `@keyframes ghost-appear { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }`.
- Loading state: ghost orb pulses with `animate-pulse shadow-[0_0_16px_rgba(192,216,224,0.2)]`.
- Spectral flicker: text or orb occasionally dims and brightens, simulating ghostly instability.
  - `@keyframes flicker { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }`.
- Raven alert: on interaction, raven silhouette briefly shifts as if startled (2px translate).

## Reusable Tailwind Tokens

- Forest dark background: `bg-[#0a1a0a]`
- Ghost orb glow: `bg-gradient-to-br from-[#c0d8e0]/30 to-[#c0d8e0]/10 border border-[#c0d8e0]/30 shadow-[0_0_20px_rgba(192,216,224,0.3),0_0_40px_rgba(192,216,224,0.15)]`
- Gravestone surface: `bg-gradient-to-b from-[#6a6a5a] to-[#5a5a4a] border border-[#7a7a6a]/50 shadow-[0_8px_24px_rgba(0,0,0,0.6)]`
- Moonlight shaft: `bg-gradient-to-b from-[#e0e8f0]/15 via-[#e0e8f0]/08 to-transparent skew-x-[-15deg]`
- Iron fence bar: `w-[2px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]`
- Ghost pale text: `text-[#c0d8e0]`
- Moonlight text: `text-[#e0e8f0]`
- Stone gray text: `text-[#6a6a5a]`
- Spectral inscription: `font-serif italic text-[#c0d8e0]/60`
- Cobweb pattern: `text-[#c0d8e0]/20` (applied to SVG)
- Haunted button: `bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[#c0d8e0] border border-[#6a6a5a]/40 shadow-[0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]`
- Mist overlay: `bg-gradient-to-t from-[#c0d8e0]/05 to-transparent`
- Ghost glow text: `text-[#c0d8e0] shadow-[0_0_6px_rgba(192,216,224,0.4)]`
- Grave moss: `bg-gradient-to-t from-[#2a3a1a]/40 to-transparent`
- Haunted card: `bg-[#0a1a0a] border border-[#6a6a5a]/30 shadow-[0_4px_16px_rgba(0,0,0,0.6)]`

## Quality Checklist (must pass)

- Background is forest dark (`#0a1a0a`) or deep woodland darkness.
- At least one gravestone-shaped element with carved inscription or weathered stone texture.
- Ghost orb or spectral glow element present as a focal or ambient light.
- Cobweb corner decoration framing at least one content area.
- Moonlight shaft or moon element providing directional pale light.
- Iron fence pattern used as a divider or border element somewhere in the layout.
- Twisted tree silhouette visible as a background or decorative element.
- Raven silhouette present as an accent, avatar, or section marker.
- Typography is gothic serif (Cinzel, UnifrakturMaguntia, or similar for display).
- Ground mist or fog effect provides atmospheric depth at section transitions.
- The overall atmosphere reads as a moonlit haunted woodland or graveyard.
- Color balance: deep forest darkness with cool ghost pale and moonlight accents.
- All glowing effects use `box-shadow` or `text-shadow` rather than solid color blocks.
- Stone elements show weathering (cracks, moss, age spots) rather than looking new.

## Anti-Patterns

- Light or bright backgrounds (haunted forest is dark and shadowy).
- Modern flat design without texture (stone, bark, and iron texture is mandatory).
- Missing glow effects (spectral ambiance is essential to the theme).
- Sans-serif typography for headings (gothic serif is required).
- Bright neon or saturated warm colors without muted context (glows must be cold and ethereal).
- Missing organic or gothic motifs (twisted trees, gravestones, and cobwebs define the visual language).
- Warm-only or cool-only palette (the theme requires cold spectral light against deep forest darkness).
- Missing the eerie, still, menacing atmosphere (the interface should feel like a place where ghosts live).
- No cobweb or web elements (cobwebs are a key detail for gothic framing).
- Overly clean or new-looking surfaces (stone should show weathering, iron should show corrosion).
- Missing moon or moonlight element (moonlight is the primary light source).
- Harsh white text on dark backgrounds (use ghost pale or moonlight, never pure white).
- Friendly or cheerful colors (the palette must feel cold, spectral, and slightly threatening).
- All elements at the same visual depth (ghost orbs should float, moonlight should cut through, trees should recede).
- Missing atmospheric mist or fog (fog provides essential depth and mood).
- Raven or tree elements that look cartoonish (silhouettes must feel realistic and ominous).

## Accessibility Considerations

- Forest dark backgrounds with ghost pale or moonlight text provide strong contrast (WCAG AA or AAA).
- Focus states: `focus:ring-2 focus:ring-[#c0d8e0]/30` (ghost pale ring, visible against dark backgrounds).
- Decorative SVGs (cobwebs, tree silhouettes, raven shapes) must be `aria-hidden="true"`.
- Ghost orb and moonlight animations must respect `prefers-reduced-motion` — disable `animate-pulse`, float, and drift effects.
- Spectral glow shadows must not reduce text readability — verify contrast on all text within glowing containers.
- Gravestone carved text must include accessible labels or `aria-label` for screen readers (weathered text may be hard to read).
- Ghost text with reduced opacity must maintain sufficient contrast — do not drop below WCAG AA minimum.
- The dark atmosphere may cause eye strain in well-lit environments — ensure text is bright enough for extended reading sessions.
- Touch targets must remain adequate (minimum 44x44px) despite ornamental iron fence and cobweb elements.
- Cobweb corner decorations must not overlap interactive elements or create confusing hit areas.
- Moonlight shaft overlays must not obscure text content beneath them.
- Color is never the sole indicator of state — pair ghost glow changes with icons or text changes for state communication.
- Iron fence dividers must be clearly decorative and not interfere with content flow for screen readers.
- Ghost appear animations must be brief and non-repeating to avoid distracting screen reader users.
