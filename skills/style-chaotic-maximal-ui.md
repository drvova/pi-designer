---
name: chaotic-maximal-ui
description: Build chaotic maximal UI components (clashing patterns, overloaded surfaces, mixed fonts, neon on dark, sticker bomb, collage chaos, anti-grid) with intentional visual overload, clashing aesthetics, and the maximalist energy of controlled chaos. Trigger this skill when the user asks for chaotic maximalism, sticker bomb UI, collage chaos, anti-grid layouts, neon-on-dark overload, clashing patterns, visual overload interfaces, chaotic energy, or punk-inspired chaotic design.
---

# Chaotic Maximal UI

Use this skill to design and implement visually overloaded, clashing interfaces that embrace sticker-bomb scattering, collage fragmentation, anti-grid layouts, neon-on-dark accents, mixed typography clashes, and the raw energy of controlled chaos as a design philosophy. This is maximalism pushed past its tipping point: surfaces that feel like they were attacked by a thousand stickers, fonts that argue with each other, and colors that refuse to coexist peacefully.

## Non-Negotiable Foundations

- Controlled chaos is the law. Every element looks accidental but is placed with surgical precision. The surface must feel like it could collapse, yet it never does.
- Clashing is the primary aesthetic engine. Patterns overlap patterns. Fonts fight fonts. Colors scream at colors. The tension IS the design.
- Dark base is mandatory. Chaotic maximal operates on a near-black canvas (`#0a0a0a`) so neon accents achieve maximum contrast and every overlay reads as an intrusion.
- Typography is combative: mix serif, sans-serif, display, script, and mono in the same viewport. Different sizes, different rotations, different colors — the clash is intentional.
- Sticker-bomb scatter is a core pattern. Overlapping, rotated, irregular shapes that feel torn from different sources and slapped onto the surface.
- Anti-grid layout breaks conventional alignment. Elements overlap, bleed past boundaries, and occupy space at odd angles. The grid is a suggestion, not a rule.
- Neon accents cut through the dark base. `#ff40c0`, `#40ff40`, `#ffe040`, `#4080ff` — saturated, glowing, unapologetic.
- Texture is not optional. Surfaces carry noise, grain, diagonal stripes, and collage fragments. Flat empty space is a failure state.

## Core Material Recipes

### 1) Clashing Pattern Layer

The foundation of chaotic maximal: multiple overlapping patterns on a single surface, creating visual density that borders on overload.

- Dark base: `bg-[#0a0a0a]`
- Diagonal stripe overlay: `bg-[repeating-linear-gradient(45deg,#ff40c010,#ff40c010_2px,transparent_2px,transparent_8px)]`
- Dot grid overlay: `bg-[radial-gradient(#40ff4020_1px,transparent_1px)] bg-[size:12px_12px]`
- Crosshatch overlay: `bg-[repeating-linear-gradient(45deg,#ffe04008,#ffe04008_1px,transparent_1px,transparent_4px),repeating-linear-gradient(-45deg,#4080ff08,#4080ff08_1px,transparent_1px,transparent_4px)]`
- Combined pattern layer (apply via pseudo-element or stacked backgrounds):
  `bg-[#0a0a0a] bg-[repeating-linear-gradient(45deg,#ff40c010_0px_2px,transparent_2px_8px),radial-gradient(#40ff4020_1px,transparent_1px)] bg-[size:8px_8px,12px_12px]`
- Animated scanline (optional energy): `bg-[repeating-linear-gradient(0deg,transparent_0px,#ffffff03_1px,transparent_2px)]`

### 2) Sticker Bomb Scatter

Overlapping sticker-like shapes scattered across a surface. Each sticker has a distinct color, slight rotation, and overlapping z-index.

- Sticker base: `bg-[#ff40c0] rounded-lg px-4 py-2 rotate-[-3deg] border-2 border-white shadow-md`
- Sticker variant green: `bg-[#40ff40] text-black rounded-full px-3 py-1 rotate-[5deg] border-2 border-black`
- Sticker variant yellow: `bg-[#ffe040] text-black rounded-sm px-4 py-1 rotate-[-7deg] border-2 border-black`
- Sticker variant blue: `bg-[#4080ff] text-white rounded-full px-3 py-2 rotate-[2deg] border-2 border-white`
- Sticker variant red: `bg-[#ff2020] text-white rounded-lg px-5 py-2 rotate-[-1deg] border-2 border-black`
- Sticker variant orange: `bg-[#ff6020] text-black rounded-full px-3 py-1 rotate-[8deg] border-2 border-white`
- Container for scatter: `relative overflow-hidden` with stickers absolutely positioned at varied `top/left/rotate` values.
- Scatter density: minimum 3 overlapping stickers per visible region, no two at the same rotation.

