(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.mountain = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0e30);
    if (global.makeFog) global.makeFog(scene, 0x1a0e30, 0.003);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    var glory = new THREE.PointLight(0xFFD84D, 5, 100);
    glory.position.set(0, 40, 10);
    scene.add(glory);
    var bolt = new THREE.PointLight(0xB078D0, 2, 60);
    bolt.position.set(-30, 20, 5);
    scene.add(bolt);
    var sinai = new THREE.Mesh(new THREE.ConeGeometry(50, 30, 4), global.toonMat({ color: 0x1a0e1a }));
    sinai.position.set(0, -10, -20);
    scene.add(sinai);
    var peak = new THREE.Mesh(new THREE.ConeGeometry(12, 6, 12), new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent: true, opacity: 0.6 }));
    peak.position.set(0, 12, -18);
    scene.add(peak);
    var tablet1 = new THREE.Mesh(new THREE.BoxGeometry(12, 18, 2), global.toonMat({ color: 0xd4c098 }));
    tablet1.position.set(-16, -2, 6);
    scene.add(tablet1);
    var tablet2 = new THREE.Mesh(new THREE.BoxGeometry(12, 18, 2), global.toonMat({ color: 0xd4c098 }));
    tablet2.position.set(16, -2, 6);
    scene.add(tablet2);
    return {
      scene: scene,
      cameraConfig: { distance: 80, height: 30 },
      animate: function (t) {
        glory.intensity = 5 + Math.sin(t * 1.5) * 1;
        bolt.intensity = 2 + Math.sin(t * 4) * 1.5;
      }
    };
  };
})(window);