---
name: clockwork-automaton-ui
description: Build clockwork automaton UI components (exposed gears, spring coil, copper body, wind-up key, cam mechanism, pendulum swing, mechanical eye) with intricate gear systems, copper mechanical parts, and the elegant engineering of clockwork automatons. Trigger this skill when the user asks for clockwork design, automaton UI, steampunk mechanical interface, gear system layout, copper mechanism panels, wind-up key components, or clockwork engineering visuals.
---

# Clockwork Automaton UI

Use this skill to design and implement mechanically precise interfaces inspired by clockwork automatons: exposed interlocking gears, tension spring coils, articulated copper bodies, ornate wind-up keys, rotating cam mechanisms, pendulum swing animations, and mechanical eye lens elements — all rendered with the material weight of copper, brass, and steel.

## Non-Negotiable Foundations

- Clockwork Automaton UI simulates mechanical clockwork: visible gears with teeth, spring coils under tension, articulated copper body plates, and precision-fitted components.
- Materials are physical and weighted: copper has a warm metallic sheen, brass is golden, steel is cool gray, spring silver is bright and taut.
- Every gear must have visible TEETH — not circles, but toothed wheels with evenly spaced cogs around the circumference.
- Shadows are mechanical: components cast shadows that suggest physical depth and layered construction (gears behind plates, springs under housings).
- The palette is metallic: copper, brass, steel gray, spring silver, with mechanism dark as the deep background representing the interior of the clockwork housing.
- Eye lens elements use a contrasting cool blue to break the warm metallic palette and draw attention.
- Movement is the core narrative: gears turn, springs coil and uncoil, pendulums swing, cams rotate — the UI should feel alive with mechanical motion.
- Everything should feel handcrafted, precise, and engineered — like the interior of a Swiss watch scaled up to interface size.

## Core Material Recipes

### 1) Exposed Gear

Toothed wheel with evenly spaced cogs around its circumference, rendered as SVG with precise geometry.

```html
<svg viewBox="0 0 100 100" class="w-24 h-24">
  <g fill="none" stroke="#6a6a6a" stroke-width="1">
    <!-- Gear body -->
    <circle cx="50" cy="50" r="30" fill="#6a6a6a" opacity="0.15" stroke="#6a6a6a" stroke-width="1.5"/>
    <!-- Gear teeth - 12 teeth evenly spaced -->
    <g stroke="#6a6a6a" stroke-width="1.2">
      <line x1="50" y1="12" x2="50" y2="20"/>
      <line x1="69" y1="16" x2="65" y2="23"/>
      <line x1="83" y1="31" x2="77" y2="35"/>
      <line x1="88" y1="50" x2="80" y2="50"/>
      <line x1="83" y1="69" x2="77" y2="65"/>
      <line x1="69" y1="84" x2="65" y2="77"/>
      <line x1="50" y1="88" x2="50" y2="80"/>
      <line x1="31" y1="84" x2="35" y2="77"/>
      <line x1="17" y1="69" x2="23" y2="65"/>
      <line x1="12" y1="50" x2="20" y2="50"/>
      <line x1="17" y1="31" x2="23" y2="35"/>
      <line x1="31" y1="16" x2="35" y2="23"/>
    </g>
    <!-- Hub -->
    <circle cx="50" cy="50" r="8" fill="#b87333" opacity="0.6" stroke="#b87333" stroke-width="1"/>
    <!-- Axle dot -->
    <circle cx="50" cy="50" r="2.5" fill="#1a1a1a"/>
    <!-- Spokes -->
    <line x1="50" y1="42" x2="50" y2="20" stroke="#6a6a6a" stroke-width="0.6" opacity="0.5"/>
    <line x1="58" y1="50" x2="80" y2="50" stroke="#6a6a6a" stroke-width="0.6" opacity="0.5"/>
    <line x1="50" y1="58" x2="50" y2="80" stroke="#6a6a6a" stroke-width="0.6" opacity="0.5"/>
    <line x1="42" y1="50" x2="20" y2="50" stroke="#6a6a6a" stroke-width="0.6" opacity="0.5"/>
  </g>
</svg>
```

