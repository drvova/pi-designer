---
name: dead-mall-ui
description: Build dead mall / vaporwave mall UI components (abandoned 90s shopping mall, flickering fluorescent lights, empty food court, faded terrazzo floors, dead fountain, escalator to nowhere, sun through skylight over empty corridors) with faded retail nostalgia, fluorescent hum, and the eerie beauty of consumer architecture after the consumers left. Trigger this skill when the user asks for dead mall design, abandoned mall aesthetic, vaporwave mall, faded retail UI, 90s shopping mall decay, empty food court, dead fountain, escalator to nowhere, or eerie nostalgic consumer interfaces.
---

# Dead Mall UI

Use this skill to design and implement eerie, melancholic interfaces inspired by the abandoned 1990s shopping mall: faded terrazzo floors, flickering fluorescent lights, skylight corridors stretching to emptiness, dead fountains with cracked tile, escalators to nowhere, and faded retail signage for stores that no longer exist — the ghost of consumer abundance.

## Non-Negotiable Foundations

- Dead mall UI evokes an abandoned 1990s shopping mall: a space designed for abundance, commerce, and community now emptied of all three. The mood is nostalgic, eerie, and melancholic.
- Faded terrazzo flooring is the SIGNATURE surface — speckled composite like terrazzo but muted, stained, and worn. Colors are desaturated and dusty, not bright.
- Flickering fluorescent lighting is the signature environmental effect — overhead tubes that hum, dim, and stutter, casting uneven institutional light.
- Skylight natural-light gradients suggest a glass ceiling pouring daylight onto empty corridors, creating warm/cool pools of light on faded surfaces.
- The palette is pastel-but-desaturated 90s mall: faded teal, dusty rose, cream, gray-beige, and institutional white. Every color looks sun-bleached and aged.
- Dead fountain imagery — cracked tile basins, dry spouts, stagnant water stains — provides the emotional centerpiece of emptiness.
- Faded retail signage (STORE CLOSING, GOING OUT OF BUSINESS, 50% OFF EVERYTHING) adds narrative decay.
- Perspective corridors with vanishing points suggest depth and emptiness — the mall goes on forever but no one is shopping.
- Motion is slow, stuttering, and institutional: fluorescent flicker, ceiling fan drift, escalator hum without passengers.
- The interface should feel like you arrived after closing — permanently.

## Core Material Recipes

### 1) Faded Terrazzo Floor Background

The signature surface: worn, stained terrazzo with desaturated chips.

CSS approach using muted radial gradients:
```css
.dead-terrazzo-bg {
  background-color: #b8b0a0;
  background-image:
    radial-gradient(ellipse 7px 5px at 12% 22%, #6a7a78 50%, transparent 51%),
    radial-gradient(ellipse 5px 4px at 28% 58%, #9a7a82 50%, transparent 51%),
    radial-gradient(ellipse 6px 4px at 48% 32%, #7a8a7a 50%, transparent 51%),
    radial-gradient(ellipse 4px 6px at 68% 72%, #8a7a6a 50%, transparent 51%),
    radial-gradient(ellipse 5px 3px at 82% 18%, #6a6a7a 50%, transparent 51%),
    radial-gradient(ellipse 4px 5px at 15% 82%, #7a7a6a 50%, transparent 51%),
    radial-gradient(ellipse 3px 3px at 58% 88%, #8a6a7a 50%, transparent 51%),
    radial-gradient(ellipse 4px 4px at 88% 48%, #6a8a7a 50%, transparent 51%);
  background-size: 180px 180px;
  opacity: 0.85;
}
```

Tailwind approximation:
- `bg-[#b8b0a0] bg-[radial-gradient(#6a7a78_1.5px,transparent_1.5px),radial-gradient(#9a7a82_1px,transparent_1px),radial-gradient(#7a8a7a_1.5px,transparent_1.5px)] bg-[size:28px_28px,22px_22px,32px_32px] bg-[position:0_0,8px_4px,4px_12px] opacity-85`.

### 2) Flickering Fluorescent Light Overlay

Institutional overhead lighting that stutters and dims.

