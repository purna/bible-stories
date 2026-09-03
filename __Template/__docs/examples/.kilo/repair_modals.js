#!/usr/bin/env node
// Repair pass for the 13 files migrated by migrate_modals.js.
//
// Fix 1: remove orphan keyframe body fragments left over by the keyframe
//        strip regex (e.g. "100%{transform:scale(1);opacity:1}}").
// Fix 2: rewrite the timeout branch's title so it matches the original
//        failure-branch msg-title, not the success-branch one.
// Fix 3: clean up any stale `const msg = document.getElementById('msg');`
//        references that pointed at the removed placeholder.

const fs = require('fs');
const path = require('path');

const TIMEOUT_TITLES = {
  'garde_game_3x3.html': 'Game over',
  'garde_game_4x3.html': 'Game over',
  'garde_game_4x4.html': 'Game over',
  'garde_game_5x3.html': 'Game over',
  'garde_game_5x4.html': 'Game over',
  'garde_game_5x5.html': 'Game over',
  'keep_balance_x3.html': 'Time’s up! Try to count faster.',
  'keep_balance_x3_v2.html': 'Time’s up! Try to count faster.',
  'listen_respond_4x2.html': 'Time’s up!',
  'look_closely_3x3.html': 'Time’s up!',
  'look_closely_4x3.html': 'Time’s up!',
  'tap_sequence_3x2.html': 'Time’s up!',
  'tap_sequence_4x1.html': 'Time’s up!',
};

const FILES = Object.keys(TIMEOUT_TITLES);
const dir = process.argv[2] || '.';

for (const f of FILES) {
  const p = path.join(dir, f);
  let html = fs.readFileSync(p, 'utf8');
  let changed = false;

  // Fix 1: drop any orphan keyframe body fragment left after a removed
  // @keyframes stamp opener. Pattern: a line containing only `100%{...}}` or
  // similar that has no matching open brace.
  const orphan = /^[ \t]*\d+%\{[\s\S]*?\}\}\s*\n/m;
  if (orphan.test(html)) {
    html = html.replace(orphan, '\n');
    changed = true;
    console.log(`FIX1  ${f} (orphan keyframe fragment)`);
  }

  // Fix 2: the timeout branch's title is currently equal to the success
  // title. Replace the showModal('timeout', <WRONG>, ...) line with the
  // correct title.
  const wrongRe = /showModal\('timeout', "[^"]+", (\[[^\]]+\]), ("[^"]+")\)/;
  const m = html.match(wrongRe);
  if (m) {
    const lines = m[1];
    const btn = m[2];
    const correctTitle = TIMEOUT_TITLES[f];
    html = html.replace(wrongRe, `showModal('timeout', ${JSON.stringify(correctTitle)}, ${lines}, ${btn})`);
    changed = true;
    console.log(`FIX2  ${f} (timeout title → "${correctTitle}")`);
  }

  // Fix 3: remove stale `const msg = document.getElementById('msg');` lines.
  const staleMsg = /^[ \t]*const msg = document\.getElementById\('msg'\);\s*\n/m;
  if (staleMsg.test(html)) {
    html = html.replace(staleMsg, '');
    changed = true;
    console.log(`FIX3  ${f} (stale msg reference)`);
  }

  if (changed) fs.writeFileSync(p, html);
}