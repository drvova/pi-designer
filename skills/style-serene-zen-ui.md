---
name: serene-zen-ui
description: Build serene zen UI components (raked sand, stone arrangement, water basin, bamboo fence, moss garden, meditation cushion, temple bell) with minimal clean surfaces, natural materials, and the peaceful stillness of a zen garden. Trigger this skill when the user asks for zen UI, zen garden design, serene interfaces, peaceful components, Japanese garden aesthetics, meditation layouts, temple-inspired design, raked sand patterns, stone arrangements, bamboo elements, moss textures, or calm natural interfaces.
---

# Serene Zen UI

Use this skill to design and implement calm, stillness-rich interfaces where raked sand textures, stone arrangements, bamboo structures, moss grounds, and water surfaces create a sense of meditative peace. Every element is intentional, unhurried, and grounded in natural materials. The interface breathes.

## Non-Negotiable Foundations

- Stillness is the primary design tool. The absence of visual noise, unnecessary motion, and clutter creates the peace. What is removed defines the interface more than what remains.
- Natural material textures ground the design. Sand, stone, bamboo, moss, water, and bronze appear as surfaces, not decorations. They are the material, not the ornament.
- Warm, muted earth tones dominate. The palette is drawn from a garden at dawn: warm sand, weathered stone, living moss, clear water, aged bamboo, indigo cloth, patinated bronze.
- Generous negative space is sacred. Every element needs room to exist without crowding. Whitespace is the sand between stones.
- Typography is calm and measured. No bold display fonts, no aggressive sizing. Type sits quietly and lets content speak.
- Surfaces are matte, never glossy. Reflections are reserved for water only. Everything else absorbs light, like real natural materials.

## Core Material Recipes

### 1) Raked Sand

Parallel curved lines in warm sand, the foundation surface of a zen garden. Used as backgrounds, section dividers, and decorative ground layers.

- Sand base: `bg-[#d4c8a0]` (warm sand tone as primary or secondary background).
- Raked lines pattern: CSS `repeating-linear-gradient` at slight angles.
  - Fine rake: `bg-[repeating-linear-gradient(175deg,transparent,transparent_6px,rgba(138,138,122,0.15)_6px,rgba(138,138,122,0.15)_7px)]`
  - Wide rake: `bg-[repeating-linear-gradient(170deg,transparent,transparent_12px,rgba(138,138,122,0.1)_12px,rgba(138,138,122,0.1)_13px)]`
  - Curved rake: `bg-[repeating-conic-gradient(from_10deg_at_30%_50%,transparent_0deg,transparent_3deg,rgba(138,138,122,0.08)_3deg,rgba(138,138,122,0.08)_3.5deg,transparent_3.5deg,transparent_15deg)]`
