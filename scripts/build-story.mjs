#!/usr/bin/env node
/* build-story.mjs — generates a complete story package from canon.json.
   Usage: node scripts/build-story.mjs Elisha
   Creates: index.html, data/manifest.json, data/actN_<id>.json (one per act),
   css/<story>-comic.css, assets/scenes/<story>-scenes.js, precache-manifest.json.
   Placeholder SVGs (grass/flower/reed) are generated for every act's bg + fg.
   Shared runtime files are copied from __Template. */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const story = process.argv[2];
if (!story) { console.error('Usage: node scripts/build-story.mjs <StoryName>'); process.exit(1); }
const dir = path.join(root, story);
if (!fs.existsSync(dir)) { console.error(`Story dir missing: ${story}`); process.exit(1); }

const canonPath = path.join(dir, 'data', 'canon.json');
if (!fs.existsSync(canonPath)) { console.error(`No canon.json in ${story}`); process.exit(1); }
const canon = JSON.parse(fs.readFileSync(canonPath, 'utf8'));
const key = Object.keys(canon)[0];
const meta = canon[key];
const acts = meta.chapters || [];
if (!acts.length) { console.error(`No chapters in ${story} canon`); process.exit(1); }

// Colour palettes per story — used for the act palettes and the cover.
const palettes = {
  Elisha: { base: '#1a0e08', accent: '#d4a76a', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10'] },
  Enoch:  { base: '#1a0e08', accent: '#c8a84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10'] },
  Esther: { base: '#2a1a10', accent: '#d4b84b', acts: ['#2a1a10','#1a0e08','#241a10','#1a1420','#1a0e08','#2a1a10','#1a1024','#241810','#1a2a14','#2d1a0e'] },
  Hannah: { base: '#1a0e08', accent: '#e8b84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08'] },
  Isaiah: { base: '#1a0e08', accent: '#c8a84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10'] },
  Jacob:  { base: '#1a0e08', accent: '#d4a76a', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Jeremiah:{ base: '#1a0e08', accent: '#c84b4b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Job:    { base: '#1a0e08', accent: '#d4a76a', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Joseph: { base: '#1a0e08', accent: '#d4b84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Joshua: { base: '#1a0e08', accent: '#e8b84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Nehemiah:{ base: '#1a0e08', accent: '#c8a84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
  Babel:  { base: '#1a0e08', accent: '#d4b84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810'] },
  Babel:  { base: '#1a0e08', accent: '#d4b84b', acts: ['#1a2a1a','#2d1a0e','#2a1a10','#1a1024','#241810','#1a2a14','#2a1a10','#1a0e08','#241a10','#2d1a0e'] },
};
const pal = palettes[story] || { base: '#1a0e08', accent: '#d4a76a', acts: acts.map(() => '#1a2a1a') };

// Shade a hex colour by a fraction (-1..1, negative = darker, positive = lighter).
function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const t = amount < 0 ? 0 : 255;
  const p = Math.abs(amount);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return '#' + [r, g, b].map(v => Math.round(v + (t - v) * p).toString(16).padStart(2, '0')).join('');
}
// ── 1. data/manifest.json ─────────────────────────────────────
const manifestActs = acts.map((ch, i) => {
  const id = ch.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  return {
    id,
    name: `Ch.${i + 1} · ${ch.title}`,
    file: `act${i + 1}_${id}.json`,
    scene: id,
    foreground: `fg_${id}`,
    assetFolder: `act_${String(i + 1).padStart(2, '0')}_${id}`,
    assetStem: `${story.toLowerCase()}_act${i + 1}`,
    particle: (i % 3 === 0) ? 'dawn' : (i % 3 === 1 ? 'dusk' : 'ember'),
    bg: `radial-gradient(circle at 50% 30%, ${pal.acts[i % pal.acts.length]}, #060402 65%)`
  };
});
fs.writeFileSync(path.join(dir, 'data', 'manifest.json'),
  JSON.stringify({ version: '2.0.0', acts: manifestActs }, null, 2) + '\n');

