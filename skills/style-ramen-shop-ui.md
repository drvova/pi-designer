---
name: ramen-shop-ui
description: Build ramen shop UI components (counter seating, steaming bowls, noren curtain, menu boards, chopstick rests, slurping sounds, soy sauce dispenser) with warm steam effects, casual counter atmosphere, and the comforting depth of a Japanese noodle shop. Trigger this skill when the user asks for ramen shop design, Japanese noodle shop UI, counter seating layout, noren curtain divider, steaming bowl animation, menu board chalk text, chopstick rest accent, soy sauce dispenser, warm broth palette, or casual Japanese eatery interfaces.
---

# Ramen Shop UI

Use this skill to design and implement warm, casual interfaces inspired by Japanese ramen noodle shops: steaming bowl silhouettes with rising vapor wisps, noren curtain fabric dividers with Japanese text, wooden counter surfaces with grain texture, dark chalkboard menu boards with hand-written chalk text, chopstick rest accents, soy sauce dispenser shapes, and the deep, comforting warmth of a counter-service noodle shop where the broth is rich and the steam never stops.

## Non-Negotiable Foundations

- Ramen shop UI evokes the sensory experience of sitting at a narrow wooden counter in a steam-filled noodle shop: bowls of hot broth, the drip of soy sauce, the fabric strips of the noren swaying at the entrance, and the quiet rhythm of a chef working behind the counter.
- Colors are warm and brothy: rich broth amber, ceramic bowl dark, wooden counter brown, noren indigo, nori green, and egg yolk yellow — the palette of a steaming bowl of tonkotsu.
- Textures reference ramen shop materials: lacquered wood counter grain, ceramic bowl glaze, fabric noren weave, chalk-dusted blackboard, bamboo chopstick surfaces, and the wet sheen of broth.
- Typography blends casual handwritten chalk (for the daily specials board) with warm serif (for the shop name) and clean sans-serif (for body text) — the mix of a neighborhood noodle shop that is both humble and proud.
- The mood is warm, casual, and deeply comforting — everything feels like sitting down to a hot bowl on a cold night, steam rising to fog your glasses.
- Steam and vapor effects are the signature animation motif — gentle rising wisps that suggest heat, freshness, and the warmth of a just-served bowl.
- The noren curtain is the signature decorative element — indigo fabric strips with Japanese characters that mark the entrance and divide spaces.

## Core Material Recipes

### 1) Steaming Bowl Silhouette

The signature ramen bowl with animated rising steam wisps — the centerpiece of any ramen shop interface.

- Bowl silhouette: `w-48 h-24 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[60%] rounded-t-sm shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_-4px_12px_rgba(196,160,96,0.3)] relative overflow-visible`.
- Bowl rim: `absolute -top-1 left-0 right-0 h-3 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-t-sm shadow-[0_-1px_2px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)]`.
- Broth surface: `absolute top-2 left-2 right-2 h-6 bg-gradient-to-b from-[#c4a060] via-[#b8904a] to-[#a8803a] rounded-b-[50%] opacity-90 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]`.
- Steam wisps (3 layered): `absolute -top-8 left-1/2 -translate-x-1/2 w-full h-16 pointer-events-none`.

Steam wisp CSS animation:
```css
@keyframes steam-rise {
  0% { transform: translateY(0) translateX(-50%) scaleX(1); opacity: 0; }
  15% { opacity: 0.2; }
  50% { transform: translateY(-20px) translateX(-40%) scaleX(1.2); opacity: 0.12; }
  100% { transform: translateY(-48px) translateX(-60%) scaleX(0.8); opacity: 0; }
}
```

Steam wisp SVG (3 organic paths at different offsets):
```html
<svg viewBox="0 0 120 60" class="w-32 h-16 opacity-20">
  <g fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round">
    <path d="M40,50 Q35,40 42,30 Q48,20 38,10" class="animate-[steam-rise_3s_ease-out_infinite]" style="animation-delay: 0s"/>
    <path d="M55,50 Q60,38 52,28 Q45,18 55,8" class="animate-[steam-rise_3s_ease-out_infinite_0.8s]" style="animation-delay: 0.8s"/>
    <path d="M70,50 Q65,42 72,32 Q78,22 68,12" class="animate-[steam-rise_3s_ease-out_infinite_1.6s]" style="animation-delay: 1.6s"/>
  </g>
</svg>
```

