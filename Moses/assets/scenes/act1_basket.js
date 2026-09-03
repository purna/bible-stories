(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.basket = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1a22);
    if (global.makeFog) global.makeFog(scene, 0x0e1a22, 0.004);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    var sun = new THREE.DirectionalLight(0xFFD84D, 0.8);
    sun.position.set(0, 30, 20);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'basket', settings:{background:'#0e1a22', fog:{color:'#0e1a22', density:0.004}}, camera:{distance:100, height:20}, objects:[
        {type:'shape', shapeType:'plane', scale:{x:200,y:1,z:100}, color:'#1a3850', material:{type:'toon', outline:0.02}, position:{x:0,y:-15,z:0}},
        {type:'shape', shapeType:'box', scale:{x:18,y:8,z:10}, color:'#a06a30', material:{type:'toon', outline:0.04}, position:{x:0,y:-8,z:5}},
        {type:'shape', shapeType:'cylinder', scale:{x:6,y:4,z:4}, color:'#e0b888', material:{type:'toon', outline:0.05}, position:{x:0,y:-3,z:5}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 60, height: 18 } };
  };
})(window);