---
name: origami-garden-ui
description: Build origami garden UI components (folded paper flower, paper crane, folded leaf, paper stream, geometric petal, fold crease, garden arrangement) with precise paper fold geometry, crisp edges, and the meditative beauty of an origami garden. Trigger this skill when the user asks for origami garden design, paper garden UI, folded flower interface, paper crane layout, botanical origami, petal fold components, or garden arrangement panels.
---

# Origami Garden UI

Use this skill to design and implement serene, botanically-inspired interfaces that combine origami paper folding with garden motifs: folded paper flowers with geometric petal shapes, paper crane accents, angular leaf forms, flowing paper stream ribbons, dashed fold crease lines, and garden arrangement layouts that evoke the meditative calm of a carefully tended origami garden.

## Non-Negotiable Foundations

- Origami Garden UI extends origami's folded paper language into botanical forms: flowers, leaves, cranes, and flowing ribbons, all constructed from angular paper-fold geometry.
- Every organic shape (petal, leaf, stem) must be rendered as folded paper — angular, faceted, and creased, never soft or rounded.
- Fold crease lines are the signature texture: thin dashed lines across petal surfaces, leaf faces, and crane bodies indicating where the paper was folded.
- Shadows are hard-edged fold shadows cast by overlapping paper layers, never soft blur shadows.
- The palette draws from traditional origami paper colors: paper red, paper white, paper blue, paper green, paper yellow, paper pink, with garden earth tones as grounding neutrals.
- Depth comes from layered folded elements stacked atop each other, each casting a precise rectangular shadow on the layer below.
- The garden arrangement is spatial: elements are placed in a loose organic grid suggesting a garden bed, with negative space between folded botanical elements.
- Everything should feel hand-placed, deliberate, and meditative — like an origami garden arranged on a tatami mat.

## Core Material Recipes

### 1) Folded Paper Flower

Geometric petal shapes radiating from a center point, each petal a folded triangle or diamond.

```html
<svg viewBox="0 0 120 120" class="w-24 h-24">
  <g fill="none" stroke="#c44040" stroke-width="0.75">
    <!-- Petal 1 -->
    <path d="M60,60 L45,25 L60,15 L75,25 Z" fill="#c44040" opacity="0.85"/>
    <line x1="60" y1="15" x2="60" y2="60" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Petal 2 -->
    <path d="M60,60 L90,40 L100,55 L85,65 Z" fill="#f0b0c0" opacity="0.85"/>
    <line x1="100" y1="55" x2="60" y2="60" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Petal 3 -->
    <path d="M60,60 L85,85 L75,100 L60,85 Z" fill="#c44040" opacity="0.85"/>
    <line x1="75" y1="100" x2="60" y2="60" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Petal 4 -->
    <path d="M60,60 L35,85 L25,100 L40,85 Z" fill="#f0b0c0" opacity="0.85"/>
    <line x1="25" y1="100" x2="60" y2="60" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Petal 5 -->
    <path d="M60,60 L20,55 L30,40 L45,50 Z" fill="#c44040" opacity="0.85"/>
    <line x1="20" y1="55" x2="60" y2="60" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Center -->
    <circle cx="60" cy="60" r="4" fill="#f0d040"/>
  </g>
</svg>
```

- Each petal is a folded quadrilateral (not an ellipse).
- Alternating petals use primary color and a lighter tint (paper red + paper pink).
- Dashed crease lines run from petal tip to center on every petal.
- Center is a small folded diamond or circle in paper yellow.

### 2) Paper Crane Accent

Classic origami crane silhouette adapted for the garden context — positioned as if resting on a branch or hovering above flowers.

```html
<svg viewBox="0 0 80 60" class="w-20 h-15">
  <g fill="none" stroke="#4a6aaa" stroke-width="0.75">
    <!-- Body -->
    <path d="M10,35 L40,10 L70,35 L40,28 Z" fill="#4a6aaa" opacity="0.9"/>
    <!-- Wing fold -->
    <path d="M40,10 L40,28" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Tail -->
    <path d="M10,35 L2,48" stroke-width="0.75"/>
    <path d="M10,35 L15,48" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Neck and head -->
    <path d="M70,35 L78,28 L72,22" stroke-width="0.75"/>
    <!-- Fold creases on body -->
    <path d="M20,25 L40,10" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="1.5,1.5"/>
    <path d="M60,25 L40,10" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="1.5,1.5"/>
  </g>
</svg>
```

