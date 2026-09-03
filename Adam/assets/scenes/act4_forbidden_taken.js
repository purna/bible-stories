(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // forbidden_taken — "She looked at the fruit, longing... then she took some and ate it"
    // EXTREME CLOSE-UP: Eve's hand reaching toward the fruit.
    // Tree blurred in background. Serpent coiled below.
    // Camera pushes in on the moment of contact.
    global.SCENE_FACTORIES.forbidden_taken = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a0502);
        makeFog(scene, 0x330000, 0.004);

        // Just the tree trunk + fruit (no full tree canopy — close-up focus)
        var trunkGeo = new THREE.CylinderGeometry(4, 6, 40, 12);
        var trunk = new THREE.Mesh(trunkGeo, MAT.bark);
        trunk.position.set(0, 20, -30);
        scene.add(trunk);
        addOutline(trunk, 0.05);

        // The forbidden fruit — large, central, glowing
        var fruit = new THREE.Mesh(new THREE.SphereGeometry(8, 16, 16), MAT.emissiveRed);
        fruit.position.set(0, 42, -25);
        scene.add(fruit);
        addOutline(fruit, 0.1);

        // Fruit glow intensifying
        var fruitGlow = makeLightSphere(COLORS.deepRed, 1.2, 35);
        fruitGlow.position.set(0, 42, -25);
        scene.add(fruitGlow);

        // Eve's hand — reaching into frame from bottom left
        var hand = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 12), MAT.skinEve);
        hand.position.set(-12, 25, -15);
        scene.add(hand);
        addOutline(hand, 0.1);

        // Eve's arm reaching
        var arm = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 28, 12), MAT.skinEve);
        arm.position.set(-15, 15, -12);
        arm.rotation.z = Math.PI / 5;
        scene.add(arm);
        addOutline(arm, 0.1);

        // Serpent coiled watching from bottom right
        var serpent = makeSerpent(25, COLORS.deepRed);
        serpent.position.set(15, 8, -10);
        serpent.rotation.y = -Math.PI / 6;
        scene.add(serpent);

        scene.add(new THREE.AmbientLight(0x8B0000, 0.3));
        var keyLight = new THREE.DirectionalLight(0x8B0000, 0.8);
        keyLight.position.set(0, 40, 0);
        scene.add(keyLight);

        return {
            scene: scene,
            cameraConfig: { distance: 35, height: 5 },
            animate: function (time) {
                fruitGlow.scale.setScalar(1.2 + Math.sin(time * 0.7) * 0.15);
                fruitGlow.material.opacity = 0.4 + Math.sin(time * 0.5) * 0.1;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.02;
                c.distance = c.baseDistance - Math.sin(t * 0.15) * 4;
                c.phi = Math.PI / 8 + Math.sin(t * 0.1) * 0.03;
                c.targetX = -4 + Math.sin(t * 0.12) * 3;
                c.targetY = 35;
                c.targetZ = -20;
                c.roll = Math.sin(t * 0.4) * 0.12;
            }
        };
    };
})(window);
