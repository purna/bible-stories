# Generated chapter-end games

This package contains 216 generated end-of-chapter game pages for 23 Bible stories.

Each game is stored at `{Story}/__docs/examples/{story}_act{n}.html` and loads the shared runtime from `__shared/chapter-games/chapter-game.js`. Every story folder contains its own `story-canon.json`; the repository-root copy is retained as the package source of truth.

The games use 12 distinct engines selected from the prototypes in `__Template/__docs/examples/`: pathfinding, listening, garden tending, fitting pieces, close observation, sequence replay, category matching, resource balancing, timing, hazard crossing, gathering, and scene building. Engine order is shuffled independently and deterministically for each story, with no engine repeated within a story.

The exact engine assignment for every chapter is recorded in `manifest.json`. The original engine prototypes and their shared timer/modal files are packaged under `__shared/chapter-games/engines/`.

Because browsers restrict local JSON requests, preview the package through a local web server rather than opening an HTML file directly.

Completion sends a `bible-story-game-complete` message to the parent window and dispatches an event with the same name.
