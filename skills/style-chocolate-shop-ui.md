---
name: chocolate-shop-ui
description: Build chocolate shop UI components (glass display truffles, cocoa powder dust, copper molds, tempering machine, marbled counter, velvet ribbon boxes) with rich cocoa surfaces, glass case displays, and the luxurious indulgence of an artisan chocolatier. Trigger this skill when the user asks for chocolate shop, chocolatier, truffle display, cocoa, chocolate boutique, luxury confectionery, artisan chocolate, or bonbon interface.
---

# Chocolate Shop UI

Use this skill to design and implement rich, indulgent interfaces inspired by artisan chocolate shops: deep cocoa surfaces, glass display cases with truffle arrangements, copper mold accents, marbled chocolate counters, velvet ribbon box details, and the luxurious warmth of a handcrafted chocolatier's workshop.

## Non-Negotiable Foundations

- **Palette is cocoa-grounded.** Every surface derives from the chocolate spectrum: dark chocolate brown, milk chocolate warm, white chocolate cream, and cocoa dust midtones. No colors exist outside this range except copper metallic and velvet red accents.
- **Glass display case is the primary container.** Any product or content grouping uses a translucent glass-panel treatment with subtle reflection and soft inner glow, mimicking a chilled glass counter.
- **Cocoa dust texture appears on every major surface.** At least one speckled cocoa-powder overlay must be present on any full-width section or hero to anchor the chocolate identity.
- **Copper is the only metallic accent.** Copper mold highlights appear on borders, icons, or small decorative shapes. Never use gold, silver, or chrome — copper is the signature metal of the chocolatier's mold.
- **Velvet ribbon deep red is reserved sparingly.** Use it for primary CTAs, key accent lines, and ribbon-wrapping motifs. It should never exceed 8% of any single surface area.
- **Typography is elegant serif.** Every heading must carry a serif typeface. Body text can be a clean sans-serif, but the typographic voice must read as refined and artisanal, not casual.
- **Marbled chocolate gradient is the hero background.** Dark, milk, and white chocolate swirl together in organic flowing gradients on any hero or full-bleed section.

## Core Material Recipes

### 1) Cocoa Dust Texture Overlay

Warm brown speckled pattern simulating sifted cocoa powder across a surface.

- `bg-[#3a1a0a] relative overflow-hidden` with pseudo-element speckle layer: `bg-[radial-gradient(circle_1.5px_at_center,rgba(90,58,26,0.6)_0.5px,transparent_1px)] bg-[length:6px_6px]` to create a fine cocoa-dust speckle grid over the dark chocolate base.

### 2) Glass Display Case Panel

Translucent glass container for product cards and truffle arrangements.

- `bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]` with inner reflection: after pseudo-element `bg-gradient-to-b from-white/[0.06] to-transparent h-1/2 w-full absolute top-0 left-0 rounded-t-2xl`.

### 3) Marbled Chocolate Counter Background

Organic swirl of dark, milk, and white chocolate flowing together.

- `bg-gradient-to-br from-[#3a1a0a] via-[#8a5a2a] to-[#f0e8d0]` with added turbulence: overlay `bg-[radial-gradient(ellipse_at_20%_50%,rgba(58,26,10,0.9)_0%,transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(240,232,208,0.7)_0%,transparent_40%),radial-gradient(ellipse_at_50%_80%,rgba(138,90,42,0.8)_0%,transparent_45%)]`.

### 4) Copper Mold Accent Border

Shiny metallic copper element for icons, borders, and decorative shapes.

- `bg-gradient-to-br from-[#d4935a] via-[#b87333] to-[#8a5220] border border-[#d4935a]/50 shadow-[0_0_8px_rgba(184,115,51,0.3)]` for a dimensional copper piece with the characteristic metallic highlight at top-left.

### 5) Velvet Ribbon Box Decoration

Deep red velvet ribbon wrapping accent for cards and gift boxes.

- `bg-[#5a0a0a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3)]` with subtle fabric grain: `bg-[url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' x='0' y='0' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")]` for velvet texture micro-detail.

### 6) Tempering Machine Drip Accent

Chocolate drip flowing downward from an edge, simulating the tempering pour.

```html
<div class="relative h-8 w-full">
  <div class="absolute top-0 left-[15%] w-1 h-6 bg-[#3a1a0a] rounded-b-full opacity-80"></div>
  <div class="absolute top-0 left-[35%] w-1.5 h-8 bg-[#5a3a1a] rounded-b-full opacity-90"></div>
  <div class="absolute top-0 left-[55%] w-1 h-4 bg-[#8a5a2a] rounded-b-full opacity-70"></div>
  <div class="absolute top-0 left-[75%] w-1.5 h-7 bg-[#3a1a0a] rounded-b-full opacity-85"></div>
  <div class="absolute bottom-0 left-[15%] w-3 h-3 bg-[#3a1a0a] rounded-full"></div>
  <div class="absolute bottom-0 left-[35%] w-4 h-3 bg-[#5a3a1a] rounded-full"></div>
  <div class="absolute bottom-0 left-[75%] w-3.5 h-3 bg-[#3a1a0a] rounded-full"></div>
</div>
```

