/**
 * add-mood-boards.mjs
 * Creates an art/ folder in every story with one mood board per
 * scene, named after the story's data files (act1_<id>.md), plus a
 * readme.md explaining the composition system for both the 2D SVG
 * panels and the 3D three.js Shot Designer scenes.
 *
 * Each mood board pulls:
 *   - the director notes (from the scene briefs)
 *   - the palette and particle mode from the act JSON
 *   - the SVG panel layout (a_establish / b_core_action / c_resolve)
 *   - the 3D scene spec for the Shot Designer
 *
 * Usage: node scripts/add-mood-boards.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { BRIEFS } from './add-scene-descriptions.mjs';

const root = process.cwd();

const PARTICLES = {
  dawn: 'cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon',
  dusk: 'low warm sun, long amber shadows, deep violet sky banding',
  ember: 'firelight glow, warm orange accents against deep shadow',
  storm: 'wind-driven rain, cold grey-blue, lightning flicker',
  deep: 'slow rising bubbles, blue-green gloom, filtered light',
  golden: 'drifting sand, warm dust in the air, long light',
  midday: 'heat haze, shimmering air, bleached highlights',
};

const GAMES = {
  wisdom: 'listening and discernment',
  listen_respond: 'call-and-response',
  tap_sequence: 'ordered rhythm',
  watch_move: 'tracking a moving element',
  look_closely: 'observation',
  manna_drop: 'gather-with-care',
  gather_with_care: 'gather-with-care',
  find_path: 'pathfinding',
  fit_pieces: 'assembly',
  keep_balance: 'balance',
  river_crossing: 'crossing',
};

const MOOD_WORDS = [
  ['fire', 'firelight'], ['flame', 'firelight'], ['burning', 'incandescent'],
  ['storm', 'tempest'], ['lightning', 'electric'], ['thunder', 'ominous'],
  ['rain', 'soaked'], ['flood', 'deluge'], ['water', 'aquatic'],
  ['sea', 'nautical'], ['river', 'riverine'], ['jordan', 'riverine'],
  ['night', 'nocturnal'], ['midnight', 'nocturnal'], ['moon', 'moonlit'],
  ['star', 'celestial'], ['dawn', 'first-light'], ['sunrise', 'first-light'],
  ['sunset', 'golden-hour'], ['dusk', 'golden-hour'], ['evening', 'lamplight'],
  ['desert', 'arid'], ['sand', 'arid'], ['dust', 'dusty'],
  ['garden', 'verdant'], ['tree', 'verdant'], ['palm', 'verdant'],
  ['field', 'pastoral'], ['wheat', 'harvest'], ['grain', 'harvest'],
  ['bread', 'humble'], ['tent', 'nomadic'], ['camp', 'military-camp'],
  ['battle', 'battlefield'], ['army', 'military'], ['war', 'bellicose'],
  ['sword', 'martial'], ['chariot', 'martial'], ['spear', 'martial'],
  ['king', 'regal'], ['queen', 'regal'], ['throne', 'regal'],
  ['palace', 'palatial'], ['temple', 'sacred'], ['altar', 'sacred'],
  ['prayer', 'devotional'], ['god', 'numinous'], ['angel', 'numinous'],
  ['prophet', 'prophetic'], ['vision', 'apocalyptic'], ['dream', 'dreamlike'],
  ['child', 'tender'], ['infant', 'tender'], ['mother', 'maternal'],
  ['shepherd', 'pastoral'], ['flock', 'pastoral'], ['sheep', 'pastoral'],
  ['mountain', 'lofty'], ['hill', 'rolling'], ['rock', 'craggy'],
  ['stone', 'megalithic'], ['wall', 'fortified'], ['gate', 'threshold'],
  ['city', 'urban'], ['winepress', 'viticulture'], ['fleece', ' pastoral'],
  ['feast', 'festive'], ['banquet', 'festive'], ['song', 'musical'],
  ['harvest', 'abundant'], ['wilderness', 'barren'], ['cave', 'subterranean'],
  ['rope', 'tense'], ['cord', 'tense'], ['scarlet', 'blood-red'],
  ['blood', 'gory'], ['death', 'mortal'], ['grave', 'funereal'],
  ['hope', 'aspirational'], ['covenant', 'solemn'], ['promise', 'aspirational'],
  ['journey', 'peripatetic'], ['road', 'peripatetic'], ['path', 'peripatetic'],
];

function moodTags(name, desc) {
  const hay = (name + ' ' + desc).toLowerCase();
  const tags = [];
  for (const [word, tag] of MOOD_WORDS) {
    // Word-boundary match so "broad" does not hit "road" and
    // "warm" does not hit "war".
    const re = new RegExp(`(^|[^a-z])${word}([^a-z]|$)`);
    if (re.test(hay) && !tags.includes(tag)) tags.push(tag);
  }
  return tags.slice(0, 8);
}

function extractPalette(bg) {
  const colors = [...bg.matchAll(/#[0-9a-fA-F]{3,8}/g)].map(m => m[0]);
  const focus = bg.match(/circle at ([^,)]+)/);
  return { colors, focus: focus ? focus[1].trim() : '50% 50%' };
}

function hexName(hex) {
  const full = hex.replace('#', '');
  const v = full.length === 3
    ? full.split('').map(c => c + c).join('')
    : full;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (lum > 0.82) return 'pale';
  if (lum > 0.62) return 'light';
  if (lum > 0.42) return 'mid';
  if (lum > 0.22) return 'deep';
  return 'dark';
}

function describePalette(colors) {
  if (!colors.length) return 'the story default palette';
  return colors.map(c => `\`${c}\` (${hexName(c)})`).join(' → ');
}

let stats = { boards: 0, readmes: 0, skipped: [] };

/* Jonah's data files are isometric game maps, each covering several
 * narrative beats. Map each map file to the briefs it stages. */
