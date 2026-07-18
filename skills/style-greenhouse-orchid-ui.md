---
name: greenhouse-orchid-ui
description: Build greenhouse orchid UI components (glass pane, orchid bloom, aerial root, humidity mist, bark mount, tropical leaf, water tray) with delicate orchid flowers, humid glass surfaces, and the refined beauty of orchid cultivation. Trigger this skill when the user asks for orchid UI, greenhouse orchid design, orchid bloom interface, orchid cultivation UI, tropical orchid components, aerial root animation, humidity mist effect, bark mount display, orchid flower shape, glass pane greenhouse, water tray, or orchid growing environment interfaces.
---

# Greenhouse Orchid UI

Use this skill to design and build interfaces inspired by a refined orchid cultivation greenhouse: translucent glass pane surfaces with green-tinted light filtering through, elegant multi-petal orchid blooms as focal elements, delicate aerial roots curving downward from mounted orchids, fine humidity mist drifting between leaves, rough bark mounts where orchids are anchored, broad tropical leaf accents providing green contrast, and shallow water trays collecting condensation. Every surface should feel like warm humid glass, rough organic bark, and the delicate precision of orchid cultivation where every drop of water and every ray of light is carefully managed.

## Non-Negotiable Foundations

- The orchid greenhouse is a place of refined cultivation: orchids mounted on bark inside a humid glass enclosure, aerial roots reaching through moist air, tropical leaves providing shade, and shallow water trays maintaining humidity. The orchid bloom is the centerpiece -- the most detailed, most colorful, most carefully rendered element.
- Materials are organic and humid: glass panels with green tint (the greenhouse envelope), orchid petals (delicate purple-white-pink gradients), rough bark (dark brown textured wood for mounting), aerial roots (thin pale green-white curved tendrils), tropical leaves (broad dark green surfaces), and shallow ceramic water trays (pale blue-gray).
- Colors are orchid purple, orchid pink, orchid white, bark brown, leaf green, glass green-tint, mist white-translucent, and water clear. The palette balances the vivid bloom against subdued organic support materials.
- Motion is gentle and organic: humidity mist drifts slowly, aerial roots sway imperceptibly, water surface shimmers, and orchid petals catch light with subtle opacity shifts. Nothing in an orchid greenhouse moves abruptly -- growth and humidity are patient forces.
- Typography blends botanical precision (scientific Latin names in italic serif) with warm greenhouse labeling on small ceramic or wooden plant tags.
- The aesthetic is refined, humid, and meticulously cultivated -- everything should feel like the product of patient expertise where rare orchids thrive under careful glass-and-water management.

## Core Material Recipes

### 1) Orchid Bloom (the centerpiece flower)

The signature orchid element: an elegant multi-petal flower with the characteristic orchid shape -- three sepals, two petals, and a distinctive lip (labellum). Each petal has a gradient from white center to colored edge.

