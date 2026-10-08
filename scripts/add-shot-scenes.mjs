/**
 * add-shot-scenes.mjs
 * Generates the story-matched Shot Designer scenes for every story:
 *   scenes/<story>-kit.js, scenes/<story>-<act>.js,
 *   scenes/<story>-<act>_hd.js and a fresh scenes/manifest.json.
 *
 * Moses is the reference implementation: its ten hand-authored act
 * scenes (act01_… act10_) are renamed to the board convention
 * (moses-<act>.js), registered in the manifest, and given HD twins.
 *
 * Usage: node scripts/add-shot-scenes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { EXTRA_BUILDERS, loadActs, slugify, hexes, shade, LIGHTING, SKYMODE, ELEMENTS, HEROES, detect } from './shot-scenes.mjs';
import { BRIEFS } from './add-scene-descriptions.mjs';

const root = process.cwd();

/* ═══════════════════════ helpers ═══════════════════════ */

function mulberry(seed) {
    let a = seed >>> 0;
    return () => {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

const hexNum = n => '0x' + n.toString(16);

/** Strip characters that would break the generated file's comment block. */
function clean(s) {
    return String(s || '').replace(/\*\//g, '* /').replace(/`/g, "'").trim();
}

/* ═══════════════════════ per-act context ═══════════════════════ */

function makeCtx(story, act, brief, i) {
    const lower = story.toLowerCase();
    const sceneId = `${lower}-${act.id.replace(/_/g, '-')}`;
    const staging = (brief ? brief[1] : '').replace(/\s+/g, ' ');
    const nameLine = (brief ? brief[0] : act.name);

    // detection pool: scene name + staging prose + narrator lines + game
    const pool = [nameLine, staging, act.gameTitle || '', act.name || ''].join(' ') + ' ' +
        (act.lines || []).map(l => l.text || '').join(' ');

    const elements = detect(ELEMENTS, pool);
    const heroTag = (detect(HEROES, pool)[0]) || 'pillar';

    const hx = hexes(act.bg);
    const toNum = h => `0x${String(h).replace(/^#|^0x/gi, '')}`;
    const bg = toNum(hx[0] || '#d8b878');
    const bg2 = toNum(hx[1] || shade('#d8b878', 0.72));
    const ground = toNum(hx[hx.length - 1] || shade('#d8b878', 0.55));
    const mode = act.particle || 'dawn';
    const light = LIGHTING[mode] || LIGHTING.dawn;
    const sky = SKYMODE[mode] || SKYMODE.dawn;

    const seed = hashStr(story + ':' + act.id);
    const rng = mulberry(seed);

    // robes: the act palette plus earthy defaults
    const robes = [bg, bg2, ground, '#8a6a44', '#6a4a30', '#c8b088', '#5a4a6a', '#7a3a2a']
        .map(c => toNum(c)).filter((c, idx, arr) => arr.indexOf(c) === idx).slice(0, 6);

    // greens for foliage: default olive, tinted by a greenish ground
    const gIsGreen = /^(#|0x)([2-6][0-9a-f])([5-9a-f][0-9a-f])/i.test(ground);
    const leafA = gIsGreen ? ground : '0x4f8a2e';
    const leafB = gIsGreen ? shade(ground, 1.25) : '0x5fa036';

    // figure poses from the staging prose
    const posePool = staging.toLowerCase();
    let pose = { bend: 0, armR: null, armL: null };
    if (/\b(pray|prayed|prayer|supplicat|worship|bowed|prostrate)\b/.test(posePool)) pose = { bend: 0.12, armR: [2.5, 0.35], armL: [0.3, 0.1] };
    else if (/\b(kneel|kneeling|fall|fell|fallen)\b/.test(posePool)) pose = { bend: 0.55, armR: [-0.4, 0.2], armL: [-0.3, -0.2] };
    else if (/\b(walk|walked|walking|march|crossing|flee|fled|running|run)\b/.test(posePool)) pose = { bend: 0.2, armR: [0.35, 0.1], armL: [-0.35, -0.1] };
    else if (/\b(sleep|sleeping|slumber)\b/.test(posePool)) pose = { bend: 0.85, armR: [-0.2, 0.1], armL: [-0.2, -0.1] };
    else if (/\b(sit|sitting|seated|sits)\b/.test(posePool)) pose = { bend: 1.05, armR: [0.2, 0.1], armL: [0.2, -0.1] };
    else if (/\b(stand|standing|stands|watch|watching)\b/.test(posePool)) pose = { bend: 0.02, armR: null, armL: null };

    // headgear / props from the cast
    let head = 'hair', beard = null, staff = null, robe = null, collar = null;
    if (/\b(king|queen|pharaoh|royal|crown|throne|esther|herod|haman|mordecai|vashti|david|saul|herod)\b/.test(pool.toLowerCase())) {
        head = 'crown'; robe = toNum('#e8dcc0'); collar = toNum('#e0b040');
    } else if (/\b(prophet|judge|priest|shepherd|ezekiel|isaiah|jeremiah|elisha|elijah|moses|samuel|deborah|nehemiah)\b/.test(pool.toLowerCase())) {
        head = 'wrap'; beard = 'long'; staff = rng() < 0.7 ? 'planted' : null; robe = toNum('#8a6a44');
    } else if (/\b(shepherd|sheep|flock)\b/.test(pool.toLowerCase())) {
        staff = 'planted'; head = 'wrap';
    }

    return {
        story, lower, act, brief, i, sceneId, nameLine, staging, pool,
        elements, heroTag, bg, bg2, ground, mode, light, sky, seed, rng,
        robes, leafA, leafB, pose, head, beard, staff, robe, collar,
    };
}

/* ═══════════════════════ code sections ═══════════════════════ */

/* Each section returns { lines: [], uses: [] } — code lines and the
 * kit builders they call, so the import line stays exact. */

function skySection(ctx) {
    const L = [];
    const m = ctx.mode;
    if (m === 'dawn') {
        L.push(`    W.disc([-58, 30, -145], 9, 0xffd9a0);`);
        L.push(`    W.disc([-58, 30, -155], 16, 0xffb060, 0.22);`);
        L.push(`    W.stars(60, 150, [0xcfd8e8, 0xbfd0e0], 0.55);`);
        L.push(`    const clouds = W.grp(group, [0, 0, 0], { name: 'cloud_bank' });`);
        L.push(`    [[-60, 34, -120, 24], [10, 40, -135, 30], [70, 33, -125, 22]].forEach(([x, y, z, s]) => {`);
        L.push(`        W.add(clouds, W.G('ico', 1, 1), W.mat(0xd8c8b8, { opacity: 0.5 }), [x, y, z], { s: [s, s * 0.24, s * 0.5] });`);
        L.push(`    });`);
        L.push(`    W.backdrop(clouds);`);
    } else if (m === 'dusk') {
        L.push(`    W.disc([55, 22, -140], 12, 0xff9a50);`);
        L.push(`    W.disc([55, 22, -150], 20, 0xff7a30, 0.18);`);
        L.push(`    W.stars(30, 150, [0xd8c8e8, 0xc8b8d8], 0.5);`);
        L.push(`    W.disc([-60, 40, -150], 30, 0x4a3a5c, 0.25);`);
    } else if (m === 'ember') {
        L.push(`    W.stars(90, 150, [0xf0e0c8, 0xd8c0a0], 0.7);`);
        L.push(`    W.disc([0, 34, -150], 14, 0xff8a30, 0.12);`);
    } else if (m === 'storm') {
        L.push(`    const clouds = W.grp(group, [0, 0, 0], { name: 'storm_clouds' });`);
        L.push(`    [[-50, 36, -110, 34], [0, 44, -130, 40], [55, 38, -115, 30], [-95, 40, -120, 28]].forEach(([x, y, z, s]) => {`);
        L.push(`        W.add(clouds, W.G('ico', 1, 1), W.mat(0x2a3238, { opacity: 0.9 }), [x, y, z], { s: [s, s * 0.3, s * 0.6] });`);
        L.push(`    });`);
        L.push(`    W.backdrop(clouds);`);
        L.push(`    W.point(0xbfd4f0, 4.0, 220, ${ctx.rng() < 0.5 ? '-' : ''}${10 + Math.floor(ctx.rng() * 20)}, 30, -40, 0.85);  // lightning flicker`);
    } else if (m === 'deep') {
        L.push(`    W.disc([0, 60, -140], 40, 0x2a8aa8, 0.3);`);
        L.push(`    for (let i = 0; i < 5; i++) {`);
        L.push(`        W.add(group, W.G('plane', 3, 60), W.mat(0x9ad8e8, { opacity: 0.08, side: true }), [${'W.rr(-25, 25)'}, 25, W.rr(-25, 10)], { r: [0, 0, W.rr(-0.3, 0.3)] });`);
        L.push(`    }`);
        L.push(`    const bubbles = W.grp(group, [0, 0, 0], { name: 'bubbles' });`);
        L.push(`    for (let i = 0; i < 40; i++) {`);
        L.push(`        const b = W.add(bubbles, W.G('sph', 0.12, 4, 3), W.mat(0xc8e8f0, { opacity: 0.4 }), [W.rr(-30, 30), W.rr(0, 20), W.rr(-30, 30)]);`);
        L.push(`        const sp = 0.3 + W.r() * 0.5, y0 = W.r() * 20;`);
        L.push(`        W.anim(t => { b.position.y = (y0 + t * sp) % 22; });`);
        L.push(`    }`);
    } else if (m === 'golden') {
        L.push(`    W.disc([-40, 55, -150], 11, 0xfff0c0);`);
        L.push(`    W.disc([-40, 55, -158], 18, 0xffe0a0, 0.15);`);
        L.push(`    W.disc([70, 30, -140], 26, 0xd8b878, 0.18);`);
    } else { // midday
        L.push(`    W.disc([-30, 70, -150], 10, 0xfff8e8);`);
        L.push(`    const clouds = W.grp(group, [0, 0, 0], { name: 'cloud_bank' });`);
        L.push(`    [[-40, 44, -125, 26], [30, 50, -135, 32], [85, 42, -120, 22]].forEach(([x, y, z, s]) => {`);
        L.push(`        W.add(clouds, W.G('ico', 1, 1), W.mat(0xf0f4f8, { opacity: 0.75 }), [x, y, z], { s: [s, s * 0.22, s * 0.5] });`);
        L.push(`    });`);
        L.push(`    W.backdrop(clouds);`);
    }
    return { lines: L, uses: [] };
}

function groundSection(ctx) {
    const L = [];
    const hasWater = ctx.elements.includes('water');
    if (hasWater) {
        L.push(`    /* river: animated water between grassy banks */`);
        L.push(`    water(W, group, 260, 26, -0.4, ${shade(ctx.ground, 0.35)}, ${shade(ctx.bg2, 1.15)});`);
        L.push(`    W.ground(260, 95, 0, 60, ${ctx.ground}, { amp: 0.5, j: 0.3, flat: 24, fz: 54 });`);
        L.push(`    W.ground(260, 95, 0, -64, ${shade(ctx.ground, 0.85)}, { amp: 0.6, j: 0.3, flat: 24, fz: -58 });`);
        L.push(`    W.add(group, W.G('box', 260, 0.3, 4), W.mat(${shade(ctx.ground, 0.55)}), [0, -0.05, 12.6]);`);
        L.push(`    W.add(group, W.G('box', 260, 0.3, 4), W.mat(${shade(ctx.ground, 0.55)}), [0, -0.05, -14.6]);`);
    } else {
        L.push(`    /* ground */`);
        L.push(`    W.ground(260, 260, 0, 0, ${ctx.ground}, { amp: 0.6, j: 0.3, flat: 30, rise: (x, z) => Math.sin(x * 0.05) * Math.cos(z * 0.04) * 1.2 });`);
    }
    return { lines: L, uses: hasWater ? ['water'] : [] };
}

function hillsSection(ctx) {
    if (!ctx.elements.includes('hills') && ctx.heroTag !== 'mountain') return null;
    const L = [];
    L.push(`    /* hills: angular ridges on the horizon */`);
    L.push(`    const hills = W.grp(group, [0, 0, 0], { name: 'hills' });`);
    L.push(`    for (let i = 0; i < 9; i++) {`);
    L.push(`        const x = -130 + i * 32 + W.rr(-8, 8);`);
    L.push(`        W.add(hills, W.G('cone', W.rr(14, 28), W.rr(10, 24), 5), W.mat(${shade(ctx.ground, 0.75)}), [x, 0, -95 - W.rr(0, 25)], { r: [0, W.r() * 3, 0] });`);
    L.push(`    }`);
    L.push(`    W.backdrop(hills);`);
    if (ctx.heroTag === 'mountain') {
        L.push(`    /* hero: the mountain */`);
        L.push(`    const peak = W.grp(group, [0, 0, -45], { name: 'peak' });`);
        L.push(`    W.add(peak, W.G('cone', 36, 52, 6), W.mat(${shade(ctx.ground, 0.9)}), [0, 26, 0]);`);
        L.push(`    W.add(peak, W.G('cone', 13, 18, 5), W.mat(${ctx.bg}, { opacity: 0.92 }), [0, 58, 0]);`);
        L.push(`    if (${ctx.mode === 'ember' || ctx.mode === 'storm'}) { flame(W, peak, 0, 50, 0, 1.6); }`);
        L.push(`    W.backdrop(peak);`);
    }
    return { lines: L, uses: [] };
}

function citySection(ctx) {
    if (!ctx.elements.includes('city') || ctx.heroTag === 'city') return null;
    const L = [];
    L.push(`    /* city: gate, towers and houses on the far side */`);
    L.push(`    const city = W.grp(group, [${ctx.rng() < 0.5 ? '-' : ''}${8 + Math.floor(ctx.rng() * 14)}, 0, -58], { name: 'city', r: [0, ${(ctx.rng() * 0.4 - 0.2).toFixed(2)}, 0] });`);
    L.push(`    cityGate(W, city, 0, 0, 0, 1.15, { stone: ${shade(ctx.bg2, 1.05)}, trim: ${shade(ctx.ground, 0.8)} });`);
    L.push(`    for (let i = 0; i < 5; i++) {`);
    L.push(`        house(W, city, -34 + i * 17 + W.rr(-4, 4), 0, W.rr(-14, 6), 0.85 + W.r() * 0.4, { mud: ${shade(ctx.bg2, 0.95)} });`);
    L.push(`    }`);
    L.push(`    W.backdrop(city);`);
    return { lines: L, uses: ['cityGate', 'house'] };
}

function templeSection(ctx) {
    if (!ctx.elements.includes('temple')) return null;
    const L = [];
    L.push(`    /* temple: colonnade and glowing doorway */`);
    L.push(`    const templeG = W.grp(group, [0, 0, -46], { name: 'temple', r: [0, ${(ctx.rng() * 0.3 - 0.15).toFixed(2)}, 0] });`);
    L.push(`    temple(W, templeG, 0, 0, 0, 1.1, { stone: ${shade(ctx.bg2, 1.1)}, trim: ${shade(ctx.bg, 0.7)} });`);
    L.push(`    W.backdrop(templeG);`);
    return { lines: L, uses: ['temple', 'column'] };
}

function palaceSection(ctx) {
    if (!ctx.elements.includes('palace') || ctx.elements.includes('temple')) return null;
    const L = [];
    L.push(`    /* palace: columns, banners and the throne */`);
    L.push(`    for (let i = -2; i <= 2; i++) column(W, group, i * 8, 0, -30, 11, 1.3, ${shade(ctx.bg2, 1.08)}, { band: ${shade(ctx.bg, 0.75)} });`);
    L.push(`    throne(W, group, 0, 0, -24, 1.4, { gold: ${shade(ctx.bg, 0.65)} });`);
    return { lines: L, uses: ['column', 'throne'] };
}

function houseSection(ctx) {
    if (!ctx.elements.includes('house') || ctx.elements.includes('city')) return null;
    const L = [];
    L.push(`    /* house: mud-brick walls, flat roof, door */`);
    L.push(`    house(W, group, ${ctx.rng() < 0.5 ? '-' : ''}${10 + Math.floor(ctx.rng() * 10)}, 0, ${-14 - Math.floor(ctx.rng() * 8)}, 1.0 + W.r() * 0.3, { mud: ${shade(ctx.bg2, 0.95)} });`);
    if (ctx.rng() < 0.6) {
        L.push(`    house(W, group, ${ctx.rng() < 0.5 ? '-' : ''}${18 + Math.floor(ctx.rng() * 12)}, 0, ${-8 - Math.floor(ctx.rng() * 10)}, 0.8 + W.r() * 0.3, { mud: ${shade(ctx.bg2, 1.0)} });`);
    }
    return { lines: L, uses: ['house'] };
}

function tentsSection(ctx) {
    if (!ctx.elements.includes('tents')) return null;
    const n = 3 + Math.floor(ctx.rng() * 3);
    const L = [];
    const uses = ['tent'];
    L.push(`    /* camp: a circle of tents${ctx.elements.includes('fire') || ctx.mode === 'dusk' || ctx.mode === 'ember' ? ', smoke rising' : ''} */`);
    for (let i = 0; i < n; i++) {
        L.push(`    tent(W, group, ${(ctx.rng() * 60 - 30).toFixed(1)}, 0, ${(ctx.rng() * 26 - 26).toFixed(1)}, ${(0.9 + ctx.rng() * 0.5).toFixed(2)}, ${['0xc8b088', '0xa8704a', '0x8a6a44', '0xd8c8a0'][Math.floor(ctx.rng() * 4)]}, W.r() * 6);`);
    }
    if (ctx.elements.includes('fire') || ctx.mode === 'dusk' || ctx.mode === 'ember') {
        L.push(`    firepit(W, group, ${(ctx.rng() * 20 - 10).toFixed(1)}, 0, ${(ctx.rng() * 16 - 8).toFixed(1)}, 1.0);`);
        uses.push('firepit');
    }
    return { lines: L, uses };
}

function treesSection(ctx) {
    const tags = ctx.elements.filter(t => t === 'palms' || t === 'trees' || t === 'garden');
    if (!tags.length) return null;
    const L = [];
    if (ctx.elements.includes('palms')) {
        const n = 4 + Math.floor(ctx.rng() * 4);
        L.push(`    /* palms: dappled shade at the scene's edge */`);
        for (let i = 0; i < n; i++) {
            L.push(`    palm(W, group, ${(ctx.rng() * 180 - 90).toFixed(1)}, 0, ${(ctx.rng() * 80 - 70).toFixed(1)}, ${(0.9 + ctx.rng() * 0.6).toFixed(2)}, { leafA: ${ctx.leafA}, leafB: ${ctx.leafB} });`);
        }
    }
    if (ctx.elements.includes('trees') || ctx.elements.includes('garden')) {
        const n = 3 + Math.floor(ctx.rng() * 3);
        L.push(`    /* trees: broadleaf shade */`);
        for (let i = 0; i < n; i++) {
            L.push(`    oak(W, group, ${(ctx.rng() * 160 - 80).toFixed(1)}, 0, ${(ctx.rng() * 70 - 60).toFixed(1)}, ${(0.9 + ctx.rng() * 0.5).toFixed(2)}, { leaf: ${ctx.leafA}, leaf2: ${ctx.leafB} });`);
        }
        if (ctx.elements.includes('garden')) {
            L.push(`    tree(W, group, ${(ctx.rng() * 60 - 30).toFixed(1)}, 0, ${(ctx.rng() * 30 - 20).toFixed(1)}, 1.1);`);
        }
    }
    return { lines: L, uses: [...(ctx.elements.includes('palms') ? ['palm'] : []), ...(ctx.elements.includes('trees') || ctx.elements.includes('garden') ? ['oak'] : []), ...(ctx.elements.includes('garden') ? ['tree'] : [])] };
}

function fieldSection(ctx) {
    const L = [];
    const uses = [];
    if (ctx.elements.includes('wheat')) {
        L.push(`    /* fields: standing grain to the horizon */`);
        L.push(`    wheat(W, group, 0, 34, 220, 110, { h: 2.1, stalk: ${shade(ctx.bg, 1.1)}, head: ${shade(ctx.bg, 1.25)} });`);
        uses.push('wheat');
    }
    if (ctx.elements.includes('vineyard')) {
        L.push(`    /* vineyard: posts, canopies, hanging fruit */`);
        L.push(`    vineyard(W, group, 0, 30, 40, 80, { leaf: ${ctx.leafA}, berry: ${shade(ctx.bg, 0.7)} });`);
        uses.push('vineyard');
    }
    if (ctx.elements.includes('garden') && !uses.length) {
        L.push(`    /* garden: shade trees around a well */`);
        L.push(`    well(W, group, ${(ctx.rng() * 16 - 8).toFixed(1)}, 0, ${(ctx.rng() * 10 - 2).toFixed(1)}, 1.1);`);
        uses.push('well');
    }
    return uses.length ? { lines: L, uses } : null;
}

function stormSection(ctx) {
    if (!ctx.elements.includes('storm')) return null;
    const L = [];
    L.push(`    /* storm: rain sheets across the whole frame */`);
    L.push(`    rain(W, group, 900, 230, 65, 16);`);
    return { lines: L, uses: ['rain'] };
}

function fireSection(ctx) {
    if (!ctx.elements.includes('fire') || ctx.heroTag === 'fire') return null;
    const L = [];
    L.push(`    /* fire: the burning mark */`);
    L.push(`    flame(W, group, ${(ctx.rng() * 24 - 12).toFixed(1)}, 0, ${(ctx.rng() * 16 - 8).toFixed(1)}, 1.1);`);
    L.push(`    W.point(0xff8a30, 2.0, 55, 0, 3, 0, 0.35);`);
    return { lines: L, uses: ['flame'] };
}

function vesselSection(ctx) {
    const L = [];
    const uses = [];
    if (ctx.elements.includes('ark') && ctx.heroTag !== 'ark') {
        L.push(`    /* the ark riding the flood */`);
        L.push(`    ark(W, group, 0, 0.2, 0, 1.0, { ry: 0.25 });`);
        uses.push('ark');
    } else if (ctx.elements.includes('boat') && ctx.heroTag !== 'boat') {
        L.push(`    /* boat: hull, sail and oars */`);
        L.push(`    boat(W, group, ${(ctx.rng() * 10 - 5).toFixed(1)}, 0, ${(ctx.rng() * 6 - 3).toFixed(1)}, 1.05, { ry: ${(ctx.rng() * 1.2 - 0.6).toFixed(2)} });`);
        uses.push('boat');
    }
    if (ctx.elements.includes('whale') && ctx.heroTag !== 'whale') {
        L.push(`    /* the great fish */`);
        L.push(`    whale(W, group, ${(ctx.rng() * 12 - 6).toFixed(1)}, 0.2, ${(ctx.rng() * 8 - 4).toFixed(1)}, 1.15, { ry: ${(ctx.rng() * 1.2 - 0.6).toFixed(2)} });`);
        uses.push('whale');
    }
    return uses.length ? { lines: L, uses } : null;
}

function flockSection(ctx) {
    const L = [];
    const uses = [];
    if (ctx.elements.includes('sheep') && ctx.heroTag !== 'sheep') {
        const n = 4 + Math.floor(ctx.rng() * 4);
        L.push(`    /* flock: sheep grazing */`);
        for (let i = 0; i < n; i++) {
            L.push(`    sheep(W, group, ${(ctx.rng() * 36 - 18).toFixed(1)}, 0, ${(ctx.rng() * 24 - 12).toFixed(1)}, W.r() * 6, ${(0.8 + ctx.rng() * 0.4).toFixed(2)});`);
        }
        uses.push('sheep');
    }
    if (ctx.elements.includes('army')) {
        const n = 6 + Math.floor(ctx.rng() * 6);
        L.push(`    /* army: shields and spears in rank */`);
        L.push(`    army(W, group, ${(ctx.rng() * 30 - 15).toFixed(1)}, ${(20 + ctx.rng() * 10).toFixed(1)}, ${n}, { shields: [${shade(ctx.bg, 0.65)}, ${shade(ctx.ground, 0.9)}, 0x8a7a2a, 0x3a5a8a] });`);
        uses.push('army');
    }
    if (ctx.elements.includes('chariot') && ctx.heroTag !== 'chariot') {
        L.push(`    /* chariot: gold-trimmed cab and spoked wheels */`);
        L.push(`    chariot(W, group, ${(ctx.rng() * 20 - 10).toFixed(1)}, 0, ${(ctx.rng() * 14 - 7).toFixed(1)}, 1.1, { ry: ${(ctx.rng() * 1.2 - 0.6).toFixed(2)}, gold: ${shade(ctx.bg, 0.6)} });`);
        uses.push('chariot');
    }
    if (ctx.elements.includes('lion') && ctx.heroTag !== 'lion') {
        L.push(`    /* lion: the danger in the scene */`);
        L.push(`    lion(W, group, ${(ctx.rng() * 20 - 10).toFixed(1)}, 0, ${(ctx.rng() * 14 - 7).toFixed(1)}, 1.1, { ry: ${(ctx.rng() * 1.5 - 0.75).toFixed(2)} });`);
        uses.push('lion');
    }
    if (ctx.elements.includes('serpent') && ctx.heroTag !== 'serpent') {
        L.push(`    /* serpent: coiled and watchful */`);
        L.push(`    serpent(W, group, ${(ctx.rng() * 20 - 10).toFixed(1)}, 0, ${(ctx.rng() * 14 - 7).toFixed(1)}, 1.1);`);
        uses.push('serpent');
    }
    return uses.length ? { lines: L, uses } : null;
}

function propsSection(ctx) {
    const L = [];
    const uses = [];
    const put = (builder, opts) => {
        L.push(`    ${builder}(W, group, ${(ctx.rng() * 24 - 12).toFixed(1)}, 0, ${(ctx.rng() * 16 - 8).toFixed(1)}, ${opts || ''});`);
        uses.push(builder);
    };
    if (ctx.elements.includes('scroll') && ctx.heroTag !== 'scroll') put('scroll');
    if (ctx.elements.includes('jar') && ctx.heroTag !== 'jar') put('jar');
    if (ctx.elements.includes('horn') && ctx.heroTag !== 'horn') put('horn');
    if (ctx.elements.includes('crown') && ctx.heroTag !== 'crown') put('crown');
    if (ctx.elements.includes('cup') && ctx.heroTag !== 'cup') put('cup');
    if (ctx.elements.includes('well') && ctx.heroTag !== 'well') put('well');
    if (ctx.elements.includes('tablets') && ctx.heroTag !== 'tablets') put('tablets', '1.0');
    if (ctx.elements.includes('grapes')) { put('grapes'); uses.push('grapes'); }
    if (ctx.elements.includes('gold')) {
        L.push(`    /* gold: glints of treasure in the dust */`);
        L.push(`    for (let i = 0; i < 14; i++) W.add(group, W.G('oct', 0.14), W.mat(0xe8c050, { metal: 0.6, rough: 0.3, emissive: 0x4a3008, ei: 0.3 }), [W.rr(-20, 20), 0.1, W.rr(-14, 14)], { s: [1, 0.5, 1] });`);
    }
    if (ctx.elements.includes('smoke')) {
        L.push(`    /* smoke: slow drifts above the action */`);
        L.push(`    const smoke = W.grp(group, [0, 0, 0], { name: 'smoke' });`);
        L.push(`    for (let i = 0; i < 8; i++) {`);
        L.push(`        const s = W.add(smoke, W.G('ico', 1, 1), W.mat(${shade(ctx.bg, 0.8)}, { opacity: 0.28 }), [W.rr(-14, 14), W.rr(4, 14), W.rr(-12, 6)], { s: W.rr(2, 5) });`);
        L.push(`        const ph = W.r() * 10;`);
        L.push(`        W.anim(t => { s.position.y = 4 + ((t * 0.6 + ph) % 12); s.scale.setScalar(2 + ((t * 0.6 + ph) % 12) * 0.35); });`);
        L.push(`    }`);
    }
    if (ctx.elements.includes('reeds') && !ctx.elements.includes('water')) {
        const n = 3 + Math.floor(ctx.rng() * 3);
        L.push(`    /* reeds: a fringe along the near ground */`);
        for (let i = 0; i < n; i++) {
            L.push(`    reeds(W, group, ${(ctx.rng() * 60 - 30).toFixed(1)}, ${(8 + ctx.rng() * 10).toFixed(1)}, ${8 + Math.floor(ctx.rng() * 8)}, 7, { h: 3.6, heads: 0.5 });`);
        }
        uses.push('reeds');
    }
    return uses.length ? { lines: L, uses } : null;
}

function heroSection(ctx) {
    // hero sits at centre stage; on water scenes it moves to the near bank
    const hz = ctx.elements.includes('water') && !['boat', 'whale', 'ark'].includes(ctx.heroTag) ? 11 : 0;
    const hx = 0;
    const glow = shade(ctx.bg, 1.3);
    const L = [];
    const uses = [];
    const hero = ctx.heroTag;

    if (hero === 'tablets') {
        L.push(`    /* hero: the two tablets of stone */`);
        L.push(`    tablets(W, group, ${hx}, 0, ${hz}, 1.15, { ry: 0.4, stone: ${shade(ctx.bg2, 1.1)} });`);
        L.push(`    W.disc([${hx}, 6, ${hz - 14}], 6, ${glow}, 0.3);`);
        uses.push('tablets');
    } else if (hero === 'serpent') {
        L.push(`    /* hero: the bronze serpent */`);
        L.push(`    serpent(W, group, ${hx}, 0, ${hz}, 1.25);`);
        L.push(`    W.disc([${hx}, 7, ${hz - 14}], 5, ${glow}, 0.3);`);
        uses.push('serpent');
    } else if (hero === 'calf') {
        L.push(`    /* hero: the golden calf */`);
        L.push(`    const calf = W.grp(group, [${hx}, 0, ${hz}], { name: 'calf', r: [0, 0.5, 0] });`);
        L.push(`    const gold = W.mat(0xe0b040, { metal: 0.6, rough: 0.3, emissive: 0x4a3008, ei: 0.35 });`);
        L.push(`    W.add(calf, W.G('box', 2.2, 1.2, 1.0), gold, [0, 1.5, 0]);`);
        L.push(`    W.add(calf, W.G('sph', 0.55, 6, 5), gold, [1.5, 2.3, 0]);`);
        L.push(`    W.add(calf, W.G('cone', 0.12, 0.5, 4), gold, [1.9, 2.9, 0.25], { r: [0, 0, -0.5] });`);
        L.push(`    W.add(calf, W.G('cone', 0.12, 0.5, 4), gold, [1.9, 2.9, -0.25], { r: [0, 0, -0.5] });`);
        L.push(`    for (const [lx, lz] of [[0.7, 0.35], [0.7, -0.35], [-0.7, 0.35], [-0.7, -0.35]]) {`);
        L.push(`        W.add(calf, W.G('cyl', 0.16, 0.13, 1.2, 5), gold, [lx, 0.6, lz]);`);
        L.push(`    }`);
        L.push(`    W.add(calf, W.G('cyl', 0.06, 0.09, 2.2, 4), gold, [-1.2, 2.6, 0], { r: [0, 0, 1.0] });`);
        L.push(`    W.point(0xffc860, 1.8, 45, ${hx}, 3, ${hz}, 0.25);`);
        uses.push('flame');
    } else if (hero === 'lion') {
        L.push(`    /* hero: the lion */`);
        L.push(`    lion(W, group, ${hx}, 0, ${hz}, 1.35, { ry: 0.4 });`);
        L.push(`    W.disc([${hx}, 5, ${hz - 12}], 6, ${glow}, 0.3);`);
        uses.push('lion');
    } else if (hero === 'whale') {
        L.push(`    /* hero: the great fish */`);
        L.push(`    whale(W, group, ${hx}, 0.2, ${hz}, 1.3, { ry: 0.35 });`);
        uses.push('whale');
    } else if (hero === 'ark') {
        L.push(`    /* hero: the ark */`);
        L.push(`    ark(W, group, ${hx}, 0.2, ${hz}, 1.1, { ry: 0.2 });`);
        uses.push('ark');
    } else if (hero === 'basket') {
        L.push(`    /* hero: the basket */`);
        L.push(`    basket(W, group, ${hx}, 0, ${hz}, 1.2, { ry: 0.4 });`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.35);`);
        uses.push('basket');
    } else if (hero === 'scroll') {
        L.push(`    /* hero: the scroll */`);
        L.push(`    scroll(W, group, ${hx}, 0.9, ${hz}, 1.2, { ry: 0.5 });`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('scroll');
    } else if (hero === 'crown') {
        L.push(`    /* hero: the crown */`);
        L.push(`    crown(W, group, ${hx}, 1.0, ${hz}, 1.3, { gold: ${shade(ctx.bg, 0.6)} });`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('crown');
    } else if (hero === 'cup') {
        L.push(`    /* hero: the cup */`);
        L.push(`    cup(W, group, ${hx}, 1.0, ${hz}, 1.4, { gold: ${shade(ctx.bg, 0.6)} });`);
        L.push(`    W.disc([${hx}, 3.5, ${hz - 10}], 3, ${glow}, 0.3);`);
        uses.push('cup');
    } else if (hero === 'jar') {
        L.push(`    /* hero: the jar */`);
        L.push(`    jar(W, group, ${hx}, 0, ${hz}, 1.25, { clay: ${shade(ctx.bg2, 0.9)} });`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('jar');
    } else if (hero === 'horn') {
        L.push(`    /* hero: the horn */`);
        L.push(`    horn(W, group, ${hx}, 1.2, ${hz}, 1.3, { color: ${shade(ctx.bg, 0.9)} });`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('horn');
    } else if (hero === 'chariot') {
        L.push(`    /* hero: the chariot */`);
        L.push(`    chariot(W, group, ${hx}, 0, ${hz}, 1.25, { ry: 0.3, gold: ${shade(ctx.bg, 0.6)} });`);
        uses.push('chariot');
    } else if (hero === 'throne') {
        L.push(`    /* hero: the throne */`);
        L.push(`    throne(W, group, ${hx}, 0, ${hz}, 1.5, { gold: ${shade(ctx.bg, 0.65)} });`);
        uses.push('throne');
    } else if (hero === 'altar') {
        L.push(`    /* hero: the altar */`);
        L.push(`    altar(W, group, ${hx}, 0, ${hz}, 1.4, { stone: ${shade(ctx.bg2, 1.05)} });`);
        uses.push('altar', 'flame');
    } else if (hero === 'staff') {
        L.push(`    /* hero: the staff */`);
        L.push(`    W.add(group, W.G('cyl', 0.09, 0.12, 5.2, 5), W.mat(0x5a3818), [${hx}, 2.6, ${hz}], { r: [0, 0, 0.12] });`);
        L.push(`    W.add(group, W.G('sph', 0.22, 6, 5), W.mat(${shade(ctx.bg, 0.6)}, { metal: 0.4 }), [${hx - 0.35}, 5.1, ${hz}]);`);
        L.push(`    W.disc([${hx}, 5, ${hz - 10}], 4, ${glow}, 0.3);`);
    } else if (hero === 'sword') {
        L.push(`    /* hero: the sword */`);
        L.push(`    const sw = W.grp(group, [${hx}, 0.1, ${hz}], { r: [0, 0.6, 0.35], name: 'sword' });`);
        L.push(`    W.add(sw, W.G('box', 0.16, 3.4, 0.4), W.mat(0xb8c0c8, { metal: 0.7, rough: 0.25 }), [0, 2.1, 0]);`);
        L.push(`    W.add(sw, W.G('box', 0.9, 0.14, 0.5), W.mat(${shade(ctx.bg, 0.6)}, { metal: 0.5 }), [0, 0.5, 0]);`);
        L.push(`    W.add(sw, W.G('cyl', 0.09, 0.12, 0.8, 5), W.mat(0x4a2c14), [0, 0.1, 0]);`);
    } else if (hero === 'grapes') {
        L.push(`    /* hero: the cluster of grapes */`);
        L.push(`    grapes(W, group, ${hx}, 3.2, ${hz}, 1.5, { berry: ${shade(ctx.bg, 0.7)} });`);
        L.push(`    W.disc([${hx}, 5, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('grapes');
    } else if (hero === 'manna') {
        L.push(`    /* hero: manna on the ground */`);
        L.push(`    manna(W, group, ${hx}, ${hz}, 90, 16, { color: 0xf0ece0 });`);
        uses.push('manna');
    } else if (hero === 'bread') {
        L.push(`    /* hero: the bread */`);
        L.push(`    for (let i = 0; i < 3; i++) {`);
        L.push(`        W.add(group, W.G('dod', 0.5), W.mat(0xd8b878, { rough: 0.7 }), [${hx} - 1 + i, 0.35, ${hz} + (i % 2) * 0.8 - 0.4], { s: [1, 0.5, 0.8] });`);
        L.push(`    }`);
        L.push(`    W.disc([${hx}, 3.5, ${hz - 10}], 3, ${glow}, 0.3);`);
    } else if (hero === 'pillar') {
        L.push(`    /* hero: the standing stone */`);
        L.push(`    pillar(W, group, ${hx}, 0, ${hz}, 1.15, { stone: ${shade(ctx.bg2, 1.0)} });`);
        L.push(`    W.disc([${hx}, 6, ${hz - 12}], 5, ${glow}, 0.3);`);
        uses.push('pillar');
    } else if (hero === 'fire') {
        L.push(`    /* hero: the burning bush */`);
        L.push(`    oak(W, group, ${hx}, 0, ${hz}, 0.75, { leaf: 0x3a4a20, leaf2: 0x4a5a28 });`);
        L.push(`    flame(W, group, ${hx}, 1.4, ${hz}, 1.0);`);
        L.push(`    W.point(0xff8a30, 2.4, 60, ${hx}, 3, ${hz}, 0.4);`);
        L.push(`    W.disc([${hx}, 6, ${hz - 12}], 7, 0xffa050, 0.3);`);
        uses.push('oak', 'flame');
    } else if (hero === 'well') {
        L.push(`    /* hero: the well */`);
        L.push(`    well(W, group, ${hx}, 0, ${hz}, 1.2);`);
        L.push(`    W.disc([${hx}, 5, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('well');
    } else if (hero === 'gate') {
        L.push(`    /* hero: the gate */`);
        L.push(`    cityGate(W, group, ${hx}, 0, ${hz - 6}, 1.0, { stone: ${shade(ctx.bg2, 1.05)}, trim: ${shade(ctx.ground, 0.8)} });`);
        uses.push('cityGate');
    } else if (hero === 'tree') {
        L.push(`    /* hero: the great tree */`);
        L.push(`    oak(W, group, ${hx}, 0, ${hz}, 1.7, { leaf: ${ctx.leafA}, leaf2: ${ctx.leafB} });`);
        L.push(`    W.disc([${hx}, 8, ${hz - 16}], 9, ${glow}, 0.25);`);
        uses.push('oak');
    } else if (hero === 'water') {
        L.push(`    /* hero: the water — a focal stone in the flow */`);
        L.push(`    rock(W, group, ${hx}, 0, ${hz}, 1.7, ${shade(ctx.ground, 0.9)});`);
        uses.push('rock');
    } else if (hero === 'boat') {
        L.push(`    /* hero: the boat */`);
        L.push(`    boat(W, group, ${hx}, 0, ${hz}, 1.2, { ry: 0.3 });`);
        uses.push('boat');
    } else if (hero === 'sheep') {
        L.push(`    /* hero: the sheep */`);
        L.push(`    sheep(W, group, ${hx}, 0, ${hz}, 0, 1.3);`);
        L.push(`    W.disc([${hx}, 4, ${hz - 10}], 4, ${glow}, 0.3);`);
        uses.push('sheep');
    } else if (hero === 'tent') {
        L.push(`    /* hero: the tent */`);
        L.push(`    tent(W, group, ${hx}, 0, ${hz}, 1.4, ${shade(ctx.bg2, 1.0)}, 0.2);`);
        L.push(`    W.disc([${hx}, 5, ${hz - 10}], 5, ${glow}, 0.3);`);
        uses.push('tent');
    } else if (hero === 'house') {
        L.push(`    /* hero: the house */`);
        L.push(`    house(W, group, ${hx}, 0, ${hz - 2}, 1.3, { mud: ${shade(ctx.bg2, 0.95)} });`);
        uses.push('house');
    } else if (hero === 'city') {
        L.push(`    /* hero: the city gate */`);
        L.push(`    cityGate(W, group, ${hx}, 0, ${hz - 8}, 1.1, { stone: ${shade(ctx.bg2, 1.05)}, trim: ${shade(ctx.ground, 0.8)} });`);
        uses.push('cityGate');
    } else {
        L.push(`    /* hero: the focal element */`);
        L.push(`    pillar(W, group, ${hx}, 0, ${hz}, 1.1, { stone: ${shade(ctx.bg2, 1.0)} });`);
        L.push(`    W.disc([${hx}, 6, ${hz - 12}], 5, ${glow}, 0.3);`);
        uses.push('pillar');
    }
    return { lines: L, uses };
}

function figuresSection(ctx) {
    const L = [];
    const uses = ['person'];
    const hasFigures = ctx.elements.includes('figures');
    const n = hasFigures ? 1 + Math.floor(ctx.rng() * 3) : 1;
    const hz = ctx.elements.includes('water') && !['boat', 'whale', 'ark'].includes(ctx.heroTag) ? 11 : 0;
    L.push(`    /* figures */`);
    const spots = [
        [-5, hz + 5], [4.5, hz + 6], [1, hz - 5],
    ];
    for (let i = 0; i < n; i++) {
        const [fx, fz] = spots[i % spots.length];
        const opts = [];
        opts.push(`robe: ${ctx.robe || ctx.robes[i % ctx.robes.length]}`);
        if (ctx.head !== 'hair') opts.push(`head: '${ctx.head}'`);
        if (ctx.head === 'wrap') opts.push(`wrap: ${shade(ctx.bg, 1.15)}`, `wrapTrim: ${shade(ctx.bg, 0.7)}`);
        if (ctx.beard) opts.push(`beard: '${ctx.beard}'`);
        if (ctx.staff) opts.push(`staff: '${ctx.staff}'`);
        if (ctx.collar) opts.push(`collar: ${ctx.collar}`);
        if (ctx.pose.bend) opts.push(`bend: ${ctx.pose.bend}`);
        if (ctx.pose.armR) opts.push(`armR: [${ctx.pose.armR.join(', ')}]`);
        if (ctx.pose.armL) opts.push(`armL: [${ctx.pose.armL.join(', ')}]`);
        opts.push(`ry: ${(ctx.rng() * 1.4 - 0.7).toFixed(2)}`);
        opts.push(`s: ${(1 + ctx.rng() * 0.2).toFixed(2)}`);
        L.push(`    person(W, group, [${fx}, 0, ${fz}], { ${opts.join(', ')} });`);
    }
    if (ctx.elements.includes('crowd')) {
        const cn = 14 + Math.floor(ctx.rng() * 12);
        L.push(`    /* crowd: the people of the story */`);
        L.push(`    crowd(W, group, 0, 16, ${cn}, 70, 44, [${ctx.robes.join(', ')}]);`);
        uses.push('crowd');
    }
    return { lines: L, uses };
}

function birdsSection(ctx) {
    if (ctx.mode === 'storm' || ctx.mode === 'deep' || ctx.mode === 'ember') return null;
    if (!ctx.elements.includes('field') && !ctx.elements.includes('hills') && !ctx.elements.includes('city') && !ctx.elements.includes('trees') && !ctx.elements.includes('garden')) return null;
    const L = [];
    L.push(`    /* birds: slow circles high above */`);
    L.push(`    birds(W, group, ${5 + Math.floor(ctx.rng() * 4)}, 55, { y: 26 });`);
    return { lines: L, uses: ['birds'] };
}

const SECTION_ORDER = [
    skySection, groundSection, hillsSection, citySection, templeSection,
    palaceSection, houseSection, tentsSection, treesSection, fieldSection,
    stormSection, fireSection, vesselSection, flockSection, propsSection,
    heroSection, figuresSection, birdsSection,
];

/* ═══════════════════════ file emitters ═══════════════════════ */

function sceneSource(ctx) {
    const sections = SECTION_ORDER.map(fn => fn(ctx)).filter(Boolean);
    const used = new Set(['THREE', 'createScene']);
    for (const s of sections) s.uses.forEach(u => used.add(u));
    // every scene gets figures; person is always imported
    used.add('person');

    const L = [];
    L.push('/**');
    L.push(` * ${clean(ctx.nameLine)}`);
    L.push(` * ${'-'.repeat(Math.min(60, Math.max(10, ctx.nameLine.length)))}`);
    if (ctx.staging) L.push(` * ${clean(ctx.staging)}`);
    const firstLine = (ctx.act.lines || []).find(l => l.speaker === 'narrator');
    if (firstLine && firstLine.text) L.push(` * ${clean('“' + firstLine.text + '”')}`);
    L.push(` *`);
    L.push(` * Palette ${ctx.bg} → ${ctx.bg2} · light: ${ctx.mode} · hero: ${ctx.heroTag}`);
    if (ctx.act.gameTitle) L.push(` * Game beat: ${clean(ctx.act.gameTitle)}`);
    L.push(` *`);
    L.push(` * Generated by scripts/add-shot-scenes.mjs from the act data and`);
    L.push(` * the mood board in ../../art/. Composition follows the kit in`);
    L.push(` * ./${ctx.lower}-kit.js.`);
    L.push(' */');
    L.push('');
    L.push(`import { ${[...used].join(', ')} } from './${ctx.lower}-kit.js';`);
    L.push('');
    L.push(`const BG = ${ctx.bg};`);
    L.push(`const GROUND = ${ctx.ground};`);
    L.push('');
    L.push('export function build(group) {');
    L.push(`    const W = createScene(group, { seed: ${ctx.seed}, bg: BG, fogNear: ${ctx.light.fogNear}, fogFar: ${ctx.light.fogFar} });`);
    L.push('');
    L.push(`    /* light — ${ctx.mode} */`);
    L.push(`    W.lights({ sky: ${hexNum(ctx.light.sky)}, gnd: ${hexNum(ctx.light.gnd)}, hemi: ${ctx.light.hemi}, sun: ${hexNum(ctx.light.sun)}, sunI: ${ctx.light.sunI}, sunPos: [${ctx.light.sunPos.join(', ')}] });`);
    for (const s of sections) {
        if (!s.lines.length) continue;
        L.push('');
        for (const line of s.lines) L.push(line);
    }
    L.push('');
    L.push('    return W.finish();');
    L.push('}');
    L.push('');
    L.push('export default { build };');
    L.push('');
    return L.join('\n');
}

function hdSource(ctx) {
    const s = ctx.sky;
    const sunDir = [-0.52, 0.42, 0.61];
    const L = [];
    L.push('/**');
    L.push(` * ${clean(ctx.nameLine)} — High Definition`);
    L.push(` * ${'-'.repeat(Math.min(60, Math.max(10, ctx.nameLine.length + 18)))}`);
    L.push(` * Same composition as ${ctx.sceneId}.js, with:`);
    L.push(' *   - gradient sky dome with sun glow');
    L.push(' *   - shadow-casting key light and cool fill');
    L.push(' *   - renderer shadow map (shadows: true)');
    L.push(' *');
    L.push(' * Contract: exports build(group, opts) -> { update, background, fog, shadows }.');
    L.push(' */');
    L.push('');
    L.push("import THREE from '../js/three.js';");
    L.push(`import { build as base } from './${ctx.sceneId}.js';`);
    L.push('');
    L.push('const SKY_RADIUS = 280;');
    L.push(`const C = { top: ${s.top}, mid: ${s.mid}, horizon: ${s.horizon}, sun: ${s.sun} };`);
    L.push('');
    L.push('/* Mark objects that must not influence camera framing. */');
    L.push('const noFrame = obj => { obj.userData.excludeFromBounds = true; return obj; };');
    L.push('');
    L.push('function buildSky(group) {');
    L.push('    const geo = new THREE.SphereGeometry(SKY_RADIUS, 40, 24);');
    L.push('    const material = new THREE.ShaderMaterial({');
    L.push('        side: THREE.BackSide,');
    L.push('        depthWrite: false,');
    L.push('        fog: false,');
    L.push('        uniforms: {');
    L.push('            topColor: { value: new THREE.Color(C.top) },');
    L.push('            midColor: { value: new THREE.Color(C.mid) },');
    L.push('            horizonColor: { value: new THREE.Color(C.horizon) },');
    L.push('            sunColor: { value: new THREE.Color(C.sun) },');
    L.push('            sunDir: { value: new THREE.Vector3(' + sunDir.join(', ') + ').normalize() }');
    L.push('        },');
    L.push("        vertexShader: /* glsl */`");
    L.push('            varying vec3 vDir;');
    L.push('            void main() {');
    L.push('                vDir = normalize(position);');
    L.push('                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);');
    L.push('            }');
    L.push('        `,');
    L.push("        fragmentShader: /* glsl */`");
    L.push('            uniform vec3 topColor, midColor, horizonColor, sunColor, sunDir;');
    L.push('            varying vec3 vDir;');
    L.push('            void main() {');
    L.push('                float h = vDir.y;');
    L.push('                vec3 c = mix(horizonColor, midColor, smoothstep(-0.04, 0.30, h));');
    L.push('                c = mix(c, topColor, smoothstep(0.22, 0.85, h));');
    L.push('                float d = max(dot(vDir, normalize(sunDir)), 0.0);');
    L.push('                c += sunColor * pow(d, 900.0) * 3.0;   // the disc itself');
    L.push('                c += sunColor * pow(d, 12.0) * 0.35;   // tight bloom');
    L.push('                c += sunColor * pow(d, 2.5) * 0.10;    // broad atmospheric haze');
    L.push('                gl_FragColor = vec4(c, 1.0);');
    L.push('            }');
    L.push('        `');
    L.push('    });');
    L.push('    const sky = new THREE.Mesh(geo, material);');
    L.push('    sky.frustumCulled = false;');
    L.push('    group.add(noFrame(sky));');
    L.push('    return sky;');
    L.push('}');
    L.push('');
    L.push('export function build(group, opts) {');
    L.push('    const handle = base(group, opts);');
    L.push('    buildSky(group);');
    L.push('');
    L.push('    // shadow-casting key light matched to the sky dome\'s sun');
    L.push('    const key = new THREE.DirectionalLight(0xfff0cf, 1.5);');
    L.push('    key.position.set(' + sunDir.map(v => Math.round(v * 120)).join(', ') + ');');
    L.push('    key.target.position.set(0, 0, 0);');
    L.push('    key.castShadow = true;');
    L.push('    key.shadow.mapSize.set(2048, 2048);');
    L.push('    const cam = key.shadow.camera;');
    L.push('    cam.left = -95; cam.right = 95; cam.top = 95; cam.bottom = -95;');
    L.push('    cam.near = 20; cam.far = 340;');
    L.push('    cam.updateProjectionMatrix();');
    L.push('    key.shadow.bias = -0.0006;');
    L.push('    key.shadow.normalBias = 0.035;');
    L.push('    key.shadow.radius = 2.5;');
    L.push('    group.add(key, key.target);');
    L.push('');
    L.push('    // cool fill from the opposite side so shadowed faces keep their form');
    L.push('    const fill = new THREE.DirectionalLight(0x9fc4e8, 0.45);');
    L.push('    fill.position.set(90, 45, -70);');
    L.push('    group.add(fill);');
    L.push('');
    L.push('    return { ...handle, shadows: true };');
    L.push('}');
    L.push('');
    L.push('export default { build };');
    L.push('');
    return L.join('\n');
}

function manifestSource(story, acts) {
    const scenes = [
        { id: 'nile', name: 'The Nile (Low Poly)', file: 'nile.js', type: 'module' },
        { id: 'nile_hd', name: 'The Nile (High Definition)', file: 'nile_hd.js', type: 'module' },
    ];
    for (const act of acts) {
        const sceneId = `${story.toLowerCase()}-${act.id.replace(/_/g, '-')}`;
        scenes.push({ id: sceneId, name: act.name, file: `${sceneId}.js`, type: 'module' });
        scenes.push({ id: `${sceneId}_hd`, name: `${act.name} (HD)`, file: `${sceneId}_hd.js`, type: 'module' });
    }
    return JSON.stringify({ version: 1, default: 'nile', scenes }, null, 2) + '\n';
}

/* ═══════════════════════ kit emitter ═══════════════════════ */

function kitSource(story, acts) {
    const ref = fs.readFileSync(path.join(root, 'Moses/tools/shot-designer/scenes/moses-kit.js'), 'utf8');
    const lower = story.toLowerCase();
    const sceneList = acts.map(a => `${lower}-${a.id.replace(/_/g, '-')}`).join(', ');
    const header = `/**
 * ${story} scene kit
 * ${'-'.repeat(Math.min(60, story.length + 12))}
 * Shared helpers for the ${story} act scenes (${sceneList}), written in the
 * same style as nile.js: flat-shaded MeshStandardMaterial, jittered terrain,
 * simple primitives. Each scene calls \`createScene(group, opts)\`, builds with the
 * helpers, then returns \`W.finish()\` which yields { background, fog, update }.
 *
 * Conventions
 *  - Story action sits around the origin, focal height ~3; the default camera
 *    looks from +z toward -z.
 *  - Backdrop objects (mountains, sky, distant ridges) are flagged with
 *    userData.excludeFromBounds so they don't skew camera framing.
 *  - Figures face +z and stand about 3.3 units tall.
 */`;
    return ref.replace(/^\/\*\*[\s\S]*?\*\//, header) + EXTRA_BUILDERS;
}

/* ═══════════════════════ main ═══════════════════════ */

const SKIP = new Set(['__Template', '__Tools', '__shared', 'scripts', 'shared-tools', 'test-artifacts', 'tests']);

function storyFolders() {
    return fs.readdirSync(root).filter(d => {
        if (SKIP.has(d)) return false;
        const p = path.join(root, d);
        return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'data'));
    });
}

function generateStory(story) {
    const dataDir = path.join(root, story, 'data');
    const acts = loadActs(story, dataDir);
    if (!acts) return { story, skipped: 'no act data' };
    const brief = BRIEFS[story];
    const scenesDir = path.join(root, story, 'tools/shot-designer/scenes');

    // remove the template's Moses example scenes and lib/
    for (const f of fs.readdirSync(scenesDir)) {
        if (/^moses-/.test(f)) fs.unlinkSync(path.join(scenesDir, f));
    }
    const libDir = path.join(scenesDir, 'lib');
    if (fs.existsSync(libDir)) fs.rmSync(libDir, { recursive: true });

    // kit
    fs.writeFileSync(path.join(scenesDir, `${story.toLowerCase()}-kit.js`), kitSource(story, acts));

    // scenes
    const stats = { sd: 0, hd: 0 };
    acts.forEach((act, i) => {
        // Jonah's maps stage several briefs — join them like the mood board
        const idxs = act.briefs || [i];
        const briefScene = brief
            ? [idxs.map(x => brief.scenes[x][0]).join(' / '), idxs.map(x => brief.scenes[x][1]).join(' ')]
            : null;
        const ctx = makeCtx(story, act, briefScene, i);
        const sceneId = ctx.sceneId;
        fs.writeFileSync(path.join(scenesDir, `${sceneId}.js`), sceneSource(ctx));
        fs.writeFileSync(path.join(scenesDir, `${sceneId}_hd.js`), hdSource(ctx));
        stats.sd++; stats.hd++;
    });

    // manifest
    fs.writeFileSync(path.join(scenesDir, 'manifest.json'), manifestSource(story, acts));
    return { story, ...stats };
}

function generateMoses() {
    const story = 'Moses';
    const scenesDir = path.join(root, story, 'tools/shot-designer/scenes');
    const actIds = JSON.parse(fs.readFileSync(path.join(root, story, 'data/manifest.json'), 'utf8')).acts.map(a => a.id);

    // rename the hand-authored act scenes to the board convention
    actIds.forEach((id, i) => {
        const from = path.join(scenesDir, `act${String(i + 1).padStart(2, '0')}_*.js`);
        const files = fs.readdirSync(scenesDir).filter(f => new RegExp(`^act${String(i + 1).padStart(2, '0')}_`).test(f));
        files.forEach(f => {
            const to = path.join(scenesDir, `moses-${id}.js`);
            if (!fs.existsSync(to)) fs.renameSync(path.join(scenesDir, f), to);
        });
    });

    // HD twins for the hand-authored scenes
    const brief = BRIEFS.Moses;
    const acts = loadActs(story, path.join(root, story, 'data'));
    acts.forEach((act, i) => {
        const sceneId = `moses-${act.id}`;
        const briefScene = brief ? brief.scenes[i] : null;
        const ctx = makeCtx(story, { ...act, id: act.id }, briefScene, i);
        ctx.sceneId = sceneId;
        const hdFile = path.join(scenesDir, `${sceneId}_hd.js`);
        if (!fs.existsSync(hdFile)) fs.writeFileSync(hdFile, hdSource(ctx));
    });

    // manifest registering every scene
    fs.writeFileSync(path.join(scenesDir, 'manifest.json'), manifestSource(story, acts));
    return { story, renamed: actIds.length, hd: actIds.length };
}

const results = [];
for (const story of storyFolders()) {
    results.push(story === 'Moses' ? generateMoses() : generateStory(story));
}

console.log(`Shot Designer scenes written for ${results.length} stories:`);
for (const r of results) {
    if (r.skipped) console.log(`  ${r.story}: SKIPPED (${r.skipped})`);
    else if (r.renamed) console.log(`  ${r.story}: ${r.renamed} scenes renamed, ${r.hd} HD twins, manifest updated`);
    else console.log(`  ${r.story}: kit + ${r.sd} scenes + ${r.hd} HD twins + manifest`);
}
