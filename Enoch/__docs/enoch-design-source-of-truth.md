# Enoch — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *What does it mean to walk faithfully across an ordinary lifetime?*

This source of truth covers 7 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: A Family Record](#act-1-a-family-record) — Place Enoch correctly in the generations.
- [Act 2: The First Walk](#act-2-the-first-walk) — Choose a daily route that serves neighbours.
- [Act 3: A Son Named Methuselah](#act-3-a-son-named-methuselah) — Prepare the home for a new child.
- [Act 4: Years of Faithfulness](#act-4-years-of-faithfulness) — Complete repeated small acts without a fame meter.
- [Act 5: A Warning](#act-5-a-warning) — Deliver a hard truth without cruelty.
- [Act 6: Walking with God](#act-6-walking-with-god) — Follow a quiet path as the landscape changes.
- [Act 7: Taken](#act-7-taken) — Let go of the route and enter the final light.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Genesis 5; Hebrews 11:5; Jude 14–15
- **Core question:** *What does it mean to walk faithfully across an ordinary lifetime?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `enoch` | Enoch | Supporting visual identity must remain consistent across chapters. |
| `jared` | Jared | Supporting visual identity must remain consistent across chapters. |
| `methuselah` | Methuselah | Supporting visual identity must remain consistent across chapters. |
| `family_member` | Family Member | Supporting visual identity must remain consistent across chapters. |
| `neighbour` | Neighbour | Supporting visual identity must remain consistent across chapters. |
| `traveller` | Traveller | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `grass` | Grass | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `water_still` | Water Still | Environment, prop, costume, or symbolic surface used by this story. |
| `leaves` | Leaves | Environment, prop, costume, or symbolic surface used by this story. |

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
- **Approved Texture Forge inventory:** `grass`, `stone`, `wood_oak`, `fabric_weave`, `water_still`, `leaves`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: A Family Record

**Act summary:** Place Enoch correctly in the generations.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “a family record”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “place enoch correctly in the generations”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (35mm, high angle, family genealogy)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE scroll (fabric_weave)                 |  │
│       |  WOOD OAK desk (wood_oak)                           |  │
│       |  QUILL at edge (placeholder)                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  JARED presenting lineage (hero 3D)             |    |  │
│       |  |  ENOCH named in record (hero 3D)               |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (50mm, chest height, placing name)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS WRITING NAME center (wood_oak + grass)       |  │
│       |  INK POT at side (placeholder)                      |  │
│       |  FAMILY TREE BRANCH (placeholder)                   |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED DESK, reduced saturation            |    |  │
│       |  |  JARED guiding hand (hero 3D)                   |    |  │
│       |  |  ENOCH'S NAME appearing (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "And Enoch lived sixty-five years..." │    │
│       |  |  [CHOICE]    ▢ Write Enoch  ▢ Write Methuselah ▢ Done│ │
│       |  |  [CAPTION] "Enoch walked with God..."           │    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, record complete)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GRASS corner (grass)                               |  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  RECORD closed (hero 3D)                        |    |  │
│       |  |  ENOCH stepping forward                        |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Genesis 5:24"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: The First Walk

**Act summary:** Choose a daily route that serves neighbours.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the first walk”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “choose a daily route that serves neighbours”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (35mm, high angle, daily path)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  STONE path markers (stone)                         |  │
│       |  WOOD OAK staff (wood_oak)                          |  │
│       |  NEIGHBOUR'S HAND at edge (placeholder)             |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ENOCH walking path (hero 3D)                  |    |  │
│       |  |  NEIGHBOURS along route (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (50mm, chest height, choosing route)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS POINTING PATH center (wood_oak + fabric_weave)│  │
│       |  MAP on ground (placeholder)                        |  │
│       |  NEIGHBOUR'S BURDEN (placeholder)                   |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED PATHS, reduced saturation           |    |  │
│       |  |  ENOCH choosing route (hero 3D)                |    |  │
│       |  |  NEIGHBOURS waiting (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "This way serves the widow..."      |    |  │
│       |  |  [CHOICE]    ▢ Help widow  ▢ Visit sick  ▢ Teach │   │
│       |  |  [CAPTION] "He served his neighbours..."        |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, path established)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  STONE corner (stone)                               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  ENOCH on established path (hero 3D)           |    |  │
│       |  |  NEIGHBOURS blessed (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Genesis 5:22"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: A Son Named Methuselah

**Act summary:** Prepare the home for a new child.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “a son named methuselah”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `fabric_weave` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “prepare the home for a new child”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (35mm, high angle, home preparation)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WOOD OAK cradle (wood_oak)                         |  │
│       |  FABRIC WEAVE swaddling (fabric_weave)              |  │
│       |  NAME SCROLL at edge (placeholder)                  |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ENOCH preparing (hero 3D)                     |    |  │
│       |  |  WIFE with child (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Called his name Methuselah..."     |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (50mm, chest height, naming child)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS HOLDING CHILD center (fabric_weave+water)    |  │
│       |  SCROLL with name (placeholder)                     |  │
│       |  PROPHETIC SIGN (placeholder)                       |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED HOME, reduced saturation            |    |  │
│       |  |  ENOCH naming (hero 3D)                         |    |  │
│       |  |  CHILD in arms (hero 3D)                        |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "His name shall be Methuselah..."    |    |  │
│       |  |  [CHOICE]    ▢ Name him  ▢ Pray  ▢ Bless       │    │   │
│       |  |  [CAPTION] "When his son was born..."          |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, name established)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WATER STILL basin corner (water_still)             |  │
│       |  WOOD OAK corner (wood_oak)                         |  │
│       |  +---------------------------------------------+    |  │
│       |  |  HOME opened for scripture space               |    |  │
│       |  |  FAMILY complete (hero 3D)                    |    |  │
│       |  |  NAME SCROLL at rest                          |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Genesis 5:21-22"                |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Years of Faithfulness

**Act summary:** Complete repeated small acts without a fame meter.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `water_still` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “years of faithfulness”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_still` + `leaves` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “complete repeated small acts without a fame meter”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `leaves` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (35mm, high angle, daily tasks)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE tasks (fabric_weave)                  |  │
│       |  WATER STILL well (water_still)                     |  │
│       |  SMALL ACTS at edge (placeholder)                   |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ENOCH in routine (hero 3D)                    |    |  │
│       |  |  GENERATIONS passing (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Three hundred years..."             |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (50mm, chest height, faithful act)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS DRAWING WATER center (water_still + leaves)  |  │
│       |  BASKET of bread (placeholder)                      |  │
│       |  NO APPLAUSE (placeholder)                          |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED WELL, reduced saturation            |    |  │
│       |  |  ENOCH serving quietly (hero 3D)               |    |  │
│       |  |  NEIGHBOURS receiving (hero 3D)                |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "In secret...reward openly..."       |    |  │
│       |  |  [CHOICE]    ▢ Draw water  ▢ Share bread  ▢ Pray │   │
│       |  |  [CAPTION] "He did not seek fame..."            |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, years complete)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  LEAVES corner (leaves)                             |  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  ENOCH aged but walking (hero 3D)              |    |  │
│       |  |  PATH worn smooth (hero 3D)                   |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Genesis 5:22-23"                |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: A Warning

**Act summary:** Deliver a hard truth without cruelty.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `water_still` + `leaves` | Wide, three-plane tableau. FG SVG: framing water still, nearby silhouettes, and an edge prop tied to “a warning”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `leaves` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “deliver a hard truth without cruelty”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `water_still` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (35mm, high angle, warning scene)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WATER STILL reflection (water_still)               |  │
│       |  LEAVES trembling (leaves)                          |  │
│       |  LISTENERS at edge (placeholder)                    |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ENOCH speaking (hero 3D)                      |    |  │
│       |  |  CROWD gathered (hero 3D)                     |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Behold, the Lord cometh..."        |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (50mm, chest height, delivering truth)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS EXTENDED center (leaves + grass)             |  │
│       |  PROPHECY SCROLL (placeholder)                      |  │
│       |  HEARTS CONVICTED (placeholder)                     |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED CROWD, reduced saturation           |    |  │
│       |  |  ENOCH warning (hero 3D)                        |    |  │
│       |  |  LISTENERS responding (hero 3D)                |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "To execute judgment upon all..."   |    |  │
│       |  |  [CHOICE]    ▢ Speak boldly  ▢ Weep  ▢ Pause    │    │
│       |  |  [CAPTION] "He prophesied without cruelty..."  |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, warning given)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GRASS corner (grass)                               |  │
│       |  WATER STILL corner (water_still)                   |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  ENOCH continuing walk (hero 3D)               |    |  │
│       |  |  WORDS lingering (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Jude 14-15"                     |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: Walking with God

**Act summary:** Follow a quiet path as the landscape changes.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `fabric_weave` + `stone` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “walking with god”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `stone` + `leaves` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “follow a quiet path as the landscape changes”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `leaves` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (35mm, high angle, changing landscape)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE path (fabric_weave)                   |  │
│       |  STONE markers (stone)                              |  │
│       |  LIGHT SHIFTING at edge (placeholder)               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  COLUMNS, patterned wall, court silhouettes    |    |  │
│       |  |  ENOCH walking (hero 3D)                       |    |  │
│       |  |  LANDSCAPE transforming (hero 3D)             |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (50mm, chest height, following path)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS FOLLOWING LIGHT center (stone + leaves)      |  │
│       |  PATH CHANGING (placeholder)                        |  │
│       |  GLORY AHEAD (placeholder)                          |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED COURT, reduced saturation           |    |  │
│       |  |  ENOCH following (hero 3D)                     |    |  │
│       |  |  GOD'S PRESENCE leading (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "This is the way, walk ye in it..." |    |  │
│       |  |  [CHOICE]    ▢ Follow  ▢ Pause  ▢ Trust       │    │
│       |  |  [CAPTION] "He was not, for God took him..."   |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, walk deepened)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  LEAVES corner (leaves)                             |  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  COURT opened for scripture space               |    |  │
│       |  |  ENOCH in light (hero 3D)                      |    |  │
│       |  |  PATH radiant (hero 3D)                        |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Hebrews 11:5"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Taken

**Act summary:** Let go of the route and enter the final light.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `grass` + `stone` | Wide, three-plane tableau. FG SVG: framing grass, nearby silhouettes, and an edge prop tied to “taken”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “let go of the route and enter the final light”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `grass` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (35mm, high angle, final path end)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GRASS path end (grass)                             |  │
│       |  STONE boundary (stone)                             |  │
│       |  LIGHT BEYOND at edge (placeholder)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ENOCH at threshold (hero 3D)                  |    |  │
│       |  |  FAMILY watching (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (50mm, chest height, letting go)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS RELEASING STAFF center (stone + wood_oak)    |  │
│       |  FAMILY'S HANDS reaching (placeholder)              |  │
│       |  LIGHT ENVELOPING (placeholder)                     |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED BOUNDARY, reduced saturation        |    |  │
│       |  |  ENOCH ascending (hero 3D)                     |    |  │
│       |  |  STAFF left behind (hero 3D)                  |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "For God took him..."               |    |  │
│       |  |  [CHOICE]    ▢ Release  ▢ Look back  ▢ Enter  │    │
│       |  |  [CAPTION] "He was not, for God took him..."   |    │   │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, taken)                    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WOOD OAK staff corner (wood_oak)                   |  │
│       |  GRASS path corner (grass)                          |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  EMPTY PATH (hero 3D)                          |    |  │
│       |  |  LIGHT continuing (hero 3D)                   |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Enoch walked with God..."           |    |  │
│       |  |  [SCRIPTURE] "Genesis 5:24"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./enoch-design-source-of-truth.md) | [Music SOT](./enoch-music-source-of-truth.md) | [SFX SOT](./enoch-sfx-source-of-truth.md) | [Game Plan](./enoch-game-plan.md)
