# Abraham — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** desert-frontier folk.
- **Core instruments:** finger-picked guitar, oud-like plucks, fiddle, upright bass, frame drum.
- **Recurring promise motif:** a rising three-note phrase that begins unresolved and settles as trust matures.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Call | Follow the road markers out of Haran. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | promise motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act1_The_Call.ogg` / `.mp3` |
| 2 | Egypt and Return | Choose honest repairs after a fearful mistake. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | promise motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_Egypt_And_Return.ogg` / `.mp3` |
| 3 | Lot Chooses | Survey the land and give Lot first choice. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | promise motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_Lot_Chooses.ogg` / `.mp3` |
| 4 | Rescue of Lot | Plan a fast night rescue without taking spoil. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | promise motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act4_Rescue_Of_Lot.ogg` / `.mp3` |
| 5 | Covenant Stars | Trace the promised constellation. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | promise motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act5_Covenant_Stars.ogg` / `.mp3` |
| 6 | Hagar in the Wilderness | Find water and listen before acting. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | promise motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act6_Hagar_In_The_Wilderness.ogg` / `.mp3` |
| 7 | The Visitors | Prepare hospitality before the guests depart. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | promise motif: narrow the frequency range under pressure; restore air and upper register at release | `Act7_The_Visitors.ogg` / `.mp3` |
| 8 | Sodom and Gomorrah | Guide Lot’s household away without looking back. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | promise motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act8_Sodom_And_Gomorrah.ogg` / `.mp3` |
| 9 | Isaac Is Born | Assemble a celebration tent. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | promise motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Isaac_Is_Born.ogg` / `.mp3` |
| 10 | Moriah | Climb, gather wood, and respond to the provided ram. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | promise motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Moriah.ogg` / `.mp3` |

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
