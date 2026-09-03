# Jonah — SFX Source of Truth

Canonical first-pass production SFX plan. Keep this synchronized with the story data and `assets/audio/sfx/`. Comic text such as **CRASH!** remains visual; these files are production audio.

## Direction

Effects should support the comic panels without competing with narration or music. Ambiences may loop with short crossfades; one-shots should be brief, readable, and used only on their named beat. Keep peaks below the music bus and avoid graphic or frightening realism.

## Approved Core Effects

| File | Scene | Trigger | Type |
|---|---|---|---|
| `sea_waves.mp3` | The voyage | Ship at sea | ambience |
| `storm_wind.mp3` | The storm | Wind tears across the ship | ambience |
| `ocean_splash.mp3` | Overboard | Jonah hits the water | one-shot |
| `deep_bubbles.mp3` | Inside the fish | Underwater and great-fish movement | ambience |

## Interface Effect

All buttons continue to use `assets/audio/ping_pong.mp3`. It is not duplicated in the SFX folder.

## Runtime Integration

- Runtime path: `assets/audio/sfx/<file>`.
- Put that path in the triggering line's `audioSfx` field; the renderer calls `audio.playLineSfx(line)`.
- The audio manager discovers and preloads every line-level `audioSfx` entry.
- Prefer OGG for future seamless ambience masters; retain these MP3 downloads as traceable originals.
- Add later effects to `scripts/sfx-manifest.json` first, including their license and source page.

<!-- canonical-sfx-production:start -->
## Canonical SFX production specification

### Direction

Effects establish place, confirm physical interaction, and clarify narrative change without competing with narration or music. Use historically plausible natural/material sounds where possible. Miracles should feel clear and awe-filled through space, silence, and layered natural sound—not oversized fantasy impacts. Violence remains non-graphic.

### Chapter cue map

| Panel | Canonical filename | Trigger | Type | Sound and treatment |
|---|---|---|---|---|
| 1A | `act1_run_to_the_sea_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | water, wind, timber or shoreline bed; 1.5–3 s loop crossfade, no obvious periodic event |
| 1B | `act1_run_to_the_sea_interaction.mp3` | Player performs: Choose cargo and board the ship going the wrong way. | interaction one-shot/set | soft selection tick, correction cue and completion chime; provide light variants if repeated |
| 1C | `act1_run_to_the_sea_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 2A | `act2_the_storm_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | water, wind, timber or shoreline bed; 1.5–3 s loop crossfade, no obvious periodic event |
| 2B | `act2_the_storm_interaction.mp3` | Player performs: Secure the deck and uncover Jonah’s flight. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 2C | `act2_the_storm_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 3A | `act3_into_the_deep_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 3B | `act3_into_the_deep_interaction.mp3` | Player performs: Navigate sinking currents toward the great fish. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 3C | `act3_into_the_deep_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 4A | `act4_prayer_below_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 4B | `act4_prayer_below_interaction.mp3` | Player performs: Reassemble Jonah’s prayer from psalm fragments. | interaction one-shot/set | tool contact, material placement and completion settle; provide light variants if repeated |
| 4C | `act4_prayer_below_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 5A | `act5_second_call_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | dry wind, cloth movement, footsteps and distant birds; 1.5–3 s loop crossfade, no obvious periodic event |
| 5B | `act5_second_call_interaction.mp3` | Player performs: Walk the road to Nineveh. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 5C | `act5_second_call_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 6A | `act6_the_warning_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | distant street, masonry work, wind and sparse voices; 1.5–3 s loop crossfade, no obvious periodic event |
| 6B | `act6_the_warning_interaction.mp3` | Player performs: Deliver the short message through the great city. | interaction one-shot/set | breath, room hush and restrained revelation accent; provide light variants if repeated |
| 6C | `act6_the_warning_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 7A | `act7_nineveh_repents_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 7B | `act7_nineveh_repents_interaction.mp3` | Player performs: Coordinate fasting from palace to livestock. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 7C | `act7_nineveh_repents_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 8A | `act8_the_plant_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 8B | `act8_the_plant_interaction.mp3` | Player performs: Manage shade, worm, and hot wind. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 8C | `act8_the_plant_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 9A | `act9_the_question_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | distant street, masonry work, wind and sparse voices; 1.5–3 s loop crossfade, no obvious periodic event |
| 9B | `act9_the_question_interaction.mp3` | Player performs: Compare Jonah’s pity for a plant with God’s pity for a city. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 9C | `act9_the_question_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |

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
