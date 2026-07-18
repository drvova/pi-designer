---
name: treehouse-ui
description: Build treehouse UI components (childhood backyard fort, rough wooden planks, rope ladder, leafy canopy dappled light, tire swing, flags on poles, hand-painted signs, knothole windows) with rustic plank textures, organic irregular construction, and the imaginative freedom of a secret hideaway in the branches. Trigger this skill when the user asks for treehouse, tree fort, backyard fort, wooden plank UI, rope ladder, cabin-in-the-trees, knothole, tire swing, hand-painted sign, secret hideaway, or childhood fort aesthetics.
---

# Treehouse UI

Use this skill to design and implement rustic backyard fort interfaces with rough horizontal plank surfaces, rope-ladder dividers, leafy canopy light overlays, hand-painted signage typography, knothole for portholes, tire swings, and flags-on-poles, channeling the warmth, imperfection, and imaginative freedom of a childhood secret hideaway built in the branches.

## Non-Negotiable Foundations

- A treehouse is built from scavenged lumber and found materials: planks are uneven, nails are visible, edges are rough-cut. Nothing is precision-milled or factory-finished.
- Construction is organic and irregular: boards overlap at slightly wrong angles, gaps let light through, and the whole structure feels hand-built by a child with enthusiasm and a hammer.
- Materials are natural and warm: raw pine, bark-covered logs, hemp rope, canvas, and found objects (tires, flags, bottle caps). Every surface has texture and grain.
- Colors are sunlit and earthy: warm wood tones, leaf greens, rope tans, and pops of hand-painted primary colors. The palette feels like a summer afternoon in the canopy.
- Typography mimics hand-painted signs: uneven, slightly crooked, painted on wood. Labels look like they were brushed by hand with leftover house paint.
- Motion is playful and physical: rope ladders sway, tire swings rock, flags flutter, and leaves rustle in dappled light. Nothing moves with digital precision.
- The emotional register is freedom and secret-keeping: the interface should feel like entering a private world above the ground, governed by club rules and imagination.
- Light is warm and filtered: sunlight comes through leaves in shifting patches, not harsh direct beams. The canopy casts dappled green-gold light across every surface.

## Core Material Recipes

### 1) Rough Horizontal Plank Surface (the foundational surface)

The signature treehouse surface: weathered horizontal boards with visible gaps.

- Background gradient: `bg-gradient-to-b from-[#c4a070] via-[#b09060] to-[#a08050]`.
- Plank gaps: horizontal lines using a repeating linear-gradient background image at 40px intervals.
- Board texture: subtle vertical wood grain via SVG noise or `bg-[repeating-linear-gradient(90deg,rgba(106,74,42,0.03)_0px,rgba(106,74,42,0.06)_1px,transparent_2px,transparent_8px)]`.
- Edge roughness: `border-2 border-[#8a6a3a]` with slightly irregular radius `rounded-sm`.
- Inner shadow at plank joins: `shadow-[inset_0_3px_6px_rgba(0,0,0,0.2)]` at each board gap.
- Visible nails: small circles at board intersections using pseudo-elements `rounded-full bg-[#6a5a4a] w-1.5 h-1.5 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)]`.

```css
.plank-surface {
  background-image:
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 38px,
      rgba(74, 50, 20, 0.4) 38px,
      rgba(74, 50, 20, 0.6) 40px,
      transparent 40px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(106, 74, 42, 0.04) 0px,
      rgba(106, 74, 42, 0.08) 1px,
      transparent 2px,
      transparent 8px
    );
}
```

### 2) Rope Ladder Divider

Decorative rope ladder element used as section dividers.

- Side ropes: two vertical `w-2 bg-gradient-to-b from-[#8a7a4a] via-[#a09060] to-[#8a7a4a] rounded-full` columns.
- Rungs: horizontal `h-2.5 bg-gradient-to-b from-[#a08050] via-[#8a6a3a] to-[#6a4a2a] rounded-sm` bars between ropes.
- Knot detail: small circles at each rope-rung intersection `rounded-full bg-[#6a5a3a] w-2 h-2`.
- Spacing: rungs at 30px intervals with ropes visible between them.
- Slight rotation: `rotate-[-1deg]` or `rotate-[1deg]` alternating for organic feel.

