# Joshua — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Will courage remain rooted in instruction rather than conquest for its own sake?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: Be Strong](#act-1-be-strong) — Meditate on the instruction before crossing.
- [Act 2: Rahab and the Spies](#act-2-rahab-and-the-spies) — Hide the scouts and mark the scarlet cord.
- [Act 3: Crossing Jordan](#act-3-crossing-jordan) — Carry twelve memorial stones from the riverbed.
- [Act 4: Jericho](#act-4-jericho) — March the pattern, sound the trumpets, protect Rahab.
- [Act 5: Achan’s Hidden Goods](#act-5-achans-hidden-goods) — Trace the community’s loss to the buried objects.
- [Act 6: Ai](#act-6-ai) — Set the ambush without repeating earlier presumption.
- [Act 7: The Gibeonites](#act-7-the-gibeonites) — Inspect the worn supplies and face a rushed oath.
- [Act 8: The Long Campaign](#act-8-the-long-campaign) — Resolve territory challenges without spectacle.
- [Act 9: Allot the Land](#act-9-allot-the-land) — Distribute inheritance among tribes.
- [Act 10: Choose This Day](#act-10-choose-this-day) — Place household stones beside the covenant witness.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Joshua 1–24
- **Core question:** *Will courage remain rooted in instruction rather than conquest for its own sake?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `joshua` | Joshua | Supporting visual identity must remain consistent across chapters. |
| `caleb` | Caleb | Supporting visual identity must remain consistent across chapters. |
| `rahab` | Rahab | Supporting visual identity must remain consistent across chapters. |
| `achan` | Achan | Supporting visual identity must remain consistent across chapters. |
| `eleazar` | Eleazar | Supporting visual identity must remain consistent across chapters. |
| `israelite_scout` | Israelite Scout | Supporting visual identity must remain consistent across chapters. |
| `gibeonite` | Gibeonite | Supporting visual identity must remain consistent across chapters. |
| `tribal_leader` | Tribal Leader | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wall_brick` | Wall Brick | Environment, prop, costume, or symbolic surface used by this story. |
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |
| `water_fast` | Water Fast | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_dark` | Wood Dark | Environment, prop, costume, or symbolic surface used by this story. |

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
- **Approved Texture Forge inventory:** `stone`, `wall_brick`, `desert_sand`, `water_fast`, `fabric_weave`, `wood_dark`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: Be Strong

**Act summary:** Meditate on the instruction before crossing.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “be strong”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wall_brick` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “meditate on the instruction before crossing”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, tent, meditating on instruction) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE threshold (stone)                        │   │
│       │  🧱 WALL BRICK foundation (wall_brick)             │   │
│       │  📜 SCROLL at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOSHUA meditating (hero 3D)             │  │   │
│       │  │  👥  LEADERS listening (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Meditate therein day and night"  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, preparing heart)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON SCROLL center (brick+sand)            │   │
│       │  🧱 WALL BRICK altar (wall_brick)                  │   │
│       │  🏜️  DESERT SAND ground (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED TENT, reduced saturation     │  │   │
│       │  │  👤  JOSHUA preparing (hero 3D)              │  │   │
│       │  │  👥  LEADERS watching (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Be strong and of good courage"    │  │   │
│       │  │  [CHOICE]    ▢ Meditate  ▢ Declare  ▢ Obey   │  │   │
│       │  │  [CAPTION] "The Lord thy God is with thee"   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, ready to cross)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JOSHUA resolved (hero 3D)               │  │   │
│       │  │  📜  INSTRUCTION in heart (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "According to all that is written"│  │   │
│       │  │  [SCRIPTURE] "Joshua 1:8-9"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: Rahab and the Spies

**Act summary:** Hide the scouts and mark the scarlet cord.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “rahab and the spies”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wall_brick` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “hide the scouts and mark the scarlet cord”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, Jericho wall, spies hidden)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE cord (fabric_weave)               │   │
│       │  🧱 WALL BRICK wall (wall_brick)                   │   │
│       │  🏃 SPIES at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  RAHAB hiding (hero 3D)                  │  │   │
│       │  │  🏃  SPIES escaping (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "She brought them up to the roof" │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, marking cord)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS TYING CORD center (brick+sand)           │   │
│       │  🧱 WALL BRICK window (wall_brick)                 │   │
│       │  🏜️  DESERT SAND rope (desert_sand)               │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED WALL, reduced saturation     │  │   │
│       │  │  👤  RAHAB binding (hero 3D)                 │  │   │
│       │  │  🏃  SPIES waiting (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Bind this line of scarlet..."     │  │   │
│       │  │  [CHOICE]    ▢ Bind  ▢ Hide  ▢ Send          │  │   │
│       │  │  [CAPTION] "The men said...our life..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, cord in window)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  WALL opened for scripture space        │  │   │
│       │  │  👤  RAHAB watching (hero 3D)                │  │   │
│       │  │  🧵  SCARLET CORD visible (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "She bound the scarlet line..."   │  │   │
│       │  │  [SCRIPTURE] "Joshua 2:21"                   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: Crossing Jordan

**Act summary:** Carry twelve memorial stones from the riverbed.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “crossing jordan”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `wood_dark` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “carry twelve memorial stones from the riverbed”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, Jordan river, twelve stones)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💨 WATER FAST river (water_fast)                  │   │
│       │  🪵 WOOD DARK ark (wood_dark)                      │   │
│       │  🪨 TWELVE STONES at edge (placeholder)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌊  WATERLINE, cloud bank, distant shore    │  │   │
│       │  │  👤  PRIESTS carrying (hero 3D)              │  │   │
│       │  │  👥  ISRAEL crossing (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Take you twelve stones..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, carrying stones)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS LIFTING STONES center (wood+sand)        │   │
│       │  🪵 WOOD DARK pole (wood_dark)                     │   │
│       │  🏜️  DESERT SAND riverbed (desert_sand)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌊  SIMPLIFIED RIVER, reduced saturation     │  │   │
│       │  │  👤  PRIESTS bearing (hero 3D)               │  │   │
│       │  │  🪨  STONES from midst (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "These stones shall be..."         │  │   │
│       │  │  [CHOICE]    ▢ Carry  ▢ Remember  ▢ Pile     │  │   │
│       │  │  [CAPTION] "That this may be a sign..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, memorial at Gilgal)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  💨 WATER FAST corner (water_fast)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌊  RIVERBANK opened for scripture space    │  │   │
│       │  │  👤  JOSHUA setting (hero 3D)                │  │   │
│       │  │  🪨  TWELVE STONES standing (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "What mean ye by these stones?"   │  │   │
│       │  │  [SCRIPTURE] "Joshua 4:6-7"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Jericho

**Act summary:** March the pattern, sound the trumpets, protect Rahab.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `water_fast` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “jericho”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `fabric_weave` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “march the pattern, sound the trumpets, protect rahab”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, Jericho walls, marching)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💨 WATER FAST dust (water_fast)                   │   │
│       │  🧵 FABRIC WEAVE banner (fabric_weave)             │   │
│       │  🎺 TRUMPET at edge (placeholder)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  PRIESTS blowing (hero 3D)               │  │   │
│       │  │  👥  ISRAEL marching (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The people shouted..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, protecting Rahab)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SHIELDING center (fabric+wood)           │   │
│       │  🧵 FABRIC WEAVE cord (fabric_weave)               │   │
│       │  🪵 WOOD DARK door (wood_dark)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED CITY, reduced saturation     │  │   │
│       │  │  👤  JOSHUA commanding (hero 3D)             │  │   │
│       │  │  👤  RAHAB sheltered (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The city shall be accursed..."    │  │   │
│       │  │  [CHOICE]    ▢ Protect  ▢ Destroy  ▢ Spare   │  │   │
│       │  │  [CAPTION] "Only Rahab...shall live..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, walls fallen)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  💨 WATER FAST corner (water_fast)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space        │  │   │
│       │  │  👤  JOSHUA at wall (hero 3D)                │  │   │
│       │  │  🧱  WALLS fallen flat (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The wall fell down flat..."      │  │   │
│       │  │  [SCRIPTURE] "Joshua 6:20"                   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: Achan’s Hidden Goods

**Act summary:** Trace the community’s loss to the buried objects.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “achan’s hidden goods”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “trace the community’s loss to the buried objects”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, dark tent, buried goods)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK wall (wall_brick)                   │   │
│       │  🪨 STONE floor (stone)                            │   │
│       │  💰 GOODS at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  RECEEDING MASONRY, minimal detail       │  │   │
│       │  │  👤  ACHAN hiding (hero 3D)                  │  │   │
│       │  │  👤  JOSHUA inquiring (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Israel hath sinned..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, tracing loss)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS DIGGING center (stone+wood)              │   │
│       │  🪨 STONE beneath (stone)                          │   │
│       │  🪵 WOOD DARK tent (wood_dark)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  SIMPLIFIED TENT, reduced saturation     │  │   │
│       │  │  👤  ACHAN exposed (hero 3D)                 │  │   │
│       │  │  👤  JOSHUA confronting (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "My son...give glory..."           │  │   │
│       │  │  [CHOICE]    ▢ Confess  ▢ Hide  ▢ Blame      │  │   │
│       │  │  [CAPTION] "I have sinned against..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, goods restored)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  TENT opened for scripture space         │  │   │
│       │  │  👤  JOSHUA judging (hero 3D)                │  │   │
│       │  │  💰  GOODS before Lord (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord turned from..."         │  │   │
│       │  │  [SCRIPTURE] "Joshua 7:25-26"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: Ai

**Act summary:** Set the ambush without repeating earlier presumption.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_dark` + `stone` | Wide, three-plane tableau. FG SVG: framing wood dark, nearby silhouettes, and an edge prop tied to “ai”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “set the ambush without repeating earlier presumption”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `wood_dark` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, ambush set, Ai)                 │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK ambush (wood_dark)                   │   │
│       │  🪨 STONE terrain (stone)                          │   │
│       │  🏹 ARROW at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOSHUA setting (hero 3D)                │  │   │
│       │  │  👥  AMBUSH waiting (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Lay thee an ambush..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, springing ambush)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SIGNALING center (stone+brick)           │   │
│       │  🪨 STONE ridge (stone)                            │   │
│       │  🧱 WALL BRICK city (wall_brick)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED TERRAIN, reduced saturation  │  │   │
│       │  │  👤  JOSHUA commanding (hero 3D)             │  │   │
│       │  │  👥  AMBUSH rising (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The Lord hath delivered..."       │  │   │
│       │  │  [CHOICE]    ▢ Signal  ▢ Hold  ▢ Pursue      │  │   │
│       │  │  [CAPTION] "The ambush arose..."             │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, Ai taken)                 │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  CITY opened for scripture space        │  │   │
│       │  │  👤  JOSHUA victorious (hero 3D)             │  │   │
│       │  │  🏙️  AI burned (hero 3D)                    │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Joshua burned Ai..."             │  │   │
│       │  │  [SCRIPTURE] "Joshua 8:28"                   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: The Gibeonites

**Act summary:** Inspect the worn supplies and face a rushed oath.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the gibeonites”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wall_brick` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “inspect the worn supplies and face a rushed oath”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, worn supplies, Gibeonites)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE path (stone)                             │   │
│       │  🧱 WALL BRICK supplies (wall_brick)               │   │
│       │  👴 ELDERS at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  GIBEONITES pleading (hero 3D)           │  │   │
│       │  │  👤  JOSHUA inspecting (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "We are come from a far..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, inspecting)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS EXAMINING center (brick+sand)            │   │
│       │  🧱 WALL BRICK bread (wall_brick)                  │   │
│       │  🏜️  DESERT SAND wineskins (desert_sand)          │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED CAMP, reduced saturation     │  │   │
│       │  │  👤  JOSHUA examining (hero 3D)              │  │   │
│       │  │  👴  ELDERS waiting (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Our bread...is dry..."            │  │   │
│       │  │  [CHOICE]    ▢ Inspect  ▢ Swear  ▢ Ask       │  │   │
│       │  │  [CAPTION] "We will be your servants..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, oath made)                │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  CAMP opened for scripture space        │  │   │
│       │  │  👤  JOSHUA swearing (hero 3D)               │  │   │
│       │  │  👴  GIBEONITES bound (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Joshua made peace..."            │  │   │
│       │  │  [SCRIPTURE] "Joshua 9:15"                   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: The Long Campaign

**Act summary:** Resolve territory challenges without spectacle.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the long campaign”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `desert_sand` + `water_fast` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “resolve territory challenges without spectacle”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_fast` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, five kings, long campaign)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK fort (wall_brick)                   │   │
│       │  🏜️  DESERT SAND terrain (desert_sand)            │   │
│       │  ☀️  SUN standing at edge (placeholder)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOSHUA commanding (hero 3D)             │  │   │
│       │  │  👑  FIVE KINGS fleeing (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Sun, stand thou still..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, resolving)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS DIRECTING center (sand+water)            │   │
│       │  🏜️  DESERT SAND battle (desert_sand)             │   │
│       │  💨 WATER FAST hailstones (water_fast)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED FIELD, reduced saturation    │  │   │
│       │  │  👤  JOSHUA praying (hero 3D)                │  │   │
│       │  │  ☀️  SUN obeying (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Sun, stand thou still..."         │  │   │
│       │  │  [CHOICE]    ▢ Command  ▢ Pray  ▢ Trust      │  │   │
│       │  │  [CAPTION] "The Lord hearkened..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, campaign complete)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💨 WATER FAST corner (water_fast)                 │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAND opened for scripture space        │  │   │
│       │  │  👤  JOSHUA victorious (hero 3D)             │  │   │
│       │  │  👑  KINGS defeated (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord fought for Israel..."   │  │   │
│       │  │  [SCRIPTURE] "Joshua 10:14"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: Allot the Land

**Act summary:** Distribute inheritance among tribes.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `desert_sand` + `water_fast` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “allot the land”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_fast` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “distribute inheritance among tribes”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, casting lots, allotting land)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND map (desert_sand)                │   │
│       │  💨 WATER FAST boundary (water_fast)               │   │
│       │  🎲 LOT at edge (placeholder)                      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  ELEAZAR casting (hero 3D)               │  │   │
│       │  │  👥  TRIBAL LEADERS waiting (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The lot came forth..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, distributing)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS DRAWING center (water+fabric)            │   │
│       │  💨 WATER FAST river (water_fast)                  │   │
│       │  🧵 FABRIC WEAVE scroll (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED MAP, reduced saturation      │  │   │
│       │  │  👤  ELEAZAR dividing (hero 3D)              │  │   │
│       │  │  👥  LEADERS receiving (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The land shall be divided..."     │  │   │
│       │  │  [CHOICE]    ▢ Draw  ▢ Assign  ▢ Bless       │  │   │
│       │  │  [CAPTION] "According to the lot..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, inheritance complete)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAND opened for scripture space        │  │   │
│       │  │  👤  ELEAZAR finished (hero 3D)              │  │   │
│       │  │  👥  TRIBES settled (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The country was divided..."      │  │   │
│       │  │  [SCRIPTURE] "Joshua 18:10"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 10: Choose This Day

**Act summary:** Place household stones beside the covenant witness.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | midnight violet, ultramarine, pale cyan, star gold. motivated glow emerging from the vision against a subdued world. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “choose this day”. MG: character group and optional low-detail 3D landmark. BG SVG: abstract horizon, layered cloud, and symbolic light field. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow orbit or vertical crane that returns to a grounded eye line. | SVG: stars, glyphs, cloud veils, and rays phase in rather than flash. 3D: symbolic objects rotate or assemble slowly with eased starts and stops. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining midnight violet, ultramarine, pale cyan, star gold. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “place household stones beside the covenant witness”. BG SVG: simplified abstract horizon, layered cloud, and symbolic light field with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter midnight violet, ultramarine, pale cyan, star gold; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: abstract horizon, layered cloud, and symbolic light field, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (28–35mm, Shechem, covenant stones)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK altar (wall_brick)                  │   │
│       │  🪨 STONE witness (stone)                          │   │
│       │  📜 BOOK at edge (placeholder)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  ABSTRACT HORIZON, layered cloud, light  │  │   │
│       │  │  👤  JOSHUA addressing (hero 3D)             │  │   │
│       │  │  👥  PEOPLE choosing (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Choose you this day..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (40–55mm, chest height, placing stones)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SETTING STONES center (stone+wood)       │   │
│       │  🪨 STONE household (stone)                        │   │
│       │  🪵 WOOD DARK altar (wood_dark)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  SIMPLIFIED HORIZON, reduced saturation  │  │   │
│       │  │  👤  JOSHUA setting (hero 3D)                │  │   │
│       │  │  👥  HOUSEHOLDS pledging (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "As for me and my house..."        │  │   │
│       │  │  [CHOICE]    ▢ Serve  ▢ Reject  ▢ Witness    │  │   │
│       │  │  [CAPTION] "The people said...we will serve" │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, covenant witnessed)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  HORIZON opened for scripture space      │  │   │
│       │  │  👤  JOSHUA old (hero 3D)                    │  │   │
│       │  │  🪨  STONE witness standing (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Behold, this stone shall be..."  │  │   │
│       │  │  [SCRIPTURE] "Joshua 24:27"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
