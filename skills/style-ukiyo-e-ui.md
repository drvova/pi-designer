---
name: ukiyo-e-ui
description: Build ukiyo-e UI components (Japanese woodblock print aesthetic, Hokusai-inspired flat color fields, Prussian blue, bold ink outlines, washi paper texture, asymmetric composition) with limited palettes, decisive outlines, and the clarity of Edo-period printmaking. Trigger this skill when the user asks for ukiyo-e, Japanese woodblock print, Hokusai style, Great Wave aesthetic, Edo-period design, or nishiki-e color layering interfaces.
---

# Ukiyo-e UI

Use this skill to design and implementation interfaces inspired by Japanese woodblock prints: flat color fields, bold ink outlines, Prussian blue pigments, washi paper texture, asymmetric composition, and the disciplined clarity of Edo-period printmaking.

## Non-Negotiable Foundations

- Ukiyo-e is flat color with ZERO gradients. Color fields carry the composition through their placement and contrast, not through depth or shadow.
- Bold outlines define every form: thick near-black ink lines frame panels, buttons, and content blocks with confidence.
- The palette is limited and intentional: 4-6 colors working structurally, not decoratively. Prussian blue is the signature pigment.
- Asymmetric balance over centered symmetry: tension and movement make compositions alive.
- Negative space (ma) is compositional, not leftover. Every empty area is a deliberate decision.
- Paper texture (washi) is the base surface — warm, fibrous, never pure white.

## Core Material Recipes

### 1) Washi Paper Surface

The foundational surface: warm Japanese paper with fibrous texture.

