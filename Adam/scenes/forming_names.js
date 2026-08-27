(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // forming_names — Adam naming the creatures
    // Adam among various animals being brought to him. Camera shows
    // the naming process — gentle, curious, wide.
    global.SCENE_FACTORIES.forming_names = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.002);

        scene.add(makeGround(200, COLORS.earth, -0.5));

        // Adam — central, gesturing
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, 0);
        scene.add(adam);

        // Various creatures brought before Adam
        // Sheep
        var sheepMat = toonMat(0xe8e0cf);
        var sheep = makeCharacter(sheepMat, sheepMat, MAT.hair, false);
        sheep.scale.set(0.5, 0.5, 0.5);
        sheep.position.set(-55, 0, -10);
        scene.add(sheep);

        // Bird (sphere)
        var birdGeo = new THREE.SphereGeometry(5, 12, 12);
        var birdMat = toonMat(0x8b6010);
        var bird = new THREE.Mesh(birdGeo, birdMat);
        bird.position.set(-45, 25, 20);
        bird.castShadow = true;
        addOutline(bird, 0.06);
        scene.add(bird);

        // Lion
        var lionGeo = new THREE.SphereGeometry(14, 16, 16);
        var lionMat = toonMat(0x8b4513);
        var lion = new THREE.Mesh(lionGeo, lionMat);
        lion.position.set(60, 0, -15);
        lion.castShadow = true;
        addOutline(lion, 0.07);
        scene.add(lion);

        // Elephant (large sphere + trunk)
        var eleGeo = new THREE.SphereGeometry(16, 16, 16);
        var eleMat = toonMat(0x5a4a3a);
        var elephant = new THREE.Mesh(eleGeo, eleMat);
        elephant.position.set(45, 0, 30);
        elephant.castShadow = true;
        addOutline(elephant, 0.07);
        scene.add(elephant);

        // Trees framing
        var tree1 = makeTree(28, 4, 20);
        tree1.position.set(-85, 0, -30);
        scene.add(tree1);
        var tree2 = makeTree(28, 4, 20);
        tree2.position.set(90, 0, -40);
        scene.add(tree2);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(10, 35, 10);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 90, height: 15 },
            animate: function (time) {
                adam.rotation.y = Math.sin(time * 0.3) * 0.1;
                lion.position.y = Math.sin(time * 0.5) * 0.5;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 4;
                c.phi = Math.PI / 4;
                var f = Math.sin(t * 0.3);
                c.targetX = f * 25;
                c.targetZ = f * 10;
                c.roll = f * 0.015;
            }
        };
    };
})(window);
