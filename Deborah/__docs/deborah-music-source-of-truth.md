# Deborah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** Appalachian call-and-response.
- **Core instruments:** finger-picked guitar, dulcimer, fiddle, upright bass, brushed drum.
- **Recurring awake motif:** a two-phrase call and response that moves from distant to unified.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | Under the Palm | Hear disputes and restore a fair path. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | awake motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_Under_The_Palm.ogg` / `.mp3` |
| 2 | The Summons | Carry Deborah’s message to Barak. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | awake motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Summons.ogg` / `.mp3` |
| 3 | Gather at Tabor | Rally tribes without alerting Sisera. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | awake motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_Gather_At_Tabor.ogg` / `.mp3` |
| 4 | The Storm | Use the flooded ground to break the chariot advantage. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | awake motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act4_The_Storm.ogg` / `.mp3` |
| 5 | Sisera Flees | Track the fleeing commander to Jael’s tent. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | awake motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_Sisera_Flees.ogg` / `.mp3` |
| 6 | Jael’s Choice | Prepare hospitality, then protect the camp. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | awake motif: narrow the frequency range under pressure; restore air and upper register at release | `Act6_Jael_S_Choice.ogg` / `.mp3` |
| 7 | The Song | Rebuild the victory song in call-and-response. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | awake motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act7_The_Song.ogg` / `.mp3` |

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