```html
<div class="flex gap-8 py-4">
  <div class="w-2 bg-gradient-to-b from-[#8a7a4a] via-[#a09060] to-[#8a7a4a] rounded-full"></div>
  <div class="flex-1 flex flex-col gap-6 py-2">
    <div class="h-2.5 bg-gradient-to-b from-[#a08050] via-[#8a6a3a] to-[#6a4a2a] rounded-sm"></div>
    <div class="h-2.5 bg-gradient-to-b from-[#a08050] via-[#8a6a3a] to-[#6a4a2a] rounded-sm rotate-[-1deg]"></div>
    <div class="h-2.5 bg-gradient-to-b from-[#a08050] via-[#8a6a3a] to-[#6a4a2a] rounded-sm rotate-[1deg]"></div>
  </div>
  <div class="w-2 bg-gradient-to-b from-[#8a7a4a] via-[#a09060] to-[#8a7a4a] rounded-full"></div>
</div>
```

### 3) Leaf Canopy Dappled Light Overlay

Radial green light spots simulating sunlight filtered through leaves.

```css
.canopy-light {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(ellipse 120px 80px at 15% 20%, rgba(135, 206, 235, 0.12), transparent 70%),
    radial-gradient(ellipse 100px 100px at 60% 10%, rgba(255, 255, 200, 0.08), transparent 70%),
    radial-gradient(ellipse 80px 60px at 80% 50%, rgba(135, 206, 235, 0.10), transparent 70%),
    radial-gradient(ellipse 90px 70px at 30% 70%, rgba(58, 106, 42, 0.08), transparent 70%),
    radial-gradient(ellipse 110px 90px at 70% 85%, rgba(255, 255, 180, 0.06), transparent 70%);
  animation: canopyShift 8s ease-in-out infinite alternate;
}
@keyframes canopyShift {
  0%   { transform: translate(0, 0); opacity: 0.7; }
  100% { transform: translate(10px, -5px); opacity: 1; }
}
```

### 4) Hand-Painted Sign

Signage element with hand-painted typography on a wooden board.

- Board: `bg-gradient-to-b from-[#c4a070] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm px-6 py-3 shadow-[0_3px_6px_rgba(0,0,0,0.3)]`.
- Slight rotation: `rotate-[-1deg]` or `rotate-[0.5deg]` for hand-placed feel.
- Text: `text-[#c41e1e] font-bold text-xl tracking-wide` with a hand-painted font.
- Paint drip effect: `after` pseudo-element with `bg-[#c41e1e] w-0.5 h-2 rounded-b-full` at bottom of text.
- Nail holes: two small dark circles at top corners.
- Font recommendations: Permanent Marker, Caveat, Patrick Hand, or Gochi Hand for authentic hand-painted look.

```html
<div class="inline-block bg-gradient-to-b from-[#c4a070] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm px-6 py-3 shadow-[0_3px_6px_rgba(0,0,0,0.3)] rotate-[-1deg] relative">
  <span class="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-[#5a4a2a]"></span>
  <span class="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#5a4a2a]"></span>
  <h2 class="text-[#c41e1e] font-bold text-xl" style="font-family: 'Permanent Marker', cursive;">No Girls Allowed</h2>
</div>
```

### 5) Knothole Window Frame

Circular window frame simulating a knothole in a wooden board.

- Outer board: large rectangle with plank surface showing around the circular cutout.
- Knothole rim: `rounded-full border-4 border-[#6a4a2a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)]`.
- Inner darkness: `bg-[#2a1a0a] rounded-full overflow-hidden`.
- Light through hole: `bg-gradient-to-br from-[#87ceeb]/20 via-transparent to-transparent`.
- Bark texture: rough border using `border-[#4a3a1a]` inner ring.

```html
<div class="relative p-8 plank-surface">
  <div class="w-32 h-32 mx-auto rounded-full border-4 border-[#6a4a2a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden">
    <div class="w-full h-full bg-gradient-to-br from-[#87ceeb]/20 to-[#2a1a0a] flex items-center justify-center">
      <!-- Content peeking through the knothole -->
    </div>
  </div>
</div>
```

### 6) Tire Swing Decoration

SVG tire swing hanging from a rope, used as a decorative accent or loading indicator.

