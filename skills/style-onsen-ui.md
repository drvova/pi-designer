---
name: onsen-ui
description: Build onsen UI components (Japanese hot spring bath, wooden bath buckets, steam rising from mineral water, river stone surfaces, bamboo water spouts, noren curtain entrance, cedar wood walls, misty outdoor rotenburo) with natural wood textures, rising steam animations, and the serene warmth of Japanese bathing culture. Trigger this skill when the user asks for onsen design, hot spring UI, Japanese bath aesthetic, zen water features, rotenburo outdoor bath, cedar wood interface, or serene Japanese wellness interfaces.
---

# Onsen UI

Use this skill to design and implement serene, warm interfaces inspired by Japanese hot spring bathing culture: cedar wood textures, rising steam animations, river stone surfaces, bamboo accents, noren curtain dividers, and the meditative tranquility of an outdoor rotenburo.

## Non-Negotiable Foundations

- Onsen UI is defined by WARMTH AND CALM: natural materials (wood, stone, water) in warm earth tones, with slow, gentle animations that evoke rising steam and still water.
- Cedar wood is the primary structural material — horizontal grain textures in warm brown tones frame every component.
- Water is the soul of the design: mineral teal and warm blue tones represent the hot spring itself.
- Steam rises slowly and dissolves — translucent white wisps drifting upward using `translateY` and opacity keyframes.
- The aesthetic is WABI-SABI: imperfect, natural, serene. No harsh edges, no neon, no mechanical precision.
- Noren curtain dividers provide section separation — fabric strips hanging from a horizontal bar.
- Japanese bathing culture emphasizes ritual, sequence, and tranquility — layout should feel ordered and calm.

## Core Material Recipes

### 1) Cedar Wood Plank Surface

Horizontal wood grain texture for panels and backgrounds.

- Wood color: `bg-[#8a6a3a]`.
- Horizontal grain lines: repeating `linear-gradient` of slightly darker/lighter brown stripes.
- Grain effect: `bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(90,58,26,0.3)_8px,rgba(90,58,26,0.3)_9px)]`.

Full:
```html
<div class="bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(90,58,26,0.3)_8px,rgba(90,58,26,0.3)_9px)] p-6 rounded-lg">
</div>
```

### 2) Steam Rising Animation

Translucent wisps floating upward and fading out.

```css
@keyframes steam-rise {
  0%   { transform: translateY(0) scaleX(1); opacity: 0.6; }
  50%  { transform: translateY(-30px) scaleX(1.3); opacity: 0.3; }
  100% { transform: translateY(-60px) scaleX(1.6); opacity: 0; }
}

.steam {
  animation: steam-rise 4s ease-out infinite;
}
```

Tailwind: `animate-[steam-rise_4s_ease-out_infinite]`.

### 3) Water Surface

Warm mineral water with subtle shimmer.

- Base: `bg-gradient-to-b from-[#7ab0cc]/60 to-[#5a90aa]/40`.
- Shimmer: `bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite]`.
- Surface line: `border-b-2 border-[#7ab0cc]/30`.

Full:
```html
<div class="relative bg-gradient-to-b from-[#7ab0cc]/60 to-[#5a90aa]/40 rounded-b-xl overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite]"></div>
  <div class="relative p-6 text-white">
    <!-- Water content -->
  </div>
</div>
```

### 4) River Stone Surface

Smooth rounded pebble texture for backgrounds and accents.

```html
<div class="bg-[#8a8a7a] relative">
  <div class="absolute inset-0">
    <div class="absolute top-4 left-8 w-12 h-8 bg-[#7a7a6a] rounded-full opacity-60"></div>
    <div class="absolute top-8 left-20 w-16 h-10 bg-[#9a9a8a] rounded-full opacity-50"></div>
    <div class="absolute top-2 left-36 w-10 h-7 bg-[#6a6a5a] rounded-full opacity-55"></div>
    <!-- More pebbles scattered -->
  </div>
</div>
```

Alternatively, CSS-only pebble pattern:
- `bg-[radial-gradient(ellipse_at_20%_50%,#9a9a8a_0%,transparent_50%),radial-gradient(ellipse_at_60%_30%,#7a7a6a_0%,transparent_40%),radial-gradient(ellipse_at_80%_70%,#8a8a7a_0%,transparent_45%)] bg-[#6a6a5a]`.

### 5) Noren Curtain Divider

Fabric strips hanging from a wooden rod, with optional kanji text.

