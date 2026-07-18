---
name: jazz-age-ballroom-ui
description: Build jazz age ballroom UI components (Art Deco chandelier, gold fringe curtain, saxophone silhouette, marble staircase, cocktail glass, dance floor, trumpet fanfare) with glamorous gold and black surfaces, geometric patterns, and the exuberant nightlife of the Roaring Twenties. Trigger this skill when the user asks for jazz age ballroom, Roaring Twenties, 1920s ballroom, speakeasy UI, cabaret interface, gold and black luxury, Art Deco chandelier, cocktail UI, dance floor, nightclub glamour, Gatsby party, flapper aesthetic, or jazz age nightlife interfaces.
---

# Jazz Age Ballroom UI

Use this skill to design and implement glamorous interfaces inspired by the jazz age ballroom and speakeasy culture of the Roaring Twenties: Art Deco chandeliers, gold fringe curtains, saxophone silhouettes, marble staircases, cocktail glassware, checkered dance floors, and the exuberant opulence of a Gatsby-era nightclub.

## Non-Negotiable Foundations

- Jazz age ballroom celebrates GEOMETRIC GLAMOUR through Art Deco crystal forms, gold-on-black surfaces, and the electric nightlife of the 1920s speakeasy — NOT the organic curves of Belle Epoque or the muted restraint of contemporary luxury.
- The atmosphere is a grand ballroom at midnight: crystal chandeliers refracting light, gold fringe catching the movement of dancers, marble floors gleaming underfoot, and saxophone melodies filling the air.
- Color anchoring: deep black provides the midnight backdrop, burnished gold delivers the signature luxury, and champagne and crystal tones provide luminous highlights against the darkness.
- Ornamentation is geometric and symmetrical: chevron patterns, stepped frames, sunburst motifs, and fan shapes echo the architectural language of 1920s ballrooms and cabarets.
- Typography is bold Art Deco display with high contrast: thick-thin strokes, geometric letterforms, and generous letter-spacing that evokes marquee signage and nightclub marquees.
- The mood is exuberant, electric, and unapologetically luxurious — this is the decade of excess, jazz, and the Charleston.

## Core Material Recipes

### 1) Art Deco Crystal Chandelier

A multi-tiered geometric chandelier with crystal drops.

```html
<svg viewBox="0 0 160 200" class="w-32 h-40 text-[#c4a043]">
  <!-- Ceiling mount -->
  <rect x="72" y="0" width="16" height="8" rx="2" fill="currentColor"/>
  <!-- Chain -->
  <line x1="80" y1="8" x2="80" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <!-- Top tier (small) -->
  <polygon points="55,30 105,30 95,50 65,50" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="60,35 100,35 93,48 67,48" fill="currentColor" opacity="0.08"/>
  <!-- Middle tier -->
  <polygon points="35,55 125,55 115,80 45,80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="40,58 120,58 112,78 48,78" fill="currentColor" opacity="0.06"/>
  <!-- Bottom tier (large) -->
  <polygon points="20,85 140,85 130,110 30,110" fill="none" stroke="currentColor" stroke-width="2"/>
  <polygon points="25,88 135,88 127,108 33,108" fill="currentColor" opacity="0.05"/>
  <!-- Crystal drops top tier -->
  <line x1="65" y1="50" x2="63" y2="62" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="63" cy="64" r="2" fill="currentColor" opacity="0.4"/>
  <line x1="80" y1="50" x2="80" y2="65" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="80" cy="67" r="2" fill="currentColor" opacity="0.4"/>
  <line x1="95" y1="50" x2="97" y2="62" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="97" cy="64" r="2" fill="currentColor" opacity="0.4"/>
  <!-- Crystal drops middle tier -->
  <line x1="45" y1="80" x2="42" y2="95" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="41,95 43,95 42,100" fill="currentColor" opacity="0.5"/>
  <line x1="70" y1="80" x2="68" y2="97" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="67,97 69,97 68,102" fill="currentColor" opacity="0.5"/>
  <line x1="110" y1="80" x2="112" y2="95" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="111,95 113,95 112,100" fill="currentColor" opacity="0.5"/>
  <!-- Bottom fringe -->
  <line x1="30" y1="110" x2="28" y2="130" stroke="currentColor" stroke-width="0.8"/>
  <line x1="50" y1="110" x2="48" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="80" y1="110" x2="80" y2="140" stroke="currentColor" stroke-width="0.8"/>
  <line x1="110" y1="110" x2="112" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="130" y1="110" x2="132" y2="130" stroke="currentColor" stroke-width="0.8"/>
  <circle cx="28" cy="132" r="2" fill="currentColor" opacity="0.6"/>
  <circle cx="48" cy="137" r="2.5" fill="currentColor" opacity="0.6"/>
  <circle cx="80" cy="142" r="3" fill="currentColor" opacity="0.6"/>
  <circle cx="112" cy="137" r="2.5" fill="currentColor" opacity="0.6"/>
  <circle cx="132" cy="132" r="2" fill="currentColor" opacity="0.6"/>
  <!-- Light glow -->
  <ellipse cx="80" cy="70" rx="50" ry="40" fill="currentColor" opacity="0.04"/>
</svg>
```

