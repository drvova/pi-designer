---
name: tartan-plaid-ui
description: Build tartan plaid UI components (tartan weave pattern, clan colors, kilt pleat, sporran pouch, wool texture, Celtic knot border, highland backdrop) with woven plaid patterns, wool textures, and the heritage clan identity of Scottish tartan. Trigger this skill when the user asks for tartan, plaid, Scottish Highland, kilt, clan identity, Celtic, wool texture, sporran, highland backdrop, or Scottish heritage interfaces.
---

# Tartan Plaid UI

Use this skill to design and implement interfaces inspired by Scottish tartan: repeating intersecting colored stripe weave patterns, kilt pleat folds, sporran pouch silhouettes, wool texture surfaces, Celtic knot SVG borders, and highland mountain backdrops. Every design decision references the heritage of clan identity — each tartan is a family, each pattern is a lineage, each color carries allegiance.

## Non-Negotiable Foundations

1. **Tartan weave pattern is the primary visual signal.** Every major surface must show intersecting horizontal and vertical colored stripes. The plaid grid IS the design language.
2. **Wool texture is the material feel.** Surfaces should suggest warm, fuzzy, woven wool — never cold, glossy, or synthetic. Matte finishes, soft shadows, and textile-appropriate surfaces.
3. **Kilt pleat fold is the structural motif.** Vertical pleat lines add dimension and shadow. Use them on cards, panels, and hero sections to suggest draped fabric.
4. **Celtic knot is the decorative border language.** Interlace patterns appear at section boundaries, headers, and dividers. They are never the primary content — they frame it.
5. **Clan color identity drives the palette.** Each color is not arbitrary — tartan red is the blood of the highlands, tartan green is the glen, tartan blue is the loch. Colors carry allegiance.
6. **Highland atmosphere is the backdrop.** Misty mountains, heather moors, and stone textures ground the design in place. These are subtle, never competing with the tartan pattern.
7. **Sporran pouch is the decorative accent.** The sporran silhouette appears on badges, avatars, and ornamental elements. It is the Scottish accessory motif.
8. **Typography is carved stone and aged parchment.** Serif faces with weight and gravity. No thin, lightweight, or playful fonts. This is highland gravitas.
9. **Cultural respect is mandatory.** Tartan is clan identity, not fashion pattern. Treat it with the same gravity as Kente or Batik cultural craft traditions.
10. **Wool warmth pervades the entire system.** Every shadow is warm, every surface has texture, every transition feels like fabric settling — not digital snapping.

## Core Material Recipes

### 1) Tartan Plaid Pattern Background

Repeating intersecting colored stripes — the signature tartan weave.

- Horizontal stripes with vertical stripes overlaid to create the plaid grid:

```
bg-[linear-gradient(0deg,#1a4a2a_0%,#1a4a2a_25%,#8a2a1a_25%,#8a2a1a_50%,#1a4a2a_50%,#1a4a2a_75%,#1a2a4a_75%,#1a2a4a_100%)] bg-[size:100%_60px] bg-repeat-y
```

- Overlay vertical stripes (pseudo-element or nested div):

```
before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#1a2a4a_0%,#1a2a4a_20%,#c4a043_20%,#c4a043_30%,#1a2a4a_30%,#1a2a4a_70%,#c4a043_70%,#c4a043_80%,#1a2a4a_80%,#1a2a4a_100%)] before:bg-[size:80px_100%] before:bg-repeat-x before:mix-blend-multiply
```

- Each color band width represents the relative thread count in the weave.

### 2) Kilt Pleat Fold Panel

Vertical shadow folds suggesting draped kilt fabric.

```
bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_28px,rgba(0,0,0,0.06)_28px,rgba(0,0,0,0.06)_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_32px,transparent_32px,transparent_60px)]
```

- Applied over a tartan background to simulate kilt pleat folds.
- Shadow side (dark) on the left of each pleat, highlight on the right.
- Spacing: 30px per pleat is the standard fold width.

### 3) Wool Texture Surface

Fuzzy, warm, matte wool texture — never glossy.

```
bg-[#e8dcc0] bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")]
```

- Alternative pure CSS wool fuzz:
  ```
  shadow-[inset_0_1px_3px_rgba(139,119,90,0.15),inset_0_-1px_2px_rgba(255,255,255,0.3)]
  ```

- The texture should be subtle — it reads as fabric at arm's length.

### 4) Celtic Knot SVG Border

Interlace pattern for section dividers and frame borders.

