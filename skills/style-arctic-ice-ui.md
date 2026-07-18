---
name: arctic-ice-ui
description: Build arctic ice UI components (ice shelf, glacier blue, frozen waterfall, snow crystal, aurora reflection, frozen bubble, polar ice) with crystalline blue surfaces, ice textures, and the pristine cold of arctic landscapes. Trigger this skill when the user asks for arctic design, ice UI, glacier aesthetic, frozen interface, polar design, snow crystal layout, aurora-themed UI, or crystalline cold interfaces.
---

# Arctic Ice UI

Use this skill to design and implement crystalline, cold interfaces inspired by arctic landscapes: layered ice shelf surfaces, glacier blue gradients, frozen waterfall cascades, hexagonal snow crystal patterns, aurora reflections on ice, frozen bubble accents, and the vast, pristine stillness of polar regions. This is design frozen in time — precise, luminous, and exquisitely cold.

## Non-Negotiable Foundations

- Arctic Ice UI celebrates crystalline precision: surfaces are smooth, edges are crisp, and every element reflects light like facets of ice.
- The palette is anchored by eight defining hues: glacier blue, ice white, ice deep, snow crystal, aurora reflected, frozen teal, polar navy, and ice clear.
- Ice shelf surfaces are the primary structural motif: layered, translucent blue-white panels that suggest depth and geological time.
- Glacier gradients flow from deep blue to near-white, always maintaining a cool temperature — never warm, never gray.
- Snow crystal hexagonal patterns appear as background textures and decorative overlays — always at low opacity to suggest delicate ice formation.
- Aurora reflected light introduces the only warm-adjacent accent: a luminous green that dances across frozen surfaces.
- Frozen bubble accents are perfect circles with translucent fills and thin ice-blue strokes — they appear as badges, tags, and decorative orbs.
- The aesthetic is pristine, still, and luminous — it should feel like standing on a frozen lake at dawn with the aurora overhead.
- All color values must use the exact hex codes defined in the palette — no warming, no approximation, no substitution.

## Core Material Recipes

### 1) Ice Shelf Surface

Layered translucent panel with depth — the foundational surface of this design language.

- `bg-gradient-to-b from-[#e8f4ff] via-[#d0e8ff] to-[#c0e0f0] rounded-2xl shadow-[0_2px_16px_rgba(42,106,154,0.1)]`.
- Depth layer: `bg-[#e8f4ff]/60 backdrop-blur-md rounded-2xl border border-[#c0e0f0]/50`.
- Stacked variant: multiple `bg-[#e8f4ff]/40` layers offset by 2px vertically to suggest ice strata.

### 2) Glacier Blue Gradient

Deep-to-light blue gradient for hero sections and full backgrounds.

- `bg-gradient-to-b from-[#0a2a4a] via-[#2a6a9a] to-[#60a8d0]` (polar navy to glacier blue descent).
- Shallow variant: `bg-gradient-to-br from-[#60a8d0] via-[#c0e0f0] to-[#e8f4ff]` (surface ice shimmer).
- Horizontal: `bg-gradient-to-r from-[#2a6a9a] via-[#60a8d0] to-[#c0e0f0]` (glacier face cross-section).

### 3) Frozen Waterfall Cascade

Vertical cascading element for section dividers and sidebar backgrounds.

- `bg-gradient-to-b from-[#c0e0f0] via-[#60a8d0] to-[#2a6a9a]` (light top to deep bottom, water flowing down into ice).
- Texture overlay: `bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_8px,rgba(255,255,255,0.06)_8px,rgba(255,255,255,0.06)_9px)]` for icicle striations.
- Sidebar variant: `w-1 bg-gradient-to-b from-[#c0e0f0] via-[#60a8d0] to-[#0a2a4a]` (thin frozen column).

### 4) Snow Crystal Card

Card with hexagonal snow crystal decoration and ice-blue surface.

- `bg-[#e8f4ff] rounded-xl p-6 border border-[#c0e0f0]/60 shadow-[0_4px_20px_rgba(42,106,154,0.08)]`.
- Crystal overlay: `absolute top-2 right-2 w-24 h-24 opacity-[0.05]` (hexagonal SVG pattern).
- Hover state: `hover:shadow-[0_8px_32px_rgba(42,106,154,0.15)] hover:border-[#60a8d0]/40 transition-all duration-300`.

