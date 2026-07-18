---
name: claymorphic-ui
description: Build clay-like UI components (puffy rounded shapes, soft inner shadows, layered depth, 3D push interactions) with inflated surfaces, top-lighting, and tactile squish behavior. Trigger this skill when the user asks for claymorphism, clay UI, puffy buttons, soft 3D cards, inflated inputs, or squishy interactive elements.
---

# Claymorphic UI

Use this skill to design and implement soft, inflated clay components with rounded shapes, inner shadows for depth, and tactile squish interactions.

## Non-Negotiable Foundations

- Clay elements have volume. They look inflated, like a rounded pillow or balloon, not flat or sharp.
- Light direction is from the top. Inner highlights sit at the top inner edge; inner shadows sit at the bottom inner edge.
- Border radius is generous: minimum `rounded-2xl`, typically `rounded-3xl` or `rounded-[2rem]`.
- Clay elements use BOTH inner shadows (for the puffy volume effect) AND outer shadows (for elevation from the background).
- Colors are typically pastel or muted gradients. Pure white or pure black breaks the clay aesthetic.

## Core Material Recipes

### 1) Standard Clay Surface (buttons, cards, panels)

The default inflated clay surface with both inner and outer shadow depth.

- Background gradient: `bg-gradient-to-b from-[#a78bfa] to-[#8b5cf6]` (example for purple clay).
- Inner shadow (top highlight + bottom depth):
  - `shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_4px_8px_rgba(255,255,255,0.3)]`
- Outer shadow (elevation from background):
  - Add `,0_8px_16px_rgba(139,92,246,0.3)` to the shadow stack.
- Full one-liner:
  - `bg-gradient-to-b from-[#a78bfa] to-[#8b5cf6] rounded-3xl shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_4px_8px_rgba(255,255,255,0.3),0_8px_16px_rgba(139,92,246,0.3)]`

### 2) Deep Clay Surface (hero cards, focal elements)

A more pronounced clay surface with stronger inflation and deeper outer shadow.

- Background gradient: `bg-gradient-to-b from-[#a78bfa] to-[#7c3aed]`.
- Shadow stack:
  - `shadow-[inset_0_-6px_12px_rgba(0,0,0,0.2),inset_0_6px_12px_rgba(255,255,255,0.35),0_12px_24px_rgba(139,92,246,0.4)]`

### 3) Inset Clay Surface (input wells, pressed states, progress tracks)

A surface that looks pressed into a clay parent, like a thumbprint.

- Background: darker shade of the parent clay (e.g., `bg-[#6d28d9]`).
- Shadow stack:
  - `shadow-[inset_0_4px_8px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(255,255,255,0.1)]`

### 4) Clay Toggle / Switch (active vs inactive states)

- Active (inflated ON state): use standard clay surface recipe.
- Inactive (pressed OFF state): use inset clay surface recipe.

## Shadow Formula

Every clay element needs three shadow layers to look inflated:

1. **Inner bottom shadow** (dark): Creates the bottom volume. `inset_0_-4px_8px_rgba(0,0,0,0.15)`
2. **Inner top highlight** (light): Creates the top volume. `inset_0_4px_8px_rgba(255,255,255,0.3)`
3. **Outer drop shadow**: Creates elevation from background. `0_8px_16px_rgba(accent,0.3)`

Missing any of these three breaks the clay illusion.

## Component Architecture Pattern

1. Background scene (soft pastel or muted color).
2. Clay parent surface (large inflated card or panel).
3. Inset clay zones (input wells, slider tracks inside the parent).
4. Clay child controls (inflated buttons, knobs, toggles).
5. Accent details (icons, labels, subtle glows).

This layer order ensures consistent volume and depth.

## Interaction Rules

- Default state: fully inflated clay (all three shadow layers active).
- Hover state: slightly more inflated (increase outer shadow spread):
  - Add `4px` to outer shadow and increase highlight opacity slightly.
- Active/pressed state: squish (the signature claymorphic interaction):
  - Use `active:scale-[0.97]` for physical press feedback.
  - Optionally reduce inner shadow depth to simulate compression.
