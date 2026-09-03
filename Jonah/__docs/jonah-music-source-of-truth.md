# Jonah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** maritime desert folk.
- **Core instruments:** acoustic guitar, low fiddle, frame drum, wooden flute, creaking percussion.
- **Recurring mercy motif:** a reluctant falling figure that turns upward when compassion widens.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Run to the Sea | Choose cargo and board the ship going the wrong way. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | mercy motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act1_Run_To_The_Sea.ogg` / `.mp3` |
| 2 | The Storm | Secure the deck and uncover Jonah’s flight. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | mercy motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act2_The_Storm.ogg` / `.mp3` |
| 3 | Into the Deep | Navigate sinking currents toward the great fish. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | mercy motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act3_Into_The_Deep.ogg` / `.mp3` |
| 4 | Prayer Below | Reassemble Jonah’s prayer from psalm fragments. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_Prayer_Below.ogg` / `.mp3` |
| 5 | Second Call | Walk the road to Nineveh. | walking guitar, dry shaker, low fiddle, sparse flute | 60–76 BPM; Dorian or Aeolian | mercy motif: let repetition convey distance; age the motif through orchestration rather than tempo alone | `Act5_Second_Call.ogg` / `.mp3` |
| 6 | The Warning | Deliver the short message through the great city. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | mercy motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act6_The_Warning.ogg` / `.mp3` |
| 7 | Nineveh Repents | Coordinate fasting from palace to livestock. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | mercy motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act7_Nineveh_Repents.ogg` / `.mp3` |
| 8 | The Plant | Manage shade, worm, and hot wind. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | mercy motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act8_The_Plant.ogg` / `.mp3` |
| 9 | The Question | Compare Jonah’s pity for a plant with God’s pity for a city. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | mercy motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act9_The_Question.ogg` / `.mp3` |

### Music production and runtime contract

- Compose instrumental masters only: no vocals, chant, choir, borrowed melody, or imitation of a named performer.
- Target 90–150 seconds for reading-led chapters and up to 180 seconds for sustained interaction. Deliver seamless **OGG** first and **MP3** fallback at matched duration and loudness.
- Music lives under `assets/audio/music/`; act data references the relative path in `audio`. Start chapter cues together with the scene and use 350–800 ms fades rather than hard restarts.
- Keep narration space clear, especially 500 Hz–3 kHz. Target approximately -16 LUFS integrated for music masters, true peak at or below -1 dBTP, then audition at the runtime’s default music gain.
- Do not bake rain, crowds, animals, fire, doors, impacts, or UI sounds into music. Those remain separately controllable SFX.
- For interactive chapters, stems may be **foundation**, **tension**, **presence/hope**, and **reflection**. Stems must share sample length and loop points.
- Every delivered track must have a credits entry recording composer/source, license, source URL, edit notes, and export date.

### Approval checklist

Approve a cue only when its loop is inaudible, narration remains clear on phone speakers, the recurring motif is identifiable without dominating, transitions match the panel camera movement, no SFX is baked into the master, OGG/MP3 duration matches, and licensing is documented.
<!-- canonical-music-production:end -->