### 2) Gold Fringe Curtain

Hanging gold tassels that suggest a stage curtain or doorway drape.

```html
<div class="relative w-full h-24 overflow-hidden">
  <!-- Top bar -->
  <div class="w-full h-3 bg-gradient-to-b from-[#c4a043] to-[#8a6a1a]"></div>
  <!-- Fringe tassels -->
  <svg class="w-full h-21" viewBox="0 0 600 80" preserveAspectRatio="none">
    <defs>
      <linearGradient id="tassel-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c4a043"/>
        <stop offset="100%" stop-color="#d4b053" stop-opacity="0.6"/>
      </linearGradient>
    </defs>
    <!-- Generate tassels across the width -->
    <g stroke="url(#tassel-grad)" stroke-width="1.5" fill="none">
      <path d="M10,4 Q12,40 10,78"/><path d="M20,3 Q22,38 20,76"/>
      <path d="M30,5 Q32,42 30,80"/><path d="M40,3 Q42,36 40,74"/>
      <path d="M50,4 Q52,40 50,78"/><path d="M60,6 Q62,44 60,82"/>
      <path d="M70,3 Q72,38 70,76"/><path d="M80,4 Q82,40 80,78"/>
      <path d="M90,5 Q92,42 90,80"/><path d="M100,3 Q102,36 100,74"/>
      <path d="M110,4 Q112,40 110,78"/><path d="M120,6 Q122,44 120,82"/>
      <path d="M130,3 Q132,38 130,76"/><path d="M140,4 Q142,40 140,78"/>
      <path d="M150,5 Q152,42 150,80"/><path d="M160,3 Q162,36 160,74"/>
      <path d="M170,4 Q172,40 170,78"/><path d="M180,6 Q182,44 180,82"/>
      <path d="M190,3 Q192,38 190,76"/><path d="M200,4 Q202,40 200,78"/>
      <path d="M210,5 Q212,42 210,80"/><path d="M220,3 Q222,36 220,74"/>
      <path d="M230,4 Q232,40 230,78"/><path d="M240,6 Q242,44 240,82"/>
      <path d="M250,3 Q252,38 250,76"/><path d="M260,4 Q262,40 260,78"/>
      <path d="M270,5 Q272,42 270,80"/><path d="M280,3 Q282,36 280,74"/>
      <path d="M290,4 Q292,40 290,78"/><path d="M300,6 Q302,44 300,82"/>
      <path d="M310,3 Q312,38 310,76"/><path d="M320,4 Q322,40 320,78"/>
      <path d="M330,5 Q332,42 330,80"/><path d="M340,3 Q342,36 340,74"/>
      <path d="M350,4 Q352,40 350,78"/><path d="M360,6 Q362,44 360,82"/>
      <path d="M370,3 Q372,38 370,76"/><path d="M380,4 Q382,40 380,78"/>
      <path d="M390,5 Q392,42 390,80"/><path d="M400,3 Q402,36 400,74"/>
      <path d="M410,4 Q412,40 410,78"/><path d="M420,6 Q422,44 420,82"/>
      <path d="M430,3 Q432,38 430,76"/><path d="M440,4 Q442,40 440,78"/>
      <path d="M450,5 Q452,42 450,80"/><path d="M460,3 Q462,36 460,74"/>
      <path d="M470,4 Q472,40 470,78"/><path d="M480,6 Q482,44 480,82"/>
      <path d="M490,3 Q492,38 490,76"/><path d="M500,4 Q502,40 500,78"/>
      <path d="M510,5 Q512,42 510,80"/><path d="M520,3 Q522,36 520,74"/>
      <path d="M530,4 Q532,40 530,78"/><path d="M540,6 Q542,44 540,82"/>
      <path d="M550,3 Q552,38 550,76"/><path d="M560,4 Q562,40 560,78"/>
      <path d="M570,5 Q572,42 570,80"/><path d="M580,3 Q582,36 580,74"/>
      <path d="M590,4 Q592,40 590,78"/><path d="M600,6 Q602,44 600,82"/>
    </g>
  </svg>
</div>
```

