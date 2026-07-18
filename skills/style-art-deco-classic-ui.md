---
name: art-deco-classic-ui
description: Build classic Art Deco UI components (1920s-30s geometric luxury, sunburst patterns, stepped ziggurat shapes, chevron motifs, gold-on-black elegance, jazz-age opulence) with geometric ornamentation, vertical emphasis, and the Gatsby-era celebration of modernity and wealth. Trigger this skill when the user asks for classic Art Deco, 1920s design, Gatsby aesthetic, jazz age, Great Gatsby UI, or geometric luxury interfaces.
---

# Classic Art Deco UI

Use this skill to design and implement opulent interfaces inspired by 1920s-30s Art Deco: sunburst patterns, stepped ziggurat shapes, chevron ornaments, gold-on-black luxury, vertical linear emphasis, and the jazz-age celebration of industrial modernity, wealth, and speed.

## Non-Negotiable Foundations

- Classic Art Deco celebrates MACHINE-AGE modernity through GEOMETRIC ornament: sunbursts, chevrons, ziggurats, and stepped forms — NOT the streamlined curves of Streamline Moderne or the modernized NeoDeco.
- Vertical emphasis dominates: shapes stretch upward, reflecting the skyscraper era.
- Gold on black (or gold on deep jewel tones) is the signature color pairing.
- Symmetry is absolute: compositions are perfectly balanced bilateral mirrors.
- Materials reference luxury: gold leaf, black lacquer, chrome, marble, and shagreen.
- Typography is high-contrast Didone serif with exaggerated width variation.

## Core Material Recipes

### 1) Sunburst Panel

The signature Art Deco decorative element: radiating lines from a central point.

```html
<div class="relative overflow-hidden bg-[#0a0a0a] p-8">
  <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <g stroke="#c9a84c" stroke-width="0.5" fill="none">
      <line x1="200" y1="400" x2="0" y2="0"/>
      <line x1="200" y1="400" x2="100" y2="0"/>
      <line x1="200" y1="400" x2="200" y2="0"/>
      <line x1="200" y1="400" x2="300" y2="0"/>
      <line x1="200" y1="400" x2="400" y2="0"/>
      <line x1="200" y1="400" x2="50" y2="100"/>
      <line x1="200" y1="400" x2="350" y2="100"/>
    </g>
  </svg>
  <!-- Content on top -->
</div>
```

### 2) Stepped Ziggurat Frame

Stepped rectangular frame (like a Deco skyscraper).

- Outer: `border-2 border-[#c9a84c] p-1`.
- Middle: `border-2 border-[#c9a84c] p-1`.
- Inner: `border-2 border-[#c9a84c] p-6 bg-[#0a0a0a]`.
- Creates the nested stepped frame effect.

Or with clip-path steps: `[clip-path:polygon(0_0,calc(100%-12px)_0,calc(100%-12px)_12px,100%_12px,100%_100%,12px_100%,12px_calc(100%-12px),0_calc(100%-12px))]`.

### 3) Chevron Ornament

V-shaped geometric decoration.

```html
<svg viewBox="0 0 200 20" class="w-full text-[#c9a84c] opacity-40">
  <g fill="currentColor">
    <path d="M0,0 L20,10 L0,20 L10,20 L30,10 L10,0 Z"/>
    <path d="M40,0 L60,10 L40,20 L50,20 L70,10 L50,0 Z" opacity="0.7"/>
    <path d="M80,0 L100,10 L80,20 L90,20 L110,10 L90,0 Z" opacity="0.5"/>
  </g>
</svg>
```

### 4) Gold on Black Panel

The signature Art Deco surface.

- `bg-[#0a0a0a] text-[#c9a84c] border-2 border-[#c9a84c] p-8 shadow-[0_0_20px_rgba(201,168,76,0.1)]`.

### 5) Deco Button

Geometric luxury button with stepped border.

- `bg-gradient-to-b from-[#c9a84c] to-[#8a6a1a] text-[#0a0a0a] font-serif font-bold uppercase tracking-[0.15em] px-8 py-3 border border-[#5a3a0a] [clip-path:polygon(4px_0,calc(100%-4px)_0,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0_calc(100%-4px),0_4px)] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(201,168,76,0.3)] transition-all`.

### 6) Fan / Peacock Tail Motif

