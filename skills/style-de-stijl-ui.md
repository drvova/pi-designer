---
name: de-stijl-ui
description: Build De Stijl UI components (Mondrian-style primary color blocks, black grid lines, pure geometric abstraction, asymmetric balance) with red/blue/yellow rectangles, thick black borders, and the neoplasticist vocabulary of horizontal and vertical lines. Trigger this skill when the user asks for De Stijl, Mondrian UI, neoplasticism, primary color blocks, or Dutch modernist geometric design.
---

# De Stijl UI

Use this skill to design and implement Mondrian-inspired interfaces with pure primary color blocks (red, blue, yellow), thick black grid lines, white negative space, and the asymmetric balance of Dutch neoplasticist composition.

## Non-Negotiable Foundations

- De Stijl reduces design to its absolute essence: horizontal and vertical lines, primary colors (red, blue, yellow), plus black, white, and gray.
- The grid IS the design. Thick black lines define every space. There are no curves, no diagonals, no organic shapes.
- Color blocks are PURE: no gradients, no tints, no shades. Pure red, pure blue, pure yellow.
- Asymmetry creates dynamic tension. Blocks are different sizes, and the composition feels balanced but never centered.
- The aesthetic is pure abstraction: function and form reduced to the most basic visual vocabulary.
- This is DIFFERENT from Bauhaus: De Stijl is more reductive, purely geometric, and more restrictive in its color palette.

## Core Material Recipes

### 1) Mondrian Grid Container

The foundational layout: a grid of thick black lines creating asymmetric cells.

- Container: `grid grid-cols-12 gap-0`.
- Grid lines: `border-[3px] border-black` on EVERY cell (creates the Mondrian black line grid).
- Cells: some filled with primary color, some white, some gray.
- NO gaps between cells — the borders create the grid lines.

### 2) Primary Color Block

The signature element: a pure primary color rectangle.

- Red: `bg-[#E63946] border-[3px] border-black`.
- Blue: `bg-[#0066CC] border-[3px] border-black`.
- Yellow: `bg-[#FFD500] border-[3px] border-black`.
- White: `bg-white border-[3px] border-black`.
- Gray: `bg-[#d0d0d0] border-[3px] border-black`.

### 3) De Stijl Card / Panel

A card is simply a white or gray block within the grid.

- `bg-white border-[3px] border-black p-8`.
- Content uses the same bold sans-serif typography.
- No shadow, no gradient, no radius. Pure flat color and line.

### 4) De Stijl Button

Bold, geometric button — either a primary color block or outlined.

- Red: `bg-[#E63946] text-white font-bold uppercase tracking-wider px-6 py-3 border-[3px] border-black hover:bg-[#c1121f] transition-colors`.
- Blue: `bg-[#0066CC] text-white font-bold uppercase tracking-wider px-6 py-3 border-[3px] border-black hover:bg-[#0055aa] transition-colors`.
- Outline: `bg-white text-black font-bold uppercase border-[3px] border-black px-6 py-3 hover:bg-black hover:text-white transition-colors`.

### 5) De Stijl Divider

Thick black lines that define spatial relationships.

- Horizontal: `h-[3px] bg-black w-full`.
- Vertical: `w-[3px] bg-black h-full`.
- These are not decorative — they STRUCTURE the composition.

### 6) De Stijl Icon Container

Square color block containing a simple geometric icon.

- `w-12 h-12 bg-[#FFD500] border-[3px] border-black flex items-center justify-center`.
- Icon inside: simple black geometric SVG (square, circle, line — no complex paths).

## Color Palette System

### The ONLY Allowed Colors

| Color | Hex | Role |
|---|---|---|
| Red | `#E63946` | Primary accent, energy |
| Blue | `#0066CC` | Secondary, stability |
| Yellow | `#FFD500` | Highlight, attention |
| Black | `#000000` | Grid lines, text, structure |
| White | `#FFFFFF` | Background, negative space |
| Gray | `#D0D0D0` | Neutral, balance |

