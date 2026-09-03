# Elijah — Music Source of Truth

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** dry prophetic frontier folk.
- **Core instruments:** baritone guitar, fiddle, frame drum, wooden flute, restrained pedal steel.
- **Recurring calling motif:** a bold interval gradually reduced to the quietest clear statement at Horeb.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Drought | Follow ravens to daily bread by the brook. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | calling motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act1_The_Drought.ogg` / `.mp3` |
| 2 | The Widow’s Jar | Measure flour and oil without exhausting either. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | calling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Widow_S_Jar.ogg` / `.mp3` |
| 3 | The Child Restored | Carry the child upstairs and persist in prayer. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | calling motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act3_The_Child_Restored.ogg` / `.mp3` |
| 4 | Mount Carmel | Repair the altar with twelve stones. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | calling motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act4_Mount_Carmel.ogg` / `.mp3` |
| 5 | The Rain Returns | Spot the small cloud and race from the storm. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | calling motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act5_The_Rain_Returns.ogg` / `.mp3` |
| 6 | Under the Broom Tree | Rest, eat, and accept care before travelling. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | calling motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act6_Under_The_Broom_Tree.ogg` / `.mp3` |
| 7 | The Quiet Voice | Distinguish wind, quake, fire, and quiet. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | calling motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act7_The_Quiet_Voice.ogg` / `.mp3` |
| 8 | Naboth’s Vineyard | Expose the false testimony behind the seizure. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | calling motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act8_Naboth_S_Vineyard.ogg` / `.mp3` |
| 9 | Chariots of Fire | Cross the Jordan and pass the mantle to Elisha. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | calling motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act9_Chariots_Of_Fire.ogg` / `.mp3` |

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
