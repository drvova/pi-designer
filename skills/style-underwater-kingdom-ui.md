---
name: underwater-kingdom-ui
description: Build underwater kingdom UI components (coral palace, pearl throne, seaweed curtain, bioluminescent hall, treasure grotto, jellyfish chandelier, submarine window) with deep ocean surfaces, bioluminescent accents, and the regal beauty of a submarine kingdom. Trigger this skill when the user asks for underwater kingdom design, submarine palace UI, ocean royalty, coral throne, bioluminescent interface, treasure grotto aesthetic, jellyfish lighting, or regal deep-sea interfaces.
---

# Underwater Kingdom UI

Use this skill to design and implement regal, mysterious interfaces inspired by a submarine kingdom: coral palace walls with textured surfaces, pearl throne seating, hanging seaweed curtains, bioluminescent hallways glowing in darkness, treasure grottos shimmering with gold and gems, jellyfish chandeliers casting translucent pink light, and submarine porthole windows framing the deep ocean beyond.

## Non-Negotiable Foundations

Every underwater kingdom interface must satisfy these requirements or it is not an underwater kingdom:

1. **Deep ocean darkness as the dominant backdrop.** The kingdom exists in the deep sea where sunlight barely reaches. Backgrounds must use ocean deep blue `#0a2a4a` or darker as the primary surface. This is not a shallow reef — it is a sunken palace in the abyss.

2. **Bioluminescent light as the primary illumination source.** There are no overhead lights or sunbeams. All glow comes from bioluminescent organisms, glowing jellyfish, and magical treasure. Every interactive element must have some form of living light: a faint `#40e0c0` glow, a shimmering gold highlight, or a pulsing pink jellyfish halo.

3. **Regal texture on every structural surface.** Coral palace walls are not flat — they are ridged, organic, and alive. Every major surface must carry a subtle coral texture, pearl luster, or seaweed grain. Flat untextured panels are banned.

4. **Translucent and luminous materiality.** Water permeates everything. Panels must feel translucent. Glass, pearl, jellyfish membrane, and water itself are the materials. Opaque matte surfaces contradict the underwater kingdom.

5. **Vertical orientation with downward weight.** Seaweed hangs down. Jellyfish dangle from above. Treasure sits on the ocean floor. The visual weight must pull downward, anchoring elements to the floor of the scene.

## Core Material Recipes

### 1) Coral Palace Wall

Textured coral-colored structural surface — the walls of the kingdom.

- `bg-gradient-to-br from-[#e08080] to-[#b05050] rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgba(10,42,74,0.4)] border border-[#c06060]/60`.
- Coral ridges: `bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(255,255,255,0.04)_8px,rgba(255,255,255,0.04)_10px)]` (horizontal ridge texture like coral skeleton).
- Depth shadow: `shadow-[inset_0_2px_12px_rgba(10,42,74,0.3)]` (inner shadow to simulate the thickness of coral walls).

### 2) Pearl Throne Seat

White lustrous chair or panel with pearlescent sheen.

- `bg-gradient-to-br from-[#f8f8f8] via-[#e8e8f0] to-[#d8d8e0] rounded-[2rem] p-8 shadow-[0_8px_32px_rgba(64,160,192,0.15),0_0_60px_rgba(240,240,240,0.1)] border border-white/60`.
- Pearl luster: `bg-[conic-gradient(from_45deg,rgba(255,255,255,0.08),rgba(200,220,240,0.05),rgba(255,255,255,0.08),rgba(220,200,240,0.05),rgba(255,255,255,0.08))]` (iridescent conic gradient simulating nacre reflection).
- Soft glow: `shadow-[0_0_40px_rgba(240,240,240,0.12)]` (pearl ambient glow).

### 3) Seaweed Curtain

Hanging green fronds that drape as a divider or header decoration.

