/**
 * add-shot-scenes.mjs
 * Gives every story a story-matched Shot Designer scene set:
 *
 *   scenes/<story>-kit.js        shared workspace + prop builders
 *   scenes/<story>-<act>.js      one low-poly scene per act
 *   scenes/<story>-<act>_hd.js   high-definition twin (sky dome + shadows)
 *   scenes/manifest.json         registers the demo Nile scenes + every act
 *
 * Each scene is generated from the act's own data: the mood-board
 * palette (bg gradient), the particle mode, and the staging prose
 * from the scene briefs. Moses is the reference: its ten hand-
 * authored act scenes are renamed to the board convention
 * (moses-<act>.js), registered in the manifest, and given
 * generated HD twins.
 *
 * Usage: node scripts/add-shot-scenes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { BRIEFS } from './add-scene-descriptions.mjs';

const root = process.cwd();

/* ═══════════════════════ act loading (mirrors add-mood-boards.mjs) ═══════════════════════ */

function slugify(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

/* Jonah's act data files are isometric game maps, each staging several
 * narrative beats. Canon gives the per-chapter games; scenes.json gives
 * each map's palette and ambient effect. */
const JONAH_MAPS = [
    { id: 'ship_map', name: 'The Ship at Sea', file: 'act1_ship_map.json', briefs: [0, 1] },
    { id: 'whale_map', name: 'The Great Fish', file: 'act2_whale_map.json', briefs: [2, 3] },
    { id: 'nineveh_map', name: 'The City of Nineveh', file: 'act3_nineveh_map.json', briefs: [4, 5, 6] },
    { id: 'figtree_map', name: 'The Plant and the Lesson', file: 'act4_figtree_map.json', briefs: [7, 8] },
];

function loadActs(story, dataDir) {
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
        return acts.map(a => {
            const m = (a.file || '').match(/^act(\d)/);
            const n = m ? parseInt(m[1], 10) : 0;
            return {
                ...a,
                assetFolder: a.assetFolder || `act_${String(n).padStart(2, '0')}_${a.id}`,
                assetStem: a.assetStem || `${story.toLowerCase()}_${n}`,
            };
        });
    }
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
                particle: 'dawn',
                bg: '',
                gameTitle: ch.game,
                game: ch.engine,
                lines: [],
            };
        });
    }
    return null;
}

/* ═══════════════════════ palette + lighting tables ═══════════════════════ */

