---
name: letterpress-studio-ui
description: Build letterpress studio UI components (lead type tray, ink roller, platen press, composed form, printed impression, registration marks, ink slab) with metallic type textures, ink transfer effects, and the tactile precision of letterpress printing. Trigger this skill when the user asks for letterpress design, lead type tray UI, ink roller patterns, platen press components, composed type form, printed impression textures, registration mark elements, ink slab gradients, movable type workshop, or letterpress printing interfaces.
---

# Letterpress Studio UI

Use this skill to design and implement interfaces inspired by letterpress printing workshops: lead type trays with grids of metallic movable type, glossy ink-covered roller surfaces, the heavy clamshell platen press mechanism, composed forms of arranged type locked in a chase frame, deep debossed printed impressions on paper, crosshair registration marks, and the dark gradient of an ink slab — the precise, mechanical, ink-stained craft of letterpress printing.

## Non-Negotiable Foundations

- Letterpress is metal type, ink, paper, and a heavy iron press worked by hand. Every surface should feel like a printer's workshop bench — ink-stained wood, cold lead type, oiled iron, and stacked paper waiting for impression.
- Materials are lead type (small rectangular metal blocks, dark silver-gray with a metallic sheen), printing ink (thick, glossy, oil-based — black or colored), paper (cream, cotton, slightly textured for deep impression), iron and steel (the press frame, platen, and bed), and wood (the type case furniture, workbench). Surfaces are cold metal, glossy ink, oiled iron, and matte paper — never warm leather, never organic fiber.
- Colors come from letterpress material traditions: lead type gray, ink black, deep ink blue, paper cream, press iron, registration red, ink slab dark, type silver. The palette should feel like standing at a working platen press — the metallic clink of type, the smell of oil-based ink, the weight of the iron press.
- Structural elements are the defining visual: the lead type tray grid of small rectangular blocks, the glossy ink roller cylinder, the clamshell press silhouette, the composed type form in its chase frame, the debossed impression on paper, registration crosshair marks, and the ink slab gradient. Every component references a real letterpress tool or material.
- Typography evokes the letterpress tradition: monospaced type for the mechanical precision of set type, bold condensed sans for press marks, traditional serif for printed impression text. Type should feel like it was physically set — each letter a block of lead.
- The aesthetic is mechanical, precise, and materially honest — the opposite of soft, organic, or mass-produced. Everything should feel like it was set by hand in a composing stick and printed under tons of pressure.

## Core Material Recipes

### 1) Lead Type Tray Surface (the foundational surface)

The signature letterpress surface: a grid of small rectangular metal type blocks arranged in a composing tray.

- Background: `bg-[#2a2a2a]` (dark ink-stained wood of the type case).
- Type grid: CSS grid of small metallic rectangles simulating movable type blocks: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_14px,#4a4a4a_14px,#4a4a4a_16px)]` layered with `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,#3a3a3a_18px,#3a3a3a_20px)]` for the grid of type blocks.
- Metallic sheen: subtle linear gradient on each block surface: `linear-gradient(135deg, #5a5a5a 0%, #a0a0a0 25%, #6a6a6a 50%, #a0a0a0 75%, #5a5a5a 100%)`.
- Border: `border border-[#1a1a1a]` (dark ink-stained edge).
- Shadow: `shadow-[0_2px_8px_rgba(0,0,0,0.5)]` (heavy, dark, workshop bench shadow).
- Full: `bg-[#2a2a2a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_14px,#4a4a4a_14px,#4a4a4a_16px)] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,#3a3a3a_18px,#3a3a3a_20px)] border border-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.5)] p-4 rounded-sm`.

### 2) Individual Lead Type Block

A single movable type block — the atomic unit of letterpress printing.

```html
<div class="relative w-8 h-10 bg-gradient-to-br from-[#5a5a5a] via-[#a0a0a0] to-[#6a6a6a] border border-[#3a3a3a] shadow-[0_1px_3px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] flex items-center justify-center">
  <span class="font-serif font-bold text-[#1a1a1a] text-lg leading-none select-none" aria-hidden="true">A</span>
</div>
```

