---
name: baroque-ui
description: Build baroque UI components (ornate gilded surfaces, dramatic chiaroscuro, scrollwork flourishes, deep velvet tones, gold leaf accents, theatrical grandeur) with opulent ornamentation, layered depth, and the dramatic visual language of 17th-century European palaces. Trigger this skill when the user asks for baroque design, ornate gilded UI, palace aesthetic, dramatic luxury, velvet and gold, or theatrical opulent interfaces.
---

# Baroque UI

Use this skill to design and implement ornate, dramatic interfaces inspired by 17th-century Baroque art and architecture: gilded surfaces, scrollwork ornaments, deep velvet color fields, chiaroscuro lighting, and the theatrical opulence of European palaces and cathedrals.

## Non-Negotiable Foundations

- Baroque design is defined by EXCESS and DRAMA: every surface is ornamented, every element is theatrical. Restraint is the enemy.
- Gold leaf and gilded accents are mandatory: thin gold lines, gold gradient borders, and gold scrollwork frame every element.
- Colors are deep and saturated: royal burgundy, midnight blue, forest green, deep purple, and warm gold against dark backgrounds.
- Chiaroscuro lighting: strong contrast between light and dark, with elements emerging from shadow into golden light.
- Ornamental flourishes (scrollwork, acanthus leaves, fleur-de-lis) decorate borders, corners, and dividers.
- Typography is dramatic and classical: high-contrast Didone serifs or ornamental display fonts that demand attention.

## Core Material Recipes

### 1) Gilded Panel

The foundational baroque surface: dark velvet with gold ornamental border.

