---
name: cherry-orchard-ui
description: Build cherry orchard UI components (blossom canopy, petal fall, picnic blanket, sake cup, wooden torii gate, spring breeze, pink drift) with soft pink blossoms, spring warmth, and the gentle celebration of hanami season. Trigger this skill when the user asks for cherry blossom design, hanami UI, sakura interfaces, spring orchard aesthetics, petal fall animations, picnic blanket components, torii gate elements, pink canopy displays, or Japanese spring celebration interfaces.
---

# Cherry Orchard UI

Use this skill to design and implement gentle, celebratory interfaces with scattered cherry blossom canopies, slowly falling petal animations, red-and-white picnic blanket patterns, sake cup accents, wooden torii gate silhouettes, and the warm, fleeting beauty of hanami season. This is not a modern Japanese restaurant or a generic spring theme — it is the orchard itself: branches, blossoms, petals, blankets, and the bittersweet awareness that this beauty lasts only a few days. The aesthetic celebrates TRANSIENCE, WARMTH, and the GENTLE JOY of gathering under falling petals.

## Non-Negotiable Foundations

- Cherry blossom canopy is MANDATORY: every major panel or section must evoke scattered pink flower shapes overhead — clusters of five-petal blossoms in various stages of bloom, from tight buds to full flower to petals about to fall.
- Falling petal animation is the signature motion: slow, drifting petals with gentle rotation descend through the viewport. This is the soul of hanami — the awareness of beauty in motion.
- The picnic blanket pattern (red and white check) is the gathering motif: it appears on interactive surfaces, cards, or section backgrounds — the communal ground where people sit together.
- Sake cup is a cultural accent: small, round, ceramic-white with subtle steam or warmth indicator — the toast shared under the blossoms.
- The wooden torii gate silhouette appears as a section divider, header accent, or framing device — it marks the entrance to a sacred or celebratory space.
- The aesthetic communicates FLEETING BEAUTY, GENTLE CELEBRATION, and the Bittersweet awareness that spring blossoms do not last. This is a place of gratitude, gathering, and quiet joy.
- Colors are soft and warm: blossom pink, petal dark pink, blossom white, soft blue sky, torii vermillion, picnic red, ceramic white, and branch brown.
- Typography is elegant with Japanese-influenced character: clean, light, with the restraint of Japanese design — not heavy, not loud, not cluttered.

## Core Material Recipes

### 1) Cherry Blossom Canopy

Scattered pink flower shapes overhead — the defining visual element.

- Single five-petal blossom:
```html
<svg viewBox="0 0 40 40" class="w-8 h-8" aria-hidden="true">
  <g transform="translate(20,20)">
    <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#f0b0c0" transform="rotate(0)"/>
    <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#f0b0c0" transform="rotate(72)"/>
    <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#f0b0c0" transform="rotate(144)"/>
    <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#f0b0c0" transform="rotate(216)"/>
    <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#f0b0c0" transform="rotate(288)"/>
    <circle cx="0" cy="0" r="3" fill="#d48090"/>
  </g>
</svg>
```
- Blossom cluster: 5-12 blossoms positioned in an organic, overhead arrangement — `absolute` positioned with varied `top`/`left` offsets, sizes (`w-6` to `w-10`), and rotations.
- Full bloom: `fill-[#f0b0c0]` with `fill-[#d48090]` center — the healthy, open flower.
- Bud: `w-3 h-4 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#d48090]` — tight, darker, not yet open.
- Wilting blossom: `fill-[#f0b0c0] opacity-60 rotate-[15deg]` with slightly spread petals.
- Branch structure: `bg-[#6a4a2a] h-[2px] w-32 rotate-[-8deg] absolute` — thin brown lines connecting clusters.
- Canopy density gradient: more blossoms at top (`top-0` to `top-[20%]`), thinning toward the middle — the overhead canopy effect.

### 2) Falling Petal Animation

Slow-drifting petals descending through the viewport — the signature hanami motion.

