/**
 * The Nile – Low Poly
 * -------------------
 * Default scene for the shot designer, authored procedurally.
 *
 * Contract (see js/scene-library.js): a scene module exports `build(group)`
 * and populates `group`. It may return an object with:
 *
 *   update(t)    called once per frame with elapsed seconds
 *   background   THREE.Color
 *   fog          THREE.Fog
 *
 * Add new scenes by copying this file, changing the geometry, then adding an
 * entry to scenes/manifest.json.
 */

import THREE from '../js/three.js';

const SKY = 0xf4cf98;

const material = color => new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    roughness: 1
});

/** Create a mesh, position it, and attach it to `parent` (default: the scene group). */
function add(group, geometry, color, x, y, z, parent) {
    const mesh = new THREE.Mesh(geometry, material(color));
    mesh.position.set(x, y, z);
    (parent || group).add(mesh);
    return mesh;
}

export function build(group) {
    /* ── Lighting ─────────────────────────────────────────────── */
    group.add(new THREE.HemisphereLight(0xfff0d0, 0x9a6b3a, 0.75));
    const sun = new THREE.DirectionalLight(0xffe2b0, 1.1);
    sun.position.set(-30, 40, 10);
    group.add(sun);

    const sunDisc = new THREE.Mesh(
        new THREE.IcosahedronGeometry(7, 0),
        new THREE.MeshBasicMaterial({ color: 0xfff3c4, fog: false })
    );
    sunDisc.position.set(-40, 32, -150);
    // Decorative backdrop: keep it out of the camera framing bounds, which are
    // computed from the scene's children.
    sunDisc.userData.excludeFromBounds = true;
    group.add(sunDisc);

    /* ── Terrain ──────────────────────────────────────────────── */
    // Banks deliberately overlap the water so the riverbed shows through. The
    // submerged part is tinted to a light blue (see tintSubmerged) so the
    // channel reads as two shades of blue rather than blue-and-yellow.
    const WATER_Y = -0.4;
    const CHANNEL_HALF = 16;

    function terr(w, d, cx, cz, y, jitter, color, segments) {
        const geo = new THREE.PlaneGeometry(w, d, segments, segments);
        geo.rotateX(-Math.PI / 2);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            pos.setY(i, (Math.random() - 0.5) * jitter);
        }
        geo.computeVertexNormals();
        const mesh = add(group, geo, color, cx, y, cz);
        tintSubmerged(geo, cz, y, color);
        // add() builds a fresh material per mesh, so this only affects terrain.
        // The material colour must go white: with vertexColors enabled three.js
        // multiplies it by the vertex colour, and sand x blue = muddy green.
        mesh.material.vertexColors = true;
        mesh.material.color.setHex(0xffffff);
        return mesh;
    }

    // Vertex colour = the sand bank outside the channel, cloud-blue inside it.
    // Everything within the channel is tinted, including the humps that rise
    // above the waterline, so no yellow ever shows through the river.
    function tintSubmerged(geo, cz, baseY, sandHex) {
        const p = geo.attributes.position;
        const sand = new THREE.Color(sandHex);
        const shallow = new THREE.Color(0x4e9ec6);
        const c = new THREE.Color();
        const colors = new Float32Array(p.count * 3);
        for (let i = 0; i < p.count; i++) {
            const wz = p.getZ(i) + cz;          // world z
            const inChannel = 1 - Math.min(1, Math.max(0, (Math.abs(wz) - CHANNEL_HALF) / 14));
            c.copy(sand).lerp(shallow, inChannel);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }

    terr(240, 60, 0, 20, -0.6, 0.8, 0xe3b26a, 24);    // near bank
    terr(260, 110, 0, -70, -0.6, 1.4, 0xdfa75c, 30);  // desert, far side

    /* ── Green river banks ─────────────────────────────────────
     * Separate objects rather than more terrain, so they sit above the water
     * and keep their green: the terrain inside the channel is tinted blue to
     * read as riverbed, and anything sharing that material would go blue too.
     */
    function bank(w, d, cx, cz, color, segments) {
        const geo = new THREE.PlaneGeometry(w, d, segments, Math.max(2, Math.round(segments * d / w)));
        geo.rotateX(-Math.PI / 2);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const t = (pos.getZ(i) + d / 2) / d;        // 0 at water, 1 inland
            pos.setY(i, 0.05 + t * 0.45 + (Math.random() - 0.5) * 0.14);
        }
        geo.computeVertexNormals();
        const m = add(group, geo, color, cx, -0.25, cz);
        return m;
    }
    bank(240, 8, 0, -14, 0x6f9438, 44);               // far bank  z -18..-10
    bank(240, 10, 0, 15, 0x6f9438, 44);                // near bank z  10..20
    bank(240, 5, 0, -20.5, 0x5c7f2e, 36);              // darker band behind it
    bank(240, 6, 0, 22.5, 0x5c7f2e, 36);               // and inland of the near

    /* ── Water (animated in update) ───────────────────────────── */
    // Deep channel blue, with soft drifting cloud reflections on the surface.
    const WATER_D = 20;
    // A near-white cloud colour renders cream under this scene's warm lights
    // (0xfff0d0 hemisphere + 0xffe2b0 sun), so the reflection is a clear blue
    // instead, and the water carries a blue emissive so it stays blue whatever
    // colour the light is.
    const CLOUD = new THREE.Color(0x86bcdd);
    const waterGeo = new THREE.PlaneGeometry(240, WATER_D, 60, 14);
    waterGeo.rotateX(-Math.PI / 2);
    {
        const p = waterGeo.attributes.position;
        const deep = new THREE.Color(0x0d4660);
        const shallow = new THREE.Color(0x2f86ad);
        const colors = new Float32Array(p.count * 3);
        const c = new THREE.Color();
        for (let i = 0; i < p.count; i++) {
            const t = Math.min(1, Math.abs(p.getZ(i)) / (WATER_D / 2));
            c.copy(deep).lerp(shallow, t * t);
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        waterGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
    const waterBase = Array.from(waterGeo.attributes.position.array);
    const waterBaseCol = Float32Array.from(waterGeo.attributes.color.array);
    const waterCol = waterGeo.attributes.color;
    const water = new THREE.Mesh(waterGeo, new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        flatShading: true,
        roughness: 0.35,
        metalness: 0.1,
        // Keeps the river blue under the scene's warm sunlight.
        emissive: 0x0d3b55,
        emissiveIntensity: 0.55
    }));
    water.position.set(0, WATER_Y, 0);
    group.add(water);

    /* ── Dunes ────────────────────────────────────────────────── */
    [
        [-45, -40, 14, 7],
        [40, -30, 16, 6],
        [-15, -70, 22, 10],
        [60, -65, 20, 9],
        [-70, -60, 18, 8]
    ].forEach(([x, z, radius, height]) => {
        const dune = add(group, new THREE.ConeGeometry(radius, height, 7), 0xd39a52, x, height / 2 - 0.5, z);
        dune.rotation.y = Math.random() * 3;
    });

    /* ── Pyramids ─────────────────────────────────────────────── */
    function pyramid(x, z, size, color) {
        const mesh = add(group, new THREE.ConeGeometry(size * 0.7071, size * 0.65, 4), color, x, size * 0.325, z);
        mesh.rotation.y = Math.PI / 4;
        return mesh;
    }
    pyramid(26, -48, 30, 0xf0d391);
    pyramid(48, -58, 22, 0xe9c880);
    pyramid(6, -66, 15, 0xeecf8d);

    /* ── Palm ─────────────────────────────────────────────────── */
    function palm(x, z, scale = 1) {
        const tree = new THREE.Group();
        tree.position.set(x, 0, z);
        tree.scale.setScalar(scale);
        group.add(tree);

        const trunk = add(group, new THREE.CylinderGeometry(0.18, 0.3, 4.5, 5), 0x7a4f2b, 0, 2.2, 0, tree);
        trunk.rotation.z = (Math.random() - 0.5) * 0.25;

        for (let i = 0; i < 7; i++) {
            const leaf = add(group, new THREE.ConeGeometry(0.35, 3, 3), i % 2 ? 0x4f8a2e : 0x5fa036, 0, 4.5, 0, tree);
            leaf.geometry.translate(0, 1.5, 0);
            leaf.rotation.set(0, i * Math.PI * 2 / 7, 0);
            leaf.rotation.z = 1.15;
            leaf.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), i * 0.9);
        }
        return tree;
    }

    /* ── Palace ───────────────────────────────────────────────── */
    const palace = new THREE.Group();
    palace.position.set(-14, 0, -27);
    group.add(palace);

    const stone = 0xf1dcae, trim = 0x2fa4a8, red = 0xc4462b, gold = 0xe3a72f;

    add(group, new THREE.BoxGeometry(34, 1, 14), 0xe2c58e, 0, 0.1, 0, palace);
    add(group, new THREE.BoxGeometry(30, 4.2, 9), stone, 0, 2.7, -1.5, palace);
    add(group, new THREE.BoxGeometry(30.4, 0.4, 9.4), trim, 0, 4.9, -1.5, palace);
    add(group, new THREE.BoxGeometry(30.6, 0.25, 9.6), red, 0, 5.25, -1.5, palace);
    add(group, new THREE.BoxGeometry(10, 2.2, 6), stone, 0, 6.4, -2.5, palace);   // upper hall
    add(group, new THREE.BoxGeometry(10.4, 0.3, 6.4), gold, 0, 7.6, -2.5, palace);

    // Pylons
    [-5, 5].forEach(x => {
        const pylon = add(group, new THREE.CylinderGeometry(2.4, 3.6, 11, 4), stone, x, 6.2, 4, palace);
        pylon.rotation.y = Math.PI / 4;
        pylon.scale.set(1, 1, 0.7);
        add(group, new THREE.BoxGeometry(4.4, 0.4, 3.4), gold, x, 11.9, 4, palace);
        add(group, new THREE.BoxGeometry(0.9, 6, 0.1), trim, x, 6.4, 5.6, palace);
        add(group, new THREE.BoxGeometry(0.9, 0.9, 0.12), red, x, 9.5, 5.62, palace);
    });

    add(group, new THREE.BoxGeometry(6, 2.2, 3), 0x3a2a1c, 0, 1.9, 4.2, palace);   // gate
    add(group, new THREE.BoxGeometry(6.6, 0.6, 3.4), trim, 0, 3.4, 4, palace);

    // Colonnade (gaps form the entrance)
    for (let i = -5; i <= 5; i++) {
        add(group, new THREE.CylinderGeometry(0.35, 0.42, 4.2, 6), i % 2 ? 0xe6c88e : stone, i * 2.6, 2.7, 3, palace)
            .visible = Math.abs(i) > 2;
    }

    // Statues
    [-9, 9].forEach(x => {
        add(group, new THREE.BoxGeometry(1.6, 3.2, 1.6), 0xd9b877, x, 2, 7.5, palace);
        add(group, new THREE.OctahedronGeometry(0.9, 0), gold, x, 4.2, 7.5, palace);
    });

    // Stairs
    for (let i = 0; i < 4; i++) {
        add(group, new THREE.BoxGeometry(7 - i * 0.4, 0.3, 1), 0xe8cf9b, 0, 0.5 + i * 0.05, 8.2 - i * 0.6, palace);
    }

    [
        [-30, 6],
        [-24, 8.5],
        [-6, 8],
        [4, 7]
    ].forEach(([x, z]) => palm(palace.position.x + x, palace.position.z + z, 1.1 + Math.random() * 0.4));

    /* ── Far bank: palms and reeds ────────────────────────────── */
    for (let i = 0; i < 22; i++) {
        palm(-95 + i * 9 + Math.random() * 5, -10.5 - Math.random() * 3, 0.8 + Math.random() * 0.5);
    }
    // Reeds in the shallows, and thicker stands up both green banks. The
    // channel is z -10..10 and the bank objects run to about z -25 and z 27.
    for (let i = 0; i < 520; i++) {
        const x = -95 + Math.random() * 190;
        const onBank = Math.random() < 0.6;
        const dist = onBank ? 10.5 + Math.random() * 14 : 8.4 + Math.random() * 2.2;
        const z = (Math.random() < 0.5 ? -1 : 1) * dist;
        const h = (onBank ? 1.9 : 1.5) + Math.random() * 1.1;
        add(group, new THREE.ConeGeometry(0.11, h, 3), onBank ? 0x6f9438 : 0x8faa3a, x, h / 2 - 0.35, z);
    }

    /* ── Near bank palms ──────────────────────────────────────── */
    [
        [-16, 20],
        [-3, 26],
        [14, 18],
        [26, 24],
        [-32, 16]
    ].forEach(([x, z]) => palm(x, z, 1.3 + Math.random() * 0.4));

    /* ── Feluccas (animated in update) ────────────────────────── */
    function felucca(x, z, scale, sailColor) {
        const boat = new THREE.Group();
        boat.position.set(x, -0.2, z);
        boat.scale.setScalar(scale);
        group.add(boat);

        add(group, new THREE.BoxGeometry(5, 0.6, 1.5), 0x7a4a26, 0, 0.3, 0, boat);

        const bow = add(group, new THREE.ConeGeometry(0.75, 1.6, 4), 0x7a4a26, 3.2, 0.5, 0, boat);
        bow.rotation.z = -Math.PI / 2;
        bow.rotation.x = Math.PI / 4;

        add(group, new THREE.CylinderGeometry(0.06, 0.08, 6, 5), 0x4a2c14, 0, 3.4, 0, boat);

        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(-3.4, 0);
        shape.lineTo(0, 5.4);
        const sail = add(group, new THREE.ShapeGeometry(shape), sailColor, 0.2, 0.9, 0.05, boat);
        sail.material.side = THREE.DoubleSide;

        add(group, new THREE.CylinderGeometry(0.04, 0.04, 4, 4), 0x4a2c14, -1.6, 1.2, 0, boat)
            .rotation.z = Math.PI / 2;
        return boat;
    }

    const boats = [
        [felucca(-20, 2, 1.2, 0xfaf0dc), 1.6],
        [felucca(25, -3.5, 0.9, 0xf5e2b8), -1.1],
        [felucca(0, 4.5, 0.7, 0xfff6e6), 0.9]
    ];
    boats[1][0].rotation.y = Math.PI;

    return {
        background: new THREE.Color(SKY),
        // Pushed well back: a near fog start tints the far half of the river
        // with the warm sky colour and the water reads as yellow.
        fog: new THREE.Fog(SKY, 130, 460),

        update(t) {
            // Rolling swell on the river.
            const pos = waterGeo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                pos.setY(i,
                    Math.sin(waterBase[i * 3] * 0.35 + t * 1.2) * 0.12 +
                    Math.cos(waterBase[i * 3 + 2] * 0.8 + t) * 0.1
                );
            }
            pos.needsUpdate = true;

            // Clouds reflected on the surface: large, soft, slow-drifting
            // patches of light blue.
            const arr = waterCol.array;
            for (let i = 0; i < pos.count; i++) {
                const x = waterBase[i * 3];
                const z = waterBase[i * 3 + 2];
                const n =
                    Math.sin(x * 0.045 + t * 0.16) * 0.5 +
                    Math.sin(z * 0.07 - t * 0.11) * 0.3 +
                    Math.sin((x + z) * 0.028 + t * 0.07) * 0.2;
                const k = Math.min(0.55, Math.max(0, (n - 0.18) * 1.4));
                const b = i * 3;
                arr[b] = waterBaseCol[b] + (CLOUD.r - waterBaseCol[b]) * k;
                arr[b + 1] = waterBaseCol[b + 1] + (CLOUD.g - waterBaseCol[b + 1]) * k;
                arr[b + 2] = waterBaseCol[b + 2] + (CLOUD.b - waterBaseCol[b + 2]) * k;
            }
            waterCol.needsUpdate = true;

            // Boats drift downstream and bob.
            boats.forEach(([boat, speed], i) => {
                boat.position.x += speed * 0.012;
                if (boat.position.x > 110) boat.position.x = -110;
                if (boat.position.x < -110) boat.position.x = 110;
                boat.position.y = -0.2 + Math.sin(t * 1.5 + i) * 0.08;
                boat.rotation.z = Math.sin(t * 1.2 + i) * 0.03;
            });
        }
    };
}

export default { build };
