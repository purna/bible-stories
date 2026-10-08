/**
 * add-scene-descriptions.mjs
 * Injects detailed biblical scene briefs as HTML comments into every
 * story's tools/scene_designer.html. Each brief covers the narrative
 * source, staging, characters, props, light and mood — the direction
 * a scene designer needs to frame the shot.
 *
 * Usage: node scripts/add-scene-descriptions.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/* Scene briefs keyed by story. Order must match data-scenes order.
 * Every brief: narrative source + staging direction. */
const BRIEFS = {

Abraham: {
  ref: 'Genesis 12–22',
  scenes: [
    ['The Call', 'Abram stands at the edge of Haran as a divine voice summons him toward an unseen land. Stage: a crowded Chaldean crossroads at dawn, clay houses and caravan tracks; Abram, Sarai and their goods mid-departure; long shadows, dust in the air, the road opening empty toward the horizon.'],
    ['Egypt and Return', 'Famine drives Abram into Egypt, where fear leads him to present Sarai as his sister — and Pharaoh\'s household pays the price until the truth surfaces. Stage: Nile-side palace gates, Egyptian banners and linen, gold light; Abram returning across the wilderness with restitution, contrite and poorer.'],
    ['Lot Chooses', 'Abram and Lot part ways as their herdsmen quarrel; Lot lifts his eyes to the well-watered Jordan plain and takes it. Stage: a wide hilltop overlooking the green Jordan valley and the distant soot of Sodom; Abram generous and calm, Lot eager; midday glare on the plain, shade on the heights.'],
    ['Rescue of Lot', 'Four eastern kings overrun Sodom and take Lot captive; Abram arms his trained servants and pursues by night, routing the invaders and refusing any spoil. Stage: torchlit desert march, dust and silhouettes, a swift dawn battle north of Damascus; Abram refusing the king of Sodom\'s offer on a moonlit plain.'],
    ['Covenant Stars', 'God promises Abram descendants as numberless as the stars and seals the covenant in fire. Stage: Abram alone outside his tent at midnight, wrapped in a cloak, staring into a sky crowded with stars; a smoking fire pot and blazing torch passing between cut animals; deep indigo, ember orange.'],
    ['Hagar in Wilderness', 'Sarai\'s Egyptian maid Hagar flees into the desert of Shur, where an angel of the Lord meets her at a spring and promises a son, Ishmael. Stage: a lone palm and hot spring in bleached sand; Hagar seated, startled, water jar at her feet; white heat, trembling mirage light.'],
    ['The Visitors', 'Three men appear by the oaks of Mamre; Abram runs to offer water, bread, curds and a dressed calf, and hears the promise of a son. Stage: a great tent door in noon light, Abram hastening with a bowl, Sarah listening from inside; three figures under a scorched oak; hospitality rendered in clay and linen.'],
    ['Sodom and Gomorrah', 'Abram bargains for the cities and Lot escapes as fire and brimstone fall; Lot\'s wife looks back and becomes a pillar of salt. Stage: a smoking plain at first light, zoar in a valley below, a faint salt-white silhouette on the ridge; Abram on a height watching the smoke rise like a furnace.'],
    ['Isaac Is Born', 'In old age Sarah bears Isaac — laughter — and the household feasts at his weaning. Stage: a shaded tent interior with woven hangings, a sleeping infant, Sarah\'s astonished joy; warm lamp light, the sound of celebration carried outside.'],
    ['Moriah', 'God tests Abraham: take Isaac to Moriah and offer him as a burnt offering; at the last moment a ram is caught in the thicket. Stage: a bare stone mountain at dawn, wood stacked on Isaac\'s back, the altar of unhewn stone, the angel\'s hand staying the knife; a ram in a nearby thorn bush, cold gold light.'],
  ],
},

Adam: {
  ref: 'Genesis 1–5',
  scenes: [
    ['Formed from Dust', 'The Lord forms the man from the dust of the ground and breathes life into his nostrils. Stage: a mound of dark soil under a first sunrise, the figure rising as breath enters; ochre earth, cool morning blue, the first ribs of light over a newborn world.'],
    ['The Garden', 'God plants Eden in the east and sets the man among every tree pleasant to the eye, with the river dividing into four heads. Stage: a lush riverside garden, pomegranate and fig, gold and green; the man walking among the trees, lion and lamb at the water\'s edge; soft diffused light through leaves.'],
    ['Together', 'The animals are brought to Adam for naming, and from his side God forms the woman. Stage: a shaded clearing at dusk, creatures gathering in pairs, the man reaching toward the new companion; rose-gold evening light, a sense of completion.'],
    ['The Boundary', 'The man and woman dwell freely in the garden, permitted every fruit except the tree of the knowledge of good and evil. Stage: the garden\'s heart, one broad tree set apart in a circle of light; the couple walking away from it; abundance everywhere, one still point of restraint.'],
    ['The Choice', 'The serpent, craftier than any beast, questions the command and the woman takes the fruit. Stage: the forbidden tree in shadow, a coiled serpent in the branches, the woman\'s hand reaching; dappled light turning colder, the first tension in an idyll.'],
    ['Hiding', 'They hear the Lord walking in the garden at the cool of the day and hide among the trees. Stage: tall grasses and fig leaves at evening, two figures crouched, guilty and bare; a searching shaft of light moving through the grove.'],
    ['East of Eden', 'The couple is sent from the garden; cherubim and a flaming sword guard the way to the tree of life. Stage: the garden gate at dawn behind them, a wall of flame and wings before it; the pair walking into a harsher, rockier land; silhouetted against a burning threshold.'],
    ['Cain and Abel', 'The brothers bring offerings — the Lord respects Abel\'s flock and not Cain\'s produce, and anger smoulders. Stage: two altars on a bare hill, one heaped with grain, one with lamb\'s wool and fat; smoke rising, the brothers apart; a cold wind over stubble fields.'],
    ['The Field', 'Cain rises against Abel in the field, and the blood cries from the ground. Stage: an isolated furrowed field under a heavy sky, a fallen figure and a stunned brother; crows gathering; the first murder in muted browns and grey light.'],
    ['A New Line', 'Cain goes out as a wanderer, and Adam and Eve bear Seth to replace Abel; the line of faith begins. Stage: a tent by a river at dusk, a newborn child, Eve\'s quiet gratitude; distant hills, the first stars, a lamp in the doorway.'],
  ],
},

Babel: {
  ref: 'Genesis 11:1–9',
  scenes: [
    ['The Brick', 'The people of Shinar make brick and burn it thoroughly, building a city of fired clay on the plain. Stage: a brickfield at noon, kilns smoking, workers mixing straw and clay, moulds lining the ground; ochre dust, kiln orange, the first city rising.'],
    ['The Tower', 'They say: come, let us build a tower with its top in the heavens. Stage: a great ziggurat rising from the plain, scaffolding and ramps, workers hauling brick; the tower catching the evening sun; ambition in mortar and clay.'],
    ['The Summit', 'The tower climbs toward the heavens, and the city spreads around its base. Stage: the summit scaffolding at dusk, the city below in lamps, the sky darkening overhead; a silhouette of the tower against the last light.'],
    ['The Confusion', 'The Lord confuses their language, and they cannot understand one another. Stage: the building site at midday, workers gesturing in sudden misunderstanding, bricks tumbling, the work stopping; a babble of sound frozen in the frame; bright, bewildered light.'],
    ['The Scattering', 'The Lord scatters them over the face of all the earth, and the city is abandoned. Stage: the plain at dawn, families packing and parting every way, the tower silent behind them; dust rising on empty roads; the city left unfinished.'],
  ],
},

Daniel: {
  ref: 'Daniel 1–12',
  scenes: [
    ['Exile and the Table', 'Daniel and his friends, carried to Babylon, refuse the king\'s food and ask for ten days of vegetables and water. Stage: a Babylonian court cafeteria in torchlight, trays of rich food beside a humble plate of pulses; four resolute youths; jewelled walls, shadowed arcades.'],
    ['The Great Statue', 'Nebuchadnezzar dreams of a colossal statue — gold head, silver chest, bronze belly, iron legs, feet of clay — shattered by a stone that becomes a mountain. Stage: the dream image towering in a night sky over Babylon, metals graded top to bottom, a stone striking the feet; cold moonlight and a blast of light as it falls.'],
    ['The Furnace', 'Shadrach, Meshach and Abednego are bound and cast into the blazing furnace, where a fourth figure like a son of the gods walks with them. Stage: a roaring furnace mouth on a Babylonian plain, soldiers flinging bound youths into white heat; inside, four figures unharmed; furnace orange, king and court watching from shaded terraces.'],
    ['The Proud King', 'Nebuchadnezzar is driven from human society, eating grass like an ox until his reason returns. Stage: a royal garden gone wild, the king grown long-haired and wild-eyed among stalks and dew; gold and madness fading to humble green; a shaft of light as his sanity is restored.'],
    ['Writing on the Wall', 'At Belshazzar\'s feast a hand writes on the plaster: mene, mene, tekel, upharsin — and Daniel reads the doom. Stage: a thousand-guest banquet hall, gold vessels looted from Jerusalem, candlelight and a ghostly disembodied hand tracing glowing letters on the wall; terror among the revellers.'],
    ['The Lions\' Den', 'Daniel is thrown into the lions\' den for praying to his God; the lions are shut with him and an angel shuts their mouths. Stage: a stone pit under a pale dawn, lions pacing around an unharmed figure in prayer; the king hurrying at first light; cold stone, warm hope.'],
    ['Four Beasts', 'Daniel sees the sea churned by four beasts — lion, bear, leopard, and a fourth with iron teeth and ten horns — before the Ancient of Days takes his throne. Stage: a stormy apocalyptic sea, beasts rising from foam, thrones of fire set in a court of millions; terrifying grandeur in ash and gold.'],
    ['The Ram and Goat', 'The ram with two horns and the swift goat with one horn clash; the goat\'s horn breaks into four, and a little horn grows proud. Stage: a riverside plain at dusk, a two-horned ram charging, a goat hurtling from the west with a great horn; the horn splintering into four shards; purple and dusk light.'],
    ['Seventy Weeks', 'The angel Gabriel explains seventy weeks decreed for the people and the holy city, until the Anointed One is cut off. Stage: an angel standing on a riverbank at twilight, scroll and measuring line in hand, the distant city on its hill; patient gold light, a sense of long promise.'],
    ['Final Vision', 'Daniel sees the end: the Ancient of Days, the Son of Man given everlasting dominion, and the book of destiny. Stage: a river of fire and a heavenly court, a figure like a son of man approaching on the clouds; sealed scrolls opening; blinding white and deep ultramarine.'],
  ],
},

David: {
  ref: '1 Samuel 16 – 1 Kings 2',
  scenes: [
    ['Anointed', 'Samuel anoints the youngest son of Jesse, a shepherd boy of Bethlehem, while his elder brothers watch in surprise. Stage: a Bethlehem hillside at golden hour, sheep around, oil poured on a ruddy boy\'s head; a horn of oil, distant town rooftops; warm ochre light.'],
    ['Goliath', 'The Philistine giant struts between the armies; David refuses Saul\'s armour and steps out with staff, sling and five stones. Stage: the Valley of Elah, two armies on facing ridges, a nine-foot figure in bronze scale, a boy walking steadily toward him; dry heat, dust, a streambed glittering.'],
    ['Saul\'s Court', 'David plays the lyre for Saul, and the king\'s torment eases while his jealousy stirs. Stage: a dim throne room at night, a boy with a harp, the king looming on a chair, a spear at his belt; firelight flickering on stone; tension beneath the melody.'],
    ['Covenant Friends', 'Jonathan and David make a covenant, exchanging tokens — the robe, tunic, sword, bow and belt. Stage: a field outside the camp at dawn, two young men kneeling, a prince\'s robe passing to the shepherd; parted friends on a rising road; pale morning gold.'],
    ['The Wilderness', 'David hides in the wilderness of En Gedi, and when Saul comes to relieve himself in a cave, David cuts off the hem of his robe and refuses to strike. Stage: a sun-baked cliff with dark cave mouths, sheep, a hidden figure watching the king pass; craggy grey-gold rock, shimmering heat.'],
    ['Abigail', 'Abigail rides out with provisions to meet David before Nabal\'s foolishness becomes bloodshed, and she speaks peace. Stage: a donkey train descending a dry ravine at noon, a wise woman carrying loaves and wine, David\'s band armed on the ridge; terracotta, dust, and a tense standoff turning to grace.'],
    ['The Throne', 'David is anointed king over all Israel at Hebron and takes Jerusalem, the city of Jebus, for his capital. Stage: a water shaft climbing to the city gate, warriors ascending, the king on a throne of stone on the citadel; olive hills, bronze light, banners.'],
    ['Bathsheba and Uriah', 'From his roof David sees Bathsheba bathing; the deed that follows brings Uriah to the front line and judgment on the house. Stage: a royal rooftop at evening, a distant figure at her bath below, a sealed letter passing between hands; purple dusk, a heavy stillness.'],
    ['Nathan\'s Parable', 'The prophet Nathan tells the rich man with many sheep who takes the poor man\'s one ewe lamb — and David condemns himself. Stage: a candlelit chamber, the prophet with a staff, the king listening; two flocks in the background, one rich, one poor; a single lamp and a long silence.'],
    ['Absalom', 'Absalom\'s long hair catches in the branches of a great tree as his rebellion breaks in the forest of Ephraim; Joab strikes him down. Stage: a dense oak wood in rain, a royal mule at bay, tangled hair in the branches, a spear flash; cold green light, the king waiting on the road.'],
    ['The Census', 'David counts the people and repents; the prophet Gad offers three choices, and a plague stalks Israel until the threshing floor of Araunah. Stage: a nation of tents under a wasting sky, a king on his rooftop in grief, an altar rising on a purchased threshing floor; grey light breaking warm.'],
    ['Solomon', 'David charges Solomon to build the house of the Lord and walks in wisdom; the old king dies and the son reigns. Stage: Jerusalem\'s hill with a temple site marked out, father and son on a terrace, the kingdom passing; cedar light, a quiet benediction.'],
  ],
},

Deborah: {
  ref: 'Judges 4–5',
  scenes: [
    ['Under the Palm', 'Deborah, a prophetess and judge, sits beneath the Palm of Deborah between Ramah and Bethel, hearing the disputes of Israel. Stage: a broad palm casting dappled shade over limestone benches, Israelites climbing the hill country to seek judgment; warm late-morning light, olive-green and distant blue hills.'],
    ['The Summons', 'Deborah sends for Barak son of Abinoam and charges him to muster ten thousand at Mount Tabor against Sisera\'s chariot army. Stage: a messenger crossing terraced fields, the judge\'s voice carrying, Barak weighing the risk; a woman\'s resolve against a soldier\'s doubt; midday clarity.'],
    ['Gather at Tabor', 'The tribes rally on Tabor while Sisera marshals nine hundred iron chariots from Harosheth. Stage: a high hilltop mustering ground, spears glinting, campfires on the plain below; the enemy\'s chariot tracks darkening the valley; dawn assembly, mist on the heights.'],
    ['The Storm', 'The Lord routs Sisera with a storm; the Kishon floods and the chariot wheels sink. Stage: a black sky over the plain, lightning, rain sheets, a river in spate swallowing iron wheels; Israelites pouring down the slope; thunderheads and flash-lit water.'],
    ['Sisera Flees', 'Sisera abandons his chariot and flees on foot toward the tent of Jael, wife of Heber the Kenite. Stage: a lone figure staggering across a sodden field, mud and armour, a tent by the great tree in the distance; fading storm light, a lone tent lamp.'],
    ['Jael\'s Choice', 'Jael welcomes Sisera with milk and a blanket, and when he sleeps she drives a tent peg through his temple. Stage: the dim interior of a goat-hair tent, a bowl of milk, a figure asleep, the hammer and peg in the firelight; the quietest, darkest stroke of the war.'],
    ['The Song', 'Deborah and Barak sing the victory song — the stars fought from heaven, the river swept the enemy away. Stage: two figures on a rise above the plain, the army camped below in a ring of fires; the song rising over still water; the first clean light after the storm.'],
  ],
},

Eiljah: {
  ref: '1 Kings 17–19, 21; 2 Kings 2',
  scenes: [
    ['The Drought', 'Elijah the Tishbite proclaims a drought and is sent to the brook Cherith, where ravens bring him bread and meat. Stage: a cracked brook bed in a limestone wadi, a lone prophet in patched cloth, ravens landing with crusts; dust, heat shimmer, a dry riverbed.'],
    ['The Widow\'s Jar', 'At Zarephath a widow shares her last flour and oil, and Elijah keeps her jar and bowl from emptying through the drought. Stage: a tiny Phoenician kitchen, a handful of flour, a cruse of oil, a boy gathering sticks; a miracle of measure in a windowless room, one lamp.'],
    ['The Child Restored', 'The widow\'s son falls ill and dies; Elijah carries him upstairs, stretches himself on the boy three times, and prays until life returns. Stage: a rooftop chamber at night, the prophet on the bed, the boy still, then stirring; a single oil lamp, deep shadow, held breath.'],
    ['Mount Carmel', 'Elijah repairs the altar with twelve stones, drenches it with water, and calls down fire while the prophets of Baal cry out in vain. Stage: a ruined altar on a bare mountain headland, twelve stones, water running, a pillar of fire at dusk; the sea below, a crowd of prophets in panic.'],
    ['The Rain Returns', 'Elijah prays seven times, a cloud no bigger than a man\'s hand rises over the sea, and he runs before Ahab\'s chariot to Jezreel. Stage: a headland at sunset, a small cloud, the sky darkening, the prophet running with his cloak flying; rain sweeping in, black clouds and gold rifts.'],
    ['Under the Broom Tree', 'Fleeing Jezebel, Elijah collapses under a broom tree and asks to die; an angel wakes him with bread and water. Stage: a scorched wilderness, a lone broom bush, a sleeping figure, a shining messenger kneeling beside him; harsh noon light turning gentle.'],
    ['The Quiet Voice', 'At Horeb the Lord passes in wind, earthquake and fire — and speaks in a sound of sheer silence; Elijah wraps his face in his mantle. Stage: a cave mouth on the mountain, the prophet listening in the dark, the wind outside bending the scrub; an enormous stillness in the frame.'],
    ['Naboth\'s Vineyard', 'Ahab and Jezebel seize Naboth\'s ancestral vineyard by false witness, and Elijah confronts the king in the field. Stage: a vineyard on a terraced slope at harvest, a dead man\'s land being measured, the prophet appearing at the gate; ripe purple grapes, cold shadow.'],
    ['Chariots of Fire', 'Elijah and Elisha cross the Jordan, and a chariot of fire with horses of fire separates them as Elijah goes up in a whirlwind. Stage: the river at dawn, a flaming chariot in a vortex, the mantle falling to the younger prophet; fire reflected on the water, the storm of glory.'],
  ],
},

Elisha: {
  ref: '1 Kings 19; 2 Kings 2–7',
  scenes: [
    ['The Mantle', 'Elijah finds Elisha ploughing with twelve yoke of oxen; Elisha slaughters his oxen and follows, leaving the plough behind. Stage: a wide field at dawn, twelve oxen, a ploughman pausing mid-furrow; the old prophet\'s mantle cast over him; golden stubble and long shadows.'],
    ['The Jordan', 'Elijah strikes the water with his mantle and the two cross on dry ground; Elisha inherits a double portion. Stage: the Jordan in flood, the river parting, two figures walking on the riverbed; churned water walls; early light.'],
    ['The Widow\'s Oil', 'A widow of the sons of the prophets pours her little oil into borrowed jars until the oil fills every vessel and saves her sons from slavery. Stage: a poor cottage interior, jars lined up row on row, the oil streaming from one small flask; warm interior light, the widow\'s astonished hands.'],
    ['The Shunammite Room', 'A great woman of Shunhem builds a chamber for Elisha with a bed, table, stool and lampstand. Stage: a rooftop guest chamber, whitewashed walls, a simple bed and lamp, the woman looking up as the prophet arrives; noon light through a lattice.'],
    ['The Child', 'The Shunammite\'s son collapses in the field; she carries him to the room and lays him on Elisha\'s bed, and the prophet restores him. Stage: a field at midday, a child limp in his mother\'s arms, then the room with the boy breathing again; urgency, then quiet light.'],
    ['Naaman', 'Naaman, commander of Aram, comes with horses and chariots to be healed of leprosy; Elisha sends him to wash seven times in the Jordan. Stage: a riverbank with a retinue of chariots and horsemen, the proud commander wading to his waist, seven immersions; water gleaming, pride yielding.'],
    ['The Floating Axe', 'A borrowed axe head sinks in the Jordan; Elisha cuts a stick, throws it in, and the iron swims. Stage: a river bend at dawn, an axe glinting on the bed, a stick tossed from the bank, the iron rising; cool water, a small miracle.'],
    ['The Unseen Army', 'The king of Aram surrounds Dothan; Elisha prays and the servant sees a mountain full of horses and chariots of fire. Stage: a dawn plain, a city under siege, a servant\'s eyes opening to an invisible army blazing on the hills; firelight on the clouds.'],
    ['A Blind Feast', 'Elisha strikes the Aramean raiders with blindness, leads them into Samaria, and opens their eyes at a feast before sending them home. Stage: a great hall at night, lanterns, blindfolded warriors led to a table, then seeing in amazement; warm feast light, an astonishing mercy.'],
  ],
},

Enoch: {
  ref: 'Genesis 5:21–24',
  scenes: [
    ['A Family Record', 'The generations from Adam are recorded, and Jared fathers Enoch, who walks in a line of long-lived fathers and sons. Stage: a family register in a tent at dusk, names spoken aloud, a child held up; lamplight on a written scroll, the long line of ancestors behind.'],
    ['The First Walk', 'Enoch begins a daily walk — a habit of quiet steps that makes room for the presence of God. Stage: a dawn road through early fields, a lone figure walking, the city behind; cool morning light, birds lifting.'],
    ['A Son Named Methuselah', 'Enoch fathers Methuselah and a home is prepared for the child. Stage: a small house at sunrise, a newborn in swaddling cloth, the father at the door; a lamp lit in the window, a warm quiet room.'],
    ['Years of Faithfulness', 'Three hundred years of small, repeated acts — teaching, tending, giving — with no fanfare. Stage: the changing seasons of a single street: sowing, harvest, rain, repair; the same figure walking the road; light shifting from spring gold to autumn amber.'],
    ['A Warning', 'Enoch prophesies: the Lord comes with ten thousands of his holy ones to judge all. Stage: a crowded market square at midday, a lone voice rising, the crowd turning; the sky darkening at the edges; a still point of dread.'],
    ['Walking with God', 'The record repeats: Enoch walked with God — a companionship of daily faithfulness. Stage: a road at dusk, two figures walking side by side, one visible, one as light; the last light of day on a quiet path.'],
    ['Taken', 'Enoch is not, for God takes him — no grave, no death, only the road that ends in light. Stage: a hilltop road at sunrise, the figure fading into a shining mist; the city below stirring awake; a doorway of light at the horizon.'],
  ],
},

Esther: {
  ref: 'Esther 1–9',
  scenes: [
    ['The Banquet', 'King Ahasuerus feasts in Susa for a hundred and eighty days, and Queen Vashti refuses his summons. Stage: a Persian palace hall with blue and gold glazed bricks, a thousand couches, wine; the queen withdrawing from the far doorway; torchlight and marble.'],
    ['A New Queen', 'Esther, a Jewish orphan in the care of Mordecai, is taken to the king and wins the crown. Stage: a harem court at dawn, young women in myrrh and perfumes, Esther stepping forward; a crown lifted; rose and gold light.'],
    ['The Gate Plot', 'Mordecai overhears two eunuchs plotting against the king and saves him; the deed is written in the royal record. Stage: the king\'s gate at midday, a figure in the shadow of a column, scribes at work; a whispered warning; a narrow, tense street.'],
    ['Haman\'s Decree', 'Haman the Agagite persuades the king to destroy the Jews; the decree rides out to every province. Stage: a great hall, Haman in high honour, the sealed parchment on a table; couriers galloping past a map of the empire; cold shadow and a rising drum of hoofbeats.'],
    ['For Such a Time', 'Mordecai\'s plea comes to Esther: relief will come from another quarter — and who knows but you have come to the kingdom for such a time? Stage: a courtyard with a purple canopy, Mordecai in sackcloth beyond the gate, Esther in the doorway weighing her life; midday stillness.'],
    ['The First Banquet', 'Esther invites the king and Haman to a banquet and asks them to return the next night — her request still unspoken. Stage: a banquet table in a shaded colonnade, the king with his ring, Haman swollen with pride, the queen veiled and composed; evening lamplight.'],
    ['The Sleepless Night', 'The king cannot sleep, and the record of Mordecai\'s saved life is read aloud — the night turns. Stage: a sleepless king in a dim throne room, a scribe reading the chronicle; a rooster crowing in the dark; a single lamp turning the room.'],
    ['The Second Banquet', 'Esther names her people and her enemy; Haman pleads on the couch and is hanged on the gallows he built for Mordecai. Stage: the banquet hall again, the queen risen, the king\'s face in shadow, Haman dragged from the couch; a garden visible through the columns, a gallows in the dark beyond.'],
    ['A New Decree', 'The king gives Haman\'s house to Esther and Mordecai, and a new decree lets the Jews defend themselves. Stage: the royal gate at dawn, a new seal on a fresh scroll, riders lining up; light breaking over the city; a relieved crowd at the gates.'],
    ['Purim', 'The Jews feast and send gifts, and the days of Purim are fixed — a feast of reversal. Stage: a city street in festival light, tables of food, children in costume, a scroll unrolled; warm lanterns, the sound of celebration.'],
  ],
},

Gideon: {
  ref: 'Judges 6–8',
  scenes: [
    ['The Winepress', 'Gideon threshes wheat in a winepress to hide it from Midian, and the angel of the Lord appears under the oak at Ophrah. Stage: a hidden winepress in a vineyard at dawn, a man beating wheat, a figure in shining raiment beneath the oak; dust, shadow, and the first gleam of the divine messenger.'],
    ['The Sign', 'Gideon prepares a young goat and unleavened cakes; fire consumes the offering on the rock and the angel vanishes. Stage: a rock at the oak\'s shade, a meat offering on a stone, a flame rising from it; the terrified Gideon; the morning lit by one sudden fire.'],
    ['The Fleece', 'Gideon lays a wool fleece on the threshing floor: dew on the fleece alone, then dry fleece on wet ground. Stage: a threshing floor at dawn, a single fleece glistening with dew, the ground around it parched; silence, patience, and a second night reversed.'],
    ['The Army Reduced', 'Thirty-two thousand men drink at the spring; those who lap like dogs are three hundred, and God reduces the army to them. Stage: a stream at a desert spring, an army kneeling, the water glinting; three hundred hands cupping the water; morning light on a thinning host.'],
    ['The Dream', 'Gideon creeps to the Midianite camp with Purah and hears a dream: a barley cake rolls into the camp and flattens a tent. Stage: a vast night camp of countless fires, the men moving between tents, a dreamer and his companion; starlight and firelight, a murmuring army.'],
    ['The Battle', 'The three hundred shatter jars, light torches, blow trumpets, and shout for the Lord and for Gideon; the host turns on itself. Stage: the midnight camp erupting in flame and trumpet, torchlight sweeping the tents, panic in the dark; the valley blazing like a battlefield of light.'],
    ['The Victory', 'The Midianite kings are pursued to Karkor and captured, and Israel is freed for forty years; Gideon refuses the crown. Stage: a desert ford at dawn, the kings in purple caught by the river, the exhausted army triumphant; a man refusing a crown; long light over a quiet land.'],
  ],
},

Hannah: {
  ref: '1 Samuel 1–2',
  scenes: [
    ['The Journey to Shiloh', 'Elkanah\'s household travels the annual road to worship at Shiloh, where the ark and Eli\'s sons keep the tabernacle. Stage: a hill country road at dawn, a family with donkeys and provisions, the tabernacle rising on the horizon; morning light, the sound of a travelling household.'],
    ['At the Table', 'At the feast Elkanah gives Hannah a double portion, while Peninnah provokes her for her barrenness. Stage: a long table in the temple court, food and drink, two wives opposite each other; a double portion of meat, a heavy silence; firelight and grief.'],
    ['Silent Prayer', 'Hannah prays without a sound, lips moving only; the vow: a son given back to the Lord. Stage: the tabernacle interior at twilight, a woman kneeling by a post, a lamp between the holy place and the door; the first candle in the dark; no sound in the frame.'],
    ['Misunderstood', 'Eli watches her and thinks she is drunk; she answers, \'No, my lord, I am a woman troubled in spirit.\' Stage: the old priest at the entrance, hand on the doorpost, the woman defending her prayer; a narrow doorway, lamplight on two faces.'],
    ['Remembered', 'The family returns home, and Hannah\'s prayer is remembered; a child is conceived. Stage: a house in the hill country at sunrise, a doorway, a hopeful morning; the road behind and the road ahead; a quiet room being prepared.'],
    ['The Little Robe', 'Each year Hannah weaves a little robe and brings it to Samuel at Shiloh as he grows in the Lord\'s presence. Stage: a loom at work, a tiny linen robe, the boy in a linen ephod at the tabernacle door; a mother\'s hands, a child\'s growing frame; warm, domestic light.'],
    ['Given Back', 'Hannah and Elkanah bring the weaned child to the temple and lend him to the Lord for life. Stage: the tabernacle courtyard at midday, the small boy with his mother, Eli receiving him; a child walking into the holy shadow; a vow made visible.'],
    ['Hannah\'s Song', 'Hannah sings: the Lord makes poor and makes rich, brings low and lifts up; the Lord\'s anointed will be exalted. Stage: a woman standing in the temple court, arms lifted, the ark behind her; light on the courtyard stones; a song rising with the morning.'],
  ],
},

Isaiah: {
  ref: 'Isaiah 1–12, 36–40, 53, 65–66',
  scenes: [
    ['A City in Need', 'The Lord indicts a city full of sacrifices but no justice; the hands are full of blood. Stage: a temple courtyard with a heap of offerings, a city behind its wall, a widow and an orphan in the street; a bright altar, a dark street; the same sun on both.'],
    ['The Holy Throne', 'In the year King Uzziah died, Isaiah sees the Lord on a throne, high and lifted up, with seraphim crying holy, holy, holy. Stage: a temple in a vision, the throne filling the hall, a train of fire, six-winged seraphim, an altar coal touching the prophet\'s lips; blinding, trembling light.'],
    ['The Vineyard Song', 'The Lord sings of a vineyard planted on a fertile hill that yielded wild grapes instead of justice. Stage: a terraced vineyard at harvest, a stone watchtower, a winepress; grapes rotting on the vine; a golden hillside with a sad song over it.'],
    ['Immanuel Sign', 'To faithless Ahaz the prophet gives a sign: the young woman is with child and shall call his name Immanuel — God with us. Stage: a king on a throne at the end of a conduit, a prophet refusing a sign, a child on the road beyond; winter light, the first promise of a birth.'],
    ['The Assyrian Shadow', 'The Assyrian advances like a river, and the surviving stump of Jesse stands as a banner for the peoples. Stage: a great army crossing a plain, a felled tree with a living shoot, a banner raised on a hill; a dark flood of bronze and a single green branch.'],
    ['Hezekiah\'s Crisis', 'Sennacherib\'s letters threaten Jerusalem; Hezekiah spreads the letter before the Lord, and the angel strikes the camp. Stage: a royal chamber at night, a letter on a table, the king in prayer; dawn light through the windows, a camp of silent tents beyond the walls.'],
    ['Comfort My People', 'A voice cries: prepare the way of the Lord in the wilderness, every valley shall be exalted. Stage: a desert road being built at dawn, a voice in the waste land, the glory of the Lord to be revealed; a smooth highway rising over the sand.'],
    ['The Servant', 'The servant is despised and pierced for our transgressions, and by his wounds we are healed. Stage: a figure on a lonely road at dusk, shadowed by a crowd, wounds in his hands; a lantern carried in the dark; the quietest, darkest scene of the book.'],
    ['New Creation', 'The Lord promises new heavens and a new earth, where the wolf and lamb feed together and the city needs no sun. Stage: a rebuilt city on a hill, a lion and a lamb at its gate, children in the streets; warm, golden, endless light.'],
  ],
},

Jacob: {
  ref: 'Genesis 25–37',
  scenes: [
    ['The Birthright', 'Esau comes in exhausted from the field and sells his birthright for a single bowl of lentil stew. Stage: a camp kitchen at midday, a hunter gasping at the door, a pot of red stew steaming, two brothers bargaining; a bright, ordinary moment with a heavy price.'],
    ['The Stolen Blessing', 'Rebekah dresses Jacob in Esau\'s clothes and goatskins; the blind Isaac feels the hands and blesses the wrong son. Stage: a tent at night, an old blind patriarch reaching out, a trembling younger son, the smell of the field in the garments; a lamp\'s last light, the blessing spoken.'],
    ['Bethel', 'Jacob flees and sleeps with a stone for a pillow, dreaming of a ladder to heaven with angels ascending and descending. Stage: a night under the open sky, a lone figure on the ground, a great stair of light touching the sky; stars, and the Lord standing above it.'],
    ['Rachel at the Well', 'At Haran Jacob rolls the stone from the well and waters Laban\'s flock for Rachel, and kisses her and weeps. Stage: a well in a highland pasture at noon, a great stone rolled aside, a shepherdess watering her sheep; a sudden meeting, water and tears.'],
    ['Laban\'s Bargain', 'Laban deceives Jacob with Leah\'s veiled marriage, and Jacob serves seven more years for Rachel; the wages change like the weather. Stage: a wedding tent at night with a veil and a sister\'s face, a contract of years, a flock passing between the brothers-in-law; a lamp, a bargain, a long game.'],
    ['The Flocks', 'Jacob breeds the flocks with peeled branches in the watering troughs, and the speckled and spotted increase. Stage: a river crossing with troughs, striped rods standing in the water, a great flock of goats, some dark, some speckled; morning light on a patient man\'s wealth.'],
    ['Leaving Haran', 'Jacob flees Laban by night; Rachel hides the teraphim in a saddle and sits on them; the two camps meet on the hill of Gilead. Stage: a night crossing of a river, a caravan of tents and children, a woman hiding an idol; dawn overtaking a pursuit on a stony hill.'],
    ['The Night Wrestling', 'Jacob wrestles a man by the Jabbok until daybreak, and his hip is touched; he is named Israel, for he strove with God. Stage: a riverbank in the dark before dawn, two figures locked, a hip given way, a name changed at sunrise; the first red light on the water.'],
    ['Meeting Esau', 'Jacob sends gifts ahead and bows seven times; Esau runs to meet him, and they weep. Stage: a plain at dawn, a long line of gifts, a brother running with four hundred men; fear turning to a kiss; the sun climbing over a tent camp.'],
    ['Joseph\'s Coats', 'Joseph is seventeen and his father loves him; the coat of many colours and the dreams of sheaves and stars set the brothers against him. Stage: a sunlit field of wheat, a boy in a long coat among his brothers, a sheaf bowing in a dream; gold stubble, a cold wind of envy.'],
  ],
},

Jeremiah: {
  ref: 'Jeremiah 1–39, 31–32',
  scenes: [
    ['The Call', 'The Lord touches the prophet\'s mouth and says: I have put my words in your mouth, to pluck up and to break down, to build and to plant. Stage: a young man at a village gate at dawn, a hand of light at his mouth, a branch of an almond tree nearby; a thin morning, a heavy commission.'],
    ['The Almond Branch', 'The Lord shows a rod of an almond — the first to wake — to show that He watches over His word to perform it. Stage: a branch with pink blossoms in winter light, a hand holding it out, the prophet\'s eyes; the first blossom of the year against a cold sky.'],
    ['At the Temple Gate', 'The Lord tells Jeremiah to stand at the temple gate and cry: trust not in the temple itself; do justice, hear the widow\'s plea. Stage: a temple gate at midday, a lone voice in a busy court, the poor and the blind at the steps; the stone of the temple and the people at its feet.'],
    ['The Scroll', 'Baruch writes Jeremiah\'s words on a scroll; the king cuts it with a knife and burns it, column by column, and it is written again. Stage: a chamber by the fire, a scribe\'s reed and ink, a scroll being read aloud, a king\'s knife shearing it, the fire rising; the book being born again.'],
    ['The Potter', 'The Lord sets the prophet by the potter\'s house: as clay in the potter\'s hand, so are you; the vessel is marred and remade. Stage: a potter\'s wheel turning in a courtyard, wet clay on the wheel, a vessel failing and returning to a lump; earthy colours, patient hands.'],
    ['The Yoke', 'The Lord tells Jeremiah to make a yoke of leather and wood and wear it; Hananiah breaks the yoke and the prophet says the Lord will make yokes of iron. Stage: a market square at noon, a wooden yoke on a prophet\'s shoulders, a false prophet snapping it, an iron yoke in the shadow; a hot day, a cold word.'],
    ['The Cistern', 'The officials cast Jeremiah into the cistern of Malchiah, in the court of the guard, and Ebed-melech the Cushite lifts him out with rags and ropes. Stage: a dark cistern with mud and water at the bottom, ropes and old clothes lowered from above; a rescuer\'s hand in the dark; the king\'s court in the light above.'],
    ['Buy the Field', 'In the besieged city Jeremiah buys a field at Anathoth and seals the deed, for the Lord promises houses and fields will again be bought. Stage: a walled city under siege at dusk, a deed being sealed and buried in an earthen jar, a field beyond the walls; a candle in a siege lamp.'],
    ['The Fall of Jerusalem', 'The city falls after a long siege; the king\'s sons are slain, the temple is burned, and the people are taken into exile. Stage: smoke over the city, a wall breached, a king fleeing by night, a fire on the temple hill; the last light of a long night.'],
    ['Lament and Hope', 'The Lord promises a new covenant written on the heart, and a voice in Ramah is comforted: your work shall be rewarded. Stage: a woman weeping by a tent at dawn, the prophet pointing to a returning exodus, a green shoot in a ruined field; the first light of consolation.'],
  ],
},

Job: {
  ref: 'Job 1–42',
  scenes: [
    ['A Blameless Life', 'Job is blameless and upright, with seven sons, three daughters, and great flocks; he offers burnt offerings for his children. Stage: a rich household at sunrise in the land of Uz, sheep and camels and tents, a father praying for his children; a golden, ordered world.'],
    ['The Accuser', 'In the heavenly court the Lord asks Satan about Job; the adversary asks for permission to test him, and the hand of loss begins. Stage: a cosmic court, a throne of light and a figure in shadow, the earth in miniature below; a single day that will undo everything.'],
    ['Loss upon Loss', 'The messengers come one after another: the oxen, the donkeys, the fire, the wind — and the children. Stage: a ruined threshold at dusk, one messenger after another arriving, a great house going silent; a single figure on the ground, the sky empty of birds.'],
    ['Seven Days', 'Job\'s three friends sit with him seven days and nights, and no one speaks, for his grief is very great. Stage: a heap of ashes outside a city, four figures seated in silence, the sun crossing the sky above them; a week measured in light and shadow.'],
    ['Job Speaks', 'Job opens his mouth and curses the day of his birth, and calls for the grave to come. Stage: a man on a dunghill at midnight, his body scarred, the first words of a long lament; the stars wheeling overhead; a voice rising into the dark.'],
    ['The Friends', 'Eliphaz, Bildad and Zophar argue: the righteous prosper, the wicked fall — therefore repent, Job. Stage: a desert camp at dawn, three men in flowing robes, a fourth in ashes, the argument turning from comfort to accusation; wind, dust, long shadows.'],
    ['Elihu', 'The young Elihu burns with anger at Job\'s self-justification and the friends\' failure; he speaks of God speaking in dreams and in pain. Stage: a circle of listeners at noon, a young man rising, his cloak bright with indignation; the older men stilled; a still, hot air.'],
    ['Out of the Whirlwind', 'The Lord answers Job out of the whirlwind: where were you when I laid the earth\'s foundation? Stage: a storm on the horizon, a whirlwind forming, a figure in the dark at its centre; the heavens opening, the earth trembling; a question no one can answer.'],
    ['Job Responds', 'Job answers the Lord: I had heard of you by the hearing of the ear, but now my eye sees you; therefore I repent in dust and ashes. Stage: a man kneeling as the storm breaks, his hand over his mouth, the whirlwind withdrawing; the first rain in years; a quiet, broken peace.'],
    ['Restoration', 'The Lord restores Job\'s fortunes twofold: flocks, children, daughters of beauty, and a long life. Stage: a household again, tents full of children, camels in the shade, a new generation at the door; evening light and music; a table set for a feast.'],
  ],
},

Jonah: {
  ref: 'Jonah 1–4',
  scenes: [
    ['Run to the Sea', 'Jonah flees to Joppa and boards a ship bound for Tarshish, paying the fare to go the other way from God. Stage: a busy port at dawn, a man hurrying down the gangplank with a bag, the sea opening wide, a ship\'s prow pointed west; gulls and a fast heartbeat.'],
    ['The Storm', 'The Lord sends a great wind, the ship threatens to break, and the sailors cast lots and find Jonah. Stage: a ship at night in a storm, waves like mountains, the crew desperate, a sleeping man below deck; lightning on the mast, a frightened circle of seamen.'],
    ['Into the Deep', 'The sailors hurl Jonah into the sea and the sea grows calm; a great fish swallows him. Stage: a black sea at midnight, a figure sinking into the deep, a great shadow rising beneath him; the water calming behind the boat; the last light at the surface.'],
    ['Prayer Below', 'Jonah prays from the fish\'s belly, from the belly of Sheol, and his prayer reaches the temple. Stage: a dark, red-lit interior, a man kneeling in a vast shadow, prayer rising like smoke; the walls of the deep around him; a single shaft of light from far above.'],
    ['Second Call', 'The word of the Lord comes a second time: arise, go to Nineveh, the great city. Stage: a shoreline at dawn, a man walking out of the sea, a long road to the east; dry land, a new commission, the city a speck on the horizon.'],
    ['The Warning', 'Jonah enters Nineveh a day\'s journey and cries: yet forty days, and Nineveh shall be overthrown. Stage: a vast city of walls and gardens at noon, a lone foreign voice echoing at the gate; a crowd gathering, a king on a distant throne; a single sentence over a whole empire.'],
    ['Nineveh Repents', 'The people believe, from the greatest to the least, and the king rises from his throne and sits in ashes. Stage: a city covered in sackcloth, a throne turned to ashes, beasts and people fasting, a king in mourning; the whole city holding its breath.'],
    ['The Plant', 'God makes a plant to shade Jonah, and Jonah is glad; then a worm attacks it, and the sun beats on his head. Stage: a booth on a hill above the city, a gourd growing in a single night, a man sheltering, a worm in the morning; a hot day, a lost shade.'],
    ['The Question', 'God asks Jonah: should not I have compassion on Nineveh, that great city with more than a hundred and twenty thousand? Stage: the booth at evening, a man and a question, a city in the distance full of lamps; the last light of the day over a city that did not know its right hand from its left.'],
  ],
},

Joseph: {
  ref: 'Genesis 37–47',
  scenes: [
    ['The Coloured Robe', 'Jacob loves Joseph best, makes him a coat of many colours, and the brothers hate him for his dreams. Stage: a sunlit field of wheat at noon, a boy in a long bright coat among his brothers, a sheaf bowing in the dream; gold stubble, a cold wind of envy.'],
    ['Dreams and the Pit', 'The brothers throw Joseph into an empty pit, then sell him to Ishmaelites for twenty shekels of silver. Stage: a dry pit in the wilderness at dusk, a boy at the bottom looking up, the brothers eating bread at the top; a caravan arriving, the sun going down like a wound.'],
    ['Potiphar\'s House', 'Joseph is bought by Potiphar, and the Lord prospers all he touches, until the wife\'s false witness sends him to prison. Stage: an Egyptian villa at midday, a trusted steward at a table, a burning accusation, a torn garment; marble, shade, and a door closing.'],
    ['The Prison', 'In prison Joseph tends the king\'s cupbearer and baker, and interprets their dreams — one restored, one hanged. Stage: a stone prison cell at dawn, two men in a dungeon, a cup and a basket of birds on a table; a dream\'s hope and a dream\'s doom.'],
    ['Pharaoh\'s Dreams', 'Pharaoh dreams of seven fat cows and seven lean, seven full ears and seven thin; Joseph is called from the dungeon to interpret. Stage: a throne room by the Nile at dawn, a king in gold, a summoned prisoner, seven fat and seven gaunt cattle in the dream\'s smoke; a single meaning, a nation listening.'],
    ['Storehouses', 'Joseph is made governor, and Egypt gathers the grain of seven plenty into storehouses, city by city. Stage: a Nile landscape in high summer, fields of wheat, great storehouses with sealed doors, scribes and ox-carts; a nation\'s patience, measured in grain.'],
    ['The Brothers Arrive', 'The brothers come to buy grain in Egypt, bow before Joseph, and do not know him. Stage: a grain hall at midday, a governor in Egyptian robes, ten shepherds bowing low, a search for truth in a false bottom; a cup, a silver, a recognition withheld.'],
    ['Benjamin\'s Cup', 'Joseph plants his silver cup in Benjamin\'s sack, and offers to keep the thief as his slave. Stage: a grain hall at dawn, a steward with a cup, the brothers returning in fear, a cup found in the youngest\'s sack; a test of love for the father\'s son.'],
    ['Revealed', 'Joseph can no longer contain himself, and the brothers see his face, and he says: I am Joseph your brother. Stage: a great hall at midday, all the court standing back, a man weeping on his brothers\' necks, the world turning over; light on the floor, and a long embrace.'],
    ['Goshen', 'Jacob and all his household settle in Goshen, the best of the land, and Joseph provides for them all. Stage: a green delta at dawn, a family arriving with flocks, the governor\'s chariot waiting, a father and son falling into each other\'s arms; the best of the land, in the years of famine.'],
  ],
},

Joshua: {
  ref: 'Joshua 1–24',
  scenes: [
    ['Be Strong', 'The Lord commissions Joshua: be strong and courageous, for the Lord your God is with you wherever you go. Stage: the plains of Moab at dawn, Moses gone, Joshua standing at the edge of the river, the people behind him; a new leader, a long road, the light coming up.'],
    ['Rahab and the Spies', 'Two spies are hidden by Rahab the prostitute on the wall of Jericho, and she marks the scarlet cord in the window. Stage: a city wall at night, a rooftop with flax, two men in the dark, a scarlet cord at the window; the sound of a closing gate, a bargain of faith.'],
    ['Crossing Jordan', 'The priests carry the ark into the Jordan, the waters stop, and the people cross on dry ground; twelve stones are taken from the riverbed. Stage: the river in flood, the ark in the water, the people crossing, the waters piled up; morning light, the first stones of a memorial.'],
    ['Jericho', 'The people march around the city once a day for six days, and seven times on the seventh, and the walls fall. Stage: a walled city at dawn, a silent people marching, priests with rams\' horns, the walls crumbling; dust, a shout, a city laid open.'],
    ['Achan\'s Hidden Goods', 'Achan hides a Babylonian garment and silver from the spoil, and the loss at Ai is traced to him. Stage: a camp at dusk, a tent with a hidden seam, a man and his family among the stones; a search in the dark, a fire rising, a community\'s grief.'],
    ['Ai', 'Joshua sets an ambush and takes Ai, and the people of Ai are taken captive. Stage: a ruined hill at dawn, a retreating force, an ambush in the fields, the city burning; smoke over a valley, a battle learned the hard way.'],
    ['The Gibeonites', 'The Gibeonites come in worn clothes and dry bread, pretending to be from afar, and a covenant is made. Stage: a camp at noon, dusty travellers with patched sandals and dry bread, a treaty sealed; a leader\'s oath, a lesson in haste.'],
    ['The Long Campaign', 'Five kings of the Amorites are defeated at Gibeon, and Joshua asks the sun to stand still over Gibeon. Stage: a plain at high noon, a battle in the open, the sun hanging in the sky, a hailstorm on the fleeing kings; the longest day of the year.'],
    ['Allot the Land', 'The land is divided among the tribes at Shiloh, with Caleb\'s Hebron and the cities of refuge marked out. Stage: a great assembly at Shiloh, a map of boundaries, families lifting their inheritance; a tent of meeting, the land measured and given.'],
    ['Choose This Day', 'Joshua gathers the people at Shechem and says: choose this day whom you will serve, but as for me and my house, we will serve the Lord. Stage: a great stone under the oaks of Shechem, an old man speaking, the people answering; a covenant renewed, the sun setting on a lifetime.'],
  ],
},

Moses: {
  ref: 'Exodus 1–40; Numbers; Deuteronomy 34',
  scenes: [
    ['The Child in the River', 'The mother hides the child for three months, then sets him in a basket of bulrushes among the reeds, where Pharaoh\'s daughter finds him. Stage: a river bank at dawn, tall reeds, a floating basket, a woman and her sister watching from the distance; mist on the water, a child\'s cry.'],
    ['The Burning Bush', 'Moses keeps the flock of Jethro in the wilderness of Horeb, and the angel of the Lord appears in a flame of fire out of the bush. Stage: a desert slope at noon, a shepherd\'s staff, a bush burning without burning up; the light of the flame on a man\'s face, sandals coming off.'],
    ['Before the Throne', 'Moses stands before Pharaoh, and the plagues come: water to blood, frogs, gnats, flies, and the rest, until the firstborn cry out. Stage: a throne room with gold and lapis, a staff on the floor, a river turning red, the city in darkness; the court hardening, scene by scene.'],
    ['Passover Night', 'The people eat the lamb in haste, with loins girded, and the blood marks the doorposts; the destroyer passes over. Stage: a night house with a meal of lamb and unleavened bread, a door marked with a bunch of hyssop; a family waiting, a city holding its breath.'],
    ['Through the Sea', 'The pillar of cloud goes behind, the sea is divided, and the people cross on dry ground; the waters return over the chariots. Stage: a sea with walls of water, a people walking on the seabed at night, the cloud lighting the way, the horses and the chariots drowned in the morning; a world of water held back.'],
    ['Bread in the Wilderness', 'The Lord gives manna in the morning and quails in the evening; the people gather only enough for the day. Stage: a wilderness camp at dawn, a white ground like frost, small round things lying all around, a jar of manna kept for the testimony; a people learning to trust the day.'],
    ['Sinai', 'The Lord comes down on Mount Sinai in fire, the mountain smokes, and the people stand at the foot, hearing the voice of the trumpet. Stage: a mountain wrapped in smoke and fire, the people at its foot, the covenant being spoken; thunder, lightning, a trumpet\'s long call.'],
    ['The Golden Calf', 'The people make a molten calf and worship it, and Moses breaks the tablets at the foot of the mountain. Stage: a camp of gold and fire, a calf of gold, a man running down the mountain, two tablets of stone in his hands; the silence after the shattering.'],
    ['Forty Years', 'The people wander in the wilderness, and the Lord sends manna, water from the rock, and the bronze serpent to save. Stage: a desert of tents and wandering, a rock giving water, a serpent of bronze on a pole, a generation passing and a new one rising; the long road to the border.'],
    ['Mount Nebo', 'Moses goes up to Mount Nebo and sees the whole land, and the Lord buries him in the valley; a prophet without equal in Israel. Stage: a mountain at sunset, a man looking over the land of promise, the light on the far hills; the last view, a grave no one knows, the road ending.'],
  ],
},

Nehemiah: {
  ref: 'Nehemiah 1–13',
  scenes: [
    ['Bad News', 'Hanani comes from Judah and tells Nehemiah that the wall of Jerusalem is broken and its people are in trouble. Stage: a palace court at Susa in winter, a cupbearer hearing a report, a map of a ruined city; a man turning to prayer, his face in the light.'],
    ['Before the King', 'Nehemiah asks the king for letters and timber, and the king grants what he asks, and he goes to the governors beyond the river. Stage: a royal throne room at noon, a cupbearer standing, a king with his sceptre, a scroll of letters; the favour of a monarch, a journey beginning.'],
    ['Night Inspection', 'Nehemiah rises by night with a few men and inspects the broken walls and gates, telling no one. Stage: a ruined city at midnight, a torch in the rubble, a man on foot by the wall; a broken gate, a pool, a valley of darkness; the plan being made in silence.'],
    ['Rise and Build', 'The people build, each family by its own gate, from the sheep gate to the tower of the ovens. Stage: a city of builders at dawn, a wall rising stone by stone, each family by its section; the sound of hammers, a woman, a goldsmith, a priest, all building.'],
    ['Sword and Trowel', 'The builders work with one hand and hold a sword in the other, and the work is done with the sound of the trumpet. Stage: a wall under construction at noon, a man with a trowel in one hand and a sword in the other, a trumpet on the wall; the work going on under arms.'],
    ['The Outcry', 'The people cry out against the Jewish nobles who charge interest, and Nehemiah charges them to give back the fields and the interest. Stage: a courtyard at midday, a crowd of the poor, a governor listening, a money lender\'s ledger; the debt being cancelled, a people set free.'],
    ['Plots and Rumours', 'Sanballat and Geshem send messages to lure Nehemiah to the plain of Ono, and he answers: I am doing a great work. Stage: a wall at dusk, a servant with a letter, a governor refusing to come down; a false prophet shut into a room, a wall growing in the light.'],
    ['The Wall Completed', 'The wall is finished in fifty-two days, and the enemies are afraid, knowing the work was done with the help of God. Stage: a finished wall at sunrise, a city gate closed, a man on the wall looking out; the sound of a trumpet, the fear of the neighbours.'],
    ['The Book Read', 'Ezra reads the law from dawn to midday, and the people weep and then feast, for the day is holy. Stage: a great square at noon, a wooden pulpit, a scroll of the law, the people listening, their hands lifted; the word being read, a city learning its own story.'],
    ['Reform', 'Nehemiah reforms the city: the Sabbath is kept, the tithes are brought in, and the people are counted. Stage: a city gate at the close of the day, a guard at the gate on the Sabbath, a storehouse for the tithes, a register of the people; the work of a city being made holy.'],
  ],
},

Noah: {
  ref: 'Genesis 6–9',
  scenes: [
    ['The Warning', 'The Lord warns Noah of the coming flood, and he is told to make an ark of gopher wood, for the earth is filled with violence. Stage: a plain at dusk, a man listening to a voice, the world behind him darkening, the first rain cloud on the horizon; a lone figure in a field.'],
    ['The Blueprint', 'The ark is to be three hundred cubits long, fifty wide, and thirty high, with a roof, a door, and three decks. Stage: a man marking out the great hull with a line and a cubit rod, the shape of the ark in the dust; the light of a late afternoon on a plan of wood.'],
    ['The Long Build', 'Noah and his sons gather timber, fit planks, and seal them with pitch, and the work goes on for a hundred and twenty years. Stage: a hillside workshop through the seasons, a hull rising, a family at work, the neighbours watching and mocking; a long, patient, quiet labour.'],
    ['The Gathering', 'The animals come to Noah two by two, clean and unclean, and he brings them into the ark. Stage: the ark door at dawn, a line of creatures coming up the ramp, birds and beasts, a man and his sons guiding them; the world\'s parade, arriving.'],
    ['The Door Shuts', 'The Lord shuts the door of the ark, and the fountains of the deep break up, and the windows of heaven are opened. Stage: the great door closing in a darkening sky, a family inside, the first rain beginning; a world shut in, a world washed out.'],
    ['Forty Days', 'The rain falls forty days and forty nights, and the waters rise, and the ark floats on the face of the waters. Stage: the ark in a great sea of rain, the water over the hills, the animals in the dark below; a world of water, the rain never stopping, a lamp in the hold.'],
    ['The Long Wait', 'Noah sends out a raven, then a dove; the dove returns with an olive leaf, and the waters are drying. Stage: the ark on a quiet sea at dawn, a dove returning to the window, a branch of olive in its beak; the first sign of the world coming back.'],
    ['Dry Ground', 'The ark rests on the mountains of Ararat, and Noah opens the window and looks out on the new earth. Stage: a mountain peak at sunrise, the ark resting on the rock, the water gone from the valleys; a man stepping out onto the wet ground, the first day.'],
    ['The Covenant', 'Noah builds an altar, offers burnt offerings, and the Lord sets the rainbow in the cloud as a sign of the covenant. Stage: an altar of stone on a mountain, the smoke rising, the sky clearing, a rainbow across the whole earth; a promise being made in colour and light.'],
    ['The Vineyard', 'Noah plants a vineyard, drinks the wine, and is uncovered in his tent; Ham sees, Shem and Japheth cover him. Stage: a vineyard in the afternoon, a man resting in a tent, a son coming in with a garment, the father\'s shame and blessing; the first vineyard, the first family, the first sorrow.'],
  ],
},

Ruth: {
  ref: 'Ruth 1–4',
  scenes: [
    ['Leaving Moab', 'Naomi, with her daughters-in-law, leaves Moab for Bethlehem, and Orpah turns back; Ruth clings to Naomi and to her people. Stage: a road at dawn, a widow and her two daughters-in-law, the Moabite hills behind; one turning, one continuing; the road to a new land.'],
    ['Your People', 'Ruth says: your people shall be my people, and your God my God; they arrive in Bethlehem at the beginning of the barley harvest. Stage: a small town at the start of the harvest, two women at the gate, the fields green around them; the first light of a new life.'],
    ['Gleaning', 'Ruth gathers behind the reapers in the field of Boaz, and he lets her glean among the sheaves and drink from the water. Stage: a barley field at noon, a reaper\'s line, a young woman gathering, the owner watching from the shade; grain, kindness, the first meeting.'],
    ['Boaz Notices', 'Boaz speaks to Ruth and tells her to stay with his servants, and praises her for all she has done for Naomi. Stage: a field at evening, a man in the shade of a wall, a woman at his feet; the kindness of a landowner, a blessing being spoken.'],
    ['At the Threshing Floor', 'Ruth goes to the threshing floor at Naomi\'s word, uncovers Boaz\'s feet, and asks him to spread his cloak over her. Stage: a threshing floor at night, a heap of grain, a man sleeping in his cloak, a woman at his feet; the quietest, most careful scene of the book.'],
    ['At the Gate', 'Boaz sits at the city gate with the elders, and the nearer kinsman is asked to redeem; he refuses, and Boaz takes Ruth. Stage: a city gate at noon, ten elders in a circle, a sandal passed, a woman at the edge of the meeting; the transaction of a life.'],
    ['Redeemed', 'The people bless Ruth and Boaz, and they are married, and the Lord gives them a son. Stage: a wedding feast at evening, a village in lamps, a couple at the door, a house being prepared; a blessing being spoken.'],
    ['Obed', 'The women say: a son has been born to Naomi, and they name him Obed, the father of Jesse, the father of David. Stage: a house at dawn, a newborn child, a grandmother holding him, the women of the neighbourhood at the door; a line beginning.'],
  ],
},

Samuel: {
  ref: '1 Samuel 1–16',
  scenes: [
    ['The Boy at Shiloh', 'Samuel, a child in a linen ephod, serves at the tabernacle before Eli the priest. Stage: the tabernacle court at dawn, a boy in a small ephod, an old priest on a chair by the doorpost; the ark in the dark behind, the lamp not yet gone out.'],
    ['The Voice at Night', 'The Lord calls Samuel in the night; he runs to Eli three times before Eli says: speak, Lord, for your servant is listening. Stage: a dark temple at night, a boy waking, a lamp burning low, an old priest\'s hand; the fourth call, the answer, the light in the boy\'s eyes.'],
    ['A Hard Message', 'Eli makes Samuel tell the whole message: the house of Eli will be judged, and no sacrifice can stop it. Stage: a chamber at first light, a boy trembling, an old man listening, a lamp going out; a prophecy delivered with tears.'],
    ['The Ark Captured', 'The Philistines defeat Israel, the ark is taken, and Eli falls from his seat and breaks his neck at the gate. Stage: a battlefield at dusk, a camp in smoke, the ark in enemy hands, an old man falling at the gate; a town wailing, a line of captives.'],
    ['Ebenezer', 'The Philistines return the ark, and Samuel sets a stone between Mizpah and Shen and calls it Ebenezer, saying: thus far the Lord has helped us. Stage: a field at dawn, a great stone being set up, the people gathered, the ark on a new cart; a victory and a memorial, the first light.'],
    ['A King Demanded', 'The elders ask for a king, and Samuel is displeased; the Lord tells him to listen to the people and show them the cost of a king. Stage: a town gate at midday, a crowd of elders, a judge listening, a scroll of the king\'s rights; a request made, a warning given.'],
    ['Saul Chosen', 'Saul is chosen by lot, and he is found hiding among the baggage, taller than any of the people. Stage: a town square at dawn, a great man being brought from the baggage, a crown of gold, a tall figure among a crowd; the first king of Israel.'],
    ['Saul\'s First Victory', 'Nahash the Ammonite threatens Jabesh-gilead, and Saul cuts his oxen and sends the pieces through Israel; the people rally and win. Stage: a field of oxen at noon, a yoke of oxen cut in pieces, a trumpet being blown, the people coming up from the fields; a first victory.'],
    ['The Rejected King', 'Saul disobeys at Gilgal and Samuel says: to obey is better than sacrifice, and the kingdom is torn from him. Stage: a battlefield at dusk, a king in torn robes, a prophet with a torn cloak, the sound of the sheep and the cattle; a kingdom ending, a door closing.'],
    ['David Anointed', 'Samuel anoints David the youngest son of Jesse in Bethlehem, and the Spirit of the Lord comes upon him from that day. Stage: a Bethlehem hillside at golden hour, a boy among his brothers, a horn of oil, a shepherd\'s crook; the last son, the first light on a new king.'],
  ],
},
};

