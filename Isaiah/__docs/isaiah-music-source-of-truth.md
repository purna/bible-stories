# Isaiah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** visionary prophetic folk.
- **Core instruments:** low strings, acoustic guitar, hammered tones, high fiddle harmonics, frame drum.
- **Recurring holy motif:** three spaced notes around an open fifth, answered by a hopeful servant phrase.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | A City in Need | Identify worship separated from justice. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | holy motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act1_A_City_In_Need.ogg` / `.mp3` |
| 2 | The Holy Throne | Navigate the temple vision and answer the call. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | holy motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act2_The_Holy_Throne.ogg` / `.mp3` |
| 3 | The Vineyard Song | Tend a vineyard that yields injustice. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | holy motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act3_The_Vineyard_Song.ogg` / `.mp3` |
| 4 | Immanuel Sign | Carry hope to fearful King Ahaz. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | holy motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act4_Immanuel_Sign.ogg` / `.mp3` |
| 5 | The Assyrian Shadow | Map the advancing empire and the surviving stump. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | holy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_The_Assyrian_Shadow.ogg` / `.mp3` |
| 6 | Hezekiah’s Crisis | Bring the threatening letter into prayer. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | holy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act6_Hezekiah_S_Crisis.ogg` / `.mp3` |
| 7 | Comfort My People | Build a road of return through the wilderness. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | holy motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act7_Comfort_My_People.ogg` / `.mp3` |
| 8 | The Servant | Match suffering, justice, and healing motifs. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | holy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_The_Servant.ogg` / `.mp3` |
| 9 | New Creation | Restore a city garden where all can flourish. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | holy motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act9_New_Creation.ogg` / `.mp3` |

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
