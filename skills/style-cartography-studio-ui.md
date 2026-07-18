---
name: cartography-studio-ui
description: Build cartography studio UI components (parchment map, compass rose, ink pen, brass divider, map legend, folding crease, sealing wax) with aged map surfaces, precise drawing tools, and the exploratory spirit of historical cartography. Trigger this skill when the user asks for cartography design, map studio UI, parchment map aesthetic, compass rose component, brass divider tool, old map interface, nautical chart design, explorers map, cartographer workspace, or historical mapping interfaces.
---

# Cartography Studio UI

Use this skill to design and implement exploratory, map-inspired interfaces: aged parchment surfaces, compass rose navigation, ink pen drawing tools, brass divider measuring instruments, map legends, folding crease marks, sealing wax stamps, and coastline illustrations. The aesthetic is scholarly and adventurous — the cartographer's drafting table where unknown territories become known.

## Non-Negotiable Foundations

- Cartography Studio UI evokes the cartographer's workspace: aged parchment maps, brass instruments, ink-drawn coastlines, compass roses, map legends, folding creases, and wax-sealed documents.
- Colors are cartographic: parchment tan, ink black, brass gold, ocean blue, coast tan, wax red, and map green.
- Typography mimics old engraved maps: serif for place names, italic for water features, small-caps for cardinal directions, and monospace for coordinates.
- Coastline drawings, compass roses, and map border decorations are essential visual elements.
- Textures are aged paper, worn brass, dried ink, and wax impressions.
- The mood is scholarly, adventurous, and precise — like unrolling a 16th-century sea chart on a captain's table.

## Core Material Recipes

### 1) Aged Parchment Map Surface

The foundational cartographic surface: aged paper with staining and fold memory.

- `bg-[#e8d8b0] p-8 shadow-[0_4px_16px_rgba(80,60,30,0.15)]`.
- Aging: `bg-[radial-gradient(ellipse_at_25%_15%,rgba(180,150,90,0.08)_0%,transparent_45%),radial-gradient(ellipse_at_75%_85%,rgba(160,130,70,0.06)_0%,transparent_35%)]`.
- Paper texture: SVG `feTurbulence` noise at `opacity-[0.05]`.
- Edge darkening: `shadow-[inset_0_0_40px_rgba(120,90,40,0.1)]` (vignette toward edges).
- Corner wear: subtle `opacity-[0.7]` on corner areas or torn-edge SVG mask.

### 2) Compass Rose

Ornate directional indicator — the signature cartographic navigation element.

```html
<svg viewBox="0 0 120 120" class="w-28 h-28">
  <!-- Outer ring -->
  <circle cx="60" cy="60" r="55" fill="none" stroke="#b87333" stroke-width="1.5"/>
  <circle cx="60" cy="60" r="50" fill="none" stroke="#b87333" stroke-width="0.5"/>
  <!-- Cardinal points (N, S, E, W) -->
  <polygon points="60,8 55,55 60,48 65,55" fill="#c4a043" stroke="#8a6a23" stroke-width="0.5"/>
  <polygon points="60,112 55,65 60,72 65,65" fill="#b87333" stroke="#8a5a23" stroke-width="0.5"/>
  <polygon points="8,60 55,55 48,60 55,65" fill="#b87333" stroke="#8a5a23" stroke-width="0.5"/>
  <polygon points="112,60 65,55 72,60 65,65" fill="#b87333" stroke="#8a5a23" stroke-width="0.5"/>
  <!-- Intercardinal points (NE, NW, SE, SW) -->
  <polygon points="95,25 62,56 66,52" fill="#d4b878" stroke="#8a6a23" stroke-width="0.3"/>
  <polygon points="25,25 58,56 54,52" fill="#d4b878" stroke="#8a6a23" stroke-width="0.3"/>
  <polygon points="95,95 62,64 66,68" fill="#d4b878" stroke="#8a6a23" stroke-width="0.3"/>
  <polygon points="25,95 58,64 54,68" fill="#d4b878" stroke="#8a6a23" stroke-width="0.3"/>
  <!-- Center circle -->
  <circle cx="60" cy="60" r="5" fill="#c4a043" stroke="#8a6a23" stroke-width="1"/>
  <circle cx="60" cy="60" r="2" fill="#1a1a1a"/>
  <!-- Cardinal labels -->
  <text x="60" y="6" font-size="8" fill="#1a1a1a" text-anchor="middle" font-family="serif" font-weight="bold">N</text>
  <text x="60" y="118" font-size="8" fill="#1a1a1a" text-anchor="middle" font-family="serif">S</text>
  <text x="5" y="63" font-size="8" fill="#1a1a1a" text-anchor="middle" font-family="serif">W</text>
  <text x="115" y="63" font-size="8" fill="#1a1a1a" text-anchor="middle" font-family="serif">E</text>
</svg>
```

