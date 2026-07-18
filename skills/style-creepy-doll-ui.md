---
name: creepy-doll-ui
description: Build creepy doll UI components (uncanny vintage porcelain doll, cracked ceramic face, glass staring eyes, faded ribbon, tattered lace dress, antique toy aesthetic, slightly wrong proportions, eerie familiarity) with cracked porcelain textures, uncanny valley atmosphere, and the unsettling beauty of aged childhood toys. Trigger this skill when the user asks for creepy doll, porcelain doll, uncanny valley, cracked ceramic, eerie toy, vintage dollhouse, tattered lace, haunted doll, antique toy, or unsettling beauty interface.
---

# Creepy Doll UI

Use this skill to design and implement interfaces inspired by uncanny vintage porcelain dolls: cracked ceramic surfaces with thin dark fracture lines, glass staring eyes with cold specular highlights, faded ribbon bow decorations, tattered lace texture overlays, dollhouse miniaturization scale, and the unsettling beauty of aged childhood toys that sit in the uncanny valley — familiar enough to recognize, wrong enough to disturb.

## Non-Negotiable Foundations

- Creepy Doll UI replicates the aesthetic of aged porcelain dolls: cracked ceramic surfaces, glass eyes that seem to follow you, faded fabric, and slightly-off proportions that trigger uncanny valley discomfort.
- The palette: porcelain white `#f0ead0` surfaces with crack sepia `#5a3a1a` fracture lines, faded rose `#c4888a` accents, dusty lavender `#9a8aaa` secondary tones, tattered cream for aged fabric, shadow gray `#3a3a3a` for depth, and cold eye-blue `#6a8aaa` for the glass eye reflection.
- Textures are essential: every surface has a cracked porcelain overlay (thin sepia lines on a warm white base) — flat solid backgrounds break the aesthetic immediately.
- Glass eye reflections: circular gradient elements with a white specular highlight offset from center, creating the illusion of depth and a staring quality.
- Composition is slightly off-center — the uncanny valley effect requires subtle wrongness: elements placed at 47% instead of 50%, margins that are almost but not quite symmetric, proportions that are close to golden ratio but deliberately a few percent off.
- Typography uses fonts that feel handwritten, faded, or Victorian: aged serif fonts, letterpress-style letterforms, and slightly irregular baselines.
- The aesthetic is beautiful and unsettling simultaneously — the doll was once loved, now it is forgotten and decayed, and that history must be visible in every element.

## Core Material Recipes

### 1) Porcelain Panel

The foundational surface — cracked porcelain ceramic with fracture lines.

- Base: `bg-[#f0ead0]`.
- Crack overlay: `bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><path d=%22M10,20 L45,80 L30,150 M80,10 L90,60 L70,120 L95,180 M150,15 L130,70 L160,130 M20,100 L80,90 L140,110 L180,95%22 stroke=%22%235a3a1a%22 stroke-width=%220.5%22 fill=%22none%22 opacity=%220.4%22/></svg>')] bg-repeat`.
- Border: `border border-[#5a3a1a]/30 rounded-sm`.
- Inner shadow for ceramic depth: `shadow-[inset_0_1px_3px_rgba(90,58,26,0.15),inset_0_-1px_2px_rgba(0,0,0,0.08)]`.
- Full: `bg-[#f0ead0] border border-[#5a3a1a]/30 rounded-sm shadow-[inset_0_1px_3px_rgba(90,58,26,0.15)] p-6`.

### 2) Glass Eye Button

Interactive element with a staring glass eye — the signature unsettling control.

- Eye base: `w-10 h-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffffff_0%,#6a8aaa_20%,#3a5a7a_50%,#1a2a3a_100%)]`.
- Pupil: centered dark circle `after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#0a0a0a] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2`.
- Specular highlight: `before:absolute before:w-2 before:h-2 before:rounded-full before:bg-white before:top-[30%] before:left-[35%] before:opacity-90`.
- Container: `relative w-10 h-10 rounded-full cursor-pointer transition-all duration-700 hover:scale-105`.
- Full: `relative w-10 h-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffffff_0%,#6a8aaa_20%,#3a5a7a_50%,#1a2a3a_100%)] cursor-pointer transition-all duration-700 hover:scale-105`.

