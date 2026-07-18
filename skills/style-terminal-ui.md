---
name: terminal-ui
description: Build terminal / DOS UI components (monospace typography, phosphor glow, command palette, CGA color themes, CRT scanlines, keyboard-native interaction) with amber/green phosphor aesthetics, CLI metaphors, and developer-focused command-line interfaces. Trigger this skill when the user asks for terminal UI, DOS UI, CLI aesthetic, command-line interface design, phosphor display, retro computing UI, or developer-focused hacker aesthetic.
---

# Terminal / DOS UI

Use this skill to design and implement command-line-inspired interfaces with monospace typography, phosphor glow effects, CGA color themes, CRT scanlines, and keyboard-native interaction patterns optimized for developers and technical users.

## Non-Negotiable Foundations

- Terminal UI mimics the aesthetic of retro computer terminals (VT100, DOS, Unix shell) applied to modern web interfaces.
- Monospace typography is mandatory everywhere: every heading, body text, label, and data point uses a monospace font.
- Phosphor glow is the signature visual effect: text and borders emit a subtle glow simulating CRT phosphor excitement.
- Color themes are based on real terminal palettes: CGA amber, CGA green, phosphor green, amber mono, and dark backgrounds.
- Keyboard-native interaction: command palette (`Cmd+K`), keyboard shortcuts, and vim-style navigation are expected.
- The aesthetic serves function: high information density, data visibility, and technical clarity are the goals.

## Core Material Recipes

### 1) Terminal Window

The foundational container: a terminal window with title bar and content area.

- Outer: `bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]`.
- Title bar: `bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[#333]`.
- Window buttons: three circles `w-3 h-3 rounded-full` in `bg-[#ff5f56]`, `bg-[#ffbd2e]`, `bg-[#27c93f]`.
- Title text: `text-[#888] font-mono text-xs ml-2` (e.g., "user@localhost: ~/project").
- Content area: `p-4 font-mono text-sm text-[#e0e0e0] bg-[#0a0a0a]`.

### 2) Phosphor Text

Text with CRT phosphor glow effect.

- Green phosphor: `text-[#00ff00] [text-shadow:0_0_2px_rgba(0,255,0,0.8),0_0_5px_rgba(0,255,0,0.5)]`.
- Amber phosphor: `text-[#ffb000] [text-shadow:0_0_2px_rgba(255,176,0,0.8),0_0_5px_rgba(255,176,0,0.5)]`.
- White phosphor: `text-[#e0e0e0] [text-shadow:0_0_2px_rgba(224,224,224,0.6)]`.
- Glow is subtle — just enough to suggest the phosphor is excited, not a neon sign.

### 3) Terminal Input

Command-line input with prompt prefix and blinking cursor.

- Container: `flex items-center gap-2 font-mono text-sm`.
- Prompt: `text-[#00ff00]` showing `user@host:~$`.
- Input: `bg-transparent text-[#e0e0e0] outline-none flex-1 font-mono`.
- Cursor: `inline-block w-2 h-4 bg-[#00ff00] animate-pulse`.

### 4) Terminal Card / Panel

Data display panel with terminal aesthetic.

- `bg-[#111] border border-[#333] rounded p-4 font-mono`.
- Header: `text-[#888] text-xs uppercase tracking-wider border-b border-[#333] pb-2 mb-3`.
- Data rows: `flex justify-between text-sm py-1`.
- Key: `text-[#888]`, Value: `text-[#00ff00]`.

### 5) Command Palette (Cmd+K)

The signature terminal interaction: a searchable command palette.

- Overlay: `fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] z-50`.
- Palette: `bg-[#1a1a1a] border border-[#333] rounded-lg w-full max-w-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]`.
- Input: `w-full bg-transparent text-[#e0e0e0] px-4 py-3 outline-none font-mono text-sm border-b border-[#333]`.
- Results: list of commands with `font-mono text-sm`, highlighted match: `bg-[#00ff00]/10 text-[#00ff00]`.
- Shortcut hints: `text-[#666] text-xs` showing keyboard shortcuts.

