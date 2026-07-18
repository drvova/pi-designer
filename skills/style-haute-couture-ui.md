---
name: haute-couture-ui
description: Build haute couture UI components (silk drape, sequin field, mannequin form, runway lighting, stitch detail, velvet collar, fashion sketch) with luxurious fabric textures, runway glamour, and the elevated craftsmanship of high fashion design. Trigger this skill when the user asks for haute couture, high fashion, runway design, silk drape, sequin field, luxury fashion, fashion sketch, velvet texture, couture aesthetic, or elevated fashion interfaces.
---

# Haute Couture UI

Use this skill to design and implement luxurious, elevated interfaces inspired by haute couture fashion: silk drape gradients, sequin field patterns, mannequin silhouettes, runway spotlight lighting, fine stitch details, velvet collar textures, and the meticulous craftsmanship of high fashion design.

## Non-Negotiable Foundations

- Every haute couture interface must communicate luxury, precision, and elevated taste. No rough textures, no distressed effects, no chaotic layouts.
- Silk and fabric flow define the visual language. Surfaces should feel soft, flowing, and luminous. Gradients mimic draped silk catching light.
- Sequin and metallic accents provide controlled sparkle. Reflective elements are used sparingly for emphasis, never as overwhelming fills.
- The mannequin silhouette is the signature form element. Outlines of the human form signal fashion identity across layouts.
- Runway lighting creates drama. Spotlight cones, warm pools of light, and deep surrounding shadow define the spatial hierarchy.
- Stitch detail is the mark of craftsmanship. Fine parallel lines, thread accents, and seam details signal quality and attention.
- Typography must be refined, high-contrast, and editorial. Think fashion magazine mastheads: thin weights paired with bold.
- The palette is restrained luxury: ivory, black, gold, with selective red and blush. Every color choice must feel deliberate and expensive.
- White space is generous. Luxury breathes. Dense packed layouts destroy the elevated feel.

## Core Material Recipes

### 1) Silk Drape Background

Flowing silk fabric with soft light-catching gradient.

- Base: `bg-[#f5f0f0]` (silk white).
- Drape gradient: `bg-[linear-gradient(165deg,#f5f0f0_0%,#e8ddd8_25%,#f5f0f0_50%,#ede3dd_75%,#f5f0f0_100%)]` (silk fold highlights and shadows).
- Sheen overlay: `bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,transparent_40%,rgba(255,255,255,0.1)_60%,transparent_100%)]` for light catch on folds.
- Fabric texture: SVG `feTurbulence` at `baseFrequency="0.02"` with `type="fractalNoise"`, `opacity-[0.03]` and `mix-blend-overlay` for subtle silk weave.
- Fold lines: thin `border-b border-[rgba(0,0,0,0.04)]` at irregular intervals to suggest fabric pleats.

### 2) Sequin Field Pattern

Dense field of small reflective dots suggesting covered-in-sequins fabric.

- Container: `bg-[#0a0a0a]` (dark backing visible between sequins).
- Individual sequin: `w-1.5 h-1.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff_0%,#c4a043_40%,#8a6a20_100%)]` (gold sequin with light point).
- Sequin grid: `grid grid-cols-[repeat(auto-fill,minmax(8px,1fr))] gap-[2px]` (tight packed, slight gaps show dark backing).
- Silver variant: `bg-[radial-gradient(circle_at_30%_30%,#fff_0%,#c0c0c0_40%,#808080_100%)]`.
- Scatter effect: random `opacity-[0.6]` to `opacity-[1]` on individual sequins for organic variation.
- Hover shimmer: `animate-pulse` on individual sequins with staggered `animation-delay` for wave effect.
- Dense fill: 200-400 sequin elements per container for full coverage.

### 3) Mannequin Silhouette

Form outline of a dress form or full-body fashion mannequin.

- SVG path: simplified female torso outline (shoulders, waist, hips) as a closed path.
- Outline stroke: `stroke-[#8a8a8a] stroke-1 fill-none` (sketch gray) for fashion-illustration feel.
- Filled variant: `fill-[#0a0a0a] opacity-[0.05]` for subtle watermark behind content.
- Size: `w-full max-w-xs` centered for hero placement, `w-16` for icon use.
- Dress form variant: torso only with stand base at bottom, `stroke-[#c4a043]` for gold accent version.
- Detail lines: internal darts and seam lines drawn as thin dashed strokes `stroke-dasharray="4 2"` for construction marks.
- Background use: `absolute opacity-[0.04]` behind text content as a fashion watermark.

