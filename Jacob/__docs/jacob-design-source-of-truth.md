# Jacob — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can a grasping deceiver become someone who receives blessing without stealing it?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Birthright](#act-1-the-birthright) — Weigh hunger against a lasting inheritance.
- [Act 2: The Stolen Blessing](#act-2-the-stolen-blessing) — Assemble the disguise, then witness its cost.
- [Act 3: Bethel](#act-3-bethel) — Build the stone pillar after the ladder dream.
- [Act 4: Rachel at the Well](#act-4-rachel-at-the-well) — Move the stone and water the flock.
- [Act 5: Laban’s Bargain](#act-5-labans-bargain) — Track changing wages and wedding promises.
- [Act 6: The Flocks](#act-6-the-flocks) — Sort speckled and spotted animals fairly.
- [Act 7: Leaving Haran](#act-7-leaving-haran) — Pack the camp before Laban catches up.
- [Act 8: The Night Wrestling](#act-8-the-night-wrestling) — Hold on through the night and receive a new name.
- [Act 9: Meeting Esau](#act-9-meeting-esau) — Arrange gifts, then step forward unarmed.
- [Act 10: Joseph’s Coats](#act-10-josephs-coats) — Recognise favouritism forming in the household.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Genesis 25–50
- **Core question:** *Can a grasping deceiver become someone who receives blessing without stealing it?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `jacob_young` | Jacob Young | Supporting visual identity must remain consistent across chapters. |
| `jacob` | Jacob | Supporting visual identity must remain consistent across chapters. |
| `esau` | Esau | Supporting visual identity must remain consistent across chapters. |
| `isaac` | Isaac | Supporting visual identity must remain consistent across chapters. |
| `rebekah` | Rebekah | Supporting visual identity must remain consistent across chapters. |
| `laban` | Laban | Supporting visual identity must remain consistent across chapters. |
| `leah` | Leah | Supporting visual identity must remain consistent across chapters. |
| `rachel` | Rachel | Supporting visual identity must remain consistent across chapters. |
| `joseph_child` | Joseph Child | Supporting visual identity must remain consistent across chapters. |
| `angel` | Angel | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `water_still` | Water Still | Environment, prop, costume, or symbolic surface used by this story. |
| `grass` | Grass | Environment, prop, costume, or symbolic surface used by this story. |

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
- **Approved Texture Forge inventory:** `stone`, `desert_sand`, `wood_oak`, `fabric_weave`, `water_still`, `grass`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Birthright

**Act summary:** Weigh hunger against a lasting inheritance.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the birthright”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `desert_sand` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “weigh hunger against a lasting inheritance”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, tent, stew and birthright)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE hearth (stone)                           │   │
│       │  🏜️  DESERT SAND floor (desert_sand)              │   │
│       │  🍲 STEW POT at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  ESAU famished (hero 3D)                 │  │   │
│       │  │  👤  JACOB cooking (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Sell me this day thy birthright" │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, oath taken)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SWEARING OATH center (sand+wood)         │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  📜 BIRTHRIGHT DOCUMENT (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED TENT, reduced saturation     │  │   │
│       │  │  👤  ESAU swearing (hero 3D)                 │  │   │
│       │  │  👤  JACOB receiving (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Swear to me this day..."          │  │   │
│       │  │  [CHOICE]    ▢ Swear  ▢ Eat  ▢ Refuse        │  │   │
│       │  │  [CAPTION] "He sold his birthright..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, stew eaten)               │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  ESAU eating (hero 3D)                   │  │   │
│       │  │  📜  BIRTHRIGHT transferred (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Then Jacob gave Esau bread..."   │  │   │
│       │  │  [SCRIPTURE] "Genesis 25:33-34"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: The Stolen Blessing

**Act summary:** Assemble the disguise, then witness its cost.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `desert_sand` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “the stolen blessing”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “assemble the disguise, then witness its cost”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, tent, disguise preparation)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND tent floor (desert_sand)         │   │
│       │  🪵 WOOD OAK frame (wood_oak)                      │   │
│       │  🐑 GOAT SKINS at edge (placeholder)               │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  REBEKAH preparing (hero 3D)             │  │   │
│       │  │  👤  JACOB disguised (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Put them upon thy son..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, receiving blessing)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS RECEIVING BLESSING center (wood+fabric)  │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  🧵 FABRIC WEAVE goat skin (fabric_weave)          │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED TENT, reduced saturation     │  │   │
│       │  │  👤  ISAAC blessing (hero 3D)                │  │   │
│       │  │  👤  JACOB deceiving (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The voice is Jacob's voice..."    │  │   │
│       │  │  [CHOICE]    ▢ Deceive  ▢ Hesitate  ▢ Flee   │  │   │
│       │  │  [CAPTION] "Let people serve thee..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, Esau's anguish)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  ESAU weeping (hero 3D)                  │  │   │
│       │  │  👤  ISAAC trembling (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Bless me, even me also..."       │  │   │
│       │  │  [SCRIPTURE] "Genesis 27:34-35"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: Bethel

**Act summary:** Build the stone pillar after the ladder dream.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | midnight violet, ultramarine, pale cyan, star gold. motivated glow emerging from the vision against a subdued world. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “bethel”. MG: character group and optional low-detail 3D landmark. BG SVG: abstract horizon, layered cloud, and symbolic light field. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow orbit or vertical crane that returns to a grounded eye line. | SVG: stars, glyphs, cloud veils, and rays phase in rather than flash. 3D: symbolic objects rotate or assemble slowly with eased starts and stops. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining midnight violet, ultramarine, pale cyan, star gold. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “build the stone pillar after the ladder dream”. BG SVG: simplified abstract horizon, layered cloud, and symbolic light field with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter midnight violet, ultramarine, pale cyan, star gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: abstract horizon, layered cloud, and symbolic light field, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, Bethel, stone pillar)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE pillar (stone)                           │   │
│       │  🪵 WOOD OAK altar wood (wood_oak)                 │   │
│       │  🌌 LADDER base at edge (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  ABSTRACT HORIZON, cloud, light field    │  │   │
│       │  │  👤  JACOB sleeping (hero 3D)                │  │   │
│       │  │  👼  ANGELS ascending/descending (hero 3D)   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "A ladder set up on the earth..." │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, anointing pillar)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS POURING OIL center (wood+fabric)         │   │
│       │  🪵 WOOD OAK oil vessel (wood_oak)                 │   │
│       │  🧵 FABRIC WEAVE garment (fabric_weave)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  SIMPLIFIED HORIZON, reduced saturation  │  │   │
│       │  │  👤  JACOB anointing (hero 3D)               │  │   │
│       │  │  🪨  PILLAR receiving oil (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "This stone...shall be God's..."   │  │   │
│       │  │  [CHOICE]    ▢ Anoint  ▢ Vow  ▢ Worship      │  │   │
│       │  │  [CAPTION] "He poured oil upon the top..."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, Bethel established)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  HORIZON opened for scripture space      │  │   │
│       │  │  👤  JACOB worshipping (hero 3D)             │  │   │
│       │  │  🪨  PILLAR anointed (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "This...is God's house..."        │  │   │
│       │  │  [SCRIPTURE] "Genesis 28:18-19"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Rachel at the Well

**Act summary:** Move the stone and water the flock.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_still` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing water still, nearby silhouettes, and an edge prop tied to “rachel at the well”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “move the stone and water the flock”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `grass` + `water_still` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, well, stone and flock)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL well (water_still)                 │   │
│       │  🪵 WOOD OAK well frame (wood_oak)                 │   │
│       │  🐑 FLOCK at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  💧  WATERLINE, cloud bank, distant shore    │  │   │
│       │  │  👤  JACOB arriving (hero 3D)                │  │   │
│       │  │  👤  RACHEL with flock (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "And Jacob kissed Rachel..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, rolling stone)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ROLLING STONE center (wood+grass)        │   │
│       │  🪵 WOOD OAK lever (wood_oak)                      │   │
│       │  🌿 GRASS by well (grass)                          │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  💧  SIMPLIFIED WELL, reduced saturation     │  │   │
│       │  │  👤  JACOB rolling (hero 3D)                 │  │   │
│       │  │  🐑  FLOCK watered (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "All the flocks were gathered..."  │  │   │
│       │  │  [CHOICE]    ▢ Roll  ▢ Water  ▢ Greet        │  │   │
│       │  │  [CAPTION] "He watered the flock..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, Jacob welcomed)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  💧  WELL opened for scripture space         │  │   │
│       │  │  👤  JACOB welcomed (hero 3D)                │  │   │
│       │  │  👤  LABAN embracing (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Surely thou art my bone..."      │  │   │
│       │  │  [SCRIPTURE] "Genesis 29:10-14"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: Laban’s Bargain

**Act summary:** Track changing wages and wedding promises.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `water_still` + `grass` | Wide, three-plane tableau. FG SVG: framing water still, nearby silhouettes, and an edge prop tied to “laban’s bargain”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `grass` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “track changing wages and wedding promises”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `water_still` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, tent, wages negotiation)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL basin (water_still)                │   │
│       │  🌿 GRASS tent floor (grass)                       │   │
│       │  📜 CONTRACT at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  LABAN proposing (hero 3D)               │  │   │
│       │  │  👤  JACOB considering (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "What shall thy wages be?"        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, terms changing)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SHAKING ON TERMS center (grass+stone)    │   │
│       │  🌿 GRASS palm (grass)                             │   │
│       │  🪨 STONE witness (stone)                          │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED TENT, reduced saturation     │  │   │
│       │  │  👤  LABAN changing terms (hero 3D)          │  │   │
│       │  │  👤  JACOB accepting (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Thy wages shall be..."            │  │   │
│       │  │  [CHOICE]    ▢ Accept  ▢ Negotiate  ▢ Leave  │  │   │
│       │  │  [CAPTION] "Changed my wages ten times..."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, covenant made)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JACOB & LABAN covenanting (hero 3D)     │  │   │
│       │  │  📜  TERMS settled (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "God hath not suffered..."        │  │   │
│       │  │  [SCRIPTURE] "Genesis 31:7"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: The Flocks

**Act summary:** Sort speckled and spotted animals fairly.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `grass` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing grass, nearby silhouettes, and an edge prop tied to “the flocks”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “sort speckled and spotted animals fairly”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `grass` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, pasture, sorting flocks)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS pasture (grass)                          │   │
│       │  🧵 FABRIC WEAVE sorting cloth (fabric_weave)      │   │
│       │  🐑 SPECKLED LAMB at edge (placeholder)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  ROLLING FIELD, orchard, layered sky     │  │   │
│       │  │  👤  JACOB sorting (hero 3D)                 │  │   │
│       │  │  🐑  FLOCKS separating (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will pass through all thy..."  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, rods in watering)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PLACING RODS center (fabric+wood)        │   │
│       │  🧵 FABRIC WEAVE rods (fabric_weave)               │   │
│       │  🪵 WOOD OAK peeled rods (wood_oak)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  SIMPLIFIED FIELD, reduced saturation    │  │   │
│       │  │  👤  JACOB setting rods (hero 3D)            │  │   │
│       │  │  🐑  FLOCKS conceiving (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The flocks conceived before..."   │  │   │
│       │  │  [CHOICE]    ▢ Place  ▢ Observe  ▢ Trust     │  │   │
│       │  │  [CAPTION] "The stronger were Jacob's..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, flocks divided)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  FIELD opened for scripture space        │  │   │
│       │  │  👤  JACOB watching (hero 3D)                │  │   │
│       │  │  🐑  SPECKLED & SPOTTED separated (hero 3D)  │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The man increased exceedingly..."│  │   │
│       │  │  [SCRIPTURE] "Genesis 30:43"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Leaving Haran

**Act summary:** Pack the camp before Laban catches up.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “leaving haran”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `desert_sand` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “pack the camp before laban catches up”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, camp, packing secretly)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE camp edge (stone)                        │   │
│       │  🏜️  DESERT SAND ground (desert_sand)             │   │
│       │  🎒 PACKS at edge (placeholder)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JACOB packing (hero 3D)                 │  │   │
│       │  │  👥  FAMILY loading (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Jacob stole away unawares..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, crossing river)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS LIFTING CHILDREN center (sand+wood)      │   │
│       │  🏜️  DESERT SAND riverbank (desert_sand)          │   │
│       │  🪵 WOOD OAK crossing poles (wood_oak)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED CAMP, reduced saturation     │  │   │
│       │  │  👤  JACOB crossing (hero 3D)                │  │   │
│       │  │  👥  FAMILY following (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "He rose up, and set his sons..."  │  │   │
│       │  │  [CHOICE]    ▢ Cross  ▢ Wait  ▢ Pray         │  │   │
│       │  │  [CAPTION] "He passed over the ford..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, Laban pursues)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JACOB on other side (hero 3D)           │  │   │
│       │  │  👤  LABAN approaching (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Laban overtook him..."           │  │   │
│       │  │  [SCRIPTURE] "Genesis 31:23-24"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: The Night Wrestling

**Act summary:** Hold on through the night and receive a new name.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `desert_sand` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “the night wrestling”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “hold on through the night and receive a new name”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, Jabbok ford, night wrestling)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND riverbank (desert_sand)          │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  🌑 DARKNESS at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  RECEEDING ROCK SILHOUETTES, minimal    │  │   │
│       │  │  👤  JACOB alone (hero 3D)                   │  │   │
│       │  │  👼  MAN wrestling (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "There wrestled a man with him..."│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, holding on)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS CLINGING center (wood+fabric)            │   │
│       │  🪵 WOOD OAK hip touched (wood_oak)                │   │
│       │  🧵 FABRIC WEAVE garment torn (fabric_weave)       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  SIMPLIFIED FORD, reduced saturation     │  │   │
│       │  │  👤  JACOB prevailing (hero 3D)              │  │   │
│       │  │  👼  MAN blessing (hero 3D)                  │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "I will not let thee go..."        │  │   │
│       │  │  [CHOICE]    ▢ Hold  ▢ Release  ▢ Bless      │  │   │
│       │  │  [CAPTION] "Thy name shall be called Israel" │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, Peniel named)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  FORD opened for scripture space         │  │   │
│       │  │  👤  JACOB limping (hero 3D)                 │  │   │
│       │  │  🌅  SUN RISING (hero 3D)                    │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I have seen God face to face..." │  │   │
│       │  │  [SCRIPTURE] "Genesis 32:30"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: Meeting Esau

**Act summary:** Arrange gifts, then step forward unarmed.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “meeting esau”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `fabric_weave` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “arrange gifts, then step forward unarmed”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, gifts arranged, Esau approaching)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK gift piles (wood_oak)                 │   │
│       │  🧵 FABRIC WEAVE bundles (fabric_weave)            │   │
│       │  👥 FAMILY behind at edge (placeholder)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JACOB arranging (hero 3D)               │  │   │
│       │  │  👥  SERVANTS with gifts (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "A present to Esau..."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, bowing forward)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS BOWING center (fabric+water)             │   │
│       │  🧵 FABRIC WEAVE garment (fabric_weave)            │   │
│       │  💧 WATER STILL reflection (water_still)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED LANDSCAPE, reduced sat.      │  │   │
│       │  │  👤  JACOB bowing (hero 3D)                  │  │   │
│       │  │  👤  ESAU running (hero 3D)                  │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Esau ran to meet him..."          │  │   │
│       │  │  [CHOICE]    ▢ Bow  ▢ Embrace  ▢ Weep        │  │   │
│       │  │  [CAPTION] "He fell on his neck..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, reconciliation)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  ESAU & JACOB weeping (hero 3D)          │  │   │
│       │  │  🎁  GIFTS accepted (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I have seen thy face..."         │  │   │
│       │  │  [SCRIPTURE] "Genesis 33:10"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 10: Joseph’s Coats

**Act summary:** Recognise favouritism forming in the household.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “joseph’s coats”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “recognise favouritism forming in the household”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (28–35mm, household, Joseph's coat)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE threshold (stone)                        │   │
│       │  🪵 WOOD OAK loom (wood_oak)                       │   │
│       │  🧥 COAT OF MANY COLORS at edge (placeholder)      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JACOB giving coat (hero 3D)             │  │   │
│       │  │  👤  JOSEPH receiving (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "He made him a coat of..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (40–55mm, chest height, brothers watching) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS HOLDING COAT center (wood+fabric)        │   │
│       │  🪵 WOOD OAK coat fabric (wood_oak)                │   │
│       │  🧵 FABRIC WEAVE colors (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED HOUSEHOLD, reduced sat.     │  │   │
│       │  │  👤  JACOB favoring (hero 3D)                │  │   │
│       │  │  👥  BROTHERS hating (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "They hated him..."                │  │   │
│       │  │  [CHOICE]    ▢ Give  ▢ Observe  ▢ Intervene  │  │   │
│       │  │  [CAPTION] "His brethren envied him..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, pattern set)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  HOUSEHOLD opened for scripture space   │  │   │
│       │  │  👤  JACOB watching (hero 3D)                │  │   │
│       │  │  👥  BROTHERS plotting (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They could not speak peaceably"  │  │   │
│       │  │  [SCRIPTURE] "Genesis 37:3-4"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./jacob-design-source-of-truth.md) | [Music SOT](./jacob-music-source-of-truth.md) | [SFX SOT](./jacob-sfx-source-of-truth.md) | [Game Plan](./jacob-game-plan.md)
