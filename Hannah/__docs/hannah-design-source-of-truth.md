# Hannah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can longing be voiced honestly and a cherished gift released faithfully?*

This source of truth covers 8 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Journey to Shiloh](#act-1-the-journey-to-shiloh) — Gather the household for the annual worship journey.
- [Act 2: At the Table](#act-2-at-the-table) — Navigate hurt without retaliating.
- [Act 3: Silent Prayer](#act-3-silent-prayer) — Form Hannah’s prayer from honest fragments.
- [Act 4: Misunderstood](#act-4-misunderstood) — Explain quiet prayer to Eli.
- [Act 5: Remembered](#act-5-remembered) — Prepare for Samuel’s birth.
- [Act 6: The Little Robe](#act-6-the-little-robe) — Weave and size a yearly robe.
- [Act 7: Given Back](#act-7-given-back) — Bring Samuel to serve at Shiloh.
- [Act 8: Hannah’s Song](#act-8-hannahs-song) — Arrange lines of reversal and hope.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** 1 Samuel 1–2
- **Core question:** *Can longing be voiced honestly and a cherished gift released faithfully?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `hannah` | Hannah | Supporting visual identity must remain consistent across chapters. |
| `elkanah` | Elkanah | Supporting visual identity must remain consistent across chapters. |
| `peninnah` | Peninnah | Supporting visual identity must remain consistent across chapters. |
| `eli` | Eli | Supporting visual identity must remain consistent across chapters. |
| `samuel_child` | Samuel Child | Supporting visual identity must remain consistent across chapters. |
| `temple_woman` | Temple Woman | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `hammered_gold` | Hammered Gold | Environment, prop, costume, or symbolic surface used by this story. |
| `grass` | Grass | Environment, prop, costume, or symbolic surface used by this story. |
| `water_still` | Water Still | Environment, prop, costume, or symbolic surface used by this story. |

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
- **Approved Texture Forge inventory:** `fabric_weave`, `stone`, `wood_oak`, `hammered_gold`, `grass`, `water_still`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Journey to Shiloh

**Act summary:** Gather the household for the annual worship journey.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | sandstone, ochre, dry umber, faded turquoise. broad hard sun or long amber dusk with strong silhouette edges. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the journey to shiloh”. MG: character group and optional low-detail 3D landmark. BG SVG: layered ridges, heat haze, and an open horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. patient side-track or shallow forward drift that emphasizes distance. | SVG: dust, cloth edges, distant birds, and heat bands move sparingly. 3D: staff, pack, tent, or terrain marker sways or settles with weight. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining sandstone, ochre, dry umber, faded turquoise. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “gather the household for the annual worship journey”. BG SVG: simplified layered ridges, heat haze, and an open horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter sandstone, ochre, dry umber, faded turquoise; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered ridges, heat haze, and an open horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, journey landscape)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  STONE framing (stone)                              |  │
│       |  WOOD OAK staff (wood_oak)                          |  │
│       |  PACK at edge (placeholder)                         |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED RIDGES, heat haze, open horizon      |    |  │
│       |  |  HANNAH & FAMILY gathering (hero 3D)           |    |  │
│       |  |  ELKANAH leading (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "This man went up...to worship"    |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, packing)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS PACKING CLOTH center (wood_oak + fabric_weave)│  │
│       |  LOOM SHUTTLE (placeholder)                         |  │
│       |  CHILD'S HAND reaching (placeholder)                |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED RIDGES, reduced saturation          |    |  │
│       |  |  HANNAH packing (hero 3D)                      |    |  │
│       |  |  PENINNAH watching (hero 3D)                  |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "The Lord had shut up her womb..."  |    |  │
│       |  |  [CHOICE]    ▢ Pack  ▢ Pray  ▢ Comfort child   │    │
│       |  |  [CAPTION] "Her adversary provoked her sore..."│    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, journey begun)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  STONE corner (stone)                               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  HORIZON opened for scripture space             |    |  │
│       |  |  FAMILY walking (hero 3D)                      |    |  │
│       |  |  STAFF at rest (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "They rose up in the morning..."    |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 1:19"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: At the Table

**Act summary:** Navigate hurt without retaliating.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “at the table”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `wood_oak` + `hammered_gold` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “navigate hurt without retaliating”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `hammered_gold` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, festival table)                 │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  STONE table edge (stone)                           |  │
│       |  WOOD OAK bench (wood_oak)                          |  │
│       |  HAMMERED GOLD cup (hammered_gold)                  |  │
│       |  +---------------------------------------------+    |  │
│       |  |  CITY SILHOUETTE, towers, street depth          |    |  │
│       |  |  ELKANAH serving (hero 3D)                     |    |  │
│       |  |  PENINNAH with children (hero 3D)              |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Elkanah gave to Peninnah..."       |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, receiving portion) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS RECEIVING PORTION center (wood_oak+gold)     |  │
│       |  HAMMERED GOLD vessel (hammered_gold)               |  │
│       |  CHILDREN'S PLATES (placeholder)                    |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED CITY, reduced saturation            |    |  │
│       |  |  HANNAH receiving (hero 3D)                    |    |  │
│       |  |  PENINNAH smirking (hero 3D)                  |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "A worthy portion...but the Lord..." │    |  │
│       |  |  [CHOICE]    ▢ Accept  ▢ Weep  ▢ Pray silently │    │
│       |  |  [CAPTION] "Her adversary provoked her..."     |    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, table quiet)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HAMMERED GOLD corner (hammered_gold)               |  │
│       |  STONE corner (stone)                               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  CITY opened for scripture space                |    |  │
│       |  |  HANNAH alone (hero 3D)                        |    |  │
│       |  |  CUP at rest (hero 3D)                         |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Hannah, she wept, and did not..." │    |  │
│       |  |  [SCRIPTURE] "1 Samuel 1:7"                   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: Silent Prayer

**Act summary:** Form Hannah’s prayer from honest fragments.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “silent prayer”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `hammered_gold` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “form hannah’s prayer from honest fragments”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, temple threshold)               │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WOOD OAK doorframe (wood_oak)                      |  │
│       |  HAMMERED GOLD lamp (hammered_gold)                 |  │
│       |  TEAR at edge (placeholder)                         |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  HANNAH praying silently (hero 3D)             |    |  │
│       |  |  ELI watching (hero 3D)                        |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "She spake in her heart..."         |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, forming prayer)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS FORMING WORDS center (hammered_gold+grass)   |  │
│       |  GRASS blade fragment (grass)                       |  │
│       |  PRAYER SCROLL (placeholder)                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH lips moving (hero 3D)                 |    |  │
│       |  |  WORDS appearing (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "For this child I prayed..."        |    |  │
│       |  |  [CHOICE]    ▢ Pour out soul  ▢ Ask  ▢ Vow    │    │
│       |  |  [CAPTION] "She vowed a vow..."               |    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, prayer complete)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GRASS corner (grass)                               |  │
│       |  WOOD OAK corner (wood_oak)                         |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  HANNAH at peace (hero 3D)                     |    |  │
│       |  |  WORDS settled (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The Lord remembered her..."        |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 1:19-20"               |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Misunderstood

**Act summary:** Explain quiet prayer to Eli.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `hammered_gold` + `grass` | Wide, three-plane tableau. FG SVG: framing hammered gold, nearby silhouettes, and an edge prop tied to “misunderstood”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `grass` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “explain quiet prayer to eli”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `hammered_gold` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, temple interior)                │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HAMMERED GOLD lamp (hammered_gold)                 |  │
│       |  GRASS threshold (grass)                            |  │
│       |  ELI'S CHAIR at edge (placeholder)                  |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  ELI confronting (hero 3D)                     |    |  │
│       |  |  HANNAH explaining (hero 3D)                  |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "How long wilt thou be drunken?"   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, explaining)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS SPEAKING TRUTH center (grass+water_still)    |  │
│       |  WATER STILL basin (water_still)                    |  │
│       |  ELI'S HAND blessing (placeholder)                  |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH explaining (hero 3D)                  |    |  │
│       |  |  ELI understanding (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "I am a woman of sorrowful spirit..."│   │
│       |  |  [CHOICE]    ▢ Explain  ▢ Weep  ▢ Receive    │    │
│       |  |  [CAPTION] "Eli answered and said..."         │    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, blessing given)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WATER STILL corner (water_still)                   |  │
│       |  HAMMERED GOLD corner (hammered_gold)               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  ELI blessing (hero 3D)                        |    |  │
│       |  |  HANNAH receiving (hero 3D)                   |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Go in peace..."                   |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 1:17"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: Remembered

**Act summary:** Prepare for Samuel’s birth.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `grass` + `water_still` | Wide, three-plane tableau. FG SVG: framing grass, nearby silhouettes, and an edge prop tied to “remembered”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_still` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “prepare for samuel’s birth”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `grass` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, home preparing)                 │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  GRASS meadow edge (grass)                          |  │
│       |  WATER STILL basin (water_still)                    |  │
│       |  CRADLE at edge (placeholder)                       |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  HANNAH preparing (hero 3D)                   |    |  │
│       |  |  ELKANAH supporting (hero 3D)                 |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The woman...stayed...until..."    |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, preparing child)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS WRAPPING CHILD center (water_still+fabric)   |  │
│       |  FABRIC WEAVE swaddling (fabric_weave)              |  │
│       |  VOW SCROLL (placeholder)                           |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH dedicating (hero 3D)                  |    |  │
│       |  |  CHILD in arms (hero 3D)                      |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "For this child I prayed..."        |    |  │
│       |  |  [CHOICE]    ▢ Dedicate  ▢ Name  ▢ Bless     │    │
│       |  |  [CAPTION] "Samuel...asked of the Lord"      |    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, child named)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  GRASS corner (grass)                               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  HANNAH with Samuel (hero 3D)                 |    |  │
│       |  |  NAME spoken (hero 3D)                         |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "Because I have asked him..."      |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 1:20"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: The Little Robe

**Act summary:** Weave and size a yearly robe.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “the little robe”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “weave and size a yearly robe”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, loom at home)                   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE loom (fabric_weave)                   |  │
│       |  WOOD OAK shuttle (wood_oak)                        |  │
│       |  MEASURING CORD at edge (placeholder)               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  HANNAH weaving (hero 3D)                      |    |  │
│       |  |  CHILD growing (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "She made him a little robe..."    |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, measuring)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS MEASURING ROBE center (wood_oak+water_still) │  │
│       |  WATER STILL basin (water_still)                    |  │
│       |  GROWING CHILD (placeholder)                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH measuring (hero 3D)                   |    |  │
│       |  |  SAMUEL standing (hero 3D)                    |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "Year by year...little robe"       |    |  │
│       |  |  [CHOICE]    ▢ Measure  ▢ Cut  ▢ Sew         │    │
│       |  |  [CAPTION] "His mother made him a little..." │    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, robe complete)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WATER STILL corner (water_still)                   |  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  ROBE folded (hero 3D)                         |    |  │
│       |  |  CHILD clothed (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The child Samuel grew..."         |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 2:19"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Given Back

**Act summary:** Bring Samuel to serve at Shiloh.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `stone` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “given back”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “bring samuel to serve at shiloh”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, temple at Shiloh)               │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  FABRIC WEAVE garment (fabric_weave)                |  │
│       |  STONE threshold (stone)                            |  │
│       |  BULL at edge (placeholder)                         |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  HANNAH presenting Samuel (hero 3D)            |    |  │
│       |  |  ELI receiving (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "I have lent him to the Lord..."   |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, handing over)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS RELEASING CHILD center (stone+wood_oak)      |  │
│       |  WOOD OAK staff (wood_oak)                          |  │
│       |  ELI'S HANDS receiving (placeholder)                |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH letting go (hero 3D)                  |    |  │
│       |  |  SAMUEL staying (hero 3D)                     |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "As long as he liveth..."           |    |  │
│       |  |  [CHOICE]    ▢ Release  ▢ Bless  ▢ Sing      │    │
│       |  |  [CAPTION] "He worshipped the Lord there..."  │    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, Samuel serving)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  WOOD OAK corner (wood_oak)                         |  │
│       |  FABRIC WEAVE corner (fabric_weave)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  SAMUEL serving (hero 3D)                     |    |  │
│       |  |  HANNAH departing (hero 3D)                   |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The child did minister..."        |    |  │
│       |  |  [SCRIPTURE] "1 Samuel 2:11"                  |    |  │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: Hannah’s Song

**Act summary:** Arrange lines of reversal and hope.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “hannah’s song”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `hammered_gold` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “arrange lines of reversal and hope”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `hammered_gold` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, temple, song begins)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  STONE pillar (stone)                               |  │
│       |  WOOD OAK scroll (wood_oak)                         |  │
│       |  HAMMERED GOLD lyre (hammered_gold)                 |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LAYERED LANDSCAPE, scripture setting           |    |  │
│       |  |  HANNAH singing (hero 3D)                      |    |  │
│       |  |  ELI listening (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "My heart rejoiceth in the Lord..." │    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, arranging lines)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HANDS ARRANGING LINES center (wood_oak+gold)       |  │
│       |  HAMMERED GOLD strings (hammered_gold)              |  │
│       |  VERSE SCROLLS (placeholder)                        |  │
│       |  +---------------------------------------------+    |  │
│       |  |  SIMPLIFIED LANDSCAPE, reduced saturation       |    |  │
│       |  |  HANNAH composing (hero 3D)                   |    |  │
│       |  |  WORDS forming (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [BUBBLE] "The bows of the mighty are broken" │    │
│       |  |  [CHOICE]    ▢ Sing  ▢ Arrange  ▢ Proclaim   │    │
│       |  |  [CAPTION] "She prayed and said..."           │    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, song complete)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  +-----------------------------------------------------+  │
│       |  HAMMERED GOLD corner (hammered_gold)               |  │
│       |  STONE corner (stone)                               |  │
│       |  +---------------------------------------------+    |  │
│       |  |  LANDSCAPE opened for scripture space           |    |  │
│       |  |  HANNAH at rest (hero 3D)                     |    |  │
│       |  |  SONG complete (hero 3D)                       |    |  │
│       |  |                                                |    |  │
│       |  |  [CAPTION] "The Lord shall judge the ends..."  |    │
│       |  |  [SCRIPTURE] "1 Samuel 2:10"                  |    │
│       |  +---------------------------------------------+    |  │
│       +-----------------------------------------------------+  │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
