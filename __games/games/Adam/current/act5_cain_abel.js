(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.cain_abel = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x3d1200);
        makeFog(scene, 0x0a0502, 0.003);

        scene.add(makeGround(200, 0x8b2500, -0.5));

        // Two altar stones
        var altarGeo = new THREE.CylinderGeometry(10, 10, 8, 16);
        var altarL = new THREE.Mesh(altarGeo, MAT.stone);
        altarL.position.set(-40, 4, 0);
        scene.add(altarL);
        var altarR = new THREE.Mesh(altarGeo, MAT.stone);
        altarR.position.set(40, 4, 0);
        scene.add(altarR);

        // Abel — peaceful, offering
        var abel = makeCharacter(MAT.skinAdam, toonMat({ color: 0x4a2e10 }), MAT.hair, false);
        abel.position.set(40, 0, 30);
        scene.add(abel);

        // Abel's offering — blood (red cloth)
        var bloodGeo = new THREE.PlaneGeometry(15, 10);
        var bloodMat = new THREE.MeshBasicMaterial({ color: 0x8B0000, transparent: true, opacity: 0.8 });
        var blood = new THREE.Mesh(bloodGeo, bloodMat);
        blood.rotation.x = -Math.PI / 2;
        blood.position.set(40, 4.5, 0);
        scene.add(blood);

        // accepted glow
        var abelGlow = makeLightSphere(0x4ECDC4, 1, 20);
        abelGlow.position.set(40, 10, 0);
        scene.add(abelGlow);

        // Cain — angry, tense
        var cain = makeCharacter(MAT.skinAdam, toonMat({ color: 0x5c4033 }), MAT.hair, false);
        cain.position.set(-40, 0, 30);
        scene.add(cain);

        // Cain's offering — grain (wheat)
        var grainGeo = new THREE.CylinderGeometry(8, 8, 6, 16);
        var grainMat = toonMat({ color: 0x6b5a3a });
        var grain = new THREE.Mesh(grainGeo, grainMat);
        grain.position.set(-40, 7, 0);
        scene.add(grain);

        // rejected — no glow
        var noGlow = makeLightSphere(0x8B0000, 0.3, 15);
        noGlow.position.set(-40, 10, 0);
        scene.add(noGlow);

        // tension line between them
        var tensionGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-30, 5, 0),
            new THREE.Vector3(0, 10, 0),
            new THREE.Vector3(30, 5, 0)
        ]);
        var tensionMat = new THREE.LineBasicMaterial({ color: 0x8B0000, transparent: true, opacity: 0.3 });
        var tensionLine = new THREE.Line(tensionGeo, tensionMat);
        scene.add(tensionLine);

        // sky — transition from dusk to dark
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));
        var sun = new THREE.DirectionalLight(0xffffff, 0.4);
        sun.position.set(0, 30, -30);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 90, height: 15 },
            animate: function (time) {
                if (noGlow) noGlow.scale.setScalar(0.8 + Math.sin(time * 0.5) * 0.1);
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                var f = Math.sin(t * 0.15);
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + f * 5;
                c.phi = Math.PI / 5 + Math.sin(t * 0.18) * 0.05;
                c.targetX = f * 40;
                c.targetY = 5 + f * 2;
                c.targetZ = 30;
                c.roll = f > 0 ? f * 0.03 : f * 0.08;
            }
        };
    };
})(window);
