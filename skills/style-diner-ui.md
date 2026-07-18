---
name: diner-ui
description: Build classic American diner UI components (chrome stools, neon OPEN signs, checkerboard floors, pie display cases, jukebox-at-the-table, vinyl booth seating, coffee pots, pancake stacks, 24-hour warmth) with chrome-and-vinyl surfaces, pastel neon accents, and the welcoming late-night comfort of the American roadside diner. Trigger this skill when the user asks for diner design, chrome stools, neon OPEN sign, checkerboard floor pattern, pie display case, vinyl booth seating, Formica table surfaces, coffee pot decorations, pancake stack layouts, roadside diner interfaces, or 24-hour late-night comfort aesthetics.
---

# Diner UI

Use this skill to design and implement interfaces inspired by the classic American roadside diner: chrome-trimmed curved panels, red vinyl booth seating, checkerboard linoleum floors, neon OPEN/CLOSED signage, rotating pie display cases, Formica table surfaces with chrome edging, coffee pot silhouettes, and the warm 24-hour glow that makes the diner a permanent sanctuary for travelers, night owls, and regulars alike.

## Non-Negotiable Foundations

- Diner UI simulates the classic American roadside diner: chrome stools at a curved counter, vinyl booths along the wall, a pie case near the entrance, a neon OPEN sign in the window, and the comforting hum of a coffee pot that never stops.
- Chrome-trimmed curved panels are the SIGNATURE structural element — counters, stools, table edges, and door frames all use chrome piping with gradient silver reflections. Nothing is raw or unfinished.
- Checkerboard linoleum floor is the signature background pattern — alternating black and cream squares that establish the diner floor instantly. It must be visible as at least a footer strip or border element.
- Red vinyl booth seating texture is the signature upholstery — tufted, glossy, deep red, with chrome button studs. Panels and cards use vinyl-tufted backgrounds where appropriate.
- Neon OPEN/CLOSED sign is the signature status indicator — glowing neon lettering in red or blue, encased in a window-framed element with a flicker animation.
- The pie display case is the signature content carousel — a rotating display of pie cards that cycle through featured items, evoking the glass-domed rotating dessert case.
- Formica table surfaces with chrome edging are the signature card/panel background — speckled or solid laminate with a chrome trim border.
- Coffee pot silhouettes are decorative reinforcements — stainless steel urn shapes that frame content areas, reinforce the "bottomless coffee" diner identity.
- Colors are chrome silver, diner red, mint green, cream, black checker squares, and neon blue/pink accents — the palette of the 1950s American diner.
- The aesthetic is welcoming, warm, nostalgic, and perpetually open — a place where the coffee is always hot and the pie is always fresh.

## Core Material Recipes

### 1) Chrome-Trimmed Curved Panel

The signature chrome-edged surface for counters, panels, and table tops.

- Body: `bg-gradient-to-br from-[#e8e8e8] via-[#d0d0d0] to-[#b0b0b0] rounded-[1.5rem] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6)] border-2 border-[#c0c0c0]`.
- Chrome piping edge: `ring-2 ring-[#e8e8e8] ring-offset-0 shadow-[0_0_0_3px_#b0b0b0,inset_0_1px_2px_rgba(255,255,255,0.8)]`.
- Top highlight strip: `before:absolute before:inset-x-0 before:top-0 before:h-1/3 before:rounded-t-[1.5rem] before:bg-gradient-to-b before:from-white/40 before:to-transparent`.
- Bottom shadow strip: `after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:rounded-b-[1.5rem] after:bg-gradient-to-t after:from-black/10 after:to-transparent`.

### 2) Red Vinyl Booth Texture

Tufted vinyl upholstery background for panels and card surfaces.

