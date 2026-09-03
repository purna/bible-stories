(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // garden_tended — Adam tends the garden, naming creatures
    // Adam among various animals, gesturing/naming them.
    // Camera shows the interaction, animals moving gently.
    global.SCENE_FACTORIES.garden_tended = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.002);

        scene.add(makeGround(220, 0x5c4033, -0.5));

        // Adam — central, tending
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, 0);
        scene.add(adam);

        // Various animals — different shapes and sizes
        // Sheep (white fluffy)
        var sheepMat = toonMat(0xe8e0cf);
        var sheep1 = makeCharacter(sheepMat, sheepMat, MAT.hair, false);
        sheep1.scale.set(0.4, 0.4, 0.4);
        sheep1.position.set(-50, 0, 10);
        scene.add(sheep1);

        var sheep2 = makeCharacter(sheepMat, sheepMat, MAT.hair, false);
        sheep2.scale.set(0.4, 0.4, 0.4);
        sheep2.position.set(-40, 0, -20);
        scene.add(sheep2);

        // Bird on a tree (small sphere)
        var birdGeo = new THREE.SphereGeometry(4, 12, 12);
        var birdMat = toonMat(0x8b6010);
        var birds = [];
        for (var b = 0; b < 4; b++) {
            var bird = new THREE.Mesh(birdGeo, birdMat);
            bird.position.set(-60 + b * 25, 30 + Math.sin(b) * 5, 10 + Math.cos(b * 0.5) * 20);
            bird.castShadow = true;
            scene.add(bird);
            addOutline(bird, 0.08);
            birds.push(bird);
        }

        // Lion (large, king of beasts)
        var lionGeo = new THREE.SphereGeometry(12, 16, 16);
        var lionMat = toonMat(0x8b4513);
        var lion = new THREE.Mesh(lionGeo, lionMat);
        lion.position.set(55, 0, -15);
        lion.castShadow = true;
        scene.add(lion);
        addOutline(lion, 0.08);
        var maneGeo = new THREE.TorusGeometry(14, 4, 8, 16);
        var mane = new THREE.Mesh(maneGeo, lionMat);
        mane.position.set(55, 15, -15);
        mane.rotation.x = Math.PI / 4;
        scene.add(mane);
        addOutline(mane, 0.08);

        // Trees framing
        var tree1 = makeTree(30, 4, 22);
        tree1.position.set(-80, 0, -30);
        scene.add(tree1);
        var tree2 = makeTree(30, 4, 22);
        tree2.position.set(85, 0, -40);
        scene.add(tree2);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(15, 35, 10);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 85, height: 15 },
            animate: function (time) {
                adam.position.y = Math.sin(time * 0.5) * 0.3;
                sheep1.rotation.y = time * 0.3;
                sheep2.rotation.y = time * 0.25;
                for (var i = 0; i < birds.length; i++) {
                    birds[i].position.y = 30 + Math.sin(i) * 5 + Math.sin(time * 0.5 + i) * 1;
                }
                lion.position.y = Math.sin(time * 0.5) * 0.5;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + Math.sin(t * 0.15) * 4;
                c.phi = Math.PI / 4;
                var f = Math.sin(t * 0.18);
                c.targetX = f * 25;
                c.targetZ = f * 10;
                c.roll = f * 0.02;
            }
        };
    };
})(window);
