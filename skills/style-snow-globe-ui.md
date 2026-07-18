---
name: snow-globe-ui
description: Build snow globe UI components (glass dome with falling snow particles, miniature scene inside, shaken snow flurry, circular base platform, water-filled lens distortion, whimsical winter wonderland) with translucent dome panels, animated falling snow particles, and the nostalgic magic of a shaken snow globe. Trigger this skill when the user asks for snow globe design, glass dome UI, winter wonderland, falling snow particles, miniature diorama, water lens effect, or shaken flurry interfaces.
---

# Snow Globe UI

Use this skill to design and implement nostalgic interfaces inspired by collectible snow globes: translucent glass dome panels, animated falling snow particles, circular base platforms, water-lens edge distortion, and miniature scenes suspended inside a sealed world. Every surface should feel like a tiny, shaken winter wonderland encased in glass.

## Non-Negotiable Foundations

- At least one **glass dome panel** with `rounded-full` top half, `backdrop-blur`, and translucent white overlay.
- At least one **animated falling snow particle** system using CSS keyframes (white dots drifting downward at varying speeds).
- A **circular base platform** rendered as a brass or dark-wood cylinder beneath every dome.
- A **water-lens distortion** effect on dome edges (slight horizontal scale or refraction gradient).
- A **miniature scene** rendered inside the dome (SVG or content layer at reduced scale).
- The **shaken flurry** trigger: a CSS class that intensifies particle speed and count on user interaction.
- Color palette must include glass translucent white, snow white `#ffffff`, base brass `#c4a043`, base wood `#5a3a1a`, and sky blue tint `#87ceeb`.
- All decorative SVGs must be `aria-hidden="true"`; all particle animations must respect `prefers-reduced-motion`.

## Core Material Recipes

### 1) Glass Dome Panel

Translucent dome shell with rounded top and water-lens edge distortion.

- `rounded-t-full rounded-b-xl` (dome top, flat bottom).
- Glass body: `bg-white/10 backdrop-blur-md border border-white/20`.
- Water-lens edge refraction: `shadow-[inset_0_0_30px_rgba(135,206,235,0.12),inset_-4px_0_10px_rgba(255,255,255,0.15),inset_4px_0_10px_rgba(135,206,235,0.08)]`.
- Surface specular highlight: `bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.08)_100%)]`.

### 2) Animated Falling Snow Particles

White snow dots drifting downward at varying speeds and horizontal drift.

```css
@keyframes snow-fall {
  0% { transform: translateY(-10px) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(200px) translateX(10px); opacity: 0; }
}
@keyframes snow-fall-slow {
  0% { transform: translateY(-10px) translateX(0); opacity: 0; }
  15% { opacity: 0.8; }
  85% { opacity: 0.8; }
  100% { transform: translateY(200px) translateX(-8px); opacity: 0; }
}
.snow-particle {
  width: 4px; height: 4px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255,255,255,0.7);
  animation: snow-fall 4s linear infinite;
}
.snow-particle-slow {
  animation: snow-fall-slow 7s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .snow-particle, .snow-particle-slow { animation: none; opacity: 0.4; }
}
```

### 3) Shaken Flurry State

Intensified particle burst when the globe is "shaken".

```css
@keyframes snow-flurry {
  0% { transform: translateY(-10px) translateX(0); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateY(200px) translateX(var(--drift, 15px)); opacity: 0; }
}
.snow-globe-shaken .snow-particle {
  animation: snow-flurry 1.2s linear infinite;
  transform-origin: center;
}
.snow-globe-shaken {
  animation: globe-shake 0.3s ease-in-out 3;
}
@keyframes globe-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
}
```

### 4) Circular Base Platform

Dark wood cylinder with brass ring, rendered as the dome's base.

```html
<div class="relative mx-auto w-full max-w-[280px]">
  <!-- Brass ring -->
  <div class="h-3 rounded-b-full bg-gradient-to-b from-[#d4b053] to-[#a47a23] shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,230,150,0.4)]"></div>
  <!-- Wood cylinder -->
  <div class="h-6 rounded-b-lg bg-gradient-to-b from-[#5a3a1a] to-[#3a2010] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
  <!-- Brass base plate -->
  <div class="h-2 rounded-b-full bg-gradient-to-b from-[#c4a043] to-[#8a6a13]"></div>
</div>
```