```html
<div class="relative w-full h-32 overflow-hidden">
  <svg viewBox="0 0 400 120" class="w-full h-full opacity-60">
    <g fill="none" stroke-linecap="round">
      <path d="M20,0 Q30,30 15,60 Q5,90 20,120" stroke="#2a6a3a" stroke-width="3" opacity="0.8"/>
      <path d="M50,0 Q60,25 45,55 Q35,85 55,120" stroke="#1a5a2a" stroke-width="4" opacity="0.7"/>
      <path d="M80,0 Q90,35 75,65 Q65,95 85,120" stroke="#2a6a3a" stroke-width="2.5" opacity="0.9"/>
      <path d="M110,0 Q120,20 105,50 Q95,80 115,120" stroke="#3a7a4a" stroke-width="3.5" opacity="0.6"/>
      <path d="M145,0 Q155,40 140,70 Q130,100 150,120" stroke="#1a5a2a" stroke-width="3" opacity="0.75"/>
      <path d="M180,0 Q190,25 175,55 Q165,85 185,120" stroke="#2a6a3a" stroke-width="4" opacity="0.65"/>
      <path d="M215,0 Q225,30 210,60 Q200,90 220,120" stroke="#3a7a4a" stroke-width="2.5" opacity="0.85"/>
      <path d="M250,0 Q260,35 245,65 Q235,95 255,120" stroke="#1a5a2a" stroke-width="3" opacity="0.7"/>
      <path d="M290,0 Q300,20 285,50 Q275,80 295,120" stroke="#2a6a3a" stroke-width="3.5" opacity="0.8"/>
      <path d="M330,0 Q340,40 325,70 Q315,100 335,120" stroke="#3a7a4a" stroke-width="3" opacity="0.6"/>
      <path d="M370,0 Q380,25 365,55 Q355,85 375,120" stroke="#1a5a2a" stroke-width="4" opacity="0.7"/>
    </g>
  </svg>
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a2a4a] via-transparent to-transparent"></div>
</div>
```

- Wrap: `w-full overflow-hidden` (curtain spans the full width).
- Fade at top: the gradient overlay makes fronds appear to attach at the top edge and thin toward the bottom.

### 4) Bioluminescent Hall

A dark surface with scattered glowing points simulating deep-sea organisms.

- `bg-[#060e1a] rounded-2xl p-6 relative overflow-hidden`.
- Bio points: `bg-[radial-gradient(circle_2px_at_15%_25%,#40e0c0_0%,transparent_100%),radial-gradient(circle_3px_at_45%_60%,#40e0c0_0%,transparent_100%),radial-gradient(circle_2px_at_70%_20%,#40e0c0_0%,transparent_100%),radial-gradient(circle_1px_at_85%_75%,#40e0c0_0%,transparent_100%),radial-gradient(circle_2px_at_30%_80%,#40e0c0_0%,transparent_100%),radial-gradient(circle_3px_at_60%_35%,#40e0c0_0%,transparent_100%),radial-gradient(circle_1px_at_20%_50%,#40e0c0_0%,transparent_100%)]` (scattered bioluminescent dots).
- Glow haze: `after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_30%_40%,rgba(64,224,192,0.06)_0%,transparent_60%)]` (diffuse bioluminescent haze).

### 5) Treasure Grotto

A shimmering gold-and-gem surface for displaying valuables or premium content.

- `bg-gradient-to-br from-[#2a1a0a] via-[#3a2a10] to-[#1a1008] rounded-2xl p-6 border border-[#c4a043]/30 shadow-[0_0_30px_rgba(196,160,67,0.15)]`.
- Gold shimmer: `bg-[linear-gradient(135deg,rgba(196,160,67,0.08)_0%,transparent_40%,rgba(196,160,67,0.05)_60%,transparent_100%)]` (subtle diagonal gold light).
- Gem sparkle dots: `bg-[radial-gradient(circle_1px_at_25%_30%,rgba(196,160,67,0.5)_0%,transparent_100%),radial-gradient(circle_1px_at_75%_65%,rgba(196,160,67,0.4)_0%,transparent_100%),radial-gradient(circle_1px_at_50%_85%,rgba(196,160,67,0.3)_0%,transparent_100%)]`.

