---
name: jazz-club-ui
description: Build jazz club UI components (smoky lounge atmosphere, brass instrument silhouettes, stage spotlight, music notation accents, vinyl record textures, cocktail glass props, velvet seating, piano keys) with warm stage lighting, smoky haze, and the improvisational elegance of live jazz performance. Trigger this skill when the user asks for jazz club design, lounge UI, stage spotlight cone, smoky atmosphere, brass instrument silhouette, music notation accent, vinyl record texture, cocktail glass prop, velvet seating, piano key border, or jazz lounge aesthetic.
---

# Jazz Club / Lounge UI

Use this skill to design and implement moody, soulful interfaces inspired by jazz clubs: smoky haze overlays, warm spotlight cones from above, brass instrument silhouettes, scattered music notation, vinyl record circular decorations, cocktail glass props, velvet seating textures, piano key border strips, and the improvisational elegance of live performance. The aesthetic is intimate and nocturnal -- dark rooms alive with warm brass light, smoke curling through spotlights, and the rhythmic geometry of piano keys and vinyl grooves.

## Non-Negotiable Foundations

- Stage spotlight cone must appear in every design -- it is the signature lighting identity.
- Smoky haze overlay (translucent white blur) must be present in at least one element per view to establish atmosphere.
- The palette must remain dark-dominant: deep club backgrounds with warm brass, stage amber, and velvet accents. No bright whites, no cool blues, no pastels.
- Music notation accents (eighth notes, treble clefs) must appear in at least one element per page to ground the jazz theme.
- The atmosphere must feel intimate, nocturnal, and improvisational -- this is not a sterile concert hall. Smoke, shadow, and warmth are features, not waste.
- All smoky haze and spotlight animations must respect `prefers-reduced-motion` and degrade to static overlays.

## Core Material Recipes

### 1) Stage Spotlight Cone

CSS triangular gradient from above, illuminating the stage.

```html
<style>
@keyframes spotlight-breathe { 0%,100% { opacity: 1; } 50% { opacity: 0.88; } }
</style>
<div class="relative w-full h-64 bg-[#0a0a0a] overflow-hidden">
  <!-- Ceiling mount -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-[#2a2a2a] rounded-b-sm"></div>
  <!-- Spotlight source -->
  <div class="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffcc66] rounded-full shadow-[0_0_20px_6px_rgba(255,204,102,0.4)]"></div>
  <!-- Cone beam -->
  <div class="absolute top-4 left-1/2 -translate-x-1/2" style="width:0;height:0;border-left:100px solid transparent;border-right:100px solid transparent;border-top:200px solid rgba(255,204,102,0.04);"></div>
  <!-- Floor pool -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-[radial-gradient(ellipse_at_center,rgba(255,204,102,0.2)_0%,rgba(255,204,102,0.05)_60%,transparent_100%)]" style="animation: spotlight-breathe 6s ease-in-out infinite;"></div>
  <!-- Stage floor -->
  <div class="absolute bottom-0 w-full h-6 bg-[#1a1a1a] border-t border-[#c4a043]/10"></div>
</div>
```

### 2) Smoky Haze Overlay

Translucent white blur layer simulating cigarette smoke and stage haze.

```html
<style>
@keyframes smoke-drift { 0% { transform: translateX(0) translateY(0); } 50% { transform: translateX(15px) translateY(-5px); } 100% { transform: translateX(0) translateY(0); } }
</style>
<div class="relative w-full h-48 bg-[#0a0a0a] overflow-hidden">
  <!-- Smoke wisps -->
  <div class="absolute top-[20%] left-[15%] w-40 h-24 bg-white/[0.04] rounded-full blur-3xl" style="animation: smoke-drift 12s ease-in-out infinite;"></div>
  <div class="absolute top-[40%] left-[50%] w-56 h-16 bg-white/[0.03] rounded-full blur-3xl" style="animation: smoke-drift 16s ease-in-out infinite; animation-delay: -4s;"></div>
  <div class="absolute top-[10%] left-[70%] w-32 h-20 bg-white/[0.025] rounded-full blur-3xl" style="animation: smoke-drift 14s ease-in-out infinite; animation-delay: -8s;"></div>
  <!-- Dense low haze -->
  <div class="absolute bottom-[20%] w-full h-16 bg-gradient-to-t from-white/[0.03] to-transparent"></div>
</div>
```