// ── 2. data/actN_<id>.json — one per act ──────────────────────
for (let i = 0; i < acts.length; i += 1) {
  const ch = acts[i];
  const id = ch.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  const lines = [
    {
      id: `${id}_0`,
      speaker: 'narrator',
      fx: 'fade',
      delay: 800,
      align: 'left',
      text: ch.game || ch.title,
      cite: meta.references,
      width: '1/2',
      valign: 'middle'
    },
    {
      id: `${id}_1`,
      speaker: 'narrator',
      fx: 'fade',
      delay: 800,
      align: 'center',
      text: `${meta.question} — ${ch.title} is the next step in that question.`,
      width: '1/2',
      valign: 'middle'
    },
    {
      id: `${id}_2`,
      speaker: 'god',
      fx: 'bounce',
      delay: 800,
      align: 'center',
      sfx: 'THE WORD STANDS',
      text: `The story does not turn on a hero's strength. It turns on the choice made in the ordinary moment.`,
      width: '1/2',
      valign: 'middle'
    },
    {
      id: `${id}_3`,
      speaker: 'narrator',
      fx: 'fade',
      delay: 800,
      align: 'center',
      text: `The chapter settles. The player has walked the path and seen the outcome. What remains is a reflection, not a rewrite.`,
      choices: [
        { label: 'Walk on with the lesson', note: 'The story keeps its shape and the player carries the reflection forward.' },
        { label: 'Rest here a moment', note: 'A pause does not change the outcome. It only lets the player breathe.' }
      ],
      width: '1/2',
      valign: 'middle'
    }
  ];
  const actData = {
    id,
    name: `Ch.${i + 1} · ${ch.title}`,
    bg: `radial-gradient(circle at 50% 30%, ${pal.acts[i % pal.acts.length]}, #060402 65%)`,
    particle: (i % 3 === 0) ? 'dawn' : (i % 3 === 1 ? 'dusk' : 'ember'),
    svg: 'placeholder',
    lines,
    scene: id,
    foreground: `fg_${id}`,
    index: i
  };
  fs.writeFileSync(path.join(dir, 'data', `act${i + 1}_${id}.json`),
    JSON.stringify(actData, null, 2) + '\n');
}

// ── 3. Placeholder SVGs — grass / flower / reed motifs ───────
const beatFolders = ['a_establish', 'b_core_action', 'c_resolve'];
const beatLabels = { a_establish: 'Establish', b_core_action: 'Core Action', c_resolve: 'Resolve' };

function grassSvg(bg, label) {
  return `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${bg}"/>
      <stop offset="100%" style="stop-color:#060402"/>
    </linearGradient>
    <linearGradient id="grass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3a5a2a"/>
      <stop offset="100%" style="stop-color:#1a2a14"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <g>
    ${Array.from({ length: 24 }, (_, i) => {
      const x = 30 + i * 32;
      const h = 80 + ((i * 37) % 120);
      return `<path d="M${x} 600 Q${x - 6} ${600 - h / 2} ${x + 4} ${600 - h} Q${x + 10} ${600 - h / 2} ${x} 600" fill="url(#grass)" opacity="0.85"/>`;
    }).join('\n    ')}
    ${Array.from({ length: 10 }, (_, i) => {
      const x = 60 + i * 70;
      const y = 560 - ((i * 23) % 60);
      const c = ['#f2c14e','#e05a47','#ffd342','#f6a0c0'][i % 4];
      return `<circle cx="${x}" cy="${y}" r="5" fill="${c}" opacity="0.9"/><circle cx="${x + 8}" cy="${y - 6}" r="3" fill="${c}" opacity="0.7"/><circle cx="${x - 7}" cy="${y - 5}" r="3" fill="${c}" opacity="0.7"/>`;
    }).join('\n    ')}
    ${Array.from({ length: 6 }, (_, i) => {
      const x = 120 + i * 110;
      const h = 140 + ((i * 53) % 80);
      return `<path d="M${x} 600 Q${x - 10} ${600 - h / 2} ${x + 6} ${600 - h} Q${x + 16} ${600 - h / 2} ${x} 600" fill="#5a7a3a" opacity="0.7"/>`;
    }).join('\n    ')}
  </g>
  <text x="400" y="540" font-family="system-ui" font-size="13" fill="rgba(255,255,255,0.25)" text-anchor="middle">${label} Background</text>
  <text x="400" y="560" font-family="system-ui" font-size="11" fill="rgba(255,255,255,0.15)" text-anchor="middle">Replace with production SVG</text>
</svg>`;
}

function fgSvg(label) {
  return `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(0,0,0,0)"/>
      <stop offset="100%" style="stop-color:rgba(0,0,0,0.45)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#fg)"/>
  <text x="400" y="560" font-family="system-ui" font-size="14" fill="rgba(255,255,255,0.3)" text-anchor="middle">${label} Foreground</text>
</svg>`;
}

