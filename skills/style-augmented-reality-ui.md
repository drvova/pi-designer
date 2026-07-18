---
name: augmented-reality-ui
description: Build augmented reality UI components (world anchor, face mesh, plane detection, object occlusion, AR label tag, portal window, light estimation) with mixed reality overlays, world-anchored UI, and the blended experience of augmented reality. Trigger this skill when the user asks for AR UI, augmented reality design, mixed reality, world-anchored interface, face mesh overlay, plane detection grid, AR labels, portal window, object occlusion mask, light estimation, or spatial AR overlays.
---

# Augmented Reality UI

Use this skill to design and implement augmented reality interfaces with world-anchored UI elements, face mesh wireframe overlays, plane detection grids, object occlusion masks, floating AR label tags, portal windows into virtual space, and light estimation indicators that blend digital content seamlessly into the real-world camera feed.

## Non-Negotiable Foundations

- AR UI overlays digital content on the real world. Every element must appear to exist in physical space -- anchored to detected surfaces, tracked objects, or camera-relative positions. Nothing floats without a spatial anchor.
- The camera feed is the background. All AR UI is composited on top of the live camera view, so translucent materials, shadows, and color choices must account for a variable, unpredictable real-world background.
- Plane detection is the foundation. Horizontal and vertical surface detection establishes where digital content can be placed. The grid visualization of detected planes must be clear but not intrusive.
- Object occlusion separates good AR from bad AR. Digital objects must be hidden behind real-world objects when they overlap. An AR cube behind a real cup must be partially invisible -- not rendered on top of the cup.
- Light estimation bridges reality and digital. AR elements must adjust their brightness and shadow direction based on the real-world ambient light to look grounded, not pasted on.
- World anchors are persistent. A placed AR object must stay at its world coordinates even if the device moves. Anchor drift must be handled gracefully with subtle re-alignment animations rather than hard jumps.

## World Space Setup

### Camera-Relative Positioning

All AR elements are positioned relative to the device camera in world coordinates:

- Near (0.3m - 1m): label tags, small controls, interaction handles. `translate-z-[80px]` equivalent in AR scaling.
- Mid (1m - 3m): placed objects, portal frames, anchor markers. `translate-z-[40px]` equivalent.
- Far (3m+): distant labels, environment markers, boundary indicators. `translate-z-[10px]` equivalent.

### Anchor System Architecture

Every AR element must have an anchor reference:

| Anchor Type | Purpose | Persistence |
|---|---|---|
| Surface anchor | Objects placed on detected horizontal/vertical planes | Session-persistent, drift-corrected |
| Object anchor | UI attached to a tracked real-world object | Tied to object recognition lifetime |
| Screen anchor | UI fixed to camera-relative position (HUD elements) | Always active, device-relative |
| Face anchor | UI attached to tracked face landmarks | Session-persistent while face visible |
| World origin anchor | Reference point for the initial scan position | Session-persistent, recalibrated on re-scan |

## Core Material Recipes

### 1) AR Label Tag (floating info tag anchored to object)

The primary information overlay -- a small tag that floats near a real-world object.

- Base: `bg-[#ffffff]/90 backdrop-blur-sm border border-[#40a0e0]/30 rounded-xl px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)]`.
- Anchor line: SVG `line` element from tag to object point, `stroke="#40a0e0" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="3 3"`.
- Anchor dot: `w-2 h-2 rounded-full bg-[#40a0e0] shadow-[0_0_6px_rgba(64,160,224,0.4)]` at the attachment point on the real object.
- Tag connector: small `w-[1px] h-4 bg-[#40a0e0]/30` vertical line between anchor dot and tag body.
- Dismiss button: `w-4 h-4 rounded-full bg-[#c44040]/10 text-[#c44040] text-xs` in tag corner.
- Text: `text-[#1a1a2e] text-sm font-medium` on the white tag background for maximum readability over camera feed.

### 2) Plane Detection Grid

A translucent grid overlay showing detected horizontal or vertical surfaces.

