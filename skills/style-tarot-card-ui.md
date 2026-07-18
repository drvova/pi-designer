---
name: tarot-card-ui
description: Build tarot card UI components (mystical divination cards, ornate Renaissance borders, esoteric symbolism, Major/Minor Arcana imagery, celestial motifs, deep jewel-tone palettes, gold foil star details) with arched card frames, numbered Roman numeral headers, and the occult beauty of the Rider-Waite-Smith tarot deck. Trigger this skill when the user asks for tarot card UI, mystical divination cards, Major/Minor Arcana design, Rider-Waite-Smith aesthetic, esoteric symbolism interfaces, celestial card layouts, gold foil star detailing, fortune-teller card design, or occult Renaissance ornamental interfaces.
---

# Tarot Card UI

Use this skill to design and implement mystical, ornate interfaces inspired by the Rider-Waite-Smith tarot deck: arched-top card frames, Roman numeral headers, gold foil celestial detailing on deep jewel-tone surfaces, esoteric symbolism (Eye of Providence, zodiac wheels, sun and moon motifs), and the occult beauty of Renaissance divination art.

## Non-Negotiable Foundations

- Tarot card UI is defined by the ARCHED-TOP card frame. Every primary card should have a pointed or rounded arch top using `clip-path` or asymmetric `border-radius`. Flat rectangular cards break the illusion immediately.
- The palette is deep jewel tones on dark grounds: midnight navy, imperial purple, oxblood burgundy, forest teal — illuminated by metallic gold foil accents. Never bright, never pastel, never muted earth tones.
- Every Major Arcana card carries a Roman numeral header (0 through XXI). These are structural, not decorative — they anchor the card hierarchy.
- Celestial and esoteric symbolism is mandatory: sun rays, crescent moons, five-pointed stars, the Eye of Providence, zodiac glyphs, tetragrammaton. These appear as SVG motifs integrated into borders and frames.
- Gold foil on dark jewel tone is the signature material contrast. Gold appears as thin ornamental lines, star details, border filigree, and numeral lettering — never as large flat fills.
- Ornate Renaissance-style borders with corner flourishes frame every card. Borders are never simple single lines; they carry scrollwork, dots, and celestial accents.
- The mood is mystical, ornate, and slightly forbidden — the interface should feel like it holds hidden knowledge, not like a dashboard.

## Core Material Recipes

### 1) Arched-Top Card Frame

The foundational tarot element: a card with a pointed or rounded arch top.

```html
<div class="relative w-64 bg-gradient-to-b from-[#1a1040] via-[#2a1450] to-[#1a1040]
            border-2 border-[#c9a043]
            [clip-path:polygon(15%_0%,85%_0%,85%_8%,50%_0%,15%_8%)]
            shadow-[0_8px_32px_rgba(10,5,40,0.6)]">
  <!-- Gold inner border line -->
  <div class="absolute inset-2 border border-[#c9a043]/40 [clip-path:inherit] pointer-events-none"></div>
  <!-- Roman numeral header -->
  <div class="text-center pt-6 pb-2 font-serif text-2xl text-[#d4a868] tracking-[0.3em]">XVII</div>
  <!-- Card content -->
  <div class="px-6 pb-6 text-center">
    <h3 class="font-serif text-xl text-[#d4a868] tracking-widest mb-3">THE STAR</h3>
  </div>
</div>
```

Rounded arch variant (gentler, for Minor Arcana):

```html
<div class="w-64 bg-[#1a1040] border-2 border-[#c9a043]
            rounded-t-[50%_30%] shadow-[0_8px_32px_rgba(10,5,40,0.6)]">
  <!-- content -->
</div>
```

### 2) Gold Foil Star Detail

Metallic gold star accent used in borders, headers, and decorative clusters.

```html
<svg viewBox="0 0 24 24" class="w-5 h-5 inline-block">
  <defs>
    <linearGradient id="goldFoil" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f5d76e"/>
      <stop offset="50%" stop-color="#c9a043"/>
      <stop offset="100%" stop-color="#8a6a1a"/>
    </linearGradient>
  </defs>
  <path d="M12,2 L14.5,9 L22,9.5 L16,14.5 L18,22 L12,18 L6,22 L8,14.5 L2,9.5 L9.5,9 Z"
        fill="url(#goldFoil)" stroke="#8a6a1a" stroke-width="0.3"/>
</svg>
```

