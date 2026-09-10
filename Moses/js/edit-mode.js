/* EDIT-MODE.JS — admin overlay for positioning & tuning text boxes.
   - Top-right overlay: Edit toggle · Replay · Prev/Next line · Save ·
     Export · Import.
   - Per text-box editor: text, speaker, effect (fx), align, valign, width,
     delay (before appear) and fade-in time.
   - Width / valign / align / delay / fade apply live; text, speaker and
     effect are baked in on Replay.
   - Overrides persist to localStorage and export as a mergeable JSON file.
   Requires: window.CONFIG.editMode, window.__comic.getScene() and a story
   runtime whose renderLine reads EditMode.overridesFor().
   Load this script BEFORE js/story-runtime.js so its capture keydown runs
   first and can toggle edit mode even while the story input is locked.
*/
(function () {
  'use strict';

  const E = (window.EditMode = {});
  const cfg = (window.CONFIG && window.CONFIG.editMode) || {};
  const STORAGE_KEY = cfg.storageKey || 'comic-edit-settings';
  const EFFECTS = (Array.isArray(cfg.effects) && cfg.effects.length) ? cfg.effects
    : ['fade', 'slide', 'dissolve', 'type', 'wave', 'bounce', 'shake'];
  const FADE_DEFAULT = typeof cfg.fadeDefault === 'number' ? cfg.fadeDefault : 600;
  const DELAY_DEFAULT = typeof cfg.delayDefault === 'number' ? cfg.delayDefault : 0;
  const TOGGLE_KEY = cfg.toggleKey || 'KeyE';
  const WIDTHS = ['1/4', '1/3', '1/2', '2/3', '3/4'];
  const WIDTH_PCT = { '1/4': 25, '1/3': 33, '1/2': 50, '2/3': 67, '3/4': 75 };
  const VALIGN_Y = { top: 6, middle: 44, bottom: 80 };
  const EDITABLE_BOXES = ['caption', 'bubble']; // text boxes that open the editor

  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));
  let toastT = null;
  function toast(msg) {
    let t = $('#editToast');
    if (!t) { t = document.createElement('div'); t.id = 'editToast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1500);
  }

  let settings = {};
  let enabled = false;
  let selected = null; // {actId, lineId, boxType, box}
  let overlay = null;

  function load() {
    try { settings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; }
    catch (e) { settings = {}; }
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings, null, 2)); }
    catch (e) { console.warn('[edit-mode] save failed:', e); }
  }
  function getScene() {
    try { return window.__comic && window.__comic.getScene && window.__comic.getScene(); }
    catch (e) { return null; }
  }

  E.overridesFor = function (actId, lineId, boxType) {
    if (!actId || lineId == null) return {};
    const act = settings[actId];
    if (!act) return {};
    const line = act[String(lineId)];
    if (!line) return {};
    return line[boxType] || {};
  };
  function setOverride(actId, lineId, boxType, patch) {
    if (!actId || lineId == null) return;
    settings[actId] = settings[actId] || {};
    settings[actId][String(lineId)] = settings[actId][String(lineId)] || {};
    settings[actId][String(lineId)][boxType] = Object.assign({}, settings[actId][String(lineId)][boxType] || {}, patch);
  }
  function delOverride(actId, lineId, boxType) {
    if (!actId || lineId == null || !settings[actId] || !settings[actId][String(lineId)]) return;
    delete settings[actId][String(lineId)][boxType];
    const ln = settings[actId][String(lineId)];
    if (Object.keys(ln).length === 0) delete settings[actId][String(lineId)];
    if (Object.keys(settings[actId]).length === 0) delete settings[actId];
  }

  E.tagBox = function (box, boxType) {
    if (!box || !boxType) return;
    box.setAttribute('data-edit-box', boxType);
    box.classList.add('editable-box');
  };

  function setFxClass(box, boxType, fx) {
    const tgt = boxType === 'bubble' ? box.querySelector('.bubble') : box;
    if (!tgt) return;
    tgt.className = tgt.className.replace(/\bfx-[a-z]+\b/g, '').trim();
    if (fx) tgt.classList.add('fx-' + fx);
  }

  function syncAlignClass(box, boxType, align) {
    if (boxType === 'bubble') {
      const inner = box.querySelector('.bubble');
      box.className = box.className.replace(/\balign-(left|center|right)\b/g, '').trim();
      box.classList.add('align-' + align);
      if (inner) {
        inner.className = inner.className.replace(/\bbubble-(left|center|right)\b/g, '').trim();
        inner.classList.add('bubble-' + align);
      }
    } else if (boxType === 'caption') {
      box.className = box.className.replace(/\bcaption-(left|center|right)\b/g, '').trim();
      box.classList.add('caption-' + align);
    }
  }

  /* ── Apply saved settings to every tagged box in the current scene ── */
  E.applyToScene = function () {
    const sc = getScene();
    if (!sc) return;
    const actId = sc.actId, lineId = sc.lineId, line = sc.line || {};
    const boxes = $$('#stage [data-edit-box]');
    boxes.forEach(box => {
      const type = box.getAttribute('data-edit-box');
      E.tagBox(box, type);
      applyBox(box, type, actId, lineId, line);
    });
    // keep the editor populated as the user moves between lines
    if (enabled) {
      const currentSel = selected && selected.actId === actId && String(selected.lineId) === String(lineId);
      if (!currentSel) {
        const first = $('#stage [data-edit-box="caption"], #stage [data-edit-box="bubble"]');
        if (first) selectBox(first, first.getAttribute('data-edit-box'), false);
        else { selected = null; if ($('#editEditor')) $('#editEditor').hidden = true; }
      } else {
        refreshEditor();
      }
    }
  };

  function applyBox(box, boxType, actId, lineId, line) {
    const ov = E.overridesFor(actId, lineId, boxType);
    const hasLayout = !!(ov.align || ov.valign || ov.width || ov.x != null || ov.y != null);

    // ── position (absolute within the content overlay) ──
    if (hasLayout) {
      const align = ov.align || (line && line.align) || 'center';
      const wPct = ov.width ? WIDTH_PCT[ov.width] : 67;
      let xPct;
      if (ov.x != null) xPct = ov.x;
      else if (align === 'left') xPct = 0;
      else if (align === 'right') xPct = Math.max(0, 100 - wPct);
      else xPct = (100 - wPct) / 2;
      const yPct = ov.y != null ? ov.y : VALIGN_Y[ov.valign || 'bottom'];
      box.style.position = 'absolute';
      box.style.left = xPct + '%';
      box.style.top = yPct + '%';
      box.style.width = wPct + '%';
    } else {
      box.style.position = '';
      box.style.left = '';
      box.style.top = '';
      box.style.width = '';
    }

    // align / effect classes
    const effAlign = ov.align || (line && line.align) || 'center';
    syncAlignClass(box, boxType, effAlign);
    const effFx = ov.fx || (line && line.fx) || 'fade';
    if (EDITABLE_BOXES.includes(boxType)) setFxClass(box, boxType, effFx);

    // fade / delay animation (text boxes only; chars keep their own animation)
    const animatable = EDITABLE_BOXES.includes(boxType);
    const effDelay = ov.delay != null ? ov.delay : ((line && line.delay) || 0);
    const effFade = ov.fade != null ? ov.fade : FADE_DEFAULT;
    if (animatable && (hasLayout || ov.delay != null || ov.fade != null || effDelay > 0)) {
      box.style.animation = 'editBoxFadeIn ' + Math.max(0, effFade) + 'ms ease ' + Math.max(0, effDelay) + 'ms 1 both';
    } else if (animatable) {
      box.style.animation = '';
    }
  }

  function buildOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.id = 'editOverlay';
    overlay.setAttribute('role', 'region');
    overlay.setAttribute('aria-label', 'Comic editor');
    overlay.innerHTML =
      '<div class="edit-row">' +
      '<button id="editToggle" class="edit-btn" aria-pressed="false">Edit</button>' +
      '<button id="editReplay" class="edit-btn">Replay</button>' +
      '<button id="editPrev" class="edit-btn" title="Previous line">‹</button>' +
      '<button id="editNext" class="edit-btn" title="Next line">›</button>' +
      '<button id="editSave" class="edit-btn">Save</button>' +
      '<button id="editExport" class="edit-btn">Export</button>' +
      '<input id="editImport" type="file" accept="application/json" hidden>' +
      '<button id="editImportBtn" class="edit-btn">Import</button>' +
      '</div>' +
      '<div id="editEditor" class="edit-editor" hidden>' +
      '<div id="editTitle" class="edit-title"></div>' +
      '<div class="edit-fields">' +
      '<label>Text <textarea id="editText" rows="3"></textarea></label>' +
      '<label>Speaker <input id="editSpeaker" type="text" list="editSpeakers"></label>' +
      '<label>Effect <select id="editFx"></select></label>' +
      '<label>Align <select id="editAlign">' +
      '<option value="left">Left</option><option value="center">Center</option><option value="right">Right</option>' +
      '</select></label>' +
      '<label>Valign <select id="editValign">' +
      '<option value="top">Top</option><option value="middle">Middle</option><option value="bottom">Bottom</option>' +
      '</select></label>' +
      '<label>Width <select id="editWidth"></select></label>' +
      '<label>Delay (ms) <input id="editDelay" type="number" min="0" step="10" value="0"></label>' +
      '<label>Fade-in (ms) <input id="editFade" type="number" min="0" step="50" value="' + FADE_DEFAULT + '"></label>' +
      '<div class="edit-hint">Text / Speaker / Effect apply on Replay.</div>' +
      '<button id="editResetBox" class="edit-btn">Reset box</button>' +
      '</div></div>';
    const dl = document.createElement('datalist');
    dl.id = 'editSpeakers';
    dl.innerHTML = SPEAKERS.map(s => '<option value="' + s + '"></option>').join('');
    overlay.appendChild(dl);
    document.body.appendChild(overlay);
    bindUI();
  }

  function labelFor(e) {
    const map = { fade: 'Fade', slide: 'Slide', dissolve: 'Dissolve', type: 'Type', wave: 'Wave', bounce: 'Bounce', shake: 'Shake' };
    return map[e] || e;
  }

  function bindUI() {
    $('#editToggle').addEventListener('click', () => E.toggle());
    $('#editReplay').addEventListener('click', () => E.replay());
    $('#editSave').addEventListener('click', () => { persist(); refreshEditor(); toast('Saved to localStorage'); });
    $('#editExport').addEventListener('click', () => E.export());
    $('#editImportBtn').addEventListener('click', () => $('#editImport').click());
    $('#editImport').addEventListener('change', e => E.importFile(e.target));
    $('#editPrev').addEventListener('click', () => nav(-1));
    $('#editNext').addEventListener('click', () => nav(1));

    $('#editText').addEventListener('input', e => update('text', e.target.value));
    $('#editSpeaker').addEventListener('input', e => update('speaker', e.target.value));
    $('#editFx').addEventListener('change', e => { update('fx', e.target.value); });
    $('#editAlign').addEventListener('change', e => { update('align', e.target.value); applyCurrent(); });
    $('#editValign').addEventListener('change', e => { update('valign', e.target.value); applyCurrent(); });
    $('#editWidth').addEventListener('change', e => { update('width', e.target.value); applyCurrent(); });
    $('#editDelay').addEventListener('input', onNumber('delay'));
    $('#editFade').addEventListener('input', onNumber('fade'));
    $('#editResetBox').addEventListener('click', resetBox);

    // populate selects once
    const fxSel = $('#editFx');
    fxSel.innerHTML = EFFECTS.map(e => '<option value="' + e + '">' + labelFor(e) + '</option>').join('');
    const wSel = $('#editWidth');
    wSel.innerHTML = WIDTHS.map(w => '<option value="' + w + '">' + w + '</option>').join('');
  }

  const SPEAKERS = cfg.speakers || ['narrator', 'guide', 'traveller', 'witness', 'god', 'burning_bush', 'moses', 'pharaoh', 'pharaohs_daughter', 'miriam', 'aaron', 'zipporah', 'jethro', 'joshua', 'caleb', 'israelite_elder'];

  function nav(delta) {
    const api = window.__comic;
    if (!api) return;
    if (delta < 0) api.prevLine && api.prevLine();
    else api.nextLine && api.nextLine();
  }

  function update(key, value) {
    const sc = getScene();
    if (!sc || !selected) return;
    setOverride(sc.actId, sc.lineId, selected.boxType, { [key]: value });
    persist();
    refreshEditor();
  }
  function onNumber(field) {
    return function (e) {
      const v = parseInt(e.target.value, 10);
      const val = isNaN(v) ? undefined : v;
      update(field, val);
      applyCurrent();
    };
  }
  function applyCurrent() {
    const sc = getScene();
    if (!sc || !selected || !selected.box) return;
    applyBox(selected.box, selected.boxType, sc.actId, sc.lineId, sc.line);
  }

  function selectBox(box, boxType, fromClick) {
    if (fromClick && !EDITABLE_BOXES.includes(boxType)) return;
    const sc = getScene();
    if (!sc) return;
    selected = { actId: sc.actId, lineId: sc.lineId, boxType, box };
    $$('#stage [data-edit-box]').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
    refreshEditor();
  }
  function refreshEditor() {
    const sc = getScene();
    const ed = $('#editEditor');
    if (!ed || !selected || !EDITABLE_BOXES.includes(selected.boxType)) { if (ed) ed.hidden = true; return; }
    const ov = E.overridesFor(sc ? sc.actId : '', sc ? sc.lineId : null, selected.boxType) || {};
    const line = sc ? (sc.line || {}) : {};
    $('#editText').value = ov.text != null ? ov.text : (line.text || '');
    $('#editSpeaker').value = ov.speaker != null ? ov.speaker : (line.speaker || '');
    $('#editFx').value = ov.fx || line.fx || EFFECTS[0];
    $('#editAlign').value = ov.align || line.align || 'center';
    $('#editValign').value = ov.valign || 'bottom';
    $('#editWidth').value = ov.width || '2/3';
    $('#editDelay').value = ov.delay != null ? ov.delay : ((line.delay != null ? line.delay : 0) || 0);
    $('#editFade').value = ov.fade != null ? ov.fade : FADE_DEFAULT;
    $('#editTitle').textContent = (line.speaker || 'box') + ' · ' + sc.lineId;
    ed.hidden = false;
  }
  function resetBox() {
    const sc = getScene();
    if (!sc || !selected) return;
    delOverride(sc.actId, sc.lineId, selected.boxType);
    persist();
    if (selected.box) applyBox(selected.box, selected.boxType, sc.actId, sc.lineId, sc.line);
    refreshEditor();
  }

  /* ── Public API ── */
  E.isEnabled = function () { return enabled; };
  E.toggle = function (on) { E.setEnabled(on != null ? on : !enabled); };
  E.setEnabled = function (on) {
    enabled = !!on;
    const t = $('#editToggle');
    if (t) { t.setAttribute('aria-pressed', String(enabled)); t.textContent = enabled ? 'Editing' : 'Edit'; }
    document.body.classList.toggle('edit-mode', enabled);
    if (enabled) buildOverlay();
    $$('#stage [data-edit-box]').forEach(b => b.classList.toggle('editable', enabled));
    if (window.StoryRuntime) {
      if (enabled) { StoryRuntime.lock && StoryRuntime.lock('edit'); }
      else { StoryRuntime.unlock && StoryRuntime.unlock('edit'); }
    }
    if (enabled) E.applyToScene();
    else { if ($('#editEditor')) $('#editEditor').hidden = true; }
  };

  E.replay = function () {
    const sc = getScene();
    if (!sc || typeof sc.reRender !== 'function') return;
    sc.reRender();
  };

  E.export = function () {
    const data = JSON.stringify(settings, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = ((window.__comic && window.__comic.storyId) || 'comic') + '-edit-settings.json';
    a.click();
    URL.revokeObjectURL(url);
    toast('Exported edit settings');
  };

  E.importFile = function (input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const incoming = JSON.parse(reader.result);
        for (const actId of Object.keys(incoming)) {
          settings[actId] = settings[actId] || {};
          for (const lineId of Object.keys(incoming[actId])) {
            settings[actId][lineId] = settings[actId][lineId] || {};
            for (const boxType of Object.keys(incoming[actId][lineId])) {
              settings[actId][lineId][boxType] = Object.assign({}, settings[actId][lineId][boxType] || {}, incoming[actId][lineId][boxType]);
            }
          }
        }
        persist();
        E.applyToScene();
        toast('Imported edit settings');
      } catch (e) {
        toast('Import failed: bad JSON');
      }
    };
    reader.readAsText(file);
    input.value = '';
  };

  /* ── Keyboard: toggle with the configured key; block nav keys while editing ── */
  function onKeydown(e) {
    const focus = e.target && e.target.tagName;
    const inField = focus === 'INPUT' || focus === 'TEXTAREA' || focus === 'SELECT' || e.target.isContentEditable;
    if (!enabled) {
      if (!inField && e.key === TOGGLE_KEY) { e.preventDefault(); E.setEnabled(true); }
      return;
    }
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Enter'].includes(e.key)) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
  }
  window.addEventListener('keydown', onKeydown, true);

  /* ── init ── */
  load();
  if (document.body) buildOverlay(); // overlay is always present; editing is toggled

})();