### 3) Mixed Typography Clash

Typography that fights itself. Multiple font families, sizes, weights, and orientations in close proximity.

- Primary clash heading: `text-8xl font-black uppercase tracking-tighter text-[#ff40c0] [text-shadow:3px_3px_0px_#40ff40] font-['Anton',sans-serif]`
- Secondary counter-heading: `text-4xl font-light italic text-[#ffe040] font-['Playfair_Display',serif] rotate-[-2deg]`
- Tertiary noise label: `text-sm font-mono font-bold uppercase text-[#40ff40] tracking-widest bg-[#ff2020] px-2 py-0.5`
- Overlapping text block: position text at different z-indexes with `mix-blend-difference` or `mix-blend-overlay` for color interference.
- Text on sticker: `text-base font-black text-black font-['Impact',sans-serif] uppercase`
- Full mixed block:
  ```
  <span class="text-8xl font-black text-[#ff40c0] font-['Anton']">CHAOS</span>
  <span class="text-3xl font-light italic text-[#ffe040] font-['Playfair_Display'] rotate-[-3deg]">is the</span>
  <span class="text-6xl font-black text-[#40ff40] font-['Space_Mono'] uppercase">point</span>
  ```

### 4) Neon-on-Dark Accent Card

Dark surface with neon accents that glow and cut through the darkness.

- Card surface: `bg-[#0a0a0a] border border-[#ff40c040] rounded-xl p-6 relative overflow-hidden`
- Neon border glow: `shadow-[0_0_15px_#ff40c040,0_0_30px_#ff40c020]`
- Inner glow element: `bg-[#ff40c0] opacity-5 blur-3xl absolute -top-10 -right-10 w-40 h-40 rounded-full`
- Content: `text-white font-mono text-sm` on dark surface.
- Alternate glow colors: `shadow-[0_0_15px_#40ff4040]` (green), `shadow-[0_0_15px_#ffe04040]` (yellow), `shadow-[0_0_15px_#4080ff40]` (blue).
- Full one-liner:
  `bg-[#0a0a0a] border border-[#ff40c040] rounded-xl p-6 shadow-[0_0_15px_#ff40c040,0_0_30px_#ff40c020] relative overflow-hidden`

### 5) Collage Fragment Element

Torn-edge, rotated fragments that feel ripped from other sources and slapped onto the surface.

- Fragment card: `bg-[#ffe040] text-black p-4 rotate-[3deg] border-4 border-black shadow-[4px_4px_0px_0px_#ff40c0] -skew-x-2`
- Photo fragment: `bg-[#1a1a1a] border-4 border-[#40ff40] p-2 rotate-[-4deg] shadow-[6px_6px_0px_0px_#ff2020]`
- Text fragment: `bg-[#ff40c0] text-white px-6 py-2 font-black text-xl uppercase rotate-[1deg] skew-y-1`
- Clip path for torn edge: `clip-path:polygon(0_0,95%_3%,100%_0,98%_95%,100%_100%,3%_97%,0_100%,2%_5%)`
- Stacking fragments: position fragments at `z-10`, `z-20`, `z-30` with overlapping `top/left` offsets.

### 6) Anti-Grid Layout

Breaking the grid. Elements positioned asymmetrically, overlapping each other, ignoring conventional alignment.

- Overlapping grid: use CSS Grid with `grid-template-columns:repeat(3,1fr)` and position items to span, overlap, and bleed.
- Offset container: `relative` parent with children at `absolute top-[10%] left-[5%]`, `top-[30%] left-[40%]`, `top-[15%] right-[10%]`.
- Tilted row: `flex gap-4 rotate-[1deg]` with children at varied sizes.
- Bleeding element: `-ml-8 -mr-8 px-8` to break out of parent bounds.
- Stacked overlapping cards: three cards in `relative` container, each offset by `translate-x-[20px] translate-y-[15px]` progressively.

### 7) Overload Texture Background

