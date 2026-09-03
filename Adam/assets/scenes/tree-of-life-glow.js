// tree-of-life-glow.js
// A swirling, glowing "life essence" particle effect for the Tree of Life,
// inspired by the foliage-glow trick in https://codepen.io/prisoner849/pen/rNJexaX
// but built to drop straight into a vanilla Three.js r128 project (no ES
// modules, no MeshSurfaceSampler, no postprocessing pipeline required).
//
// Instead of sampling points off a loaded mesh's surface (which needs the
// module-only MeshSurfaceSampler addon), this scatters points on a sphere
// shell around a centre point/radius you choose — which is exactly what
// you need for a canopy-shaped tree like the Tree of Life.
//
// Usage (inside a SCENE_FACTORIES.* function, e.g. garden_eden.js):
//
//   var lifeGlow = makeTreeOfLifeGlow({
//     center: new THREE.Vector3(-10, 40, -20), // match your canopy/fruit position
//     radius: 26,                              // roughly the canopy radius
//     count: 400,                              // particle count (perf knob)
//     colorCore: 0xFFF3C0,                     // hot centre of each mote
//     colorEdge: 0xFFD84D                      // outer glow (matches MAT.gold)
//   });
//   scene.add(lifeGlow);
//
// Then in your scene's animate(time) callback, keep the shader's clock fed:
//
//   animate: function (time) {
//     lifeGlow.material.uniforms.time.value = time;
//     // ...your existing animate code (fruit pulse, dust particles, etc.)
//   }

function makeTreeOfLifeGlow(opts) {
    opts = opts || {};
    var center = opts.center || new THREE.Vector3(0, 0, 0);
    var radius = opts.radius || 30;
    var count = opts.count || 400;
    var colorCore = new THREE.Color(opts.colorCore !== undefined ? opts.colorCore : 0xFFF3C0);
    var colorEdge = new THREE.Color(opts.colorEdge !== undefined ? opts.colorEdge : 0xFFD84D);
    var size = opts.size !== undefined ? opts.size : 6.0;

    var positions = new Float32Array(count * 3);
    var seeds = new Float32Array(count);       // random phase per particle
    var orbitRadii = new Float32Array(count);  // drift radius per particle
    var orbitHeights = new Float32Array(count); // vertical drift per particle

    for (var i = 0; i < count; i++) {
        // Scatter roughly over a sphere shell around the canopy, biased
        // slightly outward so motes hover just past the leaves rather than
        // buried inside them, and flattened a bit vertically to hug the
        // canopy shape instead of forming an obvious sphere.
        var u = Math.random();
        var v = Math.random();
        var theta = u * Math.PI * 2;
        var phi = Math.acos(2 * v - 1);
        var r = radius * (0.85 + Math.random() * 0.35);

        var x = r * Math.sin(phi) * Math.cos(theta);
        var y = r * Math.cos(phi) * 0.6;
        var z = r * Math.sin(phi) * Math.sin(theta);

        positions[i * 3 + 0] = center.x + x;
        positions[i * 3 + 1] = center.y + y;
        positions[i * 3 + 2] = center.z + z;

        seeds[i] = Math.random() * Math.PI * 2;
        orbitRadii[i] = 1.5 + Math.random() * 2.5;
        orbitHeights[i] = 0.5 + Math.random() * 1.5;
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('orbitRadius', new THREE.BufferAttribute(orbitRadii, 1));
    geometry.setAttribute('orbitHeight', new THREE.BufferAttribute(orbitHeights, 1));

    var material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            size: { value: size },
            colorCore: { value: colorCore },
            colorEdge: { value: colorEdge }
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: [
            'attribute float seed;',
            'attribute float orbitRadius;',
            'attribute float orbitHeight;',
            'uniform float time;',
            'uniform float size;',
            'varying float vFlicker;',
            'void main() {',
            '  vec3 pos = position;',
            '  float t = time * 0.4 + seed;',
            '  pos.x += sin(t) * orbitRadius;',
            '  pos.z += cos(t * 0.8) * orbitRadius;',
            '  pos.y += sin(t * 1.3 + seed) * orbitHeight;',
            '  vFlicker = 0.6 + 0.4 * sin(time * 2.5 + seed * 3.0);',
            '  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);',
            '  gl_PointSize = size * vFlicker * (200.0 / -mvPosition.z);',
            '  gl_Position = projectionMatrix * mvPosition;',
            '}'
        ].join('\n'),
        fragmentShader: [
            'uniform vec3 colorCore;',
            'uniform vec3 colorEdge;',
            'varying float vFlicker;',
            'void main() {',
            '  vec2 uv = gl_PointCoord * 2.0 - 1.0;',
            '  float d = length(uv);',
            '  if (d > 1.0) discard;',
            '  float glow = pow(1.0 - d, 2.5);',
            '  vec3 col = mix(colorEdge, colorCore, glow);',
            '  gl_FragColor = vec4(col, glow * vFlicker);',
            '}'
        ].join('\n')
    });

    var points = new THREE.Points(geometry, material);
    points.frustumCulled = false; // orbiting motes can drift outside the default bounding sphere
    return points;
}
