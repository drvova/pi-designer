---
name: poke-bowl-bar-ui
description: Build poke bowl bar UI components (bamboo counter, rice base, fresh fish display, seaweed garnish, sesame sprinkle, mango dice, sriracha drizzle) with clean fresh surfaces, tropical ingredient colors, and the healthy vibrancy of a modern poke bowl establishment. Trigger this skill when the user asks for poke bowl design, poke bar UI, bamboo counter surface, rice base layer, fresh fish display, seaweed garnish accent, sesame seed scatter, mango dice pattern, sriracha drizzle squiggle, mason jar serving, Hawaiian poke aesthetic, or fresh tropical food interfaces.
---

# Poke Bowl Bar UI

Use this skill to design and implement interfaces inspired by the modern poke bowl establishment: bamboo counter surfaces with light wood grain, circular rice base layers, vibrant fresh fish color blocks (tuna red, salmon orange, yellowtail pink), dark seaweed strip accents, scattered sesame seed patterns, bright mango dice cube grids, sriracha drizzle red squiggles as decorative lines, mason jar serving silhouettes, and the clean fresh vibrancy of a health-forward tropical food bar where every bowl is a canvas and every ingredient is a brushstroke.

## Non-Negotiable Foundations

- Poke Bowl Bar UI simulates the modern poke bowl counter: a bamboo wood surface with ingredient sections laid out in a bowl formation, rice base at the center, fish and toppings arranged around the rim, and garnish accents completing the composition.
- Bamboo counter surface is the SIGNATURE background material — light wood grain texture in warm beige-gold with subtle horizontal striations. It appears as the primary surface for the entire interface or at minimum on navigation bars, headers, and card backgrounds.
- Rice base circle is the signature central element — a textured white circle with subtle grain detail that anchors content sections, avatar containers, and feature callouts. Every major section should have a circular rice-inspired base.
- Fresh fish color blocks are the signature color accent system — tuna red for primary actions, salmon orange for secondary accents, yellowtail pink for tertiary highlights. These three colors appear on buttons, badges, progress indicators, and feature highlights throughout the interface.
- Seaweed strip accent is the signature divider and border element — a dark green strip (nearly black) that separates sections, frames content, and serves as a grounding horizontal line. It appears as at least one divider or border element per major section.
- Sesame seed scatter pattern is the signature decorative texture — small off-white oval dots scattered across surfaces with randomized rotation, simulating sesame seeds sprinkled over bowls. It decorates background areas, card surfaces, and section transitions.
- Mango dice pattern is the signature highlight decoration — small bright yellow squares arranged in a loose grid with slight rotation offsets, representing diced mango. It appears as a decorative accent near headings, on card corners, and as loading indicators.
- Sriracha drizzle red squiggle is the signature action accent — a wavy red line that serves as a decorative underline for headings, a border accent on active elements, and a squiggle decoration on call-to-action buttons.
- Mason jar serving silhouette is the signature container shape — a rounded glass jar with a visible rim and subtle transparency, used for drink sections, sidebar containers, and decorative side panels.
- Colors are rice white, tuna red, salmon orange, seaweed dark green, mango yellow, sesame off-white, bamboo light, and sriracha red — the palette of fresh tropical health.
- The aesthetic is clean, fresh, vibrant, healthy, and inviting — a place where food is art and every ingredient has purpose.

## Core Material Recipes

### 1) Bamboo Counter Surface

Light wood grain background for headers, cards, and primary surfaces.

