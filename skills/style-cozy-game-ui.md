---
name: cozy-game-ui
description: Build cozy game UI components (warm pastel palettes, rounded chunky shapes, satisfying spring animations, gentle feedback, friendly rounded typography) inspired by Animal Crossing and Stardew Valley with soft shadows, bouncy interactions, and the comfortable, low-stress visual language of wholesome games. Trigger this skill when the user asks for cozy game UI, Animal Crossing style, Stardew Valley UI, wholesome game design, comfortable pastel interfaces, or low-stress friendly UI.
---

# Cozy Game UI

Use this skill to design and implement warm, comfortable, low-stress interfaces inspired by wholesome games like Animal Crossing and Stardew Valley: pastel palettes, rounded chunky shapes, satisfying spring animations, gentle feedback sounds, and the feeling of a safe, welcoming digital space.

## Non-Negotiable Foundations

- Cozy game UI is designed to reduce stress, not increase it. Every interaction should feel safe, predictable, and rewarding.
- Colors are soft pastels and warm earth tones: muted greens, soft pinks, warm browns, gentle yellows, creamy whites.
- Shapes are rounded and chunky: generous border radius, pill-shaped buttons, rounded card corners. No sharp edges.
- Animations use spring physics with gentle overshoot — everything feels slightly bouncy, like gravity has been turned down a notch.
- Typography is rounded and friendly: soft sans-serif fonts, comfortable sizes, never aggressive or technical.
- Shadows are soft and diffuse, never harsh. Surfaces feel like soft materials (felt, cotton, clay).
- Feedback is satisfying: every interaction produces a gentle response (bounce, color shift, sparkle).

## Core Material Recipes

### 1) Cozy Card

Soft, rounded card with gentle shadow and warm color.

