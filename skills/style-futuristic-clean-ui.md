---
name: futuristic-clean-ui
description: Build futuristic clean UI components (smooth surfaces, subtle gradients, rounded containers, floating cards, ambient glow, clean typography, gentle shadows) with Apple-inspired minimalism, soft surfaces, and the refined simplicity of modern clean design. Trigger this skill when the user asks for futuristic clean, Apple-inspired UI, soft minimalism, ambient glow design, floating cards, clean futuristic interfaces, glass panels, smooth surfaces, modern clean design, or premium minimal interfaces.
---

# Futuristic Clean UI

Use this skill to design and implement smooth, luminous interfaces that embrace subtle gradients, floating cards with ambient glow, generous rounded containers, glass panels, and the refined simplicity of Apple-inspired clean design. This is minimalism evolved: surfaces that breathe with soft light, cards that float above gentle gradients, and typography that reads as effortlessly precise. Every pixel is considered. Every shadow is earned.

## Non-Negotiable Foundations

- Soft is the standard. Surfaces are smooth, shadows are gentle, borders are subtle. Nothing should feel heavy, harsh, or abrupt.
- Ambient glow replaces hard borders. Elements are defined by soft colored light radiating from behind them, not by thick outlines or aggressive shadows.
- White space is generous and purposeful. Every empty area is breathing room that makes the content feel premium.
- Typography is clean, consistent, and legible. One typeface family with deliberate weight and size variation. No clashing fonts, no noise.
- Rounded corners are universal. `rounded-2xl` to `rounded-3xl` on containers, cards, and buttons. Sharp corners are a violation of the aesthetic.
- Color palette is restrained: near-white surfaces, soft grays, one strong accent blue, and ambient glows derived from the accent.
- Surfaces carry subtle gradients, never flat solid fills. The gradient from near-white to white creates depth without weight.
- Hierarchy is achieved through size, weight, spacing, and shadow depth — never through color clash or visual noise.

## Core Material Recipes

### 1) Smooth Gradient Surface

The foundation of futuristic clean: a barely-perceptible gradient that gives the surface depth and warmth.

- Smooth surface: `bg-gradient-to-b from-[#fafafa] to-white`
- Cool surface: `bg-gradient-to-br from-[#f5f5f5] to-[#fafafa]`
- Warm surface: `bg-gradient-to-b from-[#fafaf8] to-[#ffffff]`
- Elevated surface: `bg-gradient-to-b from-white to-[#fafafa]`
- Animated gradient (subtle): `bg-[length:200%_200%] animate-[gradient_15s_ease_infinite] bg-gradient-to-br from-[#fafafa] via-white to-[#f0f0ff]`
- Full one-liner for primary surface:
  `bg-gradient-to-b from-[#fafafa] to-white min-h-screen`

### 2) Floating Card

The signature component: an elevated card that appears to hover above the surface with a soft shadow and ambient glow.

- Card surface: `bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#e5e5e5]/60`
- Elevated card: `bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#e5e5e5]/50`
- Floating card with glow: `bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,122,255,0.08)] border border-[#e5e5e5]/40`
- Glass card: `bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/60`
- Full one-liner:
  `bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#e5e5e5]/60`

### 3) Ambient Glow

Soft colored light radiating from behind or beneath elements. The glow is subtle — visible, never overwhelming.

- Blue glow behind card: `before:content-[''] before:absolute before:inset-0 before:bg-[#007aff] before:opacity-[0.06] before:blur-3xl before:rounded-3xl before:-z-10`
- Ambient glow circle: `bg-[#007aff] blur-[80px] opacity-[0.08] absolute w-64 h-64 rounded-full`
- Glow on hover: `hover:shadow-[0_8px_40px_rgba(0,122,255,0.12)] hover:border-[#007aff]/20`
- Gradient glow background: `bg-[radial-gradient(ellipse_at_top,#007aff08,transparent_60%)]`
- Multiple ambient sources: stack radial gradients at different positions:
  `bg-[radial-gradient(ellipse_at_20%_0%,#007aff06,transparent_50%),radial-gradient(ellipse_at_80%_100%,#007aff04,transparent_50%)]`
- Full ambient surface:
  `bg-gradient-to-b from-[#fafafa] to-white bg-[radial-gradient(ellipse_at_50%_0%,#007aff06,transparent_60%)]`

