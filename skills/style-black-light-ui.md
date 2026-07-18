---
name: black-light-ui
description: Build black light / UV reactive UI components (fluorescent neon paint under UV, glowing posters, reactive tape accents, UV-illuminated body paint patterns, blacklight concert atmosphere, neon-reactive typography) with ultra-violet dark backgrounds, fluorescent color pops that simulate UV reactivity, and the psychedelic glow of a blacklight environment. Trigger this skill when the user asks for blacklight design, UV reactive UI, black light poster, neon paint glow, blacklight concert, fluorescent UI, or UV-reactive interfaces.
---

# Black Light UI

Use this skill to design and implement psychedelic, UV-reactive interfaces inspired by blacklight environments: fluorescent paint stroke accents, glowing reactive tape lines, neon-reactive typography with text-shadow glow, blacklight poster frames with fluorescent borders, abstract body paint pattern SVG accents, and the deep ultraviolet darkness of a blacklight venue.

## Core Material Recipes

### 1) UV Dark Background Panel

The deep near-black surface that makes fluorescent colors pop like UV-reactive paint.

- `bg-[#0a0014] p-6 relative overflow-hidden shadow-[inset_0_0_80px_rgba(106,0,255,0.08)]`.
- Subtle UV ambient: `before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(106,0,255,0.05)_0%,transparent_70%)] before:pointer-events-none`.

### 2) Fluorescent Paint Stroke Accent

A vibrant paint-stroke shape that simulates UV-reactive paint splatters and strokes.

- `bg-gradient-to-r from-[#ff20ff] via-[#39ff14] to-[#00ccff] h-2 w-full rounded-full shadow-[0_0_15px_rgba(255,32,255,0.6),0_0_30px_rgba(57,255,20,0.3)]`.
- As accent bar: `h-1 bg-[#39ff14] shadow-[0_0_10px_#39ff14,0_0_20px_rgba(57,255,20,0.4)]` placed below headings.

### 3) Reactive Tape Line

Bright glowing strip that mimics UV-reactive tape applied to surfaces.

- `h-[3px] bg-[#ff6600] shadow-[0_0_6px_#ff6600,0_0_12px_rgba(255,102,0,0.5),0_0_24px_rgba(255,102,0,0.2)]` as a horizontal divider.
- Vertical variant: `w-[3px] h-full bg-[#00ccff] shadow-[0_0_6px_#00ccff,0_0_12px_rgba(0,204,255,0.5)]`.

### 4) Neon-Reactive Typography

Text that glows like fluorescent lettering under UV light.

- Heading: `font-['Space_Mono'] text-[#ff20ff] text-4xl font-bold [text-shadow:0_0_7px_#ff20ff,0_0_14px_#ff20ff,0_0_28px_rgba(255,32,255,0.4)]`.
- Subheading: `font-['Space_Mono'] text-[#39ff14] text-xl [text-shadow:0_0_5px_#39ff14,0_0_10px_#39ff14,0_0_20px_rgba(57,255,20,0.3)]`.
- Body: `font-['Space_Mono'] text-[#ccbbff] text-sm [text-shadow:0_0_2px_rgba(106,0,255,0.3)]`.

### 5) Blacklight Poster Frame

A dark card with a fluorescent border that simulates a UV-reactive poster.

- Outer glow: `bg-[#0a0014] border-2 border-[#ff20ff] p-6 shadow-[0_0_15px_rgba(255,32,255,0.3),inset_0_0_15px_rgba(106,0,255,0.08)]`.
- Neon border accent: `border-t-4 border-t-[#39ff14] shadow-[0_-2px_10px_rgba(57,255,20,0.3)]`.

### 6) Body Paint Pattern SVG Accent

Abstract UV-reactive shapes rendered as SVG overlays that simulate body-paint-style neon patterns.

- Container: `relative w-full h-32 overflow-hidden`.
- SVG accent: `<svg class="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 128" fill="none"><path d="M0 64 C50 20 100 100 150 50 S250 80 300 40 S400 90 400 64" stroke="#ff20ff" stroke-width="2" filter="url(#glow)"/></svg>` with a `<defs><filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| UV Dark | `#0a0014` | Primary background (deep near-black) |
| Fluorescent Pink | `#ff20ff` | Primary neon accent, headings |
| Fluorescent Green | `#39ff14` | Secondary accent, reactive elements |
| Fluorescent Orange | `#ff6600` | Tape lines, warning accents |
| Fluorescent Blue | `#00ccff` | Tertiary accent, links, interactive |
| Fluorescent Yellow | `#ffff00` | High-emphasis highlights |
| UV Purple | `#6a00ff` | Ambient glow, deep accents |
| Neon White-Glow | `#e8e0ff` | Text on dark, soft white with UV tint |

