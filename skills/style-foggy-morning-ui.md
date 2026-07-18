---
name: foggy-morning-ui
description: Build foggy morning UI components (soft white haze, muffled sounds, silhouetted shapes, dew on web, distant bell, mystery atmosphere) with soft opacity layers, muted colors, and the quiet mystery of a foggy morning landscape. Trigger this skill when the user asks for fog UI, mist effects, morning haze, soft fog layers, silhouette design, dew drops, atmospheric opacity, quiet morning interfaces, mystery atmosphere, or ethereal morning interfaces.
---

# Foggy Morning UI

Use this skill to design and implement atmospheric interfaces that capture the still, muffled quiet of a foggy morning: translucent white-gray haze layers, dark silhouetted forms fading into distance, delicate dew-on-web patterns, progressive opacity falloff, slow-floating mist particles, and a muted color palette drained of saturation. The mood is contemplative, hushed, and quietly mysterious — the world half-hidden.

## Non-Negotiable Foundations

- Foggy Morning UI is opacity-driven. The entire visual language lives in layers of translucent white and gray that progressively obscure content at distance. Depth is communicated through opacity falloff, NOT through shadows or perspective.
- Fog layers are created with full-width `linear-gradient` overlays transitioning from white/translucent to transparent. Stack 2-3 layers at different opacities and positions to create volumetric haze. Heavy blur (40-80px) on soft shapes creates the organic fog mass.
- Silhouettes are dark shapes at reduced opacity (0.3-0.6) placed behind fog layers. They suggest form without revealing detail — trees, buildings, figures, paths. They are the structural backbone of the composition.
- Dew on web is a delicate decorative pattern: fine lines (1px) in silver-white with small circular droplets at intersections. It is pure CSS or SVG, used as a section divider or corner ornament. Never the primary element.
- Distant object fade is the core depth mechanic: objects further from the "viewer" have progressively lower opacity and higher blur. This creates the fog depth gradient without any 3D transforms.
- Mist particles are slow-moving, soft white patches (40-80px, rounded, heavy blur) that drift horizontally with a 20-40 second animation cycle. They are ambient, never distracting.
- The color palette is heavily muted and desaturated. Pure white appears only as fog overlay. True black appears only in silhouettes at reduced opacity. The active palette lives in the mid-tones: soft grays, pale blues, muted greens, faded bronze.
- All mist and particle animations MUST respect `prefers-reduced-motion`. Provide a static fog composition as the fallback state.

## Core Material Recipes

### 1) Fog Layer System (the foundation)

Stacked translucent gradient overlays that create volumetric haze. Each layer is a different opacity and position.

```css
.fog-layer-back {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(208, 216, 224, 0.6) 0%,
    rgba(208, 216, 224, 0.3) 30%,
    rgba(208, 216, 224, 0.1) 60%,
    transparent 100%
  );
}
.fog-layer-mid {
  position: absolute;
  bottom: 0;
  left: -10%;
  right: -10%;
  height: 60%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(220, 225, 230, 0.2) 30%,
    rgba(230, 235, 240, 0.5) 70%,
    rgba(240, 243, 246, 0.7) 100%
  );
}
.fog-layer-front {
  position: absolute;
  bottom: 0;
  left: -5%;
  right: -5%;
  height: 40%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(240, 243, 246, 0.3) 50%,
    rgba(248, 250, 252, 0.8) 100%
  );
  filter: blur(2px);
}
```

Tailwind equivalent for the back fog layer:
- `absolute inset-0 bg-gradient-to-b from-[rgba(208,216,224,0.6)] via-[rgba(208,216,224,0.3)] to-transparent`

Tailwind for mid fog layer:
- `absolute bottom-0 -left-[10%] -right-[10%] h-[60%] bg-gradient-to-b from-transparent via-[rgba(220,225,230,0.2)] to-[rgba(240,243,246,0.7)]`

Tailwind for front fog layer:
- `absolute bottom-0 -left-[5%] -right-[5%] h-[40%] bg-gradient-to-b from-transparent via-[rgba(240,243,246,0.3)] to-[rgba(248,250,252,0.8)] blur-[2px]`

