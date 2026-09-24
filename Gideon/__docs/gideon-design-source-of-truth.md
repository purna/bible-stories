# Gideon — Design Source of Truth

<!-- act-summary:start -->
## Story and act summary

**Story question:** *When God calls the unlikely, will we trust His strength over our own?*

This source of truth covers seven acts. The links lead to narrative and visual briefs; final panel IDs and per-panel camera/animation specifications remain production work.

- [Act 1: The Winepress](#act-1-the-winepress) — Threshing in fear, the Angel appears.
- [Act 2: The Sign](#act-2-the-sign) — Fire consumes the offering on the rock.
- [Act 3: The Fleece](#act-3-the-fleece) — Dew on wool, ground dry; then ground wet, wool dry.
- [Act 4: The Army Reduced](#act-4-the-army-reduced) — 32,000 → 10,000 after the fearful depart → 300 after the water test.
- [Act 5: The Dream](#act-5-the-dream) — Barley cake tumbles the Midianite tent.
- [Act 6: The Battle](#act-6-the-battle) — Trumpets, jars, torches: "For the Lord and for Gideon!"
- [Act 7: The Victory](#act-7-the-victory) — Pursuit, kingship refused, the ephod becomes a snare; forty years of rest.
<!-- act-summary:end -->

## Authority and review status

Revised 23 September 2026. These four Markdown files form one documentation set:

- [Design source of truth](gideon-design-source-of-truth.md): story scope, act names, canon, characters, materials and visual direction.
- [Game plan](gideon-game-plan.md): playable actions, completion, controls and accessibility.
- [Music source of truth](gideon-music-source-of-truth.md): score identity, cue filenames and music delivery.
- [SFX source of truth](gideon-sfx-source-of-truth.md): environmental/action cues, triggers and effects delivery.

Scripture controls events; the design document controls their adaptation. Each specialist file owns its detailed contract; linked summaries do not override it. “Act” and “chapter” mean the same numbered unit, 1–7.

This is a documentation revision, not confirmation of a working implementation. The supplied set did not include `gideon-story.json`, the Gideon runtime, audio assets, `__Template`, character presets or Texture Forge. Their paths and interfaces below are integration requirements to verify, not claims that they already exist. Prototype filenames are references for adaptation, not Gideon-ready implementations.

## Canon and purpose

- **Primary text:** Judges 6–8
- **Core question:** *When God calls the unlikely, will we trust His strength over our own?*
- **Format:** interactive comic with SVG background and foreground layers, optional Three.js middle ground, then character and dialogue overlays.
- **Rule:** Scripture controls plot outcomes. Player choices change participation, viewpoint, pacing, or reflection—not the canonical event.

## Visual language

Use readable silhouettes, hand-made material texture, restrained parallax, and one clear focal action per panel. Background SVG establishes place and weather; middle-ground 3D is reserved for spatial play or a tactile hero prop; foreground SVG frames depth and interaction. Keep violence non-gratuitous and never turn suffering into spectacle.

Midianite oppression: dust, ash, thorns, iron. Israelite hiding: caves, winepresses, dim light. God's intervention: fire, dew, barley cake, trumpet blast, sudden light.

## Character canon

| Asset key | Character | Continuity note |
|---|---|---|
| `gideon` | Gideon | Lead character; keep identity consistent across acts. Son of Joash, an Abiezrite of Manasseh; describes himself as least in his family (translation wording varies). Do not infer a child protagonist. |
| `angel` | Angel of the Lord | Appears in Acts 1-2. Staff in hand; Gideon recognizes the encounter after the sign. Do not require an initially terrifying appearance or wings; these are not specified. |
| `joash` | Joash | Gideon's father. Named in Act 1; speaks in the Act 2 bridge (6:25–32). |
| `midianite_soldier` | Midianite Soldier | Appears in Acts 4-6. Camp includes many camels; do not depict every soldier as mounted. Two distinct soldiers speak in Act 5. |
| `midianite_king` | Zebah and Zalmunna | Shared archetype with two distinct named variants; kings in Act 7, not Oreb and Zeeb (leaders in 7:25). |
| `purah` | Purah | Gideon’s servant accompanying him in Act 5; KJV spells the name Phurah. |
| `ephraimite` | Ephraimite Warrior | Appears in Act 7. Angry they weren't called earlier. |
| `israelite_warrior` | Israelite Warrior (300) | The 300 chosen men. Appear in Acts 4–7. |

Required inventory targets: `tools/character_presets.js` and `tools/character_presets.json`. Verify their schemas, then synchronize these keys, including `purah` and the two king variants. Narrated-only bridge figures do not require a new visual asset unless shown.

## Material canon

| Texture key | Material | Use |
|---|---|---|
| `wheat_stalks` | Wheat Stalks | Winepress threshing, God's provision. |
| `rock_surface` | Rock Surface | The offering rock, altar foundation. |
| `wool_fleece` | Wool Fleece | The fleece test, dew and dry. |
| `water_ripple` | Water Ripple | Spring of Harod, lapping test. |
| `clay_jar` | Clay Jar | Empty vessels holding torches. |
| `trumpet_horn` | Trumpet Horn | Ram's horn, the battle cry. |
| `torch_flame` | Torch Flame | Fire inside jars, sudden light. |
| `camel_hair` | Camel Hair | Midianite tents, vast encampment. |
| `tent_fabric` | Tent Fabric | Midianite camp, the dream tent. |
| `sword_iron` | Sword Iron | Restrained weapon detail; iron is an art direction choice, not a material specified for these swords in Judges. |

Texture Forge must expose only approved material keys. Add a material here before exposing it in the tool; actual tool inventory was not supplied.

## Interaction and accessibility

- Every chapter must work with pointer, keyboard, and touch.
- Never make precise timing the only route forward; include retry and reduced-motion behaviour.
- Caption all essential audio information and keep text readable over every layer.
- Keep chapter completion local and recoverable; no choice should erase story access.

## Production contract

Each chapter ships with story JSON, one background SVG, one foreground SVG, and—only where spatial interaction adds value—a small 3D scene module/data file. New asset keys and new SFX filenames use lowercase snake_case. Retain the established mixed-case music basenames listed in the music document as an explicit compatibility exception; Markdown and story JSON names retain their supplied kebab-case naming. The game plan is the chapter-level authority for the playable action.

## Story scope and scripture policy

Read [Judges 6–8 (KJV)](https://www.biblegateway.com/passage/?search=Judges+6-8&version=KJV) alongside the passage references below. [NIV](https://www.biblegateway.com/passage/?search=Judges+6%2C+7%2C+8&version=NIV) and [ESV](https://www.esv.org/verses/Judges%2B6%E2%80%938/) were used to check wording of the drinking test and names. Story summaries here are paraphrases. Select and record one licensed display translation before final dialogue; do not mix quotations from different translations without labels. The motif title “The Lord is with you” is a production label, not a sung lyric.

The playable adaptation ends at 8:28. Judges 8:29–35 is outside playable scope; an optional reading note may acknowledge Gideon’s later household, death and Israel’s relapse. Do not claim exhaustive coverage of all three chapters or permanent national faithfulness. Added movement, viewpoint and sensory detail must be labelled adaptation, not additional scripture facts.

## Act briefs

### Act 1: The Winepress

**Reference:** Judges 6:1–16; payoff focus 6:11–16. Briefly establish seven years of oppression, Israel’s cry and the prophet’s rebuke before the call. Gideon threshes wheat in hiding. Show his doubt and the promise of divine presence; the player’s response does not create the call.

Rock-cut winepress, ochre/umber/iron-grey palette, dust in a shaft of light; foreground wheat and pit edge frame Gideon. Restrained parallax, readable captions. The tree at Ophrah belongs to this encounter; do not assert that the pursuit later ends beneath it.

### Act 2: The Sign

**Reference:** Judges 6:17–35; interactive focus 6:17–24. Gideon prepares meat and unleavened bread, places them on the rock and pours broth. The angel touches the offering with his staff; fire rises from the rock, the angel vanishes, and Gideon receives reassurance and builds an altar.

Use `rock_surface`; the staff touch and fire are automatic story events after preparation. Avoid flashing fire. A short narrated bridge covers the separate night-time destruction of Baal’s altar, Joash’s response, the name Jerubbaal and the Spirit-led muster (6:25–35), before the fleece. Do not merge the two altars or sacrifices. This bridge adds no second mini-game.

### Act 3: The Fleece

**Reference:** Judges 6:36–40. Show both requests in order: wet fleece/dry ground, with a bowl of water wrung out; then dry fleece/dewy ground. Dew is not rainfall. God grants reassurance; do not present fleece testing as a universal instruction or reward for timing skill.

Foreground wool and ground must both be visible. Use labelled wet/dry states, texture and icons rather than shine or colour alone. Two discrete dawn reveals replace time pressure; keep musical sparkle separate from literal dew SFX.

### Act 4: The Army Reduced

**Reference:** Judges 7:1–8. Establish Harod. Of 32,000, 22,000 fearful men leave; 10,000 remain; the drinking test leaves 300 and sends away 9,700. Depict the selected men bringing water by hand to mouth. Avoid invented claims that they are more alert, morally superior or better fighters: the stated point is that Israel cannot boast of saving itself.

Wide silhouettes thin in two stages. A few representative drinker cards teach the distinction; never require 300 selections. Water ripples and hands carry the focal action. The 300 carry provisions and trumpets onward.

### Act 5: The Dream

**Reference:** Judges 7:9–15. Gideon and Purah approach the camp’s edge and hear one soldier recount a barley-bread dream and another interpret it. Gideon worships, then returns to his camp. The dream is not Gideon’s dream and the collapsing tent is not a real attack.

Night silhouettes, tent fabric and distant camels. Keep the dream inset visually distinct, caption both speakers and return clearly to the waking scene. Route selection is an adaptation; it cannot cause discovery, capture or an alternate outcome.

### Act 6: The Battle

**Reference:** Judges 7:16–25; main interaction 7:16–22, narrated pursuit bridge 7:23–25. Three companies of 100 follow Gideon at the start of the middle watch. Trumpets sound and jars break in a coordinated reveal; torches remain in left hands and trumpets in right hands. The men hold their positions as the Lord turns the enemy’s swords against one another.

Use one four-step guided sequence: signal trumpet → break jar/reveal torch → hold position with torch raised → advance the captioned cry. This is a readable staging of coordinated actions, not four separate tactical phases. All three companies respond within that sequence. No rhythm score, microphone input or combat mechanic. Final cry wording must follow the chosen translation of 7:20; do not merge it with 7:18 without checking the text.

Caption the ensuing flight; show no graphic injury. Explain other Israelites joining the pursuit and Ephraim’s capture of Oreb and Zeeb, without conflating these leaders with the kings in Act 7.

### Act 7: The Victory

**Reference:** Judges 8:1–28. Preserve order: Ephraim’s complaint and Gideon’s conciliatory answer (1–3), pursuit across the Jordan and capture of Zebah and Zalmunna (4–12), reprisals and the kings’ deaths (13–21), refusal of hereditary rule (22–23), the ephod becoming a snare (24–27), and forty years of rest during Gideon’s lifetime (28).

Use a non-graphic narrated summary for reprisals and deaths; do not make them a reward or playable execution. The sequence puzzle reconstructs this account using six labelled cards, including the ephod warning. No invented physical crown or empty throne. A calm Ophrah/rest image may close the act, but the text must retain the warning rather than equating military peace with unbroken faithfulness.

## Visual and musical continuity

Use bold comic silhouettes, halftone texture, theatrical light and tactile foreground props. The visual progression is dust → rock/fire → fleece/dew → water → night/dream → jar/torch → reflective rest. Ancient Near Eastern-inspired scoring uses lyre, reed flute, frame drum, low drones and shofar; this is artistic direction, not a claim of exact historical reconstruction.

The recurring two-phrase motif moves from fragmented uncertainty to a complete answer, then restrained resolution. Detailed arrangement, seven cue names and all delivery rules live only in the [music source of truth](gideon-music-source-of-truth.md). Physical fire, water, footsteps, jar breaks and signal horns live in the [SFX source of truth](gideon-sfx-source-of-truth.md), never baked into the score.