```html
<svg viewBox="0 0 120 140" class="w-30 h-36">
  <!-- Stem -->
  <path d="M60,140 Q58,120 62,100 Q64,85 60,70" fill="none" stroke="#1a4a2a" stroke-width="2"/>
  <!-- Small leaf on stem -->
  <ellipse cx="56" cy="110" rx="8" ry="4" fill="#1a4a2a" opacity="0.6" transform="rotate(-30 56 110)"/>
  <!-- Bloom group -->
  <g transform="translate(60,55)">
    <!-- Top sepal -->
    <path d="M0,-35 Q-8,-28 -5,-18 Q-2,-12 0,-10 Q2,-12 5,-18 Q8,-28 0,-35Z" fill="url(#orchid-sepal-gradient)"/>
    <!-- Left sepal -->
    <path d="M-15,-28 Q-25,-20 -22,-10 Q-18,-4 -12,-2 Q-10,-8 -12,-18 Q-10,-24 -15,-28Z" fill="url(#orchid-sepal-gradient)" opacity="0.85"/>
    <!-- Right sepal -->
    <path d="M15,-28 Q25,-20 22,-10 Q18,-4 12,-2 Q10,-8 12,-18 Q10,-24 15,-28Z" fill="url(#orchid-sepal-gradient)" opacity="0.85"/>
    <!-- Left petal -->
    <path d="M-12,-8 Q-22,-2 -25,8 Q-22,15 -14,16 Q-10,14 -8,8 Q-6,2 -12,-8Z" fill="url(#orchid-petal-gradient)"/>
    <!-- Right petal -->
    <path d="M12,-8 Q22,-2 25,8 Q22,15 14,16 Q10,14 8,8 Q6,2 12,-8Z" fill="url(#orchid-petal-gradient)"/>
    <!-- Lip (labellum) - the distinctive orchid feature -->
    <path d="M-8,6 Q-12,12 -10,20 Q-6,28 0,30 Q6,28 10,20 Q12,12 8,6 Q4,10 0,12 Q-4,10 -8,6Z" fill="url(#orchid-lip-gradient)"/>
    <!-- Lip detail spots -->
    <circle cx="-3" cy="16" r="1" fill="#8a40a0" opacity="0.5"/>
    <circle cx="3" cy="16" r="1" fill="#8a40a0" opacity="0.5"/>
    <circle cx="0" cy="20" r="0.8" fill="#8a40a0" opacity="0.4"/>
    <!-- Column (center reproductive structure) -->
    <ellipse cx="0" cy="-4" rx="3" ry="5" fill="#f5f0f5" opacity="0.8"/>
    <ellipse cx="0" cy="-6" rx="1.5" ry="2" fill="#e0a0c0" opacity="0.6"/>
  </g>
  <!-- Gradient definitions -->
  <defs>
    <linearGradient id="orchid-sepal-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5f0f5"/>
      <stop offset="60%" stop-color="#e0a0c0"/>
      <stop offset="100%" stop-color="#8a40a0"/>
    </linearGradient>
    <linearGradient id="orchid-petal-gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5f0f5"/>
      <stop offset="50%" stop-color="#e8b0d0"/>
      <stop offset="100%" stop-color="#c070a0"/>
    </linearGradient>
    <linearGradient id="orchid-lip-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c070a0"/>
      <stop offset="40%" stop-color="#8a40a0"/>
      <stop offset="100%" stop-color="#6a2080"/>
    </linearGradient>
  </defs>
</svg>
```

Tailwind shortcut for the SVG container: `w-30 h-36` (or adjust size with `w-20 h-24` for small accents, `w-40 h-48` for hero displays).

### 2) Bark Mount Card

A rough-textured bark surface where an orchid is mounted -- the organic anchor point. Bark has deep vertical grooves, rough edges, and dark brown tones.

- Bark surface: `bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#4a2a0a] border border-[#3a2a0a] rounded-lg relative overflow-hidden` with vertical groove lines.
- Groove texture: `before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_5px)]`.

```html
<div class="relative w-40 h-56 bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#4a2a0a] border border-[#3a2a0a] rounded-lg overflow-hidden">
  <!-- Bark groove texture -->
  <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.12)_4px,rgba(0,0,0,0.12)_5px)]"></div>
  <!-- Rough edge highlights -->
  <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7a5a3a] via-[#6a4a2a] to-[#7a5a3a] opacity-60"></div>
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3a2a0a] via-[#4a2a0a] to-[#3a2a0a] opacity-80"></div>
  <!-- Moss patch on bark -->
  <div class="absolute bottom-4 left-3 w-8 h-4 bg-[#2a6a2a]/30 rounded-full blur-[2px]"></div>
  <div class="absolute top-8 right-2 w-6 h-3 bg-[#2a6a2a]/20 rounded-full blur-[2px]"></div>
  <!-- Mounting wire (thin line wrapping around bark) -->
  <div class="absolute top-[30%] left-0 right-0 h-px bg-[#8a8a7a]/40"></div>
  <div class="absolute top-[60%] left-0 right-0 h-px bg-[#8a8a7a]/30"></div>
  <!-- Content area for orchid placement -->
  <div class="relative z-10 flex items-center justify-center h-full p-4">
    <!-- Orchid placed here -->
  </div>
</div>
```

### 3) Glass Pane Surface (greenhouse panel)

A translucent green-tinted glass panel that forms the greenhouse envelope. Light filters through with a warm green cast, and humidity is visible as slight fogging.

- Glass pane: `bg-gradient-to-br from-[#d0e8d0]/25 to-[#b8d8b8]/15 backdrop-blur-sm border border-[#a0c8a0]/30 rounded-lg relative overflow-hidden`.
- Green tint overlay: `bg-[#2a6a2a]/5` as a color wash.
- Light ray: `bg-gradient-to-br from-white/15 via-transparent to-transparent` diagonal stripe.