- Teeth are rectangular protrusions evenly distributed around the gear circumference (12 teeth minimum for visual clarity).
- Hub is copper-colored at center with a dark axle dot.
- Spokes radiate from hub to gear body at 90-degree intervals.
- Gear body is semi-transparent steel gray, suggesting a real metal disc.

### 2) Interlocking Gear Pair

Two gears of different sizes meshing together, with teeth appearing to interlock.

- Large gear: `w-24 h-24` with 16 teeth.
- Small gear: `w-14 h-14` with 10 teeth, positioned so teeth mesh with the large gear.
- Positioning: small gear offset to the right and slightly below, teeth touching.
- Animation: both gears rotate in opposite directions, synchronized so teeth remain meshed.
- CSS: `@keyframes gear-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` with the large gear at 8s duration and small gear at 5s (proportional to tooth count).

### 3) Spring Coil

Spiral tension spring rendered as an SVG path suggesting wound metal under tension.

```html
<svg viewBox="0 0 60 80" class="w-12 h-16">
  <g fill="none" stroke="#a0a0a0" stroke-width="1.5" stroke-linecap="round">
    <!-- Coil loops -->
    <path d="M15,10 Q45,15 45,25 Q45,35 15,40 Q-15,45 -15,55 Q-15,65 15,70"/>
    <path d="M15,10 Q45,15 45,25 Q45,35 15,40 Q-15,45 -15,55 Q-15,65 15,70"
          stroke="#c4a043" stroke-width="1" opacity="0.4"/>
    <!-- End hooks -->
    <line x1="15" y1="10" x2="15" y2="5" stroke="#a0a0a0" stroke-width="2"/>
    <line x1="15" y1="70" x2="15" y2="75" stroke="#a0a0a0" stroke-width="2"/>
    <!-- Tension indicator -->
    <circle cx="15" cy="5" r="2" fill="#c4a043"/>
    <circle cx="15" cy="75" r="2" fill="#c4a043"/>
  </g>
</svg>
```

- Spring silver (`#a0a0a0`) with brass highlights on inner coil faces.
- End hooks are short straight lines with small brass-filled anchor dots.
- Coil shape is a zigzag path suggesting compressed spiral loops.
- Width suggests compression state: narrower = more tension.

### 4) Copper Body Plate

Articulated copper plate suggesting the mechanical torso or housing of the automaton.

- Surface: `bg-gradient-to-br from-[#b87333] via-[#9a6a3a] to-[#7a5a2a]` for a warm copper gradient.
- Panel lines: thin dashed lines (`stroke="#1a1a1a" stroke-width="0.4" stroke-dasharray="4,3"`) suggesting articulated plate seams.
- Rivets: small circles at panel corners, `bg-[#c4a043] rounded-full w-2 h-2` with a subtle inner shadow.
- Edge bevel: `shadow-[inset_1px_1px_0_rgba(255,255,255,0.15),inset_-1px_-1px_0_rgba(0,0,0,0.2)]` for metallic edge depth.
- Border: `border border-[#7a5a2a]` for plate edge definition.
- Mounting holes: small dark circles at corners suggesting screw points.

### 5) Wind-Up Key

Ornate butterfly-shaped key used to "power" the automaton interface.

