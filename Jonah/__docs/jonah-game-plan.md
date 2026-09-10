# Jonah — Story Game Plan

## North star

Will the prophet accept mercy when it reaches people he resents? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Run to the Sea | Choose cargo and board the ship going the wrong way. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Storm | Secure the deck and uncover Jonah’s flight. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Into the Deep | Navigate sinking currents toward the great fish. | `find-path` | `jonah_path.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Prayer Below | Reassemble Jonah’s prayer from psalm fragments. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Second Call | Walk the road to Nineveh. | `find-path` | `jonah_path.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Warning | Deliver the short message through the great city. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Nineveh Repents | Coordinate fasting from palace to livestock. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Plant | Manage shade, worm, and hot wind. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Question | Compare Jonah’s pity for a plant with God’s pity for a city. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Run to the Sea | **Look Closely** | `look-closely` | `look_closely_3x3.html` | Choose cargo and board the ship going the wrong way. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “Run to the Sea” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 2 | The Storm | **Look Closely** | `look-closely` | `look_closely_4x3.html` | Secure the deck and uncover Jonah’s flight. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Storm” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 3 | Into the Deep | **Find the Faithful Path** | `find-path` | `jonah_path.html` | Navigate sinking currents toward the great fish. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Into the Deep” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 4 | Prayer Below | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Reassemble Jonah’s prayer from psalm fragments. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Prayer Below” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 5 | Second Call | **Find the Faithful Path** | `find-path` | `jonah_path.html` | Walk the road to Nineveh. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Second Call” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 6 | The Warning | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Deliver the short message through the great city. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Warning” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 7 | Nineveh Repents | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Coordinate fasting from palace to livestock. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Nineveh Repents” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 8 | The Plant | **Keep the Balance** | `keep-balance` | `keep_balance_x3_v2.html` | Manage shade, worm, and hot wind. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Plant” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 9 | The Question | **Keep the Balance** | `keep-balance` | `keep_balance_x3.html` | Compare Jonah’s pity for a plant with God’s pity for a city. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Question” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |

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
