---
name: film-noir-ui
description: Build film noir UI components (high-contrast chiaroscuro lighting, venetian blind shadow stripes, smoke-filled rooms, fedora silhouettes, trench coat motifs, detective desk props, rain-slicked street reflections) with dramatic shadow overlays, stark black-and-white contrast, and the moody cynicism of 1940s crime cinema. Trigger this skill when the user asks for film noir, detective noir, 1940s crime aesthetic, chiaroscuro UI, venetian blind shadows, hardboiled interface, or crime cinema design.
---

# Film Noir UI

Use this skill to design and implement moody, high-contrast interfaces with stark black-and-white palettes, venetian blind shadow overlays, smoke haze effects, and the dramatic chiaroscuro atmosphere of 1940s crime cinema.

## Non-Negotiable Foundations

- Film noir is the visual grammar of shadow-drenched offices, rain-slicked streets, and smoke-filled rooms — translated to screen.
- The palette is stark and high-contrast: noir black, stark white, smoke gray, and venetian gold. No cheerful colors.
- Typography is high-contrast serif and condensed sans: a display serif for headlines (evoking newspaper mastheads), a condensed sans for body/UI, and a monospace for evidence tags. Three faces is the ceiling.
- Layout is dramatic and asymmetrical: strong vertical and diagonal shadows, generous negative space, and elements partially obscured by shadow overlays.
- Imagery uses extreme chiaroscuro (deep blacks, blown-out whites), venetian blind shadow stripes, and smoke haze diffusion.
- The aesthetic communicates weary cynicism — not glamour, not horror, but the moral ambiguity of a rain-soaked alley at midnight.

## Core Material Recipes

### 1) Noir Black Surface (the foundation)

Deep black surface with subtle film grain for the base environment.

