---
name: lava-lamp-ui
description: Build lava lamp UI components (wax blob morphing, liquid rising and falling, chrome lamp body, warm lava glow, psychedelic color mixing, retro 60s/70s vibes, hypnotic slow motion) with blob morphing animations, warm glowing colors, and the mesmerizing slow flow of a lava lamp. Trigger this skill when the user asks for lava lamp design, wax blob animation, retro psychedelic UI, warm glowing blobs, or hypnotic flowing interfaces.
---

# Lava Lamp UI

Use this skill to design and implement hypnotic, slowly-flowing interfaces inspired by lava lamps: morphing wax blob shapes, warm luminous glow, chrome metallic accents, and the retro psychedelic energy of 1960s and 1970s counterculture aesthetics.

## Non-Negotiable Foundations

- Lava lamp UI is defined by MORPHING BLOBS: organic, amorphous shapes that slowly shift using `border-radius` keyframe animations, never sharp or geometric.
- Colors are warm and glowing: lava red, lava orange, lava pink, warm glow yellow. Blobs should feel like they emit light from within.
- The chrome lamp body provides structural metallic framing — `background: linear-gradient` simulating brushed metal.
- Liquid is visible: a transparent or semi-transparent container showing colored wax suspended inside.
- The aesthetic is MESMERIC and SLOW — animations run 8-20 seconds, never fast. This is hypnotic flow, not bouncy UI.
- Retro 60s/70s energy pervades the design — round shapes, warm tones, psychedelic gradients, and chrome accents.

## Core Material Recipes

### 1) Morphing Wax Blob

The foundational element: an amorphous blob that continuously shifts shape.

```css
@keyframes blob-morph {
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50%  { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
  75%  { border-radius: 60% 30% 60% 40% / 70% 50% 40% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

.blob {
  animation: blob-morph 12s ease-in-out infinite;
}
```

Tailwind: `rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob-morph_12s_ease-in-out_infinite]`.

### 2) Lava Lamp Container

The glass cylinder housing the wax and liquid.

- Outer glass: `bg-white/5 border-2 border-white/10 rounded-3xl backdrop-blur-sm`.
- Liquid fill: `bg-gradient-to-b from-[#ff6090]/20 via-[#e03030]/30 to-[#ff8c30]/20`.
- Inner glow: `shadow-[inset_0_0_30px_rgba(224,48,48,0.15)]`.

Full:
```html
<div class="relative w-24 h-64 rounded-3xl border-2 border-white/10 bg-white/5 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-[#ff6090]/20 via-[#e03030]/30 to-[#ff8c30]/20"></div>
  <div class="absolute inset-0 shadow-[inset_0_0_30px_rgba(224,48,48,0.15)]"></div>
  <!-- Blob floats inside -->
</div>
```

### 3) Chrome Lamp Body

Metallic chrome top cap and base using CSS gradients.

- Chrome gradient: `bg-gradient-to-b from-[#d0d8d8] via-[#c0c8c8] via-[#8a9090] to-[#6a7070]`.
- Highlight stripe: `bg-gradient-to-r from-transparent via-white/40 to-transparent`.
- Rounded ends: `rounded-full` for cap, `rounded-b-2xl` for base.

Full cap:
```html
<div class="w-28 h-6 bg-gradient-to-b from-[#d0d8d8] via-[#c0c8c8] via-[#8a9090] to-[#6a7070] rounded-t-full relative">
  <div class="absolute inset-x-0 top-1 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
</div>
```

### 4) Warm Lava Glow

Radial glow emanating from a blob, simulating internal warmth.

- `bg-[radial-gradient(circle,rgba(224,48,48,0.3)_0%,rgba(255,140,48,0.1)_50%,transparent_70%)]`.
- Pair with `animate-pulse` at slow speed: `animate-[pulse_4s_ease-in-out_infinite]`.

### 5) Rising Wax Blob Animation

Blob that slowly rises inside the container, then pauses, then sinks.

