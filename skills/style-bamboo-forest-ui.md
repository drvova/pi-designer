---
name: bamboo-forest-ui
description: Build bamboo forest UI components (tall green culms, filtered sunlight, stone path, wind chimes, temple gate, misty depth, zen calm) with vertical bamboo line patterns, dappled light effects, and the serene depth of a Japanese bamboo grove. Trigger this skill when the user asks for bamboo forest design, bamboo grove aesthetic, vertical green culm lines, dappled sunlight overlay, stone stepping path, wind chime decoration, torii gate accent, misty depth layers, zen garden calm, Japanese forest interface, or bamboo-inspired UI.
---

# Bamboo Forest UI

Use this skill to design and implement interfaces inspired by the Japanese bamboo grove: impossibly tall green culms rising in dense vertical columns, warm sunlight filtering through the canopy in scattered dappled spots, mossy stone stepping paths winding between the stalks, delicate wind chimes hanging from low branches, the vermilion arch of a torii gate visible through the mist, layers of atmospheric depth fading into white-green haze, and the profound calm of standing alone in a bamboo forest.

## Non-Negotiable Foundations

- Bamboo Forest UI simulates the serene Japanese bamboo grove: tall green culms rising vertically with visible node joints, warm dappled sunlight filtering through the leafy canopy, irregular stone stepping paths, delicate wind chime accents, torii gate arches, and atmospheric mist layers that recede into depth.
- The vertical bamboo culm line pattern is the SIGNATURE background texture — repeating thin green vertical lines of varying widths and opacities, punctuated by small node joints, creating the dense vertical rhythm of a real bamboo grove. Every primary surface should reference this vertical rhythm.
- The dappled sunlight overlay is the signature lighting treatment — scattered warm yellow-white light spots of varying sizes and opacities, as if sunlight is breaking through the bamboo canopy above. This filter is applied to hero sections and primary content areas.
- The stone stepping path is the signature navigation metaphor — irregular rounded stone shapes arranged in a meandering path, used for navigation items, breadcrumbs, and sequential step indicators.
- Wind chime decorations are the signature ambient accent — small hanging linear elements with a weight at the bottom, gently swaying, used as decorative dividers, loading indicators, and header ornaments.
- The torii gate arch is the signature framing element — a simple vermilion gate silhouette used to frame important content sections, create entry points, and mark transitions between areas.
- Mist depth layers are the signature spatial treatment — progressive fading from clear foreground content to increasingly translucent and desaturated background layers, creating the illusion of deep forest depth.
- Bamboo leaf scatter is the signature natural decoration — small elongated leaf shapes drifting or resting, used as corner accents, section markers, and organic decorative elements.
- Colors are bamboo green, bamboo dark, bamboo yellow-green, warm sunlight, stone gray, mist white-translucent, torii red, and cool shadow — the palette of a Japanese bamboo grove at midday.
- The aesthetic is vertical, serene, filtered, and deeply calm — a place where the only sound is wind through bamboo and the occasional chime.

## Core Material Recipes

### 1) Bamboo Culm Vertical Line Pattern

The signature dense vertical bamboo grove background for primary surfaces and hero sections.

- Base forest: `bg-gradient-to-b from-[#2a4a22] via-[#3a5a2a] to-[#1a3a12] relative overflow-hidden`.
- Primary culms (thick bamboo stalks): `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(90,138,58,0.35)_18px,rgba(90,138,58,0.35)_22px,transparent_22px,transparent_40px,rgba(58,90,42,0.25)_40px,rgba(58,90,42,0.25)_43px,transparent_43px,transparent_70px,rgba(90,138,58,0.2)_70px,rgba(90,138,58,0.2)_74px,transparent_74px,transparent_110px)]`.
- Secondary culms (thinner background stalks): `after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_28px,rgba(138,170,74,0.12)_28px,rgba(138,170,74,0.12)_29px,transparent_29px,transparent_55px,rgba(90,138,58,0.08)_55px,rgba(90,138,58,0.08)_56px,transparent_56px,transparent_90px)]`.
- Node joints (horizontal marks on culms): child element `absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_38px,rgba(58,90,42,0.3)_38px,rgba(58,90,42,0.3)_40px,transparent_40px,transparent_80px)] mix-blend-multiply` (horizontal band pattern that intersects the vertical culms at node points).
- Bark texture on individual culms: `bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px)]` (subtle vertical striations on each stalk).
- Ground moss fade: `bg-gradient-to-t from-[#1a2a12] via-[#2a4a1a]/80 to-transparent h-24 absolute bottom-0 inset-x-0` (mossy ground fading upward).