let svgCount = 0;
for (const act of manifestActs) {
  for (const beat of beatFolders) {
    const d = path.join(dir, 'assets', 'svg', act.assetFolder, beat);
    fs.mkdirSync(d, { recursive: true });
    const bgPath = path.join(d, `${act.assetStem}_${beat}_background.svg`);
    const fgPath = path.join(d, `${act.assetStem}_${beat}_foreground.svg`);
    fs.writeFileSync(bgPath, grassSvg(pal.acts[manifestActs.indexOf(act) % pal.acts.length], beatLabels[beat] + ' Background'));
    fs.writeFileSync(fgPath, fgSvg(beatLabels[beat] + ' Foreground'));
    svgCount += 2;
  }
}
console.log(`  wrote ${svgCount} placeholder SVGs (grass/flower/reed motifs)`);

// ── 4. 3D scene factories (midground placeholder) ────────────
const sceneFactories = manifestActs.map((act, i) => {
  const bg = pal.acts[i % pal.acts.length];
  return `(function(global){var THREE=global.THREE;if(!THREE)return;global.SCENE_FACTORIES=global.SCENE_FACTORIES||{};global.SCENE_FACTORIES.${act.id}=function(){var scene=new THREE.Scene();scene.background=new THREE.Color("${bg}");if(global.makeFog)global.makeFog(scene,"${bg}",0.005);scene.add(new THREE.AmbientLight(0xffffff,0.45));var sun=new THREE.DirectionalLight(0xFFD84D,0.7);sun.position.set(0,30,20);scene.add(sun);if(global.loadJSONScene){var data={version:1,name:"${act.id}",settings:{background:"${bg}",fog:{color:"${bg}",density:0.005}},camera:{distance:60,height:18},objects:[{type:"shape",shapeType:"plane",scale:{x:200,y:1,z:100},color:"#1a0e08",material:{type:"toon",outline:0.02},position:{x:0,y:-15,z:0}},{type:"shape",shapeType:"box",scale:{x:18,y:8,z:10},color:"#a06a30",material:{type:"toon",outline:0.04},position:{x:0,y:-8,z:5}},{type:"shape",shapeType:"cylinder",scale:{x:6,y:4,z:4},color:"#e0b888",material:{type:"toon",outline:0.05},position:{x:0,y:-3,z:5}}]};global.loadJSONScene(data,scene);}return{scene:scene,cameraConfig:{distance:60,height:18}};};})(window);`;
}).join('\n');
fs.writeFileSync(path.join(dir, 'assets', 'scenes', `${story.toLowerCase()}-scenes.js`), sceneFactories + '\n');

// ── 5. CSS — story-specific palettes + field backdrop ────────
const cssPalettes = manifestActs.map((act, i) =>
  `.palette-act-${i + 1} { --panel-bg:${pal.acts[i % pal.acts.length]}; --panel-dots:${shade(pal.acts[i % pal.acts.length], -20)}; --accent-color:${pal.accent}; --bubble-bg:#fff7e8; --text-color:#0A0812; }`
).join('\n');
let css = `/* ${story} — Comic CSS. Palettes derived from canon.json. */
:root { --ink: #0A0812; --cream: #FFF7E8; --panel-bg: ${pal.base}; --panel-dots: ${shade(pal.base, -20)}; --accent-color: ${pal.accent}; --bubble-bg: #FFF1D2; --text-color: #0A0812; }

/* ── Act Palettes ─────────────────────────────── */
${cssPalettes}

/* ── Wind-swept field backdrop (all chapters) ─── */
body.palette-act-1 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-2 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-3 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-4 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-5 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-6 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-7 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-8 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-9 #${story.toLowerCase()}FieldBackdrop,
body.palette-act-10 #${story.toLowerCase()}FieldBackdrop {
  opacity: .48;
  visibility: visible;
  transition-delay: 0s;
}

.${story.toLowerCase()}-field-sun {
  position: absolute; left: 0; top: 0; width: 100%; height: 220%;
  transform: translateY(-42%);
  background: radial-gradient(circle at 52% 47%, rgba(255, 220, 105, .95) 0 4%, rgba(229, 166, 58, .48) 8%, rgba(82, 123, 157, .08) 27%, transparent 48%);
}

.${story.toLowerCase()}-grass-field { position: absolute; inset: 0; }

.${story.toLowerCase()}-grass-clump {
  position: absolute; bottom: -1px; width: var(--clump-size); height: var(--clump-size);
  overflow: hidden; transform: translateX(-50%); transform-origin: 50% 100%;
  opacity: var(--clump-opacity);
  animation: ${story.toLowerCase()}GentleBreeze var(--sway-time) ease-in-out var(--sway-delay) infinite;
  will-change: transform;
}

.${story.toLowerCase()}-grass-blade {
  position: absolute; bottom: -100%; left: -50%; width: 100%; height: 160%;
  border-right: max(2px, 1.8vmin) solid var(--blade-color); border-top-right-radius: 50%;
}

.${story.toLowerCase()}-grass-blade:nth-child(2) { bottom: -230%; left: -150%; width: 200%; height: 300%; border-top-right-radius: 20%; }
.${story.toLowerCase()}-grass-blade:nth-child(3) { bottom: -300%; left: 50%; width: 200%; height: 360%; border-right: 0; border-left: max(2px, 1.8vmin) solid var(--blade-color); border-top-left-radius: 15%; }

@keyframes ${story.toLowerCase()}GentleBreeze {
  0%, 100% { transform: translateX(-50%) rotate(-.35deg); }
  50% { transform: translateX(-50%) rotate(.35deg); }
}

@media (prefers-reduced-motion: reduce) { .${story.toLowerCase()}-grass-clump { animation: none; } }

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; background: var(--ink); font-family: 'Nunito', sans-serif; color: var(--cream); }
`;
// ── 5. CSS — template base + story-specific palettes + field backdrop ──
const templateCss = fs.readFileSync(path.join(root, '__Template', 'css', 'template-comic.css'), 'utf8');
css = templateCss + css;
fs.writeFileSync(path.join(dir, 'css', `${story.toLowerCase()}-comic.css`), css);