```html
<div class="relative bg-gradient-to-br from-[#d0e8d0]/25 to-[#b8d8b8]/15 backdrop-blur-sm border border-[#a0c8a0]/30 rounded-lg overflow-hidden">
  <!-- Green tint wash -->
  <div class="absolute inset-0 bg-[#2a6a2a]/5 pointer-events-none"></div>
  <!-- Light ray through glass -->
  <div class="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-white/12 via-white/5 to-transparent pointer-events-none"></div>
  <!-- Humidity fog on glass -->
  <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/8 to-transparent pointer-events-none"></div>
  <!-- Condensation droplets -->
  <div class="absolute top-[15%] left-[20%] w-1 h-1.5 bg-white/30 rounded-full"></div>
  <div class="absolute top-[25%] left-[65%] w-0.5 h-1 bg-white/25 rounded-full"></div>
  <div class="absolute top-[40%] right-[15%] w-1 h-1 bg-white/20 rounded-full"></div>
  <!-- Content area -->
  <div class="relative z-10 p-6">
    <!-- Panel content -->
  </div>
</div>
```

### 4) Aerial Root Animation

Delicate pale roots curving downward from the orchid, slowly swaying in humid air. These roots are thin, slightly translucent, and move with barely perceptible drift.

```css
@keyframes orchid-aerial-root-sway {
  0%, 100% { transform: rotate(-1deg) translateX(0); }
  25% { transform: rotate(0.5deg) translateX(1px); }
  50% { transform: rotate(1deg) translateX(0); }
  75% { transform: rotate(-0.5deg) translateX(-1px); }
}
.orchid-aerial-root-sway {
  transform-origin: top center;
  animation: orchid-aerial-root-sway 8s ease-in-out infinite;
}
```

```html
<!-- Aerial roots hanging from orchid mount -->
<div class="flex flex-col items-center">
  <!-- Root attachment point -->
  <div class="w-3 h-1.5 bg-[#2a6a2a]/40 rounded-full"></div>
  <!-- Root 1: long, gentle curve -->
  <svg viewBox="0 0 20 60" class="w-5 h-16 orchid-aerial-root-sway" style="animation-delay: 0s">
    <path d="M10,0 Q8,15 12,30 Q14,45 10,60" fill="none" stroke="#8ab88a" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M10,0 Q8,15 12,30 Q14,45 10,60" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" opacity="0.2"/>
  </svg>
  <!-- Root 2: shorter, different curve -->
  <svg viewBox="0 0 20 45" class="w-5 h-12 orchid-aerial-root-sway -mt-8 -ml-2" style="animation-delay: 2s">
    <path d="M10,0 Q6,12 9,25 Q11,35 8,45" fill="none" stroke="#9ac89a" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
  </svg>
  <!-- Root 3: thin, wispy -->
  <svg viewBox="0 0 20 50" class="w-5 h-14 orchid-aerial-root-sway -mt-10 ml-1" style="animation-delay: 4s">
    <path d="M10,0 Q12,10 8,22 Q6,35 11,50" fill="none" stroke="#a0d0a0" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  </svg>
</div>
```

Root colors range from `#8ab88a` (older, thicker) to `#a0d0a0` (newer, thinner). Each root has a slightly different sway timing to prevent synchronization. The white highlight stroke suggests the translucent root tip.

### 5) Humidity Mist Effect

Fine water vapor drifting through the greenhouse -- soft white blur patches that drift horizontally at very low opacity, creating the humid atmosphere essential for orchids.

```html
<!-- Static mist atmosphere -->
<div class="absolute inset-0 pointer-events-none overflow-hidden">
  <div class="absolute top-[10%] left-[5%] w-[280px] h-[80px] bg-white/5 rounded-full blur-[50px]"></div>
  <div class="absolute top-[35%] right-[8%] w-[220px] h-[70px] bg-white/4 rounded-full blur-[45px]"></div>
  <div class="absolute bottom-[20%] left-[25%] w-[300px] h-[60px] bg-white/3 rounded-full blur-[55px]"></div>
</div>
```