Rules: Fluorescent-on-UV-dark is the palette. Every accent color must GLOW with layered text-shadows or box-shadows. The background must remain deep near-black (#0a0014) to sell the blacklight effect. Colors should feel like they are being illuminated by an invisible UV source.

## Typography Recommendations

- **Primary:** Space Mono (geometric monospace that reads as technical neon signage).
- **Alternative:** Share Tech Mono, Fira Code (clean monospace with UV-poster feel).
- **Headings:** `font-['Space_Mono'] text-[#ff20ff] text-4xl font-bold [text-shadow:0_0_7px_#ff20ff,0_0_14px_#ff20ff,0_0_28px_rgba(255,32,255,0.4)]`.
- ALL typography uses layered text-shadow glow effects on dark backgrounds.
- No anti-aliased soft rendering — text should feel sharp and luminous.

## Component Architecture Pattern

- Dark container panels with `bg-[#0a0014]` and subtle radial UV ambient gradients.
- Fluorescent accent bars (`h-1` or `h-2`) with triple-layered box-shadow glow.
- Reactive tape dividers (`h-[3px]`) with intense colored glow as section separators.
- Blacklight poster cards with neon-colored borders and inset UV ambient shadow.
- SVG body-paint pattern accents as decorative overlays with Gaussian blur glow filters.
- Neon-reactive headings using triple-layered text-shadow in fluorescent colors.

## Interaction Rules

- Hover glow amplification: increase box-shadow spread by 50% on interactive elements.
- Pressed state: reduce glow spread to 0 and add inset shadow for a "UV dimming" effect.
- Tape line pulse: animate glow intensity with `animate-[pulse_2s_ease-in-out_infinite]`.
- Fluorescent accent on focus: `focus:shadow-[0_0_20px_rgba(57,255,20,0.6)]` for keyboard navigation.
- Poster card hover: translate up 2px and increase border glow spread.
- All transitions use `transition-all duration-200` for smooth glow scaling.

## Reusable Tailwind Tokens

- UV dark panel: `bg-[#0a0014] shadow-[inset_0_0_80px_rgba(106,0,255,0.08)]`.
- Fluorescent paint bar: `h-1 bg-[#39ff14] shadow-[0_0_10px_#39ff14,0_0_20px_rgba(57,255,20,0.4)]`.
- Reactive tape: `h-[3px] bg-[#ff6600] shadow-[0_0_6px_#ff6600,0_0_12px_rgba(255,102,0,0.5)]`.
- Neon heading: `text-[#ff20ff] [text-shadow:0_0_7px_#ff20ff,0_0_14px_#ff20ff,0_0_28px_rgba(255,32,255,0.4)]`.
- Poster card: `bg-[#0a0014] border-2 border-[#ff20ff] shadow-[0_0_15px_rgba(255,32,255,0.3)]`.
- Glow focus ring: `focus:ring-4 focus:ring-[#39ff14]/40`.

## Quality Checklist

- Deep UV near-black background (#0a0014) is the dominant surface color.
- At least one fluorescent paint stroke accent bar with triple-layered glow.
- Reactive tape line dividers present between sections.
- Neon-reactive typography with layered text-shadow glow on all headings.
- Blacklight poster frame card with fluorescent border.
- SVG body-paint pattern accent as decorative element.
- All fluorescent colors glow (box-shadow or text-shadow on every accent).
- Color palette strictly uses fluorescent neon on UV dark — no muted tones.
- The aesthetic reads as a blacklight venue / UV-reactive environment.
- Everything feels psychedelic, luminous, and immersed in ultraviolet darkness.

## Anti-Patterns

- Light or white backgrounds (blacklight requires deep UV darkness).
- Muted or desaturated colors (fluorescent means maximum saturation under UV).
- Missing glow effects (every accent must glow — flat fluorescent is not blacklight).
- Standard drop shadows (use multi-layered colored shadows that simulate UV emission).
- Sans-serif modern fonts without glow (Space Mono or equivalent with text-shadow is required).
- Missing reactive tape dividers (tape lines are a signature blacklight element).
- Gradient backgrounds (blacklight is deep dark with glowing accents, not gradient fills).
- Missing SVG or decorative pattern accents (body paint patterns sell the UV-reactive theme).
- Colors without contrast against the background (fluorescent must POP against #0a0014).
- Smooth or soft UI edges (blacklight is sharp fluorescent edges against void darkness).

## Accessibility Considerations

- Fluorescent colors on #0a0014 provide strong contrast (WCAG AAA for most pairs).
- Neon white-glow (#e8e0ff) for body text ensures readability over deep UV dark.
- Focus states use high-visibility fluorescent green glow rings.
- Text-shadow glow must not blur text legibility — keep base color solid beneath glow.
- Touch targets must be adequate (minimum 44x44px) for interactive tape and accent elements.
- Animated glow effects must respect `prefers-reduced-motion`.
- Fluorescent color combinations (pink/green/blue) should avoid adjacent placement for color-blind users — separate with reactive tape lines.
- SVG decorative accents must include `aria-hidden="true"` to avoid screen reader noise.
