/* Shared journey landscape: faceted terrain and miniature stone towns. */
(() => {
 const host=document.querySelector('#journeyMap'),THREE=window.THREE;
 if(!host||!THREE)return;
 let renderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});}catch{return;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputEncoding=THREE.sRGBEncoding;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;
 renderer.setClearColor(0x76c9d7);renderer.domElement.className='journey-terrain';renderer.domElement.setAttribute('aria-hidden','true');host.prepend(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-50,50,150,-150,.1,1000);
 camera.position.set(0,-110,420);camera.lookAt(0,0,0);
 scene.add(new THREE.HemisphereLight(0xfff1d3,0x66764f,.7));
 const sun=new THREE.DirectionalLight(0xffd49a,.85);sun.position.set(-80,100,180);scene.add(sun);
 const material=color=>new THREE.MeshStandardMaterial({color,roughness:1,flatShading:true});
 const sand=material(0xe6bd78),grass=material(0x91b36c),stone=material(0xffe0a5),roof=material(0xcc9055),green=material(0x47875f),water=material(0x62bfd4);
 const coast=y=>-24+7*Math.sin(y*.012)+3*Math.sin(y*.038);
 const height=(x,y)=>x<coast(y)?-2:1+6*Math.exp(-(((x-2)/13)**2))*(0.55+.45*Math.sin(y*.055)**2)+2*Math.sin(x*.08+y*.021)**2;
 const geometry=new THREE.PlaneGeometry(110,340,50,140),p=geometry.attributes.position,colors=[];
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,height(x,y));const c=new THREE.Color(x<coast(y)?0x73cddd:y< -70?0xe6be7e:0xb9c785);c.multiplyScalar(1+.035*Math.sin(i*17));colors.push(c.r,c.g,c.b);}
 geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();
 scene.add(new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true})));
 function lake(x,y,w,h){const mesh=new THREE.Mesh(new THREE.CircleGeometry(1,32),water);mesh.scale.set(w,h,1);mesh.position.set(x,y,9);scene.add(mesh);}
 lake(23,103,4.5,9);lake(22,-30,5.5,17);
 const river=[];for(let y=-20;y<=99;y+=2)river.push(new THREE.Vector3(23+Math.sin(y*.055),y,9.1));
 scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(river),100,.45,5,false),water));
 const boxGeometry=new THREE.BoxGeometry(1,1,1);
 function box(x,y,z,w,d,h,mat){const mesh=new THREE.Mesh(boxGeometry,mat);mesh.position.set(x,y,z+h/2);mesh.scale.set(w,d,h);scene.add(mesh);}
 // Warm limestone villages echo the City of David on the cover.
 for(const [cx,cy] of [[-8,110],[5,58],[-2,-8],[9,-75],[24,135]]){
  for(let i=0;i<15;i++){const x=cx+(i%5-2)*2.2,y=cy+(Math.floor(i/5)-1)*2.7,z=height(x,y),h=1.5+(Math.sin(i*9)+1)*1.5;box(x,y,z,1.8,2.1,h,stone);box(x,y,z+h,2,2.3,.25,roof);}
 }
 const trunk=material(0x9e7345),treeGeometry=new THREE.ConeGeometry(1.4,4,6);treeGeometry.rotateX(Math.PI/2);
 for(let i=0;i<85;i++){const x=-14+(Math.sin(i*37)+1)*27,y=-145+(i*47%290);if(x<coast(y)+3)continue;const z=height(x,y);box(x,y,z,.35,.35,2,trunk);const tree=new THREE.Mesh(treeGeometry,green);tree.position.set(x,y,z+3);scene.add(tree);}
 // Low polygon desert ridges and rocky peaks.
 const mountainGeometry=new THREE.ConeGeometry(5,9,5);mountainGeometry.rotateX(Math.PI/2);
 for(let i=0;i<16;i++){const x=33+7*Math.sin(i*3),y=-145+i*18;const m=new THREE.Mesh(mountainGeometry,i<5?sand:grass);m.position.set(x,y,height(x,y)+3);scene.add(m);}
 host.dataset.terrain='ready';let queued=false;
 function draw(){queued=false;const width=host.clientWidth,total=host.clientHeight,rect=host.getBoundingClientRect(),viewport=host.closest('.map-layout')?.getBoundingClientRect(),top=Math.max(0,viewport?.top||0),bottom=Math.min(innerHeight,viewport?.bottom||innerHeight),offset=Math.max(0,Math.min(total-1,top-rect.top)),visible=Math.max(1,Math.min(total-offset,bottom-Math.max(top,rect.top)+2));
  if(rect.bottom<0||rect.top>innerHeight)return;
  renderer.setSize(width,visible,false);renderer.domElement.style.top=offset+'px';renderer.domElement.style.height=visible+'px';
  camera.left=-55;camera.right=55;camera.top=165;camera.bottom=-165;camera.setViewOffset(width,total,0,offset,width,visible);camera.updateProjectionMatrix();renderer.render(scene,camera);
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(draw);}}
 host.closest('.map-layout')?.addEventListener('scroll',schedule,{passive:true});addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);new ResizeObserver(schedule).observe(host);draw();
 renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();host.dataset.terrain='fallback';});
 renderer.domElement.addEventListener('webglcontextrestored',()=>{host.dataset.terrain='ready';schedule();});
})();
