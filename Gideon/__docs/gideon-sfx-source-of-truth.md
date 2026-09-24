# Gideon — SFX Source of Truth

## Authority and review status

Revised 23 September 2026. These four Markdown files form one documentation set:

- [Design source of truth](gideon-design-source-of-truth.md): story scope, act names, canon, characters, materials and visual direction.
- [Game plan](gideon-game-plan.md): playable actions, completion, controls and accessibility.
- [Music source of truth](gideon-music-source-of-truth.md): score identity, cue filenames and music delivery.
- [SFX source of truth](gideon-sfx-source-of-truth.md): environmental/action cues, triggers and effects delivery.

Scripture controls events; the design document controls their adaptation. Each specialist file owns its detailed contract; linked summaries do not override it. “Act” and “chapter” mean the same numbered unit, 1–7.

This is a documentation revision, not confirmation of a working implementation. The supplied set did not include `gideon-story.json`, the Gideon runtime, audio assets, `__Template`, character presets or Texture Forge. Their paths and interfaces below are integration requirements to verify, not claims that they already exist. Prototype filenames are references for adaptation, not Gideon-ready implementations.

<!-- canonical-sfx-production:start -->
## Canonical SFX production specification

### Direction

Effects establish place, confirm physical interaction and clarify narrative change without competing with voice or music. Use plausible natural/material sounds; miracles use space, silence and restrained natural layers rather than oversized fantasy impacts. Violence remains non-graphic. No Enoch family-record, walking or ascension cues, and no royal-court ambience, belong in this story.

### Chapter cue map

Rows are narrative event IDs, **not verified story panel IDs**. Bind them to actual lines/panels in `gideon-story.json` when available; do not invent 1A/1B/1C scene coverage. All basenames below live under `assets/audio/sfx/`. Every listed cue ships as `.ogg` plus `.mp3` fallback; retain a WAV master outside the runtime bundle. A basename with `{01,02,03}` explicitly denotes three files in each codec. Select one variant and one codec per trigger.