### 3) Faded Ribbon Bow

Decorative ribbon bow accent for section dividers or headers.

- Bow container: `flex items-center justify-center gap-1 py-2`.
- Left loop: `w-8 h-6 bg-[#c4888a] rounded-l-full rounded-r-sm rotate-[-8deg] shadow-sm`.
- Right loop: `w-8 h-6 bg-[#c4888a] rounded-r-full rounded-l-sm rotate-[8deg] shadow-sm`.
- Center knot: `w-3 h-5 bg-[#a8686a] rounded-sm`.
- Tattered edge: `border-b border-[#c4888a]/50` extending from the bow.
- Full ribbon: `flex items-center justify-center py-2` containing the three bow elements with rotation and faded shadow.

### 4) Tattered Lace Overlay

Lace texture overlay for backgrounds and section boundaries.

- Lace top border: `bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2212%22><path d=%22M0,12 Q5,2 10,12 Q15,2 20,12 Q25,2 30,12 Q35,2 40,12%22 stroke=%22%239a8aaa%22 stroke-width=%221%22 fill=%22none%22 opacity=%220.5%22/></svg>')] bg-repeat-x h-3`.
- Lace overlay (full): `before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><circle cx=%2210%22 cy=%2210%22 r=%223%22 fill=%22none%22 stroke=%22%239a8aaa%22 stroke-width=%220.5%22 opacity=%220.3%22/><circle cx=%2230%22 cy=%2210%22 r=%223%22 fill=%22none%22 stroke=%22%239a8aaa%22 stroke-width=%220.5%22 opacity=%220.3%22/><circle cx=%2250%22 cy=%2210%22 r=%223%22 fill=%22none%22 stroke=%22%239a8aaa%22 stroke-width=%220.5%22 opacity=%220.3%22/><path d=%22M10,13 L30,13 M30,13 L50,13%22 stroke=%22%239a8aaa%22 stroke-width=%220.5%22 opacity=%220.3%22/></svg>')] before:opacity-40 before:pointer-events-none`.

### 5) Dollhouse Frame

Miniaturization-scale frame suggesting a dollhouse window or display case.

- Frame: `border-4 border-[#5a3a1a]/40 border-double rounded-sm bg-[#f0ead0]/80 p-4`.
- Inner divider (window cross): `relative` with `before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#5a3a1a]/30` and `after:content-[''] after:absolute after:top-1/2 after:left-0 after:right-0 after:h-0.5 after:bg-[#5a3a1a]/30`.
- Full: `border-4 border-double border-[#5a3a1a]/40 rounded-sm bg-[#f0ead0]/80 p-4 relative`.

### 6) Cracked Text Input

Text field styled as aged porcelain with fracture lines.

- `bg-[#f0ead0] border border-[#5a3a1a]/40 rounded-sm px-3 py-2 text-[#3a3a3a] font-serif placeholder-[#9a8aaa]/60 shadow-[inset_0_1px_2px_rgba(90,58,26,0.1)] focus:outline-none focus:border-[#6a8aaa] focus:shadow-[inset_0_1px_2px_rgba(90,58,26,0.15),0_0_0_1px_#6a8aaa]`.

### 7) Uncanny Card

Content card with deliberately slightly-off proportions and composition.

- Card: `bg-[#f0ead0] border border-[#5a3a1a]/25 rounded-sm shadow-[0_2px_8px_rgba(58,58,58,0.2)] p-6 ml-[3px]` (the `ml-[3px]` creates the subtle off-center uncanny feel — almost imperceptible but felt).
- Title: `font-serif text-lg text-[#3a3a3a] tracking-wide mb-3` (slightly wide tracking adds eeriness).
- Body: `font-serif text-sm text-[#5a3a1a]/80 leading-relaxed`.

### 8) Shadow Depth Separator

A separator that creates the impression of a shadow falling across porcelain.

- `h-px bg-gradient-to-r from-transparent via-[#3a3a3a]/40 to-transparent my-4`.
- With eye accent: center a small glass eye dot `inline-block w-2 h-2 rounded-full bg-[#6a8aaa] mx-auto`.

### 9) Porcelain Checkbox

Checkbox styled as a cracked ceramic tile.

