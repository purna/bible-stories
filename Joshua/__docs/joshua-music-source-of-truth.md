# Joshua — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** crossing-and-covenant frontier folk.
- **Core instruments:** frame drum, acoustic guitar, low strings, ram-horn colour, wooden flute.
- **Recurring courage motif:** a firm short phrase always anchored by a quieter instruction motif.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Be Strong | Meditate on the instruction before crossing. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_Be_Strong.ogg` / `.mp3` |
| 2 | Rahab and the Spies | Hide the scouts and mark the scarlet cord. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | courage motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act2_Rahab_And_The_Spies.ogg` / `.mp3` |
| 3 | Crossing Jordan | Carry twelve memorial stones from the riverbed. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | courage motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act3_Crossing_Jordan.ogg` / `.mp3` |
| 4 | Jericho | March the pattern, sound the trumpets, protect Rahab. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_Jericho.ogg` / `.mp3` |
| 5 | Achan’s Hidden Goods | Trace the community’s loss to the buried objects. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | courage motif: narrow the frequency range under pressure; restore air and upper register at release | `Act5_Achan_S_Hidden_Goods.ogg` / `.mp3` |
| 6 | Ai | Set the ambush without repeating earlier presumption. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act6_Ai.ogg` / `.mp3` |
| 7 | The Gibeonites | Inspect the worn supplies and face a rushed oath. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_The_Gibeonites.ogg` / `.mp3` |
| 8 | The Long Campaign | Resolve territory challenges without spectacle. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_The_Long_Campaign.ogg` / `.mp3` |
| 9 | Allot the Land | Distribute inheritance among tribes. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Allot_The_Land.ogg` / `.mp3` |
| 10 | Choose This Day | Place household stones beside the covenant witness. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | courage motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act10_Choose_This_Day.ogg` / `.mp3` |

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
