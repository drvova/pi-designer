---
name: treehouse-resort-ui
description: Build treehouse resort UI components (elevated canopy platforms, rope bridges, leaf-integrated roofs, lantern glow, forest floor below) with organic elevated structures, rope-and-wood construction, and the magical perspective of living among the treetops. Trigger this skill when the user asks for treehouse design, canopy resort UI, elevated forest aesthetic, treetop lodge interface, jungle hotel theme, rope bridge interface, or arboreal architecture.
---

# Treehouse Resort UI

Use this skill to design and implement magical treetop resort interfaces: elevated platform cards with wooden plank surfaces and visible support beams, sagging rope bridge dividers with hanging plank steps, leaf-integrated roof overlays where green canopy merges with wooden roofing, warm lantern glow accents that hang from structural elements, forest floor views beneath elevated content, tree trunk support columns with bark texture, and vine wrapping decorations. The aesthetic is the wonder of living above the forest floor — organic, elevated, hand-built, and lit by warm hanging lights against a green canopy.

## Non-Negotiable Foundations

- Treehouse Resort UI is ELEVATED: content sits above the forest floor, giving a perspective of looking through canopy, not at ground level.
- Materials are organic: rough-sawn wood planks, braided rope, living leaves, bark, and vine — nothing manufactured or smooth.
- The palette is warm earth tones (wood platform brown, bark, rope tan) with green canopy overhead and lantern warm light as accent.
- Wood grain texture is essential on every wooden surface — these are planks with visible grain, not flat brown panels.
- Rope is structural and decorative: rope bridge dividers, hanging rope elements, and wrapped vine decorations throughout.
- Leaves overlap wooden surfaces at edges — the canopy grows into the architecture, not around it.
- Lantern glow provides warm accent lighting — hanging warm lights against green and brown creates the magical resort atmosphere.
- The perspective is from within the canopy: leaves frame the top and sides, forest floor is visible below as distant dark ground.

## Core Material Recipes

### 1) Elevated Platform Card

Wooden planks with visible support beams — the primary card/container element.

- Plank surface: `bg-[#a08050] bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(90,58,26,0.15)_40px,rgba(90,58,26,0.15)_42px)]`.
- Wood grain: `bg-[repeating-linear-gradient(95deg,transparent,transparent_8px,rgba(90,58,26,0.08)_8px,rgba(90,58,26,0.08)_10px)]`.
- Plank separator lines: `bg-[repeating-linear-gradient(180deg,transparent,transparent_24px,rgba(90,58,26,0.2)_24px,rgba(90,58,26,0.2)_26px)]`.
- Container: `relative rounded-lg border border-[#5a3a1a]/30 shadow-[0_8px_24px_rgba(26,58,26,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] p-6`.
- Support beam (decorative bottom bar): `absolute -bottom-3 left-4 right-4 h-3 bg-gradient-to-b from-[#8a6a3a] to-[#5a3a1a] rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)]`.

### 2) Rope Bridge Divider

Sagging rope line with hanging plank steps — a section divider element.

```html
<div class="relative w-full py-8 flex items-center justify-center">
  <!-- Sagging rope -->
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="none">
    <path d="M0,8 Q100,30 200,16 Q300,4 400,12" stroke="#8a7a4a" fill="none" stroke-width="2" opacity="0.6"/>
    <path d="M0,10 Q100,32 200,18 Q300,6 400,14" stroke="#6a5a3a" fill="none" stroke-width="1" opacity="0.3"/>
  </svg>
  <!-- Hanging plank steps -->
  <div class="flex gap-8 relative z-10">
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-4 bg-[#8a7a4a]/60"></div>
      <div class="w-10 h-1.5 bg-[#a08050] rounded-sm border border-[#5a3a1a]/20 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-3 bg-[#8a7a4a]/60"></div>
      <div class="w-10 h-1.5 bg-[#a08050] rounded-sm border border-[#5a3a1a]/20 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-5 bg-[#8a7a4a]/60"></div>
      <div class="w-10 h-1.5 bg-[#a08050] rounded-sm border border-[#5a3a1a]/20 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-3 bg-[#8a7a4a]/60"></div>
      <div class="w-10 h-1.5 bg-[#a08050] rounded-sm border border-[#5a3a1a]/20 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"></div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-4 bg-[#8a7a4a]/60"></div>
      <div class="w-10 h-1.5 bg-[#a08050] rounded-sm border border-[#5a3a1a]/20 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"></div>
    </div>
  </div>
</div>
```

