---
name: memphis-design-ui
description: Build Memphis Design UI components (80s postmodern playfulness, squiggles, confetti patterns, pastel + black keylines, bold geometric shapes, sticker chips) with vibrant color clashing, zigs and zags, and deliberately anti-minimalist energy. Trigger this skill when the user asks for Memphis design, 80s postmodern UI, Memphis Group aesthetic, playful geometric design, or pattern-heavy vibrant interfaces.
---

# Memphis Design UI

Use this skill to design and implement high-energy, playful interfaces inspired by the 1980s Memphis Group postmodern design movement: bold geometric shapes, vibrant color clashes, squiggle patterns, confetti, and deliberately anti-minimalist composition.

## Non-Negotiable Foundations

- Memphis Design rejects the minimalism and "good taste" of its era. It is playful, loud, and intentionally provocative.
- Geometric shapes are the building blocks: circles, triangles, zigzags, squiggles, and dots. These appear as decorative patterns and structural elements.
- Colors are bright, clashing, and high-contrast: hot pink, electric blue, mustard yellow, teal, and bold black.
- Patterns cover surfaces: stripes, dots, grids, squiggles, and confetti. Empty space is filled with pattern, not left blank.
- Black keylines and hard offset shadows (neobrutalist-style) frame elements.
- The aesthetic is FUN. It does not take itself seriously. Function follows joy.

## Core Material Recipes

### 1) Memphis Pattern Background

Layered patterns that fill the surface with postmodern energy.

- Dot grid: `bg-[radial-gradient(#00000015_2px,transparent_2px)] bg-[size:24px_24px]`.
- Stripe pattern: `bg-[repeating-linear-gradient(45deg,#ff006e,#ff006e_8px,#ffbe0b_8px,#ffbe0b_16px)]`.
- Squiggle overlay: SVG path patterns of wavy lines in contrasting colors.
- Confetti: scattered absolutely positioned SVG shapes (triangles, circles, zigzags) in random colors and rotations.

### 2) Memphis Card

Pastel card with black keyline, hard shadow, and patterned accents.

- Base: `bg-[#b8e0d2] border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6`.
- Corner sticker: `absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#ff006e] border-[3px] border-black rotate-12`.
- Pattern accent: a strip of zigzag or dots along one edge.

### 3) Memphis Button

Bold, playful button with geometric accent.

- Primary: `bg-[#ff006e] text-white font-black text-lg uppercase tracking-wide px-8 py-4 border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] transition-all`
- Geometric: `bg-[#ffbe0b] text-black font-black uppercase px-6 py-3 border-[3px] border-black rounded-none shadow-[4px_4px_0px_0px_#3a86ff]` (shadow in a DIFFERENT clashing color).

### 4) Memphis Divider / Shape Accent

Decorative geometric elements that break up content.

- Zigzag: SVG path or CSS `clip-path` zigzag in contrasting color.
- Dot row: `flex gap-2` with circles in alternating colors: `w-4 h-4 rounded-full bg-[#ff006e] border-2 border-black`.
- Triangle row: CSS triangles or SVG triangles pointing in alternating directions.
- Squiggle line: SVG path with bezier curves, `stroke="#000" stroke-width="3"`.

### 5) Memphis Badge / Sticker

Small decorative shapes attached to card corners.

- Star burst: SVG star shape in bright color with black outline.
- Circle badge: `w-10 h-10 rounded-full bg-[#3a86ff] border-[3px] border-black flex items-center justify-center font-black text-white rotate-[-8deg]`.
- Triangle tag: CSS triangle or clip-path triangle in bright pastel.

## Color Palette System

### Core Memphis Palette

| Color | Hex | Role |
|---|---|---|
| Hot Pink | `#ff006e` | Primary accent, energy |
| Electric Blue | `#3a86ff` | Secondary accent, contrast |
| Mustard Yellow | `#ffbe0b` | Highlight, warmth |
| Teal / Mint | `#06d6a0` or `#b8e0d2` | Surface, calm counterpoint |
| Lavender | `#8338ec` | Tertiary accent |
| Coral / Peach | `#fb5607` | Warm accent |
| Black | `#000000` | Keylines, borders, shadows |
| White | `#ffffff` | Base surface, contrast |

Rules: Use 3-5 colors per composition. Colors should CLASH — that is the Memphis way. Pastels (mint, peach, lavender) pair with bold primaries (pink, blue, yellow). Black keylines unify the composition.

### Pastel Surface Colors

For card backgrounds, use softer pastel tones:
- Mint: `#b8e0d2`, Peach: `#ffd6a5`, Lavender: `#cdb4db`, Sky: `#a0c4ff`, Lemon: `#fdffb6`.

## Pattern Library

Memphis design is defined by its patterns. These are essential:

### Squiggle Pattern

SVG pattern of repeating wavy lines:
```html
<svg width="100" height="20" viewBox="0 0 100 20">
  <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" fill="none" stroke="#000" stroke-width="3"/>
</svg>
```
Use as horizontal dividers or background texture.

