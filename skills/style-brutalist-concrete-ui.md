---
name: brutalist-concrete-ui
description: Build brutalist concrete UI components (raw exposed concrete, board-formed texture, geometric massing, recessed windows, elevated walkways, unapologetic structural expression) with unadorned concrete surfaces, bold geometric forms, and the honest materiality of béton brut architecture. Trigger this skill when the user asks for concrete brutalism, béton brut, concrete UI, brutalist architecture, board-formed concrete, exposed concrete texture, Le Corbusier style, or raw concrete surfaces.
---

# Brutalist Concrete UI

Use this skill to design and implement raw concrete-inspired interfaces that embody béton brut architecture — board-formed surfaces with visible wood grain, geometric massing of large rectangular modules, deep recessed windows casting honest shadows, elevated walkway accents, form-tie holes as punctuation marks, and the unapologetic structural honesty of Le Corbusier, Tadao Ando, and Louis Kahn.

## Non-Negotiable Foundations

- Concrete is the material truth. Every surface reads as poured, cured, and left unadorned — no polish, no paint, no pretense. The interface should feel like touching a formwork-stripped wall.
- Board-formed texture is essential: horizontal wood grain imprints from timber formwork, subtle striations, and occasional knot marks visible on every surface.
- Form-tie holes are structural punctuation: small circular indentations at regular intervals that become a signature pattern element.
- Color is warm gray, never cool steel. Concrete has earth in it — warm taupe undertones distinguish it from generic gray.
- Geometry is massive and rectangular. Elements are large modules that read as structural blocks — walls, beams, slabs, and cantilevered volumes.
- Depth is expressed through recess: windows are punched deep into the surface, creating shadow zones that define the facade rhythm.
- No rounded corners. Every edge is a formed edge — sharp, deliberate, orthogonal.
- Structural expression is the decoration. Beams, columns, joints, and seams are visible and celebrated, not hidden behind finishes.

## Core Material Recipes

### 1) Concrete Surface

The base material — warm gray with board-grain texture and form-tie holes.

- Warm concrete base: `bg-[#b0a898] text-[#2a2a2a] border border-[#9a9080]`
- Dark concrete (wet or shadowed): `bg-[#6a6a5a] text-[#e8e0d0] border border-[#5a5a4a]`
- Board-formed texture overlay: use `bg-[url('data:image/svg+xml,...')]` with a repeating horizontal line SVG at 2px intervals in `#9a9080` at 8% opacity over the base concrete color
- Form-tie hole pattern: after the base, overlay repeating radial gradients: `bg-[radial-gradient(circle_3px_at_center,#4a4a3a_100%,transparent_100%)] bg-[length:48px_48px]`
- Combined surface: `bg-[#b0a898] bg-[url('data:image/svg+xml,...')] bg-[radial-gradient(circle_3px_at_center,#4a4a3a_100%,transparent_100%)] bg-[length:200px_16px,48px_48px]`

### 2) Concrete Block (Card)

Massive rectangular modules that read as structural volumes.

- Standard block: `bg-[#b0a898] border-2 border-[#9a9080] p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]`
- Recessed block (sunken panel): `bg-[#a09888] border border-[#8a8070] p-6 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]`
- Elevated block (cantilever): `bg-[#b0a898] border-2 border-[#9a9080] p-6 shadow-[4px_4px_0px_#8a8070,8px_8px_0px_rgba(0,0,0,0.1)]`
- Massive hero block: `bg-[#6a6a5a] text-[#e8e0d0] border-2 border-[#5a5a4a] p-8 md:p-12`

### 3) Recessed Window Slot

Deep-punched openings that create shadow and depth — the signature fenestration pattern.

- Standard window: `bg-[#2a2a2a] border border-[#4a4a3a] p-4 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.6),inset_-1px_-1px_3px_rgba(180,170,155,0.08)]`
- Deep recess window: `bg-[#1a1a1a] border-2 border-[#3a3a30] p-6 shadow-[inset_6px_6px_20px_rgba(0,0,0,0.7),inset_-2px_-2px_6px_rgba(180,170,155,0.05)]`
- Narrow slot window: `bg-[#2a2a2a] border border-[#4a4a3a] h-8 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.5)]`
- Window with sky contrast: `bg-[#87CEEB] border-2 border-[#4a4a3a] p-4 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.4)]`

### 4) Elevated Walkway Beam

Horizontal concrete beam accent that creates a strong linear rhythm.

- Walkway beam: `bg-[#9a9080] border-t-2 border-b-2 border-[#8a8070] h-10 shadow-[0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.1)]`
- Perforated walkway: `bg-[#b0a898] border-y-2 border-[#9a9080] h-12 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,#6a6a5a_12px,#6a6a5a_14px)]`
- Railing beam: `bg-[#6a6a5a] h-1 w-full border-t border-[#5a5a4a]`

