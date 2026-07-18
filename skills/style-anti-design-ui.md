---
name: anti-design-ui
description: Build anti-design UI components (deliberate rule-breaking, mixed fonts, clashing colors, asymmetric layouts, unpolished aesthetics) that embrace friction, chaos, and human imperfection as a rebellion against algorithmic perfection. Trigger this skill when the user asks for anti-design, deliberately ugly UI, rule-breaking design, wabi-sabi web, or chaotic expressive interfaces.
---

# Anti-Design UI

Use this skill to design and implement deliberately unpolished, rule-breaking interfaces that reject algorithmic perfection and embrace visual friction, human imperfection, and creative chaos.

## Non-Negotiable Foundations

- Anti-design is NOT the same as bad design. It is a deliberate philosophical choice to reject template-driven, algorithmically optimized interfaces.
- Rules are broken ON PURPOSE: fonts clash, colors conflict, alignment is intentionally off, elements overlap awkwardly.
- The human hand should be visible: hand-drawn elements, cut-and-paste aesthetics, slightly blurry photos, and organic imperfection.
- Every "mistake" is intentional. Random ugliness without purpose is just bad design; anti-design uses friction to create personality.
- The aesthetic draws from zines, punk flyers, early internet weirdness, and the Brat album cover ethos.

## Core Material Recipes

### 1) Anti-Design Surface

No consistent surface treatment. Mix flat blocks of color with raw borders, overlapping elements, and visible box model.

- Raw block: `bg-[#cdff00] border-2 border-black p-4` (thick borders, bold color).
- Overlapping blocks: elements positioned to overlap slightly (`absolute` positioning with `-mt-2 -ml-2`).
- Paper texture: `bg-[#f5f5f0]` (warm off-white, like recycled paper or zine stock).

### 2) Anti-Design Typography

Typography is deliberately inconsistent. Mix fonts, sizes, and treatments within the same view.

- Headline: Arial Black or Impact at massive sizes: `font-[Arial_Black] text-7xl uppercase tracking-tighter`.
- Subhead: a completely different font, maybe handwritten or script: `font-serif italic text-2xl`.
- Body: switch to a third font: `font-mono text-sm`.
- Color on text: `text-[#ff0000]` on `bg-[#0000ff]` (maximum clash).
- Highlight: use `<mark>` or `bg-[#ffff00]` behind text for highlighter effect.

### 3) Clashing Color Combinations

Colors that "shouldn't" work together, used deliberately:

- `#cdff00` (acid green) + `#ff0066` (hot pink) + `#0000ff` (electric blue).
- `#ff5e00` (orange) + `#9d00ff` (purple) + `#000000` (black).
- `#a8ff60` (lime) + `#000000` (black) + `#ffffff` (white) — the Brat palette.

### 4) Asymmetric Layout

Layout breaks the grid on purpose:

- Left-aligned everything, but with deliberate offsets.
- Elements at slight rotations: `rotate-[-1deg]` or `rotate-[2deg]`.
- Overlapping cards and images.
- Whitespace distributed unevenly.

### 5) Hand-Drawn / Collage Elements

- Borders drawn as rough strokes (SVG paths with rough/uneven strokes).
- Photos with rough-cut edges or torn paper effect.
- Tape elements: small rotated rectangles at `bg-[#ffff00]/30` placed at corners.
- Stickers and stamps: rotated badges with bold borders.

### 6) Anti-Design Button

- Raw: `bg-black text-white font-bold text-xl uppercase px-6 py-3 border-4 border-black hover:bg-[#cdff00] hover:text-black hover:rotate-1 transition-all`
- Highlighter: `bg-[#ffff00] text-black font-bold underline decoration-2 px-4 py-2 hover:bg-[#cdff00]`
- Sticker: `bg-white border-2 border-black rounded-full px-4 py-2 rotate-[-2deg] font-bold shadow-[3px_3px_0_0_#000]`

## Color Palette System

Anti-design has no fixed palette. The point is to clash. However, these combinations are validated starting points:

### Brat Palette

- `#8ace00` (brat green), `#000000` (black), `#ffffff` (white).

### Punk Zine Palette

- `#ff0066` (hot pink), `#000000` (black), `#ffff00` (yellow), `#00ff00` (green).

