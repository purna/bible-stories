(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // serpent_deceive — the serpent's deception
    // Close-up of serpent coiled around the tree, Eve listening.
    // Camera creates unease with dutch angle and circling.
    global.SCENE_FACTORIES.serpent_deceive = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a0700);
        makeFog(scene, 0x330000, 0.0035);

        scene.add(makeGround(140, 0x3d1200, -0.5));

        // Tree of Knowledge — large, central
        var tree = makeTreeWithFruit(COLORS.redFruit, 0x5a7a3a);
        tree.position.set(0, 0, 10);
        scene.add(tree);

        // Serpent coiled around the tree
        var serpent = makeSerpent(50, COLORS.deepRed);
        serpent.position.set(0, 30, 20);
        serpent.rotation.y = Math.PI / 6;
        scene.add(serpent);

        // Eve listening — close, entranced
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(-40, 0, 5);
        eve.rotation.y = Math.PI / 6;
        scene.add(eve);

        // Ominous lighting
        var redLight = makeLightSphere(COLORS.deepRed, 0.6, 40);
        redLight.position.set(-10, 30, -10);
        scene.add(redLight);

        // Fruit glowing — temptation
        var fruitGlow = makeLightSphere(COLORS.redFruit, 0.8, 30);
        fruitGlow.position.set(0, 60, 10);
        scene.add(fruitGlow);

        scene.add(new THREE.AmbientLight(0x8B0000, 0.2));
        var dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
        dirLight.position.set(-20, 40, -20);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 60, height: 10 },
            animate: function (time) {
                if (redLight) {
                    redLight.position.y = 30 + Math.sin(time * 0.8) * 0.3;
                }
                if (fruitGlow) {
                    fruitGlow.scale.setScalar(1 + Math.sin(time * 0.7) * 0.1);
                }
                serpent.rotation.y = Math.PI / 6 + Math.sin(time * 0.5) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.07;
                c.distance = c.baseDistance + Math.sin(t * 0.5) * 2;
                c.phi = Math.PI / 7 + Math.sin(t * 0.3) * 0.1;
                c.targetX = Math.sin(t * 0.3) * 5;
                c.targetY = 35;
                c.targetZ = 12;
                c.roll = Math.sin(t * 0.6) * 0.15;
            }
        };
    };
})(window);