- Metallic gradient: `bg-gradient-to-br from-[#5a5a5a] via-[#a0a0a0] to-[#6a6a6a]` (lead metal sheen).
- Top highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]` (light catching the raised metal surface).
- Deep shadow: `shadow-[0_1px_3px_rgba(0,0,0,0.6)]` (each block sits slightly raised from the tray).
- The letter is reversed (mirrored) in a real type block: apply `scale-x-[-1]` for authentic reversed-type effect when showing the physical block, or leave normal when showing the printed result.
- Full tray arrangement: `grid grid-cols-[repeat(auto-fill,minmax(2rem,1fr))] gap-px bg-[#1a1a1a]` (grid with thin dark lines between blocks like tray dividers).

### 3) Ink Roller Surface (glossy ink-covered cylinder)

The ink roller that transfers ink from slab to type — a glossy, ink-coated cylinder.

```html
<div class="relative w-full h-16 rounded-full bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.08)] overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent"></div>
  <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
</div>
```

- Cylindrical form: `rounded-full` with vertical gradient simulating the curved roller surface.
- Glossy ink coat: `bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-[#1a1a1a]` (thick glossy ink layer).
- Specular highlight: horizontal band of faint white `via-[rgba(255,255,255,0.06)]` running across the center of the roller to simulate light reflecting off wet ink.
- Shadow underneath: `shadow-[0_4px_12px_rgba(0,0,0,0.7)]` (heavy, oily shadow).
- Ink variant colors: replace the base gradient with `from-[#1a2a4a] via-[#2a3a5a] to-[#1a2a4a]` for blue ink roller, `from-[#4a1a1a] via-[#6a2a2a] to-[#4a1a1a]` for red ink roller.
- Full: `w-full h-16 rounded-full bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.08)]`.

### 4) Platen Press Mechanism (clamshell press silhouette)

The heavy iron platen press — the iconic clamshell mechanism that brings paper and type together under pressure.

```html
<div class="relative w-full h-64 bg-[#6a6a6a] border-2 border-[#4a4a4a] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.6)] overflow-hidden">
  <!-- Upper platen (moves down) -->
  <div class="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-[calc(50%-1rem)] bg-gradient-to-b from-[#7a7a7a] to-[#5a5a5a] border border-[#4a4a4a] rounded-sm shadow-[0_4px_8px_rgba(0,0,0,0.4)]"></div>
  <!-- Paper sheet on platen -->
  <div class="absolute top-6 left-1/2 -translate-x-1/2 w-1/2 h-[calc(50%-2rem)] bg-[#f0ead0] border border-[#d8d0b0] opacity-80"></div>
  <!-- Lower bed (type form sits here) -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[calc(50%-1rem)] bg-gradient-to-b from-[#5a5a5a] to-[#4a4a4a] border border-[#3a3a3a] rounded-sm"></div>
  <!-- Hinge pivot line -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-[#8a8a8a]"></div>
</div>
```

- Iron frame: `bg-[#6a6a6a]` (cast iron gray) with `border-2 border-[#4a4a4a]`.
- Metallic surface gradients: `from-[#7a7a7a] to-[#5a5a5a]` on platen faces (machined steel).
- Paper on platen: `bg-[#f0ead0]` (the sheet being printed).
- Heavy shadow: `shadow-[0_8px_24px_rgba(0,0,0,0.6)]` (the press weighs hundreds of pounds).
- Compact version: reduce to `h-32` and show only the gap between platen and bed with a paper sheet between them.
- Full: `w-full h-64 bg-[#6a6a6a] border-2 border-[#4a4a4a] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.6)]`.

### 5) Composed Type Form (arranged type in a chase frame)

Type blocks arranged and locked in a steel chase frame — ready to be placed on the press bed.

- Chase frame: `border-4 border-[#6a6a6a]` (steel frame) with `shadow-[inset_0_0_0_2px_#4a4a4a]`.
- Type content area: `bg-[#1a1a1a]` (dark background behind the type blocks).
- Furniture (spacing material): `bg-[#4a3a2a]` blocks (wood spacing around the type) — `w-4 bg-[#4a3a2a]` dividers between type blocks.
- Lock-up quoins: small `bg-[#c41e1e]` (registration red) squares at the edges representing the mechanical locking devices.
- Full: `border-4 border-[#6a6a6a] shadow-[inset_0_0_0_2px_#4a4a4a,0_4px_12px_rgba(0,0,0,0.5)] bg-[#1a1a1a] p-2 rounded-sm`.

### 6) Printed Impression (debossed text on paper)

The final result: text pressed deeply into thick cotton paper, leaving a visible deboss.

- Paper background: `bg-[#f0ead0]` with subtle fiber texture: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='fiber'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23fiber)' opacity='0.04'/%3E%3C/svg%3E")]`.
- Impression effect: text with layered shadow creating the debossed look:
  ```css
  .letterpress-impression {
    color: #1a1a1a;
    text-shadow:
      0 1px 0 rgba(255,255,255,0.3),
      0 -1px 0 rgba(0,0,0,0.15);
  }
  ```
