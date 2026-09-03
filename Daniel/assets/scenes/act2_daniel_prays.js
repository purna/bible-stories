(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Daniel Prays — night scene, Daniel kneeling by window.
     * City spread out below, stars visible through window.
     * Soft blue moonlight, warm oil lamp glow.
     */
    global.SCENE_FACTORIES.daniel_prays = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x03010a, 0.006);

        /* Floor */
        var floorGeo = new THREE.PlaneGeometry(40, 40);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Back wall */
        var wallGeo = new THREE.PlaneGeometry(40, 30);
        var backWall = new THREE.Mesh(wallGeo, COLORS.dark);
        backWall.position.set(0, 0, -20);
        scene.add(backWall);

        /* Window (bright plane in back wall) */
        var windowGeo = new THREE.PlaneGeometry(10, 14);
        var windowMat = new THREE.MeshBasicMaterial({
            color: 0x4ECDC4, transparent: true, opacity: 0.3
        });
        var windowMesh = new THREE.Mesh(windowGeo, windowMat);
        windowMesh.position.set(0, 2, -19.9);
        scene.add(windowMesh);

        /* City below (tiny boxes) */
        var cityGroup = new THREE.Group();
        for (var i = 0; i < 40; i++) {
            var building = makeBox(1 + Math.random() * 2, 2 + Math.random() * 4, 1 + Math.random() * 2, COLORS.dark);
            building.group.position.set(
                (Math.random() - 0.5) * 60,
                -10 + (2 + Math.random() * 4) / 2,
                -30 - Math.random() * 20
            );
            cityGroup.add(building.group);
        }
        scene.add(cityGroup);

        /* Daniel kneeling */
        var daniel = new THREE.Group();
        var body = addToonPart(daniel, new THREE.BoxGeometry(3, 4, 2), COLORS.robe);
        body.position.y = -6;
        var head = addToonPart(daniel, new THREE.BoxGeometry(2, 2, 2), COLORS.skin);
        head.position.y = -3;
        daniel.position.set(0, -8, 5);
        daniel.rotation.x = 0.3;
        scene.add(daniel);

        /* Oil lamp */
        var lamp = new THREE.Group();
        var lampBase = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 1, 8),
            COLORS.metal
        );
        lampBase.position.y = -9;
        lamp.add(lampBase);
        var flame = new THREE.Mesh(
            new THREE.SphereGeometry(0.4, 8, 8),
            new THREE.MeshBasicMaterial({ color: COLORS.gold })
        );
        flame.position.y = -8;
        lamp.add(flame);
        lamp.position.set(3, -8, 3);
        scene.add(lamp);

        /* Star field through window */
        makeStars(scene, 100, 200, 0xffffff, 0.5);

        /* Lighting */
        scene.add(new THREE.AmbientLight(0x4ECDC4, 0.3));
        var moonLight = new THREE.DirectionalLight(0x4ECDC4, 0.5);
        moonLight.position.set(0, 20, -10);
        scene.add(moonLight);
        var lampLight = new THREE.PointLight(COLORS.gold, 0.8, 20);
        lampLight.position.set(3, -7, 3);
        scene.add(lampLight);

        return {
            scene: scene,
            cameraConfig: { distance: 40, height: 5 },
            animate: function (time) {
                var t = time * 0.001;
                flame.scale.setScalar(0.8 + Math.sin(t * 3) * 0.2);
                lampLight.intensity = 0.7 + Math.sin(t * 2) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.5;
                c.targetX = 0;
                c.targetY = -5;
                c.targetZ = 0;
            }
        };
    };
})(window);
