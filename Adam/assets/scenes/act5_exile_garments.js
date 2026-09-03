(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.exile_garments = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0502);
        makeFog(scene, 0x0a0502, 0.0035);

        // Warm divine light
        var clothLight = makeLightSphere(0x8B4513, 0.8, 60);
        clothLight.scale.set(1.5, 1.5, 1.5);
        clothLight.position.set(0, 5, 0);
        scene.add(clothLight);

        // Stars/dust particles
        makeStars(scene, 100, 300, 0xFFD84D, 0.5);

        // Adam and Eve — covered in animal-skin garments
        var adam = makeCharacter(MAT.skinAdam, MAT.clothAdam, MAT.hair, false);
        adam.position.set(-20, 5, 0);
        adam.rotation.z = 0.3;
        scene.add(adam);

        var eve = makeCharacter(MAT.skinEve, MAT.clothEve, MAT.hair, true);
        eve.position.set(20, 5, 0);
        eve.rotation.z = -0.2;
        scene.add(eve);

        // Cloth covering — represented as glowing golden fabric
        var clothGeo = new THREE.PlaneGeometry(40, 25);
        var clothMat = toonMat({ color: 0x5c4033 });
        var cloth = new THREE.Mesh(clothGeo, clothMat);
        cloth.position.set(0, 10, 0);
        cloth.rotation.x = -Math.PI / 4;
        cloth.castShadow = true;
        cloth.receiveShadow = true;
        scene.add(cloth);
        addOutline(cloth, 0.03);

        // Divine light source above
        var divineLight = makeLightSphere(0xFFD84D, 0.6, 100);
        divineLight.scale.set(2, 2, 2);
        divineLight.position.set(0, 30, 0);
        scene.add(divineLight);

        // Ground
        scene.add(makeGround(200, 0x0a0502, -1));

        // Lights
        scene.add(new THREE.AmbientLight(0x443311, 0.4));
        var sun = new THREE.DirectionalLight(0xFFD84D, 0.6);
        sun.position.set(10, 30, 10);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 15 },
            animate: function (time) {
                clothLight.material.opacity = 0.6 + Math.sin(time * 2) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance + Math.sin(t * 0.2) * 5;
                c.phi = Math.PI / 4 + Math.sin(t * 0.1) * 0.08;
                c.roll = Math.sin(t * 0.15) * 0.04;
                c.targetX = 0; c.targetY = 5; c.targetZ = 0;
            }
        };
    };
})(window);
