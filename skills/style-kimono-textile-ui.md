---
name: kimono-textile-ui
description: Build kimono textile UI components (obi sash, silk embroidery, wave pattern, crane motif, cherry blossom scatter, noren-style border, washi paper) with traditional Japanese textile patterns, silk textures, and the elegant draping of kimono fabric. Trigger this skill when the user asks for kimono design, Japanese textile UI, obi sash pattern, seigaiha wave, silk embroidery interface, crane motif design, cherry blossom scatter, washi paper texture, or traditional Japanese fabric aesthetic.
---

# Kimono Textile UI

Use this skill to design and implement elegant, patterned interfaces inspired by Japanese kimono textile art: obi sash decorative bands, silk embroidery raised-thread textures, seigaiha wave repeating patterns, crane motif SVGs, cherry blossom scatter decoration, noren-style fabric dividers, washi paper fibrous surfaces, and the refined elegance of Japanese textile craftsmanship. This is the kimono -- silk, structure, pattern, and centuries of aesthetic refinement woven into every thread.

## Non-Negotiable Foundations

These properties are mandatory for every component built with this skill. They define the fundamental character of the kimono textile aesthetic and cannot be overridden or omitted.

- **Silk sheen defines every surface.** Every card, panel, and interactive element must suggest the lustrous surface of silk fabric. This means subtle linear gradients that simulate light catching a woven thread surface, never flat matte fills. The sheen moves diagonally across the surface like light across draped silk.
- **Structured pattern discipline.** Kimono design follows strict pattern placement rules inherited from centuries of textile tradition. Patterns are not randomly scattered -- they are placed with intention along borders, hems, and focal zones. Seigaiha waves fill backgrounds, obi bands anchor horizontal divisions, and crane motifs appear as focal emblems. Every pattern has a designated zone.
- **The obi sash is the primary horizontal anchor.** The wide decorative obi band is the signature structural element of kimono design. It divides, frames, and anchors sections. Every major layout should include at least one obi-style horizontal band with its own patterned texture and contrasting color.
- **Japanese red, indigo, and white form the core triad.** The palette is rooted in traditional Japanese dye traditions: kinu-iro crimson red, ai-zome indigo blue, and shiro white. Gold embroidery and blossom pink serve as accent colors that appear sparingly and deliberately, never dominating the composition.
- **Negative space (ma) is compositionally active.** The Japanese concept of ma -- the meaningful void between elements -- is as important as the decorated areas. White and cream spaces are not empty; they are deliberate breathing room that gives the patterned areas their impact. Dense pattern must always be balanced by deliberate emptiness.
- **Washi paper is the base texture.** Surfaces that are not silk-sheened should reference the fibrous, semi-translucent quality of handmade washi paper. This means visible fiber lines, slight unevenness in opacity, and a warm off-white base that suggests handcrafted material rather than machine-perfect paper.

## Core Material Recipes

### 1) Seigaiha Wave Pattern Background

The quintessential Japanese wave pattern: concentric arcs repeating in a fish-scale formation.

```css
.seigaiha {
  background-color: #f5f0f0;
  background-image:
    radial-gradient(circle at 100% 150%, #1a2a4a 24%, #1a2a4a 28%, #1a2a4a30 40%, transparent 50%),
    radial-gradient(circle at 0% 150%, #1a2a4a 24%, #1a2a4a 28%, #1a2a4a30 40%, transparent 50%),
    radial-gradient(circle at 50% 100%, #1a2a4a 24%, #1a2a4a 28%, #1a2a4a30 40%, transparent 50%);
  background-size: 40px 20px;
}
```

Tailwind: `bg-[#f5f0f0] bg-[radial-gradient(circle_at_100%_150%,#1a2a4a_24%,#1a2a4a_28%,#1a2a4a30_40%,transparent_50%),radial-gradient(circle_at_0%_150%,#1a2a4a_24%,#1a2a4a_28%,#1a2a4a30_40%,transparent_50%),radial-gradient(circle_at_50%_100%,#1a2a4a_24%,#1a2a4a_28%,#1a2a4a30_40%,transparent_50%)] bg-[size:40px_20px]`.

