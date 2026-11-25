# Downloadable story packages

Every complete story in `assets/journey/stories.json` is packaged automatically
as a ZIP. The `Package complete stories` GitHub Actions workflow runs on pushes
to `main`, rebuilds all complete packages, commits them to `dist/`, and the
Pages workflow deploys the result.

Because the Pages deployment publishes the whole repository, finished packages
are available at:

```
https://purna.github.io/bible-stories/dist/<story-id>.zip
https://purna.github.io/bible-stories/dist/manifest.json
```

`dist/manifest.json` lists every package with its id, title, version, file
count, size, and SHA-256 hash. Archives use fixed timestamps and the manifest
has no build timestamp, so unchanged stories produce identical files.

## What counts as complete

A story folder is packaged when:

1. It appears in `assets/journey/stories.json`.
2. Its entry folder contains `index.html`.
3. Its files can be resolved from `precache-manifest.json`, or, for stories
   without a precache manifest, by crawling local HTML/CSS/JS references.

Nested stories such as `Abraham/Babel/` are supported. Parent-relative files
(`../css/...`, `../../shared-tools/...`) and site-root shared folders
(`shared/`, `shared-tools/`, `assets/journey/`, `__shared/`) are written into
the ZIP at their site-root paths so the original relative URLs keep working.

Incomplete folders and folders with no package files are skipped with a message
in the workflow log.

## Optional per-story overrides

A `mediamesh-package.json` file is no longer required. Create one in the story
folder (the same folder that contains `index.html`) when you need to override
the automatic file list or disable packaging. Nested folders such as
`Abraham/Babel/` work too.

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

When `files` is present, it replaces automatic discovery for that story. Set
`"enabled": false` to keep a story in the catalog but skip packaging it.

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
node scripts/package-stories.mjs --check   # validate every complete story
node scripts/package-stories.mjs           # build dist/*.zip and manifest.json
node scripts/package-stories.mjs --verbose # show crawl warnings
unzip -l dist/TestStory.zip                # inspect the result
```

The script uses only Node built-ins, so no `npm install` is needed.

## Workflow

`.github/workflows/package-complete-stories.yml` runs:

1. `node scripts/package-stories.mjs --check`
2. `node scripts/package-stories.mjs`
3. commits changed files under `dist/`
4. `static.yml` deploys the latest `main` commit, including the new packages

The workflow ignores `dist/**` pushes so its own commit does not retrigger it.
Use **Actions → Package complete stories → Run workflow** to rebuild manually.
