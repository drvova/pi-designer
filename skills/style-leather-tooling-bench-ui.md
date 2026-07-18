---
name: leather-tooling-bench-ui
description: Build leather tooling bench UI components (wet leather surface, stamping tools, swivel knife cuts, beveled edges, dyed patterns, burnishing, leather shoulder) with damp leather textures, tool impression marks, and the detailed craft of tooled leatherwork. Trigger this skill when the user asks for leather tooling design, wet molding leather UI, stamping tool grid, swivel knife aesthetics, leather burnishing effects, beveled edge textures, leather shoulder shapes, tooled leatherwork interfaces, or craft bench leathercraft components.
---

# Leather Tooling Bench UI

Use this skill to design and implement craft workshop interfaces inspired by leather tooling artisan benches: damp wet-molded leather surfaces with visible tool impressions, stamping tool grids with various shaped heads, swivel knife incised cut lines, raised beveled edges with shadow and highlight, dyed tooled leather patterns with hand-colored detail, burnished shine accents, and the organic warmth of vegetable-tanned leather in various stages of tooling. The aesthetic is active leatherwork — a working bench where leather is being carved, stamped, dyed, and finished.

## Non-Negotiable Foundations

- Leather tooling bench UI is defined by WET-TO-DRY PROGRESSION: the interface represents leather at various stages of the tooling process — from damp and pliable (darker, richer) to fully finished and burnished (lighter, shinier).
- The wet leather surface is the primary material: a darker, richer brown (`#7a5a3a`) that represents damp, cased leather ready for tooling — it should feel moist and pliable, not dry and stiff.
- Stamping tools are organized in a grid of shaped heads (pear shader, veiner, beveler, background, camouflage) rendered as small geometric shapes in steel gray against the workshop background.
- Swivel knife cuts appear as fine, precise incised lines (`border-[#4a3a1a]`) carved into the leather surface — these are the first marks made in floral or geometric tooling patterns.
- Beveled edges create the illusion of depth: raised areas have a light highlight on the upper edge and a dark shadow on the lower edge, simulating the three-dimensional effect of beveling around a stamped or cut design.
- Dyed patterns show the tooled design colored with leather dyes — warm browns, deep reds, and natural tones applied over the carved and stamped surface.
- Burnishing creates a smooth, glossy finish on edges and raised areas — rendered as a subtle linear gradient highlight that simulates polished leather surface sheen.
- The leather shoulder shape is the organic, irregular outline of a hide — used as a container shape, background element, or decorative frame to ground the design in the material.
- The overall palette is warm earth tones with steel tool accents — everything communicates organic material being shaped by precise hand tools.

## Core Material Recipes

### 1) Wet Leather Surface (Cased Leather)

The primary material surface: darker, richer leather that has been cased (dampened) and is ready for tooling. This is the canvas for all tooling work.

- Base color: `bg-[#7a5a3a]` (damp, darker vegetable-tan).
- Moisture texture: `bg-[linear-gradient(160deg,#7a5a3a_0%,#6a4a2a_40%,#7a5a3a_60%,#8a6a4a_100%)]` (subtle color variation from uneven moisture).
- Surface grain: subtle noise effect or micro-gradient to simulate leather grain.
- Pliability suggestion: slightly rounded corners `rounded-sm` (wet leather is soft-edged, not crisp).
- Full: `bg-[linear-gradient(160deg,#7a5a3a_0%,#6a4a2a_40%,#7a5a3a_60%,#8a6a4a_100%)] rounded-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] p-6`.

### 2) Dry Leather Surface (Finished)

Lighter, drier leather after tooling and drying — the finished or near-finished state.

- Base color: `bg-[#a08050]` (dry vegetable-tan, lighter and warmer).
- Grain texture: `bg-[linear-gradient(140deg,#a08050_0%,#907040_30%,#b09060_70%,#a08050_100%)]`.
- Stiffer appearance: sharp corners (no rounding), crisper shadows.
- Full: `bg-[linear-gradient(140deg,#a08050_0%,#907040_30%,#b09060_70%,#a08050_100%)] shadow-[0_1px_2px_rgba(0,0,0,0.15)] p-6`.

### 3) Stamping Tool Grid

A collection of leather stamps arranged in a grid, showing the artisan's tool set organized for access. Each stamp has a shaped head visible from above.