### 3) Saxophone Silhouette

A stylized saxophone in profile — the signature instrument of jazz age nightlife.

```html
<svg viewBox="0 0 60 140" class="w-12 h-28 text-[#c4a043]">
  <!-- Bell -->
  <path d="M18,120 Q8,110 10,95 Q12,85 20,80 Q28,75 30,60 Q32,50 30,40 L30,25 Q30,18 35,15 L38,15 Q42,15 42,20 L42,40 Q44,55 42,70 Q40,80 42,90 Q44,100 38,115 Q35,125 28,130 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- Mouthpiece -->
  <path d="M35,15 L42,5 Q45,0 48,3 L42,15" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- Keys -->
  <circle cx="38" cy="50" r="2.5" fill="currentColor" opacity="0.5"/>
  <circle cx="40" cy="62" r="2.5" fill="currentColor" opacity="0.5"/>
  <circle cx="40" cy="74" r="2.5" fill="currentColor" opacity="0.5"/>
  <circle cx="38" cy="86" r="2.5" fill="currentColor" opacity="0.5"/>
  <!-- Bell flare detail -->
  <path d="M18,120 Q12,115 10,105" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
</svg>
```

### 4) Marble Staircase Curve

A sweeping curved staircase with Art Deco railing.

```html
<svg viewBox="0 0 200 100" class="w-full h-20">
  <!-- Steps -->
  <path d="M20,95 L20,85 L50,85 L50,75 L80,75 L80,65 L110,65 L110,55 L140,55 L140,45 L170,45 L170,35 L200,35" fill="none" stroke="#f0ece4" stroke-width="2"/>
  <!-- Marble fill -->
  <path d="M20,95 L20,85 L50,85 L50,75 L80,75 L80,65 L110,65 L110,55 L140,55 L140,45 L170,45 L170,35 L200,35 L200,100 L20,100 Z" fill="#f0ece4" opacity="0.15"/>
  <!-- Railing -->
  <path d="M15,88 Q40,75 75,68 Q110,60 145,48 Q165,42 195,32" fill="none" stroke="#c4a043" stroke-width="1.5"/>
  <!-- Railing posts -->
  <line x1="30" y1="90" x2="30" y2="82" stroke="#c4a043" stroke-width="1"/>
  <line x1="60" y1="80" x2="60" y2="72" stroke="#c4a043" stroke-width="1"/>
  <line x1="90" y1="70" x2="90" y2="62" stroke="#c4a043" stroke-width="1"/>
  <line x1="120" y1="60" x2="120" y2="52" stroke="#c4a043" stroke-width="1"/>
  <line x1="150" y1="50" x2="150" y2="42" stroke="#c4a043" stroke-width="1"/>
  <!-- Newel ball -->
  <circle cx="15" cy="88" r="4" fill="#c4a043" opacity="0.6"/>
</svg>
```

### 5) Cocktail Martini Glass

An elegant martini glass with a twist of garnish.

