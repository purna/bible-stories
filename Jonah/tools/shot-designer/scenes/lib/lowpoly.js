/**
 * Low-poly scene helpers
 * ----------------------
 * Shared building blocks for the procedural scenes in ../scenes.
 *
 * Everything here is deliberately cheap: flat-shaded primitives, no textures,
 * no shadows. Scenes are authored for camera framing first — the shot designer
 * flies a 55mm lens around them, so silhouette and depth banding matter far
 * more than surface detail.
 *
 * Contract (see ../../js/scene-library.js): a scene module exports
 * `build(group)` and may return { background, fog, update(t) }.
 */

// This module lives one level deeper than scenes/*.js, so the app's three
// singleton is two levels up.
import THREE from '../../js/three.js';

/** Flat-shaded toon-ish surface, matching the Nile scene's look. */
export const material = color => new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    roughness: 1
});

/** Create a mesh at a position and attach it to `parent` (default: the scene group). */
export function add(group, geometry, color, x, y, z, parent) {
    const mesh = new THREE.Mesh(geometry, material(color));
    mesh.position.set(x, y, z);
    (parent || group).add(mesh);
    return mesh;
}

/** Flat disc lying in the XZ plane — ground plates, water, tabletops. */
export function plate(group, w, d, color, x, y, z, parent) {
    const geo = new THREE.PlaneGeometry(w, d, 1, 1);
    geo.rotateX(-Math.PI / 2);
    return add(group, geo, color, x, y, z, parent);
}

/**
 * Jittered ground plane. The jitter is what stops large surfaces reading as
 * flat cardboard under a flat-shaded material.
 */
export function terrain(group, w, d, cx, cz, y, jitter, color, segments = 16, parent) {
    const geo = new THREE.PlaneGeometry(w, d, segments, segments);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        pos.setY(i, (Math.random() - 0.5) * jitter);
    }
    geo.computeVertexNormals();
    const mesh = add(group, geo, color, cx, y, cz, parent);
    return mesh;
}

/** Low-poly cone — dunes, hills, tent peaks, distant peaks. */
export function hill(group, radius, height, color, x, z, y = 0, sides = 7, parent) {
    return add(group, new THREE.ConeGeometry(radius, height, sides), color, x, y + height / 2, z, parent);
}

/** Angular ridge line built from overlapping cones — mountain silhouettes. */
export function ridge(group, spec, color, baseY = 0, parent) {
    return spec.map(([x, z, r, h]) => hill(group, r, h, color, x, z, baseY, 5, parent));
}

/** Rectangular block — walls, buildings, altar steps. */
export function block(group, w, h, d, color, x, y, z, parent) {
    return add(group, new THREE.BoxGeometry(w, h, d), color, x, y, z, parent);
}

/** Four-sided tapered pillar — columns, obelisks, palm trunks, towers. */
export function column(group, rBottom, rTop, h, color, x, y, z, sides = 6, parent, spin = 0) {
    const mesh = add(group, new THREE.CylinderGeometry(rBottom, rTop, h, sides), color, x, y, z, parent);
    if (spin) mesh.rotation.y = spin;
    return mesh;
}

/** Faceted rock — boulders, rubble, the golden calf's base. */
export function rock(group, r, color, x, y, z, parent) {
    return add(group, new THREE.DodecahedronGeometry(r, 0), color, x, y, z, parent);
}

/** Stylised human figure: tapered body, sphere head, two leg blocks. */
export function figure(group, color, x, y, z, scale = 1, parent) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.scale.setScalar(scale);
    (parent || group).add(g);
    // CapsuleGeometry does not exist in three r128, so the body is a tapered
    // cylinder capped by a sphere for the shoulders.
    add(g, new THREE.CylinderGeometry(0.52, 0.78, 2.6, 6), color, 0, 2.0, 0, g);
    add(g, new THREE.SphereGeometry(0.56, 7, 5), color, 0, 3.3, 0, g);
    add(g, new THREE.SphereGeometry(0.5, 7, 6), color, 0, 4.0, 0, g);
    block(g, 0.34, 1.3, 0.34, color, -0.32, 0.65, 0, g);
    block(g, 0.34, 1.3, 0.34, color, 0.32, 0.65, 0, g);
    return g;
}

/** Palm tree — trunk plus radiating fronds. */
export function palm(group, x, z, scale = 1, baseY = 0, parent) {
    const g = new THREE.Group();
    g.position.set(x, baseY, z);
    g.scale.setScalar(scale);
    (parent || group).add(g);
    const t = add(g, new THREE.CylinderGeometry(0.16, 0.28, 4.4, 5), 0x6b4a26, 0, 2.2, 0, g);
    t.rotation.z = (Math.random() - 0.5) * 0.22;
    for (let i = 0; i < 7; i++) {
        const frond = add(g, new THREE.ConeGeometry(0.34, 3, 3), i % 2 ? 0x3f7a28 : 0x4e9134, 0, 4.4, 0, g);
        frond.geometry.translate(0, 1.5, 0);
        frond.rotation.set(0, (i * Math.PI * 2) / 7, 0);
        frond.rotation.z = 1.15;
        frond.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), i * 0.9);
    }
    return g;
}

