---
name: pastel-dream-ui
description: Build pastel dream UI components (soft color fields, cotton candy gradient, frosted surface, marshmallow button, candy stripe, sugar crystal, dreamy blur) with soft pastel colors, frosted surfaces, and the sweet gentle quality of a candy-colored dream. Trigger this skill when the user asks for pastel UI, dreamy design, cotton candy aesthetic, soft gradient interface, frosted glass components, candy-colored UI, marshmallow buttons, or sweet gentle interfaces.
---

# Pastel Dream UI

Use this skill to design and implement soft, dreamy interfaces that feel like stepping into a candy-colored cloud: frosted glass surfaces, cotton candy gradients, marshmallow-soft buttons, and sugar crystal sparkles scattered like stardust across gentle pastel fields.

## Non-Negotiable Foundations

- Pastel colors are muted and desaturated. True pastels sit at high lightness (85-95%) with low to moderate saturation. If a color looks vivid or electric, it is not pastel.
- Frosted glass is the primary surface treatment. Translucent backgrounds with `backdrop-blur` create the dreamy, diffused quality that defines this system.
- Gradients are soft and blended. Hard color transitions break the dream. All gradients use wide color stops and smooth interpolation.
- Rounded corners are generous. Pastel Dream favors `rounded-2xl` to `rounded-3xl` for containers and `rounded-full` for buttons. Sharp angles feel hostile in this aesthetic.
- Shadows are soft, colored, and diffused. Never use black shadows. All shadows use the pastel palette at low opacity to maintain the gentle atmosphere.
- Typography is soft and friendly. Rounded sans-serifs with medium to regular weight. Nothing aggressive, nothing condensed, nothing ultra-bold.
- The system must feel cohesive as a single atmosphere. Mixing pastel dream with harsh contrasts, dark backgrounds, or angular geometry breaks the immersion.
- Sugar crystal sparkle elements are decorative accents, not noise. Use sparingly (2-4 per screen maximum) to add magic without clutter.

## Core Material Recipes

### 1) Surface and Background

Pastel Dream surfaces are soft, translucent, and layered through blur and gradient shifts.

- Primary background: `bg-gradient-to-br from-[#f4b0c4]/30 via-[#f0f0ff] to-[#a0c8e8]/30` (soft three-stop gradient across the full pastel spectrum).
- Secondary surface (frosted card): `bg-white/60 backdrop-blur-xl border border-white/40` (the core frosted glass recipe).
- Tertiary surface (elevated frosted): `bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(244,176,196,0.12)]`.
- Solid pastel surface: `bg-[#fff8f8]` (marshmallow white) for forms, inputs, and solid panels.
- Cotton candy gradient panel: `bg-gradient-to-r from-[#f4b0c4]/40 via-[#f0c8d8]/40 to-[#a0c8e8]/40 backdrop-blur-lg`.
- Dreamy blur background: a full-screen element with `bg-gradient-to-br from-[#f4b0c4]/20 via-[#c4b0e0]/20 to-[#a0c8e8]/20` and `backdrop-blur-3xl` behind all content layers.
- Color field panels: solid pastel fills at low opacity for section differentiation: `bg-[#f4b0c4]/15`, `bg-[#a0c8e8]/15`, `bg-[#c4b0e0]/15`, `bg-[#b0e0c4]/15`.

### 2) Cotton Candy Gradient

The signature gradient blending pink to blue through lavender. Used for hero sections, feature highlights, and ambient backgrounds.

- Standard: `bg-gradient-to-r from-[#f4b0c4] via-[#f0c8d8] to-[#a0c8e8]` (full saturation).
- Muted: `bg-gradient-to-r from-[#f4b0c4]/40 via-[#f0c8d8]/30 to-[#a0c8e8]/40` (for backgrounds behind content).
- Diagonal: `bg-gradient-to-br from-[#f4b0c4]/50 via-[#c4b0e0]/40 to-[#a0c8e8]/50` (adds lavender in the middle).
- Animated: `animate-[candy-shift_12s_ease-in-out_infinite alternate]` with `background-size: 200% 200%` cycling `background-position` between `0% 50%` and `100% 50%`.
- Keyframes: `@keyframes candy-shift { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`
- Hero usage: full-width `min-h-[400px]` container with the muted gradient, a frosted overlay card in the center, and sugar crystal sparkles scattered above.
- Do NOT use the full-saturation gradient behind body text. Always use the muted variant for text-heavy areas.

