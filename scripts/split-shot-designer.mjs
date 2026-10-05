/**
 * Split the inline <script> in shot_designer.html into js/ modules.
 *
 * Everything is moved VERBATIM by line range — nothing is retyped, which is
 * what went wrong on the earlier attempt. Each slice is asserted against its
 * expected first token before use, and every emitted module is syntax-checked.
 *
 * Re-runnable: reads the .pre-split.bak backup, so it is idempotent.
 */
import fs from 'node:fs';
import path from 'node:path';

const dir = '/Users/nigelmorris/Documents/GitHub/bible-stories/__Template/tools/shot-designer';
const SRC = path.join(dir, 'shot_designer.html.pre-split.bak');
const lines = fs.readFileSync(SRC, 'utf8').split('\n');

const at = n => lines[n - 1];
const slice = (a, b) => lines.slice(a - 1, b);
const dedent = arr => arr.map(l => l.replace(/^ {8}/, ''));
const text = (a, b) => dedent(slice(a, b)).join('\n');

// guard: assert a boundary line starts with the expected token
const must = (n, token) => {
  const l = at(n);
  if (!l.includes(token)) throw new Error(`boundary drift at ${n}: want "${token}", got "${l.trim()}"`);
};
[[273, 'D2R'], [283, 'PL'], [293, 'CATS'], [270, 'V3'], [1325, 'TRN'],
 [1340, 'DEFT'], [1349, 'ez'], [1436, 'PC'], [1462, 'CVP'], [95, 'WebGLRenderer'],
 [2163, 'THREE.Clock'], [2168, 'wg.attributes'], [2178, 'cam(t)'], [903, 'reg = {}']]
  .forEach(([n, t]) => must(n, t));

const header = name => [
  '/**',
  ` * ${name}`,
  ' *',
  ' * Extracted verbatim from shot_designer.html by scripts/split-shot-designer.',
  ' */',
  '',
].join('\n');

/* ── js/easing.js : D2R, cl, L, EA (273-282) ── */
// Line 273 is a *continuation* of the V3/Y/c0 chain (`D2R = ...`, no `const`),
// so the keyword must be supplied here — otherwise the slice degrades into a
// comma expression that still parses but exports nothing.
const easing = header('EASING + scalar math') +
  'export const D2R = Math.PI / 180,\n' +
  text(274, 275) + '\n' +
  text(276, 282).replace(/^const EA/m, 'export const EA') + '\n';

/* ── js/shots.js : PL, PS, HH, CATS (283-902) ── */
const shots = header('Shot catalogue — camera-move presets') +
  text(283, 902)
    .replace(/^const PL/m, 'export const PL')
    .replace(/^const CATS/m, 'export const CATS') + '\n';

/* ── js/transition-data.js : TRN, DEFT, PC, CVP, CVN ── */
const td = header('Transition + curve tables') +
  [
    text(1325, 1339).replace(/^const TRN/m, 'export const TRN'),
    // DEFT was chained to `ez` (line 1349), so its slice ends in a bare comma;
    // terminate the statement or the following declarations land in expression
    // position.
    text(1340, 1348).replace(/^const DEFT/m, 'export const DEFT').replace(/\},\s*$/, '};'),
    text(1436, 1442).replace(/^const PC/m, 'export const PC'),
    text(1462, 1470).replace(/^const CVP/m, 'export const CVP')
  ].join('\n') + '\n';

/* ── js/app.js : everything else ── */
const BOOTSTRAP = [
  "import { D2R, cl, L, EA } from './easing.js';",
  "import { PL, PS, HH, CATS } from './shots.js';",
  "import { TRN, DEFT, PC, CVP, CVN } from './transition-data.js';",
  "import { SceneLibrary } from './scene-library.js';",
  '',
  '// --- renderer / scene / camera -------------------------------------',
  '// Scene contents come from scenes/ via SceneLibrary (see bottom of file).',
  'const R = new THREE.WebGLRenderer({',
  '    antialias: true',
  '});',
  'R.setPixelRatio(Math.min(devicePixelRatio, 2));',
  "document.getElementById('vp').appendChild(R.domElement);",
  'const S = new THREE.Scene();',
  'const C = new THREE.PerspectiveCamera(55, 1, .1, 400);',
].join('\n');

