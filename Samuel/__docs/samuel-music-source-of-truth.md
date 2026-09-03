# Samuel — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** listening and kingship folk.
- **Core instruments:** lyre-like plucks, acoustic guitar, low fiddle, frame drum, wooden flute.
- **Recurring listening motif:** a quiet repeated call answered clearly on its third statement.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Boy at Shiloh | Complete temple tasks beside Eli. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_The_Boy_At_Shiloh.ogg` / `.mp3` |
| 2 | The Voice at Night | Listen three times and answer correctly. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | listening motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act2_The_Voice_At_Night.ogg` / `.mp3` |
| 3 | A Hard Message | Tell Eli the whole message without embellishment. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_A_Hard_Message.ogg` / `.mp3` |
| 4 | The Ark Captured | Track the cost of treating the Ark like a charm. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | listening motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act4_The_Ark_Captured.ogg` / `.mp3` |
| 5 | Ebenezer | Raise a memorial stone after deliverance. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_Ebenezer.ogg` / `.mp3` |
| 6 | A King Demanded | Hear the elders and explain the tradeoffs. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | listening motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act6_A_King_Demanded.ogg` / `.mp3` |
| 7 | Saul Chosen | Find Saul among the baggage. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Saul_Chosen.ogg` / `.mp3` |
| 8 | Saul’s First Victory | Rally the people and refuse revenge. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_Saul_S_First_Victory.ogg` / `.mp3` |
| 9 | The Rejected King | Compare obedience with impressive sacrifice. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | listening motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act9_The_Rejected_King.ogg` / `.mp3` |
| 10 | David Anointed | Look past height and choose the shepherd son. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | listening motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_David_Anointed.ogg` / `.mp3` |

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