Full-viewport background that feels dense, noisy, and alive.

- Base dark: `bg-[#0a0a0a]`
- Noise texture: overlay SVG `<filter>` at `opacity-[0.03]` or CSS `bg-[url('data:image/svg+xml,...')]` repeating noise.
- Animated grain: CSS animation that shifts noise position every 0.5s.
- Diagonal neon stripes: `bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_4px,#ff40c008_4px,#ff40c008_5px)]`
- Dot matrix: `bg-[radial-gradient(#40ff4015_1px,transparent_1px)] bg-[size:8px_8px]`
- Combined overload: stack stripe, dot, and crosshatch patterns with different colors and sizes for maximum density.

## Color Palette System

Chaotic maximal operates on a dark base with neon accents. Every color is chosen for maximum clash.

### Primary Neon Palette

| Name | Hex | Usage |
|------|-----|-------|
| chaos neon | `#ff40c0` | Primary accent, borders, headings, glow |
| chaos green | `#40ff40` | Secondary accent, scanlines, dot grids |
| chaos yellow | `#ffe040` | Tertiary accent, highlights, sticker fills |
| chaos blue | `#4080ff` | Cool accent, card glows, mono labels |

### Clash Accent Palette

| Name | Hex | Usage |
|------|-----|-------|
| clash red | `#ff2020` | Aggressive accent, urgent callouts, sticker fills |
| chaos orange | `#ff6020` | Warm accent, scattered stickers, fragment fills |
| sticker white | `#ffffff` | Sticker borders, text on dark, highlight pops |

### Base Palette

| Name | Hex | Usage |
|------|-----|-------|
| dark base | `#0a0a0a` | Primary background, card surfaces |
| dark surface | `#141414` | Elevated surfaces, secondary cards |
| dark muted | `#1a1a1a` | Subtle differentiation, inactive states |

### Neon-on-Dark Validation Rules

- Neon text on dark base must pass WCAG AA for normal text (4.5:1 minimum).
- `#ff40c0` on `#0a0a0a` = contrast ratio ~8.2:1 (passes).
- `#40ff40` on `#0a0a0a` = contrast ratio ~10.5:1 (passes).
- `#ffe040` on `#0a0a0a` = contrast ratio ~13.1:1 (passes).
- `#4080ff` on `#0a0a0a` = contrast ratio ~5.8:1 (passes).
- White on dark base = contrast ratio ~18.4:1 (passes).
- Never place neon text on neon backgrounds. Dark-on-neon for reversed contexts only.

### Clash Combination Matrix

These are validated clashing pairings that create intentional visual tension:

- `#ff40c0` + `#40ff40` = high-energy pink/green clash.
- `#ffe040` + `#4080ff` = warm/cool tension.
- `#ff2020` + `#40ff40` = aggressive red/green (use sparingly, near borders only).
- `#ff6020` + `#4080ff` = fire/ice contrast.
- `#ff40c0` + `#ffe040` = hot pink/yellow pop-art clash.
- `#ffffff` text on any neon = safe high-contrast readable pairing.
- Never pair `#ff40c0` with `#ff2020` (too similar, reads as muddy, not clashing).

## Typography Recommendations

Chaotic maximal demands combative typography. Fonts fight for attention.

### Display Heading (primary weapon)

- **Anton** or **Bebas Neue**: condensed, heavy, high-impact. `font-black uppercase tracking-tighter`.
- **Archivo Black**: wide, aggressive, fills horizontal space.
- Use at `text-7xl` to `text-9xl` for maximum dominance.

### Counter Heading (the antagonist)

- **Playfair Display**: serif elegance that clashes violently against bold sans-serif.
- **Abril Fatface**: high-contrast serif that reads as refined disruption.
- Set in `italic` or `font-light` to maximize the weight contrast against display fonts.

### Body Text (the survivor)

- **Space Grotesk**: geometric sans that holds readability amidst chaos. `font-medium` minimum.
- **DM Sans**: clean counterpoint that still carries weight at `font-bold`.
- Use `text-sm` to `text-base` — body text should not compete with display headings.

### Mono / Label (the annotator)

- **Space Mono** or **JetBrains Mono**: `font-mono text-xs uppercase tracking-widest`.
- Use for labels, tags, stickers, and metadata. Apply neon background colors for emphasis.
- Mono text on sticker shapes: `font-mono text-xs uppercase tracking-widest bg-[#ff40c0] text-white px-2 py-0.5 rotate-[-1deg]`

