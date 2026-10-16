/* Optional whale scene for the shared story player. */
window.JonahWhaleScene = (()=>{
 const el=s=>document.querySelector(s);
 let initialized=false, resizeObserver;
    let renderer, scene, camera, ribs = [], strands = [], debris = [], shadowBeast, glow;
    function initWhale3D() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.set(0, 0, 2);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(480, 480);

      scene.fog = new THREE.FogExp2(0x0a1930, 0.1);
      scene.add(new THREE.AmbientLight(0x1a2e44, 1.1));

      glow = new THREE.PointLight(0x4ECDC4, 2.2, 15); // Cool bioluminescent glow
      glow.position.set(0, 0, -2);
      scene.add(glow);
      const warm = new THREE.PointLight(0xFFD84D, 1.2, 12); // Warm lantern flicker
      warm.position.set(0.5, -0.5, -1);
      scene.add(warm);

      // A deep red heart-glow throbbing somewhere down the throat
      const heartLight = new THREE.PointLight(0xff2200, 0, 22);
      heartLight.position.set(-0.3, 0.15, -9);
      scene.add(heartLight);

      // Ribs — irregular, fleshy loops instead of clean rings
      const ribMat = new THREE.MeshToonMaterial({ color: 0x3a2a4a });
      for (let i = 0; i < 14; i++) {
        const geo = new THREE.TorusGeometry(2 + Math.sin(i * 1.3) * 0.15, 0.1 + Math.random() * 0.05, 8, 20);
        const pos = geo.attributes.position;
        for (let v = 0; v < pos.count; v++) {
          const n = Math.sin(v * 12.9 + i) * 0.025;
          pos.setXYZ(v, pos.getX(v) + n, pos.getY(v) + n, pos.getZ(v));
        }
        geo.computeVertexNormals();
        const rib = new THREE.Mesh(geo, ribMat.clone());
        rib.position.z = -i * 1.6;
        rib.rotation.x = Math.PI / 2;
        rib.rotation.z = Math.random() * Math.PI;
        rib.userData.baseScale = 0.94 + Math.random() * 0.12;
        rib.userData.phase = Math.random() * Math.PI * 2;
        scene.add(rib);
        ribs.push(rib);
      }

      // Writhing muscle strands running the length of the throat
      const strandMat = new THREE.MeshToonMaterial({ color: 0x4a1f3a });
      for (let s = 0; s < 5; s++) {
        const angle = (s / 5) * Math.PI * 2;
        const curvePts = [];
        for (let p = 0; p < 10; p++) { curvePts.push(new THREE.Vector3(Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, -p * 2)); }
        const curve = new THREE.CatmullRomCurve3(curvePts);
        const geo = new THREE.TubeGeometry(curve, 40, 0.045, 6, false);
        const strand = new THREE.Mesh(geo, strandMat.clone());
        strand.userData.phase = Math.random() * Math.PI * 2;
        scene.add(strand);
        strands.push(strand);
      }

      // Drifting debris catching the bioluminescent light — bone and grit
      const debrisGeo = new THREE.IcosahedronGeometry(0.035, 0);
      const debrisMat = new THREE.MeshBasicMaterial({ color: 0xcfd8dc, transparent: true, opacity: 0.5 });
      for (let d = 0; d < 20; d++) {
        const bit = new THREE.Mesh(debrisGeo, debrisMat);
        bit.position.set((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, -Math.random() * 18);
        bit.userData.speed = 0.008 + Math.random() * 0.015;
        bit.userData.drift = Math.random() * Math.PI * 2;
        scene.add(bit);
        debris.push(bit);
      }

      // Something else drifts in the dark, then vanishes back into it
      const beastGeo = new THREE.SphereGeometry(0.85, 12, 8);
      const beastMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
      shadowBeast = new THREE.Mesh(beastGeo, beastMat);
      shadowBeast.position.set(-1.5, -0.3, -12);
      scene.add(shadowBeast);

      let heartbeatClock = 0, nextJolt = 6 + Math.random() * 5;

      function animate() {
        requestAnimationFrame(animate);
        const t = performance.now() * 0.0005;
        const dt = 1 / 60;

        camera.position.x = Math.sin(t) * 0.15;
        camera.position.y = Math.cos(t * 0.8) * 0.1;
        warm.intensity = 1.0 + Math.sin(t * 23) * 0.2 + Math.sin(t * 37) * 0.15 + (Math.random() - 0.5) * 0.1; // Lantern flicker
        glow.intensity = 2.0 + Math.sin(t * 2.2) * 0.5; // Slow bioluminescent pulse

        // Heartbeat rhythm — lub-dub — deep in the whale's throat
        heartbeatClock += dt;
        const cyc = heartbeatClock % 2.6;
        let beat = 0;
        if (cyc < 0.18) beat = Math.sin((cyc / 0.18) * Math.PI);
        else if (cyc > 0.32 && cyc < 0.55) beat = Math.sin(((cyc - 0.32) / 0.23) * Math.PI) * 0.7;
        heartLight.intensity = beat * 3.2;

        // Ribs breathe and creep past — the tunnel closing and opening
        ribs.forEach((r, i) => {
          r.position.z += 0.012;
          if (r.position.z > 3) { r.position.z = -19; r.userData.phase = Math.random() * Math.PI * 2; }
          const breathe = r.userData.baseScale + Math.sin(t * 1.6 + r.userData.phase) * 0.06 + beat * 0.03;
          r.scale.set(breathe, breathe, 1);
          r.rotation.z += 0.0015 * (i % 2 === 0 ? 1 : -1);
        });

        // Muscle strands writhe like something alive
        strands.forEach(s => {
          s.rotation.z = Math.sin(t * 0.6 + s.userData.phase) * 0.09;
          s.position.z = ((s.position.z + 0.012 + 22) % 22) - 19;
          s.material.color.setHSL(0.85, 0.4, 0.14 + beat * 0.08);
        });

        // Debris drifts toward camera then loops back into the dark
        debris.forEach(b => {
          b.position.z += b.userData.speed;
          b.position.x += Math.sin(t + b.userData.drift) * 0.001;
          if (b.position.z > 2.5) { b.position.z = -18; b.position.x = (Math.random() - 0.5) * 3; b.position.y = (Math.random() - 0.5) * 3; }
        });

        // Something large shifts in the shadows, briefly visible, then gone
        const beastCycle = (t * 0.15) % 1;
        shadowBeast.material.opacity = beastCycle < 0.15 ? Math.sin((beastCycle / 0.15) * Math.PI) * 0.35 : 0;
        shadowBeast.position.x = -1.5 + Math.sin(t * 0.3) * 1.5;

        // Occasional convulsion — the whale's belly shudders around Jonah
        nextJolt -= dt;
        if (nextJolt <= 0) {
          nextJolt = 7 + Math.random() * 8;
          const wrap = el('#whale3d');
          if (wrap && wrap.classList.contains('active')) {
            wrap.classList.remove('whale-jolt'); void wrap.offsetWidth; wrap.classList.add('whale-jolt');
          }
        }

        renderer.render(scene, camera);
      }
      animate();
    }

 return {mount({act,graphicContainer}){
  if(act.id!=='trapped')return;
  try{if(!initialized){initWhale3D();initialized=true;}graphicContainer.appendChild(renderer.domElement);
  resizeObserver?.disconnect();
  const resize=()=>{const rect=graphicContainer.getBoundingClientRect();if(rect.width&&rect.height){renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();}};
  resizeObserver=new ResizeObserver(resize);resizeObserver.observe(graphicContainer);requestAnimationFrame(resize);
  renderer.domElement.classList.add('three-canvas');renderer.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none';}catch(error){console.warn('Whale scene unavailable; SVG artwork remains visible.',error);}
 }};
})();
