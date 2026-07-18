---
name: greenhouse-conservatory-ui
description: Build greenhouse conservatory UI components (curved glass panels, iron framework, tropical plants inside, mist system, condensation drips, orchid displays) with Victorian glass-and-iron architecture, humid tropical atmosphere, and the lush abundance of a botanical conservatory. Trigger this skill when the user asks for conservatory design, curved greenhouse UI, orchid display, mist system, condensation animation, tropical glasshouse, Victorian conservatory, botanical conservatory, humid greenhouse interface, or tropical plant conservatory UI.
---

# Greenhouse Conservatory UI

Use this skill to design and build immersive interfaces inspired by Victorian glass-and-iron conservatories: curved glass panels with arched tops and translucent blue tint, dark iron framework grids, tropical leaf silhouettes, mist and humidity effects, condensation drip animations, orchid display accents, and ornate iron crest finials. The aesthetic is the humid interior of a grand botanical conservatory where tropical plants thrive behind curved glass, mist drifts between fern fronds, and water drips slowly from condensation on the warm glass overhead.

## Non-Negotiable Foundations

These principles are absolute. Every conservatory UI must satisfy all of them. No exceptions.

1. **Curved glass is the primary surface.** Every panel, card, and container must evoke curved glass — translucent blue-tinted surfaces with visible iron framework lines. Flat opaque surfaces break the conservatory illusion. Use `bg-[#c8e0f0]/20 backdrop-blur-md` as the minimum. The arched top is the signature silhouette — every major panel should have a rounded-top or arched-top shape.

2. **Iron framework is always visible.** The dark iron grid lines that divide glass panels are structural and decorative. Never remove them to "clean up" the layout. They define the Victorian engineering character. Use `border-[#2a2a2a]` at minimum, and consider overlaid grid patterns for larger surfaces.

3. **Humidity is atmospheric, not decorative.** Mist, condensation, and humidity effects are ambient layers that pervade the entire interface, not isolated ornaments. Every screen should have some degree of mist or moisture atmosphere. A conservatory without humidity is just a window.

4. **Tropical abundance fills every gap.** Leaf silhouettes, fern fronds, and orchid shapes should occupy background layers and negative space. Empty flat areas are failures of the concept. The conservatory is OVERGROWN — nature fills every available surface.

5. **Warm humid light quality pervades everything.** The light inside a conservatory is filtered through glass and diffused by mist. No harsh shadows, no cold whites, no stark contrasts. Use warm golden-green tints, soft glows, and diffused illumination. `shadow-[0_0_20px_rgba(200,224,240,0.1)]` over pure black shadows.

6. **Condensation drip animation is present.** At least one condensation drip element must animate somewhere on each major view. Small translucent drops falling slowly down glass surfaces. This is the breathing, living quality of the conservatory — stillness without drips feels sterile.

7. **The iron crest or finial decoration appears on header elements.** Victorian conservatory architecture features ornamental iron cresting along roof ridges and finials at structural peaks. Use these on navigation bars, section headers, and card tops. They are the calling card of Victorian iron engineering.

8. **Orchid accents provide color punctuation.** Against the dominant blue-green-glass palette, orchid flowers in pink and white provide essential warm color accents. Every major section should include at least one orchid-colored element. Without them, the palette is too cool and monotonous.

## Core Material Recipes

### 1) Curved Glass Panel (Arched Top)

The signature conservatory surface: a translucent blue-tinted panel with an arched top silhouette, iron frame edges, and condensation-ready glass quality.

```html
<div class="relative bg-[#c8e0f0]/20 backdrop-blur-md rounded-t-[50%] rounded-b-lg border border-[#2a2a2a]/40 p-6 shadow-[0_0_20px_rgba(200,224,240,0.12)]">
  <!-- Iron frame corner rivets -->
  <div class="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#2a2a2a]/60"></div>
  <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#2a2a2a]/60"></div>
  <div class="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#2a2a2a]/60"></div>
  <div class="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#2a2a2a]/60"></div>
  <!-- Glass content area -->
</div>
```

