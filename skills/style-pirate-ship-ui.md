---
name: pirate-ship-ui
description: Build pirate ship UI components (wooden hull, treasure chest, Jolly Roger, cannon porthole, rope rigging, compass rose, map parchment) with weathered wood textures, nautical adventure themes, and the bold spirit of pirate life. Trigger this skill when the user asks for pirate UI, nautical adventure, treasure chest design, Jolly Roger flag, wooden hull interface, cannon porthole, rope rigging, compass rose, map parchment, or pirate ship components.
---

# Pirate Ship UI

Use this skill to design and implement bold nautical adventure interfaces with weathered wood plank textures, treasure chest gold accents, Jolly Roger iconography, cannon porthole frames, rope rigging patterns, compass rose navigation, and aged map parchment surfaces. The pirate ship is a world of adventure, danger, plunder, and the open sea.

## Non-Negotiable Foundations

- Backgrounds are deep ocean or weathered wood: dark navy for sea, warm browns for ship surfaces.
- Materials are physical and worn: planked wood with visible nails, frayed rope, tarnished brass, aged paper, tarnished metal.
- Colors are bold and contrasting: warm wood browns against deep ocean blues, gold treasure against black pirate flags.
- Texture is essential: wood grain, rope twist, paper foxing, brass tarnish, canvas weave.
- Nautical elements are decorative and functional: compass roses for navigation, porthole frames for cards, rope for borders.
- Typography is bold and weathered: bold serif or slab-serif for headings, handwritten or aged serif for body.
- The aesthetic is adventurous, rough-hewn, and lived-in: a ship that has crossed oceans, not a showroom vessel.

## Core Material Recipes

### 1) Wooden Hull Surface (the foundational planked wood)

The signature pirate surface: horizontal wood planks with visible grain, gaps, and iron nails.

