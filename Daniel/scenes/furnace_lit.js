(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* The Fiery Furnace — inside the blazing furnace.
     * Molten stone, licking flames, heat distortion.
     * The three friends stand unharmed in the center.
     * Camera slowly rises from the flames toward the opening above.
     */
    global.SCENE_FACTORIES.furnace_lit = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a0a00);

        /* Furnace interior — stone walls */
        var furnaceMat = COLORS.stone;
        var wallGeo = new THREE.PlaneGeometry(50, 30);
        var backWall = new THREE.Mesh(wallGeo, furnaceMat);
        backWall.rotation.y = Math.PI;
        backWall.position.z = -15;
        scene.add(backWall);

        var leftWall = new THREE.Mesh(wallGeo, furnaceMat);
        leftWall.rotationY = -Math.PI / 2;
        leftWall.position.x = -15;
        leftWall.position.z = 0;
        scene.add(leftWall);

        var rightWall = new THREE.Mesh(wallGeo, furnaceMat);
        rightWall.rotationY = Math.PI / 2;
        rightWall.position.x = 15;
        rightWall.position.z = 0;
        scene.add(rightWall);

        /* Floor — molten stone */
        var floorGeo = new THREE.PlaneGeometry(50, 50);
        var floorMat = global.toonMat({ color: 0x8B0000, emissive: 0xff0000, emissiveIntensity: 0.5 });
        var floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -14;
        scene.add(floor);

        /* Flame particles — multiple layers of planes */
        var flameGroup = new THREE.Group();
        var flameColors = [0xff0000, 0xff6b5b, 0xffd84d, 0xffffff];
        for (var i = 0; i < 40; i++) {
            var flameGeo = new THREE.PlaneGeometry(3 + Math.random() * 4, 8 + Math.random() * 12);
            var flameMat = new THREE.MeshBasicMaterial({
                color: flameColors[Math.floor(Math.random() * flameColors.length)],
                transparent: true,
                opacity: 0.4 + Math.random() * 0.3,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            var flame = new THREE.Mesh(flameGeo, flameMat);
            flame.position.set(
                (Math.random() - 0.5) * 26,
                -12 + Math.random() * 18,
                -2 - Math.random() * 3
            );
            flame.rotation.z = (Math.random() - 0.5) * 0.5;
            flame.userData = { speed: 0.5 + Math.random() * 1.5, offset: Math.random() * Math.PI * 2 };
            flameGroup.add(flame);
        }
        scene.add(flameGroup);

        /* Heat distortion particles */
        var heatGroup = new THREE.Group();
        var heatMat = new THREE.MeshBasicMaterial({
            color: 0xffffff, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false
        });
        for (var h = 0; h < 20; h++) {
            var heatGeo = new THREE.PlaneGeometry(2 + Math.random() * 3, 10 + Math.random() * 10);
            var heat = new THREE.Mesh(heatGeo, heatMat);
            heat.position.set(
                (Math.random() - 0.5) * 26,
                -10 + Math.random() * 14,
                -5 - Math.random() * 5
            );
            heat.rotation.z = (Math.random() - 0.5) * 0.3;
            heatGroup.add(heat);
        }
        scene.add(heatGroup);

        /* The three friends in the center */
        var figures = new THREE.Group();
        for (var f = 0; f < 3; f++) {
            var person = makeBox(3, 8, 2, COLORS.robe);
            person.group.position.set(-6 + f * 6, -11, 0);
            figures.add(person.group);
        }
        scene.add(figures);

        /* Divine light in the center */
        var divineLight = makeLightSphere(COLORS.gold, 3, 80);
        divineLight.position.set(0, -8, 0);
        scene.add(divineLight);

        /* Ceiling opening (the furnace mouth) */
        var openingGeo = new THREE.RingGeometry(16, 20, 32);
        var openingMat = new THREE.MeshBasicMaterial({
            color: 0x2a0a00, side: THREE.DoubleSide, transparent: true, opacity: 0.7
        });
        var opening = new THREE.Mesh(openingGeo, openingMat);
        opening.position.set(0, 4, -15.1);
        opening.rotation.x = Math.PI / 2;
        scene.add(opening);

        /* Torch sconces on walls */
        var torchGeo = new THREE.CylinderGeometry(0.5, 0.5, 4, 8);
        var torchMat = new THREE.MeshBasicMaterial({ color: COLORS.red });
        var torchL = new THREE.Mesh(torchGeo, torchMat);
        torchL.position.set(-12, 0, -8);
        scene.add(torchL);
        var torchR = new THREE.Mesh(torchGeo, torchMat);
        torchR.position.set(12, 0, -8);
        scene.add(torchR);

        return {
            scene: scene,
            cameraConfig: { distance: 25, height: 0 },
            animate: function (time) {
                var t = time * 0.001;

                /* Animate flames */
                flameGroup.children.forEach(function (flame) {
                    flame.material.opacity = 0.3 + Math.sin(t * flame.userData.speed + flame.userData.offset) * 0.2;
                    flame.scale.y = 1 + Math.sin(t * flame.userData.speed * 2 + flame.userData.offset) * 0.3;
                });

                /* Animate heat shimmer */
                heatGroup.children.forEach(function (heat, i) {
                    heat.position.y += 0.05 + i * 0.001;
                    if (heat.position.y > 4) heat.position.y = -10;
                    heat.scale.x = 1 + Math.sin(t * 2 + i * 0.5) * 0.2;
                    heat.scale.y = 1 + Math.sin(t * 3 + i * 0.5) * 0.1;
                });

                /* Divine light pulse */
                divineLight.children.forEach(function (child) {
                    if (child.isPointLight) {
                        child.intensity = 2 + Math.sin(t * 2) * 0.5;
                    }
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                /* Slow rise from flames toward the ceiling opening */
                c.theta = c.baseTheta + t * 0.08;
                c.phi = 1.2 + Math.sin(t * 0.3) * 0.1;
                c.distance = c.baseDistance;
                c.targetX = 0;
                c.targetY = -8;
                c.targetZ = 0;
            }
        };
    };
})(window);