### 5) Aurora Reflected Surface

Surface with aurora green luminance dancing across frozen blue — the signature accent of this design.

- `bg-gradient-to-br from-[#2a6a9a] via-[#60a8d0] to-[#40e080]/30` (glacier blue into aurora green glow).
- Aurora glow: `bg-[radial-gradient(ellipse_at_20%_50%,rgba(64,224,128,0.15)_0%,transparent_70%)]` positioned over ice surfaces.
- Accent strip: `h-1 bg-gradient-to-r from-[#60a8d0] via-[#40e080] to-[#60a8d0] rounded-full`.

### 6) Frozen Bubble Accent

Translucent circular element for badges, tags, and decorative orbs.

- `bg-[#c0e0f0]/30 backdrop-blur-sm border border-[#60a8d0]/30 rounded-full`.
- Small badge: `bg-[#c0e0f0]/40 text-[#2a6a9a] rounded-full px-3 py-1 text-xs font-medium border border-[#60a8d0]/20`.
- Large orb: `w-20 h-20 bg-[radial-gradient(circle_at_30%_30%,rgba(232,244,255,0.8)_0%,rgba(192,224,240,0.3)_100%)] rounded-full border border-[#60a8d0]/20 shadow-[0_4px_16px_rgba(42,106,154,0.1)]`.

### 7) Polar Ice Texture Background

Subtle crystalline texture for full-page or section backgrounds.

- Base: `bg-[#e8f4ff]`.
- Crystal texture: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,0 55,15 55,45 30,60 5,45 5,15' fill='none' stroke='%2360a8d0' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")] bg-[length:60px_60px]`.
- Polar navy variant: `bg-[#0a2a4a]` with `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,0 55,15 55,45 30,60 5,45 5,15' fill='none' stroke='%2360a8d0' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E")]`.

### 8) Snow Crystal Hexagonal SVG

Decorative hexagonal ice crystal for backgrounds and corner ornaments.

```html
<svg viewBox="0 0 100 100" class="w-24 h-24 opacity-[0.08]" aria-hidden="true">
  <g stroke="#60a8d0" fill="none" stroke-width="1">
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"/>
    <polygon points="50,20 75,32.5 75,67.5 50,80 25,67.5 25,32.5"/>
    <line x1="50" y1="5" x2="50" y2="95"/>
    <line x1="10" y1="27.5" x2="90" y2="72.5"/>
    <line x1="90" y1="27.5" x2="10" y2="72.5"/>
    <line x1="50" y1="5" x2="25" y2="32.5"/>
    <line x1="50" y1="5" x2="75" y2="32.5"/>
    <line x1="10" y1="27.5" x2="25" y2="32.5"/>
    <line x1="90" y1="27.5" x2="75" y2="32.5"/>
    <line x1="10" y1="72.5" x2="25" y2="67.5"/>
    <line x1="90" y1="72.5" x2="75" y2="67.5"/>
    <line x1="50" y1="95" x2="25" y2="67.5"/>
    <line x1="50" y1="95" x2="75" y2="67.5"/>
  </g>
</svg>
```

### 9) Ice Crack Divider

Thin translucent divider suggesting a crack in an ice sheet.

- `h-px bg-gradient-to-r from-transparent via-[#60a8d0]/40 to-transparent` (single ice crack line).
- Branching variant: `relative h-6` with `absolute inset-x-0 top-1/2 h-px bg-[#60a8d0]/30` and angled hairlines at 15deg branching outward.
- Wide crack: `h-2 bg-gradient-to-r from-[#c0e0f0]/0 via-[#c0e0f0]/60 to-[#c0e0f0]/0 rounded-full` (frosted fissure).

### 10) Frozen Waterfall Button

Primary action button styled as flowing frozen water.

