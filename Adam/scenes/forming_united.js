(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // forming_united — Adam and Eve together, "bone of my bones"
    // The first couple, side by side. Camera shows their connection —
    // gentle, intimate, establishing the union.
    global.SCENE_FACTORIES.forming_united = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x0a0e1a, 0.003);

        scene.add(makeGround(200, 0x5c4033, -0.5));

        // Adam — on the left
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(-25, 0, 10);
        scene.add(adam);

        // Eve — on the right, gentle
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(25, 0, 10);
        scene.add(eve);

        // Tree of Life behind them — golden
        var lifeTree = makeTree(35, 5, 25, MAT.gold, MAT.bark);
        lifeTree.position.set(0, 0, -50);
        scene.add(lifeTree);
        var goldFruit = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 12), MAT.gold);
        goldFruit.position.set(0, 40, -50);
        scene.add(goldFruit);
        addOutline(goldFruit, 0.1);

        // Divine light blessing them
        var light = makeLightSphere(0xFFD84D, 1, 40);
        light.position.set(0, 35, 0);
        scene.add(light);

        // Soft glow between them
        var bondGeo = new THREE.PlaneGeometry(50, 10, 1, 4);
        var bondMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.12 });
        var bond = new THREE.Mesh(bondGeo, bondMat);
        bond.rotation.x = -Math.PI / 2;
        bond.position.set(0, 0.5, 10);
        scene.add(bond);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(0, 35, 15);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 75, height: 15 },
            animate: function (time) {
                if (light) {
                    light.scale.setScalar(1 + Math.sin(time * 0.4) * 0.05);
                }
                adam.position.y = Math.sin(time * 0.5) * 0.2;
                eve.position.y = Math.cos(time * 0.5) * 0.2;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.035;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 4;
                c.phi = Math.PI / 4;
                c.targetX = 0;
                c.targetY = 0;
                c.targetZ = 10;
                c.roll = Math.sin(t * 0.25) * 0.03;
            }
        };
    };
})(window);