function hexes(bg) {
    return [...(bg || '').matchAll(/#[0-9a-fA-F]{3,8}/g)].map(m => m[0]);
}

function shade(hex, f) {
    const full = String(hex).replace(/^#|^0x/gi, '');
    const v = full.length === 3 ? full.split('').map(c => c + c).join('') : full;
    const n = parseInt(v, 16);
    const r = Math.min(255, Math.max(0, Math.round(((n >> 16) & 255) * f)));
    const g = Math.min(255, Math.max(0, Math.round(((n >> 8) & 255) * f)));
    const b = Math.min(255, Math.max(0, Math.round((n & 255) * f)));
    return `0x${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

const LIGHTING = {
    dawn:   { sky: 0x9ab4d0, gnd: 0x5a5a52, hemi: 0.75, sun: 0xffd9a0, sunI: 0.95, sunPos: [-45, 16, 26], fogNear: 55, fogFar: 220 },
    dusk:   { sky: 0x7a5a8c, gnd: 0x3a2a1a, hemi: 0.60, sun: 0xff9a50, sunI: 0.85, sunPos: [45, 12, -18], fogNear: 50, fogFar: 200 },
    ember:  { sky: 0x3a2418, gnd: 0x1a0e08, hemi: 0.40, sun: 0xff7a30, sunI: 0.70, sunPos: [20, 26, 30], fogNear: 45, fogFar: 180 },
    storm:  { sky: 0x4a5a6c, gnd: 0x2a3238, hemi: 0.55, sun: 0xa8bcc8, sunI: 0.60, sunPos: [-30, 40, 20], fogNear: 40, fogFar: 160 },
    deep:   { sky: 0x1a4a5e, gnd: 0x0a2a3a, hemi: 0.50, sun: 0x5ab8d0, sunI: 0.70, sunPos: [10, 50, 10], fogNear: 35, fogFar: 150 },
    golden: { sky: 0xc8a868, gnd: 0x8a6a3a, hemi: 0.70, sun: 0xffe0a0, sunI: 1.05, sunPos: [-35, 30, 20], fogNear: 70, fogFar: 280 },
    midday: { sky: 0xbfd8e8, gnd: 0x9a8a6a, hemi: 0.85, sun: 0xfff5e0, sunI: 1.10, sunPos: [-20, 60, 30], fogNear: 80, fogFar: 300 },
};

const SKYMODE = {
    dawn:   { top: 0x4a6a9a, mid: 0xa8c4dc, horizon: 0xffd9a0, sun: 0xfff2cf },
    dusk:   { top: 0x2a2a4a, mid: 0x7a5a8c, horizon: 0xff9a50, sun: 0xffcf8a },
    ember:  { top: 0x1a120c, mid: 0x3a2418, horizon: 0x8a4a20, sun: 0xff9a40 },
    storm:  { top: 0x2a3442, mid: 0x5a6a7c, horizon: 0x8a9aa8, sun: 0xc8d4dc },
    deep:   { top: 0x06202e, mid: 0x0e4a5e, horizon: 0x2a8aa8, sun: 0xbfe8f0 },
    golden: { top: 0x6a8ab8, mid: 0xd8c49a, horizon: 0xf0d8a0, sun: 0xfff0c0 },
    midday: { top: 0x3a7ab8, mid: 0x8fc0e0, horizon: 0xe8f0f4, sun: 0xfff8e8 },
};

/* ═══════════════════════ element + hero detection ═══════════════════════ */

const ELEMENTS = [
    ['water', /\b(river|sea|water|flood|jordan|stream|brook|kishon|tigris|euphrates|galilee|ebro|nile)\b/i],
    ['reeds', /\b(reed|bulrush|papyrus|marsh)\b/i],
    ['palms', /\b(palm)\b/i],
    ['trees', /\b(tree|wood|forest|oak|terebinth|fig|sycamore|olive|cedar|juniper|elm|poplar|willow|grove)\b/i],
    ['hills', /\b(mountain|hill|ridge|peak|sinai|nebo|gerizim|ebal|zion|carmel|horeb|moriah|ararat|tabor|gilboa|seir)\b/i],
    ['city', /\b(city|town|wall|gate|street|nineveh|jerusalem|jericho|bethel|ramah|bethlehem|ur\b|haran|babylon|thebes|memphis|sodom|gomorrah|gath|ekron|ashdod|gaza|beersheba|hebron|megiddo|harosheth)\b/i],
    ['temple', /\b(temple|tabernacle|sanctuary|holy of|ark of|shrine)\b/i],
    ['palace', /\b(throne|palace|court|king|queen|royal|pharaoh|herod|esther|vizer|haman)\b/i],
    ['tents', /\b(tent|camp|dwell|encamp|caravan|nomad)\b/i],
    ['fire', /\b(fire|flame|burning|bush|ember|pyre)\b/i],
    ['storm', /\b(rain|storm|thunder|lightning|tempest|cloud|hurricane)\b/i],
    ['boat', /\b(ship|boat|vessel|tarshish|joppa|galley|prow|sail|oar|fisherman)\b/i],
    ['ark', /\b(ark)\b/i],
    ['whale', /\b(whale|great fish|leviathan|sea monster|dogfish)\b/i],
    ['sheep', /\b(sheep|flock|lamb|goat|herd|cattle|shepherd|ram\b|ewe)\b/i],
    ['wheat', /\b(wheat|grain|harvest|field|barley|corn|stalk|thresh|bread|manna)\b/i],
    ['vineyard', /\b(vineyard|vine|grape|winepress|wine)\b/i],
    ['garden', /\b(garden|eden|gilead|orchard)\b/i],
    ['well', /\b(well|spring)\b/i],
    ['serpent', /\b(serpent|snake|viper|adder)\b/i],
    ['scroll', /\b(scroll|roll of|book of|book)\b/i],
    ['tablets', /\b(tablet|two stones|commandment)\b/i],
    ['lion', /\b(lion|lioness)\b/i],
    ['jar', /\b(jar|pot|pitcher|cruse|oil|flask)\b/i],
    ['horn', /\b(horn|trumpet|shofar|cornet)\b/i],
    ['crown', /\b(crown|tiara|diadem)\b/i],
    ['cup', /\b(cup|chalice|goblet|bowl)\b/i],
    ['chariot', /\b(chariot|wheel|horse|rider|cavalry)\b/i],
    ['army', /\b(army|battle|soldier|war|shield|spear|sword|weapon|warrior|host|phalanx)\b/i],
    ['house', /\b(house|chamber|room|door|rooftop|floor|upper room|inn)\b/i],
    ['figures', /\b(man|woman|prophet|girl|boy|child|figure|sister|mother|father|priest|judge|servant|maid|angel|miriam|barak|jael|sisera|david|goliath|samson|ruth|naomi|esther|mordecai|vashti|job|eliphaz|jonah|joseph|pharaoh|jacob|esau|isaac|rebecca|leah|rachel|laban|jose|benjamin|abraham|sarai|nehemiah|ezra|isaiah|jeremiah|ezekiel|daniel|hosea|amos|joel|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi)\b/i],
    ['crowd', /\b(crowd|people|multitude|israelites|egyptians|throng|gathering|tribes|congregation)\b/i],
    ['gold', /\b(gold|silver|treasure|wealth|plunder|spoils)\b/i],
    ['smoke', /\b(smoke|mist|fog|vapor)\b/i],
];

const HEROES = [
    ['tablets', /\b(tablet|commandment|two stones)\b/i],
    ['serpent', /\b(serpent|snake)\b/i],
    ['calf', /\b(calf|bull|idol)\b/i],
    ['lion', /\b(lion)\b/i],
    ['whale', /\b(whale|great fish)\b/i],
    ['ark', /\b(ark)\b/i],
    ['basket', /\b(basket|bulrush)\b/i],
    ['scroll', /\b(scroll)\b/i],
    ['crown', /\b(crown|tiara)\b/i],
    ['cup', /\b(cup|goblet|chalice)\b/i],
    ['jar', /\b(jar|cruse|pitcher)\b/i],
    ['horn', /\b(horn|trumpet|shofar)\b/i],
    ['chariot', /\b(chariot)\b/i],
    ['throne', /\b(throne)\b/i],
    ['altar', /\b(altar)\b/i],
    ['staff', /\b(staff|rod|scepter)\b/i],
    ['sword', /\b(sword|scythe)\b/i],
    ['grapes', /\b(grape|cluster)\b/i],
    ['manna', /\b(manna)\b/i],
    ['bread', /\b(bread|loaf)\b/i],
    ['pillar', /\b(pillar|standing stone|stone)\b/i],
    ['fire', /\b(fire|flame|burning)\b/i],
    ['well', /\b(well)\b/i],
    ['gate', /\b(gate)\b/i],
    ['mountain', /\b(mountain)\b/i],
    ['tree', /\b(tree|oak|fig|olive)\b/i],
    ['water', /\b(river|sea|water)\b/i],
    ['boat', /\b(ship|boat)\b/i],
    ['sheep', /\b(sheep|lamb)\b/i],
    ['tent', /\b(tent)\b/i],
    ['house', /\b(house|home)\b/i],
    ['city', /\b(city|walls)\b/i],
];

function detect(list, text) {
    const hits = [];
    for (const [tag, re] of list) if (re.test(text) && !hits.includes(tag)) hits.push(tag);
    return hits;
}

/* ═══════════════════════ extended kit builders ═══════════════════════ */

/* Appended to every story kit. Written in the moses-kit.js style:
 * W workspace API, cached materials/geometry, deterministic W.r(). */
const EXTRA_BUILDERS = `
/* ═════════════════════════════ story props ═════════════════════════════ */

/** Animated water plane, depth-graded from deep to shallow. */
export function water(W, parent, w, d, y, deep, shallow) {
    const geo = new THREE.PlaneGeometry(w, d, 28, 10);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const deepC = new THREE.Color(deep), shalC = new THREE.Color(shallow);
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
        const t = Math.min(1, Math.abs(pos.getZ(i)) / (d / 2));
        c.copy(deepC).lerp(shalC, t);
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        vertexColors: true, flatShading: true, roughness: 0.35, metalness: 0.15
    }));
    mesh.position.set(0, y, 0);
    mesh.name = 'water';
    (parent || W.group).add(mesh);
    const base = Float32Array.from(pos.array);
    W.anim(t => {
        for (let i = 0; i < pos.count; i++) {
            pos.setY(i, Math.sin(base[i * 3] * 0.35 + t * 1.2) * 0.12 + Math.cos(base[i * 3 + 2] * 0.8 + t) * 0.08);
        }
        pos.needsUpdate = true;
    });
    return mesh;
}

/** Conifer for wooded slopes. */
export function tree(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, W.r() * 6, 0], name: 'tree' });
    W.add(g, W.G('cyl', 0.16, 0.3, 2.2, 5), W.mat(o.trunk ?? 0x4a3320), [0, 1.1, 0]);
    W.add(g, W.G('cone', 1.5, 3.2, 6), W.mat(o.leaf ?? 0x2f5a24), [0, 3.4, 0]);
    W.add(g, W.G('cone', 1.1, 2.4, 6), W.mat(o.leaf2 ?? 0x3a6b2c), [0, 5.0, 0]);
    return g;
}