Tailwind shortcut: `bg-[#c8e0f0]/20 backdrop-blur-md rounded-t-[50%] rounded-b-lg border border-[#2a2a2a]/40 shadow-[0_0_20px_rgba(200,224,240,0.12)]`.

For a subtler arch, use `rounded-t-3xl` instead of `rounded-t-[50%]`.

### 2) Iron Framework Grid

Dark iron structural lines that divide glass panels into conservatory panes. Always present as an overlay on glass surfaces.

```css
/* Conservatory iron pane grid */
background-image:
  linear-gradient(rgba(42,42,42,0.12) 1px, transparent 1px),
  linear-gradient(90deg, rgba(42,42,42,0.12) 1px, transparent 1px),
  linear-gradient(rgba(42,42,42,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(42,42,42,0.06) 1px, transparent 1px);
background-size: 120px 120px, 120px 120px, 40px 40px, 40px 40px;
```

Tailwind: `bg-[linear-gradient(rgba(42,42,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.12)_1px,transparent_1px),linear-gradient(rgba(42,42,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.06)_1px,transparent_1px)] bg-[size:120px_120px,120px_120px,40px_40px,40px_40px]`.

The double-grid creates primary structural members (thick) and secondary muntin bars (thin), replicating real Victorian glasshouse framing.

### 3) Mist / Humidity System

Soft white blur patches that drift across the interface, creating the humid tropical atmosphere. These are translucent, diffused, and organic in shape.

```html
<!-- Static mist patches -->
<div class="absolute inset-0 pointer-events-none overflow-hidden">
  <div class="absolute top-[10%] left-[5%] w-[300px] h-[120px] bg-white/8 rounded-full blur-[60px]"></div>
  <div class="absolute top-[40%] right-[10%] w-[250px] h-[100px] bg-white/6 rounded-full blur-[50px]"></div>
  <div class="absolute bottom-[15%] left-[30%] w-[350px] h-[80px] bg-white/5 rounded-full blur-[70px]"></div>
</div>
```

Tailwind shortcut for a mist patch: `bg-white/6 rounded-full blur-[50px]`.

For drifting animation:
```html
<div class="absolute top-[20%] left-0 w-[400px] h-[100px] bg-white/5 rounded-full blur-[60px] animate-[mist-drift_20s_ease-in-out_infinite]"></div>

<style>
@keyframes mist-drift {
  0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.05; }
  50% { transform: translateX(80px) scaleX(1.3); opacity: 0.08; }
}
</style>
```

### 4) Condensation Drip Animation

Small translucent water drops that fall slowly down glass surfaces, accumulating and releasing. This is the living breathing quality of the conservatory.

```html
<!-- Single condensation drop -->
<div class="absolute top-[15%] left-[30%]">
  <div class="w-[2px] h-[12px] bg-gradient-to-b from-white/0 via-white/30 to-white/50 rounded-full animate-[condensation-drip_4s_ease-in-out_infinite]"></div>
</div>

<!-- Multiple drops at different positions and timings -->
<div class="absolute inset-0 pointer-events-none overflow-hidden">
  <div class="absolute top-[10%] left-[20%] w-[2px] h-[10px] bg-gradient-to-b from-white/0 via-white/25 to-white/45 rounded-full animate-[condensation-drip_5s_ease-in-out_0s_infinite]"></div>
  <div class="absolute top-[5%] left-[55%] w-[2px] h-[14px] bg-gradient-to-b from-white/0 via-white/20 to-white/40 rounded-full animate-[condensation-drip_7s_ease-in-out_2s_infinite]"></div>
  <div class="absolute top-[8%] left-[80%] w-[2px] h-[11px] bg-gradient-to-b from-white/0 via-white/30 to-white/50 rounded-full animate-[condensation-drip_6s_ease-in-out_1s_infinite]"></div>
</div>

<style>
@keyframes condensation-drip {
  0% { transform: translateY(0); opacity: 0; }
  5% { opacity: 0.4; }
  15% { transform: translateY(8px); opacity: 0.5; }
  40% { transform: translateY(8px); opacity: 0.5; }
  45% { transform: translateY(30px); opacity: 0.3; }
  50% { transform: translateY(50px); opacity: 0; }
  100% { opacity: 0; transform: translateY(50px); }
}
</style>
```