- Sand gradient (depth): `bg-gradient-to-b from-[#d4c8a0] via-[#cec29a] to-[#c8bc94]`
- Sand texture overlay: `bg-[url('data:image/svg+xml,...')] opacity-30` with a subtle grain noise.
- Raked sand section divider: `h-px bg-gradient-to-r from-transparent via-[#8a8a7a]/20 to-transparent my-12`
- Sand ripple highlight: `bg-[radial-gradient(ellipse,rgba(212,200,160,0.3)_0%,transparent_70%)]` for subtle warmth variations.
- Sand with stone shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.08)]` on elements resting on sand.
- Wet sand (near water basin): `bg-[#c0b890]` with slightly deeper tone and `opacity-90`.

### 2) Stone Arrangement

Grouped smooth stones that anchor content and create focal points. Stones are rounded, muted, and weighted.

- Stone surface: `bg-[#8a8a7a] rounded-[40%]` for organic, slightly irregular shapes.
- Stone with depth: `bg-gradient-to-b from-[#9a9a8a] to-[#7a7a6a] rounded-[45%_40%_42%_48%]` for natural variation.
- Stone shadow: `shadow-[0_6px_20px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]` for grounded weight.
- Grouped arrangement: Three stones of varying sizes.
  - Large: `w-20 h-18 rounded-[45%_40%_42%_48%]`
  - Medium: `w-14 h-12 rounded-[42%_48%_45%_40%]`
  - Small: `w-8 h-8 rounded-full`
  - Spacing: `gap-3` with stones overlapping slightly via `relative` positioning and negative margins.
- Stone as card: `bg-[#8a8a7a]/10 border border-[#8a8a7a]/20 rounded-[40%] p-8` for organic card shapes.
- Stone hover (interactive): `hover:bg-[#8a8a7a]/20 transition-colors duration-500`
- Flat stepping stone: `bg-[#9a9a8a] rounded-xl p-6` for a more regular, usable surface.
- Dark stone: `bg-[#5a5a4a]` for contrast stones or accent elements.
- Pebble scatter: `bg-[#8a8a7a] rounded-full w-3 h-3 opacity-40` scattered with `gap-2` to `gap-4`.

### 3) Water Basin

A stone basin with a still or gently rippling water surface. The only reflective element in the zen interface.

- Basin stone: `bg-gradient-to-b from-[#7a7a6a] to-[#6a6a5a] rounded-2xl p-1` for the stone vessel.
- Water surface: `bg-gradient-to-br from-[#a0c0d0] via-[#90b8c8] to-[#a8c4d0] rounded-xl` inside the basin.
- Water stillness: `bg-[#a0c0d0] rounded-xl` (flat, calm, reflective).
- Water ripple: `ring-1 ring-[#a0c0d0]/30 rounded-full` expanding outward with `animate-[ripple_4s_ease-out_infinite]`.
- Water reflection: `bg-[linear-gradient(180deg,rgba(160,192,208,0.4)_0%,rgba(160,192,208,0.1)_100%)]` for a vertical reflection line.
- Basin overflow: `bg-gradient-to-b from-[#a0c0d0]/20 to-transparent h-8` below the basin for water seepage.
- Droplet: `bg-[#a0c0d0] rounded-full w-2 h-2 opacity-60` for single water drops.
- Water surface shimmer: `bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)] animate-[shimmer_6s_ease-in-out_infinite]` for light on water.
- Basin depth shadow: `shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)]` inside the basin for recessed depth.

### 4) Bamboo Fence

Vertical bamboo poles creating natural partitions, section dividers, and framing elements.

- Bamboo pole: `bg-gradient-to-b from-[#8a7a4a] via-[#9a8a5a] to-[#8a7a4a] rounded-full w-3 h-full` with subtle gradient for cylindrical appearance.
- Bamboo node: `bg-[#7a6a3a] h-1.5 w-3.5 rounded-sm` placed at intervals on the pole for natural segmentation.
- Bamboo fence section: Three to five poles with `gap-5` to `gap-7`.
- Bamboo horizontal rail: `bg-[#8a7a4a] h-2 rounded-full w-full` connecting poles at top and bottom.
- Bamboo color variants:
  - Fresh: `bg-[#9a9a5a]` (lighter, greener).
  - Aged: `bg-[#7a6a3a]` (darker, more weathered).
  - Wet: `bg-[#6a5a2a]` (deep, rain-darkened).
- Bamboo fence as divider: `h-full w-px bg-gradient-to-b from-[#8a7a4a]/40 via-[#8a7a4a]/60 to-[#8a7a4a]/40` for a minimal single-line version.
- Bamboo leaf accent: `text-[#4a7a4a]/40` with a small leaf icon near fence elements.
- Bamboo shadow: `shadow-[2px_0_8px_rgba(0,0,0,0.06)]` for subtle depth against sand or moss.
- Tied joint: `bg-[#6a5a3a] rounded-full w-1 h-4 rotate-12` at horizontal rail intersections for rope binding.

### 5) Moss Garden

Green textured ground covering, representing living, organic growth. Used as section backgrounds and accent surfaces.

- Moss base: `bg-[#4a7a4a] rounded-xl` for a patch of living green.
- Moss texture: `bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(74,122,74,0.8)_0deg,rgba(90,140,90,0.6)_10deg,rgba(74,122,74,0.9)_20deg)]` for organic variation.
- Moss gradient: `bg-gradient-to-br from-[#4a7a4a] via-[#5a8a5a] to-[#3a6a3a]` for natural depth.
- Moss patch edge: `rounded-[30%_40%_35%_45%]` for organic, irregular boundaries.
- Moss soft: `bg-[#5a8a5a] rounded-3xl p-6 opacity-80` for lighter, softer moss areas.
- Moss with moisture: `bg-[#3a6a3a] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]` for damp, deeper moss.
- Moss between stones: `bg-[#4a7a4a] h-2 rounded-full opacity-60` filling gaps in stone arrangements.
- Moss hover (interactive section): `hover:bg-[#5a8a5a] transition-colors duration-700`
- Dried moss accent: `bg-[#7a8a5a] opacity-60` for weathered, less vibrant patches.
- Moss and sand border: `border-b-2 border-[#4a7a4a]/20` for the transition line between moss and sand areas.

### 6) Meditation Cushion (Zabuton)

Round, soft surfaces representing seated meditation points. Used as focal cards, call-to-action elements, or profile containers.

- Cushion body: `bg-[#2a3a6a] rounded-full aspect-square` for a top-down view of an indigo zabuton.
- Cushion gradient: `bg-gradient-to-b from-[#3a4a7a] to-[#2a3a6a] rounded-full` for subtle dome shape.
- Cushion shadow: `shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_-4px_12px_rgba(0,0,0,0.1)]` for grounded softness.
- Cushion inner circle: `border-2 border-[#4a5a8a]/30 rounded-full w-3/4 h-3/4 mx-auto mt-6` for the inner seating area.
- Cushion stitch: `border border-[#4a5a8a]/20 rounded-full w-1/2 h-1/2 mx-auto mt-8` for inner concentric stitching.
- Cushion with content: `bg-[#2a3a6a] rounded-3xl p-8` (squaring the circle for usability).
- Cushion color variants:
  - Indigo: `bg-[#2a3a6a]` (traditional).
  - Persimmon: `bg-[#8a3a2a]` (warm accent).
  - Slate: `bg-[#4a5a6a]` (neutral).
  - Moss: `bg-[#3a5a3a]` (natural green).
- Cushion hover: `hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-shadow duration-500`
- Zabuton mat (square base beneath round cushion): `bg-[#9a8a7a] rounded-xl p-4` beneath the circular cushion.

### 7) Temple Bell

A bronze bell silhouette, used as a notification element, decorative accent, or interactive trigger.

- Bell body: `bg-[#8a6a3a] rounded-t-[50%] rounded-b-lg w-16 h-20` for a classic temple bell shape.
- Bell rim: `bg-[#7a5a2a] h-3 w-full rounded-b-lg` at the bottom of the bell body.
- Bell suspension: `bg-[#6a5a3a] h-6 w-1 mx-auto` above the bell for the hanging rope.
- Bell clapper: `bg-[#6a5a3a] rounded-full w-3 h-3 mx-auto` below the bell body.
- Bell patina: `bg-[linear-gradient(135deg,#8a6a3a_0%,#6a8a5a_50%,#8a6a3a_100%)]` for aged bronze with green patina.
- Bell shadow: `shadow-[0_4px_16px_rgba(0,0,0,0.12)]`
- Bell ring animation: `animate-[bellRing_2s_ease-in-out]` with subtle rotation keyframes (2-3 degrees).
- Bell sound wave: `ring-1 ring-[#8a6a3a]/20 rounded-full` expanding outward with `animate-[soundWave_1.5s_ease-out]`.
- Bell as notification: `bg-[#8a6a3a] rounded-full w-10 h-10 flex items-center justify-center text-white/80`
- Small bell accent: `text-[#8a6a3a] text-lg opacity-60` for decorative placement.

## Color Palette System

### Primary Palette (Earth and Stone)

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Sand Warm | `#d4c8a0` | `bg-[#d4c8a0]` | Primary background, raked sand surface |
| Stone Gray | `#8a8a7a` | `bg-[#8a8a7a]` | Stone elements, borders, secondary surfaces |
| Moss Green | `#4a7a4a` | `bg-[#4a7a4a]` | Living green surfaces, moss garden |
| Bamboo | `#8a7a4a` | `bg-[#8a7a4a]` | Bamboo poles, warm wood tones |
| Dark Stone | `#5a5a4a` | `bg-[#5a5a4a]` | Dark accents, deep stone |
| Earth | `#6a5a3a` | `bg-[#6a5a3a]` | Warm dark, rope, bindings |

### Water and Atmosphere

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Water Clear | `#a0c0d0` | `bg-[#a0c0d0]` | Water surface, reflective elements |
| Water Deep | `#90b8c8` | `bg-[#90b8c8]` | Deeper water, basin interior |
| Sky Pale | `#d0d8e0` | `bg-[#d0d8e0]` | Pale sky reflections, light accents |
| Mist | `rgba(240,240,235,0.6)` | `bg-[#f0f0eb]/60` | Morning mist, soft overlays |

### Accent and Fabric

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Cushion Indigo | `#2a3a6a` | `bg-[#2a3a6a] | Meditation cushions, fabric surfaces |
| Bell Bronze | `#8a6a3a` | `bg-[#8a6a3a]` | Temple bells, metallic accents |
| Persimmon | `#8a3a2a` | `bg-[#8a3a2a]` | Warm accent, cushion variant |
| Zen White | `#f5f0e8` | `bg-[#f5f0e8]` | Clean surfaces, paper, text backgrounds |
| Zen Cream | `#ede8d8` | `bg-[#ede8d8]` | Warm white variant, card surfaces |

### Text Colors

| Name | Tailwind | Usage |
|---|---|---|
| Ink | `text-[#2a2a2a]` | Primary text on light surfaces |
| Stone text | `text-[#5a5a4a]` | Secondary text, labels |
| Faint ink | `text-[#8a8a7a]` | Tertiary text, captions |
| Water text | `text-[#3a6a7a]` | Links, interactive text |
| Sand text | `text-[#6a5a3a]` | Warm accent text |
| Bell text | `text-[#8a6a3a]` | Notification text, callouts |

## Spacing System

Zen UI breathing room is generous, deliberate, and sacred. The space between elements is as designed as the elements themselves.

- Base unit: `4px` (Tailwind `1`).
- Section spacing: `space-y-20` to `space-y-28` between major sections (zen requires generous breathing room).
- Card internal padding: `p-8` to `p-10` (content must not feel cramped).
- Element spacing within cards: `gap-6` to `gap-8`.
- Page margins: `px-8` (mobile) to `px-16` (desktop), max-width `max-w-4xl` (zen prefers centered, contained layouts).
- Sand section padding: `py-24` to `py-32` for full atmospheric immersion.
- Stone group spacing: `gap-3` to `gap-4` (stones sit close, like a natural arrangement).
- Bamboo pole spacing: `gap-5` to `gap-7` (rhythmic, not cramped).
- Between moss and sand: `my-16` minimum (clear transition zones).

## Typography Hierarchy

Typography in zen UI is calm, measured, and unhurried. Text sits quietly within generous space. No element shouts.

| Element | Size | Weight | Color | Spacing |
|---|---|---|---|---|
| Page title | `text-3xl` to `text-4xl` | `font-light` | `text-[#2a2a2a]` | `tracking-wide leading-[1.3]` |
| Section title | `text-xl` to `text-2xl` | `font-light` | `text-[#2a2a2a]` | `tracking-wide leading-tight` |
| Card title | `text-lg` | `font-normal` | `text-[#5a5a4a]` | `leading-snug` |
| Body | `text-base` to `text-lg` | `font-light` | `text-[#5a5a4a]` | `leading-[1.8]` |
| Label | `text-sm` | `font-normal` | `text-[#8a8a7a]` | `tracking-widest uppercase` |
| Caption | `text-xs` | `font-light` | `text-[#8a8a7a]` | `tracking-wider` |

Rules:
- Prefer light and normal font weights. Bold is used sparingly, if at all. The voice is soft.
- One serif font for headings adds contemplative character; one sans-serif for body maintains readability.
- Letter spacing is generous on labels and captions (`tracking-widest`, `tracking-wider`) to evoke inscribed or carved text.
- Line height for body: `leading-[1.8]` minimum (zen text breathes between lines).
- Maximum two font families.
- Never use all-caps for body text. All-caps is reserved for short labels and category markers.
- Text alignment is typically left or centered. Centered text evokes meditative symmetry.

## Component Architecture Pattern

1. Sand or zen white background (the ground plane).
2. Content area with generous padding (the clearing in the garden).
3. Stone or moss element (natural anchor or focal point).
4. Bamboo divider (optional, for section separation).
5. Water or cushion element (interactive or reflective accent).
6. Temple bell (optional, for notifications or decorative punctuation).

The composition follows the principle of ma (negative space). The empty space between elements is intentional and defines the rhythm. A zen interface is not minimal because there is little content; it is minimal because every element has room to breathe.

## Interaction Rules

- Default state: still and settled. No movement, no animation, no pulse. Elements exist in quiet repose.
- Hover state: gentle emergence. `hover:bg-[#5a8a5a] transition-colors duration-700` (slow, like moss growing).
- Active state: slight settling. `active:translate-y-px transition-transform duration-300` (a subtle weight shift).
- Focus state: `focus:ring-1 focus:ring-[#8a8a7a]/40 focus:outline-none` (a barely-there stone-colored ring).
- Water ripple on interaction: `animate-[ripple_3s_ease-out]` triggered on click or hover of water elements.
- Bell ring on notification: `animate-[bellRing_2s_ease-in-out]` with a subtle rotation and sound wave ring.
- Stone settle on load: `animate-[stoneSettle_1s_ease-out]` with a subtle `translateY` from `-4px` to `0`.
- Transitions are slow and organic: minimum `duration-500`, preferred `duration-700`. Nothing snaps; everything drifts.
- No bouncy, spring, or elastic animations. Movement is weighty and grounded, like stone settling into sand.
- Scroll behavior: smooth, slow scroll. `scroll-behavior: smooth` with generous section transitions.
- No loading spinners. Use a gentle water ripple or stone pulse instead.

## Reusable Tailwind Tokens

Core surfaces:

- Sand: `bg-[#d4c8a0]`
- Zen white: `bg-[#f5f0e8]`
- Zen cream: `bg-[#ede8d8]`
- Moss: `bg-[#4a7a4a]`
- Stone: `bg-[#8a8a7a]`
- Dark stone: `bg-[#5a5a4a]`
- Bamboo: `bg-[#8a7a4a]`
- Water: `bg-[#a0c0d0]`
- Indigo cushion: `bg-[#2a3a6a]`
- Bronze bell: `bg-[#8a6a3a]`

Text tokens:

- Ink: `text-[#2a2a2a]`
- Stone text: `text-[#5a5a4a]`
- Faint ink: `text-[#8a8a7a]`
- Water text: `text-[#3a6a7a]`

Surface patterns:

- Raked sand: `bg-[repeating-linear-gradient(175deg,transparent,transparent_6px,rgba(138,138,122,0.15)_6px,rgba(138,138,122,0.15)_7px)] bg-[#d4c8a0]`
- Sand card: `bg-[#ede8d8] rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]`
- Stone card: `bg-[#8a8a7a]/10 border border-[#8a8a7a]/20 rounded-[40%] p-8`
- Moss section: `bg-[#4a7a4a] rounded-3xl p-10`
- Water basin: `bg-gradient-to-br from-[#a0c0d0] to-[#90b8c8] rounded-xl p-1 shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)]`
- Bamboo divider: `h-full w-3 bg-gradient-to-b from-[#8a7a4a] via-[#9a8a5a] to-[#8a7a4a] rounded-full`
- Cushion card: `bg-[#2a3a6a] rounded-3xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.15)]`
- Bell icon: `bg-[#8a6a3a] rounded-full w-10 h-10 flex items-center justify-center text-white/80`

Animation tokens:

- Ripple: `animate-[ripple_3s_ease-out]`
- Bell ring: `animate-[bellRing_2s_ease-in-out]`
- Stone settle: `animate-[stoneSettle_1s_ease-out]`
- Water shimmer: `animate-[shimmer_6s_ease-in-out_infinite]`
- Slow transition: `transition-colors duration-700`

## Quality Checklist (must pass)

- The dominant surface is warm and earthy (sand, cream, or stone tones cover at least 60% of the viewport).
- No element uses bold font weight unless it is a critical interactive label.
- Generous whitespace between all major sections (minimum `space-y-20`).
- Natural material textures (raked sand, moss, stone) appear as backgrounds, not decorative overlays.
- Water is the only reflective surface. All other surfaces are matte.
- Transitions are slow (minimum `duration-500`) and organic (no spring, bounce, or elastic easing).
- The palette contains no saturated, neon, or artificial colors. Every color comes from nature.
- Typography is light-weight and generously spaced. No cramped text.
- Interactive elements have a calm, grounded feel (stone-colored focus rings, slow hover transitions).
- The layout is centered and contained (max-width constraint), not edge-to-edge.
- Stone and moss elements have subtle shadows that ground them to the surface.
- Bell elements are used sparingly (one per page maximum for notifications).
- The overall impression is stillness: the user feels they are in a peaceful garden, not reading a dashboard.

## Anti-Patterns

- Bold, heavy typography (zen is quiet; bold is loud).
- Bright, saturated, or artificial colors (the palette is drawn from nature only).
- Fast animations or transitions (nothing in a zen garden moves quickly).
- Spring, bounce, or elastic easing functions (zen movement is weighty and grounded).
- Glossy, reflective surfaces (only water reflects; everything else is matte).
- Dense, cramped layouts (zen requires generous breathing room between all elements).
- Loading spinners or progress bars (use a gentle ripple or stone pulse instead).
- Gradient-heavy backgrounds (zen surfaces are mostly flat with subtle texture, not gradient storms).
- Edge-to-edge content without containment (zen prefers centered, bounded layouts).
- Multiple focal points competing for attention (one stone, one cushion, one bell).
- Decorative elements without natural material association (no abstract shapes, geometric patterns, or digital-native ornaments).
- Sans-serif-only typography for everything (a serif heading adds contemplative character).
- Hover states that are instant (hover transitions must be slow, minimum `duration-500`).
- Using bright white (`#ffffff`) as a background (zen white is warm: `#f5f0e8` or `#ede8d8`).
- Over-use of shadows (zen shadows are subtle and grounding, not dramatic).

## Typography Recommendations

- Serif heading (contemplative character): Noto Serif, Source Serif 4, Lora, Cormorant Garamond.
- Sans-serif body (clean, quiet): Inter at light/normal weight, Source Sans 3, Noto Sans, IBM Plex Sans.
- Mono (for labels, inscriptions): JetBrains Mono at light weight.
- Japanese-inspired (optional, for headings or accents): Zen Kaku Gothic, Noto Serif JP, Shippori Mincho.
- Avoid display, script, geometric bold, or decorative fonts (they break the meditative tone).
- Font weight range: `font-light` (300) to `font-normal` (400). Avoid `font-semibold` and above.

## Accessibility Considerations

- Despite the muted palette, verify text contrast meets WCAG AA. `text-[#2a2a2a]` on `bg-[#f5f0e8]` achieves approximately 10:1. `text-[#5a5a4a]` on `bg-[#f5f0e8]` achieves approximately 5:1 (AA compliant).
- Moss green text on sand backgrounds must be checked: `text-[#4a7a4a]` on `bg-[#d4c8a0]` achieves approximately 3.5:1; avoid for body text, use for large headings or decorative elements only.
- Focus states use `focus:ring-1 focus:ring-[#8a8a7a]/40` which is subtle. Verify the ring is visible against sand and cream backgrounds. Consider increasing to `focus:ring-2` if needed.
- Stone-shaped cards with organic `rounded-[40%]` borders may confuse users expecting rectangular interactive areas. Ensure the clickable area is clearly defined.
- Water ripple animations and bell ring animations must respect `prefers-reduced-motion`. Provide static alternatives.
- Raked sand patterns are decorative and must not be used as the sole method of conveying section separation. Use semantic heading structure as well.
- Temple bell notification sounds (if any) must have a visual alternative. Do not rely on audio alone.
- All interactive elements must maintain a minimum 44x44px touch target, even when styled as small stones or pebbles.
- Bamboo dividers and moss sections must have appropriate ARIA landmarks or `role="separator"` where they serve as visual dividers.
- Meditation cushion cards with `rounded-full` shapes must ensure text inside remains readable and does not clip at the edges. Use `p-8` minimum padding.
- Water basin interactive elements must have sufficient contrast for the water-on-stone color scheme. Test with both light and dark variants.
- The slow transition speeds (500ms-700ms) should not delay critical feedback. For form validation errors, use immediate visual indicators alongside the slow transitions.
