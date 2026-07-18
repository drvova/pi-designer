---
name: batik-wax-resist-ui
description: Build batik wax resist UI components (crackle pattern, wax stamped design, dye bath gradient, tjanting tool line, canting dot, cloth drape, parang motif) with wax resist textures, crackled dye patterns, and the traditional Indonesian craft of batik. Trigger this skill when the user asks for batik, wax resist, Indonesian textile, Javanese design, tjanting, canting, parang motif, crackle pattern, dye bath, cloth drape, or traditional Southeast Asian craft interfaces.
---

# Batik Wax Resist UI

Use this skill to design and implement interfaces inspired by Indonesian batik: wax resist crackle patterns, copper stamp (cap) geometric designs, dye bath color gradients, tjanting tool fine lines, canting dot textures, cloth draped surfaces, and the parang knife motif. Every design decision references the traditional wax-resist dyeing process — wax applied, dye soaked, wax removed, cracks reveal character.

## Non-Negotiable Foundations

1. **Crackle pattern is the primary visual signal.** Fine dark crack lines from wax breaking during dyeing are the signature batik texture. Every major surface must show subtle crackle.
2. **Dye bath gradients define the color language.** Colors emerge from the resist process — they are not applied flat but layered through immersion. Gradients suggest depth of dye penetration.
3. **Wax stamped geometry provides the structured motif.** Copper stamp (cap) patterns are repeating geometric or floral designs. They appear as background patterns and decorative elements.
4. **Tjanting tool lines are the fine detail language.** Thin hand-drawn wax lines create intricate borders and patterns. They are delicate, slightly irregular, and organic.
5. **Canting dots are the texture accent.** Small wax dots applied by hand create stippled texture surfaces. They appear in transitions and decorative fills.
6. **Cloth drape is the surface feel.** Every panel, card, and surface should suggest draped cotton fabric — soft folds, matte finish, textile weight. Never glossy, never rigid.
7. **Parang motif is the structural accent.** Diagonal curved parallel lines (the knife-edge pattern) provide dynamic movement and traditional Javanese identity.
8. **Typography is handcrafted and grounded.** Warm serif or semi-serif faces with slight irregularity. This is artisan craft, not industrial precision.
9. **Cultural respect is mandatory.** Batik is UNESCO Intangible Cultural Heritage of Indonesia. Treat it with the same gravity as any sacred craft tradition.
10. **Process reveals beauty through imperfection.** Crackle lines, slightly uneven stamp impressions, and organic tjanting lines are features, not flaws. Embrace the handmade quality.

## Core Material Recipes

### 1) Crackle Pattern Overlay

Fine dark crack lines from wax breaking during the dye process — the signature batik texture.

- SVG-based crackle network:

```html
<svg viewBox="0 0 300 300" class="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="none">
  <g stroke="#2a2a2a" stroke-width="0.5" fill="none" opacity="0.6">
    <path d="M10,5 L25,30 L15,65 L35,100 L20,140 L45,180 L30,220 L50,260 L35,300" />
    <path d="M80,0 L95,40 L85,80 L100,120 L90,160 L110,200 L95,240 L115,280 L100,300" />
    <path d="M150,10 L165,45 L155,85 L175,125 L160,165 L180,205 L165,250 L185,290" />
    <path d="M220,0 L235,35 L225,75 L240,115 L230,155 L250,195 L235,235 L255,275 L240,300" />
    <path d="M5,80 L40,85 L75,75 L110,90 L145,80 L180,95 L215,85 L250,90 L285,80" />
    <path d="M0,160 L35,155 L70,165 L105,150 L140,160 L175,145 L210,155 L245,150 L280,160" />
    <path d="M15,240 L50,245 L85,235 L120,250 L155,240 L190,255 L225,245 L260,250 L300,240" />
    <!-- Secondary finer cracks -->
    <path d="M45,15 L60,50 L50,90 L70,130" stroke-width="0.3" opacity="0.4" />
    <path d="M125,25 L140,55 L130,95 L150,135 L140,175" stroke-width="0.3" opacity="0.4" />
    <path d="M200,10 L215,45 L205,85 L220,120" stroke-width="0.3" opacity="0.4" />
    <path d="M60,170 L75,195 L65,225 L80,260" stroke-width="0.3" opacity="0.4" />
    <path d="M170,180 L185,210 L175,245 L195,280" stroke-width="0.3" opacity="0.4" />
  </g>
</svg>
```

