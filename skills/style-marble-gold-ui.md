---
name: marble-gold-ui
description: Build marble & gold UI components (luxurious veined marble surfaces, gilded gold accents, classical opulence, Italian Renaissance prestige, polished stone depth) with gold filigree, marble texture patterns, and the ultimate luxury material aesthetic. Trigger this skill when the user asks for marble and gold design, luxury stone UI, gilded luxury, Renaissance opulence, Carrara marble, or high-prestige interfaces.
---

# Marble & Gold UI

Use this skill to design and implement ultra-luxurious interfaces with veined marble surfaces, gilded gold accents, classical prestige typography, and the opulent material combination that has symbolized wealth and power from ancient Rome to the Italian Renaissance.

## Non-Negotiable Foundations

- Marble and gold is the ultimate luxury material pairing: white/colored marble provides the surface; gold provides every accent, border, and highlight.
- Marble texture is MANDATORY: surfaces must show characteristic veining (grey veins in white Carrara, gold veins in Calacatta, dark veins in Nero Marquina).
- Gold appears as thin filigree lines, gradient borders, text treatments, and ornamental flourishes — never as large flat fills.
- The aesthetic communicates PRESTIGE, HERITAGE, and EXCLUSIVITY.
- Colors are restrained and sophisticated: marble whites, deep blacks, gold, and occasional jewel tones.
- Typography is classical and refined: high-contrast serif with wide tracking.

## Core Material Recipes

### 1) Carrara Marble Surface

White marble with grey veining.

- Base: `bg-[#f5f2ee]` (warm Carrara white).
- Veining: SVG overlay with curved grey paths: `bg-[url("data:image/svg+xml,...")]` or CSS gradients simulating veins.
- Simple CSS approximation: `bg-[linear-gradient(135deg,#f5f2ee_0%,#e8e4e0_30%,#f0ede8_50%,#e0dcd8_70%,#f5f2ee_100%)]` with `bg-[radial-gradient(ellipse_at_30%_40%,rgba(100,90,80,0.06)_0%,transparent_40%)]`.
- Polished sheen: `shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_20px_rgba(0,0,0,0.08)]`.

### 2) Gold Filigree Border

Thin ornamental gold border.

- `border-2 border-[#c9a84c]` (solid gold border).
- Gradient gold: wrapper `bg-gradient-to-br from-[#f5d76e] via-[#c9a84c] to-[#a07820] p-[1px] rounded-lg` with inner content.

### 3) Gilded Panel

Dark marble panel with gold border and gold text.

- `bg-[#0a0a0a] border-2 border-[#c9a84c] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(201,168,76,0.1)]`.
- Heading: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] to-[#a07820]`.

### 4) Gold Filigree Divider

Ornamental gold divider with center flourish.

```html
<div class="flex items-center justify-center gap-3 my-6">
  <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a84c]"></div>
  <svg viewBox="0 0 40 20" class="w-10 h-5 text-[#c9a84c]">
    <path fill="currentColor" d="M20,0 Q15,5 20,10 Q25,5 20,0 M10,5 Q15,3 20,5 Q15,7 10,5 M30,5 Q25,3 20,5 Q25,7 30,5"/>
  </svg>
  <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a84c]"></div>
</div>
```

### 5) Luxury Button

Gold gradient button with classical styling.

- `bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#a07820] text-[#0a0a0a] font-serif font-semibold tracking-wider uppercase px-8 py-3 border border-[#a07820] shadow-[0_4px_12px_rgba(201,168,76,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all`.

### 6) Nero Marquina Surface (dark marble)

Black marble with white/gold veining.

- Base: `bg-[#1a1a1a]`.
- Veining: thin white/gold SVG paths across the surface.
- Sheen: `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`.

## Color Palette System

### Core Marble & Gold Palette

| Color | Hex | Role |
|---|---|---|
| Carrara White | `#f5f2ee` | Primary marble surface |
| Warm Marble | `#e8e4e0` | Secondary surface |
| Nero Marquina | `#0a0a0a` | Dark marble surface |
| Gold | `#c9a84c` | Primary accent, borders, text |
| Light Gold | `#f5d76e` | Gradient highlight |
| Dark Gold | `#a07820` | Gradient shadow |
| Charcoal | `#1a1a1a` | Text on light marble |
| Warm Gray | `#8a8580` | Marble veining |
| Deep Navy | `#0a0a2a` | Optional jewel accent |
| Burgundy | `#3a0a0a` | Optional jewel accent |

Rules: Marble white or black surfaces with gold accents. The palette is restrained — marble + gold + one optional jewel tone. No bright primaries or pastels.

## Typography Recommendations

- **Display:** Playfair Display, Bodoni Moda, or Didot (high-contrast Didone serif — the luxury standard).
- **Body:** Cormorant Garamond, Lora (elegant readable serif).
- **Labels:** `font-serif font-medium uppercase tracking-[0.2em]` with gold treatment.
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] to-[#a07820]`.

## Interaction Rules

- Default: opulent, polished, prestigious.
- Hover: gold glow intensifies, marble sheen brightens.
  - `hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50`.
- Transitions: `transition-all duration-300` (smooth, polished, luxurious).

## Reusable Tailwind Tokens

- Carrara marble: `bg-[#f5f2ee]` with SVG veining overlay.
- Gold border: `border-2 border-[#c9a84c]`.
- Gold gradient border: `bg-gradient-to-br from-[#f5d76e] via-[#c9a84c] to-[#a07820] p-[1px]`.
- Gilded panel: `bg-[#0a0a0a] border-2 border-[#c9a84c] shadow-[0_0_20px_rgba(201,168,76,0.1)]`.
- Luxury button: `bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#a07820] text-[#0a0a0a] font-serif uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]`.
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] to-[#a07820]`.
- Nero marble: `bg-[#1a1a1a]` with white/gold SVG veining.

## Quality Checklist

- Marble texture (veining) is visible on at least one major surface.
- Gold accents on every element (borders, text, dividers, buttons).
- At least one gold filigree ornamental divider.
- Typography is high-contrast Didone serif (Playfair, Bodoni, Didot).
- Color palette is marble + gold (+ optional jewel tone).
- Polished sheen on surfaces (inset white highlight).
- Gold gradient text treatment on headings.
- The aesthetic communicates luxury, prestige, and heritage.
- Either Carrara white marble or Nero Marquina black marble present.
- Shadows combine dark depth with golden glow.

## Anti-Patterns

- Flat untextured surfaces (marble veining is mandatory).
- Bright primaries or pastels (palette is marble + gold).
- Sans-serif typography (marble & gold demands classical serif).
- Missing gold accents (gold must appear on borders, text, and ornaments).
- Missing marble veining (smooth white is not marble — it needs veins).
- Heavy flat gold fills (gold is for accents and filigree, not large surfaces).
- Missing polished sheen (marble is glossy and reflective).
- Modern minimalist restraint (marble & gold is opulent).
- Missing ornamental dividers (filigree flourishes are essential).
- Thin cheap-looking borders (gold borders should feel substantial and gradient).

## Accessibility Considerations

- Marble white with charcoal text provides excellent contrast (WCAG AAA).
- Gold text on dark marble must be verified (large/bold text only for AA).
- Gold gradient text treatments can reduce contrast — verify at all sizes.
- Focus states: `focus:ring-2 focus:ring-[#c9a84c]/50` (gold ring on marble).
- Marble veining textures must not reduce text contrast.
- Filigree SVG ornaments must be `aria-hidden="true"`.
- The high-contrast serif typography may be difficult for dyslexic users at small sizes — ensure body text is 16px+.
