# The Story of Elijah — Design Source of Truth

This document is the single reference for the chapter structure, core mechanics, and the Faith/Despair system. Update this file whenever a design decision changes — treat it as canon for the build. It should remain in sync with `elijah-game-plan.md`.

---

## Core Question

*When the world is loud and hostile, can you still hear the voice of God?*

---

## Unifying System: Faith vs. Despair

A persistent, descriptive meter that tracks Elijah's internal state. It is not a score to be optimized, but a reflection of the narrative pressures. It directly influences the difficulty and feel of the core "Hearing" mechanic.

- **Faith (0-100):** Built by acting on God's commands, especially when they are dangerous or counter-intuitive (e.g., confronting Ahab, trusting a starving widow for food). High Faith makes the "still, small voice" clearer in "Hearing" scenes.
- **Despair (0-100):** Grows from focusing on external threats (Jezebel's army) or internal isolation ("I am the only one left"). High Despair adds audio-visual "noise" to the world, making the "Hearing" mechanic more challenging.

**Secondary Meter: Ahab & Jezebel's Wrath**
A persistent threat meter. High wrath increases the presence of hostile patrols in the world and can change NPC dialogue, reflecting the danger of being associated with Elijah.

---

## Core Gameplay Loop: The "Hearing" Scenes

This is the game's signature mechanic, replacing traditional combat or puzzles. In key moments of decision or despair, the world fades into a stylized audio-visual representation of Elijah's inner state.

- **Goal:** The player must "tune out" the noise of fear, doubt, and worldly threats to isolate the "still, small voice" of God's instruction.
- **Mechanic:** This is an audio-visual minigame, not a dialogue tree. The player uses the mouse or a joystick to manipulate filters and panners, clearing away chaotic sound and visual distortion to find a point of clarity.
- **State-Driven Difficulty:** The initial intensity of the "noise" is determined by the current **Despair** level. The clarity of the "signal" is determined by the **Faith** level. This creates a feedback loop where giving in to despair makes it literally harder to hear God's guidance.

---

## Exploration Layer

Standard top-down, tile-based exploration. The player navigates Elijah through key locations like the wilderness of Kerith, the town of Zarephath, Mount Carmel, and the caves of Horeb. Tension is generated through narrative, dialogue, and the threat of discovery, not through combat.

---

## Chapter Structure

The game follows a 7-chapter structure based on the narrative arc of 1 Kings 17 - 2 Kings 2.

| # | Chapter | Setting | Core Tension / Mechanic | Faith/Despair Focus |
|---|---|---|---|---|
| 1 | **The Drought** | Samaria, Kerith Ravine | Confronting Ahab, then surviving in isolation. Introduces the "Hearing" mechanic in a low-stakes context. | **Faith:** Obeying the command to hide. **Despair:** Loneliness, scarcity. |
| 2 | **The Widow of Zarephath** | Zarephath | Trusting God for provision by asking a starving widow for her last meal. A test of radical faith for both Elijah and the widow. | **Faith:** Asking for the meal. **Despair:** Witnessing extreme poverty. |
| 3 | **Mount Carmel** | Mount Carmel | The public, dramatic showdown with the prophets of Baal. A high-stakes test of public faith. | **Faith:** Calling down fire from heaven. **Despair:** The overwhelming odds. |
| 4 | **The Flight to Horeb** | The Wilderness | Fleeing Jezebel's death threat, Elijah collapses in exhaustion and fear. The lowest point of despair. | **Faith:** Minimal. **Despair:** Fear for his life, feeling of total failure and isolation. |
| 5 | **The Still Small Voice** | Mount Horeb | The game's hinge. The "Hearing" mechanic is central, as Elijah must filter out the "loud" manifestations (wind, fire) to find God's quiet voice. | **Faith:** Learning to listen in a new way. **Despair:** The noise of his own fear and trauma. |
| 6 | **Naboth's Vineyard** | Jezreel | Returning from the mountain to confront Ahab and Jezebel over a gross injustice. Applying renewed purpose to the world. | **Faith:** Speaking truth to power again. **Despair:** The risk of immediate execution. |
| 7 | **The Chariot of Fire** | Jordan River | Passing the mantle to Elisha. A miraculous conclusion to the journey. | **Faith:** Fulfilling his final commission. **Despair:** Leaving his life's work behind. |

---

## Musical Identity

The canonical score is instrumental country-western and Appalachian storytelling shaped around Elijah's movement between public confrontation and private listening. Use finger-picked acoustic guitar, fiddle, upright bass, brushed drums, frame drum, restrained pedal steel, and sparse wooden flute. The recurring **calling motif** should be bold enough to survive Mount Carmel but simple enough to become a whisper at Horeb.

- **No vocals, humming, spoken word, or choir.**
- Do not imitate an identifiable song, melody, or performer.
- Faith is represented by clarity and space, not simply major harmony or louder orchestration.
- Despair adds noise, low drone, rhythmic instability, and narrowed frequency range.
- The still small voice must be the quietest—and clearest—musical event in the story.
- Wind, earthquake, fire, rain, ravens, and crowd sounds remain separate ambience/effect layers.

## Chapter Music Map

| # | Chapter | Emotional purpose | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **The Drought** | Confrontation, obedience, isolation, and the drying brook. | Dry guitar, light fiddle drone, sparse wooden taps. Remove bass and warmth as the water disappears. | 64–72 BPM; Dorian. | `Act1_Morning_Light_on_the_Ridge.ogg` then `.mp3` |
| 2 | **The Widow of Zarephath** | Scarcity, risky trust, daily provision, grief, and restored life. | Intimate guitar, clay-pot percussion, warm fiddle. Thin almost to silence at the child's death; return without triumphal excess. | 58–68 BPM; minor toward modal major. | `Act2_Oil_in_the_Clay.ogg` then `.mp3` |
| 3 | **Mount Carmel** | Public challenge, unanswered frenzy, repaired altar, fire, and rain. | Restrained low pulse grows through competing rhythmic layers; Elijah's prayer clears the texture before a short fire stinger. Rain resolves the tension. | 78–90 BPM; tense minor to open major. | `Act3_Before_the_Lightning.ogg` then `.mp3` |
| 4 | **The Flight to Horeb** | Threat, panic, collapse, sleep, food, and a long journey. | Uneven baritone-guitar pulse, low fiddle, dry shaker. Exhaustion slows and fragments the pattern; angel scenes add warmth without erasing despair. | 52–64 BPM; minor. | `Act4_Shadow_on_the_Hardpan.ogg` then `.mp3` |
| 5 | **The Still Small Voice** | Wind, earthquake, fire, then the gentle whisper and renewed commission. | Begin with low environmental drone and sparse guitar. Each loud event briefly overwhelms; after the fire, remove almost everything and state the calling motif on one quiet instrument. | Free pulse to 54 BPM; suspended modal. | `Act5_Sunrise_on_the_Ridge.ogg` then `.mp3` |
| 6 | **Naboth's Vineyard** | Injustice, corrupted power, and renewed courage to confront the king. | Steady walking guitar, sombre fiddle, restrained frame drum. Clear moral weight, no action-hero swagger. | 66–74 BPM; dark Dorian. | `Act6_The_Prophet_s_Gate.ogg` then `.mp3` |
| 7 | **The Chariot of Fire** | Final journey, divided Jordan, farewell, ascent, and succession. | Spacious guitar and fiddle duet grows into luminous steel and hand drum; calling motif passes from Elijah's register to Elisha's. | 68–78 BPM; modal major. | `Act7_The_Last_Crossing.ogg` then `.mp3` |

## Loop and Adaptive Audio Rules

- Target **90–150 seconds** per chapter with a clean, seamless loop.
- OGG is the preferred playback format; MP3 is the fallback.
- The Hearing mechanic should use synchronized stems or filters so noise can be removed without restarting the track.
- Dialogue and story text take priority in the mix; avoid persistent lead melodies in the speech range.
- Strong events may use separate stingers, but the underlying loop must remain stable.
- Button feedback remains `assets/audio/ping_pong.mp3` and is not part of the musical identity.

---

## Technical Standards & File Map
The technical standards and file map are defined in the `elijah-game-plan.md` and the `elijah-implementation/` series of documents. Key points:
- **Engine:** PixiJS v8 for 2D rendering.
- **Audio:** Tone.js for dynamic audio stems and the "Hearing" mechanic.
- **Narrative:** InkJS for branching dialogue.
- **Tooling:** A suite of standalone Vite-powered tools for authoring content (tiles, characters, scenes, dialogue, hearing scenes).
- **State:** A central `stateManager.ts` handles the `Faith`, `Despair`, and `Wrath` values, along with other narrative flags.

The file structure is as follows:
```
/
├── index.html
├── config.js                  # all settings/constants
├── compass.js                 # compass system + epilogue logic
├── storyEngine.js              # scene navigation (evolved from app.js)
├── dialogueEngine.js           # Ink runtime wrapper
├── postProduction.js           # Three.js EffectComposer wrapper (bloom, vignette)
├── isometricEngine.js           # reusable isometric exploration engine (all 4 acts)
├── testing.js                  # in-browser assertion test harness
├── beats/
│   ├── act1.js
│   ├── act2.js
│   ├── act3.js
│   └── act4.js
├── data/
│   ├── scenes.json
│   ├── epilogues.json
│   ├── verseFragments.json
│   ├── isometricScenes.json    # per-act isometric world + hotspot data
│   └── dialogue/
│       ├── act1_sailors.ink
│       ├── act3_nineveh.ink
│       └── act4_figtree.ink   # compile each to .json before use
├── styles/
│   ├── base.css
│   ├── ui.css
│   ├── compass.css
│   ├── act1-sea.css
│   └── act3-desert.css
└── assets/
    └── models/                 # .glb/.obj Three.js assets
```
