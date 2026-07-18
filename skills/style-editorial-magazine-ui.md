---
name: editorial-magazine-ui
description: Build editorial / magazine UI components (print-inspired layouts, oversized typography, multi-column text, pull quotes, drop caps, ruled borders, vintage photography) with editorial reading rhythms, section numbering, and the visual language of print publishing. Trigger this skill when the user asks for editorial design, magazine layout, print-inspired web, publication UI, or newspaper-style interfaces.
---

# Editorial / Magazine UI

Use this skill to design and implement print-publication-inspired interfaces with oversized editorial typography, multi-column text flows, pull quotes, drop caps, ruled borders, section numbering, and the sophisticated visual rhythm of magazine and newspaper design.

## Non-Negotiable Foundations

- Editorial UI translates print publishing to the web: multi-column layouts, sophisticated typography, pull quotes, and a clear visual hierarchy that guides the reader's eye.
- Typography is the hero. Oversized display headings, well-set body text, and a clear type scale create the entire visual experience.
- Layout is structured and rhythmic: alternating full-bleed sections with contained columns, consistent margins, and a clear reading flow.
- Color is restrained: mostly black-on-white (or white-on-black), with one accent color used sparingly.
- Borders and rules (horizontal lines) structure content, not shadows or gradients.
- Imagery is high-quality, editorial-style photography — full-bleed, captioned, and integrated into the text flow.

## Core Material Recipes

### 1) Editorial Hero / Masthead

Oversized title with editorial date and issue numbering.

- Title: `font-serif text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9]`.
- Issue label: `font-sans text-xs uppercase tracking-[0.3em] text-gray-500`.
- Date/edition: `font-mono text-sm text-gray-600`.
- Thin rule below: `border-t border-black mt-4 pt-4`.

### 2) Multi-Column Text

The print signature: body text flowing in multiple columns.

```css
.multi-column {
  column-count: 2;
  column-gap: 2rem;
  column-rule: 1px solid #e0e0e0;
}
@media (max-width: 768px) {
  .multi-column { column-count: 1; }
}
```

### 3) Drop Cap (Initial Letter)

Oversized first letter of an article.

```css
.drop-cap::first-letter {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  font-weight: 900;
  float: left;
  line-height: 0.85;
  margin: 0.05em 0.1em 0 0;
  color: #1a1a1a;
}
```

### 4) Pull Quote

Large, extracted quote that breaks the text flow.

- `font-serif text-3xl md:text-4xl font-medium leading-tight text-[#1a1a1a] border-l-4 border-[#1a1a1a] pl-6 my-12`.
- Optional: `text-[#c9472b]` (accent color for emphasis).
- Attribution: `font-sans text-sm uppercase tracking-widest text-gray-500 mt-4`.

### 5) Editorial Section Break

Numbered section dividers with rules.

- `flex items-center gap-4 my-12`.
- Number: `font-serif text-4xl font-bold text-gray-300`.
- Line: `flex-1 h-px bg-gray-300`.
- Label: `font-sans text-xs uppercase tracking-widest text-gray-500`.

### 6) Full-Bleed Image with Caption

Full-width image with editorial caption below.

- Image: `w-full h-[60vh] object-cover`.
- Caption: `font-sans text-sm text-gray-600 mt-2 flex justify-between`.
- Caption text: descriptive sentence.
- Credit: `text-gray-400 font-mono text-xs`.

### 7) Editorial Card / Article Preview

Newsstand-style article card.

- Image: `w-full aspect-[4/3] object-cover mb-4`.
- Category: `font-sans text-xs uppercase tracking-widest text-[#c9472b] font-bold`.
- Title: `font-serif text-2xl font-bold leading-tight mt-2`.
- Excerpt: `font-serif text-base text-gray-600 mt-2 leading-relaxed`.
- Byline: `font-sans text-sm text-gray-500 mt-3`.

### 8) Editorial Navigation

Minimal top nav with thin rules.

- `flex items-center justify-between border-b border-black pb-4 mb-8`.
- Logo: `font-serif text-2xl font-bold`.
- Links: `font-sans text-sm uppercase tracking-widest`.
- Active link: `border-b-2 border-black pb-1`.

## Color Palette System

### Light Mode (Classic Editorial)

| Color | Hex | Role |
|---|---|---|
| Ink Black | `#1a1a1a` | Primary text, headings, rules |
| Paper White | `#fdfdfb` | Background (warm white, not pure) |
| Accent Red | `#c9472b` | Category labels, pull quote accents |
| Gray Mid | `#767676` | Secondary text, captions |
| Gray Light | `#e0e0e0` | Rules, borders, dividers |
| Gray Faint | `#f5f5f5` | Subtle backgrounds, sidebars |

### Dark Mode (Inverted Editorial)