```css
@keyframes wax-rise {
  0%   { transform: translateY(60%) scale(0.8); }
  40%  { transform: translateY(-10%) scale(1); }
  60%  { transform: translateY(-10%) scale(1.05); }
  100% { transform: translateY(60%) scale(0.8); }
}

.wax-blob {
  animation: wax-rise 16s ease-in-out infinite;
}
```

Tailwind: `animate-[wax-rise_16s_ease-in-out_infinite]`.

### 6) Psychedelic Color Gradient

Slowly rotating or shifting color background evoking 60s/70s poster art.

```css
@keyframes psychedelic-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.psychedelic-bg {
  background: linear-gradient(135deg, #e03030, #ff8c30, #ff6090, #e03030);
  background-size: 300% 300%;
  animation: psychedelic-shift 10s ease infinite;
}
```

Tailwind: `bg-[linear-gradient(135deg,#e03030,#ff8c30,#ff6090,#e03030)] bg-[length:300%_300%] animate-[psychedelic-shift_10s_ease_infinite]`.

### 7) Retro Base and Cap Accent

Rounded chrome pieces at top and bottom of the lamp structure.

- Base: `w-32 h-8 bg-gradient-to-b from-[#8a9090] to-[#4a5050] rounded-b-xl shadow-lg`.
- Cap: `w-28 h-6 bg-gradient-to-b from-[#d0d8d8] to-[#6a7070] rounded-t-full`.
- Both wrapped in a flex column with `items-center gap-0`.

## Color Palette System

### Lava Lamp Palette

| Color | Hex | Usage |
|---|---|---|
| Lava Red | `#e03030` | Primary blob, hot wax, danger accent |
| Lava Orange | `#ff8c30` | Secondary blob, warm glow, gradient midpoint |
| Lava Pink | `#ff6090` | Accent blob, psychedelic highlight |
| Chrome Silver | `#c0c8c8` | Lamp body, metallic surfaces, borders |
| Chrome Dark | `#6a7070` | Chrome shadows, base darkening |
| Container Glass | `bg-white/5 border-white/10` | Lamp body transparency |
| Warm Glow Yellow | `#ffcc66` | Inner radiance, light accents |
| Base Black | `#1a1a1a` | Background, base structure |

Rules: Colors are WARM and GLOWING — reds, oranges, pinks dominate. Chrome provides cool metallic contrast. Backgrounds should be dark (black or near-black) so the glowing blobs pop. Never use cool blues or greens as primary — this is a warm palette. Glass containers use transparency (`bg-white/5`) so the blobs inside are visible.

## Typography Recommendations

Lava lamp typography channels retro 60s/70s poster art and psychedelic lettering:

- **Display headings:** Space Grotesk, Righteous, or Bungee (rounded, groovy, retro).
- **Accent/display:** Pacifico or Fredoka One (psychedelic bubble lettering).
- **Body:** Inter, Nunito, or Poppins (clean, rounded, friendly).
- **Labels:** `font-sans font-medium tracking-wide text-sm` (clean and legible).
- Sans-serif preferred — lava lamp UI is modern-retro, not classical serif.
- Avoid thin/light font weights — wax is heavy and round, text should feel solid.

## Component Architecture Pattern