- Single falling petal:
```html
<div class="absolute animate-[petalFall_8s_linear_infinite] opacity-70" style="left:30%;animation-delay:2s">
  <div class="w-3 h-2 bg-[#f0b0c0] rounded-[50%_50%_50%_0%/50%_50%_50%_0%] rotate-45 shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></div>
</div>
```
- Custom keyframes (define in CSS or Tailwind config):
```css
@keyframes petalFall {
  0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.7; }
  90% { opacity: 0.6; }
  100% { transform: translateY(100vh) translateX(40px) rotate(360deg); opacity: 0; }
}
@keyframes petalSway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}
```
- Petal shape: `w-3 h-2 bg-[#f0b0c0] rounded-[50%_50%_50%_0%/50%_50%_50%_0%] rotate-45` — teardrop/petal shape via asymmetric border-radius.
- Petal variety: mix `bg-[#f0b0c0]`, `bg-[#d48090]`, and `bg-[#fff5f5]` for pink-to-white color variation.
- Sway overlay: `animate-[petalSway_3s_ease-in-out_infinite]` layered on the fall animation for horizontal drift.
- Multiple petals: 8-15 instances with varied `animation-delay` (0-7s), `left` positions (5%-95%), and sizes (`w-2` to `w-4`).
- Speed: petals take 6-12 seconds to traverse the viewport — never fast, never rushed.
- Petal rotation: each petal rotates 180-720 degrees during descent — slow, tumbling, weightless.

### 3) Picnic Blanket Pattern

Red and white check — the communal gathering surface.

- Check pattern:
```html
<div class="bg-[#fff5f5] bg-[repeating-conic-gradient(#c41e1e_0%_25%,#fff5f5_0%_50%)] bg-[length:20px_20px]"></div>
```
- Simpler CSS check: `bg-[#fff5f5]` with `bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(196,30,30,0.8)_18px,rgba(196,30,30,0.8)_20px)]` and `bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(196,30,30,0.8)_18px,rgba(196,30,30,0.8)_20px)]`.
- Blanket drape: `shadow-[0_8px_24px_rgba(0,0,0,0.15)]` with `rounded-lg` for the soft, fabric edge.
- Fold wrinkle: `bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.03)_45%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.03)_55%,transparent_100%)]` — a subtle center fold.
- Frayed edge: `border-dashed border-[#c41e1e]/30 border-b` on the bottom edge — the woven border of a blanket.
- Grass peek: small `bg-[#7a9a4a]` area peeking out from under the blanket edge — the ground beneath.
- Food/drink items on blanket: simple silhouettes — sake cup, bento box, or wrapped onigiri as minimal accent shapes.

### 4) Sake Cup Accent

Small ceramic cup — the shared toast element.

```html
<div class="relative w-8 h-5 bg-[#f5f0e8] rounded-b-full border border-[#d0c8b8] shadow-[0_2px_4px_rgba(0,0,0,0.15),inset_0_-2px_4px_rgba(0,0,0,0.05)]">
  <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-3 bg-[rgba(255,255,255,0.4)] rounded-full blur-[2px] animate-pulse"></div>
</div>
```
- Cup body: `w-8 h-5 bg-[#f5f0e8] rounded-b-full` — the small, open-top ceramic cup.
- Cup rim: `border-t-2 border-[#d0c8b8]` — the slight lip.
- Sake liquid inside: `bg-[rgba(255,250,240,0.6)] w-6 h-2 rounded-full mx-auto mt-1` — the clear, warm liquid.
- Steam wisps: `w-2 h-3 bg-[rgba(255,255,255,0.3)] rounded-full blur-[2px] animate-pulse` — rising heat from warm sake.
- Cup in pair: two cups side by side (`gap-1`) — sake is always shared, never solitary.
- Vermillion cup variant: `bg-[#c44020]` — the traditional lacquered sake cup for special occasions.

### 5) Wooden Torii Gate Silhouette

The sacred entrance — section divider or framing device.