### 2) Filtered Sunlight Dappled Overlay

Warm sunlight spots breaking through the bamboo canopy — applied over forest backgrounds.

- Light spot base: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,245,208,0.15)_0%,transparent_40%)] bg-[radial-gradient(ellipse_at_70%_35%,rgba(255,245,208,0.1)_0%,transparent_35%)] bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,245,208,0.08)_0%,transparent_30%)]`.
- Large warm spot: `w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,245,208,0.12)_0%,transparent_70%)] blur-sm absolute top-[10%] left-[20%]`.
- Small bright spots: `w-16 h-16 rounded-full bg-[radial-gradient(circle,rgba(255,245,208,0.2)_0%,transparent_70%)]` positioned at various scattered locations.
- Warm shaft: `absolute top-0 left-[30%] w-24 h-full bg-[linear-gradient(180deg,rgba(255,245,208,0.08)_0%,rgba(255,245,208,0.04)_50%,transparent_100%)] [clip-path:polygon(30%_0,70%_0,100%_100%,0%_100%)]` (diagonal light shaft cutting through the grove).
- Leaf shadow patterns: `bg-[radial-gradient(ellipse_at_40%_30%,rgba(0,0,0,0.06)_0%,transparent_25%)] bg-[radial-gradient(ellipse_at_65%_55%,rgba(0,0,0,0.04)_0%,transparent_20%)]` (leaf shadows mixing with the light spots).
- Container: `relative overflow-hidden mix-blend-screen` (screen blending so light adds over the dark bamboo).

Dappled shift keyframes:
```css
@keyframes dappled-shift {
  0%, 100% { opacity: 1; transform: translateX(0) translateY(0); }
  25% { opacity: 0.85; transform: translateX(2px) translateY(-1px); }
  50% { opacity: 1; transform: translateX(-1px) translateY(1px); }
  75% { opacity: 0.9; transform: translateX(1px) translateY(0); }
}
```

### 3) Stone Stepping Path

Irregular rounded stone shapes for navigation, sequential steps, and breadcrumbs.

- Stone body: `w-14 h-10 bg-gradient-to-br from-[#8a8a7a] via-[#9a9a8a] to-[#7a7a6a] rounded-[40%_55%_45%_60%] shadow-[0_3px_6px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.15)] relative`.
- Stone surface texture: `before:absolute before:inset-1 before:bg-[radial-gradient(ellipse_at_40%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)] before:rounded-[inherit]`.
- Moss patch: `after:absolute after:bottom-1 after:right-1 after:w-3 after:h-2 after:bg-[#5a8a3a] after:rounded-full after:opacity-40`.
- Active stone: `shadow-[0_3px_6px_rgba(0,0,0,0.3),0_0_12px_rgba(90,138,58,0.3)] ring-2 ring-[#8aaa4a]/40`.
- Inactive stone: `opacity-60 grayscale-[30%]`.
- Path layout: `flex items-center gap-6` with stones slightly offset vertically to create the irregular stepping path.
- Stone variant shapes (for variety): `rounded-[55%_40%_60%_45%]`, `rounded-[45%_50%_40%_55%]`, `rounded-[50%_60%_55%_40%]` (alternating irregular rounding).
- Ground between stones: `bg-[radial-gradient(ellipse,rgba(26,42,18,0.6)_0%,transparent_80%)]` (mossy dark ground visible between stepping stones).

### 4) Wind Chime Decoration

Small hanging linear elements with a weight at the bottom — decorative dividers and ambient accents.

- Chime string: `w-px h-8 bg-[#8aaa4a]/60 mx-auto` (thin hanging line).
- Chime rod: `w-1 h-6 bg-gradient-to-b from-[#8a8a7a] to-[#6a6a5a] rounded-b-full shadow-[1px_0_2px_rgba(0,0,0,0.2)]` (small metal rod).
- Chime catcher: `w-3 h-2 bg-gradient-to-b from-[#5a8a3a] to-[#3a5a2a] rounded-b-full` (leaf-shaped wind catcher at bottom).
- Chime horizontal bar: `w-12 h-0.5 bg-[#8a8a7a] rounded-full` (top connecting bar).
- Full chime unit: a flex column with string, horizontal bar, and 3-5 hanging rods of varying lengths and slight position offsets.
- Chime group: `flex items-start gap-2 justify-center` wrapping multiple chime units together.
- Gentle sway animation for each rod.

Chime sway keyframes:
```css
@keyframes chime-sway {
  0%, 100% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(1.5deg) translateX(1px); }
  75% { transform: rotate(-1deg) translateX(-0.5px); }
}
```

### 5) Torii Gate Accent Frame

Vermilion gate arch to frame important content sections and mark transitions.

- Gate post left: `w-3 h-20 bg-[#c44020] rounded-t-sm shadow-[inset_-1px_0_2px_rgba(0,0,0,0.2)]`.
- Gate post right: `w-3 h-20 bg-[#c44020] rounded-t-sm shadow-[inset_1px_0_2px_rgba(0,0,0,0.2)]`.
- Top beam (kasagi): `w-20 h-3 bg-[#c44020] rounded-sm shadow-[0_-2px_4px_rgba(0,0,0,0.15)] relative` (slightly wider than the posts, with a subtle overhang).
- Lower beam (nuki): `w-16 h-2 bg-[#c44020] shadow-[0_1px_2px_rgba(0,0,0,0.15)]` (thinner beam connecting the posts, positioned below the top beam).
- Gate frame for content: `border-2 border-[#c44020]/30 rounded-t-lg relative before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-2 before:bg-[#c44020] before:rounded-sm after:absolute after:-top-1 after:left-0 after:right-0 after:h-1 after:bg-[#c44020]` (content container framed by a simplified torii arch).
- Gate with glow: `shadow-[0_0_20px_rgba(196,64,32,0.15)]`.
- Small torii icon (for nav markers): `w-6 h-6` miniature SVG version for bullet points and list markers.
- Vermilion texture: `bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_5px)]` (subtle wood grain on the vermilion beams).

### 6) Mist Depth Layer System

Progressive opacity and desaturation layers creating atmospheric forest depth.

- Foreground (clear): content at `opacity-100 saturate-100` (normal rendering).
- Mid-ground: `opacity-70 saturate-75 blur-[1px] relative` (slight fade and desaturation).
- Background: `opacity-40 saturate-50 blur-[2px]` (heavy fade, nearly ghostly).
- Far background: `opacity-20 saturate-30 blur-[3px]` (barely visible, pure atmosphere).
- Mist overlay between layers: `bg-gradient-to-t from-[rgba(200,210,195,0.15)] via-[rgba(200,210,195,0.08)] to-transparent h-32` (horizontal mist band).
- Rising mist: `bg-gradient-to-b from-transparent via-[rgba(200,210,195,0.1)] to-[rgba(200,210,195,0.05)]` (mist rising from the ground).
- Mist scroll: layers shift at different speeds to create parallax depth.
- Container: `perspective-1000` parent with `transform-style-preserve-3d` children for proper depth stacking.

Mist drift keyframes:
```css
@keyframes mist-drift {
  0% { opacity: 0.08; transform: translateX(0); }
  50% { opacity: 0.12; transform: translateX(15px); }
  100% { opacity: 0.08; transform: translateX(0); }
}
```

### 7) Bamboo Leaf Scatter Accent

Small elongated bamboo leaf shapes for corner accents, section markers, and organic decoration.

- Single leaf: `<svg viewBox="0 0 30 8" class="w-8 h-2"><path d="M0 4 Q8 0 15 1 Q22 2 30 4 Q22 6 15 7 Q8 8 0 4Z" fill="#5a8a3a" opacity="0.6"/></svg>` (elongated pointed oval).
- Leaf cluster: 3-5 leaves at varying angles and opacities, grouped loosely.
- Leaf scatter layout: `absolute top-4 right-4 rotate-12 opacity-40` (corner decoration).
- Floating leaf: leaves positioned along a path with staggered animation.
- Fallen leaf: `opacity-30 rotate-45` resting on surfaces.
- Leaf colors: bamboo green `#5a8a3a`, yellow-green `#8aaa4a`, dark `#3a5a2a` at varying opacities.

Leaf fall keyframes:
```css
@keyframes leaf-fall {
  0% { transform: translateY(-10px) rotate(-5deg) translateX(0); opacity: 0.6; }
  25% { transform: translateY(5px) rotate(8deg) translateX(10px); }
  50% { transform: translateY(15px) rotate(-3deg) translateX(-5px); opacity: 0.4; }
  100% { transform: translateY(40px) rotate(15deg) translateX(8px); opacity: 0; }
}
```

### 8) Zen Calm Content Card

A serene content container that evokes the clear space within a bamboo grove.

- Card surface: `bg-[rgba(200,210,195,0.08)] backdrop-blur-sm border border-[rgba(90,138,58,0.2)] rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)]`.
- Inner glow: `shadow-[inset_0_0_30px_rgba(255,245,208,0.03)]` (subtle warmth inside).
- Top border accent: `before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#8aaa4a]/40 before:to-transparent`.
- Mist bottom edge: `after:absolute after:bottom-0 after:inset-x-0 after:h-8 after:bg-gradient-to-t after:from-[rgba(200,210,195,0.05)] after:to-transparent after:rounded-b-lg`.
- Hover state: `hover:bg-[rgba(200,210,195,0.12)] hover:border-[rgba(90,138,58,0.35)] transition-all duration-500`.
- Card with stone base: `pb-2 pt-6 relative` with a small stone stepping element at the bottom center.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Bamboo Green | `#5a8a3a` | Primary accent, culm highlights, leaf color, active states |
| Bamboo Dark | `#3a5a2a` | Forest surface, deep culm shadows, moss, dark backgrounds |
| Bamboo Yellow-Green | `#8aaa4a` | Secondary accent, new leaf color, hover highlights, light edges |
| Sunlight Warm | `#fff5d0` | Dappled light spots, warm glow accents, text on dark backgrounds |
| Stone Gray | `#8a8a7a` | Stepping stones, chime rods, neutral structural elements |
| Stone Dark | `#6a6a5a` | Stone shadows, chime rod gradients, muted structural details |
| Mist White-Translucent | `rgba(200,210,195,0.08-0.15)` | Atmospheric depth layers, mist bands, background blur |
| Torii Red | `#c44020` | Torii gate beams, accent framing, vermilion highlights |
| Shadow Cool | `#1a2a1a` | Deepest backgrounds, ground level, dense shadow areas |
| Canopy Dark | `#2a4a22` | Mid-level darks, canopy depth, gradient transitions |
| Sunlight Gold | `#e8d890` | Warmer dappled spots, bamboo node highlights |
| Moss Bright | `#4a7a30` | Fresh moss, ground cover, living texture |

Rules: Bamboo greens dominate — every primary background references the vertical culm pattern in some shade of green. Warm sunlight provides the only light source, breaking through the canopy in scattered spots. Stone gray is reserved for stepping stones and structural metal elements. Torii red is used sparingly as a sacred accent — only for gate frames, section markers, and important highlights. Mist white-translucent creates depth without adding brightness. Shadow cool is for the deepest ground-level areas where no light reaches. The palette balances the living green of bamboo with warm filtered sunlight and cool atmospheric mist.

## Typography Recommendations

Bamboo Forest typography combines vertical rhythm with zen stillness:

- **Display headings:** Zen Antique, Zen Kaku Gothic Antique, or Noto Serif JP (serif with Japanese zen character).
- **Body text:** Zen Kaku Gothic New, Noto Sans JP, or Inter at `font-normal` (clean, breathable readability).
- **Accent text:** Shippori Mincho (calligraphic elegance for quotes and highlights).
- **Chime labels:** `font-mono text-xs tracking-widest uppercase text-[#8aaa4a]` (delicate monospace for small labels).
- **Numbers:** DM Mono or IBM Plex Mono (technical but warm monospace for data).
- **Stone path step labels:** `font-serif text-sm text-[#8a8a7a]` (stone gray serif on stepping stones).
- **Torii gate section titles:** `font-serif text-lg text-[#c44020] tracking-wide` (vermilion serif for sacred section headers).
- Text on bamboo dark backgrounds should use sunlight warm (`#fff5d0`) or mist white for contrast.
- Text on mist/light backgrounds should use bamboo dark (`#3a5a2a`) for depth.
- Typography should feel spacious, vertical, and breathing — generous line-height (`leading-relaxed` or `leading-loose`).
- Avoid heavy bold weights — the forest is calm, not shouting. Use `font-normal` or `font-medium` at most.

## Component Architecture Pattern

1. Bamboo culm vertical line pattern as the primary background surface (dense green vertical stalks with node joints, establishing the grove immediately).
2. Filtered sunlight dappled overlay washing across the layout (warm scattered light spots breaking through the canopy).
3. Mist depth layers creating atmospheric perspective (progressive opacity and blur from foreground to background).
4. Stone stepping path as the primary navigation/progress element (irregular stones arranged in a meandering sequence).
5. Torii gate frame marking major section transitions (vermilion arch framing content entry points).
6. Wind chime decorations as dividers and ambient accents (hanging rods swaying gently between sections).
7. Zen calm content cards for content containers (translucent glass-like panels with mist edges).
8. Bamboo leaf scatter as corner and section decorations (falling and resting leaf accents).
9. Rising mist at section boundaries (horizontal mist bands separating content areas).
10. Ground moss fade at page bottom (dark mossy gradient closing the layout).

## Interaction Rules

- Default state: the grove is alive and breathing — sunlight gently shifts, leaves drift slowly, chimes sway in an unfelt breeze.
- Hover (stone path): stone brightens slightly and gains a subtle green glow, as if energized by presence.
  - `hover:opacity-100 hover:shadow-[0_3px_6px_rgba(0,0,0,0.3),0_0_8px_rgba(90,138,58,0.2)] transition-all duration-500`.
- Hover (content card): card mist edge deepens and border brightens, like mist thickening.
  - `hover:bg-[rgba(200,210,195,0.12)] hover:border-[rgba(90,138,58,0.35)] transition-all duration-500`.
- Active (stone step): stone depresses slightly and green ring pulses.
  - `active:translate-y-0.5 active:ring-2 active:ring-[#5a8a3a]/30`.
- Chime interaction: hovering near wind chimes causes them to sway faster and a subtle tone visual indicator appears.
- Mist flow: continuous slow horizontal drift animation on mist layers.
- Leaf drift: leaves slowly drift downward and sideways on a continuous loop.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8aaa4a]/40 focus:ring-offset-2 focus:ring-offset-[#1a2a1a]`.
- Transitions: `transition-all duration-700` (slow, zen, unhurried — the forest does not rush).
- Reduced motion: all continuous animations (dappled shift, chime sway, leaf fall, mist drift) paused, static states shown.

## Reusable Tailwind Tokens

- Bamboo culm pattern: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(90,138,58,0.35)_18px,rgba(90,138,58,0.35)_22px,transparent_22px,transparent_40px)]`
- Bamboo dark surface: `bg-gradient-to-b from-[#2a4a22] via-[#3a5a2a] to-[#1a3a12]`
- Dappled sunlight: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,245,208,0.15)_0%,transparent_40%)]`
- Sunlight shaft: `bg-[linear-gradient(180deg,rgba(255,245,208,0.08)_0%,transparent_100%)] [clip-path:polygon(30%_0,70%_0,100%_100%,0%_100%)]`
- Stone step: `bg-gradient-to-br from-[#8a8a7a] via-[#9a9a8a] to-[#7a7a6a] rounded-[40%_55%_45%_60%] shadow-[0_3px_6px_rgba(0,0,0,0.3)]`
- Active stone: `ring-2 ring-[#8aaa4a]/40 shadow-[0_0_12px_rgba(90,138,58,0.3)]`
- Wind chime rod: `w-1 h-6 bg-gradient-to-b from-[#8a8a7a] to-[#6a6a5a] rounded-b-full`
- Torii beam: `w-20 h-3 bg-[#c44020] rounded-sm`
- Mist band: `bg-gradient-to-t from-[rgba(200,210,195,0.15)] via-[rgba(200,210,195,0.08)] to-transparent`
- Mist drift animation: `animate-[mist-drift_12s_ease-in-out_infinite]`
- Zen card: `bg-[rgba(200,210,195,0.08)] backdrop-blur-sm border border-[rgba(90,138,58,0.2)] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)]`
- Leaf SVG: `<svg viewBox="0 0 30 8"><path d="M0 4 Q8 0 15 1 Q22 2 30 4 Q22 6 15 7 Q8 8 0 4Z" fill="#5a8a3a" opacity="0.6"/></svg>`
- Ground moss: `bg-gradient-to-t from-[#1a2a12] via-[#2a4a1a]/80 to-transparent`

## Quality Checklist (must pass)

- At least one bamboo culm vertical line pattern surface (repeating thin green vertical lines with node joints).
- Filtered sunlight dappled overlay present (scattered warm yellow-white light spots).
- Stone stepping path element present (irregular rounded stones in a meandering arrangement).
- At least one wind chime decoration (hanging rods with a weight at the bottom).
- Torii gate accent present for at least one section transition (vermilion gate arch or beam).
- Mist depth layers visible (progressive opacity from foreground to background).
- Bamboo leaf scatter accents present (small elongated leaf shapes in corners or sections).
- Color palette is bamboo green + bamboo dark + yellow-green + sunlight warm + stone gray + mist + torii red + shadow cool.
- Typography is zen serif with generous line-height — spacious and breathing, not cramped.
- At least one continuous ambient animation (dappled shift, chime sway, leaf drift, or mist drift).
- Dark bamboo green backgrounds with warm sunlight text contrast (not bright or clinical).
- The aesthetic reads as Japanese bamboo grove — vertical, serene, filtered, deeply calm.
- Everything feels like standing in a bamboo forest — tall stalks rising, light filtering, mist deepening.

## Anti-Patterns

- Missing the vertical bamboo culm line pattern (the repeating vertical green lines ARE the bamboo grove identity).
- Horizontal or diagonal dominant lines (bamboo grove is overwhelmingly vertical — horizontal elements are rare exceptions).
- Bright saturated colors without atmospheric mist (the grove is filtered and muted, not vibrant).
- Clean white backgrounds (the grove is dark green with warm sunlight filtering — never white).
- Modern flat design without depth layers (the grove has atmospheric depth through mist and perspective).
- Missing the dappled sunlight treatment (filtered light is the signature warmth source).
- Symmetric perfect layouts (bamboo grows irregularly — the layout should feel organic and slightly asymmetric).
- Fast animations (bamboo forest is calm — all transitions and movements are slow and zen).
- Heavy bold typography (the forest whispers — no shouting, no heavy weights).
- Missing stone stepping elements (the stone path is the signature navigation metaphor).
- Missing torii gate accent (the vermilion gate marks sacred transitions).
- Neon or electric colors (bamboo palette is natural greens, warm sunlight, and cool mist).
- Missing wind chime decorations (chimes provide the ambient character).
- Flat depth without mist layers (the grove recedes into atmospheric haze — this is essential).
- Hard geometric borders (bamboo forest elements have organic soft edges and rounded forms).
- No leaf scatter (falling and resting bamboo leaves are essential natural decoration).

## Accessibility Considerations

- Bamboo dark backgrounds with sunlight warm text provide good contrast (verify WCAG AA for `#fff5d0` on `#1a2a1a`).
- Focus states: `focus:ring-2 focus:ring-[#8aaa4a]/40` (yellow-green ring visible against dark bamboo backgrounds).
- All decorative SVGs (leaves, chimes, gate silhouettes) must be `aria-hidden="true"`.
- Dappled sunlight, mist drift, chime sway, and leaf fall animations must respect `prefers-reduced-motion` (show static states).
- Stone stepping path items must have adequate touch targets (minimum 44x44px) despite organic irregular shapes.
- The low-contrast mist aesthetic requires careful verification that all text remains legible — test against each background variant.
- Bamboo culm line pattern overlays are decorative — `aria-hidden="true"` and `pointer-events-none` on purely decorative texture layers.
- Torii gate red (`#c44020`) on dark backgrounds must be tested for WCAG AA contrast — use larger text sizes if contrast is marginal.
- Stone gray (`#8a8a7a`) text on dark backgrounds may need lightening — verify contrast before finalizing.
- Wind chime sway animation should be subtle enough not to distract users with vestibular disorders even with motion enabled.
- Mist depth layers should not cause text legibility issues — ensure content-bearing elements are always in the clear foreground layer.
- Keyboard navigation must follow logical order: top-level content first, then stepping path navigation, then decorative elements last.
