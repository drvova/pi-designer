---
name: afrofuturism-ui
description: Build afrofuturism UI components (ancestral geometry meets advanced technology, Adinkra/Kente patterns, cosmic star fields, deep purple and electric gold, vibranium metallics) with layered maximalism, cultural identity encoded in pixels, and the radical imagination of Black futures. Trigger this skill when the user asks for afrofuturism, Wakanda design, Black Panther aesthetic, African futurism, ancestral-tech interfaces, or cosmic cultural design.
---

# Afrofuturism UI

Use this skill to design and implement bold, culturally rooted futuristic interfaces that fuse African ancestral geometry with advanced technology: Adinkra symbols as navigation, Kente-inspired grid systems, cosmic star fields, vibranium metallics, and the radical imagination of liberation futures.

## Non-Negotiable Foundations

- Afrofuturism is simultaneously ancient and speculative. It layers meaning: ancestral patterns become functional grids, tribal geometry becomes UI structure, cultural symbols become interactive elements.
- The palette is cosmic and cultural: deep purples, electric golds, rich blacks, vibrant earth tones, and metallic accents. Never dilute to pastels.
- Layered maximalism over flat minimalism: texture on texture, metallic sheens, woven patterns, gradient depth. Interfaces should feel dimensional and alive.
- Technology serves heritage: animations echo natural rhythms — polyrhythmic timing, organic easing, movement that breathes.
- Bold, expressive typography that commands space. Text doesn't whisper; it announces.
- Cultural patterns (Adinkra, Kente, tribal geometry) are FUNCTIONAL, not decorative afterthoughts.

## Core Material Recipes

### 1) Cosmic Starfield Background

Deep space backdrop with ancestral depth.

- `bg-[#0a0a1a]` (deep space navy-black).
- Star field: `bg-[radial-gradient(1px_1px_at_20%_30%,#ffd700,transparent),radial-gradient(1px_1px_at_60%_70%,#00f5d4,transparent),radial-gradient(1px_1px_at_80%_20%,#ff4f87,transparent)] bg-[size:200px_200px]`.
- Nebula glow: `bg-[radial-gradient(ellipse_at_30%_40%,rgba(138,43,226,0.15)_0%,transparent_50%)]`.

### 2) Adinkra Symbol Navigation

West African symbols used as navigation icons.

Each symbol is an SVG with cultural meaning:
```html
<!-- Gye Nyame (supremacy of God) -->
<svg viewBox="0 0 100 100" class="w-8 h-8 text-[#ffd700]">
  <path fill="currentColor" d="M50,10 L50,40 Q50,25 65,25 Q80,25 80,40 Q80,55 65,55 L50,55 L50,90 M50,40 Q50,55 35,55 Q20,55 20,40 Q20,25 35,25 L50,40 Z" stroke="currentColor" stroke-width="2"/>
</svg>
```

### 3) Kente-Inspired Grid Layout

Grid system based on Kente cloth strip patterns.

- `grid grid-cols-4 gap-1` with alternating colored cells.
- Each cell: `bg-[#ffd700]` or `bg-[#0a5c2e]` or `bg-[#c4170e]` — creating the strip-woven Kente pattern.

### 4) Vibranium Metallic Surface

The signature Afrofuturist material: deep purple-blue with metallic sheen.

- `bg-gradient-to-br from-[#1a0a3a] via-[#2a1a5a] to-[#0a0a2a]`.
- Metallic highlight: `shadow-[inset_0_1px_0_rgba(138,92,246,0.3),0_0_20px_rgba(138,92,246,0.15)]`.
- Border: `border border-[#8b5cf6]/30`.

### 5) Afrofuturist Button

Bold button with cosmic gold and geometric patterns.

- Primary: `bg-gradient-to-r from-[#ffd700] to-[#daa520] text-[#1a0a3a] font-bold uppercase tracking-wider px-8 py-3 shadow-[0_4px_12px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all`.
- Cosmic: `bg-gradient-to-r from-[#4a0e7a] to-[#2a0a5a] text-[#00f5d4] font-bold uppercase tracking-wider border border-[#00f5d4]/30 px-8 py-3`.

### 6) Geometric Tribal Pattern Accent

SVG decorative pattern inspired by African textile geometry.

```html
<svg viewBox="0 0 40 40" class="w-10 h-10 text-[#ffd700] opacity-40">
  <path fill="currentColor" d="M20,0 L40,20 L20,40 L0,20 Z M20,8 L32,20 L20,32 L8,20 Z"/>
</svg>
```

### 7) Holographic Mask Overlay

Decorative African mask motif with holographic treatment.

- Mask image/SVG: `hue-rotate-[270deg] saturate-150 opacity-60 mix-blend-screen` over a cosmic gradient.

## Color Palette System

### Core Afrofuturism Palette

