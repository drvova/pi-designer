---
name: thai-temple-ui
description: Build Thai temple UI components (ornate gilded gables, nag serpent guardians, gold leaf on red, stupas, lotus bud finials, glass mosaic inlay, Buddhist flag colors, Southeast Asian religious architecture) with gold-on-vermillion surfaces, serpent roof ornaments, and the luminous sacred architecture of Thai Buddhism. Trigger this skill when the user asks for Thai temple, wat design, Southeast Asian Buddhist, gilded gable, naga serpent, or Thai religious interfaces.
---

# Thai Temple UI

Use this skill to design and implementation luminous, ornate interfaces inspired by Thai Buddhist temple architecture: gilded gold gables (chod fa), nag serpent roof guardians, gold leaf on vermillion red, stupa silhouettes, glass mosaic inlay, and the richly decorated sacred architecture of Thailand.

## Core Material Recipes

### 1) Gold-on-Vermillion Panel

The signature Thai temple surface.

- `bg-[#8a1a08] border-[3px] border-[#c9a043] p-8 shadow-[0_4px_12px_rgba(0,0,0,0.2),0_0_15px_rgba(201,160,67,0.1)]`.
- Gold pattern overlay: SVG Thai floral pattern `stroke="#c9a043" opacity="0.15"`.

### 2) Naga Serpent Guardian

Multi-headed serpent roof guardian SVG.

```html
<svg viewBox="0 0 120 60" class="w-30 h-15 opacity-40">
  <g fill="none" stroke="#c9a043" stroke-width="1">
    <path d="M0,50 Q20,30 40,40 Q60,20 80,35 Q100,25 120,40"/>
    <!-- Seven heads -->
    <path d="M100,35 L95,20 L100,10 L105,20 Z"/>
    <path d="M105,33 L112,18 L108,8"/>
    <path d="M95,37 L88,22 L92,12"/>
    <!-- Body scales -->
    <path d="M15,45 L18,42 M30,42 L33,39 M45,40 L48,37 M60,33 L63,30 M75,35 L78,32" stroke-width="0.5"/>
  </g>
</svg>
```

### 3) Stupa Silhouette Accent

Thai chedi/stupa shape SVG.

```html
<svg viewBox="0 0 60 100" class="w-15 h-25 opacity-30">
  <g fill="#c9a043">
    <rect x="25" y="80" width="10" height="20"/>
    <path d="M15,80 L45,80 L40,65 L20,65 Z"/>
    <path d="M20,65 L40,65 L35,50 L25,50 Z"/>
    <path d="M25,50 L35,50 L32,35 L28,35 Z"/>
    <path d="M28,35 L32,35 L30,20 Z"/>
    <circle cx="30" cy="15" r="4"/>
    <path d="M26,15 L34,15 M30,11 L30,19"/>
  </g>
</svg>
```

### 4) Lotus Bud Finial

Thai roof finial (cho fa / hang hong) SVG.

```html
<svg viewBox="0 0 30 60" class="w-8 h-16 opacity-40">
  <path fill="#c9a043" d="M15,55 Q5,40 10,20 Q12,8 15,0 Q18,8 20,20 Q25,40 15,55"/>
</svg>
```

### 5) Glass Mosaic Panel

Surface suggesting glass-tile mosaic inlay.

- `bg-[#8a1a08]` with dot pattern: `bg-[radial-gradient(circle_at_20%_20%,#c9a043_1px,transparent_1px),radial-gradient(circle_at_50%_50%,#5acaf0_0.5px,transparent_0.5px),radial-gradient(circle_at_80%_30%,#e8dcc0_0.5px,transparent_0.5px)] bg-[size:8px_8px,6px_6px,10px_10px]`.

### 6) Thai Temple Button

Gold-accented button on vermillion.

- `bg-gradient-to-b from-[#c9a043] to-[#8a6a1a] text-[#3a0a00] font-serif font-medium uppercase tracking-widest px-8 py-3 border border-[#5a3a0a] shadow-[0_3px_0_#5a3a0a] hover:translate-y-1 hover:shadow-[0_1px_0_#5a3a0a] active:shadow-none transition-all`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Thai Gold | `#c9a043` | Gold leaf, gilding |
| Vermillion | `#8a1a08` | Red lacquer base |
| Deep Red | `#5a0a04` | Shadow red |
| Glass Blue | `#5acaf0` | Mirror mosaic tile |
| Glass Green | `#3a8a5a` | Mirror mosaic tile |
| Ivory | `#e8dcc0` | Mirror mosaic tile |
| Dark Wood | `#3a1a08` | Temple wood structure |

Rules: Gold on vermillion red is the core. Glass mosaic tiles add blue/green/ivory sparkle. The palette should feel like Wat Arun or the Grand Palace at golden hour.

## Typography Recommendations

- **Display:** Cinzel, Playfair Display (classical serif with golden weight).
- **Body:** Lora, Cormorant (warm readable serif).
- **Labels:** `font-serif font-medium uppercase tracking-widest text-[#c9a043]`.

## Reusable Tailwind Tokens

- Gold-on-vermillion: `bg-[#8a1a08] border-[3px] border-[#c9a043] shadow-[0_0_15px_rgba(201,160,67,0.1)]`.
- Glass mosaic: `bg-[#8a1a08]` with multi-color radial dot overlay.
- Thai button: `bg-gradient-to-b from-[#c9a043] to-[#8a6a1a] text-[#3a0a00] shadow-[0_3px_0_#5a3a0a]`.
- Naga serpent: SVG undulating body with multiple heads.
- Stupa: SVG stepped tower with lotus bud finial.

## Quality Checklist

- At least one gold-on-vermillion panel surface.
- At least one Thai decorative SVG (naga serpent, stupa, or lotus finial).
- Gold and vermillion red dominate the palette.
- Glass mosaic tile texture present somewhere.
- Typography is classical golden serif.
- The aesthetic reads as Thai temple / wat / Southeast Asian Buddhist.
- Everything feels luminous, ornate, and sacred.
- Gold appears as leaf/gilding accents (not flat fills).
- Serpent or stupa architectural references present.
- The palette should evoke the Grand Palace / Wat Arun.

## Anti-Patterns

- Missing Thai architectural references (naga/stupa/finial are essential).
- Flat untextured gold (Thai gold is leaf and glass mosaic, not flat paint).
- Cold blue dominant palette (Thai temples are gold-on-vermillion).
- Missing the glass mosaic texture (mirror-tile inlay is characteristic).
- Sans-serif typography (Thai temple design pairs with classical serif).
- Dark somber atmosphere (Thai temples are luminous and golden).
- Minimalist restraint (Thai religious art is richly decorative).
- Missing the vermillion red base surface (gold sits ON red lacquer).
- Modern abstract design (Thai temple art uses specific traditional forms).
- Missing serpent/naga references (naga guardians are essential wat elements).

## Accessibility Considerations

- Vermillion backgrounds with gold text must be verified (WCAG AA for large/bold text).
- Dark text on gold panels provides good contrast.
- Focus states: `focus:ring-2 focus:ring-[#c9a043]/50` (gold ring on vermillion).
- Decorative SVGs (naga, stupa, finial) must be `aria-hidden="true"`.
- Glass mosaic texture must not reduce text contrast.
- Touch targets must be adequate despite ornate border styling.
