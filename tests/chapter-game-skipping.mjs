import assert from 'node:assert/strict';
import{createRequire}from'node:module';const{chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true,serviceWorkers:'block'}),page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8123/Abraham/');await page.waitForFunction(()=>window.StoryPlayer?.chapters.length===10);await page.locator('#startBtn').evaluate(b=>b.click());
 const readToGame=async()=>{for(let i=1;i<4;i++){await page.evaluate(()=>StoryPlayer.nextLine());await page.waitForFunction(n=>StoryPlayer.state.lineIndex===n,i);await page.waitForFunction(()=>document.querySelector('.content-overlay'));}await page.waitForTimeout(1200);await page.locator('#nextBtn').tap();await page.locator('#skipChapterGame').waitFor();};
 await readToGame();await page.waitForTimeout(100);
 const positions=await page.evaluate(()=>({hud:document.querySelector('#hud').getBoundingClientRect().bottom,game:document.querySelector('#abrahamGame').getBoundingClientRect().top}));assert.ok(positions.hud<=positions.game);
 await page.locator('#skipChapterGame').tap();await page.waitForFunction(()=>StoryPlayer.state.actIndex===1&&document.querySelector('#abrahamGame').hidden);assert.equal(await page.evaluate(()=>StoryRuntime.isLocked()),false);assert.equal(await page.evaluate(()=>localStorage.getItem('bible-game:Abraham:1')),null);assert.equal(await page.evaluate(()=>localStorage.getItem('bible-chapter:Abraham:1')),'complete');
 await page.waitForTimeout(1600);await readToGame();await page.locator('#chapterSelect').selectOption('3');await page.waitForFunction(()=>StoryPlayer.state.actIndex===3&&document.querySelector('#abrahamGame').hidden);assert.equal(await page.evaluate(()=>StoryRuntime.isLocked()),false);assert.deepEqual(errors,[]);console.log('Passed Abraham: skip continues story; selector remains above game and cancels it; skipped game is not recorded as won.');
 await context.close();
}finally{await browser.close();}
