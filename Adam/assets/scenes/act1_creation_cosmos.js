(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.creation_cosmos = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.night);
        makeFog(scene, 0x000000, 0.0025);

        // stars — 280 total for vast cosmic depth
        makeStars(scene, 200, 180, 0xffffff, 0.8);
        makeStars(scene, 80, 160, 0xFFD84D, 0.9);

        // nebula clouds — depth layers for parallax
        var nebulaMat = new THREE.MeshBasicMaterial({ color: 0xB98CFF, transparent: true, opacity: 0.08 });
        var nebulaGeo = new THREE.PlaneGeometry(120, 80);
        var nebula1 = new THREE.Mesh(nebulaGeo, nebulaMat);
        nebula1.position.set(-40, 20, -30);
        nebula1.rotation.x = -Math.PI / 3;
        scene.add(nebula1);

        var nebulaMat2 = new THREE.MeshBasicMaterial({ color: 0x4ECDC4, transparent: true, opacity: 0.06 });
        var nebula2 = new THREE.Mesh(nebulaGeo, nebulaMat2);
        nebula2.position.set(50, -10, -40);
        nebula2.rotation.x = -Math.PI / 4;
        scene.add(nebula2);

        // central light burst — "Let there be light"
        var light = makeLightSphere(0xffffff, 2, 60);
        light.position.set(0, 10, 0);
        scene.add(light);

        // Earth sphere — teal-green, lower left
        var earthGeo = new THREE.SphereGeometry(18, 32, 16);
        var earthMat = toonMat({ color: 0x2a7d3a });
        var earth = new THREE.Mesh(earthGeo, earthMat);
        earth.position.set(-50, -20, 0);
        earth.castShadow = earth.receiveShadow = true;
        scene.add(earth);
        addOutline(earth, 0.06);

        // moon — gray, upper right
        var moonGeo = new THREE.SphereGeometry(8, 16, 12);
        var moonMat = toonMat({ color: 0xcccccc });
        var moon = new THREE.Mesh(moonGeo, moonMat);
        moon.position.set(60, 30, -40);
        scene.add(moon);
        addOutline(moon, 0.05);

        // light rays — pulsing beams radiating from center
        var rayMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.15 });
        var rays = [];
        for (var i = 0; i < 8; i++) {
            var angle = (i / 8) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(2, 50);
            rayGeo.rotateX(Math.PI / 2);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 12, 5, Math.sin(angle) * 12);
            ray.rotation.y = angle;
            scene.add(ray);
            rays.push(ray);
        }

        // ambient + directional light
        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(0, 30, 0);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 60, height: 20 },
            animate: function (time) {
                // light pulse for divine presence
                light.position.y = 10 + Math.sin(time * 0.5) * 0.5;
                // ray opacity oscillation for ethereal quality
                for (var i = 0; i < rays.length; i++) {
                    rays[i].material.opacity = 0.15 + Math.sin(time * 0.3 + i * 0.5) * 0.05;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.05;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 3;
                c.phi = Math.PI / 4 + Math.sin(t * 0.15) * 0.1;
                c.roll = Math.sin(t * 0.25) * 0.03;
                c.targetX = 0; c.targetY = 10; c.targetZ = 0;
            }
        };
    };
})(window);