### 3) Leaf-Integrated Roof

Green canopy overlapping a wooden roof surface — header or section top decoration.

- Wood roof base: `bg-gradient-to-b from-[#a08050] to-[#8a6a3a] rounded-t-xl`.
- Leaf overlay: positioned `absolute -top-4 -left-4 -right-4` with overlapping leaf shapes.
- Leaf SVG pattern:
```html
<svg class="absolute -top-6 left-0 right-0 w-full h-16" viewBox="0 0 400 60" preserveAspectRatio="none">
  <ellipse cx="30" cy="20" rx="25" ry="12" fill="#3a7a2a" opacity="0.7" transform="rotate(-15,30,20)"/>
  <ellipse cx="80" cy="16" rx="22" ry="10" fill="#4a8a3a" opacity="0.6" transform="rotate(10,80,16)"/>
  <ellipse cx="140" cy="22" rx="28" ry="11" fill="#3a7a2a" opacity="0.65" transform="rotate(-8,140,22)"/>
  <ellipse cx="200" cy="18" rx="24" ry="12" fill="#4a8a3a" opacity="0.7" transform="rotate(5,200,18)"/>
  <ellipse cx="260" cy="20" rx="26" ry="10" fill="#3a7a2a" opacity="0.6" transform="rotate(-12,260,20)"/>
  <ellipse cx="320" cy="16" rx="22" ry="11" fill="#4a8a3a" opacity="0.65" transform="rotate(8,320,16)"/>
  <ellipse cx="370" cy="22" rx="24" ry="12" fill="#3a7a2a" opacity="0.7" transform="rotate(-5,370,22)"/>
</svg>
```
- Drop shadow under leaf canopy: `shadow-[0_4px_12px_rgba(58,122,42,0.2)]`.
- Leaf edge flutter (optional): `animate-[leafRustle_4s_ease-in-out_infinite_alternate]`.

### 4) Lantern Glow Accent

Warm hanging lights — the signature resort lighting element.

- Lantern body: `relative w-5 h-8 bg-gradient-to-b from-[#ffcc66] to-[#ffaa44] rounded-full shadow-[0_0_16px_rgba(255,204,102,0.6),0_0_32px_rgba(255,204,102,0.3),0_0_48px_rgba(255,204,102,0.15)]`.
- Lantern hook: `absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-[#8a7a4a]`.
- Lantern glow halo: `absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,204,102,0.4)_0%,transparent_70%)] blur-lg`.
- Grouped lanterns (hanging row):
  - `flex items-end gap-6`, each lantern at different heights via `mb-0`, `mb-2`, `mb-1`, `mb-3`.
- Glow on nearby wood: `shadow-[inset_0_0_20px_rgba(255,204,102,0.15)]` on adjacent platform surfaces.
- Flicker: `animate-[lanternGlow_5s_ease-in-out_infinite_alternate]` with subtle opacity and brightness shifts.
- Keyframes:
  ```css
  @keyframes lanternGlow {
    0%, 100% { opacity: 0.9; filter: brightness(1); }
    30% { opacity: 1; filter: brightness(1.08); }
    60% { opacity: 0.85; filter: brightness(0.96); }
    80% { opacity: 0.95; filter: brightness(1.04); }
  }
  ```

### 5) Forest Floor View Below

Distant ground perspective — a background layer beneath elevated content.

- Floor gradient: `bg-gradient-to-b from-[#2a5a2a]/20 via-[#1a3a1a]/40 to-[#0a2a0a]/60`.
- Floor texture: `bg-[radial-gradient(circle_2px,rgba(58,122,42,0.15)_1px,transparent_1px)] bg-[size:16px_16px]` (distant undergrowth dots).
- Depth effect: content above this layer is elevated, floor below creates vertical perspective.
- Falling leaves (optional decorative): `animate-[leafFall_6s_linear_infinite]` with rotating leaf SVGs drifting downward.
- Leaf fall keyframes:
  ```css
  @keyframes leafFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.4; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }
  ```

### 6) Tree Trunk Support Column

Structural element holding up platform cards — vertical bark-textured column.

