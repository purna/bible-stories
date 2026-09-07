/* =========================================================================
   DEBORAH — Interactive Comic Book (Adam-pattern layered renderer)
   Stack per frame:
     1. SVG background  (assets/svg/actN_scene_<id>.svg) — parallax via mouse
     2. Three.js midground (assets/3d/actN_<id>.json + assets/scenes/actN_<id>.js factory)
     3. SVG foreground  (assets/svg/fg_<id>.svg) — pops in front of midground
     4. Character SVG + speech/caption overlay (from content-overlay)
   Story data: loaded from data/manifest.json → data/actN_<id>.json (one per act)
   ========================================================================= */

/* ── STATE ───────────────────────────────────── */
let STORY = [];
let actIdx = 0, lineIdx = 0, transitioning = false, choicePending = false, nextLineTimeout = null;
let use3D = true;
let threeCanvas = null;
let renderer = null, currentScene = null, camera = null;
let gameOpen = false;
let gameCompleted = {};
let soundOn = true;

const el         = s => document.querySelector(s);
const stage      = el('#stage');
const choicesBox = el('#choices');
const delayNote  = el('#delayNote');
const nextBtn    = el('#nextBtn');
const nextLineBtn= el('#nextLineBtn');
const portal     = el('#portal');
const bgGradient = el('#bgGradient');
const dotsBox    = el('#dots');
const gamePanel  = el('#gamePanel');
const gameTitle  = el('#gameTitle');
const gameInstructions = el('#gameInstructions');
const gameArea   = el('#gameArea');
const gameMessage= el('#gameMessage');
const audio = new AudioManager();

/* ── Character portraits ─────────────────────── */
const CHARACTER_KEYS = {
  deborah: 'deborah', barak: 'barak', jael: 'jael',
  sisera: 'sisera', jabin: 'jabin', village_woman: 'village_woman',
  israelite_scout: 'israelite_scout',
  god: null, narrator: null
};
const charCache = {};
async function loadCharacter(key) {
  const stem = CHARACTER_KEYS[key];
  if (!stem) return '';
  if (charCache[stem]) return charCache[stem];
  if (window.AssetDownloadManager) {
    try {
      const text = await window.AssetDownloadManager.getSvg(`assets/characters/${stem}.svg`);
      charCache[stem] = text;
      return text;
    } catch {}
  }
  return '';
}

/* ── SVG scene/foreground cache ──────────────── */
const svgCache = {};
async function loadSvg(path) {
  if (svgCache[path]) return svgCache[path];
  if (window.AssetDownloadManager) {
    try {
      const text = await window.AssetDownloadManager.getSvg(path);
      svgCache[path] = text;
      return text;
    } catch {}
  }
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error();
    svgCache[path] = await res.text();
  } catch {
    svgCache[path] = svgCache['assets/svg/scene_placeholder.svg'] || '<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="600" fill="#1a0e08"/></svg>';
  }
  return svgCache[path];
}

/* ── Parallax (Adam-style) ───────────────────── */
function initParallax(svgEl, container) {
  const layers = Array.from(svgEl.querySelectorAll('[data-depth]'));
  let active = false;
  function setTransforms(px, py) {
    layers.forEach(layer => {
      const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
      const tx = -px * depth * 18;
      const ty = -py * depth * 14;
      layer.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  }
  function onMouseMove(e) {
    const rect = container.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    active = true; setTransforms(px, py);
  }
  function onLeave() { setTransforms(0, 0); active = false; }
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseleave', onLeave);
}

/* ── Three.js scene loader ───────────────────── */
function initThree() {
  if (!window.THREE) { use3D = false; return; }
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '2';
    renderer.domElement.style.pointerEvents = 'none';
    threeCanvas = renderer.domElement;
  } catch (error) {
    use3D = false;
    if (window.StoryRuntime) window.StoryRuntime.showMessage?.('3D unavailable — falling back to SVG layers.', 'error');
  }
}
function loadScene3D(sceneKey) {
  if (!use3D || !renderer || !threeCanvas || !window.SCENE_FACTORIES || !window.SCENE_FACTORIES[sceneKey]) return;
  const factory = window.SCENE_FACTORIES[sceneKey]();
  if (!factory) return;
  currentScene = factory;
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  const cfg = factory.cameraConfig || { distance: 60, height: 20 };
  camera.position.set(0, cfg.height || 20, cfg.distance || 60);
  camera.lookAt(0, 0, 0);
}
function resize3D() {
  if (!renderer || !camera) return;
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
function tick3D(time) {
  if (!use3D || !renderer || !currentScene) return;
  if (currentScene.animate) currentScene.animate(time / 1000);
  const cfg = currentScene.cameraConfig || { distance: 60, height: 20 };
  camera.position.x = Math.sin(time / 4000) * 5;
  camera.position.y = cfg.height || 20;
  camera.position.z = cfg.distance || 60;
  camera.lookAt(0, 0, 0);
  renderer.render(currentScene.scene, camera);
  requestAnimationFrame(tick3D);
}

function currentAct() { return STORY[actIdx]; }
window.__comic = { currentAct };

/* ── Dot progress bar ───────────────────────── */
function buildDots() {
  dotsBox.innerHTML = '';
  currentAct().lines.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === lineIdx ? ' on' : '');
    dotsBox.appendChild(d);
  });
}

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

