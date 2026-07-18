---
name: wax-museum-ui
description: Build wax museum UI components (uncanny wax figure displays, glass case reflections, spotlight lighting, museum placard labels, preserved figure poses, dim gallery ambiance, wax skin sheen) with glass case framing, spotlight pools, and the eerie stillness of lifelike wax figures behind glass. Trigger this skill when the user asks for wax museum design, figure display UI, glass case framing, spotlight gallery, museum placard label, dim gallery ambiance, wax skin sheen, rope barrier accent, or wax museum aesthetic.
---

# Wax Museum / Gallery Display UI

Use this skill to design and implement eerie, still interfaces inspired by wax museums: glass display cases with translucent reflections, spotlight pools casting warm light from above, cream museum placard labels, the uncanny sheen of wax skin, dim gallery backdrops, gold rope barriers, and preserved figure silhouettes. The aesthetic is quiet reverence in dim halls -- dark galleries where spotlight pools isolate lifelike figures behind glass, every surface polished, every label impeccably typeset.

## Non-Negotiable Foundations

- Glass display case framing must appear in every design -- it is the signature container identity.
- Spotlight pool lighting (radial warm gradient from above) must be present in at least one element per view.
- The palette must remain dim-dominant: deep gallery dark backgrounds with warm spotlight cream, wax skin, and rope gold accents. No bright saturated colors, no cool blues, no neon.
- Museum placard labels (cream card, black text, thin border) must appear in at least one element per page to ground the museum theme.
- The atmosphere must feel hushed, reverent, and slightly uncanny -- this is not a bright retail space. Shadow and negative space are features, not waste.
- All spotlight and sheen animations must respect `prefers-reduced-motion` and degrade to static gradients.

## Core Material Recipes

### 1) Glass Display Case

Translucent border with inner shadow and subtle reflection.

```html
<div class="relative w-full max-w-sm mx-auto">
  <!-- Glass case outer shell -->
  <div class="relative bg-[#f0f8ff]/5 border border-[#f0f8ff]/15 rounded-sm shadow-[inset_0_0_30px_rgba(0,0,0,0.4),0_4px_20px_rgba(0,0,0,0.6)] overflow-hidden">
    <!-- Reflection streak (top-left) -->
    <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent pointer-events-none"></div>
    <!-- Glass edge highlight (left) -->
    <div class="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-white/10"></div>
    <!-- Glass edge highlight (right) -->
    <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-white/10"></div>
    <!-- Inner content area (figure placeholder) -->
    <div class="relative p-6 min-h-[280px] flex items-center justify-center">
      <div class="w-20 h-36 bg-gradient-to-b from-[#e8c8a0]/60 to-[#e8c8a0]/30 rounded-t-full opacity-40"></div>
    </div>
    <!-- Bottom glass shelf -->
    <div class="h-3 bg-gradient-to-b from-white/[0.04] to-transparent border-t border-white/[0.06]"></div>
  </div>
  <!-- Glass case pedestal -->
  <div class="mx-2 h-4 bg-[#5a3a1a] shadow-[0_2px_8px_rgba(0,0,0,0.5)]"></div>
  <div class="mx-0 h-2 bg-[#4a2a0a] rounded-b-sm"></div>
</div>
```

### 2) Spotlight Pool on Floor

Radial gradient of warm light from above, illuminating the floor beneath a figure.

```html
<style>
@keyframes spotlight-flicker { 0%,100% { opacity: 1; } 50% { opacity: 0.92; } }
</style>
<div class="relative w-full h-40 bg-[#1a1a1a] overflow-hidden">
  <!-- Spotlight cone from above -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#fff5e0] rounded-full shadow-[0_0_8px_2px_#fff5e0]"></div>
  <div class="absolute top-0 left-1/2 -translate-x-1/2" style="width:0;height:0;border-left:80px solid transparent;border-right:80px solid transparent;border-top:120px solid rgba(255,245,224,0.03);"></div>
  <!-- Floor pool -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-28 bg-[radial-gradient(ellipse_at_center,rgba(255,245,224,0.15)_0%,rgba(255,245,224,0.05)_50%,transparent_100%)]" style="animation: spotlight-flicker 8s ease-in-out infinite;"></div>
  <!-- Floor surface -->
  <div class="absolute bottom-0 w-full h-6 bg-[#5a3a1a]/30 border-t border-[#5a3a1a]/20"></div>
</div>
```