```html
<svg viewBox="0 0 80 100" class="w-16 h-20">
  <g fill="none" stroke="#c4a043" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Key shaft -->
    <rect x="36" y="50" width="8" height="40" rx="1" fill="#b87333" stroke="#7a5a2a"/>
    <!-- Key bit (teeth) -->
    <path d="M36,85 L28,85 L28,90 L32,90 L32,95 L36,95" fill="#b87333" stroke="#7a5a2a"/>
    <path d="M44,85 L52,85 L52,90 L48,90 L48,95 L44,95" fill="#b87333" stroke="#7a5a2a"/>
    <!-- Butterfly handle -->
    <path d="M40,50 Q20,30 15,15 Q15,5 30,10 Q40,15 40,30 Z" fill="#c4a043" opacity="0.85" stroke="#7a5a2a" stroke-width="1"/>
    <path d="M40,50 Q60,30 65,15 Q65,5 50,10 Q40,15 40,30 Z" fill="#c4a043" opacity="0.85" stroke="#7a5a2a" stroke-width="1"/>
    <!-- Decorative veins on butterfly wings -->
    <line x1="40" y1="30" x2="22" y2="15" stroke="#7a5a2a" stroke-width="0.5" stroke-dasharray="2,2"/>
    <line x1="40" y1="30" x2="28" y2="22" stroke="#7a5a2a" stroke-width="0.5" stroke-dasharray="2,2"/>
    <line x1="40" y1="30" x2="58" y2="15" stroke="#7a5a2a" stroke-width="0.5" stroke-dasharray="2,2"/>
    <line x1="40" y1="30" x2="52" y2="22" stroke="#7a5a2a" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Center gem -->
    <circle cx="40" cy="30" r="3" fill="#1a1a1a" stroke="#c4a043" stroke-width="1"/>
  </g>
</svg>
```

- Butterfly-shaped handle with two symmetrical wing loops.
- Straight shaft with decorative bit (tooth pattern) at the bottom.
- Brass/gold coloring with darker brass outlines.
- Small dark gem or rivet at the butterfly center.
- The key is a power metaphor: clicking it "winds up" the interface (triggers animations).

### 6) Cam Mechanism

Rotating eccentric shape that converts rotary motion into linear motion.

```html
<svg viewBox="0 0 80 80" class="w-16 h-16">
  <g fill="none" stroke="#6a6a6a" stroke-width="1">
    <!-- Cam profile - egg/eccentric shape -->
    <path d="M40,10 C60,10 70,25 70,40 C70,55 60,70 40,70 C20,70 15,55 15,40 C15,25 25,12 40,10 Z"
          fill="#6a6a6a" opacity="0.12" stroke="#6a6a6a" stroke-width="1.2"/>
    <!-- Cam lobe -->
    <path d="M40,10 C55,10 62,20 62,35" fill="none" stroke="#b87333" stroke-width="1.5"/>
    <!-- Follower arm -->
    <line x1="40" y1="5" x2="40" y2="-5" stroke="#a0a0a0" stroke-width="2" stroke-linecap="round"/>
    <circle cx="40" cy="5" r="3" fill="#a0a0a0" stroke="#6a6a6a" stroke-width="0.8"/>
    <!-- Center axle -->
    <circle cx="40" cy="40" r="5" fill="#b87333" stroke="#7a5a2a" stroke-width="1"/>
    <circle cx="40" cy="40" r="2" fill="#1a1a1a"/>
    <!-- Rotation indicator -->
    <path d="M40,40 L40,18" stroke="#1a1a1a" stroke-width="0.6" opacity="0.4" stroke-dasharray="2,2"/>
  </g>
</svg>
```

- Eccentric (egg-shaped) cam profile with a visible lobe.
- Follower arm extends from the top, riding the cam surface.
- Center axle in copper.
- The cam rotates, and the follower moves up and down — animate with CSS transform rotation.

### 7) Pendulum Swing

Pendulum arm with a weighted bob swinging back and forth.

```html
<svg viewBox="0 0 100 140" class="w-20 h-28">
  <g fill="none" stroke-width="1">
    <!-- Pivot point -->
    <circle cx="50" cy="10" r="4" fill="#b87333" stroke="#7a5a2a" stroke-width="1"/>
    <circle cx="50" cy="10" r="1.5" fill="#1a1a1a"/>
    <!-- Arm -->
    <line x1="50" y1="14" x2="50" y2="110" stroke="#a0a0a0" stroke-width="1.5"/>
    <!-- Bob - weighted disk -->
    <ellipse cx="50" cy="115" rx="16" ry="12" fill="#b87333" stroke="#7a5a2a" stroke-width="1"/>
    <ellipse cx="50" cy="115" rx="10" ry="7" fill="none" stroke="#c4a043" stroke-width="0.5" stroke-dasharray="2,2"/>
    <!-- Bob center rivet -->
    <circle cx="50" cy="115" r="3" fill="#c4a043" stroke="#7a5a2a" stroke-width="0.5"/>
    <!-- Swing arc (dashed) -->
    <path d="M20,120 Q50,130 80,120" stroke="#6a6a6a" stroke-width="0.5" stroke-dasharray="3,3" opacity="0.4"/>
  </g>
</svg>
```

