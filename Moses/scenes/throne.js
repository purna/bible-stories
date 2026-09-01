(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.throne = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0e18);
    if (global.makeFog) global.makeFog(scene, 0x1a0e18, 0.003);
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    var light = new THREE.PointLight(0xFFD84D, 3, 100);
    light.position.set(0, 20, 10);
    scene.add(light);
    if (global.loadJSONScene) {
      var data = { version:1, name:'throne', settings:{background:'#1a0e18', fog:{color:'#1a0e18', density:0.003}}, camera:{distance:110, height:18}, objects:[
        {type:'shape', shapeType:'box', scale:{x:200,y:1,z:100}, color:'#3a2818', material:{type:'toon', outline:0.02}, position:{x:0,y:-18,z:0}},
        {type:'shape', shapeType:'box', scale:{x:36,y:22,z:12}, color:'#5a3818', material:{type:'toon', outline:0.05}, position:{x:0,y:-2,z:-8}},
        {type:'shape', shapeType:'box', scale:{x:36,y:18,z:8}, color:'#c8a84b', material:{type:'toon', outline:0.05}, position:{x:0,y:14,z:-12}},
        {type:'shape', shapeType:'sphere', scale:{x:3,y:3,z:3}, color:'#FFD84D', material:{type:'emissive', opacity:0.7, outline:0.04}, position:{x:0,y:26,z:-12}},
        {type:'shape', shapeType:'cylinder', scale:{x:3,y:22,z:3}, color:'#c8a84b', material:{type:'toon', outline:0.03}, position:{x:-34,y:0,z:-10}},
        {type:'shape', shapeType:'cylinder', scale:{x:3,y:22,z:3}, color:'#c8a84b', material:{type:'toon', outline:0.03}, position:{x:34,y:0,z:-10}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 70, height: 18 } };
  };
})(window);