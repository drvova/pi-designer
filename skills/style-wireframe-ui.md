---
name: wireframe-ui
description: Build wireframe UI components (exposed structural lines, gray-box layouts, placeholder blocks, lorem ipsum, low-fidelity prototyping aesthetic, intentionally unfinished) with dashed borders, X-marked image placeholders, and the honest structural vocabulary of early-stage design. Trigger this skill when the user asks for wireframe design, low-fi UI, placeholder aesthetic, structural prototype, gray-box, or deliberately unfinished interfaces.
---

# Wireframe UI

Use this skill to design and implementation interfaces that embrace the wireframe aesthetic: exposed structural lines, gray-box placeholders, X-marked image areas, lorem ipsum text, dashed borders, and the honest, low-fidelity vocabulary of early-stage design — as a deliberate final aesthetic choice, not a prototype.

## Core Material Recipes

### 1) Gray-Box Placeholder

The foundational wireframe surface.

- `bg-[#e8e8e8] border-2 border-dashed border-[#b0b0b0] rounded-md p-6 flex items-center justify-center`.
- Text: `text-[#a0a0a0] text-sm font-sans text-center` reading "Placeholder" or "Image Area".

### 2) Image Placeholder (X-box)

Classic wireframe image placeholder with diagonal X.

- `relative bg-[#f0f0f0] border border-[#c0c0c0] aspect-video`.
- X lines: two diagonal SVG lines crossing corner-to-corner `stroke="#c0c0c0" stroke-width="1"`.

### 3) Lorem Ipsum Text Block

Faux-content text placeholder.

- `bg-[#e8e8e8] h-3 rounded-sm mb-2` (gray bar = line of text).
- Multiple bars at varying widths: `w-3/4`, `w-full`, `w-5/6` to simulate paragraph.
- Label: `text-[#a0a0a0] text-xs italic` reading "Lorem ipsum dolor sit amet...".

### 4) Wireframe Button

Dashed-border placeholder button.

- `bg-[#f5f5f5] border-2 border-dashed border-[#9a9a9a] text-[#7a7a7a] font-medium text-sm px-6 py-2 rounded-md hover:border-[#5a5a5a] hover:text-[#5a5a5a] transition-colors`.

### 5) Structural Grid Overlay

Visible grid lines showing the layout structure.

- `bg-[linear-gradient(rgba(0,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]`.

### 6) Annotation Label

Designer annotation/callout on elements.

- `absolute -top-6 left-0 text-[#4a8af5] text-xs font-mono` reading "// hero-image" or "// CTA-button".

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Wireframe Gray | `#e8e8e8` | Primary surface |
| Border Gray | `#b0b0b0` | Dashed borders |
| Placeholder Gray | `#f0f0f0` | Image areas |
| Text Gray | `#a0a0a0` | Placeholder text |
| Dark Gray | `#7a7a7a` | Interactive labels |
| Annotation Blue | `#4a8af5` | Annotations, grid |
| White | `#ffffff` | Base background |
| Black | `#1a1a1a` | Actual content (rare) |

Rules: The palette is EXCLUSIVELY grays and white. Blue appears only as annotation/grid overlay. No accent colors, no images, no real content. Everything is a placeholder.

## Typography Recommendations

- **Everything:** Inter, system-ui, or Helvetica (neutral sans-serif).
- **Placeholder text:** `text-[#a0a0a0] text-sm` (gray, clearly placeholder).
- **Annotations:** `font-mono text-xs text-[#4a8af5]` (code-style annotations).
- **Lorem ipsum:** Gray bars simulate text lines, with `italic text-[#a0a0a0]` labels.

## Reusable Tailwind Tokens

- Gray-box: `bg-[#e8e8e8] border-2 border-dashed border-[#b0b0b0] rounded-md`.
- Image X-box: `bg-[#f0f0f0] border border-[#c0c0c0]` with SVG X lines.
- Lorem bar: `bg-[#e8e8e8] h-3 rounded-sm`.
- Wireframe button: `bg-[#f5f5f5] border-2 border-dashed border-[#9a9a9a] text-[#7a7a7a]`.
- Grid overlay: `bg-[linear-gradient(rgba(0,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]`.
- Annotation: `font-mono text-xs text-[#4a8af5]`.

## Quality Checklist

- All surfaces are gray placeholder boxes with dashed borders.
- Image areas use the classic X-diagonal placeholder pattern.
- Text content is simulated with gray bars (not real text).
- At least one "Lorem ipsum" label visible.
- Dashed borders on all interactive elements.
- Grid overlay visible (structural transparency).
- Annotation labels present (code-style comments on elements).
- Color palette is exclusively gray-scale + annotation blue.
- The aesthetic deliberately reads as unfinished/low-fidelity.
- Everything is honest about being a structural placeholder.

## Anti-Patterns

- Real images or content (wireframe is ALL placeholder).
- Bright accent colors (only grays and annotation blue).
- Filled solid borders (use dashed borders for structural honesty).
- Decorative effects or shadows (wireframe is flat and honest).
- Real typography hierarchy (use gray bars to simulate text).
- Rounded beautiful corners (use functional `rounded-md` maximum).
- Gradients or textures (wireframe is completely flat).
- Hover effects beyond border darkening (keep interactions minimal).
- Color-coded sections (everything is gray — sections differ by border style only).
- Missing annotations (code-style labels are part of the aesthetic).

## Accessibility Considerations

- Gray-on-gray provides poor contrast — this is an aesthetic choice, not for production UI.
- Only use wireframe aesthetic for design documentation, concept mockups, or meta-design statements.
- If used for real interfaces, ensure placeholder labels have proper `aria-label`.
- Focus states: `focus:border-[#5a5a5a] focus:text-[#5a5a5a]` (darker border/text on focus).
- The low contrast is a deliberate aesthetic choice — do not use for critical user interfaces.
- Annotation labels should be `aria-hidden="true"` when decorative.
