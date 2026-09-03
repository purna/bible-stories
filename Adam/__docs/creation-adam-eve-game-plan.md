# Creation & Adam and Eve — Interactive Book Design Plan

## Table of Contents
- [Concept](#concept)
- [Tone](#tone)
- [Core Mechanics & Input Schemes](#core-mechanics--input-schemes)
- [Chapter Structure](#chapter-structure)
- [Chapter 9 as the Hinge](#chapter-9-as-the-hinge)
- [Technical Architecture & Dependency Stack](#technical-architecture--dependency-stack)
- [Technical Module Architecture](#technical-module-architecture)
- [The Animal Character Generator](#the-animal-character-generator)
- [Particle Effect System](#particle-effect-system)
- [Dynamic Audio Stem Architecture](#dynamic-audio-stem-architecture)
- [Open-Source Sound Effects & Music Resources](#open-source-sound-effects--music-resources)
- [Tooling Plan](#tooling-plan)
- [Action Plan](#action-plan)
- [Reference Appendix — Verses, Locations, Events, Dates](#reference-appendix--verses-locations-events-dates)

## Concept
An **interactive illustrated book** covering Creation (Genesis 1–2) and the Fall (Genesis 3), built as a hybrid of three layers running together: an **Ink-scripted narrative/dialogue engine**, **hand-drawn SVG scenes for speaking characters and story beats**, and a fully explorable **Minecraft-style voxel 3D world** for everything else. The player walks through a world that is *itself being made* — a blank void that gains light, sky, sea, land, plants, sun and moon, and creatures in sequence as the chapters progress — then narrows to one garden, one command, one tree, and one choice.

This is the same three-project family as Noah and King David (Scripture-driven structure, lightweight vanilla tech, strong art direction) but with a new hybrid presentation model: where Noah tested a pure 3D voxel prototype and a pure SVG/DOM narrative prototype as two separate proofs of concept, this project's actual architecture is both of those, fused — the 3D world for immersion and movement, SVG for the moments that need a human face and hand-drawn intimacy.

**Core question the book keeps asking:** *You are given a world built entirely for you, one good thing at a time. What do you do with the one thing you're told not to touch?*

⬆ [Back to Top](#table-of-contents)

## Tone
Wonder first, then unease, then loss — in that order, and each one should feel earned rather than announced. Genesis 1 is expansive and calm: order emerging from formlessness, each day confirmed "good." Genesis 2 narrows and warms: one man, one garden, one companion, named things. Genesis 3 turns on a single short conversation and does not look away from its consequences — shame, blame, thorns, and exile. Keep the same house aesthetic established across this project family (Limbo mood, Neverhood handmade warmth) but let the *palette itself* carry the arc: the void starts as true black, gains color day by day as the world is spoken into being, peaks in Eden's fullest color at Chapter 7, and drains toward dusk and grey as Chapters 9–10 unfold. The Fall shouldn't be staged as villainy or spectacle — it should feel small, quick, and quiet, which is what makes it devastating.

⬆ [Back to Top](#table-of-contents)

## Core Mechanics & Input Schemes

**1. Movement & Input Controls**

*Desktop Controls:*
- Movement: WASD or Arrow Keys, free 3D movement within the current world bounds.
- Interaction / Confirm: E or Spacebar.
- Naming / Journal (animal log, named-so-far list): J.
- Dialogue & Prompt Choices: Number keys 1–4 or mouse click.
- Pause / Menu: Escape.

*Mobile Controls:*
- Virtual touch joystick (bottom-left) for movement.
- Context-sensitive Interact button (bottom-right).
- Choice nodes as full-width touch cards, same pattern as the Noah prototypes.

**2. The world builds itself as you play**
Rather than one static Eden loaded up front, the 3D world is assembled progressively, chapter by chapter, matching the Day-by-day structure of Genesis 1: darkness, then light, then sky, then sea and land, then vegetation, then sun/moon/stars, then sea and air creatures, then land animals, then Adam. Each chapter transition triggers new voxel terrain, lighting, and populated creatures phasing into the existing world rather than a hard scene cut — the player should feel the world *filling in around them* as they stand in it. This is the project's signature mechanic and its clearest technical proof-of-concept target.

**3. SVG scene overlay for speaking characters and key beats**
When a chapter reaches a narration or dialogue beat — God's commands, Adam and Eve's first conversation, the serpent's temptation — the 3D world dims and pauses behind a hand-drawn SVG scene layered on top, in the same overlay pattern already proven in the Noah Chapter 1 narrative prototype (`#figureLayer` + `#panel` over a paused/dimmed stage). The SVG characters are the "faces" of the book; the 3D voxel world is its "body." Returning to free movement fades the SVG layer back out.

**4. Ink-driven dialogue & narration**
All narration text, dialogue, and branching choices are authored in **Ink** and compiled via `inkjs`, replacing the hand-rolled `story[]` array used in the Noah prototype with a proper Ink runtime — this project is the natural point to formalize that integration, since Ink's native branching is a better fit for the serpent's actual back-and-forth (Genesis 3:1–5) than a flat beat list.

**5. Naming Day / the Animal Character Generator as gameplay**
Genesis 2:19–20 has Adam naming every animal God brings before him — a naming mechanic falls directly out of the text rather than being invented. Procedurally generated animals (via the Animal Character Generator, detailed below) approach the player one at a time in the 3D world; the player names each one (typed text or a short curated list, TBD), and named animals populate a running Journal. This chapter is the clearest showcase of all three architecture layers working together: 3D world (the animal walks up to you), SVG/Ink (the naming prompt and God's brief responses), and the generator tool itself (the animal's actual appearance).

**6. Particle effects as narrative punctuation, not decoration**
Each major Creation act gets a signature particle moment — light dividing from darkness, waters separating, dust rising into the shape of a man, breath entering him — and the Fall gets the inverse: color draining, a light dimming, thorns pushing up through soil. See the dedicated Particle Effect System section below.

**7. No combat, no failure state**
As with Noah, there is no combat and no game-over. The Fall is not a "loss" state to avoid or a puzzle to solve differently on a second try — Genesis 3 happens on rails, once, and its weight comes from inevitability, not player skill.

⬆ [Back to Top](#table-of-contents)

## Chapter Structure

| # | Chapter | Day / Phase | Core Content | The world around the player |
|---|---------|-------------|---------------|-------------------------------|
| 1 | **Let There Be Light** | Day 1 | Formless void; light divided from darkness (Genesis 1:1–5) | True black void gains a single light source |
| 2 | **The Sky and the Sea** | Day 2–3 | The expanse; waters gathered; dry land appears (Genesis 1:6–10) | Voxel terrain generates: horizon, sky dome, first ground |
| 3 | **Let the Earth Bring Forth** | Day 3 & 5–6 (vegetation + creatures) | Plants, trees, sea creatures, birds, land animals (Genesis 1:11–13, 20–25) | World fills with voxel flora and roaming procedurally generated animals |
| 4 | **The Image of God** | Day 6 | Humankind made in God's image; Adam formed from dust and given breath (Genesis 1:26–27, 2:7) | First and only human figure enters the world |
| 5 | **The Garden** | — | Eden planted; the two trees; the command given (Genesis 2:8–17) | World narrows from "the whole earth" down to one bounded garden |
| 6 | **Naming Day** | — | Adam names every animal (Genesis 2:18–20) | The Animal Character Generator's gameplay showcase — see Core Mechanics |
| 7 | **Bone of My Bone** | — | Adam's deep sleep; Eve formed; the two become one (Genesis 2:21–25) | World reaches its fullest color and warmth — the emotional peak before the turn |
| 8 | **The Serpent's Question** | — | The serpent's dialogue, twisting God's command (Genesis 3:1–5) | First voxel-world shadow/tension lighting; Ink-branching dialogue with the serpent |
| 9 | **The Fruit** | — | The fruit is taken and eaten; eyes opened; shame; fig-leaf coverings (Genesis 3:6–7) | The Hinge — see below |
| 10 | **East of Eden** | — | God's questioning, the curses, the first sacrifice/covering, and expulsion (Genesis 3:8–24) | World drains toward dusk/grey; the garden is sealed behind them, guarded |

⬆ [Back to Top](#table-of-contents)

## Chapter 9 as the Hinge
This is the same structural device used for David's Bathsheba chapter and Noah's vineyard chapter — a deliberate, sudden break in a pattern the whole book has trained the player to expect. Eight chapters build outward-then-inward abundance: an entire world spoken into order, then narrowed to a garden, a name for every creature, a companion, and *only one* prohibition among endless permission. Chapter 9 breaks it in the space of two verses:

- **Pacing Shift:** Every prior chapter has taken its time — days, an unhurried naming ceremony, a wedding-like union. Chapter 9 is fast. The Ink script and SVG panel timing should compress dramatically: no lingering, no typewriter pauses, just the fruit taken, eaten, and given, then eyes opening — the abruptness *is* the point.
- **Interface & Aesthetic Shift:** Matching Noah's Chapter 10 treatment, the world's ambient particle effects and audio stems should nearly vanish here — the constant Eden birdsong/wind/particle bloom that's been present since Chapter 3 should cut out almost entirely the instant the fruit is eaten, replaced by near-silence and stillness, before Chapter 10's confrontation and consequence stems begin.
- **Agency Note:** Unlike a mockery/temptation chapter with genuine forks, Chapter 9 should not offer a branch that avoids the outcome — same principle as Noah's Chapter 10, where the point is inevitability and consequence, not player-optimized story-avoidance.

⬆ [Back to Top](#table-of-contents)

## Technical Architecture & Dependency Stack

**Status: decided — hybrid of the two approaches already proven in the Noah prototypes.** The Noah project built two separate proofs of concept: a locked-isometric Three.js voxel world (`Noah_3_TheLongBuild_Prototype.html`) and a pure SVG/DOM narrative engine (`Noah_Ch1_TheWarning_Narrative_Prototype.html`). This project's architecture is the fusion of both, running concurrently rather than as alternatives:

| Layer | Technology | Role |
|---|---|---|
| **Immersive 3D world** | Three.js (r128, matching existing prototypes) | Free-roam voxel exploration, the progressive day-by-day world-build, animal roaming, all movement and physical space. Not locked to a single isometric angle the way the Noah build prototype was — this project calls for full free-roam "Minecraft-style" traversal, closer to first/third-person voxel movement than a fixed diorama camera. |
| **Speaking-character & scene layer** | Inline SVG + DOM overlay (extending the `#figureLayer`/`#panel` pattern from the Noah narrative prototype) | Hand-drawn backgrounds and character art for every dialogue/narration beat; fades in over a dimmed, paused 3D canvas and fades back out to resume free movement. |
| **Narrative/dialogue scripting** | Ink, compiled and run via `inkjs` | Replaces the flat `story[]` array used in the Noah prototype with true branching — needed for the serpent's actual back-and-forth exchange, and reusable later for Adam/Eve's own dialogue. |
| **Particle effects** | Two-tier: Three.js `THREE.Points`/GPU particles for in-world Creation moments; lightweight SVG/CSS particle animation for the 2D overlay scenes | See dedicated section below. |
| **Procedural animal generation** | Extends the existing `box()`/`cyl()`/`sphere()` primitive-builder pattern from the Noah project | See The Animal Character Generator section below. |

### Core Libraries & Dependencies

| Library / Module | Version / Source | Purpose in Architecture |
|---|---|---|
| `three.js` | r128 (matching existing prototypes) | Voxel world rendering, camera, lighting, particle systems |
| `inkjs` | v2.x | Ink narrative/dialogue runtime — the primary text and branching engine for this project |
| Native Web Audio API (`AudioContext`) | Web Standard | Dynamic stem mixer — see Dynamic Audio Stem Architecture |
| Native SVG + CSS animation | Web Standard | Speaking-character scenes, 2D particle effects, panel transitions |

⬆ [Back to Top](#table-of-contents)

## Technical Module Architecture

```
/src
  /engine
    voxelWorld.js           — progressive world-build (Day 1→6 phased terrain/lighting/population)
    primitiveBuilder.js        — box()/cyl()/sph() kit, shared with the Animal Character Generator
    camera.js                    — free-roam 3D camera (WASD-relative), distinct from Noah's locked isometric follow-cam
    inputManager.js                — keyboard + touch virtual joystick abstraction
    sceneManager.js                  — chapter stack, 3D↔SVG-overlay transition/pause handling
    stateManager.js                    — global state, named-animal journal, append-only flag log
  /narrative
    inkRuntime.js                       — wraps inkjs, exposes choices/text to the SVG overlay panel
    overlayEngine.js                      — extends the Noah Ch1 prototype's #figureLayer/#panel pattern
  /systems
    animalGenerator.js                      — parametric animal assembly, palette/marking randomization
    namingSystem.js                           — Naming Day interaction: prompt, journal entry, Ink callback
    particleSystem.js                           — preset library, see Particle Effect System below
  /audio
    audioManager.js                               — Web Audio API stem mixer
  /data
    chapters/                                        — one JSON/data file per chapter (world-build stage, Ink file ref, triggers)
    animalPresets/                                     — species archetype templates (mammal/bird/fish/reptile bases)
    credits.json                                         — attribution manifest for CC-BY / licensed audio and asset sources
  /tools
    world-growth-designer/                                 — standalone tool, authors the Day-by-day phased terrain/lighting
    animal-generator-tool/                                    — standalone tool, the authoring-side UI for animalGenerator.js
    svg-scene-designer/                                         — standalone tool, builds/positions SVG character art per beat
    ink-dialogue-designer/                                        — standalone tool, Ink node/branch editor
    particle-designer/                                              — standalone tool, previews and tunes particle presets
```

⬆ [Back to Top](#table-of-contents)

## The Animal Character Generator
This is the project's most reusable and highest-priority standalone tool, since it feeds both authoring (populating Chapter 3's world and Chapter 6's Naming Day) and, potentially, live in-game generation.

- **Base kit:** extends the primitive-builder pattern already used for Noah's Lion/Bear/Camel/Elephant/Giraffe/Zebra/Sheep/Dove models — a small vocabulary of boxes, cylinders, and spheres assembled per species.
- **Archetype templates:** four base rigs matching Genesis 1's own creature categories — sea creature, bird, land livestock/wild animal, and (for flavor/completeness) creeping thing — each with sensible default proportions the generator varies from.
- **Parametric variation:** body scale, limb length/count, head shape, palette (color ramp + optional marking pattern), and a "size class" slider, so a single template can produce a visually distinct herd or flock rather than repeated clones.
- **Export:** model + metadata JSON (species name slot — deliberately left blank/generic until the player names it on Naming Day; Genesis "kind" category; size class; habitat tag for world-placement).
- **In-game use (Chapter 6):** a queue of generator-produced animals approaches the player one at a time; naming one commits its generated appearance and metadata to the permanent Journal, so no two playthroughs necessarily produce an identical zoo.
- **Authoring use (Chapter 3):** the same tool, used offline, to populate the wider world with roaming background creatures during the Day 5–6 world-build.

⬆ [Back to Top](#table-of-contents)

## Particle Effect System
Two tiers, matched to whichever layer is active at the time:

**3D world-space particles (Three.js `THREE.Points`, extending the rain-particle approach already used in Noah's `app.js`):**
- *Light dividing from darkness* (Ch.1) — a slow radial burst of warm points spreading from a single origin into the void.
- *Waters separating* (Ch.2) — layered blue-toned particle sheets pulling apart vertically.
- *Dust rising into shape* (Ch.4) — ground-level dust particles drawing upward and coalescing into a humanoid silhouette, dispersing once the figure is "formed."
- *Breath of life* (Ch.4) — a single bright particle trail entering the formed figure.
- *Growth bloom* (Ch.3, Ch.5) — small green/gold particle bursts marking new vegetation appearing.
- *Fall inversion* (Ch.9–10) — color desaturating out of existing ambient particles; thorny growth particles pushing up through ground voxels; a final light-source dimming as the pair are expelled.

**2D overlay-space particles (lightweight SVG/CSS, for use *within* the speaking-character scenes):**
- Softer, slower motion than the 3D-space versions — dust motes, falling leaf specks, a faint glow pulse behind the serpent during Chapter 8's dialogue — kept deliberately restrained so they support the hand-drawn SVG art rather than competing with it.

Both tiers should share a common **preset name and intensity parameter** (e.g. `dust-rise`, intensity 0–1) so the same emotional beat can be authored once and triggered in whichever layer is active when it's needed.

⬆ [Back to Top](#table-of-contents)

## Dynamic Audio Stem Architecture
Same Web Audio API (`AudioContext`) multi-stem approach used across this project family, adapted to Creation's arc: near-total silence at Chapter 1, gaining layered ambience (wind, then water, then birdsong, then footsteps/rustle) one stem at a time as each Day's chapter completes, peaking in a full layered "Eden" mix by Chapter 7, then — per the Chapter 9 Hinge note above — cutting almost entirely to near-silence at the Fall, before a sparse, lower, "outside the garden" ambience begins for Chapter 10.

- **Mechanism:** identical-length synced stems, decoded into `AudioBufferSourceNode`s each behind its own `GainNode`, all started on the same sample tick; stems fade in/out via gain ramps rather than being freshly triggered, so the "world gaining sound day by day" effect is really just stems being unmuted in sequence.
- **Serpent tension stem:** a distinct low-string/drone stem reserved solely for Chapter 8, absent everywhere else, so its introduction itself signals "something is different here."

⬆ [Back to Top](#table-of-contents)

## Open-Source Sound Effects & Music Resources
Same source list and licensing caveat as the Noah project — not all of the below are CC0; several require attribution or carry per-bundle commercial terms. A `credits.json` manifest (see Technical Module Architecture) plus an in-game/README credits screen is a required deliverable once any CC-BY or bundle-licensed asset is used.

### Music & Stem Sources
- **OpenGameArt.org (CC0 / CC-BY — varies per asset):** ambient/orchestral swells, pastoral and wonder-toned tracks. Search tags: Creation, Ambient Pad, Pastoral, Ethereal. Check each asset's individual license.
- **Incompetech (Kevin MacLeod — CC-BY):** sweeping orchestral/cinematic pieces for Chapters 1–2's scale, plus quieter acoustic pieces for Eden. **Requires attribution.**
- **Free Music Archive (FMA) & Pixabay Audio (CC0 / Free Commercial):** ambient drones and minimalist textures, well suited to slicing into the layered Eden stem set.
- **Musopen (Public Domain):** classical/choral pieces for the Chapter 1 "Let there be light" scale moment.

### Sound Effects & Foley (SFX)
- **Kenney.nl (CC0 — Public Domain):** UI clicks, footsteps, simple interaction sounds.
- **Freesound.org (mixed licenses — filter for CC0):** wind, water, birdsong, rustling foliage, a low serpent hiss. Filter explicitly by license.
- **Sonniss GDC Audio Bundles (Royalty-Free Commercial):** high-definition nature/ambience packs for the Eden peak. Confirm each bundle's specific commercial-use terms before committing.

⬆ [Back to Top](#table-of-contents)

## Tooling Plan
Five standalone browser tools, matching the pattern used across this project family — each a focused editor producing data the main book consumes.

**1. Animal Character Generator (highest priority — see dedicated section above)**
Parametric species assembly from the primitive kit, palette/marking randomization, model+metadata JSON export.

**2. World Growth Designer**
Authors the Day-by-day phased terrain/lighting/population sequence — what voxel/lighting/creature layers exist at each chapter, and how they transition in.

**3. Ink Dialogue Designer**
Node-based Ink script editor for narration and branching dialogue (God's commands, the naming exchanges, the serpent's temptation).

**4. SVG Scene Designer**
Positions and layers hand-drawn SVG character/background art per beat, matching it to Ink script cue points.

**5. Particle Designer**
Previews and tunes the shared 3D/2D particle presets (`dust-rise`, `light-burst`, `growth-bloom`, `fall-inversion`, etc.) at adjustable intensity.

⬆ [Back to Top](#table-of-contents)

## Action Plan

```
Phase 0: Architecture Foundations (voxelWorld + overlayEngine + inkRuntime scaffolding)
 └── Phase 1: Core Tools, v1 (Animal Generator, Ink Dialogue Designer, SVG Scene Designer)
      └── Phase 2: Vertical Slice (Chapter 6: Naming Day — exercises all three architecture layers at once)
           └── Phase 3: Particle Designer + World Growth Designer
                └── Phase 4: Production (Chapters 1–10)
                     └── Phase 5: Polish & Playtest
                          └── Phase 6: Ship
```

**Phase 0 — Architecture Foundations (1–2 weeks)**
Scaffold `voxelWorld.js` (free-roam camera, distinct from Noah's locked isometric follow-cam), `overlayEngine.js` (extending the Noah Ch1 prototype's proven pattern), and `inkRuntime.js` (`inkjs` wired to the overlay panel).

**Phase 1 — Core Tools, v1 (2–4 weeks)**
Animal Character Generator (top priority per this brief), Ink Dialogue Designer, SVG Scene Designer.

**Phase 2 — Vertical Slice: Chapter 6, "Naming Day" (2–3 weeks)**
Deliberately chosen over Chapter 1 as the proof-of-concept target, since it's the one chapter that exercises the 3D world, the SVG/Ink overlay, and the Animal Generator simultaneously — the best single test of whether the hybrid architecture actually holds together.

**Phase 3 — Particle Designer + World Growth Designer (2–3 weeks)**
Build composition editors based on Phase 2 authoring feedback; integrate the dynamic audio stem mixer and `credits.json` pipeline.

**Phase 4 — Remaining Chapters**
Author Chapters 1–5 and 7–10, including the progressive world-build across Chapters 1–4 and the Chapter 9 Hinge's stripped-down treatment.

**Phase 5 — Polish & Playtest**
Full playthrough pass, pacing (especially the Chapter 9 compression), mobile touch usability, and whether the 3D↔SVG transition reads as a smooth "the world is pausing to listen" moment rather than a jarring mode-switch.

**Phase 6 — Ship**
Bundle and deploy static build, including a credits/licensing screen for all CC-BY and bundle-licensed assets in use.

⬆ [Back to Top](#table-of-contents)

## Reference Appendix — Verses, Locations, Events, Dates
As with Noah and David, this project should avoid overclaiming historical/chronological certainty on-screen. Genesis 1–3 is foundational, literary, and theological text rather than a chronicle with independently datable events — there is no external corroboration to weigh the way the Tel Dan Stele bears on David, and the "days" of Creation are themselves a subject of ongoing interpretive debate outside this project's scope. The book doesn't need to take a position on that debate; Genesis's own internal sequence (light → sky/sea → land/plants → sun/moon/stars → sea/air creatures → land animals/humankind → garden → naming → companion → command → temptation → fall → exile) is what carries the pacing.

| # | Chapter | Key Bible references | Setting | Notes |
|---|---------|----------------------|---------|-------|
| 1 | Let There Be Light | Genesis 1:1–5 | Formless void | "Let there be light" — the book's literal first spoken word |
| 2 | The Sky and the Sea | Genesis 1:6–10 | The forming world | Separation of waters above/below, then dry land — the world's basic geometry set |
| 3 | Let the Earth Bring Forth | Genesis 1:11–13, 20–25 | The forming world | Vegetation, sea creatures, birds, land animals — each called "good" in turn |
| 4 | The Image of God | Genesis 1:26–27, 2:7 | The forming world | Humankind made "in Our image"; formed from dust, given breath — the only named individual so far |
| 5 | The Garden | Genesis 2:8–17 | Eden | The two named trees (life; knowledge of good and evil) and the single prohibition (2:17) |
| 6 | Naming Day | Genesis 2:18–20 | Eden | "Whatever the man called each living creature, that was its name" (2:19) — direct textual basis for the naming mechanic |
| 7 | Bone of My Bone | Genesis 2:21–25 | Eden | Adam's declaration (2:23) and the note that "the man and his wife were both naked, and they felt no shame" (2:25) — the emotional high point right before the turn |
| 8 | The Serpent's Question | Genesis 3:1–5 | Eden, near the tree | The serpent's question misquotes/exaggerates God's actual command — a genuine textual detail worth preserving in the Ink script |
| 9 | The Fruit | Genesis 3:6–7 | Eden, at the tree | Two verses; the Hinge chapter — see dedicated section above |
| 10 | East of Eden | Genesis 3:8–24 | Eden, then outside it | God's questioning (3:9–13), the curses (3:14–19), the first animal-skin covering (3:21), and the expulsion with cherubim guarding the way back (3:22–24) |

⬆ [Back to Top](#table-of-contents)
