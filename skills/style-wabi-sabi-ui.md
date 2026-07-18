---
name: wabi-sabi-ui
description: Build wabi-sabi UI components (Japanese aesthetic of imperfection, transience, asymmetry, natural patina, weathered materials, honest aging, beauty in flaws) with organic irregularity, muted earth tones, and the contemplative acceptance of impermanence. Trigger this skill when the user asks for wabi-sabi, imperfect beauty, Japanese patina, honest aging, irregular organic, or transience aesthetics.
---

# Wabi-Sabi UI

Use this skill to design and implement contemplative interfaces embodying the Japanese aesthetic of wabi-sabi: beauty in imperfection, asymmetry, weathering, natural aging, irregularity, simplicity, and the honest acceptance that all things are impermanent.

## Non-Negotiable Foundations

- Wabi-sabi celebrates IMPERFECTION: chipped edges, uneven surfaces, irregular spacing, and the patina of age are virtues, not defects.
- Asymmetry is mandatory: perfectly centered or gridded layouts violate the wabi-sabi spirit. Elements are off-center, unevenly spaced, and organically placed.
- Materials are NATURAL and AGED: raw wood with visible grain, unglazed clay, rusted iron, torn paper, mossy stone. Nothing is polished, painted, or pristine.
- Colors are muted earth tones derived from nature: bark browns, moss greens, stone grays, tea-stained creams, and oxidized metal patinas.
- Emptiness (ma) is essential: generous negative space, sparse content, and deliberate omission create contemplative atmosphere.
- The mood is quiet, melancholic, and reverent — recognizing beauty in the passage of time.

## Core Material Recipes

### 1) Aged Wood Surface

Raw weathered timber with visible grain and splits.

- `bg-[#8a7a6a]` (weathered wood).
- Grain: `bg-[repeating-linear-gradient(2deg,transparent_0px,transparent_8px,rgba(60,40,20,0.06)_8px,rgba(60,40,20,0.06)_10px)]` (slightly diagonal grain).
- Split: `bg-[linear-gradient(90deg,transparent_45%,rgba(0,0,0,0.1)_46%,transparent_47%)]` (natural wood split).
- Knot: `bg-[radial-gradient(circle_at_70%_30%,rgba(40,25,10,0.15)_0%,transparent_8%)]`.

### 2) Chipped Tea Bowl Card

Card with irregular edges suggesting a hand-thrown ceramic bowl.

- `bg-[#d4c4a8] [clip-path:polygon(0_3%,8%_0,20%_4%,35%_0,50%_5%,65%_0,80%_3%,95%_0,100%_5%,98%_100%,85%_96%,70%_100%,55%_95%,40%_100%,25%_97%,10%_100%,2%_96%)] p-8 shadow-[0_2px_8px_rgba(80,60,40,0.08)]`.
- The irregular polygon creates a hand-thrown, uneven edge.

### 3) Kintsugi Accent

Golden repair of a crack (beauty in brokenness).

- Thin SVG path: `stroke="#c9a043" stroke-width="2" fill="none"` with branching tributaries across a surface (the golden join of broken ceramics).
- The crack is HIGHLIGHTED, not hidden — it is the most beautiful part.

### 4) Rust/Patina Surface

Oxidized copper/iron with verdigris.

- `bg-[#5a6a5a]` (oxidized copper).
- Patina: `bg-[radial-gradient(circle_at_30%_40%,rgba(90,160,120,0.2)_0%,transparent_30%),radial-gradient(circle_at_70%_60%,rgba(160,90,50,0.15)_0%,transparent_25%)]` (green-blue verdigris patches with rust).

### 5) Wabi-Sabi Button

Rough, organic button with imperfect styling.

- `bg-[#6a5a4a] text-[#d4c4a8] font-serif font-normal px-8 py-3 border border-[#4a3a2a] rounded-[0.3rem_0.5rem_0.4rem_0.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#5a4a3a] transition-colors`.
- Note the asymmetric `border-radius` — each corner is slightly different.

### 6) Torn Paper Accent

Edge of torn washi paper decoration.

- `bg-[#e8dcc0] [clip-path:polygon(0_10%,5%_0,12%_8%,20%_0,28%_6%,36%_0,44%_8%,52%_0,60%_7%,68%_0,76%_8%,84%_0,92%_6%,100_0,100%_100%,0_100%)]`.