- Alternative CSS-only crackle hint:
  ```
  bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.16 0 0 0 0 0.16 0 0 0 0 0.16 0 0 0 15 -7'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E")] opacity-[0.08] mix-blend-multiply
  ```

### 2) Wax Stamped Geometric Pattern

Copper stamp (cap) repeating motif — geometric or floral.

- Parang knife motif (diagonal curved parallel lines):

```
bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_18px,rgba(42,58,26,0.15)_18px,rgba(42,58,26,0.15)_20px)] bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,rgba(42,58,26,0.1)_18px,rgba(42,58,26,0.1)_20px)]
```

- Floral stamp motif:

```html
<svg viewBox="0 0 100 100" class="w-full h-full opacity-[0.06]" preserveAspectRatio="none">
  <defs>
    <pattern id="batik-floral" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      <!-- Four-petal flower -->
      <ellipse cx="25" cy="20" rx="8" ry="12" fill="#5a3a1a" transform="rotate(0,25,25)" />
      <ellipse cx="25" cy="20" rx="8" ry="12" fill="#5a3a1a" transform="rotate(90,25,25)" />
      <ellipse cx="25" cy="20" rx="8" ry="12" fill="#5a3a1a" transform="rotate(180,25,25)" />
      <ellipse cx="25" cy="20" rx="8" ry="12" fill="#5a3a1a" transform="rotate(270,25,25)" />
      <!-- Center dot -->
      <circle cx="25" cy="25" r="3" fill="#5a3a1a" />
      <!-- Corner dots -->
      <circle cx="0" cy="0" r="2" fill="#5a3a1a" />
      <circle cx="50" cy="0" r="2" fill="#5a3a1a" />
      <circle cx="0" cy="50" r="2" fill="#5a3a1a" />
      <circle cx="50" cy="50" r="2" fill="#5a3a1a" />
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#batik-floral)" />
</svg>
```

### 3) Dye Bath Gradient

Layered color from wax-resist immersion — not flat, but deep and varied.

- Indigo dye bath (primary):

```
bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/70
```

- Multi-dye layered gradient (soga brown over indigo):

```
bg-gradient-to-br from-[#1a2a4a] via-[#3a4a5a] to-[#5a3a1a]
```

- Soga brown dye bath:

```
bg-gradient-to-b from-[#5a3a1a] via-[#5a3a1a]/85 to-[#3a2a0a]
```

- The gradient should feel like color soaking into fabric — gradual, not sharp.

### 4) Tjanting Tool Line Border

Fine hand-drawn wax lines for borders and decorative accents.

