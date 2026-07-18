---
name: mud-brick-village-ui
description: Build mud brick village UI components (adobe walls, flat roofs, geometric carved doors, desert courtyard, woven rug, clay oven glow) with earth-textured surfaces, hand-carved door accents, and the sun-baked warmth of vernacular desert architecture. Trigger this skill when the user asks for adobe design, mud brick village, desert architecture, carved door frame, geometric Islamic patterns, woven rug pattern, clay oven, tandoor glow, courtyard layout, vernacular desert, earthen architecture, or sun-baked village interfaces.
---

# Mud Brick Village UI

Use this skill to design and implement warm, textured interfaces inspired by vernacular desert architecture: adobe mud-brick walls with hand-plastered surfaces, geometric carved door frames with Islamic-inspired patterns, flat-roof silhouettes against hot desert sky, woven rug geometric color bands, clay oven (tandoor) warm glow, and the open courtyard spatial organization of sun-baked earth villages. The aesthetic is one of handmade warmth, geometric precision, and the baked stillness of desert settlement.

## Non-Negotiable Foundations

Every mud brick village UI must satisfy these baseline requirements before any styling is applied:

- **Adobe earth texture as primary surface.** The warm sand gradient with subtle surface irregularity is the defining material. Every layout must include adobe-textured panels as the ground color. A design without earth texture is not mud brick village UI.
- **Geometric carved door as focal accent.** The hand-carved door with geometric Islamic-inspired patterns is the decorative centerpiece. Every major section or card should feature a door-frame or door-pattern reference.
- **Flat roof silhouette as structural form.** Unlike pagoda tiers, mud brick villages use flat roofs. The skyline is horizontal and stepped, not vertically ascending. Block-like masses with parapet edges define the architecture.
- **Earth and sky contrast.** Warm earth tones (sand, terracotta, clay) against hot blue sky. The palette is split between ground (warm) and sky (cool blue), with carved teal and rug color as decorative accents.
- **Material authenticity over abstraction.** Adobe is textured and irregular, not smooth gradient. Carved doors have depth and shadow, not flat patterns. Woven rugs have visible weave rhythm. Every surface must reference its handmade origin.
- **Courtyard spatial logic.** Layouts should suggest open-air courtyard organization: enclosed walls framing open central space, with doorways as thresholds between zones.

## Core Material Recipes

### 1) Adobe Wall Surface

The signature mud brick surface -- warm earth gradient with hand-plastered texture irregularity.

- `bg-gradient-to-br from-[#c4a878] to-[#b09060] p-8 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.2)]`.
- Texture overlay: `bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6"><rect width="6" height="6" fill="transparent"/><circle cx="2" cy="3" r="0.5" fill="rgba(0,0,0,0.04)"/><circle cx="5" cy="1" r="0.3" fill="rgba(0,0,0,0.03)"/></svg>')] bg-[length:6px_6px]`.
- Edge irregularity: `border-[2px] border-[#8a7050] rounded-[2px]` -- slightly irregular edges, never perfectly rounded.

### 2) Geometric Carved Door Frame

SVG geometric Islamic-inspired carved door with repeating pattern and teal/blue accents.