Classic Deco fan decoration.

```html
<svg viewBox="0 0 100 60" class="w-24 h-14 text-[#c9a84c] opacity-30">
  <g fill="none" stroke="currentColor" stroke-width="0.5">
    <path d="M50,60 Q10,30 5,0"/>
    <path d="M50,60 Q25,30 20,0"/>
    <path d="M50,60 Q50,25 50,0"/>
    <path d="M50,60 Q75,30 80,0"/>
    <path d="M50,60 Q90,30 95,0"/>
  </g>
  <g fill="currentColor" opacity="0.3">
    <circle cx="5" cy="0" r="2"/>
    <circle cx="20" cy="0" r="2"/>
    <circle cx="50" cy="0" r="2"/>
    <circle cx="80" cy="0" r="2"/>
    <circle cx="95" cy="0" r="2"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Gold | `#c9a84c` | Primary accent, ornaments |
| Light Gold | `#f5d76e` | Highlights |
| Dark Gold | `#8a6a1a` | Shadows, depth |
| Black Lacquer | `#0a0a0a` | Primary dark surface |
| Emerald | `#0a3a2a` | Jewel accent |
| Ruby | `#5a0a0a` | Jewel accent |
| Sapphire | `#0a1a3a` | Jewel accent |
| Ivory | `#f5f0e6` | Light text on dark |

Rules: Gold on black dominates. Jewel tones (emerald, ruby, sapphire) appear as occasional rich backgrounds. The palette screams 1920s luxury — the Gatsby mansion.

## Typography Recommendations

- **Display:** Poiret One, Limelight, or Forum (geometric Deco display).
- **Alternative:** Playfair Display, Bodoni (high-contrast Didone serif).
- **Body:** Cormorant, Lora (elegant serif).
- **Labels:** `font-serif font-bold uppercase tracking-[0.2em] text-sm` (lettering from Deco signage).

## Reusable Tailwind Tokens

- Gold-on-black: `bg-[#0a0a0a] text-[#c9a84c] border-2 border-[#c9a84c]`.
- Stepped frame: nested `border-2 border-[#c9a84c]` or clip-path with steps.
- Deco button: `bg-gradient-to-b from-[#c9a84c] to-[#8a6a1a] [clip-path:polygon(4px_0,...)]`.
- Sunburst: SVG radiating lines from bottom center.
- Chevron: SVG V-shapes in gold.

## Quality Checklist

- At least one sunburst or fan motif present.
- Stepped/ziggurat shapes or borders on panels.
- Gold-on-black is the dominant surface treatment.
- Symmetrical bilateral composition.
- Chevron decorations present.
- Vertical emphasis in layout (tall elements reaching upward).
- Typography is high-contrast Deco serif (Poiret One, Limelight).
- The aesthetic reads as 1920s Art Deco / Gatsby / jazz-age luxury.
- Everything feels opulent, geometric, and celebratory.
- Jewel tones (emerald, ruby, sapphire) used for occasional rich panels.

## Anti-Patterns

- Streamlined curves (that is Streamline Moderne — Classic Deco is geometric).
- NeoDeco modern minimalism (this is the ORIGINAL 1920s version).
- Muted or casual palette (Deco is gold-on-black luxury).
- Missing geometric ornaments (sunbursts, chevrons, fans are essential).
- Asymmetrical composition (Deco is perfectly symmetrical).
- Sans-serif typography (Deco demands high-contrast Didone serif).
- Horizontal emphasis (Deco is VERTICAL — skyscraper age).
- Flat unornamented surfaces (every surface needs geometric decoration).
- Missing the stepped/ziggurat shape (this is the architectural signature).
- Casual or rustic elements (Deco is formal, luxurious, and polished).

## Accessibility Considerations

- Black backgrounds with gold text must verify WCAG AA (gold `#c9a84c` on black passes for large text).
- Gold gradient text treatments can reduce contrast — verify at all sizes.
- Focus states: `focus:ring-2 focus:ring-[#c9a84c]` (gold ring on black).
- Sunburst and chevron SVGs must be `aria-hidden="true"`.
- Clip-path stepped shapes must not cut off interactive areas.
- The high-contrast serif typography may be difficult for some users at small sizes.
- Touch targets must be adequate despite stepped border styling.
