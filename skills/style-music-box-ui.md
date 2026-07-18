---
name: music-box-ui
description: Build music box UI components (mechanical cylinder mechanism, twirling ballerina, ornate wood inlay, tinkling melody indicators, brass comb teeth, winding key, velvet-lined interior) with rotating cylinder animations, spinning ballerina accents, and the delicate charm of a antique mechanical music box. Trigger this skill when the user asks for music box design, mechanical cylinder UI, ballerina twirl, antique automaton, brass comb teeth, winding key, melody indicator, or ornate inlaid wood interfaces.
---

# Music Box UI

Use this skill to design and implement delicate interfaces inspired by antique mechanical music boxes: ornate inlaid mahogany surfaces with brass patterns, a rotating brass cylinder mechanism, a spinning ballerina silhouette, brass comb teeth that catch the melody, velvet-lined interior accents, and a winding key decoration. Every surface should feel like a hand-cranked mechanical automaton made of fine materials.

## Non-Negotiable Foundations

- At least one **ornate inlaid wood box surface** with dark mahogany gradient and brass inlay pattern overlay.
- A **rotating brass cylinder** rendered with CSS spin animation along its horizontal axis.
- A **spinning ballerina silhouette** using SVG with a twirl animation.
- A **brass comb teeth row** (vertical thin brass prongs that can pulse on melody notes).
- A **velvet-lined interior accent** (deep red gradient panel with soft fabric sheen).
- A **winding key decoration** (SVG key shape with optional rotation).
- A **tinkling melody indicator** system (dots or bars that light up in sequence to suggest melody).
- Color palette must include mahogany `#4a2418`, brass `#c4a043`, velvet red `#5a0a0a`, ballerina pink `#f0b0c4`, ivory `#f0ead0`, and dark mahogany `#2a1008`.
- All decorative SVGs must be `aria-hidden="true"`; all rotation/twirl animations must respect `prefers-reduced-motion`.

## Core Material Recipes

### 1) Ornate Inlaid Wood Box Surface

Dark mahogany panel with brass inlay pattern.

- `bg-gradient-to-br from-[#4a2418] via-[#3a1a10] to-[#2a1008]` (mahogany wood gradient).
- Wood grain texture: `bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.08)_0px,transparent_2px,rgba(120,60,30,0.05)_4px,transparent_6px)]`.
- Brass inlay border: `border-2 border-[#c4a043]/40 shadow-[inset_0_0_0_1px_rgba(196,160,67,0.2),inset_0_2px_8px_rgba(0,0,0,0.5)]`.

### 2) Brass Inlay Pattern Overlay

Decorative brass filigree SVG laid over the wood surface.

```html
<svg viewBox="0 0 400 60" class="w-full opacity-25" aria-hidden="true" preserveAspectRatio="none">
  <g fill="none" stroke="#c4a043" stroke-width="0.8">
    <path d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30"/>
    <path d="M0,30 Q50,50 100,30 T200,30 T300,30 T400,30"/>
    <circle cx="50" cy="30" r="4"/>
    <circle cx="150" cy="30" r="4"/>
    <circle cx="250" cy="30" r="4"/>
    <circle cx="350" cy="30" r="4"/>
    <path d="M50,20 L50,40 M150,20 L150,40 M250,20 L250,40 M350,20 L350,40"/>
  </g>
</svg>
```

### 3) Rotating Brass Cylinder

Mechanical cylinder that spins on its horizontal axis.

```css
@keyframes cylinder-spin {
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
}
.brass-cylinder {
  width: 120px; height: 48px;
  background: linear-gradient(to bottom,
    #8a6a13 0%, #c4a043 20%, #f0d870 40%,
    #c4a043 60%, #8a6a13 80%, #6a4a03 100%);
  border-radius: 50%;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.4);
  animation: cylinder-spin 4s linear infinite;
}
/* Cylinder pins (melody bumps) */
.cylinder-pin {
  width: 3px; height: 3px;
  background: #f0d870;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(240,216,112,0.8);
}
@media (prefers-reduced-motion: reduce) {
  .brass-cylinder { animation: none; }
}
```

