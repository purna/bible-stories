# Bible Stories — Testing guide

## Current approach
Node.js scripts using `node:assert`. Run individual: `node tests/<name>.mjs`. Browser smoke tests in `tests/*browser*.mjs` and `tests/*mobile*.mjs`.

## Minimum acceptance checks
- Review diff and affected story entry points.
- Run relevant `tests/*.mjs` for changed areas.
- Check desktop and touch/mobile interactions where relevant.
- Validate persistence, offline behaviour if affected.
- Record exact commands and results.
