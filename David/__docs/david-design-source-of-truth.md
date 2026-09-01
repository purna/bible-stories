# King David — Design and Music Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *What does faithful leadership do with power, failure, and repentance?*

This source of truth covers 12 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: Anointed](#act-1-anointed) — Identify the overlooked shepherd among Jesse’s sons.
- [Act 2: Goliath](#act-2-goliath) — Time a sling throw after refusing heavy armour.
- [Act 3: Saul’s Court](#act-3-sauls-court) — Play a calming melody while watching Saul’s mood.
- [Act 4: Covenant Friends](#act-4-covenant-friends) — Exchange signals with Jonathan unseen.
- [Act 5: The Wilderness](#act-5-the-wilderness) — Escape Saul and spare him in the cave.
- [Act 6: Abigail](#act-6-abigail) — Deliver provisions before anger becomes violence.
- [Act 7: The Throne](#act-7-the-throne) — Resolve petitions without favouritism.
- [Act 8: Bathsheba and Uriah](#act-8-bathsheba-and-uriah) — Confront the irreversible harm rather than hiding it.
- [Act 9: Nathan’s Parable](#act-9-nathans-parable) — Recognise the king inside the story and repent.
- [Act 10: Absalom](#act-10-absalom) — Navigate divided loyalties without celebrating loss.
- [Act 11: The Census](#act-11-the-census) — Choose responsibility during the plague.
- [Act 12: Solomon](#act-12-solomon) — Pass plans and wisdom to the next king.
<!-- act-summary:end -->

This is the canonical high-level reference for the planned King David comic/game and its soundtrack. It condenses the approved direction in `king-david-game-plan.md` into a chapter and music production guide.

## Status and Canon

- **Implementation:** Pre-production; tools and character presets exist, but there is no playable story page yet.
- **Planned structure:** Ten chapters plus an optional epilogue.
- **Primary text:** 1 Samuel 16–31; 2 Samuel; selected Psalms.
- **Core question:** *Power is available to you. What do you do with it?*
- **Persistent tension:** Trust in the Lord ↔ trust in the sword.
- **Emotional arc:** Hidden faithfulness → courage → popularity → restraint → compromise → kingship → worship → abuse of power → repentance and consequence.

## Visual and Gameplay Identity

Top-down exploration, short encounters, restrained combat, stealth during the fugitive years, consequence-carrying choices, and quiet Psalm reflections. Visuals move from sheepfield gold to battlefield dust, cave shadow, royal crimson, rooftop blue, and the grey-green grief of Absalom’s rebellion.

## Musical Identity

Instrumental ancient-frontier country: lyre-like finger-picked guitar, fiddle, frame drum, upright bass, wooden flute used sparingly, hand percussion, low strings, and restrained pedal steel. David’s **shepherd motif** is playable on a few strings and matures into royal, fugitive, broken, and penitent forms.

- No vocals, sung Psalms, imitation of a specific artist, or heroic fantasy bombast.
- Psalms are reflective instrumental spaces, not sentimental interludes.
- “Trust in the sword” adds rigid percussion and low ostinato; “trust in the Lord” removes weight and clarifies the shepherd motif.
- Chapter 9 must sound morally constricted, not romantic.

## Proposed Chapter Music Map

| # | Chapter | Core tension | Music direction | Tempo / mode | Planned filename |
|---|---|---|---|---|---|
| 1 | **The Anointing** | The overlooked youngest son receives an improbable calling. | Pastoral guitar/lyre, soft fiddle, sheep bells as ambience; shepherd motif introduced plainly. | 66–74 BPM; modal major. | `Act1_Oil_on_the_Shepherd.ogg` + `.mp3` |
| 2 | **Lion and Bear** | Faithfulness in obscurity and danger without an audience. | Low plucked pulse, frame drum, tense fiddle; courage stays intimate. | 76–84 BPM; Dorian. | `Act2_No_One_Was_Watching.ogg` + `.mp3` |
| 3 | **Goliath** | Fear, borrowed armour, and trust beyond weapons. | Sparse march fragments, sling-like rhythmic snap, open guitar; avoid oversized battle scoring. | 82–92 BPM; minor to Mixolydian. | `Act3_Five_Smooth_Stones.ogg` + `.mp3` |
| 4 | **The King’s Favor** | Friendship, fame, court music, and Saul’s jealousy. | Courtly fiddle and dulcimer around David’s motif; dissonant spear stinger intrudes. | 72–80 BPM; shifting major/minor. | `Act4_A_Song_in_Sauls_Hall.ogg` + `.mp3` |
| 5 | **The Spear and the Cave** | David can kill Saul but chooses restraint. | Cave ambience, muted guitar, heartbeat frame drum. Sheathing or sparing removes percussion and reveals the shepherd motif. | 54–64 BPM; dark Dorian. | `Act5_The_Cut_Corner.ogg` + `.mp3` |
| 6 | **The Outlaw King** | Survival, compromise, leadership, and recovery at Ziklag. | Dusty baritone guitar, travelling rhythm, rough fiddle; morally unsettled frontier palette. | 78–88 BPM; minor/Mixolydian. | `Act6_A_King_Without_a_Throne.ogg` + `.mp3` |
| 7 | **Two Kingdoms** | Civil war and the temptation to seize what violence offers. | Divided stereo motifs, measured drum, mournful fiddle. Resolution remains costly. | 68–76 BPM; minor with opposing tonal centres. | `Act7_Crown_and_Sword.ogg` + `.mp3` |
| 8 | **Bringing the Ark** | Fear, holy weight, recovered joy, and undignified worship. | Processional hand drums and fiddle, interrupted by near-silence at Uzzah, then humble dance rhythm. | 88–100 BPM; modal major. | `Act8_Dancing_Before_the_Ark.ogg` + `.mp3` |
| 9 | **Bathsheba and Uriah** | Desire becomes misuse of power, deception, and murder. David fails. | Narrow rooftop guitar figure, cold drone, clock-like pulse. Harmony contracts with each rationalisation; no romantic theme. | 48–58 BPM; chromatic minor. | `Act9_The_Roof_and_the_Letter.ogg` + `.mp3` |
| 10 | **Nathan and Absalom** | Truth, Psalm 51 repentance, consequence, rebellion, and a father’s grief. | Broken shepherd motif, solo fiddle, low guitar; repentance simplifies, Absalom’s death leaves unresolved space. | 52–64 BPM; minor with fragile major inflection. | `Act10_Create_in_Me_a_Clean_Heart.ogg` + `.mp3` |
| E | **Final Years** | Census, plague, succession, legacy, and human weakness. | Aged solo guitar; shepherd motif returns without royal ornament. | 48–56 BPM; open modal. | `Epilogue_The_Last_Psalm.ogg` + `.mp3` |

## Adaptive Music Rules

- All gameplay stems must share identical length and loop points within a chapter.
- Minimum stems: **foundation**, **human warmth**, **danger/sword**, and **reflection**.
- Choices crossfade stems; they do not restart music.
- Psalm reflections remove percussion and foreground no more than one melodic instrument.
- Target **100–180 seconds** per loop; export OGG first and MP3 fallback.

## Production Gate

The chapter list and filenames are proposed canon until the playable story data is authored. Any structural change must be made here and in `king-david-game-plan.md` together.

<!-- consolidated-from: King_David_Source_of_truth_.docx -->
## Consolidated gameplay and technical design

### Table of Contents

Concept

Tone

Core Mechanics & Input Schemes

Chapter Structure

Chapter 9 as the Hinge

Technical Architecture & Dependency Stack

Technical Module Architecture

Dynamic Audio Stem Architecture

Open-Source Sound Effects & Music Resources

Tooling Plan

Action Plan

Reference Appendix — Verses, Locations, Events, Dates


### Concept

A story-driven, top-down game told across the life of David — shepherd, outlaw, king, father, penitent. Each stage drops the player into a moment where the "obvious" game-genre move (fight, take, seize, revenge) is available, but the right thing is something harder: restraint, mercy, humility, honesty, repentance. The tension isn't puzzle-solving — it's whether the player will do what David actually did, and feel the weight when he doesn't.

Core question the game keeps asking: Power is available to you. What do you do with it?

⬆ Back to Top


### Tone

Not a Sunday-school retelling. David is the "man after God's own heart" and an adulterer and murderer. The game should let both be true. Chapters where he fails (Bathsheba/Uriah) shouldn't have a "good" choice hidden in there — the point is that he chooses wrong, and the rest of the game is about what happens after failure, not just how to avoid it.

⬆ Back to Top


### Core Mechanics & Input Schemes

1. Movement & Input Controls

Desktop Controls:

Movement: Standard WASD or Arrow Keys.

Interaction / Confirm: E or Spacebar.

Secondary / Restraint Action (e.g., Sheathe Weapon, Drop Item, Spare): Shift or C.

Pause / Inventory / Psalm Menu: Escape or P.

Dialogue Choices: Number keys 1–4 or mouse click.

Mobile Controls:

Virtual Touch Joystick (bottom-left) for 8-direction top-down movement.

Action Buttons (bottom-right): Prominent Interact (A) button, context-sensitive Restraint (B) button.

Choice Nodes: Touch-friendly full-width card targets.

2. Top-down exploration + encounter scenes Tile-based movement, NPC interaction zones, stealth/detection where relevant (fugitive years). Combat is minimal and situational, not a core loop — this isn't an action game with a Bible skin.

3. Integrity/Faithfulness meter ("Trust in the Lord" vs "Trust in the Sword") Rather than a binary good/evil score, track "Trust in the Lord" vs "Trust in the Sword."

Dynamic Temptation: Choosing "Trust in the Sword" provides immediate, tangible tactical advantages (e.g., instantly clearing high-difficulty stealth segments or bypassing risky encounters), whereas choosing restraint makes immediate gameplay significantly harder.

Impact: The score is descriptive rather than moralizing. It colors dialogue, dynamic audio stems, and late-game consequences without gating content.

4. Consequence-carrying choices Decisions echo forward, chapter to chapter. Example: how David treats Saul in the cave scenes affects the tone of dialogue when he later becomes king over Saul's former territory.

5. Dialogue-driven scenes Branching dialogue trees drive most decision points, interleaved with short top-down movement/exploration segments.

6. Psalms as reflection beats After major chapters, a quiet non-interactive moment — a relevant psalm (13, 23, 51, 63) rendered as short reflective text, tied to what just happened. A beat, not a wall of text.

⬆ Back to Top


### Chapter Structure

Possible epilogue: the census/plague and final years — brief, reflective, about legacy and human weakness even at the end.

⬆ Back to Top


### Chapter 9 as the Hinge

Structurally this should be the fulcrum of the whole game. Everything before builds trust in David as someone who does choose right under pressure. Chapter 9 breaks that pattern deliberately:

Agency Shift: The player can't choose a righteous outcome; they only select how David internally rationalizes his actions (e.g., "He should have stayed at his post" vs "It's necessary for the kingdom").

Interface & Aesthetic Shift: The camera view contracts to simulate isolation and tunnel vision. Color palettes shift to harsh, dark blues and silver.

⬆ Back to Top


### Technical Architecture & Dependency Stack


#### Core Build System: Vite.js

The project relies on Vite as a unified build system and development server. Vite serves both the main playable engine runtime and the 5 standalone browser-based tool suites via a Multi-Page Application (MPA) setup.

Vite Dev Server & HMR: Instant ES module imports during development with zero bundle step on cold start. Hot Module Replacement (HMR) allows tweaking rendering algorithms, SVG generators, and audio stem parameters without losing game state.

Multi-Page Entry Points (vite.config.js): Rollup target configured to build the main game alongside standalone browser tools:
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

Asset Loading Pipeline: Vite handles raw .svg, .json, .wav, and .mp3 imports using asset-loader optimizations, outputting cached static bundles ready for static site deployment (GitHub Pages, Vercel, itch.io).


#### Core Libraries & Dependencies

⬆ Back to Top


### Technical Module Architecture

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
  /tools
    tile-designer/                — standalone HTML/JS tool, outputs tilemap JSON
    character-designer/            — standalone SVG tool (two-color, face-on), bakes sprite sheets + JSON
    scene-designer/                  — standalone tool, composes chapter scenes from tiles+characters+triggers
    audio-designer/                    — standalone tool, tags/sequences music stems & sfx per scene
    dialogue-designer/                  — standalone tool, builds branching dialogue graphs (Ink node editor)

State/save data: An append-only log of flags and state counters (trust_lord, trust_sword, per-chapter choices) for easy state-debugging and clean undo/redo execution inside custom tools.

⬆ Back to Top


### Dynamic Audio Stem Architecture

To seamlessly adapt music to gameplay state (e.g., crossfading ambient lutes into intense martial percussion during high-tension stealth), the audio engine avoids standard HTML5 <audio> tags and implements native Web Audio API (AudioContext) stems:


#### Architectural Options for Web Engines

Native Web Audio API (AudioContext) — Chosen Implementation

Mechanism: Load synced, identical-length audio track stems (e.g., stem_harp.mp3, stem_percussion.mp3, stem_woodwinds.mp3). Decode audio into AudioBufferSourceNode objects and connect each stem to its own individual GainNode.

Execution: All stem source nodes are started concurrently on the exact same sample tick using audioCtx.currentTime. Volume transitions take place by applying linear or exponential ramps to individual gain parameters (gainNode.gain.setTargetAtTime(targetVolume, audioCtx.currentTime, fadeTime)).

Advantages: Zero runtime dependencies, microsecond sample synchronization across all stems, and dynamic audio filtering (e.g., low-pass filtering music during dialogue).

Tone.js Framework

Mechanism: Uses Tone.Players managed by a central Tone.Transport clock to lock multi-track loops together.

Advantages: Simplifies musical beat-syncing and built-in FX routing.

Disadvantages: Adds an additional library footprint (~150KB).

Howler.js / @pixi/sound

Mechanism: Standard Web Audio wrapper managing multi-track web audio playback.

Advantages: Tight integration with Pixi asset loaders (PIXI.Assets).

Disadvantages: Requires manual tracking to prevent stem clock-drift during looping.

⬆ Back to Top


### Open-Source Sound Effects & Music Resources

For authentic, period-appropriate acoustic soundscapes (ancient harps, lyres, hand percussion, wind instruments, and foley), utilize royalty-free, CC0/Creative Commons libraries:


#### Music & Stem Sources

OpenGameArt.org (CC0 / CC-BY): Community-created 8-bit, orchestral, and acoustic tracks. Search tags: Bard, Medieval, Ancient, Acoustic Harp, Chiptune Folk.

Incompetech (Kevin MacLeod - CC-BY): Industry-standard open cinematic and folk compositions (hand drums, wooden flutes, ancient strings).

Free Music Archive (FMA) & Pixabay Audio (CC0 / Free Commercial): Curated acoustic, ancient ambient, and minimalist instrumental tracks suitable for slicing into dynamic stems.

Musopen (Public Domain): Classical and ancient modal acoustic compositions for sacred reflection beats (Psalms).


#### Sound Effects & Foley (SFX)

Kenney.nl (CC0 - Public Domain): Clean UI clicks, step sounds, environmental interactions, and movement assets.

Freesound.org (CC0 Filtered): Authentic foley: footsteps on sand/stone, fabric rustles, sword draws, cave ambiance, and livestock noises.

Sonniss GDC Audio Bundles (Royalty-Free Commercial): High-definition professional foley packs released annually (thousands of real-world environment and weapon recordings).

⬆ Back to Top


### Tooling Plan

Five standalone browser tools, each a focused editor producing data the main game consumes. Each is an independent HTML/JS entry point built inside Vite's multi-page architecture.


#### 1. Tile Designer

Grid-based tile painter: place terrain/collision tiles, define layers.

Output: per-chapter tilemap JSON (chapters/05-cave/tilemap.json).


#### 2. Character Designer

Builds face-on, two-color layered SVG characters (shepherd, soldier, king, priest) and bakes them to PNG sprite sheets.

Output: sprite sheet PNGs + character metadata JSON.


#### 3. Scene Designer

Level editor: composes tilemaps, character spawn points, trigger zones, entry/exit state rules.

Output: chapter config JSON.


#### 4. Audio/Music Designer

Configures dynamic Web Audio stems, ambient beds, gain ramp rates, and trigger stingers per scene.

Output: audio manifest JSON + asset references.


#### 5. Dialogue Designer

Node-based graph editor (Ink-compatible). Supports inline event tags (# trigger: eventName) and conditional branching based on the append-only state log.

Output: Ink-compiled or custom JSON dialogue graphs.

⬆ Back to Top


### Action Plan

Phase 0: Architecture & Data Schema (Vite Multi-Page + PixiJS v8 Scaffold)
 └── Phase 1: Standalone Editors (Tile, Character SVG, Ink Dialogue)
      └── Phase 2: Vertical Slice (Chapter 5: En Gedi / Cave)
           └── Phase 3: Composition Tools (Scene & Audio Web Audio Designers)
                └── Phase 4: Production (Chapters 1–10)

Phase 0 — Foundations (1–2 weeks)

Vite multi-page project scaffold (vite.config.js), PixiJS v8 engine initialization, sceneManager, append-only stateManager, inputManager (WASD + Touch).

Phase 1 — Core Tools, v1 (2–4 weeks)

Tile Designer, Character Designer (SVG-to-PNG bake), Dialogue Designer (Ink-compatible node canvas with event tags).

Phase 2 — Vertical Slice: Chapter 5 (2–3 weeks)

Build "The Spear and the Cave" end-to-end. Validate stealth mechanics, Web Audio stem fading on tension, moral choices, and state persistence.

Phase 3 — Scene Designer + Audio Designer (2–3 weeks)

Build composition editors based on Phase 2 authoring feedback. Integrate dynamic Web Audio stem mixing engine.

Phase 4 — Remaining Chapters

Author remaining chapters 1–4, 6–10.

Phase 5 — Polish & Playtest

Full playthrough pass, pacing, trust-meter calibration, and mobile touch usability pass.

Phase 6 — Ship

Bundle and deploy static Vite build.

⬆ Back to Top


### Reference Appendix — Verses, Locations, Events, Dates

Dates for David's life are not fixed in the historical record; scholarly estimates for his reign generally cluster around c. 1010–970 BCE (traditional/biblical chronology), with real debate between "maximalist" and "minimalist" positions on how much of the narrative reflects verifiable 10th-century history. The Tel Dan Stele (discovered 1993, dated ~9th century BCE) is the strongest extra-biblical evidence for David, referencing a "House of David" (bytdwd) as a dynastic name — useful as a design/lore touchstone even though it doesn't corroborate specific narrative events.

Design note: given the dating uncertainty, the game doesn't need to commit to exact years on-screen — relative sequencing and place names carry the historical weight better than precise dates would, and avoids the game overclaiming certainty the sources don't have.

⬆ Back to Top


### Consolidated table 1

| # | Chapter | Setting | Core Tension | The "right thing" |

| --- | --- | --- | --- | --- |

| 1 | The Anointing | Bethlehem, sheepfields | Overlooked youngest son; Samuel comes | Humility — accepting a calling that looks absurd to everyone else |

| 2 | Lion and Bear | Wilderness | Protecting the flock alone | Faithfulness in obscurity, before anyone's watching |

| 3 | Goliath | Valley of Elah | Fear vs faith; Saul's armor doesn't fit | Trusting God over borrowed strength/weapons |

| 4 | The King's Favor | Saul's court | Rising fame, Saul's growing jealousy, Jonathan's friendship | Loyalty without currying favor; not exploiting popularity |

| 5 | The Spear and the Cave | Wilderness, En Gedi, Ziklag | Saul hunting David; David has the chance to kill him (twice) | Mercy over vengeance — refusing to "help God along" |

| 6 | The Outlaw King | Philistine territory, Ziklag raid | Compromise for survival, protecting his men | Integrity under pressure, protecting the vulnerable |

| 7 | Two Kingdoms | Hebron | Civil war with Saul's house, Abner and Joab | Restraint amid political violence — not everything won by the sword should be taken by the sword |

| 8 | Bringing the Ark | Jerusalem | Uzzah's death, David's anger then his uncontained dancing | Worship over image — humility even when it costs dignity |

| 9 | Bathsheba and Uriah | Jerusalem, the palace roof | Power, desire, cover-up | David fails here. No hidden "good" branch — the point is the fall |

| 10 | Nathan's Confrontation & Absalom | Jerusalem | Confronted with his own sin; later, his son's rebellion | Genuine repentance (Psalm 51) and mercy toward a rebelling son he still loves |


### Consolidated table 2

| Library / Module | Version / Source | Purpose in Architecture |

| --- | --- | --- |

| pixi.js | v8.x | WebGL/WebGPU 2D Rendering Engine. Manages scene graph Container trees, tilemap rendering, sprite sheets, camera containers, dynamic particle shaders, and text objects. |

| inkjs | v2.x | Narrative Scripting Runtime. Executes compiled Ink dialogue JSON structures, handles conditional branching, tags, and syncs variable state with the game’s append-only state log. |

| Native Web Audio API (AudioContext) | Web Standard | Dynamic Audio Stem Mixer. Low-latency stem synchronization, smooth volume ramping via GainNode, ambient ducking during dialogue, and dynamic low-pass filtering. |

| lucide / Dynamic SVG Utilities | ESM | SVG Vector Rendering. Powers the two-color dynamic face-on character builder and UI vector icons before baking to sprite sheets. |

| nipplejs / Custom Canvas Touch | ESM / Native | Mobile Virtual Joystick. Touch input layer handling multi-touch, directional vectors, and responsive touch controls on iOS/Android viewports. |


### Consolidated table 3

| # | Chapter | Key Bible references | Location(s) | Approx. period | Historical/geographic note |

| --- | --- | --- | --- | --- | --- |

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

<!-- panel-scene-design:start -->
## Comic panel and scene direction

This is the canonical visual storyboard for production. Each chapter uses three principal panels: **A establishes**, **B carries the interaction**, and **C resolves and reflects**. Additional dialogue panels inherit the nearest principal panel’s palette, lighting, layers, lens, and motion; they may change character pose and caption placement but must not invent a new visual language without updating this document.

### Layer and motion contract

- **Background — SVG:** setting, sky, distant architecture/landscape, weather, and the lowest-frequency parallax. Never place an essential interactive target here.
- **Middle ground — characters + optional 3D:** the narrative action and at most one tactile hero prop. Use 3D only where depth improves the chapter action.
- **Foreground — SVG:** close framing shapes, symbolic props, atmosphere, and occasional occlusion. Foreground motion must not obscure faces, captions, or targets.
- **Camera:** text panels remain stable. Movement is slow, eased, and motivated by revelation, travel, or completion. Avoid continuous orbit, handheld shake, and large zooms.
- **Animation:** SVG and 3D movement starts at different phases so the scene feels layered. Pause nonessential loops while a choice is open. Provide a reduced-motion crossfade/pose alternative.
- **Approved Texture Forge inventory:** `stone`, `grass`, `fabric_weave`, `wood_oak`, `wood_dark`, `wall_brick`, `water_fast`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: Anointed

**Act summary:** Identify the overlooked shepherd among Jesse’s sons.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “anointed”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “identify the overlooked shepherd among jesse’s sons”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 2: Goliath

**Act summary:** Time a sling throw after refusing heavy armour.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `grass` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing grass, nearby silhouettes, and an edge prop tied to “goliath”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “time a sling throw after refusing heavy armour”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `grass` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 3: Saul’s Court

**Act summary:** Play a calming melody while watching Saul’s mood.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “saul’s court”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “play a calming melody while watching saul’s mood”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 4: Covenant Friends

**Act summary:** Exchange signals with Jonathan unseen.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | midnight violet, ultramarine, pale cyan, star gold. motivated glow emerging from the vision against a subdued world. | `stone` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “covenant friends”. MG: character group and optional low-detail 3D landmark. BG SVG: abstract horizon, layered cloud, and symbolic light field. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow orbit or vertical crane that returns to a grounded eye line. | SVG: stars, glyphs, cloud veils, and rays phase in rather than flash. 3D: symbolic objects rotate or assemble slowly with eased starts and stops. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining midnight violet, ultramarine, pale cyan, star gold. Key light follows the story’s real light source. | `wood_dark` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “exchange signals with jonathan unseen”. BG SVG: simplified abstract horizon, layered cloud, and symbolic light field with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter midnight violet, ultramarine, pale cyan, star gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: abstract horizon, layered cloud, and symbolic light field, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 5: The Wilderness

**Act summary:** Escape Saul and spare him in the cave.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | sandstone, ochre, dry umber, faded turquoise. broad hard sun or long amber dusk with strong silhouette edges. | `stone` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the wilderness”. MG: character group and optional low-detail 3D landmark. BG SVG: layered ridges, heat haze, and an open horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. patient side-track or shallow forward drift that emphasizes distance. | SVG: dust, cloth edges, distant birds, and heat bands move sparingly. 3D: staff, pack, tent, or terrain marker sways or settles with weight. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining sandstone, ochre, dry umber, faded turquoise. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “escape saul and spare him in the cave”. BG SVG: simplified layered ridges, heat haze, and an open horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter sandstone, ochre, dry umber, faded turquoise; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered ridges, heat haze, and an open horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 6: Abigail

**Act summary:** Deliver provisions before anger becomes violence.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | midnight violet, ultramarine, pale cyan, star gold. motivated glow emerging from the vision against a subdued world. | `wall_brick` + `water_fast` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “abigail”. MG: character group and optional low-detail 3D landmark. BG SVG: abstract horizon, layered cloud, and symbolic light field. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow orbit or vertical crane that returns to a grounded eye line. | SVG: stars, glyphs, cloud veils, and rays phase in rather than flash. 3D: symbolic objects rotate or assemble slowly with eased starts and stops. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining midnight violet, ultramarine, pale cyan, star gold. Key light follows the story’s real light source. | `water_fast` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “deliver provisions before anger becomes violence”. BG SVG: simplified abstract horizon, layered cloud, and symbolic light field with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter midnight violet, ultramarine, pale cyan, star gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: abstract horizon, layered cloud, and symbolic light field, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 7: The Throne

**Act summary:** Resolve petitions without favouritism.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “the throne”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “resolve petitions without favouritism”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 8: Bathsheba and Uriah

**Act summary:** Confront the irreversible harm rather than hiding it.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `stone` + `grass` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “bathsheba and uriah”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `grass` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “confront the irreversible harm rather than hiding it”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 9: Nathan’s Parable

**Act summary:** Recognise the king inside the story and repent.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “nathan’s parable”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “recognise the king inside the story and repent”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 10: Absalom

**Act summary:** Navigate divided loyalties without celebrating loss.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “absalom”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “navigate divided loyalties without celebrating loss”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 11: The Census

**Act summary:** Choose responsibility during the plague.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 11A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “the census”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 11B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_dark` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “choose responsibility during the plague”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 11C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 12: Solomon

**Act summary:** Pass plans and wisdom to the next king.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 12A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “solomon”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 12B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “pass plans and wisdom to the next king”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 12C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