```html
<div class="grid grid-cols-5 gap-2 bg-[#d8c8a8] border border-[#b0a080] rounded p-3">
  <!-- Pear Shader -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-6 h-6 bg-[#8a8a8a] rounded-t-full shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <span class="text-[8px] font-mono text-[#5a4a3a]">pear</span>
  </div>
  <!-- Beveler -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-6 h-6 bg-[#8a8a8a] rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.3)]" style="clip-path:polygon(0%_100%,50%_0%,100%_100%)"></div>
    <span class="text-[8px] font-mono text-[#5a4a3a]">bevel</span>
  </div>
  <!-- Veiner -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-6 h-6 bg-[#8a8a8a] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <span class="text-[8px] font-mono text-[#5a4a3a]">veiner</span>
  </div>
  <!-- Background -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-6 h-6 bg-[#8a8a8a] rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.3)]" style="background-image:repeating-linear-gradient(45deg,#7a7a7a_0px,#7a7a7a_2px,#8a8a8a_2px,#8a8a8a_4px)"></div>
    <span class="text-[8px] font-mono text-[#5a4a3a]">back</span>
  </div>
  <!-- Camouflage -->
  <div class="flex flex-col items-center gap-1">
    <div class="w-6 h-6 bg-[#8a8a8a] rounded shadow-[0_1px_2px_rgba(0,0,0,0.3)]" style="clip-path:polygon(20%_0%,80%_0%,100%_20%,100%_80%,80%_100%,20%_100%,0%_80%,0%_20%)"></div>
    <span class="text-[8px] font-mono text-[#5a4a3a]">camo</span>
  </div>
</div>
```

Each stamp head is `#8a8a8a` (steel) with its distinctive geometric shape. The tool handles extend below (not shown) as wooden or leather-wrapped grips.

### 4) Swivel Knife Cut Lines

Fine incised lines carved into leather with a swivel knife — the foundational mark-making tool in leather floral tooling.

- Cut line color: `border-[#4a3a1a]` or stroke `#4a3a1a` (dark exposed leather inside the cut).
- Cut line width: 1px (fine, precise).
- Cut depth suggestion: slight inner shadow alongside the line.

```html
<svg viewBox="0 0 200 120" fill="none" class="w-full h-32">
  <!-- Swivel knife floral stem -->
  <path d="M40 100 Q60 60 80 50 Q100 40 120 45 Q140 50 150 30" 
        stroke="#4a3a1a" stroke-width="1.2" stroke-linecap="round"/>
  <!-- Leaf cuts -->
  <path d="M80 50 Q70 35 65 25" stroke="#4a3a1a" stroke-width="1" stroke-linecap="round"/>
  <path d="M80 50 Q90 35 95 28" stroke="#4a3a1a" stroke-width="1" stroke-linecap="round"/>
  <path d="M120 45 Q110 30 105 20" stroke="#4a3a1a" stroke-width="1" stroke-linecap="round"/>
  <path d="M120 45 Q135 32 140 22" stroke="#4a3a1a" stroke-width="1" stroke-linecap="round"/>
</svg>
```

The cuts appear as dark precise lines on the leather surface — clean, confident strokes that define the design before stamping.

### 5) Beveled Edge (Raised Effect)

The three-dimensional illusion in leather tooling: beveling around cut lines and stamped areas creates raised and recessed surfaces.

- Raised area: lighter top edge, darker bottom edge.
- Light edge: `border-t border-l border-[#b09060]` (highlight from above).
- Shadow edge: `border-b border-r border-[#5a3a1a]` (shadow on opposite side).
- Combined bevel: `shadow-[inset_-1px_-1px_0_#5a3a1a,inset_1px_1px_0_#b09060]` (CSS inset shadow bevel).

```html
<div class="bg-[#8a6a4a] p-4 shadow-[inset_-1px_-1px_0_#5a3a1a,inset_1px_1px_0_#b09060]">
  <!-- Tooled element appears raised above the background -->
</div>
```

For reversed bevel (recessed/pressed area): `shadow-[inset_1px_1px_0_#5a3a1a,inset_-1px_-1px_0_#b09060]`.

### 6) Dyed Leather Pattern

A tooled and dyed design — the stamped and carved pattern has been colored with leather dyes (brown, red, and natural tones).

