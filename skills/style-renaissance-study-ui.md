---
name: renaissance-study-ui
description: Build renaissance study UI components (manuscript desk, ink well, celestial globe, anatomical drawing, leather bound folio, quill pen, candle light, perspective grid) with scholarly Renaissance textures, warm candlelight, and the intellectual curiosity of a humanist study. Trigger this skill when the user asks for renaissance study design, manuscript desk UI, scholar aesthetic, ink and parchment, candlelit study, humanist interface, anatomical illustration style, celestial globe UI, leather folio, quill pen elements, perspective grid, or warm intellectual academic interfaces.
---

# Renaissance Study UI

Use this skill to design and implement scholarly interfaces inspired by the 15th-16th century Renaissance humanist study: manuscript desks scattered with papers, ceramic ink wells, quill pens, warm candlelight, celestial globes, anatomical drawings, leather-bound folios, and the rigorous perspective grids of Brunelleschi and Alberti.

## Non-Negotiable Foundations

- Renaissance Study design is defined by SCHOLARLY WARMTH and INTELLECTUAL CURIOUSITY: every surface suggests a mind at work. Clutter is evidence of thought, not mess.
- Parchment and aged paper textures are mandatory: warm cream backgrounds, soft grain, subtle foxing marks that suggest centuries of scholarly use.
- Colors are warm and earth-driven: walnut desk brown, ink dark, leather sienna, candlelight amber, globe blue, and anatomical cream against parchment fields.
- Candlelight illumination: soft warm glow emanating from upper-left, casting gentle amber light with natural fall-off toward cooler edges. Not dramatic chiaroscuro but the intimate warmth of a single candle on a desk.
- Natural material textures: dark wood grain, cracked leather, ceramic glaze, feathered quill barbs, iron gall ink stains.
- Typography is humanist and calligraphic: old-style Roman serifs, humanist italics, and display faces that echo Aldine press typefaces and hand-copied manuscripts.

## Core Material Recipes

### 1) Manuscript Desk Surface

The foundational renaissance study surface: dark walnut wood with scattered papers.

- Background: `bg-gradient-to-br from-[#4a2a12] via-[#5a3a1a] to-[#3a2010]` (walnut desk with natural grain gradient).
- Wood grain overlay: pseudo-element with `background-image: repeating-linear-gradient(87deg, transparent, transparent 3px, rgba(90,58,26,0.15) 3px, rgba(90,58,26,0.15) 4px)` rotated 2deg for natural grain.
- Scattered papers: positioned absolute child elements with `bg-[#f0ead0] rotate-[2deg] shadow-md` at varied angles (-3deg to 5deg).
- Desk edge highlight: `border-b-4 border-[#3a2010] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]`.
- Full: `bg-gradient-to-br from-[#4a2a12] via-[#5a3a1a] to-[#3a2010] p-8 relative overflow-hidden`

### 2) Parchment Card

Aged paper surface with subtle texture and warm edges.

- Background: `bg-[#f0ead0]` with grain overlay using `background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`.
- Border: `border border-[#d4c8a0]` (aged paper edge).
- Foxing marks: pseudo-element with `radial-gradient(ellipse, rgba(160,120,60,0.08) 0%, transparent 70%)` at scattered positions.
- Shadow: `shadow-[2px_3px_8px_rgba(60,30,10,0.2)]` (desk shadow, not dramatic).
- Full: `bg-[#f0ead0] border border-[#d4c8a0] p-6 shadow-[2px_3px_8px_rgba(60,30,10,0.2)] relative`

### 3) Ink Well Component

Small dark ceramic pot with iron gall ink.

- Outer ceramic: `bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-full w-10 h-8 border border-[#3a3a3a]`.
- Ink surface: `bg-gradient-to-b from-[#0a0a0a] to-[#1a1510] rounded-full w-8 h-2 mx-auto mt-1 border border-[#2a2520]`.
- Ink reflection: `bg-[radial-gradient(ellipse_at_40%_30%,rgba(80,60,30,0.4)_0%,transparent_60%)]` for subtle wet ink sheen.
- Spillage detail: small pseudo-element `bg-[rgba(10,10,10,0.3)] rounded-full` at base.
- Full: `relative w-10 h-10 flex flex-col items-center`

### 4) Celestial Globe Silhouette

