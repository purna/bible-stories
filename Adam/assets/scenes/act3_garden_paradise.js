(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.garden_paradise = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x000000, 0.0025);

        // Starfield
        makeStars(scene, 300, 400, 0xffffff, 1);

        // Ground plane
        scene.add(makeGround(500, COLORS.earth, -1));

        // Lighting — base lights from helpers
        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
        var sun = new THREE.DirectionalLight(0xffffff, 0.6);
        sun.position.set(40, 80, 20);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        scene.add(sun);

        // Divine light orbs
        var divineLight = makeLightSphere(0xFFD84D, 0.6, 150);
        divineLight.scale.set(2, 2, 2);
        divineLight.position.set(0, 40, 0);
        scene.add(divineLight);

        // Container for the pixel3d/ Spline scene
        var sceneGroup = new THREE.Group();
        scene.add(sceneGroup);

        var loaded = false;
        var riverCurve = null;
        var particles = [];

        // --- Load from pixel3d JS export (assets/3d/act3_garden_paradise.js) ---
        loadJSScene('assets/3d/act3_garden_paradise.js', sceneGroup, function (group) {
            loaded = true;

            // Build a sine-wave spline through the garden for particle flow
            var pts = [];
            for (var i = 0; i <= 10; i++) {
                var t = i / 10;
                pts.push(new THREE.Vector3(
                    -80 + t * 160,
                    2 + Math.sin(t * Math.PI * 2) * 3,
                    Math.sin(t * Math.PI) * 40
                ));
            }
            riverCurve = new THREE.CatmullRomCurve3(pts);

            // Add golden particle flow along the river spline
            var particleGeo = new THREE.SphereGeometry(1.5, 6, 6);
            for (var p = 0; p < 8; p++) {
                var particle = new THREE.Mesh(particleGeo, MAT.emissiveGold);
                sceneGroup.add(particle);
                particles.push(particle);
            }
        });

        // Also try loading JSON scene data (for pixel3d editor workflow)
        var jsonGroup = new THREE.Group();
        scene.add(jsonGroup);

        if (typeof fetch !== 'undefined') {
            fetch('assets/3d/act3_garden_paradise.json')
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (data && data.objects) {
                        loadJSONScene(data, scene);
                    }
                })
                .catch(function() { /* JSON not available, that's OK */ });
        }

        return {
            scene: scene,
            cameraConfig: { distance: 100, height: 20 },
            animate: function (time) {
                divineLight.material.opacity = 0.6 + Math.sin(time * 1.5) * 0.1;

                if (loaded && riverCurve && particles.length) {
                    for (var i = 0; i < particles.length; i++) {
                        var pct = (time * 0.08 + i * 0.12) % 1;
                        if (pct < 0) pct += 1;
                        var pos = riverCurve.getPointAt(pct);
                        particles[i].position.copy(pos);
                        particles[i].position.y += Math.sin(time + i) * 0.5;
                    }
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.06;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.12) * 0.1;
                c.roll = Math.sin(t * 0.18) * 0.04;
                c.targetX = Math.sin(t * 0.25) * 15;
                c.targetY = 5;
                c.targetZ = Math.cos(t * 0.25) * 15;
            }
        };
    };
})(window);
