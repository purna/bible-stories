# Deborah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Will courage and shared leadership answer oppression?*

This source of truth covers 7 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: Under the Palm](#act-1-under-the-palm) — Hear disputes and restore a fair path.
- [Act 2: The Summons](#act-2-the-summons) — Carry Deborah’s message to Barak.
- [Act 3: Gather at Tabor](#act-3-gather-at-tabor) — Rally tribes without alerting Sisera.
- [Act 4: The Storm](#act-4-the-storm) — Use the flooded ground to break the chariot advantage.
- [Act 5: Sisera Flees](#act-5-sisera-flees) — Track the fleeing commander to Jael’s tent.
- [Act 6: Jael’s Choice](#act-6-jaels-choice) — Prepare hospitality, then protect the camp.
- [Act 7: The Song](#act-7-the-song) — Rebuild the victory song in call-and-response.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Judges 4–5
- **Core question:** *Will courage and shared leadership answer oppression?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `deborah` | Deborah | Supporting visual identity must remain consistent across chapters. |
| `barak` | Barak | Supporting visual identity must remain consistent across chapters. |
| `jael` | Jael | Supporting visual identity must remain consistent across chapters. |
| `sisera` | Sisera | Supporting visual identity must remain consistent across chapters. |
| `jabin` | Jabin | Supporting visual identity must remain consistent across chapters. |
| `israelite_scout` | Israelite Scout | Supporting visual identity must remain consistent across chapters. |
| `village_woman` | Village Woman | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `wall_brick` | Wall Brick | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `grass` | Grass | Environment, prop, costume, or symbolic surface used by this story. |
| `water_fast` | Water Fast | Environment, prop, costume, or symbolic surface used by this story. |

The matching Texture Forge exposes only these keys. Add a material here before exposing it in the tool.

## Interaction and accessibility

- Every chapter must work with pointer, keyboard, and touch.
- Never make precise timing the only route forward; include retry and reduced-motion behaviour.
- Caption all essential audio information and keep text readable over every layer.
- Keep chapter completion local and recoverable; no choice should erase story access.

## Production contract

Each chapter ships with story JSON, one background SVG, one foreground SVG, and—only where spatial interaction adds value—a small 3D scene module/data file. Asset names use stable lowercase snake_case keys. The game plan is the chapter-level authority for the playable action.

<!-- consolidated-from: Deborah/deborah-design-source-of-truth.md -->
## Narrative, visual, and music direction

## Status and Canon

- **Implementation:** Six acts in `deborah-story.json`.
- **Primary text:** Judges 4–5, presented as a dramatic interactive adaptation.
- **Core question:** *What does courage cost when the ones expected to lead hesitate, and someone else has to answer the call?*
- **Emotional arc:** Oppression and quiet authority → summons and hesitation → uneasy mustering → the storm of battle → the reversal in the tent → the song of victory.

## Visual Identity

The comic opens under the shade of a single palm tree in the hill country of Ephraim — a still, authoritative counterpoint to twenty years of oppression pressing on the villages beyond it. It then widens into a war camp on Mount Tabor, a darkening sky over the Kishon river, and finally the close, lamp-lit interior of a tent. Scenes use bold comic silhouettes, halftone texture, theatrical lighting, and foreground figures or objects (the palm's branches, iron chariots, a tent peg and hammer) that anchor the 3D/SVG backgrounds, matching the visual language established for the Adam & Eve and Abraham comics.

## Musical Identity

Instrumental classic country-western storytelling with Appalachian warmth: finger-picked acoustic guitar, restrained pedal steel, fiddle, upright bass, brushed percussion, dulcimer, harmonica used sparingly, and occasional low cinematic drones. The score should feel handmade and timeless, not comedic or like a modern pop-country track.

- **No vocals, humming, spoken word, or choir** — even though the source text is itself a song (the Song of Deborah), the score stays instrumental throughout, including Act 6.
- Do not imitate an identifiable song, melody, or performer.
- Preserve a recurring two-phrase **"Awake, awake" motif** across all six acts — a call-and-response figure (one instrument calls, a second answers a beat later), drawn from the Song of Deborah's refrain. It starts distant and unanswered, and by Act 6 the call and response finally lock together.
- Let acoustic instruments (guitar, dulcimer) represent the palm tree's stillness and quiet authority; low drones, tremolo, and massed low strings represent the chariots, the storm, and the threat closing in.
- Avoid large trailer percussion, glossy pop drums, and busy solos beneath text.

## Chapter Music Map

| # | Act | Narrative and emotion | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **Under the Palm** | Twenty years under Jabin and Sisera's iron chariots. Deborah judges Israel beneath the palm between Ramah and Bethel — a place of stillness and clear-eyed authority inside the exhaustion. | Slow, spare guitar figure over a held upright-bass note, like sitting in shade. Dulcimer states the "Awake, awake" motif once, quietly, unanswered — no response phrase yet. | 58–64 BPM; modal minor with a still, unhurried pulse. | `Act1_Beneath_the_Single_Palm.ogg` then `.mp3` |
| 2 | **The Summons** | Deborah calls Barak with God's command: gather ten thousand, march to Tabor. Barak hesitates — *"If you go with me, I will go; but if not, I will not go."* Tension between calling and reluctance. | Guitar and fiddle in dialogue, guitar's phrase left hanging, fiddle answering late and uncertain — the "Awake, awake" motif's call-and-response stretched apart, mistimed. Brushed percussion enters lightly, tentative. | 66–72 BPM; minor with brief, unresolved lifts toward major. | `Act2_If_You_Go_With_Me.ogg` then `.mp3` |
| 3 | **The Muster** | Tribes gather — some readily, some (Reuben, Meroz) holding back. A camp forming under uncertain unity, resolve tightening as the army moves toward Tabor. | Upright bass and brushed snare build a walking march rhythm; guitar and dulcimer trade the motif's call-and-response faster and closer together as more voices "answer." A low drone underneath signals the size of the threat still ahead. | 74–80 BPM; minor, gaining forward motion. | `Act3_Gathering_at_Tabor.ogg` then `.mp3` |
| 4 | **The Storm at Kishon** | Battle at Mount Tabor; the Kishon river rises, chariots mire in the flood, Sisera's army routs. Chaos and sudden divine reversal. | Tremolo guitar, low sustained drone, and frame-drum-like percussion swell together, then drop away abruptly at the rout — the storm's sound cut short rather than resolved. Motif appears fragmented, buried under the texture, barely audible. | 56–64 BPM, with a sudden thinning at the turn of the battle; minor / Phrygian colour. | `Act4_The_River_Rises.ogg` then `.mp3` |
| 5 | **The Tent of Jael** | Sisera flees alone to Jael's tent; she offers milk and shelter, then ends him with a tent peg as he sleeps. Hospitality's warmth curdling into a decisive, quiet act. | Very sparse: solo guitar or dulcimer, close and intimate, almost domestic — then a single low, hard low-string strike (no percussion kit) marks the act's turn, followed by near-silence. No motif stated; this act is deliberately withheld from it. | 54–60 BPM; minor, mostly unaccompanied single lines. | `Act5_Milk_in_a_Lordly_Bowl.ogg` then `.mp3` |
| 6 | **The Song of Deborah** | Victory, the land at rest forty years. Deborah and Barak's song looking back over the whole ordeal — grief for the fallen woven into triumph. | Full ensemble for the first time — guitar, fiddle, dulcimer, pedal steel, upright bass together. The "Awake, awake" motif's call and response finally arrive on the same beat, harmonized, and the theme is stated once in full before settling into a plain, unadorned close. | 68–74 BPM; modal major, warm and open. | `Act6_The_Land_Had_Rest.ogg` then `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, with a musically seamless loop and no audible tail at the join.
- OGG is preferred in playback; MP3 is the compatibility fallback.
- Leave the first and last 1–2 seconds rhythmically compatible.
- Keep the midrange clear for reading. No lead instrument should behave like a vocal throughout.
- Use gentle starts; avoid an attention-grabbing downbeat when a chapter loads.
- Button sound remains `assets/audio/ping_pong.mp3` and is not part of the musical palette.

## Continuity Check

The score must carry the disquiet of Act 5 — Jael's act is decisive and righteous within the story but should never be scored as triumphant or gleeful in the moment itself; any sense of triumph belongs to Act 6, sung in hindsight. The "Awake, awake" motif's slow assembly across the acts — distant, mistimed, fragmented, withheld, then finally unified — should be audible as the throughline even to a listener who never sees the chapter titles.

<!-- panel-scene-design:start -->
## Comic panel and scene direction

This is the canonical visual storyboard for production. Each chapter uses three principal panels: **A establishes**, **B carries the interaction**, and **C resolves and reflects**. Additional dialogue panels inherit the nearest principal panel’s palette, lighting, layers, lens, and motion; they may change character pose and caption placement but must not invent a new visual language without updating this document.

### Layer and motion contract

- **Background — SVG:** setting, sky, distant architecture/landscape, weather, and the lowest-frequency parallax. Never place an essential interactive target here.
- **Middle ground — characters + optional 3D:** the narrative action and at most one tactile hero prop. Use 3D only where depth improves the chapter action.
- **Foreground — SVG:** close framing shapes, symbolic props, atmosphere, and occasional occlusion. Foreground motion must not obscure faces, captions, or targets.
- **Camera:** text panels remain stable. Movement is slow, eased, and motivated by revelation, travel, or completion. Avoid continuous orbit, handheld shake, and large zooms.
- **Animation:** SVG and 3D movement starts at different phases so the scene feels layered. Pause nonessential loops while a choice is open. Provide a reduced-motion crossfade/pose alternative.
- **Approved Texture Forge inventory:** `fabric_weave`, `wood_oak`, `wall_brick`, `stone`, `grass`, `water_fast`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: Under the Palm

**Act summary:** Hear disputes and restore a fair path.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. **FG SVG: framing palm fronds arching overhead, woven mat border, scattered olive branches at base**; MG: character group and optional low-detail 3D landmark. BG SVG: layered hill country landscape with distant village silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story's real light source. | `wood_oak` + `wall_brick` | Medium action composition with a clear left-to-right path. **FG SVG: hands on a scroll, quill and inkwell at edge, fringe of Deborah's robe**; MG 3D: the single tactile object required to "hear disputes and restore a fair path". BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `fabric_weave` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (olive branch or opened scroll) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (35mm, high angle, palm and hill country)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  PALM FRONDS arching overhead (fabric_weave)        |  │
│       |  WOVEN MAT BORDER along bottom edge                 |  │
│       |  OLIVE BRANCHES at palm base                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED HILL COUNTRY, distant villages       |    |  │
│       |  |  DEBORAH seated beneath the palm (hero 3D)    |    |  │
│       |  |  VILLAGERS approaching from left              |    |  │
│       |  |  PALM TREE trunk and articulated fronds       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Twenty years under Jabin..."      |    |  │
│       |  |  [CAPTION] "Under a palm...sat Deborah"       |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (50mm, chest height, judgment scroll)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS ON SCROLL center (wood_oak + fabric_weave)  |  │
│       |  QUILL AND INKWELL at left edge                     |  │
│       |  DEBORAH'S ROBE FRINGE at bottom                    |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED HILL COUNTRY, reduced saturation    |    |  │
│       |  |  VILLAGE WOMAN left, Deborah right              |    |  │
│       |  |  SCROLL / JUDGMENT TABLE (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "My neighbor moved the boundary..."   |    |  │
│       |  |  [CHOICE] Hear both / Decide quickly / Avoid    |    |  │
│       |  |  [BUBBLE] "Truth needs both voices."            |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, fair path restored)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  OLIVE BRANCH corner frame (wood_oak)               |  │
│       |  OPENED SCROLL corner frame (fabric_weave)          |  │
│       |  +---------------------------------------------+    |  │
│       |  |  HILL COUNTRY opened for scripture space        |    |  │
│       |  |  Deborah and villagers separated cleanly        |    |  │
│       |  |  SCROLL at rest on table (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "She made room for truth..."         |    |  │
│       |  |  [CAPTION] "The Israelites went up to her..."   |    |  │
│       |  |  [SCRIPTURE] "Judges 4:4-5"                    |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 2: The Summons

**Act summary:** Carry Deborah's message to Barak.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `wall_brick` | Wide, three-plane tableau. **FG SVG: messenger's staff leaning at frame edge, olive branch wreath border, dust motes in sunbeam**; MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story's real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. **FG SVG: hands extending a folded scroll, rope ties, wax seal impression**; MG 3D: the single tactile object required to "carry deborah's message to barak". BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `wood_oak` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (staff with messenger's pouch) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (35mm, road to Kedesh, messenger staff)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  MESSENGER STAFF leaning at frame edge              |  │
│       |  OLIVE BRANCH WREATH border                         |  │
│       |  DUST MOTES in sunbeam                              |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED ROAD, Kedesh-naphtali in distance     |    |  │
│       |  |  Deborah's messenger walking right             |    |  │
│       |  |  SEALED SCROLL pouch at hip (hero 3D)          |    |  │
│       |  |  Barak's settlement silhouettes                |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Deborah sent a messenger..."        |    |  │
│       |  |  [CAPTION] "The staff leaned...scroll sealed"   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (50mm, chest height, scroll handoff)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS EXTENDING FOLDED SCROLL center               |  │
│       |  ROPE TIES + WAX SEAL impression                    |  │
│       |  MESSENGER SLEEVE fringe                            |  │
│       |  +---------------------------------------------+    |  │
│       |  |  KADESH COURTYARD, simplified architecture      |    |  │
│       |  |  MESSENGER left, Barak right                    |    |  │
│       |  |  SCROLL (hero 3D, fabric_weave + wood_oak)      |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "The Lord commands—gather at Tabor"   |    |  │
│       |  |  [CHOICE] Deliver exactly / Soften / Add warning|    |  │
│       |  |  [BUBBLE] "If you go with me, I will go..."     |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, shared road)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  STAFF WITH MESSENGER POUCH corner frame            |  │
│       |  OLIVE WREATH corner frame                          |  │
│       |  +---------------------------------------------+    |  │
│       |  |  ROAD OPENED toward Mount Tabor                 |    |  │
│       |  |  Deborah and Barak walking side by side         |    |  │
│       |  |  STAFF at rest (hero 3D)                        |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Certainly I will go with you..."     |    |  │
│       |  |  [CAPTION] "The road would not lead to glory"   |    |  │
│       |  |  [SCRIPTURE] "Judges 4:6-10"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 3: Gather at Tabor

**Act summary:** Rally tribes without alerting Sisera.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. **FG SVG: tent pegs and rope border, tribal standards at corners, dry grass fringe**; MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story's real light source. | `stone` + `grass` | Medium action composition with a clear left-to-right path. **FG SVG: hands placing muster tokens on a map, counting stones, tribal seal**; MG 3D: the single tactile object required to "rally tribes without alerting sisera". BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `wall_brick` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (gathered tribal banner) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (35mm, high angle, Tabor muster camp)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  TENT PEGS AND ROPE border                          |  │
│       |  TRIBAL STANDARDS at corners                        |  │
│       |  DRY GRASS FRINGE along bottom                      |  │
│       |  +---------------------------------------------+    |  │
│       |  |  MOUNT TABOR SLOPES, tribal camps below        |    |  │
│       |  |  Deborah and Barak centered on rise             |    |  │
│       |  |  TRIBES arriving in staggered groups            |    |  │
│       |  |  MUSTER MAP + STONES (hero 3D)                  |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Deborah sent to gather..."          |    |  │
│       |  |  [CAPTION] "Tribes answered from the hills..."  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (50mm, chest height, muster tokens)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS PLACING MUSTER TOKENS center                 |  │
│       |  COUNTING STONES + TRIBAL SEAL                      |  │
│       |  MAP CLOTH edge (fabric_weave)                      |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED CAMP, reduced saturation            |    |  │
│       |  |  Deborah left, Barak and scouts right           |    |  │
│       |  |  MUSTER MAP (hero 3D, fabric_weave + stone)     |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Rally the tribes without alarm"      |    |  │
│       |  |  [CHOICE] Send scouts / Sound call / Wait       |    |  │
│       |  |  [CAPTION] "The camp tightened into resolve"    |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, tribes gathered)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GATHERED TRIBAL BANNER corner frame                |  │
│       |  DRY GRASS + ROPE corner frame                      |  │
│       |  +---------------------------------------------+    |  │
│       |  |  CAMP OPENED for scripture space                |    |  │
│       |  |  Tribes separated into clean silhouettes        |    |  │
│       |  |  BANNER at rest (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The tribes gathered at Tabor"       |    |  │
│       |  |  [SCRIPTURE] "Judges 5:14-15"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 4: The Storm

**Act summary:** Use the flooded ground to break the chariot advantage.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `wood_oak` | Wide, three-plane tableau. **FG SVG: reeds and cattails at water's edge, floating debris, broken chariot wheel rim**; MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story's real light source. | `wood_oak` + `stone` | Medium action composition with a clear left-to-right path. **FG SVG: hands gripping a staff, water streaming off edge, mud-splattered hem**; MG 3D: the single tactile object required to "use the flooded ground to break the chariot advantage". BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `stone` + `water_fast` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (mired chariot wheel half-buried) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (32mm, lateral drift, Kishon flood)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  REEDS AND CATTAILS at water edge                   |  │
│       |  FLOATING DEBRIS across lower frame                 |  │
│       |  BROKEN CHARIOT WHEEL RIM at right                  |  │
│       |  +---------------------------------------------+    |  │
│       |  |  WATERLINE, cloud bank, distant shore           |    |  │
│       |  |  Deborah and Barak on rise, army beyond         |    |  │
│       |  |  CHARIOTS small in floodplain distance          |    |  │
│       |  |  CROSSING PROP / STAFF (hero 3D)                |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Sisera brought nine hundred..."     |    |  │
│       |  |  [CAPTION] "Dark clouds gathered..."            |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (50mm, chest height, signal advance)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS GRIPPING STAFF center (wood_oak)             |  │
│       |  WATER STREAMING off staff edge                     |  │
│       |  MUD-SPLATTERED HEM at bottom                       |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED WATERLINE, reduced saturation       |    |  │
│       |  |  Deborah signals; Barak charges left-to-right   |    |  │
│       |  |  STAFF / FLOODED GROUND (hero 3D)               |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Go! This is the day..."              |    |  │
│       |  |  [CHOICE] Charge now / Wait / Scout ford        |    |  │
│       |  |  [CAPTION] "The storm broke—the river rose"     |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, chariots mired)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  MIRED CHARIOT WHEEL corner frame (stone)           |  │
│       |  REEDS + WATER corner frame (water_fast)            |  │
│       |  +---------------------------------------------+    |  │
│       |  |  WATERLINE OPENED for scripture space           |    |  │
│       |  |  Israelites separated into clean silhouettes    |    |  │
│       |  |  WHEEL at rest, half-buried (hero 3D)           |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The river Kishon swept them away"   |    |  │
│       |  |  [SCRIPTURE] "Judges 4:12-16; 5:20-21"         |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 5: Sisera Flees

**Act summary:** Track the fleeing commander to Jael's tent.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. **FG SVG: tent flap edge, rope ties, goat-hair cloth texture, scattered hoof prints**; MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story's real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. **FG SVG: hands following tracks, broken spear shaft, sweat on brow**; MG 3D: the single tactile object required to "track the fleeing commander to jael's tent". BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `fabric_weave` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (commander's helmet at tent threshold) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (35mm, high angle, flight to the tent)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  TENT FLAP EDGE at left                             |  │
│       |  ROPE TIES + GOAT-HAIR CLOTH texture                |  │
│       |  SCATTERED HOOF PRINTS across bottom                |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, road from battlefield       |    |  │
│       |  |  Sisera alone, exhausted, moving right          |    |  │
│       |  |  Jael's tent small in distance                  |    |  │
│       |  |  COMMANDER HELMET (hero 3D)                     |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Sisera fled on foot to the tent..." |    |  │
│       |  |  [CAPTION] "Jael came out to meet him"          |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (50mm, chest height, tracking the flight) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS FOLLOWING TRACKS center                      |  │
│       |  BROKEN SPEAR SHAFT at edge                         |  │
│       |  SWEAT ON BROW silhouette                            |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED ROAD, reduced saturation            |    |  │
│       |  |  Jael left, Sisera approaching right            |    |  │
│       |  |  HOOF PRINT PATH (hero 3D, grass + stone)       |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Turn aside, my lord, turn aside..."  |    |  │
│       |  |  [CHOICE] Offer shelter / Send him on / Watch   |    |  │
│       |  |  [CAPTION] "He said, 'Give me a little water'"  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, threshold shelter)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  COMMANDER HELMET corner frame (stone)              |  │
│       |  TENT FLAP + ROPE corner frame                      |  │
│       |  +---------------------------------------------+    |  │
│       |  |  TENT THRESHOLD opened for scripture space      |    |  │
│       |  |  Jael and Sisera separated cleanly              |    |  │
│       |  |  HELMET at rest (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Stand in the doorway...say no man"   |    |  │
│       |  |  [CAPTION] "She covered him and he slept"       |    |  │
│       |  |  [SCRIPTURE] "Judges 4:18-20"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 6: Jael's Choice

**Act summary:** Prepare hospitality, then protect the camp.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `wall_brick` + `stone` | Wide, three-plane tableau. **FG SVG: tent peg and mallet on ground, milk bowl rim, lamp shadow stretching across**; MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story's real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. **FG SVG: hand on tent peg, mallet raised, milk curds spilling, lamp flare**; MG 3D: the single tactile object required to "prepare hospitality, then protect the camp". BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (tent peg standing upright, mallet beside it) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (30mm, slow dolly, tent interior)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  TENT PEG AND MALLET on ground                      |  │
│       |  MILK BOWL RIM at lower edge                        |  │
│       |  LAMP SHADOW stretching across floor                |  │
│       |  +---------------------------------------------+    |  │
│       |  |  TENT INTERIOR, goat-hair cloth, low lamp       |    |  │
│       |  |  Jael left, Sisera reclining right              |    |  │
│       |  |  MILK BOWL + LAMP (hero 3D)                     |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Sisera fled to the tent of Jael"    |    |  │
│       |  |  [CAPTION] "There was peace between their clans"|    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (50mm, chest height, decisive protection) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HAND ON TENT PEG center (stone)                    |  │
│       |  MALLET RAISED at right                             |  │
│       |  MILK CURDS SPILLING at left                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED TENT, reduced saturation            |    |  │
│       |  |  Jael foreground, Sisera asleep background      |    |  │
│       |  |  TENT PEG + MALLET (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Come in, my lord. Rest."             |    |  │
│       |  |  [CHOICE] Shelter / Send away / Act             |    |  │
│       |  |  [CAPTION] "When he slept, Jael took the peg"   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, camp protected)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  TENT PEG UPRIGHT corner frame (stone)              |  │
│       |  MALLET BESIDE IT corner frame (wood_oak)           |  │
│       |  +---------------------------------------------+    |  │
│       |  |  TENT DOORWAY opened for scripture space        |    |  │
│       |  |  Jael meets Barak outside                       |    |  │
│       |  |  PEG + MALLET at rest (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Come, and I will show you..."        |    |  │
│       |  |  [CAPTION] "Sisera's power was finished"        |    |  │
│       |  |  [SCRIPTURE] "Judges 4:21-22"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Act 7: The Song

**Act summary:** Rebuild the victory song in call-and-response.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. **FG SVG: lyre and harp frame edges, scroll with song text unfurling, olive wreath border**; MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story's real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. **FG SVG: hands on lyre strings, voice lines as visual waves, scroll unfurling verse by verse**; MG 3D: the single tactile object required to "rebuild the victory song in call-and-response". BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. **FG SVG: the chapter's symbolic object (lyre at rest, completed scroll) as a corner frame**; MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (35mm, wide, victory gathering)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  LYRE AND HARP frame edges                          |  │
│       |  SCROLL WITH SONG TEXT unfurling                    |  │
│       |  OLIVE WREATH border                                |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED HILL COUNTRY, people gathering         |    |  │
│       |  |  Deborah and Barak centered                     |    |  │
│       |  |  TRIBES / FAMILIES in staggered groups          |    |  │
│       |  |  LYRE (hero 3D, wood_oak + fabric_weave)        |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Then Deborah and Barak sang..."     |    |  │
│       |  |  [CAPTION] "The land had rest forty years"      |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (50mm, chest height, call and response)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS ON LYRE STRINGS center                       |  │
│       |  VOICE LINES as visual waves                        |  │
│       |  SCROLL UNFURLING verse by verse                    |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED GATHERING, reduced saturation       |    |  │
│       |  |  Deborah left, Barak right, people between      |    |  │
│       |  |  LYRE + SCROLL (hero 3D)                        |    |  │
│       |  |                                                |    |  │
│       |  |  [CHOICE] Call / Answer / Hold the refrain      |    |  │
│       |  |  [BUBBLE] "Awake, awake, Deborah..."            |    |  │
│       |  |  [BUBBLE] "Awake, awake, utter a song!"         |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                    |
                                    v
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, song completed)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  LYRE AT REST corner frame (wood_oak)               |  │
│       |  COMPLETED SCROLL corner frame (fabric_weave)       |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE OPENED for scripture space           |    |  │
│       |  |  Community separated into clean silhouettes     |    |  │
│       |  |  LYRE + SCROLL at rest (hero 3D)                |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "So may all your enemies perish"     |    |  │
│       |  |  [CAPTION] "But may your friends rise..."       |    |  │
│       |  |  [SCRIPTURE] "Judges 5:31"                     |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```

### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
