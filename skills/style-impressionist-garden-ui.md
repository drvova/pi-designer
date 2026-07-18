---
name: impressionist-garden-ui
description: Build impressionist garden UI components (dappled light, water lilies, broken brushstroke texture, haystack, garden path, Monet bridge, wildflower meadow) with soft blended colors, light effects, and the luminous outdoor scenes of Impressionist painting. Trigger this skill when the user asks for impressionist garden design, Monet-inspired UI, water lily interface, garden path layout, dappled light overlay, broken brushstroke texture, haystack silhouette, wildflower meadow background, impressionist painting aesthetic, plein air garden UI, or luminous outdoor impressionist interfaces.
---

# Impressionist Garden UI

Use this skill to design and implement luminous outdoor interfaces inspired by the 19th-century Impressionist movement: dappled light filtering through trees, water lilies floating on a pond, broken brushstroke textures of short color dabs, haystack silhouettes at golden hour, winding garden paths through lush greenery, Monet's iconic bridge arch, and wildflower meadows rendered as dense fields of small colored dots. Every surface should feel bathed in natural light, every edge soft, every color optically mixed rather than flat.

## Non-Negotiable Foundations

- Impressionist Garden design is defined by DAPPLED LIGHT and OPTICAL COLOR MIXING: every surface suggests sunlight filtering through leaves, reflecting off water, and scattering across living textures. Light is the subject, not decoration.
- Broken brushstroke textures are mandatory: short dabs, soft dabs, and stippled marks of color that optically blend at a distance. Never flat fills. Never sharp vector precision. The eye must do the mixing.
- Colors are soft and sun-drenched: lily pad green, water blue, sky impressionist blue, haystack gold, rose garden pink, light warm, path earth, and shadow blue-violet. The palette shifts with imagined time-of-day light.
- Dappled light overlays: scattered warm light spots (`#fff5d0` at low opacity) across surfaces, as if sunlight passes through a canopy of leaves. Irregular, organic, never grid-aligned.
- Natural softness: all edges are softened, all corners rounded, all boundaries slightly blurred. Impressionism rejects hard outlines — form emerges from adjacent color, not from line.
- Typography is organic and literary: soft serif faces with humanist warmth, light weights, generous leading. The text should feel like a caption in an exhibition catalog, not a corporate memo.

## Core Material Recipes

### 1) Dappled Light Overlay

The foundational impressionist atmospheric effect: scattered warm light spots across any surface.

- Base overlay: pseudo-element with `background-image: radial-gradient(ellipse 40px 30px at 15% 20%, rgba(255,245,208,0.35) 0%, transparent 100%), radial-gradient(ellipse 50px 35px at 60% 35%, rgba(255,245,208,0.25) 0%, transparent 100%), radial-gradient(ellipse 30px 45px at 80% 15%, rgba(255,245,208,0.30) 0%, transparent 100%), radial-gradient(ellipse 45px 25px at 35% 70%, rgba(255,245,208,0.20) 0%, transparent 100%), radial-gradient(ellipse 35px 40px at 75% 80%, rgba(255,245,208,0.28) 0%, transparent 100%)` with `opacity-80 pointer-events-none`.
- Soft edge blur: each ellipse uses a radial gradient with feathered edges, no hard stops.
- Warm tint: `filter: sepia(0.03) brightness(1.01)` on the entire overlay.
- Movement hint: subtle CSS animation `@keyframes dapple { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(2px, -1px); } }` at 8s duration for organic drift.
- Full: `relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_40px_30px_at_15%_25%,rgba(255,245,208,0.30)_0%,transparent_100%),radial-gradient(ellipse_50px_35px_at_60%_40%,rgba(255,245,208,0.20)_0%,transparent_100%),radial-gradient(ellipse_35px_40px_at_80%_20%,rgba(255,245,208,0.25)_0%,transparent_100%)] before:pointer-events-none before:z-10`

### 2) Water Lily Pond

Circular lily pads floating on softly rippled water, the signature Monet motif.