### 3) Museum Placard Label

Cream card with black text, thin border -- the classic museum identification label.

```html
<div class="max-w-xs mx-auto bg-[#f0ead0] border border-[#c4a043]/40 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
  <!-- Category line -->
  <p class="font-mono text-[9px] tracking-[0.2em] text-[#5a3a1a]/60 uppercase mb-1">Figure No. 47</p>
  <!-- Title -->
  <h3 class="font-serif text-[#1a1a1a] text-base font-semibold leading-tight mb-1">Marie Curie</h3>
  <!-- Subtitle -->
  <p class="font-serif text-[#1a1a1a]/70 text-xs italic mb-2">1867 -- 1934</p>
  <!-- Divider -->
  <div class="w-8 h-px bg-[#c4a043]/50 mb-2"></div>
  <!-- Description -->
  <p class="text-[#1a1a1a]/60 text-[11px] leading-relaxed">Physicist and chemist. Pioneer of radioactivity research. First person to win two Nobel Prizes.</p>
  <!-- Material note -->
  <p class="mt-2 font-mono text-[8px] tracking-[0.15em] text-[#5a3a1a]/40 uppercase">Mixed media / Wax over armature</p>
</div>
```

### 4) Wax Skin Sheen Effect

Subtle shine gradient simulating the polished, slightly uncanny surface of wax figures.

```html
<div class="relative w-16 h-32 mx-auto">
  <!-- Base wax form -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#e8c8a0] via-[#e0b890] to-[#d0a880] rounded-t-full"></div>
  <!-- Sheen highlight -->
  <div class="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-t-full"></div>
  <!-- Secondary sheen (edge catch) -->
  <div class="absolute top-2 right-1 w-3 h-16 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-full blur-[1px]"></div>
</div>
```

### 5) Rope Barrier Accent

Gold chain with brass posts, separating viewer from exhibit.

```html
<div class="relative w-full h-12 flex items-center">
  <!-- Left post -->
  <div class="flex-shrink-0 w-3 h-10 bg-gradient-to-b from-[#c4a043] to-[#8a6a23] rounded-t-full shadow-sm"></div>
  <!-- Chain (SVG catenary curve) -->
  <svg class="flex-1 h-10" viewBox="0 0 400 40" preserveAspectRatio="none">
    <path d="M0,8 C100,32 300,32 400,8" fill="none" stroke="#c4a043" stroke-width="2.5" opacity="0.7"/>
    <path d="M0,8 C100,32 300,32 400,8" fill="none" stroke="#c4a043" stroke-width="1" opacity="0.3" stroke-dasharray="6,4"/>
  </svg>
  <!-- Right post -->
  <div class="flex-shrink-0 w-3 h-10 bg-gradient-to-b from-[#c4a043] to-[#8a6a23] rounded-t-full shadow-sm"></div>
</div>
```

### 6) Figure Pose Silhouette Accent

Dark silhouette of a posed figure, used as decorative element.

```html
<div class="relative w-24 h-48">
  <!-- Silhouette body -->
  <svg viewBox="0 0 100 200" class="w-full h-full fill-[#1a1a1a]/60">
    <!-- Head -->
    <circle cx="50" cy="28" r="14"/>
    <!-- Torso -->
    <path d="M35,42 Q50,38 65,42 L62,90 Q50,95 38,90 Z"/>
    <!-- Left arm (posed gesture) -->
    <path d="M35,48 Q15,55 18,70 Q20,72 22,68 L36,55 Z"/>
    <!-- Right arm -->
    <path d="M65,48 Q80,60 75,78 Q73,80 70,76 L64,56 Z"/>
    <!-- Legs -->
    <path d="M40,90 L36,180 Q38,185 42,180 L48,95 Z"/>
    <path d="M52,95 L58,180 Q62,185 64,180 L60,90 Z"/>
  </svg>
  <!-- Spotlight glow on figure -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,245,224,0.08)_0%,transparent_70%)]"></div>
</div>
```

### 7) Dim Gallery Ambient Background

The hushed, dark backdrop of a museum gallery hallway.