- Classic crane proportions: wide diamond body, angular wings, thin neck and tail.
- Paper blue as primary color with fold crease lines in fold shadow gray.
- Positioned in garden compositions as accent elements, not dominant.

### 3) Folded Leaf

Angular leaf shape constructed from folded paper with a central vein crease and angular edge folds.

```html
<svg viewBox="0 0 60 100" class="w-12 h-20">
  <g fill="none" stroke="#4a8a4a" stroke-width="0.75">
    <!-- Leaf body - angular folded shape -->
    <path d="M30,5 L50,35 L45,70 L30,95 L15,70 L10,35 Z" fill="#4a8a4a" opacity="0.85"/>
    <!-- Central vein crease -->
    <line x1="30" y1="5" x2="30" y2="95" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="3,2"/>
    <!-- Side vein folds -->
    <line x1="30" y1="35" x2="50" y2="35" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="30" y1="35" x2="10" y2="35" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="30" y1="60" x2="45" y2="60" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="30" y1="60" x2="15" y2="60" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <!-- Fold at tip -->
    <path d="M30,5 L35,12 L30,15 L25,12 Z" fill="#4a8a4a" opacity="0.7" stroke="#d0d0d0" stroke-width="0.3"/>
  </g>
</svg>
```

- Leaf is hexagonal or diamond-shaped, never curved.
- Central vein is a dashed crease line running tip to stem.
- Side veins branch as dashed fold marks at right angles.
- Paper green with a lighter variant for younger leaves.

### 4) Paper Stream

Flowing folded paper ribbon element that acts as a divider or path between garden components.

```html
<svg viewBox="0 0 400 40" class="w-full h-10">
  <g fill="none" stroke-width="0.75">
    <!-- Stream ribbon - alternating fold panels -->
    <path d="M0,20 L50,10 L100,25 L150,8 L200,22 L250,12 L300,28 L350,15 L400,20" stroke="#4a6aaa" fill="none"/>
    <path d="M0,20 L50,10 L100,25 L150,8 L200,22 L250,12 L300,28 L350,15 L400,20 L400,30 L350,25 L300,38 L250,22 L200,32 L150,18 L100,35 L50,20 L0,30 Z" fill="#4a6aaa" opacity="0.15"/>
    <!-- Fold crease marks at each zigzag vertex -->
    <line x1="50" y1="10" x2="50" y2="20" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="100" y1="25" x2="100" y2="35" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="150" y1="8" x2="150" y2="18" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="200" y1="22" x2="200" y2="32" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="250" y1="12" x2="250" y2="22" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="300" y1="28" x2="300" y2="38" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
    <line x1="350" y1="15" x2="350" y2="25" stroke="#d0d0d0" stroke-width="0.4" stroke-dasharray="2,2"/>
  </g>
</svg>
```

- Zigzag ribbon with filled underside showing paper fold geometry.
- Dashed crease lines at each fold vertex.
- Used as horizontal dividers or curved path connectors between garden elements.

### 5) Geometric Petal Pattern

Repeating petal motif for backgrounds, borders, or decorative fills — a tessellation of folded paper petals.

- Background pattern: repeating diamond/petal shapes in alternating paper red and paper pink at low opacity.
- CSS approach: `background-image` with a small SVG petal pattern repeated via `background-repeat: repeat`.
- Each petal in the pattern has a dashed center crease line.
- Pattern density: petals spaced 40-60px apart, rotated at alternating 0deg and 45deg.

### 6) Fold Crease Line Component

A standalone crease line element used to mark fold boundaries, create visual rhythm, or annotate folded surfaces.

- Horizontal crease: `<line x1="0" y1="50%" x2="100%" y2="50%" stroke="#d0d0d0" stroke-width="0.5" stroke-dasharray="4,3"/>`
- Vertical crease: same rotated 90 degrees.
- Diagonal crease: 45-degree dashed line across a surface.
- Crease lines are always light gray (`#d0d0d0`), thin (0.4-0.6px stroke), and dashed.
- Crease lines are decorative and structural: they indicate where paper was folded and add textural rhythm.

### 7) Garden Arrangement Layout

A spatial composition of origami garden elements arranged in a loose, organic garden-bed layout.

- Container: `bg-[#f5f0f0] p-8 rounded-none` with a subtle paper texture (very light noise or flat cream).
- Elements positioned with CSS Grid or absolute positioning, offset slightly from a rigid grid.
- Negative space between elements: minimum 24px gap.
- Elements at varying scales: one large focal flower, medium leaves, small cranes as accents.
- Optional: a thin paper stream ribbon running through the arrangement as a path or divider.
- Earth-tone base: `bg-[#8a7a6a]` as a grounding border or footer strip suggesting garden soil.

