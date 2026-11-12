# Bible Stories — Architecture

## Verified baseline
Static HTML/CSS/JS interactive comics. No build toolchain at root; Node.js scripts (Node 18+) for authoring, content generation, and tests. Playwright/Puppeteer in `Daniel/`. Service worker (`sw.js`) for offline.

## Primary concerns
Per-story layered comic pages, chapter games (`__shared/chapter-games`), shared audio/fonts/SVG, authoring scripts (`scripts/`), mobile touch interactions, offline caching.

## Architecture map
| Subsystem | Entry points / files | Notes |
| --- | --- | --- |
| Story pages | `<Story>/index.html`, `chapters.html`, `journey.html` | One folder per story |
| Shared games | `__shared/chapter-games/games.json`, `chapter-game.js` | Random completable game per act |
| Authoring | `scripts/*.mjs`, `shared-tools/` | Content generation, manifest updates |
| Tests | `tests/*.mjs` (node assert) | Run with `node tests/<file>.mjs` |
| Offline | `sw.js`, `precache-manifest.json` | Service worker caching |
| Template | `__Template/` | Starter for new stories |

## Change policy
Inspect relevant story files before editing; reuse shared assets and chapter-game engine; keep cache-busting query versions consistent.
