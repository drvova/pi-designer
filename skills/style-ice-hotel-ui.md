---
name: ice-hotel-ui
description: Build ice hotel UI components (sculpted ice walls, frosted translucent blocks, fur-draped alcoves, candlelight through ice, aurora above) with crystalline ice surfaces, translucent blue-white materials, and the ethereal cold beauty of a hotel carved from frozen water. Trigger this skill when the user asks for ice hotel design, sculpted ice UI, frosted alcove aesthetic, frozen hotel interface, ice chamber design, aurora hotel theme, or translucent ice architecture.
---

# Ice Hotel UI

Use this skill to design and implement luxury frozen-hotel interfaces: sculpted ice wall surfaces with visible fracture lines, frosted translucent block panels with inner glow, warm fur-draped alcove accents, candlelight glowing through translucent ice panels, aurora borealis ribbon headers, ice bed frames, and frozen chandelier ornaments. The aesthetic is the intersection of brutal frozen material and intimate luxury warmth.

## Non-Negotiable Foundations

- Ice Hotel UI is SCULPTED: every surface should look carved, hewn, or shaped from solid frozen water.
- Materials are translucent ice with visible depth: panels have inner glow, fracture lines, and subsurface light scattering.
- The palette is blue-white translucent ice dominating, with warm candlelight and fur as deliberate contrast points.
- Aurora borealis ribbon animations in headers provide the only saturated color — flowing green/purple bands above.
- Fracture lines and crack textures are essential: they communicate that these are solid ice walls, not glass.
- Fur textures on alcove edges create the crucial warm-cool tension that defines ice hotel luxury.
- Candlelight glows through ice panels: warm amber light behind translucent blue surfaces creates the signature depth.
- The aesthetic is simultaneously cold and intimate — harsh frozen material softened by candlelight and textiles.

## Core Material Recipes

### 1) Sculpted Ice Wall Surface

Blue-white translucent gradient with subtle crack/fracture lines.

- Base: `bg-gradient-to-br from-[#e8f4ff] via-[#c0dcf0] to-[#8bb8d8]`.
- Fracture overlay: `bg-[url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,0 L45,60 L30,120 L55,200' stroke='rgba(122,176,212,0.15)' fill='none' stroke-width='0.5'/%3E%3Cpath d='M100,0 L80,40 L95,100 L75,180 L90,200' stroke='rgba(122,176,212,0.12)' fill='none' stroke-width='0.4'/%3E%3Cpath d='M160,0 L145,50 L165,110 L150,200' stroke='rgba(122,176,212,0.1)' fill='none' stroke-width='0.3'/%3E%3C/svg%3E")] bg-repeat`.
- Surface polish: `bg-white/20 backdrop-blur-[2px]`.
- Border: `border border-white/40 border-t-white/60`.
- Container: `rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_20px_rgba(122,176,212,0.15)]`.

### 2) Frosted Ice Block Accent

Translucent rectangle with inner glow — a standalone ice brick element.

- `bg-gradient-to-b from-[#d8eeff]/70 via-[#b8d8f0]/60 to-[#90c0e0]/50 backdrop-blur-md border border-white/50 rounded-lg p-6`.
- Inner glow: `shadow-[inset_0_0_20px_rgba(224,240,255,0.6),inset_0_0_40px_rgba(176,216,240,0.3)]`.
- Edge frost: `before:absolute before:inset-0 before:rounded-lg before:border before:border-white/30 before:pointer-events-none`.
- Depth accent: `after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent`.

### 3) Fur-Draped Alcove

Warm contrast element against ice — a recessed area with fur texture.

- Alcove recess: `bg-gradient-to-b from-[#1a2a3a]/40 to-[#0a1a2a]/60 rounded-2xl p-8 border border-[#8a6a4a]/20`.
- Fur edge top: `shadow-[inset_0_4px_12px_rgba(138,106,74,0.3),inset_0_2px_4px_rgba(180,150,100,0.15)]`.
- Fur texture band (decorative strip across top): `bg-gradient-to-b from-[#8a6a4a]/60 via-[#a07850]/50 to-transparent h-4 rounded-t-2xl`.
- Fur surface pattern: `bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(138,106,74,0.1)_2px,rgba(138,106,74,0.1)_4px)]`.
- Warmth glow: `shadow-[0_0_30px_rgba(255,204,102,0.1)]`.

### 4) Candlelight Through Ice

Warm glow behind translucent blue — the signature ice hotel lighting.

