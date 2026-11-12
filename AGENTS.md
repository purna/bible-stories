# Bible Stories — AI instructions

## Context loading
Read this file first. Inspect only files relevant to the request. Open ARCHITECTURE.md for cross-module work, FEATURES.md for roadmap/status, TESTING.md for checks. Do not load every document by default.

## Implement
- Reuse shared chapter-game engine, shared assets, story template; avoid duplicate systems.
- Preserve story folder structure, cache-busting query versions, offline behaviour and touch controls.
- Prefer focused patches and targeted tests; avoid unrelated rewrites and new dependencies.

## Verify and report
- Run relevant `node tests/*.mjs`; never claim unrun checks passed.
- Update FEATURES.md only when status changes, ARCHITECTURE.md only when interfaces change, CHANGELOG.md only for meaningful user-facing changes.
- Summarise changed files, checks/results, remaining issues concisely.