- Unchecked: `w-5 h-5 bg-[#f0ead0] border border-[#5a3a1a]/40 rounded-sm shadow-[inset_0_1px_2px_rgba(90,58,26,0.1)]`.
- Checked: add `bg-[radial-gradient(circle,#c4888a_0%,#a8686a_100%)]` with a small crack-line check mark SVG overlay in `#5a3a1a`.

### 10) Music Box Spinner

Loading/progress indicator styled as a music box mechanism.

- Container: `w-8 h-8 relative`.
- Rotating element: `w-full h-full rounded-full border-2 border-[#9a8aaa]/30 border-t-[#6a8aaa] animate-spin duration-[3000ms]` (slow, eerie rotation — 3 second spin, not a fast spinner).
- Center: a tiny glass eye `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_40%_35%,#fff_0%,#6a8aaa_100%)]`.

## Color Palette System

### Core Creepy Doll Palette

| Color | Hex | Role |
|---|---|---|
| Porcelain White | `#f0ead0` | Primary surface (warm, aged, not pure white) |
| Crack Sepia | `#5a3a1a` | Fracture lines, borders, aged text, ceramic cracks |
| Faded Rose | `#c4888a` | Ribbon bows, checked states, warm accents |
| Deep Rose | `#a8686a` | Ribbon knot centers, pressed states |
| Dusty Lavender | `#9a8aaa` | Lace overlays, secondary accents, placeholders |
| Tattered Cream | `#e8dcc4` | Aged fabric surfaces, card backgrounds, alt surfaces |
| Shadow Gray | `#3a3a3a` | Primary text, shadows, depth, borders |
| Cold Eye-Blue | `#6a8aaa` | Glass eye highlights, focus states, eerie accents |
| Deep Eye-Blue | `#3a5a7a` | Glass eye gradient mid-tone, active states |
| Void Dark | `#1a1a1a` | Pupils, deepest shadows, background sections |
| Crack Dark | `#2a1a0a` | Deep crack lines, fracture accents |

Rules: Porcelain white `#f0ead0` dominates all surfaces — it is warm and aged, never pure white. Crack sepia `#5a3a1a` defines all fractures, borders, and aged text. Faded rose `#c4888a` is the primary accent (ribbons, highlights). Dusty lavender `#9a8aaa` is the secondary accent (lace, subtle elements). Cold eye-blue `#6a8aaa` is reserved for glass eyes and focus states — its coolness contrasts the warm palette and creates unease. Shadow gray `#3a3a3a` for text. Never use pure black `#000` — use void dark `#1a1a1a` or shadow gray `#3a3a3a` instead.

## Typography Recommendations

Creepy Doll typography uses fonts that feel aged, handwritten, and slightly unsettling:

- **Display headings:** IM Fell English SC (Victorian small caps — aged letterpress feel, slightly irregular, beautiful and eerie). Alternative: Crimson Text in bold with wide tracking.
- **UI labels:** EB Garamond (classical serif — readable but with an old-world, slightly formal quality that suits antique doll aesthetics). Alternative: Cormorant Garamond.
- **Body:** Crimson Text (old-style serif — warm, readable, with a period feel that matches aged porcelain). Alternative: Lora.
- **Monospace:** Special Elite (typewriter font — aged, slightly distressed, suggests handwritten labels on old doll cases). Alternative: Cutive Mono.
- **Accent/handwritten:** Cedarville Cursive (faded cursive — for ribbon labels, personal notes, doll name plates). Alternative: Mrs Saint Delafield.
- Modern alternatives: If Google Fonts are unavailable, use Georgia (for serif headings/body), Palatino (for Garamond feel), Courier New (for typewriter mono).
- Font sizes: `14px` to `16px` for body (readable but not large — dollhouse scale), `20px` to `28px` for headings. Display headings up to `36px` with wide letter spacing.
- Letter spacing: headings use `tracking-wide` to `tracking-wider` (adds formality and eeriness). Body uses normal tracking.
- Line height: slightly relaxed `leading-relaxed` for body to create a gentle, aged feel.

## Component Architecture Pattern

