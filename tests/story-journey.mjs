import assert from 'node:assert/strict';
import{createRequire}from'node:module';const{chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true});
try{
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:1280,height:900}]){
  const context=await browser.newContext({viewport,serviceWorkers:'block'}),page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>localStorage.setItem('bible-story:Abraham:complete','complete'));
  await page.goto('http://127.0.0.1:8123/journey.html?completed=Abraham');await page.waitForFunction(()=>document.querySelectorAll('.story-stop').length===24);
  assert.equal(await page.locator('.route-section').count(),23);
  assert.ok(await page.locator('.story-stop').evaluateAll(stops=>stops.every((stop,i)=>{const label=stop.querySelector('.stop-name').getBoundingClientRect();return stops.every((other,j)=>{if(i===j)return true;const circle=other.querySelector('.stop-circle').getBoundingClientRect();return label.right<=circle.left||label.left>=circle.right||label.bottom<=circle.top||label.top>=circle.bottom;});})), 'Story labels must not overlap other story icons');assert.ok(await page.locator('[data-story="Abraham"]').getAttribute('class').then(c=>c.includes('complete')));
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.locator('[data-story="Abraham"]').click();assert.equal(await page.locator('#selectedTitle').textContent(),'Abraham');assert.equal(await page.locator('#selectedStatus').textContent(),'Story complete');assert.match(await page.locator('#selectedLink').getAttribute('href'),/Abraham/);await page.locator('#closeStoryInfo').click();
  for(const id of ['Adam','Babel','Nehemiah']){await page.locator(`[data-story="${id}"]`).evaluate(e=>e.scrollIntoView({block:'center'}));await page.locator(`[data-story="${id}"]`).click();assert.ok(await page.locator('#selectedDescription').textContent());assert.equal(await page.locator('#selectedStatus').textContent(),'Your next adventure');await page.locator('#closeStoryInfo').click();}
  await page.screenshot({path:`/tmp/story-journey-${viewport.width}.png`,fullPage:true});assert.deepEqual(errors,[]);console.log(`Passed journey ${viewport.width}px: 24 stories, routes, saved completion and clickable info panel`);await context.close();
 }
 // Use a real shared player ending with earlier chapters already read.
 const context=await browser.newContext({viewport:{width:390,height:844},serviceWorkers:'block'}),page=await context.newPage();
 await page.addInitScript(()=>{for(let i=1;i<=7;i++)localStorage.setItem(`bible-chapter:Ruth:${i}`,'complete');});
 await page.goto('http://127.0.0.1:8123/Ruth/');await page.waitForFunction(()=>window.StoryPlayer?.chapters.length===8);await page.locator('#startBtn').evaluate(b=>b.click());await page.evaluate(()=>StoryPlayer.selectChapter(7));await page.waitForFunction(()=>StoryPlayer.state.actIndex===7);await page.waitForTimeout(1600);
 await page.evaluate(()=>StoryPlayer.nextChapter());await page.waitForURL('**/journey.html?completed=Ruth');await page.waitForSelector('[data-story="Ruth"].complete');assert.equal(await page.evaluate(()=>localStorage.getItem('bible-story:Ruth:complete')),'complete');console.log('Passed: shared player ending opens the map and saves the completed story');await context.close();
}finally{await browser.close();}
