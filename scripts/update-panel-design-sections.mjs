import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const canon = JSON.parse(fs.readFileSync(path.join(root, 'story-canon.json'), 'utf8'));
const START = '<!-- panel-scene-design:start -->';
const END = '<!-- panel-scene-design:end -->';
const SUMMARY_START = '<!-- act-summary:start -->';
const SUMMARY_END = '<!-- act-summary:end -->';

const profiles = [
  { test:/\b(river|sea|water|jordan|flood|storm|rain|ark|ship|deep|fish)\b/i, palette:'deep indigo, river teal, foam blue, wet silver', light:'low raking light with broken water reflections', bg:'waterline, cloud bank, and distant shore', motion:'slow lateral drift with a restrained rise on the reveal', svg:'ripple paths, reeds, cloud bands, and spray loop at different parallax speeds', three:'hero vessel or crossing prop rocks gently; water-adjacent props react with small secondary motion' },
  { test:/fire|furnace|carmel|burn|altar|sacrifice|moriah|calf/i, palette:'charcoal, ember red, burnt orange, covenant gold', light:'hard fire key with warm bounce and deep cool shadows', bg:'smoke layers, dark ridge, and heat-softened horizon', motion:'measured push-in that stops before the decisive moment', svg:'embers, smoke curls, and heat shimmer rise asynchronously', three:'flame-lit hero prop uses restrained emissive pulses; no explosive spectacle' },
  { test:/palace|king|queen|throne|court|banquet|pharaoh|writing|decree/i, palette:'lapis blue, royal plum, limestone, hammered gold', light:'high clerestory or lamp light with sharp architectural shadow', bg:'columns, patterned wall, and distant court silhouettes', motion:'formal dolly-in with a slight off-axis shift when power is challenged', svg:'banners, curtain edges, and lamp glow breathe subtly', three:'throne, table, seal, or architectural hero object moves only when handled' },
  { test:/dream|vision|stars|voice|covenant|angel|ladder|whirlwind|beasts/i, palette:'midnight violet, ultramarine, pale cyan, star gold', light:'motivated glow emerging from the vision against a subdued world', bg:'abstract horizon, layered cloud, and symbolic light field', motion:'slow orbit or vertical crane that returns to a grounded eye line', svg:'stars, glyphs, cloud veils, and rays phase in rather than flash', three:'symbolic objects rotate or assemble slowly with eased starts and stops' },
  { test:/wilderness|desert|drought|journey|exile|wait|road|mount|horeb|sinai|nebo/i, palette:'sandstone, ochre, dry umber, faded turquoise', light:'broad hard sun or long amber dusk with strong silhouette edges', bg:'layered ridges, heat haze, and an open horizon', motion:'patient side-track or shallow forward drift that emphasizes distance', svg:'dust, cloth edges, distant birds, and heat bands move sparingly', three:'staff, pack, tent, or terrain marker sways or settles with weight' },
  { test:/garden|vineyard|field|grain|glean|tree|plant|creation|animal|flock/i, palette:'leaf green, earth brown, barley gold, clear sky blue', light:'soft morning light with leaf-patterned highlights', bg:'rolling field, orchard line, and layered sky', motion:'gentle crane or arc revealing the working space', svg:'leaves, grasses, grain heads, and birds use staggered wind cycles', three:'plants, baskets, animals, or tools respond to touch with small physical motion' },
  { test:/wall|city|tower|gate|jericho|jerusalem|nineveh|babylon|brick/i, palette:'sun-baked clay, limestone, slate shadow, muted bronze', light:'directional late-afternoon light defining masonry relief', bg:'city silhouette, towers, and atmospheric street depth', motion:'controlled pan along the structure followed by a short push to the objective', svg:'dust, pennants, distant figures, and shadow bands provide depth', three:'wall section, gate, brick, or tool animates only for the construction or collapse beat' },
  { test:/cave|den|pit|prison|cistern|night|hiding/i, palette:'near-black blue, cool slate, lamp amber, muted earth', light:'single motivated shaft or lamp with rapid falloff', bg:'receding rock or masonry silhouettes with minimal detail', motion:'slow inward dolly; pull back only when safety or release arrives', svg:'dust motes and thin light rays drift slowly', three:'chains, stone, door, or lamp carries subtle weight and contact motion' },
  { test:/.*/, palette:'parchment cream, earth umber, muted teal, restrained gold', light:'clear directional key with soft fill and readable silhouettes', bg:'layered landscape or architecture specific to the scripture setting', motion:'subtle parallax drift with a short eased push at the narrative turn', svg:'atmosphere and cloth use slow staggered loops', three:'one tactile hero prop carries the interaction; all secondary motion remains quiet' }
];