- Grid pattern: CSS `background-image: linear-gradient(rgba(64,192,64,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(64,192,64,0.12) 1px, transparent 1px); background-size: 50px 50px`.
- Plane boundary: `border border-[#40c040]/30 rounded-lg` outlining the detected plane edges.
- Surface normal indicator: small arrow SVG at plane center, `stroke="#40c040" stroke-width="2"`.
- Grid fade at edges: `mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%)` so grid fades at plane boundary.
- Active scanning: `animate-[grid-pulse_3s_ease-in-out_infinite]` -- grid opacity oscillates while scanning.
- Plane locked: grid becomes static at full `rgba(64,192,64,0.12)` opacity with a subtle `shadow-[0_0_20px_rgba(64,192,64,0.1)]` glow.

### 3) Face Mesh Wireframe Overlay

A wireframe mesh that maps to facial landmarks for face-tracking AR effects.

- Mesh SVG: `stroke="#ffffff" stroke-opacity="0.25" stroke-width="0.5" fill="none"`.
- Landmark dots: `w-1.5 h-1.5 rounded-full bg-[#40a0e0]/60` at each tracked facial feature point.
- Mesh density: approximately 468 vertices mapped from face mesh model, rendered as triangulated wireframe.
- Subtle fill between triangles: `fill="rgba(64,160,224,0.03)"` -- barely visible but adds dimensionality.
- Tracking lost: mesh fades out with `transition-opacity duration-300`, landmark dots turn `bg-[#c44040]/40`.
- Tracking gained: mesh fades in with `transition-opacity duration-500 ease-out`.

### 4) Object Occlusion Mask

The mask that hides AR content behind real-world objects.

- Implementation: use depth map or segmentation mask from the AR runtime.
- CSS overlay: `mix-blend-mode: normal` with the occlusion layer rendered between background (camera) and foreground (AR content) in the z-order.
- Shadow integration: occluded objects cast soft shadows onto detected surfaces near the occlusion boundary.
- Edge handling: slight `filter: blur(1px)` on occlusion mask edges to avoid hard digital cutouts.
- Fallback: when occlusion data is unavailable, AR objects render fully visible with a subtle `opacity-0.8` to reduce the "pasted on" feel.

### 5) Portal Window (see-through frame into virtual space)

A framed opening that reveals a virtual environment through a real-world surface.

- Frame: `border-[3px] border-[#40e0e0] rounded-2xl shadow-[0_0_30px_rgba(64,224,224,0.2)]`.
- Frame depth: `box-shadow: 0 0 0 1px rgba(64,224,224,0.1), 0 0 30px rgba(64,224,224,0.2), inset 0 0 20px rgba(0,0,0,0.3)` -- inner shadow suggests depth.
- Content inside portal: virtual scene rendered with `clip-path` to the portal frame bounds.
- Portal edge shimmer: `after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r after:from-transparent after:via-[#40e0e0]/10 after:to-transparent animate-[shimmer_4s_linear_infinite]`.
- Perspective distortion: elements inside the portal shift based on camera angle, creating parallax that suggests the virtual world extends beyond the frame.
- Portal label: `text-xs text-[#40e0e0] font-medium tracking-wider uppercase` below the frame indicating the virtual environment name.

### 6) Light Estimation Indicator

A small HUD element showing the real-world ambient light level for AR content calibration.

- Indicator bar: `w-24 h-1.5 rounded-full bg-white/10` with fill `bg-gradient-to-r from-[#40a0e0]/60 via-[#ffffff]/80 to-[#40a0e0]/60`.
- Fill width: dynamic, set via JS based on estimated lux value (0-100% of detected range).
- Lux label: `text-xs text-white/50 font-mono` showing approximate lux value.
- Position: top-right corner HUD, `absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5`.
- Shadow direction indicator: small arrow SVG that rotates to show the estimated primary light direction.
- Auto-hide: `transition-opacity duration-500` -- fades after 3 seconds of stable light, reappears on significant change.

### 7) World Anchor Point

The persistent pin marker on a detected surface where AR content is anchored.