```html
<svg viewBox="0 0 80 120" class="w-16 h-24 text-[#c4a043]">
  <!-- Glass bowl (V shape) -->
  <path d="M10,15 L40,75 L70,15" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- Glass fill (champagne) -->
  <path d="M15,22 L40,70 L65,22 Z" fill="#f0e0b0" opacity="0.2"/>
  <!-- Liquid surface -->
  <line x1="15" y1="22" x2="65" y2="22" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <!-- Rim -->
  <ellipse cx="40" cy="15" rx="31" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="40" cy="15" rx="31" ry="5" fill="white" opacity="0.08"/>
  <!-- Stem -->
  <line x1="40" y1="75" x2="40" y2="100" stroke="currentColor" stroke-width="2"/>
  <!-- Base -->
  <ellipse cx="40" cy="102" rx="16" ry="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- Olive on pick -->
  <line x1="30" y1="8" x2="50" y2="8" stroke="currentColor" stroke-width="1"/>
  <circle cx="38" cy="8" r="4" fill="#80c040" opacity="0.6" stroke="currentColor" stroke-width="0.5"/>
  <circle cx="38" cy="8" r="1.5" fill="#e07060" opacity="0.8"/>
</svg>
```

### 6) Checkered Dance Floor

The classic black and white checkered ballroom floor.

```html
<div class="relative bg-[#0a0a0a] overflow-hidden">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="dance-floor" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="12.5" height="12.5" fill="#f0ece4"/>
        <rect x="12.5" y="0" width="12.5" height="12.5" fill="#0a0a0a"/>
        <rect x="0" y="12.5" width="12.5" height="12.5" fill="#0a0a0a"/>
        <rect x="12.5" y="12.5" width="12.5" height="12.5" fill="#f0ece4"/>
      </pattern>
    </defs>
    <rect width="200" height="100" fill="url(#dance-floor)"/>
    <!-- Perspective overlay -->
    <rect width="200" height="100" fill="url(#dance-floor)" opacity="0.8"
          transform="scale(1,0.7) translate(0,15)"/>
  </svg>
</div>
```

### 7) Trumpet Fanfare Accent

A trumpet with decorative sound waves for accent elements.

```html
<svg viewBox="0 0 140 60" class="w-28 h-12 text-[#c4a043]">
  <!-- Bell -->
  <ellipse cx="120" cy="30" rx="18" ry="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <!-- Tube -->
  <path d="M20,28 L102,28" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M20,32 L102,32" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- Valves -->
  <rect x="48" y="22" width="4" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="60" y="22" width="4" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <rect x="72" y="22" width="4" height="6" rx="1" fill="currentColor" opacity="0.5"/>
  <!-- Mouthpiece -->
  <path d="M10,26 Q8,30 10,34 L20,34 L20,26 Z" fill="currentColor" opacity="0.3"/>
  <!-- Sound waves -->
  <path d="M140,20 Q150,30 140,40" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
  <path d="M145,15 Q158,30 145,45" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.2"/>
  <path d="M150,10 Q166,30 150,50" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.1"/>
</svg>
```

### 8) Art Deco Fan Motif

A geometric fan shape used as a decorative divider or background accent.

```html
<svg viewBox="0 0 200 100" class="w-40 h-20 text-[#c4a043] opacity-30">
  <g fill="none" stroke="currentColor" stroke-width="0.8">
    <path d="M100,100 Q50,50 10,0"/>
    <path d="M100,100 Q60,55 25,5"/>
    <path d="M100,100 Q70,58 40,8"/>
    <path d="M100,100 Q80,60 55,10"/>
    <path d="M100,100 Q90,60 70,10"/>
    <path d="M100,100 Q100,60 100,0"/>
    <path d="M100,100 Q110,60 130,10"/>
    <path d="M100,100 Q120,60 145,10"/>
    <path d="M100,100 Q130,58 160,8"/>
    <path d="M100,100 Q140,55 175,5"/>
    <path d="M100,100 Q150,50 190,0"/>
  </g>
  <!-- Arc segments -->
  <path d="M10,0 Q55,15 100,0 Q145,15 190,0" fill="none" stroke="currentColor" stroke-width="0.5"/>
  <path d="M35,18 Q68,30 100,18 Q132,30 165,18" fill="none" stroke="currentColor" stroke-width="0.5"/>
  <path d="M58,38 Q78,45 100,38 Q122,45 142,38" fill="none" stroke="currentColor" stroke-width="0.5"/>
</svg>
```

### 9) Champagne Tower

A pyramid of champagne coupe glasses — the ultimate jazz age centerpiece.

