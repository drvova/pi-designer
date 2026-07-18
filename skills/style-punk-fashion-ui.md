---
name: punk-fashion-ui
description: Build punk fashion UI components (safety pin accent, torn fabric edge, leather jacket texture, band patch, studs and spikes, safety pin clasp, ripped denim) with raw DIY aesthetics, torn edges, and the rebellious energy of punk fashion. Trigger this skill when the user asks for punk fashion, safety pin UI, torn fabric, leather jacket texture, band patch, studs and spikes, ripped denim, punk aesthetic, punk style, or rebellious fashion interfaces.
---

# Punk Fashion UI

Use this skill to design and implement raw, rebellious interfaces inspired by punk fashion culture: leather jacket textures, safety pin accents, torn fabric edges, band patches, studs and spikes, ripped denim, and the aggressive DIY energy of punk subculture.

## Non-Negotiable Foundations

- Every punk fashion interface must feel like it was assembled from salvaged materials. No clean corporate polish, no smooth gradients, no symmetrical perfection.
- Safety pins are the signature accent. They appear as decorative clasps, dividers, and accent elements throughout every layout.
- Torn and jagged edges are mandatory. Straight lines are the enemy of punk. Use irregular clip-paths, jagged borders, and rough-cut shapes.
- Leather texture grounds the palette. At least one major surface must carry a pebbled or grained dark leather feel.
- Band patches act as badges, labels, and focal points. They are circular, embroidered-feel elements that break up compositions.
- Typography must be aggressive, distressed, or stencil-like. No elegant serifs, no friendly rounded sans-serif.
- The color palette is dark and metallic with raw accents. Think black leather, silver hardware, denim blue, and occasional orange highlights.
- Punk is anti-establishment. The interface should feel like it fights against clean design conventions on purpose.

## Core Material Recipes

### 1) Leather Jacket Background

Pebbled dark leather surface with grain texture.

- Base: `bg-[#1a1a1a]` (leather black).
- Pebble texture: SVG `feTurbulence` at `baseFrequency="0.65"` with `type="fractalNoise"`, `opacity-[0.12]` and `mix-blend-multiply` for visible grain.
- Sheen highlight: `bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_50%,rgba(255,255,255,0.01)_100%)]` for subtle leather light catch.
- Stitch line: `border-b border-dashed border-[#3a3a3a]` (visible leather stitching).

### 2) Safety Pin SVG Accent

Opened safety pin used as divider, clasp, or decorative accent.

- Inline SVG: two parallel lines (pin body) with a circle at one end (clasp head) and a pointed tip at the other, drawn slightly open.
- Pin body stroke: `stroke-[#c0c0c0] stroke-2 fill-none` (silver) or `stroke-[#c4a043]` (gold).
- Size: `w-12 h-4` for dividers, `w-6 h-3` for inline clasps, `w-16 h-6` for hero accents.
- Pin clasp: small circle `r="2"` at the head end, filled `fill-[#c0c0c0]`.
- Rotation: `rotate-[-8deg]` to `rotate-[12deg]` for organic placement.
- Shadow: `drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]` for metallic depth.

### 3) Torn Fabric Edge

Jagged, irregular edge separating sections or framing cards.

- Clip-path polygon with randomized points: `[clip-path:polygon(0_0,5%_2%,12%_0%,18%_3%,25%_1%,32%_4%,40%_0%,48%_2%,55%_0%,62%_3%,70%_1%,78%_4%,85%_0%,92%_2%,100%_0%,100%_100%,0_100%)]` (top tear).
- Alternative bottom tear: mirror the irregular pattern along the bottom edge.
- Color accent along tear: `border-t-2 border-[#4a6a8a]` with jagged clip-path for denim-fray feel.
- Fray threads: small `::before` pseudo-element with `w-full h-1 bg-[linear-gradient(90deg,#4a6a8a_0%,transparent_10%,#4a6a8a_15%,transparent_25%)]` for loose thread effect.

### 4) Band Patch Badge

Circular embroidered patch element.

- Container: `w-20 h-20 rounded-full bg-[#2a2a2a] border-2 border-[#3a3a3a]` (patch backing).
- Inner ring: `w-16 h-16 rounded-full border border-dashed border-[#c0c0c0]` (stitching around patch).
- Text: `font-[Impact] text-xs text-center text-[#e06020] uppercase` (patch text).
- Outer ring: `w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-full border border-[#4a4a4a]` (patch border).
- Mounting: `absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#c0c0c0]` (pin holes in patch corner).
- Background texture: slight `noise` filter at `opacity-[0.05]` for embroidered fabric feel.

### 5) Studs and Spikes Pattern

Metallic pyramid studs in a row or grid.

