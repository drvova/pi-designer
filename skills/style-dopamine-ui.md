---
name: dopamine-ui
description: Build dopamine design UI components (high-energy vibrant colors, playful micro-interactions, unapologetic joy, bold gradients, expressive motion) with neon-meets-pastel palettes, celebratory feedback, and the visual language of post-pandemic digital optimism. Trigger this skill when the user asks for dopamine design, dopamine colors, high-energy vibrant UI, joyful design, feel-good interfaces, or Gen-Z targeted vibrant aesthetics.
---

# Dopamine Design UI

Use this skill to design and implement high-energy, joy-first interfaces with vibrant saturated palettes, playful micro-interactions, celebratory feedback, and the visual language of digital optimism that replaced muted minimalism in the post-pandemic era.

## Non-Negotiable Foundations

- Dopamine design is the deliberate use of color, motion, and interaction to trigger positive emotional responses — "design that makes you feel good."
- Colors are maximally vibrant and saturated: neon pinks, electric blues, acid greens, sunny yellows. Pastels are used as contrast, not as the primary palette.
- Motion is celebratory and exaggerated: confetti bursts, spring bounces, satisfying snaps, and rewarding micro-interactions.
- The aesthetic is unapologetically joyful and energetic — the visual opposite of muted corporate minimalism.
- Interactive feedback is amplified: every click, hover, and completion should feel rewarding.
- Typography is bold, oversized, and expressive — often mixed with color treatments and gradient text.

## Core Material Recipes

### 1) Vibrant Gradient Surface

The dopamine signature: saturated multi-color gradients.

- Energy: `bg-gradient-to-br from-[#ff006e] via-[#8338ec] to-[#3a86ff]`.
- Sunset joy: `bg-gradient-to-br from-[#ffbe0b] via-[#fb5607] to-[#ff006e]`.
- Rainbow pop: `bg-gradient-to-r from-[#ff006e] via-[#ffbe0b] via-[#3a86ff] to-[#06d6a0]`.
- Animated: `bg-[length:400%_400%] animate-[gradient_8s_ease_infinite]`.

### 2) Dopamine Button

Bold, gradient-filled, springy button with amplified feedback.