### 2) Obi Sash Band

Wide horizontal decorative band dividing sections, with its own pattern fill and contrasting edge lines.

- Base: `bg-gradient-to-b from-[#c44040] via-[#c44040] to-[#c44040] relative overflow-hidden py-8 px-6`.
- Gold embroidery border top: `border-t-2 border-[#c4a043]`.
- Gold embroidery border bottom: `border-b-2 border-[#c4a043]`.
- Obi internal pattern (seigaiha on red): `bg-[radial-gradient(circle_at_100%_150%,#f5f0f0_24%,#f5f0f0_28%,#f5f0f030_40%,transparent_50%),radial-gradient(circle_at_0%_150%,#f5f0f0_24%,#f5f0f0_28%,#f5f0f030_40%,transparent_50%),radial-gradient(circle_at_50%_100%,#f5f0f0_24%,#f5f0f0_28%,#f5f0f030_40%,transparent_50%)] bg-[size:40px_20px] opacity-20`.
- Gold accent stripe: add an inner `border-y border-[#c4a043]` at the vertical center using a pseudo-element or nested div.
- Full pattern: `bg-gradient-to-b from-[#1a2a4a] via-[#c44040] to-[#1a2a4a] relative overflow-hidden py-6 px-6 border-y-2 border-[#c4a043]`.

```html
<div class="relative overflow-hidden bg-gradient-to-b from-[#1a2a4a] via-[#c44040] to-[#1a2a4a] py-6 px-6 border-y-2 border-[#c4a043]">
  <!-- Wave pattern overlay -->
  <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 100% 150%, #f5f0f0 24%, #f5f0f0 28%, transparent 50%), radial-gradient(circle at 0% 150%, #f5f0f0 24%, #f5f0f0 28%, transparent 50%); background-size: 40px 20px;"></div>
  <!-- Gold center line -->
  <div class="absolute top-1/2 left-0 right-0 h-px bg-[#c4a043]"></div>
  <!-- Content -->
  <div class="relative z-10 text-center">
    <span class="text-[#f5f0f0] font-serif text-lg tracking-widest">OBII BAND TITLE</span>
  </div>
</div>
```

### 3) Silk Embroidery Texture

Raised thread pattern simulating embroidered silk surface with visible stitch direction.

