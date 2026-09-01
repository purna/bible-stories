# Deborah — Design and Music Source of Truth

This is the canonical reference for the structure, emotional arc, visual identity, and chapter music of the Deborah interactive comic. Update it whenever the story data or soundtrack direction changes.

## Status and Canon

- **Implementation:** Six acts in `deborah-story.json`.
- **Primary text:** Judges 4–5, presented as a dramatic interactive adaptation.
- **Core question:** *What does courage cost when the ones expected to lead hesitate, and someone else has to answer the call?*
- **Emotional arc:** Oppression and quiet authority → summons and hesitation → uneasy mustering → the storm of battle → the reversal in the tent → the song of victory.

## Visual Identity

The comic opens under the shade of a single palm tree in the hill country of Ephraim — a still, authoritative counterpoint to twenty years of oppression pressing on the villages beyond it. It then widens into a war camp on Mount Tabor, a darkening sky over the Kishon river, and finally the close, lamp-lit interior of a tent. Scenes use bold comic silhouettes, halftone texture, theatrical lighting, and foreground figures or objects (the palm's branches, iron chariots, a tent peg and hammer) that anchor the 3D/SVG backgrounds, matching the visual language established for the Adam & Eve and Abraham comics.

## Musical Identity

Instrumental classic country-western storytelling with Appalachian warmth: finger-picked acoustic guitar, restrained pedal steel, fiddle, upright bass, brushed percussion, dulcimer, harmonica used sparingly, and occasional low cinematic drones. The score should feel handmade and timeless, not comedic or like a modern pop-country track.

- **No vocals, humming, spoken word, or choir** — even though the source text is itself a song (the Song of Deborah), the score stays instrumental throughout, including Act 6.
- Do not imitate an identifiable song, melody, or performer.
- Preserve a recurring two-phrase **"Awake, awake" motif** across all six acts — a call-and-response figure (one instrument calls, a second answers a beat later), drawn from the Song of Deborah's refrain. It starts distant and unanswered, and by Act 6 the call and response finally lock together.
- Let acoustic instruments (guitar, dulcimer) represent the palm tree's stillness and quiet authority; low drones, tremolo, and massed low strings represent the chariots, the storm, and the threat closing in.
- Avoid large trailer percussion, glossy pop drums, and busy solos beneath text.

## Chapter Music Map

| # | Act | Narrative and emotion | Music direction | Tempo / mode | Canonical loop |
|---|---|---|---|---|---|
| 1 | **Under the Palm** | Twenty years under Jabin and Sisera's iron chariots. Deborah judges Israel beneath the palm between Ramah and Bethel — a place of stillness and clear-eyed authority inside the exhaustion. | Slow, spare guitar figure over a held upright-bass note, like sitting in shade. Dulcimer states the "Awake, awake" motif once, quietly, unanswered — no response phrase yet. | 58–64 BPM; modal minor with a still, unhurried pulse. | `Act1_Beneath_the_Single_Palm.ogg` then `.mp3` |
| 2 | **The Summons** | Deborah calls Barak with God's command: gather ten thousand, march to Tabor. Barak hesitates — *"If you go with me, I will go; but if not, I will not go."* Tension between calling and reluctance. | Guitar and fiddle in dialogue, guitar's phrase left hanging, fiddle answering late and uncertain — the "Awake, awake" motif's call-and-response stretched apart, mistimed. Brushed percussion enters lightly, tentative. | 66–72 BPM; minor with brief, unresolved lifts toward major. | `Act2_If_You_Go_With_Me.ogg` then `.mp3` |
| 3 | **The Muster** | Tribes gather — some readily, some (Reuben, Meroz) holding back. A camp forming under uncertain unity, resolve tightening as the army moves toward Tabor. | Upright bass and brushed snare build a walking march rhythm; guitar and dulcimer trade the motif's call-and-response faster and closer together as more voices "answer." A low drone underneath signals the size of the threat still ahead. | 74–80 BPM; minor, gaining forward motion. | `Act3_Gathering_at_Tabor.ogg` then `.mp3` |
| 4 | **The Storm at Kishon** | Battle at Mount Tabor; the Kishon river rises, chariots mire in the flood, Sisera's army routs. Chaos and sudden divine reversal. | Tremolo guitar, low sustained drone, and frame-drum-like percussion swell together, then drop away abruptly at the rout — the storm's sound cut short rather than resolved. Motif appears fragmented, buried under the texture, barely audible. | 56–64 BPM, with a sudden thinning at the turn of the battle; minor / Phrygian colour. | `Act4_The_River_Rises.ogg` then `.mp3` |
| 5 | **The Tent of Jael** | Sisera flees alone to Jael's tent; she offers milk and shelter, then ends him with a tent peg as he sleeps. Hospitality's warmth curdling into a decisive, quiet act. | Very sparse: solo guitar or dulcimer, close and intimate, almost domestic — then a single low, hard low-string strike (no percussion kit) marks the act's turn, followed by near-silence. No motif stated; this act is deliberately withheld from it. | 54–60 BPM; minor, mostly unaccompanied single lines. | `Act5_Milk_in_a_Lordly_Bowl.ogg` then `.mp3` |
| 6 | **The Song of Deborah** | Victory, the land at rest forty years. Deborah and Barak's song looking back over the whole ordeal — grief for the fallen woven into triumph. | Full ensemble for the first time — guitar, fiddle, dulcimer, pedal steel, upright bass together. The "Awake, awake" motif's call and response finally arrive on the same beat, harmonized, and the theme is stated once in full before settling into a plain, unadorned close. | 68–74 BPM; modal major, warm and open. | `Act6_The_Land_Had_Rest.ogg` then `.mp3` |

## Loop and Mix Rules

- Target **90–150 seconds**, with a musically seamless loop and no audible tail at the join.
- OGG is preferred in playback; MP3 is the compatibility fallback.
- Leave the first and last 1–2 seconds rhythmically compatible.
- Keep the midrange clear for reading. No lead instrument should behave like a vocal throughout.
- Use gentle starts; avoid an attention-grabbing downbeat when a chapter loads.
- Button sound remains `assets/audio/ping_pong.mp3` and is not part of the musical palette.

## Continuity Check

The score must carry the disquiet of Act 5 — Jael's act is decisive and righteous within the story but should never be scored as triumphant or gleeful in the moment itself; any sense of triumph belongs to Act 6, sung in hindsight. The "Awake, awake" motif's slow assembly across the acts — distant, mistimed, fragmented, withheld, then finally unified — should be audible as the throughline even to a listener who never sees the chapter titles.
