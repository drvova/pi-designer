---
name: low-poly-ui
description: Build low poly UI components (triangulated geometric facets, flat-shaded polygons, faceted surfaces, origami-like depth, crystalline angularity) with geometric triangulation, faceted color gradients, and the 3D-inspired aesthetic of low-polygon art applied to interfaces. Trigger this skill when the user asks for low poly design, faceted UI, triangulated surfaces, geometric poly art, crystalline interfaces, or origami-inspired angular design.
---

# Low Poly UI

Use this skill to design and implement angular, faceted interfaces inspired by low-polygon 3D art: triangulated geometric facets, flat-shaded polygons, faceted color gradients, crystalline surfaces, and origami-like depth created through geometry rather than curves.

## Non-Negotiable Foundations

- Low poly UI reduces surfaces to TRIANGULATED FACETS: every shape is made of flat triangular polygons with different shades of the same color.
- Depth and form come from FACET SHADING: adjacent triangles use slightly different shades of the base color to simulate light hitting different angles of a surface.
- Colors are flat within each facet (no gradients within a single triangle — depth comes from facet COUNT, not blending).
- The overall composition feels 3D and crystalline, even though it's rendered in 2D CSS.
- Shapes are angular and geometric — no curves, no organic forms. Everything is facets and edges.
- The aesthetic bridges 2D and 3D: it has the depth of 3D but the flatness of illustration.

## Core Material Recipes

### 1) Faceted Background

The signature surface: a triangulated background with varied facet shades.

Using CSS `clip-path` triangles:
```html
<div class="relative w-full h-96 overflow-hidden">
  <div class="absolute inset-0 bg-[#2a5a8a]"></div>
  <!-- Individual facets -->
  <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3a6a9a]" style="clip-path: polygon(0 0, 100% 0, 0 100%)"></div>
  <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1a4a7a]" style="clip-path: polygon(100% 0, 100% 100%, 0 0)"></div>
  <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1a4a7a]" style="clip-path: polygon(0 0, 0 100%, 100% 100%)"></div>
  <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#2a5a8a]" style="clip-path: polygon(0 100%, 100% 100%, 100% 0)"></div>
</div>
```

For complex facets: use an SVG with individual `<polygon>` elements in different shades.

### 2) Low Poly Card

Card with faceted surface using overlapping triangular gradients.

- Base: `bg-[#3a5a7a]`.
- Facet overlay: `bg-[linear-gradient(135deg,#4a6a8a_0%,#4a6a8a_50%,transparent_50%)]` (lighter triangle on one half).
- Border: `border-2 border-[#2a4a6a]` (darker edge defines the polygon outline).
- Shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.

### 3) Low Poly Button

Angular button with faceted shading.

- Primary: `bg-[#3a6a9a] text-white font-bold px-8 py-3 [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] shadow-[4px_4px_0_#2a4a7a] hover:shadow-[2px_2px_0_#2a4a7a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all`.
- The clip-path creates an angular hexagonal shape, and the offset shadow creates facet depth.

### 4) Crystalline Divider

Angular crystalline divider using clip-path.

```html
<div class="h-2 bg-gradient-to-r from-[#3a6a9a] via-[#5a8aba] to-[#3a6a9a]" style="clip-path: polygon(0 50%, 5% 0, 15% 100%, 25% 0, 35% 100%, 45% 0, 55% 100%, 65% 0, 75% 100%, 85% 0, 95% 100%, 100% 50%)"></div>
```

### 5) Faceted Icon Container

Angular geometric container for icons.

- `w-14 h-14 bg-[#3a6a9a] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center text-white`.
- Hexagonal clip-path creates a crystalline shape.

### 6) Origami Shadow

Faceted shadow using multiple offset color blocks (like the fold marks on origami).

- `shadow-[2px_2px_0_#2a4a7a,4px_4px_0_#1a3a6a]` (stepped fold shadows).

## Color Palette System

### Faceted Color Families

Low poly depth comes from SHADE VARIATION within a color family. For each base color, define 4-5 shades:

| Color Family | Darkest | Dark | Base | Light | Lightest |
|---|---|---|---|---|---|
| Blue | `#0a2a4a` | `#1a4a7a` | `#2a5a8a` | `#3a6a9a` | `#5a8aba` |
| Green | `#0a3a1a` | `#1a4a2a` | `#2a5a3a` | `#3a7a4a` | `#5a9a6a` |
| Purple | `#2a0a3a` | `#3a1a5a` | `#4a2a7a` | `#5a3a9a` | `#6a4aba` |
| Orange | `#8a3a0a` | `#c45a1a` | `#e07a3a` | `#f09a5a` | `#fab58a` |
| Teal | `#0a3a3a` | `#1a5a5a` | `#2a7a7a` | `#3a9a9a` | `#5ababa` |

Rules: Choose ONE color family per composition. Create depth using 4-5 shades of that family across different facets. Darker facets simulate shadow; lighter facets simulate light.

## Typography Recommendations

Low poly typography is angular, geometric, and bold:

- **Display headings:** Space Grotesk, Orbitron, or Audiowide (angular geometric sans).
- **Alternative:** Rajdhani, Exo 2 (technical geometric sans).
- **Body:** Inter, DM Sans (clean readable sans).
- **Labels:** `font-bold uppercase tracking-wider` (angular and technical).
- Avoid serif fonts. Low poly is geometric sans-serif.

## Component Architecture Pattern

1. Faceted background (triangulated polygons in varying shades).
2. Low poly cards with facet shading and angular clip-paths.
3. Crystalline angular buttons with offset shadow depth.
4. Hexagonal/diamond faceted icon containers.
5. Origami-style stepped shadow depth.
6. Angular crystalline dividers.
7. Bold geometric typography.

## Interaction Rules

- Default state: angular, faceted, crystalline.
- Hover: facets shift (shadow compresses, like the polygon rotating toward light).
  - `hover:shadow-[2px_2px_0_#2a4a7a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150`.
- Active: `active:shadow-none active:translate-x-[4px] active:translate-y-[4px]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#3a6a9a]`.
- Transitions: `transition-all duration-150` (snappy, angular, mechanical).

## Reusable Tailwind Tokens

- Faceted card: `bg-[#3a5a7a] border-2 border-[#2a4a6a] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Low poly button: `bg-[#3a6a9a] text-white [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)] shadow-[4px_4px_0_#2a4a7a]`
- Hex icon: `[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]`
- Origami shadow: `shadow-[2px_2px_0_#2a4a7a,4px_4px_0_#1a3a6a]`
- Crystalline divider: clip-path with angular zigzag pattern.

## Quality Checklist (must pass)

- Surfaces use faceted/triangulated shading (not smooth gradients).
- At least one clip-path polygon shape is present.
- Depth comes from facet shade variation (darker/lighter triangles of the same hue).
- Shapes are angular and geometric (no curves or organic forms).
- At least one hexagonal or diamond-shaped element.
- Offset/stepped shadows used for depth (not blurred drop shadows).
- Color palette uses 4-5 shades of ONE color family.
- Typography is geometric sans-serif (no serif).
- The aesthetic reads as 3D crystalline low-polygon art.
- Buttons and cards have angular clip-path shapes.

## Anti-Patterns

- Smooth gradients within facets (each facet is a FLAT color).
- Curved or organic shapes (low poly is angular and geometric).
- Blurred drop shadows (use hard offset/stepped shadows for facet depth).
- Using too many color families (stick to ONE family with shade variations).
- Missing clip-path polygon shapes (angular shapes are essential).
- Serif typography (low poly is geometric sans).
- Soft, gentle transitions (motion is angular and mechanical).
- Flat single-shade surfaces (depth requires facet shade variation).
- Rounded corners (use angular clip-paths instead).
- Missing the crystalline/faceted quality (the surface should feel like cut crystal).

## Accessibility Considerations

- Flat facet colors with bold text provide good contrast.
- Darker facets with light text should verify WCAG AA.
- Angular clip-path shapes must not cut off interactive areas.
- Focus states: `focus:ring-2 focus:ring-[#3a6a9a]` (visible against faceted backgrounds).
- Stepped/offset shadows must not interfere with text readability.
- Touch targets must be adequate despite angular clip-path shapes.
- Faceted backgrounds should not reduce text contrast (use solid cards for text).
- `prefers-reduced-motion`: disable shadow compression transitions.
