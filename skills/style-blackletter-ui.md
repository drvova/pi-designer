---
name: blackletter-ui
description: Build blackletter / fraktur UI components (Gothic calligraphy, medieval manuscript script, illuminated drop caps, parchment scrolls, wax seals, heavy ornamental capitals) with authentic Gothic script typography, aged vellum surfaces, and the sacred weight of medieval ecclesiastical documents. Trigger this skill when the user asks for blackletter, fraktur, Gothic calligraphy, medieval manuscript UI, illuminated text, or Old English script interfaces.
---

# Blackletter / Fraktur UI

Use this skill to design and implement interfaces styled with Gothic calligraphy and medieval manuscript aesthetics: blackletter script typography, illuminated drop capitals, aged vellum surfaces, wax seals, ornamental borders, and the sacred, authoritative weight of ecclesiastical documents.

## Non-Negotiable Foundations

- Blackletter UI uses Gothic calligraphy (Textura, Fraktur, or Rotunda) as the primary typography — this is the defining feature.
- The aesthetic draws from medieval manuscripts: illuminated initials, vellum parchment, rubrication (red headings), and ornamental borders.
- Colors are medieval and muted: vellum cream, oak gall ink (dark brown-black), rubrication red, gold leaf, and deep blue.
- Surfaces are aged vellum or parchment — warm, fibrous, and slightly yellowed.
- Illuminated initials (oversized decorated first letters) are essential decorative elements.
- The mood is sacred, authoritative, and ancient — like reading a royal decree or holy text.

## Core Material Recipes

### 1) Vellum Surface

Aged parchment background.

