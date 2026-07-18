---
name: belle-epoque-cafe-ui
description: Build Belle Epoque cafe UI components (wrought iron table, absinthe glass, Parisian awning, metro sign, patisserie display, Eiffel tower distant, cancan poster) with Parisian cafe charm, ornate ironwork, and the joie de vivre of turn-of-the-century Paris. Trigger this skill when the user asks for Belle Epoque, Parisian cafe, French cafe UI, Belle Epoque aesthetic, absinthe green UI, wrought iron ornaments, Parisian awning, patisserie display, cafe terrasse, Montmartre style, Art Nouveau Paris, fin de siecle design, or turn-of-the-century Paris interfaces.
---

# Belle Epoque Cafe UI

Use this skill to design and implement charming interfaces inspired by the Belle Epoque cafe culture of 1890s-1914 Paris: wrought iron scrollwork, absinthe green accents, striped Parisian awnings, Art Nouveau metro signage, patisserie glass cases, and the joyful conviviality of sidewalk cafe terrasses.

## Non-Negotiable Foundations

- Belle Epoque celebrates HANDCRAFTED ORNAMENT through WROUGHT IRON SCROLLWORK, organic curves, and Art Nouveau botanical forms — NOT the geometric precision of Art Deco or the minimalism of modern design.
- The atmosphere is a Parisian cafe terrasse: striped awnings overhead, wrought iron tables and chairs on cobblestones, the glow of absinthe green through a glass, the sweetness of a patisserie window.
- Color anchoring: iron black grounds the palette, absinthe green provides the signature accent, awning red stripes warm the composition, and metro cream provides the parchment-like light surface.
- Ornamentation is organic and curvilinear: iron scrolls curl into botanical tendrils, stemware silhouettes are elegant and elongated, poster illustrations are hand-drawn with flowing lines.
- Typography mixes Art Nouveau display lettering with elegant French serif body text — it should feel like a hand-lettered menu or a Montmartre cafe sign.
- The mood is joie de vivre: convivial, slightly decadent, warm, and inviting — a place where artists, writers, and absinthe drinkers gathered.

## Core Material Recipes

### 1) Wrought Iron Scroll Panel

The signature Belle Epoque decorative border: ornate scrolled ironwork framing content.

```html
<div class="relative border-2 border-[#1a1a1a] p-8 bg-[#f0e8d0]">
  <svg class="absolute top-0 left-0 w-12 h-12 text-[#1a1a1a] -translate-x-1 -translate-y-1" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M24,48 C24,36 12,28 4,24 C12,20 24,12 24,0"/>
    <path d="M4,24 C8,20 14,22 12,28 C10,34 4,30 4,24Z" fill="currentColor" opacity="0.3"/>
    <circle cx="4" cy="24" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute top-0 right-0 w-12 h-12 text-[#1a1a1a] translate-x-1 -translate-y-1 scale-x-[-1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M24,48 C24,36 12,28 4,24 C12,20 24,12 24,0"/>
    <path d="M4,24 C8,20 14,22 12,28 C10,34 4,30 4,24Z" fill="currentColor" opacity="0.3"/>
    <circle cx="4" cy="24" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute bottom-0 left-0 w-12 h-12 text-[#1a1a1a] -translate-x-1 translate-y-1 scale-y-[-1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M24,48 C24,36 12,28 4,24 C12,20 24,12 24,0"/>
    <path d="M4,24 C8,20 14,22 12,28 C10,34 4,30 4,24Z" fill="currentColor" opacity="0.3"/>
    <circle cx="4" cy="24" r="2" fill="currentColor"/>
  </svg>
  <svg class="absolute bottom-0 right-0 w-12 h-12 text-[#1a1a1a] translate-x-1 translate-y-1 scale-x-[-1] scale-y-[-1]" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M24,48 C24,36 12,28 4,24 C12,20 24,12 24,0"/>
    <path d="M4,24 C8,20 14,22 12,28 C10,34 4,30 4,24Z" fill="currentColor" opacity="0.3"/>
    <circle cx="4" cy="24" r="2" fill="currentColor"/>
  </svg>
  <!-- Content on top -->
</div>
```

### 2) Striped Parisian Awning

The iconic red-and-cream striped cafe canopy.

```html
<div class="relative w-full h-16 overflow-hidden">
  <svg class="w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="none">
    <defs>
      <clipPath id="awning-scallop">
        <path d="M0,0 L800,0 L800,52 Q760,64 720,52 Q680,40 640,52 Q600,64 560,52 Q520,40 480,52 Q440,64 400,52 Q360,40 320,52 Q280,64 240,52 Q200,40 160,52 Q120,64 80,52 Q40,40 0,52 Z"/>
      </clipPath>
    </defs>
    <g clip-path="url(#awning-scallop)">
      <rect x="0" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="40" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="80" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="120" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="160" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="200" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="240" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="280" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="320" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="360" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="400" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="440" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="480" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="520" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="560" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="600" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="640" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="680" y="0" width="40" height="56" fill="#f0e8d0"/>
      <rect x="720" y="0" width="40" height="56" fill="#c44040"/>
      <rect x="760" y="0" width="40" height="56" fill="#f0e8d0"/>
    </g>
  </svg>
</div>
```

