---
name: swiss-design-ui
description: Build Swiss Design / International Typographic Style UI components (rigorous grids, flush-left typography, Helvetica/grotesque fonts, generous whitespace, minimal color) with mathematical precision, asymmetric balance, and objective information hierarchy. Trigger this skill when the user asks for Swiss design, International Typographic Style, grid-based design, Helvetica-style UI, or modernist typographic interfaces.
---

# Swiss Design UI

Use this skill to design and implement interfaces rooted in the International Typographic Style: mathematical grid systems, neo-grotesque typography, flush-left ragged-right text, photography over illustration, and objective, clear information hierarchy.

## Non-Negotiable Foundations

- The grid is the foundation. Every layout begins with a mathematical grid that structures all content. The grid is not hidden; it is expressed through visible alignment and rhythm.
- Typography is the primary design element. Neo-grotesque sans-serif fonts (Helvetica, Univers, Akzidenz-Grotesk) carry the entire visual language.
- Flush-left, ragged-right alignment is standard. Centered text is rare and deliberate.
- Whitespace is generous and active. It is not empty; it creates rhythm, emphasis, and breathing room.
- Color is restrained and objective. Black, white, and one accent color (often red). Color is informational, not decorative.
- Photography over illustration. Documentary-style, high-quality imagery preferred.

## Core Material Recipes

### 1) Swiss Grid Container

The foundation: a strict grid system.

- 12-column grid: `grid grid-cols-12 gap-x-6 gap-y-0`.
- Content modules align to grid columns with consistent horizontal rhythm.
- Vertical rhythm uses a baseline grid: all text aligns to a consistent vertical baseline.
- Use `max-w-[1400px] mx-auto` for the outer container with generous `px-6 md:px-12`.

### 2) Swiss Card / Module

Minimal cards defined by grid position and typography, not by decoration.

- `bg-white border border-stone-200 p-6` (light mode).
- `bg-stone-900 border border-stone-800 p-6` (dark mode).
- No shadow or `shadow-sm` at most. Cards are defined by position and alignment, not elevation.
- Corner radius: `rounded-none` (sharp Swiss precision) or minimal `rounded-sm`.

### 3) Swiss Button

Utilitarian, typography-driven buttons.

- Primary: `bg-black text-white font-medium text-sm uppercase tracking-wider px-6 py-3 hover:bg-stone-800 transition-colors rounded-none`
- Secondary: `bg-transparent text-black font-medium text-sm uppercase tracking-wider px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors rounded-none`
- Accent: `bg-[#E63329] text-white font-medium text-sm uppercase tracking-wider px-6 py-3 hover:bg-[#c9281f] transition-colors rounded-none`

### 4) Swiss Input

Minimal, grid-aligned inputs.

- `bg-transparent border-b-2 border-stone-900 px-0 py-3 text-base outline-none focus:border-[#E63329] placeholder:text-stone-400`

### 5) Swiss Divider / Grid Line

Visible grid lines that express the structural system.

- Horizontal: `border-t border-stone-900` or `h-px bg-stone-900`.
- Vertical (between columns): `border-r border-stone-300`.
- Red accent line: `h-1 bg-[#E63329] w-12` (short red bar as a section marker).

## Color System (Stone Palette)

### Light Mode

| Role | Color | Tailwind |
|---|---|---|
| Page background | `#fafaf9` (stone-50) | `bg-stone-50` |
| Surface / card | `#f5f5f4` (stone-100) | `bg-stone-100` |
| Border | `#e7e5e4` (stone-200) | `border-stone-200` |
| Primary text | `#1c1917` (stone-900) | `text-stone-900` |
| Secondary text | `#1c1917` at 70% opacity | `text-stone-900/70` |
| Tertiary text | `#1c1917` at 40% opacity | `text-stone-900/40` |
| Accent (Swiss Red) | `#E63329` | `text-[#E63329]` or `bg-[#E63329]` |

### Dark Mode

| Role | Color | Tailwind |
|---|---|---|
| Page background | `#0c0a09` (stone-950) | `bg-stone-950` |
| Surface / card | `#1c1917` (stone-900) | `bg-stone-900` |
| Border | `#292524` (stone-800) | `border-stone-800` |
| Primary text | `#fafaf9` (stone-50) | `text-stone-50` |
| Secondary text | `#fafaf9` at 70% | `text-stone-50/70` |
| Accent (Swiss Red) | `#E63329` | same |

The opacity-based hierarchy is key: secondary text uses the SAME color as primary text but at 70% opacity. Tertiary at 40%. This creates tonal depth without introducing new hues.

## Typography System

Swiss design IS typography. The type scale is the design system.

| Style | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Display | `text-7xl` to `text-9xl` (72-128px) | `font-bold` | `tracking-tighter` | `leading-[0.9]` |
| Heading 1 | `text-5xl` to `text-6xl` | `font-bold` | `tracking-tight` | `leading-[1.0]` |
| Heading 2 | `text-3xl` to `text-4xl` | `font-semibold` | `tracking-tight` | `leading-[1.1]` |
| Body Large | `text-lg` to `text-xl` | `font-normal` | `tracking-normal` | `leading-relaxed` |
| Body | `text-base` (16px) | `font-normal` | `tracking-normal` | `leading-relaxed` |
| Caption | `text-sm` (14px) | `font-normal` | `tracking-normal` | `leading-normal` |
| Label | `text-xs` (12px) | `font-medium` | `tracking-widest uppercase` | `leading-normal` |

