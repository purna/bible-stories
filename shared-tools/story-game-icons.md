# Game action icons

Load `story-game-icons.js` before `story-game-controls.js`.
Buttons use `data-game-icon` semantic IDs, which stay unchanged when a label
is translated. The SVG is decorative (`aria-hidden`); retain the visible label
or an accessible name. Existing game artwork, animal cards, road tiles and
compass icons are preserved.

`StoryGameIcons.decorate(button, id)` adds the icon while preserving the
button's contents and listeners. `StoryGameIcons.svg(id)` returns SVG markup.

Available IDs: give, take, check, survey, search, star, water, dough, bread,
serve, person, escort, poles, pegs, canopy, wood, mountain, ram, next, skip,
retry, listen, choice, order, river, music, up, down, left, right.
Use `wood:add`, `wood:take`, `water:add`, and `water:take` for inventory actions.

Abraham's native button factory accepts the semantic icon as its fourth
argument. Other games use stable control IDs, classes or explicit icon IDs.