- Vinyl surface: `bg-[#c41e1e] rounded-xl p-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] relative overflow-hidden`.
- Tufting pattern: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.25)_3px,transparent_3px),radial-gradient(circle_at_75%_25%,rgba(0,0,0,0.25)_3px,transparent_3px),radial-gradient(circle_at_25%_75%,rgba(0,0,0,0.25)_3px,transparent_3px),radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.25)_3px,transparent_3px)] before:bg-[length:24px_24px]`.
- Glossy highlight: `after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/10 after:via-transparent after:to-black/20 after:rounded-xl`.
- Chrome button studs: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_25%,#e8e8e8_1px,transparent_1.5px),radial-gradient(circle_at_75%_25%,#e8e8e8_1px,transparent_1.5px),radial-gradient(circle_at_25%_75%,#e8e8e8_1px,transparent_1.5px),radial-gradient(circle_at_75%_75%,#e8e8e8_1px,transparent_1.5px)] before:bg-[length:24px_24px]`.

### 3) Checkerboard Floor Pattern

The signature linoleum floor background for footer strips, borders, and sections.

- Checkerboard: `bg-[repeating-conic-gradient(#faf5ea_0%_25%,#1a1a1a_0%_50%)] bg-[length:32px_32px]`.
- Subtle floor texture overlay: `relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,0,0,0.03)_1px,rgba(0,0,0,0.03)_2px)]`.
- Border strip variant: `h-4 bg-[repeating-conic-gradient(#faf5ea_0%_25%,#1a1a1a_0%_50%)] bg-[length:16px_16px] rounded-sm`.

### 4) Neon OPEN/CLOSED Sign

Glowing neon status indicator in a window-framed element.

- Window frame: `bg-[#1a1a1a] rounded-lg p-4 border-4 border-[#c0c0c0] shadow-[0_4px_16px_rgba(0,0,0,0.4)] relative`.
- OPEN text (red neon): `text-[#ff2d2d] font-bold text-2xl tracking-wider [text-shadow:0_0_4px_#ff2d2d,0_0_8px_#ff2d2d,0_0_16px_rgba(255,45,45,0.6)] animate-[neon-flicker_4s_ease-in-out_infinite]`.
- CLOSED text (blue neon): `text-[#4da6ff] font-bold text-2xl tracking-wider [text-shadow:0_0_4px_#4da6ff,0_0_8px_#4da6ff,0_0_16px_rgba(77,166,255,0.6)]`.
- Tube outline: `border-2 border-[#ff2d2d]/40 rounded-sm shadow-[0_0_8px_rgba(255,45,45,0.3),inset_0_0_8px_rgba(255,45,45,0.15)]`.

Neon flicker keyframes:
```css
@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.4; }
  94% { opacity: 1; }
  96% { opacity: 0.6; }
  97% { opacity: 1; }
}
```

### 5) Pie Display Case (Carousel)

Rotating glass-domed display of featured items cycling through cards.