### 3) Brass Instrument SVG Silhouettes

Saxophone, trumpet, and upright bass as decorative accents.

```html
<div class="relative w-full flex items-end justify-center gap-8 h-40">
  <!-- Saxophone silhouette -->
  <svg viewBox="0 0 60 120" class="w-12 h-24 fill-[#c4a043]/30">
    <path d="M25,5 Q30,2 35,5 L38,15 Q42,20 40,30 L38,45 Q36,55 30,60 L28,75 Q25,90 30,100 L35,110 Q40,118 35,118 Q20,118 15,110 Q10,100 18,90 L20,75 Q22,60 20,50 L18,35 Q16,20 22,10 Z"/>
    <!-- Keys -->
    <circle cx="22" cy="30" r="2" fill-[#c4a043]/50"/>
    <circle cx="24" cy="40" r="2" fill-[#c4a043]/50"/>
    <circle cx="26" cy="50" r="2" fill-[#c4a043]/50"/>
  </svg>
  <!-- Trumpet silhouette -->
  <svg viewBox="0 0 120 50" class="w-24 h-10 fill-[#c4a043]/25">
    <path d="M10,22 Q10,18 14,18 L60,18 Q65,18 68,15 L80,10 Q90,8 95,12 Q100,18 100,25 Q100,35 95,40 Q88,45 80,40 L68,35 Q65,32 60,32 L14,32 Q10,32 10,28 Z"/>
    <!-- Valves -->
    <rect x="30" y="14" width="4" height="18" rx="2" fill-[#c4a043]/15"/>
    <rect x="40" y="14" width="4" height="18" rx="2" fill-[#c4a043]/15"/>
    <rect x="50" y="14" width="4" height="18" rx="2" fill-[#c4a043]/15"/>
  </svg>
  <!-- Upright bass silhouette -->
  <svg viewBox="0 0 50 130" class="w-10 h-28 fill-[#c4a043]/20">
    <!-- Neck -->
    <rect x="22" y="0" width="6" height="50" rx="2"/>
    <!-- Scroll head -->
    <path d="M22,0 Q18,0 18,5 Q18,10 22,10"/>
    <!-- Body -->
    <ellipse cx="25" cy="85" rx="20" ry="40"/>
    <!-- F-holes -->
    <path d="M15,80 Q12,85 15,90" fill="none" stroke="#0a0a0a" stroke-width="1.5"/>
    <path d="M35,80 Q38,85 35,90" fill="none" stroke="#0a0a0a" stroke-width="1.5"/>
    <!-- Strings -->
    <line x1="24" y1="10" x2="23" y2="125" stroke="#c4a043" stroke-width="0.5" opacity="0.15"/>
    <line x1="26" y1="10" x2="27" y2="125" stroke="#c4a043" stroke-width="0.5" opacity="0.15"/>
    <!-- Endpin -->
    <line x1="25" y1="125" x2="25" y2="130" stroke="#c4a043" stroke-width="1.5" opacity="0.3"/>
  </svg>
</div>
```

### 4) Music Notation Scattered Accents

Eighth notes, treble clefs, and staff fragments as decorative elements.

