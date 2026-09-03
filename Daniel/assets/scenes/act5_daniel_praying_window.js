(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Daniel Praying Window — Daniel kneeling at window, facing Jerusalem.
     * Morning light from east, cross-shaped shadow on floor.
     * City visible below through window.
     */
    global.SCENE_FACTORIES.daniel_praying_window = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x1a0e06, 0.006);

        /* Floor */
        var floorGeo = new THREE.PlaneGeometry(50, 50);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Back wall with large window */
        var wallGeo = new THREE.PlaneGeometry(50, 35);
        var backWall = new THREE.Mesh(wallGeo, COLORS.dark);
        backWall.position.set(0, 0, -25);
        scene.add(backWall);

        /* Window (bright, morning light) */
        var windowGeo = new THREE.PlaneGeometry(14, 18);
        var windowMat = new THREE.MeshBasicMaterial({
            color: 0xffddaa, transparent: true, opacity: 0.5
        });
        var windowMesh = new THREE.Mesh(windowGeo, windowMat);
        windowMesh.position.set(0, 2, -24.9);
        scene.add(windowMesh);

        /* Cross-shaped shadow on floor (dark plane) */
        var crossH = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 3),
            new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 })
        );
        crossH.rotation.x = -Math.PI / 2;
        crossH.position.set(0, -9.9, 5);
        scene.add(crossH);
        var crossV = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 20),
            new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 })
        );
        crossV.rotation.x = -Math.PI / 2;
        crossV.position.set(0, -9.9, 5);
        scene.add(crossV);

        /* City below (tiny buildings) */
        var cityGroup = new THREE.Group();
        for (var i = 0; i < 50; i++) {
            var building = makeBox(1 + Math.random() * 2, 2 + Math.random() * 5, 1 + Math.random() * 2, COLORS.dark);
            building.group.position.set(
                (Math.random() - 0.5) * 80,
                -10 + (2 + Math.random() * 5) / 2,
                -40 - Math.random() * 30
            );
            cityGroup.add(building.group);
        }
        scene.add(cityGroup);

        /* Daniel kneeling at window */
        var daniel = new THREE.Group();
        var body = addToonPart(daniel, new THREE.BoxGeometry(3, 3, 2), COLORS.robe);
        body.position.y = -8;
        body.rotation.x = 0.4;
        var head = addToonPart(daniel, new THREE.BoxGeometry(2, 2, 2), COLORS.skin);
        head.position.set(0, -6.5, 1);
        daniel.position.set(0, -8, 8);
        scene.add(daniel);

        /* Morning light */
        scene.add(new THREE.AmbientLight(0xffddaa, 0.4));
        var morningLight = new THREE.DirectionalLight(0xffddaa, 0.8);
        morningLight.position.set(0, 30, 20);
        morningLight.castShadow = true;
        scene.add(morningLight);

        var windowLight = new THREE.PointLight(0xffddaa, 0.6, 40);
        windowLight.position.set(0, 5, 10);
        scene.add(windowLight);

        return {
            scene: scene,
            cameraConfig: { distance: 40, height: 5 },
            animate: function (time) {
                var t = time * 0.001;
                windowLight.intensity = 0.5 + Math.sin(t * 0.2) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.5;
                c.targetX = 0;
                c.targetY = -5;
                c.targetZ = 5;
            }
        };
    };
})(window);
