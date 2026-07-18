---
name: tibetan-buddhist-ui
description: Build Tibetan Buddhist UI components (prayer flag colors, mandala geometry, golden butter lamp glow, dorje vajra motifs, thangka framing, Himalayan spiritual depth) with blue-white-red/green/yellow prayer flag palette, concentric mandala patterns, and the sacred visual language of Himalayan Buddhism. Trigger this skill when the user asks for Tibetan Buddhist design, mandala UI, prayer flag aesthetic, Himalayan spiritual, thangka, or vajra interfaces.
---

# Tibetan Buddhist UI

Use this skill to design and implementation sacred, contemplative interfaces inspired by Tibetan Buddhist art: prayer flag color stripes, mandala concentric geometry, golden butter lamp warmth, dorje (vajra) motifs, thangka framing, and the vibrant spiritual visual language of the Himalayas.

## Core Material Recipes

### 1) Prayer Flag Stripe Background

The five colors of Tibetan prayer flags (blue, white, red, green, yellow).

- `bg-[repeating-linear-gradient(0deg,#2a6abf_0px,#2a6abf_40px,#ffffff_40px,#ffffff_80px,#c41e1e_80px,#c41e1e_120px,#2a8a3a_120px,#2a8a3a_160px,#f5cc3a_160px,#f5cc3a_200px)]`.

### 2) Mandala Concentric Pattern

Sacred geometric mandala SVG.

```html
<svg viewBox="0 0 200 200" class="w-40 h-40 opacity-30">
  <g fill="none" stroke="#c9a043" stroke-width="0.5">
    <circle cx="100" cy="100" r="90"/>
    <circle cx="100" cy="100" r="70"/>
    <circle cx="100" cy="100" r="50"/>
    <circle cx="100" cy="100" r="30"/>
    <circle cx="100" cy="100" r="10" fill="#c9a043"/>
    <!-- 8-petal lotus -->
    <g stroke-width="1">
      <path d="M100,30 Q120,60 100,90 Q80,60 100,30"/>
      <path d="M100,170 Q120,140 100,110 Q80,140 100,170"/>
      <path d="M30,100 Q60,80 90,100 Q60,120 30,100"/>
      <path d="M170,100 Q140,80 110,100 Q140,120 170,100"/>
      <path d="M50,50 Q80,70 90,90" transform="rotate(0 100 100)"/>
    </g>
  </g>
</svg>
```

### 3) Butter Lamp Glow Panel

Warm golden-lit dark surface (butter lamps in a monastery).

- `bg-gradient-to-br from-[#1a0a0a] to-[#0a0505] border border-[#c9a043]/30 p-8 shadow-[inset_0_0_30px_rgba(201,160,67,0.08),0_0_20px_rgba(201,160,67,0.06)]`.

### 4) Thangka Frame

Ornate brocade border frame (like a Tibetan scroll painting).

- Outer brocade: `border-8 border-[#8a1a1a]` with pattern: `bg-[repeating-linear-gradient(45deg,#8a1a1a,#8a1a1a_4px,#6a0a0a_4px,#6a0a0a_8px)]`.
- Inner gold border: `outline outline-2 outline-[#c9a043] outline-offset-2`.

### 5) Dorje (Vajra) Accent

Diamond/thunderbolt scepter SVG decoration.

```html
<svg viewBox="0 0 80 20" class="w-20 h-5 text-[#c9a043] opacity-40">
  <g fill="currentColor">
    <circle cx="10" cy="10" r="4"/>
    <path d="M14,10 L30,6 L30,14 Z"/>
    <rect x="30" y="7" width="20" height="6" rx="1"/>
    <path d="M66,10 L50,6 L50,14 Z"/>
    <circle cx="70" cy="10" r="4"/>
  </g>
</svg>
```

### 6) Dharma Button

Button with prayer-flag colors and spiritual styling.

- `bg-[#8a1a1a] text-[#f5cc3a] font-serif font-medium px-8 py-3 border-2 border-[#c9a043] hover:bg-[#6a0a0a] transition-colors`.

## Color Palette System

| Color | Hex | Element | Role |
|---|---|---|---|
| Sky Blue | `#2a6abf` | Space/ether | Prayer flag |
| White | `#ffffff` | Air/wind | Prayer flag |
| Fire Red | `#c41e1e` | Fire | Prayer flag, passion |
| Grass Green | `#2a8a3a` | Water | Prayer flag, nature |
| Butter Yellow | `#f5cc3a` | Earth | Prayer flag, gold |
| Monastery Red | `#8a1a1a` | Robes | Dark surfaces |
| Temple Gold | `#c9a043` | Enlightenment | Accents, borders |
| Vajra Bronze | `#8a6a3a` | Metal | Decorations |

Rules: The five prayer flag colors (blue, white, red, green, yellow) are the core palette. Gold and monastery-red provide dark-surface luxury. Colors are saturated and meaningful — each represents an element.

## Typography Recommendations

- **Display:** Cormorant, EB Garamond (elegant contemplative serif).
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Prayer flag stripes: multi-color repeating gradient.
- Butter lamp: `bg-gradient-to-br from-[#1a0a0a] to-[#0a0505] shadow-[inset_0_0_30px_rgba(201,160,67,0.08)]`.
- Thangka frame: brocade pattern border + gold outline.
- Mandala: SVG concentric circles + lotus petals in gold.
- Dharma button: `bg-[#8a1a1a] text-[#f5cc3a] border-2 border-[#c9a043]`.

## Quality Checklist

- Prayer flag five colors (blue, white, red, green, yellow) present somewhere.
- At least one mandala concentric SVG pattern.
- Butter lamp warm glow on dark surfaces.
- Thangka-style ornate brocade border frame.
- Dorje/vajra decorative accent.
- Color palette includes gold and monastery-red.
- Typography is warm contemplative serif.
- The aesthetic reads as Tibetan Buddhist / Himalayan spiritual.
- Everything feels sacred, vibrant, and meditative.
- Gold accents throughout (enlightenment symbolism).

## Anti-Patterns

- Dark somber mood without warmth (butter lamps add golden warmth).
- Missing the five prayer flag colors (these are the core palette).
- Missing mandala geometric patterns (concentric sacred geometry is essential).
- Modern minimalist restraint (Tibetan Buddhist art is vibrant and layered).
- Missing the thangka brocade frame (ornate borders are characteristic).
- Sans-serif typography (use warm contemplative serif).
- Cold clinical aesthetic (Tibetan Buddhism is warm and golden).
- Missing gold accents (gold represents enlightenment).
- Flat unpatterned surfaces (Himalayan art is layered and ornamental).
- Casual or playful elements (the aesthetic is sacred and reverent).
