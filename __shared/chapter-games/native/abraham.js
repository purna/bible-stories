// Ten distinct, directly mounted chapter interactions. No embedded documents.
export const chapterGames = [
 ['road-markers','Follow the road markers'], ['make-amends','Make things right'],
 ['land-survey','Give Lot first choice'], ['rescue-signals','Coordinate the night rescue'],
 ['constellation-trace','Trace the promise'], ['spring-search','Find the hidden spring'],
 ['hospitality-kitchen','Prepare a welcome'], ['household-evacuation','Bring the household to safety'],
 ['tent-construction','Raise the celebration tent'], ['mountain-provisions','Prepare for the mountain']
];
export function mountAbrahamGame(host, chapter, {onComplete=()=>{}}={}) {
 const abort=new AbortController(),signal=abort.signal;let won=false;
 const game=document.createElement('section');game.className='chapter-game';game.setAttribute('aria-label',chapterGames[chapter.number-1]?.[1]||'Chapter game');host.replaceChildren(game);
 const node=(tag,text,parent=game,className='')=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;parent.appendChild(el);return el;};
 const title=node('h2',chapterGames[chapter.number-1]?.[1]);
 const instruction=node('p','');
 const board=node('div','',game,'game-cards');
 const status=node('p','',game,'game-status');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const tell=text=>{status.textContent=text;if(status.dataset.gameIcon)window.StoryGameIcons?.decorate(status,status.dataset.gameIcon);};
 const button=(label,action,parent=board,iconName='')=>{const b=node('button',label,parent);b.type='button';if(iconName){b.dataset.gameIcon=iconName;window.StoryGameIcons?.decorate(b,iconName);}b.addEventListener('click',()=>{if(!won)action(b);},{signal});return b;};
 const actions=(parent=board)=>node('div','',parent,'game-actions');
 const grid=(cols,parent=board)=>{const el=node('div','',parent,'game-grid');el.style.setProperty('--cols',cols);return el;};
 const win=()=>{
  if(won)return;won=true;abort.abort();game.dataset.gameComplete='true';board.replaceChildren();
  title.textContent='Well done!';title.classList.add('game-celebration-title');instruction.hidden=false;instruction.textContent='You can continue the story.';instruction.classList.add('game-celebration-description');status.hidden=true;
  const celebration=node('div','',board,'game-success game-celebration');
  celebration.innerHTML='<svg class="game-win-icon" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M50 4l11 15 18-5 2 19 15 11-12 15 5 19-20 1-11 17-15-12-19 5-2-20L5 58l12-15-5-19 20-2z" fill="#ffcf4f" stroke="#17131f" stroke-width="4" stroke-linejoin="round"/><path d="M29 50l14 14 28-30" fill="none" stroke="#21895c" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  node('p','Chapter complete!',celebration,'game-complete-label');
  onComplete({chapter:chapter.number,mechanic:chapterGames[chapter.number-1][0]});
 };
 const card=heading=>{const c=node('div','',board,'game-card');node('h3',heading,c);return c;};
 const games={
  1(){
   instruction.textContent='Follow the connected road out of Haran. Tap the next road square beside your current position.';
   const route=[20,15,16,11,6,7,8,3,4],cells=[],g=grid(5);let step=0;
   const icon=type=>{
    const paths={
     start:'<path d="M11 53V9"/><path d="M12 10h31l-8 10 8 10H12z" fill="#238b67"/><path d="M5 54h16"/>',
     end:'<path d="M11 53V9"/><path d="M12 10h32v24H12z" fill="#fffaf0"/><path d="M12 10h8v8h-8zm16 0h8v8h-8zm-8 8h8v8h-8zm16 0h8v8h-8zm-24 8h8v8h-8zm16 0h8v8h-8z" fill="#17131f" stroke="none"/><path d="M5 54h16"/>',
     hill:'<path d="M4 49L22 18l13 20 8-14 17 25z" fill="#7ba26b"/><path d="M16 28l6-10 7 11" fill="#fffaf0"/>',
     road:'<path d="M9 57c-2-18 27-20 25-32-1-7-10-10-7-18h22c-4 12 5 17 4 26-1 14-24 15-21 24z" fill="#fff4d6"/><path d="M20 57c0-15 24-17 23-29-1-10-10-13-5-21" stroke-dasharray="5 6"/>'
    };
    return `<svg class="route-icon route-icon-${type}" viewBox="0 0 64 64" fill="none" stroke="#17131f" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[type]}</svg>`;
   };

   for(let i=0;i<25;i++){const road=route.includes(i);const b=button(i===20?'Start':i===4?'Canaan':road?'Road':'Hill',()=>{
    if(i===route[step+1]){step++;cells[i].classList.add('visited');tell(`${step} of ${route.length-1} road markers followed.`);if(step===route.length-1)win();}else tell('Follow the next connected road square.');
   },g);b.className='route-cell';b.dataset.cell=i;b.dataset.road=road;b.setAttribute('aria-label',i===20?'Start in Haran':i===4?'Finish in Canaan':`${road?'Road':'Hill'}, row ${Math.floor(i/5)+1}, column ${i%5+1}`);b.innerHTML=icon(i===20?'start':i===4?'end':road?'road':'hill');cells.push(b);}
   cells[20].classList.add('visited');tell('Start at the bottom-left road marker.');
  },
  2(){
   instruction.textContent='Make fair repairs after a fearful mistake. Share six supplies so every household receives the amount it needs.';
   const needs=[2,1,3],given=[0,0,0],labels=['Food for the workers','Water for the travellers','Repairs for the household'];
   const displays=[];const refresh=()=>{displays.forEach((d,i)=>d.textContent=`Needs ${needs[i]} · Given ${given[i]}`);tell(`${6-given.reduce((a,b)=>a+b,0)} supplies left.`);};
   labels.forEach((label,i)=>{const c=card(label);displays.push(node('p','',c));const a=actions(c);button('Give one',()=>{if(given.reduce((a,b)=>a+b,0)<6)given[i]++;refresh();},a,'give');button('Take one back',()=>{given[i]=Math.max(0,given[i]-1);refresh();},a,'take');});
   button('Check the repairs',()=>{if(given.every((v,i)=>v===needs[i]))win();else tell('Check what each household needs. You can move supplies between them.');},board,'check');refresh();
  },
  3(){
   instruction.textContent='Survey both places before offering Lot the first choice. Gather the facts by inspecting each landscape.';
   const seen=new Set(),survey=[['Hill country','Open grazing, rocky paths and room for a camp.'],['River plain','Plenty of water and rich green pastures.'],['Shared boundary','Both households need space for their flocks.']];
   const shortLabels=['Survey hills','Survey river','Survey boundary'];
   survey.forEach(([label,detail],i)=>{const b=button(shortLabels[i],b=>{seen.add(i);b.setAttribute('aria-pressed','true');tell(detail);offer.disabled=seen.size!==3;},board,'survey');b.setAttribute('aria-label',`Survey ${label}`);b.classList.add('survey-option');});
   const offer=button('Offer first choice',()=>win(),board,'offer');offer.setAttribute('aria-label','Offer Lot first choice');offer.classList.add('survey-option');offer.disabled=true;status.dataset.gameIcon='inspect';tell('Inspect all 3 areas.');
  },
  4(){
   instruction.textContent='Coordinate three rescue teams. Advance the lantern signal, then send each team only when its own signal is lit.';
   const names=['North team','East team','West team'],sent=new Set();let phase=0;
   const lantern='<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" fill="none" stroke="#17131f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 12V9a7 7 0 0114 0v3M14 15h20l4 23H10z" fill="#fff4d6"/><path d="M15 38h18v6H15zM15 10h18v6H15z" fill="#39a96b"/><path d="M24 21c-8 9-4 13 0 13s8-4 0-13z" fill="#ffad43"/></svg>';
   const direction=i=>`<svg class="rescue-compass" viewBox="0 0 48 48" aria-hidden="true" focusable="false" fill="none" stroke="#17131f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="21" fill="#fff4d6"/><circle cx="24" cy="24" r="17" stroke="#9b895d" stroke-width="1"/><path d="M24 4v5m0 30v5M4 24h5m30 0h5M10 10l4 4m20 20 4 4M10 38l4-4m20-20 4-4"/><path d="m24 12 4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#d8d7c0" stroke-width="1"/><g transform="rotate(${[0,90,-90][i]} 24 24)"><path d="m24 9 5 15-5 15-5-15z" fill="#fffaf0"/><path d="m24 9 5 15h-10z" fill="${['#39a96b','#508fc9','#bb76c4'][i]}"/></g><circle cx="24" cy="24" r="2.5" fill="#17131f"/></svg>`;
   const decorate=(b,svg)=>{const label=b.textContent;b.classList.add('game-option-icon');b.innerHTML=svg;node('span',label,b);};
   const lamp=node('div','',board,'game-task-panel');lamp.id='rescueSignal';lamp.setAttribute('role','status');lamp.setAttribute('aria-live','polite');lamp.innerHTML=lantern;
   const lampLabel=node('div','',lamp);node('strong','YOUR TASK',lampLabel,'game-task-kicker');const current=node('span','',lampLabel);
   const show=()=>{current.textContent=`Lantern signal: ${names[phase]}`;lamp.dataset.signal=['north','east','west'][phase];advance.classList.toggle('needs-advance',sent.has(phase)&&sent.size<3);};
   const advance=button('Advance lantern',()=>{phase=(phase+1)%3;show();});advance.setAttribute('aria-describedby','rescueSignal');decorate(advance,lantern);
   names.forEach((name,i)=>{const b=button(`Send ${name}`,b=>{if(i!==phase){tell('Wait for this team’s lantern signal.');return;}sent.add(i);b.disabled=true;tell(`${sent.size} of 3 teams in position.`);show();if(sent.size===3)win();});decorate(b,direction(i));});show();tell('Send each team at the right signal.');
  },
  5(){
   instruction.textContent='Trace a constellation in the night sky. Find and tap stars 1 through 6 in order.';
   const sky=node('div','',board,'sky'),g=grid(3,sky);let next=1;
   for(const n of [4,1,6,2,5,3]){
    const b=button(`Star ${n}`,b=>{if(n!==next){tell(`Find star ${next} to continue the constellation.`);return;}b.disabled=true;next++;tell(`${next-1} stars joined.`);if(next===7)win();},g);
    b.className='constellation-star';b.setAttribute('aria-label',`Star ${n}`);
    b.innerHTML=`<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="m50 5 13 27 30 5-22 22 5 31-26-14-26 14 5-31L7 37l30-5z" fill="#ffd84d" stroke="#17131f" stroke-width="5" stroke-linejoin="round"/><text x="50" y="59" text-anchor="middle" fill="#17131f" font-family="Nunito,system-ui,sans-serif" font-weight="900" font-size="30">${n}</text></svg>`;
   }
   tell('Begin with star 1.');
  },
  6(){
   instruction.textContent='Help Hagar find water. Inspect the sand and use the distance clues to locate the spring.';
   const g=grid(4),spring=6;
   for(let i=0;i<16;i++)button(`Search ${i+1}`,b=>{if(i===spring){win();return;}const distance=Math.abs(i%4-spring%4)+Math.abs(Math.floor(i/4)-Math.floor(spring/4));b.disabled=true;b.textContent=distance===1?'Very near':distance===2?'Nearby':'Farther away';tell(distance===1?'Water is in a neighbouring square.':`The spring is ${distance} squares away.`);},g,'search');
   tell('Search a square for your first clue.');
  },
  7(){
   instruction.textContent='Prepare hospitality for the visitors. Mix dough before baking bread, fill the water jug, and serve when everything is ready.';
   let dough=false,bread=false,water=false;
   const mix=button('Mix dough',b=>{dough=true;b.disabled=true;tell('The dough is ready for the oven.');},board,'dough');
   button('Bake bread',b=>{if(!dough){tell('Mix the dough before baking.');return;}bread=true;b.disabled=true;tell('Fresh bread is ready.');},board,'bread');
   button('Fill the water jug',b=>{water=true;b.disabled=true;tell('Cool water is ready.');},board,'water');
   button('Serve the visitors',()=>{if(bread&&water)win();else tell('Prepare both fresh bread and water before serving.');},board,'serve');tell('Start preparing the meal.');
  },
  8(){
   instruction.textContent='Bring the household to safety. The gate admits two people at a time. Select a pair, then escort them out; bring everyone before collecting possessions.';
   const names=['Lot','His wife','Daughter one','Daughter two'],selected=new Set(),safe=new Set(),buttons=[];
   names.forEach((name,i)=>buttons.push(button(name,b=>{if(selected.has(i)){selected.delete(i);b.setAttribute('aria-pressed','false');}else if(selected.size<2){selected.add(i);b.setAttribute('aria-pressed','true');}else tell('The gate has room for two people at a time.');},board,'person')));
   button('Escort selected people',()=>{if(selected.size!==2){tell('Select two people to escort together.');return;}for(const i of selected){safe.add(i);buttons[i].disabled=true;buttons[i].setAttribute('aria-pressed','false');}selected.clear();tell(`${safe.size} of 4 people are safe.`);if(safe.size===4)win();},board,'escort');tell('Choose the first pair to escort.');
  },
  9(){
   instruction.textContent='Raise a celebration tent for Isaac. Choose a part, then fit it to the matching place. Pegs need poles, and the canopy needs both poles and pegs.';
   const placed=new Set();let selected=null;
   const parts=actions();parts.classList.add('tent-parts');for(const part of ['Poles','Pegs','Canopy'])button(part,b=>{selected=part;parts.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));tell(`${part} selected. Tap its matching place.`);},parts,({Poles:'poles',Pegs:'pegs',Canopy:'canopy'})[part]).setAttribute('aria-label',`Choose ${part}`);
   for(const part of ['Canopy','Pegs','Poles'])button(`Fit ${part}`,b=>{if(selected!==part){tell('Choose the matching part first.');return;}if(part==='Pegs'&&!placed.has('Poles')||part==='Canopy'&&placed.size<2){tell('Fit the poles first, then the pegs, then the canopy.');return;}placed.add(part);b.disabled=true;selected=null;tell(`${part} fitted.`);if(placed.size===3)win();},board,({Poles:'poles',Pegs:'pegs',Canopy:'canopy'})[part]);tell('Build from the ground up.');
  },
  10(){
   instruction.textContent='Prepare the mountain journey. Carry exactly two bundles of wood and three water flasks within a seven-unit carrying limit, then climb.';
   let wood=0,water=0;const inventory=node('p','',board);const update=()=>inventory.textContent=`Wood ${wood} · Water ${water} · Load ${wood*2+water}/7`;
   for(const [label,change,icon] of [['Add wood',()=>wood++,'wood:add'],['Remove wood',()=>wood=Math.max(0,wood-1),'wood:take'],['Add water',()=>water++,'water:add'],['Remove water',()=>water=Math.max(0,water-1),'water:take']])button(label,()=>{change();update();},board,icon);
   button('Climb with these provisions',()=>{if(wood===2&&water===3){board.replaceChildren();instruction.textContent='The journey is prepared. A ram is caught nearby. Respond to the provision.';button('Receive the provided ram',win,board,'ram');tell('Look for the provision.');}else tell('Prepare exactly two wood bundles and three water flasks.');},board,'mountain');update();tell('Plan the load before climbing.');
  }
 };
 const start=games[chapter.number];if(!start)throw new Error('This chapter game is not available.');start();
 return {destroy(){abort.abort();game.remove();},mechanic:chapterGames[chapter.number-1][0]};
}
