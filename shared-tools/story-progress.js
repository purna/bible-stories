/* Chapter progress shared by the existing players and the common JSON player. */
(()=>{
 const script=document.currentScript,id=script.dataset.story;
 const root=new URL('../',script.src),seen=new Set();
 const read=key=>{try{return localStorage.getItem(key);}catch{return null;}};
 function markChapter(index,total){if(!Number.isInteger(index)||index<0||index>=total)return;seen.add(index);try{localStorage.setItem(`bible-chapter:${id}:${index+1}`,'complete');}catch{}}
 function allComplete(total){return Array.from({length:total},(_,i)=>seen.has(i)||read(`bible-chapter:${id}:${i+1}`)==='complete').every(Boolean);}
 function openMap(){try{localStorage.setItem(`bible-story:${id}:complete`,'complete');}catch{}const destination=new URL('journey.html',root);destination.searchParams.set('completed',id);location.assign(destination.href);}
 window.StoryProgress={id,markChapter,allComplete,openMap};
 window.addEventListener('bible-story-complete',event=>{if(String(event.detail?.story).toLowerCase()===id.toLowerCase())openMap();});
})();
