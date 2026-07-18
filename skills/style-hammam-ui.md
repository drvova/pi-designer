---
name: hammam-ui
description: Build hammam UI components (steamy marble surfaces, geometric Islamic tile patterns, warm humid atmosphere, copper basin accents, star-shaped skylight rays, massage slab textures, eucalyptus mist, ritual cleansing warmth) with marble veined surfaces, geometric tile borders, and the purifying steam ritual of the Ottoman bathhouse. Trigger this skill when the user asks for hammam design, Turkish bath UI, marble bathhouse aesthetic, Islamic geometric tiles, steam room interface, spa ritual design, copper basin styling, or Ottoman bathhouse components.
---

# Hammam UI

Use this skill to design and implement luxurious, atmospheric interfaces styled as an Ottoman hammam: veined white marble surfaces, Islamic geometric tile border patterns, warm amber interior glow, copper basin accents, star-shaped skylight light rays, and the purifying steam ritual of the traditional Turkish bathhouse.

## Non-Negotiable Foundations

- The primary surface is veined marble: warm off-white (`#f0ead0`) with subtle grey-green vein lines running through it, never flat solid color.
- Islamic geometric patterns form border decorations, dividers, and section frames — 8-pointed star tessellations and interlocking geometric lattices, never floral or organic curves.
- Copper is the accent metal: rounded hammered copper (`#b87333`) for buttons, highlights, divider caps, and decorative basins — never gold, silver, or chrome.
- A warm amber glow (`#ff8c30` at low opacity) suffuses the entire interface like light filtering through a hammam dome.
- Steam and mist are present as soft white-translucent blur overlays that create depth and atmosphere.
- Star-shaped skylight light rays emanate from focal points, creating radial light beams across surfaces.
- The mood is warm, humid, purifying, and ritualistic — like stepping into a centuries-old bathhouse.
- Typography is elegant and refined — geometric or humanist serifs with generous letter-spacing, never playful or casual.

## Core Material Recipes

### 1) Veined Marble Surface

The foundational marble surface with grey-green vein lines.

- `bg-[#f0ead0]` base with an SVG turbulence overlay creating organic vein patterns.
- Veins are thin, branching paths in marble vein `#8a8a7a` at low opacity.
- Layer two or three vein SVG paths at different angles for natural marble complexity.

```html
<div class="relative bg-[#f0ead0]">
  <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none" viewBox="0 0 400 400">
    <path d="M0,80 Q100,60 200,90 T400,70" fill="none" stroke="#8a8a7a" stroke-width="1.5" opacity="0.6"/>
    <path d="M0,200 Q120,180 240,210 T400,190" fill="none" stroke="#8a8a7a" stroke-width="2" opacity="0.5"/>
    <path d="M0,320 Q80,300 180,330 T400,310" fill="none" stroke="#8a8a7a" stroke-width="1" opacity="0.4"/>
    <path d="M50,0 Q70,100 40,200 T60,400" fill="none" stroke="#8a8a7a" stroke-width="1.5" opacity="0.5"/>
    <path d="M250,0 Q230,120 270,240 T250,400" fill="none" stroke="#8a8a7a" stroke-width="1" opacity="0.4"/>
  </svg>
  <div class="relative z-10 p-8">Content on marble surface</div>
</div>
```

### 2) Islamic Geometric Tile Border

An 8-pointed star tessellation border pattern for cards and sections.

- Use a repeating SVG pattern of interlocking 8-pointed stars (Khatam-style).
- Border color: tile teal `#1a6a6a` with tile gold `#c4a043` accents at star intersections.
- Applied as a top and bottom frame around content blocks.

```html
<div class="relative">
  <!-- Top tile border -->
  <svg viewBox="0 0 400 24" class="w-full h-6" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="star8" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="#1a6a6a" stroke-width="1.5">
          <path d="M20,2 L24,8 L30,6 L28,12 L34,16 L28,18 L30,24 L24,22 L20,28 L16,22 L10,24 L12,18 L6,16 L12,12 L10,6 L16,8 Z" transform="scale(0.8) translate(5,-1)"/>
          <path d="M0,12 L40,12" stroke="#c4a043" stroke-width="0.5" opacity="0.5"/>
        </g>
      </pattern>
    </defs>
    <rect width="400" height="24" fill="url(#star8)"/>
  </svg>
  <div class="bg-[#f0ead0] p-6">Content framed by tile borders</div>
  <!-- Bottom tile border (mirrored) -->
  <svg viewBox="0 0 400 24" class="w-full h-6 rotate-180" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="24" fill="url(#star8)"/>
  </svg>
</div>
```