// ── 6. index.html ─────────────────────────────────────────────
const lower = story.toLowerCase();
const html = `<!DOCTYPE html>
<html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${story} — An interactive comic book from the ${meta.references}. Read offline with our PWA service worker!">
    <meta name="theme-color" content="${pal.base}">
    <meta name="color-scheme" content="dark">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <title>${story.toUpperCase()}! — An Interactive Comic Book</title>
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/story-runtime.css">
    <link rel="stylesheet" href="css/loading-screen.css">
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="css/${lower}-comic.css">
    <link rel="stylesheet" href="css/info-modal.css">
    <script src="vendor/three.r128.min.js"></script>
  </head>
 <body>
  <div id="startScreen">
    <div class="comic-cover">
      <div class="issue">${meta.references} · SPECIAL EDITION</div>
      <h1>${story.toUpperCase()}</h1>
      <div class="subtitle">& ${meta.question.replace(/[?]/,'')}</div>
      <div class="bigtorch"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></div>
      <p>An interactive ${acts.length}-chapter comic. Use arrow keys, swipe, or tap Next to navigate. Drag inside the panel to look around each scene.</p>
      <button id="startBtn">LAUNCH COMIC</button>
    </div>
  </div>
  <div id="app">
    <div id="${lower}FieldBackdrop" aria-hidden="true">
      <div class="${lower}-field-sun"></div>
      <div class="${lower}-grass-field"></div>
    </div>
    <div id="bgGradient"></div>
    <canvas id="particles"></canvas>
    <div id="rainLayer"><div id="rainStripes"></div><div class="wave-container"><div class="air air1"></div><div class="air air2"></div><div class="air air3"></div><div class="air air4"></div></div></div>
    <div id="seaLayer"><div id="seaWalls"></div><div class="wave-container"><div class="air air1"></div><div class="air air2"></div><div class="air air3"></div><div class="air air4"></div></div></div>
    <div id="fireLayer"></div>
    <div id="thunderLayer"></div>
    <div id="ambientLayer"><div class="land-arc"></div><div class="bird-container"><div class="bird-fly"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg></div><div class="bird-fly"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg></div><div class="bird-fly"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M4 14c2-2 4-4 6-4s3 2 5 2 4-2 6-4"/><path d="M16 14l-4 3-4-3"/><path d="M20 10l-4 6-4-6"/></svg></div></div></div>
    <div id="halftoneOverlay"></div>
    <div id="hud"><select id="chapterSelect" aria-label="Jump to chapter"></select><div id="dots" role="list" aria-label="Progress"></div></div>
    <div id="stageWrap"><div id="stage"></div></div>
    <div id="choices" role="group" aria-label="Choices"></div>
    <div id="delayNote" role="status"></div>
    <div id="navHints"><span>◀ Arrow keys or swipe to navigate ▶</span><span>· Drag inside the panel to look around the scene ·</span><span>· ↓ Arrow Down to next chapter ·</span></div>
    <div id="compass-indicator" class="story-compass" aria-label="Story compass"><span>FEAR</span><i></i><span>TRUST</span></div>
    <button id="audioToggle" type="button" title="Turn audio off" aria-label="Turn audio off"></button>
    <button id="nextBtn" aria-label="Next chapter">Next Chapter ↴</button>
    <button id="nextLineBtn" aria-label="Next line">Next →</button>
  </div>
  <div id="portal"></div>
  <footer class="tools-footer" aria-label="Story creation tools">
    <span>Create assets</span>
    <a href="tools/texture-forge.html">Texture Forge</a>
    <a href="tools/character_head_generator.html">Character Generator</a>
  </footer>
  <script src="js/asset-download-manager.js"></script>
  <script src="js/story-runtime.js"></script>
  <script src="js/loading-screen.js"></script>
  <script src="js/audio-manager.js"></script>
  <script src="js/info-modal.js"></script>
  <script src="js/${lower}-scenes-helpers.js"></script>
  <script src="js/${lower}-field-background.js"></script>
  <script src="js/config.js"></script>
  <script src="js/compass.js"></script>
  <script src="assets/scenes/${lower}-scenes.js"></script>
  <script src="js/${lower}-story.js"></script>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const registerStoryWorker = () => navigator.serviceWorker.register('js/sw.js');
        if (window.__storyAssetsReady) registerStoryWorker();
        else window.addEventListener('story:assetsready', registerStoryWorker, { once: true });
      });
    }
  </script>
 </body>
</html>`;
fs.writeFileSync(path.join(dir, 'index.html'), html);