### 3) Buttons

Pastel Dream buttons are marshmallow-soft: rounded, gently shadowed, and tactile without being aggressive.

- Primary button: `bg-gradient-to-r from-[#f4b0c4] to-[#f0c8d8] text-[#4a3040] font-semibold text-sm px-7 py-3 rounded-full shadow-[0_4px_16px_rgba(244,176,196,0.35)]`
  - Hover: `hover:shadow-[0_6px_24px_rgba(244,176,196,0.5)] hover:translate-y-[-1px] hover:brightness-105` (lifts and glows warmer).
  - Active: `active:shadow-[0_2px_8px_rgba(244,176,196,0.3)] active:translate-y-[1px]` (presses down softly).
  - `transition-all duration-200` for gentle, dreamy motion.
- Secondary button: `bg-white/70 backdrop-blur-md border border-white/50 text-[#6a5070] font-semibold text-sm px-7 py-3 rounded-full shadow-[0_2px_8px_rgba(196,176,224,0.15)]`
  - Hover: `hover:bg-white/90 hover:shadow-[0_4px_16px_rgba(196,176,224,0.25)]`
- Ghost button: `bg-transparent text-[#8a7090] font-medium text-sm px-5 py-2 rounded-full hover:bg-[#c4b0e0]/15 hover:text-[#6a5070]`
- Cotton candy button: `bg-gradient-to-r from-[#f4b0c4] via-[#c4b0e0] to-[#a0c8e8] text-white font-semibold text-sm px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(196,176,224,0.4)]`
  - This is the "special" button for primary CTAs. Use sparingly.
- Icon-only button: `p-3 rounded-full bg-white/50 backdrop-blur-sm text-[#8a7090] hover:bg-white/80 hover:text-[#6a5070] shadow-[0_2px_8px_rgba(0,0,0,0.04)]`

### 4) Cards

Pastel Dream cards are frosted, floating, and gently elevated.

- Frosted glass card: `bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(244,176,196,0.1)]`
- Elevated frosted card: `bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 shadow-[0_12px_40px_rgba(196,176,224,0.15)]`
- Cotton candy card: `bg-gradient-to-br from-[#f4b0c4]/25 via-[#f0f0ff]/40 to-[#a0c8e8]/25 backdrop-blur-xl border border-white/40 rounded-2xl p-6`
- Marshmallow card: `bg-[#fff8f8] rounded-3xl p-6 shadow-[0_4px_20px_rgba(244,176,196,0.12)]` (solid, soft, minimal transparency).
- Hover interaction: `hover:shadow-[0_12px_40px_rgba(244,176,196,0.2)] hover:translate-y-[-2px] transition-all duration-300` (gentle float upward with warmer glow).
- Nested card: place a smaller card inside with `bg-white/40 backdrop-blur-md rounded-2xl p-4` for visual depth.
- Candy stripe accent: add a top border or side accent with `bg-gradient-to-r from-[#f4b0c4] via-[#c4b0e0] to-[#a0c8e8]` at `h-1 rounded-full` for a soft rainbow divider.

### 5) Inputs

Pastel Dream inputs are soft wells with frosted backgrounds and gentle focus states.

- Standard input: `bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl px-5 py-3 text-[#4a3040] text-sm focus:border-[#f4b0c4]/50 focus:bg-white/70 focus:shadow-[0_0_0_3px_rgba(244,176,196,0.15)] outline-none transition-all duration-200`
- Search input: `bg-white/40 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 pl-12 text-sm text-[#4a3040] focus:bg-white/60 focus:border-[#c4b0e0]/40 focus:shadow-[0_0_0_3px_rgba(196,176,224,0.12)] outline-none`
  - Search icon: absolute-positioned `text-[#c4b0e0]` magnifying glass.
