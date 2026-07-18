---
name: casino-ui
description: Build casino / Vegas UI components (neon signs, playing card motifs, roulette wheels, poker chip accents, dice, gold and red luxury, showgirl glamour) with flashing neon, velvet textures, gold trim, and the high-energy sensory overload of Las Vegas. Trigger this skill when the user asks for casino design, Vegas aesthetic, gambling UI, neon luxury, poker interface, or high-roller interfaces.
---

# Casino / Vegas UI

Use this skill to design and implement high-energy, sensory-rich interfaces inspired by Las Vegas casinos: flashing neon signs, playing card and poker chip motifs, gold and crimson velvet surfaces, dice and roulette elements, and the glamorous, adrenaline-fueled atmosphere of the casino floor.

## Non-Negotiable Foundations

- Casino UI is about ENERGY and EXCITEMENT: every element should feel like the casino floor — bright, flashy, and designed to keep you engaged.
- Colors are bold and luxurious: crimson red, gold, black, emerald green (felt), and electric neon accents.
- Playing card suits (hearts, diamonds, clubs, spades) and dice are decorative motifs.
- Gold is EVERYWHERE: trim, borders, text, chip stacks, and ornamental flourishes.
- Neon glow effects simulate casino signage: text and borders emit colored light.
- Velvet textures (deep red/purple) provide the luxury surface beneath the gold.

## Core Material Recipes

### 1) Velvet and Gold Panel

Deep velvet surface with gold trim.

- `bg-gradient-to-br from-[#3a0a0a] to-[#1a0505] border-2 border-[#c9a84c] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(201,168,76,0.15)]`.
- Velvet texture: subtle SVG noise at `opacity-[0.04]`.

### 2) Neon Sign Text

Text that glows like a casino sign.

- Red neon: `text-[#ff0033] [text-shadow:0_0_5px_#ff0033,0_0_10px_#ff0033,0_0_20px_#ff0033,0_0_40px_rgba(255,0,51,0.5)] font-bold uppercase tracking-wider`.
- Gold neon: `text-[#ffcc00] [text-shadow:0_0_5px_#ffcc00,0_0_10px_#ffaa00,0_0_20px_rgba(255,204,0,0.4)]`.
- Animated flicker (optional): subtle opacity animation to simulate neon warmup.

### 3) Poker Chip Accent

Circular poker chip decoration.

- `w-12 h-12 rounded-full bg-gradient-to-br from-[#1a3a1a] to-[#0a2a0a] border-4 border-dashed border-[#c9a84c] flex items-center justify-center`.
- Center: `text-[#c9a84c] font-bold text-xs` showing denomination ($5, $25, $100).
- Chip color variants: Red `#c41a1a`, Blue `#1a1a8a`, Green `#1a3a1a`, Black `#1a1a1a`.

### 4) Playing Card Frame

Card-shaped container (like a playing card).

- `w-48 h-72 rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.3)]`.
- Suit corner: `text-[#c41a1a] text-2xl font-bold` (hearts/diamonds) or `text-[#1a1a1a]` (spades/clubs).

### 5) Casino Button

Gold-bordered button on velvet with neon glow.

- `bg-gradient-to-b from-[#c9a84c] to-[#a07820] text-[#1a0505] font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#f5d76e] shadow-[0_4px_12px_rgba(201,168,76,0.4),0_0_20px_rgba(255,204,0,0.2)] hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] transition-all`.

### 6) Dice Decoration

SVG dice with pips.

```html
<svg viewBox="0 0 60 60" class="w-10 h-10">
  <rect x="5" y="5" width="50" height="50" rx="8" fill="#ffefef" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="20" cy="20" r="4" fill="#c41a1a"/>
  <circle cx="40" cy="20" r="4" fill="#c41a1a"/>
  <circle cx="30" cy="30" r="4" fill="#c41a1a"/>
  <circle cx="20" cy="40" r="4" fill="#c41a1a"/>
  <circle cx="40" cy="40" r="4" fill="#c41a1a"/>
</svg>
```

### 7) Felt Green Surface

Casino table felt.

- `bg-[#0a3a1a]` with subtle fabric texture: `bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4px_4px]`.

