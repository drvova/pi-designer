---
name: japanese-tea-house-ui
description: Build Japanese tea house UI components (tatami mats, shoji screens, tokonoma alcove, cast iron kettle, matcha bowl, bamboo garden view) with minimalist Japanese aesthetics, natural materials, and the serene wabi-sabi of the tea ceremony. Trigger this skill when the user asks for Japanese tea house, tatami, shoji screen, tokonoma, tetsubin, matcha, wabi-sabi, zen garden, bamboo, chanoyu, sado, tea ceremony, ryokan, or Japanese minimalist interface.
---

# Japanese Tea House UI

Use this skill to design and build serene, meditative interfaces inspired by the Japanese tea ceremony room (chashitsu): woven tatami mat floor textures, translucent shoji screen paper panels with thin wooden lattice frames, recessed tokonoma display alcoves, cast iron tetsubin kettle silhouettes, ceramic matcha bowl accents, and tranquil bamboo garden views glimpsed through open shoji. The aesthetic embodies wabi-sabi — finding beauty in imperfection, simplicity, and the quiet passage of natural materials. Every element should feel intentional yet effortless, sparse yet warm, refined yet humble.

## Core Material Recipes

### 1) Tatami Mat Texture

Woven rush grass (igusa) floor surface with visible weave pattern.

- `bg-[#c4b878] bg-[repeating-linear-gradient(0deg,rgba(160,150,80,0.15)_0px,transparent_1px,transparent_3px),repeating-linear-gradient(90deg,rgba(160,150,80,0.1)_0px,transparent_1px,transparent_3px)] border border-[#a89858] p-8`.
- The two perpendicular repeating gradients create a cross-hatch weave pattern at 3px intervals, simulating the tight weave of real tatami rush grass.
- Tatami border edge (heri): `border-4 border-[#6a5a3a]` (the fabric-bound edge of a traditional tatami mat).
- Subtle warm tone variation: layer a `bg-[radial-gradient(ellipse_at_30%_70%,rgba(200,190,100,0.1),transparent)]` for organic unevenness in the straw color.

### 2) Shoji Screen Grid

Translucent white paper panels set within a thin wooden lattice frame.

```html
<div class="relative bg-[#f5f0e0] border-2 border-[#6a5a3a] p-0 overflow-hidden" style="width:200px; height:280px;">
  <!-- Wooden frame (outer) -->
  <div class="absolute inset-0 border-[3px] border-[#6a5a3a] rounded-none pointer-events-none z-20"></div>
  <!-- Vertical mullions -->
  <div class="absolute top-0 bottom-0 left-1/4 w-[2px] bg-[#6a5a3a] z-10"></div>
  <div class="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#6a5a3a] z-10"></div>
  <div class="absolute top-0 bottom-0 left-3/4 w-[2px] bg-[#6a5a3a] z-10"></div>
  <!-- Horizontal rails -->
  <div class="absolute left-0 right-0 top-1/3 h-[2px] bg-[#6a5a3a] z-10"></div>
  <div class="absolute left-0 right-0 top-2/3 h-[2px] bg-[#6a5a3a] z-10"></div>
  <!-- Translucent paper glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,250,230,0.3),rgba(245,240,224,0.1))] z-0"></div>
</div>
```

- The grid creates a 3x3 panel arrangement typical of standard shoji. The paper panels are not pure white but a warm off-white (`#f5f0e0`) representing aged washi paper. The radial gradient simulates soft diffused light passing through the translucent paper.

### 3) Tokonoma Alcove Niche

Recessed display alcove with a hanging scroll (kakemono) and subtle depth.

