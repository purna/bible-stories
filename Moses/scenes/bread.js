(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.bread = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a1808);
    if (global.makeFog) global.makeFog(scene, 0x2a1808, 0.003);
    scene.add(new THREE.AmbientLight(0xFFD84D, 0.45));
    var sun = new THREE.DirectionalLight(0xd4a050, 0.8);
    sun.position.set(30, 30, 20);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'bread', settings:{background:'#2a1808', fog:{color:'#2a1808', density:0.003}}, camera:{distance:100, height:20}, objects:[
        {type:'shape', shapeType:'box', scale:{x:200,y:1,z:100}, color:'#c88a48', material:{type:'toon', outline:0.02}, position:{x:0,y:-16,z:0}},
        {type:'shape', shapeType:'cone', scale:{x:30,y:8,z:20}, color:'#a06838', material:{type:'toon', outline:0.03}, position:{x:-30,y:-10,z:-10}},
        {type:'shape', shapeType:'cone', scale:{x:30,y:8,z:20}, color:'#a06838', material:{type:'toon', outline:0.03}, position:{x:40,y:-10,z:-8}},
        {type:'shape', shapeType:'cylinder', scale:{x:4,y:5,z:4}, color:'#a06a30', material:{type:'toon', outline:0.04}, position:{x:0,y:-10,z:8}},
        {type:'shape', shapeType:'sphere', scale:{x:3,y:3,z:3}, color:'#fff3cf', material:{type:'emissive', opacity:0.5, outline:0.03}, position:{x:0,y:-4,z:8}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return {
      scene: scene,
      cameraConfig: { distance: 65, height: 20 },
      animate: function (t) { sun.position.x = 30 + Math.sin(t * 0.1) * 4; }
    };
  };
})(window);