---
name: vienna-secession-ui
description: Build Vienna Secession UI components (Klimt-inspired geometric gold, square checkerboard patterns, organic-meets-geometric ornamentation, gold leaf on dark surfaces, Secession Building geometry) with Klimt gold, checkerboard squares, and the elegant rebellion of turn-of-the-century Vienna. Trigger this skill when the user asks for Vienna Secession, Klimt aesthetic, Gustav Klimt UI, Secession Building, fin-de-siecle Vienna, or geometric gold ornament interfaces.
---

# Vienna Secession UI

Use this skill to design and implementation elegant interfaces inspired by the Vienna Secession movement: Gustav Klimt's geometric gold-leaf patterns, square checkerboard ornaments, the fusion of organic curves with strict geometric grids, gold-on-dark opulence, and the motto "To every age its art, to art its freedom."

## Non-Negotiable Foundations

- Vienna Secession blends Art Nouveau's organic curves with GEOMETRIC RIGOR: think Klimt's square patterns within flowing organic compositions.
- Gold leaf is the dominant surface treatment: flat geometric gold patterns on dark or warm surfaces.
- Square checkerboard grids are a signature motif (Klimt's "golden checkerboard" appears in many works).
- The Secession Building motto "DER ZEIT IHRE KUNST / DER KUNST IHRE FREIHEIT" embodies the philosophy: every age gets the art it needs.
- Colors are opulent: gold, deep black, rich burgundy, forest green, and the warm flesh tones of Klimt portraits.
- Typography blends classical elegance with geometric severity.

## Core Material Recipes

### 1) Klimt Gold Pattern Surface

Flat geometric gold checkerboard/pattern background.

- `bg-[#1a1a0a]` base with gold pattern overlay.
- Checkerboard: `bg-[repeating-conic-gradient(#c9a84c_0deg_90deg,transparent_90deg_180deg)] bg-[size:16px_16px] opacity-20`.
- Or dots: `bg-[radial-gradient(#c9a84c_2px,transparent_2px)] bg-[size:12px_12px] opacity-20`.

### 2) Gold Leaf Panel

Dark surface with applied gold-leaf pattern.

- `bg-[#0a0a0a] border-2 border-[#c9a84c] p-8 shadow-[0_0_20px_rgba(201,168,76,0.1)]`.
- Gold pattern overlay: `before:absolute before:inset-0 before:bg-[repeating-conic-gradient(#c9a84c_0deg_90deg,transparent_90deg_180deg)] before:bg-[size:20px_20px] before:opacity-10 before:pointer-events-none`.

### 3) Square Ornament Motif

Klimt-style geometric squares as decorative accents.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12">
  <rect x="20" y="20" width="20" height="20" fill="#c9a84c"/>
  <rect x="0" y="0" width="8" height="8" fill="#c9a84c" opacity="0.6"/>
  <rect x="52" y="0" width="8" height="8" fill="#c9a84c" opacity="0.6"/>
  <rect x="0" y="52" width="8" height="8" fill="#c9a84c" opacity="0.6"/>
  <rect x="52" y="52" width="8" height="8" fill="#c9a84c" opacity="0.6"/>
  <rect x="26" y="0" width="8" height="8" fill="#c9a84c" opacity="0.4"/>
  <rect x="26" y="52" width="8" height="8" fill="#c9a84c" opacity="0.4"/>
</svg>
```

### 4) Secession Button

Elegant gold-accented button.

- `bg-gradient-to-b from-[#c9a84c] to-[#8a6a1a] text-[#0a0a0a] font-serif font-medium uppercase tracking-[0.15em] px-8 py-3 border border-[#5a3a0a] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(201,168,76,0.3)] transition-all`.

### 5) Spiral/Tree-of-Life Accent

Klimt Tree of Life inspired spiral.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16 text-[#c9a84c] opacity-40">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <path d="M30,80 L30,30"/>
    <path d="M30,30 Q15,25 15,10 Q15,0 25,5"/>
    <path d="M30,30 Q45,25 45,10 Q45,0 35,5"/>
    <path d="M30,45 Q20,40 15,50"/>
    <path d="M30,45 Q40,40 45,50"/>
  </g>
  <!-- Gold squares on branches -->
  <rect x="13" y="8" width="4" height="4" fill="currentColor"/>
  <rect x="43" y="8" width="4" height="4" fill="currentColor"/>
</svg>
```

### 6) Gold-Leaf Text Treatment

Text with gold gradient fill.

- `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#8a6a1a] font-serif`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Gold Leaf | `#c9a84c` | Primary accent, patterns, borders |
| Light Gold | `#f5d76e` | Highlights |
| Dark Gold | `#8a6a1a` | Deep gold shadows |
| Deep Black | `#0a0a0a` | Primary dark surface |
| Rich Burgundy | `#3a0a0a` | Warm accent |
| Forest Green | `#0a3a1a` | Cool accent |
| Warm Flesh | `#e8c4a0` | Rare warm surface |
| Ink Brown | `#2a1a08` | Text on light |

Rules: Gold and black dominate. The palette is the "golden phase" of Klimt — opulent, geometric, and sensual. Gold patterns float on dark backgrounds.

## Typography Recommendations

- **Display:** Playfair Display, Cinzel, or Cormorant (elegant classical serif).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif font-medium uppercase tracking-[0.15em]` (geometric severity).
- The Secessionist motto "DER ZEIT IHRE KUNST" could appear as a decorative label.

## Interaction Rules

- Default: opulent, geometric, elegant.
- Hover: gold glow intensifies, checkerboard pattern brightens.
  - `hover:shadow-[0_0_16px_rgba(201,168,76,0.3)] transition-all duration-300`.
- Active: `active:scale-[0.98]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50`.
- Transitions: `transition-all duration-300` (elegant, deliberate).

## Reusable Tailwind Tokens

- Klimt checkerboard: `bg-[repeating-conic-gradient(#c9a84c_0deg_90deg,transparent_90deg_180deg)] bg-[size:16px_16px]`.
- Gold leaf panel: `bg-[#0a0a0a] border-2 border-[#c9a84c] shadow-[0_0_20px_rgba(201,168,76,0.1)]`.
- Secession button: `bg-gradient-to-b from-[#c9a84c] to-[#8a6a1a] text-[#0a0a0a] font-serif uppercase tracking-[0.15em]`.
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f5d76e] via-[#c9a84c] to-[#8a6a1a]`.

## Quality Checklist

- Gold geometric patterns (checkerboard, squares, dots) are present.
- Gold-on-dark opulent surface treatment.
- At least one square/checkerboard Klimt-style ornament.
- Color palette is gold + black + optional jewel tone.
- Typography is elegant classical serif with geometric tracking.
- At least one spiral/Tree-of-Life inspired decoration.
- The aesthetic reads as Klimt golden phase / Vienna Secession.
- Gold leaf text treatment on headings.
- Everything feels opulent, geometric, and rebellious.
- The composition blends organic curves with geometric rigor.

## Anti-Patterns

- Pure Art Nouveau without geometric structure (Secession adds geometry).
- Missing gold patterns (Klimt's geometric gold is the signature).
- Light backgrounds (Secessionist gold shines on dark).
- Sans-serif typography (Secession requires elegant serif).
- Pure organic curves without any geometric elements (need the blend).
- Missing checkerboard/square motifs (these are the Klimt signature).
- Modern minimalist restraint (Secession is opulent).
- Pastel or muted palettes (gold and black dominate).
- Missing the Tree-of-Life/spiral reference (Klimt's most famous motif).
- Flat unpatterned surfaces (every dark surface should have gold pattern overlay).
