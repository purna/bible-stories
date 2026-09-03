# Jeremiah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** lamenting prophetic folk.
- **Core instruments:** baritone guitar, low fiddle, clay percussion, sparse flute, bowed drone.
- **Recurring tears-and-hope motif:** a descending lament with one persistent upward answering note.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Call | Touch the right words to the young prophet’s mouth. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | tears-and-hope motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_The_Call.ogg` / `.mp3` |
| 2 | The Almond Branch | Spot signs that God is watching over the word. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | tears-and-hope motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Almond_Branch.ogg` / `.mp3` |
| 3 | At the Temple Gate | Separate ritual confidence from justice. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | tears-and-hope motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act3_At_The_Temple_Gate.ogg` / `.mp3` |
| 4 | The Scroll | Dictate to Baruch and rebuild the burned scroll. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | tears-and-hope motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act4_The_Scroll.ogg` / `.mp3` |
| 5 | The Potter | Reshape the clay while it remains workable. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | tears-and-hope motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_The_Potter.ogg` / `.mp3` |
| 6 | The Yoke | Carry the warning despite Hananiah’s easy promise. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | tears-and-hope motif: narrow the frequency range under pressure; restore air and upper register at release | `Act6_The_Yoke.ogg` / `.mp3` |
| 7 | The Cistern | Coordinate Ebed-melech’s rope rescue. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | tears-and-hope motif: narrow the frequency range under pressure; restore air and upper register at release | `Act7_The_Cistern.ogg` / `.mp3` |
| 8 | Buy the Field | Complete a land purchase while siege closes in. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | tears-and-hope motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act8_Buy_The_Field.ogg` / `.mp3` |
| 9 | The Fall of Jerusalem | Guide survivors through the breached city. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | tears-and-hope motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act9_The_Fall_Of_Jerusalem.ogg` / `.mp3` |
| 10 | Lament and Hope | Pair grief lines with stubborn hope. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | tears-and-hope motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Lament_And_Hope.ogg` / `.mp3` |

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
