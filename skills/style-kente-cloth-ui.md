---
name: kente-cloth-ui
description: Build Kente cloth UI components (West African Ghanaian woven textile, geometric strip patterns, specific color symbolism, silk/cotton warp-and-weft, Ashanti/Ewe cultural heritage, royal ceremonial cloth) with woven geometric bands, symbolic color combinations, and the rich textile tradition of Ghana. Trigger this skill when the user asks for Kente cloth, Ghanaian textile, Ashanti design, West African patterns, Ewe weaving, or royal African cloth interfaces.
---

# Kente Cloth UI

Use this skill to design and implementation vibrant, symbolic interfaces inspired by Ghanaian Kente cloth: woven geometric strip patterns, specific color symbolism (gold=royalty, green=renewal, red=sacrifice, black=spirituality), checkerboard and heddle-pulley motifs, and the rich cultural textile tradition of the Ashanti and Ewe peoples.

## Core Material Recipes

### 1) Kente Strip Pattern Background

Woven geometric strip bands (the signature Kente pattern).

- Vertical strips: `bg-[repeating-linear-gradient(90deg,#f5cc3a_0px,#f5cc3a_40px,#1a1a1a_40px,#1a1a1a_42px,#c41e1e_42px,#c41e1e_82px,#1a1a1a_82px,#1a1a1a_84px,#2a8a3a_84px,#2a8a3a_124px,#1a1a1a_124px,#1a1a1a_126px)]`.
- Each color strip represents a different symbolic thread.

### 2) Woven Checkerboard Motif

Interlocking warp-weft checkerboard (classic Kente design element).

- `bg-[repeating-conic-gradient(#f5cc3a_0deg_90deg,#1a1a1a_90deg_180deg,#c41e1e_180deg_270deg,#2a8a3a_270deg_360deg)] bg-[size:24px_24px]` (multi-color Kente checker).

### 3) Heddle Pattern Border

Geometric heddle-pulley decorative border.

```html
<svg viewBox="0 0 200 20" class="w-full opacity-40">
  <g fill="#f5cc3a">
    <rect x="0" y="5" width="10" height="10"/>
    <rect x="12" y="0" width="8" height="20"/>
    <rect x="22" y="5" width="10" height="10"/>
  </g>
  <g fill="#c41e1e">
    <rect x="35" y="0" width="8" height="20"/>
    <rect x="45" y="5" width="10" height="10"/>
    <rect x="57" y="0" width="8" height="20"/>
  </g>
  <g fill="#2a8a3a">
    <rect x="68" y="5" width="10" height="10"/>
    <rect x="80" y="0" width="8" height="20"/>
    <rect x="90" y="5" width="10" height="10"/>
  </g>
</svg>
```

### 4) Royal Kente Panel

Gold-dominant panel (for ceremonial/prestige content).

- `bg-[#f5cc3a] border-2 border-[#1a1a1a] p-6 shadow-[0_4px_12px_rgba(245,204,58,0.2)]`.

### 5) Kente Button

Woven-textile styled button.

- `bg-[#1a1a1a] text-[#f5cc3a] font-serif font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#f5cc3a] hover:bg-[#2a2a2a] transition-colors rounded-none`.

## Color Palette System (Symbolic Kente Colors)

| Color | Hex | Symbolism |
|---|---|---|
| Gold | `#f5cc3a` | Royalty, wealth, high status |
| Green | `#2a8a3a` | Renewal, growth, vegetation |
| Red | `#c41e1e` | Sacrifice, blood, struggle |
| Black | `#1a1a1a` | Spirituality, ancestors |
| Blue | `#1a3a8a` | Peace, harmony, love |
| White | `#f5ead0` | Purity, cleansing, sanctification |

Rules: Each color carries SPECIFIC cultural meaning. Gold and black are the most prestigious. Red and green are ceremonial. Choose colors for their MEANING, not just their look. The palette should feel like royal Ashanti court regalia.

## Typography Recommendations

- **Display:** Playfair Display, Cinzel (elegant serif with weight).
- **Body:** Lora, Source Serif Pro (warm readable serif).
- **Labels:** `font-serif font-bold uppercase tracking-widest text-sm`.

## Reusable Tailwind Tokens

- Kente strips: multi-color repeating linear gradient.
- Checkerboard: `bg-[repeating-conic-gradient(...)] bg-[size:24px_24px]`.
- Royal panel: `bg-[#f5cc3a] border-2 border-[#1a1a1a]`.
- Kente button: `bg-[#1a1a1a] text-[#f5cc3a] border-2 border-[#f5cc3a] rounded-none`.

## Quality Checklist

- At least one woven geometric strip pattern (the Kente signature).
- Symbolic colors used meaningfully (gold=royal, green=renewal, etc.).
- Checkerboard or heddle-pattern border decoration.
- Gold appears prominently (Kente = royal cloth).
- Woven-textile texture implied (striped/grid patterns).
- Typography is warm elegant serif.
- The aesthetic reads as Kente cloth / Ghanaian / Ashanti / West African textile.
- Colors are bold and saturated (Kente cloth is vibrantly colored).
- Everything feels culturally rich, ceremonial, and proudly African.
- Geometric patterns are regular and precise (woven cloth is structured).

## Anti-Patterns

- Random non-meaningful colors (Kente colors carry SPECIFIC symbolism).
- Missing the woven strip pattern (the vertical strips ARE Kente cloth).
- Pastel or muted colors (Kente is BOLD and SATURATED).
- Missing the checkerboard/heddle patterns (these are core Kente motifs).
- Missing gold (gold represents royalty — it is essential).
- Organic flowing patterns (Kente is GEOMETRIC and WOVEN).
- Sans-serif cold typography (Kente pairs with warm elegant serif).
- Missing the cultural context (Kente is not decoration — it is meaning).
- Asymmetric irregular patterns (Kente is precisely woven and regular).
- Single-color design (Kente always combines 4-6 symbolic colors).

## Accessibility Considerations

- Gold surfaces with dark text provide good contrast (verify WCAG AA).
- Dark surfaces with gold text must be verified (large/bold text for AA).
- Focus states: `focus:ring-4 focus:ring-[#f5cc3a]/50` (gold ring on dark).
- Kente pattern backgrounds should not be behind body text (use solid cards).
- Woven patterns must not reduce text contrast.
- Respect the deep cultural significance of Kente — it is not mere decoration.
- Each color's symbolism should be documented for accessibility context.
- Touch targets must be adequate despite woven border styling.
