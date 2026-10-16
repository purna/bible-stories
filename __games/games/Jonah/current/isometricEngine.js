/**
 * ISOMETRICENGINE.JS
 * Reusable isometric exploration engine. This engine builds worlds dynamically
 * from a tileset and a series of map files.
 * - `data/main_tileset.json` defines the appearance of each tile type.
 * - `data/maps/act*_map.json` defines the grid layout for each scene.
 */

const IsometricEngine = (function () {
    let tileset = null;
    let groundContainer = new THREE.Group(); // For instanced ground meshes
    let occlusionContainer = new THREE.Group(); // For individual occluding meshes
    let currentScene = null;
    let camera, sceneObj, renderer, playerMesh;
    let playerGridPos = { r: 0, c: 0 };
    let cameraOffset = new THREE.Vector3();
    let hotspotMeshes = [];
    let keysDown = {};
    let triggeredHotspots = new Set();
    let currentActId = null;
    let inputEnabled = false;

    async function init(containerEl) {
        const res = await fetch(CONFIG.paths.tileset);
        tileset = await res.json();

        setupRenderer(containerEl);
        setupCamera();
        setupInput();
        animate();
    }

    function setupRenderer(containerEl) {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
        containerEl.appendChild(renderer.domElement);

        if (typeof PostProduction !== 'undefined') {
            // sceneObj/camera not ready yet — PostProduction.init() is called
            // again inside loadScene() once both exist.
        }

        window.addEventListener('resize', () => {
            const w = containerEl.clientWidth, h = containerEl.clientHeight;
            renderer.setSize(w, h);
            if (camera) {
                const aspect = w / h;
                const s = CONFIG.isometric.camera.frustumSize;
                camera.left = -s * aspect / 2;
                camera.right = s * aspect / 2;
                camera.top = s / 2;
                camera.bottom = -s / 2;
                camera.updateProjectionMatrix();
            }
            if (typeof PostProduction !== 'undefined') PostProduction.onResize(w, h);
        });
    }

    function setupCamera() {
        const aspect = renderer.domElement.width / renderer.domElement.height;
        const s = CONFIG.isometric.camera.frustumSize;
        camera = new THREE.OrthographicCamera(-s * aspect / 2, s * aspect / 2, s / 2, -s / 2, 0.1, 1000);

        // True isometric angle: rotate around Y, then tilt down.
        const rot = THREE.MathUtils.degToRad(CONFIG.isometric.camera.rotationDeg);
        const tilt = THREE.MathUtils.degToRad(CONFIG.isometric.camera.angleDeg);
        const dist = 20;
        camera.position.set(
            dist * Math.sin(rot) * Math.cos(tilt),
            dist * Math.sin(tilt),
            dist * Math.cos(rot) * Math.cos(tilt)
        );
        camera.lookAt(0, 0, 0);
        cameraOffset.copy(camera.position);
    }

    function setupInput() {
        window.addEventListener('keydown', (e) => { if (!inputEnabled || (window.StoryRuntime && StoryRuntime.isInteractiveTarget(e.target))) return; keysDown[e.key.toLowerCase()] = true; });
        window.addEventListener('keyup', (e) => { if (!inputEnabled) return; keysDown[e.key.toLowerCase()] = false; });
    }

    async function loadScene(sceneId) {
        const loaderEl = document.getElementById('iso-loader');
        if (loaderEl) loaderEl.classList.remove('hidden');

        sceneObj = new THREE.Scene(); // Create a fresh scene
        sceneObj.add(groundContainer);
        sceneObj.add(occlusionContainer);
        hotspotMeshes = [];
        triggeredHotspots.clear();

        // Extract act ID from sceneId (e.g., "act1" from "act1_ship")
        const actId = sceneId.split('_')[0];
        currentActId = actId;

        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        sceneObj.add(light);

        // The sceneId from storyEngine is like "act1_ship". We need "act1_ship_map".
        const mapFileName = `${sceneId}_map`;
        const mapPath = `${CONFIG.paths.maps}${mapFileName}.json`;

        try {
            const res = await fetch(mapPath);
            if (!res.ok) throw new Error(`Map not found: ${mapPath}`);
            const mapData = await res.json();
            currentScene = mapData; // Store map data as the current scene context
            buildWorldFromMap(mapData);

            // TODO: Hotspots and player spawn need to be defined in map data
            spawnPlayer();
            spawnHotspots();
            emitProgress();

            if (typeof PostProduction !== 'undefined' && typeof StoryEngine !== 'undefined') {
                PostProduction.init(renderer, sceneObj, camera);
                // The palette is now on the storyEngine's scene, not the iso scene
                const storyScene = StoryEngine.getCurrentScene();
                PostProduction.applyPaletteProfile(storyScene.palette);
            }
        } catch (err) {
            console.error(`Failed to load or build scene: ${sceneId}`, err);
            if (loaderEl) loaderEl.innerText = 'Error loading world.';
            // Clear containers on failure
            while (groundContainer.children.length) {
                groundContainer.remove(groundContainer.children[0]);
            }
            while (occlusionContainer.children.length) {
                occlusionContainer.remove(occlusionContainer.children[0]);
            }
            currentScene = null;
            window.dispatchEvent(new CustomEvent('isometric:error', { detail: { sceneId, message: err.message } }));
            return false;
        } finally {
            if (loaderEl && !loaderEl.innerText.includes('Error')) loaderEl.classList.add('hidden');
        }
        return true;
    }

    function buildWorldFromMap(mapData) {
        // Clear previous world containers
        while (groundContainer.children.length) {
            groundContainer.remove(groundContainer.children[0]);
        }
        while (occlusionContainer.children.length) {
            occlusionContainer.remove(occlusionContainer.children[0]);
        }

        const tileGeo = new THREE.BoxGeometry(tileset.tile_size.width, 1, tileset.tile_size.depth);
        const dummy = new THREE.Object3D(); // Dummy object for matrix updates

        // Group ground tiles by material for instancing
        const groundTilesByMaterial = {};

        for (let r = 0; r < mapData.size.height; r++) {
            for (let c = 0; c < mapData.size.width; c++) {
                const tileId = mapData.tiles[r][c];
                if (tileId === 0) continue; // Skip empty tiles

                const tileDef = tileset.tile_definitions[tileId];
                if (!tileDef) continue;

                const x = (c - mapData.size.width / 2) * tileset.tile_size.width;
                const z = (r - mapData.size.height / 2) * tileset.tile_size.depth;
                const y = tileDef.height;

                if (tileDef.isOccluding) {
                    // Create individual mesh for sorting
                    const material = createMaterialFromDefinition(tileDef.material);
                    const mesh = new THREE.Mesh(tileGeo, material);
                    mesh.position.set(x, y, z);
                    mesh.userData.gridPos = { r, c };
                    occlusionContainer.add(mesh);
                } else {
                    // Group for instancing
                    if (!groundTilesByMaterial[tileId]) {
                        groundTilesByMaterial[tileId] = [];
                    }
                    groundTilesByMaterial[tileId].push({ x, y, z });
                }
            }
        }

        // Create an InstancedMesh for each ground tile type
        for (const tileId in groundTilesByMaterial) {
            const tileDef = tileset.tile_definitions[tileId];
            const instances = groundTilesByMaterial[tileId];
            const material = createMaterialFromDefinition(tileDef.material);
            const mesh = new THREE.InstancedMesh(tileGeo, material, instances.length);

            for (let i = 0; i < instances.length; i++) {
                const { x, y, z } = instances[i];
                dummy.position.set(x, y, z);
                dummy.updateMatrix();
                mesh.setMatrixAt(i, dummy.matrix);
            }
            groundContainer.add(mesh);
        }

        // Register the city tile meshes with the Act3 repentance wave so the
        // visible sermon-square region can shift toward sackcloth-grey when
        // each beat resolves.
        if (typeof window.Act3Beats !== 'undefined' && currentActId === 'act3') {
            const blocks = Array.from(groundContainer.children).filter(child => child.isMesh);
            window.Act3Beats.setCityBlocks(blocks);
        }
    }

    function spawnPlayer() {
        if (!currentScene.spawn) return; // No spawn point defined

        // A deliberately chunky, ink-outlined Jonah silhouette that reads like
        // the comic even at isometric scale.
        playerMesh = new THREE.Group();
        const robeMat = new THREE.MeshToonMaterial({ color: 0xe9b63f });
        const skinMat = new THREE.MeshToonMaterial({ color: 0xd89562 });
        const hairMat = new THREE.MeshToonMaterial({ color: 0x251b22 });
        const inkMat = new THREE.MeshBasicMaterial({ color: 0x17131f, side: THREE.BackSide });
        const addInked = (geometry, material, y, scale = 1) => {
            const part = new THREE.Mesh(geometry, material);
            part.position.y = y;
            const outline = new THREE.Mesh(geometry, inkMat);
            outline.scale.multiplyScalar(1.12);
            part.add(outline);
            part.scale.multiplyScalar(scale);
            playerMesh.add(part);
            return part;
        };
        addInked(new THREE.ConeGeometry(0.38, 0.9, 8), robeMat, 0.45);
        addInked(new THREE.SphereGeometry(0.25, 12, 10), skinMat, 1.03);
        const hair = addInked(new THREE.SphereGeometry(0.265, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), hairMat, 1.11);
        hair.rotation.x = -0.12;
        const beard = addInked(new THREE.ConeGeometry(0.19, 0.34, 8), hairMat, 0.88);
        beard.rotation.x = Math.PI;
        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.18, 6), skinMat);
        nose.position.set(0, 1.03, 0.24);
        nose.rotation.x = Math.PI / 2;
        playerMesh.add(nose);

        const { x, y, z } = currentScene.spawn; // Assumes spawn is in world coords
        playerMesh.position.set(x, y, z);
        playerMesh.renderOrder = 1; // Ensure player is part of the sorting context
        sceneObj.add(playerMesh);
    }

    function spawnHotspots() {
        (currentScene.hotspots || []).forEach(h => {
            const prop = hotspotAppearance(h.id);
            const geo = prop.geometry;
            const mat = new THREE.MeshToonMaterial({ color: prop.color, emissive: prop.color, emissiveIntensity: 0.16 });
            const mesh = new THREE.Mesh(geo, mat);
            const outline = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x17131f, side: THREE.BackSide }));
            outline.scale.multiplyScalar(1.14);
            mesh.add(outline);
            mesh.position.set(h.position.x, h.position.y + 0.5, h.position.z);
            mesh.userData.hotspot = h;
            mesh.userData.triggered = false;
            mesh.userData.pending = false;
            mesh.userData.baseY = h.position.y + 0.5;
            sceneObj.add(mesh);
            hotspotMeshes.push(mesh);
        });
    }

    function hotspotAppearance(id) {
        const appearances = {
            cargo_pile: { geometry: new THREE.BoxGeometry(.65, .55, .65), color: 0x9a6337 },
            lots_barrel: { geometry: new THREE.CylinderGeometry(.32, .38, .65, 10), color: 0xd99a42 },
            prayer_alcove: { geometry: new THREE.OctahedronGeometry(.38), color: 0x7be0d2 },
            city_gates: { geometry: new THREE.BoxGeometry(.75, .9, .28), color: 0xd48842 },
            market_row: { geometry: new THREE.CylinderGeometry(.4, .42, .55, 12), color: 0xc66a2a },
            noble_house: { geometry: new THREE.ConeGeometry(.45, .95, 4), color: 0xa95626 },
            sermon_square: { geometry: new THREE.ConeGeometry(.42, .85, 8), color: 0xf1c44e },
            kings_palace: { geometry: new THREE.BoxGeometry(.85, 1.05, .85), color: 0x8e4d18 },
            the_plant: { geometry: new THREE.SphereGeometry(.42, 10, 8), color: 0x63b45d },
            gods_question: { geometry: new THREE.TorusGeometry(.32, .11, 8, 16), color: 0xffd34e }
        };
        return appearances[id] || { geometry: new THREE.OctahedronGeometry(.32), color: 0x5dade2 };
    }

    function createMaterialFromDefinition(matDef) {
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(matDef.baseColor || '#777777'),
            roughness: 0.6,
            metalness: 0.1,
        });

        // This is the magic part: we patch the material's shader
        // just like in the isometric-cube8.html tool.
        const shaderLogic = document.getElementById('tile-shader-logic');
        if (shaderLogic) material.onBeforeCompile = (shader) => {
            shader.uniforms.baseColor = { value: new THREE.Color(matDef.baseColor) };
            shader.uniforms.colorA = { value: new THREE.Color(matDef.colorA) };
            shader.uniforms.colorB = { value: new THREE.Color(matDef.colorB) };
            shader.uniforms.splitY = { value: matDef.splitY };
            shader.uniforms.materialMode = { value: matDef.materialMode };
            shader.uniforms.tMode = { value: matDef.tMode };
            shader.uniforms.tInkMode = { value: matDef.tInkMode };
            shader.uniforms.tInkColor = { value: new THREE.Color(matDef.tInkColor) };
            shader.uniforms.tSpace = { value: matDef.tSpace };
            shader.uniforms.tThick = { value: matDef.tThick };
            shader.uniforms.tBright = { value: matDef.tBright };
            shader.uniforms.tAlpha = { value: matDef.tAlpha };
            shader.uniforms.bMode = { value: matDef.bMode };
            shader.uniforms.bInkMode = { value: matDef.bInkMode };
            shader.uniforms.bInkColor = { value: new THREE.Color(matDef.bInkColor) };
            shader.uniforms.bSpace = { value: matDef.bSpace };
            shader.uniforms.bThick = { value: matDef.bThick };
            shader.uniforms.bBright = { value: matDef.bBright };
            shader.uniforms.bAlpha = { value: matDef.bAlpha };

            // Inject vertex shader varyings
            shader.vertexShader = `varying float vLocalY; varying vec2 myUv;\n` + shader.vertexShader.replace(`#include <begin_vertex>`, `#include <begin_vertex>\nvLocalY=position.y;\nmyUv=uv;`);

            // Inject uniform declarations into the fragment shader
            const uniformDeclarations = `
                uniform vec3 baseColor; uniform vec3 colorA; uniform vec3 colorB; uniform float splitY; uniform int materialMode;
                uniform int tMode; uniform int tInkMode; uniform vec3 tInkColor; uniform float tSpace; uniform float tThick; uniform float tBright; uniform float tAlpha;
                uniform int bMode; uniform int bInkMode; uniform vec3 bInkColor; uniform float bSpace; uniform float bThick; uniform float bBright; uniform float bAlpha;
            `;

            // Inject fragment shader logic (simplified from the tool)
            const fs = shaderLogic.textContent;
            shader.fragmentShader = `varying float vLocalY; varying vec2 myUv;\n${uniformDeclarations}` + shader.fragmentShader.replace(`vec4 diffuseColor = vec4( diffuse, opacity );`, fs);
        };

        return material;
    }


    function updateMovement(deltaSeconds) {
        if (!playerMesh || !inputEnabled) return;
        const speed = CONFIG.isometric.movement.speed * deltaSeconds;
        let dx = 0, dz = 0;
        const nextPos = playerMesh.position.clone();

        if (keysDown['w'] || keysDown['arrowup']) dz -= 1;
        if (keysDown['s'] || keysDown['arrowdown']) dz += 1;
        if (keysDown['a'] || keysDown['arrowleft']) dx -= 1;
        if (keysDown['d'] || keysDown['arrowright']) dx += 1;

        if (dx === 0 && dz === 0) return;

        const len = Math.hypot(dx, dz);
        const moveDirection = new THREE.Vector3(dx / len, 0, dz / len);

        // --- Player Rotation ---
        const targetQuaternion = new THREE.Quaternion();
        const lookAtPosition = playerMesh.position.clone().add(moveDirection);
        playerMesh.lookAt(lookAtPosition);

        nextPos.x += (dx / len) * speed;
        nextPos.z += (dz / len) * speed;

        // --- Collision Detection ---
        const halfW = currentScene.size.width / 2;
        const halfH = currentScene.size.height / 2;
        const targetC = Math.floor(nextPos.x + halfW);
        const targetR = Math.floor(nextPos.z + halfH);

        if (targetR < 0 || targetC < 0 || targetR >= currentScene.size.height || targetC >= currentScene.size.width) return;

        playerGridPos = { r: targetR, c: targetC }; // Update player's grid position

        if (currentScene.colliders && currentScene.colliders[targetR] && currentScene.colliders[targetR][targetC] !== undefined) {
            const colliderType = currentScene.colliders[targetR][targetC];
            if (colliderType === 1) { // Full tile collider
                return; // Block movement
            }
            // TODO: Implement edge-based colliders (types 2-5)
        }

        playerMesh.position.copy(nextPos);
        checkHotspots();
    }

    function updateRenderOrder() {
        if (!playerMesh || !inputEnabled) return;

        // The player's "depth" is determined by its grid row.
        // Higher row number means closer to the camera.
        const playerDepth = playerGridPos.r;

        // Set render order for occluding objects based on their row.
        // Objects in the same row or behind the player are drawn first (lower renderOrder).
        // Objects in front of the player are drawn last (higher renderOrder).
        occlusionContainer.children.forEach(child => {
            const childDepth = child.userData.gridPos.r;
            child.renderOrder = childDepth > playerDepth ? 2 : 0;
        });

        checkHotspots();
    }

    function updateCamera(deltaSeconds) {
        if (!playerMesh || !camera) return;

        // Calculate the target position for the camera
        const targetPosition = playerMesh.position.clone().add(cameraOffset);

        // Smoothly interpolate the camera's position (LERP)
        camera.position.lerp(targetPosition, CONFIG.isometric.camera.followSpeed * deltaSeconds);
    }

    function checkHotspots() {
        if (!playerMesh) return;
        hotspotMeshes.forEach(mesh => {
            const h = mesh.userData.hotspot;
            if (mesh.userData.triggered || mesh.userData.pending) return;

            const dist = playerMesh.position.distanceTo(mesh.position);
            if (dist <= CONFIG.isometric.movement.hotspotRadius) {
                triggerHotspot(mesh, h);
            }
        });
    }

    function triggerHotspot(mesh, hotspot) {
        if (hotspot.choiceHotspot) {
            mesh.userData.pending = true;
            renderChoicePrompt(mesh, hotspot);
            return;
        }

        if (hotspot.requiresHold) {
            mesh.userData.pending = true;
            window.dispatchEvent(new CustomEvent('isometric:holdPrompt', {
                detail: {
                    hotspotId: hotspot.id,
                    durationMs: CONFIG.beats.act2.prayerFullHoldMs,
                    onComplete: duration => completeHotspot(mesh, hotspot, [duration])
                }
            }));
            return;
        }

        completeHotspot(mesh, hotspot, hotspot.beatArgs || []);
    }

    function completeHotspot(mesh, hotspot, args) {
        mesh.userData.pending = false;
        mesh.userData.triggered = true;
        mesh.visible = false;
        triggeredHotspots.add(hotspot.id);
        invokeBeat(hotspot, args);
        window.dispatchEvent(new CustomEvent('isometric:moment', { detail: { id: hotspot.id, label: hotspot.label || 'Story moment' } }));
        emitProgress();
        checkActCompletion();
    }

    function emitProgress() {
        if (!currentScene) return;
        const required = (currentScene.hotspots || []).filter(h => h.triggerOnce);
        const completed = required.filter(h => triggeredHotspots.has(h.id)).length;
        window.dispatchEvent(new CustomEvent('isometric:progress', { detail: { completed, total: required.length } }));
    }

    function checkActCompletion() {
        if (!currentScene || !currentScene.hotspots) return;

        const totalRequired = currentScene.hotspots.filter(h => h.triggerOnce).length;
        const triggeredCount = currentScene.hotspots.filter(h => h.triggerOnce && triggeredHotspots.has(h.id)).length;

        if (triggeredCount >= totalRequired && totalRequired > 0) {
            window.dispatchEvent(new CustomEvent('isometric:actComplete', {
                detail: {
                    actId: currentActId,
                    sceneId: currentScene.id
                }
            }));
        }
    }

    function invokeBeat(hotspot, extraArgs) {
        const module = window[hotspot.beatModule];
        if (module && typeof module[hotspot.beatFunction] === 'function') {
            module[hotspot.beatFunction](...extraArgs);
        } else {
            console.warn(`Beat not found: ${hotspot.beatModule}.${hotspot.beatFunction}`);
        }
    }

    function renderChoicePrompt(mesh, hotspot) {
        // Hook point for UI: dispatch a custom event so storyEngine/UI code
        // can render the actual choice buttons without this engine knowing
        // about DOM structure.
        window.dispatchEvent(new CustomEvent('isometric:choice', {
            detail: {
                hotspotId: hotspot.id,
                choices: hotspot.choices,
                onChoose: (choiceIndex) => completeHotspot(mesh, hotspot, [choiceIndex])
            }
        }));
    }

    let lastTime = performance.now();
    function animate() {
        requestAnimationFrame(animate);
        const now = performance.now();
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        if (!inputEnabled) return;

        updateMovement(delta);
        hotspotMeshes.forEach((mesh, index) => {
            if (!mesh.userData.triggered) mesh.position.y = mesh.userData.baseY + Math.sin(now * 0.002 + index) * 0.13;
        });
        updateRenderOrder();
        updateCamera(delta);

        if (typeof PostProduction !== 'undefined' && currentScene) {
            PostProduction.render();
        } else if (sceneObj && camera) {
            renderer.render(sceneObj, camera);
        }
    }

    function goToScene(sceneId) {
        return loadScene(sceneId);
    }

    function setEnabled(value) {
        inputEnabled = Boolean(value);
        if (!inputEnabled) keysDown = {};
    }

    function setInput(key, down) {
        keysDown[key.toLowerCase()] = Boolean(down);
    }

    return { init, goToScene, setEnabled, setInput, getCurrentScene: () => currentScene };
})();
