---
name: design-laws
description: "UX psychology laws and aesthetic principles that prevent random design decisions."
---

# Design Laws

Fundamental principles that constrain design choices toward what works. Use these as non-negotiable checks before shipping.

## UX Psychology

- **Jakob's Law**: Users expect your product to work like others they know. Follow familiar patterns over novel ones unless the novel approach is materially better.
- **Hick's Law**: More choices = slower decisions. Minimize options on critical paths. Progressive disclosure over everything-at-once.
- **Fitts's Law**: Larger, closer targets are faster to hit. Primary actions get the largest hit area and shortest distance from the thumb cursor.
- **Miller's Law**: Working memory holds 7+/-2 items. Chunk information into groups, not flat lists.
- **Occam's Razor**: The simplest solution that works is the best. Remove complexity unless it earns its place.
- **Peak-End Rule**: Users judge an experience by its emotional high point and final interaction. Design the last screen deliberately.
- **Von Restorff Effect**: Items that stand out visually get remembered. One call-to-action per view, made visually distinct.
- **Serial Position Effect**: First and last items in a sequence are remembered best. Lead with the strongest content, end with the action.
- **Doherty Threshold**: Response under 400ms feels instantaneous. Perceived performance is real performance.
- **Law of Proximity**: Objects near each other are perceived as related. Spacing IS meaning.
- **Law of Similarity**: Elements that look alike are assumed to function alike. Consistent styling = consistent behavior.
- **Law of Common Region**: Items within a boundary are grouped. Cards, panels, and borders create structure.
- **Aesthetic-Usability Effect**: Users perceive beautiful designs as easier to use. Polish reduces perceived friction.
- **Recognition Over Recall**: Show options rather than requiring memory. Pick from visible choices, don't make users remember.

## Aesthetic Principles

These principles are mathematical, not subjective. Apply them to prevent "something feels off" problems.

- **Isolation**: One focal point per view. If everything competes for attention, nothing wins. Isolate the hero element.
- **The Accent**: A single contrasting element (color, size, weight) creates visual interest without chaos. One accent, not five.
- **Grouping**: Related elements cluster. Unrelated elements separate. The gap between groups is as important as the content.
- **Framing**: Boundaries (borders, shadows, color blocks) direct the eye. Frame what matters, blur what supports.
- **Proportion**: Use ratio systems (golden ratio, 8pt grid, modular scale) for sizing. Random values look random because they are.
- **Movement**: The eye follows implied direction (diagonals, curves, gaze of subjects). Compose the reading path deliberately.
- **Tension**: Controlled asymmetry creates energy. Perfect symmetry creates stasis. Match the tension level to the product's voice.
- **Shadows**: Depth communicates hierarchy. Consistent light direction is mandatory. One light source, not five.
- **Denoising**: Remove everything that doesn't serve the message. If a decoration doesn't clarify or direct, delete it.

## Anti-Patterns to Reject

These are statistical defaults that signal generic AI output. They fail because they fit any product, which means they fit none.

- Violet/purple primary with cyan accent on near-black (the AI default palette)
- Gradient wallpaper heroes without product content
- Blurred decorative blobs standing in for real imagery
- Interchangeable equal-card grids with no hierarchy
- Glassmorphism as decoration rather than material metaphor
- Motion library added only to fade sections into view

When in doubt: derive from the product's real world. Ground color in the material, type in the audience, layout in the workflow.