The key phases: the drop forms (opacity 0 to 0.5), hangs stationary (holds position), then falls and fades. Varying durations (4-8s) and delays (0-3s) across multiple drops prevents synchronization.

### 5) Tropical Leaf Silhouette Overlay

Dark or green leaf silhouettes that layer over glass panels, creating depth and the sense of plants pressing against the glass from inside.

```html
<svg viewBox="0 0 400 300" class="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
  <!-- Large monstera leaf -->
  <g fill="#2a6a2a" transform="translate(50,20) rotate(-15)">
    <path d="M80,180 Q60,120 40,60 Q50,50 60,55 Q55,40 70,35 Q75,20 90,25 Q100,10 110,20 Q120,5 130,18 Q145,8 145,25 Q155,20 155,35 Q165,30 160,50 Q170,55 165,65 Q175,80 170,100 Q180,110 170,130 Q175,150 165,170 Q160,185 140,190 Q120,195 100,190 Q85,185 80,180Z"/>
    <!-- Leaf holes (fenestrations) -->
    <ellipse cx="100" cy="80" rx="8" ry="12" fill="#c8e0f0" opacity="0.3" transform="rotate(10 100 80)"/>
    <ellipse cx="120" cy="110" rx="6" ry="10" fill="#c8e0f0" opacity="0.25" transform="rotate(-5 120 110)"/>
  </g>
  <!-- Fern frond -->
  <g fill="none" stroke="#2a6a2a" stroke-width="1.5" opacity="0.8" transform="translate(250,30) rotate(20)">
    <path d="M0,200 Q5,150 10,100 Q15,50 20,0"/>
    <path d="M5,180 Q-15,170 -25,155" /><path d="M5,180 Q25,170 35,155" />
    <path d="M7,155 Q-13,145 -23,130" /><path d="M7,155 Q27,145 37,130" />
    <path d="M9,130 Q-11,120 -21,105" /><path d="M9,130 Q29,120 39,105" />
    <path d="M11,105 Q-9,95 -19,80" /><path d="M11,105 Q31,95 41,80" />
    <path d="M13,80 Q-7,70 -17,55" /><path d="M13,80 Q33,70 43,55" />
  </g>
  <!-- Palm frond -->
  <g fill="none" stroke="#2a6a2a" stroke-width="1" opacity="0.6" transform="translate(300,100) rotate(-30)">
    <path d="M0,120 Q5,80 10,40 Q15,10 20,0"/>
    <path d="M5,100 Q-20,90 -40,85"/><path d="M5,100 Q30,95 50,88"/>
    <path d="M8,75 Q-17,65 -37,60"/><path d="M8,75 Q33,68 53,62"/>
    <path d="M11,50 Q-14,40 -34,35"/><path d="M11,50 Q36,42 56,37"/>
  </g>
</svg>
```

Tailwind class: `absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none` on the SVG container. Vary opacity from `0.04` to `0.10` and rotation per leaf to avoid repetition.

### 6) Orchid Display Accent

Colorful orchid flower silhouettes that provide warm color punctuation against the cool blue-green palette. Each orchid is a simple SVG with the characteristic three-petal-plus-lip shape.

