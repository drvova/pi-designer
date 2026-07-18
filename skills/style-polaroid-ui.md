---
name: polaroid-ui
description: Build Polaroid / instant photo UI components (white instant-film frame, developing image effect, square photo with thick bottom border, handwritten captions, chemical emulsion texture, expired film color shifts, SX-70 rainbow logo) with instant-photo framing, slow-develop reveal animations, and the nostalgic anticipation of watching a photo appear. Trigger this skill when the user asks for Polaroid design, instant photo UI, instant film aesthetic, developing photo effect, SX-70 style, expired film look, chemical emulsion texture, photo card with caption, or retro camera-style image framing.
---

# Polaroid / Instant Photo UI

Use this skill to design and implement instant-film-inspired interfaces with white instant-photo frames, chemical development reveal animations, expired film color shifts, handwritten captions, and the tactile nostalgia of watching a photo slowly appear from a blank card.

## Non-Negotiable Foundations

- Polaroid UI simulates physical instant film: a white border frame with a thick bottom edge for captions, a square photo area, and the unmistakable SX-70 rainbow stripe accent.
- The photo area is always square (1:1 aspect ratio). Never stretch or crop to non-square within the frame.
- Development animation is the signature interaction: the image starts blurred/underexposed and sharpens to full clarity over a defined duration, simulating chemical emulsion development.
- Expired film color shifts overlay the image with subtle warm yellow, purple, or magenta tints — the photo should look aged, not pristine.
- Captions use handwritten fonts at the bottom of the frame, in the thick white border area.
- Every card is slightly rotated (hand-held feel, scattered on a table).
- Shadows are soft and physical: the card sits on a surface and casts a drop shadow beneath it.
- The frame itself is always matte white with a subtle paper grain texture — never glossy.

## Core Material Recipes

### 1) Polaroid Frame Card

The base instant-photo card: white frame, square image area, thick bottom border.

- Frame background: `bg-[#f5f5f0]` (matte instant-film white, slightly warm).
- Padding creates the border: `p-3 pb-16` (thick bottom border for caption area).
- Shadow: `shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)]` (card resting on a surface).
- Slight rotation: `rotate-[-2deg]` (hand-placed feel).
- Image container: `aspect-square w-full overflow-hidden`.
- Caption area: `mt-3 text-center` inside the bottom padding.
- Full: `bg-[#f5f5f0] p-3 pb-16 shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] rotate-[-2deg]`

### 2) Chemical Development Reveal Animation

The image starts underexposed and blurred, then develops to full clarity — the signature Polaroid interaction.

```css
@keyframes develop {
  0% {
    filter: blur(20px) brightness(0.3) saturate(0);
    opacity: 0.4;
  }
  30% {
    filter: blur(12px) brightness(0.5) saturate(0.3);
    opacity: 0.6;
  }
  60% {
    filter: blur(5px) brightness(0.8) saturate(0.6);
    opacity: 0.85;
  }
  100% {
    filter: blur(0) brightness(1) saturate(1);
    opacity: 1;
  }
}

.developing {
  animation: develop 3s ease-out forwards;
}

.developing-slow {
  animation: develop 6s ease-out forwards;
}
```

Use `animation-fill-mode: forwards` so the image stays sharp after development completes. Trigger on page load, scroll-into-view, or user interaction.

### 3) Expired Film Color-Shift Overlay

A subtle tint layer over the developed image that simulates aged/expired instant film chemistry.

- Warm expired: `mix-blend-overlay bg-[#ffd980]/20` (yellow-green chemical shift).
- Purple expired: `mix-blend-overlay bg-[#9b7fd4]/15` (purple chemical shift).
- Magenta expired: `mix-blend-overlay bg-[#ff80c0]/10` (magenta chemical shift).
- Combined faded: layer two overlays for richer expired look.
- Faded contrast: apply `contrast-[0.85] saturate-[0.7]` to the image for that washed-out film look.

```html
<div class="relative aspect-square overflow-hidden">
  <img src="photo.jpg" class="w-full h-full object-cover contrast-[0.85] saturate-[0.7]" />
  <div class="absolute inset-0 mix-blend-overlay bg-[#ffd980]/20"></div>
  <div class="absolute inset-0 mix-blend-overlay bg-[#9b7fd4]/10"></div>
</div>
```

### 4) SX-70 Rainbow Stripe Accent

The iconic thin horizontal rainbow bar that appeared on Polaroid SX-70 film and branding.