## Color Palette System

### Core Casino Palette

| Color | Hex | Role |
|---|---|---|
| Crimson Velvet | `#3a0a0a` | Primary dark surface |
| Casino Gold | `#c9a84c` | Primary accent, trim, text |
| Light Gold | `#f5d76e` | Highlights, borders |
| Neon Red | `#ff0033` | Neon glow accent |
| Neon Gold | `#ffcc00` | Neon glow accent |
| Felt Green | `#0a3a1a` | Table surface |
| Playing Card Red | `#c41a1a` | Suit accents |
| Pure Black | `#0a0a0a` | Deepest backgrounds |
| Card White | `#ffefef` | Card surfaces |
| Emerald | `#1a5a3a` | Success, money |

Rules: Crimson velvet + gold + neon = casino. The palette should feel like walking onto the Bellagio casino floor. Gold is universal; red and green provide secondary richness.

## Typography Recommendations

- **Display:** Playfair Display, Bodoni, or Cinzel (luxurious serif, gold-treated).
- **Neon display:** Monoton, Bungee, or Ultra (neon sign lettering).
- **Body:** Inter, DM Sans (clean readable sans for UI text).
- **Labels:** `font-bold uppercase tracking-widest` with gold or neon treatment.
- Typography should feel like casino signage and luxury hotel headers.

## Interaction Rules

- Default: energetic, luxurious, flashy.
- Hover: neon brightens, gold glows intensify.
  - `hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] transition-all duration-200`.
- Active: `active:scale-95` (satisfying press like pulling a slot lever).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/50`.
- Transitions: `transition-all duration-200` (fast, energetic, exciting).
- Optional: slot machine spin animation on number displays.

## Reusable Tailwind Tokens

- Velvet panel: `bg-gradient-to-br from-[#3a0a0a] to-[#1a0505] border-2 border-[#c9a84c] shadow-[0_0_20px_rgba(201,168,76,0.15)]`.
- Neon red: `text-[#ff0033] [text-shadow:0_0_5px_#ff0033,0_0_10px_#ff0033,0_0_20px_#ff0033]`.
- Casino button: `bg-gradient-to-b from-[#c9a84c] to-[#a07820] border-2 border-[#f5d76e] shadow-[0_0_20px_rgba(255,204,0,0.2)]`.
- Felt surface: `bg-[#0a3a1a]`.
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] to-[#a07820]`.

## Quality Checklist

- Neon glow effects on at least one heading or text element.
- Gold trim/borders on major surfaces.
- At least one playing card or dice decorative motif.
- Velvet (deep red/purple) surfaces present.
- Casino felt green used as an accent surface.
- Poker chip or gambling element decoration.
- Typography mixes luxury serif with neon sign styling.
- The aesthetic reads as a Las Vegas casino floor.
- Colors are crimson, gold, and green (felt) — the casino triad.
- Everything feels energetic, flashy, and designed to excite.

## Anti-Patterns

- Muted or restrained palettes (casino is loud and bold).
- Missing gold accents (gold is the universal casino luxury connector).
- Missing neon glow (neon signs are the signature Vegas element).
- Pastel or soft colors (casino is deep velvet + bright neon).
- Modern minimalist design (casino is ornate and sensory-rich).
- Missing card/dice/chip motifs (these are the gambling visual vocabulary).
- Slow gentle animations (motion should be fast and exciting).
- Light bright backgrounds (casino is dark velvet with neon pops).
- Sans-serif-only typography (casino needs luxury serif + neon display).
- Missing the energy/excitement factor (casino design should thrill).

## Accessibility Considerations

- Dark velvet backgrounds with gold/white text provide good contrast (verify WCAG AA).
- Neon glow should not blur text edges — verify readability with and without glow.
- Focus states: `focus:ring-2 focus:ring-[#ffcc00]/50` (gold neon ring).
- Card/dice/chip decorations must be `aria-hidden="true"` when non-functional.
- Flashing or flickering animations must be careful not to trigger seizures (keep below 3Hz).
- Respect `prefers-reduced-motion`: disable neon flicker.
- Gold gradient text on dark must meet AA for large/bold text.
- Touch targets must be adequate despite ornate border styling.
