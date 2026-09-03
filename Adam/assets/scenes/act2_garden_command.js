(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.garden_command = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        makeFog(scene, 0x1a0e06, 0.003);

        scene.add(makeGround(160, 0x5c4033, -0.5));

        // Tree of Knowledge (left) — red fruit
        var knowTree = makeTreeWithFruit(COLORS.redFruit, 0x4a7a3a);
        knowTree.position.set(-40, 0, 0);
        scene.add(knowTree);

        // Tree of Life (right) — golden fruit
        var lifeTree = makeTreeWithFruit(COLORS.gold, 0x5a7a3a);
        lifeTree.position.set(40, 0, 0);
        scene.add(lifeTree);

        // Divine hand/light from above — emphasis: divine authority
        var divineLight = makeLightSphere(0xffffff, 1.5, 50);
        divineLight.position.set(0, 40, 0);
        scene.add(divineLight);

        // light rays pointing down — movement: divine presence
        var rayMat = new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.1 });
        var rays = [];
        for (var r = 0; r < 6; r++) {
            var angle = (r / 6) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(1.5, 35);
            rayGeo.rotateX(Math.PI / 2);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 8, 17, Math.sin(angle) * 8);
            ray.rotation.y = angle;
            scene.add(ray);
            rays.push(ray);
        }

        // Adam — receiving the command
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(0, 0, 50);
        scene.add(adam);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var sun = new THREE.DirectionalLight(0xffffff, 0.6);
        sun.position.set(0, 30, 0);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 15 },
            animate: function (time) {
                if (divineLight) {
                    divineLight.position.y = 40 + Math.sin(time * 0.4) * 1;
                }
                for (var i = 0; i < rays.length; i++) {
                    rays[i].material.opacity = 0.1 + Math.sin(time * 0.5 + i * 0.5) * 0.03;
                }
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance + Math.sin(t * 0.25) * 6;
                c.phi = Math.PI / 4 + Math.sin(t * 0.12) * 0.06;
                c.targetX = Math.sin(t * 0.4) * 3;
                c.targetY = 40 + Math.sin(t * 0.4);
                c.targetZ = Math.cos(t * 0.4) * 3;
                c.roll = Math.sin(t * 0.3) * 0.02;
            }
        };
    };
})(window);