- Bark surface: `bg-gradient-to-b from-[#5a3a1a] via-[#6a4a2a] to-[#4a2a10]`.
- Bark texture: `bg-[repeating-linear-gradient(180deg,transparent,transparent_3px,rgba(90,58,26,0.2)_3px,rgba(90,58,26,0.2)_5px)]`.
- Bark knots: `bg-[radial-gradient(ellipse_8px_6px,rgba(74,42,16,0.3)_0%,transparent_100%)] bg-[position:20px_30px] bg-[size:40px_50px]`.
- Column shape: `w-8 rounded-lg shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15),inset_2px_0_4px_rgba(255,255,255,0.05),2px_0_8px_rgba(0,0,0,0.1)]`.
- Branch stub: `absolute w-3 h-2 bg-[#5a3a1a] rounded-r-full -right-3 top-1/3 shadow-[0_1px_2px_rgba(0,0,0,0.2)]`.

### 7) Vine Wrapping Decoration

Living vine wrapping around structural elements — decorative organic detail.

```html
<svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 32 200" preserveAspectRatio="none">
  <path d="M16,0 Q24,25 8,50 Q-4,75 16,100 Q36,125 8,150 Q-4,175 16,200" stroke="#3a7a2a" fill="none" stroke-width="1.5" opacity="0.4"/>
  <ellipse cx="22" cy="40" rx="4" ry="2.5" fill="#3a7a2a" opacity="0.3" transform="rotate(-20,22,40)"/>
  <ellipse cx="4" cy="90" rx="4" ry="2.5" fill="#4a8a3a" opacity="0.3" transform="rotate(15,4,90)"/>
  <ellipse cx="24" cy="140" rx="4" ry="2.5" fill="#3a7a2a" opacity="0.3" transform="rotate(-10,24,140)"/>
  <ellipse cx="6" cy="180" rx="3" ry="2" fill="#4a8a3a" opacity="0.3" transform="rotate(20,6,180)"/>
</svg>
```

### 8) Wood Plank Button

Organic button with wood grain and rope border detail.

- `bg-gradient-to-b from-[#a08050] to-[#8a6a3a] text-[#1a3a1a] font-medium rounded-md px-8 py-3 border border-[#5a3a1a]/40 shadow-[0_2px_8px_rgba(90,58,26,0.2),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(90,58,26,0.2)] hover:shadow-[0_4px_16px_rgba(90,58,26,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-gradient-to-b hover:from-[#b09060] hover:to-[#9a7a4a] transition-all duration-300`.

### 9) Hanging Rope Tab

Tab/navigation element suspended by rope.

- Rope hanger: `absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#8a7a4a]`.
- Tab surface: `relative bg-[#a08050] text-[#1a3a1a] text-sm font-medium px-4 py-2 rounded-b-lg border border-[#5a3a1a]/30 shadow-[0_2px_6px_rgba(0,0,0,0.1)]`.
- Active state: `bg-[#8a6a3a] text-[#ffcc66] shadow-[0_0_12px_rgba(255,204,102,0.2)]`.

### 10) Treehouse Room Card

Full card composition combining platform, rope, leaves, and lantern light.

- Card container: `relative bg-[#a08050] bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(90,58,26,0.15)_40px,rgba(90,58,26,0.15)_42px)] rounded-xl overflow-hidden border border-[#5a3a1a]/30 shadow-[0_8px_24px_rgba(26,58,26,0.2)]`.
- Leaf canopy top: absolute positioned leaf SVG overlay at `-top-4` with overlapping ellipses.
- Rope accent border: top edge with dashed `border-t-2 border-t-[#8a7a4a]/40 border-dashed`.
- Lantern corner: small lantern element positioned `absolute top-4 right-4`.
- Support beam (bottom): decorative wooden beam spanning the bottom edge.
- Interior padding: `p-6 pt-8` (extra top padding to accommodate leaf overlay).

## Color Palette System

### Core Treehouse Resort Palette

