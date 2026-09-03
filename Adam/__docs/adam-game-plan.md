# Adam — Story Game Plan


## ideas
https://codepen.io/andreamorosi/pen/NWMLPGy


## North star

Will humanity receive creation as a gift and accept the limits of trust? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | Formed from Dust | Gather the garden’s elements in creation order. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Garden | Tend the garden by planting seeds and pulling weeds before they spread. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Together | Build a shared shelter and tend one plot together. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Boundary | Navigate abundance while leaving one tree untouched. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Choice | Spot the serpent’s half-truths in a dialogue puzzle. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hiding | Follow footprints and admit what happened. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | East of Eden | Pack seeds and begin cultivation outside the garden. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Cain and Abel | Prepare offerings with care, then cool Cain’s anger. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Field | Witness consequence and mark a refuge path. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | A New Line | Plant a family tree from Seth onward. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Formed from Dust | **Gather with Care** | Gather the garden’s elements in creation order. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Formed from Dust” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 2 | The Garden | **Tend the Garden** | Plant seeds on a 3×3 plot, pull the weeds before they spread, and bloom every tile. | Drag a seed onto an empty tile; click any weed quickly to remove it. | Drag a seed, drop it on a tile, watch it either flower or sprout a weed, click weeds in time, and bloom the whole plot. | Complete the action, settle the scene, then reveal the canonical “The Garden” outcome and scripture reference. | A weed that grows too long shows a gentle hint and clears the tile; extra seeds restock from the tray without pressure. |
| 3 | Together | **Fit the Pieces** | Build a shared shelter and tend one plot together. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Together” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 4 | The Boundary | **Find the Faithful Path** | Navigate abundance while leaving one tree untouched. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Boundary” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 5 | The Choice | **Look Closely** | Spot the serpent’s half-truths in a dialogue puzzle. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Choice” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 6 | Hiding | **Find the Faithful Path** | Follow footprints and admit what happened. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Hiding” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 7 | East of Eden | **Gather with Care** | Pack seeds and begin cultivation outside the garden. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “East of Eden” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 8 | Cain and Abel | **Gather with Care** | Prepare offerings with care, then cool Cain’s anger. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Cain and Abel” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 9 | The Field | **Complete the Story Beat** | Witness consequence and mark a refuge path. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Field” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 10 | A New Line | **See the Pattern** | Plant a family tree from Seth onward. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “A New Line” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |

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