1. Porcelain panel as the base surface (cracked texture overlay on warm white `#f0ead0`).
2. Tattered lace borders or overlays at section boundaries and panel edges.
3. Faded ribbon bows as decorative dividers between sections.
4. Glass eye buttons as primary interactive elements (staring, following, unsettling).
5. Uncanny cards for content areas (slightly off-center, deliberately imperfect proportions).
6. Dollhouse frames for featured content, images, or display sections.
7. Cracked text inputs and porcelain checkboxes for form elements.
8. Shadow depth separators with glass eye accents between content blocks.
9. Music box spinners for loading and progress states (slow, eerie rotation).
10. Background: subtle porcelain texture or tattered cream with faint lace overlay — never a flat solid color.

## Interaction Rules

- Default state: aged, cracked porcelain, beautiful but decayed.
- Hover: subtle and slow — elements shift almost imperceptibly. Glass eye buttons scale `hover:scale-105` over `duration-700` (slow, creepy — not a snappy modern hover).
- Active/Pressed: porcelain depresses slightly `active:scale-95` with `duration-300`. Ribbon buttons darken to deep rose `active:bg-[#a8686a]`.
- Focus: cold eye-blue ring `focus:outline-none focus:ring-1 focus:ring-[#6a8aaa] focus:shadow-[0_0_0_2px_#6a8aaa]` — the blue feels cold against the warm palette and creates unease.
- Selected: faded rose background `bg-[#c4888a]/30` with crack sepia text.
- Transitions: slow and deliberate — `duration-500` to `duration-700` for most interactions. The slowness is intentional: it creates the sense that the interface is alive but moving at its own pace, like a doll that might blink.
- Glass eye tracking (advanced): on mousemove, the specular highlight of glass eye elements can shift slightly toward the cursor `transition-transform duration-1000` — the eyes follow you. Use sparingly for maximum effect.
- Music box spinner: `duration-[3000ms]` rotation (3 seconds per revolution — slow and deliberate, not a fast loading spinner).

## Reusable Tailwind Tokens

- Porcelain surface: `bg-[#f0ead0] border border-[#5a3a1a]/30 rounded-sm shadow-[inset_0_1px_3px_rgba(90,58,26,0.15)]`
- Glass eye: `rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffffff_0%,#6a8aaa_20%,#3a5a7a_50%,#1a2a3a_100%)]`
- Faded ribbon: `bg-[#c4888a] rounded-l-full rounded-r-sm rotate-[-8deg]`
- Deep ribbon knot: `bg-[#a8686a]`
- Tattered cream surface: `bg-[#e8dcc4]`
- Dusty lavender accent: `text-[#9a8aaa]` or `border-[#9a8aaa]/50`
- Crack sepia text: `text-[#5a3a1a]`
- Shadow text: `text-[#3a3a3a]`
- Cold focus ring: `focus:ring-1 focus:ring-[#6a8aaa] focus:shadow-[0_0_0_2px_#6a8aaa]`
- Uncanny offset: `ml-[3px]` (deliberate near-symmetric imperfection)
- Dollhouse frame: `border-4 border-double border-[#5a3a1a]/40 rounded-sm bg-[#f0ead0]/80`
- Music box spinner: `rounded-full border-2 border-[#9a8aaa]/30 border-t-[#6a8aaa] animate-spin duration-[3000ms]`
- Slow hover: `transition-all duration-700 hover:scale-105`
- Shadow separator: `h-px bg-gradient-to-r from-transparent via-[#3a3a3a]/40 to-transparent`

## Quality Checklist (must pass)

- Surfaces use porcelain white `#f0ead0` (warm, aged — never pure white `#ffffff`).
- Cracked porcelain texture overlay present on at least the primary panels (thin sepia fracture lines).
- At least one glass eye element with radial gradient and specular highlight (the signature motif).
- Faded rose `#c4888a` used for ribbons, bows, or warm accents.
- Dusty lavender `#9a8aaa` used for lace overlays or subtle secondary elements.
- Tattered lace texture present at section boundaries or as overlay.
- Composition includes at least one deliberately off-center element (uncanny valley: `ml-[3px]`, asymmetric padding, or 47% positioning).
- Transitions are slow (`duration-500` to `duration-700`) — not snappy or modern.
- Typography uses aged serif fonts (IM Fell English, EB Garamond, Crimson Text, or close alternatives).
- Cold eye-blue `#6a8aaa` reserved for focus states and glass eyes only — not used for general accents.
- No pure black `#000000` anywhere — use void dark `#1a1a1a` or shadow gray `#3a3a3a`.
- Shadow depth separators present between content sections.
- The aesthetic reads as an aged, cracked porcelain doll — beautiful, unsettling, and slightly wrong.
- Music box spinner (if loading states are shown) uses slow 3-second rotation.
- Dollhouse frame present for at least one featured content element.

