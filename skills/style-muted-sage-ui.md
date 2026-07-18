---
name: muted-sage-ui
description: Build muted sage UI components (sage green surface, dusty rose accent, warm linen, faded olive, terracotta muted, stone gray warm, dried herb) with soft muted colors, calming tones, and the gentle sophistication of a sage-infused palette. Trigger this skill when the user asks for sage UI, muted earthy design, warm natural palette, dusty rose interface, linen texture, terracotta muted, botanical muted, herbarium style, or calm earthy components.
---

# Muted Sage UI

Use this skill to design and implement interfaces inspired by the quiet sophistication of muted natural tones: sage green surfaces, dusty rose accents, warm linen textures, faded olive undertones, soft terracotta, warm stone grays, and the dried-herb palettes of apothecaries, botanical journals, and cottage workspaces.

## Non-Negotiable Foundations

- Muted sage UI is specifically about SOFT MUTED EARTHY TONES: desaturated, gentle, and calming colors drawn from dried herbs, linen, terracotta, and sage.
- The background is always WARM and LIGHT: cream, linen, or soft off-white that evokes natural fabric or aged paper.
- Color is DESATURATED by design: every hue is pulled back from full intensity — sage is not emerald, rose is not fuchsia, terracotta is not red.
- Surfaces feel TACTILE: linen weave textures, paper grain, subtle noise that evokes natural materials.
- Contrast is GENTLE: soft edges, muted shadows, no harsh blacks — even the darkest elements use warm charcoal or deep sage.
- The aesthetic is quiet botanical sophistication: herbarium pages, dried flower arrangements, sage bundles, linen tablecloths, and warm stone cottage walls.

## Core Material Recipes

### 1) Sage Green Surface

Muted green gradient that serves as the primary surface color.

- Base surface: `bg-[#8a9a7a]`.
- Gradient surface: `bg-[linear-gradient(135deg,#8a9a7a_0%,#7a8a6a_100%)]`.
- Tinted surface: `bg-[#f0e8d0] bg-[linear-gradient(135deg,rgba(138,154,122,0.1)_0%,rgba(138,154,122,0.05)_100%)]`.
- Deep surface: `bg-[#5a6a50] text-[#f0e8d0]`.

### 2) Dusty Rose Accent

Soft muted pink for highlights, badges, and interactive accents.

- Rose accent: `bg-[#c4a0a0]`.
- Rose text: `text-[#c4a0a0]`.
- Rose border: `border-[#c4a0a0]`.
- Rose hover: `hover:bg-[#b89090]`.
- Rose subtle: `bg-[rgba(196,160,160,0.15)]`.

### 3) Warm Linen Texture

Natural fabric texture overlay for backgrounds and cards.

- Linen base: `bg-[#e8dcc0]`.
- Linen grain: `bg-[#e8dcc0] bg-[url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23d4c8a8' opacity='0.3'/%3E%3C/svg%3E")]`.
- Linen card: `bg-[#f0e8d0] shadow-[0_1px_3px_rgba(90,90,70,0.08)] border border-[rgba(138,154,122,0.2)]`.
- Linen dark: `bg-[#d4c8a8]`.

### 4) Faded Olive

Desaturated green-brown for secondary elements and muted fills.

- Olive fill: `bg-[#8a8a6a]`.
- Olive text: `text-[#8a8a6a]`.
- Olive border: `border-[#8a8a6a]`.
- Olive muted: `bg-[rgba(138,138,106,0.2)]`.

### 5) Muted Terracotta

Soft earth tone for call-to-action and warm emphasis.

- Terracotta fill: `bg-[#b08060]`.
- Terracotta text: `text-[#b08060]`.
- Terracotta border: `border-[#b08060]`.
- Terracotta hover: `hover:bg-[#a07050]`.
- Terracotta muted: `bg-[rgba(176,128,96,0.15)]`.

### 6) Warm Stone Gray

Gentle warm gray for body text, dividers, and secondary content.

- Stone text: `text-[#8a8a7a]`.
- Stone border: `border-[#8a8a7a]`.
- Stone divider: `border-[rgba(138,138,122,0.3)]`.
- Stone background: `bg-[#9a9a8a]`.
- Stone muted: `text-[rgba(138,138,122,0.6)]`.

### 7) Dried Herb Accent

Deep sage-green accent for active states and botanical identity.

- Herb fill: `bg-[#7a8a6a]`.
- Herb text: `text-[#7a8a6a]`.
- Herb border: `border-[#7a8a6a]`.
- Herb hover: `hover:bg-[#6a7a5a]`.
- Herb muted: `bg-[rgba(122,138,106,0.15)]`.

## Color Palette System

| Color Name | Hex | Role |
|---|---|---|
| Sage | `#8a9a7a` | Primary surface, headers, buttons |
| Dusty Rose | `#c4a0a0` | Accent, badges, secondary highlights |
| Warm Linen | `#e8dcc0` | Background, cards, light surfaces |
| Faded Olive | `#8a8a6a` | Secondary fills, muted backgrounds |
| Terracotta Muted | `#b08060` | CTA, warm emphasis, active states |
| Stone Warm | `#8a8a7a` | Body text, dividers, neutral elements |
| Dried Herb | `#7a8a6a` | Active states, botanical identity |
| Cream | `#f0e8d0` | Lightest background, text on dark sage |

Rules: Every composition uses the cream/linen base with sage as the primary active color. Terracotta appears sparingly as CTA or emphasis — it is the warmest color and must not dominate. Dusty rose is accent-only — never used for large surfaces. No pure black or pure white anywhere — all neutrals are warm-shifted. All colors are deliberately muted — if a color looks vivid, desaturate it further.

## Typography Recommendations