### 5) Water-Lens Distortion

Edge refraction gradient simulating water-filled glass.

- `bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(135,206,235,0.08)_85%,rgba(135,206,235,0.15)_100%)]` overlaid on the dome interior.
- Edge magnification: `scale-x-[1.02]` on the outermost 8px of the dome via a pseudo-element or border wrapper.

### 6) Miniature Scene Content

Reduced-scale diorama inside the dome.

```html
<div class="absolute inset-x-0 bottom-0 flex items-end justify-center pb-2">
  <svg viewBox="0 0 200 100" class="w-3/4 opacity-90" aria-hidden="true">
    <!-- Snow ground -->
    <ellipse cx="100" cy="95" rx="80" ry="12" fill="#f0f8ff" opacity="0.9"/>
    <!-- Pine trees -->
    <g fill="#2a5a3a">
      <polygon points="40,75 30,95 50,95"/>
      <polygon points="40,60 32,78 48,78"/>
      <polygon points="40,45 34,62 46,62"/>
    </g>
    <g fill="#1a4a2a">
      <polygon points="100,70 85,95 115,95"/>
      <polygon points="100,52 88,74 112,74"/>
      <polygon points="100,34 90,56 110,56"/>
    </g>
    <!-- Tiny cottage -->
    <g>
      <rect x="140" y="72" width="25" height="22" fill="#8a5a3a"/>
      <polygon points="138,72 152,58 167,72" fill="#7a2a1a"/>
      <rect x="148" y="80" width="6" height="10" fill="#ffd700"/>
    </g>
  </svg>
</div>
```

### 7) Snow Globe Button

Glass-domed button with snow particle accent.

- `relative bg-white/10 backdrop-blur-md text-[#1a2a3a] font-medium rounded-t-full rounded-b-xl px-8 py-4 border border-white/30 shadow-[0_0_20px_rgba(135,206,235,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-white/20 hover:shadow-[0_0_30px_rgba(135,206,235,0.35)] transition-all`.

### 8) Winter Sky Backdrop

Soft gradient sky behind the dome interior.

- `bg-gradient-to-b from-[#b0d8f0] via-[#d0eaf8] to-[#f0f8ff]` (winter sky gradient).
- Ambient glow: `bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Snow White | `#ffffff` | Particles, highlights, dome specular |
| Glass Translucent White | `rgba(255,255,255,0.1)` | Dome panel fill |
| Sky Blue Tint | `#87ceeb` | Water-lens refraction, ambient glow |
| Base Brass | `#c4a043` | Brass ring, base plate |
| Brass Highlight | `#d4b053` | Brass top sheen |
| Brass Shadow | `#8a6a13` | Brass depth |
| Base Wood | `#5a3a1a` | Wooden cylinder base |
| Dark Wood | `#3a2010` | Wood depth shadow |
| Pine Green | `#2a5a3a` | Miniature trees |
| Cottage Red | `#7a2a1a` | Miniature roof |
| Winter Sky Pale | `#f0f8ff` | Ground snow, sky base |

Rules: Glass translucent white and snow white define the dome. Sky blue tint provides the water-lens refraction. Brass and wood anchor the base. Miniature scene colors should be saturated enough to read through the glass blur.

## Typography Recommendations

- **Display:** Cinzel, Cormorant Garamond (engraved commemorative serif).
- **Alternative:** Playfair Display, Cardo (classic gift-shop plaque serif).
- **Body:** Lora, Crimson Text (warm readable serif).
- **Labels:** `font-serif text-sm tracking-[0.1em] uppercase text-[#8a6a13]` (brass-engraved plaque labels).
- Typography should feel like an inscription on a brass plaque beneath a collectible snow globe.

## Component Architecture Pattern

```
<snow-globe-card>
  <globe-container>          -- overflow-hidden, relative, rounded-t-full
    <sky-backdrop>           -- winter gradient + ambient glow
    <miniature-scene>        -- SVG diorama at reduced scale
    <snow-particle-layer>    -- absolute positioned particle dots
    <glass-dome-overlay>     -- backdrop-blur, translucent white, water-lens
    <specular-highlight>     -- diagonal light streak
  </globe-container>
  <base-brass-ring>          -- gradient brass strip
  <base-wood-cylinder>       -- dark wood gradient
  <base-brass-plate>         -- bottom brass cap
  <content>                  -- plaque text, interactive elements below
</snow-globe-card>
```

