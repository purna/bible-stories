(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.threshing_floor = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1810);
    if (global.makeFog) global.makeFog(scene, 0x1a1810, 0.003);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    var fire = new THREE.PointLight(0xFFA040, 3, 50);
    fire.position.set(-15, 2, -10);
    scene.add(fire);
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 60), global.toonMat({ color: 0x3a3020 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -10;
    scene.add(ground);
    var grainHeap = new THREE.Mesh(new THREE.ConeGeometry(8, 4, 12), global.toonMat({ color: 0xC8A848 }));
    grainHeap.position.set(0, -7, 0);
    scene.add(grainHeap);
    var winnowingBasket = new THREE.Mesh(new THREE.CylinderGeometry(2, 1.5, 1, 12), global.toonMat({ color: 0x7a5830 }));
    winnowingBasket.position.set(8, -8, 5);
    scene.add(winnowingBasket);
    var wall = new THREE.Mesh(new THREE.BoxGeometry(30, 12, 2), global.toonMat({ color: 0x5a4830 }));
    wall.position.set(0, -4, -20);
    scene.add(wall);
    return {
      scene: scene,
      cameraConfig: { distance: 45, height: 12 },
      animate: function (t) { fire.intensity = 3 + Math.sin(t * 2) * 0.5; }
    };
  };
})(window);
