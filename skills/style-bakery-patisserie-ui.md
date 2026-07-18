---
name: bakery-patisserie-ui
description: Build bakery patisserie UI components (glass case croissants, flour-dusted surfaces, piping bags, cake stand towers, vanilla scent, morning light) with flaky pastry textures, morning warmth, and the artisanal craft of French baking. Trigger this skill when the user asks for bakery, patisserie, French bakery, pastry shop, croissant, cake stand, flour-dusted, boulangerie, or artisan baking interface.
---

# Bakery Patisserie UI

Use this skill to design and implement warm, artisanal interfaces inspired by a French patisserie: flour-dusted wood surfaces, glass display cases with croissant and pastry arrangements, cake stand tiered displays, piping bag cream accents, morning sunlight gradients, and the inviting warmth of a bakery at dawn.

## Non-Negotiable Foundations

- **Palette is morning-warm.** Every surface derives from the warm baking spectrum: flour white, pastry golden, crust brown, cream, and morning-warm yellow. No cool tones exist except the glass display transparency and berry jam red accent.
- **Flour-dusted texture is the signature surface.** Any major background or panel must carry a subtle white-powder speckle overlay on warm wood or golden base, evoking a baker's floured work surface.
- **Glass display case is the primary product container.** Pastries, croissants, and menu items are always presented behind a translucent glass-panel treatment with soft inner reflection.
- **Cake stand tiered structure is the primary layout metaphor.** Multi-level content stacks on vertical tiers like a layered cake stand — each level slightly smaller than the one below.
- **Morning sunlight gradient is the hero treatment.** Full-bleed sections use a warm dawn gradient flowing from cream through golden to soft amber, evoking the first light through bakery windows.
- **Berry jam red is the sole accent color.** Used for CTAs, price tags, and small decorative elements. It should never exceed 10% of any single surface — it is the dollop of jam, not the bread.
- **Typography blends handwritten warmth with clean legibility.** Display headings use a script or handwritten typeface. Body text uses a clean humanist sans-serif. The voice is warm and personal, not cold or corporate.
- **Baguette silhouette and croissant crescent appear as signature motifs.** At least one SVG silhouette accent must be present per major section.

## Core Material Recipes

### 1) Flour-Dusted Surface

White powder speckled pattern on warm wood base, simulating a baker's floured counter.

- `bg-[#a08050] relative overflow-hidden` with flour overlay: `bg-[radial-gradient(circle_1px_at_center,rgba(245,240,224,0.5)_0.4px,transparent_1px)] bg-[length:4px_4px]` for fine flour-powder speckle, combined with wood grain: `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_12px,rgba(0,0,0,0.03)_12px,rgba(0,0,0,0.03)_13px)]`.

### 2) Glass Display Case Panel

Translucent container for pastry products and menu items.

- `bg-white/[0.1] backdrop-blur-sm border border-white/[0.2] rounded-xl shadow-[0_4px_24px_rgba(160,128,80,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]` with top-edge reflection: after pseudo-element `bg-gradient-to-b from-white/[0.08] to-transparent h-1/3 w-full absolute top-0 left-0 rounded-t-xl`.

### 3) Cake Stand Tiered Display

Stacked tiered layout where each level is slightly narrower than the one below.

- Outer tier: `bg-[#fff5e0] rounded-2xl border border-[#d4a868]/30 shadow-[0_4px_16px_rgba(160,128,80,0.12)] p-6`.
- Middle tier: `bg-[#fff5e0] rounded-2xl border border-[#d4a868]/20 shadow-[0_2px_8px_rgba(160,128,80,0.08)] p-5 mx-4`.
- Top tier: `bg-[#fff5e0] rounded-2xl border border-[#d4a868]/15 shadow-[0_1px_4px_rgba(160,128,80,0.06)] p-4 mx-8`.
- Each tier shrinks by `mx-4` and reduces padding by `1` step for the characteristic cake-stand silhouette.

### 4) Piping Bag Cream Accent