- Textarea: same as standard input with `resize-none min-h-[120px] rounded-2xl`
- Select: same as standard input with a custom pastel chevron icon instead of browser default.
- Label: `text-[#8a7090] text-xs font-semibold tracking-wide mb-2 block`
- Placeholder text: `placeholder:text-[#c4b0d0] placeholder:text-sm`
- Error state: `border-[#f4b0c4] focus:shadow-[0_0_0_3px_rgba(244,176,196,0.25)]` with error text `text-[#d07090] text-xs mt-1`
- Disabled state: `bg-white/20 text-[#c4b0d0] cursor-not-allowed opacity-60`

### 6) Sugar Crystal Sparkle

Small, twinkling glitter dots scattered across surfaces to add a magical quality.

- Base element: `absolute w-1 h-1 rounded-full bg-white` with `shadow-[0_0_4px_1px_rgba(255,255,255,0.8)]` for the glow effect.
- Sparkle cluster: position 3-5 sparkle dots within a `relative` container, each at different `top` and `left` positions using absolute positioning.
- Animation: `animate-[sparkle_3s_ease-in-out_infinite]` cycling between `opacity-0 scale-50` and `opacity-100 scale-100`.
- Keyframes: `@keyframes sparkle { 0%, 100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1); } }`
- Stagger timing: apply `animation-delay` of `0s`, `0.8s`, `1.6s`, `2.4s` to different sparkle dots for organic twinkling.
- Color variants: `bg-white` (standard), `bg-[#f4b0c4]` (pink sparkle), `bg-[#a0c8e8]` (blue sparkle), `bg-[#c4b0e0]` (lavender sparkle).
- Size variants: `w-1 h-1` (tiny), `w-1.5 h-1.5` (small), `w-2 h-2` (medium, rare).
- Limit to 2-4 sparkle clusters per visible screen area. Overuse destroys the magical effect.
- Use `pointer-events-none` on all sparkle elements.

### 7) Candy Stripe Pattern

Diagonal pastel stripes used as decorative backgrounds or accent surfaces.

- Base element: `relative overflow-hidden` with a pseudo-element or overlay div.
- Stripe layer: `absolute inset-0 opacity-[0.08]` with `background: repeating-linear-gradient(45deg, #f4b0c4, #f4b0c4 10px, #a0c8e8 10px, #a0c8e8 20px, #c4b0e0 20px, #c4b0e0 30px)`.
- Muted variant: reduce opacity to `0.04` or `0.06` for backgrounds behind text.
- Accent stripe: `h-2 rounded-full bg-gradient-to-r from-[#f4b0c4] via-[#c4b0e0] to-[#a0c8e8]` as a horizontal divider between sections.
- Never place text directly on a full-opacity candy stripe. The pattern is background texture, not content surface.

### 8) Dreamy Blur Background

A full-screen ambient background that establishes the Pastel Dream atmosphere.

- Container: `fixed inset-0 -z-10` (positioned behind all content).
- Gradient layer: `bg-gradient-to-br from-[#f4b0c4]/20 via-[#c4b0e0]/15 to-[#a0c8e8]/20`.
- Blur layer: `backdrop-blur-3xl` if content is behind it, or `blur-3xl` on overlapping colored circles.
- Floating orbs: three to five large circles with `rounded-full blur-[100px]` at low opacity, positioned at different corners:
  - Pink orb: `absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#f4b0c4]/20 blur-[120px]`
  - Blue orb: `absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-[#a0c8e8]/20 blur-[100px]`
  - Lavender orb: `absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#c4b0e0]/15 blur-[80px]`
- Animation: slow drift with `animate-[orb-drift_20s_ease-in-out_infinite alternate]` translating each orb by 20-30px on each axis.
- Keyframes: `@keyframes orb-drift { 0% { transform: translate(0, 0); } 100% { transform: translate(30px, -20px); } }`
- The dreamy background must not interfere with content readability. All text must maintain WCAG AA contrast against it.

