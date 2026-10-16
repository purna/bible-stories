# Shared comic player

`story-player.js` is the common player currently used by Ruth and Jonah.
Story entry scripts supply `window.STORY_PLAYER_CONFIG` before loading it.

- `id`: story identity.
- `characters`: speaker IDs mapped to SVG filenames in the story's character folder.
- `placeholder`: optional fallback illustration.
- `onActRender({act, actIndex})`: optional atmosphere styling.
- `onSceneMount({act, graphicContainer})`: optional scene artwork plugin.
- `onChapterEnd({act, actIndex, continueStory})`: return true to open a chapter game; call `continueStory` when it ends.

The player reads `data/manifest.json` and its chapter JSON files, and owns
navigation, choices, layered scenes, characters and audio. Text item presentation
is handled by `story-text-rendering.js`. StoryRuntime manages input locks.

`window.StoryPlayer` exposes read-only chapter/state access, `ready`,
`currentAct`, `audio`, `nextLine`, `nextChapter`, and `selectChapter`.

Jonah's exploration game and whale illustration are plugins. The old
`storyEngine.js` reader and its test/beat scripts are not loaded by the comic.
No frame is used by the shared player or Jonah's game plugin.
