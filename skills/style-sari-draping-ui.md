---
name: sari-draping-ui
description: Build sari draping UI components (silk pallu drape, blouse border, zari gold thread, pleat fold, bangles stack, bindi dot, mirror work) with flowing silk drapes, gold thread accents, and the graceful textile art of sari draping. Trigger this skill when the user asks for sari design, Indian textile UI, silk pallu interface, zari gold thread pattern, blouse border design, pleat fold layout, mirror work embroidery, bindi accent, or traditional Indian draping aesthetic.
---

# Sari Draping UI

Use this skill to design and implement flowing, opulent interfaces inspired by Indian sari textile art: cascading silk pallu drape gradients, decorative blouse border trims, zari metallic gold thread woven patterns, fan-folded pleat structures, bangles stack decorative accents, bindi dot focal points, shisha mirror work embroidery, and the graceful six yards of draped silk that define one of the world's most iconic garments. This is the sari -- fluid, opulent, gold-threaded, and alive with the rhythm of draped fabric.

## Non-Negotiable Foundations

These properties are mandatory for every component built with this skill. They define the fundamental character of the sari draping aesthetic and cannot be overridden or omitted.

- **Flowing drape defines every layout.** Every section, card, and panel must suggest the gravity-driven cascade of draped silk fabric. This means diagonal gradients that flow from one corner to another, curves that follow the natural fall of fabric over the body, and edges that taper rather than end abruptly. Straight horizontal and vertical divisions are secondary to diagonal flow.
- **Zari gold thread is the signature accent.** The metallic gold thread woven into sari borders and pallu ends is the defining decorative element. It appears on borders, as accent lines, in woven geometric patterns, and as the primary premium indicator. Gold is never absent from a sari-inspired interface -- it is the thread that ties the entire composition together.
- **The pallu drape is the hero element.** The pallu -- the decorative loose end that drapes over the shoulder -- is the most visually dramatic part of a sari. Every major section header or hero must reference the pallu: a flowing diagonal cascade from upper-right to lower-left, rich with color and pattern, fading into the background fabric at its edges.
- **Mirror work (shisha) provides reflective accents.** Small circular reflective elements embedded in embroidered borders add sparkle and visual interest. These appear on card edges, button centers, and decorative borders as small silver or gold circles that suggest embedded mirror fragments.
- **The blouse border frames the composition.** The decorative border that trims the sari blouse neckline and sleeves appears as the primary framing element for cards, panels, and section headers. It is a structured, geometric band of pattern that contrasts with the flowing silk drape.
- **Bangles and bindi add cultural ornament.** Overlapping circular bangles serve as decorative accents and interactive indicators (like loading spinners or progress rings). The bindi dot -- a single concentrated circle of color -- serves as the focal point marker for navigation, badges, and section headings.

## Core Material Recipes

### 1) Silk Pallu Drape Gradient

The flowing diagonal cascade of the sari pallu, rich with color and fading at the edges.

- Base: `bg-gradient-to-br from-[#c44040] via-[#c44040]/80 to-[#1a6a3a] relative overflow-hidden`.
- Drape flow: `bg-[linear-gradient(135deg,rgba(196,64,64,0.9)_0%,rgba(196,64,64,0.6)_40%,rgba(26,106,58,0.8)_70%,rgba(26,106,58,0.4)_100%)]`.
- Sheen: `bg-[linear-gradient(160deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.15)_55%,transparent_80%)]` overlaid at 100% to simulate the diagonal light catch on draped silk.
- Zari border at pallu edge: `border-b-4 border-[#c4a043]` or an inner gold line.
- Full: `bg-gradient-to-br from-[#c44040] via-[#c44040]/80 to-[#1a6a3a] bg-[linear-gradient(160deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.15)_55%,transparent_80%)] relative overflow-hidden border-b-4 border-[#c4a043]`.

### 2) Blouse Border Pattern

Decorative geometric border trim inspired by the embroidered neckline and sleeve borders of sari blouses.

```css
.blouse-border {
  background-color: #c44040;
  background-image:
    repeating-linear-gradient(90deg,
      #c4a043 0px, #c4a043 3px,
      #c44040 3px, #c44040 8px,
      #c4a043 8px, #c4a043 9px,
      #1a6a3a 9px, #1a6a3a 14px,
      #c4a043 14px, #c4a043 15px,
      #c44040 15px, #c44040 20px
    );
  background-size: 20px 100%;
}
```