- Light panel: `bg-gradient-to-b from-[#e8e4d8]/40 via-transparent to-transparent h-16 w-full`.
- Flicker overlay: `absolute inset-0 bg-[#f0ede4]/10 animate-[fluorescent-flicker_6s_steps(1,end)_infinite] pointer-events-none`.
- Hum glow: `shadow-[0_0_40px_rgba(232,228,216,0.15)]`.

Fluorescent flicker keyframes:
```css
@keyframes fluorescent-flicker {
  0%, 100% { opacity: 0.8; }
  72% { opacity: 0.8; }
  73% { opacity: 0.2; }
  74% { opacity: 0.8; }
  85% { opacity: 0.8; }
  86% { opacity: 0.4; }
  87% { opacity: 0.8; }
  88% { opacity: 0.15; }
  89% { opacity: 0.8; }
}
```

### 3) Skylight Corridor Panel

Content surface lit by overhead skylight gradient.

- Panel: `bg-gradient-to-b from-[#d4d0c4] via-[#c8c0b4] to-[#b8b0a4] rounded-lg p-6 shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-[#a8a098]`.
- Skylight highlight: `bg-gradient-to-b from-[#f0ece0]/30 to-transparent rounded-t-lg`.
- The top edge is slightly warmer (sunlight), bottom slightly cooler (shadow).

### 4) Faded Retail Sign Card

Store signage with aged, sun-bleached appearance.

- Sign panel: `bg-[#c4b8a8] border-2 border-[#a89888] rounded-sm p-4 shadow-[0_1px_6px_rgba(0,0,0,0.1)]`.
- Sign text: `text-[#7a6a5a] font-bold text-xl uppercase tracking-wide opacity-80` (faded ink).
- Going-out-of-business accent: `text-[#9a6a5a] font-black text-2xl uppercase`.
- Tape marks (corner): `absolute top-0 left-0 w-6 h-4 bg-[#e8d4a0]/40 rotate-[-12deg] rounded-sm`.

### 5) Dead Fountain Element

Cracked, dry fountain basin — the emotional centerpiece of emptiness.

- Basin: `rounded-[50%] bg-gradient-to-b from-[#a09888] via-[#908878] to-[#807868] shadow-[inset_0_4px_12px_rgba(0,0,0,0.3)] p-4 relative`.
- Cracked tile pattern: `bg-[repeating-conic-gradient(from_0deg,#908878_0deg_15deg,#888070_15deg_30deg)] opacity-60`.
- Dry center spout: `w-4 h-8 bg-[#7a7268] rounded-t-sm mx-auto shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]`.
- Water stain: `bg-[radial-gradient(ellipse_at_center,#a09888_30%,transparent_70%)] opacity-40`.

### 6) Escalator Divider

Perspective divider suggesting a stalled escalator going nowhere.

