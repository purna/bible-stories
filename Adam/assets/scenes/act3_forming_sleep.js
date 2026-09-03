(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // forming_sleep — WHALEFALL: deep sleep, rib extraction, Eve forming from the wound
    // Adam lying on his side, a glowing spline-tube of light pouring from his side
    // representing the rib extraction. Eve is being shaped from this light stream.
    // Camera is low-angle, close to the wound, creating intimacy and mystery.
    global.SCENE_FACTORIES.forming_sleep = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x160a14);
        makeFog(scene, 0x0a0e1a, 0.004);

        scene.add(makeGround(180, 0x5c4033, -0.5));

        // Adam — lying on his side (sleeping), chest wound visible
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, -5, 0);
        adam.rotation.z = -Math.PI / 4;
        adam.traverse(function (child) {
            if (child.geometry && child.geometry.type === 'CylinderGeometry') {
                child.visible = false;
            }
        });
        scene.add(adam);

        // Rib extraction — light pouring from Adam's side as a spline tube
        var woundPoints = [
            new THREE.Vector3(0, 22, 0),
            new THREE.Vector3(5, 26, 5),
            new THREE.Vector3(10, 30, 10),
            new THREE.Vector3(15, 34, 15),
            new THREE.Vector3(20, 38, 20),
        ];
        var woundCurve = new THREE.CatmullRomCurve3(woundPoints);
        var woundGeo = new THREE.TubeGeometry(woundCurve, 30, 2, 10, false);
        var woundLight = makeLightSphere(0x4ECDC4, 1.5, 40);
        woundLight.position.copy(woundPoints[0]);
        scene.add(woundLight);

        var woundMesh = new THREE.Mesh(
            woundGeo,
            new THREE.MeshBasicMaterial({ color: 0x4ECDC4, transparent: true, opacity: 0.4 })
        );
        scene.add(woundMesh);

        // Eve forming at the top of the light stream
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.copy(woundPoints[4].clone().add(new THREE.Vector3(0, -5, 0)));
        eve.scale.set(0.5, 0.8, 0.5);
        scene.add(eve);

        // Particles flowing along the light stream (souls in transit)
        var particleGeo = new THREE.SphereGeometry(1, 8, 8);
        var particles = [];
        for (var p = 0; p < 15; p++) {
            var particle = new THREE.Mesh(particleGeo, new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.8 }));
            scene.add(particle);
            particles.push(particle);
        }

        // Night stars background
        makeStars(scene, 100, 160, 0xffffff, 0.7);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var dirLight = new THREE.DirectionalLight(0x4ECDC4, 1.0);
        dirLight.position.set(20, 40, 20);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 55, height: 25 },
            animate: function (time) {
                if (woundLight) {
                    woundLight.scale.setScalar(1 + Math.sin(time * 0.5) * 0.15);
                }
                for (var i = 0; i < particles.length; i++) {
                    var pct = (time * 0.05 + i * 0.07) % 1;
                    if (pct < 0) pct += 1;
                    var pos = woundCurve.getPointAt(pct);
                    particles[i].position.copy(pos);
                    particles[i].position.y += Math.sin(time * 3 + i) * 0.5;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.04;
                c.distance = c.baseDistance + Math.sin(t * 0.3) * 3;
                c.phi = Math.PI / 5;
                c.targetX = 12 + Math.sin(t * 0.3) * 3;
                c.targetY = 24;
                c.targetZ = 12;
                c.roll = Math.sin(t * 0.2) * 0.04;
            }
        };
    };
})(window);