- Bamboo base: `bg-gradient-to-b from-[#e0d4b0] via-[#d4c8a0] to-[#c8bc94]`.
- Wood grain horizontal: `bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(160,140,90,0.08)_3px,rgba(160,140,90,0.08)_4px),repeating-linear-gradient(2deg,transparent,transparent_7px,rgba(140,120,70,0.06)_7px,rgba(140,120,70,0.06)_8px)]`.
- Bamboo card: `bg-gradient-to-b from-[#e0d4b0] to-[#c8bc94] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(160,140,90,0.08)_3px,rgba(160,140,90,0.08)_4px)] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.12)]`.
- Bamboo counter strip: `h-1.5 bg-gradient-to-b from-[#d4c8a0] to-[#b8ac84] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(140,120,70,0.1)_2px,rgba(140,120,70,0.1)_3px)]`.
- Subtle grain depth: `relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(1deg,transparent,transparent_5px,rgba(255,255,255,0.04)_5px,rgba(255,255,255,0.04)_6px)] before:rounded-inherit`.
- Bamboo nav bar: `bg-gradient-to-b from-[#d8cc9c] to-[#c8bc94] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(160,140,90,0.06)_3px,rgba(160,140,90,0.06)_4px)] shadow-[0_2px_8px_rgba(0,0,0,0.1)] px-6 py-3`.
- Bamboo divider: `h-1 bg-gradient-to-r from-transparent via-[#d4c8a0] to-transparent`.

### 2) Rice Base Circle

Textured white circle anchoring content sections and avatars.

- Rice base: `w-32 h-32 rounded-full bg-gradient-to-br from-[#f5f5f0] via-[#f0f0e8] to-[#e8e8e0] shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)]`.
- Rice grain texture: `bg-[radial-gradient(circle_at_30%_30%,rgba(200,200,180,0.3)_0.5px,transparent_0.5px),radial-gradient(circle_at_70%_60%,rgba(200,200,180,0.25)_0.5px,transparent_0.5px),radial-gradient(circle_at_50%_80%,rgba(200,200,180,0.3)_0.5px,transparent_0.5px)] bg-[length:8px_8px]`.
- Rice bowl edge: `ring-4 ring-[#e0d8c8] ring-offset-2 ring-offset-[#f5f5f0]`.
- Rice base small (avatar): `w-12 h-12 rounded-full bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.1)]`.
- Rice base medium (feature): `w-24 h-24 rounded-full bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_8px_rgba(0,0,0,0.1)]`.
- Rice base large (hero): `w-48 h-48 rounded-full bg-gradient-to-br from-[#f5f5f0] via-[#f0f0e8] to-[#e8e8e0] shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_4px_8px_rgba(255,255,255,0.8)]`.
- Rice surface detail: `before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_25%_25%,rgba(200,200,180,0.2)_1px,transparent_1px),radial-gradient(circle_at_75%_25%,rgba(200,200,180,0.15)_1px,transparent_1px),radial-gradient(circle_at_50%_75%,rgba(200,200,180,0.2)_1px,transparent_1px),radial-gradient(circle_at_25%_75%,rgba(200,200,180,0.15)_1px,transparent_1px)] before:bg-[length:6px_6px]`.

### 3) Fresh Fish Color Blocks

Vibrant ingredient-colored panels for buttons, badges, and accent areas.

- Tuna red block: `bg-gradient-to-br from-[#d04848] to-[#c44040] rounded-lg p-4 shadow-[0_4px_8px_rgba(196,64,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`.
- Salmon orange block: `bg-gradient-to-br from-[#e89048] to-[#e08040] rounded-lg p-4 shadow-[0_4px_8px_rgba(224,128,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`.
- Yellowtail pink block: `bg-gradient-to-br from-[#f0b8b0] to-[#e8a8a0] rounded-lg p-4 shadow-[0_4px_8px_rgba(232,168,160,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]`.
- Tuna button: `bg-gradient-to-br from-[#d04848] to-[#c44040] px-5 py-2.5 rounded-lg text-white font-semibold shadow-[0_4px_8px_rgba(196,64,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`.
- Salmon button: `bg-gradient-to-br from-[#e89048] to-[#e08040] px-5 py-2.5 rounded-lg text-white font-semibold shadow-[0_4px_8px_rgba(224,128,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`.
- Yellowtail button: `bg-gradient-to-br from-[#f0b8b0] to-[#e8a8a0] px-5 py-2.5 rounded-lg text-[#3a2020] font-semibold shadow-[0_4px_8px_rgba(232,168,160,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]`.
- Fish sheen: `after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/10 after:to-transparent after:rounded-lg`.
- Fish slice silhouette: `clip-path:polygon(10%_50%,50%_0%,90%_50%,50%_100%)`.
- Tuna badge: `inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c44040] text-white text-xs font-semibold`.
- Salmon badge: `inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#e08040] text-white text-xs font-semibold`.

