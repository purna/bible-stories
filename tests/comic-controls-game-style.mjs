import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const{chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 for(const story of ['Abraham','Adam']){
  const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true,serviceWorkers:'block'}),page=await context.newPage();
  await page.goto(`http://127.0.0.1:8123/${story}/`,{waitUntil:'domcontentloaded'});await page.locator('#startBtn').evaluate(b=>b.click());await page.locator('#storyControls #storyEditorToggle').waitFor({state:'visible'});
  assert.equal(await page.locator('#storyEditorToggle svg').count(),1);assert.equal((await page.locator('#storyEditorToggle').textContent()).trim(),'');assert.equal(await page.locator('.story-footer').count(),0);
  await page.locator('#storyEditorToggle').tap();await page.locator('#storyEditorPanel.open').waitFor();await page.getByRole('button',{name:'Close editor',exact:true}).tap();
  await page.locator('#infoToggle').tap();await page.locator('.story-info-modal').waitFor({state:'visible'});assert.match(await page.locator('.story-copyright').textContent(),/Copyright 2026 pixelagent.co.uk/);await page.locator('.story-info-close').tap();
  if(story==='Abraham'){
   for(let line=1;line<4;line++){await page.evaluate(()=>StoryPlayer.nextLine());await page.waitForFunction(i=>StoryPlayer.state.lineIndex===i,line);await page.waitForFunction(()=>document.querySelector('.content-overlay'));}
   await page.waitForTimeout(1200);await page.locator('#nextBtn').tap();await page.locator('.chapter-game').waitFor();
   const style=await page.locator('.chapter-game').evaluate(el=>({border:getComputedStyle(el).borderTopWidth,font:getComputedStyle(el.querySelector('h2')).fontFamily,shadow:getComputedStyle(el).boxShadow}));
   assert.equal(style.border,'4px');assert.match(style.font,/Bangers/);assert.notEqual(style.shadow,'none');
   assert.ok(await page.locator('.chapter-game').evaluate(el=>el.scrollWidth<=el.clientWidth));
  }
  console.log(`Passed ${story}: pencil control, editor interaction, copyright in modal${story==='Abraham'?', comic game skin':''}`);await context.close();
 }
}finally{await browser.close();}
