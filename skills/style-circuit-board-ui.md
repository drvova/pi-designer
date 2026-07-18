---
name: circuit-board-ui
description: Build circuit board UI components (green PCB surfaces, copper traces, silicon pads, solder points, node connections, electronic schematics) with conductive pathways, component footprints, and the technical aesthetic of printed circuit board design. Trigger this skill when the user asks for circuit board design, PCB aesthetic, electronics UI, silicon tech, hardware hacker, or motherboard-inspired interfaces.
---

# Circuit Board UI

Use this skill to design and implement electronics-inspired interfaces with green PCB surfaces, copper trace patterns, silicon component pads, solder point nodes, and the technical aesthetic of printed circuit board layout.

## Non-Negotiable Foundations

- Circuit board UI simulates the surface of a printed circuit board (PCB): green substrate with copper traces connecting component pads.
- The background is always dark green PCB (`#0a3a0a` to `#1a5a1a`) — the signature printed circuit board color.
- Copper traces (thin golden/orange lines) connect elements, creating a visible data flow pathway.
- Component pads (rectangular or circular metal contacts) anchor interactive elements.
- Nodes and connection points are visible: dots where traces meet, suggesting solder joints.
- Typography is monospace, reinforcing the technical/electronics character.
- The aesthetic is utilitarian, technical, and grounded in real hardware engineering.

## Core Material Recipes

### 1) PCB Background

The foundational surface: dark green PCB with copper trace pattern.

```css
.pcb-bg {
  background-color: #0a3a0a;
  background-image:
    /* Copper traces */
    linear-gradient(90deg, transparent 0%, transparent 20%, #b8860b 20%, #b8860b 22%, transparent 22%),
    linear-gradient(0deg, transparent 0%, transparent 40%, #b8860b 40%, #b8860b 42%, transparent 42%),
    linear-gradient(90deg, transparent 0%, transparent 60%, #b8860b 60%, #b8860b 61%, transparent 61%),
    /* Subtle grid */
    linear-gradient(rgba(0,255,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,0,0.03) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 100% 100%, 20px 20px, 20px 20px;
}
```

Tailwind simplified:
- `bg-[#0a3a0a]` base with SVG overlay of copper trace paths.

### 2) Component Pad

Metal contact pad for anchoring elements.

- `bg-gradient-to-br from-[#d4a843] to-[#8a6a1a] border border-[#b8860b] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_4px_rgba(184,134,11,0.3)]`.
- Solder dot: `w-2 h-2 rounded-full bg-[#c0c0c0] shadow-[0_0_3px_rgba(192,192,192,0.5)]`.

### 3) Copper Trace Connector

Thin golden line connecting components.

- `h-0.5 bg-gradient-to-r from-[#b8860b] to-[#d4a843] shadow-[0_0_2px_rgba(184,134,11,0.4)]`.
- Angled traces: use SVG paths with 45-degree angles (standard PCB routing).

### 4) Circuit Card

Card styled as a PCB component (IC chip).

- `bg-[#0a3a0a] border-2 border-[#b8860b]/40 p-6 shadow-[0_0_10px_rgba(184,134,11,0.15)] relative`.
- Pin connectors: small gold lines on left and right edges (like IC chip pins).
- Pin 1 marker: small dot in top-left corner.

### 5) Silicon Button

Green button with copper accent and solder-point styling.

- `bg-[#1a5a1a] text-[#88ff88] font-mono font-bold text-sm uppercase tracking-wider px-6 py-3 border border-[#b8860b]/50 shadow-[0_0_8px_rgba(136,255,136,0.2),inset_0_1px_0_rgba(0,255,0,0.1)] hover:border-[#b8860b] hover:shadow-[0_0_12px_rgba(184,134,11,0.3)] transition-all`.

### 6) Trace Pattern Divider

Divider made of PCB-style trace routing.

```html
<svg viewBox="0 0 200 20" class="w-full text-[#b8860b]">
  <path fill="none" stroke="currentColor" stroke-width="1" d="M0,10 L40,10 L50,5 L90,5 L100,10 L140,10 L150,15 L200,15"/>
  <circle cx="0" cy="10" r="2" fill="currentColor"/>
  <circle cx="90" cy="5" r="2" fill="currentColor"/>
  <circle cx="200" cy="15" r="2" fill="currentColor"/>
</svg>
```

### 7) LED Indicator

Small glowing LED dot showing status.

- Active: `w-2 h-2 rounded-full bg-[#00ff00] shadow-[0_0_6px_rgba(0,255,0,0.8)]`.
- Warning: `w-2 h-2 rounded-full bg-[#ffaa00] shadow-[0_0_6px_rgba(255,170,0,0.8)]`.
- Error: `w-2 h-2 rounded-full bg-[#ff4444] shadow-[0_0_6px_rgba(255,68,68,0.8)]`.

