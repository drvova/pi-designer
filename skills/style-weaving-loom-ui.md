---
name: weaving-loom-ui
description: Build weaving loom UI components (thread warp tension, shuttle pass, pattern draft, colored yarn bobbins, woven textile emerging, heddle frames) with thread textures, woven pattern accents, and the rhythmic craft of textile weaving. Trigger this skill when the user asks for weaving loom design, warp thread UI, shuttle pattern, draft grid, yarn bobbin components, woven textile texture, heddle frame elements, loom workshop, or handwoven textile interfaces.
---

# Weaving Loom UI

Use this skill to design and implement interfaces inspired by hand weaving looms: parallel warp thread surfaces with visible tension, horizontal shuttle-pass accents, colored pattern draft grids, yarn bobbin circles, emerging woven textile checkerboard textures, heddle frame structures, and the rhythmic, meditative craft of throwing a shuttle across a warp.

## Non-Negotiable Foundations

- Weaving is warp (vertical) and weft (horizontal) interlaced on a wooden frame under tension. Every surface should feel like thread under tension on a loom — taut, linear, and rhythmically structured.
- Materials are thread (cotton, wool, linen, silk), hardwood (loom frame, heddles), and paper (pattern draft). Surfaces are matte, fibrous, and structured — never glossy, glassy, or digital.
- Colors come from yarn-dyeing traditions: natural warp white/cream, mixed weft colors (indigo, madder red, weld yellow, walnut brown, sage green, muted violet), and warm wood tones. The palette should feel like a weaver's yarn stash beside a wooden loom.
- Structural elements are the defining visual: parallel vertical warp threads, horizontal weft passes creating checkerboard weave texture, the pattern draft grid (colored squares), yarn bobbin circles, and the wooden heddle frame. Every component references a real loom part or weaving process.
- Typography evokes pattern draft notation: grid-aligned, monospaced for draft squares, and warm serif for descriptive text like a weaver's project notes.
- The aesthetic is rhythmic, methodical, and materially honest — the opposite of random, chaotic, or fast. Everything should feel like it was woven one pick at a time on a hand loom.

## Core Material Recipes

### 1) Warp Thread Surface (the foundational surface)

The signature weaving surface: parallel vertical threads under tension, visible across the entire surface.

- Background: `bg-[#f5f0f0]` (warm warp white, natural undyed cotton/linen).
- Warp thread lines: repeating vertical lines in alternating thread tones: `bg-[repeating-linear-gradient(90deg,#e8e0d8_0px,#e8e0d8_1px,#f5f0f0_1px,#f5f0f0_6px,#ddd5cc_6px,#ddd5cc_7px,#f5f0f0_7px,#f5f0f0_12px)]`.
- Tension feel: subtle horizontal gradient overlay to suggest the warp being pulled taut from beam to beam: `bg-[linear-gradient(0deg,rgba(138,106,58,0.05)_0%,transparent_10%,transparent_90%,rgba(138,106,58,0.05)_100%)]`.
- Border: `border border-[#c4b898]` (linen thread edge).
- Shadow: `shadow-[0_2px_6px_rgba(80,60,30,0.1)]` (warm, loom-frame shadow).
- Full: `bg-[#f5f0f0] bg-[repeating-linear-gradient(90deg,#e8e0d8_0px,#e8e0d8_1px,#f5f0f0_1px,#f5f0f0_6px,#ddd5cc_6px,#ddd5cc_7px,#f5f0f0_7px,#f5f0f0_12px)] border border-[#c4b898] shadow-[0_2px_6px_rgba(80,60,30,0.1)] p-6 rounded-sm`.

### 2) Woven Textile Checkerboard Pattern

The defining woven texture: warp and weft interlacing in a plain weave checkerboard.

Using CSS repeating gradients to create a plain-weave checkerboard:

```css
.woven-check {
  background-image:
    repeating-linear-gradient(0deg, transparent 0px, transparent 6px, rgba(0,0,0,0.04) 6px, rgba(0,0,0,0.04) 12px),
    repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(0,0,0,0.04) 6px, rgba(0,0,0,0.04) 12px);
  background-size: 12px 12px;
}
```

For a more detailed woven textile using SVG tile:

```html
<svg viewBox="0 0 100 100" class="w-full h-full opacity-30" preserveAspectRatio="xMidYMid repeat">
  <defs>
    <pattern id="plainweave" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="6" height="6" fill="#c4b898" opacity="0.5"/>
      <rect x="6" y="6" width="6" height="6" fill="#c4b898" opacity="0.5"/>
      <rect x="0" y="6" width="6" height="6" fill="#e8e0d8" opacity="0.5"/>
      <rect x="6" y="0" width="6" height="6" fill="#e8e0d8" opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#plainweave)"/>
</svg>
```