- Background: `bg-[#0a0a0a]` (noir black).
- Texture: subtle film grain via SVG noise at `opacity-[0.04]`.
- Shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.8)]` (deep noir shadow).
- Border: `border border-[#1a1a1a]` (barely visible dark edge).

### 2) Venetian Blind Shadow Stripe Overlay

The signature film noir visual: horizontal light and dark bars simulating light through window blinds.

```css
.venetian-overlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 18px,
    rgba(196, 160, 67, 0.12) 18px,
    rgba(196, 160, 67, 0.12) 20px,
    transparent 20px,
    transparent 38px,
    rgba(0, 0, 0, 0.5) 38px,
    rgba(0, 0, 0, 0.5) 40px
  );
  pointer-events: none;
}
```

- Container: `relative overflow-hidden` with the overlay as an absolute child.
- Angle variation: `transform: rotate-[3deg] skew-y-[1deg]` for diagonal blinds.
- Opacity control: wrap in `opacity-60` or `opacity-80` for intensity tuning.

### 3) Smoke Haze Overlay

Translucent white blur patches simulating cigarette smoke drifting across the frame.

- Base: `absolute inset-0 pointer-events-none`.
- Smoke patch: `bg-white/5 blur-3xl rounded-full` positioned at various offsets.
- Multiple patches with varied sizes: `w-64 h-32`, `w-96 h-48`, `w-48 h-64`.
- Animate slowly: `animate-[drift_20s_ease-in-out_infinite]` with `@keyframes drift { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-10px); } }`.
- Total overlay opacity: `opacity-30` to keep it atmospheric, not blinding.

### 4) Film Noir Card

High-contrast card with stark white text on black, framed in a thin border.

- `bg-[#0a0a0a] border border-[#2a2a2a] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)]`.
- Heading: `font-serif text-2xl text-[#f0f0f0]`.
- Body: `font-sans text-base leading-relaxed text-[#b0b0b0]`.
- Meta: `font-mono text-xs uppercase tracking-widest text-[#4a4a4a]`.
- Accent stripe: `border-l-2 border-[#c4a043]` on the left edge.

### 5) Cigarette Glow Button

Button with amber glow mimicking the tip of a lit cigarette in darkness.

- Primary: `bg-[#f0f0f0] text-[#0a0a0a] font-sans font-bold px-6 py-3 tracking-wide hover:bg-[#c4a043] hover:text-[#0a0a0a] transition-colors`.
- Noir: `bg-transparent text-[#f0f0f0] border border-[#4a4a4a] px-6 py-3 hover:bg-[#f0f0f0] hover:text-[#0a0a0a] transition-colors`.
- Glow: `bg-[#c4a043] text-[#0a0a0a] font-sans font-bold px-6 py-3 shadow-[0_0_20px_rgba(196,160,67,0.4)] hover:shadow-[0_0_30px_rgba(196,160,67,0.6)] transition-shadow`.

### 6) Rain-Slicked Street Reflection

CSS mirror effect simulating wet pavement reflections with desaturated gradient.

- Container: `relative`.
- Content: normal element rendering.
- Reflection: duplicate element below with `transform: scaleY(-1) blur-[2px] opacity-30`.
- Desaturation filter: `filter: saturate(0.3) brightness(0.6)`.
- Fade mask: `mask-image: linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)`.
- Divider line: `h-px bg-gradient-to-r from-transparent via-[#4a4a4a] to-transparent` between content and reflection.

### 7) Detective Desk Prop Decorations

SVG silhouettes of iconic noir props for decorative accents.

- Typewriter: simple SVG silhouette, `text-[#2a2a2a]` on dark backgrounds or `text-[#0a0a0a]` on light.
- Whiskey glass: rocks glass with amber fill, positioned at `opacity-40` as background decoration.
- Gun silhouette: revolver outline, `text-[#4a4a4a]`, used sparingly as section dividers.
- Fedora hat: silhouette used as avatar placeholder or decorative header element.
- All props: `aria-hidden="true"` and `opacity-[0.15]` to `opacity-[0.3]` — atmospheric, never dominant.

## Color Palette System

### Core Film Noir Palette

| Color | Hex | Role |
|---|---|---|
| Noir Black | `#0a0a0a` | Primary background, deep shadows |
| Near Black | `#1a1a1a` | Card backgrounds, raised surfaces |
| Smoke Gray | `#4a4a4a` | Borders, secondary text, dividers |
| Medium Gray | `#b0b0b0` | Body text on dark surfaces |
| Stark White | `#f0f0f0` | Primary text on dark, highlights |
| Venetian Gold | `#c4a043` | Accent, glow effects, highlights |
| Cigarette Amber | `#d4a030` | Button glow, warm accent |
| Blood Dark | `#2a0a0a` | Rare danger/negative accent |

Rules: Black and white dominate with extreme contrast. Gold/amber appears only as isolated warm accents — a cigarette tip, a desk lamp, a whiskey glass catching light. No saturated colors. No cool blues. Everything should feel like it exists in a single shaft of light in a dark room.

## Typography System

Film noir typography is NEWSPAPER and HARD-BOILED. Three faces, no more:

| Role | Font Options | Weight | Purpose |
|---|---|---|---|
| Display Heading | Playfair Display, Bodoni Moda, Abril Fatface | 700/900 | Headlines, page titles |
| Body (condensed sans) | Barlow Condensed, Oswald, Bebas Neue | 400/600 | Body text, UI, navigation |
| Evidence (monospace) | JetBrains Mono, IBM Plex Mono, Fira Code | 400 | Tags, timestamps, evidence labels |

Rules:
- Display serif minimum 18px for headlines; below that the noir drama breaks.
- `uppercase tracking-widest` on labels echoes newspaper headlines and case file headers.
- Avoid: rounded fonts (too friendly), script fonts (too romantic), pixel fonts (wrong era).
- Body text line height: `leading-normal` (1.5) for condensed readability.
- Headings: `tracking-tight` for display sizes, `tracking-widest` for case file labels.
- Monospace for timestamps, case numbers, evidence tags — the bureaucratic machinery of investigation.

## Component Architecture Pattern

1. Noir black background (deep, atmospheric, shadow-dominant).
2. Venetian blind shadow stripe overlay (the signature visual element).
3. High-contrast content cards (black with white text, thin borders).
4. Smoke haze overlay (ambient atmospheric layer).
5. Gold/amber accent elements (glowing sparingly from the darkness).
6. Detective desk prop SVG decorations (atmospheric background elements).
7. Rain-slicked reflection effects (for hero sections and key imagery).

## Interaction Rules

- Default state: dramatic, shadow-heavy, still.
- Hover: elements emerge from shadow — slight brightening or glow intensification.
  - `hover:border-[#4a4a4a]` (border becomes visible).
  - Gold glow brightens: `hover:shadow-[0_0_24px_rgba(196,160,67,0.5)]`.
- Active: `active:bg-[#1a1a1a]` (subtle surface shift).
- Focus: gold glow ring `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]`.
- Transitions: `transition-all duration-500` (slow, deliberate, cinematic).
- Venetian blind overlay: optional slow sway animation `animate-[sway_8s_ease-in-out_infinite]` with `@keyframes sway { 0%,100% { transform: skewX(0deg); } 50% { transform: skewX(2deg); } }`.
- No bouncy, spring, or cheerful animations. Motion is slow and heavy.

## Reusable Tailwind Tokens

- Noir card: `bg-[#0a0a0a] border border-[#2a2a2a] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)]`
- Noir header: `bg-[#0a0a0a] text-[#f0f0f0] border-b border-[#2a2a2a]`
- Gold accent: `text-[#c4a043]`
- Gold glow button: `bg-[#c4a043] text-[#0a0a0a] font-bold px-6 py-3 shadow-[0_0_20px_rgba(196,160,67,0.4)]`
- Venetian blind overlay: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(196,160,67,0.12)_18px,rgba(196,160,67,0.12)_20px,transparent_20px,transparent_38px,rgba(0,0,0,0.5)_38px,rgba(0,0,0,0.5)_40px)]`
- Smoke haze: `absolute bg-white/5 blur-3xl rounded-full opacity-30`
- Rain reflection: `transform scaleY(-1) blur-[2px] opacity-30 filter saturate(0.3) brightness(0.6)`
- Case label: `font-mono text-xs uppercase tracking-widest text-[#4a4a4a]`
- Accent stripe: `border-l-2 border-[#c4a043]`
- Ornamental divider: `h-px bg-gradient-to-r from-transparent via-[#4a4a4a] to-transparent`

## Quality Checklist (must pass)

- Palette is noir black + stark white + smoke gray + venetian gold (high-contrast, desaturated).
- Venetian blind shadow stripe overlay present on at least one key element.
- Smoke haze atmospheric overlay present in the environment.
- Typography uses display serif for headings and condensed sans for body/UI.
- Evidence monospace used for timestamps, tags, and case file metadata.
- High contrast between text and background (WCAG AA minimum on all text).
- Detective desk prop SVGs used as atmospheric decorations, not dominant content.
- Gold/amber accents appear sparingly — isolated warm light in a dark room.
- No bright, saturated, or cheerful colors.
- The aesthetic communicates weary cynicism and moral ambiguity, not glamour or horror.
- Body text minimum 16px (readability in condensed type).
- Transitions are slow and deliberate (500ms), never bouncy or playful.

## Anti-Patterns

- Bright, saturated colors (film noir is stark and desaturated).
- Rounded fonts or playful typefaces (the mood is hard-edged and angular).
- Evenly lit interfaces (film noir is defined by dramatic light-dark contrast).
- Missing shadow overlays (venetian blind stripes are the signature visual).
- Pure white backgrounds (use noir black as the dominant surface).
- Cool blue or cyan tones (film noir is warm amber/gold against black).
- Bouncy or springy animations (motion must be slow, heavy, cinematic).
- More than three font families (display serif + condensed sans + monospace is the maximum).
- Smoke effects that obscure content (atmospheric, never obstructive).
- Overuse of gold accents (gold is a single light source, not a palette flood).
- Script or handwriting fonts (reads as romance, not noir).

## Accessibility Considerations

- Noir black background with stark white text provides excellent contrast (WCAG AAA territory).
- Smoke gray text on black should be reserved for large text or labels (may not meet AA at small sizes).
- Condensed sans at 16px+ is readable; below 16px the condensed letterforms compress too tightly.
- Gold text on dark backgrounds limited to large text and decorative labels (may not meet AA for small text).
- Focus states use gold glow: `focus:ring-2 focus:ring-[#c4a043]`.
- Venetian blind overlays must be `pointer-events-none` and `aria-hidden="true"`.
- Smoke haze overlays must be `pointer-events-none` and `aria-hidden="true"`.
- Detective prop SVGs must be `aria-hidden="true"`.
- Rain reflection effects should respect `prefers-reduced-motion` (disable scaleY animation).
- Semantic HTML and heading hierarchy aid screen reader navigation through noir layouts.
- Respect `prefers-reduced-motion`: disable drift animation, blind sway, and slow transitions.
- High-contrast mode: ensure noir elements remain distinguishable when forced colors are active.
