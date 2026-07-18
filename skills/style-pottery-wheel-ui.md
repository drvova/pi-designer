---
name: pottery-wheel-ui
description: Build pottery wheel UI components (spinning clay vessel, wet clay sheen, hand-thrown forms, kiln-fired finishes, ceramic glaze drips, pottery studio workbench, earth-toned glazes) with spinning vessel animations, wet clay textures, and the meditative craft of throwing on the wheel. Trigger this skill when the user asks for pottery design, ceramic UI, clay vessel, spinning wheel animation, glaze texture, kiln-fired finish, pottery studio, or hand-thrown craft interfaces.
---

# Pottery Wheel UI

Use this skill to design and implement interfaces inspired by the pottery wheel: spinning wet clay vessels with reflective sheen, hand-thrown vase and bowl silhouettes, kiln-fired crackle textures, ceramic glaze drip accents, earth-toned studio surfaces, and the meditative rhythm of clay spinning on the wheel. Every surface should feel touched by hands, shaped by rotation, and finished by fire.

## Non-Negotiable Foundations

- The pottery wheel is a craft of transformation: wet earth becomes vessel through rotation, pressure, and fire. Every surface should feel like it was shaped by human hands on a spinning wheel — organic, slightly asymmetric, alive with the memory of motion.
- Materials are elemental: wet clay (reflective, plastic, responsive), fired terracotta (warm, porous, solid), ceramic glaze (glossy, dripping, colorful), kiln brick (rough, heat-stained), and studio wood (clay-splattered, work-worn).
- Colors are earth-derived: wet clay brown, fired terracotta orange, glaze teal, cream slip, kiln orange, and deep earth brown. The mood is a sun-lit studio — warm, meditative, grounded.
- Motion is essential: the wheel must spin. A slow, steady rotation is the heartbeat of the pottery interface. Vessels form through rotation, glazes drip with gravity, and the whole interface breathes with the wheel's rhythm.
- Typography blends organic hand-lettered forms with clean readable serifs for studio labels.
- The aesthetic is tactile, earthy, and meditative — everything should feel like it was pulled from clay on a spinning wheel.

## Core Material Recipes

### 1) Wet Clay Surface (the foundational background)

The signature pottery studio surface: warm clay tones with a subtle wet sheen.

- Background gradient: `bg-gradient-to-b from-[#c89868] via-[#b8885a] to-[#a87848]`.
- Wet sheen overlay: horizontal gradient highlight at `opacity-[0.12]` in `#f0e0c0` to simulate reflective wet clay.
- Finger-ridge texture: subtle curved SVG lines at `opacity-[0.06]` in `#a87040` to suggest thrown ridges.
- Full: `bg-gradient-to-b from-[#c89868] via-[#b8885a] to-[#a87848] relative overflow-hidden p-6 rounded-lg`.

### 2) Spinning Vessel Animation

The defining motion element: a pottery vessel rotating continuously on the wheel.

```css
@keyframes pottery-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.pottery-spin {
  animation: pottery-spin 6s linear infinite;
}
.pottery-spin-slow {
  animation: pottery-spin 12s linear infinite;
}
```

Wheel base element:
```html
<div class="relative w-48 h-48 mx-auto flex items-center justify-center">
  <!-- Wheel base -->
  <div class="absolute bottom-0 w-40 h-4 bg-gradient-to-b from-[#8a7a5a] to-[#6a5a3a] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)]"></div>
  <!-- Spinning wheel surface -->
  <div class="pottery-spin w-36 h-36 rounded-full bg-gradient-to-br from-[#9a8a6a] via-[#8a7a5a] to-[#7a6a4a] border-2 border-[#6a5a3a] shadow-[0_0_20px_rgba(0,0,0,0.15)]">
    <!-- Wheel rings -->
    <div class="absolute inset-2 rounded-full border border-[#7a6a4a] opacity-40"></div>
    <div class="absolute inset-6 rounded-full border border-[#7a6a4a] opacity-30"></div>
    <div class="absolute inset-10 rounded-full border border-[#7a6a4a] opacity-20"></div>
  </div>
</div>
```

### 3) Wet Clay Sheen Gradient

The reflective surface of freshly thrown wet clay — glossy, alive, catching light.

- Base: `bg-gradient-to-br from-[#b8885a] via-[#c89868] to-[#a87848]`.
- Sheen highlight: `bg-[linear-gradient(135deg,transparent_30%,rgba(240,232,208,0.3)_45%,transparent_55%)]` overlay.
- Reflection line: thin horizontal gradient `h-px bg-gradient-to-r from-transparent via-[#f0e0c0]/40 to-transparent`.
- Combined: the vessel or surface should have a visible light-catching highlight that suggests wetness.

