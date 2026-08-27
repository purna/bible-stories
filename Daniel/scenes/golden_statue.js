(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* Golden Statue on Dura — Nebuchadnezzar's colossal golden image.
     * The statue dominates the plain, with thousands of people below.
     * Camera orbits slowly, showing the absurd scale of the king's pride.
     */
    global.SCENE_FACTORIES.golden_statue = function () {
        var scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x1a0e06, 0.006);

        /* Desert ground plane */
        var groundGeo = new THREE.PlaneGeometry(200, 200);
        var ground = new THREE.Mesh(groundGeo, COLORS.sand);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -12;
        ground.receiveShadow = true;
        scene.add(ground);

        /* Statue platform (raised square base) */
        var platform = makeBox(30, 3, 30, COLORS.stone);
        platform.group.position.y = -10;
        scene.add(platform.group);

        /* Colossal golden statue — towering humanoid form */
        var statue = new THREE.Group();

        // Feet/base
        var feet = makeBox(14, 2, 8, COLORS.clay);
        feet.group.position.y = -6;
        statue.add(feet.group);

        // Legs
        var legL = makeBox(4, 12, 6, COLORS.clay);
        legL.group.position.set(-4, 0, 0);
        statue.add(legL.group);
        var legR = makeBox(4, 12, 6, COLORS.clay);
        legR.group.position.set(4, 0, 0);
        statue.add(legR.group);

        // Torso
        var torso = addToonPart(statue, new THREE.BoxGeometry(16, 14, 8), COLORS.gold);
        torso.position.y = 10;
        torso.castShadow = true;

        // Arms outstretched
        var armL = addToonPart(statue, new THREE.BoxGeometry(4, 14, 4), COLORS.gold);
        armL.position.set(-12, 12, 0);
        var armR = addToonPart(statue, new THREE.BoxGeometry(4, 14, 4), COLORS.gold);
        armR.position.set(12, 12, 0);

        // Head
        var head = addToonPart(statue, new THREE.BoxGeometry(8, 8, 8), COLORS.gold);
        head.position.y = 22;

        // Crown/headdress
        var crown = addToonPart(statue, new THREE.BoxGeometry(10, 3, 10), COLORS.gold);
        crown.position.y = 27;

        statue.position.y = -4;
        scene.add(statue);

        /* Crowd of people (small boxes below) */
        var crowdGroup = new THREE.Group();
        for (var i = 0; i < 60; i++) {
            var angle = Math.random() * Math.PI * 2;
            var radius = 20 + Math.random() * 50;
            var person = makeBox(1.5 + Math.random(), 3 + Math.random() * 2, 1.5 + Math.random(), COLORS.robe);
            person.group.position.set(
                Math.cos(angle) * radius,
                -11 + (1.5 + Math.random() * 2) / 2,
                Math.sin(angle) * radius
            );
            person.group.rotation.y = Math.random() * Math.PI * 2;
            crowdGroup.add(person.group);
        }
        scene.add(crowdGroup);

        /* Harsh midday sun */
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        var sun = new THREE.DirectionalLight(0xffffff, 1.2);
        sun.position.set(50, 80, 30);
        sun.castShadow = true;
        scene.add(sun);

        /* Gold emissive glow on statue */
        var glowMat = new THREE.MeshBasicMaterial({
            color: COLORS.gold, transparent: true, opacity: 0.08
        });
        var glowPlane = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), glowMat);
        glowPlane.rotation.x = -Math.PI / 2;
        glowPlane.position.y = -9;
        scene.add(glowPlane);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 15 },
            animate: function (time) {
                var t = time * 0.001;
                glowPlane.material.opacity = 0.06 + Math.sin(t * 0.5) * 0.02;
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.04;
                c.distance = c.baseDistance;
                c.phi = Math.PI / 3;
                c.targetX = 0;
                c.targetY = 5;
                c.targetZ = 0;
            }
        };
    };
})(window);
