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

## Engine type names

Use the engine type identifier in each story game plan and in generated act configuration. The identifier names the reusable interaction model; individual prototypes are size or story-themed variants of that engine.

| Game engine type | Display name | Closest prototype examples | Best fit |
|---|---|---|---|
| `find-path` | Find the Faithful Path | `find_path_6x6.html`, `find_path_9x9.html`, `find_path_18x9.html`, `find_path_18x9_adv.html`, `jonah_path.html`, `path_of_moses.html` | Routes, journeys, escapes and guided crossings |
| `listen-respond` | Listen and Respond | `listen_respond_3x2.html`, `listen_respond_4x2.html` | Hearing, discerning and responding to a cue or message |
| `tend-garden` | Tend the Garden | `garde_game_3x3.html`, `garde_game_4x3.html`, `garde_game_4x4.html`, `garde_game_5x3.html`, `garde_game_5x4.html`, `garde_game_5x5.html` | Planting, cultivation and removing unwanted growth |
| `fit-pieces` | Fit the Pieces | `fit_pieces_3x3.html`, `fit_pieces_4x3.html`, `fit_pieces_4x4.html` | Repairing, assembling and placing parts in matching slots |
| `look-closely` | Look Closely | `look_closely_3x3.html`, `look_closely_4x3.html`, `stones_bread.html`, `sheep_count.html`, `build_the_ark_9x4.html`, `build_the_ark._18x4html.html`, `plagues_tap_adv_5x3.html`, `plagues_tap_adv_7x2.html` | Observation, memory, evidence and careful comparison |
| `tap-sequence` | Complete the Story Beat | `tap_sequence_3x2.html`, `tap_sequence_4x1.html`, `plagues_tap.html` | Repeating or completing actions in a clear order |
| `match-it-up` | See the Pattern | `match_it_up_3x4.html`, `match_it_up_4x4.html`, `fruit_spirit.html` | Sorting, pairing, categorising and recognising relationships |
| `keep-balance` | Keep the Balance | `keep_balance_x3.html`, `keep_balance_x3_v2.html` | Sharing limited resources and keeping several needs stable |
| `ready-then-act` | Ready, Then Act | `ready_then_act_multibar_balanced.html`, `david_goliath.html`, `daniels_den.html` | Timing a decisive action after waiting for the right moment |
| `watch-and-move` | Watch and Move | `watch_move_river_crossing_easy.html` | Moving through hazards, patrols or safe openings |
| `gather-with-care` | Gather with Care | `manna_drop.html`, `good_samaritan.html` | Collecting, carrying, preparing or helping without taking excess |
| `story-builder` | Build the Scene | `temple_builder.html`, `temple_builder_v1.html`, `tower_babel.html` | Constructing a story object where the build itself is the main action |

| Game engine type | Display name | Best fit |
|---|---|---|
| `find-path` | Find the Faithful Path | Routes, journeys, escapes and guided crossings |
| `listen-respond` | Listen and Respond | Hearing, discerning and responding to a cue or message |
| `tend-garden` | Tend the Garden | Planting, cultivation and removing unwanted growth |
| `fit-pieces` | Fit the Pieces | Repairing, assembling and placing parts in matching slots |
| `look-closely` | Look Closely | Observation, memory, evidence and careful comparison |
| `tap-sequence` | Complete the Story Beat | Repeating or completing actions in a clear order |
| `match-it-up` | See the Pattern | Sorting, pairing, categorising and recognising relationships |
| `keep-balance` | Keep the Balance | Sharing limited resources and keeping several needs stable |
| `ready-then-act` | Ready, Then Act | Timing a decisive action after waiting for the right moment |
| `watch-and-move` | Watch and Move | Moving through hazards, patrols or safe openings |
| `gather-with-care` | Gather with Care | Collecting, carrying, preparing or helping without taking excess |
| `story-builder` | Build the Scene | Constructing a story object where the build itself is the main action |

## All example games

This is the complete prototype inventory. Every HTML game in this folder appears exactly once.

