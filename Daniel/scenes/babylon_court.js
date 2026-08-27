(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Babylon Royal Court — the king's decree.
     * Tight crowd composition with the king elevated at center.
     * Torch-lit interior with fear and tension.
     */
    global.SCENE_FACTORIES.babylon_court = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x1a0e06, 0.012);

        /* Stone floor */
        var floorGeo = new THREE.PlaneGeometry(60, 60);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Back wall */
        var wallGeo = new THREE.PlaneGeometry(60, 40);
        var backWall = new THREE.Mesh(wallGeo, COLORS.stone);
        backWall.position.set(0, 0, -30);
        backWall.receiveShadow = true;
        scene.add(backWall);

        /* Side walls */
        var sideWallGeo = new THREE.PlaneGeometry(60, 40);
        var leftWall = new THREE.Mesh(sideWallGeo, COLORS.stone);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.set(-30, 0, 0);
        scene.add(leftWall);
        var rightWall = new THREE.Mesh(sideWallGeo, COLORS.stone);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.position.set(30, 0, 0);
        scene.add(rightWall);

        /* King's dais (raised platform) */
        var dais = makeBox(16, 3, 12, COLORS.stone);
        dais.group.position.set(0, -8, -15);
        scene.add(dais.group);

        /* King figure (elevated) */
        var king = new THREE.Group();
        var kingBody = addToonPart(king, new THREE.BoxGeometry(6, 10, 4), COLORS.robe);
        kingBody.position.y = 0;
        var kingHead = addToonPart(king, new THREE.BoxGeometry(4, 4, 4), COLORS.skin);
        kingHead.position.y = 7;
        var kingCrown = addToonPart(king, new THREE.BoxGeometry(5, 2, 5), COLORS.gold);
        kingCrown.position.y = 9.5;
        king.position.set(0, -4, -15);
        scene.add(king);

        /* Courtiers (rows of smaller figures) */
        var courtGroup = new THREE.Group();
        for (var row = 0; row < 3; row++) {
            for (var i = 0; i < 8; i++) {
                var courtier = new THREE.Group();
                var body = addToonPart(courtier, new THREE.BoxGeometry(2.5, 5, 2.5), COLORS.robe);
                body.position.y = 0;
                var head = addToonPart(courtier, new THREE.BoxGeometry(2, 2, 2), COLORS.skin);
                head.position.y = 3.5;
                courtier.position.set(
                    -18 + i * 5,
                    -10 + (row === 0 ? 0 : row === 1 ? 1 : 2),
                    -8 + row * 6
                );
                courtier.rotation.y = (Math.random() - 0.5) * 0.4;
                courtGroup.add(courtier);
            }
        }
        scene.add(courtGroup);

        /* Torch sconces on walls */
        var torchGroup = new THREE.Group();
        for (var t = 0; t < 4; t++) {
            var torch = new THREE.Group();
            var             torchBody = new THREE.Mesh(
                new THREE.CylinderGeometry(0.3, 0.3, 3, 6),
                COLORS.dark
            );
            torchBody.position.y = 0;
            torch.add(torchBody);
            var flame = new THREE.Mesh(
                new THREE.SphereGeometry(0.6, 8, 8),
                new THREE.MeshBasicMaterial({ color: COLORS.red })
            );
            flame.position.y = 1.8;
            torch.add(flame);
            torch.position.set(
                t < 2 ? -28 : 28,
                5,
                -10 + (t % 2) * 15
            );
            torchGroup.add(torch);
        }
        scene.add(torchGroup);

        /* Lighting — torch-lit interior */
        scene.add(new THREE.AmbientLight(0xffffff, 0.2));
        var torchLight1 = new THREE.PointLight(COLORS.red, 1.5, 40);
        torchLight1.position.set(-20, 5, -10);
        scene.add(torchLight1);
        var torchLight2 = new THREE.PointLight(COLORS.red, 1.5, 40);
        torchLight2.position.set(20, 5, -10);
        scene.add(torchLight2);
        var kingLight = new THREE.PointLight(COLORS.gold, 0.8, 30);
        kingLight.position.set(0, 8, -15);
        scene.add(kingLight);

        return {
            scene: scene,
            cameraConfig: { distance: 50, height: 5 },
            animate: function (time) {
                var t = time * 0.001;
                torchLight1.intensity = 1.2 + Math.sin(t * 6) * 0.3;
                torchLight2.intensity = 1.2 + Math.sin(t * 6 + 1) * 0.3;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.5;
                c.targetX = 0;
                c.targetY = -2;
                c.targetZ = -10;
            }
        };
    };
})(window);
