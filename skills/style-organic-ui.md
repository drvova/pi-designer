---
name: organic-ui
description: Build organic UI components (natural shapes, flowing curves, earth tone palettes, biomorphic forms, calming aesthetics) with blob shapes, organic gradients, rounded asymmetric forms, and nature-inspired design language. Trigger this skill when the user asks for organic UI, biomorphic design, natural UI, flowing shapes, wellness design, or nature-inspired interfaces.
---

# Organic UI

Use this skill to design and implement calming, nature-inspired interfaces with flowing organic shapes, earth-tone palettes, biomorphic forms, and soft natural aesthetics.

## Non-Negotiable Foundations

- Organic UI draws from nature: flowing curves, asymmetric forms, natural materials, and earth tones.
- Shapes are biomorphic: blobs, rounded asymmetric forms, flowing edges. Never sharp rectangles or rigid grids.
- The color palette is grounded in nature: earth tones, soft greens, warm terracottas, muted blues, cream backgrounds.
- Motion is gentle and flowing: slow easing curves, organic deformations, breathing animations.
- The aesthetic is calming, approachable, and human. It rejects the cold precision of technical interfaces.
- Surfaces have subtle texture: grain, paper, or fabric-inspired finishes (at very low opacity).

## Core Material Recipes

### 1) Organic Blob Shape

The signature organic form: an asymmetric blob with smooth flowing curves.

Use `border-radius` with different values for each corner to create organic shapes:
- `rounded-[60%_40%_30%_70%/70%_50%_60%_40%]`
- `rounded-[40%_60%_70%_30%/50%_60%_30%_60%]`
- `rounded-[30%_70%_70%_30%/30%_30%_70%_70%]`

SVG blob (for more complex organic forms):
```html
<svg viewBox="0 0 200 200">
  <path d="M40,-65C50,-55,55,-40,60,-25C65,-10,70,5,65,20C60,35,45,50,30,60C15,70,-5,75,-20,70C-35,65,-45,50,-55,35C-65,20,-75,5,-70,-10C-65,-25,-45,-40,-30,-50C-15,-60,-5,-65,10,-70C25,-75,30,-75,40,-65Z" transform="translate(100 100)" />
</svg>
```

### 2) Organic Surface (card)

Soft, rounded card with natural feel.

- `bg-[#faf6f0] rounded-[2rem] shadow-[0_4px_20px_rgba(139,115,85,0.08)] p-8`
- The shadow uses a warm brown tint instead of pure black for a softer, natural depth.

### 3) Organic Button

Rounded, pill-shaped or asymmetric button with warm colors.

- Primary: `bg-[#7a9e7e] text-white font-medium rounded-full px-8 py-4 shadow-[0_4px_12px_rgba(122,158,126,0.3)] hover:shadow-[0_6px_20px_rgba(122,158,126,0.4)] hover:scale-[1.02] transition-all duration-300 ease-out`
- Earth: `bg-[#c17b59] text-white font-medium rounded-[2rem] px-8 py-4 hover:bg-[#a86642] transition-colors`
- Cream: `bg-[#f5e6d3] text-[#5a3e2b] font-medium rounded-full px-6 py-3 hover:bg-[#e8d5b8] transition-colors`

### 4) Flowing Background

Natural gradient background with organic color transitions.

- `bg-gradient-to-br from-[#f5f0e8] via-[#e8dcc8] to-[#d4c4a8]` (warm sand).
- `bg-gradient-to-b from-[#e8f0e4] to-[#c8dcc4]` (soft sage).

### 5) Organic Input

Soft, rounded input with natural feel.

- `bg-[#faf6f0] border-2 border-[#e0d5c0] rounded-full px-6 py-3 text-base outline-none focus:border-[#7a9e7e] focus:ring-2 focus:ring-[#7a9e7e]/20 transition-all`

### 6) Breathing / Floating Animation

Gentle, organic motion that simulates breathing or floating.

```css
@keyframes breathe {
  0%, 100% { transform: scale(1); border-radius: 60%_40%_30%_70%/70%_50%_60%_40%; }
  50% { transform: scale(1.03); border-radius: 40%_60%_70%_30%/50%_60%_30%_60%; }
}
.breathe { animation: breathe 8s ease-in-out infinite; }
```

## Color Palette System

### Earth & Sage (Wellness/Spa)

- `#7a9e7e` (sage green), `#a8c4a2` (light sage), `#5a7a5e` (deep green).
- `#faf6f0` (cream), `#f5e6d3` (warm cream), `#e0d5c0` (sand).
- `#5a3e2b` (warm brown), `#8b6f47` (tan).

### Terracotta & Clay (Warm/Organic)

- `#c17b59` (terracotta), `#a86642` (deep clay), `#d4a574` (warm tan).
- `#faf0e6` (linen), `#f5e6d3` (cream), `#e8dcc8` (sand).

### Ocean & Stone (Calming/Neutral)

