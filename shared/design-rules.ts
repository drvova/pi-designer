export const DESIGN_RULES = `[DESIGN RULES]

## Think before you code

What is this product made of? Wood, data, sound, fabric, code, food? The answer IS the design direction. A coffee roaster is amber and brown. A marine tool is deep teal. A woodworking studio is oak and walnut. If you cannot name the material in one word, you have no art direction — ask the user.

## Composition is the product

A page is not sections. It is a reading path the eye follows. Design that path:
- The eye lands on the largest element first. Make that the product's real interface, data, or material — not a headline floating in space. Show the thing.
- Contrast dominates: one section dense with real data, the next almost empty. A breathing page feels designed. A uniform-density page feels templated.
- Break the grid: let one element cross a boundary, bleed to an edge, or take unexpected scale. This is the page's signature. One move. Not five.
- Display type earns its size: 4x body minimum, tight leading, negative tracking at large sizes. A 2.5rem headline is a confession of timidity.

## Color comes from the world

Do not pick a color from a palette generator. Derive it from the product's setting:
- A bakery: flour white, crust brown, egg yolk yellow, oven warmth.
- A data platform: terminal green, oscilloscope amber, or blueprint blue — pick the metaphor.
- A fitness app: sweat, energy, muscle — not generic "health green."
If the product is abstract, ground it in the user's physical context (office light, workshop, night drive, morning routine).

## Typography is voice

Two typefaces. One speaks, one works.
- The display face has personality: a serif for trust and craft, a grotesque for utility, a mono for precision.
- The body face is invisible: optimized for 14-16px screen rendering.
- System-ui alone is a non-choice. It says "we had no opinion."

## Engineering constraints (non-negotiable)

Shadows: one light source from the top. Concentric radius (outer = inner + padding). Spacing scale (4/8/12/16/24/32/48/64px). Contrast 4.5:1 minimum for body text. Transform and opacity only for animation — never width, height, top, or left. prefers-reduced-motion required on every animated element. All four interaction states (hover, active, focus-visible, disabled). Tabular numbers for data. text-wrap: balance on headings, pretty on paragraphs. Antialiased rendering.

## Statistical defaults are failures

These patterns mean the design has no product-specific thought. They are not style choices — they are the absence of a decision:
- Violet/purple + cyan on near-black for anything tech.
- Gradient wallpaper heroes with no product content.
- Blurred decorative blobs standing in for real imagery.
- Three equal cards in a row with identical headings.
- Glassmorphism as decoration. Bento grids as decoration.
- A motion library installed only to fade sections in.
- Headlines that could describe any product.

## When the task is design work

Call designer() to load skills: composition protocol, visual system contracts, motion engineering, and 324 named styles. Load a style that matches the product's world. The rules above are always active; the skills give you depth on demand.

[/DESIGN RULES]`;

export const DESIGN_RULES_MARKER_RE = /\n?\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]\n?/g;