```html
<svg viewBox="0 0 80 100" class="w-16 h-20 opacity-40">
  <!-- Orchid stem -->
  <path d="M40,100 Q38,80 42,60 Q44,45 40,30" fill="none" stroke="#2a6a2a" stroke-width="1.5"/>
  <!-- Orchid petals -->
  <g transform="translate(40,25)">
    <!-- Top sepal -->
    <ellipse cx="0" cy="-12" rx="5" ry="12" fill="#d480a0" opacity="0.8" transform="rotate(0)"/>
    <!-- Left sepal -->
    <ellipse cx="-10" cy="-4" rx="5" ry="11" fill="#d480a0" opacity="0.7" transform="rotate(-35)"/>
    <!-- Right sepal -->
    <ellipse cx="10" cy="-4" rx="5" ry="11" fill="#d480a0" opacity="0.7" transform="rotate(35)"/>
    <!-- Left petal -->
    <ellipse cx="-12" cy="0" rx="7" ry="9" fill="#e8a0b8" opacity="0.8" transform="rotate(-20)"/>
    <!-- Right petal -->
    <ellipse cx="12" cy="0" rx="7" ry="9" fill="#e8a0b8" opacity="0.8" transform="rotate(20)"/>
    <!-- Lip (labellum) -->
    <path d="M-6,5 Q0,15 6,5 Q3,8 0,10 Q-3,8 -6,5Z" fill="#c06080" opacity="0.9"/>
    <!-- Column center -->
    <circle cx="0" cy="-2" r="2" fill="#f5f0f0" opacity="0.6"/>
  </g>
</svg>
```

Use orchid pink `#d480a0` for the primary bloom and orchid white `#f5f0f0` for the center column. Place orchids at card corners, section breaks, and navigation accents.

### 7) Iron Crest / Finial Decoration

Ornamental Victorian iron cresting that sits atop navigation bars and section headers. The silhouette of scrolled ironwork against the sky is the defining architectural feature.

```html
<svg viewBox="0 0 600 40" class="w-full h-10 text-[#2a2a2a]">
  <!-- Central finial -->
  <g fill="currentColor" opacity="0.7">
    <path d="M300,5 Q295,15 300,25 Q305,15 300,5Z"/>
    <circle cx="300" cy="3" r="3"/>
    <!-- Left scrolls -->
    <path d="M280,30 Q275,20 285,15 Q290,12 295,18" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M260,30 Q258,22 265,18 Q270,15 278,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M240,30 Q238,24 245,20 Q250,17 258,22" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M220,30 Q218,26 225,22 Q230,19 238,24" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Right scrolls (mirrored) -->
    <path d="M320,30 Q325,20 315,15 Q310,12 305,18" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M340,30 Q342,22 335,18 Q330,15 322,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M360,30 Q362,24 355,20 Q350,17 342,22" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M380,30 Q382,26 375,22 Q370,19 362,24" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Base rail -->
    <rect x="200" y="32" width="200" height="2" rx="1"/>
  </g>
</svg>
```

Tailwind: `text-[#2a2a2a]` for color inheritance. Place as `w-full h-10` above navigation or section headers. The scrolls should radiate outward from a central pointed finial.

### 8) Conservatory Humid Glass Button

A button that looks like a small glass pane with iron edges, condensation-ready, warm and humid.

- `relative bg-[#c8e0f0]/25 backdrop-blur-sm border border-[#2a2a2a]/30 rounded-lg px-6 py-3 text-[#2a2a2a] font-medium shadow-[0_0_12px_rgba(200,224,240,0.15)] hover:bg-[#c8e0f0]/35 hover:shadow-[0_0_20px_rgba(200,224,240,0.25)] transition-all duration-300`.
- Add iron corner dots: `after:content-[''] after:absolute after:top-1 after:left-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#2a2a2a]/40` (and corresponding positions for other corners via additional pseudo-elements or sibling divs).

### 9) Condensation Glass Surface

A full glass panel with active condensation droplets and fog, representing a window pane viewed from inside the warm conservatory.

