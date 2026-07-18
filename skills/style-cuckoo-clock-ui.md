---
name: cuckoo-clock-ui
description: Build cuckoo clock UI components (Black Forest carved clock, pendulum swing, wooden leaf/bird carvings, cuckoo door, chain weights, painted clock face, Bavarian chalet style) with hand-carved wood textures, swinging pendulum animation, and the whimsical precision of German Schwarzwald clockmaking. Trigger this skill when the user asks for cuckoo clock design, Black Forest clock, pendulum swing animation, carved wood UI, Bavarian chalet, cuckoo bird door, or German clockmaking interfaces.
---

# Cuckoo Clock UI

Use this skill to design and implement interfaces inspired by the Black Forest cuckoo clock: hand-carved linden-wood surfaces, swinging brass pendulums, cuckoo-bird doors with warm amber glow, chain-weight accents, painted Roman-numeral dials, carved ivy leaves and stag decorations, and the whimsical precision of German Schwarzwald clockmaking.

## Non-Negotiable Foundations

- The cuckoo clock is a carved wooden chalet with living mechanical parts: a pendulum that swings, a cuckoo door that opens, and chain weights that hang. Every surface should feel like hand-carved walnut or linden wood.
- Materials are warm and organic: carved wood (walnut, linden), polished brass (pendulum, weights), painted details (clock face, floral trim), and a warm amber interior glow behind the cuckoo door.
- Colors are dark wood browns, brass gold, forest green carved leaves, and warm red painted accents. The mood is a Bav Alpine chalet at dusk — warm, rustic, and alive.
- Motion is essential: the pendulum must swing continuously, the cuckoo door can open on interaction, and the whole clock has a gentle living presence.
- Typography blends traditional Black Forest painted lettering (serif) with Roman numerals on the clock face.
- The aesthetic is tactile, carved, and whimsical — everything should look like it was shaped by a Schwarzwald craftsman's chisel.

## Core Material Recipes

### 1) Carved Wood Panel (the foundational surface)

The signature cuckoo clock surface: dark hand-carved walnut with depth and grain.

- Background gradient: `bg-gradient-to-br from-[#4a2e1a] via-[#3a2410] to-[#2a1808]`.
- Wood grain texture: SVG overlay of subtle wavy lines at `opacity-[0.08]` in `#6a4a2a` to simulate linden wood grain.
- Carved edge bevel: `border-2 border-t-[#5a3a20] border-l-[#5a3a20] border-b-[#1a0e04] border-r-[#1a0e04]`.
- Inner shadow: `shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_6px_16px_rgba(0,0,0,0.4)]`.
- Full: `bg-gradient-to-br from-[#4a2e1a] via-[#3a2410] to-[#2a1808] border-2 border-t-[#5a3a20] border-l-[#5a3a20] border-b-[#1a0e04] border-r-[#1a0e04] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_6px_16px_rgba(0,0,0,0.4)] p-6 rounded-lg`.

### 2) Pendulum Swing Animation

The defining motion element: a brass pendulum swinging continuously.

```css
@keyframes cuckoo-pendulum {
  0%, 100% { transform: rotate(-7deg); }
  50% { transform: rotate(7deg); }
}
.cuckoo-pendulum {
  transform-origin: top center;
  animation: cuckoo-pendulum 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

Pendulum element:
```html
<div class="cuckoo-pendulum w-1 bg-gradient-to-b from-[#c4a043] to-[#8a6a1a] h-32 mx-auto rounded-full">
  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#e8c66a] via-[#c4a043] to-[#8a6a1a] border-2 border-[#6a4a0a] -mb-4 mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,215,0,0.4)]"></div>
