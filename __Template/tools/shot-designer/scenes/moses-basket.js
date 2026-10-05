/**
 * Ch.1 — The Child in the River
 * ------------------------------
 * Low-poly night on the Nile. A reed bank, slow water, and an infant basket
 * caught in the current while Miriam keeps watch from the bank.
 *
 * Low-res pass: silhouettes first. The basket is the only warm-lit object, so
 * the eye lands on it from any camera the shot designer picks.
 *
 * Contract: exports build(group) -> { background, fog, update(t) }.
 */

import THREE from '../js/three.js';
import { terrain, add, column, palm, rock, figure, glow, lighting, water } from './lib/lowpoly.js';

const SKY = 0x0e1a22;
const WATER_DEEP = 0x0d2a3c;
const WATER_EDGE = 0x1d5568;
const REED = 0x3a5028;

export function build(group) {
    lighting(group, 0x9fc4d8, 0x2a2418, 0.55, 0xbcd8e8, 0.5, [-24, 30, 14]);

    // Moon: a cool key from behind so the basket catches a rim.
    glow(group, 4.5, 0xdfeef7, 40, 46, -150);

    /* ── Banks ────────────────────────────────────────────────── */
    terrain(group, 220, 60, 0, -70, -1.2, 1.6, 0x8a6c42, 18);
    terrain(group, 200, 40, -10, 44, -1.0, 1.1, 0x9c7a4c, 16);

    /* ── Water ────────────────────────────────────────────────── */
    const river = water(group, 220, 46, WATER_DEEP, WATER_EDGE, -0.5, 30);

    /* ── Reed banks ───────────────────────────────────────────── */
    // Miriam's side: tall reeds the basket drifts past.
    for (let i = 0; i < 26; i++) {
        const x = -95 + i * 7.5 + (Math.random() - 0.5) * 4;
        const z = 20 + (Math.random() - 0.5) * 7;
        const h = 6 + Math.random() * 5;
        column(group, 0.16, 0.1, h, REED, x, h / 2 - 0.4, z, 4);
    }
    // Sparse reeds on the far side for depth.
    for (let i = 0; i < 14; i++) {
        const x = -80 + i * 12 + (Math.random() - 0.5) * 6;
        column(group, 0.15, 0.1, 4 + Math.random() * 3, 0x33481f, x, 2, -24 + (Math.random() - 0.5) * 6, 4);
    }
    for (let i = 0; i < 5; i++) palm(group, -60 + i * 30, 34, 0.9 + Math.random() * 0.3, 0);

    /* ── The basket ───────────────────────────────────────────── */
    // Built as a group so it can bob and drift as one object.
    const basket = new THREE.Group();
    basket.position.set(2, 0.4, 4);
    group.add(basket);

    add(basket, new THREE.BoxGeometry(5.2, 0.35, 3.6), 0xc9a86a, 0, 0, 0, basket);
    // Woven sides: four thin walls, alternating tone for a wicker read.
    add(basket, new THREE.BoxGeometry(5.2, 2.2, 0.3), 0xb8924f, 0, 1.1, 1.8, basket);
    add(basket, new THREE.BoxGeometry(5.2, 2.2, 0.3), 0xa8813f, 0, 1.1, -1.8, basket);
    add(basket, new THREE.BoxGeometry(0.3, 2.2, 3.6), 0xc9a86a, 2.6, 1.1, 0, basket);
    add(basket, new THREE.BoxGeometry(0.3, 2.2, 3.6), 0xa8813f, -2.6, 1.1, 0, basket);
    // Hooded cover over the child.
    add(basket, new THREE.SphereGeometry(2.3, 7, 5, 0, Math.PI * 2, 0, Math.PI / 2), 0xd8c39a, 0, 1.2, 0, basket);

    // A single warm lamp inside the basket: the scene's focal point.
    const lamp = new THREE.PointLight(0xffc46a, 2.2, 26, 2);
    lamp.position.set(0, 2.4, 0);
    basket.add(lamp);

    /* ── Miriam on the bank ───────────────────────────────────── */
    figure(group, 0x6b4a7a, 26, 0, 26, 1.0);
    // A second, smaller figure further along — the family waiting.
    figure(group, 0x5a4468, 44, 0, 30, 0.95);

    /* ── Sand bars to break up the water plane ────────────────── */
    for (let i = 0; i < 6; i++) {
        rock(group, 1.4 + Math.random(), 0x9c7a4c, -70 + i * 26 + Math.random() * 10, -0.3, -6 + (Math.random() - 0.5) * 14);
    }

    return {
        background: new THREE.Color(SKY),
        fog: new THREE.Fog(SKY, 60, 210),
        update(t) {
            river.update(t, 0.14);
            // The basket rides the swell and slowly works downstream.
            basket.position.y = 0.4 + Math.sin(t * 1.1) * 0.18;
            basket.rotation.z = Math.sin(t * 0.9) * 0.05;
            basket.rotation.x = Math.cos(t * 1.3) * 0.04;
            basket.position.x = 2 + Math.sin(t * 0.12) * 6;
            lamp.intensity = 2.0 + Math.sin(t * 6) * 0.25;
        }
    };
}

export default { build };
