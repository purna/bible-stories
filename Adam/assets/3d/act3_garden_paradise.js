// ------------------------------------------------------------
// Pixel 3D — exported scene functions (toon-shaded)
//
// Spline/pixel3d export format: window.initSceneN(group)
// This file shows a garden_paradise scene using the JS export
// format from pixel3d tool. Materials use MeshPhongMaterial in
// the export, but loadJSScene() auto-converts to toon shader.
//
// Usage:
//   window.initScene1(group);       // add scene geometry
//   window.initSceneLights(group);  // add lights
//
// Load via loadJSScene('assets/3d/act3_garden_paradise.js', group, callback)
// ------------------------------------------------------------

window.initScene1 = function(group) {
    // Ground plane (toon shader via loadJSScene converter)
    const groundMat = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const groundGeo = new THREE.PlaneGeometry(500, 500);
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    group.add(ground);

    // Tree of Life — trunk + golden canopy + emissive fruit
    const trunkMat = new THREE.MeshPhongMaterial({ color: 0x5c4033 });
    const trunkGeo = new THREE.CylinderGeometry(4, 6, 50, 12);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(-50, 25, -30);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);

    const canopyMat = new THREE.MeshPhongMaterial({ color: 0x4a7a3a });
    const canopyGeo = new THREE.SphereGeometry(30, 16, 16);
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(-50, 55, -30);
    canopy.castShadow = true;
    canopy.receiveShadow = true;
    group.add(canopy);

    // Tree of Life fruit — emissive gold
    const fruitMat = new THREE.MeshPhongMaterial({ 
        color: 0xFFD84D, 
        emissive: 0xFFD84D, 
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
    });
    const fruitGeo = new THREE.SphereGeometry(5, 8, 8);
    for (var i = 0; i < 8; i++) {
        var fruit = new THREE.Mesh(fruitGeo, fruitMat);
        var angle = (i / 8) * Math.PI * 2;
        fruit.position.set(
            -50 + Math.cos(angle) * 28,
            55 + Math.sin(angle * 1.3) * 8,
            -30 + Math.sin(angle) * 28
        );
        fruit.castShadow = true;
        group.add(fruit);
    }

    // Garden tree — left bank
    const treeMat = new THREE.MeshPhongMaterial({ color: 0x5c4033 });
    const leafMat = new THREE.MeshPhongMaterial({ color: 0x4a7a3a });
    for (var t = 0; t < 3; t++) {
        var tTrunk = new THREE.Mesh(
            new THREE.CylinderGeometry(4, 6, 30, 12), treeMat
        );
        var tLeaf = new THREE.Mesh(
            new THREE.SphereGeometry(18, 16, 16), leafMat
        );
        tTrunk.position.set(-80 + t * 40, 15, 30);
        tLeaf.position.set(-80 + t * 40, 35, 30);
        tTrunk.castShadow = true;
        tLeaf.castShadow = true;
        group.add(tTrunk, tLeaf);
    }

    // Garden tree — right bank
    for (var t2 = 0; t2 < 3; t2++) {
        var rTrunk = new THREE.Mesh(
            new THREE.CylinderGeometry(4, 6, 25, 12), treeMat
        );
        var rLeaf = new THREE.Mesh(
            new THREE.SphereGeometry(16, 16, 16), leafMat
        );
        rTrunk.position.set(60 + t2 * 40, 12, -20);
        rLeaf.position.set(60 + t2 * 40, 32, -20);
        rTrunk.castShadow = true;
        rLeaf.castShadow = true;
        group.add(rTrunk, rLeaf);
    }
};

window.initSceneLights = function(group) {
    // Directional sunlight
    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(40, 80, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    group.add(sun);

    // Ambient fill
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    group.add(ambient);

    // Divine light orb (emissive)
    const divineLight = new THREE.PointLight(0xFFD84D, 1.2, 150);
    divineLight.position.set(0, 40, 0);
    group.add(divineLight);

    // Point light helper (visible in scene)
    const lightSphere = new THREE.Mesh(
        new THREE.SphereGeometry(2, 16, 16),
        new THREE.MeshPhongMaterial({ color: 0xFFD84D, emissive: 0xFFD84D, emissiveIntensity: 0.5 })
    );
    lightSphere.position.copy(divineLight.position);
    lightSphere.castShadow = false;
    lightSphere.receiveShadow = false;
    group.add(lightSphere);
};

window.initAllScenes = function(group) {
    initScene1(group);
    initSceneLights(group);
};
