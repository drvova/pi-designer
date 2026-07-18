---
name: clocktower-bell-ui
description: Build clocktower bell UI components (bell bronze surface, tower clock face, pendulum swing, rope pull, bell sound wave, stone tower, hour hand silhouette) with massive bronze bell surfaces, tower architecture, and the resonant marking of time by bells. Trigger this skill when the user asks for clocktower design, bell tower UI, bronze bell interface, tower clock face, pendulum bell animation, rope pull bell, bell sound wave effect, stone tower masonry, clocktower architecture, or resonant time-marking interfaces.
---

# Clocktower Bell UI

Use this skill to design and build interfaces inspired by a stone clocktower's great bronze bell: massive rounded bell surfaces with visible clappers, tower clock faces reading time to the village below, slow rhythmic pendulum swings marking hours, rope-pull mechanisms for manual bell ringing, concentric sound wave arcs radiating from a struck bell, rough-cut stone tower walls with masonry texture, and bold hour-hand silhouettes against the sky. Every surface should feel like aged bronze, weathered stone, and the deep resonant weight of a bell that has rung for centuries.

## Non-Negotiable Foundations

- The clocktower is monumental: a stone tower rising against the sky with a massive bronze bell visible through an arched opening, a large outdoor clock face, and rope mechanisms trailing downward. The bell dominates -- it is the largest, heaviest, most present element in the interface.
- Materials are monumental and weathered: cast bronze (dark gold-brown with green patina), rough-cut stone (gray-brown masonry with mortar lines), wrought iron (black hardware and mounting brackets), thick hemp rope (brown twisted fibers), and open sky visible behind the tower.
- Colors are bronze gold, stone gray-brown, tower sky blue, clock face white, and iron black. The palette carries the weight and age of centuries-old tower architecture exposed to wind and rain.
- Motion is slow and powerful: the bell swings with heavy momentum, pendulums mark hours with deliberate rhythm, sound waves radiate outward in concentric arcs after a toll, and rope pulls respond with weighted resistance. Nothing in a clocktower moves quickly -- mass dictates pace.
- Typography blends monumental stone-carved letterforms with clock-face numerals designed for long-distance readability from the ground below.
- The aesthetic is heavy, enduring, and resonant -- everything should feel like it weighs tons, has stood for centuries, and announces time to an entire village with every toll.

## Core Material Recipes

### 1) Bronze Bell Surface (the foundational element)

The signature clocktower element: a massive rounded bronze bell with visible clapper, cast surface texture, and green patina accents. This is the largest and most present visual element.

- Bell body: `bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-b-[50%] rounded-t-lg border-2 border-t-[#aa8a5a] border-l-[#7a5a2a] border-r-[#7a5a2a] border-b-[#5a3a1a] shadow-[inset_0_4px_12px_rgba(170,138,90,0.3),0_8px_32px_rgba(0,0,0,0.5)]`.
- Bell lip (wider base rim): `h-3 bg-gradient-to-b from-[#aa8a5a] to-[#8a6a3a] rounded-b-full border-b-2 border-[#5a3a1a] shadow-[0_2px_8px_rgba(0,0,0,0.3)]`.
- Patina spots: scattered small `bg-[#5a7a5a]/30 rounded-full` patches on the bell surface to suggest age and weathering.
- Clapper: `absolute bottom-[15%] left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-b from-[#5a4a3a] to-[#3a2a1a] rounded-full border border-[#4a3a2a] shadow-[0_2px_8px_rgba(0,0,0,0.4)]`.