- `bg-gradient-to-b from-[#9a9288] via-[#a8a098] to-[#8a8278] h-12 relative overflow-hidden`.
- Step lines: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_8px,rgba(0,0,0,0.08)_8px,rgba(0,0,0,0.08)_10px)]`.
- Vanishing perspective: `bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_100%)]`.
- Rubber handrail: `h-2 bg-[#3a3a3a] rounded-full`.

### 7) Empty Corridor Background

Vanishing-point perspective suggesting endless empty hallway.

```css
.corridor-perspective {
  background:
    linear-gradient(to bottom,
      #c4c0b4 0%,
      #b8b4a8 30%,
      #aea8a0 60%,
      #9a948a 100%);
  position: relative;
}
.corridor-perspective::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 40%, transparent 5%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.2) 60%);
}
```

### 8) Dead Mall Button

Institutional, slightly worn button.

- Primary: `bg-[#7a9090] text-[#e8e4d8] font-medium rounded-md px-6 py-3 border border-[#6a8080] shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:bg-[#6a8484] transition-colors duration-300`.
- Faded rose variant: `bg-[#a08080] text-[#e8e4d8] border border-[#906a6a]`.
- Ghost (closed sign): `bg-transparent text-[#7a6a5a] font-mono border border-[#a89888] px-6 py-3 opacity-70 hover:opacity-100`.

### 9) Mall Directory Panel

Store directory with faded entries and vacant slots.

- Panel: `bg-[#d0ccc0] border border-[#b0a898] rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)]`.
- Active store: `text-[#5a6a6a] font-mono text-sm`.
- Vacant store: `text-[#a8a098] font-mono text-sm italic opacity-60` (faded, struck-through).
- VACANT label: `text-[#9a8a7a] font-mono text-xs uppercase tracking-widest`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Faded Teal | `#7a9090` | Primary accent, buttons |
| Dusty Rose | `#a08080` | Secondary accent, signage |
| Institutional Cream | `#e8e4d8` | Text on dark, light surfaces |
| Gray-Beige | `#b8b0a0` | Terrazzo matrix, backgrounds |
| Warm Taupe | `#c4b8a8` | Retail sign panels |
| Concrete Gray | `#9a948a` | Corridor shadows, depth |
| Faded Ink | `#5a6a6a` | Body text (muted teal-gray) |
| Aged Signage | `#7a6a5a` | Secondary text, labels |
| Skylight White | `#f0ece0` | Light highlights, skylight glow |
| Dead Fountain Stone | `#908878` | Fountain, basin surfaces |
| Deep Shadow | `#3a3a36` | Escalator, rubber, deep contrast |
| Vacant Gray | `#a8a098` | Vacant store text, faded entries |

Rules: The palette should feel SUN-BLEACHED and AGED — every color is desaturated 15-20% from its vivid 90s counterpart. Teal is dusty, rose is faded, cream is yellowed. No bright or vibrant colors. The combination should evoke walking through an empty mall at dusk — the fluorescent lights still on but the people long gone.

## Typography Recommendations

Dead mall typography is institutional 90s retail signage — dated, utilitarian, and slightly degraded:

- **Primary:** Helvetica, Arial, or system-ui (the default 90s retail signage font — generic is correct).
- **Display headings:** Cooper Hewitt, Oswald, or DIN Condensed (mall signage heading font).
- **Store directory:** `font-mono text-sm` (institutional directory listing).
- **Labels:** `font-mono text-xs uppercase tracking-widest` (EXIT sign, department label style).
- **Sale signage:** `font-black uppercase text-2xl` (going-out-of-business bold).
- **Vacant entries:** `font-mono text-sm italic opacity-60` (faded, ghostly).
- Avoid web fonts that feel modern or elegant — dead mall typography should feel like it was installed in 1994 and never updated.

## Component Architecture Pattern

1. Faded terrazzo floor background (worn, muted, stained).
2. Flickering fluorescent light overlay at the top (institutional, stuttering).
3. Skylight corridor panels for content (warm top, cool bottom light gradient).
4. Faded retail sign cards for headings and CTAs (aged signage).
5. Dead fountain element as a centerpiece or divider (cracked, dry).
6. Escalator dividers between sections (perspective, stalled).
7. Empty corridor vanishing-point backgrounds for depth.
8. Mall directory panels for navigation (active vs vacant entries).
9. Generous negative space — the interface should feel underpopulated and too large.

## Interaction Rules

- Default state: faded, institutional, slightly eerie.
- Hover: barely perceptible warm-up (like fluorescent light brightening slightly).
  - `hover:bg-[#6a8484] transition-colors duration-300` (subtle, slow).
- Active: `active:bg-[#5a7474]` (slight darkening).
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#7a9090]/50` (thin, institutional ring).
- Transitions: `transition-all duration-500` (slow, institutional — things take their time).
- Fluorescent flicker: occasional opacity drops on light overlay elements (see keyframes).
- Interactions should feel slightly hollow — rewarding but melancholic, like finding the last open store.
- No energetic or satisfying animations. Everything moves slowly, if at all.

## Reusable Tailwind Tokens

- Faded terrazzo: `bg-[#b8b0a0] bg-[radial-gradient(#6a7a78_1.5px,transparent_1.5px),radial-gradient(#9a7a82_1px,transparent_1px)] bg-[size:28px_28px,22px_22px] opacity-85`
- Fluorescent light: `bg-gradient-to-b from-[#e8e4d8]/40 via-transparent to-transparent` with flicker overlay.
- Skylight panel: `bg-gradient-to-b from-[#d4d0c4] via-[#c8c0b4] to-[#b8b0a4] rounded-lg border border-[#a8a098] shadow-[0_2px_12px_rgba(0,0,0,0.12)]`
- Retail sign: `bg-[#c4b8a8] border-2 border-[#a89888] rounded-sm p-4 shadow-[0_1px_6px_rgba(0,0,0,0.1)]`
- Dead mall button: `bg-[#7a9090] text-[#e8e4d8] rounded-md px-6 py-3 border border-[#6a8080] shadow-[0_2px_6px_rgba(0,0,0,0.15)]`
- Dead fountain: `rounded-[50%] bg-gradient-to-b from-[#a09888] via-[#908878] to-[#807868] shadow-[inset_0_4px_12px_rgba(0,0,0,0.3)]`
- Escalator divider: `bg-gradient-to-b from-[#9a9288] via-[#a8a098] to-[#8a8278] bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_8px,rgba(0,0,0,0.08)_8px,rgba(0,0,0,0.08)_10px)]`
- Vacant entry: `text-[#a8a098] font-mono text-sm italic opacity-60`

## Quality Checklist (must pass)

- Faded terrazzo pattern is present on at least one major surface (worn, muted chips).
- Color palette is desaturated 90s mall (faded teal, dusty rose, cream, gray-beige).
- Flickering fluorescent light effect on at least one element.
- At least one skylight gradient panel (warm top, cool bottom).
- Faded retail signage elements present (aged, sun-bleached).
- Dead fountain element (cracked basin, dry spout) as centerpiece or divider.
- Escalator divider with perspective steps somewhere in the layout.
- Generous negative space — the interface feels underpopulated.
- Typography is institutional 90s signage (generic, utilitarian, slightly dated).
- Mall directory with both active and VACANT entries.
- Motion is slow, institutional, and slightly eerie.
- The aesthetic reads as abandoned 1990s shopping mall — nostalgic and melancholic.
- Every color looks sun-bleached and aged (no vivid or bright colors).
- The mood is eerie beauty — a space designed for abundance now empty.

## Anti-Patterns

- Vivid or saturated colors (dead mall colors are faded, sun-bleached, aged).
- Bright cheerful palettes (dead mall is melancholic and eerie, not joyful).
- Modern polished web fonts (dead mall typography is institutional and dated).
- Satisfying, energetic interactions (dead mall feedback is slow and hollow).
- Dense, busy layouts (dead mall is sparse, empty, and too large for its content).
- Bright neon or glowing elements (dead mall lighting is fluorescent and institutional).
- Sharp, crisp shadows (dead mall shadows are soft, diffused, institutional).
- Missing the terrazzo floor (it is the signature surface — muted, not bright like terrazzo-ui).
- Missing the fluorescent flicker (the stuttering light is the signature environmental effect).
- Missing the dead fountain (the cracked, dry basin is the emotional centerpiece).
- Missing vacant/vacant entries (the absence of stores IS the aesthetic).
- Fast animations (dead mall motion is slow, stuttering, institutional).
- Missing skylight gradients (the overhead natural light defines the corridor mood).
- Warm, cozy, or welcoming atmosphere (dead mall is cold, institutional, and eerie).
- Missing the eerie quality (the unsettling emptiness IS the aesthetic, not a bug).

## Accessibility Considerations

- Desaturated palette can reduce text contrast — verify WCAG AA on all text against faded backgrounds.
- Faded ink text (`#5a6a6a`) on gray-beige surfaces (`#b8b0a0`) must meet minimum contrast ratios.
- Fluorescent flicker animations can trigger discomfort or seizures in sensitive users — MUST respect `prefers-reduced-motion` (disable all flicker, hold steady opacity).
- Flicker must not exceed 3Hz in the worst-case stutter sequence (seizure risk).
- Focus states must be visible despite muted palette: `focus:ring-2 focus:ring-[#7a9090]`.
- Vacant/vacant entries styled with opacity must still be readable if they contain real information — use `line-through` or explicit VACANT labels, not opacity alone.
- Decorative elements (fountain, escalator, terrazzo pattern, light overlay) must be `aria-hidden="true"`.
- Generous negative space aids cognitive accessibility by reducing visual noise.
- Ensure content is logically structured for screen readers despite the sparse visual layout.
- The eerie aesthetic must not compromise navigation — paths should remain clear despite the melancholic mood.
- Provide sufficient text size — faded small text compounds readability issues.
- Light overlay elements must not reduce text legibility beneath them.