### 5) Concrete Button

Buttons that feel like stamped or cast concrete elements.

- Primary: `bg-[#6a6a5a] text-[#e8e0d0] font-mono px-6 py-3 border-2 border-[#5a5a4a] hover:bg-[#5a5a4a] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] transition-all duration-150`
- Secondary: `bg-[#b0a898] text-[#2a2a2a] font-mono px-6 py-3 border-2 border-[#9a9080] hover:bg-[#a09888] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] transition-all duration-150`
- Accent (signage red): `bg-[#8a3a2a] text-[#f0e8d0] font-mono px-6 py-3 border-2 border-[#6a2a1a] hover:bg-[#6a2a1a] transition-all duration-150`
- Ghost (stamped): `bg-transparent text-[#6a6a5a] font-mono px-6 py-3 border-2 border-[#6a6a5a] hover:bg-[#6a6a5a] hover:text-[#e8e0d0] transition-all duration-150`

### 6) Concrete Input

Form fields cast into the surface.

- Standard: `bg-[#a09888] border-2 border-[#8a8070] px-4 py-2 font-mono text-[#2a2a2a] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] outline-none focus:border-[#6a6a5a] focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25)] transition-all duration-150`
- Recessed: `bg-[#9a9080] border border-[#8a8070] px-4 py-2 font-mono text-[#2a2a2a] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_rgba(255,255,255,0.06)] outline-none focus:border-[#6a6a5a]`
- Underline only: `bg-transparent border-0 border-b-2 border-[#6a6a5a] px-0 py-1 font-mono text-[#2a2a2a] outline-none focus:border-[#4a4a3a]`

### 7) Structural Joint Line

Visible seams between concrete pours — the honest expression of construction.

- Horizontal joint: `border-t-2 border-[#8a8070] my-4`
- Expansion joint: `border-t-4 border-double border-[#9a9080] my-6`
- Vertical control joint: `border-l-2 border-[#8a8070] h-full mx-4`

## Color Palette System

### Primary Concrete Palette

| Name | Hex | Use |
|---|---|---|
| Concrete Light | `#b0a898` | Primary surface, walls, backgrounds |
| Concrete Medium | `#9a9080` | Board grain marks, borders, mid-tones |
| Concrete Dark | `#6a6a5a` | Structural elements, buttons, beams |
| Form-Tie Hole | `#4a4a3a` | Tie holes, deep accents, punctuation marks |
| Shadow Deep | `#2a2a2a` | Recessed windows, deep shadows, text on light |
| Warm White | `#e8e0d0` | Text on dark concrete, highlights |

### Accent and Context Palette

| Name | Hex | Use |
|---|---|---|
| Sky Contrast Blue | `#87CEEB` | Window glass, sky reflections, occasional accent |
| Signage Red | `#8a3a2a` | Call-to-action, wayfinding, emergency accents |
| Signage Red Dark | `#6a2a1a` | Button hover for red accent |
| Brick Base | `#8a4a3a` | Foundation elements, ground-level accents |
| Oxidized Green | `#4a6a4a` | Copper patina references, vegetation accents |

### Functional Palette

| Name | Hex | Use |
|---|---|---|
| Success Green | `#4a7a4a` | Positive states, confirmations |
| Warning Amber | `#8a7a3a` | Caution states, attention needed |
| Error Red | `#7a2a2a` | Error states, destructive actions |
| Info Blue | `#3a5a7a` | Informational states, links |
| Disabled Gray | `#c0b8a8` | Inactive elements, 40% opacity overlay |

### Concrete Color Rules

- Warm gray family dominates: always choose warm over cool grays. Concrete has earth tones — taupe, sand, ochre undertones.
- Sky blue appears only in windows, glass, and sky reflections — never as a general accent.
- Signage red is sparse and purposeful — one or two instances per view maximum, like painted signage on a building.
- Shadows are expressed through darker concrete tones, never through `opacity` or CSS `box-shadow` with rgba transparency.
- No pure white and no pure black anywhere in the palette — concrete is always warm-toned.

## Typography Hierarchy

Brutalist concrete uses monospace fonts for technical precision, with occasional slab serif for monumental headings.

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero title | `font-mono` or `font-serif` | `text-5xl` to `text-7xl` | `font-black` | Uppercase, massive, structural |
| Section title | `font-mono` | `text-2xl` to `text-3xl` | `font-bold` | Uppercase, spaced |
| Block title | `font-mono` | `text-xl` | `font-bold` | |
| Body text | `font-mono` | `text-base` to `text-lg` | `font-normal` | High contrast on concrete |
| Label/metadata | `font-mono` | `text-xs` to `text-sm` | `font-bold uppercase tracking-widest` | Form-tie-hole rhythm |
| Caption | `font-mono` | `text-xs` | `font-normal` | Recessed window style |
| Structural text | `font-mono` | `text-xs` | `font-bold uppercase tracking-[0.3em]` | Etched into beam elements |

