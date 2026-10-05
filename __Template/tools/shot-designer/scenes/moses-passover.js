/**
 * Ch.4 — Passover Night
 * ----------------------
 * Low-poly village at night, the night of the first Passover. Flat-roofed
 * houses, a marked doorway, and a table set for a meal eaten in haste.
 *
 * Low-res pass: dark massing with warm doorways. The lit door marked with the
 * blood is the only doorway with a red lintel, so it reads instantly.
 */

import THREE from '../js/three.js';
import { terrain, block, column, palm, figure, glow, lighting, rock } from './lib/lowpoly.js';

const SKY = 0x100808;
const MUD = 0x8a6a48;
const MUD_DARK = 0x5e4630;
const STONE = 0x9a8a6a;
const FIRE = 0xff8c2a;
const BLOOD = 0x8e2018;

export function build(group) {
    // Deep night, but lifted enough that the camera can read the village and the
    // marked doorway. The doorway light stays the brightest thing in frame.
    lighting(group, 0x8ea6d0, 0x453422, 0.95, 0xc0cfe8, 0.6, [40, 40, 20]);
    glow(group, 4, 0xe8eefc, -50, 50, -150);

    /* ── Ground ───────────────────────────────────────────────── */
    terrain(group, 200, 200, 0, 0, -0.5, 1.0, 0x6b5236, 18);

    /* ── Houses ───────────────────────────────────────────────── */
    // Laid out from the Beth Shean pattern: a street with houses flanking it on
    // both sides, clustered irregularly at varied sizes and angles, some with
    // courtyards and some two-storey. A grid of identical boxes reads as a
    // model, not a village.
    const houses = [];
    const MUD_TONES = [0x8a6a48, 0x7e6244, 0x94724e, 0x6f5638, 0x86683f];

    /** One dwelling: main block, optional upper storey, parapet, doorway. */
    function house(x, z, w, d, h, rot, storeys, tone) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        g.rotation.y = rot;
        group.add(g);
        const c = MUD_TONES[tone % MUD_TONES.length];
        block(g, w, h, d, c, 0, h / 2, 0, g);
        if (storeys) {
            const h2 = h * 0.8;
            // Set back, so a two-storey house has a visible step.
            block(g, w * 0.72, h2, d * 0.72, MUD_TONES[(tone + 2) % MUD_TONES.length], 0, h + h2 / 2, 0, g);
            block(g, w * 0.78, 0.6, d * 0.78, MUD_DARK, 0, h + h2 + 0.1, 0, g);
        }
        // Flat roof with a low parapet on the front and sides.
        block(g, w + 0.7, 0.6, d + 0.7, MUD_DARK, 0, h + 0.2, 0, g);
        block(g, w + 0.7, 1.0, 0.5, MUD_DARK, 0, h + 0.7, d / 2, g);
        block(g, 0.5, 1.0, d + 0.7, MUD_DARK, w / 2, h + 0.7, 0, g);
        block(g, 0.5, 1.0, d + 0.7, MUD_DARK, -w / 2, h + 0.7, 0, g);
        // Dark doorway on the street side.
        const door = new THREE.Mesh(
            new THREE.PlaneGeometry(1.4, Math.min(3, h * 0.7)),
            new THREE.MeshBasicMaterial({ color: 0x2a1c10, fog: false })
        );
        door.position.set(w * 0.18, Math.min(3, h * 0.7) / 2, d / 2 + 0.36);
        g.add(door);
        houses.push({ g, h, phase: x * 0.13 + z * 0.07 });
        return g;
    }

    // The street runs along X at z = 30, curving slightly. Houses sit on both
    // sides at irregular intervals and angles, some set back behind others.
    const street = [
        [-46, 20, 13, 11, 7, 0.06, 0, 0], [-28, 24, 10, 9, 6, -0.12, 0, 2],
        [-12, 19, 15, 12, 9, 0.03, 1, 1], [4, 25, 11, 10, 7, 0.15, 0, 3],
        [22, 20, 16, 13, 10, -0.05, 1, 0], [42, 24, 12, 10, 7, 0.1, 0, 4]
    ];
    const backStreet = [
        [-38, 44, 14, 12, 8, -0.08, 0, 1], [-16, 48, 11, 10, 7, 0.12, 0, 4],
        [8, 45, 17, 14, 10, -0.04, 1, 2], [34, 50, 12, 11, 7, 0.09, 0, 0]
    ];
    const far = [
        [-30, -14, 13, 11, 7, 0.2, 0, 3], [2, -20, 15, 12, 9, -0.1, 1, 1],
        [30, -12, 12, 10, 7, 0.05, 0, 2], [56, -22, 14, 12, 8, 0.16, 0, 4]
    ];
    for (const [x, z, w, d, h, r, s, t] of [...street, ...backStreet, ...far]) {
        house(x, z, w, d, h, r, s, t);
    }

    // Courtyard walls: low enclosures that break up the roofscape.
    for (const [x, z, w, d] of [[-20, 34, 16, 12], [16, 32, 14, 11], [38, 36, 12, 10]]) {
        block(group, w, 1.6, 0.6, MUD_DARK, x, 0.8, z - d / 2);
        block(group, 0.6, 1.6, d, MUD_DARK, x - w / 2, 0.8, z);
        block(group, 0.6, 1.6, d, MUD_DARK, x + w / 2, 0.8, z);
    }

    /* ── The marked house ─────────────────────────────────────── */
    // Dead centre and slightly forward: the chapter's subject.
    const marked = new THREE.Group();
    marked.position.set(-6, 0, 33);
    group.add(marked);
    block(marked, 15, 8, 12, 0x94724e, 0, 4, 0, marked);
    block(marked, 15.8, 0.7, 12.8, MUD_DARK, 0, 8.2, 0, marked);
    // Doorway, lit from within.
    block(marked, 4.2, 6, 0.5, 0x1a1008, 0, 3, 6.1, marked);
    const glowPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(3.8, 5.6),
        new THREE.MeshBasicMaterial({ color: 0xffb45a, fog: false })
    );
    glowPanel.position.set(0, 2.9, 6.35);
    marked.add(glowPanel);
    // The blood on the lintel and posts — the detail the chapter turns on.
    // Unlit so it stays legible in the dark instead of vanishing into shadow.
    const bloodMat = new THREE.MeshBasicMaterial({ color: BLOOD, fog: false });
    const lintel = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.55, 0.6), bloodMat);
    lintel.position.set(0, 6.2, 6.2); marked.add(lintel);
    for (const px of [-2.2, 2.2]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.55, 6, 0.6), bloodMat);
        post.position.set(px, 3, 6.2); marked.add(post);
    }
    const doorLight = new THREE.PointLight(0xffa040, 2.6, 34, 2);
    doorLight.position.set(-6, 4, 41);
    group.add(doorLight);
    // A second, wider warm pool so the marked house sits in visible ground.
    const yardLight = new THREE.PointLight(0xffb060, 1.6, 70, 2);
    yardLight.position.set(-6, 10, 45);
    group.add(yardLight);

    /* ── Low table for the meal ──────────────────────────────── */
    const table = new THREE.Group();
    table.position.set(-19, 0, 33);
    group.add(table);
    block(table, 6, 0.4, 3, STONE, 0, 1.5, 0, table);
    for (const [dx, dz] of [[-2.4, -1.1], [2.4, -1.1], [-2.4, 1.1], [2.4, 1.1]]) {
        block(table, 0.35, 1.5, 0.35, STONE, dx, 0.75, dz, table);
    }
    // Lamb, bread and a bowl: read at silhouette scale.
    const lamb = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.1, 0),
        new THREE.MeshStandardMaterial({ color: 0xe4dccc, flatShading: true, roughness: 1 })
    );
    lamb.scale.set(1.5, 0.9, 1);
    lamb.position.set(-1.2, 2.2, 0);
    table.add(lamb);
    for (const [bx, r] of [[0.6, 0.5], [1.7, 0.42], [2.6, 0.36]]) {
        const loaf = new THREE.Mesh(
            new THREE.SphereGeometry(r, 7, 5),
            new THREE.MeshStandardMaterial({ color: 0xc09048, flatShading: true, roughness: 1 })
        );
        loaf.scale.y = 0.6;
        loaf.position.set(bx, 2.0, 0.3);
        table.add(loaf);
    }
    // Unleavened bread stacked on a mat by the door.
    for (let i = 0; i < 5; i++) {
        const disc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.7, 0.7, 0.16, 8),
            new THREE.MeshStandardMaterial({ color: 0xd8b070, flatShading: true, roughness: 1 })
        );
        disc.position.set(3.4, 0.1 + i * 0.17, 6);
        group.add(disc);
    }

    /* ── Brazier ──────────────────────────────────────────────── */
    column(group, 1.1, 0.6, 3.4, STONE, 6, 1.7, 22, 6);
    const brazier = new THREE.Mesh(
        new THREE.ConeGeometry(1.5, 3.4, 6),
        new THREE.MeshBasicMaterial({ color: FIRE, transparent: true, opacity: 0.9, fog: false })
    );
    brazier.position.set(6, 4.6, 22);
    group.add(brazier);

    /* ── Scatter ──────────────────────────────────────────────── */
    for (let i = 0; i < 6; i++) palm(group, -50 + i * 20 + (Math.random() - 0.5) * 8, -34 - Math.random() * 14, 0.8 + Math.random() * 0.4);
    for (let i = 0; i < 12; i++) rock(group, 0.5 + Math.random() * 1, 0x5a4630, (Math.random() - 0.5) * 150, 0, (Math.random() - 0.5) * 150);
    figure(group, 0x6a4a3a, -9, 0, 18, 1.0);
    figure(group, 0x8a6a4a, 5, 0, 16, 0.95);

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 50, 190),
        update(t) {
            const k = 1 + Math.sin(t * 7.5) * 0.13 + Math.sin(t * 16) * 0.06;
            brazier.scale.set(k, k, k);
            doorLight.intensity = 2.4 + Math.sin(t * 5.5) * 0.3;
            // Torch flicker on the near walls.
            for (const h of houses) {
                h.g.position.y = Math.sin(t * 0.4 + h.h) * 0.01;
            }
        }
    };
}

export default { build };