```html
<svg viewBox="0 0 400 24" class="w-full h-6 opacity-50" fill="none" stroke="#c4a043" stroke-width="2">
  <path d="M0,12 C20,4 40,4 60,12 C80,20 100,20 120,12 C140,4 160,4 180,12 C200,20 220,20 240,12 C260,4 280,4 300,12 C320,20 340,20 360,12 C380,4 400,4 400,12" />
  <path d="M0,12 C20,20 40,20 60,12 C80,4 100,4 120,12 C140,20 160,20 180,12 C200,4 220,4 240,12 C260,20 280,20 300,12 C320,4 340,4 360,12 C380,20 400,20 400,12" opacity="0.5" />
  <!-- Knot crossing points -->
  <circle cx="60" cy="12" r="2" fill="#c4a043" />
  <circle cx="120" cy="12" r="2" fill="#c4a043" />
  <circle cx="180" cy="12" r="2" fill="#c4a043" />
  <circle cx="240" cy="12" r="2" fill="#c4a043" />
  <circle cx="300" cy="12" r="2" fill="#c4a043" />
  <circle cx="360" cy="12" r="2" fill="#c4a043" />
</svg>
```

- Use `#c4a043` Celtic gold for the primary interlace.
- Variant with tartan green knot: `stroke="#1a4a2a"`.
- Full interlace frame (closed rectangle): extend path to form corners.

### 5) Highland Mountain Backdrop

Misty mountain silhouette behind hero sections.

```html
<svg viewBox="0 0 1200 300" class="w-full" preserveAspectRatio="none">
  <!-- Far mountains (lighter) -->
  <path d="M0,300 L0,200 L100,160 L200,180 L350,120 L500,150 L650,100 L800,140 L950,110 L1100,130 L1200,90 L1200,300 Z" fill="#6a7a8a" opacity="0.3" />
  <!-- Mid mountains -->
  <path d="M0,300 L0,240 L150,200 L300,220 L450,170 L600,200 L750,160 L900,190 L1050,170 L1200,210 L1200,300 Z" fill="#6a7a8a" opacity="0.5" />
  <!-- Near mountains -->
  <path d="M0,300 L0,260 L200,230 L400,250 L500,220 L700,240 L900,210 L1100,235 L1200,250 L1200,300 Z" fill="#4a5a6a" opacity="0.6" />
  <!-- Mist layer -->
  <rect x="0" y="200" width="1200" height="100" fill="url(#mist)" />
  <defs>
    <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.3" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>
```

- Color range: `#6a7a8a` highland gray fading to `#4a5a6a` for nearer peaks.
- Mist gradient adds the atmospheric highland effect.

### 6) Sporran Pouch Silhouette

Decorated pouch accent for badges and avatars.

```html
<svg viewBox="0 0 80 100" class="w-20 h-25">
  <!-- Sporran body (rounded pouch) -->
  <path d="M15,35 C15,15 65,15 65,35 L68,75 C68,90 12,90 12,75 Z" fill="#1a1a1a" stroke="#c4a043" stroke-width="2" />
  <!-- Chain/strap -->
  <path d="M20,35 C20,10 60,10 60,35" fill="none" stroke="#c4a043" stroke-width="2" stroke-dasharray="4,3" />
  <!-- Decorative flap -->
  <path d="M20,40 C20,30 60,30 60,40 L58,55 L22,55 Z" fill="#2a2a2a" stroke="#c4a043" stroke-width="1" />
  <!-- Celtic knot ornament on flap -->
  <circle cx="40" cy="45" r="5" fill="none" stroke="#c4a043" stroke-width="1.5" />
  <circle cx="40" cy="45" r="2" fill="#c4a043" />
</svg>
```

### 7) Tartan Woven Card

Card component with tartan weave pattern and wool texture.

```
class="bg-[#e8dcc0] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(26,26,26,0.15)] border border-[#c4a043]/30 relative"
```

- Inner content area uses wool cream background with noise texture.
- Header strip uses tartan plaid pattern.
- Bottom border uses Celtic knot SVG divider.

### 8) Highland Hero Section

Full-width hero with mountain backdrop, tartan overlay, and wool texture.

```
class="relative overflow-hidden bg-[#6a7a8a] min-h-[500px] flex items-center"
```

- Background: SVG highland mountains.
- Overlay: tartan plaid pattern at 15% opacity.
- Foreground: content on wool cream card.
- Bottom edge: Celtic knot divider.