## Color Palette System

### Pastel Palette

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Pastel Pink | `#f4b0c4` | `bg-[#f4b0c4]` / `text-[#f4b0c4]` | Primary accent, buttons, hover glows |
| Pastel Blue | `#a0c8e8` | `bg-[#a0c8e8]` / `text-[#a0c8e8]` | Secondary accent, gradients, links |
| Pastel Lavender | `#c4b0e0` | `bg-[#c4b0e0]` / `text-[#c4b0e0]` | Tertiary accent, gradient midpoint |
| Pastel Mint | `#b0e0c4` | `bg-[#b0e0c4]` / `text-[#b0e0c4]` | Success states, confirmation, nature |
| Marshmallow White | `#fff8f8` | `bg-[#fff8f8]` / `text-[#fff8f8]` | Primary background, solid cards |
| Cotton Candy | `#f0c8d8` | `bg-[#f0c8d8]` / `text-[#f0c8d8]` | Gradient midpoint, soft highlights |
| Sugar Crystal | `#f0f0ff` | `bg-[#f0f0ff]` / `text-[#f0f0ff]` | Tertiary background, frosted surfaces |
| Candy Yellow | `#f0e0a0` | `bg-[#f0e0a0]` / `text-[#f0e0a0]` | Warning states, highlights, warmth |

### Text Colors

| Name | Hex | Tailwind | Usage |
|---|---|---|---|
| Deep Rose | `#4a3040` | `text-[#4a3040]` | Primary text (dark on pastel) |
| Soft Plum | `#6a5070` | `text-[#6a5070]` | Secondary text |
| Mist Purple | `#8a7090` | `text-[#8a7090]` | Tertiary text, labels |
| Pale Lilac | `#c4b0d0` | `text-[#c4b0d0]` | Placeholder text, disabled |
| Blush Error | `#d07090` | `text-[#d07090]` | Error messages, destructive actions |
| Mint Success | `#50a070` | `text-[#50a070]` | Success messages, confirmations |

### Contrast Ratios

