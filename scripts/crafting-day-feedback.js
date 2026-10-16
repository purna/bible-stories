/* Clear day boundaries without discarding inventory or planting progress. */
(()=>{
 const originalDraw=draw,originalRest=rest;let wasExhausted=false,newDayMessage='';
 const style=document.createElement('style');style.textContent=`.craft-day-message{background:#dfcff2;color:#172b38;border:3px solid #172b38;border-radius:8px;padding:16px;margin:14px 0;box-shadow:4px 4px #172b38;font:700 16px/1.5 system-ui}.craft-day-message h2{font:900 25px/1.2 system-ui;margin:0 0 8px}.craft-day-message p{margin:0 0 12px}.craft-day-message button{min-height:48px;border:3px solid #172b38;border-radius:5px;background:#ffb45c;color:#172b38;padding:12px 18px;font:900 17px system-ui;cursor:pointer}.craft-day-message button:focus-visible{outline:4px solid #2885ce;outline-offset:4px}`;document.head.append(style);
 draw=function(){
  originalDraw();if(typeof S==='undefined'||!S)return;
  const exhausted=S.act<=0&&!S.rev&&!S.fin;
  if(exhausted||newDayMessage){
   const panel=document.createElement('section');panel.className='craft-day-message';panel.id='craftDayMessage';panel.setAttribute('role','status');panel.setAttribute('aria-live','polite');
   const title=document.createElement('h2');title.textContent=exhausted?'Day '+S.day+' is over!':'A new day begins!';
   const description=document.createElement('p');description.textContent=exhausted?'You have used all six actions. Rest to get six new actions. Your materials and crafting progress are safe.':newDayMessage;
   panel.append(title,description);
   if(exhausted){const next=document.createElement('button');next.type='button';next.id='craftStartDay';next.textContent='Start new day →';next.setAttribute('aria-label','Start new day, day '+(S.day+1));next.onclick=()=>rest();panel.append(next);}
   document.getElementById('app').prepend(panel);
   if(exhausted&&!wasExhausted){const next=panel.querySelector('button');next.focus({preventScroll:true});panel.scrollIntoView({block:'nearest',behavior:'instant'});}
  }
  document.querySelectorAll('button[onclick="rest()" ]').forEach(button=>{button.hidden=exhausted;button.textContent='Rest until tomorrow';});
  wasExhausted=exhausted;newDayMessage='';
 };
 rest=function(){newDayMessage='Day '+(S.day+1)+' has started. You have six fresh actions. Keep gathering and crafting!';wasExhausted=false;originalRest();};
 if(typeof S!=='undefined'&&S)draw();
})();
