(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Persian Court — Darius the Mede's administrative palace.
     * Less ornate than Babylon, more systematic.
     * Morning light through high windows, tapestries on walls.
     */
    global.SCENE_FACTORIES.persian_court = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x1a0e06, 0.008);

        /* Marble floor */
        var floorGeo = new THREE.PlaneGeometry(80, 80);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Back wall */
        var wallGeo = new THREE.PlaneGeometry(80, 50);
        var backWall = new THREE.Mesh(wallGeo, COLORS.stone);
        backWall.position.set(0, 0, -35);
        backWall.receiveShadow = true;
        scene.add(backWall);

        /* Side walls */
        var sideWallGeo = new THREE.PlaneGeometry(80, 50);
        var leftWall = new THREE.Mesh(sideWallGeo, COLORS.stone);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.set(-40, 0, 0);
        scene.add(leftWall);
        var rightWall = new THREE.Mesh(sideWallGeo, COLORS.stone);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.position.set(40, 0, 0);
        scene.add(rightWall);

        /* Tapestries on walls (colorful planes) */
        var tapestryGeo = new THREE.PlaneGeometry(12, 18);
        var tapestryMat = new THREE.MeshBasicMaterial({
            color: 0x4a2a04, transparent: true, opacity: 0.8
        });
        for (var t = 0; t < 3; t++) {
            var tapestry = new THREE.Mesh(tapestryGeo, tapestryMat);
            tapestry.position.set(-35, 5, -15 + t * 12);
            tapestry.rotation.y = Math.PI / 2;
            scene.add(tapestry);
        }

        /* Darius's dais (central, elevated) */
        var dais = makeBox(20, 3, 10, COLORS.stone);
        dais.group.position.set(0, -8, -20);
        scene.add(dais.group);

        /* Darius figure */
        var darius = new THREE.Group();
        var dariusBody = addToonPart(darius, new THREE.BoxGeometry(7, 12, 4), COLORS.robe);
        dariusBody.position.y = 0;
        var dariusHead = addToonPart(darius, new THREE.BoxGeometry(4.5, 4.5, 4.5), COLORS.skin);
        dariusHead.position.y = 8;
        var dariusCrown = addToonPart(darius, new THREE.BoxGeometry(6, 2, 6), COLORS.gold);
        dariusCrown.position.y = 11;
        darius.position.set(0, -4, -20);
        scene.add(darius);

        /* Satraps in tiers behind */
        var satrapGroup = new THREE.Group();
        for (var row = 0; row < 4; row++) {
            for (var i = 0; i < 6; i++) {
                var satrap = new THREE.Group();
                var sBody = addToonPart(satrap, new THREE.BoxGeometry(2.5, 4.5, 2.5), COLORS.robe);
                sBody.position.y = 0;
                var sHead = addToonPart(satrap, new THREE.BoxGeometry(1.8, 1.8, 1.8), COLORS.skin);
                sHead.position.y = 3;
                satrap.position.set(
                    -12 + i * 5,
                    -10 + row * 2.5,
                    -5 + row * 5
                );
                satrap.rotation.y = (Math.random() - 0.5) * 0.3;
                satrapGroup.add(satrap);
            }
        }
        scene.add(satrapGroup);

        /* Morning light from high windows */
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var morningLight = new THREE.DirectionalLight(0xffffff, 0.8);
        morningLight.position.set(0, 30, 20);
        morningLight.castShadow = true;
        scene.add(morningLight);

        var windowLight = new THREE.PointLight(0x87CEEB, 0.5, 60);
        windowLight.position.set(0, 15, 20);
        scene.add(windowLight);

        return {
            scene: scene,
            cameraConfig: { distance: 60, height: 10 },
            animate: function (time) {
                var t = time * 0.001;
                windowLight.intensity = 0.4 + Math.sin(t * 0.3) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.8;
                c.targetX = 0;
                c.targetY = -3;
                c.targetZ = -15;
            }
        };
    };
})(window);
