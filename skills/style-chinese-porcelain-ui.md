---
name: chinese-porcelain-ui
description: Build Chinese porcelain UI components (blue and white ceramics, willow pattern motifs, lotus scrolls, Ming dynasty palette, crackle glaze texture, porcelain translucence) with cobalt-blue-on-white imagery, traditional border patterns, and the refined elegance of Chinese ceramic art. Trigger this skill when the user asks for Chinese porcelain, blue and white ceramics, Ming dynasty UI, willow pattern, celadon design, or porcelain aesthetic interfaces.
---

# Chinese Porcelain UI

Use this skill to design and implementation elegant interfaces inspired by Chinese blue-and-white porcelain: cobalt-blue brushwork on white glaze, willow pattern landscapes, lotus scroll borders, Ming dynasty palettes, crackle-glaze textures, and the refined beauty of Chinese ceramic art.

## Core Material Recipes

### 1) Porcelain Surface

Smooth white-glazed ceramic surface.

- `bg-[#f5f5f0]` (porcelain white, very slightly warm).
- Subtle crackle: SVG thin lines at `opacity-[0.04]` (aged glaze crackle pattern).
- Sheen: `shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]`.

### 2) Cobalt Blue Pattern Border

Traditional Chinese porcelain border pattern in cobalt blue.

```html
<svg viewBox="0 0 200 20" class="w-full">
  <g fill="#1a3a8a" stroke="#1a3a8a" stroke-width="0.5">
    <!-- Lotus scroll pattern -->
    <path d="M0,10 Q15,2 30,10 Q45,18 60,10 Q75,2 90,10 Q105,18 120,10 Q135,2 150,10 Q165,18 180,10 Q195,2 200,10" fill="none" stroke-width="1"/>
    <circle cx="15" cy="6" r="2"/>
    <circle cx="45" cy="14" r="2"/>
    <circle cx="75" cy="6" r="2"/>
    <circle cx="105" cy="14" r="2"/>
    <circle cx="135" cy="6" r="2"/>
    <circle cx="165" cy="14" r="2"/>
    <circle cx="195" cy="6" r="2"/>
  </g>
</svg>
```

### 3) Willow Pattern Scene

Classic blue-and-white landscape motif (pagoda, willow tree, birds).

```html
<svg viewBox="0 0 200 100" class="w-full opacity-80">
  <g fill="#1a3a8a">
    <!-- Willow tree -->
    <path d="M40,80 L40,40" stroke="#1a3a8a" stroke-width="2"/>
    <path d="M40,40 Q25,30 20,45 M40,40 Q55,30 60,45" fill="none" stroke-width="1"/>
    <!-- Hanging willow leaves -->
    <path d="M25,45 Q22,60 24,75 M30,42 Q27,58 28,72 M35,40 Q33,55 34,70" fill="none" stroke-width="0.5"/>
    <!-- Pagoda -->
    <path d="M120,80 L120,55 L130,50 L120,45 L130,40 L120,35 L125,30 L135,25" fill="none" stroke-width="1"/>
    <!-- Birds -->
    <path d="M80,15 Q85,12 90,15 Q85,18 80,15 M100,20 Q105,17 110,20 Q105,23 100,20" stroke-width="0.5"/>
    <!-- Fence/bridge -->
    <path d="M55,75 L80,75 M60,75 L60,85 M75,75 L75,85" stroke-width="0.5" fill="none"/>
  </g>
</svg>
```

### 4) Porcelain Panel

White panel with cobalt blue border pattern.

- `bg-[#f5f5f0] border-2 border-[#1a3a8a] p-8 rounded-lg shadow-[0_2px_8px_rgba(26,58,138,0.1)]`.

### 5) Porcelain Button

Refined blue-and-white button.

- `bg-[#1a3a8a] text-[#f5f5f0] font-serif font-medium px-8 py-3 border-2 border-[#1a3a8a] rounded-full hover:bg-[#0a2a6a] transition-colors`.

