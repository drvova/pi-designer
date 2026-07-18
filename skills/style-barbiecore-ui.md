---
name: barbiecore-ui
description: Build Barbiecore UI components (hot pink dominance, glitter textures, plastic shine, DreamHouse aesthetics, magenta gradients, sparkly accents, unapologetic femininity) with saturated pink palettes, glossy plastic surfaces, and the bold playful energy of Barbie's world. Trigger this skill when the user asks for Barbiecore, Barbie aesthetic, hot pink UI, magenta design, glitter gloss, or bold feminine interfaces.
---

# Barbiecore UI

Use this skill to design and implementation bold, playful interfaces dominated by hot pink: Barbie DreamHouse aesthetics, glossy plastic surfaces, glitter textures, magenta gradients, sparkly accents, and the unapologetically feminine, confident energy of Barbiecore.

## Core Material Recipes

### 1) Hot Pink Gradient Background

The foundational Barbie surface.

- `bg-gradient-to-br from-[#ff1493] via-[#ff69b4] to-[#ff1493]` (deep pink to hot pink).
- Sparkle overlay: scattered SVG stars at low opacity.

### 2) Glossy Plastic Panel

Shiny plastic Barbie DreamHouse surface.

- `bg-gradient-to-b from-[#ff69b4] to-[#ff1493] rounded-2xl p-6 shadow-[0_4px_12px_rgba(255,20,147,0.3),inset_0_2px_0_rgba(255,255,255,0.3)]`.

### 3) Glitter Texture Overlay

Sparkly glitter effect.

```css
.glitter-overlay {
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.6), transparent),
    radial-gradient(0.5px 0.5px at 80% 20%, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.5), transparent),
    radial-gradient(0.5px 0.5px at 10% 80%, rgba(255,255,255,0.7), transparent);
  background-size: 100px 100px;
}
```

### 4) Barbie Button

Glossy pink pill button.

- `bg-gradient-to-b from-[#ff69b4] to-[#ff1493] text-white font-bold uppercase tracking-wider rounded-full px-8 py-3 shadow-[0_4px_0_#c01077,inset_0_2px_0_rgba(255,255,255,0.3)] hover:shadow-[0_2px_0_#c01077,inset_0_2px_0_rgba(255,255,255,0.3)] hover:translate-y-[2px] transition-all`.

### 5) Sparkle Accent

Animated star sparkle SVG.

```html
<svg viewBox="0 0 20 20" class="w-5 h-5 text-white animate-[sparkle_2s_ease-in-out_infinite]">
  <path fill="currentColor" d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"/>
</svg>
```

### 6) DreamHouse Card

Pink translucent panel with glossy border.

- `bg-[#ff69b4]/20 backdrop-blur-md border-2 border-[#ff1493]/40 rounded-3xl p-6 shadow-[0_0_20px_rgba(255,20,147,0.2)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Deep Pink | `#ff1493` | Primary |
| Hot Pink | `#ff69b4` | Secondary |
| Magenta | `#c01077` | Shadow, depth |
| Bubblegum | `#ffb3d9` | Light accent |
| White | `#ffffff` | Sparkles, contrast |
| Gold | `#ffd700` | Optional sparkle accent |
| Aqua | `#00d4ff` | Rare cool contrast |

Rules: PINK dominates everything. The palette should scream Barbie. White sparkles and occasional gold/aqua provide contrast, but pink is ALWAYS the hero.

## Typography Recommendations

- **Display:** Fredoka One, Pacifico, or Lilita One (bold, bubbly, playful).
- **Body:** Nunito, Quicksand (rounded friendly sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm text-white`.
- Typography should feel bold, playful, and unapologetically feminine.

## Reusable Tailwind Tokens

- Pink gradient: `bg-gradient-to-br from-[#ff1493] via-[#ff69b4] to-[#ff1493]`.
- Glossy panel: `bg-gradient-to-b from-[#ff69b4] to-[#ff1493] rounded-2xl shadow-[inset_0_2px_0_rgba(255,255,255,0.3)]`.
- Barbie button: `bg-gradient-to-b from-[#ff69b4] to-[#ff1493] text-white rounded-full shadow-[0_4px_0_#c01077,inset_0_2px_0_rgba(255,255,255,0.3)]`.
- DreamHouse glass: `bg-[#ff69b4]/20 backdrop-blur-md border-2 border-[#ff1493]/40 rounded-3xl`.

## Quality Checklist

- Hot pink dominates the entire palette.
- Glossy plastic surfaces with white inner highlight.
- Glitter/sparkle texture overlay present.
- At least one animated sparkle element.
- Rounded pill-shaped buttons with glossy styling.
- Typography is bold and bubbly/playful.
- The aesthetic reads as Barbie DreamHouse / Barbiecore.
- Everything feels bold, playful, and unapologetically pink.
- White sparkles provide contrast and energy.

## Anti-Patterns

- Muted or desaturated pinks (Barbiecore is SCREAMING hot pink).
- Dark backgrounds (Barbie is bright and vibrant).
- Sharp angular shapes (everything is rounded and glossy).
- Cold or neutral color palettes.
- Missing glitter/sparkle effects (these are the signature Barbie texture).
- Serif or serious typography (Barbiecore is playful and bubbly).
- Matte flat surfaces (Barbie is GLOSSY plastic).
- Subtle restraint (Barbiecore is maximum pink, maximum shine).
