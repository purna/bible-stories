(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Babylon Falls — the city burning as prophecy is fulfilled.
     * Smoke fills the sky, the walls are breached, the Hanging Gardens
     * burn. Camera slowly descends from the burning walls into the
     * chaos below.
     */
    global.SCENE_FACTORIES.babylon_falls = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a0a00);
        scene.fog = new THREE.FogExp2(0x2a0a00, 0.01);

        /* City base — the ground */
        var groundGeo = new THREE.PlaneGeometry(200, 200);
        var groundMat = COLORS.stone;
        var ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -14;
        ground.receiveShadow = true;
        scene.add(ground);

        /* City buildings — blocks of varying heights */
        var buildings = new THREE.Group();
        var bldColors = [COLORS.stone, COLORS.deepRed, COLORS.skin, COLORS.bark];
        for (var i = 0; i < 30; i++) {
            var w = 4 + Math.random() * 8;
            var h = 6 + Math.random() * 20;
            var d = 4 + Math.random() * 8;
            var b = addToonPart(buildings, new THREE.BoxGeometry(w, h, d),
                bldColors[Math.floor(Math.random() * bldColors.length)]);
            b.position.set(
                (Math.random() - 0.5) * 120,
                -14 + h / 2,
                (Math.random() - 0.5) * 80
            );
        }
        scene.add(buildings);

        /* Hanging Gardens — terraced spheres */
        var gardens = new THREE.Group();
        for (var g = 0; g < 3; g++) {
            var terrace = addToonPart(gardens, new THREE.SphereGeometry(8, 16, 12), COLORS.leaf);
            terrace.position.set(-50 + g * 20, -2 + g * 3, -30);
        }
        scene.add(gardens);

        /* City walls — tall segments */
        var walls = new THREE.Group();
        for (var w = 0; w < 8; w++) {
            var wall = addToonPart(walls, new THREE.BoxGeometry(18, 14, 4), COLORS.stone);
            wall.position.set(-80 + w * 22, -7, -60);
        }
        scene.add(walls);

        /* Breached section — broken wall pieces */
        var breach = new THREE.Group();
        for (var b = 0; b < 6; b++) {
            var piece = addToonPart(breach, new THREE.BoxGeometry(6, 10, 4), COLORS.stone);
            piece.position.set(-40 + b * 15, -9, -62);
            piece.rotation.y = (Math.random() - 0.5) * 0.5;
            piece.rotation.z = (Math.random() - 0.5) * 0.3;
        }
        scene.add(breach);

        /* Smoke particles */
        var smokeGroup = new THREE.Group();
        var smokeGeo = new THREE.SphereGeometry(4, 8, 8);
        for (var s = 0; s < 30; s++) {
            var smokeMat = new THREE.MeshBasicMaterial({
                color: 0x555555, transparent: true, opacity: 0.2 + Math.random() * 0.2, depthWrite: false
            });
            var smoke = new THREE.Mesh(smokeGeo, smokeMat);
            smoke.position.set(
                (Math.random() - 0.5) * 100,
                -10 + Math.random() * 30,
                (Math.random() - 0.5) * 40
            );
            smoke.userData = { speed: 0.2 + Math.random() * 0.5, rise: 0, drift: Math.random() };
            smokeGroup.add(smoke);
        }
        scene.add(smokeGroup);

        /* Fire on buildings */
        var fireGroup = new THREE.Group();
        var fireColors = [COLORS.red, COLORS.gold, 0xff4500];
        for (var f = 0; f < 15; f++) {
            var fireGeo = new THREE.SphereGeometry(2 + Math.random() * 2, 8, 8);
            var fireMat = new THREE.MeshBasicMaterial({
                color: fireColors[Math.floor(Math.random() * fireColors.length)],
                transparent: true, opacity: 0.6 + Math.random() * 0.3, depthWrite: false
            });
            var fire = new THREE.Mesh(fireGeo, fireMat);
            var bld = buildings.children[Math.floor(Math.random() * buildings.children.length)];
            fire.position.copy(bld.position);
            fire.position.y += 5;
            fire.userData = { speed: 3 + Math.random() * 2, offset: Math.random() * Math.PI * 2 };
            fireGroup.add(fire);
        }
        scene.add(fireGroup);

        /* Ember particles */
        var emberGroup = new THREE.Group();
        var emberGeo = new THREE.SphereGeometry(0.5, 6, 6);
        var emberMat = new THREE.MeshBasicMaterial({
            color: COLORS.gold, transparent: true, opacity: 0.8, depthWrite: false
        });
        for (var e = 0; e < 50; e++) {
            var ember = new THREE.Mesh(emberGeo, emberMat);
            ember.position.set(
                (Math.random() - 0.5) * 80,
                Math.random() * 10,
                (Math.random() - 0.5) * 40
            );
            ember.userData = { speed: 1 + Math.random() * 2, x: 0 };
            emberGroup.add(ember);
        }
        scene.add(emberGroup);

        /* Distant blood-red sky */
        var skyLight = new THREE.PointLight(COLORS.deepRed, 1, 300);
        skyLight.position.set(0, 50, 0);
        scene.add(skyLight);

        scene.add(new THREE.AmbientLight(0xffffff, 0.3));

        return {
            scene: scene,
            cameraConfig: { distance: 90, height: 20 },
            animate: function (time) {
                var t = time * 0.001;

                /* Smoke rises */
                smokeGroup.children.forEach(function (smoke) {
                    smoke.userData.rise += 0.3 + smoke.userData.speed * 0.1;
                    smoke.position.y += 0.2;
                    smoke.position.x += (Math.random() - 0.5) * 0.2;
                    if (smoke.position.y > 20) {
                        smoke.position.y = -8;
                        smoke.position.x = (Math.random() - 0.5) * 100;
                    }
                    smoke.scale.setScalar(1 + smoke.userData.rise * 0.02);
                });

                /* Fire pulses */
                fireGroup.children.forEach(function (fire) {
                    var intensity = 0.6 + Math.sin(t * fire.userData.speed + fire.userData.offset) * 0.3;
                    fire.material.opacity = intensity;
                    fire.scale.setScalar(0.8 + Math.sin(t * fire.userData.speed + fire.userData.offset) * 0.4);
                });

                /* Embers float upward */
                emberGroup.children.forEach(function (ember) {
                    ember.userData.x += 0.02 * ember.userData.speed;
                    ember.position.y += 0.3 * ember.userData.speed;
                    ember.position.x += (Math.random() - 0.5) * 0.1;
                    if (ember.position.y > 30) {
                        ember.position.y = -8;
                        ember.position.x = (Math.random() - 0.5) * 80;
                    }
                    ember.material.opacity = 0.5 + Math.sin(t * 3 + ember.userData.x * 10) * 0.3;
                });

                /* Sky light pulse */
                skyLight.intensity = 1 + Math.sin(t * 0.5) * 0.2;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                /* Slow orbit with descent */
                c.theta = c.baseTheta + t * 0.1;
                c.phi = Math.PI / 3 + Math.sin(t * 0.3) * 0.15;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 10;
                c.targetX = 0;
                c.targetY = -5;
                c.targetZ = -30;
            }
        };
    };
})(window);