### 3) Copper Basin Accent

A round hammered copper decorative element resembling a hammam basin.

- `w-16 h-16 rounded-full bg-gradient-to-br from-[#d49a5a] via-[#b87333] to-[#8a5520]` (radial copper gradient with depth).
- Hammered texture: SVG turbulence overlay at low opacity for a dimpled metal surface.
- Inner shadow ring for basin rim depth.

```html
<div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#d49a5a] via-[#b87333] to-[#8a5520] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]">
  <svg class="absolute inset-0 w-full h-full rounded-full opacity-20 pointer-events-none">
    <filter id="hammer"><feTurbulence baseFrequency="0.4" numOctaves="2"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"/></filter>
    <rect width="100%" height="100%" filter="url(#hammer)"/>
  </svg>
  <span class="relative z-10 text-[#f0ead0] text-xs font-serif tracking-widest">BASIN</span>
</div>
```

### 4) Star-Shaped Skylight Rays

Radial light beams emanating from a central focal point, simulating a hammam dome skylight.

```html
<div class="absolute inset-0 pointer-events-none overflow-hidden">
  <svg class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-20" viewBox="0 0 200 200">
    <defs>
      <radialGradient id="skylight" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stop-color="#ff8c30" stop-opacity="0.4"/>
        <stop offset="40%" stop-color="#fdd835" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#f0ead0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- 8 light rays from top-center -->
    <g fill="url(#skylight)">
      <polygon points="100,0 85,200 115,200"/>
      <polygon points="100,0 50,200 70,200" opacity="0.5"/>
      <polygon points="100,0 130,200 150,200" opacity="0.5"/>
      <polygon points="100,0 20,200 40,200" opacity="0.3"/>
      <polygon points="100,0 160,200 180,200" opacity="0.3"/>
    </g>
  </svg>
</div>
```

### 5) Steam and Mist Overlay

A soft white-translucent blur that creates depth and humid atmosphere.

- `absolute inset-0 bg-white/8 backdrop-blur-[2px] pointer-events-none` (general mist layer).
- Localized steam wisps: `absolute w-32 h-32 bg-white/12 blur-[30px] rounded-full` positioned at edges.

```html
<!-- Full-surface mist -->
<div class="absolute inset-0 bg-white/8 backdrop-blur-[2px] pointer-events-none"></div>
<!-- Steam wisps at edges -->
<div class="absolute top-4 left-1/4 w-40 h-40 bg-white/12 blur-[30px] rounded-full pointer-events-none"></div>
<div class="absolute bottom-8 right-1/3 w-32 h-32 bg-white/10 blur-[25px] rounded-full pointer-events-none"></div>
```

### 6) Warm Amber Glow

A suffusing warm light overlay that gives the entire interface a bathhouse interior feel.

- `absolute inset-0 bg-[#ff8c30]/5 pointer-events-none` (base amber wash across the page).
- Section-level glow: `bg-gradient-to-b from-[#ff8c30]/8 to-transparent` at the top of content areas (light from above, like dome light).

```html
<div class="absolute inset-0 bg-gradient-to-b from-[#ff8c30]/8 via-[#ff8c30]/3 to-transparent pointer-events-none"></div>
```

### 7) Hammam Card

A card combining marble surface, tile border, and copper accents.

```html
<div class="relative bg-[#f0ead0] overflow-hidden">
  <!-- Marble veins -->
  <svg class="absolute inset-0 w-full h-full opacity-25 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M0,30 Q30,20 60,35 T100,25" fill="none" stroke="#8a8a7a" stroke-width="0.5"/>
    <path d="M0,70 Q40,60 70,75 T100,65" fill="none" stroke="#8a8a7a" stroke-width="0.8"/>
  </svg>
  <!-- Top tile border -->
  <div class="h-2 bg-[#1a6a6a] flex items-center justify-center gap-1 py-0">
    <svg viewBox="0 0 200 8" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <pattern id="hammam-tile" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
        <path d="M10,1 L12,4 L15,3 L14,6 L17,7 L14,7.5 L15,10 L12,9 L10,12 L8,9 L5,10 L6,7.5 L3,7 L6,6 L5,3 L8,4 Z" fill="none" stroke="#c4a043" stroke-width="0.5" opacity="0.8" transform="scale(0.6)"/>
      </pattern>
      <rect width="200" height="8" fill="url(#hammam-tile)"/>
    </svg>
  </div>
  <!-- Content -->
  <div class="relative z-10 p-6">
    <h3 class="font-serif text-xl text-[#1a6a6a] tracking-wide">Hammam Card</h3>
    <p class="font-serif text-sm text-[#5a5a4a] mt-2 leading-relaxed">Marble surface, geometric tile border, warm amber glow.</p>
  </div>
  <!-- Copper corner accent -->
  <div class="absolute bottom-0 right-0 w-4 h-4 rounded-tl-full bg-gradient-to-tl from-[#b87333] to-[#d49a5a]"></div>
</div>
```