```html
<svg viewBox="0 0 400 20" class="w-full h-5" fill="none">
  <!-- Primary tjanting line (slightly wavy) -->
  <path d="M0,10 C5,8 10,12 15,10 C20,8 25,12 30,10 C35,8 40,12 45,10 C50,8 55,12 60,10 C65,8 70,12 75,10 C80,8 85,12 90,10 C95,8 100,12 105,10 C110,8 115,12 120,10 C125,8 130,12 135,10 C140,8 145,12 150,10 C155,8 160,12 165,10 C170,8 175,12 180,10 C185,8 190,12 195,10 C200,8 205,12 210,10 C215,8 220,12 225,10 C230,8 235,12 240,10 C245,8 250,12 255,10 C260,8 265,12 270,10 C275,8 280,12 285,10 C290,8 295,12 300,10 C305,8 310,12 315,10 C320,8 325,12 330,10 C335,8 340,12 345,10 C350,8 355,12 360,10 C365,8 370,12 375,10 C380,8 385,12 390,10 C395,8 400,12 400,10" stroke="#5a3a1a" stroke-width="1" opacity="0.6" />
  <!-- Secondary parallel line -->
  <path d="M0,14 C8,12 16,16 24,14 C32,12 40,16 48,14 C56,12 64,16 72,14 C80,12 88,16 96,14 C104,12 112,16 120,14 C128,12 136,16 144,14 C152,12 160,16 168,14 C176,12 184,16 192,14 C200,12 208,16 216,14 C224,12 232,16 240,14 C248,12 256,16 264,14 C272,12 280,16 288,14 C296,12 304,16 312,14 C320,12 328,16 336,14 C344,12 352,16 360,14 C368,12 376,16 384,14 C392,12 400,16 400,14" stroke="#5a3a1a" stroke-width="0.5" opacity="0.4" />
</svg>
```

- The lines are intentionally slightly wavy — this is hand-drawn wax, not machine precision.
- Parallel lines suggest the tjanting tool being drawn across fabric twice.

### 5) Canting Dot Texture

Small hand-applied wax dots for stippled fill textures.

- CSS dot pattern (radial gradient):

```
bg-[radial-gradient(circle,#5a3a1a_1px,transparent_1px)] bg-[size:8px_8px] opacity-[0.08]
```

- Dense canting dots (heavier fill):

```
bg-[radial-gradient(circle,#5a3a1a_1px,transparent_1px)] bg-[size:6px_6px] opacity-[0.12]
```

### 6) Parang Knife Motif Pattern

Diagonal curved parallel lines — the classic Javanese batik motif.

- Curved diagonal lines:

```html
<svg viewBox="0 0 200 200" class="w-full h-full opacity-[0.1]" preserveAspectRatio="none">
  <defs>
    <pattern id="parang" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M0,20 Q10,15 20,20 Q30,25 40,20" fill="none" stroke="#5a3a1a" stroke-width="2" />
      <path d="M0,28 Q10,23 20,28 Q30,33 40,28" fill="none" stroke="#5a3a1a" stroke-width="1" opacity="0.5" />
    </pattern>
  </defs>
  <rect width="200" height="200" fill="url(#parang)" />
</svg>
```

- The parang motif has characteristic S-curved diagonal lines.
- Lines are thicker where the knife-edge pattern turns.

### 7) Batik Cloth Card

Card component with cloth drape feel, crackle overlay, and stamped motif.

```
class="bg-[#f5f0f0] rounded-sm overflow-hidden shadow-[0_2px_12px_rgba(42,42,42,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] relative"
```

- Top border: tjanting tool line SVG.
- Body: cloth white with subtle crackle overlay.
- Bottom: canting dot texture fade.

### 8) Dye Bath Hero Section

Full-width hero with indigo dye bath gradient and crackle overlay.

```
class="relative overflow-hidden bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/70 min-h-[500px] flex items-center"
```

- Background: indigo dye gradient.
- Overlay: crackle pattern at 8% opacity.
- Foreground: cloth white content cards.
- Bottom: wax cream transition gradient.

### 9) Wax Resist Navigation Bar

Navigation with wax stamped pattern and canting dot texture.

```
class="bg-[#5a3a1a] text-[#f0e8d0] py-4 px-6 bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_18px,rgba(240,232,208,0.05)_18px,rgba(240,232,208,0.05)_20px)] font-serif font-semibold uppercase tracking-widest text-sm"
```

### 10) Batik Button

Button styled as wax-resist dyed fabric.

```
class="bg-[#1a2a4a] text-[#f0e8d0] font-serif font-semibold uppercase tracking-wider px-8 py-3 border-2 border-[#5a3a1a] hover:bg-[#8a2a1a] hover:border-[#c4a043] transition-all duration-300 rounded-sm shadow-[2px_2px_0px_rgba(42,42,42,0.3)] hover:shadow-[1px_1px_0px_rgba(42,42,42,0.3)] hover:translate-x-[1px] hover:translate-y-[1px]"
```