- Primary: `bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-bold rounded-full px-8 py-4 shadow-[0_4px_14px_rgba(255,0,110,0.4)] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,0,110,0.5)] active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Yellow pop: `bg-[#ffbe0b] text-black font-black rounded-full px-8 py-4 border-4 border-black shadow-[0_4px_0_0_#000] hover:scale-105 active:translate-y-1 active:shadow-none transition-all`
- Ghost glow: `bg-transparent text-[#ff006e] font-bold rounded-full px-8 py-4 border-2 border-[#ff006e] hover:bg-[#ff006e] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,110,0.5)] transition-all`

### 3) Confetti / Celebration Effect

Triggered on success, completion, or achievement.

```javascript
// Simple confetti burst on click/success
function celebrate(element) {
  const rect = element.getBoundingClientRect();
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width/2}px;
      top: ${rect.top + rect.height/2}px;
      width: 10px; height: 10px;
      background: ${['#ff006e','#ffbe0b','#3a86ff','#06d6a0','#8338ec'][i % 5]};
      pointer-events: none;
      z-index: 9999;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(confetti);
    const angle = (Math.PI * 2 * i) / 30;
    const velocity = 100 + Math.random() * 150;
    confetti.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${Math.cos(angle)*velocity}px, ${Math.sin(angle)*velocity + 200}px) rotate(${Math.random()*720}deg)`, opacity: 0 }
    ], { duration: 1000 + Math.random()*500, easing: 'cubic-bezier(0.16,1,0.3,1)' });
    setTimeout(() => confetti.remove(), 1500);
  }
}
```

### 4) Dopamine Card

Vibrant card with gradient border and glow.

- `bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(255,0,110,0.15)] transition-all duration-300`.
- Gradient border variant: wrapper `bg-gradient-to-br from-[#ff006e] to-[#8338ec] p-[2px] rounded-3xl`, inner `bg-white rounded-[calc(1.5rem-2px)] p-6`.

### 5) Dopamine Input

Colorful input with playful focus state.

- `bg-[#f8f4ff] border-2 border-[#e0d4ff] rounded-full px-6 py-3 outline-none focus:border-[#8338ec] focus:ring-4 focus:ring-[#8338ec]/20 focus:bg-white transition-all placeholder:text-gray-400`.

### 6) Gradient Text

Vibrant gradient applied to typography.

- `text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#3a86ff] font-black`.
- Animated: `bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite] bg-gradient-to-r from-[#ff006e] via-[#ffbe0b] to-[#ff006e]`.

### 7) Spring Bounce Element

Elements that bounce with spring physics on interaction.

- Container: `transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- Hover: `hover:scale-110`.
- The overshoot bezier `(0.34,1.56,0.64,1)` creates the satisfying "boing" effect.

## Color Palette System

### Core Dopamine Palette

| Color | Hex | Emotion |
|---|---|---|
| Hot Pink | `#ff006e` | Excitement, passion, energy |
| Electric Purple | `#8338ec` | Creativity, imagination |
| Azure Blue | `#3a86ff` | Trust, clarity, optimism |
| Vivid Yellow | `#ffbe0b` | Happiness, warmth, attention |
| Spring Green | `#06d6a0` | Growth, freshness, success |
| Orange-Red | `#fb5607` | Enthusiasm, warmth |
| Pure White | `#ffffff` | Contrast, clarity |
| Soft Lavender | `#f8f4ff` | Soft background, calm counterpoint |

Rules: Use 3-5 vibrant colors per interface. Colors should be saturated and energetic. Pair vibrant accents with soft neutral backgrounds (white, soft lavender, light gray) for contrast and readability.

## Typography Recommendations

Dopamine typography is bold, oversized, and expressive:

- **Display:** Space Grotesk, Bricolage Grotesque, or Clash Display (bold, modern, characterful).
- **Body:** Inter, DM Sans, or Plus Jakarta Sans (clean, readable).
- **Headings:** `font-bold` to `font-black` — dopamine design uses heavy weights.
- **Gradient text:** apply vibrant gradients to display headings.
- **Labels:** `font-bold uppercase tracking-wide`.
- Avoid thin/light weights. Dopamine design is confident and bold.

## Component Architecture Pattern

1. Vibrant gradient or soft neutral background.
2. Oversized bold typography with gradient text treatments.
3. Dopamine cards (white with colorful shadows or gradient borders).
4. Vibrant gradient buttons with spring-bounce interactions.
5. Confetti/celebration effects on success states.
6. Playful micro-interactions (hover scales, press bounces, glow rings).
7. Animated gradient backgrounds (subtle drift).
8. Progress/streak indicators with celebratory fill animations.

## Interaction Rules

- Default state: vibrant, bold, energetic.
- Hover: amplified — spring scale (`hover:scale-105`), glow intensifies.
  - `hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,0,110,0.5)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- Active: satisfying press (`active:scale-95` — quick bounce back on release).
- Focus: vibrant glow ring `focus:ring-4 focus:ring-[#ff006e]/30 focus:ring-offset-2`.
- Success: confetti burst + color flash.
- Transitions: spring easing `cubic-bezier(0.34,1.56,0.64,1)` for playful overshoot.
- Duration: `300-400ms` for spring effects (long enough to feel the bounce).

## Micro-Interaction Library

Dopamine design is defined by its micro-interactions:

| Trigger | Effect | Implementation |
|---|---|---|
| Button hover | Spring scale + glow | `hover:scale-105` + colored shadow |
| Button click | Bounce press | `active:scale-95` spring |
| Task complete | Confetti burst | JS confetti animation |
| Streak milestone | Number count-up | Animated number from 0 to value |
| Progress fill | Spring fill | `transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]` |
| Card hover | Lift + tilt | `hover:-translate-y-2 hover:rotate-1` |
| Toggle on | Bounce + color flash | Spring scale + bg color change |
| Error/shake | Playful shake | `animate-[shake_0.4s_ease-in-out]` |
| Achievement unlock | Badge pop-in | Spring scale from 0 + glow |

## Reusable Tailwind Tokens

- Vibrant gradient: `bg-gradient-to-br from-[#ff006e] via-[#8338ec] to-[#3a86ff]`
- Dopamine button: `bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-bold rounded-full px-8 py-4 shadow-[0_4px_14px_rgba(255,0,110,0.4)] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Gradient text: `text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#3a86ff] font-black`
- Dopamine card: `bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(255,0,110,0.15)] transition-all`
- Spring ease: `ease-[cubic-bezier(0.34,1.56,0.64,1)]`
- Glow ring: `focus:ring-4 focus:ring-[#ff006e]/30`
- Gradient border: wrapper `bg-gradient-to-br from-[#ff006e] to-[#8338ec] p-[2px] rounded-3xl`

## Quality Checklist (must pass)

- Color palette is vibrant and saturated (not muted or pastel-heavy).
- At least one gradient surface or gradient text treatment.
- Buttons have spring-bounce hover/active interactions (overshoot bezier).
- Success states include celebratory feedback (confetti, color flash, count-up).
- Typography is bold (`font-bold` minimum, `font-black` for display).
- Micro-interactions are amplified — every interaction feels rewarding.
- Background includes subtle animation (gradient drift) or vibrant accent.
- Focus states use vibrant glow rings.
- The aesthetic reads as joyful, energetic, and optimistic.
- Interactive elements feel "alive" (they respond visibly to every input).

## Anti-Patterns

- Muted, neutral, or monochromatic palettes (dopamine design demands color).
- Subtle, barely-visible hover states (interactions should be amplified).
- Linear or `ease-in-out` timing (use spring overshoot for dopamine feel).
- Missing celebration on success (task completion should feel rewarding).
- Thin, light typography (dopamine is bold and confident).
- Static, lifeless layouts (every element should feel responsive).
- Missing gradient treatments (gradients are core to the dopamine palette).
- Cluttered or overwhelming layouts (joyful does not mean chaotic — maintain clarity).
- Long transition durations (>500ms loses the "snap" of dopamine).
- Forgetting the emotional goal (every element should make the user feel good).

## Accessibility Considerations

- Vibrant colors can cause eye strain; provide a muted/reduced-saturation alternative.
- Confetti and celebration animations must respect `prefers-reduced-motion`.
- Spring animations should be disabled or simplified for reduced-motion users.
- High contrast between vibrant elements and text must be verified (WCAG AA).
- Focus states must be highly visible: `focus:ring-4 focus:ring-[#ff006e]/30`.
- Confetti elements must be `pointer-events-none` and cleaned up from the DOM.
- Color should not be the sole information channel (include text labels and icons).
- Vibrant backgrounds with white text must be tested for contrast at all opacity levels.
- Touch targets must be adequate despite spring scale effects (minimum 44x44px at rest).