Blue sphere with constellation line patterns.

- Globe body: `bg-gradient-to-br from-[#4a7aaa] to-[#2a5a8a] rounded-full w-32 h-32 border-2 border-[#3a6a9a]`.
- Constellation lines: SVG overlay with `stroke-[#a0c8e8] stroke-[0.5px] fill-none opacity-60` for star map lines.
- Meridian ring: `border-2 border-[#8a7a5a] rounded-full absolute w-[140%] h-[110%] -left-[20%] -top-[5%] rotate-[15deg]` for the brass armillary ring.
- Stand: `bg-[#6a5a3a] h-4 w-20 mx-auto rounded-b-lg` for the wooden pedestal.
- Glow: `shadow-[0_0_20px_rgba(74,122,170,0.2)]`.
- Full: `relative flex flex-col items-center`

### 5) Anatomical Drawing Illustration

Clinical study illustration with labels and measurement lines.

- Paper: `bg-[#f5f0e0] border border-[#d4c8a0] p-4`.
- Illustration area: centered figure outline using SVG `stroke-[#3a2a1a] stroke-[1px] fill-none`.
- Measurement lines: `border-t border-dashed border-[#8a7a5a]` with `text-[10px] text-[#6a5a3a] font-serif italic`.
- Labels: `text-[10px] text-[#3a2a1a] font-serif italic` positioned with leader lines.
- Age staining: `bg-[radial-gradient(ellipse_at_60%_70%,rgba(180,150,80,0.1)_0%,transparent_50%)]`.
- Full: `bg-[#f5f0e0] border border-[#d4c8a0] p-4 relative overflow-hidden`

### 6) Leather Bound Folio

Stamped leather cover with tooled border pattern.

- Leather surface: `bg-gradient-to-br from-[#6a4a2a] to-[#4a3020]` (rich sienna leather).
- Tooled border: `border-2 border-[#8a6a3a]` with inset `shadow-[inset_0_0_0_4px_rgba(138,106,58,0.3)]` for blind-tooling impression.
- Spine: `bg-gradient-to-r from-[#3a2010] to-[#4a3020] w-4 absolute left-0 top-0 bottom-0` with horizontal line details `border-t border-[#5a3a1a]`.
- Stamp: `text-[#8a6a3a] text-2xl font-serif opacity-60` centered for the blind-stamped monogram.
- Corner brass: small `bg-[#b8a040] rounded-sm w-3 h-3 absolute` at each corner.
- Full: `bg-gradient-to-br from-[#6a4a2a] to-[#4a3020] border-2 border-[#8a6a3a] shadow-[4px_4px_12px_rgba(0,0,0,0.3)] p-8 relative`

### 7) Candle Light Warm Glow

Soft amber illumination effect from a candle source.

- Primary glow: `bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,245,208,0.15)_0%,rgba(255,220,150,0.05)_30%,transparent_60%)]` over the entire surface.
- Candle flame indicator: `bg-gradient-to-t from-[#d4a020] via-[#ffcc33] to-[#fff5d0] rounded-[50%_50%_20%_20%] w-3 h-6` with `shadow-[0_0_12px_rgba(255,200,50,0.5),0_0_24px_rgba(255,200,50,0.2)]`.
- Warm tint on nearby elements: `filter: sepia(0.05) brightness(1.02)` applied to elements within the light radius.
- Light fall-off: edges of the desk surface darken naturally via `bg-gradient-to-br from-transparent to-[rgba(0,0,0,0.15)]`.
- Full: `relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,245,208,0.15)_0%,rgba(255,220,150,0.05)_30%,transparent_60%)] before:pointer-events-none`

### 8) Perspective Grid

Albertian perspective grid with vanishing point.

- Grid lines: SVG with `stroke-[#c4b896] stroke-[0.5px] opacity-40` radiating from a single vanishing point at upper-center.
- Horizontal lines: `border-t border-[rgba(196,184,150,0.3)]` at regular intervals, narrowing toward the vanishing point.
- Vanishing point indicator: `bg-[#c4b896] w-1 h-1 rounded-full opacity-60` at center-top.
- Ground plane: `bg-gradient-to-b from-[#e8dcc0] to-[#d8c8a0] opacity-30`.
- Full: `relative bg-[#f0ead0] overflow-hidden h-48`

