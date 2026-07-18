---
name: sewing-workshop-ui
description: Build sewing workshop UI components (tailor's measuring tape, fabric swatch cards, pincushion decorations, thimble accents, scissors silhouette, chalk marking lines, sewing machine, button collections) with fabric texture backgrounds, measuring tape dividers, and the precise craft of garment construction. Trigger this skill when the user asks for sewing workshop design, tailor UI, fabric swatch layout, measuring tape divider, pincushion element, thimble accent, scissors icon, chalk line marking, sewing machine silhouette, button collection row, or garment-construction interfaces.
---

# Sewing Workshop UI

Use this skill to design and implement interfaces inspired by a tailor's sewing workshop: measuring-tape dividers with tick marks, fabric swatch card grids, pincushion circle accents, thimble metallic highlights, scissors silhouette decorations, chalk-line markings on fabric surfaces, sewing-machine silhouettes, button collection rows, and the precise, practiced craft of garment construction.

## Non-Negotiable Foundations

- Sewing is precision cut-and-stitch craft on fabric. Every surface should feel like a workbench covered in fabric, with tools of the trade visible at the edges — measuring tapes, pincushions, scissors, chalk.
- Materials are fabric, thread, and metal tools: cotton and linen fabrics in varied weaves, steel scissors and pins, brass thimbles, wooden buttons, plastic or resin sewing-machine bodies. Surfaces are matte, fibrous, and textured — never glossy or digital.
- Colors come from the tailor's bench: natural linen and cotton fabrics, the bright yellow of a measuring-tape ruler, deep pincushion red, metallic thimble silver, tailor's chalk blue, and the varied colors of thread spools and buttons.
- The measuring tape is the signature decorative element — a yellow ruler with black tick marks and numbers, used as borders, dividers, and accent lines.
- Fabric swatch cards are the primary content container: colored rectangles with visible weave texture, arranged in a grid like a fabric sample book.
- Typography evokes tailor's labels and pattern instructions: clean monospace for measurements, sturdy sans-serif for pattern names, serif for workshop signage.
- The aesthetic is precise, measured, and practiced — the opposite of improvised or casual. Everything should feel like it was cut with sharp shears and measured with a steel rule.

## Core Material Recipes

### 1) Fabric Swatch Surface (the foundational surface)

The signature sewing-workshop surface: woven fabric with visible thread texture, like a swatch card pulled from the sample book.

- Background: `bg-[#e8dcc0]` (natural linen base).
- Fabric weave texture: CSS grid pattern simulating plain-weave fabric: `bg-[linear-gradient(to_right,#d8ccb0_1px,transparent_1px),linear-gradient(to_bottom,#d8ccb0_1px,transparent_1px)] bg-[size:6px_6px]` over `#e8dcc0`.
- Subtle fiber noise: SVG noise overlay at `opacity-[0.04]` for organic cotton variation.
- Border: `border border-[#c4a882]` (pressed-edge swatch border, like fabric cut with shears).
- Shadow: `shadow-[0_2px_8px_rgba(100,80,50,0.12)]` (warm, soft fabric shadow).
- Full: `bg-[#e8dcc0] bg-[linear-gradient(to_right,#d8ccb0_1px,transparent_1px),linear-gradient(to_bottom,#d8ccb0_1px,transparent_1px)] bg-[size:6px_6px] border border-[#c4a882] shadow-[0_2px_8px_rgba(100,80,50,0.12)] p-6 rounded-md`.

### 2) Measuring Tape Divider (the signature element)

A yellow measuring tape with black tick marks, used as a horizontal divider or border accent.

Using CSS to create tick marks on a yellow tape:

```css
.measuring-tape {
  background-color: #f0e040;
  background-image:
    repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 4px),
    repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 20px);
  background-size: 100% 8px, 100% 14px;
  background-position: top, top;
  background-repeat: repeat-x, repeat-x;
}
```

For a more detailed measuring-tape band:

```html
<div class="relative h-8 bg-[#f0e040] border border-[#1a1a1a] overflow-hidden">
  <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    <defs>
      <pattern id="ticks" x="0" y="0" width="20" height="32" patternUnits="userSpaceOnUse">
        <!-- Inch marks -->
        <line x1="0" y1="0" x2="0" y2="12" stroke="#1a1a1a" stroke-width="1.5"/>
        <!-- Half-inch marks -->
        <line x1="10" y1="0" x2="10" y2="8" stroke="#1a1a1a" stroke-width="1"/>
        <!-- Quarter-inch marks -->
        <line x1="5" y1="0" x2="5" y2="5" stroke="#1a1a1a" stroke-width="0.5"/>
        <line x1="15" y1="0" x2="15" y2="5" stroke="#1a1a1a" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ticks)"/>
    <!-- Numbers at inch marks -->
    <text x="0" y="26" font-size="8" font-family="monospace" fill="#1a1a1a" font-weight="bold">1</text>
    <text x="20" y="26" font-size="8" font-family="monospace" fill="#1a1a1a" font-weight="bold">2</text>
    <text x="40" y="26" font-size="8" font-family="monospace" fill="#1a1a1a" font-weight="bold">3</text>
  </svg>
</div>
```

### 3) Fabric Swatch Card Grid

Colored fabric rectangles arranged in a grid, like a sample book for choosing materials.

```html
<div class="grid grid-cols-3 gap-3">
  <div class="aspect-[4/3] rounded bg-[#c41e1e] bg-[linear-gradient(to_right,#b01a1a_1px,transparent_1px),linear-gradient(to_bottom,#b01a1a_1px,transparent_1px)] bg-[size:4px_4px] border border-[#8a1a1a] shadow-sm" title="Cotton Poplin - Crimson"></div>
  <div class="aspect-[4/3] rounded bg-[#1a3a5a] bg-[linear-gradient(to_right,#0e2540_1px,transparent_1px),linear-gradient(to_bottom,#0e2540_1px,transparent_1px)] bg-[size:4px_4px] border border-[#0e2540] shadow-sm" title="Silk Satin - Navy"></div>
  <div class="aspect-[4/3] rounded bg-[#2a5a2a] bg-[linear-gradient(to_right,#1a3a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a3a1a_1px,transparent_1px)] bg-[size:4px_4px] border border-[#1a3a1a] shadow-sm" title="Wool Tweed - Forest"></div>
  <div class="aspect-[4/3] rounded bg-[#d4a017] bg-[linear-gradient(to_right,#a07810_1px,transparent_1px),linear-gradient(to_bottom,#a07810_1px,transparent_1px)] bg-[size:4px_4px] border border-[#a07810] shadow-sm" title="Linen Blend - Gold"></div>
  <div class="aspect-[4/3] rounded bg-[#8a6abf] bg-[linear-gradient(to_right,#5a4a8a_1px,transparent_1px),linear-gradient(to_bottom,#5a4a8a_1px,transparent_1px)] bg-[size:4px_4px] border border-[#5a4a8a] shadow-sm" title="Chiffon - Lavender"></div>
  <div class="aspect-[4/3] rounded bg-[#e8dcc0] bg-[linear-gradient(to_right,#d8ccb0_1px,transparent_1px),linear-gradient(to_bottom,#d8ccb0_1px,transparent_1px)] bg-[size:4px_4px] border border-[#c4a882] shadow-sm" title="Muslin - Natural"></div>
</div>
```

### 4) Pincushion Circle Accent

A round pincushion decoration — red with silver pin tops — used as a section accent or status indicator.

- Base: `bg-[#8a1a1a] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]` (dark pincushion body).
- Satin-stitch texture: `bg-[repeating-linear-gradient(45deg,#8a1a1a_0px,#8a1a1a_2px,#7a1515_2px,#7a1515_3px)] rounded-full` (cross-hatched thread on cushion).
- Pins: small silver circles (`w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]`) positioned around the cushion at varied angles.
- Full pincushion:

```html
<div class="relative w-16 h-16">
  <div class="w-16 h-16 rounded-full bg-[#8a1a1a] bg-[repeating-linear-gradient(45deg,#8a1a1a_0px,#8a1a1a_2px,#7a1515_2px,#7a1515_3px)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15)]"></div>
  <!-- Pin tops -->
  <div class="absolute top-1 left-3 w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]"></div>
  <div class="absolute top-2 right-2 w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]"></div>
  <div class="absolute bottom-3 left-1 w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]"></div>
  <div class="absolute top-0 right-4 w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]"></div>
</div>
```

### 5) Scissors Silhouette

An SVG scissors silhouette used as a decorative accent or section divider ornament.

```html
<svg viewBox="0 0 100 60" class="w-16 h-10 opacity-60" aria-hidden="true">
  <path d="M20,15 Q15,8 8,10 Q1,12 5,20 Q9,28 18,25 Q22,24 25,20 L50,45 Q52,48 55,45 L75,25 Q78,22 82,25 Q90,30 85,38 Q80,46 72,42 Q68,40 65,35 L50,45 M20,45 Q15,52 8,50 Q1,48 5,40 Q9,32 18,35 Q22,36 25,40 L50,15 Q52,12 55,15 L75,35 Q78,38 82,35 Q90,30 85,22 Q80,14 72,18 Q68,20 65,25 L50,15" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 6) Chalk Line Markings

Tailor's chalk lines drawn on fabric — thin blue dashed lines simulating pattern markings.

- Chalk line: `border-t border-dashed border-[#4a6aaa] opacity-60` (blue chalk mark on fabric).
- Cross-mark: two intersecting chalk lines forming a registration mark:
```html
<svg viewBox="0 0 20 20" class="w-5 h-5 opacity-40" aria-hidden="true">
  <line x1="10" y1="2" x2="10" y2="18" stroke="#4a6aaa" stroke-width="0.75" stroke-dasharray="2,2"/>
  <line x1="2" y1="10" x2="18" y2="10" stroke="#4a6aaa" stroke-width="0.75" stroke-dasharray="2,2"/>
</svg>
```
- Chalk-marked fabric panel: a swatch with blue dashed lines suggesting a pattern layout.
- Chalk dust effect: subtle blue glow `shadow-[0_0_4px_rgba(74,106,170,0.15)]` around chalk markings.

### 7) Button Collection Row

A row of sewing buttons in varying sizes and colors, used as decorative elements or interactive selectors.

```html
<div class="flex items-center gap-4">
  <!-- 4-hole button -->
  <div class="relative w-8 h-8 rounded-full bg-[#c4a882] border border-[#a08060] shadow-sm">
    <div class="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
    <div class="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
    <div class="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
    <div class="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
  </div>
  <!-- 2-hole button -->
  <div class="relative w-6 h-6 rounded-full bg-[#e8dcc0] border border-[#c4a882] shadow-sm">
    <div class="absolute top-2 left-1/2 -translate-x-0.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
    <div class="absolute bottom-2 left-1/2 -translate-x-0.5 w-1 h-1 rounded-full bg-[#a08060]"></div>
  </div>
  <!-- Shank button -->
  <div class="relative w-7 h-7 rounded-full bg-[#3a2a1a] border border-[#2a1a0a] shadow-sm">
    <div class="absolute inset-0 flex items-center justify-center gap-1">
      <div class="w-0.5 h-0.5 rounded-full bg-[#8a6a4a]"></div>
      <div class="w-0.5 h-0.5 rounded-full bg-[#8a6a4a]"></div>
    </div>
  </div>
  <!-- Thread spool button -->
  <div class="w-5 h-8 rounded bg-[#c41e1e] border border-[#8a1a1a] shadow-sm" title="Thread spool"></div>
</div>
```

### 8) Sewing Machine Silhouette Accent

A simplified sewing-machine outline used as a large decorative watermark or section header accent.

```html
<svg viewBox="0 0 200 140" class="w-full h-full opacity-[0.06]" aria-hidden="true">
  <path d="M30,120 L30,80 Q30,60 50,55 L120,50 Q140,48 150,55 L170,70 Q180,78 180,90 L180,100 Q180,110 170,115 L60,120 Z M50,55 L50,30 Q50,25 55,22 L65,18 Q70,16 75,20 L80,30 L80,50 M140,50 L140,35 Q140,30 145,28 L155,25 Q160,23 162,28 L163,38 L163,55 M100,120 L100,95 Q100,90 105,88 L115,85 Q120,83 120,88 L120,95 L120,120" fill="none" stroke="#4a4a3a" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

### 9) Thimble Accent

A metallic thimble shape used as a small decorative accent or avatar placeholder.

- Base: `bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] rounded-t-full border border-[#808080]` (dome-shaped metallic thimble).
- Dimple texture: repeating dot pattern simulating the textured grip surface.
- Full thimble:

```html
<div class="w-8 h-10 rounded-t-full bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] border border-[#808080] overflow-hidden relative">
  <div class="absolute inset-0 bg-[radial-gradient(circle_1px_at_center,#808080_1px,transparent_1px)] bg-[size:4px_4px] opacity-50"></div>
</div>
```

### 10) Fabric Swatch Card

A single fabric swatch card with a colored fabric sample, name label, and material type.

```html
<div class="bg-white border border-[#c4a882] rounded-md shadow-sm overflow-hidden">
  <div class="h-24 bg-[#c41e1e] bg-[linear-gradient(to_right,#b01a1a_1px,transparent_1px),linear-gradient(to_bottom,#b01a1a_1px,transparent_1px)] bg-[size:4px_4px]"></div>
  <div class="p-3">
    <p class="font-mono font-medium text-sm text-[#3a2a1a] tracking-wide">Cotton Poplin</p>
    <p class="font-mono text-xs text-[#8a7a6a]">Crimson / 140gsm</p>
  </div>
</div>
```

## Color Palette System

### Core Sewing Workshop Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Measuring Tape Yellow | `#f0e040` | Vinyl tape | Signature divider, accent |
| Tape Tick Black | `#1a1a1a` | Ink markings | Tick marks, numbers |
| Fabric Red | `#c41e1e` | Cotton poplin | Primary fabric swatch |
| Fabric Red Dark | `#8a1a1a` | Dyed cotton | Red shadows, thread |
| Pincushion Red | `#8a1a1a` | Velvet cushion | Pincushion body |
| Thimble Silver | `#c0c0c0` | Steel/aluminum | Pin tops, thimble, accents |
| Thimble Silver Dark | `#a0a0a0` | Oxidized metal | Metal shadows |
| Chalk Blue | `#4a6aaa` | Tailor's chalk | Marking lines, guidelines |
| Linen Natural | `#e8dcc0` | Raw linen | Fabric swatches, background |
| Linen Warm | `#d8ccb0` | Woven cotton | Secondary fabric surface |
| Thread Beige | `#c4a882` | Stitching thread | Borders, stitch lines |
| Navy Fabric | `#1a3a5a` | Silk satin | Fabric swatches |
| Forest Tweed | `#2a5a2a` | Wool tweed | Fabric swatches |
| Gold Linen | `#d4a017` | Dyed linen | Fabric swatches, accents |
| Lavender Chiffon | `#8a6abf` | Chiffon | Fabric swatches |
| Button Wood | `#c4a882` | Carved wood | Buttons, toggles |
| Button Dark | `#3a2a1a` | Dark wood | Dark buttons, text |
| Workshop Brown | `#3a2a1a` | Workshop wood | Text, labels |

Rules: Measuring-tape yellow (`#f0e040`) is the signature accent — it appears on dividers, borders, and highlight elements. Fabric swatch colors (red, navy, forest, gold, lavender) represent the tailor's material book. Thimble silver and chalk blue are utility accents. The palette should feel like a well-organized tailor's workbench — measuring tools, fabric samples, thread spools, and buttons laid out with precision. No neons, no pure blacks.

## Typography Recommendations

Sewing-workshop typography evokes tailor's labels, pattern instructions, and measuring tools:

- **Measurement headings:** A monospace font at `font-mono font-bold text-2xl tracking-widest text-[#3a2a1a]` for a precise, ruler-like quality.
- **Pattern names:** A clean sans-serif like Inter, DM Sans, or Source Sans at `font-sans font-semibold text-lg text-[#3a2a1a] tracking-wide` for pattern-cutting clarity.
- **Workshop signage:** A bold serif like Playfair Display or Crimson Pro at `font-serif font-bold text-4xl text-[#8a1a1a]` for a traditional tailor's shop sign feel.
- **Labels:** `font-mono font-medium text-xs uppercase tracking-[0.2em] text-[#8a7a6a]` for fabric-type labels and material specs.
- **Body:** IBM Plex Sans or Source Sans 3 at `font-sans text-sm text-[#4a3a2a]` for readable pattern instructions.
- **Measurement annotations:** `font-mono text-xs text-[#4a6aaa]` styled to look like chalk annotations on fabric.
- Avoid decorative or script fonts alone. Sewing workshop pairs precision mono (measurements) with clean sans (instructions) and heritage serif (signage).

## Component Architecture Pattern

1. Linen or fabric-weave background as the foundational surface.
2. Measuring-tape yellow dividers with black tick marks between sections.
3. Fabric swatch cards in a grid as the primary content containers.
4. Pincushion circles as status indicators or section accents.
5. Scissors silhouettes as decorative ornaments near headings.
6. Chalk-line dashed blue markings for guidelines and annotations.
7. Button collection rows for interactive selectors or decorative breaks.
8. Thimble metallic accents for avatars or small icons.
9. Sewing-machine silhouette watermarks on workshop landing sections.

## Interaction Rules

- Default state: natural linen fabric, calm, organized, precise.
- Hover: fabric warms slightly, swatch lifts with shadow, subtle scale.
  - `hover:bg-[#f0e4d0] hover:shadow-[0_4px_12px_rgba(100,80,50,0.15)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: gentle press into fabric (`active:translate-y-0.5 active:shadow-[0_1px_4px_rgba(100,80,50,0.1)]`).
- Focus: measuring-tape yellow ring `focus:ring-2 focus:ring-[#f0e040]/60 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]`.
- Transitions: `transition-all duration-300 ease-in-out` (measured, precise — like a practiced hand).
- Button hover: slight rotation as if being picked up (`hover:rotate-3`).
- Pincushion hover: pins wiggle slightly (`hover:scale-105`).
- No fast, aggressive motion. Everything feels like the practiced precision of garment construction.

## Reusable Tailwind Tokens

- Fabric surface: `bg-[#e8dcc0] bg-[linear-gradient(to_right,#d8ccb0_1px,transparent_1px),linear-gradient(to_bottom,#d8ccb0_1px,transparent_1px)] bg-[size:6px_6px] border border-[#c4a882] shadow-[0_2px_8px_rgba(100,80,50,0.12)]`
- Measuring tape: `h-8 bg-[#f0e040] border-y border-[#1a1a1a]`
- Tape ticks CSS: `repeating-linear-gradient(90deg,#1a1a1a_0px,#1a1a1a_1px,transparent_1px,transparent_4px)`
- Pincushion circle: `w-16 h-16 rounded-full bg-[#8a1a1a] bg-[repeating-linear-gradient(45deg,#8a1a1a_0px,#8a1a1a_2px,#7a1515_2px,#7a1515_3px)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`
- Pin top: `w-1 h-1 bg-[#c0c0c0] rounded-full border border-[#a0a0a0]`
- Chalk line: `border-t border-dashed border-[#4a6aaa] opacity-60`
- Chalk glow: `shadow-[0_0_4px_rgba(74,106,170,0.15)]`
- Button wood: `w-8 h-8 rounded-full bg-[#c4a882] border border-[#a08060] shadow-sm`
- Button dark: `w-7 h-7 rounded-full bg-[#3a2a1a] border border-[#2a1a0a]`
- Thimble dome: `w-8 h-10 rounded-t-full bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] border border-[#808080]`
- Fabric swatch card: `bg-white border border-[#c4a882] rounded-md shadow-sm overflow-hidden`
- Workshop brown text: `text-[#3a2a1a]`
- Warm shadow: `shadow-[0_2px_8px_rgba(100,80,50,0.12)]`
- Tape accent ring: `focus:ring-2 focus:ring-[#f0e040]/60 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]`

## Quality Checklist (must pass)

- Background is linen or fabric-weave textured (not flat or white).
- At least one measuring-tape element (yellow tape with black tick marks).
- At least one fabric swatch card (colored rectangle with weave texture).
- Borders use dashed lines or measuring-tape accents (not plain solid borders everywhere).
- Color palette uses sewing-workshop colors (yellow, fabric red, chalk blue, silver, linen).
- Typography evokes precision (mono for measurements, clean sans for instructions).
- At least one pincushion, scissors, or thimble decorative element.
- Button collection or thread-spool elements present.
- Shadows are warm and fabric-like (brown undertones, soft).
- The aesthetic reads as a tailor's workshop (measuring tools, fabric samples, precision).
- Motion is measured and precise (like cutting fabric with sharp shears).
- Fabric texture is visible on surfaces (not flat digital color).
- Chalk-line markings appear for guidelines or annotations.

## Anti-Patterns

- Flat, textureless backgrounds (sewing workshop requires visible fabric weave).
- Missing measuring-tape elements (the yellow tape with ticks is the signature visual).
- Solid, heavy borders without stitch or tape character (use dashed lines or tape accents).
- Neon or overly saturated non-fabric colors (use dyed-cotton and natural-fiber hues).
- Smooth, glossy surfaces (fabric and tools are matte — never shiny or glassy).
- Decorative script or calligraphy fonts alone (sewing is precise, not flourishy).
- Fast, aggressive animations (garment construction is practiced, measured, deliberate).
- Digital or technological references (sewing is a physical, hands-on craft).
- Pure white backgrounds (use linen cream `#e8dcc0` or fabric-warm surfaces).
- Missing fabric texture on swatch cards (every swatch must show weave pattern).
- Overly complex ornamentation (a tailor's bench is organized, not cluttered).
- Missing thread or button details (thread spools and buttons are workshop staples).
- Hard shadows or drop shadows with no warmth (use brown-toned soft shadows).

## Accessibility Considerations

- Linen natural (`#e8dcc0`) with dark text (`#3a2a1a`) provides excellent contrast (WCAG AAA).
- Deep fabric colors (navy, red, forest) on linen verify WCAG AA.
- Measuring-tape yellow (`#f0e040`) must be used as accent only — it fails contrast on white.
- Dashed chalk lines must be thick enough (1px minimum) to be visible at normal zoom.
- Fabric swatch cards must have text labels or `title` attributes for screen readers.
- Scissors and sewing-machine SVGs must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#f0e040]/60 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]` (visible against linen).
- Pin-top silver dots on pincushion must not be the sole indicator of any state.
- Touch targets must be adequate despite fabric styling (minimum 44x44px).
- Button collection elements need `role="radiogroup"` and individual `aria-label` when interactive.
- Chalk-line annotations need text alternatives (not purely visual).
