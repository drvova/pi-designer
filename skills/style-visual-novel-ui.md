---
name: visual-novel-ui
description: Build visual novel UI components (character dialogue boxes, branching choice buttons, anime-style portraits, text reveal animations, relationship meters) with dialogue-box layout, typewriter text, choice cards, and the interactive storytelling aesthetic of Japanese visual novels. Trigger this skill when the user asks for visual novel UI, dating sim interface, dialogue box design, branching narrative UI, anime game UI, or story-driven game interfaces.
---

# Visual Novel UI

Use this skill to design and implement story-driven interfaces inspired by Japanese visual novels and dating sims: bottom-positioned dialogue boxes, character portrait panels, branching choice buttons, typewriter text reveal, relationship/affection meters, and the cinematic reading experience of interactive fiction.

## Non-Negotiable Foundations

- Visual novel UI is designed for READING: the dialogue box is the primary interface element, typically positioned at the bottom of the screen.
- Character portraits (typically anime/manga style) occupy the screen behind the dialogue box, expressing emotion through expression changes.
- Text reveals progressively (typewriter effect), character by character, simulating speech.
- Choices are presented as branching buttons that appear over the dialogue box when a decision point is reached.
- Color palettes are soft and atmospheric: warm pinks for romance, cool blues for drama, muted tones for serious scenes.
- The aesthetic blends anime/manga illustration with clean, functional UI elements.

## Core Material Recipes

### 1) Dialogue Box

The foundational element: a semi-transparent text box at the bottom of the screen.

- Container: `fixed bottom-0 inset-x-0 bg-black/80 backdrop-blur-md border-t-2 border-white/20 p-6 min-h-[200px]`.
- Speaker name: `text-[#ffcc00] font-bold text-lg mb-2` (golden name above text).
- Dialogue text: `text-white text-lg leading-relaxed font-sans`.
- Continue indicator: blinking arrow `▶` at bottom right.

### 2) Semi-Transparent Dialogue Box (lighter variant)

- `bg-white/90 backdrop-blur-md border-2 border-[#ffb3d9] rounded-2xl mx-4 mb-4 p-6 min-h-[180px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]`.
- Speaker name: `text-[#e0558a] font-bold text-lg mb-2`.
- Text: `text-[#3a2a3a] text-lg leading-relaxed`.

### 3) Choice Button

Branching choice that appears when a decision is reached.

- `block w-full text-left bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 text-white font-medium text-base hover:bg-white/20 hover:border-white/50 transition-all cursor-pointer my-2`.
- Active/hover: `hover:translate-x-2`.
- With consequence indicator (optional): small icon at right showing the stat affected.

### 4) Character Portrait Panel

Area behind the dialogue box for character sprites.

- `absolute inset-0 flex items-end justify-center pointer-events-none`.
- Character sprite: absolutely positioned, can change position (left, center, right).
- Expression changes: swap sprite images or overlay emotion icons.

### 5) Relationship / Affection Meter

Visual indicator of relationship status with characters.

- `flex items-center gap-2` with character icon + heart meter.
- Meter: `w-32 h-3 bg-white/20 rounded-full overflow-hidden` with `bg-gradient-to-r from-[#ff6b6b] to-[#ff8a8a] h-full rounded-full` fill.

### 6) Typewriter Text Reveal

Progressive text reveal animation (JavaScript required).

```javascript
function typewriter(element, text, speed = 30) {
  let i = 0;
  element.textContent = '';
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
```

### 7) Backlog / History Button

Button to access previously read text.

- `fixed top-4 right-4 bg-black/50 backdrop-blur-sm text-white/70 rounded-lg px-3 py-2 text-sm hover:bg-black/70 hover:text-white transition-all`.
- Icon: book or clock SVG.

### 8) Settings / Auto-Read Toggle

Controls for reading experience.

- Auto-read toggle: `bg-black/50 text-white/70 rounded-lg px-3 py-2 text-sm`.
- Skip toggle: similar styling.
- Settings gear: opens modal with text speed, volume, etc.

## Color Palette System

### Romance / Dating Sim Palette

| Color | Hex | Role |
|---|---|---|
| Soft Pink | `#ffb3d9` | Borders, accents, romance |
| Hot Pink | `#e0558a` | Speaker names, affection |
| Warm Red | `#ff6b6b` | Heart meters, passion |
| Dark Overlay | `#1a0a1a` / `rgba(0,0,0,0.8)` | Dialogue box background |
| Warm White | `#fff5f8` | Light dialogue box variant |
| Navy | `#1a1a3a` | Serious scenes, drama |
| Gold | `#ffcc00` | Highlight, speaker names |

### Mystery / Thriller Palette