### 3) Map Legend Key

Structured legend box explaining map symbols — formal and informational.

- `bg-[#e8d8b0] border-2 border-[#1a1a1a] p-4` (parchment with ink border).
- Title: `font-serif text-sm uppercase tracking-widest text-[#1a1a1a] border-b border-[#1a1a1a] pb-2 mb-3`.
- Entry row: `flex items-center gap-3 mb-2` with symbol and label.
- Symbol swatch: `w-6 h-3 border border-[#1a1a1a]` (colored or patterned rectangle).
- Symbol circle: `w-4 h-4 rounded-full border border-[#1a1a1a]` (point markers).
- Symbol line: `w-6 h-0 border-t-2 border-[#1a1a1a]` or dashed variant.
- Label text: `font-serif text-xs text-[#1a1a1a]` (clean serif at small size).
- Legend border: solid ink border, never dashed — maps use continuous rules.

### 4) Brass Divider

Measuring compass tool for distances on the map.

```html
<svg viewBox="0 0 80 100" class="w-16 h-24">
  <!-- Left leg -->
  <line x1="25" y1="15" x2="15" y2="85" stroke="#b87333" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Right leg -->
  <line x1="55" y1="15" x2="65" y2="85" stroke="#b87333" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Hinge -->
  <circle cx="40" cy="12" r="5" fill="#c4a043" stroke="#8a6a23" stroke-width="1"/>
  <circle cx="40" cy="12" r="2" fill="#8a6a23"/>
  <!-- Left point -->
  <circle cx="15" cy="87" r="1.5" fill="#1a1a1a"/>
  <!-- Right point -->
  <circle cx="65" cy="87" r="1.5" fill="#1a1a1a"/>
  <!-- Hinge ornament -->
  <circle cx="40" cy="12" r="3" fill="none" stroke="#d4b878" stroke-width="0.5"/>
</svg>
```

### 5) Ink Pen Drawing Tool

Quill or dip pen for coastline and text work.

```html
<svg viewBox="0 0 20 80" class="w-5 h-20">
  <!-- Pen barrel -->
  <rect x="8" y="5" width="4" height="50" rx="1" fill="#3a2a1a"/>
  <!-- Pen grip -->
  <rect x="7" y="50" width="6" height="12" rx="1" fill="#5a3a1a"/>
  <!-- Nib -->
  <path d="M7,62 L10,78 L13,62" fill="#8a8a7a" stroke="#5a5a4a" stroke-width="0.5"/>
  <!-- Nib slit -->
  <line x1="10" y1="63" x2="10" y2="76" stroke="#1a1a1a" stroke-width="0.3"/>
  <!-- Ink drip -->
  <circle cx="10" cy="79" r="1" fill="#1a1a1a" opacity="0.6"/>
</svg>
```

### 6) Folding Crease

Paper fold line suggesting a well-traveled map.

- `w-full border-t border-dashed border-[#8a7a5a]/40 my-6` (horizontal fold).
- Crease shadow: `shadow-[0_1px_0_rgba(120,100,60,0.1)]` above and `shadow-[0_-1px_0_rgba(120,100,60,0.1)]` below.
- Vertical variant: `h-full border-l border-dashed border-[#8a7a5a]/40 mx-6`.
- Fold annotation: `text-[8px] font-serif italic text-[#8a7a5a]/50 text-center` — optional fold number (e.g., "Fold II").
- The crease divides the map into quadrants or sections, adding authenticity to well-used documents.

### 7) Sealing Wax Stamp

Circular red wax seal for authentication and emphasis.

- `w-16 h-16 rounded-full bg-[#c41e1e] border-2 border-[#8a1414] flex items-center justify-center rotate-[-5deg] shadow-[0_3px_8px_rgba(0,0,0,0.35),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_3px_rgba(0,0,0,0.2)]`.
- Stamp impression: `text-[#e8d8b0] font-serif font-bold text-sm uppercase text-center` (embossed text in wax).
- Wax drip edge: irregular `clip-path` or SVG blob border for organic wax edges.
- Alternative: `rounded-[40%_45%_35%_50%/45%_40%_50%_35%]` for slightly irregular circle shape.

### 8) Coastline Drawing

Ink-drawn coast with ocean/land distinction — the cartographer's primary artwork.

- Land: `fill-[#c4a878]` (coast tan) with `stroke-[#1a1a1a] stroke-width="1"` (ink outline).
- Water hatching: parallel curved lines `stroke-[#4a7aaa] stroke-width="0.3" opacity="0.5"` flowing away from coast.
- Coastline path: hand-drawn feel using SVG `path` with slight irregularity — `d="M0,50 Q10,48 20,52 T40,48 T60,53 T80,47 T100,50"`.
- Depth shading: progressively lighter `fill-[#4a7aaa]` at increasing distance from shore.