### 4) Seaweed Strip Accent

Dark green horizontal strip for dividers, borders, and grounding lines.

- Seaweed divider: `h-1.5 bg-gradient-to-r from-transparent via-[#1a3a1a] to-transparent rounded-full`.
- Seaweed border: `border-y-2 border-[#1a3a1a]`.
- Seaweed card border: `border-l-4 border-[#1a3a1a]`.
- Seaweed ribbon: `bg-[#1a3a1a] text-[#f5f5f0] px-4 py-1 text-sm font-semibold rounded-sm`.
- Seaweed texture: `bg-[#1a3a1a] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(40,80,40,0.15)_2px,rgba(40,80,40,0.15)_3px)]`.
- Seaweed grounding strip (section bottom): `h-1 bg-gradient-to-r from-[#1a3a1a]/0 via-[#1a3a1a]/60 to-[#1a3a1a]/0`.
- Seaweed wrap accent: `bg-[#1a3a1a]/10 rounded-lg px-3 py-1 border border-[#1a3a1a]/20`.
- Seaweed decorative line: `w-full h-px bg-[#1a3a1a]/30 my-2`.

### 5) Sesame Seed Scatter Pattern

Off-white oval dots scattered across surfaces for decorative texture.

- Sesame scatter: `bg-[radial-gradient(ellipse_2px_1px_at_15%_20%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_45%_60%,#e0d8c8_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_75%_35%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_25%_80%,#e0d8c8_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_85%_15%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_55%_45%,#e0d8c8_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_35%_10%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_65%_85%,#e0d8c8_0%,transparent_100%)] bg-[length:120px_120px]`.
- Dense sesame: `bg-[radial-gradient(ellipse_2px_1px_at_10%_15%,rgba(232,224,208,0.7)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_30%_45%,rgba(224,216,200,0.6)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_50%_25%,rgba(232,224,208,0.7)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_70%_65%,rgba(224,216,200,0.6)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_90%_35%,rgba(232,224,208,0.7)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_20%_75%,rgba(224,216,200,0.6)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_60%_55%,rgba(232,224,208,0.7)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_40%_90%,rgba(224,216,200,0.6)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_80%_10%,rgba(232,224,208,0.7)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_15%_50%,rgba(224,216,200,0.6)_0%,transparent_100%)] bg-[length:100px_100px]`.
- Sesame on dark: `bg-[radial-gradient(ellipse_2px_1px_at_15%_20%,rgba(232,224,208,0.3)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_55%_60%,rgba(232,224,208,0.25)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_85%_35%,rgba(232,224,208,0.3)_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_35%_80%,rgba(232,224,208,0.25)_0%,transparent_100%)] bg-[length:80px_80px]`.
- Individual seed marker: `w-1 h-0.5 bg-[#e8e0d0] rounded-full rotate-[30deg]`.
- Sesame border accent: `bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(232,224,208,0.4)_8px,rgba(232,224,208,0.4)_10px)] h-px`.

### 6) Mango Dice Pattern

Bright yellow cubes in a loose grid for highlight decorations.

- Mango dice grid: `bg-[repeating-conic-gradient:#f0c020_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] opacity-30`.
- Mango dice accent: `grid grid-cols-3 gap-1 w-fit`.
- Individual dice: `w-3 h-3 bg-gradient-to-br from-[#f0c020] to-[#e0b010] rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] rotate-[5deg]`.
- Mango dice corner: `absolute -top-1 -right-1 grid grid-cols-2 gap-0.5 opacity-40`.
- Mango dice small: `w-2 h-2 bg-[#f0c020] rounded-[1px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] rotate-[10deg]`.
- Mango loading dots: `flex gap-1.5`.
  - `animate-[mango-bounce_1.4s_ease-in-out_infinite]` with stagger: `:nth-child(2)` delayed 0.16s, `:nth-child(3)` delayed 0.32s.
- Mango highlight bar: `h-1 bg-gradient-to-r from-[#f0c020] via-[#f0c020]/60 to-transparent rounded-full`.