### 7) Chocolate Truffle Round Button

Rich round button styled as a glossy chocolate truffle.

- `bg-gradient-to-br from-[#5a3a1a] to-[#3a1a0a] text-[#f0e8d0] font-semibold rounded-full px-8 py-3 border-2 border-[#8a5a2a] shadow-[0_4px_0_#2a0a00,inset_0_1px_0_rgba(240,232,208,0.15)] hover:translate-y-1 hover:shadow-[0_2px_0_#2a0a00] active:shadow-none transition-all duration-200`.

### 8) Gold Foil Lettering Effect

Subtle gold-foil shimmer for premium text labels.

- `bg-gradient-to-r from-[#c4a043] via-[#e0c868] to-[#c4a043] bg-clip-text text-transparent` with a subtle text-shadow for depth: `drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Dark Chocolate | `#3a1a0a` | Primary backgrounds, deep surfaces, text on cream |
| Milk Chocolate | `#8a5a2a` | Secondary surfaces, borders, warm accents |
| White Chocolate | `#f0e8d0` | Light surfaces, text on dark, cream panels |
| Cocoa Dust | `#5a3a1a` | Mid-tone surfaces, speckle overlays, subtle fills |
| Copper Mold | `#b87333` | Metallic accents, icon highlights, decorative borders |
| Velvet Ribbon | `#5a0a0a` | Primary CTA, ribbon accents, key highlights |
| Gold Foil | `#c4a043` | Premium text labels, foil-stamp details, star ratings |
| Cream | `#f5f0e0` | Card backgrounds, body text areas, light fill |

Rules: The chocolate spectrum governs everything. Dark-to-light brown flows are the default gradient direction. Copper appears only as a small accent or border — never as a large surface. Velvet red is the singular warm accent for emphasis and CTA — use it deliberately and sparingly. Gold foil appears only on text and tiny details. White chocolate cream is the lightest value and should never approach pure white.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (elegant serif, luxurious, artisanal chocolate-shop signage).
- **Body:** Inter, DM Sans (clean, refined, high legibility on dark backgrounds).
- **Labels:** `font-bold text-sm tracking-wide uppercase` (refined, direct, copper-tinted).
- **Accent/Price:** Playfair Display italic (flowing, indulgent, hand-lettered feel).

## Component Architecture Pattern

Every chocolate-shop component follows a layered glass-case architecture:

```
[Marbled Background Layer]
  [Glass Display Panel]
    [Cocoa Dust Texture Overlay]
    [Content: Cards, Text, Products]
    [Copper Mold Accent Corners]
  [Velvet Ribbon CTA Bar]
  [Tempering Drip Divider]
```

- **Background layer:** Marbled chocolate gradient fills the full section.
- **Glass panel:** Translucent card container with blur and inner glow, always visible.
- **Cocoa dust:** Speckled overlay on at least one major element per view.
- **Copper accents:** Small metallic corner pieces or border highlights on the glass panel.
- **Velvet CTA:** Deep red action bar or button anchoring the bottom of the component.
- **Tempering drip:** Organic chocolate-drip divider between major sections.

## Interaction Rules

