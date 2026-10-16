(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // garden_warning — divine warning about the tree of knowledge
    // Two trees prominent, divine light pillars between them, Adam and Eve approaching.
    // Camera focuses on the choice between the two trees.
    global.SCENE_FACTORIES.garden_warning = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x220000, 0.0025);

        scene.add(makeGround(180, 0x5c4033, -0.5));

        // Tree of Knowledge (left) — red fruit, ominous
        var knowTree = makeTreeWithFruit(COLORS.redFruit, 0x4a7a3a);
        knowTree.position.set(-45, 0, 0);
        scene.add(knowTree);

        // Tree of Life (right) — golden fruit, inviting
        var lifeTree = makeTreeWithFruit(COLORS.gold, 0x5a7a3a);
        lifeTree.position.set(45, 0, 0);
        scene.add(lifeTree);

        // Divine light between them — the warning
        var light = makeLightSphere(0xffffff, 1.5, 50);
        light.position.set(0, 45, 0);
        scene.add(light);

        // Light column between the trees
        var colMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.15 });
        var colGeo = new THREE.PlaneGeometry(10, 45);
        colGeo.rotateX(Math.PI / 2);
        var col1 = new THREE.Mesh(colGeo, colMat);
        col1.position.set(-20, 22, 0);
        scene.add(col1);
        var col2 = new THREE.Mesh(colGeo, colMat);
        col2.position.set(20, 22, 0);
        scene.add(col2);

        // Adam and Eve approaching — small, listening
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, -55);
        adam.lookAt(0, 0, 0);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(-5, 0, -60);
        eve.lookAt(0, 0, 0);
        scene.add(eve);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var sun = new THREE.DirectionalLight(0xffffff, 0.7);
        sun.position.set(0, 40, 20);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 15 },
            animate: function (time) {
                if (light) {
                    light.scale.setScalar(1 + Math.sin(time * 0.3) * 0.05);
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.025;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 5;
                c.phi = Math.PI / 5 + Math.sin(t * 0.12) * 0.05;
                c.targetX = Math.sin(t * 0.4) * 5;
                c.targetY = 45 + Math.sin(t * 0.4) * 1;
                c.targetZ = 0;
                c.roll = Math.sin(t * 0.3) * 0.04;
            }
        };
    };
})(window);
