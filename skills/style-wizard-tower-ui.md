---
name: wizard-tower-ui
description: Build wizard tower UI components (stone spiral staircase, magic circle, spell book, crystal orb, enchanted candle, mystical symbols, tower window) with medieval magical elements, arcane glow effects, and the mysterious atmosphere of a wizard study. Trigger this skill when the user asks for wizard tower design, arcane UI, magic circle aesthetic, spell book interface, crystal orb components, mystical medieval UI, wizard study atmosphere, or enchanted tower interfaces.
---

# Wizard Tower UI

Use this skill to design and implement dark, atmospheric interfaces inspired by a wizard's tower study: stone spiral staircases, magic circles with concentric rune rings, open spell books with glowing pages, crystal orbs on pedestals, enchanted candlelight, mystical symbols, and arched tower windows revealing a night sky. The palette balances cold stone and deep tower darkness against warm candlelight and vibrant arcane glow.

## Non-Negotiable Foundations

- Wizard Tower UI draws from medieval wizard lore: stone towers, spiral staircases, arcane circles, spell books, crystal scrying orbs, enchanted candles, and arched windows.
- Materials are a mix of weathered stone and arcane energy: rough-cut stone, aged parchment, worn leather, crystal glass, iron sconces, and ethereal magic light.
- Colors are deep and moody with vivid arcane accents: stone gray, tower-dark navy, magic purple, crystal blue, warm candlelight gold, spell gold, rune glow teal, and aged parchment.
- The layout centers on circular and spiral motifs: magic circles as section dividers, spiral staircase patterns as backgrounds, crystal orbs as focal points.
- The mood is mysterious, studious, and enchanting — the interface should feel like entering a wizard's private study atop a tower.
- Glowing arcane effects are essential: teal rune glows, purple magic auras, blue crystal luminescence, and warm candlelight pools.

## Core Material Recipes

### 1) Stone Spiral Staircase Pattern

An ascending circular pattern evoking the iconic spiral staircase.

```html
<div class="relative overflow-hidden bg-[#1a1a2a] p-8">
  <svg class="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 400">
    <defs>
      <radialGradient id="spiral" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#6a6a5a" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#6a6a5a" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g fill="none" stroke="url(#spiral)" stroke-width="1.5">
      <circle cx="200" cy="200" r="30"/>
      <circle cx="200" cy="200" r="60"/>
      <circle cx="200" cy="200" r="90"/>
      <circle cx="200" cy="200" r="120"/>
      <circle cx="200" cy="200" r="150"/>
      <circle cx="200" cy="200" r="180"/>
      <path d="M200,200 Q230,170 260,200 Q230,230 200,260 Q170,230 140,200 Q170,170 200,140 Q230,110 260,80"/>
    </g>
  </svg>
</div>
```

### 2) Magic Circle Divider

Concentric rings with mystical rune symbols as a section divider.

```html
<div class="flex items-center justify-center my-8">
  <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#40c0a0]/30"></div>
  <svg viewBox="0 0 120 120" class="w-20 h-20 mx-4 text-[#6a2a8a]" fill="none">
    <circle cx="60" cy="60" r="55" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
    <circle cx="60" cy="60" r="45" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
    <circle cx="60" cy="60" r="35" stroke="#40c0a0" stroke-width="0.8" opacity="0.5"/>
    <circle cx="60" cy="60" r="25" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    <!-- Rune marks -->
    <text x="60" y="8" text-anchor="middle" fill="#40c0a0" font-size="6" opacity="0.7">&#x16A0;</text>
    <text x="112" y="64" text-anchor="middle" fill="#40c0a0" font-size="6" opacity="0.7">&#x16A2;</text>
    <text x="60" y="120" text-anchor="middle" fill="#40c0a0" font-size="6" opacity="0.7">&#x16A6;</text>
    <text x="8" y="64" text-anchor="middle" fill="#40c0a0" font-size="6" opacity="0.7">&#x16B1;</text>
  </svg>
  <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#40c0a0]/30"></div>
</div>
```

### 3) Stone Tower Panel

Rough-cut stone surface with weathered mortar lines, the primary container.

