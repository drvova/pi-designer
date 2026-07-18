---
name: postmodern-ui
description: Build postmodern UI components (playful irreverent architecture, clashing historical references, decorative-for-decoration's-sake, ironic ornamentation, Memphis-meets-Venturi, less-is-a-bore) with mixed historical styles, decorative excess, and the deliberately provocative refusal of modernist purity. Trigger this skill when the user asks for postmodern design, pomo, Venturi, less-is-a-bore, ironic ornament, or playful architecture-inspired interfaces.
---

# Postmodern UI

Use this skill to design and implementation playful, irreverent interfaces inspired by postmodern architecture and design: deliberately clashing historical references, ironic ornamentation, decorative excess for its own sake, mixed scale and proportion, bright color clashes, and the philosophy that "less is a bore."

## Core-Material Recipes

### 1) Clashing Historical Panel

Panel mixing two contradictory architectural styles.

- `bg-[#f5d76e] border-[3px] border-[#1a1a1a] p-8 rounded-tl-[4rem] rounded-br-none shadow-[6px_6px_0_#c41e1e]`.
- Classical column SVG on one side + modern geometric blocks on the other (intentional clash).

### 2) Decorative-for-Decoration Ornament

Ornament that serves no functional purpose (pure postmodern playfulness).

- Giant keystroke shape above a doorway: SVG arch that is too large and brightly colored.
- Floating pediment: `bg-[#5acaf0] [clip-path:polygon(0_100%,50%_0,100%_100%)] w-full h-8` (triangle on top of a rectangular card).

### 3) Mixed-Scale Typography

Headings at deliberately contradictory scales.

- Giant `text-[12rem] font-thin` next to tiny `text-[10px] font-bold`.
- A small label that should be big, a big heading that should be small — irony through scale.

### 4) Irony Button

Button that says one thing and does another (or is styled ironically).

- `bg-[#c41e1e] text-white font-bold text-lg uppercase tracking-wider px-8 py-3 rounded-full border-[4px] border-[#1a1a1a] shadow-[4px_4px_0_#1a3a8a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#1a3a8a] transition-all` with text like "LESS IS A BORE" or "DECORATE FREELY".

### 5) Venturi Strip

Decorative band that references Venturi's "decorated shed" concept.

- `bg-[#5acaf0] h-12 flex items-center justify-center font-bold text-xl uppercase tracking-widest text-white border-y-[3px] border-[#1a1a1a]` (bold decorative sign band across a building facade).

### 6) Clash Color Block

Panel using deliberately clashing colors.

- `bg-[#ff6b9d] text-[#0aff10] font-bold p-6 border-[3px] border-[#f5d76e]` (pink + neon green + yellow — maximum clash).

### 7) Historical Quote Element

Element that "quotes" a classical architectural form ironically.

- Ionic column SVG rendered in bright pink instead of stone.
- Doric entablature band in neon blue.
- A classical arch with a modern sans-serif word stamped on it.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| PoMo Pink | `#ff6b9d` | Primary clash |
| PoMo Blue | `#5acaf0` | Secondary clash |
| PoMo Yellow | `#f5d76e` | Warm clash |
| Neon Green | `#0aff10` | Maximum clash |
| Bold Red | `#c41e1e` | Energy |
| Ink Black | `#1a1a1a` | Outlines |
| Pure White | `#ffffff` | Contrast surface |

Rules: Colors should CLASH. The postmodern palette deliberately violates modernist color theory. Pink with green, blue with yellow, red with teal — the point is visual disagreement. "Less is a bore" means MORE color, MORE pattern, MORE clash.

## Typography Recommendations

- **Display:** Bricolage Grotesque, Space Grotesk, or Cooper Hewitt (geometric with personality).
- **Alternative:** Any font used at IRRATIONAL scale (enormous thin or tiny bold).
- **Body:** Inter, DM Sans (clean modern sans for contrast).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (bold signage).
- Typography should be PLAYFUL and IRONIC — mixing high and low, big and small.

## Interaction Rules

- Default: playful, clashing, irreverent.
- Hover: elements transform in unexpected ways.
  - `hover:rotate-2 hover:scale-105 hover:shadow-[2px_2px_0_#1a3a8a] transition-all duration-200`.
- Active: `active:scale-95 active:rotate-[-2deg]`.
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#ff6b9d]/50`.
- Transitions: `transition-all duration-200` (quick, playful, bouncy).

## Reusable Tailwind Tokens

- Clashing panel: `bg-[#f5d76e] border-[3px] border-[#1a1a1a] rounded-tl-[4rem] shadow-[6px_6px_0_#c41e1e]`.
- Irony button: `bg-[#c41e1e] text-white border-[4px] border-[#1a1a1a] shadow-[4px_4px_0_#1a3a8a]`.
- Clash block: `bg-[#ff6b9d] text-[#0aff10] border-[3px] border-[#f5d76e]`.
- Venturi strip: `bg-[#5acaf0] font-bold uppercase tracking-widest text-white border-y-[3px] border-[#1a1a1a]`.
- Pediment: `[clip-path:polygon(0_100%,50%_0,100%_100%)]`.

## Quality Checklist

- At least one deliberately clashing color combination.
- Mixed historical references (classical form + modern treatment).
- Ornament for decoration's sake (non-functional decorative element).
- At least one ironic typography choice (wrong scale, wrong placement).
- Playful, irreverent overall mood.
- "Less is a bore" energy — MORE is better.
- Hard offset shadows in clashing colors.
- Typography is playful and mixed.
- The aesthetic reads as postmodern architecture / Venturi / decorated shed.
- Nothing takes itself too seriously.

## Anti-Patterns

- Modernist minimalism (postmodernism REJECTS "less is more").
- Harmonious color palette (postmodern colors CLASH on purpose).
- Restraint (postmodernism is decorative EXCESS).
- Missing historical references (quoting classical forms ironically is key).
- Taking itself seriously (postmodernism is playful and ironic).
- Pure functional design (postmodernism adds NON-FUNCTIONAL decoration).
- Single consistent scale (postmodernism mixes giant and tiny).
- Missing the clashing quality (harmony is the enemy of pomo).
- Monochromatic palettes (postmodernism is colorful).
- Clean pure geometry (postmodernism mixes geometric and classical forms).

## Accessibility Considerations

- Clashing colors can create contrast issues — verify WCAG AA for functional text.
- Use solid-color cards behind text if the clash background reduces readability.
- Focus states: `focus:ring-4 focus:ring-[#ff6b9d]/50` (thick pink ring — clearly visible).
- Decorative SVGs (columns, pediments) must be `aria-hidden="true"`.
- The playful layout should not confuse interactive element identification.
- Touch targets must be adequate despite decorative border styling.
- The clashing palette may be visually overwhelming — maintain clear hierarchy.