### Clash Rules

- Minimum two contrasting font families per viewport. Three is ideal.
- Never use a single font family at a single weight. That is minimalism, not chaos.
- Rotate text at least once per composition: `rotate-[-2deg]`, `rotate-[3deg]`, `rotate-[-7deg]`.
- Mix uppercase and lowercase freely. The inconsistency is intentional.
- Mix colors across font families: the heading is pink, the counter is yellow, the label is green.

## Component Architecture Pattern

Chaotic maximal components follow a specific layering order:

1. **Dark base surface** (`#0a0a0a`) — the canvas.
2. **Pattern layer** — overlapping diagonal stripes, dot grids, crosshatches in neon colors at low opacity.
3. **Scattered stickers** — absolutely positioned, rotated, overlapping sticker shapes with varied neon colors.
4. **Collage fragments** — torn-edge, skewed, rotated card fragments at different z-indexes.
5. **Content layer** — mixed typography with competing fonts, sizes, and colors.
6. **Interactive elements** — neon-glow buttons and links.
7. **Neon accents** — glow effects, blurred circles, scanlines at the edges.
8. **Noise/grain overlay** — subtle texture that unifies the chaos.

Every layer competes for attention. The composition holds through color hierarchy (neon brights over dark base) and scale hierarchy (large display text anchors the eye).

### Composition Rules

- No two stickers at the same rotation angle.
- Minimum three overlapping elements in any visible quadrant.
- At least one text element rotated or skewed per card.
- Pattern opacity must stay below `0.15` so content remains readable.
- Neon glow shadows must use the same hue as the nearest accent element.

## Interaction Rules

- Default state: fully decorated, chaotic, neon-accented on dark.
- Hover state: amplify the chaos — brighten neon glow, increase rotation, shift stickers.
  - Neon border card: `hover:shadow-[0_0_25px_#ff40c060,0_0_50px_#ff40c030] hover:border-[#ff40c0]`
  - Sticker: `hover:rotate-0 hover:scale-110 hover:z-50` (snap to attention on hover).
  - Fragment: `hover:rotate-[8deg] hover:scale-105`
  - Display text: `hover:text-[#40ff40] hover:[text-shadow:4px_4px_0px_#ff40c0]`
- Active state: compress shadow, shift position.
  - Button: `active:shadow-[0_0_5px_#ff40c040] active:translate-x-1 active:translate-y-1`
  - Card: `active:scale-95 active:rotate-0`
