---
name: victorian-row-house-ui
description: Build Victorian row house UI components (painted lady facades, bay windows, ornate cornices, wrought iron railings, coal chute doors, stoops, gas lamp style) with ornamental trim, bay window projections, and the colorful Victorian domestic charm. Trigger this skill when the user asks for Victorian UI, painted lady, row house design, bay windows, ornate Victorian, San Francisco Victorian, gas lamp style, Victorian domestic, wrought iron, Victorian facade, cornice trim, or Victorian charm.
---

# Victorian Row House UI

Use this skill to design and implement colorful Victorian-inspired interfaces that embody the painted lady tradition — multi-hued facades, projecting bay windows, ornate cornice trim, wrought iron railing dividers, welcoming front doors with transom windows, gas lamp lantern glows, stoop steps, and spindle trim decoration. Every component should feel like a cherished row house on Alamo Square.

## Non-Negotiable Foundations

- Victorian row house design is colorful and ornamental. Each "house" is a distinct color entity — multiple pastel facades side by side create the iconic streetscape rhythm.
- Ornamentation is structural, not applied. Cornices, railings, spindles, and trim are integral parts of the composition, not afterthoughts.
- Bay windows project outward — they create depth, dimension, and a sense of interior life behind the glass.
- Color is essential: painted ladies use coordinated multi-color palettes where each element (wall, trim, accent, door) gets its own color.
- Wrought iron is black and linear — it appears as railings, dividers, and decorative screens with intricate scrollwork patterns.
- Gas lamp warmth is the ambient light quality: warm amber glows, soft lantern halos, and a sense of evening warmth.
- Stepped progression (stoop) creates a sense of approach and entry — elements elevate from ground to door.
- Every surface has texture: clapboard siding, turned wood spindles, pressed tin patterns, or decorative tile.

## Core Material Recipes

### 1) Painted Lady Facade Surface

The base "wall" of each house — a distinct pastel color with clapboard siding texture.

