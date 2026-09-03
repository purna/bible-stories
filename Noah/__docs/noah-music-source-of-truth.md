# Noah — Music Source of Truth

Canonical reference for planning the chapter-by-chapter soundtrack. Keep synchronized with `data/story.json` and `__docs/noah-design-source-of-truth.md`.

## Core Identity

Instrumental rural country-folk with wooden, weathered textures. Acoustic guitar, mandolin (used sparingly), fiddle, upright bass, brushed snare, frame drum, wooden knocks, harmonica, and restrained pedal steel. A steady **building motif** represents obedience; a rising three-note **covenant motif** first appears almost invisibly before returning under the rainbow.

## Hard Rules

- No vocals, novelty animal music, or imitation of an existing performer.
- Rain and animal sounds are ambience, not baked loudly into music loops.
- Music must leave space for narration and `assets/audio/ping_pong.mp3`.
- Target 90–150 seconds per track, with seamless OGG (preferred) and MP3 (fallback) versions.
- Keep thunder, rain, animals, doors, axes, birds, and crowd mockery as separately controllable effects.

## Recurring Motifs

| Motif | Instrumentation | First appearance | Role |
|---|---|---|---|
| **Building motif** | Acoustic guitar + low fiddle + single woodblock tap | Ch.1 (one note missing) | Represents faithful, incremental obedience |
| **Covenant motif** | Pedal steel + fiddle harmony + open guitar strum | Ch.7 (barely audible at olive leaf) | Promise, grace, and new creation |

## Chapter Music Map

### Ch.1 · The Warning
- **Emotional purpose:** Grief over violence; Noah listens and begins.
- **Music direction:** Low guitar, bowed fiddle, distant wooden knock; the building motif begins with one note missing.
- **Tempo / mode:** 58–66 BPM; minor/Dorian.
- **Filename:** `Act1_When_the_Earth_Went_Wrong.ogg` + `.mp3`

### Ch.2 · The Blueprint
- **Emotional purpose:** An impossible instruction becomes practical work.
- **Music direction:** Measured finger-picking, pencil/wood taps, upright bass; precise and quietly daunting.
- **Tempo / mode:** 72–80 BPM; modal major.
- **Filename:** `Act2_Three_Hundred_Cubits.ogg` + `.mp3`

### Ch.3 · The Build
- **Emotional purpose:** Decades of ridicule and repeated faithfulness.
- **Music direction:** Work-song rhythm without vocals: guitar, muted snare, woodblock, fiddle drone. Gradual density suggests passing years.
- **Tempo / mode:** 80–88 BPM; Mixolydian.
- **Filename:** `Act3_Plank_by_Plank.ogg` + `.mp3`

### Ch.4 · The Gathering
- **Emotional purpose:** The impossible becomes visible as animals arrive in pairs.
- **Music direction:** Playful but dignified fiddle figures, pizzicato bass, light brushwork; wonder rather than comedy.
- **Tempo / mode:** 88–96 BPM; bright modal major.
- **Filename:** `Act4_Two_by_Two.ogg` + `.mp3`

### Ch.5 · The Door
- **Emotional purpose:** Sky darkens, rain begins, and God shuts the door. Irreversibility.
- **Music direction:** Pulse slows; low tom, tremolo guitar, metallic latch stinger, harmony narrows after the door closes.
- **Tempo / mode:** 60–68 BPM; dark minor.
- **Filename:** `Act5_The_Door_From_Outside.ogg` + `.mp3`

### Ch.6 · The Flood
- **Emotional purpose:** Relentless rain, loss, labour, and survival inside the ark.
- **Music direction:** Heavy 6/8 sway, low fiddle, bass, muted percussion. Repetition should feel exhausting but not sonically punishing.
- **Tempo / mode:** 54–62 BPM; minor ostinato.
- **Filename:** `Act6_Forty_Days_of_Rain.ogg` + `.mp3`

### Ch.7 · The Waiting
- **Emotional purpose:** Ararat, raven, dove, olive leaf, and patient hope.
- **Music direction:** Sparse guitar with long rests; harmonica or high fiddle answers the dove. Covenant motif becomes audible at the olive leaf.
- **Tempo / mode:** 52–60 BPM; suspended mode opening to major.
- **Filename:** `Act7_The_Olive_Leaf.ogg` + `.mp3`

### Ch.8 · Dry Ground
- **Emotional purpose:** The ramp lowers; life pours back into the world. Relief and movement.
- **Music direction:** Warm strummed guitar, fiddle, brushed snare, upright bass; broaden steadily without becoming a victory march.
- **Tempo / mode:** 82–92 BPM; open major.
- **Filename:** `Act8_Feet_on_Dry_Ground.ogg` + `.mp3`