const JONAH_MAPS = [
  { id: 'ship_map', name: 'The Ship at Sea', file: 'act1_ship_map.json', briefs: [0, 1] },
  { id: 'whale_map', name: 'The Great Fish', file: 'act2_whale_map.json', briefs: [2, 3] },
  { id: 'nineveh_map', name: 'The City of Nineveh', file: 'act3_nineveh_map.json', briefs: [4, 5, 6] },
  { id: 'figtree_map', name: 'The Plant and the Lesson', file: 'act4_figtree_map.json', briefs: [7, 8] },
];

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function loadActs(story, dataDir) {
  // Jonah's act data files are isometric game maps, each staging
  // several narrative beats — handle it before the generic paths.
  // Canon gives the per-chapter games; scenes.json gives each
  // map's palette and ambient effect.
  if (story === 'Jonah' && fs.existsSync(path.join(dataDir, 'act1_ship_map.json'))) {
    const canon = JSON.parse(fs.readFileSync(path.join(dataDir, 'canon.json'), 'utf8')).Jonah;
    const scenes = JSON.parse(fs.readFileSync(path.join(dataDir, 'scenes.json'), 'utf8'));
    const MAP_CHAPTERS = [[1, 2], [3, 4], [5, 6, 7], [8, 9]];
    const PALETTES = {
      sea: 'radial-gradient(circle at 50% 50%, #8fb7c9, #1c3d54 70%)',
      desert: 'radial-gradient(circle at 50% 50%, #e8c87a, #a05a2c 70%)',
    };
    const EFFECT_MODE = { rain: 'storm', bubbles: 'deep', sand: 'golden', 'heat-rays': 'midday' };
    return JONAH_MAPS.map((m, i) => {
      const chs = MAP_CHAPTERS[i].map(n => canon.chapters.find(c => c.number === n)).filter(Boolean);
      const sc = scenes.find(s => s.id === `act${i + 1}_game`) || {};
      return {
        id: m.id, name: m.name, file: m.file,
        assetFolder: `act_${String(i + 1).padStart(2, '0')}_${m.id}`,
        assetStem: `jonah_${i + 1}`,
        // briefs are indices into the story's scene list
        briefs: MAP_CHAPTERS[i].map(n => n - 1),
        particle: EFFECT_MODE[sc.effect] || 'dawn',
        bg: PALETTES[sc.palette] || '',
        game: (chs[0] || {}).engine || '',
        gameTitle: (chs[0] || {}).game || '',
        lines: sc.bible ? [{ speaker: 'narrator', text: sc.bible }] : [],
      };
    });
  }
  const manifestFile = path.join(dataDir, 'manifest.json');
  if (fs.existsSync(manifestFile)) {
    const acts = JSON.parse(fs.readFileSync(manifestFile, 'utf8')).acts;
    // Two manifest shapes: newer acts carry assetFolder/assetStem,
    // older ones only id/name/file. Derive the SVG asset folder
    // from the act number in the file name.
    return acts.map(a => {
      const m = (a.file || '').match(/^act(\d)/);
      const n = m ? parseInt(m[1], 10) : 0;
      return {
        ...a,
        assetFolder: a.assetFolder
          || `act_${String(n).padStart(2, '0')}_${a.id}`,
        assetStem: a.assetStem || `${story.toLowerCase()}_${n}`,
      };
    });
  }
  // Abraham: derive acts from canon.json chapters, using the same
  // naming convention the build script writes to data/manifest.json.
  const canonFile = path.join(dataDir, 'canon.json');
  if (fs.existsSync(canonFile)) {
    const canon = JSON.parse(fs.readFileSync(canonFile, 'utf8'));
    const key = Object.keys(canon)[0];
    return canon[key].chapters.map((ch, i) => {
      const id = slugify(ch.title);
      return {
        id,
        name: `Ch.${i + 1} · ${ch.title}`,
        file: `act${i + 1}_${id}.json`,
        assetFolder: `act_${String(i + 1).padStart(2, '0')}_${id}`,
        assetStem: `${story.toLowerCase()}_act${i + 1}`,
        gameTitle: ch.game,
        game: ch.engine,
      };
    });
  }
  return null;
}