## Color Palette System

### Core Renaissance Study Palette

| Color | Hex | Role |
|---|---|---|
| Parchment | `#f0ead0` | Primary light surface, papers, backgrounds |
| Aged Parchment | `#e8dcc0` | Secondary parchment, slightly darker |
| Foxing Cream | `#e0d4b0` | Stained/aged paper areas |
| Ink Dark | `#1a1a1a` | Text, ink marks, deep contrasts |
| Desk Walnut | `#5a3a1a` | Primary desk surface, wood elements |
| Desk Walnut Light | `#6a4a2a` | Wood highlights, grain accents |
| Desk Walnut Dark | `#3a2010` | Wood shadows, edges |
| Leather Sienna | `#6a4a2a` | Folio covers, leather textures |
| Leather Dark | `#4a3020` | Leather shadows, spine details |
| Candle Warm | `#fff5d0` | Candlelight glow, highlights |
| Candle Amber | `#d4a020` | Flame body, warm accent |
| Globe Blue | `#4a7aaa` | Celestial elements, accent color |
| Globe Blue Light | `#a0c8e8` | Globe highlights, constellation lines |
| Anatomical Cream | `#f5f0e0` | Illustration paper, study sketches |
| Perspective Gray | `#c4b896` | Grid lines, measurement marks |
| Brass Gold | `#b8a040` | Folio corners, metal accents |
| Wood Dark | `#3a2a1a` | Deep shadows, ink stains |

Rules: Warm earth tones dominate (walnut, sienna, parchment). Candlelight amber provides the sole warm highlight. Globe blue is the only cool accent, reserved for celestial and intellectual elements. The palette should feel like a scholar's desk illuminated by a single candle in a quiet study.

## Typography Recommendations

Renaissance Study typography is humanist, calligraphic, and rooted in Aldine press tradition:

- **Display headings:** Cormorant Garamond, EB Garamond, or Playfair Display (old-style Roman with humanist proportions).
- **Calligraphic display:** Dancing Script, Great Vibes, or Homemade Apple (handwritten quill-pen effect).
- **Body text:** Crimson Text, Libre Baskerville, or Lora (elegant readable humanist serif).
- **Manuscript notes:** `font-serif italic text-[#3a2a1a]` with `leading-relaxed` for the feel of hand-copied marginalia.
- **Labels and measurements:** `font-serif italic text-[10px] text-[#6a5a3a] tracking-wide` for anatomical diagram annotations.
- Avoid sans-serif entirely. Renaissance is humanist serif territory.
- Avoid heavy blackletter or gothic — this is the new Roman humanism, not the medieval scriptorium.

## Component Architecture Pattern

1. Walnut desk surface background (dark wood gradient with grain texture).
2. Candlelight illumination effect (warm radial glow from upper-left).
3. Parchment cards with aged texture and foxing marks.
4. Leather folio covers with tooled borders and brass corners.
5. Ink well accents and quill pen decorations.
6. Anatomical illustrations with measurement lines and italic labels.
7. Celestial globe silhouettes as intellectual accent pieces.
8. Perspective grid as structural underlay or decorative background element.
9. Humanist calligraphic typography throughout.

## Interaction Rules

- Default state: scholarly, warm, contemplative — like objects resting on a desk.
- Hover: candlelight intensifies slightly, paper warms.
  - `hover:shadow-[2px_4px_12px_rgba(60,30,10,0.3)] hover:brightness-105 transition-all duration-300`.
- Active: `active:scale-[0.99] active:shadow-[1px_2px_4px_rgba(60,30,10,0.4)]` (gentle press into desk).
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#b8a040] focus:ring-offset-2 focus:ring-offset-[#f0ead0]` (brass ring on parchment).
- Transitions: `transition-all duration-300` (measured, scholarly pace — not theatrical).
- Scroll interactions: parchment cards shift slightly as if pages turning — `transition-transform duration-500 ease-out`.
- Ink spreading: on click, a subtle ink-spread effect `bg-[radial-gradient(circle,rgba(26,26,26,0.1)_0%,transparent_70%)]` expanding from the click point.

## Reusable Tailwind Tokens

