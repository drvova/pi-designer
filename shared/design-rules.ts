export const DESIGN_RULES = `[DESIGN RULES]

## Before writing ANY frontend code — STOP and load a style

You MUST call the designer tool with a style skill before writing UI. Building a page without loading a style produces generic output. The rules below constrain execution; the style skill gives the design its identity.

How to pick a style: read the product's name, audience, and setting. Match it to a style that shares its world. Examples:
- Marine research → call designer({ skill: "style-deep-sea-ui" }) or designer({ skill: "style-blueprint-ui" })
- Coffee roaster → call designer({ skill: "style-warm-editorial" }) or designer({ skill: "style-coffee-shop-ui" })
- Brutalist portfolio → call designer({ skill: "style-brutalist-ui" }) or designer({ skill: "style-neobrutalist-ui" })
- Eco product → call designer({ skill: "style-solarpunk-ui" }) or designer({ skill: "style-cottagecore-ui" })

If no style matches, call designer() with no arguments to load the full catalog and pick the closest match. Never build blind.

## Think before you code

What is this product made of? Wood, data, sound, fabric, code, food? The answer IS the design direction. If you cannot name the material in one word, you have no art direction — ask the user.

## Composition is the product

A page is not sections. It is a reading path the eye follows. Design that path:
- The eye lands on the largest element first. Make that the product's real interface, data, or material — not a headline floating in space. Show the thing.
- Contrast dominates: one section dense with real data, the next almost empty. A breathing page feels designed. A uniform-density page feels templated.
- Break the grid: let one element cross a boundary, bleed to an edge, or take unexpected scale. This is the page's signature. One move. Not five.
- Display type earns its size: 4x body minimum, tight leading, negative tracking at large sizes.

## Color comes from the world

Derive it from the product's setting, not from a palette generator or a trend. The style skill you loaded provides the palette foundation — adapt it to the product's specifics.

## Typography is voice

Two typefaces. One speaks, one works. The style skill specifies the type direction — follow it. System-ui alone is a non-choice.

## Engineering constraints (non-negotiable)

These apply regardless of which style skill was loaded:
Shadows: one light source from the top. Concentric radius (outer = inner + padding). Spacing scale (4/8/12/16/24/32/48/64px). Contrast 4.5:1 minimum for body text. Transform and opacity only for animation. prefers-reduced-motion required. All four interaction states (hover, active, focus-visible, disabled). Tabular numbers for data. text-wrap: balance on headings, pretty on paragraphs.

## Statistical defaults are failures

Violet/purple + cyan on near-black. Gradient wallpaper heroes. Blurred decorative blobs. Three equal cards. Glassmorphism as decoration. Motion libraries only to fade sections. Headlines that fit any product. These mean the design has no thought — the style skill prevents them.

[/DESIGN RULES]`;

export const DESIGN_RULES_MARKER_RE = /\n?\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]\n?/g;
