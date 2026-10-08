/**
 * Jonah scene kit
 * -----------------
 * Shared helpers for the Jonah act scenes (jonah-ship-map, jonah-whale-map, jonah-nineveh-map, jonah-figtree-map), written in the
 * same style as nile.js: flat-shaded MeshStandardMaterial, jittered terrain,
 * simple primitives. Each scene calls `createScene(group, opts)`, builds with the
 * helpers, then returns `W.finish()` which yields { background, fog, update }.
 *
 * Conventions
 *  - Story action sits around the origin, focal height ~3; the default camera
 *    looks from +z toward -z.
 *  - Backdrop objects (mountains, sky, distant ridges) are flagged with
 *    userData.excludeFromBounds so they don't skew camera framing.
 *  - Figures face +z and stand about 3.3 units tall.
 */

import THREE from '../js/three.js';

export { THREE };

function mulberry(seed) {
    let a = seed >>> 0;
    return () => {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function createScene(group, { seed = 1, bg, fogNear = 60, fogFar = 200 }) {
    const r = mulberry(seed);
    const mats = {};
    const geos = {};
    const anims = [];
    const W = { group, r };

    W.rr = (a, b) => a + (b - a) * r();
    W.pick = arr => arr[Math.floor(r() * arr.length)];
    W.anim = fn => anims.push(fn);

    /* ── materials & geometry (cached so hundreds of props stay cheap) ── */
    W.mat = (color, o = {}) => {
        const k = 's' + color + JSON.stringify(o);
        if (!mats[k]) {
            mats[k] = new THREE.MeshStandardMaterial({
                color,
                flatShading: true,
                roughness: o.rough ?? 1,
                metalness: o.metal ?? 0,
                emissive: o.emissive ?? 0x000000,
                emissiveIntensity: o.ei ?? 1,
                transparent: o.opacity !== undefined && o.opacity < 1,
                opacity: o.opacity ?? 1,
                depthWrite: !(o.opacity !== undefined && o.opacity < 1),
                side: o.side ? THREE.DoubleSide : THREE.FrontSide
            });
        }
        return mats[k];
    };
    W.basic = (color, opacity = 1, fog = true) => {
        const k = 'b' + color + opacity + fog;
        if (!mats[k]) {
            mats[k] = new THREE.MeshBasicMaterial({
                color, fog, transparent: opacity < 1, opacity, depthWrite: opacity >= 1, side: THREE.DoubleSide
            });
        }
        return mats[k];
    };
    W.G = (kind, ...a) => {
        const k = kind + a.join(',');
        if (!geos[k]) {
            geos[k] = ({
                box: () => new THREE.BoxGeometry(a[0], a[1], a[2]),
                sph: () => new THREE.SphereGeometry(a[0], a[1] || 7, a[2] || 5),
                cone: () => new THREE.ConeGeometry(a[0], a[1], a[2] || 6),
                cyl: () => new THREE.CylinderGeometry(a[0], a[1], a[2], a[3] || 6),
                ico: () => new THREE.IcosahedronGeometry(a[0], a[1] || 0),
                oct: () => new THREE.OctahedronGeometry(a[0], a[1] || 0),
                dod: () => new THREE.DodecahedronGeometry(a[0], 0),
                tor: () => new THREE.TorusGeometry(a[0], a[1], a[2] || 5, a[3] || 12),
                plane: () => new THREE.PlaneGeometry(a[0], a[1])
            })[kind]();
        }
        return geos[k];
    };

    /* ── scene graph helpers ── */
    const place = (obj, pos, o) => {
        obj.position.set(...pos);
        if (o.r) obj.rotation.set(...o.r);
        if (o.s !== undefined) Array.isArray(o.s) ? obj.scale.set(...o.s) : obj.scale.setScalar(o.s);
        if (o.name) obj.name = o.name;
        return obj;
    };
    W.grp = (parent, pos = [0, 0, 0], o = {}) => {
        const g = place(new THREE.Group(), pos, o);
        (parent || group).add(g);
        return g;
    };
    W.add = (parent, geo, mat, pos = [0, 0, 0], o = {}) => {
        const m = place(new THREE.Mesh(geo, mat), pos, o);
        (parent || group).add(m);
        return m;
    };
    /** Mark an object (and its descendants) as backdrop so it is ignored by camera framing. */
    W.backdrop = obj => {
        obj.traverse(n => { n.userData.excludeFromBounds = true; });
        return obj;
    };

    /* ── terrain: jittered plane with a smooth height function for placing props ── */
    W.ground = (w, d, cx, cz, color, o = {}) => {
        const amp = o.amp ?? 0.6, jit = o.j ?? 0.25, flat = o.flat ?? 30, ramp = o.ramp ?? 40, base = o.y ?? 0;
        const segX = o.seg ?? 36, segZ = o.segz ?? segX;
        const geo = new THREE.PlaneGeometry(w, d, segX, segZ);
        geo.rotateX(-Math.PI / 2);
        const smooth = (x, z) => {
            const t = Math.min(1, Math.max(0, (Math.hypot(x - (o.fx ?? 0), z - (o.fz ?? 0)) - flat) / ramp));
            const f = t * t * (3 - 2 * t);
            const dunes = Math.sin(x * 0.09 + 1.3) * Math.cos(z * 0.07) + 0.5 * Math.sin(x * 0.21 + z * 0.17);
            return base + f * amp * dunes + (o.rise ? o.rise(x, z) : 0);
        };
        const p = geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
            p.setY(i, smooth(p.getX(i) + cx, p.getZ(i) + cz) + (r() - 0.5) * jit);
        }
        geo.computeVertexNormals();
        const mesh = W.add(group, geo, W.mat(color), [cx, 0, cz], { name: o.name || 'ground' });
        return { mesh, y: smooth };
    };

    W.lights = o => {
        group.add(new THREE.HemisphereLight(o.sky, o.gnd, o.hemi ?? 0.75));
        const sun = new THREE.DirectionalLight(o.sun, o.sunI ?? 1);
        sun.position.set(...(o.sunPos || [-30, 40, 10]));
        group.add(sun);
        return sun;
    };
    W.point = (color, intensity, dist, x, y, z, flicker) => {
        const l = new THREE.PointLight(color, intensity, dist);
        l.position.set(x, y, z);
        group.add(l);
        if (flicker) {
            const ph = r() * 10;
            W.anim(t => { l.intensity = intensity * (1 + Math.sin(t * 7 + ph) * flicker + Math.sin(t * 13.3 + ph * 2) * flicker * 0.6); });
        }
        return l;
    };

    /* ── sky objects (unlit, fog-immune, excluded from framing) ── */
    W.stars = (n, radius, colors, size = 0.9) => {
        const g = W.grp(group, [0, 0, 0], { name: 'stars' });
        for (let i = 0; i < n; i++) {
            const th = r() * Math.PI, ph = Math.acos(0.05 + r() * 0.8);
            const x = Math.cos(th) * Math.sin(ph) * radius * 1.4 * (r() < 0.5 ? -1 : 1);
            const y = Math.cos(ph) * radius * 0.75 + 12;
            const z = -radius * (0.6 + r() * 0.4);
            W.add(g, W.G('oct', 1), W.basic(W.pick(colors), 1, false), [x, y, z], { s: size * (0.4 + r() * 0.9) });
        }
        W.backdrop(g);
        W.anim(t => { g.rotation.z = Math.sin(t * 0.02) * 0.02; });
        return g;
    };
    W.disc = (pos, radius, color, opacity = 1) => W.backdrop(W.add(group, W.G('ico', 1, 1), W.basic(color, opacity, false), pos, { s: radius, name: 'sky_disc' }));

    /* ── finish ── */
    W.finish = () => ({
        background: new THREE.Color(bg),
        fog: new THREE.Fog(bg, fogNear, fogFar),
        update(t) { anims.forEach(fn => fn(t)); }
    });

    return W;
}

/* ═════════════════════════════ props ═════════════════════════════ */

/**
 * Low-poly person. o: robe, skin, sash, trim, collar, cloak, head ('hair'|'wrap'|'nemes'|'crown'|'hood'|'bare'),
 * hair, beard ('short'|'long'), wrap, wrapTrim, staff ('planted'|'raised'|'held'), armL/armR [rx, rz], bend, s, ry, simple.
 */
export function person(W, parent, pos, o = {}) {
    const g = W.grp(parent, pos, { r: [0, o.ry || 0, 0], s: o.s || 1, name: o.name || 'figure' });
    const robe = o.robe ?? 0x8a6a44, skin = o.skin ?? 0xc68e5a;

    if (o.simple) {
        const b = W.grp(g, [0, 0, 0], { r: [o.bend || 0, 0, 0] });
        W.add(b, W.G('cyl', 0.5, 0.9, 2.3, 6), W.mat(robe), [0, 1.15, 0]);
        W.add(b, W.G('sph', 0.48, 6, 5), W.mat(skin), [0, 2.7, 0]);
        W.add(b, W.G('sph', 0.54, 6, 4), W.mat(o.hair ?? o.wrap ?? 0x2a1a10), [0, 2.85, -0.05], { s: [1, 0.7, 1] });
        if (o.pack) W.add(b, W.G('box', 0.9, 0.9, 0.6), W.mat(o.pack), [0, 1.7, -0.6]);
        if (o.staff) W.add(g, W.G('cyl', 0.07, 0.09, 4, 5), W.mat(0x5a3818), [0.95, 2, 0.2]);
        return g;
    }

    const body = W.grp(g, [0, 0, 0], { r: [o.bend || 0, 0, 0] });
    W.add(body, W.G('cyl', 0.55, 0.95, 2.3, 7), W.mat(robe), [0, 1.15, 0]);
    W.add(body, W.G('cyl', 0.6, 0.62, 0.22, 7), W.mat(o.sash ?? 0x4a3020), [0, 1.45, 0]);
    if (o.trim) W.add(body, W.G('cyl', 0.97, 1.0, 0.16, 7), W.mat(o.trim), [0, 0.1, 0]);
    if (o.collar) W.add(body, W.G('cyl', 0.72, 0.5, 0.28, 8), W.mat(o.collar, { metal: 0.3, rough: 0.5 }), [0, 2.2, 0]);
    if (o.cloak) W.add(body, W.G('cone', 0.95, 2.4, 7), W.mat(o.cloak), [0, 1.3, -0.2], { s: [1.05, 1, 0.75] });
    W.add(body, W.G('sph', 0.5, 7, 6), W.mat(skin), [0, 2.75, 0]);
    const dark = W.mat(0x1a1008);
    W.add(body, W.G('sph', 0.07, 4, 3), dark, [-0.17, 2.82, 0.44]);
    W.add(body, W.G('sph', 0.07, 4, 3), dark, [0.17, 2.82, 0.44]);

    const head = o.head || 'hair', hc = o.hair ?? 0x2a1a10;
    if (head === 'hair') {
        W.add(body, W.G('sph', 0.55, 7, 5), W.mat(hc), [0, 2.9, -0.06], { s: [1, 0.72, 1.02] });
        if (o.beard) {
            const long = o.beard === 'long';
            W.add(body, W.G('cone', 0.34, long ? 1.2 : 0.7, 5), W.mat(hc), [0, long ? 2.1 : 2.35, 0.3], { r: [Math.PI, 0, 0] });
        }
    } else if (head === 'wrap') {
        W.add(body, W.G('sph', 0.6, 7, 5), W.mat(o.wrap ?? 0xd8c8a0), [0, 2.88, -0.05], { s: [1, 0.78, 1.05] });
        W.add(body, W.G('cyl', 0.53, 0.53, 0.14, 8), W.mat(o.wrapTrim ?? 0x9a3a2a), [0, 2.98, 0], { s: 1.05 });
        W.add(body, W.G('box', 0.9, 1.3, 0.25), W.mat(o.wrap ?? 0xd8c8a0), [0, 2.25, -0.45], { r: [0.15, 0, 0] });
    } else if (head === 'nemes') {
        const c1 = W.mat(o.wrap ?? 0x2a4a9a), c2 = W.mat(o.wrapTrim ?? 0xe0b040, { metal: 0.5, rough: 0.4 });
        W.add(body, W.G('cyl', 0.5, 0.7, 0.95, 8), c1, [0, 3.0, -0.05]);
        W.add(body, W.G('cyl', 0.58, 0.58, 0.14, 8), c2, [0, 2.98, 0.02]);
        W.add(body, W.G('box', 0.32, 1.1, 0.4), c1, [-0.55, 2.35, 0.05]);
        W.add(body, W.G('box', 0.32, 1.1, 0.4), c1, [0.55, 2.35, 0.05]);
        W.add(body, W.G('cone', 0.12, 0.35, 4), c2, [0, 3.2, 0.5]);
        W.add(body, W.G('box', 0.22, 0.8, 0.22), c2, [0, 2.05, 0.45]);
    } else if (head === 'crown') {
        W.add(body, W.G('cone', 0.5, 1.4, 6), W.mat(o.wrap ?? 0xf0e8d8), [0, 3.55, 0]);
        W.add(body, W.G('cyl', 0.56, 0.56, 0.16, 7), W.mat(0xe0b040, { metal: 0.5 }), [0, 2.98, 0]);
    } else if (head === 'hood') {
        W.add(body, W.G('sph', 0.66, 7, 5), W.mat(o.wrap ?? robe), [0, 2.82, -0.1], { s: [1, 0.9, 1.05] });
    }

    const arm = (sx, a) => {
        const [rx, rz] = a || [0, sx * 0.14];
        const p = W.grp(body, [sx * 0.62, 2.15, 0], { r: [rx, 0, rz] });
        W.add(p, W.G('cyl', 0.17, 0.14, 1.35, 5), W.mat(o.sleeve ?? robe), [0, -0.62, 0]);
        W.add(p, W.G('sph', 0.19, 5, 4), W.mat(skin), [0, -1.35, 0]);
        return p;
    };
    const aL = arm(-1, o.armL), aR = arm(1, o.armR);
    const wood = W.mat(0x5a3818);
    if (o.staff === 'planted') {
        aR.rotation.set(0, 0, 0.55);
        const h = o.staffH || 4.6;
        W.add(g, W.G('cyl', 0.08, 0.11, h, 5), wood, [1.28, h / 2 - 0.05, 0.05]);
        W.add(g, W.G('sph', 0.16, 5, 4), W.mat(0x4a2c14), [1.28, h - 0.05, 0.05]);
    } else if (o.staff === 'raised') {
        aR.rotation.set(0, 0, 2.55);
        W.add(aR, W.G('cyl', 0.09, 0.12, 5.4, 5), wood, [0, -2.2, 0]);
    } else if (o.staff === 'held') {
        W.add(aR, W.G('cyl', 0.08, 0.11, 4.2, 5), wood, [0, -1.3, 0.05]);
    }
    g.userData.armL = aL;
    g.userData.armR = aR;
    return g;
}

export function palm(W, parent, x, y, z, s = 1, o = {}) {
    const g = W.grp(parent, [x, y, z], { s, r: [0, W.r() * 6, 0], name: 'palm' });
    W.add(g, W.G('cyl', 0.18, 0.3, 4.5, 5), W.mat(o.trunk ?? 0x7a4f2b), [0, 2.2, 0], { r: [0, 0, (W.r() - 0.5) * 0.25] });
    for (let i = 0; i < 7; i++) {
        const leaf = W.add(g, W.G('cone', 0.35, 3, 3), W.mat(i % 2 ? (o.leafA ?? 0x4f8a2e) : (o.leafB ?? 0x5fa036)), [0, 4.5, 0]);
        leaf.rotation.order = 'YZX';
        leaf.rotation.set(0, (i * Math.PI * 2) / 7, 1.15);
        leaf.translateY(1.5);
    }
    return g;
}

export function reeds(W, parent, cx, cz, n, spread, o = {}) {
    const g = W.grp(parent, [cx, o.y ?? 0, cz], { name: 'reeds' });
    const cols = (o.cols || [0x6f8f3a, 0x8faa3a, 0x5a7a30]).map(c => W.mat(c));
    const seedMat = W.mat(0x5a3a1c);
    for (let i = 0; i < n; i++) {
        const h = (o.h ?? 4) * (0.6 + W.r() * 0.8);
        const x = (W.r() - 0.5) * spread, z = (W.r() - 0.5) * spread * (o.zs ?? 0.7);
        W.add(g, W.G('cone', 0.14, +h.toFixed(1), 3), W.pick(cols), [x, h / 2, z], { r: [(W.r() - 0.5) * 0.25, W.r() * 3, (W.r() - 0.5) * 0.25] });
        if (o.heads && W.r() < o.heads) W.add(g, W.G('cyl', 0.16, 0.16, 0.7, 5), seedMat, [x, h + 0.1, z]);
    }
    return g;
}

export function rock(W, parent, x, y, z, s, color, o = {}) {
    return W.add(parent, W.G('dod', 1), W.mat(color), [x, y, z], {
        s: [s * (o.sx ?? 1), s * (o.sy ?? 0.7), s * (o.sz ?? 1)], r: [W.r(), W.r() * 6, W.r()], name: 'rock'
    });
}

export function sheep(W, parent, x, y, z, ry = 0, s = 1) {
    const g = W.grp(parent, [x, y, z], { r: [0, ry, 0], s, name: 'sheep' });
    const dark = W.mat(0x3a2a20);
    W.add(g, W.G('ico', 1, 1), W.mat(0xf0e6d0), [0, 1.35, 0], { s: [1.35, 0.95, 0.95] });
    W.add(g, W.G('box', 0.5, 0.55, 0.6), dark, [1.35, 1.6, 0]);
    W.add(g, W.G('cone', 0.16, 0.45, 3), dark, [1.3, 2.05, 0.28], { r: [0, 0, -0.5] });
    W.add(g, W.G('cone', 0.16, 0.45, 3), dark, [1.3, 2.05, -0.28], { r: [0, 0, -0.5] });
    [[0.6, 0.35], [0.6, -0.35], [-0.6, 0.35], [-0.6, -0.35]].forEach(([lx, lz]) => W.add(g, W.G('cyl', 0.1, 0.1, 0.9, 4), dark, [lx, 0.45, lz]));
    return g;
}

export function tent(W, parent, x, y, z, s, cloth, ry = 0, o = {}) {
    const g = W.grp(parent, [x, y, z], { r: [0, ry, 0], s, name: 'tent' });
    W.add(g, W.G('cone', 3.2, 3.4, 4), W.mat(cloth), [0, 1.7, 0], { r: [0, Math.PI / 4, 0], s: [1.3, 1, 1] });
    W.add(g, W.G('box', 1.2, 1.7, 0.1), W.mat(o.door ?? 0x1e1208), [0, 0.85, 1.9], { r: [0.32, 0, 0] });
    if (o.pole) W.add(g, W.G('cyl', 0.07, 0.07, 1.2, 4), W.mat(0x3a2410), [0, 3.7, 0]);
    return g;
}

export function column(W, parent, x, y, z, h, rad, color, o = {}) {
    const g = W.grp(parent, [x, y, z], { name: 'column' });
    const seg = o.seg ?? 8;
    W.add(g, W.G('box', rad * 2.6, 0.5, rad * 2.6), W.mat(o.base ?? color), [0, 0.25, 0]);
    W.add(g, W.G('cyl', rad * 0.85, rad, h, seg), W.mat(color), [0, 0.5 + h / 2, 0]);
    if (o.band) {
        const bm = W.mat(o.band, { metal: 0.4, rough: 0.5 });
        W.add(g, W.G('cyl', rad * 0.9, rad * 0.9, 0.35, seg), bm, [0, 0.5 + h * 0.2, 0], { s: 1.03 });
        W.add(g, W.G('cyl', rad * 0.86, rad * 0.86, 0.35, seg), bm, [0, 0.5 + h * 0.8, 0], { s: 1.04 });
    }
    W.add(g, W.G('box', rad * 2.4, 0.5, rad * 2.4), W.mat(o.cap ?? color), [0, 0.75 + h, 0]);
    if (o.lotus) W.add(g, W.G('cone', rad * 1.3, rad * 1.5, 6), W.mat(o.lotus), [0, 0.5 + h + 0.2, 0], { r: [Math.PI, 0, 0] });
    return g;
}

/** Stacked emissive cones that flicker in update(). */
export function flame(W, parent, x, y, z, s = 1, cols = [0xff6a20, 0xffb030, 0xfff0a0]) {
    const g = W.grp(parent, [x, y, z], { s, name: 'flame' });
    W.add(g, W.G('cone', 0.9, 2.6, 5), W.basic(cols[0], 0.9), [0, 1.3, 0]);
    W.add(g, W.G('cone', 0.65, 2.0, 5), W.basic(cols[1], 0.95), [0.1, 1.15, 0.05], { r: [0, 1, 0.08] });
    W.add(g, W.G('cone', 0.4, 1.4, 4), W.basic(cols[2], 1), [-0.05, 0.8, 0], { r: [0, 0.5, -0.06] });
    const ph = W.r() * 10;
    W.anim(t => {
        g.scale.set(s * (1 + Math.sin(t * 9 + ph) * 0.06), s * (1 + Math.sin(t * 6.3 + ph) * 0.14), s * (1 + Math.cos(t * 8 + ph) * 0.06));
    });
    return g;
}

export function crowd(W, parent, cx, cz, n, w, d, palette, o = {}) {
    const g = W.grp(parent, [cx, 0, cz], { name: 'crowd' });
    for (let i = 0; i < n; i++) {
        const x = (W.r() - 0.5) * w, z = (W.r() - 0.5) * d;
        person(W, g, [x, o.y ? o.y(cx + x, cz + z) : 0, z], {
            simple: true,
            robe: W.pick(palette),
            skin: W.pick([0xc68e5a, 0xb07a48, 0xd8a070, 0x9a6a3c]),
            hair: W.pick([0x2a1a10, 0x3a2418, 0xd8c8a0, 0x8a3a2a]),
            s: (o.s ?? 1) * (0.75 + W.r() * 0.35),
            ry: (o.ry ?? 0) + (W.r() - 0.5) * 0.6,
            pack: W.r() < (o.packs ?? 0.4) ? W.pick([0x7a5a30, 0x9a3a2a, 0x4a6a7a]) : undefined,
            staff: W.r() < (o.staves ?? 0.25)
        });
    }
    return g;
}

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
