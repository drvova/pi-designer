---
name: juice-bar-ui
description: Build juice bar UI components (blender row, citrus press, green smoothie gradient, mason jar servings, wheatgrass shots, fruit pyramid display) with fresh fruit colors, clean surfaces, and the vibrant energy of a health-focused juice bar. Trigger this skill when the user asks for juice bar, smoothie shop, fresh juice, cold press, wheatgrass, mason jar drink, fruit display, blender, citrus press, green juice, or health juice bar interface.
---

# Juice Bar UI

Use this skill to design and implement vibrant, clean interfaces inspired by a health-focused juice bar: blender rows with colorful liquid gradients, citrus press SVG motifs, green smoothie gradient hero treatments, mason jar serving containers, wheatgrass shot small glasses, fruit pyramid display arrangements, cutting board wood surfaces, and the fresh vibrant energy of a bar where fruits are pressed and blended in real time.

## Non-Negotiable Foundations

- **Palette is fruit-fresh.** Every surface derives from the natural juice spectrum: orange juice warm, green smoothie verdant, berry purple deep, wheatgrass bright green, citrus yellow vibrant, clean off-white, and wood board natural. No muted or desaturated tones exist except the cutting board wood and glass transparency treatments.
- **Blender row is the primary product display.** Juices, smoothies, and blends are always presented in a row of cylindrical blender shapes with colorful liquid fill levels, evoking the active blending station.
- **Mason jar is the primary serving container.** Completed menu items and featured drinks are presented in mason jar silhouettes with visible liquid fill, condensation detail, and straw or garnish accent.
- **Green smoothie gradient is the hero treatment.** Full-bleed hero sections use a flowing gradient from deep green through yellow-green to citrus yellow, evoking the swirl of greens and fruits in a fresh blend.
- **Cutting board wood surface is the primary texture.** Any major background or panel carries a subtle wood-grain pattern on warm brown, evoking the prep surface where fruits are chopped and pressed.
- **Fruit pyramid display is the primary layout metaphor.** Product grids and feature showcases stack in a pyramid formation — wide at the bottom with featured items, narrowing to a single highlight at the top.
- **Wheatgrass bright green is the signature vitality accent.** Used for health badges, freshness indicators, wheatgrass shot icons, and energy labels. It signals health and vitality across the interface.
- **Citrus yellow is the energy accent.** Used for highlights, citrus press motifs, vitamin badges, and cheerful interactive states. It brings the sunshine energy of fresh citrus.
- **Typography blends clean modernity with organic warmth.** Display headings use a clean geometric or rounded sans-serif. Body text uses a friendly humanist sans-serif. The voice is energetic, fresh, and health-conscious, not clinical or sterile.
- **Citrus cross-section and leaf sprig appear as signature motifs.** At least one SVG citrus half-circle or green leaf sprig must be present per major section.

## Core Material Recipes

### 1) Blender Row Display

A row of cylindrical blender shapes with colorful liquid fill, representing the juice blending station.

```html
<div class="flex items-end gap-4 p-6">
  <!-- Blender 1: Orange juice -->
  <div class="relative w-16 h-28">
    <div class="absolute inset-0 bg-white/[0.15] backdrop-blur-sm rounded-t-lg border border-white/[0.25] border-b-0 overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#e08818] via-[#f0a020] to-[#f0c040] rounded-t-sm"/>
    </div>
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#e0e0d8] rounded-t-md border border-white/[0.3]"/>
    <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#c0c0b8] rounded-full border border-white/[0.2]"/>
  </div>
  <!-- Blender 2: Green smoothie -->
  <div class="relative w-16 h-28">
    <div class="absolute inset-0 bg-white/[0.15] backdrop-blur-sm rounded-t-lg border border-white/[0.25] border-b-0 overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0 h-[85%] bg-gradient-to-t from-[#2a6a1a] via-[#4a8a3a] to-[#60c040] rounded-t-sm"/>
    </div>
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#e0e0d8] rounded-t-md border border-white/[0.3]"/>
    <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#c0c0b8] rounded-full border border-white/[0.2]"/>
  </div>
</div>
```

### 2) Mason Jar Serving Glass

Mason jar silhouette with liquid fill, condensation detail, and optional straw — the completed drink presentation.