/* ── Choices ────────────────────────────────── */
function renderChoices(data) {
  choicesBox.innerHTML = '';
  delayNote.className = '';
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

/* ── Game Panel ─────────────────────────────── */
function openGame() {
  gameOpen = true;
  gamePanel.classList.add('open');
  gameMessage.textContent = '';
  const act = currentAct();
  gameTitle.textContent = act.gameTitle || 'Chapter challenge';
  gameInstructions.textContent = act.gameInstructions || '';
  renderGame(act.game);
  updateNextBtn();
  setTimeout(() => gamePanel.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
}
function closeGame() {
  gameOpen = false;
  gamePanel.classList.remove('open');
  gameArea.innerHTML = '';
  gameMessage.textContent = '';
  updateNextBtn();
}
function winGame(msg) {
  gameCompleted[actIdx] = true;
  gameMessage.textContent = msg;
  updateNextBtn();
  tone(660);
}
function tone(freq=440){
  if(!soundOn)return;
  const A=window.AudioContext||window.webkitAudioContext;
  if(!A)return;
  const ctx=new A(),o=ctx.createOscillator(),g=ctx.createGain();
  o.frequency.value=freq;
  g.gain.setValueAtTime(.06,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.18);
  o.connect(g).connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime+.18);
}
function renderGame(type) {
  const area=gameArea;
  if(type==='wisdom') area.innerHTML=`<div class="choice-grid"><button class="choice" data-answer="wrong">Choose the loudest person</button><button class="choice" data-answer="right">Listen to both sides and seek truth</button><button class="choice" data-answer="wrong">Decide before hearing the story</button></div>`;
  if(type==='sequence') area.innerHTML=`<div class="sequence-grid">${[['gather','2 · Gather the people'],['go','3 · Go to Mount Tabor'],['listen','1 · Listen to God']].map(x=>`<button class="sequence-card" data-step="${x[0]}">${x[1]}</button>`).join('')}</div>`;
  if(type==='river') area.innerHTML=`<div class="river-game">${[1,2,3,4].map(n=>`<button class="river-token" data-chariot="${n}">Iron chariot</button>`).join('')}</div>`;
  if(type==='song') area.innerHTML=`<div class="song-words">${['Courage','Wisdom','Together','Pride','Fear','Power'].map(w=>`<button class="song-word" data-word="${w}">${w}</button>`).join('')}</div>`;
}

/* ── Next button state ──────────────────────── */
function updateNextBtn() {
  if (window.StoryRuntime) StoryRuntime.setMode(choicePending ? 'choice' : 'reading');
  const act = currentAct();
  const atEnd    = lineIdx === act.lines.length - 1 && !choicePending;
  const notAtEnd = lineIdx <  act.lines.length - 1 && !choicePending;
  const hasGame = act.game && !gameCompleted[actIdx];
  const pal = `palette-act-${actIdx + 1}`;
  nextBtn.className = pal;
  nextLineBtn.className = pal;

  if (hasGame && !gameOpen && !gameCompleted[actIdx]) {
    nextBtn.classList.add('show');
    nextBtn.textContent = 'Begin challenge';
    nextLineBtn.classList.remove('show');
  } else if (hasGame && gameOpen && !gameCompleted[actIdx]) {
    nextBtn.classList.add('show');
    nextBtn.textContent = 'Finish challenge';
    nextLineBtn.classList.remove('show');
  } else if (atEnd) {
    nextBtn.classList.add('show');
    nextBtn.textContent = actIdx === STORY.length - 1 ? 'Read Again ↺' : 'Next Chapter ↴';
    nextBtn.classList.toggle('finale', actIdx === STORY.length - 1);
    nextLineBtn.classList.remove('show');
  } else {
    nextBtn.classList.remove('show');
    nextLineBtn.classList.toggle('show', notAtEnd);
    nextLineBtn.textContent = 'Next →';
  }
}

/* ── Atmosphere layers ──────────────────────── */
function applyAtmosphere(act) {
  const id = act.id;
  const particle = act.particle || 'dusk';
  el('#rainLayer').classList.toggle('active', false);
  el('#seaLayer').classList.toggle('active', false);
  el('#fireLayer').classList.toggle('active', false);
  el('#thunderLayer').classList.toggle('active', false);
  const isDawn = id === 'voice_beneath_palm' || id === 'song_of_peace' || particle === 'dawn';
  const isLand = id === 'song_of_peace';
  el('#ambientLayer').classList.toggle('active', isDawn);
  el('#ambientLayer').classList.toggle('land', isLand);
  if (particle === 'storm') el('#rainLayer').classList.toggle('active', true);
  if (particle === 'flood') el('#seaLayer').classList.toggle('active', true);
  if (particle === 'ember') el('#fireLayer').classList.toggle('active', true);
  if (particle === 'storm') el('#thunderLayer').classList.toggle('active', true);
}

/* ── Main render (layered: SVG bg → 3D → SVG fg → overlay) ──── */
async function renderLine() {
  if (delayNote.parentNode) delayNote.parentNode.removeChild(delayNote);
  delayNote.className = '';
  delayNote.textContent = '';
  stage.innerHTML = '';
  if (nextLineTimeout) { clearTimeout(nextLineTimeout); nextLineTimeout = null; }
  closeGame();

  const act = currentAct();
  const data = act.lines[lineIdx];
  audio.playLineSfx(data);
  audio.playAct(act);

  bgGradient.style.background = act.bg;
  document.body.className = `palette-act-${actIdx + 1}`;
  applyAtmosphere(act);

  const frame = document.createElement('div');
  frame.className = `comic-frame popIn palette-act-${actIdx + 1}`;

  const graphicContainer = document.createElement('div');
  graphicContainer.id = 'graphicContainer';

  const sceneKey = act.scene || act.id;

  // Layer 1: SVG background (parallax)
  const svgLayer = document.createElement('div');
  svgLayer.id = 'svgLayer';
  svgLayer.classList.add('svg-behind');
  svgLayer.innerHTML = await loadSvg(`assets/svg/act${actIdx + 1}_scene_${sceneKey}.svg`);
  graphicContainer.appendChild(svgLayer);
  const svgEl = svgLayer.querySelector('svg[data-parallax]');
  if (svgEl) {
    svgLayer.setAttribute('data-parallax', '');
    initParallax(svgEl, svgLayer);
  }

  // Layer 2: 3D midground (Three.js)
  if (use3D && renderer && threeCanvas && window.SCENE_FACTORIES && window.SCENE_FACTORIES[sceneKey]) {
    graphicContainer.classList.add('canvas-mode');
    if (threeCanvas.parentNode) threeCanvas.parentNode.removeChild(threeCanvas);
    graphicContainer.appendChild(threeCanvas);
    loadScene3D(sceneKey);
    resize3D();
  }

  // Layer 3: SVG foreground
  const fgLayer = document.createElement('div');
  fgLayer.id = 'fgLayer';
  fgLayer.classList.add('svg-front');
  fgLayer.innerHTML = await loadSvg(`assets/svg/${act.foreground || `fg_${sceneKey}`}.svg`);
  graphicContainer.appendChild(fgLayer);

  frame.appendChild(graphicContainer);

  setParticleMode(act.particle || 'dusk');

  const overlay = document.createElement('div');
  overlay.className = 'content-overlay';
  frame.appendChild(overlay);
  stage.appendChild(frame);
  overlay.appendChild(delayNote);

  setTimeout(async () => {
    if (data.speaker && data.speaker !== 'narrator' && data.speaker !== 'god' && data.speaker !== 'burning_bush') {
      const charSvg = await loadCharacter(data.speaker);
      if (charSvg) {
        const charBox = document.createElement('div');
        charBox.className = 'char-container';
        if (data.align === 'right') charBox.classList.add('right');
        charBox.innerHTML = charSvg;
        overlay.appendChild(charBox);
      }
    }
    if (data.sfx) {
      const sfxDiv = document.createElement('div');
      sfxDiv.className = 'sfx fx-bounce';
      sfxDiv.innerHTML = buildLineHTML(data.sfx, 'sfx');
      overlay.appendChild(sfxDiv);
    }
    if (data.text) {
      if (data.speaker === 'narrator' || data.speaker === 'god' || data.speaker === 'burning_bush') {
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
    const wordEls = overlay.querySelectorAll('.word');
    const delays = { bounce: 60, sfx: 60, type: 120, wave: 10, fade: 18 };
    const step = delays[data.fx] || 18;
    const dur = (data.fx === 'bounce' || data.fx === 'sfx') ? 500 : (data.fx === 'type') ? 200 : 400;
    const totalMs = wordEls.length > 0 ? (wordEls.length - 1) * step + dur : 0;
    nextLineTimeout = setTimeout(() => updateNextBtn(), Math.max(totalMs, 900));
  }, 800);

  buildDots();
  renderChoices(data);
}

/* ── Navigation ─────────────────────────────── */
async function goLine(delta) {
  if (transitioning) return;
  if (choicePending) return;
  if (gameOpen) return;
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
    fallTransition(() => { actIdx = 0; lineIdx = 0; gameCompleted = {}; populateChapterSelect(); renderLine(); });
    return;
  }
  fallTransition(() => { actIdx++; lineIdx = 0; choicePending = false; populateChapterSelect(); renderLine(); });
}
function jumpToChapter(newIdx) {
  if (newIdx === actIdx || transitioning) return;
  fallTransition(() => { actIdx = newIdx; lineIdx = 0; choicePending = false; renderLine(); });
}

/* ── Particle system ────────────────────────── */
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
    case 'ember':
      p.r = 0.5 + Math.random() * 2; p.vx = (Math.random()-0.5)*0.8; p.vy = -(0.8+Math.random()*1.5);
      p.color = `hsla(${20+Math.random()*30},95%,${55+Math.random()*20}%,${0.4+Math.random()*0.4})`; p.type = 'mote'; break;
    default:
      p.r = 0.5 + Math.random()*1.8; p.vx = (Math.random()-0.5)*0.3; p.vy = -(0.2+Math.random()*0.4);
      p.color = `rgba(220,180,120,${0.15+Math.random()*0.25})`; p.type = 'mote';
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
    } else {
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle = p.color; ctx.fill();
    }
    p.x += p.vx; p.y += p.vy;
    const off = p.y < -20 || p.y > H+20 || p.x < -20 || p.x > W+20;
    if (off) particles[i] = newParticle(false);
  });
}