### 6) Jellyfish Chandelier

A translucent glowing decorative element hanging from above — used for headers or dividers.

```html
<div class="flex justify-center items-start pt-4 pb-8">
  <div class="relative">
    <div class="w-24 h-16 bg-gradient-to-b from-[#e0a0c0]/30 to-[#e0a0c0]/10 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] backdrop-blur-sm border border-[#e0a0c0]/20 shadow-[0_0_40px_rgba(224,160,192,0.25)]"></div>
    <div class="flex justify-center gap-1 -mt-1">
      <div class="w-[1px] h-8 bg-gradient-to-b from-[#e0a0c0]/30 to-transparent"></div>
      <div class="w-[1px] h-12 bg-gradient-to-b from-[#e0a0c0]/40 to-transparent"></div>
      <div class="w-[1px] h-10 bg-gradient-to-b from-[#e0a0c0]/35 to-transparent"></div>
      <div class="w-[1px] h-14 bg-gradient-to-b from-[#e0a0c0]/30 to-transparent"></div>
      <div class="w-[1px] h-9 bg-gradient-to-b from-[#e0a0c0]/35 to-transparent"></div>
    </div>
  </div>
</div>
```

- Container: `flex justify-center items-start` (hangs from above).
- Bell shape: the dome with the rounded border-radius and translucent pink gradient.
- Tentacles: thin `w-[1px]` lines fading to transparent.

### 7) Submarine Window (Porthole)

A circular porthole view into the deep ocean — used as a card, avatar frame, or decorative element.

- Outer ring: `w-40 h-40 rounded-full border-4 border-[#40a0c0]/40 bg-gradient-to-br from-[#0a2a4a] to-[#061828] shadow-[0_0_20px_rgba(64,160,192,0.15),inset_0_0_30px_rgba(10,42,74,0.6)] overflow-hidden relative`.
- Glass glare: `absolute top-2 left-4 w-12 h-8 bg-white/10 rounded-full blur-sm rotate-[-20deg]` (reflection on the glass surface).
- Rivets: four small `w-2 h-2 rounded-full bg-[#40a0c0]/30` circles placed at compass points around the rim.

### 8) Deep Ocean Background Layer

Full-page atmospheric backdrop for the entire kingdom.

- `bg-gradient-to-b from-[#0a2a4a] via-[#061828] to-[#030c14] min-h-screen`.
- Caustic depth: `bg-[radial-gradient(ellipse_at_30%_10%,rgba(64,160,192,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_70%_20%,rgba(64,224,192,0.03)_0%,transparent_40%)]` (faint light filtering from far above).
- Floating particles: `bg-[radial-gradient(circle_1px_at_20%_30%,rgba(64,224,192,0.15)_0%,transparent_100%),radial-gradient(circle_1px_at_60%_70%,rgba(64,224,192,0.1)_0%,transparent_100%),radial-gradient(circle_1px_at_80%_50%,rgba(255,255,255,0.08)_0%,transparent_100%)]` (drifting bioluminescent motes).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Ocean Deep | `#0a2a4a` | Primary background — the abyss |
| Coral Palace | `#e08080` | Structural surfaces — walls, panels |
| Pearl White | `#f0f0f0` | Premium surfaces — thrones, highlights |
| Seaweed Green | `#2a6a3a` | Organic decoration — curtains, fronds |
| Bio Glow | `#40e0c0` | Primary accent — bioluminescent light |
| Gold Treasure | `#c4a043` | Secondary accent — treasure, royalty |
| Jellyfish Pink | `#e0a0c0` | Tertiary accent — chandeliers, soft glow |
| Water Blue | `#40a0c0` | Functional accent — windows, links, glass |