| Color | Hex | Role |
|---|---|---|
| Off-White | `#f5f5f0` | Primary text |
| Ink | `#0a0a0a` | Background (warm black) |
| Accent | `#e85d3f` | Category labels, accents |

Rules: Editorial is predominantly monochrome (black on white). One accent color (red, orange, or blue) used sparingly for categories and emphasis. No gradients.

## Typography System

Editorial typography is the DESIGN. A well-chosen type system IS the entire visual experience.

| Role | Font Options | Weight | Size Range |
|---|---|---|---|
| Display/Masthead | Playfair Display, Fraunces, Domaine Display | 700-900 | 48-128px |
| Heading | Same as display or EB Garamond | 600-700 | 24-48px |
| Body (article) | Lora, Source Serif Pro, Crimson Text | 400 | 16-18px |
| UI/Labels | Inter, Sora, Helvetica Neue | 500-600 | 11-14px |
| Data/Mono | JetBrains Mono, IBM Plex Mono | 400 | 12-14px |

Rules:
- Display serif + body serif + utility sans = three faces maximum.
- Body text minimum 16px; leading `1.625` to `1.75` for long-form reading.
- Labels use `uppercase tracking-[0.2em]` (wide tracking echoes print conventions).
- Headlines use `tracking-tighter` for tight, impactful display.

## Component Architecture Pattern

1. Minimal navigation (thin rule, uppercase labels).
2. Editorial hero/masthead (oversized title, issue number, date).
3. Full-bleed hero image or video.
4. Article body with multi-column text and drop caps.
5. Pull quotes breaking up the text flow.
6. Numbered section breaks with rules.
7. Full-bleed captioned imagery between sections.
8. Article preview grid (newsstand-style cards).
9. Minimal footer with thin rules.

## Interaction Rules

- Default state: clean, typographic, restrained.
- Hover: subtle underline or color shift.
  - Links: `hover:text-[#c9472b] hover:underline`.
  - Cards: `hover:opacity-80 transition-opacity` (subtle, not bouncy).
- Active: `active:text-black`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c9472b] focus:ring-offset-2`.
- Transitions: `transition-colors duration-200` (dignified, print-like).
- Scroll reveals: subtle fade-in on article sections as they enter viewport.
- No bouncy, spring, or playful animations.

## Reusable Tailwind Tokens

- Masthead: `font-serif text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9]`
- Drop cap: `font-serif text-7xl font-bold float-left mr-2 leading-[0.85] text-[#1a1a1a]`
- Pull quote: `font-serif text-3xl md:text-4xl font-medium leading-tight border-l-4 border-[#1a1a1a] pl-6 my-12`
- Category label: `font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#c9472b]`
- Section break: `flex items-center gap-4 my-12` with number + line
- Multi-column: `column-count-2 column-gap-8 column-rule-px`
- Article card: `border-b border-gray-200 pb-8 mb-8`
- Editorial nav: `flex items-center justify-between border-b border-black pb-4`

## Quality Checklist (must pass)

- Typography is oversized and editorial (display headings 48px+).
- Multi-column text is used for article body.
- Drop caps present on article openings.
- Pull quotes break up long text flows.
- Section breaks use numbered dividers with rules.
- Color palette is predominantly monochrome with one accent.
- Borders and rules (horizontal lines) structure content (not shadows).
- Imagery is full-bleed, captioned, editorial quality.
- Navigation is minimal (thin rules, uppercase labels).
- The aesthetic reads as a print publication adapted for the web.
- Body text minimum 16px with generous leading (1.625+).

## Anti-Patterns

- Small, timid typography (editorial demands oversized headlines).
- Single-column text for long articles (use multi-column for print feel).
- Missing drop caps (the initial letter is an editorial signature).
- Shadow-based depth (use rules and borders, not shadows).
- Gradients or colorful palettes (editorial is monochrome + one accent).
- Bouncy or playful animations (editorial is dignified and restrained).
- Missing pull quotes in long-form content (they break text rhythm).
- Cluttered navigation (editorial nav is minimal: thin rule + labels).
- Card-heavy layouts without article flow (editorial is about reading, not browsing).
- Missing section numbering or editorial structure.
- Decorative illustrations (editorial uses photography, not illustration).

## Accessibility Considerations

- High contrast (black text on warm white) is naturally accessible.
- Multi-column text must collapse to single-column on mobile for readability.
- Drop caps should use CSS `::first-letter` (not separate elements) for screen reader compatibility.
- Pull quotes should use `<blockquote>` semantic element.
- Body text at 16px+ with leading 1.625+ ensures comfortable reading.
- Section breaks should use semantic `<hr>` or `<section>` elements.
- Focus states must be visible: `focus:ring-2 focus:ring-[#c9472b]`.
- Captioned images need proper `alt` text and `<figcaption>` elements.
- Multi-column CSS must be tested with screen readers to ensure correct reading order.
- Respect `prefers-reduced-motion`: disable scroll-reveal animations.
