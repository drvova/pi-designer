---
name: aquarium-public-ui
description: Build public aquarium UI components (large viewing window, underwater tunnel, jellyfish tank, touch pool, shark silhouette, coral display, penguin rock) with massive water viewing surfaces, marine life silhouettes, and the immersive wonder of a public aquarium. Trigger this skill when the user asks for aquarium design, public aquarium UI, underwater tunnel interface, jellyfish tank, marine life silhouette, shark UI, coral display, touch pool, penguin exhibit, ocean exhibit, sea life interface, or immersive aquarium aesthetic.
---

# Public Aquarium UI

Use this skill to design and implement immersive, wonder-filled interfaces inspired by public aquariums: massive water viewing windows, arched glass underwater tunnels, translucent jellyfish tanks, shallow touch pool surfaces, dramatic shark silhouettes, colorful coral display arrangements, penguin rock formations, and the deep-blue immersive experience of walking through a world-class oceanarium.

## Non-Negotiable Foundations

Every public aquarium interface must satisfy these requirements or it is not a public aquarium:

1. **Massive water viewing surfaces dominate the layout.** The defining experience of a public aquarium is standing before enormous glass panels filled with water and marine life. Large rectangular water-view areas must occupy the majority of the viewport — at least 50% of any screen. Small inset panels are pet-store aquariums. The public aquarium is architectural scale.

2. **Deep tank water as the primary background.** The dominant color is the deep blue of aquarium tank water `#1a4a7a`. This is not ocean surface blue or sky blue — it is the dark, pressurized blue of water viewed through thick glass in a dimly lit public space. Backgrounds must convey depth and immersion.

3. **Glass edge and light refraction as structural accents.** Aquarium glass has visible edges — thick, slightly greenish-blue glass panels where light refracts. Every structural border, panel edge, and separator should reference glass thickness with `#a0c8e0` edge color and subtle inner glow. The glass is the interface between viewer and ocean.

4. **Marine life silhouettes provide the wonder.** Sharks, jellyfish, coral formations, and penguins define the aquarium experience. At least one marine life silhouette or illustration must appear per screen. These are not decorations — they are the exhibits. The aquarium without marine life is an empty tank.

5. **The visitor walks through the water.** Unlike a fish-tank aquarium (where you look AT water), a public aquarium makes you feel INSIDE the water. Dark surrounding space, massive illuminated water panels, ambient water-light caustics, and the deep blue glow all create the sensation of being submerged alongside the marine life.

## Core Material Recipes

### 1) Large Viewing Window

The signature element — a massive rectangular water-filled panel that serves as the primary content surface.

