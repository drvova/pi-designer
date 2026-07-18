---
name: medieval-castle-ui
description: Build medieval castle UI components (stone ramparts, arrow slits, great hall, heraldic banners, portcullis gate, torch sconces, spiral staircase) with heavy stone textures, heraldic SVG elements, and the fortified grandeur of feudal strongholds. Trigger this skill when the user asks for medieval castle, fortress, stronghold, keep, battlement, rampart, heraldic banner, portcullis gate, arrow slit window, torch sconce, great hall, spiral staircase, or feudal fortress interface.
---

# Medieval Castle UI

Use this skill to design and build imposing, atmospheric interfaces inspired by feudal strongholds: rough-cut stone block walls with visible mortar lines, narrow arrow slit windows with angled reveals, heraldic banners bearing quartered shield designs, iron portcullis gate grids, flickering torch sconces casting warm dancing light, spiraling stone staircases, and the imposing great hall with its hanging standards. The aesthetic communicates centuries of siege-hardened permanence, lordly authority, and the martial weight of a medieval fortress.

## Core Material Recipes

### 1) Stone Block Wall Surface

Rough-cut ashlar masonry with visible mortar joints.

- `bg-[#7a7a6a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_38px,rgba(74,74,58,0.6)_38px,rgba(74,74,58,0.6)_40px),repeating-linear-gradient(90deg,transparent_0px,transparent_78px,rgba(74,74,58,0.4)_78px,rgba(74,74,58,0.4)_80px)] border-2 border-[#4a4a3a] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_2px_6px_rgba(0,0,0,0.3)]`.
- The repeating gradients create horizontal mortar lines every 40px and vertical lines every 80px, staggered per course for authentic ashlar coursing.
- Subtle noise overlay for rough-hewn stone: `bg-[radial-gradient(rgba(90,90,70,0.08)_1px,transparent_1px)] bg-[size:3px_3px]` layered on top.

### 2) Arrow Slit Window Frame

Narrow defensive window with angled jambs and splayed interior.

```html
<div class="relative bg-[#1a1a1a] border-4 border-[#4a4a3a] p-0 flex items-center justify-center" style="width:60px; height:180px;">
  <!-- Outer stone surround -->
  <div class="absolute inset-0 border-4 border-[#5a5a4a] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
  <!-- The slit itself -->
  <svg viewBox="0 0 20 120" class="w-5 h-full z-10">
    <polygon points="0,0 20,0 14,60 6,60" fill="#1a1a1a" stroke="#4a4a3a" stroke-width="1"/>
    <polygon points="6,60 14,60 12,120 8,120" fill="#1a1a1a" stroke="#4a4a3a" stroke-width="1"/>
  </svg>
  <!-- Faint daylight glow through the slit -->
  <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(180,190,200,0.05)_0%,rgba(180,190,200,0.15)_50%,rgba(180,190,200,0.05)_100%)]"></div>
</div>
```

- The SVG creates the classic cross-slit shape: wide at top, narrowing to a waist, widening slightly at bottom — the lozenge pattern used in Norman and Gothic fortifications.

### 3) Heraldic Banner SVG

Hanging fabric banner with quartered shield design and heraldic charge.