export { BRIEFS };

function decodeAttr(s) {
  return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function encodeComment(s) {
  // HTML comments cannot contain '--'
  return s.replace(/--/g, '—');
}

let files = 0, scenesTotal = 0, warnings = [];

for (const story of Object.keys(BRIEFS)) {
  const file = path.join(root, story, 'tools', 'scene_designer.html');
  if (!fs.existsSync(file)) {
    warnings.push(`${story}: scene_designer.html not found`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/data-scenes="([^"]*)"/);
  if (!m) { warnings.push(`${story}: no data-scenes attribute`); continue; }
  const scenes = JSON.parse(decodeAttr(m[1]));

  const brief = BRIEFS[story];
  if (scenes.length !== brief.scenes.length) {
    warnings.push(`${story}: count mismatch — data-scenes has ${scenes.length}, briefs have ${brief.scenes.length}`);
  }

  // Align by scene name where possible
  const byName = new Map(brief.scenes.map(([n, d]) => [n, d]));
  const lines = [];
  lines.push(`  SCENE DIRECTOR NOTES — ${story} (${brief.ref})`);
  lines.push(`  ${scenes.length} scenes. Descriptions follow the biblical account and give`);
  lines.push(`  staging direction for the scene designer: setting, characters, key props,`);
  lines.push(`  light and mood. Reference board for iconic biblical compositions: the`);
  lines.push(`  "famous bible scenes" ideas board on Pinterest.`);
  lines.push('');
  scenes.forEach((sc, i) => {
    const name = sc[0];
    let desc = byName.get(name);
    if (!desc) {
      const idx = brief.scenes[i];
      desc = idx ? idx[1] : 'Describe this scene from the biblical account.';
      warnings.push(`${story}: scene "${name}" not matched by name (used positional fallback)`);
    }
    lines.push(`  ${i + 1}. ${name}`);
    lines.push(`     ${encodeComment(desc)}`);
    lines.push('');
  });

  const block = `<!--\n${lines.join('\n')}  -->\n`;

  // Skip if the notes are already present
  if (html.includes('SCENE DIRECTOR NOTES')) {
    warnings.push(`${story}: notes already present — skipped`);
    continue;
  }

  // Insert after the <title> line
  const out = html.replace(/(<title>[^<]*<\/title>\n)/, `$1${block}`);
  if (out === html) {
    warnings.push(`${story}: could not find insertion point`);
    continue;
  }
  fs.writeFileSync(file, out);
  files++;
  scenesTotal += scenes.length;
}

console.log(`Wrote scene notes to ${files} scene_designer.html files (${scenesTotal} scenes).`);
if (warnings.length) {
  console.log('\nWarnings:');
  warnings.forEach(w => console.log('  ' + w));
}
