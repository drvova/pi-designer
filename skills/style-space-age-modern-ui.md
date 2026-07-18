---
name: space-age-modern-ui
description: Build space age modern UI components (Googie architecture swoops, pod chair silhouettes, kidney-shaped desks, globe pendant lights, starburst radiating motifs, plastic laminate surfaces, Jetsons-style furniture) with retro-futuristic shapes, glossy plastic surfaces, chrome accents, and the optimistic space-age design of the 1960s Atomic era. Trigger this skill when the user asks for space age modern UI, Googie architecture design, Atomic era interface, Jetsons-style UI, retro-futuristic design, pod furniture aesthetic, plastic laminate surfaces, globe pendant accents, starburst radiating motifs, space age aesthetics, 1960s futurism, or atomic age design.
---

# Space Age Modern UI

Use this skill to design and implement bold, optimistic interfaces inspired by space age modern design (late 1950s-1960s): Googie architecture swooping rooflines, pod chair silhouettes on pedestals, kidney-shaped desk surfaces, globe pendant light accents, starburst radiating motifs, glossy plastic laminate surfaces, and the optimistic Jetsons-era vision of the future. Space age modern is the most visually aggressive mid-century offshoot -- it is the future as imagined from the present of 1962: sleek, plastic, chrome, and unapologetically bold.

## Non-Negotiable Foundations

- Space age modern is defined by RETRO-FUTURISTIC CURVATURE. Shapes swoop upward, taper to points, and curve in ways that suggest rockets, satellites, and orbital trajectories. The Googie upward-curving roofline is the structural signature -- elements should feel like they are launching or ascending.
- The palette is HIGH-CONTRAST and BOLD: plastic white, space black, atomic orange, cosmic blue, laminate red, and chrome silver. This is not a warm, earthy palette -- it is synthetic, glossy, and deliberately artificial. The materials are plastic, chrome, and laminate, not wood and fabric.
- Glossy plastic laminate surfaces are the material foundation. Smooth gradients with specular highlights evoke Formica countertops, molded plastic shells, and the gleaming surfaces of the 1960s vision of tomorrow. Every surface should feel manufactured, not grown.
- Globe pendant lights (translucent spheres with warm inner glow) are the signature lighting accent. These appear as header decorations, card ornaments, and section illuminators -- round, glowing, and unmistakably futuristic.
- Starburst radiating motifs (radiating lines from a central point, more geometric and precise than mid-century warm starbursts) appear as background patterns, card decorations, and section dividers. The space-age starburst is colder, sharper, and more mechanical than the warm atomic starburst of suburban mid-century.
- Chrome metallic accents (silver gradients, thin reflective strokes) provide the material counterpoint to plastic surfaces. Chrome represents the hardware -- legs, trim, structural connectors.
- The aesthetic is the Jetsons living room: optimistic, synthetic, bold, and confident that the future will be sleek and plastic. Not warm, not earthy, not nostalgic for nature.

## Core Material Recipes

### 1) Googie Swooping Container

The foundational space-age shape: an upward-curving container that evokes the Googie architecture roofline -- wider at the top, tapering and curving upward at the edges.

```html
<div class="bg-[#f5f5f5] relative overflow-hidden
            rounded-t-[60px] rounded-b-2xl
            shadow-[0_8px_30px_rgba(10,10,10,0.12)]
            border border-[#c0c0c0]/40">
  <!-- Specular highlight stripe (plastic gloss) -->
  <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
  <div class="relative px-8 pt-10 pb-8">
    <!-- Content in Googie swoop container -->
  </div>
</div>
```

Deeper swoop variant with more pronounced curvature:

```html
<div class="bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] relative overflow-hidden
            rounded-t-[80px] rounded-b-xl
            shadow-[0_12px_40px_rgba(10,10,10,0.15)]
            border-t-2 border-x border-b border-[#c0c0c0]/50">
  <div class="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
  <div class="relative px-8 pt-12 pb-8">
    <!-- Content -->
  </div>
</div>
```

### 2) Plastic Laminate Surface

Smooth, glossy surface with specular highlights evoking Formica and molded plastic.