```html
<div class="relative w-full h-32 overflow-hidden pointer-events-none">
  <!-- Treble clef -->
  <svg viewBox="0 0 40 80" class="absolute top-4 left-[10%] w-8 h-16 fill-none stroke-[#c4a043]/15" stroke-width="1.5">
    <path d="M20,75 Q10,60 15,45 Q20,30 20,20 Q20,10 18,5 Q15,0 22,0 Q30,5 28,15 Q25,25 20,35 Q15,45 15,55 Q15,65 25,70 Q30,72 30,65"/>
  </svg>
  <!-- Eighth notes -->
  <svg viewBox="0 0 30 40" class="absolute top-8 left-[35%] w-6 h-8 fill-[#c4a043]/12">
    <ellipse cx="8" cy="32" rx="5" ry="3.5" transform="rotate(-15 8 32)"/>
    <line x1="13" y1="30" x2="13" y2="5" stroke="#c4a043" stroke-width="1.2" opacity="0.12"/>
    <path d="M13,5 Q20,8 18,14" fill="none" stroke="#c4a043" stroke-width="1.2" opacity="0.12"/>
  </svg>
  <svg viewBox="0 0 30 40" class="absolute top-16 left-[60%] w-6 h-8 fill-[#c4a043]/10">
    <ellipse cx="8" cy="32" rx="5" ry="3.5" transform="rotate(-15 8 32)"/>
    <line x1="13" y1="30" x2="13" y2="5" stroke="#c4a043" stroke-width="1.2" opacity="0.10"/>
    <path d="M13,5 Q20,8 18,14" fill="none" stroke="#c4a043" stroke-width="1.2" opacity="0.10"/>
  </svg>
  <!-- Beamed sixteenth notes -->
  <svg viewBox="0 0 40 40" class="absolute bottom-4 left-[80%] w-8 h-8 fill-[#c4a043]/08">
    <ellipse cx="6" cy="32" rx="4" ry="3" transform="rotate(-15 6 32)"/>
    <ellipse cx="24" cy="30" rx="4" ry="3" transform="rotate(-15 24 30)"/>
    <line x1="10" y1="30" x2="10" y2="6" stroke="#c4a043" stroke-width="1" opacity="0.08"/>
    <line x1="28" y1="28" x2="28" y2="4" stroke="#c4a043" stroke-width="1" opacity="0.08"/>
    <line x1="10" y1="6" x2="28" y2="4" stroke="#c4a043" stroke-width="1.5" opacity="0.08"/>
    <line x1="10" y1="10" x2="28" y2="8" stroke="#c4a043" stroke-width="1.5" opacity="0.08"/>
  </svg>
  <!-- Staff fragment -->
  <svg class="absolute bottom-8 left-[25%] w-24 h-8 opacity-[0.06]">
    <line x1="0" y1="2" x2="96" y2="2" stroke="#c4a043" stroke-width="0.8"/>
    <line x1="0" y1="6" x2="96" y2="6" stroke="#c4a043" stroke-width="0.8"/>
    <line x1="0" y1="10" x2="96" y2="10" stroke="#c4a043" stroke-width="0.8"/>
    <line x1="0" y1="14" x2="96" y2="14" stroke="#c4a043" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="96" y2="18" stroke="#c4a043" stroke-width="0.8"/>
  </svg>
</div>
```

### 5) Vinyl Record Circle Decoration

Circular vinyl record with grooves and center label.

```html
<div class="relative w-24 h-24 mx-auto">
  <!-- Outer edge -->
  <div class="absolute inset-0 rounded-full bg-[#1a1a1a] border-2 border-[#2a2a2a]"></div>
  <!-- Groove rings -->
  <div class="absolute inset-1 rounded-full border border-[#2a2a2a]/50"></div>
  <div class="absolute inset-2 rounded-full border border-[#2a2a2a]/40"></div>
  <div class="absolute inset-3 rounded-full border border-[#2a2a2a]/50"></div>
  <div class="absolute inset-4 rounded-full border border-[#2a2a2a]/30"></div>
  <div class="absolute inset-5 rounded-full border border-[#2a2a2a]/40"></div>
  <!-- Center label -->
  <div class="absolute inset-[30%] rounded-full bg-[#c4a043] flex items-center justify-center">
    <div class="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></div>
  </div>
  <!-- Light reflection -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"></div>
</div>
```