| Event ID | Act / chapter | Canonical basename | Trigger / playback type | Sound, caption and treatment |
|---|---|---|---|---|
| `act1_enter` | 1: The Winepress | `act1_winepress_ambience` | Enter winepress / loop | Dry sheltered air, distant restrained activity; no literal raider arrival implied. |
| `act1_thresh` | 1: The Winepress | `act1_wheat_thresh_{01,02,03}` | Visible thresh stroke / variant one-shot | Wheat against stone, husk rustle; caption [Wheat rustles] when relevant. Stop strokes while dialogue takes focus. |
| `act1_call` | 1: The Winepress | `act1_call_settle` | Call panel appears / one-shot | Soft cloth/air settle, then space for captioned voice; no angel voice embedded in SFX. |
| `act2_enter` | 2: The Sign | `act2_rock_ambience` | Offering panel enters / loop | Light outdoor air; restrained natural location tone. |
| `act2_place` | 2: The Sign | `act2_offering_place_{01,02,03}` | Meat or bread placement accepted / variant one-shot | Basket/bread contact on rock; no repeated sound for invalid input. |
| `act2_pour` | 2: The Sign | `act2_broth_pour` | Broth step accepted / one-shot | Short liquid pour; caption [Broth pours onto the rock]. |
| `act2_staff` | 2: The Sign | `act2_staff_touch` | Automatic staff contact / one-shot | Small wood/stone contact; player does not control this action. |
| `act2_fire` | 2: The Sign | `act2_rock_fire` | Fire reveal after staff contact / one-shot | Brief controlled ignition/crackle, soft onset; caption [Fire rises from the rock]. |
| `act2_bridge_muster` | 2: The Sign | `act2_muster_horn` | Narrated 6:34 muster beat / one-shot | One distant gathering horn under caption [Gideon calls the people together]; no second mini-game. |
| `act3_night` | 3: The Fleece | `act3_fleece_night_ambience` | Either night panel / loop | Low night air, restrained insects; fade at dawn. |
| `act3_place` | 3: The Fleece | `act3_fleece_place` | Fleece placed / one-shot | Soft wool on ground. |
| `act3_dawn` | 3: The Fleece | `act3_fleece_dawn_ambience` | Either dawn reveal / loop | Gentle morning air, no magical dew ping or rainfall. Wet/dry results conveyed explicitly by text/icons. |
| `act3_wring` | 3: The Fleece | `act3_fleece_wring` | First dawn, wring into bowl / one-shot | Small water trickle; caption [Water squeezed from the fleece]. Never play on second, dry-fleece dawn. |
| `act4_enter` | 4: The Army Reduced | `act4_harod_ambience` | Harod establishment / loop | Quiet spring water, sparse camp movement. |
| `act4_depart` | 4: The Army Reduced | `act4_army_depart` | Each of two narrated reductions / one-shot | Restrained receding group footsteps; visible counts distinguish 22,000 and 9,700 departures. |
| `act4_drink` | 4: The Army Reduced | `act4_water_drink_{01,02,03}` | Example drinker demonstrated / variant one-shot | Soft hand/water contact, no dog sounds. Labels and illustrations distinguish groups, not audio timbre. |
| `act5_enter` | 5: The Dream | `act5_camp_night_ambience` | Camp-edge scene enters / loop | Wind/insects, distant camel movement and cloth; no intelligible uncaptioned dialogue. |
| `act5_step` | 5: The Dream | `act5_cautious_step_{01,02,03}` | Safe waypoint accepted / variant one-shot | Quiet footfall on dry ground; movement variant also serves arrival, no reward chime. |
| `act5_dream` | 5: The Dream | `act5_dream_tent_fall` | Dream inset collapse / one-shot | Soft bread tumble, tent fabric and pole settle; caption [In the dream, the tent collapses]. Not a waking impact. |
| `act6_enter` | 6: The Battle | `act6_battle_night_ambience` | Before signal / loop | Low night air; leave headroom for horns and jars. |
| `act6_signal` | 6: The Battle | `act6_signal_horns` | First sequence step accepted / one-shot | Controlled ensemble horn signal, no huge level jump; caption [The trumpets sound]. Duck musical shofar. |
| `act6_jar` | 6: The Battle | `act6_jar_break_{01,02,03}` | Second step accepted / one selected group-reveal variant | Clay fracture with softened transient; caption [The jars break, revealing torches]. Do not stack 300 impacts. |
| `act6_torch` | 6: The Battle | `act6_torch_flame` | Jar reveal until scene resolves / loop | Low controlled flame under held torches, never masking cry captions. |
| `act6_rout` | 6: The Battle | `act6_camp_flight` | After fourth step and captioned cry / one-shot | Receding footsteps, cloth and restrained distant metal; no injury detail. Text explains divine action, sound alone cannot. |
| `act7_pursuit` | 7: The Victory | `act7_jordan_ambience` | Narrated pursuit bridge / loop | River air/water, restrained travel texture; stop before later interior/reflection images. |
| `act7_place` | 7: The Victory | `act7_story_card_place_{01,02,03}` | A chronology card placed correctly / variant one-shot | Quiet paper/wood contact; interface convention, not an object asserted by scripture. |
| `act7_rest` | 7: The Victory | `act7_ophrah_rest_ambience` | Final rest panel after ephod warning / loop | Light countryside air; no coronation fanfare, choir or ascension swell. |

There is no mandatory “success resolve” sound in every act. Let narration, visual settling and silence carry reassurance, worship, moral warning and scripture reveals. In particular, play no celebratory effect beneath the ephod warning, reprisals or deaths. Narrated bridges without a listed physical cue may use silence or the currently appropriate ambience; do not add a second playable action.

