# Mini-game Example Prototypes

Reusable, child-friendly (3-6 year olds) prototypes for every mechanic named in the story game plans. Each story's Chapter 1 uses one of these mechanics — drop the matching prototype into that story's `__docs/examples/` folder and theme its header to the chapter.

Shared prototypes live here in `Adam/__docs/examples/` (Adam is the template story). Each file is a complete, standalone, playable HTML page that uses:
- [Sortable.js](https://github.com/SortableJS/Sortable) CDN for drag-and-drop
- Inline SVG icons only (no emoji)
- Big ≥44×44 CSS px tap targets
- Gentle retry, no lives / game-over screens
- A short scripture payoff on win

## Shared assets

Every prototype pulls two small files from `_shared/` so the timer and the win/lose modal look identical across games:

- **`_shared/timer.js`** — adds a fixed corner countdown chip (top-right) whose colour escalates green → amber (`warn`) → red pulsing (`bad`) as time runs out. Configure with `window.GAME_CONFIG = { timerSeconds: 90, timer: true }` (set `timer: false` or load with `?timer=off` to disable). Fires a `game-timeout` window event at zero; removes itself on `game-complete` / `game-over`.
- **`_shared/modal.css`** — styles for the `.modal-overlay` / `.modal-card` (`.success` and `.timeout` variants, including the `.modal-verse` scripture card and the big "Try again / Walk again" `.modal-btn`).

Both game-end events are dispatched on `window`:

- `game-complete` — success modal shown
- `game-over` — timeout / failure modal shown

Prototypes that load inside an iframe also `postMessage({ type: 'game-complete', game: '<mechanic>' }, '*')` to the parent so a chapter shell can advance.

## Mechanics

Sizes shown are the prototypes available in this folder. Pick the closest fit to your story's board complexity and theming.

| Mechanic | Prototype | Sizes | Stories that use it (Chapter 1) |
|---|---|---|---|
| Find the Faithful Path | [find_path_6x6.html](./find_path_6x6.html), [find_path_9x9.html](./find_path_9x9.html), [find_path_18x9.html](./find_path_18x9.html) | 6×6, 9×9, 18×9 | Abraham, Elisha, Hannah, Esther, Joshua, Moses, Elijah |
| Listen and Respond | [listen_respond_3x2.html](./listen_respond_3x2.html), [listen_respond_4x2.html](./listen_respond_4x2.html) | 3×2, 4×2 | Jeremiah, Deborah, Nehemiah, Noah |
| Gather with Care | [garde_game_3x3.html](./garde_game_3x3.html), [garde_game_4x3.html](./garde_game_4x3.html), [garde_game_4x4.html](./garde_game_4x4.html), [garde_game_5x3.html](./garde_game_5x3.html), [garde_game_5x4.html](./garde_game_5x4.html), [garde_game_5x5.html](./garde_game_5x5.html) | 3×3 → 5×5 | Adam, Ruth |
| Fit the Pieces | [fit_pieces_3x3.html](./fit_pieces_3x3.html), [fit_pieces_4x3.html](./fit_pieces_4x3.html), [fit_pieces_4x4.html](./fit_pieces_4x4.html) | 3×3, 4×3, 4×4 | Joseph, Daniel, Enoch |
| Look Closely | [look_closely_3x3.html](./look_closely_3x3.html), [look_closely_4x3.html](./look_closely_4x3.html) | 3×3, 4×3 | Jonah, Jacob |
| Complete the Story Beat | [tap_sequence_3x2.html](./tap_sequence_3x2.html), [tap_sequence_4x1.html](./tap_sequence_4x1.html) | 3×2, 4×1 | Samuel, Babel |
| See the Pattern | [match_it_up_3x4.html](./match_it_up_3x4.html), [match_it_up_4x4.html](./match_it_up_4x4.html) | 3×4, 4×4 | David, Isaiah |
| Keep the Balance | [keep_balance_x3.html](./keep_balance_x3.html), [keep_balance_x3_v2.html](./keep_balance_x3_v2.html) | 3 meters | Job |

## How each prototype plays

- **find_path_(NxM).html** — tap adjacent grid squares to walk a route from Start to Goal. Path stays lit; wrong taps are ignored. HUD shows `Steps` and `Clicks left` (the click budget). On win, a green check modal with a scripture card ("Your word is a lamp for my feet, a light on my path." — Psalm 119:105). On timeout or zero clicks, a red hourglass modal with Psalm 37:23. Larger boards get a bigger budget and longer timer (e.g. 18×9 = 35 clicks / 120 s).
- **listen_respond_(NxM).html** — a set of icons is shown; the true sign is clear and the rest are noisy/distracting. Tap the true one.
- **garde_game_(NxM).html** (Tend the Garden) — drag seeds onto a soil grid; each sprouts a flower or a weed. Click weeds quickly to pull them. Win when all tiles bloom.
- **fit_pieces_(NxM).html** — drag pieces from a tray onto their matching outline slots; wrong pieces snap back with a hint.
- **look_closely_(NxM).html** — tap cards to reveal hidden icons; match them in sets (with a sparkle "Set!" pop on a match).
- **tap_sequence_(NxM).html** — watch a glowing order play over three story objects, then tap them in the same order.
- **match_it_up_(NxM).html** — drag animals into habitat zones (water / land / sky); wrong zones reject the item.
- **keep_balance_x3.html** — drag resource tokens onto the correct meter; keep each meter from emptying across three care rounds.

## End-of-game modal behaviour

All prototypes that share `_shared/modal.css` use one consistent two-state modal:

- **Success (`.success`)** — green check icon, green button, verse card rendered as `.modal-verse` (auto-detected when the message line contains a curly-quote).
- **Timeout / fail (`.timeout`)** — red hourglass icon, red button, the same `.modal-verse` styling on the consolation scripture.

The button text adapts to the mechanic (`Walk again` for find_path, `Try again` elsewhere) and reloads the page.

## Theming a copy for a new story

1. Copy the prototype into `<Story>/__docs/examples/<file>`.
2. Copy `_shared/` alongside it (same relative path).
3. Update `<title>`, the `<h1>`, and the `.sub` line to the story/chapter.
4. Adjust `window.GAME_CONFIG.timerSeconds` if the chapter needs a longer/shorter timer.
5. Update the scripture payoff quoted at game end if you want a chapter-specific verse.