### 6) Cloud Collar (Ruyi) Motif

Traditional Chinese ruyi cloud-shaped decoration.

```html
<svg viewBox="0 0 60 40" class="w-16 h-10 text-[#1a3a8a] opacity-30">
  <path fill="none" stroke="currentColor" stroke-width="1" d="M5,30 Q10,10 20,15 Q25,5 30,15 Q35,5 40,15 Q50,10 55,30"/>
  <circle cx="20" cy="15" r="2" fill="currentColor"/>
  <circle cx="30" cy="12" r="2" fill="currentColor"/>
  <circle cx="40" cy="15" r="2" fill="currentColor"/>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Cobalt Blue | `#1a3a8a` | Primary brushwork color |
| Deep Blue | `#0a2a6a` | Shadows, depth |
| Light Blue | `#5a8aca` | Secondary brushwork |
| Porcelain White | `#f5f5f0` | Primary background |
| Celadon Green | `#a8c4a0` | Rare alternative palette |
| Iron Red | `#8a2a1a` | Rare accent (famille rose) |
| Gold | `#c4a043` | Imperial accent |
| Ink Black | `#1a1a1a` | Rare outlines |

Rules: Blue on white is the dominant and mandatory pairing. Cobalt blue brushwork on white porcelain is the defining characteristic. Occasionally celadon green or iron red appear in famille-verte or famille-rose palettes, but blue-and-white is the standard.

## Typography Recommendations

- **Display:** Noto Serif SC, Playfair Display (classical elegant serif).
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Chinese accents:** Noto Serif SC for decorative Chinese characters.
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Porcelain: `bg-[#f5f5f0]` with crackle SVG overlay.
- Cobalt panel: `bg-[#f5f5f0] border-2 border-[#1a3a8a]`.
- Porcelain button: `bg-[#1a3a8a] text-[#f5f5f0] rounded-full border-2 border-[#1a3a8a]`.
- Lotus scroll: SVG wave pattern in `#1a3a8a`.
- Willow scene: SVG blue landscape on white.

## Quality Checklist

- Cobalt-blue-on-white is the dominant palette.
- At least one traditional border pattern (lotus scroll, key fret, cloud).
- At least one willow-pattern or landscape motif.
- Porcelain surface has subtle crackle-glaze texture.
- Cloud collar (ruyi) decorative accent present.
- Typography is elegant classical serif.
- The aesthetic reads as Chinese blue-and-white porcelain.
- Everything feels refined, elegant, and culturally rich.
- Blue brushwork is visible on white surfaces (hand-painted quality).
- Colors are strictly limited to cobalt blue + porcelain white (+ rare accent).

## Anti-Patterns

- Bright multi-color palettes (blue-and-white is the standard).
- Missing traditional border patterns (lotus scroll, key fret are essential).
- Missing the willow pattern or landscape scene (iconic porcelain motif).
- Gradients or modern effects (porcelain is flat hand-painted blue on white).
- Sans-serif typography (porcelain pairs with elegant classical serif).
- Missing crackle-glaze texture (the subtle crackle adds aged authenticity).
- Dark backgrounds (porcelain is WHITE — the blue is painted on it).
- Sharp angular modern shapes (Chinese porcelain is curved and organic).
- Saturated bright blues (cobalt blue is deep and slightly muted).
- Missing the cloud collar/ruyi motif (traditional Chinese decorative shape).

## Accessibility Considerations

- White porcelain with deep blue text/patterns provides excellent contrast (WCAG AAA).
- Focus states: `focus:ring-2 focus:ring-[#1a3a8a]/40` (blue ring on white).
- Lotus scroll and willow SVGs must be `aria-hidden="true"` when decorative.
- Crackle texture must not reduce text contrast.
- The limited palette aids colorblind users (blue on white is universally readable).
- Touch targets must be adequate despite patterned border styling.
