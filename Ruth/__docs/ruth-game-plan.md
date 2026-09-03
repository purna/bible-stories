# Ruth — Story Game Plan

## North star

How can loyal kindness create belonging after loss? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | Leaving Moab | Pack lightly and choose whether to accompany Naomi. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Your People | Follow the road to Bethlehem together. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Gleaning | Collect only grain left for gleaners. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Boaz Notices | Deliver water and protection instructions to the workers. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | At the Threshing Floor | Follow Naomi’s plan with restraint and clarity. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | At the Gate | Arrange witnesses and present the redemption choice. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Redeemed | Transfer the sandal and join the households. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Obed | Build the family line toward David. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Leaving Moab | **Gather with Care** | Pack lightly and choose whether to accompany Naomi. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Leaving Moab” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 2 | Your People | **Find the Faithful Path** | Follow the road to Bethlehem together. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Your People” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 3 | Gleaning | **Gather with Care** | Collect only grain left for gleaners. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Gleaning” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 4 | Boaz Notices | **Gather with Care** | Deliver water and protection instructions to the workers. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Boaz Notices” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 5 | At the Threshing Floor | **Find the Faithful Path** | Follow Naomi’s plan with restraint and clarity. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “At the Threshing Floor” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 6 | At the Gate | **Look Closely** | Arrange witnesses and present the redemption choice. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “At the Gate” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 7 | Redeemed | **Ready, Then Act** | Transfer the sandal and join the households. | Press/hold and release inside a broad highlighted timing window. | Watch a slow readable rhythm, prepare the action, and release once at the story’s decisive beat. | Complete the action, settle the scene, then reveal the canonical “Redeemed” outcome and scripture reference. | The timing window widens after a miss and reduced-motion mode replaces movement with a clear progress ring. |
| 8 | Obed | **Fit the Pieces** | Build the family line toward David. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Obed” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |

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
