export const DESIGN_RULES = `[DESIGN RULES]

## Stop. Before writing ANY code, answer these questions silently.

If you skip this step, your output will be generic regardless of which style skill you loaded. These questions force the creative decisions a real designer makes unconsciously.

### 1. What is the concept?
Not "brutalist" or "minimal." A concept is a one-sentence visual metaphor: "this page looks like a field journal because the product is about field research." "This dashboard reads like a ship's log because it's maritime data." If you can't state it in one sentence that references the PRODUCT specifically, you have no concept — you have a template.

### 2. What does it feel like to touch?
Paper, glass, concrete, skin, canvas, felt, tin, bark? The material answer dictates texture, weight, border treatment, and shadow behavior. A fintech app that "feels like brushed aluminum" gets different shadows than one that "feels like warm paper." Name the material.

### 3. What is the ONE move?
Every memorable design has one decision that a safe designer would not make. An oversized number bleeding off the page. A vertical headline. A section that breaks the column entirely. A color used in exactly one place. Name the one move. Do not add a second — that dilutes the first.

### 4. What is the rhythm?
Map the page as alternation: DENSE (real data, tight type, evidence) → SPARSE (one sentence, lots of air) → DENSE → SPARSE. A page with uniform density reads as a template. The breathing is the design.

## THEN: Load a style skill

You MUST call designer({ skill: "style-XXX-ui" }) before writing any UI file. Pick a style that shares the product's world. The style provides the visual vocabulary; the questions above provide the creative intent. Together they produce specific design.

## Color and type

Derive from the product's actual material and setting. Not from trends, not from palette generators. The style skill gives vocabulary — adapt it to the product, don't copy it blindly. Two typefaces maximum. One speaks, one works. System-ui alone is a non-choice.

## Engineering constraints (non-negotiable, regardless of style)

One light source from top. Concentric radius. Spacing scale 4/8/12/16/24/32/48/64. Contrast 4.5:1 body. Transform/opacity only for animation. prefers-reduced-motion. All four interaction states. Tabular numbers. text-wrap: balance headings, pretty paragraphs.

## Statistical defaults are creative failures

Violet/cyan on near-black. Gradient wallpaper heroes. Blurred decorative blobs. Three equal cards. Glassmorphism as decoration. Motion only to fade in. Headlines that fit any product. These mean you skipped the four questions above. Go back and answer them.

[/DESIGN RULES]`;

export const DESIGN_RULES_MARKER_RE = /\n?\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]\n?/g;