## Anti-Patterns

- Pure white `#ffffff` backgrounds (porcelain is warm `#f0ead0` — pure white breaks the aged feel).
- Pure black `#000000` (use void dark `#1a1a1a` — pure black is too harsh for the doll aesthetic).
- Flat solid backgrounds without texture (every surface needs the cracked porcelain or lace overlay — flat reads as modern, not eerie).
- Snappy fast transitions (the aesthetic requires slow, deliberate motion — `duration-500`+ minimum, fast hover breaks the spell).
- Modern sans-serif fonts (use aged serifs — Inter, Roboto, and system sans break the period atmosphere).
- Bright saturated colors (the palette is faded and dusty — bright primaries destroy the aged, decayed quality).
- Perfectly symmetric layouts (the uncanny valley requires subtle imperfection — perfectly centered elements look generic, not unsettling).
- Missing the glass eye motif (the staring eye is the signature element — without it, the design is just vintage, not creepy).
- Using cold eye-blue `#6a8aaa` as a general accent color (it is reserved for eyes and focus — overuse dilutes the unsettling effect).
- Sharp geometric shapes without softness (porcelain has gentle curves — `rounded-sm` at minimum, sharp 90-degree corners read as modern).
- Fast spinners (loading indicators must be slow — a fast spinner breaks the eerie atmosphere).
- Missing crack textures (cracks are the entire point — a smooth porcelain surface is just a white panel, not a doll).
- Modern card shadows (use subtle inset shadows for ceramic depth, not large drop shadows that read as Material Design).
- Overusing the glass eye (place eyes sparingly for maximum impact — an eye on every element becomes a pattern, not a disturbance).

## Accessibility Considerations

- Porcelain white `#f0ead0` with shadow gray `#3a3a3a` text provides strong contrast (WCAG AA — the warm white reduces contrast slightly compared to pure white, verify at all text sizes).
- Crack sepia `#5a3a1a` on porcelain white `#f0ead0` provides adequate contrast for secondary text but may fail at small sizes — use shadow gray `#3a3a3a` for body text below 16px.
- Focus rings: cold eye-blue `#6a8aaa` focus ring `focus:ring-1 focus:ring-[#6a8aaa] focus:shadow-[0_0_0_2px_#6a8aaa]` provides visible focus indication against the warm palette.
- Glass eye buttons must have accessible names (the visual is decorative — screen readers need `aria-label` describing the action, not the eye).
- The slow transitions (`duration-500` to `duration-700`) may trigger discomfort in some users — provide a `prefers-reduced-motion` alternative that reduces transition duration to `duration-150` or disables non-essential animation.
- Glass eye cursor tracking (if implemented) MUST be disabled under `prefers-reduced-motion` — the following-eye effect can cause motion sickness.
- Cracked texture overlays must not reduce text contrast — ensure text sits on a solid porcelain background panel, not directly over crack lines.
- Faded rose `#c4888a` selection backgrounds with crack sepia `#5a3a1a` text should be verified for contrast (may need deep rose `#a8686a` for stronger contrast).
- The off-center uncanny composition (`ml-[3px]`, asymmetric padding) must not cause layout overflow or misalignment of interactive elements — the imperfection is visual, not structural.
- Lace overlay textures must have sufficient opacity that they do not interfere with text legibility (keep below `opacity-40`).
- Music box spinner at 3-second rotation is slow enough to be calm but must still convey progress — add a text indicator for screen readers.
- Dollhouse frames with double borders must not reduce the inner content area below minimum readable width.
- All interactive elements must meet minimum touch target sizes (44x44px) even though the dollhouse aesthetic suggests miniaturization — scale up the touch area without scaling the visual.