1. Dark background (near-black — the lamp's environment, a dark room).
2. Chrome lamp structure (metallic cap on top, metallic base on bottom).
3. Glass container (transparent cylinder between cap and base).
4. Morphing wax blobs inside the container (animated `border-radius`).
5. Warm radial glow emanating from the blobs.
6. Retro sans-serif typography with rounded letterforms.
7. Optional psychedelic gradient backgrounds for hero sections.

## Interaction Rules

- Default state: slow morphing, warm glow, hypnotic flow.
- Hover: blob glow intensifies, morph speed increases slightly.
  - `hover:shadow-[0_0_40px_rgba(224,48,48,0.4)] hover:scale-105 transition-all duration-700`.
- Active: blob compresses (press effect).
  - `active:scale-95 transition-transform duration-200`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ff8c30] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`.
- Transitions: `transition-all duration-700` (slow, deliberate, like wax movement).
- All animations run 8-20 seconds — this is NEVER fast. Lava lamps are hypnotic.

## Reusable Tailwind Tokens

- Wax blob (red): `bg-[#e03030] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob-morph_12s_ease-in-out_infinite] shadow-[0_0_20px_rgba(224,48,48,0.3)]`
- Wax blob (orange): `bg-[#ff8c30] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob-morph_12s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,140,48,0.3)]`
- Wax blob (pink): `bg-[#ff6090] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob-morph_12s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,96,144,0.3)]`
- Chrome cap: `bg-gradient-to-b from-[#d0d8d8] via-[#c0c8c8] to-[#6a7070] rounded-t-full`
- Chrome base: `bg-gradient-to-b from-[#8a9090] to-[#4a5050] rounded-b-xl`
- Glass container: `bg-white/5 border-2 border-white/10 rounded-3xl backdrop-blur-sm`
- Warm glow: `bg-[radial-gradient(circle,rgba(224,48,48,0.3)_0%,rgba(255,140,48,0.1)_50%,transparent_70%)]`
- Retro button: `bg-[#e03030] text-white font-sans font-medium rounded-full px-8 py-3 shadow-[0_0_20px_rgba(224,48,48,0.3)] hover:shadow-[0_0_30px_rgba(224,48,48,0.5)] transition-all duration-500`

## Quality Checklist (must pass)

- Wax blobs morph using `border-radius` keyframe animation (never static).
- Animation duration is 8-20 seconds (slow and hypnotic).
- Colors are warm (reds, oranges, pinks) — no cool blues or greens as primary.
- Chrome elements have metallic gradient (not flat gray).
- Glass container is semi-transparent (blobs visible inside).
- Background is dark so the warm glow pops.
- Radial glow emanates from blobs (warm light emission).
- Typography is rounded and retro (sans-serif, bubble lettering optional).
- At least one blob uses the full morphing `border-radius` keyframe.
- The aesthetic reads as a lava lamp — slow, warm, hypnotic, retro.

## Anti-Patterns

- Fast animations (lava lamps are hypnotic — 8-20 seconds minimum per cycle).
- Sharp corners on blobs (wax is organic and amorphous — use `border-radius` keyframes).
- Cool color palette (blue/green primary breaks the lava lamp aesthetic).
- Flat gray chrome (metallic must use gradients for realistic brushed metal).
- Opaque containers (the glass must be transparent or semi-transparent so blobs are visible).
- Light backgrounds (lava lamps glow in the dark — dark backgrounds are required).
- Static blobs (without morphing animation, they are just colored circles).
- Sans-serif thin/light weights (text should feel solid like the wax).
- Missing glow effect (blobs must appear to emit light).
- Bouncy or snappy easing (lava moves with `ease-in-out`, never elastic or springy).

## Accessibility Considerations

- Warm colors on dark backgrounds generally provide good contrast for text.
- Glow effects must not reduce text readability — keep decorative glow behind or around text, not overlapping.
- Focus states: `focus:ring-2 focus:ring-[#ff8c30]` (orange ring visible on dark backgrounds).
- Morphing blob animations must respect `prefers-reduced-motion: reduce` — provide a static fallback blob shape.
- `animate-[blob-morph_12s_ease-in-out_infinite]` should be disabled when reduced motion is preferred: use `motion-reduce:animate-none`.
- Warm glow shadows are decorative — content must be readable without them.
- Touch targets must be adequate (`px-8 py-3` minimum on buttons).
- Chrome gradients should not create false interactive affordances — metallic surfaces look clickable only when they actually are.
- Color is never the sole indicator of state — pair warm/cool states with icon or text changes.
- Ensure blob animations do not cause vestibular discomfort — slow speeds (12s+) mitigate this.
