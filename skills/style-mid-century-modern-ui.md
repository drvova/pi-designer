---
name: mid-century-modern-ui
description: Build mid-century modern UI components (Eames-era design, teak wood tones, mustard yellow/avocado green/burnt orange palette, kidney-bean organic shapes, atomic starburst clocks, geometric boomerang patterns, tapered legs aesthetic) with warm retro 1950s-60s suburban optimism, organic geometry, and the confident clean lines of American mid-century design. Trigger this skill when the user asks for mid-century modern UI, Eames-era design, 1950s-60s retro interfaces, atomic age design, kidney-bean shapes, starburst clock motifs, boomerang patterns, tapered furniture aesthetic, Danishes modern, or warm suburban retro design.
---

# Mid-Century Modern UI

Use this skill to design and implement warm, optimistic interfaces inspired by American mid-century modern design (1940s-1960s): teak and walnut wood-tone surfaces, kidney-bean organic shapes, atomic starburst clock decorations, mustard yellow and avocado green palettes, boomerang pattern dividers, hairpin-leg minimalism, and the confident clean lines of Eames-era suburban optimism.

## Non-Negotiable Foundations

- Mid-century modern is defined by ORGANIC GEOMETRY. Cards and containers use asymmetric, kidney-bean-like border-radius values — never perfectly round, never sharp rectangles. The shape language is confident, curvilinear, and deliberately asymmetric.
- The palette is warm retro: mustard yellow, avocado green, burnt orange, and turquoise on teak/walnut wood-tone backgrounds. These are saturated but earthy — never neon, never pastel, never muted grays.
- Wood-tone surfaces are foundational. Teak (`#8a5a2a`) and walnut (`#5a3a1a`) gradients represent the material honesty of the era. Surfaces should feel like polished mid-century furniture.
- Atomic starburst motifs are the signature decorative element — radiating line patterns evoking Sputnik-era clocks, lamp designs, and space-age optimism. These appear as SVG accents and section dividers.
- Boomerang and kidney-bean shapes are the structural vocabulary. Boomerang patterns (asymmetric curved parallelograms) appear as dividers; kidney-bean shapes (one side more curved than the other) form card silhouettes.
- The aesthetic is optimistic, warm, and geometrically confident — suburban America in 1958, not industrial minimalism.
- Hairpin-leg minimalism translates to UI as slim, tapered structural elements (thin dividers, fine strokes) supporting heavier visual masses above.

## Core Material Recipes

### 1) Kidney-Bean Card

The foundational mid-century shape: asymmetric organic card with unequal corner radius.

```html
<div class="bg-[#f5ead0] border-2 border-[#3a2a1a]
            rounded-[80px_30px_80px_30px]
            shadow-[0_6px_20px_rgba(58,42,26,0.15)] p-8">
  <!-- content -->
</div>
```

Deeper kidney variant (more pronounced asymmetry):

```html
<div class="bg-gradient-to-br from-[#d4a017] to-[#c45a1a] text-[#f5ead0]
            rounded-[100px_20px_100px_20px] p-8
            shadow-[0_8px_24px_rgba(196,90,26,0.25)]">
  <!-- content -->
</div>
```

### 2) Teak Wood Surface

Warm wood-tone gradient background evoking polished mid-century furniture.

```html
<div class="bg-gradient-to-b from-[#8a5a2a] via-[#7a4a22] to-[#6a3a18] relative">
  <!-- Wood grain overlay -->
  <div class="absolute inset-0 opacity-[0.06] pointer-events-none
              bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#3a1a00_8px,#3a1a00_9px)]"></div>
  <!-- content with light text -->
</div>
```

Walnut variant (darker, richer):

```html
<div class="bg-gradient-to-b from-[#5a3a1a] to-[#3a2210] relative">
  <div class="absolute inset-0 opacity-[0.08] pointer-events-none
              bg-[repeating-linear-gradient(87deg,transparent,transparent_12px,#1a0a00_12px,#1a0a00_13px)]"></div>
</div>
```

### 3) Atomic Starburst Clock

The signature decorative motif: radiating lines from a central circle, evoking George Nelson clock designs.

