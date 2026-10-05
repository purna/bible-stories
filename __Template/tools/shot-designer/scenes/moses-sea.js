/**
 * Ch.5 — A Path Through the Water
 * -------------------------------
 * Low-poly Red Sea at night. Two walls of water stand either side of a dry
 * causeway, with the people strung out along it.
 *
 * Low-res pass: the corridor is defined by two vertical water slabs and
 * nothing else. Keep the centre clear — the camera flies straight down it.
 */

import THREE from '../js/three.js';
import { terrain, hill, block, figure, rock, glow, lighting } from './lib/lowpoly.js';

const SKY = 0x0a1430;
const SEA_DEEP = 0x0a2a4a;
const SEA_EDGE = 0x1a5a80;
const SAND = 0x9c8050;
const SAND_DARK = 0x6e5a38;

export function build(group) {
    // Night, lit from above and behind: the water needs rim light to read.
    lighting(group, 0x6a90c8, 0x14203a, 0.6, 0xa8c8f0, 0.7, [0, 60, -30]);
    glow(group, 5, 0xe8f0ff, 0, 60, -170);

    /* ── The sea floor ────────────────────────────────────────── */
    terrain(group, 260, 260, 0, 0, -1.4, 1.2, 0x4a3a24, 20);

    /* ── Two walls of water ──────────────────────────────────── */
    // Built as stacked slabs of decreasing width so the wall tapers as it rises,
    // and so the camera can read it as water rather than a blue box.
    const walls = [];
    for (const side of [-1, 1]) {
        const wall = new THREE.Group();
        wall.position.set(side * 34, 0, 0);
        group.add(wall);

        const slabs = [];
        for (let i = 0; i < 7; i++) {
            const h = 5;
            const y = -1.2 + i * h;
            const inset = i * 0.9;
            const geo = new THREE.BoxGeometry(22 - inset * 2, h, 190);
            const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
                color: i % 2 ? SEA_EDGE : SEA_DEEP,
                flatShading: true,
                roughness: 0.28,
                metalness: 0.06,
                transparent: true,
                opacity: 0.94
            }));
            mesh.position.set(0, y + h / 2, 0);
            wall.add(mesh);
            slabs.push({ mesh, baseX: 0, i });
        }
        // Crest foam: bright caps catching the moonlight.
        for (let i = 0; i < 5; i++) {
            const crest = new THREE.Mesh(
                new THREE.IcosahedronGeometry(2.6 + Math.random() * 1.6, 0),
                new THREE.MeshBasicMaterial({ color: 0xdff0ff, transparent: true, opacity: 0.5, fog: false })
            );
            crest.position.set((Math.random() - 0.5) * 16, 34 + Math.random() * 5, -80 + i * 40);
            wall.add(crest);
            slabs.push({ mesh: crest, isCrest: true, phase: Math.random() * 6 });
        }
        walls.push({ group: wall, slabs, side });
    }

    /* ── The dry causeway ────────────────────────────────────── */
    // A raised sand path between the walls, running along Z.
    block(group, 26, 2.2, 200, SAND, 0, -0.2, 0);
    block(group, 20, 0.5, 200, 0xac9058, 0, 1.0, 0);
    // Scattered stones so the path is not a clean ribbon.
    for (let i = 0; i < 26; i++) {
        rock(group, 0.5 + Math.random() * 1.1, SAND_DARK,
            (Math.random() - 0.5) * 18, 1.0, -90 + Math.random() * 180);
    }

    /* ── Distant shores ──────────────────────────────────────── */
    hill(group, 34, 14, 0x3a2e1e, -110, -40, -1.4, 6);
    hill(group, 40, 18, 0x34281a, 110, 10, -1.4, 6);
    hill(group, 28, 11, 0x3e3220, -100, 60, -1.4, 6);
    for (let i = 0; i < 10; i++) {
        rock(group, 1.6 + Math.random() * 2.4, 0x3e3220, (Math.random() < 0.5 ? -1 : 1) * (80 + Math.random() * 50), -0.5, (Math.random() - 0.5) * 190);
    }

    /* ── The people on the path ──────────────────────────────── */
    // A long column: the chapter is about a people moving, not standing.
    const people = [];
    for (let i = 0; i < 22; i++) {
        const lane = (i % 2 ? 1 : -1) * (3 + Math.random() * 6);
        const z = -85 + i * 8 + (Math.random() - 0.5) * 4;
        const f = figure(group, i % 3 === 0 ? 0x8a6a4a : 0x6a5440, lane, 1.2, z, 0.85 + Math.random() * 0.25);
        people.push({ f, lane, z, phase: Math.random() * 6 });
    }

    /* ── Two markers at the head and tail of the column ──────── */
    block(group, 1.2, 9, 1.2, 0x4a3a28, -9, 5.5, -92);
    block(group, 1.2, 9, 1.2, 0x4a3a28, 9, 5.5, 92);
    for (const z of [-92, 92]) {
        const banner = new THREE.Mesh(
            new THREE.PlaneGeometry(7, 5),
            new THREE.MeshBasicMaterial({ color: 0xa03028, side: THREE.DoubleSide, fog: false })
        );
        banner.position.set(0, 8.5, z);
        group.add(banner);
    }

    const moon = new THREE.PointLight(0xbfd8ff, 1.6, 200, 2);
    moon.position.set(0, 40, 0);
    group.add(moon);

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 90, 280),
        update(t) {
            // The walls breathe: each slab shifts slightly out of phase.
            for (const w of walls) {
                for (const s of w.slabs) {
                    if (s.isCrest) {
                        s.mesh.position.x = Math.sin(t * 0.8 + s.phase) * 2.2;
                        s.mesh.position.y = 34 + Math.sin(t * 1.1 + s.phase) * 1.4;
                    } else {
                        s.mesh.position.x = Math.sin(t * 0.7 + s.i * 0.6 + w.side) * 0.7;
                        s.mesh.rotation.z = Math.sin(t * 0.5 + s.i) * 0.012;
                    }
                }
            }
            // The column walks forward, slowly, forever.
            for (const p of people) {
                p.f.position.z = ((p.z + t * 1.6 + 90) % 180) - 90;
                p.f.position.y = 1.2 + Math.abs(Math.sin(t * 3 + p.phase)) * 0.16;
                p.f.rotation.y = Math.sin(t * 1.4 + p.phase) * 0.3;
            }
        }
    };
}

export default { build };
