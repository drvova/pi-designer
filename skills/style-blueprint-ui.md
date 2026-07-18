---
name: blueprint-ui
description: Build blueprint / schematic / wireframe UI components (technical drafting, dark blue backgrounds, cyan/white line-work, grid backgrounds, angular leader lines, engineering precision) with monospace typography, wireframe geometry, and the visual language of engineering blueprints. Trigger this skill when the user asks for blueprint design, schematic UI, engineering blueprint, technical wireframe, drafting aesthetic, or CAD-style interfaces.
---

# Blueprint / Schematic UI

Use this skill to design and implement technical engineering-inspired interfaces with dark blue backgrounds, cyan/white precision line-work, visible grid backgrounds, monospace typography, angular leader lines, and the visual language of architectural and engineering blueprints.

## Non-Negotiable Foundations

- Blueprint UI simulates engineering drafting paper: deep blue-black background with a visible grid and precision line-work in cyan or white.
- Every element should look like it was drafted with a technical pen: thin, precise, angular lines.
- The grid is always visible — it is the graph paper that the interface is "drawn on."
- Typography is monospace throughout, reinforcing the technical/engineering character.
- Colors are severely limited: dark navy/black background, cyan or white lines/text, one accent color (amber, green, or orange) for interactive elements.
- Leader lines and callouts connect labels to data points, like architectural annotations.
- The aesthetic communicates PRECISION, ENGINEERING, and AUTHORITY.

## Core Material Recipes

### 1) Blueprint Grid Background

The foundational surface: dark blue with a visible engineering grid.

```css
background-color: #0b1623;
background-image:
  linear-gradient(rgba(28,43,58,0.5) 1px, transparent 1px),
  linear-gradient(90deg, rgba(28,43,58,0.5) 1px, transparent 1px),
  linear-gradient(rgba(28,43,58,0.3) 1px, transparent 1px),
  linear-gradient(90deg, rgba(28,43,58,0.3) 1px, transparent 1px);
background-size: 80px 80px, 80px 80px, 16px 16px, 16px 16px;
```

Tailwind: `bg-[#0b1623] bg-[linear-gradient(rgba(28,43,58,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(28,43,58,0.5)_1px,transparent_1px)] bg-[size:40px_40px]`

### 2) Schematic Card / Panel

Technical panel with thin cyan border and corner markers.

- `bg-[#0b1623]/80 border border-[#1c2b3a] rounded-none p-6`.
- Corner markers: small L-shaped lines at each corner using pseudo-elements.
- Leader line: thin cyan line connecting to a label outside the panel.
- Full: `bg-[#0b1623]/80 border border-[#1c2b3a] p-6 relative`.
  - Add corner accents: `[clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]`.

### 3) Blueprint Button

Technical button with wireframe aesthetic.

- Primary: `bg-transparent border border-[#ff9f30] text-[#ff9f30] font-mono font-medium text-sm uppercase tracking-wider px-6 py-2 hover:bg-[#ff9f30]/10 hover:shadow-[0_0_10px_rgba(255,159,48,0.2)] transition-all`.
- Cyan: `bg-transparent border border-[#00aeef] text-[#00aeef] font-mono px-6 py-2 hover:bg-[#00aeef]/10`.

### 4) Wireframe / Exploded View Element

Decorative element showing an exploded/isometric wireframe.

SVG wireframe cube or sphere:
```html
<svg viewBox="0 0 100 100" class="w-24 h-24 opacity-40">
  <g fill="none" stroke="#00aeef" stroke-width="0.5">
    <!-- Isometric cube wireframe -->
    <path d="M50,10 L80,25 L80,55 L50,70 L20,55 L20,25 Z"/>
    <path d="M50,10 L50,40 M50,40 L80,55 M50,40 L20,55"/>
    <path d="M20,25 L50,40 L80,25"/>
  </g>
</svg>
```

### 5) Leader Line / Callout

Technical annotation connecting a label to a data point.

```html
<div class="relative">
  <div class="absolute -left-8 top-0 w-8 h-px bg-[#00aeef]"></div>
  <div class="absolute -left-8 top-0 w-1 h-1 rounded-full bg-[#00aeef]"></div>
  <span class="font-mono text-xs text-[#8b9bb4] uppercase tracking-wider">SPEC-A1</span>
</div>
```

### 6) Technical Data Readout

Monospace data display in a framed panel.

- `border border-[#1c2b3a] p-4 font-mono text-sm`.
- Label: `text-[#8b9bb4] text-xs uppercase tracking-wider`.
- Value: `text-[#00ff9d] font-medium`.

### 7) Ruler / Scale Marker

Decorative ruler along the edge of a panel.

- `h-2 bg-[#0b1623] border-y border-[#1c2b3a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_9px,#1c2b3a_9px,#1c2b3a_10px)]`.

## Color Palette System

### Core Blueprint Palette