/* ── Event listeners ────────────────────────── */
window.addEventListener('resize', () => { resizeCanvas(); resize3D(); });
resizeCanvas();
tickParticles();
requestAnimationFrame(tick3D);

nextLineBtn.addEventListener('click', () => goLine(1));
nextBtn.addEventListener('click', () => {
  const act = currentAct();
  const hasGame = act.game && !gameCompleted[actIdx];
  if (hasGame && !gameOpen && !gameCompleted[actIdx]) {
    openGame();
  } else if (hasGame && gameOpen && !gameCompleted[actIdx]) {
    gameMessage.textContent = 'Complete the challenge to continue.';
  } else {
    if (actIdx === STORY.length - 1) { jumpToChapter(0); }
    else goNextChapter();
  }
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

el('#startBtn').addEventListener('click', async () => {
  const screen = el('#startScreen');
  screen.classList.add('hide');
  setTimeout(() => screen.remove(), 500);
});

document.addEventListener('click', e => {
  if (!gameOpen) return;
  const choice=e.target.closest('[data-answer]');
  if(choice){
    if(choice.dataset.answer==='right'){
      choice.classList.add('correct');
      winGame('Wise choice! Listening makes room for justice.');
    }else{
      choice.classList.add('wrong');
      gameMessage.textContent='Try again—wisdom begins by listening.';
    }
  }
  const step=e.target.closest('[data-step]');
  if(step&&!step.classList.contains('selected')){
    step.classList.add('selected');
    const seq=[...document.querySelectorAll('.sequence-card.selected')].map(x=>x.dataset.step);
    tone(400+seq.length*80);
    if(seq.length===3){
      if(seq.join()==='listen,gather,go') winGame('Ready! Courage grows one faithful step at a time.');
      else{
        gameMessage.textContent='Almost. Begin by listening, then gather, then go.';
        setTimeout(()=>{document.querySelectorAll('.sequence-card').forEach(x=>x.classList.remove('selected'))},700);
      }
    }
  }
  const ch=e.target.closest('[data-chariot]');
  if(ch){
    ch.style.transform='translateY(130px) rotate(12deg)';
    ch.style.opacity='.25';
    ch.disabled=true;
    tone(240);
    if([...document.querySelectorAll('[data-chariot]')].every(x=>x.disabled)) winGame('The chariots are stuck—the tide has turned!');
  }
  const word=e.target.closest('[data-word]');
  if(word){
    word.classList.toggle('chosen');
    const picked=[...document.querySelectorAll('.song-word.chosen')].map(x=>x.dataset.word);
    if(picked.length===3){
      if(['Courage','Wisdom','Together'].every(x=>picked.includes(x))) winGame('A song worth remembering: courage, wisdom, together!');
      else gameMessage.textContent='Those words make a song—but which three tell Deborah\'s story best?';
    }
  }
});

/* ── Boot: fetch manifest, load all act JSON, preload ── */
async function boot() {
  initThree();
  const res = await fetch('data/manifest.json');
  const manifest = await res.json();
  STORY = await Promise.all(manifest.acts.map(async act => {
    const r = await fetch(`data/${act.file}`);
    return r.json();
  }));
  audio.preloadStory(STORY);
  await loadSvg('assets/svg/scene_placeholder.svg');
  populateChapterSelect();
  renderLine();
}

boot();
