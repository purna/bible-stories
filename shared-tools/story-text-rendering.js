/* Persistent renderer for positioned, timed text and SFX items in story act JSON. */
(() => {
  'use strict';
  const positions=new Set(['top-left','top-middle','top-right','middle-left','center','middle-right','bottom-left','bottom-middle','bottom-right']);
  const styles=new Set(['comic','thought-balloon','breath-marks','burst-balloon','caption-location-time','caption-internal-monologue','caption-spoken','caption-editorial','rough-balloon','telepathic-balloon','whispering','caption','serif','impact','outline','soft','sfx-impact','sfx-outline','sfx-neon','sfx-burst','sfx-hollow','sfx-roach-chew']);
  const fontOptions=[
    ['default','Story default','',null],
    ['digital-strip','Digital Strip','Story Digital Strip','Dialogue Fonts'],['back-issues','Back Issues','Story Back Issues','Dialogue Fonts'],
    ['feedback','Feedback','Story Feedback','Dialogue Fonts'],['palooka','Palooka','Story Palooka','Dialogue Fonts'],
    ['raw-bones','Raw Bones','Story Raw Bones','Dialogue Fonts'],
    ['one-two-punch','One Two Punch','Story One Two Punch','Sound Effect Fonts'],['kill-crazy','Kill Crazy','Story Kill Crazy','Sound Effect Fonts'],
    ['upchucked','Upchucked','Story Upchucked','Sound Effect Fonts'],['mech-effects','Mech Effects','Story Mech Effects','Sound Effect Fonts'],
    ['full-bleed','Full Bleed','Story Full Bleed','Sound Effect Fonts'],['blam-blam','Blam Blam','Story Blam Blam','Sound Effect Fonts'],
    ['blowhole','Blowhole','Story Blowhole','Sound Effect Fonts'],['char','Char','Story Char','Sound Effect Fonts']
  ];
  const fontFamilies=Object.fromEntries(fontOptions.map(([key,,family])=>[key,family]));
  const paddingFactors={S:.75,M:1,L:1.25,XL:1.5};
  function textPadding(item,style,isCaption){
    const presets={'thought-balloon':['13%','17%','22%','17%'],'burst-balloon':['16%','19%','16%','19%'],'rough-balloon':['17%','17%','17%','17%'],'telepathic-balloon':['18%','20%','18%','20%'],whispering:['18%','20%','18%','20%'],'caption-location-time':['16%','12%','16%','12%'],'caption-internal-monologue':['16%','12%','16%','12%'],'caption-spoken':['16%','12%','16%','12%'],'caption-editorial':['16%','12%','16%','12%']};
    const base=presets[style]||(isCaption?['16px','20px','16px','20px']:['20px','26px','20px','26px']);
    const factor=paddingFactors[item.padding]||1;
    return base.map(value=>value.replace(/[\d.]+/,number=>String(Number((Number(number)*factor).toFixed(2))))).join(' ');
  }
  window.STORY_TEXT_FONT_OPTIONS=fontOptions.map(([value,label,,group])=>({value,label,group}));
  window.STORY_TEXT_FONT_FAMILIES=fontFamilies;
  const fontSheet=document.createElement('link');fontSheet.rel='stylesheet';fontSheet.href='../shared-tools/story-fonts.css';document.head.appendChild(fontSheet);
  const css=document.createElement('style');
  css.textContent=`
    .content-overlay [data-story-position],#stage [data-story-position]{position:absolute!important;z-index:5;max-width:min(95%,900px);margin:0!important}
    [data-story-position="top-left"]{top:var(--story-margin,5%);left:var(--story-margin,5%);transform:rotate(var(--story-rotation,0deg))}[data-story-position="top-middle"]{top:var(--story-margin,5%);left:50%;transform:translateX(-50%) rotate(var(--story-rotation,0deg))}[data-story-position="top-right"]{top:var(--story-margin,5%);right:var(--story-margin,5%);transform:rotate(var(--story-rotation,0deg))}
    [data-story-position="middle-left"]{top:50%;left:var(--story-margin,5%);transform:translateY(-50%) rotate(var(--story-rotation,0deg))}[data-story-position="center"]{top:50%;left:50%;transform:translate(-50%,-50%) rotate(var(--story-rotation,0deg))}[data-story-position="middle-right"]{top:50%;right:var(--story-margin,5%);transform:translateY(-50%) rotate(var(--story-rotation,0deg))}
    [data-story-position="bottom-left"]{bottom:var(--story-margin,5%);left:var(--story-margin,5%);transform:rotate(var(--story-rotation,0deg))}[data-story-position="bottom-middle"]{bottom:var(--story-margin,5%);left:50%;transform:translateX(-50%) rotate(var(--story-rotation,0deg))}[data-story-position="bottom-right"]{bottom:var(--story-margin,5%);right:var(--story-margin,5%);transform:rotate(var(--story-rotation,0deg))}
    [data-story-style="serif"]{font-family:Georgia,serif!important}[data-story-style="impact"]{font-weight:900!important;text-transform:uppercase;letter-spacing:.04em}
    [data-story-style="outline"]{color:#fff!important;text-shadow:2px 2px #111,-2px -2px #111,2px -2px #111,-2px 2px #111;background:#0004!important;border-color:transparent!important}
    [data-story-style="soft"]{border-radius:24px!important;border:1px solid #ffffff70!important;background:#332c40dd!important;color:#fff!important;font-weight:500!important}
    [data-story-style="caption"]{font-family:system-ui,sans-serif!important;border-radius:5px!important}
    [data-story-sfx="true"]{font-family:Bangers,cursive!important;font-size:clamp(28px,7vw,64px)!important;font-weight:900!important;color:#ffd84d!important;-webkit-text-stroke:2px var(--ink,#111);paint-order:stroke fill;text-shadow:3px 3px #ff6b5b;background:transparent!important;background-image:none!important;border-color:transparent!important;box-shadow:none!important;text-align:center!important}
    [data-story-sfx="true"][data-story-style="sfx-outline"]{color:#fff!important;-webkit-text-stroke:3px #17131f;text-shadow:4px 4px #ff6b5b}
    [data-story-sfx="true"][data-story-style="sfx-neon"]{color:#7df9ff!important;-webkit-text-stroke:1px #fff;text-shadow:0 0 8px #00eaff,0 0 20px #00eaff}
    [data-story-sfx="true"][data-story-style="sfx-burst"]{color:#ffcf36!important;-webkit-text-stroke:3px #e53b24;text-shadow:5px 5px #17131f}
    #nextLineBtn[data-story-items-pending],#nextBtn[data-story-items-pending]{visibility:hidden!important;pointer-events:none!important}
  `;
  document.head.appendChild(css);
  const sceneLayerCss=document.createElement('style');
  sceneLayerCss.textContent=`
    #graphicContainer{position:relative;isolation:isolate}
    #svgLayer.svg-behind{position:absolute;inset:0;z-index:1;display:block;pointer-events:none}
    #svgLayer.svg-behind svg{width:100%;height:100%;max-height:none;filter:none}
    #midLayer.svg-middle{position:absolute;inset:0;z-index:2;display:block;pointer-events:none}
    #midLayer.svg-middle svg{width:100%;height:100%;max-height:none;filter:none}
    #graphicContainer canvas.three-canvas{position:absolute;inset:0;z-index:3}
    #fgLayer.svg-front{position:absolute;inset:0;z-index:5;display:block;pointer-events:none}
    #fgLayer.svg-front svg{width:100%;height:100%;max-height:none}
  `;
  document.head.appendChild(sceneLayerCss);

  let byText=new Map();
  const normalize=value=>String(value||'').replace(/\s+/g,' ').trim();
  const defaultPosition=line=>{
    const h={left:'left',center:'middle',right:'right'}[line?.align]||'middle';
    return h==='middle'?'center':`middle-${h}`;
  };
  async function load(){
    try{
      const manifest=await(await fetch('data/manifest.json')).json();
      const acts=await Promise.all(manifest.acts.map(a=>fetch(`data/${a.file}`).then(r=>r.json())));
      byText=new Map();
      acts.forEach(act=>(act.lines||[]).forEach(line=>{
        [line.text,line.sfx,...(line.items||[]).map(item=>item.text)].filter(Boolean).forEach(text=>byText.set(normalize(text),line));
      }));
      scan(document.getElementById('stage'));
    }catch(_){/* This page may not be a JSON-driven story. */}
  }
  function positionItem(element,item,line){
    const position=positions.has(item.position)?item.position:defaultPosition(line);
    element.dataset.storyPosition=position;
    const marginOffsets={S:'3%',M:'5%',L:'8%',XL:'12%'};
    element.style.setProperty('--story-margin',marginOffsets[item.margin]||marginOffsets.M);
    element.style.zIndex=String(Math.max(1,Math.min(10,Number(item.zIndex)||1)));
    const widths={'1/4':25,'1/3':33.333,'1/2':50,'2/3':66.667,'3/4':75,'1':100};
    element.style.width=`${widths[item.width||'1/2']||50}%`;
    element.style.maxWidth='90%';
    element.dataset.storyRotation=String(Number(item.rotation)||0);
    element.style.setProperty('--story-rotation',`${Number(item.rotation)||0}deg`);
    const style=item.style|| (item.sfx?'sfx-impact':'comic');
    element.dataset.storyStyle=styles.has(style)?style:(item.sfx?'sfx-impact':'comic');
    element.dataset.storySfx=String(Boolean(item.sfx));
    if(fontFamilies[item.font])element.style.setProperty('font-family',`"${fontFamilies[item.font]}"`,'important');
    if(Number(item.fontSize)>0)element.style.setProperty('font-size',`${Number(item.fontSize)}px`,'important');
    if(item.bold)element.style.fontWeight='900';
    if(item.italic)element.style.fontStyle='italic';
  }
  function makeItem(item,line){
    let wrapper,textTarget;
    const fx=item.entryFx||'fade';
    const captionStyle=item.style==='caption'||String(item.style||'').startsWith('caption-');
    if(item.sfx){
      wrapper=document.createElement('div');wrapper.className=`sfx fx-${fx}`;textTarget=wrapper;
      textTarget.textContent=item.text||'';
    }else if(captionStyle||(item.speaker||line.speaker)==='narrator'){
      wrapper=document.createElement('div');wrapper.className=`caption fx-${fx} caption-${item.align||line.align||'center'}`;textTarget=wrapper;
      textTarget.textContent=item.text||'';
      textTarget.style.cssText=`--bubble-width:${item.width||line.width||'1/2'};`;
    }else{
      wrapper=document.createElement('div');wrapper.className=`bubble-wrap align-${item.align||line.align||'center'}`;
      wrapper.style.cssText=`--bubble-width:${item.width||line.width||'1/2'};`;
      const speaker=item.speaker||line.speaker||'';textTarget=document.createElement('div');textTarget.className=`bubble ${speaker==='none'?'no-speaker':speaker} fx-${fx} bubble-${item.align||line.align||'center'}`;
      textTarget.textContent=item.text||'';wrapper.appendChild(textTarget);
    }
    positionItem(wrapper,item,line);
    if(!item.sfx)textTarget.style.setProperty('padding',textPadding(item,wrapper.dataset.storyStyle,textTarget.classList.contains('caption')),'important');
    if(fontFamilies[item.font])textTarget.style.setProperty('font-family',`"${fontFamilies[item.font]}"`,'important');
    if(Number(item.fontSize)>0)textTarget.style.setProperty('font-size',`${Number(item.fontSize)}px`,'important');
    if(textTarget!==wrapper){textTarget.dataset.storyStyle=wrapper.dataset.storyStyle;textTarget.dataset.storySfx=wrapper.dataset.storySfx;if(item.bold)textTarget.style.fontWeight='900';if(item.italic)textTarget.style.fontStyle='italic';}
    return {wrapper,textTarget};
  }
  function entrance(element,fx){
    const frames={
      fade:[{opacity:0},{opacity:1}],
      'slide-left':[{opacity:0,translate:'-48px 0'},{opacity:1,translate:'0'}],
      'slide-right':[{opacity:0,translate:'48px 0'},{opacity:1,translate:'0'}],
      zoom:[{opacity:0,scale:.65},{opacity:1,scale:1}],
      bounce:[{opacity:0,scale:.65},{opacity:1,scale:1.12,offset:.72},{opacity:1,scale:1}],
      shake:[{opacity:0,translate:'-12px 0'},{opacity:1,translate:'12px 0',offset:.25},{opacity:1,translate:'-8px 0',offset:.5},{opacity:1,translate:'5px 0',offset:.75},{opacity:1,translate:'0'}],
      type:[{opacity:1,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],
      wave:[{opacity:0,translate:'0 -18px',rotate:'-7deg'},{opacity:1,translate:'0 0',rotate:'0deg',offset:.55},{opacity:1,translate:'0 -3px',rotate:'2deg',offset:.78},{opacity:1,translate:'0 0',rotate:'0deg'}],
      glitch:[{opacity:0,translate:'-10px 0',filter:'hue-rotate(90deg)'},{opacity:1,translate:'8px 0',filter:'hue-rotate(-90deg)',offset:.25},{opacity:1,translate:'-5px 0',filter:'none',offset:.5},{opacity:1,translate:'3px 0',offset:.75},{opacity:1,translate:'0'}],
      neon:[{opacity:0,textShadow:'0 0 0 transparent'},{opacity:1,textShadow:'0 0 8px #00eaff, 0 0 24px #00eaff',offset:.45},{opacity:1,textShadow:'0 0 3px #00eaff, 0 0 12px #00eaff'}],
      fly:[{opacity:0,translate:'0 55px',scale:.8},{opacity:1,translate:'0 0',scale:1}],
      sfx:[{opacity:0,scale:.2,rotate:'-18deg'},{opacity:1,scale:1.16,rotate:'5deg',offset:.68},{opacity:1,scale:1,rotate:'0deg'}]
    }[fx]||[{opacity:0},{opacity:1}];
    if(fx==='none'){element.style.opacity='1';return;}
    element.animate(frames,{duration:650,easing:'ease-out'});
  }
  function exit(element,fx){
    if(!element.isConnected)return;
    if(fx==='none'){element.remove();return;}
    const frames={
      fade:[{opacity:1},{opacity:0}],
      'slide-left':[{opacity:1,translate:'0'},{opacity:0,translate:'-48px 0'}],
      'slide-right':[{opacity:1,translate:'0'},{opacity:0,translate:'48px 0'}],
      zoom:[{opacity:1,scale:1},{opacity:0,scale:.65}],
      bounce:[{opacity:1,scale:1},{opacity:1,scale:1.12,offset:.3},{opacity:0,scale:.55}],
      shake:[{opacity:1,translate:'0'},{opacity:1,translate:'-10px 0',offset:.25},{opacity:1,translate:'8px 0',offset:.5},{opacity:1,translate:'-4px 0',offset:.75},{opacity:0,translate:'0'}],
      type:[{opacity:1,clipPath:'inset(0 0 0 0)'},{opacity:0,clipPath:'inset(0 100% 0 0)'}],
      wave:[{opacity:1,translate:'0 0',rotate:'0deg'},{opacity:1,translate:'0 -10px',rotate:'-5deg',offset:.35},{opacity:1,translate:'0 5px',rotate:'4deg',offset:.7},{opacity:0,translate:'0 30px',rotate:'0deg'}],
      glitch:[{opacity:1,translate:'0',filter:'none'},{opacity:.65,translate:'8px 0',filter:'hue-rotate(90deg)',offset:.25},{opacity:1,translate:'-7px 0',filter:'hue-rotate(-90deg)',offset:.5},{opacity:.4,translate:'4px 0',filter:'none',offset:.75},{opacity:0,translate:'0'}],
      neon:[{opacity:1,textShadow:'0 0 8px #00eaff, 0 0 24px #00eaff'},{opacity:0,textShadow:'0 0 0 transparent'}],
      fly:[{opacity:1,translate:'0 0',scale:1},{opacity:0,translate:'0 -55px',scale:.8}],
      sfx:[{opacity:1,scale:1,rotate:'0deg'},{opacity:1,scale:1.12,rotate:'5deg',offset:.35},{opacity:0,scale:.2,rotate:'-18deg'}]
    }[fx]||[{opacity:1},{opacity:0}];
    element.animate(frames,{duration:600,easing:'ease-in',fill:'forwards'});
    window.setTimeout(()=>{if(element.isConnected)element.remove();},610);
  }
  function renderItems(layer,line){
    if(layer.dataset.storyItemsRendered)return;
    layer.dataset.storyItemsRendered='true';
    layer.querySelectorAll('.caption,.bubble-wrap,.sfx').forEach(el=>el.remove());
    const items=Array.isArray(line.items)?line.items:[];
    const sceneStart=Number(line.delay)||Math.min(...items.map(item=>Number(item.delay)||0));
    const itemOffset=item=>Math.max(0,(Number(item.delay)||0)-sceneStart);
    const timeline=items.reduce((max,item)=>Math.max(max,itemOffset(item)+(Number(item.visibleDuration)>0?Number(item.visibleDuration)+(item.exitFx==='none'?0:610):0)),0);
    const token={};window.__storyItemsSequence=token;
    const navButtons=[...document.querySelectorAll('#nextLineBtn,#nextBtn')];
    if(timeline>0)navButtons.forEach(button=>button.setAttribute('data-story-items-pending',''));
    else navButtons.forEach(button=>button.removeAttribute('data-story-items-pending'));
    if(timeline>0)window.setTimeout(()=>{
      if(window.__storyItemsSequence===token&&layer.isConnected)navButtons.forEach(button=>button.removeAttribute('data-story-items-pending'));
    },timeline);
    items.forEach((item,index)=>{
      window.setTimeout(()=>{
        if(!layer.isConnected)return;
        const {wrapper,textTarget}=makeItem(item,line);layer.appendChild(wrapper);entrance(textTarget,item.entryFx||'fade');
      const duration=Math.max(0,Number(item.visibleDuration)||0);
      if(duration>0)window.setTimeout(()=>exit(wrapper,item.exitFx||'fade'),duration);
      },itemOffset(item));
    });
  }
  function scan(root){
    if(!root)return;
    const candidates=[];
    if(root.matches?.('.caption,.bubble-wrap,.sfx'))candidates.push(root);
    root.querySelectorAll?.('.caption,.bubble-wrap,.sfx').forEach(el=>candidates.push(el));
    for(const element of candidates){
      const text=normalize(element.innerText||element.textContent),line=byText.get(text);
      if(!line)continue;
      const layer=element.closest('.content-overlay')||element.parentElement;
      if(Array.isArray(line.items)){renderItems(layer,line);continue;}
      const target=element.matches('.bubble-wrap')?(element.querySelector('.bubble')||element):element;
      positionItem(element,{...line,sfx:element.matches('.sfx')},line);
      if(target!==element){target.dataset.storyStyle=element.dataset.storyStyle;target.dataset.storySfx=element.dataset.storySfx;}
      if(line.visibleDuration>0)window.setTimeout(()=>exit(element,line.exitFx||'fade'),Number(line.visibleDuration));
    }
  }
  const start=()=>{
    const stage=document.getElementById('stage');
    if(stage)new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===1)scan(node);}))).observe(stage,{childList:true,subtree:true});
    load();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