| Color | Hex | Role |
|---|---|---|
| Deep Space | `#0a0a1a` | Primary background |
| Cosmic Purple | `#1a0a3a` | Card surfaces, depth |
| Vibranium Purple | `#2a1a5a` | Metallic surface accent |
| Electric Teal | `#00f5d4` | Interactive accent, links |
| Cosmic Gold | `#ffd700` | Primary accent, borders, symbols |
| Hot Magenta | `#ff4f87` | Secondary accent, energy |
| Pale Sand | `#fdf6ec` | Text on dark |
| Royal Green | `#0a5c2e` | Kente pattern strips |
| Kente Red | `#c4170e` | Kente pattern strips |
| Rich Black | `#0f0f0f` | Deep contrast |

Rules: Deep cosmic backgrounds with electric gold and teal accents. The palette should feel like a Wakandan control room — African heritage meeting interstellar technology. Never pastel, never muted.

## Typography Recommendations

Afrofuturist typography is bold, expressive, and commanding:

- **Display headings:** Libre Baskerville, Cormorant, or Playfair Display (bold classical serif with presence).
- **Alternative display:** Syncopate, Monoton (geometric Afrofuturist display).
- **Body:** DM Sans, Source Sans Pro (clean, readable, modern).
- **Labels:** `font-bold uppercase tracking-[0.2em]` — bold and commanding.
- Text should ANNOUNCE, not whisper. Heavy weights and wide tracking throughout.

## Component Architecture Pattern

1. Cosmic starfield background (deep purple-black with gold/teal stars).
2. Vibranium metallic panels (deep purple with metallic sheen).
3. Adinkra symbol navigation (SVG West African symbols).
4. Kente-inspired geometric grid patterns.
5. Cosmic gold buttons with geometric detailing.
6. Tribal geometric SVG decorations.
7. Bold commanding typography.
8. Holographic mask or cultural imagery accents.

## Interaction Rules

- Default state: bold, dimensional, alive.
- Hover: cosmic glow intensifies, metallic sheen brightens.
  - `hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-[1.02] transition-all duration-400`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#0a0a1a]`.
- Transitions: organic, polyrhythmic easing `ease-[cubic-bezier(0.16,1,0.3,1)] duration-400`.
- Movement should feel like it BREATHES, not snaps.

## Reusable Tailwind Tokens

- Cosmic bg: `bg-[#0a0a1a] bg-[radial-gradient(ellipse_at_30%_40%,rgba(138,43,226,0.15)_0%,transparent_50%)]`
- Vibranium panel: `bg-gradient-to-br from-[#1a0a3a] via-[#2a1a5a] to-[#0a0a2a] border border-[#8b5cf6]/30 shadow-[inset_0_1px_0_rgba(138,92,246,0.3),0_0_20px_rgba(138,92,246,0.15)]`
- Gold button: `bg-gradient-to-r from-[#ffd700] to-[#daa520] text-[#1a0a3a] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(255,215,0,0.3)]`
- Cosmic text: `text-[#00f5d4]`
- Gold text: `text-[#ffd700]`
- Tribal SVG: `w-10 h-10 text-[#ffd700] opacity-40`

## Quality Checklist (must pass)

- Background is deep cosmic (dark purple-black, starfield).
- Gold and teal are the primary accents (never pastel or muted).
- At least one Adinkra or tribal geometric pattern present.
- Kente-inspired color strip patterns used in layout.
- Vibranium metallic surfaces (deep purple with metallic sheen).
- Typography is bold and commanding (heavy weight, wide tracking).
- Cultural patterns are functional (navigation, grid structure), not just decorative.
- Layered maximalism: texture, metallic sheen, gradient depth.
- The aesthetic reads as Wakandan/Black Panther futuristic African technology.
- Movement is organic and breathing (polyrhythmic, not mechanical).

## Anti-Patterns

- Sterile minimalism (Afrofuturism is layered and maximalist).
- Muted or pastel color palettes (the palette is bold and cosmic).
- Cultural patterns used only as decoration (they must be functional).
- Cold, clinical technology aesthetic (Afrofuturist tech is ALIVE and rooted).
- Thin, quiet typography (text must be bold and commanding).
- Missing gold accents (gold is the primary cultural-tech connector).
- Flat surfaces without depth (everything should feel dimensional).
- Mechanical, linear animations (motion should breathe with organic rhythm).
- Treating African patterns as exotic decoration rather than functional design.
- Missing the cosmic/space element (the future is interstellar).

## Accessibility Considerations

- Deep cosmic backgrounds with gold/teal text provide good contrast (verify WCAG AA).
- Pale sand text (`#fdf6ec`) on deep purple provides excellent contrast.
- Gold text (`#ffd700`) on dark backgrounds meets AA for large/bold text.
- Focus states: `focus:ring-2 focus:ring-[#ffd700]` (gold ring visible on cosmic dark).
- Adinkra symbols need `aria-label` describing their meaning and function.
- Cultural SVG patterns must be `aria-hidden="true"` when decorative.
- The dark cosmic aesthetic may cause eye strain — ensure body text is bright enough.
- Touch targets must be adequate despite layered ornamentation.
- Respect the cultural significance of Adinkra/Kente symbols — use meaningfully, not as decoration.
