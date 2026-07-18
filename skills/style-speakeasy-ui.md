---
name: speakeasy-ui
description: Build speakeasy UI components (1920s secret bar entrance, hidden door, jazz club ambiance, art deco brass fittings, prohibition-era cocktails, cigar smoke haze, velvet rope barriers, gramophone decorations) with hidden entrance reveals, brass-and-glass surfaces, and the exclusive glamour of the underground jazz age. Trigger this skill when the user asks for speakeasy, prohibition-era, 1920s secret bar, art deco jazz, underground lounge, jazz age aesthetic, hidden entrance UI, or roaring twenties design.
---

# Speakeasy UI

Use this skill to design and implement exclusive, atmospheric interfaces with brass-and-glass surfaces, art deco ornamentation, hidden entrance reveals, and the secret glamour of 1920s underground jazz clubs.

## Non-Negotiable Foundations

- Speakeasy is the visual grammar of hidden doors, brass fittings, velvet ropes, and jazz smoke — translated to screen.
- The palette is dark and opulent: speakeasy black, brass gold, velvet red, champagne cream, and jazz gold. No primary colors.
- Typography is art deco display and elegant serif: a geometric display for headings (evoking art deco signage), a refined serif for body, and a small caps utility face for labels. Three faces is the ceiling.
- Layout is layered and secretive: elements hidden behind reveals, brass-framed panels, velvet rope dividers, and surfaces that suggest hidden depth.
- Imagery uses warm amber lighting, brass reflections, glass distortion, and cigar smoke haze.
- The aesthetic communicates exclusive glamour — not opulence for its own sake, but the thrill of knowing the password.

## Core Material Recipes

### 1) Speakeasy Dark Surface (the foundation)

Rich black surface with warm undertone for the base environment.

