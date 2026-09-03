# Hannah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** intimate prayer folk.
- **Core instruments:** solo guitar, lyre, wooden flute, warm fiddle, minimal frame drum.
- **Recurring prayer motif:** a falling sigh transformed into a rising song of reversal.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Journey to Shiloh | Gather the household for the annual worship journey. | walking guitar, dry shaker, low fiddle, sparse flute | 60–76 BPM; Dorian or Aeolian | prayer motif: let repetition convey distance; age the motif through orchestration rather than tempo alone | `Act1_The_Journey_To_Shiloh.ogg` / `.mp3` |
| 2 | At the Table | Navigate hurt without retaliating. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | prayer motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act2_At_The_Table.ogg` / `.mp3` |
| 3 | Silent Prayer | Form Hannah’s prayer from honest fragments. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_Silent_Prayer.ogg` / `.mp3` |
| 4 | Misunderstood | Explain quiet prayer to Eli. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_Misunderstood.ogg` / `.mp3` |
| 5 | Remembered | Prepare for Samuel’s birth. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_Remembered.ogg` / `.mp3` |
| 6 | The Little Robe | Weave and size a yearly robe. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act6_The_Little_Robe.ogg` / `.mp3` |
| 7 | Given Back | Bring Samuel to serve at Shiloh. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Given_Back.ogg` / `.mp3` |
| 8 | Hannah’s Song | Arrange lines of reversal and hope. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | prayer motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_Hannah_S_Song.ogg` / `.mp3` |

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