### 3) Pattern Draft Grid

The weaver's notation: a grid of colored squares showing which warp threads are raised for each pick.

- Grid: CSS grid with fixed cell size: `grid grid-cols-[repeat(auto-fill,12px)] gap-0`.
- Filled square (thread up): `bg-[#1a3a5a]` (indigo — warp raised).
- Empty square (thread down): `bg-[#f0ead0]` (paper cream — warp lowered).
- Grid lines: `border border-[#d8d0b0]` on each cell (draft paper lines).
- Header row: colored indicators for warp yarn color: small squares above each column.
- Side column: pick numbers in `font-mono text-[10px] text-[#6a5a3a]`.
- Full grid container: `bg-[#f0ead0] p-3 border border-[#c4b898] shadow-sm rounded-sm`.

### 4) Yarn Bobbin Circle

Colored thread spool — a circular element showing the yarn color and quantity.

```html
<div class="flex gap-3">
  <div class="relative w-12 h-12 rounded-full bg-[#1a3a5a] border-2 border-[#0e2540] shadow-sm flex items-center justify-center" title="Indigo cotton">
    <div class="absolute inset-1 rounded-full border border-[rgba(255,255,255,0.15)]"></div>
    <div class="w-3 h-3 rounded-full bg-[#f5f0f0] border border-[#ddd5cc]"></div>
  </div>
  <div class="relative w-12 h-12 rounded-full bg-[#8a2020] border-2 border-[#5a1515] shadow-sm flex items-center justify-center" title="Madder red wool">
    <div class="absolute inset-1 rounded-full border border-[rgba(255,255,255,0.15)]"></div>
    <div class="w-3 h-3 rounded-full bg-[#f5f0f0] border border-[#ddd5cc]"></div>
  </div>
  <div class="relative w-12 h-12 rounded-full bg-[#5a7a3a] border-2 border-[#3a5a2a] shadow-sm flex items-center justify-center" title="Sage green linen">
    <div class="absolute inset-1 rounded-full border border-[rgba(255,255,255,0.15)]"></div>
    <div class="w-3 h-3 rounded-full bg-[#f5f0f0] border border-[#ddd5cc]"></div>
  </div>
</div>
```

- Outer circle: yarn color fill with dark border (the wound yarn).
- Inner ring: subtle highlight border (thread surface sheen).
- Center hole: small cream circle with thin border (the bobbin spindle hole).

### 5) Heddle Frame Structure

The wooden frame with vertical heddle slots that control warp thread lift.

```html
<svg viewBox="0 0 300 100" class="w-full h-full opacity-70">
  <defs>
    <pattern id="heddle-slots" x="0" y="0" width="10" height="100" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="300" height="6" fill="#8a6a3a" rx="1"/>
      <rect x="0" y="94" width="300" height="6" fill="#8a6a3a" rx="1"/>
      <rect x="4" y="6" width="2" height="88" fill="#f5f0f0" rx="0.5"/>
      <rect x="4" y="6" width="2" height="88" fill="none" stroke="#c4b898" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="300" height="100" fill="url(#heddle-slots)"/>
</svg>
```

- Top/bottom rails: `bg-[#8a6a3a]` (hardwood heddle frame) with grain texture.
- Heddle slots: vertical cream lines between rails (where warp threads pass through).
- Used as a structural divider between pattern sections.

### 6) Shuttle Pass Accent

The horizontal line of the shuttle carrying weft across the warp.

- Horizontal line: `h-0.5 bg-[#3a2a1a]` (dark shuttle body) centered on warp surface.
- Shuttle tips: small SVG triangles at each end (the pointed shuttle nose and tail).
- Weft trail: subtle colored line following behind the shuttle (the weft thread it leaves):
```html
<svg viewBox="0 0 400 8" class="w-full h-2">
  <line x1="0" y1="4" x2="400" y2="4" stroke="#8a2020" stroke-width="1" stroke-dasharray="6,4" opacity="0.6"/>
  <polygon points="395,1 400,4 395,7" fill="#3a2a1a"/>
</svg>
```

### 7) Loom Wooden Frame Border

The heavy hardwood frame that holds the entire loom structure.

