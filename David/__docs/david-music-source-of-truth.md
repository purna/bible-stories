# David — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** shepherd-to-court folk drama.
- **Core instruments:** harp-like plucks, acoustic guitar, fiddle, low strings, frame drum, restrained brass colour.
- **Recurring heart motif:** a psalm-like phrase that can sound trusting, royal, broken, and repentant.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Anointed | Identify the overlooked shepherd among Jesse’s sons. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | heart motif: narrow the frequency range under pressure; restore air and upper register at release | `Act1_Anointed.ogg` / `.mp3` |
| 2 | Goliath | Time a sling throw after refusing heavy armour. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | heart motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_Goliath.ogg` / `.mp3` |
| 3 | Saul’s Court | Play a calming melody while watching Saul’s mood. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | heart motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act3_Saul_S_Court.ogg` / `.mp3` |
| 4 | Covenant Friends | Exchange signals with Jonathan unseen. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | heart motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act4_Covenant_Friends.ogg` / `.mp3` |
| 5 | The Wilderness | Escape Saul and spare him in the cave. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | heart motif: narrow the frequency range under pressure; restore air and upper register at release | `Act5_The_Wilderness.ogg` / `.mp3` |
| 6 | Abigail | Deliver provisions before anger becomes violence. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | heart motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act6_Abigail.ogg` / `.mp3` |
| 7 | The Throne | Resolve petitions without favouritism. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | heart motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act7_The_Throne.ogg` / `.mp3` |
| 8 | Bathsheba and Uriah | Confront the irreversible harm rather than hiding it. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | heart motif: narrow the frequency range under pressure; restore air and upper register at release | `Act8_Bathsheba_And_Uriah.ogg` / `.mp3` |
| 9 | Nathan’s Parable | Recognise the king inside the story and repent. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | heart motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act9_Nathan_S_Parable.ogg` / `.mp3` |
| 10 | Absalom | Navigate divided loyalties without celebrating loss. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | heart motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act10_Absalom.ogg` / `.mp3` |
| 11 | The Census | Choose responsibility during the plague. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | heart motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act11_The_Census.ogg` / `.mp3` |
| 12 | Solomon | Pass plans and wisdom to the next king. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | heart motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act12_Solomon.ogg` / `.mp3` |

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
