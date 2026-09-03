# Adam — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** organic creation folk.
- **Core instruments:** wooden flute, lyre-like plucks, acoustic guitar, hand percussion, low strings.
- **Recurring breath motif:** four open notes that gain harmony as creation fills, then fragment after exile.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Formed from Dust | Gather the garden’s elements in creation order. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act1_Formed_From_Dust.ogg` / `.mp3` |
| 2 | The Garden | Name creatures by matching them to habitats. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act2_The_Garden.ogg` / `.mp3` |
| 3 | Together | Build a shared shelter and tend one plot together. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | breath motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act3_Together.ogg` / `.mp3` |
| 4 | The Boundary | Navigate abundance while leaving one tree untouched. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act4_The_Boundary.ogg` / `.mp3` |
| 5 | The Choice | Spot the serpent’s half-truths in a dialogue puzzle. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | breath motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_The_Choice.ogg` / `.mp3` |
| 6 | Hiding | Follow footprints and admit what happened. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | breath motif: narrow the frequency range under pressure; restore air and upper register at release | `Act6_Hiding.ogg` / `.mp3` |
| 7 | East of Eden | Pack seeds and begin cultivation outside the garden. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act7_East_Of_Eden.ogg` / `.mp3` |
| 8 | Cain and Abel | Prepare offerings with care, then cool Cain’s anger. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | breath motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_Cain_And_Abel.ogg` / `.mp3` |
| 9 | The Field | Witness consequence and mark a refuge path. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act9_The_Field.ogg` / `.mp3` |
| 10 | A New Line | Plant a family tree from Seth onward. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | breath motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act10_A_New_Line.ogg` / `.mp3` |

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