```html
<svg viewBox="0 0 160 100" class="w-32 h-20 text-[#c4a043]">
  <!-- Top glass -->
  <g transform="translate(70,5)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.15" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
  <!-- Middle row (2 glasses) -->
  <g transform="translate(50,35)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.12" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
  <g transform="translate(90,35)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.12" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
  <!-- Bottom row (3 glasses) -->
  <g transform="translate(30,65)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.08" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
  <g transform="translate(70,65)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.08" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
  <g transform="translate(110,65)">
    <path d="M0,0 L-8,18 L8,18 Z" fill="#f0e0b0" opacity="0.08" stroke="currentColor" stroke-width="0.8"/>
    <line x1="0" y1="18" x2="0" y2="28" stroke="currentColor" stroke-width="1"/>
    <ellipse cx="0" cy="30" rx="6" ry="2" fill="none" stroke="currentColor" stroke-width="0.8"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Gold | `#c4a043` | Primary accent, chandeliers, trim |
| Black | `#0a0a0a` | Primary dark surface, midnight |
| Champagne | `#f0e0b0` | Warm highlight, liquid, glow |
| Marble White | `#f0ece4` | Light surface, dance floor light |
| Crystal Clear | `#e8f0ff` | Icy highlight, glass reflections |
| Midnight Blue | `#1a1a3a` | Deep accent, night sky depth |
| Coral | `#e07060` | Warm accent, lipstick, garnish |
| Silver | `#c0c0c0` | Cool metallic, chrome accents |
| Deep Gold | `#8a6a1a` | Shadow gold, depth |
| Warm Charcoal | `#2a2a2a` | Secondary dark, softer than black |

Rules: Gold on black dominates as the signature pairing. Champagne provides warm glow against dark surfaces. Marble white and crystal clear offer luminous contrast. Midnight blue adds depth without breaking the dark atmosphere. Coral is a rare accent for visual punctuation. Silver appears on chrome and metallic elements.

## Typography Recommendations

- **Display:** Poiret One, Josefin Sans Light, or Big Shoulders Display (geometric Art Deco with high contrast).
- **Alternative:** Bebas Neue, League Gothic (bold condensed marquee lettering).
- **Body:** Cormorant, Libre Baskerville (elegant serif for readable text).
- **Labels:** `font-sans font-light uppercase tracking-[0.25em] text-xs text-[#c4a043]` (neon marquee labeling).
- **Script accent:** Great Vibes or Alex Brush for ornamental script moments (guest list, VIP).

## Component Architecture Pattern

Jazz age ballroom UI follows a stage-and-audience model:

1. **Backdrop Layer:** Deep black or midnight blue with geometric Art Deco patterns (chevrons, sunbursts, fans).
2. **Stage Layer:** The illuminated focal area — gold panels, chandelier lighting, marquee text.
3. **Dress Layer:** Decorative gold fringe, chevron borders, fan motifs framing content areas.
4. **Floor Layer:** Checkered dance floor pattern or marble texture for grounding surfaces.
5. **Spotlight Layer:** Crystal clear highlights, champagne glows, and silver chrome accents that catch light.

Panels always have a geometric border or gold trim. Dark surfaces dominate with gold as the primary luminous accent. The composition should feel like looking into a lit ballroom from a dark corridor — the contrast between shadow and gold is the drama.

## Interaction Rules

- Hover on gold elements: `hover:shadow-[0_0_20px_rgba(196,160,67,0.3)] transition-all duration-300`.
- Hover on cards: `hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,160,67,0.15)] transition-all duration-300`.
- Buttons: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#0a0a0a] font-sans font-bold uppercase tracking-[0.15em] px-8 py-3 [clip-path:polygon(4px_0,calc(100%-4px)_0,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0_calc(100%-4px),0_4px)] hover:shadow-[0_0_16px_rgba(196,160,67,0.4)] transition-all`.
- Chandelier pulse: subtle `animate-pulse` with `opacity-80` on crystal drops (like light refracting).
- Dance floor: subtle CSS animation shifting the pattern background-position to suggest movement.
- Fringe sway: `@keyframes sway { 0%,100%{transform:skewX(0deg)} 50%{transform:skewX(2deg)} }` at 3s infinite.
- Transitions are confident and smooth: `transition-all duration-300 ease-out` — nothing sluggish, nothing frantic.