- Parchment card: `bg-[#f0ead0] border border-[#d4c8a0] p-6 shadow-[2px_3px_8px_rgba(60,30,10,0.2)]`
- Leather folio: `bg-gradient-to-br from-[#6a4a2a] to-[#4a3020] border-2 border-[#8a6a3a] shadow-[4px_4px_12px_rgba(0,0,0,0.3)] p-8`
- Desk surface: `bg-gradient-to-br from-[#4a2a12] via-[#5a3a1a] to-[#3a2010] p-8`
- Candle glow: `bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,245,208,0.15)_0%,rgba(255,220,150,0.05)_30%,transparent_60%)]`
- Globe accent: `bg-gradient-to-br from-[#4a7aaa] to-[#2a5a8a] rounded-full border-2 border-[#3a6a9a]`
- Ink text: `text-[#1a1a1a] font-serif leading-relaxed`
- Anatomical label: `text-[10px] text-[#6a5a3a] font-serif italic`
- Manuscript heading: `text-[#3a2a1a] font-serif font-semibold tracking-wide`
- Perspective grid: SVG with `stroke-[#c4b896] stroke-[0.5px] opacity-40`
- Brass accent: `bg-[#b8a040]` or `text-[#b8a040]`
- Quill stroke: `border-t-2 border-[#1a1a1a] opacity-70 transform -rotate-45` for decorative ink strokes

## Quality Checklist (must pass)

- Warm parchment and walnut tones dominate the palette (not bright, not cool).
- Candlelight illumination effect present (warm radial glow from upper-left corner).
- Parchment texture visible on light surfaces (grain, subtle foxing).
- Leather folio elements use tooled borders and blind-stamp impressions.
- Ink dark (#1a1a1a) used consistently for text and mark-making.
- Globe blue (#4a7aaa) appears only as an intellectual accent, not as a primary.
- Typography is humanist serif throughout (no sans-serif, no heavy blackletter).
- Materials feel natural: wood grain, leather texture, ceramic glaze, feathered quill.
- The mood reads as a quiet scholar's study illuminated by candlelight.
- Anatomical illustrations have measurement lines and italic label annotations.
- Perspective grid elements suggest Brunelleschi's systematic approach to space.
- Interactive elements have brass-toned focus rings and subtle desk-surface press.

## Anti-Patterns

- Cool blue or gray dominance (renaissance study is warm earth tones, not cool modern).
- Sans-serif typography (humanist serif is mandatory for the scholarly aesthetic).
- Bright white backgrounds (parchment #f0ead0 is the lightest surface, never pure white).
- Dramatic chiaroscuro lighting (candlelight is gentle and intimate, not theatrical spotlighting).
- Flat untextured surfaces (every paper has grain, every desk has wood texture, every leather has tooling).
- Missing ink or quill elements (ink well, quill, and iron gall marks are the scholar's tools).
- Metallic chrome or silver (brass and brass-gold only — period-appropriate metals).
- Geometric precision without perspective grid (renaissance is about systematic spatial understanding).
- Cartoonish or illustrative rendering (anatomical drawings should feel clinical and precise).
- Missing candlelight glow (warm illumination is the essential atmospheric element).
- Gothic or blackletter typefaces (this is the humanist new Roman, not the medieval scriptorium).
- Digital or neon effects (everything must feel analog, handmade, natural).

## Accessibility Considerations

- Parchment (#f0ead0) with ink dark (#1a1a1a) text provides WCAG AAA contrast (14.2:1 ratio).
- Walnut dark (#3a2010) text on parchment also exceeds WCAG AAA.
- Globe blue (#4a7aaa) on parchment must be verified — large text minimum for AA compliance.
- Candlelight glow effects should not wash out text in illuminated areas — verify readability.
- Foxing marks and paper texture overlays must not reduce text contrast below 4.5:1.
- Focus states: `focus:ring-2 focus:ring-[#b8a040]` (brass ring visible on both light parchment and dark desk).
- Ornamental SVGs (celestial constellation lines, perspective grids, quill decorations) must be `aria-hidden="true"`.
- Anatomical illustrations require `alt` text describing the figure and its labeled features.
- The warm, low-contrast aesthetic may challenge users with color vision deficiency — ensure sufficient luminance contrast independent of hue.
- Touch targets on folio cards must account for the decorative border offset.
- Candlelight glow pseudo-elements must use `pointer-events-none` so they do not intercept clicks.