- `bg-gradient-to-br from-[#2a2a3a] via-[#1e1e2e] to-[#1a1a2a] border border-[#3a3a4a] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]`.
- Stone noise texture: subtle SVG noise at `opacity-[0.05]` layered on top.
- Mortar joints: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_48px,rgba(0,0,0,0.12)_48px,rgba(0,0,0,0.12)_50px)]` as an overlay.
- The stone should feel heavier and more weathered than gothic stone — warmer gray undertones.

### 4) Spell Book Open

An open book component with parchment pages and glowing rune text.

```html
<div class="relative flex">
  <!-- Left page -->
  <div class="relative w-1/2 bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b8] p-6 shadow-[inset_-4px_0_8px_rgba(0,0,0,0.15)]">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_28px,rgba(0,0,0,0.06)_28px,rgba(0,0,0,0.06)_29px)] opacity-40"></div>
    <p class="relative font-serif text-[#1a1a2a]/70 text-sm leading-7">Inscribed upon these pages are the ancient incantations of the tower...</p>
    <!-- Rune glow overlay -->
    <div class="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#40c0a0] shadow-[0_0_8px_#40c0a0,0_0_16px_#40c0a0] opacity-60 animate-pulse"></div>
  </div>
  <!-- Spine -->
  <div class="w-px bg-gradient-to-b from-[#6a4a2a] via-[#8a6a4a] to-[#6a4a2a] shadow-[0_0_4px_rgba(0,0,0,0.3)]"></div>
  <!-- Right page -->
  <div class="relative w-1/2 bg-gradient-to-br from-[#f0e8d0] to-[#e8dcc0] p-6 shadow-[inset_4px_0_8px_rgba(0,0,0,0.15)]">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_28px,rgba(0,0,0,0.06)_28px,rgba(0,0,0,0.06)_29px)] opacity-40"></div>
    <p class="relative font-serif text-[#1a1a2a]/70 text-sm leading-7">The runes pulse with a faint teal light when spoken aloud...</p>
  </div>
</div>
```

### 5) Crystal Orb

A glowing scrying orb on a stone pedestal, the primary focal element.

```html
<div class="relative flex flex-col items-center">
  <!-- Orb -->
  <div class="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#40a0c0]/20 via-[#40a0c0]/40 to-[#206080]/60 border border-[#40a0c0]/40 shadow-[0_0_20px_rgba(64,160,192,0.3),0_0_40px_rgba(64,160,192,0.15),inset_0_-8px_16px_rgba(64,160,192,0.2)] backdrop-blur-sm">
    <!-- Inner glow -->
    <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#60d0e0]/20 to-transparent"></div>
    <!-- Specular highlight -->
    <div class="absolute top-3 left-4 w-6 h-4 rounded-full bg-white/10 blur-sm rotate-[-30deg]"></div>
    <!-- Floating rune -->
    <div class="absolute inset-0 flex items-center justify-center text-[#40c0a0]/60 text-lg animate-pulse">&#x16A0;</div>
  </div>
  <!-- Pedestal -->
  <div class="mt-[-4px] w-20 h-6 bg-gradient-to-b from-[#4a4a5a] to-[#3a3a4a] rounded-b-lg border border-t-0 border-[#3a3a4a] shadow-[0_4px_12px_rgba(0,0,0,0.4)]"></div>
  <div class="w-28 h-3 bg-gradient-to-b from-[#3a3a4a] to-[#2a2a3a] rounded-b-md border border-t-0 border-[#3a3a4a]"></div>