### 8) Copper Button

A button styled as hammered copper with warm amber glow.

```html
<button class="relative bg-gradient-to-br from-[#d49a5a] via-[#b87333] to-[#8a5520] text-[#f0ead0] font-serif tracking-widest text-sm uppercase px-8 py-3 rounded-full shadow-[0_4px_12px_rgba(184,115,51,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_20px_rgba(184,115,51,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition-all duration-300">
  Enter the Hammam
</button>
```

## Color Palette System

### Core Hammam Palette

| Color | Hex | Role |
|---|---|---|
| Marble White | `#f0ead0` | Primary surface (warm veined marble) |
| Marble Vein | `#8a8a7a` | Vein lines, subtle texture, secondary text |
| Copper | `#b87333` | Accent metal, buttons, highlights, decorative basins |
| Copper Light | `#d49a5a` | Copper highlight (gradient top, rim light) |
| Copper Dark | `#8a5520` | Copper shadow (gradient bottom, depth) |
| Tile Teal | `#1a6a6a` | Geometric borders, headings, primary accent |
| Tile Gold | `#c4a043` | Star intersection accents, decorative details |
| Warm Amber | `#ff8c30` | Ambient glow, skylight rays, atmosphere |
| Steam White | `rgba(255,255,255,0.08)` | Mist overlay, depth, humidity |
| Deep Charcoal | `#2a2a20` | High-contrast text on marble (when needed) |

Rules: Surfaces are always marble white `#f0ead0`, never pure white or cool grey. Accents are always copper `#b87333`, never gold or silver. Geometric patterns use teal `#1a6a6a` with gold `#c4a043` details. The warm amber glow `#ff8c30` is always present at low opacity as ambient atmosphere. The palette should feel like warm stone, heated copper, and steam in a candlelit dome.

## Typography Recommendations

Hammam typography is elegant, refined, and geometrically inspired:

- **Display headings:** Cormorant Garamond, Playfair Display, or Marcellus (elegant high-contrast serif).
- **Body:** Lora, EB Garamond, or Crimson Text (warm readable serif for ritual text).
- **Alternative:** Amiri or Scheherazade New (Arabic-influenced serif for authentic Ottoman feel).
- **Labels:** `font-serif text-xs uppercase tracking-[0.2em]` (spaced-out copper-engraved labels).
- **Numbers/data:** Cormorant or Marcellus for elegant numerical displays.
- The KEY is that all text should feel ENGRAVED or CHISELED into marble — elegant, spaced, and refined, never casual or playful.

## Component Architecture Pattern

1. Marble white background (`#f0ead0`) with SVG vein overlay and paper-grain-equivalent texture.
2. Warm amber glow gradient at the top of the page (light from the dome above).
3. Islamic geometric tile borders (8-pointed star patterns) framing cards and sections.
4. Elegant serif typography in tile teal `#1a6a6a` for headings and marble vein `#8a8a7a` for secondary text.
5. Copper accent elements: hammered copper buttons, basin decorations, corner caps.
6. Star-shaped skylight light rays as atmospheric background decoration.
7. Steam and mist overlay layers creating depth and humid atmosphere.
8. Copper divider lines with geometric star caps between content sections.

## Interaction Rules

- Default state: warm, calm, luxurious, steamy.
- Hover: copper elements warm and brighten (glow intensifies, like heated metal).
  - `hover:shadow-[0_6px_20px_rgba(184,115,51,0.5)] hover:scale-[1.03] transition-all duration-300`.
