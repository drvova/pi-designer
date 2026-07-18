---
name: virtual-reality-ui
description: Build virtual reality UI components (headset viewport, controller ray, virtual terrain, avatar hand, teleport arc, guardian boundary, virtual menu floating) with immersive VR interfaces, floating panels, and the spatial computing of virtual reality environments. Trigger this skill when the user asks for VR UI, virtual reality design, headset interface, controller interaction, VR menu, teleport arc, guardian boundary, avatar hand, virtual terrain, immersive VR, or VR spatial panels.
---

# Virtual Reality UI

Use this skill to design and implement immersive virtual reality interfaces with headset viewport framing, controller ray interactions, virtual terrain rendering, avatar hand silhouettes, teleport arc pathfinding, guardian boundary systems, and floating menu panels that exist within the simulated 3D void of VR space.

## Non-Negotiable Foundations

- VR UI exists inside a simulated void. Every surface floats -- there is no ground plane by default unless terrain is rendered. All panels, menus, and controls must feel weightless and anchored to the headset or controller, not to a page.
- The headset viewport defines the user's world. All UI must be authored relative to the viewport frustum, not arbitrary screen coordinates. Elements outside the comfortable 60-degree cone of focus should be avoided.
- Controller rays are the primary pointer. Every interactive element must be targetable by a ray cast originating from the controller model position, not by a 2D cursor.
- Depth in VR is real, not simulated. Z-axis values map to actual perceived distance. Elements placed too close cause eye strain (under 0.5m). Elements placed too far become unreadable (beyond 5m).
- Guardian boundaries are a safety system, not a decorative element. They must pulse, glow, and provide unmistakable visual warning when the user approaches the play area edge.
- Virtual menus float and must track the headset position or attach to the controller. They cannot be static screen-space overlays.

## Headset Viewport Setup

### Viewport Container

Every VR interface needs a viewport-framed container representing the headset display:

- Base viewport: `w-screen h-screen bg-[#0a0a1a] overflow-hidden relative`.
- Lens frame overlay: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,#0a0a1a_100%)]` -- vignette simulating lens falloff.
- Comfort mask: `absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(10,10,26,0.8)]` -- dark periphery simulating headset padding.
- Field of view indicator: `absolute inset-[10%] border border-white/5 rounded-[50%]` -- subtle circle marking the comfortable viewing cone.

### Viewport Depth Zones

Map VR distance zones to viewport layers:

| Zone | Distance Simulation | translateZ | Purpose |
|---|---|---|---|
| Near-field | 0.5m - 1m | `150px` to `100px` | Hand menus, controller UI |
| Mid-field | 1m - 3m | `50px` to `20px` | Floating panels, info cards |
| Far-field | 3m - 5m | `10px` to `0px` | Environment labels, terrain markers |
| Horizon | 5m+ | `-20px` to `-100px` | Terrain, sky dome, distant objects |

## Core Material Recipes

### 1) Floating VR Menu Panel

The primary UI container in VR -- a translucent panel floating in void space.

- Base: `bg-[#ffffff]/8 backdrop-blur-3xl border border-[#2a6aaa]/30 rounded-2xl`.
- Shadow: `shadow-[0_0_60px_rgba(42,106,170,0.15),0_20px_40px_rgba(0,0,0,0.6)]`.
- Float: `animate-[vr-float_6s_ease-in-out_infinite] [transform-style:preserve-3d]`.
- Glow ring: `after:absolute after:inset-[-1px] after:rounded-2xl after:bg-gradient-to-br after:from-[#2a6aaa]/20 after:to-transparent after:opacity-50`.
- Max width: `max-w-[480px]` (comfortable reading distance in VR).

### 2) Headset Viewport Frame

The wide-angle lens frame representing the user's VR headset display.