Palette rules: The kingdom lives in darkness lit by living light. Ocean deep dominates — at least 60% of any viewport. Bioluminescent accents are sparse but vivid, like stars in an ocean sky. Coral palace provides warmth against the cold deep. Pearl white is reserved for the most important elements — throne, heading text, primary action. Gold treasure signals value and royalty. Jellyfish pink is decorative and ambient. Seaweed green is earthy and grounding. Water blue is the bridge between the darkness and the light.

Secondary tints for gradients and depth:

| Tint | Hex | Use |
|---|---|---|
| Abyss Dark | `#030c14` | Deepest shadow |
| Deep Mid | `#061828` | Mid-ground depth |
| Coral Dark | `#b05050` | Coral surface shadow |
| Gold Dim | `#8a6a20` | Treasure shadow |
| Bio Bright | `#60ffdc` | Peak bioluminescent highlight |
| Pearl Tint | `#d8d8e0` | Pearl surface shadow |

## Typography Recommendations

- **Display:** Cinzel, Cormorant Garamond (regal serif with underwater weight — evokes carved stone inscriptions in a coral palace).
- **Body:** DM Sans, Inter (clean readable sans-serif that stays legible against dark backgrounds).
- **Accent:** Cinzel Decorative (for section headers inside treasure grottos or throne room labels — ornate but not unreadable).
- The typography should feel weighty and deliberate, like carved coral lettering illuminated by bioluminescent light. Display fonts carry regality. Body fonts stay clear against the dark ocean backdrop.
- Letter-spacing on display text: `tracking-[0.15em]` (slightly wide, like engraved stone).
- Body text color: `text-[#c0d0e0]` (light blue-gray for readability on `#0a2a4a`).

## Component Architecture Pattern

Underwater kingdom interfaces follow a layered depth architecture — each layer represents a different depth of the ocean, creating parallax and immersion.

**Depth layers (back to front):**

1. **Abyss layer** — the deep ocean background gradient. Never interactive. Pure atmosphere.
2. **Palace layer** — structural panels (coral walls, treasure grottos). Cards, containers, modals.
3. **Organic layer** — living decorations (seaweed curtains, jellyfish chandeliers, bio-glow points). Dividers, ornaments, ambient motion.
4. **Interactive layer** — buttons, inputs, links. Pearl-surfaced or bio-glow accented.
5. **Surface layer** — porthole windows, crown elements. The closest plane to the viewer.

**Component composition:**

```
KingdomContainer (abyss bg)
  ├─ SeaweedCurtain (top organic decoration)
  ├─ CoralPalaceWall (main content panel)
  │   ├─ TreasureGrotto (premium section)
  │   ├─ BioLuminescentHall (ambient background)
  │   └─ PearlThroneSeat (primary action area)
  ├─ JellyfishChandelier (divider / section break)
  └─ SubmarineWindow (sidebar or feature callout)
```

**State patterns:**

- Default: deep ocean darkness, faint bioluminescent glow on interactive elements.
- Hover: glow intensifies — `shadow-[0_0_20px_rgba(64,224,192,0.3)]` on hover. The organism responds to presence.
- Active: gold treasure shimmer activates — `bg-[linear-gradient(135deg,rgba(196,160,67,0.15)_0%,transparent_50%)]`.
- Disabled: element dims into the deep — `opacity-30 saturate-50`.
- Loading: bioluminescent pulse animation — gentle `animate-pulse` with bio glow color.

## Interaction Rules

1. **Hover glows are bioluminescent, not spotlight.** When a user hovers an element, it should feel like a deep-sea creature responding to disturbance — a gentle glow emanation, not a bright flashlight beam. Use `box-shadow` with `rgba(64,224,192,0.2)` to `rgba(64,224,192,0.35)` transitions. Never use `brightness-150` or harsh white glows.

2. **Transitions are slow and fluid, like water.** All transitions must use `duration-500` or slower. Water does not snap. `transition-all duration-500 ease-in-out` is the baseline. Fast transitions (`duration-150`) break the underwater illusion.

3. **Scrolling feels like sinking.** Vertical scroll containers should have subtle momentum damping — `scroll-behavior: smooth` with `overscroll-behavior-contain`. The page should feel like descending through water layers.

