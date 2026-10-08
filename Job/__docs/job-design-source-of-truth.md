# Job — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Can faith remain honest when suffering refuses a simple explanation?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: A Blameless Life](#act-1-a-blameless-life) — Tend Job’s household and practice generous justice.
- [Act 2: The Accuser](#act-2-the-accuser) — Observe the heavenly challenge without controlling it.
- [Act 3: Loss upon Loss](#act-3-loss-upon-loss) — Receive each messenger and sit with the silence.
- [Act 4: Seven Days](#act-4-seven-days) — Keep vigil without offering explanations.
- [Act 5: Job Speaks](#act-5-job-speaks) — Build an honest lament from grief and protest.
- [Act 6: The Friends](#act-6-the-friends) — Identify when counsel becomes accusation.
- [Act 7: Elihu](#act-7-elihu) — Listen, test claims, and resist easy scoring.
- [Act 8: Out of the Whirlwind](#act-8-out-of-the-whirlwind) — Explore questions about creation.
- [Act 9: Job Responds](#act-9-job-responds) — Release the demand to master every answer.
- [Act 10: Restoration](#act-10-restoration) — Rebuild community without treating new gifts as replacements.
<!-- act-summary:end -->

## Canon and purpose

- **Primary text:** Job 1–42
- **Core question:** *Can faith remain honest when suffering refuses a simple explanation?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `job` | Job | Supporting visual identity must remain consistent across chapters. |
| `jobs_wife` | Job’s Wife | Supporting visual identity must remain consistent across chapters. |
| `eliphaz` | Eliphaz | Supporting visual identity must remain consistent across chapters. |
| `bildad` | Bildad | Supporting visual identity must remain consistent across chapters. |
| `zophar` | Zophar | Supporting visual identity must remain consistent across chapters. |
| `elihu` | Elihu | Supporting visual identity must remain consistent across chapters. |
| `messenger` | Messenger | Supporting visual identity must remain consistent across chapters. |
| `young_job` | Young Job | Supporting visual identity must remain consistent across chapters. |
| `restored_daughter` | Restored Daughter | Supporting visual identity must remain consistent across chapters. |

The matching presets in `tools/character_presets.js` and `tools/character_presets.json` are the canonical tool inventory. Add a character here first, then add the same key to both preset files.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `desert_sand` | Desert Sand | Environment, prop, costume, or symbolic surface used by this story. |
| `stone` | Stone | Environment, prop, costume, or symbolic surface used by this story. |
| `fabric_weave` | Fabric Weave | Environment, prop, costume, or symbolic surface used by this story. |
| `wood_oak` | Wood Oak | Environment, prop, costume, or symbolic surface used by this story. |
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
- **Approved Texture Forge inventory:** `desert_sand`, `stone`, `fabric_weave`, `wood_oak`, `grass`, `water_still`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: A Blameless Life

**Act summary:** Tend Job’s household and practice generous justice.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “a blameless life”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `desert_sand` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “tend job’s household and practice generous justice”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `desert_sand` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01A — ESTABLISH (28–35mm, household, blameless life)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE threshold (stone)                        │   │
│       │  🪵 WOOD OAK gate (wood_oak)                       │   │
│       │  🐑 FLOCKS at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB overseeing (hero 3D)                │  │   │
│       │  │  👥  FAMILY gathered (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "This man was blameless..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01B — INTERACT (40–55mm, chest height, tending household) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS DISTRIBUTING center (wood+sand)          │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  🏜️  DESERT SAND ground (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED ESTATE, reduced saturation   │  │   │
│       │  │  👤  JOB practicing justice (hero 3D)        │  │   │
│       │  │  👥  SERVANTS receiving (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Job offered burnt offerings..."   │  │   │
│       │  │  [CHOICE]    ▢ Offer  ▢ Bless  ▢ Pray        │  │   │
│       │  │  [CAPTION] "Thus did Job continually..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 01C — RESOLVE (50mm, eye level, household at peace)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JOB at peace (hero 3D)                  │  │   │
│       │  │  🐑  FLOCKS grazing (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord blessed..."             │  │   │
│       │  │  [SCRIPTURE] "Job 1:5"                       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 2: The Accuser

**Act summary:** Observe the heavenly challenge without controlling it.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the accuser”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “observe the heavenly challenge without controlling it”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02A — ESTABLISH (28–35mm, heavenly court, accuser)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE pavement (stone)                         │   │
│       │  🧵 FABRIC WEAVE veil (fabric_weave)               │   │
│       │  ⚡ LIGHTNING at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  ☁️  LAYERED LANDSCAPE, heavenly setting     │  │   │
│       │  │  👤  ACCUSER before throne (hero 3D)         │  │   │
│       │  │  👑  GOD on throne (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "From going to and fro..."        │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02B — INTERACT (40–55mm, chest height, challenge made)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS CHALLENGING center (fabric+wood)         │   │
│       │  🧵 FABRIC WEAVE accusation (fabric_weave)         │   │
│       │  🪵 WOOD OAK scepter (wood_oak)                    │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  ☁️  SIMPLIFIED COURT, reduced saturation     │  │   │
│       │  │  👤  ACCUSER testing (hero 3D)               │  │   │
│       │  │  👑  GOD permitting (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Skin for skin..."                 │  │   │
│       │  │  [CHOICE]    ▢ Challenge  ▢ Permit  ▢ Weep   │  │   │
│       │  │  [CAPTION] "Behold, all that he has..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 02C — RESOLVE (50mm, eye level, challenge permitted)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  ☁️  COURT opened for scripture space        │  │   │
│       │  │  👤  ACCUSER departing (hero 3D)             │  │   │
│       │  │  ⚡  PERMISSION given (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "All that he has is in thy..."    │  │   │
│       │  │  [SCRIPTURE] "Job 1:12"                      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 3: Loss upon Loss

**Act summary:** Receive each messenger and sit with the silence.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “loss upon loss”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “receive each messenger and sit with the silence”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03A — ESTABLISH (28–35mm, messengers arriving, losses)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE torn garment (fabric_weave)       │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  🏃 MESSENGER at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB receiving (hero 3D)                 │  │   │
│       │  │  🏃  MESSENGERS arriving (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "There came a messenger..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03B — INTERACT (40–55mm, chest height, sitting in silence)│
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS CLASPED center (wood+grass)              │   │
│       │  🪵 WOOD OAK ash heap (wood_oak)                   │   │
│       │  🌿 GRASS dust (grass)                             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED LANDSCAPE, reduced sat.      │  │   │
│       │  │  👤  JOB sitting (hero 3D)                   │  │   │
│       │  │  🏃  MESSENGERS waiting (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "The Lord gave, and the Lord..."   │  │   │
│       │  │  [CHOICE]    ▢ Receive  ▢ Sit  ▢ Bless       │  │   │
│       │  │  [CAPTION] "In all this Job sinned not..."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 03C — RESOLVE (50mm, eye level, losses complete)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  JOB in ashes (hero 3D)                  │  │   │
│       │  │  🏃  MESSENGERS gone (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Naked came I out..."             │  │   │
│       │  │  [SCRIPTURE] "Job 1:21-22"                   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 4: Seven Days

**Act summary:** Keep vigil without offering explanations.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `wood_oak` + `grass` | Wide, three-plane tableau. FG SVG: framing wood oak, nearby silhouettes, and an edge prop tied to “seven days”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `grass` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “keep vigil without offering explanations”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `water_still` + `wood_oak` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04A — ESTABLISH (28–35mm, friends sitting, seven days)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK ground (wood_oak)                     │   │
│       │  🌿 GRASS dust (grass)                             │   │
│       │  👥 THREE FRIENDS at edge (placeholder)            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB suffering (hero 3D)                 │  │   │
│       │  │  👥  FRIENDS arriving (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "They sat down with him..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04B — INTERACT (40–55mm, chest height, keeping vigil)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS OVER HEART center (grass+water)          │   │
│       │  🌿 GRASS seat (grass)                             │   │
│       │  💧 WATER STILL tears (water_still)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED GROUND, reduced saturation   │  │   │
│       │  │  👤  JOB silent (hero 3D)                    │  │   │
│       │  │  👥  FRIENDS watching (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Seven days and seven nights..."   │  │   │
│       │  │  [CHOICE]    ▢ Sit  ▢ Weep  ▢ Pray           │  │   │
│       │  │  [CAPTION] "They saw that his grief..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 04C — RESOLVE (50mm, eye level, vigil kept)               │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  GROUND opened for scripture space       │  │   │
│       │  │  👤  JOB still (hero 3D)                     │  │   │
│       │  │  👥  FRIENDS waiting (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "No one spoke a word..."          │  │   │
│       │  │  [SCRIPTURE] "Job 2:13"                      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 5: Job Speaks

**Act summary:** Build an honest lament from grief and protest.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “job speaks”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “build an honest lament from grief and protest”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05A — ESTABLISH (28–35mm, ash heap, honest lament)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE ash heap (stone)                         │   │
│       │  🪵 WOOD OAK scraper (wood_oak)                    │   │
│       │  📜 LAMENT fragments at edge (placeholder)         │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB speaking (hero 3D)                  │  │   │
│       │  │  💨  WORDS forming (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Why died I not from..."          │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05B — INTERACT (40–55mm, chest height, building lament)   │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS BUILDING WORDS center (wood+grass)       │   │
│       │  🪵 WOOD OAK fragments (wood_oak)                  │   │
│       │  🌿 GRASS grief (grass)                            │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED HEAP, reduced saturation     │  │   │
│       │  │  👤  JOB protesting (hero 3D)                │  │   │
│       │  │  📜  LAMENT forming (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Let the day perish..."            │  │   │
│       │  │  [CHOICE]    ▢ Protest  ▢ Question  ▢ Trust  │  │   │
│       │  │  [CAPTION] "My complaint is bitter..."       │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 05C — RESOLVE (50mm, eye level, lament complete)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  HEAP opened for scripture space         │  │   │
│       │  │  👤  JOB spent (hero 3D)                     │  │   │
│       │  │  📜  LAMENT complete (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "My soul is weary..."             │  │   │
│       │  │  [SCRIPTURE] "Job 10:1"                      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 6: The Friends

**Act summary:** Identify when counsel becomes accusation.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the friends”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `wood_oak` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “identify when counsel becomes accusation”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `water_still` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06A — ESTABLISH (28–35mm, dark counsel, accusations)      │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE dark ground (stone)                      │   │
│       │  🪵 WOOD OAK lamp (wood_oak)                       │   │
│       │  ⛓️  CHAINS at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  RECEEDING MASONRY, minimal detail       │  │   │
│       │  │  👤  JOB defending (hero 3D)                 │  │   │
│       │  │  👥  THREE FRIENDS accusing (hero 3D)        │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Who is this that darkens..."     │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06B — INTERACT (40–55mm, chest height, identifying turn)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS SEPARATING center (wood+water)           │   │
│       │  🪵 WOOD OAK accusation (wood_oak)                 │   │
│       │  💧 WATER STILL truth (water_still)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  SIMPLIFIED COUNSEL, reduced saturation  │  │   │
│       │  │  👤  JOB listening (hero 3D)                 │  │   │
│       │  │  👥  FRIENDS becoming accusers (hero 3D)     │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Ye are miserable comforters..."   │  │   │
│       │  │  [CHOICE]    ▢ Identify  ▢ Refute  ▢ Endure  │  │   │
│       │  │  [CAPTION] "Ye have not spoken..."           │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 06C — RESOLVE (50mm, eye level, counsel exposed)          │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  💧 WATER STILL corner (water_still)               │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌑  COUNSEL opened for scripture space      │  │   │
│       │  │  👤  JOB steadfast (hero 3D)                 │  │   │
│       │  │  👥  FRIENDS silenced (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord said...not right..."    │  │   │
│       │  │  [SCRIPTURE] "Job 42:7"                      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 7: Elihu

**Act summary:** Listen, test claims, and resist easy scoring.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `desert_sand` + `stone` | Wide, three-plane tableau. FG SVG: framing desert sand, nearby silhouettes, and an edge prop tied to “elihu”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `stone` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “listen, test claims, and resist easy scoring”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `desert_sand` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07A — ESTABLISH (28–35mm, young voice, listening)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🏜️  DESERT SAND ground (desert_sand)             │   │
│       │  🪨 STONE listener (stone)                         │   │
│       │  📜 CLAIMS at edge (placeholder)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  ELIHU waiting (hero 3D)                 │  │   │
│       │  │  👤  JOB & FRIENDS silent (hero 3D)          │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I am young, and ye are old..."   │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07B — INTERACT (40–55mm, chest height, testing claims)    │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS WEIGHING center (stone+fabric)           │   │
│       │  🪨 STONE claims (stone)                           │   │
│       │  🧵 FABRIC WEAVE words (fabric_weave)              │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED LANDSCAPE, reduced sat.      │  │   │
│       │  │  👤  ELIHU speaking (hero 3D)                │  │   │
│       │  │  📜  CLAIMS tested (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Let me answer..."                 │  │   │
│       │  │  [CHOICE]    ▢ Test  ▢ Affirm  ▢ Resist      │  │   │
│       │  │  [CAPTION] "Great men are not always wise..."│  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 07C — RESOLVE (50mm, eye level, claims weighed)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  🏜️  DESERT SAND corner (desert_sand)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LANDSCAPE opened for scripture space    │  │   │
│       │  │  👤  ELIHU finished (hero 3D)                │  │   │
│       │  │  📜  CLAIMS weighed (hero 3D)                │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I will speak..."                 │  │   │
│       │  │  [SCRIPTURE] "Job 32:6-7"                    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 8: Out of the Whirlwind

**Act summary:** Explore questions about creation.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | midnight violet, ultramarine, pale cyan, star gold. motivated glow emerging from the vision against a subdued world. | `stone` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “out of the whirlwind”. MG: character group and optional low-detail 3D landmark. BG SVG: abstract horizon, layered cloud, and symbolic light field. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow orbit or vertical crane that returns to a grounded eye line. | SVG: stars, glyphs, cloud veils, and rays phase in rather than flash. 3D: symbolic objects rotate or assemble slowly with eased starts and stops. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining midnight violet, ultramarine, pale cyan, star gold. Key light follows the story’s real light source. | `fabric_weave` + `wood_oak` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “explore questions about creation”. BG SVG: simplified abstract horizon, layered cloud, and symbolic light field with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter midnight violet, ultramarine, pale cyan, star gold; lower saturation behind captions and preserve warm skin tones. | `wood_oak` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: abstract horizon, layered cloud, and symbolic light field, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08A — ESTABLISH (28–35mm, whirlwind, creation questions)  │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE foundation (stone)                       │   │
│       │  🧵 FABRIC WEAVE cloud (fabric_weave)              │   │
│       │  ⚡ LIGHTNING at edge (placeholder)                │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  ABSTRACT HORIZON, layered cloud, light  │  │   │
│       │  │  👤  JOB in whirlwind (hero 3D)              │  │   │
│       │  │  👑  GOD questioning (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "Where wast thou when..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08B — INTERACT (40–55mm, chest height, exploring answers) │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS EXPLORING center (fabric+wood)           │   │
│       │  🧵 FABRIC WEAVE questions (fabric_weave)          │   │
│       │  🪵 WOOD OAK creation (wood_oak)                   │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  SIMPLIFIED VISION, reduced saturation   │  │   │
│       │  │  👤  JOB hearing (hero 3D)                   │  │   │
│       │  │  🌍  CREATION unfolding (hero 3D)            │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "Who hath laid the measures..."    │  │   │
│       │  │  [CHOICE]    ▢ Explore  ▢ Wonder  ▢ Submit   │  │   │
│       │  │  [CAPTION] "Canst thou bind the sweet..."    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 08C — RESOLVE (50mm, eye level, questions complete)       │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪵 WOOD OAK corner (wood_oak)                     │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🌌  VISION opened for scripture space       │  │   │
│       │  │  👤  JOB humbled (hero 3D)                   │  │   │
│       │  │  🌍  CREATION vast (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I know that thou canst..."       │  │   │
│       │  │  [SCRIPTURE] "Job 42:2"                      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 9: Job Responds

**Act summary:** Release the demand to master every answer.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `fabric_weave` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “job responds”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “release the demand to master every answer”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09A — ESTABLISH (28–35mm, humbled, releasing demands)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🧵 FABRIC WEAVE garment (fabric_weave)            │   │
│       │  🪵 WOOD OAK staff (wood_oak)                      │   │
│       │  🌿 GRASS dust (grass)                             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB releasing (hero 3D)                 │  │   │
│       │  │  📜  DEMANDS falling (hero 3D)               │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "I have heard of thee..."         │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09B — INTERACT (40–55mm, chest height, repenting)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS REPENTING center (wood+grass)            │   │
│       │  🪵 WOOD OAK dust (wood_oak)                       │   │
│       │  🌿 GRASS humility (grass)                         │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED GROUND, reduced saturation   │  │   │
│       │  │  👤  JOB repenting (hero 3D)                 │  │   │
│       │  │  👑  GOD accepting (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "I abhor myself..."                │  │   │
│       │  │  [CHOICE]    ▢ Repent  ▢ Release  ▢ Trust    │  │   │
│       │  │  [CAPTION] "In dust and ashes..."            │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 09C — RESOLVE (50mm, eye level, demands released)         │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  🧵 FABRIC WEAVE corner (fabric_weave)             │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  GROUND opened for scripture space       │  │   │
│       │  │  👤  JOB at peace (hero 3D)                  │  │   │
│       │  │  👑  GOD restoring (hero 3D)                 │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord turned the captivity..."│  │   │
│       │  │  [SCRIPTURE] "Job 42:5-6"                    │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Act 10: Restoration

**Act summary:** Rebuild community without treating new gifts as replacements.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `wood_oak` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “restoration”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `wood_oak` + `grass` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “rebuild community without treating new gifts as replacements”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `grass` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

#### Visual layout snapshot

```text
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10A — ESTABLISH (28–35mm, community rebuilding)           │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🪨 STONE foundation (stone)                       │   │
│       │  🪵 WOOD OAK beams (wood_oak)                      │   │
│       │  👶 CHILDREN at edge (placeholder)                 │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  LAYERED LANDSCAPE, scripture setting    │  │   │
│       │  │  👤  JOB restored (hero 3D)                  │  │   │
│       │  │  👥  COMMUNITY gathering (hero 3D)           │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "The Lord blessed the latter..."  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10B — INTERACT (40–55mm, chest height, rebuilding)        │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🤲 HANDS BUILDING center (wood+grass)             │   │
│       │  🪵 WOOD OAK beams (wood_oak)                      │   │
│       │  🌿 GRASS new life (grass)                         │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  SIMPLIFIED ESTATE, reduced saturation   │  │   │
│       │  │  👤  JOB leading (hero 3D)                   │  │   │
│       │  │  👥  CHILDREN playing (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [BUBBLE] "So the Lord blessed..."           │  │   │
│       │  │  [CHOICE]    ▢ Build  ▢ Bless  ▢ Remember   │  │   │
│       │  │  [CAPTION] "Twice as much as before..."      │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
                                     ↓
┌─────────────────────────────────────────────────────────────────┐
│ PANEL 10C — RESOLVE (50mm, eye level, restoration complete)     │
├─────────────────────────────────────────────────────────────────┤
│  FG:  ╭────────────────────────────────────────────────────╮   │
│       │  🌿 GRASS corner (grass)                           │   │
│       │  🪨 STONE corner (stone)                           │   │
│       │  ┌──────────────────────────────────────────────┐  │   │
│       │  │  🏜️  ESTATE opened for scripture space       │  │   │
│       │  │  👤  JOB old and full of days (hero 3D)      │  │   │
│       │  │  👥  FOUR GENERATIONS (hero 3D)              │  │   │
│       │  │                                                │  │   │
│       │  │  [CAPTION] "So Job died, being old..."       │  │   │
│       │  │  [SCRIPTURE] "Job 42:16-17"                  │  │   │
│       │  └──────────────────────────────────────────────┘  │   │
│       ╰────────────────────────────────────────────────────╯   │
└─────────────────────────────────────────────────────────────────┘
```


### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->

---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./job-design-source-of-truth.md) | [Music SOT](./job-music-source-of-truth.md) | [SFX SOT](./job-sfx-source-of-truth.md) | [Game Plan](./job-game-plan.md)
