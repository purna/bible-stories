/* =========================================================================
   RUTH — Scene Helpers
   Shared utilities for 3D scene factories and SVG layer helpers.
   ========================================================================= */

(function (global) {
  "use strict";

  // Toon material helper
  global.toonMat = function (opts) {
    var color = opts.color || 0xcccccc;
    var outline = opts.outline || 0.02;
    return new THREE.MeshToonMaterial({
      color: color,
      emissive: new THREE.Color(color).multiplyScalar(0.1),
    });
  };

  // Outline helper
  global.addOutline = function (mesh, thickness) {
    var outlineMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
    var outlineMesh = new THREE.Mesh(mesh.geometry, outlineMat);
    outlineMesh.scale.multiplyScalar(1 + (thickness || 0.03));
    mesh.add(outlineMesh);
    return outlineMesh;
  };

  // Fog helper
  global.makeFog = function (scene, color, density) {
    scene.fog = new THREE.FogExp2(color, density);
  };

  // JSON scene loader
  global.loadJSONScene = function (data, scene) {
    if (!data || !data.objects) return;
    data.objects.forEach(function (obj) {
      var mesh;
      var mat = global.toonMat({ color: obj.color, outline: obj.material?.outline || 0.02 });
      if (obj.material?.type === 'emissive') {
        mat = new THREE.MeshBasicMaterial({ color: obj.color, transparent: true, opacity: obj.material.opacity || 0.8 });
      }
      switch (obj.shapeType) {
        case 'box':
          mesh = new THREE.Mesh(new THREE.BoxGeometry(obj.scale.x, obj.scale.y, obj.scale.z), mat);
          break;
        case 'sphere':
          mesh = new THREE.Mesh(new THREE.SphereGeometry(obj.scale.x, 12, 8), mat);
          break;
        case 'cylinder':
          mesh = new THREE.Mesh(new THREE.CylinderGeometry(obj.scale.x, obj.scale.y, obj.scale.z, 12), mat);
          break;
        case 'cone':
          mesh = new THREE.Mesh(new THREE.ConeGeometry(obj.scale.x, obj.scale.y, 12), mat);
          break;
        case 'plane':
          mesh = new THREE.Mesh(new THREE.PlaneGeometry(obj.scale.x, obj.scale.z), mat);
          mesh.rotation.x = -Math.PI / 2;
          break;
        default:
          return;
      }
      mesh.position.set(obj.position.x, obj.position.y, obj.position.z);
      scene.add(mesh);
    });
  };

})(window);