| Color | Hex | Role |
|---|---|---|
| Blueprint Navy | `#0b1623` | Primary background |
| Panel Navy | `#0f1f30` | Card surfaces |
| Grid Line | `#1c2b3a` | Visible grid, borders |
| Cyan | `#00aeef` | Primary line-work, wireframes |
| Text White | `#f0f0f0` | Primary text |
| Dim Blue-Gray | `#8b9bb4` | Secondary text, labels |
| Amber Accent | `#ff9f30` | Interactive, CTAs |
| Success Green | `#00ff9d` | Positive indicators, data values |
| Warning Red | `#ff4d4d` | Errors, critical alerts |

Rules: The palette is severely restricted. Dark navy dominates. Cyan and white carry the line-work. ONE accent color (amber, green, or red) for interactive/status elements. No bright backgrounds.

## Typography Recommendations

Blueprint typography is monospace — it IS the drafting language:

- **Primary:** JetBrains Mono (weight 400 for body, 700 for headings).
- **Alternative:** IBM Plex Mono, Space Mono, Fira Code.
- **Labels:** `font-mono text-xs uppercase tracking-wider text-[#8b9bb4]`.
- **Data values:** `font-mono font-medium text-[#00ff9d]`.
- **Headings:** `font-mono font-bold uppercase tracking-tight text-[#f0f0f0]`.
- No sans-serif or serif fonts. Blueprint is monospace only.

## Component Architecture Pattern

1. Dark navy blueprint grid background (always visible).
2. Technical panels with thin borders and corner markers.
3. Monospace typography for all text.
4. Leader lines and callouts connecting labels to data.
5. Wireframe SVG decorations (isometric shapes, exploded views).
6. Technical data readouts (monospace key-value pairs).
7. Ruler/scale markers along panel edges.
8. One accent color (amber or green) for interactive elements.

## Interaction Rules

- Default state: precise, technical, drafted.
- Hover: accent glow or border brightens.
  - `hover:border-[#ff9f30]/50 hover:shadow-[0_0_10px_rgba(255,159,48,0.15)] transition-all`.
- Active: `active:border-[#ff9f30]`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#ff9f30]`.
- Transitions: `transition-all duration-150` (precise, technical, instant).
- Scan animation: optional slow scan line sweeping across grid.

## Reusable Tailwind Tokens

- Blueprint grid: `bg-[#0b1623] bg-[linear-gradient(rgba(28,43,58,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(28,43,58,0.5)_1px,transparent_1px)] bg-[size:40px_40px]`
- Schematic panel: `bg-[#0b1623]/80 border border-[#1c2b3a] p-6`
- Blueprint button: `bg-transparent border border-[#ff9f30] text-[#ff9f30] font-mono uppercase tracking-wider px-6 py-2 hover:bg-[#ff9f30]/10`
- Data readout: `border border-[#1c2b3a] p-4 font-mono text-sm`
- Label: `font-mono text-xs uppercase tracking-wider text-[#8b9bb4]`
- Data value: `font-mono font-medium text-[#00ff9d]`
- Leader line: `w-8 h-px bg-[#00aeef]`

## Quality Checklist (must pass)

- Background is dark navy with a visible grid (always present).
- Typography is monospace throughout (no sans-serif or serif).
- Line-work is thin and precise (cyan or white).
- Colors are limited: navy, cyan, white, and one accent.
- At least one wireframe SVG decoration (isometric/exploded view).
- Leader lines and callouts present (technical annotation style).
- Corner markers or angular clip-paths on panels.
- Data readouts use monospace key-value format.
- Ruler/scale markers present.
- The aesthetic reads as an engineering blueprint or CAD interface.

## Anti-Patterns

- Light or bright backgrounds (blueprint is dark navy).
- Sans-serif or serif fonts (blueprint is monospace only).
- Rounded corners (use `rounded-none` — blueprint is angular and precise).
- Missing grid background (the grid IS the blueprint).
- Bright, saturated, or pastel colors (blueprint is navy + cyan + accent).
- Thick borders (use thin `border` — blueprint lines are fine).
- Decorative illustrations or photography (blueprint is wireframe geometry).
- Smooth gradients (blueprint is flat color + grid).
- Missing technical annotations (leader lines and callouts are essential).
- Playful or bouncy animations (blueprint is precise and mechanical).

## Accessibility Considerations

- Dark navy with light text/cyan provides excellent contrast (WCAG AAA).
- Monospace fonts are highly legible for data/code but can be wide for body text.
- Grid background must not reduce text contrast (keep grid lines subtle: `rgba(28,43,58,0.5)`).
- Focus states: `focus:ring-1 focus:ring-[#ff9f30]` (thin amber ring, visible on navy).
- Leader lines and wireframe SVGs must be `aria-hidden="true"`.
- Data values should have semantic labels for screen readers (`aria-label`).
- Touch targets: despite thin borders, maintain minimum 44x44px.
- Scan line animation must respect `prefers-reduced-motion`.