```html
<div class="relative w-full h-64 bg-[#1a1a1a] overflow-hidden">
  <!-- Gallery wall gradient (subtle warm undertone) -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#1e1a16] via-[#1a1a1a] to-[#151515]"></div>
  <!-- Distant gallery lights -->
  <div class="absolute top-4 left-[20%] w-2 h-2 bg-[#fff5e0] rounded-full opacity-20 shadow-[0_0_12px_4px_rgba(255,245,224,0.1)]"></div>
  <div class="absolute top-4 left-[50%] w-2 h-2 bg-[#fff5e0] rounded-full opacity-15 shadow-[0_0_12px_4px_rgba(255,245,224,0.08)]"></div>
  <div class="absolute top-4 left-[80%] w-2 h-2 bg-[#fff5e0] rounded-full opacity-20 shadow-[0_0_12px_4px_rgba(255,245,224,0.1)]"></div>
  <!-- Floor reflection -->
  <div class="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#2a2218]/30 to-transparent"></div>
  <!-- Floor line -->
  <div class="absolute bottom-[33%] w-full h-px bg-[#5a3a1a]/15"></div>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Wax Skin | `#e8c8a0` | Figure surfaces, skin tone base, highlight gradients |
| Spotlight Warm | `#fff5e0` | Spotlight source, warm pool light, label highlights |
| Gallery Dim | `#1a1a1a` | Primary background, gallery walls, deep shadow |
| Glass Case | `#f0f8ff` at 5% opacity | Translucent borders, reflections, glass edge highlights |
| Placard Cream | `#f0ead0` | Museum labels, placard backgrounds, info cards |
| Rope Gold | `#c4a043` | Barrier chains, brass posts, accent trim |
| Wood Floor | `#5a3a1a` | Pedestals, floor surfaces, warm structural base |
| Brass Dark | `#8a6a23` | Post bases, secondary metal accent, deep gold shadow |
| Wall Sconce | `#3a2a1a` | Gallery wall warm undertone, ambient glow background |

Rules: Gallery dark dominates all surfaces. Spotlight warm and wax skin provide the warmth within that darkness. Placard cream appears only in label contexts. Rope gold is reserved for barrier accents and brass hardware. Glass case translucency must remain subtle -- never opaque white. The palette should feel like walking through dim halls where spotlight pools isolate each figure in warm stillness.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (serif elegance -- like engraved museum plaques).
- **Body:** Inter, IBM Plex Sans (clean readable sans-serif for long descriptions and catalog text).
- **Placard Data:** `font-mono text-[#5a3a1a]/60 text-[9px] tracking-[0.2em]` (figure numbers, material notes, dates).
- **Labels:** `font-medium uppercase tracking-[0.25em] text-[10px] text-[#f0ead0]/40` (section dividers, gallery wing names).
- Typography should feel like it was letterpress-printed on cream card stock and mounted in brass frames -- precise, authoritative, timeless.

## Component Architecture Pattern

- **Gallery Hall Layout:** Dim background (`bg-[#1a1a1a]`) with evenly spaced glass case columns, spotlight pools beneath each case, and cream placard labels mounted below.
- **Glass Case Cards:** Translucent-bordered containers with inner shadow, glass reflection streaks, and warm spotlight glow from above.
- **Placard Labels:** Cream cards mounted below or beside each case, thin brass-accented borders, serif title, mono category labels.
- **Spotlight Sections:** Each exhibit section lit by a radial warm gradient from above, fading into the dim gallery background.
- **Rope Barrier Dividers:** Gold chain barriers separating gallery sections instead of plain horizontal rules.
- **Gallery Footer:** Wood floor texture (`bg-[#5a3a1a]/30`) with brass trim line separating it from content above.

## Interaction Rules

- Spotlight pools intensify subtly on hover (opacity increase from 0.15 to 0.22), as if a docent is drawing attention.
- Glass case reflections shift slightly on hover (gradient angle changes by 5 degrees), simulating light movement.
- Placard labels lift with `translate-y` and brass border opacity increases on hover, as if being brought closer for reading.
- Scroll-linked: spotlight pools fade in as they enter viewport, creating a sequential gallery walk experience.
- Rope barrier chains have a very subtle sway animation (CSS translate on chain SVG, 2px range, 6s period).
- Wax skin sheen highlight shifts position on hover, suggesting light playing across the polished surface.
- Brass buttons have a press-down effect: `active:translate-y-0.5 active:shadow-none`.
- Figure silhouettes in background sections have a very slow breathing opacity pulse (8s cycle, 0.04 to 0.08 opacity range).

## Reusable Tailwind Tokens

