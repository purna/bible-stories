# Jacob — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** restless journey folk.
- **Core instruments:** finger-picked guitar, fiddle, hand drum, low drone, wooden flute.
- **Recurring wrestling motif:** an asymmetrical phrase that finally lands after the new name.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Birthright | Weigh hunger against a lasting inheritance. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_The_Birthright.ogg` / `.mp3` |
| 2 | The Stolen Blessing | Assemble the disguise, then witness its cost. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Stolen_Blessing.ogg` / `.mp3` |
| 3 | Bethel | Build the stone pillar after the ladder dream. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | wrestling motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act3_Bethel.ogg` / `.mp3` |
| 4 | Rachel at the Well | Move the stone and water the flock. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | wrestling motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act4_Rachel_At_The_Well.ogg` / `.mp3` |
| 5 | Laban’s Bargain | Track changing wages and wedding promises. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_Laban_S_Bargain.ogg` / `.mp3` |
| 6 | The Flocks | Sort speckled and spotted animals fairly. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | wrestling motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act6_The_Flocks.ogg` / `.mp3` |
| 7 | Leaving Haran | Pack the camp before Laban catches up. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act7_Leaving_Haran.ogg` / `.mp3` |
| 8 | The Night Wrestling | Hold on through the night and receive a new name. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | wrestling motif: narrow the frequency range under pressure; restore air and upper register at release | `Act8_The_Night_Wrestling.ogg` / `.mp3` |
| 9 | Meeting Esau | Arrange gifts, then step forward unarmed. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_Meeting_Esau.ogg` / `.mp3` |
| 10 | Joseph’s Coats | Recognise favouritism forming in the household. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | wrestling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act10_Joseph_S_Coats.ogg` / `.mp3` |

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
