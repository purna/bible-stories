(function (global) {
    "use strict";
    var THREE = global.THREE;
    if (!THREE) { return; }

    // creation_light — "LET THERE BE LIGHT!"
    // Divine command scene: light burst dominates, earth/moon in silhouette.
    // Camera slowly pushes in on the light source with expanding waves.
    // Includes a particle explosion of yellows/whites triggered on scene load
    // and re-triggerable via the BOOM! button.
    global.SCENE_FACTORIES.creation_light = function () {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(COLORS.night);
        makeFog(scene, 0x000000, 0.003);

        // Stars — far
        makeStars(scene, 200, 180, 0xffffff, 0.8);
        makeStars(scene, 80, 160, COLORS.gold, 0.9);

        // Earth — silhouette, now visible as light touches it
        var earthGeo = new THREE.SphereGeometry(18, 32, 16);
        var earth = new THREE.Mesh(earthGeo, toonMat(0x1a251a));
        earth.position.set(-50, -20, 0);
        earth.castShadow = earth.receiveShadow = true;
        scene.add(earth);
        addOutline(earth, 0.05);

        // Moon — distant witness
        var moonGeo = new THREE.SphereGeometry(8, 16, 12);
        var moon = new THREE.Mesh(moonGeo, toonMat(0xcccccc));
        moon.position.set(60, 30, -40);
        scene.add(moon);
        addOutline(moon, 0.04);

        // Central light burst — "Let there be light"
        var light = makeLightSphere(0xffffff, 2.5, 70);
        light.position.set(0, 10, 0);
        scene.add(light);

        // ===== EXPLOSION OF LIGHT — yellows & whites =====
        var EXPLOSION_COLORS = [0xffffff, 0xFFFFE0, 0xFFE680, 0xFFD84D, 0xFFF2C5, 0xFFECB3];
        var explosionCount = 450;

        // Store initial positions (all at the light origin)
        var initPos = new Float32Array(explosionCount * 3);
        // Store per-particle randomized velocities (set on each burst)
        var initVel = new Float32Array(explosionCount * 3);
        // Per-particle color (set once, warm yellows & whites)
        var colorArr = new Float32Array(explosionCount * 3);

        var tempColor = new THREE.Color();
        for (var i = 0; i < explosionCount; i++) {
            var i3 = i * 3;
            // All particles origin at the light sphere
            initPos[i3] = 0;
            initPos[i3 + 1] = 10;
            initPos[i3 + 2] = 0;

            // Random warm yellow / white color
            tempColor.set(EXPLOSION_COLORS[Math.floor(Math.random() * EXPLOSION_COLORS.length)]);
            colorArr[i3] = tempColor.r;
            colorArr[i3 + 1] = tempColor.g;
            colorArr[i3 + 2] = tempColor.b;

            // Will be assigned by resetVelocities()
            initVel[i3] = 0;
            initVel[i3 + 1] = 0;
            initVel[i3 + 2] = 0;
        }

        // Live positions array (updated every frame)
        var positions = new Float32Array(explosionCount * 3);

        var explosionGeo = new THREE.BufferGeometry();
        explosionGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        explosionGeo.setAttribute('color', new THREE.BufferAttribute(colorArr, 3));

        var explosionMat = new THREE.PointsMaterial({
            size: 1.4,
            vertexColors: true,
            transparent: true,
            opacity: 0.95,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        var explosion = new THREE.Points(explosionGeo, explosionMat);
        explosion.visible = false;
        scene.add(explosion);

        // Explosion state
        var explosionStart = null;        // scene-time when current burst began
        var explosionDuration = 3.5;       // seconds
        var explosionGravity = -4.0;      // world units / s²
        var sceneStartTime = null;          // scene-time when scene first animated
        var explosionActive = false;

        // Generate fresh random velocities for a burst
        function resetVelocities() {
            for (var i = 0; i < explosionCount; i++) {
                var i3 = i * 3;
                var speed = 4 + Math.random() * 16;
                var angle = Math.random() * Math.PI * 2;
                var elevation = Math.acos(Math.random() * 0.6 + 0.2); // bias upward
                initVel[i3] = Math.cos(angle) * Math.sin(elevation) * speed;
                initVel[i3 + 1] = Math.cos(elevation) * speed * (0.4 + Math.random() * 0.6);
                initVel[i3 + 2] = Math.sin(angle) * Math.sin(elevation) * speed;

                // Reset position to centre
                positions[i3] = 0;
                positions[i3 + 1] = 10;
                positions[i3 + 2] = 0;
            }
            explosionGeo.attributes.position.needsUpdate = true;
        }

        function triggerExplosion() {
            if (explosionActive) return;
            resetVelocities();
            explosionStart = performance.now() * 0.001;
            explosionActive = true;
            explosion.visible = true;
        }

        // Expanding wave rings
        var waveGroup = new THREE.Group();
        for (var w = 0; w < 6; w++) {
            var ringGeo = new THREE.RingGeometry(10 + w * 8, 12 + w * 8, 32);
            var ringMat = new THREE.MeshBasicMaterial({
                color: COLORS.gold,
                transparent: true,
                opacity: 0.15 - w * 0.02,
                side: THREE.DoubleSide
            });
            var ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 3;
            ring.position.y = 10;
            waveGroup.add(ring);
        }
        scene.add(waveGroup);

        // Light rays emanating outward
        var rayMat = new THREE.MeshBasicMaterial({ color: COLORS.gold, transparent: true, opacity: 0.12 });
        for (var i = 0; i < 12; i++) {
            var angle = (i / 12) * Math.PI * 2;
            var rayGeo = new THREE.PlaneGeometry(2, 80);
            rayGeo.rotateX(Math.PI / 2);
            var ray = new THREE.Mesh(rayGeo, rayMat);
            ray.position.set(Math.cos(angle) * 14, 10, Math.sin(angle) * 14);
            ray.rotation.y = angle;
            scene.add(ray);
        }

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        var sun = new THREE.DirectionalLight(0xffffff, 1);
        sun.position.set(0, 30, 0);
        sun.castShadow = true;
        sun.shadow.camera.left = -80;
        sun.shadow.camera.right = 80;
        sun.shadow.camera.top = 80;
        sun.shadow.camera.bottom = -80;
        scene.add(sun);

        return {
            scene: scene,
            cameraConfig: { distance: 70, height: 10 },
            animate: function (time) {
                // Track scene load time for auto-trigger
                if (sceneStartTime === null) sceneStartTime = time;

                // Auto-trigger explosion 1.0 s after the scene becomes active
                // (text/SFX appear at ~0.8 s, so the burst fires right after)
                if (!explosionActive && time - sceneStartTime > 1.0) {
                    triggerExplosion();
                }

                // Particle explosion physics (analytical — no accumulation)
                if (explosionActive && explosionStart !== null) {
                    var t = (performance.now() * 0.001) - explosionStart;
                    var elapsed = t;

                    if (elapsed < explosionDuration) {
                        // Update particle positions: p = p0 + v*t + 0.5*g*t²
                        for (var i = 0; i < explosionCount; i++) {
                            var i3 = i * 3;
                            positions[i3] = initPos[i3] + initVel[i3] * elapsed;
                            positions[i3 + 1] = initPos[i3 + 1] + initVel[i3 + 1] * elapsed + 0.5 * explosionGravity * elapsed * elapsed;
                            positions[i3 + 2] = initPos[i3 + 2] + initVel[i3 + 2] * elapsed;
                        }
                        explosionGeo.attributes.position.needsUpdate = true;

                        // Fade particles out towards the end
                        var life = elapsed / explosionDuration;
                        explosionMat.opacity = 0.95 * (life > 0.65 ? (1 - (life - 0.65) / 0.35) : 1);

                        // Intense central flash during the initial burst
                        var flashScale = 1 + Math.sin(time * 0.4) * 0.15;
                        if (elapsed < 0.4) {
                            flashScale += (1 - elapsed / 0.4) * 4;
                        }
                        light.scale.setScalar(flashScale);
                    } else {
                        explosionActive = false;
                        explosion.visible = false;
                    }
                } else {
                    // Ambient light pulse when no explosion is running
                    light.scale.setScalar(1 + Math.sin(time * 0.4) * 0.15);
                }

                // Expanding waves
                waveGroup.children.forEach(function (ring, idx) {
                    ring.scale.setScalar(1 + Math.sin(time * 0.3 + idx * 0.5) * 0.1);
                    ring.material.opacity = 0.15 - idx * 0.02 + Math.sin(time * 0.5 + idx) * 0.03;
                });
            },
            triggerExplosion: triggerExplosion,
            cameraAnimation: function (t) {
                var c = window._cinema;
                // Slow push-in on the light burst
                c.theta = c.baseTheta + t * 0.03;
                c.distance = c.baseDistance - Math.sin(t * 0.15) * 8;
                c.phi = Math.PI / 4 + Math.sin(t * 0.2) * 0.1;
                c.targetX = Math.sin(t * 0.4) * 2;
                c.targetY = 10;
                c.targetZ = Math.cos(t * 0.4) * 2;
                c.roll = Math.sin(t * 0.3) * 0.05;
            }
        };
    };
})(window);