```html
<div class="bg-gradient-to-b from-[#f5f5f5] via-[#f0f0f0] to-[#e5e5e5] relative overflow-hidden rounded-lg">
  <!-- Specular highlight band -->
  <div class="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none"></div>
  <!-- Subtle horizontal laminate grain -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none
              bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#0a0a0a_2px,#0a0a0a_3px)]"></div>
  <div class="relative p-6">
    <!-- Content on plastic surface -->
  </div>
</div>
```

Colored laminate variants:

Atomic orange laminate:

```html
<div class="bg-gradient-to-b from-[#e06030] via-[#d85828] to-[#cc5020] relative overflow-hidden rounded-lg">
  <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none"></div>
  <div class="relative p-6 text-white">
    <!-- Content -->
  </div>
</div>
```

Cosmic blue laminate:

```html
<div class="bg-gradient-to-b from-[#2a6aaa] via-[#2460a0] to-[#1e5690] relative overflow-hidden rounded-lg">
  <div class="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/25 via-white/8 to-transparent pointer-events-none"></div>
  <div class="relative p-6 text-white">
    <!-- Content -->
  </div>
</div>
```

### 3) Globe Pendant Light

Translucent sphere with warm inner glow -- the signature space-age lighting fixture.

```html
<div class="relative w-20 h-20">
  <!-- Outer glow aura -->
  <div class="absolute -inset-4 rounded-full bg-[#fff5d0]/20 blur-xl pointer-events-none"></div>
  <!-- Globe body -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#fff5d0] via-[#fff8e0] to-[#ffe880]
              shadow-[0_0_20px_rgba(255,245,208,0.3),inset_0_-4px_8px_rgba(0,0,0,0.05)]"></div>
  <!-- Specular highlight -->
  <div class="absolute top-2 left-3 w-6 h-4 rounded-full bg-white/50 blur-[2px]"></div>
  <!-- Mounting rod -->
  <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[#c0c0c0]"></div>
</div>
```

Large globe pendant (for headers):

```html
<div class="relative w-32 h-32">
  <div class="absolute -inset-8 rounded-full bg-[#fff5d0]/15 blur-2xl pointer-events-none"></div>
  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#fff8e0] via-[#fff5d0] to-[#ffe060]
              shadow-[0_0_40px_rgba(255,245,208,0.25),inset_0_-6px_12px_rgba(0,0,0,0.04)]"></div>
  <div class="absolute top-4 left-5 w-10 h-6 rounded-full bg-white/40 blur-[3px]"></div>
  <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#c0c0c0]"></div>
  <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-1.5 rounded-full bg-[#c0c0c0]"></div>
</div>
```

### 4) Starburst Radiating Motif

Sharp, geometric radiating lines from a central point -- the space-age decorative signature.

```html
<svg viewBox="0 0 200 200" class="w-32 h-32">
  <g stroke="#c0c0c0" stroke-width="1" stroke-linecap="round" opacity="0.4">
    <!-- 16 radiating lines of varying length -->
    <line x1="100" y1="100" x2="100" y2="15"/>
    <line x1="100" y1="100" x2="100" y2="185"/>
    <line x1="100" y1="100" x2="15" y2="100"/>
    <line x1="100" y1="100" x2="185" y2="100"/>
    <line x1="100" y1="100" x2="39" y2="39"/>
    <line x1="100" y1="100" x2="161" y2="39"/>
    <line x1="100" y1="100" x2="39" y2="161"/>
    <line x1="100" y1="100" x2="161" y2="161"/>
  </g>
  <g stroke="#e06030" stroke-width="1.5" stroke-linecap="round">
    <!-- Primary accent rays -->
    <line x1="100" y1="100" x2="100" y2="25"/>
    <line x1="100" y1="100" x2="175" y2="100"/>
    <line x1="100" y1="100" x2="45" y2="45"/>
    <line x1="100" y1="100" x2="155" y2="155"/>
  </g>
  <!-- Center hub -->
  <circle cx="100" cy="100" r="6" fill="#e06030"/>
  <circle cx="100" cy="100" r="3" fill="#f5f5f5"/>
</svg>
```

Starburst background pattern (tiled):

