---
name: woodcarving-shop-ui
description: Build woodcarving shop UI components (gouge marks, wood shavings, relief panel, mallet, chisel edge, timber grain, finished sculpture) with carved wood textures, tool marks, and the patient craft of hand-carved woodwork. Trigger this skill when the user asks for woodcarving design, gouge mark textures, wood shaving patterns, relief panel components, mallet silhouettes, chisel edge accents, timber grain surfaces, sculpture UI elements, woodworking workshop, or hand-carved woodwork interfaces.
---

# Woodcarving Shop UI

Use this skill to design and implement interfaces inspired by hand woodcarving workshops: gouge-marked wood surfaces with visible curved tool cuts, spiraling wood shaving curls, raised relief panels carved from timber, mallet and chisel tool silhouettes, natural timber grain patterns, and the patient, subtractive craft of carving form from wood — where every surface reveals the hand and tool that shaped it.

## Non-Negotiable Foundations

- Woodcarving is timber, gouge, chisel, and mallet worked by hand on a workbench. Every surface should feel like a carver's bench — scarred wood, scattered shavings, half-finished relief panels, and sharp steel tools.
- Materials are timber (softwood like basswood or butternut, warm and carveable — never processed plywood or MDF), steel (chisel and gouge edges, cold and sharp), wood shavings (thin, spiraling, pale), and finished wood (oiled, smoothed, the final form revealed). Surfaces are warm, fibrous, and tool-marked — never cold metal, never glossy, never industrially perfect.
- Colors come from woodcarving material traditions: light wood, dark heartwood, gouge shadow, pale shavings, chisel steel, mallet wood, deep timber grain, oiled sculpture finish. The palette should feel like a carver's workshop — a half-carved figure on the bench, shavings on the floor, gouges lined up on the wall.
- Structural elements are the defining visual: gouge mark textures (curved parallel cuts left by a U-gouge), wood shaving spirals (the waste material curling off the chisel), raised relief panels (carved designs emerging from a flat wood surface), mallet and chisel silhouettes (the essential tools), timber grain lines (the natural growth pattern of the wood), and the finished sculpture form (the revelation of carved shape). Every component references a real carving tool, technique, or material state.
- Typography evokes the hand-carved tradition: sturdy serif for carved lettering (like letters incised into wood), handwritten script for tool marks and labels, condensed sans for structural elements. Type should feel like it could be chiseled or branded into wood.
- The aesthetic is patient, subtractive, and materially honest — the opposite of fast, additive, or digitally perfect. Everything should feel like it was carved slowly, shaving by shaving, revealing the form hidden in the timber.

## Core Material Recipes

### 1) Gouge-Marked Wood Surface (the foundational surface)

The signature woodcarving surface: timber scarred with the curved parallel cuts of a U-gouge chisel.

- Background: `bg-[#c4a878]` (light basswood or butternut carving wood).
- Gouge mark texture: repeating curved lines simulating U-gouge cuts across the surface:
  ```css
  background-image:
    repeating-linear-gradient(
      175deg,
      transparent 0px,
      transparent 6px,
      rgba(74,58,26,0.15) 6px,
      rgba(74,58,26,0.15) 7px,
      transparent 7px,
      transparent 9px,
      rgba(160,128,80,0.1) 9px,
      rgba(160,128,80,0.1) 10px
    );
  ```
- Tool mark depth: `shadow-[inset_0_1px_2px_rgba(74,58,26,0.2)]` (shadow inside each gouge cut).
- Border: `border border-[#8a6a3a]` (carved wood edge, slightly darker).
- Shadow: `shadow-[0_4px_12px_rgba(90,58,26,0.3)]` (warm, wooden, workbench shadow).
- Full: `bg-[#c4a878] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_6px,rgba(74,58,26,0.15)_6px,rgba(74,58,26,0.15)_7px,transparent_7px,transparent_9px,rgba(160,128,80,0.1)_9px,rgba(160,128,80,0.1)_10px)] border border-[#8a6a3a] shadow-[0_4px_12px_rgba(90,58,26,0.3)] p-6 rounded-sm`.