</div>
```

### 6) Enchanted Candle

A flickering candle with warm magical flame glow.

```html
<div class="relative flex flex-col items-center">
  <!-- Flame glow aura -->
  <div class="absolute -top-8 w-16 h-16 rounded-full bg-[#fff5d0]/20 blur-xl animate-pulse"></div>
  <!-- Flame -->
  <div class="relative w-4 h-8 bg-gradient-to-t from-[#c4a043] via-[#fff5d0] to-[#fff5d0]/0 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_0_8px_#fff5d0,0_0_16px_rgba(255,245,208,0.5),0_0_32px_rgba(196,160,67,0.3)] animate-[flicker_2s_ease-in-out_infinite_alternate]"></div>
  <!-- Wick -->
  <div class="w-px h-2 bg-[#2a2a2a]"></div>
  <!-- Candle body -->
  <div class="w-6 h-16 bg-gradient-to-b from-[#f0e8d0] via-[#e0d4b8] to-[#d0c4a8] rounded-b-sm border border-[#c0b498] shadow-[0_4px_8px_rgba(0,0,0,0.3)]"></div>
  <!-- Drip -->
  <div class="absolute top-[30px] left-1/2 ml-1 w-2 h-3 bg-[#f0e8d0] rounded-b-full opacity-70"></div>
  <!-- Base holder -->
  <div class="w-10 h-3 bg-gradient-to-b from-[#6a6a5a] to-[#4a4a3a] rounded-b-sm border border-[#5a5a4a]"></div>
