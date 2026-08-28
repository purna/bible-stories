# Daniel — Design and Music Source of Truth

This is the canonical reference for the implemented Daniel comic and its chapter soundtrack. Keep it synchronized with `daniel-story.json` and the game-design documents in this folder.

## Status and Canon

- **Implementation:** Five playable acts in `daniel-story.json`.
- **Primary text:** Daniel 1–6, arranged as five dramatic acts.
- **Core question:** *Can conviction remain steady when empires demand compromise?*
- **Design thesis:** Faithfulness is quiet, repeated, and not dependent on rescue.
- **Emotional arc:** Exile → revelation → ordeal → judgment → steadfast deliverance.

## Visual Identity

Monumental Babylonian architecture, gold and lapis colour, furnace orange, feast-night violet, moonlit stone, and strong foreground silhouettes. Visions can become abstract and luminous, but Daniel himself remains calm and visually grounded.

## Musical Identity

Instrumental frontier-country meets ancient-court atmosphere. The human voice of the score is acoustic guitar, fiddle, low strings, and brushed percussion; imperial Babylon is represented by hammered dulcimer, deep frame drums, metallic resonance, and low drones. Daniel’s recurring **steadfast motif** is a simple five-note phrase that stays recognisable while the empire changes around it.

- No vocals or imitation of a specific artist or existing song.
- Daniel’s motif should be quieter than the royal material, never bombastic.
- Palace power may be rhythmically rigid; prayer should loosen the pulse and simplify harmony.
- Avoid generic “Middle Eastern” clichés and excessive ornamental soloing.

## Chapter Music Map

| # | Act | Narrative and emotion | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **The King’s Table** | Young exiles face assimilation and quietly hold the line. | Muted acoustic guitar, pizzicato bass, brushed snare, distant hammered tones. Tension remains controlled; the ending warms without triumphalism. | 70–78 BPM; Dorian. | `Act1_Blue_Shadows_at_Noon.ogg` then `.mp3` |
| 2 | **The Statue Dream** | A death threat, prayer, impossible revelation, and kingdoms yielding to God’s kingdom. | Sparse low drone and guitar harmonics expand into measured toms and pedal steel. The stone/kingdom reveal gets breadth, not a trailer climax. | 62–70 BPM; minor to modal major. | `Act2_Where_the_Kings_Kneel.ogg` then `.mp3` |
| 3 | **Seven Times Heated** | The friends refuse to bow even without a guarantee of rescue. Fire becomes a place of presence. | Dry stomp pulse, low fiddle ostinato, resonant metal, then suspended guitar and luminous steel inside the furnace. | 76–84 BPM; tense minor with open fifths. | `Act3_Seven_Times_Heated.ogg` then `.mp3` |
| 4 | **The Writing on the Wall** | Arrogant feast, supernatural interruption, judgment, and Babylon’s fall. | Uneasy saloon-piano fragments, bowed bass, ticking percussion, glass/metal accents. Stop or thin the rhythm at the hand’s appearance. | 56–64 BPM; chromatic minor. | `Act4_Seven_Lamps_Burning.ogg` then `.mp3` |
| 5 | **The Lions’ Den** | Conspiracy, ordinary prayer, sealed darkness, dawn, rescue, and a life of endurance. | Night guitar, low fiddle, brushed pulse like pacing footsteps; near-silence in the den, then restrained sunrise harmony. End with the steadfast motif intact. | 60–68 BPM; minor resolving to Mixolydian major. | `Act5_Shadows_on_the_Ridge.ogg` then `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, rendered as seamless OGG and MP3 pairs.
- OGG takes playback priority; MP3 is fallback.
- Keep dialogue space between roughly 500 Hz and 3 kHz; avoid constant lead lines.
- Prayer moments should work through subtraction, not added spectacle.
- Royal threats may use short stingers, but the background loop must remain readable and non-fatiguing.
- `Act6_Sunlight_on_the_Threshold` exists as an asset but is **not canonical** until a sixth act is added to `daniel-story.json`.

## Continuity Check

Every act should make the empire sound impressive but temporary. Daniel’s musical identity changes in age and orchestration, never in moral centre.