- Deep impression variant: increase shadow depth for a heavier impression:
  ```css
  .letterpress-deep {
    color: #1a1a1a;
    text-shadow:
      0 2px 0 rgba(255,255,255,0.4),
      0 -1px 1px rgba(0,0,0,0.2),
      inset 0 1px 2px rgba(0,0,0,0.1);
  }
  ```
- Ink-on-paper look: `text-[#1a1a1a]` (ink black on cream paper) — never pure black `#000`.
- Full paper surface: `bg-[#f0ead0] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.1)] rounded-sm`.

### 7) Registration Mark Crosshair

The precise crosshair marks used to align multiple color passes on the press.

```html
<svg viewBox="0 0 40 40" class="w-10 h-10" aria-hidden="true">
  <circle cx="20" cy="20" r="12" fill="none" stroke="#c41e1e" stroke-width="1"/>
  <line x1="20" y1="2" x2="20" y2="38" stroke="#c41e1e" stroke-width="1"/>
  <line x1="2" y1="20" x2="38" y2="20" stroke="#c41e1e" stroke-width="1"/>
  <circle cx="20" cy="20" r="2" fill="#c41e1e"/>
</svg>
```

- Crosshair: thin red lines (`#c41e1e`) forming a plus sign with a circle and center dot.
- Used as corner marks on composed forms, card corners, or decorative alignment elements.
- Compact inline version: `w-5 h-5 opacity-50` placed beside status indicators.
- Registration red: `#c41e1e` — the universal color of printer's registration marks.
- Corner placement pattern: four marks at each corner of a content area, offset inward by 8px.

### 8) Ink Slab Gradient Surface

The dark glass or stone slab where ink is worked and distributed before being picked up by the roller.

- Background: `bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]` (dark polished stone surface).
- Ink film: subtle glossy overlay simulating a thin film of ink: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='ink'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23ink)' opacity='0.05'/%3E%3C/svg%3E")]`.
- Glossy sheen: `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]` (light catching the ink film surface).
- Full: `bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.6)] p-6 rounded-sm`.

### 9) Lead Type Card

A card component representing a composed block of type or a print specimen.

- Background: `bg-[#2a2a2a]` with subtle metallic grain texture.
- Type specimen text: `text-[#f0ead0] font-mono text-sm` (cream text on dark background, like type in a case).
- Top accent: `border-t-2 border-[#a0a0a0]` (silver type metal edge).
- Registration mark: small crosshair in top-right corner.
- Full: `bg-[#2a2a2a] border-t-2 border-[#a0a0a0] border border-[#1a1a1a] p-5 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]`.

### 10) Press Mark Label

The small identification marks found on printed sheets — printer's marks, edition numbers, and press identification.

- `font-mono text-[10px] text-[#a0a0a0] uppercase tracking-[0.2em]` (small mechanical monospace).
- Framed variant: `font-mono text-[10px] text-[#a0a0a0] uppercase tracking-[0.2em] border border-[#4a4a4a] px-2 py-0.5 rounded-sm bg-[#1a1a1a]`.
- Edition number: `font-mono text-xs text-[#c41e1e]` (red registration mark color for numbering).

### 11) Ink Color Swatch Card

Compact color swatch representing a letterpress ink colorway.