```html
<div class="w-full h-32 bg-gradient-to-br from-[#b8885a] via-[#c89868] to-[#a87848] rounded-lg relative overflow-hidden">
  <div class="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(240,232,208,0.3)_45%,transparent_55%)]"></div>
  <div class="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0e0c0]/40 to-transparent"></div>
</div>
```

### 4) Hand-Thrown Vessel SVG Silhouettes

Various vase and bowl forms — each slightly asymmetric to suggest hand-thrown origin.

```html
<!-- Tall vase -->
<svg viewBox="0 0 60 120" class="w-12 h-24">
  <path d="M25,115 Q22,100 20,80 Q18,60 22,45 Q26,30 24,20 Q22,10 26,8 Q30,6 34,8 Q38,10 36,20 Q34,30 38,45 Q42,60 40,80 Q38,100 35,115 Z" fill="#b8885a" stroke="#a87040" stroke-width="1"/>
  <ellipse cx="30" cy="8" rx="6" ry="3" fill="#c89868" stroke="#a87040" stroke-width="0.8"/>
</svg>

<!-- Wide bowl -->
<svg viewBox="0 0 80 50" class="w-16 h-10">
  <path d="M10,15 Q12,5 20,3 L60,3 Q68,5 70,15 Q72,30 60,42 Q50,48 40,48 Q30,48 20,42 Q8,30 10,15 Z" fill="#c89868" stroke="#a87040" stroke-width="1"/>
  <ellipse cx="40" cy="3" rx="20" ry="4" fill="#d8a878" stroke="#a87040" stroke-width="0.8"/>
</svg>

<!-- Teapot form -->
<svg viewBox="0 0 90 80" class="w-18 h-16">
  <path d="M35,75 Q30,65 28,50 Q26,35 32,22 Q38,12 45,10 Q52,12 58,22 Q64,35 62,50 Q60,65 55,75 Z" fill="#b8885a" stroke="#a87040" stroke-width="1"/>
  <path d="M28,35 Q18,30 14,38 Q12,44 18,48 Q24,50 28,45" fill="none" stroke="#a87040" stroke-width="2"/>
  <ellipse cx="58" cy="28" rx="8" ry="4" fill="none" stroke="#a87040" stroke-width="1.5" transform="rotate(-20,58,28)"/>
  <ellipse cx="45" cy="8" rx="8" ry="3" fill="#c89868" stroke="#a87040" stroke-width="0.8"/>
</svg>
```

### 5) Kiln-Fired Crackle Texture

The subtle crackle pattern of a kiln-fired ceramic glaze surface.

- Base: solid glaze color (teal, cream, or terracotta).
- Crackle overlay: SVG network of thin irregular lines at `opacity-[0.12]` in a darker shade of the base color.
- Slight tonal variation: random radial gradients at `opacity-[0.08]` to suggest uneven firing.

```html
<div class="relative w-full h-24 bg-[#3a7a7a] rounded-lg overflow-hidden">
  <svg class="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 100">
    <path d="M20,10 L45,30 L30,60 L55,80" fill="none" stroke="#2a5a5a" stroke-width="0.8"/>
    <path d="M80,5 L70,35 L95,55 L75,90" fill="none" stroke="#2a5a5a" stroke-width="0.6"/>
    <path d="M130,15 L150,40 L135,65 L160,85" fill="none" stroke="#2a5a5a" stroke-width="0.7"/>
    <path d="M10,40 L40,45 L70,38 L110,50 L150,42 L190,48" fill="none" stroke="#2a5a5a" stroke-width="0.5"/>
    <path d="M5,70 L35,68 L65,75 L95,70 L140,78 L180,72" fill="none" stroke="#2a5a5a" stroke-width="0.5"/>
  </svg>
</div>
```

### 6) Glaze Drip Accent

Colorful glaze dripping down from the rim of a vessel or from an edge — organic, gravity-driven.

```html
<div class="relative w-full h-16 overflow-hidden">
  <!-- Rim -->
  <div class="absolute top-0 left-0 right-0 h-3 bg-[#3a7a7a] rounded-t-lg"></div>
  <!-- Drips -->
  <svg class="absolute top-2 left-0 w-full h-14" viewBox="0 0 200 50">
    <path d="M20,0 Q22,15 18,25 Q16,30 20,32" fill="#3a7a7a" opacity="0.9"/>
    <path d="M55,0 Q58,20 54,35 Q52,40 55,42" fill="#3a7a7a" opacity="0.7"/>
    <path d="M90,0 Q92,10 88,18 Q86,22 90,24" fill="#3a7a7a" opacity="0.85"/>
    <path d="M130,0 Q133,25 129,40 Q127,45 130,47" fill="#3a7a7a" opacity="0.6"/>
    <path d="M170,0 Q172,12 168,22 Q166,28 170,30" fill="#3a7a7a" opacity="0.8"/>
  </svg>
</div>
```