### 8) Folded Flower Card

Card component with a paper flower as the focal element, surrounded by fold crease details.

- Card surface: `bg-white p-6 shadow-[3px_3px_0_rgba(0,0,0,0.06),6px_6px_0_rgba(0,0,0,0.03)]`.
- Top-left corner folded: `[clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]`.
- Folded corner reveals colored underside: `bg-[#c44040]` pseudo-element at clipped corner.
- Flower SVG centered in card body.
- Dashed crease line across card: `<line x1="0" y1="50%" x2="100%" y2="50%" stroke="#d0d0d0" stroke-dasharray="4,3"/>`.
- Caption below flower: `text-sm font-medium text-[#1a1a1a] tracking-wide`.

### 9) Paper Crane Navigation Element

Small paper crane used as a navigation indicator or bullet point.

```html
<svg viewBox="0 0 24 18" class="w-6 h-4">
  <g fill="none" stroke="#4a6aaa" stroke-width="0.5">
    <path d="M3,10 L12,3 L21,10 L12,8 Z" fill="#4a6aaa" opacity="0.8"/>
    <path d="M3,10 L1,14" stroke-width="0.4"/>
    <path d="M21,10 L23,7 L21,5" stroke-width="0.4"/>
  </g>
</svg>
```

- Used as list bullet, step indicator, or navigation waypoint.
- Consistent sizing: `w-5 h-4` for inline, `w-8 h-6` for standalone.

### 10) Garden Section Divider

Horizontal divider combining a paper stream with small folded elements.

- Paper stream ribbon at center.
- Small folded leaves or petals flanking the stream at intervals.
- Dashed crease lines extending from the stream edges.
- Full width: `w-full h-12` with stream centered vertically.
- Color: paper blue stream with paper green leaf accents.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Paper Red | `#c44040` | Primary flower color, folded petal accent |
| Paper White | `#f5f0f0` | Card surfaces, container backgrounds |
| Paper Blue | `#4a6aaa` | Crane color, stream ribbon, secondary accent |
| Paper Green | `#4a8a4a` | Leaf color, stem elements, nature accents |
| Paper Yellow | `#f0d040` | Flower centers, pollen dots, small highlights |
| Fold Shadow | `#d0d0d0` | Crease lines, fold marks, structural details |
| Paper Pink | `#f0b0c0` | Lighter petal tint, secondary flower color |
| Garden Earth | `#8a7a6a` | Grounding neutral, soil borders, base accents |
| Ink Black | `#1a1a1a` | Text, SVG stroke outlines |

Rules: Paper white and garden earth form the neutral base. One primary flower color (paper red or paper pink) dominates each composition. Paper blue and paper green appear as structural accents (cranes, leaves, streams). Paper yellow is used sparingly for centers and highlights. Fold shadow gray appears on every element as crease lines. Maximum two flower colors per composition to maintain the meditative restraint of a real origami garden.

## Typography Recommendations

- **Display:** DM Sans, Inter, or Noto Sans (clean geometric sans-serif with even weight distribution).
- **Body:** Same family at `font-normal` or `font-light` for a lighter, paper-like feel.
- **Labels:** `font-medium text-xs tracking-widest uppercase` for crease annotations and section markers.
- **Garden titles:** `font-light text-lg tracking-wide` for a serene, unhurried tone.
- Typography should feel precise but calm — like calligraphy practiced with mechanical precision.
- Avoid heavy or bold weights; origami garden UI favors lightness and air.

## Component Architecture Pattern

- All botanical shapes are SVG-based, not CSS clip-path shapes (SVG allows internal crease lines and multi-fold geometry).
- Cards and containers use clip-path for angular folded edges.
- Fold crease lines are always separate SVG elements (never baked into the shape fill).
- Garden arrangements use CSS Grid with `gap-6` to `gap-8` for organic spacing.
- Each component has a consistent shadow language: `shadow-[2px_2px_0_rgba(0,0,0,0.06),4px_4px_0_rgba(0,0,0,0.03)]` for single-layer and `shadow-[3px_3px_0_rgba(0,0,0,0.08),6px_6px_0_rgba(0,0,0,0.04)]` for emphasized elements.
- Hover states: subtle translate (`hover:translate-x-[1px] hover:translate-y-[1px]`) with reduced shadow to simulate pressing a fold flat.
- Transition: `transition-all duration-200` on all interactive elements.

## Interaction Rules