```html
<svg viewBox="0 0 120 180" class="w-30 h-45 opacity-90">
  <defs>
    <pattern id="door-geo" width="20" height="20" patternUnits="userSpaceOnUse">
      <!-- Eight-pointed star -->
      <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"
        fill="none" stroke="#1a6a6a" stroke-width="0.8" opacity="0.7"/>
      <!-- Diamond fill -->
      <polygon points="10,5 13,10 10,15 7,10" fill="#2a4a8a" opacity="0.2"/>
    </pattern>
  </defs>
  <!-- Door frame outer -->
  <rect x="5" y="5" width="110" height="170" rx="3" fill="#8a7050" stroke="#3a2a1a" stroke-width="3"/>
  <!-- Arch top -->
  <path d="M15,80 L15,30 Q15,10 60,10 Q105,10 105,30 L105,80" fill="#3a2a1a"/>
  <!-- Pattern fill area -->
  <rect x="20" y="15" width="80" height="65" fill="url(#door-geo)"/>
  <!-- Door panels -->
  <rect x="15" y="85" width="45" height="85" rx="1" fill="#1a6a6a" opacity="0.15" stroke="#1a6a6a" stroke-width="1"/>
  <rect x="60" y="85" width="45" height="85" rx="1" fill="#1a6a6a" opacity="0.15" stroke="#1a6a6a" stroke-width="1"/>
  <!-- Door knocker rings -->
  <circle cx="55" cy="125" r="6" fill="none" stroke="#8a6a3a" stroke-width="2"/>
  <circle cx="65" cy="125" r="6" fill="none" stroke="#8a6a3a" stroke-width="2"/>
  <!-- Frame border carving -->
  <rect x="8" y="8" width="104" height="164" rx="2" fill="none" stroke="#1a6a6a" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
</svg>
```

### 3) Flat Roof Silhouette

Stepped flat-roof village skyline -- block-like adobe masses with parapet edges against desert sky.

```html
<svg viewBox="0 0 400 80" class="w-full h-20 opacity-30">
  <g fill="#8a7050">
    <!-- Building cluster - varied heights -->
    <rect x="20" y="30" width="60" height="50"/>
    <rect x="25" y="25" width="50" height="5" fill="#8a7050" opacity="0.7"/>
    <rect x="90" y="15" width="45" height="65"/>
    <rect x="95" y="10" width="35" height="5" fill="#8a7050" opacity="0.7"/>
    <rect x="145" y="35" width="55" height="45"/>
    <rect x="210" y="10" width="50" height="70"/>
    <rect x="215" y="5" width="40" height="5" fill="#8a7050" opacity="0.7"/>
    <rect x="270" y="25" width="40" height="55"/>
    <rect x="320" y="20" width="60" height="60"/>
    <rect x="325" y="15" width="50" height="5" fill="#8a7050" opacity="0.7"/>
    <!-- Parapet crenellations -->
    <rect x="22" y="27" width="4" height="3"/>
    <rect x="30" y="27" width="4" height="3"/>
    <rect x="38" y="27" width="4" height="3"/>
    <rect x="46" y="27" width="4" height="3"/>
    <rect x="54" y="27" width="4" height="3"/>
    <rect x="62" y="27" width="4" height="3"/>
    <rect x="70" y="27" width="4" height="3"/>
  </g>
</svg>
```

### 4) Woven Rug Pattern Accent

Geometric color bands inspired by kilim/berber rug weaving.

```html
<div class="w-full h-6 overflow-hidden border border-[#8a7050]"
  style="background: repeating-linear-gradient(0deg,
    #b44a2a 0px, #b44a2a 3px,
    #d48a2a 3px, #d48a2a 5px,
    #c4a878 5px, #c4a878 6px,
    #1a6a6a 6px, #1a6a6a 8px,
    #c4a878 8px, #c4a878 9px,
    #d48a2a 9px, #d48a2a 11px,
    #b44a2a 11px, #b44a2a 14px
  );">
</div>
```

Extended rug pattern (for larger areas):

```html
<div class="w-full h-32 border-2 border-[#8a7050] p-2"
  style="background:
    repeating-linear-gradient(0deg,
      #b44a2a 0px, #b44a2a 4px,
      #d48a2a 4px, #d48a2a 6px,
      #c4a878 6px, #c4a878 7px,
      #1a6a6a 7px, #1a6a6a 10px,
      #2a4a8a 10px, #2a4a8a 11px,
      #c4a878 11px, #c4a878 12px,
      #d48a2a 12px, #d48a2a 14px,
      #b44a2a 14px, #b44a2a 18px
    ),
    repeating-linear-gradient(90deg,
      transparent 0px, transparent 20px,
      rgba(0,0,0,0.03) 20px, rgba(0,0,0,0.03) 21px
    );
  ">
</div>
```

### 5) Clay Oven (Tandoor) Glow

Warm circular glow representing the clay oven heat source.