Drifting animation for active mist:
```html
<div class="absolute top-[15%] left-0 w-[350px] h-[80px] bg-white/4 rounded-full blur-[50px] orchid-mist-drift"></div>
<div class="absolute top-[45%] right-0 w-[280px] h-[60px] bg-white/3 rounded-full blur-[45px] orchid-mist-drift-reverse"></div>

<style>
@keyframes orchid-mist-drift {
  0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.04; }
  50% { transform: translateX(60px) scaleX(1.2); opacity: 0.06; }
}
@keyframes orchid-mist-drift-reverse {
  0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.03; }
  50% { transform: translateX(-50px) scaleX(1.15); opacity: 0.05; }
}
.orchid-mist-drift {
  animation: orchid-mist-drift 18s ease-in-out infinite;
}
.orchid-mist-drift-reverse {
  animation: orchid-mist-drift-reverse 22s ease-in-out infinite;
}
</style>
```

### 6) Tropical Leaf Accent

Broad, dark green tropical leaves used as accent elements -- they provide visual weight and contrast against the delicate orchid petals. Leaves are slightly glossy with visible veins.

```html
<!-- Single tropical leaf -->
<svg viewBox="0 0 80 50" class="w-20 h-12 opacity-30">
  <g transform="rotate(-15 40 25)">
    <!-- Leaf body -->
    <path d="M5,25 Q15,5 40,3 Q65,5 75,25 Q65,45 40,47 Q15,45 5,25Z" fill="#1a4a2a"/>
    <!-- Central vein -->
    <path d="M5,25 Q40,23 75,25" fill="none" stroke="#2a5a3a" stroke-width="1" opacity="0.6"/>
    <!-- Side veins -->
    <path d="M20,15 Q30,20 25,25" fill="none" stroke="#2a5a3a" stroke-width="0.5" opacity="0.4"/>
    <path d="M35,10 Q40,18 38,23" fill="none" stroke="#2a5a3a" stroke-width="0.5" opacity="0.4"/>
    <path d="M55,12 Q50,18 52,23" fill="none" stroke="#2a5a3a" stroke-width="0.5" opacity="0.4"/>
    <path d="M20,35 Q30,30 25,25" fill="none" stroke="#2a5a3a" stroke-width="0.5" opacity="0.4"/>
    <path d="M35,40 Q40,32 38,27" fill="none" stroke="#2a5a3a" stroke-width="0.5" opacity="0.4"/>
    <!-- Gloss highlight -->
    <path d="M25,10 Q35,8 50,10 Q45,12 30,14Z" fill="white" opacity="0.1"/>
  </g>
</svg>
```

Place at varying sizes and rotations: `opacity-15 rotate-[-20deg]`, `opacity-25 rotate-[30deg]`, `opacity-10 rotate-[10deg]`. Never make leaves the focal point -- they frame and support the orchid.

### 7) Water Tray Element

A shallow ceramic tray that collects water beneath the orchid display -- the base of the cultivation setup. Pale blue-gray with a subtle water surface sheen.

```html
<div class="relative w-48 h-6 mx-auto">
  <!-- Tray body -->
  <div class="w-full h-full bg-gradient-to-b from-[#c8d0d8] to-[#b0b8c0] border border-[#a0a8b0] rounded-b-xl rounded-t-sm shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)]"></div>
  <!-- Water surface inside tray -->
  <div class="absolute top-1 left-1 right-1 h-3 bg-gradient-to-b from-[#a0c8e0]/40 to-[#80b0d0]/20 rounded-sm border border-[#90b8d0]/20">
    <!-- Water shimmer -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent orchid-water-shimmer"></div>
  </div>
  <!-- Rim highlight -->
  <div class="absolute top-0 left-2 right-2 h-px bg-white/30 rounded-full"></div>
</div>
```

```css
@keyframes orchid-water-shimmer {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}
.orchid-water-shimmer {
  animation: orchid-water-shimmer 6s ease-in-out infinite;
}
```

### 8) Orchid Greenhouse Card

A complete orchid display card combining glass pane, orchid bloom, bark mount, and aerial roots into a single cohesive component.

