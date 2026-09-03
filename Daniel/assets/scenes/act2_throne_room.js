(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* The Throne Room — Daniel before King Nebuchadnezzar.
     * Golden court, towering columns, central throne.
     * Camera slowly orbits, giving a cinematic sweep.
     */
    global.SCENE_FACTORIES.throne_room = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        scene.fog = new THREE.FogExp2(COLORS.sky, 0.01);

        /* Stars overhead */
        makeStars(scene, 200, 300, 0xffffff, 0.7);

        /* Floor — stone tiles */
        var floorGeo = new THREE.PlaneGeometry(80, 80);
        var floor = new THREE.Mesh(floorGeo, COLORS.stone);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Four columns framing the throne dais */
        var columnGeo = new THREE.CylinderGeometry(1.5, 1.5, 28, 12);
        var columns = new THREE.Group();
        var colPositions = [
            [-20, -10, 8], [20, -10, 8],
            [-20, -10, -8], [20, -10, -8]
        ];
        colPositions.forEach(function (pos) {
            var col = makeCylinder(1.5, 1.5, 28, COLORS.stone);
            col.group.position.set(pos[0], pos[1], pos[2]);
            columns.add(col.group);
        });
        scene.add(columns);

        /* Throne dais (stepped platforms) */
        var dais1 = makeBox(16, 3, 12, COLORS.stone);
        dais1.group.position.set(0, -8, -5);
        scene.add(dais1.group);

        var dais2 = makeBox(12, 3, 8, COLORS.stone);
        dais2.group.position.set(0, -5, -5);
        scene.add(dais2.group);

        /* Throne chair with black outlines (toon shader) */
        var throne = new THREE.Group();
        addToonPart(throne, new THREE.BoxGeometry(10, 14, 4), COLORS.stone);
        var throneBack = addToonPart(throne, new THREE.BoxGeometry(10, 4, 2), COLORS.gold);
        throneBack.position.y = 5;
        var armL = addToonPart(throne, new THREE.BoxGeometry(2, 8, 2), COLORS.gold);
        armL.position.x = -6;
        armL.position.y = -1;
        var armR = addToonPart(throne, new THREE.BoxGeometry(2, 8, 2), COLORS.gold);
        armR.position.x = 6;
        armR.position.y = -1;

        throne.position.y = -4;
        throne.position.z = -8;
        scene.add(throne);

        /* Golden torches */
        var torch1 = makeLightSphere(COLORS.red, 1.5, 30);
        torch1.position.set(-20, -5, 8);
        scene.add(torch1);

        var torch2 = makeLightSphere(COLORS.red, 1.5, 30);
        torch2.position.set(20, -5, 8);
        scene.add(torch2);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));

        var courtLight = new THREE.DirectionalLight(0xffffff, 1.0);
        courtLight.position.set(0, 50, 20);
        courtLight.castShadow = true;
        scene.add(courtLight);

        return {
            scene: scene,
            cameraConfig: { distance: 40, height: 5 },
            animate: function (time) {
                var t = time * 0.001;
                torch1.children.forEach(function (c) {
                    if (c.isPointLight) c.intensity = 1.5 + Math.sin(t * 5) * 0.3;
                });
                torch2.children.forEach(function (c) {
                    if (c.isPointLight) c.intensity = 1.5 + Math.sin(t * 4.5) * 0.4;
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.2;
                c.phi = Math.PI / 3 + Math.sin(t * 0.1) * 0.05;
                c.targetX = 0;
                c.targetY = -4;
                c.targetZ = -8;
            }
        };
    };
})(window);