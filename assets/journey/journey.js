const shapes={
 leaf:'<path d="M10 39C-2 12 20 4 40 5c0 21-8 43-30 34z" fill="#80bc76"/><path d="m8 43 26-30"/>',
 footsteps:'<ellipse cx="16" cy="15" rx="6" ry="11" transform="rotate(-20 16 15)" fill="#ffb45c"/><ellipse cx="33" cy="30" rx="6" ry="11" transform="rotate(20 33 30)" fill="#ffb45c"/>',
 ark:'<path d="M3 29h42l-9 13H12z" fill="#cc935b"/><path d="M10 29V17l14-9 14 9v12z" fill="#ffe4aa"/><path d="M21 28v-9h7v9M3 45q9-5 18 0t24 0"/>',
 tower:'<path d="M10 44V31h5V20h5V8h10v12h5v11h5v13z" fill="#d6a977"/><path d="M22 44V34h7v10M20 20h10M15 31h20"/>',
 tent:'<path d="m24 5 21 36H3z" fill="#ffb45c"/><path d="m24 5 6 36H18z" fill="#fff4d6"/>',
 ladder:'<path d="M10 45 17 3M29 45 36 3M16 9h19M14 19h19M13 29h18M11 39h19"/>',
 grain:'<path d="M24 44V7m0 28c-14 1-16-7-16-11 10 0 16 5 16 11zm0-12C10 24 8 16 8 12c10 0 16 5 16 11zm0 7c14 1 16-7 16-11-10 0-16 5-16 11zm0-13C38 18 40 10 40 6c-10 0-16 5-16 11z" fill="#e7b94f"/>',
 tablets:'<path d="M3 43V13a10 10 0 0120 0v30zm22 0V13a10 10 0 0120 0v30z" fill="#d0d9d7"/><path d="M8 19h10M8 27h10M30 19h10M30 27h10"/>',
 trumpet:'<path d="M6 20h22L42 8v32L28 28H6z" fill="#ffcf76"/><path d="M16 28v13h9V28"/>',
 palm:'<path d="M21 45 25 16M25 17C12 0 5 9 3 19c12-5 16-3 22-2zm0 0C37 0 44 9 46 19c-12-5-16-3-21-2z" fill="#80bc76"/>',
 lantern:'<path d="M17 12V9a7 7 0 0114 0v3M14 15h20l4 23H10z" fill="#fff4d6"/><path d="M24 20c-8 8-5 14 0 14s8-6 0-14z" fill="#ffb45c"/>',
 prayer:'<path d="m7 44 5-18 9-20 4 2-4 21-5 15m25 0-5-18-9-20-4 2 4 21 5 15" fill="#edbc92"/>',
 scroll:'<path d="M11 8h27v31H10l-5 5h28l5-5M11 8a5 5 0 10-10 0v25h10z" fill="#fff4d6"/><path d="M18 17h14M18 24h14M18 31h9"/>',
 harp:'<path d="M9 7h31l-5 35H20z" fill="#ffcf76"/><path d="m15 12 8 24m0-24 4 24m5-24-1 24M5 6l17 38"/>',
 flame:'<path d="M26 3c5 14 17 17 15 30C38 50 9 49 7 32c-1-8 6-13 10-18 0 8 4 11 6 10 1-9-2-13 3-21z" fill="#ff965c"/>',
 water:'<path d="M24 3C19 14 9 22 9 31a15 15 0 0030 0C39 22 29 14 24 3z" fill="#70c7df"/>',
 sun:'<circle cx="24" cy="24" r="11" fill="#ffcf76"/><path d="M24 2v7m0 30v7M2 24h7m30 0h7M8 8l5 5m22 22 5 5M8 40l5-5m22-22 5-5"/>',
 fish:'<path d="M9 24c12-22 28-20 35 0C37 44 21 46 9 24zm0 0-7-12v24z" fill="#70c7df"/><circle cx="34" cy="22" r="1"/>',
 lion:'<circle cx="24" cy="24" r="21" fill="#cc935b"/><path d="m13 16 3-7 7 5 8-5 4 7v17l-11 8-11-8z" fill="#ffcf76"/><path d="M18 24h1m10 0h1m-9 7h6m-3 0v5"/>',
 crown:'<path d="M8 38 3 10l13 12 8-17 8 17 13-12-5 28z" fill="#ffcf76"/><path d="M8 44h32"/>',
 wall:'<path d="M4 43V10h8v8h8v-8h8v8h8v-8h8v33z" fill="#d6a977"/><path d="M20 43V31a4 4 0 018 0v12M5 26h38M13 26v9m23-9v9"/>'
};
const icon=name=>`<svg viewBox="0 0 48 48" fill="none" stroke="#152b39" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name]||shapes.scroll}</svg>`;
const check='<span class="completion-check" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3"><path d="m3 10 5 5 9-10"/></svg></span>';
const stops=document.querySelector('#storyStops'),route=document.querySelector('#journeyRoute'),panel=document.querySelector('#storyInfo');
const requested=new URLSearchParams(location.search).get('completed');let selectedButton;
const stored=id=>{try{return localStorage.getItem(`bible-story:${id}:complete`)==='complete';}catch{return false;}};
function showInfo(story,button){
 if(selectedButton)selectedButton.setAttribute('aria-expanded','false');selectedButton=button;button.setAttribute('aria-expanded','true');
 document.querySelector('#selectedIcon').innerHTML=icon(story.icon);
 document.querySelector('#selectedTitle').textContent=story.title;document.querySelector('#selectedReferences').textContent=story.references;
 document.querySelector('#selectedDescription').textContent=story.description;document.querySelector('#selectedChapters').textContent=`${story.chapters} chapters`;
 document.querySelector('#selectedStatus').textContent=story.complete?'Story complete':'Your next adventure';
 const link=document.querySelector('#selectedLink');link.href=story.entry;link.textContent=story.complete?'Read again →':'Read story →';panel.hidden=false;
}
const close=()=>{panel.hidden=true;selectedButton?.setAttribute('aria-expanded','false');selectedButton?.focus();};
document.querySelector('#closeStoryInfo').onclick=close;document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close();});
try{
 const response=await fetch('assets/journey/stories.json');if(!response.ok)throw Error('Story map unavailable.');
 const stories=await response.json();stories.forEach(story=>story.complete=stored(story.id)||story.id===requested);
 stories.forEach((story,index)=>{
  if(index){const previous=stories[index-1];const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',`M${previous.x} ${previous.y} Q${(previous.x+story.x)/2} ${previous.y} ${story.x} ${story.y}`);path.setAttribute('class',`route-section${story.complete&&previous.complete?' done':''}`);route.appendChild(path);}
  const button=document.createElement('button');button.type='button';button.className=`story-stop${story.complete?' complete':''}${story.id===requested?' current':''}`;button.dataset.story=story.id;button.style.setProperty('--x',story.x+'%');button.style.setProperty('--y',story.y+'%');button.setAttribute('aria-label',`${story.title}${story.complete?' — complete':''}`);button.setAttribute('aria-controls','storyInfo');button.setAttribute('aria-expanded','false');
  const circle=document.createElement('span');circle.className='stop-circle';circle.innerHTML=icon(story.icon)+(story.complete?check:'');const name=document.createElement('span');name.className='stop-name';name.textContent=story.title;button.append(circle,name);button.onclick=()=>showInfo(story,button);stops.appendChild(button);
 });
 const total=stories.filter(s=>s.complete).length;document.querySelector('#journeyCount').textContent=`${total} of ${stories.length} stories complete`;
 const current=stories.find(s=>s.id===requested);if(current){document.querySelector('#journeyMessage').textContent=`Well done! You completed ${current.title}. Choose your next adventure.`;const b=stops.querySelector(`[data-story="${current.id}"]`);requestAnimationFrame(()=>b.scrollIntoView({block:'center',behavior:'instant'}));if(matchMedia('(min-width:1000px)').matches)showInfo(current,b);}
}catch(error){document.querySelector('#journeyMessage').textContent='The journey map could not load. Please reload or return to Bible stories.';console.error(error);}
