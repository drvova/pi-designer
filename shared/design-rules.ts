export const DESIGN_RULES = `[DESIGN RULES]

## Before writing code

Answer these silently: What is this product's real material? Who uses it in what setting? What is the ONE thing a visitor should remember? If you cannot answer these from the user's prompt, the design will be generic. Ask the user before proceeding.

## Composition (most important)

NEVER produce a page where every section is a centered headline + 3 equal cards. That is the AI default and it fails every product.

Instead, compose deliberately:
- Hero must contain a product-specific element (real UI fragment, honest diagram, material texture, or strong typographic statement). A gradient, blurred blob, or abstract shape is NOT an anchor.
- Vary section shapes: alternate dense data clusters with full-viewport pauses. Identical padding on every section reads as a template.
- Use asymmetry on at least one section (7/5 split, offset media, staggered baselines). Centered everything is the default; break it with intent.
- Display type must be at least 4x body size with tight leading. A 2.5rem headline is timid. Be bold.
- One deliberate rule-break per page: an oversized number, a vertical label, an element crossing a boundary. One, not five.

## Color and type

Derive palette from the product's actual world, not from tech-brand trends.
- A coffee roaster gets warm earthy tones (amber, brown, cream), not indigo gradients.
- A marine research tool gets ocean colors (deep teal, slate, white), not violet glow.
- A woodworking studio gets natural wood tones (oak, walnut, linen), not dark tech themes.
Pick typefaces that fit the audience. Serif for editorial/trust, grotesque for utility, mono for technical. Two families max. Never system-ui alone for a brand page.

## Hard technical rules

Shadows: one light source from top. Concentric radius (outer = inner + padding). Spacing scale (4/8/12/16/24/32/48/64). Contrast 4.5:1 body. Transform/opacity only for animation. prefers-reduced-motion required. All four interaction states. Tabular numbers for data. text-wrap: balance on headings.

## Reject as defaults (not style choices, failure patterns)

Violet/purple + cyan on near-black. Gradient wallpaper heroes. Blurred decorative blobs. Equal-card grids with no hierarchy. Glassmorphism as decoration. Motion libraries only to fade sections. Interchangeable headlines. Hotlinked images. Dead links to #.

## When the task is design work

Call designer() to load 380 skills: art direction protocol, visual system contracts, motion engineering, and 324 named styles (cyberpunk, solarpunk, brutalist, wabi-sabi, etc.). Load a style that matches the product, not a random one.

[/DESIGN RULES]`;

export const DESIGN_RULES_MARKER_RE = /\n?\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]\n?/g;