function profile(title) { return profiles.find(p => p.test.test(title)); }
function esc(value) { return String(value).replaceAll('|', '\\|').replaceAll('\n', ' '); }
function label(key) { return key.replaceAll('_',' ').replace(/\b\w/g, c => c.toUpperCase()); }
function docPath(folder) {
  const slug = folder === 'Eiljah' ? 'elijah' : folder.toLowerCase();
  return path.join(root, folder, '__docs', `${slug}-design-source-of-truth.md`);
}
function sceneId(number, suffix) { return `${String(number).padStart(2,'0')}${suffix}`; }
function chapterMaterials(story, chapter, index) {
  const text = `${chapter.title} ${chapter.game}`.toLowerCase();
  const preferences = [];
  const add = (...keys) => preferences.push(...keys);
  if (/\b(water|river|sea|flood|rain|storm|ship|ark|jordan|brook|well|deep)\b/.test(text)) add('water_fast','water_still','nile_reeds','wood_dark','wood_oak');
  if (/field|grain|glean|garden|vineyard|tree|plant|flock|animal|olive|food|bread/.test(text)) add('grass','leaves','fabric_weave','wood_oak','water_still');
  if (/palace|king|queen|throne|court|banquet|decree|temple|altar|priest/.test(text)) add('mosaic','hammered_gold','fabric_weave','fabric_dots','wall_brick','stone');
  if (/wall|gate|tower|city|brick|build|house|room|prison|den|pit|cistern/.test(text)) add('wall_brick','stone','wood_dark','wood_oak','egypt_mud_brick');
  if (/desert|wilderness|journey|road|mount|drought|exile|sand/.test(text)) add('desert_sand','stone','fabric_weave','wood_oak');
  if (/fire|furnace|burn|gold|calf|covenant|tablet|writing/.test(text)) add('hammered_gold','stone_tablets','stone','wood_dark');
  if (/robe|cloth|tent|cord|sackcloth|weave|garment/.test(text)) add('fabric_weave','fabric_dots','wood_oak');
  const fallback = story.materials.map((_,offset)=>story.materials[(index+offset)%story.materials.length]);
  const selected = [...new Set([...preferences,...fallback])].filter(key=>story.materials.includes(key));
  return [selected[0], selected[1] || selected[0], selected[2] || selected[0]];
}
function makeRows(story) {
  const rows = [];
  story.chapters.forEach((chapter, index) => {
    const n = chapter.number;
    const p = profile(`${chapter.title} ${chapter.game}`);
    const [m1,m2,m3] = chapterMaterials(story, chapter, index);
    const hero = chapter.title.toLowerCase();
    rows.push({
      id:sceneId(n,'A'), chapter:chapter.title, purpose:'Establish',
      colour:`${p.palette}. ${p.light}.`, texture:`\`${m1}\` + \`${m2}\``,
      composition:`Wide, three-plane tableau. FG SVG: framing ${label(m1).toLowerCase()}, nearby silhouettes, and an edge prop tied to “${hero}”. MG: character group and optional low-detail 3D landmark. BG SVG: ${p.bg}. Keep the objective in the brightest third.`,
      camera:`Wide 28–35 mm equivalent, slightly above eye level. ${p.motion}.`,
      animation:`SVG: ${p.svg}. 3D: ${p.three}. Characters begin in readable held poses before any movement.`
    });
    rows.push({
      id:sceneId(n,'B'), chapter:chapter.title, purpose:'Interact',
      colour:`Increase local contrast around the action while retaining ${p.palette}. Key light follows the story’s real light source.`, texture:`\`${m2}\` + \`${m3}\``,
      composition:`Medium action composition with a clear left-to-right path. FG SVG: hands, cloth, foliage, masonry, or tool silhouette that frames—but never covers—the target. MG 3D: the single tactile object required to “${chapter.game.replace(/\.$/,'').toLowerCase()}”. BG SVG: simplified ${p.bg} with reduced saturation.`,
      camera:`40–55 mm equivalent at character/chest height; no free orbit during text. Use a small pointer-linked parallax shift, then an 8–12% eased push when the action completes.`,
      animation:`SVG target gets a slow 1–2 px invitation pulse until input; atmosphere continues at half speed. 3D interaction uses anticipation, contact, settle, and a clear final pose. Respect reduced-motion by crossfading between start/end states.`
    });
    rows.push({
      id:sceneId(n,'C'), chapter:chapter.title, purpose:'Resolve / reflect',
      colour:`Let the accent move toward a quieter ${p.palette}; lower saturation behind captions and preserve warm skin tones.`, texture:`\`${m3}\` + \`${m1}\``,
      composition:`Balanced medium-wide aftermath. FG SVG: the chapter’s symbolic object as a corner frame. MG: characters separated into a clean emotional silhouette; 3D hero prop is at rest. BG SVG: ${p.bg}, opened to leave negative space for the scripture reference.`,
      camera:`50 mm equivalent near eye level. Hold still for the canonical line, then pull back 5–8% or tilt gently toward the next journey direction.`,
      animation:`SVG movement decelerates and settles; one symbolic element may continue looping. 3D elements stop before the scripture reference appears. Transition out with a 350–500 ms layer crossfade, not a hard cut.`
    });
  });
  return rows;
}

