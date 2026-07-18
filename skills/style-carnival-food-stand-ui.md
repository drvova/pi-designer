---
name: carnival-food-stand-ui
description: Build carnival food stand UI components (striped awning, cotton candy, popcorn box, corn dog, funnel cake, neon menu, ticket booth) with carnival bright colors, striped patterns, and the nostalgic fun of a carnival food stand. Trigger this skill when the user asks for carnival design, food stand UI, fairground interface, concession stand, amusement park menu, cotton candy, popcorn box, corn dog, funnel cake, neon signs, ticket booth, midway layout, or carnival-themed interfaces.
---

# Carnival Food Stand UI

Use this skill to design and implement vibrant, nostalgic interfaces inspired by carnival food stands: red-and-white striped awnings, fluffy cotton candy clouds, red-and-white popcorn boxes, golden corn dogs, powdered-sugar funnel cakes, buzzing neon menu signs, and the ticket booth window. The mood is bright, loud, nostalgic, and unapologetically fun — every element should make you hungry and excited.

## Non-Negotiable Foundations

- **Red-and-white striped awning** is the defining structural motif. At least one major layout element must use diagonal or vertical red-and-white stripes. This is the carnival equivalent of a greenhouse dome.
- **Bright saturated colors** dominate. Carnival palettes are bold, high-contrast, and unapologetically vivid. No muted pastels, no desaturated tones, no subtle gradients that blend into the background.
- **Rounded bubbly shapes** everywhere. Carnival objects are soft, inflated, playful — cotton candy puffs, popcorn kernels, balloon-letter typography. Sharp corners and austere geometry kill the carnival mood.
- **Nostalgic warmth** in every element. The carnival food stand evokes county fairs, boardwalks, summer evenings, and childhood wonder. Typography, colors, and textures should carry that warmth.
- **Fun over refinement.** This is not a luxury brand or a scientific catalog. The carnival is joyful chaos with just enough structure to find your food. Personality and delight beat minimalism.

## Core Material Recipes

### 1) Striped Awning

Red-and-white striped canopy, the signature visual of every carnival food stand.

- Awning base: `bg-white rounded-b-3xl shadow-[0_4px_16px_rgba(0,0,0,0.15)]` as the base canvas.
- Striped pattern: `bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,#c41e1e_12px,#c41e1e_24px)]` (diagonal red-and-white stripes at 45 degrees).
- Awning scalloped edge (bottom decorative wave):

```html
<svg viewBox="0 0 400 30" class="w-full">
  <defs>
    <pattern id="scallop" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
      <path d="M0,0 Q20,30 40,0" fill="white"/>
    </pattern>
  </defs>
  <rect width="400" height="30" fill="url(#scallop)"/>
</svg>
```

- Awning frame: `h-2 bg-[#8a6a3a] rounded-b` (wooden beam below awning).
- Full awning component for headers:

```html
<div class="relative">
  <div class="bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,#c41e1e_12px,#c41e1e_24px)] rounded-t-xl shadow-lg">
    <div class="px-8 pt-6 pb-10">
      <!-- awning content here -->
    </div>
  </div>
  <svg viewBox="0 0 400 20" class="w-full -mt-1"><path d="M0,0 Q20,20 40,0 Q60,20 80,0 Q100,20 120,0 Q140,20 160,0 Q180,20 200,0 Q220,20 240,0 Q260,20 280,0 Q300,20 320,0 Q340,20 360,0 Q380,20 400,0" fill="white"/></svg>
</div>
```

### 2) Cotton Candy Cloud

Fluffy pink or blue cloud on a stick, used as decorative accents, avatar frames, or feature highlights.

- Cotton candy body: `bg-gradient-to-b from-[#f0b0c8] to-[#e898b0] rounded-[50%] px-8 py-6 shadow-[0_4px_20px_rgba(240,176,200,0.4)]` for pink variant.
- Blue variant: `bg-gradient-to-b from-[#a0c8f0] to-[#80b0e0] rounded-[50%] px-8 py-6 shadow-[0_4px_20px_rgba(160,200,240,0.4)]`.
- Fluffy edge (irregular cloud outline):

