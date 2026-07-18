---
name: maximalist-ui
description: Build maximalist UI components (bold patterns, clashing colors, dense layouts, layered textures, expressive typography) with high visual energy, mixed patterns, and intentional chaos. Trigger this skill when the user asks for maximalism, maximalist UI, bold expressive design, chaotic vibrant layouts, or "more is more" interfaces.
---

# Maximalist UI

Use this skill to design and implement high-energy, visually dense interfaces that embrace bold colors, layered patterns, expressive typography, and intentional chaos as a design philosophy.

## Non-Negotiable Foundations

- More is more. Maximalism rejects restraint. Every surface is an opportunity for visual expression.
- Layering is intentional. Chaos is curated, not accidental. Every element serves the composition even as it competes for attention.
- Color is bold, saturated, and unapologetic. Gradients, clashing hues, and unexpected pairings are encouraged.
- Typography is expressive: mixed fonts, extreme sizes, varied weights, and directional text are all valid.
- Empty space is not a goal but decorative space is: patterns, textures, and imagery fill negative space with purpose.
- Hierarchy is achieved through contrast and scale, not through restraint.

## Core Material Recipes

### 1) Bold Patterned Background

The foundation of a maximalist interface: a layered, visually rich background.

- Gradient mesh background: `bg-[radial-gradient(circle_at_20%_50%,#ff006e_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#8338ec_0%,transparent_50%),radial-gradient(circle_at_50%_80%,#3a86ff_0%,transparent_50%)] bg-[#13132b]`
- Pattern overlay: add a noise texture or repeating geometric pattern via CSS.
- Animated gradient: `bg-[length:400%_400%] animate-[gradient_8s_ease_infinite] bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#3a86ff]`

### 2) Layered Content Card

Maximalist cards stack multiple visual layers: pattern background, bold border, shadow, and content.

- Background: `bg-[#ffbe0b]` (solid bold color) or gradient.
- Border: `border-4 border-black` (thick, high-contrast).
- Shadow: `shadow-[8px_8px_0px_0px_#000000]` (hard offset shadow, no blur — the neobrutalist hard shadow is a maximalist staple).
- Content layer: bold typography, mixed colors, and decorative elements inside.
- Full one-liner:
  - `bg-[#ffbe0b] border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_#000000] p-6`

### 3) Expressive Typography

Typography in maximalism is a visual element, not just text.

- Display heading: `text-7xl font-black uppercase tracking-tighter text-[#ff006e] [-webkit-text-stroke:2px_black]`
- Mixed-font pairing: combine a serif display font with a sans-serif body, or a mono label with a script accent.
- Text with effects: `text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#ffbe0b]`
- Rotated text: `rotate-[-2deg] text-4xl font-black bg-[#3a86ff] text-white px-2`
- Overlapping text: use absolute positioning to layer text elements at different z-indexes.

### 4) Bold Button

- Primary: `bg-[#ff006e] text-white font-black text-lg uppercase tracking-wide px-8 py-4 border-4 border-black rounded-none shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all`
- Secondary: `bg-[#ffbe0b] text-black font-black text-lg uppercase px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`
- Ghost: `bg-transparent text-[#ff006e] font-black text-lg uppercase border-4 border-[#ff006e] hover:bg-[#ff006e] hover:text-white transition-all`

## Color Palette System

Maximalism uses clashing, saturated colors. These palettes are validated combinations:

### Memphis Palette (80s Postmodern)

- `#ff006e` (hot pink), `#8338ec` (electric purple), `#3a86ff` (azure blue), `#ffbe0b` (vivid yellow), `#06d6a0` (spring green), `#13132b` (deep navy), `#000000` (pure black)

### Vaporwave Palette

- `#ff71ce` (neon pink), `#01cdfe` (cyan), `#05ffa1` (mint green), `#b967ff` (purple), `#fffb96` (acid yellow)

### CMYK Pop Palette

- `#00e5ff` (cyan), `#ff00d4` (magenta), `#ffe600` (yellow), `#000000` (black), `#ffffff` (white)

### Tropical Maximalist

- `#ff4365` (coral), `#00d9ff` (electric blue), `#ffdc5e` (golden yellow), `#00a878` (emerald), `#7209b7` (purple), `#0a0a0a` (black)

## Pattern and Texture Recipes

Patterns fill space and add energy. Apply via CSS backgrounds:

