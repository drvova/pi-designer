---
name: gothic-cathedral-ui
description: Build gothic cathedral UI components (soaring pointed arches, ribbed vaults, flying buttresses, rose windows, stained glass, stone nave, candlelit choir) with vertical soaring proportions, intricate tracery, and the divine light filtering through colored glass. Trigger this skill when the user asks for gothic cathedral design, stained glass UI, cathedral interior, Notre-Dame interior, ribbed vaulting, flying buttress accents, rose window elements, candlelit ecclesiastical, or soaring vertical cathedral interfaces.
---

# Gothic Cathedral UI

Use this skill to design and implement luminous, soaring interfaces inspired by the interior of a gothic cathedral bathed in colored light: soaring pointed arches formed by CSS clip-paths, intricate rose windows built from concentric SVG rings, ribbed vault ceilings from intersecting arch SVGs, flying buttress silhouette accents, stained glass color palettes in content areas, warm candle flicker light effects, stone column vertical dividers, and lace-like tracery border patterns. This is the *lit* cathedral — warm candlelight on sandstone, divine color pouring through glass — distinct from the cold, shadow-heavy gothic-ui skill.

## Non-Negotiable Foundations

- Gothic Cathedral UI draws from the *interior* experience of 12th-16th century cathedrals: soaring pointed arches, ribbed vaulting overhead, stained glass windows flooding colored light across stone surfaces, and the warm flicker of candlelight on sandstone.
- Materials are warm stone and colored glass: sandstone, warm gray limestone, leaded stained glass, polished brass candleholders, and aged oak pews.
- Colors are warm and luminous: sandstone grays, warm earth tones, and vivid stained glass jewel colors (ruby, sapphire, emerald, gold) that cast colored light across surfaces.
- Verticality is paramount: elements soar upward with tall aspect ratios, pointed ogival arch shapes, and ascending tracery patterns.
- The mood is transcendent, luminous, and awe-inspiring — the interface should feel like standing in the nave looking up through colored light toward the vaulted ceiling.
- Rose windows are circular focal points with concentric rings and radial segments of colored glass.
- Tracery (delicate interlocking stone patterns) decorates borders, dividers, and panel edges.
- Warm candlelight creates pools of golden warmth against the cool stone, producing a chiaroscuro atmosphere.

## Core Material Recipes

### 1) Ogival Pointed Arch Frame

The signature gothic cathedral shape: a true ogival arch using clip-path with two intersecting arcs creating the pointed crown.

```css
.ogival-arch {
  clip-path: polygon(
    0% 100%,
    0% 40%,
    5% 25%,
    15% 12%,
    30% 4%,
    50% 0%,
    70% 4%,
    85% 12%,
    95% 25%,
    100% 40%,
    100% 100%
  );
}
```

- Tailwind utility: `[clip-path:polygon(0%_100%,0%_40%,5%_25%,15%_12%,30%_4%,50%_0%,70%_4%,85%_12%,95%_25%,100%_40%,100%_100%)]`.
- For narrower, taller arches: compress horizontal percentages to center the point.
- Nest a second smaller arch inside for depth: inner arch at 85% scale with a stained glass fill.

### 2) Warm Sandstone Panel

Sandstone surface with fine-grained warm stone texture.