```html
<div class="relative w-24 h-24">
  <!-- Outer glow -->
  <div class="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(224,96,32,0.3)_0%,rgba(224,96,32,0.1)_40%,transparent_70%)]"></div>
  <!-- Oven body -->
  <div class="absolute inset-4 rounded-full bg-gradient-to-br from-[#b07040] to-[#8a5030] border-2 border-[#6a3a20] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3),0_0_16px_rgba(224,96,32,0.2)]"></div>
  <!-- Inner fire glow -->
  <div class="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(224,96,32,0.6)_0%,rgba(224,60,20,0.3)_50%,transparent_80%)] animate-pulse"></div>
  <!-- Rim highlight -->
  <div class="absolute inset-3 rounded-full border border-[#c48040]/30"></div>
</div>
```

### 6) Desert Sky Background

Hot desert sky gradient for page backgrounds and header areas.

- `bg-gradient-to-b from-[#87aacc] via-[#a0c0d8] to-[#c4a878]` -- blue sky fading to earth horizon.
- Haze layer: `bg-[linear-gradient(180deg,transparent_0%,rgba(196,168,120,0.15)_100%)]` for heat shimmer near ground.

### 7) Carved Teal Door Panel

Full-width door panel with geometric pattern for section headers.

- Panel: `bg-gradient-to-b from-[#1a6a6a] to-[#0a5050] border-[2px] border-[#8a7050] p-6`.
- Pattern overlay: `bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="none" stroke="rgba(196,168,120,0.15)" stroke-width="0.5"/></svg>')] bg-[length:20px_20px]`.

### 8) Mud Brick Village Card

Composite card combining adobe surface, door accent, and rug trim.

- Card: `bg-gradient-to-b from-[#c4a878] to-[#b09060] border-[2px] border-[#8a7050] rounded-[3px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.25)]`.
- Door accent header: Geometric carved door frame SVG at top, scaled to fit card width.
- Content area: `p-6 bg-[rgba(0,0,0,0.03)]`.
- Rug trim footer: 6px woven rug pattern band at card bottom.

### 9) Mud Brick Village Button

Earth-toned button with hand-plastered feel.

- `bg-gradient-to-b from-[#8a7050] to-[#6a5838] text-[#e8dcc0] font-serif font-medium px-8 py-3 border-[2px] border-[#3a2a1a] rounded-[2px] shadow-[0_3px_0_#3a2a1a,0_6px_12px_rgba(0,0,0,0.2)] hover:translate-y-[2px] hover:shadow-[0_1px_0_#3a2a1a,0_3px_6px_rgba(0,0,0,0.2)] active:translate-y-[3px] active:shadow-none transition-all`.
- Door-accent variant: `bg-gradient-to-b from-[#1a6a6a] to-[#0a5050] text-[#e8dcc0] border-[#1a6a6a]` with geometric pattern border.

### 10) Courtyard Open Space

Spatial container suggesting the open-air courtyard layout of desert villages.

- Container: `bg-[#c4a878] border-[3px] border-[#8a7050] p-12 relative`.
- Courtyard ground texture: subtle sand pattern `bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.02)_1px,transparent_1px),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:8px_8px,12px_12px]`.
- Wall suggestion: `shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]` for depth at edges.
- Doorway threshold: geometric carved door SVG at one edge, suggesting entrance.

### 11) Adobe Wall Texture Panel

Full-panel adobe surface with visible hand-plastered texture and color variation.

- Base: `bg-gradient-to-br from-[#c4a878] via-[#b89868] to-[#a88858]`.
- Irregular texture: `bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="transparent"/><circle cx="1" cy="2" r="0.4" fill="rgba(0,0,0,0.04)"/><circle cx="5" cy="6" r="0.6" fill="rgba(0,0,0,0.03)"/><circle cx="7" cy="1" r="0.3" fill="rgba(138,112,80,0.05)"/></svg>')] bg-[length:8px_8px]`.
- Shadow edge: `shadow-[inset_0_2px_6px_rgba(0,0,0,0.12),inset_0_-2px_6px_rgba(0,0,0,0.08)]`.