- Ice panel (front): `bg-[#a0c8e8]/40 backdrop-blur-sm border border-white/30 rounded-lg`.
- Candle glow (behind): `shadow-[0_0_40px_rgba(255,204,102,0.25),0_0_80px_rgba(255,180,80,0.15),0_0_120px_rgba(255,160,60,0.08)]`.
- Flicker animation: `animate-[candleFlicker_3s_ease-in-out_infinite_alternate]`.
- Candle keyframes:
  ```css
  @keyframes candleFlicker {
    0%, 100% { opacity: 0.8; filter: brightness(1); }
    25% { opacity: 0.85; filter: brightness(1.05); }
    50% { opacity: 0.75; filter: brightness(0.95); }
    75% { opacity: 0.9; filter: brightness(1.02); }
  }
  ```
- Combined: outer container `relative`, candle element positioned behind with `absolute -z-10 blur-xl`, ice panel layered on top.

### 5) Aurora Borealis Header

Animated green/purple ribbon flowing across the top of the viewport.

- Header container: `relative overflow-hidden bg-gradient-to-b from-[#0a1a2a] to-[#1a3040]`.
- Aurora ribbon 1 (green): `absolute top-0 left-0 right-0 h-32 bg-[linear-gradient(90deg,transparent_0%,rgba(64,224,128,0.15)_20%,rgba(64,224,128,0.25)_40%,rgba(64,200,128,0.15)_60%,transparent_80%)] animate-[auroraRibbon1_8s_ease-in-out_infinite]`.
- Aurora ribbon 2 (purple): `absolute top-4 left-0 right-0 h-24 bg-[linear-gradient(90deg,transparent_10%,rgba(138,64,192,0.12)_30%,rgba(138,64,192,0.2)_50%,rgba(138,64,192,0.12)_70%,transparent_90%)] animate-[auroraRibbon2_12s_ease-in-out_infinite]`.
- Ribbon blend: `mix-blend-screen`.
- Keyframes:
  ```css
  @keyframes auroraRibbon1 {
    0%, 100% { transform: translateX(-5%) scaleY(1); opacity: 0.6; }
    50% { transform: translateX(5%) scaleY(1.3); opacity: 1; }
  }
  @keyframes auroraRibbon2 {
    0%, 100% { transform: translateX(3%) scaleY(1.2); opacity: 0.5; }
    50% { transform: translateX(-3%) scaleY(0.8); opacity: 0.9; }
  }
  ```

### 6) Ice Bed Frame

Furniture element — translucent ice block as structural framing.

- Frame rails: `bg-gradient-to-b from-[#d0e8f5]/80 to-[#a0c8e8]/60 border border-white/40 rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(122,176,212,0.2)]`.
- Headboard: `bg-gradient-to-b from-[#e0f0ff]/70 to-[#b0d4f0]/50 rounded-t-xl border-t border-l border-r border-white/50`.
- Frost cap (top edge): `bg-white/30 rounded-t-xl h-2`.
- Fur throw (on top of bed): `bg-gradient-to-r from-[#8a6a4a]/70 via-[#a07850]/60 to-[#8a6a4a]/70 rounded-lg`.

### 7) Frozen Chandelier

Decorative ice crystal ornament with hanging icicle elements.

```html
<div class="relative flex flex-col items-center">
  <!-- Chandelier mount -->
  <div class="w-16 h-2 bg-gradient-to-b from-white/60 to-[#a0c8e8]/40 rounded-full"></div>
  <!-- Chandelier body -->
  <div class="relative w-32 h-16 bg-gradient-to-b from-[#e0f0ff]/50 to-[#a0c8e8]/30 rounded-b-full border border-white/30 backdrop-blur-sm">
    <div class="absolute inset-2 bg-[radial-gradient(rgba(255,255,255,0.4)_0%,transparent_70%)] rounded-b-full"></div>
  </div>
  <!-- Icicle drops -->
  <div class="flex gap-3 -mt-1">
    <div class="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-b-full"></div>
    <div class="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent rounded-b-full"></div>
    <div class="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent rounded-b-full"></div>
    <div class="w-0.5 h-10 bg-gradient-to-b from-white/40 to-transparent rounded-b-full"></div>
    <div class="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-b-full"></div>
  </div>
  <!-- Glow -->
  <div class="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-[radial-gradient(circle,rgba(224,240,255,0.3)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
</div>
```

### 8) Ice Block Button

Sculpted ice button with fracture texture and cold glow.

- `relative bg-gradient-to-b from-[#e0f0ff] via-[#c0dcf0] to-[#90c0e0] text-[#1a3a5a] font-medium rounded-lg px-8 py-3 border border-white/60 shadow-[0_2px_12px_rgba(122,176,212,0.3),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(122,176,212,0.2)] hover:shadow-[0_4px_20px_rgba(122,176,212,0.4),inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-gradient-to-b hover:from-[#e8f4ff] hover:to-[#a0c8e8] transition-all duration-300`.

### 9) Ice Hotel Room Card

Full card composition combining ice walls, fur alcove, and candlelight.

