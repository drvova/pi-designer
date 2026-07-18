---
name: bento-grid-ui
description: Build bento grid UI components (modular card layouts, varied cell sizes, dense information architecture, visual hierarchy through scale) with responsive grid systems, spanning cells, and content-first organization. Trigger this skill when the user asks for bento grid, bento box layout, modular card grid, Apple-style bento, or dashboard-style card layouts.
---

# Bento Grid UI

Use this skill to design and implement modular, visually balanced card grid layouts where varied cell sizes create hierarchy and information density without visual clutter.

## Non-Negotiable Foundations

- A bento grid is a grid of cards where cells span different numbers of rows and columns. This variation IS the design system.
- Every card is self-contained: it has its own background, border, padding, and content. Cards do not share backgrounds.
- Visual hierarchy is achieved through card SIZE, not through decoration. Larger cards are more important.
- Consistent gap spacing between all cards creates the modular grid feel.
- Cards have consistent corner radius across the grid.
- Content density is high but organized: each card contains one primary piece of information or interaction.

## Grid System

### Base Grid Setup

The grid is built on CSS Grid with 12 columns (desktop) or 4-6 columns (mobile/tablet).

- Desktop: `grid grid-cols-12 gap-4` (or `gap-3` for tighter, `gap-6` for airier).
- Tablet: `grid grid-cols-6 gap-3`.
- Mobile: `grid grid-cols-2 gap-3` (or `grid-cols-1` for very small screens).

### Cell Spanning Patterns

Cards span different column and row counts to create the bento variation:

| Pattern | Classes | Use Case |
|---|---|---|
| Full width | `col-span-12` | Hero, banner, featured content |
| Wide | `col-span-8` | Primary content, large media |
| Half | `col-span-6` | Equal-weight content pairs |
| Standard | `col-span-4` | Default card size |
| Narrow | `col-span-3` | Stats, metrics, compact info |
| Square small | `col-span-3 row-span-2` | Tall compact card |
| Square large | `col-span-6 row-span-2` | Feature card with media |
| Tall | `col-span-4 row-span-2` | List, timeline, tall content |
| Wide short | `col-span-8 row-span-1` | Banner, chart, wide info |

### Common Layout Patterns

**Pattern A: Hero + Stats (dashboard)**

```
[ Hero (col-span-8 row-span-2) ][ Stat (col-span-4) ]
[                              ][ Stat (col-span-4) ]
[ Chart (col-span-6) ][ List (col-span-6)          ]
```

**Pattern B: Feature Grid (product)**

```
[ Feature A (col-span-6) ][ Feature B (col-span-3) ][ Feature C (col-span-3) ]
[ Feature D (col-span-4) ][ Feature E (col-span-8)                          ]
```

**Pattern C: Mobile (col-span-2 base)**

```
[ Hero (col-span-2) ]
[ Card (col-span-1) ][ Card (col-span-1) ]
[ Card (col-span-2) ]
```

## Core Card Recipes

### 1) Standard Bento Card

- Background: `bg-white dark:bg-[#141414]`.
- Border: `border border-gray-200 dark:border-white/10`.
- Radius: `rounded-2xl` (consistent across all cards).
- Padding: `p-5` to `p-6`.
- Shadow: `shadow-none` (or subtle: `shadow-[0_1px_3px_rgba(0,0,0,0.04)]`).
- Full: `bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl p-6`

### 2) Feature Bento Card (larger, more padding)

- Same as standard but with `p-8` and optional subtle gradient background.
- Background: `bg-gradient-to-br from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#141414]`.

### 3) Stat / Metric Card

Compact card for a single key number.

- Layout: `flex flex-col justify-between`.
- Content: label (small), value (large), delta (small, colored).
- `bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl p-5`
- Value: `text-3xl font-bold tracking-tight`.
- Label: `text-sm text-gray-500 font-medium`.
- Delta: `text-xs font-semibold text-green-600` (or red).

### 4) Media Card (image/video preview)

- Image fills card: `overflow-hidden rounded-2xl` with `img` at `w-full h-full object-cover`.
- Optional overlay text: absolute positioned text over image with `bg-gradient-to-t from-black/60`.

## Responsive Strategy

Bento grids must collapse gracefully across breakpoints:

- Desktop (12-col): full layout with varied spans.
- Tablet (6-col): halve all spans (col-span-12 becomes col-span-6, col-span-6 becomes col-span-3, etc.).
- Mobile (2-col): simplify to col-span-2 (full width) and col-span-1 (half width).

Responsive prefix pattern:

- `col-span-2 md:col-span-3 lg:col-span-6` — starts small, expands on larger screens.
- `row-span-1 md:row-span-2` — taller cards on larger screens.

## Component Architecture Pattern

1. Grid container (CSS Grid with gap).
2. Individual cards (each with consistent radius, border, padding).
3. Card content (title, body, media, data — organized within each card).
4. Interactive states (hover lift, click navigation).
5. Empty states (placeholder cards for loading or "add new").

Each card is a self-contained module. The grid arranges them; the cards handle their own content.

## Interaction Rules

- Default state: flat, clean card.
- Hover state (interactive card): subtle lift.
  - `hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200`.
- Active state: `active:scale-[0.99]`.
- Focus state: `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`.
- Transitions: `transition-all duration-200`.
- Card-level click: wrap entire card in a link or button for navigation.
- Use `group` and `group-hover` for internal element animations on hover.

## Color and Accent Rules

- Card backgrounds are neutral (white/dark gray) by default.
- Accent cards: one or two cards in a grid may use a colored or gradient background to draw attention.
  - Example: `bg-gradient-to-br from-blue-500 to-purple-600 text-white`.
- Stat values can use semantic colors: green for positive, red for negative, blue for neutral.
- Keep colored accent cards to 1-2 per grid; too many creates visual noise.

## Typography Rules

Within each card, typography creates internal hierarchy:

| Element | Size | Weight | Purpose |
|---|---|---|---|
| Card title | `text-base` to `text-lg` | `font-semibold` | Card heading |
| Card body | `text-sm` to `text-base` | `font-normal` | Description/content |
| Stat value | `text-3xl` to `text-4xl` | `font-bold tracking-tight` | Key metric |
| Stat label | `text-xs` to `text-sm` | `font-medium text-gray-500` | Metric name |
| Meta/time | `text-xs` | `text-gray-400` | Timestamps, metadata |
| Icon | `text-xl` to `text-2xl` | - | Category indicator |

Rules:
- Card titles are consistent size across all cards regardless of card size.
- Only stat values and hero content scale up with card size.
- Body text is always `text-sm` or `text-base` for scannability.

## Reusable Tailwind Tokens

- Grid: `grid grid-cols-12 gap-4` (desktop), responsive down.
- Standard card: `bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-200`
- Feature card: `bg-gradient-to-br from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl p-8`
- Stat card: `bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between`
- Hover lift: `hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200`
- Accent card: `bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-6`

## Quality Checklist (must pass)

- Grid uses CSS Grid (not flexbox) with consistent gap spacing.
- Cards span different column/row counts (variation is the design).
- All cards share the same corner radius.
- All cards share consistent border treatment (all bordered or all unbordered).
- Card content is self-contained (no content bleeding between cards).
- Larger cards contain proportionally more or more important content.
- Responsive collapse is tested (spans reduce on tablet/mobile).
- Interactive cards have hover states.
- Colored accent cards are limited to 1-2 per grid.
- Typography hierarchy is consistent across cards of the same type.

## Anti-Patterns

- All cards the same size (that is a standard grid, not a bento grid).
- Inconsistent gap spacing between cards.
- Inconsistent corner radius (some rounded, some sharp).
- Content overflow or text clipping within cards.
- Cards with empty space and no content (fill the card or reduce its span).
- Too many colored accent cards (creates visual noise).
- Decorative cards that serve no functional purpose.
- Using flexbox instead of CSS Grid (flexbox does not handle the span variations cleanly).
- Inconsistent padding across cards of similar size.
- Making every card interactive when only some should be.

## Layout Planning Tips

- Start with the largest/most important card and place it first.
- Fill remaining space with progressively smaller cards.
- Ensure every row and column is filled without awkward gaps.
- Use row-span to create tall cards that anchor the layout.
- On mobile, stack everything into 1-2 columns with minimal spanning.
- Plan for 5-9 cards per desktop view (fewer feels empty, more feels cluttered).
- Use a 12-column grid for maximum flexibility in spanning options.

## Accessibility Considerations

- Ensure tab order follows visual reading order (top-to-bottom, left-to-right).
- Interactive cards must be keyboard navigable (wrap in `<a>` or `<button>` with accessible name).
- Use semantic headings inside cards (`<h2>`, `<h3>`) for screen reader hierarchy.
- Do not rely on card size alone to convey importance; include text labels.
- Color-coded stat cards must include text indicators (not color alone) for colorblind users.
- Maintain touch target minimums (44x44px) on mobile collapsed layouts.
- Ensure focus is visible when navigating between cards with keyboard.