## Color Palette System

| Color | Hex | Material |
|---|---|---|
| Adobe Sand | `#c4a878` | Sun-baked adobe wall surface |
| Adobe Dark | `#8a7050` | Shadow adobe, door frames |
| Adobe Deep | `#6a5838` | Deep earth shadow |
| Carved Door Teal | `#1a6a6a` | Painted door panels, carved accents |
| Carved Door Blue | `#2a4a8a` | Secondary door accent, geometric fill |
| Rug Red | `#b44a2a` | Woven kilim red band |
| Rug Orange | `#d48a2a` | Woven kilim orange band |
| Clay Oven Warm | `#e06020` | Tandoor fire glow |
| Clay Oven Dark | `#8a5030` | Tandoor clay body |
| Desert Sky | `#87aacc` | Hot desert sky blue |
| Sky Pale | `#a0c0d8` | Horizon haze |
| Sky Haze | `#c4d0d8` | Heat shimmer near ground |
| Timber Dark | `#3a2a1a` | Structural shadows, deep outlines |
| Parchment | `#e8dcc0` | Light text on dark surfaces |
| Rug Cream | `#e8d0b0` | Neutral rug band |

Rules: Adobe sand is the primary surface. Teal and blue are reserved exclusively for carved door elements. Rug red and orange appear only in woven pattern accents. Clay oven warm is for glow effects, never large fills. The palette is split between warm earth (ground) and cool blue (sky), with teal as the bridge between the two. Desert heat is implied by the warm earth dominance, not by saturation -- colors should feel baked and faded, not vivid.

## Typography Recommendations

- **Display:** Playfair Display, Cormorant Garamond (classical serif with warm weight, suggesting carved inscriptions).
- **Body:** Lora, Source Serif Pro (warm readable serif with enough weight for earth-toned backgrounds).
- **Labels:** `font-serif font-medium uppercase tracking-widest text-[#1a6a6a]` (carved teal on sand) or `text-[#8a7050]` (dark earth on light surface).
- **CJK Support:** Include Noto Serif as fallback for Arabic-inspired geometric content naming.
- **Carved Inscription Style:** For decorative headings, consider `letter-spacing: 0.15em` with condensed weight to suggest carved stone or wood inscriptions.

## Component Architecture Pattern

Mud brick village UI follows an open courtyard spatial architecture:

```
+------------------------------------------+
|  Desert Sky Background                   |  <- Top: environmental context
|  (gradient to earth horizon)             |
+------------------------------------------+
|                                          |
|  +-- Adobe Wall Border (left) ---------+ |
|  |                                     | |
|  |  +-- Courtyard Open Space --------+ | |
|  |  |                                | | |
|  |  |  Carved Door Panel (header)    | | |
|  |  |  ============================ | | |
|  |  |                                | | |
|  |  |  Adobe Content Surface         | | |
|  |  |  [Cards with door accents]     | | |
|  |  |                                | | |
|  |  |  [Woven Rug Divider]           | | |
|  |  |                                | | |
|  |  |  [Clay Oven Glow Element]      | | |
|  |  |                                | | |
|  |  +--------------------------------+ | |
|  |                                     | |
|  +-------------------------------------+ |
|                                          |
|  Flat Roof Silhouette (section divider)  |
|                                          |
+------------------------------------------+
```

**Key architectural rules:**

- Content lives on adobe sand surfaces. Earth tones are the ground, not dark backgrounds.
- Adobe wall borders frame courtyard spaces. The wall is structural, the courtyard is open.
- Carved door panels serve as section headers and entry points, never as background fills.
- Woven rug patterns appear as horizontal dividers and card footers, never as large backgrounds.
- Clay oven glow is a single accent element per page, centered in its section. It is a focal point, not ambient lighting.
- Flat roof silhouettes divide major sections, suggesting the village skyline as a visual break.
- Desert sky gradient is a page-level or header-level background, not a component fill.

**Responsive behavior:**

