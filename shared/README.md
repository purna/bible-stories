# Shared story assets

- `fonts/`: local font files. Story pages load Google Fonts; their font stacks use separately named `Local` faces from `css/fonts.css` when Google Fonts is unavailable. Existing comic lettering fonts also live here.
- `audio/ui/`: common interface sounds, including `ping_pong.mp3`.
- `audio/sfx/` and `audio/transitions/`: reusable sound libraries.
- `audio/<story>/sfx/`: story-specific effects. Story-specific production notes stay beside these assets. Music lives in each story’s own `assets/music/` folder.
- `svg/balloons/`: shared speech balloons and caption backgrounds.

Story data and JavaScript audio paths resolve relative to the story page. CSS URLs resolve relative to the stylesheet. The nested Babel story uses paths relative to `Abraham/Babel/`.

After adding assets, run `node scripts/refresh-precache.mjs`. Verify the packages with `node tests/shared-assets-test.mjs`.
