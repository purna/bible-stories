# Noah — Design and Music Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *Will faithful care persist through long preparation, crisis, and waiting?*

This source of truth covers 10 acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.

- [Act 1: The Warning](#act-1-the-warning) — Accept the Ark blueprint.
- [Act 2: The Blueprint](#act-2-the-blueprint) — Measure the hull to the given proportions.
- [Act 3: The Long Build](#act-3-the-long-build) — Gather timber, fit planks, and seal with pitch.
- [Act 4: The Gathering](#act-4-the-gathering) — Pair animals and stock each pen.
- [Act 5: The Door Shuts](#act-5-the-door-shuts) — Finish the final checks and surrender control.
- [Act 6: Forty Days](#act-6-forty-days) — Feed, calm, and clean animal pens during the storm.
- [Act 7: The Long Wait](#act-7-the-long-wait) — Send raven and doves at the right intervals.
- [Act 8: Dry Ground](#act-8-dry-ground) — Release animals habitat by habitat.
- [Act 9: The Covenant](#act-9-the-covenant) — Build the altar and reveal the rainbow.
- [Act 10: The Vineyard](#act-10-the-vineyard) — Witness Noah’s failure and choose how the sons respond.
<!-- act-summary:end -->

This is the canonical reference for the ten-chapter Noah comic and its future soundtrack. Keep it synchronized with `data/story.json`.

## Status and Canon

- **Implementation:** Ten chapters.
- **Primary text:** Genesis 6–9.
- **Core question:** *What does faithful endurance look like when obedience is long, lonely, and imperfect?*
- **Emotional arc:** Warning → commitment → perseverance → wonder → terror → endurance → hope → release → covenant → human frailty.

## Visual Identity

Hand-built timber, dry earth, gathering animal pairs, ink-black storm clouds, cramped ark interiors, endless water, olive green, new-earth gold, and rainbow colour. Each scene needs a foreground focus: Noah’s axe, a pair of animals, the sealed door, a feeding bucket, the dove, muddy feet, the altar, or the vineyard cup.

## Musical Identity

Instrumental rural country-folk with wooden, weathered textures. Acoustic guitar, mandolin used sparingly, fiddle, upright bass, brushed snare, frame drum, wooden knocks, harmonica, and restrained pedal steel. A steady **building motif** represents obedience; a rising three-note **covenant motif** first appears almost invisibly before returning under the rainbow.

- No vocals, novelty animal music, or imitation of an existing performer.
- Rain and animal sounds should be ambience, not baked loudly into music loops.
- Chapters 2–3 may share material but must show the passage of decades.
- The final chapter must retain grace without pretending Noah is flawless.

## Chapter Music Map

| # | Chapter | Emotional purpose | Music direction | Tempo / mode | Planned filename |
|---|---|---|---|---|---|
| 1 | **The Warning** | Grief over violence; Noah listens and begins. | Low guitar, bowed fiddle, distant wooden knock; the building motif begins with one note missing. | 58–66 BPM; minor/Dorian. | `Act1_When_the_Earth_Went_Wrong.ogg` + `.mp3` |
| 2 | **The Blueprint** | An impossible instruction becomes practical work. | Measured finger-picking, pencil/wood taps, upright bass; precise and quietly daunting. | 72–80 BPM; modal major. | `Act2_Three_Hundred_Cubits.ogg` + `.mp3` |
| 3 | **The Build** | Decades of ridicule and repeated faithfulness. | Work-song rhythm without vocals: guitar, muted snare, woodblock, fiddle drone. Gradual density suggests passing years. | 80–88 BPM; Mixolydian. | `Act3_Plank_by_Plank.ogg` + `.mp3` |
| 4 | **The Gathering** | The impossible becomes visible as animals arrive in pairs. | Playful but dignified fiddle figures, pizzicato bass, light brushwork; wonder rather than comedy. | 88–96 BPM; bright modal major. | `Act4_Two_by_Two.ogg` + `.mp3` |
| 5 | **The Door** | Sky darkens, rain begins, and God shuts the door. Irreversibility. | Pulse slows; low tom, tremolo guitar, metallic latch stinger, harmony narrows after the door closes. | 60–68 BPM; dark minor. | `Act5_The_Door_From_Outside.ogg` + `.mp3` |
| 6 | **The Flood** | Relentless rain, loss, labour, and survival inside the ark. | Heavy 6/8 sway, low fiddle, bass, muted percussion. Repetition should feel exhausting but not sonically punishing. | 54–62 BPM; minor ostinato. | `Act6_Forty_Days_of_Rain.ogg` + `.mp3` |
| 7 | **The Waiting** | Ararat, raven, dove, olive leaf, and patient hope. | Sparse guitar with long rests; harmonica or high fiddle answers the dove. Covenant motif becomes audible at the olive leaf. | 52–60 BPM; suspended mode opening to major. | `Act7_The_Olive_Leaf.ogg` + `.mp3` |
| 8 | **Dry Ground** | The ramp lowers; life pours back into the world. Relief and movement. | Warm strummed guitar, fiddle, brushed snare, upright bass; broaden steadily without becoming a victory march. | 82–92 BPM; open major. | `Act8_Feet_on_Dry_Ground.ogg` + `.mp3` |
| 9 | **The Covenant** | Altar, promise, and rainbow. Sacred gratitude and awe. | Finger-picked guitar, luminous pedal steel, slow fiddle harmony. Full covenant motif, with room for silence at the rainbow. | 64–72 BPM; major with suspended colour. | `Act9_A_Promise_in_the_Clouds.ogg` + `.mp3` |
| 10 | **The Vineyard** | Noah’s failure and his sons’ quiet act of grace. A mature, unresolved ending. | Intimate guitar, low fiddle, almost no percussion. Briefly fracture the covenant motif, then restore it softly through the sons’ mercy. | 50–58 BPM; minor to ambiguous major. | `Act10_Grace_in_the_Tent.ogg` + `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, with seamless OGG and MP3 versions.
- OGG is the preferred playback source; MP3 is fallback.
- Build and flood chapters need sustainable rhythms that can repeat without fatigue.
- Keep thunder, rain, animals, doors, axes, birds, and crowd mockery as separately controllable effects.
- Music must leave space for narration and for `assets/audio/ping_pong.mp3`.
- Noah currently has no chapter music files; the planned filenames above are canonical production targets.

<!-- panel-scene-design:start -->
## Comic panel and scene direction

This is the canonical visual storyboard for production. Each chapter uses three principal panels: **A establishes**, **B carries the interaction**, and **C resolves and reflects**. Additional dialogue panels inherit the nearest principal panel’s palette, lighting, layers, lens, and motion; they may change character pose and caption placement but must not invent a new visual language without updating this document.

### Layer and motion contract

- **Background — SVG:** setting, sky, distant architecture/landscape, weather, and the lowest-frequency parallax. Never place an essential interactive target here.
- **Middle ground — characters + optional 3D:** the narrative action and at most one tactile hero prop. Use 3D only where depth improves the chapter action.
- **Foreground — SVG:** close framing shapes, symbolic props, atmosphere, and occasional occlusion. Foreground motion must not obscure faces, captions, or targets.
- **Camera:** text panels remain stable. Movement is slow, eased, and motivated by revelation, travel, or completion. Avoid continuous orbit, handheld shake, and large zooms.
- **Animation:** SVG and 3D movement starts at different phases so the scene feels layered. Pause nonessential loops while a choice is open. Provide a reduced-motion crossfade/pose alternative.
- **Approved Texture Forge inventory:** `wood_dark`, `water_fast`, `water_still`, `fabric_weave`, `stone`, `leaves`. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.

### Act 1: The Warning

**Act summary:** Accept the Ark blueprint.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 01A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `water_still` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “the warning”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 01B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `water_still` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “accept the ark blueprint”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 01C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 2: The Blueprint

**Act summary:** Measure the hull to the given proportions.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 02A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `water_fast` + `water_still` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “the blueprint”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 02B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `water_still` + `fabric_weave` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “measure the hull to the given proportions”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 02C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `fabric_weave` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 3: The Long Build

**Act summary:** Gather timber, fit planks, and seal with pitch.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 03A | Establish | near-black blue, cool slate, lamp amber, muted earth. single motivated shaft or lamp with rapid falloff. | `stone` + `wood_dark` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the long build”. MG: character group and optional low-detail 3D landmark. BG SVG: receding rock or masonry silhouettes with minimal detail. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow inward dolly; pull back only when safety or release arrives. | SVG: dust motes and thin light rays drift slowly. 3D: chains, stone, door, or lamp carries subtle weight and contact motion. Characters begin in readable held poses before any movement. |
| 03B | Interact | Increase local contrast around the action while retaining near-black blue, cool slate, lamp amber, muted earth. Key light follows the story’s real light source. | `wood_dark` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “gather timber, fit planks, and seal with pitch”. BG SVG: simplified receding rock or masonry silhouettes with minimal detail with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 03C | Resolve / reflect | Let the accent move toward a quieter near-black blue, cool slate, lamp amber, muted earth; lower saturation behind captions and preserve warm skin tones. | `water_still` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: receding rock or masonry silhouettes with minimal detail, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 4: The Gathering

**Act summary:** Pair animals and stock each pen.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 04A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `leaves` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing leaves, nearby silhouettes, and an edge prop tied to “the gathering”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 04B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “pair animals and stock each pen”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 04C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `water_still` + `leaves` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 5: The Door Shuts

**Act summary:** Finish the final checks and surrender control.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 05A | Establish | parchment cream, earth umber, muted teal, restrained gold. clear directional key with soft fill and readable silhouettes. | `stone` + `leaves` | Wide, three-plane tableau. FG SVG: framing stone, nearby silhouettes, and an edge prop tied to “the door shuts”. MG: character group and optional low-detail 3D landmark. BG SVG: layered landscape or architecture specific to the scripture setting. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. subtle parallax drift with a short eased push at the narrative turn. | SVG: atmosphere and cloth use slow staggered loops. 3D: one tactile hero prop carries the interaction; all secondary motion remains quiet. Characters begin in readable held poses before any movement. |
| 05B | Interact | Increase local contrast around the action while retaining parchment cream, earth umber, muted teal, restrained gold. Key light follows the story’s real light source. | `leaves` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “finish the final checks and surrender control”. BG SVG: simplified layered landscape or architecture specific to the scripture setting with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 05C | Resolve / reflect | Let the accent move toward a quieter parchment cream, earth umber, muted teal, restrained gold; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `stone` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered landscape or architecture specific to the scripture setting, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 6: Forty Days

**Act summary:** Feed, calm, and clean animal pens during the storm.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 06A | Establish | deep indigo, river teal, foam blue, wet silver. low raking light with broken water reflections. | `water_fast` + `water_still` | Wide, three-plane tableau. FG SVG: framing water fast, nearby silhouettes, and an edge prop tied to “forty days”. MG: character group and optional low-detail 3D landmark. BG SVG: waterline, cloud bank, and distant shore. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. slow lateral drift with a restrained rise on the reveal. | SVG: ripple paths, reeds, cloud bands, and spray loop at different parallax speeds. 3D: hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion. Characters begin in readable held poses before any movement. |
| 06B | Interact | Increase local contrast around the action while retaining deep indigo, river teal, foam blue, wet silver. Key light follows the story’s real light source. | `water_still` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “feed, calm, and clean animal pens during the storm”. BG SVG: simplified waterline, cloud bank, and distant shore with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 06C | Resolve / reflect | Let the accent move toward a quieter deep indigo, river teal, foam blue, wet silver; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `water_fast` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: waterline, cloud bank, and distant shore, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 7: The Long Wait

**Act summary:** Send raven and doves at the right intervals.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 07A | Establish | sandstone, ochre, dry umber, faded turquoise. broad hard sun or long amber dusk with strong silhouette edges. | `wood_dark` + `water_fast` | Wide, three-plane tableau. FG SVG: framing wood dark, nearby silhouettes, and an edge prop tied to “the long wait”. MG: character group and optional low-detail 3D landmark. BG SVG: layered ridges, heat haze, and an open horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. patient side-track or shallow forward drift that emphasizes distance. | SVG: dust, cloth edges, distant birds, and heat bands move sparingly. 3D: staff, pack, tent, or terrain marker sways or settles with weight. Characters begin in readable held poses before any movement. |
| 07B | Interact | Increase local contrast around the action while retaining sandstone, ochre, dry umber, faded turquoise. Key light follows the story’s real light source. | `water_fast` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “send raven and doves at the right intervals”. BG SVG: simplified layered ridges, heat haze, and an open horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 07C | Resolve / reflect | Let the accent move toward a quieter sandstone, ochre, dry umber, faded turquoise; lower saturation behind captions and preserve warm skin tones. | `water_still` + `wood_dark` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: layered ridges, heat haze, and an open horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 8: Dry Ground

**Act summary:** Release animals habitat by habitat.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 08A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `leaves` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing leaves, nearby silhouettes, and an edge prop tied to “dry ground”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 08B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “release animals habitat by habitat”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 08C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `water_still` + `leaves` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 9: The Covenant

**Act summary:** Build the altar and reveal the rainbow.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 09A | Establish | charcoal, ember red, burnt orange, covenant gold. hard fire key with warm bounce and deep cool shadows. | `fabric_weave` + `stone` | Wide, three-plane tableau. FG SVG: framing fabric weave, nearby silhouettes, and an edge prop tied to “the covenant”. MG: character group and optional low-detail 3D landmark. BG SVG: smoke layers, dark ridge, and heat-softened horizon. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. measured push-in that stops before the decisive moment. | SVG: embers, smoke curls, and heat shimmer rise asynchronously. 3D: flame-lit hero prop uses restrained emissive pulses; no explosive spectacle. Characters begin in readable held poses before any movement. |
| 09B | Interact | Increase local contrast around the action while retaining charcoal, ember red, burnt orange, covenant gold. Key light follows the story’s real light source. | `stone` + `wood_dark` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “build the altar and reveal the rainbow”. BG SVG: simplified smoke layers, dark ridge, and heat-softened horizon with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 09C | Resolve / reflect | Let the accent move toward a quieter charcoal, ember red, burnt orange, covenant gold; lower saturation behind captions and preserve warm skin tones. | `wood_dark` + `fabric_weave` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: smoke layers, dark ridge, and heat-softened horizon, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Act 10: The Vineyard

**Act summary:** Witness Noah’s failure and choose how the sons respond.

| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |
|---|---|---|---|---|---|---|
| 10A | Establish | leaf green, earth brown, barley gold, clear sky blue. soft morning light with leaf-patterned highlights. | `leaves` + `fabric_weave` | Wide, three-plane tableau. FG SVG: framing leaves, nearby silhouettes, and an edge prop tied to “the vineyard”. MG: character group and optional low-detail 3D landmark. BG SVG: rolling field, orchard line, and layered sky. Keep the objective in the brightest third. | Wide 28–35 mm equivalent, slightly above eye level. gentle crane or arc revealing the working space. | SVG: leaves, grasses, grain heads, and birds use staggered wind cycles. 3D: plants, baskets, animals, or tools respond to touch with small physical motion. Characters begin in readable held poses before any movement. |
| 10B | Interact | Increase local contrast around the action while retaining leaf green, earth brown, barley gold, clear sky blue. Key light follows the story’s real light source. | `fabric_weave` + `water_still` | Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “witness noah’s failure and choose how the sons respond”. BG SVG: simplified rolling field, orchard line, and layered sky with reduced saturation. | 40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes. | SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states. |
| 10C | Resolve / reflect | Let the accent move toward a quieter leaf green, earth brown, barley gold, clear sky blue; lower saturation behind captions and preserve warm skin tones. | `water_still` + `leaves` | Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: rolling field, orchard line, and layered sky, opened to leave negative space for the scripture reference. | 50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction. | SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut. |

### Panel acceptance checklist

A panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.
<!-- panel-scene-design:end -->