4. **Buttons breathe.** Primary buttons should have a subtle idle animation — a gentle `animate-pulse` on the glow shadow with `duration-[3000ms]` (3-second cycle). The button is a living organism, not a dead rectangle.

5. **Focus rings are gold, not white.** Keyboard focus indicators must use `ring-[#c4a043]/60 ring-2 ring-offset-2 ring-offset-[#0a2a4a]` — gold treasure glow against the deep ocean. Standard white focus rings look foreign in this environment.

6. **Click feedback is a ripple in water.** On click, elements briefly scale down (`scale-[0.98]`) and the glow compresses, then spring back. `transition-transform duration-200 active:scale-[0.98]`.

7. **No tooltips float.** Underwater, nothing floats upward. Tooltips appear below or beside the trigger, never above. Use `data-[side=top]:slide-in-from-bottom-2` patterns to reinforce the downward visual weight.

## Reusable Tailwind Tokens

- Ocean abyss bg: `bg-gradient-to-b from-[#0a2a4a] via-[#061828] to-[#030c14]`.
- Coral palace panel: `bg-gradient-to-br from-[#e08080] to-[#b05050] rounded-[1.5rem] border border-[#c06060]/60`.
- Pearl surface: `bg-gradient-to-br from-[#f8f8f8] via-[#e8e8f0] to-[#d8d8e0] rounded-[2rem] border border-white/60`.
- Treasure grotto: `bg-gradient-to-br from-[#2a1a0a] via-[#3a2a10] to-[#1a1008] rounded-2xl border border-[#c4a043]/30`.
- Bio glow accent: `text-[#40e0c0] shadow-[0_0_12px_rgba(64,224,192,0.3)]`.
- Bio glow button: `bg-[#40e0c0]/10 text-[#40e0c0] border border-[#40e0c0]/30 rounded-full hover:bg-[#40e0c0]/20 hover:shadow-[0_0_20px_rgba(64,224,192,0.25)] transition-all duration-500`.
- Jellyfish divider: `h-px bg-gradient-to-r from-transparent via-[#e0a0c0]/30 to-transparent`.
- Porthole frame: `rounded-full border-4 border-[#40a0c0]/40 shadow-[0_0_20px_rgba(64,160,192,0.15)]`.
- Seaweed curtain: `bg-gradient-to-b from-[#2a6a3a]/30 to-transparent` (simplified single frond).
- Deep ocean text: `text-[#c0d0e0]` (body), `text-[#e8e8f0]` (headings), `text-[#40e0c0]` (accent).
- Gold highlight: `text-[#c4a043]` (text), `bg-[#c4a043]/10` (subtle background).
- Kingdom border: `border border-[#40a0c0]/20` (thin structural divider).
- Depth shadow: `shadow-[0_4px_20px_rgba(10,42,74,0.4)]` (panel depth).
- Coral ridge texture: `bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(255,255,255,0.04)_8px,rgba(255,255,255,0.04)_10px)]`.

## Quality Checklist

- Ocean deep blue `#0a2a4a` or darker is the dominant background color (at least 60% of viewport).
- At least one coral palace textured surface with ridge pattern.
- Bioluminescent glow points appear somewhere on the page (scattered bio-glow dots or ambient haze).
- At least one pearl-white lustrous surface for a premium element.
- Translucent materials dominate over opaque ones — backdrop-blur, low-opacity gradients, glass-like panels.
- All transitions use 500ms or slower duration.
- Hover states produce a bioluminescent glow, not a brightness flash.
- Focus rings use gold `#c4a043`, not default white.
- Vertical visual weight is downward — no elements that visually float upward.
- Seaweed or jellyfish decorative element appears as organic decoration.
- The aesthetic reads as a regal underwater kingdom, not a shallow reef or underwater cave.
- Text remains legible against all dark backgrounds — minimum `text-[#c0d0e0]` on `#0a2a4a`.
- Typography carries regal weight — Cinzel or Cormorant Garamond for display text.
- At least one submarine porthole element is present (window, avatar frame, or feature callout).

