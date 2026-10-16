(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.serpent_tree = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a0700);
        makeFog(scene, 0x220000, 0.003);

        scene.add(makeGround(160, 0x3d1200, -0.5));

        // Tree of Knowledge — large, central
        var tree = makeTreeWithFruit(COLORS.redFruit, 0x5a7a3a);
        tree.position.set(0, 0, 0);
        scene.add(tree);

        // Serpent coiled around the tree — emphasis: the deceiver
        var serpent = makeSerpent(60, COLORS.deepRed);
        serpent.position.set(0, 30, 15);
        serpent.rotation.y = Math.PI / 6;
        scene.add(serpent);

        // Eve approaching from the left
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(-55, 0, -20);
        eve.rotation.y = Math.PI / 8;
        scene.add(eve);

        // ominous lighting
        var redLight = makeLightSphere(COLORS.deepRed, 0.5, 40);
        redLight.position.set(0, 25, -20);
        scene.add(redLight);

        scene.add(new THREE.AmbientLight(0x8B0000, 0.3));
        var dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(-20, 40, -20);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 75, height: 10 },
            animate: function (time) {
                if (redLight) {
                    redLight.position.y = 25 + Math.sin(time * 0.8) * 0.3;
                }
                serpent.rotation.y = Math.PI / 6 + Math.sin(time * 0.5) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.08;
                c.distance = c.baseDistance + Math.sin(t * 0.5) * 3;
                c.phi = Math.PI / 6 + Math.sin(t * 0.3) * 0.15;
                c.targetX = 0;
                c.targetY = 35 + Math.sin(t * 0.4) * 2;
                c.targetZ = 15;
                c.roll = Math.sin(t * 0.6) * 0.15;
            }
        };
    };
})(window);