```html
<svg viewBox="0 0 120 100" class="w-full">
  <path d="M60,10 Q80,5 90,20 Q105,15 100,35 Q115,40 105,55 Q110,70 95,75 Q90,90 70,85 Q60,95 45,85 Q30,92 25,75 Q10,70 15,55 Q5,45 20,35 Q15,20 30,22 Q40,8 60,10Z" fill="url(#cotton-candy-grad)" opacity="0.9"/>
  <rect x="57" y="70" width="6" height="30" rx="2" fill="#c8a870"/>
  <defs>
    <linearGradient id="cotton-candy-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0b0c8"/>
      <stop offset="100%" stop-color="#e890b0"/>
    </linearGradient>
  </defs>
</svg>
```

- Stick: `w-1.5 h-12 bg-[#c8a870] rounded-b mx-auto` (wooden dowel beneath cloud).
- Texture dots: scattered `w-1 h-1 rounded-full bg-white/40` dots inside the cloud body for fluffy texture.

### 3) Popcorn Box

Red-and-white vertically striped container overflowing with golden popcorn kernels.

- Box body: `bg-[repeating-linear-gradient(90deg,#c41e1e_0px,#c41e1e_8px,white_8px,white_16px)] rounded-b-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]` (vertical red-and-white stripes).
- Box trapezoid shape: `clip-path:polygon(5%_0,95%_0,100%_100%,0_100%)` (wider at top, narrower at bottom).
- Popcorn kernels overflow:

```html
<svg viewBox="0 0 100 40" class="w-full -mb-2">
  <g fill="#f0e040" stroke="#d8c830" stroke-width="0.5">
    <ellipse cx="30" cy="25" rx="8" ry="7"/>
    <ellipse cx="50" cy="20" rx="9" ry="8"/>
    <ellipse cx="70" cy="25" rx="8" ry="7"/>
    <ellipse cx="20" cy="20" rx="7" ry="6"/>
    <ellipse cx="40" cy="15" rx="7" ry="6"/>
    <ellipse cx="60" cy="14" rx="8" ry="7"/>
    <ellipse cx="80" cy="18" rx="7" ry="6"/>
    <ellipse cx="45" cy="10" rx="6" ry="5"/>
    <ellipse cx="55" cy="8" rx="6" ry="5"/>
  </g>
</svg>
```

- Box label: `bg-white/90 rounded px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-[#c41e1e]` centered on the box.

### 4) Corn Dog Silhouette

Golden-brown corn dog on a wooden stick, used as icon, accent, or menu item visual.

- Corn dog body: `bg-gradient-to-b from-[#d8a030] to-[#b08020] rounded-full px-4 py-12 shadow-[0_3px_8px_rgba(0,0,0,0.15)]` (elongated oval).
- Stick: `w-1.5 h-10 bg-[#c8a870] rounded-b mx-auto -mt-1`.
- Mustard drizzle: `bg-[#f0d020] rounded-full h-1 w-3/4 mx-auto opacity-80` (zigzag line down the body — use SVG for actual zigzag).
- Mustard zigzag SVG:

```html
<svg viewBox="0 0 30 60" class="w-full">
  <rect x="10" y="0" width="10" height="40" rx="5" fill="#d8a030"/>
  <path d="M12,8 L18,14 L12,20 L18,26 L12,32" fill="none" stroke="#f0d020" stroke-width="2" stroke-linecap="round"/>
  <rect x="13" y="40" width="4" height="20" rx="1" fill="#c8a870"/>
</svg>
```

### 5) Funnel Cake

Concentric swirl of fried dough topped with powdered sugar, a carnival food icon.

- Dough base: `bg-gradient-to-b from-[#d8a030] to-[#c89020] rounded-full w-32 h-32 shadow-[0_4px_16px_rgba(0,0,0,0.12)]`.
- Swirl pattern SVG:

```html
<svg viewBox="0 0 120 120" class="w-full">
  <circle cx="60" cy="60" r="55" fill="#d8a030"/>
  <g fill="none" stroke="#c89020" stroke-width="3" opacity="0.6">
    <circle cx="60" cy="60" r="45"/>
    <circle cx="55" cy="55" r="30"/>
    <circle cx="62" cy="58" r="18"/>
    <circle cx="60" cy="60" r="8"/>
  </g>
  <g fill="white" opacity="0.7">
    <circle cx="40" cy="45" r="2"/>
    <circle cx="55" cy="35" r="1.5"/>
    <circle cx="70" cy="40" r="2"/>
    <circle cx="80" cy="55" r="1.5"/>
    <circle cx="75" cy="70" r="2"/>
    <circle cx="50" cy="75" r="1.5"/>
    <circle cx="35" cy="65" r="2"/>
    <circle cx="60" cy="55" r="1.5"/>
    <circle cx="45" cy="55" r="1"/>
    <circle cx="65" cy="65" r="1"/>
    <circle cx="55" cy="45" r="1.5"/>
    <circle cx="70" cy="60" r="1"/>
  </g>
</svg>
```

