# Elisha — Story Game Plan

## North star

How can everyday acts of mercy reveal faithful power? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | The Mantle | Leave the plough and follow Elijah. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Jordan | Strike the water and cross. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Widow’s Oil | Collect jars and pour without waste. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Shunammite Room | Arrange a simple guest room. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Child | Climb to the room and persist in care. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Naaman | Guide the commander through seven Jordan immersions. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Floating Axe | Mark where the borrowed iron fell. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Unseen Army | Reveal protection around the frightened servant. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | A Blind Feast | Lead enemies safely to a meal instead of an ambush. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Mantle | **Find the Faithful Path** | Leave the plough and follow Elijah. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Mantle” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | The Jordan | **Find the Faithful Path** | Strike the water and cross. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Jordan” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 3 | The Widow’s Oil | **Gather with Care** | Collect jars and pour without waste. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “The Widow’s Oil” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 4 | The Shunammite Room | **Complete the Story Beat** | Arrange a simple guest room. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Shunammite Room” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 5 | The Child | **Find the Faithful Path** | Climb to the room and persist in care. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Child” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 6 | Naaman | **Find the Faithful Path** | Guide the commander through seven Jordan immersions. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Naaman” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 7 | The Floating Axe | **Complete the Story Beat** | Mark where the borrowed iron fell. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Floating Axe” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | The Unseen Army | **Watch and Move** | Reveal protection around the frightened servant. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “The Unseen Army” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 9 | A Blind Feast | **Find the Faithful Path** | Lead enemies safely to a meal instead of an ambush. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “A Blind Feast” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |

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
