# Nehemiah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** rebuilding work-song folk.
- **Core instruments:** acoustic guitar, wood blocks, frame drum, upright bass, fiddle.
- **Recurring rebuild motif:** a modular rhythmic phrase completed one piece at a time.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Bad News | Map Jerusalem’s broken gates while Nehemiah prays. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | rebuild motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act1_Bad_News.ogg` / `.mp3` |
| 2 | Before the King | Choose a clear request and realistic resources. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | rebuild motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act2_Before_The_King.ogg` / `.mp3` |
| 3 | Night Inspection | Survey ruined walls without alerting opponents. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | rebuild motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act3_Night_Inspection.ogg` / `.mp3` |
| 4 | Rise and Build | Assign families to adjacent wall sections. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | rebuild motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act4_Rise_And_Build.ogg` / `.mp3` |
| 5 | Sword and Trowel | Balance guarding with construction. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | rebuild motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_Sword_And_Trowel.ogg` / `.mp3` |
| 6 | The Outcry | Cancel exploitative debts and restore fields. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | rebuild motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act6_The_Outcry.ogg` / `.mp3` |
| 7 | Plots and Rumours | Recognise distractions designed to stop the work. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | rebuild motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Plots_And_Rumours.ogg` / `.mp3` |
| 8 | The Wall Completed | Close the final gap and set gatekeepers. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | rebuild motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act8_The_Wall_Completed.ogg` / `.mp3` |
| 9 | The Book Read | Rebuild the platform and help the people understand. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | rebuild motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act9_The_Book_Read.ogg` / `.mp3` |
| 10 | Reform | Inspect storerooms and restore shared commitments. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | rebuild motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Reform.ogg` / `.mp3` |

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