- Color variants: `bg-[#5a3a1a]` (soga brown), `bg-[#8a2a1a]` (dye red), `bg-[#2a5a2a]` (dye green).
- Hover shifts to dye red, suggesting deeper dye immersion.
- Shadow offset reduces on hover, suggesting fabric pressing flat.

### 11) Wax Cream Surface Transition

Transition from dye bath dark to cloth white using wax resist color.

```
class="bg-gradient-to-b from-[#1a2a4a] via-[#5a3a1a]/30 to-[#f0e8d0]"
```

### 12) Crackle Divider

Section divider using crackle pattern.

```html
<div class="w-full h-8 relative overflow-hidden bg-[#f5f0f0]">
  <svg viewBox="0 0 400 32" class="w-full h-full" fill="none" stroke="#2a2a2a" stroke-width="0.5" opacity="0.2">
    <path d="M0,8 L15,12 L30,6 L50,14 L70,8 L90,16 L110,10 L130,18 L150,12 L170,6 L190,14 L210,8 L230,16 L250,10 L270,18 L290,12 L310,6 L330,14 L350,8 L370,16 L390,10 L400,12" />
    <path d="M0,22 L20,18 L40,24 L60,16 L80,22 L100,14 L120,20 L140,26 L160,18 L180,24 L200,16 L220,22 L240,14 L260,20 L280,26 L300,18 L320,24 L340,16 L360,22 L380,14 L400,20" />
  </svg>
</div>
```

### 13) Batik Border Frame

Card with wax-resist border treatment.

```
class="border-2 border-[#5a3a1a]/30 rounded-sm p-6 bg-[#f5f0f0] shadow-[inset_0_0_0_1px_rgba(90,58,26,0.1)] relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,#5a3a1a_1px,transparent_1px)] before:bg-[size:12px_12px] before:opacity-[0.04] before:pointer-events-none"
```

### 14) Cloth Drape Panel

Panel with fabric fold suggestion.

```
class="bg-[#f5f0f0] shadow-[0_2px_8px_rgba(42,42,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_3px_rgba(42,42,42,0.05)] relative"
```

- The inset shadows suggest fabric draping — light on top, shadow on bottom.
- Matte finish, no glossy reflections.

### 15) Soga Brown Accent Strip

Horizontal accent band in traditional soga brown.

```
class="w-full h-2 bg-gradient-to-r from-[#5a3a1a] via-[#5a3a1a]/80 to-[#5a3a1a]/40 opacity-70"
```

## Color Palette System (Batik Dye Process Colors)

| Color | Hex | Dye Process Role | Usage |
|---|---|---|---|
| Indigo Dye | `#1a2a4a` | Primary immersion dye — deepest color | Hero sections, dark panels, primary action |
| Soga Brown | `#5a3a1a` | Traditional Javanese bark dye — warm earth | Borders, accents, secondary actions, navigation |
| Wax Cream | `#f0e8d0` | Color of molten wax before dyeing | Backgrounds, text on dark, wax resist areas |
| Dye Red | `#8a2a1a` | Secondary immersion — deep madder | Alerts, warnings, bold accents, highlights |
| Dye Green | `#2a5a2a` | Tertiary immersion — indigo + yellow | Success states, nature references, secondary panels |
| Cloth White | `#f5f0f0` | Undyed cotton — the canvas | Card surfaces, body text areas, clean space |
| Crackle Dark | `#2a2a2a` | Wax-crack dye penetration — fine lines | Crackle patterns, borders, detail lines |
| Gold Accent | `#c4a043` | Metallic wax stamp impression | Emphasis, icons, decorative highlights |

