(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.nebo = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFD84D);
    if (global.makeFog) global.makeFog(scene, 0xc88a48, 0.002);
    scene.add(new THREE.AmbientLight(0xFFD84D, 0.6));
    var sun = new THREE.DirectionalLight(0xFFD84D, 1);
    sun.position.set(30, 30, 20);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'nebo', settings:{background:'#FFD84D', fog:{color:'#c88a48', density:0.002}}, camera:{distance:110, height:25}, objects:[
        {type:'shape', shapeType:'box', scale:{x:200,y:1,z:100}, color:'#2a1808', material:{type:'toon', outline:0.02}, position:{x:0,y:-16,z:0}},
        {type:'shape', shapeType:'cone', scale:{x:14,y:8,z:14}, color:'#5a3818', material:{type:'toon', outline:0.04}, position:{x:0,y:-10,z:8}},
        {type:'shape', shapeType:'cone', scale:{x:30,y:8,z:30}, color:'#3a5028', material:{type:'toon', outline:0.03}, position:{x:-40,y:-10,z:-8}},
        {type:'shape', shapeType:'cone', scale:{x:30,y:10,z:30}, color:'#3a5028', material:{type:'toon', outline:0.03}, position:{x:40,y:-10,z:-8}},
        {type:'shape', shapeType:'box', scale:{x:30,y:2,z:6}, color:'#88d0ff', material:{type:'toon', outline:0.03}, position:{x:0,y:-12,z:4}},
        {type:'shape', shapeType:'sphere', scale:{x:10,y:10,z:10}, color:'#FFD84D', material:{type:'emissive', opacity:0.7, outline:0.04}, position:{x:30,y:24,z:-10}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return {
      scene: scene,
      cameraConfig: { distance: 75, height: 25 },
      animate: function (t) { sun.position.x = 30 + Math.sin(t * 0.05) * 6; }
    };
  };
})(window);