- Disabled state: flatten inner shadows and reduce opacity to `opacity-60`.
- Transitions: `transition-all duration-200 ease-out`.
- Border radius: generous on all elements (`rounded-2xl` minimum).

## Accent and Color Rules

- Clay surfaces work best with gradient backgrounds (top lighter, bottom darker).
- Pastel and muted color families: purples, soft blues, warm pinks, sage greens, warm neutrals.
- Text color: white or very light for colored clay surfaces.
- For light-colored clay (cream, beige), use dark gray text.
- Accents on toggles/active states can use a brighter version of the clay color.
- Avoid pure black, pure white, or neon colors; they break the soft clay aesthetic.

## Reusable Tailwind Tokens

Purple clay defaults:

- Standard clay: `bg-gradient-to-b from-[#a78bfa] to-[#8b5cf6] rounded-3xl shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_4px_8px_rgba(255,255,255,0.3),0_8px_16px_rgba(139,92,246,0.3)]`
- Deep clay: `bg-gradient-to-b from-[#a78bfa] to-[#7c3aed] rounded-3xl shadow-[inset_0_-6px_12px_rgba(0,0,0,0.2),inset_0_6px_12px_rgba(255,255,255,0.35),0_12px_24px_rgba(139,92,246,0.4)]`
- Inset clay: `bg-[#6d28d9] rounded-2xl shadow-[inset_0_4px_8px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(255,255,255,0.1)]`
- Radius: `rounded-3xl` (default), `rounded-[2rem]` (large elements)

Color palette (gradient pairs):

| Color | Light (top) | Dark (bottom) | Inset |
|---|---|---|---|
| Purple | `#a78bfa` | `#8b5cf6` | `#6d28d9` |
| Blue | `#60a5fa` | `#3b82f6` | `#1d4ed8` |
| Pink | `#f472b6` | `#ec4899` | `#be185d` |
| Green | `#4ade80` | `#22c55e` | `#15803d` |
| Orange | `#fb923c` | `#f97316` | `#c2410c` |
| Cream | `#fef3c7` | `#fde68a` | `#d97706` |

## Quality Checklist (must pass)

- Every clay element has both inner and outer shadows (three-layer stack).
- Inner top highlight and inner bottom shadow are both present.
- Outer drop shadow uses the accent color (not pure black) for a soft, colored lift.
- Border radius is generous (`rounded-2xl` minimum).
- Background gradients go lighter at top, darker at bottom.
- Pressed/active states use `scale` and/or reduced inner shadow.
- Colors are pastel or muted, not neon or pure primary.
- Text is readable on the gradient surface (white for dark clay, dark gray for light clay).

## Anti-Patterns

- Using only outer shadows without inner shadows (looks like a flat card, not clay).
- Using only inner shadows without outer shadows (looks inset, not inflated).
- Sharp corners (clay is round and puffy).
- Pure black outer shadows (breaks the soft colored aesthetic).
- Neon or oversaturated colors (clay is muted and pastel).
- Forgetting the inner top highlight (loses the 3D volume).
- Flat solid colors instead of gradients (gradient is essential for the inflated look).
- Applying claymorphism to long-form content layouts (it works best on controls and compact cards).

## Typography and Density

- Claymorphism favors rounded, friendly sans-serif fonts.
- Primary labels: `text-base` to `text-xl`, `font-semibold` to `font-bold`.
- Secondary/meta: `text-sm` to `text-xs`, `font-medium`.
- Keep padding generous inside clay elements; the volume needs space.
- Avoid thin/light font weights; they look frail inside puffy surfaces.
- Icon sizing: `text-xl` to `text-2xl`, with matching internal padding.

## Accessibility Considerations

- Ensure text contrast meets WCAG AA on gradient surfaces.
- The squish interaction (`active:scale-[0.97]`) must not interfere with keyboard navigation.
- Provide focus rings for interactive clay elements (`focus:ring-2 focus:ring-offset-2`).
- Do not rely on shadow depth alone to convey interactivity.
- Disabled clay elements must be clearly distinguishable, not just subtly flatter.
