---
name: atompunk-ui
description: Build atompunk / atomic age UI components (1950s-60s space-age optimism, googie architecture, orbit motifs, starburst patterns, sweeping curves, tail-fin shapes) with retro-futurist mid-century palettes, boomerang shapes, and the nuclear-age vision of tomorrow. Trigger this skill when the user asks for atompunk, atomic age design, 1950s retro-futurism, googie aesthetic, Jetsons-style UI, space-age mid-century, or Fallout-inspired interfaces.
---

# Atompunk / Atomic Age UI

Use this skill to design and implement mid-century retro-futuristic interfaces inspired by 1950s-60s atomic age optimism: sweeping googie curves, orbit/spirit-level motifs, starburst patterns, tail-fin shapes, and the confident vision of tomorrow from the dawn of the space race.

## Non-Negotiable Foundations

- Atompunk imagines the future as envisioned during the 1950s-60s atomic age and space race. Think The Jetsons, Fallout, googie architecture, and tail-fin cars.
- Shapes are sweeping and aerodynamic: curves, boomerangs, parabolas, starbursts, and atom/orbit motifs. No sharp rectangles.
- The aesthetic is unapologetically optimistic: technology will save us, the future is bright, and space is the destination.
- Colors are mid-century retro: teal, mustard yellow, coral, avocado green, cream, and metallic chrome.
- Typography is sleek and modern-for-its-era: geometric sans-serifs with space-age character, or condensed display fonts.
- Patterns are modular and repeating: atoms, boomerangs, starbursts, and atomic symbols used as decorative motifs.

## Core Material Recipes

### 1) Starburst / Atom Motif Background

The signature atomic age decorative pattern.

```css
background: 
  radial-gradient(circle at 50% 50%, transparent 20%, rgba(255,200,0,0.05) 21%, transparent 22%),
  radial-gradient(circle at 20% 80%, rgba(255,107,107,0.08) 0%, transparent 30%),
  radial-gradient(circle at 80% 20%, rgba(0,166,166,0.08) 0%, transparent 30%);
```

SVG starburst accent:
```html
<svg viewBox="0 0 100 100" class="w-32 h-32 opacity-20">
  <g stroke="#ff6b6b" stroke-width="1" fill="none">
    <line x1="50" y1="50" x2="50" y2="0"/>
    <line x1="50" y1="50" x2="85" y2="15"/>
    <line x1="50" y1="50" x2="100" y2="50"/>
    <line x1="50" y1="50" x2="85" y2="85"/>
    <line x1="50" y1="50" x2="50" y2="100"/>
    <line x1="50" y1="50" x2="15" y2="85"/>
    <line x1="50" y1="50" x2="0" y2="50"/>
    <line x1="50" y1="50" x2="15" y2="15"/>
  </g>
  <circle cx="50" cy="50" r="8" fill="#ff6b6b"/>
</svg>
```

### 2) Googie Curve Panel

The signature mid-century shape: a panel with sweeping curved edges.

- Asymmetric border-radius: `rounded-tl-[60px] rounded-br-[60px]` (boomerang shape).
- Alternative: `rounded-tl-full rounded-br-[2rem]` (sweeping googie arch).
- Background: `bg-gradient-to-br from-[#006666] to-[#004444]` (teal gradient).
- Shadow: `shadow-[0_4px_20px_rgba(0,100,100,0.2)]`.

### 3) Atomic Age Button

Sleek, curved button with chrome accents.

- Primary: `bg-gradient-to-r from-[#ff6b6b] to-[#e05555] text-white font-bold rounded-l-full rounded-r-full px-10 py-3 shadow-[0_4px_8px_rgba(255,107,107,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-105 transition-all`.
- Teal: `bg-gradient-to-r from-[#006666] to-[#008080] text-white font-bold rounded-full px-8 py-3`.
- Chrome: `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] to-[#909090] text-[#1a1a1a] font-bold rounded-full px-8 py-3 border border-[#a0a0a0]`.

### 4) Boomerang / Parabola Divider

Curved divider shape inspired by mid-century furniture and architecture.

SVG boomerang divider:
```html
<svg viewBox="0 0 200 20" class="w-full">
  <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="#006666" stroke-width="2"/>
</svg>
```

### 5) Orbit / Spirit-Level Data Display

Data displayed as orbiting elements around a central point.

