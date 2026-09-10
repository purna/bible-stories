# David — Story Game Plan

## North star

What does faithful leadership do with power, failure, and repentance? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Anointed | Identify the overlooked shepherd among Jesse’s sons. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Goliath | Time a sling throw after refusing heavy armour. | `ready-then-act` | `david_goliath.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Saul’s Court | Play a calming melody while watching Saul’s mood. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Covenant Friends | Exchange signals with Jonathan unseen. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Wilderness | Escape Saul and spare him in the cave. | `find-path` | `find_path_18x9_adv.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Abigail | Deliver provisions before anger becomes violence. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Throne | Resolve petitions without favouritism. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Bathsheba and Uriah | Confront the irreversible harm rather than hiding it. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Nathan’s Parable | Recognise the king inside the story and repent. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Absalom | Navigate divided loyalties without celebrating loss. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 11 | The Census | Choose responsibility during the plague. | `tap-sequence` | `plagues_tap.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 12 | Solomon | Pass plans and wisdom to the next king. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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

| Act | Chapter | Mini-game | Game engine type | Example prototype | Objective | Input | Core loop | Completion and story payoff | Gentle retry / accessibility |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | Anointed | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Identify the overlooked shepherd among Jesse’s sons. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Anointed” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 2 | Goliath | **Ready, Then Act** | `ready-then-act` | `david_goliath.html` | Time a sling throw after refusing heavy armour. | Press/hold and release inside a broad highlighted timing window. | Watch a slow readable rhythm, prepare the action, and release once at the story’s decisive beat. | Complete the action, settle the scene, then reveal the canonical “Goliath” outcome and scripture reference. | The timing window widens after a miss and reduced-motion mode replaces movement with a clear progress ring. |
| 3 | Saul’s Court | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Play a calming melody while watching Saul’s mood. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Saul’s Court” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 4 | Covenant Friends | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Exchange signals with Jonathan unseen. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Covenant Friends” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 5 | The Wilderness | **Find the Faithful Path** | `find-path` | `find_path_18x9_adv.html` | Escape Saul and spare him in the cave. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Wilderness” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 6 | Abigail | **Gather with Care** | `gather-with-care` | `good_samaritan.html` | Deliver provisions before anger becomes violence. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Abigail” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 7 | The Throne | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Resolve petitions without favouritism. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Throne” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | Bathsheba and Uriah | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Confront the irreversible harm rather than hiding it. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Bathsheba and Uriah” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | Nathan’s Parable | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Recognise the king inside the story and repent. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Nathan’s Parable” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 10 | Absalom | **Find the Faithful Path** | `find-path` | `find_path_9x9.html` | Navigate divided loyalties without celebrating loss. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Absalom” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 11 | The Census | **Look Closely** | `tap-sequence` | `plagues_tap.html` | Choose responsibility during the plague. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Census” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 12 | Solomon | **Keep the Balance** | `keep-balance` | `keep_balance_x3_v2.html` | Pass plans and wisdom to the next king. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Solomon” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |

### Shared mini-game rules

- Teach the game inside the panel with one animated example; do not open a separate instruction screen.
- Support pointer, touch, keyboard and switch-style sequential focus. Tap targets are at least 44×44 CSS pixels.
- Do not require more than three simultaneous resources, eight draggable items, or one primary action verb per game.
- A first play should take 30–90 seconds; experienced replay should take under 45 seconds.
- No game-over screen, lives, score chasing, loot, combat grind, or canonical “bad ending.” Mistakes produce a clue and a quick retry.
- Pause camera movement and decorative animation while the player is reading instructions or choosing.
- Reduced-motion mode replaces timing, drag momentum and camera movement with discrete selection and progress states.
- Sound confirms actions but never carries required information without captions, shape, colour-independent icons, or motion-safe highlights.
- Save only completion and optional discovery flags. Restarting an act resets its mini-game locally without changing prior chapters.

### Implementation contract

Each act JSON should declare `game.id`, `game.type`, `game.objective`, `game.controls`, `game.success`, and `game.accessibility`. The interaction mounts inside the middle-ground layer, locks story navigation only while actively manipulated, calls the shared completion callback once, then settles all 3D/SVG elements before the scripture reference appears.
<!-- act-mini-games:end -->