### 6) CRT Scanline Overlay

Subtle scanline texture for CRT authenticity.

- `absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-40`.
- Optional CRT curvature: `before:absolute before:inset-0 before:rounded-[50%/10%] before:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]`.

## Color Palette System (CGA / Terminal Themes)

### Phosphor Green (default)

| Role | Hex | Purpose |
|---|---|---|
| Background | `#0a0a0a` | Deep black (not pure `#000`) |
| Surface | `#111111` | Cards, panels |
| Border | `#333333` | Dividers, panel borders |
| Primary text | `#e0e0e0` | Body text |
| Phosphor accent | `#00ff00` | Prompts, data values, highlights |
| Muted text | `#888888` | Labels, metadata |
| Dim text | `#666666` | Comments, hints |

### Phosphor Amber

| Role | Hex |
|---|---|
| Background | `#0a0a0a` |
| Phosphor accent | `#ffb000` |
| Primary text | `#e0d0a0` |
| Muted text | `#887755` |

### Powerline / Modern Terminal

| Role | Hex |
|---|---|
| Background | `#282c34` |
| Surface | `#21252b` |
| Blue | `#61afef` |
| Green | `#98c379` |
| Red | `#e06c75` |
| Yellow | `#e5c07b` |
| Purple | `#c678dd` |
| Cyan | `#56b6c6` |
| Orange | `#d19a66` |

### Syntax Highlighting

Terminal UI often includes code or data with syntax colors:

| Token Type | Color | Hex |
|---|---|---|
| Keyword | Red | `#e06c75` |
| String | Green | `#98c379` |
| Number | Orange | `#d19a66` |
| Comment | Gray | `#7f848e` |
| Function | Yellow | `#e5c07b` |
| Variable | Blue | `#61afef` |
| Type | Cyan | `#56b6c6` |
| Constant | Purple | `#c678dd` |

## Typography System

Terminal UI uses monospace exclusively. Hierarchy comes from color, weight, and size.

| Element | Size | Weight | Color |
|---|---|---|---|
| Page title | `text-2xl` to `text-3xl` | `font-bold` | Phosphor accent |
| Section header | `text-base` to `text-lg` | `font-bold` | Primary text |
| Data label | `text-xs` | `font-bold uppercase` | Muted (`#888`) |
| Data value | `text-sm` to `text-base` | `font-normal` | Phosphor accent |
| Body text | `text-sm` | `font-normal` | Primary text (`#e0e0e0`) |
| Comment/hint | `text-xs` | `font-normal` | Dim text (`#666`) |
| Code | `text-sm` | `font-normal` | Syntax colors |

### Font Recommendations

| Font | Character | Best For |
|---|---|---|
| **JetBrains Mono** | Modern, readable, ligatures | Primary recommendation |
| **Fira Code** | Programming ligatures | Code display |
| **IBM Plex Mono** | Slightly warmer, humanist | General terminal UI |
| **Space Mono** | Retro-tech character | Display headings |
| **VT323** | Authentic CRT pixel font | Decorative/retro elements |
| **Cascadia Code** | Modern Microsoft terminal | Windows-flavor terminals |

## Component Architecture Pattern

1. Deep black background (`#0a0a0a`, never pure `#000`).
2. Optional CRT scanline overlay (subtle, `opacity-40`).
3. Terminal window containers (title bar + content area).
4. Monospace typography with phosphor glow on accents.
5. Data panels with key-value rows.
6. Command palette overlay (Cmd+K) for navigation/actions.
7. Status bar at bottom (optional): showing cursor position, mode, system status.

## Interaction Rules

- Default state: dark terminal aesthetic with phosphor accents.
- Hover: `hover:bg-[#1a1a1a]` (subtle highlight on interactive rows).
- Active/selected: `bg-[#00ff00]/10 text-[#00ff00]` (green highlight on selected items).
- Focus: `focus:outline-none focus:ring-1 focus:ring-[#00ff00]` (thin phosphor ring).
- Cursor blink: `animate-pulse` on the cursor element.
- Keyboard shortcuts are prominently displayed (e.g., `^K`, `:wq`, `ESC`).
- Transitions: `transition-colors duration-100` (fast, digital feel).

