/* Shared chapter-game navigation: a visible selector and an escape for every game. */
(()=>{
 const selector='#abrahamGame:not([hidden]),#jonahGame:not([hidden]),.creation-overlay,.gathering-overlay,.hearing-overlay:not([aria-hidden="true"]),#gamePanel.open,#visionOverlay.show,#actGame:not([hidden])';
 function sync(){
  const hud=document.querySelector('#hud');if(hud&&hud.parentElement!==document.body)document.body.appendChild(hud);
  const games=[...document.querySelectorAll(selector)];const active=String(games.length>0);
  if(document.body.dataset.chapterGameActive!==active)document.body.dataset.chapterGameActive=active;
  if(hud){const height=`${Math.ceil(hud.getBoundingClientRect().height)}px`;if(document.documentElement.style.getPropertyValue('--story-hud-height')!==height)document.documentElement.style.setProperty('--story-hud-height',height);}
  for(const game of games){
   let button=game.querySelector('#skipChapterGame,#game-skip-btn,[data-creation-skip],[data-gathering-skip],[data-hearing-skip],.shared-game-skip,#actGameClose');
   if(!button){button=document.createElement('button');button.type='button';button.className='shared-game-skip';button.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('story:skipgame')));game.prepend(button);}
   if(button.textContent!=='Skip →')button.textContent='Skip →';
   const finish=game.querySelector('#continueChapter,#game-complete-btn,[data-creation-finish],[data-gathering-finish],[data-hearing-finish],#actGameContinue');
   const complete=Boolean(game.querySelector('[data-game-complete="true"]')||game.dataset.gameComplete==='true'||game.id!=='jonahGame'&&finish&&!finish.hidden&&getComputedStyle(finish).display!=='none');
   if(button.hidden!==complete)button.hidden=complete;
   if(game.classList.contains('game-ui-complete')!==complete)game.classList.toggle('game-ui-complete',complete);
   let celebration=game.querySelector('.shared-game-celebration');
   if(complete&&!game.querySelector('.game-celebration')&&!celebration){
    celebration=document.createElement('section');celebration.className='shared-game-celebration';celebration.setAttribute('role','status');
    celebration.innerHTML='<h2>Well done!</h2><div class="game-celebration-description">You can continue the story.</div><svg class="game-win-icon" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4l11 15 18-5 2 19 15 11-12 15 5 19-20 1-11 17-15-12-19 5-2-20L5 58l12-15-5-19 20-2z" fill="#ffcf4f" stroke="#17131f" stroke-width="4" stroke-linejoin="round"/><path d="M29 50l14 14 28-30" fill="none" stroke="#21895c" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg><p>Chapter complete!</p>';
    const panel=game.querySelector('.creation-panel,.gathering-panel,.hearing-panel,.act-game-card')||game;panel.appendChild(celebration);
   }else if(!complete&&celebration)celebration.remove();

   if(finish&&!finish.hidden&&finish.textContent!=='Continue →')finish.textContent='Continue →';
   for(const control of game.querySelectorAll('button')){
    let name=control.dataset.gameIcon;
    if(!name){
     if(control===button)continue;
     else if(control===finish)continue;
     else if(control.dataset.key)name=control.dataset.key.replace('arrow','');
     else if(control.matches('#game-hold-btn'))name='listen';
     else if(control.matches('.game-retry,[data-game-retry]'))name='retry';
     else if(control.matches('.river-token'))name='river';
     else if(control.matches('.song-word'))name='music';
     else if(control.matches('.sequence-card,.vision-assembly-options button'))name='order';
     else if(control.matches('.fragment-hotspot'))name='search';
     else name='choice';
    }
    if(name==='next'||name==='skip'){control.querySelector('.game-action-picture')?.remove();control.classList.remove('game-button-with-icon');continue;}
    window.StoryGameIcons?.decorate(control,name);
   }

  }
 }
 let scheduled=false;const schedule=()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;sync();});};
 new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','aria-hidden']});
 document.addEventListener('change',event=>{
  if(event.target.id!=='chapterSelect')return;
  window.dispatchEvent(new CustomEvent('story:chapterchanging'));

 },true);
 window.addEventListener('resize',schedule);sync();
})();
