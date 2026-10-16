import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const stories=fs.readdirSync('.').filter(s=>fs.existsSync(`${s}/css/fonts.css`)&&s!=='Abraham').concat('Abraham/Babel');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
async function check(story){
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,serviceWorkers:'block'});
 try{
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.stack));
 await page.goto(`http://127.0.0.1:8123/${story}/`,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1000);
 await page.locator('#startBtn').evaluate(b=>b.click());
 await page.waitForFunction(()=>document.querySelector('.content-overlay')&&document.querySelector('#storyControls'),null,{timeout:15000}).catch(e=>{throw new Error(story+': '+errors.join('; ')+e.message)});
 await page.waitForTimeout(1400);
 for(const width of [390,320]){
  await page.setViewportSize({width,height:844});
  const r=await page.evaluate(()=>{const s=document.querySelector('#chapterSelect').getBoundingClientRect(),d=document.querySelector('#dots').getBoundingClientRect();return{menu:s.bottom,dots:d.top,right:s.right,font:getComputedStyle(document.querySelector('#startScreen p')||document.querySelector('.story-copyright')).fontSize,footer:document.querySelector('.story-copyright').textContent};});
  assert.ok(r.dots>r.menu,`${story}: separate dots row ${JSON.stringify(r)}`);assert.ok(r.right<=width);if(await page.locator('#startScreen p').count())assert.equal(r.font,'9px');assert.match(r.footer,/2026.*pixelagent.co.uk/);
 }
 await page.setViewportSize({width:390,height:844});
 if(await page.evaluate(()=>typeof renderChoices==='function')){
 await page.evaluate(()=>{choicePending=false;renderChoices({choices:[{label:'Test answer',note:'A clear response.'}]});});
 const choiceBounds=await page.evaluate(()=>({bottom:document.querySelector('#choices').getBoundingClientRect().bottom,footer:document.querySelector('#storyControls').getBoundingClientRect().top}));
 assert.ok(choiceBounds.bottom<choiceBounds.footer,`${story}: choices above footer`);
 await page.locator('.choiceBtn').tap();assert.equal(await page.locator('.choiceBtn').count(),0);
 assert.equal(await page.locator('.content-overlay .caption:visible,.content-overlay .bubble-wrap:visible').count(),0);
 }
 await page.locator('#infoToggle').tap();await page.locator('.story-info-modal').waitFor({state:'visible'});await page.locator('.story-info-close').tap();await page.locator('.story-info-modal').waitFor({state:'hidden'});
 assert.deepEqual(errors,[],`${story}: browser errors`);
 console.log(`Passed ${story}: mobile header, footer, choice dismissal, modal close`);
 }finally{await context.close();}
}
try{for(const story of stories.filter(s=>!process.env.STORY_FILTER||process.env.STORY_FILTER.split(',').includes(s))){try{await check(story);}catch(error){console.log('Retry '+story);await check(story);}}}finally{await browser.close();}