```html
<div class="flex h-1.5 w-full rounded-full overflow-hidden">
  <div class="flex-1 bg-[#ff006e]"></div>
  <div class="flex-1 bg-[#ff8c1a]"></div>
  <div class="flex-1 bg-[#ffcc00]"></div>
  <div class="flex-1 bg-[#7cb342]"></div>
  <div class="flex-1 bg-[#00b4d8]"></div>
  <div class="flex-1 bg-[#4a6fa5]"></div>
  <div class="flex-1 bg-[#9b7fd4]"></div>
  <div class="flex-1 bg-[#ff80c0]"></div>
  <div class="flex-1 bg-[#ff4040]"></div>
  <div class="flex-1 bg-[#ffd980]"></div>
</div>
```

Place the stripe at the top of the card, at the bottom of the frame border, or as a decorative accent near the caption. Keep it thin (1.5px to 3px).

### 5) Handwritten Caption

Caption text in the thick bottom border area of the frame, using a handwriting font.

- `font-['Caveat']` or `font-['Permanent_Marker']` (handwritten feel).
- `text-xl text-[#3a3a3a]` (dark gray, like pencil or ballpoint ink).
- `mt-2 text-center` (centered in the caption area).
- Slight rotation: `rotate-[-1deg]` (handwritten, not typeset).
- For date stamps: `font-['Caveat'] text-sm text-[#888]` (faded, like a date written after the fact).

### 6) Chemical Emulsion Texture

A subtle grain/noise overlay on the photo area that simulates the chemical emulsion surface of instant film.

```css
.emulsion-grain {
  position: relative;
}
.emulsion-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

### 7) Tape / Pin Attachment

Optional tape strip or pin at the top of the card, as if pinned to a surface.

- Tape: `absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffcc00]/30 rotate-[-3deg]` (washi tape holding card to wall).
- Pushpin: `absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff006e] rounded-full shadow-md`.

## Color Palette System

Polaroid UI uses matte instant-film white, faded photo tones, chemical warm tints, and the SX-70 rainbow stripe.

### Frame and Surface

| Color | Hex | Role |
|---|---|---|
| Matte Frame White | `#f5f5f0` | Polaroid card background, border |
| Warm Paper | `#f0ede4` | Secondary surface, aged frame |
| Caption Ink Gray | `#3a3a3a` | Handwritten caption text |
| Faded Date Gray | `#888888` | Date stamp, secondary caption |
| Surface Shadow | `rgba(0,0,0,0.15)` | Card drop shadow |

### Expired Film Tints (Overlays)

| Color | Hex | Role |
|---|---|---|
| Chemical Yellow | `#ffd980` | Warm expired overlay |
| Chemical Purple | `#9b7fd4` | Purple shift overlay |
| Chemical Magenta | `#ff80c0` | Magenta shift overlay |
| Chemical Cyan | `#00b4d8` | Cool expired overlay |
| Faded Green | `#a8c97f` | Green chemical shift |

### SX-70 Rainbow Stripe (10 Colors)

| Color | Hex | Segment |
|---|---|---|
| Rainbow Red | `#ff4040` | 1 |
| Rainbow Pink | `#ff006e` | 2 |
| Rainbow Orange | `#ff8c1a` | 3 |
| Rainbow Yellow | `#ffcc00` | 4 |
| Rainbow Green | `#7cb342` | 5 |
| Rainbow Cyan | `#00b4d8` | 6 |
| Rainbow Blue | `#4a6fa5` | 7 |
| Rainbow Light Yellow | `#ffd980` | 8 |
| Rainbow Light Pink | `#ff80c0` | 9 |
| Rainbow Purple | `#9b7fd4` | 10 |

Rules: The frame is always matte white. Photos use expired film overlays for character. The rainbow stripe is thin and decorative — never dominant. Caption text is soft gray, never pure black.

## Typography Recommendations

Polaroid UI uses handwritten and typewriter fonts for captions to feel personal and physical.

- **Captions:** Caveat, Permanent Marker, or Kalam (handwritten feel, centered in the border).
- **Date Stamps:** Caveat at smaller size or Special Elite (typewriter, for date/location stamps).
- **Labels / Tags:** Archivo Black or Oswald uppercase (if tags or metadata are used outside the frame).
- **Alternative captions:** Indie Flower or Shadows Into Light for a softer handwritten look.
- **Body text (if any):** Lora or Georgia serif (for any descriptive text, keep minimal).
- The key is the handwritten caption. Most text is captions on photos, not long-form body.

## Component Architecture Pattern

1. Matte white frame card (thick bottom border, slight rotation, soft shadow).
2. Square photo area (1:1 aspect ratio, overflow-hidden, object-cover).
3. Chemical development animation on the image (blur-to-sharp reveal).
4. Expired film color-shift overlay layer (mix-blend tint).
5. Emulsion grain texture layer (SVG noise, mix-blend overlay).
6. SX-70 rainbow stripe accent (thin bar, top or bottom of frame).
7. Handwritten caption in the bottom border area.
8. Optional tape or pin attachment at the top.

