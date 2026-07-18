---
name: celtic-ui
description: Build Celtic UI components (interlaced knotwork patterns, spirals, high crosses, illuminated initials, bronze and green palette, medieval manuscript ornamentation) with woven borders, endless knots, and the intricate geometric artistry of medieval Celtic and Insular design. Trigger this skill when the user asks for Celtic design, knotwork UI, interlace patterns, medieval Irish aesthetic, Book of Kells style, or interlaced geometric interfaces.
---

# Celtic UI

Use this skill to design and implement intricate, ornamental interfaces inspired by medieval Celtic and Insular art: interlaced knotwork patterns, spiral motifs, high cross shapes, illuminated initials, and the endless woven geometry of Irish, Scottish, and Welsh artistic tradition.

## Non-Negotiable Foundations

- Celtic design is defined by INTERLACED KNOTWORK: continuous woven patterns where strands cross over and under each other in endless, interlaced designs.
- Spirals and triskele (triple spiral) motifs are essential secondary elements.
- The Book of Kells and illuminated manuscripts provide the ornamental vocabulary: decorated initials, carpet pages, and intricate border frames.
- Colors draw from Celtic heritage: deep forest green, bronze/gold, oxblood red, navy, and aged parchment.
- Borders and frames are heavily ornamented — they are woven knotwork bands, not simple lines.
- The aesthetic is intricate, patient, and meditative — every element is crafted with geometric precision.

## Core Material Recipes

### 1) Celtic Knotwork Border

The signature element: a continuous woven border pattern.

SVG approach for authentic knotwork:
```html
<svg viewBox="0 0 200 40" class="w-full h-10">
  <g fill="none" stroke="#5a7a3a" stroke-width="1.5">
    <!-- Interlaced strand 1 (over-under-over) -->
    <path d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20"/>
    <!-- Interlaced strand 2 (under-over-under) -->
    <path d="M0,20 Q25,35 50,20 T100,20 T150,20 T200,20"/>
    <!-- Break points showing over/under crossings -->
    <rect x="48" y="16" width="4" height="8" fill="#f5ead0"/>
    <rect x="98" y="16" width="4" height="8" fill="#f5ead0"/>
    <rect x="148" y="16" width="4" height="8" fill="#f5ead0"/>
  </g>
</svg>
```

### 2) Aged Parchment Surface

The base canvas for illuminated manuscripts.

- `bg-[#f5ead0]` (warm aged parchment).
- Texture: subtle SVG noise at `opacity-[0.04]` (aged paper fibers).
- Optional foxing (age spots): `bg-[radial-gradient(ellipse_at_20%_30%,rgba(180,140,80,0.06)_0%,transparent_30%)]`.

### 3) Illuminated Initial

Oversized decorated first letter (like Book of Kells).

```html
<div class="relative inline-block">
  <span class="font-serif text-7xl font-bold text-[#8a1a1a] relative z-10">I</span>
  <!-- Decorative knotwork box behind the letter -->
  <svg class="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 60 80">
    <rect x="5" y="5" width="50" height="70" fill="none" stroke="#5a7a3a" stroke-width="1"/>
    <rect x="10" y="10" width="40" height="60" fill="none" stroke="#5a7a3a" stroke-width="0.5"/>
    <!-- Celtic knot decoration in corners -->
  </svg>
</div>
```

### 4) High Cross Shape

Celtic high cross silhouette as a decorative element.

```html
<svg viewBox="0 0 40 60" class="w-8 h-12 text-[#8a7a5a] opacity-40">
  <!-- Cross outline -->
  <path fill="currentColor" d="M15,0 L25,0 L25,15 L35,15 L35,25 L25,25 L25,60 L15,60 L15,25 L5,25 L5,15 L15,15 Z"/>
  <!-- Circle (ringed cross) -->
  <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" stroke-width="1"/>
</svg>
```

### 5) Triskele (Triple Spiral) Decoration