function buildSection(folder, story) {
  const rows = makeRows(story);
  const materialList = story.materials.map(k => `\`${k}\``).join(', ');
  const acts=story.chapters.map(chapter=>{
    const actRows=rows.filter(r=>r.id.startsWith(String(chapter.number).padStart(2,'0'))).map(r=>`| ${r.id} | ${r.purpose} | ${esc(r.colour)} | ${r.texture} | ${esc(r.composition)} | ${esc(r.camera)} | ${esc(r.animation)} |`).join('\n');
    return `### Act ${chapter.number}: ${chapter.title}\n\n**Act summary:** ${chapter.game}\n\n| Panel | Function | Colour and lighting | Texture Forge keys | Composition and layers | Camera angle and movement | SVG and 3D animation |\n|---|---|---|---|---|---|---|\n${actRows}`;
  }).join('\n\n');
  return `${START}\n## Comic panel and scene direction\n\nThis is the canonical visual storyboard for production. Each chapter uses three principal panels: **A establishes**, **B carries the interaction**, and **C resolves and reflects**. Additional dialogue panels inherit the nearest principal panel’s palette, lighting, layers, lens, and motion; they may change character pose and caption placement but must not invent a new visual language without updating this document.\n\n### Layer and motion contract\n\n- **Background — SVG:** setting, sky, distant architecture/landscape, weather, and the lowest-frequency parallax. Never place an essential interactive target here.\n- **Middle ground — characters + optional 3D:** the narrative action and at most one tactile hero prop. Use 3D only where depth improves the chapter action.\n- **Foreground — SVG:** close framing shapes, symbolic props, atmosphere, and occasional occlusion. Foreground motion must not obscure faces, captions, or targets.\n- **Camera:** text panels remain stable. Movement is slow, eased, and motivated by revelation, travel, or completion. Avoid continuous orbit, handheld shake, and large zooms.\n- **Animation:** SVG and 3D movement starts at different phases so the scene feels layered. Pause nonessential loops while a choice is open. Provide a reduced-motion crossfade/pose alternative.\n- **Approved Texture Forge inventory:** ${materialList}. Scene rows use only these keys; generated SVGs should preserve the key in filenames or metadata.\n\n${acts}\n\n### Panel acceptance checklist\n\nA panel is ready only when its background, middle ground, and foreground are individually toggleable; its listed textures are used consistently; text remains readable at mobile width; the camera settles before dialogue; interactive 3D objects have a clear resting state; SVG loops are seamless; and reduced-motion mode communicates the same story beat.\n${END}`;
}

function buildSummary(story){
  const links=story.chapters.map(ch=>`- [Act ${ch.number}: ${ch.title}](#act-${ch.number}-${slugAnchor(ch.title)}) — ${ch.game}`).join('\n');
  return `${SUMMARY_START}\n## Story and act summary\n\n**Story question:** *${story.question}*\n\nThis source of truth covers ${story.chapters.length} acts. Use the links below to jump directly to each act’s panel, layer, camera, texture, and animation specification.\n\n${links}\n${SUMMARY_END}`;
}
function slugAnchor(value){return value.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function upsertSummary(text,summary){const a=text.indexOf(SUMMARY_START),b=text.indexOf(SUMMARY_END);if(a>=0&&b>a)return text.slice(0,a).trimEnd()+'\n\n'+summary+'\n\n'+text.slice(b+SUMMARY_END.length).trimStart();const firstLineEnd=text.indexOf('\n');return text.slice(0,firstLineEnd).trimEnd()+'\n\n'+summary+'\n\n'+text.slice(firstLineEnd).trimStart()}

for (const [folder, story] of Object.entries(canon)) {
  const target = docPath(folder);
  if (!fs.existsSync(target)) throw new Error(`Missing canonical design document: ${target}`);
  const section = buildSection(folder, story);
  let text = fs.readFileSync(target, 'utf8').trimEnd();
  text=upsertSummary(text,buildSummary(story));
  const start = text.indexOf(START);
  const end = text.indexOf(END);
  if (start >= 0 && end > start) text = text.slice(0,start).trimEnd() + '\n\n' + section + text.slice(end + END.length);
  else text += '\n\n' + section + '\n';
  fs.writeFileSync(target, text.trimEnd() + '\n');
}

console.log(`Updated ${Object.keys(canon).length} canonical design documents with panel-level scene direction.`);