- Container: `relative w-40 h-40 rounded-full`.
- Center: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center text-white font-bold`.
- Orbiting elements: positioned with `transform: rotate(Xdeg) translateX(50px) rotate(-Xdeg)`.
- Orbit ring: `border-2 border-dashed border-[#006666]/30 rounded-full`.

### 6) Tail-Fin Card Edge

Card with angled tail-fin corners reminiscent of 1950s cars.

- `[clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]`.
- Background: `bg-[#f4ead0]` (warm cream).

## Color Palette System

### Core Atompunk Palette

| Color | Hex | Role |
|---|---|---|
| Teal | `#006666` | Primary, space-age sophistication |
| Coral | `#ff6b6b` | Energy, warmth, retro optimism |
| Mustard Yellow | `#ffc107` | Sunshine, nuclear energy, highlight |
| Avocado Green | `#5a7d3a` | Nature-meets-tech, secondary |
| Cream | `#f4ead0` | Background, warm neutral |
| Chrome Silver | `#c0c0c0` | Metallic accents, borders |
| Charcoal | `#1a1a1a` | Text, strong contrast |
| Turquoise | `#40e0d0` | Accent, retro-futurist |

Rules: Teal, coral, and mustard dominate. The palette should feel like a 1950s diner crossed with a space station. Cream provides warm backgrounds. Chrome adds mid-century metallic accent.

## Typography Recommendations

Atompunk typography is sleek, geometric, and space-age:

- **Display headings:** Poppins, Futura, or Cocomat (geometric sans-serif, echoing mid-century modern).
- **Condensed display:** Oswald, Anton, or Bebas Neue (condensed, billboard-style).
- **Script accent:** Lobster, Pacifico, or Grandma (for retro diner-style accents).
- **Body:** Poppins, DM Sans, or Work Sans (clean geometric sans).
- **Mono:** Space Mono (for data/technical readouts).
- Avoid serif fonts. Atompunk is sans-serif and geometric.

## Component Architecture Pattern

1. Cream or warm neutral background (the optimistic canvas).
2. Starburst/atom pattern overlays (subtle, decorative).
3. Googie curve panels with asymmetric border-radius.
4. Sleek curved buttons with chrome highlights.
5. Orbit/spirit-level data displays.
6. Boomerang and parabola dividers.
7. Tail-fin angled card corners.

## Interaction Rules

- Default state: sleek, optimistic, curved.
- Hover: smooth scale-up and chrome shine.
  - `hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,107,107,0.3)] transition-all duration-300`.
- Active: `active:scale-95`.
- Focus: `focus:ring-2 focus:ring-[#006666] focus:ring-offset-2`.
- Transitions: `transition-all duration-300 ease-out` (smooth, optimistic, confident).
- Animations: gentle rotations (orbit elements), starburst pulses.

## Reusable Tailwind Tokens

- Googie panel: `bg-gradient-to-br from-[#006666] to-[#004444] rounded-tl-[60px] rounded-br-[60px] shadow-[0_4px_20px_rgba(0,100,100,0.2)]`
- Atompunk button: `bg-gradient-to-r from-[#ff6b6b] to-[#e05555] text-white font-bold rounded-l-full rounded-r-full px-10 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]`
- Chrome button: `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] to-[#909090] text-[#1a1a1a] font-bold rounded-full border border-[#a0a0a0]`
- Cream bg: `bg-[#f4ead0]`
- Tail-fin clip: `[clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]`
- Starburst SVG accent: radiating lines from center point in coral or teal.

## Quality Checklist (must pass)

- Shapes use sweeping curves, boomerangs, and asymmetric border-radius (no sharp rectangles).
- At least one starburst or orbit/atom motif present.
- Color palette is mid-century retro (teal, coral, mustard, avocado, cream).
- Buttons have rounded ends (`rounded-l-full rounded-r-full` or `rounded-full`).
- Chrome/silver metallic accents are present.
- Typography is geometric sans-serif with space-age character.
- Tail-fin or angled clip-path corners on at least some cards.
- Boomerang or parabola dividers between sections.
- The aesthetic reads as 1950s-60s space-age optimism.

## Anti-Patterns

- Sharp rectangles and rigid grids (atompunk is curved and aerodynamic).
- Dark, dystopian mood (atompunk is bright and optimistic).
- Monospace-only typography (needs geometric sans-serif space-age fonts).
- Missing curved shapes (curves and boomerangs are essential).
- Pastel-only palettes (atompunk uses bold teal, coral, mustard).
- Modern minimalist design (atompunk is expressive and decorative).
- Missing atomic/orbit motifs (the atom symbol is the core visual metaphor).
- Pure white backgrounds (use warm cream `#f4ead0`).
- Thin, anemic typography (atompunk is bold and confident).
- Tail-fin shapes on every single element (use sparingly as accents).

## Accessibility Considerations

- Mid-century color palettes (teal, coral on cream) generally provide good contrast.
- Curved clip-path edges must not cut off interactive areas.
- Starburst and orbit SVGs must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#006666]` (visible against cream).
- Orbit data displays need text alternatives for screen readers.
- Chrome buttons (silver gradient with dark text) must verify WCAG AA contrast.
- Touch targets must be adequate despite curved shapes (44x44px minimum).
- Animations (orbit rotation, starburst pulse) must respect `prefers-reduced-motion`.
