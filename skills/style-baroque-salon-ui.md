---
name: baroque-salon-ui
description: Build baroque salon UI components (gilded mirror frame, velvet drapery, crystal chandelier, marble floor, painted ceiling fresco, ornate console, silk damask wall) with opulent gold and velvet surfaces, dramatic lighting, and the theatrical grandeur of a baroque reception room. Trigger this skill when the user asks for baroque salon design, gilded mirror UI, velvet and crystal aesthetic, chandelier interface, marble and fresco, salon grandeur, opulent reception room, silk damask pattern, ornate console table, painted ceiling UI, or theatrical palatial interiors.
---

# Baroque Salon UI

Use this skill to design and implement opulent interfaces inspired by the 17th-century Italian and French baroque salon: gilded mirror frames with scrollwork, velvet drapery in deep folds, crystal chandeliers casting prismatic light, veined marble floors, painted ceiling frescoes, ornate console tables, and silk damask wall coverings that communicate theatrical grandeur and aristocratic reception.

## Non-Negotiable Foundations

- Baroque Salon design is defined by THEATRICAL GRANDEUR and SENSORY OPULENCE: every surface is a performance piece. The salon is a stage for displaying wealth, taste, and power.
- Gold gilding is omnipresent: ornate frame borders, chandelier arms, console carvings, mirror surrounds, and scrollwork flourishes in warm antique gold.
- Velvet and silk textures define material surfaces: deep-pile velvet drapery with light-catching folds, and subtle silk damask patterns woven into wall treatments.
- Crystal and marble provide cold counterpoints: prismatic chandelier drops and cool veined stone that contrast with warm gold and velvet.
- Dramatic theatrical lighting: chandelier light casts prismatic reflections, gilded surfaces catch and throw light, deep velvet absorbs shadow.
- Painted frescoes occupy ceiling or upper-wall zones: sky-blue grounds with cloud forms and figures, framed by gold molding.
- Typography is grand and commanding: high-contrast Didone serifs, monumental inscriptions, and engraved letterforms fit for palace salons.

## Core Material Recipes

### 1) Gilded Mirror Frame

Ornate gold scrollwork frame surrounding a reflective or content surface.

- Outer frame: `bg-gradient-to-br from-[#d4af37] via-[#f0d060] to-[#b8960b] p-6 rounded-lg`.
- Inner shadow (depth illusion): `shadow-[inset_0_4px_12px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.4)]`.
- Scrollwork corners: four SVG ornaments at corners with `text-[#b8960b]` ornamental acanthus scroll paths.
- Mirror surface: `bg-gradient-to-b from-[#e8f0f8] via-[#f0f4f8] to-[#d8e0e8] rounded shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]` (subtle silver-blue reflective surface).
- Distressing: `opacity-[0.03]` noise overlay for antique mirror patina.
- Full outer: `bg-gradient-to-br from-[#d4af37] via-[#f0d060] to-[#b8960b] p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] relative`
- Full inner mirror: `bg-gradient-to-b from-[#e8f0f8] via-[#f0f4f8] to-[#d8e0e8] rounded shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]`

### 2) Velvet Drapery Panel

Rich fabric panel with deep fold shadows and light-catching pile.

- Base velvet: `bg-gradient-to-b from-[#6a0a0a] via-[#5a0a0a] to-[#4a0808]` (deep crimson velvet).
- Fold highlights: repeating pseudo-elements with `bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent` at 80-120px intervals.
- Fold shadows: `bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.15)] to-transparent` between highlights.
- Pile texture: subtle noise overlay at `opacity-[0.04]` for fabric grain.
- Hem detail: bottom `border-b-4 border-[#3a0606] shadow-[0_2px_4px_rgba(0,0,0,0.3)]` for weighted fabric edge.
- Alternative deep blue: `bg-gradient-to-b from-[#2a2a5a] via-[#1a1a4a] to-[#10103a]` with fold treatment adjusted to blue tones.
- Full: `bg-gradient-to-b from-[#6a0a0a] via-[#5a0a0a] to-[#4a0808] p-8 relative overflow-hidden`

### 3) Crystal Chandelier

Hanging chandelier with prismatic crystal drops and gold arms.

