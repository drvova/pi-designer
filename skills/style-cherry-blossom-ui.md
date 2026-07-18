---
name: cherry-blossom-ui
description: Build cherry blossom / sakura UI components (soft pink petals, Japanese spring aesthetic, falling petals animation, washi paper, sumi-e ink, gentle warmth) with delicate pink gradients, botanical petal decorations, and the ephemeral beauty of Japanese spring. Trigger this skill when the user asks for cherry blossom design, sakura aesthetic, Japanese spring UI, hanami, or soft pink botanical interfaces.
---

# Cherry Blossom / Sakura UI

Use this skill to design and implementation delicate, ephemeral interfaces inspired by Japanese spring and cherry blossom season: soft pink palettes, falling petal animations, washi paper textures, sumi-e ink accents, and the gentle impermanence of sakura.

## Non-Negotiable Foundations

- Cherry blossom UI celebrates ephemerality (mono no aware — the beautiful sadness of impermanence). Everything is soft, gentle, and slightly nostalgic.
- Colors are dominated by soft pinks: blush, petal pink, rose, and warm cream, with sumi-e black ink accents.
- Falling petals are the signature animation: small pink SVG petals drift slowly down the screen.
- Background is warm washi paper or soft pink gradient — never stark or cold.
- Botanical decorations (branches, petals, flowers) are delicate SVG line-art.
- Typography blends elegant serif (for romance) with Japanese-influenced strokes.

## Core Material Recipes

### 1) Sakura Gradient Background

Soft pink spring gradient backdrop.

- `bg-gradient-to-b from-[#fff0f5] via-[#ffe0ec] to-[#ffd0e0]` (sky pink gradient).
- Subtle petal texture: `bg-[radial-gradient(rgba(255,183,197,0.1)_2px,transparent_2px)] bg-[size:60px_60px]`.

### 2) Falling Petal Animation

The signature sakura element: animated falling petals.

```css
@keyframes petal-fall {
  0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(110vh) translateX(50px) rotate(360deg); opacity: 0; }
}
.petal {
  position: fixed;
  width: 12px;
  height: 12px;
  background: #ffb6c1;
  border-radius: 50% 0 50% 0;
  animation: petal-fall 12s linear infinite;
  pointer-events: none;
  z-index: 1;
}
```

Multiple petals with different `animation-delay`, `left` positions, and durations (8-15s) create a natural drift.

### 3) Washi Paper Card

Soft warm card with paper texture.

- `bg-[#fff8f0] rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgba(255,182,193,0.15)] border border-[#f5d0dc]`.

### 4) Sumi-e Ink Branch Decoration

Minimalist black ink branch with blossoms (Japanese brush painting style).

```html
<svg viewBox="0 0 200 100" class="w-48 h-24 opacity-60">
  <path d="M10,80 Q40,60 70,50 Q100,45 130,30 Q160,20 190,15" fill="none" stroke="#2a1a0a" stroke-width="2" stroke-linecap="round"/>
  <!-- Small blossoms on the branch -->
  <circle cx="50" cy="55" r="4" fill="#ffb6c1" opacity="0.7"/>
  <circle cx="90" cy="42" r="5" fill="#ffc0cb" opacity="0.7"/>
  <circle cx="130" cy="25" r="4" fill="#ffb6c1" opacity="0.7"/>
  <circle cx="160" cy="18" r="3" fill="#ffc0cb" opacity="0.7"/>
</svg>
```

### 5) Sakura Button

Soft pink pill button with gentle warmth.

- `bg-gradient-to-r from-[#ffc0cb] to-[#ffb6c1] text-[#5a2a3a] font-medium rounded-full px-8 py-3 shadow-[0_2px_8px_rgba(255,182,193,0.3)] hover:shadow-[0_4px_16px_rgba(255,182,193,0.4)] hover:scale-[1.02] transition-all duration-300`.

### 6) Petal Shape Divider

Divider made of small blossom shapes.

```html
<div class="flex items-center justify-center gap-2 my-6">
  <span class="text-[#ffb6c1]">❀</span>
  <span class="text-[#ffc0cb]">❀</span>
  <span class="text-[#ffb6c1]">❀</span>
</div>
```

### 7) Sakura Input

Soft pink input with gentle focus.

- `bg-[#fff8f0] border border-[#f5d0dc] rounded-full px-6 py-3 outline-none focus:border-[#ffb6c1] focus:ring-2 focus:ring-[#ffb6c1]/20 transition-all placeholder:text-[#e0b0c0]`.