```html
<div class="relative bg-[#c8e0f0]/15 backdrop-blur-lg border border-[#2a2a2a]/30 rounded-xl overflow-hidden">
  <!-- Fog layer -->
  <div class="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5 pointer-events-none"></div>
  <!-- Drip drops -->
  <div class="absolute top-[10%] left-[25%] w-[1.5px] h-[8px] bg-gradient-to-b from-white/0 to-white/40 rounded-full animate-[condensation-drip_6s_ease-in-out_0s_infinite]"></div>
  <div class="absolute top-[6%] left-[60%] w-[2px] h-[10px] bg-gradient-to-b from-white/0 to-white/35 rounded-full animate-[condensation-drip_8s_ease-in-out_1.5s_infinite]"></div>
  <div class="absolute top-[12%] left-[85%] w-[1.5px] h-[9px] bg-gradient-to-b from-white/0 to-white/30 rounded-full animate-[condensation-drip_5s_ease-in-out_3s_infinite]"></div>
  <!-- Content goes here, above the condensation layers -->
  <div class="relative z-10 p-6">
    <!-- Panel content -->
  </div>
</div>
```

### 10) Tropical Plant Pot Display

A small terracotta or ceramic pot with a tropical plant silhouette, used as an accent element.

```html
<div class="flex flex-col items-center">
  <!-- Plant silhouette -->
  <svg viewBox="0 0 60 50" class="w-12 h-10 opacity-30">
    <g fill="#2a6a2a">
      <ellipse cx="20" cy="15" rx="12" ry="8" transform="rotate(-25 20 15)"/>
      <ellipse cx="40" cy="12" rx="10" ry="7" transform="rotate(20 40 12)"/>
      <ellipse cx="30" cy="8" rx="8" ry="10" transform="rotate(5 30 8)"/>
      <rect x="27" y="18" width="6" height="12" rx="2" fill="#5a3a20"/>
    </g>
  </svg>
  <!-- Pot -->
  <div class="w-10 h-8 bg-gradient-to-b from-[#c47850] to-[#a05a30] rounded-b-lg rounded-t-sm border-t border-[#8a4a20] shadow-[0_2px_6px_rgba(112,60,20,0.15)]"></div>
</div>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Glass Blue-Tint | `#c8e0f0` | Primary glass surface color. The translucent blue of conservatory glass panels. Used at 15-25% opacity for backgrounds, full opacity for accents. |
| Iron Dark | `#2a2a2a` | Framework, grid lines, finials, structural elements. The dark iron of Victorian conservatory engineering. Used at 20-70% opacity depending on prominence. |
| Tropical Green | `#2a6a2a` | Leaf silhouettes, plant accents, organic elements. The deep green of tropical foliage behind glass. Used at 5-15% for background silhouettes, higher for focused elements. |
| Condensation White | `rgba(255,255,255,0.25)` | Water droplets, mist edges, glass highlights. The translucent white of condensation on warm glass. Always at low opacity, never pure white. |
| Mist White | `rgba(255,255,255,0.06)` | Drifting mist patches, humidity atmosphere. The barely-visible white of humid air. Used with heavy blur (50-70px). |
| Orchid Pink | `#d480a0` | Primary orchid bloom color. Warm pink punctuation against the cool blue-green. Used sparingly on flower accents. |
| Orchid White | `#f5f0f0` | Orchid center column, light flower accents. Warm off-white that bridges the cool glass and warm orchid pink. |
| Conservatory Warm | `#f0e8d0` | Warm ambient light tint. The golden quality of sunlight filtered through glass and mist. Used for text backgrounds, warm glow effects. |
| Leaf Dark | `#1a4a1a` | Deep shadow green. The darkest value for plant silhouettes and deep foliage shadows. |
| Glass Edge | `rgba(200,224,240,0.5)` | Glass panel edge highlights. The brighter line along the edge of curved glass where light catches. |

Rules: Blue-tint glass dominates surfaces. Iron dark provides all structural framing. Tropical greens fill negative space. Orchid accents appear no more than once per section — they are punctuation, not prose. Condensation and mist are always at very low opacity. The overall impression should be cool-blue-green with warm orchid spots and golden ambient warmth.

## Typography Recommendations