- Grid pattern: `bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:20px_20px]`
- Dot pattern: `bg-[radial-gradient(#00000020_1px,transparent_1px)] bg-[size:16px_16px]`
- Stripes: `bg-[repeating-linear-gradient(45deg,#ff006e,#ff006e_10px,#8338ec_10px,#8338ec_20px)]`
- Confetti/dots (Memphis style): scattered SVG shapes, triangles, zigzags, squiggles positioned absolutely.
- Noise texture: add an SVG noise filter overlay at low opacity (`opacity-10`).

## Component Architecture Pattern

1. Bold patterned or gradient background (the stage).
2. Decorative shapes and patterns (scattered, absolute-positioned elements).
3. Layered content cards (bold borders, hard shadows).
4. Expressive typography (mixed sizes, colors, rotations).
5. Interactive elements (buttons with hard shadows and translate interactions).
6. Optional decorative imagery (collage-style overlapping images).

Every layer competes for attention, but the composition holds through scale and color hierarchy.

## Interaction Rules

- Default state: bold and fully decorated.
- Hover state: amplify the energy — translate shadows, rotate slightly, scale up.
  - Hard shadow buttons: `hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000]`
  - Cards: `hover:scale-105 hover:rotate-1`
- Active state: fully press the shadow (`active:shadow-none active:translate-x-2 active:translate-y-2`).
- Focus state: `focus:ring-4 focus:ring-[#ff006e]` (thick, bold focus ring).
- Transitions: `transition-all duration-150` (snappy, not smooth — maximalism is energetic).
- Animations: bouncy and expressive are welcome (`ease-out`, spring-like).

## Reusable Tailwind Tokens

- Card: `bg-[#ffbe0b] border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_#000000] p-6`
- Primary button: `bg-[#ff006e] text-white font-black text-lg uppercase tracking-wide px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_#000000] transition-all`
- Heading: `text-7xl font-black uppercase tracking-tighter`
- Accent text: `text-[#ff006e] font-black`
- Gradient text: `text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#ffbe0b]`
- Pattern background: `bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:20px_20px]`

## Quality Checklist (must pass)

- Colors are saturated and bold, never muted or pastel (that is a different style).
- Layout is dense but intentional — every element has a purpose within the composition.
- Typography mixes sizes, weights, and optionally fonts for expressive hierarchy.
- Borders are thick (`border-2` to `border-4`) and high-contrast.
- Shadows are hard and offset (no blur), creating a stamped/collage look.
- Patterns and textures fill negative space with energy.
- Hierarchy is achieved through contrast (color, scale, position), not through restraint.
- Interactive elements have bold hover/active states (translate, scale, rotate).
- The composition feels energetic and intentional, not random or cluttered.

## Anti-Patterns

- Muted or pastel colors (that is minimalism or neumorphism, not maximalism).
- Soft shadows with blur (`shadow-lg` with blur looks wrong in maximalism).
- Too much empty whitespace without purpose (maximalism fills space).
- Single font family with no weight variation (typographic monotony).
- Thin borders (`border` with no width modifier is too subtle).
- Consistent alignment everywhere (some asymmetry and rotation adds energy).
- Random chaos without underlying hierarchy (maximalism is curated, not accidental).
- Monochrome palettes (color clash is the point).
- Rounded corners everywhere (`rounded-none` or `rounded-xl` — commit to a bold shape).

## Typography Recommendations

- Display heading: Space Grotesk, Archivo Black, Anton, Bebas Neue, or any font with `font-black` weight.
- Body: Inter, Space Grotesk, DM Sans (bold weights, `font-bold` minimum).
- Accent/script: Clash Display, focal individual decorative fonts for accent words.
- Mono: Space Mono, JetBrains Mono for labels and metadata.
- Rule: mix at least two contrasting font families for maximum expression.

## Accessibility Considerations

- Maximalism can overwhelm. Ensure the primary action path is clear despite visual noise.
- Animated backgrounds must respect `prefers-reduced-motion` (disable gradient animation).
- Text on patterned backgrounds must maintain WCAG AA contrast — use solid background chips behind text if needed.
- Focus states must be bold and visible (`ring-4` with a bright color).
- Do not use color clash in ways that create accessibility barriers for colorblind users (ensure information is conveyed through more than color alone).
- Provide structure through landmarks and headings despite the dense visual layout.