```html
<div class="relative flex flex-col items-center">
  <!-- Bell crown (top loop for hanging) -->
  <div class="w-8 h-6 border-4 border-b-0 border-[#6a4a2a] rounded-t-full mb-[-2px]"></div>
  <!-- Bell body -->
  <div class="w-48 h-56 bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-b-[50%] rounded-t-lg border-2 border-t-[#aa8a5a] border-l-[#7a5a2a] border-r-[#7a5a2a] border-b-[#5a3a1a] shadow-[inset_0_4px_12px_rgba(170,138,90,0.3),0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden">
    <!-- Patina weathering spots -->
    <div class="absolute top-[20%] left-[15%] w-8 h-6 bg-[#5a7a5a]/20 rounded-full blur-[2px]"></div>
    <div class="absolute top-[35%] right-[20%] w-6 h-5 bg-[#5a7a5a]/15 rounded-full blur-[2px]"></div>
    <div class="absolute bottom-[30%] left-[30%] w-10 h-4 bg-[#5a7a5a]/18 rounded-full blur-[3px]"></div>
    <!-- Cast texture lines -->
    <div class="absolute top-[15%] left-0 right-0 h-px bg-[#aa8a5a]/20"></div>
    <div class="absolute top-[50%] left-0 right-0 h-px bg-[#aa8a5a]/15"></div>
    <!-- Sound resonance highlight -->
    <div class="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-t from-[#aa8a5a]/20 to-transparent rounded-full"></div>
    <!-- Clapper -->
    <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-4 h-20 bg-gradient-to-b from-[#5a4a3a] to-[#3a2a1a] rounded-full border border-[#4a3a2a] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"></div>
    <div class="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#5a4a3a] to-[#3a2a1a] border-2 border-[#4a3a2a] shadow-[0_2px_6px_rgba(0,0,0,0.5)]"></div>
  </div>
  <!-- Bell lip rim -->
  <div class="w-52 h-3 bg-gradient-to-b from-[#aa8a5a] to-[#8a6a3a] rounded-b-full border-b-2 border-[#5a3a1a] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"></div>
</div>
```

### 2) Tower Clock Face (large outdoor clock)

A massive clock face mounted on the stone tower exterior, visible from far below. Oversized Roman numerals, thick iron hands, and a weathered white dial.

- Clock dial: `w-48 h-48 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#d8d8d8] border-8 border-[#6a4a2a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.3)]`.
- Stone mounting ring: `absolute inset-[-16px] rounded-full border-4 border-[#8a8a7a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`.
- Hour numerals: `absolute font-serif text-[#1a1a1a] text-xl font-bold` positioned in a circle.
- Hour hand: `absolute bottom-1/2 left-1/2 w-[5px] h-[28%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2`.
- Minute hand: `absolute bottom-1/2 left-1/2 w-[3px] h-[38%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2`.
- Center cap: `absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#6a4a2a] border-2 border-[#1a1a1a] -translate-x-1/2 -translate-y-1/2 z-10`.

```html
<div class="relative w-56 h-56 mx-auto">
  <!-- Stone mounting ring -->
  <div class="absolute inset-[-16px] rounded-full border-4 border-[#8a8a7a]/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_8px_rgba(0,0,0,0.15)]"></div>
  <!-- Clock dial -->
  <div class="w-56 h-56 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#d8d8d8] border-8 border-[#6a4a2a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.3)] relative">
    <!-- Hour markers -->
    <span class="absolute top-[8%] left-1/2 -translate-x-1/2 font-serif text-[#1a1a1a] text-2xl font-bold">XII</span>
    <span class="absolute top-[22%] right-[10%] font-serif text-[#1a1a1a] text-lg font-semibold">I</span>
    <span class="absolute top-1/2 right-[5%] -translate-y-1/2 font-serif text-[#1a1a1a] text-lg font-semibold">III</span>
    <span class="absolute bottom-[22%] right-[10%] font-serif text-[#1a1a1a] text-lg font-semibold">V</span>
    <span class="absolute bottom-[8%] left-1/2 -translate-x-1/2 font-serif text-[#1a1a1a] text-2xl font-bold">VI</span>
    <span class="absolute bottom-[22%] left-[10%] font-serif text-[#1a1a1a] text-lg font-semibold">VII</span>
    <span class="absolute top-1/2 left-[5%] -translate-y-1/2 font-serif text-[#1a1a1a] text-lg font-semibold">IX</span>
    <span class="absolute top-[22%] left-[10%] font-serif text-[#1a1a1a] text-lg font-semibold">XI</span>
    <!-- Hour hand pointing to 3 -->
    <div class="absolute bottom-1/2 left-1/2 w-[5px] h-[28%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2 rotate-90"></div>
    <!-- Minute hand pointing to 12 -->
    <div class="absolute bottom-1/2 left-1/2 w-[3px] h-[38%] bg-[#1a1a1a] origin-bottom rounded-full -translate-x-1/2 rotate-0"></div>
    <!-- Center cap -->
    <div class="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#6a4a2a] border-2 border-[#1a1a1a] -translate-x-1/2 -translate-y-1/2 z-10"></div>
    <!-- Minute tick marks around edge -->
    <div class="absolute inset-3 rounded-full border border-[#1a1a1a]/10"></div>
  </div>
</div>
```