### 2) Silhouette Shapes (structural backbone)

Dark reduced-opacity forms that suggest objects without revealing detail. Trees, buildings, figures, hills.

Tree silhouette example (inline SVG):

```html
<svg viewBox="0 0 120 200" class="absolute bottom-[15%] left-[10%] w-24 h-40 opacity-40" aria-hidden="true">
  <path d="M60 0 L30 70 L45 65 L20 130 L40 120 L15 180 L60 170 L105 180 L80 120 L100 130 L75 65 L90 70 Z" fill="#2a2a2a"/>
  <rect x="55" y="170" width="10" height="30" fill="#2a2a2a"/>
</svg>
```

Building silhouette (simplified rectangle with windows):

```html
<svg viewBox="0 0 80 160" class="absolute bottom-[10%] right-[15%] w-16 h-32 opacity-30" aria-hidden="true">
  <rect x="10" y="20" width="60" height="140" fill="#2a2a2a"/>
  <rect x="20" y="30" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="35" y="30" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="50" y="30" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="20" y="50" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="35" y="50" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="50" y="50" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="20" y="70" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="35" y="70" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
  <rect x="50" y="70" width="8" height="10" fill="#5a6a7a" opacity="0.3"/>
</svg>
```

Tailwind wrapper for silhouette elements:
- `absolute pointer-events-none opacity-[0.3]` to `opacity-[0.6]` depending on distance
- Far silhouettes: `opacity-[0.15] blur-[1px]` — barely visible through fog
- Mid silhouettes: `opacity-[0.35]` — recognizable but soft
- Near silhouettes: `opacity-[0.55]` — clear shape, still no internal detail

### 3) Dew on Spider Web (delicate decorative ornament)

Fine lines with droplet circles at intersections. CSS-only approach using borders and pseudo-elements.

```css
.dew-web {
  position: relative;
  width: 200px;
  height: 200px;
}
.dew-web .strand {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(224, 232, 240, 0.6), transparent);
  height: 1px;
  transform-origin: left center;
}
.dew-web .droplet {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(224, 232, 240, 0.6));
  box-shadow: 0 0 3px rgba(224, 232, 240, 0.4);
}
```

Minimal Tailwind dew web (corner ornament approach):
- Container: `relative w-48 h-48`
- Strand: `absolute h-px bg-gradient-to-r from-transparent via-[rgba(224,232,240,0.6)] to-transparent`
- Droplet: `absolute w-1 h-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(224,232,240,0.6))] shadow-[0_0_3px_rgba(224,232,240,0.4)]`

SVG approach for precise dew web (recommended for production):

```html
<svg viewBox="0 0 200 200" class="w-48 h-48 opacity-50" aria-hidden="true">
  <!-- Radial strands from center -->
  <line x1="100" y1="100" x2="10" y2="10" stroke="rgba(224,232,240,0.4)" stroke-width="0.5"/>
  <line x1="100" y1="100" x2="190" y2="10" stroke="rgba(224,232,240,0.4)" stroke-width="0.5"/>
  <line x1="100" y1="100" x2="10" y2="190" stroke="rgba(224,232,240,0.4)" stroke-width="0.5"/>
  <line x1="100" y1="100" x2="190" y2="190" stroke="rgba(224,232,240,0.4)" stroke-width="0.5"/>
  <!-- Concentric rings -->
  <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(224,232,240,0.25)" stroke-width="0.5"/>
  <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(224,232,240,0.2)" stroke-width="0.5"/>
  <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(224,232,240,0.15)" stroke-width="0.5"/>
  <!-- Dew droplets at intersections -->
  <circle cx="100" cy="70" r="2.5" fill="rgba(255,255,255,0.8)" filter="url(#dew-glow)"/>
  <circle cx="130" cy="100" r="2" fill="rgba(255,255,255,0.7)" filter="url(#dew-glow)"/>
  <circle cx="85" cy="85" r="1.5" fill="rgba(255,255,255,0.6)" filter="url(#dew-glow)"/>
  <circle cx="55" cy="65" r="2" fill="rgba(255,255,255,0.65)" filter="url(#dew-glow)"/>
  <circle cx="140" cy="60" r="1.8" fill="rgba(255,255,255,0.55)" filter="url(#dew-glow)"/>
  <defs>
    <filter id="dew-glow">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
</svg>
```