```html
<div class="bg-[#0a0a0a] relative">
  <div class="absolute inset-0 opacity-[0.06] pointer-events-none"
       style="background-image: url('data:image/svg+xml,...'); background-size: 120px 120px;"></div>
  <!-- Alternative: radial starburst lines via CSS -->
  <div class="absolute inset-0 pointer-events-none opacity-[0.04]"
       style="background: repeating-conic-gradient(from 0deg, #e06030 0deg 2deg, transparent 2deg 22.5deg); background-size: 120px 120px;"></div>
  <!-- Content -->
</div>
```

### 5) Pod Chair Silhouette

Round upholstered pod on a pedestal base -- the iconic space-age seating form.

```html
<svg viewBox="0 0 120 120" class="w-20 h-20">
  <!-- Pod shell -->
  <ellipse cx="60" cy="50" rx="42" ry="38" fill="#e08090" stroke="#c0c0c0" stroke-width="1.5"/>
  <!-- Inner cushion -->
  <ellipse cx="60" cy="48" rx="34" ry="30" fill="#e8909e"/>
  <!-- Cushion highlight -->
  <ellipse cx="52" cy="40" rx="16" ry="12" fill="#f0a0ae" opacity="0.4"/>
  <!-- Pedestal stem -->
  <rect x="57" y="86" width="6" height="16" rx="2" fill="#c0c0c0"/>
  <!-- Pedestal base -->
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="0.8"/>
</svg>
```

Pod chair in chrome variant (neutral seating):

```html
<svg viewBox="0 0 120 120" class="w-20 h-20">
  <ellipse cx="60" cy="50" rx="42" ry="38" fill="#e5e5e5" stroke="#c0c0c0" stroke-width="1.5"/>
  <ellipse cx="60" cy="48" rx="34" ry="30" fill="#f0f0f0"/>
  <ellipse cx="52" cy="40" rx="16" ry="12" fill="white" opacity="0.5"/>
  <rect x="57" y="86" width="6" height="16" rx="2" fill="#c0c0c0"/>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="0.8"/>
</svg>
```

### 6) Kidney-Shaped Desk Surface

Asymmetric organic desk form -- wider on one side, tapering on the other, evoking the kidney-shaped desks of space-age offices.

```html
<div class="bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] relative overflow-hidden
            rounded-[60%_40%_45%_55%/50%_60%_40%_50%]
            shadow-[0_6px_24px_rgba(10,10,10,0.12)]
            border border-[#c0c0c0]/50">
  <div class="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
  <div class="relative p-8">
    <!-- Content on kidney-shaped surface -->
  </div>
</div>
```

### 7) Space Age Button

Sleek, glossy button with chrome accents and bold color.

- Atomic orange: `bg-gradient-to-b from-[#e06030] to-[#cc5020] text-white font-bold uppercase tracking-[0.14em] px-8 py-3 rounded-full shadow-[0_4px_16px_rgba(224,96,48,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_8px_rgba(224,96,48,0.25)] hover:translate-y-[1px] transition-all duration-200 border border-[#e06030]/30`.
- Cosmic blue: `bg-gradient-to-b from-[#2a6aaa] to-[#1e5690] text-white font-bold uppercase tracking-[0.14em] px-8 py-3 rounded-full shadow-[0_4px_16px_rgba(42,106,170,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_2px_8px_rgba(42,106,170,0.25)] hover:translate-y-[1px] transition-all duration-200`.
- Chrome: `bg-gradient-to-b from-[#d8d8d8] to-[#b0b0b0] text-[#0a0a0a] font-bold uppercase tracking-[0.14em] px-8 py-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:translate-y-[1px] transition-all duration-200 border border-[#c0c0c0]`.
- Laminate red: `bg-gradient-to-b from-[#c44030] to-[#a83428] text-white font-bold uppercase tracking-[0.14em] px-8 py-3 rounded-full shadow-[0_4px_16px_rgba(196,64,48,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_2px_8px_rgba(196,64,48,0.2)] hover:translate-y-[1px] transition-all duration-200`.
- Ghost (on dark): `bg-transparent text-white font-bold uppercase tracking-[0.14em] px-8 py-3 rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-200`.

### 8) Chrome Trim Divider

Metallic divider strip evoking chrome trim on space-age furniture.

```html
<div class="relative h-1 bg-gradient-to-b from-[#e0e0e0] via-[#c0c0c0] to-[#a0a0a0] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
  <!-- Highlight line -->
  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>
```

### 9) Jetsons Swooping Header

