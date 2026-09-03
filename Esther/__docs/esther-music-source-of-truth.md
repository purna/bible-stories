# Esther — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** Persian-court chamber folk.
- **Core instruments:** hammered dulcimer, plucked strings, frame drum, low fiddle, restrained guitar.
- **Recurring courage motif:** a hidden three-note figure that moves into the foreground when Esther speaks.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Banquet | Navigate the palace feast and hear Vashti’s refusal. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act1_The_Banquet.ogg` / `.mp3` |
| 2 | A New Queen | Prepare Esther while protecting her identity. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act2_A_New_Queen.ogg` / `.mp3` |
| 3 | The Gate Plot | Carry Mordecai’s warning into the royal record. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | courage motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act3_The_Gate_Plot.ogg` / `.mp3` |
| 4 | Haman’s Decree | Trace the decree as it spreads across the empire. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act4_Haman_S_Decree.ogg` / `.mp3` |
| 5 | For Such a Time | Fast, gather courage, and approach the throne. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act5_For_Such_A_Time.ogg` / `.mp3` |
| 6 | The First Banquet | Invite the king and Haman without revealing too soon. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act6_The_First_Banquet.ogg` / `.mp3` |
| 7 | The Sleepless Night | Find Mordecai’s forgotten service in the chronicles. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | courage motif: narrow the frequency range under pressure; restore air and upper register at release | `Act7_The_Sleepless_Night.ogg` / `.mp3` |
| 8 | The Second Banquet | Name the threat clearly at the decisive moment. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act8_The_Second_Banquet.ogg` / `.mp3` |
| 9 | A New Decree | Send defensive orders before the deadline. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | courage motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act9_A_New_Decree.ogg` / `.mp3` |
| 10 | Purim | Assemble gifts, food, and remembrance for every district. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | courage motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Purim.ogg` / `.mp3` |

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