- `bg-gradient-to-b from-[#60a8d0] to-[#2a6a9a] text-white font-semibold rounded-lg px-6 py-3 shadow-[0_2px_12px_rgba(42,106,154,0.25)] hover:shadow-[0_4px_20px_rgba(42,106,154,0.35)] hover:from-[#70b8e0] hover:to-[#3a7aaa] transition-all duration-300`.
- Ghost variant: `bg-transparent text-[#2a6a9a] border border-[#60a8d0]/40 rounded-lg px-6 py-3 hover:bg-[#c0e0f0]/30 hover:border-[#60a8d0]/60 transition-all duration-300`.
- Aurora accent: `bg-gradient-to-r from-[#60a8d0] to-[#40e080] text-[#0a2a4a] font-semibold rounded-lg px-6 py-3 shadow-[0_2px_12px_rgba(64,224,128,0.2)]`.

## Color Palette System

### Core Arctic Ice Palette

| Color | Hex | Role |
|---|---|---|
| Glacier Blue | `#60a8d0` | Primary accent, links, interactive elements |
| Ice White | `#e8f4ff` | Primary light background, card surfaces |
| Ice Deep | `#2a6a9a` | Secondary blue, text on light, depth |
| Snow Crystal | `#d0e8ff` | Subtle background tint, hover surfaces |
| Aurora Reflected | `#40e080` | Special accent, success states, highlights |
| Frozen Teal | `#40a0a0` | Secondary cool accent, tags, badges |
| Polar Navy | `#0a2a4a` | Darkest background, high-contrast text |
| Ice Clear | `#c0e0f0` | Borders, dividers, subtle surfaces |

### Extended Palette

| Color | Hex | Role |
|---|---|---|
| Frost White | `#f4faff` | Lightest surface, near-white with blue cast |
| Deep Glacier | `#1a4a6a` | Dark blue for headings on light surfaces |
| Aurora Bright | `#60ff90` | Intense aurora for small accent moments |
| Ice Shadow | `#a0c8e0` | Muted blue for disabled states |
| Frozen Lilac | `#c0d0e8` | Warm-shifted neutral for secondary text |
| Polar Midnight | `#061828` | Deepest possible dark for OLED-style sections |

### Color Usage Rules

- Primary backgrounds use Ice White (`#e8f4ff`) or Frost White (`#f4faff`) — never pure white.
- Text on light backgrounds: Polar Navy (`#0a2a4a`) or Deep Glacier (`#1a4a6a`) — never pure black.
- Text on dark backgrounds: Ice White (`#e8f4ff`) or Snow Crystal (`#d0e8ff`).
- Aurora Reflected (`#40e080`) is used sparingly — maximum one accent per viewport, never as a background fill.
- Glacier Blue (`#60a8d0`) is the primary interactive color — links, buttons, focus rings, and hover states.
- Frozen Teal (`#40a0a0`) complements Glacier Blue — use it for secondary tags, badges, and category labels.
- Ice Clear (`#c0e0f0`) is exclusively for borders, dividers, and subtle surface separations.
- Gradients always flow between adjacent palette colors — deep to light within the blue range.
- No warm colors appear in this palette — if a warm accent is needed, use Aurora Reflected which bridges cool-to-green.

## Typography Recommendations

- **Display:** Inter, Plus Jakarta Sans, or Space Grotesk (precise, geometric, crystalline feel).
- **Body:** IBM Plex Sans, Source Sans 3, or Noto Sans (clear, cold, high legibility).
- **Accents:** Space Mono or JetBrains Mono (technical, precise, ice-core-sample data labels).
- **Frozen Labels:** Outfit or Sora in light weight for elegant frozen section headers.
- Typography should feel precise, clean, and cool — never decorative or warm.
- Line height for body text: `leading-relaxed` (1.625) for comfortable reading on cool backgrounds.
- Display text uses expanded tracking: `tracking-wide` for crystalline letter spacing.
- Weight hierarchy: display headings at `font-semibold` or `font-bold`, body at `font-normal`, labels at `font-medium`.

## Component Architecture Pattern

### Card Structure

```
<div class="relative bg-[#e8f4ff] rounded-xl p-6 border border-[#c0e0f0]/60 overflow-hidden shadow-[0_4px_20px_rgba(42,106,154,0.08)]">
  <!-- Snow crystal decoration -->
  <div class="absolute top-2 right-2 w-20 h-20 opacity-[0.05]"><!-- hexagonal SVG --></div>
  <!-- Content -->
  <div class="relative z-10"><!-- content here --></div>
  <!-- Bottom ice crack line -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60a8d0]/40 to-transparent"></div>
</div>
```

