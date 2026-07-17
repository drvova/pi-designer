# pi-designer improvement loop

1. Inspect the native Pi extension and the affected feature slice.
2. Compare behavior against Pi's local SDK docs and exported types.
3. Make the smallest root-cause change in the owning slice.
4. Run `npm test` and `npm run check:release`.
5. For runtime behavior, run `npm run e2e:smoke` and inspect the report.
6. Keep changes only when they improve the native Pi contract without adding a
   second composition root, host shim, tool gate, or unnecessary state machine.

## Signals

| Signal | Owning slice |
| --- | --- |
| prompt injected twice | `features/designer-prompt` marker normalization |
| wrong activation | `features/mode-activation` state and override |
| missing skill | `features/designer-resources` package-relative path |
| unclear health report | `features/designer-doctor` native UI output |
| generic visual result | skills and validators, not host enforcement |