### 3) Bell Swing Animation

The bell swings as a whole unit with heavy, slow momentum -- the physical weight of bronze dictating the motion. This is not a light pendulum; it is a multi-ton bell responding to a clapper strike.

```css
@keyframes clocktower-bell-swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}
.clocktower-bell-swing {
  transform-origin: top center;
  animation: clocktower-bell-swing 4s cubic-bezier(0.33, 0, 0.67, 1) infinite;
}
```

Bell element (the entire bell swings, not just the clapper):
```html
<div class="clocktower-bell-swing origin-top flex flex-col items-center">
  <div class="w-8 h-6 border-4 border-b-0 border-[#6a4a2a] rounded-t-full mb-[-2px]"></div>
  <div class="w-40 h-48 bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-b-[50%] rounded-t-lg border-2 border-t-[#aa8a5a] border-l-[#7a5a2a] border-r-[#7a5a2a] border-b-[#5a3a1a] shadow-[inset_0_4px_12px_rgba(170,138,90,0.3),0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden">
    <!-- Patina, texture, clapper as above -->
    <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-3.5 h-16 bg-gradient-to-b from-[#5a4a3a] to-[#3a2a1a] rounded-full border border-[#4a3a2a]"></div>
    <div class="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#3a2a1a] border border-[#4a3a2a]"></div>
  </div>
  <div class="w-44 h-2.5 bg-gradient-to-b from-[#aa8a5a] to-[#8a6a3a] rounded-b-full border-b-2 border-[#5a3a1a]"></div>
</div>
```

The 4-second cycle with `cubic-bezier(0.33, 0, 0.67, 1)` creates the heavy start-stop of a massive bell -- fast through center, slow at the extremes where gravity fights momentum.

### 4) Bell Sound Wave Animation

Concentric arcs radiating outward from the bell after a toll -- the visual representation of sound and resonance. These arcs expand, fade, and repeat.

```html
<!-- Sound waves emanating from bell -->
<div class="absolute inset-0 pointer-events-none overflow-hidden">
  <div class="absolute top-[30%] left-1/2 -translate-x-1/2">
    <!-- Wave arc 1 -->
    <div class="clocktower-sound-wave absolute w-32 h-32 rounded-full border-2 border-[#c4a043]/40 top-[-16px] left-[-16px]"></div>
    <!-- Wave arc 2 -->
    <div class="clocktower-sound-wave absolute w-48 h-48 rounded-full border-2 border-[#c4a043]/30 top-[-24px] left-[-24px]" style="animation-delay: 0.4s"></div>
    <!-- Wave arc 3 -->
    <div class="clocktower-sound-wave absolute w-64 h-64 rounded-full border-2 border-[#c4a043]/20 top-[-32px] left-[-32px]" style="animation-delay: 0.8s"></div>
    <!-- Wave arc 4 -->
    <div class="clocktower-sound-wave absolute w-80 h-80 rounded-full border-2 border-[#c4a043]/10 top-[-40px] left-[-40px]" style="animation-delay: 1.2s"></div>
  </div>
</div>
```