Decorative cream swirl or rosette flourish element.

```html
<div class="relative w-16 h-16">
  <svg viewBox="0 0 64 64" fill="none" class="w-full h-full">
    <path d="M32 8 C20 20, 12 32, 20 44 C24 50, 30 54, 32 56 C34 54, 40 50, 44 44 C52 32, 44 20, 32 8Z" 
          fill="#fff5e0" stroke="#d4a868" stroke-width="1" opacity="0.9"/>
    <circle cx="32" cy="36" r="8" fill="#fff5e0" stroke="#d4a868" stroke-width="0.5"/>
    <path d="M28 36 Q32 28 36 36 Q32 40 28 36Z" fill="white" opacity="0.5"/>
  </svg>
</div>
```

### 5) Croissant Crescent SVG Motif

The signature crescent shape used as a decorative accent or section divider.

```html
<svg viewBox="0 0 80 40" fill="none" class="w-20 h-10 opacity-30">
  <path d="M8 32 C12 28, 20 12, 40 8 C60 12, 68 28, 72 32 C64 30, 52 20, 40 18 C28 20, 16 30, 8 32Z"
        fill="#d4a868" stroke="none"/>
  <path d="M12 30 C16 26, 24 14, 40 10 C56 14, 64 26, 68 30" 
        stroke="#8a6a3a" stroke-width="0.5" fill="none" opacity="0.5"/>
</svg>
```

### 6) Morning Sunlight Gradient Hero

Warm dawn gradient flowing from soft cream through golden amber.

- `bg-gradient-to-b from-[#fff5d0] via-[#fff5e0] to-[#d4a868]/20` with sunlight beam overlay: `bg-[linear-gradient(135deg,rgba(255,245,208,0.4)_0%,transparent_40%,transparent_60%,rgba(212,168,104,0.1)_100%)]` for diagonal light shaft effect.

### 7) Baguette Silhouette Accent

Subtle elongated bread silhouette as a horizontal divider or background element.

- Horizontal line with tapered ends: `h-[2px] bg-gradient-to-r from-transparent via-[#d4a868]/40 to-transparent rounded-full` with optional small baguette-score marks: four short diagonal lines at 60-degree intervals across the gradient line.

### 8) Pastry Golden Button

Warm golden action button with a baked-good warmth.

- `bg-gradient-to-b from-[#d4a868] to-[#8a6a3a] text-[#fff5e0] font-semibold rounded-lg px-8 py-3 border border-[#8a6a3a] shadow-[0_3px_0_#6a4a2a,inset_0_1px_0_rgba(255,245,224,0.3)] hover:translate-y-1 hover:shadow-[0_1px_0_#6a4a2a] active:shadow-none transition-all duration-200`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Flour White | `#f5f0e0` | Light backgrounds, flour dust speckle, card fills |
| Pastry Golden | `#d4a868` | Primary warm tone, borders, golden highlights, buttons |
| Crust Brown | `#8a6a3a` | Secondary surfaces, button shadows, deep warm accent |
| Cream | `#fff5e0` | Card surfaces, text areas, light warm fill |
| Morning Warm | `#fff5d0` | Hero backgrounds, light gradient start, sunrise glow |
| Berry Jam Red | `#c44040` | Primary CTA, price tags, accent punctuation only |
| Wood Counter | `#a08050` | Darker warm surfaces, wood-grain panels, earth tones |
| Glass Display | `bg-white/[0.1]` | Translucent product containers, blur panels |

Rules: The baking palette is entirely warm — every color carries yellow or amber undertones. Berry jam red is the only non-warm accent and must be used sparingly as punctuation. Glass display is not a fixed hex but a translucent treatment that adapts to whatever warm surface sits behind it. The lightest value is morning warm, never pure white. The darkest value is crust brown — the palette never reaches true dark.

## Typography Recommendations