### Ch.9 · The Covenant
- **Emotional purpose:** Altar, promise, and rainbow. Sacred gratitude and awe.
- **Music direction:** Finger-picked guitar, luminous pedal steel, slow fiddle harmony. Full covenant motif, with room for silence at the rainbow.
- **Tempo / mode:** 64–72 BPM; major with suspended colour.
- **Filename:** `Act9_A_Promise_in_the_Clouds.ogg` + `.mp3`

### Ch.10 · The Vineyard
- **Emotional purpose:** Noah's failure and his sons' quiet act of grace. A mature, unresolved ending.
- **Music direction:** Intimate guitar, low fiddle, almost no percussion. Briefly fracture the covenant motif, then restore it softly through the sons' mercy.
- **Tempo / mode:** 50–58 BPM; minor to ambiguous major.
- **Filename:** `Act10_Grace_in_the_Tent.ogg` + `.mp3`

## Production Notes

- Ch.2–3 may share material but must show the passage of decades.
- Ch.5 door-latch moment needs a distinct metallic stinger cue.
- Ch.7 olive-leaf moment is the first clear statement of the covenant motif — keep it small and fragile at first.
- Ch.9 rainbow moment should include a deliberate silence before or after the motif to let the visual land.
- The final chapter must retain grace without pretending Noah is flawless.

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

- **Style:** weathered rural country-folk.
- **Core instruments:** acoustic guitar, mandolin, fiddle, upright bass, brushed snare, frame drum.
- **Recurring building motif:** a steady construction figure joined by a rising covenant motif near the rainbow.
- **Narrative rule:** Music may shape tension, attention, and reflection, but it must not imply a non-canonical outcome or turn suffering into spectacle.

### Chapter cue map

| Ch. | Chapter | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif and dynamic shape | Master filenames |
|---:|---|---|---|---|---|---|
| 1 | The Warning | Accept the Ark blueprint. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | building motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act1_The_Warning.ogg` / `.mp3` |
| 2 | The Blueprint | Measure the hull to the given proportions. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | building motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act2_The_Blueprint.ogg` / `.mp3` |
| 3 | The Long Build | Gather timber, fit planks, and seal with pitch. | interlocking guitar and wooden percussion, low fiddle, bass | 72–88 BPM; modal major with firm pulse | building motif: add one layer as work progresses; cadence only when the section is genuinely complete | `Act3_The_Long_Build.ogg` / `.mp3` |
| 4 | The Gathering | Pair animals and stock each pen. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | building motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act4_The_Gathering.ogg` / `.mp3` |
| 5 | The Door Shuts | Finish the final checks and surrender control. | acoustic core ensemble with one story-signature instrument | 64–80 BPM; story-specific modal centre | building motif: support narration first; shape the chapter turn with density and register, not constant loudness | `Act5_The_Door_Shuts.ogg` / `.mp3` |
| 6 | Forty Days | Feed, calm, and clean animal pens during the storm. | rolling 6/8 guitar/bass, low fiddle, restrained frame drum | 54–70 BPM; minor or suspended modal | building motif: music sways beneath separately mixed water; harmony clears when passage or safety appears | `Act6_Forty_Days.ogg` / `.mp3` |
| 7 | The Long Wait | Send raven and doves at the right intervals. | solo guitar or low strings, muted pulse, distant high response | 48–62 BPM; minor with long rests | building motif: narrow the frequency range under pressure; restore air and upper register at release | `Act7_The_Long_Wait.ogg` / `.mp3` |
| 8 | Dry Ground | Release animals habitat by habitat. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | building motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act8_Dry_Ground.ogg` / `.mp3` |
| 9 | The Covenant | Build the altar and reveal the rainbow. | low pulse, bowed drone, sparse plucks; remove rhythm before the decisive fire beat | 64–76 BPM; dark Dorian opening to open fifths | building motif: hold silence around the revelation; one brief impact, never trailer percussion | `Act9_The_Covenant.ogg` / `.mp3` |
| 10 | The Vineyard | Witness Noah’s failure and choose how the sons respond. | finger-picking, light fiddle, upright bass, brushed or wooden pulse | 76–92 BPM; warm Mixolydian or modal major | building motif: use repeating work patterns with small human variations; avoid comic animal scoring | `Act10_The_Vineyard.ogg` / `.mp3` |

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