- Background: `bg-[#0a0a0a]` (speakeasy dark).
- Warm undertone: subtle radial gradient `bg-[radial-gradient(ellipse_at_center,rgba(196,160,67,0.05)_0%,transparent_70%)]`.
- Texture: subtle velvet grain via SVG noise at `opacity-[0.03]`.
- Shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.7)]`.
- Border: `border border-[#1a1a1a]` (barely visible dark edge).

### 2) Hidden Entrance Card

The signature speakeasy interaction: an exterior wall facade that reveals the interior jazz club on hover.

- Exterior state: `bg-[#2a2218] border-2 border-[#3a3228] p-8` with a door SVG silhouette centered.
- Door SVG: simple arched doorway outline, `text-[#4a4238]`, with a small peephole circle `bg-[#c4a043] w-2 h-2 rounded-full`.
- Label: `font-sans text-xs uppercase tracking-[0.3em] text-[#4a4238]` reading "ENTER" or "KNOCK".
- Interior reveal on hover: `group-hover:bg-[#0a0a0a] group-hover:border-[#c4a043] group-hover:shadow-[0_0_40px_rgba(196,160,67,0.2)]`.
- Interior content: hidden with `opacity-0 group-hover:opacity-100 transition-opacity duration-700`.
- Door opening animation: `group-hover:scale-x-110 origin-left transition-transform duration-700` on the door SVG.

### 3) Art Deco Brass Fittings Border

Geometric brass border pattern inspired by art deco architectural metalwork.

- Outer frame: `border-2 border-[#c4a043]` with `shadow-[0_0_8px_rgba(196,160,67,0.15)]`.
- Corner ornaments: small SVG art deco corner pieces (fan/sunburst motifs) positioned at each corner.
- Inner rule: `border border-[#c4a043]/30 m-2` for a double-frame effect.
- Top accent: `bg-gradient-to-r from-transparent via-[#c4a043] to-transparent h-px` as a hairline across the top.
- Chevron pattern: repeating SVG chevrons `bg-[url('data:image/svg+xml,...')]` at low opacity along the top edge.

### 4) Speakeasy Card

Dark card with brass accent, glass-surface sheen, and jazz-age typography.

- `bg-[#0a0a0a] border border-[#c4a043]/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`.
- Glass sheen: `before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.03] before:to-transparent before:pointer-events-none`.
- Heading: `font-display text-2xl text-[#f0e8d0]`.
- Body: `font-serif text-base leading-relaxed text-[#b0a890]`.
- Meta: `font-sans text-xs uppercase tracking-[0.2em] text-[#c4a043]/60`.
- Brass accent line: `border-t border-[#c4a043]/40 mt-4 pt-4`.

### 5) Velvet Rope Divider

Opulent section divider mimicking a velvet rope barrier between rooms.

- Rope: `h-px bg-gradient-to-r from-transparent via-[#5a0a0a] to-transparent`.
- Stanchions: small brass circles at each end, `w-3 h-3 rounded-full bg-[#c4a043] shadow-[0_0_6px_rgba(196,160,67,0.3)]`.
- Full divider: `flex items-center gap-4` with stanchion + rope + stanchion.
- Rope drop: optional `after:content-[''] after:block after:w-px after:h-6 after:bg-[#5a0a0a] after:mx-auto after:mt-1` for a hanging rope effect.

### 6) Cigar Smoke Haze

Warm-toned smoke haze drifting across the interface.

- Base: `absolute inset-0 pointer-events-none overflow-hidden`.
- Smoke patch: `bg-[#c4a043]/[0.03] blur-3xl rounded-full` with varied sizes.
- Warm variant: `bg-[#f0e8d0]/[0.02] blur-3xl rounded-full`.
- Multiple patches with varied positions and sizes for organic drift.
- Animate slowly: `animate-[smoke-drift_25s_ease-in-out_infinite]` with keyframes translating 15-25px in various directions.
- Total overlay opacity: `opacity-40` to maintain atmosphere without obscuring content.

### 7) Gramophone and Jazz Instrument SVG Decorations

Decorative SVG silhouettes of jazz-era instruments and gramophone.

- Gramophone: horn silhouette, `text-[#c4a043] opacity-[0.12]`, positioned as a large background element.
- Saxophone: silhouette, `text-[#c4a043] opacity-[0.08]`, used as a section corner decoration.
- Trumpet: silhouette, `text-[#d4a043] opacity-[0.10]`, used in navigation or header accents.
- Piano keys: horizontal key strip SVG as a decorative border, `text-[#f0e8d0] opacity-[0.06]`.
- All instruments: `aria-hidden="true"` and positioned as background decoration, never interactive.

## Color Palette System

### Core Speakeasy Palette

| Color | Hex | Role |
|---|---|---|
| Speakeasy Dark | `#0a0a0a` | Primary background, deep shadows |
| Near Dark | `#1a1410` | Card backgrounds, raised surfaces |
| Brass | `#c4a043` | Primary accent, borders, highlights |
| Jazz Gold | `#d4a043` | Bright accent, hover states, glows |
| Champagne | `#f0e8d0` | Primary text on dark, light surfaces |
| Cream | `#e8dcc0` | Secondary text, body copy |
| Velvet Red | `#5a0a0a` | Rope accents, negative states, danger |
| Smoke Gray | `#4a4a4a` | Borders, subtle dividers, muted text |
| Warm Black | `#1a1208` | Deep surface variation |
| Amber | `#b08030` | Cocktail/warm accent, secondary gold |

Rules: Black and brass form the core duality — darkness punctuated by metallic warmth. Velvet red appears only as rope dividers and rare negative accents. Champagne replaces pure white. No cool colors, no primary hues. Everything should feel like candlelight on polished metal.

## Typography System

Speakeasy typography is ART DECO and ELEGANT. Three faces, no more:

| Role | Font Options | Weight | Purpose |
|---|---|---|---|
| Display (geometric deco) | Poiret One, Josefin Sans (Light), Tenor Sans | 400/700 | Headlines, signage, titles |
| Body (refined serif) | Cormorant, Libre Baskerville, EB Garamond | 400/600 | Body text, descriptions |
| Utility (small caps sans) | Montserrat (Light), Raleway (Thin), Lato | 400/600 | Labels, buttons, microcopy |

Rules:
- Display deco minimum 18px for headlines; below that the art deco geometry collapses.
- `uppercase tracking-[0.2em]` on labels evokes art deco signage and prohibition-era typography.
- Avoid: sans-serif with no character (generic), blackletter (wrong era), pixel fonts (wrong era entirely).
- Body text line height: `leading-relaxed` (1.75) for elegant readability.
- Headings: `tracking-[0.05em]` for display sizes, `tracking-[0.2em]` for label/small caps.
- Small caps via CSS `font-variant: small-caps` for prohibition-era formality on labels.

## Component Architecture Pattern

1. Speakeasy dark background (rich black with warm radial undertone).
2. Art deco brass-fitted frames and borders (geometric metalwork).
3. Hidden entrance reveal cards (exterior-to-interior transformation on hover).
4. Velvet rope dividers (between sections and content blocks).
5. Cigar smoke haze overlay (warm atmospheric layer).
6. Jazz instrument and gramophone SVG decorations (background ambiance).
7. Champagne text on dark surfaces (warm, elegant readability).

## Interaction Rules

- Default state: mysterious, hidden, inviting exploration.
- Hover: elements reveal themselves — hidden content emerges, brass brightens.
  - Hidden entrance cards: `group-hover` triggers interior reveal.
  - Brass accents brighten: `hover:text-[#d4a043] hover:shadow-[0_0_12px_rgba(212,160,67,0.3)]`.
- Active: `active:bg-[#1a1410]` (subtle warm surface press).
- Focus: brass glow ring `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]`.
- Transitions: `transition-all duration-700` (slow, luxurious reveal).
- Reveal animations: content fades in with slight upward movement `translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100`.
- No bouncy, spring, or playful animations. Motion is slow, warm, and deliberate.

## Reusable Tailwind Tokens

- Speakeasy card: `bg-[#0a0a0a] border border-[#c4a043]/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`
- Art deco frame: `border-2 border-[#c4a043] shadow-[0_0_8px_rgba(196,160,67,0.15)]`
- Brass accent: `text-[#c4a043]`
- Jazz gold accent: `text-[#d4a043]`
- Brass glow button: `bg-[#c4a043] text-[#0a0a0a] font-medium px-6 py-3 shadow-[0_0_16px_rgba(196,160,67,0.3)] hover:shadow-[0_0_24px_rgba(196,160,67,0.5)]`
- Champagne button: `bg-transparent text-[#f0e8d0] border border-[#c4a043]/50 px-6 py-3 hover:bg-[#c4a043]/10 hover:border-[#c4a043]`
- Velvet rope divider: `flex items-center gap-4` with `w-3 h-3 rounded-full bg-[#c4a043]` + `h-px flex-1 bg-gradient-to-r from-transparent via-[#5a0a0a] to-transparent`
- Smoke haze: `absolute bg-[#c4a043]/[0.03] blur-3xl rounded-full opacity-40`
- Hidden entrance exterior: `bg-[#2a2218] border-2 border-[#3a3228] p-8 group`
- Hidden entrance reveal: `opacity-0 group-hover:opacity-100 transition-opacity duration-700`
- Label: `font-sans text-xs uppercase tracking-[0.2em] text-[#c4a043]/60`
- Ornamental divider: `h-px bg-gradient-to-r from-transparent via-[#c4a043]/40 to-transparent`
- Double frame inner: `border border-[#c4a043]/30 m-2`

## Quality Checklist (must pass)

- Palette is speakeasy dark + brass gold + velvet red + champagne (dark, opulent, warm).
- Art deco brass fitting borders present on key cards and sections.
- Hidden entrance reveal interaction implemented on at least one card or entry point.
- Velvet rope divider used between major content sections.
- Cigar smoke haze atmospheric overlay present in the environment.
- Jazz instrument or gramophone SVG decorations present as background ambiance.
- Typography uses geometric display for headings and refined serif for body.
- Small caps or wide-tracked uppercase used for prohibition-era label styling.
- No bright, saturated, or primary colors.
- The aesthetic communicates exclusive glamour and secret discovery, not opulence or excess.
- Body text minimum 16px (elegant readability in serif type).
- Transitions are slow and luxurious (700ms), never bouncy or playful.
- Champagne replaces pure white for all text and light surfaces.

## Anti-Patterns

- Bright, saturated colors (speakeasy is dark and opulent).
- Generic sans-serif without character (the display face IS the art deco identity).
- Open, fully-visible layouts (speakeasy is about hidden reveals and discovery).
- Missing brass fitting borders (geometric metalwork is the signature visual).
- Pure white backgrounds or text (use champagne warm cream tones).
- Cool blue or silver tones (speakeasy is warm brass/gold/amber).
- Bouncy or springy animations (motion must be slow, warm, luxurious).
- More than three font families (geometric display + refined serif + utility sans is the maximum).
- Overuse of velvet red (red is a rope accent, not a palette primary).
- Missing smoke haze effects (cigar smoke is atmospheric glue).
- Flat, untextured surfaces (brass has sheen, glass has distortion, velvet has grain).
- Casual or playful typography (the mood is exclusive and deliberate).

## Accessibility Considerations

- Champagne text on speakeasy dark provides strong contrast (WCAG AA to AAA territory).
- Brass text on dark backgrounds should be limited to large text and decorative labels (may not meet AA for small body text).
- Geometric display fonts at 16px+ are readable; below 16px the art deco letterforms lose definition.
- Smoke haze overlays must be `pointer-events-none` and `aria-hidden="true"`.
- Jazz instrument SVGs must be `aria-hidden="true"`.
- Hidden entrance reveals: ensure content is accessible without hover (keyboard focus or tap should also trigger reveal).
- Hidden entrance content must be in the DOM for screen readers even when visually hidden.
- Focus states use brass glow: `focus:ring-2 focus:ring-[#c4a043]`.
- Velvet rope dividers should use `role="separator"` when semantic separation is needed.
- Respect `prefers-reduced-motion`: disable smoke drift animation and slow reveal transitions.
- High-contrast mode: ensure brass and champagne elements remain distinguishable when forced colors are active.
- Semantic HTML and heading hierarchy aid screen reader navigation through layered speakeasy layouts.
