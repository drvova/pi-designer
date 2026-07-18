---
name: dark-academia-ui
description: Build dark academia UI components (oxblood and parchment, classical serif, candle gold, chiaroscuro imagery, reading-first layouts) with scholarly authority, editorial restraint, and the aesthetic of leather-bound editions and cloistered reading rooms. Trigger this skill when the user asks for dark academia, scholarly aesthetic, classical editorial, reading-focused design, or university heritage interfaces.
---

# Dark Academia UI

Use this skill to design and implement scholarly, authority-driven interfaces with oxblood and parchment palettes, classical serif typography, candle-gold accents, and the editorial restraint of academic publishing and heritage institutions.

## Non-Negotiable Foundations

- Dark academia is the visual grammar of cloisters, leather-bound editions, and reading rooms — translated to screen.
- The palette is small and low-saturation: oxblood (dark burgundy), parchment (warm cream), candle gold, and charcoal. No bright colors.
- Typography is classical serif: a display serif for headings, a reading serif for body, and a humanist sans for utility/microcopy. Three faces is the ceiling.
- Layout is reading-first: generous margins, readable column widths, editorial spacing.
- Imagery uses chiaroscuro (strong light-dark contrast), candlelit warmth, and archival/documentary quality.
- The aesthetic communicates quiet authority — not showmanship, not minimalism, but earned, scholarly weight.

## Core Material Recipes

### 1) Parchment Surface (the foundation)

Warm cream paper surface for reading and content.

- Background: `bg-[#f5ead0]` (warm parchment).
- Texture: subtle paper grain via SVG noise at `opacity-[0.03]`.
- Shadow: `shadow-[0_2px_8px_rgba(74,44,22,0.1)]` (warm brown shadow).
- Border: `border border-[#d4c4a0]` (aged paper edge).

### 2) Oxblood Surface

Deep burgundy surface for headers, accent panels, and navigation.