### Acid Palette

- `#cdff00` (acid green), `#ff0066` (hot pink), `#0000ff` (electric blue), `#000000` (black).

### Internet Weird Palette

- `#ff5e00` (orange), `#9d00ff` (purple), `#00ffff` (cyan), `#000000` (black).

Rules: Choose 2-3 clashing colors. The clash IS the design. Do not harmonize.

## Component Architecture Pattern

1. Raw colored background or paper texture.
2. Overlapping, rotated content blocks.
3. Mixed typography (different fonts for headings, subheadings, body).
4. Clashing accent colors.
5. Hand-drawn or collage decorative elements (tape, stickers, stamps).
6. Intentional alignment offsets and asymmetry.

There is no fixed layer order. The composition is intentionally chaotic but curated.

## Interaction Rules

- Default state: raw, unpolished, slightly off.
- Hover state: unexpected — elements rotate, colors flip, scale shifts, or text underlines.
  - `hover:rotate-2 hover:scale-105 hover:bg-[#cdff00]`.
- Active state: `active:scale-95 active:rotate-[-1deg]`.
- Focus state: thick ugly ring: `focus:ring-4 focus:ring-[#ff0066] focus:ring-offset-0`.
- Transitions: `transition-all duration-150` or even `duration-100` (snappy, not smooth).
- Animations: jerky, unpredictable movements are welcome.

## Typography Recommendations

Anti-design typography deliberately mixes fonts:

- Impactful display: Arial Black, Impact, Helvetica Bold (large, uppercase).
- Handwritten accent: Caveat, Permanent Marker, or actual hand-drawn SVG text.
- Body: a different family entirely — maybe Courier New or Times New Roman (used "wrong").
- Mono: system mono for a "code" look mixed with other fonts.
- The key is CONTRAST between font families. Do not use one consistent typeface.

## Reusable Tailwind Tokens

- Raw block: `bg-[#cdff00] border-2 border-black p-4`
- Impact headline: `font-[Arial_Black] text-7xl uppercase tracking-tighter`
- Clashing text: `text-[#ff0066] bg-[#0000ff]`
- Highlight text: `bg-[#ffff00] text-black font-bold`
- Rotated element: `rotate-[-2deg]`
- Tape sticker: `absolute -top-2 -left-2 bg-[#ffff00]/30 rotate-[-12deg] w-16 h-8`
- Punk button: `bg-black text-[#cdff00] font-bold text-xl uppercase px-6 py-3 border-4 border-black hover:bg-[#cdff00] hover:text-black transition-all`

## Quality Checklist (must pass)

- Fonts are deliberately mixed (at least 2 different families visible).
- Colors clash intentionally (no harmonious palette).
- Layout is asymmetric or overlapping.
- Elements have slight rotations or offsets.
- Hover states are unexpected (rotate, flip color, scale).
- The aesthetic reads as punk zine, early internet, or deliberately unpolished.
- Every "mistake" is a choice, not an accident.
- The interface has personality and attitude, not template polish.

## Anti-Patterns

- Harmonious color palettes (anti-design REQUIRES clash).
- Consistent typography (mix fonts on purpose).
- Perfect alignment and grid (break the grid).
- Smooth, professional transitions (anti-design is jerky and unexpected).
- Too much polish (the rawness is the point).
- Random ugliness without intentionality (anti-design is curated chaos).
- Using anti-design for enterprise or healthcare (it is for creative, fashion, art, music brands).
- Applying it to data-dense or complex workflows (friction is a feature here, not a bug — it works for expressive content, not productivity tools).
- Imitating without understanding (anti-design is a philosophy, not a template).

## Accessibility Considerations

- Anti-design's deliberate friction can reduce usability. Use it for expressive marketing sites, not functional products.
- Clashing colors must still maintain text contrast (WCAG AA minimum for body text).
- Rotated elements must not prevent touch interaction (hit areas should remain accessible).
- Focus states must be visible despite the chaotic aesthetic (`focus:ring-4`).
- Do not use anti-design for forms, dashboards, or critical-path user flows.
- Provide alt text for collage and hand-drawn elements.
- Respect that some users find chaotic layouts disorienting; offer structured navigation paths.