**Palette Rules:**
- Indigo dye and soga brown are the dominant pair. They appear on most surfaces.
- Wax cream is used for text on dark and for undyed resist areas.
- Crackle dark appears only as fine pattern lines — never as a fill color.
- Gold accent is used sparingly for emphasis and decorative highlights.
- Cloth white is the default light surface. Never use pure white `#ffffff`.
- Dye red and dye green are accent colors for status and action variation.
- The palette should feel like a freshly unwaxed batik cloth — warm, organic, handcrafted.

## Typography Recommendations

- **Display:** EB Garamond, Crimson Pro (elegant serif with handcrafted warmth).
- **Body:** Lora, Crimson Text (warm readable serif with slight calligraphic feel).
- **Accent/Labels:** `font-serif font-semibold uppercase tracking-widest text-sm` (artisan stamp precision).
- **Monospace:** IBM Plex Mono (for technical content within craft context).

### Typography Rules
- All headings use a serif font with medium or heavier weight. No thin or light weights.
- Body text maintains warm, readable sizing (16px base minimum).
- Labels and navigation use uppercase tracking — evoking copper stamp impressions.
- Text on dark surfaces uses wax cream `#f0e8d0`. Text on light uses crackle dark `#2a2a2a`.
- Gold accent `#c4a043` is used for emphasis text only, never body text.

## Component Architecture Pattern

### Layout Hierarchy

```
Page Container (cloth white bg with cloth drape shadows)
  Header (soga brown bg with wax stamped pattern)
    Tjanting tool line divider
  Hero Section (indigo dye bath gradient + crackle overlay)
    Hero Card (cloth white + canting dot accent)
  Content Sections (alternating cloth white / wax cream)
    Crackle dividers between sections
  Footer (indigo dye + soga brown accents)
```

### Component Layering

```
Layer 1: Dye bath gradient (indigo or soga brown)
Layer 2: Wax stamped pattern (geometric motif at low opacity)
Layer 3: Crackle overlay (fine crack lines)
Layer 4: Cloth drape shadows (soft inset shadows)
Layer 5: Content (text, buttons, cards)
Layer 6: Tjanting tool lines and canting dots (fine detail)
```

### Card Component Standard

```html
<article class="bg-[#f5f0f0] rounded-sm overflow-hidden shadow-[0_2px_12px_rgba(42,42,42,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] relative">
  <!-- Tjanting line top border -->
  <svg viewBox="0 0 400 6" class="w-full h-1.5" fill="none">
    <path d="M0,3 C5,2 10,4 15,3 C20,2 25,4 30,3 C35,2 40,4 45,3 C50,2 55,4 60,3 C65,2 70,4 75,3 C80,2 85,4 90,3 C95,2 100,4 105,3 C110,2 115,4 120,3 C125,2 130,4 135,3 C140,2 145,4 150,3 C155,2 160,4 165,3 C170,2 175,4 180,3 C185,2 190,4 195,3 C200,2 205,4 210,3 C215,2 220,4 225,3 C230,2 235,4 240,3 C245,2 250,4 255,3 C260,2 265,4 270,3 C275,2 280,4 285,3 C290,2 295,4 300,3 C305,2 310,4 315,3 C320,2 325,4 330,3 C335,2 340,4 345,3 C350,2 355,4 360,3 C365,2 370,4 375,3 C380,2 385,4 390,3 C395,2 400,4 400,3" stroke="#5a3a1a" stroke-width="0.8" opacity="0.5" />
  </svg>
  <!-- Cloth white content area -->
  <div class="p-6 bg-[#f5f0f0]">
    <h3 class="font-serif font-semibold text-[#2a2a2a] text-lg">Card Title</h3>
    <p class="font-serif text-[#2a2a2a]/80 mt-2">Body text on cloth white.</p>
  </div>
  <!-- Canting dot fade at bottom -->
  <div class="h-8 bg-[radial-gradient(circle,#5a3a1a_1px,transparent_1px)] bg-[size:8px_8px] opacity-[0.04]"></div>
</article>
```

## Interaction Rules