| Pair | Ratio | WCAG |
|---|---|---|
| Deep Rose (#4a3040) on Marshmallow White | 9.8:1 | AAA |
| Soft Plum (#6a5070) on Marshmallow White | 5.9:1 | AA |
| Mist Purple (#8a7090) on Marshmallow White | 3.8:1 | Large text only |
| Deep Rose on Sugar Crystal (#f0f0ff) | 8.2:1 | AAA |
| Soft Plum on Sugar Crystal | 5.1:1 | AA |

### Gradient Recipes

| Name | CSS |
|---|---|
| Cotton Candy | `bg-gradient-to-r from-[#f4b0c4] via-[#f0c8d8] to-[#a0c8e8]` |
| Cotton Candy Muted | `bg-gradient-to-r from-[#f4b0c4]/40 via-[#f0c8d8]/30 to-[#a0c8e8]/40` |
| Lavender Dream | `bg-gradient-to-br from-[#c4b0e0]/40 via-[#f0f0ff] to-[#f4b0c4]/30` |
| Mint Sunrise | `bg-gradient-to-r from-[#b0e0c4]/40 via-[#f0f0ff] to-[#f0e0a0]/30` |
| Full Spectrum | `bg-gradient-to-r from-[#f4b0c4] via-[#c4b0e0] to-[#a0c8e8]` |

## Typography Recommendations

Pastel Dream typography is soft, rounded, and friendly. It communicates warmth and approachability.

| Element | Font | Size | Weight | Spacing |
|---|---|---|---|---|
| Page title | Nunito or Quicksand | `text-4xl` to `text-5xl` | `font-bold` | `tracking-tight` |
| Section title | Nunito or Quicksand | `text-2xl` to `text-3xl` | `font-semibold` | `tracking-normal` |
| Card title | Nunito or Quicksand | `text-lg` to `text-xl` | `font-semibold` | `leading-snug` |
| Body | Nunito or system rounded sans | `text-sm` to `text-base` | `font-normal` | `leading-relaxed` |
| Label/eyebrow | Nunito | `text-xs` | `font-semibold` | `tracking-wide` |
| Caption | Nunito | `text-xs` | `font-normal` | `text-[#8a7090]` |
| Button text | Nunito | `text-sm` | `font-semibold` | `tracking-wide` |

Rules:
- Maximum two font families: one rounded sans-serif for headings and body (Nunito, Quicksand, or Poppins), one optional mono for code snippets (JetBrains Mono at lighter weight).
- Avoid condensed, ultra-thin, or sharp-edged typefaces. Everything should feel rounded and approachable.
- Body text color is always `text-[#4a3040]` (Deep Rose) on light pastel backgrounds. Never pure black.
- Line height for body: `leading-relaxed` (`1.625`) minimum. Pastel Dream values readability and breathability.
- Letter spacing: slightly loose for headings (`tracking-wide` on labels), normal for body.
- Font weight contrast: use `font-semibold` or `font-bold` for headings, `font-normal` for body. Avoid `font-thin` or `font-extrabold`.

## Component Architecture Pattern

1. Dreamy blur background layer (ambient gradient orbs behind everything).
2. Content surface layer (frosted glass cards on the blurred background).
3. Accent layer (cotton candy gradients, candy stripe dividers, pastel color fields).
4. Typography layer (rounded, friendly type hierarchy with soft color text).
5. Sparkle overlay layer (sugar crystal elements floating above content).
6. Interactive layer (marshmallow buttons, frosted inputs, gentle hover states).

The atmosphere is built bottom-up: blur, then frosted content, then accents, then sparkles. Each layer adds softness and depth without sharpness.

## Interaction Rules

- Default state: soft, frosted, gently elevated with pastel-colored shadows.
- Hover state: slightly elevated (`translate-y-[-2px]`), warmer shadow glow (`shadow-[0_8px_32px_rgba(244,176,196,0.2)]`), subtle brightness increase (`brightness-105`).
- Active state: settles back down (`translate-y-[1px]`), smaller shadow (`shadow-[0_2px_8px_rgba(244,176,196,0.15)]`).
- Focus state: `focus:outline-none focus:ring-2 focus:ring-[#c4b0e0]/40 focus:ring-offset-2 focus:ring-offset-[#fff8f8]` (lavender ring on marshmallow background).
- Transitions: `transition-all duration-300` for cards (slow, dreamy float), `transition-all duration-200` for buttons and inputs (gentle response).
- Spring-like easing: use `ease-[cubic-bezier(0.34,1.56,0.64,1)]` for subtle bounce on hover lift. Pastel Dream can have gentle overshoot; it does not need to be perfectly linear.
- Ambient animations: cotton candy gradient shift (12s), dreamy orb drift (20s), sparkle twinkle (3s staggered). All are continuous and slow.
- No harsh transitions, no instant state changes, no jarring motion. Everything should feel like floating.

## Reusable Tailwind Tokens

### Pastel Surface Tokens

- Marshmallow bg: `bg-[#fff8f8]`
- Sugar Crystal bg: `bg-[#f0f0ff]`
- Frosted surface: `bg-white/60 backdrop-blur-xl border border-white/40`
- Elevated frosted: `bg-white/80 backdrop-blur-2xl border border-white/50`
- Primary text: `text-[#4a3040]`
- Secondary text: `text-[#6a5070]`
- Tertiary text: `text-[#8a7090]`
- Placeholder: `text-[#c4b0d0]`

### Pastel Component Tokens

- Primary button: `bg-gradient-to-r from-[#f4b0c4] to-[#f0c8d8] text-[#4a3040] font-semibold text-sm px-7 py-3 rounded-full shadow-[0_4px_16px_rgba(244,176,196,0.35)] hover:shadow-[0_6px_24px_rgba(244,176,196,0.5)] hover:translate-y-[-1px] active:shadow-[0_2px_8px_rgba(244,176,196,0.3)] active:translate-y-[1px] transition-all duration-200`
- Secondary button: `bg-white/70 backdrop-blur-md border border-white/50 text-[#6a5070] font-semibold text-sm px-7 py-3 rounded-full shadow-[0_2px_8px_rgba(196,176,224,0.15)] hover:bg-white/90 hover:shadow-[0_4px_16px_rgba(196,176,224,0.25)] transition-all duration-200`
- Ghost button: `bg-transparent text-[#8a7090] font-medium text-sm px-5 py-2 rounded-full hover:bg-[#c4b0e0]/15 hover:text-[#6a5070] transition-colors duration-200`
- Frosted card: `bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-[0_8px_32px_rgba(244,176,196,0.1)]`
- Marshmallow card: `bg-[#fff8f8] rounded-3xl p-6 shadow-[0_4px_20px_rgba(244,176,196,0.12)]`
- Input: `bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl px-5 py-3 text-[#4a3040] text-sm focus:border-[#f4b0c4]/50 focus:bg-white/70 focus:shadow-[0_0_0_3px_rgba(244,176,196,0.15)] outline-none transition-all duration-200`
- Label: `text-[#8a7090] text-xs font-semibold tracking-wide`
- Badge: `bg-[#c4b0e0]/20 text-[#6a5070] text-xs font-semibold px-3 py-1 rounded-full`
- Divider: `h-px bg-gradient-to-r from-transparent via-[#c4b0e0]/30 to-transparent`
- Tooltip: `bg-white/90 backdrop-blur-md border border-white/50 text-[#4a3040] text-xs rounded-xl px-3 py-2 shadow-[0_4px_16px_rgba(196,176,224,0.15)]`

### Pastel Typography Tokens

- Display heading: `font-sans text-5xl font-bold tracking-tight text-[#4a3040]`
- Section heading: `font-sans text-3xl font-semibold text-[#4a3040]`
- Card heading: `font-sans text-xl font-semibold text-[#4a3040]`
- Body text: `font-sans text-sm text-[#4a3040] leading-relaxed`
- Label: `font-sans text-xs font-semibold tracking-wide text-[#8a7090]`
- Caption: `font-sans text-xs text-[#c4b0d0]`
- Button text: `font-sans text-sm font-semibold tracking-wide`

### Pastel Gradient Tokens

- Cotton candy: `bg-gradient-to-r from-[#f4b0c4] via-[#f0c8d8] to-[#a0c8e8]`
- Cotton candy muted: `bg-gradient-to-r from-[#f4b0c4]/40 via-[#f0c8d8]/30 to-[#a0c8e8]/40`
- Lavender dream: `bg-gradient-to-br from-[#c4b0e0]/40 via-[#f0f0ff] to-[#f4b0c4]/30`
- Accent divider: `bg-gradient-to-r from-[#f4b0c4] via-[#c4b0e0] to-[#a0c8e8]`
- Background ambient: `bg-gradient-to-br from-[#f4b0c4]/20 via-[#c4b0e0]/15 to-[#a0c8e8]/20`

### Pastel Shadow Tokens

- Soft pink: `shadow-[0_4px_16px_rgba(244,176,196,0.25)]`
- Soft lavender: `shadow-[0_8px_32px_rgba(196,176,224,0.15)]`
- Soft blue: `shadow-[0_4px_16px_rgba(160,200,232,0.2)]`
- Frosted elevated: `shadow-[0_12px_40px_rgba(244,176,196,0.12)]`
- Button glow: `shadow-[0_4px_16px_rgba(244,176,196,0.35)]`
- Button hover glow: `shadow-[0_6px_24px_rgba(244,176,196,0.5)]`

## Quality Checklist (must pass)

- All colors are soft pastels with lightness above 80%. No vivid, saturated, or dark chromatic colors.
- Frosted glass effect (`backdrop-blur-xl` or `backdrop-blur-2xl`) is present on at least the primary content cards.
- Cotton candy gradient appears on at least one element per screen (hero, button accent, or decorative divider).
- Shadows use pastel colors at low opacity. No black or gray shadows anywhere.
- All corners are rounded: `rounded-xl` minimum for containers, `rounded-full` for buttons.
- Typography uses rounded sans-serif fonts. No condensed, serif, or sharp-edged typefaces.
- Text color is `#4a3040` or `#6a5070` on light pastel backgrounds. Never pure black (#000000).
- Sugar crystal sparkles are limited to 2-4 clusters per visible screen area.
- Hover states are gentle (small translation, warmer glow, no jarring changes).
- All animations use slow timing (3s minimum for sparkles, 12s for gradients, 20s for background drift).
- Focus states use lavender-tinted rings that match the pastel palette.
- Gradient backgrounds behind text use muted opacity (30-40%) to maintain readability.
- No sharp corners, no harsh shadows, no black text, no hard color transitions.

## Anti-Patterns

- Using pure black (#000000) for text. Pastel Dream text is always tinted with plum, rose, or purple.
- Using hard, black, or gray shadows. All shadows must use pastel colors at low opacity.
- Applying `backdrop-blur` to small components (badges, individual icons, tiny buttons). Blur is for cards, panels, and large surfaces.
- Using sharp corners (`rounded-none`, `rounded-sm`) on any component. Pastel Dream is inherently rounded.
- Making gradients fully saturated behind text content. Always use muted gradient variants for readability.
- Overloading screens with sugar crystal sparkles. More than 4 clusters becomes visual noise, not magic.
- Using condensed, ultra-thin, or aggressive typography. Pastel Dream type is always rounded and friendly.
- Mixing Pastel Dream with dark backgrounds, harsh borders, or angular design language.
- Animating interactions with harsh linear timing. Use ease-out or spring-like cubic-bezier curves.
- Adding decorative elements that serve no visual purpose (sparkles without atmosphere, stripes without rhythm).
- Using pure white (#ffffff) as the only background. Pastel backgrounds use tinted whites: `#fff8f8`, `#f0f0ff`, or gradient overlays.
- Placing heavy content (data tables, dense text) on frosted glass surfaces without solid backing. Frosted glass is for light content.
- Applying `brightness` or `contrast` adjustments that push pastel colors into vivid territory.

## Accessibility Considerations

- Deep Rose (#4a3040) on Marshmallow White provides 9.8:1 contrast ratio, exceeding WCAG AAA. This is the standard text pairing.
- Soft Plum (#6a5070) on Marshmallow White provides 5.9:1, meeting WCAG AA for normal text.
- Mist Purple (#8a7090) at 3.8:1 is limited to large text, labels, and decorative elements only. Never use for body text.
- All interactive elements must have visible focus states. Use `ring-2 ring-[#c4b0e0]/40 ring-offset-2 ring-offset-[#fff8f8]` for the pastel-standard focus ring.
- Frosted glass surfaces with `backdrop-blur` can reduce contrast for text placed on them. Always test actual rendered contrast with the blur applied. Increase text darkness or add a solid backing if contrast drops below 4.5:1.
- Sugar crystal sparkle animations use `prefers-reduced-motion` media query: `@media (prefers-reduced-motion: reduce) { .sparkle { animation: none; opacity: 0.5; } }`. Respect user motion preferences.
- Cotton candy gradient animations and dreamy orb drifts must also respect `prefers-reduced-motion`. Provide a static fallback state.
- All sparkle elements must use `pointer-events-none` and `aria-hidden="true"` to prevent interference with screen readers and pointer interaction.
- Pastel color choices may not be distinguishable for users with color vision deficiency. Do not rely on color alone to communicate state or meaning. Pair color with icons, text, or shape changes.
- Touch targets must meet minimum 44x44px. Rounded buttons should use `min-w-[44px] min-h-[44px]` to ensure adequate size despite their soft appearance.
- Gradient text (if used) must maintain sufficient contrast. Test each gradient direction at multiple viewport sizes.
- The soft, low-contrast aesthetic should not compromise functional readability. When in doubt, increase text darkness from Mist Purple toward Deep Rose.
- Reduced motion mode should disable all ambient animations (sparkles, gradient shift, orb drift) while preserving hover and focus state transitions at their original speed.
