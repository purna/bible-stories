/**
 * Ch.6 — Bread in the Wilderness
 * -------------------------------
 * Low-poly desert camp at daybreak. Tents, a fire, and manna falling over the
 * camp like snow.
 *
 * Low-res pass: pale flecks against warm ground. Density is the signal, so the
 * points are numerous and small rather than large and few.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, figure, rock, palm, glow, lighting, precipitation } from './lib/lowpoly.js';

const SKY = 0x2a1808;
const SAND = 0xc09050;
const SAND_DARK = 0x8a6234;
const TENT = 0xd8c49a;
const TENT_DARK = 0xa88a5a;

export function build(group) {
    // Warm dawn: low key light, strong sky fill.
    lighting(group, 0xffe0b0, 0x7a5228, 0.85, 0xfff0d0, 1.1, [-50, 30, 40]);
    glow(group, 6, 0xfff2cc, -80, 26, -150);

    /* ── Ground and dunes ────────────────────────────────────── */
    terrain(group, 260, 240, 0, 0, -0.6, 1.8, SAND, 22);
    for (const [x, z, r, h] of [[-100, -60, 30, 11], [70, -80, 36, 14], [110, 40, 26, 9], [-80, 70, 24, 8]]) {
        hill(group, r, h, SAND_DARK, x, z, -0.6, 7);
    }

    /* ── The camp ────────────────────────────────────────────── */
    // A loose ring, open toward the camera so the middle stays readable.
    const tents = [];
    const spots = [
        [-26, 6], [-12, 24], [4, 28], [20, 18], [30, 2],
        [22, -16], [4, -22], [-14, -20], [-30, -8], [-6, 6]
    ];
    for (let i = 0; i < spots.length; i++) {
        const [x, z] = spots[i];
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        g.rotation.y = Math.random() * Math.PI;
        group.add(g);
        const r = 4.2 + Math.random() * 1.2;
        // Cone tent with a darker skirt at the base.
        column(g, r, 0.35, 7, TENT, 0, 3.5, 0, 7, g);
        column(g, r * 1.04, r * 0.98, 1.2, TENT_DARK, 0, 0.6, 0, 7, g);
        // Dark doorway slit facing roughly forward.
        const door = new THREE.Mesh(
            new THREE.PlaneGeometry(1.5, 3.2),
            new THREE.MeshBasicMaterial({ color: 0x2a1c10, fog: false })
        );
        door.position.set(0, 1.7, r * 0.96);
        g.add(door);
        tents.push({ g, phase: i * 0.8 });
    }

    /* ── Central fire ────────────────────────────────────────── */
    // The camp's warm heart and the visual anchor for orbiting shots.
    for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        rock(group, 0.7, 0x6a5240, Math.cos(a) * 2.4, 0.2, Math.sin(a) * 2.4);
    }
    for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const log = block(group, 3.4, 0.4, 0.4, 0x4a3420, 0, 0.5, 0);
        log.rotation.y = a;
        log.position.set(Math.cos(a) * 0.6, 0.5 + i * 0.06, Math.sin(a) * 0.6);
    }
    const fire = new THREE.Mesh(
        new THREE.ConeGeometry(1.8, 4.2, 6),
        new THREE.MeshBasicMaterial({ color: 0xffa53a, transparent: true, opacity: 0.88, fog: false })
    );
    fire.position.y = 2.4;
    group.add(fire);
    const fireLight = new THREE.PointLight(0xff8c2a, 3, 60, 2);
    fireLight.position.set(0, 4, 0);
    group.add(fireLight);

    /* ── Manna falling ───────────────────────────────────────── */
    // Pale, small, plentiful. The chapter's whole event.
    const manna = precipitation(group, 900, 0xfff4d8, 180, 60, 14, 0.55);

    // A drift of it already on the ground, so the fall has a destination.
    for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 34;
        const flake = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 0.12, 6),
            new THREE.MeshStandardMaterial({ color: 0xf4e8c8, flatShading: true, roughness: 1 })
        );
        flake.position.set(Math.cos(a) * r, 0.1, Math.sin(a) * r);
        group.add(flake);
    }

    /* ── Scatter ─────────────────────────────────────────────── */
    for (let i = 0; i < 5; i++) palm(group, -60 + i * 32, 48 + (Math.random() - 0.5) * 12, 0.9);
    for (let i = 0; i < 16; i++) {
        rock(group, 0.6 + Math.random() * 1.6, SAND_DARK, (Math.random() - 0.5) * 190, 0, (Math.random() - 0.5) * 190);
    }
    for (let i = 0; i < 7; i++) {
        figure(group, i % 2 ? 0x7a5a3a : 0x8a6a44, -22 + i * 7, 0, 34 + (Math.random() - 0.5) * 6, 0.9);
    }
    // One figure stooping to gather: the chapter's action.
    const gatherer = figure(group, 0x6a4a34, 12, 0, 12, 0.95);
    gatherer.rotation.x = 0.5;

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 70, 230),
        update(t) {
            manna.update(t);
            const k = 1 + Math.sin(t * 8) * 0.14 + Math.sin(t * 18) * 0.07;
            fire.scale.set(k, k, k);
            fireLight.intensity = 2.8 + Math.sin(t * 10) * 0.4;
            // Tents breathe on the wind, very slightly.
            for (const t2 of tents) {
                t2.g.rotation.z = Math.sin(t * 0.5 + t2.phase) * 0.012;
            }
        }
    };
}

export default { build };