Mango bounce keyframes:
```css
@keyframes mango-bounce {
  0%, 80%, 100% { transform: scale(1); }
  40% { transform: scale(1.3); }
}
```

### 7) Sriracha Drizzle Red Squiggle

Wavy red line accent for headings, borders, and CTAs.

- Sriracha underline: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='8'%3E%3Cpath d='M0 4 Q12 0 25 4 T50 4 T75 4 T100 4' stroke='%23e03030' fill='none' stroke-width='2'/%3E%3C/svg%3E")] bg-repeat-x bg-bottom pb-1`.
- Sriracha wavy border: `border-bottom-2 border-dashed border-[#e03030]`.
- Sriracha squiggle (inline SVG approach): `position: relative` with `after` pseudo-element containing a wavy path.
- Sriracha drizzle on card: `before:absolute before:bottom-2 before:left-4 before:right-4 before:h-1 before:bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='6'%3E%3Cpath d='M0 3 Q10 0 20 3 T40 3 T60 3 T80 3' stroke='%23e03030' fill='none' stroke-width='1.5'/%3E%3C/svg%3e")] before:bg-repeat-x before:opacity-60`.
- Sriracha button squiggle: `relative after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='4'%3E%3Cpath d='M0 2 Q8 0 15 2 T30 2 T45 2 T60 2' stroke='%23e03030' fill='none' stroke-width='1.5'/%3E%3C/svg%3e")] after:bg-repeat-x`.
- Sriracha drip: `w-0.5 h-4 bg-gradient-to-b from-[#e03030] to-[#e03030]/0 rounded-b-full`.
- Sriracha accent bar: `h-1 bg-gradient-to-r from-[#e03030] via-[#e03030]/50 to-transparent rounded-full`.

### 8) Mason Jar Serving Container

Rounded glass jar shape for drink sections and sidebar panels.

- Jar body: `bg-gradient-to-b from-white/30 via-white/20 to-white/10 rounded-b-2xl rounded-t-lg border-2 border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.4)] p-4`.
- Jar rim: `w-full h-2 bg-gradient-to-b from-[#c8c0b8] to-[#b0a8a0] rounded-t-sm border-b border-[#a09890]`.
- Jar glass shine: `before:absolute before:top-4 before:left-2 before:w-1 before:h-16 before:bg-white/30 before:rounded-full before:blur-[1px]`.
- Jar liquid fill: `bg-gradient-to-b from-[#f0c020]/20 via-[#f0c020]/10 to-transparent rounded-b-2xl`.
- Jar with bamboo lid: `relative` with `after:absolute after:-top-1.5 after:inset-x-2 after:h-3 after:bg-gradient-to-b from-[#d4c8a0] to-[#c0b488] after:rounded-sm after:shadow-[0_1px_2px_rgba(0,0,0,0.15)]`.
- Mason jar sidebar: `bg-gradient-to-b from-white/20 via-white/10 to-white/5 rounded-b-2xl rounded-t-lg border-2 border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-6`.
- Jar label: `bg-[#f5f5f0] rounded px-3 py-1 text-xs text-[#3a2020] border border-[#d0c8b8] shadow-[0_1px_2px_rgba(0,0,0,0.08)]`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Rice White | `#f5f5f0` | Primary background, rice base, clean surfaces, text on dark |
| Rice White Warm | `#f0f0e8` | Rice grain texture, secondary light surface |
| Tuna Red | `#c44040` | Primary action color, tuna badges, main CTAs, bold accents |
| Tuna Red Light | `#d04848` | Tuna button gradient start, highlight variant |
| Salmon Orange | `#e08040` | Secondary action color, salmon badges, warm accents |
| Salmon Orange Light | `#e89048` | Salmon button gradient start, highlight variant |
| Yellowtail Pink | `#e8a8a0` | Tertiary accent, yellowtail badges, soft highlights |
| Yellowtail Pink Light | `#f0b8b0` | Yellowtail button gradient start, blush surfaces |
| Seaweed Dark Green | `#1a3a1a` | Dividers, borders, grounding lines, dark accents |
| Seaweed Green | `#2a5a2a` | Seaweed texture highlight, secondary green |
| Mango Yellow | `#f0c020` | Highlight accents, dice pattern, loading indicators |
| Mango Yellow Dark | `#e0b010` | Mango dice shadow, deeper yellow accents |
| Sesame Off-White | `#e8e0d0` | Scatter pattern, seed markers, decorative dots |
| Sesame Warm | `#e0d8c8` | Secondary sesame tone, grain accents |
| Bamboo Light | `#d4c8a0` | Counter surface, wood grain, warm neutral background |
| Bamboo Mid | `#c8bc94` | Bamboo gradient end, deeper wood tone |
| Bamboo Dark | `#b8ac84` | Bamboo strip end, divider accent |
| Sriracha Red | `#e03030` | Drizzle accent, action highlights, squiggle lines |
| Deep Brown | `#3a2020` | Body text on light surfaces, dark label text |

