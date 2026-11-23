# MediaMesh Test Story

A deliberately small story package for testing **download → install → read** in the
MediaMesh app. It follows the same conventions as the full story folders:

- `index.html` — player entry point
- `data/manifest.json` + `data/act*.json` — the story content, loaded with `fetch()`
- `css/`, `js/`, `assets/` — presentation and art
- `precache-manifest.json` — the list of files a downloader needs
- one `../shared/...` asset, to check that parent-relative paths are handled too

The story has two short chapters and one choice. It has no service worker and no
external CDN dependencies, so it works completely offline once installed.

## Publishing

This folder is deployed verbatim by the repository's GitHub Pages workflow. Push it
to `main` and it becomes available at:

https://purna.github.io/bible-stories/TestStory/

`assets/journey/stories.json` has an entry with `"id": "TestStory"` and
`"entry": "TestStory/"` so the MediaMesh app's story catalog includes it.

`mediamesh-package.json` opts this folder into the packaging workflow. After a
push to `main`, the finished download is available at:

https://purna.github.io/bible-stories/dist/TestStory.zip

See `PACKAGING.md` at the repository root for the config format and details.