Battle cries, the angel’s call, the two soldiers’ speech and narration are voice content with visible text; they are not music or uncaptioned ambience. Voice recording is optional and its asset manifest is outside these four documents. The Act 6 cry advances from a button/caption, never from microphone input. Its wording follows the selected translation as specified in the design document.

### Shared and interface effects

- The supplied shared UI convention is `assets/audio/ping_pong.mp3`; verify availability before integration and do not duplicate it inside story SFX folders. Ordinary navigation uses that UI family. A game action with a dedicated physical cue must not also trigger the ordinary button sound.
- Navigation, choice confirmation, and accessibility feedback must use the same shared UI family across stories.
- A wrong input may use a quiet neutral tick; never use a humiliating buzzer.

### File, mix, and runtime contract

- Runtime folder: `assets/audio/sfx/`. Line-triggered effects use `audioSfx`; multiple simultaneous cues use `audioSfxs`; chapter preload lists use `sfx`.
- For this revised Gideon set, deliver OGG and MP3 alternatives for every listed cue. Match decoded duration/loudness; check decoder padding and loop points in both formats. Retain WAV production masters outside the runtime bundle. Ambience loops should use 1.5–3 second boundary crossfades where appropriate, with no obvious periodic event; this is crossfade duration, not total loop length.
- Ambience should generally sit 12–20 dB below narration. One-shots must peak below -1 dBTP and be auditioned at the runtime’s default SFX gain. Avoid heavy limiting.
- Duck or pause nonessential ambience during quiet dialogue, choices, and scripture references. Stop all loops on chapter transition, replay, mute, or page hide.
- Randomised repeat sets should contain at least three variants with small pitch/gain variation; never retrigger the same variant rapidly.
- Every sourced effect requires credits: original filename, creator, license, source page, download date, edits, and final runtime filename. Do not rely on a search-results URL as the source.

### Accessibility and safety

Caption any effect that carries story information. Never encode success by sound alone. Avoid sudden extreme level changes, sustained sub-bass, graphic injury detail, and high-frequency alarm tones. Reduced-motion mode does not mute sound automatically; the global audio toggle must stop music and active SFX loops together.

### Approval checklist

Approve a cue only when its trigger is deterministic, filename matches this table, loop seams are inaudible, dialogue remains clear, repeated effects have variants, the mute control stops it, the visual supplies equivalent information, and its license/credit record is complete.


### Event and lifecycle contract

The field names `audioSfx`, `audioSfxs` and `sfx` are inherited interface targets, not a verified serialization schema. Resolve each basename to one supported codec; do not put OGG and MP3 alternatives into a simultaneous-cue array. Expand variant sets explicitly in preload manifests, choose one variant per occurrence and prevent rapid duplicate triggers. Keep repeatable footsteps/threshing separate from once-per-story-beat events.

Fire follows the automatic staff touch; first-dawn wringing cannot fire on second dawn; battle flight follows the four-step sequence, not a timer. Bind narrative events once, not on component re-render. On replay create a new event scope; cancel old queued events and sources. Never replay missed one-shots after an audio unlock or page return.

Master mute immediately stops music, voice, all effects (including active one-shots) and pending events. Provide separate music/SFX/voice gains. On hide stop/pause active sources, cancel pending one-shots and retain scene state; resume only current loops on return if permitted by user settings. On chapter transition, unmount or replay, dispose outgoing sources and listeners. Audio failure never prevents canonical completion. Reduced-motion and softened sound/flash settings are independent; no essential event depends on a flash, a stereo position or a loud transient.

### Integration acceptance

Check all seven chapter names and scripture spans against the design/game documents. Audition mute/unmute, page hide/return, replay, codec fallback, missing files, rapid repeated input and narration ducking. Confirm the actual story JSON uses each event only at the corresponding narrative state, every information-bearing sound has equivalent visible text, captions can be read without a time limit, and both music and effects respect the global control. Licensing checks concern delivered assets, which were not supplied for this review.
<!-- canonical-sfx-production:end -->
