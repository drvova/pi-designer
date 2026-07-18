---
name: anatomical-illustration-ui
description: Build anatomical illustration UI components (Leonardo da Vinci medical drawings, sepia parchment, precise line work, labeled body systems, vintage scientific accuracy, Renaissance natural philosophy) with fine ink linework, Latin labels, and the intellectual beauty of Renaissance medical art. Trigger this skill when the user asks for anatomical illustration, medical drawing, Da Vinci sketch, vintage scientific, Renaissance anatomy, or natural philosophy interfaces.
---

# Anatomical Illustration UI

Use this skill to design and implement interfaces inspired by Renaissance and vintage anatomical illustration: fine ink linework on aged parchment, labeled diagrams with Latin terminology, Da Vinci-style precision drawing, and the intellectual beauty of scientific observation rendered as art.

## Core Material Recipes

### 1) Aged Parchment Surface

The foundational canvas: sepia-toned old paper.

- `bg-[#e8dcc0]` (warm aged parchment).
- Aging: `bg-[radial-gradient(ellipse_at_20%_30%,rgba(160,120,60,0.06)_0%,transparent_40%),radial-gradient(ellipse_at_80%_70%,rgba(140,100,50,0.05)_0%,transparent_30%)]`.
- Fiber texture: SVG `feTurbulence` at `opacity-[0.04]`.

### 2) Ink Line Illustration Panel

Fine-line drawing area with labeled points.

- `bg-[#e8dcc0] border border-[#8a6a4a] p-8 rounded-none`.
- Illustration: SVG with thin `stroke="#3a2a0a" stroke-width="0.5"` (very fine ink lines).
- Label lines: thin lines connecting labeled numbers to anatomical points.
- Numbers: `font-serif text-[10px] text-[#3a2a0a]` with Latin labels in italic.

### 3) Latin Label

Scientific Latin terminology label.

- `font-serif italic text-xs text-[#5a3a1a]` showing terms like *femur*, *cranium*, *vertebrae*.
- Connected to illustration points by thin leader lines.

### 4) Da Vinci Sketch Card

Card styled as a Leonardo notebook page.

- `bg-[#e8dcc0] p-6 border border-[#8a6a4a] shadow-[0_2px_4px_rgba(80,50,20,0.1)] relative`.
- Mirror handwriting accent (Da Vinci signature): `font-serif italic text-[#5a3a1a]/30 transform scale-x-[-1]` (reversed text).

### 5) Anatomical Button

Scholarly ink-line button.

- `bg-[#e8dcc0] text-[#3a2a0a] font-serif font-medium px-8 py-3 border border-[#5a3a1a] rounded-none hover:bg-[#d4c8a0] transition-colors shadow-[0_2px_0_rgba(80,50,20,0.15)]`.

### 6) Measurement Scale Accent

Da Vinci-style proportional measurement marks.

- Vertical ruler: `w-6 border-l border-[#5a3a1a]` with tick marks: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_10px,#5a3a1a_10px,#5a3a1a_11px)]`.

### 7) Anatomical Drawing SVG

Simple fine-line heart or skull SVG.

```html
<svg viewBox="0 0 100 80" class="w-24 h-20">
  <g fill="none" stroke="#3a2a0a" stroke-width="0.5">
    <!-- Simplified heart outline -->
    <path d="M50,70 Q20,50 25,30 Q25,15 35,15 Q42,15 50,25 Q58,15 65,15 Q75,15 75,30 Q80,50 50,70"/>
    <!-- Aorta and vessels -->
    <path d="M50,25 Q48,15 40,10 M50,25 Q52,15 60,10"/>
    <!-- Cross-hatching for depth -->
    <path d="M30,35 L35,40 M40,30 L45,35 M55,30 L60,35" stroke-width="0.25"/>
    <!-- Label line -->
    <line x1="75" y1="30" x2="95" y2="20" stroke-width="0.3"/>
    <text x="96" y="18" font-size="5" fill="#3a2a0a" font-style="italic">aorta</text>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Parchment | `#e8dcc0` | Primary background |
| Aged Cream | `#f0e8d0` | Lighter surface |
| Sepia Ink | `#3a2a0a` | Primary text/drawing |
| Light Sepia | `#5a3a1a` | Secondary text, borders |
| Faded Ink | `#8a6a4a` | Labels, subtle elements |
| Aging Spot | `#a07840` | Foxing/age marks |

Rules: Sepia ink on aged parchment. The palette is monochromatic brown — from deep ink to faded sepia. No color — only the warm brown spectrum of old iron-gall ink on yellowed paper.

## Typography Recommendations

- **Display:** EB Garamond, Cormorant Italic (Renaissance humanist serif).
- **Body:** Lora, Garamond (classical readable serif).
- **Labels:** `font-serif italic text-xs text-[#5a3a1a]` (Latin scientific labels).
- **Mirror text:** `transform scale-x-[-1]` for Da Vinci signature accents.
- Typography should feel like a Renaissance manuscript.

## Reusable Tailwind Tokens

- Parchment bg: `bg-[#e8dcc0]` with aging radial gradients.
- Ink line: `stroke="#3a2a0a" stroke-width="0.5"` (fine scientific linework).
- Latin label: `font-serif italic text-xs text-[#5a3a1a]`.
- Anatomical card: `bg-[#e8dcc0] border border-[#8a6a4a] rounded-none`.
- Mirror text: `transform scale-x-[-1] font-serif italic text-[#5a3a1a]/30`.

## Quality Checklist

- Background is aged parchment (`#e8dcc0`), not pure white.
- At least one fine-line anatomical SVG illustration.
- Latin scientific labels in italic serif.
- Sepia monochromatic palette (browns only, no bright colors).
- Leader lines connecting labels to illustration points.
- Aging marks (foxing, spots) on parchment surfaces.
- Measurement scale or proportional marks present.
- Typography is Renaissance humanist serif.
- The aesthetic reads as Da Vinci notebook / vintage medical illustration.
- Everything feels scholarly, precise, and intellectually beautiful.

## Anti-Patterns

- Bright colors (the palette is sepia monochrome).
- Modern sans-serif typography (anatomical illustration needs classical serif).
- Thick bold lines (ink work is FINE and PRECISE — `stroke-width="0.5"`).
- Missing Latin labels (scientific terminology is essential).
- Pure white backgrounds (use aged parchment).
- Modern medical/clinical aesthetic (this is RENAISSANCE, not modern hospital).
- Missing leader lines (these connect labels to anatomy — essential).
- Missing the aging/patina on parchment (old paper shows age).
- Digital clean lines (the aesthetic is hand-drawn with ink).
- Missing anatomical SVG illustration (the drawing IS the content).

## Accessibility Considerations

- Parchment backgrounds with sepia ink text provide good contrast (verify WCAG AA — `#3a2a0a` on `#e8dcc0` passes).
- Focus states: `focus:ring-2 focus:ring-[#5a3a1a]/40` (sepia ring on parchment).
- Latin labels should have common-language alternatives for accessibility.
- Fine-line SVG illustrations need `alt` text or `aria-label` describing the anatomy.
- The sepia monochrome palette is naturally accessible for colorblind users.
- Touch targets must be adequate despite scholarly minimal styling.
- Aging textures must not reduce text contrast below WCAG AA.
