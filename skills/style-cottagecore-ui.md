---
name: cottagecore-ui
description: Build cottagecore UI components (cozy rural pastoral, warm handmade, baking, wildflowers, vintage fabric, soft natural light) with warm earth tones, botanical illustrations, stitched borders, and the romantic idealization of simple rural life. Trigger this skill when the user asks for cottagecore, pastoral design, cozy rural aesthetic, handmade warmth, farm-to-table design, or fairy-tale countryside interfaces.
---

# Cottagecore UI

Use this skill to design and implement warm, cozy, rural-pastoral interfaces with botanical illustrations, soft natural light, vintage fabric textures, stitched borders, and the romantic idealization of simple countryside living.

## Non-Negotiable Foundations

- Cottagecore romanticizes rural life: baking, gardening, wildflowers, sewing, reading, and slow living. Every element should feel warm, handmade, and nostalgic.
- Colors are earthy and botanical: warm browns, sage greens, soft creams, dusty rose, butter yellow, and muted floral tones.
- Textures are tactile and natural: linen, cotton, embroidered fabric, kraft paper, pressed flowers.
- Typography blends elegant serif (for romantic headings) with handwritten scripts (for personal notes).
- Borders and dividers use stitched/dashed lines, mimicking hand-sewn seams on fabric.
- The mood is calm, safe, and nurturing — the opposite of busy, cold, or digital.

## Core Material Recipes

### 1) Linen Surface

Warm fabric-textured card surface.

- Background: `bg-[#faf6ee]` (warm cream/linen).
- Texture: subtle SVG noise at `opacity-[0.04]` to simulate fabric weave.
- Border: `border-2 border-dashed border-[#c4a882]` (stitched seam effect).
- Shadow: `shadow-[0_2px_8px_rgba(122,88,50,0.08)]` (warm, soft shadow).
- Full: `bg-[#faf6ee] border-2 border-dashed border-[#c4a882] shadow-[0_2px_8px_rgba(122,88,50,0.08)] p-6 rounded-lg`

### 2) Botanical Accent

Pressed flower or leaf SVG decoration.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16 opacity-60">
  <path d="M30,5 Q35,30 30,75" fill="none" stroke="#5a7a4a" stroke-width="1"/>
  <ellipse cx="22" cy="20" rx="8" ry="4" fill="#7a9a5a" opacity="0.6" transform="rotate(-30 22 20)"/>
  <ellipse cx="38" cy="30" rx="8" ry="4" fill="#7a9a5a" opacity="0.6" transform="rotate(30 38 30)"/>
  <ellipse cx="20" cy="45" rx="7" ry="3.5" fill="#8aaa6a" opacity="0.5" transform="rotate(-25 20 45)"/>
  <ellipse cx="40" cy="55" rx="7" ry="3.5" fill="#8aaa6a" opacity="0.5" transform="rotate(25 40 55)"/>