### 3) Celestial Motif Cluster

Sun, moon, and star SVG decorations for card backgrounds and headers.

```html
<!-- Radiating sun -->
<svg viewBox="0 0 100 100" class="w-24 h-24 mx-auto opacity-80">
  <g stroke="#d4a868" stroke-width="1.5" fill="none">
    <circle cx="50" cy="50" r="12" fill="#d4a868" opacity="0.6"/>
    <g>
      <line x1="50" y1="20" x2="50" y2="30"/>
      <line x1="50" y1="70" x2="50" y2="80"/>
      <line x1="20" y1="50" x2="30" y2="50"/>
      <line x1="70" y1="50" x2="80" y2="50"/>
      <line x1="29" y1="29" x2="36" y2="36"/>
      <line x1="64" y1="64" x2="71" y2="71"/>
      <line x1="71" y1="29" x2="64" y2="36"/>
      <line x1="36" y1="64" x2="29" y2="71"/>
    </g>
  </g>
</svg>

<!-- Crescent moon -->
<svg viewBox="0 0 40 40" class="w-8 h-8 inline-block">
  <path d="M28,5 A18,18 0 1,0 28,35 A14,14 0 1,1 28,5 Z" fill="#d4a868" opacity="0.7"/>
</svg>
```

### 4) Ornate Renaissance Border

Decorative border with corner flourishes and gold filigree.

```html
<div class="relative p-8 bg-[#0d0828]">
  <!-- Corner flourishes (place in all four corners) -->
  <svg class="absolute top-0 left-0 w-8 h-8 text-[#c9a043]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1">
    <path d="M2,14 Q2,2 14,2 M6,10 Q10,6 6,2 M2,6 Q6,10 2,14"/>
    <circle cx="4" cy="4" r="1.5" fill="currentColor"/>
  </svg>
  <!-- repeat rotated for other corners -->
  <!-- Gold dotted border line -->
  <div class="absolute inset-3 border border-dashed border-[#c9a043]/30 pointer-events-none"></div>
  <!-- Content -->
</div>
```

### 5) Eye of Providence Accent

Esoteric triangular eye motif for mystical emphasis.

```html
<svg viewBox="0 0 60 50" class="w-12 h-10 mx-auto">
  <path d="M30,4 L56,46 L4,46 Z" fill="none" stroke="#c9a043" stroke-width="1.5"/>
  <path d="M30,14 L46,40 L14,40 Z" fill="#1a1040" stroke="#c9a043" stroke-width="0.5"/>
  <ellipse cx="30" cy="30" rx="8" ry="5" fill="none" stroke="#d4a868" stroke-width="1"/>
  <circle cx="30" cy="30" r="3" fill="#d4a868"/>
  <!-- Radiating lines -->
  <g stroke="#c9a043" stroke-width="0.5" opacity="0.6">
    <line x1="30" y1="0" x2="30" y2="-6"/>
    <line x1="30" y1="0" x2="18" y2="-4"/>
    <line x1="30" y1="0" x2="42" y2="-4"/>
  </g>
</svg>
```

### 6) Zodiac Wheel Decoration

Circular zodiac symbol ring for section dividers or card backgrounds.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20 opacity-40">
  <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a043" stroke-width="0.5"/>
  <circle cx="50" cy="50" r="32" fill="none" stroke="#c9a043" stroke-width="0.5" stroke-dasharray="2,4"/>
  <!-- 12 division lines -->
  <g stroke="#c9a043" stroke-width="0.3" opacity="0.5">
    <line x1="50" y1="10" x2="50" y2="90"/>
    <line x1="10" y1="50" x2="90" y2="50"/>
    <line x1="22" y1="22" x2="78" y2="78"/>
    <line x1="78" y1="22" x2="22" y2="78"/>
  </g>
  <circle cx="50" cy="50" r="4" fill="#d4a868"/>