```html
<div class="relative bg-[#8a6a4a] rounded-sm p-6 overflow-hidden">
  <!-- Dyed floral pattern -->
  <svg viewBox="0 0 200 160" fill="none" class="w-full h-full">
    <!-- Dyed flower petals (red-brown dye) -->
    <ellipse cx="100" cy="80" rx="30" ry="18" fill="#5a3a1a" opacity="0.6" transform="rotate(0 100 80)"/>
    <ellipse cx="100" cy="80" rx="30" ry="18" fill="#5a3a1a" opacity="0.6" transform="rotate(60 100 80)"/>
    <ellipse cx="100" cy="80" rx="30" ry="18" fill="#5a3a1a" opacity="0.6" transform="rotate(120 100 80)"/>
    <!-- Dye stain bleed at edges -->
    <circle cx="100" cy="80" r="35" fill="#5a3a1a" opacity="0.08"/>
    <!-- Cut lines over dyed area -->
    <path d="M100 62 Q100 80 100 98" stroke="#4a3a1a" stroke-width="1"/>
    <path d="M82 80 Q100 80 118 80" stroke="#4a3a1a" stroke-width="1"/>
  </svg>
</div>
```

The dye bleeds slightly into the leather grain (soft opacity edges), and the cut lines remain visible over the dye color.

### 7) Burnished Edge / Shine Accent

The smooth, glossy finish achieved by burnishing leather edges or raised surfaces with beeswax and friction.

- Shine line: `bg-gradient-to-r from-transparent via-[#c4a878] to-transparent` (linear highlight).
- Edge burnish: `bg-gradient-to-b from-[#c4a878] via-[#a08050] to-[#7a5a3a]` (polished edge gradient).
- Glossy surface: `shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]` (light reflection on polished surface).

```html
<!-- Burnished edge strip -->
<div class="w-full h-2 bg-gradient-to-b from-[#c4a878] via-[#a08050] to-[#7a5a3a] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)]"></div>

<!-- Burnished surface highlight -->
<div class="bg-[#a08050] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
  <!-- Finished leather content -->
</div>
```

### 8) Leather Shoulder Shape

The organic, irregular outline of a full leather hide — used as a container, background shape, or decorative frame.

```html
<div class="relative w-full h-64 bg-[#a08050]" style="clip-path:polygon(5%_8%,15%_3%,30%_5%,45%_2%,55%_6%,70%_3%,85%_8%,95%_12%,98%_25%,96%_40%,99%_55%,97%_70%,94%_82%,88%_92%,75%_97%,60%_95%,45%_98%,30%_96%,18%_93%,8%_85%,3%_70%,1%_50%,2%_35%,4%_20%)">
  <div class="absolute inset-8 border border-[#7a5a3a]/30 rounded-sm">
    <!-- Content area within the hide -->
  </div>
</div>
```

The hide shape is asymmetric and organic — avoid perfect geometric shapes. Use as a large background element or decorative border.

### 9) Tool Impression Mark

A single stamp impression pressed into wet leather — showing the mark left by a specific stamp tool.

```html
<!-- Pear shader impression -->
<div class="w-8 h-5 bg-[#6a4a2a] rounded-t-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.3),0_1px_0_#907040]"></div>

<!-- Background matting impression (textured) -->
<div class="w-5 h-5 bg-[#6a4a2a] rounded-sm" style="background-image:repeating-conic-gradient(#5a3a1a_0%_25%,#6a4a2a_25%_50%);background-size:4px 4px"></div>
```

### 10) Wet Molding Container

A leather piece that has been wet-molded over a form — showing the three-dimensional shape created by dampening and pressing leather over a mold.

```html
<div class="relative bg-[#7a5a3a] rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(180,150,100,0.15)]">
  <!-- Molded shape rises from the surface -->
  <div class="absolute inset-x-8 top-4 h-16 bg-gradient-to-b from-[#8a6a4a] to-[#7a5a3a] rounded-t-lg shadow-[0_-2px_6px_rgba(0,0,0,0.15)]"></div>
  <div class="relative mt-20">
    <!-- Content in the molded recess -->
  </div>
</div>
```

## Color Palette System

### Leather Material Palette

| Color | Hex | Usage |
|---|---|---|
| Wet Leather | `#7a5a3a` | Cased/damp leather surface, primary material |
| Dry Leather | `#a08050` | Finished/dried leather, lighter background |
| Tool Impression | `#4a3a1a` | Deep stamp marks, recessed carved areas |
| Leather Edge | `#6a4a2a` | Cut edges, raw leather cross-section |
| Burnish Shine | `#c4a878` | Polished surface highlights, edge burnish gloss |
| Light Grain | `#b09060` | Bevel highlight, surface texture light tones |

### Dye Palette

| Color | Hex | Usage |
|---|---|---|
| Brown Dye | `#5a3a1a` | Primary dye color, floral fills, background matting |
| Red Dye | `#8a2a1a` | Accent dye, flower petals, decorative highlights |
| Fiebing's Tan | `#c4a060` | Light dye wash, antiquing, highlight staining |
| Eco-Flo Black | `#2a2a1a` | Background dye, shadow areas, high contrast |
| Untreated | `#a08050` | Natural undyed leather, contrast against dyed areas |

