import {mountAbrahamGame, chapterGames} from '../../__shared/chapter-games/native/abraham.js';
const key=number=>`bible-game:Abraham:${number}`;
const completed=number=>{try{return localStorage.getItem(key(number))==='complete';}catch{return false;}};
const actNumber=Number(new URLSearchParams(location.search).get('act')||1);
const host=document.querySelector('#gameHost'),modal=document.querySelector('#completion');
let activeGame;
function showCompletion(chapter,chapters){
 const allDone=chapters.every(item=>completed(item.number));
 if(allDone){try{localStorage.setItem('bible-story:Abraham:complete','complete');}catch{}}
 const next=chapters.find(item=>item.number>chapter.number&&!completed(item.number))||chapters.find(item=>!completed(item.number));
 document.querySelector('#chapterProgress').textContent=`${chapters.filter(item=>completed(item.number)).length} / ${chapters.length} complete`;
 document.querySelector('#completionEyebrow').textContent=allDone?'ABRAHAM STORY COMPLETE':'CHAPTER COMPLETE';
 document.querySelector('#completionTitle').textContent=allDone?'Babel bonus unlocked!':'Well done!';
 document.querySelector('#completionMessage').textContent=allDone?'You completed all ten Abraham chapter challenges. The Tower of Babel bonus is now unlocked.':`Chapter ${chapter.number} is complete. Finish every Abraham chapter to unlock the Tower of Babel bonus.`;
 const actions=document.querySelector('#completionActions');actions.replaceChildren();
 const link=(label,href,secondary=false)=>{const a=document.createElement('a');a.className=`button${secondary?' secondary':''}`;a.textContent=label;a.href=href;actions.appendChild(a);};
 if(allDone)link('Read the Babel bonus →','Babel/index.html');else if(next)link('Next chapter →',`play.html?act=${next.number}`);
 link('Abraham chapters','index.html',true);modal.classList.add('show');actions.querySelector('a').focus();
 window.dispatchEvent(new CustomEvent('bible-story-game-complete',{detail:{story:'Abraham',act:chapter.number,mechanic:chapterGames[chapter.number-1][0]}}));
}
try{
 const response=await fetch('data/canon.json');if(!response.ok)throw Error('Chapter data could not be loaded.');
 const data=await response.json(),chapters=data.Abraham.chapters,chapter=chapters.find(item=>Number(item.number)===actNumber);
 if(!chapter)throw Error('That Abraham chapter could not be found. Return to the chapter list and choose a chapter.');
 document.title=`${chapter.title} — Abraham`;
 document.querySelector('#chapterEyebrow').textContent=`ABRAHAM · CHAPTER ${chapter.number} OF ${chapters.length}`;
 document.querySelector('#chapterTitle').textContent=chapter.title;document.querySelector('#chapterObjective').textContent=chapter.game;
 document.querySelector('#chapterProgress').textContent=`${chapters.filter(item=>completed(item.number)).length} / ${chapters.length} complete`;
 activeGame=mountAbrahamGame(host,chapter,{onComplete:()=>{try{localStorage.setItem(key(chapter.number),'complete');}catch{}showCompletion(chapter,chapters);}});
}catch(error){host.replaceChildren();const message=document.createElement('p');message.className='error';message.textContent=error.message;host.appendChild(message);}
window.addEventListener('pagehide',()=>activeGame?.destroy(),{once:true});
