(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.gleaning = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x4a5828);
    if (global.makeFog) global.makeFog(scene, 0x4a5828, 0.002);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    var sun = new THREE.DirectionalLight(0xFFE880, 0.9);
    sun.position.set(20, 35, 15);
    scene.add(sun);
    var field = new THREE.Mesh(new THREE.PlaneGeometry(120, 80), global.toonMat({ color: 0x6a7838 }));
    field.rotation.x = -Math.PI / 2;
    field.position.y = -10;
    scene.add(field);
    for (var i = 0; i < 30; i++) {
      var stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 3 + Math.random() * 2, 6), global.toonMat({ color: 0xC8A840 }));
      stalk.position.set(-30 + Math.random() * 60, -7 + Math.random(), -10 + Math.random() * 20);
      scene.add(stalk);
    }
    var basket = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.2, 2, 12), global.toonMat({ color: 0x8a6838 }));
    basket.position.set(5, -8.5, 5);
    scene.add(basket);
    var tree = new THREE.Mesh(new THREE.SphereGeometry(6, 10, 8), global.toonMat({ color: 0x3a5820 }));
    tree.position.set(-25, -2, -15);
    scene.add(tree);
    var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 8, 8), global.toonMat({ color: 0x4a3018 }));
    trunk.position.set(-25, -6, -15);
    scene.add(trunk);
    return { scene: scene, cameraConfig: { distance: 50, height: 16 } };
  };
})(window);
