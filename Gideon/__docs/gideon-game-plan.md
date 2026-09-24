# Gideon — Story Game Plan

## North star

When God calls the unlikely, will we trust His strength over our own? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Authority and review status

Revised 23 September 2026. These four Markdown files form one documentation set:

- [Design source of truth](gideon-design-source-of-truth.md): story scope, act names, canon, characters, materials and visual direction.
- [Game plan](gideon-game-plan.md): playable actions, completion, controls and accessibility.
- [Music source of truth](gideon-music-source-of-truth.md): score identity, cue filenames and music delivery.
- [SFX source of truth](gideon-sfx-source-of-truth.md): environmental/action cues, triggers and effects delivery.

Scripture controls events; the design document controls their adaptation. Each specialist file owns its detailed contract; linked summaries do not override it. “Act” and “chapter” mean the same numbered unit, 1–7.

This is a documentation revision, not confirmation of a working implementation. The supplied set did not include `gideon-story.json`, the Gideon runtime, audio assets, `__Template`, character presets or Texture Forge. Their paths and interfaces below are integration requirements to verify, not claims that they already exist. Prototype filenames are references for adaptation, not Gideon-ready implementations.

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.

<!-- act-mini-games:start -->
## Simple game in every act

Each act contains one short, readable mini-game tied directly to its canonical story action. The target play time is **30–90 seconds** on a first attempt. These are participation mechanics, not alternate-history branches: completing the game advances the scripture-aligned event already defined by the story.

| Act | Chapter | Mini-game / engine | Prototype reference | Objective and input | Core loop and payoff | Gentle retry / accessibility |
|---:|---|---|---|---|---|---|
| 1 | The Winepress | **Hear the Call** / `listen-respond` | `listen_respond_3x2.html` | Respond to the call while Gideon threshes wheat. Select the captioned call and then a response at your own pace. Threshing is scene animation, not a second mechanic. | Fear/noise settles automatically; confirm the clearly labelled call; show the promised presence. **Judges 6:1–16.** | No listening test or timed hold. Caption stays available; missed selections give a gentle hint. |
| 2 | The Sign | **Prepare the Offering** / `tap-sequence` | `tap_sequence_4x1.html` | Prepare the offering and witness the sign. Select meat → unleavened bread → broth (three steps). | Place meat and bread on rock; pour broth. The angel’s staff touch, fire, disappearance and reassurance play automatically. Then show the 6:25–35 bridge. **Judges 6:17–35.** | Highlight the next object; never reset progress. Player does not kindle the fire or control the angel. |
| 3 | The Fleece | **Watch for Dew** / `watch-and-move` | `watch_move_river_crossing_easy.html` | Inspect fleece and ground at two dawns. Select Place fleece, then Advance to dawn; inspect labelled fleece and ground. Repeat after the second request. | First wet fleece/dry ground and bowl of wrung water; second dry fleece/wet ground. Both rounds required before payoff. **Judges 6:36–40.** | No hold, precision release or detection failure. This adapter uses discrete observation states, not the prototype’s river hazard. |
| 4 | The Army Reduced | **Recognize the Three Hundred** / `gather-with-care` | `good_samaritan.html` | Recognize the drinking group God designates. Sort four representative cards using tap-select/place or optional drag. | Show 32,000 → 10,000 first. Sort two hand-to-mouth and two kneeling examples; automatically reveal 300 retained and 9,700 dismissed. Cards are examples, not one-to-one army counts. **Judges 7:1–8.** | Incorrect placement returns gently with a descriptive hint; no timer and no 300-click task. |
| 5 | The Dream | **Find the Tent** / `find-path` | `find_path_9x9.html` | Guide Gideon and Purah to the camp’s edge to listen. Select adjacent waypoints or use arrow keys; Enter/Space confirms. | Follow a short visible route, hear/read two soldiers’ dream and interpretation, then see Gideon worship and return. **Judges 7:9–15.** | A risky choice pauses at the last safe waypoint; reveal an accessible route on request. No stealth failure or reliance on audio direction. |
| 6 | The Battle | **Shatter and Sound** / `tap-sequence` | `tap_sequence_4x1.html` | Follow Gideon’s signal and hold position. Select four highlighted steps once: trumpet → jar/revealed torch → hold position → captioned cry. | All three companies respond together; torch in left hand, horn in right. Narrative resolves the rout and then the 7:23–25 pursuit bridge. **Judges 7:16–25.** | Untimed; no three-round repetition, simultaneous buttons, rhythm scoring, shouting or microphone access. Softened sound/lighting available. |
| 7 | The Victory | **Set the Account in Order** / `fit-pieces` | `fit_pieces_3x3.html` | Order the aftermath and reflect on the Lord’s rule. Place six labelled cards into a chronological strip; select/place is equivalent to optional dragging. | Ephraim’s complaint answered → pursuit/capture → non-graphic consequences → rule refused → ephod warning → forty years of rest. Reveal full 8:1–28 reference. **Judges 8:1–28.** | Narration introduces the events first. Incorrect pieces return gently; show placement hints after two attempts. No crown-building or playable violence. |