Rules:
- Primary font: JetBrains Mono, IBM Plex Mono, or Space Mono (`font-mono`).
- Optional display font for monumental headings: a heavy slab serif such as Rockwell or Courier Prime Bold — but only for hero-level text.
- Uppercase for all labels and structural text: `uppercase tracking-widest`.
- Letter spacing is generous on labels: `tracking-[0.2em]` to `tracking-[0.4em]`.
- Line height is tight for concrete density: `leading-tight` for headings, `leading-relaxed` for body.
- Text color on light concrete: `#2a2a2a` (never pure black).
- Text color on dark concrete: `#e8e0d0` (never pure white).

## Layout System

Brutalist concrete favors massive, orthogonal grids that express structural mass.

- Grid system: large modules in a rigid grid — `grid grid-cols-1 md:grid-cols-12 gap-0` with no gaps (concrete pours touch).
- Visible joints between grid items: each cell has a border that acts as a construction joint — `border border-[#9a9080]`.
- Modular rhythm: elements align to a 48px baseline grid (matching the form-tie hole spacing).
- Full-bleed surfaces: concrete walls extend edge to edge — `w-full` with no border-radius.
- Recessed sections use inset shadows to express depth: `shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)]`.
- Vertical stacking reads as floor plates; horizontal stacking reads as structural bays.
- The walkway beam pattern (`h-10 bg-[#9a9080]`) separates major sections like floor slabs.
- Content is left-aligned by default. Center alignment is reserved for monumental inscriptions.

## Component Architecture Pattern

1. Concrete base surface with warm gray background and optional board-form texture.
2. Massive rectangular grid modules with visible construction joints.
3. Recessed window slots for content areas (deep inset shadows).
4. Elevated walkway beams separating major sections.
5. Form-tie hole pattern as subtle texture or decorative punctuation.
6. Structural buttons stamped into the surface.
7. Accent elements in signage red or sky blue — sparse and purposeful.

The structure is the architecture. Formwork marks and tie holes are the ornament.

## Interaction Rules

- Default state: heavy, solid, structural — like a cured concrete wall.
- Hover state: surface darkens slightly (`bg-[#a09888]`) and gains an inset shadow (`shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]`) as if pressed into the surface.
- Active state: deeper press — `bg-[#9a9080] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)]`.
- Focus state: `focus:border-[#4a4a3a] focus:shadow-[0_0_0_2px_#4a4a3a]` — a dark concrete ring.
- Transitions: slow and heavy, like concrete settling — `transition-all duration-300`.
- No bouncing, no spring physics. Concrete does not bounce. Movement is weighty and deliberate.
- Hover elevation for cantilevered blocks: `hover:shadow-[6px_6px_0px_#8a8070]` — the block lifts slightly.
- Scroll behavior: `scroll-behavior: smooth` for anchor links, but no parallax or scroll-triggered animations.

## Reusable Tailwind Tokens

### Concrete Surface Tokens

- Light surface: `bg-[#b0a898] text-[#2a2a2a]`
- Medium surface: `bg-[#9a9080] text-[#2a2a2a]`
- Dark surface: `bg-[#6a6a5a] text-[#e8e0d0]`
- Deep surface: `bg-[#4a4a3a] text-[#e8e0d0]`
- Recessed surface: `bg-[#a09888] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.25)]`
- Board-form texture: `bg-[#b0a898] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(154,144,128,0.08)_3px,rgba(154,144,128,0.08)_4px)]`

### Concrete Border Tokens

- Construction joint: `border border-[#9a9080]`
- Structural joint: `border-2 border-[#6a6a5a]`
- Deep joint: `border-2 border-[#4a4a3a]`
- Expansion joint: `border-t-4 border-double border-[#9a9080]`
- Recessed edge: `border border-[#8a8070] shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]`

### Concrete Button Tokens

- Primary: `bg-[#6a6a5a] text-[#e8e0d0] font-mono px-6 py-3 border-2 border-[#5a5a4a] hover:bg-[#5a5a4a] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]`
- Secondary: `bg-[#b0a898] text-[#2a2a2a] font-mono px-6 py-3 border-2 border-[#9a9080] hover:bg-[#a09888]`
- Accent: `bg-[#8a3a2a] text-[#f0e8d0] font-mono px-6 py-3 border-2 border-[#6a2a1a] hover:bg-[#6a2a1a]`

