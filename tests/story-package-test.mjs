import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..');
const stories = ['Adam', 'Daniel', 'Eiljah', 'Jonah', 'Moses', 'Noah'];
const required = ['asset-download-manager.js', 'loading-screen.css', 'loading-screen.js', 'story-runtime.css', 'story-runtime.js', 'audio-manager.js'];
const failures = [];
const pass = message => console.log(`✓ ${message}`);
const fail = message => failures.push(message);

for (const story of stories) {
  const dir = path.join(root, story);
  const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'precache-manifest.json'), 'utf8'));

  for (const file of required) {
    if (!fs.existsSync(path.join(dir, file))) fail(`${story}: missing ${file}`);
    if (!html.includes(file)) fail(`${story}: index.html does not load ${file}`);
    if (!manifest.urls.includes(`${story}/${file}`)) fail(`${story}: manifest omits ${file}`);
  }
  const runtime = fs.readFileSync(path.join(dir, 'story-runtime.js'), 'utf8');
  for (const mode of ['reading', 'choice', 'game', 'modal', 'transition', 'paused']) {
    if (!runtime.includes(`'${mode}'`)) fail(`${story}: shared runtime omits ${mode} mode`);
  }

  const packageRefs = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:js|css))["']/gi)].map(match => match[1]);
  for (const ref of packageRefs) {
    if (/^(?:https?:)?\/\//i.test(ref) || ref.startsWith('../')) fail(`${story}: non-local package reference ${ref}`);
    else if (!fs.existsSync(path.resolve(dir, ref))) fail(`${story}: broken HTML reference ${ref}`);
  }

  for (const entry of manifest.urls) {
    const local = entry.startsWith(`${story}/`) ? entry.slice(story.length + 1) : entry;
    if (!fs.existsSync(path.join(dir, local))) fail(`${story}: missing precache asset ${entry}`);
  }
  const storySources = fs.readdirSync(dir).filter(file => /\.(?:js|json)$/.test(file));
  if (fs.existsSync(path.join(dir, 'data', 'story.json'))) storySources.push(path.join('data', 'story.json'));
  if (fs.existsSync(path.join(dir, 'data'))) {
    for (const file of fs.readdirSync(path.join(dir, 'data'))) {
      if (/^act\d+_.+\.json$/.test(file)) storySources.push(path.join('data', file));
    }
  }
  const declaredSfx = storySources.flatMap(file => {
    const source = fs.readFileSync(path.join(dir, file), 'utf8');
    return [...source.matchAll(/audioSfx["']?\s*:\s*["']([^"']+)["']/g)].map(match => match[1]);
  });
  for (const effect of declaredSfx) {
    if (!fs.existsSync(path.join(dir, effect))) fail(`${story}: declared SFX is missing: ${effect}`);
    if (!manifest.urls.includes(`${story}/${effect}`)) fail(`${story}: declared SFX is not precached: ${effect}`);
  }
  if (declaredSfx.length !== 4) fail(`${story}: expected 4 wired scene SFX, found ${declaredSfx.length}`);
  else pass(`${story} scene SFX wired (${declaredSfx.length})`);
  pass(`${story} package inspected (${manifest.urls.length} precache entries)`);
}

const jonahMapDir = path.join(root, 'Jonah', 'data');
const jonahMaps = fs.readdirSync(jonahMapDir).filter(file => /^act\d+_.+_map\.json$/.test(file));
for (const file of jonahMaps) {
  const map = JSON.parse(fs.readFileSync(path.join(jonahMapDir, file), 'utf8'));
  const hotspots = map.hotspots || [];
  const ids = hotspots.map(item => item.id);
  if (new Set(ids).size !== ids.length) fail(`Jonah: duplicate hotspot ID in ${file}`);
  if (!hotspots.some(item => item.triggerOnce)) fail(`Jonah: no completion hotspot in ${file}`);
}
pass(`Jonah completion maps inspected (${jonahMaps.length})`);
const jonahEngine = fs.readFileSync(path.join(root, 'Jonah', 'isometricEngine.js'), 'utf8');
if (!jonahEngine.includes('if (!inputEnabled) return;')) fail('Jonah: renderer is not suspended while hidden');
if (!jonahEngine.includes("new CustomEvent('isometric:error'")) fail('Jonah: map/WebGL recovery event is missing');
if (jonahEngine.includes('new THREE.SphereGeometry(0.25, 12, 12)')) fail('Jonah: generic blue-sphere hotspots remain');

const visions = JSON.parse(fs.readFileSync(path.join(root, 'Daniel', 'data', 'vision-scenes.json'), 'utf8'));
const scenes = Array.isArray(visions) ? visions : (visions.scenes || Object.values(visions));
for (const scene of scenes) {
  if (!(scene.riskTimerSeconds > 0)) fail(`Daniel: ${scene.id} has no risk timer`);
  const fragments = scene.fragments || [];
  if (!fragments.some(item => !item.isDecoy)) fail(`Daniel: ${scene.id} has no meaningful fragments`);
  if (new Set(fragments.map(item => item.id)).size !== fragments.length) fail(`Daniel: duplicate fragment ID in ${scene.id}`);
  for (const fragment of fragments) {
    if (!fragment.position || !Number.isFinite(fragment.position.x) || !Number.isFinite(fragment.position.y)) fail(`Daniel: ${fragment.id} has no valid position`);
  }
}
pass(`Daniel vision scenes inspected (${scenes.length})`);
const danielComic = fs.readFileSync(path.join(root, 'Daniel', 'daniel-comic.js'), 'utf8');
if (!danielComic.includes('function startVisionAssembly()')) fail('Daniel: interpretation assembly step is missing');
if (!danielComic.includes('recordAssemblyMistake')) fail('Daniel: assembly feedback is missing');

const elijahStory = JSON.parse(fs.readFileSync(path.join(root, 'Eiljah', 'elijah-story.json'), 'utf8'));
const hearingLines = elijahStory.flatMap(chapter => chapter.lines || []).filter(line => line.interaction === 'hearing');
if (hearingLines.length !== 1) fail(`Elijah: expected one hearing interaction, found ${hearingLines.length}`);
const elijahComic = fs.readFileSync(path.join(root, 'Eiljah', 'elijah-comic.js'), 'utf8');
for (const layer of ['wind', 'quake', 'fire', 'threat', 'despair']) {
  if (!elijahComic.includes(`data-layer="${layer}"`)) fail(`Elijah: hearing interaction is missing ${layer} layer`);
}
if (!elijahComic.includes('data-hearing-x') || !elijahComic.includes('data-hearing-y')) fail('Elijah: two-axis accessible inputs are missing');
if (!elijahComic.includes('updateNextBtn();')) fail('Elijah: hearing interaction does not restore story navigation');
pass('Elijah hearing vertical slice inspected');

// Moses — per-act split: manifest.json + 10 act JSONs + 10 scene SVGs + 10 fg SVGs + 10 3D JSONs + 10 scenes/*.js
const mosesDataDir = path.join(root, 'Moses', 'data');
if (!fs.existsSync(path.join(mosesDataDir, 'manifest.json'))) fail('Moses: missing data/manifest.json');
else {
  const mosesManifest = JSON.parse(fs.readFileSync(path.join(mosesDataDir, 'manifest.json'), 'utf8'));
  if (!Array.isArray(mosesManifest.acts) || mosesManifest.acts.length !== 10) {
    fail(`Moses: manifest must list 10 acts, found ${mosesManifest.acts?.length ?? 0}`);
  } else {
    pass(`Moses per-act manifest OK (${mosesManifest.acts.length} acts)`);
  }
}
for (let i = 1; i <= 10; i += 1) {
  const expected = fs.readdirSync(mosesDataDir).find(name => name.startsWith(`act${i}_`) && name.endsWith('.json') && name !== 'manifest.json');
  if (!expected) fail(`Moses: missing data/act${i}_*.json`);
}
const mosesScenes = ['basket', 'exile', 'throne', 'passover', 'sea', 'bread', 'mountain', 'calf', 'wilderness', 'nebo'];
for (const id of mosesScenes) {
  if (!fs.existsSync(path.join(root, 'Moses', 'assets', 'svg', `scene_${id}.svg`))) fail(`Moses: missing scene_${id}.svg`);
  if (!fs.existsSync(path.join(root, 'Moses', 'assets', 'svg', `fg_${id}.svg`)))     fail(`Moses: missing fg_${id}.svg`);
  if (!fs.existsSync(path.join(root, 'Moses', 'assets', '3d',   `${id}.json`)))       fail(`Moses: missing 3d/${id}.json`);
  if (!fs.existsSync(path.join(root, 'Moses', 'scenes',         `${id}.js`)))         fail(`Moses: missing scenes/${id}.js`);
}
if (!fs.existsSync(path.join(root, 'Moses', 'vendor', 'three.r128.min.js'))) fail('Moses: missing vendor/three.r128.min.js');
if (!fs.existsSync(path.join(root, 'Moses', 'moses-scenes-helpers.js'))) fail('Moses: missing moses-scenes-helpers.js');
const mosesHtml = fs.readFileSync(path.join(root, 'Moses', 'index.html'), 'utf8');
if (!mosesHtml.includes('vendor/three.r128.min.js')) fail('Moses: index.html does not load three.js');
if (!mosesHtml.includes('moses-scenes-helpers.js'))  fail('Moses: index.html does not load moses-scenes-helpers.js');
for (const id of mosesScenes) {
  if (!mosesHtml.includes(`scenes/${id}.js`)) fail(`Moses: index.html does not load scenes/${id}.js`);
}
const mosesStory = fs.readFileSync(path.join(root, 'Moses', 'moses-story.js'), 'utf8');
if (!mosesStory.includes('manifest.json')) fail('Moses: engine does not load data/manifest.json');
if (!mosesStory.includes('SCENE_FACTORIES')) fail('Moses: engine does not register 3D scene factories');
if (!mosesStory.includes('svg-behind') || !mosesStory.includes('svg-front')) fail('Moses: engine does not render SVG bg + fg layers');
pass('Moses layered renderer + per-act split verified');

if (failures.length) {
  console.error(`\n${failures.length} package problem(s):`);
  failures.forEach(message => console.error(`✗ ${message}`));
  process.exit(1);
}
console.log('\nAll story package checks passed.');
