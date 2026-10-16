import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
const base=process.env.STORY_TEST_URL||'http://127.0.0.1:8123';
try {
 for(const story of ['Adam','Ruth','Abraham/Babel']) {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,serviceWorkers:'block'});
  const page=await context.newPage();const failures=[];const scenes=[];
  page.on('response',response=>{if(/\/assets\/svg\/.+\.svg/.test(response.url())){scenes.push(response.url());if(!response.ok())failures.push(`${response.status()} ${response.url()}`);}});
  page.on('pageerror',error=>failures.push(error.stack||error.message));
  await page.goto(`${base}/${story}/`,{waitUntil:'domcontentloaded'});
  await page.addStyleTag({content:'#startScreen * {animation:none!important;transition:none!important}'});
  const skip=page.locator('.comic-loader-skip');if(await skip.isVisible())await skip.tap();
  await page.locator('#startBtn').tap();
  await page.waitForFunction(()=>document.querySelector('#nextLineBtn')?.classList.contains('show'));
  await page.waitForTimeout(600);
  for(let line=0;line<2;line++) {
   await page.waitForFunction(()=>document.querySelector('.content-overlay [data-story-position]'));
   const sizes=await page.evaluate(()=>{
    const frame=document.querySelector('.comic-frame').getBoundingClientRect();
    const art=document.querySelector('#graphicContainer').getBoundingClientRect();
    const svgs=[...document.querySelectorAll('#svgLayer svg,#midLayer svg,#fgLayer svg')].map(svg=>{const r=svg.getBoundingClientRect();return{width:r.width,height:r.height};});
    const texts=[...document.querySelectorAll('.content-overlay .bubble,.content-overlay .caption')].filter(node=>node.textContent.trim()).map(node=>{const r=node.getBoundingClientRect();return{width:r.width,height:r.height,left:r.left,right:r.right,scroll:node.scrollWidth,client:node.clientWidth};});
    return {frame:{width:frame.width,height:frame.height},art:{width:art.width,height:art.height},svgs,texts};
   });
   assert.ok(sizes.art.width>sizes.frame.width*.9&&sizes.art.height>sizes.frame.height*.9,`${story}: artwork must fill the panel ${JSON.stringify(sizes)}`);
   assert.ok(sizes.svgs.length>=2,`${story}: layered SVG artwork must be present`);
   for(const svg of sizes.svgs)assert.ok(svg.width>0&&svg.height>0,`${story}: SVG must have visible dimensions`);
   for(const text of sizes.texts){assert.ok(text.width>180,`${story}: mobile dialogue must not become a narrow column ${JSON.stringify(text)}`);assert.ok(text.scroll<=text.client+1,`${story}: dialogue text must not overflow horizontally`);assert.ok(text.left>=0&&text.right<=391,`${story}: dialogue must fit the viewport ${JSON.stringify(sizes)}`);}
   if(story==='Adam')await page.screenshot({path:`/tmp/adam-mobile-scene-${line}.png`});
   if(line===0){await page.locator('#nextLineBtn').tap();await page.waitForTimeout(1600);}
  }
  // Reproduce an observer batch containing a text node that was already removed.
  await page.evaluate(()=>{
    const layer=document.querySelector('.content-overlay');
    const existing=layer.querySelector('.caption,.bubble');
    const orphan=document.createElement('div');orphan.className='caption';
    orphan.textContent=existing?.textContent||'Removed dialogue';
    layer.appendChild(orphan);orphan.remove();
  });
  await page.waitForTimeout(100);
  assert.ok(scenes.length>=3,`${story}: must request SVG scene files`);assert.deepEqual(failures,[],`${story}: scene requests and scripts must succeed`);
  await context.close();console.log(`Passed ${story}: mobile dialogue, visible SVG layers, and successful scene requests`);
 }
} finally {await browser.close();}