### 3) Absinthe Glass

Green liquid in an elegant stemmed glass with sugar spoon.

```html
<svg viewBox="0 0 80 140" class="w-16 h-28 text-[#80c040]">
  <!-- Glass bowl -->
  <path d="M20,30 Q18,60 24,80 L28,85 Q30,88 30,90 L30,100 Q30,105 25,110 L20,115 Q18,118 20,120 L60,120 Q62,118 60,115 L55,110 Q50,105 50,100 L50,90 Q50,88 52,85 L56,80 Q62,60 60,30 Z" fill="currentColor" opacity="0.35" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Liquid fill -->
  <path d="M22,45 Q20,60 25,78 L55,78 Q60,60 58,45 Z" fill="#80c040" opacity="0.6"/>
  <!-- Glass rim highlight -->
  <ellipse cx="40" cy="30" rx="21" ry="6" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <ellipse cx="40" cy="30" rx="21" ry="6" fill="#e8f0ff" opacity="0.15"/>
  <!-- Sugar spoon -->
  <line x1="55" y1="20" x2="40" y2="60" stroke="#8a8a7a" stroke-width="1.5"/>
  <ellipse cx="56" cy="18" rx="5" ry="3" fill="#f0e8d0" stroke="#8a8a7a" stroke-width="0.5"/>
  <!-- Stem base -->
  <ellipse cx="40" cy="120" rx="18" ry="4" fill="none" stroke="#1a1a1a" stroke-width="1"/>
</svg>
```

### 4) Metro Art Nouveau Sign

The Parisian metro entrance frame in Hector Guimard's Art Nouveau style.