Each card should feel like a physical instant photo resting on a surface, slightly off-kilter, with a photo that just developed.

## Interaction Rules

- Default state: matte frame, slightly rotated, photo fully developed or mid-development.
- Hover state: card lifts and straightens (like picking up a photo to look closer).
  - `hover:rotate-0 hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-500`.
- Active state: `active:scale-95 active:rotate-0` (pressing the card flat).
- Focus state: `focus:ring-4 focus:ring-[#ff006e] focus:ring-offset-4 focus:ring-offset-[#f5f5f0]`.
- Development trigger: the `developing` class starts when the card enters the viewport (`IntersectionObserver`) or on explicit user action (tap to develop).
- Scattered layout: multiple cards are rotated at different angles (`-3deg`, `1deg`, `-1deg`, `2deg`) to feel scattered on a surface.
- Transitions: `transition-all duration-500 ease-out` (slow, physical movement like picking up a photo).

## Reusable Tailwind Tokens

- Polaroid frame: `bg-[#f5f5f0] p-3 pb-16 shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] rotate-[-2deg]`
- Square photo: `aspect-square w-full object-cover overflow-hidden`
- Expired warm overlay: `absolute inset-0 mix-blend-overlay bg-[#ffd980]/20`
- Expired purple overlay: `absolute inset-0 mix-blend-overlay bg-[#9b7fd4]/15`
- Faded photo: `contrast-[0.85] saturate-[0.7]`
- Rainbow stripe segment: `flex-1 h-1.5 bg-[#ff006e]`
- Caption: `font-['Caveat'] text-xl text-[#3a3a3a] text-center rotate-[-1deg]`
- Date stamp: `font-['Caveat'] text-sm text-[#888888] text-center`
- Tape strip: `absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#ffcc00]/30 rotate-[-3deg]`
- Hover straighten: `hover:rotate-0 hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-500`

## Quality Checklist (must pass)

- Frame is matte white (`#f5f5f0`) with a thick bottom border for the caption area.
- Photo area is strictly square (1:1 aspect ratio).
- Chemical development animation is present (blur-to-sharp reveal on image).
- Expired film color-shift overlay is visible (subtle warm/purple/magenta tint).
- SX-70 rainbow stripe appears as a thin decorative accent.
- Captions use handwritten fonts in the bottom border area.
- Cards are slightly rotated (scattered, hand-placed feel).
- Emulsion grain texture adds subtle physical character to the photo surface.
- Shadows are soft and physical (card resting on a surface).
- Faded contrast/saturation on images gives the aged film look.
- Composition feels like physical instant photos scattered on a table or pinned to a board.

## Anti-Patterns

- Non-square photo area (instant film is always square — never 4:3 or 16:9 inside the frame).
- Glossy frame (the frame is matte paper, not glossy plastic).
- Pristine, vivid photos (expired film looks faded, desaturated, with chemical tints).
- Missing development animation (the reveal is the signature interaction).
- Perfectly straight cards (they should be slightly rotated, hand-placed).
- Thick or dominant rainbow stripe (it is a thin accent, not a feature).
- Long-form body text inside the frame (captions are short, handwritten).
- Pure black caption text (use soft gray, like pencil or ballpoint).
- Flat digital shadows (use soft, multi-layered drop shadows for physical presence).
- Overlapping cards without shadows (each card must cast its own shadow on the surface).
- Skipping the emulsion texture (the grain makes the photo feel like chemical film, not digital).

## Accessibility Considerations

- Development animations must respect `prefers-reduced-motion`: provide an instant-show fallback when motion is reduced.
  - `@media (prefers-reduced-motion: reduce) { .developing { animation: none; filter: none; opacity: 1; } }`
- Captions must have sufficient contrast against the matte white frame (`#3a3a3a` on `#f5f5f0` passes WCAG AA).
- Expired film overlays must not reduce image legibility for informational photos — decorative overlays should use low opacity.
- Focus states must be bold and visible: `focus:ring-4 focus:ring-[#ff006e] focus:ring-offset-4`.
- All photos require descriptive alt text regardless of caption text.
- The rainbow stripe and emulsion texture must be `aria-hidden="true"` (purely decorative).
- Slightly rotated cards should not cause touch-target clipping on mobile (ensure adequate spacing).
- Content order in the DOM should remain logical (photo before caption) regardless of visual rotation.
- Development animation duration should be configurable (3s default, with option to skip for accessibility).
