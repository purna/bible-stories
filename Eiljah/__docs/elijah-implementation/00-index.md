# Elijah — Implementation Series

A build-order companion to `elijah-game-plan.md`. That is the *design* doc (what the game is and why); this series is the *build* docs (how each system gets implemented in Vite/TypeScript, in the order you'd actually build it).

## How to use this series
Each doc is scoped to one implementation stage. They're ordered to match a realistic build sequence — later docs assume earlier ones exist. Skipping ahead is fine for prototyping (e.g. wiring UI onto placeholder graphics) but don't treat later docs as done until the stage before them is real.

## Documents

| # | Doc | Covers | Depends on |
|---|-----|--------|------------|
| 01 | `01-project-foundation.md` | Vite multi-page scaffold, TypeScript config, folder structure, state manager | — |
| 02 | `02-gameplay-systems.md` | Dialogue engine, "Hearing" engine, chapter data schema, Faith/Despair state | 01 |
| 03 | `03-graphics-rendering.md` | PixiJS v8 setup, tilemap renderer, character sprite pipeline, camera, scene composition | 01 |
| 04 | `04-audio-implementation.md` | Tone.js stem architecture for music and the "Hearing" mechanic's noise layers | 01 |
| 05 | `05-ui-design-system.md` | HUD, dialogue box, meters, typography, iconography, mobile touch layout | 03 |
| 06 | `06-ux-design-flow.md` | Onboarding, chapter transitions, save/load, pacing, accessibility | 02, 05 |
| 07 | `07-post-processing-vfx.md` | PixiJS filter pipeline — bloom, vignette, color grading, "Hearing" scene distortion | 03, 04 |

## Recommended build order
```
01 Foundation
 └── 02 Gameplay Systems ─┐
 └── 03 Graphics          ├──► 05 UI Design System ──► 06 UX Flow
 └── 04 Audio             ┘
                            07 Post-Processing (last — it sits on top of 03+04)
```
Foundation is a hard prerequisite for everything. Gameplay, Graphics, and Audio can be built in parallel once Foundation exists — they only need to agree on the data contracts defined in `02`. UI and UX come after there's something on screen to attach them to. Post-processing comes last on purpose: it's a polish layer on top of working rendering and audio, not something to chase before the core loop is provable.

## Relationship to the working demo
The `daniel-audio-demo` Vite/TypeScript project already built and compiled (`AudioManager`, `Tone.Transport`, per-stem `Tone.Gain`, bar-quantized variant switching) is the reference implementation for everything in `04-audio-implementation.md`. Treat it as a working spike, not a throwaway — the folder structure in `01-project-foundation.md` is designed so that project's `audioManager.ts` drops in with minimal changes.