| Color | Hex | Role |
|---|---|---|
| Wood Platform | `#a08050` | Primary surface, platform cards, buttons |
| Rope Tan | `#8a7a4a` | Rope elements, dividers, hangers, borders |
| Leaf Green | `#3a7a2a` | Canopy, leaves, vine decorations, nature |
| Lantern Warm | `#ffcc66` | Warm glow, lights, highlights, accents |
| Forest Floor Dark | `#1a3a1a` | Deep background, ground level, dark text on warm |
| Bark Brown | `#5a3a1a` | Tree trunks, deep wood tones, borders |
| Sky Peek | `#87ceeb` | Small glimpses through canopy gaps, breathing room |
| Light Leaf | `#4a8a3a` | Secondary leaf tone, lighter foliage |
| Dark Wood | `#6a4a2a` | Deep wood grain, bark knots, shadows |
| Warm White | `#f5ead0` | Text on dark surfaces, gentle highlights |

### Composition Rule

Wood platform brown dominates (40-50% of visible surface). Green canopy frames the top and edges (20-25%). Rope tan provides linear structure and borders (10-15%). Lantern warm is a deliberate accent — never more than 10% of any surface. Forest floor dark appears only as distant background beneath elevated content. Sky peek appears in small gaps through the canopy — never as a full background.

## Typography Recommendations

- **Display:** Bitter or Libre Baskwood (warm serif with handcrafted character, like signage carved into wood).
- **Body:** Source Sans 3 or Work Sans (clear, friendly, readable against wood grain).
- **Accent/Lodge Name:** Playfair Display (elegant serif for resort branding — the premium feel).
- **Data/Coordinates:** IBM Plex Mono (for elevation readings, GPS coordinates, temperature).
- **Room Plaques:** `font-display text-lg font-bold text-[#1a3a1a] tracking-wide` (wood-carved signage feel).
- Typography has warmth and organic character — nothing cold or clinical. Serifs are welcome here, unlike in ice/frost themes. The fonts should feel like they were chosen by someone who builds with their hands.

## Component Architecture Pattern

```
TreehouseResortLayout
  CanopyHeader (leaf-integrated roof, lantern hanging, sky peek gaps)
  TreeTrunkSidebar (bark-textured vertical navigation)
  ElevatedPlatformContainer (main content area)
    PlatformCard (wood plank surface)
      LeafOverlay (canopy encroachment)
      LanternAccent (warm corner light)
    RopeBridgeDivider (section separator)
    PlatformCard
      VineDecoration (organic wrapping)
  ForestFloorBackground (distant ground beneath elevated content)
  HangingRopeTabBar (navigation suspended by rope)
```

### Composition Rules

- Canopy always frames from above — leaves hang over the top edge of every major section.
- Platform cards float above forest floor background, creating depth layers.
- Rope bridges connect sections horizontally — they are structural dividers, not just decorative.
- Tree trunk columns appear on the left edge or between cards as vertical structural elements.
- Vine decorations wrap around tree trunks and platform edges — organic, not geometric.
- Lanterns hang from the top of cards, headers, or rope bridges — never sitting on flat surfaces.
- Forest floor is always visible below elevated content, creating the vertical treehouse perspective.

## Interaction Rules

- Default: warm wood, organic, elevated above forest floor.
- Hover on wood surfaces: wood brightens, grain becomes more visible.
  - `hover:bg-[#b09060] hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.1),0_4px_16px_rgba(90,58,26,0.25)] transition-all duration-300`.
- Hover on rope elements: slight sway (if animation is enabled).
  - `hover:animate-[ropeSway_2s_ease-in-out_infinite]`.
- Hover on lantern: glow intensifies.
  - `hover:shadow-[0_0_24px_rgba(255,204,102,0.7),0_0_48px_rgba(255,204,102,0.4)]`.
- Active: `active:scale-[0.98] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffcc66]/40 focus:ring-offset-2 focus:ring-offset-[#a08050]`.
- Lantern glow: continuous gentle flicker, never stops (warm and alive).
- Leaf rustle: slow ambient movement on canopy leaves.
- Transitions: `transition-all duration-300 ease-out` (natural, organic feel).
- Rope sway keyframes:
  ```css
  @keyframes ropeSway {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(0.5deg); }
    75% { transform: rotate(-0.5deg); }
  }
  ```
- Leaf rustle keyframes:
  ```css
  @keyframes leafRustle {
    0%, 100% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(1deg) translateX(1px); }
  }
  ```

## Reusable Tailwind Tokens

