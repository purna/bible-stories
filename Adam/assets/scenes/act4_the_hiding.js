(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // the_hiding — Adam and Eve hiding behind the Tree of Knowledge
    // The tree is large and central, casting shadows. Adam and Eve are
    // positioned behind it, partially visible. Camera slowly pulls back
    // to reveal the full scope of their hiding and shame.
    global.SCENE_FACTORIES.the_hiding = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a1008);
        makeFog(scene, 0x0a0502, 0.0035);

        scene.add(makeGround(160, 0x3d1200, -0.5));

        // Tree of Knowledge — large, central, casting shadow
        var tree = makeTree(45, 5, 28, toonMat({ color: 0x5a7a3a }), MAT.bark);
        tree.position.set(0, 0, 0);
        scene.add(tree);

        // Adam hiding behind the tree (to the left, partially obscured)
        var adam = makeCharacter(MAT.skinAdam, toonMat({ color: 0x4a3010 }), MAT.hair, false);
        adam.position.set(-35, 0, -15);
        adam.rotation.y = Math.PI / 4;
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

        // Eve hiding behind the tree (to the right, partially obscured)
        var eve = makeCharacter(MAT.skinEve, toonMat({ color: 0x6a5a3a }), MAT.hair, true);
        eve.position.set(35, 0, -10);
        eve.rotation.y = -Math.PI / 4;
        scene.add(eve);

        // God's approaching light — from behind them, through the tree
        var godLight = makeLightSphere(0xFFD84D, 0.8, 50);
        godLight.position.set(0, 50, 40);
        scene.add(godLight);

        // Distant sound source — light approaching from opposite direction
        var sfxLight = makeLightSphere(0xffffff, 0.4, 20);
        sfxLight.position.set(0, 30, 50);
        scene.add(sfxLight);

        scene.add(new THREE.AmbientLight(0x8B0000, 0.2));
        var dirLight = new THREE.DirectionalLight(0x8B0000, 0.3);
        dirLight.position.set(0, 40, 50);
        scene.add(dirLight);

        return {
            scene: scene,
            cameraConfig: { distance: 60, height: 10 },
            animate: function (time) {
                godLight.position.z = 40 + Math.sin(time * 0.1) * 3;
                godLight.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
                sfxLight.material.opacity = 0.3 + Math.sin(time * 4) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance + t * 0.4;
                c.phi = Math.PI / 6 + Math.sin(t * 0.1) * 0.05;
                c.targetX = Math.sin(t * 0.2) * t * 10;
                c.targetY = 5 + t * 3;
                c.targetZ = Math.cos(t * 0.2) * t * 5;
                c.roll = Math.sin(t * 0.3) * 0.03;
            }
        };
    };
})(window);