```html
<div class="relative w-20 h-28">
  <!-- Jar body -->
  <div class="absolute bottom-0 left-1 w-[calc(100%-8px)] h-[85%] bg-white/[0.12] backdrop-blur-sm border border-white/[0.2] rounded-b-xl overflow-hidden">
    <!-- Liquid fill -->
    <div class="absolute bottom-0 left-0 right-0 h-[75%] bg-gradient-to-t from-[#f0a020] to-[#f0c040]"/>
    <!-- Condensation droplets -->
    <div class="absolute top-2 left-2 w-1 h-2 bg-white/30 rounded-full"/>
    <div class="absolute top-4 right-3 w-0.5 h-1.5 bg-white/25 rounded-full"/>
    <div class="absolute top-6 left-4 w-1 h-1 bg-white/20 rounded-full"/>
  </div>
  <!-- Jar rim -->
  <div class="absolute top-[12%] left-0 w-full h-3 bg-white/[0.2] rounded-sm border border-white/[0.25]"/>
  <!-- Lid -->
  <div class="absolute top-[6%] left-0.5 w-[calc(100%-4px)] h-3 bg-[#e8e8e0] rounded-t-md border border-white/[0.3]"/>
  <!-- Straw -->
  <div class="absolute top-0 right-4 w-1.5 h-20 bg-[#4a8a3a] rounded-full rotate-3 origin-bottom"/>
</div>
```

### 3) Wheatgrass Shot Glass

Small shot glass with bright green wheatgrass liquid — the concentrated health shot.

- Small glass: `bg-white/[0.15] backdrop-blur-sm border border-white/[0.25] rounded-b-lg overflow-hidden h-16 w-8 mx-auto`.
- Wheatgrass fill: `absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-b from-[#80d060] to-[#60c040] rounded-b-md`.
- Glass rim: `absolute top-2 left-0 w-full h-1 bg-white/[0.25] rounded-full`.
- Optional garnish: tiny leaf SVG at rim — `<path d="M14 2 Q16 0 18 2 Q16 4 14 2Z" fill="#4a8a3a"/>`.

### 4) Citrus Press SVG Motif

Citrus press machine silhouette used as a section divider, header accent, or interactive motif.

```html
<div class="relative w-24 h-20">
  <svg viewBox="0 0 96 80" fill="none" class="w-full h-full">
    <!-- Press base -->
    <rect x="20" y="60" width="56" height="8" rx="4" fill="#a08050" opacity="0.8"/>
    <!-- Press arm -->
    <path d="M48 10 L48 50" stroke="#8a8a80" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 10 L66 10" stroke="#8a8a80" stroke-width="3" stroke-linecap="round"/>
    <!-- Press cone -->
    <path d="M40 44 L48 58 L56 44" stroke="#d49050" stroke-width="2" fill="#d49050" opacity="0.6"/>
    <!-- Handle grip -->
    <circle cx="30" cy="10" r="4" fill="#6a6a60" opacity="0.8"/>
    <circle cx="66" cy="10" r="4" fill="#6a6a60" opacity="0.8"/>
    <!-- Juice drops -->
    <circle cx="46" cy="64" r="1.5" fill="#f0a020" opacity="0.7"/>
    <circle cx="50" cy="66" r="1" fill="#f0a020" opacity="0.5"/>
  </svg>
</div>
```

### 5) Fruit Pyramid Display

Stacked fruit shapes arranged in a pyramid formation for product showcases and featured items.

- Pyramid container: `relative` with three tiers:
  - Bottom tier (3 items): `flex gap-3 justify-center` with each item `w-20 h-20 rounded-full` showing a fruit circle.
  - Middle tier (2 items): `flex gap-3 justify-center -mt-4` with each item `w-16 h-16 rounded-full`.
  - Top tier (1 item): `flex justify-center -mt-3` with item `w-14 h-14 rounded-full` showing the hero fruit.
- Each fruit circle: `bg-gradient-to-br from-[fruit-light] to-[fruit-dark] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-2 border-white/30`.
- Fruit colors: orange `#f0a020` to `#e08818`, strawberry `#c41e1e` to `#8a1010`, blueberry `#4a2a8a` to `#2a1a5a`, kiwi `#6a9a30` to `#4a7a20`, mango `#f0c040` to `#e0a020`.

### 6) Cutting Board Wood Surface

