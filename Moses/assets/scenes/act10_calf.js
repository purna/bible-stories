(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.calf = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0e06);
    if (global.makeFog) global.makeFog(scene, 0x1a0e06, 0.004);
    scene.add(new THREE.AmbientLight(0xFFB04A, 0.5));
    var fire = new THREE.PointLight(0xFF6020, 4, 100);
    fire.position.set(0, 6, 4);
    scene.add(fire);
    if (global.loadJSONScene) {
      var data = { version:1, name:'calf', settings:{background:'#1a0e06', fog:{color:'#1a0e06', density:0.004}}, camera:{distance:100, height:18}, objects:[
        {type:'shape', shapeType:'box', scale:{x:200,y:1,z:100}, color:'#1a0e06', material:{type:'toon', outline:0.02}, position:{x:0,y:-16,z:0}},
        {type:'shape', shapeType:'cylinder', scale:{x:14,y:4,z:14}, color:'#3a2818', material:{type:'toon', outline:0.04}, position:{x:0,y:-12,z:5}},
        {type:'shape', shapeType:'sphere', scale:{x:8,y:12,z:8}, color:'#FFD84D', material:{type:'toon', outline:0.05}, position:{x:0,y:0,z:5}},
        {type:'shape', shapeType:'sphere', scale:{x:5,y:6,z:5}, color:'#FFD84D', material:{type:'toon', outline:0.05}, position:{x:0,y:12,z:5}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return {
      scene: scene,
      cameraConfig: { distance: 70, height: 18 },
      animate: function (t) { fire.intensity = 4 + Math.sin(t * 0.8) * 0.6; }
    };
  };
})(window);