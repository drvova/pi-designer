---
name: corporate-memphis-ui
description: Build Corporate Memphis / Alegria UI components (big tech flat illustration style, disproportionate figures, non-representational skin tones, geometric shapes, whimsical corporate friendliness) with flat vector illustrations, bold simple shapes, and the standardized corporate illustration aesthetic. Trigger this skill when the user asks for Corporate Memphis, Alegria art, big tech illustration, flat corporate figures, or SaaS marketing illustration interfaces.
---

# Corporate Memphis / Alegria UI

Use this skill to design and implementation interfaces featuring the ubiquitous "big tech" illustration style: flat vector graphics, disproportionate human figures with bendy limbs and minimal faces, non-representational skin tones (blue, yellow, purple), and the standardized corporate aesthetic popularized by Facebook's Alegria system.

## Non-Negotiable Foundations

- Corporate Memphis is a flat illustration system: no gradients, no shadows, no 3D effects. Everything is flat color and geometric shapes.
- Human figures are stylized: oversized/bendy limbs, small torsos, minimal or no facial features. The goal is "universal" representation, not individual identity.
- Skin tones are NON-REPRESENTATIONAL: blues, purples, yellows, and pinks instead of realistic skin colors.
- Colors are bright and whimsical: millennial pink, houseplant green, golden yellow, sky blue, and coral.
- The aesthetic is corporate-friendly: it fills white space with personality without being polarizing. It signals "friendly, modern tech company."
- Illustrations are scalable vectors: they can be used at any size without quality loss.

## Core Material Recipes

### 1) Flat Illustration Card

Clean white card with flat illustration accent.

- `bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100`.
- Illustration: flat SVG figure or geometric shapes in a corner or top section.

### 2) Alegria-Style Figure (SVG)

Flat vector human figure with disproportionate features.

```html
<svg viewBox="0 0 200 300" class="w-32 h-48">
  <!-- Head -->
  <circle cx="100" cy="50" r="25" fill="#7c5cff"/>
  <!-- Hair -->
  <path d="M75,40 Q100,20 125,40 L125,55 Q100,35 75,55 Z" fill="#2a2a2a"/>
  <!-- Body (small torso, long limbs) -->
  <rect x="85" y="75" width="30" height="60" rx="15" fill="#ff6b6b"/>
  <!-- Arms (bendy, long) -->
  <path d="M85,90 Q60,120 70,160" fill="none" stroke="#7c5cff" stroke-width="10" stroke-linecap="round"/>
  <path d="M115,90 Q140,110 130,150" fill="none" stroke="#7c5cff" stroke-width="10" stroke-linecap="round"/>
  <!-- Legs (long) -->
  <path d="M90,135 Q80,180 85,230" fill="none" stroke="#3aa9ff" stroke-width="12" stroke-linecap="round"/>
  <path d="M110,135 Q120,175 115,225" fill="none" stroke="#3aa9ff" stroke-width="12" stroke-linecap="round"/>
  <!-- Shoes -->
  <ellipse cx="85" cy="235" rx="15" ry="8" fill="#2a2a2a"/>
  <ellipse cx="115" cy="230" rx="15" ry="8" fill="#2a2a2a"/>
</svg>
```

### 3) Corporate Memphis Button

Clean, friendly, flat button.

- Primary: `bg-[#7c5cff] text-white font-semibold rounded-xl px-6 py-3 hover:bg-[#6a4aef] transition-colors`.
- Millennial Pink: `bg-[#ffb3ba] text-[#5a3a3a] font-semibold rounded-xl px-6 py-3`.
- Outline: `bg-transparent text-[#7c5cff] font-semibold rounded-xl border-2 border-[#7c5cff] px-6 py-3 hover:bg-[#7c5cff]/5 transition-colors`.

### 4) Geometric Shape Decoration

Flat geometric shapes used as background decoration.

- Circles: `absolute top-10 right-10 w-24 h-24 rounded-full bg-[#ffcc00]/20`.
- Triangles: `absolute bottom-20 left-20 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-[#3aa9ff]/20`.
- Squiggles: SVG path with playful wavy line in a brand color.

### 5) Flat Feature Card

Marketing card with flat illustration + feature description.

```html
<div class="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
  <!-- Flat illustration at top -->
  <div class="w-24 h-24 mb-4 flex items-center justify-center bg-[#ffcc00]/10 rounded-2xl">
    <svg class="w-12 h-12 text-[#ffcc00]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  </div>
  <h3 class="font-semibold text-lg text-gray-900">Feature Title</h3>
  <p class="text-gray-600 text-sm mt-2">Feature description with clean, friendly copy.</p>
</div>
```

## Color Palette System

### Core Corporate Memphis Palette