- **Display:** Fraunces, Playfair Display (warm serif with Victorian character). For section titles and hero text, a serif with weight and warmth.
- **Body:** Lora, Source Serif 4 (readable warm serif). Body text should feel like it could be on a botanical garden information placard.
- **Labels:** `font-serif italic text-sm` for plant names in scientific Latin. `font-mono text-xs text-[#2a2a2a]/50` for iron framework annotations or measurement marks.
- **Headers:** Uppercase with wide letter-spacing for section dividers: `font-serif uppercase tracking-[0.2em] text-xs text-[#2a2a2a]/40`.
- Typography should feel warm, slightly old-fashioned, and scholarly — like labels in a Victorian botanical garden. Never cold, never ultra-modern, never monospaced for body text.

## Component Architecture Pattern

Conservatory UI follows a layered architecture that mirrors the physical experience of being inside a glass conservatory:

**Layer 1 — Glass Shell (outermost):** The primary container. Always a translucent blue-tinted surface with iron framework. This is the "building" — every major section lives inside a glass shell.

**Layer 2 — Mist Atmosphere:** Semi-transparent mist and humidity overlays that sit between the glass and the content. These are `pointer-events-none` decorative layers that add depth and atmosphere without blocking interaction.

**Layer 3 — Tropical Foliage:** Leaf silhouettes and plant overlays that occupy the space between mist and content. Also `pointer-events-none`. These create the sense of being surrounded by plants.

**Layer 4 — Content Surface:** The actual interactive content — cards, text, buttons, inputs. These sit above all atmospheric layers and must maintain full readability and interactivity.

**Layer 5 — Condensation Detail:** Water drip animations and glass condensation effects that overlay everything including content, but at very low opacity. These are the finest atmospheric detail.

Component hierarchy:
```
ConservatoryShell (Layer 1: glass panel with iron frame)
  MistLayer (Layer 2: pointer-events-none)
  FoliageLayer (Layer 3: pointer-events-none)
  ContentArea (Layer 4: relative z-10)
    SectionHeader (iron crest finial + title)
    CardGrid (arched glass panels in grid)
    OrchidAccent (decorative flower elements)
  CondensationLayer (Layer 5: pointer-events-none, z-20)
```

This layering is non-negotiable. Every page or major section must have at minimum Layer 1 (glass shell) and Layer 4 (content). Layers 2, 3, and 5 are atmospheric but their absence makes the interface feel like a plain glass box rather than a living conservatory.

## Interaction Rules

1. **Hover reveals mist.** When a user hovers over a glass panel, increase the mist/humidity effect behind it. Subtle mist intensification signals that the panel is responsive and alive.

2. **Condensation responds to proximity.** Add additional condensation drips near the cursor or active element. The warmth of the user's "presence" creates more condensation on the glass — a playful physical metaphor.

3. **Glass panels have depth on hover.** Use subtle `transform: translateY(-2px)` and increased `backdrop-blur` on hover to simulate the panel pulling away from the glass wall slightly, catching more light.

4. **Scroll reveals foliage.** As the user scrolls, leaf silhouettes should shift at a different rate (parallax) or fade in/out. The conservatory feels alive as plants seem to move slightly with the viewing angle.

5. **Mist drifts continuously.** Mist patches should always be in slow motion — `animation: mist-drift 20s ease-in-out infinite` with varying durations per patch. The atmosphere is never truly still.

6. **Condensation drips are never synchronized.** Each drip must have a different duration (4-8s) and delay (0-4s). Synchronized drips look mechanical and break the organic feel.

7. **Orchid accents gently pulse.** Orchid flower elements should have a very subtle opacity pulse (0.35 to 0.45 over 4s) to suggest they are alive and breathing in the humid air.

8. **Transitions are slow and humid.** All transitions should use `duration-500` or longer. Quick transitions feel dry and digital. The conservatory atmosphere demands slow, heavy, humid movement.

9. **Iron framework is static.** Unlike glass and organic elements, the iron grid never moves, never animates, never fades. Iron is permanent and structural — its stability contrasts with the living elements around it.

10. **Scrolling condensation shifts.** On scroll, condensation drops should shift position slightly as if the viewer is moving along the glass wall. A subtle `transform: translateY()` tied to scroll position achieves this.

