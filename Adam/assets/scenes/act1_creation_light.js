(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // creation_light — "LET THERE BE LIGHT!"
    // Divine command scene: light burst dominates, earth/moon in silhouette.
    // Camera slowly pushes in on the light source with expanding waves.
    global.SCENE_FACTORIES.creation_light = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.night);
        makeFog(scene, 0x000000, 0.003);

        // Stars — far
        makeStars(scene, 200, 180, 0xffffff, 0.8);
        makeStars(scene, 80, 160, COLORS.gold, 0.9);

        // Earth — silhouette, now visible as light touches it
        var earthGeo = new THREE.SphereGeometry(18, 32, 16);
        var earth = new THREE.Mesh(earthGeo, toonMat(0x1a251a));
        earth.position.set(-50, -20, 0);
        earth.castShadow = earth.receiveShadow = true;
        scene.add(earth);
        addOutline(earth, 0.05);

        // Moon — distant witness
        var moonGeo = new THREE.SphereGeometry(8, 16, 12);
        var moon = new THREE.Mesh(moonGeo, toonMat(0xcccccc));
        moon.position.set(60, 30, -40);
        scene.add(moon);
        addOutline(moon, 0.04);

        // Central light burst — "Let there be light"
        var light = makeLightSphere(0xffffff, 2.5, 70);
        light.position.set(0, 10, 0);
        scene.add(light);

        // Expanding wave rings
        var waveGroup = new THREE.Group();
        for (var w = 0; w < 6; w++) {
            var ringGeo = new THREE.RingGeometry(10 + w * 8, 12 + w * 8, 32);
            var ringMat = new THREE.MeshBasicMaterial({
                color: COLORS.gold,
                transparent: true,
                opacity: 0.15 - w * 0.02,
                side: THREE.DoubleSide
            });
            var ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 3;
            ring.position.y = 10;
            waveGroup.add(ring);
        }
        scene.add(waveGroup);

        // Light rays emanating outward
        var rayMat = new THREE.MeshBasicMaterial({ color: COLORS.gold, transparent: true, opacity: 0.12 });
        for (var i = 0; i < 12; i++) {
            var angle = (i / 12) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(2, 80);
            rayGeo.rotateX(Math.PI / 2);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 14, 10, Math.sin(angle) * 14);
            ray.rotation.y = angle;
            scene.add(ray);
        }

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 1);
        sun.position.set(0, 30, 0);
        sun.castShadow = true;
        sun.shadow.camera.left = -80;
        sun.shadow.camera.right = 80;
        sun.shadow.camera.top = 80;
        sun.shadow.camera.bottom = -80;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 10 },
            animate: function (time) {
                // Light pulsing — divine command
                light.scale.setScalar(1 + Math.sin(time * 0.4) * 0.15);
                // Expanding waves
                waveGroup.children.forEach(function (ring, idx) {
                    ring.scale.setScalar(1 + Math.sin(time * 0.3 + idx * 0.5) * 0.1);
                    ring.material.opacity = 0.15 - idx * 0.02 + Math.sin(time * 0.5 + idx) * 0.03;
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                // Slow push-in on the light burst
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance - Math.sin(t * 0.15) * 8;
                c.phi = Math.PI / 4 + Math.sin(t * 0.2) * 0.1;
                c.targetX = Math.sin(t * 0.4) * 2;
                c.targetY = 10;
                c.targetZ = Math.cos(t * 0.4) * 2;
                c.roll = Math.sin(t * 0.3) * 0.05;
            }
        };
    };
})(window);