### 9) Kilt Pleat Navigation Bar

Navigation with kilt pleat fold shadows.

```
class="bg-[#1a1a1a] text-[#e8dcc0] py-4 px-6 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_58px,rgba(196,160,67,0.1)_58px,rgba(196,160,67,0.1)_60px)] font-serif font-bold uppercase tracking-widest text-sm"
```

### 10) Clan Tartan Button

Button styled as woven tartan fabric.

```
class="bg-[#8a2a1a] text-[#e8dcc0] font-serif font-bold uppercase tracking-wider px-8 py-3 border-2 border-[#c4a043] hover:bg-[#1a4a2a] hover:border-[#e8dcc0] transition-all duration-300 rounded-none shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[4px_4px_0px_#c4a043] hover:translate-x-[-2px] hover:translate-y-[-2px]"
```

- Color variants: `bg-[#1a4a2a]` (green clan), `bg-[#1a2a4a]` (blue clan), `bg-[#1a1a1a]` (black clan).
- Hover shifts color to suggest clan allegiance change.
- Offset shadow suggests woven fabric thickness.

### 11) Highland Mist Gradient Overlay

Atmospheric mist for depth transitions between sections.

```
class="bg-gradient-to-b from-[#6a7a8a]/20 via-[#e8dcc0]/0 to-[#e8dcc0]/40"
```

### 12) Wool Fabric Divider

Horizontal divider that looks like a woven wool band.

```html
<div class="w-full h-3 bg-[repeating-linear-gradient(90deg,#8a2a1a_0px,#8a2a1a_12px,#1a4a2a_12px,#1a4a2a_24px,#1a2a4a_24px,#1a2a4a_36px,#c4a043_36px,#c4a043_48px)] opacity-60"></div>
```

### 13) Celtic Knot Frame Card

Card with full Celtic interlace border.

```
class="relative border-4 border-[#c4a043]/40 rounded-sm p-6 bg-[#e8dcc0] shadow-[inset_0_0_0_2px_#c4a043/20]"
```

- Inner border creates the interlace depth effect.
- Corner accents with small Celtic knot SVGs.

### 14) Clan Badge Component

Sporran-shaped badge for clan identification.

```
class="relative w-24 h-30 bg-[#1a1a1a] rounded-b-full rounded-t-md border-2 border-[#c4a043] flex items-center justify-center text-[#c4a043] font-serif font-bold text-xs uppercase"
```

### 15) Highland Stone Texture Background

Subtle stone texture for secondary surfaces.

```
class="bg-[#8a8a7a] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.1%22/%3E%3C/svg%3E')] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]"
```

## Color Palette System (Clan Heritage Colors)

| Color | Hex | Cultural Role | Usage |
|---|---|---|---|
| Tartan Red | `#8a2a1a` | Blood of the highlands, sacrifice, clan warfare | Primary action, clan accents, bold headers |
| Tartan Green | `#1a4a2a` | Highland glen, renewal, the living land | Nature sections, success states, secondary surfaces |
| Tartan Blue | `#1a2a4a` | Highland loch, depth, loyalty, calm | Informational content, links, contemplative areas |
| Tartan Yellow | `#c4a043` | Heather bloom, warmth, the setting sun | Highlights, ornaments, Celtic knot details |
| Wool Cream | `#e8dcc0` | Natural undyed wool, warmth, hearth | Primary background, card surfaces, body text area |
| Kilt Black | `#1a1a1a` | Formal highland dress, evening gatherings | Navigation, dark panels, text on light surfaces |
| Highland Gray | `#6a7a8a` | Misty mountains, stone, distance | Backdrops, muted sections, secondary text |
| Celtic Gold | `#c4a043` | Royal accents, illuminated manuscripts | Borders, icons, decorative elements, emphasis |

**Palette Rules:**
- Tartan red and green are the most dominant clan colors. Use them for primary actions and most visual weight.
- Celtic gold appears on every interactive element as a border or accent — it is the unifier.
- Wool cream is the default surface color. Dark surfaces use kilt black.
- Highland gray is used sparingly for depth and atmospheric perspective.
- Never use pure white `#ffffff` — always warm it with wool cream tones.
- Never use pure black `#000000` — always use kilt black `#1a1a1a`.

## Typography Recommendations

- **Display:** Cinzel, Playfair Display (carved stone elegance, highland gravitas).
- **Body:** Lora, Source Serif Pro (warm readable serif, parchment feel).
- **Accent/Labels:** `font-serif font-bold uppercase tracking-widest text-sm` (military highland precision).
- **Monospace:** IBM Plex Mono (for technical data within highland design context).