Rules: Rice white is the dominant background — it represents the clean rice base that everything else is arranged upon. Tuna red is the primary action and accent color — it signals freshness, energy, and the hero ingredient. Salmon orange is the secondary action color, warmer and slightly softer than tuna red. Yellowtail pink provides a gentle tertiary accent for subtle highlights and blush surfaces. Seaweed dark green grounds the design with strong horizontal dividers and borders — it provides contrast against the predominantly light palette. Mango yellow is the highlight accent — used sparingly for emphasis, loading states, and decorative dice patterns. Sesame off-white decorates backgrounds with subtle scatter texture. Bamboo light is the warm neutral material for counters and structural surfaces. Sriracha red is the action line — drizzle squiggles and underlines that add dynamic energy to headings and CTAs. Deep brown is for body text on all light surfaces.

## Typography Recommendations

Poke bowl bar typography blends clean modern readability with tropical freshness:

- **Display headings:** DM Sans Bold or Plus Jakarta Sans Bold (clean, geometric, modern — the health-forward bowl bar identity).
- **Section headings:** Space Grotesk or Manrope SemiBold (technical precision meets approachable roundness).
- **Ingredient labels:** Inter SemiBold or Nunito Sans SemiBold (crisp legibility for ingredient names on colorful blocks).
- **Body text:** Inter or DM Sans at `font-normal` (clean readability for descriptions, nutritional info, and menus).
- **Price tags:** `font-mono font-semibold text-sm` with `tracking-wider` (clean monospace for pricing).
- **Specials / daily bowl:** Caveat or Archival Sketch (handwritten feel for daily specials board).
- **Numbers (calories, macros):** JetBrains Mono or IBM Plex Mono (data-driven nutritional info display).
- **CJK / Japanese-inspired accent:** Noto Sans JP (for occasional Japanese text elements like bowl names or decorative kanji).
- Text on tuna red blocks should use white (`#f5f5f0`) for strong contrast.
- Text on rice white backgrounds should use deep brown (`#3a2020`) for WCAG AA compliance.
- Display headings can have a subtle text-shadow: `[text-shadow:0_1px_2px_rgba(58,32,32,0.1)]`.

## Component Architecture Pattern

1. Bamboo counter surface as the primary background material (light wood grain header or full-page surface).
2. Rice base circle as the central content anchor (hero element, avatar, or section centerpiece).
3. Seaweed strip divider between sections (dark green grounding horizontal line).
4. Fresh fish color block cards for feature sections (tuna red, salmon orange, yellowtail pink panels).
5. Sesame seed scatter pattern on background surfaces (subtle texture behind content).
6. Mango dice accent near headings and on card corners (bright yellow highlight decoration).
7. Sriracha drizzle underline on key headings (wavy red line beneath section titles).
8. Mason jar containers for sidebar content and drink sections (glass jar silhouette with transparency).
9. Woven bamboo dividers between content blocks (horizontal bamboo strips with grain texture).
10. Clean rice-white footer with seaweed strip grounding the layout.

## Interaction Rules

- Default state: clean, fresh, vibrant — surfaces are bright, colors pop, the counter feels organized.
- Hover (tuna/salmon buttons): fish color brightens, subtle scale.
  - `hover:brightness-110 hover:shadow-[0_6px_16px_rgba(196,64,64,0.4)] hover:translate-y-[-1px] transition-all duration-200`.