### Transitions
- **Color transitions:** 300ms ease. Suggests dye seeping into fabric — gradual, not instant.
- **Crackle reveal:** 500ms ease-out with opacity fade. Crackle lines appear as wax cools and cracks.
- **Dye immersion:** 400ms ease-in. Background color deepens like fabric being dipped into dye bath.
- **Cloth settle:** 200ms ease. Cards and panels settle with subtle shadow shift, like fabric draping.

### Hover States
- Buttons shift from indigo to dye red (deeper dye immersion).
- Cards gain soga brown border glow: `shadow-[0_0_16px_rgba(90,58,26,0.2)]`.
- Links gain underline with soga brown color.
- Navigation items show canting dot texture intensification.

### Scroll Behaviors
- Crackle pattern overlay increases opacity as sections enter viewport (0.08 to 0.12).
- Tjanting tool lines draw on scroll-enter using IntersectionObserver stroke-dashoffset.
- Dye bath gradients shift subtly — deeper indigo as user scrolls down (dye saturation increases).
- Parang motif patterns rotate 1-2 degrees on scroll for organic movement.

### Focus States
- `focus:ring-4 focus:ring-[#c4a043]/40` (gold accent ring on dark backgrounds).
- `focus:ring-4 focus:ring-[#5a3a1a]/30 focus:ring-offset-2 focus:ring-offset-[#f5f0f0]` on cloth white surfaces.
- `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a2a4a]` on indigo surfaces.

### Loading States
- Crackle lines animate: path length extends from 0% to 100% over 1.5s (SVG stroke-dashoffset).
- Dye bath gradient pulses gently (opacity 0.7 to 1.0 over 2s).
- Canting dots appear one by one in a radial pattern (staggered animation).
- Tjanting line draws across the loading indicator width.

### Click/Active States
- Buttons depress: `translate-y-[1px] translate-x-[1px] shadow-[1px_1px_0px_rgba(42,42,42,0.3)]`.
- Cards press: `shadow-[inset_0_2px_4px_rgba(42,42,42,0.15)]` (fabric pressed down).
- Crackle intensity increases momentarily (opacity spike to 0.2).

## Reusable Tailwind Tokens

### Background Patterns
```
--crackle-overlay: opacity-[0.12] mix-blend-multiply (on dark) / opacity-[0.06] (on light)
--parang-motif: bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_18px,rgba(42,58,26,0.15)_18px,rgba(42,58,26,0.15)_20px)]
--canting-dots: bg-[radial-gradient(circle,#5a3a1a_1px,transparent_1px)] bg-[size:8px_8px]
--wax-stamped: bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_18px,rgba(90,58,26,0.1)_18px,rgba(90,58,26,0.1)_20px)]
```

### Surface Tokens
```
--cloth-white: bg-[#f5f0f0] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_3px_rgba(42,42,42,0.05)]
--wax-cream: bg-[#f0e8d0]
--indigo-dye: bg-gradient-to-b from-[#1a2a4a] via-[#1a2a4a]/90 to-[#1a2a4a]/70
--soga-brown: bg-[#5a3a1a]
```

### Border Tokens
```
--tjanting-border: border-b border-[#5a3a1a]/30
--crackle-border: border border-[#2a2a2a]/10
--batik-frame: border-2 border-[#5a3a1a]/30 rounded-sm
```

### Text Tokens
```
--text-primary: text-[#2a2a2a] (on cloth white)
--text-on-dark: text-[#f0e8d0] (on indigo dye)
--text-accent: text-[#c4a043] (gold emphasis)
--text-muted: text-[#5a3a1a]/60 (soga brown muted)
```

### Shadow Tokens
```
--cloth-soft: shadow-[0_2px_12px_rgba(42,42,42,0.1)]
--cloth-embossed: shadow-[0_2px_8px_rgba(42,42,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]
--cloth-pressed: shadow-[inset_0_2px_4px_rgba(42,42,42,0.15)]
--wax-glow: shadow-[0_0_16px_rgba(90,58,26,0.2)]
```