```html
<svg viewBox="0 0 120 200" class="w-24 h-40 drop-shadow-lg">
  <!-- Banner pole -->
  <rect x="55" y="0" width="10" height="16" rx="2" fill="#4a3a1a"/>
  <!-- Hanging fabric -->
  <path d="M30,16 L90,16 L88,160 L60,180 L32,160 Z" fill="#c4b898" stroke="#4a4a3a" stroke-width="1"/>
  <!-- Fabric folds -->
  <path d="M40,16 L42,160 L48,158" fill="none" stroke="rgba(74,74,58,0.15)" stroke-width="1"/>
  <path d="M60,16 L60,162" fill="none" stroke="rgba(74,74,58,0.1)" stroke-width="1"/>
  <path d="M80,16 L78,160 L72,158" fill="none" stroke="rgba(74,74,58,0.15)" stroke-width="1"/>
  <!-- Shield on the banner -->
  <path d="M45,40 L75,40 L75,90 L60,110 L45,90 Z" fill="#8a1a1a" stroke="#c4a043" stroke-width="2"/>
  <!-- Quartered divisions -->
  <line x1="60" y1="40" x2="60" y2="110" stroke="#c4a043" stroke-width="1.5"/>
  <line x1="45" y1="75" x2="75" y2="75" stroke="#c4a043" stroke-width="1.5"/>
  <!-- Quarter charges: lions passant (simplified) -->
  <!-- Top-left -->
  <text x="51" y="70" font-size="14" fill="#c4a043" font-family="serif">&#x265C;</text>
  <!-- Top-right -->
  <text x="63" y="70" font-size="14" fill="#1a2a5a" font-family="serif">&#x265C;</text>
  <!-- Bottom-left -->
  <text x="63" y="100" font-size="14" fill="#c4a043" font-family="serif">&#x265C;</text>
  <!-- Bottom-right -->
  <text x="51" y="100" font-size="14" fill="#8a1a1a" font-family="serif">&#x265C;</text>
  <!-- Fringe -->
  <path d="M32,160 L35,172 L38,158 L41,172 L44,158 L47,172 L50,158 L53,172 L56,158 L59,172 L62,158 L65,172 L68,158 L71,172 L74,158 L77,172 L80,158 L83,172 L86,158 L88,160" fill="#c4a043" opacity="0.7"/>
</svg>
```

- The banner hangs from a horizontal pole with visible fabric folds achieved via subtle stroke paths. The shield is quartered in alternating heraldic red and blue with gold charges.

### 4) Portcullis Gate Grid

Iron lattice gate pattern — interlocking vertical and horizontal bars with pointed tips.

```html
<svg viewBox="0 0 200 250" class="w-full h-auto opacity-80">
  <defs>
    <linearGradient id="iron" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a4a4a"/>
      <stop offset="50%" stop-color="#2a2a2a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
  </defs>
  <!-- Vertical bars -->
  <rect x="20" y="0" width="4" height="230" fill="url(#iron)" rx="2"/>
  <rect x="60" y="0" width="4" height="230" fill="url(#iron)" rx="2"/>
  <rect x="100" y="0" width="4" height="230" fill="url(#iron)" rx="2"/>
  <rect x="140" y="0" width="4" height="230" fill="url(#iron)" rx="2"/>
  <rect x="180" y="0" width="4" height="230" fill="url(#iron)" rx="2"/>
  <!-- Horizontal bars -->
  <rect x="15" y="20" width="175" height="3" fill="url(#iron)" rx="1"/>
  <rect x="15" y="60" width="175" height="3" fill="url(#iron)" rx="1"/>
  <rect x="15" y="100" width="175" height="3" fill="url(#iron)" rx="1"/>
  <rect x="15" y="140" width="175" height="3" fill="url(#iron)" rx="1"/>
  <rect x="15" y="180" width="175" height="3" fill="url(#iron)" rx="1"/>
  <!-- Pointed tips at bottom -->
  <polygon points="20,230 24,230 22,245" fill="#2a2a2a"/>
  <polygon points="60,230 64,230 62,245" fill="#2a2a2a"/>
  <polygon points="100,230 104,230 102,245" fill="#2a2a2a"/>
  <polygon points="140,230 144,230 142,245" fill="#2a2a2a"/>
  <polygon points="180,230 184,230 182,245" fill="#2a2a2a"/>
  <!-- Rivets at intersections -->
  <circle cx="22" cy="21" r="3" fill="#4a4a4a" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="62" cy="21" r="3" fill="#4a4a4a" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="102" cy="21" r="3" fill="#4a4a4a" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="142" cy="21" r="3" fill="#4a4a4a" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="182" cy="21" r="3" fill="#4a4a4a" stroke="#1a1a1a" stroke-width="0.5"/>
</svg>
```