- Pivot at top with copper mounting plate.
- Thin steel arm descending to a weighted copper bob.
- Bob is an ellipse (wider than tall) with decorative concentric rings.
- Dashed arc line below bob shows the swing path.
- Animation: `@keyframes pendulum { 0%, 100% { transform: rotate(-15deg); } 50% { transform: rotate(15deg); } transform-origin: top center; animation: pendulum 3s ease-in-out infinite; }`.

### 8) Mechanical Eye

Lens and iris mechanism suggesting a watchful automaton eye.

```html
<svg viewBox="0 0 100 60" class="w-24 h-14">
  <g fill="none" stroke-width="1">
    <!-- Outer housing -->
    <ellipse cx="50" cy="30" rx="45" ry="25" fill="#1a1a1a" stroke="#6a6a6a" stroke-width="1.5"/>
    <!-- Lens ring -->
    <ellipse cx="50" cy="30" rx="35" ry="20" fill="#40a0c0" opacity="0.2" stroke="#40a0c0" stroke-width="1.2"/>
    <!-- Iris - concentric rings -->
    <ellipse cx="50" cy="30" rx="22" ry="14" fill="#40a0c0" opacity="0.4" stroke="#40a0c0" stroke-width="0.8"/>
    <ellipse cx="50" cy="30" rx="15" ry="10" fill="#40a0c0" opacity="0.6" stroke="#40a0c0" stroke-width="0.6"/>
    <!-- Iris mechanical details - radial lines -->
    <g stroke="#40a0c0" stroke-width="0.4" opacity="0.5">
      <line x1="50" y1="16" x2="50" y2="20"/>
      <line x1="62" y1="20" x2="59" y2="23"/>
      <line x1="68" y1="30" x2="65" y2="30"/>
      <line x1="62" y1="40" x2="59" y2="37"/>
      <line x1="50" y1="44" x2="50" y2="40"/>
      <line x1="38" y1="40" x2="41" y2="37"/>
      <line x1="32" y1="30" x2="35" y2="30"/>
      <line x1="38" y1="20" x2="41" y2="23"/>
    </g>
    <!-- Pupil -->
    <circle cx="50" cy="30" r="6" fill="#1a1a1a" stroke="#40a0c0" stroke-width="0.8"/>
    <!-- Glint -->
    <circle cx="47" cy="27" r="2" fill="white" opacity="0.6"/>
    <!-- Mounting brackets -->
    <rect x="2" y="22" width="8" height="16" rx="2" fill="#6a6a6a" stroke="#1a1a1a" stroke-width="0.5"/>
    <rect x="90" y="22" width="8" height="16" rx="2" fill="#6a6a6a" stroke="#1a1a1a" stroke-width="0.5"/>
    <circle cx="6" cy="30" r="1.5" fill="#1a1a1a"/>
    <circle cx="94" cy="30" r="1.5" fill="#1a1a1a"/>
  </g>
</svg>
```

- Oval housing in mechanism dark with steel-gray mounting brackets.
- Lens area is a cool blue (`#40a0c0`) with concentric iris rings.
- Radial mechanical iris blades radiate from the pupil.
- Dark pupil with a white glint highlight.
- Mounting brackets on left and right with rivet dots.
- Animation: iris dilates/contracts on hover (`scale` transform on iris rings).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Copper | `#b87333` | Primary surface, body plates, key handle, hub centers |
| Brass | `#c4a043` | Accents, decorative details, butterfly key wings, rivets |
| Gear Steel | `#6a6a6a` | Gear bodies, mechanical structural elements, housing |
| Spring Silver | `#a0a0a0` | Spring coils, pendulum arm, bright metallic highlights |
| Copper Body | `#9a6a3a` | Copper gradient midpoint, body plate mid-tone |
| Eye Lens | `#40a0c0` | Mechanical eye iris, lens accents, cool contrast color |
| Key Gold | `#c4a043` | Wind-up key, decorative gold elements (same as brass) |
| Mechanism Dark | `#1a1a1a` | Deep background, axle dots, pupil, gear outlines |
| Warm Black | `#2a2218` | Card backgrounds, panel interiors (dark with warm undertone) |