- Card container: `relative bg-gradient-to-br from-[#e8f4ff] via-[#d0e4f5] to-[#a8cce8] rounded-2xl overflow-hidden border border-white/40 shadow-[0_8px_32px_rgba(122,176,212,0.2)]`.
- Fracture lines overlay: absolute positioned SVG fracture pattern at low opacity.
- Fur trim: top border `border-t-4 border-t-[#8a6a4a]/40`.
- Candle glow spot: `absolute bottom-6 right-6 w-3 h-3 bg-[#ffcc66] rounded-full shadow-[0_0_20px_rgba(255,204,102,0.4),0_0_40px_rgba(255,204,102,0.2)] animate-[candleFlicker_3s_ease-in-out_infinite_alternate]`.

### 10) Frozen Divider

Ice fracture line divider with crack pattern.

```html
<div class="relative w-full h-px bg-gradient-to-r from-transparent via-[#a0c8e8] to-transparent opacity-40 my-8">
  <svg class="absolute -top-3 left-0 w-full h-6 opacity-30" viewBox="0 0 400 24" preserveAspectRatio="none">
    <path d="M0,12 L50,10 L80,14 L120,8 L160,13 L200,11 L240,14 L280,9 L320,12 L360,10 L400,12" stroke="#7ab0d4" fill="none" stroke-width="0.5"/>
    <path d="M80,14 L85,20 M120,8 L118,3 M280,9 L283,16" stroke="#7ab0d4" fill="none" stroke-width="0.3"/>
  </svg>
</div>
```

## Color Palette System

### Core Ice Hotel Palette

| Color | Hex | Role |
|---|---|---|
| Snow White | `#f8fcff` | Lightest highlights, frost peaks |
| Ice Blue-White | `#e0f0ff` | Primary surface color, ice walls |
| Deep Ice | `#a0c8e8` | Secondary ice, deeper frozen surfaces |
| Fracture Blue | `#7ab0d4` | Crack lines, fracture details, dividers |
| Aurora Green | `#40e080` | Aurora ribbon accent (sparingly) |
| Aurora Purple | `#8a40c0` | Aurora ribbon accent (sparingly) |
| Candle Warm | `#ffcc66` | Warm glow, candlelight, amber accents |
| Fur Brown | `#8a6a4a` | Textile contrast, fur draping, warmth |
| Midnight Ice | `#1a3040` | Deep shadows, text on light surfaces |
| Translucent Ice | `#b0d4f0` | Mid-range translucency, backdrop fills |

### Accent Rule

Warm tones (candle warm, fur brown) are deliberate contrast elements against the dominant ice palette. Every warm accent should be accompanied by nearby ice/cold surfaces to maintain the tension. Aurora greens and purples appear only in animated header ribbons and subtle background glows — never as solid fills.

## Typography Recommendations

- **Display:** Outfit or Space Grotesk (geometric, cold, with enough character for luxury branding).
- **Body:** Inter or DM Sans (clean, modern, highly readable against translucent backgrounds).
- **Accent Labels:** Cormorant Garamond (elegant serif for room names and luxury details — one place where warmth is acceptable).
- **Data/Temperature:** JetBrains Mono (for room temperatures, coordinates, frost readings).
- **Room Numbers:** `font-display text-5xl font-bold text-white/80 tracking-tight` (large, ghostly, carved-into-ice feel).
- Typography balances cold geometric precision (main UI) with occasional serif elegance (luxury labels). The serif choice is deliberate contrast, like fur against ice.

## Component Architecture Pattern

```
IceHotelLayout
  AuroraBorealisHeader (animated ribbon, dark sky backdrop)
  IceWallContainer (fracture-textured main surface)
    IceBlockCard (frosted translucent panels)
      FurAlcove (warm contrast recesses)
        CandlelightAccent (warm glow behind ice)
    IceBlockCard
      CandlelightAccent
  FrozenChandelier (decorative, ambient)
  IceBlockButton (primary actions)
  FrozenDivider (between sections)
```

### Composition Rules

- Ice wall surface is always the primary background — everything else is carved from or placed upon it.
- Fur alcoves appear as recessed areas within ice walls, never as standalone panels.
- Candlelight accents are always partially obscured by ice panels (glow through, not direct).
- Aurora ribbons are confined to the header zone — they do not appear in body content.
- Frozen chandeliers are positioned at section transitions or above important content groups.
- Cards use ice block material (translucent, glowing) not opaque backgrounds.

## Interaction Rules

- Default: cold, crystalline, translucent.
- Hover on ice surfaces: frost intensifies, inner glow brightens.
  - `hover:shadow-[inset_0_0_30px_rgba(224,240,255,0.7),0_4px_20px_rgba(122,176,212,0.3)] hover:bg-gradient-to-b hover:from-[#e8f4ff]/80 hover:to-[#b0d4f0]/60 transition-all duration-400`.
