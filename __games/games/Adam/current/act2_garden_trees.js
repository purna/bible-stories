(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.garden_trees = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.0025);

        // ground
        scene.add(makeGround(120, 0x5c4033, -0.5));

        // Tree of Knowledge (left) — red fruit
        var knowTree = makeTreeWithFruit(COLORS.redFruit, 0x4a7a3a);
        knowTree.position.set(-35, 0, 0);
        scene.add(knowTree);

        // Tree of Life (right) — golden fruit
        var lifeTree = makeTreeWithFruit(COLORS.gold, 0x5a7a3a);
        lifeTree.position.set(35, 0, 0);
        scene.add(lifeTree);

        // divine light between them — emphasis: the choice
        var light = makeLightSphere(0xffffff, 1, 40);
        light.position.set(0, 40, 0);
        scene.add(light);

        // Adam and Eve approaching — balance
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, -40);
        adam.lookAt(0, 0, 0);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(0, 0, 40);
        eve.lookAt(0, 0, 0);
        scene.add(eve);

        // lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.7);
        sun.position.set(0, 30, 0);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 15 },
            animate: function (time) {
                if (light) light.scale.setScalar(1 + Math.sin(time * 0.3) * 0.05);
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                var cycle = (t * 0.12) % (Math.PI * 2);
                var f = Math.sin(cycle);
                c.theta = c.baseTheta + f * 0.3;
                c.distance = c.baseDistance + f * 12;
                c.phi = Math.PI / 5 + Math.sin(t * 0.15) * 0.1;
                c.targetX = f * 35;
                c.targetZ = 0;
                c.roll = f * 0.04;
            }
        };
    };
})(window);
