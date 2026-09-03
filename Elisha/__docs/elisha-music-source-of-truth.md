# Elisha — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** pastoral miracle folk.
- **Core instruments:** acoustic guitar, wooden flute, pizzicato bass, hand percussion, gentle fiddle.
- **Recurring mercy motif:** a small descending phrase answered by a warm upward response.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Mantle | Leave the plough and follow Elijah. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act1_The_Mantle.ogg` / `.mp3` |
| 2 | The Jordan | Strike the water and cross. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | mercy motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act2_The_Jordan.ogg` / `.mp3` |
| 3 | The Widow’s Oil | Collect jars and pour without waste. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_The_Widow_S_Oil.ogg` / `.mp3` |
| 4 | The Shunammite Room | Arrange a simple guest room. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act4_The_Shunammite_Room.ogg` / `.mp3` |
| 5 | The Child | Climb to the room and persist in care. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_The_Child.ogg` / `.mp3` |
| 6 | Naaman | Guide the commander through seven Jordan immersions. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | mercy motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act6_Naaman.ogg` / `.mp3` |
| 7 | The Floating Axe | Mark where the borrowed iron fell. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | mercy motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act7_The_Floating_Axe.ogg` / `.mp3` |
| 8 | The Unseen Army | Reveal protection around the frightened servant. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act8_The_Unseen_Army.ogg` / `.mp3` |
| 9 | A Blind Feast | Lead enemies safely to a meal instead of an ambush. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | mercy motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act9_A_Blind_Feast.ogg` / `.mp3` |

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
