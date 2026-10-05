/**
 * Ch.7 — Thunder on Sinai
 * -----------------------
 * Low-poly Sinai at night. Mount Sinai is not a single cone on a plain: it rises
 * out of a dense labyrinth of neighbouring granite ridges, with sharp crests,
 * rounded summits and deep shadowed wadis between them. That overlapping mass
 * is the shape to build, and the camp is small at the foot of it.
 *
 * Low-res pass: one readable summit, lit, ringed by darker overlapping ridges.
 * The camp is tiny, which is what sells the scale.
 *
 * Contract: exports build(group) -> { background, fog, update(t) }.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, figure, rock, glow, lighting } from './lib/lowpoly.js';

const SKY = 0x1a0e30;
const ROCK_NEAR = 0x4a3d5e;
const ROCK_MID = 0x6e5f80;
const ROCK_FAR = 0x9c8fb4;
const SAND = 0x5c4f3c;
const CAMP = 0xc0a880;

/** Angular crest: two overlapping cones leaning against each other. */
function crest(group, x, z, w, h, color, y = 0, sides = 5, parent) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    (parent || group).add(g);
    const a = hill(g, w, h, color, -w * 0.28, 0, 0, sides, g);
    a.rotation.y = 0.7;
    const b = hill(g, w * 0.82, h * 0.88, color, w * 0.3, w * 0.16, 0, sides, g);
    b.rotation.y = 2.3;
    return g;
}

