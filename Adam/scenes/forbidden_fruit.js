(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // forbidden_fruit — "The fruit was good for food and pleasing to the eye"
    // Eve sees the fruit for the first time — full figure looking up at it.
    // The serpent is in shadow, watching. Camera shows the full temptation.
    global.SCENE_FACTORIES.forbidden_fruit = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a1008);
        makeFog(scene, 0x220000, 0.0025);

        scene.add(makeGround(120, 0x3d1200, -0.5));

        // Tree of Knowledge with fruit
        var tree = makeTree(50, 5, 30, toonMat({ color: 0x5a7a3a }), MAT.bark);
        tree.position.set(0, 0, 0);
        scene.add(tree);

        // Glowing forbidden fruit on the tree
        var fruit = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 16), MAT.emissiveRed);
        fruit.position.set(0, 58, 5);
        scene.add(fruit);
        addOutline(fruit, 0.1);

        // Fruit glow
        var fruitGlow = makeLightSphere(COLORS.redFruit, 0.8, 35);
        fruitGlow.position.set(0, 58, 5);
        scene.add(fruitGlow);

        // Eve — full figure, looking up at the fruit
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(-30, 0, 10);
        eve.rotation.y = Math.PI / 6;
        scene.add(eve);

        // Serpent lurking at Eve's feet (in shadow)
        var serpent = makeSerpent(35, COLORS.deepRed);
        serpent.position.set(-35, 3, 5);
        serpent.rotation.y = Math.PI / 3;
        scene.add(serpent);

        scene.add(new THREE.AmbientLight(0x8B0000, 0.25));
        var keyLight = new THREE.DirectionalLight(COLORS.deepRed, 0.6);
        keyLight.position.set(-15, 40, 20);
        scene.add(keyLight);

        return {
            scene: scene,
            cameraConfig: { distance: 60, height: 10 },
            animate: function (time) {
                fruitGlow.scale.setScalar(1 + Math.sin(time * 0.7) * 0.1);
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.025;
                c.distance = c.baseDistance + Math.sin(t * 0.15) * 3;
                c.phi = Math.PI / 6 + Math.sin(t * 0.1) * 0.05;
                c.targetX = -15 + Math.sin(t * 0.15) * 15;
                c.targetY = 30;
                c.targetZ = 5;
                c.roll = Math.sin(t * 0.3) * 0.05;
            }
        };
    };
})(window);
