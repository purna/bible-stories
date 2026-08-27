/* =========================================================================
    DANIEL — 3D Scene Helpers
    Shared toon shader materials, geometry cache, and construction utilities.
    Exposes onto window so individual scene files can register into
    window.SCENE_FACTORIES.

    Toon shader: 3-color gradient map for cel-shading with black outlines.
    Every mesh gets a BackSide outline (scaled 1.05-1.08x) for the
    classic cartoon look.
    ========================================================================= */

(function (global) {
    "use strict";

    var THREE = global.THREE;
    if (!THREE) { console.error('Three.js not loaded'); return; }

    /* ── Gradient map: 3-tone ramp [dark shadow, mid-tone, highlight] ── */
    var gradientColors = new Uint8Array([0, 128, 255]);
    var gradientFormat = THREE.LuminanceFormat || THREE.RedFormat || THREE.LuminanceFormat;
    var gradientMap = new THREE.DataTexture(gradientColors, 3, 1, gradientFormat);
    gradientMap.needsUpdate = true;
    global.gradientMap = gradientMap;

    /* ── Create a toon material with the shared gradient map ── */
    global.toonMat = function (colorOrOpts) {
        var opts;
        if (typeof colorOrOpts === 'number') {
            opts = { color: colorOrOpts };
        } else {
            opts = Object.assign({}, colorOrOpts);
        }
        opts.gradientMap = gradientMap;
        return new THREE.MeshToonMaterial(opts);
    };

    /* ── Add a black outline to a group (BackSide, scaled up) ── */
    function addOutline(group, geometry, size) {
        var outlineMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            side: THREE.BackSide,
            transparent: true,
            opacity: 0.85
        });
        var outline = new THREE.Mesh(geometry, outlineMat);
        outline.renderOrder = 0;
        outline.scale.multiplyScalar(1 + (size || 0.08));
        group.add(outline);
        return outline;
    }
    global.addOutline = addOutline;

    /* ── Helper: create mesh + outline pair ── */
    function addToonPart(parent, geometry, material, isHead) {
        var main = new THREE.Mesh(geometry, material);
        main.castShadow = true;
        main.receiveShadow = true;
        if (isHead) main.renderOrder = 1;
        parent.add(main);

        addOutline(parent, geometry, 0.08);
        return main;
    }
    global.addToonPart = addToonPart;

    /* ── Daniel color palette ── */
    global.COLORS = {
        gold:       0xFFD84D,
        silver:     0xC0C0C0,
        bronze:     0xcd7f32,
        iron:       0x888888,
        clay:       0xC8956C,
        sand:       0x8b5a2b,
        deepRed:    0x8B0000,
        red:        0xFF6B5B,
        robe:       0x4a2a04,
        skin:       0xC8956C,
        hair:       0x2a1e15,
        teal:       0x4ECDC4,
        dark:       0x0A0812,
        night:      0x03010a,
        sky:        0x1a0e06,
        stone:      0x8b5a2b,
        metal:      0x4a4a4a,
        white:      0xffffff,
        purple:     0xB98CFF,
        ember:      0xFF4500,
    };

    /* ── Shared materials (toon-shaded) ── */
    global.MAT = {
        gold:    global.toonMat({ color: global.COLORS.gold, metalness: 0.8, roughness: 0.2 }),
        silver:  global.toonMat({ color: global.COLORS.silver, metalness: 0.7, roughness: 0.3 }),
        bronze:  global.toonMat({ color: global.COLORS.bronze, metalness: 0.5, roughness: 0.4 }),
        iron:    global.toonMat({ color: global.COLORS.iron, metalness: 0.6, roughness: 0.5 }),
        clay:    global.toonMat({ color: global.COLORS.clay, metalness: 0.1, roughness: 0.7 }),
        red:     global.toonMat({ color: global.COLORS.red }),
        deepRed: global.toonMat({ color: global.COLORS.deepRed }),
        teal:    global.toonMat({ color: global.COLORS.teal, metalness: 0.6, roughness: 0.1 }),
        skin:    global.toonMat({ color: global.COLORS.skin, metalness: 0.2, roughness: 0.4 }),
        robe:    global.toonMat({ color: global.COLORS.robe, metalness: 0.1, roughness: 0.6 }),
        dark:    global.toonMat({ color: global.COLORS.dark }),
        stone:   global.toonMat({ color: global.COLORS.stone, metalness: 0.3, roughness: 0.5 }),
        metal:   global.toonMat({ color: global.COLORS.metal, metalness: 0.7, roughness: 0.4 }),
        night:   global.toonMat({ color: global.COLORS.night }),
        sky:     global.toonMat({ color: global.COLORS.sky }),
        purple:  global.toonMat({ color: global.COLORS.purple, metalness: 0.5, roughness: 0.3 }),
        ember:   global.toonMat({ color: global.COLORS.ember }),
        black:   new THREE.MeshBasicMaterial({ color: 0x0A0812 }),
        emissiveGold:  new THREE.MeshBasicMaterial({ color: global.COLORS.gold, transparent: true, opacity: 0.4 }),
        emissiveTeal:  new THREE.MeshBasicMaterial({ color: global.COLORS.teal, transparent: true, opacity: 0.3 }),
        emissiveRed:   new THREE.MeshBasicMaterial({ color: global.COLORS.deepRed, transparent: true, opacity: 0.4 }),
        emissivePurple: new THREE.MeshBasicMaterial({ color: global.COLORS.purple, transparent: true, opacity: 0.25 }),
        invisible: new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }),
    };

    /* ── Geometry cache (avoids recreating identical geometries) ── */
    global.GEO = {};
    global.g = function (key, create) {
        if (!global.GEO[key]) global.GEO[key] = create();
        return global.GEO[key];
    };

    /* ── Helper: toon-shaded sphere with outline ── */
    global.makeSphere = function (radius, color, segs) {
        var grp = new THREE.Group();
        var geo = global.g('sphere_' + radius + '_' + (segs || 16),
            function () { return new THREE.SphereGeometry(radius, segs || 16, segs || 16); });
        addToonPart(grp, geo, color);
        return grp;
    };

    /* ── Helper: toon-shaded box with outline ── */
    global.makeBox = function (w, h, d, color) {
        var grp = new THREE.Group();
        var geo = global.g('box_' + w + '_' + h + '_' + d,
            function () { return new THREE.BoxGeometry(w, h, d); });
        addToonPart(grp, geo, color);
        return grp;
    };

    /* ── Helper: toon-shaded cylinder with outline ── */
    global.makeCylinder = function (r1, r2, h, color, segs) {
        var grp = new THREE.Group();
        var geo = global.g('cyl_' + r1 + '_' + r2 + '_' + h + '_' + (segs || 12),
            function () { return new THREE.CylinderGeometry(r1, r2, h, segs || 12); });
        addToonPart(grp, geo, color);
        return grp;
    };

    /* ── Helper: star field (particles) ── */
    global.makeStars = function (scene, count, spread, color, size) {
        var geo = new THREE.SphereGeometry(size || 0.5, 6, 6);
        var mat = new THREE.MeshBasicMaterial({ color: color || 0xffffff });
        for (var i = 0; i < count; i++) {
            var star = new THREE.Mesh(geo, mat);
            star.position.set(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread * 0.6,
                (Math.random() - 0.5) * spread
            );
            star.scale.setScalar(0.3 + Math.random() * 1.2);
            scene.add(star);
        }
    };

    /* ── Helper: emissive light sphere ── */
    global.makeLightSphere = function (color, intensity, distance) {
        var sphere = new THREE.SphereGeometry(1, 16, 16);
        var mat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.6 });
        var mesh = new THREE.Mesh(sphere, mat);
        var light = new THREE.PointLight(color, intensity, distance);
        mesh.add(light);
        return mesh;
    };

    /* ── SCENE FACTORIES registry ── */
    global.SCENE_FACTORIES = {};

})(window);
