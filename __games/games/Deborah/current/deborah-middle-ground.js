(function (global) {
  'use strict';
  const THREE = global.THREE;
  if (!THREE) return;

  const skin = [0x8a5738, 0xb87852, 0xd19a72, 0x70452f];
  const cloth = [0x315f68, 0xa85c45, 0xc49a48, 0x665178, 0x577548, 0x9b7444];

  function material(color) {
    const result = new THREE.MeshLambertMaterial({ color });
    result.flatShading = true;
    result.needsUpdate = true;
    return result;
  }

  function mesh(geometry, color) {
    return new THREE.Mesh(geometry, material(color));
  }

  function lowPolyPerson(options = {}) {
    const group = new THREE.Group();
    const scale = options.scale || 1;
    const tunic = options.color || cloth[Math.floor(Math.random() * cloth.length)];
    const body = mesh(new THREE.CylinderGeometry(1.25, 1.65, 4.2, 5), tunic);
    body.position.y = 4.8;
    const head = mesh(new THREE.IcosahedronGeometry(1.15, 1), options.skin || skin[Math.floor(Math.random() * skin.length)]);
    head.position.y = 8;
    const hair = mesh(new THREE.SphereGeometry(1.18, 6, 4, 0, Math.PI * 2, 0, Math.PI * .48), options.hair || 0x2b1b15);
    hair.position.y = 8.45;
    const leftLeg = mesh(new THREE.CylinderGeometry(.34, .42, 3.2, 5), 0x513a2c);
    const rightLeg = leftLeg.clone();
    leftLeg.position.set(-.62, 1.45, 0); rightLeg.position.set(.62, 1.45, 0);
    const leftArm = mesh(new THREE.CylinderGeometry(.28, .36, 3.6, 5), tunic);
    const rightArm = leftArm.clone();
    leftArm.position.set(-1.55, 5, 0); rightArm.position.set(1.55, 5, 0);
    leftArm.rotation.z = -.25; rightArm.rotation.z = .25;
    group.add(body, head, hair, leftLeg, rightLeg, leftArm, rightArm);
    group.scale.setScalar(scale);
    group.position.set(options.x || 0, options.y || -10.5, options.z || 0);
    group.rotation.y = options.facing || 0;
    group.userData = {
      kind: 'person', moving: Boolean(options.moving), speed: options.speed || 2.4,
      direction: options.direction || 1, phase: options.phase || Math.random() * Math.PI * 2,
      baseX: group.position.x, baseY: group.position.y, leftLeg, rightLeg, leftArm, rightArm
    };
    return group;
  }

  function palm(x, z) {
    const group = new THREE.Group();
    const trunk = mesh(new THREE.CylinderGeometry(.7, 1.1, 13, 7), 0x79512f);
    trunk.position.y = -3.8;
    group.add(trunk);
    for (let i = 0; i < 8; i++) {
      const leaf = mesh(new THREE.ConeGeometry(.8, 8, 5), 0x3f7047);
      leaf.position.y = 3;
      leaf.rotation.z = Math.PI / 2.5;
      leaf.rotation.y = i * Math.PI / 4;
      group.add(leaf);
    }
    group.position.set(x, 0, z);
    return group;
  }

  function tent(x, z) {
    const tentMesh = mesh(new THREE.ConeGeometry(7.5, 10, 4), 0x9b7048);
    tentMesh.rotation.y = Math.PI / 4;
    tentMesh.position.set(x, -5.5, z);
    return tentMesh;
  }

  function chariot(x, z, moving) {
    const group = new THREE.Group();
    const cart = mesh(new THREE.BoxGeometry(5, 2.4, 3.2), 0x63452f);
    cart.position.y = -7.2;
    group.add(cart);
    for (const side of [-1, 1]) {
      const wheel = mesh(new THREE.TorusGeometry(1.6, .3, 5, 10), 0x272522);
      wheel.position.set(side * 2.5, -8, 0);
      wheel.rotation.y = Math.PI / 2;
      group.add(wheel);
    }
    group.position.set(x, 0, z);
    group.userData = { kind:'chariot', moving, baseX:x, phase:Math.random()*6, speed:3.2 };
    return group;
  }

  function addCrowd(scene, animated, count, options = {}) {
    for (let i = 0; i < count; i++) {
      const direction = options.direction || 1;
      const spacing = options.spacing || 5;
      const x = (options.x || -20) + i * spacing + (i % 2) * 1.2;
      const z = (options.z || 0) + (i % 3) * 4;
      const person = lowPolyPerson({x,z,scale:.68 + (i%3)*.08,color:cloth[i%cloth.length],moving:options.moving !== false,direction,phase:i*.7,facing:direction>0?Math.PI/2:-Math.PI/2});
      scene.add(person); animated.push(person);
    }
  }

  function buildScene(act, lineIndex) {
    const scene = new THREE.Scene();
    const animated = [];
    scene.add(new THREE.HemisphereLight(0xffedc0, 0x253846, 1.25));
    const key = new THREE.DirectionalLight(0xffd58a, 1.15);
    key.position.set(-18, 28, 24); scene.add(key);
    const ground = mesh(new THREE.CircleGeometry(38, 32), 0x69583c);
    ground.material.transparent = true; ground.material.opacity = .24;
    ground.rotation.x = -Math.PI/2; ground.position.y = -10.4; scene.add(ground);

    if (act.id === 'under_the_palm') {
      scene.add(palm(8, 5));
      scene.add(lowPolyPerson({x:8,z:4,color:0x315f68,scale:.9,facing:-Math.PI/2}));
      if (lineIndex === 3) addCrowd(scene, animated, 12, {x:-31,z:-3,spacing:4.4,moving:true});
      else addCrowd(scene, animated, lineIndex ? 5 : 8, {x:-24,z:-2,spacing:5.5,moving:lineIndex===0});
    } else if (act.id === 'the_summons') {
      scene.add(palm(-19, 7));
      const deborah=lowPolyPerson({x:-7,z:0,color:0x315f68,scale:.9,facing:Math.PI/2});
      const barak=lowPolyPerson({x:7,z:0,color:0xa85c45,scale:.95,facing:-Math.PI/2});
      scene.add(deborah,barak);
      if(lineIndex===0||lineIndex===3)addCrowd(scene,animated,7,{x:-28,z:8,spacing:5,moving:true});
    } else if (act.id === 'gather_at_tabor') {
      addCrowd(scene, animated, 14, {x:-31,z:-4,spacing:4.5,moving:true});
      scene.add(lowPolyPerson({x:16,z:-3,color:0xa85c45,scale:1.05,facing:-Math.PI/2}));
      scene.add(lowPolyPerson({x:11,z:-1,color:0x315f68,scale:.98,facing:-Math.PI/2}));
    } else if (act.id === 'the_storm') {
      for(let i=0;i<5;i++){const cart=chariot(-22+i*10,-2+(i%2)*7,lineIndex<3);scene.add(cart);animated.push(cart)}
      addCrowd(scene,animated,7,{x:-29,z:10,spacing:6,moving:lineIndex>0,direction:1});
    } else if (act.id === 'sisera_flees') {
      scene.add(chariot(-24,7,false));
      const runner=lowPolyPerson({x:-14,z:0,color:0x733d35,scale:1,moving:true,direction:1,speed:4.5,facing:Math.PI/2});
      scene.add(runner);animated.push(runner);scene.add(tent(25,6));
      if(lineIndex===2||lineIndex===3)scene.add(lowPolyPerson({x:17,z:1,color:0x87664d,scale:.9,facing:-Math.PI/2}));
    } else if (act.id === 'jaels_choice') {
      scene.add(tent(3,6));
      scene.add(lowPolyPerson({x:-8,z:0,color:0x87664d,scale:.92,facing:Math.PI/2}));
      const sisera=lowPolyPerson({x:8,z:1,color:0x733d35,scale:1,facing:-Math.PI/2,moving:lineIndex===0});
      if(lineIndex>=2)sisera.rotation.z=Math.PI/2;
      scene.add(sisera);animated.push(sisera);
    } else if (act.id === 'the_song') {
      addCrowd(scene,animated,12,{x:-29,z:-5,spacing:5.1,moving:false});
      for(const person of animated){person.userData.moving=true;person.userData.dancing=true}
      scene.add(lowPolyPerson({x:-5,z:-4,color:0x315f68,scale:1.05,facing:Math.PI/5}));
      scene.add(lowPolyPerson({x:6,z:-4,color:0xa85c45,scale:1.05,facing:-Math.PI/5}));
    }

    function animate(time) {
      for (const object of animated) {
        const data=object.userData;
        if(data.kind==='person'&&data.moving){
          const swing=Math.sin(time*5+data.phase);
          object.position.y=data.baseY+Math.abs(swing)*.22;
          data.leftLeg.rotation.x=swing*.55;data.rightLeg.rotation.x=-swing*.55;
          data.leftArm.rotation.x=-swing*.45;data.rightArm.rotation.x=swing*.45;
          if(data.dancing){object.rotation.z=Math.sin(time*2+data.phase)*.08;continue}
          object.position.x=data.baseX+(((time*data.speed+data.phase*2)%68)-10)*data.direction;
        } else if(data.kind==='chariot'&&data.moving){
          object.position.x=data.baseX+Math.sin(time*.8+data.phase)*4;
          object.rotation.z=Math.sin(time*1.7+data.phase)*.025;
        }
      }
    }
    return {scene,animate,cameraConfig:{distance:72,height:10,targetY:-4}};
  }

  global.createDeborahMiddleGround = buildScene;
})(window);