- Sage facade: `bg-[#8aaa8a] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Rose facade: `bg-[#d4a0a0] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Cream facade: `bg-[#f0e8d0] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Blue facade: `bg-[#8aa0b4] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Lavender facade: `bg-[#b8a0c4] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Clapboard siding texture overlay: `bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(0,0,0,0.04)_11px,rgba(0,0,0,0.04)_12px)]` applied over the facade color.
- Board shadow under each clapboard line: `bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(255,255,255,0.08)_11px,rgba(255,255,255,0.08)_12px)]` layered beneath the shadow line.

### 2) Bay Window Projection

A 3D-projecting bay window that creates depth and dimension on the facade.

- Bay window container: `bg-[#f0e8d0] border-2 border-[#f5f0e0] p-0 shadow-[4px_4px_0px_#1a1a1a,8px_8px_0px_rgba(0,0,0,0.15)]` with `perspective: 800px` on the parent.
- Left pane: `bg-[#c8e0f0] border-r border-[#f5f0e0]` (sky-reflecting glass, cool blue tint).
- Center pane: `bg-[#d0e8f8] border-r border-[#f5f0e0]` (primary window, slightly lighter).
- Right pane: `bg-[#c8e0f0]` (matching left pane for symmetry).
- Window muntins (grid overlay): `bg-[url('data:image/svg+xml,...')]` — a white cross-pattern SVG at 4px thickness over each pane.
- Sill: `bg-[#f5f0e0] border-b-4 border-[#d4c8a8] h-3` — a white shelf beneath the window.
- Bay window header cornice: `bg-[#f5f0e0] border-t-4 border-[#d4c8a8] h-4` — a decorative shelf above.

### 3) Ornate Cornice Border

Decorative trim that crowns each section — the roofline ornament of the facade.

- Standard cornice: `border-t-4 border-[#f5f0e0]` with a repeating SVG background pattern: `bg-[url('data:image/svg+xml,...')] bg-[length:24px_16px] bg-repeat-x` — a dentil or egg-and-dart pattern in `#d4c8a8`.
- Heavy cornice (hero sections): `border-t-8 border-double border-[#f5f0e0] pt-2` with the dentil pattern beneath.
- Cornice brackets: two decorative SVG bracket shapes positioned at corners using `before` and `after` pseudo-elements (or inline SVG positioned absolutely).
- Simple crown: `bg-[#f5f0e0] h-2 w-full shadow-[0_2px_0_#d4c8a8]`

### 4) Wrought Iron Railing Divider

Black linear scrollwork that separates sections — the railing along the stoop and balcony.

- Railing line: `bg-[#1a1a1a] h-[2px] w-full` — the horizontal bar.
- Railing with pickets: `border-t-2 border-[#1a1a1a] pt-2 bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,#1a1a1a_15px,#1a1a1a_17px)]` — vertical pickets at 15px intervals.
- Decorative scrollwork: SVG pattern with curl motifs — `bg-[url('data:image/svg+xml,...')] bg-repeat-x bg-[length:48px_24px]` in `#1a1a1a`.
- Balcony railing: `border-2 border-[#1a1a1a] bg-transparent p-0` with the picket pattern on all four sides.
- Railing with finials: picket pattern plus small SVG diamond or ball shapes at the top of each picket.

### 5) Front Door Entry

The welcoming entrance — a distinct door color with transom window above and fanlight detail.

- Door panel: `bg-[#5a1a1a] border-2 border-[#f5f0e0] shadow-[inset_0_0_0_4px_#4a1010,inset_0_0_0_6px_#f5f0e0]` — deep red with white raised panel molding.
- Door knob: `bg-[#d4b870] rounded-full w-3 h-3 border border-[#b89850] shadow-[1px_1px_2px_rgba(0,0,0,0.3)]` — brass hardware.
- Transom window: `bg-[#c8e0f0] border-2 border-[#f5f0e0] h-8` — narrow glass panel above the door.
- Fanlight arch: `bg-[#c8e0f0] border-2 border-[#f5f0e0] rounded-t-full h-6` — arched window above transom (one of the few allowed curved elements).
- Door frame: `bg-[#f5f0e0] p-1 border border-[#d4c8a8]` — white frame surrounding the door.
- Welcome mat: `bg-[#8a6a3a] h-2 w-16 border border-[#6a4a2a]` — a coir-textured step.

### 6) Gas Lamp Lantern

Warm ambient light fixtures — the evening glow of a Victorian streetscape.

- Lamp body: `bg-[#1a1a1a] w-4 h-8 border border-[#3a3a3a]` — black iron housing.
- Lamp glass: `bg-[#ffcc66] shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.4),0_0_48px_rgba(255,204,102,0.2)]` — warm amber glow with layered box-shadow halos.
- Lamp bracket: `bg-[#1a1a1a] h-[2px] w-8` — horizontal arm extending from wall.
- Lamp post: `bg-[#1a1a1a] w-[3px] h-16` — vertical support.
- Ambient glow overlay: `bg-[radial-gradient(ellipse_at_center,rgba(255,204,102,0.15)_0%,transparent_70%)]` — a warm pool of light behind the lamp.
- Lamp finial: small SVG pointed cap on top of the lamp housing.

### 7) Stoop Steps

The elevated entry sequence — stepped progression from sidewalk to front door.

- Step: `bg-[#c0b8a8] border border-[#a8a098] h-4 w-full` — a single step in weathered stone.
- Stoop platform: `bg-[#c8c0b0] border border-[#a8a098] h-6 w-32` — the landing at the top.
- Side walls: `bg-[#d4c8b8] border border-[#b8b0a0] w-2 h-full` — cheek walls flanking the stairs.
- Stoop shadow: `shadow-[0_2px_4px_rgba(0,0,0,0.15)]` on each step for depth.
- Combined stoop: stack 3-4 step divs with decreasing width, top-aligned to the platform.

### 8) Spindle Trim Decoration

Turned wood spindles — the decorative balustrade of Victorian porches and staircases.

- Spindle row: `bg-[repeating-linear-gradient(90deg,transparent,transparent_7px,#f5f0e0_7px,#f5f0e0_10px,transparent_10px,transparent_17px)] h-8` — repeating vertical spindles.
- Detailed spindle: SVG with a turned-wood profile (bulge-center pattern) repeated via background-size.
- Spindle rail top: `bg-[#f5f0e0] h-1 w-full` — the handrail above the spindles.
- Spindle rail bottom: `bg-[#f5f0e0] h-[3px] w-full` — the bottom rail.

## Color Palette System

### Facade Colors (Painted Ladies)

| Name | Hex | Use |
|---|---|---|
| Sage Green | `#8aaa8a` | Primary facade — calm, natural, garden-facing |
| Rose Pink | `#d4a0a0` | Warm facade — romantic, sunset-toned |
| Cream Yellow | `#f0e8d0` | Light facade — bright, welcoming, sun-facing |
| Powder Blue | `#8aa0b4` | Cool facade — sky-toned, serene |
| Lavender | `#b8a0c4` | Purple facade — twilight, distinctive |

### Trim and Detail Colors

| Name | Hex | Use |
|---|---|---|
| Wood Trim White | `#f5f0e0` | Cornices, window frames, spindles, all trim |
| Trim Shadow | `#d4c8a8` | Trim depth, shadow on white elements |
| Iron Black | `#1a1a1a` | Wrought iron, railings, lamp housings |
| Iron Dark | `#3a3a3a` | Iron highlights, secondary iron elements |

### Accent and Feature Colors

| Name | Hex | Use |
|---|---|---|
| Gas Lamp Warm | `#ffcc66` | Lantern glow, ambient light, warm accents |
| Gas Lamp Bright | `#ffe088` | Lamp center, brightest glow point |
| Door Deep Red | `#5a1a1a` | Front door — rich, inviting, traditional |
| Door Red Light | `#7a2a2a` | Door panel highlights, raised molding |
| Brick Red | `#8a3a2a` | Foundation, base elements, chimney |
| Brick Dark | `#6a2a1a` | Brick shadows, deep foundation |

### Functional Colors

| Name | Hex | Use |
|---|---|---|
| Glass Blue | `#c8e0f0` | Window glass, sky reflections |
| Glass Dark | `#a8c8e0` | Window depth, shadowed glass |
| Path Gray | `#c0b8a8` | Stoops, steps, stone pathways |
| Path Dark | `#a8a098` | Step edges, stone shadows |
| Success Green | `#5a8a5a` | Positive states (Victorian-appropriate muted green) |
| Warning Amber | `#b89a4a` | Caution states (warm, period-appropriate) |
| Error Red | `#8a3a2a` | Error states (brick red, not harsh) |

### Color Rules

- Each "house" card uses exactly one facade color with white trim — no mixing facade colors within one house element.
- Facade colors sit in the pastel range — never saturated or neon. They are paint on wood, not plastic.
- Trim is always white-warm (`#f5f0e0`), never pure white. Victorian trim was milk paint, not latex.
- Iron is always near-black (`#1a1a1a`), never colored iron. Wrought iron is dark.
- Gas lamp glow is warm amber — the only place for yellow/gold tones.
- Door color is always red family (deep red to brick). This is the one area for saturated color.
- Maximum three facade colors visible in any one row of house cards to maintain the streetscape rhythm without chaos.

## Typography Hierarchy

Victorian row house uses a combination of serif display fonts for headings (ornamental) and clean sans-serif for body text (readable).

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| House name | `font-serif` | `text-2xl` to `text-4xl` | `font-bold` | Ornate, decorative, high contrast |
| Section title | `font-serif` | `text-xl` to `text-2xl` | `font-semibold` | Cornice-level prominence |
| Card title | `font-serif` | `text-lg` | `font-semibold` | |
| Body text | `font-sans` | `text-base` to `text-lg` | `font-normal` | Clean and readable |
| Label/metadata | `font-sans` | `text-xs` to `text-sm` | `font-medium uppercase tracking-wider` | On white trim bands |
| Caption/address | `font-serif` | `text-sm` | `font-normal italic` | Address-style, e.g., "742 Evergreen Terrace" |
| Door number | `font-serif` | `text-3xl` | `font-black` | Brass numerals on door |

Rules:
- Display serif for headings: Playfair Display, Libre Baskerville, or Lora (`font-serif`).
- Body sans-serif: system font stack or a clean option like Nunito (`font-sans`).
- Italic serif for addresses and captions — gives a handwritten, period-appropriate feel.
- Small caps for labels on trim bands: `font-sans text-xs font-medium uppercase tracking-wider`.
- Letter spacing on headings: `tracking-wide` to `tracking-wider` for a carved-in-stone feel.
- Text color is always dark (`#1a1a1a`) on light facades — never reversed text on pastels.
- Door numbers use brass-like color: `text-[#d4b870]` with a subtle text-shadow.

## Layout System

Victorian row house layout is a streetscape: house cards arranged in a row, each with distinct facade color and shared structural rhythm.

- House row: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0` — houses sit shoulder to shoulder with no gap (shared walls).
- Each house card is a vertical stack: cornice at top, facade with windows, door entry at bottom.
- House card internal structure: `flex flex-col` with sections stacked vertically — cornice, upper facade, bay window, lower facade, stoop/door.
- Shared wall between houses: the border between adjacent cards reads as a party wall — use `border-r-2 border-[#f5f0e0]` on all but the last card.
- Street-level base: a continuous band at the bottom of the row — `bg-[#c0b8a8] border-t-2 border-[#a8a098] h-4` — the sidewalk.
- Porch/entry area is always at the bottom of the card (ground level).
- Upper floors stack above — windows and cornice at the top.
- Max-width for readability: `max-w-6xl` for the house row container.
- Content within bay windows is centered: `flex items-center justify-center`.

## Component Architecture Pattern

1. Streetscape container with row of house cards, sidewalk base, and optional sky/roof line.
2. House card: vertical stack of cornice, facade sections (with bay windows), door entry, and stoop.
3. Each facade section uses a distinct pastel background with white trim borders.
4. Bay windows project from the facade with shadow depth.
5. Wrought iron railings divide sections or frame the entry.
6. Gas lamp lanterns flank the entry or accent the cornice.
7. Front door is the focal point — deep red with transom window and brass hardware.
8. Spindle trim adorns porches and balcony railings.

The facade is the interface. Each card is a house. The row is a street.

## Interaction Rules

- Default state: bright, colorful, inviting — a sunny day on the block.
- Hover state: gas lamp glow activates — `shadow-[0_0_20px_rgba(255,204,102,0.3)]` around the card, as if the porch light turned on.
- Hover on house card: slight upward lift — `transform: translateY(-4px)` with `shadow-[0_8px_16px_rgba(0,0,0,0.15)]` — the house rises from its stoop.
- Hover on door: door color lightens slightly — `bg-[#7a2a2a]` with `shadow-[inset_0_0_0_4px_#6a1a1a,inset_0_0_0_6px_#f5f0e0]`.
- Hover on gas lamp: glow intensifies — `shadow-[0_0_20px_#ffcc66,0_0_40px_rgba(255,204,102,0.5)]`.
- Focus state: `focus:outline-none focus:ring-2 focus:ring-[#d4b870] focus:ring-offset-2 focus:ring-offset-[#f5f0e0]` — warm brass ring.
- Transitions: gentle and warm — `transition-all duration-300 ease-in-out`.
- Transom window: on hover, the glass brightens — `bg-[#d8f0ff]` — as if a light turned on inside.
- Bay window: on hover, slight perspective shift — `transform: perspective(800px) rotateY(-1deg)` — subtle dimensional movement.
- No bouncing or spring physics. Victorian movement is gentle and deliberate.

## Reusable Tailwind Tokens

### Facade Surface Tokens

- Sage: `bg-[#8aaa8a] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Rose: `bg-[#d4a0a0] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Cream: `bg-[#f0e8d0] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Blue: `bg-[#8aa0b4] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Lavender: `bg-[#b8a0c4] text-[#1a1a1a] border-2 border-[#f5f0e0]`
- Clapboard texture: `bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(0,0,0,0.04)_11px,rgba(0,0,0,0.04)_12px)]`

### Trim Tokens

- White trim: `bg-[#f5f0e0] border-[#d4c8a8]`
- Cornice bar: `bg-[#f5f0e0] h-2 border-b border-[#d4c8a8]`
- Window frame: `bg-[#f5f0e0] p-1 border border-[#d4c8a8]`
- Spindle row: `bg-[repeating-linear-gradient(90deg,transparent,transparent_7px,#f5f0e0_7px,#f5f0e0_10px,transparent_10px,transparent_17px)]`
- Door frame: `bg-[#f5f0e0] p-1 border border-[#d4c8a8]`

### Iron Tokens

- Railing bar: `bg-[#1a1a1a] h-[2px]`
- Railing pickets: `bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,#1a1a1a_15px,#1a1a1a_17px)]`
- Balcony frame: `border-2 border-[#1a1a1a]`
- Scrollwork: `bg-[url('data:image/svg+xml,...')] bg-repeat-x bg-[length:48px_24px]`

### Door Tokens

- Door panel: `bg-[#5a1a1a] border-2 border-[#f5f0e0] shadow-[inset_0_0_0_4px_#4a1010,inset_0_0_0_6px_#f5f0e0]`
- Door knob: `bg-[#d4b870] rounded-full w-3 h-3 border border-[#b89850] shadow-[1px_1px_2px_rgba(0,0,0,0.3)]`
- Transom: `bg-[#c8e0f0] border-2 border-[#f5f0e0] h-8`
- Fanlight: `bg-[#c8e0f0] border-2 border-[#f5f0e0] rounded-t-full h-6`

### Glow Tokens

- Gas lamp body: `bg-[#1a1a1a] w-4 h-8 border border-[#3a3a3a]`
- Gas lamp glow: `bg-[#ffcc66] shadow-[0_0_12px_#ffcc66,0_0_24px_rgba(255,204,102,0.4),0_0_48px_rgba(255,204,102,0.2)]`
- Ambient glow: `bg-[radial-gradient(ellipse_at_center,rgba(255,204,102,0.15)_0%,transparent_70%)]`
- Card hover glow: `shadow-[0_0_20px_rgba(255,204,102,0.3)]`
- Transom lit: `bg-[#d8f0ff]`

### Stoop Tokens

- Step: `bg-[#c0b8a8] border border-[#a8a098] h-4 w-full shadow-[0_2px_4px_rgba(0,0,0,0.15)]`
- Platform: `bg-[#c8c0b0] border border-[#a8a098] h-6 w-32`
- Sidewalk: `bg-[#c0b8a8] border-t-2 border-[#a8a098] h-4 w-full`

### Window Glass Tokens

- Glass pane: `bg-[#c8e0f0]`
- Glass lit: `bg-[#d8f0ff]`
- Glass shadowed: `bg-[#a8c8e0]`
- Muntin grid: `bg-[url('data:image/svg+xml,...')]` (white cross-pattern SVG)

## Quality Checklist (must pass)

- Each house card uses exactly one distinct facade color from the palette.
- All trim elements (cornices, frames, spindles) use white-warm (`#f5f0e0`), not pure white.
- Bay windows project with visible shadow depth (offset shadow on at least one side).
- Wrought iron elements are always near-black (`#1a1a1a`) with visible linear pattern.
- Gas lamp glow uses warm amber with layered box-shadow halos.
- Front doors use deep red with white panel molding (inset shadow frame).
- Clapboard siding texture is present on facade surfaces (horizontal repeating lines).
- Typography uses serif for display/headings and sans-serif for body text.
- Layout reads as a streetscape: house cards in a row with sidewalk base.
- Hover effects evoke gas lamp warmth — amber glow, not generic hover states.
- Focus states use warm brass color (`#d4b870`), not harsh blue or white rings.
- No neon, saturated, or pastel-beyond-palette colors. Victorian palettes are muted and warm.
- Stoop steps provide visual entry sequence at the bottom of each house card.
- Text contrast meets WCAG AA on all facade colors.

## Anti-Patterns

- Pure white or pure black anywhere in the palette (Victorian materials are warm and aged).
- Neon or saturated colors that read as modern rather than period-appropriate.
- Flat houses with no depth — every house card must have at least a bay window or door with shadow depth.
- Glass morphism or frosted effects (Victorian is opaque, painted wood and glass, not translucent panels).
- Symmetrical color mixing within a single house card (each house has ONE facade color).
- Harsh blue focus rings or generic hover effects that break the warm amber atmosphere.
- Rounded corners on structural elements (Victorian architecture is rectilinear with occasional arched fanlights).
- No ornamentation or texture — plain flat color cards are not Victorian.
- Grid layouts with gaps between houses (row houses share walls — no gaps).
- Sans-serif display fonts for headings (Victorian demands ornamental serif at the display level).
- Gas lamp glow effects that use white or blue light instead of warm amber.
- Animations that feel mechanical or digital rather than gentle and warm.
- Skipping the stoop/entry sequence (the approach to the door is part of the experience).

## Accessibility Considerations

- Facade colors must maintain 4.5:1 contrast ratio with dark text (`#1a1a1a` on each facade color must be verified).
- Sage (`#8aaa8a`): approximately 3.5:1 — use darker text (`#0a0a0a`) or increase to 5:1 with `#1a1a1a` on darker variant.
- Rose (`#d4a0a0`): approximately 3.2:1 — use darker text (`#1a1a1a` achieves closer to 4.5:1; verify).
- Cream (`#f0e8d0`): approximately 1.5:1 with light text — always use dark text (`#1a1a1a`) for 12:1+.
- Blue (`#8aa0b4`): approximately 3.8:1 — use dark text (`#0a0a0a`) for 7:1+ contrast.
- Lavender (`#b8a0c4`): approximately 3.5:1 — use dark text (`#1a1a1a`) for 5:1+.
- Gas lamp glow is decorative only and must not be the sole indicator of state or interactivity.
- Wrought iron patterns are decorative backgrounds and must include `aria-hidden="true"`.
- Clapboard texture overlays must use `pointer-events-none` and `aria-hidden="true"`.
- Bay window hover effects with `perspective` and `rotateY` must respect `prefers-reduced-motion: reduce`.
- Focus states with warm brass rings (`ring-[#d4b870]`) must provide visible contrast against all facade colors.
- Door knob is interactive and must have appropriate `role="button"` or `role="link"` with accessible label.
- Screen readers should announce house identity clearly — use semantic heading levels (`h2` for house name, `h3` for section within).
- The streetscape grid layout must use semantic landmarks (`<section>`, `<article>`) for each house card.
- Gas lamp hover glow increases shadow spread — ensure this does not cause content to be clipped by `overflow: hidden` on parent containers.
- Color alone must not distinguish house cards for identification — each card must also have a visible name/title.