```css
@keyframes clocktower-sound-wave {
  0% { transform: scale(0.6); opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0; }
}
.clocktower-sound-wave {
  animation: clocktower-sound-wave 2.5s ease-out infinite;
}
```

Each successive arc starts slightly later via `animation-delay`, creating the ripple-outward effect of sound propagation. The outermost arcs are larger and more transparent.

### 5) Stone Tower Wall (masonry texture)

Rough-cut stone blocks with visible mortar lines -- the structural surface of the tower that holds everything.

- Stone block: `bg-gradient-to-br from-[#9a9a8a] to-[#7a7a6a] border border-[#6a6a5a]`.
- Mortar lines: `bg-[#a8a898]` gaps between stone blocks.
- Weathering: subtle `bg-[#5a5a4a]/10` patches for age and rain stains.

```html
<!-- Stone tower wall with masonry pattern -->
<div class="w-full bg-[#8a8a7a] p-1 relative">
  <!-- Row 1: full blocks -->
  <div class="flex gap-1 mb-1">
    <div class="flex-1 h-12 bg-gradient-to-br from-[#9a9a8a] to-[#8a8a7a] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#949484] to-[#848474] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#9e9e8e] to-[#8a8a78] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#969686] to-[#868676] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
  </div>
  <!-- Row 2: offset half-blocks (running bond pattern) -->
  <div class="flex gap-1 mb-1">
    <div class="w-[40%] h-12 bg-gradient-to-br from-[#989888] to-[#888878] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#9c9c8c] to-[#8c8c7c] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="w-[40%] h-12 bg-gradient-to-br from-[#929282] to-[#828272] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
  </div>
  <!-- Row 3: full blocks again -->
  <div class="flex gap-1 mb-1">
    <div class="flex-1 h-12 bg-gradient-to-br from-[#9a9a8a] to-[#8a8a78] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#969686] to-[#868676] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#9c9c8c] to-[#8c8c7c] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
    <div class="flex-1 h-12 bg-gradient-to-br from-[#949484] to-[#848474] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]"></div>
  </div>
  <!-- Rain stain weathering -->
  <div class="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-[#5a5a4a]/20 via-[#5a5a4a]/10 to-transparent"></div>
  <div class="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-[#5a5a4a]/15 via-[#5a5a4a]/8 to-transparent"></div>
</div>
```

The running bond pattern (offset blocks) is the authentic masonry layout. Each block has a subtle inset shadow that simulates the depth of cut stone.

### 6) Rope Pull Mechanism

A thick twisted hemp rope hanging from the bell mechanism, with a pull ring at the bottom. The rope is the user's connection to the bell.

- Rope strand: `bg-gradient-to-r from-[#7a5a2a] via-[#6a4a2a] to-[#5a3a1a] rounded-full` with twisted texture via repeating `bg-[linear-gradient(...)]`.
- Pull ring: `w-12 h-12 rounded-full border-4 border-[#6a4a2a] bg-transparent shadow-[0_2px_8px_rgba(0,0,0,0.3)]`.