```html
<svg viewBox="0 0 120 80" class="w-28 h-16 text-[#80c040]">
  <!-- Outer Art Nouveau frame -->
  <path d="M20,75 Q10,60 15,40 Q18,25 30,15 Q40,8 60,5 Q80,8 90,15 Q102,25 105,40 Q110,60 100,75" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <!-- Organic tendrils left -->
  <path d="M15,40 Q5,35 8,25 Q10,18 18,20" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
  <path d="M15,50 Q2,48 5,38" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <!-- Organic tendrils right -->
  <path d="M105,40 Q115,35 112,25 Q110,18 102,20" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
  <path d="M105,50 Q118,48 115,38" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <!-- METRO text -->
  <text x="60" y="50" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#f0e8d0">METRO</text>
  <!-- Bottom plaque -->
  <rect x="35" y="55" width="50" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

### 5) Patisserie Glass Display Case

A glass-fronted pastry case with golden shelving and delicate items.

- Outer: `border-2 border-[#d4a868] bg-[#f0e8d0] p-4`.
- Glass panels: `[background:repeating-linear-gradient(135deg,transparent,transparent_4px,rgba(255,255,255,0.08)_4px,rgba(255,255,255,0.08)_5px)] border border-[#d4a868]/40`.
- Shelves: `border-b border-[#d4a868]` with `h-px bg-gradient-to-r from-transparent via-[#d4a868] to-transparent`.
- Inner glow: `[box-shadow:inset_0_0_20px_rgba(212,168,104,0.15)]`.

### 6) Cobblestone Pattern Background

A subtle repeating cobblestone texture.

```html
<div class="relative bg-[#8a8a7a] overflow-hidden">
  <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="cobbles" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="11" height="11" rx="3" fill="none" stroke="#7a7a6a" stroke-width="0.8"/>
        <rect x="13" y="0" width="11" height="11" rx="3" fill="none" stroke="#7a7a6a" stroke-width="0.8"/>
        <rect x="6" y="13" width="11" height="11" rx="3" fill="none" stroke="#7a7a6a" stroke-width="0.8"/>
        <rect x="19" y="13" width="11" height="11" rx="3" fill="none" stroke="#7a7a6a" stroke-width="0.8"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#cobbles)"/>
  </svg>
</div>
```

### 7) Cancan Poster Accent

A vintage-style poster card with a dancer silhouette, evoking Montmartre cabaret.

- Poster frame: `border-4 border-[#d4a868] p-1 bg-[#c44040]`.
- Inner: `p-4 bg-[#f0e8d0]`.
- Silhouette: `<svg viewBox="0 0 60 100" class="text-[#1a1a1a]">` with a stylized dancer figure in silhouette.
- Title below: `font-serif italic text-[#1a1a1a] text-center text-lg`.

### 8) Eiffel Tower Distant Silhouette

A distant skyline accent showing the Eiffel Tower in muted tones.

```html
<svg viewBox="0 0 200 60" class="w-full h-12 text-[#8a8a7a] opacity-25">
  <!-- Eiffel Tower -->
  <path d="M95,60 L97,35 L93,35 L90,15 L94,15 L96,5 L97,0 L98,5 L102,15 L106,15 L110,35 L106,35 L108,60 Z" fill="currentColor"/>
  <!-- Ground line -->
  <line x1="0" y1="60" x2="200" y2="60" stroke="currentColor" stroke-width="0.5"/>
  <!-- Distant buildings -->
  <rect x="20" y="45" width="12" height="15" fill="currentColor" opacity="0.5"/>
  <rect x="35" y="40" width="8" height="20" fill="currentColor" opacity="0.4"/>
  <rect x="150" y="42" width="15" height="18" fill="currentColor" opacity="0.5"/>
  <rect x="170" y="48" width="10" height="12" fill="currentColor" opacity="0.4"/>
</svg>
```

### 9) Cafe Terrasse Table

A wrought iron cafe table with a round top and scrolled legs.

```html
<svg viewBox="0 0 120 100" class="w-24 h-20 text-[#1a1a1a]">
  <!-- Table top -->
  <ellipse cx="60" cy="25" rx="55" ry="8" fill="none" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="60" cy="25" rx="55" ry="8" fill="#d4a868" opacity="0.15"/>
  <!-- Center column -->
  <line x1="60" y1="33" x2="60" y2="75" stroke="currentColor" stroke-width="2"/>
  <!-- Scrolled legs -->
  <path d="M60,75 Q40,80 30,95" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M60,75 Q80,80 90,95" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M60,75 Q60,82 55,95" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M60,75 Q60,82 65,95" fill="none" stroke="currentColor" stroke-width="1"/>
  <!-- Scroll detail -->
  <circle cx="30" cy="95" r="3" fill="currentColor" opacity="0.3"/>
  <circle cx="90" cy="95" r="3" fill="currentColor" opacity="0.3"/>
</svg>
```

### 10) Cafe Menu Board

A chalkboard-style menu with ornate framing and elegant lettering.

- Board: `bg-[#2a2a2a] border-4 border-[#d4a868] p-6`.
- Chalk texture: `[background-image:url("data:image/svg+xml,...")]` with subtle noise.
- Title: `font-serif italic text-[#f0e8d0] text-2xl text-center mb-4`.
- Items: `font-serif text-[#f0e8d0]/80 text-sm border-b border-[#f0e8d0]/10 pb-2 mb-2`.
- Price: `float-right font-serif text-[#d4a868]`.
- Decorative rule: `bg-gradient-to-r from-transparent via-[#d4a868]/40 to-transparent h-px my-3`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Iron Black | `#1a1a1a` | Primary dark, wrought iron, text |
| Absinthe Green | `#80c040` | Primary accent, metro sign, glass |
| Awning Red | `#c44040` | Warm accent, awnings, posters |
| Metro Cream | `#f0e8d0` | Primary light surface, parchment |
| Parisian Gray | `#8a8a7a` | Secondary neutral, cobblestone |
| Pastry Golden | `#d4a868` | Warm metallic, shelf trim, frames |
| Poster Magenta | `#b03060` | Cabaret poster accent |
| Poster Sunflower | `#e0b020` | Cabaret poster highlight |
| Cobblestone | `#7a7a6a` | Ground texture, depth |
| Chalkboard | `#2a2a2a` | Menu board surface |

Rules: Iron black and metro cream form the primary contrast. Absinthe green is the signature accent — use sparingly but recognizably. Awning red provides warmth and movement. Pastry golden frames and trims luxury elements. The palette evokes a Parisian cafe at golden hour.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond, or EB Garamond (high-contrast French serif with flourish).
- **Alternative:** Cinzel Decorative, Great Vibes (script with Art Nouveau curves).
- **Body:** Cormorant, Lora, or Source Serif Pro (elegant, readable serif).
- **Labels:** `font-serif italic text-[#1a1a1a] uppercase tracking-[0.12em] text-xs` (cafe menu labeling style).
- **Chalkboard:** `font-serif text-[#f0e8d0] italic` on dark surfaces (chalk menu lettering).

## Component Architecture Pattern

Belle Epoque cafe UI follows a layered atmosphere model:

1. **Ground Layer:** Cobblestone or aged stone texture (`bg-[#8a8a7a]` with cobblestone SVG pattern).
2. **Structure Layer:** Wrought iron frames, awning canopy, metro sign (the physical cafe elements).
3. **Display Layer:** Patisserie cases, menu boards, poster frames (the merchandise and information).
4. **Accent Layer:** Absinthe glass, sugar spoon, Eiffel tower silhouette (atmospheric details).
5. **Text Layer:** Elegant serif typography over cream or dark surfaces.

Panels always have an iron-scroll border or a golden frame. Surfaces alternate between cream parchment and chalkboard dark. Decorative elements (scrolls, tendrils, silhouettes) appear at corners and transitions, never as random scatter.

## Interaction Rules

- Hover on wrought iron elements: subtle `hover:drop-shadow-[0_0_6px_rgba(128,192,64,0.3)]` (absinthe glow).
- Hover on menu items: `hover:bg-[#d4a868]/10 transition-colors`.
- Awning panels: `hover:translate-y-0.5 transition-transform` (gentle sway).
- Buttons: `bg-gradient-to-b from-[#c44040] to-[#8a2020] text-[#f0e8d0] font-serif uppercase tracking-[0.1em] px-6 py-2 border border-[#d4a868] hover:shadow-[0_0_12px_rgba(128,192,64,0.2)] transition-all`.
- Transitions are slow and elegant: `transition-all duration-500 ease-in-out` — nothing snaps, everything drifts.
- Scrollwork animations: gentle rotation or scale on hover, like iron catching light.

## Reusable Tailwind Tokens

- Iron scroll panel: `border-2 border-[#1a1a1a] bg-[#f0e8d0] p-8`.
- Golden frame: `border-4 border-[#d4a868] p-1`.
- Absinthe glow: `shadow-[0_0_12px_rgba(128,192,64,0.2)]`.
- Parchment surface: `bg-[#f0e8d0] text-[#1a1a1a]`.
- Chalkboard surface: `bg-[#2a2a2a] text-[#f0e8d0] border-4 border-[#d4a868]`.
- Awning stripe: alternating `bg-[#c44040]` and `bg-[#f0e8d0]` at 40px width.
- Cobblestone ground: `bg-[#8a8a7a]` with SVG pattern overlay.
- Cafe button: `bg-gradient-to-b from-[#c44040] to-[#8a2020] text-[#f0e8d0] font-serif border border-[#d4a868]`.
- Poster card: `border-4 border-[#d4a868] bg-[#c44040] p-1` inner `bg-[#f0e8d0] p-4`.
- Menu text: `font-serif italic text-[#1a1a1a] uppercase tracking-[0.12em]`.

## Quality Checklist

- At least one wrought iron scroll element present (corners, borders, or dividers).
- Absinthe green appears as an accent color on at least one element.
- Parchment cream (`#f0e8d0`) is a dominant surface color on light sections.
- Striped awning motif or its color pair (red/cream) appears somewhere.
- Typography is elegant serif (Playfair Display, Cormorant, or Garamond).
- Decorative elements are organic and curvilinear (no geometric Deco patterns).
- At least one atmospheric detail (absinthe glass, metro sign, Eiffel tower, cancan poster).
- The aesthetic reads as Belle Epoque / Parisian cafe / Montmartre cabaret.
- Transitions are slow and smooth (no snap animations).
- Color palette stays within the Parisian cafe spectrum (iron, absinthe, cream, golden, red).

## Anti-Patterns

- Art Deco geometric precision (Belle Epoque is organic and curvilinear, not angular).
- Neon colors or electric blue (this is gaslight-era Paris, not cyberpunk).
- Sans-serif typography (Belle Epoque demands ornate French serif).
- Symmetrical rigid geometry (iron scrolls are organic, asymmetrical flourishes).
- Missing ornament (every panel should have at least one scroll, tendril, or decorative element).
- Chrome or brushed metal finishes (this is wrought iron and brass, not industrial steel).
- Flat untextured surfaces (parchment, cobblestone, and chalkboard textures add depth).
- Modern minimalism (Belle Epoque is decorative and inviting, never austere).
- Yellow gold (#FFD700) instead of pastry golden (#d4a868) (Belle Epoque gold is muted and warm, not bright).
- Fast or snappy animations (Belle Epoque transitions should drift, never snap).

## Accessibility Considerations

- Iron black text on parchment cream must verify WCAG AA (high contrast, passes).
- Absinthe green on parchment must verify contrast ratio for body text (check at intended size).
- Chalkboard light text on dark surface: verify all text sizes pass WCAG AA.
- Focus states: `focus:ring-2 focus:ring-[#80c040] focus:ring-offset-2 focus:ring-offset-[#f0e8d0]` (absinthe green ring on cream).
- Decorative SVG scrollwork must be `aria-hidden="true"`.
- Cobblestone and texture overlays must not interfere with text readability.
- Awning scallop clip-paths must not cut off interactive elements or text.
- Touch targets on ornate buttons must maintain minimum 44px height despite decorative borders.
- Poster and display case images need meaningful `alt` text describing content.
- The high-contrast serif display fonts may be difficult at sizes below 12px — use body serif for small text.