### 4) Glass Panel

Semi-transparent panels with backdrop blur that feel like frosted glass floating above the content.

- Basic glass: `bg-white/50 backdrop-blur-xl rounded-2xl border border-white/70 shadow-sm`
- Dark glass: `bg-[#1a1a1a]/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg`
- Glass with subtle tint: `bg-[#007aff]/5 backdrop-blur-xl rounded-2xl border border-[#007aff]/10`
- Glass panel with content: `bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)]`
- Full one-liner:
  `bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)]`

### 5) Clean Rounded Container

Containers with generous border-radius that feel like they belong in a premium product.

- Primary container: `bg-white rounded-3xl p-6 shadow-sm border border-[#e5e5e5]/50`
- Section container: `bg-gradient-to-b from-[#fafafa] to-white rounded-[2rem] p-8 border border-[#e5e5e5]/40`
- Inset container: `bg-[#f5f5f5] rounded-2xl p-4`
- Bento cell: `bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-[#e5e5e5]/40`
- Full one-liner for bento grid cell:
  `bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-[#e5e5e5]/40`

### 6) Subtle Mesh Gradient Background

Full-viewport background with barely-visible radial gradients creating a soft, luminous atmosphere.

- Primary mesh: `bg-[radial-gradient(ellipse_at_20%_0%,#007aff06,transparent_50%),radial-gradient(ellipse_at_80%_20%,#007aff04,transparent_50%),radial-gradient(ellipse_at_50%_100%,#007aff03,transparent_50%)] bg-gradient-to-b from-[#fafafa] to-white`
- Warm mesh: `bg-[radial-gradient(ellipse_at_30%_10%,#f5a62304,transparent_50%),radial-gradient(ellipse_at_70%_80%,#007aff04,transparent_50%)] bg-[#fafafa]`
- Cool mesh: `bg-[radial-gradient(ellipse_at_40%_20%,#007aff05,transparent_40%),radial-gradient(ellipse_at_80%_70%,#5856d604,transparent_40%)] bg-[#f5f5f5]`
- Animated subtle mesh: `bg-[length:200%_200%] animate-[mesh_20s_ease_infinite] bg-[radial-gradient(ellipse_at_20%_0%,#007aff06,transparent_50%)]`
- Full ambient viewport:
  `min-h-screen bg-gradient-to-b from-[#fafafa] to-white bg-[radial-gradient(ellipse_at_20%_0%,#007aff06,transparent_50%),radial-gradient(ellipse_at_80%_20%,#007aff04,transparent_50%)]`

### 7) Minimal Icon Container

Small, clean icon containers with subtle background tint and rounded corners.

- Icon on white: `bg-[#f5f5f5] rounded-2xl p-3 text-[#007aff]`
- Icon on accent: `bg-[#007aff]/10 rounded-2xl p-3 text-[#007aff]`
- Icon with glow: `bg-[#007aff]/10 rounded-2xl p-3 text-[#007aff] shadow-[0_0_20px_rgba(0,122,255,0.1)]`
- Icon on glass: `bg-white/60 backdrop-blur-sm rounded-2xl p-3 text-[#1a1a1a] border border-white/50`
- Full one-liner:
  `bg-[#007aff]/10 rounded-2xl p-3 text-[#007aff] shadow-[0_0_20px_rgba(0,122,255,0.1)]`

## Color Palette System

Futuristic clean uses a restrained palette with one strong accent. Every color exists in harmony.

### Surface Palette

| Name | Hex | Usage |
|------|-----|-------|
| surface white | `#fafafa` | Primary background, elevated surfaces |
| surface gray | `#f5f5f5` | Secondary background, inset containers |
| surface pure | `#ffffff` | Cards, panels, floating elements |
| surface warm | `#fafaf8` | Warm variant background |

### Text Palette

| Name | Hex | Usage |
|------|-----|-------|
| text primary | `#1a1a1a` | Headings, primary content |
| text secondary | `#6a6a6a` | Body text, descriptions, labels |
| text tertiary | `#9a9a9a` | Captions, metadata, disabled text |

### Accent Palette