```html
<svg viewBox="0 0 100 120" class="w-20 h-24">
  <!-- Rope -->
  <line x1="50" y1="0" x2="50" y2="25" stroke="#8a7a4a" stroke-width="3" />
  <line x1="48" y1="0" x2="48" y2="25" stroke="#a09060" stroke-width="1" />
  <line x1="52" y1="0" x2="52" y2="25" stroke="#a09060" stroke-width="1" />
  <!-- Tire -->
  <ellipse cx="50" cy="65" rx="30" ry="35" fill="#2a2a2a" stroke="#1a1a1a" stroke-width="2" />
  <ellipse cx="50" cy="65" rx="22" ry="26" fill="#0a0a0a" stroke="#333" stroke-width="1" />
  <ellipse cx="50" cy="65" rx="18" ry="21" fill="#87ceeb" opacity="0.3" />
  <!-- Tread marks -->
  <line x1="25" y1="50" x2="28" y2="45" stroke="#1a1a1a" stroke-width="2" />
  <line x1="75" y1="50" x2="72" y2="45" stroke="#1a1a1a" stroke-width="2" />
  <line x1="25" y1="80" x2="28" y2="85" stroke="#1a1a1a" stroke-width="2" />
  <line x1="75" y1="80" x2="72" y2="85" stroke="#1a1a1a" stroke-width="2" />
  <!-- Rope knot at top -->
  <circle cx="50" cy="25" r="4" fill="#6a5a3a" stroke="#4a3a1a" stroke-width="1" />
</svg>
```

Swing animation:
```css
.tire-swing {
  transform-origin: top center;
  animation: swing 3s ease-in-out infinite alternate;
}
@keyframes swing {
  0%   { transform: rotate(-4deg); }
  100% { transform: rotate(4deg); }
}
```

### 7) Flag on Pole Accent

Small triangular or rectangular flag on a pole, used as section markers or status indicators.

- Pole: `w-1 h-16 bg-gradient-to-b from-[#a09060] via-[#8a7a4a] to-[#6a5a3a] rounded-full`.
- Flag: `w-12 h-8 bg-[#c41e1e]` with a triangular cut on the fly end using CSS clip-path or SVG.
- Flutter: subtle `animate-[flutter_2s_ease-in-out_infinite_alternate]` transform.

```css
.flag-pole {
  clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);
  animation: flagFlutter 2s ease-in-out infinite alternate;
}
@keyframes flagFlutter {
  0%   { transform: skewX(0deg) scaleX(1); }
  100% { transform: skewX(-3deg) scaleX(0.97); }
}
```

```html
<div class="flex items-start gap-0">
  <div class="w-1 h-16 bg-gradient-to-b from-[#a09060] via-[#8a7a4a] to-[#6a5a3a] rounded-full"></div>
  <div class="w-12 h-8 bg-[#c41e1e] mt-1 flag-pole shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"></div>
</div>
```

### 8) Plank Button (nailed board)

Button styled as a loose plank nailed over the surface.

- Board: `bg-gradient-to-b from-[#c4a070] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm px-5 py-2.5`.
- Text: `text-[#4a3a1a] font-bold text-base` with hand-painted font.
- Nails: four small dark circles at corners `w-1.5 h-1.5 rounded-full bg-[#5a4a2a]`.
- Shadow: `shadow-[0_3px_0_#6a4a2a,2px_2px_6px_rgba(0,0,0,0.2)]`.
- Pressed: `active:translate-y-1 active:shadow-[0_1px_0_#6a4a2a,inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Slight rotation: `rotate-[-0.5deg]` for organic hand-placed feel, removed on `active`.

## Color Palette System

### Core Treehouse Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Raw Pine | `#c4a070` | Fresh-cut pine boards | Primary surface, light planks |
| Pine Dark | `#a08050` | Aged pine | Surface shadows, lower boards |
| Pine Deep | `#8a6a3a` | Weathered wood | Borders, edges |
| Bark Brown | `#6a4a2a` | Tree bark, dark wood | Frames, borders, deep shadows |
| Bark Dark | `#4a3a1a` | Dark bark, log ends | Deep borders, text on light |
| Leaf Green | `#3a6a2a` | Canopy leaves | Accents, natural highlights |
| Leaf Light | `#5a8a3a` | Sunlit leaves | Secondary accent, overlays |
| Rope Tan | `#8a7a4a` | Hemp rope | Dividers, ties, structural |
| Rope Light | `#a09060` | Light hemp | Highlights on rope elements |
| Sky Blue | `#87ceeb` | Sky through branches | Overlays, knothole light, openness |
| Sky Pale | `#b0d8f0` | Hazy sky | Background tint, light areas |
| Hand-Painted Red | `#c41e1e` | House paint on wood | Signage, flags, primary accent |
| Paint Blue | `#3a6ac4` | Painted details | Secondary signage accent |
| Nail Gray | `#5a4a2a` | Iron nail heads | Nail detail, metal accents |
| Dark Hole | `#2a1a0a` | Inside a knothole | Deep backgrounds, cutouts |

