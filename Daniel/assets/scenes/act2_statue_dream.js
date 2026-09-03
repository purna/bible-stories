(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    /* The Statue Dream — Nebuchadnezzar's vision of the great statue.
     * Four materials of empire, topped by God's eternal kingdom.
     * The statue stands on a raised platform under a starlit dream sky.
     * Camera orbits slowly, giving a cinematic pull-back at the end.
     */
    global.SCENE_FACTORIES.statue_dream = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);
        scene.fog = new THREE.FogExp2(COLORS.sky, 0.015);

        /* Stars in the dream sky */
        makeStars(scene, 300, 400, 0xffffff, 0.8);
        makeStars(scene, 50, 400, COLORS.gold, 1.2);
        makeStars(scene, 30, 400, COLORS.purple, 0.9);

        /* Platform base */
        var platform = makeBox(20, 2, 14, COLORS.stone);
        platform.position.y = -8;
        scene.add(platform.group || platform);

        /* Statue body — five sections descending in size */
        var statue = new THREE.Group();
        var sectionH = 18;

        /* Gold head */
        var head = makeBox(5, 5, 5, COLORS.gold);
        head.group.position.y = 0;
        addToonPart(statue, new THREE.BoxGeometry(5, 5, 5), COLORS.gold, true);
        /* Crown */
        addToonPart(statue, new THREE.BoxGeometry(7, 1, 5), COLORS.gold);
        statue.children[statue.children.length - 1].position.y = 3.5;

        /* Silver chest */
        addToonPart(statue, new THREE.BoxGeometry(6, 7, 6), COLORS.silver);
        statue.children[statue.children.length - 1].position.y = -7;

        /* Bronze belly */
        addToonPart(statue, new THREE.BoxGeometry(7, 7, 7), COLORS.bronze);
        statue.children[statue.children.length - 1].position.y = -15;

        /* Iron legs */
        addToonPart(statue, new THREE.BoxGeometry(8, 8, 8), COLORS.iron);
        statue.children[statue.children.length - 1].position.y = -24;

        /* Clay feet */
        addToonPart(statue, new THREE.BoxGeometry(9, 3, 9), COLORS.clay);
        statue.children[statue.children.length - 1].position.y = -32;

        /* Position the statue group */
        statue.position.y = 3;
        scene.add(statue);

        /* Light burst effect above the statue — "God's kingdom" */
        var lightBurst = global.makeLightSphere(0xffffff, 2, 60);
        lightBurst.position.set(0, 15, 0);
        scene.add(lightBurst);

        /* Light rays */
        var rayMat = new THREE.MeshBasicMaterial({ color: COLORS.gold, transparent: true, opacity: 0.15 });
        for (var i = 0; i < 8; i++) {
            var angle = (i / 8) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(2, 40);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 14, 5, Math.sin(angle) * 14);
            ray.rotation.y = angle;
            scene.add(ray);
        }

        /* Lighting */
        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        var sun = new THREE.DirectionalLight(0xffffff, 1.2);
        sun.position.set(50, 100, 50);
        sun.castShadow = true;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 45, height: 8 },
            animate: function (time) {
                var t = time * 0.001;
                /* Slow statue rotation */
                statue.rotation.y = t * 0.1;
                /* Pulsing light burst */
                var pulse = 0.4 + Math.sin(t * 3) * 0.1;
                lightBurst.children[0].intensity = pulse * 2;
                /* Pulsing rays */
                scene.traverse(function (child) {
                    if (child.isMesh && child.material === rayMat) {
                        child.material.opacity = 0.1 + Math.sin(t * 2 + child.id * 0.1) * 0.05;
                    }
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                /* Slow orbit around the statue */
                c.theta = c.baseTheta + t * 0.15;
                /* Gentle camera pull-back for dramatic reveal */
                c.distance = c.baseDistance + Math.sin(t * 0.3) * 5;
                c.phi = Math.PI / 3.5 + Math.sin(t * 0.2) * 0.05;
                c.targetX = 0;
                c.targetY = 3;
                c.targetZ = 0;
            }
        };
    };
})(window);
