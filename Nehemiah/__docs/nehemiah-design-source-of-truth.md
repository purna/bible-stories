# Nehemiah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can prayerful planning rebuild both walls and communal justice?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: Bad News](#act-1-bad-news) — Map Jerusalem’s broken gates while Nehemiah prays.
- [Act 2: Before the King](#act-2-before-the-king) — Choose a clear request and realistic resources.
- [Act 3: Night Inspection](#act-3-night-inspection) — Survey ruined walls without alerting opponents.
- [Act 4: Rise and Build](#act-4-rise-and-build) — Assign families to adjacent wall sections.
- [Act 5: Sword and Trowel](#act-5-sword-and-trowel) — Balance guarding with construction.
- [Act 6: The Outcry](#act-6-the-outcry) — Cancel exploitative debts and restore fields.
- [Act 7: Plots and Rumours](#act-7-plots-and-rumours) — Recognise distractions designed to stop the work.
- [Act 8: The Wall Completed](#act-8-the-wall-completed) — Close the final gap and set gatekeepers.
- [Act 9: The Book Read](#act-9-the-book-read) — Rebuild the platform and help the people understand.
- [Act 10: Reform](#act-10-reform) — Inspect storerooms and restore shared commitments.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Nehemiah 1–13
- **Core question:** *Can prayerful planning rebuild both walls and communal justice?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `nehemiah` | Nehemiah | Supporting visual identity must remain consistent across chapters. |
| `artaxerxes` | Artaxerxes | Supporting visual identity must remain consistent across chapters. |
| `hanani` | Hanani | Supporting visual identity must remain consistent across chapters. |
| `sanballat` | Sanballat | Supporting visual identity must remain consistent across chapters. |
| `tobiah` | Tobiah | Supporting visual identity must remain consistent across chapters. |
| `geshem` | Geshem | Supporting visual identity must remain consistent across chapters. |
| `ezra` | Ezra | Supporting visual identity must remain consistent across chapters. |
| `eliashib` | Eliashib | Supporting visual identity must remain consistent across chapters. |
| `wall_builder` | Wall Builder | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `wall_brick` | Wall Brick | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `hammered_gold` | Hammered Gold | Environment, prop, costume, or symbolic surface used by this story. |
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |

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
- **Approved Texture Forge inventory:** `wall_brick`, `stone`, `wood_oak`, `fabric_weave`, `hammered_gold`, `desert_sand`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: Bad News

**Act summary:** Map Jerusalem’s broken gates while Nehemiah prays.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “bad news”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “map jerusalem’s broken gates while nehemiah prays”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, Susa palace, broken gates)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK gate (wall_brick)                   │   │
│       │  🪨 STONE ruin (stone)                             │   │
│       │  🗺️  MAP at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  NEHEMIAH praying (hero 3D)              │  │   │
│       │  │  👥  HANNAI reporting (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The wall of Jerusalem..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, mapping gates)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS MARKING center (stone+wood)              │   │
│       │  🪨 STONE gate (stone)                             │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED CITY, reduced saturation     │  │   │
│       │  │  👤  NEHEMIAH weeping (hero 3D)              │  │   │
│       │  │  🗺️  MAP forming (hero 3D)                  │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "I sat down and wept..."           │  │   │
│       │  │  [CHOICE]    ▢ Mourn  ▢ Map  ▢ Pray          │  │   │
│       │  │  [CAPTION] "Let thine ear now be..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, prayer complete)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH resolved (hero 3D)             │  │   │
│       │  │  🗺️  GATES marked (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Prosper thy servant..."          │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 1:11"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: Before the King

**Act summary:** Choose a clear request and realistic resources.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `hammered_gold` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing hammered gold, nearby silhouettes, and an edge prop tied to “before the king”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `fabric_weave` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “choose a clear request and realistic resources”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `hammered_gold` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, palace court, before king)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD throne (hammered_gold)           │   │
│       │  🧵 FABRIC WEAVE banner (fabric_weave)             │   │
│       │  👑 CUP at edge (placeholder)                      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COLUMNS, patterned wall, court         │  │   │
│       │  │  👤  NEHEMIAH serving (hero 3D)              │  │   │
│       │  │  👑  ARTAXERXES watching (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Why is thy countenance sad?"     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, choosing request)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PRESENTING center (fabric+brick)         │   │
│       │  🧵 FABRIC WEAVE petition (fabric_weave)           │   │
│       │  🧱 WALL BRICK letter (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED COURT, reduced saturation    │  │   │
│       │  │  👤  NEHEMIAH requesting (hero 3D)           │  │   │
│       │  │  👑  ARTAXERXES granting (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "If it please the king..."         │  │   │
│       │  │  [CHOICE]    ▢ Request  ▢ Wait  ▢ Decline    │  │   │
│       │  │  [CAPTION] "The king granted me..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, resources granted)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COURT opened for scripture space       │  │   │
│       │  │  👤  NEHEMIAH receiving (hero 3D)            │  │   │
│       │  │  📜  LETTERS in hand (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The good hand of my God..."      │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 2:8"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: Night Inspection

**Act summary:** Survey ruined walls without alerting opponents.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “night inspection”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “survey ruined walls without alerting opponents”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, Jerusalem night, walls)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK ruin (wall_brick)                   │   │
│       │  🪨 STONE gate (stone)                             │   │
│       │  🏇 HORSE at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  NEHEMIAH riding (hero 3D)               │  │   │
│       │  │  👥  FEW MEN following (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I arose in the night..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, surveying)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS TOUCHING center (stone+wood)             │   │
│       │  🪨 STONE breach (stone)                           │   │
│       │  🪵 WOOD OAK beam (wood_oak)                       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED WALL, reduced saturation     │  │   │
│       │  │  👤  NEHEMIAH inspecting (hero 3D)           │  │   │
│       │  │  🏇  HORSE waiting (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The rulers knew not..."           │  │   │
│       │  │  [CHOICE]    ▢ Inspect  ▢ Measure  ▢ Return  │  │   │
│       │  │  [CAPTION] "I went out by night..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, inspection done)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH returned (hero 3D)             │  │   │
│       │  │  🏇  HORSE at gate (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I had not told any..."           │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 2:16"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Rise and Build

**Act summary:** Assign families to adjacent wall sections.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “rise and build”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “assign families to adjacent wall sections”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, families assigned, building)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK section (wall_brick)                │   │
│       │  🪨 STONE foundation (stone)                       │   │
│       │  👨‍👩‍👧 FAMILY at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  NEHEMIAH assigning (hero 3D)            │  │   │
│       │  │  👥  FAMILIES building (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Next unto them builded..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, laying stones)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS LAYING center (stone+wood)               │   │
│       │  🪨 STONE brick (stone)                            │   │
│       │  🪵 WOOD OAK mortar (wood_oak)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED WALL, reduced saturation     │  │   │
│       │  │  👤  BUILDERS working (hero 3D)              │  │   │
│       │  │  🛡️  GUARDS watching (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The builders...had sword..."      │  │   │
│       │  │  [CHOICE]    ▢ Build  ▢ Guard  ▢ Pray        │  │   │
│       │  │  [CAPTION] "They that builded..."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, wall rising)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  WALL opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH overseeing (hero 3D)           │  │   │
│       │  │  🧱  WALL joined (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The wall was joined..."          │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 4:6"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: Sword and Trowel

**Act summary:** Balance guarding with construction.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `hammered_gold` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing hammered gold, nearby silhouettes, and an edge prop tied to “sword and trowel”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `desert_sand` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “balance guarding with construction”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `hammered_gold` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, sword and trowel, guarding)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD sword (hammered_gold)            │   │
│       │  🏜️  DESERT SAND trowel (desert_sand)             │   │
│       │  🛡️  SHIELD at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  BUILDERS armed (hero 3D)                │  │   │
│       │  │  🛡️  GUARDS ready (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They that builded..."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, balancing)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS HOLDING BOTH center (gold+brick)         │   │
│       │  🏜️  DESERT SAND mortar (desert_sand)             │   │
│       │  🧱 WALL BRICK trowel (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED SITE, reduced saturation     │  │   │
│       │  │  👤  WORKERS alternating (hero 3D)           │  │   │
│       │  │  ⚔️  ENEMIES approaching (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "A sword in one hand..."           │  │   │
│       │  │  [CHOICE]    ▢ Build  ▢ Guard  ▢ Trust       │  │   │
│       │  │  [CAPTION] "Our God shall fight..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, work continues)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SITE opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH watching (hero 3D)             │  │   │
│       │  │  🧱  WALL rising (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The work...prospered..."         │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 4:17-18"             │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: The Outcry

**Act summary:** Cancel exploitative debts and restore fields.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “the outcry”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `wood_oak` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “cancel exploitative debts and restore fields”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, fields, cancelling debts)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE cloak (fabric_weave)              │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  📜 DEBT TABLET at edge (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  ROLLING FIELD, orchard, layered sky     │  │   │
│       │  │  👤  NEHEMIAH confronting (hero 3D)          │  │   │
│       │  │  👥  NOBLES releasing (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Let us leave off this..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, restoring fields)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS RETURNING center (oak+sand)              │   │
│       │  🪵 WOOD OAK deed (wood_oak)                       │   │
│       │  🏜️  DESERT SAND field (desert_sand)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  SIMPLIFIED FIELD, reduced saturation    │  │   │
│       │  │  👤  NOBLES restoring (hero 3D)              │  │   │
│       │  │  👥  PEOPLE receiving (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Restore...their lands..."         │  │   │
│       │  │  [CHOICE]    ▢ Cancel  ▢ Restore  ▢ Bless    │  │   │
│       │  │  [CAPTION] "We will restore them..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, justice done)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  FIELD opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH satisfied (hero 3D)            │  │   │
│       │  │  📜  DEBTS cancelled (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The people did..."               │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 5:12-13"             │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Plots and Rumours

**Act summary:** Recognise distractions designed to stop the work.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “plots and rumours”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “recognise distractions designed to stop the work”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, plots, distractions)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK wall (wall_brick)                   │   │
│       │  🪨 STONE rumor (stone)                            │   │
│       │  📜 LETTER at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  NEHEMIAH discerning (hero 3D)           │  │   │
│       │  │  👤  SHEMAIAH tempting (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I am doing a great work..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, recognizing)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS REJECTING center (stone+wood)            │   │
│       │  🪨 STONE trap (stone)                             │   │
│       │  🪵 WOOD OAK door (wood_oak)                       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED WALL, reduced saturation     │  │   │
│       │  │  👤  NEHEMIAH refusing (hero 3D)             │  │   │
│       │  │  👤  SHEMAIAH plotting (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Should such a man as I..."        │  │   │
│       │  │  [CHOICE]    ▢ Refuse  ▢ Enter  ▢ Pray       │  │   │
│       │  │  [CAPTION] "I perceived...God had not..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, work continues)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  WALL opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH steadfast (hero 3D)            │  │   │
│       │  │  🧱  WALL rising (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The work ceased not..."          │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 6:16"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: The Wall Completed

**Act summary:** Close the final gap and set gatekeepers.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the wall completed”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “close the final gap and set gatekeepers”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, final gap, gatekeepers)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK gap (wall_brick)                    │   │
│       │  🪨 STONE gate (stone)                             │   │
│       │  🗝️  KEY at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  NEHEMIAH closing (hero 3D)              │  │   │
│       │  │  👥  GATEKEEPERS appointed (hero 3D)         │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The wall was finished..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, setting gates)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS HANGING center (stone+wood)              │   │
│       │  🪨 STONE hinge (stone)                            │   │
│       │  🪵 WOOD OAK gate (wood_oak)                       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED GATE, reduced saturation     │  │   │
│       │  │  👤  NEHEMIAH appointing (hero 3D)           │  │   │
│       │  │  👥  GATEKEEPERS watching (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Set up the doors..."              │  │   │
│       │  │  [CHOICE]    ▢ Hang  ▢ Appoint  ▢ Dedicate   │  │   │
│       │  │  [CAPTION] "I set up the doors..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, wall complete)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space        │  │   │
│       │  │  👤  NEHEMIAH rejoicing (hero 3D)            │  │   │
│       │  │  🧱  WALL complete (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The wall was finished..."        │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 6:15"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: The Book Read

**Act summary:** Rebuild the platform and help the people understand.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the book read”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “rebuild the platform and help the people understand”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, platform rebuilt, reading)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK platform (wall_brick)               │   │
│       │  🪨 STONE steps (stone)                            │   │
│       │  📜 SCROLL at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  EZRA reading (hero 3D)                  │  │   │
│       │  │  👥  PEOPLE understanding (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They read in the book..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, helping understand)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS EXPLAINING center (stone+wood)           │   │
│       │  🪨 STONE platform (stone)                         │   │
│       │  🪵 WOOD OAK pulpit (wood_oak)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED PLATFORM, reduced sat.      │  │   │
│       │  │  👤  LEVITES teaching (hero 3D)              │  │   │
│       │  │  👥  PEOPLE comprehending (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "They gave the sense..."           │  │   │
│       │  │  [CHOICE]    ▢ Read  ▢ Explain  ▢ Worship   │  │   │
│       │  │  [CAPTION] "The people understood..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, word understood)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  PLATFORM opened for scripture space    │  │   │
│       │  │  👤  EZRA finishing (hero 3D)                │  │   │
│       │  │  📜  LAW understood (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They understood the reading..."  │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 8:8"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 10: Reform

**Act summary:** Inspect storerooms and restore shared commitments.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “reform”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “inspect storerooms and restore shared commitments”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (28–35mm, storerooms, inspecting)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK storeroom (wall_brick)              │   │
│       │  🪨 STONE seal (stone)                             │   │
│       │  📦 TITHE at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  NEHEMIAH inspecting (hero 3D)           │  │   │
│       │  │  👤  ELIASHIB confronted (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I contended with the rulers..."  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (40–55mm, chest height, restoring)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS CLEANSING center (stone+wood)            │   │
│       │  🪨 STONE vessel (stone)                           │   │
│       │  🪵 WOOD OAK beam (wood_oak)                       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED ROOM, reduced saturation     │  │   │
│       │  │  👤  NEHEMIAH cleansing (hero 3D)            │  │   │
│       │  │  👥  LEVITES returning (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "I cleansed the chambers..."       │  │   │
│       │  │  [CHOICE]    ▢ Cleanse  ▢ Restore  ▢ Pray    │  │   │
│       │  │  [CAPTION] "The tithe...brought in..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, commitments restored)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  STOREROOM opened for scripture space   │  │   │
│       │  │  👤  NEHEMIAH finished (hero 3D)             │  │   │
│       │  │  📦  TITHES restored (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Remember me, O my God..."        │  │   │
│       │  │  [SCRIPTURE] "Nehemiah 13:30-31"            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./nehemiah-design-source-of-truth.md) | [Music SOT](./nehemiah-music-source-of-truth.md) | [SFX SOT](./nehemiah-sfx-source-of-truth.md) | [Game Plan](./nehemiah-game-plan.md)