### 4) Distant Object Fade (depth through opacity)

Progressive opacity decrease based on simulated distance. This is the core mechanic for fog depth.

Foreground (near): full opacity, no blur
- `opacity-100 blur-none`

Mid-ground: reduced opacity, slight blur
- `opacity-60 blur-[0.5px]`

Background (far): very low opacity, more blur
- `opacity-30 blur-[1px]`

Deep background (distant): barely visible
- `opacity-15 blur-[2px]`

Implementation pattern for a layered landscape:

```html
<div class="relative h-screen overflow-hidden bg-[#d0d8e0]">
  <!-- Deep background: distant hills -->
  <div class="absolute bottom-0 inset-x-0 h-1/2 opacity-15 blur-[2px]">
    <!-- hill shapes -->
  </div>
  <!-- Mid background: trees -->
  <div class="absolute bottom-0 inset-x-0 h-2/5 opacity-30 blur-[1px]">
    <!-- tree silhouettes -->
  </div>
  <!-- Mid-ground: closer trees -->
  <div class="absolute bottom-0 inset-x-0 h-1/3 opacity-50">
    <!-- tree silhouettes, larger -->
  </div>
  <!-- Foreground: path, fence -->
  <div class="absolute bottom-0 inset-x-0 h-1/4 opacity-80">
    <!-- near elements -->
  </div>
  <!-- Fog layers on top -->
  <div class="absolute inset-0 bg-gradient-to-b from-[rgba(208,216,224,0.6)] via-[rgba(208,216,224,0.2)] to-transparent"></div>
</div>
```

### 5) Mist Particle Animation (ambient drifting)

Slow-moving soft white patches that drift horizontally, creating the impression of low-lying mist.

```css
.mist-particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 243, 246, 0.5) 0%, transparent 70%);
  filter: blur(30px);
  animation: mist-drift 25s ease-in-out infinite alternate;
}
@keyframes mist-drift {
  0% { transform: translateX(-10%) translateY(0); opacity: 0.3; }
  50% { transform: translateX(5%) translateY(-3%); opacity: 0.5; }
  100% { transform: translateX(15%) translateY(2%); opacity: 0.35; }
}
```

Tailwind approach for mist particles:
- Particle 1: `absolute top-[20%] left-[10%] w-[300px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(240,243,246,0.5)_0%,transparent_70%)] blur-[30px] animate-[mist-drift_25s_ease-in-out_infinite_alternate]`
- Particle 2: `absolute top-[50%] right-[5%] w-[250px] h-[80px] rounded-full bg-[radial-gradient(circle,rgba(240,243,246,0.4)_0%,transparent_70%)] blur-[40px] animate-[mist-drift_30s_ease-in-out_infinite_alternate] animation-delay-[-10s]`
- Particle 3: `absolute bottom-[25%] left-[30%] w-[400px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.45)_0%,transparent_70%)] blur-[35px] animate-[mist-drift_20s_ease-in-out_infinite_alternate] animation-delay-[-5s]`

### 6) Morning Muted Light (ambient illumination)

A soft, diffused light source that suggests early morning sun behind heavy fog — warm but barely perceptible.

```css
.morning-light {
  position: absolute;
  top: -20%;
  left: 30%;
  width: 40%;
  height: 60%;
  background: radial-gradient(
    ellipse 100% 100% at 50% 50%,
    rgba(210, 200, 180, 0.15) 0%,
    rgba(210, 200, 180, 0.05) 40%,
    transparent 70%
  );
  filter: blur(60px);
}
```

Tailwind:
- `absolute -top-[20%] left-[30%] w-[40%] h-[60%] bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(210,200,180,0.15)_0%,rgba(210,200,180,0.05)_40%,transparent_70%)] blur-[60px]`

