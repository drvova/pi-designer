---
name: bauhaus-ui
description: Build Bauhaus UI components (primary color blocks, geometric shapes, functional typography, grid discipline, form-follows-function minimalism) with bold rectangles, circle and triangle motifs, sans-serif type, and De Stijl-inspired composition. Trigger this skill when the user asks for Bauhaus design, geometric modernism, De Stijl UI, primary color blocks, or functionalist design.
---

# Bauhaus UI

Use this skill to design and implement geometric, functionalist interfaces inspired by the Bauhaus movement, using primary colors, bold geometric shapes, disciplined grids, and the principle that form follows function.

## Non-Negotiable Foundations

- Bauhaus design is functionalist: every shape, color, and element must serve a purpose. Decoration for its own sake is rejected.
- The palette is restricted to primary colors: red, blue, yellow, plus black, white, and gray.
- Shapes are fundamental geometry: rectangles, circles, and triangles. These are the building blocks.
- Typography is sans-serif and bold. The Bauhaus pioneered modern type design.
- Grid and composition are disciplined. Asymmetry is used deliberately, not randomly.
- The aesthetic is intellectual, structured, and confident.

## Core Material Recipes

### 1) Primary Color Block Card

The foundational Bauhaus element: a bold color block with clean type.

- Red block: `bg-[#E63946] text-white p-8 rounded-none`
- Blue block: `bg-[#0066CC] text-white p-8 rounded-none`
- Yellow block: `bg-[#FFD500] text-black p-8 rounded-none`
- Black block: `bg-[#1a1a1a] text-white p-8 rounded-none`

### 2) Geometric Composition Card

A card composed of overlapping geometric shapes.

- Container: `bg-white border-4 border-black p-8 relative overflow-hidden`.
- Circle accent: `absolute top-0 right-0 w-32 h-32 rounded-full bg-[#E63946]`.
- Triangle accent: CSS triangle via `border` tricks or SVG.
- Rectangle accent: `absolute bottom-0 left-0 w-1/2 h-4 bg-[#0066CC]`.

### 3) Bauhaus Button

Bold, geometric, no curves (except deliberate circles).

- Primary: `bg-[#E63946] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none hover:bg-black transition-colors`
- Outline: `bg-transparent text-black font-bold uppercase border-4 border-black px-8 py-4 rounded-none hover:bg-black hover:text-white transition-colors`
- Circular: `w-16 h-16 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold hover:bg-[#E63946] transition-colors`

### 4) Bauhaus Grid Layout

Disciplined asymmetry using CSS Grid.

- `grid grid-cols-12 gap-0` (no gap — elements touch, Bauhaus style).
- Large block spans: `col-span-8 bg-[#FFD500] p-12`.
- Small block spans: `col-span-4 bg-black text-white p-6`.
- Elements share borders, not gaps.

### 5) Geometric Divider

- Thick bar: `h-2 bg-[#E63946] w-full`.
- Stacked bars: three `h-1` divs in red, yellow, blue.
- Circle row: `flex gap-0` with circles in primary colors.

## Color Palette System

### Core Bauhaus Palette

| Color | Hex | Symbolic Role |
|---|---|---|
| Red | `#E63946` | Energy, urgency, primary action |
| Blue | `#0066CC` | Stability, calm, information |
| Yellow | `#FFD500` | Optimism, highlight, attention |
| Black | `#1a1a1a` | Structure, text, borders |
| White | `#ffffff` | Space, clarity, background |
| Gray | `#6c757d` | Neutral, secondary, balance |

Rules: Use primary colors for emphasis and categorization. Background is white or off-white. Black is for text, borders, and structural elements. Do not introduce secondary or tertiary colors (no green, orange, purple).

## Typography Recommendations

Bauhaus pioneered modern sans-serif typography:

- Display: Futura, Poppins, or Montserrat (geometric sans-serif, `font-bold` to `font-black`).
- Body: Same family at `font-normal` to `font-medium`.
- Labels: `uppercase tracking-widest font-bold text-sm`.
- Mono (optional): A monospace font for data/labels adds a technical Bauhaus feel.
- Avoid serif fonts entirely. The Bauhaus rejected historical letterforms.
- Typography is bold, geometric, and confident. No thin weights.

## Geometric Shape Vocabulary

The Bauhaus reduces design to three fundamental shapes:

- **Square/Rectangle:** stability, structure, order. Used for cards, containers, text blocks.
- **Circle:** unity, completeness, movement. Used for buttons, badges, decorative accents.
- **Triangle:** direction, tension, dynamism. Used for directional indicators, decorative accents, dividers.

Composition rule: combine these shapes deliberately. A circle intersecting a rectangle creates visual interest. A triangle pointing at text creates direction.

## Component Architecture Pattern

1. White or off-white background (the canvas).
2. Bold color blocks arranged on a disciplined grid (red, blue, yellow, black).
3. Geometric decorative shapes (circles, triangles) as accents.
4. Bold sans-serif typography overlaid on color blocks.
5. Black structural elements (borders, dividers, text).
6. No shadows, no gradients, no textures. Pure flat color and shape.

## Interaction Rules

- Default state: flat, bold, geometric.
- Hover state: color swap (red becomes black, blue becomes red).
  - `hover:bg-black hover:text-white transition-colors duration-150`.
- Active state: invert (white bg, colored text).
- Focus state: thick outline `focus:outline-none focus:ring-4 focus:ring-[#E63946]`.
- Transitions: instant or very fast (`duration-150`). Bauhaus is direct and functional.
- No animations, transforms, or decorative motion. Movement is purely functional (color change).

## Reusable Tailwind Tokens

- Red block: `bg-[#E63946] text-white p-8 rounded-none`
- Blue block: `bg-[#0066CC] text-white p-8 rounded-none`
- Yellow block: `bg-[#FFD500] text-black p-8 rounded-none`
- Black border: `border-4 border-black`
- Bauhaus button: `bg-[#E63946] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-none hover:bg-black transition-colors`
- Grid: `grid grid-cols-12 gap-0`
- Display heading: `text-6xl font-black uppercase tracking-tight`
- Divider: `h-2 bg-[#E63946] w-full`

## Quality Checklist (must pass)

- Color palette is restricted to primaries (red, blue, yellow) plus black, white, gray.
- Shapes are geometric (rectangles, circles, triangles only).
- Typography is bold sans-serif (geometric typeface).
- Corners are sharp (`rounded-none`) except for deliberate circles.
- Layout uses disciplined grid composition with deliberate asymmetry.
- No shadows, no gradients, no textures.
- Borders are thick (`border-2` to `border-4`) and black.
- Color blocks are large and confident.
- The aesthetic is intellectual, structured, and functionalist.
- Every element serves a purpose; no decoration without function.

## Anti-Patterns

- Pastel or muted colors (Bauhaus uses bold primaries).
- Curved or organic shapes (only geometric forms allowed).
- Shadows of any kind (Bauhaus is flat).
- Gradients (Bauhaus uses solid colors only).
- Serif or decorative fonts (only geometric sans-serif).
- Rounded corners (except deliberate full circles).
- Decorative elements without function (form must follow function).
- More than 3 primary colors in one composition (plus black/white).
- Thin borders (borders are structural and thick).
- Random asymmetry (asymmetry is deliberate and balanced).

## Accessibility Considerations

- High contrast between primary color blocks and text is naturally accessible.
- Red text/buttons must include text labels (not color alone) for colorblind users.
- Focus states must be thick and visible (`ring-4`).
- Sharp corners and bold borders aid visual identification of interactive elements.
- The restricted color palette can be difficult for colorblind users; use shapes and text to differentiate elements.
- Ensure touch targets meet minimum 44x44px.
- Geometric clarity helps cognitive accessibility through predictable, structured layouts.