</div>
```

### 3) Cuckoo Bird Door

The whimsical centerpiece: a small door that opens to reveal the cuckoo bird and warm amber glow.

- Door frame: `bg-[#3a2410] rounded-t-[2rem] border-2 border-[#5a3a20] w-24 h-20 relative overflow-hidden`.
- Door (closed): `absolute inset-0 bg-gradient-to-b from-[#4a2e1a] to-[#2a1808] border-2 border-[#5a3a20] rounded-t-[2rem]`.
- Door (open on hover/active): `hover:-translate-y-1 hover:rotate-y-80` with `transition-transform duration-700`.
- Interior glow: behind the door, `bg-[#e8a828] opacity-40 blur-[8px]` to create warm amber light spilling out.
- Cuckoo bird: small SVG bird perched in the doorway.

```html
<svg viewBox="0 0 40 30" class="w-10 h-8 mx-auto">
  <ellipse cx="20" cy="18" rx="10" ry="7" fill="#6a4a2a"/>
  <circle cx="12" cy="14" r="5" fill="#5a3a1a"/>
  <circle cx="10" cy="12" r="1.5" fill="#1a0a00"/>
  <polygon points="7,14 4,15 7,16" fill="#c44a1a"/>
  <path d="M20,25 Q24,22 28,25" fill="none" stroke="#5a3a1a" stroke-width="1.5"/>
</svg>
```

### 4) Carved Ivy Leaf Decoration

Hand-carved wooden ivy leaves and vines framing the clock body.

```html
<svg viewBox="0 0 80 120" class="w-16 h-24 opacity-70">
  <path d="M40,5 Q35,40 40,115" fill="none" stroke="#3a5a2a" stroke-width="2"/>
  <g fill="#2a5a2a" stroke="#1a3a1a" stroke-width="0.5">
    <path d="M40,20 Q25,15 20,25 Q28,30 40,28 Z"/>
    <path d="M40,20 Q55,15 60,25 Q52,30 40,28 Z"/>
    <path d="M40,45 Q25,40 20,50 Q28,55 40,53 Z"/>
    <path d="M40,45 Q55,40 60,50 Q52,55 40,53 Z"/>
    <path d="M40,70 Q25,65 20,75 Q28,80 40,78 Z"/>
    <path d="M40,70 Q55,65 60,75 Q52,80 40,78 Z"/>
  </g>
  <circle cx="40" cy="30" r="3" fill="#c44a1a"/>
  <circle cx="40" cy="60" r="3" fill="#c44a1a"/>
</svg>
```

### 5) Stag / Deer Carving Accent

Classic carved stag head decoration (Schwarzwald hunting motif).

```html
<svg viewBox="0 0 60 60" class="w-12 h-12 opacity-60">
  <path d="M30,25 Q26,18 24,12 Q20,8 16,10 Q18,6 14,4" fill="none" stroke="#3a2a1a" stroke-width="1.5"/>
  <path d="M30,25 Q34,18 36,12 Q40,8 44,10 Q42,6 46,4" fill="none" stroke="#3a2a1a" stroke-width="1.5"/>
  <ellipse cx="30" cy="32" rx="8" ry="10" fill="#4a2e1a"/>
  <circle cx="27" cy="30" r="1" fill="#1a0a00"/>
  <circle cx="33" cy="30" r="1" fill="#1a0a00"/>
</svg>
```

### 6) Painted Clock Face Dial

Roman-numeral painted dial with warm cream background.

- Dial: `w-40 h-40 rounded-full bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b0] border-4 border-[#8a6a1a] flex items-center justify-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]`.
- Roman numerals: SVG text positioned around the circle at each hour position using `font-serif font-bold text-[#3a2a0a]`.
- Hands: `bg-[#1a1a1a]` thin lines rotating from center, with the pendulum rod visible below.

### 7) Chain Weight Accent

Decorative hanging chain weights (pinecone-shaped) that drive the clock movement.

```html
<div class="flex flex-col items-center gap-1">
  <div class="w-0.5 h-16 bg-gradient-to-b from-[#8a7a5a] to-[#5a4a2a]"></div>
  <div class="w-6 h-10 bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#3a2410] rounded-t-full rounded-b-lg shadow-[inset_0_1px_0_rgba(200,160,80,0.2)]"></div>
</div>
```

Multiple chains hang on each side of the clock body.

### 8) Cuckoo Clock Button

Wooden carved button with brass trim.

- `bg-gradient-to-b from-[#4a2e1a] to-[#2a1808] text-[#e0c890] font-serif font-medium px-6 py-3 border-2 border-t-[#5a3a20] border-b-[#1a0e04] rounded-lg shadow-[0_3px_0_#1a0e04,inset_0_1px_0_rgba(200,160,80,0.15)] hover:translate-y-0.5 hover:shadow-[0_1px_0_#1a0e04,inset_0_1px_0_rgba(200,160,80,0.15)] active:shadow-none transition-all`.

### 9) Carved Wood Divider

Decorative carved-leaf border strip for section separation.

- `h-2 bg-[#3a2410] border-y border-[#5a3a20]` with repeating carved-leaf SVG pattern overlay.

## Color Palette System

### Core Cuckoo Clock Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Walnut Dark | `#2a1808` | Dark carved walnut | Deep background, shadows |
| Walnut | `#3a2410` | Carved walnut | Primary wood surface |
| Walnut Light | `#4a2e1a` | Linden wood | Panel surfaces |
| Wood Highlight | `#5a3a20` | Carved edge highlight | Top/left bevels |
| Wood Trim | `#6a4a2a` | Lighter wood grain | Grain texture, details |
| Brass Gold | `#c4a043` | Polished brass | Pendulum, weights |
| Brass Light | `#e8c66a` | Bright brass | Pendulum highlights |
| Brass Dark | `#8a6a1a` | Aged brass | Pendulum shadows, dial ring |
| Dial Cream | `#f0e8d0` | Painted clock face | Clock face background |
| Ink Black | `#1a1a1a` | Clock hands | Hands, numerals |
| Forest Green | `#2a5a2a` | Carved ivy leaves | Leaf decorations |
| Forest Dark | `#1a3a1a` | Deep carved leaves | Leaf shadows |
| Warm Red | `#c44a1a` | Painted details | Flower accents, bird beak |
| Amber Glow | `#e8a828` | Interior light | Cuckoo door glow |
| Cream Trim | `#e0c890` | Painted lettering | Text on dark wood |

Rules: Dark walnut browns and brass gold dominate. The palette should feel like a Schwarzwald workshop at dusk — warm carved wood, polished brass, and the amber glow of a cuckoo clock interior. Forest green carved leaves and warm red painted details provide accent against the dark wood.

## Typography Recommendations

Cuckoo clock typography blends traditional Black Forest painted lettering with Roman numerals:

- **Display headings:** Cinzel, UnifrakturCook, or Playfair Display (carved wooden sign feel).
- **Clock face numerals:** Roman numerals (I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII) in Cinzel or Trajan.
- **Body:** EB Garamond, Lora, or Crimson Text (warm classical serif for readability).
- **Labels:** `font-serif font-medium text-sm tracking-wide text-[#e0c890]` for painted labels on dark wood.
- **Carved sign lettering:** UnifrakturCook for a Germanic carved-wood signboard feel on headings.
- Avoid sans-serif for primary text. The cuckoo clock aesthetic demands traditional serifs and Roman numerals.

## Component Architecture Pattern

1. Dark walnut carved-wood background (the chalet body).
2. Carved wood panels with beveled edges and wood-grain texture (content surfaces).
3. Painted clock-face dial with Roman numerals (time display or branding).
4. Swinging brass pendulum centered below the dial (living motion).
5. Cuckoo bird door above or within the clock body (interactive whimsical element).
6. Carved ivy leaves, vines, and stag decorations framing the panels (organic carving).
7. Chain weights hanging on the sides (mechanical detail).
8. Warm amber glow accents behind the cuckoo door (interior light).
9. Warm red painted floral details on wood surfaces (decorative trim).

## Interaction Rules

- Default state: carved wood, warm, with continuously swinging pendulum.
- Hover: wood surfaces warm slightly (`hover:brightness-110`), pendulum swings slightly wider, cuckoo door creaks open.
  - `hover:brightness-110 hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-500`.
- Cuckoo door open: `hover:-translate-y-1 transition-transform duration-700 ease-in-out` revealing amber glow and bird.
- Active: mechanical wooden press (`active:translate-y-0.5 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]`).
- Focus: warm amber glow ring `focus:ring-2 focus:ring-[#e8a828]/60 focus:ring-offset-2 focus:ring-offset-[#2a1808]`.
- Transitions: `transition-all duration-500 ease-in-out` (deliberate, wooden, unhurried — like clockwork mechanism).
- Pendulum: continuous swing at 2s intervals using `cubic-bezier(0.4, 0, 0.6, 1)`.
- Cuckoo door: opens on hover/active with a slow 700ms creak, revealing amber light.

## Reusable Tailwind Tokens

- Carved wood panel: `bg-gradient-to-br from-[#4a2e1a] via-[#3a2410] to-[#2a1808] border-2 border-t-[#5a3a20] border-l-[#5a3a20] border-b-[#1a0e04] border-r-[#1a0e04] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_6px_16px_rgba(0,0,0,0.4)]`
- Clock face dial: `rounded-full bg-gradient-to-br from-[#f0e8d0] to-[#e0d4b0] border-4 border-[#8a6a1a] shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]`
- Pendulum bob: `rounded-full bg-gradient-to-br from-[#e8c66a] via-[#c4a043] to-[#8a6a1a] border-2 border-[#6a4a0a] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,215,0,0.4)]`
- Cuckoo button: `bg-gradient-to-b from-[#4a2e1a] to-[#2a1808] text-[#e0c890] font-serif border-2 border-t-[#5a3a20] border-b-[#1a0e04] rounded-lg shadow-[0_3px_0_#1a0e04]`
- Amber glow: `bg-[#e8a828] opacity-40 blur-[8px]`
- Carved leaf SVG: ivy vine path with `fill-[#2a5a2a] stroke-[#1a3a1a]`
- Chain weight: `bg-gradient-to-b from-[#6a4a2a] via-[#5a3a1a] to-[#3a2410] rounded-t-full rounded-b-lg`
- Pendulum animation: `cuckoo-pendulum` keyframe with `transform-origin: top center`
- Warm shadow: `shadow-[0_6px_16px_rgba(0,0,0,0.4)]`
- Painted label: `font-serif font-medium text-sm tracking-wide text-[#e0c890]`

## Quality Checklist (must pass)

- At least one carved wood surface with gradient depth and beveled edges.
- At least one animated swinging pendulum (continuous motion).
- A cuckoo bird door element (with amber glow interior when open).
- At least one carved decoration (ivy leaves, vines, or stag).
- Roman numeral clock face dial present.
- Chain weight decorative accents on at least one side.
- Color palette is dark wood brown + brass gold + forest green + warm red.
- Typography uses traditional serif with Roman numerals.
- Wood surfaces have grain texture or carved depth (not flat).
- Shadows are warm, deep, and physical (carved wood has weight).
- The aesthetic reads as a Black Forest cuckoo clock — whimsical, carved, alive.
- Warm amber glow present behind cuckoo door or as accent.
- Motion is deliberate and clockwork-like (pendulum swing, door creak).

## Anti-Patterns

- Flat or untextured wood surfaces (carved wood needs gradient depth, grain, and bevels).
- Missing pendulum animation (the swinging pendulum is the defining element).
- Missing cuckoo door or bird (this is the whimsical centerpiece).
- Bright, cool, or neon colors (cuckoo clocks are warm wood, brass, and painted earth tones).
- Smooth digital animations (motion should feel mechanical and clockwork-like).
- Modern sans-serif typography alone (needs traditional serif + Roman numerals).
- Missing carved decorations (ivy leaves, vines, or stags are essential carving motifs).
- Missing chain weights (these are the mechanical signature of a cuckoo clock).
- Clean pristine surfaces (cuckoo clocks look hand-carved and well-loved).
- Digital time displays (use analog painted dials with Roman numerals).
- Missing amber glow (the warm interior light is what makes the cuckoo door magical).
- Pure black backgrounds (use dark walnut `#2a1808` with warm undertones).

## Accessibility Considerations

- Dial cream (`#f0e8d0`) with dark text (`#3a2a0a`) provides excellent contrast (WCAG AAA).
- Dark walnut backgrounds require light text (`#e0c890`) — verify WCAG AA minimum.
- Pendulum and cuckoo door animations must respect `prefers-reduced-motion` (stop swinging and door opening).
- Clock face SVGs need `aria-label` describing the time or function.
- Roman numeral labels should have Arabic numeral alternatives for screen readers (`aria-label="3 o'clock"` for "III").
- Cuckoo bird door interactions must be keyboard-accessible (`tabindex`, `role="button"`, Enter/Space to toggle).
- Decorative carvings (leaves, stags, chains) must be `aria-hidden="true"`.
- Focus states must be visible against dark wood (`focus:ring-2 focus:ring-[#e8a828]/60`).
- Touch targets must be adequate despite carved styling (minimum 44x44px).
- Amber glow effects should not blur or reduce text readability on adjacent surfaces.