// KEEP ranges (inclusive) from the original
const keep = [
  [270, 272],   // V3, Y, c0
  [903, 1324],  // reg,$,sn .. cam()
  [1349, 1349], // ez
  [1350, 1435], // render targets, shader, snap, frame
  [1443, 1461], // pr_, trn, fmt, opts, cvOpen, hd
  [1471, 2167], // cvSVG, curve, card, sync, tl, after, events, io, export, orbit
  [2178, 2180]  // cam(t); frame(); })();
];

// drop = everything else in 95..2180
const drop = new Set();
for (let n = 95; n <= 2180; n++) drop.add(n);
for (const [a, b] of keep) for (let n = a; n <= b; n++) drop.delete(n);
// the water/boat animation now lives in the scene module
for (let n = 2168; n <= 2177; n++) drop.add(n);

const body = [];
for (let n = 95; n <= 2180; n++) {
  if (drop.has(n)) continue;
  let l = lines[n - 1].replace(/^ {8}/, '');
  // `c0` ended the V3/Y/c0 chain by continuing into D2R; with D2R moved out the
  // trailing comma would leave the next declaration in expression position.
  if (n === 272) l = l.replace(/,\s*$/, ';');
  // `ez` was the second member of the DEFT chain. With DEFT moved out, `ez = ...`
  // becomes a bare assignment, which throws in a module (strict mode) — it needs
  // its own declaration. This parses either way, so only a runtime check finds it.
  if (n === 1349) l = 'const ' + l.trim();
  body.push(l);
}

// Scene wiring. This must be emitted BEFORE the render loop: the loop's IIFE
// runs synchronously on first evaluation and calls library.update(t), so a
// `const library` declared after it would be in the temporal dead zone.
const SCENE_WIRING = [
  '// --- scene wiring -------------------------------------------------',
  '// Procedural scenes live in scenes/ and are swapped in by SceneLibrary,',
  '// which also owns the per-frame scene update (swell, drift, ...).',
  'const library = new SceneLibrary({',
  '    scene: S,',
  '    camera: C,',
  '    keep: [aux],',
  "    select: document.getElementById('scn')",
  '});',
  'library.init().then(() => {',
  "    const note = document.getElementById('scne');",
  '    const n = library.entries.length;',
  "    if (note) note.textContent = n ? `${n} scene${n === 1 ? '' : 's'} available` : 'No scenes listed in the manifest';",
  '    sync();',
  '}).catch(e => {',
  "    const note = document.getElementById('scne');",
  "    if (note) { note.textContent = e.message || String(e); note.style.color = '#e57373'; }",
  "    console.error('[scene-library]', e);",
  '});',
].join('\n');

let app = header('Shot designer runtime') + BOOTSTRAP + '\n' + body.join('\n');

// splice scene update into the render loop
app = app.replace(
  /(\n\s*idle \+= 1;\n)/,
  '$1    library.update(t);\n'
);
if (!/library\.update\(t\)/.test(app)) throw new Error('render-loop splice point not found');

// splice the library setup in ahead of the loop (which calls it immediately)
if (!/const clk = new THREE\.Clock\(\);/.test(app)) throw new Error('render loop not found');
app = app.replace(
  /(const clk = new THREE\.Clock\(\);)/,
  SCENE_WIRING + '\n\n$1'
);
// ...and guard against the TDZ regression we just fixed.
if (/const clk[\s\S]*?const library/.test(app)) throw new Error('library declared after the render loop (TDZ)');

const looped = app;