- Case frame: `bg-gradient-to-b from-[#faf5ea] to-[#e8dcc8] rounded-t-[3rem] rounded-b-lg p-6 border-4 border-[#c0c0c0] shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6)]`.
- Glass dome: `bg-gradient-to-b from-white/30 via-transparent to-white/10 rounded-t-[3rem] backdrop-blur-sm`.
- Pie card: `bg-[#faf5ea] rounded-xl p-4 border-2 border-[#d4a017] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Pie visual: `w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-[#d4a017] via-[#c4862b] to-[#a06820] border-4 border-[#e8dcc8] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]`.
- Lattice top: `bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(250,245,234,0.6)_6px,rgba(250,245,234,0.6)_8px)] rounded-full`.
- Rotation: `animate-[carousel-spin_12s_linear_infinite]` on the carousel track.

Carousel spin keyframes:
```css
@keyframes carousel-spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
```

### 6) Formica Table Surface

Laminate tabletop with chrome edge for card backgrounds.

- Formica surface: `bg-[#faf5ea] rounded-lg p-6 border-2 border-[#c0c0c0] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Speckled Formica variant: `bg-[#faf5ea] bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04)_1px,transparent_1px),radial-gradient(circle_at_60%_70%,rgba(0,0,0,0.03)_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:12px_12px]`.
- Chrome edge top: `before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#b0b0b0] before:via-[#f0f0f0] before:to-[#b0b0b0] before:rounded-t-lg`.
- Mint Formica variant: `bg-[#a8d8be]` with same chrome edge.

### 7) Coffee Pot Decoration

Stainless steel urn silhouette framing content areas.

- Pot body: `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] to-[#9a9a9a] rounded-b-[2rem] rounded-t-lg w-20 h-28 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.3)]`.
- Lid: `w-10 h-4 bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] rounded-t-md mx-auto -mb-1`.
- Spout: `w-4 h-8 bg-gradient-to-r from-[#b0b0b0] to-[#d0d0d0] rounded-r-lg -ml-1 mt-8`.
- Handle: `w-6 h-12 border-4 border-[#a0a0a0] rounded-r-full -mr-4 mt-4`.
- Shine highlight: `before:absolute before:top-2 before:left-3 before:w-2 before:h-20 before:bg-gradient-to-b before:from-white/60 before:to-transparent before:rounded-full`.

### 8) Chrome Stool Element

Swivel stool silhouette for decorative seating indicators or list markers.

- Seat: `w-10 h-3 bg-gradient-to-b from-[#e8e8e8] to-[#b0b0b0] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)]`.
- Seat cushion: `w-9 h-2 bg-[#c41e1e] rounded-full mx-auto -mt-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]`.
- Stem: `w-1 h-6 bg-gradient-to-r from-[#a0a0a0] via-[#d0d0d0] to-[#a0a0a0] mx-auto`.
- Base: `w-6 h-2 bg-gradient-to-b from-[#c0c0c0] to-[#808080] rounded-full mx-auto shadow-[0_2px_4px_rgba(0,0,0,0.3)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Chrome Silver | `#c0c0c0` | Trim, counter edges, stool frames, panel borders |
| Chrome Light | `#e8e8e8` | Highlight reflections, button studs, chrome piping |
| Chrome Dark | `#9a9a9a` | Shadow gradients, spout shadows, stem sides |
| Diner Red | `#c41e1e` | Vinyl booths, stool cushions, neon OPEN sign, primary accents |
| Diner Red Light | `#e83838` | Vinyl highlights, neon glow base |
| Mint Green | `#a8d8be` | Pastel accent panels, Formica variant, fresh accents |
| Cream | `#faf5ea` | Table surfaces, backgrounds, text on dark, checkerboard light squares |
| Checkerboard Black | `#1a1a1a` | Floor dark squares, window frames, display backgrounds |
| Neon Blue | `#4da6ff` | CLOSED sign, secondary neon accents, cool glow |
| Neon Pink | `#ff6ba8` | Tertiary neon accent, decorative highlights |
| Diner Gold | `#d4a017` | Pie crust tones, trim accents, carousel frames |
| Deep Brown | `#4a3020` | Coffee accents, text on cream surfaces |

Rules: Chrome silver is the dominant trim material on EVERY panel edge. Diner red is the primary upholstery and accent color for booths, cushions, and the OPEN sign. Cream is the dominant background surface (tables, cards, walls). Mint green provides a refreshing secondary surface. The checkerboard of cream and black establishes the floor identity. Neon blue and pink are sparing accent glows for signage and decorative highlights. Gold is reserved for pie crust tones and carousel trim.

## Typography Recommendations

Diner typography mixes 1950s roadside signage with handwritten menu warmth:

- **Display headings:** Bungee, Faster One, or Bowlby One SC (bold chrome-letter signage).
- **Menu headings:** Pacifico or Lobster (handwritten chalkboard menu feel).
- **Price tags / labels:** `font-mono font-bold text-sm` (cash register / price tag style).
- **Body text:** Lora or Merriweather at `font-normal` (menu readability).
- **Specials board:** Permanent Marker or Caveat (chalkboard specials handwriting).
- **Neon signs:** Monoton or Audiowide (tube-letter neon glow).
- **Numbers (order/clock):** VT323 or DSEG7 Classic (digital clock display for the 24-hour feel).
- Text on neon elements should glow: `[text-shadow:0_0_4px_currentColor,0_0_8px_currentColor]`.
- Text on chrome surfaces should use dark text with a subtle metallic gradient where possible.

## Component Architecture Pattern

1. Checkerboard floor strip at the bottom or as a border element (establishes the diner identity immediately).
2. Chrome-trimmed curved panel as the primary structural container (gradient silver with chrome piping edges).
3. Red vinyl booth texture on seating areas or secondary panels (tufted pattern with chrome studs).
4. Neon OPEN/CLOSED sign as the status indicator (window-framed, flickering, top of layout).
5. Pie display case carousel for featured content rotation (glass-domed, gold-trimmed, cycling).
6. Formica table surface cards for content panels (cream or mint, chrome-edged).
7. Coffee pot silhouettes flanking content areas as decorative reinforcements.
8. Chrome stool elements as list markers or decorative seating indicators.
9. Menu board section with handwritten-style specials and monospace price tags.
10. Checkerboard footer with neon glow border closing the layout.

## Interaction Rules

- Default state: warm, open, inviting — neon sign gently flickering, coffee pot always present, pie case slowly rotating.
- Hover (buttons): chrome brightens, vinyl deepens in color.
  - `hover:shadow-[0_0_12px_rgba(196,30,30,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:border-[#e8e8e8] transition-all duration-200`.
- Active (buttons): depress like pressing into a vinyl cushion.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c41e1e] focus:ring-offset-2 focus:ring-offset-[#faf5ea]`.
- Pie case carousel: continuous slow rotation, pauses on hover to inspect items.
  - `hover:[animation-play-state:paused]`.
- Neon OPEN sign: continuous gentle flicker, brightens on hover to "fully on".
- Transitions: `transition-all duration-200` (snappy, physical — like touching chrome and vinyl).
- Continuous animations: neon flicker on the OPEN sign, pie case slowly rotating, coffee steam optionally rising.

Coffee steam keyframes:
```css
@keyframes steam-rise {
  0% { transform: translateY(0) scaleX(1); opacity: 0; }
  30% { opacity: 0.4; }
  100% { transform: translateY(-40px) scaleX(1.5); opacity: 0; }
}
```

## Reusable Tailwind Tokens

- Chrome panel: `bg-gradient-to-br from-[#e8e8e8] via-[#d0d0d0] to-[#b0b0b0] rounded-[1.5rem] border-2 border-[#c0c0c0] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6)]`
- Vinyl booth: `bg-[#c41e1e] rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]`
- Checkerboard floor: `bg-[repeating-conic-gradient(#faf5ea_0%_25%,#1a1a1a_0%_50%)] bg-[length:32px_32px]`
- Neon OPEN: `text-[#ff2d2d] font-bold tracking-wider [text-shadow:0_0_4px_#ff2d2d,0_0_8px_#ff2d2d,0_0_16px_rgba(255,45,45,0.6)]`
- Pie card: `bg-[#faf5ea] rounded-xl border-2 border-[#d4a017] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`
- Formica table: `bg-[#faf5ea] rounded-lg border-2 border-[#c0c0c0] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`
- Coffee pot: `bg-gradient-to-b from-[#e8e8e8] via-[#c0c0c0] to-[#9a9a9a] rounded-b-[2rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.3)]`
- Chrome stool: `bg-gradient-to-b from-[#e8e8e8] to-[#b0b0b0] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)]`
- Neon window frame: `bg-[#1a1a1a] rounded-lg border-4 border-[#c0c0c0] shadow-[0_4px_16px_rgba(0,0,0,0.4)]`

## Quality Checklist (must pass)

- At least one chrome-trimmed curved panel surface (gradient silver, chrome piping edges).
- Checkerboard floor pattern visible as a border, footer, or background section.
- Red vinyl booth texture present on at least one panel or seating area (tufted with chrome studs).
- Neon OPEN/CLOSED sign element present with glow and flicker animation.
- Pie display case carousel present with rotating cards and gold trim.
- Formica table surface cards used for primary content areas (cream or mint, chrome-edged).
- Coffee pot silhouette decoration present as a framing element.
- Chrome stool elements present as decorative markers or list bullets.
- Chrome trim appears on every panel edge — no untrimmed raw borders.
- Color palette is chrome silver + diner red + mint green + cream + black + neon blue/pink + gold.
- Typography mixes chrome signage display fonts with handwritten menu fonts and monospace labels.
- Neon glow effects use layered text-shadows for authentic tube-letter appearance.
- The aesthetic reads as classic American roadside diner — warm, nostalgic, 24-hour comfort.
- Everything feels welcoming — coffee is hot, pie is fresh, sign is OPEN.

## Anti-Patterns

- Sharp raw corners without chrome trim (diner surfaces are chrome-edged — every panel has a metal border).
- Missing the checkerboard floor (the checkerboard is the instant diner identity signal).
- Flat matte surfaces without chrome gradient (diner trim is reflective chrome piping).
- Missing the neon OPEN/CLOSED sign (the glowing sign is the diner's welcoming beacon).
- Missing the vinyl booth texture (red tufted vinyl is the signature upholstery identity).
- Modern minimal palettes (diner design is warm and multi-colored — chrome, red, mint, cream, neon).
- Thin borders (diner chrome trim is bold `border-2` or `border-4` metal piping).
- Static, lifeless signage (the OPEN sign flickers, the pie case rotates — the diner is alive).
- Flat button design (buttons should feel physical — chrome with depth, vinyl with depression).
- Dark-only or light-only palettes (diner balances cream surfaces with chrome trim and red vinyl).
- Missing gold accents on pie-related elements (gold crust tones are essential to the pie case).
- Sans-serif modern typography alone (needs chrome signage display + handwritten menu + monospace labels).
- No glow effects (neon signage must illuminate with layered text-shadows).
- Overuse of neon to the point of cyberpunk (diner neon is warm and sparing — signage and accents only).
- Sterile, corporate feel (the diner is warm, lived-in, and perpetually welcoming).

## Accessibility Considerations

- Neon-colored text on dark window backgrounds provides good contrast for OPEN/CLOSED signage.
- Chrome gradient backgrounds are decorative — place text content on solid cream or mint Formica surfaces.
- Checkerboard patterns are decorative — do not place body text directly on checkerboard surfaces.
- Neon flicker animation must respect `prefers-reduced-motion` (steady glow instead of flickering).
- Pie case carousel rotation must respect `prefers-reduced-motion` (static display instead of rotating).
- Neon glow shadows (`text-shadow`) must not reduce text legibility — verify text is readable with glow disabled.
- Vinyl booth tufting patterns are decorative — `aria-hidden="true"` on purely decorative texture overlays.
- Coffee pot, chrome stool, and checkerboard decorative elements must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#c41e1e]` (diner red ring visible against cream backgrounds).
- Touch targets minimum 44x44px on all interactive chrome buttons.
- Color should not be the sole indicator of OPEN/CLOSED status — include text labels and icons.
- Verify WCAG AA contrast for dark text (`#4a3020`) on cream (`#faf5ea`) surfaces.
- Verify WCAG AA contrast for cream text on diner red (`#c41e1e`) vinyl surfaces.
- Neon text glow must be tested with and without the glow to ensure readability in both states.
- Carousel content must be accessible via keyboard navigation, not just auto-rotation.