- `bg-gradient-to-b from-[#2070a0] via-[#1a4a7a] to-[#0e2e50] rounded-xl p-8 border-2 border-[#a0c8e0]/40 shadow-[0_0_40px_rgba(26,74,122,0.3),inset_0_0_60px_rgba(10,20,40,0.3)]`.
- Glass edge highlight: `border-t-[3px] border-t-[#a0c8e0]/60` (thick glass top edge where overhead lighting hits).
- Caustic light: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(64,160,208,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(64,160,208,0.06)_0%,transparent_40%)]` (dappled water-light patterns on the viewing window surface).
- Scale: viewing windows should be wide — `min-h-[400px]` or `min-h-[50vh]` on hero panels to convey architectural scale.

### 2) Aquarium Environment Background

Dark public-space surroundings with the glow of illuminated water tanks.

- `bg-gradient-to-b from-[#0a1628] via-[#0e1e34] to-[#060e1a] min-h-screen` (dark visitor space — the room is dark, the tanks glow).
- Ambient tank glow: `bg-[radial-gradient(ellipse_at_50%_40%,rgba(26,74,122,0.15)_0%,transparent_60%)]` (the blue glow of a nearby tank casting light into the dark hallway).
- Floor reflection: `bg-[linear-gradient(to_bottom,transparent_80%,rgba(26,74,122,0.05)_100%)]` (faint blue reflection on the polished floor from tank light).

### 3) Underwater Tunnel

An arched glass corridor element — used as a section wrapper, feature showcase, or immersive card.

```html
<div class="relative rounded-t-[50%] bg-gradient-to-b from-[#1a4a7a]/20 to-[#1a4a7a]/5 border border-[#a0c8e0]/30 backdrop-blur-sm p-8 pt-16 shadow-[0_-4px_30px_rgba(26,74,122,0.15),inset_0_0_40px_rgba(10,20,40,0.2)]">
  <!-- Glass arch ribs -->
  <div class="absolute top-0 left-[20%] w-px h-full bg-[#a0c8e0]/15"></div>
  <div class="absolute top-0 left-[40%] w-px h-full bg-[#a0c8e0]/10"></div>
  <div class="absolute top-0 left-[60%] w-px h-full bg-[#a0c8e0]/10"></div>
  <div class="absolute top-0 left-[80%] w-px h-full bg-[#a0c8e0]/15"></div>
  <!-- Overhead water reflection -->
  <div class="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#40a0d0]/10 to-transparent rounded-t-[50%]"></div>
</div>
```

- The rounded top (`rounded-t-[50%]`) creates the arched tunnel shape.
- Vertical rib lines at 20% intervals simulate the glass support arches of a real underwater tunnel.
- Content goes inside the arch — you are walking through the tunnel, looking up and around at water.

### 4) Jellyfish Tank

A translucent panel with floating bell-shaped jellyfish — used as an ambient feature section or decorative divider.

```html
<div class="relative w-full min-h-[200px] bg-gradient-to-b from-[#e0a0c0]/10 via-[#1a4a7a]/30 to-[#1a4a7a]/20 rounded-2xl overflow-hidden border border-[#e0a0c0]/20">
  <!-- Jellyfish 1 -->
  <div class="absolute top-[15%] left-[20%] animate-[jelly-float_6s_ease-in-out_infinite]">
    <div class="w-12 h-8 bg-gradient-to-b from-[#e0a0c0]/30 to-[#e0a0c0]/10 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] backdrop-blur-sm border border-[#e0a0c0]/15"></div>
    <div class="flex justify-center gap-[2px] -mt-0.5">
      <div class="w-px h-6 bg-gradient-to-b from-[#e0a0c0]/25 to-transparent"></div>
      <div class="w-px h-8 bg-gradient-to-b from-[#e0a0c0]/30 to-transparent"></div>
      <div class="w-px h-7 bg-gradient-to-b from-[#e0a0c0]/25 to-transparent"></div>
    </div>
  </div>
  <!-- Jellyfish 2 -->
  <div class="absolute top-[35%] left-[55%] animate-[jelly-float_8s_ease-in-out_2s_infinite]">
    <div class="w-16 h-10 bg-gradient-to-b from-[#e0a0c0]/25 to-[#e0a0c0]/8 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] backdrop-blur-sm border border-[#e0a0c0]/12"></div>
    <div class="flex justify-center gap-[2px] -mt-0.5">
      <div class="w-px h-8 bg-gradient-to-b from-[#e0a0c0]/20 to-transparent"></div>
      <div class="w-px h-10 bg-gradient-to-b from-[#e0a0c0]/25 to-transparent"></div>
      <div class="w-px h-6 bg-gradient-to-b from-[#e0a0c0]/20 to-transparent"></div>
      <div class="w-px h-9 bg-gradient-to-b from-[#e0a0c0]/22 to-transparent"></div>
    </div>
  </div>
  <!-- Jellyfish 3 -->
  <div class="absolute top-[55%] left-[35%] animate-[jelly-float_7s_ease-in-out_4s_infinite]">
    <div class="w-10 h-7 bg-gradient-to-b from-[#e0a0c0]/20 to-[#e0a0c0]/5 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] backdrop-blur-sm border border-[#e0a0c0]/10"></div>
    <div class="flex justify-center gap-[2px] -mt-0.5">
      <div class="w-px h-5 bg-gradient-to-b from-[#e0a0c0]/18 to-transparent"></div>
      <div class="w-px h-7 bg-gradient-to-b from-[#e0a0c0]/22 to-transparent"></div>
      <div class="w-px h-6 bg-gradient-to-b from-[#e0a0c0]/18 to-transparent"></div>
    </div>
  </div>
  <!-- Ambient particles -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_1px_at_25%_40%,rgba(224,160,192,0.2)_0%,transparent_100%),radial-gradient(circle_1px_at_65%_30%,rgba(224,160,192,0.15)_0%,transparent_100%),radial-gradient(circle_1px_at_45%_70%,rgba(255,255,255,0.08)_0%,transparent_100%)]"></div>
</div>
```

- Float animation: `@keyframes jelly-float { 0%,100% { transform: translateY(0) translateX(0); } 25% { transform: translateY(-10px) translateX(3px); } 50% { transform: translateY(-5px) translateX(-2px); } 75% { transform: translateY(-12px) translateX(1px); } }` (gentle drifting upward and side to side, like real jellyfish).
- Multiple jellyfish at different sizes, positions, and animation delays create depth and organic movement.
- The bell shape uses asymmetric border-radius to mimic the organic dome of a jellyfish.

### 5) Shark Silhouette

A dramatic dark shark shape — used as a background watermark, section accent, or feature illustration.

```html
<svg viewBox="0 0 200 80" class="w-48 h-20 opacity-[0.08]">
  <!-- Shark body -->
  <path d="M10,40 Q30,20 80,25 Q130,20 170,30 L195,38 L185,40 L195,42 L170,48 Q130,55 80,52 Q30,55 10,40 Z" fill="#5a6a6a"/>
  <!-- Dorsal fin -->
  <path d="M90,25 L100,8 L110,25" fill="#5a6a6a"/>
  <!-- Tail fin -->
  <path d="M10,40 L0,25 L5,38" fill="#5a6a6a"/>
  <path d="M10,40 L0,55 L5,42" fill="#5a6a6a"/>
  <!-- Pectoral fin -->
  <path d="M65,48 L55,62 L80,50" fill="#5a6a6a"/>
  <!-- Eye -->
  <circle cx="175" cy="39" r="1.5" fill="#0e2e50" opacity="0.5"/>
</svg>
```

Optional slow horizontal drift: `animate-[shark-drift_20s_linear_infinite]` with `@keyframes shark-drift { 0% { transform: translateX(-10%); } 100% { transform: translateX(110%); } }` (shark patrols across the viewing window slowly, like a real shark patrolling its tank).

### 6) Coral Display

A colorful reef arrangement used as a decorative base, footer accent, or section bottom decoration.

```html
<svg viewBox="0 0 400 100" class="w-full h-24 opacity-50">
  <!-- Coral base -->
  <path d="M0,100 L0,70 Q20,50 40,65 Q60,40 80,55 Q100,30 120,50 Q140,25 160,45 Q180,20 200,40 Q220,15 240,38 Q260,25 280,42 Q300,20 320,45 Q340,30 360,50 Q380,35 400,55 L400,100 Z" fill="#e08040" opacity="0.6"/>
  <!-- Coral branches -->
  <g stroke-linecap="round" fill="none">
    <path d="M60,65 L55,40 M55,40 L48,30 M55,40 L62,28" stroke="#e08040" stroke-width="2" opacity="0.7"/>
    <path d="M140,55 L135,28 M135,28 L128,18 M135,28 L142,15 M135,35 L125,30" stroke="#e0a060" stroke-width="2.5" opacity="0.6"/>
    <path d="M260,50 L255,25 M255,25 L248,15 M255,25 L262,12" stroke="#e08040" stroke-width="2" opacity="0.65"/>
    <path d="M340,58 L335,35 M335,35 L328,22 M335,35 L342,20" stroke="#e0a060" stroke-width="1.8" opacity="0.6"/>
  </g>
  <!-- Fan coral -->
  <path d="M180,45 Q175,20 160,10 Q175,15 180,5 Q185,15 200,10 Q185,20 180,45" fill="#e06040" opacity="0.4"/>
  <!-- Anemone -->
  <g opacity="0.5">
    <path d="M300,55 Q295,40 290,35" stroke="#e04040" stroke-width="1.5" fill="none"/>
    <path d="M300,55 Q300,38 305,30" stroke="#e04040" stroke-width="1.5" fill="none"/>
    <path d="M300,55 Q305,40 310,32" stroke="#e04040" stroke-width="1.5" fill="none"/>
    <circle cx="290" cy="35" r="2" fill="#e06060" opacity="0.6"/>
    <circle cx="305" cy="30" r="2.5" fill="#e06060" opacity="0.5"/>
    <circle cx="310" cy="32" r="2" fill="#e06060" opacity="0.6"/>
  </g>
</svg>
```

Container: `w-full overflow-hidden` (reef spans the full width as a base decoration). Place at the bottom of sections or as a section divider. The branching coral, fan coral, and anemone create a natural reef silhouette.

### 7) Touch Pool Surface

A shallow, calm water surface with subtle ripples — used as an interactive panel or input area.

- `bg-gradient-to-b from-[#40a0d0]/20 to-[#1a4a7a]/30 rounded-2xl p-6 border border-[#a0c8e0]/30 relative overflow-hidden`.
- Ripple rings: `bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(160,200,224,0.08)_31%,transparent_32%,transparent_60%,rgba(160,200,224,0.05)_61%,transparent_62%)]` (concentric ripple rings suggesting the shallow water surface).
- Sandy bottom visible: `shadow-[inset_0_-20px_40px_rgba(200,180,120,0.08)]` (warm sandy tone bleeding up from the pool floor).

### 8) Penguin Rock Formation

A textured gray rock surface used as a card, sidebar, or display stand.

- `bg-gradient-to-br from-[#7a7a6a] to-[#5a5a4a] rounded-2xl p-6 border border-[#4a4a3a] shadow-[0_4px_20px_rgba(10,14,26,0.3)]`.
- Rock texture: `bg-[repeating-linear-gradient(170deg,transparent,transparent_20px,rgba(90,90,74,0.1)_20px,rgba(90,90,74,0.1)_22px)]` (diagonal strata lines like sedimentary rock).
- Wet edge highlight: `border-t border-t-[#a0a090]/40` (the wet rock surface catches light differently).

### 9) Aquarium Water Button

A deep-blue water button that glows like light through tank glass.

- `bg-gradient-to-b from-[#40a0d0] to-[#1a4a7a] text-white font-medium rounded-lg px-8 py-3 border border-[#a0c8e0]/40 shadow-[0_3px_12px_rgba(26,74,122,0.3),inset_0_1px_0_rgba(160,200,224,0.2)] hover:shadow-[0_0_20px_rgba(64,160,208,0.35)] transition-all duration-300`.

### 10) Exhibit Information Card

A dark card with glass edge — for displaying marine species information.

- `bg-[#0e1e34]/80 backdrop-blur-md rounded-lg p-5 border border-[#a0c8e0]/20 shadow-[0_2px_16px_rgba(10,14,26,0.3)]`.
- Glass accent stripe: `border-l-[3px] border-l-[#40a0d0]` (blue glass edge on the left side, like the edge of a viewing panel).
- Text: `text-[#c0d8e8]` (light blue-gray, like reading in the dark aquarium hallway).

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Tank Water | `#1a4a7a` | Primary background — deep tank water |
| Glass Edge | `#a0c8e0` | Structural accent — glass panel borders |
| Water Light | `#40a0d0` | Interactive accent — buttons, links, glow |
| Deep Dark | `#0a1628` | Environment — dark visitor space |
| Deep Mid | `#0e1e34` | Card surfaces — dark aquarium interior |
| Jellyfish Pink | `#e0a0c0` | Tertiary accent — jellyfish, soft glow |
| Shark Gray | `#5a6a6a` | Silhouette accent — sharks, rays |
| Coral Orange | `#e08040` | Warm accent — coral, tropical reef |
| Coral Red | `#e06040` | Secondary coral — anemone, warm detail |
| Penguin Black | `#1a1a1a` | Darkest value — penguin plumage |
| Rock Gray | `#7a7a6a` | Surface texture — rock formations |
| Sandy Gold | `#c8b478` | Bottom accent — touch pool sand |

Rules: Deep tank blue `#1a4a7a` is the omnipresent dominant — at least 50% of any viewport. Glass edge `#a0c0c8e0` defines every structural border. Dark surroundings `#0a1628` frame the illuminated water panels. Coral orange provides warm contrast against the cool blue. Jellyfish pink is ethereal and ambient. Shark gray is dramatic and sparse. The palette creates the feeling of standing in a dark hallway illuminated only by massive water-filled viewing panels.

Secondary tints for gradients and depth:

| Tint | Hex | Use |
|---|---|---|
| Tank Surface | `#2070a0` | Shallow water, top of tanks |
| Tank Deep | `#0e2e50` | Deep water, bottom of tanks |
| Glass Highlight | `#c0dce8` | Bright glass edge, light refraction |
| Jelly Pale | `#f0d0e0` | Jellyfish peak glow |
| Coral Dark | `#c06020` | Coral shadow |
| Rock Light | `#9a9a8a` | Rock highlight, wet surface |
| Water Caustic | `rgba(64,160,208,0.1)` | Dappled light patterns |

## Typography Recommendations

- **Display:** Inter Tight, Sora, or Outfit (clean, wide, modern — like the typography on exhibit signage at a world-class aquarium).
- **Body:** Inter, DM Sans (clean readable sans-serif for exhibit information and wayfinding).
- **Data:** JetBrains Mono (water temperature, depth readings, species catalog numbers).
- **Labels:** `font-medium text-xs tracking-widest uppercase text-[#a0c8e0]/60` (exhibit labels, section markers — like the engraved signage on aquarium walls).
- **Species names:** `font-serif italic text-sm text-[#e0a0c0]` (italic scientific names for jellyfish and marine species — like *Aurelia aurita* for moon jellyfish).
- Typography should feel clean, modern, and institutional — like the wayfinding system at a major aquarium. Display type is wide and authoritative. Body type is clean and readable in low light. The tone is educational wonder.

## Component Architecture Pattern

Public aquarium interfaces follow a dark-hallway-with-illuminated-tanks architecture — the surrounding space is dark, the water panels glow.

**Depth layers (back to front):**

1. **Environment layer** — the dark visitor hallway. Background gradient of deep navy-to-black. Pure atmosphere, never interactive.
2. **Tank layer** — massive illuminated water panels. The viewing windows, jellyfish tanks, touch pools. Primary content surfaces that glow against the dark.
3. **Life layer** — marine life silhouettes inside the tanks. Sharks, jellyfish, coral, penguins. The inhabitants of the water.
4. **Structure layer** — rock formations, tunnel arches, glass edges. The physical architecture of the aquarium building.
5. **Interactive layer** — buttons, inputs, navigation. Glass-edged elements that sit on the dark hallway walls.

**Component composition:**

```
AquariumEnvironment (dark bg)
  ├─ LargeViewingWindow (primary content tank)
  │   ├─ SharkSilhouette (background watermark)
  │   ├─ CoralDisplay (bottom decoration)
  │   └─ ExhibitInfoCard (species information)
  ├─ UnderwaterTunnel (feature showcase)
  ├─ JellyfishTank (ambient section divider)
  ├─ TouchPool (interactive panel)
  └─ PenguinRock (sidebar / stand)
```

**State patterns:**

- Default: dark surroundings, illuminated blue water panels, marine silhouettes.
- Hover: water glow intensifies — `shadow-[0_0_20px_rgba(64,160,208,0.35)]` on the panel edge. The tank gets brighter as you approach, like stepping closer to the viewing window.
- Active: `active:scale-[0.98]` with a subtle water-light pulse — brief compression like the water responding to touch.
- Disabled: `opacity-30 saturate-50` — tank light dims, exhibit closed.
- Loading: jellyfish float animation plays — the translucent bell pulses gently to signal waiting.

## Interaction Rules

1. **Hover brings you closer to the tank.** When a user hovers a panel, it glows brighter and the glass edge becomes more visible — like walking toward the viewing window. Use `box-shadow` with `rgba(64,160,208,0.2)` to `rgba(64,160,208,0.35)` transitions. The effect is approaching light, not a digital glow. Never use white flashes or aggressive brightness changes.

2. **Transitions are slow and immersive.** Use `duration-400` to `duration-500` as the baseline. Water is heavy and slow. `transition-all duration-400 ease-in-out` for panel transitions. `duration-300` for button feedback. Fast transitions (`duration-100`) break the immersive underwater atmosphere. The visitor is moving through water-weight space.

3. **Scrolling moves through the aquarium.** As users scroll, different exhibits slide into view — each viewing window reveals a new marine environment. Parallax depth is essential: the dark environment layer stays fixed, tank panels move at normal speed, marine life silhouettes inside tanks move slightly slower (parallax within the tank). This creates the sensation of walking down the aquarium hallway past successive exhibits.

4. **Panels are viewing windows, not cards.** Treat every content container as a massive glass panel filled with water. They should have glass edge borders (`border-[#a0c8e0]/40`), water gradients inside, and ambient caustic light. Never use plain rounded rectangles with solid background colors. Every surface should feel like you are looking through thick glass into water.

5. **Focus rings are water-light.** Keyboard focus must use `focus:ring-2 focus:ring-[#40a0d0]/50 focus:ring-offset-2 focus:ring-offset-[#0a1628]` — blue water-light ring on dark offset. The focus indicator should look like light refracting through the glass edge.

6. **Click feedback is a water ripple.** On click, elements briefly compress (`active:scale-[0.98]`) with a subtle shadow pulse, then spring back. The motion should feel like disturbing the water surface. `transition-transform duration-200 active:scale-[0.98]`.

7. **Navigation glows like exhibit signage.** Active nav items glow with `text-[#40a0d0] shadow-[0_0_8px_rgba(64,160,208,0.3)]` — like illuminated exhibit signs in the dark hallway. Inactive nav items are `text-[#a0c8e0]/40` — dim, like unlit signs you have passed.

8. **Tooltips appear beside the tank.** Tooltips appear to the right or below the trigger, never above (the tank extends upward). The tooltip is a small dark panel with glass edge: `bg-[#0e1e34]/90 backdrop-blur-md border border-[#a0c8e0]/20 rounded-lg text-[#c0d8e8] text-sm`.

## Reusable Tailwind Tokens

- Aquarium environment: `bg-gradient-to-b from-[#0a1628] via-[#0e1e34] to-[#060e1a]`.
- Viewing window: `bg-gradient-to-b from-[#2070a0] via-[#1a4a7a] to-[#0e2e50] rounded-xl border-2 border-[#a0c8e0]/40 shadow-[0_0_40px_rgba(26,74,122,0.3)]`.
- Glass edge: `border-[#a0c8e0]/40` (structural border) or `border-l-[3px] border-l-[#40a0d0]` (accent stripe).
- Caustic light: `bg-[radial-gradient(ellipse_at_30%_20%,rgba(64,160,208,0.1)_0%,transparent_50%)]`.
- Water button: `bg-gradient-to-b from-[#40a0d0] to-[#1a4a7a] rounded-lg border border-[#a0c8e0]/40 shadow-[0_3px_12px_rgba(26,74,122,0.3)]`.
- Exhibit card: `bg-[#0e1e34]/80 backdrop-blur-md rounded-lg border border-[#a0c8e0]/20 border-l-[3px] border-l-[#40a0d0]`.
- Jellyfish bell: `bg-gradient-to-b from-[#e0a0c0]/30 to-[#e0a0c0]/10 rounded-[50%_50%_40%_40%/60%_60%_40%_40%] backdrop-blur-sm border border-[#e0a0c0]/15`.
- Jellyfish tentacle: `w-px bg-gradient-to-b from-[#e0a0c0]/25 to-transparent`.
- Shark silhouette: SVG path in `#5a6a6a` at `opacity-[0.08]` with slow drift animation.
- Coral base: SVG reef gradient in `#e08040/60` with branching strokes.
- Touch pool: `bg-gradient-to-b from-[#40a0d0]/20 to-[#1a4a7a]/30 rounded-2xl border border-[#a0c8e0]/30`.
- Rock formation: `bg-gradient-to-br from-[#7a7a6a] to-[#5a5a4a] rounded-2xl border border-[#4a4a3a]`.
- Tunnel arch: `rounded-t-[50%] bg-[#1a4a7a]/20 border border-[#a0c8e0]/30` with vertical rib lines.
- Dark exhibit text: `text-[#c0d8e8]` (body), `text-[#a0c8e0]` (secondary), `text-[#40a0d0]` (accent).
- Scientific name: `font-serif italic text-sm text-[#e0a0c0]`.
- Aquarium glow: `shadow-[0_0_20px_rgba(26,74,122,0.3)]` (ambient tank glow).

## Quality Checklist

- Dark background (navy-to-black) is the dominant environment — the visitor space is dim.
- At least one massive water viewing panel (min-h-[400px] or min-h-[50vh]) with water gradient.
- Glass edge accents (`#a0c8e0`) visible on structural borders and panel edges.
- At least one marine life silhouette or illustration (shark, jellyfish, coral, or penguin).
- Jellyfish tank element with floating bell shapes and tentacle animations.
- Coral display at the bottom of at least one section.
- Touch pool surface with ripple rings on at least one interactive panel.
- Water-light caustic patterns appear on at least one major surface.
- Typography is clean and modern (Inter Tight, Sora, or Outfit for headings).
- The aesthetic reads as a public aquarium / oceanarium / marine exhibit.
- Every panel feels like you are looking through thick glass into water.
- The overall mood is immersive wonder — dark surroundings, glowing blue water panels.
- At least one scientific marine species name in italic serif.
- Color palette is dominated by deep blues with glass-edge accents.

## Anti-Patterns

- Bright or light backgrounds (public aquariums are dark hallways with illuminated tanks).
- Small fish-tank-sized panels (the public aquarium is architectural — panels must be massive).
- Missing glass edge accents (the glass is the interface between viewer and ocean — it must be visible).
- Opaque solid-color panels without water gradients (every surface is water-filled glass).
- Missing marine life (an empty aquarium is just a dark room with blue walls).
- Fast mechanical transitions under 200ms (water is heavy and slow — transitions should feel submerged).
- Neon or electric accent colors (aquarium light is diffused through water, not neon signage).
- Warm dominant palettes (the aquarium is cool blue with sparse warm coral accents).
- Flat untextured surfaces (water has caustics, glass has edges, rock has strata, sand has grain).
- Missing the dark-environment framing (the dark hallway makes the tanks glow — without darkness, there is no aquarium wonder).
- Cluttered dense layouts (the aquarium experience is spacious — each exhibit has room to breathe).
- Rounded pill-shaped buttons for primary actions (aquarium buttons are rectangular with rounded corners — glass panels, not bubbles).
- Missing the jellyfish tank (these translucent floating organisms are the signature ambient element).
- Harsh drop shadows (aquarium shadows are diffuse and deep — `rgba(10,14,26,0.3)` with large blur radius, not sharp black).
- Light mode or white backgrounds anywhere (the entire public aquarium is dark-mode native).

## Accessibility Considerations

- **Contrast ratios.** Body text at `#c0d8e8` on `#0e1e34` yields approximately 9.5:1 contrast ratio — pass AAA. Exhibit labels at `#a0c8e0` on `#0a1628` yields approximately 7.8:1 — pass AAA. Water-light accent `#40a0d0` on `#0a1628` yields approximately 5.8:1 — pass AA for normal text, AAA for large text. Coral orange `#e08040` on `#0e1e34` yields approximately 5.2:1 — use for large text or decorative purposes.

- **Focus visibility.** Water-light blue focus rings (`#40a0d0`) against the dark offset background (`#0a1628`) provide strong visual contrast for keyboard users. `ring-offset-2 ring-offset-[#0a1628]` ensures the ring separates clearly from both the element and the dark environment.

- **Reduced motion.** All jellyfish float animations, shark drift, water caustic shimmer, and touch-pool ripple effects must respect `prefers-reduced-motion: reduce`. Replace animations with static end-states. `@keyframes jelly-float` becomes `animate-none` with jellyfish at their resting position. Shark silhouette becomes stationary. Ripple rings become static concentric circles.

- **Color independence.** Never use jellyfish pink or coral orange alone to indicate interactive state. Pair color changes with structural changes — border weight, text weight, icon change, or size shift. A user who cannot distinguish pink from blue will still understand the state change.

- **Touch targets.** All interactive elements must meet the 44x44px minimum touch target. Viewing window panels, touch pool surfaces, jellyfish tank navigation, and penguin rock buttons must all accommodate this. The dark environment means users may have difficulty finding touch targets — generous padding (`px-8 py-3` minimum) and visible glass edges help locate interactive elements.

- **Semantic HTML.** Large viewing windows should use `<section>` with `aria-label` describing the exhibit. Navigation should use `<nav>`. Exhibit information cards should use `<article>`. Decorative SVGs (shark silhouette, coral display, jellyfish tentacles) must have `aria-hidden="true"`. Jellyfish tank containers that hold meaningful content need appropriate ARIA roles.

- **Text alternatives.** Decorative elements (shark silhouettes, coral SVGs, jellyfish float animations, touch pool ripples) must have `aria-hidden="true"` or `role="presentation"`. Marine life illustrations that convey exhibit information must have `aria-label` descriptions (e.g., "Hammerhead shark silhouette").

- **Low-light viewing.** Public aquarium interfaces are viewed in dark environments. Text contrast must be high enough for low-light reading. Avoid `#a0c8e0/40` opacity text for any informational content — it is only for decorative labels. All exhibit information text must be full opacity.

- **Animation seizure safety.** Jellyfish float animations, shark drift, and water caustic shimmer must stay below 3 flashes per second. The recommended 6-20 second cycles are well within safe limits. Touch pool ripple animations must not create rapid concentric flashing — keep ring expansion slow (2s+ cycle).

- **Screen reader navigation.** The aquarium's exhibit-based layout should use proper heading hierarchy (`h1` for the aquarium name, `h2` for exhibit sections, `h3` for species). The dark environment with glowing panels creates a natural visual hierarchy that should be mirrored in the document structure. Each viewing window or tank should be a distinct landmark region.

- **Keyboard navigation.** The aquarium hallway metaphor should translate to linear keyboard navigation — Tab moves between exhibits in order, like walking down the hallway. Arrow keys can navigate within an exhibit (species cards, information tabs). Escape closes any modal exhibit detail panels, returning to the hallway view.