/** Broadleaf — oak, terebinth, fig. */
export function oak(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, W.r() * 6, 0], name: 'oak' });
    W.add(g, W.G('cyl', 0.22, 0.38, 2.6, 6), W.mat(o.trunk ?? 0x4a3320), [0, 1.3, 0]);
    for (let i = 0; i < 3; i++) {
        W.add(g, W.G('ico', 1, 1), W.mat(i % 2 ? (o.leaf ?? 0x4f7a2e) : (o.leaf2 ?? 0x5f8a36)),
            [W.rr(-0.8, 0.8), 3.2 + W.rr(0, 0.8), W.rr(-0.8, 0.8)], { s: W.rr(1.0, 1.6) });
    }
    return g;
}

/** Boat: cambered hull, mast, sail, oars. */
export function boat(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'boat' });
    const hull = W.mat(o.wood ?? 0x6b4a2c);
    W.add(g, W.G('box', 6.4, 0.7, 2.2), hull, [0, 0.5, 0]);
    W.add(g, W.G('box', 5.2, 0.5, 1.6), W.mat(o.woodDark ?? 0x4a321e), [0, 0.95, 0]);
    W.add(g, W.G('cone', 0.9, 2.2, 4), hull, [3.6, 0.8, 0], { r: [0, 0, -Math.PI / 2] });
    W.add(g, W.G('cone', 0.8, 1.8, 4), hull, [-3.5, 0.75, 0], { r: [0, 0, Math.PI / 2] });
    if (o.sail !== false) {
        W.add(g, W.G('cyl', 0.09, 0.12, 5.4, 5), W.mat(0x5a3c22), [0.4, 3.4, 0]);
        const sail = W.add(g, W.G('plane', 3.6, 3.2), W.mat(o.sail ?? 0xf0e6d0, { side: true }), [0.4, 3.6, 0.05]);
        W.anim(t => { sail.rotation.y = Math.sin(t * 0.7) * 0.08; sail.rotation.z = Math.sin(t * 0.5) * 0.04; });
    }
    for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
        W.add(g, W.G('cyl', 0.05, 0.07, 2.6, 4), hull, [-1.4 + i * 1.4, 0.9, side * 1.35], { r: [0.9, 0, side * 0.5] });
    }
    return g;
}

