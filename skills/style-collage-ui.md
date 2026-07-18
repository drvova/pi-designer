---
name: collage-ui
description: Build collage / scrapbook UI components (torn paper textures, cutout photos, sticker graphics, hand-drawn fonts, mixed media layering, washi tape) with overlapping layers, imperfect edges, and scrapbook-style creative composition. Trigger this skill when the user asks for collage design, scrapbook UI, cutout aesthetic, sticker design, mixed media interfaces, or handcrafted zine-style layouts.
---

# Collage / Scrapbook UI

Use this skill to design and implement tactile, layered, scrapbook-inspired interfaces with torn paper edges, cutout imagery, hand-drawn elements, sticker graphics, and the imperfect charm of physical mixed-media composition.

## Non-Negotiable Foundations

- Collage UI simulates physical craft: cut paper, torn edges, tape, stamps, stickers, and hand-drawn marks.
- Layering is essential: elements overlap, cast shadows on each other, and create physical depth through stacking.
- Imperfection is the aesthetic: slightly rotated elements, uneven edges, visible texture, and hand-positioned feel.
- Mixed media: combine photography, illustration, typography, and texture in the same composition.
- The interface should feel like a physical scrapbook, mood board, or zine — not a digital template.
- Shadows are soft and physical: each layer casts a shadow on the layer below it.

## Core Material Recipes

### 1) Paper Texture Card

Base surface with subtle paper grain texture.

- Background: `bg-[#f9f5ef]` (warm paper tone).
- Texture: SVG noise overlay `opacity-[0.03]` or a subtle paper texture image.
- Shadow: `shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)]` (soft, multi-layered physical shadow).
- Optional rotation: `rotate-[-1deg]` (slightly off, hand-placed feel).
- Full: `bg-[#f9f5ef] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] p-8 rotate-[-1deg]`

### 2) Torn Paper Edge

Irregular torn edge effect using clip-path or mask.

```css
.torn-bottom {
  clip-path: polygon(
    0% 0%, 100% 0%, 100% 95%,
    95% 98%, 90% 93%, 85% 97%, 80% 92%,
    75% 96%, 70% 91%, 65% 95%, 60% 90%,
    55% 94%, 50% 89%, 45% 93%, 40% 88%,
    35% 92%, 30% 87%, 25% 91%, 20% 86%,
    15% 90%, 10% 85%, 5% 89%, 0% 94%
  );
}
```

Or use SVG mask for more organic torn edges.

### 3) Cutout Photo

Photo with irregular cutout edge and physical shadow (like a photo glued into a scrapbook).

- Container: `overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[2deg]`.
- Image: `w-full h-full object-cover`.
- Clip-path for irregular edge or simple rounded corners with visible border (like a Polaroid frame).
- Polaroid style: `bg-white p-3 pb-12 shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[-2deg]` with image inside and caption space at bottom.

### 4) Washi Tape / Sticky Tape

Semi-transparent tape strips holding elements in place.

- `absolute -top-2 left-1/4 w-20 h-6 bg-[#ffd600]/40 rotate-[-12deg]` (yellow tape).
- `absolute -top-2 right-1/4 w-16 h-5 bg-[#ff69b4]/30 rotate-[8deg]` (pink tape).
- Add a subtle striped pattern: `bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.2)_4px,rgba(255,255,255,0.2)_8px)]` on the tape.

### 5) Sticker Badge

Die-cut sticker with white border and slight shadow.

- `bg-[#ff006e] text-white font-bold px-4 py-2 rounded-full border-[3px] border-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] rotate-[-5deg]`.
- The white border (`border-white`) simulates the die-cut sticker edge.
- Rotation makes it feel hand-placed.

### 6) Hand-Drawn Underline / Circle

SVG hand-drawn marks that add personal, imperfect character.

```html
<svg viewBox="0 0 200 10" class="absolute bottom-0 left-0 w-full">
  <path d="M2,5 Q50,1 100,5 T198,4" fill="none" stroke="#ff006e" stroke-width="3" stroke-linecap="round"/>
</svg>
```

Slightly wobbly, uneven stroke — not a perfect line.

## Color Palette System

Collage UI uses warm, tactile, paper-inspired tones:

### Paper Base

| Color | Hex | Role |
|---|---|---|
| Warm Paper | `#f9f5ef` | Primary background |
| Kraft Paper | `#c4a882` | Card surface, texture |
| Cream | `#fdf5e6` | Light surface |
| Newspaper | `#e8e4dc` | Muted background |

### Accent Stickers

| Color | Hex | Role |
|---|---|---|
| Hot Pink | `#ff006e` | Sticker, tape, highlight |
| Mustard | `#ffd600` | Tape, accent |
| Robin's Egg Blue | `#00b4d8` | Tag, sticker |
| Coral | `#ff6b6b` | Stamp, badge |
| Sage | `#7cb342` | Accent, botanical |