- Outer shell: `absolute inset-0 bg-[#0a0a1a] rounded-[3rem] overflow-hidden`.
- Inner viewport: `absolute inset-[2%] bg-[#0a0a1a] rounded-[2.5rem]`.
- Lens flare: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(42,106,170,0.08)_0%,transparent_70%)]`.
- Edge vignette: `absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(10,10,26,0.9)]`.
- IPD indicator: two subtle `absolute` circles at typical interpupillary distance, `w-2 h-2 rounded-full bg-white/5`.

### 3) Controller Ray Cast

The pointer ray extending from the controller into VR space.

- Ray line: `h-[2px] bg-gradient-to-r from-[#6a6a6a] via-[#2a6aaa] to-transparent origin-left`.
- Controller point: `w-3 h-3 rounded-full bg-[#6a6a6a] shadow-[0_0_8px_rgba(106,106,106,0.5)]`.
- Hit indicator: `w-6 h-6 rounded-full border-2 border-[#2a6aaa] bg-[#2a6aaa]/20 animate-pulse`.
- Ray container: `[transform-style:preserve-3d]` with rotation applied via JS based on controller orientation.

### 4) Teleport Arc Path

The dotted curved trajectory from controller to teleport destination.

- Arc SVG: dotted `stroke` path with `stroke-dasharray="4 6"` and `stroke-linecap="round"`.
- Arc color: `stroke="#2a6aaa" stroke-opacity="0.6"`.
- Landing indicator: `w-8 h-8 rounded-full border-2 border-[#40c060] bg-[#40c060]/20 shadow-[0_0_20px_rgba(64,192,96,0.3)]`.
- Invalid arc color: `stroke="#c04040" stroke-opacity="0.4"` (blocked/invalid teleport).
- Arc animation: `stroke-dashoffset` animation to create a flowing dots effect toward the target.

### 5) Guardian Boundary Glow

The safety perimeter wall that warns users approaching the play area edge.

- Boundary panel: `absolute bottom-0 h-[300px] w-full bg-gradient-to-t from-[#e08040]/10 via-[#e08040]/5 to-transparent`.
- Pulse glow: `animate-[guardian-pulse_2s_ease-in-out_infinite]` -- opacity oscillates 0.3 to 0.8.
- Warning stripe: repeating `linear-gradient(45deg, #e08040 10px, transparent 10px, transparent 20px, #e08040 20px)` at 40% opacity.
- Intensity zones: `from-[#e08040]/30` (far), `from-[#e08040]/60` (mid), `from-[#e08040]/90` (close).
- Corner markers: `absolute w-4 h-4 border-t-2 border-l-2 border-[#e08040]` at each viewport corner.

### 6) Avatar Hand Silhouette

The gloved hand representation that tracks controller position.

- Hand outline: SVG `<path>` for a gloved hand silhouette, `fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.5"`.
- Palm indicator: `w-6 h-6 rounded-full bg-[#ffffff]/5 border border-[#ffffff]/10`.
- Finger tips: 5 small `w-2 h-2 rounded-full bg-[#2a6aaa]/20` circles positioned at fingertip SVG coordinates.
- Interaction highlight: fingertip circles expand to `w-3 h-3 bg-[#2a6aaa]/40` when intersecting an interactive element.
- Glow: `shadow-[0_0_12px_rgba(42,106,170,0.2)]` on the hand container.

### 7) Virtual Terrain Mesh

The ground plane or terrain surface rendered in VR space.

- Base mesh: SVG or CSS grid pattern `bg-[linear-gradient(rgba(64,192,96,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(64,192,96,0.08)_1px,transparent_1px)] bg-[size:40px_40px]`.
- Distance fade: gradient overlay `bg-gradient-to-b from-[#0a0a1a] via-transparent to-[#0a0a1a]` masking far edges.
- Elevation lines: `border-t border-[#40c060]/10` repeated at intervals to suggest contour.
- Terrain glow: `shadow-[0_-20px_60px_rgba(64,192,96,0.05)]` ambient light beneath terrain surface.
- Horizon blend: `bg-gradient-to-t from-[#0a0a1a] to-transparent h-32` at the far edge to dissolve terrain into void.

## Color Palette System

| Token | Hex | Usage |
|---|---|---|
| VR Blue | `#2a6aaa` | Primary UI accent, menu borders, ray color, interactive highlights |
| Virtual Green | `#40c060` | Valid states, teleport landing, terrain grid, success indicators |
| Controller Gray | `#6a6a6a` | Controller model, ray origin, inactive elements |
| Guardian Orange | `#e08040` | Boundary warning, safety glow, caution indicators |
| Terrain Earth | `#3a5a3a` | Terrain mesh tint, ground surface, earthy base tones |
| Sky Virtual | `#4a8acc` | Sky dome gradient, ambient environment light, atmosphere |
| Menu White-Translucent | `#ffffff` at 8-20% opacity | Menu panel backgrounds, text on dark void, floating surfaces |
| Dark Void | `#0a0a1a` | Primary background, viewport void, deepest layer |
| Danger Red | `#c04040` | Invalid teleport, error states, blocked interactions |
| Highlight Cyan | `#60d0e0` | Active selection, hover targets, focus indicators |

### Color Application Rules

- Dark void (`#0a0a1a`) is the dominant background -- VR environments are overwhelmingly dark to reduce eye strain and create contrast for floating UI.
- VR Blue (`#2a6aaa`) is the primary accent. All interactive elements use it as their active/hover color.
- Guardian Orange (`#e08040`) is reserved exclusively for safety boundaries. Never use it for decorative purposes -- users must learn to associate it with play area limits.
- Virtual Green (`#40c060`) signals valid, safe, and confirmed states. Teleport destinations, terrain markers, and success feedback.
- Text colors: `text-white/90` primary, `text-white/50` secondary, `text-[#2a6aaa]` interactive/link.
- Translucent whites for panels: `bg-white/5` to `bg-white/15` -- never opaque white, which breaks the VR immersion.

## Typography Recommendations

- VR text must be readable at distance. Minimum body size: `text-base` (16px equivalent). Menu titles: `text-xl` to `text-2xl`. Warning text: `text-lg font-semibold`.
- Font stack: system sans-serif or geometric sans (Inter, Roboto, Noto Sans). No serifs in VR -- they shimmer at distance.
- Weight hierarchy: `font-light` for environmental labels, `font-medium` for menu items, `font-semibold` for titles, `font-bold` for warnings.
- Letter spacing on environment labels: `tracking-wider` for readability at distance.
- Text glow for readability on dark backgrounds: `text-shadow: 0 0 8px rgba(42,106,170,0.3)`.
- Line height for VR menus: `leading-relaxed` -- VR text needs more breathing room than screen UI.
- Avoid `text-sm` and below in VR -- text below 14px equivalent becomes illegible in headset resolution.

## Component Architecture Pattern

1. Viewport container (dark void background, lens vignette overlay).
2. Sky dome / environment layer (ambient gradient, distant environment).
3. Terrain mesh (ground plane with grid, elevation lines, horizon fade).
4. Far-field objects (distant markers, terrain labels at low opacity).
5. Mid-field panels (floating menus, info cards, interactive surfaces).
6. Near-field UI (hand menus, controller-attached UI, tooltip labels).
7. Controller overlay (ray cast, hand silhouette, hit indicator).
8. Guardian boundary (safety walls at play area edge, always last layer).
9. Comfort overlays (vignette, IPD indicator, lens effects).

## Interaction Rules

### Ray-to-Panel Targeting

Controller ray intersects with floating menu panels:

- Ray hit detection uses the panel's bounding box in 3D space.
- Hover state on panel: `border-[#2a6aaa]/60 shadow-[0_0_30px_rgba(42,106,170,0.2)]` -- panel brightens.
- Hover state on specific element inside panel: element gets `bg-[#2a6aaa]/10 rounded-lg px-3 py-2`.
- Active press: `bg-[#2a6aaa]/20 scale-[0.97]` with `transition-transform duration-75`.

### Teleport Activation

- Hold trigger: arc appears from controller, curve calculates to valid landing spot.
- Valid landing: green circle on terrain, arc is blue dashed.
- Invalid landing: red circle, arc is red dashed, haptic buzz.
- Release trigger on valid spot: teleport executes, screen fades to black for 150ms, user relocates.

### Menu Grab and Reposition

- Pinch gesture on menu edge: menu detaches and follows controller.
- Menu tracks controller with slight lag (spring physics): `transition-transform duration-200 ease-out`.
- Release: menu stays at new position with subtle settle bounce.

### Guardian Proximity

- Far (80% of boundary): faint orange gradient appears at viewport edge.
- Mid (50%): orange glow intensifies, warning stripe visible.
- Close (20%): full guardian wall pulse, strong orange glow, haptic feedback.
- Outside: screen fades to guardian wall only, user must step back.

## Reusable Tailwind Tokens

- VR viewport: `w-screen h-screen bg-[#0a0a1a] overflow-hidden relative`
- Lens vignette: `bg-[radial-gradient(ellipse_at_center,transparent_60%,#0a0a1a_100%)]`
- VR menu panel: `bg-white/8 backdrop-blur-3xl border border-[#2a6aaa]/30 rounded-2xl shadow-[0_0_60px_rgba(42,106,170,0.15),0_20px_40px_rgba(0,0,0,0.6)]`
- Controller ray: `h-[2px] bg-gradient-to-r from-[#6a6a6a] via-[#2a6aaa] to-transparent origin-left`
- Teleport arc: SVG `stroke-dasharray="4 6" stroke-linecap="round" stroke="#2a6aaa"`
- Landing indicator: `w-8 h-8 rounded-full border-2 border-[#40c060] bg-[#40c060]/20 shadow-[0_0_20px_rgba(64,192,96,0.3)]`
- Guardian panel: `bg-gradient-to-t from-[#e08040]/10 via-[#e08040]/5 to-transparent animate-[guardian-pulse_2s_ease-in-out_infinite]`
- Terrain grid: `bg-[linear-gradient(rgba(64,192,96,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(64,192,96,0.08)_1px,transparent_1px)] bg-[size:40px_40px]`
- Avatar hand: SVG silhouette `stroke="#ffffff" stroke-opacity="0.15" fill="none"`
- Void text primary: `text-white/90`
- Void text secondary: `text-white/50`
- Interactive accent: `text-[#2a6aaa]`
- Menu hover highlight: `bg-[#2a6aaa]/10 rounded-lg`
- Panel hover border: `border-[#2a6aaa]/60 shadow-[0_0_30px_rgba(42,106,170,0.2)]`
- Near-field z: `translate-z-[100px]`
- Mid-field z: `translate-z-[30px]`
- Float animation: requires custom `@keyframes vr-float` and `@keyframes guardian-pulse` in CSS.

## Quality Checklist (must pass)

- All UI panels float in void space with no page-relative positioning.
- Headset viewport has a vignette/lens falloff effect at the edges.
- Controller ray originates from a visible controller point, not from screen center.
- Teleport arc is a curved dotted path that changes color for valid/invalid destinations.
- Guardian boundary glows orange and intensifies as the user approaches the edge.
- Avatar hand silhouette is visible and its fingertips highlight on interactive element hover.
- Terrain mesh uses a grid pattern with horizon fade into void.
- All text is large enough to read at VR distance (minimum `text-base`).
- Menu panels use translucent backgrounds, never opaque white.
- Color palette is consistent: blue for UI, green for valid, orange for safety, gray for controller.
- Animations are smooth (60fps target) and use `transform`/`opacity` only.
- `prefers-reduced-motion` disables float animations and teleport arc animation.
- Focus indicators are visible on translucent surfaces.
- Interactive elements are large enough for ray targeting (minimum 44x44px touch target equivalent).

## Anti-Patterns

- Placing UI elements on a flat screen-space overlay instead of floating them in 3D void space -- breaks VR immersion.
- Using opaque white panels -- VR surfaces must be translucent to maintain depth perception.
- Making the ray cast origin from screen center instead of the controller model position.
- Guardian boundaries as decorative border rather than a safety warning system with intensity scaling.
- Text sizes below `text-base` -- VR headset resolution cannot render small text clearly.
- Using the guardian orange color for non-safety elements -- users must trust that orange means boundary.
- Static menus that don't track headset or controller position -- VR UI must be spatial, not screen-locked.
- Ignoring the comfortable viewing cone -- all important UI should stay within 60 degrees of the viewport center.
- Overlapping floating panels without clear depth separation -- users cannot distinguish z-order without visual cues.
- Linear or mechanical animations -- VR motion must feel organic to avoid motion sickness.
- Missing `prefers-reduced-motion` fallback for users with vestibular sensitivities.
- Placing interactive elements closer than 0.5m or further than 5m from the virtual camera.
- Using sharp corners on floating panels -- VR surfaces benefit from `rounded-2xl` or larger to reduce aliasing.
- Gradient backgrounds that compete with terrain or sky dome -- keep backgrounds minimal.

## Accessibility Considerations

- VR interfaces must provide comfort options for users with motion sickness: reduce or disable float animations, simplify parallax, provide snap-turn instead of smooth rotation.
- `prefers-reduced-motion`: disable teleport arc animation, guardian pulse becomes static glow, floating panels stop bobbing, controller ray becomes solid instead of animated.
- All interactive elements must be targetable by ray and reachable via controller input -- no touch-only interactions.
- Text contrast on translucent panels: ensure minimum 4.5:1 contrast ratio against the translucent background. Use `text-white/90` (not `text-white/40`) on `bg-white/8` backgrounds.
- Guardian boundaries must provide multiple warning signals: visual (orange glow), haptic (controller vibration), and spatial (wall appearance) -- not just one modality.
- Provide a seated VR mode where all UI repositions to within comfortable reach without standing.
- Menu items must have minimum 48x48px target size for comfortable ray targeting.
- Audio feedback should accompany visual state changes (hover click, teleport confirm, guardian warning) for non-visual confirmation.
- High-contrast mode: increase panel opacity to `bg-white/20`, boost text to `text-white`, increase ray thickness to `h-[3px]`.
- Provide subtitle or caption support for any audio cues in the VR environment.
- Ensure no content requires rapid head movement to access -- all UI should be reachable with minimal neck rotation (within 90 degrees total arc).
