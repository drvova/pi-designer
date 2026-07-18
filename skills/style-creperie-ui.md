---
name: creperie-ui
description: Build creperie UI components (copper crepe pan, Nutella jar, fresh strawberries, buckwheat flour, folded triangle, powdered sugar dust) with warm copper surfaces, French cafe charm, and the delicate art of the folded crepe. Trigger this skill when the user asks for creperie, crepe, crepe shop, copper pan, Nutella, buckwheat crepe, French creperie, creperie cafe, folded crepe, or crepe station interface.
---

# Creperie UI

Use this skill to design and implement warm, intimate interfaces inspired by a French creperie: copper crepe pans as interactive containers, Nutella jar silhouettes as branding accents, fresh strawberry red highlights, buckwheat flour dust textures, folded triangle crepe shapes via clip-path, powdered sugar white speckle overlays, thin batter spread patterns, and the cozy copper-warmed ambiance of a crepe stand on a Parisian corner.

## Non-Negotiable Foundations

- **Palette is copper-warm.** Every surface derives from the copper-amber spectrum: copper pan orange, Nutella deep brown, strawberry accent red, buckwheat flour cream, powdered sugar white, and café warm beige. No cool tones exist except the translucent glass crêpe-wrapper treatment and the fresh green mint garnish accent.
- **Copper crepe pan is the primary interactive container.** Menu items, pricing, and featured selections are always presented inside a copper-toned circular or rounded panel with a subtle handle silhouette, evoking the hot pan where batter is spread.
- **Folded triangle crepe shape is the signature structural motif.** Content cards, hero overlays, and product frames use a CSS `clip-path: polygon(50% 0%, 100% 100%, 0% 100%)` triangle or a softened folded variant to frame content as a triangular crepe fold.
- **Powdered sugar dust is the signature surface texture.** Any major background or panel must carry a subtle white speckle overlay on warm copper or cream base, evoking the final dusting of sugar atop a freshly folded crepe.
- **Thin batter spread pattern is the secondary texture.** A radial gradient radiating from center mimics the circular motion of spreading crepe batter on the hot pan — concentric rings of slightly varying warmth.
- **Nutella jar silhouette is the brand anchor.** At least one Nutella jar outline SVG appears in the header or footer as a recognizable brand element, rendered in deep brown with warm highlight.
- **Fresh strawberry red is the sole high-contrast accent.** Used for CTAs, price highlights, strawberry garnish icons, and small decorative dots. It should never exceed 10% of any single surface — it is the strawberry on top, not the crepe itself.
- **Typography blends French elegance with handwritten warmth.** Display headings use a refined French-inspired serif or elegant script. Body text uses a clean warm sans-serif. The voice is intimate and personal, like a chalk menu board in a corner creperie.
- **Buckwheat flour bag and copper pan handle appear as signature motifs.** At least one SVG silhouette accent must be present per major section — either the rounded buckwheat sack or the elongated copper pan handle.

## Core Material Recipes

### 1) Copper Pan Surface

Warm metallic copper surface with radial batter-spread pattern and subtle hammered texture.

- `bg-[#b87333] relative overflow-hidden` with batter spread overlay: `bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.0)_0%,rgba(184,115,51,0.15)_30%,rgba(184,115,51,0.05)_60%,rgba(184,115,51,0.2)_100%)]` for concentric heat rings, combined with hammered copper texture: `bg-[radial-gradient(circle_2px_at_50%_50%,rgba(255,220,180,0.12)_0px,transparent_1px)] bg-[length:6px_6px]`.

### 2) Folded Triangle Crepe Card

Content card shaped as a folded crepe triangle using clip-path.

- Outer frame: `relative overflow-hidden rounded-none` with clip-path: `clip-path:polygon(50% 0%,100% 100%,0% 100%)` for sharp triangle or `clip-path:polygon(50% 2%,97% 98%,3% 98%)` for softened fold.
- Inner content area (inverted triangle to preserve readability): `bg-[#fff5e0]/95 backdrop-blur-sm p-8` positioned to fill the triangle while maintaining text legibility.
- Fold shadow along top edge: `shadow-[inset_0_2px_8px_rgba(184,115,51,0.3)]` to create the crease where the crepe is folded over the filling.

### 3) Nutella Jar Silhouette

Recognizable Nutella jar outline used as brand accent or section anchor.