- `bg-[#f0e6cc]` (warm aged vellum).
- Texture: SVG `feTurbulence` noise at `opacity-[0.05]` + `mix-blend-multiply` (fibrous vellum).
- Aging: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,140,80,0.06)_0%,transparent_40%)]`.

### 2) Blackletter Typography

Gothic calligraphy as the primary text.

- Heading: `font-[UnifrakturMaguntia] text-4xl text-[#1a1108]` (authentic fraktur).
- Body: `font-[UnifrakturCook] text-base text-[#2a1a08] leading-loose` (readable blackletter body).

### 3) Illuminated Drop Cap

Oversized decorated initial letter.

```html
<div class="relative inline-block float-left mr-3">
  <span class="font-[UnifrakturMaguntia] text-8xl font-bold text-[#8a1a1a] leading-[0.8]">I</span>
  <!-- Gold leaf box around the letter -->
  <div class="absolute inset-0 border-4 border-[#c9a84c] -m-2 pointer-events-none">
    <div class="absolute inset-0 bg-[#c9a84c]/10"></div>
  </div>
</div>
```

### 4) Rubricated Heading

Red ink heading (rubrication — medieval practice of red headings).

- `font-[UnifrakturMaguntia] text-2xl text-[#8a1a1a] font-bold tracking-wide`.

### 5) Ornamental Border Frame

Medieval manuscript border.

- `border-4 border-double border-[#5a3a1a] p-1`.
- Inner border: `outline outline-2 outline-[#c9a84c] outline-offset-2`.
- Corner flourishes: small SVG fleur-de-lis or knotwork at each corner.

### 6) Wax Seal

Red wax seal for authentication.

- `w-16 h-16 rounded-full bg-[#8a1a1a] border-2 border-[#5a0a0a] flex items-center justify-center rotate-[-3deg] shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.1)]`.
- Text: `text-[#e8dcc0] font-[UnifrakturMaguntia] font-bold text-xs`.

### 7) Blackletter Button

Button with Gothic script styling.

- `bg-[#1a1108] text-[#f0e6cc] font-[UnifrakturMaguntia] text-lg px-8 py-3 border-2 border-[#c9a84c] hover:bg-[#2a1a10] transition-colors`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Vellum | `#f0e6cc` | Primary background |
| Aged Parchment | `#e8dcc0` | Secondary surface |
| Oak Gall Ink | `#1a1108` | Primary text (near-black brown) |
| Sepia Ink | `#2a1a08` | Body text |
| Rubrication Red | `#8a1a1a` | Headings, initials, seals |
| Gold Leaf | `#c9a84c` | Borders, illumination, accents |
| Deep Blue | `#1a1a5a` | Rare manuscript accent |

Rules: Vellum cream and oak gall ink dominate. Red (rubrication) for emphasis. Gold for illumination and borders. The palette should feel like a 13th-century illuminated manuscript.

## Typography Recommendations

- **Display/headings:** UnifrakturMaguntia, UnifrakturCook (authentic blackletter/fraktur).
- **Body (readable blackletter):** UnifrakturCook, or Old English Text MT (for shorter text).
- **Fallback body:** EB Garamond, Lora (if blackletter is too hard to read for body text — use serif).
- **Labels:** `font-[UnifrakturMaguntia] text-sm tracking-wide`.

## Interaction Rules

- Default: sacred, ancient, authoritative.
- Hover: vellum darkens slightly, gold borders glow.
  - `hover:border-[#c9a84c] hover:shadow-[0_4px_12px_rgba(90,58,26,0.15)] transition-all duration-300`.
- Active: `active:translate-y-px`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#8a1a1a]/40`.
- Transitions: `transition-all duration-300` (patient, deliberate, like writing with a quill).

## Reusable Tailwind Tokens

- Vellum bg: `bg-[#f0e6cc]` with SVG noise overlay.
- Blackletter heading: `font-[UnifrakturMaguntia] text-[#1a1108]`.
- Rubrication: `text-[#8a1a1a]`.
- Illuminated cap: `font-[UnifrakturMaguntia] text-8xl text-[#8a1a1a] border-4 border-[#c9a84c]`.
- Wax seal: `rounded-full bg-[#8a1a1a] border-2 border-[#5a0a0a] rotate-[-3deg] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3)]`.
- Manuscript frame: `border-4 border-double border-[#5a3a1a] outline outline-2 outline-[#c9a84c]`.

## Quality Checklist

- Typography uses blackletter/fraktur fonts (UnifrakturMaguntia or equivalent).
- Background is aged vellum (`#f0e6cc`), not pure white.
- At least one illuminated drop cap (oversized decorated initial).
- Rubrication (red headings) present.
- Ornamental double border frame on major containers.
- At least one wax seal decorative accent.
- Gold leaf accents on borders and initials.
- The aesthetic reads as a medieval manuscript or royal document.
- Text color is oak-gall dark brown, not pure black.
- Everything feels ancient, sacred, and authoritative.

## Anti-Patterns

- Modern sans-serif typography (blackletter requires Gothic calligraphy fonts).
- Pure white backgrounds (use aged vellum `#f0e6cc`).
- Missing illuminated initials (these are the manuscript signature).
- Pure black text (use oak-gall brown `#1a1108`).
- Missing rubrication (red headings are essential medieval practice).
- Clean modern borders (use ornamental double-border frames).
- Fast modern animations (motion should be patient and deliberate).
- Missing wax seals (these add authentication and medieval charm).
- Missing gold leaf accents (gold illumination is essential).
- Bright modern colors (palette is medieval: vellum, ink, red, gold).

## Accessibility Considerations

- Blackletter fonts are SIGNIFICANTLY harder to read than standard fonts — use for headings/decoration, not body text.
- For body text, provide a readable serif fallback (EB Garamond, Lora).
- Vellum backgrounds with dark brown text provide good contrast (WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#8a1a1a]/40` (rubrication red ring).
- Illuminated initials should use CSS `::first-letter` for screen reader compatibility.
- Wax seals and ornamental SVGs must be `aria-hidden="true"`.
- Blackletter text must have sufficient size (18px+ for readability).
- For dyslexic users or screen readers, blackletter must have semantic text alternatives.
- The vellum texture must not reduce text contrast below WCAG AA.