### 6) Cocktail Glass SVG Prop

Martini glass silhouette as a decorative lounge accent.

```html
<div class="relative w-12 h-16">
  <svg viewBox="0 0 48 64" class="w-full h-full">
    <!-- Bowl -->
    <path d="M8,8 L24,32 L40,8 Z" fill="none" stroke="#c4a043" stroke-width="1.5" opacity="0.4"/>
    <!-- Liquid fill -->
    <path d="M14,14 L24,32 L34,14 Z" fill="#c4a043" opacity="0.08"/>
    <!-- Stem -->
    <line x1="24" y1="32" x2="24" y2="52" stroke="#c4a043" stroke-width="1.5" opacity="0.4"/>
    <!-- Base -->
    <ellipse cx="24" cy="54" rx="10" ry="3" fill="none" stroke="#c4a043" stroke-width="1.2" opacity="0.35"/>
    <!-- Olive -->
    <circle cx="28" cy="18" r="3" fill="#6a8a4a" opacity="0.5"/>
    <line x1="28" y1="15" x2="28" y2="18" stroke="#c4a043" stroke-width="0.8" opacity="0.4"/>
  </svg>
</div>
```

### 7) Piano Key Border Strip

Black and white alternating key pattern as a horizontal divider.

```html
<div class="relative w-full h-8 flex overflow-hidden rounded-sm">
  <!-- White keys -->
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0] border-r border-[#1a1a1a]/10"></div>
  <div class="flex-1 bg-[#f5f5f0]"></div>
  <!-- Black keys (overlay) -->
  <div class="absolute top-0 left-[7%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <div class="absolute top-0 left-[21%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <div class="absolute top-0 left-[36%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <div class="absolute top-0 left-[57%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <div class="absolute top-0 left-[71%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <div class="absolute top-0 left-[85%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-b-sm shadow-sm"></div>
  <!-- Key shadow -->
  <div class="absolute bottom-0 w-full h-1 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
```

### 8) Velvet Seating Texture

Deep red velvet texture with subtle fabric pattern for lounge seating elements.

```html
<div class="relative w-full h-20 bg-[#5a0a0a] overflow-hidden rounded-t-lg">
  <!-- Velvet fabric texture (subtle noise-like pattern) -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_3px)]"></div>
  <!-- Tufting buttons -->
  <div class="absolute top-4 left-[15%] w-2 h-2 bg-[#3a0808] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"></div>
  <div class="absolute top-4 left-[50%] w-2 h-2 bg-[#3a0808] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"></div>
  <div class="absolute top-4 left-[85%] w-2 h-2 bg-[#3a0808] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"></div>
  <!-- Light catch on curve -->
  <div class="absolute top-0 w-full h-1/3 bg-gradient-to-b from-white/[0.04] to-transparent"></div>
  <!-- Bottom trim -->
  <div class="absolute bottom-0 w-full h-1 bg-gradient-to-t from-[#c4a043]/20 to-transparent"></div>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Club Dark | `#0a0a0a` | Primary background, deepest shadow, club interior |
| Stage Warm | `#ffcc66` | Spotlight source, stage lighting, warm focal glow |
| Brass Gold | `#c4a043` | Instrument accents, notation, interactive elements, trim |
| Smoke Gray | `#4a4a4a` | Haze midtones, secondary text on dark, ambient smoke |
| Velvet Dark Red | `#5a0a0a` | Seating textures, lounge warmth, accent upholstery |
| Piano Black | `#1a1a1a` | Structural surfaces, secondary backgrounds, key accents |
| Piano White | `#f5f5f0` | Piano keys, rare bright accent, high-contrast text |
| Cocktail Amber | `#d4960a` | Drink prop accents, warm highlight, label emphasis |
| Vinyl Groove | `#2a2a2a` | Record decoration, subtle surface texture, dividers |

