(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.voice_beneath_palm = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2d5f2d);
    if (global.makeFog) global.makeFog(scene, 0x2d5f2d, 0.005);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    var sun = new THREE.DirectionalLight(0xfff5c0, 0.9);
    sun.position.set(10, 20, 10);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'voice_beneath_palm', settings:{background:'#2d5f2d', fog:{color:'#2d5f2d', density:0.005}}, camera:{distance:80, height:20}, objects:[
        {type:'shape', shapeType:'plane', scale:{x:200,y:1,z:100}, color:'#3a7a3a', material:{type:'toon', outline:0.02}, position:{x:0,y:-15,z:0}},
        {type:'shape', shapeType:'cylinder', scale:{x:2,y:18,z:2}, color:'#8b6914', material:{type:'toon', outline:0.04}, position:{x:0,y:-6,z:5}},
        {type:'shape', shapeType:'sphere', scale:{x:6,y:3,z:6}, color:'#4a9e4a', material:{type:'toon', outline:0.03}, position:{x:0,y:2,z:5}},
        {type:'shape', shapeType:'sphere', scale:{x:4,y:2,z:4}, color:'#5ab05a', material:{type:'toon', outline:0.03}, position:{x:3,y:0,z:3}},
        {type:'shape', shapeType:'sphere', scale:{x:3,y:1.5,z:3}, color:'#6bc06b', material:{type:'toon', outline:0.03}, position:{x:-4,y:-1,z:-2}},
        {type:'shape', shapeType:'box', scale:{x:3,y:1,z:2}, color:'#8b7355', material:{type:'toon', outline:0.04}, position:{x:8,y:-14,z:8}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 80, height: 20 } };
  };
})(window);