- `bg-[#fef9f3] rounded-[1.5rem] p-6 shadow-[0_4px_12px_rgba(180,140,100,0.1)] border-2 border-[#f0e6d6]`.
- Hover: `hover:shadow-[0_8px_20px_rgba(180,140,100,0.15)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.

### 2) Cozy Button

Chunky, pill-shaped button with spring bounce.

- Primary: `bg-[#7cb342] text-white font-bold rounded-full px-8 py-3 shadow-[0_4px_0_#5a8a2a] hover:scale-105 active:translate-y-1 active:shadow-[0_2px_0_#5a8a2a] transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- Peach: `bg-[#ffab91] text-[#5a3a2a] font-bold rounded-full px-8 py-3 shadow-[0_4px_0_#cc8a70]`.
- Cream: `bg-[#fff3e0] text-[#5a4a3a] font-medium rounded-full px-6 py-3 border-2 border-[#e0d0c0]`.

### 3) Cozy Input

Rounded input with soft focus state.

- `bg-[#fff9f0] border-2 border-[#e0d0c0] rounded-full px-6 py-3 outline-none focus:border-[#7cb342] focus:ring-4 focus:ring-[#7cb342]/15 transition-all placeholder:text-[#c0b0a0]`.

### 4) Stamina / Energy Bar

Game-style progress bar with soft fill and heart icon.

- Container: `w-full h-5 bg-[#fff3e0] rounded-full border-2 border-[#e0d0c0] overflow-hidden`.
- Fill: `h-full bg-gradient-to-r from-[#ff8a80] to-[#ffab91] rounded-full transition-all duration-500`.
- Optional sparkle on fill: small animated star SVG at the leading edge.

### 5) Inventory Slot

Game-style square inventory slot.

- `w-14 h-14 bg-[#fff9f0] border-2 border-[#e0d0c0] rounded-xl flex items-center justify-center`.
- Item inside: pixel art icon or simple SVG, `image-rendering: pixelated` if pixel art.
- Hover: `hover:bg-[#fef0e0] hover:scale-105 transition-all`.
- Selected: `border-[#7cb342] bg-[#7cb342]/10 ring-2 ring-[#7cb342]/30`.

### 6) Friendly Notification Toast

Gentle notification that slides in with a bounce.

- `bg-[#fef9f3] rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-2 border-[#f0e6d6] flex items-center gap-3`.
- Icon: rounded circle `w-10 h-10 rounded-full bg-[#7cb342] flex items-center justify-center text-white`.
- Animation: slide-in from top with spring overshoot.

### 7) Sparkle / Celebration Particle

Small celebratory particle for positive feedback.

```css
@keyframes sparkle {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
}
.sparkle { animation: sparkle 0.8s ease-out forwards; }
```

Small SVG star or heart that appears and disappears on task completion.

## Color Palette System

### Warm Garden Palette (Animal Crossing-inspired)

| Color | Hex | Role |
|---|---|---|
| Soft Green | `#7cb342` | Primary, success, nature |
| Leaf Green | `#aed581` | Light surfaces, accents |
| Peach | `#ffab91` | Secondary, warmth |
| Warm Pink | `#f48fb1` | Accent, friendship |
| Sunny Yellow | `#fff176` | Highlight, currency |
| Cream | `#fef9f3` | Background, light surfaces |
| Warm Brown | `#8d6e63` | Wood, structure, text |
| Soft Tan | `#d7ccc8` | Borders, muted surfaces |
| Sky Blue | `#81d4fa` | Calm, info |

### Stardew Valley Palette

| Color | Hex | Role |
|---|---|---|
| Forest Green | `#558b2f` | Primary, farming |
| Earth Brown | `#6d4c41` | Soil, wood |
| Harvest Gold | `#f9a825` | Crops, currency |
| Sunset Orange | `#ff7043` | Energy, warmth |
| Berry Red | `#e53935` | Berry crops, health |
| Cream | `#fffde7` | Background |

Rules: Colors should be MUTED and warm. No harsh neons or cold blues. The palette should feel like a warm afternoon in a garden. Pastels with slightly desaturated tones.

## Typography Recommendations

Cozy game typography is rounded, soft, and friendly:

- **Primary:** Nunito, Quicksand, or Comfortaa (rounded sans-serif).
- **Alternative:** M PLUS Rounded 1c, Baloo 2 (chunky rounded).
- **Pixel alternative:** Pixelify Sans (for game-style pixel text that is still readable).
- **Headings:** `font-bold` to `font-black` with `tracking-normal`.
- **Body:** `font-medium` at comfortable sizes (`text-base` to `text-lg`).
- **Labels:** `font-bold` without `uppercase` (cozy UI uses sentence case for friendliness).
- Avoid cold, technical fonts (Inter alone, Roboto Mono). Avoid serif for primary text.

## Component Architecture Pattern

1. Warm cream or soft pastel background.
2. Rounded, chunky cards with soft shadows.
3. Pill-shaped buttons with spring bounce interactions.
4. Rounded inputs with soft focus rings.
5. Game-style progress bars (stamina, energy, experience).
6. Inventory grid slots (if applicable).
7. Friendly notification toasts with gentle slide-in.
8. Sparkle/celebration particles on success.

## Interaction Rules

- Default state: calm, warm, soft.
- Hover: gentle lift with spring overshoot.
  - `hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- Active/press: satisfying squash.
  - `active:translate-y-1 active:scale-95 transition-all duration-100`.
- Focus: soft green ring `focus:ring-4 focus:ring-[#7cb342]/15`.
- Success: sparkle particles + gentle bounce.
- Transitions: `ease-[cubic-bezier(0.34,1.56,0.64,1)]` (spring overshoot — the KEY to cozy feel).
- Duration: `200-300ms` for interactions, `500ms` for progress bars.
- Everything should feel like gravity has been turned down a notch.

## Reusable Tailwind Tokens

- Cozy card: `bg-[#fef9f3] rounded-[1.5rem] p-6 shadow-[0_4px_12px_rgba(180,140,100,0.1)] border-2 border-[#f0e6d6]`
- Cozy button: `bg-[#7cb342] text-white font-bold rounded-full px-8 py-3 shadow-[0_4px_0_#5a8a2a] hover:scale-105 active:translate-y-1 transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Cozy input: `bg-[#fff9f0] border-2 border-[#e0d0c0] rounded-full px-6 py-3 focus:border-[#7cb342] focus:ring-4 focus:ring-[#7cb342]/15`
- Energy bar: `w-full h-5 bg-[#fff3e0] rounded-full border-2 border-[#e0d0c0]`
- Inventory slot: `w-14 h-14 bg-[#fff9f0] border-2 border-[#e0d0c0] rounded-xl`
- Spring ease: `ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Soft shadow: `shadow-[0_4px_12px_rgba(180,140,100,0.1)]`
- Cream bg: `bg-[#fef9f3]`

## Quality Checklist (must pass)

- Color palette is warm and muted (soft greens, peaches, creams — no neons).
- All shapes use generous border radius (`rounded-full` for buttons, `rounded-[1.5rem]` for cards).
- Interactions use spring overshoot easing `cubic-bezier(0.34,1.56,0.64,1)`.
- Shadows are soft and warm-tinted (brown/amber undertones, not pure black).
- Typography is rounded and friendly (Nunito, Quicksand).
- Buttons have the satisfying press interaction (translate-y + shadow collapse).
- Progress bars have smooth animated fills.
- At least one game-UI element (inventory slot, energy bar, sparkle particle).
- The aesthetic reads as comfortable, safe, and low-stress.
- Nothing feels sharp, aggressive, or urgent.

## Anti-Patterns

- Sharp corners and rectangles (cozy UI requires rounded everything).
- Harsh, saturated neons (cozy palette is muted and warm).
- Cold color palettes (blue-gray, pure white — cozy is warm cream).
- Aggressive, fast animations (cozy motion is gentle and springy).
- Pure black shadows (use warm-tinted soft shadows).
- Thin, light typography (cozy is chunky and rounded).
- Error states that feel punitive (cozy errors are gentle and encouraging).
- Dense, cluttered layouts (cozy UI has breathing room).
- Technical or monospace fonts (cozy is warm and humanist).
- Missing the spring bounce (this is the defining interaction of cozy UI).

## Accessibility Considerations

- Warm muted palettes can have lower contrast; verify WCAG AA for all text.
- Cream backgrounds with brown text provide good contrast while maintaining warmth.
- Spring animations should be simplified (not disabled entirely) for `prefers-reduced-motion` users.
- Focus states use soft green ring: `focus:ring-4 focus:ring-[#7cb342]/15`.
- Touch targets are naturally generous in cozy UI (large rounded buttons).
- Progress bars and energy bars need `aria-valuenow` and `aria-label`.
- Sparkle particles are decorative — `aria-hidden="true"` and `pointer-events-none`.
- Rounded shapes must not reduce interactive hit areas below 44x44px.
- The low-stress aesthetic is inherently good for cognitive accessibility (reduces overwhelm).
- Ensure error states are clear (not just color-based — include friendly text messages).