```html
<div class="relative">
  <!-- Wooden rod -->
  <div class="h-3 bg-[#5a3a1a] rounded-full shadow-md w-full"></div>
  <!-- Fabric strips -->
  <div class="flex justify-center gap-1 pt-1">
    <div class="w-12 h-20 bg-[#1a2a4a] rounded-b-lg flex items-center justify-center text-white/80 text-xs font-serif">湯</div>
    <div class="w-12 h-24 bg-[#1a2a4a] rounded-b-lg flex items-center justify-center text-white/80 text-xs font-serif">宿</div>
    <div class="w-12 h-18 bg-[#1a2a4a] rounded-b-lg flex items-center justify-center text-white/80 text-xs font-serif">泉</div>
    <div class="w-12 h-22 bg-[#1a2a4a] rounded-b-lg flex items-center justify-center text-white/80 text-xs font-serif">風</div>
  </div>
</div>
```

### 6) Wooden Bucket (Oke)

Traditional Japanese bathing bucket SVG shape.

```html
<svg viewBox="0 0 80 90" class="w-20 h-24">
  <!-- Bucket body — tapered trapezoid -->
  <path d="M15,15 L65,15 L58,85 Q40,90 22,85 Z" fill="#8a6a3a" stroke="#5a3a1a" stroke-width="2"/>
  <!-- Horizontal bands -->
  <rect x="18" y="30" width="44" height="3" rx="1" fill="#5a3a1a" opacity="0.6"/>
  <rect x="20" y="55" width="40" height="3" rx="1" fill="#5a3a1a" opacity="0.6"/>
  <!-- Handle arc -->
  <path d="M20,15 Q40,-5 60,15" fill="none" stroke="#5a3a1a" stroke-width="2.5"/>
</svg>
```

### 7) Bamboo Water Spout

Simple bamboo pipe pouring water into the bath.

```html
<svg viewBox="0 0 120 60" class="w-24 h-12">
  <!-- Bamboo pipe -->
  <rect x="0" y="18" width="80" height="10" rx="5" fill="#6a8a4a" stroke="#4a6a2a" stroke-width="1.5"/>
  <!-- Bamboo nodes -->
  <rect x="25" y="16" width="3" height="14" rx="1" fill="#4a6a2a" opacity="0.5"/>
  <rect x="55" y="16" width="3" height="14" rx="1" fill="#4a6a2a" opacity="0.5"/>
  <!-- Water stream -->
  <path d="M78,23 Q90,25 95,35 Q98,45 95,55" fill="none" stroke="#7ab0cc" stroke-width="3" opacity="0.7" stroke-linecap="round"/>
</svg>
```

### 8) Rotenburo Outdoor Scene Frame

Rock border surrounding an outdoor bath with natural backdrop.

- Rock border: `border-8 border-[#6a6a5a] rounded-2xl` with `shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]`.
- Water inside: `bg-gradient-to-b from-[#7ab0cc]/50 to-[#5a90aa]/30`.
- Optional mist overlay: `bg-gradient-to-b from-white/10 via-transparent to-transparent`.

## Color Palette System

### Onsen Palette

| Color | Hex | Usage |
|---|---|---|
| Cedar Warm | `#8a6a3a` | Primary wood, panels, bucket, rod |
| Cedar Dark | `#5a3a1a` | Wood grain lines, shadows, accents |
| Steam White | `rgba(255,255,255,0.6)` | Steam wisps, mist overlays, translucent text |
| Water Warm Blue | `#7ab0cc` | Hot spring water, mineral tones |
| Water Deep | `#5a90aa` | Deeper water, gradients |
| Stone Gray | `#8a8a7a` | River stones, rock borders |
| Stone Dark | `#6a6a5a` | Stone shadows, pebble accents |
| Bamboo Green | `#6a8a4a` | Bamboo spouts, plant accents |
| Noren Indigo | `#1a2a4a` | Curtain fabric, textile accents |
| Mineral Teal | `#5a8a8a` | Mineral water highlights, accent |
| Warm White | `#f5f0e8` | Text on dark backgrounds, highlights |
| Background Dark | `#1a1410` | Deep brown-black for dark mode |

Rules: Colors are WARM AND EARTH-TONED — cedar browns, stone grays, water blues, bamboo greens. Never use cold blues or neon. Steam and mist are always white/translucent, never colored. The palette should feel like a cedar-lined bathhouse on a misty morning.

## Typography Recommendations

Onsen typography balances Japanese aesthetic clarity with warm readability:

- **Display headings:** Zen Antique, Shippori Mincho, or Noto Serif JP (classical Japanese serif).
- **English display:** Cormorant Garamond or EB Garamond (elegant serif that pairs with Japanese).
- **Body:** Zen Kaku Gothic New, Inter, or Noto Sans (clean, warm, readable).
- **Labels:** `font-sans text-sm tracking-wide text-[#f5f0e8]/80` (warm white, subtle).
- **Kanji accents:** Noto Serif JP or Zen Antique for decorative Japanese characters.
- Serif preferred for headings, sans-serif for body. The balance reflects the Japanese aesthetic of structured elegance.

## Component Architecture Pattern