- **Display:** Dancing Script, Caveat, Satisfy (warm handwritten script, bakery menu-board feel).
- **Body:** Nunito, Lato (clean humanist sans-serif, warm and legible).
- **Labels:** `font-bold text-sm tracking-wide uppercase` with pastry golden color (warm, direct, bakery-sign feel).
- **Price/Menu:** Lato italic (refined, menu-board readability).

## Component Architecture Pattern

Every bakery-patisserie component follows a cake-stand tiered architecture:

```
[Morning Sunlight Gradient Background]
  [Flour-Dusted Wood Panel]
    [Glass Display Case]
      [Pastry Content Cards]
      [Piping Cream Accent Flourishes]
    [Cake Stand Tiered Sub-sections]
  [Croissant/Baguette Divider]
  [Berry Jam CTA Bar]
```

- **Background:** Morning sunlight gradient fills the section with warm dawn light.
- **Flour-dusted panel:** Wood-grain base with flour-speckle overlay as the primary surface.
- **Glass display:** Translucent product cards sit inside the glass case, each showing a pastry item.
- **Cream flourishes:** Piping-bag SVG rosettes accent corners and card edges.
- **Tiered sub-sections:** Nested cards shrink in width, mimicking a cake stand.
- **Croissant divider:** SVG crescent motif separates sections.
- **Jam CTA:** Berry jam red action bar or button at the bottom.

## Interaction Rules

- **Hover on glass display cards:** Increase `backdrop-blur` from `sm` to `md`, brighten border from `white/[0.2]` to `white/[0.3]`, and add `shadow-[0_8px_32px_rgba(160,128,80,0.25)]` — the glass case catches morning light.
- **Hover on pastry golden buttons:** Translate down 1px and reduce shadow, simulating a press into soft dough — `hover:translate-y-1 hover:shadow-[0_1px_0_#6a4a2a]`.
- **Hover on croissant/baguette motifs:** Increase opacity from `0.3` to `0.5` and add a subtle warm glow — `hover:opacity-50 hover:drop-shadow-[0_0_4px_rgba(212,168,104,0.4)]`.
- **Hover on flour-dusted panels:** Slightly increase flour-speckle opacity, making the dust more visible as the user focuses attention.
- **Page load:** Glass panels and tiered cake-stand sections stagger in from bottom with 200ms delay between each tier — the cake is assembled layer by layer.
- **Scroll reveal:** Croissant crescent SVG motifs fade in at section boundaries as dividers appear.
- **Piping cream flourish:** Cream rosette SVGs scale from `0.8` to `1.0` with a soft elastic ease on entry — the cream is piped into place.
- **Focus states:** `focus:ring-4 focus:ring-[#d4a868]/40` — warm golden glow ring for keyboard navigation.

## Reusable Tailwind Tokens

- **Flour white bg:** `bg-[#f5f0e0]`
- **Pastry golden bg:** `bg-[#d4a868]`
- **Crust brown bg:** `bg-[#8a6a3a]`
- **Cream surface:** `bg-[#fff5e0]`
- **Morning warm bg:** `bg-[#fff5d0]`
- **Berry jam red:** `bg-[#c44040]`
- **Wood counter bg:** `bg-[#a08050]`
- **Flour dust speckle:** `bg-[radial-gradient(circle_1px_at_center,rgba(245,240,224,0.5)_0.4px,transparent_1px)] bg-[length:4px_4px]`
- **Wood grain:** `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_12px,rgba(0,0,0,0.03)_12px,rgba(0,0,0,0.03)_13px)]`
- **Glass display panel:** `bg-white/[0.1] backdrop-blur-sm border border-white/[0.2] rounded-xl shadow-[0_4px_24px_rgba(160,128,80,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]`
- **Cake stand tier:** `bg-[#fff5e0] rounded-2xl border border-[#d4a868]/30 shadow-[0_4px_16px_rgba(160,128,80,0.12)]`
- **Pastry golden button:** `bg-gradient-to-b from-[#d4a868] to-[#8a6a3a] text-[#fff5e0] font-semibold rounded-lg px-8 py-3 border border-[#8a6a3a] shadow-[0_3px_0_#6a4a2a]`
- **Morning sunlight gradient:** `bg-gradient-to-b from-[#fff5d0] via-[#fff5e0] to-[#d4a868]/20`
- **Baguette divider:** `h-[2px] bg-gradient-to-r from-transparent via-[#d4a868]/40 to-transparent rounded-full`
- **Croissant motif opacity:** `opacity-30` (default), `hover:opacity-50` (interactive)
- **Golden focus ring:** `focus:ring-4 focus:ring-[#d4a868]/40`

