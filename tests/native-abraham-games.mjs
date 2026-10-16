import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:667,height:375}]){
  const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,serviceWorkers:'block'});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(let act=1;act<=10;act++){
   await page.goto(`http://127.0.0.1:8123/Abraham/play.html?act=${act}`,{waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>window.StoryPlayer?.chapters.length===10);
   await page.locator('#startBtn').evaluate(b=>b.click());
   assert.equal(await page.locator('.chapter-game').count(),0,'Read the comic before the game');
   await page.waitForFunction(()=>document.querySelector('.content-overlay'));
   for(let line=1;line<4;line++){await page.evaluate(()=>StoryPlayer.nextLine());await page.waitForFunction(i=>StoryPlayer.state.lineIndex===i,line);await page.waitForFunction(()=>document.querySelector('.content-overlay'));}
   await page.waitForTimeout(1200);await page.locator('#nextBtn').tap();
   await page.locator('.chapter-game').waitFor();assert.equal(await page.locator('iframe,frame').count(),0);
   await page.waitForFunction(()=>[...document.querySelectorAll('.chapter-game button')].every(button=>button.querySelector('svg')));
   const sizes=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,buttons:[...document.querySelectorAll('.chapter-game button')].map(b=>({w:b.getBoundingClientRect().width,h:b.getBoundingClientRect().height}))}));
   assert.ok(sizes.scroll<=sizes.width,`Act ${act} horizontal overflow ${JSON.stringify(sizes)}`);assert.ok(sizes.buttons.every(b=>b.w>=44&&b.h>=44));
   if(act===2){assert.equal(await page.locator('[data-game-icon="give"]').count(),3);assert.equal(await page.locator('[data-game-icon="take"]').count(),3);assert.equal(await page.locator('[data-game-icon="check"]').count(),1);}
   const tap=label=>page.getByRole('button',{name:label,exact:true}).tap();
   if(act===1)for(const cell of [15,16,11,6,7,8,3,4])await page.locator(`[data-cell="${cell}"]`).tap();
   if(act===2){const cards=page.locator('.game-card');for(const [i,n] of [2,1,3].entries())for(let t=0;t<n;t++)await cards.nth(i).getByRole('button',{name:'Give one',exact:true}).tap();await tap('Check the repairs');}
   if(act===3){for(const label of ['Survey Hill country','Survey River plain','Survey Shared boundary'])await tap(label);await tap('Offer Lot first choice');}
   if(act===4){await tap('Send North team');await tap('Advance lantern');await tap('Send East team');await tap('Advance lantern');await tap('Send West team');}
   if(act===5)for(let n=1;n<=6;n++)await tap(`Star ${n}`);
   if(act===6){await tap('Search 1');await tap('Search 7');}
   if(act===7){await tap('Mix dough');await tap('Bake bread');await tap('Fill the water jug');await tap('Serve the visitors');}
   if(act===8){for(const names of [['Lot','His wife'],['Daughter one','Daughter two']]){for(const name of names)await tap(name);await tap('Escort selected people');}}
   if(act===9)for(const name of ['Poles','Pegs','Canopy']){await tap(`Choose ${name}`);await tap(`Fit ${name}`);}
   if(act===10){for(let i=0;i<2;i++)await tap('Add wood');for(let i=0;i<3;i++)await tap('Add water');await tap('Climb with these provisions');await tap('Receive the provided ram');}
   await page.locator('#continueChapter').waitFor({state:'visible'});
   await page.waitForFunction(()=>document.querySelector('#skipChapterGame').hidden);
   assert.equal(await page.locator('.game-win-icon').count(),1);assert.equal(await page.locator('#continueChapter').textContent(),'Continue →');
   assert.equal(await page.locator('.game-celebration-title').textContent(),'Well done!');assert.equal(await page.evaluate(n=>localStorage.getItem(`bible-game:Abraham:${n}`),act),'complete');
   if(act===1){await page.locator('#continueChapter').tap();await page.waitForFunction(()=>StoryPlayer.state.actIndex===1);assert.ok(await page.locator('#abrahamGame').evaluate(el=>el.hidden));}
  }
  assert.deepEqual(errors,[]);assert.equal(await page.evaluate(()=>localStorage.getItem('bible-story:Abraham:complete')),'complete');await page.locator('#abrahamBonus').waitFor();
  console.log(`Passed Abraham chapters 1–10 at ${viewport.width}x${viewport.height}: comic before game, direct rendering, touch completion, no overflow, progress and bonus unlock`);await context.close();
 }
 const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true,serviceWorkers:'block'}),page=await context.newPage();
 await page.addInitScript(()=>{let runtime;window.runtimeAssignments=0;Object.defineProperty(window,'StoryRuntime',{configurable:true,get:()=>runtime,set:value=>{runtime=value;window.runtimeAssignments++;}});});
 await page.goto('http://127.0.0.1:8123/David/',{waitUntil:'domcontentloaded'});await page.locator('#startBtn').evaluate(b=>b.click());await page.locator('#infoToggle').tap();await page.locator('.story-info-modal').waitFor({state:'visible'});await page.locator('.story-info-close').tap();assert.equal(await page.evaluate(()=>window.runtimeAssignments),1);assert.equal(await page.evaluate(()=>StoryRuntime.isLocked()),false);console.log('Passed David: one shared runtime, mobile modal opens and closes');await context.close();
}finally{await browser.close();}
