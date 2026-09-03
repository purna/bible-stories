# King David — Game Design Plan

## Table of Contents
- [Concept](#concept)
- [Tone](#tone)
- [Core Mechanics & Input Schemes](#core-mechanics--input-schemes)
- [Chapter Structure](#chapter-structure)
- [Chapter 9 as the Hinge](#chapter-9-as-the-hinge)
- [Technical Architecture & Dependency Stack](#technical-architecture--dependency-stack)
- [Technical Module Architecture](#technical-module-architecture)
- [Dynamic Audio Stem Architecture](#dynamic-audio-stem-architecture)
- [Open-Source Sound Effects & Music Resources](#open-source-sound-effects--music-resources)
- [Tooling Plan](#tooling-plan)
- [Action Plan](#action-plan)
- [Reference Appendix — Verses, Locations, Events, Dates](#reference-appendix--verses-locations-events-dates)

## Concept
A story-driven, top-down game told across the life of David — shepherd, outlaw, king, father, penitent. Each stage drops the player into a moment where the "obvious" game-genre move (fight, take, seize, revenge) is available, but the right thing is something harder: restraint, mercy, humility, honesty, repentance. The tension isn't puzzle-solving — it's whether the player will do what David actually did, and feel the weight when he doesn't.

**Core question the game keeps asking:** *Power is available to you. What do you do with it?*

⬆ [Back to Top](#table-of-contents)

## Tone
Not a Sunday-school retelling. David is the "man after God's own heart" and an adulterer and murderer. The game should let both be true. Chapters where he fails (Bathsheba/Uriah) shouldn't have a "good" choice hidden in there — the point is that he chooses wrong, and the rest of the game is about what happens after failure, not just how to avoid it.

⬆ [Back to Top](#table-of-contents)

## Core Mechanics & Input Schemes

**1. Movement & Input Controls**

*Desktop Controls:*
- Movement: Standard WASD or Arrow Keys.
- Interaction / Confirm: E or Spacebar.
- Secondary / Restraint Action (e.g., Sheathe Weapon, Drop Item, Spare): Shift or C.
- Pause / Inventory / Psalm Menu: Escape or P.
- Dialogue Choices: Number keys 1–4 or mouse click.

*Mobile Controls:*
- Virtual Touch Joystick (bottom-left) for 8-direction top-down movement.
- Action Buttons (bottom-right): Prominent Interact (A) button, context-sensitive Restraint (B) button.
- Choice Nodes: Touch-friendly full-width card targets.

**2. Top-down exploration + encounter scenes**
Tile-based movement, NPC interaction zones, stealth/detection where relevant (fugitive years). Combat is minimal and situational, not a core loop — this isn't an action game with a Bible skin.

**3. Integrity/Faithfulness meter ("Trust in the Lord" vs "Trust in the Sword")**
Rather than a binary good/evil score, track "Trust in the Lord" vs "Trust in the Sword."

- **Dynamic Temptation, resolved as a *believed* advantage, not a real one:** Choosing "Trust in the Sword" *feels* like the tactically smart move in the moment — the game presents it as a shortcut (skip the stealth puzzle, end the encounter fast, silence the threat). But it doesn't cleanly bypass content; it defers the cost. The immediate "win" is real, but it quietly writes a flag that resurfaces later: colder dialogue from someone who witnessed it, a harder read on David in Chapter 9/10, an NPC relationship that doesn't recover. This keeps the temptation genuinely tempting (a player who wants an easier session will feel the pull) without the meter becoming a content-gate, and it mirrors the actual shape of David's story — Uriah's death *looks* like it solves David's problem in the moment.
- **Impact:** The score is descriptive rather than moralizing. It colors dialogue, dynamic audio stems, and late-game consequences without gating content access.

**4. Consequence-carrying choices**
Decisions echo forward, chapter to chapter. Example: how David treats Saul in the cave scenes affects the tone of dialogue when he later becomes king over Saul's former territory.

**5. Dialogue-driven scenes**
Branching dialogue trees drive most decision points, interleaved with short top-down movement/exploration segments.

**6. Psalms as reflection beats**
After major chapters, a quiet non-interactive moment — a relevant psalm (13, 23, 51, 63) rendered as short reflective text, tied to what just happened. A beat, not a wall of text.

⬆ [Back to Top](#table-of-contents)

## Chapter Structure

| # | Chapter | Setting | Core Tension | The "right thing" |
|---|---------|---------|---------------|---------------------|
| 1 | **The Anointing** | Bethlehem, sheepfields | Overlooked youngest son; Samuel comes | Humility — accepting a calling that looks absurd to everyone else |
| 2 | **Lion and Bear** | Wilderness | Protecting the flock alone | Faithfulness in obscurity, before anyone's watching |
| 3 | **Goliath** | Valley of Elah | Fear vs faith; Saul's armor doesn't fit | Trusting God over borrowed strength/weapons |
| 4 | **The King's Favor** | Saul's court | Rising fame, Saul's growing jealousy, Jonathan's friendship | Loyalty without currying favor; not exploiting popularity |
| 5 | **The Spear and the Cave** | Wilderness, En Gedi, Ziklag | Saul hunting David; David has the chance to kill him (twice) | Mercy over vengeance — refusing to "help God along" |
| 6 | **The Outlaw King** | Philistine territory, Ziklag raid | Compromise for survival, protecting his men | Integrity under pressure, protecting the vulnerable |
| 7 | **Two Kingdoms** | Hebron | Civil war with Saul's house, Abner and Joab | Restraint amid political violence — not everything won by the sword should be *taken* by the sword |
| 8 | **Bringing the Ark** | Jerusalem | Uzzah's death, David's anger then his uncontained dancing | Worship over image — humility even when it costs dignity |
| 9 | **Bathsheba and Uriah** | Jerusalem, the palace roof | Power, desire, cover-up | *David fails here.* No hidden "good" branch — the point is the fall |
| 10 | **Nathan's Confrontation & Absalom** | Jerusalem | Confronted with his own sin; later, his son's rebellion | Genuine repentance (Psalm 51) and mercy toward a rebelling son he still loves |

*Possible epilogue:* the census/plague and final years — brief, reflective, about legacy and human weakness even at the end.

⬆ [Back to Top](#table-of-contents)

## Chapter 9 as the Hinge
Structurally this should be the fulcrum of the whole game. Everything before builds trust in David as someone who does choose right under pressure. Chapter 9 breaks that pattern deliberately:

- **Agency Shift:** The player can't choose a righteous outcome; they only select how David internally rationalizes his actions (e.g., "He should have stayed at his post" vs "It's necessary for the kingdom").
- **Interface & Aesthetic Shift:** The camera view contracts to simulate isolation and tunnel vision. Color palettes shift to harsh, dark blues and silver.

⬆ [Back to Top](#table-of-contents)

## Technical Architecture & Dependency Stack

### Core Build System: Vite.js
The project relies on Vite as a unified build system and development server. Vite serves both the main playable engine runtime and the 5 standalone browser-based tool suites via a Multi-Page Application (MPA) setup.

- **Vite Dev Server & HMR:** Instant ES module imports during development with zero bundle step on cold start. Hot Module Replacement (HMR) allows tweaking rendering algorithms, SVG generators, and audio stem parameters without losing game state.
- **Multi-Page Entry Points (`vite.config.js`):** Rollup target configured to build the main game alongside standalone browser tools:

```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tileDesigner: resolve(__dirname, 'tools/tile-designer/index.html'),
        characterDesigner: resolve(__dirname, 'tools/character-designer/index.html'),
        sceneDesigner: resolve(__dirname, 'tools/scene-designer/index.html'),
        audioDesigner: resolve(__dirname, 'tools/audio-designer/index.html'),
        dialogueDesigner: resolve(__dirname, 'tools/dialogue-designer/index.html')
      }
    }
  }
});
```

- **Asset Loading Pipeline:** Vite handles raw `.svg`, `.json`, `.wav`, and `.mp3` imports using asset-loader optimizations, outputting cached static bundles ready for static site deployment (GitHub Pages, Vercel, itch.io).

### Core Libraries & Dependencies

| Library / Module | Version / Source | Purpose in Architecture |
|---|---|---|
| `pixi.js` | v8.x | WebGL/WebGPU 2D Rendering Engine. Manages scene graph Container trees, tilemap rendering, sprite sheets, camera containers, dynamic particle shaders, and text objects. |
| `inkjs` | v2.x | Narrative Scripting Runtime. Executes compiled Ink dialogue JSON structures, handles conditional branching, tags, and syncs variable state with the game's append-only state log. |
| Native Web Audio API (`AudioContext`) | Web Standard | Dynamic Audio Stem Mixer. Low-latency stem synchronization, smooth volume ramping via `GainNode`, ambient ducking during dialogue, and dynamic low-pass filtering. |
| `lucide` / Dynamic SVG Utilities | ESM | SVG Vector Rendering. Powers the two-color dynamic face-on character builder and UI vector icons before baking to sprite sheets. |
| `nipplejs` / Custom Canvas Touch | ESM / Native | Mobile Virtual Joystick. Touch input layer handling multi-touch, directional vectors, and responsive touch controls on iOS/Android viewports. |

⬆ [Back to Top](#table-of-contents)

## Technical Module Architecture

```
/src
  /engine
    tileMap.js        — tilemap loader + renderer (grid, layers, collision)
    entity.js          — base sprite/entity class (player, NPC, prop)
    camera.js           — follow-cam, bounds clamping, lens contraction effects
    inputManager.js      — keyboard (WASD/Arrows/Keys) + touch virtual joystick abstraction
    sceneManager.js       — scene stack, transitions, fade in/out
    stateManager.js        — global game state, save/load (append-only state flag log)
  /narrative
    dialogueEngine.js       — runs compiled dialogue graphs (inkjs runtime + inline # set: trust_sword tags)
    reflectionEngine.js      — renders Psalm interlude beats
  /audio
    audioManager.js           — Web Audio API stem mixer, dynamic stem crossfading, ducking, stingers
  /data
    chapters/                  — one JSON/data file per chapter (tilemap ref, NPCs, dialogue ref, triggers)
    credits.json                — attribution manifest for CC-BY / licensed audio and asset sources
  /tools
    tile-designer/                — standalone HTML/JS tool, outputs tilemap JSON
    character-designer/            — standalone SVG tool (two-color, face-on), bakes sprite sheets + JSON
    scene-designer/                  — standalone tool, composes chapter scenes from tiles+characters+triggers
    audio-designer/                    — standalone tool, tags/sequences music stems & sfx per scene
    dialogue-designer/                  — standalone tool, builds branching dialogue graphs (Ink node editor)
```

**State/save data:** An append-only log of flags and state counters (`trust_lord`, `trust_sword`, per-chapter choices) for easy state-debugging and clean undo/redo execution inside custom tools.

- **Snapshotting/compaction:** the log is cheap for a 10-chapter game, but to avoid unbounded growth across long or repeated playthroughs, `stateManager` should periodically fold the log into a compacted snapshot at chapter boundaries (keep the raw log for the current chapter only; collapse prior chapters into a resolved-state object). This preserves undo/redo within a chapter while keeping save files small.

⬆ [Back to Top](#table-of-contents)

## Dynamic Audio Stem Architecture
To seamlessly adapt music to gameplay state (e.g., crossfading ambient lutes into intense martial percussion during high-tension stealth), the audio engine avoids standard HTML5 `<audio>` tags and implements native Web Audio API (`AudioContext`) stems:

### Architectural Options for Web Engines

**Native Web Audio API (`AudioContext`) — Chosen Implementation**
- **Mechanism:** Load synced, identical-length audio track stems (e.g., `stem_harp.mp3`, `stem_percussion.mp3`, `stem_woodwinds.mp3`). Decode audio into `AudioBufferSourceNode` objects and connect each stem to its own individual `GainNode`.
- **Execution:** All stem source nodes are started concurrently on the exact same sample tick using `audioCtx.currentTime`. Volume transitions take place by applying linear or exponential ramps to individual gain parameters (`gainNode.gain.setTargetAtTime(targetVolume, audioCtx.currentTime, fadeTime)`).
- **Advantages:** Zero runtime dependencies, microsecond sample synchronization across all stems, and dynamic audio filtering (e.g., low-pass filtering music during dialogue).

**Tone.js Framework**
- **Mechanism:** Uses `Tone.Players` managed by a central `Tone.Transport` clock to lock multi-track loops together.
- **Advantages:** Simplifies musical beat-syncing and built-in FX routing.
- **Disadvantages:** Adds an additional library footprint (~150KB).

**Howler.js / `@pixi/sound`**
- **Mechanism:** Standard Web Audio wrapper managing multi-track web audio playback.
- **Advantages:** Tight integration with Pixi asset loaders (`PIXI.Assets`).
- **Disadvantages:** Requires manual tracking to prevent stem clock-drift during looping.

⬆ [Back to Top](#table-of-contents)

## Open-Source Sound Effects & Music Resources
For authentic, period-appropriate acoustic soundscapes (ancient harps, lyres, hand percussion, wind instruments, and foley), utilize royalty-free, CC0/Creative Commons libraries. **Licensing note:** not all sources below are CC0 — several require attribution or have per-bundle commercial terms. A `credits.json` manifest (see Technical Module Architecture) and an in-game/README credits screen should be treated as a required deliverable, not optional polish, once any CC-BY or bundle-licensed asset is used.

### Music & Stem Sources
- **OpenGameArt.org (CC0 / CC-BY — varies per asset):** Community-created 8-bit, orchestral, and acoustic tracks. Search tags: Bard, Medieval, Ancient, Acoustic Harp, Chiptune Folk. Check each asset's individual license before use.
- **Incompetech (Kevin MacLeod — CC-BY):** Industry-standard open cinematic and folk compositions (hand drums, wooden flutes, ancient strings). **Requires attribution** — track title and "Kevin MacLeod (incompetech.com)" credit per Incompetech's license terms.
- **Free Music Archive (FMA) & Pixabay Audio (CC0 / Free Commercial):** Curated acoustic, ancient ambient, and minimalist instrumental tracks suitable for slicing into dynamic stems.
- **Musopen (Public Domain):** Classical and ancient modal acoustic compositions for sacred reflection beats (Psalms).

### Sound Effects & Foley (SFX)
- **Kenney.nl (CC0 — Public Domain):** Clean UI clicks, step sounds, environmental interactions, and movement assets.
- **Freesound.org (mixed licenses — filter for CC0):** Authentic foley: footsteps on sand/stone, fabric rustles, sword draws, cave ambiance, and livestock noises. Freesound hosts a mix of CC0, CC-BY, and CC-BY-NC assets in the same search results — filter explicitly by license, not just by source.
- **Sonniss GDC Audio Bundles (Royalty-Free Commercial):** High-definition professional foley packs released annually (thousands of real-world environment and weapon recordings). Redistribution/commercial terms vary bundle-to-bundle — confirm the specific bundle's license before committing to assets from it, especially if the game will ever be sold or monetized.

⬆ [Back to Top](#table-of-contents)

## Tooling Plan
Five standalone browser tools, each a focused editor producing data the main game consumes. Each is an independent HTML/JS entry point built inside Vite's multi-page architecture.

**1. Tile Designer**
- Grid-based tile painter: place terrain/collision tiles, define layers.
- **Output:** per-chapter tilemap JSON (`chapters/05-cave/tilemap.json`).

**2. Character Designer**
- Builds face-on, two-color layered SVG characters (shepherd, soldier, king, priest) and bakes them to PNG sprite sheets.
- **Output:** sprite sheet PNGs + character metadata JSON.

**3. Scene Designer**
- Level editor: composes tilemaps, character spawn points, trigger zones, entry/exit state rules.
- **Output:** chapter config JSON.

**4. Audio/Music Designer**
- Configures dynamic Web Audio stems, ambient beds, gain ramp rates, and trigger stingers per scene.
- **Output:** audio manifest JSON + asset references. Should also write/update entries in `credits.json` when a licensed (non-CC0) asset is tagged into a scene, so attribution stays in sync with actual usage rather than being assembled by hand at the end.

**5. Dialogue Designer**
- Node-based graph editor (Ink-compatible). Supports inline event tags (`# trigger: eventName`) and conditional branching based on the append-only state log.
- **Output:** Ink-compiled or custom JSON dialogue graphs.

⬆ [Back to Top](#table-of-contents)

## Action Plan

```
Phase 0: Architecture & Data Schema (Vite Multi-Page + PixiJS v8 Scaffold)
 └── Phase 1: Standalone Editors (Tile, Character SVG, Ink Dialogue)
      └── Phase 2: Vertical Slice (Chapter 5: En Gedi / Cave)
           └── Phase 3: Composition Tools (Scene & Audio Web Audio Designers)
                └── Phase 4: Production (Chapters 1–10)
                     └── Phase 5: Polish & Playtest
                          └── Phase 6: Ship
```

**Phase 0 — Foundations (1–2 weeks)**
Vite multi-page project scaffold (`vite.config.js`), PixiJS v8 engine initialization, `sceneManager`, append-only `stateManager` (with chapter-boundary snapshotting), `inputManager` (WASD + Touch).

**Phase 1 — Core Tools, v1 (2–4 weeks)**
Tile Designer, Character Designer (SVG-to-PNG bake), Dialogue Designer (Ink-compatible node canvas with event tags).

**Phase 2 — Vertical Slice: Chapter 5 (2–3 weeks)**
Build "The Spear and the Cave" end-to-end. Validate stealth mechanics, Web Audio stem fading on tension, the deferred-cost temptation mechanic (does "Trust in the Sword" feel tempting *and* land as a cost later, or does it just feel like an easy win?), and state persistence.

**Phase 3 — Scene Designer + Audio Designer (2–3 weeks)**
Build composition editors based on Phase 2 authoring feedback. Integrate dynamic Web Audio stem mixing engine and the `credits.json` attribution pipeline.

**Phase 4 — Remaining Chapters**
Author remaining chapters 1–4, 6–10.

**Phase 5 — Polish & Playtest**
Full playthrough pass, pacing, trust-meter calibration, mobile touch usability pass, and a dedicated pass on whether Chapter 9's non-interactive fall lands emotionally without feeling like a rug-pull on the player's agency.

**Phase 6 — Ship**
Bundle and deploy static Vite build, including a credits/licensing screen covering all CC-BY and bundle-licensed assets in use.

⬆ [Back to Top](#table-of-contents)

## Reference Appendix — Verses, Locations, Events, Dates
Dates for David's life are not fixed in the historical record; scholarly estimates for his reign generally cluster around **c. 1010–970 BCE** (traditional/biblical chronology), with real debate between "maximalist" and "minimalist" positions on how much of the narrative reflects verifiable 10th-century history. The **Tel Dan Stele** (discovered 1993, dated ~9th century BCE) is the strongest extra-biblical evidence for David, referencing a "House of David" (*bytdwd*) as a dynastic name — useful as a design/lore touchstone even though it doesn't corroborate specific narrative events.

| # | Chapter | Key Bible references | Location(s) | Approx. period | Historical/geographic note |
|---|---------|----------------------|-------------|-----------------|------------------------------|
| 1 | The Anointing | 1 Samuel 16:1–13 | Bethlehem | c. 1025 BCE (trad.) | Bethlehem, ~10km south of Jerusalem; small agricultural town in the Judean hill country |
| 2 | Lion and Bear | 1 Samuel 17:34–37 | Judean wilderness, near Bethlehem | same period | Referenced retrospectively by David to Saul before the Goliath fight |
| 3 | Goliath | 1 Samuel 17 | Valley of Elah | same period | Elah Valley, ~25km southwest of Jerusalem; a real, identifiable geographic site, long a border zone between Israelite and Philistine territory |
| 4 | The King's Favor | 1 Samuel 18–19 | Saul's court, Gibeah | c. 1020s–1010s BCE | Gibeah (Tell el-Ful), Saul's traditional capital, just north of Jerusalem |
| 5 | The Spear and the Cave | 1 Samuel 19:9–10; 22:1–2; 24; 26 | Cave of Adullam; En Gedi; wilderness of Ziph/Hachilah | c. 1015–1010 BCE | Adullam in the Shephelah lowlands; En Gedi an oasis on the Dead Sea's western shore — both real, rugged hideout terrain well suited to a stealth level |
| 6 | The Outlaw King | 1 Samuel 27; 29–30 | Gath (Philistine territory); Ziklag | same period | David serves under Achish of Gath; Ziklag raided by Amalekites — a rare chapter where David's own moral compromises (deceiving Achish) are on record |
| 7 | Two Kingdoms | 2 Samuel 2–4 | Hebron; Mahanaim | c. 1010–1003 BCE | David crowned king over Judah at Hebron; Ish-bosheth (Saul's son) reigns over the northern tribes from Mahanaim — a genuine civil-war period |
| 8 | Bringing the Ark | 2 Samuel 6 | Kiriath-jearim to Jerusalem | c. 1003 BCE | Jerusalem newly taken as capital (2 Samuel 5); the Ark's journey and Uzzah's death at "Perez-uzzah" are tied to a specific, nameable route |
| 9 | Bathsheba and Uriah | 2 Samuel 11 | Jerusalem, the palace | c. 995–990 BCE | Set during a military campaign against the Ammonites at Rabbah (modern Amman); Uriah is explicitly named a Hittite, one of David's "mighty men" |
| 10 | Nathan's Confrontation & Absalom | 2 Samuel 12; 13–18; Psalm 51 | Jerusalem; Absalom's rebellion spans Hebron → Jerusalem → forest of Ephraim | c. 990–975 BCE | Nathan's parable (2 Samuel 12:1–7) is a strong scene template; Absalom later launches his revolt from Hebron, David's own former capital |
| Epilogue | Census & final years | 2 Samuel 24; 1 Kings 1–2 | Jerusalem | c. 975–970 BCE | David's death traditionally dated c. 970 BCE; succession passes to Solomon |

**Design note:** given the dating uncertainty, the game doesn't need to commit to exact years on-screen — relative sequencing and place names carry the historical weight better than precise dates would, and avoids the game overclaiming certainty the sources don't have.

⬆ [Back to Top](#table-of-contents)
