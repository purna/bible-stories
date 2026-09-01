import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root=process.cwd();
const allStories=['Abraham','Adam','Babel','Daniel','David','Deborah','Eiljah','Elisha','Enoch','Esther','Hannah','Isaiah','Jacob','Jeremiah','Job','Jonah','Joseph','Joshua','Moses','Nehemiah','Noah','Ruth','Samuel'];
const args=process.argv.slice(2);
if(args.includes('--help')||args.includes('-h')){
  console.log(`Usage: node scripts/export-character-assets.mjs [options]\n\nOptions:\n  --story NAME  Export/check one story only\n  --check       Verify generated files match the canonical presets\n  --strict      With --check, also fail on unexpected legacy files\n  --clean       During export, remove unexpected .svg/.json files\n  --help        Show this help\n\nExamples:\n  node scripts/export-character-assets.mjs\n  node scripts/export-character-assets.mjs --story Moses\n  node scripts/export-character-assets.mjs --check\n  node scripts/export-character-assets.mjs --check --strict`);
  process.exit(0);
}
const getFlag=name=>{const i=args.indexOf(name);return i>=0?args[i+1]:null};
const requested=getFlag('--story');
const checkOnly=args.includes('--check');
const clean=args.includes('--clean');
const strict=args.includes('--strict');
const stories=requested?[requested]:allStories;

if(requested&&!allStories.includes(requested)){
  console.error(`Unknown story: ${requested}\nChoose one of: ${allStories.join(', ')}`);
  process.exit(2);
}

function rendererFor(story){
  const html=fs.readFileSync(path.join(root,story,'tools/character_head_generator.html'),'utf8');
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(s=>s.trim());
  const inline=scripts.at(-1);
  const boundary='/* ==========================================================\n   APPLICATION STATE';
  const source=inline.slice(0,inline.indexOf(boundary));
  const context={};vm.createContext(context);vm.runInContext(source,context,{filename:`${story}/tools/character_head_generator.html`});
  if(typeof context.buildSVG!=='function')throw new Error(`${story}: buildSVG renderer was not found`);
  return state=>'<?xml version="1.0" encoding="UTF-8"?>\n'+context.buildSVG(state)+'\n';
}
function expectedFor(story){
  const presetPath=path.join(root,story,'tools/character_presets.json');
  const data=JSON.parse(fs.readFileSync(presetPath,'utf8'));
  const render=rendererFor(story),files=new Map();
  for(const [key,overrides] of Object.entries(data.presets)){
    const state={...data.base,...overrides};
    files.set(`${key}.svg`,render(state));
    files.set(`${key}.json`,JSON.stringify(state,null,2)+'\n');
  }
  return files;
}

let exported=0,stale=0,mismatched=0,removed=0;
for(const story of stories){
  const outDir=path.join(root,story,'assets/characters');
  const expected=expectedFor(story);
  if(!checkOnly)fs.mkdirSync(outDir,{recursive:true});
  for(const [name,content] of expected){
    const file=path.join(outDir,name);
    const current=fs.existsSync(file)?fs.readFileSync(file,'utf8'):null;
    if(current!==content){mismatched++;if(!checkOnly){fs.writeFileSync(file,content);exported++}}
  }
  if(fs.existsSync(outDir)){
    const extras=fs.readdirSync(outDir).filter(name=>/\.(svg|json)$/i.test(name)&&!expected.has(name));
    stale+=extras.length;
    if(clean&&!checkOnly)for(const name of extras){fs.rmSync(path.join(outDir,name));removed++}
  }
  console.log(`${story}: ${expected.size/2} characters${checkOnly?' checked':' exported'}`);
}

if(checkOnly){
  if(mismatched||(strict&&stale)){
    console.error(`Character export check failed: ${mismatched} missing/outdated files; ${stale} unexpected files${strict?' (strict mode)':''}.`);
    process.exit(1);
  }
  if(stale)console.log(`Preserved ${stale} unexpected SVG/JSON files (use --strict to fail on them).`);
  console.log(`Character exports are current for ${stories.length} ${stories.length===1?'story':'stories'}.`);
}else{
  console.log(`Wrote ${exported} changed files for ${stories.length} ${stories.length===1?'story':'stories'}.`);
  if(stale&&!clean)console.log(`Preserved ${stale} unexpected SVG/JSON files. Re-run with --clean to remove them.`);
  if(clean)console.log(`Removed ${removed} stale files.`);
}
