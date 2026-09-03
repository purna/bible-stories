(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.creation_separation = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.night);
        makeFog(scene, 0x000000, 0.0025);

        // stars
        makeStars(scene, 200, 180, 0xffffff, 0.8);

        // light hemisphere (left) — divine light
        var lightGroup = makeLightSphere(0xffffff, 3, 60);
        lightGroup.position.set(-20, 10, 0);
        scene.add(lightGroup);

        // darkness sphere (right) — representing the absence of light
        var darkGeo = new THREE.SphereGeometry(15, 24, 16);
        var darkMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.7 });
        var darkSphere = new THREE.Mesh(darkGeo, darkMat);
        darkSphere.position.set(25, 0, 0);
        scene.add(darkSphere);

        // Earth and Moon in background
        var earthGeo = new THREE.SphereGeometry(8, 20, 16);
        var earth = new THREE.Mesh(earthGeo, toonMat({ color: 0x2a7d3a }));
        earth.position.set(-40, -15, 0);
        scene.add(earth);
        addOutline(earth, 0.06);

        var moonGeo = new THREE.SphereGeometry(4, 16, 12);
        var moon = new THREE.Mesh(moonGeo, toonMat({ color: 0xcccccc }));
        moon.position.set(50, 25, -30);
        scene.add(moon);
        addOutline(moon, 0.05);

        // light rays from light sphere
        var rayMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.15 });
        var rays = [];
        for (var i = 0; i < 8; i++) {
            var angle = (i / 8) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(2, 50);
            rayGeo.rotateX(Math.PI / 2);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 15 + (-20), 5, Math.sin(angle) * 15);
            ray.rotation.y = angle;
            scene.add(ray);
            rays.push(ray);
        }

        // lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(0, 30, 0);
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 10 },
            animate: function (time) {
                lightGroup.material.opacity = 0.6 + Math.sin(time * 0.8) * 0.1;
                darkSphere.material.opacity = 0.7 + Math.sin(time * 0.5) * 0.05;
                for (var i = 0; i < rays.length; i++) {
                    rays[i].material.opacity = 0.15 + Math.sin(time * 0.3 + i * 0.5) * 0.05;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.04;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 5;
                c.phi = Math.PI / 4 + Math.sin(t * 0.1) * 0.05;
                c.roll = Math.sin(t * 0.25) * 0.02;
                c.targetX = 0; c.targetY = 0; c.targetZ = 0;
            }
        };
    };
})(window);
