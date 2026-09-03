# Isaiah — Story Game Plan

## North star

How can holy vision produce truthful warning and durable hope? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | A City in Need | Identify worship separated from justice. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Holy Throne | Navigate the temple vision and answer the call. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Vineyard Song | Tend a vineyard that yields injustice. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Immanuel Sign | Carry hope to fearful King Ahaz. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Assyrian Shadow | Map the advancing empire and the surviving stump. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hezekiah’s Crisis | Bring the threatening letter into prayer. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Comfort My People | Build a road of return through the wilderness. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Servant | Match suffering, justice, and healing motifs. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | New Creation | Restore a city garden where all can flourish. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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

| Act | Chapter | Mini-game | Objective | Input | Core loop | Completion and story payoff | Gentle retry / accessibility |
|---:|---|---|---|---|---|---|---|
| 1 | A City in Need | **See the Pattern** | Identify worship separated from justice. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “A City in Need” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 2 | The Holy Throne | **Find the Faithful Path** | Navigate the temple vision and answer the call. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Holy Throne” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 3 | The Vineyard Song | **Listen and Respond** | Tend a vineyard that yields injustice. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Vineyard Song” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 4 | Immanuel Sign | **Find the Faithful Path** | Carry hope to fearful King Ahaz. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Immanuel Sign” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 5 | The Assyrian Shadow | **Complete the Story Beat** | Map the advancing empire and the surviving stump. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Assyrian Shadow” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 6 | Hezekiah’s Crisis | **Listen and Respond** | Bring the threatening letter into prayer. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Hezekiah’s Crisis” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 7 | Comfort My People | **Fit the Pieces** | Build a road of return through the wilderness. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Comfort My People” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 8 | The Servant | **See the Pattern** | Match suffering, justice, and healing motifs. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “The Servant” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 9 | New Creation | **Keep the Balance** | Restore a city garden where all can flourish. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “New Creation” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |

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
