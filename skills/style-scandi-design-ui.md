---
name: scandi-design-ui
description: Build Scandinavian / Nordic design UI components (hygge coziness, muted natural tones, natural materials, functional minimalism, warm wood, clean lines) with organic warmth, generous light, functional restraint, and the democratic design philosophy of Nordic countries. Trigger this skill when the user asks for Scandinavian design, Nordic design, hygge UI, IKEA-inspired minimalism, Danish design, or cozy functional interfaces.
---

# Scandinavian Design UI

Use this skill to design and implement warm, functional, minimalist interfaces inspired by Scandinavian/Nordic design: muted natural tones, warm wood textures, clean lines, generous light, and the "hygge" philosophy of cozy functionality.

## Non-Negotiable Foundations

- Scandinavian design balances minimalism with warmth: it is functional and clean, but never cold or sterile.
- Colors are muted and natural: warm whites, soft grays, sage greens, dusty blues, warm wood tones, and black for contrast.
- Materials reference nature: light wood (birch, ash), natural textiles (linen, wool), ceramic, and stone.
- Form follows function, but with a human touch: rounded corners, organic shapes, and comfortable proportions.
- Light is central: Nordic design maximizes natural light with bright, airy surfaces and reflective materials.
- Typography is clean and humanist: sans-serif with warmth (not cold or technical).

## Core Material Recipes

### 1) Warm White Surface

The foundational Scandi surface: soft, warm off-white.

- `bg-[#f5f3f0] border border-[#e0ddd8] p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04)]`.
- Warmth: the `#f5f3f0` is slightly warm, never pure white.

### 2) Light Wood Panel

Surface with warm wood tone reference.

- `bg-[#e8ddd0] border border-[#d0c5b8] p-6 rounded-lg`.
- Optional wood grain: subtle SVG vertical lines at low opacity.

### 3) Scandi Button

Minimalist, warm button with clean lines.

- Primary: `bg-[#2a2a2a] text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#3a3a3a] transition-colors`.
- Sage: `bg-[#7a8a7a] text-white font-medium rounded-lg px-6 py-3 hover:bg-[#6a7a6a] transition-colors`.
- Outline: `bg-transparent border border-[#2a2a2a] text-[#2a2a2a] font-medium rounded-lg px-6 py-3 hover:bg-[#2a2a2a] hover:text-white transition-colors`.

### 4) Knitted / Cozy Accent

Subtle texture suggesting natural textiles.

- `bg-[#e8e4df]` with a faint knit pattern: `bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_3px,rgba(0,0,0,0.02)_3px,rgba(0,0,0,0.02)_4px),repeating-linear-gradient(-45deg,transparent_0px,transparent_3px,rgba(0,0,0,0.02)_3px,rgba(0,0,0,0.02)_4px)]`.

### 5) Scandi Input

Clean, minimal input with subtle warmth.

- `bg-white border border-[#d8d5d0] rounded-lg px-4 py-3 outline-none focus:border-[#5a8a7a] focus:ring-2 focus:ring-[#5a8a7a]/15 transition-all placeholder:text-[#a8a5a0]`.

### 6) Nature Motif Accent

Simple, clean botanical or natural SVG.

```html
<svg viewBox="0 0 40 40" class="w-8 h-8 opacity-40">
  <!-- Simple leaf -->
  <path d="M20,5 Q30,15 20,35 Q10,15 20,5" fill="none" stroke="#7a8a7a" stroke-width="1"/>
</svg>
```

## Color Palette System

### Core Scandi Palette

| Color | Hex | Role |
|---|---|---|
| Warm White | `#f5f3f0` | Primary background |
| Soft Gray | `#e8e4df` | Secondary surfaces |
| Light Wood | `#e8ddd0` | Wood-tone accents |
| Sage Green | `#7a8a7a` | Primary accent, nature |
| Dusty Blue | `#7a9aaa` | Secondary accent, calm |
| Charcoal | `#2a2a2a` | Text, contrast, primary buttons |
| Warm Gray | `#8a8580` | Secondary text |
| Soft Black | `#1a1a1a` | Headings, strong contrast |
| Terracotta | `#c47a5a` | Warm accent (sparingly) |
| Cream | `#faf8f5` | Lightest surface |

Rules: Muted, natural, and warm. The palette should feel like a bright Nordic apartment with light wood floors and soft textiles. No bright neons. Charcoal is the primary contrast, not pure black.

