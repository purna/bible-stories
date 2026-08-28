# Adam & Eve — Design and Music Source of Truth

This is the canonical reference for the structure, emotional arc, visual identity, and chapter music of the Adam & Eve interactive comic. Update it whenever the story data or soundtrack direction changes.

## Status and Canon

- **Implementation:** Six acts in `adam-story.json`.
- **Primary text:** Genesis 1–4, presented as a dramatic interactive adaptation.
- **Core question:** *What is lost when trust becomes suspicion—and what hope remains after exile?*
- **Emotional arc:** Wonder → belonging → companionship → seduction → rupture → distant hope.

## Visual Identity

The comic moves from cosmic darkness into a saturated garden, then drains toward twilight, dust, and the land beyond Eden. Scenes use bold comic silhouettes, halftone texture, theatrical lighting, and foreground figures or objects that anchor the 3D/SVG backgrounds.

## Musical Identity

Instrumental classic country-western storytelling with Appalachian warmth: finger-picked acoustic guitar, restrained pedal steel, fiddle, upright bass, brushed percussion, dulcimer, harmonica used sparingly, and occasional low cinematic drones. The score should feel handmade and timeless, not comedic or like a modern pop-country track.

- **No vocals, humming, spoken word, or choir.**
- Do not imitate an identifiable song, melody, or performer.
- Preserve a recurring four-note **creation/promise motif** across all six acts.
- Let acoustic instruments represent human intimacy; sustained steel and low drones represent distance from Eden.
- Avoid large trailer percussion, glossy pop drums, and busy solos beneath text.

## Chapter Music Map

| # | Act | Narrative and emotion | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **Creation** | Formlessness becomes light, order, life, and humanity. Awe without menace. | Open guitar harmonics, soft fiddle swells, dulcimer sparks, gradual upright-bass arrival. Build by adding one colour at a time. | 66–72 BPM; spacious major with suspended opening. | `Act1_Morning_on_the_Mesa.ogg` then `.mp3` |
| 2 | **The Garden** | Adam receives breath, purpose, abundance, and a boundary. Peace with a quiet warning underneath. | Finger-picked guitar, warm upright bass, brushed snare, very light pedal steel. Introduce one unresolved note when the forbidden tree is mentioned. | 72–78 BPM; warm major / Mixolydian. | `Act2_After_the_Spring_Rain.ogg` then `.mp3` |
| 3 | **A Helper** | Loneliness, naming, sleep, Eve, recognition, and union. Tender discovery. | Intimate guitar duet, fiddle answering phrases, gentle waltz pulse; creation motif becomes a two-part motif. | 68–74 BPM; 6/8 or slow 3/4, major. | `Act3_Before_the_Sun_Climbs.ogg` then `.mp3` |
| 4 | **Temptation** | The serpent reframes the command; desire tightens into choice, shame, and hiding. | Sparse tremolo guitar, dry shaker, detuned slide, heartbeat-like low strings. Harmony circles without resolving; remove warmth after the fruit is taken. | 58–66 BPM; minor / Phrygian colour. | `Act4_The_Open_Gate_at_Twilight.ogg` then `.mp3` |
| 5 | **Exile** | Judgment, garments, barred Eden, Cain and Abel, curse, and the promised seed. Grief with a surviving thread of mercy. | Low acoustic guitar, cello-like fiddle, distant steel, slow frame drum. Quote the creation motif in minor, then leave its final phrase open. | 54–62 BPM; minor moving briefly toward relative major. | `Act5_The_Long_Road_to_Yuma.ogg` then `.mp3` |
| 6 | **West of the Divide** | A short epilogue: humanity travels through peril toward redemption. | Solitary guitar becomes a wider horizon of fiddle and pedal steel; promise motif resolves gently but incompletely. | 64–70 BPM; modal major. | `Act6_West_of_the_Divide.ogg` then `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, with a musically seamless loop and no audible tail at the join.
- OGG is preferred in playback; MP3 is the compatibility fallback.
- Leave the first and last 1–2 seconds rhythmically compatible.
- Keep the midrange clear for reading. No lead instrument should behave like a vocal throughout.
- Use gentle starts; avoid an attention-grabbing downbeat when a chapter loads.
- Button sound remains `assets/audio/ping_pong.mp3` and is not part of the musical palette.

## Continuity Check

The score must make the fall audible without making the garden sinister from the beginning. Hope should be present in Act 5 and Act 6, but it must not erase the cost of exile.