```html
<div class="relative w-14 h-20">
  <svg viewBox="0 0 56 80" fill="none" class="w-full h-full">
    <path d="M16 8 L40 8 L42 12 L42 14 L44 14 L44 18 L12 18 L12 14 L14 14 L14 12Z" 
          fill="#5a3a1a" stroke="#3a2010" stroke-width="1" opacity="0.9"/>
    <rect x="10" y="18" width="36" height="48" rx="4" fill="#f5f0e0" stroke="#5a3a1a" stroke-width="1.5"/>
    <rect x="14" y="22" width="28" height="20" rx="2" fill="#c41e1e" opacity="0.9"/>
    <text x="28" y="36" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="sans-serif">n</text>
    <rect x="10" y="66" width="36" height="4" rx="2" fill="#5a3a1a" opacity="0.8"/>
    <rect x="8" y="68" width="40" height="6" rx="3" fill="#5a3a1a" opacity="0.6"/>
  </svg>
</div>
```

### 4) Powdered Sugar Dust Overlay

White speckle pattern simulating sifted powdered sugar across warm surfaces.

- `bg-[radial-gradient(circle_0.8px_at_center,rgba(255,255,255,0.6)_0.3px,transparent_0.8px)] bg-[length:5px_5px]` for fine sugar dust, combined with larger random speckles: `bg-[radial-gradient(circle_1.5px_at_center,rgba(255,255,255,0.4)_0.6px,transparent_1.5px)] bg-[length:8px_8px] bg-[position:2px_3px]` to create a dual-density sugar dusting effect.

### 5) Strawberry Garnish Accent

Small fresh strawberry icon used as bullet, badge, or decorative accent.

```html
<div class="relative w-8 h-8">
  <svg viewBox="0 0 32 32" fill="none" class="w-full h-full">
    <path d="M16 6 C12 6, 8 12, 8 18 C8 24, 12 28, 16 28 C20 28, 24 24, 24 18 C24 12, 20 6, 16 6Z" 
          fill="#c41e1e" stroke="#8a1010" stroke-width="0.5"/>
    <path d="M14 4 Q16 2, 18 4 Q16 6, 14 4Z" fill="#4a8a3a"/>
    <path d="M15 4 Q16 1, 17 4" stroke="#3a6a2a" stroke-width="0.8" fill="none"/>
    <circle cx="13" cy="14" r="0.5" fill="#f5f0e0" opacity="0.4"/>
    <circle cx="19" cy="16" r="0.5" fill="#f5f0e0" opacity="0.4"/>
    <circle cx="14" cy="20" r="0.5" fill="#f5f0e0" opacity="0.4"/>
    <circle cx="18" cy="22" r="0.5" fill="#f5f0e0" opacity="0.4"/>
    <circle cx="16" cy="12" r="0.5" fill="#f5f0e0" opacity="0.4"/>
  </svg>
</div>
```

### 6) Buckwheat Flour Bag Accent

Subtle buckwheat flour sack silhouette used as a decorative panel element.

- Rounded sack shape: `bg-[#8a7a6a]/20 rounded-[40%_40%_10%_10%] border border-[#8a7a6a]/20 p-4` with inner label: `bg-[#f5f0e0] rounded-sm text-[#5a3a1a] text-xs font-bold tracking-wider uppercase px-2 py-1` for the "BLE NOIR" or "BUCKWHEAT" stamp.

### 7) Copper Pan Circle Menu Item

Circular copper-toned menu item card representing a crepe on the pan.

- Outer copper ring: `bg-gradient-to-br from-[#d49050] via-[#b87333] to-[#8a5520] rounded-full p-1 shadow-[0_4px_16px_rgba(184,115,51,0.3),inset_0_1px_2px_rgba(255,200,150,0.3)]`.
- Inner pan surface: `bg-gradient-to-br from-[#c48040] to-[#a06030] rounded-full p-6 flex items-center justify-center` with batter-spread radial gradient overlay for the concentric heat-ring effect.
- Content sits in the center: menu item name, price, and description layered inside the inner circle.

### 8) Creperie Copper CTA Button

Warm copper-toned action button with metallic gradient depth.

- `bg-gradient-to-b from-[#d49050] to-[#8a5520] text-[#fff5e0] font-semibold rounded-lg px-8 py-3 border border-[#8a5520] shadow-[0_3px_0_#6a3a10,inset_0_1px_0_rgba(212,144,80,0.4)] hover:translate-y-1 hover:shadow-[0_1px_0_#6a3a10] active:shadow-none transition-all duration-200`.