- Courtyard container maintains padding but reduces from 48px to 24px on mobile.
- Geometric door frame SVGs scale proportionally and maintain aspect ratio on all screens.
- Woven rug dividers maintain height but reduce pattern complexity on mobile (fewer bands).
- Flat roof silhouette remains at full width, reducing height proportionally.
- Clay oven glow element maintains circular shape but reduces from 96px to 64px on mobile.
- Multiple door accents in card grids collapse from 3-column to single-column, maintaining door proportion.

## Interaction Rules

### Hover States

- Adobe cards: subtle lift (`translate-y-[2px]`) with shadow deepening, suggesting the card is a physical adobe block being lifted.
- Carved door panels: teal color intensifies (`from-[#1a6a6a] to-[#0a5050]` to `from-[#1e7a7a] to-[#0a5a5a]`), simulating the door catching light.
- Clay oven glow: pulse intensifies (`animate-pulse` to `animate-[pulse_1.5s_ease-in-out_infinite]`), suggesting the fire growing.
- Woven rug bands: no hover effect. Rugs are flat woven textiles and should not respond to hover.
- Flat roof silhouettes: subtle opacity increase on hover if used as navigation elements.

### Focus States

- `focus:ring-2 focus:ring-[#1a6a6a]/50 focus:ring-offset-2 focus:ring-offset-[#c4a878]` -- teal ring against adobe sand background.
- Focus ring uses carved door teal, consistent with the accent color hierarchy.

### Transition Timing

- All hover transitions: `transition-all duration-200 ease-out`.
- Clay oven pulse: `duration-[2000ms]` for warm, breathing glow rhythm.
- Door panel color shift: `transition-colors duration-300 ease-in-out`.
- Page section reveals: `transition-all duration-500 ease-in-out` for unhurried desert pacing.
- No spring physics or bouncy easing. Movement should feel earthy and grounded.

### Scroll Behavior

- Flat roof silhouettes can use `position: sticky` with `z-10` at section tops as architectural dividers.
- Carved door panels at section headers should reveal on scroll with `opacity-0` to `opacity-100` transition.

### Click Feedback

- Buttons: `active:translate-y-[3px] active:shadow-none` -- the button presses into the adobe surface.
- Cards: `active:scale-[0.99]` subtle press, suggesting weight of adobe block. Not bouncy, not playful.
- Door panels: no scale transform on click. Doors are fixed architectural elements.

## Reusable Tailwind Tokens

- Adobe surface: `bg-gradient-to-br from-[#c4a878] to-[#b09060] border-[2px] border-[#8a7050] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.2)]`.
- Adobe wall: `bg-gradient-to-br from-[#c4a878] via-[#b89868] to-[#a88858] shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)]`.
- Dark timber: `bg-[#3a2a1a] border border-[#1a1a1a]`.
- Carved door teal: `bg-gradient-to-b from-[#1a6a6a] to-[#0a5050] text-[#e8dcc0] border-[2px] border-[#8a7050]`.
- Geometric pattern: SVG `polygon` with eight-pointed star in `#1a6a6a` stroke.
- Rug divider: `h-6` with `repeating-linear-gradient(0deg, #b44a2a, #d48a2a, #1a6a6a, #d48a2a, #b44a2a)`.
- Rug accent: `h-2` thin band with `bg-[repeating-linear-gradient(90deg,#b44a2a_0px,#b44a2a_4px,#d48a2a_4px,#d48a2a_8px,#1a6a6a_8px,#1a6a6a_12px)]`.
- Clay oven glow: `rounded-full bg-[radial-gradient(circle,rgba(224,96,32,0.3)_0%,transparent_70%)]`.
- Desert sky: `bg-gradient-to-b from-[#87aacc] via-[#a0c0d8] to-[#c4a878]`.
- Village button: `bg-gradient-to-b from-[#8a7050] to-[#6a5838] text-[#e8dcc0] shadow-[0_3px_0_#3a2a1a]`.
- Flat roof: SVG with `fill-[#8a7050]` stepped block shapes.
- Door frame: SVG with arch top, geometric pattern fill, and knocker ring circles.

