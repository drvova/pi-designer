---
name: crime-scene-ui
description: Build crime scene UI components (caution tape, evidence markers, forensic data, case file folders, redacted documents, police line aesthetic) with yellow-black hazard stripes, evidence number tags, classified stamps, and the investigative atmosphere of forensic analysis. Trigger this skill when the user asks for crime scene design, forensic UI, police investigation aesthetic, evidence board, case file interface, or detective/true-crime interfaces.
---

# Crime Scene / Forensic UI

Use this skill to design and implementation investigative interfaces inspired by crime scene forensics: yellow-black caution tape, numbered evidence markers, case file folders, redacted documents, classified stamps, string-and-pin investigation boards, and the analytical atmosphere of detective work.

## Core Material Recipes

### 1) Case File Folder Surface

Manila folder background.

- `bg-[#e8dcc0] rounded-sm p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#c4a878]`.
- Folder tab: `bg-[#d4c8a0] h-6 -mt-6 mx-4 rounded-t-sm` (manila folder tab at top).

### 2) Caution Tape Divider

Yellow-black hazard stripe.

- `bg-[repeating-linear-gradient(45deg,#ffcc00,#ffcc00_12px,#1a1a1a_12px,#1a1a1a_24px)] h-4` with `font-mono text-[#1a1a1a] text-xs font-bold tracking-widest text-center leading-4` reading "CRIME SCENE - DO NOT CROSS".

### 3) Evidence Marker

Numbered evidence tent/card.

- `bg-[#e8dcc0] border border-[#5a4a2a] px-2 py-1 font-mono font-bold text-sm text-[#5a4a2a]` showing "EVIDENCE #7".

### 4) Redacted Text

Black-bar redaction effect.

- `bg-black text-transparent select-none` (redacted text bar).
- Or: `bg-[#1a1a1a] text-[#1a1a1a]` (blacked-out text).

### 5) Classified Stamp

Red rotated stamp overlay.

- `border-4 border-[#8a1a1a] text-[#8a1a1a] font-bold uppercase text-2xl tracking-widest px-4 py-2 rotate-[-12deg] inline-block opacity-80` reading "CLASSIFIED" or "TOP SECRET".

### 6) Investigation Board Panel

Cork board with pinned photos and red string connections.

- `bg-[#c9a87c]` (cork texture) with pinned elements and SVG red string lines between connected items.

### 7) Forensic Button

Official, stamped-style button.

- `bg-[#1a1a1a] text-[#ffcc00] font-mono font-bold uppercase tracking-widest text-sm px-6 py-3 border-2 border-[#ffcc00] hover:bg-[#2a2a2a] transition-colors`.

## Color Palette System

| Color | Hex | Role |
|---|---|---|
| Manila | `#e8dcc0` | Primary surface (case files) |
| Caution Yellow | `#ffcc00` | Hazard stripes, accents |
| Ink Black | `#1a1a1a` | Text, redaction, borders |
| Evidence Brown | `#5a4a2a` | Markers, tags |
| Stamp Red | `#8a1a1a` | Classified stamps, urgent |
| Cork | `#c9a87c` | Investigation board |
| String Red | `#dc2626` | Connection lines |
| Aged Paper | `#f0e8d0` | Documents |

## Typography Recommendations

- **Primary:** Courier Prime, IBM Plex Mono (typewriter/case file font).
- **Stamps:** Impact, Oswald (bold stamped lettering).
- **Body:** Source Serif Pro, Lora (for document/readable text).
- **Labels:** `font-mono font-bold uppercase tracking-widest text-xs` (evidence tag style).

## Interaction Rules

- Default: analytical, investigative, official.
- Hover: evidence markers highlight, stamps rotate slightly.
  - `hover:border-[#ffcc00] hover:shadow-[0_0_8px_rgba(255,204,0,0.2)] transition-all`.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/50`.
- Transitions: `transition-all duration-200` (precise, analytical).

## Reusable Tailwind Tokens

- Case file: `bg-[#e8dcc0] border border-[#c4a878] shadow-[0_2px_8px_rgba(0,0,0,0.1)]`.
- Caution tape: `bg-[repeating-linear-gradient(45deg,#ffcc00,#ffcc00_12px,#1a1a1a_12px,#1a1a1a_24px)]`.
- Redacted: `bg-black text-transparent`.
- Classified stamp: `border-4 border-[#8a1a1a] text-[#8a1a1a] font-bold uppercase rotate-[-12deg]`.
- Evidence marker: `bg-[#e8dcc0] border border-[#5a4a2a] font-mono font-bold text-[#5a4a2a]`.
- Forensic button: `bg-[#1a1a1a] text-[#ffcc00] font-mono uppercase border-2 border-[#ffcc00]`.

## Quality Checklist

- At least one case file folder surface.
- Caution tape (yellow-black stripe) divider present.
- At least one evidence marker or numbered tag.
- Redacted text (black bar) element present.
- Classified/Top Secret rotated stamp accent.
- Typography uses monospace (typewriter/case file style).
- Investigation board or red string connection element.
- The aesthetic reads as a crime scene investigation or detective case file.
- Colors are manila, caution yellow, ink black, and stamp red.
- Everything feels analytical, official, and slightly ominous.

## Anti-Patterns

- Bright cheerful colors (crime scene is muted manila + caution yellow + ink).
- Decorative or ornamental styling (crime scene is functional and official).
- Missing monospace typography (case files need typewriter font).
- Missing caution tape (this is the signature visual element).
- Missing evidence markers (numbered tags are essential forensic vocabulary).
- Rounded friendly buttons (use angular official styling).
- Warm cozy atmosphere (crime scene is cold and analytical).
- Missing redaction effects (blacked-out text is a signature element).
- Serif body text without monospace labels (need both for the case-file duality).
- Missing classified stamps (these add the official investigative authority).

## Accessibility Considerations

- Manila backgrounds with dark text provide good contrast (verify WCAG AA).
- Focus states: `focus:ring-2 focus:ring-[#ffcc00]/50` (caution yellow ring).
- Caution tape patterns must not reduce text contrast.
- Redacted text (black bars) should use `aria-label` to indicate what was redacted if relevant.
- Classified stamps must be `aria-hidden="true"` when decorative.
- Evidence markers need semantic `aria-label` for screen readers.
- The monospace typography aids data readability but can be wide for body text.
- Touch targets must be adequate despite official angular styling.