- Powdered sugar dots: scattered `w-1 h-1 rounded-full bg-white/70` across the surface.
- Plate: `bg-white rounded-full w-40 h-4 -mt-6 mx-auto shadow-[0_2px_6px_rgba(0,0,0,0.08)]`.

### 6) Neon Menu Sign

Buzzing neon sign board for menu items, prices, and specials. The nostalgic carnival menu board.

- Sign board: `bg-[#1a1a2a] rounded-lg p-6 border-2 border-[#3a3a4a] shadow-[0_0_30px_rgba(240,208,32,0.1)]` (dark backboard).
- Neon text glow: `text-[#f0d020] font-bold text-lg drop-shadow-[0_0_8px_rgba(240,208,32,0.6)]` (yellow neon).
- Red neon: `text-[#ff4040] font-bold drop-shadow-[0_0_8px_rgba(255,64,64,0.6)]`.
- Green neon: `text-[#40e040] font-bold drop-shadow-[0_0_8px_rgba(64,224,64,0.6)]`.
- Blue neon: `text-[#4080ff] font-bold drop-shadow-[0_0_8px_rgba(64,128,255,0.6)]`.
- Neon flicker animation: `animate-[flicker_3s_infinite]` with keyframes that occasionally drop opacity to simulate a buzzing neon tube.
- Price display: `text-[#f0d020] font-bold text-2xl drop-shadow-[0_0_12px_rgba(240,208,32,0.8)]` with dollar sign smaller: `text-base`.
- Sign border lights (marquee bulbs):

```html
<div class="flex gap-2 justify-center mt-4">
  <div class="w-2 h-2 rounded-full bg-[#f0d020] shadow-[0_0_6px_rgba(240,208,32,0.8)]"></div>
  <div class="w-2 h-2 rounded-full bg-[#ff4040] shadow-[0_0_6px_rgba(255,64,64,0.8)]"></div>
  <div class="w-2 h-2 rounded-full bg-[#40e040] shadow-[0_0_6px_rgba(64,224,64,0.8)]"></div>
  <div class="w-2 h-2 rounded-full bg-[#f0d020] shadow-[0_0_6px_rgba(240,208,32,0.8)]"></div>
  <!-- repeat pattern -->
</div>
```

### 7) Ticket Booth Window

Small transaction window for purchase flows, sign-up forms, or interactive elements.

- Booth frame: `bg-[#8a6a3a] rounded-lg p-4 border border-[#6a4a1a] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`.
- Window opening: `bg-[#f5f0e0] rounded p-4 border-2 border-dashed border-[#8a6a3a]` (service window cutout).
- Window ledge: `bg-[#6a4a1a] h-3 rounded-b shadow-[0_2px_4px_rgba(0,0,0,0.15)]`.
- Booth signage: `bg-[#c41e1e] text-white font-bold text-xs uppercase tracking-widest px-4 py-1 rounded` (TICKETS or menu name).
- Ticket stub: `bg-[#f0d020] rounded-r-lg px-3 py-2 border-l-4 border-dashed border-[#8a6a3a] text-[#5a3a0a] text-xs font-mono` (perforated ticket edge).

### 8) Carnival Balloon Cluster

Decorative balloon bunch for festive accents and empty-state illustrations.

- Balloon SVG:

```html
<svg viewBox="0 0 100 120" class="w-full">
  <g>
    <ellipse cx="30" cy="30" rx="18" ry="22" fill="#c41e1e" opacity="0.9"/>
    <ellipse cx="55" cy="25" rx="16" ry="20" fill="#f0d020" opacity="0.9"/>
    <ellipse cx="75" cy="32" rx="15" ry="19" fill="#2a6aaa" opacity="0.9"/>
    <ellipse cx="45" cy="40" rx="14" ry="18" fill="#40e040" opacity="0.85"/>
    <path d="M30,52 L35,80" stroke="#999" stroke-width="0.5"/>
    <path d="M55,45 L50,80" stroke="#999" stroke-width="0.5"/>
    <path d="M75,51 L70,80" stroke="#999" stroke-width="0.5"/>
    <path d="M45,58 L48,80" stroke="#999" stroke-width="0.5"/>
    <!-- balloon shine -->
    <ellipse cx="25" cy="22" rx="4" ry="6" fill="white" opacity="0.3"/>
    <ellipse cx="50" cy="17" rx="3" ry="5" fill="white" opacity="0.3"/>
    <ellipse cx="70" cy="24" rx="3" ry="5" fill="white" opacity="0.3"/>
  </g>
</svg>
```

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Carnival Red | `#c41e1e` | Primary — awning stripes, popcorn boxes, signs |
| Carnival Yellow | `#f0d020` | Neon glow, prices, mustard, warm accents |
| Carnival Blue | `#2a6aaa` | Balloons, blue cotton candy, contrast pop |
| Cotton Candy Pink | `#f0b0c8` | Pink cotton candy, sweet accents, soft highlights |
| Popcorn Yellow | `#f0e040` | Popcorn kernels, food warmth, butter tones |
| Neon Green | `#40e040` | Neon signs, green cotton candy, energetic accents |
| Deep Neon Green | `#30b030` | Darker green for text on light backgrounds |
| Ticket Brown | `#8a6a3a` | Wooden stands, ticket booths, stick elements |
| Dark Wood | `#6a4a1a` | Deep wood accents, booth frames |
| Sign Board | `#1a1a2a` | Neon sign backboard, dark backgrounds |
| Cotton Candy Blue | `#a0c8f0` | Blue cotton candy variant |
| Butter Gold | `#d8a030` | Corn dog, funnel cake, fried food surfaces |
| Fried Brown | `#b08020` | Deep fried surfaces, food shadows |
| Paper White | `#f5f5f5` | Clean surfaces, text backgrounds |
| Cream | `#f5f0e0` | Booth window interiors, warm paper |
| Striped White | `#ffffff` | Awnings, popcorn box stripes |

Rules: Red and yellow are the power duo — they dominate. Blue provides the essential contrast that prevents the palette from becoming too warm. Pink and green appear as accent pops. Brown grounds the food-stand structure. The palette should feel like staring at a neon-lit carnival midway at dusk — bright, warm, and electric.

## Typography Recommendations

- **Display:** Bungee, Bungee Shade, Bangers (bold carnival poster lettering).
- **Menu prices:** Bungee Inline or custom with `font-black text-2xl text-[#f0d020] drop-shadow-[0_0_8px_rgba(240,208,32,0.6)]` (neon price glow).
- **Body:** Nunito, Quicksand (rounded, friendly, bubbly).
- **Ticket stubs:** Space Mono or IBM Plex Mono (monospace for ticket numbers and codes).
- **Signage:** Fredoka One, Lilita One (chunky rounded display for stand names and food labels).
- Typography is loud, chunky, and fun. Nothing thin, nothing elegant, nothing understated. Letters should look like they were painted on a carnival sign.

## Component Architecture Pattern

```
CarnivalFoodStandLayout
  StripedAwningHeader
    StandName (chunky display type)
    MarqueeLightBorder
  NeonMenuBoard
    MenuItem (food name + neon price)
    SpecialsHighlight
  FoodShowcase
    CottonCandyDisplay
    PopcornBoxCard
    CornDogItem
    FunnelCakeFeature
  TicketBoothSection
    TicketWindow (transaction flow)
    TicketStub (order confirmation)
  BalloonAccentDecorations
  CarnivalFooter
```

- The awning header establishes identity. The neon menu board is the primary information display. Food showcase items are the star attractions. The ticket booth handles transactions. Balloons add festive decoration throughout.

## Interaction Rules

- **Neon flicker:** Neon text elements have a subtle CSS flicker animation — occasionally dropping to 80% opacity for 50ms to simulate the buzzing of real neon tubes. `animation: flicker 4s infinite`.
- **Awning sway:** On hover, the striped awning gently rocks 2-3 degrees, like a breeze catching the canvas. `transform: rotate(-1deg) transition-transform duration-500`.
- **Popcorn burst:** When a popcorn item is clicked or hovered, kernel SVGs animate outward from the top of the box, `animate-bounce` with staggered delays.
- **Cotton candy spin:** Cotton candy elements have a very slow continuous rotation, `animate-[spin_20s_linear_infinite]`, like a display rotating on a carnival stand.
- **Price pop:** Neon price tags scale up on hover with `transition-transform duration-200 hover:scale-110` and the glow intensifies.
- **Ticket tear:** When a ticket stub is "redeemed," it slides to the right with `transition-transform duration-300 translate-x-full` and fades, like being handed through the booth window.
- **Balloon float:** Balloon decorations have a gentle `animate-bounce` at different speeds, creating a cluster of balloons bobbing independently.
- **Menu item slide-in:** Food items on the neon menu board slide in from the left on page load with staggered `animation-delay` values.