### Typography Rules
- All headings use serif fonts with weight. Thin or light weights are forbidden.
- Body text maintains warm, readable sizing (16px base minimum).
- Labels and navigation use uppercase tracking with letter-spacing.
- Color for text: on light wool cream, use kilt black. On dark kilt black, use wool cream.
- Celtic gold is used for emphasis text, never for body text.

## Component Architecture Pattern

### Layout Hierarchy

```
Page Container (wool cream bg + wool texture)
  Header (kilt black bg + kilt pleat folds)
    Celtic knot SVG divider
  Hero Section (highland mountain backdrop + tartan overlay)
    Hero Card (wool cream + shadow)
  Content Sections (alternating wool cream / tartan green accents)
    Celtic knot dividers between sections
  Footer (kilt black + Celtic gold accents)
```

### Component Layering

```
Layer 1: Highland backdrop (mountains, mist)
Layer 2: Tartan plaid pattern (at reduced opacity)
Layer 3: Kilt pleat folds (shadow overlays)
Layer 4: Wool texture (noise, soft shadows)
Layer 5: Content (text, buttons, cards)
Layer 6: Celtic knot decorations (borders, dividers)
```

### Card Component Standard

```html
<article class="bg-[#e8dcc0] rounded-lg overflow-hidden shadow-[0_4px_16px_rgba(26,26,26,0.15)]">
  <!-- Tartan header strip -->
  <div class="h-2 w-full bg-[repeating-linear-gradient(90deg,#8a2a1a_0px,#8a2a1a_12px,#1a4a2a_12px,#1a4a2a_24px,#1a2a4a_24px,#1a2a4a_36px,#c4a043_36px,#c4a043_48px)]"></div>
  <!-- Wool texture content area -->
  <div class="p-6 bg-[#e8dcc0]">
    <h3 class="font-serif font-bold text-[#1a1a1a] text-lg">Card Title</h3>
    <p class="font-serif text-[#1a1a1a]/80 mt-2">Body text on wool cream.</p>
  </div>
  <!-- Celtic knot bottom border -->
  <svg viewBox="0 0 400 12" class="w-full h-3 opacity-40">
    <path d="M0,6 C20,2 40,2 60,6 C80,10 100,10 120,6 C140,2 160,2 180,6 C200,10 220,10 240,6 C260,2 280,2 300,6 C320,10 340,10 360,6 C380,2 400,2 400,6" fill="none" stroke="#c4a043" stroke-width="1.5" />
  </svg>
</article>
```

## Interaction Rules

### Transitions
- **Color shifts:** 300ms ease-in-out. Suggests fabric color changing in wind.
- **Shadow depth:** 200ms ease. Wool surfaces have soft, warm shadow transitions.
- **Pleat reveal:** 400ms ease-out with translateX shift. Simulates kilt pleat unfolding.
- **Celtic knot draw:** 600ms stroke-dashoffset animation for SVG border paths.

### Hover States
- Buttons shift from tartan red to tartan green (clan allegiance change).
- Cards gain Celtic gold border glow: `shadow-[0_0_20px_rgba(196,160,67,0.3)]`.
- Links gain underline with Celtic gold color.
- Navigation items show kilt pleat shadow intensification.

### Scroll Behaviors
- Highland mountains parallax at 0.3x scroll speed.
- Celtic knot borders draw on scroll-enter using IntersectionObserver.
- Kilt pleat shadows shift subtly with scroll position (0.5px translateX).
- Tartan pattern opacity increases as sections enter viewport.

### Focus States
- `focus:ring-4 focus:ring-[#c4a043]/50` (Celtic gold ring on dark backgrounds).
- `focus:ring-4 focus:ring-[#8a2a1a]/30` (tartan red ring on light backgrounds).
- `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]` on wool cream surfaces.

### Loading States
- Tartan stripe animation: horizontal stripes slide left-to-right.
- Sporran pouch silhouette pulses gently (scale 0.95 to 1.05).
- Celtic knot SVGs rotate 360deg over 2s (subtle, not distracting).
- Highland mist gradient shifts opacity between 0.2 and 0.5.

## Reusable Tailwind Tokens