Header element with the characteristic upward-sweeping Googie curve.

```html
<div class="bg-[#0a0a0a] relative overflow-hidden">
  <!-- Upward swooping curve -->
  <div class="absolute bottom-0 left-0 right-0 h-16">
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="w-full h-full">
      <path d="M0,60 Q300,0 600,30 Q900,60 1200,10 L1200,60 Z" fill="#f5f5f5"/>
    </svg>
  </div>
  <!-- Starburst accent -->
  <div class="absolute top-4 right-8 w-16 h-16 opacity-20">
    <svg viewBox="0 0 60 60">
      <g stroke="#e06030" stroke-width="1" stroke-linecap="round">
        <line x1="30" y1="30" x2="30" y2="5"/><line x1="30" y1="30" x2="30" y2="55"/>
        <line x1="30" y1="30" x2="5" y2="30"/><line x1="30" y1="30" x2="55" y2="30"/>
        <line x1="30" y1="30" x2="12" y2="12"/><line x1="30" y1="30" x2="48" y2="48"/>
        <line x1="30" y1="30" x2="48" y2="12"/><line x1="30" y1="30" x2="12" y2="48"/>
      </g>
    </svg>
  </div>
  <div class="relative px-8 py-8 text-white">
    <!-- Header content -->
  </div>
</div>
```

### 10) Orbiting Dots Decoration

Small circles orbiting a central point -- evoking satellites and planetary motion.

```html
<svg viewBox="0 0 120 120" class="w-24 h-24">
  <!-- Orbit rings -->
  <circle cx="60" cy="60" r="45" fill="none" stroke="#c0c0c0" stroke-width="0.5" opacity="0.3" stroke-dasharray="4 4"/>
  <circle cx="60" cy="60" r="30" fill="none" stroke="#c0c0c0" stroke-width="0.5" opacity="0.2" stroke-dasharray="3 3"/>
  <circle cx="60" cy="60" r="15" fill="none" stroke="#c0c0c0" stroke-width="0.5" opacity="0.15" stroke-dasharray="2 2"/>
  <!-- Central body -->
  <circle cx="60" cy="60" r="5" fill="#e06030"/>
  <!-- Orbiting dots -->
  <circle cx="105" cy="60" r="3" fill="#2a6aaa"/>
  <circle cx="60" cy="30" r="2.5" fill="#e08090"/>
  <circle cx="75" cy="60" r="2" fill="#c44030"/>
</svg>
```

## Color Palette System

### Space Age Modern Palette

| Color | Hex | Role |
|---|---|---|
| Plastic White | `#f5f5f5` | Primary surface, laminate backgrounds, light base |
| Space Black | `#0a0a0a` | Dark backgrounds, deep space, structural contrast |
| Atomic Orange | `#e06030` | Primary accent, energy, rocket fire, urgency |
| Cosmic Blue | `#2a6aaa` | Secondary accent, sky, space, cool counterpoint |
| Laminate Red | `#c44030` | Tertiary accent, heat, bold statement, warning |
| Globe Warm | `#fff5d0` | Light accent, lamp glow, warm highlights |
| Steel Chrome | `#c0c0c0` | Metallic trim, structural elements, hardware |
| Jetson Pink | `#e08090` | Upholstery accent, playful warmth, organic contrast |

Rules: Atomic orange and cosmic blue are the two hero accents -- they represent the bold optimism of space-age design and should appear prominently. Space black and plastic white provide the high-contrast structural canvas. Steel chrome is used for trim, borders, and structural connectors. Globe warm provides the only soft warmth in an otherwise synthetic palette. Jetson pink adds a playful organic counterpoint. Laminate red is used sparingly for high-emphasis elements. The palette should feel like the interior of a 1963 NASA control room redesigned by Charles Eames -- synthetic, confident, and unapologetically futuristic.

## Typography Recommendations

Space age modern typography is bold, geometric, and futuristic:

- **Display headings:** Space Grotesk, Orbitron, or Exo 2 (geometric sans-serif with futuristic character). `font-bold` to `font-black` for commanding presence. Orbitron for maximum retro-futuristic impact.
- **Secondary heading:** Space Grotesk, Inter, or DM Sans at `font-semibold` to `font-bold` -- clean and geometric.
- **Body:** Inter, DM Sans, or Work Sans at `font-normal` to `font-medium` -- neutral and highly readable.
- **Labels and caps:** `font-bold uppercase tracking-[0.18em] text-xs` -- wide tracking evokes technical readouts and control panel labels.
- **Monospace accent (sparingly):** JetBrains Mono or IBM Plex Mono for data, numbers, or technical readouts -- the one context where monospace fits the space-age aesthetic. Use only for small data displays, not body text.
- Avoid serif fonts entirely (space age is anti-ornamental, anti-historical).
- Avoid decorative or script fonts (the aesthetic is engineered, not handwritten).
- Consider all-caps for short labels and section names (space-age signage convention).

## Component Architecture Pattern

1. Space black (`#0a0a0a`) or dark background as the primary canvas (deep space ambiance).
2. Plastic white (`#f5f5f5`) Googie-swooped containers for content panels.
3. Glossy plastic laminate surfaces with specular highlights for cards and interactive surfaces.
4. Globe pendant light accents in headers and section transitions.
5. Chrome trim dividers between content sections.
6. Starburst radiating motifs as background decorations and card accents.
7. Atomic orange and cosmic blue on interactive elements and CTAs.
8. Bold geometric sans-serif typography, wide-tracked labels.
9. Pod chair and orbiting dots as decorative brand elements.
10. High contrast between dark backgrounds and bright content containers.

## Interaction Rules

- Default state: sleek, glossy, confidently futuristic.
- Hover: elements glow with a subtle luminous expansion.
  - `hover:shadow-[0_8px_30px_rgba(224,96,48,0.2)] hover:-translate-y-0.5 transition-all duration-200` (subtle upward lift with colored glow).
- Buttons: glossy press with chrome-like highlight shift.
  - `hover:shadow-[0_2px_8px_rgba(224,96,48,0.25)] hover:translate-y-[1px] transition-all duration-200`
  - `active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] active:translate-y-[2px]` (sinks with inset shadow).
- Cards: subtle lift with shadow expansion.
  - `hover:shadow-[0_12px_36px_rgba(10,10,10,0.2)] hover:-translate-y-1 transition-all duration-250`
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#e06030] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (atomic orange ring on dark offset).
- Transitions: `duration-200` (snappy, precise, engineered -- like a mechanism engaging).
- Globe lights: subtle pulse animation `animate-pulse` at very low opacity for ambient glow.
- Starburst decorations: slow rotation `animate-[spin_30s_linear_infinite]` for background motifs.
- No organic easing or weight -- motion is precise and mechanical, like machinery.

## Reusable Tailwind Tokens

- Space black canvas: `bg-[#0a0a0a]`
- Plastic white surface: `bg-[#f5f5f5]`
- Googie swoop container: `rounded-t-[60px] rounded-b-2xl shadow-[0_8px_30px_rgba(10,10,10,0.12)] border border-[#c0c0c0]/40`
- Plastic laminate: `bg-gradient-to-b from-[#f5f5f5] via-[#f0f0f0] to-[#e5e5e5]` with specular highlight `h-8 bg-gradient-to-b from-white/70 to-transparent`
- Orange laminate: `bg-gradient-to-b from-[#e06030] via-[#d85828] to-[#cc5020]`
- Blue laminate: `bg-gradient-to-b from-[#2a6aaa] via-[#2460a0] to-[#1e5690]`
- Atomic orange button: `bg-gradient-to-b from-[#e06030] to-[#cc5020] text-white font-bold uppercase tracking-[0.14em] rounded-full shadow-[0_4px_16px_rgba(224,96,48,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]`
- Cosmic blue button: `bg-gradient-to-b from-[#2a6aaa] to-[#1e5690] text-white font-bold uppercase tracking-[0.14em] rounded-full shadow-[0_4px_16px_rgba(42,106,170,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]`
- Chrome button: `bg-gradient-to-b from-[#d8d8d8] to-[#b0b0b0] text-[#0a0a0a] font-bold uppercase tracking-[0.14em] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] border border-[#c0c0c0]`
- Chrome trim divider: `h-1 bg-gradient-to-b from-[#e0e0e0] via-[#c0c0c0] to-[#a0a0a0] rounded-full`
- Display heading: `font-sans text-5xl font-black tracking-tight text-white`
- Body text: `font-sans text-base font-normal text-[#f5f5f5]` (on dark) or `text-[#0a0a0a]` (on light)
- Label: `font-sans font-bold uppercase tracking-[0.18em] text-xs text-[#c0c0c0]`
- Data readout: `font-mono text-sm font-medium text-[#e06030]`
- Globe glow: `shadow-[0_0_20px_rgba(255,245,208,0.3)]`
- Deep space shadow: `shadow-[0_12px_40px_rgba(10,10,10,0.2)]`
- Specular highlight: `bg-gradient-to-b from-white/70 via-white/20 to-transparent h-8`

