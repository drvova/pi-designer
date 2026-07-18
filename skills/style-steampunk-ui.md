---
name: steampunk-ui
description: Build steampunk UI components (brass gears, copper pipes, Victorian machinery, parchment surfaces, steam-powered aesthetic) with rotating cogs, riveted metal panels, gauge meters, and industrial-revolution visual language. Trigger this skill when the user asks for steampunk, Victorian sci-fi, brass machinery, gear-driven UI, clockwork interfaces, or Difference Engine aesthetics.
---

# Steampunk UI

Use this skill to design and implement Victorian-era science fiction interfaces with brass gears, copper pipes, riveted iron panels, parchment surfaces, steam-pressure gauges, and the visual language of an industrial revolution that never happened.

## Non-Negotiable Foundations

- Steampunk imagines technology powered by steam, gears, and clockwork — not electricity or silicon.
- Materials are physical and aged: brass, copper, iron, leather, parchment, and wood. Every surface should look like it was forged, not manufactured.
- Colors are warm and metallic: brass gold, copper orange, dark iron, aged parchment, deep mahogany.
- Moving parts are mechanical: rotating gears, swinging needles, turning valves, pumping pistons.
- Typography blends Victorian elegance (serif) with industrial labeling (monospace/stencil).
- The aesthetic is tactile, heavy, and physical — everything looks like it has weight and substance.

## Core Material Recipes

### 1) Brass Panel (the foundational surface)

The signature steampunk surface: aged brass with beveled edges and rivets.

- Background gradient: `bg-gradient-to-br from-[#B5893A] via-[#D4A84B] to-[#8A6729]`.
- Beveled edge: `border-2 border-t-[#E8C66A] border-l-[#E8C66A] border-b-[#6B4F1D] border-r-[#6B4F1D]`.
- Inner shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]`.
- Rivets: small circles at corners `before`/`after` pseudo-elements with `rounded-full bg-[#6B4F1D] w-2 h-2 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.5)]`.

### 2) Parchment Surface

Aged paper for content display, maps, and data readouts.

- Background: `bg-[#f4e8d0]` (aged parchment).
- Texture: subtle SVG noise overlay `opacity-[0.05]`.
- Border: `border border-[#8B7355]` (worn leather edge).
- Shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(139,115,85,0.1)]`.
- Optional burned edge: `filter: sepia(0.2)` on edge elements.

### 3) Rotating Gear Decoration

The steampunk signature: animated rotating cogs.

```css
.gear {
  animation: gearSpin 12s linear infinite;
}
.gear-reverse {
  animation: gearSpin 12s linear infinite reverse;
}
@keyframes gearSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

SVG gear shape:
```html
<svg viewBox="0 0 100 100" class="w-16 h-16 text-[#B5893A] gear">
  <path fill="currentColor" d="M50 10 L55 25 Q62 22 68 26 L78 16 L84 22 L74 32 Q78 38 75 45 L90 50 L90 55 L75 60 Q78 67 74 73 L84 83 L78 89 L68 79 Q62 83 55 80 L50 95 L45 80 Q38 83 32 79 L22 89 L16 83 L26 73 Q22 67 25 60 L10 55 L10 50 L25 45 Q22 38 26 32 L16 22 L22 16 L32 26 Q38 22 45 25 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35 Z" />
</svg>
```

### 4) Steam Pressure Gauge

Circular gauge with a swinging needle for data display.