- **Display:** Lora, Crimson Pro, or Cormorant Garamond (elegant serif with organic warmth that suits botanical themes).
- **Alternative:** Source Serif 4 or Libre Baskerville for editorial/herbarium headings.
- **Body:** Source Sans 3, Nunito Sans, or Lato (warm, friendly sans-serif with soft geometry).
- **Monospace:** JetBrains Mono or IBM Plex Mono for data or code elements.
- Headings use warm charcoal `text-[#4a4a40]` or deep sage `text-[#5a6a50]` — never pure black.
- Body text uses stone warm `text-[#8a8a7a]` or warm charcoal `text-[#4a4a40]`.
- Font weights stay moderate: `font-normal` to `font-semibold` — heavy bold feels harsh against muted tones.
- Line height is generous (1.6-1.8 for body) to match the calm breathing-room aesthetic.

## Interaction Rules

- Hover states use gentle darkening: `hover:bg-[#7a8a6a]` (sage) or `hover:bg-[#a07050]` (terracotta).
- Transitions are slow and smooth: `transition-all duration-500 ease-out` — rushed transitions feel aggressive.
- Focus states use a soft sage ring: `focus:ring-2 focus:ring-[#8a9a7a] focus:ring-offset-2 focus:ring-offset-[#f0e8d0]`.
- Active/pressed states shift one step darker with subtle inset shadow.
- Cards lift gently on hover: `hover:shadow-[0_4px_12px_rgba(90,90,70,0.1)] hover:-translate-y-0.5 transition-all duration-500`.
- No bounce or spring animations — motion is slow, linear, and organic.
- Scroll behavior is smooth and unhurried.

## Reusable Tailwind Tokens

- Sage surface: `bg-[#8a9a7a]`.
- Rose accent: `text-[#c4a0a0]` or `bg-[#c4a0a0]`.
- Linen background: `bg-[#e8dcc0]` or `bg-[#f0e8d0]`.
- Olive muted: `bg-[#8a8a6a]` or `bg-[rgba(138,138,106,0.2)]`.
- Terracotta CTA: `bg-[#b08060] text-[#f0e8d0] hover:bg-[#a07050] transition-all duration-500`.
- Stone text: `text-[#8a8a7a]`.
- Herb active: `bg-[#7a8a6a] text-[#f0e8d0]`.
- Linen card: `bg-[#f0e8d0] shadow-[0_1px_3px_rgba(90,90,70,0.08)] border border-[rgba(138,154,122,0.2)] rounded-lg p-6`.
- Warm charcoal text: `text-[#4a4a40]`.
- Gentle focus ring: `focus:ring-2 focus:ring-[#8a9a7a] focus:ring-offset-2 focus:ring-offset-[#f0e8d0]`.

## Quality Checklist

- Background is warm and light (cream, linen, or soft off-white).
- All colors are muted and desaturated — no vivid or neon hues.
- No pure black or pure white anywhere in the composition.
- Sage green appears as the primary surface or active color.
- Dusty rose is used sparingly as accent (not on large surfaces).
- Terracotta appears only for CTA or emphasis (not dominant).
- Typography uses warm serif or soft sans-serif families.
- Transitions are slow and smooth (duration-500 or longer).
- Linen texture or subtle grain is present on at least one surface.
- Cards and panels use gentle shadows with warm-toned rgba values.
- The aesthetic reads as botanical / herbarium / sage-infused quiet sophistication.
- Generous whitespace and breathing room throughout.
- Focus states use sage-colored rings on cream offsets.
- Dividers and borders use warm stone or sage tones, never gray or black.

## Anti-Patterns

- Pure black text or borders (warm charcoal or stone gray only).
- Pure white backgrounds (cream or linen `#f0e8d0` minimum).
- Vivid or saturated colors (everything must be desaturated and muted).
- Terracotta used on large surfaces (it is accent-weight, not surface-weight).
- Dusty rose used as primary color (it is accent-only).
- Sharp or harsh drop shadows (soft warm-toned shadows only).
- Fast transitions (anything under 300ms feels aggressive for muted aesthetic).
- Heavy bold font weights (font-semibold maximum for most elements).
- Neon, electric, or high-contrast effects anywhere.
- Cool grays or blue-grays (all neutrals must be warm-shifted).
- Dense layouts without breathing room (muted design needs space to breathe).
- Comic Sans, geometric display fonts, or any playful typeface.
- Rigid grid layouts without organic spacing variation.

## Accessibility Considerations

- Stone warm `#8a8a7a` on cream `#f0e8d0` may fall below WCAG AA for body text — verify contrast ratio (aim for 4.5:1 minimum) and darken to `#6a6a5a` if needed.
- Sage `#8a9a7a` on cream `#f0e8d0` should be checked for AA compliance at small text sizes — use `#5a6a50` for small text.
- Dusty rose `#c4a0a0` on cream fails WCAG AA for text — reserve for large decorative elements or darken to `#8a6060` for readable text.
- Terracotta `#b08060` on cream `#f0e8d0` passes WCAG AA for large text but verify at body size.
- Focus rings must be clearly visible: sage ring on cream offset provides adequate contrast.
- Muted color palette means color-only indicators need supplementary text or icon cues.
- Slow transitions must respect `prefers-reduced-motion` — disable or reduce duration.
- Touch targets must meet 44x44px minimum despite the delicate aesthetic.
- Card borders using `rgba(138,154,122,0.2)` are very subtle — ensure cards remain distinguishable from background via shadow or spacing.
- Linen texture overlays must not reduce text legibility — keep opacity below 0.1 or apply only to decorative areas.
- Screen readers should announce sage/terracotta/rose roles: use `aria-label` or visible text alongside color-coded elements.
