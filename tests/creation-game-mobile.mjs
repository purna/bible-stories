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
  await page.evaluate(()=>{const game=buildCreationOverlay();document.querySelector('.comic-frame').appendChild(game);startCreationInteraction(game);});
  const layout=await page.evaluate(()=>{
   const p=document.querySelector('.creation-panel'),r=p.getBoundingClientRect();
   const tiles=[...p.querySelectorAll('.creation-tile')].map(t=>{const b=t.getBoundingClientRect();return b.left>=r.left&&b.right<=r.right;});
   p.scrollTop=p.scrollHeight;
   return {left:r.left,right:r.right,width:innerWidth,scroll:p.scrollTop,overflow:p.scrollWidth-p.clientWidth,tiles,columns:getComputedStyle(p.querySelector('.creation-board')).gridTemplateColumns.split(' ').length};
  });
  assert.ok(layout.left>=0&&layout.right<=layout.width,JSON.stringify(layout));
  assert.equal(layout.columns,1);assert.ok(layout.tiles.every(Boolean));assert.ok(layout.overflow<=1);assert.ok(layout.scroll>0);
  for(const kind of ['light','sky','land','lights','creatures','humanity'])await page.locator(`.creation-tile[data-kind="${kind}"]`).tap();
  await page.locator('[data-creation-finish]').tap();
  await page.waitForFunction(()=>!document.querySelector('.creation-overlay'));
  await page.waitForFunction(()=>document.querySelector('#nextLineBtn').classList.contains('show'));
  await page.evaluate(()=>{const game=buildCreationOverlay();document.querySelector('.comic-frame').appendChild(game);document.querySelector('#nextLineBtn').classList.remove('show');startCreationInteraction(game);});
  await page.locator('[data-creation-skip]').tap();
  await page.waitForFunction(()=>!document.querySelector('.creation-overlay')&&document.querySelector('#nextLineBtn').classList.contains('show'));
  assert.ok(await page.locator('#chapterSelect').evaluate(el=>el.getBoundingClientRect().right<=innerWidth));
  await page.locator('#nextLineBtn').tap();
  console.log(`Passed mobile creation game ${viewport.width}x${viewport.height}: stacked layout, vertical scrolling and complete playthrough`);
  await context.close();
 }
}finally{await browser.close();}
