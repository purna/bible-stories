# SFX pickup list — Gideon

Source of truth: [Gideon — SFX Source of Truth](../../../__docs/gideon-sfx-source-of-truth.md)

Check off each planned cue when a suitable asset is sourced or created. These plans describe intended production audio; comic lettering such as “CRASH!” remains visual. Audio plays only when story data/runtime wiring triggers it.

## Chapter cue map

| Done | Cue | File(s) to source/create | Trigger and sound direction |
|---|---|---|---|
| [ ] | `act1_enter` | `act1_winepress_ambience.ogg` + `act1_winepress_ambience.mp3` fallback | Enter winepress / loop Dry sheltered air, distant restrained activity; no literal raider arrival implied. |
| [ ] | `act1_thresh` | `act1_wheat_thresh_{01,02,03}.ogg` + `act1_wheat_thresh_{01,02,03}.mp3` fallback | Visible thresh stroke / variant one-shot Wheat against stone, husk rustle; caption [Wheat rustles] when relevant. Stop strokes while dialogue takes focus. |
| [ ] | `act1_call` | `act1_call_settle.ogg` + `act1_call_settle.mp3` fallback | Call panel appears / one-shot Soft cloth/air settle, then space for captioned voice; no angel voice embedded in SFX. |
| [ ] | `act2_enter` | `act2_rock_ambience.ogg` + `act2_rock_ambience.mp3` fallback | Offering panel enters / loop Light outdoor air; restrained natural location tone. |
| [ ] | `act2_place` | `act2_offering_place_{01,02,03}.ogg` + `act2_offering_place_{01,02,03}.mp3` fallback | Meat or bread placement accepted / variant one-shot Basket/bread contact on rock; no repeated sound for invalid input. |
| [ ] | `act2_pour` | `act2_broth_pour.ogg` + `act2_broth_pour.mp3` fallback | Broth step accepted / one-shot Short liquid pour; caption [Broth pours onto the rock]. |
| [ ] | `act2_staff` | `act2_staff_touch.ogg` + `act2_staff_touch.mp3` fallback | Automatic staff contact / one-shot Small wood/stone contact; player does not control this action. |
| [ ] | `act2_fire` | `act2_rock_fire.ogg` + `act2_rock_fire.mp3` fallback | Fire reveal after staff contact / one-shot Brief controlled ignition/crackle, soft onset; caption [Fire rises from the rock]. |
| [ ] | `act2_bridge_muster` | `act2_muster_horn.ogg` + `act2_muster_horn.mp3` fallback | Narrated 6:34 muster beat / one-shot One distant gathering horn under caption [Gideon calls the people together]; no second mini-game. |
| [ ] | `act3_night` | `act3_fleece_night_ambience.ogg` + `act3_fleece_night_ambience.mp3` fallback | Either night panel / loop Low night air, restrained insects; fade at dawn. |
| [ ] | `act3_place` | `act3_fleece_place.ogg` + `act3_fleece_place.mp3` fallback | Fleece placed / one-shot Soft wool on ground. |
| [ ] | `act3_dawn` | `act3_fleece_dawn_ambience.ogg` + `act3_fleece_dawn_ambience.mp3` fallback | Either dawn reveal / loop Gentle morning air, no magical dew ping or rainfall. Wet/dry results conveyed explicitly by text/icons. |
| [ ] | `act3_wring` | `act3_fleece_wring.ogg` + `act3_fleece_wring.mp3` fallback | First dawn, wring into bowl / one-shot Small water trickle; caption [Water squeezed from the fleece]. Never play on second, dry-fleece dawn. |
| [ ] | `act4_enter` | `act4_harod_ambience.ogg` + `act4_harod_ambience.mp3` fallback | Harod establishment / loop Quiet spring water, sparse camp movement. |
| [ ] | `act4_depart` | `act4_army_depart.ogg` + `act4_army_depart.mp3` fallback | Each of two narrated reductions / one-shot Restrained receding group footsteps; visible counts distinguish 22,000 and 9,700 departures. |
| [ ] | `act4_drink` | `act4_water_drink_{01,02,03}.ogg` + `act4_water_drink_{01,02,03}.mp3` fallback | Example drinker demonstrated / variant one-shot Soft hand/water contact, no dog sounds. Labels and illustrations distinguish groups, not audio timbre. |
| [ ] | `act5_enter` | `act5_camp_night_ambience.ogg` + `act5_camp_night_ambience.mp3` fallback | Camp-edge scene enters / loop Wind/insects, distant camel movement and cloth; no intelligible uncaptioned dialogue. |
| [ ] | `act5_step` | `act5_cautious_step_{01,02,03}.ogg` + `act5_cautious_step_{01,02,03}.mp3` fallback | Safe waypoint accepted / variant one-shot Quiet footfall on dry ground; movement variant also serves arrival, no reward chime. |
| [ ] | `act5_dream` | `act5_dream_tent_fall.ogg` + `act5_dream_tent_fall.mp3` fallback | Dream inset collapse / one-shot Soft bread tumble, tent fabric and pole settle; caption [In the dream, the tent collapses]. Not a waking impact. |
| [ ] | `act6_enter` | `act6_battle_night_ambience.ogg` + `act6_battle_night_ambience.mp3` fallback | Before signal / loop Low night air; leave headroom for horns and jars. |
| [ ] | `act6_signal` | `act6_signal_horns.ogg` + `act6_signal_horns.mp3` fallback | First sequence step accepted / one-shot Controlled ensemble horn signal, no huge level jump; caption [The trumpets sound]. Duck musical shofar. |
| [ ] | `act6_jar` | `act6_jar_break_{01,02,03}.ogg` + `act6_jar_break_{01,02,03}.mp3` fallback | Second step accepted / one selected group-reveal variant Clay fracture with softened transient; caption [The jars break, revealing torches]. Do not stack 300 impacts. |
| [ ] | `act6_torch` | `act6_torch_flame.ogg` + `act6_torch_flame.mp3` fallback | Jar reveal until scene resolves / loop Low controlled flame under held torches, never masking cry captions. |
| [ ] | `act6_rout` | `act6_camp_flight.ogg` + `act6_camp_flight.mp3` fallback | After fourth step and captioned cry / one-shot Receding footsteps, cloth and restrained distant metal; no injury detail. Text explains divine action, sound alone cannot. |
| [ ] | `act7_pursuit` | `act7_jordan_ambience.ogg` + `act7_jordan_ambience.mp3` fallback | Narrated pursuit bridge / loop River air/water, restrained travel texture; stop before later interior/reflection images. |
| [ ] | `act7_place` | `act7_story_card_place_{01,02,03}.ogg` + `act7_story_card_place_{01,02,03}.mp3` fallback | A chronology card placed correctly / variant one-shot Quiet paper/wood contact; interface convention, not an object asserted by scripture. |
| [ ] | `act7_rest` | `act7_ophrah_rest_ambience.ogg` + `act7_ophrah_rest_ambience.mp3` fallback | Final rest panel after ephod warning / loop Light countryside air; no coronation fanfare, choir or ascension swell. |

## Delivery notes

- Keep narration clear and use restrained, plausible sounds; avoid harsh feedback.
- Use seamless OGG for ambience and short MP3/OGG one-shots as specified in the linked plan.
- Record creator/source, licence, edits, and final filename before shipping.
