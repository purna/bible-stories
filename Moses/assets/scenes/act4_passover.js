(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.passover = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x100808);
    if (global.makeFog) global.makeFog(scene, 0x100808, 0.005);
    scene.add(new THREE.AmbientLight(0xFF6020, 0.3));
    var lamp = new THREE.PointLight(0xFFD84D, 3, 60);
    lamp.position.set(0, 8, 5);
    scene.add(lamp);
    var lintel = new THREE.Mesh(new THREE.BoxGeometry(32, 3, 3), global.toonMat({ color: 0x3a1808 }));
    lintel.position.set(0, 11, -8);
    scene.add(lintel);
    var doorL = new THREE.Mesh(new THREE.BoxGeometry(12, 22, 2), global.toonMat({ color: 0x3a1808 }));
    doorL.position.set(-10, 0, -8);
    scene.add(doorL);
    var doorR = new THREE.Mesh(new THREE.BoxGeometry(12, 22, 2), global.toonMat({ color: 0x3a1808 }));
    doorR.position.set(10, 0, -8);
    scene.add(doorR);
    var bloodL = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 12), new THREE.MeshBasicMaterial({ color: 0xc84b4b, transparent:true, opacity:0.6 }));
    bloodL.position.set(-8, 8, -6);
    scene.add(bloodL);
    var bloodR = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 12), new THREE.MeshBasicMaterial({ color: 0xc84b4b, transparent:true, opacity:0.6 }));
    bloodR.position.set(8, 8, -6);
    scene.add(bloodR);
    return {
      scene: scene,
      cameraConfig: { distance: 55, height: 12 },
      animate: function (t) { lamp.intensity = 3 + Math.sin(t * 1.2) * 0.4; }
    };
  };
})(window);