### 7) Fog Glass Card (foreground content)

Cards that feel like objects viewed through morning mist — soft edges, low contrast, muted tones.

- Fog glass: `bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]`
- Deep fog glass (more obscured): `bg-white/25 backdrop-blur-lg border border-white/20 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]`
- Solid muted card: `bg-[#e8ecf0]/80 backdrop-blur-sm rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] border border-[#d0d4d8]/60`

### 8) Distant Bell Accent (thematic detail)

A subtle bronze/gold accent element representing the distant church bell sound of a foggy morning. Used as a small icon, badge, or decorative dot.

- Bell icon wrapper: `text-[#8a6a3a] opacity-60`
- Bell dot accent: `w-2 h-2 rounded-full bg-[#8a6a3a]/40`
- Bell badge: `bg-[#8a6a3a]/10 text-[#8a6a3a] border border-[#8a6a3a]/20 rounded-full px-2.5 py-0.5 text-xs font-medium`

### 9) Morning Path (compositional element)

A subtle diagonal or curved element suggesting a path disappearing into the fog. Created with CSS gradients.

```css
.morning-path {
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 60%;
  height: 30%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(138, 138, 122, 0.15) 40%,
    rgba(138, 138, 122, 0.25) 100%
  );
  clip-path: polygon(35% 0%, 65% 0%, 80% 100%, 20% 100%);
}
```

Tailwind:
- `absolute bottom-0 left-[20%] w-[60%] h-[30%] bg-gradient-to-b from-transparent via-[rgba(138,138,122,0.15)] to-[rgba(138,138,122,0.25)] clip-path-[polygon(35%_0%,65%_0%,80%_100%,20%_100%)]`

## Color Palette System

### Primary Fog Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Fog White | `rgba(240, 243, 246, 0.8)` | Primary fog overlay, front layer |
| Sky Pale | `#d0d8e0` | Base sky/background color |
| Mist Blue-Gray | `rgba(200, 210, 220, 0.5)` | Mid fog layer, atmospheric haze |
| Cloud Gray | `#c8ccd0` | Secondary surfaces, muted borders |
| Deep Fog | `rgba(180, 190, 200, 0.4)` | Back fog layer, distant haze |

### Silhouette Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Silhouette Dark | `#2a2a2a` | Primary silhouette fill (trees, buildings) |
| Silhouette Mid | `#4a4a4a` | Secondary silhouette elements |
| Silhouette Light | `#6a6a6a` | Distant silhouette, near-fade elements |
| Silhouette Ghost | `rgba(42, 42, 42, 0.15)` | Deep background silhouettes |

### Nature Palette (muted, fog-filtered)

| Token | Hex | Usage |
|-------|-----|-------|
| Morning Green | `#5a7a5a` | Muted vegetation, foliage silhouettes |
| Leaf Pale | `#7a9a7a` | Lighter vegetation, hover states |
| Moss Dark | `#3a5a3a` | Deep vegetation, active states |
| Grass Muted | `#6a8a5a` | Ground cover, subtle accents |

### Atmosphere Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Path Gray | `#8a8a7a` | Paths, ground surfaces, structural lines |
| Dew Silver | `#e0e8f0` | Dew droplets, web strands, highlights |
| Bell Bronze | `#8a6a3a` | Accent for bell icon, small warm highlights |
| Morning Warm | `rgba(210, 200, 180, 0.15)` | Subtle warm light wash |
| Mist Cool | `rgba(180, 195, 210, 0.3)` | Cool mist accents, shadow tint |

### UI Surface Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Card Fog | `rgba(255, 255, 255, 0.4)` | Glass card backgrounds |
| Card Solid | `#e8ecf0` | Solid card backgrounds |
| Border Mist | `rgba(255, 255, 255, 0.3)` | Glass borders |
| Text Primary | `#2a2a2a` | Primary text (dark on light fog) |
| Text Muted | `#6a7a8a` | Secondary text, captions |
| Text Ghost | `#9aa0a8` | Tertiary text, hints |

