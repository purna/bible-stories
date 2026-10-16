import assert from 'node:assert/strict';
import fs from 'node:fs';
const stories=fs.readdirSync('.').filter(s=>fs.existsSync(`${s}/css/fonts.css`)).concat('Abraham/Babel');
const normalize=s=>String(s||'').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
let beats=0;
for(const story of stories){
 const html=fs.readFileSync(`${story}/index.html`,'utf8');
 assert.match(html,/class="start-story-icon"/);assert.match(html,/class="start-button-label">Begin the story<\/span>/);
 assert.match(html,/story-responsive.css\?v=start-icon62/);assert.match(fs.readFileSync(`${story==='Abraham/Babel'?'Abraham':story}/js/info-modal.js`,'utf8'),/Copyright 2026.*pixelagent.co.uk/);assert.ok(!html.includes('class="story-footer"')); 
 if(story!=='Abraham')assert.match(html,/story-text-rendering.js\?v=(?:all-stories38|shared43)/);
 for(const folder of ['data','beats']){
  if(!fs.existsSync(`${story}/${folder}`))continue;
  for(const file of fs.readdirSync(`${story}/${folder}`).filter(f=>f.endsWith('.json'))){
   const visit=node=>{
    if(!node||typeof node!=='object')return;
    if(Array.isArray(node.items)){
     beats++;const sfx=new Set(node.items.filter(i=>i.sfx===true||i.type==='sfx').map(i=>normalize(i.text)).filter(Boolean));
     for(const i of node.items)if(!i.sfx&&i.type!=='sfx')assert.ok(!sfx.has(normalize(i.text)),`${story}/${folder}/${file}: duplicated balloon`);
    }
    Object.values(node).forEach(visit);
   };visit(JSON.parse(fs.readFileSync(`${story}/${folder}/${file}`,'utf8')));
  }
 }
}
console.log(`Passed ${stories.length} story/template pages and ${beats} text item groups: shared presentation, updated renderer, copyright and no duplicate balloon/SFX text.`);