- Base silk: `bg-[#f5f0f0]`.
- Thread texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.04)_1px,rgba(26,42,74,0.04)_2px)]` for vertical thread lines.
- Cross-hatch: layer a second `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(196,64,64,0.03)_3px,rgba(196,64,64,0.03)_4px)]` for horizontal thread direction.
- Sheen: `bg-gradient-to-br from-transparent via-white/30 to-transparent` overlaid at 30% opacity to simulate light catching raised silk threads.
- Combined: `bg-[#f5f0f0] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.04)_1px,rgba(26,42,74,0.04)_2px),repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(196,64,64,0.03)_3px,rgba(196,64,64,0.03)_4px)]`.

### 4) Crane Motif SVG

Stylized tsuru (flying crane) as a focal emblem for headers, badges, and premium accents.

```html
<svg viewBox="0 0 120 100" class="w-28 h-24">
  <!-- Body -->
  <g fill="none" stroke="#1a2a4a" stroke-width="1.5" stroke-linecap="round">
    <!-- Wing sweep (primary) -->
    <path d="M20,60 Q30,30 60,20 Q80,15 100,25" stroke-width="2"/>
    <path d="M100,25 L110,20 L105,28 Z" fill="#1a2a4a"/>
    <!-- Wing sweep (secondary) -->
    <path d="M20,60 Q35,40 65,35 Q85,30 105,38" stroke-width="1.2" opacity="0.6"/>
    <!-- Body curve -->
    <path d="M20,60 Q25,65 30,62 Q35,58 40,60" stroke-width="2"/>
    <!-- Tail feathers -->
    <path d="M20,60 L10,55 L12,62 L8,58" stroke-width="1"/>
    <!-- Neck and head -->
    <path d="M40,60 Q45,50 55,42 Q60,38 65,35" stroke-width="1.5"/>
    <circle cx="65" cy="33" r="2.5" fill="#c41e1e"/>
    <!-- Legs -->
    <path d="M30,62 L28,80 L25,82 M28,80 L32,82" stroke-width="1"/>
    <path d="M35,61 L33,78 L30,80 M33,78 L37,80" stroke-width="1"/>
  </g>
  <!-- Red crown patch -->
  <circle cx="65" cy="31" r="2" fill="#c44040"/>
</svg>
```

### 5) Cherry Blossom Scatter

Small five-petal sakura flowers scattered across surfaces as delicate decoration.

```html
<svg viewBox="0 0 160 120" class="w-full h-full pointer-events-none">
  <!-- Blossom 1 -->
  <g transform="translate(20,15) scale(0.8)" opacity="0.7">
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(0,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(72,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(144,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(216,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(288,0,0)"/>
    <circle cx="0" cy="0" r="1.5" fill="#c44040"/>
  </g>
  <!-- Blossom 2 -->
  <g transform="translate(80,40) scale(0.6)" opacity="0.5">
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(0,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(72,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(144,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(216,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(288,0,0)"/>
    <circle cx="0" cy="0" r="1.5" fill="#c44040"/>
  </g>
  <!-- Blossom 3 -->
  <g transform="translate(140,70) scale(0.5)" opacity="0.4">
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(15,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(87,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(159,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(231,0,0)"/>
    <ellipse cx="0" cy="-5" rx="2.5" ry="4" fill="#f0b0c0" transform="rotate(303,0,0)"/>
    <circle cx="0" cy="0" r="1.5" fill="#c44040"/>
  </g>
  <!-- Falling petal -->
  <ellipse cx="100" cy="95" rx="3" ry="1.5" fill="#f0b0c0" opacity="0.3" transform="rotate(35,100,95)"/>
</svg>
```

### 6) Washi Paper Surface

Handmade paper texture with visible fibers and semi-translucent quality.

- Base: `bg-[#f5f0f0] rounded-lg p-6`.
- Fiber texture: `bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,rgba(196,160,67,0.05)_8px,rgba(196,160,67,0.05)_9px),repeating-linear-gradient(-30deg,transparent_0px,transparent_12px,rgba(26,42,74,0.03)_12px,rgba(26,42,74,0.03)_13px)]`.
- Edge softness: no hard border -- use `shadow-[0_1px_4px_rgba(26,42,74,0.08)]` for a soft paper edge.
- Full: `bg-[#f5f0f0] bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,rgba(196,160,67,0.05)_8px,rgba(196,160,67,0.05)_9px),repeating-linear-gradient(-30deg,transparent_0px,transparent_12px,rgba(26,42,74,0.03)_12px,rgba(26,42,74,0.03)_13px)] rounded-lg p-6 shadow-[0_1px_4px_rgba(26,42,74,0.08)]`.

### 7) Noren Divider

Fabric curtain divider inspired by the split-cloth doorway hangings found in traditional Japanese shops and homes.

- `h-24 bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a] to-[#1a2a4a]/0 relative overflow-hidden`.
- Fabric fold shadows: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_40px,rgba(0,0,0,0.08)_40px,rgba(0,0,0,0.08)_42px,transparent_42px,transparent_80px)]`.
- Split gap: two columns with a `w-4` gap at center, each with its own gradient fading to transparent at the bottom.
- Hanging rod: `bg-gradient-to-b from-[#c4a043] to-[#8a6a23] h-1.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)]`.

```html
<div class="relative w-full h-24 overflow-hidden">
  <!-- Hanging rod -->
  <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-b from-[#c4a043] to-[#8a6a23] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)] z-10"></div>
  <!-- Left panel -->
  <div class="absolute top-1.5 left-0 w-[calc(50%-8px)] h-full bg-gradient-to-b from-[#1a2a4a] to-[#1a2a4a]/0">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_40px,rgba(245,240,240,0.06)_40px,rgba(245,240,240,0.06)_41px)]"></div>
  </div>
  <!-- Right panel -->
  <div class="absolute top-1.5 right-0 w-[calc(50%-8px)] h-full bg-gradient-to-b from-[#1a2a4a] to-[#1a2a4a]/0">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_40px,rgba(245,240,240,0.06)_40px,rgba(245,240,240,0.06)_41px)]"></div>
  </div>
</div>
```

### 8) Bamboo Fence Accent

Horizontal bamboo slat pattern used as a subtle border or section accent.

- `bg-[#6a8a4a] rounded-full h-3 shadow-[0_1px_2px_rgba(26,58,26,0.3)] relative overflow-hidden`.
- Bamboo segment marks: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_30px,rgba(26,58,26,0.15)_30px,rgba(26,58,26,0.15)_32px)]`.
- Full: `bg-[#6a8a4a] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_30px,rgba(26,58,26,0.15)_30px,rgba(26,58,26,0.15)_32px)] rounded-full h-3 shadow-[0_1px_2px_rgba(26,58,26,0.3)]`.

### 9) Kimono Silk Card

Primary content card with silk sheen and traditional border treatment.

- `bg-[#f5f0f0] rounded-xl p-6 shadow-[0_2px_12px_rgba(26,42,74,0.1)] border border-[#c4a043]/30 relative overflow-hidden`.
- Silk sheen overlay: `bg-gradient-to-br from-transparent via-white/40 to-transparent absolute inset-0 pointer-events-none`.
- Thread texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.03)_1px,rgba(26,42,74,0.03)_2px)]`.
- Corner accent: small crane or cherry blossom SVG at top-right corner at 20% opacity.

```html
<div class="bg-[#f5f0f0] rounded-xl p-6 shadow-[0_2px_12px_rgba(26,42,74,0.1)] border border-[#c4a043]/30 relative overflow-hidden">
  <!-- Silk thread texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.03)_1px,rgba(26,42,74,0.03)_2px)] pointer-events-none"></div>
  <!-- Silk sheen -->
  <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent pointer-events-none"></div>
  <!-- Corner crane accent -->
  <svg class="absolute top-3 right-3 w-10 h-10 opacity-20 pointer-events-none" viewBox="0 0 120 100">
    <path d="M20,60 Q30,30 60,20 Q80,15 100,25 M40,60 Q45,50 55,42 Q60,38 65,35" fill="none" stroke="#1a2a4a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="65" cy="33" r="2.5" fill="#c44040"/>
  </svg>
  <div class="relative z-10">
    <!-- card content -->
  </div>
