(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Babylon Cityscape — establishing shot of ancient Babylon at twilight.
     * Layered city walls, the ziggurat, the Ishtar Gate, and the Euphrates.
     * Camera slowly orbits the skyline.
     */
    global.SCENE_FACTORIES.babylon_city = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.night);
        scene.fog = new THREE.FogExp2(COLORS.night, 0.008);

        /* Star field */
        makeStars(scene, 400, 500, 0xffffff, 0.7);
        makeStars(scene, 20, 500, COLORS.gold, 1.5);

        /* Euphrates river (low flat plane) */
        var riverGeo = new THREE.PlaneGeometry(500, 60);
        riverGeo.rotateX(-Math.PI / 2);
        var riverMat = new THREE.MeshBasicMaterial({
            color: COLORS.water, transparent: true, opacity: 0.4, side: THREE.DoubleSide
        });
        var river = new THREE.Mesh(riverGeo, riverMat);
        river.position.y = -12;
        scene.add(river);

        /* City wall blocks (toon-shaded boxes) */
        var wallGroup = new THREE.Group();
        var wallColors = [COLORS.stone, COLORS.deepRed, COLORS.skin];
        for (var i = 0; i < 12; i++) {
            var w = 8 + Math.random() * 4;
            var h = 8 + Math.random() * 10;
            var d = 4 + Math.random() * 3;
            var wall = addToonPart(wallGroup, new THREE.BoxGeometry(w, h, d), COLORS.stone);
            wall.position.set(-120 + i * 22, -6 + h / 2, -20 - Math.random() * 10);
            wall.rotation.y = (Math.random() - 0.5) * 0.3;
        }
        scene.add(wallGroup);

        /* Ziggurat (stepped pyramid) */
        var ziggurat = new THREE.Group();
        var zSteps = 5;
        for (var s = 0; s < zSteps; s++) {
            var sz = 24 - s * 4;
            var sheight = 5;
            var z = addToonPart(ziggurat, new THREE.BoxGeometry(sz, sheight, sz), COLORS.stone);
            z.position.y = -10 + s * (sheight + 0.5);
        }
        ziggurat.position.set(-60, 0, -30);
        scene.add(ziggurat);

        /* Ishtar Gate (tall archway) */
        var gate = new THREE.Group();
        addToonPart(gate, new THREE.BoxGeometry(12, 14, 3), COLORS.deepRed);
        addToonPart(gate, new THREE.PlaneGeometry(8, 8), COLORS.gold);
        gate.children[gate.children.length - 1].position.z = -1.5;
        gate.children[gate.children.length - 1].position.y = 1;
        gate.position.set(0, -3, -25);
        scene.add(gate);

        /* Distant watchtowers */
        for (var t = 0; t < 6; t++) {
            var tower = addToonPart(new THREE.Group(), new THREE.CylinderGeometry(1.5, 1.5, 16, 8), COLORS.stone);
            tower.position.set(-100 + t * 40, -2, -40);
            scene.add(tower);
        }

        /* Lighting */
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sunset = new THREE.DirectionalLight(COLORS.gold, 1.5);
        sunset.position.set(100, 80, 50);
        sunset.castShadow = true;
        scene.add(sunset);

        /* Emissive glow on the gate and ziggurat */
        var gateGlow = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 14),
            new THREE.MeshBasicMaterial({ color: COLORS.gold, transparent: true, opacity: 0.15, side: THREE.DoubleSide })
        );
        gateGlow.position.z = -1.5;
        gate.add(gateGlow);

        return {
            scene: scene,
            cameraConfig: { distance: 80, height: 10 },
            animate: function (time) {
                var t = time * 0.001;
                /* Slow city breathe */
                wallGroup.children.forEach(function (child, i) {
                    if (child.material && child.material.emissive) {
                        child.material.emissive.setHSL(Math.sin(t * 0.5 + i * 0.3) * 0.05, 0.5, 0.2);
                    }
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.05;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 2.8;
                c.targetX = -30;
                c.targetY = -3;
                c.targetZ = -30;
            }
        };
    };
})(window);