- Pin body: `w-3 h-3 rounded-full bg-[#c44040] shadow-[0_0_8px_rgba(196,64,64,0.4)]`.
- Pin ring: `absolute inset-[-4px] rounded-full border border-[#c44040]/40 animate-ping`.
- Surface contact: subtle `w-8 h-1 rounded-full bg-[#c44040]/10` ellipse beneath the pin suggesting surface contact.
- Anchor label: `text-xs text-white/70 font-medium` above the pin showing anchor ID or object name.
- Drift correction: when anchor adjusts, pin does a subtle `transition-all duration-300 ease-out` shift instead of a hard snap.
- Anchor locked indicator: pin ring stops pinging, becomes static `border-[#c44040]/20`.

## Color Palette System

| Token | Hex | Usage |
|---|---|---|
| AR Primary | `#40a0e0` | Main UI accent, ray cast color, interactive highlights, tag borders |
| Anchor Red | `#c44040` | World anchor pins, anchor points, persistent markers, error states |
| Plane Green | `#40c040` | Plane detection grid, surface indicators, valid placement zones |
| Mesh White-Translucent | `#ffffff` at 10-30% opacity | Face mesh wireframe, mesh fills, subtle overlays |
| Label White | `#ffffff` | Label tag backgrounds, text on camera feed, HUD elements |
| Portal Cyan | `#40e0e0` | Portal frame borders, portal effects, virtual-through-real indicators |
| Occlusion Dark-Translucent | `#000000` at 20-60% opacity | Occlusion shadows, depth masking, object separation |
| World Gray | `#8a8a9a` | Neutral UI elements, inactive states, ambient indicators |

### Color Application Rules

- AR Primary (`#40a0e0`) is the dominant interactive color. All tappable/interactive AR elements use it.
- Anchor Red (`#c44040`) is exclusively for anchor points and persistent markers. It must be visually distinct from all other colors since anchors represent permanence.
- Plane Green (`#40c040`) is exclusively for detected surfaces. Users learn that green grid means "this surface is tracked."
- Portal Cyan (`#40e0e0`) is exclusively for portal windows. It represents the boundary between real and virtual.
- Text on camera feed must always have a backing surface or text shadow for readability: `text-shadow: 0 1px 4px rgba(0,0,0,0.5)`.
- Label backgrounds use `bg-[#ffffff]/90` not `bg-white` -- slight transparency lets the camera bleed through, grounding the tag in the scene.
- Never use pure `#000000` or `#ffffff` without alpha -- AR elements must blend with the real world, not block it.

## Typography Recommendations

- AR labels use system sans-serif fonts (SF Pro, Roboto, Noto Sans) for maximum readability over camera feed.
- Label text: `text-sm font-medium` for object names, `text-xs font-normal` for descriptions.
- HUD elements: `text-xs font-mono` for technical readouts (lux, coordinates, distance).
- Portal labels: `text-xs font-medium tracking-wider uppercase` for environment names.
- Warning text: `text-sm font-semibold text-[#c44040]` for anchor lost, tracking failed.
- All text over camera feed needs a text shadow or backing surface: `text-shadow: 0 1px 4px rgba(0,0,0,0.5)` or `bg-black/40 backdrop-blur-sm rounded px-2 py-0.5`.
- Minimum text size in AR: `text-xs` (12px). Anything smaller is unreadable over a noisy camera background.
- Font weight must be at least `font-medium` for text directly over camera feed -- light weights disappear against busy backgrounds.

## Component Architecture Pattern

1. Camera feed layer (full screen, live video).
2. Depth/occlusion buffer layer (masks real objects, renders between camera and AR).
3. Plane detection visualization (grid overlay on detected surfaces).
4. Far-field AR content (distant labels, environment markers).
5. Mid-field AR content (placed objects, portal windows, surface-anchored UI).
6. Near-field AR content (face mesh, AR label tags, interaction handles).
7. Anchor markers (world anchor pins, drift indicators).
8. HUD overlay (light estimation, status indicators, camera-relative UI).
9. System UI (session controls, mode switches, settings panel).

## Interaction Rules

### Surface Tap to Place