### Button Hierarchy

1. Primary (Glacier): `bg-gradient-to-b from-[#60a8d0] to-[#2a6a9a]` — main CTA, frozen waterfall.
2. Secondary (Ghost): `border border-[#60a8d0]/40 text-[#2a6a9a]` — alternative actions.
3. Aurora: `bg-gradient-to-r from-[#60a8d0] to-[#40e080]` — special/highlighted actions.
4. Ghost Dark: `bg-transparent text-[#c0e0f0] border border-[#60a8d0]/20` — on dark backgrounds.

### Section Layout

- Content sections separated by ice crack dividers or frozen waterfall cascades.
- Full-width sections alternate between Ice White and Snow Crystal backgrounds.
- Dark sections use Polar Navy with Ice White text and Glacier Blue accents.
- Sidebars use Ice Clear surfaces with Glacier Blue hover states.
- Footer uses Polar Navy with Snow Crystal text and Aurora Reflected links.

## Interaction Rules

- Default: still, precise, crystalline.
- Hover: surfaces gain subtle luminance — frost catching light.
  - `hover:shadow-[0_8px_32px_rgba(42,106,154,0.15)] hover:border-[#60a8d0]/40 transition-all duration-300 ease-out`.
- Active: `active:scale-[0.98] active:shadow-[0_2px_8px_rgba(42,106,154,0.1)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#60a8d0]/40 focus:ring-offset-2 focus:ring-offset-[#e8f4ff]`.
- Hover color shift: elements shift one step lighter in the glacier gradient — the ice catches light.
- Card hover: `hover:translate-y-[-1px] hover:shadow-[0_8px_32px_rgba(42,106,154,0.15)] transition-all duration-300`.
- Page transitions: `transition-all duration-400 ease-in-out` (smooth, measured, glacial pacing).
- Scroll reveals: elements fade in from opacity-0 with subtle upward drift, like aurora shimmer appearing.
- Loading state: snow crystal SVG rotates slowly (`animate-spin` at 8s duration) with glacier blue pulse.
- Aurora shimmer: subtle horizontal gradient animation cycling across accent elements.

## Reusable Tailwind Tokens

- Ice shelf surface: `bg-[#e8f4ff] rounded-xl border border-[#c0e0f0]/60 shadow-[0_4px_20px_rgba(42,106,154,0.08)]`.
- Glacier gradient: `bg-gradient-to-b from-[#0a2a4a] via-[#2a6a9a] to-[#60a8d0]`.
- Frozen waterfall button: `bg-gradient-to-b from-[#60a8d0] to-[#2a6a9a] text-white rounded-lg shadow-[0_2px_12px_rgba(42,106,154,0.25)]`.
- Ghost button: `bg-transparent text-[#2a6a9a] border border-[#60a8d0]/40 rounded-lg`.
- Aurora accent: `bg-gradient-to-r from-[#60a8d0] to-[#40e080]`.
- Snow crystal badge: `bg-[#c0e0f0]/30 text-[#2a6a9a] rounded-full px-3 py-1 text-xs font-medium border border-[#60a8d0]/20`.
- Frozen bubble: `bg-[#c0e0f0]/30 backdrop-blur-sm border border-[#60a8d0]/30 rounded-full`.
- Ice crack divider: `h-px bg-gradient-to-r from-transparent via-[#60a8d0]/40 to-transparent`.
- Polar navy section: `bg-[#0a2a4a] text-[#e8f4ff]`.
- Glacier blue text: `text-[#2a6a9a]`.
- Aurora green text: `text-[#40e080]`.
- Snow crystal background: `bg-[#d0e8ff]`.
- Ice clear border: `border-[#c0e0f0]`.

## Quality Checklist