Rules: Copper and brass dominate as the warm metallic base. Gear steel provides cool structural contrast. Spring silver appears on functional elements (springs, arms). Eye lens blue is the single cool accent color — used only on the mechanical eye and lens elements to create a focal point of "life" in the machine. Mechanism dark is the deep interior background. Maximum two metallic tones per component (copper + brass, or steel + silver).

## Typography Recommendations

- **Display:** JetBrains Mono, IBM Plex Mono, or Space Grotesk (mechanical precision, monospaced or geometric).
- **Body:** Inter or IBM Plex Sans at `font-normal` for readability.
- **Labels:** `font-mono text-xs tracking-widest uppercase` for mechanical labels, gear ratios, and component identifiers.
- **Numerals:** Monospaced digits for gear tooth counts, measurements, and timing values.
- Typography should feel engineered and precise — like engraved metal plates.
- Consider `font-variant-numeric: tabular-nums` for any numerical displays.

## Component Architecture Pattern

- All mechanical shapes are SVG-based (gears require precise tooth geometry, springs need path curves, eyes need concentric ellipses).
- Copper body panels use CSS gradients for metallic sheen: `bg-gradient-to-br from-[#b87333] via-[#9a6a3a] to-[#7a5a2a]`.
- Gear animations use CSS `@keyframes` with `transform: rotate()` — duration proportional to tooth count for realistic meshing.
- Panel construction: copper body plate as outer container, mechanism dark as interior background, gear/spring/eye elements positioned inside.
- Shadow language: `shadow-[2px_4px_8px_rgba(0,0,0,0.4)]` for heavy mechanical depth (deeper and darker than paper-based UIs).
- Rivet pattern: `bg-[#c4a043] rounded-full w-2 h-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]` for metallic rivet detail.
- Border style: `border border-[#7a5a2a]` for copper plate edges, `border border-[#4a4a4a]` for steel components.

## Interaction Rules

- Gear rotation: clicking a gear toggles its spin animation (engaged/disengaged).
- Wind-up key: click triggers a "wind-up" animation — key rotates 360 degrees, then all connected gears begin spinning.
- Pendulum: continuous swing animation that pauses on hover (suggesting the mechanism is being held).
- Spring coil: compresses on hover (`scale-y-80`) and expands on click (`scale-y-100`) with spring-like easing.
- Mechanical eye: iris dilates on hover (pupil shrinks, iris rings expand), suggesting focus/alert.
- Cam mechanism: rotates continuously, follower arm pumps up and down — pause on hover.
- All animations use `ease-in-out` or cubic-bezier timing for mechanical smoothness (never spring or bounce easing).
- Transition durations: gears 0.5-1s, pendulum 1.5-3s cycle, spring 0.3s, eye 0.4s.

## Reusable Tailwind Tokens

- Copper plate: `bg-gradient-to-br from-[#b87333] via-[#9a6a3a] to-[#7a5a2a] border border-[#7a5a2a] shadow-[2px_4px_8px_rgba(0,0,0,0.4)]`.
- Steel plate: `bg-[#6a6a6a] border border-[#4a4a4a] shadow-[1px_2px_4px_rgba(0,0,0,0.3)]`.
- Mechanism dark interior: `bg-[#1a1a1a] border border-[#3a3a3a]`.
- Warm dark panel: `bg-[#2a2218] border border-[#7a5a2a] shadow-[2px_4px_8px_rgba(0,0,0,0.5)]`.
- Rivet: `bg-[#c4a043] rounded-full w-2 h-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.3)]`.
- Gear animation: `animate-[gear-spin_8s_linear_infinite]` with `@keyframes gear-spin { to { transform: rotate(360deg); } }`.
- Pendulum animation: `animate-[pendulum_3s_ease-in-out_infinite]` with `@keyframes pendulum { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }`.
- Spring hover: `hover:scale-y-80 transition-transform duration-300 ease-in-out origin-bottom`.
- Eye hover: iris group scales up on parent hover with `transition-transform duration-400`.
- Metallic border: `border border-[#7a5a2a]` for copper, `border border-[#4a4a4a]` for steel.
- Panel inner shadow: `shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]`.
- Mechanical label: `font-mono text-[10px] tracking-[0.2em] uppercase text-[#a0a0a0]`.

