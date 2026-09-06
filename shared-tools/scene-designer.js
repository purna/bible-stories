(() => {
"use strict";

const STORIES = {"Abraham":[{"title":"The Call","brief":"Follow the road markers out of Haran."},{"title":"Egypt and Return","brief":"Choose honest repairs after a fearful mistake."},{"title":"Lot Chooses","brief":"Survey the land and give Lot first choice."},{"title":"Rescue of Lot","brief":"Plan a fast night rescue without taking spoil."},{"title":"Covenant Stars","brief":"Trace the promised constellation."},{"title":"Hagar in the Wilderness","brief":"Find water and listen before acting."},{"title":"The Visitors","brief":"Prepare hospitality before the guests depart."},{"title":"Sodom and Gomorrah","brief":"Guide Lot’s household away without looking back."},{"title":"Isaac Is Born","brief":"Assemble a celebration tent."},{"title":"Moriah","brief":"Climb, gather wood, and respond to the provided ram."}],"Adam":[{"title":"Formed from Dust","brief":"Gather the garden’s elements in creation order."},{"title":"The Garden","brief":"Name creatures by matching them to habitats."},{"title":"Together","brief":"Build a shared shelter and tend one plot together."},{"title":"The Boundary","brief":"Navigate abundance while leaving one tree untouched."},{"title":"The Choice","brief":"Spot the serpent’s half-truths in a dialogue puzzle."},{"title":"Hiding","brief":"Follow footprints and admit what happened."},{"title":"East of Eden","brief":"Pack seeds and begin cultivation outside the garden."},{"title":"Cain and Abel","brief":"Prepare offerings with care, then cool Cain’s anger."},{"title":"The Field","brief":"Witness consequence and mark a refuge path."},{"title":"A New Line","brief":"Plant a family tree from Seth onward."}],"Babel":[{"title":"One Language","brief":"Coordinate a village task with shared symbols."},{"title":"The Plain","brief":"Choose a safe settlement site."},{"title":"Bake the Bricks","brief":"Mix and fire bricks to the right strength."},{"title":"A Name for Ourselves","brief":"Sort motives behind the tower plan."},{"title":"The Tower Rises","brief":"Balance height, safety, and care for workers."},{"title":"Confusion","brief":"Communicate using gesture and visual clues."},{"title":"Scattered","brief":"Guide families toward different horizons."},{"title":"Nations","brief":"Complete a map mosaic celebrating many peoples."}],"Daniel":[{"title":"Exile and the Table","brief":"Build a respectful ten-day food test."},{"title":"The Great Statue","brief":"Reassemble the dream and its meaning."},{"title":"The Furnace","brief":"Keep the three friends together through the fire maze."},{"title":"The Proud King","brief":"Tend the humbled king until his reason returns."},{"title":"Writing on the Wall","brief":"Match the mysterious words to their warning."},{"title":"The Lions’ Den","brief":"Maintain Daniel’s prayer rhythm despite the decree."},{"title":"Four Beasts","brief":"Identify symbols without attacking the vision."},{"title":"The Ram and Goat","brief":"Track the vision’s movements on a map."},{"title":"Seventy Weeks","brief":"Order prayer, confession, and hope."},{"title":"Final Vision","brief":"Carry the sealed message to the riverbank."}],"David":[{"title":"Anointed","brief":"Identify the overlooked shepherd among Jesse’s sons."},{"title":"Goliath","brief":"Time a sling throw after refusing heavy armour."},{"title":"Saul’s Court","brief":"Play a calming melody while watching Saul’s mood."},{"title":"Covenant Friends","brief":"Exchange signals with Jonathan unseen."},{"title":"The Wilderness","brief":"Escape Saul and spare him in the cave."},{"title":"Abigail","brief":"Deliver provisions before anger becomes violence."},{"title":"The Throne","brief":"Resolve petitions without favouritism."},{"title":"Bathsheba and Uriah","brief":"Confront the irreversible harm rather than hiding it."},{"title":"Nathan’s Parable","brief":"Recognise the king inside the story and repent."},{"title":"Absalom","brief":"Navigate divided loyalties without celebrating loss."},{"title":"The Census","brief":"Choose responsibility during the plague."},{"title":"Solomon","brief":"Pass plans and wisdom to the next king."}],"Deborah":[{"title":"Under the Palm","brief":"Hear disputes and restore a fair path."},{"title":"The Summons","brief":"Carry Deborah’s message to Barak."},{"title":"Gather at Tabor","brief":"Rally tribes without alerting Sisera."},{"title":"The Storm","brief":"Use the flooded ground to break the chariot advantage."},{"title":"Sisera Flees","brief":"Track the fleeing commander to Jael’s tent."},{"title":"Jael’s Choice","brief":"Prepare hospitality, then protect the camp."},{"title":"The Song","brief":"Rebuild the victory song in call-and-response."}],"Eiljah":[{"title":"The Drought","brief":"Follow ravens to daily bread by the brook."},{"title":"The Widow’s Jar","brief":"Measure flour and oil without exhausting either."},{"title":"The Child Restored","brief":"Carry the child upstairs and persist in prayer."},{"title":"Mount Carmel","brief":"Repair the altar with twelve stones."},{"title":"The Rain Returns","brief":"Spot the small cloud and race from the storm."},{"title":"Under the Broom Tree","brief":"Rest, eat, and accept care before travelling."},{"title":"The Quiet Voice","brief":"Distinguish wind, quake, fire, and quiet."},{"title":"Naboth’s Vineyard","brief":"Expose the false testimony behind the seizure."},{"title":"Chariots of Fire","brief":"Cross the Jordan and pass the mantle to Elisha."}],"Elisha":[{"title":"The Mantle","brief":"Leave the plough and follow Elijah."},{"title":"The Jordan","brief":"Strike the water and cross."},{"title":"The Widow’s Oil","brief":"Collect jars and pour without waste."},{"title":"The Shunammite Room","brief":"Arrange a simple guest room."},{"title":"The Child","brief":"Climb to the room and persist in care."},{"title":"Naaman","brief":"Guide the commander through seven Jordan immersions."},{"title":"The Floating Axe","brief":"Mark where the borrowed iron fell."},{"title":"The Unseen Army","brief":"Reveal protection around the frightened servant."},{"title":"A Blind Feast","brief":"Lead enemies safely to a meal instead of an ambush."}],"Enoch":[{"title":"A Family Record","brief":"Place Enoch correctly in the generations."},{"title":"The First Walk","brief":"Choose a daily route that serves neighbours."},{"title":"A Son Named Methuselah","brief":"Prepare the home for a new child."},{"title":"Years of Faithfulness","brief":"Complete repeated small acts without a fame meter."},{"title":"A Warning","brief":"Deliver a hard truth without cruelty."},{"title":"Walking with God","brief":"Follow a quiet path as the landscape changes."},{"title":"Taken","brief":"Let go of the route and enter the final light."}],"Esther":[{"title":"The Banquet","brief":"Navigate the palace feast and hear Vashti’s refusal."},{"title":"A New Queen","brief":"Prepare Esther while protecting her identity."},{"title":"The Gate Plot","brief":"Carry Mordecai’s warning into the royal record."},{"title":"Haman’s Decree","brief":"Trace the decree as it spreads across the empire."},{"title":"For Such a Time","brief":"Fast, gather courage, and approach the throne."},{"title":"The First Banquet","brief":"Invite the king and Haman without revealing too soon."},{"title":"The Sleepless Night","brief":"Find Mordecai’s forgotten service in the chronicles."},{"title":"The Second Banquet","brief":"Name the threat clearly at the decisive moment."},{"title":"A New Decree","brief":"Send defensive orders before the deadline."},{"title":"Purim","brief":"Assemble gifts, food, and remembrance for every district."}],"Hannah":[{"title":"The Journey to Shiloh","brief":"Gather the household for the annual worship journey."},{"title":"At the Table","brief":"Navigate hurt without retaliating."},{"title":"Silent Prayer","brief":"Form Hannah’s prayer from honest fragments."},{"title":"Misunderstood","brief":"Explain quiet prayer to Eli."},{"title":"Remembered","brief":"Prepare for Samuel’s birth."},{"title":"The Little Robe","brief":"Weave and size a yearly robe."},{"title":"Given Back","brief":"Bring Samuel to serve at Shiloh."},{"title":"Hannah’s Song","brief":"Arrange lines of reversal and hope."}],"Isaiah":[{"title":"A City in Need","brief":"Identify worship separated from justice."},{"title":"The Holy Throne","brief":"Navigate the temple vision and answer the call."},{"title":"The Vineyard Song","brief":"Tend a vineyard that yields injustice."},{"title":"Immanuel Sign","brief":"Carry hope to fearful King Ahaz."},{"title":"The Assyrian Shadow","brief":"Map the advancing empire and the surviving stump."},{"title":"Hezekiah’s Crisis","brief":"Bring the threatening letter into prayer."},{"title":"Comfort My People","brief":"Build a road of return through the wilderness."},{"title":"The Servant","brief":"Match suffering, justice, and healing motifs."},{"title":"New Creation","brief":"Restore a city garden where all can flourish."}],"Jacob":[{"title":"The Birthright","brief":"Weigh hunger against a lasting inheritance."},{"title":"The Stolen Blessing","brief":"Assemble the disguise, then witness its cost."},{"title":"Bethel","brief":"Build the stone pillar after the ladder dream."},{"title":"Rachel at the Well","brief":"Move the stone and water the flock."},{"title":"Laban’s Bargain","brief":"Track changing wages and wedding promises."},{"title":"The Flocks","brief":"Sort speckled and spotted animals fairly."},{"title":"Leaving Haran","brief":"Pack the camp before Laban catches up."},{"title":"The Night Wrestling","brief":"Hold on through the night and receive a new name."},{"title":"Meeting Esau","brief":"Arrange gifts, then step forward unarmed."},{"title":"Joseph’s Coats","brief":"Recognise favouritism forming in the household."}],"Jeremiah":[{"title":"The Call","brief":"Touch the right words to the young prophet’s mouth."},{"title":"The Almond Branch","brief":"Spot signs that God is watching over the word."},{"title":"At the Temple Gate","brief":"Separate ritual confidence from justice."},{"title":"The Scroll","brief":"Dictate to Baruch and rebuild the burned scroll."},{"title":"The Potter","brief":"Reshape the clay while it remains workable."},{"title":"The Yoke","brief":"Carry the warning despite Hananiah’s easy promise."},{"title":"The Cistern","brief":"Coordinate Ebed-melech’s rope rescue."},{"title":"Buy the Field","brief":"Complete a land purchase while siege closes in."},{"title":"The Fall of Jerusalem","brief":"Guide survivors through the breached city."},{"title":"Lament and Hope","brief":"Pair grief lines with stubborn hope."}],"Job":[{"title":"A Blameless Life","brief":"Tend Job’s household and practice generous justice."},{"title":"The Accuser","brief":"Observe the heavenly challenge without controlling it."},{"title":"Loss upon Loss","brief":"Receive each messenger and sit with the silence."},{"title":"Seven Days","brief":"Keep vigil without offering explanations."},{"title":"Job Speaks","brief":"Build an honest lament from grief and protest."},{"title":"The Friends","brief":"Identify when counsel becomes accusation."},{"title":"Elihu","brief":"Listen, test claims, and resist easy scoring."},{"title":"Out of the Whirlwind","brief":"Explore questions about creation."},{"title":"Job Responds","brief":"Release the demand to master every answer."},{"title":"Restoration","brief":"Rebuild community without treating new gifts as replacements."}],"Jonah":[{"title":"Run to the Sea","brief":"Choose cargo and board the ship going the wrong way."},{"title":"The Storm","brief":"Secure the deck and uncover Jonah’s flight."},{"title":"Into the Deep","brief":"Navigate sinking currents toward the great fish."},{"title":"Prayer Below","brief":"Reassemble Jonah’s prayer from psalm fragments."},{"title":"Second Call","brief":"Walk the road to Nineveh."},{"title":"The Warning","brief":"Deliver the short message through the great city."},{"title":"Nineveh Repents","brief":"Coordinate fasting from palace to livestock."},{"title":"The Plant","brief":"Manage shade, worm, and hot wind."},{"title":"The Question","brief":"Compare Jonah’s pity for a plant with God’s pity for a city."}],"Joseph":[{"title":"The Coloured Robe","brief":"Assemble the robe and notice the family tension."},{"title":"Dreams and the Pit","brief":"Order the dreams, then find a path through betrayal."},{"title":"Potiphar’s House","brief":"Manage the household with integrity."},{"title":"The Prison","brief":"Care for prisoners and interpret two dreams."},{"title":"Pharaoh’s Dreams","brief":"Pair cows and grain with seven-year cycles."},{"title":"Storehouses","brief":"Plan grain reserves across Egypt."},{"title":"The Brothers Arrive","brief":"Test recognition while distributing food."},{"title":"Benjamin’s Cup","brief":"Trace the hidden cup and Judah’s offer."},{"title":"Revealed","brief":"Choose the moment Joseph names himself."},{"title":"Goshen","brief":"Settle the family and preserve the famine record."}],"Joshua":[{"title":"Be Strong","brief":"Meditate on the instruction before crossing."},{"title":"Rahab and the Spies","brief":"Hide the scouts and mark the scarlet cord."},{"title":"Crossing Jordan","brief":"Carry twelve memorial stones from the riverbed."},{"title":"Jericho","brief":"March the pattern, sound the trumpets, protect Rahab."},{"title":"Achan’s Hidden Goods","brief":"Trace the community’s loss to the buried objects."},{"title":"Ai","brief":"Set the ambush without repeating earlier presumption."},{"title":"The Gibeonites","brief":"Inspect the worn supplies and face a rushed oath."},{"title":"The Long Campaign","brief":"Resolve territory challenges without spectacle."},{"title":"Allot the Land","brief":"Distribute inheritance among tribes."},{"title":"Choose This Day","brief":"Place household stones beside the covenant witness."}],"Moses":[{"title":"The Child in the River","brief":"Guide the basket through reeds while Miriam keeps watch."},{"title":"The Burning Bush","brief":"Herd sheep, approach the fire, and answer the call."},{"title":"Before the Throne","brief":"Match signs and warnings to each audience."},{"title":"Passover Night","brief":"Prepare the meal and mark the doorway before departure."},{"title":"Through the Sea","brief":"Keep the people moving along the opened path."},{"title":"Bread in the Wilderness","brief":"Gather only enough manna for the day."},{"title":"Sinai","brief":"Arrange the camp and carry the covenant words."},{"title":"The Golden Calf","brief":"Confront the idol and intercede for the people."},{"title":"Forty Years","brief":"Navigate a provision-and-trust journey map."},{"title":"Mount Nebo","brief":"Appoint Joshua and identify the land from afar."}],"Nehemiah":[{"title":"Bad News","brief":"Map Jerusalem’s broken gates while Nehemiah prays."},{"title":"Before the King","brief":"Choose a clear request and realistic resources."},{"title":"Night Inspection","brief":"Survey ruined walls without alerting opponents."},{"title":"Rise and Build","brief":"Assign families to adjacent wall sections."},{"title":"Sword and Trowel","brief":"Balance guarding with construction."},{"title":"The Outcry","brief":"Cancel exploitative debts and restore fields."},{"title":"Plots and Rumours","brief":"Recognise distractions designed to stop the work."},{"title":"The Wall Completed","brief":"Close the final gap and set gatekeepers."},{"title":"The Book Read","brief":"Rebuild the platform and help the people understand."},{"title":"Reform","brief":"Inspect storerooms and restore shared commitments."}],"Noah":[{"title":"The Warning","brief":"Accept the Ark blueprint."},{"title":"The Blueprint","brief":"Measure the hull to the given proportions."},{"title":"The Long Build","brief":"Gather timber, fit planks, and seal with pitch."},{"title":"The Gathering","brief":"Pair animals and stock each pen."},{"title":"The Door Shuts","brief":"Finish the final checks and surrender control."},{"title":"Forty Days","brief":"Feed, calm, and clean animal pens during the storm."},{"title":"The Long Wait","brief":"Send raven and doves at the right intervals."},{"title":"Dry Ground","brief":"Release animals habitat by habitat."},{"title":"The Covenant","brief":"Build the altar and reveal the rainbow."},{"title":"The Vineyard","brief":"Witness Noah’s failure and choose how the sons respond."}],"Ruth":[{"title":"Leaving Moab","brief":"Pack lightly and choose whether to accompany Naomi."},{"title":"Your People","brief":"Follow the road to Bethlehem together."},{"title":"Gleaning","brief":"Collect only grain left for gleaners."},{"title":"Boaz Notices","brief":"Deliver water and protection instructions to the workers."},{"title":"At the Threshing Floor","brief":"Follow Naomi’s plan with restraint and clarity."},{"title":"At the Gate","brief":"Arrange witnesses and present the redemption choice."},{"title":"Redeemed","brief":"Transfer the sandal and join the households."},{"title":"Obed","brief":"Build the family line toward David."}],"Samuel":[{"title":"The Boy at Shiloh","brief":"Complete temple tasks beside Eli."},{"title":"The Voice at Night","brief":"Listen three times and answer correctly."},{"title":"A Hard Message","brief":"Tell Eli the whole message without embellishment."},{"title":"The Ark Captured","brief":"Track the cost of treating the Ark like a charm."},{"title":"Ebenezer","brief":"Raise a memorial stone after deliverance."},{"title":"A King Demanded","brief":"Hear the elders and explain the tradeoffs."},{"title":"Saul Chosen","brief":"Find Saul among the baggage."},{"title":"Saul’s First Victory","brief":"Rally the people and refuse revenge."},{"title":"The Rejected King","brief":"Compare obedience with impressive sacrifice."},{"title":"David Anointed","brief":"Look past height and choose the shepherd son."}]};
const STORY_ALIASES = {Elijah:"Eiljah"};
const beats = [
  {id:"A", name:"Establish", note:"Wide establishing tableau with a clear play space."},
  {id:"B", name:"Core Action", note:"Closer action composition with stronger directional framing."},
  {id:"C", name:"Resolve", note:"Calmer resolution tableau with a strong focal area for reflection/dialogue."}
];

const root = document.getElementById("scene-designer-app");
if (!root) return;
let storyKey = root.dataset.story || document.body.dataset.story || "";
storyKey = STORY_ALIASES[storyKey] || storyKey;
const chapters = STORIES[storyKey];
if (!chapters) {
  root.innerHTML = `<main style="font-family:system-ui;padding:2rem;color:#eee;background:#111;min-height:100vh"><h1>Scene Designer</h1><p>Unknown story: <strong>${escapeHtml(storyKey)}</strong>.</p></main>`;
  return;
}

const css = `
:root{--bg:#0d0d12;--panel:#16161c;--panel2:#1e1e26;--text:#d8d8df;--dim:#999eaa;--accent:#6d83aa;--ok:#3d8f5c;--border:#2a2a35;--font:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:var(--bg);color:var(--text);font-family:var(--font)}
button,select,input{font:inherit}.app{display:grid;grid-template-columns:390px minmax(0,1fr);height:100vh;overflow:hidden}
.sidebar{background:var(--panel);border-right:1px solid var(--border);padding:20px;overflow:auto}.brand{font-size:1.35rem;font-weight:800;display:flex;justify-content:space-between;gap:12px;align-items:baseline;padding-bottom:14px;border-bottom:1px solid var(--border)}.brand small{font-size:.7rem;color:var(--accent);text-transform:uppercase;letter-spacing:.12em}
.group{padding:16px 0;border-bottom:1px solid var(--border);display:grid;gap:10px}.group h3{margin:0;font-size:.78rem;text-transform:uppercase;letter-spacing:.12em;color:var(--accent)}label{display:grid;gap:5px;font-size:.78rem;color:var(--dim)}select,input[type="number"],input[type="text"]{width:100%;background:var(--panel2);border:1px solid var(--border);border-radius:6px;padding:8px;color:var(--text)}input[type="range"]{width:100%}.colors{display:grid;grid-template-columns:1fr 1fr;gap:9px}.color{display:flex;align-items:center;justify-content:space-between;background:var(--panel2);padding:7px 8px;border:1px solid var(--border);border-radius:6px}.color input{width:40px;height:28px;border:0;padding:0;background:transparent}.brief{font-size:.8rem;line-height:1.45;color:var(--dim);background:var(--panel2);padding:10px;border-radius:6px;border:1px solid var(--border)}
.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:14px}.actions button:first-child{grid-column:1/-1}.btn{border:1px solid var(--accent);border-radius:6px;padding:10px;background:var(--accent);color:white;font-weight:700;cursor:pointer}.btn.secondary{background:var(--panel2);border-color:var(--border);color:var(--text)}.btn.ok{background:var(--ok);border-color:var(--ok)}
.stage{min-width:0;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background-image:radial-gradient(var(--border) 1px,transparent 1px);background-size:24px 24px}.topbar{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:14px 18px;background:rgba(13,13,18,.92);border-bottom:1px solid var(--border)}.scene-name{font-weight:800}.scene-meta{font-size:.75rem;color:var(--dim)}
.preview-wrap{display:flex;align-items:center;justify-content:center;padding:24px;min-height:0}.preview{position:relative;width:min(100%,1200px);aspect-ratio:16/9;background:#111;border:1px solid var(--border);box-shadow:0 24px 60px rgba(0,0,0,.45);overflow:hidden}.preview svg{position:absolute;inset:0;width:100%;height:100%;display:block}.preview .fg{pointer-events:none}
.layerbar{display:flex;flex-wrap:wrap;gap:14px;align-items:center;padding:12px 18px;background:var(--panel);border-top:1px solid var(--border);font-size:.78rem;color:var(--dim)}.layerbar label{display:flex;align-items:center;gap:6px}.filename{margin-left:auto;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.7rem}
@media(max-width:900px){.app{grid-template-columns:1fr;height:auto;min-height:100vh;overflow:visible}.sidebar{border-right:0;border-bottom:1px solid var(--border)}.stage{min-height:70vh}.preview-wrap{padding:12px}.filename{width:100%;margin-left:0}}
`;
const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);

root.innerHTML = `
<div class="app">
  <aside class="sidebar">
    <div class="brand"><span>${escapeHtml(displayStory(storyKey))} Scene Forge</span><small>SVG Layers</small></div>
    <section class="group">
      <h3>Chapter / Scene</h3>
      <label>Chapter<select id="chapter"></select></label>
      <label>Scene beat<select id="beat">${beats.map(b=>`<option value="${b.id}">${b.id} · ${b.name}</option>`).join("")}</select></label>
      <div id="brief" class="brief"></div>
    </section>
    <section class="group">
      <h3>Composition</h3>
      <label>Environment<select id="environment">
        <option value="auto">Auto from chapter</option><option value="garden">Garden / field</option><option value="desert">Desert / wilderness</option><option value="mountain">Mountain / rocks</option><option value="river">River / shoreline</option><option value="sea">Sea / storm</option><option value="city">City / walls</option><option value="palace">Palace / temple</option><option value="interior">Interior / tent</option><option value="night">Night / vision</option>
      </select></label>
      <label>Time of day<select id="time"><option value="auto">Auto</option><option value="dawn">Dawn</option><option value="day">Day</option><option value="sunset">Sunset</option><option value="night">Night</option></select></label>
      <label>Horizon <span id="horizonVal">58%</span><input id="horizon" type="range" min="36" max="72" value="58"></label>
      <label>Detail <span id="detailVal">3</span><input id="detail" type="range" min="1" max="5" value="3"></label>
      <label>Seed<input id="seed" type="number" value="1" min="1" max="9999"></label>
    </section>
    <section class="group">
      <h3>Palette</h3>
      <div class="colors">
        ${colorField("skyTop","Sky top","#405a78")}
        ${colorField("skyBottom","Sky low","#d8b278")}
        ${colorField("far","Far ground","#75694d")}
        ${colorField("near","Near ground","#3f4433")}
        ${colorField("accent","Accent","#c98a5a")}
        ${colorField("ink","Ink","#17171c")}
      </div>
      <button class="btn secondary" id="autoPalette">Reset scene palette</button>
    </section>
    <div class="actions">
      <button class="btn" id="generate">Generate Scene</button>
      <button class="btn ok" id="downloadBg">Background SVG</button>
      <button class="btn ok" id="downloadFg">Foreground SVG</button>
      <button class="btn secondary" id="downloadManifest">Scene JSON</button>
      <button class="btn secondary" id="randomise">Randomise Seed</button>
    </div>
  </aside>
  <main class="stage">
    <header class="topbar"><div><div class="scene-name" id="sceneName"></div><div class="scene-meta" id="sceneMeta"></div></div><div class="scene-meta">1920 × 1080 · transparent FG</div></header>
    <div class="preview-wrap"><div class="preview"><div id="bgLayer"></div><div id="fgLayer" class="fg"></div></div></div>
    <footer class="layerbar">
      <label><input type="checkbox" id="showBg" checked> Background</label>
      <label><input type="checkbox" id="showFg" checked> Foreground</label>
      <span>Centre remains deliberately clear for characters/gameplay.</span>
      <span class="filename" id="filename"></span>
    </footer>
  </main>
</div>`;

const $ = id => document.getElementById(id);
chapters.forEach((c,i)=> $("chapter").insertAdjacentHTML("beforeend", `<option value="${i}">Act ${i+1} · ${escapeHtml(c.title)}</option>`));
let last = {bg:"",fg:"",base:""};

const paletteDefaults = {
 garden:["#6d91a3","#e7c98f","#81935e","#42563b","#d4a95a","#192219"],
 desert:["#48657d","#e8bd7e","#b9905c","#75583d","#d59b58","#211b18"],
 mountain:["#4a617b","#cab58e","#706d65","#3d3b3b","#c79a65","#17171c"],
 river:["#315d77","#d6b77e","#608188","#3f594e","#d3a567","#13252c"],
 sea:["#233c58","#7c8fa0","#3b667b","#153747","#d5a35c","#101a23"],
 city:["#455b72","#d1af7d","#8e7b65","#554a41","#d0935a","#1f1b1a"],
 palace:["#3f526c","#ddbf89","#a98c62","#62513c","#d7ae65","#201a17"],
 interior:["#342b2a","#806149","#775c45","#3c2f28","#c18c58","#151313"],
 night:["#111827","#293653","#252c3b","#121722","#d8bd73","#090b10"]
};

function currentChapter(){return chapters[Number($("chapter").value)||0]}
function currentBeat(){return beats.find(b=>b.id===$("beat").value)||beats[0]}
function sceneText(){const c=currentChapter(); return `${c.title} ${c.brief}`.toLowerCase()}
function detectEnvironment(){
  const s=sceneText();
  if(/sea|ship|storm|deep|flood|ark|water opened|through the sea/.test(s)) return "sea";
  if(/river|jordan|well|brook|water|reeds|cistern/.test(s)) return "river";
  if(/palace|king|throne|temple|shiloh|banquet|court|furnace|prison|house|room|table/.test(s)) return "palace";
  if(/city|wall|gate|tower|jericho|nineveh|jerusalem|storehouse|brick/.test(s)) return "city";
  if(/mount|mountain|sinai|nebo|carmel|rock|cave|whirlwind/.test(s)) return "mountain";
  if(/garden|field|flock|grain|vineyard|tree|palm|glean|shepherd|land|harvest/.test(s)) return "garden";
  if(/dream|vision|stars|night|voice|angel|beast|writing/.test(s)) return "night";
  if(/desert|wilderness|journey|road|haran|moab|exile|wandering|drought/.test(s)) return "desert";
  if(/tent|meal|robe|scroll|potter|oil|bread/.test(s)) return "interior";
  return "desert";
}
function detectTime(env){
  const s=sceneText();
  if(/night|stars|dream|vision|sleepless/.test(s)) return "night";
  if(/dawn|morning/.test(s)) return "dawn";
  if(/storm|furnace|fire|burning|carmel/.test(s)) return "sunset";
  return env==="night"?"night":"day";
}
function resetPalette(){
  const env=$("environment").value==="auto"?detectEnvironment():$("environment").value;
  const p=paletteDefaults[env]||paletteDefaults.desert;
  ["skyTop","skyBottom","far","near","accent","ink"].forEach((id,i)=>$(id).value=p[i]);
}
function settings(){
  const env=$("environment").value==="auto"?detectEnvironment():$("environment").value;
  const tod=$("time").value==="auto"?detectTime(env):$("time").value;
  return {env,tod,horizon:Number($("horizon").value),detail:Number($("detail").value),seed:Number($("seed").value)||1,
    skyTop:$("skyTop").value,skyBottom:$("skyBottom").value,far:$("far").value,near:$("near").value,accent:$("accent").value,ink:$("ink").value};
}
function render(){
  const c=currentChapter(), b=currentBeat(), s=settings(), act=(Number($("chapter").value)||0)+1;
  const base=`${slug(displayStory(storyKey))}_act${act}_${b.id.toLowerCase()}`;
  const bg=buildBackgroundSVG(c,b,s,act);
  const fg=buildForegroundSVG(c,b,s,act);
  $("bgLayer").innerHTML=bg; $("fgLayer").innerHTML=fg;
  $("brief").innerHTML=`<strong>${escapeHtml(c.title)}</strong><br>${escapeHtml(c.brief)}<br><small>${b.note}</small>`;
  $("sceneName").textContent=`Act ${act} · ${c.title} · ${b.id} ${b.name}`;
  $("sceneMeta").textContent=`${displayStory(storyKey)} · ${s.env} · ${s.tod} · seed ${s.seed}`;
  $("filename").textContent=`${base}_background.svg + ${base}_foreground.svg`;
  last={bg,fg,base,chapter:c,beat:b,settings:s,act};
}
function buildBackgroundSVG(c,b,s,act){
  const rand=mulberry32(hash(`${storyKey}|${act}|${b.id}|${s.seed}`));
  const H=1080, W=1920, hy=H*s.horizon/100;
  let details="";
  details += distantLayer(s,rand,hy);
  details += midLayer(s,rand,hy);
  if(s.detail>=4) details += atmosphere(s,rand,hy);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${xml(`${displayStory(storyKey)} act ${act} ${c.title} background`)}">
  <metadata>${xml(JSON.stringify({story:displayStory(storyKey),act,chapter:c.title,scene:b.id,layer:"background",environment:s.env,seed:s.seed}))}</metadata>
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${s.skyTop}"/><stop offset="1" stop-color="${s.skyBottom}"/></linearGradient>
  <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${s.far}"/><stop offset="1" stop-color="${s.near}"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  ${celestial(s,rand)}
  ${details}
  <path d="M0 ${hy+80} Q480 ${hy-15} 960 ${hy+45} T1920 ${hy+25} V1080 H0 Z" fill="url(#ground)"/>
  ${backgroundFeature(s,rand,hy)}
  </svg>`;
}
function buildForegroundSVG(c,b,s,act){
  const rand=mulberry32(hash(`fg|${storyKey}|${act}|${b.id}|${s.seed}`));
  const edge=foregroundEdges(s,rand,b.id);
  const prop=foregroundProp(c,s,rand,b.id);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" role="img" aria-label="${xml(`${displayStory(storyKey)} act ${act} ${c.title} foreground`)}">
  <metadata>${xml(JSON.stringify({story:displayStory(storyKey),act,chapter:c.title,scene:b.id,layer:"foreground",environment:s.env,seed:s.seed}))}</metadata>
  ${edge}${prop}
  </svg>`;
}
function celestial(s,rand){
  if(s.tod==="night") return `<circle cx="${1450+rand()*180}" cy="${170+rand()*80}" r="56" fill="#efe4bd" opacity=".92"/>${stars(rand,34)}`;
  if(s.tod==="dawn") return `<circle cx="330" cy="360" r="70" fill="${s.accent}" opacity=".72"/>`;
  if(s.tod==="sunset") return `<circle cx="1510" cy="360" r="86" fill="${s.accent}" opacity=".78"/>`;
  return `<circle cx="1500" cy="180" r="64" fill="#f2ddb0" opacity=".82"/>`;
}
function stars(rand,n){let x="";for(let i=0;i<n;i++){const cx=50+rand()*1820,cy=30+rand()*430,r=1+rand()*3;x+=`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="#fff" opacity="${(.35+rand()*.55).toFixed(2)}"/>`}return x}
function distantLayer(s,rand,hy){
  if(s.env==="mountain"||s.env==="desert") return `<path d="${mountainPath(rand,hy+30,110,7)}" fill="${mix(s.far,"#000000",.17)}" opacity=".72"/>`;
  if(s.env==="city"||s.env==="palace") return citySilhouette(rand,hy+60,s.far,s.env==="palace");
  if(s.env==="garden") return treeLine(rand,hy+70,mix(s.far,"#20301f",.28),9);
  if(s.env==="river"||s.env==="sea") return `<path d="M0 ${hy+35} Q500 ${hy-10} 980 ${hy+28} T1920 ${hy+10} V${hy+180} H0Z" fill="${mix(s.skyTop,"#2a6d7b",.45)}" opacity=".65"/>`;
  if(s.env==="interior") return `<rect x="0" y="${hy-330}" width="1920" height="470" fill="${mix(s.far,"#000",.12)}"/><path d="M0 ${hy-330} L960 ${hy-470} 1920 ${hy-330}" fill="none" stroke="${s.ink}" stroke-width="36" opacity=".35"/>`;
  if(s.env==="night") return `<path d="${mountainPath(rand,hy+50,70,8)}" fill="#161c2b" opacity=".75"/>`;
  return "";
}
function midLayer(s,rand,hy){
  if(s.detail<2)return"";
  if(s.env==="garden")return treeLine(rand,hy+115,s.near,6);
  if(s.env==="city")return citySilhouette(rand,hy+120,mix(s.far,"#000",.08),false);
  if(s.env==="palace")return citySilhouette(rand,hy+115,mix(s.far,"#000",.06),true);
  if(s.env==="river")return `<path d="M0 ${hy+145} Q320 ${hy+95} 620 ${hy+145} T1280 ${hy+130} T1920 ${hy+150}" fill="none" stroke="${mix(s.accent,"#6eb0c0",.45)}" stroke-width="22" opacity=".42"/>`;
  if(s.env==="sea")return `<path d="M0 ${hy+120} Q220 ${hy+75} 440 ${hy+120} T880 ${hy+120} T1320 ${hy+120} T1760 ${hy+120} T2200 ${hy+120}" fill="none" stroke="#dbe7ea" stroke-width="12" opacity=".3"/>`;
  return `<path d="${mountainPath(rand,hy+120,55,10)}" fill="${s.far}" opacity=".55"/>`;
}
function atmosphere(s,rand,hy){
  let out=""; const n=s.detail*5;
  for(let i=0;i<n;i++){const x=rand()*1920,y=80+rand()*(hy+250),r=3+rand()*13;out+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${s.accent}" opacity="${(.025+rand()*.06).toFixed(3)}"/>`} return out;
}
function backgroundFeature(s,rand,hy){
  const text=sceneText();
  if(/tower/.test(text)) return `<path d="M760 ${hy+130} L825 ${hy-280} H1095 L1160 ${hy+130}Z" fill="${mix(s.far,"#5b4435",.45)}"/><rect x="850" y="${hy-210}" width="220" height="45" fill="${s.accent}" opacity=".65"/>`;
  if(/ark|blueprint|door shuts|forty days|long wait/.test(text)&&storyKey==="Noah") return `<path d="M520 ${hy+155} Q960 ${hy-10} 1400 ${hy+155} L1325 ${hy+240} H595Z" fill="${mix(s.near,"#5f3b26",.55)}"/><path d="M650 ${hy+110} H1270 L1180 ${hy-20} H740Z" fill="${mix(s.accent,"#6b4027",.55)}" opacity=".85"/>`;
  if(/furnace|burning bush|golden calf|carmel/.test(text)) return `<g opacity=".9"><path d="M890 ${hy+120} Q820 ${hy-40} 940 ${hy-95} Q900 ${hy+25} 1030 ${hy+105}Z" fill="${s.accent}"/><path d="M945 ${hy+100} Q900 ${hy+5} 980 ${hy-35} Q970 ${hy+35} 1020 ${hy+105}Z" fill="#f1cf75"/></g>`;
  if(/wall|jericho|gate/.test(text)) return `<path d="M390 ${hy+130}V${hy-70}H1530V${hy+130}" fill="${mix(s.far,"#8a765d",.45)}"/><path d="M850 ${hy+130}V${hy+10}Q960 ${hy-100} 1070 ${hy+10}V${hy+130}" fill="${s.ink}" opacity=".72"/>`;
  if(/well/.test(text)) return `<ellipse cx="960" cy="${hy+130}" rx="155" ry="55" fill="${s.ink}" opacity=".55"/><ellipse cx="960" cy="${hy+115}" rx="125" ry="35" fill="${mix(s.skyTop,"#1f6378",.55)}"/>`;
  return "";
}
function foregroundEdges(s,rand,beat){
  const scale=beat==="B"?1.12:beat==="C"?.92:1;
  if(s.env==="garden") return plants(rand,s,scale);
  if(s.env==="river"||s.env==="sea") return reedsAndRocks(rand,s,scale,s.env==="sea");
  if(s.env==="city"||s.env==="palace") return pillars(rand,s,scale,s.env==="palace");
  if(s.env==="interior") return interiorEdges(s,scale);
  return rocks(rand,s,scale);
}
function foregroundProp(c,s,rand,beat){
  const t=(c.title+" "+c.brief).toLowerCase();
  const y=875, op=beat==="C"?.72:.92;
  if(/scroll|book|decree|message|letter|record/.test(t)) return `<g transform="translate(1450 ${y}) rotate(-7)" opacity="${op}"><rect x="-135" y="-55" width="270" height="110" rx="12" fill="#d8c49a"/><path d="M-100 -20H95M-100 8H70M-100 36H105" stroke="${s.ink}" stroke-width="8" opacity=".35"/></g>`;
  if(/stone|altar|tablet|ebenezer|pillar/.test(t)) return `<g transform="translate(1510 ${y})" opacity="${op}"><path d="M-120 80 L-90 -75 -20 -120 72 -78 110 80Z" fill="${mix(s.far,"#b4a58b",.45)}" stroke="${s.ink}" stroke-width="12"/></g>`;
  if(/staff|rod|mantle/.test(t)) return `<g transform="translate(1540 ${y}) rotate(10)" opacity="${op}"><path d="M0 105 Q-20 -120 22 -300" fill="none" stroke="${mix(s.near,"#7b5330",.5)}" stroke-width="24" stroke-linecap="round"/></g>`;
  if(/jar|oil|water|bread|manna|grain|meal/.test(t)) return `<g transform="translate(1510 ${y})" opacity="${op}"><path d="M-70 70 Q-105 -20 -50 -85 H50 Q105 -20 70 70Z" fill="${s.accent}" stroke="${s.ink}" stroke-width="12"/><ellipse cy="-85" rx="50" ry="18" fill="${mix(s.accent,"#fff",.18)}"/></g>`;
  if(/robe|fabric|sandal|coat/.test(t)) return `<path d="M1420 ${y+65} Q1510 ${y-130} 1600 ${y+65}Z" fill="${s.accent}" stroke="${s.ink}" stroke-width="12" opacity="${op}"/>`;
  if(/sling/.test(t)) return `<path d="M1450 ${y+50} Q1530 ${y-180} 1610 ${y+40}" fill="none" stroke="${s.accent}" stroke-width="16" stroke-linecap="round" opacity="${op}"/>`;
  return "";
}
function plants(rand,s,scale){let o="";for(const side of [0,1])for(let i=0;i<4;i++){const x=side?(1590+i*95):(40+i*95),h=(150+rand()*260)*scale,y=1080;o+=`<path d="M${x} ${y} Q${x-45} ${y-h*.55} ${x+rand()*35-18} ${y-h}" fill="none" stroke="${mix(s.near,"#203c27",.42)}" stroke-width="${22+rand()*22}" stroke-linecap="round"/><ellipse cx="${x+(side?-30:35)}" cy="${y-h*.55}" rx="58" ry="24" fill="${mix(s.near,"#315b35",.42)}" transform="rotate(${side?-28:28} ${x} ${y-h*.55})"/>`}return o}
function reedsAndRocks(rand,s,scale,sea){let o="";for(const side of [0,1]){for(let i=0;i<5;i++){const x=side?1650+i*55:40+i*55,h=(120+rand()*230)*scale;o+=`<path d="M${x} 1080 Q${x+rand()*40-20} ${1080-h*.55} ${x+rand()*25-12} ${1080-h}" stroke="${sea?mix(s.near,"#263d36",.5):mix(s.near,"#4f613a",.5)}" stroke-width="16" fill="none" stroke-linecap="round"/>`}}return o+rocks(rand,s,.65*scale)}
function pillars(rand,s,scale,palace){const w=150*scale, col=palace?mix(s.far,"#b09065",.48):mix(s.near,"#776650",.48);return `<g fill="${col}" stroke="${s.ink}" stroke-width="12" opacity=".93"><rect x="0" y="${620-80*scale}" width="${w}" height="${480+80*scale}"/><rect x="${1920-w}" y="${620-80*scale}" width="${w}" height="${480+80*scale}"/><rect x="0" y="${590-80*scale}" width="${w+55}" height="55"/><rect x="${1920-w-55}" y="${590-80*scale}" width="${w+55}" height="55"/></g>`}
function interiorEdges(s,scale){return `<path d="M0 1080V430 Q200 520 310 1080Z" fill="${mix(s.near,"#2b201c",.55)}"/><path d="M1920 1080V430 Q1720 520 1610 1080Z" fill="${mix(s.near,"#2b201c",.55)}"/><path d="M0 0H1920L1720 150H200Z" fill="${s.ink}" opacity=".28"/>`}
function rocks(rand,s,scale){let o="";for(const side of [0,1])for(let i=0;i<4;i++){const x=side?(1570+i*100):(40+i*100),w=(90+rand()*150)*scale,h=(70+rand()*160)*scale;o+=`<path d="M${x} 1080 l${w*.15} -${h*.65} l${w*.42} -${h*.35} l${w*.43} ${h*.45} l${w*.18} ${h*.55}Z" fill="${mix(s.near,"#746b61",.36)}" stroke="${s.ink}" stroke-width="10" opacity=".95"/>`}return o}
function citySilhouette(rand,y,color,palace){let o=`<g fill="${color}" opacity=".72">`;let x=0;while(x<1920){const w=100+rand()*170,h=(palace?120:70)+rand()*(palace?220:160);o+=`<rect x="${x}" y="${y-h}" width="${w}" height="${h+120}"/>`;if(palace&&rand()>.45)o+=`<path d="M${x+w*.2} ${y-h} L${x+w*.5} ${y-h-80-rand()*90} L${x+w*.8} ${y-h}Z"/>`;x+=w+15+rand()*50}return o+"</g>"}
function treeLine(rand,y,color,n){let o=`<g fill="${color}" opacity=".67">`;for(let i=0;i<n;i++){const x=(i+.25)*1920/n+rand()*80,h=90+rand()*180;o+=`<rect x="${x-9}" y="${y-h*.45}" width="18" height="${h*.75}"/><circle cx="${x}" cy="${y-h*.7}" r="${55+rand()*55}"/></g><g fill="${color}" opacity=".67">`}return o+"</g>"}
function mountainPath(rand,base,amp,n){let d=`M0 ${base}`;for(let i=0;i<n;i++){const x=(i+1)*1920/n,peak=base-amp*(.6+rand()*1.5);d+=` L${x-1920/n*.48} ${peak} L${x} ${base+rand()*35}`}return d+" V1080 H0Z"}
function download(text,name,type="image/svg+xml"){const blob=new Blob([text],{type});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
function manifest(){return JSON.stringify({story:displayStory(storyKey),act:last.act,chapter:last.chapter.title,brief:last.chapter.brief,scene:{id:last.beat.id,name:last.beat.name},canvas:{width:1920,height:1080},environment:last.settings.env,time:last.settings.tod,seed:last.settings.seed,background:`${last.base}_background.svg`,foreground:`${last.base}_foreground.svg`,layering:["background","optional middle-ground/characters","foreground"]},null,2)}
function colorField(id,label,value){return `<label class="color">${label}<input id="${id}" type="color" value="${value}"></label>`}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}
function displayStory(s){return s==="Eiljah"?"Elijah":s}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function xml(s){return escapeHtml(s)}
function hash(str){let h=2166136261>>>0;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mulberry32(a){return function(){let t=a+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
function mix(a,b,t){const ah=parseInt(a.slice(1),16),bh=parseInt(b.slice(1),16),ar=ah>>16,ag=ah>>8&255,ab=ah&255,br=bh>>16,bg=bh>>8&255,bb=bh&255;return"#"+((1<<24)+(Math.round(ar+(br-ar)*t)<<16)+(Math.round(ag+(bg-ag)*t)<<8)+Math.round(ab+(bb-ab)*t)).toString(16).slice(1)}

["chapter","beat","environment","time"].forEach(id=>$(id).addEventListener("change",()=>{if(id==="chapter"||id==="environment"){resetPalette()}render()}));
["horizon","detail"].forEach(id=>$(id).addEventListener("input",()=>{$(id+"Val").textContent=id==="horizon"?$(id).value+"%":$(id).value;render()}));
["seed","skyTop","skyBottom","far","near","accent","ink"].forEach(id=>$(id).addEventListener("input",render));
$("generate").onclick=render;
$("autoPalette").onclick=()=>{resetPalette();render()};
$("randomise").onclick=()=>{$("seed").value=1+Math.floor(Math.random()*9999);render()};
$("downloadBg").onclick=()=>download(last.bg,`${last.base}_background.svg`);
$("downloadFg").onclick=()=>download(last.fg,`${last.base}_foreground.svg`);
$("downloadManifest").onclick=()=>download(manifest(),`${last.base}_scene.json`,"application/json");
$("showBg").onchange=()=>$("bgLayer").style.display=$("showBg").checked?"":"none";
$("showFg").onchange=()=>$("fgLayer").style.display=$("showFg").checked?"":"none";
resetPalette(); render();
})();