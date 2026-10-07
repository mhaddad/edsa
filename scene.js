import * as THREE from 'three';
import {OrbitControls} from './assets/OrbitControls.js';
import {stations,organizations} from './simulation.js';
const C={ink:0xf2f2f2,graphite:0x232323,green:0x00f993,cyan:0x00d7ff,magenta:0xf9028d,yellow:0xf9d002};
export class FactoryScene {
 constructor(canvas,container,onSelect){
  this.canvas=canvas;this.container=container;this.onSelect=onSelect;this.time=0;this.groups={};this.labels={};this.rings={};this.actors=[];this.packets=[];this.telemetry=[];this.selected='darkside';this.active='client';this.showEvidence=true;this.topView=false;
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'default'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.setClearColor(C.graphite,0);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.15;
  this.scene=new THREE.Scene();this.scene.background=new THREE.Color(C.graphite);this.camera=new THREE.OrthographicCamera(-30,30,20,-20,.1,160);this.camera.position.set(34,39,47);this.camera.lookAt(0,0,0);
  this.controls=new OrbitControls(this.camera,canvas);this.controls.target.set(0,0,0);this.controls.enableDamping=true;this.controls.dampingFactor=.08;this.controls.enablePan=true;this.controls.minZoom=.65;this.controls.maxZoom=2.7;this.controls.minPolarAngle=.18;this.controls.maxPolarAngle=1.25;this.controls.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN};this.controls.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN};
  this.scene.add(new THREE.AmbientLight(C.ink,1.6));const hemi=new THREE.HemisphereLight(C.ink,0x232323,2.2);this.scene.add(hemi);const key=new THREE.DirectionalLight(C.ink,3.4);key.position.set(-18,35,20);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-36,right:36,top:30,bottom:-30,near:1,far:90});key.shadow.bias=-.0008;this.scene.add(key);const fill=new THREE.DirectionalLight(C.cyan,.55);fill.position.set(20,14,-25);this.scene.add(fill);
  this.buildFloor();organizations.forEach(o=>this.buildOrganization(o));stations.forEach((s,i)=>this.buildStation(s,i));this.buildRoutes();this.resize();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(container);
  this.raycaster=new THREE.Raycaster();this.mouse=new THREE.Vector2();let down;canvas.addEventListener('pointerdown',e=>down={x:e.clientX,y:e.clientY});canvas.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>5)return;const r=canvas.getBoundingClientRect();this.mouse.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.mouse,this.camera);const hits=this.raycaster.intersectObjects(this.scene.children,true);const hit=hits.find(h=>h.object.userData.station);if(hit)this.onSelect(hit.object.userData.station);});
 }
 material(color,extra={}){return new THREE.MeshStandardMaterial({color,roughness:.55,metalness:.12,...extra});}
 box(parent,w,h,d,x,y,z,color=C.ink,extra={}){const geo=new THREE.BoxGeometry(w,h,d);const mesh=new THREE.Mesh(geo,this.material(color,extra));mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 cylinder(parent,r,h,x,y,z,color,extra={},sides=20){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,sides),this.material(color,extra));mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 sphere(parent,r,x,y,z,color){const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,12,10),this.material(color));mesh.position.set(x,y,z);mesh.castShadow=true;parent.add(mesh);return mesh;}
 line(parent,points,color,opacity=1,dashed=false){const geo=new THREE.BufferGeometry().setFromPoints(points);const mat=dashed?new THREE.LineDashedMaterial({color,transparent:true,opacity,dashSize:.3,gapSize:.28}):new THREE.LineBasicMaterial({color,transparent:true,opacity});const l=new THREE.Line(geo,mat);if(dashed)l.computeLineDistances();parent.add(l);return l;}
 tube(parent,a,b,r,color,extra={}){const delta=new THREE.Vector3().subVectors(b,a);const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,delta.length(),10),this.material(color,extra));m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());m.castShadow=true;parent.add(m);return m;}
 sign(parent,text,w,x,y,z,color=C.ink,bg=C.graphite){const cn=document.createElement('canvas');cn.width=512;cn.height=112;const cx=cn.getContext('2d');cx.fillStyle='#'+bg.toString(16).padStart(6,'0');cx.fillRect(0,0,512,112);cx.fillStyle='#'+color.toString(16).padStart(6,'0');cx.font='500 39px Sora';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(text,256,58,480);const tx=new THREE.CanvasTexture(cn);tx.colorSpace=THREE.SRGBColorSpace;const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,w*112/512),new THREE.MeshBasicMaterial({map:tx,side:THREE.DoubleSide}));mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
 buildFloor(){
  this.box(this.scene,46,.65,29,0,-.48,0,0x373a39);this.box(this.scene,45.8,.12,28.8,0,-.1,0,0x2d302f);
  for(let x=-22;x<=22;x+=2)this.line(this.scene,[new THREE.Vector3(x,-.03,-14),new THREE.Vector3(x,-.03,14)],C.ink,.055);
  for(let z=-14;z<=14;z+=2)this.line(this.scene,[new THREE.Vector3(-22,-.03,z),new THREE.Vector3(22,-.03,z)],C.ink,.055);
  this.line(this.scene,[[-23,0,-14.5],[23,0,-14.5],[23,0,14.5],[-23,0,14.5],[-23,0,-14.5]].map(p=>new THREE.Vector3(...p)),C.ink,.28);
  for(let i=0;i<22;i++){this.box(this.scene,.13,.05,.7,-21+i*2,.02,14.15,i%2?C.graphite:C.ink);}
  const plane=this.box(this.scene,180,.25,160,0,-1,0,C.graphite);plane.receiveShadow=true;
 }
 buildOrganization(o){
  const g=new THREE.Group();g.position.set(o.x,0,o.z);this.scene.add(g);this.groups[o.id]=g;
  const w=o.width,d=o.depth;
  this.box(g,w,.14,d,0,.02,0,0x34453d);
  this.line(g,[[-w/2,.14,-d/2],[w/2,.14,-d/2],[w/2,.14,d/2],[-w/2,.14,d/2],[-w/2,.14,-d/2]].map(p=>new THREE.Vector3(...p)),o.color,.95);
  // Une façade ouverte permet de voir la seule équipe à l'intérieur de l'entreprise.
  for(const [x,z] of [[-w/2,-d/2],[w/2,-d/2],[-w/2,d/2]])this.box(g,.18,4.4,.18,x,2.3,z,C.ink);
  this.box(g,w+.18,.19,.22,0,4.5,-d/2,C.ink);
  this.box(g,.22,.19,d,-w/2,4.5,0,C.ink);
  this.box(g,w,3.65,.05,0,2,-d/2,C.cyan,{transparent:true,opacity:.08,depthWrite:false});
  this.box(g,.05,3.65,d,-w/2,2,0,C.cyan,{transparent:true,opacity:.06,depthWrite:false});
  this.sign(g,'ATELIÊ DE SOFTWARE',7.5,0,4.95,-d/2+.03,C.ink);
  g.traverse(obj=>{if(obj.isMesh)obj.userData.station=o.id;});
  const label=document.createElement('button');label.className='company-label';label.dataset.organization=o.id;label.setAttribute('aria-label',`Explorar a empresa ${o.name}`);
  const logo=document.querySelector('.identity img').cloneNode();logo.alt=o.name;label.append(logo);const type=document.createElement('span');type.textContent='EMPRESA';label.append(type);label.addEventListener('click',()=>this.onSelect(o.id));document.getElementById('labels').append(label);this.labels[o.id]=label;
 }
 buildStation(s,i){
  const g=new THREE.Group(),parent=organizations.find(o=>o.id===s.parent);g.position.set(s.x-(parent?.x||0),0,s.z-(parent?.z||0));(parent?this.groups[parent.id]:this.scene).add(g);this.groups[s.id]=g;
  const w=s.width||7,d=s.depth||6;this.box(g,w,.28,d,0,.12,0,0x404544);this.box(g,w-.2,.09,d-.2,0,.31,0,0x2c302f);
  this.line(g,[[-w/2,.32,-d/2],[w/2,.32,-d/2],[w/2,.32,d/2],[-w/2,.32,d/2],[-w/2,.32,-d/2]].map(p=>new THREE.Vector3(...p)),s.color,.65);
  const ring=new THREE.Mesh(new THREE.RingGeometry(1.05,1.14,48),new THREE.MeshBasicMaterial({color:s.color,transparent:true,opacity:.5,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.set(0,.4,0);g.add(ring);this.rings[s.id]=ring;
  if(s.kind==='team-design')this.buildTeamDesign(g,s.color);
  if(s.kind==='harness')this.buildHarness(g,s.color);
  if(s.kind==='memory')this.buildMemory(g,s.color);
  if(s.kind==='control')this.buildControl(g,s.color);
  if(s.kind==='quality')this.buildQuality(g,s.color);
  if(s.kind==='staging'||s.kind==='production')this.buildCloud(g,s.color,s.kind==='production');
  if(s.kind==='client')this.buildClient(g,s.color);
  g.traverse(o=>{if(o.isMesh)o.userData.station=s.id;});
  const label=document.createElement('button');label.className='station-label';label.dataset.station=s.id;label.innerHTML=`<span class="num">${String(i+1).padStart(2,'0')}</span><span>${s.name}</span><i class="station-light"></i><span class="workload-badge" hidden></span>`;label.setAttribute('aria-label',`Explorar ${s.name}`);label.addEventListener('click',()=>this.onSelect(s.id));document.getElementById('labels').append(label);this.labels[s.id]=label;
 }
 human(parent,x,z,color=C.ink,robot=false,scale=1){const g=new THREE.Group();g.position.set(x,.38,z);g.scale.setScalar(scale);parent.add(g);this.box(g,.45,.85,.35,0,.9,0,color);this.box(g,.17,.62,.18,-.13,.32,0,C.graphite);this.box(g,.17,.62,.18,.13,.32,0,C.graphite);if(robot){this.box(g,.52,.44,.43,0,1.55,0,C.ink);this.box(g,.38,.13,.02,0,1.56,.23,C.graphite);this.box(g,.21,.04,.025,0,1.57,.245,C.green);this.cylinder(g,.04,.2,0,1.88,0,C.green);}else{this.sphere(g,.25,0,1.55,0,C.ink);this.box(g,.43,.15,.42,0,1.71,0,C.graphite);}
  const arm=this.box(g,.13,.65,.14,-.32,1.03,0,color);arm.rotation.z=-.35;this.box(g,.13,.65,.14,.32,1.03,0,color).rotation.z=.35;this.actors.push({g,arm,seed:this.actors.length*1.3,base:g.position.y});return g;
 }
 monitor(parent,x,y,z,color,w=.9){this.box(parent,w,.65,.1,x,y,z,C.graphite);this.box(parent,w-.1,.5,.02,x,y,z+.065,color,{emissive:color,emissiveIntensity:.18});this.box(parent,.09,.22,.08,x,y-.42,z,C.ink);this.box(parent,.45,.05,.25,x,y-.53,z,C.graphite);for(let i=0;i<3;i++)this.box(parent,w*.6,.035,.02,x,y+.13-i*.12,z+.083,C.graphite);}
 desk(parent,x,z,color){this.box(parent,2,1,1.1,x,.9,z,C.graphite);this.box(parent,2.15,.12,1.2,x,1.46,z,C.ink);this.monitor(parent,x,2.12,z-.2,color);this.box(parent,.7,.04,.23,x,1.55,z+.3,C.graphite);}
 buildTeamDesign(g,color){
  this.box(g,7.2,.1,15.4,0,.4,0,C.ink);
  this.box(g,6.3,2.7,.12,0,1.81,-6.6,C.graphite);this.sign(g,'DISCOVERY / DESIGN',4.5,0,3.04,-6.52,color);
  for(let i=0;i<9;i++)this.box(g,.58,.3,.045,-2.2+(i%3)*.88,2.62-Math.floor(i/3)*.48,-6.5,i%3===0?color:i%3===1?C.cyan:C.ink);
  this.box(g,2.4,1.75,.04,1.58,1.9,-6.5,C.ink);for(let i=0;i<4;i++)this.box(g,1.82,.08,.025,1.58,2.45-i*.3,-6.46,C.graphite);
  this.box(g,4.4,.15,2.4,0,1.15,-3.5,C.graphite);this.box(g,2.6,.035,1.35,0,1.25,-3.5,C.ink);this.box(g,.7,.03,.4,-.65,1.3,-3.5,color);
  this.human(g,-2.8,-3.5,C.ink);this.human(g,2.8,-3.5,C.graphite);this.human(g,0,-1.55,C.ink,false,.85);
  this.line(g,[new THREE.Vector3(-3.2,.48,-.2),new THREE.Vector3(3.2,.48,-.2)],color,.7);
  for(const [x,z] of [[-1.65,1.6],[1.65,1.6],[-1.65,4.7],[1.65,4.7]]){this.desk(g,x,z,color);this.human(g,x+.7,z+.7,C.graphite,false,.75);}
  this.sign(g,'DEV',2.2,0,1.2,7.55,C.graphite,C.ink);
 }
 buildHarness(g,color){
  this.box(g,5.3,.6,3.5,0,.7,-.15,C.graphite);this.box(g,4.8,.13,3,0,1.09,-.15,C.ink);this.box(g,3.2,.08,2,0,1.2,-.15,0x303a35);
  for(let x=-2.4;x<=2.4;x+=4.8)this.box(g,.18,3.7,.18,x,2.3,-1.3,C.ink);this.box(g,5.1,.28,1.1,0,4.2,-1.3,C.graphite);this.sign(g,'DARKSIDE',3.5,0,4.19,-.72,color);
  for(let i=0;i<2;i++){const x=i?-1.9:1.9;this.cylinder(g,.33,.5,x,1.43,-.15,C.graphite);this.sphere(g,.23,x,1.8,-.15,color);this.tube(g,new THREE.Vector3(x,1.8,-.15),new THREE.Vector3(x*.5,2.6,-.15),.14,C.ink);this.sphere(g,.21,x*.5,2.6,-.15,color);this.tube(g,new THREE.Vector3(x*.5,2.6,-.15),new THREE.Vector3(x*.16,1.8,.1),.12,C.ink);this.box(g,.4,.12,.5,x*.16,1.73,.1,C.graphite);}
  const core=this.box(g,1,.65,.9,0,1.64,0,color,{emissive:color,emissiveIntensity:.35});core.rotation.y=.2;
  this.human(g,-2.25,2,C.ink,true,.8);this.human(g,.25,2,C.ink,true,.8);this.human(g,2.25,2,C.ink,true,.8);
 }
 buildMemory(g,color){for(let j=0;j<2;j++){const x=-1.8+j*3.6;this.box(g,2.45,3.05,1.2,x,1.93,-.5,C.graphite);for(let k=0;k<3;k++){this.box(g,2.3,.12,1.15,x,.6+k*1.02,-.48,C.ink);for(let i=0;i<5;i++)this.box(g,.27,.65,.72,x-.85+i*.43,1.02+k*1.02,-.37,(i+k)%3===0?color:(i+k)%3===1?C.ink:C.green);}}this.sign(g,'.darkside/',3.5,0,3.7,.19,color);this.cylinder(g,.5,.55,0,.77,1.8,C.ink);this.cylinder(g,.55,.1,0,1.1,1.8,color);}
 buildControl(g,color){
  this.cylinder(g,2.05,.22,0,.5,0,C.graphite,{},40);this.cylinder(g,1.5,.2,0,.73,0,C.ink,{},40);this.cylinder(g,.8,2.8,0,2.24,0,C.graphite,{},24);const core=this.cylinder(g,.54,2.35,0,2.32,0,color,{transparent:true,opacity:.65,emissive:color,emissiveIntensity:.6});
  for(let j=0;j<3;j++){const ring=new THREE.Mesh(new THREE.TorusGeometry(1.12+j*.23,.038,8,48),this.material(j===1?C.green:color,{emissive:color,emissiveIntensity:.3}));ring.rotation.x=Math.PI/2;ring.position.y=1.05+j*1.3;g.add(ring);}
  for(let i=0;i<5;i++){const a=i*Math.PI*.4;const x=2.3*Math.cos(a),z=2.3*Math.sin(a);this.cylinder(g,.13,.3,x,.55,z,C.ink);this.sphere(g,.12,x,.8,z,color);this.line(g,[new THREE.Vector3(x,.77,z),new THREE.Vector3(0,2.4,0)],color,.4);}
  this.box(g,4.8,.8,.18,0,3.85,1.1,C.graphite);this.sign(g,'EDSA.IA',3.6,0,3.85,1.21,color);
 }
 buildQuality(g,color){this.box(g,5.5,2.3,.65,0,1.55,-1.8,C.graphite);this.sign(g,'VERIFY / CI',3.5,0,2.85,-1.43,color);for(let i=0;i<3;i++){const x=-1.65+i*1.65;this.box(g,1.4,1.25,.08,x,1.65,-1.43,C.ink);this.box(g,1.16,1,.02,x,1.65,-1.37,C.graphite);for(let k=0;k<4;k++)this.box(g,.79,.06,.035,x,1.97-k*.2,-1.34,color);}
  this.box(g,4.5,.9,1.5,0,.9,.3,C.ink);for(let x=-1.6;x<=1.6;x+=1.6){this.box(g,1,.08,.65,x,1.4,.3,C.graphite);this.box(g,.25,.5,.3,x,1.7,.3,color,{emissive:color,emissiveIntensity:.2});}
  this.human(g,-2.4,1.8,C.ink,true,.85);this.human(g,2.4,1.8,C.graphite,false,.85);
 }
 buildCloud(g,color,prod){
  this.box(g,6.1,.1,5.4,0,.42,-.1,C.ink);for(let i=0;i<3;i++){const x=-1.9+i*1.65;this.box(g,1.15,3.3,1.65,x,2.15,-.9,C.graphite);this.box(g,1.03,3.1,.06,x,2.15,-.04,0x38413e);for(let j=0;j<6;j++){this.box(g,.88,.36,.07,x,.91+j*.48,.01,C.graphite);this.box(g,.12,.045,.035,x-.25,.95+j*.48,.067,prod?C.green:color,{emissive:prod?C.green:color,emissiveIntensity:.8});this.box(g,.4,.04,.025,x+.11,.95+j*.48,.07,C.ink);}}
  this.cylinder(g,.7,1.25,2.15,1.04,1.55,C.graphite);for(let i=0;i<3;i++)this.cylinder(g,.72,.1,2.15,.5+i*.53,1.55,color);this.sign(g,'AWS',2.4,0,4.4,.05,color);this.sign(g,prod?'PRODUCTION':'STAGING',4,0,.9,2.71,C.graphite,C.ink);
  this.human(g,-2.2,1.6,C.ink,prod,.7);
 }
 buildClient(g,color){
  this.box(g,3.2,5.1,2.65,-1.6,2.94,-.45,C.graphite);for(let i=0;i<3;i++){this.box(g,3.35,.18,2.8,-1.6,.75+i*1.75,-.45,C.ink);for(let j=0;j<3;j++)this.box(g,.72,1.15,.08,-2.62+j*1.02,1.49+i*1.7,.92,color,{transparent:true,opacity:.45,emissive:color,emissiveIntensity:.13});}
  this.sign(g,'NEXO',2.65,-1.6,5.74,.91,C.ink);this.box(g,2.6,.18,2.4,1.9,.64,-.35,C.ink);this.monitor(g,1.9,1.38,-.75,color,1.8);this.human(g,1.2,.45,C.graphite,false,.65);this.human(g,2.55,.45,C.ink,false,.65);this.human(g,.45,2.07,C.ink,false,.85);this.human(g,2.3,2.07,C.graphite,false,.85);
 }
 makeRoute(from,to,type,via=[]){
  const a=stations.find(s=>s.id===from),b=stations.find(s=>s.id===to);const start=new THREE.Vector3(a.x,.65,a.z),end=new THREE.Vector3(b.x,.65,b.z);const dir=new THREE.Vector3().subVectors(end,start).normalize();start.addScaledVector(dir,3.65);end.addScaledVector(dir,-3.65);
  const points=[start,...via.map(p=>new THREE.Vector3(...p)),end];const curve=new THREE.CatmullRomCurve3(points,false,'catmullrom',.3);const color=type==='work'?C.green:type==='use'?C.cyan:type==='feedback'?C.magenta:C.ink;const sampled=curve.getPoints(45);const line=this.line(this.scene,sampled,color,type==='telemetry'?.18:.65,type==='feedback'||type==='telemetry');
  if(type==='work'||type==='use'){const track=new THREE.CatmullRomCurve3(points.map(p=>p.clone().add(new THREE.Vector3(0,-.11,0))),false,'catmullrom',.3);const mesh=new THREE.Mesh(new THREE.TubeGeometry(track,40,type==='work'?.12:.06,6,false),this.material(0x48534f));mesh.castShadow=true;this.scene.add(mesh);
   for(let i=0;i<3;i++){const p=curve.getPoint((i+.5)/3);this.cylinder(this.scene,.08,.5,p.x,.25,p.z,C.ink);}
  }
  const count=type==='telemetry'?2:type==='use'?7:type==='feedback'?3:3;const route={from,to,type,curve,line};for(let i=0;i<count;i++){const cube=this.box(this.scene,type==='use'?.16:type==='telemetry'?.09:.38,type==='telemetry'?.09:.25,type==='use'?.16:type==='telemetry'?.09:.35,0,0,0,color,{emissive:color,emissiveIntensity:.6});cube.castShadow=type!=='telemetry';const packet={cube,curve,type,route,offset:i/count,speed:type==='use'?.1:type==='telemetry'?.16:.06};this.packets.push(packet);if(type==='telemetry')this.telemetry.push({line,cube});}return route;
 }
 buildRoutes(){
  this.routes=[];for(const [a,b,via] of [
   ['discovery','darkside',[[-11,.65,2],[-10,.65,4]]],['darkside','quality',[]],['quality','homolog',[[8.1,.65,4]]],['homolog','production',[]],['production','client',[[20.2,.65,0],[20.2,.65,3]]]
  ])this.routes.push(this.makeRoute(a,b,'work',via));
  this.routes.push(this.makeRoute('quality','darkside','work',[[0,.78,12.3]]));
  this.makeRoute('production','client','use',[[22,.9,-.5],[22,.9,3.5]]);this.makeRoute('client','production','use',[[23,.9,3],[23,.9,-1]]);
  this.makeRoute('client','discovery','feedback',[[18,1.05,13.4],[-12,1.05,13.4],[-21,1.05,9],[-21,1.05,-3]]);
  this.makeRoute('memory','darkside','work',[[-1.8,.9,1.5],[-1.8,.9,4]]);
  for(const id of ['discovery','darkside','quality','homolog','production','client'])this.makeRoute(id,'control','telemetry',[[stations.find(s=>s.id===id).x,6,stations.find(s=>s.id===id).z],[-6,6,-10]]);
 }
 resize(){const width=this.container.clientWidth,height=this.container.clientHeight;if(!width||!height)return;this.renderer.setSize(width,height,false);const aspect=width/height;const half=Math.max(20,30/aspect);this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.updateLabels();}
 updateLabels(){const w=this.container.clientWidth,h=this.container.clientHeight;this.camera.updateMatrixWorld();for(const s of [...organizations,...stations]){const company=s.kind==='organization';const v=new THREE.Vector3(s.x,company?5.1:.65,company?s.z-s.depth/2:s.z+(s.depth||6)/2+.6).project(this.camera);const label=this.labels[s.id];label.style.left=`${(v.x*.5+.5)*w}px`;label.style.top=`${(-v.y*.5+.5)*h}px`;label.style.display=v.z<1&&v.x>-1.1&&v.x<1.1&&v.y>-.87&&v.y<.75?'':'none';}}
 select(id){this.selected=id;for(const s of [...organizations,...stations]){this.labels[s.id].classList.toggle('selected',s.id===id);this.labels[s.id].setAttribute('aria-pressed',String(s.id===id));}}
 setCamera(view){this.topView=view==='top';this.camera.position.set(this.topView?0:34,this.topView?62:39,this.topView?.01:47);this.controls.target.set(0,0,0);this.camera.zoom=1;this.camera.lookAt(0,0,0);this.camera.updateProjectionMatrix();this.controls.update();}
 zoom(factor){this.camera.zoom=THREE.MathUtils.clamp(this.camera.zoom*factor,.65,2.7);this.camera.updateProjectionMatrix();}
 render(dt,simulation){if(simulation.running)this.time+=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.2))*simulation.speed;this.controls.update();this.active=simulation.phase.station;
  const work=simulation.key==='module'?simulation.activeWork:simulation.waiting?[]:[{id:simulation.episodeId,phase:simulation.phase}];const active=new Set(work.map(e=>e.phase.station));
  for(const s of stations){const busy=active.has(s.id);this.labels[s.id].classList.toggle('active',busy);const badge=this.labels[s.id].querySelector('.workload-badge');if(badge){const count=work.filter(e=>e.phase.station===s.id).length;badge.hidden=simulation.key!=='module'||!count;badge.textContent=count;badge.title=`${count} episódios em andamento`;}
   const r=this.rings[s.id];r.material.opacity=busy?.6+.25*Math.sin(this.time*3):s.id===this.selected?.6:.15;r.scale.setScalar(busy?1.15+.05*Math.sin(this.time*3):1);}
  for(const o of organizations)this.labels[o.id].classList.toggle('active',o.children.some(id=>active.has(id)));
  for(const a of this.actors){a.arm.rotation.x=Math.sin(this.time*2.8+a.seed)*.24;a.g.position.y=a.base+Math.sin(this.time*1.3+a.seed)*.02;}
  for(const p of this.packets){let visible=true,episode=null;if(p.type==='telemetry')visible=this.showEvidence;if(p.type==='work'){
   const matches=work.filter(e=>{if(p.route.from==='quality'&&p.route.to==='darkside')return !!e.phase.returnToDev;if(p.route.from==='memory')return e.phase.station==='darkside';return p.route.to===e.phase.station||p.route.from===e.phase.station;});episode=matches[Math.floor(p.offset*100)%matches.length];visible=!!episode;
  }
   p.cube.visible=visible;p.cube.position.copy(p.curve.getPoint(((this.time*p.speed+p.offset)%1+1)%1));p.cube.position.y+=.22;p.cube.rotation.y=this.time*.65+p.offset;
   if(p.type==='work'){p.cube.material.color.setHex(episode?.phase.red?C.magenta:C.green);p.cube.userData.episodeId=episode?.id||null;}
  }
  for(const t of this.telemetry)t.line.visible=this.showEvidence;
  this.updateLabels();this.renderer.render(this.scene,this.camera);
 }
}