/** The Ark: long hull, two decks, roof ridge, decking posts. */
export function ark(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'ark' });
    const wood = W.mat(o.wood ?? 0x6a4a2c), dark = W.mat(o.woodDark ?? 0x4a321e);
    W.add(g, W.G('box', 16, 3, 5), dark, [0, 1.5, 0]);
    W.add(g, W.G('box', 15, 2.6, 4.4), wood, [0, 4.3, 0]);
    W.add(g, W.G('box', 16.4, 0.6, 5.4), wood, [0, 5.8, 0]);
    W.add(g, W.G('cone', 3.2, 2.4, 4), dark, [0, 7.2, 0], { r: [0, Math.PI / 4, 0], s: [3.2, 1, 1] });
    for (const sx of [-1, 1]) for (let i = 0; i < 4; i++) {
        W.add(g, W.G('box', 0.12, 1.6, 0.12), dark, [sx * 7.6, 6.6, -1.8 + i * 1.2]);
    }
    W.add(g, W.G('cone', 2.2, 4, 4), dark, [8.8, 2.4, 0], { r: [0, 0, -Math.PI / 2] });
    W.add(g, W.G('cone', 2.0, 3.4, 4), dark, [-8.6, 2.2, 0], { r: [0, 0, Math.PI / 2] });
    return g;
}

/** The great fish: body, flukes, head, spout that breathes. */
export function whale(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'whale' });
    const skin = W.mat(o.skin ?? 0x1c3a4a);
    W.add(g, W.G('sph', 1, 8, 6), skin, [0, 0, 0], { s: [3.2, 1.5, 1.3] });
    W.add(g, W.G('cone', 1.1, 2.6, 5), skin, [-3.6, 0.1, 0], { r: [0, 0, Math.PI / 2] });
    W.add(g, W.G('sph', 0.5, 6, 5), skin, [2.9, 0.25, 0], { s: [0.9, 0.7, 0.8] });
    W.add(g, W.G('sph', 0.12, 5, 4), W.basic(0xd8e8e8, 0.9), [3.5, 0.45, 0.3]);
    W.add(g, W.G('sph', 0.12, 5, 4), W.basic(0xd8e8e8, 0.9), [3.5, 0.45, -0.3]);
    if (o.spout !== false) {
        const spout = W.grp(g, [2.6, 1.1, 0], { name: 'spout' });
        for (let i = 0; i < 5; i++) {
            W.add(spout, W.G('sph', 0.14, 4, 3), W.mat(0xc8dce4, { opacity: 0.7 }),
                [W.rr(-0.4, 0.4), W.rr(0.2, 1.2), W.rr(-0.4, 0.4)]);
        }
        W.anim(t => {
            spout.position.y = 1.1 + Math.max(0, Math.sin(t * 0.8)) * 0.6;
            spout.children.forEach((c, i) => c.scale.setScalar(0.6 + 0.5 * Math.max(0, Math.sin(t * 0.8 - i * 0.3))));
        });
    }
    W.anim(t => { g.position.y = y + Math.sin(t * 0.5) * 0.25; g.rotation.z = Math.sin(t * 0.4) * 0.03; });
    return g;
}

/** City gate with flanking towers, roof cones and wall wings. */
export function cityGate(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'city_gate' });
    const stone = W.mat(o.stone ?? 0xc8b088), trim = W.mat(o.trim ?? 0x8a7050), roof = W.mat(o.roof ?? 0xa8502a);
    for (const sx of [-1, 1]) {
        W.add(g, W.G('box', 5, 15, 5), stone, [sx * 5.5, 7.5, 0]);
        W.add(g, W.G('box', 5.6, 0.8, 5.6), trim, [sx * 5.5, 15.4, 0]);
        W.add(g, W.G('cone', 4.2, 3.4, 4), roof, [sx * 5.5, 18.4, 0], { r: [0, Math.PI / 4, 0] });
    }
    W.add(g, W.G('box', 1.6, 9, 1.6), trim, [-1.8, 4.5, 0]);
    W.add(g, W.G('box', 1.6, 9, 1.6), trim, [1.8, 4.5, 0]);
    W.add(g, W.G('box', 5.4, 1.8, 1.8), stone, [0, 9.8, 0]);
    W.add(g, W.G('box', 2.2, 8.6, 1.2), W.mat(0x14100c), [0, 4.3, -0.2]);
    for (const sx of [-1, 1]) {
        W.add(g, W.G('box', 22, 9, 2.6), stone, [sx * 17, 4.5, -1]);
        W.add(g, W.G('box', 22.4, 0.7, 3), trim, [sx * 17, 9.4, -1]);
    }
    return g;
}

