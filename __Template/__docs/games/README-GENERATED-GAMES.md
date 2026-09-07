# Generated chapter-end games

This package contains 216 generated end-of-chapter game pages for 23 Bible stories.

Each game is stored at `{Story}/__docs/examples/{story}_act{n}.html` and loads the shared runtime from `__shared/chapter-games/chapter-game.js`. The runtime reads the chapter title, central question, and game objective from the repository-root `story-canon.json`.

Because browsers restrict local JSON requests, preview the package through a local web server rather than opening an HTML file directly.

Completion sends a `bible-story-game-complete` message to the parent window and dispatches an event with the same name.