- Wood platform: `bg-[#a08050] bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(90,58,26,0.15)_40px,rgba(90,58,26,0.15)_42px)]`.
- Bark column: `bg-gradient-to-b from-[#5a3a1a] via-[#6a4a2a] to-[#4a2a10] bg-[repeating-linear-gradient(180deg,transparent,transparent_3px,rgba(90,58,26,0.2)_3px,rgba(90,58,26,0.2)_5px)]`.
- Rope element: `text-[#8a7a4a]`.
- Leaf green: `text-[#3a7a2a]` or `bg-[#3a7a2a]`.
- Lantern glow: `shadow-[0_0_16px_rgba(255,204,102,0.6),0_0_32px_rgba(255,204,102,0.3)]`.
- Wood button: `bg-gradient-to-b from-[#a08050] to-[#8a6a3a] text-[#1a3a1a] border border-[#5a3a1a]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`.
- Forest floor: `bg-gradient-to-b from-[#2a5a2a]/20 via-[#1a3a1a]/40 to-[#0a2a0a]/60`.
- Sky peek: `bg-[#87ceeb]`.
- Deep text: `text-[#1a3a1a]`.
- Warm text: `text-[#ffcc66]`.

## Quality Checklist

- Background has forest floor depth (dark green gradient beneath elevated content).
- At least one platform card with visible wood plank grain texture.
- Rope bridge divider or rope element present between sections.
- Leaf canopy overlay on at least one header or card top.
- Lantern glow accent visible — warm light against wood and green.
- Tree trunk support column or bark-textured structural element.
- Wood grain texture visible on all wooden surfaces (not flat brown).
- Color palette is warm earth tones with green canopy — no cold blues or grays.
- Elevated perspective: content feels above the ground, not at ground level.
- Typography has warm serif or friendly sans — nothing cold or clinical.
- Vine decoration on at least one structural element.
- The aesthetic reads as a treehouse resort in a living forest.
- Lantern animations are gentle flickers, not strobing or harsh.
- Leaf elements overlap structural elements (canopy grows into architecture).
- Support beams or structural elements visible beneath platform cards.

## Anti-Patterns

- Cold blue or gray color tones (this is a warm forest environment, not arctic).
- Flat brown panels without wood grain texture (wood must have visible grain).
- Missing rope elements (rope is structural and decorative, not optional).
- Missing leaf/canopy elements (the green canopy frames everything).
- Missing lantern glow (the warm hanging light is the signature accent).
- Smooth manufactured surfaces (everything should feel hand-built and organic).
- Perfect geometric shapes without organic irregularity (treehouses are not precision-built).
- Missing forest floor perspective (the elevation is what defines treehouse resort).
- Metal or glass materials (this is wood, rope, and living plants only).
- High-saturation colors (the palette is warm and earthy, never neon or vivid).
- Cold geometric sans-serif typography for main text (serifs and warm sans are preferred).
- White or gray backgrounds (the base is either warm wood or dark forest floor).
- Missing bark texture on trunk elements (tree trunks must show bark grain).
- Content at ground level without elevation (everything is raised above the forest floor).

## Accessibility Considerations

- Warm wood surfaces with dark forest text provide solid contrast (WCAG AA minimum, AAA with deep text).
- Lantern glow animations must respect `prefers-reduced-motion` — reduce to static warm glow without flicker.
- Leaf rustle and rope sway animations must respect `prefers-reduced-motion` — disable subtle ambient motion.
- Falling leaf animations must respect `prefers-reduced-motion` — hide decorative falling leaves entirely.
- Focus states use lantern warm ring: `focus:ring-2 focus:ring-[#ffcc66]/40` (visible against wood and green backgrounds).
- Wood grain texture overlays must not reduce text contrast below 4.5:1 ratio.
- Lantern warm text on dark backgrounds must be verified — warm yellow on dark green can struggle.
- Rope bridge and vine SVGs must be `aria-hidden="true"` when purely decorative.
- Leaf overlay SVGs must be `aria-hidden="true"`.
- Forest floor background must not interfere with content readability at any scroll position.
- Touch targets on wood plank buttons must meet 44x44px minimum despite organic border styling.
- Screen readers should announce "Treehouse Resort" theme context via a visually hidden heading or landmark.
- Color alone should not distinguish interactive elements — combine with iconography or text labels for lantern-highlighted items.