/** Mud-brick house with flat roof, door and shutter. */
export function house(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'house' });
    const mud = W.mat(o.mud ?? 0xc2a071), dark = W.mat(0x3a2a1a), wood = W.mat(0x6a4a2c);
    W.add(g, W.G('box', 6, 3.2, 4.5), mud, [0, 1.6, 0]);
    W.add(g, W.G('box', 6.6, 0.4, 5.1), W.mat(o.roof ?? 0xa8875c), [0, 3.4, 0]);
    W.add(g, W.G('box', 1.1, 1.9, 0.15), dark, [0.8, 0.95, 2.26]);
    W.add(g, W.G('box', 0.9, 0.7, 0.1), wood, [-1.4, 2.2, 2.26]);
    W.add(g, W.G('cyl', 0.14, 0.18, 0.8, 5), dark, [-0.2, 3.9, 1.6]);
    return g;
}

/** Temple front: stepped base, colonnade, architrave, glowing doorway. */
export function temple(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'temple' });
    const stone = W.mat(o.stone ?? 0xe0d0a8), trim = W.mat(o.trim ?? 0x2a8f94);
    W.add(g, W.G('box', 26, 1.2, 12), W.mat(o.base ?? 0xc8b890), [0, 0.6, 0]);
    for (let i = -2; i <= 2; i++) {
        column(W, g, i * 5, 1.2, 3.5, 7.5, 1.15, stone, { band: trim });
        column(W, g, i * 5, 1.2, -3.5, 7.5, 1.15, stone, { band: trim });
    }
    W.add(g, W.G('box', 14, 4.5, 8), stone, [0, 9.5, -1]);
    W.add(g, W.G('box', 14.6, 0.7, 8.6), trim, [0, 12.1, -1]);
    W.add(g, W.G('box', 5, 1.6, 1.2), W.basic(0xffc860, 0.9), [0, 8.2, 3.6]);
    return g;
}

/** Stepped stone altar, with fire by default. */
export function altar(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, name: 'altar' });
    const stone = W.mat(o.stone ?? 0xb8b0a0);
    W.add(g, W.G('box', 3.4, 0.5, 3.4), stone, [0, 0.25, 0]);
    W.add(g, W.G('box', 2.6, 0.5, 2.6), stone, [0, 0.75, 0]);
    W.add(g, W.G('box', 1.9, 0.9, 1.9), W.mat(o.top ?? 0xa8a090), [0, 1.45, 0]);
    if (o.fire !== false) {
        flame(W, g, 0, 1.9, 0, 0.7);
        W.point(0xff8a30, 1.6, 30, 0, 3, 0, 0.3);
    }
    return g;
}

/** Throne on three steps, gold trim and finial. */
export function throne(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'throne' });
    const gold = W.mat(o.gold ?? 0xe0b040, { metal: 0.55, rough: 0.35 });
    const stone = W.mat(o.stone ?? 0xc8b088);
    for (let i = 0; i < 3; i++) W.add(g, W.G('box', 6 - i * 1.4, 0.5, 4 - i), stone, [0, 0.25 + i * 0.5, -i * 0.8]);
    W.add(g, W.G('box', 1.6, 1.1, 1.4), gold, [0, 2.3, -1.6]);
    W.add(g, W.G('box', 1.6, 2.2, 0.3), gold, [0, 3.4, -2.2]);
    W.add(g, W.G('sph', 0.35, 6, 5), gold, [0, 4.7, -2.2]);
    for (const sx of [-1, 1]) {
        W.add(g, W.G('cyl', 0.12, 0.12, 1.8, 5), gold, [sx * 1.0, 3.2, -1.4]);
        W.add(g, W.G('sph', 0.2, 5, 4), gold, [sx * 1.0, 4.2, -1.4]);
    }
    return g;
}

/** Stone well with two posts and a little roof. */
export function well(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, name: 'well' });
    const stone = W.mat(o.stone ?? 0x9a9284);
    W.add(g, W.G('cyl', 0.9, 1.0, 1.1, 8), stone, [0, 0.55, 0]);
    W.add(g, W.G('cyl', 0.7, 0.7, 0.2, 8), W.mat(0x14202a), [0, 1.05, 0]);
    for (const sx of [-1, 1]) W.add(g, W.G('cyl', 0.08, 0.1, 2.6, 5), W.mat(0x5a3c22), [sx * 1.0, 2.2, 0]);
    W.add(g, W.G('cone', 1.6, 1.2, 4), W.mat(o.roof ?? 0x8a4a3a), [0, 3.8, 0], { r: [0, Math.PI / 4, 0] });
    return g;
}

/** Bronze serpent coiled on a pole, eyes lit. */
export function serpent(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, name: 'serpent' });
    const bronze = W.mat(o.bronze ?? 0xb07030, { metal: 0.55, rough: 0.4 });
    W.add(g, W.G('cyl', 0.12, 0.16, 6.5, 5), W.mat(0x6a4a28), [0, 3.25, 0]);
    const coil = W.grp(g, [0, 6.2, 0], { name: 'serpent_body' });
    for (let i = 0; i < 3; i++) {
        W.add(coil, W.G('tor', 0.55 - i * 0.12, 0.16, 4, 10), bronze, [0, i * 0.3, 0], { r: [Math.PI / 2, 0, 0] });
    }
    W.add(coil, W.G('sph', 0.22, 6, 5), bronze, [0, 1.1, 0.1]);
    W.add(coil, W.G('sph', 0.08, 4, 3), W.basic(0xd0e040, 1, false), [0.1, 1.16, 0.28]);
    W.add(coil, W.G('sph', 0.08, 4, 3), W.basic(0xd0e040, 1, false), [-0.1, 1.16, 0.28]);
    W.anim(t => { coil.rotation.y = Math.sin(t * 0.8) * 0.15; });
    return g;
}

