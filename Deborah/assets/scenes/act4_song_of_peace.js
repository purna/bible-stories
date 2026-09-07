(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.song_of_peace = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb7791f);
    if (global.makeFog) global.makeFog(scene, 0xb7791f, 0.004);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    var sun = new THREE.DirectionalLight(0xfff5c0, 1.0);
    sun.position.set(10, 30, 20);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'song_of_peace', settings:{background:'#b7791f', fog:{color:'#b7791f', density:0.004}}, camera:{distance:80, height:20}, objects:[
        {type:'shape', shapeType:'plane', scale:{x:200,y:1,z:100}, color:'#c8a06a', material:{type:'toon', outline:0.02}, position:{x:0,y:-15,z:0}},
        {type:'shape', shapeType:'box', scale:{x:6,y:5,z:6}, color:'#e0c8a0', material:{type:'toon', outline:0.04}, position:{x:-15,y:-12,z:0}},
        {type:'shape', shapeType:'box', scale:{x:4,y:4,z:5}, color:'#d0b890', material:{type:'toon', outline:0.04}, position:{x:15,y:-13,z:5}},
        {type:'shape', shapeType:'cone', scale:{x:3,y:6,z:3}, color:'#4a9e4a', material:{type:'toon', outline:0.03}, position:{x:0,y:-9,z:-10}},
        {type:'shape', shapeType:'cone', scale:{x:2.5,y:5,z:2.5}, color:'#5ab05a', material:{type:'toon', outline:0.03}, position:{x:8,y:-10,z:-8}},
        {type:'shape', shapeType:'sphere', scale:{x:2,y:2,z:2}, color:'#ffd84d', material:{type:'emissive', opacity:0.6}, position:{x:-20,y:10,z:-20}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return { scene: scene, cameraConfig: { distance: 80, height: 20 } };
  };
})(window);