| Name | Hex | Usage |
|------|-----|-------|
| accent blue | `#007aff` | Primary accent, CTAs, links, icons |
| accent purple | `#5856d6` | Secondary accent, gradients, highlights |
| accent teal | `#30b0c7` | Tertiary accent, status indicators |
| accent green | `#34c759` | Success states, positive indicators |

### Glow and Shadow Palette

| Name | Value | Usage |
|------|-------|-------|
| glow blue | `#007aff20` | Ambient glow behind blue-accented elements |
| glow purple | `#5856d618` | Ambient glow behind purple-accented elements |
| shadow soft | `0_4px_30px_rgba(0,0,0,0.04)` | Default floating card shadow |
| shadow medium | `0_8px_40px_rgba(0,0,0,0.06)` | Elevated card shadow |
| shadow elevated | `0_16px_60px_rgba(0,0,0,0.08)` | Hero element shadow |
| border light | `#e5e5e5` | Default border color, dividers |

### Border and Divider Palette

| Name | Hex | Usage |
|------|-----|-------|
| border light | `#e5e5e5` | Card borders, dividers, subtle outlines |
| border focus | `#007aff` | Focus rings, active indicators |
| border glass | `white/60` | Glass panel borders |
| divider | `#e5e5e5/50` | Horizontal dividers, section separators |

### Color Harmony Rules

- Never use more than two accent colors in a single component. One primary, one secondary maximum.
- Ambient glows must use the same hue as the nearest accent element. Blue accent = blue glow.
- Text on `#fafafa` must maintain WCAG AA (4.5:1). `#1a1a1a` on `#fafafa` = 15.4:1. `#6a6a6a` on `#fafafa` = 4.8:1. Both pass.
- Shadows are never black (`#000000`). Use `rgba(0,0,0,0.04)` to `rgba(0,0,0,0.08)` for softness.
- Background gradients shift by no more than 3 lightness stops. Drastic gradients break the clean aesthetic.

## Typography Recommendations

Futuristic clean demands typographic restraint. One family, deliberate weights.

### Primary Typeface

- **Inter**: geometric sans-serif with excellent legibility at all sizes. The clean design standard.
- Use `font-normal` (400) for body, `font-medium` (500) for emphasis, `font-semibold` (600) for subheadings, `font-bold` (700) for headings.
- Never use `font-black` or `font-light` — they break the consistent weight rhythm.

### Display Typeface (headings only)

- **Inter** at `font-semibold` or `font-bold` with `tracking-tight` for headings up to `text-5xl`.
- **SF Pro Display** or **Plus Jakarta Sans** as premium alternatives for hero text.
- **Outfit** for a slightly warmer, more human feel in headings.

### Mono Typeface (code and labels)

- **JetBrains Mono** or **SF Mono**: `font-mono text-sm` for code blocks and technical labels.
- Use sparingly. Mono text is functional, not decorative.

### Typography Scale

- Hero: `text-5xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a]`
- Section heading: `text-3xl font-semibold tracking-tight text-[#1a1a1a]`
- Card heading: `text-xl font-semibold text-[#1a1a1a]`
- Body: `text-base text-[#6a6a6a] leading-relaxed`
- Small body: `text-sm text-[#6a6a6a]`
- Caption: `text-xs text-[#9a9a9a] uppercase tracking-wider font-medium`
- Label: `text-xs text-[#6a6a6a] uppercase tracking-widest font-medium`

### Typography Rules

- Maximum two typeface families in any composition. One for all text, one for code only.
- Heading color is always `#1a1a1a`. Body color is always `#6a6a6a`. Caption color is always `#9a9a9a`.
- Line height: `leading-relaxed` (1.625) for body text, `leading-tight` (1.25) for headings.
- Letter spacing: `tracking-tight` for headings, `tracking-normal` for body, `tracking-wider` or `tracking-widest` for small labels.
- Never rotate text. Never skew text. Never use decorative text effects.
- Maximum line length for body text: 65-75 characters. Use `max-w-prose` or `max-w-2xl`.

## Component Architecture Pattern

Futuristic clean components follow a deliberate layering order:

1. **Ambient background** — subtle mesh gradient with soft radial glows on the viewport.
2. **Content surface** — smooth gradient surface (`from-[#fafafa] to-white`).
3. **Section containers** — rounded containers with soft borders separating content areas.
4. **Floating cards** — elevated cards with soft shadows and optional ambient glow.
5. **Glass panels** — semi-transparent panels with backdrop blur for overlays and modals.
6. **Typography** — clean, consistent hierarchy with Inter as the primary typeface.
7. **Interactive elements** — buttons and links with smooth transitions and subtle glow on hover.
8. **Ambient glow elements** — colored blurs positioned behind or around accent elements.

Every layer adds depth without weight. The composition feels like light and air, not mass and gravity.

### Composition Rules

- Maximum vertical spacing between sections: `py-16 md:py-24`.
- Maximum horizontal padding for content: `px-6 md:px-8 lg:px-12`.
- Cards within a grid: `gap-4 md:gap-6` (generous, not cramped).
- Section background alternation: alternate between `from-[#fafafa]` and `from-white` for visual rhythm.
- Glass panels appear only as overlays or modals, never as base layout elements.

## Interaction Rules

- Default state: smooth, elevated, softly glowing.
- Hover state: subtle lift and glow amplification — the element rises slightly and its ambient glow intensifies.
  - Floating card: `hover:shadow-[0_12px_50px_rgba(0,0,0,0.08)] hover:border-[#007aff]/10 transition-all duration-300 ease-out`
  - Button: `hover:shadow-[0_4px_20px_rgba(0,122,255,0.15)] hover:bg-[#0066cc] transition-all duration-200 ease-out`
  - Glass panel: `hover:bg-white/60 hover:border-white/70 transition-all duration-300`
- Active state: slight compression to simulate depth.
  - Button: `active:scale-[0.98] active:shadow-[0_2px_10px_rgba(0,122,255,0.1)] transition-all duration-100`
  - Card: `active:scale-[0.99]`
- Focus state: `focus:ring-2 focus:ring-[#007aff]/40 focus:ring-offset-2 focus:ring-offset-white` (soft blue ring, clean offset).
- Transitions: `transition-all duration-200 ease-out` (smooth, never snappy). Hover transitions at `duration-300 ease-out` for extra softness.
- Animations: fade-in on scroll (`animate-[fadeIn_0.5s_ease-out]`), subtle pulse on ambient glow (`animate-[pulse_4s_ease-in-out_infinite]`), smooth slide-up for content reveal.
- Respect `prefers-reduced-motion`: disable ambient pulse, keep all other transitions functional.

## Reusable Tailwind Tokens

- **Floating card:** `bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#e5e5e5]/60`
- **Elevated card:** `bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#e5e5e5]/50`
- **Glass panel:** `bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)]`
- **Primary button:** `bg-[#007aff] text-white font-medium text-sm px-6 py-3 rounded-2xl shadow-[0_2px_12px_rgba(0,122,255,0.2)] hover:bg-[#0066cc] hover:shadow-[0_4px_20px_rgba(0,122,255,0.3)] active:scale-[0.98] transition-all duration-200 ease-out`
- **Secondary button:** `bg-[#007aff]/10 text-[#007aff] font-medium text-sm px-6 py-3 rounded-2xl hover:bg-[#007aff]/15 transition-all duration-200 ease-out`
- **Ghost button:** `bg-transparent text-[#007aff] font-medium text-sm px-6 py-3 rounded-2xl border border-[#e5e5e5] hover:border-[#007aff]/30 hover:bg-[#007aff]/5 transition-all duration-200 ease-out`
- **Section heading:** `text-3xl font-semibold tracking-tight text-[#1a1a1a]`
- **Card heading:** `text-xl font-semibold text-[#1a1a1a]`
- **Body text:** `text-base text-[#6a6a6a] leading-relaxed`
- **Caption:** `text-xs text-[#9a9a9a] uppercase tracking-wider font-medium`
- **Icon container:** `bg-[#007aff]/10 rounded-2xl p-3 text-[#007aff] shadow-[0_0_20px_rgba(0,122,255,0.1)]`
- **Bento cell:** `bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-[#e5e5e5]/40`
- **Ambient glow:** `bg-[#007aff] blur-[80px] opacity-[0.08] absolute w-64 h-64 rounded-full -z-10`
- **Surface gradient:** `bg-gradient-to-b from-[#fafafa] to-white`
- **Divider:** `h-px bg-[#e5e5e5]/50`

