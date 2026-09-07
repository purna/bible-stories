(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.river_rose = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a202c);
    if (global.makeFog) global.makeFog(scene, 0x1a202c, 0.006);
    scene.add(new THREE.AmbientLight(0x8899aa, 0.4));
    var sun = new THREE.DirectionalLight(0xaaccff, 0.6);
    sun.position.set(-5, 20, 10);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'river_rose', settings:{background:'#1a202c', fog:{color:'#1a202c', density:0.006}}, camera:{distance:90, height:16}, objects:[
        {type:'shape', shapeType:'plane', scale:{x:200,y:1,z:100}, color:'#4a5568', material:{type:'toon', outline:0.02}, position:{x:0,y:-15,z:0}},
        {type:'shape', shapeType:'plane', scale:{x:120,y:1,z:60}, color:'#3a4a5a', material:{type:'toon', outline:0.02}, position:{x:0,y:-14,z:0}},
        {type:'shape', shapeType:'box', scale:{x:8,y:3,z:4}, color:'#2d3748', material:{type:'toon', outline:0.05}, position:{x:-15,y:-12,z:5}},
        {type:'shape', shapeType:'box', scale:{x:8,y:3,z:4}, color:'#2d3748', material:{type:'toon', outline:0.05}, position:{x:15,y:-12,z:-3}},
        {type:'shape', shapeType:'box', scale:{x:7,y:2.5,z:3.5}, color:'#1a202c', material:{type:'toon', outline:0.05}, position:{x:-8,y:-13,z:-8}},
        {type:'shape', shapeType:'box', scale:{x:7,y:2.5,z:3.5}, color:'#1a202c', material:{type:'toon', outline:0.05}, position:{x:10,y:-13,z:10}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 90, height: 16 } };
  };
})(window);