/* ── verify ── */
// Real ES-module parse: node --check only applies module grammar to .mjs, and
// a regex-strip of `export` corrupts object literals (EA's `in:` key).
const os = await import('node:os');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sdsplit-'));
const { execFileSync } = await import('node:child_process');
const outputs = [['easing', easing], ['shots', shots], ['transition-data', td], ['app', looped]];
for (const [name, src] of outputs) {
  const f = path.join(tmp, `${name}.mjs`);
  fs.writeFileSync(f, src);
  try { execFileSync('node', ['--check', f], { stdio: 'pipe' }); }
  catch (e) { throw new Error(`${name}.js syntax error: ${String(e.stderr).split('\n').find(l => l.includes('Error')) || e.message}`); }
}
for (const n of ['D2R', 'cl', 'L', 'EA']) {
  if (new RegExp(`(^|\\W)(const|let|function)\\s+${n}\\b`).test(looped)) throw new Error(`${n} still declared in app.js`);
}
for (const n of ['PL', 'PS', 'HH', 'CATS', 'TRN', 'DEFT', 'PC', 'CVP', 'CVN']) {
  if (new RegExp(`(^|\\W)(const|let|function)\\s+${n}\\b`).test(looped)) throw new Error(`${n} still declared in app.js`);
}
// Every imported name must really be exported, with a usable value. A slice
// that loses its `const` (chain continuation) still parses as a comma
// expression, so a syntax check alone cannot catch it. These three modules are
// pure data — no THREE, no DOM — so they import cleanly under Node and can be
// inspected for real.
const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'sdmod-'));
const expect = {
  'easing': ['D2R', 'cl', 'L', 'EA'],
  'shots': ['PL', 'PS', 'HH', 'CATS'],
  'transition-data': ['TRN', 'DEFT', 'PC', 'CVP', 'CVN'],
};
for (const [name, names] of Object.entries(expect)) {
  const file = path.join(tmp2, `${name}.mjs`);
  fs.writeFileSync(file, { 'easing': easing, 'shots': shots, 'transition-data': td }[name]);
  const mod = await import(`file://${file}`);
  for (const n of names) {
    if (mod[n] === undefined) throw new Error(`${name}.js does not export a usable "${n}"`);
  }
  if (name === 'shots') {
    const count = mod.CATS.reduce((n, [, list]) => n + list.length, 0);
    if (count !== 116) throw new Error(`shots.js CATS has ${count} moves, expected 116`);
  }
  if (name === 'easing' && Math.abs(mod.D2R - Math.PI / 180) > 1e-12) {
    throw new Error('easing.js D2R is not Math.PI/180');
  }
}
console.log('module exports verified by import (CATS=116 moves, D2R=PI/180)');
// Guard the code body only: the trailing scene-wiring prose legitimately
// mentions "boats" in a comment.
const bodyCode = body.join('\n');
if (/\bwg\b|\bw0\b|\bboats\b/.test(bodyCode)) throw new Error('scene-build symbols still referenced in app.js');
// A name that was moved out but is still assigned here parses fine and only
// throws at runtime under strict mode — check the declaration survived.
for (const n of ['ez', 'reg', 'V3']) {
  if (!new RegExp(`(^|\\W)(const|let|var|function)\\s+${n}\\b`).test(bodyCode)) {
    throw new Error(`${n} is used but never declared in app.js`);
  }
}

fs.writeFileSync(path.join(dir, 'js/easing.js'), easing);
fs.writeFileSync(path.join(dir, 'js/shots.js'), shots);
fs.writeFileSync(path.join(dir, 'js/transition-data.js'), td);
fs.writeFileSync(path.join(dir, 'js/app.js'), looped);

console.log(`easing.js         ${easing.split('\n').length} lines`);
console.log(`shots.js          ${shots.split('\n').length} lines`);
console.log(`transition-data.js ${td.split('\n').length} lines`);
console.log(`app.js            ${looped.split('\n').length} lines`);
console.log('all modules written + syntax-checked OK');
