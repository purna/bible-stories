(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    global.SCENE_FACTORIES.garden_river = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.sky);

        // Starfield
        makeStars(scene, 300, 400, 0xffffff, 1);

        // ── RIVER via CatmullRomCurve3 + TubeGeometry ─────────────
        // Spline control points create a natural S-curve river path
        var riverPoints = [
            new THREE.Vector3(-120, 2, -50),
            new THREE.Vector3(-60, 3, 10),
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(40, 4, -15),
            new THREE.Vector3(80, 2, 20),
            new THREE.Vector3(120, 5, -10),
            new THREE.Vector3(160, 3, 30),
            new THREE.Vector3(200, 4, -20),
        ];
        var riverCurve = new THREE.CatmullRomCurve3(riverPoints);
        riverCurve.curveClosed = false;

        // Main river tube
        var riverGeo = new THREE.TubeGeometry(riverCurve, 80, 12, 16, false);
        var riverMat = toonMat({ color: COLORS.water });
        var river = new THREE.Mesh(riverGeo, riverMat);
        river.receiveShadow = true;
        scene.add(river);
        addOutline(river, 0.03);

        // Animated glow particles flowing along the spline
        var particleCount = 12;
        var particles = new THREE.Group();
        var particleGeo = new THREE.SphereGeometry(1.5, 8, 8);
        for (var i = 0; i < particleCount; i++) {
            var p = new THREE.Mesh(particleGeo, MAT.emissiveTeal);
            particles.add(p);
        }
        scene.add(particles);

        // Light spheres at key points along the river
        var light1 = makeLightSphere(0xFFD84D, 0.8, 100);
        light1.scale.set(2, 2, 2);
        scene.add(light1);
        var light2 = makeLightSphere(0x4ECDC4, 0.6, 80);
        light2.scale.set(1.5, 1.5, 1.5);
        scene.add(light2);

        // Trees placed along both banks
        var treeCount = 6;
        for (var t = 0; t < treeCount; t++) {
            var tVal = t / (treeCount - 1);
            var pos = riverCurve.getPointAt(tVal);
            var tangent = new THREE.Vector3();
            riverCurve.getTangentAt(tVal, tangent);
            var normal = new THREE.Vector3(0, 1, 0);
            var binormal = new THREE.Vector3();
            binormal.crossVectors(tangent, normal).normalize();

            // Left bank
            var leftOffset = new THREE.Vector3();
            leftOffset.crossVectors(binormal, tangent).normalize();
            leftOffset.multiplyScalar(35);
            var rightOffset = leftOffset.clone().negate();

            var treeL = makeTree(30, 4, 18, MAT.leaf, MAT.bark);
            var pL = pos.clone().add(leftOffset);
            treeL.position.copy(pL);
            treeL.position.y = 0;
            scene.add(treeL);

            var treeR = makeTree(25, 4, 15, MAT.leaf, MAT.bark);
            var pR = pos.clone().add(rightOffset);
            treeR.position.copy(pR);
            treeR.position.y = 0;
            scene.add(treeR);
        }

        // Tree of Life at the river's source (end of spline)
        var treeOfLife = makeTreeWithFruit(COLORS.gold, COLORS.leaf);
        var sourcePos = riverCurve.getPointAt(0);
        treeOfLife.position.copy(sourcePos);
        treeOfLife.position.x -= 50;
        treeOfLife.position.z -= 30;
        scene.add(treeOfLife);

        // Ground
        scene.add(makeGround(500, COLORS.earth, -1));

        // Ambient + directional light
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 0.9);
        sun.position.set(40, 80, 20);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 120, height: 30 },
            animate: function (time) {
                // Flow particles along the spline
                for (var i = 0; i < particles.children.length; i++) {
                    var pct = (time * 0.05 + i * 0.08) % 1;
                    var pos = riverCurve.getPointAt(pct);
                    particles.children[i].position.copy(pos);
                    particles.children[i].position.y += Math.sin(time + i) * 0.5;
                }

                // Lights drift along the river
                var t1 = (time * 0.03) % 1;
                var p1 = riverCurve.getPointAt(t1);
                light1.position.copy(p1);
                light1.position.y += 5;

                var t2 = (time * 0.02 + 0.5) % 1;
                var p2 = riverCurve.getPointAt(t2);
                light2.position.copy(p2);
                light2.position.y += 3;

                // Tree of Life fruit glow
                treeOfLife.traverse(function (child) {
                    if (child.userData.isLight) {
                        child.material.opacity = 0.4 + Math.sin(time * 2) * 0.1;
                    }
                });
            },
            cameraAnimation: function (t) {
                var c = window._cinema;
                c.theta = c.baseTheta + t * 0.08;
                c.phi = Math.PI / 3 + Math.sin(t * 0.15) * 0.15;
                c.roll = Math.sin(t * 0.2) * 0.05;
                c.targetX = 50 + Math.sin(t * 0.3) * 20;
                c.targetZ = Math.cos(t * 0.3) * 20;
                c.targetY = 5;
            }
        };
    };
})(window);