## Quality Checklist

- At least one adobe wall surface with visible earth texture is present.
- At least one geometric carved door or door-frame SVG element is present.
- Flat roof silhouette (stepped blocks, not pitched) appears in the layout.
- Warm earth palette (sand, terracotta, clay) dominates over cool tones.
- Carved teal (#1a6a6a) and blue (#2a4a8a) appear only in door/frame accents.
- Woven rug pattern appears as divider or card accent, not as large background fill.
- Clay oven glow element is present as a warm focal accent.
- Desert sky gradient is present as environmental context (page or header background).
- Typography uses classical serif fonts with earth-tone or teal color scheme.
- The aesthetic reads as desert vernacular architecture -- adobe, mud brick, carved doors.
- The palette feels baked and aged, not bright and modern.
- Courtyard spatial logic is present: walls framing open space.
- All decorative SVGs are marked `aria-hidden="true"`.
- Hover and focus states are earthy and grounded, not bouncy or playful.
- The overall atmosphere is warm, handmade, and sun-baked.

## Anti-Patterns

- Missing adobe earth texture (the defining material of mud brick village design).
- Flat untextured surfaces (adobe is hand-plastered and irregular, not smooth CSS gradients).
- Pitched or pointed roofs (mud brick villages use flat roofs with parapet edges).
- Teal used as large background fills (teal is reserved for carved door accents only).
- Cold blue dominant palette (mud brick villages are warm earth with blue sky contrast, not blue-dominant).
- Sans-serif typography (mud brick design pairs with classical serif suggesting carved inscriptions).
- Bright white backgrounds (mud brick UI uses adobe sand backgrounds with earth shadows).
- Rug pattern used as full-page background (rugs are accent dividers and card footers, not wallpapers).
- Bouncy or spring animations (mud brick movement is earthy and grounded, never playful).
- Missing geometric door reference (the carved door is the decorative centerpiece).
- Clay oven glow used as ambient fill (it is a single focal element per section).
- Vibrant saturated colors without fading (everything should feel sun-baked and weathered).
- Complex layered shadows (mud brick surfaces have simple, deep shadows from strong desert sun).
- Flat roof silhouette replaced with decorative elements (the stepped skyline is structural, not ornamental).
- Modern abstract design language (mud brick art uses specific traditional geometric and architectural forms).
- Missing courtyard spatial logic (the layout should suggest enclosed walls around open space).

## Accessibility Considerations

- Adobe sand backgrounds with dark timber text (#3a2a1a on #c4a878) must be verified (WCAG AA minimum, target AAA for body text).
- Carved door teal on adobe (#1a6a6a on #c4a878) -- verify AA contrast for normal text, may need darker teal for small text.
- Parchment text on teal door panels (#e8dcc0 on #1a6a6a) provides good contrast -- verify AA for normal text.
- Clay oven glow must not obscure text placed near it -- maintain minimum 40px spacing between glow element and readable content.
- Focus states: `focus:ring-2 focus:ring-[#1a6a6a]/50 focus:ring-offset-2 focus:ring-offset-[#c4a878]` -- teal ring visible against both sand and teal backgrounds.
- Decorative SVGs (door frame, flat roof silhouette, geometric patterns) must all be `aria-hidden="true"`.
- Clay oven pulse animation must respect `prefers-reduced-motion: reduce` -- use static glow instead of pulsing.
- Woven rug patterns must not create seizure risk from rapid color alternation -- ensure bands are wide enough (minimum 3px per band).
- Touch targets must be adequate despite textured surfaces (minimum 44x44px).
- Geometric door patterns used as navigation must have visible text labels alongside them.
- The warm earth palette may present challenges for users with color vision deficiency -- always pair color with shape/position indicators.
- Screen readers should announce mud brick card content in logical reading order: door accent label, heading, description, action.
- Desert sky gradient should have sufficient contrast with any text placed in the header area -- test both sky blue and earth horizon zones.
- Geometric patterns in door frames should not create visual vibration -- ensure pattern density is moderate and stroke width is sufficient.
