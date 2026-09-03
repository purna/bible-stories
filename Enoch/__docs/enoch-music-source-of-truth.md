# Enoch — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** meditative ancestral folk.
- **Core instruments:** solo guitar, wooden flute, soft lyre, bowed drone, sparse hand percussion.
- **Recurring walking motif:** an even three-step figure whose harmony changes while its pace remains faithful.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | A Family Record | Place Enoch correctly in the generations. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_A_Family_Record.ogg` / `.mp3` |
| 2 | The First Walk | Choose a daily route that serves neighbours. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_First_Walk.ogg` / `.mp3` |
| 3 | A Son Named Methuselah | Prepare the home for a new child. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_A_Son_Named_Methuselah.ogg` / `.mp3` |
| 4 | Years of Faithfulness | Complete repeated small acts without a fame meter. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_Years_Of_Faithfulness.ogg` / `.mp3` |
| 5 | A Warning | Deliver a hard truth without cruelty. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_A_Warning.ogg` / `.mp3` |
| 6 | Walking with God | Follow a quiet path as the landscape changes. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | walking motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act6_Walking_With_God.ogg` / `.mp3` |
| 7 | Taken | Let go of the route and enter the final light. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | walking motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Taken.ogg` / `.mp3` |

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
