(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.your_people = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3a2818);
    if (global.makeFog) global.makeFog(scene, 0x3a2818, 0.002);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    var sun = new THREE.DirectionalLight(0xFFC860, 0.8);
    sun.position.set(30, 25, 20);
    scene.add(sun);
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 100), global.toonMat({ color: 0x7a6040 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -10;
    scene.add(ground);
    for (var i = 0; i < 5; i++) {
      var hill = new THREE.Mesh(new THREE.SphereGeometry(15 + Math.random() * 10, 12, 8), global.toonMat({ color: 0x5a4830 }));
      hill.position.set(-40 + i * 25, -15, -30 - Math.random() * 20);
      hill.scale.y = 0.4;
      scene.add(hill);
    }
    var road = new THREE.Mesh(new THREE.PlaneGeometry(4, 80), global.toonMat({ color: 0x9a8060 }));
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, -9.9, 0);
    scene.add(road);
    var staff = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 10, 8), global.toonMat({ color: 0x4a3010 }));
    staff.position.set(-3, -5, 8);
    scene.add(staff);
    return { scene: scene, cameraConfig: { distance: 60, height: 15 } };
  };
})(window);
