---
name: quantum-computing-ui
description: Build quantum computing UI components (superposition wave, entanglement lines, qubit visualization, quantum gate circuit, Bloch sphere, decoherence noise, error correction grid) with quantum physics visualizations, wave function aesthetics, and the probabilistic beauty of quantum computing. Trigger this skill when the user asks for quantum UI, quantum computing design, qubit visualization, Bloch sphere interface, quantum circuit diagram, wave function aesthetic, quantum physics visualization, superposition design, or entanglement connection display.
---

# Quantum Computing UI

Use this skill to design and implement probabilistic, physics-driven interfaces that capture the bizarre beauty of quantum mechanics: superposition waves rendered as overlapping sine functions, entanglement lines linking paired qubits, Bloch sphere state displays, quantum gate circuit diagrams, probability clouds, decoherence noise textures, and error correction grids. The aesthetic is deep-void dark with luminous quantum purple, superposition blue, entanglement pink, and probability cyan -- a world where certainty dissolves into shimmering possibility.

## Non-Negotiable Foundations

- Quantum UI is set in QUANTUM VOID: the background is always a near-black indigo (#0a0a1a) that evokes the computational vacuum state from which qubits emerge.
- Three layers of physical reality: noise floor (decoherence texture), computation plane (circuits, gates, qubit states), and observation layer (readout panels, measurement results).
- Light comes from QUBIT STATES and WAVE FUNCTIONS: elements are illuminated by the glow of quantum probability amplitudes, not conventional UI lighting.
- Uncertainty is the aesthetic: elements shimmer, flicker, and phase-shift to evoke Heisenberg uncertainty and wave-particle duality. Nothing is fully solid until measured.
- Colors are spectral and phase-dependent: quantum purple (#8a40c0) for primary states, superposition blue (#4a8ae0) for wave functions, entanglement pink (#e060a0) for paired correlations, probability cyan (#40c0c0) for measurement outcomes, gate green (#40a060) for operations.
- Data is displayed as quantum circuits and state vectors: gate sequences, probability amplitudes, measurement statistics, coherence times, error rates.

## Core Material Recipes

### 1) Superposition Wave Background

Overlapping sine waves representing quantum superposition states. Multiple phase-shifted waves layer to create the characteristic interference pattern.

```html
<div class="relative overflow-hidden h-64 bg-[#0a0a1a]">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 256" preserveAspectRatio="none">
    <!-- Wave 1: Primary superposition -->
    <path d="M0,128 Q100,64 200,128 T400,128 T600,128 T800,128"
          stroke="#8a40c0" stroke-width="1.5" fill="none" opacity="0.6">
      <animate attributeName="d"
               values="M0,128 Q100,64 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,192 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,64 200,128 T400,128 T600,128 T800,128"
               dur="4s" repeatCount="indefinite"/>
    </path>
    <!-- Wave 2: Phase-shifted -->
    <path d="M0,128 Q100,48 200,128 T400,128 T600,128 T800,128"
          stroke="#4a8ae0" stroke-width="1.5" fill="none" opacity="0.5">
      <animate attributeName="d"
               values="M0,128 Q100,48 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,208 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,48 200,128 T400,128 T600,128 T800,128"
               dur="5s" repeatCount="indefinite"/>
    </path>
    <!-- Wave 3: Probability envelope -->
    <path d="M0,128 Q100,80 200,128 T400,128 T600,128 T800,128"
          stroke="#e060a0" stroke-width="1" fill="none" opacity="0.3">
      <animate attributeName="d"
               values="M0,128 Q100,80 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,176 200,128 T400,128 T600,128 T800,128;
                       M0,128 Q100,80 200,128 T400,128 T600,128 T800,128"
               dur="6s" repeatCount="indefinite"/>
    </path>
    <!-- Glow beneath waves -->
    <rect x="0" y="96" width="800" height="64" fill="url(#waveGlow)" opacity="0.3"/>
    <defs>
      <linearGradient id="waveGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8a40c0" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="#4a8ae0" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
</div>
```

Tailwind: Container uses `bg-[#0a0a1a] relative overflow-hidden` with SVG overlay containing animated wave paths in purple, blue, and pink.

### 2) Entanglement Connection Lines

Dashed lines linking entangled qubit pairs, with animated dash offsets that travel along the connection to show quantum correlation.

```html
<svg class="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
  <defs>
    <linearGradient id="entangleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e060a0" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#8a40c0" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#e060a0" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <!-- Entanglement line: dashed with traveling offset -->
  <line x1="15%" y1="40%" x2="85%" y2="40%"
        stroke="url(#entangleGrad)" stroke-width="1"
        stroke-dasharray="8 12" opacity="0.7">
    <animate attributeName="stroke-dashoffset"
             from="0" to="-40" dur="2s" repeatCount="indefinite"/>
  </line>
  <!-- Paired qubit nodes -->
  <circle cx="15%" cy="40%" r="6" fill="#e060a0" opacity="0.9"
          filter="url(#qubitGlow)"/>
  <circle cx="85%" cy="40%" r="6" fill="#e060a0" opacity="0.9"
          filter="url(#qubitGlow)"/>
  <defs>
    <filter id="qubitGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
</svg>
```

Tailwind: SVG uses `absolute inset-0 w-full h-full pointer-events-none` with `stroke-dasharray="8 12"` for the dashed pattern. Line gradient transitions from entanglement pink through quantum purple. Nodes are `rounded-full` circles with Gaussian blur glow filter.

### 3) Qubit Bloch Sphere

A wireframe sphere with a state vector arrow showing the qubit's position on the Bloch sphere. The sphere surface is a translucent gradient and the axes are labeled |0> and |1>.

```html
<div class="relative w-48 h-48 mx-auto">
  <!-- Sphere body -->
  <div class="absolute inset-2 rounded-full
              bg-[radial-gradient(circle_at_35%_35%,rgba(74,138,224,0.15)_0%,rgba(138,64,192,0.08)_40%,rgba(10,10,26,0.9)_70%)]
              border border-[#4a8ae0]/20">
    <!-- Equator ring -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-[#8a40c0]/30
                -translate-y-1/2 rounded-full
                [transform:rotateX(70deg)]"></div>
    <!-- Meridian ring -->
    <div class="absolute top-0 bottom-0 left-1/2 w-px bg-[#4a8ae0]/20
                -translate-x-1/2 rounded-full"></div>
  </div>
  <!-- State vector arrow -->
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6"
              refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#40c0c0"/>
      </marker>
    </defs>
    <line x1="96" y1="96" x2="130" y2="40"
          stroke="#40c0c0" stroke-width="2"
          marker-end="url(#arrowhead)" opacity="0.9"/>
    <!-- State label -->
    <text x="136" y="36" fill="#40c0c0" font-size="11"
          font-family="JetBrains Mono, monospace">|psi></text>
    <!-- Axis labels -->
    <text x="96" y="12" fill="#f0f0ff" font-size="9"
          font-family="JetBrains Mono, monospace"
          text-anchor="middle" opacity="0.5">|0></text>
    <text x="96" y="188" fill="#f0f0ff" font-size="9"
          font-family="JetBrains Mono, monospace"
          text-anchor="middle" opacity="0.5">|1></text>
  </svg>
</div>
```

Tailwind: Outer container `relative w-48 h-48 mx-auto`. Sphere uses `rounded-full` with a multi-stop radial gradient from blue to purple to void. State vector is an SVG arrow from center to upper-right quadrant. Axis labels use `font-mono text-xs`.

### 4) Quantum Gate Circuit Diagram

A horizontal circuit diagram with qubit lines, gate boxes (H, X, Y, Z, CNOT, T), and measurement symbols. Gate boxes are color-coded by type.

```html
<div class="bg-[#0a0a1a] border border-[#8a40c0]/20 rounded-xl p-6 font-mono text-xs">
  <!-- Qubit 1 line -->
  <div class="flex items-center gap-0 mb-8">
    <span class="w-12 text-[#f0f0ff] text-right pr-3">q[0]:</span>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- Hadamard gate -->
    <div class="relative -mt-0 w-10 h-10 flex items-center justify-center
                bg-[#4a8ae0]/10 border border-[#4a8ae0]/40 rounded-md
                text-[#4a8ae0] font-bold z-10
                shadow-[0_0_10px_rgba(74,138,224,0.2)]">H</div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- CNOT target -->
    <div class="relative -mt-0 w-10 h-10 flex items-center justify-center
                border border-[#e060a0]/40 rounded-full
                text-[#e060a0] font-bold z-10
                shadow-[0_0_10px_rgba(224,96,160,0.2)]">
      <div class="w-3 h-px bg-[#e060a0]/60 absolute"></div>
      <div class="w-px h-3 bg-[#e060a0]/60 absolute"></div>
    </div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- Measurement -->
    <div class="relative -mt-0 w-10 h-10 flex items-center justify-center
                bg-[#40c0c0]/10 border border-[#40c0c0]/40 rounded-md z-10">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M4,16 Q10,4 16,16" stroke="#40c0c0" stroke-width="1.5"
              fill="none"/>
        <line x1="10" y1="8" x2="14" y2="16" stroke="#40c0c0" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
  </div>
  <!-- Qubit 2 line -->
  <div class="flex items-center gap-0">
    <span class="w-12 text-[#f0f0ff] text-right pr-3">q[1]:</span>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- Identity (empty) -->
    <div class="w-10 h-10 z-10"></div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- CNOT control dot -->
    <div class="relative -mt-0 w-10 h-10 flex items-center justify-center z-10">
      <div class="w-3 h-3 rounded-full bg-[#e060a0]
                  shadow-[0_0_8px_rgba(224,96,160,0.5)]"></div>
    </div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
    <!-- X gate -->
    <div class="relative -mt-0 w-10 h-10 flex items-center justify-center
                bg-[#8a40c0]/10 border border-[#8a40c0]/40 rounded-md
                text-[#8a40c0] font-bold z-10
                shadow-[0_0_10px_rgba(138,64,192,0.2)]">X</div>
    <div class="h-px flex-1 bg-[#4a8ae0]/30"></div>
  </div>
</div>
```

Tailwind: Circuit container uses `bg-[#0a0a1a] border border-[#8a40c0]/20 rounded-xl p-6 font-mono text-xs`. Qubit lines use `h-px flex-1 bg-[#4a8ae0]/30`. Gate boxes are `w-10 h-10` with type-specific color coding: H gates blue, X/Y/Z gates purple, CNOT lines pink, measurement cyan.

### 5) Probability Cloud / Amplitude Display

A visualization of measurement probability distribution as a glowing bar chart or radial probability cloud.

```html
<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
  <h3 class="text-[#f0f0ff] font-mono text-xs uppercase tracking-widest mb-4
             text-[#8a40c0]/60">Measurement Probabilities</h3>
  <div class="flex items-end gap-2 h-32">
    <!-- |00> -->
    <div class="flex-1 flex flex-col items-center gap-1">
      <div class="w-full bg-gradient-to-t from-[#8a40c0]/60 to-[#8a40c0]/20
                  rounded-t-md shadow-[0_0_12px_rgba(138,64,192,0.3)]
                  transition-all duration-500"
           style="height: 35%"></div>
      <span class="text-[#f0f0ff]/50 font-mono text-[10px]">|00></span>
      <span class="text-[#8a40c0] font-mono text-xs">0.35</span>
    </div>
    <!-- |01> -->
    <div class="flex-1 flex flex-col items-center gap-1">
      <div class="w-full bg-gradient-to-t from-[#4a8ae0]/60 to-[#4a8ae0]/20
                  rounded-t-md shadow-[0_0_12px_rgba(74,138,224,0.3)]
                  transition-all duration-500"
           style="height: 15%"></div>
      <span class="text-[#f0f0ff]/50 font-mono text-[10px]">|01></span>
      <span class="text-[#4a8ae0] font-mono text-xs">0.15</span>
    </div>
    <!-- |10> -->
    <div class="flex-1 flex flex-col items-center gap-1">
      <div class="w-full bg-gradient-to-t from-[#e060a0]/60 to-[#e060a0]/20
                  rounded-t-md shadow-[0_0_12px_rgba(224,96,160,0.3)]
                  transition-all duration-500"
           style="height: 10%"></div>
      <span class="text-[#f0f0ff]/50 font-mono text-[10px]">|10></span>
      <span class="text-[#e060a0] font-mono text-xs">0.10</span>
    </div>
    <!-- |11> -->
    <div class="flex-1 flex flex-col items-center gap-1">
      <div class="w-full bg-gradient-to-t from-[#40c0c0]/60 to-[#40c0c0]/20
                  rounded-t-md shadow-[0_0_12px_rgba(64,192,192,0.3)]
                  transition-all duration-500"
           style="height: 40%"></div>
      <span class="text-[#f0f0ff]/50 font-mono text-[10px]">|11></span>
      <span class="text-[#40c0c0] font-mono text-xs">0.40</span>
    </div>
  </div>
</div>
```

Tailwind: Container uses quantum glass pattern `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6`. Probability bars use gradient fills colored per basis state: purple for |00>, blue for |01>, pink for |10>, cyan for |11>. Each bar has `shadow-[0_0_12px_rgba(...)]` for quantum glow. Labels use `font-mono text-[10px]`.

### 6) Decoherence Noise Texture

A subtle static/noise overlay that represents quantum decoherence -- the gradual loss of quantum coherence. Uses animated SVG noise or CSS pseudo-random pattern.

```html
<div class="absolute inset-0 pointer-events-none opacity-[0.04]"
     aria-hidden="true">
  <svg width="100%" height="100%">
    <filter id="decoherenceNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9"
                    numOctaves="4" stitchTiles="stitch"
                    result="noise"/>
      <feColorMatrix type="saturate" values="0" in="noise"
                     result="gray"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#decoherenceNoise)"/>
  </svg>
</div>
```

Tailwind: Overlay uses `absolute inset-0 pointer-events-none opacity-[0.04]` with SVG fractal noise filter. The extremely low opacity (4%) creates a subtle grain that evokes decoherence without obscuring content. The `aria-hidden="true"` ensures screen readers ignore the decorative noise layer.

### 7) Error Correction Grid

A matrix-style grid showing quantum error correction syndrome data. Each cell represents a stabilizer measurement, with color-coded pass/fail states and animated correction pulses.

```html
<div class="bg-white/5 backdrop-blur-xl border border-[#40a060]/20 rounded-2xl p-6">
  <h3 class="text-[#f0f0ff] font-mono text-xs uppercase tracking-widest mb-4
             text-[#40a060]/60">Error Correction Syndromes</h3>
  <div class="grid grid-cols-5 gap-1.5">
    <!-- Row labels -->
    <span class="text-[#f0f0ff]/30 font-mono text-[10px] flex items-center">Z1</span>
    <div class="w-10 h-10 rounded-md bg-[#40a060]/10 border border-[#40a060]/30
                flex items-center justify-center
                shadow-[0_0_6px_rgba(64,160,96,0.15)]
                text-[#40a060] font-mono text-xs">+1</div>
    <div class="w-10 h-10 rounded-md bg-[#40a060]/10 border border-[#40a060]/30
                flex items-center justify-center
                text-[#40a060] font-mono text-xs">+1</div>
    <div class="w-10 h-10 rounded-md bg-[#e060a0]/10 border border-[#e060a0]/30
                flex items-center justify-center
                shadow-[0_0_8px_rgba(224,96,160,0.2)]
                text-[#e060a0] font-mono text-xs animate-pulse">-1</div>
    <div class="w-10 h-10 rounded-md bg-[#40a060]/10 border border-[#40a060]/30
                flex items-center justify-center
                text-[#40a060] font-mono text-xs">+1</div>
    <!-- Repeat rows Z2-Z5 with similar pattern -->
    <span class="text-[#f0f0ff]/30 font-mono text-[10px] flex items-center">Z2</span>
    <div class="w-10 h-10 rounded-md bg-[#40a060]/10 border border-[#40a060]/30
                flex items-center justify-center
                text-[#40a060] font-mono text-xs">+1</div>
    <div class="w-10 h-10 rounded-md bg-[#e060a0]/10 border border-[#e060a0]/30
                flex items-center justify-center
                shadow-[0_0_8px_rgba(224,96,160,0.2)]
                text-[#e060a0] font-mono text-xs animate-pulse">-1</div>
    <div class="w-10 h-10 rounded-md bg-[#e060a0]/10 border border-[#e060a0]/30
                flex items-center justify-center
                shadow-[0_0_8px_rgba(224,96,160,0.2)]
                text-[#e060a0] font-mono text-xs animate-pulse">-1</div>
    <div class="w-10 h-10 rounded-md bg-[#40a060]/10 border border-[#40a060]/30
                flex items-center justify-center
                text-[#40a060] font-mono text-xs">+1</div>
    <!-- Z3 through Z5 follow same pattern -->
  </div>
</div>
```

Tailwind: Grid uses `grid grid-cols-5 gap-1.5` within a quantum glass container with gate-green tinted border. Stable syndromes show `bg-[#40a060]/10` with green text. Error syndromes show `bg-[#e060a0]/10` with pink text and `animate-pulse` to draw attention. All cells use `font-mono text-xs` for the scientific readout aesthetic.

### 8) Quantum Glass Panel

Translucent panel floating in the quantum void, with a subtle purple-blue border glow that suggests quantum uncertainty at the edges.

- `bg-white/5 backdrop-blur-xl border border-[#8a40c0]/20 rounded-2xl shadow-[0_0_20px_rgba(138,64,192,0.08)] p-6`.

### 9) Quantum Control Button

A button styled as a quantum gate activation control, with pulsing glow that suggests quantum state transitions.

- `bg-gradient-to-r from-[#6a2a8a] to-[#2a3a6a] text-[#c0d0ff] font-mono font-medium rounded-full px-6 py-2.5 border border-[#8a40c0]/30 shadow-[0_0_15px_rgba(138,64,192,0.25)] hover:shadow-[0_0_25px_rgba(74,138,224,0.4)] hover:border-[#4a8ae0]/40 transition-all duration-300`.

### 10) Qubit Status Indicator

A small circular indicator showing a single qubit's current state, with color indicating superposition, |0>, |1>, or entangled.

- `w-3 h-3 rounded-full shadow-[0_0_8px_rgba(138,64,192,0.5)]` (superposition -- purple pulse).
- `w-3 h-3 rounded-full bg-[#4a8ae0] shadow-[0_0_8px_rgba(74,138,224,0.5)]` (in |0> state -- blue solid).
- `w-3 h-3 rounded-full bg-[#e060a0] shadow-[0_0_8px_rgba(224,96,160,0.5)]` (entangled -- pink solid).
- `w-3 h-3 rounded-full bg-[#40c0c0] shadow-[0_0_8px_rgba(64,192,192,0.5)]` (measured -- cyan solid).

## Color Palette System

### Core Quantum Palette

| Color | Hex | Role |
|---|---|---|
| Quantum Void | `#0a0a1a` | Primary background |
| Quantum Deep | `#0f0f2a` | Card / panel backgrounds |
| Quantum Purple | `#8a40c0` | Primary state color, Hadamard gates, superposition |
| Superposition Blue | `#4a8ae0` | Wave functions, X-gates, |0> states |
| Entanglement Pink | `#e060a0` | Entanglement links, CNOT, correlation |
| Probability Cyan | `#40c0c0` | Measurement outcomes, readouts |
| Qubit White | `#f0f0ff` | Primary text, node highlights |
| Gate Green | `#40a060` | Valid operations, error correction pass |
| Decoherence Gray | `#6a6a6a` | Noise, idle states, decohered qubits |
| Superposition Soft | `#c0a0ff` | Text on dark, secondary labels |

### State Color Mapping

| Qubit State | Color | Usage |
|---|---|---|
| Superposition (alpha\|0> + beta\|1>) | `#8a40c0` | Animated pulse, glow |
| Measured \|0> | `#4a8ae0` | Solid fill |
| Measured \|1> | `#e060a0` | Solid fill |
| Entangled pair | `#e060a0` | Dashed connecting lines |
| Error detected | `#e060a0` | Pulsing indicator |
| Error corrected | `#40a060` | Stable fill |
| Decohered | `#6a6a6a` | Faded, no glow |

Rules: The quantum void background is near-black with a faint indigo cast. Quantum purple is the signature color -- it represents the superposition state that makes quantum computing powerful. Superposition blue and entanglement pink form the complementary pair for wave functions and correlations. Probability cyan appears only at measurement outcomes -- the moment observation collapses the wave function. Gate green indicates successful operations. Decoherence gray represents loss of quantum information. No warm earth tones; the palette is entirely cool-spectrum with purple as the warmest hue.

## Typography Recommendations

- **Display:** JetBrains Mono or Fira Code (quantum state labels, gate names, circuit notation require monospace).
- **Body:** Inter or IBM Plex Sans (clean, readable on dark backgrounds).
- **Data:** JetBrains Mono (probability amplitudes, state vectors, error rates, coherence times).
- **Labels:** `font-mono text-[10px] uppercase tracking-widest text-[#f0f0ff]/40` (circuit notation, qubit labels).
- **Mathematical:** Italic serif for bra-ket notation: use Unicode characters |psi>, |0>, |1> within monospace contexts.

## Component Architecture Pattern

Quantum computing interfaces follow the circuit-computation-display pattern:

1. **Circuit Layer** (top): horizontal qubit lines with gate boxes positioned along the timeline.
2. **Computation Layer** (middle): superposition waves, entanglement visualizations, probability clouds.
3. **Display Layer** (bottom): measurement readouts, error correction grids, state readback panels.

All layers sit on the quantum void background. The computation layer uses SVG overlays for wave animations and entanglement lines. The circuit layer uses flexbox rows for gate placement. The display layer uses glass panels with monospace data.

## Interaction Rules

- Default: subtle glow, low-opacity quantum effects, static state indicators.
- Hover: elements increase glow intensity, like observing a quantum state -- `hover:shadow-[0_0_20px_rgba(138,64,192,0.4)] hover:border-[#8a40c0]/40 transition-all duration-300`.
- Active/Measured: `active:scale-95` with a brief cyan flash to simulate measurement collapse.
- Focus: `focus:outline-none focus:ring-2 focus:ring-[#4a8ae0]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a1a]`.
- Transitions: `transition-all duration-300 ease-out` (measured, precise, controlled).
- State change: qubit indicators animate through a brief purple pulse before settling to their new state color (superposition -> collapse -> measured).
- Error correction: error cells pulse pink, then flash green briefly when corrected, then stabilize.

## Reusable Tailwind Tokens

- Quantum void bg: `bg-[#0a0a1a]`.
- Quantum glass: `bg-white/5 backdrop-blur-xl border border-[#8a40c0]/20 rounded-2xl shadow-[0_0_20px_rgba(138,64,192,0.08)]`.
- Quantum button: `bg-gradient-to-r from-[#6a2a8a] to-[#2a3a6a] text-[#c0d0ff] font-mono border border-[#8a40c0]/30 shadow-[0_0_15px_rgba(138,64,192,0.25)]`.
- Gate box (generic): `w-10 h-10 flex items-center justify-center rounded-md border font-bold z-10`.
- Gate box Hadamard: `bg-[#4a8ae0]/10 border-[#4a8ae0]/40 text-[#4a8ae0] shadow-[0_0_10px_rgba(74,138,224,0.2)]`.
- Gate box Pauli: `bg-[#8a40c0]/10 border-[#8a40c0]/40 text-[#8a40c0] shadow-[0_0_10px_rgba(138,64,192,0.2)]`.
- Gate box CNOT: `border-[#e060a0]/40 text-[#e060a0] rounded-full shadow-[0_0_10px_rgba(224,96,160,0.2)]`.
- Gate box Measurement: `bg-[#40c0c0]/10 border-[#40c0c0]/40 text-[#40c0c0]`.
- Qubit line: `h-px bg-[#4a8ae0]/30`.
- Error indicator: `bg-[#e060a0]/10 border border-[#e060a0]/30 text-[#e060a0] animate-pulse`.
- Success indicator: `bg-[#40a060]/10 border border-[#40a060]/30 text-[#40a060]`.
- Entanglement line: SVG `stroke-dasharray="8 12"` with `animate stroke-dashoffset` and gradient from pink through purple to pink.
- Decoherence overlay: SVG `feTurbulence fractalNoise` at `opacity-[0.04]` with `pointer-events-none`.
- Circuit label: `text-[#f0f0ff] font-mono text-xs text-right`.
- Probability bar: `bg-gradient-to-t` with type-specific color ending at `/60` opacity, `shadow-[0_0_12px_rgba(...)]`.
- State vector indicator: SVG arrow with `stroke="#40c0c0" stroke-width="2"` and triangular marker.

## Quality Checklist

- Background is quantum void dark (#0a0a1a) with decoherence noise overlay.
- At least one superposition wave visualization with overlapping animated sine curves.
- Entanglement connections use dashed lines with traveling animation between paired nodes.
- Bloch sphere or qubit state vector display is present with axis labels.
- Quantum gate circuit diagram uses horizontal lines with color-coded gate boxes.
- Probability / measurement display uses monospace numerical readouts.
- Error correction grid uses matrix layout with color-coded pass/fail states.
- All numerical data uses monospace font (JetBrains Mono or equivalent).
- Glow effects use spectral colors (purple, blue, pink, cyan) -- never white or gray.
- Transitions are measured and precise (300ms), not bouncy or playful.
- The aesthetic evokes quantum uncertainty, probabilistic beauty, and computational precision.
- No warm colors except quantum purple (which is the coolest warm in the palette).

## Anti-Patterns

- Light or white backgrounds (quantum UI is deep-void dark).
- Warm earth-tone palettes (quantum colors are cool-spectrum: purple, blue, pink, cyan).
- Missing decoherence noise texture (the subtle noise layer is the signature quantum texture).
- Missing superposition waves (overlapping sine curves are the primary visual motif).
- Flat opaque panels (use translucent glass panels with purple-tinted borders).
- Missing glow effects on qubit states (quantum states emit probabilistic light).
- Solid, static elements that never pulse or shimmer (quantum states are inherently uncertain).
- Conventional UI shadows (use spectral glow shadows matching state colors).
- Playful or bouncy animations (quantum transitions are precise and controlled).
- Missing bra-ket notation (|0>, |1>, |psi>) in quantum state labels.
- Random colors for gates (each gate type has a specific color coding).
- Dense, cluttered layouts (quantum circuits need space between gates for readability).

## Accessibility Considerations

- Quantum void backgrounds with qubit-white text provide excellent contrast (WCAG AAA).
- Decoherence noise overlay at 4% opacity does not reduce text contrast.
- Focus states use cyan ring on void background: `focus:ring-2 focus:ring-[#4a8ae0]/50`.
- All SVG visualizations (waves, entanglement lines, Bloch sphere) must be `aria-hidden="true"`.
- Circuit diagrams need `aria-label` describing the gate sequence and qubit operations.
- Error correction cells need `aria-label` stating the syndrome value and whether it is an error.
- Animated elements must respect `prefers-reduced-motion` -- disable wave animations and pulse effects.
- Qubit state indicators need text alternatives describing the current state (superposition, |0>, |1>, entangled, decohered).
- Probability readouts need proper numerical formatting for screen readers.
- Touch targets for gate selection must be at least 44x44px (gate boxes at w-10 h-10 meet this).
- The dark background reduces eye strain for extended quantum computing sessions.