### 7) Pottery Studio Workbench Surface

Clay-splattered worn wood workbench with the patina of a working studio.

- Wood base: `bg-gradient-to-b from-[#7a6a4a] to-[#6a5a3a]`.
- Clay splatters: small irregular circles in `#b8885a` and `#c89868` at various `opacity-[0.1-0.25]`.
- Tool marks: thin scratch lines in `#5a4a2a` at `opacity-[0.1]`.
- Water rings: faint circular stains in `#8a7a5a` at `opacity-[0.08]`.

### 8) Pottery Wheel Button

Smooth rounded button with a clay-like pressed feel.

- `bg-gradient-to-b from-[#b8885a] to-[#a87040] text-[#f5f0e0] font-serif font-medium px-6 py-3 rounded-full border-2 border-t-[#c89868] border-b-[#8a6030] shadow-[0_3px_0_#8a6030,inset_0_1px_0_rgba(240,232,208,0.3)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#8a6030] active:shadow-none transition-all duration-200`.

### 9) Clay Slip Divider

Decorative divider made of liquid clay slip — a thin raised ridge.

- `h-1 bg-gradient-to-r from-transparent via-[#c89868] to-transparent rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_0.5px_0_rgba(240,232,208,0.3)]`.

## Color Palette System

### Core Pottery Wheel Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Wet Clay | `#b8885a` | Freshly thrown clay | Primary surface, vessel body |
| Clay Light | `#c89868` | Wet clay highlight | Sheen, raised areas |
| Fired Terracotta | `#c47040` | Kiln-fired earthenware | Accent, warm highlights |
| Glaze Teal | `#3a7a7a` | Copper-oxide ceramic glaze | Decorative accent, glaze |
| Glaze Cream | `#f0e8d0` | Tin-oxide white glaze | Light accents, text on dark |
| Kiln Orange | `#e06020` | Kiln fire glow | Hot accent, fire elements |
| Studio Wood | `#6a5a3a` | Worn workbench | Workspace panels, borders |
| Earth Brown | `#5a3a1a` | Raw unworked clay | Deep shadows, text |
| Slip White | `#f5f0e0` | Liquid clay slip | Labels, light backgrounds |
| Crackle Dark | `#4a6a6a` | Crackle line in teal glaze | Kiln-fired texture lines |
| Ash Grey | `#9a9080` | Kiln ash | Muted secondary accents |

Rules: Earth tones derived from actual clay and glaze colors dominate. Wet clay brown and glaze teal are the primary duo. Kiln orange appears only as fire/heat accent — rare and intense. The palette should feel like a potter's hands: warm, earthy, grounded, with moments of glossy glaze color. Never synthetic or cool — everything is earth-derived.

## Typography Recommendations

Pottery wheel typography blends organic hand-drawn forms with clean studio labels:

- **Display headings:** Playfair Display, Cormorant Garamond, or Libre Baskerville (elegant, slightly organic serif).
- **Studio labels:** Josefin Sans light or Raleway thin (clean, modern, like studio signage).
- **Body:** Lora, Source Serif Pro, or Merriweather (warm readable serif).
- **Vessel names:** Cormorant Garamond italic (the elegant, hand-lettered feel of a potter signing their work).
- **Labels:** `font-serif font-medium text-sm tracking-wide text-[#5a3a1a]` for workbench labels.
- Avoid heavy slab serifs or aggressive fonts. Pottery is gentle, organic, and meditative.

## Component Architecture Pattern