</div>
```

### 10) Kimono Button

Silk-textured button with embroidered edge treatment.

- Primary: `bg-[#c44040] text-[#f5f0f0] font-serif font-medium px-8 py-3 rounded-lg border-2 border-[#c4a043] hover:bg-[#a03030] transition-all duration-200 shadow-[0_2px_8px_rgba(196,64,64,0.3)]`.
- Secondary: `bg-[#f5f0f0] text-[#1a2a4a] font-serif font-medium px-8 py-3 rounded-lg border-2 border-[#1a2a4a]/30 hover:bg-[#1a2a4a] hover:text-[#f5f0f0] transition-all duration-200`.
- Silk sheen on hover: `hover:shadow-[0_4px_16px_rgba(196,64,64,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]`.

## Color Palette System

| Color Name | Hex | Japanese Name | Role |
|---|---|---|---|
| Kimono Red | `#c44040` | Kinu-iro (crimson) | Primary accent, obi, focal points |
| Indigo Blue | `#1a2a4a` | Ai-zome (indigo) | Deep base, text, wave patterns |
| Silk White | `#f5f0f0` | Shiro (white) | Surfaces, backgrounds, silk base |
| Gold Embroidery | `#c4a043` | Kinshi (gold thread) | Borders, accents, premium detail |
| Crane White | `#f8f0f0` | Tsuru-shiro | Crane motif, pure accents |
| Blossom Pink | `#f0b0c0` | Sakura-iro | Cherry blossom, soft decoration |
| Forest Dark | `#1a3a1a` | Mori-iro | Deep green accent, bamboo base |
| Bamboo | `#6a8a4a` | Take-iro | Bamboo elements, natural accent |

Additional accent tones (use sparingly, never as backgrounds):

| Accent | Hex | Role |
|---|---|---|
| Bindi Red | `#c41e1e` | Crane crown, small red dots |
| Washi Cream | `#e8e0d0` | Washi paper base, warm surfaces |
| Thread Dark | `#0a1a30` | Embroidery stitch detail |
| Blossom White | `#f8d8e0` | Lighter blossom accent |

Rules: The palette is rooted in traditional Japanese natural dyes: indigo from the ai plant, crimson from benibana safflower, gold from metallic thread embroidery, and green from bamboo. Colors should feel like a textile viewed under warm light -- silk catches light and shifts subtly between its base color and a lighter sheen. No neon, no synthetic brightness, no cold grays. The warmth comes from silk fiber, not from warm color temperature.

## Typography Recommendations

- **Display:** Noto Serif JP, Yu Mincho (traditional Japanese serif with calligraphic character). Use at `text-3xl` or larger for headers. The vertical stroke weight variation of mincho-style type mimics the brush calligraphy found on kimono fabric inscriptions.
- **Body:** Noto Sans JP, Inter (clean, high-legibility sans-serif for body content). Use at `text-base` to `text-lg` with `leading-relaxed` (1.625) for comfortable reading.
- **Accent/Labels:** Source Serif Pro, Playfair Display (elegant serif for obi band titles, section labels, and badge text). Use at `text-sm` to `text-base` with `tracking-widest` for uppercase Japanese-inspired label treatment.
- **Character spacing:** `tracking-widest` for uppercase labels and obi band titles. `tracking-normal` for body text. The generous spacing in display text references the measured cadence of Japanese textile inscriptions.
- **Color pairing:** `text-[#1a2a4a]` on white/silk surfaces. `text-[#f5f0f0]` on indigo or red backgrounds. `text-[#c4a043]` on dark backgrounds for gold embroidery text. All pairings must maintain WCAG AA contrast ratios.

## Component Architecture Pattern

Every component follows a layered textile structure mimicking a kimono's construction: a washi or silk base surface, pattern layers that add textile character, a sheen overlay that simulates silk light behavior, and decorative motif accents placed at deliberate focal points.

**Required layers (bottom to top):**

1. **Base texture** -- washi paper fiber pattern or silk thread texture as the foundation surface.
2. **Pattern layer** -- seigaiha waves, embroidery stitches, or other textile pattern at low opacity, providing the decorative identity.
3. **Silk sheen** -- a diagonal gradient from transparent via white/30 to transparent, simulating light catching woven silk. This overlay is always present on interactive or focal surfaces.
4. **Content layer** -- the actual interactive or informational content, positioned relatively with sufficient z-index.
5. **Motif accent** -- a crane SVG, cherry blossom scatter, or gold embroidery detail placed at a deliberate focal point (header corner, badge center, section divider end).
6. **Obi band divider** -- when sections are separated, use the obi sash band pattern rather than a simple line.

**Container pattern:**

```html
<div class="relative overflow-hidden bg-[#f5f0f0] rounded-xl shadow-[0_2px_12px_rgba(26,42,74,0.1)] border border-[#c4a043]/30">
  <!-- Washi/silk base texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,rgba(196,160,67,0.04)_8px,rgba(196,160,67,0.04)_9px)] pointer-events-none"></div>
  <!-- Silk sheen -->
  <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10 p-6">
    <!-- actual content here -->
  </div>
  <!-- Motif accent (corner crane) -->
  <svg class="absolute bottom-3 right-3 w-8 h-8 opacity-15 pointer-events-none" viewBox="0 0 120 100">
    <path d="M20,60 Q30,30 60,20 Q80,15 100,25" fill="none" stroke="#1a2a4a" stroke-width="2" stroke-linecap="round"/>
  </svg>
</div>
```

**Obi section divider pattern:**

```html
<div class="relative overflow-hidden bg-gradient-to-b from-[#1a2a4a] via-[#c44040] to-[#1a2a4a] py-5 px-6 border-y-2 border-[#c4a043]">
  <!-- Pattern overlay -->
  <div class="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_100%_150%,#f5f0f0_24%,#f5f0f0_28%,transparent_50%),radial-gradient(circle_at_0%_150%,#f5f0f0_24%,#f5f0f0_28%,transparent_50%)] bg-[size:40px_20px]"></div>
  <!-- Gold center line -->
  <div class="absolute top-1/2 left-6 right-6 h-px bg-[#c4a043]/60"></div>
  <div class="relative z-10 text-center">
    <span class="text-[#f5f0f0] font-serif text-sm tracking-[0.2em] uppercase">Section Title</span>
  </div>
</div>
```

**Card pattern:**

```html
<div class="bg-[#f5f0f0] rounded-xl p-6 shadow-[0_2px_12px_rgba(26,42,74,0.1)] border border-[#c4a043]/30 relative overflow-hidden">
  <!-- Thread texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.03)_1px,rgba(26,42,74,0.03)_2px)] pointer-events-none"></div>
  <!-- Silk sheen -->
  <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10">
    <!-- card content -->
  </div>
  <!-- Bottom gold accent line -->
  <div class="absolute bottom-0 inset-x-6 h-px bg-[#c4a043]/40"></div>
</div>
```

## Interaction Rules

- **Hover states** intensify the silk sheen and deepen the gold border: `hover:shadow-[0_4px_20px_rgba(26,42,74,0.15)] hover:border-[#c4a043]/60` to suggest silk catching more light as the viewer's attention is drawn to the surface.
- **Active/pressed states** compress the element downward with a reduced sheen: `active:translate-y-0.5 active:shadow-[0_1px_4px_rgba(26,42,74,0.1)] active:bg-gradient-to-br active:from-transparent active:via-white/10 active:to-transparent` to simulate pressing into layered silk.
- **Focus states** use a gold embroidery ring: `focus-visible:ring-2 focus-visible:ring-[#c4a043] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0f0]`. The gold ring references the embroidered border of a premium kimono panel.
- **Transitions** are graceful and measured, like fabric settling: `transition-all duration-300 ease-out`. Kimono interactions should feel unhurried and refined, not snappy or bouncy.
- **Loading states** use a seigaiha wave animation: a small wave pattern that scrolls horizontally with `animate-[wave_4s_linear_infinite]` (translateX from 0 to 40px), or a single cherry blossom petal drifting downward with `animate-[petal_3s_ease-in-out_infinite]` (translateY and rotate).
- **Scroll reveals** unfurl like fabric being laid flat: elements fade in from the top with `opacity-0 -translate-y-4 animate-[unfurl_0.6s_ease-out_forwards]`, simulating the motion of silk being unfolded from its storage fold.
- **Disabled states** fade to distant indigo: `opacity-40 saturate-50` to suggest the element has receded behind a noren curtain.

## Reusable Tailwind Tokens

- Silk base: `bg-[#f5f0f0]`
- Washi paper surface: `bg-[#f5f0f0] bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,rgba(196,160,67,0.05)_8px,rgba(196,160,67,0.05)_9px)] rounded-lg shadow-[0_1px_4px_rgba(26,42,74,0.08)]`
- Silk thread texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_1px,rgba(26,42,74,0.04)_1px,rgba(26,42,74,0.04)_2px)]`
- Silk sheen overlay: `bg-gradient-to-br from-transparent via-white/30 to-transparent`
- Kimono silk card: `bg-[#f5f0f0] rounded-xl shadow-[0_2px_12px_rgba(26,42,74,0.1)] border border-[#c4a043]/30`
- Obi sash band: `bg-gradient-to-b from-[#1a2a4a] via-[#c44040] to-[#1a2a4a] border-y-2 border-[#c4a043]`
- Kimono red button: `bg-[#c44040] text-[#f5f0f0] font-serif border-2 border-[#c4a043]`
- Indigo button: `bg-[#1a2a4a] text-[#f5f0f0] font-serif border-2 border-[#c4a043]`
- Bamboo accent: `bg-[#6a8a4a] rounded-full h-3`
- Noren divider: `bg-gradient-to-b from-[#1a2a4a] to-transparent h-24`
- Gold text: `text-[#c4a043]`
- Indigo text: `text-[#1a2a4a]`
- Silk text: `text-[#f5f0f0]`
- Blossom text: `text-[#f0b0c0]`
- Kimono red hover: `hover:shadow-[0_4px_20px_rgba(196,64,64,0.3)]`
- Gold focus ring: `focus-visible:ring-2 focus-visible:ring-[#c4a043] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0f0]`
- Seigaiha wave pattern: `bg-[radial-gradient(circle_at_100%_150%,#1a2a4a_24%,#1a2a4a_28%,#1a2a4a30_40%,transparent_50%),radial-gradient(circle_at_0%_150%,#1a2a4a_24%,#1a2a4a_28%,#1a2a4a30_40%,transparent_50%)] bg-[size:40px_20px]`

## Quality Checklist

- At least one seigaiha wave pattern (the signature Japanese textile pattern).
- At least one obi sash band dividing or framing a major section.
- Silk sheen gradient overlay present on all interactive or focal surfaces.
- Washi paper texture or silk thread texture as the base surface.
- At least one crane motif SVG as a focal emblem.
- Cherry blossom scatter present on at least one surface as delicate decoration.
- Gold embroidery accents on borders, text, or decorative elements.
- Bamboo accent line or element present for natural green contrast.
- The palette reads as traditional Japanese textile: crimson, indigo, white, gold.
- Typography is elegant serif for display, clean sans for body.
- Negative space (ma) is deliberate -- patterned areas are balanced by quiet areas.
- The aesthetic evokes silk fabric under warm light, not digital flat design.
- Noren-style dividers or fabric-fold elements separate major sections.
- Every surface has textile character (thread, weave, paper fiber -- not flat).

## Anti-Patterns

- Flat matte surfaces without silk sheen (kimono surfaces catch and reflect light).
- Missing the seigaiha wave pattern (this is the defining Japanese textile pattern).
- Random pattern placement (patterns follow deliberate zones: borders, hems, focal points).
- Cold gray or blue-gray palettes (the palette is warm: crimson, indigo, gold on silk white).
- Synthetic or neon accent colors (all colors come from traditional Japanese dyes and metallic thread).
- Heavy solid borders without gold embroidery treatment (edges reference textile border trim).
- Sans-serif display typography (kimono elegance pairs with serif or mincho-style type).
- Dense pattern without negative space (ma -- the meaningful void -- is essential to Japanese composition).
- Modern geometric patterns (kimono patterns are organic: waves, cranes, blossoms, bamboo).
- Crisp machine-perfect edges (textile surfaces have soft, slightly irregular edges).
- Overcrowded surfaces (a kimono has deliberate zones of decoration and zones of plain silk).
- Missing the gold embroidery accent (kinshi metallic thread is a premium kimono detail).
- Dark or moody backgrounds (kimono surfaces are light silk, not dark digital surfaces).
- Missing the obi sash as a structural element (the obi is the primary horizontal anchor in kimono design).

## Accessibility Considerations

- **Contrast ratios:** All text must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Use `text-[#1a2a4a]` on white/silk/washi backgrounds and `text-[#f5f0f0]` on indigo/red backgrounds. Gold embroidery text (`text-[#c4a043]`) requires testing against its specific background -- it meets contrast on indigo (`#1a2a4a`) but may fail on white; use `text-[#8a6a23]` as a darker gold variant when contrast is insufficient. Test every text-on-background combination, especially text over silk sheen gradients where the gradient creates variable contrast.
- **Silk sheen and reduced motion:** The silk sheen gradient is a static CSS gradient and does not animate, so no `prefers-reduced-motion` concern for static surfaces. However, any scroll-driven silk sheen movement, cherry blossom petal animation, or seigaiha wave scroll must be disabled under `@media (prefers-reduced-motion: reduce)`. Provide static fallback states for all animated textile elements.
- **Focus indicators:** Every interactive element must have a visible focus ring. Use the gold embroidery focus ring (`focus-visible:ring-2 focus-visible:ring-[#c4a043]`) which provides strong contrast against silk white, indigo, and red backgrounds. The gold ring must be visible on all surface types used in the interface.
- **Color independence:** Do not convey meaning through color alone. Kimono red for primary actions, indigo for secondary, gold for premium -- these color roles must also be communicated through text labels, icons, or positional patterns. The crane motif and cherry blossom should not be the sole indicators of status or category.
- **SVG accessibility:** All decorative SVGs (crane motifs, cherry blossom scatter, seigaiha wave patterns) must have `aria-hidden="true"` and `role="presentation"`. Functional SVGs (crane icon in a button, cherry blossom as a status indicator) must have `role="img"` and an `aria-label`. The silk sheen and thread texture overlays must have `aria-hidden="true"` and `pointer-events-none`.
- **Text legibility over patterns:** When text is placed over seigaiha wave patterns or silk thread textures, the background pattern can reduce readability. Add a semi-transparent backing: `bg-[#f5f0f0]/90 backdrop-blur-sm rounded-lg px-3 py-1` to ensure text remains legible. The washi paper surface should provide sufficient opacity for text without additional backing.
- **Obi band and color contrast:** The obi sash band uses a gradient from indigo to red to indigo. Text placed on the obi must be tested for contrast at every point along the gradient. Use `text-[#f5f0f0]` with sufficient font weight (`font-medium` or `font-bold`) to maintain legibility across the gradient span.
- **Touch targets:** All interactive elements must be at least 44x44px (WCAG 2.2 target size). Kimono-styled buttons, crane icon buttons, and cherry blossom decorative tappable areas must meet this minimum. The obi sash band tap targets should extend to the full band height for comfortable interaction.
- **Semantic HTML:** Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`) regardless of the kimono visual layer. The textile aesthetic must not compromise document structure or heading hierarchy. Obi bands that visually separate sections should correspond to `<section>` or `<hr>` elements.
- **Keyboard navigation:** Silk sheen overlays, cherry blossom scatter decorations, and crane motif accents must not trap keyboard focus. All decorative elements must have `pointer-events-none`. Tab order must follow logical content flow, not the visual layering of textile elements.
- **Color palette in dark mode:** If supporting dark mode, the kimono palette should shift to a twilight silk aesthetic: deep indigo (`#0a1a30`) as the base, crimson red darkened to `#8a2020`, gold embroidery unchanged (`#c4a043`), and silk white shifted to a warm off-white (`#d8d0c8`). The seigaiha wave pattern uses lighter strokes on the dark base. Cherry blossom pink darkens to `#a06070` for sufficient contrast.