```html
<svg viewBox="0 0 200 200" class="w-32 h-32">
  <g stroke="#c45a1a" stroke-width="2" stroke-linecap="round">
    <!-- 12 radiating lines of varying length -->
    <line x1="100" y1="20" x2="100" y2="50"/>
    <line x1="100" y1="150" x2="100" y2="180"/>
    <line x1="20" y1="100" x2="50" y2="100"/>
    <line x1="150" y1="100" x2="180" y2="100"/>
    <line x1="43" y1="43" x2="64" y2="64"/>
    <line x1="136" y1="136" x2="157" y2="157"/>
    <line x1="157" y1="43" x2="136" y2="64"/>
    <line x1="64" y1="136" x2="43" y2="157"/>
  </g>
  <g stroke="#d4a017" stroke-width="3" stroke-linecap="round">
    <!-- Longer accent rays between the main lines -->
    <line x1="70" y1="30" x2="82" y2="58"/>
    <line x1="130" y1="30" x2="118" y2="58"/>
    <line x1="70" y1="170" x2="82" y2="142"/>
    <line x1="130" y1="170" x2="118" y2="142"/>
    <line x1="30" y1="70" x2="58" y2="82"/>
    <line x1="30" y1="130" x2="58" y2="118"/>
    <line x1="170" y1="70" x2="142" y2="82"/>
    <line x1="170" y1="130" x2="142" y2="118"/>
  </g>
  <!-- Center dot -->
  <circle cx="100" cy="100" r="8" fill="#c45a1a"/>
  <circle cx="100" cy="100" r="4" fill="#d4a017"/>
</svg>
```

### 4) Boomerang Pattern Divider

Asymmetric curved divider evoking the iconic boomerang furniture silhouette.

```html
<svg viewBox="0 0 400 40" class="w-full h-10">
  <path d="M0,30 Q100,5 200,20 T400,15"
        fill="none" stroke="#5a7a2a" stroke-width="3" stroke-linecap="round"/>
  <path d="M0,35 Q100,10 200,25 T400,20"
        fill="none" stroke="#c45a1a" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <!-- Accent dots along the curve -->
  <circle cx="100" cy="11" r="3" fill="#d4a017"/>
  <circle cx="300" cy="20" r="3" fill="#3a8a8a"/>
</svg>
```

### 5) Tapered Leg Frame Element

Slim tapered structural supports evoking hairpin furniture legs — used as card feet or section supports.

```html
<div class="relative pt-4">
  <!-- Card body -->
  <div class="bg-[#5a7a2a] rounded-[60px_20px_60px_20px] p-6 mb-0">
    <!-- content -->
  </div>
  <!-- Tapered legs -->
  <div class="flex justify-between px-12 -mt-1">
    <div class="w-1 h-6 bg-[#3a2a1a] [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"></div>
    <div class="w-1 h-6 bg-[#3a2a1a] [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"></div>
  </div>
</div>
```

### 6) Mid-Century Button

Bold, confident button with organic shape and warm retro color.

- Primary (mustard): `bg-[#d4a017] text-[#3a2a1a] font-bold uppercase tracking-wide px-8 py-3 rounded-full border-2 border-[#3a2a1a] shadow-[0_3px_0px_0px_#3a2a1a] hover:shadow-[0_1px_0px_0px_#3a2a1a] hover:translate-y-[2px] transition-all duration-150`.
- Avocado: `bg-[#5a7a2a] text-[#f5ead0] font-bold uppercase tracking-wide px-8 py-3 rounded-full border-2 border-[#3a2a1a] shadow-[0_3px_0px_0px_#3a2a1a] hover:shadow-[0_1px_0px_0px_#3a2a1a] hover:translate-y-[2px] transition-all duration-150`.
- Burnt orange: `bg-[#c45a1a] text-[#f5ead0] font-bold uppercase tracking-wide px-8 py-3 rounded-[40px_12px_40px_12px] border-2 border-[#3a2a1a]`.

### 7) Geometric Boomerang Accent Shape

Decorative boomerang/parallelogram shape for backgrounds and section accents.

```html
<svg viewBox="0 0 120 60" class="w-24 h-12 opacity-30">
  <path d="M10,50 Q30,10 60,20 Q90,30 110,10 Q80,40 50,35 Q30,35 10,50 Z"
        fill="#d4a017"/>
</svg>
```