/** Wheat field: rows of stalks with heavy heads. */
export function wheat(W, parent, cx, cz, n, spread, o = {}) {
    const g = W.grp(parent, [cx, 0, cz], { name: 'wheat' });
    const stalk = W.mat(o.stalk ?? 0xc8b060), head = W.mat(o.head ?? 0xd8c078);
    for (let i = 0; i < n; i++) {
        const x = (W.r() - 0.5) * spread, z = (W.r() - 0.5) * spread;
        const h = (o.h ?? 2.0) * (0.7 + W.r() * 0.5);
        const lean = [(W.r() - 0.5) * 0.15, 0, (W.r() - 0.5) * 0.15];
        W.add(g, W.G('cyl', 0.03, 0.05, h, 4), stalk, [x, h / 2, z], { r: lean });
        W.add(g, W.G('cone', 0.09, 0.5, 5), head, [x - lean[0] * h, h + 0.15, z - lean[2] * h], { r: lean });
    }
    return g;
}

/** Vineyard: posts, leaf canopies, hanging grape clusters. */
export function vineyard(W, parent, cx, cz, n, spread, o = {}) {
    const g = W.grp(parent, [cx, 0, cz], { name: 'vineyard' });
    const post = W.mat(0x5a3c22), leaf = W.mat(o.leaf ?? 0x4f7a2e);
    for (let i = 0; i < n; i++) {
        const x = (W.r() - 0.5) * spread, z = (W.r() - 0.5) * spread * 0.6;
        W.add(g, W.G('cyl', 0.09, 0.11, 1.6, 5), post, [x, 0.8, z]);
        W.add(g, W.G('ico', 0.8, 1), leaf, [x, 1.9, z], { s: [1.3, 0.8, 1.3] });
        if (W.r() < 0.6) {
            const cl = W.grp(g, [x + W.rr(-0.5, 0.5), 1.5, z + W.rr(-0.4, 0.4)], { s: 0.7 });
            for (let b = 0; b < 5; b++) W.add(cl, W.G('sph', 0.16, 4, 3), W.mat(o.berry ?? 0x5a2a6a), [W.rr(-0.2, 0.2), -b * 0.22, W.rr(-0.1, 0.1)]);
        }
    }
    return g;
}

/** Slow circling birds, excluded from camera framing. */
export function birds(W, parent, n, radius, o = {}) {
    const g = W.grp(parent, [0, 0, 0], { name: 'birds' });
    const mat = W.basic(o.color ?? 0x2a2a2a, 1, false);
    for (let i = 0; i < n; i++) {
        const bird = W.grp(g, [0, 0, 0], { name: 'bird' });
        W.add(bird, W.G('cone', 0.28, 1.1, 4), mat, [0, 0, 0], { r: [0, 0, Math.PI / 2] });
        W.add(bird, W.G('cone', 0.18, 0.7, 4), mat, [0.3, 0, 0], { r: [0, 0, -Math.PI / 2] });
        const a = (i / n) * Math.PI * 2;
        const ph = W.r() * 10;
        W.anim(t => {
            const aa = a + t * (o.speed ?? 0.15);
            bird.position.set(Math.cos(aa) * radius, (o.y ?? 26) + Math.sin(t * 0.7 + ph) * 2.5, Math.sin(aa) * radius * 0.7 - 20);
            bird.rotation.y = -aa;
        });
    }
    W.backdrop(g);
    return g;
}

/** Vertical rain curtain, animated falling. */
export function rain(W, parent, count, w, h, speed) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * w;
        pos[i * 3 + 1] = Math.random() * h;
        pos[i * 3 + 2] = (Math.random() - 0.5) * w * 0.7;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(geo, new THREE.PointsMaterial({
        color: 0xc8d8e4, size: 0.14, transparent: true, opacity: 0.6, fog: false
    }));
    (parent || W.group).add(points);
    W.anim(t => {
        const p = geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
            let y = p.getY(i) - speed * 0.016;
            if (y < 0) y += h;
            p.setY(i, y);
        }
        p.needsUpdate = true;
    });
    return points;
}

/** Rank of soldiers with shields and spears. */
export function army(W, parent, cx, cz, n, o = {}) {
    const g = W.grp(parent, [cx, 0, cz], { name: 'army' });
    const shields = o.shields ?? [0x8a3a2a, 0x5a4a8a, 0x8a7a2a, 0x3a5a8a];
    for (let i = 0; i < n; i++) {
        const x = (W.r() - 0.5) * (o.w ?? 40), z = (W.r() - 0.5) * (o.d ?? 14);
        const f = person(W, g, [x, 0, z], {
            simple: true,
            robe: W.pick(o.robes ?? [0x6a5a4a, 0x5a4a3a, 0x7a6a5a]),
            skin: W.pick([0xc68e5a, 0xb07a48, 0xd8a070]),
            s: (o.s ?? 1) * (0.9 + W.r() * 0.2),
            ry: (o.ry ?? 0) + (W.r() - 0.5) * 0.4,
            staff: W.r() < 0.7 ? 'held' : undefined
        });
        if (W.r() < 0.8) {
            W.add(f, W.G('cyl', 0.55, 0.55, 0.12, 8), W.mat(W.pick(shields)), [0.75, 1.6, 0.1], { r: [0, 0, 0.9] });
        }
    }
    return g;
}