Rules: This palette is NON-NEGOTIABLE. No other colors. No tints. No shades. No gradients. Pure flat colors. The restriction IS the design.

## Typography Recommendations

De Stijl typography is bold, geometric, and minimal:

- **Primary:** Futura, Poppins, or Archivo (geometric sans-serif, echoing the De Stijl circle).
- **Weights:** `font-bold` to `font-black`. No light weights.
- **Labels:** `uppercase tracking-widest font-bold text-sm`.
- **Headings:** Large, bold, set against color blocks.
- Avoid serif fonts entirely. De Stijl is purely geometric sans-serif.
- Text should be minimal: short labels, short headings. Let the color blocks speak.

## Component Architecture Pattern

1. Grid container with thick black borders (`border-[3px] border-black` on every cell).
2. Asymmetric arrangement of color blocks (red, blue, yellow, white, gray).
3. Bold sans-serif typography overlaid on white or gray blocks.
4. Primary color buttons on white blocks.
5. Thick black dividers that structure the entire composition.
6. No shadows, no gradients, no textures, no curves.

The composition is a Mondrian painting that happens to be an interface.

## Interaction Rules

- Default state: flat, bold, geometric.
- Hover state: primary color shifts (red to blue, blue to yellow) or inverts.
  - `hover:bg-black hover:text-white transition-colors duration-150`.
- Active state: `active:bg-yellow` (color swaps to another primary).
- Focus state: thick outline `focus:outline-none focus:ring-4 focus:ring-[#E63946]`.
- Transitions: `transition-colors duration-150` (instant, geometric, precise).
- No transforms, no scale, no decorative animation. Color change only.

## Reusable Tailwind Tokens

- Red block: `bg-[#E63946] border-[3px] border-black`
- Blue block: `bg-[#0066CC] border-[3px] border-black`
- Yellow block: `bg-[#FFD500] border-[3px] border-black`
- White block: `bg-white border-[3px] border-black`
- Grid line: `border-[3px] border-black`
- De Stijl button: `bg-[#E63946] text-white font-bold uppercase tracking-wider border-[3px] border-black px-6 py-3 hover:bg-black hover:text-white transition-colors`
- Display heading: `text-6xl font-black tracking-tight`
- Divider: `h-[3px] bg-black`

## Quality Checklist (must pass)

- Grid uses thick black borders (`border-[3px]`) on every cell.
- Color palette is restricted to red, blue, yellow, black, white, gray (NO exceptions).
- Colors are pure flat values (no gradients, no tints, no shades).
- Composition is asymmetric but balanced (not centered, not random).
- No curves, no diagonals, no organic shapes.
- No shadows, no textures, no radius.
- Typography is bold geometric sans-serif.
- Every element is a rectangle (or set of rectangles).
- The aesthetic reads as a Mondrian painting that functions as an interface.
- Grid lines STRUCTURE the composition (they are not decorative).

## Anti-Patterns

- Any color outside the allowed palette (no green, orange, purple).
- Gradients, tints, or shades (De Stijl uses PURE flat colors).
- Curved or rounded shapes (only rectangles allowed).
- Shadows or depth (De Stijl is purely flat).
- Thin borders (borders are thick: `border-[3px]` minimum).
- Centered or symmetrical layouts (asymmetry creates the dynamic tension).
- Decorative elements or illustrations (pure geometry only).
- Serif fonts (only geometric sans-serif).
- Missing black grid lines (the grid IS the structure).
- Light/thin typography (De Stijl is bold and confident).

## Accessibility Considerations

- High contrast between primary colors and text is generally good.
- Red blocks with white text, blue blocks with white text — verify WCAG AA.
- Yellow blocks require dark (black) text for contrast.
- Thick black grid lines aid structural comprehension for low-vision users.
- Focus states must be bold: `focus:ring-4 focus:ring-[#E63946]`.
- The limited palette can be difficult for colorblind users; use text labels alongside color.
- Touch targets: `border-[3px] border-black px-6 py-3` provides adequate size.
- Semantic HTML landmarks (header, nav, main, footer) should map to grid blocks.