## Quality Checklist

- Palette is morning-warm (flour white, pastry golden, crust brown, cream, morning warm).
- Flour-dusted speckle texture appears on at least one major surface per page.
- Glass display case panel is the primary product/content container.
- Cake stand tiered layout is used for multi-level content stacking.
- Morning sunlight gradient fills hero or full-bleed sections.
- Berry jam red appears on primary CTA or accent, never as a large surface.
- Croissant crescent SVG or baguette silhouette appears per major section.
- Typography uses handwritten script for display headings.
- Piping cream rosette flourish appears on at least one card or section corner.
- The overall aesthetic reads as a warm French patisserie, not a commercial bakery.
- The palette never reaches cool tones — everything carries warm yellow/amber undertone.
- Pastry golden buttons have the characteristic 3D press effect.
- Glass panels have visible top-edge reflection highlight.

## Anti-Patterns

- Cool-toned or blue-shifted palettes (bakery is warm amber, never cool).
- Pure white or pure black backgrounds (lightest is morning warm, darkest is crust brown).
- Sans-serif-only typography (display headings need handwritten script warmth).
- Missing flour-dusted texture (the floured surface is the signature identity).
- Overusing berry jam red (it is the jam dollop, not the bread — max 10% of any surface).
- Flat solid-color panels without texture (every surface needs flour speckle, wood grain, blur, or gradient depth).
- Missing glass display case treatment (glass containers are the product-showcase pattern).
- Industrial or mechanical aesthetic (bakery is handcrafted and warm, not machined).
- Neon, saturated, or electric color accents (everything stays in the warm baking spectrum).
- Missing croissant or baguette motif in the view (the signature shapes must appear).
- Dark moody atmospheres (bakery is morning light and dawn warmth, not evening mood).
- Comic or overly casual typography (warm and personal, but refined — it is a French patisserie).
- Dense heavy layouts (bakery aesthetic is airy, open, with breathing room like a sunlit shop).

## Accessibility Considerations

- Morning warm and cream backgrounds with crust brown text provide good contrast — verify WCAG AA minimum (ratio >= 4.5:1 for body text).
- Flour dust speckled overlays can reduce text legibility — ensure text sits on solid warm base beneath the speckle pattern.
- Glass panel translucent backgrounds may shift contrast against variable content behind them — add `text-shadow: 0 1px 2px rgba(138,106,58,0.3)` on glass-panel text for consistent readability.
- Focus states: `focus:ring-4 focus:ring-[#d4a868]/40` for visible warm-golden keyboard indicator on all interactive elements.
- Berry jam red CTA buttons must use flour white text `#f5f0e0` for sufficient contrast against `#c44040` (ratio >= 4.5:1).
- Decorative flour-dusted speckles, croissant SVGs, baguette silhouettes, and piping cream rosettes must be `aria-hidden="true"`.
- Touch targets: all buttons, glass-panel cards, and interactive tier elements must meet 44x44px minimum.
- Handwritten script display fonts may have limited legibility at small sizes — ensure display font is only used at `text-2xl` or larger.
- Glass panel `backdrop-blur-sm` can cause performance issues on low-end devices — provide `@supports not (backdrop-filter: blur(1px))` fallback with a solid semi-transparent warm background like `bg-[#fff5e0]/90`.
- Morning sunlight gradient overlays should not carry interactive content that shifts during animation — keep the gradient static or very subtle to avoid motion-triggered vestibular discomfort.
