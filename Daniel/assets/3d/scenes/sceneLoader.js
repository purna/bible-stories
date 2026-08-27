/* =========================================================================
   DANIEL — 3D Scene JSON Loader
   Reads scene definitions from /assets/3d/scenes/*.json and builds
   Three.js toon-shaded scenes at runtime. Falls back to SCENE_FACTORIES
   if JSON is unavailable or fails to load.

   JSON format is compatible with pixel3d's export format:
   - type, shapeType, color, position, rotation, scale
   - userData carries Daniel-specific extensions (material, outline, etc.)
   ========================================================================= */

(function (global) {
    'use strict';

    var THREE = global.THREE;
    if (!THREE) { console.warn('Three.js not loaded, sceneLoader inactive'); return; }

    var loadedScenes = {};
    var sceneCache = {};

    /* ── Helpers ───────────────────────────────────────────────────── */

    function hexToInt(hex) {
        if (!hex) return 0xffffff;
        if (hex.startsWith('#')) hex = hex.slice(1);
        return parseInt(hex, 16);
    }

    function applyTransform(obj, t) {
        if (t.position) obj.position.set(t.position.x || 0, t.position.y || 0, t.position.z || 0);
        if (t.rotation) obj.rotation.set(t.rotation.x || 0, t.rotation.y || 0, t.rotation.z || 0);
        if (t.scale) obj.scale.set(t.scale.x || 1, t.scale.y || 1, t.scale.z || 1);
    }

    /* ── Material Factory ──────────────────────────────────────────── */

    function createMaterial(matData) {
        var matType = matData.material || 'toon';
        var color = hexToInt(matData.color);
        var opts = {
            color: color,
            metalness: matData.metalness || 0.1,
            roughness: matData.roughness || 0.6
        };

        if (matType === 'toon') {
            opts.gradientMap = global.gradientMap;
            return new THREE.MeshToonMaterial(opts);
        }

        if (matType === 'basic') {
            return new THREE.MeshBasicMaterial({
                color: color,
                transparent: matData.transparent || false,
                opacity: matData.opacity != null ? matData.opacity : 1,
                side: matData.side === 'DoubleSide' ? THREE.DoubleSide : THREE.FrontSide,
                depthWrite: matData.depthWrite !== false
            });
        }

        if (matType === 'standard') {
            opts.emissive = hexToInt(matData.emissive) || 0x000000;
            opts.emissiveIntensity = matData.emissiveIntensity || 0;
            return new THREE.MeshStandardMaterial(opts);
        }

        return new THREE.MeshToonMaterial(opts);
    }

    /* ── Geometry Factory ──────────────────────────────────────────── */

    function createGeometry(geoData) {
        var type = geoData.type || 'box';
        var p = geoData.params || [];

        switch (type) {
            case 'box': return new THREE.BoxGeometry(p[0] || 1, p[1] || 1, p[2] || 1);
            case 'sphere': return new THREE.SphereGeometry(p[0] || 0.5, p[1] || 16, p[2] || 12);
            case 'cylinder': return new THREE.CylinderGeometry(p[0] || 0.5, p[1] || 0.5, p[2] || 1, p[3] || 8);
            case 'plane': return new THREE.PlaneGeometry(p[0] || 1, p[1] || 1);
            case 'ring': return new THREE.RingGeometry(p[0] || 0.5, p[1] || 1, p[2] || 32);
            case 'cone': return new THREE.ConeGeometry(p[0] || 0.5, p[1] || 1, p[2] || 8);
            default: return new THREE.BoxGeometry(1, 1, 1);
        }
    }

    /* ── Object Builder ────────────────────────────────────────────── */

    function buildObject(objData) {
        var geometry = createGeometry(objData.geometry);
        var material = createMaterial(objData.material || objData);
        var mesh = new THREE.Mesh(geometry, material);

        applyTransform(mesh, objData);

        if (objData.castShadow) mesh.castShadow = true;
        if (objData.receiveShadow) mesh.receiveShadow = true;
        if (objData.renderOrder) mesh.renderOrder = objData.renderOrder;

        mesh.name = objData.id || '';

        /* Outline */
        if (objData.outline !== false && objData.geometry && objData.material && objData.material.material !== 'basic') {
            var outlineMat = new THREE.MeshBasicMaterial({
                color: 0x000000,
                side: THREE.BackSide,
                transparent: true,
                opacity: objData.outlineOpacity != null ? objData.outlineOpacity : 0.85
            });
            var outline = new THREE.Mesh(geometry, outlineMat);
            var s = objData.outlineScale || 0.08;
            outline.scale.set(1 + s, 1 + s, 1 + s);
            outline.renderOrder = -1;
            mesh.add(outline);
        }

        return mesh;
    }

    /* ── Light Builder ─────────────────────────────────────────────── */

    function buildLight(lightData) {
        var light;
        var color = hexToInt(lightData.color);

        switch (lightData.type) {
            case 'ambient':
                light = new THREE.AmbientLight(color, lightData.intensity || 0.4);
                return light;
            case 'directional':
                light = new THREE.DirectionalLight(color, lightData.intensity || 1);
                if (lightData.position) light.position.set(lightData.position.x, lightData.position.y, lightData.position.z);
                if (lightData.castShadow) light.castShadow = true;
                return light;
            case 'point':
                light = new THREE.PointLight(color, lightData.intensity || 1, lightData.distance || 40);
                if (lightData.position) light.position.set(lightData.position.x, lightData.position.y, lightData.position.z);
                return light;
            default:
                light = new THREE.AmbientLight(color, lightData.intensity || 0.4);
                return light;
        }
    }

    /* ── Particle Builder ──────────────────────────────────────────── */

    function buildParticleGroup(pData) {
        var group = new THREE.Group();
        group.name = pData.id || 'particles';
        var count = pData.count || 20;
        var spread = pData.spread || { x: 20, y: 10, z: 20 };
        var geoData = pData.geometry || { type: 'plane', params: [2, 4] };
        var matData = pData.material || { color: '#ffffff', transparent: true, opacity: 0.3, side: 'DoubleSide', depthWrite: false };

        for (var i = 0; i < count; i++) {
            var geo = createGeometry(geoData);
            var mat = createMaterial(matData);
            var mesh = new THREE.Mesh(geo, mat);

            mesh.position.set(
                (Math.random() - 0.5) * (spread.x || 20),
                (spread.y && spread.y[0] != null ? spread.y[0] + Math.random() * ((spread.y[1] || 10) - (spread.y[0] || 0)) : (Math.random() - 0.5) * (spread.y || 10)),
                (Math.random() - 0.5) * (spread.z || 20)
            );

            mesh.rotation.z = (Math.random() - 0.5) * 0.5;
            mesh.userData = {
                speed: pData.speedRange ? pData.speedRange[0] + Math.random() * (pData.speedRange[1] - pData.speedRange[0]) : 1,
                offset: Math.random() * Math.PI * 2,
                baseY: mesh.position.y
            };

            group.add(mesh);
        }

        return group;
    }

    /* ── Group Builder ─────────────────────────────────────────────── */

    function buildGroup(groupData) {
        var group = new THREE.Group();
        group.name = groupData.id || '';

        if (groupData.objects) {
            groupData.objects.forEach(function (objData) {
                var obj = buildObject(objData);
                group.add(obj);
            });
        }

        if (groupData.groups) {
            groupData.groups.forEach(function (childGroup) {
                var g = buildGroup(childGroup);
                group.add(g);
            });
        }

        applyTransform(group, groupData);

        group.userData.animation = groupData.animation || null;

        return group;
    }

    /* ── Scene Builder ─────────────────────────────────────────────── */

    function buildScene(data) {
        var scene = new THREE.Scene();

        if (data.background) {
            scene.background = new THREE.Color(data.background);
        }

        if (data.fog) {
            var fogColor = data.fog.color || data.background || '#000000';
            scene.fog = new THREE.FogExp2(new THREE.Color(fogColor), data.fog.density || 0.01);
        }

        /* Objects */
        if (data.objects) {
            data.objects.forEach(function (objData) {
                var obj = buildObject(objData);
                scene.add(obj);
            });
        }

        /* Groups */
        if (data.groups) {
            data.groups.forEach(function (groupData) {
                var group = buildGroup(groupData);
                scene.add(group);
            });
        }

        /* Lights */
        if (data.lights) {
            data.lights.forEach(function (lightData) {
                var light = buildLight(lightData);
                scene.add(light);
            });
        }

        /* Particles */
        if (data.particles) {
            data.particles.forEach(function (pData) {
                var group = buildParticleGroup(pData);
                scene.add(group);
            });
        }

        return scene;
    }

    /* ── Animation Runner ──────────────────────────────────────────── */

    function runAnimations(scene, time, sceneData) {
        var t = time * 0.001;

        /* Group animations */
        scene.traverse(function (child) {
            if (child.userData && child.userData.animation) {
                var anim = child.userData.animation;
                if (anim.type === 'rotate' && anim.property) {
                    child[anim.property] = (child[anim.property] || 0) + anim.speed * 0.016;
                } else if (anim.type === 'pulse' && anim.property) {
                    var base = anim.base != null ? anim.base : 1;
                    var amp = anim.amplitude || 0.2;
                    var freq = anim.frequency || 2;
                    child[anim.property] = base + Math.sin(t * freq + (child.id || 0)) * amp;
                } else if (anim.type === 'float') {
                    child.position.y = (child.userData.baseY || child.position.y) + Math.sin(t * 0.5 + (child.id || 0)) * 0.5;
                }
            }
        });

        /* Particle animations */
        if (sceneData && sceneData.particles) {
            sceneData.particles.forEach(function (pData) {
                scene.traverse(function (child) {
                    if (child.name === (pData.id || 'particles') && child.userData && child.userData.speed) {
                        var ud = child.userData;
                        if (pData.animation && pData.animation.type === 'flame') {
                            child.children.forEach(function (flame) {
                                if (flame.material && flame.material.opacity != null) {
                                    var baseOp = pData.material.opacity || 0.4;
                                    flame.material.opacity = baseOp + Math.sin(t * ud.speed + ud.offset) * 0.2;
                                }
                                if (pData.animation.scaleYRange && flame.scale) {
                                    flame.scale.y = 1 + Math.sin(t * ud.speed * 2 + ud.offset) * 0.3;
                                }
                            });
                        } else if (pData.animation && pData.animation.type === 'rise') {
                            child.children.forEach(function (p) {
                                p.position.y += ud.speed * 0.1;
                                if (p.position.y > 10) p.position.y = -10;
                            });
                        } else if (pData.animation && pData.animation.type === 'ember') {
                            child.children.forEach(function (ember) {
                                ember.position.y += ud.speed * 0.3;
                                ember.position.x += (Math.random() - 0.5) * 0.1;
                                if (ember.position.y > 20) {
                                    ember.position.y = -8;
                                    ember.position.x = (Math.random() - 0.5) * 80;
                                }
                                if (ember.material) ember.material.opacity = 0.5 + Math.sin(t * 3 + ud.offset) * 0.3;
                            });
                        } else if (pData.animation && pData.animation.type === 'smoke') {
                            child.children.forEach(function (smoke) {
                                smoke.userData.rise = (smoke.userData.rise || 0) + 0.3;
                                smoke.position.y += 0.2;
                                smoke.position.x += (Math.random() - 0.5) * 0.2;
                                if (smoke.position.y > 20) {
                                    smoke.position.y = -8;
                                    smoke.position.x = (Math.random() - 0.5) * 100;
                                }
                                smoke.scale.setScalar(1 + smoke.userData.rise * 0.02);
                            });
                        }
                    }
                });
            });
        }

        /* Light animations */
        if (sceneData && sceneData.lightAnimations) {
            sceneData.lightAnimations.forEach(function (la) {
                scene.traverse(function (child) {
                    if (child.isLight && child.name === la.id) {
                        if (la.property === 'intensity') {
                            child.intensity = (la.base || child.intensity) + Math.sin(t * (la.frequency || 2)) * (la.amplitude || 0.3);
                        }
                    }
                });
            });
        }
    }

    /* ── Camera Config Extractor ───────────────────────────────────── */

    function getCameraConfig(sceneData) {
        return sceneData.camera || { distance: 60, height: 15, fov: 55 };
    }

    /* ── Public API ────────────────────────────────────────────────── */

    function loadSceneFromJSON(sceneData) {
        var scene = buildScene(sceneData);
        var cameraConfig = getCameraConfig(sceneData);
        var animRunner = function (time) { runAnimations(scene, time, sceneData); };

        return {
            scene: scene,
            cameraConfig: cameraConfig,
            animate: animRunner
        };
    }

    async function loadScene(id) {
        if (sceneCache[id]) return sceneCache[id];

        try {
            var res = await fetch('assets/3d/scenes/' + id + '.json');
            if (!res.ok) throw new Error('Scene JSON not found: ' + id);
            var data = await res.json();
            var result = loadSceneFromJSON(data);
            sceneCache[id] = result;
            return result;
        } catch (e) {
            console.warn('JSON scene load failed for ' + id + ':', e);
            return null;
        }
    }

    function buildSceneFromData(data) {
        var result = loadSceneFromJSON(data);
        return result;
    }

    global.SceneLoader = {
        loadScene: loadScene,
        buildSceneFromData: buildSceneFromData,
        getCameraConfig: getCameraConfig
    };

})(window);
