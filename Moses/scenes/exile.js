(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.exile = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0e06);
    if (global.makeFog) global.makeFog(scene, 0x1a0e06, 0.003);
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    var fire = new THREE.PointLight(0xFFB04A, 4, 100);
    fire.position.set(0, 5, 0);
    scene.add(fire);
    var bush = new THREE.Mesh(new THREE.SphereGeometry(12, 12, 12), global.toonMat({ color: 0x3a2010 }));
    bush.position.set(0, -8, 0);
    global.addOutline(bush, 0.05);
    scene.add(bush);
    var flame = new THREE.Mesh(new THREE.SphereGeometry(5, 12, 12), new THREE.MeshBasicMaterial({ color: 0xFFD84D, transparent:true, opacity:0.7 }));
    flame.position.set(0, 4, 0);
    scene.add(flame);
    var staff = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 22, 12), global.toonMat({ color: 0x5a3818 }));
    staff.position.set(-20, -5, 10);
    scene.add(staff);
    var mountain = new THREE.Mesh(new THREE.ConeGeometry(10, 14, 12), global.toonMat({ color: 0x1a0e08 }));
    mountain.position.set(0, -18, -30);
    scene.add(mountain);
    return {
      scene: scene,
      cameraConfig: { distance: 60, height: 15 },
      animate: function (t) { flame.position.y = 4 + Math.sin(t * 0.8) * 0.5; }
    };
  };
})(window);