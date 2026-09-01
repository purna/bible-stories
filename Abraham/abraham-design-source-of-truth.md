# Abraham — Design and Music Source of Truth

This is the canonical reference for the structure, emotional arc, visual identity, and chapter music of the Abraham interactive comic. Update it whenever the story data or soundtrack direction changes.

## Status and Canon

- **Implementation:** Six acts in `abraham-story.json`.
- **Primary text:** Genesis 12–24, presented as a dramatic interactive adaptation.
- **Core question:** *What does it cost to trust a promise you cannot yet see fulfilled?*
- **Emotional arc:** Call → promise → doubt → hospitality and judgment → trial and provision → continuing hope.

## Visual Identity

The comic moves from the ordered walls of Ur/Haran out into open desert — ochre dunes, tent camps, star-scattered night skies, altar smoke, and oasis wells. Scenes use bold comic silhouettes, halftone texture, theatrical lighting, and foreground figures or objects (a staff, a tent flap, a knife, a ram's horns) that anchor the 3D/SVG backgrounds, matching the visual language established for the Adam & Eve comic.

## Musical Identity

Instrumental classic country-western storytelling with Appalachian warmth: finger-picked acoustic guitar, restrained pedal steel, fiddle, upright bass, brushed percussion, dulcimer, harmonica used sparingly, and occasional low cinematic drones. The score should feel handmade and timeless — a long journey by wagon and starlight — not comedic or like a modern pop-country track.

- **No vocals, humming, spoken word, or choir.**
- Do not imitate an identifiable song, melody, or performer.
- Preserve a recurring three-note **covenant/promise motif** across all six acts — a rising phrase (distinct from the Adam & Eve project's four-note creation motif) that first appears as a question and gradually resolves as the story does.
- Let acoustic instruments (guitar, dulcimer) represent tent-and-hearth intimacy; sustained steel and low drones represent the open, uncertain road and unfulfilled waiting.
- Avoid large trailer percussion, glossy pop drums, and busy solos beneath text.

## Chapter Music Map

| # | Act | Narrative and emotion | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **The Call** | Abram leaves Ur and Haran on God's word alone — kin, home, and certainty traded for a promise. Wonder shadowed by risk. | Open guitar figure over a walking upright-bass line, like wagon wheels finding a rhythm. Fiddle enters as the horizon widens. Covenant motif stated once, unresolved, on solo guitar. | 68–74 BPM; spacious major with a suspended, unanswered close. | `Act1_The_Road_Out_of_Ur.ogg` then `.mp3` |
| 2 | **The Covenant** | The smoking-firepot vision, the count of stars, the covenant of pieces, circumcision as sign. Solemn awe — a vow sealed, not just spoken. | Slow dulcimer pulse, low sustained fiddle drone, sparse brushed percussion like a held breath. Covenant motif restated fuller, harmonized, still not fully resolved. | 60–66 BPM; modal major with drone pedal tone. | `Act2_Beneath_a_Sky_Full_of_Stars.ogg` then `.mp3` |
| 3 | **The Waiting** | Years pass with no son. Hagar, Ishmael, human impatience reaching for the promise on its own terms — and the ache that follows. | Guitar figure turns slightly off-balance, uneven phrase lengths; light shaker keeps time like a clock nobody trusts anymore. Covenant motif fragmented, played out of order. | 62–68 BPM; minor / Aeolian colour. | `Act3_The_Waiting_Wind.ogg` then `.mp3` |
| 4 | **Three Strangers** | Visitors at Mamre, laughter at an impossible promise, Abraham's intercession, judgment falling on Sodom and Gomorrah. Hospitality's warmth beside grief for the cities. | Begins warm — fingerpicked guitar duet, pedal steel like midday heat-shimmer — then thins to sparse tremolo and low drone as the scene turns toward judgment. One instrument (fiddle) carries a plaintive, pleading line under the intercession beats. | 70–76 BPM opening, dropping to 56–62 BPM for the judgment; major sliding to minor. | `Act4_Three_Strangers_at_Noon.ogg` then `.mp3` |
| 5 | **The Long Ride** | Isaac's birth and laughter, then the climb to Moriah, the bound son, the ram in the thicket. Joy, dread, and release inside one act. | Opens bright and simple (solo guitar, a genuine lightness) before draining to near-silence: sparse harmonics, a slow heartbeat-like low string figure, no percussion. Covenant motif nearly disappears, then returns whole and warm at the provision on the mountain. | 64–70 BPM opening; 50–58 BPM for the climb; returning to 64–70 BPM major at the release. | `Act5_The_Long_Ride_to_Moriah.ogg` then `.mp3` |
| 6 | **A Bride at the Well** | Sarah's death and burial, the covenant continuing through Isaac, Rebekah found at the well. Grief threaded with the promise carrying forward. | Low acoustic guitar and cello-like fiddle for the grief; the texture gradually opens into a wider, gentler arrangement (fiddle and pedal steel together) as Rebekah's story begins. Covenant motif resolves — gently, not triumphantly, leaving room for the story to continue beyond the act. | 56–64 BPM opening; 66–72 BPM modal major by the close. | `Act6_A_Bride_at_the_Well.ogg` then `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, with a musically seamless loop and no audible tail at the join.
- OGG is preferred in playback; MP3 is the compatibility fallback.
- Leave the first and last 1–2 seconds rhythmically compatible.
- Keep the midrange clear for reading. No lead instrument should behave like a vocal throughout.
- Use gentle starts; avoid an attention-grabbing downbeat when a chapter loads.
- Button sound remains `assets/audio/ping_pong.mp3` and is not part of the musical palette.

## Continuity Check

The score must make the weight of waiting and the terror of Moriah audible without letting despair overwhelm the thread of promise — Act 3's doubt and Act 5's dread are real, but the covenant motif's survival through both is what tells the player the promise is still standing. Hope should be clearly present by Act 6, but it must not erase the cost paid to get there.
