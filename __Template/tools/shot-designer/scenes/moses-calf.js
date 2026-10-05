/**
 * Ch.8 — The Broken Tablets
 * --------------------------
 * Low-poly base of the mountain after the golden calf. The idol on its plinth,
 * the crowd around it, and two broken tablets lying in the foreground.
 *
 * Low-res pass: the calf is gold and everything else is desaturated earth, so
 * it reads as the one wrong thing in the frame.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, figure, rock, glow, lighting } from './lib/lowpoly.js';

const SKY = 0x1a0e06;
const EARTH = 0x7a5c3a;
const EARTH_DARK = 0x5a4028;
const STONE = 0x8a7a60;
const GOLD = 0xd8a828;
const GOLD_HI = 0xf0d060;

export function build(group) {
    // Hot, late light. The gold needs a strong key to look metallic.
    lighting(group, 0xffd0a0, 0x6a4a24, 0.8, 0xfff0c0, 1.2, [-30, 44, 30]);
    glow(group, 5.5, 0xfff0c8, 60, 34, -150);

    /* ── Ground ───────────────────────────────────────────────── */
    terrain(group, 260, 240, 0, 0, -0.6, 1.6, EARTH, 20);
    hill(group, 40, 26, 0x4a3a26, 0, -96, -0.6, 6);      // the mountain, behind
    hill(group, 30, 15, EARTH_DARK, -92, -50, -0.6, 7);
    hill(group, 26, 12, EARTH_DARK, 88, -60, -0.6, 7);

    /* ── The plinth ──────────────────────────────────────────── */
    // Three steps, then a stone base. A dais, not a throne.
    const dais = new THREE.Group();
    dais.position.set(6, 0, -18);
    group.add(dais);
    block(dais, 26, 1.6, 26, STONE, 0, 0.4, 0, dais);
    block(dais, 21, 1.4, 21, 0x9a8a6e, 0, 1.9, 0, dais);
    block(dais, 16, 1.2, 16, STONE, 0, 3.2, 0, dais);

    /* ── The calf ────────────────────────────────────────────── */
    // Built from primitives: body, head, horns, legs. Gold throughout, with a
    // brighter top plane so the key light has something to catch.
    const calf = new THREE.Group();
    // Local to `dais`, which is already at (6, 0, -18) — do not re-apply that.
    calf.position.set(0, 3.8, 0);
    // The idol is the subject of the chapter: oversize it so it dominates the
    // dais rather than reading as a model on a table.
    calf.scale.setScalar(1.45);
    dais.add(calf);

    const goldMat = new THREE.MeshStandardMaterial({
        color: GOLD, flatShading: true, roughness: 0.35, metalness: 0.6
    });
    const goldHi = new THREE.MeshStandardMaterial({
        color: GOLD_HI, flatShading: true, roughness: 0.25, metalness: 0.7
    });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.6, 7, 8), goldMat);
    body.rotation.z = Math.PI / 2;
    body.position.y = 6.2;
    body.scale.set(1, 1, 0.78);
    calf.add(body);
    // Shoulders and haunches, so it is not a plain tube.
    const shoulder = new THREE.Mesh(new THREE.IcosahedronGeometry(3.1, 0), goldMat);
    shoulder.position.set(-1.6, 6.6, 0);
    shoulder.scale.set(1, 0.9, 0.85);
    calf.add(shoulder);
    const haunch = new THREE.Mesh(new THREE.IcosahedronGeometry(3.0, 0), goldMat);
    haunch.position.set(1.8, 6.4, 0);
    haunch.scale.set(1, 0.9, 0.85);
    calf.add(haunch);

    // Neck and head.
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 2.0, 3.4, 7), goldMat);
    neck.position.set(-4.0, 7.6, 0);
    neck.rotation.z = 0.5;
    calf.add(neck);
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 0), goldHi);
    head.position.set(-5.6, 8.8, 0);
    head.scale.set(1.25, 0.95, 0.8);
    calf.add(head);
    const muzzle = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 0), goldMat);
    muzzle.position.set(-7.0, 8.2, 0);
    muzzle.scale.set(1.3, 0.8, 0.8);
    calf.add(muzzle);
    // Horns.
    for (const side of [-1, 1]) {
        const horn = new THREE.Mesh(new THREE.ConeGeometry(0.42, 3.0, 6), goldHi);
        horn.position.set(-5.4, 10.4, side * 1.3);
        horn.rotation.z = 0.3;
        horn.rotation.x = -side * 0.5;
        calf.add(horn);
    }
    // Legs.
    for (const [lx, lz] of [[-2.2, 1.5], [-2.2, -1.5], [2.4, 1.5], [2.4, -1.5]]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.6, 5.2, 6), goldMat);
        leg.position.set(lx, 2.6, lz);
        calf.add(leg);
    }
    // Eyes: two small dark facets, enough to make it feel alive.
    for (const side of [-1, 1]) {
        const eye = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.4, 0),
            new THREE.MeshBasicMaterial({ color: 0x2a1a08, fog: false })
        );
        eye.position.set(-6.6, 9.0, side * 1.3);
        calf.add(eye);
    }

    // A faint gold sheen that travels over the idol.
    const sheen = new THREE.PointLight(0xffd060, 1.2, 40, 2);
    sheen.position.set(6, 24, -18);
    group.add(sheen);

    /* ── The crowd ───────────────────────────────────────────── */
    // Ringed around the dais, loosely, facing inward.
    const crowd = [];
    for (let i = 0; i < 30; i++) {
        const a = (i / 30) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const r = 26 + Math.random() * 26;
        const f = figure(group, [0x6a4a34, 0x7a5a3a, 0x5e4630][i % 3],
            6 + Math.cos(a) * r, 0, -18 + Math.sin(a) * r, 0.85 + Math.random() * 0.3);
        crowd.push({ f, a, r, phase: Math.random() * 6 });
    }

    /* ── The broken tablets ──────────────────────────────────── */
    // Foreground: the chapter's consequence, in the two nearest stones.
    const tablets = new THREE.Group();
    tablets.position.set(-16, 0, 22);
    tablets.rotation.y = 0.5;
    group.add(tablets);
    for (const [tx, tz, tr] of [[-2.4, 0, 0.6], [2.2, 1.2, -0.4]]) {
        const slab = new THREE.Mesh(
            new THREE.BoxGeometry(5.2, 0.7, 7.4),
            new THREE.MeshStandardMaterial({ color: 0xa89878, flatShading: true, roughness: 1 })
        );
        slab.position.set(tx, 0.5, tz);
        slab.rotation.set(0.12, tr, 0.08);
        tablets.add(slab);
        // Fracture line: a wedge cut out of one edge.
        const chip = new THREE.Mesh(
            new THREE.ConeGeometry(1.5, 2.2, 3),
            new THREE.MeshStandardMaterial({ color: 0x8a7a5c, flatShading: true, roughness: 1 })
        );
        chip.position.set(tx + 2.4, 0.8, tz - 2.6);
        chip.rotation.set(1.4, tr, 0.5);
        tablets.add(chip);
    }
    // Scattered gold dust where the idol's melt was.
    for (let i = 0; i < 24; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 8 + Math.random() * 20;
        const dust = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.3 + Math.random() * 0.3, 0),
            new THREE.MeshStandardMaterial({ color: GOLD, flatShading: true, roughness: 0.4, metalness: 0.5 })
        );
        dust.position.set(6 + Math.cos(a) * r, 0.2, -18 + Math.sin(a) * r);
        group.add(dust);
    }

    /* ── Moses on the mountain path ──────────────────────────── */
    figure(group, 0x8a6a44, -10, 0, -46, 1.0);

    for (let i = 0; i < 12; i++) {
        rock(group, 0.8 + Math.random() * 1.8, EARTH_DARK, (Math.random() - 0.5) * 180, 0, (Math.random() - 0.5) * 160);
    }

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 75, 250),
        update(t) {
            // The idol does not move, but light plays over it: the unease.
            sheen.position.x = 6 + Math.sin(t * 0.5) * 14;
            sheen.intensity = 1.0 + Math.sin(t * 1.3) * 0.4;
            calf.rotation.y = Math.sin(t * 0.18) * 0.06;
            // The crowd shifts and sways; nobody is still.
            for (const c of crowd) {
                const drift = Math.sin(t * 0.4 + c.phase) * 1.2;
                c.f.position.x = 6 + Math.cos(c.a) * (c.r + drift);
                c.f.position.z = -18 + Math.sin(c.a) * (c.r + drift);
                c.f.rotation.y = -c.a + Math.PI / 2 + Math.sin(t * 0.6 + c.phase) * 0.2;
            }
        }
    };
}

export default { build };
