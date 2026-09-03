# Babel — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** architectural work-song minimalism.
- **Core instruments:** wood blocks, frame drum, plucked strings, low reeds, hammered metal.
- **Recurring unity motif:** a shared rhythmic cell that becomes displaced and separates into new instrumental voices.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | One Language | Coordinate a village task with shared symbols. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | unity motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_One_Language.ogg` / `.mp3` |
| 2 | The Plain | Choose a safe settlement site. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | unity motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Plain.ogg` / `.mp3` |
| 3 | Bake the Bricks | Mix and fire bricks to the right strength. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | unity motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act3_Bake_The_Bricks.ogg` / `.mp3` |
| 4 | A Name for Ourselves | Sort motives behind the tower plan. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | unity motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act4_A_Name_For_Ourselves.ogg` / `.mp3` |
| 5 | The Tower Rises | Balance height, safety, and care for workers. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | unity motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act5_The_Tower_Rises.ogg` / `.mp3` |
| 6 | Confusion | Communicate using gesture and visual clues. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | unity motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act6_Confusion.ogg` / `.mp3` |
| 7 | Scattered | Guide families toward different horizons. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | unity motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Scattered.ogg` / `.mp3` |
| 8 | Nations | Complete a map mosaic celebrating many peoples. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | unity motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_Nations.ogg` / `.mp3` |

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
