# Joseph — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** dream-to-court folk.
- **Core instruments:** lyre-like plucks, acoustic guitar, hammered dulcimer, upright bass, brushed drum.
- **Recurring providence motif:** a dreamlike five-note pattern whose hidden bass line becomes clear at reconciliation.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Coloured Robe | Assemble the robe and notice the family tension. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | providence motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_The_Coloured_Robe.ogg` / `.mp3` |
| 2 | Dreams and the Pit | Order the dreams, then find a path through betrayal. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | providence motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act2_Dreams_And_The_Pit.ogg` / `.mp3` |
| 3 | Potiphar’s House | Manage the household with integrity. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | providence motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_Potiphar_S_House.ogg` / `.mp3` |
| 4 | The Prison | Care for prisoners and interpret two dreams. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | providence motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act4_The_Prison.ogg` / `.mp3` |
| 5 | Pharaoh’s Dreams | Pair cows and grain with seven-year cycles. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | providence motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act5_Pharaoh_S_Dreams.ogg` / `.mp3` |
| 6 | Storehouses | Plan grain reserves across Egypt. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | providence motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act6_Storehouses.ogg` / `.mp3` |
| 7 | The Brothers Arrive | Test recognition while distributing food. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | providence motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_The_Brothers_Arrive.ogg` / `.mp3` |
| 8 | Benjamin’s Cup | Trace the hidden cup and Judah’s offer. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | providence motif: narrow the frequency range under pressure; restore air and upper register at release | `Act8_Benjamin_S_Cup.ogg` / `.mp3` |
| 9 | Revealed | Choose the moment Joseph names himself. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | providence motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Revealed.ogg` / `.mp3` |
| 10 | Goshen | Settle the family and preserve the famine record. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | providence motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Goshen.ogg` / `.mp3` |

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
