---
name: brutalist-ui
description: Build brutalist UI components (raw, unstyled HTML aesthetics, monospace typography, harsh borders, default browser styles, stark contrast) with deliberate ugliness, visible structure, and anti-design philosophy. Trigger this skill when the user asks for brutalism, brutalist UI, raw HTML design, anti-design, or unstyled interfaces.
---

# Brutalist UI

Use this skill to design and implement raw, stark, deliberately unpolished interfaces that embrace default browser aesthetics, monospace typography, and harsh structural honesty.

## Non-Negotiable Foundations

- Brutalism rejects decoration. The interface should look like raw, unstyled HTML — or styled to emphasize structure over polish.
- Typography is monospace or default system fonts. No custom web fonts unless they are monospace.
- Color is stark: black, white, and optionally one harsh accent. No gradients, no subtlety.
- Borders are harsh and structural: thick black lines, table-like layouts, visible grid lines.
- Layout is rigid and grid-based. Elements do not float or overlap; they sit in a strict structure.
- There is no skeuomorphism, no rounded corners (unless default browser radius), and no shadows.

## Core Material Recipes

### 1) Raw Surface

The brutalist surface is the default browser background — plain white, plain black, or a harsh solid color.

- Light mode: `bg-white text-black border-2 border-black`
- Dark mode: `bg-black text-white border-2 border-white`
- Harsh accent surface: `bg-[#00ff00] text-black border-2 border-black` (or `#ff0000`, `#0000ff`, `#ffff00`).

### 2) Brutalist Button

Buttons look like raw HTML buttons or harsh outlined boxes.

- Primary: `bg-black text-white font-mono px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-colors`
- Secondary: `bg-white text-black font-mono px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors`
- Link button: `text-black underline font-mono hover:bg-[#ffff00]`
- Raw HTML button (maximum brutalism): use a native `<button>` with minimal styling, relying on browser defaults.

### 3) Brutalist Card

Cards are structural boxes with harsh borders. No rounded corners, no shadows.

- Standard: `bg-white border-2 border-black p-4 font-mono`
- Inverted: `bg-black text-white border-2 border-white p-4 font-mono`
- Accent: `bg-[#00ff00] border-2 border-black p-4 font-mono`

### 4) Brutalist Input

Inputs look like raw form fields with visible borders.

- Standard: `bg-white border-2 border-black px-2 py-1 font-mono text-base outline-none focus:bg-[#ffff00]`
- Underline only: `bg-transparent border-0 border-b-2 border-black px-0 py-1 font-mono outline-none`

## Typography Hierarchy

Brutalism uses monospace fonts exclusively. Hierarchy comes from size and weight, not font family changes.

| Element | Size | Weight | Notes |
|---|---|---|---|
| Page title | `text-4xl` to `text-6xl` | `font-bold` | Often uppercase |
| Section title | `text-xl` to `text-2xl` | `font-bold` | |
| Body | `text-base` to `text-lg` | `font-normal` | Monospace |
| Meta/label | `text-xs` to `text-sm` | `font-bold` | Often uppercase, underlined |
| Code/data | `text-sm` | `font-mono` | Natural fit for brutalism |

Rules:
- Use a single monospace font family throughout: JetBrains Mono, Courier New, or system mono.
- Uppercase for labels and navigation: `uppercase tracking-wide`.
- Underline for links: `underline` — no color change needed, the underline is the link indicator.
- Do not use letter-spacing tricks beyond `tracking-wide` for labels.

## Color System

Brutalism uses the harshest, most basic colors:

### Standard Palette

- `#000000` (black)
- `#ffffff` (white)
- `#00ff00` (pure green — classic terminal accent)
- `#ff0000` (pure red — error/danger accent)
- `#0000ff` (pure blue — link accent)
- `#ffff00` (pure yellow — highlight/hover accent)

### Extended Palette (use sparingly)

- `#ff00ff` (magenta)
- `#00ffff` (cyan)
- `#ffa500` (orange)
- `#808080` (gray — for disabled or secondary elements)

Rules:
- No gradients. Ever.
- No opacity/transparency. Colors are fully opaque.
- One accent color per view (green for terminal feel, yellow for highlight, red for danger).
- Background is always solid black or solid white.
- Text is always the inverse of the background.