- `#7a9eb0` (stone blue), `#a8c4d4` (mist blue), `#5a7a8c` (deep blue-gray).
- `#f0f4f5` (cool white), `#e0e8eb` (pale stone), `#c8d4d8` (gray stone).

### Forest & Moss (Nature/Outdoors)

- `#5a7a4e` (forest green), `#7a9e6e` (moss), `#3d5a3a` (deep forest).
- `#f5f0e4` (parchment), `#e8dcc4` (bark), `#c4b890` (dried leaf).

Rules: Choose one palette family per interface. Colors within a family harmonize naturally. Do not mix families (e.g., terracotta with ocean blue).

## Typography Recommendations

Organic UI favors warm, friendly, slightly rounded typefaces:

- Primary: Nunito, Quicksand, Mulish, or DM Sans (rounded sans-serif).
- Heading: Fraunces, Bricolage Grotesque, or Newsreader (warm serif with organic character).
- Body: same as primary at `font-normal`.
- Labels: `font-medium` with `tracking-normal` (not wide tracking — organic is close and warm).
- Avoid rigid, technical fonts (Inter alone feels cold). Mix with warmer alternatives.

## Component Architecture Pattern

1. Warm natural background (cream, sand, or soft sage gradient).
2. Organic-shaped surfaces (blob cards, asymmetric panels).
3. Flowing dividers (curved SVG paths, not straight lines).
4. Rounded, pill-shaped interactive elements.
5. Natural accent colors (sage, terracotta, warm blue).
6. Gentle animations (breathing, floating, slow growth).
7. Optional subtle texture overlay (paper grain, fabric texture at `opacity-[0.03]`).

## Interaction Rules

- Default state: calm, rounded, natural.
- Hover state: gentle growth and warm glow.
  - `hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(122,158,126,0.15)] transition-all duration-300 ease-out`.
- Active state: `active:scale-[0.98]` (gentle press).
- Focus state: `focus:ring-2 focus:ring-[#7a9e7e]/30 focus:ring-offset-2 focus:ring-offset-[#faf6f0]`.
- Transitions: `transition-all duration-300 ease-out` (slow, gentle, organic timing).
- Animations: breathing scale, morphing border-radius, floating position.
- All motion should feel like natural growth or breathing, not mechanical.

## Reusable Tailwind Tokens

- Organic card: `bg-[#faf6f0] rounded-[2rem] shadow-[0_4px_20px_rgba(139,115,85,0.08)] p-8`
- Blob shape: `rounded-[60%_40%_30%_70%/70%_50%_60%_40%]`
- Sage button: `bg-[#7a9e7e] text-white font-medium rounded-full px-8 py-4 shadow-[0_4px_12px_rgba(122,158,126,0.3)]`
- Terracotta button: `bg-[#c17b59] text-white font-medium rounded-[2rem] px-8 py-4`
- Cream input: `bg-[#faf6f0] border-2 border-[#e0d5c0] rounded-full px-6 py-3 focus:border-[#7a9e7e]`
- Warm shadow: `shadow-[0_4px_20px_rgba(139,115,85,0.08)]`
- Organic transition: `transition-all duration-300 ease-out`

## Quality Checklist (must pass)

- Shapes are organic and rounded (blob border-radius, no sharp corners).
- Color palette is nature-inspired (earth tones, sage, terracotta, cream).
- Background is warm (cream, sand, or soft gradient — never pure white or stark).
- Shadows use warm tints (brown/sage undertone, not pure black).
- Motion is gentle and flowing (slow easing, breathing, floating).
- Typography is warm and rounded (not cold or technical).
- Borders are soft (`border-2` with warm colors, not harsh black).
- The aesthetic reads as calming, natural, and approachable.
- No sharp rectangles, rigid grids, or cold technical elements.

## Anti-Patterns

- Sharp corners and rectangles (organic UI requires flowing curves).
- Cold or technical color palettes (blue-gray, pure white, neon).
- Pure black shadows (use warm-tinted shadows for natural depth).
- Fast, mechanical animations (organic motion is slow and flowing).
- Rigid grid layouts (use asymmetry and organic placement).
- Technical fonts like Inter alone (mix with warmer alternatives).
- Heavy dramatic shadows (organic shadows are soft and diffuse).
- Neon or highly saturated colors (organic is muted and earthy).
- Geometric patterns (use organic shapes, not grids or chevrons).
- Cold, clinical interactions (hover states should feel warm and inviting).

## Accessibility Considerations

- Earth tones can have lower contrast than high-contrast palettes; verify WCAG AA compliance.
- Warm muted backgrounds require careful text color selection (dark brown text on cream, not gray on beige).
- Blob-shaped interactive elements must maintain accessible touch targets (44x44px minimum area).
- Breathing/floating animations must respect `prefers-reduced-motion`.
- Focus rings must be visible against warm backgrounds (sage green rings work well).
- Organic shapes can confuse screen reader spatial expectations; use semantic HTML landmarks.
- Texture overlays must be very subtle (`opacity-[0.03]`) to avoid reducing contrast.
