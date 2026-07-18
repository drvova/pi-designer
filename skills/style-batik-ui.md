---
name: batik-ui
description: Build batik UI components (Indonesian wax-resist dyeing patterns, crackle textures, layered dye colors, traditional motifs like kawung/parang, warm earth palettes) with crackle crack patterns, organic dye bleeds, and the ancient textile art of Java. Trigger this skill when the user asks for batik design, Indonesian textile UI, wax-resist patterns, Javanese batik, crackle texture, or traditional fabric interfaces.
---

# Batik UI

Use this skill to design and implementation rich, patterned interfaces inspired by Indonesian batik textile art: wax-resist crackle textures, layered dye colors, traditional Javanese motifs (kawung, parang, mega mendung), warm earth palettes, and the ancient textile tradition of Java.

## Core Material Recipes

### 1) Batik Crackle Texture

The signature batik surface: wax-resist crackle pattern where dye seeped through cracked wax.

- `bg-[#8a4a1a]` (soga brown dye base).
- Crackle overlay: SVG of irregular intersecting lines forming vein-like cracks: `stroke="#3a1a08" stroke-width="0.5" opacity="0.3"`.
- Secondary dye in cracks: thin lines of `#c49a5a` or `#1a3a5a` within the crackle.

### 2) Kawung Motif

Classic batik pattern of four oval shapes meeting at center (from palm fruit).

```html
<svg viewBox="0 0 120 120" class="w-30 h-30 opacity-30">
  <g fill="#c49a5a" stroke="#3a1a08" stroke-width="1">
    <ellipse cx="60" cy="30" rx="20" ry="28"/>
    <ellipse cx="60" cy="90" rx="20" ry="28"/>
    <ellipse cx="30" cy="60" rx="28" ry="20"/>
    <ellipse cx="90" cy="60" rx="28" ry="20"/>
  </g>
  <circle cx="60" cy="60" r="4" fill="#3a1a08"/>
</svg>
```

### 3) Parang Stripe Pattern

Diagonal sword-like stripe motif (traditional Javanese royal pattern).

- `bg-[repeating-linear-gradient(45deg,#8a4a1a_0px,#8a4a1a_20px,#c49a5a_20px,#c49a5a_25px,#8a4a1a_25px,#8a4a1a_45px,#c49a5a_45px,#c49a5a_50px)]`.

### 4) Mega Mendung (Cloud) Motif

Cloud-shaped overlapping curved bands (from Cirebon).

```html
<svg viewBox="0 0 200 60" class="w-full opacity-30">
  <g fill="#1a3a8a" stroke="#ffffff" stroke-width="0.5">
    <path d="M0,40 Q30,10 60,30 Q90,10 120,35 Q150,10 180,30 Q195,20 200,40 L200,60 L0,60 Z"/>
    <path d="M0,50 Q30,30 60,45 Q90,30 120,48 Q150,30 180,45 Q195,38 200,50 L200,60 L0,60 Z" fill="#5a8aca"/>
  </g>
</svg>
```

### 5) Batik Surface Card

Warm batik-dyed card surface.

- `bg-[#8a4a1a] rounded-lg p-6 border-2 border-[#5a2a08] shadow-[0_2px_8px_rgba(58,26,8,0.2)]`.

### 6) Batik Button

Earth-tone button with traditional styling.

- `bg-[#5a2a08] text-[#c49a5a] font-serif font-medium px-8 py-3 border-2 border-[#c49a5a] hover:bg-[#3a1a04] transition-colors`.

## Color Palette System

| Color | Hex | Dye Name | Role |
|---|---|---|---|
| Soga Brown | `#8a4a1a` | Soga | Primary dye |
| Deep Brown | `#5a2a08` | Nila hitam | Dark dye |
| Indigo Blue | `#1a3a8a` | Nila | Secondary dye |
| Light Indigo | `#5a8aca` | Nila muda | Accent |
| Warm Gold | `#c49a5a` | Soga muda | Highlight |
| Cream | `#e8dcc0` | Kain (unclothed) | Base |
| Dark Brown | `#3a1a08` | Tegal | Text/outlines |
| Red Brown | `#8a2a1a` | Merah | Accent |

Rules: Warm earth-tone browns and deep indigo blues dominate. Colors come from natural dyes (soga bark, indigo plant). The palette should feel like aged Javanese textiles — warm, earthy, and deeply saturated.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant (elegant serif with warmth).
- **Body:** Lora, EB Garamond (readable warm serif).
- **Labels:** `font-serif font-medium text-sm tracking-wide`.

## Reusable Tailwind Tokens

- Crackle surface: `bg-[#8a4a1a]` with SVG crackle line overlay.
- Parang stripe: diagonal repeating gradient in brown tones.
- Kawung motif: four SVG ellipses meeting at center.
- Batik card: `bg-[#8a4a1a] border-2 border-[#5a2a08]`.
- Batik button: `bg-[#5a2a08] text-[#c49a5a] border-2 border-[#c49a5a]`.

## Quality Checklist

- At least one crackle texture surface (wax-resist pattern).
- At least one traditional motif (kawung, parang, or mega mendung).
- Warm earth-tone palette (soga brown, indigo blue, cream).
- Batik-dyed card surfaces with traditional borders.
- Textured surfaces suggesting wax-resist dyeing.
- Typography is warm serif.
- The aesthetic reads as Indonesian batik textile art.
- Colors come from natural dye traditions.
- Everything feels organic, handcrafted, and deeply patterned.
- The crackle texture is visible (the signature of wax-resist dyeing).

## Anti-Patterns

- Bright synthetic colors (batik uses natural earth-tone dyes).
- Missing crackle texture (this is the defining feature of batik).
- Smooth flat surfaces (batik is deeply textured).
- Missing traditional motifs (kawung/parang/mega mendung are essential).
- Modern geometric patterns (batik uses organic/traditional motifs).
- Sans-serif typography (batik pairs with warm elegant serif).
- Cool palettes (batik is warm brown and indigo).
- Unpatterned surfaces (every surface should have batik pattern).
- Missing the layered dye effect (multiple dye baths create color depth).
- Crisp digital edges (batik has organic, slightly bleeding edges).