### 8) Atomic Dot Grid Pattern

Period-appropriate background pattern of evenly spaced dots in retro colors.

```html
<div class="bg-[#f5ead0] relative">
  <div class="absolute inset-0 opacity-20 pointer-events-none
              bg-[radial-gradient(#c45a1a_2px,transparent_2px)] bg-[size:32px_32px]"></div>
  <!-- content -->
</div>
```

## Color Palette System

### Mid-Century Modern Palette

| Color | Hex | Role |
|---|---|---|
| Mustard Yellow | `#d4a017` | Primary accent, energy, optimism |
| Avocado Green | `#5a7a2a` | Nature, secondary accent |
| Burnt Orange | `#c45a1a` | Warmth, tertiary accent |
| Turquoise | `#3a8a8a` | Cool counterpoint, atomic age |
| Teak Wood | `#8a5a2a` | Primary surface, furniture tone |
| Walnut | `#5a3a1a` | Dark surface, text, structure |
| Deep Walnut | `#3a2210` | Darkest accents, borders |
| Cream | `#f5ead0` | Light background, base canvas |
| Warm White | `#faf5e8` | Lightest surface |
| Soft Black | `#2a1a0a` | Text, outlines |

Rules: Mustard yellow, avocado green, and burnt orange are the three hero accents — use at least two per composition. Teak and walnut are structural surfaces (card backgrounds, dividers). Turquoise is the cool counterpoint to the warm palette. Cream (`#f5ead0`) is the default light background, never pure white. The palette should feel like a 1958 suburban living room: warm, optimistic, and confident.

## Typography Recommendations

Mid-century modern typography is clean, geometric, and confident:

- **Display headings:** Poppins, Futura, or DM Sans (geometric sans-serif — the era pioneered this type style). `font-bold` to `font-black` for confident headings.
- **Accent/label:** A condensed sans-serif like Oswald or Bebas Neue for uppercase labels — evokes period signage and advertising.
- **Body:** DM Sans, Work Sans, or Poppins at `font-normal` to `font-medium` (clean, readable, geometric).
- **Labels:** `font-bold uppercase tracking-[0.15em] text-sm` — confident and structured.
- Avoid serif fonts for primary text. Mid-century modern is sans-serif territory (it rejected Victorian ornament).
- Avoid overly decorative or script fonts. The aesthetic is clean and geometric.
- Consider mixing weights (bold heading + regular body) within the same geometric family for visual hierarchy.

## Component Architecture Pattern

1. Cream (`#f5ead0`) or teak wood gradient background as the canvas.
2. Optional atomic dot grid or boomerang pattern overlay at low opacity.
3. Kidney-bean shaped cards with asymmetric border-radius (`rounded-[80px_30px_80px_30px]`).
4. Warm retro accent colors on interactive elements (mustard, avocado, burnt orange).
5. Atomic starburst SVG decorations as section accents or card backgrounds.
6. Boomerang pattern dividers between content sections.
7. Tapered leg structural elements on elevated card components.
8. Bold geometric sans-serif typography throughout.
9. Wood-tone surfaces for primary content areas, cream for secondary.

## Interaction Rules

- Default state: warm, confident, organically shaped.
- Hover: button presses down with a satisfying mechanical feel.
  - `hover:shadow-[0_1px_0px_0px_#3a2a1a] hover:translate-y-[2px] transition-all duration-150` (stamped press effect).
- Cards: `hover:shadow-[0_10px_30px_rgba(58,42,26,0.2)] hover:-translate-y-1 transition-all duration-300` (lift like a drawer sliding open).
- Active: `active:shadow-none active:translate-y-[3px]` (fully pressed).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#3a8a8a] focus:ring-offset-2 focus:ring-offset-[#f5ead0]` (turquoise ring — cool accent on warm base).
- Transitions: `transition-all duration-150` to `duration-300` (snappy but smooth — confident, not sluggish).
- No slow drifting animations. Mid-century is direct and purposeful.

## Reusable Tailwind Tokens

