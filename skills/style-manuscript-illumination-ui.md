---
name: manuscript-illumination-ui
description: Build manuscript illumination UI components (medieval gold-leaf decorated initials, floral border marginalia, vellum parchment, tempera pigments, historiated initials, gilt halo backgrounds) with gilded drop caps, ornamental borders, and the sacred decorative art of medieval manuscript production. Trigger this skill when the user asks for manuscript illumination, illuminated initials, medieval gold leaf, historiated capitals, Book of Hours, or scriptorium interfaces.
---

# Manuscript Illumination UI

Use this skill to design and implement sacred, ornate interfaces inspired by medieval illuminated manuscripts: gold-leaf decorated initials, floral and vine border marginalia, historiated capitals, tempera-pigment colors on vellum, and the devotional artistry of the medieval scriptorium.

## Core Material Recipes

### 1) Illuminated Initial

The signature element: oversized gold-leaf decorated first letter.

```html
<div class="relative inline-block float-left mr-3">
  <!-- Gold-leaf box frame -->
  <div class="absolute -inset-2 border-[3px] border-[#c9a043] bg-[#c9a043]/10 rounded-sm"></div>
  <!-- Gold gradient letter -->
  <span class="relative font-serif text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#c9a043] to-[#8a6a1a]">I</span>
  <!-- Floral decoration in corners -->
  <span class="absolute -top-1 -right-1 text-[#8a1a1a] text-sm">✿</span>
  <span class="absolute -bottom-1 -left-1 text-[#1a3a5a] text-sm">✿</span>
</div>
```

### 2) Vellum Parchment Surface

The canvas: aged animal-skin parchment.

- `bg-[#f0ead0]` (warm vellum).
- Aging: `bg-[radial-gradient(ellipse_at_20%_30%,rgba(180,150,100,0.05)_0%,transparent_40%),radial-gradient(ellipse_at_80%_70%,rgba(150,120,80,0.04)_0%,transparent_30%)]`.
- Fiber: SVG noise at `opacity-[0.03]`.

### 3) Floral Border Marginalia

Decorative vine and flower border around content areas.

```html
<div class="relative">
  <svg class="absolute -left-4 top-0 w-12 h-full opacity-30" viewBox="0 0 40 400" preserveAspectRatio="none">
    <g fill="none" stroke="#3a6a2a" stroke-width="0.5">
      <path d="M20,0 Q10,50 20,100 Q30,150 15,200 Q25,250 20,300 Q10,350 20,400"/>
    </g>
    <g fill="#c41e1e" opacity="0.5">
      <circle cx="15" cy="50" r="3"/>
      <circle cx="25" cy="120" r="3"/>
      <circle cx="15" cy="200" r="3"/>
      <circle cx="25" cy="280" r="3"/>
      <circle cx="15" cy="350" r="3"/>
    </g>
    <g fill="#3a6a2a" opacity="0.4">
      <ellipse cx="12" cy="75" rx="3" ry="1.5" transform="rotate(-30 12 75)"/>
      <ellipse cx="28" cy="160" rx="3" ry="1.5" transform="rotate(30 28 160)"/>
    </g>
  </svg>
  <!-- Content -->
</div>
```

### 4) Gold Leaf Panel

Panel with applied gold-leaf decoration.

- `bg-[#f0ead0] border-[3px] border-[#c9a043] p-8 shadow-[0_2px_8px_rgba(90,60,20,0.1),inset_0_0_0_1px_rgba(201,160,67,0.2)]`.

### 5) Tempera Accent Panel

Colored tempera-pigment surface (ultramarine blue or vermillion red).

- Blue: `bg-[#1a2a5a] border-2 border-[#c9a043] p-6 text-[#f0ead0]`.
- Red: `bg-[#8a1a1a] border-2 border-[#c9a043] p-6 text-[#f0ead0]`.

### 6) Illuminated Button

Button styled as a decorated manuscript label.

- `bg-[#8a1a1a] text-[#f5d76e] font-serif font-medium px-8 py-3 border-2 border-[#c9a043] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:bg-[#7a1010] transition-colors rounded-sm`.

## Color Palette System

| Color | Hex | Pigment/Material |
|---|---|---|
| Gold Leaf | `#c9a043` | Applied gold leaf |
| Light Gold | `#f5d76e` | Gold highlight |
| Vellum | `#f0ead0` | Aged parchment |
| Ultramarine | `#1a2a5a` | Lapis lazuli blue |
| Vermillion | `#8a1a1a` | Cinnabar red |
| Malachite Green | `#3a6a2a` | Green earth |
| Sepia Ink | `#3a2a0a` | Oak gall ink |
| Ivory White | `#e8dcc0` | Lead white pigment |

Rules: Gold leaf and vellum dominate. Ultramarine blue, vermillion red, and malachite green are the tempera pigments. Everything should feel like a medieval scriptorium production.

## Typography Recommendations

- **Display:** EB Garamond, UnifrakturMaguntia (medieval manuscript script).
- **Body:** EB Garamond, Lora (readable medieval-era serif).
- **Labels:** `font-serif italic text-sm tracking-wide` (rubricated labels).

## Reusable Tailwind Tokens

- Illuminated initial: gold gradient text + gold box frame + floral corner accents.
- Vellum: `bg-[#f0ead0]` with aging overlays.
- Gold panel: `border-[3px] border-[#c9a043] shadow-[inset_0_0_0_1px_rgba(201,160,67,0.2)]`.
- Tempera blue: `bg-[#1a2a5a] border-2 border-[#c9a043] text-[#f0ead0]`.
- Floral border: SVG vine with flowers and leaves at `opacity-30`.

## Quality Checklist

- At least one illuminated initial (gold gradient + decorative box).
- Vellum parchment background (`#f0ead0`), not pure white.
- Floral/vine border marginalia on content areas.
- Gold-leaf border decoration on panels.
- Tempera-pigment accent panels (blue or red).
- Color palette is gold + vellum + ultramarine/vermillion/malachite.
- Typography is medieval manuscript serif.
- The aesthetic reads as medieval illuminated manuscript / scriptorium.
- Everything feels sacred, ornate, and devotional.
- Gold-leaf appears as decorative accents, not flat fills.

## Anti-Patterns

- Modern sans-serif typography (manuscript illumination needs medieval serif).
- Pure white backgrounds (use warm vellum `#f0ead0`).
- Missing illuminated initials (the gold drop cap is the signature element).
- Missing floral marginalia (vine/flower borders are characteristic).
- Bright synthetic colors (use medieval tempera pigments: lapis, cinnabar, malachite).
- Flat undecorated panels (every surface should have gold or floral decoration).
- Missing gold-leaf accents (gold is the primary decorative material).
- Digital clean styling (the aesthetic is hand-scribed and painted).
- Missing the gold box-frame around initials (the frame IS the illumination).
- Sharp modern corners (use `rounded-sm` — medieval boxes had slight rounding).

## Accessibility Considerations

- Vellum backgrounds with dark sepia text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#c9a043]/40` (gold ring on vellum).
- Illuminated initials should use CSS `::first-letter` for screen reader compatibility.
- Floral marginalia SVGs must be `aria-hidden="true"`.
- The medieval script may be difficult for some users — provide readable body text.
- Touch targets must be adequate despite ornamental border styling.
