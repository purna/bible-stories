# Moses — SFX Source of Truth

Canonical first-pass production SFX plan. Keep this synchronized with the story data and `assets/audio/sfx/`. Comic text such as **CRASH!** remains visual; these files are production audio.

## Direction

Effects should support the comic panels without competing with narration or music. Ambiences may loop with short crossfades; one-shots should be brief, readable, and used only on their named beat. Keep peaks below the music bus and avoid graphic or frightening realism.

## Approved Core Effects

| File | Scene | Trigger | Type |
|---|---|---|---|
| `wilderness_wind.mp3` | The wilderness | Desert journey | ambience |
| `red_sea_water.mp3` | The Red Sea | The waters divide | ambience |
| `sinai_thunder.mp3` | Mount Sinai | Thunder over the mountain | ambience |
| `burning_bush_reveal.mp3` | The burning bush | God calls Moses | one-shot |

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
| 1A | `act1_the_child_in_the_river_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | water, wind, timber or shoreline bed; 1.5–3 s loop crossfade, no obvious periodic event |
| 1B | `act1_the_child_in_the_river_interaction.mp3` | Player performs: Guide the basket through reeds while Miriam keeps watch. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 1C | `act1_the_child_in_the_river_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 2A | `act2_the_burning_bush_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 2B | `act2_the_burning_bush_interaction.mp3` | Player performs: Herd sheep, approach the fire, and answer the call. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 2C | `act2_the_burning_bush_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 3A | `act3_before_the_throne_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 3B | `act3_before_the_throne_interaction.mp3` | Player performs: Match signs and warnings to each audience. | interaction one-shot/set | breath, room hush and restrained revelation accent; provide light variants if repeated |
| 3C | `act3_before_the_throne_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 4A | `act4_passover_night_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | enclosed air, stone resonance, drips or distant exterior; 1.5–3 s loop crossfade, no obvious periodic event |
| 4B | `act4_passover_night_interaction.mp3` | Player performs: Prepare the meal and mark the doorway before departure. | interaction one-shot/set | pickup, container, pour or placement confirmations; provide light variants if repeated |
| 4C | `act4_passover_night_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 5A | `act5_through_the_sea_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | water, wind, timber or shoreline bed; 1.5–3 s loop crossfade, no obvious periodic event |
| 5B | `act5_through_the_sea_interaction.mp3` | Player performs: Keep the people moving along the opened path. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 5C | `act5_through_the_sea_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 6A | `act6_bread_in_the_wilderness_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | dry wind, cloth movement, footsteps and distant birds; 1.5–3 s loop crossfade, no obvious periodic event |
| 6B | `act6_bread_in_the_wilderness_interaction.mp3` | Player performs: Gather only enough manna for the day. | interaction one-shot/set | pickup, container, pour or placement confirmations; provide light variants if repeated |
| 6C | `act6_bread_in_the_wilderness_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 7A | `act7_sinai_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 7B | `act7_sinai_interaction.mp3` | Player performs: Arrange the camp and carry the covenant words. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 7C | `act7_sinai_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 8A | `act8_the_golden_calf_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | enclosed air, stone resonance, drips or distant exterior; 1.5–3 s loop crossfade, no obvious periodic event |
| 8B | `act8_the_golden_calf_interaction.mp3` | Player performs: Confront the idol and intercede for the people. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 8C | `act8_the_golden_calf_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 9A | `act9_forty_years_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | distant street, masonry work, wind and sparse voices; 1.5–3 s loop crossfade, no obvious periodic event |
| 9B | `act9_forty_years_interaction.mp3` | Player performs: Navigate a provision-and-trust journey map. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 9C | `act9_forty_years_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 10A | `act10_mount_nebo_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | enclosed air, stone resonance, drips or distant exterior; 1.5–3 s loop crossfade, no obvious periodic event |
| 10B | `act10_mount_nebo_interaction.mp3` | Player performs: Appoint Joshua and identify the land from afar. | interaction one-shot/set | soft selection tick, correction cue and completion chime; provide light variants if repeated |
| 10C | `act10_mount_nebo_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |

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