- Central stem: `bg-gradient-to-b from-[#d4af37] to-[#b8960b] w-2 h-8 mx-auto` (gilded metal stem).
- Arms: six curved SVG paths `stroke-[#d4af37] stroke-[2px] fill-none` radiating from center with `path` elements curving downward at 30-degree intervals.
- Crystal drops: `bg-gradient-to-b from-[#e8f0ff] to-[#c8d8f0] w-1.5 h-4 rounded-b-full` with `shadow-[0_0_4px_rgba(200,220,255,0.6)]` for prismatic sparkle.
- Crystal cluster: three drops grouped at each arm tip with slight rotation variance (-5deg to 5deg).
- Light emission: `bg-[radial-gradient(circle,rgba(255,250,230,0.25)_0%,rgba(255,240,200,0.08)_30%,transparent_60%)]` below the fixture.
- Prismatic scatter: tiny `bg-[rgba(200,220,255,0.3)] w-0.5 h-0.5 rounded-full` positioned randomly below chandelier for light scatter.
- Full: `relative flex flex-col items-center`

### 4) Marble Floor Pattern

Veined stone surface with natural random veining.

- Base: `bg-[#f0ece4]` (warm marble white).
- Primary veins: SVG with `stroke-[#c8b8a0] stroke-[0.5px] fill-none opacity-40` as irregular curved paths.
- Secondary veins: `stroke-[#d8ccc0] stroke-[0.3px] fill-none opacity-25` for finer sub-veining.
- Surface polish: `bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_40%,rgba(255,255,255,0.05)_60%,transparent_100%)]` for marble reflectance.
- Tile joints (optional): `border border-[rgba(180,170,156,0.2)]` dividing into large format tiles.
- Shadow cast on floor: `bg-[radial-gradient(ellipse,rgba(0,0,0,0.08)_0%,transparent_70%)]` for furniture shadows.
- Full: `bg-[#f0ece4] relative overflow-hidden h-48`

### 5) Painted Ceiling Fresco

Sky-blue fresco ground with cloud forms and figures, framed by gold molding.

- Sky ground: `bg-gradient-to-b from-[#87ceeb] via-[#a0d8f0] to-[#b8e0f8]` (fresco sky blue).
- Cloud forms: SVG with `fill-[rgba(255,255,255,0.5)]` soft cloud shapes using cubic bezier curves.
- Figure silhouettes: `fill-[rgba(100,80,60,0.15)]` subtle Renaissance figure outlines within the composition.
- Cracking texture: pseudo-element with `background-image: repeating-conic-gradient(rgba(0,0,0,0.02) 0deg, transparent 1deg, transparent 5deg)` for aged plaster micro-cracks.
- Gold molding frame: `border-6 border-[#d4af37] shadow-[inset_0_0_0_2px_#b8960b,inset_0_0_0_4px_#d4af37]` (stepped gold frame).
- Cornice detail: top `border-t-[12px] border-t-[#f0ece4] border-x-[12px] border-x-transparent` for architectural cornice silhouette.
- Full: `bg-gradient-to-b from-[#87ceeb] via-[#a0d8f0] to-[#b8e0f8] relative overflow-hidden`

### 6) Ornate Console Table

Gold carved legs with marble top surface.

- Marble top: `bg-[#f0ece4] h-4 rounded-t-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]` with subtle veining.
- Console body: `bg-gradient-to-b from-[#d4af37] to-[#b8960b] h-8` for the gilded apron.
- Carved legs: SVG scrollwork legs `stroke-[#d4af37] fill-[#c4a030]` with acanthus leaf motifs.
- Leg shadow: `filter: drop-shadow(2px 4px 3px rgba(0,0,0,0.3))` for dimensional grounding.
- Decorative apron carving: repeating `bg-[radial-gradient(circle_at_top,#d4af37_40%,transparent_41%)] bg-[length:20px_10px]` for scalloped gilded edge.
- Full: `relative flex flex-col items-center`

### 7) Silk Damask Wall

Subtle woven pattern on silk ground with light-catching sheen.

- Silk ground: `bg-[#f0e8d0]` (warm damask cream).
- Damask pattern: SVG repeating motif using `fill-[rgba(200,180,140,0.25)]` for the classic baroque damask palmette.
- Pattern repeat: `background-size: 80px 120px` for proper damask scale.
- Silk sheen: `bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_80%)]` for light-catching silk surface.
- Alternative deep color: `bg-[#3a1a2a]` with `fill-[rgba(180,140,160,0.2)]` pattern for crimson damask.
- Alternative blue: `bg-[#1a2a4a]` with `fill-[rgba(140,160,200,0.15)]` pattern for blue silk damask.
- Full: `bg-[#f0e8d0] relative overflow-hidden`

## Color Palette System

### Core Baroque Salon Palette