- Background: `bg-[#4a1a1a]` (deep oxblood).
- Text: `text-[#f5ead0]` (parchment text on dark).
- Shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.3)]`.
- Gold accent: `text-[#c9a84c]` for labels and highlights.

### 3) Dark Academia Card

Editorial card with parchment surface and serif typography.

- `bg-[#f5ead0] border border-[#d4c4a0] p-8 shadow-[0_2px_8px_rgba(74,44,22,0.1)]`.
- Heading: `font-serif text-2xl text-[#2a1a0a]`.
- Body: `font-serif text-base leading-relaxed text-[#3a2a1a]`.
- Meta: `font-sans text-xs uppercase tracking-widest text-[#8a7a5a]`.

### 4) Candle Gold Button

Elegant button with warm gold accent.

- Primary: `bg-[#4a1a1a] text-[#f5ead0] font-serif font-medium px-6 py-3 tracking-wide hover:bg-[#5a2a2a] transition-colors`.
- Gold: `bg-gradient-to-b from-[#d4af37] to-[#a07a1a] text-[#2a1a0a] font-medium px-6 py-3 hover:brightness-110 transition-all`.
- Outline: `bg-transparent text-[#4a1a1a] border-2 border-[#4a1a1a] px-6 py-3 hover:bg-[#4a1a1a] hover:text-[#f5ead0] transition-colors`.

### 5) Classical Column / Pilaster Divider

Architectural divider referencing classical architecture.

- Vertical gold line: `w-px bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent h-full`.
- Ornamental capital: small SVG Ionic/Doric capital at the top.
- Bookend ornament: small diamond or fleur-de-lis SVG at each end of a horizontal divider.

### 6) Drop Cap (Initial Letter)

The editorial signature: oversized first letter of a paragraph.

```css
.drop-cap::first-letter {
  font-family: 'EB Garamond', serif;
  font-size: 4.5rem;
  font-weight: 700;
  float: left;
  line-height: 0.85;
  margin: 0.1em 0.1em 0 0;
  color: #4a1a1a;
}
```

### 7) Wax Seal / Stamp Accent

Circular wax seal decoration for badges and section markers.

- `w-16 h-16 rounded-full bg-[#8b1a1a] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)]`.
- Text: `text-[#c9a84c] font-serif font-bold text-xs uppercase tracking-wider`.
- Rotation: `rotate-[-5deg]` (hand-pressed feel).

## Color Palette System

### Core Dark Academia Palette

| Color | Hex | Role |
|---|---|---|
| Deep Oxblood | `#4a1a1a` | Primary dark, headers, buttons |
| Oxblood Light | `#6b2a2a` | Hover states, secondary surfaces |
| Parchment | `#f5ead0` | Primary background, light surfaces |
| Aged Paper | `#e8dcc0]` | Secondary surface, cards |
| Candle Gold | `#c9a84c` | Accent, labels, highlights |
| Gold Light | `#d4af37` | Button gradients, bright accents |
| Charcoal | `#2a1a0a` | Primary text on light surfaces |
| Sepia | `#5a3a1a` | Secondary text |
| Warm Gray | `#8a7a5a` | Meta, labels, captions |
| Forest | `#2a3a1a` | Alternative dark accent |

Rules: Oxblood + parchment + gold is the core triad. The palette must be low-saturation and warm. No bright primary colors. No cool blues. Everything should feel aged, warm, and scholarly.

## Typography System

Dark academia typography is the DESIGN. Three faces, no more:

| Role | Font Options | Weight | Purpose |
|---|---|---|---|
| Display Heading | EB Garamond, Cormorant Garamond, Caslon | 700 | Headlines, page titles |
| Body (reading serif) | Lora, Source Serif Pro, Crimson Text | 400 | Body text, article content |
| Utility (humanist sans) | Source Sans Pro, Inter (low weight), Optima | 400/600 | Buttons, labels, microcopy, UI |

Rules:
- Display serif minimum 16px body; below that the editorial premise breaks.
- `uppercase tracking-widest` on labels echoes classical architectural lettering.
- Avoid: Times New Roman (reads as office document), blackletter (too theatrical), Didone (reads as fashion, not academia).
- Body text line height: `leading-loose` (1.75) for long-form reading.
- Headings: `tracking-tight` for display sizes, `tracking-wide` for labels.

## Component Architecture Pattern

1. Parchment background (warm, textured, reading-first).
2. Oxblood header bar or navigation (dark, authoritative).
3. Editorial content cards (parchment with serif typography).
4. Drop caps on article openings (oversized initial letter).
5. Gold accent elements (dividers, labels, wax seals).
6. Chiaroscuro imagery (high-contrast, warm-lit photography).
7. Ornamental dividers (classical motifs, gold lines).

## Interaction Rules

- Default state: quiet, restrained, authoritative.
- Hover: subtle darkening or gold brightening.
  - `hover:bg-[#e8dcc0]` (parchment darkens slightly).
  - Gold accents brighten: `hover:text-[#d4af37]`.
- Active: `active:bg-[#d4c4a0]` (deeper parchment press).
- Focus: gold ring `focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2 focus:ring-offset-[#f5ead0]`.
- Transitions: `transition-colors duration-300` (unhurried, dignified).
- No bouncy, spring, or playful animations.

## Reusable Tailwind Tokens

- Parchment card: `bg-[#f5ead0] border border-[#d4c4a0] p-8 shadow-[0_2px_8px_rgba(74,44,22,0.1)]`
- Oxblood header: `bg-[#4a1a1a] text-[#f5ead0]`
- Gold accent: `text-[#c9a84c]`
- Gold button: `bg-gradient-to-b from-[#d4af37] to-[#a07a1a] text-[#2a1a0a] font-medium px-6 py-3`
- Drop cap: `font-serif text-7xl font-bold float-left mr-2 text-[#4a1a1a] leading-[0.85]`
- Wax seal: `w-16 h-16 rounded-full bg-[#8b1a1a] text-[#c9a84c] font-bold uppercase text-xs rotate-[-5deg] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4)]`
- Ornamental divider: `h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent`
- Label: `font-sans text-xs uppercase tracking-widest text-[#8a7a5a]`

## Quality Checklist (must pass)

- Palette is oxblood + parchment + candle gold (low-saturation, warm).
- Typography uses classical serif for display AND body (humanist sans for utility only).
- Reading-first layout with generous margins and comfortable column width.
- Drop caps present on article/long-form content openings.
- Ornamental gold dividers and architectural motifs present.
- Imagery uses chiaroscuro (warm, high-contrast lighting).
- No bright, saturated, or cool colors.
- The aesthetic communicates quiet scholarly authority, not theatrical cosplay.
- Body text minimum 16px (editorial readability).
- Wax seals or classical stamps used as accent decorations.

## Anti-Patterns

- Bright, saturated colors (dark academia is muted and warm).
- Sans-serif body text (the reading serif IS the design).
- Modern minimalist layouts (dark academia is editorial, not minimal).
- Missing drop caps on long-form content (the initial letter is essential).
- Pure white backgrounds (use warm parchment tones).
- Cool blue or gray palettes (dark academia is warm oxblood/gold/parchment).
- Playful or bouncy animations (motion must be dignified and unhurried).
- More than three font families (display serif + body serif + utility sans is the maximum).
- Missing ornamental dividers or gold accents (these provide the scholarly character).
- Times New Roman (reads as office document, not classical typography).
- Blackletter or Fraktur (too theatrical/costume, not genuine academia).

## Accessibility Considerations

- Parchment background with charcoal text provides excellent contrast (WCAG AAA territory).
- Oxblood with parchment text also provides strong contrast.
- Classical serif at 16px+ is readable; below 16px the editorial premise and readability both break.
- Gold text on dark backgrounds should be limited to labels and large text (may not meet AA for small text).
- Focus states use gold: `focus:ring-2 focus:ring-[#c9a84c]`.
- Drop caps should not break screen reader text flow (use CSS `::first-letter`, not separate elements).
- Ornamental SVGs and wax seals must be `aria-hidden="true"`.
- Reading-first layouts with semantic HTML and heading hierarchy aid screen reader navigation.
- Respect `prefers-reduced-motion`: all transitions should disable for reduced motion.