## Reusable Tailwind Tokens

- Gold-on-black: `bg-[#0a0a0a] text-[#c4a043] border-2 border-[#c4a043]`.
- Deco frame: `border-2 border-[#c4a043] p-1` inner `border border-[#c4a043] p-6 bg-[#0a0a0a]`.
- Ballroom button: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#0a0a0a] font-sans font-bold uppercase tracking-[0.15em] [clip-path:polygon(4px_0,...)]`.
- Midnight surface: `bg-[#0a0a0a] text-[#f0ece4]`.
- Midnight blue surface: `bg-[#1a1a3a] text-[#f0e0b0]`.
- Champagne glow: `shadow-[0_0_20px_rgba(240,224,176,0.15)]`.
- Crystal highlight: `text-[#e8f0ff]`.
- Coral accent: `text-[#e07060]` or `bg-[#e07060]` for emphasis.
- Silver chrome: `text-[#c0c0c0] bg-gradient-to-b from-[#c0c0c0] to-[#808080]`.
- Marquee label: `font-sans font-light uppercase tracking-[0.25em] text-xs text-[#c4a043]`.
- Chevron divider: SVG V-shapes in gold.
- Fan motif: SVG radiating lines from bottom center in gold.

## Quality Checklist

- At least one Art Deco geometric motif present (chevron, sunburst, fan, or stepped frame).
- Gold-on-black is the dominant surface treatment.
- At least one jazz age instrument silhouette (saxophone, trumpet, or piano keys).
- Checkered dance floor pattern or marble texture appears on at least one surface.
- Chandelier or crystal motif is present as a lighting element.
- Typography is geometric Art Deco display (Poiret One, Josefin Sans, Bebas Neue).
- The aesthetic reads as jazz age ballroom / speakeasy / Gatsby party.
- Gold fringe, fan motifs, or curtain elements frame at least one area.
- Color palette stays within the midnight-gold spectrum (black, gold, champagne, marble, midnight blue).
- Interaction states include gold glow effects on hover.
- The mood is glamorous, electric, and unapologetically opulent.

## Anti-Patterns

- Belle Epoque organic curves and botanical scrollwork (jazz age is geometric and angular).
- Muted earth tones or rustic palettes (this is opulent nightlife, not a country inn).
- Sans-serif body text at small sizes (use elegant serif for readability, geometric display for headings).
- Missing geometric ornaments (chevrons, fans, sunbursts are the architectural language).
- Asymmetrical compositions (jazz age ballroom design is symmetrical and balanced).
- Chrome or silver as the dominant metallic (gold is the star — silver is supporting).
- Casual or understated elements (everything in a ballroom is deliberate and dramatic).
- Green or purple as primary colors (this is gold-and-black luxury, not a Mardi Gras palette).
- Flat unornamented panels (every surface needs geometric decoration or gold trim).
- Fast snap animations (ballroom movements are confident and smooth, not twitchy).
- Missing the stepped/ziggurat shape (this is the Art Deco architectural signature).
- Warm whites or cream as the primary light color (use marble white `#f0ece4` or crystal clear `#e8f0ff` for the cool ballroom light).

## Accessibility Considerations

- Gold text on black must verify WCAG AA (gold `#c4a043` on black `#0a0a0a` passes for large text, verify at body size).
- Champagne text on dark backgrounds must verify contrast ratio — may need to brighten for small text.
- Focus states: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (gold ring on black).
- Decorative SVG elements (chandeliers, saxophones, fans, trumpets) must be `aria-hidden="true"`.
- Checkered dance floor patterns must not interfere with text overlay readability.
- Gold gradient button treatments can reduce contrast — verify text legibility on gradient.
- Clip-path octagonal buttons must not cut off interactive areas or text.
- Touch targets must maintain minimum 44px despite decorative border styling.
- Chandelier pulse animations must respect `prefers-reduced-motion`.
- Fringe sway animations must respect `prefers-reduced-motion`.
- The high-contrast geometric display fonts may be difficult at sizes below 12px — use body serif for small text.
- Dance floor pattern overlays need sufficient opacity difference from foreground text.