### 4) Spinning Ballerina Silhouette

SVG ballerina with twirl animation.

```css
@keyframes ballerina-twirl {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
.ballerina-container {
  perspective: 200px;
  animation: ballerina-twirl 3s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .ballerina-container { animation: none; }
}
```

```html
<div class="ballerina-container" style="width:80px;height:100px;">
  <svg viewBox="0 0 80 100" class="w-full h-full" aria-hidden="true">
    <!-- Tutu -->
    <ellipse cx="40" cy="50" rx="22" ry="8" fill="#f0b0c4" opacity="0.9"/>
    <!-- Head -->
    <circle cx="40" cy="20" r="7" fill="#f0b0c4"/>
    <!-- Bun -->
    <circle cx="40" cy="14" r="3" fill="#e09ab0"/>
    <!-- Body -->
    <path d="M40,27 L36,45 L44,45 Z" fill="#f0ead0"/>
    <!-- Arms raised -->
    <path d="M36,30 Q25,20 30,15" fill="none" stroke="#f0ead0" stroke-width="3" stroke-linecap="round"/>
    <path d="M44,30 Q55,20 50,15" fill="none" stroke="#f0ead0" stroke-width="3" stroke-linecap="round"/>
    <!-- Legs / pose -->
    <path d="M38,48 L34,75 M42,48 L46,70" fill="none" stroke="#f0ead0" stroke-width="3" stroke-linecap="round"/>
    <!-- Standing leg point -->
    <ellipse cx="34" cy="78" rx="2" ry="2" fill="#e0a0b4"/>
  </svg>
</div>
```

### 5) Brass Comb Teeth Row

Row of thin brass prongs that pulse to suggest plucking.

```css
@keyframes tooth-pluck {
  0%, 100% { transform: scaleY(1); opacity: 0.7; }
  50% { transform: scaleY(1.15); opacity: 1; box-shadow: 0 0 6px rgba(240,216,112,0.6); }
}
.comb-tooth {
  width: 3px; height: 20px;
  background: linear-gradient(to bottom, #c4a043, #8a6a13);
  border-radius: 1px;
  animation: tooth-pluck 0.4s ease-in-out infinite;
}
@media (prefers-reduced-motion: reveal) {
  .comb-tooth { animation: none; }
}
@media (prefers-reduced-motion: reduce) {
  .comb-tooth { animation: none; }
}
```

### 6) Velvet-Lined Interior Accent

Deep red velvet fabric panel with soft sheen.

- `bg-gradient-to-br from-[#7a1414] via-[#5a0a0a] to-[#3a0505]` (velvet red gradient).
- Fabric sheen: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,40,40,0.3)_0%,transparent_50%)]`.
- Tufted edge: `shadow-[inset_0_0_20px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(180,40,40,0.2)]`.

### 7) Winding Key Decoration

SVG winding key with optional rotation.

```html
<svg viewBox="0 0 60 60" class="w-12 h-12" aria-hidden="true">
  <g fill="none" stroke="#c4a043" stroke-width="2.5">
    <!-- Key shaft -->
    <line x1="30" y1="10" x2="30" y2="40"/>
    <!-- Key loop -->
    <circle cx="30" cy="8" r="6"/>
    <!-- Key teeth -->
    <path d="M26,40 L24,50 L28,50 L28,44 L32,44 L32,50 L36,50 L34,40"/>
  </g>
  <circle cx="30" cy="8" r="3" fill="#4a2418"/>
