# Isaiah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *How can holy vision produce truthful warning and durable hope?*

This source of truth covers 9 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: A City in Need](#act-1-a-city-in-need) — Identify worship separated from justice.
- [Act 2: The Holy Throne](#act-2-the-holy-throne) — Navigate the temple vision and answer the call.
- [Act 3: The Vineyard Song](#act-3-the-vineyard-song) — Tend a vineyard that yields injustice.
- [Act 4: Immanuel Sign](#act-4-immanuel-sign) — Carry hope to fearful King Ahaz.
- [Act 5: The Assyrian Shadow](#act-5-the-assyrian-shadow) — Map the advancing empire and the surviving stump.
- [Act 6: Hezekiah’s Crisis](#act-6-hezekiahs-crisis) — Bring the threatening letter into prayer.
- [Act 7: Comfort My People](#act-7-comfort-my-people) — Build a road of return through the wilderness.
- [Act 8: The Servant](#act-8-the-servant) — Match suffering, justice, and healing motifs.
- [Act 9: New Creation](#act-9-new-creation) — Restore a city garden where all can flourish.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Isaiah 1–66
- **Core question:** *How can holy vision produce truthful warning and durable hope?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `isaiah` | Isaiah | Supporting visual identity must remain consistent across chapters. |
| `uzziah` | Uzziah | Supporting visual identity must remain consistent across chapters. |
| `ahaz` | Ahaz | Supporting visual identity must remain consistent across chapters. |
| `hezekiah` | Hezekiah | Supporting visual identity must remain consistent across chapters. |
| `shear_jashub` | Shear Jashub | Supporting visual identity must remain consistent across chapters. |
| `mahershalalhashbaz` | Mahershalalhashbaz | Supporting visual identity must remain consistent across chapters. |
| `seraph` | Seraph | Supporting visual identity must remain consistent across chapters. |
| `royal_envoy` | Royal Envoy | Supporting visual identity must remain consistent across chapters. |
| `sennacherib` | Sennacherib | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wall_brick` | Wall Brick | Environment, prop, costume, or symbolic surface used by this story. |
| `hammered_gold` | Hammered Gold | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |
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
- **Approved Texture Forge inventory:** `stone`, `wall_brick`, `hammered_gold`, `fabric_weave`, `desert_sand`, `water_still`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: A City in Need

**Act summary:** Identify worship separated from justice.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “a city in need”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `hammered_gold` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “identify worship separated from justice”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `hammered_gold` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, city towers, worshippers)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK framing (wall_brick)                │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  🛕 ALTAR edge (placeholder)                       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth    │  │   │
│       │  │  👥  WORSHIPPERS & ISAIAH (hero 3D)           │  │   │
│       │  │  ⚖️  JUSTICE scales tipping                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "How the faithful city..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, separating)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SEPARATING center (stone+gold)           │   │
│       │  ⚖️  SCALES in hands (hammered_gold)               │   │
│       │  🛕 TEMPLE VEIL (placeholder)                      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED CITY, reduced saturation      │  │   │
│       │  │  👤  ISAIAH identifying (hero 3D)             │  │   │
│       │  │  👥  WORSHIPPERS divided (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Seek judgment, relieve..."         │  │   │
│       │  │  [CHOICE]    ▢ Separate  ▢ Condemn  ▢ Weep    │  │   │
│       │  │  [CAPTION] "Your hands are full of blood..."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, call to repent)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space         │  │   │
│       │  │  👤  ISAIAH calling (hero 3D)                │  │   │
│       │  │  ⚖️  SCALES balanced (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Wash you, make you clean..."     │  │   │
│       │  │  [SCRIPTURE] "Isaiah 1:16-17"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: The Holy Throne

**Act summary:** Navigate the temple vision and answer the call.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `hammered_gold` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing hammered gold, nearby silhouettes, and an edge prop tied to “the holy throne”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `fabric_weave` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “navigate the temple vision and answer the call”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `hammered_gold` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, temple, throne vision)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD throne edge (hammered_gold)      │   │
│       │  🧵 FABRIC WEAVE veil (fabric_weave)               │   │
│       │  👼 SERAPH wing at edge (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COLUMNS, patterned wall, court          │  │   │
│       │  │  👤  ISAIAH prostrate (hero 3D)              │  │   │
│       │  │  👼  SERAPHIM above throne (hero 3D)         │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Holy, holy, holy..."             │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, coal on lips)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS RECEIVING COAL center (fabric_weave+brick)│   │
│       │  🔥 LIVE COAL on tongs (placeholder)               │   │
│       │  👼 SERAPH extending (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED TEMPLE, reduced saturation   │  │   │
│       │  │  👤  ISAIAH lips touched (hero 3D)           │  │   │
│       │  │  👼  SERAPH withdrawing (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Whom shall I send...?"            │  │   │
│       │  │  [CHOICE]    ▢ Here am I  ▢ Unworthy  ▢ Send│  │   │
│       │  │  [CAPTION] "Then said I, Here am I..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, commission received)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  TEMPLE opened for scripture space       │  │   │
│       │  │  👤  ISAIAH standing (hero 3D)               │  │   │
│       │  │  📜  WORDS on lips (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Go, and tell this people..."     │  │   │
│       │  │  [SCRIPTURE] "Isaiah 6:8-9"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: The Vineyard Song

**Act summary:** Tend a vineyard that yields injustice.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `fabric_weave` + `water_still` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “the vineyard song”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `water_still` + `hammered_gold` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “tend a vineyard that yields injustice”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `hammered_gold` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, vineyard, unjust fruit)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE vine rows (fabric_weave)          │   │
│       │  💧 WATER STILL basin (water_still)                │   │
│       │  🍇 BAD FRUIT at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  ROLLING FIELD, orchard line, layered sky │  │   │
│       │  │  👤  ISAIAH singing (hero 3D)                │  │   │
│       │  │  🍇  VINEYARD yielding wild grapes           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "My wellbeloved hath a vineyard..."│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, tending/removing)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PRUNING center (water_still+gold)        │   │
│       │  🔨 HAMMERED GOLD shears (hammered_gold)           │   │
│       │  🍇 WILD GRAPES falling (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  SIMPLIFIED FIELD, reduced saturation     │  │   │
│       │  │  👤  ISAIAH judging (hero 3D)                │  │   │
│       │  │  🍇  VINEYARD being cleared (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "What could have been done more?"  │  │   │
│       │  │  [CHOICE]    ▢ Prune  ▢ Remove  ▢ Lament     │  │   │
│       │  │  [CAPTION] "He looked for judgment..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, hedge removed)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  FIELD opened for scripture space         │  │   │
│       │  │  👤  ISAIAH watching (hero 3D)               │  │   │
│       │  │  🍇  VINEYARD laid waste (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will lay it waste..."          │  │   │
│       │  │  [SCRIPTURE] "Isaiah 5:5-6"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Immanuel Sign

**Act summary:** Carry hope to fearful King Ahaz.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `hammered_gold` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing hammered gold, nearby silhouettes, and an edge prop tied to “immanuel sign”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `fabric_weave` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “carry hope to fearful king ahaz”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `hammered_gold` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, court, Ahaz fearful)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔨 HAMMERED GOLD throne edge (hammered_gold)      │   │
│       │  🧵 FABRIC WEAVE royal robe (fabric_weave)         │   │
│       │  👑 CROWN trembling (placeholder)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COLUMNS, patterned wall, court          │  │   │
│       │  │  👤  ISAIAH approaching (hero 3D)            │  │   │
│       │  │  👑  AHAZ on throne (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Take heed, and be quiet..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, sign given)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS OFFERING SIGN center (fabric_weave+brick)│   │
│       │  🧱 WALL BRICK tablet (wall_brick)                 │   │
│       │  👶 CHILD in prophecy (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED COURT, reduced saturation    │  │   │
│       │  │  👤  ISAIAH declaring (hero 3D)              │  │   │
│       │  │  👑  AHAZ refusing (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "A virgin shall conceive..."       │  │   │
│       │  │  [CHOICE]    ▢ Declare  ▢ Insist  ▢ Weep     │  │   │
│       │  │  [CAPTION] "The Lord himself shall give..."  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, Immanuel promised)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🔨 HAMMERED GOLD corner (hammered_gold)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COURT opened for scripture space        │  │   │
│       │  │  👤  ISAIAH standing (hero 3D)               │  │   │
│       │  │  👶  IMMANUEL promised (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Before the child shall know..."  │  │   │
│       │  │  [SCRIPTURE] "Isaiah 7:14-16"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: The Assyrian Shadow

**Act summary:** Map the advancing empire and the surviving stump.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `desert_sand` + `water_still` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “the assyrian shadow”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_still` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “map the advancing empire and the surviving stump”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, desert map, Assyrian advance)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND map edge (desert_sand)           │   │
│       │  💧 WATER STILL pool (water_still)                 │   │
│       │  ⚔️  ASSYRIAN STANDARD at edge (placeholder)       │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🗺️  LAYERED LANDSCAPE, advancing army       │  │   │
│       │  │  👤  ISAIAH mapping (hero 3D)                │  │   │
│       │  │  ⚔️  ASSYRIAN SHADOW looming (hero 3D)       │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The ax shall not boast..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, stump survives)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS MARKING STUMP center (water_still+stone) │   │
│       │  🪨 STONE stump (stone)                            │   │
│       │  🌱 NEW SHOOT (placeholder)                        │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🗺️  SIMPLIFIED MAP, reduced saturation       │  │   │
│       │  │  👤  ISAIAH marking (hero 3D)                │  │   │
│       │  │  🌱  HOLY SEED remaining (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "A tenth...shall return..."        │  │   │
│       │  │  [CHOICE]    ▢ Mark  ▢ Protect  ▢ Trust     │  │   │
│       │  │  [CAPTION] "The holy seed shall be..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, stump stands)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🗺️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  ISAIAH watching (hero 3D)               │  │   │
│       │  │  🌱  STUMP with shoot (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The remnant shall return..."     │  │   │
│       │  │  [SCRIPTURE] "Isaiah 10:20-21"               │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: Hezekiah’s Crisis

**Act summary:** Bring the threatening letter into prayer.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `water_still` + `stone` | Wide, three-plane tableau. FG SVG: framing water still, nearby silhouettes, and an edge prop tied to “hezekiah’s crisis”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “bring the threatening letter into prayer”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `water_still` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, palace, threatening letter)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL basin (water_still)                │   │
│       │  🪨 STONE table (stone)                            │   │
│       │  📜 LETTER on table (placeholder)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LAYERED LANDSCAPE, palace interior      │  │   │
│       │  │  👤  HEZEKIAH reading (hero 3D)              │  │   │
│       │  │  📜  SENNACHERIB'S LETTER (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Let not thy God deceive thee..." │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, spreading letter)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SPREADING LETTER center (stone+brick)    │   │
│       │  🧱 WALL BRICK altar (wall_brick)                  │   │
│       │  🙏 KNEELING FIGURE (placeholder)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED PALACE, reduced saturation   │  │   │
│       │  │  👤  HEZEKIAH praying (hero 3D)              │  │   │
│       │  │  📜  LETTER before Lord (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "O Lord...thou art the God..."     │  │   │
│       │  │  [CHOICE]    ▢ Spread  ▢ Pray  ▢ Trust      │  │   │
│       │  │  [CAPTION] "He spread it before the Lord..." │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, deliverance promised)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  PALACE opened for scripture space       │  │   │
│       │  │  👤  HEZEKIAH at peace (hero 3D)             │  │   │
│       │  │  🛡️  ASSYRIAN DEFEATED (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will defend this city..."      │  │   │
│       │  │  [SCRIPTURE] "Isaiah 37:35"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Comfort My People

**Act summary:** Build a road of return through the wilderness.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | sandstone, ochre, dry umber, faded turquoise. broad hard sun or long amber dusk with strong silhouette edges. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “comfort my people”. MG: character group and optional low-detail 3D landmark. BG SVG: layered ridges, heat haze, and an open horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. patient side-track or shallow forward drift that emphasizes distance. | SVG: dust, cloth edges, distant birds, and heat bands move sparingly. 3D: staff, pack, tent, or terrain marker sways or settles with weight. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining sandstone, ochre, dry umber, faded turquoise. Key light follows the story’s real light source. | `stone` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “build a road of return through the wilderness”. BG SVG: simplified layered ridges, heat haze, and an open horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter sandstone, ochre, dry umber, faded turquoise; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered ridges, heat haze, and an open horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, wilderness, road building)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK path edge (wall_brick)              │   │
│       │  🪨 STONE markers (stone)                          │   │
│       │  🛤️  ROAD stretching (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED RIDGES, heat haze, open horizon │  │   │
│       │  │  👤  ISAIAH proclaiming (hero 3D)            │  │   │
│       │  │  👥  EXILES returning (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Comfort ye, comfort ye..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, leveling ground)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS LEVELING center (stone+sand)             │   │
│       │  🏜️  DESERT SAND path (desert_sand)               │   │
│       │  🪨 STONES removed (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED WILDERNESS, reduced sat.     │  │   │
│       │  │  👤  ISAIAH preparing way (hero 3D)          │  │   │
│       │  │  🛤️  HIGHWAY forming (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Every valley shall be exalted..." │  │   │
│       │  │  [CHOICE]    ▢ Level  ▢ Exalt  ▢ Proclaim   │  │   │
│       │  │  [CAPTION] "Prepare ye the way..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, highway ready)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  WILDERNESS opened for scripture space   │  │   │
│       │  │  👤  ISAIAH watching (hero 3D)               │  │   │
│       │  │  🛤️  HIGHWAY complete (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The glory of the Lord..."        │  │   │
│       │  │  [SCRIPTURE] "Isaiah 40:3-5"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: The Servant

**Act summary:** Match suffering, justice, and healing motifs.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the servant”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “match suffering, justice, and healing motifs”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, servant figure, motifs)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK frame (wall_brick)                  │   │
│       │  🔨 HAMMERED GOLD motif (hammered_gold)            │   │
│       │  🧵 FABRIC WEAVE robe edge (fabric_weave)          │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏞️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  SERVANT figure (hero 3D)                │  │   │
│       │  │  ⚖️  JUSTICE & HEALING motifs (hero 3D)      │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Behold my servant..."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, matching motifs)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS MATCHING center (gold+fabric)            │   │
│       │  🔨 HAMMERED GOLD justice (hammered_gold)          │   │
│       │  🧵 FABRIC WEAVE healing (fabric_weave)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏞️  SIMPLIFIED LANDSCAPE, reduced sat.      │  │   │
│       │  │  👤  SERVANT suffering (hero 3D)             │  │   │
│       │  │  ⚖️  JUSTICE emerging (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "He was wounded for our..."        │  │   │
│       │  │  [CHOICE]    ▢ Match  ▢ Bear  ▢ Heal        │  │   │
│       │  │  [CAPTION] "By his stripes we are healed..." │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, servant exalted)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏞️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  SERVANT exalted (hero 3D)               │  │   │
│       │  │  🌟  MANY JUSTIFIED (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "He shall see of the travail..."  │  │   │
│       │  │  [SCRIPTURE] "Isaiah 53:11"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: New Creation

**Act summary:** Restore a city garden where all can flourish.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `fabric_weave` + `water_still` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “new creation”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `water_still` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “restore a city garden where all can flourish”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, city garden restored)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE garden rows (fabric_weave)        │   │
│       │  💧 WATER STILL fountain (water_still)             │   │
│       │  🌳 TREE OF LIFE at edge (placeholder)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  ROLLING FIELD, orchard, layered sky     │  │   │
│       │  │  👤  ISAIAH rejoicing (hero 3D)              │  │   │
│       │  │  👥  ALL PEOPLES flourishing (hero 3D)       │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They shall build houses..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, planting)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PLANTING center (water_still+brick)      │   │
│       │  🧱 WALL BRICK border (wall_brick)                 │   │
│       │  🌱 SEEDLING growing (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  SIMPLIFIED GARDEN, reduced saturation   │  │   │
│       │  │  👤  ISAIAH planting (hero 3D)               │  │   │
│       │  │  👥  CHILDREN playing (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "They shall not labour in vain..." │  │   │
│       │  │  [CHOICE]    ▢ Plant  ▢ Water  ▢ Rejoice    │  │   │
│       │  │  [CAPTION] "Before they call, I will answer" │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, new creation complete)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  GARDEN opened for scripture space       │  │   │
│       │  │  👤  ISAIAH at rest (hero 3D)                │  │   │
│       │  │  🌍  NEW HEAVENS & EARTH (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I create new heavens..."         │  │   │
│       │  │  [SCRIPTURE] "Isaiah 65:17"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./isaiah-design-source-of-truth.md) | [Music SOT](./isaiah-music-source-of-truth.md) | [SFX SOT](./isaiah-sfx-source-of-truth.md) | [Game Plan](./isaiah-game-plan.md)