### 7) Mossy Stone Divider

Organic divider suggesting a line of moss.

- `h-1 bg-gradient-to-r from-[#3a4a2a] via-[#5a6a3a] to-[#3a4a2a] rounded-full opacity-40`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Aged Wood | `#8a7a6a` | Primary surface |
| Dark Wood | `#5a4a3a` | Shadows, depth |
| Tea Cream | `#d4c4a8` | Ceramic/card surface |
| Stone Gray | `#7a7670` | Neutral surface |
| Moss Green | `#5a6a3a` | Organic accent |
| Bark Brown | `#4a3a2a` | Text, borders |
| Oxidized Copper | `#5a6a5a` | Patina surface |
| Gold Repair | `#c9a043` | Kintsugi accent |
| Ash White | `#e8dcc0` | Torn paper, light |

Rules: Muted, natural, earth-derived colors. Nothing bright or saturated. Colors should feel like they came from the ground, aged by time. The palette is the forest floor in late autumn.

## Typography Recommendations

- **Display:** Cormorant, EB Garamond (elegant aged serif with organic character).
- **Alternative:** Any serif at `font-light` — thin, contemplative, quiet.
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Labels:** `font-serif text-sm tracking-wide` (gentle, quiet labels).
- Typography should be quiet, elegant, and unhurried.

## Interaction Rules

- Default: quiet, imperfect, contemplative.
- Hover: barely perceptible change (subtle warmth or slight darkening).
  - `hover:bg-[#5a4a3a] transition-colors duration-500`.
- Active: `active:bg-[#4a3a2a]`.
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#c9a043]/30 focus:ring-offset-2`.
- Transitions: `transition-all duration-500 ease-in-out` (very slow — wabi-sabi is unhurried).

## Reusable Tailwind Tokens

- Aged wood: `bg-[#8a7a6a]` with grain + split + knot SVG overlays.
- Chipped bowl card: `[clip-path:polygon(irregular)] bg-[#d4c4a8]`.
- Kintsugi: `stroke="#c9a043" stroke-width="2"` branching crack SVG.
- Wabi-sabi button: `bg-[#6a5a4a] border border-[#4a3a2a] rounded-[asymmetric]`.
- Torn paper: irregular clip-path on `bg-[#e8dcc0]`.
- Patina: radial verdigris patches on `bg-[#5a6a5a]`.

## Quality Checklist

- Layout is ASYMMETRIC (nothing perfectly centered or gridded).
- At least one aged/weathered material surface (wood, ceramic, metal).
- At least one intentional imperfection (chipped edge, kintsugi crack, torn edge).
- Generous negative space (ma) — the interface should feel sparse.
- Color palette is muted earth tones (nothing bright or saturated).
- Typography is thin, elegant serif.
- At least one asymmetric border-radius or irregular clip-path.
- The aesthetic reads as wabi-sabi / Japanese imperfection aesthetic.
- Everything feels quiet, aged, and contemplative.
- Transitions are very slow (unhurried, reflective pace).

## Anti-Patterns

- Perfect symmetry and grid alignment (wabi-sabi is ASYMMETRIC).
- Bright saturated colors (palette is muted earth tones).
- Pristine polished surfaces (everything shows age and weathering).
- Dense content layouts (ma — empty space — is essential).
- Fast snappy animations (wabi-sabi is slow and contemplative).
- Sharp perfect corners (use irregular clip-paths or asymmetric radius).
- Bold heavy typography (wabi-sabi is thin, light, and quiet).
- Modern industrial design (wabi-sabi is natural, organic, and handmade).
- Hiding imperfections (flaws are HIGHLIGHTED, not concealed).
- Functional clutter (omit everything non-essential).

## Accessibility Considerations

- Muted earth tones may reduce contrast — verify WCAG AA carefully.
- Aged wood backgrounds with cream text need contrast verification.
- Focus states: `focus:ring-1 focus:ring-[#c9a043]/30` (subtle gold ring — intentionally minimal but must be visible enough).
- Asymmetric clip-paths must not create confusing interactive areas.
- Kintsugi and torn-paper decorations must be `aria-hidden="true"`.
- The sparse layout naturally aids cognitive accessibility.
- Slow transitions must respect `prefers-reduced-motion` (disable or simplify).
- Touch targets must be adequate despite organic irregular shapes.