/** Chariot: cab, gold trim, spoked wheels, pole. */
export function chariot(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'chariot' });
    const wood = W.mat(o.wood ?? 0x6a4a2c), gold = W.mat(o.gold ?? 0xc8963a, { metal: 0.5, rough: 0.4 });
    W.add(g, W.G('box', 2.6, 1.1, 1.7), wood, [0, 1.35, 0]);
    W.add(g, W.G('box', 2.7, 0.25, 1.8), gold, [0, 1.95, 0]);
    W.add(g, W.G('box', 0.15, 1.3, 1.7), wood, [1.35, 1.35, 0]);
    W.add(g, W.G('box', 2.8, 0.15, 1.9), gold, [0, 0.85, 0]);
    for (const sx of [-1, 1]) {
        const wheel = W.grp(g, [sx * 1.15, 0.75, 0], { name: 'wheel' });
        W.add(wheel, W.G('tor', 0.75, 0.12, 4, 10), wood, [0, 0, 0], { r: [0, Math.PI / 2, 0] });
        for (let i = 0; i < 4; i++) {
            W.add(wheel, W.G('cyl', 0.06, 0.06, 1.4, 4), wood, [0, 0, 0], { r: [(i * Math.PI) / 4, 0, 0] });
        }
    }
    W.add(g, W.G('cyl', 0.07, 0.09, 3.4, 5), wood, [-2.2, 1.1, 0], { r: [0, 0, 1.25] });
    return g;
}

/** Lion: body, mane, muzzle, tail tuft. */
export function lion(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'lion' });
    const body = W.mat(o.coat ?? 0xb8924a), mane = W.mat(o.mane ?? 0x6a4a20);
    W.add(g, W.G('box', 3.0, 1.3, 1.4), body, [0, 1.35, 0]);
    W.add(g, W.G('sph', 0.85, 7, 6), body, [1.9, 1.85, 0]);
    W.add(g, W.G('ico', 1, 1), mane, [1.7, 1.95, 0], { s: [1.15, 1.15, 1.05] });
    W.add(g, W.G('cone', 0.28, 0.5, 4), mane, [2.5, 2.35, 0.35], { r: [0, 0, -0.4] });
    W.add(g, W.G('cone', 0.28, 0.5, 4), mane, [2.5, 2.35, -0.35], { r: [0, 0, -0.4] });
    for (const [lx, lz] of [[0.9, 0.5], [0.9, -0.5], [-0.9, 0.5], [-0.9, -0.5]]) {
        W.add(g, W.G('cyl', 0.22, 0.18, 1.1, 5), body, [lx, 0.55, lz]);
    }
    const tail = W.add(g, W.G('cyl', 0.07, 0.09, 1.8, 4), body, [-1.7, 1.9, 0], { r: [0, 0, 1.1] });
    W.add(tail, W.G('sph', 0.18, 5, 4), mane, [0, -1.0, 0]);
    return g;
}

/** The two tablets, inscribed, leaning together. */
export function tablets(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'tablets' });
    const stone = W.mat(o.stone ?? 0xb8b0a0);
    W.add(g, W.G('box', 1.7, 2.4, 0.28), stone, [-0.55, 1.2, 0], { r: [0, 0, 0.08] });
    W.add(g, W.G('box', 1.7, 2.4, 0.28), stone, [0.55, 1.2, 0], { r: [0, 0, -0.06] });
    const dark = W.mat(0x4a4438);
    for (const sx of [-0.55, 0.55]) for (let i = 0; i < 4; i++) {
        W.add(g, W.G('box', 0.9, 0.1, 0.05), dark, [sx, 0.6 + i * 0.45, 0.16]);
    }
    return g;
}

/** Scroll, half unrolled. */
export function scroll(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'scroll' });
    const parch = W.mat(o.paper ?? 0xe0d0a0), wood = W.mat(0x5a3c22);
    W.add(g, W.G('cyl', 0.28, 0.28, 2.2, 6), parch, [0, 0, 0], { r: [0, 0, Math.PI / 2] });
    W.add(g, W.G('cyl', 0.1, 0.1, 2.6, 5), wood, [0, 0.12, 0], { r: [0, 0, Math.PI / 2] });
    W.add(g, W.G('cyl', 0.1, 0.1, 2.6, 5), wood, [0, -0.12, 0], { r: [0, 0, Math.PI / 2] });
    return g;
}

/** Storage jar. */
export function jar(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'jar' });
    const clay = W.mat(o.clay ?? 0xa87040);
    W.add(g, W.G('sph', 1, 8, 6), clay, [0, 1.1, 0], { s: [1.0, 1.25, 1.0] });
    W.add(g, W.G('cyl', 0.42, 0.55, 0.7, 7), clay, [0, 2.35, 0]);
    W.add(g, W.G('tor', 0.5, 0.08, 4, 10), W.mat(o.trim ?? 0x6a4a28), [0, 2.0, 0], { r: [Math.PI / 2, 0, 0] });
    return g;
}

