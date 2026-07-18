---
name: tattoo-flash-ui
description: Build tattoo flash UI components (traditional American tattoo art, bold black outlines, limited primary colors, swallow/anchor/heart/dagger motifs, banner ribbons, vintage tattoo parlor aesthetic) with thick inked outlines, flat color fills, and the timeless craft of traditional tattooing. Trigger this skill when the user asks for tattoo design, tattoo flash, American traditional tattoo, Sailor Jerry, old school tattoo, or ink art interfaces.
---

# Tattoo Flash UI

Use this skill to design and implementation bold, iconic interfaces inspired by traditional American tattoo flash sheets: thick black outlines, limited primary color palette, swallow/anchor/heart-and-dagger motifs, ribbon banners, and the timeless aesthetic of Sailor Jerry and old-school tattooing.

## Core Material Recipes

### 1) Flash Sheet Surface

Yellowed paper background (like a tattoo parlor flash sheet).

- `bg-[#f0e8d4]` (aged paper with slight yellowing).
- Texture: SVG noise at `opacity-[0.04]`.
- Grid of flash designs: small tattoo SVGs arranged in rows.

### 2) Bold-Outlined Card

Card with thick black tattoo-style outlines.

- `bg-[#f0e8d4] border-[4px] border-[#1a1a1a] rounded-none p-6 shadow-[4px_4px_0_rgba(0,0,0,0.15)]`.

### 3) Swallow Motif

Traditional tattoo swallow SVG.

```html
<svg viewBox="0 0 80 60" class="w-20 h-14">
  <g stroke="#1a1a1a" stroke-width="2">
    <path d="M10,30 Q30,15 50,25 Q60,20 70,30 L60,35 Q50,30 30,40 Q20,38 10,30" fill="#1a3a8a"/>
    <path d="M50,25 L60,10" fill="none"/>
    <circle cx="65" cy="28" r="3" fill="#ffffff"/>
    <circle cx="65" cy="28" r="1.5" fill="#1a1a1a"/>
    <!-- Wing detail -->
    <path d="M25,22 L20,15 M30,20 L28,12" stroke-width="1" fill="none"/>
  </g>
</svg>
```

### 4) Heart and Dagger Motif

Classic tattoo heart-pierced-by-dagger SVG.

```html
<svg viewBox="0 0 80 80" class="w-20 h-20">
  <g stroke="#1a1a1a" stroke-width="2">
    <path d="M40,65 Q10,40 15,25 Q15,10 30,15 Q35,10 40,20 Q45,10 50,15 Q65,10 65,25 Q70,40 40,65" fill="#c41e1e"/>
    <!-- Dagger -->
    <path d="M40,75 L40,5 L36,0 L40,-5 L44,0 L40,5" fill="#c0c0c0"/>
    <rect x="36" y="55" width="8" height="4" fill="#c4a043"/>
    <!-- Banner across heart -->
    <path d="M10,35 Q40,30 70,35 Q70,42 40,37 Q10,42 10,35" fill="#f0e8d4"/>
  </g>
</svg>
```

### 5) Ribbon Banner Label

Flowing ribbon banner for text.

```html
<svg viewBox="0 0 200 40" class="w-full">
  <path d="M10,15 Q100,5 190,15 L195,25 Q100,15 5,25 Z M5,25 L0,30 L10,28 M195,25 L200,30 L190,28" 
        fill="#1a3a8a" stroke="#1a1a1a" stroke-width="2"/>
  <text x="100" y="23" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold" font-family="serif">HOLD FAST</text>
</svg>
```

### 6) Tattoo Button

Bold primary-color button with thick outline.

- `bg-[#c41e1e] text-white font-bold uppercase tracking-wider px-8 py-3 border-[3px] border-[#1a1a1a] rounded-none shadow-[3px_3px_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all`.

### 7) Anchor Motif

Simple tattoo anchor SVG.

```html
<svg viewBox="0 0 40 60" class="w-10 h-14">
  <g stroke="#1a1a1a" stroke-width="2" fill="none">
    <circle cx="20" cy="8" r="5"/>
    <line x1="20" y1="13" x2="20" y2="50"/>
    <path d="M8,35 Q8,55 20,55 Q32,55 32,35"/>
    <line x1="10" y1="25" x2="30" y2="25"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Tattoo Black | `#1a1a1a` | Outlines (the most important color) |
| Tattoo Red | `#c41e1e` | Primary fill (hearts, roses) |
| Tattoo Blue | `#1a3a8a` | Secondary fill (swallows, banners) |
| Tattoo Green | `#2a5a1a` | Foliage (leaves, stems) |
| Tattoo Yellow | `#f5cc3a` | Accent (stars, sun) |
| Tattoo Brown | `#5a3a1a` | Rare fill (ropes, wood) |
| Flash Paper | `#f0e8d4` | Background |
| White | `#ffffff` | Highlights, eye whites |

Rules: Limited palette — traditional tattooers used 5-7 colors max. Black outlines are ALWAYS the thickest and most important element. Colors are flat and saturated.

## Typography Recommendations

- **Display:** Bungee, Anton, or Permanent Marker (bold, iconic, tattoo-signage).
- **Banner text:** Playfair Display, Cormorant (elegant serif inside ribbon banners).
- **Body:** Oswald, Roboto Condensed (condensed, readable).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (old-school lettering).

## Reusable Tailwind Tokens

- Flash card: `bg-[#f0e8d4] border-[4px] border-[#1a1a1a] rounded-none shadow-[4px_4px_0_rgba(0,0,0,0.15)]`.
- Tattoo button: `bg-[#c41e1e] text-white border-[3px] border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a]`.
- Ribbon banner: SVG curved path with text fill.
- Swallow/heart/anchor: SVG with `stroke="#1a1a1a" stroke-width="2"` and flat color fills.

## Quality Checklist

- At least one traditional tattoo motif (swallow, anchor, heart/dagger, rose).
- Thick bold black outlines on all major elements (`border-[3px]` or `border-[4px]`).
- Limited primary color palette (red, blue, green, yellow, black).
- At least one ribbon banner with text.
- Hard offset shadows (no blur).
- Flat color fills (no gradients).
- Yellowed flash-paper background.
- Typography is bold and iconic.
- The aesthetic reads as traditional American tattoo / Sailor Jerry.
- Everything feels timeless, iconic, and hand-crafted.

## Anti-Patterns

- Soft blurred shadows (tattoo shadows are hard offsets).
- Gradients or soft color transitions (tattoo colors are FLAT).
- Thin subtle borders (outlines must be THICK and BOLD).
- Missing tattoo motifs (swallows, anchors, hearts are essential).
- More than 7 colors (traditional tattooers had limited ink).
- Rounded elegant shapes (tattoo art is bold and direct).
- Missing the ribbon banner (banners with text are iconic tattoo elements).
- Modern clean digital polish (the charm is in the hand-drawn bold outline).
- Light or pastel colors (palette is saturated primaries).
- Missing the flash-paper yellowed background.

## Accessibility Considerations

- Flash-paper background with black outlines provides excellent contrast (WCAG AAA).
- Bold thick borders aid visual identification of interactive elements.
- Focus states: `focus:ring-4 focus:ring-[#1a1a1a]` (thick black ring).
- Tattoo SVG motifs must be `aria-hidden="true"` when decorative.
- Ribbon banner text must be accessible via proper semantic text (not only SVG).
- Touch targets must be adequate despite thick border styling.
- The limited color palette must not rely on color alone for differentiation.