```html
<div class="relative bg-[#5a4a3a] border-2 border-[#4a3a2a] p-6 overflow-hidden" style="width:240px; height:320px;">
  <!-- Recessed depth shadow -->
  <div class="absolute inset-0 shadow-[inset_0_4px_16px_rgba(0,0,0,0.4),inset_0_-2px_8px_rgba(0,0,0,0.2)]"></div>
  <!-- Scroll (kakemono) -->
  <div class="relative mx-auto mt-4" style="width:60px;">
    <!-- Top roller -->
    <div class="w-full h-[3px] bg-[#3a2a1a] rounded-full mb-0"></div>
    <!-- Scroll paper -->
    <div class="w-full bg-[#e8dcc0] px-2 py-8 text-center">
      <span class="font-serif text-lg text-[#3a2a0a] leading-tight block" style="writing-mode:vertical-rl;">侘寂</span>
    </div>
    <!-- Bottom roller -->
    <div class="w-full h-[3px] bg-[#3a2a1a] rounded-full mt-0"></div>
  </div>
  <!-- Stone arrangement on the floor -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-end">
    <div class="w-4 h-3 bg-[#8a8a7a] rounded-[40%] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <div class="w-6 h-5 bg-[#7a7a6a] rounded-[30%] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
    <div class="w-3 h-2 bg-[#9a9a8a] rounded-[45%] shadow-[0_1px_2px_rgba(0,0,0,0.3)]"></div>
  </div>
</div>
```

- The tokonoma is always recessed — the inset shadow creates depth. A single hanging scroll is the focal point. Small stones at the base suggest a borrowed-landscape (shakkei) arrangement. The scroll uses vertical writing mode (`writing-mode:vertical-rl`) for authentic Japanese calligraphy orientation.

### 4) Cast Iron Kettle (Tetsubin)

Silhouette of a traditional Japanese iron kettle with hobnail texture.

```html
<svg viewBox="0 0 120 100" class="w-24 h-20">
  <!-- Body -->
  <ellipse cx="60" cy="65" rx="42" ry="30" fill="#2a2a2a" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Hobnail texture dots -->
  <circle cx="35" cy="55" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="45" cy="50" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="55" cy="48" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="65" cy="48" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="75" cy="50" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="85" cy="55" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="40" cy="63" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="50" cy="60" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="60" cy="58" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="70" cy="60" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="80" cy="63" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="45" cy="70" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="55" cy="68" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="65" cy="68" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <circle cx="75" cy="70" r="2.5" fill="none" stroke="#3a3a3a" stroke-width="0.5"/>
  <!-- Lid -->
  <ellipse cx="60" cy="38" rx="28" ry="6" fill="#2a2a2a" stroke="#1a1a1a" stroke-width="0.5"/>
  <!-- Lid knob -->
  <circle cx="60" cy="33" r="4" fill="#3a3a3a" stroke="#1a1a1a" stroke-width="0.5"/>
  <!-- Handle (overhead arc) -->
  <path d="M30,42 Q60,10 90,42" fill="none" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/>
  <!-- Spout -->
  <path d="M102,58 Q112,54 108,48" fill="none" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/>
  <!-- Steam wisps -->
  <path d="M55,28 Q52,20 56,12" fill="none" stroke="rgba(200,195,180,0.3)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M62,26 Q65,16 61,8" fill="none" stroke="rgba(200,195,180,0.25)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M68,28 Q72,18 67,10" fill="none" stroke="rgba(200,195,180,0.2)" stroke-width="1" stroke-linecap="round"/>
</svg>
```

- The tetsubin features the characteristic hobnail (arare) texture as hollow circles on the body, a rounded belly shape, an overhead arched handle, a short curved spout, and delicate steam wisps rising from the lid. The iron is rendered as near-black with subtle lighter stroke for dimension.

### 5) Matcha Bowl (Chawan)

Rustic ceramic tea bowl with irregular form and visible glaze variation.