- The portcullis uses a linear gradient for wrought-iron depth. Vertical bars end in downward-pointing arrow tips. Rivet circles sit at each intersection.

### 5) Torch Sconce Glow Effect

Iron wall bracket holding a flaming torch with warm flickering radiance.

```html
<div class="relative">
  <!-- Torch sconce bracket -->
  <svg viewBox="0 0 60 100" class="w-14 h-24 z-10 relative">
    <g fill="#2a2a2a" stroke="#1a1a1a" stroke-width="0.5">
      <!-- Wall bracket plate -->
      <rect x="22" y="60" width="16" height="30" rx="2"/>
      <!-- Horizontal arm -->
      <rect x="26" y="50" width="8" height="14"/>
      <!-- Torch handle -->
      <rect x="27" y="20" width="6" height="32" rx="1" fill="#5a3a1a" stroke="#3a2a0a"/>
      <!-- Torch head (resin-wrapped) -->
      <ellipse cx="30" cy="20" rx="8" ry="5" fill="#4a3a1a" stroke="#3a2a0a" stroke-width="0.5"/>
    </g>
    <!-- Flame -->
    <path d="M30,4 Q24,12 26,18 Q28,14 30,10 Q32,14 34,18 Q36,12 30,4Z" fill="#ff8c30" opacity="0.9"/>
    <path d="M30,8 Q27,14 28,18 Q30,13 32,18 Q33,14 30,8Z" fill="#ffd060" opacity="0.8"/>
  </svg>
  <!-- Ambient glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[radial-gradient(circle,rgba(255,140,48,0.25)_0%,rgba(255,100,20,0.1)_40%,transparent_70%)] rounded-full -z-10 pointer-events-none"></div>
  <!-- Flicker animation -->
  <style>
    @keyframes torch-flicker {
      0%, 100% { opacity: 0.25; transform: translate(-50%, 0) scale(1); }
      25% { opacity: 0.30; transform: translate(-50%, 0) scale(1.03); }
      50% { opacity: 0.22; transform: translate(-50%, 0) scale(0.97); }
      75% { opacity: 0.28; transform: translate(-50%, 0) scale(1.01); }
    }
    .torch-glow { animation: torch-flicker 3s ease-in-out infinite; }
  </style>
</div>
```

- The radial gradient creates a warm 255/140/48 orange glow emanating outward. The CSS keyframe animation produces a subtle flicker effect simulating real torchlight dancing on stone walls.

### 6) Spiral Staircase Accent

Decorative spiral staircase viewed from above, used as a navigation or progress indicator.

```html
<svg viewBox="0 0 120 120" class="w-24 h-24">
  <defs>
    <radialGradient id="stair-depth" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#7a7a6a"/>
    </radialGradient>
  </defs>
  <!-- Central column -->
  <circle cx="60" cy="60" r="8" fill="#4a4a3a" stroke="#2a2a2a" stroke-width="1"/>
  <!-- Spiral steps (ascending clockwise) -->
  <path d="M60,52 L68,60 L60,52 A8,8 0 0,1 52,60" fill="#5a5a4a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M68,60 L80,56 L68,52" fill="#6a6a5a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M80,56 L88,68 L80,68" fill="#5a5a4a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M88,68 L84,84 L72,76" fill="#6a6a5a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M84,84 L68,88 L64,76" fill="#5a5a4a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M68,88 L48,80 L52,72" fill="#6a6a5a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M48,80 L36,68 L48,64" fill="#5a5a4a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M36,68 L36,52 L48,56" fill="#6a6a5a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M36,52 L52,44 L52,56" fill="#5a5a4a" stroke="#4a4a3a" stroke-width="0.5"/>
  <path d="M52,44 L60,52 L48,48" fill="#6a6a5a" stroke="#4a4a3a" stroke-width="0.5"/>
</svg>
```

- Each step is a wedge-shaped polygon spiraling outward from the central column. Alternating shade values simulate the depth changes of ascending stone treads.

### 7) Great Hall Header with Hanging Banner

