# Gideon — Music Source of Truth

## Authority and review status

Revised 23 September 2026. These four Markdown files form one documentation set:

- [Design source of truth](gideon-design-source-of-truth.md): story scope, act names, canon, characters, materials and visual direction.
- [Game plan](gideon-game-plan.md): playable actions, completion, controls and accessibility.
- [Music source of truth](gideon-music-source-of-truth.md): score identity, cue filenames and music delivery.
- [SFX source of truth](gideon-sfx-source-of-truth.md): environmental/action cues, triggers and effects delivery.

Scripture controls events; the design document controls their adaptation. Each specialist file owns its detailed contract; linked summaries do not override it. “Act” and “chapter” mean the same numbered unit, 1–7.

This is a documentation revision, not confirmation of a working implementation. The supplied set did not include `gideon-story.json`, the Gideon runtime, audio assets, `__Template`, character presets or Texture Forge. Their paths and interfaces below are integration requirements to verify, not claims that they already exist. Prototype filenames are references for adaptation, not Gideon-ready implementations.

<!-- canonical-music-production:start -->
## Canonical music production specification

### Sound identity

Instrumental ancient Near Eastern-inspired music with restrained cinematic weight: frame drum, ram’s horn (shofar), lyre, reed flute, low drones and light hand percussion. Raw, tactile and spacious rather than glossy orchestral or trailer scoring. This is an artistic palette, not an archaeological reconstruction.

- No vocals, humming, chant, spoken word or choir in music masters. Narration and any optional captioned battle-cry recording are separate voice assets.
- Do not borrow an identifiable melody or imitate a named performer.
- Recurring **“The Lord is with you” motif**: two sequential phrases, a rising-fifth call and descending-fourth answer. Instrumental only; fragmented in Act 1, answered in Act 2, explored through Acts 3–4, confidently paired in Act 5 and fully doubled in Act 6. Act 7 resolves it reflectively.
- Lyre/flute carry doubt and quiet obedience; frame drum/drones suggest oppression; musical shofar suggests divine initiative. Diegetic signal horns belong to SFX and do not carry essential gameplay information alone.
- Avoid busy solos beneath text and avoid treating fear, death or reprisals as spectacle.

### Chapter cue map

Each basename below is preserved from the supplied Gideon design document. Deliver both `.ogg` and `.mp3` under `assets/audio/music/`, with case exactly as written. These are established naming exceptions to new lowercase snake_case assets. No Enoch audio filename is a valid Gideon alias.

| Act | Chapter / scripture coverage | Emotional/play purpose | Arrangement and development | Tempo / mode | Motif / dynamics | Canonical basename (.ogg and .mp3) |
|---:|---|---|---|---|---|---|
| 1 | The Winepress / Judges 6:1–16 | Fear, hiding, then the call. | Sparse low drone, distant soft frame-drum pulse and trembling lyre; a single high harmonic marks attention without a blast. | 48–54 BPM; Phrygian colour | Call fragment, answer withheld; subtle lift on encounter. | `Act1_Winepress_Call` |
| 2 | The Sign / Judges 6:17–35 | Preparation, fire, reassurance; then the altar/muster bridge. | Lyre arpeggio, restrained musical shofar call and clear answer. Leave space at staff/fire cue; transition to a quiet bridge bed. | 56–62 BPM; minor with a brighter answer | First complete answer; avoid implying the player produces the miracle. | `Act2_Fire_on_the_Rock` |
| 3 | The Fleece / Judges 6:36–40 | Two requests and two dawn confirmations. | Two textures in one loop: delicate plucked harmonics, then warmer low bowed/drone resonance. Lyre between reveals. Bell-like sparkle/cello-like warmth are optional timbral descriptions, not required modern instruments. | 52–58 BPM; introspective modal centre | Quiet call and answer; neither dawn is a failure or reward sting. | `Act3_Dew_and_Dry` |
| 4 | The Army Reduced / Judges 7:1–8 | Two reductions; dependence rather than superiority. | Frame-drum march thins first at the fearful departure, then at the selection of 300; spaced solo shofar over a skeletal pulse. Use density, not a literal count of 300 beats. | 60–66 BPM; progressively sparse | Motif remains recognizable as the ensemble shrinks. | `Act4_Three_Hundred` |
| 5 | The Dream / Judges 7:9–15 | Approach, overheard dream, worship and return. | Low sustained texture, descending reed-flute fragment for the dream, then lyre clarity. Crickets, wind and camp activity remain separate SFX. | 54–60 BPM; mysterious then clear | Call and answer become confidently paired; reserve fullest unison for Act 6. | `Act5_Barley_Cake` |
| 6 | The Battle / Judges 7:16–25 | Signal, reveal, holding position, rout. | Layered musical shofar and frame drum, with an arranged gap/duck for the diegetic signal. Energy comes from articulation, not a loudness jump. Sparse aftermath bed follows. No jar samples or battle cries in score. | 72–80 BPM; driving then resolving | Full call-and-answer motif doubled in unison by instruments; the two phrases remain sequential, not overlapping. | `Act6_Sword_of_the_Lord` |
| 7 | The Victory / Judges 8:1–28 | Aftermath, refusal, ephod warning and qualified rest. | Opening lyre figure returns resolved. Gentle final shofar and fading frame drum; thin harmony under consequences and ephod warning before spacious rest. Avoid continuous triumph beneath those passages. | 48–54 BPM; warm resolution with sober shading | Reflective completion; peace does not erase the warning. | `Act7_Forty_Years_Rest` |

