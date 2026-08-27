(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* The Lions' Den — the mouth of the den, Daniel unharmed.
     * Angelic light fills the pit, lions cower. Camera slowly
     * rises from Daniel's perspective toward the opening above,
     * where dawn light breaks through.
     */
    global.SCENE_FACTORIES.lions_den_open = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x030b18);
        scene.fog = new THREE.FogExp2(0x030b18, 0.02);

        /* Den walls — stone ring */
        var wallGeo = new THREE.CylinderGeometry(24, 24, 16, 32, 1, true);
        wallGeo.openEnded = true;
        var wallMat = COLORS.stone;
        var walls = new THREE.Mesh(wallGeo, wallMat);
        walls.rotation.x = Math.PI / 2;
        walls.position.y = -2;
        walls.receiveShadow = true;
        scene.add(walls);

        /* Den floor — sandy stone */
        var floorGeo = new THREE.CircleGeometry(22, 32);
        var floorMat = COLORS.stone;
        var floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -10;
        floor.receiveShadow = true;
        scene.add(floor);

        /* Daniel in the center — simple figure */
        var daniel = new THREE.Group();
        addToonPart(daniel, new THREE.BoxGeometry(3, 9, 2), COLORS.robe);
        var head = addToonPart(daniel, new THREE.SphereGeometry(2.5, 12, 12), COLORS.skin, true);
        head.position.y = 5.5;
        daniel.position.set(0, -7.5, 0);
        scene.add(daniel);

        /* Lions cowering around Daniel */
        var lionColors = [0x6b4a0a, 0x8b6010];
        var lionPositions = [
            [-15, -9, 0], [15, -9, 0],
            [0, -9, -15], [0, -9, 15],
            [-10, -9, -10], [10, -9, 10]
        ];

        lionPositions.forEach(function (pos) {
            var lion = new THREE.Group();
            addToonPart(lion, new THREE.SphereGeometry(4, 12, 12), lionColors[Math.floor(Math.random() * lionColors.length)]);
            var mane = addToonPart(lion, new THREE.SphereGeometry(5, 12, 8), 0x8b6010);
            mane.position.y = 1;
            mane.scale.set(1.2, 0.6, 1.2);
            addToonPart(lion, new THREE.CylinderGeometry(0.8, 0.8, 8, 8), 0x6b4a0a);
            lion.position.set(pos[0], pos[1], pos[2]);
            lion.rotation.y = Math.random() * Math.PI * 2;
            lion.userData = { cower: Math.random() };
            scene.add(lion);
        });

        /* Angelic light */
        var angelLight = makeLightSphere(COLORS.teal, 3, 60);
        angelLight.position.set(0, 0, 0);
        scene.add(angelLight);

        /* Light beam from above */
        var beamGeo = new THREE.CylinderGeometry(0, 12, 20, 16, 1, true);
        var beamMat = new THREE.MeshBasicMaterial({
            color: COLORS.teal, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false
        });
        var beam = new THREE.Mesh(beamGeo, beamMat);
        beam.position.set(0, 8, 0);
        scene.add(beam);

        /* Dawn light coming through the opening */
        var dawnLight = new THREE.DirectionalLight(0xffffff, 1);
        dawnLight.position.set(0, 50, 0);
        scene.add(dawnLight);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));

        return {
            scene: scene,
            cameraConfig: { distance: 30, height: -5 },
            animate: function (time) {
                var t = time * 0.001;

                /* Lions cower — subtle movement */
                scene.traverse(function (child) {
                    if (child.userData && child.userData.cower !== undefined && child.children) {
                        /* Lion bodies crouch */
                        var bodies = child.children.filter(function (c) {
                            return c.geometry && c.geometry.type === 'SphereGeometry';
                        });
                        bodies.forEach(function (b, i) {
                            b.scale.y = 0.8 + Math.sin(t * 2 + child.userData.cower * 5) * 0.1;
                        });
                    }
                });

                /* Angel light pulse */
                angelLight.children.forEach(function (child) {
                    if (child.isPointLight) {
                        child.intensity = 2 + Math.sin(t * 1.5) * 0.8;
                    }
                });

                /* Beam pulse */
                beam.material.opacity = 0.15 + Math.sin(t * 2) * 0.05;

                /* Daniel's peaceful sway */
                daniel.rotation.z = Math.sin(t * 2) * 0.05;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                /* Slow rise from Daniel's perspective */
                c.theta = c.baseTheta + t * 0.12;
                c.phi = Math.PI / 3 + Math.sin(t * 0.3) * 0.1;
                c.distance = c.baseDistance;
                c.targetX = 0;
                c.targetY = -3;
                c.targetZ = 0;
            }
        };
    };
})(window);