- Water surface: `bg-gradient-to-b from-[#6aa0cc] via-[#5a90b8] to-[#4a80a8]` with gentle ripple overlay using `background-image: repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(255,255,255,0.04) 6px, rgba(255,255,255,0.04) 7px)`.
- Lily pad: `bg-[#5a9a5a] rounded-full w-12 h-10 relative` with a radial gradient `bg-[radial-gradient(ellipse_at_40%_35%,#6ab06a_0%,#4a8a4a_70%,#3a7a3a_100%)]` and a V-shaped notch via `clip-path: polygon(0% 50%, 48% 42%, 52% 58%, 100% 50%, 100% 100%, 0% 100%)`.
- Lily pad shadow: `shadow-[0_2px_8px_rgba(30,60,30,0.2)]` for water-reflected shade.
- Flower accent: small `bg-[radial-gradient(circle,#d47088_0%,#c45878_50%,#b44068_100%)] rounded-full w-4 h-4` placed on select pads for blooming water lilies.
- Water reflection: `bg-[radial-gradient(ellipse,rgba(255,255,255,0.08)_0%,transparent_70%)]` positioned beneath lily pads.
- Full: `bg-gradient-to-b from-[#6aa0cc] via-[#5a90b8] to-[#4a80a8] rounded-2xl p-8 relative overflow-hidden`

### 3) Broken Brushstroke Texture

Short dabs of color that optically blend, the core impressionist painting technique.

- Base texture: CSS using multiple layered `radial-gradient` dabs: `background-image: radial-gradient(ellipse 8px 5px at 10% 15%, rgba(90,154,90,0.4) 0%, transparent 100%), radial-gradient(ellipse 6px 9px at 25% 30%, rgba(106,160,204,0.35) 0%, transparent 100%), radial-gradient(ellipse 7px 4px at 45% 20%, rgba(212,168,72,0.3) 0%, transparent 100%), radial-gradient(ellipse 9px 6px at 70% 45%, rgba(212,112,136,0.3) 0%, transparent 100%), radial-gradient(ellipse 5px 8px at 85% 60%, rgba(90,154,90,0.35) 0%, transparent 100%)`.
- Dab density: approximately 12-16 dabs per 100x100px area, overlapping slightly for optical mixing.
- Color variation: each dab is a slightly different hue and saturation from the palette, never a uniform fill.
- Edge softness: every dab uses radial-gradient with feathered edges, no sharp boundaries.
- Stroke direction hint: dabs tilted 5-15deg via `transform: rotate(8deg)` to suggest brush direction.
- Full: `relative bg-[#e8e4d8] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_8px_5px_at_10%_15%,rgba(90,154,90,0.4)_0%,transparent_100%),radial-gradient(ellipse_6px_9px_at_30%_25%,rgba(106,160,204,0.35)_0%,transparent_100%),radial-gradient(ellipse_7px_4px_at_55%_18%,rgba(212,168,72,0.3)_0%,transparent_100%)] before:pointer-events-none`

### 4) Haystack Silhouette

Golden haystack at harvest hour, the Monet series subject rendered as a soft warm silhouette.

- Haystack body: `bg-gradient-to-b from-[#d4a848] via-[#c49838] to-[#b48828]` with `clip-path: polygon(20% 100%, 30% 30%, 45% 8%, 55% 8%, 70% 30%, 80% 100%)`.
- Hay texture: `background-image: repeating-linear-gradient(175deg, transparent, transparent 3px, rgba(180,136,40,0.15) 3px, rgba(180,136,40,0.15) 4px)` overlaid for individual straw strands.
- Golden glow: `shadow-[0_0_30px_rgba(212,168,72,0.3)]` for warm hour light halo.
- Sky behind: `bg-gradient-to-b from-[#a0c8e0] via-[#b0d0e0] to-[#c8d8e8]` for impressionist sky.
- Ground: `bg-gradient-to-b from-[#6a9a5a] to-[#5a8a4a]` beneath the haystack for meadow grass.
- Full: `relative w-full h-48 bg-gradient-to-b from-[#a0c8e0] to-[#c8d8e8] overflow-hidden`

### 5) Garden Path

Winding path through greenery, leading the eye into the composition.

- Path surface: `bg-gradient-to-b from-[#b0a080] via-[#a89870] to-[#9a8a60]` with `clip-path: polygon(35% 0%, 65% 0%, 58% 100%, 42% 100%)` for a narrowing perspective.
- Path texture: `background-image: radial-gradient(circle 2px, rgba(160,144,96,0.3) 0%, transparent 100%)` repeated for gravel pebble suggestion.
- Border greenery: `bg-[#5a9a5a]` side panels with `clip-path: polygon(0% 0%, 35% 0%, 42% 100%, 0% 100%)` on the left and mirrored on the right.
- Flower accents along path: small `bg-[#d47088] rounded-full w-2 h-2` dots scattered at path edges.
- Depth: path narrows via perspective, wider at bottom, narrower at top, creating depth.
- Full: `relative h-64 overflow-hidden bg-[#e8e4d8]`

