---
name: visual-system
description: "Design system foundation: tokens, color theory, typography pairing, and the structural decisions that keep a product visually consistent."
---

# Visual System

A design system is the set of constraints that make "consistent" cheaper than "random." Without it, every screen is a new debate. With it, most decisions are already made.

## Token Architecture

Tokens are the single source of truth for visual decisions. Name them by purpose, not by value:

```css
:root {
  /* Color by role, not by shade */
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-surface: #ffffff;
  --color-surface-raised: #f9fafb;
  --color-text: #1a1a1a;
  --color-text-muted: #6b7280;
  --color-border: rgba(0, 0, 0, 0.08);
  --color-accent: #f59e0b;

  /* Spacing scale (8pt base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* Typography scale (modular, ratio 1.25) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.56rem;
  --text-2xl: 1.95rem;
  --text-3xl: 2.44rem;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.15);

  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Every visual value in the application should reference a token. Hardcoded values are technical debt.

## Color Theory for Products

### Deriving a palette

1. **Base**: The product's dominant material (concrete, paper, screen-glow, wood, fabric).
2. **Primary**: The action color. Derived from the product's identity, not from a trend.
3. **Accent**: One contrasting color for highlights, badges, or secondary actions.
4. **Surface**: Background tints that create depth without borders.
5. **Text**: Two levels minimum (primary, muted) on each surface.

### Contrast requirements

| Text type | Minimum ratio | Against |
| --- | --- | --- |
| Body text | 4.5:1 | Background |
| Large text (18px+) | 3:1 | Background |
| UI components | 3:1 | Background |
| Disabled text | exempt | — |

Test with a contrast checker, not by eye. The eye adapts; WCAG math doesn't.

### Dark mode

Dark mode is not "invert the colors." It requires:

- Lower contrast surfaces (not pure black on pure white).
- Desaturated brand colors (a vivid blue that works on white becomes harsh on dark).
- Elevated surfaces lighter than the base (not darker — depth reverses in dark).
- Shadow reduced or replaced with border glow.

## Typography Pairing

Two typefaces maximum: one for headings, one for body. If they're the same family, use weight contrast.

### Selection criteria

- **Body**: Optimized for 14-16px screen rendering. Must have tabular figures.
- **Headings**: Can be more expressive but must remain legible at the smallest heading size used.
- **Monospace** (optional): For code, data, or technical accents. Must match the body x-height reasonably.

### Anti-patterns

- Display fonts for body text (illegible at 14px).
- More than two families (fragmented identity).
- System font as the only typeface for a brand-forward product (generic).
- Variable font axes set to extreme values without testing rendering.

## Layout Grid

- Use CSS Grid for page structure, Flexbox for component internals.
- Content width: 1200-1400px max for marketing pages, full-bleed for dashboards.
- Column gap: consistent with the spacing scale.
- Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop), 1280px (wide).

## Component Consistency Rules

Every interactive component in the system follows the same rules:

1. Same padding scale (internal spacing).
2. Same radius from the token set.
3. Same shadow level for the same elevation.
4. Same transition duration and easing for the same interaction type.
5. Same focus ring style.
6. Same disabled appearance.

When two components look different, one of them is wrong — or they serve genuinely different purposes that should be documented.
