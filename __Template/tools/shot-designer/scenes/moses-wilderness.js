/**
 * Ch.9 — The Long Wilderness
 * --------------------------
 * Low-poly desert crossing seen from above. A caravan on a track between
 * dunes, with the horizon empty in every direction — the point of the chapter.
 *
 * Low-res pass: long shadows raking across the dunes do the work. The caravan
 * is small and strung out, so the emptiness reads as the subject.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, figure, rock, palm, camel, glow, lighting } from './lib/lowpoly.js';

const SKY = 0x1a0e08;
const SAND = 0xc4924e;
const SAND_DARK = 0x8a6234;
const SAND_LIGHT = 0xdcb070;

export function build(group) {
    // Raking low sun: long shadows are what sell distance here.
    lighting(group, 0xffcf90, 0x6a4420, 0.75, 0xffe4b0, 1.25, [-90, 26, 20]);
    glow(group, 7, 0xfff0c8, -110, 22, -120);

    /* ── Dunes ───────────────────────────────────────────────── */
    // A field of overlapping cones at varied scale: no visible tiling, and the
    // ridges give the eye something to read depth from.
    const dunes = [];
    for (let i = 0; i < 34; i++) {
        const x = -170 + Math.random() * 340;
        const z = -170 + Math.random() * 340;
        // Keep the caravan track clear.
        if (Math.abs(x) < 22 && Math.abs(z) < 130) continue;
        const r = 14 + Math.random() * 30;
        const h = 6 + Math.random() * 16;
        const c = [SAND, SAND_DARK, SAND_LIGHT][i % 3];
        dunes.push(hill(group, r, h, c, x, z, -0.6, 7));
    }
    terrain(group, 400, 400, 0, 0, -0.8, 1.4, SAND, 26);

    /* ── The track ───────────────────────────────────────────── */
    // A compacted road between the dunes, running roughly along Z.
    const trackGeo = new THREE.PlaneGeometry(26, 300, 1, 8);
    trackGeo.rotateX(-Math.PI / 2);
    const track = new THREE.Mesh(trackGeo, new THREE.MeshStandardMaterial({
        color: 0xb08048, flatShading: true, roughness: 1
    }));
    track.position.y = -0.3;
    group.add(track);

    /* ── The caravan ─────────────────────────────────────────── */
    // Camels, handlers, and bundles. Strung out along the track so a slow
    // lateral crawl reads as a journey.
    const caravan = [];
    for (let i = 0; i < 7; i++) {
        const lane = (i % 2 ? 1 : -1) * (5 + Math.random() * 5);
        const z = -80 + i * 26 + (Math.random() - 0.5) * 8;
        const c = camel(group, lane, z, 1.0 + Math.random() * 0.2, 0.9 + Math.random() * 0.25);
        // Bundles slung either side.
        for (const side of [-1, 1]) {
            const pack = block(c, 2.4, 1.8, 2.0, [0x8a6a4a, 0x7a5a3a, 0x6a5440][i % 3],
                0, 3.4, side * 2.4, c);
            pack.rotation.z = side * 0.1;
        }
        caravan.push({ c, lane, z, phase: i * 0.9 });
    }
    // Two handlers walking beside the lead animal.
    for (let i = 0; i < 2; i++) {
        figure(group, 0x7a5a3a, -9 - i * 4, 0, -96 + i * 10, 0.9);
    }

    /* ── Waymarks ────────────────────────────────────────────── */
    // Cairns the travellers left. Small human marks in a very large space.
    for (const [x, z] of [[-14, -110], [15, -30], [-13, 40], [14, 105]]) {
        for (let i = 0; i < 4; i++) {
            const r = 1.8 - i * 0.35;
            rock(group, r, 0x9a7a52, x + (Math.random() - 0.5) * 0.6, 0.6 + i * 0.8, z + (Math.random() - 0.5) * 0.6);
        }
    }

    /* ── Oases ───────────────────────────────────────────────── */
    for (const [x, z] of [[-60, -30], [72, 66]]) {
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            palm(group, x + Math.cos(a) * 7, z + Math.sin(a) * 7, 1.0 + Math.random() * 0.3);
        }
        const poolGeo = new THREE.CircleGeometry(6, 14);
        poolGeo.rotateX(-Math.PI / 2);
        const pool = new THREE.Mesh(poolGeo, new THREE.MeshStandardMaterial({
            color: 0x2a6a70, flatShading: true, roughness: 0.25, metalness: 0.05
        }));
        pool.position.set(x, 0.1, z);
        group.add(pool);
    }

    /* ── Distance ────────────────────────────────────────────── */
    // Far dunes, low contrast, so the horizon is not a hard line.
    for (let i = 0; i < 12; i++) {
        hill(group, 40 + Math.random() * 30, 10 + Math.random() * 8, 0x9a7448,
            -220 + Math.random() * 440, -230 - Math.random() * 60, -0.8, 6);
    }
    for (let i = 0; i < 14; i++) {
        rock(group, 0.7 + Math.random() * 1.4, SAND_DARK, (Math.random() - 0.5) * 220, 0, (Math.random() - 0.5) * 220);
    }

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 110, 380),
        update(t) {
            // The caravan crawls forward and wraps; the dunes stay put, which is
            // what makes the movement legible as travel.
            for (const cv of caravan) {
                cv.c.position.z = ((cv.z + t * 2.2 + 90) % 180) - 90;
                cv.c.position.x = cv.lane + Math.sin(t * 0.6 + cv.phase) * 1.6;
                // Two steps per cycle: a walk, not a glide.
                cv.c.position.y = Math.abs(Math.sin(t * 2.2 + cv.phase)) * 0.22;
                cv.c.rotation.y = Math.sin(t * 0.5 + cv.phase) * 0.06;
            }
        }
    };
}

export default { build };
