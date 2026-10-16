# Shared comic and chapter-game rollout guide

## Story structure

Use the shared comic player and the established layered scene stack: background SVG → optional Three.js middle ground → foreground SVG → character and dialogue overlay. Preserve the complete comic story. Launch a game only after the final panel of its chapter.

The current design assignments are in [`../__shared/chapter-games/story-game-plan.json`](../__shared/chapter-games/story-game-plan.json) and each story’s `__docs/*game-plan.md`. They cover every current live chapter and include one faith crafting chapter per story. **These are proposed designs, not a declaration that those games are implemented.** The live manifests are the chapter-order authority; reconcile differences from `story-canon.json` before implementation.

## Game selection

Do not choose a random game or embed a game in a frame. Assign a stable game ID and a story/chapter configuration to a shared native module. Keep story content and recipes in data. Every chapter within a story must have a different mechanic. Across stories, a repeated game family needs a materially different rule or interaction; changing names and artwork does not make a mechanic unique. The shared plan identifies reference families; global mechanic uniqueness still needs design review.

Use the [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games) as a mechanic reference. Each chapter proposal records an exact source folder. Adapt controls for children and touch rather than importing the demo shell. If source code or assets are reused, retain the applicable MIT notice and check asset licences. Existing `games.json` and HTML engines are legacy references, not the new production contract.

## Faith crafting in every story

Review both `examples/Crafting_v1` and `examples/Crafting_v2`. V1 supplies gather/combine/use recipes; V2 adds a second challenge and inventory progression. Both examples have 22 story entries; the shared plan adds Babel and Gideon and supplies Adam’s local recipe instead of relying on its external artifact link. Do not ship the examples’ global inline handlers, emoji controls or external comic URLs.

Use the loop **gather → choose ingredients → combine → use in the story**. Show a recipe card, a small ingredient tray and a three-slot bench. Repeated ingredients are allowed. Failed combinations return ingredients; resources replenish so the player cannot get stuck. Save work per story and chapter. The second stage must involve the story action, not repeated presses to manufacture a spiritual quality. God’s actions remain narrative events, not crafting recipes. Treat recipes as illustrative play, not historical manufacturing instructions.

## Challenge and age target

Use the [game ideas and challenge ladder](story-game-ideas.md) as the design companion. Assume ages 5–8 for the base experience, subject to playtesting. Provide one worked example, then two or three independent decisions. Every chapter needs a specific puzzle rule, a visible consequence and a helpful retry; repetitive button pressing does not count as a challenge.

For every game configuration, document:

- The observable goal and the decision the child must make.
- Base board size, piece count, sequence length or recipe depth.
- One optional extra challenge that adds a single new constraint.
- A requested Hint that teaches a useful step, plus undo/reset behaviour.
- The change in the story scene that demonstrates success.
- A comparison with other chapters: why this changes the rules or player decisions rather than just the labels.

Target 1–3 minutes for an ordinary puzzle and 2–4 minutes for crafting plus its application. These are design estimates, never countdowns. Increase one difficulty dimension at a time. Keep the base path achievable without fast reactions, fluent reading or guessing. Offer optional difficulty explicitly; using help never removes progress or rewards.

Crafting must end with a practical story action, such as positioning the built object, sharing the prepared food or using a covered lantern at the right signal. An optional harder recipe may introduce a component or one assembly dependency. It must not introduce a resource dead end or turn a spiritual quality into an inventory item.

## Native module contract

Mount into the shared chapter-game host and return a destroy function. Pass explicit callbacks for success and skip; do not use parent-window messages. Clean up listeners, timers, animation frames and audio on destroy, chapter changes and navigation. Only success records a game win. Skip records that the chapter was read and continues the adventure. Keep bonus reward requirements explicit and distinct from the ability to continue reading.

Retain `chapterSelect` above the game. Display **Skip →** until success. After success, hide Skip and show comic SFX **Well done!**, the plain text **You can continue the story.**, **Chapter complete!**, and **Continue →**. Continue/Skip need only their trailing arrow. At the end of a story, use the shared progress tracker and root `journey.html` map.

## Mobile acceptance

- Verify 320×568 portrait, 390×844 portrait and a short landscape viewport.
- Use vertical page scrolling and no horizontal overflow, clipped panels or controls behind the footer.
- Minimum targets: 44×44 CSS pixels. Every drag operation also supports tap-select/tap-place and keyboard input.
- Prefer SVG icons with short visible labels and accessible names. Avoid emoji as instructions.
- Keep comic dots behind text boxes and buttons; retain the shared typography, colours and completion effects.
- Do not require typing, microphone permission, device tilt, colour alone, audio alone or fast reactions. Provide visual clues, reduced motion and gentle retries.
- Verify success, incorrect attempts, reset, skip, chapter switching, saved progress and cleanup.

## Rollout steps

1. Reconcile the story’s chapter list and complete comic panels.
2. Review chapter mechanic rules and crafting recipes against the actual story beat.
3. Implement/configure shared native modules; register stable game IDs after they work.
4. Connect the chapter-end hook without replacing comic scenes or hiding story text.
5. Verify the mobile acceptance cases and the final root-map transition.
6. Observe representative young players with adult involvement. Check task comprehension, independent decisions, recovery, interest and small-phone use; record observations without identifying child data. Tune the base game and optional challenge from evidence.
7. Update precache manifests and cache versions. Record implementation and technical verification separately from playtest results. Only describe a game as more enjoyable or age-appropriate when observations support that conclusion.
