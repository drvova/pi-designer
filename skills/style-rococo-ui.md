---
name: rococo-ui
description: Build rococo UI components (ultra-ornate French court, pastel porcelain palette, shell/scroll ornaments, rocaille curves, sensuous asymmetry, playful lightness) with pink-and-gold delicacy, floral garlands, and the lighter, more whimsical successor to Baroque. Trigger this skill when the user asks for rococo, French court UI, Louis XV, Marie Antoinette, rocaille, or pastel ornate interfaces.
---

# Rococo UI

Use this skill to design and implementation ultra-ornate, delicately playful interfaces inspired by Rococo art: pastel porcelain palettes, shell-shaped ornaments (rocaille), sensuous asymmetrical curves, floral garlands, gold filigree, and the lighter, more whimsical style that succeeded the heavy drama of Baroque.

## Non-Negotiable Foundations

- Rococo is the LIGHTER, more PLAYFUL successor to Baroque: where Baroque is dark and dramatic, Rococo is pastel, delicate, and airy.
- The signature shape is the ROCAILLE: an S-curve shell/scroll ornament that appears on every border, corner, and divider.
- Colors are pastel and porcelain: rose pink, sky blue, mint cream, pale gold, and ivory — never dark or heavy.
- Asymmetry is key: Rococo compositions are deliberately unbalanced in a pleasing, organic way (unlike Baroque's strict symmetry).
- Gold filigree is delicate and thin — lace-like tracery, not heavy gilded slabs.
- Floral garlands, ribbon bows, and cupid/cherub motifs provide decorative accents.

## Core Material Recipes

### 1) Porcelain Pastel Panel

The foundational Rococo surface: pale pink/blue panel with gold filigree.

- `bg-gradient-to-br from-[#fce4ec] to-[#f8bbd0] border-2 border-[#c9a84c] p-8 shadow-[0_4px_12px_rgba(248,187,208,0.2),0_0_15px_rgba(201,168,76,0.08)]`.

### 2) Rocaille Shell Ornament

The signature S-curve shell/scallop SVG.

```html
<svg viewBox="0 0 80 40" class="w-20 h-10 text-[#c9a84c] opacity-40">
  <path fill="currentColor" d="M40,5 Q20,15 10,30 Q5,35 0,35 Q15,38 30,35 Q45,38 60,35 Q75,38 80,35 Q75,35 70,30 Q60,15 40,5 Z"/>
  <!-- Scalloped lines -->
  <path d="M15,30 Q20,20 25,28 M25,28 Q30,18 35,26 M35,26 Q40,16 45,26 M45,26 Q50,18 55,28 M55,28 Q60,20 65,30" fill="none" stroke="currentColor" stroke-width="0.5"/>
</svg>
```

### 3) Floral Garland Divider

Delicate hanging flower garland SVG.

```html
<svg viewBox="0 0 200 30" class="w-full text-[#e91e63] opacity-30">
  <path d="M0,5 Q100,20 200,5" fill="none" stroke="#5a8a3a" stroke-width="0.5"/>
  <circle cx="30" cy="12" r="3" fill="#f48fb1"/>
  <circle cx="70" cy="15" r="3" fill="#ce93d8"/>
  <circle cx="110" cy="14" r="3" fill="#f48fb1"/>
  <circle cx="150" cy="12" r="3" fill="#90caf9"/>
  <circle cx="180" cy="8" r="3" fill="#f48fb1"/>
</svg>
```

### 4) Ribbon Bow Accent

Silk ribbon bow decoration.

```html
<svg viewBox="0 0 60 40" class="w-15 h-10 text-[#e91e63] opacity-40">
  <path fill="currentColor" d="M30,20 Q10,5 15,20 Q10,35 30,20 Q50,5 45,20 Q50,35 30,20"/>
  <rect x="28" y="15" width="4" height="10" fill="currentColor"/>
</svg>
```

### 5) Rococo Button

Delicate pastel button with gold border.

- `bg-gradient-to-b from-[#f8bbd0] to-[#f48fb1] text-[#5a1a3a] font-serif font-medium px-8 py-3 border-2 border-[#c9a84c] rounded-full shadow-[0_2px_8px_rgba(244,143,177,0.2)] hover:shadow-[0_0_15px_rgba(201,168,76,0.2)] transition-all`.

### 6) Ivory Surface

Warm ivory porcelain background.

- `bg-[#fef8f0]` with subtle paper grain at `opacity-[0.03]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Rose Pink | `#f8bbd0` | Primary pastel |
| Deep Rose | `#f48fb1` | Secondary |
| Sky Blue | `#90caf9` | Cool pastel accent |
| Lilac | `#ce93d8` | Secondary pastel |
| Mint Cream | `#a5d6a7` | Rare accent |
| Porcelain Ivory | `#fef8f0` | Background |
| Soft Gold | `#c9a84c` | Filigree accents |
| Dark Rose | `#5a1a3a` | Text on pastel |

Rules: Pastels dominate (pink, blue, lilac). Gold appears as thin filigree — never heavy. Ivory provides the warm background. Everything should feel like a Marie Antoinette tea party at Versailles.

## Typography Recommendations

- **Display:** Cormorant, Playfair Display Italic (delicate elegant italic serif).
- **Body:** Lora, EB Garamond (warm readable serif).
- **Labels:** `font-serif italic text-sm tracking-wide` (delicate, italic, feminine).

## Reusable Tailwind Tokens

- Porcelain panel: `bg-gradient-to-br from-[#fce4ec] to-[#f8bbd0] border-2 border-[#c9a84c] shadow-[0_0_15px_rgba(201,168,76,0.08)]`.
- Rococo button: `bg-gradient-to-b from-[#f8bbd0] to-[#f48fb1] text-[#5a1a3a] border-2 border-[#c9a84c] rounded-full`.
- Floral garland: SVG curved vine with colored flower dots.
- Ribbon bow: SVG butterfly-shaped ribbon knot.
- Ivory bg: `bg-[#fef8f0]`.

## Quality Checklist

- Pastel color palette (rose pink, sky blue, lilac — NOT dark jewel tones).
- At least one rocaille shell ornament.
- At least one floral garland or ribbon bow decoration.
- Gold filigree borders (thin and delicate, not heavy Baroque gilding).
- Asymmetrical, playful composition.
- Porcelain ivory backgrounds.
- Typography uses italic elegant serif.
- The aesthetic reads as Rococo / French court / Marie Antoinette.
- Everything feels light, airy, playful, and delicately ornate.
- Rocaille S-curve shapes present (the signature motif).

## Anti-Patterns

- Dark heavy dramatic palettes (that is Baroque — Rococo is PASTEL).
- Heavy thick gold borders (Rococo gold is thin filigree lace).
- Strict symmetry (Rococo is deliberately asymmetrical).
- Serious or solemn mood (Rococo is playful and flirtatious).
- Sans-serif typography (Rococo demands italic elegant serif).
- Missing rocaille shell motifs (these are the DEFINING shape).
- Missing floral garlands or ribbon bows (these are essential decoration).
- Sharp angular shapes (everything is S-curves and scrolls).
- Heavy dramatic shadows (shadows are soft and pink-tinted).
- Cold or austere design (Rococo is warm, intimate, and sensual).

## Accessibility Considerations

- Pastel surfaces with dark rose text must be carefully verified (WCAG AA may be challenging — use `#5a1a3a` for adequate contrast).
- Focus states: `focus:ring-2 focus:ring-[#c9a84c]/50` (gold ring on pastel).
- Decorative SVGs (shells, garlands, ribbons) must be `aria-hidden="true"`.
- The pastel palette can reduce contrast — test all text sizes.
- Touch targets must be adequate despite ornate border styling.
- Gold filigree at thin widths may be hard for low-vision users — ensure borders are at least 2px.
