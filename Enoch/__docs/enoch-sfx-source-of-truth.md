# Enoch — SFX Source of Truth

<!-- canonical-sfx-production:start -->
## Canonical SFX production specification

### Direction

Effects establish place, confirm physical interaction, and clarify narrative change without competing with narration or music. Use historically plausible natural/material sounds where possible. Miracles should feel clear and awe-filled through space, silence, and layered natural sound—not oversized fantasy impacts. Violence remains non-graphic.

### Chapter cue map

| Panel | Canonical filename | Trigger | Type | Sound and treatment |
|---|---|---|---|---|
| 1A | `act1_a_family_record_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 1B | `act1_a_family_record_interaction.mp3` | Player performs: Place Enoch correctly in the generations. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 1C | `act1_a_family_record_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 2A | `act2_the_first_walk_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 2B | `act2_the_first_walk_interaction.mp3` | Player performs: Choose a daily route that serves neighbours. | interaction one-shot/set | soft selection tick, correction cue and completion chime; provide light variants if repeated |
| 2C | `act2_the_first_walk_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 3A | `act3_a_son_named_methuselah_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 3B | `act3_a_son_named_methuselah_interaction.mp3` | Player performs: Prepare the home for a new child. | interaction one-shot/set | pickup, container, pour or placement confirmations; provide light variants if repeated |
| 3C | `act3_a_son_named_methuselah_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 4A | `act4_years_of_faithfulness_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 4B | `act4_years_of_faithfulness_interaction.mp3` | Player performs: Complete repeated small acts without a fame meter. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 4C | `act4_years_of_faithfulness_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 5A | `act5_a_warning_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 5B | `act5_a_warning_interaction.mp3` | Player performs: Deliver a hard truth without cruelty. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 5C | `act5_a_warning_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 6A | `act6_walking_with_god_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 6B | `act6_walking_with_god_interaction.mp3` | Player performs: Follow a quiet path as the landscape changes. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 6C | `act6_walking_with_god_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 7A | `act7_taken_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 7B | `act7_taken_interaction.mp3` | Player performs: Let go of the route and enter the final light. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 7C | `act7_taken_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |

### Shared and interface effects

- All ordinary buttons use `assets/audio/ping_pong.mp3`; do not duplicate it inside story SFX folders.
- Navigation, choice confirmation, and accessibility feedback must use the same shared UI family across stories.
- A wrong input may use a quiet neutral tick; never use a humiliating buzzer.

### File, mix, and runtime contract

- Runtime folder: `assets/audio/sfx/`. Line-triggered effects use `audioSfx`; multiple simultaneous cues use `audioSfxs`; chapter preload lists use `sfx`.
- Deliver ambience as seamless OGG with MP3 fallback when required. Deliver short one-shots as high-quality MP3 or OGG; retain a WAV production master outside the runtime bundle.
- Ambience should generally sit 12–20 dB below narration. One-shots must peak below -1 dBTP and be auditioned at the runtime’s default SFX gain. Avoid heavy limiting.
- Duck or pause nonessential ambience during quiet dialogue, choices, and scripture references. Stop all loops on chapter transition, replay, mute, or page hide.
- Randomised repeat sets should contain at least three variants with small pitch/gain variation; never retrigger the same variant rapidly.
- Every sourced effect requires credits: original filename, creator, license, source page, download date, edits, and final runtime filename. Do not rely on a search-results URL as the source.

### Accessibility and safety

Caption any effect that carries story information. Never encode success by sound alone. Avoid sudden extreme level changes, sustained sub-bass, graphic injury detail, and high-frequency alarm tones. Reduced-motion mode does not mute sound automatically; the global audio toggle must stop music and active SFX loops together.

### Approval checklist

Approve a cue only when its trigger is deterministic, filename matches this table, loop seams are inaudible, dialogue remains clear, repeated effects have variants, the mute control stops it, the visual supplies equivalent information, and its license/credit record is complete.
<!-- canonical-sfx-production:end -->
