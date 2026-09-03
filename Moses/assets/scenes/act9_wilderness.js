(function (global) {
  "use strict";
  var THREE = global.THREE;
  if (!THREE) return;
  global.SCENE_FACTORIES = global.SCENE_FACTORIES || {};
  global.SCENE_FACTORIES.wilderness = function () {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a0e08);
    if (global.makeFog) global.makeFog(scene, 0x1a0e08, 0.004);
    scene.add(new THREE.AmbientLight(0xd4a050, 0.5));
    var sun = new THREE.DirectionalLight(0xd4a050, 0.8);
    sun.position.set(20, 30, 10);
    scene.add(sun);
    if (global.loadJSONScene) {
      var data = { version:1, name:'wilderness', settings:{background:'#1a0e08', fog:{color:'#1a0e08', density:0.004}}, camera:{distance:130, height:30}, objects:[
        {type:'shape', shapeType:'box', scale:{x:200,y:1,z:100}, color:'#5a3818', material:{type:'toon', outline:0.02}, position:{x:0,y:-16,z:0}},
        {type:'shape', shapeType:'cone', scale:{x:28,y:10,z:28}, color:'#7a5028', material:{type:'toon', outline:0.03}, position:{x:-40,y:-10,z:-10}},
        {type:'shape', shapeType:'cone', scale:{x:32,y:12,z:32}, color:'#7a5028', material:{type:'toon', outline:0.03}, position:{x:40,y:-10,z:-8}},
        {type:'shape', shapeType:'cone', scale:{x:22,y:8,z:22}, color:'#a06838', material:{type:'toon', outline:0.03}, position:{x:0,y:-10,z:12}},
        {type:'shape', shapeType:'cylinder', scale:{x:1,y:18,z:1}, color:'#3a2818', material:{type:'toon', outline:0.02}, position:{x:-10,y:-6,z:6}},
        {type:'shape', shapeType:'cylinder', scale:{x:1,y:18,z:1}, color:'#3a2818', material:{type:'toon', outline:0.02}, position:{x:10,y:-6,z:6}}
      ]};
      global.loadJSONScene(data, scene);
    }
    return {
      scene: scene,
      cameraConfig: { distance: 90, height: 30 },
      animate: function (t) { sun.position.x = 20 + Math.sin(t * 0.05) * 6; }
    };
  };
})(window);