### 4) Runway Lighting Cone

Spotlight cone from above creating dramatic illuminated pool.

- Cone shape: `bg-[linear-gradient(180deg,rgba(255,245,208,0.15)_0%,rgba(255,245,208,0.03)_60%,transparent_100%)]` (warm light fading down).
- Source point: small `w-2 h-2 rounded-full bg-[#fff5d0] shadow-[0_0_20px_rgba(255,245,208,0.6)]` at top center.
- Cone width: `clip-path:polygon(45%_0,55%_0,80%_100%,20%_100%)` for widening spotlight beam.
- Floor pool: `w-48 h-6 rounded-full bg-[radial-gradient(ellipse,rgba(255,245,208,0.12)_0%,transparent_70%)]` at the cone base.
- Ambient wash: `bg-[#0a0a0a]` with the cone overlaid, surrounding area stays dark.
- Multiple cones: 2-3 cones at different horizontal positions for multi-model runway effect.
- Content sits inside the illuminated zone with `text-[#f5f0f0]` or `text-[#0a0a0a]` depending on light intensity.

### 5) Stitch Detail Accent

Fine thread lines suggesting couture hand-stitching and construction.

- Single stitch: `border-b border-dashed border-[#c0c0c0]` with `border-dash-array-[4px_3px]` (thread intervals).
- Top-stitch: double parallel lines `border-b-2 border-[#c4a043]` with `border-style: double` (gold topstitching).
- Seam line: `h-px bg-[#d0d0d0]` with repeating thread pattern via background gradient `bg-[linear-gradient(90deg,#c0c0c0_0%,#c0c0c0_4px,transparent_4px,transparent_7px)]`.
- Cross-stitch: two short diagonal lines crossing `::before` and `::after` pseudo-elements at 45-degree angles.
- Buttonhole: small `w-4 h-1 rounded-full border border-[#8a8a8a]` with `::after` dot in center.
- Thread tail: `w-px h-3 bg-[#c0c0c0] rotate-[15deg]` hanging from stitch endpoint.
- Stitch border container: `border border-dashed border-[#c0c0c0]/40` around cards for framed stitch effect.

### 6) Velvet Collar Texture

Rich dark velvet fabric with deep pile absorption and subtle sheen.

- Base: `bg-[#0a0a0a]` (velvet absorbs nearly all light).
- Pile texture: SVG `feTurbulence` at `baseFrequency="0.9"` with `type="fractalNoise"`, `opacity-[0.08]` and `mix-blend-soft-light`.
- Sheen edge: `bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_20%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.04)_80%,transparent_100%)]` (velvet catches light at fold edges).
- Deep black: `bg-[#050505]` for velvet in shadow, `bg-[#0f0f0f]` for lit velvet.
- Collar shape: curved clip-path `[clip-path:polygon(10%_0,90%_0,100%_30%,95%_100%,5%_100%,0_30%)]` for notched collar form.
- Velvet red variant: `bg-[#2a0505]` with `text-[#f5f0f0]` for deep burgundy velvet.
- Lining edge: thin `border-b border-[#c4a043]` at collar base for gold-trimmed lining.

### 7) Fashion Sketch Illustration

Pencil-line drawing style for decorative illustrations.

- Line style: SVG paths with `stroke-[#8a8a8a] stroke-[0.8] fill-none stroke-linecap="round" stroke-linejoin="round"`.
- Sketch feel: slight `filter:url(#pencil-texture)` using SVG `feTurbulence` displacement map for hand-drawn wobble.
- Line weight variation: primary outline `stroke-width="1.2"`, details `stroke-width="0.6"`, accents `stroke-width="0.3"`.
- Common subjects: dress silhouette, handbag, shoe, necklace, hat, perfume bottle.
- Background placement: `opacity-[0.15]` as watermark behind product cards or hero sections.
- Color accent: single `stroke-[#c41e1e]` line on one element (a lip, a heel, a bow) for selective color.
- Croquis figure: elongated proportions (10-head figure standard in fashion illustration).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Silk White | `#f5f0f0` | Primary background, silk surfaces |
| Velvet Black | `#0a0a0a` | Primary text, velvet, deep shadow |
| Sequin Gold | `#c4a043` | Luxury accent, metallic highlights |
| Sequin Silver | `#c0c0c0` | Secondary metallic, stitch detail |
| Fashion Red | `#c41e1e` | Signature accent, lip, heart, power |
| Runway Warm | `#fff5d0` | Spotlight light, warm illumination |
| Sketch Gray | `#8a8a8a` | Illustration lines, muted detail |
| Silk Blush | `#f0d0d8` | Soft accent, romantic detail |
| Deep Velvet | `#050505` | Deepest black, shadow velvet |
| Ivory | `#f8f4ef` | Warm alternative to pure white |
| Champagne | `#f0e8d8` | Aged luxury, vintage silk |
| Thread Gold | `#d4b060` | Stitch detail, fine accent |