### 9) Cartography Button

Map-themed action button with brass and parchment styling.

- `bg-gradient-to-b from-[#b87333] to-[#8a5a23] text-[#e8d8b0] font-serif font-medium px-8 py-3 border border-[#6a4a1a] shadow-[0_3px_6px_rgba(0,0,0,0.25)] hover:from-[#c48040] hover:to-[#9a6a33] transition-all duration-300`.

### 10) Map Border Frame

Decorative cartouche border for framing map content.

- Outer: `border-4 border-double border-[#1a1a1a]`.
- Inner: `border border-[#b87333] m-1`.
- Corner ornaments: small SVG compass or fleur-de-lis at each corner `absolute -top-2 -left-2 w-5 h-5`.
- The double-rule border with brass corner accents is the classic engraved map frame.

## Component Architecture Pattern

Cartography Studio components follow a cartographer's drafting table layout — layered instruments on an aged parchment workspace:

- **Layout:** Primary content sits on parchment (`bg-[#e8d8b0]`). Tools and instruments float around the edges using `absolute` or `sticky` positioning. The map surface is the canvas; instruments are overlaid.
- **Composing a map workspace:** Parchment map as the full-width base. Compass rose positioned top-right corner. Map legend bottom-left. Tool palette (ink pen, divider) along the right edge. Folding creases divide the map into sections.
- **Card boundaries:** Use ink borders (`border-[#1a1a1a]`) with optional brass rules (`border-[#b87333]`). Map frames use double-rule borders. Never use modern rounded corners.
- **State:** Map zoom uses `transform: scale()` on the parchment. Tool selection highlights with `ring-2 ring-[#c4a043]`. Ink pen active state adds a `translate-y` micro-drop to suggest writing pressure.
- **Nesting:** The parchment map contains coastline regions. Legends contain symbol entries. Cartouche frames contain title text and scale bars. Each container is its own aged surface with consistent ink-line borders.

## Interaction Rules

- Default: scholarly, precise, adventurous — the confidence of a skilled cartographer.
- Hover: brass instruments warm, ink lines sharpen.
  - `hover:shadow-[0_4px_14px_rgba(80,60,20,0.2)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: `active:translate-y-0.5 active:shadow-none` (pressed into the drafting table).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#b87333]/40 focus:ring-offset-2 focus:ring-offset-[#e8d8b0]`.
- Tool selection: `transition-all duration-200 ease-out` (quicker than general transitions — tools respond immediately).
- Compass rotation: `transition-transform duration-1000 ease-in-out` (slow, deliberate rotation like real brass).
- Map zoom: `transition-transform duration-500 ease-in-out` with smooth scaling.
- Ink drawing: `stroke-dashoffset` animation for coastline reveal — ink appears to be drawn in real-time.
- Transitions: `transition-all duration-300 ease-in-out` for general elements (measured and deliberate — like drafting a coastline stroke by stroke).

## Color Palette System

### Core Cartography Palette

| Color | Hex | Role |
|---|---|---|
| Parchment | `#e8d8b0` | Primary map surface, aged paper |
| Ink Dark | `#1a1a1a` | Text, borders, coastline ink, engravings |
| Brass | `#b87333` | Instruments, dividers, hardware, metal accents |
| Compass Gold | `#c4a043` | Compass rose points, gold leaf accents |
| Ocean Blue | `#4a7aaa` | Water features, sea areas, deep water |
| Coast Tan | `#c4a878` | Land near coast, shoreline, beach |
| Wax Red | `#c41e1e` | Sealing wax, emphasis, important markers |
| Map Green | `#3a6a3a` | Vegetation, forests, fertile land |
| Aged Cream | `#f0e4c8` | Light parchment, marginalia surface |
| Sepia | `#8a7a5a` | Fold lines, muted borders, aging |
| Deep Brown | `#3a2a1a` | Dark ink, pen barrel, deep shadows |
| Mountain Gray | `#7a7a6a` | Mountain shading, relief, rock |

Rules: Parchment and ink dominate. The palette should feel like unrolling an aged sea chart — warm paper, black ink lines, brass instruments catching candlelight, and blue-green water. No bright modern colors. Ocean blue is used only for water features. Compass gold and brass add metallic warmth.

## Typography Recommendations

- **Map Titles:** Playfair Display, Cormorant Garamond, or IM Fell English (engraved serif for place names).
- **Place Names:** `font-serif text-sm uppercase tracking-wider` (traditional engraved map lettering).
- **Water Features:** `font-serif italic text-[#4a7aaa]` (italic blue for rivers, seas, oceans — cartographic convention).
- **Cardinal Directions:** `font-serif text-xs small-caps text-[#1a1a1a]` (N, S, E, W on compass and map edges).
- **Coordinates:** `font-mono text-[10px] text-[#8a7a5a]` (latitude/longitude in monospace).
- **Legend Labels:** `font-serif text-xs text-[#1a1a1a]` (clean, small, informational).
- **Body:** EB Garamond or Lora (readable warm serif for map descriptions and notes).
- Cartographic convention: land names in roman (upright), water names in italic, both in serif.