- Tap detected plane: place AR object at tap coordinates on the detected surface.
- Placement preview: object appears at 50% opacity with `animate-[place-in_0.3s_ease-out]` scaling from 0.8 to 1.0.
- Surface highlight: brief `bg-[#40c040]/20` flash on the tap point that fades over 400ms.
- Invalid tap (no detected surface): ripple effect in `#c44040` with "No surface detected" label.

### Anchor Interaction

- Long press on placed object: show anchor info panel with drift status, anchor ID, recalibrate option.
- Anchor drift detected: anchor pin does a subtle shake animation, label shows "Realigning..." then settles.
- Anchor lost: pin turns from red to `#c44040/40`, label shows "Anchor lost -- tap to re-anchor."
- Anchor recalibrate: user points camera at the original anchor area, system re-anchors with a success chime and pin flash.

### Face Mesh Interaction

- Face detected: mesh fades in over 500ms, landmark dots appear with staggered animation (100ms per region).
- Face tracked: mesh follows face with no perceptible lag (sub-20ms tracking latency).
- Face lost: mesh fades out over 300ms, landmark dots turn red then disappear.
- Expression change: mesh vertices shift smoothly, specific landmark groups highlight for detected expressions.

### Portal Interaction

- Camera approaches portal frame: virtual scene inside becomes more visible, depth increases.
- Camera aligns with portal center: virtual scene fills the portal frame completely, edge shimmer intensifies.
- Camera passes through portal (AR pass-through mode): real-world view transitions to virtual environment with a `transition-opacity duration-700` crossfade.
- Camera moves away from portal: virtual scene recedes, real world reasserts.

## Reusable Tailwind Tokens

- AR label tag: `bg-[#ffffff]/90 backdrop-blur-sm border border-[#40a0e0]/30 rounded-xl px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)]`
- Label text: `text-[#1a1a2e] text-sm font-medium`
- Anchor dot: `w-2 h-2 rounded-full bg-[#c44040] shadow-[0_0_6px_rgba(196,64,64,0.4)]`
- Anchor ring: `absolute inset-[-4px] rounded-full border border-[#c44040]/40 animate-ping`
- Plane grid: `bg-[linear-gradient(rgba(64,192,64,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(64,192,64,0.12)_1px,transparent_1px)] bg-[size:50px_50px]`
- Plane boundary: `border border-[#40c040]/30 rounded-lg`
- Grid fade mask: `mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%)`
- Face mesh stroke: SVG `stroke="#ffffff" stroke-opacity="0.25" stroke-width="0.5" fill="none"`
- Face mesh fill: SVG `fill="rgba(64,160,224,0.03)"`
- Portal frame: `border-[3px] border-[#40e0e0] rounded-2xl shadow-[0_0_30px_rgba(64,224,224,0.2)]`
- Portal label: `text-xs text-[#40e0e0] font-medium tracking-wider uppercase`
- Occlusion blend: `mix-blend-mode: normal` with depth buffer z-ordering
- Light indicator bar: `w-24 h-1.5 rounded-full bg-white/10`
- Light indicator fill: `bg-gradient-to-r from-[#40a0e0]/60 via-[#ffffff]/80 to-[#40a0e0]/60`
- HUD container: `absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5`
- AR interactive accent: `text-[#40a0e0]`
- Anchor label text: `text-xs text-white/70 font-medium`
- Camera text shadow: `[text-shadow:0_1px_4px_rgba(0,0,0,0.5)]`
- Camera backing surface: `bg-black/40 backdrop-blur-sm rounded px-2 py-0.5`
- Tracking lost indicator: `text-[#c44040] text-sm font-semibold`
- Place animation: requires custom `@keyframes place-in` and `@keyframes shimmer` in CSS.

## Quality Checklist (must pass)

