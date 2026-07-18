---
name: glassmorphic-ui
description: Build frosted glass UI components (translucent panels, backdrop blur, layered depth, vibrant backdrops) with background blur, gradient borders, noise textures, and floating glass surfaces. Trigger this skill when the user asks for glassmorphism, frosted glass, glass cards, translucent overlays, or blur-based depth interfaces.
---

# Glassmorphic UI

Use this skill to design and implement frosted glass components with translucent surfaces, backdrop blur, and depth through layering over vibrant or gradient backgrounds.

## Non-Negotiable Foundations

- Glassmorphism requires a vibrant or gradient background behind the glass. Without it, frosted surfaces look like flat gray panels.
- Every glass surface uses `backdrop-blur` and a semi-transparent background (`rgba(255,255,255,0.05)` to `0.25` for light glass, `rgba(255,255,255,0.08)` to `0.15` for dark glass).
- Light direction is from the top-left. Border highlights and gradients must reinforce this.
- Layering is the primary depth cue: elements stacked above others communicate hierarchy through opacity, blur, and shadow.
- Border highlights are subtle and gradient-based, never solid 1px borders.

## Core Material Recipes

### 1) Standard Glass Panel (cards, modals, overlays)

The default frosted surface.

- Background: `bg-white/10` (light) or `bg-white/5` (subtle).
- Backdrop blur: `backdrop-blur-xl` (default), `backdrop-blur-2xl` (stronger frost).
- Border (light edge highlight): `border border-white/20`.
- Shadow (depth + ambient color bleed): `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`.
- Full one-liner:
  - `bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]`

### 2) Elevated Glass Panel (floating cards, hero sections)

A glass surface that floats higher, with stronger blur and deeper shadow.

- Background: `bg-white/15`.
- Backdrop blur: `backdrop-blur-2xl`.
- Border: `border border-white/30`.
- Shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)]`.
- Full one-liner:
  - `bg-white/15 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)]`

### 3) Subtle Glass Panel (background panels, section dividers)

A faint glass surface for non-interactive background layering.

- Background: `bg-white/5`.
- Backdrop blur: `backdrop-blur-md`.
- Border: `border border-white/10`.
- Shadow: `shadow-none` or `shadow-[0_2px_8px_rgba(0,0,0,0.05)]`.

### 4) Dark Glass Panel (dark mode glassmorphism)

For dark mode or contrast panels within light interfaces.

- Background: `bg-black/20`.
- Backdrop blur: `backdrop-blur-xl`.
- Border: `border border-white/10`.
- Shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.3)]`.

## Gradient Border Highlight (Advanced)

A 1px gradient border that simulates light catching the glass edge. Use for premium glass cards.

Implementation pattern (pseudo-element approach):

- Wrap glass element in a container with `bg-gradient-to-br from-white/40 to-transparent rounded-[inherit] p-px`.
- Inner element gets the actual glass background and content.
- This creates a gradient ring around the glass edge that fades from light (top-left) to transparent (bottom-right).

## Component Architecture Pattern

1. Vibrant or gradient background (mandatory — gradients, mesh gradients, colorful imagery).
2. Background ambient shapes (blurred color blobs behind glass for visual interest).
3. Standard glass panels (cards, containers).
4. Elevated glass panels (floating content, modals, popovers).
5. Interactive glass elements (buttons, inputs with glass treatment).

This layer order ensures glass surfaces always have something interesting to blur behind them.

## Interaction Rules

- Default state: standard glass opacity and blur.
- Hover state: slightly increased opacity (`bg-white/10 -> bg-white/15`) and a subtle border brightening (`border-white/20 -> border-white/30`).
- Active/pressed state: reduced blur (`backdrop-blur-lg`) and reduced opacity (`bg-white/5`).
- Focus state: add `ring-2 ring-white/30` for keyboard accessibility.
- Transitions: `transition-all duration-300 ease-out`.
- Cursor: `cursor-pointer` for interactive glass surfaces.

## Accent and Color Rules

- Accents should be vibrant and saturated, as they contrast against the muted frosted surface.
- Use gradient accents for primary actions: `bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]`.
- Text on light glass: `text-white` or `text-white/90` (requires a colorful or dark background behind glass).
- Text on dark glass: `text-white` or `text-white/90`.
- Secondary text: `text-white/60` to `text-white/70`.
- Avoid dark text on light glass unless the background behind is very dark; contrast is unreliable.

## Reusable Tailwind Tokens

Light/Dark glass (works on vibrant backgrounds):

- Standard glass: `bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]`
- Elevated glass: `bg-white/15 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)]`
- Subtle glass: `bg-white/5 backdrop-blur-md border border-white/10`
- Dark glass: `bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
- Gradient border wrapper: `bg-gradient-to-br from-white/40 to-transparent`
- Radius: `rounded-2xl` (default), `rounded-3xl` (large panels)
- Text primary: `text-white/90`, Text secondary: `text-white/60`

## Vibrant Background Recipes

Glassmorphism requires vibrant backgrounds. These recipes produce the colors that glass will blur:

- Sunset gradient: `bg-gradient-to-br from-[#ff6b6b] via-[#c44569] to-[#6c5ce7]`
- Ocean gradient: `bg-gradient-to-br from-[#0984e3] via-[#6c5ce7] to-[#00b894]`
- Aurora gradient: `bg-gradient-to-br from-[#a29bfe] via-[#fd79a8] to-[#ffeaa7]`
- Mesh blobs: absolutely positioned `rounded-full blur-3xl opacity-60` divs in different colors scattered behind glass.
- Dark mode vibrant: `bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]`

## Quality Checklist (must pass)

- Background behind glass is vibrant or gradient (not flat gray or white).
- Every glass surface uses `backdrop-blur` (minimum `backdrop-blur-md`).
- Background opacity is between 5% and 25% (too transparent = no frost, too opaque = not glass).
- Borders are semi-transparent white (not solid).
- Text contrast is verified against the worst-case background behind the glass.
- Layering is intentional: elevated panels float above standard panels.
- Shadows add depth without obscuring the translucent quality.
- Interactive states change opacity and border brightness, not just shadow.

## Anti-Patterns

- Flat or solid-color backgrounds behind glass (no frost effect possible).
- Opaque backgrounds on glass panels (`bg-white/80` is not glass, it is a panel).
- Solid borders (`border-gray-200` breaks the glass illusion).
- Dark text on light glass over a light background (unreadable).
- Missing `backdrop-blur` (the defining feature of glassmorphism).
- Over-blurring (`backdrop-blur-3xl` everywhere makes everything look like smudged plastic).
- Too many glass layers stacked without visual hierarchy (muddy appearance).

## Typography and Density

- Glassmorphism favors modern, clean sans-serif fonts.
- Primary labels: `text-lg` to `text-2xl`, `font-medium` to `font-semibold`.
- Secondary/meta: `text-sm` to `text-xs`, `font-normal` to `font-medium`.
- Use `tracking-tight` on large headings for a modern feel.
- Keep icon sizing proportional to text; glass surfaces handle icons well with subtle glows.

## Accessibility Considerations

- Glassmorphism has serious accessibility challenges due to variable contrast. The background behind glass changes what users see through it.
- Always verify text contrast against the darkest and lightest possible background states.
- Do not rely on blur alone to convey hierarchy; include structural depth (shadows, borders).
- Ensure focus indicators are visible (`ring-2 ring-white/30` minimum).
- Consider providing a solid fallback for users with `prefers-reduced-transparency`.
