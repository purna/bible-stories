/**
 * add-tool-docs.mjs
 * For every story's tools/ folder:
 *   1. Adds the SCENE DIRECTOR NOTES comment to shot-designer/index.html
 *      (the same notes used in scene_designer.html) and names the story
 *      in the page title.
 *   2. Adds a CHARACTER DIRECTOR NOTES comment to character-designer/index.html,
 *      parsed from the story's own character_presets.js.
 *   3. Writes tools/readme.md with instructions for each tool, the character
 *      descriptions, the scene list, and the textures required for the scenes.
 *
 * Usage: node scripts/add-tool-docs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { BRIEFS } from './add-scene-descriptions.mjs';

const root = process.cwd();

/* Babel's briefs live in the shared BRIEFS (add-scene-descriptions.mjs). */

function decodeAttr(s) {
  return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function encodeComment(s) {
  return s.replace(/--/g, '—');
}

/* ── Character preset parsing ─────────────────────────────────── */

function parsePresets(presetsSrc) {
  // Base defaults: const XXX_BASE = { ... }
  const baseMatch = presetsSrc.match(/const\s+\w*BASE\s*=\s*\{([^}]*)\}/);
  const base = {};
  if (baseMatch) {
    for (const m of baseMatch[1].matchAll(/"([\w]+)":\s*("?[^,\n]+"?)/g)) {
      base[m[1]] = m[2].replace(/"/g, '').trim();
    }
  }
  // Presets:  "key": fnName("Display", { ...overrides... }),
  const presets = [];
  const re = /"([a-z_0-9]+)":\s*\w+\(\s*"([^"]+)"\s*,\s*(\{[^}]*\})\s*\)/g;
  let m;
  while ((m = re.exec(presetsSrc))) {
    const overrides = {};
    for (const p of m[3].matchAll(/"([\w]+)":\s*("?[^,}]+"?)/g)) {
      overrides[p[1]] = p[2].replace(/"/g, '').trim();
    }
    presets.push({ key: m[1], name: m[2], ...base, ...overrides });
  }
  return presets;
}

const HATS = {
  shepherd_wrap: "a shepherd's headwrap", headscarf: 'a headscarf',
  wrapped_scarf: 'a wrapped scarf', turban: 'a turban',
  crown: 'a crown', circlet: 'a gold circlet', wrap: 'a wrapped headcloth',
  kippah: 'a head covering', veil: 'a veil', hood: 'a hood',
  mitre: 'a priestly mitre', diadem: 'a diadem',
  royal_diadem: 'a royal diadem', battle_helmet: 'a battle helmet',
  skullcap: 'a skullcap',
};
const HAIR = {
  short: 'short hair', wavy: 'wavy hair', buzz: 'close-cropped hair',
  braids: 'braided hair', flowing: 'flowing hair', long: 'long hair',
  shaved: 'shaved hair', curled: 'curly hair', parted: 'parted hair',
  ponytail: 'hair tied back', side_braid: 'a side braid',
  shaved_sides: 'shaved sides', shoulder_waves: 'shoulder-length waves',
  locs: 'locs', crown_braids: 'crown braids', receding: 'a receding hairline',
};
const BEARDS = {
  short: 'a short beard', full_round: 'a full round beard', long: 'a long beard',
  pointed: 'a pointed beard', goatee: 'a goatee', none: 'clean-shaven',
  trimmed: 'a trimmed beard', wide: 'a wide beard',
};
const CLOTHING = {
  desert_mantle: 'desert mantle', tunic: 'tunic', traveller_cloak: "traveller's cloak",
  robe: 'long robe', armor: 'armour', priestly_robe: 'priestly robe',
  cloak: 'cloak', kaftan: 'kaftan', gown: 'gown', apron: 'work apron',
  priestly_ephod: 'priestly ephod', royal_robe: 'royal robe',
  royal_robes: 'royal robes', battle_dress: 'battle dress',
  work_clothes: 'work clothes', fine_linen: 'fine linen',
  mourning_cloth: 'mourning cloth', shepherd_cloak: "shepherd's cloak",
  queen_robe: "queen's robe", king_robe: "king's robe",
  soldier_tunic: "soldier's tunic", work_tunic: 'work tunic',
  military_lorica: 'military lorica', prophet_mantle: "prophet's mantle",
  court_dress: 'court dress',
};
const MATERIALS = {
  herringbone: 'herringbone-woven', scales: 'scale-patterned',
  fine_linen: 'fine-linen', woven_linen: 'woven-linen',
  basket_weave: 'basket-weave', dotted: 'dot-patterned',
};

function describeCharacter(c) {
  const parts = [];
  parts.push(c.hatStyle && c.hatStyle !== 'none' ? HATS[c.hatStyle] || `a ${c.hatStyle.replace(/_/g, ' ')}` : 'bare-headed');
  if (HAIR[c.hairStyle]) parts.push(HAIR[c.hairStyle]);
  if (c.beardStyle) parts.push(BEARDS[c.beardStyle] || `a ${c.beardStyle.replace(/_/g, ' ')}`);
  const cloth = CLOTHING[c.clothingType] || c.clothingType || 'garment';
  const mat = MATERIALS[c.materialStyle];
  parts.push(`wearing ${mat ? mat + ' ' : ''}${cloth}`);
  const cols = [];
  if (c.colorOuter) cols.push(c.colorOuter);
  if (c.colorInner && c.colorInner !== c.colorOuter) cols.push(c.colorInner);
  if (cols.length) parts.push(`in ${cols.join(' over ')}`);
  if (c.colorAccent) parts.push(`with ${c.colorAccent} accents`);
  return parts.join(', ');
}

/* ── Texture parsing ──────────────────────────────────────────── */

const TEX_KEYWORDS = {
  wheat_stalks: ['wheat', 'grain', 'field', 'winepress', 'harvest', 'bread', 'manna', 'stalk', 'crop', 'barley', 'meal', 'thresh'],
  rock_surface: ['rock', 'stone', 'mountain', 'sinai', 'altar', 'cave', 'cliff', 'nebo', 'carmel', 'tabor', 'wilderness', 'hill', 'mount', 'limestone', 'high'],
  wool_fleece: ['fleece', 'sheep', 'wool', 'lamb', 'ram', 'flock', 'shepherd', 'goat', 'herd'],
  water_ripple: ['water', 'river', 'sea', 'jordan', 'nile', 'rain', 'flood', 'brook', 'spring', 'well', 'deep', 'pool', 'kishon', 'drink', 'wash', 'swim'],
  water_still: ['water', 'river', 'sea', 'jordan', 'nile', 'rain', 'flood', 'brook', 'spring', 'well', 'pool', 'cistern', 'deep', 'drink', 'wash'],
  water_fast: ['water', 'river', 'sea', 'jordan', 'nile', 'storm', 'flood', 'torrent', 'brook', 'deep', 'ship', 'deck', 'wave', 'current'],
  clay_jar: ['jar', 'pot', 'clay', 'pitcher', 'vessel', 'cruse', 'flask', 'oil', 'bowl', 'cup', 'milk'],
  trumpet_horn: ['trumpet', 'horn', 'ram', 'shofar', 'blast', 'march', 'sound', 'call', 'blow'],
  torch_flame: ['torch', 'fire', 'flame', 'lamp', 'light', 'burning', 'furnace', 'ember', 'candle', 'bush', 'chariot', 'glow', 'smoke', 'blaze'],
  camel_hair: ['camel', 'desert', 'wilderness', 'caravan', 'beast', 'load'],
  tent_fabric: ['tent', 'camp', 'dwell', 'tabernacle', 'dwelling', 'goat-hair', 'blanket', 'cover', 'shelter'],
  sword_iron: ['sword', 'battle', 'war', 'army', 'chariot', 'fight', 'spear', 'weapon', 'soldier', 'goliath', 'campaign', 'siege', 'warrior', 'blade', 'iron', 'military', 'helmet', 'armor', 'scales'],
  stone: ['stone', 'rock', 'mountain', 'altar', 'temple', 'cave', 'cliff', 'tablet', 'wall', 'gate', 'limestone', 'pillar', 'stele'],
  brick: ['brick', 'tower', 'babel', 'build', 'wall', 'mud', 'city', 'kiln'],
  tar: ['tar', 'pitch', 'seal', 'ark', 'waterproof', 'caulk'],
  leaves: ['garden', 'tree', 'leaf', 'fig', 'olive', 'vine', 'branch', 'forest', 'grove', 'palm', 'shade', 'fruit'],
  grass: ['field', 'grass', 'glean', 'meadow', 'hill', 'pasture', 'terrace', 'slope', 'ground', 'bank'],
  fabric_weave: ['robe', 'cloth', 'garment', 'weave', 'linen', 'wool', 'cloak', 'veil', 'coat', 'tent', 'mantle', 'wrap', 'scarf', 'dress', 'apparel', 'clothing'],
  wood_oak: ['tree', 'oak', 'wood', 'forest', 'grove', 'branch', 'bush', 'plant', 'palm', 'timber', 'log', 'stump'],
  wood_dark: ['wood', 'timber', 'ark', 'beam', 'plank', 'build', 'cedar', 'deck'],
  egypt_mud_brick: ['brick', 'egypt', 'mud', 'pyramid', 'palace', 'wall', 'city', 'monument'],
  nile_reeds: ['reed', 'river', 'nile', 'bulrush', 'marsh', 'cattail', 'rush'],
  desert_sand: ['desert', 'sand', 'wilderness', 'dune', 'wander', 'dust', 'plain', 'expanse'],
  bulrush_basket: ['basket', 'bulrush', 'river', 'nile', 'child', 'infant'],
  hammered_gold: ['gold', 'crown', 'jewel', 'golden', 'idol', 'calf', 'statue', 'diadem', 'ring'],
  stone_tablets: ['tablet', 'stone', 'commandment', 'sinai', 'law', 'inscription'],
};

function mapTextureToScenes(tex, sceneNames, sceneDescs) {
  const kws = TEX_KEYWORDS[tex.key] || tex.key.split('_');
  const hits = [];
  sceneNames.forEach((n, i) => {
    const hay = (n + ' ' + (sceneDescs[i] || '')).toLowerCase();
    if (kws.some(k => hay.includes(k))) hits.push(n);
  });
  return hits.length ? hits : ['(general texture — all scenes)'];
}
function parseTextures(html) {
  const cfgMatch = html.match(/STORY_TEXTURE_CONFIG\s*=\s*(\{.*?\});/);
  if (!cfgMatch) return [];
  const cfg = JSON.parse(cfgMatch[1]);
  const lib = {};
  for (const m of html.matchAll(/^  (\w+):\s*\{\s*\n\s*label:'([^']+)',\s*group:'([^']+)'/gm)) {
    lib[m[1]] = { label: m[2], group: m[3] };
  }
  return cfg.keys.map(k => ({
    key: k,
    label: lib[k] ? lib[k].label : k.replace(/_/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase()),
    group: lib[k] ? lib[k].group : 'Material',
  }));
}

/* ── Main ─────────────────────────────────────────────────────── */

const TOOL_DOCS = {
  'character-designer': {
    name: 'Character Designer',
    path: 'character-designer/index.html',
    body: 'Browser-based character portrait generator. Open `character-designer/index.html` in any modern browser — it works from `file://`, no server needed.\n\n' +
      '- Choose a preset from the list (the story\'s characters, defined in `character_presets.js`).\n' +
      '- Adjust face, hair, beard, hat and clothing, and tune the palette.\n' +
      '- Export the portrait as SVG for use in the comic, or copy the preset JSON to add variants.\n' +
      '- Finished character assets live in `../assets/characters/` (one `.json` + one `.svg` per character).',
  },
  'shot-designer': {
    name: 'Shot Designer',
    path: 'shot-designer/index.html',
    body: '3D scene composer built on three.js. Open `shot-designer/index.html` in a browser.\n\n' +
      '- Pick a scene from the listbox — scenes are registered in `scenes/manifest.json`.\n' +
      '- Fly the camera, set keyframes, and build shot timelines with transitions and easing curves.\n' +
      '- Export stills (PNG .zip) or video (MP4 via WebCodecs), or export the scene as 3D JSON/JS.\n' +
      '- Scenes are ES modules in `scenes/` exporting `build(group)`; shared building blocks live in `scenes/lib/lowpoly.js`.\n' +
      '- Add a scene: write `scenes/<id>.js` following the existing files, then add an entry to `scenes/manifest.json`.',
  },
  'scene_designer': {
    name: 'Scene Designer',
    path: 'scene_designer.html',
    body: '2D scene staging app for laying out each scene before SVG export. Open `scene_designer.html` in a browser.\n\n' +
      '- The scene list and its one-line briefs live in the `data-scenes` attribute; full director notes are in the comment at the top of the file and in this README.\n' +
      '- App logic is shared across stories: `../../shared-tools/scene-designer.js`.\n' +
      '- Use it to position characters and props per scene, then export the staged scene.',
  },
  'texture-forge': {
    name: 'Texture Forge',
    path: 'texture-forge.html',
    body: 'Seamless SVG material generator. Open `texture-forge.html` in a browser.\n\n' +
      '- Generates the story\'s textures (listed in the Textures section below).\n' +
      '- Adjust pattern parameters per material, then export repeating SVG patterns.\n' +
      '- Textures feed the SVG scene backgrounds and foregrounds in `../assets/svg/`.\n' +
      '- The story\'s texture set is configured by `STORY_TEXTURE_CONFIG` at the top of the file.',
  },
};

let stats = { shot: 0, character: 0, readme: 0, skipped: [] };

for (const story of Object.keys(BRIEFS)) {
  const toolsDir = path.join(root, story, 'tools');
  if (!fs.existsSync(toolsDir)) { stats.skipped.push(story + ': no tools/'); continue; }
  const brief = BRIEFS[story];
  const sceneNames = brief.scenes.map(([n]) => n);

  /* 1. Shot designer: title + scene notes */
  const sdFile = path.join(toolsDir, 'shot-designer', 'index.html');
  if (fs.existsSync(sdFile)) {
    let html = fs.readFileSync(sdFile, 'utf8');
    // Replace any existing notes block so this script is re-runnable.
    html = html.replace(/<!--\n  SCENE DIRECTOR NOTES[\s\S]*?  -->\n/, '');
    html = html.replace(/<title>[^<]*<\/title>/, `<title>Shot Designer — ${story}</title>`);
    const lines = [
        `  SCENE DIRECTOR NOTES — ${story} (${brief.ref})`,
        `  ${brief.scenes.length} scenes. Descriptions follow the biblical account and give`,
        `  staging direction for the scene designer: setting, characters, key props,`,
        `  light and mood. Reference board for iconic biblical compositions: the`,
        `  "famous bible scenes" ideas board on Pinterest.`,
        '',
      ];
      brief.scenes.forEach(([name, desc], i) => {
        lines.push(`  ${i + 1}. ${name}`);
        lines.push(`     ${encodeComment(desc)}`);
        lines.push('');
      });
      html = html.replace(/(<title>[^<]*<\/title>\n)/, `$1<!--\n${lines.join('\n')}  -->\n`);
      fs.writeFileSync(sdFile, html);
      stats.shot++;
  }

  /* 2. Character designer: character notes comment */
  const cdFile = path.join(toolsDir, 'character-designer', 'index.html');
  const presetsFile = path.join(toolsDir, 'character-designer', 'character_presets.js');
  let characters = [];
  if (fs.existsSync(presetsFile)) {
    characters = parsePresets(fs.readFileSync(presetsFile, 'utf8'));
  }
  if (fs.existsSync(cdFile) && characters.length) {
    let html = fs.readFileSync(cdFile, 'utf8');
    // Replace any existing notes block so this script is re-runnable.
    html = html.replace(/<!--\n  CHARACTER DIRECTOR NOTES[\s\S]*?  -->\n/, '');
    const metaMatch = fs.readFileSync(presetsFile, 'utf8').match(/CHARACTER_PRESETS_META\s*=\s*\{[^}]*\}/);
      const defaultPreset = metaMatch ? (metaMatch[0].match(/"defaultPreset":\s*"([^"]+)"/) || [])[1] : characters[0].key;
      const lines = [
        `  CHARACTER DIRECTOR NOTES — ${story} (${brief.ref})`,
        `  ${characters.length} characters. Presets live in character_presets.js;`,
        `  generate and tune variants in this tool, then export SVG for the comic.`,
        `  Default preset: ${defaultPreset}.`,
        '',
      ];
      characters.forEach((c, i) => {
        lines.push(`  ${i + 1}. ${c.name} (${c.key})`);
        lines.push(`     ${encodeComment(describeCharacter(c))}.`);
        lines.push('');
      });
      html = html.replace(/(<title>[^<]*<\/title>\n)/, `$1<!--\n${lines.join('\n')}  -->\n`);
      fs.writeFileSync(cdFile, html);
      stats.character++;
  }

  /* 3. readme.md */
  const readmeFile = path.join(toolsDir, 'readme.md');
  {
    const md = [];
    md.push(`# ${story} — Creation Tools`);
    md.push('');
    md.push(`Asset-creation tools for the **${story}** story (${brief.ref}). Every tool is a`);
    md.push('standalone HTML file: open it in any modern browser — no server is required,');
    md.push('`file://` works. The tools are also linked in the story\'s credits footer');
    md.push('(`../index.html`), which the information modal surfaces as the credits panel.');
    md.push('');
    md.push('## Tools');
    md.push('');
    if (fs.existsSync(path.join(toolsDir, 'character-designer', 'index.html'))) {
      md.push(`### Character Designer — \`character-designer/index.html\``);
      md.push('');
      md.push(TOOL_DOCS['character-designer'].body);
      md.push('');
    }
    if (fs.existsSync(path.join(toolsDir, 'shot-designer', 'index.html'))) {
      md.push(`### Shot Designer — \`shot-designer/index.html\``);
      md.push('');
      md.push(TOOL_DOCS['shot-designer'].body);
      md.push('');
    }
    if (fs.existsSync(path.join(toolsDir, 'scene_designer.html'))) {
      md.push(`### Scene Designer — \`scene_designer.html\``);
      md.push('');
      md.push(TOOL_DOCS['scene_designer'].body);
      md.push('');
    }
    if (fs.existsSync(path.join(toolsDir, 'texture-forge.html'))) {
      md.push(`### Texture Forge — \`texture-forge.html\``);
      md.push('');
      md.push(TOOL_DOCS['texture-forge'].body);
      md.push('');
    }

    md.push('## Characters');
    md.push('');
    md.push(`These are the character notes from \`character-designer/index.html\`:`);
    md.push('');
    characters.forEach((c, i) => {
      md.push(`${i + 1}. **${c.name}** — ${describeCharacter(c)}.`);
    });
    md.push('');

    md.push('## Scenes');
    md.push('');
    md.push(`These are the scene notes from \`shot-designer/index.html\`${fs.existsSync(path.join(toolsDir, 'scene_designer.html')) ? ' and `scene_designer.html`' : ''}:`);
    md.push('');
    brief.scenes.forEach(([name, desc], i) => {
      md.push(`${i + 1}. **${name}** — ${desc}`);
      md.push('');
    });

    const texFile = path.join(toolsDir, 'texture-forge.html');
    if (fs.existsSync(texFile)) {
      const textures = parseTextures(fs.readFileSync(texFile, 'utf8'));
      md.push('## Textures');
      md.push('');
      md.push('Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):');
      md.push('');
      md.push('| Texture | Material | Used in scenes |');
      md.push('| --- | --- | --- |');
      const sceneDescs = brief.scenes.map(([, d]) => d);
      for (const t of textures) {
        const scenes = mapTextureToScenes(t, sceneNames, sceneDescs).join('; ');
        md.push(`| \`${t.key}\` | ${t.label} (${t.group}) | ${scenes} |`);
      }
      md.push('');
    }

    fs.writeFileSync(readmeFile, md.join('\n') + '\n');
    stats.readme++;
  }
}

console.log(`Scene notes added to ${stats.shot} shot-designer/index.html files.`);
console.log(`Character notes added to ${stats.character} character-designer/index.html files.`);
console.log(`readme.md written for ${stats.readme} tools folders.`);
if (stats.skipped.length) {
  console.log('\nSkipped:');
  stats.skipped.forEach(s => console.log('  ' + s));
}
