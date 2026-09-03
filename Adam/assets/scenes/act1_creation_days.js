(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.creation_days = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.002);

        // ground
        scene.add(makeGround(200, COLORS.earth, -0.5));

        // Adam — central figure
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(-20, 0, 10);
        scene.add(adam);

        // Eve — gentle, to Adam's right
        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(20, 0, 10);
        scene.add(eve);

        // Animals — variety of shapes
        var sheepMat = toonMat(0xe8e0cf);
        var sheep1 = makeCharacter(sheepMat, sheepMat, MAT.hair, false);
        sheep1.scale.set(0.5, 0.5, 0.5);
        sheep1.position.set(-60, 0, 0);
        scene.add(sheep1);

        var sheep2 = makeCharacter(sheepMat, sheepMat, MAT.hair, false);
        sheep2.scale.set(0.5, 0.5, 0.5);
        sheep2.position.set(60, 0, -20);
        scene.add(sheep2);

        // Birds on trees — rhythm
        var birdGeo = new THREE.SphereGeometry(4, 12, 12);
        var birdMat = toonMat(0x8b6010);
        var birds = [];
        for (var i = 0; i < 5; i++) {
            var bird = new THREE.Mesh(birdGeo, birdMat);
            bird.position.set(-50 + i * 25, 40 + Math.sin(i) * 5, Math.cos(i * 0.5) * 30);
            bird.castShadow = true;
            scene.add(bird);
            addOutline(bird, 0.1);
            birds.push(bird);
        }

        // Lion — king of beasts
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

        // Trees — framing
        var tree1 = makeTree(30, 4, 24);
        tree1.position.set(-80, 0, -30);
        scene.add(tree1);
        var tree2 = makeTree(25, 3, 20);
        tree2.position.set(85, 0, -40);
        scene.add(tree2);

        // Divine light — overhead
        var light = makeLightSphere(0xffffff, 1, 50);
        light.position.set(0, 40, 0);
        scene.add(light);

        // lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.7);
        sun.position.set(10, 30, 10);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 15 },
            animate: function (time) {
                var pulse = 1 + Math.sin(time * 0.3) * 0.1;
                light.scale.setScalar(pulse);
                // birds bobbing
                for (var i = 0; i < birds.length; i++) {
                    birds[i].position.y = 40 + Math.sin(i) * 5 + Math.sin(time * 0.5 + i) * 1;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + Math.sin(t * 0.18) * 4;
                c.phi = Math.PI / 4;
                var panPhase = (t * 0.15) % (Math.PI * 2);
                var focus = Math.sin(panPhase);
                c.targetX = focus * 30;
                c.targetZ = 10 + Math.cos(panPhase) * 15;
                c.roll = focus * 0.02;
            }
        };
    };
})(window);