### Ink / Text

| Color | Hex | Role |
|---|---|---|
| Ink Black | `#1a1a1a` | Primary text, hand-drawn marks |
| Sepia | `#5d4037` | Secondary text, aged feel |
| Charcoal | `#36454f` | Alternative text |

Rules: Backgrounds are always warm paper tones. Accents come from stickers, tape, and stamps in bright colors. Text is ink-like (dark, slightly warm).

## Typography Recommendations

Collage UI deliberately mixes typography styles to simulate cut-and-paste:

- **Display/Headlines:** Permanent Marker, Caveat, or Marker Felt (handwritten feel).
- **Alternative display:** Abril Fatface, Playfair Display (torn from a magazine).
- **Body:** A typewriter font — Courier Prime, Special Elite, or Courier New (mimics typewritten journal entries).
- **Labels:** Archivo Black, Oswald, or Bebas Neue (bold, stamp-like, uppercase).
- **Accents:** Mix in a script font for personal notes or captions.
- The key is MIXING. Each text block can use a different font, as if cut from different sources.

## Component Architecture Pattern

1. Paper-textured background (warm, slightly textured base).
2. Overlapping paper cards (rotated at various angles, casting shadows).
3. Cutout photos (Polaroid frames or irregular clip-path edges).
4. Tape and adhesive elements (washi tape strips holding layers in place).
5. Sticker badges and stamps (bright die-cut shapes at angles).
6. Hand-drawn marks (SVG underlines, circles, arrows, doodles).
7. Mixed typography (different fonts for different elements).

Each element should feel physically placed, not digitally templated.

## Interaction Rules

- Default state: layered, tactile, slightly rotated.
- Hover state: element lifts or straightens (like picking up a photo).
  - `hover:rotate-0 hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300`.
- Active state: `active:scale-95` (pressing down on the element).
- Focus state: `focus:ring-4 focus:ring-[#ff006e] focus:ring-offset-4 focus:ring-offset-[#f9f5ef]`.
- Transitions: `transition-all duration-300 ease-out` (smooth, physical movement).

## Reusable Tailwind Tokens

- Paper card: `bg-[#f9f5ef] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] p-8 rotate-[-1deg]`
- Polaroid: `bg-white p-3 pb-12 shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[-2deg]`
- Washi tape: `absolute -top-2 w-20 h-6 bg-[#ffd600]/40 rotate-[-12deg]`
- Sticker: `bg-[#ff006e] text-white font-bold px-4 py-2 rounded-full border-[3px] border-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] rotate-[-5deg]`
- Hand-drawn underline: SVG path with `stroke-linecap="round"` and slightly wobbly bezier curves.
- Newspaper clipping: `bg-[#e8e4dc] p-4 font-serif text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)]`

## Quality Checklist (must pass)

- Elements have physical, layered shadows (multi-stop soft shadows).
- Paper texture or warm tone backgrounds are present.
- Elements are slightly rotated (hand-placed feel).
- Mixed typography (at least 2 different font families visible).
- Tape, stickers, or stamps are used as decorative accents.
- Photos use Polaroid frames or cutout edges.
- Composition feels physical and layered, not digitally flat.
- Imperfection is intentional (uneven edges, slight rotations, wobbly lines).
- The aesthetic reads as a physical scrapbook or zine.

## Anti-Patterns

- Perfectly aligned, grid-based layouts (collage is intentionally off-grid).
- Single consistent font family (collage MIXES fonts deliberately).
- Flat digital shadows (use soft, multi-layered physical shadows).
- Missing texture (paper grain or warm tones are essential).
- Perfectly straight elements (rotate things slightly).
- Clean, digital edges (use torn, cut, or irregular edges).
- Monochromatic palettes (collage uses mixed colors from different "sources").
- Overly structured composition (collage is layered and overlapping).
- Missing decorative elements (tape, stickers, stamps add the scrapbook charm).
- Trying to make it look "professional" (the charm is in the imperfection).

## Accessibility Considerations

- Rotated elements must not prevent touch interaction (hit areas should remain accessible).
- Multi-layered shadows should not cause visual confusion about interactive targets.
- Paper texture backgrounds must be subtle enough to not reduce text contrast.
- Focus states must be bold and visible: `focus:ring-4 focus:ring-[#ff006e]`.
- Hand-drawn SVG marks must be `aria-hidden="true"` (decorative).
- Cutout photos need alt text describing the image.
- Mixed typography should not reduce readability; body text should remain at `text-base` minimum.
- Ensure content is still logically ordered for screen readers despite visual layering.
