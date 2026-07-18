---
name: minimalist-ui
description: Build minimalist UI components (generous whitespace, limited color, strict typography hierarchy, purposeful restraint) with high signal-to-noise ratio, monochrome palettes, and function-first layouts. Trigger this skill when the user asks for minimalism, minimal UI, clean design, whitespace-heavy layouts, or distraction-free interfaces.
---

# Minimalist UI

Use this skill to design and implement restrained, high-clarity interfaces where every element earns its place through function, not decoration.

## Non-Negotiable Foundations

- Whitespace is the primary design tool. It is not empty space; it is an active element that creates hierarchy, breathing room, and focus.
- A limited color palette: one neutral base (black/white/gray), one accent color maximum. Color is functional, never decorative.
- Typography carries the hierarchy. Since decoration is removed, type scale, weight, and spacing must do the heavy lifting.
- Every element must justify its existence. If removing it does not break function, remove it.
- Borders are used sparingly; prefer subtle background differences or generous spacing to separate sections.

## Core Material Recipes

### 1) Surface and Background

Minimalist surfaces are flat, clean, and layered by subtle background shifts rather than shadows.

- Primary background: `bg-white` (light mode) or `bg-[#0a0a0a]` (dark mode).
- Secondary surface: `bg-gray-50` (light) or `bg-[#141414]` (dark) for subtle differentiation.
- Tertiary surface: `bg-gray-100` (light) or `bg-[#1a1a1a]` (dark) for inputs, wells.
- Borders: `border-gray-100` to `border-gray-200` (light) or `border-white/5` to `border-white/10` (dark). Keep barely visible.

### 2) Buttons

Minimalist buttons rely on typography, spacing, and one accent color.

- Primary button: `bg-black text-white` (light mode) or `bg-white text-black` (dark mode).
  - `px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-150`
  - Hover: `hover:bg-gray-800` (light) or `hover:bg-gray-100` (dark).
- Secondary button: `bg-transparent border border-gray-300 text-gray-700`
  - Hover: `hover:border-gray-900 hover:text-gray-900` (border and text darken together).
- Ghost/text button: `bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100`
- Icon-only button: `p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100`

### 3) Cards

Minimalist cards use subtle borders or faint background shifts, never heavy shadows.

- Standard card: `bg-white border border-gray-200 rounded-xl p-6`
- Shadowless card: `bg-gray-50 rounded-xl p-6` (separated by background, not border).
- Hover lift (interactive card): `hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200`

### 4) Inputs

- Standard input: `bg-transparent border-b border-gray-300 focus:border-black pb-2 text-base outline-none`
- Boxed input: `bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:border-gray-400 outline-none`
- Search input: `bg-gray-100 rounded-full px-4 py-2 pl-10 text-sm focus:bg-white focus:ring-1 focus:ring-gray-200`

## Typography Hierarchy (The Core System)

Since minimalism removes decoration, typography IS the design system. This scale is mandatory:

| Element | Size | Weight | Spacing |
|---|---|---|---|
| Page title | `text-4xl` to `text-6xl` | `font-bold` | `tracking-tight`, `leading-[1.1]` |
| Section title | `text-2xl` to `text-3xl` | `font-semibold` | `tracking-tight`, `leading-tight` |
| Card title | `text-lg` to `text-xl` | `font-semibold` | `leading-snug` |
| Body | `text-base` to `text-lg` | `font-normal` | `leading-relaxed` |
| Meta/label | `text-xs` to `text-sm` | `font-medium` | `tracking-wide` |
| Caption | `text-xs` | `font-normal` | `text-gray-500` |

Rules:
- Maximum two font families: one for headings (optional), one for body.
- Use weight contrast, not size alone, to differentiate hierarchy.
- Line height for body text: `leading-relaxed` (`1.625`) minimum for readability.
- Letter spacing: tighten headings (`tracking-tight`), widen labels/eyebrows (`tracking-wide` or `tracking-wider`).

## Color System

### Light Mode

- Background: `#ffffff` (primary), `#fafafa` (secondary), `#f5f5f5` (tertiary).
- Text: `#111111` (primary), `#6b7280` (secondary), `#9ca3af` (tertiary).
- Border: `#e5e7eb` (standard), `#f3f4f6` (subtle).
- Accent: One color. Common choices: `#000000` (pure mono), `#2563eb` (blue), `#7c3aed` (purple), `#059669` (green).