### 9) Batter Spread Radial Pattern

Concentric circular pattern mimicking batter spread on a hot pan, used as background or section treatment.

- `bg-[radial-gradient(circle_at_center,rgba(196,128,64,0.08)_0%,rgba(196,128,64,0.02)_20%,rgba(196,128,64,0.1)_40%,rgba(196,128,64,0.01)_60%,rgba(196,128,64,0.06)_80%,rgba(196,128,64,0.0)_100%)]` for alternating warm rings that fade outward from center.

### 10) Cafe Warm Panel

Warm beige surface with subtle linen-like texture for content areas and text panels.

- `bg-[#d4c8a0] relative overflow-hidden` with linen texture: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(138,122,106,0.05)_2px,rgba(138,122,106,0.05)_3px)]` vertical lines crossed with `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(138,122,106,0.03)_3px,rgba(138,122,106,0.03)_4px)]` horizontal lines for a woven cloth effect.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Copper Pan | `#b87333` | Primary warm metallic, pan surfaces, borders, buttons |
| Nutella Brown | `#5a3a1a` | Deep warm accent, jar silhouettes, text, dark surfaces |
| Strawberry Red | `#c41e1e` | Primary CTA, price tags, strawberry garnish, accent only |
| Flour Cream | `#f5f0e0` | Light backgrounds, card fills, text on dark surfaces |
| Sugar White | `#ffffff` | Powdered sugar dust speckle, highlight dots, sparkle accents |
| Buckwheat Gray-Brown | `#8a7a6a` | Secondary surfaces, muted text, earth-tone panels |
| Cafe Warm | `#d4c8a0` | Medium warm backgrounds, linen-texture panels, table surfaces |
| Copper Light | `#d49050` | Button highlights, lighter copper gradient stops, hover states |
| Copper Deep | `#8a5520` | Button shadows, deep metallic accents, pressed states |
| Pan Surface | `#c48040` | Inner pan gradient, warm mid-tone metallic fill |

Rules: The creperie palette is entirely warm — every color carries orange, amber, or brown undertones. Strawberry red is the only high-contrast accent and must be used sparingly as punctuation, never as a large surface. Sugar white is reserved for the powdered sugar dust speckle and small highlight dots — it is not a background color. The lightest usable background is flour cream, not pure white. The darkest value is Nutella brown — the palette never reaches true black. Copper pan is the dominant hue across all surfaces.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (refined French serif, elegant and warm, like a Parisian menu header).
- **Body:** Nunito, Source Sans 3 (clean warm sans-serif, legible and friendly).
- **Script Accent:** Caveat, Kalam (handwritten warmth for special items, chalk-board specials, daily crepe features).
- **Labels:** `font-bold text-xs tracking-widest uppercase` with copper pan color (elegant, direct, French bistro-sign feel).
- **Price/Menu:** Playfair Display italic (refined, menu-board readability with French sophistication).

## Component Architecture Pattern

Every creperie component follows a copper-pan-to-folded-crepe architecture:

```
[Batter Spread Radial Background]
  [Copper Pan Surface Panel]
    [Nutella Jar Brand Anchor]
    [Folded Triangle Crepe Cards]
      [Strawberry Garnish Accents]
      [Powdered Sugar Dust Overlay]
    [Copper Circle Menu Items]
  [Cafe Warm Linen Panel]
    [Pricing / CTA Section]
  [Buckwheat Flour Bag Divider]
```

- **Background:** Batter spread radial gradient fills the section with concentric copper warmth.
- **Copper pan panel:** Warm metallic surface with hammered texture as the primary container.
- **Nutella jar:** Brand silhouette anchors the header or section identity.
- **Triangle crepe cards:** Content framed in folded-triangle clip-path shapes, each dusted with powdered sugar.
- **Circle menu items:** Individual crepe offerings shown in copper-pan circles with batter-spread interiors.
- **Cafe warm panel:** Linen-textured beige surface holds pricing and call-to-action sections.
- **Buckwheat divider:** Flour-bag silhouette or horizontal copper line separates sections.

## Interaction Rules

