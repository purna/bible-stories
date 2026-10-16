import assert from'node:assert/strict';import{createRequire}from'node:module';const{chromium}=createRequire(import.meta.url)('playwright');const b=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 for(const [story,total]of[['Adam',6],['Moses',15],['Abraham',10]]){
  const context=await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'}),p=await context.newPage();p.on('pageerror',e=>console.log(story,e.stack));
  await p.addInitScript(({story,total})=>{for(let i=1;i<total;i++)localStorage.setItem(`bible-chapter:${story}:${i}`,'complete');},{story,total});
  await p.goto(`http://127.0.0.1:8123/${story}/`);await p.locator('#startBtn').evaluate(e=>e.click());
  if(story==='Abraham'){
   await p.waitForFunction(()=>window.StoryPlayer?.chapters.length===10);await p.evaluate(()=>StoryPlayer.selectChapter(9));await p.waitForFunction(()=>StoryPlayer.state.actIndex===9);await p.waitForTimeout(1600);
   for(let i=1;i<4;i++){await p.evaluate(()=>StoryPlayer.nextLine());await p.waitForFunction(n=>StoryPlayer.state.lineIndex===n,i);await p.waitForFunction(()=>document.querySelector('.content-overlay'));}
   await p.waitForTimeout(1200);await p.locator('#nextBtn').click();await p.locator('#skipChapterGame').click();
  }else{
   await p.waitForFunction(()=>typeof STORY!=='undefined'&&STORY.length>0);await p.waitForFunction(()=>document.querySelector('.content-overlay'));await p.evaluate(async()=>{actIdx=STORY.length-1;lineIdx=STORY[actIdx].lines.length-1;choicePending=false;await renderLine();});await p.waitForTimeout(2000);if(await p.locator('#choices.show .choiceBtn').count())await p.locator('#choices.show .choiceBtn').first().click();await p.locator('#nextBtn').click();
  }
  await p.waitForURL(`**/journey.html?completed=${story}`);await p.waitForSelector(`[data-story="${story}"].complete`);assert.equal(await p.evaluate(id=>localStorage.getItem(`bible-story:${id}:complete`),story),'complete');console.log(`Passed ${story}: final chapter leads to progression map and saves completion`);await context.close();
 }
}finally{await b.close();}
