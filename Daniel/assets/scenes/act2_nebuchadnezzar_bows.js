(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Nebuchadnezzar Bows — dawn light, king kneeling before Daniel.
     * The proud king humbled, crown in hand.
     * Courtiers look on in shock.
     */
    global.SCENE_FACTORIES.nebuchadnezzar_bows = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x1a0e06, 0.008);

        /* Floor */
        var floorGeo = new THREE.PlaneGeometry(50, 50);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Back wall with windows */
        var wallGeo = new THREE.PlaneGeometry(50, 30);
        var backWall = new THREE.Mesh(wallGeo, COLORS.dark);
        backWall.position.set(0, 0, -25);
        scene.add(backWall);

        /* Dawn light from windows */
        var windowGeo = new THREE.PlaneGeometry(8, 12);
        var windowMat = new THREE.MeshBasicMaterial({
            color: 0xffddaa, transparent: true, opacity: 0.4
        });
        for (var w = 0; w < 3; w++) {
            var win = new THREE.Mesh(windowGeo, windowMat);
            win.position.set(-10 + w * 10, 5, -24.9);
            scene.add(win);
        }

        /* King kneeling (center) */
        var king = new THREE.Group();
        var kingBody = addToonPart(king, new THREE.BoxGeometry(5, 3, 3), COLORS.robe);
        kingBody.position.y = -9;
        kingBody.rotation.x = Math.PI / 2;
        var kingHead = addToonPart(king, new THREE.BoxGeometry(3, 3, 3), COLORS.skin);
        kingHead.position.set(0, -7.5, 1.5);
        var kingCrown = addToonPart(king, new THREE.BoxGeometry(3.5, 1, 3.5), COLORS.gold);
        kingCrown.position.set(0, -6.5, 1.5);
        king.position.set(0, -8, -5);
        scene.add(king);

        /* Daniel standing (slightly behind king) */
        var daniel = new THREE.Group();
        var dBody = addToonPart(daniel, new THREE.BoxGeometry(3, 8, 2), COLORS.robe);
        dBody.position.y = -4;
        var dHead = addToonPart(daniel, new THREE.BoxGeometry(2, 2, 2), COLORS.skin);
        dHead.position.y = 0;
        daniel.position.set(0, -8, 2);
        scene.add(daniel);

        /* Crown on ground between them */
        var crownGround = addToonPart(new THREE.Group(), new THREE.BoxGeometry(2, 0.5, 2), COLORS.gold);
        crownGround.group.position.set(0, -9.75, -2);
        scene.add(crownGround.group);

        /* Courtiers (rows behind, looking shocked) */
        var courtGroup = new THREE.Group();
        for (var row = 0; row < 3; row++) {
            for (var i = 0; i < 8; i++) {
                var courtier = new THREE.Group();
                var cBody = addToonPart(courtier, new THREE.BoxGeometry(2, 5, 2), COLORS.robe);
                cBody.position.y = 0;
                var cHead = addToonPart(courtier, new THREE.BoxGeometry(1.5, 1.5, 1.5), COLORS.skin);
                cHead.position.y = 3.5;
                courtier.position.set(
                    -18 + i * 5,
                    -10 + row * 1.5,
                    -8 + row * 5
                );
                courtier.rotation.y = (Math.random() - 0.5) * 0.5;
                courtGroup.add(courtier);
            }
        }
        scene.add(courtGroup);

        /* Dawn light */
        scene.add(new THREE.AmbientLight(0xffddaa, 0.5));
        var dawnLight = new THREE.DirectionalLight(0xffddaa, 1.0);
        dawnLight.position.set(0, 20, 10);
        dawnLight.castShadow = true;
        scene.add(dawnLight);

        /* Crown glow */
        var glowMat = new THREE.MeshBasicMaterial({
            color: COLORS.gold, transparent: true, opacity: 0.2
        });
        var glow = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), glowMat);
        glow.rotation.x = -Math.PI / 2;
        glow.position.set(0, -9.7, -2);
        scene.add(glow);

        return {
            scene: scene,
            cameraConfig: { distance: 45, height: 5 },
            animate: function (time) {
                var t = time * 0.001;
                glow.material.opacity = 0.15 + Math.sin(t * 0.5) * 0.05;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.8;
                c.targetX = 0;
                c.targetY = -3;
                c.targetZ = -2;
            }
        };
    };
})(window);
