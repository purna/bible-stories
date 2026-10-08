# Layered Comic Template — Rollout Guide

This starter matches the Moses renderer stack: **background SVG → optional Three.js middle ground → foreground SVG → character/dialogue overlay**. It includes three neutral chapters so every layer can be tested before story content is copied in.

## Roll out a story

1. Copy `__Template` to the story folder.
2. Rename `template-story.js`, `template-scenes-helpers.js`, and `styles/template-comic.css` with the story slug; update the three references in `index.html`.
3. Replace `data/manifest.json` and add one `data/actN_<id>.json` per chapter from that story’s game plan.
4. Add `assets/svg/scene_<id>.svg` for the background and `assets/svg/fg_<id>.svg` for the foreground. Use `data-depth` groups for parallax.
5. Add `scenes/<id>.js` and `assets/3d/<id>.json` only when the interaction benefits from depth. Register the scene script in `index.html`.
6. Export the story’s canonical characters and materials from its two tools.
7. Set a unique `storyId` in `data/manifest.json`, then update the web-app manifest, offline page, and precache list.
8. Each act ends with a randomly selected challenge from `../__shared/chapter-games/games.json`. The act is complete only after that game reports success.
9. To add a bonus story, add an entry to `bonusStories` in `data/manifest.json`. It is revealed after every act and its challenge are complete.

## Bonus stories

Completion is saved in the browser per story and act. A player must reach the end of an act and finish its challenge before moving on. After all acts and challenges are complete, the bonus links appear. Add one or more entries to the story manifest:

```json
{
  "storyId": "unique-story-slug",
  "bonusStories": [
    {
      "id": "bonus-story",
      "title": "Bonus story title",
      "entry": "Bonus/index.html",
      "description": "Optional short description"
    }
  ]
}
```

Keep `bonusStories` as an empty array when the story has no bonus content. Use a unique `storyId` for every story so chapter completion cannot be shared between stories in the same browser.

## Act-end games

The template randomly chooses from the completable games listed in `../__shared/chapter-games/games.json`. The game files stay shared and are embedded directly in the act challenge window. To make another game eligible, add its filename and display title to that manifest; the game must send its parent window `{ "type": "game-complete" }` after the player succeeds.

## Required per chapter

- manifest entry and act JSON
- background SVG
- foreground SVG
- scripture reference and simple playable action
- optional, not mandatory: 3D scene and authoring JSON

Do not retain the template’s placeholder characters, text, citations, colours, or scene IDs in a production story.