1. Warm wet-clay gradient background (the studio floor and air).
2. Pottery wheel circle as a central or decorative element (the heart of the craft).
3. Spinning vessel animation on key elements (living rotation).
4. Hand-thrown vessel silhouettes as decorative accents or icons.
5. Wet clay sheen gradients on interactive surfaces (freshly thrown feel).
6. Glaze drip accents on edges and rims (color dripping with gravity).
7. Kiln-fired crackle texture on finished/completed states (post-fire surface).
8. Studio workbench wood texture for workspace panels (the potter's bench).
9. Clay slip dividers between sections (liquid clay ridges).

## Interaction Rules

- Default state: warm, wet, rotating. The wheel spins slowly and continuously.
- Hover: surface gains wet sheen (`hover:brightness-110 hover:saturate-110`), like fresh water applied to clay.
  - `hover:brightness-110 hover:saturate-110 hover:shadow-[0_4px_16px_rgba(184,136,90,0.3)] transition-all duration-300`.
- Active: pressed into clay feel (`active:translate-y-0.5 active:scale-[0.99] active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]`).
- Focus: warm clay ring `focus:ring-2 focus:ring-[#c89868]/60 focus:ring-offset-2 focus:ring-offset-[#f5f0e0]`.
- Transitions: `transition-all duration-300 ease-in-out` (smooth, like hands shaping clay — organic and flowing).
- Vessel spin: continuous 6s rotation for active elements, 12s for decorative background elements.
- Glaze drip: on hover, drips extend downward by 8px with a slow `duration-700 ease-in`.
- No sharp snaps or instant changes. Pottery is fluid — all transitions should feel like wet clay moving.

## Reusable Tailwind Tokens

- Wet clay surface: `bg-gradient-to-b from-[#c89868] via-[#b8885a] to-[#a87848]`
- Clay sheen: `bg-[linear-gradient(135deg,transparent_30%,rgba(240,232,208,0.3)_45%,transparent_55%)]`
- Glaze teal surface: `bg-[#3a7a7a] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`
- Glaze cream surface: `bg-[#f0e8d0] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]`
- Kiln orange glow: `bg-[#e06020] opacity-80 blur-[4px]`
- Studio workbench: `bg-gradient-to-b from-[#7a6a4a] to-[#6a5a3a]`
- Pottery button: `bg-gradient-to-b from-[#b8885a] to-[#a87040] text-[#f5f0e0] font-serif rounded-full border-2 border-t-[#c89868] border-b-[#8a6030] shadow-[0_3px_0_#8a6030]`
- Clay slip divider: `h-1 bg-gradient-to-r from-transparent via-[#c89868] to-transparent rounded-full`
- Wheel base: `rounded-full bg-gradient-to-br from-[#9a8a6a] via-[#8a7a5a] to-[#7a6a4a] border-2 border-[#6a5a3a]`
- Vessel silhouette: SVG paths with `fill="#b8885a" stroke="#a87040"`
- Crackle texture: SVG line network at `opacity-[0.12]-[0.15]`
- Pottery spin: `@keyframes pottery-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`
- Glaze drip: SVG tear-drop paths from top edge with varying opacity

## Quality Checklist (must pass)

- At least one spinning vessel animation (continuous wheel rotation).
- Wet clay sheen gradient present on primary surfaces (reflective wetness).
- Hand-thrown vessel SVG silhouette (vase, bowl, or teapot form).
- Glaze drip accent on at least one edge or rim.
- Kiln-fired crackle texture on at least one finished surface.
- Pottery wheel circle element present (the defining craft tool).
- Studio workbench wood texture on workspace panels.
- Color palette is earth-derived — wet clay, terracotta, glaze teal, cream.
- Typography uses organic serif or elegant hand-lettered style.
- Interactions are fluid and smooth (no sharp snaps or instant changes).
- The aesthetic reads as a pottery studio — warm, earthy, meditative, craft-focused.
- Clay slip divider or raised ridge between major sections.
- At least one kiln/fire-related element (orange glow, crackle, or fired texture).

## Anti-Patterns

- Cool or synthetic colors (everything is earth-derived — clay, glaze, fire).
- Sharp, snappy, or bouncy animations (pottery motion is fluid and continuous).
- Flat, untextured surfaces (clay needs sheen, grain, or thrown-ridge texture).
- Missing wheel rotation animation (the spinning wheel IS the pottery interface).
- Heavy slab-serif or aggressive typography (pottery is gentle and organic).
- Glossy plastic-feeling surfaces (wet clay has a specific organic sheen, not plastic).
- Perfectly symmetrical vessel forms (hand-thrown pottery has subtle asymmetry).
- Missing glaze elements (glaze drips, crackle, or colored finishes are essential).
- Digital or UI-chrome-feeling elements (the pottery world is analog and tactile).
- Missing fire/kiln references (firing is the transformative step that makes clay permanent).
- Monochrome or single-tone palette (pottery uses multiple glaze colors against clay).
- Pure white or pure black backgrounds (use slip white `#f5f0e0` or earth brown `#5a3a1a`).

## Accessibility Considerations

- Slip white (`#f5f0e0`) with earth brown text (`#5a3a1a`) provides excellent contrast (WCAG AAA).
- Wet clay surface (`#b8885a`) requires dark text (`#5a3a1a`) — verify WCAG AA minimum.
- Spinning vessel animations must respect `prefers-reduced-motion` (stop rotation or slow to 30s).
- Glaze drip animations must respect `prefers-reduced-motion` (show drips at final position without animation).
- Pottery wheel interactive elements need `aria-label` describing their function.
- Decorative vessel silhouettes must be `aria-hidden="true"`.
- Focus states must be visible against warm clay surfaces (`focus:ring-2 focus:ring-[#c89868]/60`).
- Touch targets must meet minimum 44x44px despite organic rounded styling.
- Crackle texture overlays must not reduce text contrast below WCAG AA thresholds.
- Kiln orange accents must not be the sole indicator of state — pair with text or shape changes.
