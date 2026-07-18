---
name: ui-polish
description: "Engineering details that separate acceptable interfaces from polished ones: shadows, borders, spacing, typography rendering, and micro-interactions."
---

# UI Polish Engineering

Small details compound. A great interface is rarely one big thing — it's dozens of correct small decisions. Apply each rule during implementation, not as an afterthought.

## Concentric Border Radius

When nesting rounded elements, the outer radius equals the inner radius plus the padding between them:

```css
/* Correct */
.card { border-radius: 20px; padding: 8px; }
.card-inner { border-radius: 12px; } /* 12 + 8 = 20 */
```

When padding exceeds 24px, treat layers as independent surfaces and choose each radius on its own.

## Optical Alignment

- Icons in buttons need optical centering (nudge 1-2px), not geometric centering.
- Text next to icons needs a slightly larger gap than text-to-text because icons have visual weight.
- Uppercase text in fixed-height containers needs 1px downward nudge — cap height sits above the optical center.
- Numbers in data displays use `font-variant-numeric: tabular-nums` to prevent width jitter.

## Shadows

One light source from the top. Every shadow in the interface must be consistent with that direction.

```css
/* Card resting on surface */
.card { box-shadow: 0 1px 2px rgba(0,0,0,0.08); }

/* Elevated card (hover or active state) */
.card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }

/* Floating element (popover, dropdown) */
.popover { box-shadow: 0 8px 24px rgba(0,0,0,0.16); }
```

Shadow elevation scale: the bigger the elevation, the larger and softer the shadow. Never invert this.

## Borders

- 1px borders at low opacity define edges without heaviness: `border: 1px solid rgba(0,0,0,0.06)`.
- For dark mode: `border: 1px solid rgba(255,255,255,0.08)`.
- Never use `border: 0` to remove a border without checking whether the element still reads as a separate surface.

## Text Rendering

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings: balanced wrapping */
h1, h2, h3 { text-wrap: balance; }

/* Paragraphs: pretty wrapping (prevents orphans) */
p { text-wrap: pretty; }

/* Numbers in tables/data: fixed width */
.data { font-variant-numeric: tabular-nums; }
```

## Image Outlines

Images inside cards need a subtle border to define their edge against the card background:

```css
.card img { border-radius: 8px; outline: 1px solid rgba(0,0,0,0.06); }
```

Without this, images can appear to "float" or bleed into the card surface.

## Interaction States

Every interactive element needs four states, each visually distinct:

1. **Default**: resting appearance
2. **Hover**: subtle brightness/depth change (0.95-1.05x scale, 2-4px shadow shift)
3. **Active/Pressed**: reduced brightness, slight inset (scale 0.98, darker shadow)
4. **Focus**: visible focus ring for keyboard users (`outline: 2px solid var(--accent); outline-offset: 2px`)

Missing any of these makes the interface feel broken on some interaction path.

## Spacing System

Use a consistent scale, not arbitrary values:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
}
```

The gap between related items is smaller than the gap between groups. This is the Law of Proximity applied to code.