```html
<svg viewBox="0 0 100 70" class="w-20 h-14">
  <!-- Bowl body (slightly asymmetric for wabi-sabi) -->
  <path d="M15,25 Q12,50 20,62 Q40,70 60,68 Q80,65 85,50 Q88,35 82,25 Z" fill="#6a8a3a" stroke="#5a7a2a" stroke-width="0.5"/>
  <!-- Glaze variation patches -->
  <ellipse cx="35" cy="45" rx="12" ry="8" fill="rgba(120,140,60,0.3)"/>
  <ellipse cx="60" cy="50" rx="10" ry="6" fill="rgba(90,110,40,0.2)"/>
  <!-- Foot ring -->
  <ellipse cx="50" cy="64" rx="22" ry="5" fill="#5a4a3a" stroke="#4a3a2a" stroke-width="0.5"/>
  <!-- Matcha liquid surface -->
  <ellipse cx="50" cy="32" rx="32" ry="8" fill="#6a9a3a" opacity="0.6"/>
  <!-- Rim highlight -->
  <path d="M18,26 Q50,18 82,26" fill="none" stroke="rgba(200,190,160,0.4)" stroke-width="0.8"/>
</svg>
```

- The chawan is deliberately slightly asymmetric — a hallmark of wabi-sabi aesthetics. The matcha green glaze has visible tonal variation. The foot ring is unglazed clay (dark earth tone). The liquid surface shows the vivid green of freshly whisked matcha.

### 6) Bamboo Garden View

Tranquil garden scene viewed through an open shoji or window opening.

```html
<div class="relative overflow-hidden bg-[#3a4a2a] border-2 border-[#6a5a3a]" style="width:300px; height:200px;">
  <!-- Sky/atmosphere gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#c4c8a8] via-[#a4aa88] to-[#6a8a4a] opacity-60"></div>
  <!-- Bamboo stalks -->
  <svg viewBox="0 0 300 200" class="absolute inset-0 w-full h-full">
    <!-- Bamboo 1 -->
    <rect x="60" y="10" width="4" height="190" fill="#5a7a3a" rx="2"/>
    <rect x="58" y="50" width="8" height="2" fill="#4a6a2a" rx="1"/>
    <rect x="58" y="100" width="8" height="2" fill="#4a6a2a" rx="1"/>
    <rect x="58" y="150" width="8" height="2" fill="#4a6a2a" rx="1"/>
    <!-- Bamboo 2 -->
    <rect x="140" y="20" width="3" height="180" fill="#6a8a4a" rx="1.5"/>
    <rect x="138" y="60" width="7" height="2" fill="#5a7a3a" rx="1"/>
    <rect x="138" y="110" width="7" height="2" fill="#5a7a3a" rx="1"/>
    <rect x="138" y="160" width="7" height="2" fill="#5a7a3a" rx="1"/>
    <!-- Bamboo 3 -->
    <rect x="220" y="5" width="4" height="195" fill="#5a8040" rx="2"/>
    <rect x="218" y="45" width="8" height="2" fill="#4a7a3a" rx="1"/>
    <rect x="218" y="95" width="8" height="2" fill="#4a7a3a" rx="1"/>
    <rect x="218" y="145" width="8" height="2" fill="#4a7a3a" rx="1"/>
    <!-- Bamboo leaves -->
    <ellipse cx="50" cy="45" rx="12" ry="3" fill="#7a9a4a" transform="rotate(-30 50 45)" opacity="0.8"/>
    <ellipse cx="72" cy="42" rx="10" ry="2.5" fill="#6a8a3a" transform="rotate(20 72 42)" opacity="0.7"/>
    <ellipse cx="130" cy="55" rx="11" ry="2.5" fill="#7a9a4a" transform="rotate(-25 130 55)" opacity="0.8"/>
    <ellipse cx="155" cy="58" rx="9" ry="2" fill="#6a8a3a" transform="rotate(15 155 58)" opacity="0.7"/>
    <ellipse cx="210" cy="40" rx="12" ry="3" fill="#7a9a4a" transform="rotate(-20 210 40)" opacity="0.8"/>
    <ellipse cx="235" cy="43" rx="10" ry="2.5" fill="#6a8a3a" transform="rotate(25 235 43)" opacity="0.7"/>
    <!-- Ground moss/grass -->
    <ellipse cx="150" cy="195" rx="140" ry="10" fill="#4a6a2a" opacity="0.4"/>
  </svg>
</div>
```

