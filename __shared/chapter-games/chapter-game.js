(() => {
  'use strict';
  const script = document.currentScript;
  const storyKey = script.dataset.story;
  const act = Number(script.dataset.act || 1);
  const ROOT = '../../../story-canon.json';

  const TYPES = [
    {id:'fit', re:/build|repair|assemble|measure|fit|place|raise|arrange the.*room|platform|shelter/i, name:'Fit the Pieces'},
    {id:'path', re:/navigate|guide|follow|walk|climb|cross|road|route|journey|lead|escape|flee|carry.*to/i, name:'Find the Faithful Path'},
    {id:'watch', re:/hide|unseen|ambush|scout|survey|track|rescue|alerting|patrol/i, name:'Watch and Move'},
    {id:'gather', re:/collect|gather|grain|food|feed|water|pour|prepare|pack|stock|provision|jar|manna|release animals/i, name:'Gather with Care'},
    {id:'pattern', re:/sort|match|pair|order|identify|recognise|recognize|trace|reassemble|constellation|family tree|map mosaic/i, name:'See the Pattern'},
    {id:'listen', re:/listen|hear|prayer|pray|message|warning|speak|deliver|explain|tell|call|song|melody|words/i, name:'Listen and Respond'},
    {id:'balance', re:/manage|tend|distribut|balance|plan|reserve|care|calm|clean|assign|allot|settle|restore|debts|fields/i, name:'Keep the Balance'},
    {id:'look', re:/choose|choice|weigh|motive|half-truth|claims|test|inspect|notice|spot|uncover|compare|honest|truth/i, name:'Look Closely'},
    {id:'timing', re:/throw|sling|sound the trumpet|strike|race|hold|time|immer|march the pattern/i, name:'Ready, Then Act'},
    {id:'sequence', re:/.*/, name:'Complete the Story Beat'}
  ];

  const css = `
  :root{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;color:#2c241b;background:#f3eadb;--ink:#2c241b;--paper:#fffaf0;--accent:#8d5b35;--gold:#d6a94b;--good:#397a56;--muted:#756b60}
  *{box-sizing:border-box} body{margin:0;min-height:100vh;display:grid;place-items:center;padding:18px;background:radial-gradient(circle at top,#fff8e9,#eadbc4)}
  .game{width:min(760px,100%);background:var(--paper);border:2px solid #d5c1a6;border-radius:24px;box-shadow:0 16px 40px #4b36231f;overflow:hidden}
  header{padding:22px 22px 14px;border-bottom:1px solid #eadbc7}.eyebrow{font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}h1{margin:.25rem 0;font-size:clamp(1.7rem,5vw,2.6rem)}.objective{font-size:1.06rem;color:#4d443b;margin:.45rem 0 0;line-height:1.45}
  .status{display:flex;gap:10px;align-items:center;justify-content:space-between;padding:12px 22px;background:#f8f0e4;color:var(--muted);font-weight:700}.progress{height:8px;flex:1;max-width:260px;background:#e0d1bb;border-radius:99px;overflow:hidden}.progress i{display:block;height:100%;width:0;background:var(--good);transition:width .25s}
  .play{padding:24px;min-height:330px;display:grid;place-items:center}.panel{width:min(560px,100%)}.hint{text-align:center;color:var(--muted);margin:0 0 18px;min-height:2.8em}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.tile,.choice,.token,.beat{min-height:64px;border:2px solid #ccb897;background:white;border-radius:16px;padding:10px;font:inherit;font-weight:800;color:var(--ink);cursor:pointer;touch-action:manipulation}.tile:hover,.choice:hover,.token:hover,.beat:hover,.tile:focus-visible,.choice:focus-visible,.token:focus-visible,.beat:focus-visible{outline:3px solid #d6a94b88;outline-offset:2px}.tile.done,.choice.done,.token.done,.beat.done{background:#e7f3ea;border-color:#73a582;color:#235c3a}.tile.wrong,.choice.wrong{animation:shake .22s}.way{aspect-ratio:1;display:grid;place-items:center}.way.current{background:#fff0bf;border-color:#d6a94b}.way.safe{background:#e7f3ea}.way.blocked{background:#eee5da;color:#9a9187}.meters{display:grid;gap:14px}.meter{background:#eee4d5;border-radius:14px;padding:12px}.bar{height:16px;background:#ddceba;border-radius:99px;overflow:hidden;margin-top:8px}.bar i{display:block;height:100%;background:#7ca57e;width:50%;transition:width .2s}.tokens{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:18px}.timing{height:46px;background:#e5d8c4;border-radius:99px;position:relative;overflow:hidden}.window{position:absolute;left:42%;width:22%;top:0;bottom:0;background:#dcebd8}.marker{position:absolute;width:16px;height:100%;background:#8d5b35;left:0}.big{display:block;width:100%;margin-top:18px;min-height:58px;border:0;border-radius:16px;background:var(--accent);color:white;font:inherit;font-weight:900;font-size:1.05rem;cursor:pointer}.big:disabled{opacity:.45}.payoff{padding:28px;text-align:center}.payoff h2{font-size:2rem;margin:.25rem}.verse{font-family:Georgia,serif;font-size:1.1rem;line-height:1.5}.hidden{display:none!important}@keyframes shake{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
  `;
  const style=document.createElement('style'); style.textContent=css; document.head.appendChild(style);

  function esc(s){return String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
  function classify(ch){const text=`${ch.title} ${ch.game}`; return TYPES.find(t=>t.re.test(text));}
  function complete(story,ch,type){
    document.querySelector('.play').innerHTML=`<div class="payoff"><div class="eyebrow">Chapter complete</div><h2>${esc(ch.title)}</h2><p class="verse">${esc(story.references)}</p><p>You took part in the story beat: ${esc(ch.game)}</p><button class="big" id="again">Play again</button></div>`;
    document.querySelector('.progress i').style.width='100%';
    document.querySelector('#again').onclick=()=>location.reload();
    try{localStorage.setItem(`bible-game:${storyKey}:${act}`,'complete')}catch{}
    window.parent?.postMessage({type:'bible-story-game-complete',story:storyKey,act,mechanic:type.id},'*');
  }
  function stepper(story,ch,type,labels){
    let done=0; const play=document.querySelector('.play');
    play.innerHTML=`<div class="panel"><p class="hint">Complete the three story actions in order.</p><div class="grid">${labels.map((x,i)=>`<button class="beat" data-i="${i}">${esc(x)}</button>`).join('')}</div></div>`;
    play.querySelectorAll('.beat').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(i!==done){b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),250);return;} b.classList.add('done');b.disabled=true;done++;document.querySelector('.progress i').style.width=`${done/labels.length*100}%`;if(done===labels.length)setTimeout(()=>complete(story,ch,type),300)});
  }
  function pathGame(story,ch,type){
    const path=[0,1,4,7,8], blocked=new Set([2,3,5,6]); let pos=0, idx=0; const play=document.querySelector('.play');
    play.innerHTML=`<div class="panel"><p class="hint">Tap a neighbouring safe marker to reach the goal.</p><div class="grid">${Array.from({length:9},(_,i)=>`<button class="tile way ${i===0?'current':''} ${blocked.has(i)?'blocked':''}" data-i="${i}">${i===0?'Start':i===8?'Goal':'•'}</button>`).join('')}</div></div>`;
    const draw=()=>play.querySelectorAll('.way').forEach(x=>{const i=+x.dataset.i;x.classList.toggle('current',i===pos);x.classList.toggle('safe',path.slice(0,idx).includes(i));});
    play.querySelectorAll('.way').forEach(b=>b.onclick=()=>{const n=+b.dataset.i;if(n===path[idx+1]){idx++;pos=n;draw();document.querySelector('.progress i').style.width=`${idx/(path.length-1)*100}%`;if(pos===8)setTimeout(()=>complete(story,ch,type),300)}else{b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),220)}});
  }
  function choiceGame(story,ch,type){
    const play=document.querySelector('.play'); let found=0; const cards=['Observe','Compare','Respond'];
    play.innerHTML=`<div class="panel"><p class="hint">Look carefully. Reveal each clue before you respond.</p><div class="grid">${cards.map((c,i)=>`<button class="choice" data-i="${i}">${c}</button>`).join('')}</div><button class="big" id="confirm" disabled>Complete the story beat</button></div>`;
    play.querySelectorAll('.choice').forEach(b=>b.onclick=()=>{if(!b.classList.contains('done')){b.classList.add('done');found++;b.textContent=['Clue noticed','Meaning checked','Response ready'][+b.dataset.i];document.querySelector('.progress i').style.width=`${found/4*100}%`;if(found===3)play.querySelector('#confirm').disabled=false}});
    play.querySelector('#confirm').onclick=()=>complete(story,ch,type);
  }
  function balanceGame(story,ch,type){
    const play=document.querySelector('.play'); let vals=[45,55,50], moves=0;
    play.innerHTML=`<div class="panel"><p class="hint">Keep all three needs in the safe middle band.</p><div class="meters">${['Care','Provision','Courage'].map((n,i)=>`<div class="meter"><strong>${n}</strong><div class="bar"><i data-m="${i}" style="width:${vals[i]}%"></i></div></div>`).join('')}</div><div class="tokens">${[0,1,2].map(i=>`<button class="token" data-i="${i}">Help ${i+1}</button>`).join('')}</div></div>`;
    play.querySelectorAll('.token').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;vals=vals.map((v,j)=>Math.max(30,Math.min(70,v+(j===i?7:-2))));moves++;vals.forEach((v,j)=>play.querySelector(`[data-m="${j}"]`).style.width=v+'%');document.querySelector('.progress i').style.width=`${Math.min(100,moves/3*100)}%`;if(moves>=3)setTimeout(()=>complete(story,ch,type),250)});
  }
  function timingGame(story,ch,type){
    const play=document.querySelector('.play');let raf,start=performance.now(),x=0,dir=1;
    play.innerHTML=`<div class="panel"><p class="hint">Act when the marker reaches the highlighted window.</p><div class="timing"><div class="window"></div><div class="marker"></div></div><button class="big" id="act">Ready — act</button></div>`;
    const marker=play.querySelector('.marker');function tick(){x+=dir*.85;if(x>=96||x<=0)dir*=-1;marker.style.left=x+'%';raf=requestAnimationFrame(tick)}tick();
    play.querySelector('#act').onclick=()=>{if(x>=40&&x<=66){cancelAnimationFrame(raf);complete(story,ch,type)}else{play.querySelector('.hint').textContent='Nearly. The timing window is wider now — try again.';document.querySelector('.window').style.cssText='left:32%;width:42%'}};
  }
  function mount(story,ch){
    const type=classify(ch); document.title=`${story.title} — Act ${act}`;
    document.body.innerHTML=`<main class="game"><header><div class="eyebrow">${esc(story.title)} · Act ${act}</div><h1>${esc(ch.title)}</h1><p class="objective">${esc(ch.game)}</p></header><div class="status"><span>${esc(type.name)}</span><span class="progress" aria-label="progress"><i></i></span></div><section class="play" aria-live="polite"></section></main>`;
    if(type.id==='path'||type.id==='watch') return pathGame(story,ch,type);
    if(type.id==='look'||type.id==='pattern'||type.id==='listen') return choiceGame(story,ch,type);
    if(type.id==='balance') return balanceGame(story,ch,type);
    if(type.id==='timing') return timingGame(story,ch,type);
    const labels=type.id==='fit'?['Choose a piece','Place it carefully','Settle the structure']:type.id==='gather'?['Find what is needed','Gather with care','Stop when there is enough']:['Observe','Take the next action','Complete the story beat'];
    stepper(story,ch,type,labels);
  }
  fetch(ROOT).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(canon=>{const story=canon[storyKey];if(!story)throw Error('Story not found');const ch=story.chapters.find(c=>Number(c.number)===act);if(!ch)throw Error('Act not found');mount(story,ch)}).catch(err=>{
    document.body.innerHTML=`<main class="game"><header><div class="eyebrow">Bible Stories · Act ${act}</div><h1>${esc(storyKey)}</h1><p class="objective">This game loads its chapter objective from <code>story-canon.json</code>. Serve the repository over HTTP (for example Live Server/Vite) so the shared chapter data can load.</p></header><section class="play"><div class="panel"><p class="hint">${esc(err.message)}</p><button class="big" onclick="location.reload()">Try again</button></div></section></main>`;
  });
})();