### Shared mini-game rules

- Teach the game inside the panel with one example (static steps in reduced-motion mode); do not open a separate instruction screen.
- Support pointer, touch, keyboard and switch-style sequential focus. Tap targets are at least 44×44 CSS pixels.
- Do not require more than three simultaneous resources, eight draggable items, or one primary action verb per game.
- A first play should take 30–90 seconds; experienced replay should take under 45 seconds.
- No game-over screen, lives, score chasing, loot, combat grind, or canonical "bad ending." Mistakes produce a clue and a quick retry.
- Pause camera movement and decorative animation while the player is reading instructions or choosing.
- Reduced-motion mode replaces timing, drag momentum and camera movement with discrete selection and progress states.
- Sound confirms actions but never carries required information without captions, labels, colour-independent icons or motion-safe highlights. Include visible focus, screen-reader labels/status, text resizing and a captioned auto-complete option with the same canonical payoff. Timing-free operation is the default in every motion setting.
- Persist only completion and optional discovery flags for story progress; store audio/accessibility preferences separately. Keep intermediate steps in session memory. Restarting an act clears its transient state and allows replay without removing earned completion or changing prior chapters. Storage failure must not block Continue.

### Implementation contract

Each act in the intended `gideon-story.json` declares `game.id` (stable `gideon_act1` … `gideon_act7`), `game.type` (the engine key above), `game.objective`, `game.controls`, `game.success`, and `game.accessibility`. Field serialization and adapter support must be checked against the actual runtime before implementation; do not treat these prose requirements as a verified schema.

- Mount the interaction in the middle-ground layer; accessible DOM controls may overlay SVG/3D. Do not require 3D for any act.
- Navigation locks only during active manipulation or an atomic transition. Pause, settings, captions and the accessible completion route always remain available. Release pointer capture and locks on blur, cancel and unmount.
- Complete the shared callback once per act run, including assisted completion. Settle camera and game objects, show the whole canonical payoff/bridge and its reference, then unlock Continue. Record completion only after that payoff is available. No repeated callback or repeated narrative sound on re-render.
- The 30–90 second target concerns the mini-game; reading, bridges and reflection are untimed and may take longer. Replay under 45 seconds is a target, never a deadline.
- Resolve music through `audio`; story effects through `audioSfx` (single) or `audioSfxs` (simultaneous), with chapter `sfx` preload lists. These inherited interface names require runtime verification. Codec alternatives are fallbacks, not simultaneous cues. Per-act cue names and trigger ownership are defined in the two audio documents.
- Failure to load audio, blocked autoplay or a disabled sound setting never blocks gameplay, captions, payoff or Continue. Start sound after user permission/gesture and do not retroactively replay missed one-shots.
- Pause/stop audio on page hide; on visible return resume only the current ambience/score under the saved user preference. Cancel queued events on replay, transition and unmount. Never resume a previous act’s sounds.

## Acceptance checks

For each of seven acts, complete with pointer, touch, keyboard and sequential focus; also complete with sound off and reduced motion. Confirm canonical sequence, both fleece rounds, four representative sorting cards, one four-step battle sequence and all six aftermath cards. Verify hints and assisted completion, no navigation deadlock, callback once per run, progress persistence and storage failure, audio cleanup, caption equivalence and visible scripture references. Prototype resemblance is not acceptance evidence.
<!-- act-mini-games:end -->