Layering order (z-index): sky backdrop (0), miniature scene (10), snow particles (20), glass dome overlay (30), specular highlight (40), interactive content (50).

## Interaction Rules

- **Shake to flurry:** On click/drag of the dome, toggle `.snow-globe-shaken` for 3 seconds to intensify particles and trigger `globe-shake`.
- **Hover glow:** Hovering the dome increases `backdrop-blur` from `md` to `lg` and intensifies the sky blue glow shadow.
- **Pointer parallax:** On mousemove over the dome, apply `translateX/Y` of max 4px to the miniature scene layer for a parallax depth effect.
- **Reduce motion:** All snow animations and shake effects must be disabled when `prefers-reduced-motion: reduce` is active.
- **Focus state:** Interactive elements inside or below the dome use `focus:ring-2 focus:ring-[#87ceeb]/60`.
- **Touch targets:** Minimum 44x44px for any interactive element on the base/content area.

## Reusable Tailwind Tokens

- Glass dome: `rounded-t-full rounded-b-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_0_30px_rgba(135,206,235,0.12)]`.
- Water-lens: `bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(135,206,235,0.08)_85%,rgba(135,206,235,0.15)_100%)]`.
- Snow particle: `rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.7)] animate-[snow-fall_4s_linear_infinite]`.
- Brass ring: `bg-gradient-to-b from-[#d4b053] to-[#a47a23] shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,230,150,0.4)]`.
- Wood base: `bg-gradient-to-b from-[#5a3a1a] to-[#3a2010] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`.
- Winter sky: `bg-gradient-to-b from-[#b0d8f0] via-[#d0eaf8] to-[#f0f8ff]`.
- Plaque label: `font-serif text-sm tracking-[0.1em] uppercase text-[#8a6a13]`.

## Quality Checklist

- At least one translucent glass dome panel with `rounded-t-full` and `backdrop-blur`.
- Animated falling snow particle system with CSS keyframes (varying speeds).
- Shaken flurry state exists and is triggerable on user interaction.
- Circular base platform with brass ring and wood cylinder.
- Water-lens distortion gradient on dome edges.
- Miniature scene content (SVG diorama) rendered inside the dome at reduced scale.
- Color palette includes snow white, glass translucent white, sky blue, brass, and wood.
- Typography is engraved commemorative serif.
- Pointer parallax or shake interaction is implemented.
- Everything feels like a nostalgic collectible snow globe.

## Anti-Patterns

- Missing the glass dome translucent panel (the dome IS the signature element).
- Static snow with no animation (falling particles are essential to the effect).
- Missing the shaken flurry interaction (the shake is the iconic snow globe gesture).
- Flat modern card without rounded dome top (snow globes are domed, not rectangular).
- Missing the base platform (a dome without a brass/wood base looks unfinished).
- Sans-serif typography (snow globe labels feel engraved/plaque-style, serif required).
- Harsh solid backgrounds without the winter sky gradient.
- Missing the water-lens distortion on edges (the refraction sells the glass material).
- Too many particles causing performance issues (12-20 particles is sufficient).
- Particles outside the dome bounds (snow must be clipped by the dome container).

## Accessibility Considerations

- Glass translucent surfaces with text must verify WCAG AA contrast (white text on translucent glass over sky blue is often borderline; use `#1a2a3a` dark text on light domes).
- All decorative SVGs (miniature scene, trees, cottage) must be `aria-hidden="true"`.
- Snow particle animations must respect `prefers-reduced-motion: reduce` (disable all movement, show static particles at `opacity: 0.4`).
- Shake animation must not flash more than 3 times per second (epilepsy safety; `globe-shake` is 0.3s with 3 iterations, well within limits).
- Focus states: `focus:ring-2 focus:ring-[#87ceeb]/60` on all interactive elements.
- The shake gesture must have an accessible alternative (button or keyboard `Enter`/`Space` triggers the same flurry).
- Touch targets minimum 44x44px on any interactive element in the base/content area.
- Specular highlights and glow shadows must not reduce text legibility.
