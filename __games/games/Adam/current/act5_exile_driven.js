(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // exile_driven — driven out, gates barred, flaming sword
    // The exile moment — Adam and Eve leaving, gates closing.
    // Camera pulls back showing the finality of exile.
    global.SCENE_FACTORIES.exile_driven = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x03010a);
        makeFog(scene, 0x000000, 0.003);

        scene.add(makeGround(200, 0x080510, -0.5));

        // Stars — distant witnesses
        makeStars(scene, 150, 170, 0xffffff, 0.8);

        // Gates of Eden — barred, closing
        var pillarGeo = new THREE.BoxGeometry(6, 80, 6);
        var leftGate = new THREE.Mesh(pillarGeo, MAT.stone);
        leftGate.position.set(-20, 40, -10);
        scene.add(leftGate);
        addOutline(leftGate, 0.05);

        var rightGate = new THREE.Mesh(pillarGeo, MAT.stone);
        rightGate.position.set(20, 40, -10);
        scene.add(rightGate);
        addOutline(rightGate, 0.05);

        // Bar across the top — closing
        var barGeo = new THREE.BoxGeometry(46, 6, 4);
        var bar = new THREE.Mesh(barGeo, MAT.metal);
        bar.position.set(0, 75, -10);
        scene.add(bar);

        // Flaming sword embedded in the gates
        var swordGeo = new THREE.ConeGeometry(4, 60, 8);
        var swordMat = toonMat(0xFFD84D);
        var sword = new THREE.Mesh(swordGeo, swordMat);
        sword.rotation.z = Math.PI / 2;
        sword.position.set(0, 50, -8);
        scene.add(sword);
        addOutline(sword, 0.08);

        // Intense flames
        var flames = [];
        for (var f = 0; f < 25; f++) {
            var flame = new THREE.Mesh(
                new THREE.SphereGeometry(2 + Math.random() * 3, 8, 8),
                new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0xFF6B5B : 0xFFD84D, transparent: true, opacity: 0.8 })
            );
            flame.position.set((Math.random() - 0.5) * 30, 30 + Math.random() * 30, (Math.random() - 0.5) * 15);
            scene.add(flame);
            flames.push(flame);
        }

        // Adam and Eve departing — small in distance
        var adam = makeCharacter(MAT.skinAdam, toonMat(0x5c4033), MAT.hair, false);
        adam.position.set(-70, 0, 30);
        adam.scale.set(0.6, 0.6, 0.6);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, toonMat(0x8a7a5a), MAT.hair, true);
        eve.position.set(-55, 0, 35);
        eve.scale.set(0.6, 0.6, 0.6);
        scene.add(eve);

        // Flaming sword light
        var swordLight = new THREE.PointLight(0xFF6B5B, 1.5, 60);
        swordLight.position.set(0, 50, -8);
        scene.add(swordLight);

        // Distant mountains
        for (var m = 0; m < 5; m++) {
            var mtnGeo = new THREE.ConeGeometry(20 + Math.random() * 10, 30, 6);
            var mtnMat = toonMat(0x061224);
            mtnMat.transparent = true;
            mtnMat.opacity = 0.4;
            var mtn = new THREE.Mesh(mtnGeo, mtnMat);
            mtn.position.set(-80 + m * 40, 15, -60 - Math.random() * 20);
            scene.add(mtn);
        }

        scene.add(new THREE.AmbientLight(0xffffff, 0.1));

        return {
            scene: scene,
            cameraConfig: { distance: 100, height: 25 },
            animate: function (time) {
                for (var i = 0; i < flames.length; i++) {
                    flames[i].scale.setScalar(0.8 + Math.sin(time * 3 + i) * 0.3);
                    flames[i].position.y += Math.sin(time * 4 + i) * 0.1;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + Math.sin(t * 0.08) * 5;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.12) * 0.06;
                c.targetX = Math.sin(t * 0.5) * 3;
                c.targetY = 50;
                c.targetZ = -8;
                c.roll = Math.sin(t * 0.3) * 0.1;
            }
        };
    };
})(window);