- The bamboo garden uses stacked rectangles for stalks with horizontal node marks (fushi). Leaves are rotated ellipses at branch joints. The atmospheric gradient from pale sky to green ground creates depth. The entire composition is visible through what would be an open shoji frame.

### 7) Wooden Floor Board Accent

Polished hinoki (Japanese cypress) floor planking for surfaces and borders.

- `bg-[#a89060] bg-[repeating-linear-gradient(90deg,rgba(80,60,30,0.08)_0px,transparent_1px,transparent_60px,rgba(80,60,30,0.08)_60px)] border border-[#8a7a50]`.
- Each plank division is a single hairline at 60px intervals, representing hand-planed wooden boards.
- The base color `#a89060` is warm hinoki with a slight golden cast.

### 8) Stone Basin (Tsukubai)

Low water basin for the purification ritual at the garden entrance.

```html
<div class="relative">
  <!-- Basin body -->
  <svg viewBox="0 0 80 50" class="w-16 h-10">
    <path d="M10,20 Q8,40 15,45 Q30,50 50,48 Q68,46 72,35 Q75,22 70,18 Z" fill="#7a7a6a" stroke="#5a5a4a" stroke-width="0.5"/>
    <!-- Water surface -->
    <ellipse cx="40" cy="25" rx="28" ry="8" fill="rgba(140,160,180,0.4)" stroke="rgba(100,120,140,0.3)" stroke-width="0.5"/>
    <!-- Rim -->
    <path d="M12,22 Q40,14 70,20" fill="none" stroke="#8a8a7a" stroke-width="1"/>
  </svg>
  <!-- Bamboo ladle (hishaku) resting across the rim -->
  <svg viewBox="0 0 100 12" class="absolute -top-2 left-0 w-24 h-3">
    <rect x="0" y="3" width="80" height="4" rx="2" fill="#a89060" stroke="#8a7a50" stroke-width="0.3"/>
    <!-- Cup end -->
    <ellipse cx="85" cy="5" rx="10" ry="5" fill="#a89060" stroke="#8a7a50" stroke-width="0.3"/>
    <ellipse cx="85" cy="5" rx="8" ry="3" fill="rgba(140,160,180,0.3)"/>
  </svg>
</div>
```

- The tsukubai is a rough-hewn stone basin with a slightly irregular rim. A bamboo ladle (hishaku) rests across the top. The water surface has a subtle blue-gray translucency.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Tatami Straw | `#c4b878` | Woven rush grass floor |
| Shoji White | `#f5f0e0` | Washi paper panels |
| Wood Frame | `#6a5a3a` | Shoji lattice, structural wood |
| Hinoki Wood | `#a89060` | Polished cypress flooring |
| Cast Iron | `#2a2a2a` | Tetsubin kettle, iron fittings |
| Matcha Green | `#6a8a3a` | Tea, ceramic glaze, organic accents |
| Bamboo Green | `#7a9a4a` | Garden bamboo, natural greenery |
| Scroll Paper | `#e8dcc0` | Hanging scroll, aged paper |
| Earth Floor | `#5a4a3a` | Roji garden path, tokonoma walls |
| Stone Gray | `#7a7a6a` | Tsukubai basin, garden stones |
| Deep Shadow | `#3a2a1a` | Interior shadows, recessed areas |
| Moss Green | `#4a6a2a` | Garden ground cover |

Rules: Tatami straw and shoji white establish the warm neutral base. Wood tones provide structural warmth. Matcha green and bamboo green are the only saturated colors — used sparingly for organic life and tea elements. Cast iron is near-black, providing grounding contrast. The palette should feel like sitting in a quiet chashitsu on an overcast afternoon, with soft diffused light filtering through paper screens.

## Typography Recommendations

- **Display:** Noto Serif JP, Shippori Mincho (elegant Japanese serif for headings).
- **Body:** Noto Sans JP, Inter (clean readable sans for body text — the tea house is minimal, not ornate).
- **Labels:** `font-sans font-normal text-xs tracking-widest uppercase text-[#6a5a3a]`.
- **Vertical text (accent):** `writing-mode:vertical-rl text-[#3a2a0a]` for scroll calligraphy and sidebar accents.
- **Avoid:** Heavy blackletter, ornate display fonts, or anything visually loud — the tea house aesthetic is quiet restraint.