| Example game | Game engine type | Variant / intended use |
|---|---|---|
| [`find_path_6x6.html`](./find_path_6x6.html) | `find-path` | Compact 6×6 route board |
| [`find_path_9x9.html`](./find_path_9x9.html) | `find-path` | Medium 9×9 route board |
| [`find_path_18x9.html`](./find_path_18x9.html) | `find-path` | Large 18×9 route board |
| [`find_path_18x9_adv.html`](./find_path_18x9_adv.html) | `find-path` | Advanced large route board |
| [`jonah_path.html`](./jonah_path.html) | `find-path` | Jonah-themed journey variant |
| [`path_of_moses.html`](./path_of_moses.html) | `find-path` | Moses-themed journey variant |
| [`listen_respond_3x2.html`](./listen_respond_3x2.html) | `listen-respond` | Six-signal listening board |
| [`listen_respond_4x2.html`](./listen_respond_4x2.html) | `listen-respond` | Eight-signal listening board |
| [`garde_game_3x3.html`](./garde_game_3x3.html) | `tend-garden` | Compact garden plot |
| [`garde_game_4x3.html`](./garde_game_4x3.html) | `tend-garden` | Twelve-tile garden plot |
| [`garde_game_4x4.html`](./garde_game_4x4.html) | `tend-garden` | Sixteen-tile garden plot |
| [`garde_game_5x3.html`](./garde_game_5x3.html) | `tend-garden` | Wide garden plot |
| [`garde_game_5x4.html`](./garde_game_5x4.html) | `tend-garden` | Large garden plot |
| [`garde_game_5x5.html`](./garde_game_5x5.html) | `tend-garden` | Largest garden plot |
| [`fit_pieces_3x3.html`](./fit_pieces_3x3.html) | `fit-pieces` | Compact fitting board |
| [`fit_pieces_4x3.html`](./fit_pieces_4x3.html) | `fit-pieces` | Twelve-slot fitting board |
| [`fit_pieces_4x4.html`](./fit_pieces_4x4.html) | `fit-pieces` | Sixteen-slot fitting board |
| [`look_closely_3x3.html`](./look_closely_3x3.html) | `look-closely` | Compact observation board |
| [`look_closely_4x3.html`](./look_closely_4x3.html) | `look-closely` | Twelve-card observation board |
| [`stones_bread.html`](./stones_bread.html) | `look-closely` | Temptation-themed observation variant |
| [`sheep_count.html`](./sheep_count.html) | `look-closely` | Counting and observation variant |
| [`build_the_ark_9x4.html`](./build_the_ark_9x4.html) | `look-closely` | Compact ark-building board |
| [`build_the_ark._18x4html.html`](./build_the_ark._18x4html.html) | `look-closely` | Large ark-building board |
| [`plagues_tap_adv_5x3.html`](./plagues_tap_adv_5x3.html) | `look-closely` | Fifteen-tile plague memory variant |
| [`plagues_tap_adv_7x2.html`](./plagues_tap_adv_7x2.html) | `look-closely` | Fourteen-tile plague memory variant |
| [`tap_sequence_3x2.html`](./tap_sequence_3x2.html) | `tap-sequence` | Six-object sequence board |
| [`tap_sequence_4x1.html`](./tap_sequence_4x1.html) | `tap-sequence` | Four-object sequence strip |
| [`plagues_tap.html`](./plagues_tap.html) | `tap-sequence` | Plagues-themed sequence variant |
| [`match_it_up_3x4.html`](./match_it_up_3x4.html) | `match-it-up` | Three-category matching board |
| [`match_it_up_4x4.html`](./match_it_up_4x4.html) | `match-it-up` | Four-category matching board |
| [`fruit_spirit.html`](./fruit_spirit.html) | `match-it-up` | Fruit-themed matching variant |
| [`keep_balance_x3.html`](./keep_balance_x3.html) | `keep-balance` | Three-resource balance board |
| [`keep_balance_x3_v2.html`](./keep_balance_x3_v2.html) | `keep-balance` | Revised three-resource balance board |
| [`ready_then_act_multibar_balanced.html`](./ready_then_act_multibar_balanced.html) | `ready-then-act` | Multi-bar timing challenge |
| [`david_goliath.html`](./david_goliath.html) | `ready-then-act` | Sling-timing story variant |
| [`daniels_den.html`](./daniels_den.html) | `ready-then-act` | Daniel-themed hazard variant |
| [`watch_move_river_crossing_easy.html`](./watch_move_river_crossing_easy.html) | `watch-and-move` | Accessible river-crossing variant |
| [`manna_drop.html`](./manna_drop.html) | `gather-with-care` | Falling-object collection variant |
| [`good_samaritan.html`](./good_samaritan.html) | `gather-with-care` | Helping and care variant |
| [`temple_builder.html`](./temple_builder.html) | `story-builder` | Detailed temple-building variant |
| [`temple_builder_v1.html`](./temple_builder_v1.html) | `story-builder` | Earlier temple-building variant |
| [`tower_babel.html`](./tower_babel.html) | `story-builder` | Tower-building story variant |
## Mechanics