### Background Patterns
```
--tartan-plaid: bg-[linear-gradient(0deg,#1a4a2a_0%,#1a4a2a_25%,#8a2a1a_25%,#8a2a1a_50%,#1a4a2a_50%,#1a4a2a_75%,#1a2a4a_75%,#1a2a4a_100%)] bg-[size:100%_60px]
--wool-cream: bg-[#e8dcc0] shadow-[inset_0_1px_3px_rgba(139,119,90,0.15),inset_0_-1px_2px_rgba(255,255,255,0.3)]
--highland-stone: bg-[#8a8a7a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]
--kilt-dark: bg-[#1a1a1a]
```

### Border Tokens
```
--celtic-knot-border: border-2 border-[#c4a043]
--celtic-knot-glow: shadow-[0_0_20px_rgba(196,160,67,0.3)]
--wool-card-border: border border-[#c4a043]/30
--pleat-shadow: bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_28px,rgba(0,0,0,0.06)_28px,rgba(0,0,0,0.06)_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_32px)]
```

### Text Tokens
```
--text-primary: text-[#1a1a1a] (on wool cream)
--text-on-dark: text-[#e8dcc0] (on kilt black)
--text-accent: text-[#c4a043] (Celtic gold emphasis)
--text-muted: text-[#6a7a8a] (highland gray secondary)
```

### Shadow Tokens
```
--wool-soft: shadow-[0_4px_16px_rgba(26,26,26,0.15)]
--wool-embossed: shadow-[0_2px_4px_rgba(26,26,26,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
--highland-depth: shadow-[0_8px_32px_rgba(26,26,26,0.25)]
--kilt-fold: shadow-[inset_-3px_0_6px_rgba(0,0,0,0.1),inset_3px_0_6px_rgba(255,255,255,0.05)]
```

### Animation Tokens
```
--transition-fabric: transition-all duration-300 ease-in-out
--transition-pleat: transition-all duration-400 ease-out
--transition-knot: transition-all duration-600 ease-in-out
```

## Quality Checklist

### Pattern Presence
- At least one tartan plaid pattern (intersecting horizontal and vertical stripes) is visible.
- Kilt pleat fold lines appear on at least one major surface.
- Celtic knot SVG border or divider is present in the layout.
- Wool texture (noise or soft shadow) appears on content surfaces.

### Color Compliance
- Tartan red `#8a2a1a` and tartan green `#1a4a2a` are used as primary clan colors.
- Celtic gold `#c4a043` appears on borders, accents, or decorative elements.
- Wool cream `#e8dcc0` is the default surface/background color.
- Kilt black `#1a1a1a` is used for dark sections and navigation.
- No pure white or pure black anywhere in the design.

### Texture and Feel
- Surfaces feel warm, matte, and textile-like (not glossy or synthetic).
- Shadows are warm-toned, not cool or harsh.
- Highland mountain backdrop appears in hero or page background.
- Sporran silhouette appears as an accent or badge element.

### Typography
- All headings use a serif font with bold or heavier weight.
- Body text uses a warm readable serif font.
- Labels use uppercase tracking.
- Text sizes are comfortable (16px+ for body).

### Cultural Respect
- The design reads as Scottish Highland / tartan / clan heritage.
- Colors are used meaningfully, not randomly.
- Celtic knot decoration is present and correctly rendered.
- The overall aesthetic communicates wool warmth, highland gravitas, and clan identity.

### Accessibility
- Text contrast ratios meet WCAG AA on all surfaces.
- Focus states are visible with Celtic gold or tartan red rings.
- Tartan pattern backgrounds are not behind body text.
- Touch targets are at least 44px.
- Highland mountain backdrop does not interfere with content readability.

## Anti-Patterns

- **Missing tartan plaid pattern.** The plaid grid IS the design language. Without it, this is just a generic dark theme.
- **Using canvas or geometric sans-serif fonts.** This is highland heritage. Use warm, weighted serif faces.
- **Cold, glossy, or synthetic surfaces.** Wool is matte, warm, and textured. Never reflective or plastic.
- **Missing Celtic knot decoration.** The interlace pattern is the border language. Use it at section boundaries.
- **Missing wool texture.** Every content surface should suggest woven fabric. No flat, smooth, digital surfaces.
- **Random colors without clan meaning.** Colors in tartan carry cultural significance. Use them intentionally.
- **Pure white or pure black.** Always warm toward wool cream or kilt black respectively.
- **Missing highland atmosphere.** Mountains, mist, and stone ground the design in place. Add atmospheric depth.
- **Overloading with patterns.** One tartan pattern + one texture + one accent pattern maximum per surface. Balance is key.
- **Treating tartan as mere decoration.** This is clan identity, not wallpaper. Every pattern placement should feel intentional.
- **Thin, light, or playful typography.** Highland design has gravitas. Bold serif, always.
- **Flat card components.** Cards must have wool texture, tartan accents, and Celtic knot borders to feel authentic.
- **Sharp, modern borders.** Use Celtic interlace or wool band dividers, never simple CSS borders alone.
- **Missing sporran or kilt reference.** The sporran silhouette and kilt pleats are signature Scottish design elements.

