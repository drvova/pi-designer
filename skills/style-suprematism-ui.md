---
name: suprematism-ui
description: Build suprematism UI components (Malevich-inspired pure geometric abstraction, black square on white, floating rectangles, circles, crosses, zero-degree composition) with absolute minimalism, geometric primary forms, and the revolutionary reduction of art to pure feeling. Trigger this skill when the user asks for suprematism, Malevich, pure geometric abstraction, Black Square aesthetic, zero-degree design, or Russian avant-garde non-objective interfaces.
---

# Suprematism UI

Use this skill to design and implement radically reduced interfaces inspired by Kazimir Malevich's Suprematist movement: pure geometric shapes (squares, rectangles, circles, crosses) floating on white void, using absolute minimal color, and reducing design to the zero degree of pure feeling.

## Non-Negotiable Foundations

- Suprematism reduces everything to pure geometric forms on a white void. No representation, no narrative, no decoration — only shapes and their spatial relationships.
- The Black Square is the foundational gesture: a simple black rectangle on white. Every composition descends from this zero point.
- Color palette is severely restricted: black, white, and a few primary accents (red, blue, yellow). Malevich used these sparingly.
- Shapes FLOAT: they are positioned at dynamic angles, overlapping and suspended in infinite white space.
- Composition is asymmetric and dynamic — shapes are placed according to feeling, not grid.
- The aesthetic is revolutionary minimalism: stripping away ALL representation to reach pure visual sensation.

## Core Material Recipes

### 1) White Void Background

The foundational surface: pure white infinity.

- `bg-white` (pure, clean, infinite white space).
- No texture, no pattern, no gradient. The void is empty.

### 2) Black Square Element

The signature suprematist gesture: a simple black square.

- `w-32 h-32 bg-black rotate-[-2deg]` (slightly rotated for dynamic energy).
- This is the foundational form — all other elements are variations.

### 3) Floating Rectangle

Colored rectangle floating at a dynamic angle.

- `w-24 h-8 bg-[#c41e1e] rotate-[15deg] absolute top-1/4 left-1/3` (red bar, angled).
- `w-16 h-16 bg-[#1a3a8a] rotate-[-30deg]` (blue square, tilted).

### 4) Suprematist Circle

A circle suspended in space.

- `w-20 h-20 rounded-full bg-black` (pure black circle).
- `w-12 h-12 rounded-full border-4 border-[#c41e1e]` (outlined red circle).

### 5) Suprematist Cross

Two overlapping rectangles forming a cross.

- `relative w-20 h-20`.
- Vertical: `absolute top-0 left-1/2 -translate-x-1/2 w-6 h-20 bg-[#1a3a8a]`.
- Horizontal: `absolute top-1/2 left-0 -translate-y-1/2 w-20 h-6 bg-[#1a3a8a]`.

### 6) Suprematist Card

Content card that is itself a floating geometric shape.

- `bg-white border-2 border-black p-8 rotate-[1deg] shadow-[8px_8px_0_0_#000]` (hard shadow, slight rotation).
- Alternative: `bg-black text-white p-8 rotate-[-2deg]` (inverted).

### 7) Suprematist Button

Minimal geometric button.

- `bg-black text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#c41e1e] transition-colors`.
- Alternative: outlined `border-4 border-black text-black px-8 py-3 hover:bg-black hover:text-white`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Pure White | `#ffffff` | The void (background) |
| Pure Black | `#000000` | Primary form, text |
| Suprematist Red | `#c41e1e` | Energy accent |
| Suprematist Blue | `#1a3a8a` | Depth accent |
| Suprematist Yellow | `#e8c104` | Light accent |

Rules: White and black are 90% of the design. Red, blue, and yellow appear sparingly as single accents. Never more than ONE accent color per composition.

## Typography Recommendations

- **Display:** Poppins, Futura, or Century Gothic (geometric sans-serif, echoing the reduction to pure form).
- **Body:** Same family at `font-light` (thin, precise, minimal).
- **Labels:** `font-bold uppercase tracking-[0.3em] text-xs` (architectural lettering).
- Typography should be as reduced and geometric as the visual elements.

## Interaction Rules

- Default: floating, geometric, reduced.
- Hover: shapes shift angle slightly or invert color.
  - `hover:rotate-0 transition-all duration-300` (shape straightens on hover).
- Active: `active:bg-black active:text-white`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4`.
- Transitions: `transition-all duration-300` (deliberate, geometric).

## Reusable Tailwind Tokens

- Black square: `bg-black rotate-[-2deg]`.
- Red bar: `bg-[#c41e1e] rotate-[15deg]`.
- Blue circle: `rounded-full bg-[#1a3a8a]`.
- Hard shadow card: `bg-white border-2 border-black shadow-[8px_8px_0_0_#000] rotate-[1deg]`.
- Suprematist button: `bg-black text-white uppercase tracking-widest hover:bg-[#c41e1e]`.

## Quality Checklist

- Background is pure white (the void).
- Shapes are simple geometric forms (squares, rectangles, circles, crosses).
- At least one element is rotated at a dynamic angle.
- Color palette is 90% black and white.
- Maximum ONE accent color (red, blue, or yellow — not all three).
- Composition is asymmetric and dynamic.
- Elements appear to FLOAT in space.
- Typography is geometric sans-serif at its most reduced.
- The aesthetic reads as pure geometric abstraction / Malevich.
- Zero decorative elements — everything is structural form.

## Anti-Patterns

- Decorative patterns, textures, or gradients (suprematism is pure flat color).
- More than one accent color (restrict to ONE: red, blue, or yellow).
- Centered, static, symmetrical composition (suprematism is dynamic and asymmetric).
- Organic or curved forms (only geometric shapes allowed).
- Serif or decorative fonts (suprematism is geometric sans).
- Cluttered or dense layouts (the void IS the composition).
- Rounded corners (use sharp geometric edges).
- Missing the floating quality (shapes must feel suspended in space).
- Representation or narrative imagery (suprematism is non-objective).
- Missing the rotation/dynamic angle (shapes must feel placed by feeling, not grid).

## Accessibility Considerations

- Pure white with black text provides maximum contrast (WCAG AAA).
- Minimal elements reduce cognitive load.
- Focus states: `focus:ring-2 focus:ring-black focus:ring-offset-4` (black ring on white).
- Color should not be sole indicator (include text labels).
- The extreme minimalism aids screen reader navigation (very few elements).
- Touch targets must be adequate despite geometric styling.
- Ensure rotated elements don't create overlapping hit areas.