Rules: whites and pale grays dominate (60-70% of visible area). Muted greens and grays fill the mid-ground (20-30%). Bronze and warm tones appear only as tiny accents (5%). The palette should feel drained of saturation — fog filters everything to near-monochrome with only the gentlest color hints remaining.

## Typography Recommendations

- Headings: `text-2xl` to `text-4xl`, `font-light` or `font-normal`, `tracking-wide`, `text-[#2a2a2a]` — light weight matches the hushed atmosphere. Avoid bold headings; they are too loud for fog.
- Body: `text-base` to `text-lg`, `font-normal`, `text-[#3a3a3a]` — readable against light fog backgrounds.
- Caption/small: `text-sm`, `text-[#6a7a8a]` — muted, receding into the fog.
- Distant text (decorative, ambient): `text-[#9aa0a8] opacity-60` — barely there, suggesting distance.
- Recommended fonts: Inter Light/Regular, DM Sans, Outfit, or any geometric sans-serif that feels clean and quiet at lighter weights.
- AVOID bold/black font weights — they break the hushed mood. Maximum weight for headings is `font-medium` (500).
- Letter spacing: `tracking-wide` on headings adds air and quietness.
- Line height: `leading-loose` (1.75) on body text for breathing room and a sense of calm.
- Text over fog layers: add `drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]` to ensure legibility against silhouette backgrounds.

## Component Architecture Pattern

