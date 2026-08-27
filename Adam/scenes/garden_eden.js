(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // garden_eden — the garden itself as paradise
    // Focus: the environment — Tree of Life central, winding river,
    // many trees planted. Adam is forming from dust (partially transparent).
    global.SCENE_FACTORIES.garden_eden = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.002);

        // Ground with checkerboard pattern suggestion
        scene.add(makeGround(200, COLORS.earth, -0.5));

        // Tree of Life — central, golden, dominant
        var lifeTree = makeTree(40, 5, 28, MAT.gold, MAT.bark);
        lifeTree.position.set(-10, 0, -20);
        scene.add(lifeTree);

        // Golden fruit on Tree of Life
        var goldFruit = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 12), MAT.gold);
        goldFruit.position.set(-10, 40, -20);
        scene.add(goldFruit);
        addOutline(goldFruit, 0.1);

        // Divine glow from Tree of Life
        var glow = makeLightSphere(0xFFD84D, 1.2, 40);
        glow.position.set(-10, 45, -20);
        scene.add(glow);

        // Tree of Knowledge — off to the side (not yet approached)
        var knowTree = makeTreeWithFruit(COLORS.redFruit, 0x5a7a3a);
        knowTree.position.set(50, 0, 20);
        scene.add(knowTree);

        // Garden trees arranged in a pattern (paradise layout)
        for (var t = 0; t < 10; t++) {
            var tree = makeTree(15 + Math.random() * 8, 3, 15);
            var angle = (t / 10) * Math.PI * 2;
            tree.position.set(
                Math.cos(angle) * 70 + Math.random() * 10,
                0,
                Math.sin(angle) * 70 + Math.random() * 10
            );
            scene.add(tree);
        }

        // Adam forming from dust — use a slightly transparent character
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(30, -3, 15);
        adam.traverse(function (child) {
            if (child.material && child.material.transparent !== undefined) {
                child.material.transparent = true;
                child.material.opacity = 0.3;
            } else if (child.material) {
                child.material = toonMat({ color: child.material.color.getHex(), transparent: true, opacity: 0.3 });
            }
        });
        scene.add(adam);

        // Dust particles rising where Adam forms
        var dustParticles = [];
        for (var d = 0; d < 30; d++) {
            var dust = new THREE.Mesh(new THREE.SphereGeometry(1, 6, 6), new THREE.MeshBasicMaterial({ color: 0x8B4513, transparent: true, opacity: 0.4 }));
            dust.position.set(30 + (Math.random() - 0.5) * 10, -3 + Math.random() * 15, 15 + (Math.random() - 0.5) * 10);
            scene.add(dust);
            dustParticles.push(dust);
        }

        // Winding river (CatmullRomCurve3 spline)
        var riverPoints = [];
        for (var r = 0; r <= 10; r++) {
            var rt = r / 10;
            riverPoints.push(new THREE.Vector3(
                -40 + rt * 80,
                0.2,
                Math.sin(rt * Math.PI * 2) * 20
            ));
        }
        var riverCurve = new THREE.CatmullRomCurve3(riverPoints);
        var riverGeo = new THREE.TubeGeometry(riverCurve, 40, 5, 8, false);
        var river = new THREE.Mesh(riverGeo, toonMat({ color: COLORS.water }));
        scene.add(river);
        addOutline(river, 0.03);

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(-30, 40, 30);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 110, height: 25 },
            animate: function (time) {
                // Tree of Life pulses
                if (glow) {
                    glow.scale.setScalar(1.5 + Math.sin(time * 0.5) * 0.1);
                }
                // Dust rises from the forming Adam
                for (var i = 0; i < dustParticles.length; i++) {
                    dustParticles[i].position.y += 0.05;
                    dustParticles[i].material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.2;
                    if (dustParticles[i].position.y > 15) {
                        dustParticles[i].position.y = -3;
                    }
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.025;
                c.distance = c.baseDistance + Math.sin(t * 0.12) * 8;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.08) * 0.1;
                // Focus on Tree of Life, pan to Adam forming
                var f = Math.sin(t * 0.15);
                c.targetX = -10 + f * 20;
                c.targetY = 20 + f * 5;
                c.targetZ = -20 + f * 10;
                c.roll = f * 0.02;
            }
        };
    };
})(window);