for (const story of Object.keys(BRIEFS)) {
  const dataDir = path.join(root, story, 'data');
  if (!fs.existsSync(dataDir)) { stats.skipped.push(story + ': no data/'); continue; }
  const acts = loadActs(story, dataDir);
  if (!acts) { stats.skipped.push(story + ': no act data'); continue; }
  const brief = BRIEFS[story];
  const artDir = path.join(root, story, 'art');
  fs.mkdirSync(artDir, { recursive: true });

  const lower = story.toLowerCase();

  // The act files carry only visual data; canon.json holds the
  // interactive beat (game description + engine) per chapter.
  const canonFile = path.join(dataDir, 'canon.json');
  const canonChapters = fs.existsSync(canonFile)
    ? ((JSON.parse(fs.readFileSync(canonFile, 'utf8'))[story] || {}).chapters || [])
    : [];
  const canonByTitle = new Map(canonChapters.map(c => [c.title, c]));

  acts.forEach((act, i) => {
    const actFile = path.join(dataDir, act.file);
    const actData = fs.existsSync(actFile)
      ? JSON.parse(fs.readFileSync(actFile, 'utf8'))
      : { particle: 'dawn', bg: '', lines: [] };
    // Jonah boards stage several briefs; every other story is 1:1.
    const idxs = act.briefs || [i];
    const sceneName = idxs.map(x => brief.scenes[x][0]).join(' / ');
    const sceneDesc = idxs.map(x => brief.scenes[x][1]).join(' ');
    const palette = extractPalette(actData.bg || act.bg || '');
    const particleMode = actData.particle || act.particle || 'dawn';
    const particle = PARTICLES[particleMode] || particleMode;
    const bareName = (actData.name || act.name || '').replace(/^Ch\.\d+\s*·\s*/, '');
    const canonCh = canonByTitle.get(bareName)
      || canonChapters.find(c => slugify(c.title) === act.id)
      || canonChapters.find(c => c.number === i + 1);
    const gameTitle = actData.gameTitle || act.gameTitle || actData.game || act.game
      || (canonCh && canonCh.game) || '';
    const engine = actData.game || act.game || (canonCh && canonCh.engine) || '';
    const game = GAMES[engine.replace(/-/g, '_')] || engine || 'interactive beat';
    const firstLine = (actData.lines || act.lines || []).find(l => l.speaker === 'narrator');
    const sceneId = `${lower}-${act.id.replace(/_/g, '-')}`;
    const boardFile = path.join(artDir, act.file.replace(/\.json$/, '.md'));

    // Props and characters mentioned in the director notes become the
    // shared cast list for both pipelines.
    const castLine = sceneDesc.match(/Stage: (.+?)(?:;|$)/);
    const staging = castLine ? castLine[1].replace(/\.$/, '') : 'the scene\'s key elements';

    const md = [];
    md.push(`# ${act.name}`);
    md.push('');
    md.push(`**Mood board ${i + 1} of ${acts.length}** — ${story} (${brief.ref})`);
    md.push('');
    md.push(`| | |`);
    md.push(`| --- | --- |`);
    md.push(`| Data file | \`../data/${act.file}\` |`);
    md.push(`| SVG assets | \`../assets/svg/${act.assetFolder}/\` |`);
    md.push(`| 3D scene | \`${sceneId}\` in \`../tools/shot-designer/scenes/\` |`);
    md.push(`| Particle mode | ${particleMode} — ${particle} |`);
    md.push(`| Game beat | ${gameTitle} — ${game} |`);
    md.push('');
    if (firstLine) {
      md.push(`> "${firstLine.text}"`);
      md.push('');
    }
    md.push(`## Director notes`);
    md.push('');
    md.push(sceneDesc);
    md.push('');
    md.push(`## 2D SVG composition`);
    md.push('');
    md.push(`The scene renders as three stacked SVG panels, one per beat of the`);
    md.push(`act, in \`../assets/svg/${act.assetFolder}/\`:`);
    md.push('');
    md.push(`| Panel | Beat | Content |`);
    md.push(`| --- | --- | --- |`);
    md.push(`| \`a_establish\` | establishing | wide framing of the setting: ${staging} |`);
    md.push(`| \`b_core_action\` | core action | the scene's central movement and characters |`);
    md.push(`| \`c_resolve\` | resolution | the beat's outcome, holding the emotional note |`);
    md.push('');
    md.push(`- **Palette:** ${describePalette(palette.colors)}`);
    md.push(`- **Vignette:** radial gradient centred at ${palette.focus} — the eye lands here first`);
    md.push(`- **Ambience:** ${particleMode} particles drift across the panels (${particle})`);
    md.push(`- **Line work:** bold silhouettes for the focal element, lighter strokes for depth`);
    md.push('');
    md.push(`## 3D three.js composition`);
    md.push('');
    md.push(`**Shot Designer scene:** \`${sceneId}\``);
    md.push('');
    md.push(`- **File:** \`../tools/shot-designer/scenes/${sceneId}.js\`, registered in \`scenes/manifest.json\``);
    md.push(`- **Lighting:** ${particleMode} — ${particle}; hemisphere + key light tuned to the 2D palette`);
    md.push(`- **Set:** ${staging}`);
    md.push(`- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing`);
    md.push(`- **Motion:** one repeating loop (water, fire, weather or figure movement) so the`);
    md.push(`  still frame and the animated shot read the same`);
    md.push('');
    md.push(`## Mood`);
    md.push('');
    md.push(moodTags(sceneName, sceneDesc).map(t => `\`${t}\``).join(' '));
    md.push('');

    fs.writeFileSync(boardFile, md.join('\n') + '\n');
    stats.boards++;
  });

  /* art/readme.md — the composition system for both pipelines */
  const readme = [];
  readme.push(`# Art — Mood Boards`);
  readme.push('');
  readme.push(`Visual direction for every scene in the **${story}** story (${brief.ref}).`);
  readme.push(`Each mood board is named after its data file in \`../data/\``);
  readme.push(`(\`act1_<scene>.md\` ↔ \`act1_<scene>.json\`) and is the shared contract`);
  readme.push(`between the two rendering pipelines:`);
  readme.push('');
  readme.push('```');
  readme.push('art/');
  readme.push('├── readme.md                    ← this file');
  readme.push(`├── act1_<scene>.md              ← mood board 1`);
  readme.push(`├── act2_<scene>.md              ← mood board 2`);
  readme.push('└── ...                          ← one per scene');
  readme.push('```');
  readme.push('');
  readme.push(`## Reading a mood board`);
  readme.push('');
  readme.push('Every board has four sections:');
  readme.push('');
  readme.push('1. **Header table** — the data file, the SVG asset folder, the 3D scene id,');
  readme.push('   the particle mode and the interactive game beat for the scene.');
  readme.push('2. **Director notes** — the biblical account and staging direction');
  readme.push('   (setting, characters, props, light, mood).');
  readme.push('3. **2D SVG composition** — the three-panel layout, palette and vignette');
  readme.push('   used by the comic panels.');
  readme.push('4. **3D three.js composition** — the Shot Designer scene spec: lighting,');
  readme.push('   set, camera and motion.');
  readme.push('');
  readme.push(`## 2D SVG pipeline`);
  readme.push('');
  readme.push(`The comic scenes are hand-layered SVGs in \`../assets/svg/\`, one folder per`);
  readme.push(`act (\`act_01_<scene>/\`) with three panels:`);
  readme.push('');
  readme.push(`- \`a_establish\` — wide establishing shot of the setting`);
  readme.push(`- \`b_core_action\` — the central action of the scene`);
  readme.push(`- \`c_resolve\` — the resolution beat`);
  readme.push('');
  readme.push(`Each panel has a background and (where used) a foreground layer. Palettes`);
  readme.push(`come from the act's \`bg\` radial gradient in \`../data/\`; the gradient's`);
  readme.push(`centre point is the composition's focus. Particle modes (\`dawn\`,`);
  readme.push(`\`dusk\`, \`ember\`, \`storm\`, \`deep\`, \`golden\`, \`midday\`) add`);
  readme.push(`drifting ambient elements — dust motes at dawn, embers at dusk,`);
  readme.push(`sparks in firelight, rain in a storm, bubbles in the deep,`);
  readme.push(`sand in the wind, haze at midday.`);
  readme.push('');
  readme.push(`## 3D three.js pipeline`);
  readme.push('');
  readme.push(`The 3D scenes live in \`../tools/shot-designer/scenes/\`, one ES module per`);
  readme.push(`scene named \`<story>-<scene>.js\` (e.g. \`${lower}-${acts[0].id}.js\`).`);
  readme.push(`Each module exports \`build(group)\` and is registered in`);
  readme.push(`\`../tools/shot-designer/scenes/manifest.json\`. Scenes are assembled from`);
  readme.push(`the shared primitives in \`scenes/lib/lowpoly.js\` (terrain, water, figures,`);
  readme.push(`flora, lighting) so every scene shares the same low-poly visual language.`);
  readme.push('');
  readme.push(`The Shot Designer (\`../tools/shot-designer/index.html\`) frames camera shots`);
  readme.push(`against each scene, animates them along timelines, and exports stills or`);
  readme.push(`video. Scene notes for every board are in the comment at the top of that`);
  readme.push(`file.`);
  readme.push('');
  readme.push(`## Keeping 2D and 3D in sync`);
  readme.push('');
  readme.push(`The mood board is the contract between the pipelines. When a scene changes:`);
  readme.push('');
  readme.push(`1. Update the director notes here first.`);
  readme.push(`2. Re-tune the SVG panels' palette and staging to match.`);
  readme.push(`3. Re-tune the Shot Designer scene's lighting, set and camera to match.`);
  readme.push('');
  readme.push(`Palette, props, light and mood must agree across both, so a frame from the`);
  readme.push(`comic and a still from the 3D scene read as the same world.`);
  readme.push('');

  fs.writeFileSync(path.join(artDir, 'readme.md'), readme.join('\n') + '\n');
  stats.readmes++;
}

console.log(`Wrote ${stats.boards} mood boards and ${stats.readmes} art/readme.md files.`);
if (stats.skipped.length) {
  console.log('\nSkipped:');
  stats.skipped.forEach(s => console.log('  ' + s));
}