- Dial: `w-32 h-32 rounded-full bg-gradient-to-br from-[#D4A84B] to-[#8A6729] border-4 border-[#6B4F1D]`.
- Face: inner circle `bg-[#f4e8d0] rounded-full`.
- Needle: absolutely positioned line that rotates based on value.
- Ticks: small lines around the perimeter at regular intervals.
- Glass cover effect: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.1)]`.

### 5) Iron / Dark Metal Surface

Dark riveted iron for heavy structural elements.

- Background: `bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a]`.
- Rivets: regular grid of small circles `w-1.5 h-1.5 rounded-full bg-[#555] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.5)]`.
- Border: `border-2 border-[#555]`.
- Shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]`.

### 6) Brass Button with Lever Mechanism

Button that looks like a mechanical switch or lever.

- Base: `bg-gradient-to-b from-[#D4A84B] to-[#8A6729] border-2 border-[#6B4F1D] rounded px-6 py-3`.
- Text: `text-[#3a2a0a] font-bold uppercase tracking-wider`.
- Shadow: `shadow-[0_3px_0_#6B4F1D,inset_0_1px_0_#E8C66A]`.
- Pressed: `active:translate-y-1 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`.

### 7) Copper Pipe Divider

Decorative pipe element used as section dividers.

- Horizontal: `h-3 bg-gradient-to-b from-[#b87333] via-[#daa06d] to-[#8b4513] rounded-full`.
- End caps: `w-4 h-5 bg-gradient-to-b from-[#B5893A] to-[#6B4F1D] rounded` at each end.
- Valves: circular valve wheel SVG at intersection points.

## Color Palette System

### Core Steampunk Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Brass Light | `#E8C66A` | Polished brass highlights | Top edges, highlights |
| Brass | `#B5893A` | Standard brass | Primary surface |
| Brass Dark | `#8A6729` | Aged brass | Bottom edges, shadows |
| Brass Deep | `#6B4F1D` | Oxidized brass | Borders, rivets |
| Copper | `#B87333` | Copper | Pipes, accents |
| Copper Light | `#DA8A4D` | Polished copper | Highlights |
| Iron Dark | `#3a3a3a` | Cast iron | Dark surfaces, frames |
| Iron | `#1a1a1a` | Dark iron | Deep backgrounds |
| Parchment | `#f4e8d0` | Aged paper | Content surfaces, readouts |
| Mahogany | `#4a2c16` | Stained wood | Wood accents, frames |
| Oxblood | `#8B2332` | Leather | Accent, warnings |
| Emerald | `#2D6B45` | Patina/verdigris | Secondary accent |
| Amber Glow | `#E8A828` | Gas lamp glow | Highlights, active states |

Rules: Warm metallics dominate. Brass and copper are primary. Iron provides dark contrast. Parchment provides light surfaces. The palette should feel like a Victorian workshop.

## Typography Recommendations

Steampunk typography blends Victorian elegance with industrial function:

- **Display headings:** Playfair Display, Cinzel, or UnifrakturMaguntia (Victorian/Blackletter).
- **Alternative display:** IM Fell English, IM Fell DW Pica (authentic period typefaces).
- **Body:** EB Garamond, Lora, or Crimson Text (classical serif for readability).
- **Labels/data:** Courier Prime, IBM Plex Mono, or Special Elite (typewriter/industrial).
- **Stamps/seals:** Oswald, Anton, or Impact at `font-bold uppercase` for stamped metal labels.
- The MIX of Victorian serif with industrial monospace creates the steampunk tension.

## Component Architecture Pattern

1. Dark iron or mahogany background (the workshop floor).
2. Brass panels with rivets and beveled edges (primary content surfaces).
3. Parchment surfaces within brass frames (data, text, maps).
4. Rotating gear decorations (mechanical atmosphere).
5. Pressure gauges and valve meters (data display).
6. Copper pipe dividers and mechanical details.
7. Gas lamp glow accents (warm amber highlights).

## Interaction Rules

- Default state: heavy, mechanical, warm metallic.
- Hover: brass brightens (`hover:brightness-110`), gears spin faster, needle twitches.
- Active: mechanical press (`active:translate-y-1` with collapsing shadow — like pressing a button into its housing).
- Focus: brass glow ring `focus:ring-2 focus:ring-[#E8C66A]`.
- Transitions: `transition-all duration-200` (mechanical, deliberate — not smooth/digital).
- Gear rotation: continuous, varying speeds (12s, 18s, 24s for different gears).
- Gauge needle: springy oscillation when values change.

## Reusable Tailwind Tokens

- Brass panel: `bg-gradient-to-br from-[#B5893A] via-[#D4A84B] to-[#8A6729] border-2 border-t-[#E8C66A] border-b-[#6B4F1D] shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]`
- Parchment: `bg-[#f4e8d0] border border-[#8B7355] shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(139,115,85,0.1)]`
- Iron: `bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] border-2 border-[#555] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`
- Brass button: `bg-gradient-to-b from-[#D4A84B] to-[#8A6729] border-2 border-[#6B4F1D] text-[#3a2a0a] font-bold uppercase shadow-[0_3px_0_#6B4F1D,inset_0_1px_0_#E8C66A]`
- Copper pipe: `h-3 bg-gradient-to-b from-[#b87333] via-[#daa06d] to-[#8b4513] rounded-full`
- Gear glow: `drop-shadow-[0_0_8px_rgba(232,168,40,0.3)]`
- Amber glow: `text-[#E8A828] [text-shadow:0_0_8px_rgba(232,168,40,0.5)]`

## Quality Checklist (must pass)

- Surfaces use brass, copper, iron, or parchment materials with gradient depth.
- Beveled edges (light top/left, dark bottom/right) on all metallic panels.
- Rivets or mechanical fasteners are visible on panel corners.
- At least one rotating gear decoration (animated).
- Color palette is warm metallic (brass, copper, iron) with parchment contrast.
- Typography mixes Victorian serif with industrial monospace.
- Data display uses gauges, dials, or meter elements (not flat modern charts).
- Shadows are heavy and physical (everything has weight).
- The aesthetic reads as Victorian-era steam-powered technology.

## Anti-Patterns

- Flat or glossy modern surfaces (steampunk requires material texture and bevels).
- Cool color palettes (blues, greens as primary — steampunk is warm metallics).
- Smooth digital animations (mechanical motion is deliberate and gear-like).
- Missing gear/cog decorations (gears are the steampunk signature).
- Lightweight shadows (everything in steampunk has physical weight).
- Modern sans-serif typography alone (needs Victorian serif + industrial mono mix).
- Missing rivets or mechanical fasteners (panels look unfinished without them).
- Pure black backgrounds (use dark iron/mahogany with warm undertones).
- Clean, pristine surfaces (everything should look aged, forged, and well-used).
- Digital-looking data displays (use analog gauges and dials, not flat numbers).

## Accessibility Considerations

- Brass on parchment provides good contrast for text.
- Dark iron backgrounds with light text should verify WCAG AA.
- Gear animations must respect `prefers-reduced-motion` (stop rotation).
- Gauge values must have text alternatives (`aria-valuenow`) for screen readers.
- Focus states must be visible against metallic backgrounds (`focus:ring-2 focus:ring-[#E8C66A]`).
- Decorative gears and pipes must be `aria-hidden="true"`.
- Touch targets must be adequate despite mechanical styling (minimum 44x44px).
- Warm amber glow effects should not blur text readability.
