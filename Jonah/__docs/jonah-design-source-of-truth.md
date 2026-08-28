# Jonah — Design and Music Source of Truth

This document is the canonical reference for Jonah’s four-act comic, its playable isometric panels, and its soundtrack direction.

## Status and Canon

- **Implementation:** Four comic acts with a playable panel after each act.
- **Primary text:** The Book of Jonah.
- **Core question:** *Is mercy still good when it is given to people we believe deserve judgment?*
- **Narrative compass:** Running ↔ listening; justice ↔ mercy.
- **Emotional arc:** Flight → surrender → reluctant obedience → confrontation with mercy.

## Visual and Gameplay Identity

The comic combines storm-lit 3D/SVG backgrounds with foreground characters and objects, then enters compact isometric “playable panels.” Sea acts use ink-blue, teal, lightning white, and bioluminescence. Nineveh uses baked ochre and crowded geometry. The hillside strips the world back to heat, shade, worm, and Jonah’s reaction.

## Musical Identity

Instrumental country-western storytelling with maritime and desert variants. Use finger-picked acoustic guitar, baritone guitar, fiddle, upright bass, brushed drums, hand percussion, restrained pedal steel, and environmental textures. A descending **running motif** should gradually invert into a rising **mercy motif**.

- No vocals, sea-shanty singing, comedic whale music, or imitation of an existing performer.
- Comic and game portions of an act share the same harmonic identity.
- During playable panels, use a slightly clearer pulse; during reading, thin the rhythm.
- Interactions should add short stems or stingers without restarting the loop.

## Chapter Music Map

| # | Act / playable panel | Narrative and emotion | Music direction | Tempo / mode | Planned filename |
|---|---|---|---|---|---|
| 1 | **The Great Storm / Ship to Tarshish** | Jonah flees; the sea becomes chaos; sailors search for the cause. Urgent, evasive, darkly adventurous. | Rolling low guitar, fiddle tremolo, brushed train rhythm transformed into waves, thunder-like floor tom. Playable deck adds plucked pulse. | 78–88 BPM; Dorian minor, 6/8 option. | `Act1_Running_Before_the_Storm.ogg` + `.mp3` |
| 2 | **The Deep / Belly of the Fish** | Descent, confinement, fragments of hope, and prayer. Claustrophobic but not horror. | Very sparse baritone guitar, bowed bass, watery steel swells, heartbeat frame drum. Hold-to-pray gradually removes dissonance. | 48–58 BPM; suspended minor. | `Act2_Three_Nights_Below.ogg` + `.mp3` |
| 3 | **Nineveh / Streets of the City** | Reluctant proclamation meets unexpected repentance. Scale, movement, and Jonah’s discomfort. | Dry acoustic strum, hand drum, fiddle drone, dulcimer-like accents. City response adds warmth while Jonah’s motif stays resistant. | 82–92 BPM; modal minor moving toward major. | `Act3_Forty_Days_in_Nineveh.ogg` + `.mp3` |
| 4 | **The Tree and the Heat / East of the City** | Shade, loss, anger, God’s question, and unresolved mercy. Exposed and reflective. | Solo guitar, cicada-like shaker, sparse pedal steel, long rests. Mercy motif appears without a grand resolution. | 52–62 BPM; ambiguous major/minor. | `Act4_Shade_East_of_the_City.ogg` + `.mp3` |

## Adaptive Music Cues

- **Hotspot found:** a brief two- or three-note acoustic response, never the UI `ping_pong` sound.
- **Choice prompt:** reduce percussion and hold harmony.
- **Hold to pray:** progressively filter out low rumble and reveal the mercy motif.
- **Panel complete:** restrained page-turn cadence; do not force a celebratory major chord.
- **Compass movement:** change orchestration or voicing subtly, not pitch or tempo abruptly.

## Loop and Mix Rules

- Target **100–160 seconds** per act, seamless at the loop boundary.
- Export matching OGG and MP3 files; OGG is preferred for playback.
- Environmental sound belongs in a separate ambience layer where possible.
- Keep the centre frequency range clear for story text and effects.
- Jonah currently has no chapter music files; the filenames above are the canonical production targets.