### Animation Tokens
```
--transition-dye: transition-all duration-300 ease
--transition-crackle: transition-all duration-500 ease-out
--transition-cloth: transition-all duration-200 ease
```

## Quality Checklist

### Pattern Presence
- At least one crackle pattern (fine dark crack lines) is visible on a surface.
- Wax stamped geometric pattern appears on at least one background or element.
- Tjanting tool lines or canting dots appear as decorative elements.
- Parang motif is referenced somewhere in the design (card border, background, accent).

### Color Compliance
- Indigo dye `#1a2a4a` and soga brown `#5a3a1a` are the dominant color pair.
- Cloth white `#f5f0f0` is the default light surface.
- Wax cream `#f0e8d0` is used for text on dark and for accent backgrounds.
- Crackle dark `#2a2a2a` appears only as fine pattern lines.
- No pure white or pure black anywhere in the design.

### Texture and Feel
- Surfaces feel like draped cotton fabric — matte, warm, slightly textured.
- Crackle patterns are subtle, not overwhelming (10-15% opacity).
- Canting dots add micro-texture without visual noise.
- The overall aesthetic communicates handcrafted artisan quality.

### Typography
- All headings use a serif font with medium or heavier weight.
- Body text uses a warm readable serif.
- Labels use uppercase tracking (copper stamp precision).
- Text sizes are comfortable (16px+ for body).

### Cultural Respect
- The design reads as Indonesian batik / Javanese craft tradition.
- Parang motif is correctly rendered (diagonal S-curved parallel lines).
- Tjanting lines are slightly organic and hand-drawn (not machine-perfect).
- The overall aesthetic communicates wax resist craft, not generic textile.
- Colors reflect the traditional dye process (indigo, soga, madder).

### Accessibility
- Text contrast ratios meet WCAG AA on all surfaces.
- Focus states are visible with gold or soga brown rings.
- Crackle pattern backgrounds are not behind body text.
- Touch targets are at least 44px.
- Dye bath gradient backgrounds do not interfere with content readability.

## Anti-Patterns

- **Missing crackle pattern.** The crackle lines ARE batik. Without them, this is just a generic brown/blue design.
- **Using neon or synthetic colors.** Batik colors come from natural dyes — indigo, soga bark, madder root. No fluorescent, electric, or artificial hues.
- **Perfectly straight lines everywhere.** Tjanting tool lines are hand-drawn wax — they have slight waviness. Machine precision is anti-batik.
- **Missing the parang motif.** The diagonal S-curved parallel lines are the most recognizable Javanese batik element.
- **Glossy, shiny, or reflective surfaces.** Batik cloth is matte cotton. Never glossy, never metallic, never plastic.
- **Missing canting dots or tjanting lines.** These fine details are what distinguish batik from generic textile patterns.
- **Flat, untextured surfaces.** Every cloth surface should suggest woven cotton with drape and weight.
- **Pure white or pure black.** Always use cloth white or crackle dark instead.
- **Missing dye bath gradients.** Colors in batik come from immersion — they should show depth, not flat fills.
- **Treating crackle as a defect.** Crackle lines are the most prized feature of batik — they reveal the wax-resist process.
- **Overloading with patterns.** Balance crackle, stamp, tjanting, and canting elements. One dominant pattern per surface.
- **Thin, cold, or geometric-sans-serif typography.** Batik pairs with warm, handcrafted serif faces.
- **Missing the cultural context.** Batik is UNESCO heritage. It is not decoration — it is identity.

## Accessibility Considerations

### Contrast Requirements
- Cloth white `#f5f0f0` with crackle dark `#2a2a2a` text: verify WCAG AA (ratio ~14:1, passes AAA).
- Indigo dye `#1a2a4a` with wax cream `#f0e8d0` text: verify WCAG AA (ratio ~10:1, passes AAA).
- Soga brown `#5a3a1a` on cloth white `#f5f0f0`: verify WCAG AA (ratio ~7:1, passes AAA).
- Gold accent `#c4a043` on indigo `#1a2a4a`: verify WCAG AA for large text (ratio ~5.5:1, passes AA for large).
- Gold accent `#c4a043` on cloth white `#f5f0f0`: verify contrast (ratio ~2.5:1, fails — use only decorative).