- Active (buttons): press into the bowl.
  - `active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c44040] focus:ring-offset-2 focus:ring-offset-[#f5f5f0]`.
- Mango dice: gentle rotation animation on hover to simulate fresh-cut pieces tumbling.
  - `hover:rotate-12 transition-transform duration-300`.
- Sriracha drizzle: draws on with a wipe animation when entering viewport.
  - `animate-[drizzle-draw_0.8s_ease-out_forwards]` with `background-size` transitioning from `0%` to `100%`.
- Rice base: subtle pulse on hover to suggest freshness.
  - `hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300`.
- Transitions: `transition-all duration-200` (smooth, fresh — like a knife through ripe fish).
- Continuous animations: sesame seed gentle drift (optional), mango loading bounce.

Drizzle draw keyframes:
```css
@keyframes drizzle-draw {
  0% { background-size: 0% 100%; }
  100% { background-size: 100% 100%; }
}
```

Sesame drift keyframes (optional ambient):
```css
@keyframes sesame-drift {
  0%, 100% { background-position: 0 0; }
  50% { background-position: 4px 2px; }
}
```

## Reusable Tailwind Tokens

- Bamboo counter: `bg-gradient-to-b from-[#e0d4b0] to-[#c8bc94] bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(160,140,90,0.08)_3px,rgba(160,140,90,0.08)_4px)] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.12)]`
- Rice base circle: `w-32 h-32 rounded-full bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)]`
- Tuna red block: `bg-gradient-to-br from-[#d04848] to-[#c44040] rounded-lg shadow-[0_4px_8px_rgba(196,64,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`
- Salmon orange block: `bg-gradient-to-br from-[#e89048] to-[#e08040] rounded-lg shadow-[0_4px_8px_rgba(224,128,64,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]`
- Yellowtail pink block: `bg-gradient-to-br from-[#f0b8b0] to-[#e8a8a0] rounded-lg shadow-[0_4px_8px_rgba(232,168,160,0.3),inset_0_1px_2px_rgba(255,255,255,0.3)]`
- Seaweed divider: `h-1.5 bg-gradient-to-r from-transparent via-[#1a3a1a] to-transparent rounded-full`
- Sesame scatter: `bg-[radial-gradient(ellipse_2px_1px_at_15%_20%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_45%_60%,#e0d8c8_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_75%_35%,#e8e0d0_0%,transparent_100%),radial-gradient(ellipse_2px_1px_at_25%_80%,#e0d8c8_0%,transparent_100%)] bg-[length:120px_120px]`
- Mango dice: `grid grid-cols-3 gap-1 w-fit`
- Sriracha underline: `bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='8'%3E%3Cpath d='M0 4 Q12 0 25 4 T50 4 T75 4 T100 4' stroke='%23e03030' fill='none' stroke-width='2'/%3E%3C/svg%3e")] bg-repeat-x bg-bottom pb-1`
- Mason jar: `bg-gradient-to-b from-white/30 via-white/20 to-white/10 rounded-b-2xl rounded-t-lg border-2 border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.4)]`
- Tuna badge: `inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c44040] text-white text-xs font-semibold`
- Salmon badge: `inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#e08040] text-white text-xs font-semibold`
- Bamboo strip: `h-1 bg-gradient-to-r from-transparent via-[#d4c8a0] to-transparent`
- Rice base small: `w-12 h-12 rounded-full bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.1)]`

## Quality Checklist (must pass)