```html
<div class="relative w-full h-20 flex items-end justify-center" aria-hidden="true">
  <div class="absolute bottom-4 w-[2px] h-16 bg-[#6a4a2a] left-[25%]"></div>
  <div class="absolute bottom-4 w-[2px] h-16 bg-[#6a4a2a] right-[25%]"></div>
  <div class="absolute bottom-16 w-[55%] h-[3px] bg-[#c44020] rounded-full"></div>
  <div class="absolute bottom-12 w-[50%] h-[2px] bg-[#c44020]/80 rounded-full"></div>
</div>
```
- Pillars: `w-[2px] h-16 bg-[#6a4a2a]` — vertical wooden posts.
- Top beam (kasagi): `h-[3px] bg-[#c44020]` — the vermillion upper beam, wider than the pillars.
- Middle beam (nuki): `h-[2px] bg-[#c44020]/80` — the secondary cross-beam below.
- Torii proportions: top beam is wider than the pillar span (`w-[55%]` vs `left-[25%]` to `right-[25%]`).
- Small torii variant: scale to `h-10` for inline use as a section divider.
- Vermillion color: `#c44020` is sacred — use it only on torii beams, never on other elements.
- Placement: center of the viewport as a section divider, or at the top of a page as a welcoming frame.

### 6) Spring Breeze Particle Effect

Subtle atmospheric motion — floating dust and pollen in warm light.

- Particle: `w-1 h-1 rounded-full bg-[rgba(255,240,200,0.4)]` — a tiny warm speck of pollen or dust.
- Float animation: `animate-[breezeFloat_6s_ease-in-out_infinite]` with custom keyframes:
```css
@keyframes breezeFloat {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  25% { transform: translate(15px, -8px); opacity: 0.6; }
  50% { transform: translate(30px, -3px); opacity: 0.4; }
  75% { transform: translate(10px, -10px); opacity: 0.5; }
}
```
- Particle cluster: 6-10 instances with varied `animation-delay`, `left`, and `top` positions.
- Speed: particles drift lazily — 5-8 second cycles, never frantic.
- Warm light wash: `bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,240,200,0.08)_0%,transparent_60%)]` — sunlight filtering through the canopy.

### 7) Pink Gradient Sky

The soft sky visible through the blossom canopy — the background atmosphere.

- Gradient sky: `bg-[linear-gradient(180deg,#c8e0f0_0%,#e8d0e0_40%,#f0e0e8_70%,#fff5f5_100%)]`.
- Sun-warmed variant: `bg-[linear-gradient(180deg,#c8e0f0_0%,#f0d8c8_50%,#fff0e8_100%)]`.
- Cloud wisps: `bg-[rgba(255,255,255,0.3)] rounded-full blur-[8px] w-32 h-6 absolute` — soft, indistinct cloud shapes.
- Sky through branches: darker upper area with branch silhouettes cutting across — `bg-[#6a4a2a] h-[1px] rotate-[-5deg]` for thin branch lines over the sky gradient.
- Dusk variant: `bg-[linear-gradient(180deg,#d0b8c8_0%,#e8a8b8_40%,#f0c0c8_70%,#f8e0d8_100%)]` — the golden-hour pink.

## Color Palette System

### Core Cherry Orchard Palette

| Color | Hex | Role |
|---|---|---|
| Blossom Pink | `#f0b0c0` | Primary — cherry blossom petals, canopy fill |
| Petal Dark Pink | `#d48090` | Blossom centers, buds, deeper petal tones |
| Blossom White | `#fff5f5` | Petal highlights, sky gradient base, blanket white |
| Sky Soft Blue | `#c8e0f0` | Sky visible through canopy, cool atmospheric contrast |
| Torii Vermillion | `#c44020` | Sacred gate beams, ceremonial accents |
| Picnic Red | `#c41e1e` | Blanket check pattern, communal gathering surfaces |
| Sake Ceramic White | `#f5f0e8` | Sake cups, ceramic objects, warm whites |
| Branch Brown | `#6a4a2a` | Tree branches, torii pillars, wooden structural elements |
| Grass Green | `#7a9a4a` | Ground cover, orchard floor, subtle nature accent |
| Pollen Warm | `rgba(255,240,200,0.4)` | Spring breeze particles, warm light specks |
| Sky Dusk Pink | `#e8a8b8` | Evening sky, sunset orchard tones |
| Blanket White | `#fff5f5` | Picnic blanket white checks (same as blossom white) |
| Wood Light | `#a0805a` | Lighter wood for torii detail, picnic accessories |
| Shadow Soft | `rgba(0,0,0,0.1)` | Gentle shadows — spring light is soft, shadows are diffuse |

