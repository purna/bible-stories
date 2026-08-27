// ------------------------------------------------------------
// Pixel 3D — exported scene functions
//
// Inside your own Three.js app create a Group and pass it to
// any of the functions below.  They add new meshes (and their
// materials) to the group; the scene graph itself is yours to
// render as you wish.
//
//   window.initScene1(group);      // add the first scene to group
//   window.initScene2(group);      // add the second scene to group
//   window.initSceneLights(group); // add the scene lights to group
//   window.initAllScenes(group);   // add ALL scenes (calls initScene1, initScene2, etc. for you)
// ------------------------------------------------------------

window.initScene1 = function(group) {
    // BoxSphere
    const Default = new THREE.MeshPhongMaterial({ color: 0xFF4444, transparent: true, opacity: 1 });
    const Default2 = new THREE.MeshPhongMaterial({ color: 0x4444FF, transparent: true, opacity: 1 });
    const Default3 = new THREE.MeshPhongMaterial({ color: 0x44FF44, transparent: true, opacity: 1 });

    const box_boxsphere = new THREE.Mesh(new THREE.BoxGeometry(), Default);
    box_boxsphere.position.set(-2, 1, 0);
    box_boxsphere.scale.set(1, 1, 1);
    group.add(box_boxsphere);

    const sphere_boxsphere1 = new THREE.Mesh(new THREE.SphereGeometry(), Default2);
    sphere_boxsphere1.position.set(2, 1, 0);
    sphere_boxsphere1.scale.set(1, 1, 1);
    group.add(sphere_boxsphere1);

    const cylinder_boxsphere2 = new THREE.Mesh(new THREE.CylinderGeometry(), Default3);
    cylinder_boxsphere2.position.set(0, 1, -2);
    cylinder_boxsphere2.scale.set(1, 1, 1);
    group.add(cylinder_boxsphere2);
};

window.initSceneLights = function(group) {
    const lPoint = new THREE.PointLight(0xFFFFFF, 40);
    lPoint.position.set(0, 4, 0);
    group.add(lPoint);
};

window.initAllScenes = function(group) {
    initScene1(group);
};
