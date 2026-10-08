/* Temporary shared story text editor. Remove this file and its page hooks when editing is complete. */
(() => {
  'use strict';
  const config = window.STORY_EDITOR_CONFIG || {};
  if (config.enabled === false || window.__storyEditorLoaded) return;
  window.__storyEditorLoaded = true;

  const positions = [
    ['top-left', 'Top left'], ['top-middle', 'Top middle'], ['top-right', 'Top right'],
    ['middle-left', 'Middle left'], ['center', 'Center'], ['middle-right', 'Middle right'],
    ['bottom-left', 'Bottom left'], ['bottom-middle', 'Bottom middle'], ['bottom-right', 'Bottom right']
  ];
  const positionIcons = {
    'top-left': '<path d="M5 11V5h6M5 5l6 6"/>',
    'top-middle': '<path d="M12 19V5m0 0L7 10m5-5 5 5"/>',
    'top-right': '<path d="M13 5h6v6m0-6-6 6"/>',
    'middle-left': '<path d="M19 12H5m0 0 5-5m-5 5 5 5"/>',
    center: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/>',
    'middle-right': '<path d="M5 12h14m0 0-5-5m5 5-5 5"/>',
    'bottom-left': '<path d="M5 13v6h6m-6 0 6-6"/>',
    'bottom-middle': '<path d="M12 5v14m0 0 5-5m-5 5-5-5"/>',
    'bottom-right': '<path d="M19 13v6h-6m6 0-6-6"/>'
  };
  const effects = ['none', 'fade', 'slide-left', 'slide-right', 'zoom', 'bounce', 'shake', 'type', 'wave', 'glitch', 'neon', 'fly', 'sfx'];
  const styles = [
    ['comic', 'Comic balloon'], ['thought-balloon', 'Thought balloon'], ['breath-marks', 'Breath marks'], ['burst-balloon', 'Burst balloon'],
    ['caption-location-time', 'Caption: Location & time'], ['caption-internal-monologue', 'Caption: Internal monologue'], ['caption-spoken', 'Caption: Spoken'], ['caption-editorial', 'Caption: Editorial'],
    ['rough-balloon', 'Rough balloon'], ['telepathic-balloon', 'Telepathic balloon'], ['whispering', 'Whispering'], ['caption', 'Plain caption'], ['serif', 'Story serif'],
    ['impact', 'Impact'], ['outline', 'Outlined'], ['soft', 'Soft card'],
    ['sfx-impact', 'Impact SFX'], ['sfx-outline', 'Outlined SFX'], ['sfx-neon', 'Neon SFX'], ['sfx-burst', 'Burst SFX'], ['sfx-hollow', 'Hollow sound effect'], ['sfx-roach-chew', 'Roach chew']
  ];
  const fontOptions=window.STORY_TEXT_FONT_OPTIONS||[
    {value:'default',label:'Story default'},
    ...['Digital Strip','Back Issues','Feedback','Palooka','Raw Bones'].map((label,index)=>({value:['digital-strip','back-issues','feedback','palooka','raw-bones'][index],label,group:'Dialogue Fonts'})),
    ...['One Two Punch','Kill Crazy','Upchucked','Mech Effects','Full Bleed','Blam Blam','Blowhole','Char'].map((label,index)=>({value:['one-two-punch','kill-crazy','upchucked','mech-effects','full-bleed','blam-blam','blowhole','char'][index],label,group:'Sound Effect Fonts'}))
  ];
  function fontOptionMarkup(selected){
    const option=font=>`<option value="${font.value}" ${selected===font.value?'selected':''}>${escape(font.label)}</option>`;
    return `${option(fontOptions.find(font=>font.value==='default')||{value:'default',label:'Story default'})}<optgroup label="Dialogue Fonts">${fontOptions.filter(font=>font.group==='Dialogue Fonts').map(option).join('')}</optgroup><optgroup label="Sound Effect Fonts">${fontOptions.filter(font=>font.group==='Sound Effect Fonts').map(option).join('')}</optgroup>`;
  }
  const fontFamilies=window.STORY_TEXT_FONT_FAMILIES||{};
  const speakerChoices=[{value:'none',label:'No speaker'},...(config.speakers||[{value:'narrator',label:'Narrator'}])];
  const widthChoices=[['1/4','1/4'],['1/3','1/3'],['1/2','1/2'],['2/3','2/3'],['3/4','3/4'],['1','Full width']];
  const marginChoices=[['S','Small'],['M','Medium'],['L','Large'],['XL','Extra large']];
  const marginOffsets={S:'3%',M:'5%',L:'8%',XL:'12%'};
  const paddingFactors={S:.75,M:1,L:1.25,XL:1.5};
  function textPadding(item,style,isCaption){
    const presets={'thought-balloon':['13%','17%','22%','17%'],'burst-balloon':['16%','19%','16%','19%'],'rough-balloon':['17%','17%','17%','17%'],'telepathic-balloon':['18%','20%','18%','20%'],whispering:['18%','20%','18%','20%'],'caption-location-time':['16%','12%','16%','12%'],'caption-internal-monologue':['16%','12%','16%','12%'],'caption-spoken':['16%','12%','16%','12%'],'caption-editorial':['16%','12%','16%','12%']};
    const base=presets[style]||(isCaption?['16px','20px','16px','20px']:['20px','26px','20px','26px']);
    const factor=paddingFactors[item.padding]||1;
    return base.map(value=>value.replace(/[\d.]+/,number=>String(Number((Number(number)*factor).toFixed(2))))).join(' ');
  }
  function defaultPosition(line){
    const horizontal={left:'left',center:'middle',right:'right'}[line.align]||'middle';
    return horizontal==='middle'?'center':`middle-${horizontal}`;
  }
  const styleText = `
    #storyEditorToggle{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:10020;border:2px solid #20162a;border-radius:9px;padding:10px 15px;background:#ffd84d;color:#20162a;font:800 14px/1.2 system-ui;box-shadow:4px 4px 0 #20162a;cursor:pointer}
    #storyEditorPanel{position:fixed;z-index:2147483000;right:0;top:0;width:min(220px,100vw);height:100dvh;box-sizing:border-box;display:none;grid-template-rows:auto auto auto minmax(0,1fr) auto;background:#17131f;color:#fff;font:12px/1.35 system-ui;box-shadow:-8px 0 30px #0008;pointer-events:auto;isolation:isolate}
    #storyEditorPanel.open{display:grid} #storyEditorPanel *{box-sizing:border-box} #storyEditorPanel button,#storyEditorPanel select,#storyEditorPanel input,#storyEditorPanel textarea{font:inherit}
    .se-head{display:flex;align-items:center;justify-content:space-between;padding:10px;background:#241d2d;border-bottom:1px solid #ffffff24}.se-head h2{margin:0;font-size:16px}.se-head button,.se-actions button{border:1px solid #ffffff55;border-radius:6px;background:#342b40;color:#fff;padding:7px 5px;cursor:pointer}
    .se-selects{display:grid;grid-template-columns:1fr;gap:6px;padding:8px}.se-selects select{width:100%;min-width:0;padding:7px 26px 7px 9px;border:1px solid #8b779e;border-radius:7px;background:#2d2437;color:white;font-size:11px!important;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='m1 1 5 5 5-5' fill='none' stroke='%23ffd84d' stroke-width='2'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:11px;background-position:right 8px center}.se-selects select:focus,.se-items select:focus,.se-field select:focus{outline:2px solid #ffd84d;outline-offset:1px;border-color:#ffd84d}.se-selects option,.se-items option,.se-field select option{background:#241d2d;color:#fff}
    .se-items{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:4px;padding:0 8px 7px;position:relative;z-index:1}.se-items select{min-width:0;width:100%;padding:5px 22px 5px 6px;border:1px solid #8b779e;border-radius:6px;background:#2d2437;color:white;font-size:10px;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='m1 1 5 5 5-5' fill='none' stroke='%23ffd84d' stroke-width='2'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:9px;background-position:right 6px center}.se-items button{position:relative;z-index:2;border:1px solid #ffffff44;border-radius:5px;background:#342b40;color:white;padding:4px 6px;font-size:10px;cursor:pointer;pointer-events:auto}
    .se-body{overflow:auto;padding:8px;position:relative;z-index:0}.se-label{display:block;margin:8px 0 4px;font-weight:700;color:#e7d9f5}.se-text{width:100%;min-height:76px;resize:vertical;padding:7px;border:1px solid #ffffff44;border-radius:6px;background:#241d2d;color:white}
    .se-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.se-grid button{display:grid;place-items:center;min-width:0;min-height:32px;padding:3px;border:1px solid #ffffff44;border-radius:5px;background:#241d2d;color:#eee;cursor:pointer}.se-grid button[aria-pressed=true]{background:#ffd84d;color:#20162a;border-color:#ffd84d;font-weight:800}.se-position-icon{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .se-font-links{display:flex;justify-content:space-between;gap:4px;margin-top:4px;font-size:9px}.se-font-links a{color:#ffd84d;text-decoration:underline}
    .se-formrow{display:grid;grid-template-columns:1fr;gap:2px}.se-field input,.se-field select{width:100%;min-width:0;padding:7px 25px 7px 8px;border:1px solid #8b779e;border-radius:7px;background-color:#2d2437;color:white;font-size:11px!important}.se-field select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='m1 1 5 5 5-5' fill='none' stroke='%23ffd84d' stroke-width='2'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:10px;background-position:right 8px center}.se-field input[type=range]{padding:0;accent-color:#ffd84d}.se-toggles{display:flex;gap:10px;margin-top:8px}.se-toggles label{display:flex;align-items:center;gap:4px}.se-rotation{display:flex;align-items:center;gap:6px}.se-rotation input[type=range]{flex:1;min-width:0}.se-rotation output{min-width:36px;text-align:right;font-variant-numeric:tabular-nums}.se-sfx-field{margin:8px 0;padding:0;border:0}
    .se-actions{display:grid;grid-template-columns:repeat(2,1fr);gap:5px;padding:8px;border-top:1px solid #ffffff24}.se-actions button{display:flex;align-items:center;justify-content:center;gap:5px;font-size:10px!important;line-height:1.1}.se-actions button.primary{background:#ffd84d;color:#20162a;border-color:#ffd84d;font-weight:800}.se-icon{width:14px;height:14px;flex:none;fill:currentColor}.se-status{grid-column:1/-1;min-height:18px;color:#cdb8e3;font-size:10px}
    [data-story-sfx="true"]{font-family:Bangers,cursive!important;font-size:clamp(28px,7vw,64px)!important;font-weight:900!important;color:#ffd84d!important;-webkit-text-stroke:2px var(--ink,#111);paint-order:stroke fill;text-shadow:3px 3px #ff6b5b;background:transparent!important;background-image:none!important;border-color:transparent!important;box-shadow:none!important;text-align:center!important}
    [data-story-sfx="true"][data-story-style="sfx-outline"]{color:#fff!important;-webkit-text-stroke:3px #17131f;text-shadow:4px 4px #ff6b5b}
    [data-story-sfx="true"][data-story-style="sfx-neon"]{color:#7df9ff!important;-webkit-text-stroke:1px #fff;text-shadow:0 0 8px #00eaff,0 0 20px #00eaff}
    [data-story-sfx="true"][data-story-style="sfx-burst"]{color:#ffcf36!important;-webkit-text-stroke:3px #e53b24;text-shadow:5px 5px #17131f}
    @media(max-width:760px){#storyEditorPanel{width:100vw;height:55dvh;top:auto;bottom:0;border-radius:14px 14px 0 0}.se-selects{grid-template-columns:1fr 1fr}.se-formrow{grid-template-columns:1fr 1fr}.se-grid button{font-size:12px!important}.se-body{padding-top:4px}}
  `;
  const style = document.createElement('style'); style.textContent = styleText; document.head.appendChild(style);
  const toggle = document.createElement('button'); toggle.id = 'storyEditorToggle'; toggle.type = 'button'; toggle.textContent = 'Edit story';
  const panel = document.createElement('aside'); panel.id = 'storyEditorPanel'; panel.setAttribute('aria-label', 'Story text editor');
  panel.innerHTML = `<header class="se-head"><h2>Story editor</h2><button type="button" data-action="close" aria-label="Close editor">×</button></header>
    <div class="se-selects"><select data-field="act" aria-label="Act"></select><select data-field="line" aria-label="Scene"></select></div>
    <div class="se-items"><select data-field="item" aria-label="Text or special effect item"></select><button type="button" data-action="add-text" title="Add text">+T</button><button type="button" data-action="remove-item" title="Remove selected item">−</button></div>
    <div class="se-body"><div class="se-selected"></div></div>
    <footer class="se-actions"><button type="button" data-action="previous"><svg class="se-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 4.5a1.5 1.5 0 0 1 2.1 2.1L8.1 11H20a1.5 1.5 0 0 1 0 3H8.1l4.5 4.4a1.5 1.5 0 1 1-2.1 2.1l-7-7a1.5 1.5 0 0 1 0-2.1l7-7z"/></svg>Previous</button><button class="primary" type="button" data-action="next"><svg class="se-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 4.5a1.5 1.5 0 0 0-2.1 2.1L15.9 11H4a1.5 1.5 0 0 0 0 3h11.9l-4.5 4.4a1.5 1.5 0 1 0 2.1 2.1l7-7a1.5 1.5 0 0 0 0-2.1l-7-7z"/></svg>Next</button><button type="button" data-action="replay">↻ Replay</button><button type="button" data-action="export"><svg class="se-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1zM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"/></svg>Export</button><button type="button" data-action="import">↑ Import</button><button type="button" data-action="reset">Reset</button><input type="file" accept="application/json,.json" hidden><div class="se-status" role="status"></div></footer>`;
  document.body.append(toggle, panel);

  const actSelect = panel.querySelector('[data-field="act"]');
  const lineSelect = panel.querySelector('[data-field="line"]');
  const itemSelect = panel.querySelector('[data-field="item"]');
  const fields = panel.querySelector('.se-selected');
  const status = panel.querySelector('.se-status');
  const fileInput = panel.querySelector('input[type=file]');
  let acts = [], currentActIndex = 0, currentLineIndex = 0, currentItemIndex = 0, replayToken = 0;
  const savedStoryElements = new Map();
  const replayElements = new Set();

  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function activeAct(){ return acts[currentActIndex]; }
  function activeLine(){ return activeAct()?.lines?.[currentLineIndex]; }
  function effectFrames(effect,enter){
    const start={opacity:0},end={opacity:1};
    const pairs={
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
    };
    const exitPairs={
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
    };
    if(effect==='none')return enter?[{opacity:1},{opacity:1}]:[{opacity:1},{opacity:0}];
    return (enter?pairs:exitPairs)[effect]|| (enter?[{...start},{...end}]:[{...end},{...start}]);
  }
  function makeItem(line,isSfx=false){
    const count=(line.items||[]).length+1;
    return {id:`${line.id||`scene_${currentLineIndex}`}_item_${count}`,type:isSfx?'sfx':'text',sfx:isSfx,text:isSfx?'SFX': '',speaker:'narrator',align:line.align||'center',width:line.width||'1/2',position:isSfx?'top-middle':defaultPosition(line),rotation:0,zIndex:Math.min(10,count),font:'default',fontSize:0,delay:0,visibleDuration:isSfx?1600:0,margin:'M',entryFx:isSfx?'bounce':'fade',exitFx:'fade',style:isSfx?'sfx-impact':'comic',bold:false,italic:false};
  }
  function getItems(line=activeLine(),sceneIndex=currentLineIndex){
    if(!line)return [];
    if(Array.isArray(line.items)&&!line.svg){const sceneSvg=line.items.find(item=>item.svg)?.svg;if(sceneSvg)line.svg=sceneSvg;}
    if(!Array.isArray(line.items)){
      line.items=[];
      if(line.text)line.items.push({id:`${line.id||`scene_${sceneIndex}`}_text`,type:'text',sfx:false,text:line.text,position:line.position||defaultPosition(line),rotation:Number(line.rotation)||0,font:'default',fontSize:Number(line.fontSize)||0,delay:Number(line.delay??800),visibleDuration:Number(line.visibleDuration)||0,entryFx:line.entryFx||'fade',exitFx:line.exitFx||'fade',style:line.style||'comic',bold:Boolean(line.bold),italic:Boolean(line.italic)});
      if(line.sfx)line.items.push({id:`${line.id||`scene_${sceneIndex}`}_sfx`,type:'sfx',sfx:true,text:line.sfx,position:'top-middle',rotation:Number(line.sfxRotation)||0,font:'default',fontSize:Number(line.sfxFontSize)||0,delay:Number(line.delay??800),visibleDuration:0,entryFx:'bounce',exitFx:'fade',style:'sfx-impact',bold:false,italic:false});
    }
    line.items.forEach((item,index)=>{item.sfx=Object.prototype.hasOwnProperty.call(item,'sfx')?Boolean(item.sfx):item.type==='sfx';item.type=item.sfx?'sfx':'text';item.id=item.id||`${line.id||`scene_${sceneIndex}`}_item_${index+1}`;item.delay=Number(item.delay)||0;item.visibleDuration=Number(item.visibleDuration)||0;item.position=item.position||(item.sfx?'top-middle':defaultPosition(line));item.margin=marginOffsets[item.margin]?item.margin:'M';item.padding=paddingFactors[item.padding]?item.padding:'M';item.rotation=Number(item.rotation)||0;item.zIndex=Math.max(1,Math.min(10,Number(item.zIndex)||index+1));item.speaker=item.speaker||line.speaker||'narrator';item.align=item.align||line.align||'center';item.width=item.width||line.width||'1/2';item.font=item.font||'default';item.fontSize=Number(item.fontSize)||0;item.entryFx=item.entryFx||'fade';item.exitFx=item.exitFx||'fade';item.style=item.style||(item.sfx?'sfx-impact':'comic');});
    return line.items;
  }
  function activeItem(){return getItems()[currentItemIndex];}
  function setStatus(message){ status.textContent = message; }
  function rememberElement(element){
    if(element&&!savedStoryElements.has(element))savedStoryElements.set(element,{html:element.innerHTML,style:element.getAttribute('style'),className:element.className,position:element.getAttribute('data-story-position'),textStyle:element.getAttribute('data-story-style'),sfx:element.getAttribute('data-story-sfx')});
  }
  function getLiveText(){
    const stage=document.getElementById('stage');
    if(!stage)return null;
    const wrapper=stage.querySelector('.caption, .bubble-wrap, .sfx')||stage.querySelector('.bubble');
    if(!wrapper)return null;
    return {wrapper,text:wrapper.matches('.bubble-wrap')?(wrapper.querySelector('.bubble')||wrapper):wrapper,sfxElement:wrapper.matches('.bubble-wrap')?(wrapper.querySelector('.bubble')||wrapper):wrapper};
  }
  function restoreStoryText(){
    for(const [element,saved] of savedStoryElements){
      element.innerHTML=saved.html;
      if(saved.style===null)element.removeAttribute('style');else element.setAttribute('style',saved.style);
      element.className=saved.className;
      if(saved.position===null)delete element.dataset.storyPosition;else element.dataset.storyPosition=saved.position;
      if(saved.textStyle===null)delete element.dataset.storyStyle;else element.dataset.storyStyle=saved.textStyle;
      if(saved.sfx===null)delete element.dataset.storySfx;else element.dataset.storySfx=saved.sfx;
    }
    savedStoryElements.clear();
  }
  function previewLine(item, animate=false){
    if(!item)return null;
    const live=getLiveText();
    if(!live){setStatus('Start the story or advance to a scene with a text box to preview here.');return null;}
    rememberElement(live.wrapper);rememberElement(live.text);
    live.text.textContent=item.text||'';
    if(live.text!==live.wrapper){for(const {value} of config.speakers||[])if(value)live.text.classList.remove(value);live.text.classList.toggle('no-speaker',item.speaker==='none');}
    const align=item.align||'center';
    live.text.style.textAlign=align;
    for(const name of ['caption-left','caption-center','caption-right','align-left','align-center','align-right','bubble-left','bubble-center','bubble-right']){live.wrapper.classList.remove(name);live.text.classList.remove(name);}
    live.wrapper.classList.add(live.wrapper.classList.contains('bubble-wrap')?`align-${align}`:`caption-${align}`);
    if(live.text!==live.wrapper)live.text.classList.add(`bubble-${align}`);
    const fontFamily=fontFamilies[item.font]||'';
    if(fontFamily){live.wrapper.style.setProperty('font-family',`"${fontFamily}"`,'important');live.text.style.setProperty('font-family',`"${fontFamily}"`,'important');}
    else{live.wrapper.style.removeProperty('font-family');live.text.style.removeProperty('font-family');}
    live.wrapper.dataset.storyPosition=positions.some(([value])=>value===item.position)?item.position:defaultPosition(activeLine());
    live.wrapper.style.setProperty('--story-margin',marginOffsets[item.margin||'M']||marginOffsets.M);
    live.wrapper.style.zIndex=String(Math.max(1,Math.min(10,Number(item.zIndex)||1)));
    live.wrapper.style.width=`${({'1/4':25,'1/3':33.333,'1/2':50,'2/3':66.667,'3/4':75,'1':100}[item.width||'1/2'])||50}%`;
    live.wrapper.style.maxWidth='95%';
    live.wrapper.dataset.storyRotation=String(Number(item.rotation)||0);
    live.text.dataset.storyRotation=String(Number(item.rotation)||0);
    live.wrapper.style.setProperty('--story-rotation',`${Number(item.rotation)||0}deg`);
    const preset=styles.some(([value])=>value===item.style)?item.style:(item.sfx?'sfx-impact':'comic');
    live.wrapper.dataset.storyStyle=preset;live.text.dataset.storyStyle=preset;
    if(!item.sfx)live.text.style.setProperty('padding',textPadding(item,preset,live.text.classList.contains('caption')),'important');
    live.wrapper.dataset.storySfx=String(Boolean(item.sfx));live.text.dataset.storySfx=String(Boolean(item.sfx));
    live.text.style.fontWeight=item.bold?'900':'';live.text.style.fontStyle=item.italic?'italic':'';
    if(Number(item.fontSize)>0){live.wrapper.style.setProperty('font-size',`${item.fontSize}px`,'important');live.text.style.setProperty('font-size',`${item.fontSize}px`,'important');}
    else{live.wrapper.style.removeProperty('font-size');live.text.style.removeProperty('font-size');}
    live.text.style.opacity='1';
    if(animate){
      live.text.animate(effectFrames(item.entryFx||'fade',true),{duration:item.entryFx==='none'?1:650,easing:'ease-out'});
    }
    return live;
  }
  function createReplayElement(item,line){
    const overlay=document.querySelector('#stage .content-overlay');if(!overlay)return null;
    const fx=item.entryFx||'fade';let wrapper,text;
    const captionStyle=item.style==='caption'||String(item.style||'').startsWith('caption-');
    if(item.sfx){wrapper=document.createElement('div');wrapper.className=`sfx fx-${fx}`;text=wrapper;text.textContent=item.text||'';}
    else if(captionStyle||(item.speaker||line.speaker)==='narrator'){wrapper=document.createElement('div');wrapper.className=`caption fx-${fx} caption-${item.align||line.align||'center'}`;text=wrapper;text.textContent=item.text||'';}
    else{wrapper=document.createElement('div');wrapper.className=`bubble-wrap align-${item.align||line.align||'center'}`;const speaker=item.speaker||line.speaker||'';const bubble=document.createElement('div');bubble.className=`bubble ${speaker==='none'?'no-speaker':speaker} fx-${fx} bubble-${item.align||line.align||'center'}`;bubble.textContent=item.text||'';wrapper.appendChild(bubble);text=bubble;}
    wrapper.dataset.storyPosition=positions.some(([value])=>value===item.position)?item.position:defaultPosition(line);
    wrapper.style.setProperty('--story-margin',marginOffsets[item.margin||'M']||marginOffsets.M);
    wrapper.style.zIndex=String(Math.max(1,Math.min(10,Number(item.zIndex)||1)));
    wrapper.style.width=`${({'1/4':25,'1/3':33.333,'1/2':50,'2/3':66.667,'3/4':75,'1':100}[item.width||line.width||'1/2'])||50}%`;
    wrapper.style.maxWidth='95%';
    wrapper.dataset.storyRotation=String(Number(item.rotation)||0);
    text.dataset.storyRotation=String(Number(item.rotation)||0);
    wrapper.style.setProperty('--story-rotation',`${Number(item.rotation)||0}deg`);
    const preset=styles.some(([value])=>value===item.style)?item.style:(item.sfx?'sfx-impact':'comic');
    wrapper.dataset.storyStyle=preset;wrapper.dataset.storySfx=String(Boolean(item.sfx));text.dataset.storyStyle=preset;text.dataset.storySfx=String(Boolean(item.sfx));
    if(!item.sfx)text.style.setProperty('padding',textPadding(item,preset,text.classList.contains('caption')),'important');
    text.style.fontWeight=item.bold?'900':'';text.style.fontStyle=item.italic?'italic':'';
    if(fontFamilies[item.font])text.style.setProperty('font-family',`"${fontFamilies[item.font]}"`,'important');
    if(Number(item.fontSize)>0)text.style.setProperty('font-size',`${item.fontSize}px`,'important');
    if(!item.sfx&&text!==wrapper){wrapper.style.setProperty('--bubble-width',item.width||'1/2');}
    overlay.appendChild(wrapper);replayElements.add(wrapper);
    text.animate(effectFrames(fx,true),{duration:fx==='none'?1:650,easing:'ease-out'});
    return {wrapper,text};
  }
  function clearReplayElements(){for(const element of replayElements)element.remove();replayElements.clear();}
  function buildSelects(){
    actSelect.replaceChildren(...acts.map((act,i)=>new Option(`Act ${i+1}: ${act.name || act.id || 'Untitled'}`,i)));
    renderLines();
  }
  function renderLines(){
    const lines=activeAct()?.lines||[];
    lineSelect.replaceChildren(...lines.map((line,i)=>new Option(`${i+1}. ${(line.text||line.sfx||line.items?.[0]?.text||'Scene').slice(0,55)}`,i)));
    currentLineIndex=Math.min(currentLineIndex,Math.max(0,lines.length-1)); lineSelect.value=currentLineIndex; renderItems();
  }
  function renderItems(){
    const items=getItems();
    itemSelect.replaceChildren(...items.map((item,i)=>new Option(`${item.sfx?'SFX':'Text'} ${i+1}: ${(item.text||'New item').slice(0,22)}`,i)));
    currentItemIndex=Math.min(currentItemIndex,Math.max(0,items.length-1));itemSelect.value=String(currentItemIndex);renderForm();
  }
  function field(label, control){ return `<label class="se-label">${label}</label>${control}`; }
  function renderForm(){
    const line=activeLine(),item=activeItem(); if(!line||!item){fields.textContent='No items in this scene yet. Add text or SFX above.';return;}
    const position=item.position || defaultPosition(line);
    const availableStyles=styles.filter(([value])=>item.sfx?value.startsWith('sfx-'):!value.startsWith('sfx-'));
    fields.innerHTML = `<div class="se-field">${field('Text',`<textarea class="se-text" data-prop="text">${escape(item.text||'')}</textarea>`)}</div>
      <fieldset class="se-sfx-field"><legend class="se-label">Special effect (SFX)</legend><label class="se-toggles"><input type="checkbox" data-prop="sfx" ${item.sfx?'checked':''}> Show this item as a special effect</label></fieldset>
      <div class="se-field">${field('Speaker',`<select data-prop="speaker">${speakerChoices.map(({value,label})=>`<option value="${escape(value)}" ${(item.speaker||'narrator')===value?'selected':''}>${escape(label)}</option>`).join('')}</select>`)}</div>
      <div class="se-field">${field('Text alignment',`<select data-prop="align">${[['left','Left'],['center','Center'],['right','Right']].map(([value,label])=>`<option value="${value}" ${(item.align||'center')===value?'selected':''}>${label}</option>`).join('')}</select>`)}</div>
      ${field('Position',`<div class="se-grid">${positions.map(([value,label])=>`<button type="button" data-position="${value}" title="${label}" aria-label="${label}" aria-pressed="${position===value}"><svg class="se-position-icon" viewBox="0 0 24 24" aria-hidden="true">${positionIcons[value]}</svg></button>`).join('')}</div>`)}
      <div class="se-formrow"><div class="se-field">${field('Width',`<select data-prop="width">${widthChoices.map(([value,label])=>`<option value="${value}" ${(item.width||'1/2')===value?'selected':''}>${label}</option>`).join('')}</select>`)}</div><div class="se-field">${field('Edge margin',`<select data-prop="margin">${marginChoices.map(([value,label])=>`<option value="${value}" ${(item.margin||'M')===value?'selected':''}>${value} · ${label}</option>`).join('')}</select>`)}</div></div>
      <div class="se-field">${field('Balloon padding',`<select data-prop="padding">${marginChoices.map(([value,label])=>`<option value="${value}" ${(item.padding||'M')===value?'selected':''}>${value} · ${label}</option>`).join('')}</select>`)}</div>
      <div class="se-field">${field('Stack order (1–10)',`<div class="se-rotation"><input data-prop="zIndex" type="range" min="1" max="10" step="1" value="${Math.max(1,Math.min(10,Number(item.zIndex)||1))}" aria-label="Stack order"><output data-zindex-value>${Math.max(1,Math.min(10,Number(item.zIndex)||1))}</output></div>`)}</div></div>
      ${field('Rotation',`<div class="se-rotation"><input data-prop="rotation" type="range" min="-180" max="180" step="1" value="${Number(item.rotation)||0}" aria-label="Text rotation"><output data-rotation-value>${Number(item.rotation)||0}°</output></div>`)}
      <div class="se-formrow"><div class="se-field">${field('Appear delay (seconds)',`<input data-prop="delay" type="number" min="0" max="30" step="0.1" value="${Math.min(30,Number(item.delay ?? 0)/1000)}"><input data-slider-prop="delay" type="range" min="0" max="30" step="0.1" value="${Math.min(30,Number(item.delay ?? 0)/1000)}" aria-label="Appear delay in seconds">`)}</div><div class="se-field">${field('Time on screen (seconds, 0 = forever)',`<input data-prop="visibleDuration" type="number" min="0" max="30" step="0.1" value="${Math.min(30,Number(item.visibleDuration ?? 0)/1000)}"><input data-slider-prop="visibleDuration" type="range" min="0" max="30" step="0.1" value="${Math.min(30,Number(item.visibleDuration ?? 0)/1000)}" aria-label="Time on screen in seconds">`)}</div></div>
      <div class="se-field">${field('Font',`<select data-prop="font">${fontOptionMarkup(item.font||'default')}</select><div class="se-font-links"><a href="https://blambot.com/collections/dialogue-fonts" target="_blank" rel="noopener noreferrer">Browse Dialogue Fonts</a><a href="https://blambot.com/collections/sound-effect-fonts" target="_blank" rel="noopener noreferrer">Browse Sound Effect Fonts</a></div>`)}</div>
      <div class="se-formrow"><div class="se-field">${field('Appear effect',`<select data-prop="entryFx">${effects.map(x=>`<option value="${x}" ${(item.entryFx||'fade')===x?'selected':''}>${x}</option>`).join('')}</select>`)}</div><div class="se-field">${field('Disappear effect',`<select data-prop="exitFx">${effects.map(x=>`<option value="${x}" ${(item.exitFx||'fade')===x?'selected':''}>${x}</option>`).join('')}</select>`)}</div></div>
      <div class="se-field">${field('Font size (px, 0 = story default)',`<input data-prop="fontSize" type="number" min="0" max="160" step="1" value="${Math.max(0,Math.min(160,Number(item.fontSize)||0))}"><input data-slider-prop="fontSize" type="range" min="0" max="160" step="1" value="${Math.max(0,Math.min(160,Number(item.fontSize)||0))}" aria-label="Font size in pixels">`)}</div>
      <div class="se-field">${field(item.sfx?'SFX style':'Text style',`<select data-prop="style">${availableStyles.map(([v,l])=>`<option value="${v}" ${(item.style|| (item.sfx?'sfx-impact':'comic'))===v?'selected':''}>${l}</option>`).join('')}</select>`)}</div>
      <div class="se-toggles"><label><input type="checkbox" data-prop="bold" ${item.bold?'checked':''}> Bold</label><label><input type="checkbox" data-prop="italic" ${item.italic?'checked':''}> Italic</label></div>`;
    if(panel.classList.contains('open'))previewLine(item);
  }
  function updateLine(prop,value){
    const line=activeLine(),item=activeItem(); if(!line||!item)return;
    if(prop==='delay'||prop==='visibleDuration'){
      item[prop]=Math.max(0,Math.min(30000,Number(value)||0));
      const seconds=item[prop]/1000;
      const field=fields.querySelector(`[data-prop="${prop}"]`),slider=fields.querySelector(`[data-slider-prop="${prop}"]`);
      if(field)field.value=String(seconds);
      if(slider)slider.value=String(seconds);
    }
    else if(prop==='rotation') item.rotation=Math.max(-180,Math.min(180,Number(value)||0));
    else if(prop==='zIndex'){item.zIndex=Math.max(1,Math.min(10,Number(value)||1));const output=fields.querySelector('[data-zindex-value]');if(output)output.value=String(item.zIndex);}
    else if(prop==='fontSize'){
      item.fontSize=Math.max(0,Math.min(160,Number(value)||0));
      const field=fields.querySelector('[data-prop="fontSize"]'),slider=fields.querySelector('[data-slider-prop="fontSize"]');
      if(field)field.value=String(item.fontSize);
      if(slider)slider.value=String(item.fontSize);
    }
    else if(prop==='bold'||prop==='italic'||prop==='sfx') item[prop]=Boolean(value);
    else item[prop]=value;
    if(prop==='sfx'){
      item.type=item.sfx?'sfx':'text';
      if(item.sfx&&!String(item.style||'').startsWith('sfx-'))item.style='sfx-impact';
      if(!item.sfx&&String(item.style||'').startsWith('sfx-'))item.style='comic';
      const option=itemSelect.options[currentItemIndex];
      if(option)option.textContent=`${item.sfx?'SFX':'Text'} ${currentItemIndex+1}: ${(item.text||'New item').slice(0,22)}`;
      if(!item.sfx&&line.items.filter(candidate=>!candidate.sfx)[0]===item)line.text=item.text;
      if(item.sfx&&line.items.filter(candidate=>candidate.sfx)[0]===item)line.sfx=item.text;
      renderForm();
      setStatus('Item type updated. Export the act JSON to keep the change.');
      return;
    }
    if(prop==='text'){
      const option=itemSelect.options[currentItemIndex];
      if(option)option.textContent=`${item.sfx?'SFX':'Text'} ${currentItemIndex+1}: ${(item.text||'New item').slice(0,22)}`;
      if(!item.sfx&&line.items.filter(candidate=>!candidate.sfx)[0]===item&&lineSelect.options[currentLineIndex])lineSelect.options[currentLineIndex].textContent=`${currentLineIndex+1}. ${(item.text||'Scene').slice(0,55)}`;
    }
    if(!item.sfx&&line.items.filter(candidate=>!candidate.sfx)[0]===item)line.text=item.text;
    if(item.sfx&&line.items.filter(candidate=>candidate.sfx)[0]===item)line.sfx=item.text;
    previewLine(item,false);
    setStatus('Unsaved edits. Export the act JSON when ready.');
  }
  function close(){ replayToken++; clearReplayElements();panel.classList.remove('open'); restoreStoryText(); }
  toggle.addEventListener('click',()=>{panel.classList.add('open');if(activeItem())previewLine(activeItem(),true);});
  panel.addEventListener('click',async e=>{
    const target=e.target instanceof Element?e.target:e.target?.parentElement;
    const action=target?.closest('[data-action]')?.dataset.action;
    if(action==='close'){close();return;}
    if(action==='export'){exportAct();return;}
    if(action==='import'){fileInput.click();return;}
    if(action==='reset'){await loadActs();setStatus('Loaded act JSON from the story files.');return;}
    if(action==='replay'){replayChapter();return;}
    if(action==='next'){nextText();return;}
    if(action==='previous'){previousText();return;}
    if(action==='add-text'){addItem(false);return;}
    if(action==='remove-item'){removeItem();return;}
    const pos=target?.closest('[data-position]')?.dataset.position;
    if(pos){updateLine('position',pos);renderForm();}
  });
  panel.addEventListener('input',e=>{const el=e.target;if(el.dataset.sliderProp){const prop=el.dataset.sliderProp;updateLine(prop,['delay','visibleDuration'].includes(prop)?Number(el.value)*1000:Number(el.value));return;}if(el.dataset.prop&&el.type!=='checkbox'){updateLine(el.dataset.prop,['delay','visibleDuration'].includes(el.dataset.prop)?Number(el.value)*1000:el.value);if(el.dataset.prop==='rotation'){const output=panel.querySelector('[data-rotation-value]');if(output)output.value=`${Number(el.value)||0}°`;}}});
  panel.addEventListener('change',e=>{const el=e.target;if(el.dataset.sliderProp){const prop=el.dataset.sliderProp;updateLine(prop,['delay','visibleDuration'].includes(prop)?Number(el.value)*1000:Number(el.value));return;}if(el.dataset.prop)updateLine(el.dataset.prop,el.type==='checkbox'?el.checked:['delay','visibleDuration'].includes(el.dataset.prop)?Number(el.value)*1000:el.value);});
  actSelect.addEventListener('change',()=>{
    currentActIndex=Number(actSelect.value);currentLineIndex=0;renderLines();
    const storySelect=document.getElementById('chapterSelect');
    if(storySelect){storySelect.value=String(currentActIndex);storySelect.dispatchEvent(new Event('change',{bubbles:true}));}
    window.setTimeout(()=>previewLine(activeLine(),true),700);
  });
  lineSelect.addEventListener('change',()=>{currentLineIndex=Number(lineSelect.value);currentItemIndex=0;renderItems();});
  itemSelect.addEventListener('change',()=>{currentItemIndex=Number(itemSelect.value);renderForm();});
  fileInput.addEventListener('change',async()=>{
    const file=fileInput.files?.[0]; if(!file)return;
    try{const imported=JSON.parse(await file.text());if(!Array.isArray(imported.lines))throw new Error('The JSON must contain a lines array.');imported.__editorFile=activeAct().__editorFile;acts[currentActIndex]=imported;renderLines();setStatus(`Imported ${file.name}. Export to save a downloadable act file.`);}catch(err){setStatus(`Import failed: ${err.message}`);}finally{fileInput.value='';}
  });
  async function loadActs(){
    const response=await fetch('data/manifest.json');if(!response.ok)throw new Error('Story manifest not found');
    const manifest=await response.json();
    acts=await Promise.all(manifest.acts.map(async item=>{const r=await fetch(`data/${item.file}`);if(!r.ok)throw new Error(`Could not load ${item.file}`);const act=await r.json();act.__editorFile=item.file;return act;}));
    buildSelects();
  }
  function exportAct(){
    const act=activeAct();if(!act)return;
    const out={...act};delete out.__editorFile;
    out.lines=(out.lines||[]).map((line,sceneIndex)=>{
      const items=getItems(line,sceneIndex).map(item=>({...item,type:item.sfx?'sfx':'text',sfx:Boolean(item.sfx),position:item.position||defaultPosition(line),margin:marginOffsets[item.margin]?item.margin:'M',padding:paddingFactors[item.padding]?item.padding:'M',rotation:Number(item.rotation)||0,zIndex:Math.max(1,Math.min(10,Number(item.zIndex)||1)),speaker:item.speaker||line.speaker||'narrator',align:item.align||line.align||'center',width:item.width||line.width||'1/2',font:item.font||'default',fontSize:Number(item.fontSize)||0,delay:Number(item.delay)||0,visibleDuration:Number(item.visibleDuration)||0,entryFx:item.entryFx||'fade',exitFx:item.exitFx||'fade',style:item.style||(item.sfx?'sfx-impact':'comic'),bold:Boolean(item.bold),italic:Boolean(item.italic)}));
      const exported={...line};
      for(const key of ['speaker','fx','delay','align','text','width','valign','sfx','style','bold','italic','position','rotation','font','fontSize','visibleDuration','exitFx','sfxRotation','sfxFontSize','__editorFile'])delete exported[key];
      exported.items=items;
      return exported;
    });
    const blob=new Blob([JSON.stringify(out,null,2)+'\n'],{type:'application/json'});
    const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download=act.__editorFile||`${act.id||'act'}.json`;anchor.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    setStatus(`Exported ${anchor.download}. Replace the matching file in this story's data folder to publish it.`);
  }
  function nextText(){
    replayToken++;clearReplayElements();
    const items=getItems();
    if(currentItemIndex+1<items.length){currentItemIndex++;itemSelect.value=String(currentItemIndex);renderForm();previewLine(activeItem(),true);return;}
    const lines=activeAct()?.lines||[];
    if(currentLineIndex+1<lines.length){currentLineIndex++;lineSelect.value=String(currentLineIndex);renderItems();previewLine(activeItem(),true);return;}
    if(currentActIndex+1<acts.length){currentActIndex++;actSelect.value=String(currentActIndex);actSelect.dispatchEvent(new Event('change',{bubbles:true}));return;}
    setStatus('You have reached the last text element in this story.');
  }
  function previousText(){
    replayToken++;clearReplayElements();
    if(currentItemIndex>0){currentItemIndex--;itemSelect.value=String(currentItemIndex);renderForm();previewLine(activeItem(),true);return;}
    if(currentLineIndex>0){currentLineIndex--;lineSelect.value=String(currentLineIndex);currentItemIndex=Math.max(0,getItems(activeAct().lines[currentLineIndex],currentLineIndex).length-1);renderItems();previewLine(activeItem(),true);return;}
    if(currentActIndex>0){
      currentActIndex--;actSelect.value=String(currentActIndex);
      currentLineIndex=Math.max(0,(activeAct()?.lines||[]).length-1);
      currentItemIndex=Math.max(0,getItems(activeAct()?.lines?.[currentLineIndex],currentLineIndex).length-1);
      renderLines();previewLine(activeItem(),true);return;
    }
    setStatus('You are at the first text element in this story.');
  }
  function addItem(isSfx){
    const line=activeLine();if(!line)return;
    const items=getItems(line);items.push(makeItem(line,isSfx));currentItemIndex=items.length-1;renderItems();
    const input=fields.querySelector('[data-prop="text"]');input?.focus();input?.select();
    setStatus(`${isSfx?'SFX':'Text'} item added. Set its timing to sequence or overlap it with other items.`);
  }
  function removeItem(){
    const line=activeLine(),items=getItems(line);if(!items.length)return;
    items.splice(currentItemIndex,1);currentItemIndex=Math.max(0,currentItemIndex-1);renderItems();setStatus('Item removed. Export the act JSON to keep the change.');
  }
  async function replayChapter(){
    const token=++replayToken, act=activeAct();if(!act)return;
    clearReplayElements();
    const line=activeLine();if(!line)return;
    const items=getItems(line);
    const liveAtSceneStart=getLiveText();if(liveAtSceneStart)liveAtSceneStart.text.style.opacity='0';
    const primary=items.find(item=>!item.sfx)||items[0];
    const jobs=items.map(item=>new Promise(resolve=>window.setTimeout(async()=>{
      if(token!==replayToken){resolve();return;}
      const active=item===primary?previewLine(item,true):createReplayElement(item,line);
      const duration=Math.max(0,Number(item.visibleDuration)||0);
      if(duration===0){await new Promise(done=>setTimeout(done,item.entryFx==='none'?1:650));resolve();return;}
      await new Promise(done=>setTimeout(done,duration));
      if(token!==replayToken){resolve();return;}
      const exit=item.exitFx||'fade';
      if(active&&exit!=='none'){
        active.text.animate(effectFrames(exit,false),{duration:600,easing:'ease-in',fill:'forwards'});
      }
      if(item!==primary&&active){await new Promise(done=>setTimeout(done,exit==='none'?0:600));active.wrapper.remove();replayElements.delete(active.wrapper);}
      resolve();
    },Math.max(0,Number(item.delay)||0))));
    await Promise.all(jobs);
    if(token===replayToken){if(primary&&Number(primary.visibleDuration)===0){const live=getLiveText();if(live)live.text.style.opacity='1';}setStatus('Scene replay complete. Items with 0 seconds stay visible until you move to another scene.');}
  }
  document.addEventListener('keydown',e=>{
    if(!panel.classList.contains('open'))return;
    if(e.key==='Escape'){close();return;}
    if(!panel.contains(e.target)&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key)){e.preventDefault();e.stopPropagation();}
  },true);
  (async()=>{try{await loadActs();}catch(err){toggle.hidden=true;console.warn('Story editor unavailable:',err);}})();
})();