- `bg-gradient-to-br from-[#c4b898] via-[#b8ad8e] to-[#a89c7e] border border-[#d4c8a8] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]`.
- Stone texture: fine SVG noise at `opacity-[0.06]` in warm gray.
- Mortar joints: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_36px,rgba(0,0,0,0.06)_36px,rgba(0,0,0,0.06)_37px)]` over sandstone surface.
- Shadow casting: panels cast warm shadows, not cold — use `shadow-[0_12px_40px_rgba(100,90,60,0.2)]`.

### 3) Rose Window Element

Circular stained glass rose window as a decorative SVG with concentric rings and radial colored segments.

```html
<svg viewBox="0 0 200 200" class="w-48 h-48 drop-shadow-[0_0_20px_rgba(196,160,67,0.3)]">
  <defs>
    <radialGradient id="roseGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffcc66" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ffcc66" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Outer glow -->
  <circle cx="100" cy="100" r="98" fill="url(#roseGlow)"/>
  <!-- Outer ring -->
  <circle cx="100" cy="100" r="90" fill="none" stroke="#8a8a7a" stroke-width="3"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="#8a8a7a" stroke-width="1.5"/>
  <!-- Colored segments ring 1 (outer) -->
  <path d="M100,10 L104,30 L100,38 L96,30 Z" fill="#c41e1e" opacity="0.7"/>
  <path d="M156,30 L145,45 L138,42 L142,32 Z" fill="#1a4a8a" opacity="0.7"/>
  <path d="M190,100 L170,104 L162,100 L170,96 Z" fill="#1a6a3a" opacity="0.7"/>
  <path d="M156,170 L145,155 L138,158 L142,168 Z" fill="#c4a043" opacity="0.7"/>
  <path d="M100,190 L104,170 L100,162 L96,170 Z" fill="#c41e1e" opacity="0.7"/>
  <path d="M44,170 L55,155 L62,158 L58,168 Z" fill="#1a4a8a" opacity="0.7"/>
  <path d="M10,100 L30,104 L38,100 L30,96 Z" fill="#1a6a3a" opacity="0.7"/>
  <path d="M44,30 L55,45 L62,42 L58,32 Z" fill="#c4a043" opacity="0.7"/>
  <!-- Inner ring -->
  <circle cx="100" cy="100" r="55" fill="none" stroke="#8a8a7a" stroke-width="2"/>
  <!-- Inner colored segments -->
  <path d="M100,45 L104,65 L100,72 L96,65 Z" fill="#c41e1e" opacity="0.6"/>
  <path d="M145,75 L135,85 L130,82 L133,73 Z" fill="#c4a043" opacity="0.6"/>
  <path d="M155,100 L135,104 L128,100 L135,96 Z" fill="#1a6a3a" opacity="0.6"/>
  <path d="M145,125 L135,115 L130,118 L133,127 Z" fill="#1a4a8a" opacity="0.6"/>
  <path d="M100,155 L104,135 L100,128 L96,135 Z" fill="#c41e1e" opacity="0.6"/>
  <path d="M55,125 L65,115 L70,118 L67,127 Z" fill="#c4a043" opacity="0.6"/>
  <path d="M45,100 L65,104 L72,100 L65,96 Z" fill="#1a6a3a" opacity="0.6"/>
  <path d="M55,75 L65,85 L70,82 L67,73 Z" fill="#1a4a8a" opacity="0.6"/>
  <!-- Center medallion -->
  <circle cx="100" cy="100" r="20" fill="#1a1a1a" stroke="#c4a043" stroke-width="2"/>
  <circle cx="100" cy="100" r="8" fill="#c4a043" opacity="0.5"/>
</svg>
```

### 4) Ribbed Vault Ceiling Pattern

SVG pattern of intersecting pointed arches forming the ribbed vault ceiling seen when looking upward.

```html
<div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
  <svg viewBox="0 0 600 200" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="ribGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c4b898" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#8a8a7a" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <!-- Central rib -->
    <path d="M300,0 Q300,100 200,200" fill="none" stroke="url(#ribGrad)" stroke-width="2"/>
    <path d="M300,0 Q300,100 400,200" fill="none" stroke="url(#ribGrad)" stroke-width="2"/>
    <!-- Crossing ribs -->
    <path d="M0,200 Q150,50 300,0" fill="none" stroke="url(#ribGrad)" stroke-width="1.5"/>
    <path d="M600,200 Q450,50 300,0" fill="none" stroke="url(#ribGrad)" stroke-width="1.5"/>
    <!-- Secondary ribs -->
    <path d="M150,200 Q225,80 300,0" fill="none" stroke="#8a8a7a" stroke-width="1" opacity="0.4"/>
    <path d="M450,200 Q375,80 300,0" fill="none" stroke="#8a8a7a" stroke-width="1" opacity="0.4"/>
    <!-- Keystone boss -->
    <circle cx="300" cy="0" r="6" fill="#c4a043" opacity="0.5"/>
  </svg>
</div>
```

### 5) Flying Buttress Silhouette Accent

SVG silhouette of a flying buttress as a decorative side accent, suggesting structural support.

```html
<svg viewBox="0 0 120 200" class="w-16 h-28 opacity-15 text-[#8a8a7a]">
  <path fill="currentColor" d="
    M10,200 L10,120 L15,110 L20,80 L25,60
    C30,45 40,35 50,30 L80,20 L90,18 L95,20 L95,25 L80,30
    C60,38 45,50 40,70 L35,100 L32,110 L30,120 L30,200 Z
    M90,18 L95,15 L100,15 L105,20 L100,22 L95,20 Z
  "/>
