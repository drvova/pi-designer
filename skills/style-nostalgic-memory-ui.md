---
name: nostalgic-memory-ui
description: Build nostalgic memory UI components (faded photograph, vintage filter, handwritten note, old paper texture, sepia tone, memory vignette, keepsake box) with faded warm tones, vintage photo effects, and the bittersweet quality of cherished memories. Trigger this skill when the user asks for nostalgic design, vintage memory UI, faded photograph, sepia tone, old paper texture, handwritten note, keepsake box, retro photo filter, memory vignette, or bittersweet warm-toned interfaces.
---

# Nostalgic Memory UI

Use this skill to design and implement interfaces that evoke the warmth and melancholy of cherished memories: faded photographs with desaturated warm tones, vintage sepia filters with film grain, handwritten notes on lined paper, yellowed creased surfaces, dark vignette edges, ornate keepsake boxes, and Polaroid-style frames. The aesthetic captures the bittersweet quality of looking back at moments that have softened and faded with time.

## Non-Negotiable Foundations

- Nostalgic memory UI simulates the visual decay of physical photographs and aged paper: colors are DESATURATED, edges are WORN, and surfaces are TEXTURED with the marks of time.
- A sepia or warm tone shift is mandatory: every element must feel like it exists under the amber glow of aged varnish or behind the glass of a photo album.
- The vignette effect is a structural element, not decoration: dark edges fading toward a brighter center frame content the way a memory frames its most important details.
- Paper texture must be visible: yellowed, creased, coffee-stained, or foxed surfaces communicate the passage of time.
- Typography must feel personal and analog: cursive handwriting, typewriter text, or serif fonts that evoke printed photographs and handwritten letters.
- The aesthetic is melancholic and warm — nothing looks digitally sharp, mechanically perfect, or cold. Every element carries the weight of age and the tenderness of remembrance.
- Edges are softened, corners are rounded, and nothing is crisp. Memories do not have hard edges — they fade.

## Core Material Recipes

### 1) Aged Paper Surface

The foundational background: yellowed, textured old paper.

- Background: `bg-[#f5edd0]` (warm yellowed paper).
- Crease texture: SVG `feTurbulence baseFrequency="0.04" numOctaves="4"` at `opacity-[0.08]` with `mix-blend-mode: multiply`.
- Foxing spots: scattered `absolute` positioned `div` elements with `bg-[#d4c4a0]/30 rounded-full blur-[2px]` at random positions simulating age spots.
- The surface should feel like a page turned many times, handled with care but bearing the marks of years.

### 2) Faded Photograph Card

A photograph that has lost its vibrancy to time — desaturated, warm-shifted, slightly yellowed.

```css
.faded-photograph {
  filter: sepia(0.35) saturate(0.6) brightness(1.05) contrast(0.9);
  border: 6px solid #f0e8d0;
  box-shadow: 0 4px 16px rgba(90, 74, 58, 0.25);
  border-radius: 2px;
}
```

Tailwind approximate:
- `sepia-[0.35] saturate-[0.6] brightness-[1.05] contrast-[0.9] border-[6px] border-[#f0e8d0] shadow-[0_4px_16px_rgba(90,74,58,0.25)] rounded-[2px]`.

The border simulates the white (now yellowed) border of old printed photographs. The filter combination produces the characteristic desaturation and warmth of photographs stored in albums.

### 3) Vintage Filter Overlay

A full-spectrum overlay combining sepia tone, film grain, and color shift — applied on top of any image to age it.

- Sepia layer: `absolute inset-0 bg-[#c4a878]/10 mix-blend-multiply`.
- Grain layer: SVG `feTurbulence baseFrequency="0.7" numOctaves="3"` at `opacity-[0.12]` with `mix-blend-mode: overlay`.
- Color fade layer: `absolute inset-0 bg-gradient-to-br from-[#c4a878]/5 via-transparent to-[#5a4a3a]/10`.
- Combined: the image beneath appears as though it was developed decades ago on expired film.

### 4) Polaroid Frame

The iconic instant photograph frame: thick white (aged to cream) border, wider at the bottom, with optional handwritten caption.

- Container: `bg-[#f0e8d0] p-3 pb-12 shadow-[0_3px_12px_rgba(90,74,58,0.3)] rounded-[2px] rotate-[-1deg]`.
- Image slot: `w-full aspect-square object-cover sepia-[0.2] saturate-[0.7] brightness-[1.02]`.
- Caption area: `absolute bottom-3 left-0 right-0 text-center font-['Caveat'] text-[#5a4a3a] text-lg`.
- Optional rotation: `rotate-[-1deg]` to `rotate-[2deg]` for a casually placed look.
- Multiple Polaroids: stagger with varying rotations and slight offsets, as though scattered on a table.

### 5) Handwritten Note

Cursive text on lined paper, simulating a personal letter or journal entry.