### Font Recommendations

| Font | Character | When to use |
|---|---|---|
| **IBM Plex Sans** | Rational, slightly condensed, 1960s systems rationalism | Primary recommendation |
| **Hanken Grotesk** | Closest to Neue Haas Grotesk lineage | For authentic Helvetica feel |
| **Barlow** | Condensed Swiss-grid proportions | For dense, gridded layouts |
| **Inter** | Clean neo-grotesque fallback | Universal availability |
| **Space Grotesk** | Slightly more character | For modern Swiss interpretations |

Rules: ONE font family throughout. Swiss design never mixes font families. Weight and size create hierarchy.

## Grid System (Detailed)

### Standard Swiss Grid

- Desktop: 12 columns, `gap-x-6` (24px), `max-w-[1400px]`.
- Tablet: 8 columns, `gap-x-4` (16px).
- Mobile: 4 columns, `gap-x-4` (16px).
- Baseline grid: all vertical spacing in multiples of 8px (`space-y-8`, `py-8`, etc.).

### Grid Expressions

The grid is expressed through:
- Visible alignment: all elements left-align to consistent column positions.
- Baseline rhythm: headings, body text, and images align to a shared baseline grid.
- Visible dividing lines: thin rules between sections and columns.
- Generous margins: content never touches viewport edges (`px-6` mobile, `px-12` desktop minimum).

## Component Architecture Pattern

1. Mathematical grid container (12-column, baseline-aligned).
2. Generous whitespace frame (large margins, breathing room).
3. Oversized typography (display headings that span multiple columns).
4. Flush-left content modules (cards, images, text blocks aligned to grid).
5. Visible grid lines (thin rules that express structure).
6. One accent color (Swiss red for emphasis, warnings, active states).
7. Documentary photography (objective, high-quality, full-bleed images).

## Interaction Rules

- Default state: clean, flat, objective.
- Hover state: subtle color change or underline.
  - `hover:text-[#E63329]` (text turns red on hover).
  - `hover:bg-stone-100` (subtle background fill).
- Active state: `active:bg-stone-200`.
- Focus state: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63329] focus-visible:ring-offset-2`.
- Transitions: `transition-colors duration-150` (fast, precise, mechanical).
- No decorative animations. Motion is purely functional.

## Reusable Tailwind Tokens

- Grid: `grid grid-cols-12 gap-x-6 max-w-[1400px] mx-auto px-6 md:px-12`
- Card: `bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6`
- Primary button: `bg-black dark:bg-white text-white dark:text-black font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-none hover:bg-stone-800`
- Display heading: `text-7xl font-bold tracking-tighter leading-[0.9]`
- Label: `text-xs font-medium uppercase tracking-widest`
- Red accent line: `h-1 bg-[#E63329] w-12`
- Divider: `border-t border-stone-900 dark:border-stone-100`

## Quality Checklist (must pass)

- Layout is built on a visible mathematical grid (12-column or 8-column).
- Typography uses a single neo-grotesque sans-serif family.
- Text is flush-left, ragged-right (never justified, rarely centered).
- Whitespace is generous and creates rhythm.
- Color palette is restrained: black, white, stone grays, and one accent.
- Cards/modules are defined by alignment and borders, not shadows.
- Corner radius is minimal (`rounded-none` or `rounded-sm`).
- Headings are oversized and command attention through scale.
- Grid lines and dividers are visible and structural.
- The aesthetic reads as objective, mathematical, and clear.

## Anti-Patterns

- Mixing font families (Swiss design uses ONE family throughout).
- Centered text (flush-left is the standard).
- Decorative shadows (Swiss is flat or uses minimal borders).
- Rounded corners (`rounded-xl`+ breaks the precision).
- Multiple accent colors (one accent only, typically red).
- Decorative illustrations or icons (Swiss prefers photography and typography).
- Cluttered or dense layouts (Swiss requires generous whitespace).
- Non-grid-aligned elements (everything snaps to the grid).
- Justified text (creates rivers; flush-left ragged-right is correct).
- Color gradients (Swiss uses solid, objective colors).

## Accessibility Considerations

- Swiss design's high contrast (black on white) is naturally accessible.
- Large type sizes and generous whitespace aid readability.
- Opacity-based hierarchy (70%, 40%) must still meet WCAG AA contrast — verify the 40% tier.
- Focus states use the accent red: `focus-visible:ring-2 focus-visible:ring-[#E63329]`.
- Touch targets: `px-6 py-3` buttons typically meet 44x44px minimum.
- Grid-based layouts are predictable for screen reader navigation when semantic HTML is used.
- `color-scheme: light dark` must be set on the root to ensure native controls (scrollbars, form elements) match the theme.