Warm wood-grain texture for background panels and content surfaces, evoking the prep counter.

- `bg-[#a08050] relative overflow-hidden` with wood grain: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_16px,rgba(0,0,0,0.04)_16px,rgba(0,0,0,0.04)_17px)]` for vertical grain lines, combined with subtle knot pattern: `bg-[radial-gradient(ellipse_8px_6px_at_30%_40%,rgba(0,0,0,0.06)_0%,transparent_100%)] bg-[length:48px_48px]` for scattered wood knots.

### 7) Green Smoothie Gradient Hero

Flowing gradient from deep green through yellow-green to citrus yellow — the signature hero treatment.

- `bg-gradient-to-br from-[#2a6a1a] via-[#4a8a3a] to-[#f0d020]` with swirl overlay: `bg-[radial-gradient(ellipse_at_30%_70%,rgba(96,192,64,0.3)_0%,transparent_60%)]` for the blended swirl effect, and light beam: `bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,transparent_50%)]` for a fresh morning light angle.

### 8) Citrus Cross-Section Motif

Half-circle citrus slice used as a decorative accent, section divider, or background element.

```html
<div class="relative w-12 h-6 overflow-hidden">
  <svg viewBox="0 0 48 24" fill="none" class="w-full h-full">
    <path d="M0 24 A24 24 0 0 1 48 24" fill="#f0d020" stroke="#e0b010" stroke-width="1"/>
    <path d="M4 24 A20 20 0 0 1 44 24" fill="#f0e060" opacity="0.6"/>
    <!-- Segment lines -->
    <line x1="24" y1="24" x2="12" y2="4" stroke="#f0a020" stroke-width="0.5" opacity="0.6"/>
    <line x1="24" y1="24" x2="24" y2="1" stroke="#f0a020" stroke-width="0.5" opacity="0.6"/>
    <line x1="24" y1="24" x2="36" y2="4" stroke="#f0a020" stroke-width="0.5" opacity="0.6"/>
    <!-- Center dot -->
    <circle cx="24" cy="24" r="2" fill="#f0d020" stroke="#e0b010" stroke-width="0.5"/>
  </svg>
</div>
```

### 9) Juice Bar CTA Button

Fresh vibrant action button with a juice-inspired gradient.

- `bg-gradient-to-b from-[#60c040] to-[#3a8a2a] text-white font-semibold rounded-full px-8 py-3 shadow-[0_3px_0_#2a6a1a,inset_0_1px_0_rgba(255,255,255,0.3)] hover:translate-y-1 hover:shadow-[0_1px_0_#2a6a1a] active:shadow-none transition-all duration-200`.
- Alternative orange variant: `bg-gradient-to-b from-[#f0c040] to-[#e08818] text-[#3a2a10] font-semibold rounded-full px-8 py-3 shadow-[0_3px_0_#b07010,inset_0_1px_0_rgba(255,255,255,0.4)]`.

### 10) Fresh Badge / Health Tag

Small health or freshness indicator badge used across product cards.

- `bg-[#60c040] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-[0_1px_3px_rgba(96,192,64,0.4)]` for standard wheatgrass-green health badge.
- `bg-[#f0d020] text-[#3a2a10] text-xs font-bold px-2 py-0.5 rounded-full` for citrus-yellow energy/vitamin badge.
- `bg-[#6a2a6a] text-white text-xs font-bold px-2 py-0.5 rounded-full` for berry-purple antioxidant badge.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Orange Juice | `#f0a020` | Primary warm fruit tone, orange smoothies, warm accents |
| Green Smoothie | `#4a8a3a` | Primary green, smoothie fills, green hero backgrounds |
| Berry Purple | `#6a2a6a` | Deep accent, berry smoothies, antioxidant badges |
| Wheatgrass Bright Green | `#60c040` | Health vitality accent, wheatgrass shots, CTAs, badges |
| Citrus Yellow | `#f0d020` | Energy accent, citrus highlights, vitamin badges, accents |
| Clean White | `#f5f5f0` | Light backgrounds, text on dark, clean surface base |
| Wood Board | `#a08050` | Warm wood surfaces, cutting board panels, natural texture |
| Glass Clear | `bg-white/[0.15]` | Translucent containers, blender glass, mason jar bodies |
| Green Dark | `#2a6a1a` | Deep green for gradients, shadow stops, pressed states |
| Orange Dark | `#e08818` | Deep orange for gradients, shadow stops, warm depth |
| Berry Light | `#a040a0` | Lighter purple for gradient stops, hover states |
| Wood Dark | `#705030` | Deep wood for text on light surfaces, dark wood grain |

Rules: The juice bar palette is vibrant and natural — every color is drawn from actual fruit, vegetable, or plant tones. The palette spans from bright citrus yellow through fresh green to deep berry purple, with wood board as the natural neutral. No neon or artificially saturated colors — the vibrancy comes from the natural fruit spectrum. Clean white is the lightest background, not pure white. Wood board is the primary neutral; it is warm and natural, never gray or cool. Glass clear is not a fixed hex but a translucent treatment that adapts to whatever content sits behind it.

## Typography Recommendations

- **Display:** Poppins, Nunito Sans, DM Sans (clean geometric or rounded sans-serif, modern and energetic).
- **Body:** Inter, Source Sans 3 (clean humanist sans-serif, highly legible, friendly).
- **Accent:** Fredoka One, Baloo 2 (rounded, playful, for featured items, specials, or call-outs).
- **Labels:** `font-bold text-xs tracking-wider uppercase` with wheatgrass green color (energetic, direct, health-focused).
- **Nutrition/Stats:** DM Mono, Space Mono (clean monospace for nutritional data, calories, vitamins — clinical precision for health data).

## Component Architecture Pattern

Every juice bar component follows a blender-to-mason-jar architecture:

```
[Green Smoothie Gradient Hero]
  [Blender Row Display]
  [Fruit Pyramid Showcase]
[Cutting Board Wood Panel]
  [Mason Jar Menu Grid]
    [Wheatgrass Shot Accents]
    [Fresh Badge / Health Tags]
  [Citrus Press Divider]
  [CTA Section]
```

- **Background:** Green smoothie gradient fills the hero section with fresh blended energy.
- **Blender row:** Cylindrical blender shapes showcase active blends and featured drinks.
- **Fruit pyramid:** Stacked fruit circles display ingredients and product variety.
- **Cutting board panel:** Wood-grain surface holds the menu grid and pricing content.
- **Mason jar grid:** Completed drink presentations in jar silhouettes with liquid fills.
- **Wheatgrass accents:** Small shot glasses and health badges punctuate the menu.
- **Citrus divider:** Cross-section SVG or press silhouette separates sections.
- **CTA bar:** Fresh green gradient button at the bottom.

## Interaction Rules

- **Hover on blender row items:** Increase liquid fill height by 5-10% with a smooth transition — `hover:[&>div>div]:h-[95%] transition-all duration-500` — the blender fills as the user focuses attention.
- **Hover on mason jar cards:** Add condensation droplet opacity and slight scale — `hover:scale-105 hover:shadow-[0_8px_24px_rgba(74,138,58,0.2)]` — the jar becomes fresher and more prominent.
- **Hover on fruit pyramid circles:** Individual fruit circles bounce slightly — `hover:scale-110 hover:-translate-y-1 transition-transform duration-200` — each fruit lifts off the board.
- **Hover on wheatgrass shot glasses:** Brighten the green fill — `hover:brightness-110` and add a subtle green glow — `hover:shadow-[0_0_12px_rgba(96,192,64,0.4)]`.
- **Hover on juice CTA buttons:** Translate down 1px and reduce shadow — `hover:translate-y-1 hover:shadow-[0_1px_0_#2a6a1a]` — the button presses like a juicer lever.
- **Hover on citrus cross-section motifs:** Rotate 15 degrees — `hover:rotate-15 transition-transform duration-300` — the citrus slice spins playfully.
- **Page load:** Blender row items stagger in from bottom with 120ms delay — each blender slides into place one by one. Liquid fills animate from 0% to target height over 800ms with ease-out — the blenders fill in sequence.
- **Scroll reveal:** Fruit pyramid circles pop in with scale from 0 to 1.0 and slight rotation — `scale-0 rotate-[-10deg]` transitioning to `scale-100 rotate-0` over 400ms with elastic ease, staggered bottom-to-top through the pyramid.
- **Mason jar liquid fill:** On initial view, liquid level animates from 0% to target fill height over 1000ms — the jar fills with fresh juice.
- **Focus states:** `focus:ring-4 focus:ring-[#60c040]/40` — bright green vitality glow ring for keyboard navigation.
- **Blender liquid wiggle:** Subtle CSS animation on liquid surface — `@keyframes liquidWiggle { 0%,100% { transform: translateX(0) } 50% { transform: translateX(2px) } }` applied to the liquid gradient for a gentle sloshing effect.

## Reusable Tailwind Tokens

- **Orange juice bg:** `bg-[#f0a020]`
- **Green smoothie bg:** `bg-[#4a8a3a]`
- **Berry purple bg:** `bg-[#6a2a6a]`
- **Wheatgrass bright green bg:** `bg-[#60c040]`
- **Citrus yellow bg:** `bg-[#f0d020]`
- **Clean white bg:** `bg-[#f5f5f0]`
- **Wood board bg:** `bg-[#a08050]`
- **Green dark:** `bg-[#2a6a1a]`
- **Orange dark:** `bg-[#e08818]`
- **Berry light:** `bg-[#a040a0]`
- **Wood dark text:** `text-[#705030]`
- **Glass clear panel:** `bg-white/[0.15] backdrop-blur-sm border border-white/[0.25]`
- **Green smoothie hero:** `bg-gradient-to-br from-[#2a6a1a] via-[#4a8a3a] to-[#f0d020]`
- **Blender cylinder:** `bg-white/[0.15] backdrop-blur-sm rounded-t-lg border border-white/[0.25] border-b-0`
- **Mason jar body:** `bg-white/[0.12] backdrop-blur-sm border border-white/[0.2] rounded-b-xl`
- **Wheatgrass shot glass:** `bg-white/[0.15] backdrop-blur-sm border border-white/[0.25] rounded-b-lg h-16 w-8`
- **Cutting board wood:** `bg-[#a08050]` with grain: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_16px,rgba(0,0,0,0.04)_16px,rgba(0,0,0,0.04)_17px)]`
- **Wood knot pattern:** `bg-[radial-gradient(ellipse_8px_6px_at_30%_40%,rgba(0,0,0,0.06)_0%,transparent_100%)] bg-[length:48px_48px]`
- **Fresh green CTA:** `bg-gradient-to-b from-[#60c040] to-[#3a8a2a] text-white font-semibold rounded-full px-8 py-3 shadow-[0_3px_0_#2a6a1a]`
- **Orange CTA variant:** `bg-gradient-to-b from-[#f0c040] to-[#e08818] text-[#3a2a10] font-semibold rounded-full px-8 py-3 shadow-[0_3px_0_#b07010]`
- **Health badge green:** `bg-[#60c040] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-[0_1px_3px_rgba(96,192,64,0.4)]`
- **Vitamin badge yellow:** `bg-[#f0d020] text-[#3a2a10] text-xs font-bold px-2 py-0.5 rounded-full`
- **Antioxidant badge purple:** `bg-[#6a2a6a] text-white text-xs font-bold px-2 py-0.5 rounded-full`
- **Green focus ring:** `focus:ring-4 focus:ring-[#60c040]/40`
- **Fruit circle base:** `rounded-full border-2 border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.15)]`
- **Liquid wiggle animation:** `animate-[liquidWiggle_3s_ease-in-out_infinite]`

## Quality Checklist

- Palette is fruit-fresh (orange juice, green smoothie, berry purple, wheatgrass green, citrus yellow, clean white, wood board).
- Cutting board wood-grain texture appears on at least one major surface per page.
- Blender row display is used for the primary product showcase.
- Mason jar silhouette is used for completed drink presentations.
- Green smoothie gradient fills the hero section.
- Wheatgrass bright green appears on health badges, CTAs, or vitality accents.
- Citrus cross-section or citrus press SVG appears per major section.
- Fruit pyramid display is used for ingredient or product variety showcases.
- Typography uses clean geometric sans-serif for display headings.
- Condensation droplet detail appears on mason jar containers.
- The overall aesthetic reads as a vibrant fresh juice bar, not a commercial fast-food drink station.
- The palette never reaches cool or desaturated tones — everything is vivid and fruit-natural.
- Green CTA buttons have the characteristic 3D press effect.
- Blender row items have visible liquid fill with color gradients matching actual juice colors.

## Anti-Patterns

- Cool-toned or desaturated palettes (juice bar is vibrant fruit-fresh, never muted).
- Pure white or pure black backgrounds (lightest is clean white, darkest is wood dark or berry purple).
- Sans-serif-only without rounded or playful accent font (display headings need clean energy, accent items need organic warmth).
- Missing cutting board wood texture (the wood surface is the natural grounding element).
- Overusing berry purple (it is the deep accent for berry items and antioxidants, not a primary surface color — max 10% of any surface).
- Flat solid-color panels without texture (every surface needs wood grain, glass blur, fruit gradient, or condensation depth).
- Missing blender row or mason jar treatment (these containers are the product-showcase pattern).
- Industrial or mechanical aesthetic (juice bar is fresh and natural, not factory-produced).
- Muted, pastel, or artificially neon color accents (vibrancy comes from the natural fruit spectrum, not from artificial saturation).
- Missing citrus or leaf motif in the view (the signature shapes must appear).
- Dark moody atmospheres (juice bar is bright, fresh, and energetic, not evening or moody).
- Clinical or sterile typography (energetic and health-focused, not hospital-clean).
- Dense heavy layouts (juice bar aesthetic is open, clean, and airy with breathing room like a bright health-focused cafe).
- Using glass jar shapes without liquid fill (an empty jar reads as incomplete — always show the vibrant juice color).
- Ignoring the condensation detail on jars and glasses (the fresh cold-bead detail is the signature tactile element).

## Accessibility Considerations

- Clean white `#f5f5f0` backgrounds with wood dark `#705030` text provide good contrast — verify WCAG AA minimum (ratio >= 4.5:1 for body text). Clean white against wood dark yields approximately 5.8:1, meeting AA.
- Wood board `#a08050` panels require light text (`#f5f5f0`) for contrast — verify ratio >= 4.5:1 (a08050 against f5f5f0 yields approximately 3.1:1, which fails AA for body text — use wood dark `#705030` for text on light backgrounds instead, or lighten the wood panel with a `bg-[#c8a870]` variant for text-heavy sections).
- Green smoothie gradient backgrounds may shift contrast for overlaid text — add `text-shadow: 0 1px 3px rgba(0,0,0,0.4)` on text placed over the gradient for consistent readability across the gradient transition.
- Focus states: `focus:ring-4 focus:ring-[#60c040]/40` for visible green vitality keyboard indicator on all interactive elements, with `focus-visible` to avoid ring flash on mouse click.
- Green CTA buttons must use pure white text `#ffffff` for sufficient contrast against `#60c040` to `#3a8a2a` gradient (white against wheatgrass green yields approximately 3.5:1 — for small text, use dark text `#1a3a10` instead which yields 6.2:1, or increase button text to `text-base font-semibold` which qualifies as large text at 3:1 minimum).
- Orange CTA variant buttons use `#3a2a10` dark text against the orange gradient for adequate contrast.
- Decorative citrus cross-section SVGs, leaf sprigs, blender row elements, and fruit pyramid circles must be `aria-hidden="true"` when purely decorative.
- Touch targets: all buttons, mason jar cards, blender row items, and interactive fruit circles must meet 44x44px minimum — blender row items should have at least 48px spacing between centers.
- Blender row with liquid wiggle animation should respect `prefers-reduced-motion: reduce` — disable the liquidWiggle keyframe animation when reduced motion is preferred.
- Fruit pyramid stacked layout may cause screen readers to read items in a non-logical order — use `aria-label` on the pyramid container to describe the arrangement, and ensure individual fruit items have descriptive labels like "Orange juice smoothie" rather than just "orange".
- Mason jar condensation droplets are purely decorative and must not be conveyed as meaningful content — they are `aria-hidden="true"`.
- Green smoothie gradient hero should not carry interactive content that shifts during the gradient animation — keep the gradient static to avoid motion-triggered vestibular discomfort.
- Font sizing: rounded playful accent fonts (Fredoka One, Baloo 2) may have lower legibility at small sizes — use accent fonts only at `text-lg` or larger, and body text in standard sans-serif never below `text-sm` (14px).
- Color should never be the sole indicator of juice type or health category — always pair color badges with text labels (e.g., "Antioxidant" alongside the purple badge, not just a purple dot).