</div>
```

### 7) Tower Window (Arched)

An arched window revealing a night sky with stars, framed in stone.

```html
<div class="relative w-40 h-56 mx-auto overflow-hidden bg-gradient-to-b from-[#0a0a2a] via-[#0a0a3a] to-[#1a1a3a]">
  <!-- Arch shape via clip-path -->
  <div class="absolute inset-0" style="clip-path: polygon(0% 100%, 0% 35%, 15% 10%, 50% 0%, 85% 10%, 100% 35%, 100% 100%);">
    <!-- Stars -->
    <div class="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[20%] opacity-80"></div>
    <div class="absolute w-0.5 h-0.5 bg-white rounded-full top-[25%] left-[60%] opacity-60"></div>
    <div class="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[75%] opacity-70"></div>
    <div class="absolute w-0.5 h-0.5 bg-white rounded-full top-[30%] left-[40%] opacity-50"></div>
    <div class="absolute w-1.5 h-1.5 bg-[#c4a043] rounded-full top-[20%] left-[50%] opacity-40 shadow-[0_0_4px_#c4a043]"></div>
    <!-- Moon -->
    <div class="absolute w-8 h-8 rounded-full bg-[#e8e0d0] top-[8%] right-[25%] shadow-[0_0_12px_rgba(232,224,208,0.3)]"></div>
  </div>
  <!-- Stone frame -->
  <div class="absolute inset-0 border-4 border-[#4a4a5a] rounded-t-[50%] shadow-[inset_0_0_16px_rgba(0,0,0,0.6)]"></div>
  <!-- Mullion -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-px h-full bg-[#4a4a5a]"></div>
  </div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="h-px w-full bg-[#4a4a5a]"></div>
  </div>
</div>
```

### 8) Mystical Symbol Accent

Small decorative rune symbols used as accents, bullets, or section markers.

```html
<span class="inline-flex items-center gap-2 text-[#40c0a0] text-sm font-mono opacity-70">
  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor">
    <path d="M12 2L14 8L12 14L10 8Z M6 6L10 10L14 14L10 10Z M18 6L14 10L10 14L14 10Z" opacity="0.8"/>
  </svg>
  <span>&#x16A0; Lore Fragment</span>
</span>
```

### 9) Arcane Glow Card

A card with an ambient arcane glow border effect.

- `relative bg-[#1a1a2a] border border-[#6a2a8a]/30 p-6 shadow-[0_0_20px_rgba(106,42,138,0.15),0_0_40px_rgba(106,42,138,0.05)]`.
- Pulsing border: `animate-pulse` on a pseudo-element ring of `border-[#40c0a0]/20`.

## Color Palette System

### Core Wizard Tower Palette

| Color | Hex | Role |
|---|---|---|
| Stone Gray | `#6a6a5a` | Primary surface, stone walls |
| Tower Dark | `#1a1a2a` | Deep background, tower interior |
| Magic Purple | `#6a2a8a` | Arcane accents, magic effects |
| Crystal Blue | `#40a0c0` | Crystal orb glow, scrying light |
| Rune Glow | `#40c0a0` | Rune illumination, teal accent |
| Spell Gold | `#c4a043` | Spell book accents, magical energy |
| Candle Warm | `#fff5d0` | Candlelight, warm highlights |
| Parchment | `#f0e8d0` | Book pages, scroll backgrounds |
| Deep Stone | `#2a2a3a` | Panel surfaces, card backgrounds |
| Mortar Dark | `#16161a` | Deepest shadows, stone crevices |

### Extended Accent Palette

| Color | Hex | Role |
|---|---|---|
| Arcane Indigo | `#3a1a5a` | Deep magic accent |
| Crystal Pale | `#80d0e0` | Crystal highlights |
| Candle Orange | `#d08030` | Flame accent, warmth |
| Blood Rune | `#8a2020` | Dark ritual accent |
| Night Sky | `#0a0a3a` | Tower window sky |
| Silver Rune | `#a0a0b0` | Metal accents, inscriptions |
| Moss Stone | `#4a5a3a` | Aged stone with lichen |
| Ink Dark | `#0a0a1a` | Deepest void, text ink |

Rules: Tower dark and stone gray dominate the background. Magic purple and rune glow appear as accent glows on interactive elements. Crystal blue is reserved for the scrying orb and similar focal elements. Candle warm provides the only warm pool of light. Parchment appears only on book and scroll components.

## Typography Recommendations

Wizard Tower typography blends medieval manuscript lettering with arcane inscriptions:

- **Display headings:** Cinzel Decorative, Uncial Antiqua, or MedievalSharp (wizardly manuscript headers).
- **Body text:** EB Garamond, Cormorant Garamond, or Lora (readable serif for spell descriptions).
- **Rune/arcade accents:** Futhark-inspired monospace or `font-mono text-[#40c0a0]` for rune inscriptions.
- **Labels:** `font-serif font-medium uppercase tracking-[0.15em] text-xs text-[#8a8a9a]` (scholarly inscription style).
- **Spell text:** `font-serif italic text-[#f0e8d0]/80` (parchment manuscript style).
- Avoid sans-serif for primary text. Avoid pure black for headings — use deep stone or tower dark instead.

## Component Architecture Pattern

1. Tower dark background (`#1a1a2a`) as the ambient base.
2. Stone tower panels with mortar texture as primary containers.
3. Magic circle dividers between sections.
4. Spell book components for content display (dual-page layout).
5. Crystal orb as a focal point or status indicator.
6. Enchanted candles for ambient decoration or loading states.
7. Tower windows as hero sections or frame elements.
8. Mystical symbol accents for bullets, markers, and decorations.
9. Arcane glow cards for interactive or highlighted content.
10. Spiral staircase patterns as background textures.

## Interaction Rules

- Default state: mysterious, atmospheric, softly glowing.
- Hover: rune glow intensifies, crystal orb brightens, candle flame flickers faster.
  - `hover:shadow-[0_0_24px_rgba(106,42,138,0.3)] transition-all duration-500`.
- Active: `active:scale-[0.98] active:shadow-[0_0_8px_rgba(106,42,138,0.4)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#40c0a0]/50 focus:shadow-[0_0_12px_rgba(64,192,160,0.2)]`.
- Transitions: `transition-all duration-500` (slow, mystical, deliberate).
- Spell cast feedback: on click, a brief flash of rune glow radiates outward.
  - `@keyframes cast { 0% { box-shadow: 0 0 0 0 rgba(64,192,160,0.4); } 100% { box-shadow: 0 0 0 20px rgba(64,192,160,0); } }`.
- Loading state: crystal orb pulses with `animate-pulse shadow-[0_0_20px_rgba(64,160,192,0.4)]`.

## Reusable Tailwind Tokens

- Stone panel: `bg-gradient-to-br from-[#2a2a3a] via-[#1e1e2e] to-[#1a1a2a] border border-[#3a3a4a] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]`
- Arcane glow card: `bg-[#1a1a2a] border border-[#6a2a8a]/30 shadow-[0_0_20px_rgba(106,42,138,0.15),0_0_40px_rgba(106,42,138,0.05)]`
- Crystal orb glow: `bg-gradient-to-br from-[#40a0c0]/20 via-[#40a0c0]/40 to-[#206080]/60 border border-[#40a0c0]/40 shadow-[0_0_20px_rgba(64,160,192,0.3),0_0_40px_rgba(64,160,192,0.15)]`
- Rune glow text: `text-[#40c0a0] shadow-[0_0_6px_rgba(64,192,160,0.5)]`
- Spell book page: `bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b8] text-[#1a1a2a]/70 font-serif`
- Parchment text: `text-[#f0e8d0]`
- Candle warm text: `text-[#fff5d0]`
- Tower dark background: `bg-[#1a1a2a]`
- Magic circle border: `border-[#6a2a8a]/40`
- Enchanted button: `bg-gradient-to-b from-[#6a2a8a] to-[#3a1a5a] text-[#f0e8d0] border border-[#6a2a8a]/50 shadow-[0_0_12px_rgba(106,42,138,0.3),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(106,42,138,0.5)] transition-all duration-500`
- Mystical divider: `h-px bg-gradient-to-r from-transparent via-[#40c0a0]/30 to-transparent`
- Night sky background: `bg-gradient-to-b from-[#0a0a2a] via-[#0a0a3a] to-[#1a1a3a]`

## Quality Checklist (must pass)

- Background is tower dark (`#1a1a2a`) or deep stone.
- At least one stone-textured panel with visible mortar lines.
- At least one magic circle element (concentric rings with rune symbols).
- Arcane glow effects present (purple or teal ambient light).
- Crystal orb or enchanted candle as a focal element.
- Parchment-colored book or scroll element for content.
- Typography is medieval serif (Cinzel Decorative, Uncial Antiqua, or similar for display).
- Tower window with night sky visible or referenced in the layout.
- Mystical symbol accents used for bullets, markers, or decorations.
- The overall atmosphere reads as a wizard's private study at night.
- Color balance: dark surfaces with strategic warm (candle) and cool (rune, crystal) accents.
- All glowing effects use `box-shadow` or `text-shadow` rather than solid color blocks.

## Anti-Patterns

- Light or bright backgrounds (wizard tower is dark and shadowy).
- Modern flat design without texture (stone and parchment texture is mandatory).
- Missing glow effects (arcane ambiance is essential to the theme).
- Sans-serif typography for headings (medieval serif is required).
- Bright neon or saturated colors without muted context (glows must be soft and atmospheric).
- Missing circular or spiral motifs (magic circles and spirals define the visual language).
- Warm-only or cool-only palette (the theme requires warm candlelight against cool stone and magic).
- Missing the mysterious, studious atmosphere (the interface must feel like a wizard's workspace).
- No parchment or book elements (spell books are core to the identity).
- Overly clean or sterile surfaces (stone should show weathering and age).
- Missing rune or symbol accents (mystical iconography is a key detail).
- Harsh white text on dark backgrounds (use parchment white or candle warm, never pure white).

## Accessibility Considerations

- Tower dark backgrounds with parchment or candle warm text provide strong contrast (WCAG AA or AAA).
- Focus states: `focus:ring-2 focus:ring-[#40c0a0]/50` (rune glow teal, clearly visible against dark backgrounds).
- Decorative SVGs (magic circles, runes, spiral patterns) must be `aria-hidden="true"`.
- Crystal orb and candle animations must respect `prefers-reduced-motion` — disable `animate-pulse` and flicker effects.
- Arcane glow shadows must not reduce text readability — verify contrast on all text within glowing containers.
- Rune symbol fonts must include accessible labels or `aria-label` for screen readers.
- Tower window arch clip-paths must not clip interactive elements or create overlapping hit areas.
- The dark atmosphere may cause eye strain in well-lit environments — ensure text is bright enough for extended reading sessions.
- Touch targets must remain adequate (minimum 44x44px) despite ornamental stone borders.
- Magic circle dividers must be clearly decorative and not interfere with content flow for screen readers.
- Parchment page text must maintain sufficient contrast (the `#1a1a2a` on `#f0e8d0` combination passes WCAG AAA).
- Color is never the sole indicator of state — pair glow color changes with icons or text changes for state communication.
