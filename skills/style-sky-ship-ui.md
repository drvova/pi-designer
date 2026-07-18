---
name: sky-ship-ui
description: Build sky ship UI components (balloon canopy, canvas sail, wooden gondola, wind compass, cloud harbor, rope net, lookout crow's nest) with airy elevated surfaces, cloud effects, and the adventurous spirit of a flying ship. Trigger this skill when the user asks for sky ship design, airship UI, balloon vessel interface, flying gondola, cloud harbor aesthetic, wind compass navigation, crow's nest lookout, or aerial adventure interfaces.
---

# Sky Ship UI

Use this skill to design and implement adventurous, airy interfaces inspired by a flying sky ship: balloon canopy tops with round colorful forms, canvas sail surfaces stretched taut, wooden gondola hulls floating on air, wind compass navigation elements, cloud harbor platforms among the clouds, rope net patterns connecting structures, and crow's nest lookout towers scanning the horizon.

## Non-Negotiable Foundations

Every sky ship interface must satisfy these requirements or it is not a sky ship:

1. **Elevated atmosphere as the dominant backdrop.** The sky ship flies above the clouds. Backgrounds must use sky blue `#87ceeb` or lighter cloud whites as the primary surface. There is no ground — the entire UI floats. Every element must feel unburdened by gravity.

2. **Aerodynamic curvature on all structural elements.** Balloons are round. Gondola hulls curve upward at the bow. Sails billow with wind pressure. No structural element can have flat tops or sharp rectangular corners. Every surface must bow, curve, or billow to suggest wind and lift.

3. **Visible materiality of canvas, wood, and rope.** The ship is built from physical materials — stretched canvas, carved wood, braided rope. Every structural surface must show its material grain: canvas weave texture on sails, wood grain on the gondola, rope twist on netting. Flat untextured panels are not part of this ship.

4. **Upward visual weight with floating suspension.** The ship defies gravity. Visual weight must pull upward — elements appear to hover, lift, or suspend. Drop shadows point downward (the ship casts a shadow on clouds below), but element positioning and animation must suggest upward buoyancy.

5. **Adventure and movement as emotional tone.** The sky ship is on a journey. The interface must feel dynamic, not static. Wind should appear to move through sails, compasses should suggest navigation, and cloud layers should drift. Even still frames must imply motion and exploration.

## Core Material Recipes

### 1) Balloon Canopy Top

The rounded colorful balloon that lifts the ship — used as a hero element, header, or floating card top.

- `bg-gradient-to-b from-[#e08040] via-[#e89050] to-[#d07030] rounded-[50%_50%_0.5rem_0.5rem/60%_60%_0.5rem_0.5rem] p-8 shadow-[0_8px_32px_rgba(106,74,42,0.2)]`.
- Canvas stitch lines: `bg-[repeating-linear-gradient(90deg,transparent,transparent_38px,rgba(0,0,0,0.06)_38px,rgba(0,0,0,0.06)_40px)]` (vertical stitching seams on the balloon fabric).
- Highlight sheen: `bg-[linear-gradient(160deg,rgba(255,255,255,0.15)_0%,transparent_40%)]` (sunlight reflection on the balloon surface).
- Tie point at bottom: `after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-3 after:bg-[#8a6a3a] after:rounded-sm` (the knot where balloon meets gondola ropes).

### 2) Canvas Sail Surface

A stretched fabric panel with visible weave texture — used for content cards, info panels, or navigation bars.

- `bg-[#e8dcc0] rounded-lg p-6 shadow-[0_4px_16px_rgba(106,74,42,0.15)] border border-[#d0c4a8]`.
- Canvas weave: `bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(138,106,58,0.04)_3px,rgba(138,106,58,0.04)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(138,106,58,0.03)_3px,rgba(138,106,58,0.03)_4px)]` (crosshatch weave pattern).
- Wind billow: `shadow-[inset_4px_0_12px_rgba(255,255,255,0.1),inset_-2px_0_8px_rgba(0,0,0,0.05)]` (inner shadow suggesting the sail is filled with wind from one side).
- Edge fray: `border-dashed border-[#d0c4a8]` (one edge using dashed border to suggest fraying canvas).

### 3) Wooden Gondola Hull

The boat-shaped body of the ship — used as a container, sidebar, or bottom navigation bar.

- `bg-gradient-to-b from-[#6a4a2a] via-[#7a5a3a] to-[#5a3a1a] rounded-[0.5rem_0.5rem_2rem_2rem] p-6 shadow-[0_8px_24px_rgba(10,10,10,0.3)] border border-[#4a2a10]`.
- Wood grain: `bg-[repeating-linear-gradient(2deg,transparent,transparent_6px,rgba(255,255,255,0.03)_6px,rgba(255,255,255,0.03)_7px)]` (subtle horizontal wood grain lines).
- Plank seams: `bg-[linear-gradient(90deg,transparent_0%,transparent_24%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.08)_25%,transparent_25%,transparent_49%,rgba(0,0,0,0.08)_49%,rgba(0,0,0,0.08)_50%,transparent_50%,transparent_74%,rgba(0,0,0,0.08)_74%,rgba(0,0,0,0.08)_75%,transparent_75%)]` (vertical plank divisions).
- Hull curve reinforcement: `border-b-4 border-[#3a2008]` (heavier bottom border suggesting the hull's keel).

### 4) Wind Compass

A navigational compass element — used for navigation, progress indicators, or directional UI.

```html
<div class="relative w-32 h-32 rounded-full border-4 border-[#8a6a3a] bg-gradient-to-br from-[#f0f0f0] to-[#d8d8d8] shadow-[0_4px_16px_rgba(106,74,42,0.2),inset_0_2px_8px_rgba(255,255,255,0.4)]">
  <div class="absolute inset-2 rounded-full border border-[#c0c0c0]/40"></div>
  <div class="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#8a6a3a]">N</div>
  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#8a6a3a]">S</div>
  <div class="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#8a6a3a]">W</div>
  <div class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#8a6a3a]">E</div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[14px] border-b-[#e08040]"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[2px] w-[2px] h-[14px] bg-[#8a6a3a] rotate-180 origin-bottom"></div>
</div>
```

- Outer ring: `rounded-full border-4 border-[#8a6a3a]` (brass compass rim).
- Face: gradient from white to light gray (polished metal compass face).
- Cardinal points: small bold text in rope brown `#8a6a3a`.
- Needle: CSS triangle pointing north in balloon warm `#e08040` (the orange needle).

### 5) Cloud Harbor Platform

A floating cloud surface — used as a landing area, card container, or section divider.

- `bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/60`.
- Cloud puffs: `before:absolute before:-top-6 before:left-8 before:w-20 before:h-12 before:bg-white/60 before:rounded-full before:blur-sm after:absolute after:-top-4 after:right-12 after:w-16 after:h-10 after:bg-white/50 after:rounded-full after:blur-sm` (puffy cloud formations above and around the platform).
- Bottom fade: `bg-gradient-to-b from-transparent to-[#87ceeb]/20` (the cloud thins at the edges, revealing sky below).
- Float animation: `animate-[float_6s_ease-in-out_infinite]` (gentle bobbing motion).

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

### 6) Rope Net Pattern

A braided rope grid — used as a decorative border, connector between elements, or structural accent.

```html
<div class="w-full h-16 relative overflow-hidden opacity-40">
  <svg viewBox="0 0 200 60" class="w-full h-full" preserveAspectRatio="none">
    <defs>
      <pattern id="rope" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,10 Q5,0 10,10 Q15,20 20,10" stroke="#8a6a3a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M10,0 Q20,5 10,10 Q0,15 10,20" stroke="#8a6a3a" stroke-width="1.5" fill="none" opacity="0.4"/>
      </pattern>
    </defs>
    <rect width="200" height="60" fill="url(#rope)"/>
  </svg>
</div>
```

- Simplified version: `bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(138,106,58,0.15)_4px,rgba(138,106,58,0.15)_5px),repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(138,106,58,0.1)_4px,rgba(138,106,58,0.1)_5px)]` (diamond mesh pattern).
- Container: `border-2 border-dashed border-[#8a6a3a]/30 rounded-lg` (rope-bound frame).

### 7) Crow's Nest Lookout

A small elevated observation platform — used as a status indicator, alert area, or featured callout.

- `bg-gradient-to-b from-[#6a4a2a] to-[#5a3a1a] rounded-t-xl p-4 border-t-4 border-[#8a6a3a] shadow-[0_-4px_12px_rgba(106,74,42,0.15)]`.
- Railing: `border-t-2 border-[#8a6a3a]/60` (thin line suggesting a wooden railing at the top).
- Flag: `<div class="w-0 h-0 border-l-[8px] border-l-[#e08040] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent absolute -top-1 right-2"></div>` (small triangular pennant flag in balloon warm).
- Telescope: `bg-[linear-gradient(90deg,#c0c0c0,#a0a0a0)] h-1 w-8 rounded-full absolute top-2 left-4 rotate-[-15deg]` (a small silver telescope pointing toward the horizon).

### 8) Sky Gradient Background Layer

Full-page atmospheric backdrop for the entire sky ship scene.

- `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#f0f0f0] min-h-screen`.
- Cloud drift: `bg-[radial-gradient(ellipse_120px_60px_at_20%_30%,rgba(255,255,255,0.8)_0%,transparent_100%),radial-gradient(ellipse_160px_50px_at_70%_20%,rgba(255,255,255,0.7)_0%,transparent_100%),radial-gradient(ellipse_100px_40px_at_50%_60%,rgba(255,255,255,0.5)_0%,transparent_100%),radial-gradient(ellipse_140px_55px_at_85%_70%,rgba(255,255,255,0.6)_0%,transparent_100%)]` (scattered soft cloud shapes).
- Sun glow: `bg-[radial-gradient(circle_at_85%_10%,rgba(255,240,200,0.4)_0%,transparent_30%)]` (warm sun in the upper right corner).
- Horizon haze: `bg-gradient-to-b from-transparent via-white/20 to-white/40` (atmospheric haze toward the bottom).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Balloon Warm | `#e08040` | Primary accent — balloon fabric, CTAs, needle |
| Canvas Cream | `#e8dcc0` | Surface material — sails, cards, content panels |
| Gondola Wood | `#6a4a2a` | Structural material — hull, frames, borders |
| Cloud White | `#f0f0f0` | Light surfaces — cloud platforms, pearl accents |
| Sky Blue | `#87ceeb` | Background atmosphere — the open sky |
| Rope Brown | `#8a6a3a` | Connecting material — borders, nav, ties |
| Wind Silver | `#c0c0c0` | Functional accents — compass, metal, hardware |
| Sail White | `#f5f0f0` | Clean surfaces — text areas, input fields |

Palette rules: The sky ship is warm and adventurous. Balloon warm orange is the heartbeat — it draws the eye and signals action. Canvas cream and sail white provide calm reading surfaces. Gondola wood grounds the design with earthy structural weight. Cloud white and sky blue create the airy environment. Rope brown connects everything — literally (ropes) and visually (borders, dividers, navigation). Wind silver is reserved for metal hardware: compasses, rivets, telescope lenses. The palette should feel sunlit, warm, and inviting — a ship on a fair-weather voyage.

Secondary tints for gradients and depth:

| Tint | Hex | Use |
|---|---|---|
| Balloon Deep | `#d07030` | Balloon shadow |
| Sky Pale | `#b0e0f0` | Mid-sky gradient |
| Horizon White | `#f8f8f8` | Cloud platform peak |
| Wood Dark | `#4a2a10` | Deep wood shadow |
| Rope Light | `#a88a50` | Rope highlight |
| Canvas Dark | `#d0c4a8` | Canvas edge shadow |

## Typography Recommendations

- **Display:** Fraunces, Bitter (warm serif with character — evokes ship logs, adventure maps, captain's correspondence).
- **Body:** DM Sans, Nunito Sans (clean and readable, carries the warmth of the palette without competing with display text).
- **Accent:** Special Elite, Courier Prime (monospaced typewriter feel — for compass readings, navigation coordinates, log entries).
- The typography should feel hand-crafted and adventurous, like words carved into a wooden ship's wheel or stamped onto a canvas map. Display fonts carry the warmth of sun-weathered wood. Body fonts stay clear against canvas cream backgrounds.
- Letter-spacing on display text: `tracking-wide` (relaxed and open, like open sky).
- Body text color: `text-[#4a3a2a]` (dark warm brown on canvas cream — high contrast, no pure black).

## Component Architecture Pattern

Sky ship interfaces follow a suspension architecture — elements hang, float, or connect via ropes and rigging, with clear vertical hierarchy from sky down through the ship to clouds below.

**Vertical layers (top to bottom):**

1. **Sky layer** — the open atmosphere. Background gradient with drifting clouds. The canvas of the scene.
2. **Rigging layer** — ropes, lines, and connectors. Navigation, breadcrumbs, progress indicators. Visual threads that tie the ship together.
3. **Canopy layer** — balloon tops, sail surfaces, crow's nest. The uppermost visible structures. Headers, hero areas, featured content.
4. **Hull layer** — gondola body, main content area. The ship's working deck. Cards, forms, primary content.
5. **Cloud layer** — cloud harbor platforms, floating islands below. Footer areas, secondary content, ambient decoration.

**Component composition:**

```
SkyShipContainer (sky gradient bg)
  ├─ CloudHarborPlatform (cloud layer - footer/bottom)
  ├─ GondolaHull (main content container)
  │   ├─ RopeNetPattern (section dividers)
  │   ├─ CanvasSailSurface (content cards)
  │   ├─ WindCompass (navigation / progress)
  │   └─ Crow'sNestLookout (status / alerts)
  └─ BalloonCanopyTop (header / hero)
```

**State patterns:**

- Default: bright sky, canvas surfaces at rest, gentle cloud drift animation.
- Hover: element lifts slightly — `transform: translateY(-2px)` with enhanced shadow `shadow-[0_8px_24px_rgba(106,74,42,0.2)]`. The wind catches it.
- Active: canvas surface presses inward — `active:translate-y-0 active:shadow-[0_2px_8px_rgba(106,74,42,0.15)]` (sail luffing).
- Disabled: element grays to wind silver `#c0c0c0` with `opacity-50` and `grayscale` — a becalmed ship.
- Loading: rope net pattern animates with `animate-[sway_3s_ease-in-out_infinite]` — gentle rocking in the wind.
- Error: balloon deflates — element scales down vertically with `scale-y-95` and warm red overlay `bg-[#e08040]/10`.

## Interaction Rules

1. **Hover lifts, active sinks.** When a user hovers, elements rise (`translateY(-2px)` to `translateY(-4px)`) like the wind catches them. On active/click, they press down (`translateY(1px)`) as if weight lands on the deck. This creates the physical sensation of a ship on air currents.

2. **Transitions are breezy, not instant.** Use `duration-300` as the baseline — faster than underwater kingdom but not instantaneous. Wind moves with purpose. `transition-all duration-300 ease-out` for most interactions. Hover lifts use `ease-out` (lifting with the wind). Active sinks use `ease-in` (settling with gravity).

3. **Scrolling feels like sailing forward.** Horizontal scroll containers should snap gently — `scroll-snap-type: x mandatory` with `scroll-snap-align: start`. Vertical scrolling should feel smooth and unresisted — no damping, no momentum tricks. The ship glides.

4. **Buttons billow.** Primary buttons should have a subtle wind effect on hover — the button slightly widens (`scaleX-[1.02]`) and the shadow expands on the windward side, simulating a sail catching wind. `hover:scale-x-[1.02] hover:shadow-[4px_4px_16px_rgba(106,74,42,0.2)]`.

5. **Focus rings are rope brown, not white.** Keyboard focus indicators must use `ring-[#8a6a3a]/60 ring-2 ring-offset-2 ring-offset-[#e8dcc0]` — rope brown against canvas cream. The focus ring looks like a rope cinching around the focused element.

6. **Click feedback is a sail snap.** On click, elements briefly compress horizontally (`scaleX-[0.98]`) and then spring back — like a sail snapping taut in a gust. `transition-transform duration-150 active:scaleX-[0.98]`.

7. **Tooltips unfurl like flags.** Tooltips appear from the trigger with a horizontal unfurl animation — `animate-in slide-in-from-left-2` (or right, depending on position). They unfurl like a pennant flag catching wind, not pop in from nothing.

8. **Navigation rotates like a compass.** Active navigation items rotate a small compass needle or pennant indicator toward their direction. `rotate-[Ndeg]` where N is the compass bearing of the nav position.

## Reusable Tailwind Tokens

- Sky gradient bg: `bg-gradient-to-b from-[#87ceeb] via-[#b0e0f0] to-[#f0f0f0]`.
- Balloon canopy: `bg-gradient-to-b from-[#e08040] via-[#e89050] to-[#d07030] rounded-[50%_50%_0.5rem_0.5rem/60%_60%_0.5rem_0.5rem]`.
- Canvas sail surface: `bg-[#e8dcc0] rounded-lg border border-[#d0c4a8]`.
- Gondola hull: `bg-gradient-to-b from-[#6a4a2a] via-[#7a5a3a] to-[#5a3a1a] rounded-[0.5rem_0.5rem_2rem_2rem] border border-[#4a2a10]`.
- Cloud platform: `bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/60`.
- Rope border: `border-2 border-dashed border-[#8a6a3a]/30`.
- Rope divider: `h-px bg-gradient-to-r from-transparent via-[#8a6a3a]/30 to-transparent`.
- Crow's nest: `bg-gradient-to-b from-[#6a4a2a] to-[#5a3a1a] rounded-t-xl border-t-4 border-[#8a6a3a]`.
- Compass face: `bg-gradient-to-br from-[#f0f0f0] to-[#d8d8d8] rounded-full border-4 border-[#8a6a3a]`.
- Sky text: `text-[#4a3a2a]` (body), `text-[#3a2a18]` (headings), `text-[#e08040]` (accent).
- Canvas weave texture: `bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(138,106,58,0.04)_3px,rgba(138,106,58,0.04)_4px),repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(138,106,58,0.03)_3px,rgba(138,106,58,0.03)_4px)]`.
- Wood grain texture: `bg-[repeating-linear-gradient(2deg,transparent,transparent_6px,rgba(255,255,255,0.03)_6px,rgba(255,255,255,0.03)_7px)]`.
- Wood plank seams: `bg-[linear-gradient(90deg,transparent_0%,transparent_24%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.08)_25%,transparent_25%,transparent_49%,rgba(0,0,0,0.08)_49%,rgba(0,0,0,0.08)_50%,transparent_50%,transparent_74%,rgba(0,0,0,0.08)_74%,rgba(0,0,0,0.08)_75%,transparent_75%)]`.
- Wind silver accent: `text-[#c0c0c0]` (text), `bg-[#c0c0c0]/10` (subtle background).
- Depth shadow (floating): `shadow-[0_12px_40px_rgba(0,0,0,0.06)]` (light, airy shadow).
- Depth shadow (structural): `shadow-[0_8px_24px_rgba(106,74,42,0.15)]` (warm wood-toned shadow).
- Cloud puff: `bg-white/60 rounded-full blur-sm` (small cloud accent).
- Lift hover: `hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(106,74,42,0.2)] transition-all duration-300 ease-out`.

## Quality Checklist

- Sky blue `#87ceeb` or lighter cloud tones dominate the background (the UI floats in open sky).
- At least one balloon-shaped curved element with warm orange gradient.
- Canvas weave texture appears on at least one surface element (sail or card).
- Wood grain texture appears on at least one structural element (gondola or frame).
- Rope material appears as a border, divider, or connector somewhere on the page.
- All structural elements have curved or rounded corners — no sharp rectangular boxes.
- Hover states produce upward lift (`translateY(-2px)` to `-4px`), not brightness changes.
- Focus rings use rope brown `#8a6a3a`, not default white.
- Transitions use 300ms duration — breezy but purposeful.
- At least one cloud element (platform, puff, or drift animation) appears on the page.
- Wind compass or directional indicator is present for navigation or progress.
- The aesthetic reads as a sky ship on an adventure, not a generic warm-themed UI.
- Text uses warm dark brown `#4a3a2a` or `#3a2a18`, never pure black `#000000`.
- Typography carries adventure character — Fraunces or Bitter for display text.
- Visual weight suggests upward suspension — elements appear to float, not sit heavily.

## Anti-Patterns

- Dark or night-sky backgrounds (the sky ship flies in daylight — no dark mode default).
- Sharp rectangular corners on structural elements (balloons, gondolas, sails are all curved).
- Pure black `#000000` text on canvas cream (use warm brown `#4a3a2a` instead — black is too harsh for the warm palette).
- Flat untextured surfaces (every material — canvas, wood, rope — must show its grain).
- Hover states that use only brightness increase (use upward lift and shadow expansion instead).
- Fast transitions under 200ms (wind moves with purpose, not with snap — minimum 200ms).
- Green or blue accent colors for CTAs (the primary accent is balloon warm `#e08040` — blue and green belong to the sky background, not interactive elements).
- Heavy drop shadows with black (shadows should be warm brown `rgba(106,74,42,0.15)` or light and airy `rgba(0,0,0,0.06)` — never harsh black).
- Rigid geometric layouts with no organic spacing (the ship exists in open air — let elements breathe with generous margins).
- Gray or cool-toned focus rings (use rope brown `#8a6a3a` with canvas cream offset to stay within the ship's material palette).
- Elements that appear to sink or sit heavily (no heavy bottom shadows, no inset shadows suggesting weight pressing down).
- Static elements with no suggestion of motion (clouds drift, sails billow, compasses point — everything implies wind and journey).

## Accessibility Considerations

- **Contrast ratios on canvas surfaces.** Body text at `#4a3a2a` on canvas cream `#e8dcc0` yields approximately 5.8:1 contrast ratio — pass AA for normal text, approaching AAA. Heading text at `#3a2a18` on `#e8dcc0` yields approximately 7.4:1 — pass AAA. Balloon warm `#e08040` on canvas cream `#e8dcc0` yields approximately 2.4:1 — use only for large decorative text or pair with darker text for label+icon combinations. Wind silver `#c0c0c0` on canvas cream yields approximately 1.5:1 — never use for text, only for decorative borders and icons.

- **Focus visibility.** Rope brown focus rings (`#8a6a3a`) against canvas cream (`#e8dcc0`) provide approximately 3.6:1 ring-to-background contrast. Ensure `ring-offset-2 ring-offset-[#e8dcc0]` to separate the ring from the element. For elements on sky blue backgrounds, rope brown on `#87ceeb` yields approximately 2.8:1 — consider darkening the ring to `#5a3a1a` (approximately 5.2:1) for elements positioned over sky backgrounds.

- **Reduced motion.** Wrap all cloud drift, floating bob, and sail sway animations in `@media (prefers-reduced-motion: reduce)` blocks. Replace `animate-[float_6s_ease-in-out_infinite]` with static `translate-y-0`. Replace `hover:-translate-y-1` with no transform. The breezy 300ms transitions become `transition-none`. The ship is still, but all content and functionality remain intact.

- **Color independence.** Never use balloon warm `#e08040` as the sole indicator of interactive state or important information. The orange must always be paired with a structural cue — icon change, text weight change, position change, or border change. Users who cannot perceive orange will still understand the interface through these structural signals.

- **Touch targets.** All interactive elements must meet 44x44px minimum touch target. Canvas sail buttons, rope net navigation links, wind compass controls, and crow's nest alert dismissals must all reach this threshold. Use generous padding (`px-6 py-3` minimum) within the adventurous but usable design.

- **Semantic HTML.** Balloon canopy headers should use `<header>` or `<h1>`-`<h6>`. Gondola hull containers should use `<main>` or `<section>`. Rope net navigation should use `<nav>`. Cloud harbor footers should use `<footer>`. Crow's nest alerts should use `<aside>` with `role="status"` or `role="alert"`. Wind compass progress indicators should use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.

- **Text alternatives.** Rope net SVG patterns must have `aria-hidden="true"` since they are decorative. Wind compass components that convey navigation state must have `aria-label` describing the current direction or progress. Crow's nest lookout alerts must have clear `aria-live="polite"` for dynamic content updates.

- **Motion sensitivity.** The sky ship is inherently motion-oriented — cloud drift, floating bob, sail billow. For users with vestibular disorders, all motion must be optional. The `prefers-reduced-motion` check is mandatory, not optional. Additionally, provide a visible toggle to disable ship animations independently of the system setting — position it in the crow's nest or compass area where it fits thematically.

- **Sky contrast fallback.** Elements positioned over the sky blue gradient background may have lower contrast than elements over canvas cream. Audit all text and interactive elements against the full gradient range — from `#87ceeb` at the top to `#f0f0f0` at the bottom. Text over sky blue `#87ceeb` must use dark brown `#3a2a18` (approximately 4.1:1 — AA large). Text over cloud white `#f0f0f0` can use slightly lighter brown `#4a3a2a` (approximately 5.8:1 — AA normal).

- **Print and high-contrast modes.** The warm palette with subtle textures may lose detail in high-contrast mode or grayscale printing. Ensure all structural meaning (hierarchy, grouping, state) is conveyed through borders, spacing, and weight — not color or texture alone. Canvas weave and wood grain are decorative enhancements, not information carriers.