- **Hover on folded triangle cards:** Rotate the triangle 1-2 degrees and increase the fold shadow — `hover:rotate-1 hover:shadow-[inset_0_2px_12px_rgba(184,115,51,0.4)]` — the crepe shifts as if picked up.
- **Hover on copper circle menu items:** Scale to 1.05 and increase the copper ring glow — `hover:scale-105 hover:shadow-[0_6px_24px_rgba(184,115,51,0.4),inset_0_1px_2px_rgba(255,200,150,0.4)]`.
- **Hover on copper CTA buttons:** Translate down 1px and reduce shadow, simulating a press — `hover:translate-y-1 hover:shadow-[0_1px_0_#6a3a10]`.
- **Hover on strawberry garnish accents:** Scale from 1.0 to 1.15 with a slight rotation — `hover:scale-115 hover:rotate-6` — the strawberry bounces playfully.
- **Hover on Nutella jar silhouette:** Increase opacity and add warm glow — `hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(90,58,26,0.4)]`.
- **Page load:** Triangle crepe cards unfold from a flat horizontal line into full triangles using clip-path animation — `clip-path: polygon(50% 50%, 50% 50%, 50% 50%)` transitioning to `polygon(50% 0%, 100% 100%, 0% 100%)` over 600ms ease-out, staggered by 150ms per card.
- **Scroll reveal:** Powdered sugar dust speckles fade in progressively as sections enter the viewport — opacity from 0 to full over 400ms.
- **Copper pan circles:** Scale from 0.8 to 1.0 with elastic ease on entry — the crepes slide onto the pan.
- **Focus states:** `focus:ring-4 focus:ring-[#b87333]/40` — warm copper glow ring for keyboard navigation.
- **Drag interaction (optional):** Triangle crepe cards can support a subtle parallax tilt on mouse move, rotating up to 3 degrees based on cursor position within the card — the crepe tilts toward the viewer.

## Reusable Tailwind Tokens

- **Copper pan bg:** `bg-[#b87333]`
- **Nutella brown bg:** `bg-[#5a3a1a]`
- **Strawberry red:** `bg-[#c41e1e]`
- **Flour cream bg:** `bg-[#f5f0e0]`
- **Buckwheat gray-brown bg:** `bg-[#8a7a6a]`
- **Cafe warm bg:** `bg-[#d4c8a0]`
- **Copper light:** `bg-[#d49050]`
- **Copper deep:** `bg-[#8a5520]`
- **Pan surface:** `bg-[#c48040]`
- **Powdered sugar dust:** `bg-[radial-gradient(circle_0.8px_at_center,rgba(255,255,255,0.6)_0.3px,transparent_0.8px)] bg-[length:5px_5px]`
- **Dual-density sugar dust:** `bg-[radial-gradient(circle_0.8px_at_center,rgba(255,255,255,0.6)_0.3px,transparent_0.8px)] bg-[length:5px_5px]` combined with `bg-[radial-gradient(circle_1.5px_at_center,rgba(255,255,255,0.4)_0.6px,transparent_1.5px)] bg-[length:8px_8px] bg-[position:2px_3px]`
- **Batter spread radial:** `bg-[radial-gradient(circle_at_center,rgba(196,128,64,0.08)_0%,rgba(196,128,64,0.02)_20%,rgba(196,128,64,0.1)_40%,rgba(196,128,64,0.01)_60%,rgba(196,128,64,0.06)_80%,rgba(196,128,64,0.0)_100%)]`
- **Copper hammered texture:** `bg-[radial-gradient(circle_2px_at_50%_50%,rgba(255,200,150,0.12)_0px,transparent_1px)] bg-[length:6px_6px]`
- **Cafe linen texture:** `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(138,122,106,0.05)_2px,rgba(138,122,106,0.05)_3px)]`
- **Folded triangle clip:** `clip-path:polygon(50% 0%,100% 100%,0% 100%)`
- **Softened triangle clip:** `clip-path:polygon(50% 2%,97% 98%,3% 98%)`
- **Copper pan circle:** `bg-gradient-to-br from-[#d49050] via-[#b87333] to-[#8a5520] rounded-full p-1 shadow-[0_4px_16px_rgba(184,115,51,0.3),inset_0_1px_2px_rgba(255,200,150,0.3)]`
- **Copper CTA button:** `bg-gradient-to-b from-[#d49050] to-[#8a5520] text-[#fff5e0] font-semibold rounded-lg px-8 py-3 border border-[#8a5520] shadow-[0_3px_0_#6a3a10]`
- **Copper focus ring:** `focus:ring-4 focus:ring-[#b87333]/40`
- **Nutella text color:** `text-[#5a3a1a]`
- **Strawberry accent dot:** `bg-[#c41e1e] rounded-full w-2 h-2`

## Quality Checklist