```html
<div class="flex flex-col items-center">
  <!-- Rope attachment point -->
  <div class="w-6 h-3 bg-[#6a4a2a] rounded-t-sm border-t-2 border-l-2 border-r-2 border-[#5a3a1a]"></div>
  <!-- Rope strand with twist texture -->
  <div class="w-3 h-40 bg-gradient-to-r from-[#7a5a2a] via-[#6a4a2a] to-[#5a3a1a] rounded-full relative overflow-hidden shadow-[1px_0_2px_rgba(0,0,0,0.2)]">
    <!-- Twist marks -->
    <div class="absolute top-2 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[5deg]"></div>
    <div class="absolute top-6 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[-5deg]"></div>
    <div class="absolute top-10 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[5deg]"></div>
    <div class="absolute top-14 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[-5deg]"></div>
    <div class="absolute top-18 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[5deg]"></div>
    <div class="absolute top-22 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[-5deg]"></div>
    <div class="absolute top-26 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[5deg]"></div>
    <div class="absolute top-30 left-0 right-0 h-0.5 bg-[#8a6a3a]/40 rotate-[-5deg]"></div>
  </div>
  <!-- Pull ring -->
  <div class="w-12 h-12 rounded-full border-4 border-[#6a4a2a] bg-transparent shadow-[0_2px_8px_rgba(0,0,0,0.3)] mt-[-2px]"></div>
</div>
```

### 7) Tower Arched Opening

The stone archway through which the bell is visible -- a Gothic pointed arch or Romanesque rounded arch carved into the tower wall.

```html
<!-- Stone arch opening for bell visibility -->
<div class="relative w-56 h-64 mx-auto">
  <!-- Arch shape (cutout into stone) -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#8a8a7a] via-[#7a7a6a] to-[#6a6a5a] border-2 border-[#5a5a4a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.3)]" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 8% 8%, 8% 85%, 92% 85%, 92% 8%, 92% 8%, 100% 0)"></div>
  <!-- Inner arch opening (dark void behind bell) -->
  <div class="absolute top-4 left-8 right-8 bottom-0 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] rounded-t-full border-t border-[#3a3a3a]">
    <!-- Bell visible inside arch -->
    <div class="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-b-[50%] rounded-t-sm border border-[#7a5a2a] shadow-[inset_0_4px_8px_rgba(170,138,90,0.3)]"></div>
  </div>
  <!-- Arch keystone -->
  <div class="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-[#a0a090] to-[#8a8a7a] border border-[#7a7a6a] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" style="clip-path: polygon(15% 100%, 0% 0%, 100% 0%, 85% 100%)"></div>
</div>
```

### 8) Clocktower Button

Heavy iron-mounted button with stone texture and bronze accents.

- `bg-gradient-to-b from-[#8a8a7a] to-[#7a7a6a] text-[#1a1a1a] font-serif font-semibold px-8 py-3 border-2 border-t-[#9a9a8a] border-b-[#5a5a4a] rounded-lg shadow-[0_4px_0_#5a5a4a,inset_0_1px_0_rgba(255,255,255,0.15)] hover:translate-y-0.5 hover:shadow-[0_2px_0_#5a5a4a] active:shadow-none transition-all duration-300`.

### 9) Hour Hand Silhouette

A bold, oversized clock hand silhouette used as a decorative or section divider element -- the hand shape as a standalone motif.

```html
<!-- Large decorative hour hand silhouette -->
<svg viewBox="0 0 30 120" class="w-8 h-24 text-[#1a1a1a]">
  <path d="M15,0 L18,8 L17,100 Q17,115 15,120 Q13,115 13,100 L12,8 Z" fill="currentColor"/>
  <circle cx="15" cy="8" r="4" fill="currentColor"/>
</svg>
```

Use as a decorative element: `text-[#1a1a1a] opacity-20 rotate-45` for subtle background motifs, or `text-[#6a4a2a]` for interactive directional indicators.

### 10) Rope Pull Animation

The rope responds to interaction with weighted resistance -- pulled down and slowly returning, like the physical effort of ringing a great bell.

```css
@keyframes clocktower-rope-pull {
  0% { transform: translateY(0); }
  15% { transform: translateY(24px); }
  40% { transform: translateY(20px); }
  100% { transform: translateY(0); }
}
.clocktower-rope-pull {
  animation: clocktower-rope-pull 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
}
```

The rope descends quickly (the pull), decelerates (the bell catching), and returns slowly (the heavy bell swinging back and the rope slackening).

## Color Palette System

### Core Clocktower Palette