```html
<div class="flex gap-2">
  <div class="w-10 h-14 rounded-sm bg-[#1a1a1a] border border-[#0a0a0a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" title="Process Black"></div>
  <div class="w-10 h-14 rounded-sm bg-[#1a2a4a] border border-[#0e1a30] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" title="Reflex Blue"></div>
  <div class="w-10 h-14 rounded-sm bg-[#c41e1e] border border-[#8a1414] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" title="Registration Red"></div>
  <div class="w-10 h-14 rounded-sm bg-[#4a4a4a] border border-[#2a2a2a] shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" title="Lead Type Gray"></div>
  <div class="w-10 h-14 rounded-sm bg-[#f0ead0] border border-[#d8d0b0] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" title="Paper Cream"></div>
</div>
```

- Each swatch has a glossy ink sheen: `shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]` (light catching wet ink surface).
- Dark ink swatches have dark borders; paper swatch has a lighter border.

### 12) Type Case Divider

A structural divider representing the compartments of a California Job Case (the wooden tray that holds sorted type).

```html
<svg viewBox="0 0 400 24" class="w-full h-6 opacity-40" aria-hidden="true">
  <defs>
    <pattern id="type-case" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="48" height="24" fill="none" stroke="#4a3a2a" stroke-width="1"/>
      <line x1="24" y1="0" x2="24" y2="24" stroke="#4a3a2a" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="400" height="24" fill="url(#type-case)"/>
</svg>
```

- Compartment grid: `border border-[#4a3a2a]` at regular intervals (wood case dividers).
- Used as a section divider or background for navigation elements.
- Compact variant: `border-t border-[#4a4a4a]` with `border-dashed` for a lighter separation.

## Color Palette System

### Core Letterpress Palette

| Color | Hex | Material Name | Role |
|---|---|---|---|
| Lead Type | `#4a4a4a` | Cast lead type metal | Type blocks, metallic elements |
| Type Silver | `#a0a0a0` | Polished type surface | Highlights, metallic sheen |
| Ink Black | `#1a1a1a` | Process black ink | Primary backgrounds, ink surfaces |
| Ink Blue | `#1a2a4a` | Reflex blue ink | Accent color, ink variant |
| Paper Cream | `#f0ead0` | Cotton letterpress paper | Text backgrounds, impressions |
| Paper Shadow | `#d8d0b0` | Paper edge, fiber shadow | Paper borders, texture lines |
| Press Iron | `#6a6a6a` | Cast iron press frame | Structural frames, press body |
| Press Dark | `#4a4a4a` | Oiled iron, press interior | Borders, mechanical details |
| Registration Red | `#c41e1e` | Registration mark ink | Marks, edition numbers, alerts |
| Ink Slab Dark | `#2a2a2a` | Ink slab stone surface | Secondary backgrounds, slabs |
| Ink Slab Deeper | `#0a0a0a` | Polished ink slab base | Deepest backgrounds, roller |
| Furniture Wood | `#4a3a2a` | Type case furniture wood | Spacing elements, wood accents |

Rules: Ink black (`#1a1a1a`) is the foundation — every surface begins as ink, metal, or paper. Lead type gray (`#4a4a4a`) and type silver (`#a0a0a0`) are the metallic accents defining the letterpress identity. Paper cream (`#f0ead0`) appears only for printed surfaces and reading areas. Registration red (`#c41e1e`) is used sparingly for alignment marks and critical indicators only. The palette should feel like a working letterpress shop — cold metal, dark ink, warm paper, oiled iron. No warm browns (that is leather/bookbinding), no bright primaries, no pastels. Colors have the cold precision of machined metal and the stark contrast of ink pressed into paper.

## Typography Recommendations

Letterpress typography evokes the mechanical precision of movable type and the tradition of handset printing:

- **Display headings:** Oswald, Barlow Condensed, or Bebas Neue at `font-sans font-bold tracking-[0.04em] uppercase` — the condensed impact of large display type blocks pulled from a job case.
- **Impression text:** Libre Baskerville, Crimson Text, or EB Garamond at `font-serif text-[#1a1a1a]` — the classic serif face of letterpress body text, set deep into paper.
- **Type specimen labels:** IBM Plex Mono, JetBrains Mono, or Source Code Pro at `font-mono text-sm text-[#a0a0a0] uppercase tracking-widest` — the mechanical labeling of a printer's inventory.
- **Press marks:** `font-mono text-[10px] text-[#a0a0a0] uppercase tracking-[0.2em]` (printer's identification, edition numbering).
- **Form lockup labels:** `font-mono text-xs text-[#c41e1e]` (red quoin and registration identifiers).
- **Body on paper:** Crimson Text or Libre Baskerville at `font-serif text-base text-[#1a1a1a] leading-relaxed` (ink black on cream paper, like a freshly printed page).
- Avoid decorative script fonts alone. Letterpress pairs condensed sans (display, headlines) with traditional serif (body, impression text) and monospace (mechanical labels, specimen labels).

## Component Architecture Pattern

1. Dark ink-slab or type-case background with metallic texture and subtle grain.
2. Lead type tray grid of small metallic blocks for navigation or data display.
3. Ink roller cylinder as a decorative element or progress indicator.
4. Platen press silhouette for header structures or content framing.
5. Printed impression surfaces (cream paper with debossed text) for content areas.
6. Registration mark crosshairs as corner accents and alignment indicators.
7. Composed type form frames (steel chase borders) for card and panel structures.
8. Press mark labels in monospace for identification, dates, and metadata.
9. Ink color swatches for palette display or ink selection.
10. Type case divider lines between sections.

## Interaction Rules

- Default state: dark ink, cold metal, quiet press room atmosphere.
- Hover: type blocks brighten slightly, ink surfaces develop a fresh sheen, gentle mechanical feedback.
  - `hover:bg-[#5a5a5a] hover:shadow-[0_2px_8px_rgba(0,0,0,0.7)] hover:-translate-y-px transition-all duration-200`.
- Active: press down like the platen closing (`active:translate-y-px active:shadow-[0_1px_3px_rgba(0,0,0,0.8)]`).
- Focus: silver ring `focus:ring-2 focus:ring-[#a0a0a0]/40 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`.
- Transitions: `transition-all duration-200 ease-out` (mechanical, snappy — like the press cycling).
- Registration red flashes on errors or alignment issues: `animate-pulse text-[#c41e1e]`.
- Motion should feel mechanical and precise — quick stops, no elastic bounce, no spring physics.

## Reusable Tailwind Tokens

- Lead type surface: `bg-[#4a4a4a] border border-[#3a3a3a] shadow-[0_1px_3px_rgba(0,0,0,0.6)]`
- Lead type with metallic sheen: `bg-gradient-to-br from-[#5a5a5a] via-[#a0a0a0] to-[#6a6a6a] border border-[#3a3a3a]`
- Ink black surface: `bg-[#1a1a1a] border border-[#0a0a0a] shadow-[0_4px_12px_rgba(0,0,0,0.6)]`
- Ink slab gradient: `bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`
- Paper impression surface: `bg-[#f0ead0] bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23f)' opacity='0.04'/%3E%3C/svg%3E")] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.1)]`
- Press iron frame: `bg-[#6a6a6a] border-2 border-[#4a4a4a] shadow-[0_8px_24px_rgba(0,0,0,0.6)]`
- Composed form chase: `border-4 border-[#6a6a6a] shadow-[inset_0_0_0_2px_#4a4a4a] bg-[#1a1a1a] p-2`
- Registration mark: SVG crosshair in `#c41e1e` at `w-10 h-10`
- Ink roller: `w-full h-16 rounded-full bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.7)]`
- Impression text: `text-[#1a1a1a] text-shadow-[0_1px_0_rgba(255,255,255,0.3),0_-1px_0_rgba(0,0,0,0.15)]`
- Lead type card: `bg-[#2a2a2a] border-t-2 border-[#a0a0a0] border border-[#1a1a1a] p-5 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]`
- Press mark label: `font-mono text-[10px] text-[#a0a0a0] uppercase tracking-[0.2em]`
- Type case divider: `border border-[#4a3a2a]` or SVG compartment grid pattern
- Ink button: `bg-[#1a1a1a] text-[#f0ead0] font-mono font-bold px-6 py-3 border border-[#4a4a4a] rounded-sm hover:bg-[#2a2a2a] transition-colors`
- Iron button: `bg-[#6a6a6a] text-[#f0ead0] font-sans font-bold px-6 py-3 border border-[#4a4a4a] rounded-sm hover:bg-[#7a7a7a] transition-colors`
- Paper button: `bg-[#f0ead0] text-[#1a1a1a] font-serif px-6 py-3 border border-[#d8d0b0] rounded-sm hover:bg-[#e8e0c0] transition-colors`

## Quality Checklist (must pass)

- Background is dark ink or metal gray (not flat or colored — letterpress is achromatic at its core).
- At least one metallic lead type element with gradient sheen (cold metal, not warm wood).
- Ink surfaces have glossy sheen indicators (specular highlights, wet-ink look).
- Paper surfaces have visible cotton fiber texture (subtle, not decorative).
- Color palette uses letterpress materials (lead gray, ink black, paper cream, iron, registration red).
- Typography includes monospace elements (mechanical type labels, specimen identifiers).
- At least one registration mark crosshair present (SVG or CSS).
- Press mechanism or platen press silhouette is referenced in structural layout.
- Shadows are dark, heavy, and cold (black/gray undertones, not warm brown).
- The aesthetic reads as a letterpress shop — metal type, ink, iron press, paper.
- Motion is mechanical and precise (quick, snappy, no spring physics).
- No surface is completely flat or textureless (metallic grain, ink sheen, paper fiber).
- Lead type blocks appear in grids with visible dividing lines (type case compartments).

## Anti-Patterns

- Warm brown or leather-toned palettes (letterpress is cold metal and dark ink, not warm leather).
- Organic textures like wood grain or leather as primary surfaces (use metal, ink, and paper).
- Soft, rounded, or pillowy shapes (letterpress is rectangular blocks, straight edges, mechanical forms).
- Bright primary color dominance (letterpress palette is nearly monochromatic — gray, black, cream, with one red accent).
- Glossy glass-like or translucent surfaces (letterpress materials are opaque — metal, ink, paper).
- Rounded sans-serif typography alone (letterpress combines condensed sans, traditional serif, and monospace).
- Fast elastic or springy animations (letterpress motion is mechanical — quick, precise, dead-stop).
- Warm, cozy, or inviting shadows (shadows should be cold, dark, heavy — cast iron, not candlelight).
- Pure white backgrounds (use paper cream `#f0ead0` or ink black `#1a1a1a`).
- Missing metallic type elements (lead type blocks are the fundamental unit of letterpress).
- Missing ink references (ink roller, ink slab, ink film — the ink is half the craft).
- Decorative or calligraphic fonts (letterpress is about mechanical typesetting, not handwriting).
- Soft, diffused edges without mechanical reference (every edge should reference metal, paper, or iron).
- Missing registration marks (registration is essential to multi-color letterpress printing).

## Accessibility Considerations

- Ink black (`#1a1a1a`) with paper cream text (`#f0ead0`) provides excellent contrast (WCAG AAA).
- Lead type gray (`#4a4a4a`) with cream text (`#f0ead0`) provides strong contrast (WCAG AA).
- Paper cream (`#f0ead0`) with ink black text (`#1a1a1a`) provides excellent contrast (WCAG AAA).
- Registration red (`#c41e1e`) on dark backgrounds provides adequate contrast but test at small sizes.
- Metallic gradient type blocks must maintain sufficient contrast for any text content within them.
- Registration mark SVGs must be `aria-hidden="true"` (decorative only) unless they convey alignment information.
- Focus states: `focus:ring-2 focus:ring-[#a0a0a0]/40 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]` (visible against dark backgrounds).
- Ink roller decorative elements must not convey meaning through color alone.
- Touch targets must be adequate despite mechanical, blocky styling (minimum 44x44px).
- Lead type tray grids must have proper ARIA grid roles if interactive, or be marked decorative.
- Paper impression text shadows must not reduce contrast below WCAG AA thresholds.
- Reduced-motion preferences: disable ink sheen animations and roller rotation effects.
- Type case divider patterns must not create visual noise that impairs text readability.