### Dot Pattern

- CSS: `bg-[radial-gradient(#00000020_2px,transparent_2px)] bg-[size:20px_20px]`.
- Color variant: `bg-[radial-gradient(#ff006e30_3px,transparent_3px)] bg-[size:30px_30px]`.

### Zigzag Stripe

- `bg-[repeating-linear-gradient(45deg,#ffbe0b,#ffbe0b_10px,#000_10px,#000_12px,#3a86ff_12px,#3a86ff_22px,#000_22px,#000_24px)]`.

### Confetti Scatter

Absolutely positioned SVG shapes scattered across a surface:
- Triangles, circles, half-circles, and squiggles in various colors.
- Each at different rotations (`rotate-12`, `rotate-[-23deg]`, etc.).
- Placed behind content (`z-0`) so they are decorative, not structural.

## Typography Recommendations

Memphis typography is bold, playful, and slightly quirky:

- Display: **Space Grotesk**, **Archivo Black**, **Bricolage Grotesque**, or **Clash Display** (bold, heavy weights).
- Body: **DM Sans**, **Space Grotesk**, or **Poppins** at `font-medium` to `font-bold`.
- Labels: `font-black uppercase tracking-wide`.
- Quirky accents: mix in a condensed or extended font for contrast.
- Avoid thin/light weights. Memphis is heavy and confident.
- Avoid serif fonts (too formal for Memphis playfulness).

## Component Architecture Pattern

1. Patterned background (dots, stripes, or confetti).
2. Pastel content cards with black keylines and hard shadows.
3. Geometric decorative shapes (scattered SVGs, stickers).
4. Bold, clashing accent colors on interactive elements.
5. Squiggle/zigzag dividers between sections.
6. Badge/sticker accents on card corners.

The composition should feel like a postmodern art piece: structured but bursting with playful energy.

## Interaction Rules

- Default state: bold, patterned, playful.
- Hover state: amplify the energy — translate, rotate, or color-shift.
  - `hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000]` (stamp press).
  - `hover:rotate-3 hover:scale-105` (playful wiggle).
- Active state: `active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`.
- Focus state: `focus:ring-4 focus:ring-[#ff006e]`.
- Transitions: `transition-all duration-150` (snappy, energetic).

## Reusable Tailwind Tokens

- Memphis card: `bg-[#b8e0d2] border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6 relative`
- Primary button: `bg-[#ff006e] text-white font-black uppercase px-8 py-4 border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_#000000]`
- Dot pattern bg: `bg-[radial-gradient(#00000015_2px,transparent_2px)] bg-[size:24px_24px]`
- Stripe bg: `bg-[repeating-linear-gradient(45deg,#ff006e,#ff006e_8px,#ffbe0b_8px,#ffbe0b_16px)]`
- Corner sticker: `absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#ff006e] border-[3px] border-black rotate-12`
- Geometric button: `bg-[#ffbe0b] text-black font-black uppercase border-[3px] border-black shadow-[4px_4px_0px_0px_#3a86ff]`

## Quality Checklist (must pass)

- Geometric patterns (dots, stripes, squiggles, confetti) cover surfaces.
- Colors are bright, clashing, and playful.
- Black keylines (`border-[3px]`) frame all major elements.
- Hard offset shadows (zero blur) add stamped depth.
- Pastel card surfaces contrast with bold accent elements.
- Decorative shapes (circles, triangles, squiggles) are scattered as accents.
- Typography is bold and heavy (`font-black`).
- Corner badges/stickers add playful personality.
- The aesthetic reads as 1980s postmodern joy, not modern minimalism.
- Squiggle or zigzag dividers break up content sections.

## Anti-Patterns

- Minimalist or restrained layouts (Memphis is maximalist and playful).
- Muted or harmonious color palettes (Memphis requires clash).
- Soft or blurred shadows (use hard offset shadows only).
- Thin borders (borders are thick: `border-[3px]` minimum).
- Thin or light typography (Memphis is bold and heavy).
- Empty whitespace without pattern (fill space with pattern or decoration).
- Monochromatic compositions (Memphis uses 3-5 clashing colors).
- Serious or corporate tone (Memphis is fun, irreverent, and joyful).
- Missing decorative shapes (the geometry IS the design).
- Subtle, professional hover states (hover should be playful and energetic).

## Accessibility Considerations

- High contrast between bright colors and black keylines aids visual identification.
- Pattern backgrounds must not reduce text contrast — add solid background chips behind text if needed.
- Decorative shapes and confetti must be `aria-hidden="true"` and `pointer-events-none`.
- Focus states must be bold and visible: `focus:ring-4 focus:ring-[#ff006e]`.
- Playful hover rotations must not prevent touch interaction or screen reader access.
- Touch targets must meet minimum 44x44px despite decorative styling.
- Animated patterns must respect `prefers-reduced-motion`.