```html
<div class="relative bg-gradient-to-br from-[#d0e8d0]/20 to-[#b8d8b8]/10 backdrop-blur-sm border border-[#a0c8a0]/25 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(26,74,42,0.1)]">
  <!-- Glass tint -->
  <div class="absolute inset-0 bg-[#2a6a2a]/5 pointer-events-none"></div>
  <!-- Light ray -->
  <div class="absolute top-0 right-0 w-[35%] h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10 p-6 flex flex-col items-center gap-4">
    <!-- Orchid bloom on bark mount -->
    <div class="relative">
      <!-- Bark mount behind orchid -->
      <div class="absolute inset-x-0 top-1/4 bottom-0 bg-gradient-to-b from-[#6a4a2a] to-[#4a2a0a] rounded-lg border border-[#3a2a0a] opacity-60"></div>
      <!-- Orchid (use the SVG from recipe 1, scaled down) -->
      <div class="relative z-10">
        <svg viewBox="0 0 120 100" class="w-24 h-20">
          <g transform="translate(60,50) scale(0.7)">
            <path d="M0,-35 Q-8,-28 -5,-18 Q-2,-12 0,-10 Q2,-12 5,-18 Q8,-28 0,-35Z" fill="#e0a0c0"/>
            <path d="M-15,-28 Q-25,-20 -22,-10 Q-18,-4 -12,-2 Q-10,-8 -12,-18 Q-10,-24 -15,-28Z" fill="#d890b0" opacity="0.85"/>
            <path d="M15,-28 Q25,-20 22,-10 Q18,-4 12,-2 Q10,-8 12,-18 Q10,-24 15,-28Z" fill="#d890b0" opacity="0.85"/>
            <path d="M-12,-8 Q-22,-2 -25,8 Q-22,15 -14,16 Q-10,14 -8,8 Q-6,2 -12,-8Z" fill="#f0d0e0"/>
            <path d="M12,-8 Q22,-2 25,8 Q22,15 14,16 Q10,14 8,8 Q6,2 12,-8Z" fill="#f0d0e0"/>
            <path d="M-8,6 Q-12,12 -10,20 Q-6,28 0,30 Q6,28 10,20 Q12,12 8,6 Q4,10 0,12 Q-4,10 -8,6Z" fill="#8a40a0"/>
            <ellipse cx="0" cy="-4" rx="3" ry="5" fill="#f5f0f5" opacity="0.8"/>
          </g>
        </svg>
      </div>
    </div>
    <!-- Aerial roots -->
    <div class="flex gap-2 -mt-4">
      <svg viewBox="0 0 10 30" class="w-2.5 h-8 opacity-40 orchid-aerial-root-sway">
        <path d="M5,0 Q3,10 6,20 Q7,25 5,30" fill="none" stroke="#8ab88a" stroke-width="1" stroke-linecap="round"/>
      </svg>
      <svg viewBox="0 0 10 25" class="w-2.5 h-6 opacity-35 orchid-aerial-root-sway" style="animation-delay:3s">
        <path d="M5,0 Q7,8 4,18 Q3,22 5,25" fill="none" stroke="#9ac89a" stroke-width="0.8" stroke-linecap="round"/>
      </svg>
      <svg viewBox="0 0 10 35" class="w-2.5 h-9 opacity-30 orchid-aerial-root-sway" style="animation-delay:5s">
        <path d="M5,0 Q4,12 7,24 Q8,30 5,35" fill="none" stroke="#a0d0a0" stroke-width="0.8" stroke-linecap="round"/>
      </svg>
    </div>
    <!-- Label -->
    <div class="text-center">
      <p class="font-serif italic text-sm text-[#1a4a2a]">Phalaenopsis amabilis</p>
      <p class="font-serif text-xs text-[#1a4a2a]/50 mt-1">Moth Orchid</p>
    </div>
  </div>
  <!-- Water tray at bottom -->
  <div class="mx-6 mb-4 h-4 bg-gradient-to-b from-[#c8d0d8] to-[#b0b8c0] border border-[#a0a8b0] rounded-b-lg shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1)]">
    <div class="mx-1 mt-0.5 h-2 bg-[#a0c8e0]/20 rounded-sm"></div>
  </div>
</div>
```

### 9) Orchid Greenhouse Button

A glass-pane button with green tint and organic warmth -- like a small greenhouse panel you can press.