## Component Architecture Pattern

### Card / Panel (Tatami Mat Surface)

- Outer: `bg-[#c4b878] bg-[repeating-linear-gradient(0deg,rgba(160,150,80,0.12)_0px,transparent_1px,transparent_3px),repeating-linear-gradient(90deg,rgba(160,150,80,0.08)_0px,transparent_1px,transparent_3px)] border-4 border-[#6a5a3a] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.15)]`.
- Content area: `p-6`.
- Title slot: `font-sans font-normal text-sm tracking-[0.2em] uppercase text-[#3a2a1a] mb-4`.
- Body slot: `font-sans text-base text-[#3a2a1a]/80 leading-relaxed`.

### Card / Panel (Shoji Screen Surface)

- Outer: `bg-[#f5f0e0] border-2 border-[#6a5a3a] shadow-[0_1px_4px_rgba(0,0,0,0.1)]`.
- Grid overlay: `absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(106,90,58,0.6)_60px,rgba(106,90,58,0.6)_62px),repeating-linear-gradient(0deg,transparent_0px,transparent_80px,rgba(106,90,58,0.6)_80px,rgba(106,90,58,0.6)_82px)]` (CSS-only shoji grid without SVG).
- Content area: `relative z-10 p-8`.

### Button (Wooden Plank)

- Base: `bg-[#a89060] text-[#f5f0e0] font-sans font-normal px-6 py-3 border border-[#8a7a50] shadow-[0_2px_0_#5a4a3a] hover:translate-y-0.5 hover:shadow-[0_1px_0_#5a4a3a] active:shadow-none transition-all duration-200 tracking-wider text-sm`.
- Inverse (on dark backgrounds): `bg-[#3a2a1a] text-[#c4b878] border-[#5a4a3a] shadow-[0_2px_0_#1a1a1a]`.

### Divider (Bamboo or Wooden Rail)

- Horizontal: `border-t border-[#6a5a3a]/30 my-6`.
- Bamboo accent: a single `bg-[#7a9a4a] h-[2px] w-16 mx-auto rounded-full opacity-40` for a minimalist green accent divider.

## Interaction Rules

- **Hover states:** Subtle opacity shift (`hover:opacity-80`) or gentle downward nudge (`hover:translate-y-0.5`). Movement should feel like a slow exhale — nothing abrupt.
- **Active states:** Remove shadow depth (`shadow-none`) with a slight press (`translate-y-0.5`).
- **Focus states:** `focus:ring-1 focus:ring-[#6a5a3a]/40 focus:outline-none` — a thin wooden-brown ring, barely perceptible, never aggressive.
- **Transitions:** `transition-all duration-300 ease-in-out` — deliberately slow and meditative. No snap transitions.
- **Page transitions:** Prefer `opacity` fades over slides. Content should dissolve in and out like mist.
- **Scroll behavior:** `scroll-behavior: smooth` for gentle vertical movement through the space.

## Reusable Tailwind Tokens

- Tatami surface: `bg-[#c4b878] bg-[repeating-linear-gradient(0deg,rgba(160,150,80,0.12)_0px,transparent_1px,transparent_3px),repeating-linear-gradient(90deg,rgba(160,150,80,0.08)_0px,transparent_1px,transparent_3px)]`.
- Shoji panel: `bg-[#f5f0e0] border-2 border-[#6a5a3a]`.
- Shoji grid (CSS): `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_60px,rgba(106,90,58,0.6)_60px,rgba(106,90,58,0.6)_62px),repeating-linear-gradient(0deg,transparent_0px,transparent_80px,rgba(106,90,58,0.6)_80px,rgba(106,90,58,0.6)_82px)]`.
- Tokonoma recess: `bg-[#5a4a3a] shadow-[inset_0_4px_16px_rgba(0,0,0,0.4),inset_0_-2px_8px_rgba(0,0,0,0.2)]`.
- Tetsubin iron: `fill="#2a2a2a" stroke="#3a3a3a"`.
- Matcha accent: `bg-[#6a8a3a]` or `text-[#6a8a3a]`.
- Bamboo accent: `bg-[#7a9a4a]` or `text-[#7a9a4a]`.
- Hinoki wood: `bg-[#a89060] border-[#8a7a50]`.
- Wooden button: `bg-[#a89060] border border-[#8a7a50] shadow-[0_2px_0_#5a4a3a]`.
- Earth shadow: `bg-[#3a2a1a]`.