Rules: Club dark dominates all surfaces. Stage warm and brass gold provide the warmth within that darkness. Smoke gray bridges between dark and light. Velvet red appears only in seating and lounge upholstery contexts. Piano white appears only in piano key elements and high-priority text. The palette should feel like sitting in a dark club where warm light pools around the stage and brass catches every angle.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (serif elegance -- like engraved jazz club marquees and vinyl record labels).
- **Body:** Inter, IBM Plex Sans (clean readable sans-serif for set lists, event descriptions, and menu text).
- **Notation Data:** `font-mono text-[#c4a043] text-xs tracking-[0.15em]` (set times, BPM markings, key signatures).
- **Labels:** `font-medium uppercase tracking-[0.25em] text-[10px] text-[#f5f5f0]/40` (section dividers, lounge section names, night of the week).
- Typography should feel like it was typeset on vinyl record labels and silk-screened onto club marquees -- warm, bold, and rhythmic.

## Component Architecture Pattern

- **Stage Header:** Full-width dark banner with spotlight cone centered, smoky haze overlay, and brass instrument silhouettes flanking the stage area `bg-[#0a0a0a]`.
- **Vinyl Cards:** Dark content panels (`bg-[#1a1a1a]`) with vinyl record decorative corners and brass-accented borders.
- **Velvet Lounge Panels:** Deep red velvet-textured containers for seating arrangements, VIP sections, and lounge area descriptions.
- **Piano Key Dividers:** Piano key strip borders separating major sections instead of plain horizontal rules.
- **Set List Layout:** Rows of event entries with brass time notation, cream-tinted song titles, and subtle smoky haze backgrounds.
- **Club Footer:** Piano black (`bg-[#1a1a1a]`) with brass trim line and scattered music notation accents above it.

## Interaction Rules

- Spotlight cones breathe subtly (opacity 0.88 to 1.0 on 6s cycle) as if responding to the band's dynamics.
- Smoke haze drifts slowly (12-16s translate cycles) creating organic, non-repeating movement.
- Vinyl record decorations rotate slowly on hover (CSS rotate, 8s full revolution), suggesting a spinning record.
- Piano key strip highlights the key being hovered with a subtle shadow deepen, as if being pressed.
- Cocktail glass props tilt 2 degrees on hover, suggesting a toast being raised.
- Scroll-linked: smoky haze layers fade in at different opacities as they enter viewport, creating depth layers.
- Music notation accents fade in sequentially as they enter viewport, like notes appearing on a page.
- Brass instrument silhouettes have a subtle glow pulse (brass shadow on 4s cycle) suggesting stage light catching the metal.
- Velvet panels lift with `translate-y` and brass border opacity increases on hover.

## Reusable Tailwind Tokens

- Club dark: `bg-[#0a0a0a]`.
- Stage warm: `bg-[#ffcc66] shadow-[0_0_20px_6px_rgba(255,204,102,0.4)]`.
- Spotlight cone: `border-left:100px solid transparent;border-right:100px solid transparent;border-top:200px solid rgba(255,204,102,0.04)`.
- Spotlight pool: `bg-[radial-gradient(ellipse_at_center,rgba(255,204,102,0.2)_0%,transparent_100%)]`.
- Smoke haze: `bg-white/[0.04] rounded-full blur-3xl`.
- Smoke dense: `bg-gradient-to-t from-white/[0.03] to-transparent`.
- Brass accent: `text-[#c4a043]` or `border-[#c4a043]/30`.
- Brass instrument: `fill-[#c4a043]/30`.
- Brass notation: `fill-[#c4a043]/12` or `stroke-[#c4a043]/15`.
- Velvet surface: `bg-[#5a0a0a] bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_3px)]`.
- Piano black: `bg-[#1a1a1a]`.
- Piano white: `bg-[#f5f5f0]`.
- Piano key black: `bg-[#1a1a1a] rounded-b-sm shadow-sm`.
- Vinyl groove: `border border-[#2a2a2a]/50 rounded-full`.
- Vinyl label: `bg-[#c4a043] rounded-full`.
- Cocktail stem: `stroke="#c4a043" stroke-width="1.5" opacity="0.4"`.
- Notation mono: `font-mono text-[#c4a043] text-xs tracking-[0.15em]`.