/** Ram's horn / trumpet. */
export function horn(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'horn' });
    const c = W.mat(o.color ?? 0xc8a058);
    const base = W.grp(g, [0, 0, 0], { r: [0, 0, 0.9] });
    W.add(base, W.G('cone', 0.22, 1.6, 6), c, [0.8, 0, 0], { r: [0, 0, -Math.PI / 2] });
    W.add(base, W.G('cone', 0.14, 0.9, 6), c, [1.7, 0.35, 0], { r: [0, 0, -Math.PI / 2.6] });
    W.add(base, W.G('sph', 0.1, 5, 4), c, [2.0, 0.62, 0]);
    return g;
}

/** Manna: small white rounds strewn on the ground. */
export function manna(W, parent, cx, cz, n, spread, o = {}) {
    const g = W.grp(parent, [cx, (o.y ?? 0.05), cz], { name: 'manna' });
    const m = W.mat(o.color ?? 0xf0ece0, { rough: 0.6 });
    for (let i = 0; i < n; i++) {
        W.add(g, W.G('sph', 0.12, 5, 4), m, [(W.r() - 0.5) * spread, 0, (W.r() - 0.5) * spread], { s: [1, 0.6, 1] });
    }
    return g;
}

/** Grape cluster on the vine. */
export function grapes(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'grapes' });
    const berry = W.mat(o.berry ?? 0x5a2a6a), leaf = W.mat(o.leaf ?? 0x4f8a2e);
    for (let r = 0; r < 4; r++) for (let i = 0; i < 4 - r * 0.5; i++) {
        W.add(g, W.G('sph', 0.22, 5, 4), berry, [(i - 1.5) * 0.4 + (r % 2) * 0.2, -r * 0.38, (r % 2) * 0.15 - 0.1]);
    }
    W.add(g, W.G('cyl', 0.05, 0.07, 0.8, 4), leaf, [0, 0.9, 0]);
    W.add(g, W.G('sph', 0.4, 6, 5), leaf, [0, 0.3, 0], { s: [1.4, 0.5, 1] });
    return g;
}

/** Crown with a lit gem. */
export function crown(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'crown' });
    const gold = W.mat(o.gold ?? 0xe0b040, { metal: 0.6, rough: 0.35 });
    W.add(g, W.G('cyl', 0.7, 0.78, 0.5, 8), gold, [0, 0.25, 0]);
    for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        W.add(g, W.G('cone', 0.12, 0.5, 4), gold, [Math.cos(a) * 0.7, 0.7, Math.sin(a) * 0.7]);
    }
    W.add(g, W.G('sph', 0.16, 5, 4), W.mat(o.gem ?? 0xc04040, { emissive: 0x802020, ei: 0.4 }), [0, 0.3, 0.72]);
    return g;
}

/** Golden cup. */
export function cup(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'cup' });
    const gold = W.mat(o.gold ?? 0xe0b040, { metal: 0.6, rough: 0.3 });
    W.add(g, W.G('cyl', 0.34, 0.2, 0.5, 8), gold, [0, 0.35, 0]);
    W.add(g, W.G('cyl', 0.1, 0.14, 0.35, 6), gold, [0, 0.1, 0]);
    W.add(g, W.G('sph', 0.3, 8, 5), gold, [0, 0.68, 0], { s: [1, 0.35, 1] });
    return g;
}

/** Woven basket (pitch-dark interior, banded rim). */
export function basket(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, o.ry ?? 0, 0], name: 'basket' });
    const reed = W.mat(o.reed ?? 0x9a7a3a);
    W.add(g, W.G('sph', 1, 8, 5), reed, [0, 0.4, 0], { s: [1.3, 0.75, 1.0] });
    W.add(g, W.G('sph', 1, 8, 5), W.mat(0x2e2214), [0, 0.62, 0], { s: [1.1, 0.35, 0.85] });
    for (let i = 0; i < 4; i++) {
        W.add(g, W.G('tor', 1.3 - i * 0.16, 0.045, 4, 14), W.mat(0x6a5020), [0, 0.12 + i * 0.16, 0], { r: [Math.PI / 2, 0, 0], s: [1, 0.78, 1] });
    }
    return g;
}

/** Standing stone (massebah). */
export function pillar(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, name: 'pillar' });
    const stone = W.mat(o.stone ?? 0xa8a090);
    W.add(g, W.G('box', 1.6, 0.6, 1.6), W.mat(o.base ?? 0x8a8272), [0, 0.3, 0]);
    W.add(g, W.G('box', 1.1, 4.4, 1.1), stone, [0, 2.8, 0], { r: [0, W.r() * 0.6, 0] });
    return g;
}

/** Stone-ringed fire pit. */
export function firepit(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, name: 'firepit' });
    for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        rock(W, g, Math.cos(a) * 0.9, 0.1, Math.sin(a) * 0.9, 0.35, W.pick([0x6a5e4c, 0x5e5342]));
    }
    flame(W, g, 0, 0.1, 0, o.s ?? 0.9);
    return g;
}
`;

export { EXTRA_BUILDERS, loadActs, slugify, hexes, shade, LIGHTING, SKYMODE, ELEMENTS, HEROES, detect };