### 2) Timber Grain Pattern

The natural growth rings and grain lines of real wood — the material's own signature.

```html
<svg viewBox="0 0 400 200" class="w-full h-full opacity-30" preserveAspectRatio="none">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="6" seed="7" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.35 0 0 0 0 0.23 0 0 0 0 0.1 0 0 0 1 0" result="wood"/>
    </filter>
  </defs>
  <rect width="400" height="200" filter="url(#grain)"/>
</svg>
```

- CSS-only grain approximation: `bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,58,26,0.08)_12px,rgba(90,58,26,0.08)_13px)]` (nearly-vertical thin lines with slight angle for grain direction).
- Knot feature: optional SVG ellipse with concentric ring pattern at a focal point.
- Full wood surface with grain: `bg-[#c4a878] bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,58,26,0.08)_12px,rgba(90,58,26,0.08)_13px)]`.
- Dark heartwood variant: `bg-[#6a4a2a] bg-[repeating-linear-gradient(88deg,transparent_0px,transparent_10px,rgba(42,26,10,0.12)_10px,rgba(42,26,10,0.12)_11px)]`.

### 3) Relief Carved Panel (raised design on wood)

A panel where a design has been carved away, leaving a raised figure against a recessed background — the essence of relief carving.

- Panel base: `bg-[#c4a878]` with grain texture.
- Recessed background: carved away area using `bg-[#a08050]` (slightly darker, the depth of the cut).
- Raised figure: the remaining surface at original wood height, with `shadow-[1px_1px_0_rgba(74,58,26,0.3)]` on one edge to show the carved step-down.
- Depth shadow: `shadow-[inset_2px_2px_4px_rgba(74,58,26,0.25),inset_-1px_-1px_2px_rgba(228,216,176,0.15)]` (the recess has shadow on two sides and highlight on the opposite edges, simulating carved depth).
- Full: `bg-[#c4a878] border border-[#8a6a3a] p-1 rounded-sm shadow-[0_4px_12px_rgba(90,58,26,0.3)]` with inner relief element using the depth shadow.

### 4) Wood Shaving Curl

Thin spiral shavings that curl off the chisel — the waste material that proves the wood is being carved.

```html
<svg viewBox="0 0 120 40" class="w-24 h-10 opacity-70" aria-hidden="true">
  <path d="M10,35 Q20,5 40,15 Q60,25 70,8 Q80,-5 95,12 Q110,28 120,20" 
        fill="none" stroke="#e8d8b0" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M12,33 Q22,8 42,17 Q62,27 72,10 Q82,-2 97,14 Q112,30 120,22" 
        fill="none" stroke="#c4a878" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
</svg>
```

- Shaving color: `#e8d8b0` (pale, fresh-cut wood interior — lighter than the timber surface).
- Spiral path: SVG cubic bezier curves forming a natural curl shape.
- Variant: tighter curl for hand-plane shavings, looser for gouge shavings.
- Shaving scatter: place 3-4 at different rotations around a content area as decorative accents.
- Compact inline version: `w-8 h-3 opacity-50` as a bullet-point alternative or section marker.

### 5) Mallet Silhouette

The carver's mallet — a cylindrical wooden mallet used to strike the chisel handle.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16 opacity-60" aria-hidden="true">
  <!-- Mallet head (cylindrical, side view = rectangle with rounded ends) -->
  <rect x="5" y="5" width="50" height="30" rx="4" fill="#8a6a3a" stroke="#6a4a2a" stroke-width="1.5"/>
  <line x1="10" y1="20" x2="50" y2="20" stroke="#6a4a2a" stroke-width="0.5" opacity="0.5"/>
  <line x1="10" y1="25" x2="50" y2="25" stroke="#6a4a2a" stroke-width="0.5" opacity="0.3"/>
  <!-- Handle -->
  <rect x="24" y="35" width="12" height="40" rx="2" fill="#a08050" stroke="#8a6a3a" stroke-width="1"/>
  <line x1="30" y1="37" x2="30" y2="73" stroke="#8a6a3a" stroke-width="0.5" opacity="0.4"/>
