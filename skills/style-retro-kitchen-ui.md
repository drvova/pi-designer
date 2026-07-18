---
name: retro-kitchen-ui
description: Build retro kitchen UI components (1950s pastel appliances, chrome trim, checkerboard linoleum floors, mint green/millennial pink/sunburst yellow, boomerang pattern countertops, dinette sets, chrome diner aesthetic) with pastel enamel gradient surfaces, chrome hardware accents, and the cheerful suburban optimism of the post-war American kitchen. Trigger this skill when the user asks for retro kitchen, 1950s diner, chrome diner, pastel appliance, boomerang countertop, checkerboard floor, sunburst clock, dinette set, mid-century kitchen, or Formica aesthetic interfaces.
---

# Retro Kitchen UI

Use this skill to design and implement cheerful, optimistic interfaces inspired by the post-war American kitchen: pastel enamel appliance surfaces, chrome diner trim, checkerboard linoleum floors, boomerang-pattern Formica countertops, sunburst wall clocks, and chrome-legged dinette sets that defined 1950s suburban domestic life.

## Non-Negotiable Foundations

- Retro kitchen UI simulates 1950s kitchen materials: pastel enamel appliance finishes, chrome-plated hardware trim, linoleum flooring, and laminate countertops.
- The PASTEL ENAMEL surface is the signature element — appliance-grade smooth gradients in mint green, millennial pink, and butter yellow must appear on primary surfaces.
- Chrome trim is structural and ever-present: thin metallic borders, bezels, and accents frame every card, button, and panel like the trim on a 1950s stove or refrigerator.
- The checkerboard floor pattern must appear on at least one background or section — it is the visual anchor of the retro kitchen.
- Boomerang-pattern countertops (swirling abstract atomic-age shapes) provide the signature decorative texture for secondary surfaces.
- A sunburst accent (starburst clock, radial lines) must appear as a decorative focal point.
- The aesthetic is overwhelmingly cheerful, clean, and optimistic — no grime, no rust, no darkness. This is the idealized post-war American dream kitchen.
- Rounded corners are mandatory: `rounded-2xl` minimum on all cards and containers, reflecting the bulbous aerodynamic forms of 1950s appliance design.

## Core Material Recipes

### 1) Pastel Enamel Gradient Surface

The signature surface: smooth appliance-grade pastel enamel gradient.

- Mint green: `bg-gradient-to-b from-[#bce8cc] to-[#a8d8be]` (enamel mint refrigerator finish).
- Millennial pink: `bg-gradient-to-b from-[#f8c8d4] to-[#f4b0c4]` (enamel pink range finish).
- Butter yellow: `bg-gradient-to-b from-[#fff7c0] to-[#fff3b0]` (enamel yellow mixer finish).
- Enamel sheen overlay: `after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/30 after:via-transparent after:to-white/10 after:rounded-[inherit]`.

### 2) Chrome Trim Border

The structural metallic frame for every panel.

- Outer chrome: `border-[3px] border-[#c8c8cc] ring-1 ring-[#9a9a9e]` (chrome bezel with inner shadow ring).
- Chrome gradient (for thicker trim bars): `bg-gradient-to-b from-[#f0f0f4] via-[#b8b8bc] to-[#e0e0e4]` (polished chrome gradient).
- Chrome strip divider: `h-1.5 bg-gradient-to-r from-[#9a9a9e] via-[#f0f0f4] to-[#9a9a9e]` (horizontal chrome accent bar).

### 3) Checkerboard Linoleum Floor Background

The signature floor pattern: alternating cream and pastel squares.

```css
.checkerboard-floor {
  background-color: #faf5ea;
  background-image:
    linear-gradient(45deg, #a8d8be 25%, transparent 25%),
    linear-gradient(-45deg, #a8d8be 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #a8d8be 75%),
    linear-gradient(-45deg, transparent 75%, #a8d8be 75%);
  background-size: 40px 40px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
}
```

Tailwind approximation: `bg-[#faf5ea] bg-[linear-gradient(45deg,#a8d8be_25%,transparent_25%),linear-gradient(-45deg,#a8d8be_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#a8d8be_75%),linear-gradient(-45deg,transparent_75%,#a8d8be_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]`.