- `relative bg-[#d0e8d0]/25 backdrop-blur-sm border border-[#a0c8a0]/40 rounded-full px-8 py-3 text-[#1a4a2a] font-serif font-medium shadow-[0_0_12px_rgba(26,74,42,0.1)] hover:bg-[#d0e8d0]/35 hover:shadow-[0_0_20px_rgba(42,106,42,0.15)] transition-all duration-500`.
- Add a subtle green glow: `after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-[#2a6a2a]/5 after:blur-md after:-z-10`.

### 10) Orchid Bloom Pulse Animation

A very subtle opacity and scale pulse on orchid petals, simulating the orchid breathing in humid air -- alive but barely perceptible.

```css
@keyframes orchid-bloom-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.02); opacity: 0.92; }
}
.orchid-bloom-pulse {
  animation: orchid-bloom-pulse 5s ease-in-out infinite;
  transform-origin: center center;
}
```

Use on orchid SVGs: `orchid-bloom-pulse` class. The 5% scale change and 8% opacity change are at the threshold of perception -- the orchid feels alive without being noticeably animated.

## Color Palette System

### Core Orchid Greenhouse Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Orchid Purple | `#8a40a0` | Deep orchid lip | Primary bloom color, lip/labellum |
| Orchid Purple Light | `#a050b8` | Mid orchid | Petal mid-tones, secondary bloom |
| Orchid White | `#f5f0f5` | White orchid | Petal centers, column, light accents |
| Orchid Pink | `#e0a0c0` | Pink orchid | Petal edges, secondary flowers |
| Orchid Pink Light | `#f0d0e0` | Pale pink | Petal highlights, blush tones |
| Orchid Pink Deep | `#c070a0` | Deep pink | Petal shadows, lip details |
| Bark Brown | `#5a3a1a` | Rough bark | Mount surface, organic anchor |
| Bark Light | `#6a4a2a` | Lit bark | Bark highlights, mount edges |
| Bark Dark | `#4a2a0a` | Shadow bark | Bark shadows, deep grooves |
| Leaf Dark Green | `#1a4a2a` | Deep foliage | Leaf bodies, stem, deep accents |
| Leaf Mid Green | `#2a6a2a` | Green foliage | Leaf veins, moss, secondary green |
| Leaf Light Green | `#3a8a3a` | Bright foliage | Leaf highlights, new growth |
| Glass Green-Tint | `#d0e8d0` | Translucent glass | Greenhouse panel backgrounds (at 15-25% opacity) |
| Glass Edge | `#a0c8a0` | Glass border | Panel borders, framework lines |
| Mist White-Translucent | `rgba(255,255,255,0.05)` | Water vapor | Humidity mist patches (always with blur) |
| Water Clear | `#a0c8e0` | Clear water | Water tray surface (at 20-40% opacity) |
| Water Deep | `#80b0d0` | Deep water | Water tray bottom edge |
| Root Pale Green | `#8ab88a` | Aerial root | Mature root strands |
| Root Tip | `#a0d0a0` | Root growing tip | New root growth, thin wisps |
| Ceramic Light | `#c8d0d8` | Light ceramic | Water tray body, pot surfaces |
| Ceramic Dark | `#a0a8b0` | Shadow ceramic | Tray rim, pot shadows |

Rules: Orchid purple and orchid white-pink are the bloom colors and dominate focal points. Bark brown and leaf green are support materials that frame the bloom. Glass green-tint and mist white-translucent create the atmospheric envelope. Water clear appears only in tray elements. The palette should feel like a controlled growing environment where vivid bloom colors are carefully nurtured against subdued organic and glass materials. No more than two orchid bloom elements per visible section.

## Typography Recommendations

Orchid greenhouse typography blends botanical precision with greenhouse warmth:

- **Display headings:** Cormorant Garamond, Fraunces, or Playfair Display (elegant serif with botanical character).
- **Scientific names:** `font-serif italic text-sm text-[#1a4a2a]` for Latin species names (Phalaenopsis amabilis).
- **Common names:** `font-serif text-xs text-[#1a4a2a]/50` for English common names beneath scientific names.
- **Body text:** Lora, Source Serif 4, or EB Garamond (readable warm serif).
- **Labels:** `font-mono text-[10px] tracking-wider uppercase text-[#5a3a1a]/60` for humidity readings, temperature, care instructions.
- **Greenhouse data:** Tabular figures for environmental readings (`font-variant-numeric: tabular-nums`).
- Typography should feel like botanical garden labels -- precise, scholarly, warm, and carefully typeset. Avoid cold sans-serif or ultra-modern fonts. The greenhouse is a place of patient cultivation, not tech startup energy.