| Color | Hex | Material | Role |
|---|---|---|---|
| Bell Bronze | `#8a6a3a` | Cast bronze | Primary bell surface, dominant material |
| Bronze Highlight | `#9a7a4a` | Lit bronze | Bell upper surface, highlights |
| Bronze Deep | `#6a4a2a` | Shadowed bronze | Bell base, hardware, rope rings |
| Bell Toll Gold | `#c4a043` | Polished bronze | Sound wave arcs, toll indicators, accents |
| Bronze Dark | `#5a3a1a` | Aged bronze shadow | Deep shadows, lip rims |
| Tower Stone | `#8a8a7a` | Cut stone | Tower walls, primary architectural surface |
| Stone Light | `#9a9a8a` | Lit stone | Stone block highlights, upper surfaces |
| Stone Mortar | `#a8a898` | Mortar | Grout lines between stone blocks |
| Stone Dark | `#6a6a5a` | Shadowed stone | Deep recesses, arch interiors |
| Clock Face White | `#f0f0f0` | Painted dial | Clock face background |
| Clock Face Shadow | `#d8d8d8` | Aged white | Clock face edge, weathered surface |
| Clock Hands Black | `#1a1a1a` | Iron hands | Clock hands, numerals, iron hardware |
| Iron Dark | `#3a3a3a` | Wrought iron | Mounting brackets, structural iron |
| Rope Brown | `#6a4a2a` | Hemp rope | Pull rope, cordage |
| Rope Light | `#7a5a2a` | Lit rope | Rope highlights, twist marks |
| Sky Tower Blue | `#6aa0cc` | Open sky | Background sky behind tower |
| Sky Deep | `#4a80aa` | Upper sky | Sky gradient darker tone |
| Patina Green | `#5a7a5a` | Verdigris | Bronze weathering, age spots |
| Keystone Light | `#a0a090` | Carved stone | Arch keystone, decorative stone |

Rules: Bell bronze and tower stone are the two dominant material surfaces. The palette should feel like a medieval clocktower standing against a partly cloudy sky -- monumental stone, weathered bronze, and open air. Bell toll gold is reserved for sound wave effects and active toll indicators. Sky blue appears only as background behind or above the tower structure. Patina green appears only as subtle weathering on bronze surfaces.

## Typography Recommendations

Clocktower typography blends monumental carved letterforms with high-visibility clock-face design:

- **Display headings:** Cinzel, Playfair Display, or EB Garamond (stone-carved monumentality).
- **Clock face numerals:** Roman numerals in Cinzel Black or bold Arabic numerals in tabular-lining figures designed for long-distance readability.
- **Body text:** Lora, Source Serif 4, or Crimson Text (readable serif with weight).
- **Tower inscriptions:** `font-serif font-bold text-2xl tracking-[0.15em] uppercase text-[#1a1a1a]` for carved stone text on tower surfaces.
- **Numerical data:** Tabular figures for clock times (`font-variant-numeric: tabular-nums`).
- **Sound indicators:** `font-serif italic text-lg text-[#c4a043]` for bell toll labels and sound descriptions.
- Avoid thin, light, or ultra-modern sans-serif fonts. The clocktower aesthetic demands heavy, carved, enduring letterforms that match the weight of stone and bronze.

## Component Architecture Pattern

1. Sky background (open blue above and around the tower).
2. Stone tower wall (masonry block surface, the structural foundation).
3. Arched bell opening (Gothic or Romanesque arch cut into stone).
4. Bronze bell surface (massive, dominant, centered in the arch).
5. Tower clock face (large outdoor dial mounted on stone).
6. Rope pull mechanism (trailing downward from the bell).
7. Sound wave arcs (radiating outward from bell after toll).
8. Hour hand silhouettes (decorative motifs and directional elements).
9. Iron hardware (brackets, mounts, pivot points).