1. Cedar wood frame or background (warm brown horizontal grain).
2. Water element (mineral blue-teal gradient representing the bath).
3. Stone or pebble accents (river stone texture for grounding).
4. Rising steam animation (translucent wisps above water).
5. Bamboo or wooden accents (functional and decorative).
6. Noren curtain dividers between sections.
7. Calm, warm typography with occasional kanji accents.
8. Dark or warm background (cedar-lined interior or misty outdoor).

## Interaction Rules

- Default state: calm, still, warm. Steam drifts gently. Water shimmers subtly.
- Hover: gentle warmth increase — glow intensifies very slightly.
  - `hover:shadow-[0_0_15px_rgba(122,176,204,0.2)] transition-all duration-700`.
- Active: water ripple effect (scale pulse).
  - `active:scale-[1.01] transition-transform duration-300`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#7ab0cc]/50 focus:ring-offset-2 focus:ring-offset-[#1a1410]`.
- Transitions: `transition-all duration-500` (gentle, never abrupt).
- Steam animations: 3-6 seconds, always ease-out (natural drift).
- No bouncy, snappy, or elastic easing — everything is slow, smooth, and meditative.

## Reusable Tailwind Tokens

- Cedar panel: `bg-[#8a6a3a] bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(90,58,26,0.3)_8px,rgba(90,58,26,0.3)_9px)] rounded-lg`
- Water surface: `bg-gradient-to-b from-[#7ab0cc]/60 to-[#5a90aa]/40 rounded-b-xl`
- Steam wisp: `w-8 h-12 bg-white/30 rounded-full blur-sm animate-[steam-rise_4s_ease-out_infinite]`
- River stone: `bg-[#8a8a7a] rounded-full shadow-inner`
- Noren strip: `bg-[#1a2a4a] rounded-b-lg text-white/80 text-xs font-serif`
- Bamboo spout: `bg-[#6a8a4a] rounded-full` (horizontal pipe) with water stream below
- Onsen button: `bg-[#5a3a1a] text-[#f5f0e8] font-sans font-medium rounded-lg px-6 py-3 border border-[#8a6a3a]/50 hover:bg-[#6a4a2a] transition-all duration-500`
- Mineral accent: `bg-[#5a8a8a] text-white rounded-full px-4 py-1 text-sm`
- Rock border frame: `border-8 border-[#6a6a5a] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]`
- Mist overlay: `bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none`

## Quality Checklist (must pass)

- Cedar wood grain texture present on primary structural elements.
- Rising steam animation uses `translateY` + opacity fade (not just opacity alone).
- Water elements use warm blue/teal gradients (not cold blue).
- Stone/pebble textures ground the layout.
- Bamboo accents appear as functional or decorative elements.
- Noren curtain dividers separate major sections.
- All animations are slow (3-6 seconds minimum) and smooth (`ease-out` or `ease-in-out`).
- Typography is warm and serif for headings, clean sans-serif for body.
- Kanji characters appear as decorative accents (not required but strongly encouraged).
- The aesthetic reads as Japanese bathing culture — warm, calm, natural, serene.
- Background is dark or warm-toned (cedar interior or misty outdoor).

## Anti-Patterns

- Fast or bouncy animations (onsen is meditative — nothing snaps, bounces, or jiggles).
- Cold blue as primary color (mineral water is warm blue-teal, not ice blue).
- Sharp geometric patterns (onsen uses organic shapes — stones, steam, wood grain).
- Flat gray without warmth (stone and wood always have warm undertones).
- Missing steam effect (rising steam is the signature onsen element).
- Neon or bright saturated colors (onsen is muted, warm, natural).
- Sans-serif display typography (headings should be serif/classical).
- Hard shadows (shadows should be soft, warm, diffused — like misty light).
- Modern minimalist layout without natural materials (wood, stone, water must be present).
- Missing the ritual/ceremonial quality (layout should feel ordered, sequential, deliberate).
- Western bath imagery (onsen is specifically Japanese — use cedar, not marble).

## Accessibility Considerations

- Warm brown cedar text on dark backgrounds provides adequate contrast.
- Water blue text on dark backgrounds must be verified for WCAG AA (use `#f5f0e8` for body text).
- Steam animations must respect `prefers-reduced-motion: reduce` — provide static translucent overlay instead.
- Focus states: `focus:ring-2 focus:ring-[#7ab0cc]/50` (water blue ring visible on dark backgrounds).
- Noren curtain text (kanji) should be supplemented with English equivalents for non-Japanese users.
- Decorative kanji and SVG elements must be `aria-hidden="true"`.
- River stone patterns are decorative — content must be accessible without them.
- Steam wisps must not obscure interactive elements or text.
- Touch targets must be adequate on wood-textured buttons (`px-6 py-3` minimum).
- Color is never the sole indicator of state — pair water blue highlights with icon or text markers.
- Ensure steam and shimmer animations do not trigger vestibular discomfort — keep movements subtle and slow.