## Component Architecture Pattern

1. Glass pane envelope (the greenhouse shell -- translucent green-tinted panels).
2. Humidity mist atmosphere (soft white blur patches between layers).
3. Bark mount surface (organic anchor for orchid display).
4. Orchid bloom (the focal flower, most detailed and colorful element).
5. Aerial roots (delicate tendrils hanging below the bloom).
6. Tropical leaf accents (framing elements, never the focus).
7. Water tray base (shallow collection tray at the bottom).

The glass pane is the outermost container. Bark mounts and orchid blooms occupy the content center. Aerial roots hang downward from the orchid. Tropical leaves frame the composition at edges. Water trays sit at the bottom as a grounding element. Mist permeades all layers between glass and content.

## Interaction Rules

- Default state: orchid bloom pulses gently, aerial roots sway slowly, mist drifts horizontally, water tray shimmers.
- Hover on orchid bloom: petals brighten slightly and scale up 3% (`hover:scale-[1.03] hover:brightness-110 transition-all duration-700`).
- Hover on glass pane: green tint intensifies and condensation increases (`hover:bg-[#d0e8d0]/30 hover:shadow-[0_0_24px_rgba(42,106,42,0.12)]`).
- Click on rope/bark: trigger a water droplet animation falling from the orchid into the tray.
- Aerial roots: continuous sway at 8s intervals, never fast, never synchronized.
- Mist: continuous drift at 18-22s intervals, different directions per patch.
- Water shimmer: continuous cycle at 6s, subtle left-right sweep.
- Transitions: `transition-all duration-700 ease-in-out` for all orchid-related interactions (slow, organic, patient).
- Focus: green glow ring `focus:ring-2 focus:ring-[#2a6a2a]/50 focus:ring-offset-2 focus:ring-offset-[#d0e8d0]/20`.
- Bloom pulse: continuous at 5s with `ease-in-out`, scale range 1.0 to 1.02.
- Iron framework (if present) is static -- only glass and organic elements move.

## Reusable Tailwind Tokens

- Glass pane: `bg-gradient-to-br from-[#d0e8d0]/25 to-[#b8d8b8]/15 backdrop-blur-sm border border-[#a0c8a0]/30 rounded-lg`
- Glass pane with content: above + `shadow-[0_4px_20px_rgba(26,74,42,0.1)]`
- Bark mount: `bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#4a2a0a] border border-[#3a2a0a] rounded-lg`
- Bark texture overlay: `bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.12)_4px,rgba(0,0,0,0.12)_5px)]`
- Orchid bloom SVG container: `w-30 h-36` (hero), `w-24 h-20` (card), `w-16 h-14` (accent)
- Orchid bloom pulse: `orchid-bloom-pulse` keyframe at 5s with `scale(1)` to `scale(1.02)`
- Aerial root: `orchid-aerial-root-sway` keyframe at 8s with `rotate(-1deg)` to `rotate(1deg)`
- Mist patch: `bg-white/5 rounded-full blur-[50px]`
- Mist drift: `orchid-mist-drift` keyframe at 18s with `translateX(0)` to `translateX(60px)`
- Water tray: `bg-gradient-to-b from-[#c8d0d8] to-[#b0b8c0] border border-[#a0a8b0] rounded-b-xl`
- Water shimmer: `orchid-water-shimmer` keyframe at 6s sweeping left-right
- Greenhouse button: `bg-[#d0e8d0]/25 backdrop-blur-sm border border-[#a0c8a0]/40 rounded-full shadow-[0_0_12px_rgba(26,74,42,0.1)]`
- Tropical leaf: `opacity-25` on leaf SVGs with fill `#1a4a2a`
- Scientific label: `font-serif italic text-sm text-[#1a4a2a]`
- Care label: `font-mono text-[10px] tracking-wider uppercase text-[#5a3a1a]/60`
- Green glow: `shadow-[0_0_20px_rgba(42,106,42,0.15)]`
- Light ray through glass: `bg-gradient-to-bl from-white/12 via-white/5 to-transparent`
- Condensation droplet: `w-1 h-1.5 bg-white/30 rounded-full`

## Quality Checklist (must pass)