1. Pale sky background (the base — light, muted, desaturated #d0d8e0 or gradient).
2. Morning light wash (subtle warm radial gradient at top, barely perceptible).
3. Distant silhouettes at very low opacity (background layer of trees, hills, buildings).
4. Mid silhouettes at moderate opacity (mid-ground trees, structures).
5. Fog layer back (full-width gradient overlay, highest position).
6. Mist particle animations (slow-drifting soft white patches).
7. Foreground silhouettes at higher opacity (near trees, path, fence).
8. Morning path element (diagonal gradient disappearing into fog).
9. Fog layer mid (rising from bottom).
10. Content area with fog glass cards or solid muted cards.
11. Dew web ornament (corner or section divider, delicate SVG).
12. Bell bronze accent (small icon, badge, or dot).
13. Fog layer front (heaviest opacity at bottom, obscuring base of content).

## Interaction Rules

- Mist particles drift slowly and continuously — no user interaction needed.
- Card hover: very subtle opacity increase — `hover:bg-white/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]` over 300ms ease. Fog UI is quiet; interactions should feel gentle.
- Button hover: slight brightness increase — `hover:bg-[#5a7a5a]/90` for green, subtle shifts for others. No aggressive transforms.
- Dew web ornaments are purely decorative — no interaction.
- Silhouettes are background elements — no interaction.
- All animations respect `prefers-reduced-motion: reduce` — freeze mist particles, disable any subtle ambient movement.
- Focus indicators: `focus-visible:ring-2 focus-visible:ring-[#8a8a7a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8ecf0]` — muted, fitting the aesthetic.
- Scroll behavior: as user scrolls, fog layers can shift opacity slightly to create a sense of moving through mist (optional, subtle).

## Reusable Tailwind Tokens

- Sky base: `bg-[#d0d8e0]` or `bg-gradient-to-b from-[#d0d8e0] to-[#e0e4e8]`
- Fog layer: `bg-gradient-to-b from-[rgba(240,243,246,0.6)] to-transparent`
- Fog glass card: `bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.06)]`
- Solid muted card: `bg-[#e8ecf0]/80 backdrop-blur-sm rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] border border-[#d0d4d8]/60`
- Text primary: `text-[#2a2a2a]`
- Text muted: `text-[#6a7a8a]`
- Text ghost: `text-[#9aa0a8]`
- Text over fog: `text-[#2a2a2a] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`
- Silhouette near: `opacity-50`
- Silhouette mid: `opacity-30`
- Silhouette far: `opacity-15 blur-[1px]`
- Dew droplet: `w-1 h-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(224,232,240,0.6))] shadow-[0_0_3px_rgba(224,232,240,0.4)]`
- Bell accent: `text-[#8a6a3a] opacity-60`
- Morning path: `bg-gradient-to-b from-transparent via-[rgba(138,138,122,0.15)] to-[rgba(138,138,122,0.25)] clip-path-[polygon(35%_0%,65%_0%,80%_100%,20%_100%)]`
- Mist particle: `rounded-full bg-[radial-gradient(circle,rgba(240,243,246,0.5)_0%,transparent_70%)] blur-[30px]`
- Morning light: `bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(210,200,180,0.15)_0%,transparent_70%)] blur-[60px]`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-[#8a8a7a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8ecf0]`

## Quality Checklist (must pass)

- Background uses pale, desaturated colors (#d0d8e0 range). No bright or saturated backgrounds.
- Fog layers are stacked (minimum 2) at different positions and opacities for volumetric depth.
- Silhouettes exist at multiple opacity levels (3+ layers) to create the fog depth gradient.
- Distant objects fade through reduced opacity and increased blur, NOT through CSS 3D transforms.
- Dew web ornament uses SVG or fine CSS lines (0.5-1px) with radial-gradient droplets. No chunky elements.
- Mist particles are large (200-400px), heavily blurred (30-40px), and animate slowly (20-30s cycles).
- Typography uses light to normal font weights. No bold headings. Atmosphere is quiet.
- Colors are muted and desaturated. The palette reads as near-monochrome with gentle color hints.
- Bell bronze accent is small and sparse (maximum 1-2 visible instances).
- `prefers-reduced-motion` disables all mist drift, particle, and ambient animations.
- Content remains readable over all fog layers — test text contrast against every fog opacity state.
- Cards have enough backdrop-blur or opacity to separate content from fog background.

## Anti-Patterns

- Bright, saturated colors (fog filters all color to near-monochrome — saturated hues break the illusion).
- Bold or heavy font weights (too loud for the hushed atmosphere — keep to light/normal/medium maximum).
- Hard-edged fog shapes (fog is always soft — use blur, gradient masks, and feathered edges).
- Fast mist particle animation (mist drifts slowly — 20-30 second cycles minimum).
- Silhouettes at full opacity (they must be partially obscured by fog — maximum opacity 0.6).
- Black text on white fog without drop-shadow (silhouette elements behind can create contrast issues).
- Using fog as a loading state or placeholder (fog IS the design, not a temporary state).
- Too many dew web ornaments (they are delicate accents — one per section maximum).
- Pure white (#ffffff) backgrounds (too stark — use pale blue-grays like #e8ecf0 for warmth).
- Fog layers that cover all content (content must emerge from fog, not hide behind it).
- Drop shadows on cards or elements (fog environments have diffused, shadowless light — use opacity and blur instead).
- High-contrast borders on cards (borders should be white/translucent, never dark in fog UI).

## Accessibility Considerations

- All mist and particle animations must respect `prefers-reduced-motion: reduce`. Provide a static fog composition as fallback.
- Text contrast must be verified against the full range of fog opacity states. Fog layers change the effective background color — test at every overlay combination.
- Silhouettes must have `aria-hidden="true"` since they are decorative background elements.
- Dew web ornaments must have `aria-hidden="true"` since they are decorative.
- Focus indicators must be visible against pale fog backgrounds. Use muted but distinct focus rings (#8a8a7a or darker).
- Do not rely on opacity alone to convey meaning — reduced opacity due to fog is decorative, not informational.
- Screen reader users experience the same content hierarchy without fog effects. Fog is purely visual atmosphere.
- Test with Windows High Contrast Mode — fog overlays may disappear entirely, so content structure must be self-sufficient.
- Minimum touch target size of 44x44px for interactive elements — fog UI's soft edges can make targets feel imprecise.
- Bell bronze accents used for status must be paired with text labels or icons — color alone is insufficient.
- Ensure `z-index` stacking allows keyboard focus to reach all interactive elements above fog layers.
- Fog glass cards with `backdrop-blur` may cause performance issues on low-end devices — provide a solid fallback card style.
