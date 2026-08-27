(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.the_fall = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a1008);
        makeFog(scene, 0x0a0502, 0.003);

        scene.add(makeGround(160, 0x3d1200, -0.5));

        // Tree of Knowledge — in background, fallen fruit
        var tree = makeTree(40, 5, 26, toonMat({ color: 0x5a7a3a }), MAT.bark);
        tree.position.set(-50, 0, -20);
        scene.add(tree);
        var dropFruit = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 12), MAT.redFruit);
        dropFruit.position.set(-55, 0, -25);
        scene.add(dropFruit);
        addOutline(dropFruit, 0.1);

        // Adam — hiding, shame
        var adam = makeCharacter(MAT.skinAdam, toonMat({ color: 0x4a3010 }), MAT.hair, false);
        adam.position.set(30, 0, 10);
        var armL = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 28, 12), toonMat({ color: 0x4a3010 }));
        armL.position.set(-19, 38, 0);
        armL.rotation.z = Math.PI / 5;
        adam.add(armL);
        addOutline(armL, 0.1);
        var armR = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 28, 12), toonMat({ color: 0x4a3010 }));
        armR.position.set(19, 38, 0);
        armR.rotation.z = -Math.PI / 5;
        adam.add(armR);
        addOutline(armR, 0.1);
        scene.add(adam);

        // Eve — opposite side, shame
        var eve = makeCharacter(MAT.skinEve, toonMat({ color: 0x6a5a3a }), MAT.hair, true);
        eve.position.set(-30, 0, 20);
        scene.add(eve);

        // Fig leaves — hastily made
        var leafMat = toonMat({ color: 0x2a4a2a });
        var leafGeo = new THREE.SphereGeometry(8, 8, 6);
        var leaf1 = new THREE.Mesh(leafGeo, leafMat);
        leaf1.position.set(22, 32, 15);
        leaf1.scale.set(2, 0.5, 1);
        scene.add(leaf1);
        var leaf2 = new THREE.Mesh(leafGeo, leafMat);
        leaf2.position.set(-38, 30, 28);
        leaf2.scale.set(2, 0.5, 1);
        scene.add(leaf2);

        // Dark, ominous atmosphere
        var darkLight = makeLightSphere(0x000000, 0.5, 30);
        darkLight.position.set(0, 15, 0);
        scene.add(darkLight);

        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
        var dirLight = new THREE.DirectionalLight(0x8B0000, 0.4);
        dirLight.position.set(-20, 30, -10);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 15 },
            animate: function (time) {
                var fallProgress = Math.min(1, time * 0.2);
                adam.position.x = 30 + Math.sin(time * 3) * 0.5;
                eve.position.x = -30 + Math.sin(time * 3) * 0.5;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                var fallProgress = Math.min(1, t * 0.2);
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + fallProgress * 8 + Math.sin(t * 3) * 0.5;
                c.phi = Math.PI / 5 + Math.sin(t * 0.1) * 0.08;
                var f = Math.sin(t * 0.25);
                c.targetX = f * 30;
                c.targetY = 5 + f * 3;
                c.targetZ = 15;
                c.roll = f * 0.05;
            }
        };
    };
})(window);
