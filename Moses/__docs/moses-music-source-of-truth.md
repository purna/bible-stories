# Moses — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** desert-frontier country.
- **Core instruments:** acoustic guitar, oud-like plucks, fiddle, frame drum, upright bass, wooden flute.
- **Recurring deliverance motif:** a hesitant two-note question that grows firm while a separate presence motif marks fire and covenant.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Child in the River | Guide the basket through reeds while Miriam keeps watch. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | deliverance motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act1_The_Child_In_The_River.ogg` / `.mp3` |
| 2 | The Burning Bush | Herd sheep, approach the fire, and answer the call. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | deliverance motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act2_The_Burning_Bush.ogg` / `.mp3` |
| 3 | Before the Throne | Match signs and warnings to each audience. | measured hammered pulse, plucked strings, low bass, restrained court percussion | 66–82 BPM; controlled minor with modal colour | deliverance motif: keep imperial rhythm rigid; loosen it when truth interrupts power | `Act3_Before_The_Throne.ogg` / `.mp3` |
| 4 | Passover Night | Prepare the meal and mark the doorway before departure. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | deliverance motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act4_Passover_Night.ogg` / `.mp3` |
| 5 | Through the Sea | Keep the people moving along the opened path. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | deliverance motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act5_Through_The_Sea.ogg` / `.mp3` |
| 6 | Bread in the Wilderness | Gather only enough manna for the day. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | deliverance motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act6_Bread_In_The_Wilderness.ogg` / `.mp3` |
| 7 | Sinai | Arrange the camp and carry the covenant words. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | deliverance motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act7_Sinai.ogg` / `.mp3` |
| 8 | The Golden Calf | Confront the idol and intercede for the people. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | deliverance motif: narrow the frequency range under pressure; restore air and upper register at release | `Act8_The_Golden_Calf.ogg` / `.mp3` |
| 9 | Forty Years | Navigate a provision-and-trust journey map. | harmonics, bowed drone, high sparse notes, motif fragments with generous space | 48–64 BPM or free pulse; suspended modal | deliverance motif: expand register rather than volume; let the vision arrive through subtraction and clarity | `Act9_Forty_Years.ogg` / `.mp3` |
| 10 | Mount Nebo | Appoint Joshua and identify the land from afar. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | deliverance motif: narrow the frequency range under pressure; restore air and upper register at release | `Act10_Mount_Nebo.ogg` / `.mp3` |

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
