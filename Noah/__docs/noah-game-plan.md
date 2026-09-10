# Noah — Story Game Plan

## North star

Will faithful care persist through long preparation, crisis, and waiting? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Warning | Accept the Ark blueprint. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Blueprint | Measure the hull to the given proportions. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Long Build | Gather timber, fit planks, and seal with pitch. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Gathering | Pair animals and stock each pen. | `look-closely` | `build_the_ark_9x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Door Shuts | Finish the final checks and surrender control. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Forty Days | Feed, calm, and clean animal pens during the storm. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Long Wait | Send raven and doves at the right intervals. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Dry Ground | Release animals habitat by habitat. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Covenant | Build the altar and reveal the rainbow. | `story-builder` | `temple_builder_v1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | The Vineyard | Witness Noah’s failure and choose how the sons respond. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Warning | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Accept the Ark blueprint. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Warning” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 2 | The Blueprint | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Measure the hull to the given proportions. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Blueprint” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 3 | The Long Build | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x4.html` | Gather timber, fit planks, and seal with pitch. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Long Build” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 4 | The Gathering | **Gather with Care** | `look-closely` | `build_the_ark_9x4.html` | Pair animals and stock each pen. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “The Gathering” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 5 | The Door Shuts | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Finish the final checks and surrender control. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Door Shuts” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 6 | Forty Days | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Feed, calm, and clean animal pens during the storm. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Forty Days” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 7 | The Long Wait | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Send raven and doves at the right intervals. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Long Wait” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | Dry Ground | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Release animals habitat by habitat. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Dry Ground” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 9 | The Covenant | **Fit the Pieces** | `story-builder` | `temple_builder_v1.html` | Build the altar and reveal the rainbow. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Covenant” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 10 | The Vineyard | **Look Closely** | `look-closely` | `look_closely_4x3.html` | Witness Noah’s failure and choose how the sons respond. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Vineyard” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |

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
