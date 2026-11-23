# Downloadable story packages

Story folders can opt into being packaged as a ZIP for download. The
`package-stories` GitHub Actions workflow runs on every push to `main`, finds
every folder containing a `mediamesh-package.json` config, and writes the
resulting archives to `dist/`.

Because the Pages deployment publishes the whole repository, finished packages
are available at:

```
https://purna.github.io/bible-stories/dist/<story-id>.zip
https://purna.github.io/bible-stories/dist/manifest.json
```

`dist/manifest.json` lists every package with its id, title, version, file
count, size, and SHA-256 hash.

## Adding a story to the packaging list

Create a `mediamesh-package.json` file in the story folder (the same folder that
contains `index.html`). Nested folders such as `Abraham/Babel/` work too.

```json
{
  "enabled": true,
  "id": "TestStory",
  "title": "MediaMesh Test Story",
  "version": "1.0.0",
  "entry": "TestStory/",
  "files": [
    "index.html",
    "manifest.json",
    "favicon.svg",
    "README.md",
    "css/*.css",
    "js/*.js",
    "data/*.json",
    "assets/**/*",
    "../shared/svg/balloons/caption-spoken.svg"
  ]
}
```

### Fields

| Field | Required | Meaning |
| --- | --- | --- |
| `enabled` | no | Set to `false` to skip packaging without deleting the config. |
| `id` | no | Package id and ZIP filename. Defaults to the folder name. Only letters, digits, `.`, `_`, and `-` are allowed. |
| `title` | no | Human-readable title recorded in `dist/manifest.json`. |
| `version` | no | Package version. Defaults to `1.0.0`. Bump this when story contents change. |
| `entry` | no | Path of the story folder relative to the site root. Defaults to the folder's actual path. Include the trailing `/`. |
| `files` | yes | Explicit files, directories, or glob patterns to include. |

### Path rules

- Paths are relative to the story folder.
- `../shared/...`, `../shared-tools/...`, and `../assets/journey/...` are
  supported. These are written into the ZIP at their site-root paths so the
  story's original relative URLs keep working after extraction.
- Globs support `*`, `?`, and `**`. A bare directory name includes all files
  below it recursively.
- `index.html` is required. The config file itself is always included.
- A pattern that matches no files is treated as an error, so stale configs are
  caught in CI.

ZIP contents mirror the published site layout. For example, the `TestStory`
archive contains:

```
TestStory/index.html
TestStory/data/act1_welcome.json
TestStory/assets/art/scene-one.svg
shared/svg/balloons/caption-spoken.svg
TestStory/mediamesh-package.json
```

## Testing locally

```bash
node scripts/package-stories.mjs --check   # validate configs only
node scripts/package-stories.mjs           # build dist/*.zip and manifest.json
unzip -l dist/TestStory.zip                # inspect the result
```

The script uses only Node built-ins, so no `npm install` is needed.