</svg>
```

### 3) Cottagecore Button

Warm, rounded button with stitched border.

- Primary: `bg-[#7a9a5a] text-white font-serif font-medium rounded-lg px-6 py-3 border-2 border-dashed border-[#5a7a3a] hover:bg-[#6a8a4a] transition-colors`.
- Cream: `bg-[#faf6ee] text-[#5a3a1a] font-serif rounded-lg px-6 py-3 border-2 border-dashed border-[#c4a882]`.
- Rose: `bg-[#e8c4c0] text-[#6a3a3a] font-serif rounded-lg px-6 py-3 border-2 border-dashed border-[#c4a0a0]`.

### 4) Wildflower Pattern Background

Subtle botanical pattern as section background.

- `bg-[#fdfbf7]` base.
- Overlay: scattered small flower SVGs at low opacity, or CSS dot pattern in green tones.
- `bg-[radial-gradient(#7a9a5a15_2px,transparent_2px)] bg-[size:40px_40px] bg-[#fdfbf7]` (tiny floral-like dots).

### 5) Embroidered Label

Label with decorative stitched border.

- `font-serif text-sm uppercase tracking-wide text-[#5a7a4a] border-b-2 border-dashed border-[#c4a882] pb-1`.

### 6) Mason Jar / Preserves Container

Rounded container reminiscent of preserving jars.

- `bg-[#f5ead0] rounded-[2rem] border-2 border-[#c4a882] p-6 shadow-[0_2px_8px_rgba(122,88,50,0.1)]`.
- Lid accent: `bg-[#c4a882] h-3 rounded-t-[2rem]` at the top.

## Color Palette System

### Core Cottagecore Palette

| Color | Hex | Role |
|---|---|---|
| Cream / Linen | `#faf6ee` | Primary background |
| Warm Beige | `#f5ead0` | Card surfaces |
| Sage Green | `#7a9a5a` | Primary accent, nature |
| Forest Green | `#5a7a3a` | Deep accents, borders |
| Dusty Rose | `#e8c4c0` | Warm accent, florals |
| Warm Brown | `#8b6914` / `#5a3a1a` | Text, wood, structure |
| Butter Yellow | `#f9e5a8` | Highlight, warmth |
| Soft Lavender | `#c4b8d4` | Floral accent |
| Terracotta | `#c47a5a` | Pottery, earth |

Rules: All colors should be muted, warm, and nature-inspired. No bright neons or cool blues. The palette should feel like a warm kitchen on an autumn afternoon.

## Typography Recommendations

Cottagecore typography blends romantic serif with handwritten warmth:

- **Display headings:** Cormorant Garamond, Playfair Display, or Lora (elegant romantic serif).
- **Handwritten accents:** Caveat, Dancing Script, or Parisienne (personal note feel).
- **Body:** Lora, EB Garamond, or Crimson Text (readable warm serif).
- **Labels:** `font-serif text-sm uppercase tracking-wide` with stitched borders.
- Avoid sans-serif for primary text. Cottagecore is serif territory.

## Component Architecture Pattern

1. Warm cream/linen background with subtle fabric texture.
2. Wildflower or botanical pattern overlays (subtle).
3. Linen cards with stitched (dashed) borders.
4. Botanical SVG accents (pressed flowers, leaves, vines).
5. Warm earth-tone buttons with dashed borders.
6. Embroidered-style labels and dividers.
7. Handwritten accent text for personal touches.

## Interaction Rules

- Default state: calm, warm, handmade.
- Hover: gentle warm glow or slight darkening.
  - `hover:shadow-[0_4px_12px_rgba(122,88,50,0.12)] hover:-translate-y-0.5 transition-all duration-400`.
- Active: `active:translate-y-0.5 active:shadow-none`.
- Focus: `focus:ring-2 focus:ring-[#7a9a5a]/30 focus:ring-offset-2 focus:ring-offset-[#faf6ee]`.
- Transitions: `transition-all duration-400 ease-in-out` (slow, calm, unhurried).
- No fast, snappy, or aggressive motion. Everything feels gentle and nurturing.

## Reusable Tailwind Tokens

- Linen card: `bg-[#faf6ee] border-2 border-dashed border-[#c4a882] shadow-[0_2px_8px_rgba(122,88,50,0.08)] p-6 rounded-lg`
- Sage button: `bg-[#7a9a5a] text-white font-serif font-medium rounded-lg px-6 py-3 border-2 border-dashed border-[#5a7a3a]`
- Rose button: `bg-[#e8c4c0] text-[#6a3a3a] font-serif rounded-lg border-2 border-dashed border-[#c4a0a0]`
- Floral dot bg: `bg-[radial-gradient(#7a9a5a15_2px,transparent_2px)] bg-[size:40px_40px] bg-[#fdfbf7]`
- Embroidered label: `font-serif text-sm uppercase tracking-wide text-[#5a7a4a] border-b-2 border-dashed border-[#c4a882]`
- Warm shadow: `shadow-[0_2px_8px_rgba(122,88,50,0.08)]`
- Cream bg: `bg-[#faf6ee]`

## Quality Checklist (must pass)

- Color palette is warm and earthy (sage, cream, brown, rose — no neons or cool tones).
- Borders use dashed/stitched lines (not solid — stitched mimics hand-sewn fabric).
- At least one botanical decoration (pressed flower, leaf, vine SVG).
- Typography blends elegant serif with handwritten accents.
- Backgrounds are warm cream or linen-toned (never pure white).
- Shadows are warm and soft (brown/amber undertones).
- The aesthetic feels calm, cozy, and nostalgic.
- At least one fabric texture reference (linen weave, embroidery pattern).
- Motion is gentle and unhurried.
- The mood reads as romantic rural simplicity.

## Anti-Patterns

- Cold, cool, or neon color palettes (cottagecore is warm and earthy).
- Solid borders (use dashed/stitched to mimic fabric seams).
- Modern sans-serif typography alone (cottagecore needs serif + handwritten).
- Sharp, angular shapes (cottagecore is soft and rounded).
- Fast, aggressive animations (motion should be gentle and slow).
- Digital or technological references (cottagecore is pre-digital, analog, handmade).
- Pure white backgrounds (use warm cream `#faf6ee`).
- Missing botanical/nature references (plants and flowers are essential).
- Minimalist cold design (cottagecore is warm and layered, not sparse).
- Heavy dramatic shadows (cottagecore shadows are soft and warm).

## Accessibility Considerations

- Warm earth tones can have lower contrast; verify WCAG AA for all text.
- Cream backgrounds with dark brown text provide good contrast.
- Dashed borders must be visible enough to define interactive elements.
- Botanical SVGs must be `aria-hidden="true"`.
- Focus states: `focus:ring-2 focus:ring-[#7a9a5a]/30` (visible against cream).
- Handwritten accent fonts should maintain readability at 14px+.
- Slow animations must respect `prefers-reduced-motion`.
- Touch targets must be adequate despite soft, rounded styling.