Rules: The palette is a luxury restraint. Ivory and black dominate. Gold and silver appear as controlled accents. Red is used surgically for maximum impact. Blush appears only in romantic or feminine contexts. Never use neon, never use saturated primaries (except the signature red), never use earthy browns.

## Typography Recommendations

- **Masthead/Display:** Playfair Display, Cormorant Garamond (high-contrast serif, editorial luxury).
- **Headlines:** Didot, Bodoni Moda (thin-thick stroke contrast, fashion magazine feel).
- **Body text:** Lora, Source Serif Pro (refined serif for extended reading).
- **Captions/Labels:** Montserrat Light, Josefin Sans Light (clean, airy, uppercase).
- **Accent/Price:** `font-[Playfair_Display] font-bold italic` for emphasis and value statements.
- **Editorial:** Mix display serif (large) with sans-serif light (small) for classic fashion magazine hierarchy.
- Font weight range is critical: thin (200-300) for labels and captions, bold (700-900) for headlines. Never medium or regular weights for display.

## Component Architecture Pattern

- **Silk Card:** Card with silk gradient background, fine stitch border (`border-dashed border-[#c0c0c0]/40`), and generous internal padding. Content floats on luminous fabric surface.
- **Sequin Accent Bar:** Horizontal strip filled with sequin field pattern. Used as section dividers or card top-borders. Gold sequins for primary, silver for secondary.
- **Runway Hero:** Full-width section with dark background and spotlight cone illuminating centered content. Mannequin silhouette as optional watermark.
- **Velvet Panel:** Dark velvet-textured container for premium content sections. Gold stitch detail along edges. Text in silk white.
- **Fashion Sketch Card:** Product or feature card with fashion sketch illustration as background watermark at low opacity. Product details overlaid.
- **Stitch Divider:** Horizontal line with visible thread pattern separating sections. Gold thread for primary divisions, silver for secondary.
- **Collar Header:** Navigation or section header with velvet collar texture and curved shape. Gold trim at base.

## Interaction Rules

- Button hover: subtle `shadow-[0_4px_20px_rgba(196,160,67,0.3)]` gold glow expansion with `transition-all duration-300 ease-out`.
- Card hover: gentle `translate-y-[-2px]` lift with shadow deepening. Silk sheen shifts angle.
- Sequin hover: individual sequins near cursor flash brighter via `opacity-[1]` and `scale-[1.2]` with staggered delays.
- Mannequin hover: subtle `opacity-[0.08]` increase for watermark visibility.
- Stitch detail: `::before` pseudo-element animates stitch thread extending via `width` transition.
- Transitions use `duration-300` to `duration-500` with `ease-out` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for elegant deceleration.
- No snap transitions, no bounce, no rubber-band. Motion is smooth, controlled, and editorial.
- Focus rings: `outline-1 outline-offset-4 outline-[#c4a043]` (gold focus ring with generous offset).

## Reusable Tailwind Tokens