- Palette is copper-warm (copper pan, Nutella brown, strawberry red, flour cream, buckwheat gray-brown, cafe warm).
- Powdered sugar dust speckle texture appears on at least one major surface per page.
- Folded triangle crepe shape (clip-path) is used for at least one content card or hero element.
- Copper pan circle is the primary menu item presentation format.
- Batter spread radial pattern appears as a background or section treatment.
- Strawberry red appears on primary CTA or accent, never as a large surface.
- Nutella jar silhouette SVG appears in header, footer, or as a section anchor.
- Buckwheat flour bag or copper pan handle silhouette appears per major section.
- Typography uses refined French serif for display headings.
- Cafe warm linen-texture panels hold secondary content and pricing.
- The overall aesthetic reads as a warm Parisian creperie, not a commercial fast-food stand.
- The palette never reaches cool tones — everything carries warm orange/brown/amber undertone.
- Copper CTA buttons have the characteristic 3D metallic press effect.
- Triangle cards have visible fold shadow along the crease edge.

## Anti-Patterns

- Cool-toned or blue-shifted palettes (creperie is warm copper and amber, never cool).
- Pure white or pure black backgrounds (lightest is flour cream, darkest is Nutella brown).
- Sans-serif-only typography (display headings need refined French serif elegance).
- Missing powdered sugar dust texture (the sugar-dusted surface is the signature identity).
- Overusing strawberry red (it is the strawberry garnish, not the crepe — max 10% of any surface).
- Flat solid-color panels without texture (every surface needs sugar dust, batter spread, hammered copper, or linen weave depth).
- Missing folded triangle crepe motif (the triangular fold is the signature structural element).
- Industrial or mechanical aesthetic (creperie is artisanal and warm, not factory-produced).
- Neon, saturated, or electric color accents (everything stays in the warm copper-amber spectrum).
- Missing Nutella jar or copper pan silhouette in the view (the signature shapes must appear).
- Dark moody atmospheres (creperie is warm and intimate, not dark and moody).
- Comic or overly casual typography (warm and personal, but refined — it is a French creperie).
- Dense heavy layouts (creperie aesthetic is intimate and cozy, with breathing room like a small Parisian cafe corner).
- Using pure white for sugar dust background instead of the warm flour cream base.
- Ignoring the copper metallic gradient on buttons and containers (flat copper looks like cardboard, not metal).

## Accessibility Considerations

- Flour cream and cafe warm backgrounds with Nutella brown text provide good contrast — verify WCAG AA minimum (ratio >= 4.5:1 for body text). Flour cream `#f5f0e0` against Nutella brown `#5a3a1a` yields approximately 7.2:1, well above AA.
- Powdered sugar dust overlays can reduce text legibility on lighter surfaces — ensure text sits on solid warm base beneath the speckle pattern, or use a semi-transparent scrim `bg-[#f5f0e0]/80` behind text blocks.
- Folded triangle clip-path cards may clip interactive elements near edges — ensure sufficient padding (at least `p-8`) so buttons and links sit well within the visible triangle area and are never cut off by the clip-path boundary.
- Focus states: `focus:ring-4 focus:ring-[#b87333]/40` for visible warm-copper keyboard indicator on all interactive elements, with `focus-visible` to avoid ring flash on mouse click.
- Strawberry red CTA buttons must use flour cream text `#f5f0e0` for sufficient contrast against `#c41e1e` (ratio >= 4.5:1).
- Decorative sugar dust speckles, Nutella jar SVGs, strawberry garnish SVGs, and buckwheat flour bag silhouettes must be `aria-hidden="true"`.
- Touch targets: all buttons, copper circle items, and interactive triangle cards must meet 44x44px minimum — the copper circle menu items should have at least 48px diameter.
- Triangle clip-path cards require additional ARIA labeling since the clip-path removes visual rectangular boundaries — use `role="article"` or `role="listitem"` with descriptive `aria-label` for screen readers.
- Copper gradient buttons with shadow effects must maintain sufficient contrast at all interaction states (default, hover, focus, active) — verify each state independently.
- Batter spread radial backgrounds should not carry interactive content that shifts during animation — keep the radial pattern static to avoid motion-triggered vestibular discomfort.
- Font sizing: French serif display fonts may have thinner strokes at small sizes — ensure display font is only used at `text-2xl` or larger, and body text never drops below `text-sm` (14px).
- Copper hammered texture background should use `prefers-reduced-motion: reduce` media query to disable texture animation if any shimmer effects are applied.