export function build(group) {
    // Night storm. Bright enough to read the rock: the earlier pass was so dark
    // the whole massif collapsed into one silhouette.
    lighting(group, 0x8e7ab4, 0x2e2540, 0.6, 0xe0d0f4, 0.95, [40, 60, 50]);
    glow(group, 14, 0xc0b0d8, 320, 190, -520);

    /* ── The plain ───────────────────────────────────────────── */
    // Wide enough that its edges never show: the fog does the horizon, not a
    // visible slab edge.
    terrain(group, 900, 900, 0, -60, -0.6, 2.2, SAND, 30);

    /* ── The massif ──────────────────────────────────────────── */
    // Overlapping crests at a consistent scale with the plain: each peak is a
    // substantial mass, not a bump. Back ranks first so nearer ones overlap.
    const far = [
        [-300, -420, 190, 120, ROCK_FAR], [-110, -470, 220, 140, ROCK_FAR],
        [110, -460, 205, 128, ROCK_FAR], [320, -400, 185, 116, ROCK_FAR]
    ];
    for (const [x, z, w, h, c] of far) {
        crest(group, x, z, w, h, c, -1, 6).userData.excludeFromBounds = true;
    }

    const mid = [
        [-260, -320, 170, 150, ROCK_MID], [-70, -350, 185, 168, ROCK_MID],
        [130, -335, 165, 148, ROCK_MID], [300, -290, 150, 132, ROCK_MID]
    ];
    for (const [x, z, w, h, c] of mid) {
        crest(group, x, z, w, h, c, -1, 6);
    }

    // The mountain itself: broad and massive, flanked by two shoulders so it
    // sits inside the range rather than standing alone.
    const sinai = new THREE.Group();
    sinai.position.set(-10, 0, -200);
    group.add(sinai);
    crest(sinai, -200, 40, 180, 158, ROCK_MID, -1, 6, sinai);
    crest(sinai, 205, 30, 172, 148, ROCK_MID, -1, 6, sinai);
    const summit = crest(sinai, 0, 0, 250, 245, ROCK_NEAR, -1, 7, sinai);
    summit.userData.excludeFromBounds = true;

    // Rounded granite cap, brighter than the mass below it.
    const cap = new THREE.Mesh(
        new THREE.IcosahedronGeometry(52, 0),
        new THREE.MeshStandardMaterial({ color: 0x8a7a94, flatShading: true, roughness: 1 })
    );
    cap.position.set(0, 243, 0);
    cap.scale.set(1.25, 0.42, 1.25);
    cap.userData.excludeFromBounds = true;
    sinai.add(cap);

    // Boulders and scree at the foot of the range, for scale.
    for (let i = 0; i < 46; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 150 + Math.random() * 160;
        rock(group, 5 + Math.random() * 11, ROCK_MID,
            Math.cos(a) * r, -0.4, -200 + Math.sin(a) * r * 0.5);
    }

    /* ── Cloud band ───────────────────────────────────────────── */
    // Wide, flat, and pale: a lid sitting on the range, not asteroids. Built
    // from squashed low-poly spheres clustered into a ring.
    const clouds = [];
    for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const r = 210 + Math.random() * 70;
        const c = new THREE.Mesh(
            new THREE.IcosahedronGeometry(38 + Math.random() * 22, 0),
            new THREE.MeshStandardMaterial({
                color: 0xc4b4d8, flatShading: true, roughness: 1,
                transparent: true, opacity: 0.3, fog: false
            })
        );
        // Flattened and lifted clear of the summit: a lid, not a boulder.
        c.scale.set(1.7, 0.2, 1.0);
        c.position.set(-10 + Math.cos(a) * r, 236 + Math.random() * 34, -200 + Math.sin(a) * r * 0.5);
        c.rotation.y = a;
        c.userData.excludeFromBounds = true;
        group.add(c);
        clouds.push({ c, base: c.position.clone(), phase: Math.random() * 6, cx: -10, cz: -200 });
    }

    /* ── Lightning ───────────────────────────────────────────── */
    const bolt = new THREE.PointLight(0xe8eeff, 0, 500, 2);
    bolt.position.set(-10, 250, -200);
    group.add(bolt);
    const flashes = [];
    for (let i = 0; i < 3; i++) {
        const b = new THREE.Mesh(
            new THREE.ConeGeometry(5, 92, 4),
            new THREE.MeshBasicMaterial({ color: 0xf2f6ff, transparent: true, opacity: 0, fog: false })
        );
        b.position.set(-10 + (i - 1) * 96, 210, -190);
        b.rotation.z = (i - 1) * 0.3;
        b.userData.excludeFromBounds = true;
        group.add(b);
        flashes.push(b);
    }
    // Fixed schedule rather than a random call, so the flash never repeats in a
    // way that reads as a loop, and update() stays deterministic.
    const schedule = [2.2, 5.4, 8.1, 12.6, 16.2, 20.4, 25.1];
    let idx = 0, elapsed = 0, power = 0;

    /* ── The camp at the foot ────────────────────────────────── */
    // Small and clustered, off to one side of the track.
    const camp = new THREE.Group();
    camp.position.set(-6, 0, 70);
    group.add(camp);
    const tents = [];
    for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const r = 30 + Math.random() * 20;
        const g = new THREE.Group();
        g.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
        camp.add(g);
        column(g, 6.5, 0.7, 11, CAMP, 0, 5.5, 0, 6, g);
        tents.push({ g, phase: i });
    }
    // Aaron's tent at the centre, larger and paler.
    column(camp, 12, 0.9, 17, 0xd8c49a, 0, 8.5, 0, 7, camp);
    // Campfire, the only warm point down here.
    const fire = new THREE.Mesh(
        new THREE.ConeGeometry(3, 7, 5),
        new THREE.MeshBasicMaterial({ color: 0xffa53a, transparent: true, opacity: 0.9, fog: false })
    );
    fire.position.set(0, 3.2, 19);
    camp.add(fire);
    const fireLight = new THREE.PointLight(0xff8c2a, 2.6, 90, 2);
    fireLight.position.set(0, 7, 19);
    camp.add(fireLight);
    for (let i = 0; i < 10; i++) {
        figure(group, 0x7a6a5a, -6 + Math.cos(i) * 26, 0, 70 + Math.sin(i) * 26, 1.9);
    }

    /* ── Foreground ridge ────────────────────────────────────── */
    // Gives a low camera something to shoot past.
    hill(group, 120, 34, 0x4a3a2c, -10, 168, -0.6, 6);

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 260, 900),
        update(t) {
            // Cloud ring drifts around the summit.
            for (const cl of clouds) {
                const a = t * 0.05 + cl.phase;
                cl.c.position.x = cl.cx + (cl.base.x * Math.cos(a) - cl.base.z * Math.sin(a));
                cl.c.position.z = cl.cz + (cl.base.x * Math.sin(a) + cl.base.z * Math.cos(a));
                cl.c.rotation.y = a;
            }
            // Lightning: charge, double-strike, decay.
            if (t >= schedule[idx % schedule.length]) { elapsed = 0; power = 1; idx++; }
            if (power > 0) {
                elapsed += 1 / 60;
                const env = Math.max(0, 1 - elapsed * 8);
                const flick = env * (0.55 + 0.45 * Math.sin(elapsed * 72));
                bolt.intensity = flick * 11;
                for (let i = 0; i < flashes.length; i++) {
                    flashes[i].material.opacity = flick * (i === idx % 3 ? 0.95 : 0.28);
                }
                if (env <= 0) power = 0;
            } else {
                bolt.intensity *= 0.9;
            }
            const k = 1 + Math.sin(t * 8) * 0.14;
            fire.scale.set(k, k, k);
            fireLight.intensity = 1.5 + Math.sin(t * 10) * 0.3;
            for (const tt of tents) tt.g.rotation.z = Math.sin(t * 0.7 + tt.phase) * 0.02;
        }
    };
}

export default { build };
