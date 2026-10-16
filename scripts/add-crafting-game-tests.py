"""Add disk-friendly Crafting v2 copies to every story test index except Abraham."""
from pathlib import Path
import json,re,html
root=Path(__file__).resolve().parent.parent
out=root/'__games/games';examples=root/'__games/examples/Crafting_v2/bible-crafting'
manifest=json.loads((out/'current-games-manifest.json').read_text())

def adaptation(sid):
 if sid=='Babel':
  return {'f':'Babel','n':'Babel','r':'Genesis 11:1–9','raws':['🟤 Clay','💧 Water','🌾 Straw'],'rc':['Brick|🧱|Clay+Water+Straw|Mix clay, water and straw.','Shelter|🏠|Brick+Brick|Use bricks to make a shelter.'],'calls':[{'t':'Building on the plain','w':'The people settle on the plain. Make bricks and use them to shelter a household.','goal':'Shelter','v':'People can work together, but building a name for ourselves is not the same as caring for others.','l':'Use your skills to care for your neighbours.'},{'t':'Many languages','w':'The people no longer share one language. Prepare shelter and learn to communicate with pictures.','raws':['🟤 Clay','💧 Water','🌾 Straw'],'rc':[],'goal':'Shelter,Shared signal,Shared signal','v':'The people spread across the earth.','l':'Listen carefully and seek understanding.','mg':{'t':'press','title':'Share a picture signal','verb':'Show the next picture','n':3,'out':'Shared signal','oe':'🗨️'}}]}
 return {'f':'Gideon','n':'Gideon','r':'Judges 7:16–22','raws':['🪵 Wood','🌿 Cloth','🫒 Oil','🟤 Clay'],'rc':['Torch|🔥|Wood+Cloth+Oil|Wrap wood with cloth and add oil.','Jar|🏺|Clay+Clay|Shape a clay covering.','Covered torch|🪔|Torch+Jar|Hide the light inside the jar.'],'calls':[{'t':'Prepare the lanterns','w':'Gideon gives each man a trumpet and a jar with a torch inside. Prepare a covered torch.','goal':'Covered torch','v':'The small company waits around the camp.','l':'Prepare carefully and trust God rather than the size of the army.'},{'t':'Wait for the signal','w':'Prepare another covered torch, then practise the shared signal before revealing the light.','raws':['🪵 Wood','🌿 Cloth','🫒 Oil','🟤 Clay'],'rc':[],'goal':'Covered torch,Signal,Signal','v':'At Gideon’s signal, the trumpets sound and the jars break.','l':'Listen, wait and act together.','mg':{'t':'press','title':'Practise the signal','verb':'Practise the next beat','n':3,'out':'Signal','oe':'📯'}}]}

