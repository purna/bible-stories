# Jeremiah — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can truth be spoken and hope planted while a city collapses?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Call](#act-1-the-call) — Touch the right words to the young prophet’s mouth.
- [Act 2: The Almond Branch](#act-2-the-almond-branch) — Spot signs that God is watching over the word.
- [Act 3: At the Temple Gate](#act-3-at-the-temple-gate) — Separate ritual confidence from justice.
- [Act 4: The Scroll](#act-4-the-scroll) — Dictate to Baruch and rebuild the burned scroll.
- [Act 5: The Potter](#act-5-the-potter) — Reshape the clay while it remains workable.
- [Act 6: The Yoke](#act-6-the-yoke) — Carry the warning despite Hananiah’s easy promise.
- [Act 7: The Cistern](#act-7-the-cistern) — Coordinate Ebed-melech’s rope rescue.
- [Act 8: Buy the Field](#act-8-buy-the-field) — Complete a land purchase while siege closes in.
- [Act 9: The Fall of Jerusalem](#act-9-the-fall-of-jerusalem) — Guide survivors through the breached city.
- [Act 10: Lament and Hope](#act-10-lament-and-hope) — Pair grief lines with stubborn hope.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Jeremiah 1–52; Lamentations
- **Core question:** *Can truth be spoken and hope planted while a city collapses?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `jeremiah` | Jeremiah | Supporting visual identity must remain consistent across chapters. |
| `josiah` | Josiah | Supporting visual identity must remain consistent across chapters. |
| `jehoiakim` | Jehoiakim | Supporting visual identity must remain consistent across chapters. |
| `zedekiah` | Zedekiah | Supporting visual identity must remain consistent across chapters. |
| `baruch` | Baruch | Supporting visual identity must remain consistent across chapters. |
| `ebed_melech` | Ebed Melech | Supporting visual identity must remain consistent across chapters. |
| `hananiah` | Hananiah | Supporting visual identity must remain consistent across chapters. |
| `temple_priest` | Temple Priest | Supporting visual identity must remain consistent across chapters. |
| `babylonian_guard` | Babylonian Guard | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `wall_brick` | Wall Brick | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_dark` | Wood Dark | Environment, prop, costume, or symbolic surface used by this story. |
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
- **Approved Texture Forge inventory:** `wall_brick`, `stone`, `wood_dark`, `fabric_weave`, `desert_sand`, `water_still`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Call

**Act summary:** Touch the right words to the young prophet’s mouth.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the call”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “touch the right words to the young prophet’s mouth”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, young prophet, word touches)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK threshold (wall_brick)              │   │
│       │  🪨 STONE floor (stone)                            │   │
│       │  📜 SCROLL at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JEREMIAH young (hero 3D)                │  │   │
│       │  │  ✋  HAND touching mouth (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I have put my words..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, receiving word)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS RECEIVING WORD center (stone+wood)       │   │
│       │  🪨 STONE tablet (stone)                           │   │
│       │  🪵 WOOD DARK stylus (wood_dark)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED SETTING, reduced saturation  │  │   │
│       │  │  👤  JEREMIAH accepting (hero 3D)            │  │   │
│       │  │  ✋  HAND withdrawing (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Say not, I am a child..."         │  │   │
│       │  │  [CHOICE]    ▢ Accept  ▢ Hesitate  ▢ Ask     │  │   │
│       │  │  [CAPTION] "Thou shalt go to all..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, commissioned)             │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JEREMIAH standing (hero 3D)             │  │   │
│       │  │  📜  WORDS on lips (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I have set thee over nations..." │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 1:9-10"               │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: The Almond Branch

**Act summary:** Spot signs that God is watching over the word.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the almond branch”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_dark` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “spot signs that god is watching over the word”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, almond branch, watching)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE ground (stone)                           │   │
│       │  🪵 WOOD DARK branch (wood_dark)                   │   │
│       │  🌸 ALMOND BLOSSOM at edge (placeholder)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JEREMIAH watching (hero 3D)             │  │   │
│       │  │  🌸  ALMOND ROD blooming (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I see a rod of an almond tree"   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, confirming sign)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS CONFIRMING center (wood+fabric)          │   │
│       │  🪵 WOOD DARK branch (wood_dark)                   │   │
│       │  🧵 FABRIC WEAVE garment (fabric_weave)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED SETTING, reduced saturation  │  │   │
│       │  │  👤  JEREMIAH confirming (hero 3D)           │  │   │
│       │  │  🌸  BLOSSOM fully open (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Thou hast well seen..."           │  │   │
│       │  │  [CHOICE]    ▢ Confirm  ▢ Doubt  ▢ Proclaim │  │   │
│       │  │  [CAPTION] "I will hasten my word..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, word confirmed)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JEREMIAH assured (hero 3D)              │  │   │
│       │  │  🌸  ALMOND ROD confirmed (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will watch over my word..."    │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 1:11-12"              │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: At the Temple Gate

**Act summary:** Separate ritual confidence from justice.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `fabric_weave` + `wall_brick` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “at the temple gate”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `wall_brick` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “separate ritual confidence from justice”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, temple gate, ritual vs justice) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE gate fringe (fabric_weave)        │   │
│       │  🧱 WALL BRICK gate (wall_brick)                   │   │
│       │  🛕 TEMPLE VEIL at edge (placeholder)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  JEREMIAH proclaiming (hero 3D)          │  │   │
│       │  │  👥  WORSHIPPERS entering (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Hear the word of the Lord..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, confronting)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SEPARATING center (brick+stone)          │   │
│       │  🧱 WALL BRICK gate (wall_brick)                   │   │
│       │  🪨 STONE tablet (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED CITY, reduced saturation     │  │   │
│       │  │  👤  JEREMIAH confronting (hero 3D)          │  │   │
│       │  │  👥  PEOPLE hearing (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Amend your ways..."               │  │   │
│       │  │  [CHOICE]    ▢ Confront  ▢ Warn  ▢ Weep      │  │   │
│       │  │  [CAPTION] "Trust ye not in lying words..."  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, warning given)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space         │  │   │
│       │  │  👤  JEREMIAH watching (hero 3D)             │  │   │
│       │  │  🛕  TEMPLE gate (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "This house...is become a den..." │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 7:11"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: The Scroll

**Act summary:** Dictate to Baruch and rebuild the burned scroll.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | charcoal, ember red, burnt orange, covenant gold. hard fire key with warm bounce and deep cool shadows. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the scroll”. MG: character group and optional low-detail 3D landmark. BG SVG: smoke layers, dark ridge, and heat-softened horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. measured push-in that stops before the decisive moment. | SVG: embers, smoke curls, and heat shimmer rise asynchronously. 3D: flame-lit hero prop uses restrained emissive pulses; no explosive spectacle. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining charcoal, ember red, burnt orange, covenant gold. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “dictate to baruch and rebuild the burned scroll”. BG SVG: simplified smoke layers, dark ridge, and heat-softened horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter charcoal, ember red, burnt orange, covenant gold; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: smoke layers, dark ridge, and heat-softened horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, scroll burning, Baruch writing) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK fireplace (wall_brick)              │   │
│       │  🪨 STONE hearth (stone)                           │   │
│       │  🔥 EMBERS at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌫️  SMOKE LAYERS, dark ridge, heat horizon  │  │   │
│       │  │  👤  JEREMIAH dictating (hero 3D)            │  │   │
│       │  │  👤  BARUCH writing (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Write all the words..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, rewriting scroll)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS REWRITING center (stone+wood)            │   │
│       │  🪨 STONE new scroll (stone)                       │   │
│       │  🪵 WOOD DARK stylus (wood_dark)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌫️  SIMPLIFIED ROOM, reduced saturation     │  │   │
│       │  │  👤  JEREMIAH dictating (hero 3D)            │  │   │
│       │  │  👤  BARUCH rewriting (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Take another roll..."             │  │   │
│       │  │  [CHOICE]    ▢ Dictate  ▢ Write  ▢ Preserve  │  │   │
│       │  │  [CAPTION] "He wrote...all the words..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, scroll restored)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌫️  ROOM opened for scripture space        │  │   │
│       │  │  👤  JEREMIAH satisfied (hero 3D)            │  │   │
│       │  │  📜  SCROLL complete (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Many like words were added..."   │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 36:32"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: The Potter

**Act summary:** Reshape the clay while it remains workable.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `desert_sand` + `water_still` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “the potter”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_still` + `wall_brick` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “reshape the clay while it remains workable”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wall_brick` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, potter's house, clay reshaping) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND clay (desert_sand)               │   │
│       │  💧 WATER STILL basin (water_still)                │   │
│       │  🏺 VESSEL at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  POTTER working (hero 3D)                │  │   │
│       │  │  🏺  VESSEL marred (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "As the clay is in the potter's..."│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, reshaping clay)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS RESHAPING center (water+brick)           │   │
│       │  💧 WATER STILL on clay (water_still)              │   │
│       │  🧱 WALL BRICK wheel (wall_brick)                  │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED HOUSE, reduced saturation    │  │   │
│       │  │  👤  POTTER reshaping (hero 3D)              │  │   │
│       │  │  🏺  VESSEL made anew (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Cannot I do with you..."          │  │   │
│       │  │  [CHOICE]    ▢ Reshape  ▢ Mar  ▢ Submit      │  │   │
│       │  │  [CAPTION] "So are ye in mine hand..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, vessel made anew)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  HOUSE opened for scripture space        │  │   │
│       │  │  👤  JEREMIAH watching (hero 3D)             │  │   │
│       │  │  🏺  VESSEL made anew (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will build, and not pull..."   │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 18:6"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: The Yoke

**Act summary:** Carry the warning despite Hananiah’s easy promise.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the yoke”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “carry the warning despite hananiah’s easy promise”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, yoke on neck, warning)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK street (wall_brick)                 │   │
│       │  🪨 STONE platform (stone)                         │   │
│       │  ⛓️  YOKE on neck (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  RECEEDING MASONRY, minimal detail       │  │   │
│       │  │  👤  JEREMIAH wearing yoke (hero 3D)         │  │   │
│       │  │  👤  HANANIAH breaking (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord hath put a yoke..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, yoke burden)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS HOLDING YOKE center (stone+wood)         │   │
│       │  🪨 STONE weight (stone)                           │   │
│       │  🪵 WOOD DARK yoke bar (wood_dark)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  SIMPLIFIED STREET, reduced saturation   │  │   │
│       │  │  👤  JEREMIAH bearing (hero 3D)              │  │   │
│       │  │  👤  HANANIAH opposing (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The Lord hath not sent me..."     │  │   │
│       │  │  [CHOICE]    ▢ Bear  ▢ Break  ▢ Proclaim     │  │   │
│       │  │  [CAPTION] "Hear now, Hananiah..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, yoke confirmed)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  STREET opened for scripture space       │  │   │
│       │  │  👤  JEREMIAH steadfast (hero 3D)            │  │   │
│       │  │  ⛓️  YOKE remains (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The yoke of iron is come..."     │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 28:13-14"             │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: The Cistern

**Act summary:** Coordinate Ebed-melech’s rope rescue.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the cistern”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “coordinate ebed-melech’s rope rescue”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, cistern, rope rescue)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK cistern wall (wall_brick)           │   │
│       │  🪨 STONE floor (stone)                            │   │
│       │  🪢 ROPE at edge (placeholder)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  RECEEDING MASONRY, minimal detail       │  │   │
│       │  │  👤  JEREMIAH in cistern (hero 3D)           │  │   │
│       │  │  👤  EBED-MELECH at top (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Put them in the dungeon..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, lowering ropes)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS LOWERING ROPES center (stone+wood)       │   │
│       │  🪨 STONE cistern wall (stone)                     │   │
│       │  🪵 WOOD DARK rope (wood_dark)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  SIMPLIFIED CISTERN, reduced saturation  │  │   │
│       │  │  👤  EBED-MELECH rescuing (hero 3D)          │  │   │
│       │  │  👤  JEREMIAH rising (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Take thirty men..."               │  │   │
│       │  │  [CHOICE]    ▢ Lower  ▢ Secure  ▢ Pull      │  │   │
│       │  │  [CAPTION] "Ebed-melech took the men..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, rescued)                  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  CISTERN opened for scripture space      │  │   │
│       │  │  👤  JEREMIAH safe (hero 3D)                 │  │   │
│       │  │  🪢  ROPES coiled (hero 3D)                  │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "He drew him up with cords..."    │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 38:13"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: Buy the Field

**Act summary:** Complete a land purchase while siege closes in.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `fabric_weave` + `water_still` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “buy the field”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `water_still` + `stone` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “complete a land purchase while siege closes in”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `stone` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, field purchase, siege closing)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE deed (fabric_weave)               │   │
│       │  💧 WATER STILL witness (water_still)              │   │
│       │  🌾 FIELD boundary at edge (placeholder)           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  ROLLING FIELD, orchard, layered sky     │  │   │
│       │  │  👤  JEREMIAH signing (hero 3D)              │  │   │
│       │  │  👤  BARUCH witnessing (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Buy thee the field..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, sealing deed)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SEALING DEED center (water+stone)        │   │
│       │  💧 WATER STILL seal (water_still)                 │   │
│       │  🪨 STONE weight (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  SIMPLIFIED FIELD, reduced saturation    │  │   │
│       │  │  👤  JEREMIAH sealing (hero 3D)              │  │   │
│       │  │  👤  HANAMEL receiving (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Fields shall be bought..."        │  │   │
│       │  │  [CHOICE]    ▢ Seal  ▢ Weigh  ▢ Trust       │  │   │
│       │  │  [CAPTION] "The deed of purchase..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, deed buried)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌾  FIELD opened for scripture space        │  │   │
│       │  │  👤  JEREMIAH burying (hero 3D)              │  │   │
│       │  │  📜  DEED in jar (hero 3D)                   │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Put them in an earthen vessel..."│  │   │
│       │  │  [SCRIPTURE] "Jeremiah 32:14"                │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: The Fall of Jerusalem

**Act summary:** Guide survivors through the breached city.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | sun-baked clay, limestone, slate shadow, muted bronze. directional late-afternoon light defining masonry relief. | `wall_brick` + `stone` | Wide, three-plane tableau. FG SVG: framing wall brick, nearby silhouettes, and an edge prop tied to “the fall of jerusalem”. MG: character group and optional low-detail 3D landmark. BG SVG: city silhouette, towers, and atmospheric street depth. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. controlled pan along the structure followed by a short push to the objective. | SVG: dust, pennants, distant figures, and shadow bands provide depth. 3D: wall section, gate, brick, or tool animates only for the construction or collapse beat. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining sun-baked clay, limestone, slate shadow, muted bronze. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “guide survivors through the breached city”. BG SVG: simplified city silhouette, towers, and atmospheric street depth with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter sun-baked clay, limestone, slate shadow, muted bronze; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `wall_brick` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: city silhouette, towers, and atmospheric street depth, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, breached city, survivors)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧱 WALL BRICK breach (wall_brick)                 │   │
│       │  🪨 STONE rubble (stone)                           │   │
│       │  🚶 SURVIVORS at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY SILHOUETTE, towers, street depth   │  │   │
│       │  │  👤  JEREMIAH guiding (hero 3D)              │  │   │
│       │  │  👥  SURVIVORS fleeing (hero 3D)             │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The city is broken up..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, guiding through)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS GUIDING center (stone+wood)              │   │
│       │  🪨 STONE path (stone)                             │   │
│       │  🪵 WOOD DARK staff (wood_dark)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  SIMPLIFIED CITY, reduced saturation     │  │   │
│       │  │  👤  JEREMIAH leading (hero 3D)              │  │   │
│       │  │  👥  SURVIVORS following (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Come, let us return..."           │  │   │
│       │  │  [CHOICE]    ▢ Guide  ▢ Comfort  ▢ Mourn    │  │   │
│       │  │  [CAPTION] "They shall fall among the..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, city fallen)              │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD DARK corner (wood_dark)                   │   │
│       │  🧱 WALL BRICK corner (wall_brick)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏙️  CITY opened for scripture space        │  │   │
│       │  │  👤  JEREMIAH watching (hero 3D)             │  │   │
│       │  │  🏙️  CITY in ruins (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord hath done..."           │  │   │
│       │  │  [SCRIPTURE] "Jeremiah 39:2"                 │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 10: Lament and Hope

**Act summary:** Pair grief lines with stubborn hope.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `desert_sand` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “lament and hope”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `desert_sand` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “pair grief lines with stubborn hope”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (28–35mm, lament lines, hope stubborn)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE scroll (fabric_weave)             │   │
│       │  🏜️  DESERT SAND ground (desert_sand)             │   │
│       │  🕯️  LAMP at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JEREMIAH lamenting (hero 3D)            │  │   │
│       │  │  📜  LAMENTATIONS lines (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "How doth the city sit..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (40–55mm, chest height, pairing grief/hope)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS PAIRING LINES center (sand+water)        │   │
│       │  🏜️  DESERT SAND grief (desert_sand)              │   │
│       │  💧 WATER STILL hope (water_still)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  SIMPLIFIED SETTING, reduced saturation  │  │   │
│       │  │  👤  JEREMIAH composing (hero 3D)            │  │   │
│       │  │  📜  HOPE lines emerging (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "It is of the Lord's mercies..."   │  │   │
│       │  │  [CHOICE]    ▢ Lament  ▢ Hope  ▢ Wait       │  │   │
│       │  │  [CAPTION] "His compassions fail not..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, hope affirmed)            │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏛️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JEREMIAH at rest (hero 3D)              │  │   │
│       │  │  📜  LAMENT & HOPE complete (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Great is thy faithfulness..."    │  │   │
│       │  │  [SCRIPTURE] "Lamentations 3:22-23"          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./jeremiah-design-source-of-truth.md) | [Music SOT](./jeremiah-music-source-of-truth.md) | [SFX SOT](./jeremiah-sfx-source-of-truth.md) | [Game Plan](./jeremiah-game-plan.md)
