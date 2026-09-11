# Esther — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Will hidden identity become courageous advocacy at the right moment?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Banquet](#act-1-the-banquet) — Navigate the palace feast and hear Vashti’s refusal.
- [Act 2: A New Queen](#act-2-a-new-queen) — Prepare Esther while protecting her identity.
- [Act 3: The Gate Plot](#act-3-the-gate-plot) — Carry Mordecai’s warning into the royal record.
- [Act 4: Haman’s Decree](#act-4-hamans-decree) — Trace the decree as it spreads across the empire.
- [Act 5: For Such a Time](#act-5-for-such-a-time) — Fast, gather courage, and approach the throne.
- [Act 6: The First Banquet](#act-6-the-first-banquet) — Invite the king and Haman without revealing too soon.
- [Act 7: The Sleepless Night](#act-7-the-sleepless-night) — Find Mordecai’s forgotten service in the chronicles.
- [Act 8: The Second Banquet](#act-8-the-second-banquet) — Name the threat clearly at the decisive moment.
- [Act 9: A New Decree](#act-9-a-new-decree) — Send defensive orders before the deadline.
- [Act 10: Purim](#act-10-purim) — Assemble gifts, food, and remembrance for every district.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Esther 1–10
- **Core question:** *Will hidden identity become courageous advocacy at the right moment?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `esther` | Esther | Supporting visual identity must remain consistent across chapters. |
| `mordecai` | Mordecai | Supporting visual identity must remain consistent across chapters. |
| `ahasuerus` | Ahasuerus | Supporting visual identity must remain consistent across chapters. |
| `vashti` | Vashti | Supporting visual identity must remain consistent across chapters. |
| `haman` | Haman | Supporting visual identity must remain consistent across chapters. |
| `zeresh` | Zeresh | Supporting visual identity must remain consistent across chapters. |
| `hathach` | Hathach | Supporting visual identity must remain consistent across chapters. |
| `palace_guard` | Palace Guard | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `mosaic` | Mosaic | Environment, prop, costume, or symbolic surface used by this story. |
| `hammered_gold` | Hammered Gold | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_dots` | Fabric Dots | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
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
- **Approved Texture Forge inventory:** `mosaic`, `hammered_gold`, `fabric_weave`, `fabric_dots`, `stone`, `wood_dark`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Banquet

**Act summary:** Navigate the palace feast and hear Vashti’s refusal.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “the banquet”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “navigate the palace feast and hear vashti’s refusal”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (32mm, high angle, palace hall wide)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC BORDER (bottom/sides, mosaic)   │   │
│       │  🏆 GOLDEN CUP EDGE (right, hammered_gold)         │   │
│       │  🟣 CURTAIN EDGE (left, fabric_weave)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COLUMNAR HALL, clerestory shafts        │  │   │
│       │  │  👑  AHASUERUS on THRONE (hero 3D, gold)      │  │   │
│       │  │  👑  VASHTI on balcony (distant)             │  │   │
│       │  │  👥  12 COURTIERS at tables                   │  │   │
│       │  │  🔷  PATTERNED WALLS (mosaic, hammered_gold)  │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "180 days...riches of kingdom"     │  │   │
│       │  │  [CAPTION] "Seventh day...commanded Vashti"   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (50mm, chest height, scepter handoff)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON SCEPTER (center, hammered_gold) ◄──PULSE │
│       │  👔 EUNUCH'S CUFF (fabric_weave)                   │   │
│       │  🏛️  COLUMN BASE FRAME (left, masonry)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  COLUMNS SIMPLIFIED, reduced saturation   │  │   │
│       │  │  👑  AHASUERUS leaning, scepter extended      │  │   │
│       │  │  👤  EUNUCH kneeling, receiving               │  │   │
│       │  │  👑  VASHTI on balcony, refusing (back turn)  │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Bring Queen Vashti..."             │  │   │
│       │  │  [CHOICE]    ▢ Exact  ▢ Soften  ▢ Threat      │  │   │
│       │  │  [BUBBLE]  "I will not come."                 │  │   │
│       │  │  [CAPTION] "Queen Vashti refused..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, pull-back, decree)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  📜 DECREE SCROLL corner (top-right, fabric+gold)  │   │
│       │  👑 CROWN ON CUSHION (bottom-left, hammered_gold)  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  HALL OPENED for scripture space         │  │   │
│       │  │  👑  AHASUERUS standing, advisers around      │  │   │
│       │  │  📜  DECREE SCROLL on table (hero 3D)         │  │   │
│       │  │  👑  VASHTI'S CROWN removed, on cushion       │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Vashti has wronged the king..."    │  │   │
│       │  │  [CAPTION] "A royal decree went out..."       │  │   │
│       │  │  [SCRIPTURE] "— Esther 1:19"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 2: A New Queen

**Act summary:** Prepare Esther while protecting her identity.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “a new queen”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “prepare esther while protecting her identity”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (30mm, harem interior wide)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 ARCHED MOSAIC BORDER (top, mosaic)             │   │
│       │  🫙 PERFUME VESSELS (right, hammered_gold)         │   │
│       │  🟣 SILK DRAPE EDGE (left, fabric_weave shot silk) │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🛁  HAREM CHAMBERS, tiled pools, niches      │  │   │
│       │  │  👩  ESTHER seated, attendants with oils      │  │   │
│       │  │  👤  HEGAI observing, clipboard               │  │   │
│       │  │  👥  6 CANDIDATES in background niches        │  │   │
│       │  │  🫙  ALABASTER MYRRH VESSEL (hero 3D)         │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Entrusted to Hegai..."            │  │   │
│       │  │  [CAPTION] "Twelve months...myrrh, perfumes"  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (50mm, chest height, gate grille)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS THROUGH GRILLE (center, stone+gold) ◄──PULSE│
│       │  🕯️  WAX SEAL IMPRESSION (fabric_weave+gold)        │   │
│       │  🏛️  MASONRY GRILLE BARS (stone texture)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🚪  HAREM GATE EXTERIOR, palace wall         │  │   │
│       │  │  👤  MORDECAI at gate, ring extended          │  │   │
│       │  │  👩  ESTHER at screened window, receiving     │  │   │
│       │  │  👁️  HEGAI watching from distance             │  │   │
│       │  │  💍  SIGNET RING (hero 3D, hammered_gold)     │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Do not make known your people..."  │  │   │
│       │  │  [CHOICE]    ▢ Promise  ▢ Ask why  ▢ Hesitate │  │   │
│       │  │  [BUBBLE]  "I will do as you say."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, crown moment)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  👑 CROWN CORNER FRAME (top-center, hammered_gold) │   │
│       │  💍 SIGNET IMPRESSION (bottom-left, fabric_weave)  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌅  HAREM DAWN LIGHT, crown motif in space   │  │   │
│       │  │  👑  ESTHER crowned, royal robe (fabric_weave)│  │   │
│       │  │  👑  AHASUERUS placing crown                  │  │   │
│       │  │  👤  MORDECAI at gate distant, watching       │  │   │
│       │  │  👑  ROYAL CROWN (hero 3D, hammered_gold)     │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "This one pleases me..."            │  │   │
│       │  │  [CAPTION] "The king loved Esther more..."    │  │   │
│       │  │  [SCRIPTURE] "— Esther 2:17"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 3: The Gate Plot

**Act summary:** Carry Mordecai’s warning into the royal record.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `stone` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the gate plot”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `wood_dark` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “carry mordecai’s warning into the royal record”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (32mm, city gate late afternoon)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 FRAMING STONE BORDER (ashlar courses, stone)   │   │
│       │  🔩 GATE PIVOT HINGE (right, wood_dark iron-band)  │   │
│       │  ✨ DUST MOTES in light shaft (animated)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏰  GATE TOWERS, carved reliefs, shadows     │  │   │
│       │  │  👤  MORDECAI seated, sackcloth under robe    │  │   │
│       │  │  🛡️  TWO GUARDS at posts (gold helms)         │  │   │
│       │  │  👥  BIGTHAN &amp; TERESH whispering in alcove    │  │   │
│       │  │  🪵  GATE GUARDIAN'S STAFF (hero 3D, wood_dark)│  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Mordecai sat at the king's gate"  │  │   │
│       │  │  [CAPTION] "Two eunuchs...sought to lay hands"│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (50mm, chest height, tablet writing)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON TABLET+STYLUS (center, stone+wood) ◄PULSE│
│       │  👔 SCRIBE'S CUFF (fabric_weave)                   │   │
│       │  🧱 STONE SILL (bottom frame)                      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  GATE PASSAGE, archive suggested beyond  │  │   │
│       │  │  👤  MORDECAI writing urgently                │  │   │
│       │  │  🏃  HATHACH receiving, running to palace     │  │   │
│       │  │  👑  ESTHER at palace window above            │  │   │
│       │  │  📜  CLAY TABLET+STYLUS (hero 3D, stone+wood) │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Write this in the king's chronicles"│ │   │
│       │  │  [CHOICE]    ▢ Exactly  ▢ Add timing  ▢ Names │  │   │
│       │  │  [BUBBLE]  "I will carry it to the queen..."  │  │   │
│       │  │  [CAPTION] "Written in the book of chronicles"│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, archive morning)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  📜 TABLET ON SHELF corner (top-right, stone)      │   │
│       │  🪵 STAFF AT GATE BASE (bottom-left, wood_dark)    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  📚  ARCHIVE INTERIOR, morning light          │  │   │
│       │  │  👤  MORDECAI at gate again, unnoticed        │  │   │
│       │  │  🛡️  GUARDS leading conspirators away         │  │   │
│       │  │  📜  SCRIBE filing tablet indifferently       │  │   │
│       │  │  📜  ARCHIVED TABLET (hero 3D, stone)         │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Plot investigated...two hanged"   │  │   │
│       │  │  [CAPTION] "Recorded...but Mordecai not rewarded"││   │
│       │  │  [SCRIPTURE] "— Esther 2:23"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 4: Haman’s Decree

**Act summary:** Trace the decree as it spreads across the empire.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “haman’s decree”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “trace the decree as it spreads across the empire”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (30mm, throne room, seal transfer)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC (floor pattern up edges)        │   │
│       │  💍 RING IMPRESSION IN WAX (center, gold on fabric)│   │
│       │  🖋️  QUILL &amp; INKPOT (wood_dark/stone)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  THRONE ROOM, columns, clerestory        │  │   │
│       │  │  👑  AHASUERUS extending ring to HAMAN       │  │   │
│       │  │  👤  HAMAN receiving, triumphant              │  │   │
│       │  │  👥  4 SCRIBES writing scrolls (fabric_weave) │  │   │
│       │  │  💍  KING'S SIGNET RING (hero 3D, hammered_gold)│ │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The silver is given to you..."     │  │   │
│       │  │  [BUBBLE] "Let a decree be written..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (50mm, chest height, courtyard dispatch)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON SCROLL CASE (center, wood_dark+gold)◄PULSE│
│       │  🏇 COURIER'S REINS (fabric_weave leather)         │   │
│       │  🏛️  PALACE GATE THRESHOLD (stone arch)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏰  COURTYARD, gates opening, roads stretch  │  │   │
│       │  │  👤  HAMAN handing case to first courier      │  │   │
│       │  │  🏇  5 COURIERS mounted, horses (wood_dark)   │  │   │
│       │  │  👤  MORDECAI at gate, sackcloth, watching    │  │   │
│       │  │  📦  DECREE SCROLL CASE (hero 3D, wood_dark)  │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Ride swiftly...cannot be revoked"  │  │   │
│       │  │  [CHOICE]    ▢ Ride now  ▢ Verify  ▢ Pray     │  │   │
│       │  │  [BUBBLE]  "The decree goes out..."           │  │   │
│       │  │  [CAPTION] "Letters sent by couriers..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, Susa square)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  📜 POSTED EDICT corner (top-left, fabric+gold)    │   │
│       │  🧵 TORN CLOTH fragment (bottom-right, fabric_weave)│   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SUSA SQUARE, palace distant             │  │   │
│       │  │  📜  POSTED EDICT on pillar (hero 3D)         │  │   │
│       │  │  👤  MORDECAI in sackcloth, ashes             │  │   │
│       │  │  👥  JEWS mourning, tearing clothes           │  │   │
│       │  │  🏇  COURIERS riding out through gate         │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Decree issued in Susa..."         │  │   │
│       │  │  [CAPTION] "Mordecai tore clothes...ashes"    │  │   │
│       │  │  [SCRIPTURE] "— Esther 3:15"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 5: For Such a Time

**Act summary:** Fast, gather courage, and approach the throne.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “for such a time”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “fast, gather courage, and approach the throne”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (30mm, queen's chambers, fasting)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 ARCHED MOSAIC DOORWAY (top frame)              │   │
│       │  🫙 FASTING VESSELS (right: jug, empty plate)      │   │
│       │  🟦 SHAWL FRINGE TZITZIT (bottom, fabric_dots)     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏠  ESTHER'S CHAMBERS, screened windows      │  │   │
│       │  │  👩  ESTHER kneeling in PRAYER SHAWL (hero)   │  │   │
│       │  │  👥  4 MAIDENS fasting, heads bowed           │  │   │
│       │  │  🏃  HATHACH departing with message           │  │   │
│       │  │  🧣  TALLIT with TZITZIT (hero 3D, fabric)    │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Do not think you will escape..."   │  │   │
│       │  │  [CAPTION] "Three days. No food. No water."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (50mm, chest height, threshold of death)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  👑 SCEPTER TIP AT THRESHOLD (center, gold) ◄──PULSE │
│       │  ✋ ESTHER'S HAND REACHING (fabric_weave sleeve)    │   │
│       │  🏛️  COLUMN BASE (left, stone)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  INNER COURT COLONNADE, throne visible   │  │   │
│       │  │  👩  ESTHER at threshold, royal robe          │  │   │
│       │  │  👑  AHASUERUS silhouette, scepter extended   │  │   │
│       │  │  🛡️  GUARDS at posts (gold helms)             │  │   │
│       │  │  👑  GOLDEN SCEPTER TIP (hero 3D, hammered_gold)│ │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "If I perish, I perish."            │  │   │
│       │  │  [CHOICE]    ▢ Bold  ▢ Tremble  ▢ Prostrate   │  │   │
│       │  │  [BUBBLE]  "What is it, Queen Esther?..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, invitation)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  📜 INVITATION SCROLL corner (top-right, fabric)   │   │
│       │  👑 SCEPTER TIP RESTING (bottom-center, gold)      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  THRONE ROOM WARM, acceptance            │  │   │
│       │  │  👩  ESTHER standing, scepter touched         │  │   │
│       │  │  👑  AHASUERUS leaning forward, pleased       │  │   │
│       │  │  👤  HAMAN entering behind, surprised         │  │   │
│       │  │  📜  BANQUET INVITATION (hero 3D, fabric)     │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Let the king and Haman come..."    │  │   │
│       │  │  [CAPTION] "The king extended the golden..."  │  │   │
│       │  │  [SCRIPTURE] "— Esther 5:2–3"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 6: The First Banquet

**Act summary:** Invite the king and Haman without revealing too soon.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “the first banquet”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “invite the king and haman without revealing too soon”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (30mm, intimate banquet chamber)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC BORDER (geometric)              │   │
│       │  🍇 POMEGRANATE GARNISH (right, gold/enamel)       │   │
│       │  🟣 CUSHION FRINGE TASSELS (bottom, fabric_dots)   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏠  BANQUET CHAMBER, cushioned couches       │  │   │
│       │  │  👩  ESTHER reclining at head, composed       │  │   │
│       │  │  👑  AHASUERUS center, relaxed                │  │   │
│       │  │  👤  HAMAN right, pleased, fine robes         │  │   │
│       │  │  🍷  WINE SERVICE SET (hero 3D, hammered_gold)│  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Esther prepared a banquet..."     │  │   │
│       │  │  [BUBBLE] "Enjoy, Haman. This is the queen's"│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (50mm, chest height, wine cup offer)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON WINE CUP (center, hammered_gold) ◄─PULSE │
│       │  🍷 WINE POURING STREAM (animated, gold)           │   │
│       │  🪵 TABLE EDGE (wood_dark grain)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🕯️  LAMP LIGHT INTIMATE on table             │  │   │
│       │  │  👑  AHASUERUS filling cup, extending         │  │   │
│       │  │  👩  ESTHER receiving, eyes on Haman          │  │   │
│       │  │  👤  HAMAN drinking, oblivious                │  │   │
│       │  │  🍷  WINE CUP (hero 3D, hammered_gold)        │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "What is your wish? Half kingdom"  │  │   │
│       │  │  [CHOICE]    ▢ 2nd banquet  ▢ Now  ▢ People   │  │   │
│       │  │  [BUBBLE]  "My petition: let king and Haman" │  │   │
│       │  │  [BUBBLE]  "I am honored — tomorrow I come"  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, corridor night)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💍 HAMAN'S SIGNET RING corner (top-left, gold)    │   │
│       │  🪵 MORDECAI'S STAFF (bottom-right, wood_dark)     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  PALACE CORRIDOR NIGHT, gate visible     │  │   │
│       │  │  👤  HAMAN exiting, beaming → fury shift      │  │   │
│       │  │  👤  MORDECAI at gate, not rising, sackcloth │  │   │
│       │  │  💍  HAMAN'S SIGNET RING (hero 3D, gold)     │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Haman went out joyful...saw..."  │  │   │
│       │  │  [SCRIPTURE] "— Esther 5:9"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 7: The Sleepless Night

**Act summary:** Find Mordecai’s forgotten service in the chronicles.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “the sleepless night”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “find mordecai’s forgotten service in the chronicles”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (30mm, bedchamber night, slow dolly)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC CANOPY (top, pattern)           │   │
│       │  💡 LAMP GLOW FRINGE (right, hammered_gold rays)   │   │
│       │  📖 CHRONICLE EDGE (left, fabric_weave binding)    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🛏️  BEDCHAMBER, canopied bed, archive shelves│  │   │
│       │  │  👑  AHASUERUS propped, sleepless             │  │   │
│       │  │  👤  SERVANT reading chronicle                │  │   │
│       │  │  💡  LAMP (hero 3D, hammered_gold, single shaft)│ │   │
│       │  │  📖  CHRONICLE VOLUME (hero 3D, fabric+gold)  │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "That night the king could not sleep"│ │   │
│       │  │  [BUBBLE] "Here: Mordecai told of Bigthana..."│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (50mm, chest height, open chronicle)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON CHRONICLE PAGE (center, fabric_weave)◄PULSE│
│       │  💡 LAMP SHADOW OF HANDS (gold rays)               │   │
│       │  📖 BOOK EDGE (wood_dark binding)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  📖 CHRONICLE PAGE ILLUMINATED, shelves dark │  │   │
│       │  │  👑  AHASUERUS leaning, reading               │  │   │
│       │  │  👤  SERVANT finger on Mordecai's entry       │  │   │
│       │  │  👤  HAMAN at door, listening unseen          │  │   │
│       │  │  📖  OPEN CHRONICLE (hero 3D, fabric+gold)    │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "What honor...for Mordecai?"        │  │   │
│       │  │  [CHOICE] ▢ Ask directly ▢ Reward now ▢ Counsel│ │   │
│       │  │  [BUBBLE]  "Nothing has been done for him."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, honor decreed at dawn)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🟣 ROYAL ROBE corner (top-right, fabric_weave)    │   │
│       │  🏇 HORSE TRAPPINGS (bottom-left, hammered_gold)   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌅  COURT AT DAWN, night ending              │  │   │
│       │  │  👑  AHASUERUS seated, commanding             │  │   │
│       │  │  👤  HAMAN entering, bowing, thinking of self │  │   │
│       │  │  👤  SERVANT bringing robe and horse items    │  │   │
│       │  │  🟣  ROYAL ROBE + HORSE (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "What should be done...honor?"      │  │   │
│       │  │  [BUBBLE]  "For whom...but me?" (Haman)       │  │   │
│       │  │  [SCRIPTURE] "— Esther 6:6"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 8: The Second Banquet

**Act summary:** Name the threat clearly at the decisive moment.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “the second banquet”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “name the threat clearly at the decisive moment”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (30mm, final banquet wide)               │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC BORDER (geometric)              │   │
│       │  🍇 POMEGRANATE GARNISH (right, gold/enamel)       │   │
│       │  📜 PETITION SCROLL EDGE (bottom-left, fabric)     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏠  INTIMATE BANQUET CHAMBER, lamp light     │  │   │
│       │  │  👩  ESTHER composed at table                 │  │   │
│       │  │  👑  AHASUERUS center, listening              │  │   │
│       │  │  👤  HAMAN right, honored and unaware         │  │   │
│       │  │  🍷  WINE CUP + SCROLL (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "We are sold, I and my people..."   │  │   │
│       │  │  [BUBBLE]  "Who is he?"                       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (50mm, chest height, accusation)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  ✋ ESTHER'S POINTING HAND (center) ◄──PULSE        │   │
│       │  🍷 SPILLED WINE (animated, gold/red)              │   │
│       │  🟥 HAMAN'S TERROR SILHOUETTE (right edge)         │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🕯️  DRAMATIC LAMP LIGHT, simplified hall     │  │   │
│       │  │  👩  ESTHER pointing across table             │  │   │
│       │  │  👑  AHASUERUS rising in fury                 │  │   │
│       │  │  👤  HAMAN pleading, exposed                  │  │   │
│       │  │  🍷  WINE CUP (hero 3D, overturned)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "A foe and enemy! This wicked Haman!"│ │   │
│       │  │  [CHOICE] ▢ Bold ▢ Weep ▢ Justice             │  │   │
│       │  │  [CAPTION] "Haman was terrified before them"  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, gallows at dawn)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💍 RING TRANSFER corner (top-left, hammered_gold) │   │
│       │  🪵 GALLOWS SILHOUETTE (bottom-right, wood_dark)   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌅  COURTYARD AT DAWN, gallows visible       │  │   │
│       │  │  👑  AHASUERUS commanding from dais           │  │   │
│       │  │  👤  MORDECAI honored, royal robe             │  │   │
│       │  │  👑  KING'S SIGNET RING transferred (hero 3D) │  │   │
│       │  │  👤  HAMAN silhouette, removed from power     │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They hanged Haman..."             │  │   │
│       │  │  [SCRIPTURE] "— Esther 7:10"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 9: A New Decree

**Act summary:** Send defensive orders before the deadline.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | lapis blue, royal plum, limestone, hammered gold. high clerestory or lamp light with sharp architectural shadow. | `mosaic` + `hammered_gold` | Wide, three-plane tableau. FG SVG: framing mosaic, nearby silhouettes, and an edge prop tied to “a new decree”. MG: character group and optional low-detail 3D landmark. BG SVG: columns, patterned wall, and distant court silhouettes. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. formal dolly-in with a slight off-axis shift when power is challenged. | SVG: banners, curtain edges, and lamp glow breathe subtly. 3D: throne, table, seal, or architectural hero object moves only when handled. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining lapis blue, royal plum, limestone, hammered gold. Key light follows the story’s real light source. | `hammered_gold` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “send defensive orders before the deadline”. BG SVG: simplified columns, patterned wall, and distant court silhouettes with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter lapis blue, royal plum, limestone, hammered gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `mosaic` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: columns, patterned wall, and distant court silhouettes, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (30mm, throne room, counter-decree)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🔷 FRAMING MOSAIC (floor pattern up edges)        │   │
│       │  💍 SIGNET RING PRESSING WAX (center, gold)        │   │
│       │  🏇 COURIER HORSES EDGE (right, wood_dark)         │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  THRONE ROOM, scribes at tables          │  │   │
│       │  │  👑  AHASUERUS authorizing the decree         │  │   │
│       │  │  👤  MORDECAI in royal robes, directing       │  │   │
│       │  │  👥  SCRIBES writing copies (fabric_weave)    │  │   │
│       │  │  📜  NEW DECREE SCROLL (hero 3D, fabric)      │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Write as you please...seal it..."  │  │   │
│       │  │  [CAPTION] "The counter-decree is prepared"   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (50mm, chest height, couriers race)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS ON REINS (center, wood_dark+fabric)◄PULSE │   │
│       │  💨 SPEED BLUR (animated, fabric_weave)            │   │
│       │  📦 DECREE SCROLL CASES (bottom, wood_dark)        │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏰  PALACE GATES, roads stretching outward  │  │   │
│       │  │  🏇  COURIERS mounted, swift steeds           │  │   │
│       │  │  👤  MORDECAI authority at gate               │  │   │
│       │  │  📜  SEALED DECREE CASE (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CHOICE] ▢ Susa first ▢ Split routes ▢ Pray  │  │   │
│       │  │  [CAPTION] "Riders hurry to every province"   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, defense ready)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🚩 ASSEMBLY STANDARD corner (top-left, fabric)    │   │
│       │  🕊️ WEAPONS LAID DOWN (bottom-right, wood_dark)    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  CITY SQUARE, Jews gathering              │  │   │
│       │  │  👤  MORDECAI in authority, calm              │  │   │
│       │  │  👥  FAMILIES assembling, prepared            │  │   │
│       │  │  🚩  JEWISH ASSEMBLY STANDARD (hero 3D)       │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Jews gathered in their cities"│  │   │
│       │  │  [SCRIPTURE] "— Esther 8:17"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Act 10: Purim

**Act summary:** Assemble gifts, food, and remembrance for every district.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `fabric_dots` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “purim”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `fabric_dots` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “assemble gifts, food, and remembrance for every district”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (30mm, village square, feast established)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🟨 FABRIC WEAVE BORDER (top/sides, fabric_weave) │   │
│       │  🧺 FOOD BASKETS (right, wood_dark+fabric)         │   │
│       │  🔵 FABRIC DOTS PATTERN (bottom, fabric_dots)      │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏘️  VILLAGE SQUARE, tables laden            │  │   │
│       │  │  👥  FAMILIES exchanging gifts and food       │  │   │
│       │  │  👤  MORDECAI reading the Megillah            │  │   │
│       │  │  👩  ESTHER among the people, rejoicing       │  │   │
│       │  │  📜  MEGILLAH SCROLL (hero 3D, fabric+gold)   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Mordecai recorded these things..."│  │   │
│       │  │  [CAPTION] "Observe the 14th and 15th of Adar"│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (50mm, chest height, gifts to districts)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PACKING BASKET (center, fabric_weave)◄PULSE│   │
│       │  🥣 PORTION MEASURE (right, stone)                 │   │
│       │  🔵 FABRIC DOTS CLOTH (bottom, fabric_dots)        │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏠  DOMESTIC INTERIORS, distribution route   │  │   │
│       │  │  👥  HANDS packing portions and gifts         │  │   │
│       │  │  👤  POOR REMEMBERED at threshold             │  │   │
│       │  │  🧺  GIFT BASKET (hero 3D, wood_dark+fabric)  │  │   │
│       │  │                                                │  │   │
│       │  │  [CHOICE] ▢ Extra for poor ▢ Distant kin ▢ Note│ │   │
│       │  │  [CAPTION] "Portions were sent to one another"│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, remembrance forever)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  📜 MEGILLAH CORNER (top-right, fabric+gold)       │   │
│       │  🫒 FRUITING OLIVE BRANCH (bottom-left, wood_dark) │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌅  QUIET GOLD, multi-generational gathering │  │   │
│       │  │  👵🧑👶  GENERATIONS celebrating together      │  │   │
│       │  │  📜  MEGILLAH AT REST on stand (hero 3D)      │  │   │
│       │  │  🍞  TABLES of feasting and gifts             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "These days of Purim should never" │  │   │
│       │  │  [CAPTION] "cease among the Jews."            │  │   │
│       │  │  [SCRIPTURE] "— Esther 9:28"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```

### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