Rules: Warm wood tones (pine, bark) dominate all surfaces. Rope tan provides structural accents and dividers. Leaf green and sky blue are used sparingly for natural atmosphere — they appear in overlays and light effects, not as primary surface colors. Hand-painted red is the primary accent for signage, flags, and interactive highlights. The palette should feel like a sunlit afternoon in a backyard treehouse.

## Typography Recommendations

Treehouse typography mimics hand-painted signs and childhood lettering:

- **Display headings:** Permanent Marker, Caveat, or Gochi Hand (hand-painted sign lettering).
- **Alternative display:** Patrick Hand, Amatic SC, or Fredoka (casual hand-drawn feel).
- **Body:** Patrick Hand, Comic Neue, or Archivo (readable but casual — like writing on a plank).
- **Signage/labels:** Permanent Marker or Caveat at `font-bold` (painted on wood boards).
- **Data/lists:** Courier Prime or Special Elite (typewritten club rules or inventory lists).
- **Alternative mono:** Kalam or Reenie Beanie (handwritten notes tacked to the wall).
- The MIX of hand-painted display fonts with casual body text creates the treehouse warmth.
- Labels should feel slightly imperfect: use `rotate-[-1deg]` or `rotate-[0.5deg]` on sign elements for hand-placed authenticity.
- Letter spacing is loose and uneven: `tracking-wide` or natural, never `tracking-widest` (too precise/military).

## Component Architecture Pattern

1. Raw pine plank background with horizontal board texture and visible gaps (the treehouse floor/walls).
2. Bark brown framed panels for content sections (built compartments within the fort).
3. Hand-painted signs as headings and section labels (boards nailed above each section).
4. Rope ladder dividers between major content areas (structural rope elements).
5. Knothole-framed circular areas for media or focal points (windows to the outside).
6. Tire swing and flag decorations as playful accents and status indicators.
7. Leaf canopy dappled light overlay across the entire interface (the canopy above).
8. Plank buttons with visible nails for interactive elements (loose boards you push).

## Interaction Rules

- Default state: warm, sunlit, slightly imperfect — planks at slight angles, rope swaying gently.
- Hover: plank brightens (`hover:brightness-105`), flag flutters faster, sign tilts slightly.
- Active: plank presses down (`active:translate-y-1` with shadow collapse — like pushing a loose board).
- Focus: warm ring `focus:ring-2 focus:ring-[#c41e1e] focus:ring-offset-2 focus:ring-offset-[#a08050]`.
- Transitions: `transition-all duration-200` (physical, quick — like wood responding to a push).
- Tire swing: gentle rocking animation `3s ease-in-out infinite alternate`.
- Flag flutter: subtle skew animation `2s ease-in-out infinite alternate`.
- Canopy light: slow shifting animation `8s ease-in-out infinite alternate` simulating leaves moving in wind.
- Rope ladder: very subtle sway on `hover` of nearby elements.
- Signs: maintain their slight rotation; on hover, straighten slightly (`hover:rotate-0`) as if being read.

## Reusable Tailwind Tokens

