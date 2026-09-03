# Layered Comic Template — Rollout Guide

This starter matches the Moses renderer stack: **background SVG → optional Three.js middle ground → foreground SVG → character/dialogue overlay**. It includes three neutral chapters so every layer can be tested before story content is copied in.

## Roll out a story

1. Copy `__Template` to the story folder.
2. Rename `template-story.js`, `template-scenes-helpers.js`, and `styles/template-comic.css` with the story slug; update the three references in `index.html`.
3. Replace `data/manifest.json` and add one `data/actN_<id>.json` per chapter from that story’s game plan.
4. Add `assets/svg/scene_<id>.svg` for the background and `assets/svg/fg_<id>.svg` for the foreground. Use `data-depth` groups for parallax.
5. Add `scenes/<id>.js` and `assets/3d/<id>.json` only when the interaction benefits from depth. Register the scene script in `index.html`.
6. Export the story’s canonical characters and materials from its two tools.
7. Update the web-app manifest, offline page, and precache list; then run the repository checks.

## Required per chapter

- manifest entry and act JSON
- background SVG
- foreground SVG
- scripture reference and simple playable action
- optional, not mandatory: 3D scene and authoring JSON

Do not retain the template’s placeholder characters, text, citations, colours, or scene IDs in a production story.
