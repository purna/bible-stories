# Noah — Game Design Plan

## Table of Contents
- [Concept](#concept)
- [Tone](#tone)
- [Core Mechanics & Input Schemes](#core-mechanics--input-schemes)
- [Chapter Structure](#chapter-structure)
- [Chapter 10 as the Hinge](#chapter-10-as-the-hinge)
- [Technical Architecture & Dependency Stack](#technical-architecture--dependency-stack)
- [Technical Module Architecture](#technical-module-architecture)
- [Dynamic Audio Stem Architecture](#dynamic-audio-stem-architecture)
- [Open-Source Sound Effects & Music Resources](#open-source-sound-effects--music-resources)
- [Tooling Plan](#tooling-plan)
- [Action Plan](#action-plan)
- [Reference Appendix — Verses, Locations, Events, Dates](#reference-appendix--verses-locations-events-dates)

## Concept
An isometric, voxel-blocked **animal farm & crafting game** told across the life of Noah — the one righteous man in a corrupt world, ordered to build something absurd, decades before there's any evidence he's right. The player gathers timber, crafts the Ark plank by plank, herds and cares for pairs of animals, survives the Flood in cramped isolation, and re-establishes life on dry land. The "obvious" game-genre reward loop (build faster, cut corners, hoard resources) is always available — the tension is whether the player sustains obedience and care over the long, unglamorous middle, with no one watching and no proof yet that it matters.

**Core question the game keeps asking:** *You've been told to do something that looks insane to everyone else. Do you keep building?*

⬆ [Back to Top](#table-of-contents)

## Tone
Not a children's-book ark full of smiling giraffes. Noah is righteous *and* the story ends with him drunk and exposed in his own tent, his family fractured by his son's disrespect. The game should hold both — decades of quiet, mocked, faithful labor, and then a very human collapse once the pressure lifts. Visually and emotionally this leans **Limbo** (muted palette, silhouette, dread, isolation) fused with **Neverhood** (warm, handmade, slightly wobbly claymation charm) — a blocky/voxel base rendered with Limbo's mood and Neverhood's texture. The mockery of Noah's neighbors, the claustrophobia of the Flood, and the quiet failure at the end shouldn't be softened away.

⬆ [Back to Top](#table-of-contents)

## Core Mechanics & Input Schemes

**1. Movement & Input Controls**

*Desktop Controls:*
- Movement: Standard WASD or Arrow Keys, isometric-relative.
- Interaction / Confirm: E or Spacebar.
- Craft / Build Menu: Tab or B.
- Secondary / Care Action (Feed, Calm, Tend): Shift or C.
- Pause / Inventory / Verse Log: Escape or P.
- Dialogue & Prompt Choices: Number keys 1–4 or mouse click.

*Mobile Controls:*
- Virtual Touch Joystick (bottom-left) for 8-direction isometric movement.
- Action Buttons (bottom-right): Prominent Interact (A) button, context-sensitive Care/Craft (B) button.
- Choice Nodes: Touch-friendly full-width card targets.
- Build placement via drag-and-drop voxel blocks with a snap-to-grid ghost preview.

**2. Isometric voxel exploration + build/care scenes**
Grid-based movement and placement, resource-node interaction zones, herd-following/leading mechanics for animals. Combat does not exist as a system — threats are environmental (weather, scarcity, social pressure), not enemies.

**3. Obedience/Faith meter ("Trust in the Word" vs "Trust in Your Own Timeline")**
Rather than a binary good/evil score, track **"Trust in the Word"** vs **"Trust in Your Own Timeline."**

- **Dynamic Temptation, resolved as a *believed* shortcut, not a real one:** During the long Pre-Flood build, the game periodically offers ways to go faster — undersize a joint, skip a coat of pitch, board an animal pair without the full week of quarantine/settling the text implies. Choosing the shortcut *feels* smart in the moment (faster progress bar, one less thing to manage) but doesn't cleanly save time; it defers the cost. A weak joint fails during the storm sequence, an unsettled animal pair panics and damages a pen wall, a thin pitch-seal causes a slow leak the player has to manage during Act II. This keeps the shortcut genuinely tempting without hard-gating content, and mirrors the actual shape of the story: nothing about the Ark's construction was optional busywork.
- **Impact:** The score is descriptive, not moralizing. It colors ambient dialogue from Noah's family, the mockery dialogue from neighbors during Act I, the severity of Act II's management crises, and the tone of the Act III epilogue — without gating access to content.

**4. Craft & Build system**
The Ark is built section by section from a small kit of primitive voxel pieces (frame, plank, rope-lash, pitch-seal — extending the existing `box()`/`cyl()`/`sph()` primitive pattern already used for the animal models). Blueprint stages unlock in sequence: keel → frame → hull → deck → pens → roof/window. Resources (timber, pitch, rope) are gathered from an environment that visibly shrinks as the surrounding, disbelieving town encroaches and mocks the project.

**5. Animal collection & care loop**
Pairs (and the seven-pairs-of-clean-animals exception, Genesis 7:2–3) are found, led back to the Ark, and penned. During Act II this becomes a management layer: feed, calm, and muck out pens in cramped quarters over an abstracted "forty days" — the crafting game's back half is about maintenance under pressure, not construction.

**6. Dialogue-driven scenes**
Short branching dialogue handles family relationships (Noah, his wife, three sons and their wives) and the mockery/pressure beats from the surrounding community — interleaved with the build/care gameplay rather than replacing it.

**7. Verse reflection beats**
After each of the three Acts, a quiet non-interactive moment — a short scripture passage rendered as spare text over a still isometric frame, echoing the Psalms-as-reflection beats used in other projects in this line. A beat, not a wall of text.

⬆ [Back to Top](#table-of-contents)

## Chapter Structure

| # | Chapter | Act | Core Tension | The "right thing" |
|---|---------|-----|---------------|---------------------|
| 1 | **The Warning** | Pre-Flood | A corrupt world, an inexplicable command | Accepting a calling that looks absurd to everyone else |
| 2 | **The Blueprint** | Pre-Flood | Exact, strange specifications (gopher wood, precise dimensions) | Obedience to the letter, not just the spirit, of the instruction |
| 3 | **The Long Build** | Pre-Flood | Decades of labor, public mockery, no visible proof yet | Faithfulness in obscurity, before there's any evidence it matters — this is the game's main crafting loop |
| 4 | **The Gathering** | Pre-Flood | Collecting and provisioning every pair, clean and unclean, on a fixed deadline | Care and thoroughness under time pressure, no cut corners |
| 5 | **The Door Shuts** | Flood | The rain begins; the door closes from outside (Genesis 7:16) — no more choices, no more prep | Surrender of control at the exact moment control would feel most needed |
| 6 | **Forty Days** | Flood | Rising water, close quarters, real animal-care crises | Sustained care under sustained pressure — the management loop's hardest stretch |
| 7 | **The Long Wait** | Flood | Water stops rising but doesn't recede; the raven, then the dove, then nothing, then an olive leaf | Patience without certainty — waiting well when there's no way to know how much longer |
| 8 | **Dry Ground** | Post-Flood | Leaving the Ark after over a year enclosed | Gratitude and orderly release, not a chaotic scramble out |
| 9 | **The Altar & the Covenant** | Post-Flood | Sacrifice, then the rainbow promise (Genesis 9:8–17) | Worship as the first act on dry land, before rebuilding begins |
| 10 | **The Vineyard** | Post-Flood | Noah plants a vineyard, gets drunk, is exposed; Ham's disrespect and Noah's curse on Canaan (Genesis 9:20–27) | *Noah fails here.* No hidden "good" branch — the point is that even the one righteous man collapses once the pressure lifts |

⬆ [Back to Top](#table-of-contents)

## Chapter 10 as the Hinge
Structurally this should land the way Chapter 9 lands in the David plan — a deliberate break in the pattern the whole game has built. Nine chapters establish Noah as the person who does the hard, unglamorous right thing for decades with no evidence and no audience. Chapter 10 breaks that on purpose, right after the covenant chapter that looked like the story's resolution:

- **Agency Shift:** The player can't choose a righteous outcome for Noah; they only witness it, and select how the *sons* respond (Ham's mockery vs. Shem and Japheth's covering-without-looking, Genesis 9:23) — agency moves to the next generation, mirroring the way the narrative itself shifts focus.
- **Interface & Aesthetic Shift:** The camera pulls in tight and static (no free orbit/isometric pan), the Neverhood warmth drains to a single low, sour light source, and the crafting/care HUD disappears entirely — this is the one chapter with no build, no care loop, nothing to manage. Just consequence.

⬆ [Back to Top](#table-of-contents)

## Technical Architecture & Dependency Stack

**Status: undecided, leaning isometric voxel/blocky.** The three existing prototypes (`index.html`/`app.js`, `Noah_1_Building.html`, `Noah_2_Animals.html`) are all free-orbit Three.js r128 dioramas with flat-shaded (`flatShading: true`) low-poly materials and a shared primitive-builder pattern (`box()`, `cyl()`, `sph()`) already used to assemble Lion, Bear, Camel, Elephant, Giraffe, Zebra, Sheep, Dove, Noah, and generic Person models. That primitive-kit approach is a natural stepping stone toward a true voxel/blocking system, but the camera/engine model needs a decision.

### Architectural Options

**Fixed isometric voxel/grid engine (leading candidate)**
- **Mechanism:** Replace free-orbit camera with a locked isometric projection and grid-based placement, closer to the grid/sphere editor tooling built for the Jerusalem detective game.
- **Advantages:** Matches the "Minecraft-style blocking" brief directly; grid placement makes the crafting/build system (keel → frame → hull → deck) and animal-pen layout straightforward to author and to reuse for both the Ark-build (Act I) and farm/settlement-build (Act III) loops.
- **Disadvantages:** Requires rebuilding the camera/input layer from scratch; the current orbit-diorama prototypes wouldn't carry forward as-is.

**Continued free-orbit Three.js dioramas (current prototype direction)**
- **Mechanism:** Keep the `app.js`-style scene-switcher (`storyData` config array driving title/verse/image/prophecy-link per scene) stringing together standalone diorama files like `Noah_1_Building.html` and `Noah_2_Animals.html`.
- **Advantages:** Directly extends existing, working code; lowest near-term effort.
- **Disadvantages:** Doesn't naturally support a real crafting/inventory loop or grid-based Ark construction; scenes remain disconnected rather than one cohesive engine.

**PixiJS v8 isometric port**
- **Mechanism:** Port to PixiJS v8, as already done for the Historic Lewes RPG, for a true 2.5D tile engine.
- **Advantages:** Reuses engine patterns and faction/stealth-adjacent systems logic already proven on Historic Lewes; likely better performance for a grid-heavy build/farm sim than WebGL 3D.
- **Disadvantages:** Loses the "true 3D voxel" read that Three.js gives for free; animals would need to be authored as 2.5D sprites rather than extending the existing 3D primitive-builder models.

### Core Libraries & Dependencies (draft, pending engine decision)

| Library / Module | Version / Source | Purpose in Architecture |
|---|---|---|
| `three.js` (if staying 3D) | r128 (current) | Voxel/primitive rendering, camera, lighting — already proven across all three prototypes. |
| `pixi.js` (if porting) | v8.x | WebGL/WebGPU 2D isometric rendering, tilemap/grid rendering — proven on Historic Lewes. |
| `anime.js` | 3.2.1 (current) | Tweened camera/object animation — already used in `app.js` for Ark movement and scene transitions. |
| `inkjs` | v2.x | Narrative scripting runtime for family/mockery dialogue branches, consistent with other dialogue-driven projects in this line. |
| Native Web Audio API (`AudioContext`) | Web Standard | Dynamic stem mixer for rain/storm/animal ambience — see Dynamic Audio Stem Architecture below. |

⬆ [Back to Top](#table-of-contents)

## Technical Module Architecture

```
/src
  /engine
    voxelGrid.js         — grid/tile placement, collision, blueprint-stage unlocking
    primitiveBuilder.js    — box()/cyl()/sph() kit, extended from Noah_1_Building.html & Noah_2_Animals.html
    entity.js                — base entity class (Noah, family, animal, NPC)
    camera.js                  — locked isometric projection, lens-contraction for Chapter 10
    inputManager.js              — keyboard + touch virtual joystick abstraction
    sceneManager.js                — scene/chapter stack, transitions, fade in/out
    stateManager.js                  — global game state, obedience meter, save/load (append-only flag log)
  /systems
    craftingSystem.js                  — resource gathering, blueprint-stage progression, shortcut/cost mechanic
    animalCareSystem.js                  — pairing, penning, feed/calm/muck-out management loop
  /narrative
    dialogueEngine.js                      — runs compiled dialogue graphs (inkjs runtime)
    reflectionEngine.js                      — renders end-of-Act verse reflection beats
  /audio
    audioManager.js                            — Web Audio API stem mixer, storm/ambience crossfading
  /data
    chapters/                                    — one JSON/data file per chapter (grid layout, NPCs, dialogue ref, triggers)
    credits.json                                   — attribution manifest for CC-BY / licensed audio and asset sources
  /tools
    voxel-terrain-designer/                          — standalone HTML/JS tool, outputs grid/tilemap JSON
    animal-designer/                                    — standalone tool extending primitiveBuilder, outputs model + metadata JSON
    ark-blueprint-designer/                               — standalone tool, defines build-stage sequences and resource costs
    weather-audio-designer/                                 — standalone tool, tags/sequences stems & sfx per chapter
    dialogue-designer/                                        — standalone tool, builds branching dialogue graphs (Ink node editor)
```

**State/save data:** An append-only log of flags and counters (`trust_word`, `trust_timeline`, per-chapter shortcuts taken) for easy state-debugging and clean undo/redo inside custom tools, following the same pattern used for the David project's state manager.

⬆ [Back to Top](#table-of-contents)

## Dynamic Audio Stem Architecture
To adapt music and ambience to gameplay state — quiet, wary daytime-build ambience during Act I mockery beats, crossfading into heavy rain/creaking-timber stems as the storm builds in Act II — the audio engine avoids standard HTML5 `<audio>` tags in favor of native Web Audio API (`AudioContext`) stems, consistent with the approach used on the David project:

- **Mechanism:** Load synced, identical-length stems (e.g., `stem_rain.mp3`, `stem_timber-creak.mp3`, `stem_animal-ambience.mp3`, `stem_strings.mp3`). Decode into `AudioBufferSourceNode` objects, each routed through its own `GainNode`.
- **Execution:** All stems start concurrently on the same sample tick (`audioCtx.currentTime`); volume transitions via linear/exponential ramps on individual gain parameters.
- **Advantages:** Zero runtime dependencies, sample-accurate stem sync, and dynamic filtering (e.g., muffling exterior storm stems once the player is "inside" the Ark during Act II).
- **Chapter 10 note:** the audio design should go nearly silent here — a stark contrast to the layered stems everywhere else — reinforcing the Hinge chapter's stripped-down aesthetic.

⬆ [Back to Top](#table-of-contents)

## Open-Source Sound Effects & Music Resources
For period-appropriate acoustic soundscapes (ancient strings, hand percussion, wind/rain foley, and livestock sounds), use royalty-free/CC0 and Creative Commons libraries. **Licensing note:** not all sources below are CC0 — several require attribution or carry per-bundle commercial terms. A `credits.json` manifest (see Technical Module Architecture) plus an in-game/README credits screen should be a required deliverable once any CC-BY or bundle-licensed asset is used.

### Music & Stem Sources
- **OpenGameArt.org (CC0 / CC-BY — varies per asset):** Community-created ambient, acoustic, and folk tracks. Search tags: Ancient, Acoustic Harp, Rain, Storm Ambience, Pastoral. Check each asset's individual license before use.
- **Incompetech (Kevin MacLeod — CC-BY):** Cinematic and folk compositions (hand drums, wooden flutes, ancient strings). **Requires attribution.**
- **Free Music Archive (FMA) & Pixabay Audio (CC0 / Free Commercial):** Acoustic, ambient, and minimalist instrumental tracks suitable for slicing into dynamic stems.
- **Musopen (Public Domain):** Classical/ancient modal acoustic compositions for the quiet Verse Reflection beats.

### Sound Effects & Foley (SFX)
- **Kenney.nl (CC0 — Public Domain):** Clean UI clicks, footstep, and environmental interaction assets.
- **Freesound.org (mixed licenses — filter for CC0):** Rain, timber creaks, rope, and livestock foley. Filter explicitly by license, not just by source.
- **Sonniss GDC Audio Bundles (Royalty-Free Commercial):** High-definition storm/weather and animal foley packs. Confirm each bundle's specific commercial-use terms before committing.

⬆ [Back to Top](#table-of-contents)

## Tooling Plan
Five standalone browser tools, each a focused editor producing data the main game consumes, matching the architecture pattern used on the David project.

**1. Voxel Terrain Designer**
- Grid-based voxel painter: place terrain/collision blocks, define layers, mark resource-node spawn points.
- **Output:** per-chapter grid JSON (`chapters/03-long-build/grid.json`).

**2. Animal Designer**
- Extends the existing `box()`/`cyl()`/`sph()` primitive-builder pattern from `Noah_2_Animals.html` into a proper tool: assemble new species from the primitive kit, palette/reskin, and bake to reusable model + metadata JSON.
- **Output:** model JSON + animal metadata (species, clean/unclean status, pen-space requirement).

**3. Ark Blueprint Designer**
- Defines the build-stage sequence (keel → frame → hull → deck → pens → roof), resource costs per stage, and the shortcut/cost pairs that feed the Trust-in-the-Word mechanic.
- **Output:** blueprint-stage config JSON.

**4. Weather & Audio Designer**
- Configures dynamic Web Audio stems, storm intensity curves, and ambience triggers per chapter.
- **Output:** audio manifest JSON, and should write/update `credits.json` entries when a licensed (non-CC0) asset is tagged into a scene.

**5. Dialogue Designer**
- Node-based graph editor (Ink-compatible), for family and mockery/community dialogue branches.
- **Output:** Ink-compiled or custom JSON dialogue graphs.

⬆ [Back to Top](#table-of-contents)

## Action Plan

```
Phase 0: Architecture & Engine Decision (lock voxel-grid vs. continued Three.js orbit dioramas)
 └── Phase 1: Standalone Editors (Voxel Terrain, Animal Designer, Ink Dialogue)
      └── Phase 2: Vertical Slice (Chapter 3: The Long Build)
           └── Phase 3: Composition Tools (Ark Blueprint & Weather/Audio Designers)
                └── Phase 4: Production (Chapters 1–10)
                     └── Phase 5: Polish & Playtest
                          └── Phase 6: Ship
```

**Phase 0 — Engine Decision & Foundations (1–2 weeks)**
Resolve the isometric voxel-grid vs. continued free-orbit Three.js question (see Technical Architecture). Scaffold `voxelGrid.js` or extend the existing Three.js primitive-builder pattern accordingly, plus `sceneManager`, append-only `stateManager`, `inputManager` (WASD + Touch).

**Phase 1 — Core Tools, v1 (2–4 weeks)**
Voxel Terrain Designer, Animal Designer (extending the existing `Noah_2_Animals.html` primitive kit), Dialogue Designer.

**Phase 2 — Vertical Slice: Chapter 3, "The Long Build" (2–3 weeks)**
Build the core crafting loop end-to-end: resource gathering, blueprint-stage progression, the shortcut/deferred-cost mechanic, and mockery dialogue triggers. Validate whether a cut corner genuinely resurfaces as a cost in Act II, not just as a flavor flag.

**Phase 3 — Ark Blueprint + Weather/Audio Designer (2–3 weeks)**
Build composition editors based on Phase 2 authoring feedback. Integrate the dynamic Web Audio stem mixer and `credits.json` pipeline.

**Phase 4 — Remaining Chapters**
Author remaining chapters 1–2, 4–10, including the animal-care management loop for Act II and the stripped-down Chapter 10 (Hinge) presentation.

**Phase 5 — Polish & Playtest**
Full playthrough pass, pacing, obedience-meter calibration, mobile touch usability, and a dedicated pass on whether Chapter 10's tonal and mechanical shift lands as a gut-punch rather than a jarring non-sequitur.

**Phase 6 — Ship**
Bundle and deploy static build, including a credits/licensing screen covering all CC-BY and bundle-licensed assets in use.

⬆ [Back to Top](#table-of-contents)

## Reference Appendix — Verses, Locations, Events, Dates
Like David, Noah's dates aren't fixed in the historical record — traditional biblical chronology (via genealogies in Genesis 5 and 11) places the Flood roughly in the 3rd millennium BCE, though there's no scholarly consensus and no direct extra-biblical corroboration comparable to the Tel Dan Stele for David. The game doesn't need to commit to exact years on-screen; the narrative's own internal time markers (the 100-ish years of building implied by Genesis 5:32/7:6, the 40 days of rain, the year-plus aboard the Ark per the flood chronology in Genesis 7–8) carry the pacing better than invented dates would.

| # | Chapter | Key Bible references | Setting | Notes |
|---|---------|----------------------|---------|-------|
| 1 | The Warning | Genesis 6:5–13 | Unnamed pre-Flood settlement | Establishes the corruption of "all flesh" and Noah's singled-out righteousness (6:9) |
| 2 | The Blueprint | Genesis 6:14–16 | Same | Specific dimensions (300×50×30 cubits) and materials (gopher wood, pitch) — precise enough to drive the build-stage system directly |
| 3 | The Long Build | Genesis 6:22; implied ~100-year span (cf. 5:32, 7:6) | Same | Genesis states only that Noah "did all that God commanded" — the game's central crafting/perseverance loop fills in the unstated decades |
| 4 | The Gathering | Genesis 7:1–9 | Same | Seven pairs of clean animals, one pair of unclean (7:2–3) — a real resource-management asymmetry to build the pairing system around |
| 5 | The Door Shuts | Genesis 7:10–16 | Aboard the Ark | "And the LORD shut him in" (7:16) — the moment agency transfers from Noah's prep to pure endurance |
| 6 | Forty Days | Genesis 7:17–24 | Aboard the Ark, floodwaters | Water prevails over the highest mountains (7:19–20) — the core survival/care management stretch |
| 7 | The Long Wait | Genesis 8:1–14 | Aboard the Ark, resting on Ararat | Raven sent out and doesn't return (8:7); dove sent three times, returning with an olive leaf on the second attempt (8:8–12) — strong beat-by-beat template for a patience mechanic |
| 8 | Dry Ground | Genesis 8:15–19 | Disembarking | Explicit command to leave and be fruitful — orderly release, not chaos |
| 9 | The Altar & the Covenant | Genesis 8:20–9:17 | Dry land | Noah's altar and sacrifice, then the rainbow covenant — the narrative's apparent resolution point, right before Chapter 10 undercuts it |
| 10 | The Vineyard | Genesis 9:20–27 | Noah's settlement/tent | Noah plants a vineyard, becomes drunk, is exposed; Ham's disrespect vs. Shem/Japheth's discretion; Noah's curse on Canaan — the Hinge chapter |

**Design note:** as with David, avoid overclaiming historical/chronological certainty on-screen — Genesis's own internal sequencing (build → gather → flood → wait → altar → vineyard) is the more honest and more game-useful timeline than any invented absolute date.

⬆ [Back to Top](#table-of-contents)


## Interactive Story Narration

### Design Philosophy

Structure the experience as:

> **Gameplay → Story Event → Player Choice → Consequence → Gameplay**

Keep narration brief and meaningful. Let players discover the story through exploration, work, conversations, and the changing world rather than frequent cutscenes.

### Chapter 1 — The Calling

Begin with ordinary life on Noah's farm by chopping wood, feeding livestock, harvesting crops, repairing fences, and speaking with neighbours. As the player explores, the world gradually quietens before God calls Noah.

### Crafting the Ark

Build the Ark in major stages:
- Foundation
- Hull
- Lower Deck
- Middle Deck
- Upper Deck
- Roof
- Waterproofing
- Food storage
- Water storage
- Animal pens

Each completed stage visibly transforms the world and changes NPC reactions.

### Dynamic Conversations

Allow players to explain God's warning, ignore critics, joke with villagers, or ask for help. NPCs should remember these interactions.

### Running the Zoo

Animal management becomes a core gameplay system. Different species have unique needs, behaviours, and personalities.

### Seven-Day Countdown

After every animal boards, the player experiences seven increasingly tense days before the rain begins.

### Surviving the Flood

Focus on surviving aboard the Ark by calming animals, repairing leaks, managing resources, and coordinating Noah's family.

### The Raven and the Dove

Players actively release each bird and witness the return of the olive leaf.

### After the Flood

Shift the gameplay towards restoration by releasing animals, farming, rebuilding, and constructing the altar before discovering the rainbow naturally.

### Epilogue

Consider extending the narrative to Noah's vineyard, showing that the story is ultimately about God's faithfulness rather than human perfection.