Ancient Celtic triple spiral motif.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 text-[#5a7a3a] opacity-50">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M30,10 Q15,25 30,40 Q45,25 30,10"/>
    <path d="M15,30 Q30,15 45,30 Q30,45 15,30" opacity="0.6"/>
    <path d="M30,50 Q15,35 30,20 Q45,35 30,50" opacity="0.4"/>
  </g>
</svg>
```

### 6) Celtic Button

Ornate button with knotwork border styling.

- `bg-[#2a4a1a] text-[#f5ead0] font-serif font-medium px-8 py-3 border-2 border-[#c4a043] shadow-[0_2px_8px_rgba(90,122,58,0.2)] hover:shadow-[0_4px_12px_rgba(90,122,58,0.3)] transition-all`.

### 7) Interlaced Panel Border

Panel with a woven knotwork border frame.

- Outer border: `border-2 border-[#5a7a3a]`.
- Inner border: `outline outline-1 outline-[#c4a043] outline-offset-2`.
- Corner knotwork: small SVG knotwork ornaments at each corner of the panel.

## Color Palette System

### Core Celtic Palette

| Color | Hex | Role |
|---|---|---|
| Forest Green | `#2a4a1a` | Primary accent, knotwork |
| Sage | `#5a7a3a` | Secondary green, line work |
| Gold/Bronze | `#c4a043` | Metal accents, borders |
| Oxblood Red | `#8a1a1a` | Illuminated initials, emphasis |
| Navy | `#1a1a3a` | Deep accent |
| Parchment | `#f5ead0` | Background |
| Warm Brown | `#5a3a1a` | Text |
| Stone Gray | `#8a7a5a` | Neutral accents |

Rules: Forest green and bronze/gold dominate. Oxblood red is reserved for illuminated initials and emphasis. Parchment is always the base. The palette should feel like a medieval Irish monastery.

## Typography Recommendations

Celtic typography blends medieval manuscript style with readability:

- **Display headings:** Cinzel, UnifrakturMaguntia, or IM Fell English (medieval display).
- **Illuminated initials:** Same as display but oversized with decorative knotwork surround.
- **Body:** EB Garamond, Lora, or Crimson Text (readable serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide` (like a manuscript colophon).

## Component Architecture Pattern

1. Aged parchment background (warm, textured).
2. Ornamental knotwork borders on major containers.
3. Illuminated initials on headings/article openings.
4. Triskele and high cross SVG decorations.
5. Celtic buttons with green/gold styling.
6. Interlaced panel borders (double borders with corner knots).
7. Warm serif typography with medieval character.
8. Spiral and knotwork divider elements.

## Interaction Rules

- Default state: ornate, intricate, meditative.
- Hover: gold borders glow, knotwork brightens.
  - `hover:shadow-[0_4px_12px_rgba(90,122,58,0.3)] hover:border-[#c4a043] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043]/40 focus:ring-offset-2 focus:ring-offset-[#f5ead0]`.
- Transitions: `transition-all duration-300` (patient, meditative, crafted).

## Reusable Tailwind Tokens

- Parchment: `bg-[#f5ead0]`.
- Forest panel: `bg-[#2a4a1a] text-[#f5ead0] border-2 border-[#c4a043]`.
- Knotwork border: SVG interlaced paths in `#5a7a3a`.
- Gold accent: `text-[#c4a043]` or `border-[#c4a043]`.
- Celtic button: `bg-[#2a4a1a] text-[#f5ead0] font-serif border-2 border-[#c4a043]`.
- Interlaced frame: `border-2 border-[#5a7a3a] outline outline-1 outline-[#c4a043] outline-offset-2`.
- Illuminated initial: `font-serif text-7xl font-bold text-[#8a1a1a]` with SVG knotwork surround.

## Quality Checklist (must pass)

- At least one Celtic knotwork (interlaced) pattern present.
- Aged parchment background (`#f5ead0`, warm and textured).
- At least one illuminated initial (decorated oversized first letter).
- Color palette includes forest green and gold/bronze.
- At least one triskele or high cross decorative element.
- Interlaced double borders on panels.
- Typography uses medieval/classical serif fonts.
- Warm brown text on parchment provides good scholarly contrast.
- The aesthetic reads as a medieval Celtic manuscript or high cross.
- Knotwork dividers or spiral motifs between sections.

## Anti-Patterns

- Modern flat design (Celtic is ornate and interlaced).
- Missing knotwork patterns (interlaced geometry is the core element).
- Bright modern colors (palette is earthy green, bronze, oxblood).
- Sans-serif typography (Celtic requires medieval serif).
- Pure white backgrounds (use aged parchment `#f5ead0`).
- Missing illuminated initials (these are a Book of Kells signature).
- Simple unadorned borders (use woven knotwork borders).
- Minimalist restraint (Celtic is intricate and patient).
- Missing spiral/triskele motifs (ancient Celtic symbols are essential).
- Modern button styling (use ornate green/gold Celtic buttons).

## Accessibility Considerations

- Parchment background with dark brown text provides excellent contrast (WCAG AAA).
- Ornamental knotwork must be `aria-hidden="true"` when decorative.
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/40` (gold ring on parchment).
- Illuminated initials must use CSS `::first-letter` or have proper semantic markup for screen readers.
- High cross and triskele SVGs must have `aria-hidden="true"`.
- Complex interlaced borders must not confuse the visual hierarchy of interactive elements.
- The dense ornamental style should not overwhelm content readability.
- Touch targets must be adequate despite ornamental border padding.
