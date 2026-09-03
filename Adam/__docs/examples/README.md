# Mini-game Example Prototypes

Reusable, child-friendly (3-6 year olds) prototypes for every mechanic named in the story game plans. Each story's Chapter 1 uses one of these mechanics — drop the matching prototype into that story's `__docs/examples/` folder and theme its header to the chapter.

Shared prototypes live here in `Adam/__docs/examples/` (Adam is the template story). Each file is a complete, standalone, playable HTML page that uses:
- [Sortable.js](https://github.com/SortableJS/Sortable) CDN for drag-and-drop
- Inline SVG icons only (no emoji)
- Big ≥44×44 CSS px tap targets
- Gentle retry, no lives / game-over screens
- A short scripture payoff on win

## Mechanics

| Mechanic | Prototype | Stories that use it (Chapter 1) |
|---:|---|---|
| Find the Faithful Path | [find_path.html](./find_path.html) | Abraham, Elisha, Hannah, Esther, Joshua, Moses, Eiljah |
| Listen and Respond | [listen_respond.html](./listen_respond.html) | Jeremiah, Deborah, Nehemiah, Noah |
| Gather with Care | [garde_game.html](./garde_game.html) | Adam, Ruth |
| Fit the Pieces | [fit_pieces.html](./fit_pieces.html) | Joseph, Daniel, Enoch |
| Look Closely | [look_closely.html](./look_closely.html) | Jonah, Jacob |
| Complete the Story Beat | [tap_sequence.html](./tap_sequence.html) | Samuel, Babel |
| See the Pattern | [match_it_up.html](./match_it_up.html) | David, Isaiah |
| Keep the Balance | [keep_balance.html](./keep_balance.html) | Job |

## How each prototype plays

- **find_path.html** — tap adjacent grid squares to walk a route from Start to Goal. Path stays lit; wrong taps are ignored.
- **listen_respond.html** — a set of icons is shown; the true sign is clear and the rest are noisy/distracting. Tap the true one.
- **garde_game.html** (Tend the Garden) — drag seeds onto a 3×3 soil grid; each sprouts a flower or a weed. Click weeds quickly to pull them. Win when all 9 tiles bloom.
- **fit_pieces.html** — drag pieces from a tray onto their matching outline slots; wrong pieces snap back with a hint.
- **look_closely.html** — tap cards to reveal hidden icons; match them in sets (with a sparkle "Set!" pop on a match).
- **tap_sequence.html** — watch a glowing order play over three story objects, then tap them in the same order.
- **match_it_up.html** — drag animals into habitat zones (water / land / sky); wrong zones reject the item.
- **keep_balance.html** — drag resource tokens onto the correct meter; keep each meter from emptying across three care rounds.

## Theming a copy for a new story

1. Copy the prototype into `<Story>/__docs/examples/<file>`.
2. Update `<title>`, the `<h1>`, and the `.sub` line to the story/chapter.
3. Update the scripture payoff quoted at game end if you want a chapter-specific verse.
