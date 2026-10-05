/**
 * Ch.3 — Before the Throne
 * ------------------------
 * Low-poly palace court at night. A pillared hall, an obelisk in the court,
 * and the two figures who face each other across it.
 *
 * Low-res pass: a colonnade of repeated verticals frames the confrontation,
 * with the obelisk as the vertical counterweight opposite.
 */

import THREE from '../js/three.js';
import { terrain, block, column, hill, figure, glow, lighting, rock } from './lib/lowpoly.js';

const SKY = 0x1a0e18;
const STONE = 0xbfae94;
const STONE_DARK = 0x8f8069;
const GOLD = 0xd8a838;
const SAND = 0x7a6448;

export function build(group) {
    // Night interior: cool fill, warm torch key from within the hall.
    lighting(group, 0x8fa8c8, 0x2e2030, 0.5, 0xffd9a0, 0.75, [30, 40, 30]);
    glow(group, 5, 0xcfd8ff, 60, 52, -150);

    /* ── Courtyard floor ──────────────────────────────────────── */
    const floorGeo = new THREE.PlaneGeometry(200, 200, 1, 1);
    floorGeo.rotateX(-Math.PI / 2);
    const floor = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({
        color: SAND, flatShading: true, roughness: 1
    }));
    floor.position.y = -0.5;
    group.add(floor);

    // Distance: low dunes beyond the walls so the horizon is not empty.
    hill(group, 30, 10, 0x5a4630, -90, -80, -0.5, 6);
    hill(group, 26, 8, 0x54402c, 80, -90, -0.5, 6);
    for (let i = 0; i < 10; i++) rock(group, 1.2 + Math.random() * 1.6, 0x54402c, (Math.random() - 0.5) * 190, 0, -60 - Math.random() * 40);

    /* ── The pillared hall ────────────────────────────────────── */
    // Placed to one side so the courtyard stays open for the camera.
    const hall = new THREE.Group();
    hall.position.set(-34, 0, -8);
    group.add(hall);

    block(hall, 46, 1.6, 34, STONE_DARK, 0, 0.3, 0, hall);        // stylobate
    block(hall, 40, 11, 28, STONE, 0, 6.5, 0, hall);              // cella mass
    block(hall, 41, 0.8, 29, GOLD, 0, 12.4, 0, hall);             // cornice

    // Colonnade across the front: the scene's rhythm.
    const cols = [];
    for (let i = 0; i < 8; i++) {
        const x = -21 + i * 6;
        const c = column(hall, 1.15, 0.95, 12, STONE, x, 7.2, 15.5, 8, hall);
        cols.push(c);
        // Capital and base, two thin blocks each.
        block(hall, 2.8, 0.7, 2.8, GOLD, x, 13.4, 15.5, hall);
        block(hall, 2.6, 0.5, 2.6, STONE_DARK, x, 1.5, 15.5, hall);
    }
    // Architrave resting on the capitals.
    block(hall, 50, 1.4, 4, STONE, 0, 14.6, 15.5, hall);
    // Entablature and a shallow pediment.
    block(hall, 48, 1.1, 30, STONE, 0, 16.2, 0, hall);
    const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(0.001, 24, 9, 3),
        new THREE.MeshStandardMaterial({ color: STONE, flatShading: true, roughness: 1 })
    );
    ped.position.set(0, 20.5, 15.5);
    ped.rotation.x = -Math.PI / 2;
    ped.rotation.z = Math.PI;
    ped.scale.set(1, 1, 0.55);
    hall.add(ped);

    // Dark doorway: the interior the camera can read as depth.
    block(hall, 7, 9, 0.6, 0x1a1220, 0, 5.2, 14.1, hall);

    /* ── Obelisk in the court ─────────────────────────────────── */
    // Opposite the hall, so the two masses bracket the confrontation.
    const ob = new THREE.Group();
    ob.position.set(30, 0, 6);
    group.add(ob);
    block(ob, 7, 1.4, 7, STONE_DARK, 0, 0.2, 0, ob);
    block(ob, 5.4, 1.0, 5.4, STONE, 0, 1.3, 0, ob);
    const shaft = column(ob, 1.5, 1.15, 20, GOLD, 0, 11.8, 0, 4, ob);
    void shaft;
    // Pyramidion.
    const cap = new THREE.Mesh(
        new THREE.ConeGeometry(1.6, 3, 4),
        new THREE.MeshStandardMaterial({ color: 0xf0d070, flatShading: true, roughness: 1 })
    );
    cap.position.y = 23.2;
    cap.rotation.y = Math.PI / 4;
    ob.add(cap);

    /* ── Braziers ─────────────────────────────────────────────── */
    const flames = [];
    for (const [x, z] of [[-6, 16], [10, 16], [-14, -6], [18, -4]]) {
        column(group, 1.1, 0.7, 5, STONE_DARK, x, 2.5, z, 6);
        const bowl = new THREE.Mesh(
            new THREE.ConeGeometry(1.7, 1.8, 6),
            new THREE.MeshStandardMaterial({ color: 0x6a5a44, flatShading: true, roughness: 1 })
        );
        bowl.position.set(x, 5.6, z);
        bowl.rotation.x = Math.PI;
        group.add(bowl);
        const f = new THREE.Mesh(
            new THREE.ConeGeometry(1.2, 3, 5),
            new THREE.MeshBasicMaterial({ color: 0xffa53a, transparent: true, opacity: 0.85, fog: false })
        );
        f.position.set(x, 7.4, z);
        group.add(f);
        flames.push({ f, phase: x * 0.7 + z * 0.3 });
    }
    const torch = new THREE.PointLight(0xff9a3a, 2.4, 60, 2);
    torch.position.set(2, 9, 8);
    group.add(torch);

    /* ── The two figures ──────────────────────────────────────── */
    // Facing each other across the courtyard: the chapter's whole content.
    figure(group, 0xd8c8a0, -6, 0, 22, 1.15);     // the king, in the doorway light
    figure(group, 0x7a5a3a, 14, 0, 20, 1.1);       // Moses, staff in hand
    const staff = column(group, 0.22, 0.22, 9, 0x6a4a28, 16.4, 4.5, 20, 5);
    void staff;

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 80, 250),
        update(t) {
            for (const fl of flames) {
                const k = 1 + Math.sin(t * 8 + fl.phase) * 0.14 + Math.sin(t * 17 + fl.phase) * 0.07;
                fl.f.scale.set(k, k, k);
            }
            torch.intensity = 2.2 + Math.sin(t * 11) * 0.35;
            // Brazier light breathes across the colonnade.
            cols.forEach((c, i) => { c.rotation.y = Math.sin(t * 0.15 + i) * 0.004; });
        }
    };
}

export default { build };