## Anti-Patterns

- Bright or saturated background colors (the kingdom is in the deep ocean, not a sunlit pool).
- Fast transitions under 300ms (water does not snap — everything is slow and fluid).
- White or gray focus rings (use gold `#c4a043` to match the kingdom palette).
- Flat untextured panels (every structural surface must carry coral ridges, pearl luster, or seaweed grain).
- Hover states that use brightness increase or white glow (use bioluminescent `#40e0c0` glow instead).
- Tooltips that float above their trigger (underwater weight pulls everything downward).
- Opaque matte surfaces without any translucency (water permeates everything — use backdrop-blur and low-opacity gradients).
- Cluttered layouts with no breathing room (the deep ocean is vast — let elements float with generous spacing).
- Harsh drop shadows (shadows in water are diffuse and deep — use `rgba(10,42,74,0.4)` with large blur radius).
- Neon or electric color accents (bioluminescence is organic and soft, not neon signage).
- Sans-serif display fonts (the kingdom is ancient and regal — serif display fonts carry that weight).
- Missing the darkness-to-light ratio (if more than 40% of the viewport is lighter than `#0a2a4a`, the atmosphere breaks).

## Accessibility Considerations

- **Contrast ratios on dark backgrounds.** Body text at `#c0d0e0` on `#0a2a4a` yields approximately 8.2:1 contrast ratio — pass AAA. Pearl white `#f0f0f0` on `#0a2a4a` yields approximately 14.8:1 — well above AAA. Bio glow `#40e0c0` on `#0a2a4a` yields approximately 6.5:1 — pass AA for normal text, AAA for large text. Gold `#c4a043` on `#0a2a4a` yields approximately 5.1:1 — use only for large text or decorative purposes where AA large is acceptable.

- **Focus visibility.** Gold focus rings (`#c4a043`) against the deep ocean background (`#0a2a4a`) provide strong visual contrast for keyboard users. Ensure `ring-offset-2 ring-offset-[#0a2a4a]` so the ring separates clearly from the element edge.

- **Reduced motion.** Wrap all bioluminescent pulse animations and slow transitions in `@media (prefers-reduced-motion: reduce)` blocks. Replace animations with static glow states. `transition-all duration-500` becomes `transition-none`. Pulse animations become `animate-none` with the glow shadow at its midpoint value.

- **Color independence.** Never use bio glow green `#40e0c0` as the sole indicator of interactive state. Pair glow changes with structural changes — border weight increase, text weight change, icon change, or size shift. A user who cannot perceive green will still understand the state change.

- **Touch targets.** All interactive elements in the underwater kingdom must meet the 44x44px minimum touch target. Pearl throne buttons, bio glow links, and porthole navigation items must all meet this threshold. Generous padding (`px-8 py-3` minimum) ensures usability.

- **Semantic HTML.** Structural panels (coral palace walls) should use `<section>` or `<article>`. Navigation should use `<nav>`. The jellyfish chandelier divider should use `<hr>` with appropriate ARIA or a visually hidden label. Porthole cards should use `<figure>` with `<figcaption>` if they contain descriptive content.

- **Text alternatives.** Seaweed curtain SVGs and jellyfish chandelier decorative elements must have `aria-hidden="true"` since they are purely decorative. Submarine portholes that display content must have `aria-label` describing what the porthole frames.

- **Dark mode consideration.** The entire underwater kingdom is already dark-mode native. In contexts where a light mode is also required, map coral palace `#e08080` to light backgrounds and ocean deep `#0a2a4a` to dark backgrounds, but preserve the bio glow accent color in both modes for consistency.

- **Animation seizure safety.** Bioluminescent pulse animations must stay below 3 flashes per second. The recommended 3-second cycle (`duration-[3000ms]`) is well within safe limits. Never implement rapid flickering bio-glow effects.
