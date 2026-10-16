(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.exile_dawn = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x030b18);
        makeFog(scene, 0x000000, 0.0025);

        scene.add(makeGround(200, 0x061224, -0.5));

        // Gates — barred, closed
        var pillarGeo = new THREE.BoxGeometry(6, 80, 6);
        var leftGate = new THREE.Mesh(pillarGeo, MAT.stone);
        leftGate.castShadow = leftGate.receiveShadow = true;
        leftGate.position.set(-20, 40, 0);
        scene.add(leftGate);

        var rightGate = new THREE.Mesh(pillarGeo, MAT.stone);
        rightGate.castShadow = rightGate.receiveShadow = true;
        rightGate.position.set(20, 40, 0);
        scene.add(rightGate);

        // Bar across the top
        var barGeo = new THREE.BoxGeometry(46, 6, 4);
        var bar = new THREE.Mesh(barGeo, MAT.metal);
        bar.position.set(0, 75, 0);
        scene.add(bar);

        // Flaming sword embedded in the gates — emphasis
        var swordGeo = new THREE.ConeGeometry(4, 60, 8);
        var swordMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D });
        var sword = new THREE.Mesh(swordGeo, swordMat);
        sword.rotation.z = Math.PI / 2;
        sword.position.set(0, 50, -2);
        scene.add(sword);

        // Flames — movement: flickering
        var flames = [];
        for (var f = 0; f < 25; f++) {
            var flame = new THREE.Mesh(new THREE.SphereGeometry(2 + Math.random() * 3, 8, 8),
                new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0xFF6B5B : 0xFFD84D, transparent: true, opacity: 0.8 }));
            flame.position.set((Math.random() - 0.5) * 30, 30 + Math.random() * 30, (Math.random() - 0.5) * 15);
            scene.add(flame);
            flames.push(flame);
        }

        // Distant figures — Adam and Eve leaving
        var adam = makeCharacter(MAT.skinAdam, toonMat({ color: 0x5c4033 }), MAT.hair, false);
        adam.position.set(-70, 0, 40);
        adam.scale.set(0.6, 0.6, 0.6);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, toonMat({ color: 0x8a7a5a }), MAT.hair, true);
        eve.position.set(-55, 0, 48);
        eve.scale.set(0.6, 0.6, 0.6);
        scene.add(eve);

        // Dawn star — weak light
        var dawnStar = makeLightSphere(0x4ECDC4, 0.8, 50);
        dawnStar.position.set(20, 60, -30);
        scene.add(dawnStar);

        // distant mountains
        for (var m = 0; m < 5; m++) {
            var mtnGeo = new THREE.ConeGeometry(20 + Math.random() * 10, 30, 6);
            var mtn = new THREE.Mesh(mtnGeo, toonMat({ color: 0x061224, opacity: 0.4, transparent: true }));
            mtn.position.set(-80 + m * 40, 15, -50 - Math.random() * 20);
            scene.add(mtn);
        }

        scene.add(new THREE.AmbientLight(0x4ECDC4, 0.3));
        var swordLight = new THREE.PointLight(0xFF6B5B, 1, 50);
        swordLight.position.set(0, 40, 0);
        scene.add(swordLight);

        return {
            scene: scene,
            cameraConfig: { distance: 90, height: 20 },
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
                c.targetZ = -2;
                c.roll = Math.sin(t * 0.3) * 0.1;
            }
        };
    };
})(window);