## Quality Checklist

- Stage spotlight cone with warm glow is visually prominent in at least one element per view.
- Smoky haze overlay (translucent white blur) appears in at least one element per page.
- Music notation accents (eighth notes, treble clefs) ground the jazz theme.
- Club dark dominates all backgrounds.
- Brass gold accents used consistently for interactive elements, instrument silhouettes, and notation.
- Piano key border strip used as a section divider in at least one place.
- Vinyl record decoration adds rhythmic circular geometry.
- Velvet texture provides warm lounge upholstery for seating or VIP elements.
- Cocktail glass prop adds lounge atmosphere detail.
- Typography feels warm and bold -- serif display, clean sans body, mono for set times.
- The aesthetic reads as a jazz club -- intimate, nocturnal, smoky, warm, improvisational.
- Smoke haze layers create depth without obscuring content.
- Stage lighting creates focal warmth without flooding the entire interface.

## Anti-Patterns

- Bright white backgrounds (jazz clubs are dark for atmosphere and stage focus).
- Cool blue or pastel tones dominating (the palette is warm brass, stage amber, and deep shadow).
- Missing spotlight cone or stage lighting (the stage IS the design identity).
- Missing smoky haze (the atmosphere requires smoke and haze).
- Busy dense layouts with no breathing room (jazz club spaces demand intimate spacing and shadow).
- Saturated primary colors (the palette is restrained: brass gold, warm amber, velvet dark red).
- Missing music notation or instrument references (the jazz theme must be present).
- Cartoonish or playful instrument shapes (these are real brass and wood instruments -- the sophistication is the point).
- Missing piano key or vinyl record elements (the rhythmic geometry is essential to the theme).
- Fast flashy animations (jazz club pacing is slow and sultry -- motion should be smooth and smoldering).
- Sans-serif everywhere without any serif display faces (marquees and vinyl labels demand serif typography).
- Missing velvet texture or lounge seating reference (the velvet is the warmth in the darkness).

## Accessibility Considerations

- Smoke haze drift animations must respect `prefers-reduced-motion: reduce` -- replace with static translucent overlays at fixed opacity.
- Spotlight breathing animations must pause under `prefers-reduced-motion: reduce` -- hold at full opacity.
- Stage warm `#ffcc66` on club dark `#0a0a0a` exceeds 12:1 contrast ratio -- use this for all primary text.
- Brass gold `#c4a043` on club dark `#0a0a0a` exceeds 5:1 contrast ratio -- safe for secondary text and labels.
- Piano white `#f5f5f0` on piano black `#1a1a1a` exceeds 15:1 contrast ratio -- safe for high-priority text.
- Smoke gray `#4a4a4a` on club dark `#0a0a0a` falls below 3:1 -- use only for large decorative elements, never for body text.
- Velvet dark red `#5a0a0a` on club dark `#0a0a0a` falls below 2:1 -- use only for textured decorative surfaces, never for text.
- Spotlight cone and pool gradients must not create glare zones that wash out adjacent content -- cap opacity at 0.2 for pool, 0.04 for cone.
- Music notation SVGs must use `pointer-events: none` to avoid blocking interaction with elements behind them.
- Piano key border strips must not appear interactive unless they actually are -- decorative strips should not have hover states that imply clickability.
- All interactive brass buttons must have visible focus indicators that exceed the brass gradient -- use `ring-2 ring-[#f5f5f0]` on focus-visible.
- Vinyl record decorations must not rotate under `prefers-reduced-motion: reduce` -- remain static.