## Reusable Tailwind Tokens

- **Glass panel:** `bg-[#c8e0f0]/20 backdrop-blur-md border border-[#2a2a2a]/40 shadow-[0_0_20px_rgba(200,224,240,0.12)]`
- **Glass panel arched:** `bg-[#c8e0f0]/20 backdrop-blur-md rounded-t-[50%] rounded-b-lg border border-[#2a2a2a]/40`
- **Iron grid overlay:** `bg-[linear-gradient(rgba(42,42,42,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.12)_1px,transparent_1px)] bg-[size:120px_120px]`
- **Iron fine grid:** `bg-[linear-gradient(rgba(42,42,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.06)_1px,transparent_1px)] bg-[size:40px_40px]`
- **Mist patch:** `bg-white/6 rounded-full blur-[50px]`
- **Mist drift:** `animate-[mist-drift_20s_ease-in-out_infinite]`
- **Condensation drip:** `w-[2px] h-[12px] bg-gradient-to-b from-white/0 via-white/30 to-white/50 rounded-full`
- **Tropical foliage:** `opacity-[0.06] pointer-events-none` on leaf SVGs
- **Orchid accent:** `opacity-40` on orchid SVGs with fill colors `#d480a0` and `#f5f0f0`
- **Iron finial:** `text-[#2a2a2a] opacity-70` on crest SVGs
- **Glass button:** `bg-[#c8e0f0]/25 backdrop-blur-sm border border-[#2a2a2a]/30 rounded-lg shadow-[0_0_12px_rgba(200,224,240,0.15)]`
- **Conservatory warm glow:** `shadow-[0_0_30px_rgba(240,232,208,0.15)]`
- **Warm ambient light:** `bg-gradient-to-b from-[#f0e8d0]/10 to-transparent`
- **Glass edge highlight:** `border-[#c8e0f0]/50`
- **Condensation fog:** `bg-gradient-to-b from-white/5 via-white/10 to-white/5`

## Quality Checklist

- At least one curved glass panel with arched top and translucent blue tint.
- Iron framework grid lines visible on glass surfaces (primary 120px, secondary 40px).
- Mist or humidity atmospheric layer present (even if subtle, minimum one blur patch).
- At least one condensation drip animation per major section.
- Tropical leaf silhouettes in background layers (minimum two different leaf types).
- Orchid accent element providing warm color punctuation (minimum one per section).
- Iron crest or finial decoration on header/navigation elements.
- Color palette dominated by blue-tint glass and iron dark, with green foliage and orchid pink accents.
- Typography uses warm serif fonts, not cold sans-serif.
- All transitions use 500ms+ duration for humid pacing.
- Glass panels have `backdrop-blur` — never fully opaque surfaces for primary content areas.
- Atmospheric layers (mist, foliage, condensation) use `pointer-events-none` so they never block interaction.
- The overall impression reads as "inside a humid Victorian conservatory" — not a generic glass UI.
- Orchid accents are sparse (punctuation, not wallpaper) — no more than one per visible section.

## Anti-Patterns