| Color | Hex | Role |
|---|---|---|
| Gold Gilding | `#c4a043` | Primary accent, frames, carvings, chandelier |
| Light Gold | `#f0d060` | Gold highlights, gradient tops, gleam |
| Dark Gold | `#b8960b` | Gold shadows, gradient bottoms, aged gilding |
| Antique Gold | `#a08030` | Deep aged gilding, patina |
| Velvet Deep Red | `#5a0a0a` | Primary velvet drapery, curtain surfaces |
| Velvet Crimson | `#6a0a0a` | Velvet highlights, fold catches |
| Velvet Dark Red | `#4a0808` | Velvet fold shadows, deep folds |
| Velvet Deep Blue | `#1a1a4a` | Alternative velvet, secondary drapery |
| Crystal Clear | `#e8f0ff` | Chandelier drops, prismatic highlights |
| Crystal Shadow | `#c8d8f0` | Crystal drop bases, cooler facets |
| Marble White | `#f0ece4` | Floor surface, console tops, bright stone |
| Marble Vein | `#c8b8a0` | Veining in marble, natural patterns |
| Fresco Sky Blue | `#87ceeb` | Ceiling fresco ground, painted sky |
| Fresco Light | `#a0d8f0` | Fresco highlights, cloud tops |
| Damask Cream | `#f0e8d0` | Silk wall covering, warm neutral ground |
| Shadow Deep | `#0a0a0a` | Deep shadows, blackest voids |
| Plaster White | `#e8e0d0` | Cornice, moldings, architectural white |

Rules: Gold gilding is the universal accent — it appears on frames, chandeliers, consoles, and architectural details. Velvet red and blue provide rich material contrast. Marble and crystal offer cool relief against warm gold and velvet. The palette reads as a candlelit and chandelier-lit reception room where every surface is expensive, every detail is crafted, and nothing is left plain.

## Typography Recommendations

Baroque Salon typography is monumental, commanding, and engraved:

- **Display headings:** Playfair Display, Bodoni Moda, or Cinzel (monumental Didone or lapidary serifs).
- **Inscriptional:** Cinzel Decorative, Trajan Pro style (Roman inscription caps for formal headings).
- **Body:** Cormorant Garamond, EB Garamond (elegant high-contrast serif with baroque proportion).
- **Labels and captions:** `font-serif uppercase tracking-[0.15em] text-[#b8960b]` for gilded label treatment.
- **Engraved text effect:** `text-[#c4a043] font-serif font-bold` with `text-shadow: 1px 1px 0 #b8960b, -1px -1px 0 #f0d060` for chiseled letterform depth.
- Avoid sans-serif entirely. Baroque Salon is the apex of classical serif typography.
- Avoid casual or handwritten fonts — this is the salon of kings, not the scholar's desk.

## Component Architecture Pattern

1. Deep dark background (velvet red, deep blue, or shadow black).
2. Marble floor base or damask wall ground.
3. Gilded mirror frames containing content.
4. Velvet drapery panels flanking or framing sections.
5. Crystal chandelier as header or atmospheric centerpiece.
6. Painted ceiling fresco for hero or upper regions.
7. Ornate console tables as structural content containers.
8. Silk damask wall patterns as subtle background texture.
9. Gold gradient text on all headings and labels.
10. Ornamental scrollwork borders and cornice moldings throughout.

## Interaction Rules

- Default state: opulent, theatrical, grand — like entering a reception room.
- Hover: gilded surfaces gleam brighter, crystal catches light.
  - `hover:shadow-[0_4px_20px_rgba(196,160,67,0.3)] hover:brightness-108 transition-all duration-400`.