## Quality Checklist (must pass)

- Surfaces use subtle gradients, never flat solid fills. Every surface has at least a two-stop gradient or ambient mesh.
- Shadows are soft and colored-tinted (never black `#000000`). Use `rgba(0,0,0,0.04)` to `rgba(0,0,0,0.08)`.
- Border-radius is generous: `rounded-2xl` minimum on cards, `rounded-3xl` preferred on containers.
- Ambient glow is present on at least one accent element per visible section.
- Typography uses a single typeface family (Inter or equivalent) with deliberate weight variation.
- Heading color is `#1a1a1a`, body is `#6a6a6a`, caption is `#9a9a9a` — no deviation.
- Backdrop blur is applied on glass panels and semi-transparent cards.
- Transitions are smooth (`ease-out`) and never snappy or bouncy.
- Color palette is restricted: white/gray surfaces, blue accent, soft shadows. No more than two accent colors per component.
- Text contrast passes WCAG AA: `#1a1a1a` on `#fafafa` = 15.4:1, `#6a6a6a` on `#fafafa` = 4.8:1.
- No hard borders, sharp corners, or aggressive shadows exist anywhere.
- Spacing is generous: `gap-4` minimum between cards, `py-8` minimum between sections.
- Buttons have clear hover and active states with scale or shadow changes.
- The composition feels light, airy, and premium — not heavy, dense, or cluttered.

## Anti-Patterns

- Hard borders (`border-2 border-black` or `border-4`) — futuristic clean uses `border border-[#e5e5e5]/50` maximum.
- Sharp corners (`rounded-none` or `rounded-sm`) — containers use `rounded-2xl` to `rounded-3xl`.
- Heavy shadows with black (`shadow-xl` with default black) — use `rgba(0,0,0,0.04)` to `rgba(0,0,0,0.08)`.
- Flat solid fills (`bg-white` without gradient) — always add at least `bg-gradient-to-b from-[#fafafa] to-white`.
- Aggressive color clash — maximalist behavior, not clean design.
- Rotated or skewed text — futuristic clean is aligned, level, and precise.
- Multiple font families fighting for attention — one typeface, deliberate weights.
- Snappy or bouncy transitions (`duration-100`, `ease-in`) — use `duration-200` to `duration-300` with `ease-out`.
- Empty whitespace without ambient glow or mesh gradient filling it — surfaces must breathe with soft light.
- `font-black` or extreme weight variation — stick to 400-700 weight range.
- Dense, cramped layouts with minimal spacing — generous padding and gaps are mandatory.
- Neon colors or high-saturation accents — the accent palette is soft blue, not hot pink or acid green.
- Text shadows or text effects — typography is clean, not decorative.
- Dark mode as the default (this style is light-first; dark glass panels are overlays, not bases).
- Bouncy, playful animations — motion is smooth, gentle, and fade-based.

## Accessibility Considerations

- Futuristic clean is inherently accessible due to high contrast ratios and clean typography. Maintain this advantage.
- Text on `#fafafa` surfaces: `#1a1a1a` = 15.4:1 (AAA), `#6a6a6a` = 4.8:1 (AA), `#9a9a9a` = 3.1:1 (use only for large text or decorative captions).
- Focus states must be visible: `ring-2 ring-[#007aff]/40 ring-offset-2 ring-offset-white`. Never remove focus indicators.
- Glass panels with `backdrop-blur` must maintain text contrast. If blur reduces legibility, increase text weight or add a solid inner backdrop.
- Ambient glow elements must be decorative only (`aria-hidden="true"`). They carry no information.
- Buttons must have minimum touch target of 44x44px (`min-h-[44px] min-w-[44px]`).
- Animated ambient glow must respect `prefers-reduced-motion: reduce` — stop pulse animations, keep transitions.
- Color alone must not convey state. Pair accent colors with icons or text labels (e.g., green checkmark + "Success" text, not just green background).
- Semantic HTML: use `<main>`, `<section>`, `<article>`, `<nav>` with proper headings hierarchy (`h1` > `h2` > `h3`).
- Ensure `aria-label` on icon-only buttons and interactive elements where the icon has no visible text companion.
- Backdrop blur on glass panels may cause performance issues on low-end devices — provide a solid fallback background color.