- Paper: `bg-[#faf4e0] bg-[url('data:image/svg+xml,...')] p-6` with horizontal ruled lines.
- Ruled lines: repeating `linear-gradient(transparent, transparent 27px, #d4c4a0 27px, #d4c4a0 28px)`.
- Left margin line: `border-l-2 border-[#c4a0a0]/40 ml-4 pl-4`.
- Text: `font-['Caveat'] text-[#4a3a2a] text-xl leading-[28px]`.
- Ink effect: `text-[#3a2a1a]` with slight `opacity-[0.85]` — faded ink is never fully black.

### 6) Memory Vignette

Dark edges fading toward a brighter center, framing content as though viewed through a nostalgic lens.

- Container: `relative overflow-hidden`.
- Vignette overlay: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(58,42,26,0.5)_100%)] pointer-events-none`.
- Stronger vignette: increase center darkness with `rgba(58,42,26,0.7)`.
- The vignette draws the eye inward and creates the feeling of looking at something precious through aged optics.

### 7) Keepsake Box

An ornate storage container with velvet lining and aged wood or leather exterior.

- Outer shell: `bg-[#5a3a2a] rounded-lg shadow-[0_8px_32px_rgba(42,26,14,0.4)] border border-[#8a6a4a]/30`.
- Inner lining: `bg-[#6a2a3a]/80 p-6 rounded-md` (deep velvet red).
- Clasp detail: small `div` with `bg-[#c4a878] rounded-sm` simulating a brass latch.
- Interior shadow: `shadow-[inset_0_4px_16px_rgba(0,0,0,0.3)]` for depth.
- The box feels like something found in a grandmother's attic — heavy, ornate, and full of stories.

### 8) Vintage Stamp and Postmark

Decorative postal elements that add authenticity to nostalgic layouts.

- Stamp border: `border-2 border-dashed border-[#8a6a4a]/40 p-1 bg-[#faf4e0]`.
- Postmark circle: SVG circle with rotating text and a date stamp.
- Ink color: `text-[#6a2a3a]` (faded postal red).
- These elements ground the design in the physical world of letters and packages.

## Color Palette System

### Core Nostalgic Memory Palette

| Color | Hex | Role |
|---|---|---|
| Sepia Warm | `#c4a878` | Primary warm tone, vintage overlay |
| Paper Aged | `#e8d8b0` | Aged paper surface, card backgrounds |
| Ink Faded | `#5a4a3a` | Body text, outlines, handwritten ink |
| Photo Border | `#f0e8d0` | Photograph frame borders, Polaroid edges |
| Vignette Dark | `#3a2a1a` | Vignette edges, deep shadows, text |
| Memory Warm | `#d4b888` | Warm highlights, golden accents |
| Keepsake Velvet | `#6a2a3a` | Deep accent, lining color, postal stamps |
| Faded Rose | `#c49a8a` | Faded color in photographs, gentle accent |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Foxed Cream | `#f5edd0` | Base paper, lightest surface |
| Lined Paper | `#faf4e0` | Handwritten note paper |
| Brass Detail | `#c4a060` | Metal accents, clasps, buckles |
| Aged Leather | `#5a3a2a` | Dark surfaces, covers, binding |
| Ink Blue | `#3a4a5a` | Alternate ink, fountain pen marks |
| Torn Edge | `#e0d4b8` | Torn paper edge effect |
| Coffee Stain | `#b8946a` | Stain accents, age marks |
| Dusted White | `#f0ece0` | Muted highlights, not pure white |

Rules: Colors are ALWAYS desaturated and warm-shifted. No element should appear as though it was just manufactured — everything carries the patina of age. The warmest colors belong to the most prominent elements. Dark colors are never pure black; light colors are never pure white. Every hue has been filtered through time.

## Typography Recommendations

Nostalgic memory typography is personal, analog, and warm — as though every word was written by hand or typed on an old machine:

- **Handwritten primary:** Caveat, Dancing Script, or Parisienne (personal, intimate, as though writing in a journal).
- **Typewriter accent:** Special Elite or Courier Prime (the mechanical rhythm of old correspondence).
- **Serif display:** Playfair Display, Lora, or EB Garamond (elegant vintage headings).
- **Body text:** Lora or Crimson Text (warm, readable, book-like).
- **Label text:** `font-serif text-[#5a4a3a]` with `opacity-[0.8]` (faded labels on old boxes).
- **Script for captions:** Dancing Script or Parisienne on Polaroid frames and photo captions.
- Avoid cold sans-serif, geometric typefaces, or monospace. Nostalgia is warm, personal, and imperfect.

## Component Architecture Pattern

1. Aged paper background with foxing spots and crease texture.
2. Faded photograph cards with sepia filter and aged borders.
3. Memory vignette framing important content sections.
4. Handwritten notes on lined paper for personal messages.
5. Polaroid frames for featured images with handwritten captions.
6. Vintage stamp and postmark decorative accents.
7. Keepsake box containers for collections of memories.
8. Warm serif and cursive typography throughout.
9. Film grain overlays on all photographic elements.
10. Torn paper edges and coffee stain marks for organic authenticity.

## Interaction Rules

- Default state: faded, warm, still — like a photograph sitting on a shelf.
- Hover: slight warmth increase (memory brightens momentarily).
  - `hover:sepia-[0.25] hover:saturate-[0.7] transition-all duration-700`.
- Active: `active:scale-[0.98] active:shadow-[0_2px_8px_rgba(90,74,58,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a878]/40 focus:ring-offset-2 focus:ring-offset-[#f5edd0]`.
- Transitions: `transition-all duration-700 ease-in-out` (slow, contemplative — memories do not rush).
- Animations: gentle fade-in from sepia, slow vignette breathing, subtle paper flutter.
- Loading states: content fading in from complete sepia to slight desaturation, as though a photograph developing in a darkroom.

## Reusable Tailwind Tokens

- Aged paper bg: `bg-[#f5edd0]` with SVG crease grain overlay.
- Photo card: `sepia-[0.35] saturate-[0.6] brightness-[1.05] contrast-[0.9] border-[6px] border-[#f0e8d0] shadow-[0_4px_16px_rgba(90,74,58,0.25)] rounded-[2px]`.
- Polaroid frame: `bg-[#f0e8d0] p-3 pb-12 shadow-[0_3px_12px_rgba(90,74,58,0.3)] rounded-[2px]`.
- Handwritten text: `font-['Caveat'] text-[#4a3a2a] text-xl`.
- Typewriter text: `font-['Special_Elite'] text-[#3a2a1a] text-base`.
- Vignette overlay: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(58,42,26,0.5)_100%)] pointer-events-none`.
- Keepsake shell: `bg-[#5a3a2a] rounded-lg shadow-[0_8px_32px_rgba(42,26,14,0.4)]`.
- Velvet lining: `bg-[#6a2a3a]/80 shadow-[inset_0_4px_16px_rgba(0,0,0,0.3)]`.
- Film grain: SVG `feTurbulence baseFrequency="0.7" numOctaves="3"` at `opacity-[0.12]`.
- Lined paper: repeating `linear-gradient(transparent 27px, #d4c4a0 27px)`.

## Quality Checklist (must pass)

- Sepia or warm tone shift is present on all photographic elements.
- Film grain texture is visible on at least one surface or overlay.
- Paper texture (aged, yellowed, creased) is the background — never pure white.
- Vignette effect frames at least one major content section.
- Typography includes at least one handwritten or typewriter element.
- Photograph borders are aged cream (`#f0e8d0`), never pure white.
- Colors are desaturated and warm — no cold or fully saturated hues.
- At least one decorative vintage element (stamp, postmark, torn edge, coffee stain).
- Transitions are slow and contemplative (500ms+), not fast or mechanical.
- The overall feeling is bittersweet and warm, not sterile or clinical.
- No element looks freshly manufactured — everything carries age and wear.

## Anti-Patterns

- Sharp, crisp, modern-looking elements (nostalgic memory is soft and aged).
- Pure white or pure black anywhere in the palette (everything is shifted warm).
- Fast, snappy animations (memories are slow, contemplative, unhurried).
- Cold or cool color tones (the palette is exclusively warm).
- Fully saturated, vibrant colors (everything is desaturated and muted).
- Perfect geometric shapes with no texture (everything shows wear and age).
- Sans-serif or monospace typography (nostalgia demands serif, cursive, or typewriter).
- Missing grain, texture, or paper effect (age must be visible on surfaces).
- Hard-edged vignettes with abrupt transitions (vignettes fade gradually).
- Digital-looking gradients or metallic effects (keep it analog and handmade).
- Missing handwritten or personal elements (nostalgia requires a human touch).
- Cold, detached UI chrome (every element should feel touched by hands).

## Accessibility Considerations

- Desaturated colors can reduce contrast; verify WCAG AA carefully against aged paper backgrounds.
- Dark brown text (`#5a4a3a` or `#3a2a1a`) on aged paper (`#f5edd0`) provides good contrast.
- Vignette overlays can obscure content at edges — keep critical content centered and clear of vignette darkening.
- Focus states: `focus:ring-2 focus:ring-[#c4a878]/40` (warm sepia ring on aged paper) — must be clearly visible against the warm palette.
- Handwritten fonts may reduce readability for some users — always provide a legible fallback.
- Film grain and paper texture must not reduce text contrast below WCAG AA.
- Decorative vintage elements (stamps, postmarks, torn edges) must be `aria-hidden="true"`.
- Slow animations must respect `prefers-reduced-motion`.
- The nostalgic aesthetic should not compromise structural clarity — users must still identify interactive elements clearly despite the aged styling.
- Color should not be the sole indicator of state — combine with shape or text changes for state differentiation.
