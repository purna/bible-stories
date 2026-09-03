#!/usr/bin/env node
// One-off migration: replace inline #msg / .msg-card / etc. with the shared
// _shared/modal.css standard across the 12 prototypes that still use the old
// "keep_balance-style" modal.
//
// What the script does per file:
//   1. Adds <link rel="stylesheet" href="_shared/modal.css"> if missing.
//   2. Removes the inline #msg + .msg-card + .msg-row + .msg-icon + .msg-title
//      + .msg-verse + .btn CSS block (and its @keyframes stamp).
//   3. Replaces the inline <div id="msg"></div> placeholder with the shared
//      .modal-overlay structure (with .modal-card, .modal-icon, .modal-title,
//      .modal-text, .modal-btn).
//   4. Rewrites the JS `finish()` helper to use showModal(kind, title, lines,
//      btnLabel) matching the standard modal contract.
//
// Idempotent: skips files that already reference _shared/modal.css.

const fs = require('fs');
const path = require('path');

const FILES = [
  'garde_game_3x3.html',
  'garde_game_4x3.html',
  'garde_game_4x4.html',
  'garde_game_5x3.html',
  'garde_game_5x4.html',
  'garde_game_5x5.html',
  'keep_balance_x3.html',
  'keep_balance_x3_v2.html',
  'listen_respond_4x2.html',
  'look_closely_3x3.html',
  'look_closely_4x3.html',
  'tap_sequence_3x2.html',
  'tap_sequence_4x1.html',
];

const CHECK_SVG = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 16.5l5.5 5.5L24 11" fill="none" stroke="#1b5e20" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const HOURGLASS_SVG = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 4h14l-1 3c-1 3-4 5-6 7 2 2 5 4 6 7l1 3H9l1-3c1-3 4-5 6-7-2-2-5-4-6-7Z" fill="#fff" stroke="#1b5e20" stroke-width="2.5" stroke-linejoin="round"/><path d="M16 4v24" stroke="#1b5e20" stroke-width="2" stroke-dasharray="2 2"/></svg>';

const dir = process.argv[2] || '.';