| Color | Hex | Role |
|---|---|---|
| Purple | `#7c5cff` | Primary brand, figures, buttons |
| Millennial Pink | `#ffb3ba` | Accent, soft surfaces |
| Houseplant Green | `#88c999` | Nature, growth |
| Golden Yellow | `#ffcc00` | Energy, highlight |
| Sky Blue | `#3aa9ff` | Trust, technology |
| Coral | `#ff8a7a` | Warmth, activity |
| Navy | `#1a2a4a` | Text, strong contrast |
| Light Gray | `#f5f5f8` | Background |
| White | `#ffffff` | Card surfaces |
| Dark Gray | `#3a3a4a` | Body text |

### Non-Representational Skin Tones

| Color | Hex | Usage |
|---|---|---|
| Purple Skin | `#7c5cff` | Figure skin (Alegria style) |
| Blue Skin | `#3aa9ff` | Figure skin (Alegria style) |
| Yellow Skin | `#ffcc00` | Figure skin (Alegria style) |
| Pink Skin | `#ffb3ba` | Figure skin (Alegria style) |
| Green Skin | `#88c999` | Figure skin (Alegria style) |

Rules: Bright, whimsical, corporate-friendly colors. Non-representational skin tones are the SIGNATURE of this style. The palette should feel like a modern SaaS landing page.

## Typography Recommendations

Corporate Memphis typography is clean, friendly, and modern:

- **Primary:** Inter, DM Sans, or Nunito (clean, rounded, approachable sans).
- **Headings:** `font-bold` to `font-semibold` at moderate sizes (not oversized).
- **Body:** `font-normal` to `font-medium` at `text-base` to `text-lg`.
- **Labels:** `font-semibold text-sm` (friendly, not shouty).
- The typography should feel like a modern B2B SaaS website — clean and professional but warm.

## Component Architecture Pattern

1. Clean white or light gray background.
2. Flat illustration accents (Alegria-style figures, geometric shapes).
3. Rounded card surfaces with subtle shadows.
4. Flat, colorful buttons with rounded corners.
5. Geometric shape decorations (circles, triangles, squiggles).
6. Clean sans-serif typography.
7. Friendly, approachable copy.

## Interaction Rules

- Default state: clean, flat, friendly.
- Hover: subtle color darken or shadow increase.
  - `hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200`.
- Active: `active:bg-[#6a4aef] active:translate-y-0`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#7c5cff]/30 focus:ring-offset-2`.
- Transitions: `transition-all duration-200` (smooth, professional, corporate-safe).

## Reusable Tailwind Tokens

- Flat card: `bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100`
- Primary button: `bg-[#7c5cff] text-white font-semibold rounded-xl px-6 py-3 hover:bg-[#6a4aef]`
- Pink button: `bg-[#ffb3ba] text-[#5a3a3a] font-semibold rounded-xl px-6 py-3`
- Feature icon bg: `bg-[#ffcc00]/10 rounded-2xl`
- Light bg: `bg-[#f5f5f8]`
- Geometric circle: `rounded-full bg-[#3aa9ff]/20`

## Quality Checklist (must pass)

- Illustrations are FLAT (no gradients, shadows, or 3D effects).
- At least one Alegria-style figure or geometric decoration.
- Colors are bright and whimsical (millennial pink, houseplant green, purple).
- Human figures use non-representational skin tones (blue, yellow, purple).
- Cards are clean white with rounded corners and subtle shadows.
- Typography is clean modern sans-serif.
- Buttons are flat color with rounded corners (`rounded-xl`).
- Geometric shapes (circles, triangles, squiggles) decorate backgrounds.
- The aesthetic reads as a modern B2B SaaS marketing page.
- Everything is corporate-friendly and approachable.

## Anti-Patterns

- Gradients, shadows, or 3D effects on illustrations (everything is flat).
- Realistic skin tones on figures (Corporate Memphis uses non-representational colors).
- Detailed facial features on figures (faces are minimal or blank).
- Dark mode dominance (Corporate Memphis is light and bright).
- Serif typography (Corporate Memphis is clean sans-serif).
- Heavy, dramatic shadows (shadows are barely visible — `0.04` opacity).
- Sharp corners (use `rounded-xl` to `rounded-2xl` generously).
- Edgy, aggressive, or polarizing design (Corporate Memphis is safe and friendly).
- Dense data displays (this style is for marketing, not dashboards).
- Realistic illustration style (figures are simplified geometric forms).

## Accessibility Considerations

- Clean white backgrounds with dark text provide excellent contrast (WCAG AAA).
- Non-representational skin tones do not affect accessibility (they are decorative).
- Flat illustrations must have `aria-hidden="true"` when decorative.
- Functional illustrations need `alt` text or `aria-label`.
- Focus states: `focus:ring-2 focus:ring-[#7c5cff]/30` (subtle but visible).
- Touch targets: `px-6 py-3` rounded buttons provide adequate size.
- The light, bright aesthetic is naturally accessible for visual clarity.
- Ensure color is not the sole information channel in illustrations (include text labels).
