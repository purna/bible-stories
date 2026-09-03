(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.serpent_taken = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a0700);
        makeFog(scene, 0x330000, 0.0035);

        // Red ominous light
        var redLight = makeLightSphere(0xFF0000, 0.5, 80);
        makeStars(scene, 100, 200, 0x442200, 0.5);
        scene.add(redLight);

        // Knowledge tree
        var treeLeaf = makeTreeWithFruit(COLORS.redFruit, COLORS.leaf);
        treeLeaf.position.set(0, 0, -20);
        scene.add(treeLeaf);

        // Eve (left) offering fruit
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(-25, 12, 0);
        eve.rotation.z = -0.4;
        scene.add(eve);

        // Adam (right) receiving
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(25, 14, 0);
        adam.rotation.z = 0.2;
        scene.add(adam);

        // Serpent (curved tube along ground)
        var curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-20, 1, 0),
            new THREE.Vector3(-10, 0.5, 5),
            new THREE.Vector3(0, 0, -3),
            new THREE.Vector3(10, 0.5, 5),
            new THREE.Vector3(20, 1, 0)
        ]);
        var serpentGeo = new THREE.TubeGeometry(curve, 20, 3, 12, false);
        var serpent = new THREE.Mesh(serpentGeo, toonMat({ color: COLORS.deepRed }));
        serpent.castShadow = true;
        serpent.receiveShadow = true;
        scene.add(serpent);
        addOutline(serpent, 0.08);

        // Eve's hand offering fruit (sphere with glow)
        var fruitGlow = makeLightSphere(COLORS.redFruit, 0.6, 30);
        fruitGlow.scale.set(1.5, 1.5, 1.5);
        fruitGlow.position.set(-8, 38, 0);
        scene.add(fruitGlow);

        // Ground
        scene.add(makeGround(180, 0x1a0700, -0.5));

        // Lights
        scene.add(new THREE.AmbientLight(0x442200, 0.3));
        var sun = new THREE.DirectionalLight(0xffffff, 0.4);
        sun.position.set(10, 30, 10);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 50, height: 5 },
            animate: function (time) {
                redLight.position.y = 20 + Math.sin(time * 0.5) * 0.5;
                redLight.material.opacity = 0.6 + Math.sin(time * 2) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.06;
                c.phi = Math.PI / 4 + Math.sin(t * 0.1) * 0.05;
                c.roll = Math.sin(t * 0.2) * 0.08;
                c.targetX = 0; c.targetY = 25; c.targetZ = 0;
            }
        };
    };
})(window);