Full-width castle header featuring a stone arch opening with heraldic banners on either side.

- Wrapper: `relative bg-gradient-to-b from-[#2a2a1a] via-[#3a3a2a] to-[#1a1a0a] border-b-4 border-[#4a4a3a] overflow-hidden`.
- Stone arch overlay: `absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,transparent_50%,rgba(26,26,10,0.9)_100%)]` creates a dark arch silhouette at the bottom.
- Left banner: `absolute left-8 top-0 w-16 h-48` with the heraldic banner SVG (scaled down).
- Right banner: `absolute right-8 top-0 w-16 h-48` mirror-flipped with `scale-x-[-1]`.
- Center title: `text-center pt-8 pb-12 font-serif text-3xl font-bold text-[#c4a043] tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`.
- Torch sconces flanking the title: two `absolute` positioned torch glow divs using the torch sconce recipe.

### 8) Crenellation / Battlement Top Edge

Merlon-and-crenel pattern for the top of castle walls and card headers.

- `bg-[repeating-linear-gradient(90deg,#7a7a6a_0px,#7a7a6a_40px,transparent_40px,transparent_60px)] h-10` (merlons solid, crenels transparent).
- Combined with a bottom border: `border-b-4 border-[#4a4a3a]` and shadow: `shadow-[0_4px_8px_rgba(0,0,0,0.4)]`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Stone Gray | `#7a7a6a` | Ashlar wall surface |
| Mortar | `#4a4a3a` | Mortar joints, borders, outlines |
| Deep Stone | `#5a5a4a` | Secondary stone surfaces |
| Dark Interior | `#1a1a1a` | Arrow slits, deep shadows, interior |
| Heraldic Red | `#8a1a1a` | Shield quarter, banner field |
| Heraldic Blue | `#1a2a5a` | Shield quarter, banner field |
| Heraldic Gold | `#c4a043` | Shield charges, borders, text accents |
| Torch Warm | `#ff8c30` | Flame, warm light glow |
| Banner Fabric | `#c4b898` | Hanging banner cloth |
| Iron Dark | `#2a2a2a` | Portcullis, sconce bracket |
| Wall Shadow | `#2a2a1a` | Deep stone shadow |

Rules: Stone gray and mortar dominate every surface. Heraldic red and blue appear only in shields and banners — never as primary backgrounds. Gold accents text and decorative hardware. Torch warm provides the sole source of warmth against the cold stone. The palette should feel like torchlight illuminating centuries-old masonry in a dimly lit keep.

## Typography Recommendations

- **Display:** Cinzel, Uncial Antiqua (monumental carved-stone letterforms, medieval inscriptions).
- **Body:** EB Garamond, Crimson Text (warm readable serif for long passages).
- **Labels:** `font-serif font-semibold text-sm tracking-[0.15em] uppercase text-[#c4a043]`.
- **Body text on stone:** `font-serif text-base text-[#e8e0d0] leading-relaxed` for readability against textured backgrounds.
- **Avoid:** Sans-serif, geometric, or modern typefaces — the castle aesthetic demands carved, monumental, or calligraphic serifs.

## Component Architecture Pattern

### Card / Panel (Stone Wall Panel)

- Outer: `bg-[#7a7a6a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_38px,rgba(74,74,58,0.5)_38px,rgba(74,74,58,0.5)_40px),repeating-linear-gradient(90deg,transparent_0px,transparent_78px,rgba(74,74,58,0.35)_78px,rgba(74,74,58,0.35)_80px)] border-2 border-[#4a4a3a] shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-sm`.
- Top edge crenellation: `h-6 bg-[repeating-linear-gradient(90deg,#7a7a6a_0px,#7a7a6a_32px,transparent_32px,transparent_48px)] border-b-2 border-[#4a4a3a]`.
- Content area: `p-6`.
- Title slot: `font-serif text-xl font-bold text-[#c4a043] tracking-wide uppercase mb-4`.
- Body slot: `font-serif text-base text-[#e8e0d0] leading-relaxed`.

