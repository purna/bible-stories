import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try {
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:844,height:390}]) {
  const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,serviceWorkers:'block'});
  const page=await context.newPage();
  await page.goto('http://127.0.0.1:8123/Adam/',{waitUntil:'domcontentloaded'});
  await page.addStyleTag({content:'#startScreen * {animation:none!important;transition:none!important}'});
  const skip=page.locator('.comic-loader-skip');if(await skip.isVisible())await skip.tap();
  // Enter the story directly so this test isolates the game from the cover layout.
  await page.locator('#startBtn').evaluate(button=>button.click());
  await page.waitForFunction(()=>document.querySelector('#nextLineBtn')?.classList.contains('show'));
  for(const option of [0,1]) {
   await page.evaluate(async()=>{actIdx=3;lineIdx=STORY[3].lines.findIndex(line=>line.choices?.length);choicePending=false;await renderLine();});
   await page.waitForTimeout(1400);
   const bounds=await page.evaluate(()=>({choices:document.querySelector('#choices').getBoundingClientRect().bottom,footer:document.querySelector('#storyControls').getBoundingClientRect().top}));
   assert.ok(bounds.choices<bounds.footer,JSON.stringify(bounds));
   await page.locator('.choiceBtn').nth(option).tap();
   assert.equal(await page.locator('.choiceBtn').count(),0);
   await page.waitForTimeout(600);
   assert.ok(await page.locator('#delayNote').isVisible());
   assert.equal(await page.locator('.content-overlay .caption:visible,.content-overlay .bubble-wrap:visible').count(),0);
   await page.waitForFunction(()=>document.querySelector('#nextLineBtn').classList.contains('show'));
   await page.locator('#nextLineBtn').tap();
   await page.waitForTimeout(2000);
   await page.waitForFunction(()=>!transitioning);
  }
  console.log(`Passed mobile choices ${viewport.width}x${viewport.height}: footer clearance, both answers dismiss question, Next works`);
  await context.close();
 }
}finally{await browser.close();}
