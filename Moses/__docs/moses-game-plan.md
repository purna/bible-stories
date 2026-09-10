# Moses — Story Game Plan

## North star

Will a rescued people learn to trust the God who leads them through uncertainty? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Child in the River | Guide the basket through reeds while Miriam keeps watch. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Burning Bush | Herd sheep, approach the fire, and answer the call. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Before the Throne | Match signs and warnings to each audience. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Passover Night | Prepare the meal and mark the doorway before departure. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Through the Sea | Keep the people moving along the opened path. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Bread in the Wilderness | Gather only enough manna for the day. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Sinai | Arrange the camp and carry the covenant words. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Golden Calf | Confront the idol and intercede for the people. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Forty Years | Navigate a provision-and-trust journey map. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Mount Nebo | Appoint Joshua and identify the land from afar. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Child in the River | **Find the Faithful Path** | `find-path` | `path_of_moses.html` | Guide the basket through reeds while Miriam keeps watch. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Child in the River” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | The Burning Bush | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Herd sheep, approach the fire, and answer the call. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Burning Bush” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 3 | Before the Throne | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Match signs and warnings to each audience. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Before the Throne” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 4 | Passover Night | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Prepare the meal and mark the doorway before departure. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Passover Night” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 5 | Through the Sea | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Keep the people moving along the opened path. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Through the Sea” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 6 | Bread in the Wilderness | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Gather only enough manna for the day. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Bread in the Wilderness” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 7 | Sinai | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Arrange the camp and carry the covenant words. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Sinai” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 8 | The Golden Calf | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Confront the idol and intercede for the people. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Golden Calf” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | Forty Years | **Find the Faithful Path** | `find-path` | `path_of_moses.html` | Navigate a provision-and-trust journey map. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Forty Years” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 10 | Mount Nebo | **See the Pattern** | `match-it-up` | `match_it_up_4x4.html` | Appoint Joshua and identify the land from afar. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Mount Nebo” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |

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
