"""Export the live chapter interactions into directly launched, frame-free test pages."""
from pathlib import Path
import json,re,html,os,hashlib
root=Path(__file__).resolve().parent.parent
out=root/'__games/games'
stories=json.loads((root/'assets/journey/stories.json').read_text())
style='''*{box-sizing:border-box}body{margin:0;background:#183444;color:#fff4d6;font:700 17px/1.5 system-ui,sans-serif}main{max-width:960px;margin:auto;padding:24px 16px}h1,h2{line-height:1.15}h1{color:#ffcf65}a{color:inherit}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:18px}.card{color:#172b38;background:#fff4d6;border:4px solid #101925;box-shadow:5px 5px #101925;padding:16px;border-radius:7px}.card a{display:inline-block;background:#ffb45c;border:3px solid #172b38;border-radius:4px;padding:10px 14px;min-height:46px;font-weight:800;text-decoration:none}.note{background:#dfcff2;color:#172b38;padding:14px;border-radius:6px}.muted{font-size:14px}.badge{font-size:13px;font-weight:900;text-transform:uppercase}.missing{opacity:.8}'''
def page(title,body):return f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(title)}</title><style>{style}</style></head><body><main>{body}</main></body></html>'
esc=html.escape
records=[];total=0
for story in stories:
 sid=story['id'];source=root/('Abraham/Babel' if sid=='Babel' else sid);dest=out/sid;dest.mkdir(exist_ok=True)
 manifest=json.loads((source/'data/manifest.json').read_text());chapters=[];live=[]
 for i,act in enumerate(manifest['acts']):
  data=json.loads((source/'data'/act['file']).read_text());interaction=next(((j,line) for j,line in enumerate(data.get('lines',[])) if line.get('interaction') or line.get('vision')),None)
  kind='abraham' if sid=='Abraham' else 'jonah' if sid=='Jonah' else 'deborah' if sid=='Deborah' and data.get('game') else interaction[1].get('interaction','vision') if interaction else None
  rec={'chapter':i+1,'id':act['id'],'title':act.get('name',data.get('title',act['id'])),'status':'live-copy' if kind else 'not-connected','kind':kind,'source':str((source/'data'/act['file']).relative_to(root))}
  if kind:
   rec['file']=f'chapter-{i+1:02d}.html';rec['line']=interaction[0] if interaction else None;live.append(rec)
  chapters.append(rec)
 if live:
  snapshots=dest/'current';snapshots.mkdir(exist_ok=True)
  if sid=='Abraham':
   runtime=root/'__shared/chapter-games/native/abraham.js';(snapshots/'abraham.js').write_text(runtime.read_text())
   css=(root/'__shared/chapter-games/native/abraham.css').read_text()+'\n'+(root/'shared-tools/story-games.css').read_text();(snapshots/'abraham.css').write_text(css)
   for rec in live:
    body=f'''<a href="index.html">← {esc(story['title'])} games</a><h1>Chapter {rec['chapter']}: {esc(rec['title'])}</h1><p class="note">Current live game copy. This test does not save story completion.</p><div id="testGame"></div><div class="actions"><button id="testReset">Restart</button><a class="link" id="testSkip" href="index.html">Skip →</a><a class="link" id="testContinue" href="index.html" hidden>Continue →</a></div><link rel="stylesheet" href="current/abraham.css"><style>button,.link{{min-height:44px;padding:10px 14px}}[hidden]{{display:none!important}}.actions{{display:flex;gap:16px;flex-wrap:wrap;margin-top:24px}}.link{{background:#ffb45c;color:#172b38;border:3px solid #172b38;text-decoration:none}}</style><script src="../../../shared-tools/story-game-icons.js"></script><script type="module">import{{mountAbrahamGame}}from './current/abraham.js';let game;function start(){{document.querySelector('#testContinue').hidden=true;document.querySelector('#testSkip').hidden=false;game?.destroy();game=mountAbrahamGame(document.querySelector('#testGame'),{{number:{rec['chapter']}}},{{onComplete(){{document.querySelector('#testContinue').hidden=false;document.querySelector('#testSkip').hidden=true;}}}});document.body.dataset.testReady='true';}}document.querySelector('#testReset').onclick=start;start();</script>'''
    (dest/rec['file']).write_text(page(story['title']+' game test',body))
   sources=[runtime]
  else:
   html_source=(source/'index.html').read_text();sources=[]
   # Snapshot active first-party story/game code, preserving production dependency paths.
   for match in list(re.finditer(r'<script\b[^>]*src="([^"]+)"[^>]*>\s*</script>',html_source)):
    url=match[1];local=url.split('?')[0]
    if local.startswith(('https:','http:')):continue
    path=(source/local).resolve()
    if not path.exists() or '/vendor/' in str(path):continue
    if path.name in ['story-progress.js','story-editor.js','info-modal.js','asset-download-manager.js','loading-screen.js']:
     html_source=html_source.replace(match[0],'');continue
    target=snapshots/path.name;target.write_text(path.read_text());sources.append(path)
    relative=os.path.relpath(target,source)
    html_source=html_source.replace('src="'+url+'"','src="'+relative+'"')
   # Service worker setup is irrelevant in test copies and must not clear site caches.
   html_source=re.sub(r'<script\b(?![^>]*src=)[^>]*>.*?</script>',lambda m:'' if 'serviceWorker' in m[0] else m[0],html_source,flags=re.S)
   for rec in live:
    base=os.path.relpath(source,dest)+'/'
    test_index='new URL("'+os.path.relpath(dest/'index.html',source)+'",document.baseURI).href'
    setup='''<script>(()=>{try{const storage=window.localStorage;const prefix='chapter-game-test:'''+sid+''':';Object.defineProperty(window,'localStorage',{value:{getItem:k=>storage.getItem(prefix+k),setItem:(k,v)=>storage.setItem(prefix+k,v),removeItem:k=>storage.removeItem(prefix+k),clear:()=>{for(let i=storage.length-1;i>=0;i--){const k=storage.key(i);if(k.startsWith(prefix))storage.removeItem(k);}}}});}catch{}})();</script>'''
    css='''<style>#startScreen,#hud,#stageWrap,#choices,#storyControls,.city-controls,.story-footer{display:none!important}#app{display:block!important;opacity:1!important}body{overflow:auto!important;padding-top:78px!important}#testToolbar{position:fixed;top:0;left:0;right:0;z-index:999999;background:#183444;color:#fff4d6;display:flex;gap:8px;align-items:center;padding:8px;font:700 12px/1.3 system-ui;min-height:68px;flex-wrap:wrap}#testToolbar a,#testToolbar button{color:#172b38;background:#ffb45c;padding:10px;border:2px solid #101925;min-height:44px;font:inherit;cursor:pointer;text-decoration:none}.creation-overlay,.gathering-overlay,.hearing-overlay,#jonahGame,#visionOverlay,#gamePanel.open{position:relative!important;inset:auto!important;top:auto!important;min-height:calc(100dvh - 80px)!important;max-height:none!important;width:100%!important;overflow:auto!important;z-index:30!important}#gamePanel.open{display:block!important;margin:0!important;transform:none!important;max-width:100%!important;border-radius:0!important}#visionOverlay.show{display:block!important;opacity:1!important;transform:none!important;max-width:100%!important}#visionOverlay .vision-fragments{width:100%!important;min-height:280px}#visionOverlay .vision-assembly{position:relative!important;inset:auto!important}#graphicContainer,#postProduction,#post-production,#particlesCanvas,#particles,#soundToggle,#nextBtn,#nextLineBtn,#tip{display:none!important}#testHost{width:100%!important;overflow:hidden}#testStatus{font:700 16px system-ui;padding:20px;color:#fff4d6}#testHost{position:relative;z-index:30}#visionHud{position:relative!important}[data-test-ready=true] #testStatus{display:none}#loadingScreen{display:none!important}</style>'''
    if sid=='Adam':launch="actIdx=0;lineIdx=3;const overlay=buildCreationOverlay();document.querySelector('#testHost').append(overlay);startCreationInteraction(overlay);"
    elif sid=='Noah':launch="actIdx=3;lineIdx=1;const {overlay,deck}=buildGatheringOverlay();document.querySelector('#testHost').append(overlay);startGatheringInteraction(overlay,deck);"
    elif sid=='Elijah':launch="actIdx=4;lineIdx=5;const overlay=buildHearingOverlay();document.querySelector('#testHost').append(overlay);startHearingInteraction(overlay);"
    elif sid=='Deborah':launch=f'actIdx={rec["chapter"]-1};lineIdx=currentAct().lines.length-1;openGame();'
    elif sid=='Daniel':launch=f'actIdx={rec["chapter"]-1};lineIdx={rec["line"]};const data=currentAct().lines[lineIdx];const id=data.vision===true?currentAct().vision:data.vision;const vision=VISION_SCENES.find(s=>s.id===id);if(!vision)throw Error("Vision data missing");startVisionMinigame(data,vision);'
    else:launch=f'await JonahGame.launch({rec["chapter"]-1},()=>location.assign({test_index}));'
    if sid in ['Daniel','Deborah']:
     launch="document.querySelector('#testHost').append(document.querySelector('"+('#visionOverlay' if sid=='Daniel' else '#gamePanel')+"'));"+launch
    ready="window.JonahGame&&window.StoryPlayer?.chapters?.length" if sid=='Jonah' else "typeof STORY!=='undefined'&&STORY.length"+('&&typeof VISION_SCENES!=="undefined"&&VISION_SCENES?.length' if sid=='Daniel' else '')
    runner=f'''<div id="testToolbar"><a href="{os.path.relpath(dest/'index.html',source)}">← Game index</a><button onclick="location.reload()">Restart</button><a id="testExit" href="{os.path.relpath(dest/'index.html',source)}">Skip →</a><span>{esc(sid)} · Ch. {rec['chapter']}</span></div><p id="testStatus" role="status">Loading current chapter game…</p><div id="testHost"></div><script>(async()=>{{const deadline=Date.now()+25000;try{{while(!({ready})){{if(Date.now()>deadline)throw Error('Game data took too long to load. Use the local web server.');await new Promise(r=>setTimeout(r,100));}}await new Promise(r=>setTimeout(r,900));{launch}document.body.dataset.testReady='true';const observer=new MutationObserver(()=>{{if(document.querySelector('[data-game-complete=\"true\"]'))document.querySelector('#testExit').textContent='Continue →';}});observer.observe(document.querySelector('#testHost'),{{subtree:true,attributes:true,childList:true}});}}catch(e){{document.querySelector('#testStatus').textContent=e.message;document.body.dataset.testError=e.message;console.error(e);}}}})();document.addEventListener('click',event=>{{if(event.target.closest('[data-creation-skip],[data-creation-finish],[data-gathering-skip],[data-gathering-finish],[data-hearing-skip],[data-hearing-finish],.shared-game-skip,#game-complete-btn')){{event.preventDefault();event.stopImmediatePropagation();location.assign({test_index});}}}},true);</script>'''
    result=html_source.replace('<head>','<head><base href="'+base+'">'+setup+css,1).replace('</body>',runner+'</body>')
    (dest/rec['file']).write_text(result)
  source_meta=[{'path':str(p.relative_to(root)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in sources]
 else:source_meta=[]
 cards=[]
 for c in chapters:
  if c['kind']:cards.append(f'<article class="card"><span class="badge">Current live game</span><h2>{esc(c["title"])}</h2><p>{esc(c["kind"])}</p><a href="{c["file"]}">Test chapter {c["chapter"]} →</a></article>')
  else:cards.append(f'<article class="card missing"><span class="badge">No live game connected</span><h2>{esc(c["title"])}</h2><p>This chapter has no connected game in the current story. Its planned demo is not a copy of a live chapter game.</p></article>')
 archive=sorted((dest/'__docs/examples').glob('*.html'))
 legacy='<h2>Earlier generated demos</h2><p>Design prototypes, separate from the current live games.</p><ul>'+''.join(f'<li><a href="{p.relative_to(dest)}">{esc(p.stem)}</a></li>' for p in archive)+'</ul>' if archive else ''
 body=f'<a href="../index.html">← All stories</a><h1>{esc(story["title"])} — game tests</h1><p>{len(live)} connected games · {len(chapters)} current chapters</p><p class="note">Open current game copies through the local web server. They launch directly without reading the comic or using frames. Story artwork and shared dependencies remain in the repository. Test progress is separate from normal story progress. Restart reloads the game; Skip/Continue returns here.</p><div class="cards">'+''.join(cards)+'</div>'+legacy
 (dest/'index.html').write_text(page(story['title']+' game tests',body))
 (dest/'current-games.json').write_text(json.dumps({'story':sid,'chapters':chapters,'snapshotSources':source_meta},indent=2)+'\n')
 records.append({'story':sid,'title':story['title'],'folder':sid,'index':sid+'/index.html','chapters':len(chapters),'currentGames':len(live)});total+=len(live)
# Keep the historical misspelling browsable without presenting it as a separate story.
(out/'Eiljah/index.html').write_text(page('Elijah — legacy folder','<h1>Elijah</h1><p>This older folder uses the spelling Eiljah.</p><a href="../Elijah/index.html">Open current Elijah game tests →</a>'))
cards=''.join(f'<article class="card"><h2>{esc(r["title"])}</h2><p>{r["currentGames"]} live game copies · {r["chapters"]} chapters</p><a href="{r["index"]}">Open story games →</a></article>' for r in records)
(out/'index.html').write_text(page('Bible story game tests',f'<h1>Bible story game tests</h1><p>{len(records)} stories · {total} connected chapter games</p><p class="note">These indexes distinguish copies of actual chapter games from earlier generated demos. Use the local web server to play current games. No frames are used by the new current-game test pages.</p><div class="cards">{cards}</div><h2>Other existing folders</h2><ul><li><a href="Eiljah/index.html">Eiljah — historical Elijah folder</a></li></ul>'))
(out/'current-games-manifest.json').write_text(json.dumps({'version':1,'storyCount':len(records),'currentGameCount':total,'stories':records},indent=2)+'\n')
print(f'Exported {total} live chapter games; generated {len(records)} story indexes. Existing demo files preserved.')

# Disk-open support: classic scripts can load locally; modules and fetch cannot.
# Keep the copied puzzle code intact, adapting only its packaging and data loader.
for record in records:
 if not record['currentGames']:continue
 sid=record['story'];dest=out/sid;source=root/sid;snapshots=dest/'current'
 if sid=='Abraham':
  runtime=(snapshots/'abraham.js').read_text().replace('export const chapterGames','const chapterGames').replace('export function mountAbrahamGame','function mountAbrahamGame')
  (snapshots/'abraham-classic.js').write_text(runtime)
  for p in dest.glob('chapter-*.html'):
   text=p.read_text().replace('<script type="module">import{mountAbrahamGame}from \'./current/abraham.js\';','<script src="current/abraham-classic.js"></script><script>')
   text=re.sub(r'Chapter (\d+): Ch\.?\s*\1\s*·\s*',r'Chapter \1: ',text)
   p.write_text(text)
 else:
  bundled={}
  for directory in [source/'data',source/'assets',root/'shared/svg']:
   if not directory.exists():continue
   for p in directory.rglob('*'):
    if p.is_file() and p.suffix in ['.json','.svg']:
     bundled[str(p.relative_to(root))]=p.read_text()
  boot='''(()=>{if(location.protocol!=='file:')return;const root=new URL('../../../../',document.currentScript.src);const data=DATA;const original=window.fetch.bind(window);window.fetch=async(input,options)=>{const url=new URL(typeof input==='string'?input:input.url||String(input),document.baseURI);if(url.protocol==='file:'&&url.pathname.startsWith(root.pathname)){const key=decodeURIComponent(url.pathname.slice(root.pathname.length));if(Object.prototype.hasOwnProperty.call(data,key))return new Response(data[key],{status:200,headers:{'Content-Type':key.endsWith('.json')?'application/json':'image/svg+xml'}});}return original(input,options);};})();'''.replace('DATA',json.dumps(bundled,ensure_ascii=False))
  (snapshots/'offline-data.js').write_text(boot)
  for p in dest.glob('chapter-*.html'):
   text=p.read_text();rel=os.path.relpath(snapshots/'offline-data.js',source)
   text=re.sub(r'(<base href="[^"]+">)',r'\1<script src="'+rel+'"></script>',text,count=1)
   p.write_text(text)
for p in [out/'index.html']+[out/r['index'] for r in records]:
 text=p.read_text().replace('Open current game copies through the local web server.','Open these games directly from disk or through the local web server.').replace('Use the local web server to play current games.','Current game copies also work directly from disk.')
 p.write_text(text)
print('Disk-open support added to all 26 current game copies.')
# Install the standalone phase/layout adapter after the live game scripts.
(out/'__shared/current-game-test-layout.js').write_text((root/'scripts/current-game-test-layout.js').read_text())
for record in records:
 if record['story']=='Abraham':continue
 source=root/record['story'];dest=out/record['story']
 adapter=os.path.relpath(out/'__shared/current-game-test-layout.js',source)
 for p in dest.glob('chapter-*.html'):
  p.write_text(p.read_text().replace('</body>','<script src="'+adapter+'"></script></body>'))
# Re-add the standalone crafting catalogue whenever live snapshots are refreshed.
import runpy
runpy.run_path(str(root/'scripts/add-crafting-game-tests.py'),run_name='__main__')