### Button (Iron-Forged)

- Base: `bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#e8e0d0] font-serif font-semibold px-6 py-3 border-2 border-[#4a4a3a] shadow-[0_3px_0_#1a1a1a,inset_0_1px_0_rgba(100,100,80,0.2)] hover:translate-y-1 hover:shadow-[0_1px_0_#1a1a1a] active:shadow-none transition-all uppercase tracking-wider text-sm`.
- Gold variant: `bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] text-[#1a1a1a] border-[#6a4a0a] shadow-[0_3px_0_#4a3a0a]`.

### Banner Header (Great Hall)

- Wrapper: `relative bg-gradient-to-b from-[#2a2a1a] to-[#1a1a0a] border-b-4 border-[#4a4a3a] overflow-hidden py-12`.
- Side banners: `absolute top-0 w-16 h-48` using the heraldic banner SVG recipe.
- Center content: `relative z-10 text-center`.

## Interaction Rules

- **Hover states:** Elements should shift downward (`translate-y-1`) and lose shadow depth, simulating the weight of stone being pressed.
- **Active states:** Remove bottom shadow entirely (`shadow-none`) to simulate the element settling flush.
- **Focus states:** `focus:ring-2 focus:ring-[#c4a043]/50 focus:outline-none` (gold ring on stone, evoking a highlighted engraving).
- **Transitions:** `transition-all duration-200` for weighty, deliberate movement — nothing springy or bouncy.
- **Torch glow animation:** Use CSS keyframes for subtle flicker (`3s ease-in-out infinite`) — never strobing or rapid.
- **Scroll behavior:** `scroll-behavior: smooth` for navigating long stone corridors (long pages).

## Accessibility Considerations

- Stone gray backgrounds with cream text: verify `#e8e0d0` on `#7a7a6a` passes WCAG AA (contrast ratio approximately 3.5:1 — use `#e8e0d0` on `#4a4a3a` headers for stronger contrast).
- Focus states must be clearly visible: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-2 focus:ring-offset-[#7a7a6a]` ensures the gold ring stands out against stone.
- Decorative SVGs (portcullis, spiral staircase, heraldic charges) must carry `aria-hidden="true"` and `role="img"` when meaningful.
- Torch flicker animation: respect `prefers-reduced-motion` by disabling the animation: `@media (prefers-reduced-motion: reduce) { .torch-glow { animation: none; } }`.
- Arrow slit elements are purely decorative — never use as actual interactive targets due to their narrow visual size.
- Text over textured stone backgrounds must have sufficient contrast; add a semi-transparent overlay `bg-black/30` behind text blocks if stone pattern reduces readability.
- Touch targets on iron-forged buttons: maintain minimum 44x44px hit area despite the 3D shadow offset.
- Crenellation patterns must be decorative only (`aria-hidden="true"`) — do not convey information through merlon/crenel count.

## Anti-Patterns

- Smooth or rounded corners (castle architecture is angular, blocky, and squared — `rounded-sm` maximum, never `rounded-full`).
- Bright saturated backgrounds (the palette is stone gray, mortar, and deep shadow).
- Missing stone texture (flat gray without mortar-line gradients reads as concrete, not masonry).
- Missing heraldic elements (the castle aesthetic demands at least one shield, banner, or coat-of-arms).
- Missing torch or warm light source (without torchlight, the palette is cold and lifeless).
- Sans-serif typography (castles use carved, monumental, or blackletter serifs).
- Lightweight shadows (a castle is massive — use deep `8px+` shadows and thick borders).
- Missing the crenellation battlement detail (merlons are the defining silhouette of castle architecture).
- Bright white backgrounds (castles are dark, torch-lit interiors or weathered exterior stone).
- Spring or bounce animations (castle elements are heavy stone — movement should be weighty and deliberate).
- Floating or glassmorphism panels (castle UI is solid, grounded, and immovable).
- Neon or electric accent colors (the only warm accent is torch amber; everything else is stone, iron, and heraldic colors).