For pink checkerboard variant, replace `#a8d8be` with `#f4b0c4`.

### 4) Boomerang Formica Countertop Pattern

Swirling abstract atomic-age countertop texture.

```css
.boomerang-countertop {
  background-color: #f5ead0;
  background-image:
    radial-gradient(ellipse 30px 15px at 15% 25%, rgba(168,216,190,0.6) 40%, transparent 41%),
    radial-gradient(ellipse 25px 12px at 15% 25%, rgba(244,176,196,0.4) 60%, transparent 61%),
    radial-gradient(ellipse 35px 18px at 60% 60%, rgba(255,243,176,0.5) 40%, transparent 41%),
    radial-gradient(ellipse 28px 14px at 60% 60%, rgba(168,216,190,0.4) 60%, transparent 61%),
    radial-gradient(ellipse 22px 11px at 85% 30%, rgba(244,176,196,0.5) 40%, transparent 41%);
  background-size: 180px 180px;
}
```

The boomerang shapes are overlapping curved ellipses in pastel tones suggesting the iconic 1950s laminate pattern.

### 5) Sunburst Clock Decoration

Radial starburst wall clock accent.

```html
<svg viewBox="0 0 200 200" class="w-32 h-32" aria-hidden="true">
  <g stroke="#a8d8be" stroke-width="3" stroke-linecap="round">
    <line x1="100" y1="10" x2="100" y2="30" />
    <line x1="100" y1="170" x2="100" y2="190" />
    <line x1="10" y1="100" x2="30" y2="100" />
    <line x1="170" y1="100" x2="190" y2="100" />
    <line x1="36" y1="36" x2="50" y2="50" />
    <line x1="150" y1="150" x2="164" y2="164" />
    <line x1="36" y1="164" x2="50" y2="150" />
    <line x1="150" y1="50" x2="164" y2="36" />
  </g>
  <circle cx="100" cy="100" r="28" fill="#f4b0c4" stroke="#c8c8cc" stroke-width="3" />
  <circle cx="100" cy="100" r="4" fill="#3a3a3e" />
  <line x1="100" y1="100" x2="100" y2="80" stroke="#3a3a3e" stroke-width="2.5" stroke-linecap="round" />
  <line x1="100" y1="100" x2="115" y2="100" stroke="#3a3a3e" stroke-width="2" stroke-linecap="round" />
</svg>
```

Simplified CSS-only sunburst: `bg-[repeating-conic-gradient(#a8d8be_0deg_15deg,transparent_15deg_30deg)] rounded-full` with a centered pink circle.

### 6) Chrome-Legged Dinette Card

Rounded tabletop card with chrome corner accents.

- Tabletop: `bg-gradient-to-b from-[#fff3b0] to-[#fff7c0] rounded-3xl p-8 border-[3px] border-[#c8c8cc] shadow-[0_6px_20px_rgba(0,0,0,0.08)]`.
- Chrome leg accent: `before:absolute before:bottom-0 before:left-4 before:w-2 before:h-6 before:bg-gradient-to-b before:from-[#c8c8cc] before:to-[#9a9a9e] before:rounded-b-full` (repeat for each corner).

### 7) Chrome Diner Button

Chrome-trimmed pastel enamel button with a tactile press.

- Mint button: `bg-gradient-to-b from-[#bce8cc] to-[#a8d8be] text-[#2a4a38] font-bold rounded-full px-8 py-3 border-[3px] border-[#c8c8cc] ring-1 ring-[#9a9a9e] shadow-[0_3px_0_#8a8a8e,inset_0_1px_0_rgba(255,255,255,0.5)] hover:translate-y-0.5 hover:shadow-[0_2px_0_#8a8a8e] active:translate-y-1 active:shadow-none transition-all`.
- Pink button: same structure with `from-[#f8c8d4] to-[#f4b0c4] text-[#6a2a3a]`.
- Yellow button: same structure with `from-[#fff7c0] to-[#fff3b0] text-[#6a5a1a]`.

### 8) Chrome Diamond Quilt Accent Panel

Diamond-quilted chrome backsplash panel (evoking kitchen backsplash tile).

