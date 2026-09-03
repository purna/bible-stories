(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.forming_eve = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x160a14);
        makeFog(scene, 0x0a0e1a, 0.003);

        scene.add(makeGround(180, 0x5c4033, -0.5));

        // Adam — sleeping on ground, lying on side
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(-20, -5, 0);
        adam.rotation.z = -0.3;
        scene.add(adam);

        // Leaf shelter above
        var shelterGeo = new THREE.PlaneGeometry(50, 30);
        shelterGeo.rotateX(-Math.PI / 4);
        var shelter = new THREE.Mesh(shelterGeo, toonMat({ color: 0x6a8a4a, transparent: true, opacity: 0.6 }));
        shelter.position.set(-20, 35, 0);
        scene.add(shelter);
        addOutline(shelter, 0.05);

        // Divine light forming Eve — emphasis: the act of creation
        var formingLight = makeLightSphere(0x4ECDC4, 1, 40);
        formingLight.position.set(30, 25, 0);
        scene.add(formingLight);

        // Eve figure — emerging
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(30, 0, 0);
        scene.add(eve);

        // Light particles between Adam and Eve — movement: divine act
        var particles = [];
        for (var p = 0; p < 20; p++) {
            var particle = new THREE.Mesh(new THREE.SphereGeometry(1.5, 8, 8), new THREE.MeshBasicMaterial({ color: 0xFFD84D }));
            particle.position.set(
                -20 + Math.random() * 50,
                10 + Math.random() * 20,
                (Math.random() - 0.5) * 20
            );
            scene.add(particle);
            particles.push(particle);
        }

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var dirLight = new THREE.DirectionalLight(0x4ECDC4, 0.8);
        dirLight.position.set(30, 40, 0);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 15 },
            animate: function (time) {
                if (formingLight) {
                    formingLight.scale.setScalar(1 + Math.sin(time * 0.3) * 0.1);
                }
                for (var i = 0; i < particles.length; i++) {
                    particles[i].position.y += Math.sin(time * 2 + i) * 0.03;
                    particles[i].scale.setScalar(0.8 + Math.sin(time * 2 + i) * 0.2);
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.035;
                c.distance = c.baseDistance + Math.sin(t * 0.3) * 4;
                c.phi = Math.PI / 4;
                var pulse = Math.sin(t * 0.3) * 0.1;
                c.targetX = 30 + pulse * 5;
                c.targetY = 25 + pulse * 2;
                c.targetZ = 0;
                c.roll = pulse * 0.02;
            }
        };
    };
})(window);