## Quality Checklist (must pass)

- At least one Googie-swooping container (upward-curving rounded top, tapering form).
- Plastic laminate surface with specular highlight gradient present.
- Globe pendant light accent present (translucent sphere with inner glow and mounting rod).
- Starburst radiating motif present (geometric radiating lines from center).
- High-contrast palette: space black and plastic white in prominent roles.
- Atomic orange and cosmic blue both present as accent colors.
- Chrome trim element present (metallic gradient divider or structural accent).
- Typography is geometric sans-serif (Space Grotesk, Orbitron, Exo 2, Inter -- never serif).
- Glossy specular highlights on surfaces (the material is plastic, not matte).
- Wide-tracked uppercase labels for technical/section markers.
- The aesthetic reads as 1960s retro-futuristic optimism -- synthetic, bold, and confident.
- At least one decorative element references space-age forms (orbiting pods, swoops, starbursts).
- Dark background framing for the primary composition (deep space ambiance).
- Interactive elements have glossy press effects with inset shadows on active.

## Anti-Patterns

- Warm earth-tone palette (space age is synthetic, not organic -- no teak, no walnut, no shag cream).
- Wood grain textures or natural materials (space age is plastic, chrome, and laminate).
- Rounded-everything without direction (space-age curves swoop UPWARD -- they are directional, not symmetrical).
- Matte or flat surfaces without specular highlights (the material is glossy plastic).
- Pure white backgrounds without structure (use space black as the primary canvas).
- Serif typography (space age is engineered and futuristic -- no historical reference).
- Soft, cushioned shadows (space-age shadows are crisp and defined, not plush).
- Slow, weighted animations (motion is precise and mechanical, not organic and cushioned).
- Missing chrome or metallic accents (chrome is the structural material of the future).
- Earthy or muted colors (the palette is bold, saturated, and synthetic).
- Missing the specular highlight band on surfaces (plastic gloss is foundational).
- Warm brown or amber tones in the palette (space age uses cool chrome, warm globe glow, but no earth tones).
- Organic, asymmetric border-radius without direction (kidney shapes are present but swooping is directional).
- Missing the Googie upward sweep (this is THE defining structural element).
- Overly complex decoration (space age is bold and clean, not ornate).

## Accessibility Considerations

- Atomic orange (`#e06030`) on space black (`#0a0a0a`) provides strong contrast -- safe for all text sizes.
- Plastic white (`#f5f5f5`) on space black provides maximum contrast -- safe for all text sizes.
- Cosmic blue (`#2a6aaa`) text on white needs testing -- may require darkening for body text. Use for large headings only on white, or use white text on cosmic blue.
- Globe warm (`#fff5d0`) on dark backgrounds provides good contrast for large text; use dark text for body copy.
- Chrome gray (`#c0c0c0`) text on white fails contrast -- use only for large decorative text or on dark backgrounds.
- Focus states must be visible: `focus:ring-2 focus:ring-[#e06030] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]` (atomic orange on dark offset).
- Decorative SVG elements (starbursts, orbiting dots, pod chairs) must be `aria-hidden="true"` and `pointer-events-none`.
- Globe glow pulse animation must respect `prefers-reduced-motion` -- reduce to static glow.
- Specular highlight overlays must not reduce text contrast below WCAG AA.
- Touch targets must meet minimum 44x44px despite glossy, rounded styling.
- Color should never be the sole differentiator -- atomic orange and laminate red can be confused by colorblind users; pair with text labels and positional context.
- Starburst background patterns must not create visual vibration or moire effects at any zoom level -- test at 200% browser zoom.
- The Googie swoop containers must maintain logical content hierarchy regardless of the asymmetric shape.