- Single stud: `w-3 h-3 bg-[linear-gradient(135deg,#e0e0e0_0%,#a0a0a0_40%,#707070_100%)]` with `clip-path:polygon(50%_0,100%_100%,0_100%)` (triangle pyramid from front).
- Alternative flat stud: `w-2 h-2 bg-[#a0a0a0] rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.3)]` (round rivet).
- Stud row: `flex gap-3 py-2` containing 5-8 stud elements for a strip accent.
- Stud grid: `grid grid-cols-6 gap-2` for jacket-panel stud field.
- Spike variant: `w-2 h-4 bg-[linear-gradient(180deg,#e0e0e0,#808080)] clip-path:polygon(50%_0,80%_100%,20%_100%)` (elongated pyramid).
- Metallic sheen: each stud gets `shadow-[1px_1px_3px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]`.

### 6) Ripped Denim Surface

Blue denim with frayed holes and distressed wear.

- Base denim: `bg-[#4a6a8a]` with woven texture via SVG `feTurbulence` at `baseFrequency="1.2 0.8"` (warp and weft threads), `opacity-[0.15]` and `mix-blend-multiply`.
- Worn areas: `bg-[linear-gradient(180deg,rgba(74,106,138,1) 0%,rgba(90,120,150,1) 50%,rgba(74,106,138,1) 100%)]` (fade pattern).
- Rip holes: `w-8 h-5 bg-[#f5f0e8] rounded-[40%_60%_50%_50%]` with `shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]` (showing skin or lining underneath).
- Frayed edges around rip: tiny `bg-[#6a8aaa]` threads via `::after` pseudo-element with `w-full h-0.5` repeated at irregular intervals.
- Thread pulls: `w-0.5 h-4 bg-[#8aaacc] rotate-[15deg]` hanging from rip edges.

### 7) Safety Pin Clasp Button

Button styled as a functional safety pin clasp.

- Pin outline: SVG border forming the pin shape (loop head, straight shaft, open catch).
- Button area: `bg-transparent border-2 border-[#c0c0c0] rounded-none px-8 py-2` with SVG pin overlay.
- Hover: pin closes visually via SVG animation or `transform rotate-[5deg]` to simulate clasp engagement.
- Active state: `translate-y-[1px]` with `shadow-none` (pin pressed down).
- Text: `font-[Oswald] font-bold uppercase text-sm text-[#c0c0c0]` inside the pin frame.
- Gold variant: `border-[#c4a043] text-[#c4a043]` for premium punk accent.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Leather Black | `#1a1a1a` | Primary background, leather surfaces |
| Denim Blue | `#4a6a8a` | Secondary surface, denim textures |
| Safety Pin Silver | `#c0c0c0` | Metallic accents, pin hardware |
| Safety Pin Gold | `#c4a043` | Premium accent, gilded hardware |
| Stud Silver | `#a0a0a0` | Studs, rivets, metallic details |
| Band Patch Orange | `#e06020` | Patch text, warning accents |
| Band Patch Red | `#cc2222` | Patch accents, danger signals |
| Band Patch Yellow | `#d4a017` | Patch detail, aged gold |
| Rip Skin | `#f5f0e8` | Rip hole fill, exposed lining |
| Torn Edge | `#3a3a3a` | Tear borders, rough edges |
| Stitch Gray | `#5a5a5a` | Thread lines, seam details |
| Safety Orange | `#e06020` | Primary accent, punk highlight |

Rules: Dominated by dark leather black with metallic silver and gold hardware. Denim blue provides the secondary surface. Orange is the signature punk accent. Never use pastels, never use gradients that feel smooth, never use white as a primary background.

## Typography Recommendations

- **Headings:** Impact, Oswald, or Anton (bold, condensed, aggressive).
- **Body text:** Barlow Condensed, Share Tech (industrial, tight).
- **Patch labels:** Anton uppercase with `tracking-wider` (patch stamp feel).
- **Stencil text:** Stencil font or `font-mono font-bold uppercase` for military-surplus punk.
- **Distressed accent:** `font-[Permanent_Marker]` for handwritten punk slogans.
- All text should feel bold, compressed, or distressed. No light weights, no elegant scripts, no friendly rounded fonts.

## Component Architecture Pattern

- **Safety Pin Clasp Button:** SVG pin frame wrapping text content. Pin serves as both border and accent. Hover state animates the pin toward closed position.
- **Torn Section Divider:** Full-width element with jagged clip-path top and bottom. Filled with leather texture or denim. Safety pin SVG placed at the torn edge intersection.
- **Band Patch Card:** Circular patch element centered in a rectangular card. Card has torn fabric edges. Patch contains icon or text with embroidered-stitch border.
- **Studs Strip:** Horizontal row of metallic studs used as section dividers or card top-borders. Alternates between pyramid and round rivet studs.
- **Leather Panel:** Large surface with pebbled texture, dashed stitch lines along edges, and stud accents at corners. Functions as primary content container.
- **Ripped Denim Card:** Card with denim texture background and one or more "rip holes" revealing content underneath. Rip has frayed edges.
- **Safety Pin Link:** Inline text wrapped with small safety pin SVG as a bullet or accent marker.