## Quality Checklist

- At least one gear with visible teeth (not just a circle — actual cog protrusions).
- At least one copper-colored element with gradient sheen.
- Gear teeth interlock correctly between meshing gear pairs (teeth of one fit gaps of the other).
- Mechanical animations are smooth and continuous (gears rotate, pendulums swing).
- Color palette is metallic: copper, brass, steel, silver — with eye lens blue as the single cool accent.
- Deep dark backgrounds (`#1a1a1a` or `#2a2218`) suggest the interior of a clockwork housing.
- Rivets and mounting details appear on copper body panels.
- Typography is monospaced or geometric sans-serif with mechanical precision.
- Shadows suggest physical weight and depth (deeper and darker than paper-based UIs).
- Spring elements show tension (compressed or wound state).
- Wind-up key is present and recognizable as a butterfly-shaped clockwork key.
- The overall aesthetic reads as a precision mechanical clockwork device.
- All animations use mechanical easing (linear for gears, ease-in-out for pendulums).
- Eye lens element provides a focal point of "life" in the mechanism.

## Anti-Patterns

- Soft or pastel colors (clockwork is metallic and weighted, not airy).
- Smooth rounded shapes without mechanical detail (every gear must have teeth, every plate must have rivets).
- Fast or bouncy animations (clockwork moves with deliberate, mechanical timing).
- Light or white backgrounds (the automaton interior is dark, the exterior is copper/brass).
- Missing gear teeth (a circle is not a gear — teeth are mandatory).
- Spring elements without visible coils (zigzag paths or spiral shapes required).
- CSS-only gradients without SVG structural detail (metallic surfaces need both gradient and mechanical marks).
- Flat untextured surfaces on copper elements (need gradient, rivets, and panel lines).
- Cool color dominance (copper and brass are warm — steel and silver provide contrast, blue is rare).
- Emoji or decorative non-mechanical icons (all visuals are SVG mechanical components).
- Rounded clip-paths (clockwork is constructed from flat plates with straight edges and riveted joints).
- Transparent or glass effects (clockwork is opaque metal, not glass).

## Accessibility Considerations

- All SVG mechanical elements include `role="img"` and `<title>` elements for screen readers.
- Gear rotation animations respect `prefers-reduced-motion` — when reduced motion is preferred, gears are static and pendulums are stationary.
- Color contrast: text on mechanism dark backgrounds must meet WCAG AA — use `#a0a0a0` or brighter on `#1a1a1a` or `#2a2218`.
- Eye lens blue (`#40a0c0`) is tested against dark backgrounds for sufficient contrast ratio (minimum 4.5:1).
- Interactive gear elements maintain standard focus indicators: `focus-visible:outline-2 focus-visible:outline-[#c4a043] focus-visible:outline-offset-2`.
- Decorative SVG elements (gear teeth, spring coils, panel rivets) are marked `aria-hidden="true"`.
- Wind-up key interactive element has `role="button"` and `aria-label="Wind up mechanism"`.
- Pendulum swing animation includes `aria-live="polite"` region announcing state changes.
- Mechanical labels use `aria-label` on containers for context (e.g., "Gear assembly", "Spring tension mechanism").
- All interactive mechanical elements support keyboard activation (Enter and Space).
- Gear mesh pairs include `aria-label` describing the gear relationship (e.g., "Primary drive gear connected to secondary gear").
