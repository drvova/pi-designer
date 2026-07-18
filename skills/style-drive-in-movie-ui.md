---
name: drive-in-movie-ui
description: Build drive-in movie UI components (outdoor cinema under stars, massive screen tower, car speakers on poles, concession stand glow, intermission countdown, rusted neon marquee, gravel parking lot, foggy night atmosphere) with starry night backgrounds, flickering projection screen light, and the communal Americana experience of watching movies from your car. Trigger this skill when the user asks for drive-in, drive-in movie, outdoor cinema, intermission countdown, car speaker, concession stand, starry night cinema, marquee letter board, neon marquee, Americana night, retro movie theater, or communal movie-watching interfaces.
---

# Drive-In Movie UI

Use this skill to design and implement authentic drive-in movie theater aesthetics: massive screen tower silhouettes against a starry night sky, hanging car speakers on poles, concession stand neon glow, intermission countdown clocks, rusted marquee letter boards, foggy atmospheric overlays, car silhouettes with headlights, and the communal Americana experience of watching movies from your car under the open sky.

## Non-Negotiable Foundations

- The background is ALWAYS a deep night sky (#0a0a2a) filled with stars. This establishes the outdoor setting immediately.
- A massive screen tower silhouette dominates the layout — either as a hero element or background feature. The screen emits a soft, flickering white glow (#e0e0d0) simulating projected film.
- Typography uses marquee letter-board fonts for headings and condensed sans-serif or Art Deco-style fonts for body text. Letters feel like physical objects on a changeable letter board.
- Colors evoke a foggy night: deep navy sky, warm projection white, neon red and yellow for signage, warm orange for concession glow, rust brown for aged metal, dark green for distant grass.
- Neon elements have a real glow effect: `text-shadow` with multiple layered shadows in the neon color, plus a subtle outer halo. Neon flickers occasionally to feel alive.
- The atmosphere includes a foggy/misty overlay that softens the bottom of the layout, creating depth and a sense of cool night air.
- Interactions feel nostalgic and unhurried: countdown timers tick with authority, neon signs flicker, the screen glow pulses subtly like real film projection.
- Car silhouettes with headlights provide grounding elements and can serve as navigation anchors or content containers.
- Sound cues (optional): projector reel clicking, car speaker crackle, crickets chirping, distant car horn, concession pop.

## Core Material Recipes

### 1) Starry Night Background

The foundational layer: a deep navy sky filled with twinkling stars at varying sizes.

```html
<div class="bg-[#0a0a2a] relative overflow-hidden">
  <!-- Star field using multiple small dots -->
  <div class="absolute inset-0">
    <div class="absolute top-[5%] left-[10%] w-1 h-1 bg-white rounded-full opacity-80 animate-twinkle"></div>
    <div class="absolute top-[8%] left-[25%] w-[2px] h-[2px] bg-white rounded-full opacity-60"></div>
    <div class="absolute top-[3%] left-[45%] w-1 h-1 bg-[#e0e0d0] rounded-full opacity-90 animate-twinkle-slow"></div>
    <div class="absolute top-[12%] left-[70%] w-[2px] h-[2px] bg-white rounded-full opacity-50"></div>
    <div class="absolute top-[15%] left-[85%] w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"></div>
    <div class="absolute top-[6%] left-[60%] w-[2px] h-[2px] bg-[#e0e0d0] rounded-full opacity-40"></div>
    <!-- Generate dozens more across the sky -->
  </div>
  <!-- Content sits above the star field -->
  <div class="relative z-10"><!-- Screen, marquee, content --></div>
</div>
```

Star twinkle animation:

```css
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
.animate-twinkle-slow { animation: twinkle 5s ease-in-out infinite; }
```

### 2) Screen Tower Silhouette

The massive projection screen that anchors the layout — a towering rectangle with a glowing screen face.

```html
<div class="relative w-full max-w-3xl mx-auto">
  <!-- Screen support structure -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-full">
    <!-- Steel lattice legs -->
    <div class="absolute bottom-0 left-[15%] w-2 h-full bg-[#1a1a2a]"></div>
    <div class="absolute bottom-0 right-[15%] w-2 h-full bg-[#1a1a2a]"></div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-full bg-[#1a1a2a]"></div>
  </div>
  <!-- Screen face with film glow -->
  <div class="relative aspect-video bg-[#e0e0d0] rounded-sm overflow-hidden animate-screen-flicker"
       style="box-shadow: 0 0 80px 20px rgba(224,224,208,0.3), 0 0 160px 40px rgba(224,224,208,0.15);">
    <div class="absolute inset-0 bg-gradient-to-b from-[#e0e0d0] via-[#d0d0c0] to-[#c0c0b0]"></div>
    <!-- Film content area -->
    <div class="absolute inset-2 border border-[#8a5a2a] p-4 text-[#0a0a2a]">
      <!-- Movie content here -->
    </div>
  </div>
</div>
```

Screen flicker animation:

```css
@keyframes screen-flicker {
  0%, 100% { opacity: 1; }
  47% { opacity: 0.96; }
  48% { opacity: 0.88; }
  49% { opacity: 1; }
  72% { opacity: 0.95; }
  73% { opacity: 1; }
}
.animate-screen-flicker { animation: screen-flicker 8s ease-in-out infinite; }
```

### 3) Intermission Countdown Clock

The iconic "LET'S ALL GO TO THE LOBBY" intermission countdown with animated clock and dancing snacks.

```html
<div class="bg-[#0a0a2a] border-4 border-[#ffcc00] rounded-lg p-6 text-center max-w-md mx-auto">
  <div class="text-[#ffcc00] font-bold text-2xl uppercase tracking-widest mb-4"
       style="font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;">
    Intermission
  </div>
  <!-- Countdown clock face -->
  <div class="relative w-32 h-32 mx-auto mb-4">
    <div class="absolute inset-0 rounded-full border-8 border-[#ff2a2a]"
         style="box-shadow: 0 0 20px rgba(255,42,42,0.5);"></div>
    <!-- Clock slice (rotating pie) -->
    <div class="absolute inset-0 rounded-full overflow-hidden">
      <div class="absolute inset-0 bg-[#ff2a2a] animate-clock-slice"
           style="clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%);">
      </div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-white font-mono text-3xl font-bold" id="countdown">9:45</span>
    </div>
  </div>
  <div class="text-[#ff8c42] uppercase text-sm tracking-wider mb-2"
       style="font-family: 'Bebas Neue', sans-serif;">
    Let's All Go to the Lobby
  </div>
  <div class="text-[#e0e0d0] text-xs uppercase tracking-wider opacity-70">
    To Have Ourselves a Snack
  </div>
</div>
```

### 4) Hanging Car Speaker on Pole

An SVG car speaker hanging from a pole — the classic drive-in audio delivery method.

```html
<svg viewBox="0 0 100 200" class="w-16 h-32" role="img" aria-label="Drive-in car speaker on pole">
  <!-- Pole -->
  <rect x="47" y="0" width="6" height="120" fill="#8a5a2a" />
  <!-- Pole base -->
  <rect x="35" y="115" width="30" height="8" fill="#5a3a1a" />
  <!-- Hanging hook/arm -->
  <path d="M 40 120 Q 30 135 28 150" stroke="#8a5a2a" stroke-width="4" fill="none" />
  <!-- Speaker body -->
  <rect x="15" y="145" width="40" height="35" rx="6" fill="#5a3a1a" stroke="#3a2a1a" stroke-width="2" />
  <!-- Speaker grill -->
  <circle cx="35" cy="162" r="12" fill="#3a2a1a" />
  <circle cx="35" cy="162" r="9" fill="#2a1a0a" />
  <circle cx="35" cy="162" r="3" fill="#8a5a2a" />
  <!-- Volume knob -->
  <rect x="22" y="170" width="10" height="6" rx="2" fill="#8a5a2a" />
  <!-- Coiled wire to car -->
  <path d="M 55 165 Q 75 155 80 180" stroke="#3a2a1a" stroke-width="2" fill="none" stroke-dasharray="3,2" />
</svg>
```

### 5) Neon Marquee Sign

A glowing neon sign with flickering tubes — for the theater name or section headers.

```html
<div class="text-center py-4">
  <h1 class="text-5xl font-bold uppercase tracking-wider"
      style="font-family: 'Monoton', 'Bebas Neue', cursive;
             color: #ff2a2a;
             text-shadow: 0 0 5px #ff2a2a, 0 0 10px #ff2a2a, 0 0 20px #ff2a2a, 0 0 40px #ff0044, 0 0 80px #ff0044;">
    STARLIGHT
  </h1>
  <h2 class="text-3xl font-bold uppercase tracking-widest"
      style="font-family: 'Monoton', cursive;
             color: #ffcc00;
             text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 20px #ffaa00, 0 0 40px #ff8800;">
    DRIVE-IN
  </h2>
</div>
```

Neon flicker animation (for a tube that occasionally dims):

```css
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor);
  }
  20%, 24%, 55% {
    opacity: 0.7;
    filter: drop-shadow(0 0 2px currentColor);
  }
}
.animate-neon-flicker { animation: neon-flicker 4s linear infinite; }
```

### 6) Rusted Marquee Letter Board

A changeable letter board with individual plastic letters on a dark track — for movie listings or schedules.

```html
<div class="bg-[#0a0a2a] border-4 border-[#8a5a2a] p-4 max-w-2xl mx-auto rounded-sm">
  <div class="bg-[#1a1a3a] p-3 rounded-sm">
    <!-- Letter track rows -->
    <div class="bg-black border-y-2 border-[#2a2a4a] py-2 px-1 mb-2 flex items-center gap-[2px] overflow-hidden">
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">N</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">O</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">W</span>
      <span class="px-1 inline-block min-w-[0.6em]"></span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">S</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">H</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">O</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">W</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">I</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">N</span>
      <span class="bg-[#e0e0d0] text-[#0a0a2a] font-mono text-sm font-bold px-1 inline-block"
            style="font-family: 'Courier New', monospace; min-width: 0.6em; text-align: center;">G</span>
    </div>
  </div>
</div>
```

### 7) Concession Stand Glow

A warm, glowing panel representing the concession stand window at night.

```html
<div class="relative rounded-t-lg overflow-hidden max-w-sm mx-auto">
  <!-- Concession roof -->
  <div class="bg-[#8a5a2a] h-4 rounded-t-lg border-t-2 border-[#aa6a3a]"></div>
  <!-- Glowing window -->
  <div class="bg-gradient-to-b from-[#ff8c42] via-[#ff6a22] to-[#cc4400] p-4 border-2 border-[#8a5a2a]"
       style="box-shadow: inset 0 0 30px rgba(255,200,100,0.4), 0 0 40px rgba(255,140,66,0.3);">
    <div class="text-[#ffcc00] font-bold uppercase tracking-widest text-center text-sm"
         style="font-family: 'Bebas Neue', sans-serif; text-shadow: 0 0 10px rgba(255,204,0,0.6);">
      Concessions
    </div>
    <div class="mt-3 space-y-1 text-[#fff8e0] text-xs uppercase"
         style="font-family: 'Arial Narrow', sans-serif;">
      <div class="flex justify-between"><span>Popcorn ...........</span><span>$2.00</span></div>
      <div class="flex justify-between"><span>Hot Dogs .........</span><span>$1.50</span></div>
      <div class="flex justify-between"><span>Soda .............</span><span>$1.00</span></div>
      <div class="flex justify-between"><span>Candy ............</span><span>$0.75</span></div>
    </div>
  </div>
  <!-- Counter base -->
  <div class="bg-[#5a3a1a] h-3 border-b-2 border-[#3a2a0a]"></div>
</div>
```

### 8) Foggy Atmospheric Overlay

A bottom mist layer that softens the layout and creates night-depth.

```html
<!-- Fog overlay at bottom of container -->
<div class="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none z-20"
     style="background: linear-gradient(to top,
       rgba(10,10,42,0.8) 0%,
       rgba(20,20,60,0.4) 50%,
       transparent 100%);">
</div>
<!-- Animated fog drift -->
<div class="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none z-20 opacity-40 animate-fog-drift"
     style="background: radial-gradient(ellipse at 30% 100%, rgba(180,180,220,0.15), transparent 60%),
                         radial-gradient(ellipse at 70% 100%, rgba(180,180,220,0.1), transparent 60%);">
</div>
```

```css
@keyframes fog-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}
.animate-fog-drift { animation: fog-drift 15s ease-in-out infinite; }
```

### 9) Car Silhouette with Headlights

A grounding element — a car silhouette from behind with glowing taillights or from front with headlights.

```html
<svg viewBox="0 0 200 100" class="w-48 h-24" role="img" aria-label="Parked car silhouette">
  <!-- Headlight beams (semi-transparent cones) -->
  <path d="M 30 55 L 0 35 L 0 75 Z" fill="rgba(255,255,200,0.15)" />
  <path d="M 170 55 L 200 35 L 200 75 Z" fill="rgba(255,255,200,0.15)" />
  <!-- Car body -->
  <path d="M 30 70 Q 30 50 55 48 L 75 35 Q 100 30 125 35 L 145 48 Q 170 50 170 70 L 170 80 L 30 80 Z"
        fill="#0a0a1a" stroke="#1a1a2a" stroke-width="1" />
  <!-- Windows -->
  <path d="M 75 36 Q 100 33 125 36 L 138 48 L 62 48 Z" fill="#1a1a3a" opacity="0.6" />
  <!-- Headlights -->
  <circle cx="35" cy="60" r="4" fill="#ffffcc"
          style="filter: drop-shadow(0 0 6px #ffffaa);" />
  <circle cx="165" cy="60" r="4" fill="#ffffcc"
          style="filter: drop-shadow(0 0 6px #ffffaa);" />
  <!-- Taillights -->
  <circle cx="32" cy="68" r="3" fill="#ff2a2a"
          style="filter: drop-shadow(0 0 4px #ff2a2a);" />
  <circle cx="168" cy="68" r="3" fill="#ff2a2a"
          style="filter: drop-shadow(0 0 4px #ff2a2a);" />
</svg>
```

## Color Palette System

### Drive-In Movie Night Palette

| Color | Hex | Role |
|---|---|---|
| Night Sky Navy | `#0a0a2a` | Primary background, deep night sky |
| Midnight Blue | `#1a1a3a` | Secondary background, panels, windows |
| Screen White | `#e0e0d0` | Projection screen, letter board tiles, body text on dark |
| Neon Red | `#ff2a2a` | Neon signage, taillights, urgent accent |
| Neon Yellow | `#ffcc00` | Neon accent, intermission clock, highlights |
| Concession Warm | `#ff8c42` | Concession stand glow, warm accent, secondary neon |
| Rust | `#8a5a2a` | Metal structures, poles, marquee frame, aged elements |
| Dark Rust | `#5a3a1a` | Shadow on metal, base of structures |
| Grass Dark Green | `#1a3a1a` | Distant horizon, ground line, landscape |
| Warm White | `#fff8e0` | Concession menu text, soft light areas |
| Star White | `#ffffff` | Stars, brightest highlights, headlight glow |
| Faded Purple | `#3a2a4a` | Distant hills, atmospheric depth |

Rules: The night sky navy (#0a0a2a) is the primary canvas — everything sits on this deep background. Neon colors (#ff2a2a, #ffcc00) must have visible glow via `text-shadow` or `box-shadow` in the same hue. Concession warm (#ff8c42) creates the nostalgic warmth that contrasts with the cool night sky. Rust (#8a5a2a) provides the aged, weathered Americana feel for structural elements. No bright daylight colors — everything lives in the night.

## Typography Recommendations

| Font | Use Case |
|---|---|
| **Monoton** | Neon marquee headings, theater name, large display text |
| **Bebas Neue** | Subheadings, section labels, intermission text, condensed uppercase |
| **Courier New** | Marquee letter board tiles, schedule listings, mechanical text |
| **Arial Narrow** | Body text, menu items, condensed readable content |
| **Oswald** | Alternative condensed heading, ticket-style text |

Rules:
- Headings use neon marquee styling: large, uppercase, letter-spaced, with `text-shadow` glow effect in the neon color.
- Letter board text uses individual character tiles with light background (#e0e0d0) and dark text (#0a0a2a) — Courier New or monospace.
- Body text is condensed and readable: Arial Narrow or Oswald at small sizes (12-14px), white (#e0e0d0) or warm white (#fff8e0) on night backgrounds.
- Intermission text uses Bebas Neue or similar tall condensed font, uppercase, widely letter-spaced.
- Never use rounded, soft, or friendly fonts — the drive-in aesthetic is bold, condensed, and architectural.
- Neon heading colors must always be paired with a matching `text-shadow` glow: red neon gets red shadows, yellow neon gets yellow/orange shadows.

## Component Architecture Pattern

1. Night sky background (#0a0a2a) with star field overlay (twinkling dots at random positions).
2. Foggy atmospheric gradient at the bottom of the viewport (soft mist, animated drift).
3. Neon marquee sign at the top with flickering glow (theater name in red/yellow neon).
4. Massive screen tower silhouette as the hero element — screen face with flickering projection glow.
5. Movie content displayed ON the screen face area (the screen IS the content container).
6. Letter board marquee below the screen for movie listings or schedule.
7. Concession stand panel (warm glow, menu items, neon signage).
8. Intermission countdown clock for transitions or loading states.
9. Car silhouette elements at the bottom for grounding (headlights, taillights, speaker poles).
10. Hanging car speaker SVG elements as decorative anchors or audio control widgets.
11. Grass dark green (#1a3a1a) strip at the very bottom representing the ground/field.

## Interaction Rules

- Default state: night sky with stars, screen glowing softly, neon marquee lit, fog drifting.
- Hover on neon elements: glow intensifies slightly (increase `text-shadow` spread/brightness).
- Hover on letter board tiles: tile lifts slightly (`-translate-y-0.5`), subtle shadow appears.
- Screen content change: brief flicker animation (like a film reel change), content fades in over 0.3s.
- Intermission countdown: ticks down from a set time, clock slice rotates, color shifts from yellow to red as time runs low.
- Loading state: screen shows countdown clock or "COMING SOON" letter board text.
- Neon flicker: random intermittent dimming of neon elements (every 4-8 seconds, brief 0.2s dip).
- Star twinkling: continuous gentle opacity oscillation at varied speeds (3-5s per cycle, offset randomly).
- Fog drift: continuous slow horizontal drift (15s cycle, subtle 20px movement).
- Transitions: film-projector style — content changes feel like a reel cut, not a smooth fade.
- Sound cues (optional): projector reel click on screen change, speaker crackle on audio toggle, cricket ambiance.
- All animations must respect `prefers-reduced-motion` — disable flicker, twinkle, and fog drift; provide static state.

## Reusable Tailwind Tokens

- Night sky bg: `bg-[#0a0a2a]`
- Secondary panel bg: `bg-[#1a1a3a]`
- Screen face: `bg-[#e0e0d0]` with `box-shadow: 0 0 80px 20px rgba(224,224,208,0.3)`
- Screen flicker: `animate-screen-flicker` (custom keyframe, 8s)
- Neon red heading: `text-[#ff2a2a]` with `text-shadow: 0 0 5px #ff2a2a, 0 0 10px #ff2a2a, 0 0 20px #ff2a2a, 0 0 40px #ff0044`
- Neon yellow heading: `text-[#ffcc00]` with `text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 20px #ffaa00`
- Neon flicker: `animate-neon-flicker` (custom keyframe, 4s)
- Star twinkle: `animate-twinkle` (custom keyframe, 3s)
- Rust border: `border-4 border-[#8a5a2a]`
- Concession glow: `bg-gradient-to-b from-[#ff8c42] to-[#cc4400]` with `box-shadow: inset 0 0 30px rgba(255,200,100,0.4)`
- Letter tile: `bg-[#e0e0d0] text-[#0a0a2a] font-mono font-bold` in Courier New
- Fog overlay: `bg-gradient-to-t from-[#0a0a2a]/80 via-[#14143c]/40 to-transparent`
- Grass strip: `bg-[#1a3a1a]`
- Headlight glow: `fill-[#ffffcc]` with `filter: drop-shadow(0 0 6px #ffffaa)`
- Taillight glow: `fill-[#ff2a2a]` with `filter: drop-shadow(0 0 4px #ff2a2a)`
- Marquee font: `font-family: 'Monoton', cursive` with uppercase tracking-wider
- Condensed heading: `font-family: 'Bebas Neue', sans-serif` uppercase tracking-widest

## Quality Checklist (must pass)

- Background is #0a0a2a (night sky navy) with a star field overlay containing twinkling stars.
- At least one neon sign element with visible `text-shadow` glow in a matching hue.
- The screen tower silhouette or screen face element is present as a major visual anchor.
- A foggy/misty gradient overlay softens the bottom of the layout.
- Typography uses marquee-style or condensed uppercase fonts for headings (Monoton, Bebas Neue).
- Color palette is restricted to the drive-in night palette (navy, screen white, neon, warm, rust, grass green).
- At least one of: intermission clock, concession stand panel, or car speaker SVG.
- Rust-colored (#8a5a2a) elements appear on structural/metal components to convey age and weathering.
- Animations include star twinkling and/or neon flicker with `prefers-reduced-motion` fallback.
- Screen content has a subtle flicker effect simulating film projection.
- No bright daylight colors, no pastel palettes, no clean modern UI components.
- Letter board tiles (if used) have the authentic white-on-dark tile look with monospace font.
- Car silhouette elements (if used) have glowing headlights or taillights with drop-shadow.

## Anti-Patterns

- Bright daylight or pastel color palettes (everything lives in the night).
- Clean, modern UI components (glassmorphism, neumorphism, Material Design cards).
- Soft, rounded, friendly fonts (use bold condensed marquee and Art Deco-style fonts).
- Missing glow on neon elements (neon without `text-shadow` glow is just flat colored text).
- Smooth, fast transitions everywhere (use film-projector cuts and unhurried fades).
- Flat backgrounds without stars or atmosphere (the night sky is the canvas).
- Missing fog/mist at the bottom of the layout (the atmosphere needs depth).
- Bright white text everywhere (use #e0e0d0 screen white or warm white, not pure #ffffff for text).
- Neon elements that never flicker (real neon signs flicker intermittently).
- Missing structural/rust elements (drive-ins are weathered Americana, not sterile modern).
- Standard rounded corners on everything (use `rounded-sm` or `rounded-none` for structural elements, `rounded-t-lg` for concession roofs).
- Missing intermission or countdown elements (this is a core drive-in experience).
- Oversized buttons or modern interactive elements (interactions should feel nostalgic and physical).
- Missing `prefers-reduced-motion` handling (flicker and twinkle can cause discomfort).

## Accessibility Considerations

- Neon text on dark backgrounds must maintain WCAG AA contrast (4.5:1). Pure red (#ff2a2a) on navy (#0a0a2a) is approximately 5.2:1 — acceptable for large text but verify for body sizes.
- Neon glow via `text-shadow` should not make text blurry or unreadable — keep the core text crisp with the glow as a halo, not a replacement for text definition.
- Screen white (#e0e0d0) on night sky navy (#0a0a2a) is approximately 13:1 — excellent contrast for all text sizes.
- Star twinkling and neon flicker animations must respect `prefers-reduced-motion` — provide completely static fallbacks.
- Fog overlay must not obscure content below WCAG visibility — keep fog `opacity` below 0.4 over interactive elements.
- Letter board tiles with light background and dark text provide excellent contrast — use these for critical information.
- Intermission countdown clock must have a text-based time readout alongside the visual pie chart for screen readers.
- Car speaker SVGs and car silhouettes are decorative — provide `role="img"` and `aria-label` or `aria-hidden="true"` appropriately.
- Concession stand menu items should use semantic list markup (`<ul>`, `<li>`) with proper labels for screen reader navigation.
- Focus indicators must be visible on the dark night background — use neon yellow (#ffcc00) outlines for focus rings to maintain the aesthetic while ensuring visibility.
- Color should not be the only indicator for countdown urgency (red/yellow) — include text like "1 MINUTE REMAINING".
- Optional audio cues (projector click, speaker crackle, crickets) must be user-toggleable and respect `prefers-reduced-motion` or autoplay policies.