- Plank color: `bg-[#6a4a2a]` (medium hull wood).
- Horizontal plank lines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_38px,rgba(0,0,0,0.25)_38px,rgba(0,0,0,0.25)_40px)]` (40px plank height with 2px dark gap).
- Wood grain: `bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,60,30,0.15)_12px,rgba(90,60,30,0.15)_13px)]` (vertical grain lines).
- Overall: combine with `bg-blend-multiply` for layered texture.
- Nails: small circles at plank intersections `before`/`after` with `w-2 h-2 rounded-full bg-[#2a2a2a] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)]`.
- Shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.3),0_4px_16px_rgba(0,0,0,0.4)]`.
- Weathering: subtle variation in plank color using `bg-[linear-gradient(90deg,rgba(106,74,42,0.8)_0%,rgba(106,74,42,1)_20%,rgba(90,60,30,0.9)_50%,rgba(106,74,42,1)_80%,rgba(106,74,42,0.8)_100%)]`.

### 2) Treasure Chest (ornate container with gold)

A decorative box with curved lid, brass fittings, and golden glow.

- Chest body: `bg-gradient-to-b from-[#6a4a2a] to-[#4a3218] rounded-lg border-2 border-[#3a2a10]`.
- Brass band: `bg-gradient-to-b from-[#c4a043] to-[#8a6a20] h-3 w-full` (horizontal brass strip across chest).
- Lock plate: `w-8 h-8 rounded-full bg-gradient-to-br from-[#c4a043] to-[#8a6a20] border-2 border-[#5a4010] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`.
- Gold overflow: inner glow `shadow-[inset_0_-4px_12px_rgba(196,160,67,0.3),0_0_20px_rgba(196,160,67,0.2)]`.
- Curved lid: `[clip-path:polygon(0_20%,5%_8%,50%_0,95%_8%,100_20%,100_100%,0_100%)]` (domed top).

### 3) Jolly Roger Flag

The pirate skull and crossbones, tattered and waving.

```html
<svg viewBox="0 0 120 100" class="w-full h-full">
  <!-- Black flag base -->
  <rect x="0" y="0" width="120" height="100" fill="#1a1a1a" rx="2"/>
  <!-- Tattered right edge -->
  <path d="M120,0 L118,15 L120,25 L116,40 L120,55 L117,70 L120,85 L118,100 L120,100" fill="#1a1a1a"/>
  <!-- Skull -->
  <ellipse cx="60" cy="38" rx="18" ry="16" fill="#f0e8d0"/>
  <ellipse cx="60" cy="42" rx="12" ry="10" fill="#1a1a1a"/>
  <!-- Eye sockets -->
  <ellipse cx="53" cy="36" rx="4" ry="3.5" fill="#1a1a1a"/>
  <ellipse cx="67" cy="36" rx="4" ry="3.5" fill="#1a1a1a"/>
  <!-- Nose -->
  <polygon points="58,44 62,44 60,47" fill="#1a1a1a"/>
  <!-- Teeth line -->
  <line x1="52" y1="50" x2="68" y2="50" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="55" y1="48" x2="55" y2="52" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="60" y1="48" x2="60" y2="52" stroke="#1a1a1a" stroke-width="1"/>
  <line x1="65" y1="48" x2="65" y2="52" stroke="#1a1a1a" stroke-width="1"/>
  <!-- Crossbones -->
  <line x1="25" y1="65" x2="95" y2="85" stroke="#f0e8d0" stroke-width="4" stroke-linecap="round"/>
  <line x1="95" y1="65" x2="25" y2="85" stroke="#f0e8d0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="25" cy="65" r="4" fill="#f0e8d0"/>
  <circle cx="95" cy="65" r="4" fill="#f0e8d0"/>
  <circle cx="25" cy="85" r="4" fill="#f0e8d0"/>
  <circle cx="95" cy="85" r="4" fill="#f0e8d0"/>
</svg>
```

- The flag should have a tattered right edge (wave path).
- A flag-pole line on the left: `stroke="#4a3a1a" stroke-width="3"`.

### 4) Cannon Porthole Frame

A circular opening that frames content like a ship's gun port.

- Outer ring: `w-24 h-24 rounded-full bg-gradient-to-br from-[#5a5a5a] to-[#2a2a2a] border-4 border-[#4a4a4a] shadow-[0_0_0_2px_#333,0_4px_12px_rgba(0,0,0,0.5)]`.
- Inner cutout: content area with `rounded-full overflow-hidden`.
- Brass rim highlight: `shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3)]`.
- Bolts: 6 small circles evenly spaced around the ring at 60-degree intervals, each `w-2 h-2 rounded-full bg-[#666] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.5)]`.
- Alternative smaller porthole: `w-16 h-16` for compact cards.

### 5) Rope Rigging Border

Twisted rope used as a decorative border or divider.

```css
.rope-border {
  border-image: repeating-linear-gradient(
    90deg,
    #8B6914 0px,
    #C4A043 3px,
    #6B4F1D 6px,
    #8B6914 9px
  ) 8;
  border-width: 4px;
  border-style: solid;
}
```

- Horizontal rope: `h-3 bg-[repeating-linear-gradient(90deg,#8B6914_0px,#C4A043_3px,#6B4F1D_6px,#8B6914_9px)] rounded-full`.
- Vertical rope: `w-3 bg-[repeating-linear-gradient(0deg,#8B6914_0px,#C4A043_3px,#6B4F1D_6px,#8B6914_9px)] rounded-full`.
- Frayed end: pseudo-element with thin horizontal lines fading out at the rope's end.

### 6) Compass Rose SVG

An ornate navigational compass for directional UI elements.

```html
<svg viewBox="0 0 100 100" class="w-20 h-20">
  <!-- Outer ring -->
  <circle cx="50" cy="50" r="46" fill="none" stroke="#b87333" stroke-width="2"/>
  <circle cx="50" cy="50" r="42" fill="none" stroke="#b87333" stroke-width="1"/>
  <!-- Cardinal points: N, S, E, W -->
  <polygon points="50,6 44,38 50,34 56,38" fill="#c4a043"/>  <!-- N -->
  <polygon points="50,94 44,62 50,66 56,62" fill="#8B6914"/>  <!-- S -->
  <polygon points="6,50 38,44 34,50 38,56" fill="#8B6914"/>  <!-- W -->
  <polygon points="94,50 62,44 66,50 62,56" fill="#c4a043"/>  <!-- E -->
  <!-- Intercardinal points: NE, NW, SE, SW (smaller) -->
  <polygon points="18,18 36,40 40,36" fill="#b87333" opacity="0.7"/>
  <polygon points="82,18 64,40 60,36" fill="#b87333" opacity="0.7"/>
  <polygon points="18,82 36,60 40,64" fill="#b87333" opacity="0.7"/>
  <polygon points="82,82 64,60 60,64" fill="#b87333" opacity="0.7"/>
  <!-- Center circle -->
  <circle cx="50" cy="50" r="6" fill="#b87333" stroke="#6B4F1D" stroke-width="1"/>
  <circle cx="50" cy="50" r="3" fill="#c4a043"/>
  <!-- Tick marks -->
  <line x1="50" y1="4" x2="50" y2="10" stroke="#b87333" stroke-width="1.5"/>
  <line x1="96" y1="50" x2="90" y2="50" stroke="#b87333" stroke-width="1.5"/>
  <line x1="50" y1="96" x2="50" y2="90" stroke="#b87333" stroke-width="1.5"/>
  <line x1="4" y1="50" x2="10" y2="50" stroke="#b87333" stroke-width="1.5"/>
</svg>
```

- Brass colors: primary `#c4a043`, secondary `#b87333`, dark `#8B6914`.
- Cardinal points are larger, intercardinal are smaller and more transparent.
- Rotation: `animate-[compass-spin_20s_linear_infinite]` for a living ship feel (optional).

### 7) Map Parchment Surface

Aged nautical chart paper with foxing, coastline traces, and compass markings.

- Background: `bg-[#e8d8b0]` (aged parchment).
- Foxing stains: `bg-[radial-gradient(ellipse_at_20%_30%,rgba(160,120,60,0.15)_0%,transparent_40%),radial-gradient(ellipse_at_70%_60%,rgba(140,110,50,0.1)_0%,transparent_35%)]`.
- Worn edges: `shadow-[0_0_0_1px_rgba(140,110,50,0.3),0_4px_16px_rgba(0,0,0,0.2),inset_0_0_40px_rgba(140,110,50,0.08)]`.
- Coastline traces: thin SVG paths in `stroke="#8B7355" stroke-width="1" fill="none"` showing fictional landmasses.
- Grid lines: `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_48px,rgba(139,115,85,0.1)_48px,rgba(139,115,85,0.1)_49px),repeating-linear-gradient(90deg,transparent_0px,transparent_48px,rgba(139,115,85,0.1)_48px,rgba(139,115,85,0.1)_49px)]`.
- Compass rose stamp: small faded compass rose at corner.

### 8) Pirate Ship Button

Bold wooden button with brass accents and rope detail.

- Base: `bg-gradient-to-b from-[#7a5a3a] to-[#5a3a1a] rounded-lg px-6 py-3 border-2 border-[#3a2a10]`.
- Text: `text-[#e8d8b0] font-bold uppercase tracking-wider`.
- Wood grain: `bg-[repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,60,30,0.1)_12px,rgba(90,60,30,0.1)_13px)]`.
- Shadow: `shadow-[0_3px_0_#3a2a10,inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.3)]`.
- Hover: `hover:from-[#8a6a4a] hover:to-[#6a4a2a] hover:shadow-[0_3px_0_#3a2a10,0_0_12px_rgba(196,160,67,0.3),0_4px_16px_rgba(0,0,0,0.4)]`.
- Active: `active:translate-y-1 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]` (press into wood).

### 9) Ocean Depth Background

The dark sea that surrounds the ship.

- `bg-gradient-to-b from-[#0a2a4a] via-[#0d1e35] to-[#0a1020]`.
- Wave hint: `bg-[radial-gradient(ellipse_at_50%_0%,rgba(20,60,100,0.3)_0%,transparent_50%)]` at top for horizon glow.
- Foam: `bg-[radial-gradient(ellipse_at_80%_100%,rgba(200,210,220,0.05)_0%,transparent_30%)]` for distant spray.

## Color Palette System

### Core Pirate Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Hull Wood | `#6a4a2a` | Weathered ship planks | Primary surface |
| Hull Wood Dark | `#4a3218` | Aged wood shadow | Depth, shadows |
| Hull Wood Light | `#8a6a4a` | Fresh-cut plank | Highlights |
| Ocean Deep | `#0a2a4a` | Deep sea | Background base |
| Ocean Dark | `#0a1020` | Abyssal water | Deep background |
| Treasure Gold | `#c4a043` | Pirate treasure | Primary accent |
| Treasure Dark | `#8a6a20` | Tarnished gold | Gold shadows |
| Pirate Black | `#1a1a1a` | Jolly Roger flag | Dark contrast |
| Sail Canvas | `#e8dcc0` | Ship sails | Light surfaces |
| Parchment | `#e8d8b0` | Aged map paper | Content surfaces |
| Compass Brass | `#b87333` | Nautical instruments | Navigation accents |
| Brass Dark | `#6B4F1D` | Tarnished brass | Dark metal |
| Rope | `#8B6914` | Twisted hemp | Dividers, borders |
| Skull White | `#f0e8d0` | Bone/skull | Jolly Roger, light text |
| Iron | `#4a4a4a` | Ship fittings | Hardware, bolts |

Rules: Warm wood browns and ocean deeps form the base. Treasure gold is the primary accent for treasure, navigation, and highlights. Pirate black provides dramatic contrast. Sail canvas and parchment provide light content surfaces. The palette should feel like the hold of a ship loaded with plunder.

## Typography Recommendations

- **Display headings:** Playfair Display Black, Cinzel, or Abril Fatface (bold, commanding, like a captain's proclamation).
- **Alternative display:** Bungee Shade, Anton (bold adventure poster feel).
- **Body:** Lora, Merriweather, or Source Serif Pro (readable serif with warmth).
- **Nautical labels:** Courier Prime, Special Elite (weathered typewriter for coordinates, manifest text).
- **Flag/proclamation:** Oswald, Anton at `font-black uppercase tracking-widest` (bold pirate proclamation style).
- **Coordinates:** `font-mono text-xs tracking-[0.2em] uppercase` (nautical chart notation).
- Typography should feel bold, commanding, and slightly weathered — like painted on a ship's hull or stamped on a wanted poster.

## Component Architecture Pattern

1. Ocean depth background or wooden hull surface.
2. Rope rigging borders and dividers between sections.
3. Map parchment or sail canvas panels for content areas.
4. Cannon porthole frames for circular elements (avatars, icons, small cards).
5. Treasure chest containers for highlighted content or CTAs.
6. Compass rose elements for navigation and direction.
7. Jolly Roger flag for branding or danger warnings.

## Interaction Rules

- Default state: weathered wood and brass, dark ocean depths.
- Hover: brass brightens (`hover:brightness-110`), treasure gold glow intensifies (`hover:shadow-[0_0_12px_rgba(196,160,67,0.4)]`).
- Active: mechanical press like a cannon trigger (`active:translate-y-1` with collapsing shadow).
- Focus: brass glow ring `focus:ring-2 focus:ring-[#c4a043]` (treasure gold outline).
- Transitions: `transition-all duration-200` (deliberate, weighty — like hauling rope).
- Compass rose: slow rotation when active (optional, `animate-[compass-spin_20s_linear_infinite]`).
- Rope borders: static, structural — they hold things together, they do not animate.

## Reusable Tailwind Tokens

- Hull wood: `bg-[#6a4a2a] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_38px,rgba(0,0,0,0.25)_38px,rgba(0,0,0,0.25)_40px),repeating-linear-gradient(92deg,transparent_0px,transparent_12px,rgba(90,60,30,0.15)_12px,rgba(90,60,30,0.15)_13px)] shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]`
- Ocean depth: `bg-gradient-to-b from-[#0a2a4a] via-[#0d1e35] to-[#0a1020]`
- Treasure gold: `text-[#c4a043] [text-shadow:0_0_8px_rgba(196,160,67,0.4)]`
- Pirate black: `bg-[#1a1a1a] border border-[#333]`
- Map parchment: `bg-[#e8d8b0] bg-[radial-gradient(ellipse_at_20%_30%,rgba(160,120,60,0.15)_0%,transparent_40%)] shadow-[0_0_0_1px_rgba(140,110,50,0.3),0_4px_16px_rgba(0,0,0,0.2)]`
- Rope divider: `h-3 bg-[repeating-linear-gradient(90deg,#8B6914_0px,#C4A043_3px,#6B4F1D_6px,#8B6914_9px)] rounded-full`
- Porthole: `w-24 h-24 rounded-full bg-gradient-to-br from-[#5a5a5a] to-[#2a2a2a] border-4 border-[#4a4a4a] shadow-[0_0_0_2px_#333,0_4px_12px_rgba(0,0,0,0.5)]`
- Pirate button: `bg-gradient-to-b from-[#7a5a3a] to-[#5a3a1a] text-[#e8d8b0] font-bold uppercase rounded-lg border-2 border-[#3a2a10] shadow-[0_3px_0_#3a2a10,inset_0_1px_0_rgba(255,255,255,0.1)]`
- Sail canvas: `bg-[#e8dcc0] shadow-[inset_0_2px_6px_rgba(0,0,0,0.1)]`
- Compass brass: `text-[#b87333] [text-shadow:0_0_6px_rgba(184,115,51,0.3)]`
- Nail bolt: `w-2 h-2 rounded-full bg-[#2a2a2a] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)]`

## Quality Checklist (must pass)

- At least one wooden hull surface with visible plank lines and grain texture.
- Wood texture includes visible nail/bolt fasteners.
- Rope rigging used as border or divider element.
- Cannon porthole frame around at least one circular element.
- Compass rose present for navigation or decorative purpose.
- Map parchment or sail canvas surface used for content.
- Treasure gold accents on key interactive elements.
- Color palette includes hull wood + ocean deep + treasure gold.
- Typography is bold serif or slab-serif for headings.
- Jolly Roger or skull motif appears somewhere in the design.
- The aesthetic reads as a weathered pirate ship, not a modern yacht.
- Wood surfaces show age: grain, nail holes, weathering variation.

## Anti-Patterns

- Clean, modern, or polished surfaces (pirate is weathered and rough).
- Bright or pastel color palettes (pirate is bold: dark navy, warm wood, gold, black).
- Missing wood grain texture (planks without grain look like laminate).
- Sans-serif typography alone (pirate needs bold serif or slab-serif weight).
- Missing nautical elements (rope, compass, porthole — at least two must appear).
- Smooth digital animations (pirate motion should feel like creaking wood and billowing sail).
- Missing brass/tarnished metal accents (pirate ships are held together with iron and brass).
- Pure white or pure black backgrounds (use ocean deep or parchment instead).
- Missing rope texture or dividers (rope is structural and decorative).
- Pristine, untouched surfaces (everything should look salt-worn, sun-bleached, or tar-stained).
- Modern card layouts with drop shadows (use porthole frames or parchment panels).
- Missing the Jolly Roger or skull motif (pirate identity is non-negotiable).
- Overly ornate or rococo decoration (pirate is bold and functional, not delicate).

## Accessibility Considerations

- Parchment with dark brown text provides good contrast (verify WCAG AA).
- Skull white on pirate black has strong contrast (verify WCAG AA).
- Dark ocean backgrounds with light text must be verified for contrast ratios.
- Focus states must be clearly visible: `focus:ring-2 focus:ring-[#c4a043]`.
- Compass rose SVGs must be `aria-hidden="true"` when decorative.
- Jolly Roger flags must be `aria-hidden="true"` when decorative.
- Rope dividers are visual-only: no semantic meaning, use standard `<hr>` or `role="separator"`.
- Touch targets must be adequate despite weathered styling (minimum 44x44px).
- Do not rely on wood color alone to convey meaning; pair with text labels.
- Porthole frames should not clip content in ways that hide important information.
- Reduced motion: compass rose rotation and any flag-wave animations must respect `prefers-reduced-motion`.