- `bg-[#e8e8ec] bg-[linear-gradient(45deg,#d0d0d4_25%,transparent_25%),linear-gradient(-45deg,#d0d0d4_25%,transparent_25%)] bg-[size:20px_20px] border-[3px] border-[#c8c8cc] rounded-xl`.

## Color Palette System

### Enamel Surface Colors

| Color | Hex | Kitchen Element |
|---|---|---|
| Mint Green | `#a8d8be` | Enamel refrigerator, mixer |
| Mint Green Light | `#bce8cc` | Enamel highlight gradient |
| Millennial Pink | `#f4b0c4` | Enamel range, toaster |
| Pink Light | `#f8c8d4` | Enamel highlight gradient |
| Butter Yellow | `#fff3b0` | Enamel canister, clock |
| Yellow Light | `#fff7c0` | Enamel highlight gradient |

### Trim and Structure Colors

| Color | Hex | Kitchen Element |
|---|---|---|
| Chrome Silver | `#c8c8cc` | Appliance trim, dinette legs |
| Chrome Light | `#f0f0f4` | Chrome highlight |
| Chrome Dark | `#9a9a9e` | Chrome shadow / ring |
| Linoleum Cream | `#faf5ea` | Checkerboard floor base |
| Countertop Cream | `#f5ead0` | Boomerang Formica base |

### Accent Colors

| Color | Hex | Kitchen Element |
|---|---|---|
| Soft Black | `#3a3a3e` | Clock hands, text accents |
| Atomic Red | `#e85a4f` | Red canister accent, button press shadow |
| Turquoise | `#7ec8c8` | Accent stripe, secondary enamel |

Rules: Every primary surface is a pastel enamel gradient (mint, pink, or yellow). Chrome trim frames everything — no card or button exists without a metallic border. The cream base tones (linoleum and countertop) ground the pastels. Black is used sparingly for text and clock hands only. The overall feeling is bright, cheerful, and spotlessly clean.

## Typography Recommendations

Retro kitchen typography echoes 1950s advertising and dinette signage:

- **Display headings:** Pacifico, Lobster, or Rock Salt (script signage, diner marquee lettering).
- **Sub-display:** Bungee, Monoton, or Iceland (atomic-age geometric display for section titles).
- **Body:** Quicksand, Nunito, or M PLUS Rounded 1c (rounded sans-serif, friendly and legible).
- **Labels:** `font-bold text-sm uppercase tracking-wide` (appliance label / brand badge style).
- Avoid sharp serif typography — the 1950s kitchen is rounded, friendly, and casual.

## Component Architecture Pattern

1. Checkerboard linoleum floor background (or cream base with checkerboard section).
2. Pastel enamel gradient cards with chrome trim borders.
3. Boomerang countertop texture on secondary/accent surfaces.
4. Sunburst clock as decorative focal point (top corner or hero accent).
5. Chrome diamond quilt backsplash panels for dividers or headers.
6. Chrome-trimmed enamel buttons with tactile press animation.
7. Chrome strip dividers between sections.
8. Rounded script/geometric display typography.

## Interaction Rules

- Default state: bright, clean, enamel-smooth, chrome-polished.
- Hover: card lifts slightly with chrome shimmer.
  - `hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300`.
- Active (buttons): tactile press like pushing an appliance button.
  - `active:translate-y-1 active:shadow-none transition-all`.
- Focus: `focus:outline-none focus:ring-4 focus:ring-[#a8d8be]/50 focus:ring-offset-2`.
- Chrome shimmer on hover: `hover:after:opacity-100` on a `after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:opacity-0 after:transition-opacity` sheen overlay.
- Transitions: `transition-all duration-300 ease-out` (smooth, appliance-door smooth).

## Reusable Tailwind Tokens