- Buttons use hexagonal clip-path (origami crease button from parent skill) with paper color fills.
- Hover on flowers: petals rotate 2-3 degrees outward (simulating a flower opening).
- Hover on cranes: slight vertical float (`hover:-translate-y-1`).
- Hover on leaves: subtle scale (`hover:scale-105`).
- Click/focus: fold shadow reduces to 1px offset, element translates 1px down-right.
- Page transitions: elements fold in from edges using clip-path animation (0% clipped to 100% visible).
- Scroll: garden elements parallax at different rates to suggest layered paper depth.

## Reusable Tailwind Tokens

- Garden container: `bg-[#f5f0f0] p-8 min-h-screen`.
- Flower card: `bg-white p-6 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)] shadow-[3px_3px_0_rgba(0,0,0,0.06),6px_6px_0_rgba(0,0,0,0.03)]`.
- Folded corner reveal: `bg-[#c44040] w-5 h-5 absolute top-0 right-0 [clip-path:polygon(100%_0,0_0,100%_100%)]`.
- Paper stream: `w-full h-10 bg-gradient-to-r from-transparent via-[#4a6aaa]/10 to-transparent`.
- Fold crease: `border-t border-dashed border-[#d0d0d0]` or SVG `<line>` with `stroke-dasharray="4,3"`.
- Garden earth strip: `w-full h-3 bg-[#8a7a6a]`.
- Crane accent: inline SVG at `w-5 h-4` with `text-[#4a6aaa]` fill.
- Leaf element: inline SVG at `w-12 h-20` with `text-[#4a8a4a]` fill.
- Petal pattern background: `bg-[url('data:image/svg+xml,...')] bg-repeat` with low-opacity petal SVG.
- Interactive fold: `hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_rgba(0,0,0,0.06)] transition-all duration-200`.

## Quality Checklist

- At least one folded paper flower with geometric petals and dashed crease lines.
- At least one paper crane accent element.
- At least one folded leaf with angular edges and vein creases.
- Fold crease lines (dashed, thin, light gray) visible on all botanical shapes.
- Hard-edged fold shadows on all cards and containers (no soft blur).
- Palette restricted to the defined paper colors with garden earth as grounding neutral.
- Garden arrangement has organic spacing (not rigid grid).
- All shapes are angular and geometric — no curves in botanical elements.
- Paper stream divider present in multi-section layouts.
- Hover interactions feel like pressing or releasing paper folds.
- The overall aesthetic reads as "origami garden" — folded paper botanics on a calm surface.
- Typography is light, precise, and serene.
- Background is paper white or cream, never dark.
- Maximum two flower colors per composition.

## Anti-Patterns

- Soft blurred drop shadows (origami garden uses hard-edged fold shadows).
- Curved petals or leaves (all shapes must be angular paper-fold geometry).
- Dark or black backgrounds (the garden sits on light paper).
- Multiple competing flower colors (max two per composition for meditative restraint).
- Missing crease lines on botanical shapes (these are the defining texture).
- Rounded corners on any container or card.
- Organic flowing layouts without angular structure (garden arrangement uses grid-based spacing with angular elements).
- Animated rotations or bounces (interactions are subtle fold-press movements).
- Heavy bold typography (garden UI favors light, airy text).
- Gradient fills on petals (origami paper is flat-colored, gradients come from overlapping opacity layers).
- 3D perspective transforms (origami is flat-layered depth, not dimensional rotation).
- Emoji or decorative icons (all visuals are paper-fold SVGs).

## Accessibility Considerations

- All SVG botanical elements include `role="img"` and `<title>` elements for screen readers.
- Color contrast: text on paper-white surfaces must meet WCAG AA (use `#1a1a1a` on `#f5f0f0`).
- Fold crease lines are decorative only and marked `aria-hidden="true"`.
- Interactive fold elements (buttons, cards) maintain standard focus rings: `focus-visible:outline-2 focus-visible:outline-[#4a6aaa] focus-visible:outline-offset-2`.
- Garden arrangement containers use `role="region"` with `aria-label="Origami garden"`.
- Petal pattern backgrounds use `aria-hidden="true"` since they are purely decorative.
- Hover interactions (petal rotation, crane float) respect `prefers-reduced-motion` media query.
- Paper stream dividers use `role="separator"` and `aria-orientation="horizontal"`.
- All SVGs maintain sufficient stroke width (minimum 0.5px at display size) for visibility.
- Navigation crane indicators include `aria-label` text (e.g., "Step 1", "Step 2").
