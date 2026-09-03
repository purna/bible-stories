# David — SFX Source of Truth

Canonical first-pass production SFX plan. Keep this synchronized with the story data and `assets/audio/sfx/`. Comic text such as **CRASH!** remains visual; these files are production audio.

## Direction

Effects should support the comic panels without competing with narration or music. Ambiences may loop with short crossfades; one-shots should be brief, readable, and used only on their named beat. Keep peaks below the music bus and avoid graphic or frightening realism.

## Approved Core Effects

| File | Scene | Trigger | Type |
|---|---|---|---|
| `army_crowd.mp3` | Battlefield | Armies gather | ambience |
| `shepherd_footsteps.mp3` | Pasture | David crosses the field | ambience |
| `sling_impact.mp3` | Goliath | The stone strikes | one-shot |
| `camp_fire.mp3` | Wilderness | Night camp and pursuit | ambience |

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
| 1A | `act1_anointed_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | enclosed air, stone resonance, drips or distant exterior; 1.5–3 s loop crossfade, no obvious periodic event |
| 1B | `act1_anointed_interaction.mp3` | Player performs: Identify the overlooked shepherd among Jesse’s sons. | interaction one-shot/set | soft selection tick, correction cue and completion chime; provide light variants if repeated |
| 1C | `act1_anointed_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 2A | `act2_goliath_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 2B | `act2_goliath_interaction.mp3` | Player performs: Time a sling throw after refusing heavy armour. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 2C | `act2_goliath_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 3A | `act3_saul_s_court_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 3B | `act3_saul_s_court_interaction.mp3` | Player performs: Play a calming melody while watching Saul’s mood. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 3C | `act3_saul_s_court_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 4A | `act4_covenant_friends_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 4B | `act4_covenant_friends_interaction.mp3` | Player performs: Exchange signals with Jonathan unseen. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 4C | `act4_covenant_friends_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 5A | `act5_the_wilderness_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | enclosed air, stone resonance, drips or distant exterior; 1.5–3 s loop crossfade, no obvious periodic event |
| 5B | `act5_the_wilderness_interaction.mp3` | Player performs: Escape Saul and spare him in the cave. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 5C | `act5_the_wilderness_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 6A | `act6_abigail_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 6B | `act6_abigail_interaction.mp3` | Player performs: Deliver provisions before anger becomes violence. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 6C | `act6_abigail_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 7A | `act7_the_throne_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 7B | `act7_the_throne_interaction.mp3` | Player performs: Resolve petitions without favouritism. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 7C | `act7_the_throne_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 8A | `act8_bathsheba_and_uriah_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 8B | `act8_bathsheba_and_uriah_interaction.mp3` | Player performs: Confront the irreversible harm rather than hiding it. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 8C | `act8_bathsheba_and_uriah_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 9A | `act9_nathan_s_parable_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 9B | `act9_nathan_s_parable_interaction.mp3` | Player performs: Recognise the king inside the story and repent. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 9C | `act9_nathan_s_parable_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 10A | `act10_absalom_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | distant street, masonry work, wind and sparse voices; 1.5–3 s loop crossfade, no obvious periodic event |
| 10B | `act10_absalom_interaction.mp3` | Player performs: Navigate divided loyalties without celebrating loss. | interaction one-shot/set | footsteps, cloth, terrain contact and destination arrival; provide light variants if repeated |
| 10C | `act10_absalom_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 11A | `act11_the_census_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | location-specific air, cloth and restrained distant activity; 1.5–3 s loop crossfade, no obvious periodic event |
| 11B | `act11_the_census_interaction.mp3` | Player performs: Choose responsibility during the plague. | interaction one-shot/set | soft selection tick, correction cue and completion chime; provide light variants if repeated |
| 11C | `act11_the_census_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |
| 12A | `act12_solomon_ambience.ogg` | Loop when establishing panel enters; fade beneath reflection | ambience loop | restrained room tone, cloth, distant court movement; 1.5–3 s loop crossfade, no obvious periodic event |
| 12B | `act12_solomon_interaction.mp3` | Player performs: Pass plans and wisdom to the next king. | interaction one-shot/set | one tactile action sound, one success settle and no failure buzzer; provide light variants if repeated |
| 12C | `act12_solomon_resolve.mp3` | Canonical outcome settles and scripture reference appears | narrative one-shot | 0.4–1.5 s restrained tonal/physical release; must not sound like an arcade reward |

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