- At least one detailed orchid bloom with multi-petal SVG (sepals, petals, lip, column).
- At least one bark mount surface with vertical groove texture.
- At least one glass pane panel with green tint and translucent backdrop-blur.
- At least one set of aerial roots with gentle sway animation (3+ roots, different timings).
- Humidity mist atmosphere present (minimum two blur patches, ideally with drift animation).
- Water tray element at the bottom of the orchid display.
- Tropical leaf accent elements framing the composition (minimum one leaf).
- Color palette is orchid purple + orchid white/pink + bark brown + leaf green + glass green.
- Typography uses warm serif with italic scientific Latin names.
- Orchid bloom has the pulse animation (subtle 5% scale cycle at 5s).
- Aerial roots are not synchronized (each has unique sway timing).
- Mist patches drift at different speeds and directions.
- Glass panels have backdrop-blur (never fully opaque primary surfaces).
- The aesthetic reads as a refined orchid greenhouse -- humid, cultivated, delicate.
- Water tray has shimmer animation.
- No more than two orchid bloom accents per visible section.

## Anti-Patterns

- Flat opaque panels without glass translucency (the greenhouse is made of glass -- every surface has some transparency).
- Missing orchid bloom detail (the orchid must have the characteristic three-sepal, two-petal, one-lip shape -- not a generic flower).
- Synchronized aerial roots (each root must sway at a different timing -- synchronized movement looks mechanical).
- Bright, harsh, or neon colors (the greenhouse is warm and humid -- diffused green-tinted light, not fluorescent).
- Fast or snappy animations (orchid growth and humidity drift are patient -- minimum 5s for any cycle).
- Missing humidity mist (an orchid greenhouse without visible humidity is just a glass box).
- Orchid overload (orchids are the focal point -- more than two per section dilutes their impact).
- Cold sans-serif typography alone (needs warm botanical serif with scientific naming conventions).
- Missing bark mount (orchids need their organic anchor -- floating orchids look synthetic).
- Missing water tray (the cultivation setup requires water management at the base).
- Flat leaves without vein detail (tropical leaves need visible vein structure for authenticity).
- Dry glass panels (no condensation droplets, no fog -- the glass must look humid).
- Pure white or pure black backgrounds (use glass green-tint or misty atmosphere instead).
- Sharp or aggressive hover effects (orchid interactions must be gentle and barely perceptible).
- Animated iron framework (if structural elements are present, they are permanent and static).

## Accessibility Considerations

- Orchid purple (`#8a40a0`) on glass green-tint backgrounds may not meet WCAG AA contrast -- verify 4.5:1 ratio for text. Use `#1a4a2a` (dark green) for text on light glass surfaces.
- Orchid white (`#f5f0f5`) provides adequate contrast against dark backgrounds (bark brown, leaf green).
- Bloom pulse animation must respect `prefers-reduced-motion` (show static bloom at normal scale and opacity).
- Aerial root sway animation must respect `prefers-reduced-motion` (freeze roots at rest position).
- Mist drift animation must respect `prefers-reduced-motion` (show static mist patches without horizontal movement).
- Water shimmer must respect `prefers-reduced-motion` (show static water surface without shimmer sweep).
- Orchid bloom SVGs need `aria-label` describing the flower (`aria-label="Orchid bloom, Phalaenopsis amabilis"`).
- Decorative elements (aerial roots, mist patches, leaf accents, water shimmer) must be `aria-hidden="true"`.
- Focus states must be visible against both glass and bark backgrounds (`focus:ring-2 focus:ring-[#2a6a2a]/50`).
- Touch targets must be adequate despite organic styling (minimum 44x44px for interactive orchid elements).
- Glass panel effects (backdrop-blur) should not reduce text readability on adjacent surfaces -- test with blur at maximum intensity.
- Bark texture overlays use CSS background patterns, not images, ensuring they render without network requests.
- Scientific names in italic serif should maintain legibility at small sizes -- minimum 12px for italic text.
- Mist animation uses very slow drift (18-22s) that is generally safe for vestibular sensitivity, but the translateX range should not exceed 60px to minimize discomfort.
- Color information (bloom color indicating species) should also be conveyed through text labels, not color alone.
- Water tray shimmer uses opacity-based animation rather than rapid color changes, avoiding potential photosensitivity concerns.