## Keyboard-Native Patterns

Terminal UI is keyboard-first. Implement these patterns:

### Command Palette (Cmd+K / Ctrl+K)

- Triggered by `Cmd+K` or `Ctrl+K`.
- Fuzzy search across commands, pages, and actions.
- Arrow keys to navigate, Enter to execute, Esc to close.
- Each command shows a keyboard shortcut hint.

### Vim-Style Navigation

- `j`/`k` for up/down navigation in lists.
- `/` to focus search.
- `Enter` to select/execute.
- `Esc` to go back / blur.

### Status Bar

Bottom status bar showing:
- Current mode (NORMAL, INSERT, SEARCH).
- Cursor position (line:column).
- File/branch name.
- Encoding/format.

## Reusable Tailwind Tokens

- Terminal window: `bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]`
- Title bar: `bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[#333]`
- Phosphor text (green): `text-[#00ff00] [text-shadow:0_0_2px_rgba(0,255,0,0.8),0_0_5px_rgba(0,255,0,0.5)]`
- Data panel: `bg-[#111] border border-[#333] rounded p-4 font-mono`
- Command palette: `bg-[#1a1a1a] border border-[#333] rounded-lg w-full max-w-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]`
- Scanlines: `bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]`
- Window buttons: `w-3 h-3 rounded-full bg-[#ff5f56]` / `bg-[#ffbd2e]` / `bg-[#27c93f]`
- Blinking cursor: `inline-block w-2 h-4 bg-[#00ff00] animate-pulse`

## Quality Checklist (must pass)

- Typography is monospace throughout (no sans-serif or serif anywhere).
- Background is deep black (`#0a0a0a` to `#111`, never pure `#000`).
- Phosphor glow on accent text and values (subtle `text-shadow`).
- Terminal window containers with title bars and window buttons.
- Command palette (Cmd+K) is implemented for keyboard navigation.
- Data is displayed in key-value rows with clear labels.
- CRT scanline overlay is subtle and does not impede readability.
- Keyboard shortcuts are visible and functional.
- The aesthetic serves function: high information density and technical clarity.
- One phosphor color is dominant (green or amber); do not mix both.

## Anti-Patterns

- Sans-serif or serif fonts (terminal is monospace only).
- Pure black background (`#000000` — use `#0a0a0a` instead for depth).
- Bright or pastel colors (terminal is dark with specific phosphor accents).
- Over-saturated glow effects (phosphor glow is subtle, not neon).
- Missing keyboard navigation (terminal UI MUST be keyboard-first).
- Rounded corners on everything (`rounded-lg` max for windows; data panels are `rounded` or `rounded-none`).
- Light mode (terminal UI is dark-native; a light variant must still feel terminal-like).
- Decorative animations (keep it functional; cursor blink and scanline drift only).
- Missing command palette (Cmd+K is expected in terminal UI).
- Mixing green and amber phosphor (pick one theme).

## Accessibility Considerations

- Monospace fonts at `text-sm` are readable but ensure minimum 14px for body text.
- Phosphor glow should not blur text; verify readability with and without glow.
- CRT scanlines are decorative: `pointer-events-none` and `opacity-40` maximum.
- Keyboard navigation is the PRIMARY interaction method; ensure all actions have shortcuts.
- Focus states: thin phosphor ring `focus:ring-1 focus:ring-[#00ff00]` (visible against dark).
- Command palette must be fully operable via keyboard (arrow keys, Enter, Esc).
- Ensure screen readers can access all data despite the visual density.
- Respect `prefers-reduced-motion`: disable cursor blink and scanline animation.
- Color contrast: phosphor green (`#00ff00`) on `#0a0a0a` has excellent contrast (15:1+).
- Provide visual feedback for keyboard shortcuts (highlight on key press).
