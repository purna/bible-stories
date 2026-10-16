import {mountAbrahamGame} from '../../__shared/chapter-games/native/abraham.js?v=mobile-parts63';
const overlay=document.querySelector('#abrahamGame'),host=document.querySelector('#abrahamGameHost'),continueButton=document.querySelector('#continueChapter');
let game,continuation,activeChapter;
function recordChapterProgress(){
 try{localStorage.setItem(`bible-chapter:Abraham:${activeChapter}`,'complete');const allDone=Array.from({length:10},(_,i)=>localStorage.getItem(`bible-chapter:Abraham:${i+1}`)==='complete'||(localStorage.getItem(`bible-game:Abraham:${i+1}`)==='complete'||localStorage.getItem(`bible-chapter:Abraham:${i+1}`)==='complete')).every(Boolean);if(allDone)localStorage.setItem('bible-story:Abraham:complete','complete');document.querySelector('#abrahamBonus').hidden=!allDone;}catch{}
}
const close=()=>{game?.destroy();game=null;overlay.hidden=true;document.body.classList.remove('chapter-game-active');StoryRuntime.unlock('chapter-game');StoryRuntime.setMode('reading');};
document.querySelector('#skipChapterGame').onclick=()=>{recordChapterProgress();const next=continuation;continuation=null;close();next?.();};
window.addEventListener('story:chapterchanging',()=>{close();continuation=null;});
continueButton.onclick=()=>{const next=continuation;continuation=null;close();next?.();};
window.STORY_PLAYER_CONFIG={
 id:'abraham',initialChapter:Number(new URLSearchParams(location.search).get('act')||1)-1,
 characters:{abraham:'abraham',sarah:'sarah',lot:'lot',hagar:'hagar',isaac:'isaac',narrator:null,god:null},
 onChapterEnd({actIndex,continueStory}){
  const number=actIndex+1;activeChapter=number;continuation=continueStory;continueButton.hidden=true;
  document.querySelector('#abrahamBonus').hidden=true;
  document.querySelector('#gameChapterTitle').textContent=`Chapter ${number} challenge`;
  overlay.hidden=false;document.body.classList.add('chapter-game-active');StoryRuntime.setMode('game',{lock:'chapter-game'});
  game=mountAbrahamGame(host,{number},{onComplete(){
   recordChapterProgress();
   try{localStorage.setItem(`bible-game:Abraham:${number}`,'complete');}catch{}
   continueButton.hidden=false;continueButton.textContent='Continue →';
   let allDone=false;try{allDone=Array.from({length:10},(_,i)=>(localStorage.getItem(`bible-game:Abraham:${i+1}`)==='complete'||localStorage.getItem(`bible-chapter:Abraham:${i+1}`)==='complete')).every(Boolean);if(allDone)localStorage.setItem('bible-story:Abraham:complete','complete');}catch{}
   document.querySelector('#abrahamBonus').hidden=!allDone;
  }});
  document.querySelector('#skipChapterGame').focus();return true;
 }
};
await import('../../shared-tools/story-player.js?v=journey64');