- Active: `active:scale-[0.98]` (gentle press into warm stone).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#b87333]/50 focus:ring-offset-2 focus:ring-offset-[#f0ead0]`.
- Transitions: `transition-all duration-300` (slow, deliberate, ritualistic — never rushed).
- Cards: subtle marble vein shift on hover (veins become slightly more visible, like steam clearing).
  - `hover:opacity-35` on the vein SVG overlay.

## Reusable Tailwind Tokens

- Marble surface: `bg-[#f0ead0]` with SVG vein paths in `#8a8a7a` at `opacity-25`.
- Tile border: SVG pattern with `stroke="#1a6a6a"` `stroke-width="1.5"` and `#c4a043` accents.
- Copper accent: `bg-gradient-to-br from-[#d49a5a] via-[#b87333] to-[#8a5520]`.
- Copper button: `rounded-full text-[#f0ead0] font-serif tracking-widest shadow-[0_4px_12px_rgba(184,115,51,0.3)]`.
- Amber glow: `bg-gradient-to-b from-[#ff8c30]/8 to-transparent`.
- Steam mist: `bg-white/8 backdrop-blur-[2px]`.
- Skylight rays: SVG radial gradient `#ff8c30` at `opacity-20`.
- Headings: `font-serif text-[#1a6a6a] tracking-wide`.
- Engraved labels: `font-serif text-xs uppercase tracking-[0.2em] text-[#b87333]`.

## Quality Checklist (must pass)

- Background is marble white (`#f0ead0`) with visible grey-green vein SVG overlay.
- Islamic geometric tile borders (8-pointed star patterns) are present on cards and sections.
- Copper accents (`#b87333`) are used for buttons, highlights, and decorative elements.
- Warm amber glow (`#ff8c30` at low opacity) suffuses the interface from above.
- Steam/mist overlay present as soft white blur creating atmospheric depth.
- Star-shaped skylight rays present as radial light decoration.
- Typography uses elegant serif fonts (Cormorant, Playfair, Marcellus, Amiri).
- Vein lines branch organically, never as straight parallel lines.
- Copper elements have depth (gradient from light to dark, inner shadow for hammered texture).
- The aesthetic reads as an Ottoman bathhouse interior with warm, humid, ritualistic atmosphere.

## Anti-Patterns

- Pure white (`#ffffff`) or cool grey backgrounds (marble is warm off-white `#f0ead0`).
- Straight parallel vein lines (marble veins branch and flow organically).
- Gold, silver, or chrome accents (the accent metal is copper `#b87333`, always).
- Floral or organic decorative patterns (use Islamic geometric tessellations only).
- Bright, cold, or clinical lighting (the atmosphere is warm amber glow, not fluorescent).
- Missing steam/mist overlay (the humid atmosphere is essential to the hammam feel).
- Casual or playful typography (use elegant refined serifs, never handwritten or rounded).
- Flat copper without gradient or texture (copper must have depth and hammered dimples).
- Missing skylight rays (the dome light is a defining hammam architectural feature).
- Sharp square corners on copper elements (copper basins and buttons are rounded/hammered).
- Rushed transitions (interactions should feel deliberate and ritualistic, `duration-300`).
- Missing warm amber glow (the entire interface should feel lit by warm candle/dome light).

## Accessibility Considerations

- Tile teal `#1a6a6a` headings on marble white `#f0ead0` provide strong contrast (WCAG AA+).
- Copper `#b87333` text on marble white may fail contrast at small sizes — use only for large labels or increase to `#8a5520` (copper dark) for body text.
- Marble vein `#8a8a7a` on marble white `#f0ead0` is decorative — never use for critical text content.
- Copper buttons with `#f0ead0` text must be verified for contrast — the gradient midpoint `#b87333` against `#f0ead0` passes at 18px+ (large text).
- Steam and mist overlays must not reduce text contrast — keep `bg-white/8` or lower.
- Focus states: `focus:ring-2 focus:ring-[#b87333]/50` (visible copper ring on marble).
- Decorative SVG tiles, veins, and skylight rays must be `aria-hidden="true"`.
- Geometric pattern color must not be the sole categorization method (include text labels).
- Warm amber glow overlays must not wash out content — keep at `opacity-5` to `opacity-8`.
- Respect `prefers-reduced-motion`: disable scale and glow transitions when set.
- Elegant serif fonts at small sizes can reduce readability — use 14px+ for body text and 16px+ for secondary content.
- Ensure that steam/mist blur does not create a vestibular trigger for motion-sensitive users (use static blur, not animated).
