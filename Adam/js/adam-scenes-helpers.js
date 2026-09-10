/* =========================================================================
    ADAM & EVE — 3D Scene Helpers
    Shared materials (toon-shaded), geometry cache, and construction utilities.
    Exposes onto window so individual scene files can register into
    window.SCENE_FACTORIES.

    TOON SHADER:
    - gradientMap: 3-color ramp [0, 128, 255] for cel-shaded lighting bands
    - MeshToonMaterial replaces MeshStandardMaterial for flat cartoon shading
    - Black outline meshes (BackSide, scaled 1.08x) as children of each main mesh
      for automatic transform inheritance
   ========================================================================= */

(function (global) {
    "use strict";

    var THREE = global.THREE;
    if (!THREE) { console.error('Three.js not loaded'); return; }

    // ── Toon shader: gradient map for cel-shading ─────────────────────
    var gradientColors = new Uint8Array([0, 128, 255]);
    var gradientFormat = THREE.LuminanceFormat;
    if (THREE.RedFormat) gradientFormat = THREE.RedFormat;
    var gradientMap = new THREE.DataTexture(gradientColors, 3, 1, gradientFormat);
    gradientMap.needsUpdate = true;
    global.gradientMap = gradientMap;

    // ── Helper: create a toon material ────────────────────────────────
    global.toonMat = function (colorOrOpts) {
        var opts;
        if (typeof colorOrOpts === 'number') {
            opts = { color: colorOrOpts };
        } else {
            opts = Object.assign({}, colorOrOpts);
        }
        delete opts.roughness;
        delete opts.metalness;
        opts.gradientMap = gradientMap;
        return new THREE.MeshToonMaterial(opts);
    };

    // ── Shared outline material ────────────────────────────────────────
    var outlineMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.85
    });

    // ── Helper: add an outline mesh as a child of a main mesh ──────────
    // The outline inherits position/rotation/scale automatically.
    // It renders back-faces only, scaled 8% larger to create the outline.
    global.addOutline = function (mesh, size) {
        var outline = new THREE.Mesh(mesh.geometry, outlineMat);
        outline.scale.setScalar(1 + (size || 0.08));
        outline.renderOrder = 0;
        mesh.add(outline);
        return outline;
    };

    // ── Helper: create mesh + outline (outline is child of mesh) ───────
    function addToonPart(parent, geometry, material, isHead) {
        var main = new THREE.Mesh(geometry, material);
        main.castShadow = true;
        main.receiveShadow = true;
        if (isHead) main.renderOrder = 1;
        parent.add(main);
        global.addOutline(main, 0.08);
        return main;
    }

    // ── Shared colors ─────────────────────────────────────────────────
    global.COLORS = {
        earth:    0x8B4513,
        bark:     0x5c4033,
        leaf:     0x4a7a3a,
        gold:     0xFFD84D,
        redFruit: 0xFF6B5B,
        deepRed:  0x8B0000,
        skinAdam: 0xC8956C,
        skinEve:  0xDCB088,
        hair:     0x2a1e15,
        clothAdam:0x5c4033,
        clothEve: 0x8a7a5a,
        water:    0x4ECDC4,
        sky:      0x1a0e06,
        night:    0x03010a,
        stone:    0x8b5a2b,
        metal:    0x4a4a4a,
        white:    0xffffff,
        black:    0x0A0812
    };

    // ── Shared materials (toon-shaded) ──────────────────────────────────
    global.MAT = {
        earth:   global.toonMat({ color: global.COLORS.earth }),
        bark:    global.toonMat({ color: global.COLORS.bark }),
        leaf:    global.toonMat({ color: global.COLORS.leaf }),
        gold:    global.toonMat({ color: global.COLORS.gold, metalness: 0.8, roughness: 0.2 }),
        redFruit:global.toonMat({ color: global.COLORS.redFruit }),
        skinAdam:global.toonMat({ color: global.COLORS.skinAdam }),
        skinEve: global.toonMat({ color: global.COLORS.skinEve }),
        hair:    global.toonMat({ color: global.COLORS.hair }),
        clothAdam:global.toonMat({ color: global.COLORS.clothAdam }),
        clothEve:global.toonMat({ color: global.COLORS.clothEve }),
        water:   global.toonMat({ color: global.COLORS.water, metalness: 0.6, roughness: 0.1 }),
        sky:     global.toonMat({ color: global.COLORS.sky }),
        night:   global.toonMat({ color: global.COLORS.night }),
        stone:   global.toonMat({ color: global.COLORS.stone }),
        metal:   global.toonMat({ color: global.COLORS.metal, metalness: 0.7, roughness: 0.4 }),
        white:   global.toonMat({ color: global.COLORS.white }),
        black:   new THREE.MeshBasicMaterial({ color: global.COLORS.black }),
        emissiveGold:  new THREE.MeshBasicMaterial({ color: global.COLORS.gold, transparent: true, opacity: 0.4 }),
        emissiveRed:   new THREE.MeshBasicMaterial({ color: global.COLORS.deepRed, transparent: true, opacity: 0.4 }),
        emissiveTeal:  new THREE.MeshBasicMaterial({ color: global.COLORS.water, transparent: true, opacity: 0.3 }),
        emissivePurple: new THREE.MeshBasicMaterial({ color: 0xB98CFF, transparent: true, opacity: 0.25 }),
        invisible: new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
    };

    // ── Geometry cache ───────────────────────────────────────────────
    global.GEO = {};
    global.g = function (key, create) {
        if (!global.GEO[key]) global.GEO[key] = create();
        return global.GEO[key];
    };
    global.geo = function (type, params) {
        var key = type + JSON.stringify(params || {});
        if (!global.GEO[key]) global.GEO[key] = new THREE[type + 'Geometry'](params.w || 1, params.h || 1, params.d || 1);
        return global.GEO[key];
    };

    // ── Helper: human figure with toon + outline ──────────────────────
    global.makeCharacter = function (skinMat, clothMat, hairMat, female) {
        var grp = new THREE.Group();

        var bodyH = female ? 55 : 60;
        var bodyW = female ? 26 : 30;
        var bodyGeo = new THREE.BoxGeometry(bodyW, bodyH, 14);
        addToonPart(grp, bodyGeo, clothMat);

        var headR = female ? 12 : 14;
        var headGeo = new THREE.SphereGeometry(headR, 16, 16);
        var head = addToonPart(grp, headGeo, skinMat, true);
        head.position.y = bodyH / 2 + headR - 4;

        var hairGeo = new THREE.SphereGeometry(headR + 2, 16, 14);
        var hair = addToonPart(grp, hairGeo, hairMat);
        hair.position.y = bodyH / 2 + headR - 2;
        if (female) {
            hair.scale.set(1.2, 1.4, 1);
        } else {
            hair.scale.set(1.1, 1.0, 1);
            hair.position.y = bodyH / 2 + headR - 2;
        }

        var armGeo = new THREE.CylinderGeometry(4, 4, 40, 12);
        var armL = addToonPart(grp, armGeo, clothMat);
        var armR = addToonPart(grp, armGeo, clothMat);
        armL.position.x = -(bodyW / 2 + 4);
        armR.position.x = (bodyW / 2 + 4);
        armL.position.y = 5;
        armR.position.y = 5;

        var legGeo = new THREE.CylinderGeometry(5, 5, 45, 12);
        var legL = addToonPart(grp, legGeo, clothMat);
        var legR = addToonPart(grp, legGeo, clothMat);
        legL.position.x = -bodyW * 0.2;
        legR.position.x = bodyW * 0.2;
        legL.position.y = -bodyH / 2 - 22;
        legR.position.y = -bodyH / 2 - 22;

        // Eyes (flat black)
        var eyeGeo = new THREE.SphereGeometry(2, 8, 8);
        var eyeL = new THREE.Mesh(eyeGeo, global.MAT.black);
        var eyeR = new THREE.Mesh(eyeGeo, global.MAT.black);
        eyeL.position.set(-headR * 0.4, 2, headR + 2);
        eyeR.position.set(headR * 0.4, 2, headR + 2);
        head.add(eyeL, eyeR);

        return grp;
    };

    // ── Helper: tree with toon + outline ────────────────────────────────
    global.makeTree = function (trunkH, trunkR, leafR, leafMat, woodMat) {
        var grp = new THREE.Group();

        var trunkGeo = new THREE.CylinderGeometry(trunkR, trunkR * 1.3, trunkH, 12);
        var trunk = addToonPart(grp, trunkGeo, woodMat || global.MAT.bark);
        trunk.position.y = trunkH / 2;

        var layers = 3;
        for (var i = 0; i < layers; i++) {
            var leafGeo = new THREE.SphereGeometry(leafR - i * 4, 16, 16);
            var leaf = addToonPart(grp, leafGeo, leafMat || global.MAT.leaf);
            leaf.position.y = trunkH + i * (leafR * 0.5);
            // Non-uniform scale: outline child inherits automatically via addOutline
            leaf.scale.set(1.2, 0.8, 1);
        }

        var groundGeo = new THREE.CylinderGeometry(leafR * 1.5, leafR * 1.5, 3, 16);
        var ground = addToonPart(grp, groundGeo, global.MAT.earth);
        ground.rotation.x = Math.PI / 2;

        return grp;
    };

    // ── Helper: star field ────────────────────────────────────────────
    global.makeStarField = function (scene, count, radius, color) {
        var geo = new THREE.SphereGeometry(0.8, 6, 6);
        var mat = new THREE.MeshBasicMaterial({ color: color || 0xffffff });
        for (var i = 0; i < count; i++) {
            var m = new THREE.Mesh(geo, mat);
            var r = radius * (0.3 + Math.random() * 0.7);
            var theta = Math.random() * Math.PI * 2;
            var phi = Math.acos(Math.random() * 2 - 1);
            m.position.set(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi) * Math.sin(phi)
            );
            m.scale.setScalar(0.5 + Math.random() * 1.5);
            scene.add(m);
        }
    };

    // ── Helper: instanced stars (particles) ───────────────────────────
    global.makeStars = function (scene, count, spread, color, size) {
        var geo = new THREE.SphereGeometry(size || 0.5, 6, 6);
        var mat = new THREE.MeshBasicMaterial({ color: color || 0xffffff });
        var group = new THREE.Group();
        for (var i = 0; i < count; i++) {
            var star = new THREE.Mesh(geo, mat);
            star.position.set(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread * 0.6,
                (Math.random() - 0.5) * spread
            );
            star.scale.setScalar(0.3 + Math.random() * 1.2);
            star.userData.twinkle = Math.random();
            group.add(star);
        }
        scene.add(group);
        return group;
    };

    // ── Helper: ground plane (toon) ───────────────────────────────────
    global.makeGround = function (size, color, y) {
        var geo = new THREE.PlaneGeometry(size, size);
        var mat = global.toonMat({ color: color || global.COLORS.earth });
        var plane = new THREE.Mesh(geo, mat);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = y || 0;
        plane.receiveShadow = true;
        return plane;
    };

    // ── Helper: serpent (curved tube) with toon + outline ─────────────
    global.makeSerpent = function (length, color) {
        var points = [];
        for (var i = 0; i <= 20; i++) {
            var t = i / 20;
            points.push(new THREE.Vector3(
                Math.sin(t * Math.PI * 2) * length * 0.15,
                Math.cos(t * Math.PI) * length * 0.1,
                t * length
            ));
        }
        var curve = new THREE.CatmullRomCurve3(points);
        var geo = new THREE.TubeGeometry(curve, 40, 3, 12, false);
        var tube = new THREE.Mesh(geo, global.toonMat({ color: color || global.COLORS.bark }));
        tube.castShadow = true;
        tube.receiveShadow = true;
        global.addOutline(tube, 0.08);

        var headGeo = new THREE.SphereGeometry(5, 12, 12);
        var head = new THREE.Mesh(headGeo, global.toonMat({ color: global.COLORS.bark }));
        head.position.copy(points[20]);
        head.castShadow = true;
        tube.add(head);
        global.addOutline(head, 0.08);

        // Eyes
        var eyeMat = new THREE.MeshBasicMaterial({ color: 0xFF6B5B });
        var eye1 = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 8), eyeMat);
        var eye2 = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 8), eyeMat);
        eye1.position.set(3, 1, 0);
        eye2.position.set(3, -1, 0);
        head.add(eye1, eye2);

        return tube;
    };

    // ── Helper: emissive light sphere ─────────────────────────────────
    global.makeLightSphere = function (color, intensity, distance) {
        var sphere = new THREE.SphereGeometry(1, 16, 16);
        var mat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.6 });
        var mesh = new THREE.Mesh(sphere, mat);
        var light = new THREE.PointLight(color, intensity, distance);
        mesh.add(light);
        mesh.userData.isLight = true;
        return mesh;
    };

    // ── Helper: tree with fruit (toon + outline) ──────────────────────
    global.makeTreeWithFruit = function (fruitColor, leafColor) {
        var grp = new THREE.Group();

        var trunkGeo = new THREE.CylinderGeometry(4, 6, 50, 12);
        var trunk = addToonPart(grp, trunkGeo, global.MAT.bark);
        trunk.position.y = 25;

        var leafGeo = new THREE.SphereGeometry(30, 16, 16);
        var leafMat = global.toonMat({ color: leafColor || global.COLORS.leaf });
        var canopy = addToonPart(grp, leafGeo, leafMat);
        canopy.position.y = 55;

        var fruitGeo = new THREE.SphereGeometry(5, 8, 8);
        var fruitMat = global.toonMat({ color: fruitColor });
        for (var i = 0; i < 8; i++) {
            var angle = (i / 8) * Math.PI * 2;
            var fruit = new THREE.Mesh(fruitGeo, fruitMat);
            fruit.position.set(
                Math.cos(angle) * 28,
                55 + Math.sin(angle * 1.3) * 8,
                Math.sin(angle) * 28
            );
            fruit.castShadow = true;
            grp.add(fruit);
            global.addOutline(fruit, 0.1);
        }

        var groundGeo = new THREE.CylinderGeometry(35, 35, 3, 16);
        var ground = addToonPart(grp, groundGeo, global.MAT.earth);
        ground.rotation.x = Math.PI / 2;

        return grp;
    };

    // ── Helper: river (curved plane) ──────────────────────────────────
    global.makeRiver = function (width, length, color) {
        var geo = new THREE.PlaneGeometry(width, length, 1, 20);
        geo.rotateX(Math.PI / 2);
        var mat = global.toonMat({ color: color || global.COLORS.water });
        var river = new THREE.Mesh(geo, mat);
        river.receiveShadow = true;
        return river;
    };

    // ── Helper: atmospheric fog ────────────────────────────────────────
    global.makeFog = function (scene, color, density) {
        scene.fog = new THREE.FogExp2(color || global.COLORS.night, density || 0.003);
        return scene.fog;
    };

     // ── SCENE FACTORIES registry ──────────────────────────────────────
    global.SCENE_FACTORIES = {};

    // ── Helper: load a Spline-exported GLB and convert to toon shader ─
    // Returns a Group immediately; meshes are added asynchronously as they
    // load. The factory callback receives the loaded group so the scene
    // can wire up animations once geometry is ready.
    global.loadSplineScene = function (url, callback) {
        var group = new THREE.Group();
        if (!THREE.GLTFLoader) {
            console.error('GLTFLoader not loaded');
            return group;
        }
        var loader = new THREE.GLTFLoader();
        loader.load(
            url,
            function (gltf) {
                // Convert all meshes to toon shader + outlines
                gltf.scene.traverse(function (child) {
                    if (child.isMesh) {
                        if (child.material) {
                            var origMat = Array.isArray(child.material)
                                ? child.material[0]
                                : child.material;
                            var baseColor = origMat.color
                                ? origMat.color.getHex()
                                : 0xffffff;

                            // If material is emissive-looking, use basic shader
                            var emissive = origMat.emissive
                                ? origMat.emissive.getHex()
                                : 0x000000;
                            if (emissive !== 0x000000) {
                                child.material = new THREE.MeshBasicMaterial({
                                    color: baseColor,
                                    transparent: true,
                                    opacity: Math.max(
                                        origMat.emissiveIntensity || 0.5, 0.3
                                    )
                                });
                            } else {
                                child.material = global.toonMat({ color: baseColor });
                            }
                        }
                        child.castShadow = true;
                        child.receiveShadow = true;
                        global.addOutline(child, 0.03);
                        group.add(child);
                    }
                });
                if (callback) callback(group, gltf);
            },
            undefined,
            function (error) {
                console.error('Failed to load Spline scene:', error);
            }
        );
        return group;
    };

    // ── Helper: convert any loaded group to toon shader + outlines ─────
    global.toonizeGroup = function (group) {
        group.traverse(function (child) {
            if (child.isMesh && child.material) {
                var origMat = Array.isArray(child.material)
                    ? child.material[0]
                    : child.material;
                var baseColor = origMat.color
                    ? origMat.color.getHex()
                    : 0xffffff;
                child.material = global.toonMat({ color: baseColor });
                child.castShadow = true;
                child.receiveShadow = true;
                global.addOutline(child, 0.03);
            }
        });
    };

    // ── Helper: load a pixel3d JSON scene and convert to toon shader ─────
    // Reads JSON exported from pixel3d tool at /assets/3d/
    // Supports shapeType: box, sphere, cylinder, plane, tube
    // Supports lightType: point, directional, ambient
    // Material: { type: "toon"|"emissive"|"basic", color, outline }
    global.loadJSONScene = function (data, scene) {
        if (!scene) scene = new THREE.Scene();

        var s = data.settings || {};
        if (s.background) scene.background = new THREE.Color(s.background);
        if (s.fog) makeFog(scene, s.fog.color || COLORS.night, s.fog.density || 0.003);

        var group = new THREE.Group();

        for (var i = 0; i < data.objects.length; i++) {
            var obj = data.objects[i];
            var p = obj.position || {x:0,y:0,z:0};
            var r = obj.rotation || {x:0,y:0,z:0};
            var sc = obj.scale || {x:1,y:1,z:1};

            if (obj.type === 'light') {
                var light = createLightFromJSON(obj);
                if (light) {
                    light.position.set(p.x, p.y, p.z);
                    scene.add(light);
                }
            } else if (obj.type === 'shape') {
                var mesh = createMeshFromJSON(obj);
                if (mesh) {
                    mesh.position.set(p.x, p.y, p.z);
                    mesh.rotation.set(r.x, r.y, r.z);
                    mesh.scale.set(sc.x, sc.y, sc.z);

                    var shadow = obj.userData?.aframe?.shadow;
                    if (shadow) {
                        mesh.castShadow = shadow.cast !== false;
                        mesh.receiveShadow = shadow.receive !== false;
                    } else {
                        mesh.castShadow = true;
                        mesh.receiveShadow = true;
                    }
                    group.add(mesh);
                }
            }
        }

        scene.add(group);
        return group;
    };

    // ── Internal: create Three.js light from JSON spec ──────────────────
    function createLightFromJSON(obj) {
        var ud = obj.userData || {};
        var lt = ud.lightType || obj.lightType || 'point';
        var color = 0xffffff;
        var intensity = 1.0;
        var dist = 100;

        if (ud.materialName === 'gold') color = COLORS.gold;
        if (ud.materialName === 'white') color = COLORS.white;
        if (ud.customAttrs) {
            if (ud.customAttrs.color) color = ud.customAttrs.color;
            if (ud.customAttrs.intensity) intensity = ud.customAttrs.intensity;
        }
        if (obj.color) color = hexToInt(obj.color);
        if (obj.intensity) intensity = obj.intensity;
        if (obj.distance) dist = obj.distance;

        if (lt === 'ambient') return new THREE.AmbientLight(color, intensity);
        if (lt === 'directional') {
            var dirLight = new THREE.DirectionalLight(color, intensity);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 1024;
            dirLight.shadow.mapSize.height = 1024;
            return dirLight;
        }
        var pointLight = new THREE.PointLight(color, intensity, dist);
        return pointLight;
    }
    global.createLightFromJSON = createLightFromJSON;

    // ── Internal: create Three.js mesh from JSON spec ───────────────────
    function createMeshFromJSON(obj) {
        var st = obj.shapeType || obj.userData?.shapeType;
        var geo = createGeometryFromJSON(st, obj);
        if (!geo) return null;

        var color = 0xffffff;
        var outlineSize = 0.08;
        var isEmissive = false;

        var ud = obj.userData || {};
        var m = ud.material || {};

        if (m.type === 'emissive' || ud.materialName === 'emissive') {
            isEmissive = true;
            color = hexToInt(m.color) || COLORS.gold;
        } else if (m.type === 'basic') {
            color = hexToInt(m.color) || COLORS.white;
        } else {
            color = hexToInt(obj.color) || hexToInt(m.color) || COLORS.white;
        }

        outlineSize = m.outline !== undefined ? m.outline : outlineSize;

        var mat;
        if (isEmissive) {
            mat = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.5
            });
        } else {
            mat = global.toonMat({ color: color });
        }

        var mesh = new THREE.Mesh(geo, mat);
        global.addOutline(mesh, outlineSize);
        return mesh;
    }
    global.createMeshFromJSON = createMeshFromJSON;

    // ── Internal: create geometry from shapeType ────────────────────────
    function createGeometryFromJSON(shapeType, obj) {
        switch (shapeType) {
            case 'box':
                return new THREE.BoxGeometry(2, 2, 2);
            case 'sphere':
                return new THREE.SphereGeometry(1, 16, 16);
            case 'cylinder':
                return new THREE.CylinderGeometry(1, 1, 2, 12);
            case 'cone':
                return new THREE.ConeGeometry(1, 2, 12);
            case 'plane':
                return new THREE.PlaneGeometry(2, 2);
            case 'torus':
                return new THREE.TorusGeometry(1, 0.3, 16, 32);
            case 'tube':
                if (obj.curvePoints) {
                    var pts = obj.curvePoints.map(function(p) {
                        return new THREE.Vector3(p.x, p.y, p.z);
                    });
                    var curve = new THREE.CatmullRomCurve3(pts);
                    return new THREE.TubeGeometry(curve, obj.segments || 20, obj.radius || 1, obj.radialSegments || 8, false);
                }
                return null;
            default:
                return null;
        }
    }

    // ── Internal: parse hex color string to number ──────────────────────
    function hexToInt(hex) {
        if (typeof hex === 'number') return hex;
        if (!hex) return 0xffffff;
        var h = hex.replace('#', '');
        if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
        return parseInt('0x' + h);
    }
    global.hexToInt = hexToInt;

    // ── Helper: load a pixel3d JS scene and convert to toon shader ──────
    // Loads a JS file that defines window.initSceneN(group) functions
    // (the pixel3d JS export format).  Converts all MeshPhongMaterial
    // meshes to toon shader + outlines.
    global.loadJSScene = function (url, group, callback) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = function () {
            // Call all init functions exposed by the loaded script
            var sceneNum = 1;
            while (window['initScene' + sceneNum]) {
                window['initScene' + sceneNum](group);
                sceneNum++;
            }
            // Load lights if present
            if (window.initSceneLights) {
                window.initSceneLights(group);
            }
            // Convert all Phong materials to toon shader
            group.traverse(function (child) {
                if (child.isMesh && child.material) {
                    var origMat = Array.isArray(child.material)
                        ? child.material[0]
                        : child.material;
                    var baseColor = origMat.color
                        ? origMat.color.getHex()
                        : 0xffffff;
                    var isEmissive = origMat.emissive
                        && origMat.emissive.getHex() !== 0x000000;
                    child.material = isEmissive
                        ? new THREE.MeshBasicMaterial({
                            color: baseColor,
                            transparent: true,
                            opacity: Math.max(origMat.emissiveIntensity || 0.5, 0.3)
                          })
                        : global.toonMat({ color: baseColor });
                    child.castShadow = true;
                    child.receiveShadow = true;
                    global.addOutline(child, 0.03);
                }
            });
            if (callback) callback(group);
        };
        script.onerror = function () {
            console.error('Failed to load JS scene:', url);
        };
        document.head.appendChild(script);
        return group;
    };

})(window);