### 6) Monet Bridge Arch

The iconic Japanese footbridge from Monet's garden at Giverny, rendered as a soft curved silhouette.

- Bridge arch: SVG with `stroke-[#5a9a5a] stroke-[3px] fill-none` forming a gentle arc: `d="M 20 120 Q 80 40 140 120"` (cubic bezier for the characteristic arch).
- Arch shadow: duplicate SVG path with `stroke-[rgba(90,154,90,0.3)] stroke-[6px] blur-[3px]` offset 2px down.
- Bridge railing: horizontal line `stroke-[#5a9a5a] stroke-[1.5px]` connecting the arch endpoints.
- Wisteria drops: small `bg-[rgba(170,130,200,0.4)] rounded-full w-1 h-3` elements hanging from the arch at regular intervals.
- Water below: `bg-gradient-to-b from-[#6aa0cc] to-[#5a90b8]` beneath the bridge.
- Reflection: mirrored arch SVG `transform: scaleY(-0.6) translateY(-20px) opacity-30` below the waterline.
- Full: `relative w-full h-48 overflow-hidden`

### 7) Wildflower Meadow

Dense field of small color dots suggesting a meadow in full bloom.

- Meadow base: `bg-gradient-to-b from-[#5a9a5a] via-[#6aaa5a] to-[#5a9a4a]` for lush grass.
- Flower dots: CSS using scattered radial-gradient dots: `background-image: radial-gradient(circle 3px, rgba(212,112,136,0.7) 0%, transparent 100%), radial-gradient(circle 2px, rgba(212,168,72,0.6) 0%, transparent 100%), radial-gradient(circle 2.5px, rgba(170,130,200,0.5) 0%, transparent 100%), radial-gradient(circle 2px, rgba(255,255,255,0.6) 0%, transparent 100%)` at scattered positions.
- Density: 20-30 dots per 100x100px area for a lush meadow feel.
- Color distribution: roughly 30% rose pink, 25% haystack gold, 20% purple, 15% white, 10% sky blue.
- Grass blades: `background-image: repeating-linear-gradient(85deg, transparent, transparent 8px, rgba(74,138,74,0.3) 8px, rgba(74,138,74,0.3) 9px)` for vertical grass texture.
- Perspective: dots smaller and denser at top (distance), larger and sparser at bottom (foreground).
- Full: `relative h-48 bg-gradient-to-b from-[#5a9a5a] via-[#6aaa5a] to-[#5a9a4a] overflow-hidden`

## Color Palette System

### Core Impressionist Garden Palette

| Color | Hex | Role |
|---|---|---|
| Lily Pad Green | `#5a9a5a` | Primary green for vegetation, lily pads, foliage, bridge |
| Water Blue | `#6aa0cc` | Pond water, reflective surfaces, cool accents |
| Sky Impressionist | `#a0c8e0` | Sky, atmospheric backgrounds, light washes |
| Haystack Gold | `#d4a848` | Warm sunlight, harvest tones, golden hour glow |
| Rose Garden | `#d47088` | Flower accents, water lily blooms, meadow dots |
| Light Warm | `#fff5d0` | Dappled light spots, sun highlights, luminous areas |
| Path Earth | `#b0a080` | Garden paths, ground tones, earthy neutrals |
| Shadow Blue-Violet | `#6a5a8a` | Cool shadows, depth, wisteria, purple flowers |
| Grass Bright | `#6aaa5a` | Lush spring grass, meadow base, living green |
| Grass Dark | `#3a7a3a` | Deep foliage, lily pad shadows, shaded green |
| Water Light | `#80b8d0` | Water highlights, reflected sky, ripple crests |
| Parchment Warm | `#e8e4d8` | Textured canvas base, paper, light neutral |
| Rose Light | `#e0909a` | Soft flower tints, blush accents, petal highlights |
| Gold Light | `#e8c870` | Straw highlights, warm accents, sunlight |
| Violet Soft | `#a088c0` | Wisteria, lavender, purple meadow flowers |