- Plank surface: `bg-gradient-to-b from-[#c4a070] via-[#b09060] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm shadow-[0_3px_6px_rgba(0,0,0,0.2)]`
- Bark frame: `bg-gradient-to-br from-[#6a4a2a] to-[#4a3a1a] border-2 border-[#4a3a1a] rounded shadow-[0_4px_8px_rgba(0,0,0,0.3)]`
- Hand-painted sign: `bg-gradient-to-b from-[#c4a070] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm px-6 py-3 shadow-[0_3px_6px_rgba(0,0,0,0.3)] rotate-[-1deg]`
- Rope: `bg-gradient-to-b from-[#8a7a4a] via-[#a09060] to-[#8a7a4a] rounded-full`
- Plank button: `bg-gradient-to-b from-[#c4a070] to-[#a08050] border-2 border-[#8a6a3a] rounded-sm text-[#4a3a1a] font-bold shadow-[0_3px_0_#6a4a2a,2px_2px_6px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-[0_1px_0_#6a4a2a,inset_0_2px_4px_rgba(0,0,0,0.2)]`
- Knothole frame: `rounded-full border-4 border-[#6a4a2a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden`
- Nail detail: `w-1.5 h-1.5 rounded-full bg-[#5a4a2a] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)]`
- Canopy overlay: `pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_120px_80px_at_15%_20%,rgba(135,206,235,0.12),transparent_70%),radial-gradient(ellipse_100px_100px_at_60%_10%,rgba(255,255,200,0.08),transparent_70%)]`
- Flag: `bg-[#c41e1e] [clip-path:polygon(0_0,100%_0,85%_50%,100%_100%,0_100%)] shadow-[2px_2px_4px_rgba(0,0,0,0.2)]`
- Sign text: `text-[#c41e1e] font-bold tracking-wide` (with hand-painted font family)

## Quality Checklist (must pass)

- Surfaces use rough horizontal plank textures with visible board gaps and wood grain.
- Wood tones (raw pine, bark brown) dominate the color palette as primary surfaces.
- At least one playful animation: tire swing rocking, flag fluttering, or canopy light shifting.
- Visible nails or fasteners on plank elements (small dark circles at corners).
- Hand-painted sign elements use appropriate fonts (Permanent Marker, Caveat, etc.) with slight rotation.
- Elements have organic imperfection: slight rotations, uneven spacing, or hand-placed feel.
- Rope elements (dividers, ties, ladders) use the hemp tan gradient with knot details.
- Knothole or window elements use circular dark-framed containers suggesting openings in wood.
- Color palette is warm and sunlit: pine/bark with leaf green and sky blue accents.
- The aesthetic reads as a childhood treehouse fort built from scavenged lumber.

## Anti-Patterns

- Smooth, factory-finished surfaces (treehouse materials are rough-cut and weathered).
- Precise alignment and grid layouts (construction is organic, slightly crooked, hand-built).
- Dark or muted color palettes (the treehouse is sunlit, warm, and full of life).
- Digital or futuristic typography (all type should feel hand-painted or handwritten).
- Missing visible fasteners (planks need visible nails — they are held by nails, not magic).
- Rigid symmetry (embrace slight rotations, uneven gaps, and organic placement).
- Monochrome wood (add hand-painted color accents, leaf greens, and sky blues for life).
- Heavy or metallic textures (materials are light wood, rope, and canvas — nothing is forged or machined).
- Overly clean edges (boards should have rough, slightly irregular borders and rounded-sm at most).
- Missing the canopy light effect (dappled light is essential to the treehouse atmosphere).
- Military or technical labels (typography is playful, personal, and hand-crafted, not stenciled or precise).
- Perfectly straight dividers (use rope ladders with slight sway, not clean horizontal rules).

## Accessibility Considerations

- Dark bark brown (`#4a3a1a`) on raw pine (`#c4a070`) provides strong contrast for body text.
- Hand-painted red (`#c41e1e`) on pine provides good contrast for signage and headings.
- Hand-painted display fonts must be used at adequate sizes (16px+ body, 20px+ headings) for readability; pair with a more legible fallback for long-form text.
- Slight rotations on signs and planks must remain subtle (1-2 degrees max) to avoid disorientation or motion sickness.
- Tire swing, flag flutter, and canopy light animations must respect `prefers-reduced-motion` (stop all swaying, fluttering, and shifting).
- Focus states must be visible against wood-tone backgrounds (`focus:ring-2 focus:ring-[#c41e1e]` stands out against pine).
- Decorative tire swings, flags, canopy overlays, and nail details must be `aria-hidden="true"`.
- Touch targets must meet minimum size (44x44px) despite the rustic, organic styling.
- Hand-painted fonts may reduce legibility for some users; provide a high-legibility body text option and avoid hand-painted fonts for critical data.
- Canopy light overlay must not reduce text contrast below WCAG AA; keep overlay opacity low and ensure it sits behind content, not over text.
- Color is not the sole indicator for status; pair flag colors with text labels for users who cannot distinguish red from blue accents.