- **Hover on glass panels:** Increase `backdrop-blur` from `md` to `lg`, brighten border from `white/[0.15]` to `white/[0.25]`, and add subtle `shadow-[0_12px_40px_rgba(0,0,0,0.4)]` — the glass case catches light.
- **Hover on truffle buttons:** Translate down 1px and reduce shadow, simulating a press into soft chocolate — `hover:translate-y-1 hover:shadow-[0_2px_0_#2a0a00]`.
- **Hover on copper accents:** Brighten the gradient toward the highlight end and increase `box-shadow` glow — `hover:shadow-[0_0_14px_rgba(184,115,51,0.5)]`.
- **Hover on velvet ribbon elements:** Slight brighten of the red from `#5a0a0a` toward `#7a1a1a` and increase inner highlight.
- **Page load:** Glass panels fade in with a slight upward motion (`opacity-0 translate-y-4` to `opacity-100 translate-y-0`) over 600ms with `ease-out` — the display case is revealed.
- **Scroll reveal:** Cocoa dust speckle pattern fades in independently, adding texture as sections enter viewport.
- **Tempering drip animation:** Drip elements can animate downward with a slight elastic overshoot on page load — `translate-y-[-8px]` to `translate-y-0` with 400ms `ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- **Focus states:** `focus:ring-4 focus:ring-[#b87333]/40` — copper glow ring for keyboard navigation.

## Reusable Tailwind Tokens

- **Dark chocolate bg:** `bg-[#3a1a0a]`
- **Milk chocolate bg:** `bg-[#8a5a2a]`
- **White chocolate text:** `text-[#f0e8d0]`
- **Cocoa dust speckle:** `bg-[radial-gradient(circle_1.5px_at_center,rgba(90,58,26,0.6)_0.5px,transparent_1px)] bg-[length:6px_6px]`
- **Glass panel:** `bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]`
- **Copper accent:** `bg-gradient-to-br from-[#d4935a] via-[#b87333] to-[#8a5220] border border-[#d4935a]/50`
- **Velvet ribbon:** `bg-[#5a0a0a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3)]`
- **Gold foil text:** `bg-gradient-to-r from-[#c4a043] via-[#e0c868] to-[#c4a043] bg-clip-text text-transparent`
- **Truffle button:** `bg-gradient-to-br from-[#5a3a1a] to-[#3a1a0a] text-[#f0e8d0] font-semibold rounded-full px-8 py-3 border-2 border-[#8a5a2a] shadow-[0_4px_0_#2a0a00]`
- **Marbled gradient:** `bg-gradient-to-br from-[#3a1a0a] via-[#8a5a2a] to-[#f0e8d0]`
- **Cream surface:** `bg-[#f5f0e0]`
- **Copper glow hover:** `hover:shadow-[0_0_14px_rgba(184,115,51,0.5)]`
- **Copper focus ring:** `focus:ring-4 focus:ring-[#b87333]/40`

## Quality Checklist

- Palette is cocoa-grounded (dark chocolate, milk chocolate, white chocolate, cocoa dust).
- Copper appears as a small metallic accent on at least one element per view.
- Glass display case panel is the primary container for product or content groups.
- Cocoa dust speckle overlay appears on at least one major surface per page.
- Velvet ribbon deep red appears on primary CTA or key accent, never as a large surface.
- Marbled chocolate gradient is present on hero or full-bleed sections.
- Typography uses elegant serif for all headings.
- Gold foil text effect is used on at least one premium label or heading.
- Tempering drip divider separates major content sections.
- The overall aesthetic reads as a luxury artisan chocolatier, not a candy store.
- Dark backgrounds dominate — the palette is warm but moody, not bright.
- Truffle round buttons have the characteristic 3D press effect.

## Anti-Patterns

- Bright or pastel-only palettes (chocolate is deep and rich, not pastel).
- Using gold, silver, or chrome metallics (copper is the only metal of the chocolatier).
- Pure white backgrounds (the lightest value is white chocolate cream `#f0e8d0` or cream `#f5f0e0`).
- Sans-serif headings (typography must be elegant and refined, serif for display).
- Rounded-everything with no angular refinement (chocolate aesthetics balance organic marbling with the precise geometry of molds).
- Missing glass display case treatment (glass containers are the signature UI pattern).
- Overusing velvet red (it should never exceed 8% of any surface — it is punctuation, not fill).
- Neon or saturated color accents outside the chocolate palette.
- Comic or casual typography (chocolate is indulgent and refined, not playful).
- Flat solid-color panels without texture (every surface must have depth through dust, grain, gradient, or blur).
- Missing copper accent in the view (the metal of the craft must be represented).
- Cold blue or cool-toned elements (the entire palette is warm-spectrum).

## Accessibility Considerations

- Dark chocolate backgrounds with white chocolate text provide strong contrast — verify WCAG AA minimum (ratio >= 4.5:1 for body, >= 3:1 for large text).
- Cocoa dust speckled overlays may reduce text readability — ensure text sits on solid or near-solid color beneath the speckle.
- Glass panel translucent backgrounds can wash out text against variable page content — add `text-shadow: 0 1px 2px rgba(0,0,0,0.5)` on glass-panel text.
- Focus states: `focus:ring-4 focus:ring-[#b87333]/40` for visible copper-glow keyboard indicator on all interactive elements.
- Velvet ribbon CTA on dark backgrounds must maintain sufficient contrast — use white chocolate text `#f0e8d0` on velvet `#5a0a0a`.
- Decorative copper mold shapes, tempering drips, and cocoa dust speckles must be `aria-hidden="true"`.
- Touch targets: all truffle buttons and interactive glass panels must meet 44x44px minimum.
- Gold foil gradient text may have variable contrast — add a solid fallback `color` behind the gradient for screen readers.
- Glass panel `backdrop-blur` can cause performance issues on low-end devices — provide `@supports not (backdrop-filter: blur(1px))` fallback with a solid semi-transparent background.