The tower rises from the bottom of the viewport. The bell occupies the visual center. The clock face sits above or beside the bell. Rope descends below. Sound waves expand outward from the bell into the surrounding space.

## Interaction Rules

- Default state: bell is still, sound waves are dormant, sky is calm, stone is weathered.
- Toll triggered (hover/click on bell or rope): bell begins swinging, sound waves radiate outward, ambient glow increases around the bell.
  - `hover:shadow-[0_0_40px_rgba(196,160,67,0.3)]` on the bell body when toll is active.
- Rope pull interaction: rope descends with weighted animation on click/drag, bell swings in response.
  - `active:translate-y-6 transition-transform duration-700 ease-out` on the rope element.
- Hover on clock face: hands tick forward (hour hand advances 30 degrees per hover cycle).
  - `hover:rotate-[increment] transition-transform duration-300` on hand elements.
- Sound waves: activate only on toll event, not continuously. Radiate at 2.5s intervals with staggered delays.
- Stone wall: static, immovable, permanent. Never animates. The stone is the constant against which all motion is measured.
- Transitions: `transition-all duration-700 ease-out` for bell movement (heavy mass), `duration-300` for UI elements (buttons, hands).
- Focus: bronze glow ring `focus:ring-2 focus:ring-[#c4a043]/60 focus:ring-offset-2 focus:ring-offset-[#8a8a7a]`.
- Sound wave expansion: `scale(0.6)` to `scale(1.4)` with opacity fade over 2.5s.

## Reusable Tailwind Tokens

- Bronze bell body: `bg-gradient-to-b from-[#9a7a4a] via-[#8a6a3a] to-[#6a4a2a] rounded-b-[50%] rounded-t-lg border-2 border-t-[#aa8a5a] border-l-[#7a5a2a] border-r-[#7a5a2a] border-b-[#5a3a1a] shadow-[inset_0_4px_12px_rgba(170,138,90,0.3),0_8px_32px_rgba(0,0,0,0.5)]`
- Bell lip rim: `h-3 bg-gradient-to-b from-[#aa8a5a] to-[#8a6a3a] rounded-b-full border-b-2 border-[#5a3a1a]`
- Clock face dial: `w-56 h-56 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#d8d8d8] border-8 border-[#6a4a2a] shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.3)]`
- Stone block: `bg-gradient-to-br from-[#9a9a8a] to-[#7a7a6a] border border-[#7a7a6a] rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.15)]`
- Rope strand: `w-3 bg-gradient-to-r from-[#7a5a2a] via-[#6a4a2a] to-[#5a3a1a] rounded-full`
- Pull ring: `w-12 h-12 rounded-full border-4 border-[#6a4a2a] bg-transparent shadow-[0_2px_8px_rgba(0,0,0,0.3)]`
- Sound wave arc: `rounded-full border-2 border-[#c4a043]/30` with `clocktower-sound-wave` animation
- Bell swing: `clocktower-bell-swing` keyframe with `cubic-bezier(0.33, 0, 0.67, 1)` at 4s
- Rope pull: `clocktower-rope-pull` keyframe with `cubic-bezier(0.25, 0.46, 0.45, 0.94)` at 2s
- Stone tower wall: `bg-[#8a8a7a] p-1` with masonry block grid children
- Clocktower button: `bg-gradient-to-b from-[#8a8a7a] to-[#7a7a6a] text-[#1a1a1a] font-serif border-2 border-t-[#9a9a8a] border-b-[#5a5a4a] rounded-lg shadow-[0_4px_0_#5a5a4a]`
- Hour hand motif: `text-[#1a1a1a] opacity-20` on hand SVG
- Patina weathering: `bg-[#5a7a5a]/20 rounded-full blur-[2px]` spots
- Sky background: `bg-gradient-to-b from-[#6aa0cc] to-[#4a80aa]`
- Arch opening interior: `bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] rounded-t-full`

## Quality Checklist (must pass)

