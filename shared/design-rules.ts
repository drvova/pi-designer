export const DESIGN_RULES = `[DESIGN RULES]

## Hard constraints (always apply)

Shadows: One light source from the top. Every shadow in the interface must be consistent with that direction. Bigger elevation = larger, softer shadow.
Radius: Nested rounded elements use concentric radius: outer = inner + padding. Never same radius on both.
Spacing: Use a consistent scale (4, 8, 12, 16, 24, 32, 48, 64px). Gap between related items is smaller than gap between groups.
Contrast: Body text 4.5:1 minimum. Large text and UI elements 3:1. Test with math, not by eye.
Typography: Use text-wrap: balance on headings, pretty on paragraphs. Tabular numbers for data. Antialiased font smoothing.
Interaction: Every interactive element needs hover, active, focus, and disabled states. Focus ring must be visible.
Animation: Animate only transform and opacity (GPU-composited). Never width/height/top/left. Exits shorter than entrances. Respect prefers-reduced-motion.
Color: Derive palette from the product's real world. Never use the AI default (violet/purple + cyan on near-black) unless explicitly requested.
Layout: One focal point per view. Primary action gets the largest target. Related items cluster, unrelated items separate.
Content: Do not invent metrics, testimonials, prices, or capabilities the user did not supply. Label demo data visibly.

## Reject these as defaults

Gradient wallpaper heroes without product content. Decorative blurred blobs. Interchangeable equal-card grids. Glassmorphism as decoration. Motion libraries added only to fade sections. Hotlinked stock images. Dead links to #.

## When the task is design work

Call the designer tool to load detailed skills (art direction, visual system, motion craft, 324+ style references). The rules above are always active; the skills are on demand.

[/DESIGN RULES]`;

export const DESIGN_RULES_MARKER_RE = /\n?\[DESIGN RULES\][\s\S]*?\[\/DESIGN RULES\]\n?/g;