### Music production and runtime contract

- Compose instrumental masters only: no vocals, chant, choir, borrowed melody, or imitation of a named performer.
- Target 90–150 seconds per base loop, up to 180 seconds where sustained interaction benefits. Reading is untimed, so every cue must loop indefinitely without advancing the story. Deliver seamless **OGG** first and **MP3** fallback at matched decoded musical duration and loudness; trim codec padding or define decoder-aware loop points. Verify both codecs in the target player, not merely equal file metadata durations.
- Music lives under `assets/audio/music/`; act data references the relative path in `audio`. Start with the current scene after the browser/user audio gate permits; use 350–800 ms fades rather than hard restarts. Do not replay an intro on every game input.
- Keep narration space clear, especially 500 Hz–3 kHz. Target approximately -16 LUFS integrated for music masters, true peak at or below -1 dBTP, then audition at the runtime’s default music gain.
- Do not bake rain, crowds, animals, fire, doors, impacts, or UI sounds into music. Those remain separately controllable SFX.
- For interactive chapters, stems may be **foundation**, **tension**, **presence/hope**, and **reflection**. Stems must share sample length and loop points.
- Every delivered track must have a credits entry recording composer/source, license, source URL, edit notes, and export date.

### Approval checklist

Approve a cue only when its loop is inaudible, narration remains clear on phone speakers, the recurring motif is identifiable without dominating, transitions match narrative states in both ordinary and reduced-motion modes, no SFX is baked into the master, OGG/MP3 duration matches, and licensing is documented.


### Narrative transitions and audio ownership

A base loop must remain safe beneath any reading pause. Timed arrangement alone must not determine when fire, dawn, reductions or battle occur. Where event-specific changes are required, use optional synchronized stems or authored transitions triggered by narrative state. Their final filenames/loop metadata must be registered before delivery; none are implied to exist here. Without that support, use a neutral base loop and gain ducking at the event.

Use the same scene events as SFX: Act 2 fire/reassurance; Act 3 each dawn; Act 4 each reduction; Act 5 dream/worship; Act 6 signal/rout; Act 7 consequences/ephod/rest. The game supplies state, never a guessed wall-clock timestamp. Do not delay Continue for the end of a cue.

Provide separate music, SFX and voice gains plus a master mute. Master mute immediately silences all active sources and cancels queued one-shots; normal crossfades must not delay mute. Stop outgoing sources on transition/replay/unmount, pause on page hide, and resume only the current scene on return when the saved audio preference permits. Music load failure is non-blocking. Codec alternatives play one at a time. Confirm how the runtime’s `audio` field expresses fallback and optional stems before integration.

Duck music under narration and essential physical horn cues; audition dialogue at runtime, since -16 LUFS is a delivery target rather than a mandated playback level. Musical shofar is not a substitute for the Act 6 signal SFX. Never bake fire, dew/water, crickets, footsteps, jar breaks, crowd sounds or speech into these masters.
<!-- canonical-music-production:end -->
