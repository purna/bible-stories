# Ruth — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** harvest and homecoming folk.
- **Core instruments:** finger-picked guitar, warm fiddle, upright bass, brushed percussion, wooden flute.
- **Recurring kindness motif:** a gentle paired phrase in which one voice consistently makes room for another.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Leaving Moab | Pack lightly and choose whether to accompany Naomi. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | kindness motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_Leaving_Moab.ogg` / `.mp3` |
| 2 | Your People | Follow the road to Bethlehem together. | walking guitar, dry shaker, low fiddle, sparse flute | 60–76 BPM; Dorian or Aeolian | kindness motif: let repetition convey distance; age the motif through orchestration rather than tempo alone | `Act2_Your_People.ogg` / `.mp3` |
| 3 | Gleaning | Collect only grain left for gleaners. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | kindness motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act3_Gleaning.ogg` / `.mp3` |
| 4 | Boaz Notices | Deliver water and protection instructions to the workers. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | kindness motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act4_Boaz_Notices.ogg` / `.mp3` |
| 5 | At the Threshing Floor | Follow Naomi’s plan with restraint and clarity. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | kindness motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_At_The_Threshing_Floor.ogg` / `.mp3` |
| 6 | At the Gate | Arrange witnesses and present the redemption choice. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | kindness motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act6_At_The_Gate.ogg` / `.mp3` |
| 7 | Redeemed | Transfer the sandal and join the households. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | kindness motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Redeemed.ogg` / `.mp3` |
| 8 | Obed | Build the family line toward David. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | kindness motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act8_Obed.ogg` / `.mp3` |

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
