(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.call_to_courage = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x6b4423);
    if (global.makeFog) global.makeFog(scene, 0x6b4423, 0.004);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    var sun = new THREE.DirectionalLight(0xffd84d, 0.8);
    sun.position.set(5, 25, 15);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'call_to_courage', settings:{background:'#6b4423', fog:{color:'#6b4423', density:0.004}}, camera:{distance:80, height:18}, objects:[
        {type:'shape', shapeType:'plane', scale:{x:200,y:1,z:100}, color:'#7a5230', material:{type:'toon', outline:0.02}, position:{x:0,y:-15,z:0}},
        {type:'shape', shapeType:'cone', scale:{x:5,y:8,z:5}, color:'#c8b090', material:{type:'toon', outline:0.04}, position:{x:-10,y:-7,z:5}},
        {type:'shape', shapeType:'cone', scale:{x:4,y:6,z:4}, color:'#b8a080', material:{type:'toon', outline:0.04}, position:{x:12,y:-9,z:3}},
        {type:'shape', shapeType:'sphere', scale:{x:1.5,y:1.5,z:1.5}, color:'#ff9b3a', material:{type:'emissive', opacity:0.9}, position:{x:0,y:-12,z:0}},
        {type:'light', lightType:'point', color:'#ff9b3a', intensity:1.5, distance:30, position:{x:0,y:-10,z:0}},
        {type:'shape', shapeType:'box', scale:{x:8,y:2,z:5}, color:'#5a4030', material:{type:'toon', outline:0.04}, position:{x:0,y:-14,z:-5}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 80, height: 18 } };
  };
})(window);
