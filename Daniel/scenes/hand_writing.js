(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* The Writing on the Wall — Belshazzar's feast.
     * A mysterious hand writes divine judgment on the palace wall.
     * Features: stone chamber walls, glowing Hebrew characters,
     * the disembodied hand emerging from darkness, and a
     * blood-red banquet table in the foreground.
     */
    global.SCENE_FACTORIES.hand_writing = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.dark);
        scene.fog = new THREE.FogExp2(0x160a14, 0.02);

        /* Chamber walls */
        var wallMat = COLORS.stone;
        var wallGeo = new THREE.PlaneGeometry(60, 50);
        var wall = new THREE.Mesh(wallGeo, wallMat);
        wall.rotation.y = Math.PI / 2;
        wall.position.set(-30, 0, 30);
        wall.receiveShadow = true;
        scene.add(wall);

        /* Back wall (where the writing appears) */
        var backWall = new THREE.Mesh(wallGeo, COLORS.stone);
        backWall.rotation.y = Math.PI;
        backWall.position.set(0, 0, -30);
        backWall.receiveShadow = true;
        scene.add(backWall);

        /* Floor — cracked stone tiles */
        var floorGeo = new THREE.PlaneGeometry(60, 60);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* The three Hebrew words — glowing emissive planes */
        var words = [
            { text: 'מְנֵא', offset: { x: 0, y: 8, z: -29.5 } },
            { text: 'תְּקֵל', offset: { x: 0, y: 0, z: -29.5 } },
            { text: 'פְּרֵס', offset: { x: 0, y: -8, z: -29.5 } }
        ];

        var wordGroup = new THREE.Group();
        var fontSize = 3;

        words.forEach(function (w, i) {
            /* Create a simple block geometry to represent each word */
            var wordGeo = new THREE.PlaneGeometry(8, 2);
            var wordMat = new THREE.MeshBasicMaterial({
                color: COLORS.gold,
                transparent: true,
                opacity: 0.8
            });
            var wordMesh = new THREE.Mesh(wordGeo, wordMat);
            wordMesh.position.set(w.offset.x, w.offset.y, w.offset.z);
            wordGroup.add(wordMesh);

            /* Glow behind each word */
            var glowGeo = new THREE.PlaneGeometry(10, 3);
            var glowMat = new THREE.MeshBasicMaterial({
                color: COLORS.gold,
                transparent: true,
                opacity: 0.3
            });
            var glowMesh = new THREE.Mesh(glowGeo, glowMat);
            glowMesh.position.set(w.offset.x, w.offset.y, w.offset.z - 0.3);
            wordGroup.add(glowMesh);
        });

        scene.add(wordGroup);

        /* Banquet table with golden cups — blood-red fabric */
        var tableGeo = new THREE.BoxGeometry(24, 2, 8);
        var tableMat = COLORS.deepRed;
        var table = new THREE.Mesh(tableGeo, tableMat);
        table.position.set(0, -5, 0);
        table.castShadow = true;
        table.receiveShadow = true;
        scene.add(table);

        /* Golden cups on the table */
        for (var c = 0; c < 5; c++) {
            var cupGeo = new THREE.CylinderGeometry(1, 1.2, 2, 8);
            var cup = addToonPart(new THREE.Group(), cupGeo, COLORS.gold);
            cup.children[0].position.set(-18 + c * 6, -4, 0);
            scene.add(cup);
        }

        /* The mysterious hand — emerging from shadow */
        var handGroup = new THREE.Group();

        /* Arm (cylinder) */
        var armGeo = new THREE.CylinderGeometry(2, 2.5, 12, 12);
        var arm = addToonPart(handGroup, armGeo, COLORS.skin);
        handGroup.position.set(20, -3, 5);

        /* Palm (sphere) */
        var palmGeo = new THREE.SphereGeometry(3.5, 12, 12);
        var palm = addToonPart(handGroup, palmGeo, COLORS.skin);
        palm.position.set(1, 5, 0);

        /* Fingers (boxes) */
        var fingerNames = ['index', 'middle', 'ring', 'pinky'];
        fingerNames.forEach(function (name, i) {
            var fingerGeo = new THREE.BoxGeometry(1, 5, 1);
            var finger = addToonPart(handGroup, fingerGeo, COLORS.skin);
            finger.position.set(
                3 + Math.cos(i * 0.3) * 3.5,
                4 + Math.sin(i * 0.3) * 2,
                -1.5 + i * 1.2
            );
            finger.rotation.z = i * 0.15;
        });

        scene.add(handGroup);

        /* Light source — divine illumination on the writing */
        var writingLight = new THREE.PointLight(COLORS.gold, 2, 40);
        writingLight.position.set(0, 5, -10);
        writingLight.castShadow = true;
        scene.add(writingLight);

        scene.add(new THREE.AmbientLight(0xffffff, 0.3));

        /* Flickering candle on the table */
        var candleLight = new THREE.PointLight(0xff6b5b, 1, 20);
        candleLight.position.set(0, -4, 0);
        scene.add(candleLight);

        return {
            scene: scene,
            cameraConfig: { distance: 35, height: 0 },
            animate: function (time) {
                var t = time * 0.001;

                /* Words pulse with divine light */
                wordGroup.children.forEach(function (child, i) {
                    if (i % 2 === 0) {
                        var glow = child;
                        glow.material.opacity = 0.25 + Math.sin(t * 2 + i * 0.5) * 0.1;
                    }
                });

                /* Hand slowly writes — subtle movement */
                handGroup.rotation.y = Math.sin(t * 0.5) * 0.1;
                handGroup.children.forEach(function (child, i) {
                    if (i >= 3) {
                        child.rotation.z = Math.sin(t * 3 + i * 0.5) * 0.05;
                    }
                });

                /* Candle flicker */
                candleLight.intensity = 1 + Math.sin(t * 5) * 0.3;

                /* Divine light pulses */
                writingLight.intensity = 2 + Math.sin(t * 1.5) * 0.5;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                /* Slow orbit around the chamber */
                c.theta = c.baseTheta + t * 0.1;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.3) * 0.08;
                c.targetX = 0;
                c.targetY = -2;
                c.targetZ = -5;
            }
        };
    };
})(window);