## Reusable Tailwind Tokens

- Parchment surface: `bg-[#e8d8b0]` with aging SVG overlay.
- Ink border: `border-[#1a1a1a]` or `border-2 border-[#1a1a1a]`.
- Double-rule frame: `border-4 border-double border-[#1a1a1a]`.
- Brass accent: `text-[#b87333]` or `bg-[#b87333]/20`.
- Compass gold: `text-[#c4a043]` or `bg-[#c4a043]`.
- Ocean blue fill: `fill-[#4a7aaa]` or `text-[#4a7aaa]`.
- Water hatching: `stroke-[#4a7aaa] stroke-width="0.3" opacity="0.5"`.
- Coast tan fill: `fill-[#c4a878]` or `bg-[#c4a878]`.
- Map green: `fill-[#3a6a3a]` or `text-[#3a6a3a]`.
- Wax red: `bg-[#c41e1e] border-[#8a1414]`.
- Sepia fold line: `border-dashed border-[#8a7a5a]/40`.
- Cartography button: `bg-gradient-to-b from-[#b87333] to-[#8a5a23] text-[#e8d8b0] font-serif border border-[#6a4a1a]`.
- Seal stamp: `rounded-full bg-[#c41e1e] border-2 border-[#8a1414] rotate-[-5deg] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]`.
- Aged cream: `bg-[#f0e4c8]` for marginalia and light surfaces.

## Quality Checklist

- Background is aged parchment or cream (warm, textured, never pure white).
- At least one compass rose element (SVG or decorative accent).
- At least one coastline or water feature drawing (ink on parchment).
- Color palette is parchment, ink, brass, and ocean blue (no bright primaries).
- Map borders use double-rule or ink-line framing, not modern rounded corners.
- Legend box is present with symbol swatches and serif labels.
- Folding creases divide the map into authentic quadrants or sections.
- Wax seal appears for authentication and emphasis.
- Brass divider or ink pen SVG appears in tool-related contexts.
- Typography uses engraved serif with italic for water and small-caps for directions.
- The aesthetic reads as a 16th-century cartographer's workspace or sea chart.
- Motion is measured and deliberate (like drawing a coastline stroke by stroke).
- All compass points are labeled (N, S, E, W at minimum).
- Ocean areas have water hatching or progressive blue shading.

## Anti-Patterns

- Bright modern colors (cartography is parchment, ink, brass, and ocean — warm and aged).
- Pure white backgrounds (use aged parchment `#e8d8b0` or cream `#f0e4c8`).
- Sans-serif typography alone (cartography needs engraved serif for place names and italic for water).
- Missing compass rose (this is the signature cartographic navigation element).
- Rounded modern cards (use ink-bordered frames with double-rule borders).
- Missing coastline drawings (these are the primary cartographic artwork).
- Cold or digital aesthetic (cartography is warm, aged, and hand-drawn).
- Missing folding creases (these suggest a well-traveled, authentic map).
- Missing map legend (essential cartographic information element).
- Missing wax seals (these add authentication and old-world authority).
- Fast aggressive animations (motion should be measured and deliberate).
- Using modern grays or blues for water (use ocean blue `#4a7aaa` specifically).
- Missing ink-line borders (this is the signature cartographic framing treatment).
- Straight, mechanical coastline paths (coastlines should have hand-drawn irregularity).
- Using sans-serif for place names (engraved cartography is always serif).

## Accessibility Considerations

- Parchment backgrounds with ink dark text provide good contrast (verify WCAG AA — `#1a1a1a` on `#e8d8b0` passes).
- Focus states: `focus:ring-2 focus:ring-[#b87333]/40` (brass ring on parchment).
- Compass rose and decorative SVGs must be `aria-hidden="true"`.
- Map legend text must maintain readability at 12px+ for symbol labels.
- Water feature italic text must maintain contrast against blue fills (`#1a1a1a` on `#4a7aaa`).
- Wax seals must not be the sole indicator of authenticated content (include text labels).
- Coastline regions must have `aria-label` or descriptive text for screen readers.
- Folding crease lines must not visually bisect critical text content.
- Coordinate text in monospace must be large enough to read (12px minimum).
- Map frame borders must not obscure interactive content near edges.
- Color is never the sole carrier of meaning — map features use icons or labels in addition to color.
- Touch targets on instrument tools must be adequate despite precise visual sizing.