</svg>
```

### 7) Tarot Card Button

Button styled as a small mystical label with gold trim.

- Primary: `bg-gradient-to-b from-[#3a1a5a] to-[#1a1040] text-[#d4a868] font-serif font-medium tracking-[0.2em] uppercase px-8 py-3 border border-[#c9a043] shadow-[0_2px_12px_rgba(90,40,120,0.3)] hover:shadow-[0_4px_20px_rgba(212,168,104,0.2)] transition-all duration-500`.
- Gold accent: `bg-gradient-to-b from-[#d4a868] to-[#c9a043] text-[#1a1040] font-serif font-bold tracking-widest uppercase px-8 py-3 border border-[#8a6a1a]`.

## Color Palette System

### Deep Jewel Tone Palette

| Color | Hex | Role |
|---|---|---|
| Midnight Navy | `#0d0828` | Darkest background, void |
| Imperial Purple | `#2a1450` | Primary card surface |
| Deep Violet | `#3a1a5a` | Elevated surface, hover |
| Oxblood Burgundy | `#4a1020` | Rich accent, Major Arcana |
| Forest Teal | `#0a3a3a` | Secondary accent, earth suits |
| Gold Foil | `#c9a043` | Borders, filigree, structure |
| Light Gold | `#d4a868` | Text, numerals, highlights |
| Pale Gold | `#f5d76e` | Brightest gold, star centers |
| Ethereal White | `#e8e0d0` | Body text on dark |
| Muted Silver | `#8a8a9a` | Secondary text, ghost elements |

Rules: Backgrounds are always dark (`#0d0828` to `#2a1450`). Gold (`#c9a043` / `#d4a868`) is the primary structural and text accent. Jewel tones (burgundy, teal, deep violet) differentiate card suits and arcana. Never use bright primaries, pastels, or muted earth tones. The palette should feel like candlelight on velvet with gold leaf catching the flame.

## Typography Recommendations

Tarot typography is mystical, ornamental, and steeped in Renaissance tradition:

- **Display headings:** Cinzel (Roman inscription caps, perfect for Arcana names), Cormorant Garamond, or Trajan Pro. The letters should feel carved, not typed.
- **Roman numerals:** Cinzel or EB Garamond at `text-2xl tracking-[0.3em]` — wide letter spacing evokes inscribed stone.
- **Body:** EB Garamond, Lora, or Crimson Text (readable serif with medieval character).
- **Labels:** `font-serif uppercase tracking-[0.2em] text-sm text-[#d4a868]` (rubricated gold labels).
- Avoid sans-serif for primary text. Tarot is esoteric and serif-bound.
- Avoid overly decorative Blackletter for body text (reserve it for atmospheric accents only, if at all).
- Numerals must always be Roman (0, I, II ... XXI) for Major Arcana headers.

## Component Architecture Pattern

1. Dark midnight background (`#0d0828` or `#0a0520`) — the void behind the cards.
2. Optional starfield or celestial gradient overlay at low opacity.
3. Arched-top cards with gold borders and inner gold trim lines.
4. Roman numeral headers at card tops (gold, wide tracking).
5. Celestial SVG motifs (sun, moon, stars, eye) integrated into card content.
6. Ornate Renaissance borders with corner flourishes on all major containers.
7. Gold foil star details scattered as decorative accents.
8. Gold-on-dark-jewel-tone typography throughout.

## Interaction Rules

- Default state: mystical, ornate, quietly luminous.
- Hover: card lifts and gold glow intensifies, as if candlelight catches the foil.
  - `hover:shadow-[0_12px_40px_rgba(212,168,104,0.15)] hover:-translate-y-1 transition-all duration-500`.
- Active: `active:translate-y-0 active:shadow-[0_4px_16px_rgba(10,5,40,0.4)]` (settles back).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4a868]/50 focus:ring-offset-2 focus:ring-offset-[#0d0828]`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, ritualistic, unhurried — like turning a card).
- Card flip reveal: optional `rotate-y-180` 3D flip animation for revealing card meanings (use `transform-style-preserve-3d` and `backface-hidden`).

## Reusable Tailwind Tokens

- Dark void: `bg-[#0d0828]`
- Card surface: `bg-gradient-to-b from-[#2a1450] to-[#1a1040]`
- Arched frame: `[clip-path:polygon(15%_0%,85%_0%,85%_8%,50%_0%,15%_8%)] border-2 border-[#c9a043]`
- Rounded arch: `rounded-t-[50%_30%] border-2 border-[#c9a043]`
- Gold border: `border border-[#c9a043]`
- Gold text: `text-[#d4a868] font-serif tracking-[0.2em]`
- Roman numeral: `font-serif text-2xl text-[#d4a868] tracking-[0.3em]`
- Gold button: `bg-gradient-to-b from-[#d4a868] to-[#c9a043] text-[#1a1040] font-serif font-bold uppercase tracking-widest`
- Starfield overlay: `bg-[radial-gradient(2px_2px_at_20%_30%,#d4a86820,transparent),radial-gradient(1px_1px_at_60%_70%,#d4a86815,transparent)] bg-[size:200px_200px]`
- Deep glow: `shadow-[0_8px_32px_rgba(10,5,40,0.6)]`
- Inner gold trim: `absolute inset-2 border border-[#c9a043]/40 pointer-events-none`

## Quality Checklist (must pass)

- At least one arched-top card frame (clip-path or asymmetric border-radius).
- Roman numeral headers on Major Arcana cards (gold, wide tracking).
- Deep jewel-tone palette on dark backgrounds (navy, purple, burgundy, teal).
- Gold foil accents present (borders, stars, numerals, filigree).
- Celestial SVG motifs (sun, moon, stars) integrated into design.
- Ornate Renaissance borders with corner flourishes on major containers.
- Typography is serif with wide tracking (Cinzel or equivalent for headings).
- Background is dark midnight (`#0d0828` or darker), never light or white.
- Esoteric symbolism present (Eye of Providence, zodiac, tetragrammaton, or similar).
- The aesthetic reads as mystical, ornate, and slightly forbidden — occult Renaissance divination.

## Anti-Patterns

- Flat rectangular cards without arches (the arched frame is the signature shape).
- Light or white backgrounds (tarot is read in candlelit darkness).
- Bright primary colors or pastels (the palette is deep jewel tones only).
- Sans-serif typography for primary text (tarot demands serif, preferably Cinzel).
- Missing gold foil accents (gold-on-dark is the core material contrast).
- Simple single-line borders (borders must be ornate with corner flourishes).
- Missing celestial symbolism (sun, moon, stars are mandatory motifs).
- Missing Roman numerals on Arcana cards (numerals anchor the hierarchy).
- Fast snappy animations (motion should be slow and ritualistic).
- Modern minimalist layouts (tarot is ornate, layered, and richly decorated).
- Flat gold fills instead of gradient foil (gold should shimmer, not lie flat).
- Missing the mystical/esoteric mood (the interface should feel like it holds hidden knowledge).

## Accessibility Considerations

- Gold text (`#d4a868`) on dark navy/purple (`#0d0828` / `#1a1040`) must be verified for WCAG AA contrast (4.5:1 minimum).
- Ethereal white (`#e8e0d0`) body text on dark backgrounds provides strong contrast.
- Decorative SVG motifs (stars, eyes, zodiac wheels, corner flourishes) must be `aria-hidden="true"` and `pointer-events-none`.
- Focus states must be visible: `focus:ring-2 focus:ring-[#d4a868]/50` (gold ring on dark void).
- Roman numerals must have semantic heading tags for screen reader hierarchy.
- Slow hover/transition animations must respect `prefers-reduced-motion` (reduce to instant or fade-only).
- Card flip animations must not trap keyboard focus — manage focus on the revealed face.
- Celestial background overlays must not reduce text contrast below WCAG AA.
- Touch targets must meet minimum 44x44px despite ornamental border padding.
- Dark backgrounds with gold text can be difficult for users with low vision at small sizes — use `text-base` (16px) minimum for body text.
