import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const stories=['Abraham','Adam','Babel','Daniel','David','Deborah','Eiljah','Elisha','Enoch','Esther','Hannah','Isaiah','Jacob','Jeremiah','Job','Jonah','Joseph','Joshua','Moses','Nehemiah','Noah','Ruth','Samuel'];
const canonicalHtml=fs.readFileSync(path.join(root,'Moses/tools/character_head_generator.html'),'utf8');
const women=/sarah|hagar|eve|mother|daughter|wife|miriam|zipporah|deborah|jael|jezebel|widow|woman|rachel|leah|esther|vashti|zeresh|hannah|rebekah|abigail|michal|bathsheba|naomi|ruth|orpah|girl|peninnah|rahav|rahab|queen/i;
const royal=/nimrod|nebuchadnezzar|belshazzar|darius|pharaoh|saul$|david$|solomon|ahab$|jezebel|jabin|ahasuerus|vashti|esther$|zeresh|uzziah|ahaz|hezekiah|jehoiakim|zedekiah|josiah|artaxerxes|king|queen/i;
const prophet=/abraham|daniel|samuel|deborah|elijah|elisha|enoch|isaiah|jeremiah|jonah|moses|nathan|balaam|hannah|job/i;
const priest=/aaron|eli$|eleazar|melchizedek|jethro|priest|ephod/i;
const soldier=/goliath|sisera|barak|joshua|caleb|overseer|guard|commander|scout|saul$|david_young|jonathan|agag|jabin|nebuchadnezzar/i;
const labour=/builder|brickmaker|worker|overseer|keeper|servant|peasant|neighbour|sailor|captain|field|traveller/i;
const young=/young|child|son$|daughter$|boy|girl/i;
const palettes=[
 ['#d6b477','#6f4b32','#3f3027','#c99b46'],['#b78d58','#365f67','#263f47','#d3ad53'],
 ['#d0aa78','#77414b','#4c2d36','#c89749'],['#c2a36b','#53613a','#354229','#b99045'],
 ['#d8c39b','#67547a','#40364f','#d0ad58'],['#c1a178','#875b34','#533920','#d0a34c']
];
const maleHair=['short','wavy','curly','shoulder_waves','receding','locs','shaved_sides','flowing'];
const femaleHair=['side_braid','crown_braids','shoulder_waves','braids','tied_back','flowing'];
const commonHats=['none','shepherd_wrap','wrapped_scarf','skullcap','hood'];
const textures=['woven_linen','fine_linen','herringbone','basket_weave','dotted','tartan'];

function roleVariation(key,index){
 const isWoman=women.test(key),isRoyal=royal.test(key),isProphet=prophet.test(key),isPriest=priest.test(key),isSoldier=soldier.test(key),isLabour=labour.test(key),isYoung=young.test(key);
 let hairStyle=(isWoman?femaleHair:maleHair)[index%(isWoman?femaleHair.length:maleHair.length)];
 let hatStyle=commonHats[index%commonHats.length];
 let clothingType=['tunic','traveller_cloak','desert_mantle','work_tunic'][index%4];
 let materialStyle=textures[index%textures.length];
 if(isYoung){hairStyle=isWoman?'side_braid':'curly';hatStyle='none';clothingType='tunic';materialStyle='fine_linen'}
 if(isLabour){clothingType='work_tunic';materialStyle=index%2?'basket_weave':'woven_linen';hatStyle=index%3===0?'wrapped_scarf':'none'}
 if(isProphet){clothingType=index%2?'prophet_mantle':'desert_mantle';materialStyle='herringbone';hatStyle=index%3===0?'shepherd_wrap':index%3===1?'hood':'none'}
 if(isPriest){clothingType='priestly_ephod';materialStyle='fine_linen';hatStyle='turban'}
 if(isSoldier){clothingType='military_lorica';materialStyle='scales';hatStyle=index%2?'battle_helmet':'none';hairStyle=isWoman?'crown_braids':index%3?'shaved_sides':'short'}
 if(isRoyal){clothingType=isWoman?'court_dress':'royal_robes';materialStyle=index%2?'dotted':'fine_linen';hatStyle=/pharaoh/.test(key)?'pharaoh_crown':'royal_diadem';hairStyle=isWoman?'crown_braids':index%2?'shoulder_waves':'curly'}
 if(/widow|peasant|israelite_woman/.test(key)){clothingType='work_tunic';materialStyle='woven_linen';hatStyle='veil'}
 if(/shepherd|noah|jacob|isaac|esau|boaz|lot|eliezer/.test(key)){clothingType='traveller_cloak';materialStyle='basket_weave';hatStyle=index%2?'shepherd_wrap':'none'}
 const [colorInner,colorOuter,colorCloak,colorAccent]=palettes[index%palettes.length];
 return {hairStyle,hatStyle,clothingType,materialStyle,colorInner,colorOuter,colorCloak,colorAccent,hatSize:hatStyle==='none'?1:Number((.9+(index%3)*.1).toFixed(1)),hairSize:Number((.9+(index%4)*.1).toFixed(1))};
}
function writeJs(dir,data){const baseName=data.story.toUpperCase().replace(/[^A-Z0-9]+/g,'_')+'_BASE';const fn=data.story.toLowerCase().replace(/[^a-z0-9]+/g,'')+'Preset';const entries=Object.entries(data.presets).map(([key,p])=>`  ${JSON.stringify(key)}: ${fn}(${JSON.stringify(p.name)}, ${JSON.stringify(Object.fromEntries(Object.entries(p).filter(([k])=>k!=='name')))}),`).join('\n');const js=`// Canonical character inventory for ${data.story}. Loaded directly by the browser generator.\nconst CHARACTER_PRESETS_META = ${JSON.stringify({story:data.story,defaultPreset:data.defaultPreset,groupLabel:`${data.story} characters`},null,2)};\nconst ${baseName} = ${JSON.stringify(data.base,null,2)};\nconst ${fn} = (name, overrides = {}) => ({ ...${baseName}, name, ...overrides });\nconst CHARACTER_PRESETS_DATA = {\n${entries}\n};\n`;fs.writeFileSync(path.join(dir,'character_presets.js'),js)}

for(const folder of stories){
 const dir=path.join(root,folder,'tools'),jsonPath=path.join(dir,'character_presets.json');
 const data=JSON.parse(fs.readFileSync(jsonPath,'utf8'));data.base.materialStyle=data.base.materialStyle||'woven_linen';
 Object.entries(data.presets).forEach(([key,preset],index)=>Object.assign(preset,roleVariation(key,index)));
 fs.writeFileSync(jsonPath,JSON.stringify(data,null,2)+'\n');writeJs(dir,data);
 const html=canonicalHtml.replace(/<title>[^<]*<\/title>/,`<title>Character Head Generator — ${data.story}</title>`).replace(/<div class="brand">[^<]* Head Forge/,`<div class="brand">${data.story} Head Forge`);
 fs.writeFileSync(path.join(dir,'character_head_generator.html'),html);
}
console.log(`Updated ${stories.length} character generators and their JS/JSON presets with expanded visual variation.`);
