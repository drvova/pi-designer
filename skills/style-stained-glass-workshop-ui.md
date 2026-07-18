---
name: stained-glass-workshop-ui
description: Build stained glass workshop UI components (glass cutting table, lead came strips, soldering iron, painted glass panels, kiln for fusing, pattern cartoons, copper foil) with colorful glass pieces, lead line textures, and the luminous craft of stained glass creation. Trigger this skill when the user asks for stained glass workshop design, glass cutting table UI, lead came patterns, soldering station aesthetic, painted glass panels, kiln glow interfaces, copper foil textures, or craft studio workbench components.
---

# Stained Glass Workshop UI

Use this skill to design and implement craft workshop interfaces inspired by stained glass artisan studios: glass cutting table surfaces with scattered jewel-toned pieces, lead came strip grids forming delicate pattern lines, soldering iron glow points, painted glass panels with luminous color, kiln opening radiance, pattern cartoon sketches on translucent paper, and copper foil texture accents. The aesthetic is active creation — a working studio, not a finished cathedral window.

## Non-Negotiable Foundations

- Stained glass workshop UI is defined by CRAFT IN PROGRESS: the interface evokes a working studio where glass is being cut, lead came is being fitted, solder is being applied, and panels are taking shape on the bench.
- The glass cutting table is the primary surface: a muted, functional workbench tone with scattered glass pieces in jewel colors resting on it, some cut to shape, some waiting to be scored.
- Lead came strips form thin dark grid lines (`border` or thin `divide` lines) that organize glass pieces into pattern sections — these are the skeleton of the emerging panel.
- Soldering iron glow is a warm point-light accent (orange-white dot with radial glow) that appears at junctions where lead lines meet, representing the act of joining.
- Painted glass panels show colored glass with hand-painted detail lines (grisaille painting) visible on their surface — the artisan has painted faces, folds, and details on the glass before firing.
- Kiln opening glow is a deep orange-red radiance (`bg-[#d45a1a]` with warm shadow) that suggests the heat of fused glass, used as a dramatic accent or status indicator.
- Pattern cartoons are the full-size paper templates on which glass pieces are laid out — rendered as off-white translucent paper (`bg-[#f0ead0]`) with sketched black lines indicating cut shapes.
- Copper foil texture is a warm metallic accent (`bg-[#b87333]`) with subtle radial gradient to simulate the thin copper tape used in the Tiffany foil technique.
- The overall palette is jewel glass colors against warm workshop neutrals, with dark lead lines and metallic accents creating the visual grammar of a working glass studio.

## Core Material Recipes

### 1) Glass Cutting Table Surface

The primary workbench surface where all craft activity happens. A warm, neutral work surface with subtle wood grain suggestion.