// ── 7. Story engine (adapted from Ruth) ─────────────────────
const engineTemplate = fs.readFileSync(path.join(root, "Ruth", "js", "ruth-story.js"), "utf8");
const engine = engineTemplate
  .replace(/RUTH/g, story.toUpperCase())
  .replace(/ruth/g, lower)
  .replace(/Ruth/g, story)
  .replace(/"ruth"/g, "'" + lower + "'")
  .replace(/ruth:/g, lower + ":")
  .replace(/THE BOOK OF RUTH/g, "THE BOOK OF " + story.toUpperCase())
  .replace(/Ruth —/g, story + " —")
  .replace(/storyId: 'ruth'/g, "storyId: '" + lower + "'")
  .replace(/'ruth'/g, "'" + lower + "'");
fs.writeFileSync(path.join(dir, "js", lower + "-story.js"), engine);

// ── 8. Scene helpers + field background (per-story variants) ──
const helpersSrc = fs.readFileSync(path.join(root, '__Template', 'js', 'template-scenes-helpers.js'), 'utf8');
const helpers = helpersSrc.replace(/template/g, lower).replace(/TEMPLATE/g, story.toUpperCase());
fs.writeFileSync(path.join(dir, 'js', `${lower}-scenes-helpers.js`), helpers);

const fieldSrc = fs.readFileSync(path.join(root, 'Moses', 'js', 'moses-field-background.js'), 'utf8');
const field = fieldSrc.replace(/moses-grass/g, `${lower}-grass`).replace(/createMosesFieldBackground/g, `create${story}FieldBackground`).replace(/Moses/g, story);
fs.writeFileSync(path.join(dir, 'js', `${lower}-field-background.js`), field);

// ── 9. precache-manifest.json (from disk) ────────────────────
function walk(d, pre) {
  const out = [];
  if (!fs.existsSync(d)) return out;
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) out.push(...walk(p, pre + f.name + '/'));
    else out.push(pre + f.name);
  }
  return out;
}
const urls = [];
const seen = new Set();
const add = u => { if (u && !seen.has(u)) { seen.add(u); urls.push(u); } };
['index.html', 'offline.html'].forEach(f => { if (fs.existsSync(path.join(dir, f))) add(f); });
walk(path.join(dir, 'css'), 'css/').forEach(add);
walk(path.join(dir, 'js'), 'js/').forEach(add);
walk(path.join(dir, 'data'), 'data/').forEach(add);
walk(path.join(dir, 'assets'), 'assets/').forEach(add);
walk(path.join(dir, 'beats'), 'beats/').forEach(add);
walk(path.join(dir, 'vendor'), 'vendor/').forEach(add);
const manifestPath = path.join(dir, 'precache-manifest.json');
const existing = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
existing.urls = urls;
existing.version = '2.0.0';
existing.description = `${story} ${acts.length}-act layered comic`;
fs.writeFileSync(manifestPath, JSON.stringify(existing) + '\n');

console.log(`✓ ${story}: ${acts.length} acts, ${svgCount} SVGs, ${urls.length} precache entries`);