- Active: `active:scale-[0.99] active:brightness-95` (subtle press with light shift).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-4 focus:ring-offset-[#0a0a0a]` (gold ring with generous offset for grandeur).
- Transitions: `transition-all duration-400` (unhurried, stately, theatrical).
- Chandelier sparkle: on hover, crystal drops animate with `animate-[sparkle_2s_ease-in-out_infinite]` — a subtle opacity pulse between 0.7 and 1.0.
- Drapery sway: on section enter, velvet panels animate with `animate-[sway_3s_ease-in-out]` — a gentle horizontal shift of 2px.

## Reusable Tailwind Tokens

- Gilded frame: `bg-gradient-to-br from-[#d4af37] via-[#f0d060] to-[#b8960b] p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)]`
- Velvet red panel: `bg-gradient-to-b from-[#6a0a0a] via-[#5a0a0a] to-[#4a0808] p-8`
- Velvet blue panel: `bg-gradient-to-b from-[#2a2a5a] via-[#1a1a4a] to-[#10103a] p-8`
- Crystal drop: `bg-gradient-to-b from-[#e8f0ff] to-[#c8d8f0] w-1.5 h-4 rounded-b-full shadow-[0_0_4px_rgba(200,220,255,0.6)]`
- Marble surface: `bg-[#f0ece4] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]`
- Damask wall: `bg-[#f0e8d0]` with damask SVG pattern overlay at `opacity-[0.25]`
- Fresco sky: `bg-gradient-to-b from-[#87ceeb] via-[#a0d8f0] to-[#b8e0f8]`
- Gold text: `text-transparent bg-clip-text bg-gradient-to-b from-[#f0d060] via-[#c4a043] to-[#b8960b]`
- Chandelier glow: `bg-[radial-gradient(circle,rgba(255,250,230,0.25)_0%,transparent_60%)]`
- Console table: marble top `bg-[#f0ece4]` with gold body `bg-gradient-to-b from-[#d4af37] to-[#b8960b]`
- Deep shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_40px_rgba(0,0,0,0.3)]`
- Gold border: `border-2 border-[#c4a043]`

## Quality Checklist (must pass)

- Gold gilding (#c4a043) is present on every major structural element (frames, borders, chandeliers, consoles).
- Velvet textures have visible fold highlights and shadow gradients (not flat color).
- Crystal elements have prismatic light effects (subtle blue-white glow).
- Marble surfaces show natural veining patterns (not flat white).
- Fresco areas display sky-blue grounds with cloud forms and gold molding frames.
- Damask patterns are visible on wall surfaces (subtle woven motif, not plain).
- Typography is monumental classical serif throughout (no sans-serif, no casual).
- The mood reads as a grand baroque reception room — theatrical, opulent, aristocratic.
- Chandelier effects provide atmospheric lighting (prismatic scatter, warm glow).
- Deep shadows and dramatic lighting contrast with gilded highlights.
- Ornamental scrollwork appears at frame corners and border intersections.
- Every surface communicates expense and craftsmanship — nothing looks plain or manufactured.

## Anti-Patterns

- Minimalist or Scandinavian simplicity (baroque salon is the antithesis of minimalism).
- Sans-serif typography (monumental serif is non-negotiable).
- Bright pastel colors (baroque salon uses deep velvet, gold, marble — not candy tones).
- Flat untextured surfaces (velvet has folds, marble has veins, silk has pattern, gold has patina).
- Missing gold accents (gilding is the defining material of the baroque salon).
- Cheap-looking gold (use gradient gold #d4af37 to #b8960b, not flat yellow).
- Missing crystal or prismatic effects (chandelier sparkle is essential atmosphere).
- Light or bright overall backgrounds (baroque salon is deep, shadowy, dramatic).
- Modern glass and steel materials (baroque is gold, velvet, marble, silk — period materials only).
- Missing drapery or textile elements (velvet curtains are the defining baroque textile).
- Digital or pixelated effects (everything must feel handmade, opulent, physical).
- Plain borders without ornamentation (every border is gilded, every frame is scrolled).
- Symmetry without hierarchy (baroque composition uses dramatic asymmetry and focal points).
- Missing fresco or painted ceiling element (the salon ceiling is its crown).

## Accessibility Considerations

- Deep velvet backgrounds (#5a0a0a, #1a1a4a) with ivory or gold text provide strong contrast — verify all combinations at WCAG AA minimum.
- Gold gilding text (#c4a043) on dark backgrounds is often below 4.5:1 for body text — reserve for large display text (18pt+) or decorative elements only.
- Gold gradient text treatments can reduce contrast unpredictably — test each gradient combination at rendered size.
- Marble white (#f0ece4) surfaces with dark text (#0a0a0a) provide excellent contrast (15.1:1 ratio, WCAG AAA).
- Crystal and chandelier glow effects must not create glare regions that wash out nearby text.
- Focus states: `focus:ring-2 focus:ring-[#c4a043] focus:ring-offset-4` with generous offset for visibility on dark surfaces.
- Ornamental SVGs (scrollwork, damask patterns, chandelier arms, fresco figures) must be `aria-hidden="true"`.
- Velvet fold effects and damask patterns must not reduce text legibility — maintain sufficient padding between text and decorative overlays.
- The dramatic dark aesthetic may reduce readability for users with low vision — provide adequate text size (16px minimum body) and generous line-height.
- Crystal sparkle animations should respect `prefers-reduced-motion` — disable sparkle and sway animations when the user requests reduced motion.
- Touch targets on ornate elements must account for decorative padding that may extend beyond the interactive area.
- Fresco illustrations require descriptive alt text or aria-labels for screen reader context.