## Accessibility Considerations

### Contrast Requirements
- Wool cream `#e8dcc0` with kilt black `#1a1a1a` text: verify WCAG AA (ratio ~12:1, passes AAA).
- Kilt black `#1a1a1a` with wool cream `#e8dcc0` text: verify WCAG AA (same ratio, passes AAA).
- Celtic gold `#c4a043` on kilt black `#1a1a1a`: verify WCAG AA for large text (ratio ~4.8:1, passes AA for large).
- Celtic gold `#c4a043` on wool cream `#e8dcc0`: verify contrast (ratio ~2.1:1, fails — use only for decorative elements, not text on light).
- Tartan red `#8a2a1a` on wool cream `#e8dcc0`: verify WCAG AA (ratio ~5.2:1, passes AA).

### Focus Management
- All interactive elements must have visible focus indicators.
- Use `focus:ring-4 focus:ring-[#c4a043]/50` on dark surfaces.
- Use `focus:ring-4 focus:ring-[#8a2a1a]/30 focus:ring-offset-2 focus:ring-offset-[#e8dcc0]` on light surfaces.
- Focus rings must be clearly distinguishable from tartan pattern elements.

### Pattern Accessibility
- Tartan plaid backgrounds must not appear behind body text. Use solid wool cream cards for readability.
- Celtic knot SVGs must have `aria-hidden="true"` when decorative.
- Highland mountain SVGs must have `aria-hidden="true"` and `role="presentation"`.
- Wool texture noise overlays must not be behind text content.

### Touch Targets
- All buttons and interactive elements: minimum 44px by 44px.
- Celtic knot navigation elements: generous padding for touch interaction.
- Clan badge components: minimum 44px touch target.

### Screen Reader Context
- Clan badge images: `alt="Clan [name] badge"` with meaningful clan names.
- Highland mountain images: `alt=""` with `role="presentation"` (decorative).
- Celtic knot borders: `aria-hidden="true"` (decorative separators).
- Navigation items: semantic `<nav>` with `aria-label="Main navigation"`.

### Color Blindness Considerations
- Tartan red `#8a2a1a` and tartan green `#1a4a2a` differ in luminance significantly, aiding color-blind users.
- Add pattern differences (stripe width, direction) alongside color differences in tartan patterns.
- Never use red-green alone to convey meaning without a secondary signal (icon, text label, pattern).
- Celtic gold accents on dark backgrounds provide strong luminance contrast for all color vision types.

### Motion Sensitivity
- Highland mountain parallax must respect `prefers-reduced-motion`.
- Celtic knot draw animation must be disabled when reduced motion is preferred.
- Kilt pleat shadow shifts must be static when reduced motion is preferred.
- Tartan stripe loading animation must stop when reduced motion is preferred.

## Cultural Context and Usage Notes

Tartan is not merely a pattern — it is the visual identity of Scottish clans. Each tartan design represents a specific family or region, and the colors carry cultural weight: tartan red for highland sacrifice, tartan green for the living glen, tartan blue for the deep loch. When designing with tartan, treat every color choice as a statement of allegiance and heritage.

The Celtic knot is an ancient interlace pattern found across Scottish, Irish, and Celtic art. It represents eternity and interconnectedness — the line has no beginning and no end. Use it as a border and decorative element, never as the primary content pattern.

The kilt is Scotland's most iconic garment. Its pleated folds create a distinctive visual rhythm of shadow and highlight. Use kilt pleat lines to add dimension to flat surfaces — they are the Scottish version of fabric draping.

The sporran is the decorative pouch worn at the front of the kilt. Its rounded shape and Celtic ornamentation make it a natural badge or avatar silhouette for Scottish-themed interfaces.

Highland landscapes — misty mountains, heather moors, standing stones — provide atmospheric context. Use them as backdrops with reduced opacity, never as the primary visual element.

This skill respects the deep cultural significance of Scottish tartan and Celtic heritage. Design with intention, not decoration.