/** Conifer-ish tree for wooded slopes. */
export function tree(group, x, z, scale = 1, baseY = 0, parent) {
    const g = new THREE.Group();
    g.position.set(x, baseY, z);
    g.scale.setScalar(scale);
    (parent || group).add(g);
    add(g, new THREE.CylinderGeometry(0.2, 0.3, 1.6, 5), 0x4a3320, 0, 0.8, 0, g);
    add(g, new THREE.ConeGeometry(1.5, 3.4, 6), 0x2f5a24, 0, 3.2, 0, g);
    add(g, new THREE.ConeGeometry(1.1, 2.6, 6), 0x3a6b2c, 0, 4.8, 0, g);
    return g;
}

/** Camel: body, hump, neck, head, legs. Reads instantly at silhouette scale. */
export function camel(group, x, z, scale = 1, hue = 1, parent) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    (parent || group).add(g);
    const hide = [0xa8804a, 0x9a7040, 0xb08a52][Math.floor((hue * 3)) % 3];
    // Barrel body along X, with the neck forward at -X (matches the calf's facing).
    const body = add(g, new THREE.CylinderGeometry(1.5, 1.5, 4.6, 7), hide, 0, 3.0, 0, g);
    body.rotation.z = Math.PI / 2;
    // Humps.
    add(g, new THREE.IcosahedronGeometry(1.0, 0), hide, -0.5, 4.4, 0, g);
    add(g, new THREE.IcosahedronGeometry(0.8, 0), hide, 0.9, 4.3, 0, g);
    // Neck and head.
    const neck = add(g, new THREE.CylinderGeometry(0.42, 0.55, 2.8, 6), hide, -2.9, 4.2, 0, g);
    neck.rotation.z = 0.42;
    add(g, new THREE.BoxGeometry(1.2, 0.7, 0.6), hide, -4.1, 5.3, 0, g);
    // Legs.
    for (const [lx, lz] of [[-1.7, 0.9], [-1.7, -0.9], [1.7, 0.9], [1.7, -0.9]]) {
        add(g, new THREE.CylinderGeometry(0.24, 0.2, 3.0, 5), hide, lx, 1.5, lz, g);
    }
    return g;
}

/** Hemispheric fill + key light, tuned per scene by the caller. */
export function lighting(group, sky = 0xfff0d0, ground = 0x9a6b3a, intensity = 0.7,
    keyColor = 0xffe2b0, keyIntensity = 1.0, keyPos = [-30, 40, 20]) {
    group.add(new THREE.HemisphereLight(sky, ground, intensity));
    const key = new THREE.DirectionalLight(keyColor, keyIntensity);
    key.position.set(keyPos[0], keyPos[1], keyPos[2]);
    group.add(key);
    return key;
}

/** Unlit glow orb — sun, bush fire, glory cloud, calf. */
export function glow(group, r, color, x, y, z) {
    const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(r, 0),
        new THREE.MeshBasicMaterial({ color, fog: false })
    );
    mesh.position.set(x, y, z);
    // Decorative backdrop — keep it out of the camera framing bounds.
    mesh.userData.excludeFromBounds = true;
    group.add(mesh);
    return mesh;
}

/**
 * Build an animated water surface: gentle swell, depth-graded colour.
 * Returns { mesh, update(t) }.
 */
export function water(group, w, d, deepHex, shallowHex, y, segments = 24, parent) {
    const geo = new THREE.PlaneGeometry(w, d, segments, Math.max(2, Math.round(segments / 4)));
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const deep = new THREE.Color(deepHex);
    const shallow = new THREE.Color(shallowHex);
    const c = new THREE.Color();
    const colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
        const t = Math.min(1, Math.abs(pos.getZ(i)) / (d / 2));
        c.copy(deep).lerp(shallow, t);
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const base = Float32Array.from(geo.attributes.position.array);
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        vertexColors: true, flatShading: true, roughness: 0.32, metalness: 0.08
    }));
    mesh.position.set(0, y, 0);
    (parent || group).add(mesh);
    const p = geo.attributes.position;
    return {
        mesh,
        update(t, amp = 0.16) {
            for (let i = 0; i < p.count; i++) {
                p.setY(i,
                    Math.sin(base[i * 3] * 0.35 + t * 1.2) * amp +
                    Math.cos(base[i * 3 + 2] * 0.8 + t) * amp * 0.7);
            }
            p.needsUpdate = true;
        }
    };
}

/** Vertical rain/snow/ash curtain that can be animated. */
export function precipitation(group, count, color, w, h, speed, size = 0.1) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * w;
        pos[i * 3 + 1] = Math.random() * h;
        pos[i * 3 + 2] = (Math.random() - 0.5) * w * 0.7;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(geo, new THREE.PointsMaterial({
        color, size, transparent: true, opacity: 0.75, fog: false
    }));
    group.add(points);
    return {
        points,
        update(t) {
            const p = geo.attributes.position;
            for (let i = 0; i < count; i++) {
                let y = p.getY(i) - speed * 0.016;
                if (y < 0) y += h;
                p.setY(i, y);
            }
            p.needsUpdate = true;
        }
    };
}

/** Slow horizontal drift for cloud slabs and smoke. */
export function drift(obj, axis, speed, span, t) {
    obj.position[axis] = ((t * speed) % span) - span / 2;
}

export default { add, material, plate, terrain, hill, ridge, block, column, rock, figure, palm, tree, camel, lighting, glow, water, precipitation, drift };
