---
name: ski-resort-ui
description: Build ski resort / alpine UI components (snow-capped peaks, warm log cabin interiors, après-ski coziness, cable car aesthetics, mountain pine, fireplace warmth against snowy cold) with snowy whites, warm timber, and the dual warmth-and-cold of winter mountain holidays. Trigger this skill when the user asks for ski resort, alpine lodge, winter mountain, après-ski, chalet design, or snowy cabin interfaces.
---

# Ski Resort / Alpine UI

Use this skill to design and implementation warm-yet-wintry interfaces inspired by ski resorts and alpine lodges: snowy mountain backdrops, warm timber-and-stone interiors, après-ski coziness, cable car accents, mountain pine decorations, and the beautiful contrast of cold snow against warm firelight.

## Core Material Recipes

### 1) Snowy Mountain Background

Cold snow-to-peak gradient.

- `bg-gradient-to-b from-[#b3d9f2] via-[#e0f0ff] to-[#f5f5f0]` (sky blue to snow white).

### 2) Log Cabin Panel

Warm timber interior surface.

- `bg-gradient-to-br from-[#6a4a2a] to-[#4a3018] border-2 border-[#3a2410] p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Log grain: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_12px,rgba(0,0,0,0.08)_12px,rgba(0,0,0,0.08)_14px)]` (horizontal log courses).

### 3) Stone Fireplace Accent

Rough stone surface (the lodge fireplace).

- `bg-[#7a7068]` with stone texture: `bg-[radial-gradient(rgba(100,90,80,0.3)_2px,transparent_2px),radial-gradient(rgba(120,110,100,0.2)_1.5px,transparent_1.5px)] bg-[size:20px_20px,12px_12px]`.
- Glow: `shadow-[inset_0_-10px_30px_rgba(255,120,30,0.1)]` (fireplace warmth from below).

### 4) Après-Ski Button

Warm button contrasting the cold snow.

- `bg-gradient-to-b from-[#c4471a] to-[#9a3010] text-[#fff5f0] font-medium rounded-lg px-8 py-3 border-2 border-[#6a2008] shadow-[0_3px_0_#6a2008,inset_0_1px_0_rgba(255,255,255,0.1)] hover:translate-y-1 hover:shadow-[0_1px_0_#6a2008] active:shadow-none transition-all`.

### 5) Mountain Pine Accent

Simple alpine pine tree SVG.

```html
<svg viewBox="0 0 40 80" class="w-10 h-20 opacity-30">
  <path d="M20,5 L10,25 L15,25 L5,45 L12,45 L0,70 L40,70 L28,45 L35,45 L25,25 L30,25 Z" fill="#1a4a1a"/>
  <rect x="17" y="70" width="6" height="8" fill="#3a2a10"/>
  <!-- Snow on branches -->
  <path d="M10,25 L20,20 L30,25" fill="#ffffff" opacity="0.6"/>
  <path d="M5,45 L20,40 L35,45" fill="#ffffff" opacity="0.5"/>
</svg>
```

### 6) Cable Car / Gondola Accent

Mountain transport SVG decoration.

```html
<svg viewBox="0 0 40 50" class="w-10 h-12 opacity-30">
  <line x1="0" y1="5" x2="40" y2="5" stroke="#4a4a4a" stroke-width="1"/>
  <line x1="20" y1="5" x2="20" y2="15" stroke="#4a4a4a" stroke-width="0.5"/>
  <rect x="10" y="15" width="20" height="20" rx="3" fill="#c41e1e"/>
  <rect x="12" y="18" width="6" height="6" fill="#b3d9f2"/>
  <rect x="22" y="18" width="6" height="6" fill="#b3d9f2"/>
</svg>
```

### 7) Snowfall Accent

Gentle falling snow particles.

- Small white dots: `w-1 h-1 rounded-full bg-white/60` with slow falling animation.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Snow White | `#f5f5f0` | Cold background |
| Sky Blue | `#b3d9f2` | Winter sky |
| Log Brown | `#6a4a2a` | Warm interior |
| Dark Wood | `#4a3018` | Deep timber |
| Stone Gray | `#7a7068` | Fireplace |
| Fire Orange | `#c4471a` | Warmth accent (après-ski) |
| Pine Green | `#1a4a1a` | Mountain trees |
| Deep Red | `#9a3010` | Traditional alpine accent |

Rules: The palette is a DUALITY — cold snow whites/blues outside vs warm timber/stone/fire inside. The contrast between cold and warm IS the ski resort aesthetic.

## Typography Recommendations

- **Display:** Oswald, Bebas Neue (tall condensed — like mountain signage).
- **Body:** Inter, DM Sans (clean readable sans).
- **Labels:** `font-bold uppercase tracking-widest text-sm` (like trail signs and lift markers).
- Typography should feel like mountain resort signage — bold and weather-proof.

## Reusable Tailwind Tokens

- Snowy bg: `bg-gradient-to-b from-[#b3d9f2] via-[#e0f0ff] to-[#f5f5f0]`.
- Log cabin: `bg-gradient-to-br from-[#6a4a2a] to-[#4a3018] border-2 border-[#3a2410]`.
- Stone fireplace: `bg-[#7a7068]` with stone texture + fire glow.
- Après-ski button: `bg-gradient-to-b from-[#c4471a] to-[#9a3010] border-2 border-[#6a2008] shadow-[0_3px_0_#6a2008]`.
- Pine tree: SVG green triangle layers with snow caps.

## Quality Checklist

- Dual cold-warm palette (snowy blues/whites + warm timber/fire orange).
- At least one warm timber/wood panel (the lodge interior).
- Snowy mountain gradient background.
- At least one mountain pine tree SVG.
- Cable car/gondola decoration present.
- Stone fireplace accent with warm glow.
- Après-ski orange/red accents for warmth.
- Typography is bold mountain-resort signage style.
- The aesthetic reads as ski resort / alpine lodge / winter mountain.
- The cold-outside / warm-inside duality is clearly expressed.

## Anti-Patterns

- Monochromatic cold palette (missing the warm lodge contrast).
- Missing warm timber/wood surfaces (the lodge interior is essential).
- Missing mountain pine or tree decorations (alpine flora is key).
- Tropical or summer aesthetics (this is WINTER mountain).
- Missing the fireplace/candle warmth element (the heat source contrast).
- Smooth modern surfaces (ski lodges are rough timber and stone).
- Missing snowfall or snow-capped elements.
- Light thin typography (mountain signage is bold and weatherproof).
- Missing cable car / ski lift reference (these are iconic ski resort elements).
- Monochrome warm palette (missing the cold snow contrast).

## Accessibility Considerations

- Snow-white backgrounds with dark text provide excellent contrast (WCAG AAA).
- Warm timber panels with light text must be verified (WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#c4471a]/50` (orange fire-glow ring).
- Snowfall animations must respect `prefers-reduced-motion`.
- Decorative SVGs (pine trees, cable cars) must be `aria-hidden="true"`.
- Touch targets must be adequate despite timber border styling.
- The cold/warm contrast must not create confusion about interactive vs non-interactive elements.