## Color Palette System

### Core Circuit Board Palette

| Color | Hex | Role |
|---|---|---|
| PCB Green | `#0a3a0a` | Primary background |
| Light PCB Green | `#1a5a1a` | Card surfaces |
| Copper | `#b8860b` | Traces, borders |
| Light Copper | `#d4a843` | Highlights, active traces |
| Solder Silver | `#c0c0c0` | Pads, joints |
| LED Green | `#00ff00` | Active/success |
| LED Amber | `#ffaa00` | Warning |
| LED Red | `#ff4444` | Error/danger |
| Phosphor Text | `#88ff88` | Primary text |
| Dim Green | `#4a8a4a` | Secondary text |

Rules: PCB green dominates. Copper/gold is the primary accent. LEDs provide status colors only. Text should feel like phosphor glowing on a green screen.

## Typography Recommendations

Circuit board typography is monospace — it IS the electronics character:

- **Primary:** JetBrains Mono, IBM Plex Mono (technical monospace).
- **Display:** VT323, Share Tech Mono (retro tech/CRT monospace).
- **Labels:** `font-mono text-xs uppercase tracking-wider` (component reference designators like R1, C2, U3).
- **Data:** `font-mono text-sm` (register values, addresses).

## Component Architecture Pattern

1. Dark green PCB background with copper trace patterns.
2. IC chip-style cards with pin connectors.
3. Component pads anchoring interactive elements.
4. Copper trace connectors between related elements.
5. LED status indicators.
6. Monospace typography throughout.
7. Trace pattern dividers.
8. Solder point node decorations.

## Interaction Rules

- Default state: technical, electronic, conductive.
- Hover: traces glow, LED brightens.
  - `hover:shadow-[0_0_12px_rgba(184,134,11,0.3)] hover:border-[#b8860b] transition-all`.
- Active: `active:shadow-[0_0_6px_rgba(0,255,0,0.4)]`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#00ff00]`.
- Transitions: `transition-all duration-150` (electronic, fast, precise).
- Signal pulse: optional animation of a pulse traveling along copper traces.

## Reusable Tailwind Tokens

- PCB bg: `bg-[#0a3a0a]` with SVG copper trace overlay.
- IC chip card: `bg-[#0a3a0a] border-2 border-[#b8860b]/40 shadow-[0_0_10px_rgba(184,134,11,0.15)]`
- Silicon button: `bg-[#1a5a1a] text-[#88ff88] font-mono border border-[#b8860b]/50 shadow-[0_0_8px_rgba(136,255,136,0.2)]`
- Copper trace: `h-0.5 bg-gradient-to-r from-[#b8860b] to-[#d4a843]`
- LED green: `w-2 h-2 rounded-full bg-[#00ff00] shadow-[0_0_6px_rgba(0,255,0,0.8)]`
- Solder dot: `w-2 h-2 rounded-full bg-[#c0c0c0] shadow-[0_0_3px_rgba(192,192,192,0.5)]`

## Quality Checklist (must pass)

- Background is dark green PCB (`#0a3a0a` to `#1a5a1a`).
- Copper trace patterns are visible connecting elements.
- At least one IC chip-style card with pin connectors.
- LED status indicators present (green/amber/red dots).
- Component pads or solder points visible.
- Typography is monospace throughout.
- Copper trace dividers between sections.
- The aesthetic reads as a printed circuit board or motherboard.
- Color palette is PCB green + copper gold + LED accents.
- Interactions include trace glow or LED brightness changes.

## Anti-Patterns

- Light or bright backgrounds (PCB is dark green).
- Sans-serif or serif fonts (circuit board is monospace only).
- Missing copper traces (traces are the signature connectivity element).
- Bright saturated non-electronics colors (palette is PCB green + copper).
- Missing LED indicators (status LEDs are essential electronics elements).
- Smooth curved traces (PCB traces use 45-degree angles).
- Missing component pads (elements need to look anchored to the board).
- Rounded corners on cards (IC chips are rectangular).
- Missing solder points (nodes where traces meet are essential).
- Non-technical typography (labels should look like component reference designators).

## Accessibility Considerations

- Dark green backgrounds with phosphor green text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-1 focus:ring-[#00ff00]` (green LED ring visible on PCB).
- Copper trace SVG patterns must be `aria-hidden="true"`.
- LED indicators must not be the sole status indicator — include text labels.
- Solder points and component pads are decorative when not interactive.
- Monospace fonts are highly legible for data but can be wide for body text.
- The dark green aesthetic is generally low eye-strain (better than pure black).
- Touch targets must be adequate despite technical styling.
