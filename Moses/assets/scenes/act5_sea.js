(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.sea = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1430);
    if (global.makeFog) global.makeFog(scene, 0x0a1430, 0.004);
    scene.add(new THREE.AmbientLight(0x88d0ff, 0.4));
    var sun = new THREE.DirectionalLight(0xFFD84D, 0.6);
    sun.position.set(0, 30, 20);
    scene.add(sun);
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 100), global.toonMat({ color: 0x5a4028 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -16;
    scene.add(floor);
    var wallL = new THREE.Mesh(new THREE.BoxGeometry(40, 60, 4), global.toonMat({ color: 0x173f70 }));
    wallL.position.set(-60, 10, -5);
    scene.add(wallL);
    var wallR = new THREE.Mesh(new THREE.BoxGeometry(40, 60, 4), global.toonMat({ color: 0x173f70 }));
    wallR.position.set(60, 10, -5);
    scene.add(wallR);
    var path = new THREE.Mesh(new THREE.BoxGeometry(14, 1, 4), global.toonMat({ color: 0xc8a060 }));
    path.position.set(0, -15, 5);
    scene.add(path);
    var staff = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 6, 12), global.toonMat({ color: 0x5a3818 }));
    staff.position.set(0, -8, 6);
    scene.add(staff);
    var moses = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 12), global.toonMat({ color: 0x7a4a1a }));
    moses.position.set(0, -2, 6);
    scene.add(moses);
    return {
      scene: scene,
      cameraConfig: { distance: 75, height: 25 },
      animate: function (t) { sun.position.x = Math.sin(t * 0.1) * 5; }
    };
  };
})(window);