### Concrete Shadow Tokens

- Subtle: `shadow-[0_2px_4px_rgba(0,0,0,0.1)]`
- Medium: `shadow-[0_4px_8px_rgba(0,0,0,0.15)]`
- Heavy: `shadow-[0_8px_16px_rgba(0,0,0,0.2)]`
- Cantilever: `shadow-[4px_4px_0px_#8a8070,8px_8px_0px_rgba(0,0,0,0.1)]`
- Recessed: `shadow-[inset_4px_4px_12px_rgba(0,0,0,0.25)]`
- Deep recess: `shadow-[inset_6px_6px_20px_rgba(0,0,0,0.35)]`

### Form-Tie Hole Pattern Token

- Standard spacing: `bg-[radial-gradient(circle_3px_at_center,#4a4a3a_100%,transparent_100%)] bg-[length:48px_48px]`
- Dense spacing: `bg-[radial-gradient(circle_2.5px_at_center,#4a4a3a_100%,transparent_100%)] bg-[length:32px_32px]`
- Horizontal line: `bg-[radial-gradient(circle_2px_at_center,#4a4a3a_100%,transparent_100%)] bg-[length:48px_24px]`

## Quality Checklist (must pass)

- All surfaces are warm gray, never cool gray or neutral gray.
- Board-form texture is present on at least primary surfaces (horizontal grain lines).
- Form-tie holes appear as subtle pattern accents on large surfaces or as decorative elements.
- No rounded corners anywhere — every edge is a formed edge.
- Recessed windows have visible inset shadows that read as depth.
- Walkway beam separators divide major sections with horizontal structural rhythm.
- Typography is monospace throughout, with uppercase structural labels.
- Grid layout is rigid and orthogonal with visible construction joints.
- Buttons feel stamped or cast — pressed into the surface on interaction.
- Color accents are sparse: sky blue for windows/glass, signage red for wayfinding.
- Shadows are structural (inset for recess, offset for elevation), never decorative.
- Text contrast meets WCAG AA on every concrete surface.
- The interface reads as a building facade — massive, honest, material.

## Anti-Patterns

- Cool grays or blue-grays that read as steel rather than concrete (concrete has warm earth undertones).
- Rounded corners (concrete is formed, not shaped — edges are sharp and orthogonal).
- Smooth gradients across surfaces (concrete pours have flat, uniform color with subtle board-form texture).
- Pure black text or pure white text (concrete is never that stark — use warm equivalents).
- Thin or delicate typography (concrete demands weight and presence — use bold/heavy weights).
- Floating or overlapping elements (concrete is massive — elements sit in grid cells, they do not float).
- Decorative shadows with colored rgba values (concrete shadows are deeper gray, always darker than the base surface).
- More than two accent colors per view (signage red and sky blue maximum — like a real building).
- Animation-heavy interactions (concrete is static and weighty — transitions are slow and deliberate).
- Glass morphism or frosted effects (concrete is opaque, dense, and honest — no transparency tricks).
- Texture patterns that read as wallpaper (board-form is a construction artifact, not decoration).
- Attempting to make concrete look "modern" or "clean" — the raw, imperfect, board-marked surface is the point.

## Accessibility Considerations

- Warm gray text on light concrete (`#2a2a2a` on `#b0a898`) provides approximately 4.5:1 contrast ratio, meeting WCAG AA.
- Dark concrete with light text (`#e8e0d0` on `#6a6a5a`) provides approximately 5.2:1 contrast ratio, meeting WCAG AA.
- Recessed window slots with dark backgrounds require light text (`#e8e0d0` on `#2a2a2a`) for 12:1+ contrast.
- Form-tie hole patterns are decorative only and must be implemented as `aria-hidden="true"` backgrounds.
- Board-form texture overlays must use `pointer-events-none` and `aria-hidden="true"` so they do not interfere with interaction.
- Focus states must be high-contrast and visible: use `focus:outline-none focus:ring-2 focus:ring-[#4a4a3a]` for concrete-styled focus rings.
- Inset shadows on interactive elements must not reduce perceived contrast below WCAG AA thresholds.
- Signage red on concrete (`#8a3a2a` on `#b0a898`) must be verified for contrast; supplement with text labels or icons for status communication.
- Grid-based layout with semantic HTML (`<section>`, `<article>`, `<header>`, `<nav>`) ensures screen reader navigability.
- The monospace font is legible at small sizes, but ensure minimum 14px for body text on concrete surfaces due to the textured background.
- Do not use color alone to indicate state — pair red/green indicators with text labels (e.g., "Error" next to red, "Active" next to green).
- Reduced motion: replace hover elevation effects with simple border changes for users who prefer reduced motion (`prefers-reduced-motion: reduce`).