- Bamboo counter surface present as a background material on at least one major section (header, card, or full page).
- Rice base circle present as a central element on at least one section (hero, avatar, or feature anchor).
- Fresh fish color blocks (tuna red, salmon orange, yellowtail pink) used for at least two different accent purposes (buttons, badges, or panels).
- Seaweed strip divider present between at least two major sections (dark green grounding line).
- Sesame seed scatter pattern visible on at least one background surface (subtle decorative texture).
- Mango dice pattern present as a decorative accent near at least one heading or card corner.
- Sriracha drizzle red squiggle underline on at least one section heading.
- Mason jar container used for at least one sidebar, drink section, or decorative panel.
- Color palette is rice white + tuna red + salmon orange + seaweed dark green + mango yellow + sesame off-white + bamboo light + sriracha red.
- Typography is clean, modern, and legible — geometric sans-serif for display, crisp sans for body, monospace for data.
- The aesthetic reads as a modern poke bowl bar — clean, fresh, healthy, vibrant, and tropical.
- Every ingredient color has a clear purpose: tuna red = primary action, salmon orange = secondary, yellowtail pink = tertiary, seaweed = grounding, mango = highlight.
- All surfaces feel fresh and clean — no heavy shadows, no dark backgrounds dominating, no cluttered compositions.
- The interface feels like looking into a well-assembled poke bowl: organized, colorful, balanced, and appetizing.

## Anti-Patterns

- Heavy dark backgrounds dominating the layout (poke bowl aesthetic is bright, clean, rice-white centered).
- Missing bamboo counter texture (bamboo wood grain is the signature surface material).
- Missing rice base circle (the rice circle is the central organizing element of the bowl composition).
- Cluttered layouts without seaweed dividers (seaweed strips provide necessary grounding contrast).
- Muted, desaturated colors (poke bowl design is vibrant — tuna red, salmon orange, mango yellow should pop).
- Heavy ornamental borders or drop shadows (the aesthetic is clean and light — not heavy and decorative).
- Missing fresh fish color accent system (the three fish colors are the primary accent language).
- Dark text on tuna red or salmon orange without adequate contrast (use white text on dark fish colors).
- Modern minimalism taken too far (poke bowl design needs ingredient color warmth — it is not a tech startup).
- Missing the sesame scatter texture (the subtle seed pattern adds organic texture without clutter).
- Heavy neon or chrome effects (poke bowl is natural materials: bamboo, rice, fish — not chrome and neon).
- Flat uniform surfaces without bamboo grain or rice texture (materials give the design its food identity).
- Missing sriracha drizzle accent (the wavy red line adds dynamic energy to headings and CTAs).
- Generic food clip art instead of geometric ingredient representations (poke design uses abstract color blocks, not literal illustrations).
- Sterile, clinical white without warm bamboo tones (the palette needs bamboo warmth to avoid feeling cold).

## Accessibility Considerations

- Tuna red (`#c44040`) text on rice white (`#f5f5f0`) provides strong contrast — verify WCAG AA for body text.
- White (`#f5f5f0`) text on tuna red (`#c44040`) blocks provides good contrast — verify WCAG AA.
- Deep brown (`#3a2020`) text on rice white (`#f5f5f0`) surfaces provides excellent contrast — meets WCAG AAA.
- Bamboo gradient backgrounds are decorative — place text content on solid rice white surfaces or use sufficient overlay.
- Sesame scatter patterns are decorative — `aria-hidden="true"` on purely decorative texture overlays.
- Mango dice patterns are decorative — `aria-hidden="true"` when not conveying meaningful information.
- Sriracha drizzle underlines are decorative — ensure headings are readable without the squiggle line.
- Spinning or floating animations must respect `prefers-reduced-motion` (static display instead of animation).
- Mango loading bounce must respect `prefers-reduced-motion` (static dots instead of bouncing).
- Focus states: `focus:ring-2 focus:ring-[#c44040]` (tuna red ring visible against rice white backgrounds).
- Touch targets minimum 44x44px on all interactive fish color buttons and mason jar controls.
- Color should not be the sole indicator of ingredient type — include text labels alongside color-coded blocks.
- Verify WCAG AA contrast for white text on salmon orange (`#e08040`) blocks — may need darkening.
- Verify WCAG AA contrast for white text on yellowtail pink (`#e8a8a0`) — use dark text (`#3a2020`) instead.
- Rice base circle content must be accessible via screen readers even when visually styled as a circle.
- Fish color blocks that represent interactive elements must have accessible names and roles.
- Seaweed ribbon labels must have proper heading hierarchy for screen reader navigation.
- Mason jar containers must not trap keyboard focus — ensure focus can move in and out freely.
