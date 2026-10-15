/* Original stylised City of David scene. Uses the project's bundled Three.js. */
(() => {
  'use strict';
  const host = document.querySelector('#cityScene');
  const toggle = document.querySelector('#cityMotion');
  const fogLayers = [...(host?.querySelectorAll('.city-fog') || [])];
  const viewpoint = document.querySelector('#cityViewpoint');
  if (!host) return;
  if (!window.THREE) {
    host.dataset.state = 'fallback';
    toggle.hidden = true;
    viewpoint.closest('label').hidden = true;
    return;
  }
  const THREE = window.THREE;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (_) {
    host.dataset.state = 'fallback';
    toggle.hidden = true;
    viewpoint.closest('label').hidden = true;
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .94;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.className = 'bg-canvas';
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x795f54, 190, 460);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 3000);
  scene.add(new THREE.HemisphereLight(0xffe8c7, 0x604b37, .58));
  const sunlight = new THREE.DirectionalLight(0xffdeb0, .95);
  sunlight.position.set(-65, 85, 45);
  sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(2048, 2048);
  Object.assign(sunlight.shadow.camera, { left: -90, right: 90, top: 85, bottom: -65, near: 1, far: 240 });
  sunlight.shadow.bias = -0.0008;
  sunlight.shadow.normalBias = 0.12;
  scene.add(sunlight);

  let seed = 31;
  function random() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  const batches = new Map();
  // Batch masonry into instanced meshes to keep the city light enough for phones.
  function box(x, y, z, w, h, d, color, rotation = 0) {
    const key = String(color);
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push({ x, y, z, w, h, d, rotation });
  }
  function ground(x, z) {
    const ridge = Math.exp(-Math.pow((x + 1) / 43, 4) - Math.pow(z / 22, 2));
    return -4 + 23 * ridge + 1.4 * Math.sin(x * 0.065) * ridge;
  }
  const terrain = new THREE.PlaneGeometry(250, 210, 100, 84);
  terrain.rotateX(-Math.PI / 2);
  const position = terrain.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i), z = position.getZ(i);
    position.setY(i, ground(x, z) - random() * 0.65);
  }
  terrain.computeVertexNormals();
  const land = new THREE.Mesh(terrain, new THREE.MeshStandardMaterial({ color: 0x716548, roughness: 1, flatShading: true }));
  land.receiveShadow = true;
  scene.add(land);

  // Continue the valley beneath the detailed terrain so its finite perimeter stays hidden.
  const valley = new THREE.Mesh(new THREE.PlaneGeometry(2400, 2400), land.material);
  valley.rotation.x = -Math.PI / 2;
  valley.position.y = -5;
  scene.add(valley);

  // Keep the distant backdrop facing the camera so its extended sides cannot cross behind it.
  const hillBackdrop=new THREE.Group();
  scene.add(hillBackdrop);
  // Extend the hill silhouettes past every camera angle, with their bases below the horizon.
  for (let layer = 0; layer < 3; layer++) {
    const shape = new THREE.Shape();
    shape.moveTo(-1200, -600);
    for (let x = -1200; x <= 1200; x += 12) {
      // Keep the existing central ridgeline while extending both ends.
      const noise = Math.abs(x)<=240 ? random()*4 : (Math.sin(x*.123+layer*9)+1)*2;
      shape.lineTo(x, 5 + layer * 7 + Math.sin(x * .023 + layer * 2) * 12 + noise);
    }
    shape.lineTo(1200, -600);
    shape.closePath();
    const hills = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshBasicMaterial({ color: [0x66534d, 0x806b63, 0x998479][layer] }));
    hills.position.set(0, 0, -105 - layer * 50);
    hillBackdrop.add(hills);
  }

  const stones = [0xd4b78c, 0xc9aa7e, 0xe1c79f, 0xbfa47f, 0xdac09a];
  // Low retaining walls and cultivated terraces follow the slopes of the ridge.
  for (const z of [20, 26, 33, -24, -31]) {
    for (let x = -43; x < 44; x += 2.5) {
      box(x, ground(x, z) + .35, z, 2.45, .9, .65, 0xa99a78);
      if (Math.abs(z) > 24 && random() > .35) box(x, ground(x, z + 1.8) + .12, z + 1.8, 1.6, .3, .9, 0x777e54);
    }
  }
  function house(x, z, w, d, h) {
    const y = ground(x, z), color = stones[Math.floor(random() * stones.length)];
    box(x, y + h / 2, z, w, h, d, color);
    box(x, y + h + .12, z, w + .28, .28, d + .28, 0xe4cba6);
    for (const side of [-1, 1]) {
      box(x + side * w / 2, y + h + .45, z, .22, .65, d, color);
      box(x, y + h + .45, z + side * d / 2, w, .65, .22, color);
    }
    box(x - w * .17, y + .85, z + d / 2 + .025, .62, 1.7, .09, 0x504940);
    if (w > 3.5) box(x + w * .26, y + h * .65, z + d / 2 + .03, .5, .65, .1, 0x655849);
    if (random() > .55) box(x + w * .2, y + h + .5, z, .55, .75, .55, 0xa47350);
  }
  for (let row = 0; row < 5; row++) {
    const z = -10 + row * 4.6;
    for (let column = 0; column < 11; column++) {
      const x = -29 + column * 5.7 + (row % 2) * 1.4;
      if ((Math.abs(x - 5) < 9 && z < 1) || (x > 20 && z > 5)) continue;
      house(x + random() * .6, z, 3.4 + random(), 3 + random() * .5, 2.7 + random() * 2.8);
    }
  }
  // An upper citadel and courtyard; this is an interpretation, not a reconstruction.
  const top = ground(4, -5);
  box(4, top + 1, -5, 17, 2, 11, 0xb99b75);
  house(4, -7, 11, 7, 7);
  house(-3, -6, 4, 4, 9);
  house(11, -6, 4, 4, 8);
  box(4, top + 2.2, 0, 10, .3, 4, 0xe0c398);

  function tower(x, z) {
    const y = ground(x, z);
    box(x, y + 3.7, z, 4, 7.4, 4, 0xc4a67d);
    box(x, y + 7.4, z, 4.4, .45, 4.4, 0xe1c39a);
    for (let i = -1; i <= 1; i++) {
      box(x + i * 1.5, y + 8, z + 1.8, .75, 1, .7, 0xd0b38c);
      box(x + i * 1.5, y + 8, z - 1.8, .75, 1, .7, 0xd0b38c);
    }
    box(x, y + 4.6, z + 2.03, .35, 1.2, .08, 0x655446);
  }
  const wall = [[-35,-9],[-27,-16],[13,-17],[33,-9],[35,7],[24,14],[-18,15],[-34,7],[-35,-9]];
  for (let edge = 1; edge < wall.length; edge++) {
    const [ax, az] = wall[edge - 1], [bx, bz] = wall[edge];
    const length = Math.hypot(bx - ax, bz - az), steps = Math.ceil(length / 1.35);
    const angle = -Math.atan2(bz - az, bx - ax);
    for (let i = 0; i < steps; i++) {
      const t = (i + .5) / steps, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      // Leave the entrance open between its gate towers.
      if (edge === 6 && x > 17) continue;
      const y = ground(x, z);
      box(x, y + 2.25, z, length / steps + .15, 4.5, 1.15, 0xbfa17b, angle);
      if (i % 2 === 0) box(x, y + 4.85, z, .75, .85, 1.2, 0xd8ba91, angle);
    }
    tower(ax, az);
  }
  const gateZ = 14.1, gateY = ground(20, gateZ);
  tower(17, gateZ); tower(23, gateZ);
  box(20, gateY + 5.3, gateZ, 3, 1.4, 2, 0xd8ba91);
  box(20, gateY + 5.3, gateZ + 1.03, .8, .65, .05, 0xa58762);

  function path(points, width, color) {
    const vertices = [], indices = [];
    for (let i = 0; i < points.length; i++) {
      const [x,z] = points[i], prev = points[Math.max(0,i-1)], next = points[Math.min(points.length-1,i+1)];
      const dx = next[0]-prev[0], dz = next[1]-prev[1], length = Math.hypot(dx,dz) || 1;
      for (const side of [-1,1]) {
        const px=x-dz/length*width*side, pz=z+dx/length*width*side;
        vertices.push(px,ground(px,pz)+.15,pz);
      }
      if(i) { const k=i*2; indices.push(k-2,k-1,k,k-1,k+1,k); }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3)); geometry.setIndex(indices); geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:1,side:THREE.DoubleSide})); mesh.receiveShadow=true;scene.add(mesh);
  }
  path([[20,13],[22,19],[26,24],[25,29],[19,35],[12,40],[9,47],[11,53],[20,61],[28,72]],1.3,0xd5c09a);

  const foliageGeometry = new THREE.IcosahedronGeometry(1, 1);
  const leaves = new THREE.MeshStandardMaterial({color:0x626044,roughness:1,flatShading:true});
  function olive(x,z,size) {
    const y=ground(x,z);
    box(x,y+size*1.2,z,.35*size,2.4*size,.35*size,0x69604a,.08);
    for(let i=0;i<5;i++) {
      const crown=new THREE.Mesh(foliageGeometry,leaves);
      const a=i*Math.PI*2/5;
      crown.position.set(x+Math.cos(a)*size,y+size*(2.5+random()*.5),z+Math.sin(a)*size);
      crown.scale.set(size*1.5,size*.9,size*1.2);crown.castShadow=true;scene.add(crown);
    }
  }
  [[-36,26,1.7],[-24,37,2.3],[37,31,2.6],[47,44,3.3],[-46,48,3.5],[9,30,1],[-15,24,1.1],[38,-22,1.5]].forEach(args=>olive(...args));
  // Larger near-camera vegetation provides the strongest parallax cue.
  olive(-44,68,4);olive(51,60,4.4);
  for (const [color, items] of batches) {
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({color:Number(color),roughness:1}),items.length);
    const dummy=new THREE.Object3D();
    items.forEach((item,i)=>{dummy.position.set(item.x,item.y,item.z);dummy.scale.set(item.w,item.h,item.d);dummy.rotation.y=item.rotation;dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
    mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);
  }

  // Soft cloud layers inspired by the supplied Canvallax example. The texture is
  // generated locally; depth and wind speed vary for each layer.
  const cloudCanvas = document.createElement('canvas');
  cloudCanvas.width = 512; cloudCanvas.height = 256;
  const cloudContext = cloudCanvas.getContext('2d');
  const clouds = [];
  if (cloudContext) {
    for (let i = 0; i < 45; i++) {
      const x = 110 + random() * 290, y = 100 + random() * 70;
      const radius = 30 + random() * 48;
      const puff = cloudContext.createRadialGradient(x,y,0,x,y,radius);
      puff.addColorStop(0,'rgba(255,250,237,0.18)');
      puff.addColorStop(.5,'rgba(255,250,237,0.09)');
      puff.addColorStop(1,'rgba(255,250,237,0)');
      cloudContext.fillStyle = puff;
      cloudContext.fillRect(x-radius,y-radius,radius*2,radius*2);
    }
    // Feather all texture boundaries before uploading; sprite quads must never show.
    cloudContext.globalCompositeOperation = 'destination-in';
    for (const [x2,y2] of [[512,0],[0,256]]) {
      const fade=cloudContext.createLinearGradient(0,0,x2,y2);
      fade.addColorStop(0,'rgba(255,255,255,0)');
      fade.addColorStop(.04,'rgba(255,255,255,0)');
      fade.addColorStop(.2,'white');fade.addColorStop(.8,'white');
      fade.addColorStop(.96,'rgba(255,255,255,0)');
      fade.addColorStop(1,'rgba(255,255,255,0)');
      cloudContext.fillStyle=fade;cloudContext.fillRect(0,0,512,256);
    }
    cloudContext.globalCompositeOperation = 'source-over';
    const texture = new THREE.CanvasTexture(cloudCanvas);
    texture.encoding = THREE.sRGBEncoding;
    const flippedTexture=texture.clone();
    flippedTexture.repeat.x=-1;flippedTexture.offset.x=1;flippedTexture.needsUpdate=true;
    for (let cluster=0;cluster<16;cluster++) {
      const depth=cluster/15;
      const count=4+cluster%3;
      const anchorX=-175+cluster*24,anchorY=35+random()*15;
      for(let member=0;member<count;member++) {
        const material=new THREE.SpriteMaterial({map:(cluster+member)%2?flippedTexture:texture,
          transparent:true,rotation:(random()-.5)*.65,opacity:.16+depth*.12,
          depthWrite:false,fog:false,toneMapped:false});
        const cloud=new THREE.Sprite(material);
        cloud.position.set(anchorX+(member-(count-1)/2)*6,anchorY+(random()-.5)*5,-155+depth*85);
        const size=.35+random()*.8;
        cloud.scale.set((30+depth*22)*size,(12+depth*8)*size,1);
        cloud.userData.speed=.6+depth*.8;
        cloud.userData.windX=cloud.position.x;
        cloud.userData.baseY=cloud.position.y;
        cloud.userData.depth=depth;
        scene.add(cloud);clouds.push(cloud);
      }
    }
  }
  // Original lightweight silhouettes with hinged wings, inspired by the bird reference.
  // These share the scene clock so pause, hidden tabs, and reduced motion stop the flock.
  const birds=[];
  let flightTime=0;
  for(let i=0;i<9;i++) {
    const element=document.createElement('div');
    element.className='city-bird';
    element.innerHTML='<svg viewBox="-36 -24 72 48" xmlns="http://www.w3.org/2000/svg"><g class="bird-wing-left"><path d="M0 1C-8-10-23-13-34-5C-22-8-12-1-3 5Z"/></g><g class="bird-wing-right"><path d="M0 1C8-10 23-13 34-5C22-8 12-1 3 5Z"/></g><path d="M-3 0Q0-6 3 0L6 9 0 6-6 9Z"/></svg>';
    const size=.52+(i%4)*.19;
    element.style.width=`${28+size*23}px`;
    element.style.opacity=String(.55+size*.28);
    host.appendChild(element);
    birds.push({element,left:element.querySelector('.bird-wing-left'),right:element.querySelector('.bird-wing-right'),
      phase:.42+i*.064,direction:i<6?1:-1,duration:24+(i%4)*5,
      height:.14+(i%5)*.067,size,wingPhase:i*1.7});
  }

  // Masonry and sunlight are static, so their shadow map can be reused as clouds drift.
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;

  const target={x:0,y:0,travel:0},current={x:0,y:0,travel:0};
  let frame=0, visible=true, lost=false, lastDraw=0;
  function render(now) {
    frame=0;
    if(document.hidden || !visible || lost)return;
    if (!paused && lastDraw && now-lastDraw < 1000/30) {
      frame=requestAnimationFrame(render); return;
    }
    const elapsed=lastDraw ? Math.min((now-lastDraw)/1000,.1) : 1/30;
    lastDraw=now;
    const damping=1-Math.exp(-elapsed/.65);
    if(!paused)flightTime+=elapsed;
    if (!paused) for (const cloud of clouds) {
      cloud.userData.windX-=cloud.userData.speed*elapsed;
      if (cloud.userData.windX < -210) cloud.userData.windX=210;
    }
    let difference=0;
    if (!paused) for(const key of Object.keys(current)) {
      const desired=target[key];
      current[key]+=(desired-current[key])*damping;
      difference+=Math.abs(desired-current[key]);
    }
    for (const cloud of clouds) {
      cloud.position.x=cloud.userData.windX-current.travel*(12+cloud.userData.depth*24);
      cloud.position.y=cloud.userData.baseY+current.travel*(4+cloud.userData.depth*9);
    }
    fogLayers.forEach((layer,index)=>{
      const depth=1+(index%4)*.3;
      const rise=host.clientHeight*Number(layer.dataset.rise)/100;
      layer.style.transform=`translate3d(${current.travel*depth*-40}px,${-current.travel*rise}px,0) rotate(var(--cloud-angle,0deg)) scaleX(var(--cloud-flip,1))`;
    });
    birds.forEach(bird=>{
      const progress=((bird.phase+flightTime/bird.duration*bird.direction)%1+1)%1;
      const x=(-.12+progress*1.24)*host.clientWidth;
      const y=(bird.height+Math.sin(flightTime*.35+bird.wingPhase)*.018-current.travel*.1*bird.size)*host.clientHeight;
      bird.element.style.transform=`translate3d(${x}px,${y}px,0) scaleX(${bird.direction}) rotate(${Math.cos(flightTime*.45+bird.wingPhase)*5}deg)`;
      const beat=Math.sin(flightTime*9+bird.wingPhase)*31;
      bird.left.setAttribute('transform',`rotate(${beat})`);
      bird.right.setAttribute('transform',`rotate(${-beat})`);
    });
    const angle=.58+current.x*.13+current.travel*.19;
    hillBackdrop.rotation.y=angle;
    const radius=137-current.travel*10;
    camera.position.set(Math.sin(angle)*radius,66+current.y*7+current.travel*3,Math.cos(angle)*radius);
    camera.lookAt(0,10,0);
    renderer.render(scene,camera);
    host.dataset.state='ready';
    if(!paused && (clouds.length || birds.length || difference>.001))frame=requestAnimationFrame(render);
  }
  function requestRender(){if(!frame&&!document.hidden&&visible&&!lost)frame=requestAnimationFrame(render);}
  function resize(){
    syncWindowScroll();
    const width=host.clientWidth,height=host.clientHeight;
    if(!width||!height)return;
    camera.aspect=width/height;
    camera.setViewOffset(width,height,width>800?-width*.16:0,width<=800?height*.22:0,width,height);
    camera.updateProjectionMatrix();renderer.setSize(width,height);requestRender();
  }
  function updateToggle(){toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Resume movement':'Pause movement';viewpoint.disabled=paused;}
  toggle.addEventListener('click',()=>{paused=!paused;updateToggle();requestRender();});
  viewpoint.addEventListener('input',()=>{target.x=Number(viewpoint.value);requestRender();});
  window.addEventListener('pointermove',event=>{
    if(paused||event.pointerType==='touch')return;
    target.x=event.clientX/innerWidth*2-1;target.y=event.clientY/innerHeight*2-1;
    viewpoint.value=String(target.x);requestRender();
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{target.x=0;target.y=0;requestRender();});
  const storyList=document.querySelector('.comic-list');
  function syncWindowScroll() {
    const listRange=storyList ? storyList.scrollHeight-storyList.clientHeight : 0;
    const pageRange=document.documentElement.scrollHeight-innerHeight;
    const progress=listRange>0 ? storyList.scrollTop/listRange : scrollY/Math.max(1,pageRange);
    target.travel=Math.max(0,Math.min(1,progress));
    requestRender();
  }
  storyList?.addEventListener('scroll',syncWindowScroll,{passive:true});
  window.addEventListener('scroll',syncWindowScroll,{passive:true});
  window.addEventListener('resize',syncWindowScroll,{passive:true});
  if(storyList)new ResizeObserver(syncWindowScroll).observe(storyList);
  syncWindowScroll();
  reduced.addEventListener('change',()=>{paused=reduced.matches;updateToggle();requestRender();});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(frame);frame=0;lastDraw=0;}
    else requestRender();
  });
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)requestRender();else{cancelAnimationFrame(frame);frame=0;lastDraw=0;}}).observe(host);
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;host.dataset.state='fallback';toggle.hidden=true;viewpoint.closest('label').hidden=true;});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{lost=false;toggle.hidden=false;viewpoint.closest('label').hidden=false;resize();});
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);frame=0;});
  window.addEventListener('pageshow',requestRender);
  updateToggle();resize();
})();