Sizes shown are the prototypes available in this folder. Pick the closest fit to your story's board complexity and theming.

| Mechanic | Prototype | Sizes | Stories that use it (Chapter 1) |
|---|---|---|---|
| Find the Faithful Path | [find_path_6x6.html](./find_path_6x6.html), [find_path_9x9.html](./find_path_9x9.html), [find_path_18x9.html](./find_path_18x9.html) | 6×6, 9×9, 18×9 | Abraham, Elisha, Hannah, Esther, Joshua, Moses, Elijah |
| Listen and Respond | [listen_respond_3x2.html](./listen_respond_3x2.html), [listen_respond_4x2.html](./listen_respond_4x2.html) | 3×2, 4×2 | Jeremiah, Deborah, Nehemiah, Noah |
| Gather with Care | [garde_game_3x3.html](./garde_game_3x3.html), [garde_game_4x3.html](./garde_game_4x3.html), [garde_game_4x4.html](./garde_game_4x4.html), [garde_game_5x3.html](./garde_game_5x3.html), [garde_game_5x4.html](./garde_game_5x4.html), [garde_game_5x5.html](./garde_game_5x5.html) | 3×3 → 5×5 | Adam, Ruth |
| Fit the Pieces | [fit_pieces_3x3.html](./fit_pieces_3x3.html), [fit_pieces_4x3.html](./fit_pieces_4x3.html), [fit_pieces_4x4.html](./fit_pieces_4x4.html) | 3×3, 4×3, 4×4 | Joseph, Daniel, Enoch |
| Fit the Pieces *(themed)* | [temple_builder.html](./temple_builder.html) | 4 stones into a 3×3 grid | Solomon / Temple |
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

## Story-themed prototypes (visual variants)

A few prototypes were painted deliberately differently to match their story's atmosphere. They still share `_shared/timer.js` and `_shared/modal.css` for game-end behaviour, but their in-game palette and effects are bespoke:

- **temple_builder.html** — *Fit the Pieces* painted as the Temple of Solomon. Warm sunset sky with drifting clouds, custom `temple-roof` and `temple-pillar` art, golden stone blocks, dust-burst particles on a correct placement, and a small WebAudio chime engine. Dark `--bg` palette (`#1a1008`) instead of the standard cream — keep this when reusing for temple / sanctuary chapters; swap to the cream palette if reusing for a non-sacred context.
- **david_goliath.html** — *Time the sling* mechanic. Distinct visual style; still uses shared timer + modal.

These files load `_shared/modal.css` and `_shared/timer.js` like the others, so the timer chip and the win/lose modal look identical. Only the play surface and effects are themed.

## Theming a copy for a new story

1. Copy the prototype into `<Story>/__docs/examples/<file>`.
2. Copy `_shared/` alongside it (same relative path).
3. Update `<title>`, the `<h1>`, and the `.sub` line to the story/chapter.
4. Adjust `window.GAME_CONFIG.timerSeconds` if the chapter needs a longer/shorter timer.
5. Update the scripture payoff quoted at game end if you want a chapter-specific verse.