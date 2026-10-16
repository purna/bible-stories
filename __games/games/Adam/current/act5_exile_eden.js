(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // exile_eden — "Adam, where are you?" GOD'S VOICE CALLING
    // The moment God calls out. Concentric rings of light ripple from
    // the heavens through the gates. Adam and Eve look back in shame.
    // Camera is closer, more dramatic — the intimacy of being called by name.
    global.SCENE_FACTORIES.exile_eden = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0812);
        makeFog(scene, 0x000000, 0.003);

        scene.add(makeGround(180, 0x0d0705, -0.5));

        // Gates of Eden — open but about to close
        var pillarGeo = new THREE.BoxGeometry(8, 70, 8);
        var leftGate = new THREE.Mesh(pillarGeo, MAT.stone);
        leftGate.position.set(-25, 35, 0);
        scene.add(leftGate);

        var rightGate = new THREE.Mesh(pillarGeo, MAT.stone);
        rightGate.position.set(25, 35, 0);
        scene.add(rightGate);

        // Arch
        var archGeo = new THREE.BoxGeometry(50, 8, 6);
        var arch = new THREE.Mesh(archGeo, MAT.stone);
        arch.position.set(0, 66, 0);
        scene.add(arch);

        // Voice rings — concentric circles radiating from the heavens
        var voiceRings = [];
        for (var r = 0; r < 6; r++) {
            var ringGeo = new THREE.RingGeometry(15 + r * 8, 18 + r * 8, 32);
            ringGeo.rotateX(-Math.PI / 2);
            var ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
                color: 0xFFD84D,
                transparent: true,
                opacity: 0.2 + r * 0.05,
                side: THREE.DoubleSide,
                depthWrite: false
            }));
            ring.position.set(0, 68 + r * 3, 0);
            scene.add(ring);
            voiceRings.push(ring);
        }

        // Flaming sword
        var swordGroup = new THREE.Group();
        var bladeGeo = new THREE.ConeGeometry(3, 50, 8);
        var blade = new THREE.Mesh(bladeGeo, new THREE.MeshBasicMaterial({ color: 0xFFD84D }));
        blade.rotation.z = Math.PI / 2;
        blade.position.set(0, 25, 0);
        swordGroup.add(blade);

        var hiltGeo = new THREE.CylinderGeometry(5, 5, 10, 16);
        var hilt = new THREE.Mesh(hiltGeo, MAT.metal);
        hilt.position.set(0, 3, 0);
        swordGroup.add(hilt);

        for (var f = 0; f < 20; f++) {
            var flame = new THREE.Mesh(
                new THREE.SphereGeometry(1.5, 6, 6),
                new THREE.MeshBasicMaterial({ color: f % 2 === 0 ? 0xFF6B5B : 0xFFD84D })
            );
            flame.position.set(
                (Math.random() - 0.5) * 15,
                Math.random() * 35,
                (Math.random() - 0.5) * 10
            );
            swordGroup.add(flame);
        }

        swordGroup.position.set(0, 20, -20);
        scene.add(swordGroup);

        // Adam and Eve — looking back in shame
        var adam = makeCharacter(MAT.skinAdam, toonMat({ color: 0x5c4033 }), MAT.hair, false);
        adam.position.set(-20, 0, -5);
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, toonMat({ color: 0x8a7a5a }), MAT.hair, true);
        eve.position.set(10, 0, -5);
        scene.add(eve);

        // Distant mountains
        for (var m = 0; m < 3; m++) {
            var mtnGeo = new THREE.ConeGeometry(25, 40, 6);
            var mtn = new THREE.Mesh(mtnGeo, toonMat({ color: 0x061224, transparent: true, opacity: 0.5 }));
            mtn.position.set(-60 + m * 30, 20, -60);
            scene.add(mtn);
        }

        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
        var swordLight = new THREE.PointLight(0xFF6B5B, 1.5, 40);
        swordLight.position.set(0, 20, -20);
        scene.add(swordLight);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 15 },
            animate: function (time) {
                if (swordGroup) swordGroup.rotation.y = time * 0.3;
                for (var i = 0; i < voiceRings.length; i++) {
                    voiceRings[i].scale.setScalar(1 + Math.sin(time * 0.5 + i * 0.3) * 0.2);
                    voiceRings[i].material.opacity = 0.1 + Math.sin(time * 0.3 + i * 0.2) * 0.1;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance + Math.sin(t * 0.1) * 4;
                c.phi = Math.PI / 4 + Math.sin(t * 0.08) * 0.08;
                c.targetX = Math.sin(t * 0.3) * 5;
                c.targetY = 5;
                c.targetZ = -5;
                c.roll = Math.sin(t * 0.4) * 0.06;
            }
        };
    };
})(window);
