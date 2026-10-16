# Generated chapter-end games

This package contains 216 generated end-of-chapter game pages for 23 Bible stories.

Each game is stored at `{Story}/__docs/examples/{story}_act{n}.html` and loads the shared runtime from `__shared/chapter-games/chapter-game.js`. Every story folder contains its own `story-canon.json`; the repository-root copy is retained as the package source of truth.

The games use 12 engine types selected from the prototypes in `__Template/__docs/examples/`: pathfinding, listening, garden tending, fitting pieces, close observation, sequence replay, category matching, resource balancing, timing, hazard crossing, gathering, and scene building. Each chapter uses the engine named in its game plan, then selects the closest prototype variant for its story action and theme.

The exact engine assignment for every chapter is recorded in `manifest.json`. The original engine prototypes and their shared timer/modal files are packaged under `__shared/chapter-games/engines/`.

Because browsers restrict local JSON requests, preview the package through a local web server rather than opening an HTML file directly.

Completion sends a `bible-story-game-complete` message to the parent window and dispatches an event with the same name.

## Current live chapter game copies

Start at `index.html`, then choose a story. Each of the 24 live stories now has a `{Story}/index.html` test index. The historical `Eiljah` folder links to the current `Elijah` index.

`current-games-manifest.json` is the current export inventory; `{Story}/current-games.json` records chapter coverage and source hashes. There are **26 connected games across seven stories**: Abraham (10), Deborah (7), Jonah (4), Daniel (2), Adam (1), Noah (1), Elijah (1). Other chapter cards explicitly state that no live game is connected. The older `manifest.json` and `__docs/examples/` pages describe generated design demos, not live coverage; those files are preserved.

Current test pages use `{Story}/chapter-NN.html` and copied runtime files in `{Story}/current/`. They launch the existing interaction directly, without a frame or stepping through the comic. Abraham mounts its copied native module; the other exports retain the necessary story shell and boot directly into the copied interaction. The test adapter changes launch placement and return navigation, not puzzle rules. Source artwork, audio, data and some shared dependencies remain linked to the repository. These pages are standalone entry points, not self-contained portable HTML files.

Current game copies now open directly from disk as well as through the preview server, for example `http://127.0.0.1:8123/__games/games/`. The Abraham export uses a classic-script build of the native module; the other exports bundle their JSON and SVG data in a classic-script loader for file URLs. Earlier generated demos may still require the server. Test progress uses a separate `chapter-game-test:{Story}:` storage prefix. The normal story progression tracker is omitted. Restart reloads the test; Game index, Skip and Continue return to the story test list.

Regenerate after changes to the live games:

```sh
python3 scripts/export-current-game-tests.py
```

The export snapshots active scripts and records their hashes. It does not copy every media dependency or replace the current story games. Re-run `tests/current-game-exports.mjs` to check all 26 launches. Set `FILE_MODE=1` to test direct disk opening; this mode has passed for all 26 current game copies.


### Standalone layout and full game phases

The export also installs `__shared/current-game-test-layout.js` from `scripts/current-game-test-layout.js`. It removes leftover comic-only notices and navigation, measures the test toolbar to prevent overlap, and keeps the game host in normal scrolling layout. Daniel’s adapter restores the vision artwork and counter, makes assembly and delivery choices visible outside the comic, and shows a completion/Continue panel after delivery. It preserves the copied fragment, distortion, assembly and delivery rules. Both Daniel games have been tested from disk through every phase at 320px and 1280px (`tests/daniel-game-export-flow.cjs`).


## Crafting v2 story games

Every current story test folder except Abraham also contains `crafting-v2.html`, linked prominently from its `index.html`. There are 23 crafting copies in total. These are standalone prototypes, separate from the 26 connected chapter games. The existing Crafting v2 examples supply 21 copies; Babel and Gideon have new story-specific configurations using that same system. Abraham retains its ten-game test set and receives no extra crafting page.

Each copy works directly from disk, uses local index navigation, includes Restart and Skip, and does not write normal story progress. The copied games retain Crafting v2’s two callings, recipes, six-action days and replenishment through End day. Run `python3 scripts/add-crafting-game-tests.py` to refresh these copies; the main game exporter also runs it automatically. `tests/crafting-v2-story-copies.mjs` checks their recipe chains, both callings, completion and restart.

Crafting games now show a prominent “Day N is over!” panel when all six actions are used. “Start new day →” advances the day, restores six actions and preserves materials. A new-day confirmation explains the refreshed actions. The feedback is maintained in `scripts/crafting-day-feedback.js` and included in Crafting v2 examples and exported crafting pages. `tests/crafting-day-feedback.mjs` verifies this flow across all 23 story copies.