- Enamel mint: `bg-gradient-to-b from-[#bce8cc] to-[#a8d8be]`.
- Enamel pink: `bg-gradient-to-b from-[#f8c8d4] to-[#f4b0c4]`.
- Enamel yellow: `bg-gradient-to-b from-[#fff7c0] to-[#fff3b0]`.
- Chrome trim: `border-[3px] border-[#c8c8cc] ring-1 ring-[#9a9a9e]`.
- Chrome strip: `h-1.5 bg-gradient-to-r from-[#9a9a9e] via-[#f0f0f4] to-[#9a9a9e]`.
- Checkerboard floor: `bg-[linear-gradient(45deg,#a8d8be_25%,transparent_25%),linear-gradient(-45deg,#a8d8be_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#a8d8be_75%),linear-gradient(-45deg,transparent_75%,#a8d8be_75%)] bg-[size:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px]`.
- Boomerang countertop: overlapping radial-gradient ellipses in pastel tones on `#f5ead0` base.
- Sunburst clock: `bg-[repeating-conic-gradient(#a8d8be_0deg_15deg,transparent_15deg_30deg)] rounded-full` with centered pink circle.
- Chrome backsplash: `bg-[linear-gradient(45deg,#d0d0d4_25%,transparent_25%),linear-gradient(-45deg,#d0d0d4_25%,transparent_25%)] bg-[size:20px_20px]`.
- Diner button (mint): `bg-gradient-to-b from-[#bce8cc] to-[#a8d8be] text-[#2a4a38] rounded-full border-[3px] border-[#c8c8cc] ring-1 ring-[#9a9a9e] shadow-[0_3px_0_#8a8a8e,inset_0_1px_0_rgba(255,255,255,0.5)]`.

## Quality Checklist (must pass)

- At least one pastel enamel gradient surface (mint, pink, or butter yellow).
- Chrome trim borders present on all cards and buttons (`border-[3px] border-[#c8c8cc] ring-1 ring-[#9a9a9e]`).
- Checkerboard linoleum pattern present on at least one background or section.
- Boomerang countertop pattern appears on at least one accent/secondary surface.
- Sunburst clock or radial decoration is present as a focal accent.
- All corners are rounded (`rounded-2xl` minimum — 1950s appliances are bulbous).
- Buttons have tactile press-down animation (shadow collapse on active).
- Palette is limited to mint green, millennial pink, butter yellow, chrome, cream, and soft black.
- Typography uses rounded sans-serif body and script/geometric display fonts.
- Chrome strip dividers separate major sections.
- The aesthetic reads as a spotless, cheerful 1950s suburban American kitchen.
- No dark, grungy, or industrial elements — everything is bright and optimistic.

## Anti-Patterns

- Dark or muted palettes (the retro kitchen is bright pastel enamel).
- Sharp angular shapes (everything is rounded and bulbous like 1950s appliances).
- Missing chrome trim (chrome borders are mandatory on every panel and button).
- Missing checkerboard floor (it is the visual anchor of the retro kitchen).
- Missing boomerang countertop pattern (it is the signature decorative texture).
- Industrial steel or brushed metal (use CHROME — polished, bright, reflective).
- Sans-serif cold typography without rounded variants (use rounded fonts).
- Missing the sunburst decoration (starburst clock is a cultural touchstone of the era).
- Flat matte surfaces without gradient (enamel has a subtle vertical gradient and sheen).
- Greyscale or monochrome design (the palette is multicolor pastel).
- Modern minimalist layouts (the 1950s kitchen is decorative and cheerful).
- Missing the tactile button press (buttons should feel like appliance controls).

## Accessibility Considerations

- Pastel enamel backgrounds with dark text may have LOW contrast — verify WCAG AA carefully.
- Use darker text (`#2a4a38` on mint, `#6a2a3a` on pink, `#6a5a1a` on yellow) for sufficient contrast.
- Checkerboard floor backgrounds must not reduce text contrast — use solid enamel cards for text content.
- Boomerang countertop patterns should be subtle and not behind body text.
- Focus states: `focus:ring-4 focus:ring-[#a8d8be]/50 focus:ring-offset-2` (visible mint ring on cream).
- Sunburst clock decorations must be `aria-hidden="true"` (decorative only).
- Chrome trim borders (`border-[3px]`) provide strong structural definition for low-vision users.
- Button press animation must respect `prefers-reduced-motion` (disable translate-y on active).
- Touch targets must be adequate despite chrome borders (`px-8 py-3` provides sufficient size).
- The bright pastel palette should be tested for users with color vision deficiencies.
