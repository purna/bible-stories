import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true,serviceWorkers:'block'}),page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.stack));
 await page.goto('http://127.0.0.1:8123/Jonah/',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.StoryPlayer?.chapters.length===4);await page.locator('#startBtn').evaluate(b=>b.click());await page.evaluate(()=>StoryPlayer.ready);
 for(let chapter=0;chapter<4;chapter++){
  await page.waitForFunction(i=>StoryPlayer.state.actIndex===i,chapter);
  await page.waitForTimeout(1600);
  const count=await page.evaluate(()=>StoryPlayer.currentAct().lines.length);
  for(let line=1;line<count;line++){
   // Answer each story choice before continuing.
   if(await page.locator('#choices.show .choiceBtn').count())await page.locator('#choices.show .choiceBtn').first().tap();
   await page.evaluate(()=>StoryPlayer.nextLine());
   await page.waitForFunction(i=>StoryPlayer.state.lineIndex===i,line);
   await page.waitForFunction(()=>document.querySelector('.content-overlay'));
  }
  await page.waitForTimeout(1500);
  if(await page.locator('#choices.show .choiceBtn').count())await page.locator('#choices.show .choiceBtn').first().tap();
  await page.locator('#nextBtn').tap();await page.waitForFunction(()=>!document.querySelector('#jonahGame').hidden);
  assert.equal(await page.locator('iframe').count(),0);assert.equal(await page.evaluate(()=>StoryRuntime.getMode()),'game');
  await page.locator('#game-skip-btn').tap();
  if(chapter===3){await page.waitForURL('**/journey.html?completed=Jonah');await page.waitForSelector('[data-story="Jonah"].complete');}
  else{await page.waitForFunction(()=>document.querySelector('#jonahGame').hidden);assert.equal(await page.evaluate(()=>StoryRuntime.isLocked()),false);}
  console.log(`Passed Jonah chapter ${chapter+1}: shared JSON player, choices, direct game launch and return`);
 }
 assert.deepEqual(errors,[]);await context.close();
}finally{await browser.close();}