### 2) Noren Curtain Divider

Fabric strip divider with Japanese text — the signature entrance and space divider of a ramen shop.

- Curtain rod: `w-full h-2 bg-gradient-to-b from-[#5a3a1a] to-[#3a2a10] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]`.
- Fabric strip: `w-16 h-28 bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a] to-[#12203a] rounded-b-lg shadow-[2px_4px_8px_rgba(0,0,0,0.3)] relative overflow-hidden`.
- Fabric texture: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_4px)]`.
- Fabric sway animation (subtle):
```css
@keyframes noren-sway {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(0.5deg); }
  75% { transform: rotate(-0.5deg); }
}
```
- Japanese text on strip: `absolute bottom-4 left-1/2 -translate-x-1/2 font-serif text-xl text-white/80 writing-vertical-rl` (vertical Japanese text).
- Gap between strips: `w-2` (thin gap between adjacent strips showing the space beyond).
- Strip with wave-cut bottom: `clip-path: polygon(0 0, 100% 0, 100% 85%, 80% 100%, 50% 88%, 20% 100%, 0 85%)`.

### 3) Wooden Counter Surface

Warm lacquered wood counter texture — the primary seating surface of a ramen shop.

- Counter surface: `bg-gradient-to-b from-[#8a6a3a] via-[#7a5a2a] to-[#6a4a1a] rounded-lg p-6 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]`.
- Wood grain pattern: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(2deg,transparent,transparent_8px,rgba(0,0,0,0.06)_8px,rgba(0,0,0,0.06)_9px),repeating-linear-gradient(178deg,transparent,transparent_12px,rgba(0,0,0,0.04)_12px,rgba(0,0,0,0.04)_13px)] before:rounded-lg`.
- Lacquer sheen: `after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/[0.06] after:via-transparent after:to-black/[0.08] after:rounded-lg`.
- Counter edge (front lip): `h-3 bg-gradient-to-b from-[#6a4a1a] via-[#5a3a10] to-[#4a2a08] rounded-b-lg shadow-[0_4px_8px_rgba(0,0,0,0.4)]`.

### 4) Chalkboard Menu Board

Dark background with chalk-style handwritten text — the daily specials board.

- Board surface: `bg-[#1a1a1a] rounded-lg p-6 border-4 border-[#5a3a1a] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Chalk dust texture: `before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.02)_0%,transparent_40%)] before:rounded-lg`.
- Chalk title text: `font-['Caveat',cursive] text-2xl text-white/90 mb-4`.
- Chalk menu item: `font-['Caveat',cursive] text-lg text-white/75 leading-relaxed`.
- Chalk price: `font-mono text-sm text-white/50`.
- Chalk separator line: `w-full h-px bg-white/10 my-2`.
- Chalk doodle accent (bowl drawing): SVG bowl outline in white/20 chalk stroke.

### 5) Chopstick Rest Accent

Small decorative bamboo or ceramic chopstick rest shape — subtle Japanese detail.

- Ceramic rest: `w-12 h-4 bg-gradient-to-b from-[#e0d8c8] to-[#c0b8a8] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)]`.
- Bamboo rest: `w-12 h-4 bg-gradient-to-b from-[#a89060] to-[#887040] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]`.
- Chopsticks (pair): two thin lines above the rest.
  - Left chopstick: `absolute w-0.5 h-16 bg-gradient-to-b from-[#a89060] to-[#7a6a3a] rounded-full rotate-[15deg] -top-12 left-1/2 -translate-x-1`.
  - Right chopstick: `absolute w-0.5 h-16 bg-gradient-to-b from-[#a89060] to-[#7a6a3a] rounded-full rotate-[15deg] -top-12 left-1/2 translate-x-1`.

### 6) Soy Sauce Dispenser Silhouette

Dark soy sauce bottle shape — decorative accent or functional element.

- Dispenser body: `w-8 h-14 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-t-sm rounded-b-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative`.
- Dispenser neck: `absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2a2a2a] rounded-t-sm`.
- Dispenser cap: `absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#c4a060] rounded-t-sm shadow-[0_1px_2px_rgba(0,0,0,0.3)]`.
- Dispenser drip: `absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-[#1a1008] rounded-b-full opacity-40`.
- Label: `absolute top-3 left-1/2 -translate-x-1/2 text-[4px] text-white/40 font-serif`.

### 7) Noodle Bowl Pattern

Decorative pattern of overlapping noodle strands — used as a subtle background motif.

Noodle pattern SVG:
```html
<svg viewBox="0 0 200 200" class="w-full h-full opacity-[0.04]">
  <g fill="none" stroke="#c4a060" stroke-width="1" stroke-linecap="round">
    <path d="M10,40 Q50,20 90,50 Q130,80 170,40"/>
    <path d="M10,60 Q50,40 90,70 Q130,100 170,60"/>
    <path d="M10,80 Q50,60 90,90 Q130,120 170,80"/>
    <path d="M10,100 Q50,80 90,110 Q130,140 170,100"/>
    <path d="M10,120 Q50,100 90,130 Q130,160 170,120"/>
    <path d="M10,140 Q50,120 90,150 Q130,180 170,140"/>
  </g>
</svg>
```

### 8) Nori Sheet Accent

Dark green dried seaweed rectangular accent for decoration or content framing.

- Nori sheet: `w-10 h-14 bg-gradient-to-br from-[#1a3a1a] to-[#0a2a0a] rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.05)] relative`.
- Nori texture: `before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_3px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_3px)] before:rounded-sm`.
- Nori edge irregularity: `clip-path: polygon(2% 0%, 98% 1%, 100% 3%, 99% 97%, 97% 100%, 3% 99%, 0% 96%, 1% 4%)`.

### 9) Soft-Boiled Egg Accent

Halved egg decoration showing the golden yolk center — a warm visual accent.

- Egg white: `w-8 h-8 rounded-full bg-gradient-to-br from-[#f5f0e8] to-[#e0d8c8] shadow-[0_2px_4px_rgba(0,0,0,0.1)] relative`.
- Yolk center: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#f0d040] to-[#d4a820] shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]`.
- Yolk highlight: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-1.5 h-1 rounded-full bg-white/40`.

## Color Palette System

### Core Ramen Palette

| Color | Hex | Role |
|---|---|---|
| Broth Warm | `#c4a060` | Primary warm accent, broth surface, steam tint |
| Broth Deep | `#a8803a` | Darker broth tone, gradients |
| Bowl Ceramic Dark | `#2a2a2a` | Bowl silhouettes, dark containers, dispenser body |
| Bowl Ceramic Edge | `#3a3a3a` | Bowl rim highlights, subtle borders |
| Noren Indigo | `#1a2a4a` | Noren fabric, primary blue-dark accent |
| Noren Indigo Deep | `#12203a` | Noren shadow folds, darker indigo |
| Counter Wood | `#8a6a3a` | Wooden counter surface, primary warm material |
| Counter Wood Dark | `#6a4a1a` | Counter edge, deeper wood tones |
| Nori Dark Green | `#1a3a1a` | Nori accent, seaweed elements, button backgrounds |
| Egg Yolk Yellow | `#f0d040` | Warm highlight, egg accent, price emphasis |
| Egg Yolk Deep | `#d4a820` | Deeper yolk, shadow tones |
| Steam White | `rgba(255,255,255,0.2)` | Steam wisps, vapor effects, translucent overlay |
| Menu Black | `#1a1a1a` | Chalkboard background, deep dark surfaces |
| Chalk White | `rgba(255,255,255,0.75)` | Chalk text on dark board |
| Wood Frame | `#5a3a1a` | Chalkboard frame, chopstick tones |
| Bamboo Light | `#a89060` | Chopstick rest, bamboo accents, lid details |
| Ceramic Light | `#e0d8c8` | Chopstick rest light, egg white, light accents |
| Soy Sauce Dark | `#1a1008` | Deepest accent, soy sauce tones |

Rules: Broth warm amber and counter wood brown dominate. Noren indigo provides the signature Japanese accent. Nori green and egg yolk yellow appear as sparing highlights only — they are the garnish on the bowl, not the bowl itself. Menu black serves as the dark surface for chalkboard elements. Steam white-translucent appears as vapor and atmospheric overlay. The palette should feel like a steaming bowl of ramen on a warm wooden counter — rich, deep, and inviting.

## Typography Recommendations

- **Shop name / display:** Noto Serif JP, Shippori Mincho, or Zen Old Mincho (warm traditional Japanese serif for the shop identity).
- **Menu board / chalk specials:** Caveat, Kalam, or Permanent Marker (handwritten chalk-on-board feel for daily specials and hand-written prices).
- **Noren / Japanese text:** Noto Sans JP or Zen Kaku Gothic New (clean Japanese characters on fabric strips).
- **Body text / descriptions:** Inter, DM Sans, or Noto Sans (clean readable sans-serif for descriptions and UI text).
- **Price tags:** `font-mono text-sm text-[#c4a060]` (warm amber monospace for prices on the counter surface).
- **Labels:** `font-medium text-xs tracking-wider uppercase text-white/50` (on dark chalkboard surfaces).
- Typography should feel like a casual neighborhood ramen shop — warm, unhurried, and handwritten where it counts. The shop name is proud serif; the specials are scrawled in chalk; the body text stays out of the way.

## Component Architecture Pattern

1. Noren curtain divider at the top or as a section break — indigo fabric strips with Japanese text that mark the entrance to the interface.
2. Wooden counter surface as the primary layout background or content container — warm wood grain with lacquer sheen.
3. Steaming bowl silhouette as the hero visual or featured element — ceramic dark with animated steam wisps rising.
4. Chalkboard menu board for lists, menus, or content sections — dark surface with chalk-style text and doodle accents.
5. Chopstick rest accents as subtle dividers or decorative markers between content sections.
6. Soy sauce dispenser silhouettes as functional icons or decorative sidebar elements.
7. Nori sheet accents framing content cards or providing dark green punctuation.
8. Soft-boiled egg accents for highlights, badges, or warm circular decorations.
9. Noodle bowl pattern as a subtle full-width background texture behind content areas.
10. Steam vapor overlay on hover or at section transitions for atmospheric continuity.

## Interaction Rules

- Default state: warm, inviting, and steamy — the bowl is hot, the counter is polished, the noren is still.
- Hover (cards/surfaces): warmth radiates — steam wisps intensify, surface warms slightly.
  - `hover:shadow-[0_8px_24px_rgba(196,160,96,0.25)] hover:-translate-y-0.5 transition-all duration-300`.
- Active (buttons): press into the wooden counter — satisfying depth.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a060]/40` (warm broth-colored ring).
- Noren sway: continuous gentle animation on fabric strips — `animate-[noren-sway_6s_ease-in-out_infinite]`.
- Steam: continuous rising wisps on featured bowls — `animate-[steam-rise_3s_ease-out_infinite]`.
- Transitions: `transition-all duration-300 ease-in-out` (warm, unhurried — like broth simmering).
- Chalk text appears as if being written: optional fade-in with slight upward drift.

Steam wisp hover intensification:
```css
@keyframes steam-rise-intense {
  0% { transform: translateY(0) scaleX(1); opacity: 0; }
  15% { opacity: 0.35; }
  50% { transform: translateY(-24px) scaleX(1.3); opacity: 0.18; }
  100% { transform: translateY(-56px) scaleX(0.7); opacity: 0; }
}
```

## Reusable Tailwind Tokens

- Steaming bowl: `bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[60%] shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_-4px_12px_rgba(196,160,96,0.3)]`.
- Noren strip: `bg-gradient-to-b from-[#1a2a4a] to-[#12203a] rounded-b-lg shadow-[2px_4px_8px_rgba(0,0,0,0.3)]`.
- Counter surface: `bg-gradient-to-b from-[#8a6a3a] via-[#7a5a2a] to-[#6a4a1a] rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]`.
- Chalkboard: `bg-[#1a1a1a] rounded-lg border-4 border-[#5a3a1a] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_2px_8px_rgba(0,0,0,0.3)]`.
- Chopstick rest: `w-12 h-4 bg-gradient-to-b from-[#a89060] to-[#887040] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.15)]`.
- Nori accent: `bg-gradient-to-br from-[#1a3a1a] to-[#0a2a0a] rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.
- Broth button: `bg-gradient-to-b from-[#c4a060] to-[#a8803a] text-[#1a1a1a] font-medium rounded-full px-6 py-2 shadow-[0_2px_8px_rgba(196,160,96,0.3)] hover:from-[#d0b070] hover:to-[#b8904a] transition-all`.
- Nori button: `bg-gradient-to-b from-[#1a3a1a] to-[#0a2a0a] text-white/90 font-medium rounded-sm px-6 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.3)] hover:from-[#2a4a2a] hover:to-[#1a3a1a] transition-all`.
- Steam wisps: `animate-[steam-rise_3s_ease-out_infinite] opacity-20`.
- Noren rod: `h-2 bg-gradient-to-b from-[#5a3a1a] to-[#3a2a10] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)]`.

## Quality Checklist

- At least one steaming bowl silhouette with animated rising steam wisps present.
- Noren curtain divider strips visible (indigo fabric with Japanese text).
- Wooden counter surface texture used as a primary surface or background.
- Chalkboard menu board present with chalk-style handwritten text.
- Chopstick rest accent elements present as decorative markers.
- Soy sauce dispenser silhouette present as an icon or decorative element.
- Color palette is broth warm amber + bowl ceramic dark + noren indigo + counter wood brown + nori green + egg yolk yellow.
- Typography blends warm serif (shop name), handwritten chalk (menu board), and clean sans-serif (body).
- Steam animation respects `prefers-reduced-motion`.
- Noren sway animation is subtle and continuous.
- The aesthetic reads as a casual Japanese ramen noodle shop — warm, steamy, and deeply comforting.
- Everything feels like sitting at a counter with a hot bowl — broth rich, steam rising, counter polished.
- Nori green and egg yolk yellow are used sparingly as accents, not dominant colors.
- The overall composition is warm and inviting, never cold or sterile.

## Anti-Patterns

- Cool blue or gray dominant palettes (ramen shop is warm amber and wood brown).
- Missing steam vapor effects (the rising steam is the signature atmosphere of a ramen shop).
- Missing the noren curtain (indigo fabric strips are the instant ramen shop identity signal).
- Flat matte surfaces without wood grain texture (counter surfaces must show warm wood grain).
- Bright saturated neon colors (ramen shop palette is warm, muted, and brothy).
- Cold modern sans-serif typography alone (needs warm serif for shop name and handwritten chalk for menu).
- Sharp angular layouts (ramen shop is warm, rounded, and organic — bowls are round, steam is flowing).
- Fast aggressive animations (motion should be gentle like steam rising and noren swaying).
- Pure white backgrounds (use warm broth-tinted or wood-toned surfaces).
- Missing the chalkboard menu board (the chalkboard is the signature content display).
- Corporate sterile design (ramen shop is casual, neighborhood, and lived-in).
- Overly polished or luxury feel (ramen shop is humble counter-service warmth).
- Missing chopstick rest or nori accents (these material details add authenticity).
- Dark backgrounds everywhere (ramen shop balances warm wood surfaces with dark chalkboard accents).
- Cool-toned typography (all text should feel warm — amber, cream, or white on dark).

## Accessibility Considerations

- Warm wood backgrounds (`#8a6a3a`) with dark text (`#1a1a1a`) provide good contrast (verify WCAG AA).
- Chalkboard white text (`rgba(255,255,255,0.75)`) on `#1a1a1a` provides adequate contrast (verify AA).
- Steam animations must respect `prefers-reduced-motion` — static translucent wisps or no wisps.
- Noren sway animation must respect `prefers-reduced-motion` — static strips.
- Focus states: `focus:ring-2 focus:ring-[#c4a060]/40` (warm broth-colored ring visible on all surfaces).
- Steam wisps SVG must be `aria-hidden="true"` — purely decorative.
- Noren curtain decorative elements must be `aria-hidden="true"` when not containing readable text.
- Chopstick rest and soy sauce dispenser decorations must be `aria-hidden="true"`.
- Japanese text on noren requires proper `lang="ja"` attribute for screen readers.
- Touch targets minimum 44x44px on all interactive elements despite casual styling.
- Chalk-style handwritten fonts at small sizes may reduce readability — ensure body text uses clean sans-serif at 16px+.
- Color should not be the sole indicator of menu item category — use icons or text labels as well.
- Broth amber text on light surfaces may need darker alternative — verify each combination.
