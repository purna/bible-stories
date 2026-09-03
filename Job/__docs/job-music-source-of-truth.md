# Job — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** spare lament and creation music.
- **Core instruments:** solo guitar, bowed bass, low fiddle, wind textures, minimal hand percussion.
- **Recurring question motif:** an unresolved two-note call broadened—but not simplistically answered—by the whirlwind.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | A Blameless Life | Tend Job’s household and practice generous justice. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_A_Blameless_Life.ogg` / `.mp3` |
| 2 | The Accuser | Observe the heavenly challenge without controlling it. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Accuser.ogg` / `.mp3` |
| 3 | Loss upon Loss | Receive each messenger and sit with the silence. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_Loss_Upon_Loss.ogg` / `.mp3` |
| 4 | Seven Days | Keep vigil without offering explanations. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_Seven_Days.ogg` / `.mp3` |
| 5 | Job Speaks | Build an honest lament from grief and protest. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | question motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act5_Job_Speaks.ogg` / `.mp3` |
| 6 | The Friends | Identify when counsel becomes accusation. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | question motif: narrow the frequency range under pressure; restore air and upper register at release | `Act6_The_Friends.ogg` / `.mp3` |
| 7 | Elihu | Listen, test claims, and resist easy scoring. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Elihu.ogg` / `.mp3` |
| 8 | Out of the Whirlwind | Explore questions about creation. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | question motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act8_Out_Of_The_Whirlwind.ogg` / `.mp3` |
| 9 | Job Responds | Release the demand to master every answer. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | question motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Job_Responds.ogg` / `.mp3` |
| 10 | Restoration | Rebuild community without treating new gifts as replacements. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | question motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act10_Restoration.ogg` / `.mp3` |

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