## Layout System

Brutalism favors rigid, grid-based layouts that expose structure.

- Use CSS Grid or table-like layouts: `grid grid-cols-[200px_1fr] gap-0`.
- Borders between sections are visible and thick: `border-2 border-black`.
- No gap-based spacing with rounded cards; elements touch each other with visible dividers.
- Full-width elements: `w-full` on inputs, buttons, and content areas.
- No max-width constraints unless deliberately constraining to a terminal-like width (`max-w-3xl`).
- Content is left-aligned by default. Center alignment is rare and deliberate.

## Component Architecture Pattern

1. Stark background (solid black or white).
2. Rigid grid structure (visible borders between sections).
3. Monospace typography hierarchy.
4. Harsh-bordered interactive elements.
5. Optional accent color (one only: green, yellow, or red).

Structure over decoration. The grid itself is the design.

## Interaction Rules

- Default state: harsh, flat, structural.
- Hover state: color inversion (black bg becomes white, white becomes black) or harsh accent fill (`bg-[#ffff00]`).
- Active state: same as hover or fully inverted.
- Focus state: `focus:bg-[#ffff00]` or thick outline `focus:outline-none focus:ring-4 focus:ring-[#0000ff]`.
- Transitions: minimal or none. `transition-colors duration-0` or instant color flips.
- No animations, no transforms, no scale effects. Brutalism is instant and stark.

## Reusable Tailwind Tokens

Light mode:

- Surface: `bg-white text-black`
- Border: `border-2 border-black`
- Button: `bg-black text-white font-mono px-4 py-2 border-2 border-black hover:bg-white hover:text-black`
- Input: `bg-white border-2 border-black px-2 py-1 font-mono outline-none focus:bg-[#ffff00]`
- Card: `bg-white border-2 border-black p-4 font-mono`

Dark mode:

- Surface: `bg-black text-white`
- Border: `border-2 border-white`
- Button: `bg-white text-black font-mono px-4 py-2 border-2 border-white hover:bg-black hover:text-white`
- Input: `bg-black border-2 border-white px-2 py-1 font-mono outline-none focus:bg-[#00ff00]`
- Card: `bg-black text-white border-2 border-white p-4 font-mono`

## Quality Checklist (must pass)

- Typography is monospace throughout.
- Colors are stark: black, white, and optionally one pure accent.
- Borders are thick (`border-2`) and structural.
- No rounded corners (unless using `rounded-none` explicitly).
- No shadows, no gradients, no opacity.
- Layout is rigid and grid-based with visible structural borders.
- Hover states use color inversion or harsh accent fills.
- Transitions are instant or minimal.
- The interface looks raw and unpolished by design.

## Anti-Patterns

- Using decorative fonts or non-monospace fonts (breaks the raw aesthetic).
- Gradients or smooth color transitions (brutalism is instant and stark).
- Rounded corners (use sharp corners only).
- Shadows of any kind (brutalism is flat).
- Opacity or transparency (colors are fully opaque).
- Subtle hover effects (hover should be a harsh, obvious state change).
- More than one accent color (keep it to one).
- Decorative patterns or textures (structure is the decoration).
- Animations or transforms (brutalism is static and instant).
- Trying to make brutalism "pretty" (the rawness is the point).

## Typography Recommendations

- Monospace: JetBrains Mono, Space Mono, Courier Prime, IBM Plex Mono, or system mono (`font-mono`).
- Default browser font: For maximum brutalism, use no font-family override at all and let the browser default render.
- Do not use: Inter, SF Pro, or any polished sans-serif. These break the brutalist aesthetic.

## Accessibility Considerations

- Brutalism's high contrast (black/white) is naturally accessible for text contrast.
- Monospace fonts are highly legible at small sizes.
- Hover states that invert colors must maintain text contrast.
- Focus states must be harsh and obvious (`bg-[#ffff00]` or thick blue ring).
- The rigid grid layout is predictable for screen readers if semantic HTML is used.
- Avoid using color alone for status (red for error, green for success) — include text labels.
- The stark aesthetic can be harsh for prolonged reading; use for dashboards, tools, and utilities, not long-form content.