### Dark Mode

- Background: `#0a0a0a` (primary), `#141414` (secondary), `#1a1a1a` (tertiary).
- Text: `#fafafa` (primary), `#a1a1aa` (secondary), `#71717a` (tertiary).
- Border: `#27272a` (standard), `#1f1f1f` (subtle).
- Accent: `#ffffff` (pure mono), `#3b82f6` (blue), `#a78bfa` (purple), `#10b981` (green).

## Spacing System

Generous, consistent spacing is the hallmark of minimalism.

- Base unit: `4px` (Tailwind `1`).
- Section spacing: `space-y-16` to `space-y-24` between major sections.
- Card internal padding: `p-6` to `p-8`.
- Element spacing within cards: `gap-4` to `gap-6`.
- Page margins: `px-6` (mobile) to `px-12` (desktop), max-width `max-w-4xl` to `max-w-6xl`.

## Component Architecture Pattern

1. Generous page padding (whitespace frame).
2. Clear typographic hierarchy (titles, labels, body).
3. Content surfaces (cards with subtle borders or background shifts).
4. Interactive elements (buttons with one accent color).
5. Optional decorative element (a single accent line, shape, or image).

No decorative layer is mandatory. If content is clear without it, omit it.

## Interaction Rules

- Default state: clean, flat, no decoration.
- Hover state: subtle color shift (darken/lighten), faint background appear, or faint shadow.
- Active state: slightly darker than hover (`active:bg-gray-200`).
- Focus state: `focus:ring-2 focus:ring-offset-2 focus:ring-gray-900` (visible but minimal).
- Transitions: `transition-colors duration-150` or `transition-all duration-200`.
- No bouncy, spring, or exaggerated animations. Movement is functional and brief.

## Reusable Tailwind Tokens

Light mode:

- Primary bg: `bg-white`
- Secondary bg: `bg-gray-50`
- Tertiary bg: `bg-gray-100`
- Primary text: `text-gray-900`
- Secondary text: `text-gray-500`
- Border: `border-gray-200`
- Primary button: `bg-gray-900 text-white hover:bg-gray-700 px-6 py-3 rounded-lg font-medium text-sm transition-colors`
- Card: `bg-white border border-gray-200 rounded-xl p-6`

Dark mode:

- Primary bg: `bg-[#0a0a0a]`
- Secondary bg: `bg-[#141414]`
- Primary text: `text-white`
- Secondary text: `text-gray-400`
- Border: `border-white/10`
- Primary button: `bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-medium text-sm transition-colors`
- Card: `bg-[#141414] border border-white/10 rounded-xl p-6`

## Quality Checklist (must pass)

- Whitespace is generous and consistent (no cramped layouts).
- Color palette is limited to neutral + one accent.
- Typography hierarchy is clear through size and weight contrast.
- No decorative elements that do not serve function.
- Borders are barely visible or replaced by spacing.
- Shadows are minimal or absent.
- Every interactive element has clear hover, active, and focus states.
- Content is scannable: headings stand out, body text breathes.
- No more than two font families.

## Anti-Patterns

- Adding decorative shadows, gradients, or textures (minimalism is flat by design).
- Using more than one accent color.
- Tight spacing (minimalism requires generous whitespace).
- Multiple font families (one, maximum two).
- Heavy borders (use the lightest visible border or spacing instead).
- Decorative icons that do not communicate function.
- Excessive animation (movement should be brief and functional).
- Filling whitespace with content (whitespace IS the content in minimalism).
- Using small font sizes to cram more in (readability over density).

## Typography Recommendations

- Sans-serif body: Inter, SF Pro Text, system-ui, Helvetica Now.
- Sans-serif heading: Inter Display, SF Pro Display, or same family at heavier weight.
- Mono (for code/labels): JetBrains Mono, SF Mono, Fira Code.
- Avoid decorative, script, or display fonts entirely.

## Accessibility Considerations

- High contrast between text and background is natural in minimalism but verify it meets WCAG AA.
- Do not rely on color alone for hierarchy; use weight and size as well.
- Focus states must be visible (a 2px ring is the minimalist standard).
- Whitespace improves accessibility for users with cognitive disabilities by reducing visual noise.
- Ensure touch targets meet minimum 44x44px even in compact minimalist layouts.