| Color | Hex | Role |
|---|---|---|
| Deep Blue | `#0a0a2a` | Background, tension |
| Cyan | `#00aeef` | Accents, evidence |
| Blood Red | `#8a1a1a` | Danger, warning |
| Pale Gray | `#e0e0e0` | Text, neutrality |

Rules: Color palette shifts with the scene's mood. Romance = warm pinks, mystery = cold blues, drama = deep contrasts. The dialogue box adapts to match.

## Typography Recommendations

Visual novel typography is readable, clean, and slightly rounded:

- **Primary:** Nunito, Quicksand, or M PLUS 1p (rounded, readable sans).
- **Japanese alternative:** Noto Sans JP, M PLUS 1p (for bilingual visual novels).
- **Speaker names:** `font-bold text-lg` with colored treatment (golden or pink).
- **Dialogue:** `font-normal text-lg leading-relaxed` (the MOST readable possible).
- **Choices:** `font-medium text-base` (clear and clickable).
- Body text should be at least 18px for comfortable reading during long sessions.

## Component Architecture Pattern

1. Full-screen character portrait background (anime/manga style).
2. Semi-transparent dialogue box at the bottom (fixed position).
3. Speaker name in colored text above dialogue.
4. Typewriter-revealed dialogue text.
5. Choice buttons that appear over the dialogue box when needed.
6. Relationship/affection meters in a corner.
7. Control buttons (backlog, auto-read, skip, settings) in top corners.
8. Continue indicator (blinking arrow) at dialogue box bottom.

## Interaction Rules

- Default state: reading, dialogue visible, portraits expressing emotion.
- Hover on choices: choice highlights and slides right (`hover:translate-x-2`).
- Click to advance: clicking anywhere advances text (standard VN convention).
- Choice selection: clicking a choice triggers branch and records consequence.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/50`.
- Transitions: `transition-all duration-200` (smooth, reading-pace).
- Typewriter speed: typically 20-40ms per character.
- Auto-read: advances text automatically after a delay.

## Reusable Tailwind Tokens

- Dialogue box: `bg-black/80 backdrop-blur-md border-t-2 border-white/20 p-6 min-h-[200px]`
- Light dialogue: `bg-white/90 backdrop-blur-md border-2 border-[#ffb3d9] rounded-2xl p-6`
- Choice button: `bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 text-white hover:bg-white/20 hover:translate-x-2 transition-all`
- Speaker name: `text-[#ffcc00] font-bold text-lg`
- Heart meter: `w-32 h-3 bg-white/20 rounded-full` with `bg-gradient-to-r from-[#ff6b6b] to-[#ff8a8a]` fill.
- Control btn: `bg-black/50 backdrop-blur-sm text-white/70 rounded-lg px-3 py-2 text-sm`
- Continue arrow: `text-white/60 animate-pulse` showing `▶`.

## Quality Checklist (must pass)

- Dialogue box is positioned at the bottom of the screen (fixed).
- Text reveals progressively (typewriter effect).
- Speaker names are displayed above dialogue in a distinct color.
- Choice buttons are semi-transparent and highlight on hover.
- Character portrait area exists behind the dialogue box.
- At least one relationship/affection meter present.
- Control buttons (backlog, auto, skip, settings) present in corners.
- Continue indicator (blinking arrow) present.
- Typography is readable at large sizes (18px+ body text).
- The aesthetic reads as a Japanese visual novel or dating sim.

## Anti-Patterns

- Missing the typewriter text reveal (this is the signature VN interaction).
- Dialogue box that doesn't contrast with the background portrait.
- Small text sizes (VN is a reading experience — text must be large).
- Missing choice buttons (branching is core to the VN experience).
- No speaker name display (users need to know who is talking).
- Missing the continue/advance indicator (users need to know when to click).
- Overly complex UI chrome (VN UI should be minimal — dialogue + portraits + choices).
- Fast text speed without user control (reading speed is personal).
- Missing the relationship/meter system (this is a core VN game mechanic).
- Sans-serif body text that is hard to read at length (use rounded, readable fonts).

## Accessibility Considerations

- Dialogue text should be minimum 18px for extended reading sessions.
- Semi-transparent dialogue boxes must maintain text contrast (verify WCAG AA).
- Typewriter speed must be user-configurable (some users read faster/slower).
- Auto-read and skip functions must be available for accessibility.
- Backlog/history feature allows users to re-read missed text.
- Focus states on choices: `focus:ring-2 focus:ring-[#ffcc00]/50`.
- Character portraits should have text alternatives for screen readers.
- Color-coded speaker names must also be identifiable by text (not color alone).
- Keyboard controls for advancing text and selecting choices (spacebar, arrow keys).
- Respect `prefers-reduced-motion`: disable typewriter effect (show full text instantly).