- Silk bg: `bg-[linear-gradient(165deg,#f5f0f0,#e8ddd8,#f5f0f0,#ede3dd,#f5f0f0)]`.
- Velvet bg: `bg-[#0a0a0a]` with SVG fractalNoise texture overlay.
- Gold accent: `text-[#c4a043]` or `border-[#c4a043]` with `shadow-[0_0_12px_rgba(196,160,67,0.2)]`.
- Silver stitch: `border-dashed border-[#c0c0c0]/40`.
- Fashion red: `text-[#c41e1e]` or `bg-[#c41e1e]` (surgical accent only).
- Spotlight cone: `bg-[linear-gradient(180deg,rgba(255,245,208,0.15),transparent)]` with `clip-path:polygon(45%_0,55%_0,80%_100%,20%_100%)`.
- Runway dark: `bg-[#0a0a0a]` as default surrounding darkness.
- Sketch line: `stroke-[#8a8a8a]` with SVG `stroke-width="0.8"`.
- Blush accent: `text-[#f0d0d8]` or `bg-[#f0d0d8]/20` for soft romantic detail.
- Sequin gold: `bg-[radial-gradient(circle_at_30%_30%,#fff,#c4a043_40%,#8a6a20)]`.
- Editorial heading: `font-[Playfair_Display] font-bold text-[#0a0a0a]` or `text-[#f5f0f0]`.
- Light label: `font-[Montserrat] font-light uppercase text-xs tracking-[0.2em] text-[#8a8a8a]`.
- Ivory warm: `bg-[#f8f4ef]` for warm alternative surface.
- Champagne: `bg-[#f0e8d8]` for vintage luxury accent.

## Quality Checklist

- Silk drape gradient on at least one major surface.
- Sequin field pattern or sequin accent element present.
- Mannequin silhouette used as watermark, icon, or decorative element.
- Runway spotlight lighting creating dramatic illuminated focal area.
- Stitch detail (dashed borders, thread lines, or seam accents) visible.
- Velvet texture on at least one dark surface.
- Fashion sketch illustration used as background or decorative element.
- Generous white space throughout (minimum 32px between sections).
- Typography uses high-contrast serif for headings and light sans-serif for labels.
- Gold accent color used with restraint (not overwhelming).
- Fashion red used surgically (once or twice maximum).
- Dark areas use true velvet black `#0a0a0a`, not gray.
- Interface feels luxurious, elevated, and editorial.
- Motion is smooth, controlled, and elegant (no snap or bounce).

## Anti-Patterns

- Rough, distressed, or grunge textures (haute couture is pristine and polished).
- Chaotic or dense packed layouts (luxury needs breathing room).
- Neon or highly saturated color palettes (couture palette is restrained and deliberate).
- Low-contrast or muddy color combinations (every color must feel intentional and expensive).
- Heavy bold sans-serif everywhere (fashion typography is high-contrast serif with thin weights).
- Fast snap or bounce animations (couture motion is smooth and editorial).
- Missing texture (flat solid colors feel cheap without fabric quality).
- Overuse of sequins or sparkle (controlled sparkle signals luxury; overwhelming sparkle signals costume).
- Symmetric perfectly centered layouts for every element (fashion editorial uses asymmetric balance).
- Missing white space (dense layouts destroy the elevated luxury feel).
- Using black as the sole background color without fabric texture differentiation (velvet black differs from leather black).
- Cute or whimsical illustrations (fashion sketches are elongated and elegant, not playful).

## Accessibility Considerations

- Sequin field patterns must have `aria-hidden="true"` when decorative. Dense patterns can cause visual discomfort for some users.
- Spotlight lighting cones must not reduce text contrast below WCAG AA thresholds. Ensure illuminated text meets 4.5:1 minimum.
- Silk white `#f5f0f0` background with velvet black `#0a0a0a` text yields approximately 18.5:1 contrast ratio (exceeds AAA).
- Sequin gold `#c4a043` on velvet black `#0a0a0a` yields approximately 7.2:1 contrast ratio (passes AAA for normal text).
- Fashion red `#c41e1e` on silk white `#f5f0f0` yields approximately 5.1:1 contrast ratio (passes AA for normal text).
- Fashion red on velvet black yields approximately 4.7:1 (passes AA for normal text, use larger size for small text).
- Sketch gray `#8a8a8a` on silk white yields approximately 3.5:1 (fails AA for normal text, use only for large text or decorative).
- Mannequin silhouettes and fashion sketches as watermarks must be `opacity-[0.1]` or lower to avoid interfering with text readability.
- Velvet dark panels must contain light text (`#f5f0f0`) to maintain contrast. Never place dark text on dark velvet.
- Focus indicators must use gold `#c4a043` with generous offset to remain visible against both light and dark surfaces.
- Reduced motion: all sequin shimmer animations, spotlight fades, and silk gradient transitions must respect `prefers-reduced-motion: reduce`.
- Stitch detail borders used as interactive element outlines must have sufficient color contrast against their background.
- Runway spotlight cone content must maintain readable contrast even when the cone effect is visually dramatic.