### Workshop Palette

| Color | Hex | Usage |
|---|---|---|
| Stamp Steel | `#8a8a8a` | Tool heads, metallic stamp faces |
| Tool Handle | `#6a4a2a` | Wooden tool handles, shaft accents |
| Bench Surface | `#d8c8a8` | Workshop bench background, tool tray |
| Bench Edge | `#b0a080` | Workbench frame, tool rack borders |
| Beeswax | `#d4c088` | Burnishing compound, wax accents |
| Water Bowl | `#7090a0` | Sponging water, dampening (cool accent among warm tones) |

Rules: Leather colors dominate — warm earth tones from deep `#4a3a1a` to light `#c4a878`. Dye colors are applied over leather tones at reduced opacity (bleed/stain effect). Steel gray appears only on tool heads. The cool water bowl blue (`#7090a0`) is the only cool tone and must be used sparingly as a functional accent. Wet leather is always darker than dry leather.

## Typography Recommendations

Leather tooling bench typography blends Western craft tradition with workshop precision:

- **Section headings:** Rokkitt, Stint Ultra Expanded, or Cardo (bold serif with Western craft weight).
- **Western accent headings:** Playfair Display SC or Cormorant SC (small caps for leather embossed feel).
- **Body text:** Source Serif 4, Lora, or Bitter (warm, readable serif).
- **Tool labels and sizes:** IBM Plex Mono or Space Mono (precise workshop measurement feel).
- **Stamp catalog labels:** `font-mono text-[10px] text-[#5a4a3a] uppercase tracking-wider` (tool catalog aesthetic).
- **Embossed text effect:** `text-[#7a5a3a] shadow-[1px_1px_0_#b09060]` (letterpress/embossed illusion).
- Avoid cold sans-serif for primary content. Leather tooling is warm, organic, and craft-traditional — the type should echo that warmth.

## Component Architecture Pattern

1. Workbench surface as the primary container background (warm tan).
2. Wet leather piece as the main content area (darker, richer brown).
3. Swivel knife cuts defining the design pattern on the leather.
4. Stamping tool grid as a toolbar or sidebar showing available tools.
5. Beveled edges creating depth around design elements.
6. Dyed areas adding color to the tooled pattern.
7. Burnished accents on edges and highlights indicating finished areas.
8. Leather shoulder shape as a decorative frame or background element.
9. Tool impression marks scattered naturally around the work area.

## Interaction Rules

