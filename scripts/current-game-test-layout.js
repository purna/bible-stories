/* Standalone shell fixes: keep every live game phase visible outside the comic. */
(()=>{
 const style=document.createElement('style');style.textContent=`
 body{height:auto!important;min-height:100dvh!important;overflow-y:auto!important;padding-top:calc(var(--test-toolbar-height,78px) + 16px)!important}
 #testToolbar{position:fixed!important;top:0!important;margin:0!important;min-height:68px!important}#storyRuntimeMessage[data-kind="notice"],#testHost .shared-game-skip{display:none!important}
 #testHost{max-width:1000px!important;margin:18px auto!important;padding:12px!important;overflow:visible!important}
 #testHost #visionOverlay{height:auto!important;min-height:0!important;padding:16px!important;background:#183444!important;overflow:visible!important}
 #testHost #visionOverlay .vision-prompt{position:static!important;max-width:100%!important;margin:0 0 16px!important;padding:16px!important;background:#fff4d6!important;color:#172b38!important;text-shadow:none!important;font:800 17px/1.5 system-ui!important}
 #testHost #visionOverlay .vision-fragments{position:relative!important;inset:auto!important;width:100%!important;max-width:100%!important;max-height:none!important;height:auto!important;min-height:300px!important;aspect-ratio:3/2!important;transform:none!important;translate:none!important;background:#273448;border:3px solid #ffcf65}
 .tester-scene{position:absolute;inset:0;width:100%;height:100%;object-fit:fill;pointer-events:none}
 #testHost .fragment-hotspot{background:#ffcf65!important;color:#172b38!important;border:3px solid #172b38!important;z-index:2}
 #testHost .vision-assembly{position:relative!important;inset:auto!important;translate:none!important;transform:none!important;width:100%!important;max-width:100%!important;margin:16px 0!important}
 #testHost>#choices.show{position:relative!important;inset:auto!important;display:grid!important;gap:14px!important;transform:none!important;translate:none!important;width:100%!important;max-height:none!important;margin:18px 0!important;z-index:40!important}
 #testHost>#choices:not(.show){display:none!important}
 #testHost>#choices button{min-height:48px!important;white-space:normal!important;margin:0!important}
 #testHost>#fragmentCounter{position:relative!important;inset:auto!important;display:flex;flex-wrap:wrap;gap:12px;padding:12px!important;font:800 16px system-ui!important;color:#fff4d6!important}
 #testHost>#fragmentCounter.hidden{display:none!important}
 .tester-result{background:#fff4d6;color:#172b38;border:4px solid #172b38;padding:24px;margin:16px 0;font:800 18px/1.5 system-ui}.tester-result h2{font:italic 900 42px/1.1 Impact,system-ui;color:#e9992f;text-shadow:2px 2px #172b38}.tester-result a{display:inline-block;padding:12px;background:#ffb45c;border:3px solid #172b38;color:#172b38;min-height:44px}
 body[data-test-ready=true]>#app,body[data-test-ready=true]>.instructions,body[data-test-ready=true]>.sound-toggle,body[data-test-ready=true]>#soundBtn{display:none!important}
 `;document.head.append(style);
 const toolbar=document.querySelector('#testToolbar');if(toolbar){const size=()=>document.documentElement.style.setProperty('--test-toolbar-height',toolbar.getBoundingClientRect().height+'px');new ResizeObserver(size).observe(toolbar);size();}
 async function setup(){for(let n=0;n<300&&!document.body.dataset.testReady&&!document.body.dataset.testError;n++)await new Promise(r=>setTimeout(r,100));
  if(!location.pathname.includes('/Daniel/chapter-'))return;
  const host=document.querySelector('#testHost');if(!host)return;
  host.append(document.querySelector('#fragmentCounter'),document.querySelector('#choices'));
  const oldDelivery=showDeliveryChoices;showDeliveryChoices=function(){oldDelivery();const title=document.createElement('h2');title.textContent='Deliver the interpretation';title.style.color='#fff4d6';choicesBox.prepend(title);choicesBox.scrollIntoView({block:'nearest'});};
  const oldSelected=onDeliverySelected;onDeliverySelected=function(choice){oldSelected(choice);document.querySelector('#visionOverlay').hidden=true;const panel=document.createElement('section');panel.className='tester-result';panel.setAttribute('role','status');const h=document.createElement('h2');h.textContent='Well done!';const p=document.createElement('p');p.textContent=choice.note||'The interpretation is delivered.';const a=document.createElement('a');a.href=document.querySelector('#testExit').href;a.textContent='Continue →';panel.append(h,p,a);host.append(panel);document.querySelector('#testExit').textContent='Continue →';document.body.dataset.testComplete='true';panel.scrollIntoView({block:'nearest'});};
  const scene=VisionEngine.getScene(),container=document.querySelector('.vision-fragments');
  if(container&&scene){const img=document.createElement('img');img.className='tester-scene';img.alt='';img.src='assets/svg/'+(scene.id==='statue_dream'?'act2_scene_statue_dream.svg':'act4_scene_hand_writing.svg');container.prepend(img);}
 }
 setup();
})();