- At least one massive bronze bell surface with gradient depth, patina spots, and visible clapper.
- At least one tower clock face with Roman numerals, iron hands, and center pivot cap.
- At least one stone tower wall section with masonry block pattern (running bond layout).
- At least one arched opening in stone through which the bell is visible.
- Rope pull mechanism with twisted texture and pull ring present.
- Sound wave arcs radiating from the bell (at least three concentric arcs).
- Bell swing animation present with heavy, slow timing (4s+ cycle).
- Hour hand silhouette decorative element present somewhere in the layout.
- Color palette is bronze gold + stone gray-brown + clock white + sky blue.
- Typography uses heavy, monumental serif fonts (not light or modern sans-serif).
- Stone surfaces have masonry block pattern with mortar lines (not flat gray).
- Bronze surfaces have patina weathering spots and cast texture lines.
- Sky blue appears as background, not as a primary surface color.
- Sound waves animate outward only on toll events (not continuously looping).
- The aesthetic reads as a centuries-old clocktower -- monumental, weathered, resonant.
- Iron hardware (brackets, mounts) is present as structural detail.

## Anti-Patterns

- Flat gray stone without masonry block pattern (stone needs texture, mortar lines, and variation).
- Missing bell swing animation (the swinging bell is the clocktower's heartbeat).
- Missing sound wave animation (sound waves are the visual soul of the bell toll).
- Bright, saturated, or neon colors (the clocktower is weathered bronze, gray stone, and open sky).
- Fast or bouncy animations (everything in a clocktower moves slowly due to massive weight).
- Clean pristine surfaces without patina or weathering (the tower has stood for centuries).
- Modern sans-serif typography alone (needs monumental serif carved letterforms).
- Bell shape that is too small or too subtle (the bell is the LARGEST element in the interface).
- Missing stone arch opening (the bell must be visible through the tower architecture).
- Digital time displays (use analog clock faces with hands and Roman numerals).
- Missing rope pull mechanism (the rope is the user's physical connection to the bell).
- Smooth elastic easing (bell motion needs heavy cubic-bezier that reflects mass).
- Pure black backgrounds (use dark tower stone `#1a1a1a` to `#2a2a2a` or sky blue).
- Sound waves animating continuously without trigger (they should only radiate on toll events).
- Light or thin typography (the clocktower demands weight and monumentality in every letter).

## Accessibility Considerations

- Clock face white (`#f0f0f0`) with black text (`#1a1a1a`) provides excellent contrast (WCAG AAA).
- Tower stone (`#8a8a7a`) with dark text (`#1a1a1a`) provides adequate contrast (verify WCAG AA 4.5:1).
- Bell swing animation must respect `prefers-reduced-motion` (stop the swing at center position and hold).
- Sound wave animations must respect `prefers-reduced-motion` (show static arcs at mid-expansion instead of animating).
- Rope pull animation must respect `prefers-reduced-motion` (show rope at rest position without pull cycle).
- Clock face SVGs need `aria-label` describing the time or function (`aria-label="Clock tower showing 3 o'clock"`).
- Roman numeral labels should have Arabic numeral alternatives for screen readers (`aria-label="3 o'clock"` for "III").
- Decorative elements (patina spots, stone weathering, sound wave arcs, hour hand silhouettes) must be `aria-hidden="true"`.
- Focus states must be visible against both stone and bronze backgrounds (`focus:ring-2 focus:ring-[#c4a043]/60`).
- Touch targets must be adequate despite heavy architectural styling (minimum 44x44px for rope pull ring and clock face).
- Stone texture patterns use CSS or SVG, not background images that could fail to load -- ensure text remains readable if texture is absent.
- The bell swing motion covers rotational movement that could cause vestibular issues -- the amplitude is kept to 6 degrees (subtle) and the speed is slow (4s cycle) to minimize risk.
- Sound wave concentric arcs should not use rapid opacity flickering -- the ease-out timing prevents strobing effects.