## Reusable Tailwind Tokens

- Striped awning: `bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,#c41e1e_12px,#c41e1e_24px)]`.
- Vertical popcorn stripes: `bg-[repeating-linear-gradient(90deg,#c41e1e_0px,#c41e1e_8px,white_8px,white_16px)]`.
- Neon glow text: `text-[#f0d020] drop-shadow-[0_0_8px_rgba(240,208,32,0.6)]`.
- Neon glow red: `text-[#ff4040] drop-shadow-[0_0_8px_rgba(255,64,64,0.6)]`.
- Neon glow green: `text-[#40e040] drop-shadow-[0_0_8px_rgba(64,224,64,0.6)]`.
- Neon sign board: `bg-[#1a1a2a] rounded-lg border-2 border-[#3a3a4a] shadow-[0_0_30px_rgba(240,208,32,0.1)]`.
- Cotton candy pink: `bg-gradient-to-b from-[#f0b0c8] to-[#e898b0] rounded-[50%] shadow-[0_4px_20px_rgba(240,176,200,0.4)]`.
- Cotton candy blue: `bg-gradient-to-b from-[#a0c8f0] to-[#80b0e0] rounded-[50%] shadow-[0_4px_20px_rgba(160,200,240,0.4)]`.
- Wooden stick: `w-1.5 h-12 bg-[#c8a870] rounded-b mx-auto`.
- Booth wood: `bg-[#8a6a3a] rounded-lg border border-[#6a4a1a]`.
- Ticket stub: `bg-[#f0d020] rounded-r-lg px-3 py-2 border-l-4 border-dashed border-[#8a6a3a]`.
- Marquee bulb: `w-2 h-2 rounded-full shadow-[0_0_6px_rgba(240,208,32,0.8)]`.
- Food golden: `bg-gradient-to-b from-[#d8a030] to-[#b08020] rounded-full`.
- Scalloped edge: SVG wave path along bottom of awning elements.

## Quality Checklist

- Red-and-white striped awning appears as a primary structural element.
- At least one neon sign with glowing text and dark backboard.
- Cotton candy element (pink or blue) present as decoration or card.
- Popcorn box with vertical stripes and kernel overflow visible.
- At least one food item (corn dog, funnel cake, or popcorn) fully rendered with SVG.
- Ticket booth window appears for transaction or interactive sections.
- Marquee light bulbs border at least one section.
- Bold chunky display typography (Bungee, Bangers, or similar).
- Rounded bubbly shapes — no sharp austere geometry.
- Bright saturated color palette — nothing muted or desaturated.
- Price displays use neon glow styling.
- At least one decorative balloon element.
- The aesthetic reads as carnival food stand / fairground / midway.
- Animations feel playful — bounce, flicker, sway, float.
- All SVG food illustrations are inline and fully rendered.

## Anti-Patterns

- Muted, desaturated, or pastel-only palettes (carnival is BOLD and BRIGHT).
- Missing striped awning (the stripes are the defining visual identity).
- No neon elements anywhere (neon signs are the carnival information system).
- Elegant, refined, or minimalist typography (carnival is loud and chunky).
- Missing food illustrations or references (this is a FOOD stand).
- Dark moody atmosphere without neon contrast (carnival is bright even at night).
- Sharp corners and austere geometry (carnival objects are rounded and puffy).
- Subtle understated animations (carnival motion is playful and energetic).
- Missing ticket booth or transaction element (tickets are the carnival currency).
- Thin delicate typography (carnival letters are chunky and bold).
- Missing cotton candy (it is the most iconic carnival treat).
- Corporate or professional tone (carnival is fun, nostalgic, and informal).
- Missing marquee light decoration (the bulb border is signature carnival).
- Cool-only palette without warm reds and yellows (carnival is warm and electric).
- Modern digital flat aesthetic without texture (carnival has physical materials — canvas, wood, neon glass, paper tickets).