- Gallery dim: `bg-[#1a1a1a]`.
- Glass case shell: `bg-[#f0f8ff]/5 border border-[#f0f8ff]/15 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]`.
- Glass reflection: `bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent`.
- Spotlight source: `w-2 h-2 bg-[#fff5e0] rounded-full shadow-[0_0_12px_4px_rgba(255,245,224,0.15)]`.
- Spotlight pool: `bg-[radial-gradient(ellipse_at_center,rgba(255,245,224,0.15)_0%,transparent_100%)]`.
- Placard cream: `bg-[#f0ead0] border border-[#c4a043]/40`.
- Rope gold: `stroke="#c4a043" stroke-width="2.5"`.
- Brass post: `bg-gradient-to-b from-[#c4a043] to-[#8a6a23] rounded-t-full`.
- Wax skin base: `bg-gradient-to-b from-[#e8c8a0] via-[#e0b890] to-[#d0a880]`.
- Wax sheen: `bg-gradient-to-br from-white/25 via-transparent to-transparent`.
- Wood floor: `bg-[#5a3a1a]/30`.
- Placard mono: `font-mono text-[#5a3a1a]/60 text-[9px] tracking-[0.2em]`.

## Quality Checklist

- Glass display case framing with translucent border and inner shadow appears in at least one element per view.
- Spotlight pool radial warm gradient is present in at least one element per page.
- Museum placard labels (cream card, black text, thin brass border) ground the museum theme.
- Gallery dim dark dominates all backgrounds.
- Rope gold accents used consistently for barrier elements and brass hardware.
- Wax skin sheen effect adds uncanny realism to figure elements.
- Wood floor warm tones provide structural grounding for pedestals and floors.
- Typography feels engraved and letterpress -- serif display, clean sans body, mono for catalog data.
- The aesthetic reads as a wax museum gallery -- dim, reverent, slightly uncanny, meticulously maintained.
- Large shadow areas and dim ambiance reinforce the hushed gallery atmosphere.
- Glass reflections are subtle and translucent, never opaque or distracting.

## Anti-Patterns

- Bright white backgrounds (museum galleries are dimly lit for ambiance and figure preservation).
- Cool blue or neon tones dominating (the palette is warm spotlight and deep shadow).
- Missing glass case framing or translucent borders (the glass case IS the design identity).
- Missing spotlight pool lighting (every figure must be lit from above).
- Busy dense layouts with no breathing room (gallery spaces demand wide spacing between exhibits).
- Saturated primary colors (the palette is restrained: wax warm, gallery dark, brass gold).
- Missing placard labels or museum identification text (every exhibit needs a label).
- Cartoonish or playful figure shapes (these are lifelike wax figures -- the uncanny is the point).
- Missing rope barrier accents (the separation between viewer and exhibit is essential).
- Fast flashy animations (museum pacing is slow and deliberate -- motion should be subtle and reverent).
- Sans-serif everywhere without any serif display faces (engraved plaques and cream labels demand serif typography).

## Accessibility Considerations

- Spotlight flicker animations must respect `prefers-reduced-motion: reduce` -- replace with static gradient at full opacity.
- Spotlight warm `#fff5e0` on gallery dim `#1a1a1a` exceeds 15:1 contrast ratio -- use this for all primary text.
- Rope gold `#c4a043` on gallery dim `#1a1a1a` exceeds 5:1 contrast ratio -- safe for secondary text and labels.
- Placard cream `#f0ead0` text `#1a1a1a` exceeds 12:1 contrast ratio -- safe for label content.
- Wax skin `#e8c8a0` on gallery dim `#1a1a1a` exceeds 8:1 contrast ratio -- safe for decorative text.
- Glass case translucency effects must not reduce text legibility behind them -- apply only to decorative containers, never behind text.
- Spotlight pool gradients must not create glare zones that wash out adjacent content -- cap opacity at 0.2.
- Placard labels must maintain readable contrast across all text sizes -- minimum 11px body text on cream background.
- Rope barrier chain SVGs must use `pointer-events: none` to avoid blocking interaction with elements behind them.
- All interactive brass buttons must have visible focus indicators that exceed the brass gradient -- use `ring-2 ring-[#f0f0f0]` on focus-visible.
- Gallery dim background must not be so dark that non-interactive decorative elements become invisible -- maintain minimum 1.5:1 for decorative, 3:1 for large text.
