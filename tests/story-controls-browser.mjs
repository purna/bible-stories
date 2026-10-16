import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const { chromium }=createRequire(import.meta.url)('playwright');
const base=process.env.STORY_TEST_URL||'http://127.0.0.1:8123';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try {
 for(const story of ['Adam','Ruth','Abraham/Babel']) {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,serviceWorkers:'block'});
  const page=await context.newPage();
  await page.goto(`${base}/${story}/`,{waitUntil:'domcontentloaded'});
  const skip=page.locator('.comic-loader-skip');
  if(await skip.isVisible())await skip.tap();
  await page.addStyleTag({content:'#startScreen * {animation:none!important;transition:none!important}'});
  await page.locator('#startBtn').tap({timeout:30000});
  await page.locator('#storyControls').waitFor({state:'visible'});
  await page.waitForFunction(()=>document.querySelector('#nextLineBtn').classList.contains('show'));
  await page.waitForTimeout(500);
  for(const viewport of [{width:390,height:844},{width:844,height:390},{width:320,height:568}]) {
   await page.setViewportSize(viewport);
   await page.waitForTimeout(500);
   const layout=await page.evaluate(()=>{
    const ids=['audioToggle','infoToggle','storyEditorToggle','nextLineBtn'];
    return ids.map(id=>{const node=document.getElementById(id),r=node.getBoundingClientRect();const top=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return{id,bottom:r.bottom,centre:r.y+r.height/2,width:r.width,height:r.height,hit:!!top&&(top===node||node.contains(top))};});
   });
   for(const button of layout)assert.ok(button.hit,`${story}: ${button.id} must receive taps above overlays`);
   assert.ok(Math.max(...layout.map(x=>x.centre))-Math.min(...layout.map(x=>x.centre))<2,`${story}: controls must align on one row ${JSON.stringify(layout)}`);
   await page.locator('#infoToggle').tap();
   await page.locator('.story-info-modal').waitFor({state:'visible'});
   assert.equal(await page.evaluate(()=>document.documentElement.dataset.storyInputLock),'info-modal');
   const close=page.locator('.story-info-close');
   assert.ok(await close.isVisible());
   // Real touchscreen tap must reach the close button despite the runtime gesture lock.
   await close.tap();
   await page.locator('.story-info-modal').waitFor({state:'hidden'});
   assert.ok(!await page.evaluate(()=>document.documentElement.dataset.storyInputLock),`${story}: closing must unlock navigation`);
   const enabled=await page.locator('#audioToggle').getAttribute('aria-pressed');
   await page.locator('#audioToggle').tap();
   assert.notEqual(await page.locator('#audioToggle').getAttribute('aria-pressed'),enabled,`${story}: audio tap must work`);
  }
  if(story==='Adam')await page.screenshot({path:'/tmp/adam-controls-fixed.png'});
  await context.close();console.log(`Passed ${story}: portrait and landscape touch controls and modal close`);
 }
} finally {await browser.close();}