- Background: `bg-[#f5ead0]` (warm washi paper tone).
- Texture: subtle SVG noise at `opacity-[0.04]` to simulate paper fibers.
- Optional vertical fiber lines: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_40px,rgba(0,0,0,0.015)_40px,rgba(0,0,0,0.015)_41px)]`.

### 2) Ink-Outlined Panel

Panel with bold brush-like ink border.

- `bg-[#f5ead0] border-[3px] border-[#1a1a1a] p-6 rounded-none`.
- The border is thick, confident, and hand-drawn in feel.

### 3) Prussian Blue Color Block

The signature ukiyo-e pigment: deep Prussian blue.

- `bg-[#0a3d62] border-[3px] border-[#1a1a1a] p-6 text-[#f5ead0]`.

### 4) Vermilion Accent Block

Traditional Japanese vermilion red (torii gate red).

- `bg-[#c4170e] border-[3px] border-[#1a1a1a] p-6 text-[#f5ead0]`.

### 5) Ukiyo-e Button

Bold, flat button with thick ink outline.

- Primary: `bg-[#0a3d62] text-[#f5ead0] font-bold text-base px-8 py-3 border-[3px] border-[#1a1a1a] hover:bg-[#082e4a] transition-colors`.
- Vermilion: `bg-[#c4170e] text-[#f5ead0] font-bold px-8 py-3 border-[3px] border-[#1a1a1a]`.

### 6) Hanko (Signature Seal)

Traditional red artist's stamp/seal as a decorative accent.

- `w-12 h-12 bg-[#c4170e] border-2 border-[#8a0e08] flex items-center justify-center rounded-[2px] rotate-[-3deg]`.
- Text inside: `text-[#f5ead0] font-serif font-bold text-xs`.

### 7) Wave Pattern Divider

Hokusai-inspired wave SVG as a section divider.

```html
<svg viewBox="0 0 200 20" class="w-full text-[#0a3d62]">
  <path fill="currentColor" d="M0,15 Q25,5 50,15 Q75,25 100,15 Q125,5 150,15 Q175,25 200,15 L200,20 L0,20 Z"/>
</svg>
```

### 8) Asymmetric Layout

Ukiyo-e compositions use deliberate asymmetry (not centered grids).

- Use `grid-cols-[1fr_2fr]` or `grid-cols-[2fr_1fr]` for asymmetric content columns.
- Offset images and text blocks to create visual tension.
- Use `ma` (negative space) intentionally — large empty areas are deliberate.

## Color Palette System

### Core Ukiyo-e Palette

| Color | Hex | Pigment Name | Role |
|---|---|---|---|
| Prussian Blue | `#0a3d62` | Beroin (ベロ藍) | Primary, depth, water, sky |
| Vermilion | `#c4170e` | Shu (朱) | Accent, seals, warmth |
| Sumi Black | `#1a1a1a` | Sumi (墨) | Outlines, text, structure |
| Washi Paper | `#f5ead0` | Washi (和紙) | Background, surfaces |
| Pine Green | `#2d5a27` | Matsuba (松葉) | Nature, secondary accent |
| Warm Yellow | `#e8a317` | Tōō (藤黄) | Highlight, gold-leaf effect |
| Soft Gray | `#a0988a` | Nibi (鈍色) | Secondary surfaces |

Rules: 4-6 colors maximum per composition. Colors are FLAT — no gradients, no tints. Prussian blue is the hero. Vermilion is the accent. Sumi black is the outline. Washi paper is always the base. The palette should feel like a Great Wave off Kanagawa.

## Typography Recommendations

Ukiyo-e typography blends Japanese aesthetic with Western readability:

- **Display headings:** Playfair Display, Cormorant, or EB Garamond (elegant serif with brush-like quality).
- **Alternative display:** Noto Serif JP, Sawarabi Mincho (Japanese-influenced serif).
- **Body:** Lora, Source Serif Pro (readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-wide text-sm` (like a printed seal label).
- **Vertical text:** `writing-mode: vertical-rl` for decorative Japanese-style text accents.
- Avoid sans-serif for primary text. Ukiyo-e is serif and brush-like.

## Component Architecture Pattern

1. Washi paper background (warm, textured, never pure white).
2. Asymmetric layout grid (1:2 or 2:1 column ratios, not centered).
3. Ink-outlined panels with flat color fields (Prussian blue, vermilion, pine green).
4. Bold ink-outlined buttons.
5. Hanko (red signature seal) accents.
6. Wave pattern dividers between sections.
7. Generous negative space (ma) — deliberate empty areas.
8. Optional vertical Japanese text accents.

## Interaction Rules

- Default state: flat, composed, disciplined.
- Hover: color block darkens slightly or border thickens.
  - `hover:bg-[#082e4a] transition-colors duration-200`.
- Active: `active:bg-[#062440]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4170e] focus:ring-offset-2 focus:ring-offset-[#f5ead0]`.
- Transitions: `transition-colors duration-200` (clean, precise, like a woodblock impression).
- No decorative or spring animations. Motion is deliberate and flat.

## Reusable Tailwind Tokens

- Washi paper: `bg-[#f5ead0]`
- Ink outline: `border-[3px] border-[#1a1a1a]`
- Prussian blue block: `bg-[#0a3d62] text-[#f5ead0] border-[3px] border-[#1a1a1a]`
- Vermilion block: `bg-[#c4170e] text-[#f5ead0] border-[3px] border-[#1a1a1a]`
- Ukiyo-e button: `bg-[#0a3d62] text-[#f5ead0] font-bold border-[3px] border-[#1a1a1a] px-8 py-3`
- Hanko seal: `w-12 h-12 bg-[#c4170e] border-2 border-[#8a0e08] rotate-[-3deg] flex items-center justify-center`
- Asymmetric grid: `grid grid-cols-[1fr_2fr] gap-8`
- Wave divider: SVG path `fill="#0a3d62"` in a wave shape.

## Quality Checklist (must pass)

- Colors are FLAT (no gradients, no tints, no shadows for depth).
- Bold ink outlines (`border-[3px] border-[#1a1a1a]`) on all major elements.
- Prussian blue is present as the primary color.
- At least one hanko (red seal) accent.
- Background is washi paper tone (`#f5ead0`), never pure white.
- Layout is asymmetric (not centered or symmetrical).
- Limited palette: 4-6 structural colors maximum.
- Generous negative space (ma) is used deliberately.
- Typography is elegant serif (no sans-serif for primary text).
- Wave pattern or Japanese-inspired SVG divider present.

## Anti-Patterns

- Gradients or soft shadows (ukiyo-e is FLAT color only).
- Symmetrical, centered layouts (asymmetry creates the tension).
- More than 6 colors (ukiyo-e uses a limited, intentional palette).
- Pure white backgrounds (use warm washi `#f5ead0`).
- Thin borders (borders are thick, confident, brush-like — `border-[3px]`).
- Sans-serif primary typography (ukiyo-e is elegant serif).
- Missing the Prussian blue (it is THE signature pigment).
- Missing the hanko/seal accent (the red seal is an essential cultural reference).
- Cluttered layouts without negative space (ma is essential).
- Soft, organic shapes without bold outlines (ukiyo-e outlines are decisive).

## Accessibility Considerations

- Flat color fields with bold outlines aid visual identification.
- Prussian blue (`#0a3d62`) with washi paper text provides good contrast.
- Vermilion (`#c4170e`) with text must be verified for WCAG AA.
- Bold outlines (`border-[3px]`) provide strong structural definition for low-vision users.
- Focus states: `focus:ring-2 focus:ring-[#c4170e]` (vermilion ring on washi).
- Hanko seals need `aria-label` describing their meaning.
- Decorative wave SVGs must be `aria-hidden="true"`.
- The flat, high-contrast aesthetic is naturally accessible for visual clarity.
- Touch targets: `px-8 py-3` buttons with thick borders are sufficient.
