import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stories = fs.readdirSync(root).filter(name => fs.existsSync(path.join(root, name, 'css/fonts.css')));
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    if (entry.name.startsWith('.') || ['node_modules','vendor','tools','__docs','art'].includes(entry.name)) return [];
    const file=path.join(dir,entry.name);
    return entry.isDirectory()?walk(file):[file];
  });
}
let references=0;
for (const story of stories) {
  const dir=path.join(root,story);
  const pages=['index.html',...(story==='Abraham'?['Babel/index.html']:[])];
  for (const page of pages) {
    const html=fs.readFileSync(path.join(dir,page),'utf8');
    assert.match(html,/class="faith-theme">[^<]*faith/i,`${story}/${page}: faith introduction`);
    assert.match(html,/https:\/\/fonts.googleapis.com\/css2\?/,`${story}/${page}: Google font stylesheet`);
  }
  assert.ok(!fs.existsSync(path.join(dir,'assets/fonts')),`${story}: local fonts folder remains`);
  assert.ok(!fs.existsSync(path.join(dir,'assets/audio')),`${story}: local audio folder remains`);
  assert.ok(!fs.existsSync(path.join(root,'shared/audio',story.toLowerCase(),'music')),`${story}: shared music folder remains`);
  const fonts=fs.readFileSync(path.join(dir,'css/fonts.css'),'utf8');
  for (const family of ['Baloo 2','Bangers','Nunito','Press Start 2P','Space Mono']) assert.ok(fonts.includes(`${family} Local`),`${story}: local ${family} face`);
  const manifest=JSON.parse(fs.readFileSync(path.join(dir,'precache-manifest.json'),'utf8'));
  const urls=new Set(manifest.urls);
  assert.equal(urls.size,manifest.urls.length,`${story}: duplicate manifest entries`);
  for (const ref of urls) assert.ok(fs.existsSync(path.resolve(dir,ref)),`${story}: missing precache ${ref}`);
  for (const file of walk(dir)) {
    if (!/\.(css|js|json|html)$/.test(file)) continue;
    const text=fs.readFileSync(file,'utf8');
    assert.ok(!/assets\/(?:audio|fonts|svg\/lettering)\//.test(text),`${file}: obsolete asset path`);
    assert.ok(!/shared\/audio\/[^/]+\/music\//.test(text),`${file}: obsolete shared music path`);
    const base=file.endsWith('.css')?path.dirname(file):(file.includes(`${path.sep}Babel${path.sep}`)?path.join(dir,'Babel'):dir);
    for (const match of text.matchAll(/["']((?:[^"'\s]*shared\/(?:audio|fonts|svg)\/|assets\/music\/)[^"'\s]+)["']/g)) {
      const ref=match[1];
      if (/\$\{|[<*]/.test(ref)) continue;
      const resolved=path.resolve(base,ref);
      assert.ok(fs.existsSync(resolved),`${file}: missing ${ref}`);
      assert.ok(urls.has(path.relative(dir,resolved)),`${story}: shared asset missing from precache: ${ref}`);
      references++;
    }
  }
  assert.ok(urls.has('sw.js'),`${story}: worker missing from manifest`);
}
console.log(`Passed: ${stories.length} packages, Babel bonus story, and ${references} asset references.`);
