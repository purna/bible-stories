# Revised story game ideas

Design status: **planned; live game behaviour is unchanged**. The [machine-readable plan](../__shared/chapter-games/story-game-plan.json) contains 209 chapter proposals across all 24 live stories, with one faith crafting chapter per story. Each story’s game-plan document contains the chapter table and recipes. Earlier prototype tables are historical; use the “Revised chapter games and faith crafting” section.

Reference collection: [he-is-talha/html-css-javascript-games](https://github.com/he-is-talha/html-css-javascript-games). Selected references include Memory Cards, Simon Says, Tilting Maze, Frogger, Tower Blocks, Tetris, Minesweeper, Nonogram, Sliding Puzzle, Mastermind, Insect Catch, Archery, Connect Four, Lights Out, Candy Crush and 2048. Adaptations remove forced speed, combat targets, losses and keyboard-only controls. These are references for native shared modules; no code has been copied from the collection.

## What has improved, and what has not

The design now offers broader puzzle variety, a purposeful crafting activity in every story, explicit mobile controls and a consistent chapter-end reward. This is an improvement to the **plans**. This planning update has not made the live games harder or demonstrated that children find them more enjoyable. Existing playable games retain their current behaviour until their replacements are implemented and tested.

Working audience assumption: ages **5–8**, with an optional extra challenge for confident players. This is a product design target, not a validated developmental claim. Reading ability must not be the main obstacle. A child should see what to do from a picture, one short instruction and a worked example.

## Interesting challenge, without frustration

Each game should ask the child to notice, decide and act. Repeatedly pressing the same button, following an always-highlighted answer or changing only the artwork does not meet this requirement. Begin with one demonstrated move, then let the player solve two or three independent steps. Aim for 1–3 minutes for a chapter puzzle; crafting can take 2–4 minutes including its use-in-the-story stage. Treat these as playtest targets, not enforced timers.

| Game family | First encounter | Optional extra challenge | Helpful retry |
|---|---|---|---|
| Memory | Match three illustrated pairs | Four pairs and one briefly hidden clue | Keep correct pairs; reveal one useful card |
| Route and crossing | Choose between two paths using a visible landmark | Plan through a gate or carry one useful item | Return to the last safe point; preserve solved sections |
| Signals and listening | Copy two visual signals | Remember three or four signals with a pause between them | Replay slowly with symbols as well as sound |
| Building and packing | Fit three large pieces to an outline | Rotate a piece or respect one support rule | Show a ghost outline only when Hint is requested |
| Searching and deduction | Inspect three clues to choose a location | Combine two clues to rule out alternatives | Explain one clue rather than immediately revealing the answer |
| Pattern and number puzzles | Complete a small illustrated pattern | Add one missing rule or an extra resource requirement | Keep valid placements and allow undo |
| Crafting | Follow a visible two-ingredient recipe, then use the object | Make a component first, choose between two recipes, then assemble or distribute the result | Return ingredients, replenish supplies and show the next recipe step |

Increase only one source of difficulty at a time: more pieces, a longer sequence, a dependency or an extra clue. Do not increase reading load and time pressure together. Offer **Hint**, **Try again** and an optional **Extra challenge**; keep Skip available. Do not automatically switch difficulty or punish the player for using help.

## Crafting must have a meaningful finish

Discovery alone is not the ending. Apply the crafted object in the comic setting: cover Gideon’s torch and reveal it at the signal; assemble Noah’s ark sections in dependency order; distribute Joseph’s stored grain to pictured needs; position Nehemiah’s wall and gate pieces; or use Ruth’s basket to gather and share grain. These are proposed second-stage designs and must be reconciled with the chosen chapter’s actual panels.

Keep the base recipe achievable with renewable materials. A harder optional route can add a component or a spatial constraint, but never permanently consume a needed item. Reward the completed action with a visible change to the scene and the shared comic completion effect, rather than a score for repeated tapping.

## Evidence required before calling a game improved

A technical check establishes that the game works; it does not establish that it is fun. Observe representative young players, with appropriate adult involvement, before making that claim. Record whether they understand the task after the example, make an independent decision, recover from a mistake, can use Hint/Skip and reach the ending on a small phone. Note confusion, accidental taps and lost interest. Use those observations to tune the board, clues and optional challenge. Do not collect identifying child data or add analytics for this exercise.

## Crafting coverage

| Story | Live chapters | Crafting chapter | Crafting goal |
|---|---:|---:|---|
| Adam & Eve | 6 | 2 | Garden |
| Enoch | 7 | 2 | Staff, Sandals, Waterskin |
| Noah | 10 | 3 | Ark |
| Babel | 5 | 2 | Shared shelter |
| Abraham | 10 | 7 | Tent, Bread |
| Jacob | 10 | 3 | Pillar, Staff |
| Joseph | 10 | 7 | Granary |
| Moses | 15 | 14 | Curtain, Frame |
| Joshua | 10 | 3 | Horn, Horn, Memorial |
| Deborah | 7 | 3 | Banner, Banner, Peg |
| Gideon | 7 | 6 | Covered torch |
| Ruth | 8 | 3 | Basket, Bread |
| Hannah | 8 | 6 | Robe, Basket |
| Samuel | 10 | 2 | Oil Flask, Lamp |
| David | 12 | 2 | Sling, Smooth Stone, Smooth Stone |
| Elijah | 7 | 2 | Altar, Cake |
| Elisha | 9 | 3 | Full Jar, Full Jar, Bowl |
| Job | 10 | 6 | Altar, Cloth |
| Jonah | 4 | 3 | Scroll, Sackcloth |
| Isaiah | 9 | 1 | Scroll, Coal |
| Jeremiah | 10 | 5 | Vessel, Belt |
| Daniel | 5 | 1 | Meal, Window |
| Esther | 10 | 1 | Royal Robe, Perfume |
| Nehemiah | 10 | 8 | Wall, Wall, Gate |

## Example assessment

V1 provides a simple finite gather/combine/deliver loop. V2 adds a second call, renewable resources, growing and repeated-press challenges. Keep the recipe data and discovery feedback; replace repeated pressing with a meaningful story task. Neither example covers Babel or Gideon, so both receive new recipes. Adam’s V2 menu points to an external artifact; use its local recipe data instead.

## Before implementation

These proposals do not yet satisfy the requested global uniqueness of every chapter mechanic: they reuse reference families. Each story uses distinct families internally, but cross-story rules need individual design review. The live/canonical chapter mismatch is marked in the JSON and relevant story docs. Do not silently invent missing comic chapters. Recipe associations and illustrative crafts also require review against the actual panels. Implement and test each approved native game before changing its status from planned.


## Standalone playable prototypes

Six new examples are available in [Bible puzzle workshop](examples/new-game-ideas.html): Noah’s Pair Rescue, Gideon’s Lantern Pattern, Esther’s Secret Seal, Creation Picture Grid, Nehemiah’s Gate Puzzle and Ruth’s Bread Workshop. Each is a self-contained HTML file with SVG illustrations, hints, retry, an optional harder variant and a completion state. They work from disk without network requests. Base and extra variants have automated completion checks; mobile layouts and touch targets have been checked at 320px and 390px, plus desktop at 1024px. Young-player playtesting and live chapter integration are still outstanding.