Rules: Blossom pink is the dominant color — it appears on every panel as canopy, petals, or gradient. Picnic red is the gathering color — it appears on blankets and communal surfaces. Torii vermillion is sacred — it appears ONLY on torii gate beams and ceremonial accents, never casually. Branch brown is structural — it grounds the softness with natural wood. Sky blue provides cool contrast against the warm pinks. The palette is pink + white + vermillion + brown + sky blue — warm, soft, spring, celebratory. Never harsh, never dark, never cold, never sterile.

## Typography Recommendations

- **Display:** Noto Serif JP, Zen Old Mincho, or Shippori Mincho (Japanese serif with elegant proportions — the hanami invitation standard).
- **Body:** Inter, Noto Sans JP, or Source Sans 3 (clean, light sans-serif for readability under pink tones).
- **Label/Accent:** `font-mono font-light uppercase tracking-[0.1em] text-[10px]` for season dates, orchard coordinates, and sake identification.
- Blossom text treatment: `text-[#d48090] drop-shadow-[0_1px_2px_rgba(212,128,144,0.2)]` for headings that blend with the petal atmosphere.
- Picnic label treatment: `text-[#c41e1e] font-serif font-medium` for communal labels, gathering announcements, and blanket-style signage.
- Torii text treatment: `text-[#c44020] font-serif font-bold tracking-[0.05em]` for sacred or ceremonial headings.
- Light font weights are preferred — spring typography should feel airy, not heavy.
- Tracking is generous — hanami typography breathes, with space between characters suggesting the openness of an orchard.

## Interaction Rules

- Default: gentle, breathing, alive — petals drift, breeze moves, the orchard is always in subtle motion.
- Hover: petals brighten slightly, a gentle breeze stirs.
  - `hover:shadow-[0_0_16px_rgba(240,176,192,0.2)] hover:brightness-105 transition-all duration-500`.
- Active: `active:scale-[0.97] active:brightness-90` (the gentle press of sitting down on the blanket).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#f0b0c0]/30 focus:ring-offset-2 focus:ring-offset-[#fff5f5]` (blossom-pink ring on white).
- Transitions: `transition-all duration-500` (spring breezes are unhurried, petals do not rush).
- Scroll behavior: `scroll-behavior: smooth` — the orchard moves like a breeze.
- Petal burst: on major interactions (page load, section reveal), a brief burst of 3-5 extra petals — `animate-[petalBurst_2s_ease-out_forwards]`.
- Ambient petal fall: persistent, low-opacity petals drifting across the viewport at all times — `pointer-events-none` and `aria-hidden="true"`.

## Reusable Tailwind Tokens

- Blossom canopy cluster: `absolute` positioned SVGs with `fill-[#f0b0c0]` and `fill-[#d48090]` centers, varied sizes (`w-6` to `w-10`) and rotations.
- Falling petal: `w-3 h-2 bg-[#f0b0c0] rounded-[50%_50%_50%_0%/50%_50%_50%_0%] rotate-45 animate-[petalFall_8s_linear_infinite]`.
- Picnic blanket: `bg-[#fff5f5] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(196,30,30,0.8)_18px,rgba(196,30,30,0.8)_20px)] bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(196,30,30,0.8)_18px,rgba(196,30,30,0.8)_20px)] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)]`.
- Sake cup: `w-8 h-5 bg-[#f5f0e8] rounded-b-full border border-[#d0c8b8] shadow-[0_2px_4px_rgba(0,0,0,0.15)]`.
- Torii gate: `w-[55%] h-[3px] bg-[#c44020] rounded-full` for top beam, `w-[2px] h-16 bg-[#6a4a2a]` for pillars.
- Pink gradient sky: `bg-[linear-gradient(180deg,#c8e0f0_0%,#e8d0e0_40%,#f0e0e8_70%,#fff5f5_100%)]`.
- Branch line: `bg-[#6a4a2a] h-[1px]` with `rotate-[-8deg]` or `rotate-[5deg]` for natural branch angles.
- Breeze particle: `w-1 h-1 rounded-full bg-[rgba(255,240,200,0.4)] animate-[breezeFloat_6s_ease-in-out_infinite]`.
- Blossom bud: `w-3 h-4 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#d48090]`.
- Vermillion accent: `bg-[#c44020]` or `text-[#c44020]` — torii and ceremonial only.
- Warm light wash: `bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,240,200,0.08)_0%,transparent_60%)]`.
- Grass peek: `bg-[#7a9a4a]` for orchard floor visible under blanket edges.
- Petal shadow: `shadow-[0_1px_2px_rgba(0,0,0,0.1)]` — spring light creates soft, minimal shadows.