- Color palette uses the exact eight hex values: glacier blue, ice white, ice deep, snow crystal, aurora reflected, frozen teal, polar navy, ice clear.
- At least one snow crystal hexagonal SVG decoration present per major section.
- Glacier blue-to-deep gradient used as hero or primary background element.
- Ice shelf translucent layering visible in card or panel design.
- Aurora reflected green appears as a restrained accent — never as a dominant fill.
- Frozen bubble elements used for badges, tags, or decorative orbs.
- Ice crack dividers separate major content sections.
- Typography is geometric, precise, and cool — no decorative or rounded faces.
- The aesthetic reads as frozen, crystalline, and pristine — cold without being sterile.
- No warm colors appear in the design (no red, orange, pink, or yellow).
- No pure white or pure black — always use palette equivalents with blue undertone.
- Translucent layers (`backdrop-blur`, opacity variants) create the ice depth effect.
- The frozen waterfall gradient appears on at least one primary action button.

## Anti-Patterns

- Warm colors anywhere (no red, orange, pink, yellow, or warm neutrals — this is arctic).
- Pure white (`#ffffff`) backgrounds (always use Ice White or Frost White with blue cast).
- Pure black (`#000000`) text (always use Polar Navy or Deep Glacier).
- Rounded, playful typography (arctic is geometric and precise — no Quicksand, Nunito, or rounded faces).
- Heavy drop shadows (arctic uses subtle, soft shadows — never harsh or dramatic).
- Missing ice texture or crystal patterns (hexagonal crystals are the signature motif).
- Overuse of aurora green (it is a restrained accent, not a background color — maximum one per viewport).
- Sharp angular card corners (arctic uses `rounded-xl` — precise but not sharp).
- Flat solid colors without any gradient or translucency (ice always has depth and light play).
- Busy or cluttered layouts (arctic is vast, open, and still — embrace whitespace).
- Animated elements that feel frantic (all motion is slow, measured, and glacial).
- Missing frozen waterfall gradient on interactive elements (buttons should flow deep-to-light).
- Dark backgrounds without light text (contrast must be maintained in polar navy sections).
- Bubble elements that are opaque (frozen bubbles are always translucent with visible ice-blue strokes).

## Accessibility Considerations

- Polar Navy (`#0a2a4a`) on Ice White (`#e8f4ff`) provides approximately 9.8:1 contrast ratio — exceeds WCAG AAA for all text sizes.
- Ice Deep (`#2a6a9a`) on Ice White (`#e8f4ff`) provides approximately 4.8:1 contrast ratio — meets WCAG AA for body text.
- Glacier Blue (`#60a8d0`) on Ice White (`#e8f4ff`) provides approximately 2.5:1 contrast — use only for large text (18px+ bold or 24px+ normal) or graphical elements.
- White text on Glacier Blue (`#60a8d0`) provides approximately 2.5:1 contrast — use only on the dark end of glacier gradients where the background reaches Ice Deep or Polar Navy.
- White text on Polar Navy (`#0a2a4a`) provides approximately 14.5:1 — excellent for all text.
- Aurora Reflected (`#40e080`) on Polar Navy provides approximately 6.1:1 — meets WCAG AA for body text.
- Aurora Reflected on Ice White provides approximately 1.6:1 — never use for text on light backgrounds.
- Focus states: `focus:ring-2 focus:ring-[#60a8d0]/40 focus:ring-offset-2 focus:ring-offset-[#e8f4ff]` — glacier blue ring visible on all light surfaces.
- On Polar Navy backgrounds: `focus:ring-offset-[#0a2a4a]` to maintain ring visibility.
- All decorative SVGs (snow crystals, ice patterns, aurora effects) must include `aria-hidden="true"`.
- Snow crystal patterns used as backgrounds must have sufficient contrast with overlaid text — test at specific pattern opacity.
- Translucent layers must not reduce text legibility — always verify contrast at the specific transparency level.
- Loading animations must respect `prefers-reduced-motion`: `motion-reduce:animate-none` on rotating crystal and aurora shimmer.
- Frozen bubble badges must have sufficient color contrast for their text content — use Polar Navy text inside bubbles on light backgrounds.
- The low-contrast cool palette may challenge users with color vision deficiency — ensure interactive elements are distinguishable by shape and position, not color alone.
- Touch targets must be minimum 44x44px — the clean arctic spacing supports this naturally.
