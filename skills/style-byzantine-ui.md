---
name: byzantine-ui
description: Build Byzantine UI components (gold mosaic surfaces, Orthodox icon halos, imperial purple, dome architecture, flat frontal figures, hieratic sacred geometry) with gilded backgrounds, halo motifs, and the opulent flattened aesthetic of the Eastern Roman Empire. Trigger this skill when the user asks for Byzantine design, Orthodox icon UI, golden mosaic, imperial Roman, Hagia Sophia aesthetic, or Eastern Christian sacred interfaces.
---

# Byzantine UI

Use this skill to design and implement opulent, flattened interfaces inspired by Byzantine art and architecture: gold mosaic backgrounds, haloed icon frames, imperial purple, hieratic frontal composition, and the sacred, otherworldly aesthetic of the Eastern Roman Empire.

## Non-Negotiable Foundations

- Byzantine art is FLAT and FRONTAL: figures face forward with no depth perspective. This flattened, stylized approach is the opposite of Western Renaissance realism.
- Gold is the dominant surface: backgrounds are gold mosaic (tesserae), symbolizing divine light and the heavenly realm.
- Imperial purple (tyrian purple) is the secondary color of authority and empire.
- Halos (nimbi) are mandatory around sacred or important elements — circles of golden light.
- Composition is hieratic and symmetrical: rigid, formal, deliberately non-naturalistic.
- Colors are rich and jewel-toned: deep blues, crimsons, malachite greens, and gold against dark backgrounds.

## Core Material Recipes

### 1) Gold Mosaic Background

The signature Byzantine surface: shimmering gold tesserae.

- Base: `bg-[#c4a043]` (Byzantine gold).
- Mosaic texture: `bg-[radial-gradient(circle_at_20%_20%,#d4b053_1px,transparent_1px),radial-gradient(circle_at_60%_40%,#b89035_1px,transparent_1px),radial-gradient(circle_at_40%_70%,#e0c060_1px,transparent_1px)] bg-[size:8px_8px,10px_10px,7px_7px]`.
- Glow: `shadow-[inset_0_0_40px_rgba(212,176,79,0.2)]`.

### 2) Haloed Icon Frame

Circular golden halo around a portrait or key element.

- Outer halo: `w-40 h-40 rounded-full bg-gradient-to-br from-[#f5d76e] via-[#c4a043] to-[#8a6a1a]`.
- Inner ring: `border-4 border-[#5a3a0a] rounded-full`.
- Glow: `shadow-[0_0_30px_rgba(212,176,79,0.4)]`.

### 3) Imperial Purple Panel

Deep royal purple panel of Byzantine authority.

- `bg-gradient-to-br from-[#4a1a4a] to-[#2a0a2a] border-2 border-[#c4a043] p-8 shadow-[0_0_20px_rgba(74,26,74,0.4)]`.

### 4) Mosaic Tile Card

Card with visible tesserae (mosaic tile) texture.

- `bg-[#1a0a1a] p-1 grid grid-cols-8 gap-0` (grid of tiny colored tiles forming a pattern).
- Each tile: small square `bg-[#c4a043]` or `bg-[#1a3a8a]` or `bg-[#8a1a1a]`.

### 5) Byzantine Button

Golden button with ornate border.

- `bg-gradient-to-b from-[#f5d76e] to-[#b8860b] text-[#3a1a0a] font-serif font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#5a3a0a] shadow-[0_4px_8px_rgba(212,176,79,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(212,176,79,0.5)] transition-all`.

### 6) Dome / Arch Frame

Semicircular dome or arch frame (like Hagia Sophia).

- `[clip-path:polygon(0_100%,0_30%,15%_15%,30%_5%,50%_0%,70%_5%,85%_15%,100%_30%,100%_100%)]` (dome arch).
- Or simple semicircle: `rounded-t-full` on a wide element.

### 7) Cross Potent / Orthodox Cross

Byzantine Orthodox cross decoration.

```html
<svg viewBox="0 0 40 60" class="w-8 h-12 text-[#c4a043]">
  <path fill="currentColor" d="M17,0 L23,0 L23,10 L30,10 L30,16 L23,16 L23,24 L30,24 L30,30 L23,30 L23,60 L17,60 L17,30 L10,30 L10,24 L17,24 L17,16 L10,16 L10,10 L17,10 Z"/>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Byzantine Gold | `#c4a043` | Primary surface, mosaic, halos |
| Light Gold | `#f5d76e` | Highlights, gradient tops |
| Dark Gold | `#8a6a1a` | Shadows, borders |
| Imperial Purple | `#4a1a4a` | Authority, panels |
| Deep Red | `#8a1a1a` | Crimson accent |
| Sapphire Blue | `#1a3a8a` | Heavenly blue accent |
| Malachite Green | `#1a4a2a` | Earth accent |
| Deep Black | `#0a0a0a` | Backgrounds, outlines |
| Cream | `#f5ead0` | Text on gold |
| Dark Brown | `#3a1a0a` | Text, outlines |

Rules: Gold is always the dominant surface. Purple and jewel tones are accents. Everything should feel sacred, imperial, and gilded. No pastels or muted tones.

## Typography Recommendations

- **Display:** Cinzel, Trajan Pro, or Cormorant Unicase (Roman imperial caps).
- **Body:** EB Garamond, Cormorant (elegant serif).
- **Labels:** `font-serif font-bold uppercase tracking-[0.2em]`.
- Gold gradient text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] to-[#8a6a1a]`.

## Interaction Rules

- Default: gilded, sacred, hieratic.
- Hover: gold glow intensifies (`hover:shadow-[0_0_30px_rgba(212,176,79,0.5)]`).
- Focus: `focus:ring-2 focus:ring-[#c4a043]`.
- Transitions: `transition-all duration-400` (sacred, unhurried).

## Reusable Tailwind Tokens

- Gold mosaic bg: `bg-[#c4a043]` with radial-gradient tile pattern.
- Halo frame: `rounded-full bg-gradient-to-br from-[#f5d76e] via-[#c4a043] to-[#8a6a1a] shadow-[0_0_30px_rgba(212,176,79,0.4)]`.
- Imperial panel: `bg-gradient-to-br from-[#4a1a4a] to-[#2a0a2a] border-2 border-[#c4a043]`.
- Byzantine button: `bg-gradient-to-b from-[#f5d76e] to-[#b8860b] text-[#3a1a0a] font-serif border-2 border-[#5a3a0a]`.

## Quality Checklist

- Gold mosaic texture present on backgrounds.
- At least one haloed (golden circle) element.
- Imperial purple used for panels or accents.
- Symmetrical, hieratic composition.
- Rich jewel-toned palette (gold, purple, crimson, sapphire).
- Orthodox cross or dome arch decorative element.
- Typography is Roman imperial serif (Cinzel).
- The aesthetic reads as Eastern Roman / Byzantine sacred art.

## Anti-Patterns

- Realistic depth or perspective (Byzantine is flat and frontal).
- Pastel or muted colors (palette is rich and gilded).
- Missing gold surfaces (gold is the dominant material).
- Sans-serif typography (Byzantine requires classical serif).
- Asymmetrical chaotic composition (Byzantine is formal and symmetrical).
- Missing halos around important elements.
- Minimalist restraint (Byzantine is opulent and sacred).