### Focus Management
- All interactive elements must have visible focus indicators.
- Use `focus:ring-4 focus:ring-[#c4a043]/40` on dark surfaces.
- Use `focus:ring-4 focus:ring-[#5a3a1a]/30 focus:ring-offset-2 focus:ring-offset-[#f5f0f0]` on light surfaces.
- Focus rings must be clearly distinguishable from crackle pattern elements.

### Pattern Accessibility
- Crackle patterns must not appear behind body text. Use solid cloth white cards for readability.
- Wax stamped patterns must not appear behind body text.
- Parang motif SVGs must have `aria-hidden="true"` when decorative.
- Crackle overlay SVGs must have `aria-hidden="true"` and `role="presentation"`.
- Canting dot textures must not be behind text content.

### Touch Targets
- All buttons and interactive elements: minimum 44px by 44px.
- Tjanting line navigation elements: generous padding for touch interaction.
- Batik stamp badge components: minimum 44px touch target.

### Screen Reader Context
- Batik pattern images: `alt="Traditional [motif name] batik pattern"` with meaningful descriptions.
- Crackle overlays: `aria-hidden="true"` (decorative texture).
- Tjanting borders: `aria-hidden="true"` (decorative separators).
- Navigation items: semantic `<nav>` with `aria-label="Main navigation"`.

### Color Blindness Considerations
- Indigo dye `#1a2a4a` and soga brown `#5a3a1a` differ in hue and luminance, aiding color-blind users.
- Crackle pattern provides structural detail independent of color.
- Never use red-green alone to convey meaning without a secondary signal.
- Parang motif line patterns provide visual distinction regardless of color perception.

### Motion Sensitivity
- Crackle reveal animation must respect `prefers-reduced-motion`.
- Tjanting line draw animation must be disabled when reduced motion is preferred.
- Dye immersion gradient shift must be static when reduced motion is preferred.
- Canting dot stagger animation must be instant when reduced motion is preferred.

## Cultural Context and Usage Notes

Batik is a UNESCO-recognized Intangible Cultural Heritage of Indonesia, with roots in Javanese tradition dating back over a thousand years. The wax-resist dyeing process is itself the art: molten wax is applied to cloth using a tjanting tool (small copper spout) for fine lines or a cap (copper stamp) for geometric patterns. The cloth is then immersed in dye — the wax resists the dye, preserving the undyed pattern beneath. When the wax cracks during handling, dye seeps through, creating the characteristic crackle lines that are the most prized feature of handmade batik.

The parang motif (diagonal curved parallel lines representing a knife edge) is one of the most sacred Javanese batik patterns. It symbolizes power, continuity, and the connection between humans and the cosmos. Use it with awareness of its cultural significance.

Soga brown comes from the bark of the soga tree (Peltophorum pterocarpum), native to Java. It has been the primary brown dye in Javanese batik for centuries. Its warm earth tone is inseparable from the batik tradition.

Indigo dye (from Indigofera tinctoria) provides the deep blue that anchors most traditional batik palettes. The indigo dye process involves repeated immersion — deeper blue indicates more dye baths, which historically indicated greater wealth and status.

The tjanting tool is a small copper vessel with a spout, used to apply molten wax in fine lines. The slight irregularity of tjanting lines — never perfectly straight, always showing the hand of the maker — is a mark of authenticity. When rendering tjanting lines in digital interfaces, preserve this organic quality.

Canting dots are small wax dots applied by hand using the tjanting tool. They create stippled texture that adds depth and visual interest to batik cloth. In digital interfaces, canting dots serve as micro-texture accents.

This skill respects the deep cultural significance of Indonesian batik and Javanese heritage. Design with the same care and intention that a batik artisan brings to their craft.