- Background: `bg-gradient-to-br from-[#3a0a0a] to-[#1a0505]` (deep burgundy velvet).
- Gold border: `border-2 border-[#d4af37]`.
- Gold ornamental frame: pseudo-element with gold gradient scrollwork SVG at corners.
- Shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)]`.
- Full: `bg-gradient-to-br from-[#3a0a0a] to-[#1a0505] border-2 border-[#d4af37] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)]`

### 2) Gold Gradient Border

Gilded border using gradient pseudo-element.

- Wrapper: `bg-gradient-to-br from-[#d4af37] via-[#f5d76e] to-[#b8860b] p-[2px] rounded-lg`.
- Inner: `bg-[#1a0505] rounded-[calc(0.5rem-2px)] p-6`.

### 3) Scrollwork Corner Ornament

SVG baroque scrollwork at panel corners.

```html
<svg viewBox="0 0 60 60" class="absolute top-0 left-0 w-12 h-12 text-[#d4af37]">
  <path fill="currentColor" d="M0,0 Q20,0 25,15 Q30,30 15,35 Q0,40 0,20 Z M5,5 Q15,5 18,15 Q20,25 10,28 Q5,30 5,15 Z" opacity="0.8"/>
</svg>
```

### 4) Velvet Button

Deep-colored button with gold border and dramatic shadow.

- Primary: `bg-gradient-to-b from-[#5a1a1a] to-[#3a0a0a] text-[#f5d76e] font-serif font-bold px-8 py-3 border-2 border-[#d4af37] shadow-[0_4px_12px_rgba(0,0,0,0.4),0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.25)] transition-all`.
- Gold: `bg-gradient-to-b from-[#f5d76e] to-[#b8860b] text-[#1a0505] font-serif font-bold px-8 py-3 border-2 border-[#d4af37]`.

### 5) Chiaroscuro Light Effect

Dramatic spotlight effect on hero sections.

- `bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.12)_0%,transparent_60%)]` over a dark background.
- Creates the impression of golden candlelight illuminating the center of the composition.

### 6) Fleur-de-lis Divider

Ornamental baroque divider with fleur-de-lis centerpiece.

```html
<div class="flex items-center justify-center gap-3 my-6">
  <div class="w-20 h-px bg-gradient-to-r from-transparent to-[#d4af37]"></div>
  <span class="text-[#d4af37] text-xl">⚜</span>
  <div class="w-20 h-px bg-gradient-to-l from-transparent to-[#d4af37]"></div>
</div>
```

### 7) Gold Text Treatment

Text rendered in gold gradient.

- `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#d4af37] to-[#b8860b] font-serif`.

## Color Palette System

### Core Baroque Palette

| Color | Hex | Role |
|---|---|---|
| Royal Burgundy | `#3a0a0a` | Primary dark surface |
| Deep Purple | `#2a0a3a` | Alternative dark surface |
| Midnight Blue | `#0a0a3a` | Alternative dark surface |
| Forest Green | `#0a3a1a` | Alternative dark surface |
| Gold | `#d4af37` | Primary accent, borders, ornaments |
| Light Gold | `#f5d76e` | Highlights, gradient tops |
| Dark Gold | `#b8860b` | Gradient bottoms, deep gold |
| Ivory | `#f5f0e6` | Text on dark surfaces |
| Pure Black | `#0a0505` | Deep shadows, backgrounds |

Rules: Deep saturated backgrounds (burgundy, purple, blue, green) dominate. Gold is the universal accent — it appears on every border, ornament, and text highlight. The palette should feel like a candlelit palace interior.

## Typography Recommendations

Baroque typography is dramatic, classical, and high-contrast:

- **Display headings:** Playfair Display, Bodoni Moda, or Didot (high-contrast Didone serif).
- **Ornamental display:** Cinzel Decorative, Cormorant Unicase (decorative classical caps).
- **Body:** Cormorant Garamond, EB Garamond (elegant readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-[0.2em]` with gold treatment.
- Avoid sans-serif entirely. Baroque is classical serif territory.

## Component Architecture Pattern

1. Deep dark background (burgundy, purple, or midnight blue).
2. Chiaroscuro spotlight effect (golden radial gradient from top).
3. Gilded panels with gold borders and scrollwork corners.
4. Ornamental dividers (fleur-de-lis, gold gradient lines).
5. Velvet buttons with gold borders and dramatic shadows.
6. Gold gradient text on headings.
7. Fleur-de-lis and acanthus leaf SVG ornaments.

## Interaction Rules

- Default state: ornate, dramatic, theatrical.
- Hover: gold glow intensifies, shadows deepen.
  - `hover:shadow-[0_6px_20px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.25)] transition-all duration-400`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#1a0505]`.
- Transitions: `transition-all duration-400` (dramatic, unhurried, theatrical).

## Reusable Tailwind Tokens

- Gilded panel: `bg-gradient-to-br from-[#3a0a0a] to-[#1a0505] border-2 border-[#d4af37] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)]`
- Gold border wrapper: `bg-gradient-to-br from-[#d4af37] via-[#f5d76e] to-[#b8860b] p-[2px] rounded-lg`
- Velvet button: `bg-gradient-to-b from-[#5a1a1a] to-[#3a0a0a] text-[#f5d76e] font-serif font-bold border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.15)]`
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#d4af37] to-[#b8860b]`
- Chiaroscuro: `bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.12)_0%,transparent_60%)]`
- Fleur-de-lis divider: `flex items-center justify-center gap-3` with `⚜` between gold gradient lines.

## Quality Checklist (must pass)

- Gold accents are present on every major element (borders, ornaments, text highlights).
- Backgrounds are deep saturated jewel tones (burgundy, purple, blue, green).
- Chiaroscuro lighting effect present (dramatic light-dark contrast).
- Ornamental scrollwork or fleur-de-lis decorations at panel corners/dividers.
- Typography is high-contrast classical serif (no sans-serif).
- Shadows are dramatic and layered (deep dark + golden glow).
- The aesthetic communicates theatrical opulence and palace grandeur.
- Gold gradient text treatment on display headings.
- Every surface is ornamented — restraint is NOT baroque.
- The mood reads as 17th-century European royal court.

## Anti-Patterns

- Minimalism or restraint (baroque is defined by excess and drama).
- Sans-serif typography (baroque demands classical serif).
- Bright cheerful or pastel colors (baroque is deep jewel tones).
- Flat unornamented surfaces (every surface needs gilding or scrollwork).
- Missing gold accents (gold is the universal baroque accent).
- Missing chiaroscuro (dramatic lighting is essential).
- Simple unadorned borders (use gold gradient borders with corner ornaments).
- Modern button styles (baroque buttons are velvet with gold borders).
- Light or bright backgrounds (baroque is dark and dramatic).
- Plain dividers without ornamentation (use fleur-de-lis or scrollwork dividers).

## Accessibility Considerations

- Deep jewel-tone backgrounds with ivory text provide excellent contrast (WCAG AAA).
- Gold text (`#d4af37`) on dark backgrounds must be verified (large text only for AA).
- Gold gradient text treatments can reduce contrast — verify at all sizes.
- Chiaroscuro effects should not create regions where text becomes unreadable.
- Focus states: `focus:ring-2 focus:ring-[#d4af37]` (gold ring visible on dark).
- Ornamental SVGs (scrollwork, fleur-de-lis) must be `aria-hidden="true"`.
- The dark dramatic aesthetic may cause eye strain for prolonged reading — provide lighter alternatives if possible.
- Touch targets must be adequate despite ornamental padding.
