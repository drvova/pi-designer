---
name: naive-art-ui
description: Build naive art / Rousseau UI components (flat childlike illustration, oversized botanicals, jungle palettes, intentionally simple perspective, hand-drawn charm) with flat color fills, simple outlines, and the untrained authentic beauty of self-taught artists. Trigger this skill when the user asks for naive art, Henri Rousseau, primitive art, childlike illustration, self-taught aesthetic, or jungle flat-painting interfaces.
---

# Naive Art / Rousseau UI

Use this skill to design and implement charming, intentionally simple interfaces inspired by naive art and Henri Rousseau: flat color fills without shading, oversized botanical elements, simplified perspective, hand-drawn outlines, and the authentic beauty of untrained artistic vision.

## Core Material Recipes

### 1) Flat Jungle Canvas

Warm flat background with no depth or shading.

- `bg-[#1a4a2a]` (flat jungle green, no gradient).
- Oversized leaf SVG: large simple leaf shapes at corners, `fill="#2a6a3a"` (flat green, no gradient).

### 2) Flat Color Card

Simple card with bold outline and flat fill.

- `bg-[#e8c46a] border-[3px] border-[#3a2a0a] rounded-none p-6`.
- No shadow, no gradient — just flat color with a bold outline.

### 3) Simple Botanical Illustration

Oversized flat leaf/flower SVG (Rousseau jungle style).

```html
<svg viewBox="0 0 200 300" class="w-32 h-48">
  <!-- Simple flat leaves -->
  <ellipse cx="100" cy="100" rx="30" ry="80" fill="#3a7a3a" stroke="#1a3a1a" stroke-width="2"/>
  <ellipse cx="80" cy="150" rx="20" ry="60" fill="#2a6a2a" stroke="#1a3a1a" stroke-width="2" transform="rotate(-20 80 150)"/>
  <ellipse cx="120" cy="160" rx="20" ry="60" fill="#2a6a2a" stroke="#1a3a1a" stroke-width="2" transform="rotate(20 120 160)"/>
  <!-- Simple flower -->
  <circle cx="100" cy="40" r="15" fill="#e04060" stroke="#3a1a1a" stroke-width="2"/>
  <circle cx="85" cy="35" r="10" fill="#e04060" stroke="#3a1a1a" stroke-width="2"/>
  <circle cx="115" cy="35" r="10" fill="#e04060" stroke="#3a1a1a" stroke-width="2"/>
  <circle cx="100" cy="40" r="6" fill="#ffcc00"/>
</svg>
```

### 4) Naive Button

Simple bold-outlined flat button.

- `bg-[#e04060] text-white font-bold text-base px-8 py-3 border-[3px] border-[#3a1a1a] rounded-none hover:bg-[#c03050] transition-colors`.

### 5) Paper Texture Overlay

Slight canvas/paper texture (suggesting painting on canvas).

- SVG noise at `opacity-[0.05]` with `mix-blend-multiply`.

## Color Palette System

### Rousseau Jungle Palette

| Color | Hex | Role |
|---|---|---|
| Jungle Green | `#1a4a2a` | Background |
| Leaf Green | `#3a7a3a` | Botanical fills |
| Sun Yellow | `#e8c46a` | Warm surface |
| Jungle Red | `#e04060` | Flower accent |
| Earth Brown | `#3a2a0a` | Outlines, text |
| Sky Blue | `#5a9aca` | Rare cool accent |
| Cream | `#f5ead0` | Light surface |

Rules: Flat, saturated, unshaded colors. No gradients, no soft transitions. Bold outlines define every shape. The palette should feel like a child's painting of a tropical jungle — vivid, simple, and joyful.

## Typography Recommendations

- **Display:** Comic Neue, Patrick Hand (friendly, slightly untrained feel).
- **Body:** Lora, DM Serif Text (warm readable serif with character).
- **Labels:** `font-bold text-sm` (simple, direct).
- Typography should feel hand-drawn and personal, not precise or digital.

## Reusable Tailwind Tokens

- Flat card: `bg-[#e8c46a] border-[3px] border-[#3a2a0a] rounded-none`.
- Naive button: `bg-[#e04060] text-white border-[3px] border-[#3a1a1a] rounded-none`.
- Jungle bg: `bg-[#1a4a2a]`.
- Botanical SVG: flat `fill` with bold `stroke` outlines.

## Quality Checklist

- Colors are FLAT (no gradients, no shading, no soft shadows).
- At least one oversized botanical SVG illustration.
- Bold thick outlines (`border-[3px]`) on all major elements.
- Color palette is saturated and joyful (jungle greens, reds, yellows).
- No rounded corners (use `rounded-none` — naive art is direct).
- Typography feels hand-drawn and personal.
- Paper/canvas texture present (subtle).
- The aesthetic reads as Henri Rousseau / self-taught naive painting.
- Everything feels authentic, untrained, and charming.

## Anti-Patterns

- Gradients or soft shadows (naive art is FLAT color only).
- Rounded elegant corners (naive art is direct and simple).
- Complex realistic perspective (naive art uses simplified perspective).
- Muted desaturated tones (colors are vivid and direct).
- Thin subtle borders (outlines are BOLD and thick).
- Modern digital polish (the charm is in the untrained hand).
- Missing botanical/nature illustrations (jungle flora is essential).
- Sharp precise typography (should feel hand-drawn).
- Dark moody atmosphere (naive art is bright and cheerful).
- Complex layered depth (naive art is flat foreground).
