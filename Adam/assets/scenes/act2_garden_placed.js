(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // garden_placed — God places Adam in the Garden
    // Adam is the SINGLE central figure. Divine light descends from the
    // heavens in a column. Trees frame the scene like pillars.
    // Camera is intimate, close to Adam, showing his humanity.
    global.SCENE_FACTORIES.garden_placed = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.0025);

        scene.add(makeGround(180, COLORS.earth, -0.5));

        // Adam — the central figure, newly formed
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, 0);
        scene.add(adam);

        // Divine light descending in a column
        var divineLight = makeLightSphere(0xffffff, 2, 60);
        divineLight.position.set(0, 45, 0);
        scene.add(divineLight);

        // Light column — transparent tube connecting heaven to earth
        var columnGeo = new THREE.CylinderGeometry(3, 3, 50, 16, 1, true);
        var column = new THREE.Mesh(columnGeo, new THREE.MeshBasicMaterial({
            color: 0xFFD84D,
            transparent: true,
            opacity: 0.15,
            side: THREE.DoubleSide,
            depthWrite: false
        }));
        column.position.set(0, 20, 0);
        scene.add(column);

        // Trees framing the scene (just trunks — distant pillars)
        for (var t = 0; t < 6; t++) {
            var trunkGeo = new THREE.CylinderGeometry(3, 4, 30, 8);
            var trunk = new THREE.Mesh(trunkGeo, MAT.bark);
            var angle = (t / 6) * Math.PI * 2;
            trunk.position.set(
                Math.cos(angle) * 80,
                15,
                Math.sin(angle) * 80
            );
            scene.add(trunk);
        }

        // Distant Tree of Life silhouette (faint)
        var lifeGlow = makeLightSphere(0xFFD84D, 0.4, 120);
        lifeGlow.position.set(0, 20, -60);
        lifeGlow.scale.set(3, 3, 3);
        scene.add(lifeGlow);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var sun = new THREE.DirectionalLight(0xffffff, 0.7);
        sun.position.set(0, 30, 20);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 50, height: 10 },
            animate: function (time) {
                divineLight.scale.setScalar(1.5 + Math.sin(time * 0.5) * 0.1);
                column.material.opacity = 0.1 + Math.sin(time * 0.8) * 0.05;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance + Math.sin(t * 0.3) * 2;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.15) * 0.05;
                c.targetX = Math.sin(t * 0.2) * 3;
                c.targetY = 20 + Math.sin(t * 0.3) * 3;
                c.targetZ = Math.cos(t * 0.2) * 3;
                c.roll = Math.sin(t * 0.2) * 0.02;
            }
        };
    };
})(window);