- Default state: warm workshop surface with wet leather piece and visible tool marks.
- Hover on tool stamp: `hover:bg-[#9a9a9a] hover:shadow-[0_2px_6px_rgba(0,0,0,0.4)] transition-all duration-200` (tool head brightens, lifts from tray).
- Hover on leather area: `hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]` (surface darkens slightly as if freshly sponged).
- Active stamp press: `active:translate-y-[1px] active:shadow-none` (tool presses into leather, depth decreases).
- Burnish shine on hover: `group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]` (polish gleam appears).
- Wet leather drying transition: optional slow animation from `#7a5a3a` to `#a08050` over several seconds (simulating drying).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a878] focus:ring-offset-2 focus:ring-offset-[#d8c8a8]` (beeswax shine ring on bench surface).
- Transitions: `transition-all duration-200` for tool interactions, `transition-colors duration-1000` for drying effects (leather changes slowly).

## Reusable Tailwind Tokens

- Wet leather surface: `bg-[linear-gradient(160deg,#7a5a3a_0%,#6a4a2a_40%,#7a5a3a_60%,#8a6a4a_100%)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]`
- Dry leather surface: `bg-[linear-gradient(140deg,#a08050_0%,#907040_30%,#b09060_70%,#a08050_100%)]`
- Beveled raised: `shadow-[inset_-1px_-1px_0_#5a3a1a,inset_1px_1px_0_#b09060]`
- Beveled recessed: `shadow-[inset_1px_1px_0_#5a3a1a,inset_-1px_-1px_0_#b09060]`
- Swivel knife cut: SVG stroke `#4a3a1a` at `stroke-width:1-1.2` with `stroke-linecap:round`
- Stamp tool head: `bg-[#8a8a8a] shadow-[0_1px_2px_rgba(0,0,0,0.3)]` with shape-specific clip-path
- Burnish shine: `bg-gradient-to-r from-transparent via-[#c4a878] to-transparent`
- Burnished edge: `bg-gradient-to-b from-[#c4a878] via-[#a08050] to-[#7a5a3a]`
- Dyed fill (brown): `fill-[#5a3a1a] opacity-0.5` (stain bleed effect over leather)
- Dyed fill (red): `fill-[#8a2a1a] opacity-0.5` (stain bleed effect over leather)
- Tool impression: `bg-[#6a4a2a] shadow-[inset_0_2px_3px_rgba(0,0,0,0.3)]` with stamp-specific clip-path
- Leather edge raw: `border-[#6a4a2a] border-2` (visible cut cross-section)
- Leather edge burnished: `bg-gradient-to-b from-[#c4a878] to-[#6a4a2a]` (polished edge)
- Workbench surface: `bg-[#d8c8a8] border border-[#b0a080]`
- Wet molding: `shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(180,150,100,0.15)]`
- Background matting texture: `repeating-conic-gradient(#5a3a1a_0%_25%,#6a4a2a_25%_50%)` at `4px 4px` size
- Embossed text: `text-[#7a5a3a] shadow-[1px_1px_0_#b09060]`

## Quality Checklist (must pass)

- Wet leather surface is darker (`#7a5a3a`) than dry leather (`#a08050`) — the wet-to-dry distinction is visible.
- Swivel knife cuts appear as fine dark lines (`#4a3a1a`) on the leather surface.
- At least one beveled edge effect is present (inset shadow creating raised/recessed depth).
- Stamping tool grid shows at least 3 distinct stamp head shapes (pear, beveler, veiner minimum).
- Steel tool heads are `#8a8a8a` — clearly metallic, not brown or black.
- Burnish shine appears as a gradient highlight (not flat color).
- Dyed areas show color bleeding/staining effect (reduced opacity over leather grain).
- At least one cut line or stamp impression mark is visible on the leather surface.
- Typography uses warm serif or Western-influenced typefaces.
- The overall aesthetic reads as a working leather tooling bench, not a fashion retail display.
- Workshop bench surface is visible as the containing surface beneath the leather piece.
- Color palette stays within warm earth tones — no saturated primaries or cool neon accents.

## Anti-Patterns

- Light or white leather surface (leather tooling starts with warm vegetable-tan, always warm-toned).
- Wet leather same color as dry leather (wet must be visibly darker and richer).
- Missing bevel depth effect (the three-dimensional illusion is the core of tooled leatherwork).
- Cool gray or blue leather tones (leather is warm — even shadows are warm brown, not cool gray).
- Perfectly smooth leather surface (tooled leather has visible grain, tool marks, and texture variation).
- Steel tools as brown or black (stamp heads are metallic gray — `#8a8a8a`).
- Missing the swivel knife cuts (the carved lines are the foundation of the design before any stamping).
- Flat, single-color fills for dyed areas (dye bleeds and stains — it is not opaque paint).
- Burnish as flat highlight color (burnish is a gradient from shine to leather — it transitions).
- Fashion retail leather aesthetic (this is a craft workshop — show tools, wet surfaces, in-progress work).
- Missing the workshop context (bench surface, tools, water bowl — the craft environment grounds the design).
- Saturated or bright accent colors (leather tooling palette is exclusively warm earth tones with steel gray).
- Cold lighting or cool ambient tones (the workshop is warmly lit, echoing the warmth of the leather).

## Accessibility Considerations

- Tool impression marks against wet leather must maintain sufficient contrast for visibility — deep impressions (`#4a3a1a` on `#7a5a3a`) should be verified for WCAG AA.
- Dyed pattern elements at 50% opacity may need increased opacity or borders to remain distinguishable for low-vision users.
- Stamp tool labels use small monospace text — ensure minimum 10px size and adequate contrast against bench background.
- Focus states use burnish shine ring (`focus:ring-[#c4a878]`) which is visible against warm bench surface (`#d8c8a8`).
- Leather drying animation must respect `prefers-reduced-motion: reduce` — show static state instead of transition.
- Tool impression decorative marks are `aria-hidden="true"` when purely ornamental.
- Leather shoulder shape containers must maintain readable content sizing regardless of organic clip-path.
- Touch targets for stamp tool selection must be at least 44x44px — pad stamp heads with invisible touch area.
- Color is never the sole indicator of leather state (wet vs. dry) — pair with icon or label (droplet icon for wet, wind icon for dry).
- Beveled edge depth effects must not be the only way to distinguish interactive elements from static ones.
- Water bowl accent color (cool blue) helps colorblind users identify the dampening station — preserve this contrast intentionally.