</svg>
```

### 8) Tinkling Melody Indicator

Sequentially lighting dots/bars suggesting a melody playing.

```css
@keyframes melody-note {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 8px rgba(240,216,112,0.8); }
}
.melody-dot {
  width: 8px; height: 8px;
  background: #f0d870;
  border-radius: 50%;
  animation: melody-note 1.6s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .melody-dot { animation: none; opacity: 0.5; }
}
```

### 9) Music Box Button

Mahogany inlaid button with brass rim.

- `bg-gradient-to-b from-[#5a2a18] to-[#2a1008] text-[#f0ead0] font-serif font-medium rounded-lg px-8 py-3 border-2 border-[#c4a043]/50 shadow-[inset_0_1px_0_rgba(196,160,67,0.3),0_2px_8px_rgba(0,0,0,0.4)] hover:border-[#c4a043]/80 hover:shadow-[0_0_15px_rgba(196,160,67,0.3)] transition-all`.

### 10) Ivory Display Label

Engraved ivory plaque text.

- `bg-gradient-to-b from-[#f8f0d8] to-[#e0d8b8] text-[#4a2418] font-serif text-sm tracking-[0.15em] uppercase rounded-sm px-4 py-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.5)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Mahogany | `#4a2418` | Primary wood surface |
| Dark Mahogany | `#2a1008` | Wood depth, shadows |
| Mid Mahogany | `#3a1a10` | Wood gradient midtone |
| Brass | `#c4a043` | Inlay, cylinder, comb, key |
| Brass Highlight | `#f0d870` | Cylinder sheen, tooth glow |
| Brass Shadow | `#8a6a13` | Brass depth |
| Brass Deep | `#6a4a03` | Brass darkest edge |
| Velvet Red | `#5a0a0a` | Interior lining |
| Velvet Highlight | `#7a1414` | Velvet sheen |
| Velvet Deep | `#3a0505` | Velvet shadow |
| Ballerina Pink | `#f0b0c4` | Ballerina tutu, body accents |
| Ivory | `#f0ead0` | Plaque labels, ballerina body |
| Ivory Highlight | `#f8f0d8` | Plaque top gradient |
| Ivory Shadow | `#e0d8b8` | Plaque bottom gradient |

Rules: Mahogany is the primary surface. Brass is the mechanical accent — cylinder, comb, key, inlay. Velvet red is the interior lining. Ballerina pink is the figure. Ivory is for engraved plaque labels. All materials should feel aged and patinated.

## Typography Recommendations

- **Display:** Cinzel, Cormorant Garamond (engraved antique serif).
- **Alternative:** Playfair Display, Cardo (classic engraved plaque serif).
- **Body:** Lora, Crimson Text (warm readable serif matching the wood warmth).
- **Labels:** `font-serif text-sm tracking-[0.15em] uppercase text-[#c4a043]` (brass-engraved antique labels).
- Typography should feel like it was engraved on ivory inlaid into a fine antique music box.

## Component Architecture Pattern

```
<music-box-card>
  <wood-surface>              -- mahogany gradient + grain texture
    <brass-inlay-overlay>     -- filigree SVG pattern
    <brass-inlay-border>      -- border + inset shadow
    <mechanism-chamber>       -- velvet-lined interior
      <brass-cylinder>        -- rotating cylinder with pins
      <comb-teeth-row>        -- plucking teeth
      <melody-indicators>     -- sequential dots
    </mechanism-chamber>
    <ballerina-stage>         -- velvet stage with ballerina
      <ballerina>             -- spinning silhouette
    </ballerina-stage>
    <winding-key>             -- decorative key SVG
    <ivory-plaque>            -- engraved label
  </wood-surface>
</music-box-card>
```

Layering order (z-index): wood surface (0), brass inlay overlay (5), velvet interior (10), mechanism elements (20), ballerina stage (25), winding key (30), ivory plaque / interactive content (40).

## Interaction Rules

- **Play / wind:** On click of the mechanism chamber or a play button, start cylinder spin, ballerina twirl, comb teeth pluck, and melody indicators simultaneously.
- **Cylinder sync:** The cylinder spin, comb teeth pluck, and melody dots share a common base tempo (e.g., 4s cylinder cycle; teeth and melody dots offset proportionally).
- **Hover warmth:** Hovering the wood surface increases the brass inlay border opacity from `/40` to `/80` and adds a soft brass glow.
- **Reduce motion:** All spin, twirl, pluck, and melody animations must be disabled when `prefers-reduced-motion: reduce` is active.
- **Focus state:** Interactive elements use `focus:ring-2 focus:ring-[#c4a043]/60`.
- **Touch targets:** Minimum 44x44px for any interactive element (play button, key, plaque links).

## Reusable Tailwind Tokens

- Wood surface: `bg-gradient-to-br from-[#4a2418] via-[#3a1a10] to-[#2a1008] border-2 border-[#c4a043]/40 shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]`.
- Wood grain: `bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.08)_0px,transparent_2px,rgba(120,60,30,0.05)_4px,transparent_6px)]`.
- Brass cylinder: `rounded-full bg-gradient-to-b from-[#8a6a13] via-[#f0d870] to-[#6a4a03] shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] animate-[cylinder-spin_4s_linear_infinite]`.
- Velvet interior: `bg-gradient-to-br from-[#7a1414] via-[#5a0a0a] to-[#3a0505] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]`.
- Ballerina: `text-[#f0b0c4]` body with `.ballerina-container` twirl animation.
- Comb tooth: `bg-gradient-to-b from-[#c4a043] to-[#8a6a13] animate-[tooth-pluck_0.4s_ease-in-out_infinite]`.
- Melody dot: `rounded-full bg-[#f0d870] animate-[melody-note_1.6s_ease-in-out_infinite]`.
- Ivory plaque: `bg-gradient-to-b from-[#f8f0d8] to-[#e0d8b8] text-[#4a2418] font-serif tracking-[0.15em] uppercase rounded-sm`.
- Music box button: `bg-gradient-to-b from-[#5a2a18] to-[#2a1008] border-2 border-[#c4a043]/50 text-[#f0ead0] hover:border-[#c4a043]/80 hover:shadow-[0_0_15px_rgba(196,160,67,0.3)]`.

## Quality Checklist

- At least one ornate inlaid wood box surface (mahogany gradient + grain + brass border).
- Brass inlay filigree pattern overlay is present.
- Rotating brass cylinder with CSS spin animation on horizontal axis.
- Spinning ballerina silhouette with twirl animation.
- Brass comb teeth row with pluck animation.
- Velvet-lined interior accent panel.
- Winding key SVG decoration.
- Tinkling melody indicator dots/bars with sequential animation.
- Color palette includes mahogany, brass, velvet red, ballerina pink, ivory.
- Typography is engraved antique serif with letter-spacing.
- The aesthetic reads as an antique mechanical music box.
- Everything feels delicate, mechanical, and finely crafted.

## Anti-Patterns

- Missing the rotating cylinder (the cylinder IS the mechanical heart of a music box).
- Missing the ballerina (the twirling ballerina is the iconic music box figure).
- Flat wood without grain texture or brass inlay (plain brown is not a music box).
- Modern flat design without ornamentation (music boxes are ornate and decorative).
- Sans-serif typography (music box labels feel engraved, serif required).
- Missing the velvet interior accent (the velvet lining is a key material).
- Missing the brass comb teeth (the comb is what produces the melody visually).
- Missing the winding key (the key is the human interaction element of a music box).
- Unsynced animations (cylinder, teeth, and melody should share tempo).
- Bright saturated modern colors (the palette is aged mahogany + patinated brass + deep velvet).
- Missing melody indicators (without the tinkling dots, the melody is invisible).
- Sharp minimalist edges (music box surfaces are rounded, beveled, and inlaid).

## Accessibility Considerations

- Mahogany wood with ivory text provides strong contrast (verify WCAG AA).
- Brass inlay text on dark wood can be low contrast; use ivory plaques for critical text.
- All decorative SVGs (inlay, cylinder pins, ballerina, key) must be `aria-hidden="true"`.
- All rotation, twirl, pluck, and melody animations must respect `prefers-reduced-motion: reduce` (disable all movement, show static states at reduced opacity).
- Melody indicator flashing must not exceed 3 flashes per second (epilepsy safety; `melody-note` is 1.6s cycle, well within limits).
- Focus states: `focus:ring-2 focus:ring-[#c4a043]/60` on all interactive elements.
- The play/wind interaction must have an accessible alternative (keyboard `Enter`/`Space` triggers the same mechanism animation).
- Touch targets minimum 44x44px on play button, winding key, and any plaque links.
- Ballerina twirl uses `rotateY` which is a 3D transform; ensure it does not cause motion sickness (limit rotation speed or provide static fallback).