- Hover on fur elements: warmth intensifies.
  - `hover:shadow-[0_0_20px_rgba(255,204,102,0.2)] hover:bg-[#8a6a4a]/50 transition-all duration-300`.
- Active: `active:scale-[0.98] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#7ab0d4]/40 focus:ring-offset-2 focus:ring-offset-[#e0f0ff]`.
- Candle glow animation: continuous subtle flicker, never stops.
- Aurora ribbon: continuous flowing animation, speed varies (8s and 12s cycles).
- Transitions: `transition-all duration-400 ease-out` (slightly slower than arctic-ui — ice melts slowly).

## Reusable Tailwind Tokens

- Ice wall bg: `bg-gradient-to-br from-[#e8f4ff] via-[#c0dcf0] to-[#8bb8d8]`.
- Ice panel: `bg-[#d8eeff]/70 backdrop-blur-md border border-white/50 shadow-[inset_0_0_20px_rgba(224,240,255,0.6)]`.
- Ice button: `bg-gradient-to-b from-[#e0f0ff] via-[#c0dcf0] to-[#90c0e0] text-[#1a3a5a] border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]`.
- Fur accent: `bg-gradient-to-b from-[#8a6a4a]/60 to-[#8a6a4a]/30 border border-[#8a6a4a]/20`.
- Candle glow: `shadow-[0_0_40px_rgba(255,204,102,0.25),0_0_80px_rgba(255,180,80,0.15)]`.
- Aurora glow: `shadow-[0_0_30px_rgba(64,224,128,0.15),0_0_60px_rgba(138,64,192,0.1)]`.
- Fracture text: `text-[#7ab0d4]`.
- Deep text: `text-[#1a3040]`.
- Warm accent text: `text-[#ffcc66]`.

## Quality Checklist

- Background is sculpted ice wall with visible fracture line texture.
- At least one frosted ice block panel with inner glow.
- Warm contrast present (fur brown or candle warm) against cold ice surfaces.
- Candlelight glow visible through at least one translucent panel.
- Aurora borealis ribbon animation in header area.
- Fracture lines and crack details on surfaces (not just smooth gradients).
- Fur-draped alcove or fur trim on at least one element.
- Color palette balances ice blue-white dominance with deliberate warm accents.
- Translucent panels with backdrop-blur throughout.
- Typography is cold geometric with optional serif for luxury labels.
- Frozen chandelier or icicle decoration present.
- The aesthetic reads as a luxury hotel carved from ice, not a generic winter theme.
- Aurora animations are smooth and flowing, not jerky or abrupt.
- Warm elements (fur, candle) feel cozy against ice, not out of place.

## Anti-Patterns

- Warm colors dominating or appearing without nearby ice contrast (fur and candle are accents, not the base).
- Smooth glass panels without fracture texture (ice has visible cracks and grain).
- Opaque solid-color backgrounds (everything should have translucent depth).
- Missing candlelight warmth (cold-only reads as arctic, not ice hotel).
- Missing aurora in header (the signature atmospheric element).
- Brown or wood textures dominating (this is ice construction, not timber).
- Missing fur accents (the warm-cool tension defines ice hotel luxury).
- Flat surfaces without inner glow (ice transmits light through its volume).
- Missing icicle or frozen chandelier details (they communicate carved-ice architecture).
- High-saturation colors (ice hotel is muted and ethereal, never loud).
- Warm serif typography on main UI text (serif is reserved for luxury accent labels only).
- Solid white backgrounds (the ice has blue-white translucent depth, not pure flat white).
- Missing frost or breath vapor effects (cold is visible in the atmosphere).

## Accessibility Considerations

- Ice blue-white backgrounds with midnight ice text provide strong contrast (WCAG AA minimum, AAA for dark text on lightest surfaces).
- Translucent panels must maintain text readability — test against all gradient positions beneath them.
- Candle glow animations must respect `prefers-reduced-motion` — reduce to static warm glow without flicker.
- Aurora ribbon animations must respect `prefers-reduced-motion` — show static gradient instead of animated ribbon.
- Focus states use fracture blue ring: `focus:ring-2 focus:ring-[#7ab0d4]/40` (visible against both ice and fur backgrounds).
- Fracture texture overlays must not reduce text contrast below 4.5:1 ratio.
- Fur brown text on ice backgrounds must meet 4.5:1 contrast minimum.
- Candle warm text on dark backgrounds must be verified — warm yellows on dark blue can fail contrast checks.
- All decorative SVGs (fracture patterns, icicles) must be `aria-hidden="true"`.
- Aurora and candle animations must be `aria-hidden="true"` decorative elements.
- Touch targets on ice block buttons must meet 44x44px minimum despite border styling.
- Screen readers should announce "Ice Hotel" theme context via a visually hidden heading or landmark.