- Every AR element has a spatial anchor (surface, object, face, screen, or world origin).
- Plane detection grid is visible when scanning, with edge fade and a subtle pulse during active detection.
- AR label tags have white/translucent backgrounds for readability over any camera feed.
- Object occlusion is active: digital objects are hidden behind real-world objects at overlap points.
- Light estimation adjusts AR element brightness to match real-world ambient light.
- Face mesh wireframe renders with thin, subtle strokes and smooth vertex tracking.
- Portal windows have visible frames with depth shadow and edge shimmer effects.
- World anchor pins are persistent and handle drift with smooth re-alignment, not hard jumps.
- All text over camera feed has a text shadow or backing surface for contrast.
- Color palette is consistent: blue for UI, red for anchors, green for planes, cyan for portals.
- Anchor markers are visually distinct (red) from interactive elements (blue) and surfaces (green).
- HUD elements auto-hide when stable and reappear on significant state change.
- Animations are smooth and grounded: placement uses ease-out, tracking uses no perceptible delay.
- `prefers-reduced-motion` disables ping animations, shimmer effects, and grid pulses.
- Focus indicators are visible over the variable camera background.

## Anti-Patterns

- Floating AR elements without an anchor -- content that drifts or snaps to screen center when the device moves breaks immersion.
- Opaque white label backgrounds that completely block the camera feed -- AR tags must be at least 90% opacity but still slightly translucent.
- Rendering AR content on top of occluding real objects -- a floating cube behind a real table must not be visible through the table.
- Using thin font weights (`font-light`) for text directly over camera feed -- light text vanishes against busy backgrounds.
- Hard jumps when anchors drift and re-correct -- always use smooth transition animations for re-alignment.
- Making plane detection grid fully opaque or high-contrast -- the grid is informational, not decorative; it should be barely visible.
- Portal windows without visible frames -- without a frame, the user cannot tell where real ends and virtual begins.
- Ignoring light estimation -- AR objects with static lighting look pasted-on rather than grounded in the scene.
- Using the same color for anchor points and interactive elements -- anchors are structural (red), interactive elements are actionable (blue).
- Large HUD elements that cover significant camera view area -- AR HUD should be minimal, corner-positioned, and auto-hiding.
- No fallback when occlusion data is unavailable -- always degrade gracefully with reduced opacity instead of missing occlusion.
- Face mesh wireframe too thick or too opaque -- mesh is diagnostic and decorative, not the main feature; it should be subtle.
- Anchor lost states with no recovery path -- always provide a "re-anchor" or "rescan" action.
- Placing AR content at distances below 0.3m from the virtual camera -- too close causes discomfort and z-fighting artifacts.
- Using `z-index` layering tricks instead of proper AR depth ordering -- AR z-order must be based on world-space distance, not DOM order.

## Accessibility Considerations

- AR interfaces must provide non-visual feedback for all anchor states: haptic feedback for anchor placed, audio chime for anchor lost, audio cue for surface detected.
- `prefers-reduced-motion`: disable grid scan pulse, anchor ping animation, portal edge shimmer, face mesh fade-in stagger, and placement scale animation. Replace with static states.
- AR label tags must meet 4.5:1 contrast ratio against any camera background. The white translucent background with text shadow should ensure this, but verify against dark and light backgrounds.
- Portal windows must have a visible frame border (not just the virtual content edge) for users who may have difficulty perceiving depth differences.
- Face mesh must have an option to disable -- some users find wireframe overlays on faces distressing or invasive.
- All interactive AR elements (tap targets, buttons, anchors) must be at least 48x48px for comfortable interaction.
- Screen reader support: all AR labels and HUD text must be exposed as accessible text even when the visual AR layer is not rendered.
- Provide a "2D mode" fallback where AR content is displayed as a flat overlay without spatial anchoring for users who cannot interact with AR spatial interfaces.
- Guardian-style warnings for AR content placed at unsafe distances from the user (too close to face or too far to interact with).
- Audio descriptions for AR environment state: "Surface detected ahead," "Object placed on table," "Anchor lost -- please rescanning."
- High-contrast mode: increase label background opacity to `bg-[#ffffff]/95`, boost text to `font-semibold`, increase anchor ring thickness.
- Ensure AR overlays do not obscure critical device UI (status bar, navigation controls) unless explicitly in full-screen AR mode.
- Provide session duration reminders -- extended AR use can cause eye strain and fatigue. Include break suggestions after 20-30 minutes of active AR session.