skin='''<style>
:root,:root[data-theme="dark"],:root[data-theme="light"]{--bg:#183444;--card:#fff4d6;--ink:#172b38;--mute:#4f5c60;--gold:#8c531d;--btn:#ffb45c;--btnink:#172b38;--chip:#f5dfac}
body{font-family:system-ui,sans-serif}.w{max-width:760px;padding:16px 14px 40px}h1{font:900 clamp(28px,6vw,42px)/1.15 system-ui;color:#ffcf65;margin:24px 0}.card{border:3px solid #101925;box-shadow:4px 4px #101925;border-radius:6px;margin-bottom:18px;background-color:var(--card);background-image:radial-gradient(#172b3818 1px,transparent 1px);background-size:12px 12px}.chip,.btn{min-height:44px;min-width:44px;border:2px solid #172b38;border-radius:5px;font-weight:800;touch-action:manipulation;overflow-wrap:anywhere}.btn{box-shadow:3px 3px #101925}.row{gap:10px}.slot{min-width:44px}.craft-test-nav{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px;color:#fff4d6}.craft-test-nav a{display:inline-block;color:inherit;padding:10px 0;min-height:44px}.craft-test-nav button{font:800 14px system-ui;min-height:44px;border:3px solid #101925;background:#ffb45c;color:#172b38;padding:8px 12px;border-radius:5px;cursor:pointer}.craft-test-note{background:#dfcff2;color:#172b38;padding:12px;border-radius:5px;font-size:14px}.bar{color:#fff4d6}.row>.btn{white-space:normal}button:focus-visible,a:focus-visible{outline:4px solid #2885ce;outline-offset:3px}
</style>'''
count=0
for item in manifest['stories']:
 sid=item['story']
 if sid=='Abraham':continue
 source=examples/(sid+'.html');text=source.read_text() if source.exists() else (examples/'Ruth.html').read_text()
 if not source.exists():
  text=re.sub(r'const ST=\[.*?\],FIX="[^"]+";',lambda m:'const ST='+json.dumps([adaptation(sid)],ensure_ascii=False)+',FIX='+json.dumps(sid)+';',text,flags=re.S)
  text=re.sub(r'<title>.*?</title>',f'<title>Built by Faith – {sid}</title>',text)
 if '<!-- crafting-day-feedback:start -->' not in text:
  feedback=(root/'scripts/crafting-day-feedback.js').read_text()
  text=text.replace('</body>','<!-- crafting-day-feedback:start --><script>'+feedback+'</script><!-- crafting-day-feedback:end --></body>')
 text=text.replace('</head>',skin+'</head>')
 toolbar=f'''<nav class="craft-test-nav" aria-label="Game testing"><a href="index.html">← {html.escape(item['title'])} games</a><button id="craftRestart" type="button">Restart</button><a href="index.html">Skip →</a></nav><p class="craft-test-note">Crafting v2 standalone test{' — adapted for '+sid if not source.exists() else ''}. This prototype does not save story progress. Each day has six actions. When they run out, choose Start new day to keep playing.</p>'''
 text=text.replace('<div class="w">','<div class="w">'+toolbar,1)
 # Keep navigation local; the prototype is not a new live chapter integration.
 text=re.sub(r'<a class="btn" href="\$\{COMIC\}\$\{G.f\}/">Read the comic</a>','<a class="btn" href="index.html">Continue →</a>',text)
 text=text.replace('href="${COMIC}"','href="index.html"').replace('href="https://purna.github.io/bible-stories/Adam/"','href="index.html"')
 text=text.replace('</body>',"<script>document.querySelector('#craftRestart').onclick=()=>location.reload();document.body.dataset.craftingReady='true';</script></body>")
 dest=out/sid;dest.mkdir(exist_ok=True);(dest/'crafting-v2.html').write_text(text)
 index=dest/'index.html';s=index.read_text();s=re.sub(r'<!-- crafting-v2:start -->.*?<!-- crafting-v2:end -->','',s,flags=re.S)
 card='''<!-- crafting-v2:start --><section class="card" style="margin:24px 0"><span class="badge">Standalone crafting prototype</span><h2>Built by Faith — Crafting v2</h2><p>Gather materials, discover recipes and complete two story callings. Test the crafting game independently of the comic.</p><a href="crafting-v2.html">Play crafting game →</a></section><!-- crafting-v2:end -->'''
 s=s.replace('<div class="cards">',card+'<div class="cards">',1);index.write_text(s)
 entry={'file':'crafting-v2.html','source':str(source.relative_to(root)) if source.exists() else '__games/examples/Crafting_v2/bible-crafting/Ruth.html','status':'standalone-prototype','adapted':not source.exists()}
 item['craftingGame']=entry
 p=dest/'current-games.json';data=json.loads(p.read_text());data['craftingGame']=entry;p.write_text(json.dumps(data,indent=2)+'\n');count+=1
manifest['standaloneCraftingCount']=count
(out/'current-games-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
p=out/'index.html';s=p.read_text();s=re.sub(r'<!-- crafting-summary:start -->.*?<!-- crafting-summary:end -->','',s,flags=re.S);s=s.replace('<div class="cards">',f'<!-- crafting-summary:start --><p class="note">{count} standalone Crafting v2 games are available inside the story folders. Abraham retains its ten current chapter games.</p><!-- crafting-summary:end --><div class="cards">',1);p.write_text(s)
print(f'Added {count} standalone Crafting v2 games and story-index links; Abraham unchanged.')
