---
name: neumorphic-ui
description: Build soft neumorphic UI components (extruded and inset surfaces, monochromatic depth, dual-light shadows) with single-source background colors, paired light/dark shadows, and tactile press interactions. Trigger this skill when the user asks for neumorphic, soft UI, extruded buttons, inset wells, or monochrome tactile interfaces.
---

# Neumorphic UI

Use this skill to design and implement soft, monochromatic neumorphic components with believable extruded/inset surfaces and consistent dual-light shadowing.

## Non-Negotiable Foundations

- The background color and the component surface color MUST be the same. This is the core principle of neumorphism: the element appears extruded from or pressed into the background.
- Light comes from the top-left by convention. Every shadow pair must reinforce this.
- Neumorphism is monochromatic. Do not introduce hue shifts for depth; use only lighter and darker shades of the background color.
- Recommended background range: `#e0e0e0` to `#f0f0f0` (light mode) or `#2a2d3a` to `#313443` (dark mode).

## Core Material Recipes

### 1) Extruded / Raised Surface (default buttons, cards, controls)

The element looks pushed out from the background.

- Background: matches scene background exactly (e.g., `bg-[#e0e0e0]`).
- Dual-light shadow recipe (dark shadow bottom-right, light shadow top-left):
  - `shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff]`
- Soft variant (gentler extrusion):
  - `shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#f5f5f5]`
- Large/focal element variant (stronger extrusion):
  - `shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]`

### 2) Inset / Pressed Surface (wells, tracks, active states, inputs)

The element looks carved into the background.

- Background: matches scene background exactly.
- Inset shadow recipe (light shadow bottom-right, dark shadow top-left):
  - `shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff]`
- Soft inset variant:
  - `shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#f5f5f5]`

### 3) Flat Neumorphic Surface (static cards, dividers)

A neutral surface that is neither raised nor inset. Useful for background panels behind extruded elements.

- Background: matches scene background.
- Shadow: `shadow-none` or a very faint single-direction shadow.
- Use as a stage for placing raised/inset children.

## Calculating Shadow Colors

Shadow colors are derived from the background. Use this formula:

- Dark shadow: background color darkened by ~12-15%.
- Light shadow: background color lightened to near-white (or pure white for light backgrounds, slightly lighter for dark backgrounds).

Examples by background:

| Background | Dark Shadow | Light Shadow |
|---|---|---|
| `#e0e0e0` | `#b8b8b8` | `#ffffff` |
| `#efefef` | `#c8c8c8` | `#ffffff` |
| `#2d3142` | `#22252e` | `#383c50` |
| `#313443` | `#252733` | `#3d4154` |

## Component Architecture Pattern

1. Scene background (monochromatic base color).
2. Optional flat stage panel (same color, no shadow).
3. Extruded child elements (buttons, cards, knobs).
4. Inset child elements (input wells, sliders, progress tracks).
5. Accent details (icons, text) using colors that contrast with the monochrome surface.

This layer order creates the soft tactile depth neumorphism is known for.

## Interaction Rules

- Default state: extruded (raised shadow pair).
- Hover state: slightly reduced extrusion (`shadow-[4px_4px_8px_.., -4px_-4px_8px_..]`).
- Active/pressed state: inset (flip to inset shadows). This is the signature neumorphic press interaction.
- Disabled state: flatten shadow to `shadow-none` and reduce text opacity.
- Transitions: use `transition-all duration-200` for smooth press and release.
- Border radius: neumorphism works best with `rounded-xl` to `rounded-3xl`. Sharp corners break the soft aesthetic.

## Accent and Color Rules

- Accents (icons, active toggles, highlights) are the ONLY place color appears.
- Use a single accent hue for interactive states (e.g., a blue or purple for active toggles).
- Keep accent saturation moderate; neon accents clash with soft surfaces.
- Text color should be a muted dark gray on light backgrounds (`#4a4a4a` to `#666`), or muted light gray on dark backgrounds.

## Reusable Tailwind Tokens

Light mode defaults:

- Scene bg: `bg-[#e0e0e0]`
- Extruded: `shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff]`
- Extruded soft: `shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#f5f5f5]`
- Inset: `shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff]`
- Inset soft: `shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#f5f5f5]`
- Radius: `rounded-2xl` (default), `rounded-3xl` (large cards)
- Text: `text-[#555]` (primary), `text-[#888]` (secondary)

Dark mode defaults:

- Scene bg: `bg-[#2d3142]`
- Extruded: `shadow-[6px_6px_12px_#22252e,-6px_-6px_12px_#383c50]`
- Inset: `shadow-[inset_6px_6px_12px_#22252e,inset_-6px_-6px_12px_#383c50]`
- Text: `text-[#a0a3b8]` (primary), `text-[#6c6f85]` (secondary)

## Quality Checklist (must pass)

- Background and surface colors are identical (no visible border or background mismatch).
- Dual-light shadows use the correct direction (dark bottom-right, light top-left for raised).
- Inset elements have reversed shadow direction (dark top-left inset, light bottom-right inset).
- Pressed/active states flip to inset.
- Border radius is generous (no sharp corners).
- Color is reserved for accents only; the surface itself is monochromatic.
- Text contrast is sufficient but muted (no pure black on light, no pure white on dark).

## Anti-Patterns

- Using a border to define edges (neumorphism relies entirely on shadows, not borders).
- Background color different from surface color (breaks the extruded illusion).
- Single-direction shadows (neumorphism requires the dual-light pair).
- Sharp corners or thin elements (shadows have no room to render).
- Over-saturated accent colors that fight the soft aesthetic.
- Applying neumorphism to text-heavy or data-dense layouts (it excels on controls, not content).
- Using `box-shadow` without `inset` on pressed states (pressed must look carved in, not raised).

## Typography and Density

- Neumorphism favors clean sans-serif fonts with moderate weight.
- Primary labels: `text-base` to `text-xl`, `font-medium` to `font-semibold`.
- Secondary/meta: `text-sm` to `text-xs`, `font-normal`.
- Avoid thin/light font weights on neumorphic surfaces; they get swallowed by shadows.
- Keep icon size moderate (`text-xl` to `text-2xl`); oversized icons dominate the soft surface.

## Accessibility Considerations

- Neumorphism has inherent contrast challenges. Ensure text meets WCAG AA (4.5:1 for body text).
- Do not rely on shadow alone to convey interactivity; include focus rings for keyboard navigation.
- Disabled states must be clearly distinguishable, not just subtly flatter.
- Provide sufficient padding inside extruded elements so shadows do not clip content.
