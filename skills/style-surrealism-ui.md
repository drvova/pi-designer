---
name: surrealism-ui
description: Build surrealism UI components (dreamlike impossibilities, melting forms, Dalí-inspired distortion, floating elements, impossible spaces, juxtaposition of unrelated objects) with shifting perspectives, irrational scale, and the uncanny visual language of the subconscious mind. Trigger this skill when the user asks for surrealism, surrealist design, dreamlike UI, Dalí-inspired, Magritte aesthetic, melting forms, or absurdist interfaces.
---

# Surrealism UI

Use this skill to design and implement dreamlike, uncanny interfaces inspired by Surrealist art: impossible juxtapositions, melting and distorted forms, floating elements in empty space, irrational scale shifts, and the visual language of dreams and the subconscious mind.

## Non-Negotiable Foundations

- Surrealism places impossible things in believable spaces. A button floats in mid-air. A clock melts over a card edge. A door opens onto a sky.
- Scale is irrational: tiny elements next to enormous ones. A headline is 200px; the body text below it is 8px.
- Perspective shifts: elements viewed from unusual angles, skewed, rotated, or inverted.
- Juxtaposition creates meaning from unrelated objects: a fish inside a lightbulb, a cloud inside a teacup.
- Colors can be dreamlike and saturated (Dalí) or muted and eerie (Magritte).
- Motion is slightly off — things drift, melt, or float in ways that feel wrong.

## Core Material Recipes

### 1) Melting / Distorted Card

Card with a melted or warped bottom edge.

- `bg-[#f5ead0] p-8` with `[clip-path:polygon(0_0,100%_0,100%_85%,95%_90%,90%_82%,85%_92%,80%_85%,75%_95%,70%_87%,65%_93%,60%_85%,55%_97%,50%_88%,45%_93%,40%_87%,35%_95%,30%_85%,25%_92%,20%_86%,15%_94%,10%_87%,5%_93%,0_88%)]` (melting bottom edge).

### 2) Floating Element

Element that floats with a drop shadow that defies gravity.

- `absolute z-10 shadow-[12px_-8px_0_rgba(0,0,0,0.15)]` (shadow goes UP-LEFT, not down — impossible lighting).

### 3) Impossible Doorway / Frame

A doorway that opens onto a different scene.

- Door frame: `border-4 border-[#3a2a1a] rounded-t-full bg-[#1a0a3a]` (dark space doorframe).
- Through the door: `bg-[linear-gradient(to_bottom,#87ceeb,#f5d76e_60%,#8a4a1a)]` (sky-to-desert visible through the frame).

### 4) Scale-Juxtaposed Typography

Irrational type scale where sizes don't follow hierarchy.

- Hero: `text-[12rem] font-thin` (enormous but thin).
- Subtitle: `text-[10px] font-bold` (tiny but bold — the opposite of expected hierarchy).

### 5) Floating Eye / Sky Element

Decorative surreal SVG element (eye in the sky, cloud with teeth).

```html
<svg viewBox="0 0 100 60" class="w-24 h-14 opacity-60">
  <ellipse cx="50" cy="30" rx="40" ry="20" fill="#f5f5f0"/>
  <circle cx="50" cy="30" r="12" fill="#1a3a5a"/>
  <circle cx="50" cy="30" r="6" fill="#0a0a0a"/>
  <circle cx="47" cy="27" r="2" fill="#ffffff"/>
  <!-- Eyelashes -->
  <path d="M15,20 L10,15 M25,15 L22,8 M50,12 L50,5 M75,15 L78,8 M85,20 L90,15" stroke="#3a2a1a" stroke-width="1"/>
</svg>
```

### 6) Surreal Button

Button that defies conventional styling.

- `bg-gradient-to-r from-[#1a3a5a] to-[#8a1a5a] text-[#f5d76e] font-serif italic text-lg px-8 py-3 rounded-l-full rounded-br-none shadow-[4px_4px_20px_rgba(138,26,90,0.3)] hover:rotate-1 hover:shadow-[-4px_4px_20px_rgba(26,58,90,0.3)] transition-all duration-500`.

### 7) Empty Dreamscape Background

Vast empty space with a horizon line (Dalí landscape).