Rules: Soft, sun-drenched tones dominate — greens and blues for vegetation and water, gold for sunlight, pink for flowers, blue-violet for cool shadows. Every color should feel like it was mixed on an outdoor palette, slightly broken and optically alive. The light warm (#fff5d0) is the atmospheric signature, appearing as scattered dappled light across all surfaces. Pure white and pure black are never used — lightest is warm cream, darkest is deep green or blue-violet.

## Typography Recommendations

Impressionist Garden typography is organic, literary, and softly elegant — like exhibition catalog captions at a garden museum:

- **Display headings:** Cormorant Garamond, EB Garamond, or Spectral (soft old-style serifs with organic proportions).
- **Literary display:** Playfair Display, Libre Baskerville, or Crimson Pro (elegant high-contrast serif for titles).
- **Body text:** Lora, Source Serif Pro, or Noto Serif (warm humanist serif for readable prose).
- **Caption text:** `font-serif text-[#4a5a4a] text-sm leading-relaxed` for painting-style labels and descriptions.
- **Accent notes:** `font-serif italic text-[#6a5a8a] text-xs tracking-wide` for poetic annotations and garden labels.
- Avoid heavy sans-serif weights — the text should feel as soft and organic as the visual style.
- Avoid geometric sans-serif entirely — impressionism is the antithesis of mechanical precision.
- Light weights preferred: `font-light` or `font-normal`, never `font-black` or `font-extrabold`.

## Component Architecture Pattern

1. Soft gradient background suggesting outdoor atmosphere (sky gradient, garden greenery, or water).
2. Dappled light overlay as a persistent atmospheric layer across all components.
3. Broken brushstroke texture on cards, panels, and surfaces — never flat fills.
4. Organic rounded shapes with soft edges — circles, ellipses, gentle curves.
5. Color-dense accents (wildflower dots, lily pad clusters, rose blooms) as decorative elements.
6. Monet bridge arch or haystack silhouette as signature visual anchors.
7. Garden path perspective to create depth and visual flow.
8. Soft serif typography in muted earth and green tones.
9. Cool blue-violet shadows for depth, never black.

## Interaction Rules

- Default state: luminous, soft, sun-drenched — like a garden scene in gentle afternoon light.
- Hover: dappled light intensifies, colors warm slightly, gentle lift.
  - `hover:shadow-[0_4px_16px_rgba(90,154,90,0.2)] hover:brightness-105 transition-all duration-500`.
- Active: `active:scale-[0.98] active:brightness-95` (gentle press, like touching a water surface).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#5a9a5a] focus:ring-offset-2 focus:ring-offset-[#e8e4d8]` (green lily-pad ring on warm canvas).
- Transitions: `transition-all duration-500 ease-out` (slow, organic pace — impressionism is patient observation).
- Water ripple: on click over water surfaces, a CSS ripple `shadow-[0_0_0_4px_rgba(106,160,204,0.2),0_0_0_8px_rgba(106,160,204,0.1),0_0_0_12px_rgba(106,160,204,0.05)]` expanding outward.
- Light drift: dappled light spots shift position subtly on hover, as if the breeze moved the leaves above.
- Scroll interactions: garden elements parallax at different rates — foreground flowers move faster, background sky slower.

## Reusable Tailwind Tokens

- Dappled light overlay: `before:bg-[radial-gradient(ellipse_40px_30px_at_15%_25%,rgba(255,245,208,0.30)_0%,transparent_100%),radial-gradient(ellipse_50px_35px_at_60%_40%,rgba(255,245,208,0.20)_0%,transparent_100%)] before:pointer-events-none`
- Water lily pond: `bg-gradient-to-b from-[#6aa0cc] via-[#5a90b8] to-[#4a80a8] rounded-2xl overflow-hidden`
- Lily pad: `bg-[radial-gradient(ellipse_at_40%_35%,#6ab06a_0%,#4a8a4a_70%,#3a7a3a_100%)] rounded-full shadow-[0_2px_8px_rgba(30,60,30,0.2)]`
- Brushstroke texture: `bg-[radial-gradient(ellipse_8px_5px_at_10%_15%,rgba(90,154,90,0.4)_0%,transparent_100%),radial-gradient(ellipse_6px_9px_at_30%_25%,rgba(106,160,204,0.35)_0%,transparent_100%)]`
- Haystack: `bg-gradient-to-b from-[#d4a848] via-[#c49838] to-[#b48828] shadow-[0_0_30px_rgba(212,168,72,0.3)]`
- Garden path: `bg-gradient-to-b from-[#b0a080] via-[#a89870] to-[#9a8a60]`
- Bridge arch: SVG `stroke-[#5a9a5a] stroke-[3px] fill-none` with `d="M 20 120 Q 80 40 140 120"`
- Wildflower dots: `bg-[radial-gradient(circle_3px,rgba(212,112,136,0.7)_0%,transparent_100%)]`
- Caption text: `text-[#4a5a4a] font-serif text-sm leading-relaxed`
- Accent note: `text-[#6a5a8a] font-serif italic text-xs tracking-wide`
- Soft green shadow: `shadow-[0_4px_16px_rgba(90,154,90,0.2)]`
- Water reflection: `bg-[radial-gradient(ellipse,rgba(255,255,255,0.08)_0%,transparent_70%)]`
- Warm light spot: `bg-[radial-gradient(ellipse,rgba(255,245,208,0.3)_0%,transparent_100%)]`
- Cool shadow: `shadow-[2px_3px_12px_rgba(106,90,138,0.15)]`

## Quality Checklist (must pass)

- Dappled light overlay is present across all primary surfaces (scattered warm spots, not uniform).
- Broken brushstroke texture visible on cards and panels (optical color mixing, not flat fills).
- Soft rounded edges on all components (no sharp corners, no hard geometric shapes).
- Water lily pond elements use circular lily pads with V-notch and optional flower accents.
- Haystack silhouettes use the characteristic cone shape with golden gradient.
- Garden path narrows in perspective, creating depth and visual flow.
- Monet bridge arch uses soft curved SVG stroke, not hard-edged geometry.
- Wildflower meadow uses dense scattered dots of varied colors (rose, gold, violet, white).
- Colors are sun-drenched and soft — never saturated neon, never dark and moody.
- Typography uses light-weight soft serifs — never heavy, never sans-serif.
- The mood reads as a sunlit garden in the impressionist tradition.
- Blue-violet (#6a5a8a) appears only in shadows and cool accents, never dominant.
- No pure white (#ffffff) or pure black (#000000) anywhere in the palette.
- Interactive states use gentle brightness and shadow shifts, not dramatic transforms.

## Anti-Patterns

- Flat solid-color fills (broken brushstroke texture is mandatory — no surface should be a uniform color).
- Sharp corners and hard geometric shapes (impressionism is organic curves and soft edges).
- Pure white or pure black (the palette uses warm cream for light and deep green or blue-violet for dark).
- Heavy or bold typography (light weights and soft serifs only — the text should not overpower the garden).
- Saturated neon colors (impressionist color is optically mixed and soft, never harsh or electric).
- Sans-serif typefaces (serif is mandatory — impressionism is literary and organic, not mechanical).
- Dramatic chiaroscuro or high-contrast lighting (light is soft, dappled, and distributed — never theatrical).
- Grid-aligned or symmetric dappled light patterns (light spots must be organic and irregular).
- Photorealistic rendering (everything should suggest paint, not photograph — broken color, soft edges).
- Missing water or botanical elements (impressionism is fundamentally about natural light on living things).
- Hard-edged SVG illustrations (bridge, haystack, and botanical elements use soft strokes and gradients).
- Uniform dot patterns for meadow (flower dots must vary in size, spacing, and color for organic feel).

## Accessibility Considerations

- Water blue (#6aa0cc) on parchment warm (#e8e4d8) must be verified — may need darkened variant for text. Use `#4a7090` for text on light backgrounds to ensure WCAG AA 4.5:1.
- Lily pad green (#5a9a5a) on light surfaces provides moderate contrast — use darker variant `#3a7a3a` for body text to ensure WCAG AA compliance.
- Haystack gold (#d4a848) on light backgrounds has low contrast — never use as text color. Reserve for decorative elements only.
- Dappled light overlay spots must not obscure or wash out text beneath them — ensure `z-index` layering keeps text above light overlays.
- Rose garden (#d47088) on white-adjacent backgrounds may fail contrast — use `#a04060` for text applications.
- Focus states: `focus:ring-2 focus:ring-[#5a9a5a]` provides sufficient contrast on both light and dark backgrounds.
- Ornamental SVGs (bridge arch, haystack silhouette, brushstroke textures) must be `aria-hidden="true"`.
- Wildflower meadow and dappled light effects are decorative — mark with `role="presentation"` or `aria-hidden` to avoid screen reader noise.
- The soft, low-contrast aesthetic may challenge users with color vision deficiency — ensure sufficient luminance contrast independent of hue.
- Water ripple animations must respect `prefers-reduced-motion` — disable ripple effects when the user has requested reduced motion.
- Touch targets on organic-shaped elements (lily pads, flower dots) must maintain minimum 44x44px hit area regardless of visual size.
- Dappled light pseudo-elements must use `pointer-events-none` so they do not intercept clicks or hovers.
