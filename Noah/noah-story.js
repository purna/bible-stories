/* =========================================================================
   NOAH — Interactive Comic Book
   Architecture: loads data/story.json + svg/*.svg at runtime.
   Engine mirrors Jonah-v1 pattern: CHARACTERS, renderLine, particles, nav.
   ========================================================================= */

/* =========================================================================
   CHARACTERS — inline SVG portrait icons
   ========================================================================= */
const CHARACTERS = {
  noah: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="38" r="22" fill="#D4956A" stroke="#0A0812" stroke-width="4"/>
    <path d="M28 42 Q20 70 30 90 Q50 100 70 90 Q80 70 72 42" fill="#EEE8DC" stroke="#0A0812" stroke-width="3"/>
    <circle cx="43" cy="36" r="3.5" fill="#0A0812"/><circle cx="57" cy="36" r="3.5" fill="#0A0812"/>
    <path d="M39 30 Q43 27 46 30" fill="none" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/>
    <path d="M61 30 Q57 27 54 30" fill="none" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/>
    <path d="M44 50 Q50 54 56 50" fill="none" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/>
    <path d="M22 78 Q50 70 78 78 L72 100 L28 100 Z" fill="#8B5E2F" stroke="#0A0812" stroke-width="4"/>
    <line x1="74" y1="78" x2="82" y2="100" stroke="#5C3A1A" stroke-width="5" stroke-linecap="round"/>
  </svg>`,
  god: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 52 Q8 32 32 30 Q44 10 62 26 Q80 18 84 40 Q98 46 90 62 Q86 80 68 76 Q50 92 34 76 Q12 76 18 52Z" fill="#E8B84B" stroke="#0A0812" stroke-width="4"/>
    <line x1="50" y1="8"  x2="50" y2="0"  stroke="#E8B84B" stroke-width="3"/>
    <line x1="80" y1="18" x2="86" y2="12" stroke="#E8B84B" stroke-width="3"/>
    <line x1="20" y1="18" x2="14" y2="12" stroke="#E8B84B" stroke-width="3"/>
    <circle cx="42" cy="50" r="3.5" fill="#0A0812"/><circle cx="58" cy="50" r="3.5" fill="#0A0812"/>
    <circle cx="43" cy="49" r="1" fill="#FFF"/><circle cx="59" cy="49" r="1" fill="#FFF"/>
    <path d="M38 62 Q50 72 62 62" fill="none" stroke="#0A0812" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  wife: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="36" r="20" fill="#C8855A" stroke="#0A0812" stroke-width="4"/>
    <path d="M30 30 Q50 10 70 30 Q72 24 50 18 Q28 24 30 30Z" fill="#7A4A2A" stroke="#0A0812" stroke-width="3"/>
    <rect x="28" y="28" width="44" height="6" rx="3" fill="#7A4A2A" stroke="#0A0812" stroke-width="2"/>
    <circle cx="44" cy="36" r="3" fill="#0A0812"/><circle cx="56" cy="36" r="3" fill="#0A0812"/>
    <path d="M43 48 Q50 52 57 48" fill="none" stroke="#0A0812" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24 76 Q50 68 76 76 L70 100 L30 100 Z" fill="#5A7A3A" stroke="#0A0812" stroke-width="4"/>
  </svg>`,
  son: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="38" r="20" fill="#D4956A" stroke="#0A0812" stroke-width="4"/>
    <path d="M30 32 Q50 14 70 32 Q68 24 50 20 Q32 24 30 32Z" fill="#3A2010" stroke="#0A0812" stroke-width="2"/>
    <circle cx="44" cy="38" r="3.5" fill="#0A0812"/><circle cx="56" cy="38" r="3.5" fill="#0A0812"/>
    <path d="M44 50 Q50 46 56 50" fill="none" stroke="#0A0812" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M26 76 Q50 68 74 76 L68 100 L32 100 Z" fill="#4A6A2A" stroke="#0A0812" stroke-width="4"/>
  </svg>`,
  crowd: `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8,10)"><circle cx="20" cy="22" r="14" fill="#C87A50" stroke="#0A0812" stroke-width="3"/>
    <circle cx="16" cy="20" r="2.5" fill="#0A0812"/><circle cx="24" cy="20" r="2.5" fill="#0A0812"/>
    <path d="M15 30 Q20 26 25 30" fill="none" stroke="#0A0812" stroke-width="2.5"/>
    <path d="M8 60 Q20 54 32 60 L30 80 L10 80 Z" fill="#A05020" stroke="#0A0812" stroke-width="3"/></g>
    <g transform="translate(42,4)"><circle cx="20" cy="22" r="15" fill="#B87040" stroke="#0A0812" stroke-width="3"/>
    <circle cx="16" cy="20" r="2.5" fill="#0A0812"/><circle cx="24" cy="20" r="2.5" fill="#0A0812"/>
    <path d="M14 32 Q20 28 26 32" fill="none" stroke="#0A0812" stroke-width="2.5"/>
    <path d="M6 62 Q20 56 34 62 L32 82 L8 82 Z" fill="#6A3A1A" stroke="#0A0812" stroke-width="3"/></g>
    <g transform="translate(76,10)"><circle cx="20" cy="22" r="14" fill="#D49060" stroke="#0A0812" stroke-width="3"/>
    <circle cx="16" cy="20" r="2.5" fill="#0A0812"/><circle cx="24" cy="20" r="2.5" fill="#0A0812"/>
    <path d="M14 31 Q20 27 26 31" fill="none" stroke="#0A0812" stroke-width="2.5"/>
    <path d="M8 60 Q20 54 32 60 L30 80 L10 80 Z" fill="#8A5A2A" stroke="#0A0812" stroke-width="3"/></g>
  </svg>`,
  family: `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="28" r="16" fill="#D4956A" stroke="#0A0812" stroke-width="3"/>
    <path d="M44 32 Q48 48 60 52 Q72 48 76 32" fill="#EEE8DC" stroke="#0A0812" stroke-width="2"/>
    <circle cx="55" cy="28" r="2.5" fill="#0A0812"/><circle cx="65" cy="28" r="2.5" fill="#0A0812"/>
    <path d="M38 72 Q60 62 82 72 L76 92 L44 92 Z" fill="#8B5E2F" stroke="#0A0812" stroke-width="3"/>
    <circle cx="20" cy="40" r="11" fill="#C8855A" stroke="#0A0812" stroke-width="2.5"/>
    <path d="M10 64 Q20 58 30 64 L28 80 L12 80 Z" fill="#5A7A3A" stroke="#0A0812" stroke-width="2.5"/>
    <circle cx="100" cy="40" r="11" fill="#C87A50" stroke="#0A0812" stroke-width="2.5"/>
    <path d="M90 64 Q100 58 110 64 L108 80 L92 80 Z" fill="#4A6A2A" stroke="#0A0812" stroke-width="2.5"/>
  </svg>`,
  narrator: null
};

/* =========================================================================
   STATE
   ========================================================================= */
let STORY = [];
let actIdx = 0, lineIdx = 0, transitioning = false, choicePending = false, nextLineTimeout = null;

const el         = s => document.querySelector(s);
const stage      = el('#stage');
const choicesBox = el('#choices');
const delayNote  = el('#delayNote');
const nextBtn    = el('#nextBtn');
const nextLineBtn= el('#nextLineBtn');
const portal     = el('#portal');
const bgGradient = el('#bgGradient');
const dotsBox    = el('#dots');
const audio = new AudioManager();

/* ── SVG cache ─────────────────────────────────── */
const svgCache = {};
async function loadSvg(key) {
  if (svgCache[key]) return svgCache[key];
  try {
    const res = await fetch(`assets/svg/${key}.svg`);
    if (!res.ok) throw new Error();
    svgCache[key] = await res.text();
  } catch {
    svgCache[key] = svgCache['placeholder'] || '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#0c0604"/><line x1="0" y1="0" x2="400" y2="300" stroke="#E8B84B" stroke-width="2"/><line x1="400" y1="0" x2="0" y2="300" stroke="#E8B84B" stroke-width="2"/></svg>';
  }
  return svgCache[key];
}

function currentAct() { return STORY[actIdx]; }
window.__comic = { currentAct };

/* ── Dot progress bar ─────────────────────────── */
function buildDots() {
  dotsBox.innerHTML = '';
  currentAct().lines.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === lineIdx ? ' on' : '');
    dotsBox.appendChild(d);
  });
}

/* ── Chapter select dropdown ──────────────────── */
function populateChapterSelect() {
  const sel = el('#chapterSelect');
  sel.innerHTML = '';
  STORY.forEach((act, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = act.name;
    if (i === actIdx) opt.selected = true;
    sel.appendChild(opt);
  });
}

/* ── Word-by-word animation HTML builder ──────── */
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function buildLineHTML(text, fx) {
  if (fx === 'shake') return `<span class="line-inner">${escapeHtml(text)}</span>`;
  return text.split(' ').map((word, i) => {
    const delays = { bounce: 60, type: 120, wave: 10, fade: 18 };
    const d = (delays[fx] || 18) * i;
    return `<span class="word" style="animation-delay:${d}ms">${escapeHtml(word)}</span> `;
  }).join('');
}

/* ── Choices ──────────────────────────────────── */
function renderChoices(data) {
  choicesBox.innerHTML = '';
  delayNote.classList.remove('show');
  delayNote.textContent = '';
  if (data.choices && !choicePending) {
    choicePending = true;
    choicesBox.classList.add('show');
    data.choices.forEach(c => {
      const b = document.createElement('button');
      b.className = 'choiceBtn';
      b.textContent = c.label;
      b.onclick = () => {
        choicesBox.classList.remove('show');
        delayNote.className = 'show';
        delayNote.textContent = c.note;
        choicePending = false;
        updateNextBtn();
      };
      choicesBox.appendChild(b);
    });
  } else {
    choicesBox.classList.remove('show');
  }
}

/* ── Next / NextLine button state ─────────────── */
function updateNextBtn() {
  if (window.StoryRuntime) StoryRuntime.setMode(choicePending ? 'choice' : 'reading');
  const atEnd    = lineIdx === currentAct().lines.length - 1 && !choicePending;
  const notAtEnd = lineIdx <  currentAct().lines.length - 1 && !choicePending;
  const pal = `palette-act-${actIdx + 1}`;
  nextBtn.className = pal;
  nextBtn.classList.toggle('show', atEnd);
  nextBtn.textContent = actIdx === STORY.length - 1 ? 'Read Again ↺' : 'Next Chapter ↴';
  nextBtn.classList.toggle('finale', actIdx === STORY.length - 1);
  nextLineBtn.className = pal;
  nextLineBtn.classList.toggle('show', notAtEnd);
  nextLineBtn.textContent = 'Next →';
}

/* ── Main render ──────────────────────────────── */
async function renderLine() {
  if (delayNote.parentNode) delayNote.parentNode.removeChild(delayNote);
  delayNote.className = '';
  delayNote.textContent = '';
  stage.innerHTML = '';
  if (nextLineTimeout) { clearTimeout(nextLineTimeout); nextLineTimeout = null; }

  const act  = currentAct();
  const data = act.lines[lineIdx];
  audio.playLineSfx(data);
  audio.playAct(act);

  bgGradient.style.background = act.bg;
  document.body.className = `palette-act-${actIdx + 1}`;

  const isWet     = ['flood', 'door', 'waiting'].includes(act.id) || act.particle === 'storm' || act.particle === 'flood';
  const isRainbow = act.id === 'covenant';
  const isDawn    = act.id === 'dryground' || act.particle === 'dawn';
  el('#rainLayer').classList.toggle('active', isWet);
  el('#ambientLayer').classList.toggle('active', isRainbow || isDawn);
  el('#ambientLayer').classList.toggle('rainbow', isRainbow);

  const frame = document.createElement('div');
  frame.className = `comic-frame popIn palette-act-${actIdx + 1}`;

  const graphicContainer = document.createElement('div');
  graphicContainer.id = 'graphicContainer';
  const svgLayer = document.createElement('div');
  svgLayer.id = 'svgLayer';
  svgLayer.innerHTML = await loadSvg(data.svg || act.svg);
  graphicContainer.appendChild(svgLayer);
  frame.appendChild(graphicContainer);

  const overlay = document.createElement('div');
  overlay.className = 'content-overlay';
  frame.appendChild(overlay);
  stage.appendChild(frame);
  overlay.appendChild(delayNote);

  setParticleMode(act.particle || 'dusk');

  setTimeout(() => {
    if (data.speaker && CHARACTERS[data.speaker]) {
      const charBox = document.createElement('div');
      charBox.className = 'char-container';
      charBox.innerHTML = CHARACTERS[data.speaker];
      overlay.appendChild(charBox);
    }

    if (data.sfx) {
      const sfxDiv = document.createElement('div');
      sfxDiv.className = 'sfx fx-bounce';
      sfxDiv.innerHTML = buildLineHTML(data.sfx, 'sfx');
      overlay.appendChild(sfxDiv);
    }

    if (data.text) {
      if (data.speaker === 'narrator') {
        const cap = document.createElement('div');
        cap.className = `caption fx-${data.fx} caption-${data.align || 'center'}`;
        cap.innerHTML = buildLineHTML(data.text, data.fx);
        overlay.appendChild(cap);
      } else {
        const align = data.align || 'center';
        const wrap = document.createElement('div');
        wrap.className = `bubble-wrap align-${align}`;
        const bub = document.createElement('div');
        bub.className = `bubble ${data.speaker} fx-${data.fx} bubble-${align}`;
        bub.innerHTML = buildLineHTML(data.text, data.fx);
        wrap.appendChild(bub);
        overlay.appendChild(wrap);
      }
    }

    if (data.cite) {
      const cite = document.createElement('div');
      cite.style.cssText = 'font-family:"Space Mono",monospace;font-size:10px;color:rgba(255,255,255,.45);text-align:center;position:absolute;bottom:6px;left:0;right:0;z-index:5;';
      cite.textContent = '— ' + data.cite;
      frame.appendChild(cite);
    }

    if (data.interaction === 'gathering') {
      const { overlay, deck } = buildGatheringOverlay();
      nextBtn.classList.remove('show');
      nextLineBtn.classList.remove('show');
      frame.appendChild(overlay);
      startGatheringInteraction(overlay, deck);
      return;
    }

    const wordEls = overlay.querySelectorAll('.word');
    const delays = { bounce: 60, sfx: 60, type: 120, wave: 10, fade: 18 };
    const step = delays[data.fx] || 18;
    const dur  = (data.fx === 'bounce' || data.fx === 'sfx') ? 500 : (data.fx === 'type') ? 200 : 400;
    const totalMs = wordEls.length > 0 ? (wordEls.length - 1) * step + dur : 0;
    nextLineTimeout = setTimeout(() => updateNextBtn(), Math.max(totalMs, 900));
  }, 800);

  buildDots();
  renderChoices(data);
}

/* =========================================================================
   GATHERING VERTICAL SLICE — Chapter 4: Two by Two
   Pair incoming animal cards. Each match fills an ark stall.
   Keyboard (arrows + Enter), pointer click, and touch are all supported.
   ========================================================================= */
const ANIMAL_KINDS = [
  { kind: 'lion',      label: 'Lion',      svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="58" r="22" fill="#c87a30" stroke="#0A0812" stroke-width="3"/><circle cx="32" cy="38" r="14" fill="#c87a30" stroke="#0A0812" stroke-width="3"/><circle cx="68" cy="38" r="14" fill="#c87a30" stroke="#0A0812" stroke-width="3"/><circle cx="32" cy="38" r="7" fill="#a05a18"/><circle cx="68" cy="38" r="7" fill="#a05a18"/><circle cx="42" cy="58" r="3" fill="#0A0812"/><circle cx="58" cy="58" r="3" fill="#0A0812"/><path d="M44 70 Q50 74 56 70" fill="none" stroke="#0A0812" stroke-width="2.5" stroke-linecap="round"/></svg>' },
  { kind: 'lamb',      label: 'Lamb',      svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="62" rx="24" ry="18" fill="#fefae0" stroke="#0A0812" stroke-width="3"/><circle cx="50" cy="48" r="14" fill="#fefae0" stroke="#0A0812" stroke-width="3"/><circle cx="36" cy="42" r="6" fill="#fefae0" stroke="#0A0812" stroke-width="2"/><circle cx="64" cy="42" r="6" fill="#fefae0" stroke="#0A0812" stroke-width="2"/><circle cx="46" cy="50" r="2" fill="#0A0812"/><circle cx="54" cy="50" r="2" fill="#0A0812"/><path d="M44 56 Q50 60 56 56" fill="none" stroke="#0A0812" stroke-width="2.5" stroke-linecap="round"/></svg>' },
  { kind: 'elephant',  label: 'Elephant',  svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="54" cy="56" rx="26" ry="20" fill="#9090a0" stroke="#0A0812" stroke-width="3"/><path d="M30 56 Q26 76 38 80 Q44 82 48 76" fill="#9090a0" stroke="#0A0812" stroke-width="3"/><circle cx="36" cy="44" r="12" fill="#9090a0" stroke="#0A0812" stroke-width="3"/><circle cx="33" cy="42" r="2" fill="#0A0812"/><path d="M22 50 Q14 52 14 60" fill="none" stroke="#9090a0" stroke-width="6" stroke-linecap="round"/><path d="M28 70 L26 82 M52 70 L50 84 M76 70 L74 84" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/></svg>' },
  { kind: 'dove',      label: 'Dove',      svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="48" cy="52" rx="22" ry="14" fill="#e0fbfc" stroke="#0A0812" stroke-width="3"/><circle cx="68" cy="46" r="10" fill="#e0fbfc" stroke="#0A0812" stroke-width="3"/><path d="M28 50 Q14 36 6 44 Q20 52 30 54" fill="#e0fbfc" stroke="#0A0812" stroke-width="2.5"/><circle cx="70" cy="46" r="2" fill="#0A0812"/><path d="M76 48 L82 50 L76 52" fill="#ffd84d" stroke="#0A0812" stroke-width="2"/></svg>' },
  { kind: 'bear',      label: 'Bear',      svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="62" r="22" fill="#5c3a1a" stroke="#0A0812" stroke-width="3"/><circle cx="34" cy="38" r="8" fill="#5c3a1a" stroke="#0A0812" stroke-width="2.5"/><circle cx="66" cy="38" r="8" fill="#5c3a1a" stroke="#0A0812" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#a07040"/><circle cx="70" cy="38" r="4" fill="#a07040"/><circle cx="42" cy="58" r="3" fill="#0A0812"/><circle cx="58" cy="58" r="3" fill="#0A0812"/><ellipse cx="50" cy="70" rx="6" ry="3" fill="#0A0812"/></svg>' },
  { kind: 'deer',      label: 'Deer',      svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="60" rx="22" ry="16" fill="#a07040" stroke="#0A0812" stroke-width="3"/><circle cx="34" cy="44" r="10" fill="#a07040" stroke="#0A0812" stroke-width="3"/><line x1="30" y1="34" x2="24" y2="20" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/><line x1="24" y1="20" x2="18" y2="22" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/><line x1="38" y1="34" x2="34" y2="22" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/><line x1="34" y1="22" x2="40" y2="20" stroke="#0A0812" stroke-width="3" stroke-linecap="round"/><circle cx="31" cy="44" r="2" fill="#0A0812"/></svg>' },
  { kind: 'rabbit',    label: 'Rabbit',    svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="62" rx="22" ry="18" fill="#e8e0d0" stroke="#0A0812" stroke-width="3"/><circle cx="50" cy="48" r="14" fill="#e8e0d0" stroke="#0A0812" stroke-width="3"/><ellipse cx="42" cy="28" rx="4" ry="12" fill="#e8e0d0" stroke="#0A0812" stroke-width="2.5"/><ellipse cx="58" cy="28" rx="4" ry="12" fill="#e8e0d0" stroke="#0A0812" stroke-width="2.5"/><circle cx="44" cy="50" r="2.5" fill="#0A0812"/><circle cx="56" cy="50" r="2.5" fill="#0A0812"/><circle cx="50" cy="56" r="2.5" fill="#ff9eb1" stroke="#0A0812" stroke-width="1.5"/></svg>' },
  { kind: 'fox',       label: 'Fox',       svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="60" rx="22" ry="16" fill="#d4602a" stroke="#0A0812" stroke-width="3"/><path d="M30 50 L24 30 L40 44 Z" fill="#d4602a" stroke="#0A0812" stroke-width="3"/><path d="M70 50 L76 30 L60 44 Z" fill="#d4602a" stroke="#0A0812" stroke-width="3"/><circle cx="42" cy="58" r="3" fill="#0A0812"/><circle cx="58" cy="58" r="3" fill="#0A0812"/><ellipse cx="50" cy="70" rx="4" ry="3" fill="#0A0812"/></svg>' }
];

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildGatheringDeck() {
  const kinds = shuffle(ANIMAL_KINDS).slice(0, 4);
  const pairs = [];
  kinds.forEach(kind => { pairs.push(kind); pairs.push({ ...kind }); });
  return shuffle(pairs);
}

function buildGatheringOverlay() {
  const deck = buildGatheringDeck();
  const overlay = document.createElement('section');
  overlay.className = 'gathering-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'gatheringTitle');
  overlay.innerHTML = `
    <div class="gathering-panel">
      <span class="gathering-kicker">GATHERING · TWO BY TWO</span>
      <h3 id="gatheringTitle" class="gathering-title">Pair every animal</h3>
      <p class="gathering-prompt">Tap two of a kind to guide them to a stall. Match all four pairs to fill the ark.</p>
      <p class="gathering-status" data-gathering-status role="status" aria-live="polite">Pairs found: 0 / 4</p>
      <div class="gathering-grid" data-gathering-grid role="grid" aria-label="Animal cards"></div>
      <div class="gathering-stalls" data-gathering-stalls aria-label="Ark stalls"></div>
      <div class="gathering-actions">
        <button type="button" class="gathering-btn" data-gathering-finish hidden>Continue the story</button>
        <button type="button" class="gathering-btn ghost" data-gathering-skip>Skip the gathering</button>
      </div>
      <p class="gathering-help">Tip: arrow keys move the focus ring, Enter / Space confirms a card. Pair any two of the same animal.</p>
    </div>
  `;
  return { overlay, deck };
}

function startGatheringInteraction(container, deck) {
  const grid = container.querySelector('[data-gathering-grid]');
  const stallsEl = container.querySelector('[data-gathering-stalls]');
  const status = container.querySelector('[data-gathering-status]');
  const finishBtn = container.querySelector('[data-gathering-finish]');
  const skipBtn = container.querySelector('[data-gathering-skip]');

  const cards = deck.map((animal, idx) => ({ ...animal, idx, matched: false }));
  const stalls = Array.from({ length: 4 }, () => ({ filled: false, kind: null, label: null }));
  let firstPick = null;
  let secondPick = null;
  let focusIdx = 0;

  cards.forEach((animal, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gathering-card';
    btn.dataset.idx = String(idx);
    btn.dataset.kind = animal.kind;
    btn.setAttribute('role', 'gridcell');
    btn.setAttribute('aria-label', `${animal.label} card ${idx + 1}`);
    btn.tabIndex = idx === 0 ? 0 : -1;
    btn.innerHTML = animal.svg;
    btn.addEventListener('click', () => selectCard(idx));
    btn.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectCard(idx); }
    });
    grid.appendChild(btn);
  });

  stalls.forEach((_, idx) => {
    const stall = document.createElement('div');
    stall.className = 'gathering-stall';
    stall.dataset.stall = String(idx);
    stall.textContent = `Stall ${idx + 1}`;
    stallsEl.appendChild(stall);
  });

  function setStatus(text, done = false) {
    status.textContent = text;
    status.classList.toggle('done', done);
  }

  function updateFocus(newIdx) {
    focusIdx = newIdx;
    grid.querySelectorAll('.gathering-card').forEach((btn, i) => {
      btn.tabIndex = i === newIdx ? 0 : -1;
    });
    const next = grid.querySelector(`.gathering-card[data-idx="${newIdx}"]`);
    if (next) next.focus();
  }

  function moveFocus(delta) {
    const cols = 4;
    const next = Math.max(0, Math.min(cards.length - 1, focusIdx + delta));
    if (focusIdx + delta === focusIdx) return;
    updateFocus(next);
  }

  function moveRow(delta) {
    moveFocus(delta * cols);
  }

  function selectCard(idx) {
    const card = cards[idx];
    if (!card || card.matched) return;
    if (firstPick === idx || secondPick === idx) return;
    const btn = grid.querySelector(`.gathering-card[data-idx="${idx}"]`);
    btn.classList.add('selected');
    if (firstPick === null) {
      firstPick = idx;
      return;
    }
    secondPick = idx;
    const a = cards[firstPick];
    const b = cards[secondPick];
    if (a.kind === b.kind) {
      a.matched = b.matched = true;
      setTimeout(() => {
        btn.classList.remove('selected');
        grid.querySelector(`.gathering-card[data-idx="${firstPick}"]`).classList.remove('selected');
        grid.querySelector(`.gathering-card[data-idx="${firstPick}"]`).classList.add('matched');
        grid.querySelector(`.gathering-card[data-idx="${secondPick}"]`).classList.add('matched');
        const freeStall = stalls.find(s => !s.filled);
        if (freeStall) {
          freeStall.filled = true;
          freeStall.kind = a.kind;
          freeStall.label = a.label;
          const el2 = stallsEl.querySelector(`[data-stall="${stalls.indexOf(freeStall)}"]`);
          el2.classList.add('filled');
          el2.innerHTML = a.svg;
        }
        firstPick = secondPick = null;
        const filled = stalls.filter(s => s.filled).length;
        setStatus(`Pairs found: ${filled} / 4`);
        if (filled === 4) completeGathering();
      }, 240);
    } else {
      btn.classList.add('miss');
      const firstBtn = grid.querySelector(`.gathering-card[data-idx="${firstPick}"]`);
      firstBtn.classList.add('miss');
      setTimeout(() => {
        btn.classList.remove('selected', 'miss');
        firstBtn.classList.remove('selected', 'miss');
        firstPick = secondPick = null;
      }, 360);
    }
  }

  function completeGathering() {
    setStatus('The ark is full of life. 🕊️', true);
    finishBtn.hidden = false;
    finishBtn.focus();
  }

  function cleanup() {
    document.removeEventListener('keydown', keyHandler);
    if (window.StoryRuntime) StoryRuntime.unlock('gathering');
  }

  function keyHandler(event) {
    if (event.key === 'ArrowRight') { event.preventDefault(); moveFocus(1); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); moveFocus(-1); }
    else if (event.key === 'ArrowDown') { event.preventDefault(); moveRow(1); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); moveRow(-1); }
    else if (event.key === 'Home') { event.preventDefault(); updateFocus(0); }
    else if (event.key === 'End') { event.preventDefault(); updateFocus(cards.length - 1); }
  }

  finishBtn.addEventListener('click', () => { cleanup(); container.remove(); });
  skipBtn.addEventListener('click', () => { cleanup(); container.remove(); });

  document.addEventListener('keydown', keyHandler);
  if (window.StoryRuntime) StoryRuntime.setMode('game', { lock: 'gathering' });
  setStatus('Pairs found: 0 / 4');
}

/* =========================================================================
   NAVIGATION
   ========================================================================= */
async function goLine(delta) {
  if (transitioning) return;
  if (choicePending) return;
  delayNote.className = '';
  nextBtn.classList.remove('show');
  nextLineBtn.classList.remove('show');
  const nl = lineIdx + delta;
  if (nl < 0 || nl >= currentAct().lines.length) return;
  transitioning = true;
  const currentFrame = stage.querySelector('.comic-frame');
  if (currentFrame) {
    currentFrame.classList.replace('popIn', 'popOut');
    await new Promise(r => setTimeout(r, 350));
  }
  lineIdx = nl;
  transitioning = false;
  renderLine();
}

function fallTransition(mid) {
  return new Promise(resolve => {
    portal.className = 'falling';
    setTimeout(() => { mid(); portal.className = 'rising'; }, 750);
    setTimeout(() => { portal.className = ''; resolve(); }, 1450);
  });
}

function goNextChapter() {
  if (transitioning) return;
  if (actIdx >= STORY.length - 1) {
    fallTransition(() => { actIdx = 0; lineIdx = 0; populateChapterSelect(); renderLine(); });
    return;
  }
  fallTransition(() => { actIdx++; lineIdx = 0; choicePending = false; populateChapterSelect(); renderLine(); });
}

function jumpToChapter(newIdx) {
  if (newIdx === actIdx || transitioning) return;
  fallTransition(() => { actIdx = newIdx; lineIdx = 0; choicePending = false; renderLine(); });
}

/* =========================================================================
   PARTICLE SYSTEM
   ========================================================================= */
const canvas = el('#particles');
const ctx    = canvas.getContext('2d');
let W, H, particles = [], pMode = 'dusk';

function resizeCanvas() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }

function newParticle(randomY) {
  const p = { x: Math.random() * W, y: randomY ? Math.random() * H : H + 10 };
  switch (pMode) {
    case 'storm': case 'flood':
      p.r = pMode === 'storm' ? 0.8 + Math.random() : 0.6 + Math.random() * 0.9;
      p.vx = -1 - Math.random() * (pMode === 'storm' ? 2 : 1);
      p.vy = (pMode === 'storm' ? 6 : 4) + Math.random() * 4;
      p.color = pMode === 'storm' ? `rgba(180,210,240,${0.3+Math.random()*0.4})` : `rgba(100,160,220,${0.2+Math.random()*0.3})`;
      p.type = 'rain'; p.y = randomY ? Math.random() * H : -10; break;
    case 'dawn':
      p.r = 1 + Math.random() * 2; p.vx = (Math.random()-0.5)*0.4; p.vy = -(0.3+Math.random()*0.6);
      p.color = `hsla(${30+Math.random()*40},80%,75%,${0.4+Math.random()*0.4})`; p.type = 'mote'; break;
    case 'rainbow':
      p.r = 1 + Math.random() * 2; p.vx = (Math.random()-0.5)*0.6; p.vy = -(0.5+Math.random()*0.8);
      p.color = `hsla(${Math.random()*360},90%,70%,${0.3+Math.random()*0.4})`; p.type = 'mote'; break;
    case 'ember':
      p.r = 0.5 + Math.random() * 2; p.vx = (Math.random()-0.5)*0.8; p.vy = -(0.8+Math.random()*1.5);
      p.color = `hsla(${20+Math.random()*30},95%,${55+Math.random()*20}%,${0.4+Math.random()*0.4})`; p.type = 'mote'; break;
    case 'constellation':
      p.r = 0.5 + Math.random()*1.5; p.vx = 0; p.vy = 0;
      p.twinkle = Math.random()*Math.PI*2; p.color = `rgba(255,255,255,${0.3+Math.random()*0.5})`; p.type = 'star'; break;
    default:
      p.r = 0.5 + Math.random()*1.8; p.vx = (Math.random()-0.5)*0.3; p.vy = -(0.2+Math.random()*0.4);
      p.color = `rgba(200,180,140,${0.15+Math.random()*0.25})`; p.type = 'mote';
  }
  return p;
}

function setParticleMode(m) { if (pMode === m) return; pMode = m; particles = Array.from({length: Math.min(Math.floor(W*H/6000),120)}, () => newParticle(true)); }

function tickParticles() {
  requestAnimationFrame(tickParticles);
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p, i) => {
    ctx.beginPath();
    if (p.type === 'rain') {
      ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 3, p.y + p.vy * 3);
      ctx.strokeStyle = p.color; ctx.lineWidth = p.r; ctx.stroke();
    } else if (p.type === 'star') {
      p.twinkle += 0.03;
      const a = 0.2 + 0.5 * (0.5 + 0.5 * Math.sin(p.twinkle));
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color.replace(/[\d.]+\)$/, a + ')'); ctx.fill();
    } else {
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle = p.color; ctx.fill();
    }
    p.x += p.vx; p.y += p.vy;
    const off = p.y < -20 || p.y > H+20 || p.x < -20 || p.x > W+20;
    if (off) particles[i] = newParticle(false);
  });
}

/* =========================================================================
   EVENT LISTENERS & INIT
   ========================================================================= */
window.addEventListener('resize', () => { resizeCanvas(); });
resizeCanvas();
tickParticles();

nextLineBtn.addEventListener('click', () => goLine(1));
nextBtn.addEventListener('click', () => {
  if (actIdx === STORY.length - 1) { jumpToChapter(0); }
  else goNextChapter();
});

el('#chapterSelect').addEventListener('change', e => jumpToChapter(parseInt(e.target.value)));

let touchStartX = 0;
window.addEventListener('touchstart', e => { if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return; touchStartX = e.touches[0].clientX; }, { passive: true });
window.addEventListener('touchend', e => {
  if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) { if (dx < 0) goLine(1); else goLine(-1); }
}, { passive: true });

window.addEventListener('keydown', e => {
  if (window.StoryRuntime && !StoryRuntime.allowsNavigation(e)) return;
  if (e.code === 'ArrowRight' || e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); goLine(1); }
  if (e.code === 'ArrowLeft') goLine(-1);
  if (e.code === 'ArrowDown') goNextChapter();
});

/* ── Start button ─────────────────────────────── */
el('#startBtn').addEventListener('click', async () => {
  const screen = el('#startScreen');
  screen.classList.add('hide');
  setTimeout(() => screen.remove(), 500);
});

/* ── Boot: fetch story.json then start ─────────── */
async function boot() {
  const res = await fetch('data/story.json');
  STORY = await res.json();
  audio.preloadStory(STORY);
  // preload placeholder SVG
  await loadSvg('placeholder');
  populateChapterSelect();
  renderLine();
}

boot();