Tailwind: `bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44040_8px,#c4a043_8px,#c4a043_9px,#1a6a3a_9px,#1a6a3a_14px,#c4a043_14px,#c4a043_15px,#c44040_15px,#c44040_20px)] bg-[size:20px_100%]`.

- Border band: `h-3 bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44040_8px,#c4a043_8px,#c4a043_9px,#1a6a3a_9px,#1a6a3a_14px,#c4a043_14px,#c4a043_15px,#c44040_15px,#c44040_20px)] bg-[size:20px_100%]`.
- Thick border band: `h-6 bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44040_8px,#c4a043_8px,#c4a043_9px,#1a6a3a_9px,#1a6a3a_14px,#c4a043_14px,#c4a043_15px,#c44040_15px,#c44040_20px)] bg-[size:20px_100%]`.

### 3) Zari Gold Thread Woven Pattern

Metallic thread woven into geometric grid patterns, the signature luxury detail of sari weaving.

- Base: `bg-[#c4a043] relative overflow-hidden`.
- Woven grid: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px),repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px)]`.
- Metallic sheen: `bg-[linear-gradient(135deg,transparent_30%,rgba(255,220,120,0.4)_48%,rgba(255,240,180,0.6)_50%,rgba(255,220,120,0.4)_52%,transparent_70%)]` for a diagonal light catch across the gold thread.
- Full: `bg-[#c4a043] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px),repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px)] bg-[linear-gradient(135deg,transparent_30%,rgba(255,220,120,0.4)_48%,rgba(255,240,180,0.6)_50%,rgba(255,220,120,0.4)_52%,transparent_70%)]`.

### 4) Pleat Fold Structure

Fan-folded fabric creating a structured accordion pattern, referencing the pre-pleated section of a sari at the waist.

- Base: `bg-[#c44040] relative overflow-hidden`.
- Pleat shadows: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(0,0,0,0.12)_18px,rgba(0,0,0,0.12)_20px,transparent_20px,transparent_22px,rgba(255,255,255,0.08)_22px,rgba(255,255,255,0.08)_24px)]`.
- Fold direction: the shadow-light-shadow pattern repeats at 24px intervals to create the illusion of fabric folds catching light from one direction.
- Full: `bg-[#c44040] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(0,0,0,0.12)_18px,rgba(0,0,0,0.12)_20px,transparent_20px,transparent_22px,rgba(255,255,255,0.08)_22px,rgba(255,255,255,0.08)_24px)] rounded-lg`.
- Vertical pleat: rotate the gradient to `repeating-linear-gradient(0deg,...)` for vertical pleats.

### 5) Mirror Work (Shisha) Border

Small reflective circles embedded in embroidered borders, creating sparkle and visual rhythm.

```html
<svg viewBox="0 0 400 24" class="w-full h-6">
  <!-- Embroidered band -->
  <rect x="0" y="8" width="400" height="8" fill="#c44040" rx="1"/>
  <!-- Gold thread lines -->
  <line x1="0" y1="8" x2="400" y2="8" stroke="#c4a043" stroke-width="1"/>
  <line x1="0" y1="16" x2="400" y2="16" stroke="#c4a043" stroke-width="1"/>
  <!-- Mirror circles -->
  <g>
    <circle cx="20" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="20" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="20" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="60" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="60" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="60" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="100" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="100" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="100" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="140" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="140" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="140" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="180" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="180" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="180" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="220" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="220" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="220" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="260" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="260" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="260" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="300" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="300" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="300" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="340" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="340" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="340" cy="11" r="1" fill="white" opacity="0.6"/>
    <circle cx="380" cy="12" r="5" fill="#e8e0d0" stroke="#c4a043" stroke-width="1.5"/>
    <circle cx="380" cy="12" r="3" fill="#f8f8f8" opacity="0.8"/>
    <circle cx="380" cy="11" r="1" fill="white" opacity="0.6"/>
  </g>
</svg>
```

### 6) Bindi Accent Dot

Single concentrated circle of color used as a focal point marker, navigation indicator, or section badge.

- Base: `bg-[#c41e1e] rounded-full shadow-[0_0_0_3px_#f5f0f0,0_0_0_5px_#c4a043]`.
- Small bindi: `w-3 h-3 bg-[#c41e1e] rounded-full shadow-[0_0_0_2px_#f5f0f0,0_0_0_3px_#c4a043]`.
- Medium bindi: `w-5 h-5 bg-[#c41e1e] rounded-full shadow-[0_0_0_3px_#f5f0f0,0_0_0_5px_#c4a043]`.
- The concentric ring shadow creates the effect of a bindi placed on skin with a gold decorative border around it.

### 7) Bangles Stack

Overlapping concentric circles representing stacked glass and gold bangles on a wrist.

```html
<svg viewBox="0 0 80 80" class="w-20 h-20">
  <!-- Bangles (overlapping rings) -->
  <circle cx="40" cy="40" r="35" fill="none" stroke="#c44040" stroke-width="3" opacity="0.9"/>
  <circle cx="40" cy="40" r="31" fill="none" stroke="#c4a043" stroke-width="2" opacity="0.8"/>
  <circle cx="40" cy="40" r="28" fill="none" stroke="#1a6a3a" stroke-width="3" opacity="0.9"/>
  <circle cx="40" cy="40" r="24" fill="none" stroke="#c4a043" stroke-width="2" opacity="0.7"/>
  <circle cx="40" cy="40" r="21" fill="none" stroke="#c41e1e" stroke-width="2.5" opacity="0.85"/>
  <circle cx="40" cy="40" r="18" fill="none" stroke="#c4a043" stroke-width="1.5" opacity="0.6"/>
  <!-- Center dot -->
  <circle cx="40" cy="40" r="4" fill="#c41e1e"/>
</svg>
```

### 8) Sari Silk Surface

Primary content surface with silk sheen and woven texture.

- Base: `bg-[#f5f0e8] rounded-xl p-6 shadow-[0_2px_12px_rgba(196,64,64,0.1)] border border-[#c4a043]/30`.
- Silk weave texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(196,64,64,0.02)_2px,rgba(196,64,64,0.02)_3px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(26,106,58,0.015)_3px,rgba(26,106,58,0.015)_4px)]`.
- Silk sheen: `bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_55%,transparent_75%)]`.
- Full: `bg-[#f5f0e8] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(196,64,64,0.02)_2px,rgba(196,64,64,0.02)_3px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(26,106,58,0.015)_3px,rgba(26,106,58,0.015)_4px)] bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_55%,transparent_75%)] rounded-xl p-6 shadow-[0_2px_12px_rgba(196,64,64,0.1)] border border-[#c4a043]/30`.

### 9) Sari Draping Button

Silk-textured button with zari gold border and drape gradient.

- Primary: `bg-gradient-to-br from-[#c44040] to-[#a03030] text-[#f5f0e8] font-serif font-medium px-8 py-3 rounded-lg border-2 border-[#c4a043] hover:shadow-[0_4px_16px_rgba(196,64,64,0.4)] transition-all duration-300`.
- Secondary: `bg-[#f5f0e8] text-[#c44040] font-serif font-medium px-8 py-3 rounded-lg border-2 border-[#c44040]/30 hover:bg-[#c44040] hover:text-[#f5f0e8] hover:border-[#c44040] transition-all duration-300`.
- Gold accent button: `bg-[#c4a043] text-[#1a3a1a] font-serif font-medium px-8 py-3 rounded-lg border-2 border-[#8a6a23] hover:bg-[#d4b053] transition-all duration-300 shadow-[0_2px_8px_rgba(196,160,67,0.3)]`.

## Color Palette System

| Color Name | Hex | Textile Reference | Role |
|---|---|---|---|
| Sari Silk Red | `#c44040` | Kumkum crimson | Primary accent, pallu, blouse |
| Sari Silk Green | `#1a6a3a` | Temple green | Secondary accent, pallu gradient |
| Zari Gold | `#c4a043` | Metallic zari thread | Borders, premium accent, thread |
| Blouse Red | `#b03030` | Blouse fabric | Blouse border base, buttons |
| Border Pattern | `#c41e1e` | Kumkum vermillion | Border accents, bindi, high accent |
| Mirror Silver | `#e8e0d0` | Shisha mirror | Mirror work, reflective accent |
| Silk Sheen | `#f5f0e8` | Raw silk white | Surfaces, backgrounds, silk base |
| Text Dark | `#1a3a1a` | Forest dark | Body text on light surfaces |

Additional accent tones (use sparingly, never as backgrounds):

| Accent | Hex | Role |
|---|---|---|
| Deep Zari | `#8a6a23` | Darker gold for text on gold backgrounds |
| Pallu Purple | `#6a2a6a` | Optional pallu accent for variety |
| Mirror Highlight | `#f8f8f8` | Bright center of mirror work circles |
| Border Blue | `#1a4a8a` | Optional border pattern accent |

Rules: The palette is rooted in traditional sari textile dyes and metallic thread: kumkum red from vermillion, temple green from natural indigo混合, zari gold from metallic thread weaving, and raw silk white from untreated silk fiber. Colors should feel like silk fabric under warm festival lighting -- rich, saturated, and alive with the subtle sheen of woven thread. No pastels, no muted tones, no cold grays. Sari colors are bold, celebratory, and full of life.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (elegant serif with calligraphic flourish). Use at `text-3xl` or larger for headers. The flowing letterforms reference the curves of draped silk and the decorative calligraphy found on wedding invitation cards.
- **Body:** Inter, Noto Sans (clean, high-legibility sans-serif for body content). Use at `text-base` to `text-lg` with `leading-relaxed` (1.625) for comfortable reading against rich textile backgrounds.
- **Accent/Labels:** Source Serif Pro, Lora (refined serif for border titles, section labels, and badge text). Use at `text-sm` to `text-base` with `tracking-widest` for uppercase decorative label treatment.
- **Ornamental headings:** For premium or ceremonial contexts, use `font-display italic` to suggest the flowing calligraphy of traditional Indian textile inscriptions.
- **Character spacing:** `tracking-widest` for uppercase labels and border titles. `tracking-normal` for body text. The generous spacing references the measured rhythm of woven border patterns.
- **Color pairing:** `text-[#1a3a1a]` on silk/cream surfaces. `text-[#f5f0e8]` on red/green/dark backgrounds. `text-[#c4a043]` on dark backgrounds for gold embroidery text. All pairings must maintain WCAG AA contrast ratios.

## Component Architecture Pattern

Every component follows a flowing drape structure mimicking how a sari wraps and cascades over the body: a silk base surface, a diagonal drape gradient that establishes flow direction, a woven texture layer, decorative border elements that frame the composition, and focal motif accents placed at deliberate cultural reference points.

**Required layers (bottom to top):**

1. **Silk base surface** -- warm off-white or colored silk texture as the foundation.
2. **Drape gradient** -- diagonal gradient (135deg or 160deg) flowing from upper-left to lower-right, establishing the fabric drape direction.
3. **Woven texture** -- fine cross-hatch pattern simulating silk weave at very low opacity.
4. **Border elements** -- blouse border pattern or zari gold thread lines framing the edges.
5. **Content layer** -- the actual interactive or informational content, positioned relatively with sufficient z-index.
6. **Focal motif** -- mirror work circles, bangles stack, or bindi dot placed at a deliberate focal point.

**Container pattern (pallu drape hero):**

```html
<div class="relative overflow-hidden rounded-2xl border-b-4 border-[#c4a043]">
  <!-- Drape gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#c44040] via-[#c44040]/80 to-[#1a6a3a]"></div>
  <!-- Silk sheen -->
  <div class="absolute inset-0 bg-[linear-gradient(160deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.15)_55%,transparent_80%)]"></div>
  <!-- Woven texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(255,255,255,0.02)_3px,rgba(255,255,255,0.02)_4px)] pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10 p-8">
    <!-- actual content here -->
  </div>
  <!-- Zari border accent -->
  <div class="absolute bottom-0 inset-x-0 h-1 bg-[#c4a043]"></div>
</div>
```

**Card pattern (silk surface):**

```html
<div class="bg-[#f5f0e8] rounded-xl p-6 shadow-[0_2px_12px_rgba(196,64,64,0.1)] border border-[#c4a043]/30 relative overflow-hidden">
  <!-- Woven texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(196,64,64,0.02)_2px,rgba(196,64,64,0.02)_3px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(26,106,58,0.015)_3px,rgba(26,106,58,0.015)_4px)] pointer-events-none"></div>
  <!-- Silk sheen -->
  <div class="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_55%,transparent_75%)] pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10">
    <!-- card content -->
  </div>
  <!-- Bottom border band -->
  <div class="absolute bottom-0 inset-x-0 h-1.5 bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44040_8px,#c4a043_8px,#c4a043_9px)] bg-[size:9px_100%]"></div>
</div>
```

**Border band divider pattern:**

```html
<div class="relative w-full">
  <!-- Blouse border band -->
  <div class="h-3 bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44000_8px,#c4a043_8px,#c4a043_9px,#1a6a3a_9px,#1a6a3a_14px,#c4a043_14px,#c4a043_15px,#c44040_15px,#c44040_20px)] bg-[size:20px_100%]"></div>
  <!-- Mirror work accent -->
  <div class="flex justify-center -mt-3">
    <div class="flex gap-8 items-center bg-[#f5f0e8] px-4 rounded-full">
      <div class="w-3 h-3 bg-[#e8e0d0] rounded-full border border-[#c4a043] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]"></div>
      <div class="w-4 h-4 bg-[#c41e1e] rounded-full shadow-[0_0_0_2px_#f5f0e8,0_0_0_3px_#c4a043]"></div>
      <div class="w-3 h-3 bg-[#e8e0d0] rounded-full border border-[#c4a043] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]"></div>
    </div>
  </div>
</div>
```

## Interaction Rules

- **Hover states** intensify the silk sheen and deepen the zari gold border glow: `hover:shadow-[0_6px_24px_rgba(196,160,67,0.25)] hover:border-[#c4a043]/70` to suggest gold thread catching more light as the viewer's attention is drawn to the surface.
- **Active/pressed states** compress the element downward with a subtle drape shift: `active:translate-y-0.5 active:shadow-[0_1px_4px_rgba(196,64,64,0.1)]` to simulate pressing into layered silk fabric. The element should feel like it has weight and drape, not like a rigid digital button.
- **Focus states** use a zari gold ring: `focus-visible:ring-2 focus-visible:ring-[#c4a043] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0e8]`. The gold ring references the metallic thread border of a premium sari pallu.
- **Transitions** are flowing and graceful, like silk settling into a drape: `transition-all duration-300 ease-out`. Sari interactions should feel like fabric in motion -- smooth, weighty, and unhurried. No snappy or bouncy spring physics.
- **Loading states** use a bangles stack rotation: concentric colored rings that rotate at different speeds with `animate-[bangles_3s_linear_infinite]` (the outermost ring rotates clockwise, inner rings counter-clockwise), or a pallu drape gradient that shifts with `animate-[drape_4s_ease-in-out_infinite]` (the gradient endpoint oscillates).
- **Scroll reveals** drape in from the upper right: elements fade in from `opacity-0 translate-x-8 -translate-y-4` to their final position with `animate-[drape-in_0.6s_ease-out_forwards]`, simulating the motion of a pallu being thrown over the shoulder.
- **Disabled states** fade to distant mirror-silver: `opacity-40 saturate-50` to suggest the element has lost its silk luster and zari gold sheen.

## Reusable Tailwind Tokens

- Silk base: `bg-[#f5f0e8]`
- Silk surface card: `bg-[#f5f0e8] rounded-xl shadow-[0_2px_12px_rgba(196,64,64,0.1)] border border-[#c4a043]/30`
- Silk weave texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(196,64,64,0.02)_2px,rgba(196,64,64,0.02)_3px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(26,106,58,0.015)_3px,rgba(26,106,58,0.015)_4px)]`
- Silk sheen: `bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_55%,transparent_75%)]`
- Pallu drape: `bg-gradient-to-br from-[#c44040] via-[#c44040]/80 to-[#1a6a3a]`
- Zari gold thread: `bg-[#c4a043] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px),repeating-linear-gradient(90deg,transparent_0px,transparent_4px,rgba(138,90,20,0.3)_4px,rgba(138,90,20,0.3)_5px)]`
- Blouse border band: `h-3 bg-[#c44040] bg-[repeating-linear-gradient(90deg,#c4a043_0px,#c4a043_3px,#c44040_3px,#c44040_8px,#c4a043_8px,#c4a043_9px,#1a6a3a_9px,#1a6a3a_14px,#c4a043_14px,#c4a043_15px,#c44040_15px,#c44040_20px)] bg-[size:20px_100%]`
- Pleat fold: `bg-[#c44040] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(0,0,0,0.12)_18px,rgba(0,0,0,0.12)_20px,transparent_20px,transparent_22px,rgba(255,255,255,0.08)_22px,rgba(255,255,255,0.08)_24px)]`
- Mirror work circle: `w-3 h-3 bg-[#e8e0d0] rounded-full border border-[#c4a043] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]`
- Bindi dot: `w-4 h-4 bg-[#c41e1e] rounded-full shadow-[0_0_0_2px_#f5f0e8,0_0_0_3px_#c4a043]`
- Sari red button: `bg-gradient-to-br from-[#c44040] to-[#a03030] text-[#f5f0e8] font-serif border-2 border-[#c4a043]`
- Gold accent button: `bg-[#c4a043] text-[#1a3a1a] font-serif border-2 border-[#8a6a23]`
- Zari gold text: `text-[#c4a043]`
- Deep zari text: `text-[#8a6a23]`
- Sari red text: `text-[#c44040]`
- Silk text: `text-[#f5f0e8]`
- Dark text: `text-[#1a3a1a]`
- Sari red hover: `hover:shadow-[0_6px_24px_rgba(196,64,64,0.3)]`
- Zari gold focus ring: `focus-visible:ring-2 focus-visible:ring-[#c4a043] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0e8]`
- Pallu drape sheen: `bg-[linear-gradient(160deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.15)_55%,transparent_80%)]`

## Quality Checklist

- At least one pallu drape gradient (diagonal cascade from upper-left to lower-right).
- At least one blouse border band (geometric repeating pattern in red, gold, and green).
- Zari gold thread woven pattern present on borders or as accent element.
- Silk sheen gradient overlay on all interactive or focal surfaces.
- At least one mirror work (shisha) border or decorative element with reflective circles.
- Pleat fold texture present on at least one surface or section.
- Bindi dot as a focal point marker for navigation, badges, or section headings.
- Bangles stack decorative element present for cultural ornament.
- The palette reads as traditional Indian sari textile: crimson, green, gold, raw silk white.
- Typography is elegant serif for display, clean sans for body.
- Diagonal flow dominates over strict horizontal/vertical divisions.
- The aesthetic evokes draped silk fabric with metallic thread, not flat digital design.
- Every surface has textile character (silk weave, thread texture -- not flat).
- Gold zari thread accents are present on all premium or decorative elements.
- The composition has both flowing drape elements and structured border elements in balance.

## Anti-Patterns

- Flat matte surfaces without silk sheen (sari surfaces catch and reflect light).
- Missing the pallu drape gradient (the diagonal cascade is the defining sari visual).
- Strict horizontal/vertical grid without diagonal flow (sari design flows diagonally).
- Missing zari gold thread (gold metallic thread is the signature luxury detail).
- Cool gray or blue-gray palettes (the palette is warm: crimson, green, gold on silk white).
- Synthetic or neon accent colors (all colors come from traditional sari dyes and metallic thread).
- Heavy solid borders without blouse border pattern treatment (edges reference textile border trim).
- Sans-serif display typography (sari elegance pairs with serif or calligraphic type).
- Symmetrical layout without drape direction (sari draping is inherently diagonal and asymmetric).
- Crisp machine-perfect edges without fabric fold character (textile surfaces have soft, slightly irregular edges).
- Missing mirror work or bangles decorative elements (these are cultural identifiers).
- Overcrowded surfaces without silk breathing room (plain silk areas balance decorated pallu areas).
- Dark or moody backgrounds (sari surfaces are silk-colored or vibrant, not dark digital surfaces).
- Missing the blouse border as a structural framing element (the border trim is the primary edge treatment).
- Static or rigid button interactions (sari-inspired interactions should flow and drape, not snap).

## Accessibility Considerations

- **Contrast ratios:** All text must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Use `text-[#1a3a1a]` on silk/cream surfaces and `text-[#f5f0e8]` on red/green/dark backgrounds. Gold text (`text-[#c4a043]`) requires careful testing -- it meets contrast on deep green (`#1a6a3a`) but may fail on red or white; use `text-[#8a6a23]` as a darker gold variant when needed. Test every text-on-background combination, especially text over diagonal drape gradients where contrast varies across the element.
- **Silk sheen and reduced motion:** The silk sheen gradient is a static CSS gradient and does not animate, so no `prefers-reduced-motion` concern for static surfaces. However, any drape-flow animation, bangles rotation, or pallu-shift scroll effect must be disabled under `@media (prefers-reduced-motion: reduce)`. Provide static fallback states for all animated textile elements. The diagonal drape direction should remain visible even when animations are disabled.
- **Focus indicators:** Every interactive element must have a visible focus ring. Use the zari gold focus ring (`focus-visible:ring-2 focus-visible:ring-[#c4a043]`) which provides strong contrast against silk white, red, and green backgrounds. The gold ring must be visible on all surface types used in the interface, including on the pallu drape gradient where the background color shifts.
- **Color independence:** Do not convey meaning through color alone. Sari red for primary actions, green for secondary, gold for premium -- these color roles must also be communicated through text labels, icons, or positional patterns. The mirror work, bangles, and bindi should not be the sole indicators of status or category. The blouse border pattern must be distinguishable from the pallu drape through more than color alone.
- **SVG accessibility:** All decorative SVGs (bangles stack, mirror work borders, bindi dots, pallu drape accents) must have `aria-hidden="true"` and `role="presentation"`. Functional SVGs (bindi icon in a navigation item, bangles as a loading indicator) must have `role="img"` and an `aria-label`. The silk sheen and woven texture overlays must have `aria-hidden="true"` and `pointer-events-none`.
- **Text legibility over patterns:** When text is placed over blouse border patterns, pleat folds, or zari gold thread textures, the background pattern can reduce readability. Add a semi-transparent backing: `bg-[#f5f0e8]/90 backdrop-blur-sm rounded-lg px-3 py-1` to ensure text remains legible. The silk base surface should provide sufficient opacity for text without additional backing.
- **Pallu drape and color contrast:** The pallu drape uses a diagonal gradient from crimson to green. Text placed on the pallu must be tested for contrast at multiple points along the diagonal, as the background color changes across the element. Use `text-[#f5f0e8]` with sufficient font weight (`font-medium` or `font-bold`) and consider adding a subtle text shadow: `text-shadow: 0 1px 2px rgba(0,0,0,0.3)` for additional legibility on the shifting gradient.
- **Mirror work and photosensitivity:** The mirror work reflective circles suggest sparkle but should not use CSS animations that create actual flashing or strobing effects. Mirror highlights should be static or use slow, subtle opacity transitions (duration 2s or longer). Avoid rapid闪烁 patterns that could trigger photosensitive reactions.
- **Touch targets:** All interactive elements must be at least 44x44px (WCAG 2.2 target size). Sari-styled buttons, bindi navigation dots, and mirror work decorative tappable areas must meet this minimum. The blouse border band tap targets should extend to the full band height for comfortable interaction.
- **Semantic HTML:** Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`) regardless of the sari visual layer. The textile drape aesthetic must not compromise document structure or heading hierarchy. Pallu drape heroes that visually introduce sections should correspond to `<header>` or `<section>` elements with appropriate `aria-label`.
- **Keyboard navigation:** Silk sheen overlays, mirror work sparkle effects, and bangles decorative elements must not trap keyboard focus. All decorative elements must have `pointer-events-none`. Tab order must follow logical content flow, not the diagonal drape direction of the visual layout.
- **Color palette in dark mode:** If supporting dark mode, the sari palette should shift to a deep silk night aesthetic: deep indigo-black (`#0a1a2a`) as the base, crimson darkened to `#8a2020`, green darkened to `#0a4a2a`, gold embroidery unchanged (`#c4a043`), and silk white shifted to a warm off-white (`#d8d0c0`). The pallu drape gradient uses darker, more saturated variants. Mirror work circles brighten slightly to maintain their reflective character against dark backgrounds.
