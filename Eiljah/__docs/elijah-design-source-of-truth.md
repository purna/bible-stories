# The Story of Elijah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can zeal mature into listening, mercy, and faithful succession?*

This source of truth covers 9 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Drought](#act-1-the-drought) — Follow ravens to daily bread by the brook.
- [Act 2: The Widow’s Jar](#act-2-the-widows-jar) — Measure flour and oil without exhausting either.
- [Act 3: The Child Restored](#act-3-the-child-restored) — Carry the child upstairs and persist in prayer.
- [Act 4: Mount Carmel](#act-4-mount-carmel) — Repair the altar with twelve stones.
- [Act 5: The Rain Returns](#act-5-the-rain-returns) — Spot the small cloud and race from the storm.
- [Act 6: Under the Broom Tree](#act-6-under-the-broom-tree) — Rest, eat, and accept care before travelling.
- [Act 7: The Quiet Voice](#act-7-the-quiet-voice) — Distinguish wind, quake, fire, and quiet.
- [Act 8: Naboth’s Vineyard](#act-8-naboths-vineyard) — Expose the false testimony behind the seizure.
- [Act 9: Chariots of Fire](#act-9-chariots-of-fire) — Cross the Jordan and pass the mantle to Elisha.
<!-- act-summary:end -->

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

<!-- consolidated-from: eiljah-design-source-of-truth.md -->
## Canonical character, material, and production inventory

## Canon and purpose

- **Primary text:** 1 Kings 17–19; 21; 2 Kings 1–2
- **Core question:** *Can zeal mature into listening, mercy, and faithful succession?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `elijah` | Elijah | Supporting visual identity must remain consistent across chapters. |
| `ahab` | Ahab | Supporting visual identity must remain consistent across chapters. |
| `jezebel` | Jezebel | Supporting visual identity must remain consistent across chapters. |
| `widow_of_zarephath` | Widow Of Zarephath | Supporting visual identity must remain consistent across chapters. |
| `widows_son` | Widows Son | Supporting visual identity must remain consistent across chapters. |
| `obadiah` | Obadiah | Supporting visual identity must remain consistent across chapters. |
| `prophet_of_baal` | Prophet Of Baal | Supporting visual identity must remain consistent across chapters. |
| `elisha` | Elisha | Supporting visual identity must remain consistent across chapters. |
| `naboth` | Naboth | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `water_fast` | Water Fast | Environment, prop, costume, or symbolic surface used by this story. |
| `leaves` | Leaves | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |

The matching Texture Forge exposes only these keys. Add a material here before exposing it in the tool.

## Interaction and accessibility

- Every chapter must work with pointer, keyboard, and touch.
- Never make precise timing the only route forward; include retry and reduced-motion behaviour.
- Caption all essential audio information and keep text readable over every layer.
- Keep chapter completion local and recoverable; no choice should erase story access.

## Production contract

Each chapter ships with story JSON, one background SVG, one foreground SVG, and—only where spatial interaction adds value—a small 3D scene module/data file. Asset names use stable lowercase snake_case keys. The game plan is the chapter-level authority for the playable action.

<!-- panel-scene-design:start -->
## Comic panel and scene direction

This is the canonical visual storyboard for production. Each chapter uses three principal panels: **A establishes**, **B carries the interaction**, and **C resolves and reflects**. Additional dialogue panels inherit the nearest principal panel’s palette, lighting, layers, lens, and motion; they may change character pose and caption placement but must not invent a new visual language without updating this document.

### Layer and motion contract

- **Background — SVG:** setting, sky, distant architecture/landscape, weather, and the lowest-frequency parallax. Never place an essential interactive target here.
- **Middle ground — characters + optional 3D:** the narrative action and at most one tactile hero prop. Use 3D only where depth improves the chapter action.
- **Foreground — SVG:** close framing shapes, symbolic props, atmosphere, and occasional occlusion. Foreground motion must not obscure faces, captions, or targets.
- **Camera:** text panels remain stable. Movement is slow, eased, and motivated by revelation, travel, or completion. Avoid continuous orbit, handheld shake, and large zooms.
- **Animation:** SVG and 3D movement starts at different phases so the scene feels layered. Pause nonessential loops while a choice is open. Provide a reduced-motion crossfade/pose alternative.
- **Approved Texture Forge inventory:** `desert_sand`, `stone`, `wood_oak`, `water_fast`, `leaves`, `fabric_weave`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Drought

**Act summary:** Follow ravens to daily bread by the brook.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | sandstone, ochre, dry umber, faded turquoise. broad hard sun or long amber dusk with strong silhouette edges. | `water_fast` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “the drought”. MG: character group and optional low-detail 3D landmark. BG SVG: layered ridges, heat haze, and an open horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. patient side-track or shallow forward drift that emphasizes distance. | SVG: dust, cloth edges, distant birds, and heat bands move sparingly. 3D: staff, pack, tent, or terrain marker sways or settles with weight. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining sandstone, ochre, dry umber, faded turquoise. Key light follows the story’s real light source. | `wood_oak` + `leaves` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “follow ravens to daily bread by the brook”. BG SVG: simplified layered ridges, heat haze, and an open horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter sandstone, ochre, dry umber, faded turquoise; lower saturation behind captions and preserve warm skin tones. | `leaves` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered ridges, heat haze, and an open horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 2: The Widow’s Jar

**Act summary:** Measure flour and oil without exhausting either.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the widow’s jar”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `water_fast` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “measure flour and oil without exhausting either”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_fast` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 3: The Child Restored

**Act summary:** Carry the child upstairs and persist in prayer.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `water_fast` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “the child restored”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_fast` + `leaves` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “carry the child upstairs and persist in prayer”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `leaves` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 4: Mount Carmel

**Act summary:** Repair the altar with twelve stones.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | charcoal, ember red, burnt orange, covenant gold. hard fire key with warm bounce and deep cool shadows. | `fabric_weave` + `stone` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “mount carmel”. MG: character group and optional low-detail 3D landmark. BG SVG: smoke layers, dark ridge, and heat-softened horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. measured push-in that stops before the decisive moment. | SVG: embers, smoke curls, and heat shimmer rise asynchronously. 3D: flame-lit hero prop uses restrained emissive pulses; no explosive spectacle. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining charcoal, ember red, burnt orange, covenant gold. Key light follows the story’s real light source. | `stone` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “repair the altar with twelve stones”. BG SVG: simplified smoke layers, dark ridge, and heat-softened horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter charcoal, ember red, burnt orange, covenant gold; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: smoke layers, dark ridge, and heat-softened horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 5: The Rain Returns

**Act summary:** Spot the small cloud and race from the storm.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “the rain returns”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `wood_oak` + `leaves` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “spot the small cloud and race from the storm”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `leaves` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 6: Under the Broom Tree

**Act summary:** Rest, eat, and accept care before travelling.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `leaves` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing leaves, nearby silhouettes, and an edge prop tied to “under the broom tree”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “rest, eat, and accept care before travelling”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `leaves` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 7: The Quiet Voice

**Act summary:** Distinguish wind, quake, fire, and quiet.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | charcoal, ember red, burnt orange, covenant gold. hard fire key with warm bounce and deep cool shadows. | `stone` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the quiet voice”. MG: character group and optional low-detail 3D landmark. BG SVG: smoke layers, dark ridge, and heat-softened horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. measured push-in that stops before the decisive moment. | SVG: embers, smoke curls, and heat shimmer rise asynchronously. 3D: flame-lit hero prop uses restrained emissive pulses; no explosive spectacle. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining charcoal, ember red, burnt orange, covenant gold. Key light follows the story’s real light source. | `desert_sand` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “distinguish wind, quake, fire, and quiet”. BG SVG: simplified smoke layers, dark ridge, and heat-softened horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter charcoal, ember red, burnt orange, covenant gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: smoke layers, dark ridge, and heat-softened horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 8: Naboth’s Vineyard

**Act summary:** Expose the false testimony behind the seizure.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `leaves` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing leaves, nearby silhouettes, and an edge prop tied to “naboth’s vineyard”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “expose the false testimony behind the seizure”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `leaves` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 9: Chariots of Fire

**Act summary:** Cross the Jordan and pass the mantle to Elisha.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “chariots of fire”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `wood_oak` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “cross the jordan and pass the mantle to elisha”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `stone` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
