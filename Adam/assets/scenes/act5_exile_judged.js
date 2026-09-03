(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // exile_judged — God judges the serpent and pronounces exile
    // Divine judgment scene — gates closing, serpent cursed.
    // Camera high angle, dramatic, with lightning effects.
    global.SCENE_FACTORIES.exile_judged = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0812);
        makeFog(scene, 0x0a0502, 0.0035);

        scene.add(makeGround(180, 0x0d0705, -0.5));

        // Gates of Eden — closing
        var pillarGeo = new THREE.BoxGeometry(8, 70, 8);
        var leftGate = new THREE.Mesh(pillarGeo, MAT.stone);
        leftGate.position.set(-25, 35, 0);
        scene.add(leftGate);
        addOutline(leftGate, 0.05);

        var rightGate = new THREE.Mesh(pillarGeo, MAT.stone);
        rightGate.position.set(25, 35, 0);
        scene.add(rightGate);
        addOutline(rightGate, 0.05);

        // Arch closing — movement: shutting
        var archGeo = new THREE.BoxGeometry(50, 8, 6);
        var arch = new THREE.Mesh(archGeo, MAT.stone);
        arch.position.set(0, 66, 0);
        scene.add(arch);
        addOutline(arch, 0.05);

        // Flaming sword — emphasis: the guard
        var swordGroup = new THREE.Group();
        var bladeGeo = new THREE.ConeGeometry(3, 50, 8);
        var bladeMat = toonMat(0xFFD84D);
        var blade = new THREE.Mesh(bladeGeo, bladeMat);
        blade.rotation.z = Math.PI / 2;
        blade.position.set(0, 25, 0);
        swordGroup.add(blade);
        addOutline(blade, 0.08);

        var hiltGeo = new THREE.CylinderGeometry(5, 5, 10, 16);
        var hilt = new THREE.Mesh(hiltGeo, MAT.metal);
        hilt.position.set(0, 3, 0);
        swordGroup.add(hilt);
        addOutline(hilt, 0.08);

        // Flame particles around sword
        for (var f = 0; f < 30; f++) {
            var flame = new THREE.Mesh(
                new THREE.SphereGeometry(1.5, 6, 6),
                new THREE.MeshBasicMaterial({ color: f % 2 === 0 ? 0xFF6B5B : 0xFFD84D })
            );
            flame.position.set((Math.random() - 0.5) * 20, Math.random() * 40, (Math.random() - 0.5) * 10);
            swordGroup.add(flame);
        }

        swordGroup.position.set(0, 20, -20);
        scene.add(swordGroup);

        // Serpent cursed — coiled at the foot of the gates
        var serpent = makeSerpent(40, 0x444422);
        serpent.position.set(0, 5, -10);
        serpent.rotation.y = Math.PI;
        scene.add(serpent);

        // Adam and Eve departing — small, distant
        var adam = makeCharacter(MAT.skinAdam, toonMat(0x5c4033), MAT.hair, false);
        adam.position.set(-60, 0, 30);
        adam.scale.set(0.7, 0.7, 0.7);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, toonMat(0x8a7a5a), MAT.hair, true);
        eve.position.set(-45, 0, 35);
        eve.scale.set(0.7, 0.7, 0.7);
        scene.add(eve);

        // Judgment lightning
        var lightningLight = new THREE.PointLight(0xffffff, 2, 100);
        lightningLight.position.set(0, 60, 0);
        scene.add(lightningLight);

        scene.add(new THREE.AmbientLight(0xffffff, 0.15));
        var swordLight = new THREE.PointLight(0xFF6B5B, 1.5, 40);
        swordLight.position.set(0, 20, -20);
        scene.add(swordLight);

        return {
            scene: scene,
            cameraConfig: { distance: 95, height: 25 },
            animate: function (time) {
                if (swordGroup) swordGroup.rotation.y = time * 0.3;
                if (lightningLight) {
                    lightningLight.intensity = Math.random() * 2;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + Math.sin(t * 0.1) * 4;
                c.phi = Math.PI / 5 + Math.sin(t * 0.08) * 0.06;
                c.targetX = Math.sin(t * 0.3) * 3;
                c.targetY = 25;
                c.targetZ = -10;
                c.roll = Math.sin(t * 0.4) * 0.06;
            }
        };
    };
})(window);
