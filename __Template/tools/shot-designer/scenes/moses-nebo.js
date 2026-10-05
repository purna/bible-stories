/**
 * Ch.10 — The Land from Afar
 * --------------------------
 * Low-poly Mount Nebo at first light. The high shoulder of the ridge in the
 * foreground, and beyond it the plain of the promised land: green, watered,
 * hazing back into the distance.
 *
 * Low-res pass: the only bright, saturated scene in the set. The land is built
 * as ONE continuous surface whose vertex colours grade from green underfoot to
 * pale haze at the horizon — banded planes left visible slab edges and made the
 * land look like it was floating. Distance is carried by the colour grade plus
 * a few receding ridge lines, not by separate rectangles.
 *
 * Contract: exports build(group) -> { background, fog, update(t) }.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, column, figure, rock, palm, glow, lighting } from './lib/lowpoly.js';

const SKY = 0xffd84d;
const HAZE = 0xd8a058;
const ROCK = 0xa87848;
const ROCK_DARK = 0x7c5430;
const GRASS = 0x5c8a34;
const WATER = 0x2a6a8a;

export function build(group) {
    // Open daylight. Strong sun, big sky fill — the opposite of every other
    // scene in the set, which is the point of the chapter.
    lighting(group, 0xfff0c0, 0x8a6a3a, 1.0, 0xfff4d8, 1.5, [70, 60, 50]);
    glow(group, 9, 0xfffbe8, 130, 70, -180);

    /* ── The land: one continuous graded surface ────────────── */
    // Vertex colours do the atmospheric perspective. A single mesh means no
    // seams, no floating edges, and no visible tile boundaries.
    const LAND = { w: 1600, d: 900, segX: 40, segZ: 26, y: -8, z: -330 };
    const landGeo = new THREE.PlaneGeometry(LAND.w, LAND.d, LAND.segX, LAND.segZ);
    landGeo.rotateX(-Math.PI / 2);
    {
        const pos = landGeo.attributes.position;
        const near = new THREE.Color(GRASS);
        const mid = new THREE.Color(0x8fae52);
        const far = new THREE.Color(0xc8c48c);
        const c = new THREE.Color();
        const colors = new Float32Array(pos.count * 3);
        for (let i = 0; i < pos.count; i++) {
            // z runs from +d/2 (near, behind the viewer) to -d/2 (far).
            const t = Math.min(1, Math.max(0, (LAND.d / 2 - pos.getZ(i)) / LAND.d));
            if (t < 0.35) c.copy(near).lerp(mid, t / 0.35);
            else c.copy(mid).lerp(far, (t - 0.35) / 0.65);
            // Gentle roll so the plain is not a table.
            pos.setY(i, Math.sin(pos.getX(i) * 0.012) * 5 + Math.cos(pos.getZ(i) * 0.008) * 4);
            colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        }
        landGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        landGeo.computeVertexNormals();
    }
    const land = new THREE.Mesh(landGeo, new THREE.MeshStandardMaterial({
        vertexColors: true, flatShading: true, roughness: 1
    }));
    land.position.set(0, LAND.y, LAND.z);
    land.userData.excludeFromBounds = true;
    group.add(land);

    /* ── Receding ridge lines: the only depth cue needed now ── */
    // Low, wide, progressively paler. They sit ON the land surface.
    const ridges = [
        { z: -560, w: 900, h: 34, c: 0xa8b878 },
        { z: -680, w: 1100, h: 46, c: 0xc0c090 },
        { z: -790, w: 1300, h: 58, c: 0xd4d0a4 }
    ];
    for (const r of ridges) {
        for (let i = 0; i < 5; i++) {
            const h = hill(group, r.w / 5 * (0.8 + Math.random() * 0.5), r.h * (0.7 + Math.random() * 0.6),
                r.c, -r.w / 2 + (i + 0.5) * (r.w / 5) + (Math.random() - 0.5) * 40, r.z, LAND.y - 2, 6);
            h.userData.excludeFromBounds = true;
        }
    }

    /* ── The river ───────────────────────────────────────────── */
    // One bright line winding across the plain: the "watered" quality.
    const riverGeo = new THREE.PlaneGeometry(1300, 26, 60, 3);
    riverGeo.rotateX(-Math.PI / 2);
    const river = new THREE.Mesh(riverGeo, new THREE.MeshStandardMaterial({
        color: WATER, flatShading: true, roughness: 0.3, metalness: 0.05
    }));
    river.position.set(0, LAND.y + 2.2, -150);
    river.userData.excludeFromBounds = true;
    group.add(river);
    const riverBase = Float32Array.from(riverGeo.attributes.position.array);

    /* ── Trees, olives and palms ─────────────────────────────── */
    for (let i = 0; i < 70; i++) {
        const x = (Math.random() - 0.5) * 420;
        const z = -20 - Math.random() * 120;
        // Keep the river line clear.
        if (Math.abs(z + 150) < 22 && Math.abs(x) < 300) continue;
        if (Math.random() < 0.35) palm(group, x, z, 1.4 + Math.random() * 0.8, LAND.y + 1);
        else {
            const g = new THREE.Group();
            g.position.set(x, LAND.y, z);
            g.scale.setScalar(1.3 + Math.random() * 0.9);
            group.add(g);
            column(g, 0.9, 1.3, 6, 0x5a4028, 0, 3, 0, 5, g);
            const canopy = new THREE.Mesh(
                new THREE.IcosahedronGeometry(4.6, 0),
                new THREE.MeshStandardMaterial({ color: 0x4a7030, flatShading: true, roughness: 1 })
            );
            canopy.position.set(0, 8, 0);
            canopy.scale.set(1, 0.7, 1);
            g.add(canopy);
        }
    }

    /* ── The ridge we stand on ───────────────────────────────── */
    // Foreground mass, close and dark, framing the bottom of the shot.
    terrain(group, 620, 200, 0, 96, 6, 7, ROCK, 20);
    hill(group, 116, 54, ROCK_DARK, -140, 140, 4, 6);
    hill(group, 100, 46, ROCK_DARK, 132, 152, 4, 6);
    for (let i = 0; i < 26; i++) {
        rock(group, 4 + Math.random() * 9, ROCK_DARK,
            (Math.random() - 0.5) * 560, 4, 30 + Math.random() * 110);
    }
    // A cairn on the high point, and the two figures at it.
    for (let i = 0; i < 6; i++) {
        rock(group, 5.5 - i * 0.7, 0x6a4830, -20, 14 + i * 4, 74);
    }
    figure(group, 0x8a6a44, -20, 20, 70, 4.0);
    figure(group, 0x6a5a3a, 22, 12, 86, 3.6);
    // The cliff lip they are standing behind.
    block(group, 400, 16, 24, ROCK, 0, 2, 20);

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(HAZE, 420, 1250),
        update(t) {
            // Only motion in the scene: the river catching the light. Everything
            // else is still, because the stillness is the chapter's idea.
            const p = riverGeo.attributes.position;
            for (let i = 0; i < p.count; i++) {
                p.setY(i, Math.sin(riverBase[i * 3] * 0.06 + t * 1.0) * 1.6);
            }
            p.needsUpdate = true;
        }
    };
}

export default { build };