- **Flat opaque panels.** The conservatory is made of glass. Every surface must have some translucency or backdrop-blur. Solid `bg-white` or `bg-gray-100` destroys the illusion.
- **Missing iron framework.** Glass without iron structure is just a blue rectangle. The grid lines are what make it a conservatory rather than a generic frosted panel.
- **Synchronized condensation drips.** All drips moving at the same speed and time looks mechanical. Every drip must have unique timing.
- **Orchid overload.** Orchids are punctuation. If every element is orchid-pink, the palette collapses into pink mush. Limit to one accent per section.
- **Cold white or gray text.** Text inside glass panels should use `#2a2a2a` (iron dark) — never pure black, never white on blue-tinted glass (reduces readability). The exception is text on dark iron surfaces, where `#f5f0f0` is acceptable.
- **Missing mist atmosphere.** A conservatory without humidity is just a window display. Every screen needs at least subtle mist patches.
- **Sharp brutalist minimalism.** The conservatory is ornate Victorian architecture with iron scrollwork. Removing all decoration for "cleanliness" removes the character.
- **Missing arch silhouette.** At least some panels must use `rounded-t-[50%]` or `rounded-t-3xl` to evoke the curved glass roof. All-rectangle panels read as modern greenhouse, not Victorian conservatory.
- **Fast transitions.** Sub-300ms transitions feel digital and dry. The conservatory atmosphere requires slow, heavy movement.
- **Sans-serif display type.** Victorian conservatories demand serif typography. A display heading in Inter or Roboto breaks the period character.
- **White backgrounds.** The conservatory interior is never bright white. The glass tint, mist, and ambient warmth always color the background.
- **Missing condensation detail.** Without the drip animations, the glass feels like a digital mockup rather than a real physical surface with moisture.
- **Iron elements animating.** Iron framework is structural and permanent. If iron grid lines, finials, or rivets are animated, it suggests the building is unstable. Only glass and organic elements should move.

## Accessibility Considerations

- **Contrast on glass surfaces.** Text on translucent blue-tint glass (`#c8e0f0` at 20% opacity over varying backgrounds) may not meet WCAG AA 4.5:1 contrast. Ensure text uses `#2a2a2a` (dark enough against the light glass) and verify contrast ratios. If the underlying background is dark, switch to `#f5f0f0` text with sufficient opacity.
- **Condensation animations respect prefers-reduced-motion.** The drip and mist animations are decorative. Wrap all animated elements in a `prefers-reduced-motion` check: apply `animation: none` and show static droplets at their mid-position instead. The conservatory atmosphere can be conveyed through static mist patches and translucent layers without motion.
- **Mist layers do not obscure content.** Mist patches must not extend over interactive elements or readable text areas. Place mist `pointer-events-none` and ensure blur radii do not overlap button hit areas or text blocks. Test by temporarily setting mist opacity to maximum — no interactive element should be hidden.
- **Iron framework grid is decorative, not semantic.** The grid overlay uses CSS background patterns, not actual `<table>` or `<div>` grids. Screen readers should not encounter the grid as structure. Use `aria-hidden="true"` if the grid is implemented as a DOM element rather than a CSS background.
- **Orchid and leaf SVGs include aria-hidden.** All decorative SVG elements (`opacity-0.06` leaf silhouettes, `opacity-40` orchids) must have `aria-hidden="true"` and no `<title>` or `<desc>` that would be announced to assistive technology. They are purely visual.
- **Glass panel boundaries are semantically clear.** If a glass panel contains a distinct content section, wrap it in a `<section>` or `<article>` with an `aria-label` so screen reader users understand the content grouping. The visual glass boundary should correspond to a semantic boundary.
- **Color is not the only information channel.** Orchid pink accents should not be the only way to distinguish interactive elements from decorative ones. Interactive elements must also have visible focus indicators, text labels, or shape differences.
- **Focus indicators on glass buttons.** Glass-surfaced buttons need visible focus rings that work against both the translucent glass and the underlying background. Use `focus-visible:ring-2 focus-visible:ring-[#2a2a2a] focus-visible:ring-offset-2` to ensure the focus indicator is visible against the blue-tinted glass.
- **Mist animation timing does not cause vestibular issues.** Slow mist drift (20s+) is generally safe, but the `mist-drift` animation should not use scaling or rotation that exceeds 5% transform. Larger transforms on blurry elements can trigger discomfort for users with vestibular disorders.
- **Condensation drip speed is gentle.** Drip animations falling over 4-8 seconds are slow enough to avoid seizure risk. Never speed up drip animations below 2 seconds — fast-flickering translucent elements against varied backgrounds can be problematic.
- **Alt text for complex SVG decorative elements.** While most decorative SVGs should be `aria-hidden`, if an orchid display or botanical illustration conveys meaning (e.g., "orchid of the month"), provide a descriptive `aria-label` on the parent container.