- Base: `bg-[#e8d8b8]` (warm wood table tone).
- Grain texture: `bg-[linear-gradient(90deg,transparent_0%,rgba(160,128,80,0.08)_50%,transparent_100%)]` overlaid at repeated intervals.
- Surface shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.12)]` to give depth as if objects sit on a recessed surface.
- Full: `bg-[#e8d8b8] bg-[linear-gradient(90deg,transparent_0%,rgba(160,128,80,0.08)_50%,transparent_100%)] shadow-[inset_0_2px_8px_rgba(0,0,0,0.12)] rounded-lg p-6`.

### 2) Scattered Glass Pieces on Table

Individual cut glass pieces resting on the cutting table. Each piece is a jewel-toned shape with subtle translucency and edge definition.

```html
<div class="absolute top-4 left-8 w-16 h-12 bg-[#c41e1e]/85 border border-[#8a1414] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)] rotate-3"></div>
<div class="absolute top-12 left-28 w-10 h-14 bg-[#1a4a8a]/85 border border-[#12346a] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)] -rotate-2"></div>
<div class="absolute top-6 left-44 w-12 h-10 bg-[#1a6a3a]/85 border border-[#124a2a] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)] rotate-7"></div>
```

Each piece: jewel color at 85% opacity, thin dark border matching the glass color family, inset white glow for surface reflection, slight rotation for natural scattered placement.

### 3) Lead Came Strip Grid

Thin dark lines forming the structural grid of an emerging stained glass panel. Lead came strips are the skeleton — visible, precise, and dark.

- Strip color: `bg-[#3a3a3a]` (dark lead gray).
- Grid structure: use `divide-x divide-y` with custom colors, or CSS Grid with thin borders.
- Full grid: `border border-[#3a3a3a]` container with `divide-[#3a3a3a]` for internal lines.

```html
<div class="border-2 border-[#3a3a3a] grid grid-cols-4 grid-rows-3 divide-x divide-y divide-[#3a3a3a]">
  <div class="bg-[#c41e1e]/80"></div>
  <div class="bg-[#1a4a8a]/80"></div>
  <div class="bg-[#d4a848]/80"></div>
  <div class="bg-[#1a6a3a]/80"></div>
  <!-- ... more cells with glass colors ... -->
</div>
```

The lead came grid is thinner than finished stained glass leading (`border-2` not `border-4`) because the workshop shows the panel under construction — the lead is being fitted, not yet soldered at every joint.

### 4) Soldering Iron Glow Point

A warm point of light at a lead junction, representing the soldering iron actively joining two lead came strips.

- Glow center: `bg-[#ffcc66]` (hot solder point).
- Radial glow: `shadow-[0_0_6px_2px_rgba(255,200,80,0.6),0_0_20px_6px_rgba(255,160,40,0.2)]`.
- Solder blob: small rounded dot `w-2 h-2 rounded-full bg-[#a0a0a0]` (silver solder bead).

```html
<div class="relative">
  <div class="w-2 h-2 rounded-full bg-[#ffcc66] shadow-[0_0_6px_2px_rgba(255,200,80,0.6),0_0_20px_6px_rgba(255,160,40,0.2)]"></div>
</div>
```

Position these at intersections in the lead came grid to show active soldering work.

### 5) Painted Glass Panel (Grisaille Detail)

A colored glass panel with visible hand-painted detail lines — the artisan has painted facial features, leaf veins, drapery folds, or decorative patterns onto the glass surface using grisaille paint before firing.

- Glass base: `bg-[#1a4a8a]/80` with inner glow.
- Paint lines: thin black or dark gray lines drawn with SVG paths or pseudo-elements.
- Surface sheen: `shadow-[inset_0_0_12px_rgba(255,255,255,0.1)]` to suggest fired glass surface.

```html
<div class="relative w-32 h-40 bg-[#1a4a8a]/80 border border-[#3a3a3a] shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] overflow-hidden">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 120" fill="none" stroke="#2a2a2a" stroke-width="0.8">
    <!-- Grisaille face detail -->
    <ellipse cx="50" cy="40" rx="18" ry="22"/>
    <line x1="42" y1="36" x2="46" y2="36"/>
    <line x1="54" y1="36" x2="58" y2="36"/>
    <path d="M45 48 Q50 54 55 48"/>
    <path d="M30 65 Q50 75 70 65"/>
    <path d="M35 75 Q50 85 65 75"/>
  </svg>
</div>
```

The paint lines are subtle dark strokes visible against the colored glass, giving the impression of hand-painted grisaille detail.

### 6) Kiln Opening Glow

The dramatic orange-red radiance from inside a glass fusing kiln. Used as a status indicator, background accent, or dramatic focal point.

- Glow source: `bg-[#d45a1a]` transitioning to `bg-[#ff3a0a]` at hottest point.
- Opening frame: dark surround `bg-[#2a2018]` (kiln brick/shell).
- Radial glow spread: `shadow-[0_0_40px_10px_rgba(212,90,26,0.4),0_0_80px_30px_rgba(212,60,10,0.15)]`.

```html
<div class="relative w-48 h-32 bg-[#2a2018] rounded-lg overflow-hidden flex items-center justify-center">
  <div class="absolute inset-4 bg-gradient-to-b from-[#ff3a0a] via-[#d45a1a] to-[#8a3a0a] rounded shadow-[0_0_40px_10px_rgba(212,90,26,0.4),0_0_80px_30px_rgba(212,60,10,0.15)]"></div>
  <span class="relative z-10 text-[#f0ead0] font-serif text-sm tracking-wider uppercase">Fusing</span>
</div>
```

### 7) Pattern Cartoon Sketch

The full-size paper template used to guide glass piece placement. Off-white translucent paper with sketched black cut lines.

- Paper base: `bg-[#f0ead0]` (pattern paper cream).
- Paper texture: subtle noise or slight gradient variation.
- Cut lines: thin black strokes (`stroke:#2a2a2a; stroke-width:0.5-1`).
- Pencil marks: lighter gray strokes for layout annotations.

```html
<div class="relative bg-[#f0ead0] border border-[#d0c8a0] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
  <svg viewBox="0 0 200 160" fill="none" class="w-full h-full">
    <!-- Pattern cartoon cut lines -->
    <path d="M20 20 L60 15 L55 60 L15 55 Z" stroke="#2a2a2a" stroke-width="0.75" fill="none"/>
    <path d="M60 15 L100 20 L95 65 L55 60 Z" stroke="#2a2a2a" stroke-width="0.75" fill="none"/>
    <path d="M100 20 L140 18 L138 62 L95 65 Z" stroke="#2a2a2a" stroke-width="0.75" fill="none"/>
    <!-- Pencil annotation -->
    <text x="35" y="40" font-size="6" fill="#888" font-family="serif">ruby</text>
    <text x="75" y="42" font-size="6" fill="#888" font-family="serif">sapphire</text>
  </svg>
</div>
```

### 8) Copper Foil Texture Accent

Warm metallic copper accent used for the Tiffany foil technique borders and decorative elements.

- Base: `bg-[#b87333]`.
- Metallic sheen: `bg-gradient-to-br from-[#d4934a] via-[#b87333] to-[#8a5522]`.
- Subtle edge highlight: `shadow-[inset_0_1px_2px_rgba(255,200,140,0.3)]`.
- Full: `bg-gradient-to-br from-[#d4934a] via-[#b87333] to-[#8a5522] shadow-[inset_0_1px_2px_rgba(255,200,140,0.3)]`.

```html
<div class="w-full h-1 bg-gradient-to-br from-[#d4934a] via-[#b87333] to-[#8a5522] shadow-[inset_0_1px_2px_rgba(255,200,140,0.3)]"></div>
```

Use as thin accent lines, border highlights, or small icon fills to represent copper foil tape.

### 9) Glass Scoring Tool Line

A thin, precise line representing a glass cutter's score mark on a glass piece — the initial cut guide before breaking.

- Score line: `border-b border-dashed border-[#c0c0c0]` or SVG dashed line.
- Applied over a glass piece to show where the artisan has scored but not yet broken.

### 10) Workshop Tool Station

A compact toolbar or station grouping representing the artisan's active tools — cutter, grozing pliers, fid, flux brush.

```html
<div class="flex items-center gap-3 bg-[#d8c8a8] border border-[#b0a080] rounded px-4 py-2 shadow-sm">
  <div class="w-6 h-1 bg-[#a0a0a0] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)]" title="Glass Cutter"></div>
  <div class="w-1 h-6 bg-[#6a5a4a] rounded shadow-[0_1px_2px_rgba(0,0,0,0.2)]" title="Grozing Pliers"></div>
  <div class="w-4 h-4 rounded bg-[#b87333] shadow-[0_1px_2px_rgba(0,0,0,0.2)]" title="Copper Foil"></div>
  <div class="w-3 h-5 rounded-t bg-[#8a8a8a] shadow-[0_1px_2px_rgba(0,0,0,0.2)]" title="Soldering Iron"></div>
</div>
```

## Color Palette System

### Glass Jewel Palette

| Color | Hex | Usage |
|---|---|---|
| Ruby Glass | `#c41e1e` | Red glass pieces, warm accents |
| Sapphire Glass | `#1a4a8a` | Blue glass pieces, cool accents |
| Emerald Glass | `#1a6a3a` | Green glass pieces, nature elements |
| Amber Glass | `#d4a848` | Yellow-gold glass pieces, warm highlights |
| Amethyst Glass | `#6a2a8a` | Purple glass pieces, regal accents |

### Workshop Material Palette

| Color | Hex | Usage |
|---|---|---|
| Lead Came | `#3a3a3a` | Grid lines, structural strips, came texture |
| Solder Silver | `#a0a0a0` | Solder blobs, metallic joints, tool surfaces |
| Copper Foil | `#b87333` | Foil tape accents, metallic warmth, Tiffany technique |
| Pattern Paper | `#f0ead0` | Cartoon templates, sketch backgrounds, paper texture |
| Kiln Glow | `#d45a1a` | Fusing heat, status indicators, dramatic accents |
| Kiln Core | `#ff3a0a` | Hottest point in kiln, intense heat accent |
| Cutting Table | `#e8d8b8` | Primary workbench surface, neutral ground |
| Workshop Wall | `#d0c0a0` | Secondary surfaces, panel backgrounds |
| Kiln Brick | `#2a2018` | Dark surround for kiln opening, heavy frames |
| Grisaille Paint | `#2a2a2a` | Paint detail lines on glass, sketch strokes |

Rules: Glass colors are jewel-toned and slightly translucent (80-90% opacity). Workshop neutrals are warm (never cool gray). Lead and solder are the only true neutral grays. Copper provides metallic warmth. Kiln glow is the only high-saturation warm accent — reserve it for heat-related elements and dramatic moments.

## Typography Recommendations

Stained glass workshop typography blends craft labeling with artisanal warmth:

- **Section headings:** Playfair Display, Cormorant Garamond, or Libre Baskerville (classical serif with craft elegance).
- **Tool labels and measurements:** IBM Plex Mono or JetBrains Mono (precise, workshop-functional).
- **Body text:** Source Serif 4, Merriweather, or Crimson Text (readable serif with warmth).
- **Pattern annotations:** `font-mono text-xs text-[#888]` (pencil-sketch annotation feel).
- **Station headings:** `font-serif uppercase tracking-[0.2em] text-xs text-[#3a3a3a]` (workshop sign lettering).
- Sans-serif is acceptable for functional UI elements (buttons, navigation) but primary content should use serif typefaces that echo the craft's classical traditions.

## Component Architecture Pattern

1. Cutting table surface as the primary container background (warm neutral).
2. Scattered glass pieces positioned absolutely or in a flex layout on the table.
3. Lead came grid overlay organizing glass pieces into a panel structure.
4. Soldering glow points at grid intersections (active construction).
5. Pattern cartoon sidebar or overlay showing the template guide.
6. Painted glass panel as a featured element with grisaille detail.
7. Kiln status indicator in the corner or as a section header accent.
8. Copper foil accents as thin decorative borders and dividers.
9. Tool station as a compact toolbar at the top or bottom.

## Interaction Rules

- Default state: warm workshop surface with scattered glass pieces, lead grid visible.
- Hover on glass piece: `hover:shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_0_12px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200` (piece lifts slightly, glass gleams brighter).
- Hover on lead junction: soldering glow intensifies `shadow-[0_0_10px_4px_rgba(255,200,80,0.8)]` (iron approaching).
- Active/dragging a glass piece: `active:scale-95 active:shadow-[0_1px_2px_rgba(0,0,0,0.3)]` (piece pressed into table).
- Kiln status pulse: gentle animation `animate-pulse` on the kiln glow element (heat cycling).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#b87333] focus:ring-offset-2 focus:ring-offset-[#e8d8b8]` (copper foil ring on table surface).
- Transitions: `transition-all duration-200` for piece movements, `transition-shadow duration-500` for glow effects (light changes are organic, not mechanical).

## Reusable Tailwind Tokens

- Glass piece (ruby): `bg-[#c41e1e]/85 border border-[#8a1414] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)]`
- Glass piece (sapphire): `bg-[#1a4a8a]/85 border border-[#12346a] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)]`
- Glass piece (emerald): `bg-[#1a6a3a]/85 border border-[#124a2a] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)]`
- Glass piece (amber): `bg-[#d4a848]/85 border border-[#a08030] shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_0_8px_rgba(255,255,255,0.15)]`
- Lead came strip: `bg-[#3a3a3a]` at 2-3px width or `border-[#3a3a3a] border-2`
- Solder point glow: `bg-[#ffcc66] shadow-[0_0_6px_2px_rgba(255,200,80,0.6),0_0_20px_6px_rgba(255,160,40,0.2)]`
- Solder bead: `w-2 h-2 rounded-full bg-[#a0a0a0] shadow-[0_1px_2px_rgba(0,0,0,0.3)]`
- Copper foil line: `h-1 bg-gradient-to-br from-[#d4934a] via-[#b87333] to-[#8a5522]`
- Pattern paper: `bg-[#f0ead0] border border-[#d0c8a0] shadow-[0_2px_6px_rgba(0,0,0,0.1)]`
- Cutting table: `bg-[#e8d8b8] shadow-[inset_0_2px_8px_rgba(0,0,0,0.12)]`
- Kiln glow panel: `bg-gradient-to-b from-[#ff3a0a] via-[#d45a1a] to-[#8a3a0a] shadow-[0_0_40px_10px_rgba(212,90,26,0.4)]`
- Kiln frame: `bg-[#2a2018] rounded-lg`
- Grisaille detail: SVG stroke `#2a2a2a` at `stroke-width:0.75-1` over colored glass
- Workshop toolbar: `bg-[#d8c8a8] border border-[#b0a080] rounded px-4 py-2 shadow-sm`

## Quality Checklist (must pass)

- Cutting table surface is warm neutral (not white, not dark — it is a wooden workbench).
- Glass pieces use jewel colors at slight transparency (80-90% opacity), not flat opaque fills.
- Lead came lines are thin and dark (`border-2` or `border-[#3a3a3a]`), forming visible grid patterns.
- Soldering glow points appear at lead line junctions as warm radial light.
- At least one painted glass panel shows visible grisaille detail (SVG paint lines over colored glass).
- Kiln element uses deep orange-red gradient with dramatic shadow glow.
- Pattern cartoon uses off-white paper (`#f0ead0`) with visible black cut lines.
- Copper foil appears as a warm metallic gradient accent, not flat brown.
- Typography mixes serif headings with monospace tool labels (workshop-functional aesthetic).
- The overall aesthetic reads as a working craft studio, not a finished architectural element.

## Anti-Patterns

- White or cool-gray work surface (the cutting table must be warm, like wood).
- Glass pieces as fully opaque flat colors (they must be translucent with inner glow).
- Thick black borders on glass pieces (glass pieces have thin matching-color borders; lead came is the thick dark structure).
- Missing the lead came grid (the workshop is about constructing panels — the grid must be visible).
- Neon or artificial colors (all colors must be glass-jewel or workshop-neutral).
- Cool metallic tones for copper (copper is warm — `#b87333` not `#b0b0b0`).
- Finished cathedral window appearance (this is a workshop — show construction, tools, pattern guides, and in-progress work).
- Missing the pattern cartoon (the paper template is essential to the stained glass creation process).
- Pure black background (the workshop is a warmly lit room, not a dark cathedral).
- Skipping the kiln (glass fusing is a core part of the stained glass workflow).
- Flat grid without solder points (every lead junction should show at least one solder glow).
- Glass pieces perfectly aligned (real glass pieces on a table have slight rotations and scattered placement).

## Accessibility Considerations

- Glass piece colors against warm table background (`#e8d8b8`) must maintain WCAG AA contrast for any text overlaid — use dark text on light glass pieces and light text on dark glass pieces.
- Lead came lines (`#3a3a3a`) on warm backgrounds provide strong visual structure for low-vision users.
- Solder glow points are decorative indicators — any information they convey must also be available through text labels.
- Focus states use copper foil ring (`focus:ring-[#b87333]`) which is visible against the warm table surface.
- Kiln glow animation must respect `prefers-reduced-motion: reduce` — replace pulse with static glow.
- Grisaille SVG details are decorative — marked `aria-hidden="true"` when purely ornamental.
- Pattern cartoon text annotations use sufficient size (`text-xs` minimum) and contrast against paper background.
- Touch targets for glass pieces must be at least 44x44px — combine small pieces into larger interactive areas if needed.
- Color is never the sole identifier for glass piece types — pair color with shape or label for colorblind users.
- Workshop tool station icons must have `aria-label` or visible text labels for screen readers.
