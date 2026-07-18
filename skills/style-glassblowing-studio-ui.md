---
name: glassblowing-studio-ui
description: Build glassblowing studio UI components (glowing molten glass, blowpipe, glory hole furnace, color rods, shaped vessel, heat shimmer, workshop tools) with molten glow effects, transparent glass surfaces, and the fiery craft of glass artistry. Trigger this skill when the user asks for glassblowing, glass art, molten glass, furnace glow, glass studio, glassblower aesthetic, glory hole effects, transparent UI, blown glass forms, or artisan glass-craft interfaces.
---

# Glassblowing Studio UI

Use this skill to design and implement molten-glass artistry interfaces with glowing orange-yellow-white gradients, transparent glass surfaces, blowpipe silhouettes, glory hole furnace openings, color rod displays, shaped vessel forms, heat shimmer distortion, and the visual language of a handcraft glass studio at peak temperature.

## Non-Negotiable Foundations

- Glassblowing is fire-first: every surface exists in proximity to extreme heat. Glow is not decorative -- it is the material state of the medium. Molten glass is alive with luminous orange-yellow-white energy.
- Surfaces are either hot (glowing, semi-transparent) or cold (clear, frosted, dark workshop). There is no neutral -- the studio is always either radiant or cooling.
- Colors radiate from a molten core: bright orange (#ff6600), molten yellow (#ffcc00), white-hot (#fff5e0), against deep furnace darks (#2a1a0a) and workshop blacks (#1a1a1a).
- Glass is transparent and translucent -- surfaces should reveal what is behind them, with refraction, refraction halos, and soft depth-of-field blur.
- Material honesty: the blowpipe is thin and metal, the glory hole is a circular furnace opening, color rods are thin colored sticks, shaped vessels are organic curves born from rotation. Nothing is geometric in a manufactured sense.
- Typography blends organic warmth (soft serif for headings) with workshop pragmatism (condensed sans for labels and measurements).
- The aesthetic is luminous, fluid, and alive -- everything looks like it is in motion, being shaped, being turned.

## Core Material Recipes

### 1) Molten Glass Surface (the signature element)

The foundational hot material: glass at working temperature, radiating light and heat.

- Background gradient: `bg-gradient-to-br from-[#fff5e0] via-[#ffcc00] to-[#ff6600]`.
- Glow: `shadow-[0_0_20px_rgba(255,102,0,0.6),0_0_60px_rgba(255,102,0,0.3)]`.
- Inner luminosity: `shadow-[inset_0_0_15px_rgba(255,245,224,0.4),inset_0_0_30px_rgba(255,204,0,0.2)]`.
- Translucency: `bg-opacity-90` or layer with `backdrop-blur-sm` for glass-like depth.
- Border: none -- molten glass has no hard edges; it glows into its surroundings.

### 2) Clear Glass Panel

Cooled glass surface for content containers -- transparent with subtle edge definition.

- Background: `bg-white/[0.06]` (barely-there glass tint).
- Border: `border border-white/[0.12]`.
- Inner reflection: `shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(255,255,255,0.05)]`.
- Refraction edge: `backdrop-blur-md` for the frosted-glass look behind the panel.
- Depth: `shadow-[0_8px_32px_rgba(0,0,0,0.3)]` to float above the workshop dark.

### 3) Heat Shimmer Effect

The wavy distortion visible above hot surfaces -- animated atmospheric heat.

```css
@keyframes heatShimmer {
  0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.6; }
  25% { transform: translateY(-2px) scaleY(1.02); opacity: 0.8; }
  50% { transform: translateY(-1px) scaleY(0.98); opacity: 0.5; }
  75% { transform: translateY(-3px) scaleY(1.01); opacity: 0.7; }
}
.heat-shimmer {
  animation: heatShimmer 3s ease-in-out infinite;
  filter: blur(1px);
}
```

Overlay element:
```html
<div class="absolute inset-x-0 bottom-0 h-20 heat-shimmer
  bg-gradient-to-t from-[#ff6600]/[0.15] to-transparent pointer-events-none">
</div>
```

### 4) Glory Hole Furnace Opening

The circular furnace mouth -- a ring of intense orange-white light.

- Outer ring: `w-32 h-32 rounded-full bg-gradient-to-br from-[#ff6600] via-[#ffcc00] to-[#fff5e0]`.
- Glow halo: `shadow-[0_0_30px_rgba(255,102,0,0.7),0_0_80px_rgba(255,204,0,0.4),0_0_120px_rgba(255,102,0,0.2)]`.
- Inner dark (the furnace depth): absolute centered circle `w-20 h-20 rounded-full bg-[#2a1a0a]`.
- Rim highlight: inner ring `border-2 border-[#ffcc00]/50 rounded-full`.
- Pulsing animation: `animate-pulse` at slow rate or custom 4s cycle for breathing glow.

### 5) Blowpipe Silhouette

The long thin metal rod used by the glassblower -- a minimal dark linear element.

- Pipe body: `h-1 bg-gradient-to-r from-[#4a4a4a] via-[#6a6a6a] to-[#4a4a4a] rounded-full`.
- Length: `w-full` or `w-3/4` depending on context.
- Mouthpiece end: `w-2 h-2 rounded-full bg-[#3a3a3a]` at the left terminus.
- Glass gather at tip: small molten blob `w-6 h-6 rounded-full bg-gradient-to-br from-[#fff5e0] via-[#ffcc00] to-[#ff6600] shadow-[0_0_12px_rgba(255,102,0,0.6)]`.
- Rotation animation: slight continuous rotation for the turning motion.

```css
@keyframes pipeTurn {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.blowpipe-turn {
  animation: pipeTurn 8s linear infinite;
}
```

### 6) Color Rod Display

Thin colored glass sticks arranged in a fan or row -- the palette of the glassblower.

- Rod shape: `w-1.5 h-20 rounded-full` (thin, tall, cylindrical).
- Colors arranged side by side with 4px gaps.
- Each rod has subtle vertical gradient simulating glass cylindrical highlight.
- Cobalt rod: `bg-gradient-to-r from-[#1a4a8a] via-[#2a6aba] to-[#1a4a8a]`.
- Ruby rod: `bg-gradient-to-r from-[#c41e1e] via-[#e43e3e] to-[#c41e1e]`.
- Emerald rod: `bg-gradient-to-r from-[#1a6a3a] via-[#2a8a4a] to-[#1a6a3a]`.
- Highlight: `shadow-[inset_-1px_0_0_rgba(255,255,255,0.2)]` for glass reflection.

### 7) Shaped Vessel Silhouette

Organic blown-glass forms -- bowls, vases, bottles, and abstract vessels.

- Use SVG paths with smooth curves (no sharp angles).
- Fill with gradient: `fill="url(#vesselGradient)"` from molten orange at base to clear at rim.
- Opacity variation: `opacity-0.8` for translucency.
- Subtle glow: `filter: drop-shadow(0 0 8px rgba(255,102,0,0.3))`.
- Forms: bulbous base tapering to narrow neck (vase), wide rim flattening (bowl), elongated cylinder (bottle).

### 8) Workshop Dark Surface

The studio background -- deep dark with warm undertones from nearby furnaces.

- Background: `bg-[#1a1a1a]` (near-black with slight warmth).
- Ambient glow: `bg-[radial-gradient(ellipse_at_center,rgba(255,102,0,0.05)_0%,transparent_70%)]`.
- Floor texture: subtle noise overlay at `opacity-[0.03]`.
- Tool shadows: objects cast long shadows away from furnace light direction.

## Color Palette System

### Core Glassblowing Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Molten White | `#fff5e0` | White-hot glass core | Hottest highlights, center glow |
| Molten Yellow | `#ffcc00` | Glass at working temp | Primary glow, active states |
| Molten Orange | `#ff6600` | Glass cooling from heat | Borders, accents, secondary glow |
| Furnace Dark | `#2a1a0a` | Furnace interior depth | Deep shadows, furnace mouths |
| Workshop Dark | `#1a1a1a` | Studio floor and walls | Primary background |
| Workshop Mid | `#2d2d2d` | Concrete/workshop surfaces | Elevated panels, card backgrounds |
| Glass Clear | `rgba(255,255,255,0.06)` | Transparent glass tint | Glass panel backgrounds |
| Glass Edge | `rgba(255,255,255,0.12)` | Glass edge reflection | Borders, dividers |
| Cobalt Blue | `#1a4a8a` | Cobalt color rod | Cool accent, links, information |
| Ruby Red | `#c41e1e` | Ruby color rod | Destructive actions, alerts, heat |
| Emerald Green | `#1a6a3a` | Emerald color rod | Success states, secondary accent |
| Amber Smoke | `#c97a2a` | Cooled amber glass | Warm neutral, secondary text |
| Steam White | `rgba(255,255,255,0.4)` | Steam / frosted glass | Overlays, frosted panels |
| Pipe Metal | `#4a4a4a` | Steel blowpipe | Metal accents, tool elements |

Rules: The molten gradient (white-yellow-orange) is the primary visual engine. Cool colors (cobalt, ruby, emerald) appear only as color rod accents -- never as dominant surfaces. Dark backgrounds are always furnace-dark or workshop-dark, never pure black (#000). Glass transparency is always present through backdrop-blur or opacity layers.

## Typography Recommendations

Glassblowing studio typography blends organic warmth with workshop clarity:

- **Display headings:** Cormorant Garamond, Playfair Display, or Spectral (warm serif with fluid strokes that echo molten flow).
- **Alternative display:** Libre Caslon Display, Zilla Slab (organic, handmade feel).
- **Body:** Source Serif 4, Bitter, or Noto Serif (readable serif with warmth).
- **Labels/workshop:** Barlow Condensed, Oswald, or DM Sans (clean condensed sans for measurements, tool labels, temperature readings).
- **Data/temperatures:** JetBrains Mono or Space Mono (monospace for furnace temps, timing, measurements).
- The MIX of warm serif headings with condensed sans body creates the glassblowing tension -- artistry meeting precision craft.

## Component Architecture Pattern

1. Dark workshop background (#1a1a1a) with subtle radial furnace glow.
2. Clear glass panels with backdrop-blur for content containers.
3. Molten glass accents (glowing gradients) for primary actions and highlights.
4. Glory hole furnace elements as section headers or focal points.
5. Color rod accents for categorization and navigation.
6. Heat shimmer effects above hot elements.
7. Blowpipe linear elements as dividers and connectors.
8. Shaped vessel silhouettes as decorative framing elements.

## Interaction Rules

- Default state: luminous but calm -- glass panels floating in workshop dark.
- Hover: molten glow intensifies (`hover:shadow-[0_0_30px_rgba(255,102,0,0.6)]`), glass brightens (`hover:bg-white/[0.1]`).
- Active: heat pulse -- momentary flash to molten yellow (`active:bg-[#ffcc00]/20 active:shadow-[0_0_40px_rgba(255,204,0,0.5)]`).
- Focus: glowing ring in molten orange (`focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]`).
- Transitions: `transition-all duration-300 ease-out` (fluid, like cooling glass -- smooth deceleration).
- Heat shimmer: continuous animation above any "hot" element.
- Glory hole pulse: slow breathing animation (4s cycle) on furnace elements.
- Pour/drip: content appearing slides down with slight wobble, like molten glass flowing.

## Reusable Tailwind Tokens

- Molten glass: `bg-gradient-to-br from-[#fff5e0] via-[#ffcc00] to-[#ff6600] shadow-[0_0_20px_rgba(255,102,0,0.6)]`
- Clear glass panel: `bg-white/[0.06] backdrop-blur-md border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]`
- Glory hole: `rounded-full bg-gradient-to-br from-[#ff6600] via-[#ffcc00] to-[#fff5e0] shadow-[0_0_30px_rgba(255,102,0,0.7),0_0_80px_rgba(255,204,0,0.4)]`
- Workshop dark: `bg-[#1a1a1a] bg-[radial-gradient(ellipse_at_center,rgba(255,102,0,0.05)_0%,transparent_70%)]`
- Molten button: `bg-gradient-to-b from-[#ffcc00] to-[#ff6600] text-[#2a1a0a] font-bold shadow-[0_3px_0_#c45000,inset_0_1px_0_rgba(255,255,255,0.3)]`
- Molten button hover: `hover:from-[#fff5e0] hover:to-[#ffcc00] hover:shadow-[0_4px_20px_rgba(255,102,0,0.5)]`
- Cobalt accent: `text-[#1a4a8a] [text-shadow:0_0_6px_rgba(26,74,138,0.4)]`
- Ruby accent: `text-[#c41e1e] [text-shadow:0_0_6px_rgba(196,30,30,0.4)]`
- Emerald accent: `text-[#1a6a3a] [text-shadow:0_0_6px_rgba(26,106,58,0.4)]`
- Heat shimmer: `animate-[heatShimmer_3s_ease-in-out_infinite] blur-[1px]`
- Glass divider: `h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent`
- Pipe divider: `h-1 bg-gradient-to-r from-[#4a4a4a] via-[#6a6a6a] to-[#4a4a4a] rounded-full`

## Quality Checklist (must pass)

- Primary glow uses molten gradient (white-yellow-orange) on key interactive and focal elements.
- Background is workshop dark (#1a1a1a) with warm furnace radial glow, never pure black.
- Content containers use clear glass panels with backdrop-blur and subtle borders.
- Color rod accents (cobalt, ruby, emerald) appear for categorization or navigation.
- Heat shimmer animation is present above hot/focal elements.
- Glory hole furnace element appears as a focal or decorative piece.
- Typography mixes warm serif headings with condensed sans or monospace for data.
- All shadows are luminous (glow-based), not just dark drop shadows.
- Glass transparency is present through opacity layers or backdrop-blur.
- The aesthetic reads as a handcraft glass studio at working temperature.

## Anti-Patterns

- Pure black (#000) backgrounds (use furnace-dark #2a1a0a or workshop-dark #1a1a1a with warm undertones).
- Solid opaque panels (glass is always transparent or translucent -- use backdrop-blur and opacity).
- Cool-dominant color palettes (blue/green as primary -- the palette is molten warm with cool accents only).
- Sharp geometric corners on glass elements (glass forms are organic and curved).
- Static glow effects (furnace light breathes and pulses, it is never frozen).
- Flat solid-color buttons (buttons should have molten gradient depth).
- Missing heat shimmer or glow effects (the studio is always hot near the work).
- Heavy drop shadows without glow (every shadow should have a warm luminous component).
- Precise grid layouts (glass is organic -- allow for asymmetry and fluid spacing).
- Modern flat sans-serif alone (needs warm serif for artistry + condensed sans for workshop clarity).
- Missing glass transparency or translucency (clear glass is the material signature).
- Dark text on molten surfaces (use furnace-dark text on glowing backgrounds).

## Accessibility Considerations

- Molten orange/yellow text on dark backgrounds provides strong contrast -- verify WCAG AA minimum.
- Glowing elements must respect `prefers-reduced-motion` (disable pulse, shimmer, and glow animations).
- Glass panel text must be readable through the transparency -- test with various backdrop-blur intensities.
- Focus states must be visible against both dark and molten backgrounds (`focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2`).
- Decorative heat shimmer and glow effects must be `aria-hidden="true"`.
- Color rod categories must not rely on color alone -- add text labels or icons.
- Glory hole and furnace elements are decorative and must be `aria-hidden="true"` or have appropriate labels.
- Touch targets on glass panels must be minimum 44x44px despite transparent styling.
- Heat shimmer animation must not obscure underlying text or interactive elements.
- Gradient text on molten surfaces must maintain sufficient contrast at all gradient points.