- `bg-gradient-to-b from-[#f5d76e] via-[#e8a043] to-[#c47a3a]` (desert sky).
- Horizon line: `border-b-2 border-[#8a5a1a]`.
- Ground: `bg-[#d4a868]` (endless flat desert below).

## Color Palette System

### Dalí Desert Palette

| Color | Hex | Role |
|---|---|---|
| Sky Gold | `#f5d76e` | Upper background |
| Desert Orange | `#c47a3a` | Lower background |
| Deep Blue | `#1a3a5a` | Accents, contrast |
| Egg White | `#f5f5f0` | Floating elements |
| Dark Earth | `#3a2a1a` | Text, outlines |
| Crimson | `#8a1a1a` | Urgent accents |

### Magritte Cool Palette

| Color | Hex | Role |
|---|---|---|
| Sky Blue | `#87ceeb` | Background |
| Cloud White | `#f5f5f0` | Clouds, floating |
| Forest Green | `#2a5a2a` | Nature elements |
| Bowler Charcoal | `#3a3a3a` | Figures, dark elements |
| Brick Red | `#a04030` | Accent |

Rules: Choose one palette per composition. Dalí = warm desert dreamscapes. Magritte = cool clean impossibilities. Colors can be vivid or muted depending on the specific surrealist reference.

## Typography Recommendations

- **Display:** Playfair Display Italic, or Cormorant Italic (elegant but slightly unsettling).
- **Alternative:** Any font used at IRRATIONAL scale (enormous thin or tiny bold).
- **Body:** EB Garamond or Lora (readable but dreamlike serif).
- The typography should feel slightly OFF — italicized where you don't expect, scaled irrationally, or placed in unexpected positions.

## Interaction Rules

- Default: dreamlike, uncanny, slightly unsettling.
- Hover: elements shift, melt, rotate, or change in unexpected ways.
  - `hover:rotate-2 hover:scale-105 transition-all duration-500 ease-in-out`.
- Active: `active:scale-95 active:rotate-[-2deg]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f5d76e]/50`.
- Transitions: `transition-all duration-500 ease-in-out` (slow, dreamlike, slightly off-rhythm).
- Optional: slow floating animation on cards (`animate-[float_6s_ease-in-out_infinite]`).

## Reusable Tailwind Tokens

- Melting card: clip-path with irregular bottom edge.
- Floating shadow: `shadow-[12px_-8px_0_rgba(0,0,0,0.15)]` (upward shadow).
- Desert bg: `bg-gradient-to-b from-[#f5d76e] via-[#e8a043] to-[#c47a3a]`.
- Surreal button: `bg-gradient-to-r from-[#1a3a5a] to-[#8a1a5a] text-[#f5d76e] italic shadow-[4px_4px_20px_rgba(138,26,90,0.3)]`.
- Scale juxtaposition: `text-[12rem] font-thin` next to `text-[10px] font-bold`.

## Quality Checklist

- At least one impossible or irrational element (floating, melting, wrong scale).
- Perspective or lighting that defies physics (upward shadows, skewed angles).
- At least one juxtaposition of unrelated elements.
- Scale shifts in typography or layout (enormous next to tiny).
- Background feels like a dreamscape (vast empty space, horizon, surreal sky).
- Colors are either vivid-Dalí warm or muted-Magritte cool.
- Typography is slightly off (italic, irrational scale, unexpected placement).
- Motion is slow and dreamlike (drift, float, melt).
- The aesthetic reads as a dream or surrealist painting.
- Something feels WRONG in a beautiful way.

## Anti-Patterns

- Conventional, predictable layouts (surrealism requires the unexpected).
- Perfect symmetry and grid alignment (surrealism breaks the grid).
- Rational scale hierarchy (type sizes should be irrational).
- Normal drop shadows going down (use upward or sideways shadows for impossible lighting).
- Bright cheerful corporate design (surrealism is uncanny, not cheerful).
- Missing the element of surprise (the unexpected juxtaposition IS surrealism).
- Missing floating or melting elements (these are the signature techniques).
- Fast mechanical animations (motion should be slow and dreamlike).
- Standard button shapes (use clip-paths, asymmetric radius, or warped edges).
- Everything making perfect sense (surrealism lives in the irrational gap).