## Typography Recommendations

Scandinavian typography is clean, humanist, and warm:

- **Primary:** Inter, DM Sans, or Work Sans (clean, warm sans-serif).
- **Alternative:** Source Sans Pro, Noto Sans (humanist, readable).
- **Display:** Saans, Sora, or Hanken Grotesk (Nordic-designed typefaces).
- **Mono:** IBM Plex Mono (for data/labels — clean and neutral).
- **Labels:** `font-medium text-sm` without uppercase (Scandi is quiet, not shouty).
- Avoid bold decorative fonts. Scandi is restrained and functional.

## Component Architecture Pattern

1. Warm white or soft gray background.
2. Minimalist cards with subtle borders (barely visible, not heavy).
3. Generous whitespace and breathing room.
4. Warm wood-tone accents.
5. Simple botanical/nature motifs (clean SVG, not detailed illustration).
6. Functional, understated buttons and inputs.
7. Soft, diffuse shadows (barely visible).
8. Natural light quality — bright, airy, reflective.

## Interaction Rules

- Default state: calm, warm, functional.
- Hover: subtle background shift or border darken.
  - `hover:bg-[#edebe8] transition-colors duration-200`.
- Active: `active:bg-[#e0ddd8]`.
- Focus: `focus:ring-2 focus:ring-[#7a8a7a]/20 focus:ring-offset-2 focus:ring-offset-[#f5f3f0]`.
- Transitions: `transition-colors duration-200` (smooth, calm, unhurried).
- No bouncy, spring, or exaggerated animations. Scandi is dignified.

## Reusable Tailwind Tokens

- Warm white: `bg-[#f5f3f0]`
- Light wood: `bg-[#e8ddd0]`
- Scandi card: `bg-[#f5f3f0] border border-[#e0ddd8] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6`
- Primary button: `bg-[#2a2a2a] text-white font-medium rounded-lg px-6 py-3 hover:bg-[#3a3a3a]`
- Sage button: `bg-[#7a8a7a] text-white font-medium rounded-lg px-6 py-3`
- Scandi input: `bg-white border border-[#d8d5d0] rounded-lg px-4 py-3 focus:border-[#5a8a7a] focus:ring-2 focus:ring-[#5a8a7a]/15`
- Charcoal text: `text-[#2a2a2a]`
- Soft shadow: `shadow-[0_1px_3px_rgba(0,0,0,0.04)]`

## Quality Checklist (must pass)

- Backgrounds are warm off-white (`#f5f3f0`), never pure white or cold gray.
- Shadows are barely visible (`0.04` opacity — subtle, not dramatic).
- Color palette is muted and natural (sage, dusty blue, warm wood, charcoal).
- Borders are barely visible (thin, subtle, low-contrast).
- Typography is clean humanist sans-serif.
- Generous whitespace throughout (Scandi breathes).
- At least one warm wood-tone reference.
- Simple botanical/nature accent present (clean SVG).
- The aesthetic reads as a bright, cozy, Nordic apartment.
- Motion is calm and unhurried.

## Anti-Patterns

- Pure white backgrounds (Scandi uses warm off-white `#f5f3f0`).
- Dramatic or heavy shadows (Scandi shadows are barely visible).
- Bright, saturated, or neon colors (Scandi is muted and natural).
- Cluttered or dense layouts (Scandi is spacious and airy).
- Cold, technical typography (Scandi is warm and humanist).
- Heavy borders (Scandi borders are barely-there).
- Decorative or ornamental elements (Scandi is functional and restrained).
- Dark mode-dominant design (Scandi celebrates light and brightness).
- Missing the cozy warmth (hygge is the emotional core).
- Aggressive, fast animations (Scandi motion is calm and dignified).

## Accessibility Considerations

- Warm off-white with charcoal text provides excellent contrast (WCAG AAA).
- Subtle borders may be too faint for some users — ensure interactive elements have other affordances (hover states, icons).
- Focus states: `focus:ring-2 focus:ring-[#7a8a7a]/20` (sage ring, visible but understated).
- Generous whitespace aids cognitive accessibility.
- Touch targets must be adequate (`px-6 py-3` buttons are typically fine).
- The muted palette should be tested for colorblind accessibility (sage and dusty blue can be hard to distinguish for some users).
- Simple SVG nature motifs must be `aria-hidden="true"`.
- The bright, airy aesthetic is naturally good for low-vision users (high luminance contrast).