for (const f of FILES) {
  const p = path.join(dir, f);
  let html = fs.readFileSync(p, 'utf8');
  const force = process.argv.includes('--force');
  if (!force && html.includes('_shared/modal.css')) {
    console.log(`SKIP  ${f} (already uses shared modal)`);
    continue;
  }
  if (force) {
    // Strip any earlier migration artefacts so the script is truly idempotent
    // when run with --force.
    html = html.replace(
      /^[ \t]*<link rel="stylesheet" href="_shared\/modal\.css">\s*\n/m,
      ''
    );
    html = html.replace(
      /<div class="modal-overlay" id="modal"[\s\S]*?<\/div>\s*(?=<script>)/,
      '<div id="msg"></div>\n  '
    );
    // Drop the inserted showModal/finish block by reverting via a marker.
    const marker = '    // __MIGRATED_MODAL__';
    if (html.includes(marker)) {
      const startMarker = html.indexOf(marker);
      // Find the end of the rewritten `finish` (next `}\n    addEventListener` or end).
      const endMarkerRe = /\}\s*\n(\s*addEventListener\('game-timeout')/;
      const m = html.slice(startMarker).match(endMarkerRe);
      if (m) {
        html = html.slice(0, startMarker) + m[1] + html.slice(startMarker + m.index + m[0].length);
      }
    }
  }

  // --- 1. Inject <link> to modal.css right before </head> ---
  html = html.replace(
    /<\/head>/,
    '  <link rel="stylesheet" href="_shared/modal.css">\n</head>'
  );

  // --- 2. Strip the inline #msg / .msg-card / .btn block ---
  // CSS rule pattern: "#msg {...}" through ".btn:active {...}" (the CSS file
  // has `animation: stamp ...` inside `.msg-card` so we also drop the
  // unused @keyframes stamp when it doesn't reference rotate(-6deg)).
  const inlineBlock = /^[ \t]*#msg\s*\{[^}]*\}[\s\S]*?[ \t]*\.btn:active\s*\{[^}]*\}[ \t]*\n?/m;
  if (!inlineBlock.test(html)) {
    console.error(`MISS  ${f} could not locate inline #msg/.btn block`);
    continue;
  }
  html = html.replace(inlineBlock, '');

// Drop @keyframes stamp blocks that belong to the removed modal CSS.
// The keep_balance versions use rotate(-6deg) for their .welldone stamp —
// we keep those. Some keyframes wrap across multiple lines; the body is
// removed by stripping the open brace through the matching close brace.
html = html.replace(
  /^[ \t]*@keyframes stamp\s*\{(?![^}]*rotate\(-6deg\))[\s\S]*?\n[ \t]*\}\s*\n?/gm,
  ''
);
  // keep_balance keeps its own @keyframes stamp for .welldone — but the same
  // keyframe name was used by the inline modal. After removing the modal,
  // there is no .msg-card left referencing @keyframes stamp, so dropping the
  // keyframe is safe.

  // --- 3. Replace placeholder <div id="msg"></div> with shared modal markup ---
  const modalMarkup =
    '<div class="modal-overlay" id="modal" role="dialog" aria-live="assertive">\n' +
    '    <div class="modal-card" id="modalCard">\n' +
    '      <div class="modal-icon" id="modalIcon"></div>\n' +
    '      <h2 class="modal-title" id="modalTitle"></h2>\n' +
    '      <div class="modal-text" id="modalText"></div>\n' +
    '      <button type="button" class="modal-btn" id="modalBtn">Try again</button>\n' +
    '    </div>\n' +
    '  </div>';
  // Two patterns seen in the wild:
  //   (a) bare <div id="msg"></div>
  //   (b) attribute and <div class="modal-overlay" id="msg" role="dialog"...
  // (no file in this batch matches (b), but handle both for safety)
  const divPattern = /<div id="msg"[^>]*><\/div>/;
  if (!divPattern.test(html)) {
    console.error(`MISS  ${f} could not locate <div id="msg"> placeholder`);
    continue;
  }
  html = html.replace(divPattern, modalMarkup);

  // --- 4. Rewrite the inline finish() helper to use showModal() ---
  // The old pattern sets msg.innerHTML = `<div class="msg-card">...` then
  // msg.style.display = 'flex' then attaches a restart click.
  // We rewrite it to call showModal('success'|'timeout', title, lines, btn).
  const finishReplacement = `
    const modal = document.getElementById('modal');
    const modalCard = document.getElementById('modalCard');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalBtn = document.getElementById('modalBtn');
    function showModal(kind, title, lines, btnLabel) {
      modalCard.classList.remove('success', 'timeout');
      if (kind === 'success') modalCard.classList.add('success');
      if (kind === 'timeout') modalCard.classList.add('timeout');
      modalIcon.innerHTML = kind === 'success'
        ? ${JSON.stringify(CHECK_SVG)}
        : ${JSON.stringify(HOURGLASS_SVG)};
      modalTitle.textContent = title;
      modalText.innerHTML = lines.map(l =>
        /[\u201C\u201D"]/.test(l)
          ? '<div class="modal-verse">' + l + '</div>'
          : '<div>' + l + '</div>'
      ).join('');
      modalBtn.textContent = btnLabel || 'Try again';
      modal.classList.add('active');
      modalBtn.onclick = () => location.reload();
    }
    `;

  // Strategy: find the existing `function finish(success, reason){` and rewrite
  // through to its matching closing brace. Because these files have varying
  // indentation, do it with a brace counter.
  const startRe = /function finish\(success, reason\)\s*\{/;
  const m = html.match(startRe);
  if (!m) {
    console.error(`MISS  ${f} could not locate function finish()`);
    continue;
  }
  const startIdx = m.index;
  // Find the opening brace after `function finish(...)`
  const openIdx = html.indexOf('{', startIdx);
  let depth = 0;
  let endIdx = -1;
  for (let i = openIdx; i < html.length; i++) {
    const ch = html[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { endIdx = i; break; }
    }
  }
  if (endIdx === -1) {
    console.error(`MISS  ${f} could not find end of finish()`);
    continue;
  }

  // Build a small extractor for the success/failure content. We only need to
  // recognise the title text and any verse line; everything else we collapse
  // to a generic reason.
  const body = html.slice(openIdx + 1, endIdx);
  const titleMatch = body.match(/<div class="msg-row msg-title">([^<]+)<\/div>/);
  const successTitle = titleMatch ? titleMatch[1] : 'You did it!';
  const successVerseMatch = body.match(/<div class="msg-row msg-verse">([^<]+)<\/div>/);
  const successVerse = successVerseMatch ? successVerseMatch[1] : '';

  const isSuccessFirst = body.indexOf("if (success)") < body.indexOf("else {");
  const titleSuccess = isSuccessFirst ? successTitle : 'Time’s up!';
  const titleTimeout = isSuccessFirst ? (titleMatch ? successTitle : 'Time’s up!') : 'Game over';

  // Re-extract per branch using regex (less brittle than brace counting).
  // We use the original body for both branches.
  const succBranchRe = /if \(success(?:\s*===\s*true)?\s*\)\s*\{([\s\S]*?)\}\s*else\s*\{([\s\S]*?)\}/;
  const branches = body.match(succBranchRe);
  let succLines = [`You did it!`];
  let succBtn = 'Try again';
  let toLines = [`Time’s up!`];
  let toBtn = 'Try again';
  if (branches) {
    const succ = branches[1];
    const fail = branches[2];
    // Note: only look inside the success branch for the success title.
    const sTitle = succ.match(/<div class="msg-row msg-title">([^<]+)<\/div>/);
    const sVerse = succ.match(/<div class="msg-row msg-verse">([^<]+)<\/div>/);
    const sBtn = succ.match(/<div class="btn" id="restart">([^<]+)<\/div>/);
    succLines = [];
    if (sTitle) succLines.push(sTitle[1]);
    if (sVerse) succLines.push(sVerse[1]);
    if (succLines.length === 0) succLines = ['You did it!'];
    succBtn = sBtn ? sBtn[1] : 'Try again';

    // Fail branch: take only the FIRST title (the inline one) and ignore any
    // success titles that follow. To do that, look at fail content up to the
    // success-branch-style markers only — but since we already matched the
    // outer `if/else`, the fail branch ends at the next `}`. Within it, the
    // first `msg-title` is the timeout title.
    const fTitle = fail.match(/<div class="msg-row msg-title">([^<]+)<\/div>/);
    const fVerse = fail.match(/<div class="msg-row msg-verse">([^<]+)<\/div>/);
    const fBtn = fail.match(/<div class="btn" id="restart">([^<]+)<\/div>/);
    toLines = [];
    if (fTitle) toLines.push(fTitle[1]);
    if (fVerse) toLines.push(fVerse[1]);
    if (toLines.length === 0) toLines = ['Time’s up!'];
    toBtn = fBtn ? fBtn[1] : 'Try again';
  }

  const newFinish = `function finish(success, reason) {
      if (modal.classList.contains('active')) return;
      if (success === true) {
        showModal('success', ${JSON.stringify(succLines[0])}, ${JSON.stringify(succLines)}, ${JSON.stringify(succBtn)});
        window.dispatchEvent(new CustomEvent('game-complete'));
        if (window.parent !== window) window.parent.postMessage({ type: 'game-complete', game: '${gameKey(f)}' }, '*');
      } else {
        showModal('timeout', ${JSON.stringify(toLines[0])}, ${JSON.stringify(toLines)}, ${JSON.stringify(toBtn)});
        window.dispatchEvent(new CustomEvent('game-over'));
      }
    }`;

  // Insert modal element refs + showModal() right before the original finish()
  // and then drop in the rewritten finish().
  // Strip any leftover "msg.style.display = 'flex';" / restart listener
  // since showModal() handles them now.
  let newBody = finishReplacement + newFinish;

  html = html.slice(0, startIdx) + newBody + html.slice(endIdx + 1);

  // Remove the now-dead modal var references that used to read const msg =
  // document.getElementById('msg'); — leave them; they no-op. Also remove
  // any msg.style.display = 'flex'; line that may live elsewhere.
  html = html.replace(/^\s*msg\.style\.display = 'flex';\s*\n/m, '');
  html = html.replace(/document\.getElementById\('restart'\)\.addEventListener\('click',[\s\S]*?\}\);\s*\n/g, '');

  fs.writeFileSync(p, html);
  console.log(`OK    ${f}`);
}

function gameKey(filename) {
  if (filename.startsWith('garde_game')) return 'garde_game';
  if (filename.startsWith('keep_balance')) return 'keep_balance';
  if (filename.startsWith('listen_respond')) return 'listen_respond';
  if (filename.startsWith('look_closely')) return 'look_closely';
  if (filename.startsWith('tap_sequence')) return 'tap_sequence';
  return 'game';
}