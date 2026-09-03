# Elisha — SFX Source of Truth

<!-- canonical-sfx-production:start -->
## Canonical SFX production specification

### Direction

Effects establish place, confirm physical interaction, and clarify narrative change without competing with narration or music. Use historically plausible natural/material sounds where possible. Miracles should feel clear and awe-filled through space, silence, and layered natural sound—not oversized fantasy impacts. Violence remains non-graphic.

### Chapter cue map

| Panel | Canonical filename | Trigger | Type | Sound and treatment |
|---|---|---|---|---|
| 1A | `act1_the_mantle_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 1B | `act1_the_mantle_interaction.mp3` | Player performs: Leave the plough and follow Elijah. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 1C | `act1_the_mantle_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 2A | `act2_the_jordan_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | water, wind, timber or shoreline bed; 1.5–3 s loop crossfade, no obvious periodic event |
| 2B | `act2_the_jordan_interaction.mp3` | Player performs: Strike the water and cross. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 2C | `act2_the_jordan_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 3A | `act3_the_widow_s_oil_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 3B | `act3_the_widow_s_oil_interaction.mp3` | Player performs: Collect jars and pour without waste. | interaction one-shot/set | pickup, container, pour or placement confirmations; provide light variants if repeated |
| 3C | `act3_the_widow_s_oil_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 4A | `act4_the_shunammite_room_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 4B | `act4_the_shunammite_room_interaction.mp3` | Player performs: Arrange a simple guest room. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 4C | `act4_the_shunammite_room_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 5A | `act5_the_child_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 5B | `act5_the_child_interaction.mp3` | Player performs: Climb to the room and persist in care. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 5C | `act5_the_child_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 6A | `act6_naaman_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 6B | `act6_naaman_interaction.mp3` | Player performs: Guide the commander through seven Jordan immersions. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 6C | `act6_naaman_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 7A | `act7_the_floating_axe_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 7B | `act7_the_floating_axe_interaction.mp3` | Player performs: Mark where the borrowed iron fell. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 7C | `act7_the_floating_axe_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 8A | `act8_the_unseen_army_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 8B | `act8_the_unseen_army_interaction.mp3` | Player performs: Reveal protection around the frightened servant. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 8C | `act8_the_unseen_army_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 9A | `act9_a_blind_feast_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 9B | `act9_a_blind_feast_interaction.mp3` | Player performs: Lead enemies safely to a meal instead of an ambush. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 9C | `act9_a_blind_feast_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |

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
