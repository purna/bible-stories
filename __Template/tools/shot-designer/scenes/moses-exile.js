/**
 * Ch.2 — Exile and the Burning Bush
 * ----------------------------------
 * Low-poly Midian at the heat of the day. Shepherd's ground, a well, scattered
 * sheep, and a bush that burns without being consumed.
 *
 * Low-res pass: the flame is the only saturated element in an otherwise dusty
 * ochre scene, so it reads from any distance the camera pulls to.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, rock, figure, tree, glow, lighting } from './lib/lowpoly.js';

const SKY = 0x1a0e06;
const SAND = 0xb08048;
const SAND_DARK = 0x8a6234;
const SCRUB = 0x5a5228;

export function build(group) {
    // Hard, high-contrast desert light: short shadows, bleached sky.
    lighting(group, 0xffd9a0, 0x6b4a24, 0.8, 0xfff0c8, 1.35, [-40, 46, 26]);
    glow(group, 6, 0xfff6d0, -70, 40, -160);

    /* ── Ground ───────────────────────────────────────────────── */
    terrain(group, 240, 220, 0, 0, -0.6, 2.2, SAND, 22);
    // Low ridges to break the horizon and give the eye somewhere to go.
    hill(group, 26, 9, SAND_DARK, -95, -70, -0.6, 7);
    hill(group, 34, 12, SAND_DARK, 40, -85, -0.6, 7);
    hill(group, 20, 7, 0x9a7040, 92, -50, -0.6, 6);

    /* ── The well ─────────────────────────────────────────────── */
    // Midian is where Moses kept another man's flock. The well is the scene's
    // anchor before the bush takes over.
    for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        block(group, 2.2, 2.6, 1.4, 0x9c8258, Math.cos(a) * 5, 0.7, Math.sin(a) * 5 + 30);
    }
    block(group, 1.2, 7, 1.2, 0x8a7048, -4.4, 3.5, 30);
    block(group, 1.2, 7, 1.2, 0x8a7048, 4.4, 3.5, 30);
    block(group, 11, 1.2, 1.2, 0x7a6038, 0, 6.8, 30);
    // Dark water disc, slightly below the rim.
    const poolGeo = new THREE.CircleGeometry(4, 14);
    poolGeo.rotateX(-Math.PI / 2);
    const pool = new THREE.Mesh(poolGeo, new THREE.MeshStandardMaterial({
        color: 0x1c3a4a, flatShading: true, roughness: 0.2, metalness: 0.1
    }));
    pool.position.set(0, 0.4, 30);
    group.add(pool);

    /* ── Sheep ────────────────────────────────────────────────── */
    const sheep = [];
    for (let i = 0; i < 9; i++) {
        const g = new THREE.Group();
        const a = Math.random() * Math.PI * 2;
        const r = 24 + Math.random() * 30;
        g.position.set(Math.cos(a) * r, 0, 30 + Math.sin(a) * r);
        group.add(g);
        const body = new THREE.Mesh(
            new THREE.DodecahedronGeometry(1.5, 0),
            new THREE.MeshStandardMaterial({ color: 0xe8e0d0, flatShading: true, roughness: 1 })
        );
        body.scale.set(1.5, 0.85, 1);
        body.position.y = 1.3;
        g.add(body);
        const head = new THREE.Mesh(
            new THREE.DodecahedronGeometry(0.6, 0),
            new THREE.MeshStandardMaterial({ color: 0x3a3028, flatShading: true, roughness: 1 })
        );
        head.position.set(1.6, 1.3, 0);
        g.add(head);
        sheep.push({ g, phase: Math.random() * Math.PI * 2, home: g.position.clone() });
    }

    /* ── Scrub and trees ──────────────────────────────────────── */
    for (let i = 0; i < 7; i++) tree(group, -70 + i * 22 + (Math.random() - 0.5) * 12, -30 - Math.random() * 40, 0.7 + Math.random() * 0.5);
    for (let i = 0; i < 22; i++) {
        rock(group, 0.6 + Math.random() * 1.4, SCRUB, (Math.random() - 0.5) * 180, 0, (Math.random() - 0.5) * 160);
    }

    /* ── Moses and the flock ──────────────────────────────────── */
    figure(group, 0x8a6a4a, -8, 0, 34, 1.0);

    /* ── The Burning Bush ─────────────────────────────────────── */
    // Off to one side, not centred: the camera wants room to push in.
    const bush = new THREE.Group();
    bush.position.set(52, 0, -18);
    group.add(bush);

    // Gnarled trunk.
    const trunk = column(bush, 1.5, 1.0, 7, 0x4a3a22, 0, 3.5, 0, 6);
    trunk.rotation.z = 0.12;
    for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        column(bush, 0.5, 0.25, 4.5, 0x5a4a2c, Math.cos(a) * 1.6, 3.2, Math.sin(a) * 1.6, 5);
    }
    // Dense low-poly foliage.
    for (let i = 0; i < 12; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 3.4;
        const leaf = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1.3 + Math.random() * 1.1, 0),
            new THREE.MeshStandardMaterial({ color: 0x3f6b28, flatShading: true, roughness: 1 })
        );
        leaf.position.set(Math.cos(a) * r, 4.5 + Math.random() * 3.4, Math.sin(a) * r);
        bush.add(leaf);
    }

    // The flame: stacked emissive shells, no light source, so it stays cheap
    // and reads at any distance.
    const flames = [];
    for (let i = 0; i < 4; i++) {
        const f = new THREE.Mesh(
            new THREE.ConeGeometry(3.4 - i * 0.6, 7 - i * 1.1, 6),
            new THREE.MeshBasicMaterial({
                color: [0xffe066, 0xffa53a, 0xff6a1e, 0xff3d10][i],
                transparent: true, opacity: 0.92 - i * 0.16, fog: false
            })
        );
        f.position.y = 6 + i * 1.6;
        bush.add(f);
        flames.push({ f, phase: i * 1.3, baseY: f.position.y });
    }
    const fireLight = new THREE.PointLight(0xff8c2a, 3.2, 70, 2);
    fireLight.position.set(52, 8, -18);
    group.add(fireLight);

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 70, 230),
        update(t) {
            // Flame flicker: each shell pulses on its own offset.
            for (const fl of flames) {
                const k = 1 + Math.sin(t * 7 + fl.phase) * 0.12 + Math.sin(t * 13.7 + fl.phase) * 0.06;
                fl.f.scale.set(k, 1 + (k - 1) * 1.6, k);
                fl.f.rotation.y = t * 0.8 + fl.phase;
            }
            fireLight.intensity = 3.0 + Math.sin(t * 9) * 0.5;
            // Sheep graze: small drift and head-down dip.
            for (const s of sheep) {
                s.g.position.x = s.home.x + Math.sin(t * 0.3 + s.phase) * 3;
                s.g.position.z = s.home.z + Math.cos(t * 0.24 + s.phase) * 2;
                s.g.rotation.y = Math.sin(t * 0.3 + s.phase) * 1.2;
            }
        }
    };
}

export default { build };