- Focus state: `focus:ring-4 focus:ring-[#40ff40] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (neon green on dark for high visibility).
- Transitions: `transition-all duration-100` (fast, snappy — chaos moves quickly).
- Animations: flickering neon (`animate-[flicker_3s_ease-in-out_infinite]`), floating stickers (`animate-[float_6s_ease-in-out_infinite]`), rotating fragments (`animate-[spin_20s_linear_infinite]`).
- Respect `prefers-reduced-motion`: disable all animation, keep static chaos.

## Reusable Tailwind Tokens

- **Sticker (pink):** `bg-[#ff40c0] text-white rounded-lg px-4 py-2 rotate-[-3deg] border-2 border-white shadow-md font-bold text-sm uppercase`
- **Sticker (green):** `bg-[#40ff40] text-black rounded-full px-3 py-1 rotate-[5deg] border-2 border-black font-mono text-xs`
- **Sticker (yellow):** `bg-[#ffe040] text-black rounded-sm px-4 py-1 rotate-[-7deg] border-2 border-black font-black text-sm uppercase`
- **Sticker (blue):** `bg-[#4080ff] text-white rounded-full px-3 py-2 rotate-[2deg] border-2 border-white font-bold text-xs`
- **Neon card:** `bg-[#0a0a0a] border border-[#ff40c040] rounded-xl p-6 shadow-[0_0_15px_#ff40c040,0_0_30px_#ff40c020] relative overflow-hidden`
- **Neon button:** `bg-transparent border-2 border-[#ff40c0] text-[#ff40c0] font-mono text-sm uppercase tracking-widest px-6 py-3 rounded-lg shadow-[0_0_10px_#ff40c040] hover:bg-[#ff40c0] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_#ff40c060] transition-all duration-100`
- **Collage fragment:** `bg-[#ffe040] text-black p-4 rotate-[3deg] border-4 border-black shadow-[4px_4px_0px_0px_#ff40c0] -skew-x-2 font-black text-lg uppercase`
- **Clash heading:** `text-8xl font-black uppercase tracking-tighter text-[#ff40c0] [text-shadow:3px_3px_0px_#40ff40]`
- **Noise label:** `font-mono text-xs uppercase tracking-widest bg-[#ff2020] text-white px-2 py-0.5 rotate-[-1deg]`
- **Pattern background:** `bg-[#0a0a0a] bg-[repeating-linear-gradient(45deg,#ff40c010_0px_2px,transparent_2px_8px),radial-gradient(#40ff4020_1px,transparent_1px)] bg-[size:8px_8px,12px_12px]`
- **Overload surface:** `bg-[#0a0a0a] relative overflow-hidden` with pattern, sticker, and fragment children.

## Quality Checklist (must pass)

- Dark base (`#0a0a0a`) is the canvas for every composition.
- At least two neon accent colors are present per visible area.
- Stickers overlap each other (no isolated stickers floating alone).
- Minimum two font families are mixed in every typography block.
- At least one text element is rotated or skewed per card/section.
- Pattern layers are visible but stay below `opacity-0.15` so content remains readable.
- Neon glow shadows use consistent hue matching the nearest accent element.
- Anti-grid layout is present: elements overlap, bleed, or ignore conventional alignment.
- Collage fragments have torn-edge or skewed treatments, not clean rectangles.
- No flat, untextured surfaces exist. Every surface has noise, grain, stripe, or dot overlay.
- Interactive elements have fast, snappy transitions (`duration-100` to `duration-150`).
- Stickers use varied rotation angles (no two stickers at the same angle).
- The composition feels intentional despite looking chaotic.

## Anti-Patterns

- Clean, flat, untextured surfaces (that is minimalism, not chaos).
- Soft pastel or muted neon colors (neon must be saturated and bright on dark).
- Single font family throughout (typographic monotony kills the clash).
- Perfectly aligned grid with no overlap or asymmetry (the grid is a suggestion).
- Large empty whitespace without pattern or texture filling it.
- Consistent border-radius on all elements (mix `rounded-none`, `rounded-lg`, `rounded-full`, `rounded-sm`).
- Shadows with heavy blur and no color (`shadow-xl` is too soft — use neon-colored glow shadows).
- Text-on-text without rotation or skew (that is just bad typography, not intentional clash).
- Same neon color repeated without a clashing counter-accent.
- Stickers placed in a grid pattern (stickers scatter, they do not align).
- Static, lifeless compositions without any animation or glow effects.
- Clean serif-only or sans-only typography blocks (you need the fight between them).
- Dark-on-dark without any neon accent breaking through (the dark must be pierced).
- Rounded everything or sharp everything — chaotic maximal mixes both.

## Accessibility Considerations

- Chaotic maximal can overwhelm. Ensure the primary call-to-action is visually distinct despite chaos — use the brightest neon (`#40ff40` or `#ffe040`) against the dark base for highest contrast.
- Text on patterned backgrounds must maintain WCAG AA contrast (4.5:1 minimum). Add a semi-transparent dark backdrop (`bg-[#0a0a0a]/80`) behind text blocks if pattern interference reduces legibility.
- Animated elements must respect `prefers-reduced-motion: reduce` — disable flickering neon, floating stickers, and rotating fragments. Keep static neon glow and color contrast.
- Focus states must be highly visible: `ring-4` with a bright neon color against the dark base. Avoid focus rings that blend with the neon color palette.
- Color clash must not convey meaning alone. Pair color differences with text labels, icons, or shape changes so colorblind users can distinguish elements.
- Sticker and collage elements must have sufficient text contrast. White text on `#ff40c0` = 5.2:1 (passes). Black text on `#40ff40` = 11.2:1 (passes). Black text on `#ffe040` = 14.8:1 (passes).
- Provide semantic HTML landmarks (`<nav>`, `<main>`, `<header>`, `<article>`) so screen readers can navigate the chaos structurally.
- Use `aria-label` on interactive elements where visual labels are obscured by overlapping stickers or fragments.
- Test with `prefers-color-scheme: dark` forced off — the interface should still have sufficient contrast ratios if somehow rendered on a light background.