- Border: `border-4 border-[#6a4a2a]` (thick, heavy loom frame wood).
- Wood grain: SVG noise or repeating gradient for grain texture: `bg-[repeating-linear-gradient(87deg,#6a4a2a_0px,#7a5a3a_2px,#6a4a2a_4px)]`.
- Corner joints: small SVG squares at corners simulating mortise-and-tenon joints.
- Shadow: `shadow-[0_4px_16px_rgba(60,40,15,0.25)]` (heavy loom weight).

### 8) Weaving Card with Draft Preview

A card component showing a weaving project with its draft pattern.

- Frame: `border-4 border-[#6a4a2a] rounded-sm shadow-[0_4px_16px_rgba(60,40,15,0.25)]`.
- Draft preview: miniature pattern draft grid (recipe 3) at top of card.
- Warp color row: small colored circles below draft (recipe 4 simplified).
- Title: `font-serif font-semibold text-[#3a2a1a]` (weaver's project name).
- Body: `font-serif text-sm text-[#6a5a3a]` (weaver's notes).
- Full: `bg-[#f5f0f0] border-4 border-[#6a4a2a] p-4 rounded-sm shadow-[0_4px_16px_rgba(60,40,15,0.25)]`.

### 9) Weft Color Strip

A horizontal band showing the sequence of weft colors in a project.

```html
<div class="flex h-3 w-full rounded-sm overflow-hidden border border-[#c4b898]">
  <div class="flex-1 bg-[#1a3a5a]"></div>
  <div class="flex-1 bg-[#8a2020]"></div>
  <div class="flex-1 bg-[#1a3a5a]"></div>
  <div class="flex-2 bg-[#f0ead0]"></div>
  <div class="flex-1 bg-[#1a3a5a]"></div>
  <div class="flex-1 bg-[#8a2020]"></div>
</div>
```

- Each segment width proportional to pick count for that color.
- Rounded and bordered to sit as a standalone strip or inside a card.

### 10) Thread Count Indicator

Vertical tick marks showing warp density (ends per inch).

```html
<svg viewBox="0 0 120 30" class="w-full h-6 opacity-50">
  <defs>
    <pattern id="epi-ticks" x="0" y="0" width="8" height="30" patternUnits="userSpaceOnUse">
      <line x1="4" y1="4" x2="4" y2="26" stroke="#c4b898" stroke-width="1"/>
      <circle cx="4" cy="4" r="1" fill="#8a6a3a"/>
    </pattern>
  </defs>
  <rect width="120" height="30" fill="url(#epi-ticks)"/>
  <text x="60" y="20" text-anchor="middle" font-size="8" fill="#6a5a3a" font-family="monospace">20 EPI</text>
</svg>
```

## Color Palette System

### Core Weaving Palette

| Color | Hex | Material Name | Role |
|---|---|---|---|
| Warp White | `#f5f0f0` | Natural undyed warp | Primary background |
| Warp Shadow | `#e8e0d8` | Warp thread shadow | Texture lines |
| Warp Depth | `#ddd5cc` | Warp thread depth | Alternate texture |
| Indigo | `#1a3a5a` | Indigo-dyed warp/weft | Primary thread accent |
| Indigo Dark | `#0e2540` | Deep indigo | Shadows, borders |
| Madder Red | `#8a2020` | Madder root dyed | Secondary thread accent |
| Madder Dark | `#5a1515` | Deep madder | Red shadows |
| Weld Yellow | `#c4a043` | Weld flower dyed | Highlight thread |
| Walnut Brown | `#3a2a1a` | Walnut hull dyed | Text, shuttle, dark |
| Sage Green | `#5a7a3a` | Sage/indigo overdyed | Tertiary accent |
| Sage Dark | `#3a5a2a` | Deep sage | Green shadows |
| Muted Violet | `#6a4a7a` | Logwood dyed | Quaternary accent |
| Draft Paper | `#f0ead0` | Pattern draft paper | Grid backgrounds |
| Heddle Wood | `#8a6a3a` | Hardwood heddle frame | Structural elements |
| Loom Frame | `#6a4a2a` | Heavy loom wood | Frame borders |
| Loom Frame Dark | `#4a3a1a` | Aged loom wood | Frame shadows |
| Textile Woven | `#c4b898` | Natural linen woven | Woven texture, dividers |
| Thread Linen | `#c4b898` | Waxed linen sewing | Thread lines |

Rules: Warp white (`#f5f0f0`) is the foundation — every surface begins as the warp threads on the loom. Indigo (`#1a3a5a`) is the primary accent, used for headings, active draft squares, and thread highlights. Wood tones (`#8a6a3a`, `#6a4a2a`) frame content like the loom frame holds the warp. The palette should feel like a weaver's workshop — yarn cones, wooden loom, pattern drafts on paper. No neons, no pastels, no cold grays. Colors have the warmth and depth of naturally dyed yarn.

## Typography Recommendations

Weaving typography evokes pattern draft notation and weaver's project notebooks:

- **Draft grid labels:** Monospace at `font-mono text-[10px] text-[#6a5a3a]` — precise, grid-aligned, like numbers on a draft graph.
- **Project headings:** Spectral, Lora, or Crimson Pro at `font-serif font-semibold text-[#3a2a1a] tracking-wide` — the title on a weaver's project card.
- **Body text:** EB Garamond, Libre Baramond, or Crimson Text at `font-serif text-[#3a2a1a]` — warm readable serif for weaver's notes and descriptions.
- **Yarn labels:** `font-mono text-xs text-[#6a5a3a] uppercase tracking-widest` — workshop inventory style for bobbin labels.
- **Thread count notation:** `font-mono text-sm text-[#8a6a3a]` — EPI/PPI numbers, like notations on a loom.
- **Pattern name:** `font-serif italic text-[#5a7a3a]` — the name of the weave pattern in italic, like a handwritten label.
- Avoid thin sans-serif fonts alone. Weaving pairs monospace (draft notation) with warm serif (project notes) and occasionally slab serif (loom labels).

## Component Architecture Pattern

1. Warp white background with visible vertical thread texture (parallel lines).
2. Woven checkerboard pattern overlays on textile surfaces.
3. Pattern draft grids for data display (colored squares as binary indicators).
4. Yarn bobbin circles for color palette or selection.
5. Wooden heddle frame dividers between sections.
6. Shuttle pass horizontal accents for section breaks.
7. Loom frame borders for major structural containers.
8. Weft color strip bars for sequence/distribution display.
9. Thread count tick marks for density/metric indicators.
10. Draft-paper backgrounds for grids and data tables.

## Interaction Rules

- Default state: warp white, wooden frame, calm rhythmic structure.
- Hover: warp threads brighten slightly, bobbin colors deepen, gentle lift.
  - `hover:bg-[#faf5f5] hover:shadow-[0_4px_10px_rgba(80,60,30,0.15)] hover:-translate-y-0.5 transition-all duration-300`.
- Active: subtle press like beating the weft (`active:translate-y-0.5 active:shadow-[0_1px_4px_rgba(80,60,30,0.08)]`).
- Focus: thread-colored ring `focus:ring-2 focus:ring-[#1a3a5a]/40 focus:ring-offset-2 focus:ring-offset-[#f5f0f0]`.
- Transitions: `transition-all duration-300 ease-in-out` (rhythmic, steady — like the beat of a shuttle).
- No fast, snappy, or aggressive motion. Everything feels like the rhythmic back-and-forth of weaving.

## Reusable Tailwind Tokens

- Warp surface: `bg-[#f5f0f0] bg-[repeating-linear-gradient(90deg,#e8e0d8_0px,#e8e0d8_1px,#f5f0f0_1px,#f5f0f0_6px,#ddd5cc_6px,#ddd5cc_7px,#f5f0f0_7px,#f5f0f0_12px)] border border-[#c4b898] shadow-[0_2px_6px_rgba(80,60,30,0.1)]`
- Woven checkerboard: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_6px,rgba(0,0,0,0.04)_6px,rgba(0,0,0,0.04)_12px),repeating-linear-gradient(90deg,transparent_0px,transparent_6px,rgba(0,0,0,0.04)_6px,rgba(0,0,0,0.04)_12px)] bg-[size:12px_12px]`
- Draft grid cell (up): `w-3 h-3 bg-[#1a3a5a] border border-[#d8d0b0]`
- Draft grid cell (down): `w-3 h-3 bg-[#f0ead0] border border-[#d8d0b0]`
- Draft grid container: `bg-[#f0ead0] p-3 border border-[#c4b898] shadow-sm rounded-sm`
- Bobbin circle: `w-12 h-12 rounded-full border-2 shadow-sm flex items-center justify-center`
- Bobbin center hole: `w-3 h-3 rounded-full bg-[#f5f0f0] border border-[#ddd5cc]`
- Heddle frame: `bg-[#8a6a3a] h-6 rounded-sm` (top/bottom rail)
- Loom frame border: `border-4 border-[#6a4a2a] rounded-sm shadow-[0_4px_16px_rgba(60,40,15,0.25)]`
- Shuttle pass: `h-0.5 bg-[#3a2a1a]` with SVG arrow tips
- Weft color strip: `flex h-3 rounded-sm overflow-hidden border border-[#c4b898]`
- Thread count ticks: SVG pattern with vertical lines and circles
- Indigo button: `bg-[#1a3a5a] text-[#f5f0f0] font-serif font-semibold px-6 py-3 border border-[#0e2540] rounded-sm hover:bg-[#0e2540] transition-colors`
- Wood button: `bg-[#6a4a2a] text-[#f5f0f0] font-serif font-semibold px-6 py-3 border border-[#4a3a1a] rounded-sm hover:bg-[#7a5a3a] transition-colors`
- Warp button: `bg-[#f5f0f0] text-[#3a2a1a] font-serif px-6 py-3 border border-[#c4b898] rounded-sm hover:bg-[#e8e0d8] transition-colors`
- Draft paper background: `bg-[#f0ead0]` (for grids, tables, notation areas)
- Weaving card: `bg-[#f5f0f0] border-4 border-[#6a4a2a] p-4 rounded-sm shadow-[0_4px_16px_rgba(60,40,15,0.25)]`
- Warm shadow: `shadow-[0_2px_6px_rgba(80,60,30,0.1)]`

## Quality Checklist (must pass)

- Background is warp white with visible vertical thread texture (not flat or pure white).
- At least one woven checkerboard pattern element (CSS grid or SVG plain weave).
- Pattern draft grid present for data display (colored squares in a grid).
- Yarn bobbin circle elements for color palette or selection.
- Color palette uses yarn-dyeing tradition colors (indigo, madder, weld, walnut, sage).
- Typography is monospace (for draft notation) and serif (for project notes) — never sans-serif alone.
- Wooden heddle frame or loom frame border present as structural element.
- Shuttle pass or weft horizontal accent used for section breaks.
- Thread count indicators or warp-density notation present.
- Shadows are warm, wooden, and loom-like (brown/amber undertones, not gray).
- The aesthetic reads as a weaving loom — warp threads, wooden frame, pattern draft.
- Motion is rhythmic and steady (like the shuttle passing back and forth).
- Thread texture is visible on every surface (warp lines, woven checkerboard, or bobbin circles).

## Anti-Patterns

- Flat, textureless backgrounds (weaving requires visible warp thread lines or woven texture).
- Solid modern borders (use loom-frame wood borders, heddle-frame rails, or thread lines).
- Missing warp thread vertical lines (parallel vertical threads are the defining visual element).
- Neon or cold palettes (use naturally dyed yarn colors — indigo, madder, weld, walnut).
- Smooth, glossy, or glass-like surfaces (weaving materials are matte, fibrous, and organic).
- Sans-serif typography alone (weaving pairs monospace draft notation with warm serif notes).
- Fast, aggressive animations (weaving is rhythmic, steady, and meditative).
- Digital or technological references (weaving is an ancient, pre-industrial craft).
- Pure white backgrounds (use warm warp white `#f5f0f0`).
- Missing wooden frame elements (the loom frame is the structural heart of weaving).
- Clean digital edges without material reference (every edge should reference thread, wood, or paper).
- Missing pattern draft grid (the draft is the weaver's notation — as fundamental as sheet music).
- Random or chaotic layouts (weaving is grid-based, rhythmic, and structured — layouts should reflect this).

## Accessibility Considerations

- Warp white (`#f5f0f0`) with ink brown text (`#3a2a1a`) provides excellent contrast (WCAG AAA).
- Indigo (`#1a3a5a`) on warp white provides strong contrast (WCAG AA).
- Draft grid cells must have sufficient contrast between filled and empty states.
- Pattern draft SVGs must be `aria-hidden="true"` (decorative) or have `role="img"` with `aria-label`.
- Focus states: `focus:ring-2 focus:ring-[#1a3a5a]/40 focus:ring-offset-2 focus:ring-offset-[#f5f0f0]` (visible against warp white).
- Warp thread texture must not interfere with text readability — keep texture opacity low (0.03-0.05).
- Draft grid cells need `aria-label` or tooltip indicating warp up/down state for screen readers.
- Touch targets must be adequate despite textured, thread-like styling (minimum 44x44px).
- Yarn bobbin circles must have text labels or `title` attributes for screen readers.
- Woven checkerboard patterns must have a solid fallback color for reduced-motion preferences.
- Thread count indicators need text alternatives (not just visual tick marks).
- Color is not the only distinguishing factor in draft grids — add patterns or labels for color-blind users.
