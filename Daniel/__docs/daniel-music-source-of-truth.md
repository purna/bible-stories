# Daniel — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** ancient-court frontier music.
- **Core instruments:** acoustic guitar, hammered dulcimer, low strings, brushed percussion, metallic resonance.
- **Recurring steadfast motif:** a quiet five-note line that remains recognisable while imperial harmony changes.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Exile and the Table | Build a respectful ten-day food test. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | steadfast motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act1_Exile_And_The_Table.ogg` / `.mp3` |
| 2 | The Great Statue | Reassemble the dream and its meaning. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | steadfast motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act2_The_Great_Statue.ogg` / `.mp3` |
| 3 | The Furnace | Keep the three friends together through the fire maze. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | steadfast motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act3_The_Furnace.ogg` / `.mp3` |
| 4 | The Proud King | Tend the humbled king until his reason returns. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | steadfast motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act4_The_Proud_King.ogg` / `.mp3` |
| 5 | Writing on the Wall | Match the mysterious words to their warning. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | steadfast motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act5_Writing_On_The_Wall.ogg` / `.mp3` |
| 6 | The Lions’ Den | Maintain Daniel’s prayer rhythm despite the decree. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | steadfast motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act6_The_Lions_Den.ogg` / `.mp3` |
| 7 | Four Beasts | Identify symbols without attacking the vision. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | steadfast motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act7_Four_Beasts.ogg` / `.mp3` |
| 8 | The Ram and Goat | Track the vision’s movements on a map. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | steadfast motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act8_The_Ram_And_Goat.ogg` / `.mp3` |
| 9 | Seventy Weeks | Order prayer, confession, and hope. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | steadfast motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Seventy_Weeks.ogg` / `.mp3` |
| 10 | Final Vision | Carry the sealed message to the riverbank. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | steadfast motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act10_Final_Vision.ogg` / `.mp3` |

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