- Cream canvas: `bg-[#f5ead0]`
- Kidney card: `rounded-[80px_30px_80px_30px] border-2 border-[#3a2a1a] shadow-[0_6px_20px_rgba(58,42,26,0.15)]`
- Teak surface: `bg-gradient-to-b from-[#8a5a2a] via-[#7a4a22] to-[#6a3a18]`
- Walnut surface: `bg-gradient-to-b from-[#5a3a1a] to-[#3a2210]`
- Mustard button: `bg-[#d4a017] text-[#3a2a1a] font-bold uppercase tracking-wide rounded-full border-2 border-[#3a2a1a] shadow-[0_3px_0px_0px_#3a2a1a]`
- Avocado button: `bg-[#5a7a2a] text-[#f5ead0] font-bold uppercase tracking-wide rounded-full border-2 border-[#3a2a1a] shadow-[0_3px_0px_0px_#3a2a1a]`
- Atomic dot grid: `bg-[radial-gradient(#c45a1a_2px,transparent_2px)] bg-[size:32px_32px]`
- Display heading: `font-sans text-5xl font-black tracking-tight text-[#3a2a1a]`
- Boomerang divider: SVG curved path with `stroke="#5a7a2a" stroke-width="3"`
- Starburst accent: SVG radiating lines from center circle
- Deep card shadow: `shadow-[0_6px_20px_rgba(58,42,26,0.15)]`
- Press shadow: `shadow-[0_3px_0px_0px_#3a2a1a]`

## Quality Checklist (must pass)

- At least one kidney-bean shaped card (asymmetric border-radius like `rounded-[80px_30px_80px_30px]`).
- Color palette includes mustard yellow, avocado green, and/or burnt orange.
- Teak or walnut wood-tone surfaces present (gradient backgrounds with grain overlay).
- At least one atomic starburst motif (SVG radiating lines from center).
- Boomerang or organic curved dividers between sections.
- Cream (`#f5ead0`) backgrounds, never pure white.
- Typography is geometric sans-serif (Poppins, Futura, DM Sans — never serif for primary text).
- Borders are warm dark brown (`#3a2a1a`), not black.
- Buttons have a mechanical press effect (offset shadow that compresses on hover).
- The aesthetic reads as warm 1950s-60s suburban optimism, not cold minimalism.

## Anti-Patterns

- Perfectly round or perfectly rectangular cards (mid-century demands asymmetric organic geometry).
- Pure white backgrounds (use warm cream `#f5ead0`).
- Pure black borders or text (use warm dark brown `#3a2a1a` / `#2a1a0a`).
- Neon or pastel colors (the palette is saturated but earthy retro).
- Muted grays or cold minimalism (mid-century is warm and optimistic).
- Serif typography for primary text (the era pioneered geometric sans-serif).
- Missing wood-tone surfaces (teak/walnut is foundational material honesty).
- Missing atomic starburst motifs (this is THE signature decorative element).
- Missing the boomerang/organic divider (curvilinear structure is essential).
- Overly complex or ornate decoration (mid-century is clean and confident, not busy).
- Fast aggressive animations or slow drifting motion (motion is snappy and purposeful).
- Monochromatic compositions (at least 2-3 warm retro accents per view).

## Accessibility Considerations

- Mustard yellow (`#d4a017`) text on cream needs contrast verification — use dark brown text (`#3a2a1a`) on light backgrounds for body text.
- Burnt orange (`#c45a1a`) and avocado green (`#5a7a2a`) on cream provide good contrast for headings.
- Light text (`#f5ead0`) on teak/walnut wood surfaces provides strong contrast.
- Focus states must be visible: `focus:ring-2 focus:ring-[#3a8a8a]` (turquoise ring stands out on warm backgrounds).
- Decorative SVG elements (starbursts, boomerangs, dot grids) must be `aria-hidden="true"` and `pointer-events-none`.
- Button press animations (translate-y) must not prevent touch interaction or cause layout shift issues.
- Wood grain overlay patterns must not reduce text contrast below WCAG AA.
- Touch targets must meet minimum 44x44px despite organic border-radius styling.
- Color should never be the sole differentiator — burnt orange and avocado green can be confused by colorblind users; pair with text labels and shapes.
- Animations should respect `prefers-reduced-motion` (reduce press/lift effects to instant transitions).