## Interaction Rules

- Button hover: slight `translate-y-[1px]` press-down with shadow reduction. Safety pin buttons animate the pin toward closed position.
- Card hover: studs catch light via `shadow-[2px_2px_6px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)]` intensifying.
- Torn edge hover: subtle `translate-x-[2px]` shake to simulate fabric movement.
- Patch hover: slight `rotate-[2deg] scale-[1.02]` for organic feel.
- Pin clasp click: `rotate-[360deg]` over 0.3s for pin-spin feedback.
- No smooth easing curves. Use `transition-all duration-150` for snappy punk energy or `cubic-bezier(0.25, 0.1, 0.25, 1)` for mechanical feel.
- Focus rings: `outline-2 outline-offset-2 outline-[#e06020]` (safety orange focus ring).

## Reusable Tailwind Tokens

- Leather bg: `bg-[#1a1a1a]` with SVG `feTurbulence fractalNoise` overlay.
- Denim bg: `bg-[#4a6a8a]` with woven SVG texture.
- Pin silver: `text-[#c0c0c0]` or `border-[#c0c0c0]` with `drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]`.
- Pin gold: `text-[#c4a043]` or `border-[#c4a043]`.
- Stud metal: `bg-[linear-gradient(135deg,#e0e0e0,#a0a0a0,#707070)]`.
- Torn edge: `[clip-path:polygon(...)]` with randomized top-edge points.
- Patch circle: `rounded-full border-2 border-dashed border-[#c0c0c0]`.
- Safety accent: `text-[#e06020]` or `bg-[#e06020]`.
- Stitch line: `border-dashed border-[#3a3a3a]` or `border-[#5a5a5a]`.
- Punk heading: `font-[Impact] font-bold uppercase text-[#c0c0c0]`.
- Noise overlay: `bg-[url("data:image/svg+xml,...")] opacity-[0.12] mix-blend-multiply`.

## Quality Checklist

- Safety pin SVG accent appears at least once (divider, clasp, or decoration).
- Torn fabric jagged edge on at least one section or card.
- Leather texture on at least one major surface.
- Band patch circular element with stitch border present.
- Studs or spike row as accent divider or border.
- Ripped denim surface or denim-textured element present.
- Dark dominant palette (leather black primary).
- Metallic silver or gold hardware accents.
- Typography is bold, condensed, or distressed.
- Safety orange accent appears at least once.
- No smooth gradients, no rounded corners (except patches), no pastels.
- Interface feels aggressive, raw, and rebellious.

## Anti-Patterns

- Clean smooth gradients (punk texture is rough and tactile).
- Rounded corners everywhere (punk is angular and torn).
- Soft pastel colors (punk palette is dark metallic with raw accents).
- Symmetric grid layouts (punk composition is irregular and overlapping).
- Light or white primary backgrounds (punk is dark leather and denim).
- Elegant serif or friendly rounded typography (punk is bold and aggressive).
- Missing texture overlays (leather and denim need visible grain).
- Smooth easing animations (punk transitions are snappy or mechanical).
- Single flat color surfaces without material texture (punk surfaces are always textured).
- Corporate spacing and alignment (punk layouts should feel assembled, not designed).
- Missing the safety pin accent (this is the signature punk fashion element).
- Bright multi-color rainbow palettes (punk is dark with targeted accents only).

## Accessibility Considerations

- Safety pin SVGs must have `aria-hidden="true"` when decorative, `role="img"` with `aria-label` when meaningful.
- Torn edge clip-paths must not clip interactive content. Keep buttons and links outside clip-path zones.
- Dark leather backgrounds require `text-[#f5f0e8]` or `text-[#c0c0c0]` for sufficient contrast (WCAG AA minimum 4.5:1).
- Safety orange `#e06020` on dark `#1a1a1a` yields approximately 5.8:1 contrast ratio (passes AA for normal text).
- Stud elements must not rely solely on color to convey meaning. Use `aria-label` or visible text alongside.
- Band patch text must meet contrast requirements against patch background. Use `text-[#f5f0e8]` on dark patches.
- Rip holes revealing content underneath must not obscure interactive elements beneath them.
- Focus indicators must be visible against dark leather backgrounds. Use safety orange or silver outlines with sufficient offset.
- Denim texture overlays should not reduce text contrast below AA thresholds. Reduce opacity or increase text weight as needed.
- All decorative SVG elements should be hidden from screen readers unless they carry semantic meaning.