## Quality Checklist

- Cherry blossom canopy or scattered flower shapes visible in at least one major section.
- Falling petal animation present with slow drift (6-12 seconds per cycle).
- At least 8-15 individual petal instances with varied positions, delays, and sizes.
- Picnic blanket red-and-white check pattern on at least one interactive or display surface.
- Torii gate silhouette present as section divider, header accent, or framing device.
- Pink gradient sky background or atmospheric pink wash on at least one panel.
- Sake cup accent on at least one gathering or celebration element.
- Blossom pink (#f0b0c0) is the dominant color across the interface.
- Branch brown (#6a4a2a) appears on structural wood elements.
- Torii vermillion (#c44020) appears only on torii beams — never on random elements.
- Typography is light-weight and generous in spacing — airy, not heavy.
- Transitions are gentle (500ms default) — spring breezes are unhurried.
- Petal animations respect `prefers-reduced-motion`.
- Overall aesthetic communicates fleeting beauty, gentle celebration, and communal warmth.
- At least one five-petal blossom SVG is rendered (not just colored circles).

## Anti-Patterns

- Dark or moody color schemes (spring orchards are bright, warm, and soft — never somber).
- Heavy, bold typography (spring demands light, airy letterforms — not weighted headers).
- Fast or snappy transitions (petals drift slowly — spring breezes do not snap).
- Missing petal animation (the falling petal IS hanami — a static orchard is a painting, not an experience).
- Geometric or perfectly symmetric blossom arrangements (blossoms grow organically, clusters are irregular).
- Neon, electric, or RGB glow effects (forbidden — the orchard uses only natural, warm light).
- Torii vermillion (#c44020) used on non-sacred elements (it is a sacred color — casual use dilutes its meaning).
- Cold blue or gray dominant palette (spring orchards are warm — cool tones are accent only).
- Oversized or dominant sake cups (cups are small, intimate objects — not hero elements).
- Missing branch/wood structure (blossoms grow on branches — floating petals without branches feel unrooted).
- Busy or cluttered layouts (hanami is about space, breath, and simplicity — not density).
- Harsh shadows or strong directional light (spring light is soft and diffuse, shadows are gentle).
- Red petals or orange blossoms (cherry blossoms are pink-to-white — never red, never orange).
- Missing communal or gathering motif (hanami is social — at least one blanket, cup, or seating element must be present).

## Accessibility Considerations

- Blossom white (#fff5f5) on dark elements provides strong contrast (WCAG AAA), but on light backgrounds may fail.
- Blossom pink (#f0b0c0) on dark backgrounds exceeds AA for large text; verify for small text on white.
- Torii vermillion (#c44020) on white provides good contrast (WCAG AA); use for interactive elements where possible.
- Focus states: `focus:ring-2 focus:ring-[#f0b0c0]/30 focus:ring-offset-2 focus:ring-offset-[#fff5f5]` (blossom ring on white).
- Falling petal animations must respect `prefers-reduced-motion` — disable or minimize for users who request it.
- Blossom canopy SVGs and decorative elements must be `aria-hidden="true"`.
- Breeze particles are atmospheric — they must not obscure text or interactive elements.
- The light, airy aesthetic requires careful attention to text contrast on pink-tinted backgrounds — body text should be on white or very light surfaces, not directly on pink.
- Torii gate as section divider must not interfere with landmark navigation for screen readers.
- Petal animations should not cause vestibular issues — gentle, slow drift only; no rapid or chaotic motion.
- Picnic blanket pattern must not be used as a background behind text without sufficient overlay contrast.
- Spring orchard interfaces should use semantic HTML landmarks (header, nav, main, footer) independent of the decorative canopy structure.