## Color Palette System

### Core Sakura Palette

| Color | Hex | Role |
|---|---|---|
| Blush Pink | `#fff0f5` | Lightest background |
| Petal Pink | `#ffe0ec` | Secondary background |
| Sakura Pink | `#ffb6c1` | Primary accent, petals |
| Rose | `#ffc0cb` | Secondary accent |
| Deep Rose | `#5a2a3a` | Text, sumi-e contrast |
| Warm Cream | `#fff8f0` | Card surfaces |
| Sumi Black | `#2a1a0a` | Ink accents, branches |
| Soft Brown | `#8a6a4a` | Branch lines |

Rules: Soft pinks and warm creams dominate. Sumi-e black provides contrast and structure (ink branches). The palette should feel like a spring day in Kyoto — gentle, warm, ephemeral.

## Typography Recommendations

- **Display:** Noto Serif JP, Sawarabi Mincho, or Cormorant Garamond (Japanese-influenced elegant serif).
- **Body:** Yu Mincho, Garamond, or Lora (warm readable serif).
- **Labels:** `font-serif text-sm tracking-wide` (without uppercase — sakura is gentle).
- Optional: Japanese characters as decorative accents (花 = flower, 春 = spring).

## Interaction Rules

- Default: gentle, soft, ephemeral.
- Hover: elements bloom slightly (scale up gently, glow with pink warmth).
  - `hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(255,182,193,0.4)] transition-all duration-400`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:ring-2 focus:ring-[#ffb6c1]/30`.
- Transitions: `transition-all duration-400 ease-in-out` (slow, gentle, like petals drifting).
- Falling petals: continuous ambient animation across the screen.

## Reusable Tailwind Tokens

- Sakura bg: `bg-gradient-to-b from-[#fff0f5] via-[#ffe0ec] to-[#ffd0e0]`.
- Washi card: `bg-[#fff8f0] rounded-[1.5rem] shadow-[0_2px_12px_rgba(255,182,193,0.15)] border border-[#f5d0dc]`.
- Sakura button: `bg-gradient-to-r from-[#ffc0cb] to-[#ffb6c1] text-[#5a2a3a] rounded-full shadow-[0_2px_8px_rgba(255,182,193,0.3)]`.
- Petal shape: CSS `border-radius: 50% 0 50% 0` with `background: #ffb6c1`.
- Sumi-e branch: SVG ink stroke path `stroke="#2a1a0a" stroke-linecap="round"`.
- Petal divider: `❀` characters in graduated pink opacity.

## Quality Checklist

- Background is soft pink gradient or warm washi cream.
- Falling petal animation is present (ambient, continuous).
- At least one sumi-e ink branch or botanical SVG decoration.
- Color palette is dominated by soft pinks with sumi-e black accents.
- Cards are warm cream with pink-tinted shadows and borders.
- Buttons are soft pink pills with gentle hover bloom.
- Typography is elegant serif with Japanese influence.
- The aesthetic feels ephemeral, gentle, and slightly nostalgic (mono no aware).
- Petal-shaped dividers or blossom motifs present.
- Motion is slow and drifting (like petals in a spring breeze).

## Anti-Patterns

- Dark or cold color palettes (sakura is warm and soft).
- Sharp angular shapes (everything should be soft and rounded).
- Fast aggressive animations (motion should be gentle and drifting).
- Missing falling petals (this is the signature ambient animation).
- Bright saturated hot pinks (use soft, muted blush tones).
- Heavy bold typography (sakura is delicate and elegant).
- Missing botanical/branch decorations (these are essential nature references).
- Sans-serif typography alone (sakura blends with Japanese-influenced serif).
- Dense cluttered layouts (sakura breathes with generous white space).
- Hard shadows (use soft pink-tinted shadows).

## Accessibility Considerations

- Soft pink backgrounds with dark rose text provide adequate contrast (verify WCAG AA — `#5a2a3a` on `#fff8f0` passes).
- Falling petals must not distract from text reading (low opacity, pointer-events-none).
- Focus states: `focus:ring-2 focus:ring-[#ffb6c1]/30` (soft pink ring).
- Falling petal animation must respect `prefers-reduced-motion` (disable or reduce).
- Sumi-e SVG decorations must be `aria-hidden="true"`.
- Japanese character accents need `aria-hidden="true"` when decorative.
- Soft shadows may make card boundaries unclear — ensure borders are visible enough.
- Touch targets must be adequate despite delicate styling.