## Quality Checklist

- At least one tatami mat surface with visible woven texture.
- At least one shoji screen element with wooden lattice grid.
- Tokonoma alcove niche present in the layout (even as a sidebar or accent).
- Cast iron tetsubin silhouette or kettle element visible.
- Matcha green accent used for at least one interactive or focal element.
- Bamboo or natural greenery present somewhere in the design.
- Color palette is warm neutral (straw, paper, wood) with restrained green accents.
- Typography is clean, minimal, and quiet — no ornate or loud typefaces.
- The aesthetic reads as Japanese tea house / wabi-sabi / zen minimalism.
- Everything feels calm, sparse, natural, and intentionally incomplete.
- Transitions and animations are slow, soft, and meditative.
- No element feels rushed, cluttered, or visually loud.

## Anti-Patterns

- Bright saturated colors (the palette is warm neutrals with restrained green only).
- Heavy drop shadows or glow effects (tea house elements sit softly, not dramatically).
- Missing wood texture (shoji frames, floor planks, and structural elements must show wood tones).
- Missing tatami or shoji (these two textures are the defining surfaces of the tea house).
- Missing the wabi-sabi imperfection (matcha bowls are asymmetric, materials show age — nothing is factory-perfect).
- Sans-serif heavy/bold typography for display (the aesthetic demands quiet, light, restrained type).
- Busy or cluttered layouts (the tea house is defined by negative space and restraint).
- Bright white backgrounds (shoji paper is warm off-white, not clinical white).
- Hard geometric patterns without organic variation (natural materials have irregularity).
- Fast or snappy animations (everything in the tea house moves slowly and deliberately).
- Neon or electric accent colors (the only accent greens are matcha and bamboo).
- Glassmorphism or frosted-glass effects (tea house surfaces are matte paper, rough ceramic, and woven grass).
- Gradient-heavy surfaces (materials are flat or subtly textured, not glossy or iridescent).
- Missing negative space (the empty tokonoma, the bare floor, the unpainted wall — emptiness is design).

## Accessibility Considerations

- Warm neutral backgrounds with dark text: verify `#3a2a1a` on `#c4b878` passes WCAG AA (contrast ratio approximately 4.8:1 — passes). Verify `#3a2a1a` on `#f5f0e0` passes WCAG AAA (ratio approximately 9.5:1).
- Focus states must be visible despite their subtlety: `focus:ring-2 focus:ring-[#6a5a3a] focus:ring-offset-2 focus:ring-offset-[#c4b878]` ensures the ring stands out against tatami.
- Decorative SVGs (tetsubin, chawan, tsukubai, bamboo garden) must carry `aria-hidden="true"` when purely ornamental.
- The meditation-pace transitions (`duration-300`) must respect `prefers-reduced-motion` — reduce to `duration-0` or disable entirely for users who prefer no animation.
- Shoji grid overlays are decorative — apply `pointer-events-none` and `aria-hidden="true"` to CSS grid overlays.
- Text on tatami texture backgrounds: the weave pattern can reduce readability for small text — add a subtle solid backdrop (`bg-[#c4b878]/90`) behind text blocks if needed.
- Vertical text (writing-mode: vertical-rl) for Japanese calligraphy is decorative — screen readers should access the same text in horizontal flow.
- Touch targets on wooden plank buttons: maintain minimum 44x44px hit area despite the minimal shadow offset.
- Low-contrast decorative elements (steam wisps, subtle glaze variation) must never be the sole means of conveying information.