</svg>
```

### 6) Stained Glass Content Panel

Content area with a colored stained glass background effect — colored light casting onto a stone surface.

- `bg-gradient-to-br from-[#c4b898]/90 to-[#a89c7e]/90 backdrop-blur-sm border border-[#c4a043]/30 p-6`.
- Color cast overlay: `shadow-[inset_0_0_60px_rgba(196,30,30,0.05),inset_0_0_120px_rgba(26,74,138,0.04)]` (subtle ruby and sapphire color bleed).
- For more intense stained glass effect: add a `::before` pseudo-element with a radial gradient of the dominant glass color at `opacity-0.1`.

### 7) Candle Flicker Light Effect

Animated warm light glow simulating candlelight on stone surfaces.

```css
@keyframes candleFlicker {
  0%, 100% { opacity: 0.8; filter: brightness(1); }
  10% { opacity: 0.75; filter: brightness(0.97); }
  20% { opacity: 0.85; filter: brightness(1.02); }
  35% { opacity: 0.78; filter: brightness(0.99); }
  50% { opacity: 0.88; filter: brightness(1.03); }
  65% { opacity: 0.82; filter: brightness(1.01); }
  80% { opacity: 0.76; filter: brightness(0.98); }
  90% { opacity: 0.84; filter: brightness(1.0); }
}

.candle-glow {
  box-shadow:
    0 0 20px rgba(255, 204, 102, 0.3),
    0 0 60px rgba(255, 204, 102, 0.15),
    0 0 100px rgba(196, 160, 67, 0.08);
  animation: candleFlicker 3s ease-in-out infinite;
}
```

- Tailwind equivalent: `shadow-[0_0_20px_rgba(255,204,102,0.3),0_0_60px_rgba(255,204,102,0.15),0_0_100px_rgba(196,160,67,0.08)] [animation:candleFlicker_3s_ease-in-out_infinite]`.
- Candle point sources: small circles with radial gradient from `#ffcc66` to transparent.

### 8) Stone Column Vertical Divider

Tall stone column divider with capital and base, separating content areas vertically.

```html
<div class="flex flex-col items-center w-8 mx-4">
  <!-- Capital -->
  <svg viewBox="0 0 40 20" class="w-10 h-5 text-[#c4b898]">
    <path fill="currentColor" d="M5,20 L8,8 Q20,0 32,8 L35,20 Z M12,8 Q20,3 28,8" opacity="0.7"/>
  </svg>
  <!-- Shaft -->
  <div class="w-2 flex-1 bg-gradient-to-b from-[#c4b898] via-[#b8ad8e] to-[#c4b898] shadow-[2px_0_4px_rgba(0,0,0,0.15),-2px_0_4px_rgba(0,0,0,0.15)]"></div>
  <!-- Base -->
  <svg viewBox="0 0 40 12" class="w-10 h-3 text-[#c4b898]">
    <path fill="currentColor" d="M0,0 L40,0 L38,12 L2,12 Z" opacity="0.7"/>
  </svg>
</div>
```

### 9) Tracery Border Pattern

Delicate lace-like interlocking stone pattern as a decorative border.

```html
<div class="relative h-6 overflow-hidden opacity-30">
  <svg viewBox="0 0 400 24" class="w-full h-full" preserveAspectRatio="none">
    <defs>
      <pattern id="tracery" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
        <path d="M0,24 Q12,0 24,24 Q36,0 48,24" fill="none" stroke="#8a8a7a" stroke-width="1"/>
        <circle cx="24" cy="12" r="3" fill="none" stroke="#8a8a7a" stroke-width="0.5"/>
        <path d="M12,24 Q18,12 24,24 M24,24 Q30,12 36,24" fill="none" stroke="#8a8a7a" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="400" height="24" fill="url(#tracery)"/>
  </svg>
</div>
```

### 10) Nave Background Layout

Full-page background evoking the cathedral nave: stone floor, rising columns, and vaulted ceiling overhead.

- Floor: `bg-gradient-to-t from-[#8a8a7a]/20 via-[#a89c7e]/10 to-transparent`.
- Columns: repeating vertical stone column dividers at fixed intervals.
- Ceiling: ribbed vault SVG pattern at the top.
- Ambient light: a large radial gradient from the center suggesting light pouring through a rose window above: `bg-[radial-gradient(ellipse_at_top,rgba(196,160,67,0.08)_0%,transparent_60%)]`.

## Color Palette System

### Core Cathedral Palette

| Color | Hex | Role |
|---|---|---|
| Sandstone | `#c4b898` | Primary surface, stone walls |
| Warm Stone | `#b8ad8e` | Secondary surface, shadows |
| Deep Stone | `#8a8a7a` | Dividers, tracery, details |
| Warm Sand | `#d4c8a8` | Highlights, text on dark |
| Ruby Glass | `#c41e1e` | Stained glass — blood, sacrifice |
| Sapphire Glass | `#1a4a8a` | Stained glass — heaven, truth |
| Emerald Glass | `#1a6a3a` | Stained glass — life, renewal |
| Gold Glass | `#c4a043` | Stained glass — divinity, light |
| Candle Warm | `#ffcc66` | Candlelight, warm glow |
| Deep Shadow | `#0a0a0a` | Deepest shadows, text |
| Vault Dark | `#1a1a1a` | Ceiling recesses, deep shadow |
| Bone | `#e8e0d0` | Light text on dark backgrounds |

### Color Usage Rules

- Sandstone and warm stone dominate all surfaces — this is a warm cathedral, not a cold one.
- Stained glass colors (ruby, sapphire, emerald, gold) appear in rose windows, color casts, and accent borders — they are sources of colored light, not flat fills.
- Gold glass is the bridge color between stone and stained glass — use it for tracery highlights, decorative borders, and key accents.
- Candle warm appears only as light effects: glows, flickers, and warm highlights on stone surfaces.
- Deep shadow and vault dark appear in ceiling recesses, behind arches, and in depth shadows.
- Stained glass colors should always have reduced opacity or be applied as shadow/glow effects to simulate light filtering through glass, not as flat opaque fills.

## Typography Recommendations

Gothic Cathedral typography is ecclesiastical, vertical, and luminous:

- **Display headings:** Cinzel (Roman inscriptions carved in stone), EB Garamond Display (elegant medieval manuscript quality), or Cormorant Garamond (soaring vertical strokes).
- **Body:** EB Garamond, Cormorant Garamond, or Crimson Text (readable serif with cathedral warmth).
- **Labels/Small:** `font-serif font-medium uppercase tracking-[0.25em] text-xs` (chiseled stone inscription style).
- **Drop caps:** Large `text-[5rem] leading-none font-serif text-[#c4a043]` for illuminated manuscript-style initial letters.
- Avoid sans-serif entirely. Gothic Cathedral is serif-only territory.
- Line heights should be generous (1.6-1.8) to evoke the spacious verticality of cathedral interiors.

## Component Architecture Pattern

1. Warm sandstone or deep vault-dark background.
2. Ogival pointed arch containers for hero and feature sections.
3. Sandstone panels with fine stone texture and mortar joints.
4. Rose window SVG as hero decoration or section divider.
5. Ribbed vault pattern as ceiling background overlay.
6. Stained glass color casts on content areas.
7. Stone column vertical dividers between content sections.
8. Flying buttress SVG silhouettes as side accents.
9. Tracery border patterns along horizontal edges.
10. Candle flicker glow effects on interactive elements and highlights.

## Interaction Rules

- Default state: warm, luminous, vertically soaring.
- Hover: warm candlelight intensifies on the element, stone surface brightens slightly.
  - `hover:shadow-[0_0_30px_rgba(255,204,102,0.2),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500`.
- Active: `active:translate-y-px active:shadow-[0_0_15px_rgba(255,204,102,0.3)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#c4b898]` (gold ring on stone).
- Transitions: `transition-all duration-500` (slow, graceful, like light shifting across stone).
- Rose window spin: `@keyframes roseSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` — very slow, 120s rotation for decorative rose windows.
- Page load: stained glass colors fade in with a staggered delay, simulating dawn light filling the nave.

## Reusable Tailwind Tokens

- Sandstone panel: `bg-gradient-to-br from-[#c4b898] via-[#b8ad8e] to-[#a89c7e] border border-[#d4c8a8] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]`
- Ogival arch: `[clip-path:polygon(0%_100%,0%_40%,5%_25%,15%_12%,30%_4%,50%_0%,70%_4%,85%_12%,95%_25%,100%_40%,100%_100%)]`
- Cathedral button: `bg-gradient-to-b from-[#c4a043] to-[#a88a33] text-[#1a1a1a] font-serif font-semibold px-8 py-3 border border-[#d4b053] shadow-[0_4px_12px_rgba(196,160,67,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-[#d4b053] hover:to-[#c4a043] transition-all duration-500`
- Deep text: `text-[#0a0a0a]`
- Warm text: `text-[#1a1a1a]`
- Light text on dark: `text-[#e8e0d0]`
- Stone divider: `h-px bg-gradient-to-r from-transparent via-[#8a8a7a] to-transparent`
- Tracery border: `[mask-image:url("data:image/svg+xml,...")]` or SVG pattern at `opacity-30`
- Candle glow: `shadow-[0_0_20px_rgba(255,204,102,0.3),0_0_60px_rgba(255,204,102,0.15)]`
- Stained glass overlay: `shadow-[inset_0_0_60px_rgba(196,30,30,0.05),inset_0_0_120px_rgba(26,74,138,0.04)]`
- Rose window: `drop-shadow-[0_0_20px_rgba(196,160,67,0.3)]`

## Quality Checklist (must pass)

- At least one ogival pointed arch shape (clip-path) framing primary content.
- Warm sandstone surface tones dominate (not cold gray).
- Rose window SVG with concentric rings and colored radial segments present.
- Ribbed vault ceiling pattern visible (even subtly) at top or in background.
- Stained glass colors used as light effects, not flat fills (ruby, sapphire, emerald, gold).
- Candle flicker or warm glow light effect on at least one element.
- Stone column dividers or tracery border patterns separate content areas.
- Typography is ecclesiastical serif (Cinzel, EB Garamond, or Cormorant).
- Vertical emphasis in layout (tall elements, upward-reaching composition).
- The aesthetic reads as the luminous interior of a Gothic cathedral with colored light.
- Flying buttress or tracery decorative accent present.
- Warm shadows (not cold) on all elevated elements.

## Anti-Patterns

- Cold, blue-gray palette (gothic cathedral is warm sandstone, not cold concrete).
- Stained glass colors used as flat opaque fills (they must be glows, casts, or low-opacity overlays).
- Sans-serif typography (gothic cathedral requires classical serif).
- Sharp rectangular boxes without any arch treatment (pointed arches are essential).
- Missing rose windows or ribbed vault patterns (these define the gothic cathedral aesthetic).
- Flat untextured surfaces (sandstone texture and mortar joints are mandatory).
- Light, airy layouts (cathedrals are enclosed, vaulted, and stone-bound).
- Cheerful or playful elements (the mood is transcendent, not casual).
- Missing vertical emphasis (cathedrals soar upward — horizontal layouts break the illusion).
- Warm candle glow effects applied to everything (use restraint — light pools, not floods).
- Modern minimalist design (gothic cathedral is ornate, patterned, and detailed).
- Missing tracery patterns on borders and dividers (tracery is the lace of architecture).

## Accessibility Considerations

- Sandstone backgrounds with deep shadow text (`#0a0a0a` on `#c4b898`) provide strong contrast (WCAG AA+).
- Dark vault backgrounds with bone text (`#e8e0d0` on `#1a1a1a`) provide excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2` (gold ring visible on both stone and dark backgrounds).
- Rose windows, tracery patterns, flying buttress silhouettes, and ribbed vault overlays must be `aria-hidden="true"`.
- Animated candle flicker must respect `prefers-reduced-motion`: disable animation, keep static glow.
- Stained glass color casts must not obscure text readability — always verify contrast over colored overlays.
- Pointed arch clip-paths must not crop interactive elements or text below the arch curve.
- Touch targets must remain adequate despite decorative borders and tracery overlays.
- Vertical layouts must still be responsive — single column on mobile, preserved arch shapes.
- Rose window decorative rotation must pause on hover for users who want to examine the detail.
- Ensure colored light effects do not create insufficient contrast for color-blind users — ruby and emerald may appear similar under certain conditions; always pair with text weight or shape differences.