</svg>
```

- Head: `fill-[#8a6a3a]` (hardwood head) with `stroke-[#6a4a2a]` outline.
- Handle: `fill-[#a08050]` (lighter wood handle) with grain line.
- Used as a decorative icon, section marker, or button accent.
- Compact inline version: `w-5 h-7 opacity-50` beside section labels.

### 6) Chisel Edge Accent

The sharp, cold steel edge of a carving chisel — the precise line where tool meets wood.

- Thin horizontal line: `border-t border-[#8a8a8a]` (chisel steel gray).
- Sharp accent: `h-px bg-gradient-to-r from-transparent via-[#8a8a8a] to-transparent` (a thin steel line that fades at the edges, like a chisel edge catching light).
- Cutting edge variant: `bg-[#8a8a8a] h-0.5 w-full shadow-[0_0_4px_rgba(138,138,138,0.3)]` (glinting steel edge with subtle glow).
- Used as section dividers, card top accents, or emphasizing a carved boundary.
- Compact: `h-px bg-[#8a8a8a] w-16` for small inline dividers.

### 7) Mallet Strike Impact

The moment the mallet strikes the chisel handle — a visual impact mark.

```html
<svg viewBox="0 0 40 40" class="w-10 h-10 opacity-40" aria-hidden="true">
  <circle cx="20" cy="20" r="8" fill="none" stroke="#c4a878" stroke-width="1.5" stroke-dasharray="2,2"/>
  <circle cx="20" cy="20" r="3" fill="#8a6a3a" opacity="0.6"/>
  <line x1="20" y1="8" x2="20" y2="12" stroke="#8a6a3a" stroke-width="0.8" opacity="0.4"/>
  <line x1="20" y1="28" x2="20" y2="32" stroke="#8a6a3a" stroke-width="0.8" opacity="0.4"/>
  <line x1="8" y1="20" x2="12" y2="20" stroke="#8a6a3a" stroke-width="0.8" opacity="0.4"/>
  <line x1="28" y1="20" x2="32" y2="20" stroke="#8a6a3a" stroke-width="0.8" opacity="0.4"/>
</svg>
```

- Concentric dashed circle with radiating lines — the force radiating from the strike point.
- Used as a loading indicator, status marker, or decorative element near action buttons.

### 8) Carved Wood Card

A card component representing a piece of carved timber or a work-in-progress panel.

- Background: `bg-[#c4a878]` with gouge mark texture overlay.
- Top edge chisel line: `border-t border-[#8a8a8a]` (steel chisel edge).
- Grain direction: subtle near-vertical lines via `bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,58,26,0.08)_12px,rgba(90,58,26,0.08)_13px)]`.
- Shadow: `shadow-[0_4px_12px_rgba(90,58,26,0.3)]` (warm wood shadow).
- Full: `bg-[#c4a878] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_6px,rgba(74,58,26,0.15)_6px,rgba(74,58,26,0.15)_7px)] border-t border-[#8a8a8a] border border-[#8a6a3a] p-5 rounded-sm shadow-[0_4px_12px_rgba(90,58,26,0.3)]`.

### 9) Finished Sculpture Silhouette

The completed carved form — a smooth, oiled silhouette representing the final revelation of the carved wood.

```html
<svg viewBox="0 0 100 120" class="w-20 h-24 opacity-80" aria-hidden="true">
  <defs>
    <linearGradient id="sculpt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a08050"/>
      <stop offset="50%" stop-color="#c4a878"/>
      <stop offset="100%" stop-color="#6a4a2a"/>
    </linearGradient>
  </defs>
  <!-- Abstract sculptural form -->
  <path d="M50,10 C60,10 70,20 70,35 C70,50 65,55 68,70 C71,85 65,100 55,110 C52,113 48,113 45,110 C35,100 29,85 32,70 C35,55 30,50 30,35 C30,20 40,10 50,10Z" 
        fill="url(#sculpt-grad)" stroke="#6a4a2a" stroke-width="1"/>
</svg>
```

- Gradient fill: `from-[#a08050] via-[#c4a878] to-[#6a4a2a]` (oiled wood with light and shadow).
- Smooth outline: `stroke-[#6a4a2a]` (dark wood edge of the finished form).
- Used as decorative icons, empty-state illustrations, or completion indicators.
- Compact version: `w-8 h-10` for inline icons.

### 10) Wood Shavings Scatter

Multiple shavings scattered naturally — the debris of active carving work.

```html
<div class="relative w-full h-12 overflow-hidden opacity-40" aria-hidden="true">
  <svg viewBox="0 0 400 48" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <path d="M20,40 Q35,10 55,25 Q75,38 90,15" fill="none" stroke="#e8d8b0" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M100,42 Q115,8 140,22 Q155,32 170,12" fill="none" stroke="#e8d8b0" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <path d="M200,38 Q220,5 245,18 Q260,28 280,8" fill="none" stroke="#c4a878" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
    <path d="M300,42 Q315,12 335,28 Q350,36 370,15" fill="none" stroke="#e8d8b0" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/>
  </svg>
</div>
```

- Multiple curl paths at different angles and opacities for natural scatter.
- Colors alternate between `#e8d8b0` (pale shaving) and `#c4a878` (slightly darker wood shaving).
- Used as decorative bottom borders, section transitions, or footer accents.

### 11) Carved Lettering

Text that appears carved or incised into a wood surface — the letterpress of woodcarving.

- Carved-in effect using inset shadows:
  ```css
  .carved-lettering {
    color: #4a3a1a;
    text-shadow:
      0 1px 0 rgba(228,216,176,0.4),
      0 -1px 1px rgba(74,58,26,0.3);
  }
  ```
- Deep carved variant (gouge-cut letters):
  ```css
  .deep-carved {
    color: #2a1a0a;
    text-shadow:
      0 2px 0 rgba(228,216,176,0.5),
      0 -1px 1px rgba(74,58,26,0.4),
      1px 0 0 rgba(74,58,26,0.15);
  }
  ```
- Applied on wood background: `bg-[#c4a878]` with carved text overlaid.
- Full: `bg-[#c4a878] p-8` container with `text-[#4a3a1a] text-shadow-[0_1px_0_rgba(228,216,176,0.4),0_-1px_1px_rgba(74,58,26,0.3)]` text.

### 12) Tool Rack Divider

A structural divider representing the wall rack where carving tools are hung — the organized display of gouges and chisels.

```html
<svg viewBox="0 0 400 32" class="w-full h-8 opacity-35" aria-hidden="true">
  <!-- Rack bar -->
  <rect x="0" y="0" width="400" height="6" fill="#6a4a2a" rx="1"/>
  <!-- Hanging tool silhouettes -->
  <line x1="30" y1="6" x2="30" y2="28" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round"/>
  <line x1="70" y1="6" x2="70" y2="25" stroke="#8a8a8a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="110" y1="6" x2="110" y2="30" stroke="#8a8a8a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="160" y1="6" x2="160" y2="26" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round"/>
  <line x1="200" y1="6" x2="200" y2="29" stroke="#8a8a8a" stroke-width="3" stroke-linecap="round"/>
  <line x1="250" y1="6" x2="250" y2="24" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round"/>
  <line x1="290" y1="6" x2="290" y2="28" stroke="#8a8a8a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="340" y1="6" x2="340" y2="26" stroke="#8a8a8a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="380" y1="6" x2="380" y2="30" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round"/>
</svg>
```

- Wood rack bar: `fill-[#6a4a2a]` (dark timber bar).
- Hanging tool lines: varying stroke widths for different gouge/chisel sizes, in chisel steel gray.
- Used as section dividers or navigation underlines.

## Color Palette System

### Core Woodcarving Palette

| Color | Hex | Material Name | Role |
|---|---|---|---|
| Wood Light | `#c4a878` | Basswood / butternut | Primary surface, cards, panels |
| Wood Dark | `#6a4a2a` | Dark heartwood | Borders, shadows, depth |
| Gouge Shadow | `#4a3a1a` | Deep cut shadow | Carved text, recessed areas |
| Shaving Pale | `#e8d8b0` | Fresh-cut wood interior | Shavings, highlights, light accents |
| Chisel Steel | `#8a8a8a` | Tool steel edge | Dividers, metal accents, chisel lines |
| Mallet Wood | `#8a6a3a` | Hardwood mallet head | Mallet, structural frames, accents |
| Timber Grain | `#5a3a1a` | Deep grain lines | Grain texture, natural patterns |
| Sculpture Finish | `#a08050` | Oiled carved surface | Finished work, sculptures, depth |

Rules: Light wood (`#c4a878`) is the foundation — every surface begins as timber awaiting the carver's tool. Dark heartwood (`#6a4a2a`) provides contrast, shadows, and structural definition. Shaving pale (`#e8d8b0`) is the color of fresh-cut wood interior — always lighter than the surface, always the waste material or highlight. Chisel steel (`#8a8a8a`) is the only cold color — used exclusively for tool edges and metal accents. The palette should feel like a carver's workbench — raw timber, scattered shavings, sharp steel, and the warm glow of oiled finished work. No cold blues, no bright primaries, no blacks. Colors have the warmth and grain of natural wood, with steel as the sole industrial accent.

## Typography Recommendations

Woodcarving typography evokes the tradition of carved lettering, hand-lettered signs, and workshop labels:

- **Carved headings:** Playfair Display, Libre Baskerville, or Crimson Text at `font-serif font-bold text-[#4a3a1a]` with carved text shadow — the look of letters incised into a wood plank.
- **Deep-carved display:** Oswald or Barlow Condensed at `font-sans font-bold uppercase tracking-[0.06em] text-[#2a1a0a]` with deep carved shadow — the bold impact of mallet-struck letters.
- **Workshop labels:** Crimson Text italic or Lora italic at `font-serif italic text-sm text-[#8a6a3a]` — the carver's penciled notes on the back of a workpiece.
- **Tool inventory:** IBM Plex Mono or Source Code Pro at `font-mono text-xs text-[#8a6a3a] uppercase tracking-widest` — the organized list of gouges, chisels, and their sizes.
- **Grain label:** `font-mono text-[10px] text-[#5a3a1a] uppercase tracking-[0.15em]` (wood species identification, moisture content markings).
- **Body text on wood:** Crimson Text or Libre Baskerville at `font-serif text-base text-[#4a3a1a]` (dark carved text on light wood surface).
- Avoid delicate sans-serif fonts alone. Woodcarving pairs sturdy serif (carved headings, body text) with condensed sans (structural labels) and monospace (tool inventory, workshop markings).

## Component Architecture Pattern

1. Light wood background with gouge mark texture and visible grain lines.
2. Chisel steel edge accents on card tops and section dividers.
3. Relief carved panels for featured content (raised design on recessed background).
4. Mallet and chisel silhouettes as tool icons and decorative elements.
5. Wood shaving scatter as decorative borders and transition accents.
6. Carved lettering for headings and labels (text with depth shadows).
7. Timber grain lines as subtle background textures.
8. Tool rack dividers between sections.
9. Finished sculpture silhouettes for completion states and empty states.
10. Gouge-marked cards with steel edges for content blocks.

## Interaction Rules

- Default state: warm wood, quiet workshop atmosphere, tools at rest.
- Hover: wood warms slightly, gouge marks deepen, tool edges sharpen.
  - `hover:bg-[#d0b488] hover:shadow-[0_6px_16px_rgba(90,58,26,0.4)] hover:-translate-y-px transition-all duration-300`.
- Active: press into wood like a chisel cutting (`active:translate-y-px active:shadow-[0_2px_6px_rgba(90,58,26,0.3)]`).
- Focus: wood-tone ring `focus:ring-2 focus:ring-[#8a6a3a]/40 focus:ring-offset-2 focus:ring-offset-[#c4a878]`.
- Transitions: `transition-all duration-300 ease-in-out` (measured, patient — like the carver's deliberate strokes).
- No fast, snappy, or aggressive motion. Everything feels like the patient rhythm of hand carving — steady, unhurried, purposeful.
- Gouge mark animations: subtle CSS animation that shifts gouge gradient angle on hover, simulating the tool moving across the surface.

## Reusable Tailwind Tokens

- Wood surface: `bg-[#c4a878] border border-[#8a6a3a] shadow-[0_4px_12px_rgba(90,58,26,0.3)]`
- Wood surface with gouge marks: `bg-[#c4a878] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_6px,rgba(74,58,26,0.15)_6px,rgba(74,58,26,0.15)_7px,transparent_7px,transparent_9px,rgba(160,128,80,0.1)_9px,rgba(160,128,80,0.1)_10px)] border border-[#8a6a3a]`
- Wood surface with grain: `bg-[#c4a878] bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,58,26,0.08)_12px,rgba(90,58,26,0.08)_13px)]`
- Dark heartwood: `bg-[#6a4a2a] bg-[repeating-linear-gradient(88deg,transparent_0px,transparent_10px,rgba(42,26,10,0.12)_10px,rgba(42,26,10,0.12)_11px)] border border-[#4a3a1a]`
- Relief panel: `bg-[#c4a878] shadow-[inset_2px_2px_4px_rgba(74,58,26,0.25),inset_-1px_-1px_2px_rgba(228,216,176,0.15)]`
- Carved lettering: `text-[#4a3a1a] text-shadow-[0_1px_0_rgba(228,216,176,0.4),0_-1px_1px_rgba(74,58,26,0.3)]`
- Deep carved lettering: `text-[#2a1a0a] text-shadow-[0_2px_0_rgba(228,216,176,0.5),0_-1px_1px_rgba(74,58,26,0.4)]`
- Chisel edge divider: `h-px bg-gradient-to-r from-transparent via-[#8a8a8a] to-transparent`
- Chisel steel line: `border-t border-[#8a8a8a]`
- Tool rack divider: SVG with `fill-[#6a4a2a]` bar and `stroke-[#8a8a8a]` hanging tool lines
- Shaving curl: SVG path in `#e8d8b0` with `stroke-linecap="round"`
- Wood card: `bg-[#c4a878] bg-[repeating-linear-gradient(175deg,transparent_0px,transparent_6px,rgba(74,58,26,0.15)_6px,rgba(74,58,26,0.15)_7px)] border-t border-[#8a8a8a] border border-[#8a6a3a] p-5 rounded-sm shadow-[0_4px_12px_rgba(90,58,26,0.3)]`
- Sculpture silhouette: SVG with `fill="url(#sculpt-grad)"` gradient from `#a08050` via `#c4a878` to `#6a4a2a`
- Wood button: `bg-[#c4a878] text-[#4a3a1a] font-serif font-bold px-6 py-3 border border-[#8a6a3a] rounded-sm hover:bg-[#d0b488] transition-colors`
- Dark wood button: `bg-[#6a4a2a] text-[#e8d8b0] font-serif font-bold px-6 py-3 border border-[#4a3a1a] rounded-sm hover:bg-[#7a5a3a] transition-colors`
- Shaving button: `bg-[#e8d8b0] text-[#4a3a1a] font-serif px-6 py-3 border border-[#c4a878] rounded-sm hover:bg-[#f0e8c8] transition-colors`
- Impact indicator: SVG concentric dashed circles in `#c4a878` and `#8a6a3a`

## Quality Checklist (must pass)

- Background is warm wood tone with visible grain or gouge texture (not flat or cold).
- At least one gouge mark texture element (curved parallel lines across a surface).
- Tool marks or chisel edge lines present (steel gray accents on cards or dividers).
- Wood shaving elements appear as decorative accents (pale spiral curls).
- Color palette uses woodcarving materials (light wood, dark heartwood, pale shavings, chisel steel).
- Typography includes carved text effect (shadow-based depth on at least one heading).
- At least one mallet or chisel silhouette present as a tool reference.
- Shadows are warm and wood-toned (brown/amber undertones, not gray or blue).
- The aesthetic reads as a woodcarving workshop — timber, shavings, gouges, mallet.
- Motion is measured and patient (like the steady rhythm of hand carving).
- No surface is completely flat or textureless (grain lines, gouge marks, or tool marks visible).
- At least one structural element references a real carving tool (gouge, chisel, mallet).
- Relief carving depth effect is present (inset shadows creating carved recess).

## Anti-Patterns

- Cold gray or metallic palettes (woodcarving is warm timber, not cold metal).
- Glossy, polished, or lacquered surfaces (woodcarving materials are raw, oiled, or matte — never glossy).
- Geometric precision without organic variation (wood grain is irregular, gouge marks are hand-cut).
- Bright primary color dominance (woodcarving palette is warm brown spectrum with steel accent only).
- Smooth, perfect, machined surfaces (woodcarving reveals the hand — every surface has tool marks).
- Delicate or thin sans-serif typography alone (woodcarving is sturdy, bold, carved — not delicate).
- Fast elastic or springy animations (woodcarving motion is patient, deliberate, unhurried).
- Digital or technological references (woodcarving is pre-industrial craft).
- Pure white backgrounds (use wood light `#c4a878` or dark heartwood `#6a4a2a`).
- Missing grain patterns (timber grain is the material's own signature — never omit it).
- Missing tool references (gouge, chisel, mallet — the tools define the craft).
- Black or near-black backgrounds (woodcarving is warm, not dark — use dark heartwood at darkest).
- Uniform or repeated texture without variation (wood grain and gouge marks have natural irregularity).
- Missing shavings or waste material (shavings prove active carving — they are part of the craft).
- Organic curves without any straight edges (woodcarving balances natural wood forms with precise tool cuts).

## Accessibility Considerations

- Light wood (`#c4a878`) with gouge shadow text (`#4a3a1a`) provides strong contrast (WCAG AA).
- Dark heartwood (`#6a4a2a`) with shaving pale text (`#e8d8b0`) provides excellent contrast (WCAG AA).
- Shaving pale (`#e8d8b0`) with gouge shadow text (`#4a3a1a`) provides strong contrast (WCAG AA).
- Chisel steel (`#8a8a8a`) on light wood background is low contrast — test at all sizes; use only for decorative elements.
- Carved text shadows must not reduce contrast below WCAG AA thresholds — adjust shadow opacity if needed.
- Mallet and chisel SVGs must be `aria-hidden="true"` (decorative only) unless they convey tool selection.
- Focus states: `focus:ring-2 focus:ring-[#8a6a3a]/40 focus:ring-offset-2 focus:ring-offset-[#c4a878]` (visible against wood).
- Gouge mark textures must not interfere with text readability — reduce opacity near text content.
- Touch targets must be adequate despite organic, hand-crafted styling (minimum 44x44px).
- Wood shaving scatter elements must not create visual noise near interactive elements.
- Relief panel depth effects must not obscure content — keep inset shadows subtle near text.
- Reduced-motion preferences: disable gouge mark shift animations and shaving float effects.
- Grain pattern SVGs with `feTurbulence` filters must have a solid wood color fallback for performance.
- Timber grain line opacity must be low enough that text layered over grain remains legible.
