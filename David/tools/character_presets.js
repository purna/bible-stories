// Character presets for the life of David (1 Samuel–1 Kings).
// Loaded as a script so the generator also works when opened via file://.
const DAVID_BASE = {
  noseScale: 1, noseShape: "straight", eyeShape: "almond", eyeSpacing: 1,
  eyebrowStyle: "arched", mouthStyle: "neutral", hairStyle: "wavy",
  beardStyle: "short", hatStyle: "none", clothingType: "tunic",
  faceShape: "oval", foreheadHeight: "medium", chinShape: "rounded",
  earSize: 1, earShape: "round", headSize: 1, hairSize: 1, hatSize: 1,
  hatMatchHair: false, dualStripe: false,
  colorInner: "#c49b63", colorOuter: "#735037", colorCloak: "#493528",
  colorAccent: "#b88b45", colorGarment2: "#d8c59b", colorSkin: "#b87954",
  colorHair: "#3b2418", colorEye: "#4b3327", colorLip: "#98584c"
};

const davidPreset = (name, overrides = {}) => ({ ...DAVID_BASE, name, ...overrides });

const CHARACTER_PRESETS_DATA = {
  david_shepherd: davidPreset("David — Shepherd", { faceShape:"round", eyeShape:"upturned", mouthStyle:"smile", hairStyle:"curly", beardStyle:"none", clothingType:"peasant_rags", headSize:.96, colorHair:"#71361f", colorInner:"#b89255", colorOuter:"#74502d", colorCloak:"#4e3d28", colorAccent:"#8fa05b" }),
  david_warrior: davidPreset("David — Warrior", { eyebrowStyle:"thick", hairStyle:"curly", beardStyle:"short", clothingType:"military_lorica", colorHair:"#62301f", colorInner:"#8e6d42", colorOuter:"#4e4939", colorCloak:"#392d29", colorAccent:"#a77c39" }),
  king_david: davidPreset("David — King", { noseShape:"aquiline", eyebrowStyle:"thick", hairStyle:"curly", beardStyle:"full_round", clothingType:"layered_robe", colorHair:"#4c281c", colorInner:"#efe1bd", colorOuter:"#6d2840", colorCloak:"#401b2b", colorAccent:"#d3ab43", colorGarment2:"#254e72", dualStripe:true }),
  samuel: davidPreset("Samuel — Prophet", { foreheadHeight:"high", hairStyle:"receding", beardStyle:"long", hatStyle:"hood", clothingType:"layered_robe", colorHair:"#d2cbc0", colorInner:"#c9b083", colorOuter:"#69533c", colorCloak:"#46382e", colorAccent:"#8b6c42" }),
  jesse: davidPreset("Jesse", { faceShape:"square", noseShape:"wide", eyebrowStyle:"thick", hairStyle:"receding", beardStyle:"full_round", colorHair:"#a79b8d", colorInner:"#9d7850", colorOuter:"#5d432f", colorCloak:"#3d3027" }),
  eliab: davidPreset("Eliab — David's Brother", { faceShape:"square", chinShape:"square", eyebrowStyle:"furrowed", mouthStyle:"frown", hairStyle:"short", beardStyle:"short", clothingType:"military_lorica", headSize:1.06, colorInner:"#806846", colorOuter:"#474338", colorCloak:"#302d27" }),
  saul: davidPreset("King Saul", { faceShape:"square", chinShape:"cleft", noseShape:"aquiline", eyebrowStyle:"furrowed", hairStyle:"flowing", beardStyle:"full_round", clothingType:"military_lorica", headSize:1.08, colorInner:"#b79a66", colorOuter:"#55354f", colorCloak:"#342238", colorAccent:"#c49b3c", dualStripe:true }),
  jonathan: davidPreset("Jonathan", { faceShape:"oval", eyebrowStyle:"straight", hairStyle:"wavy", beardStyle:"short", clothingType:"military_lorica", colorInner:"#8a7957", colorOuter:"#3f5360", colorCloak:"#293942", colorAccent:"#b49552" }),
  goliath: davidPreset("Goliath", { noseScale:1.2, noseShape:"wide", eyeShape:"narrow", eyebrowStyle:"thick", mouthStyle:"frown", hairStyle:"curly", beardStyle:"full_round", hatStyle:"helmet", clothingType:"military_lorica", faceShape:"square", chinShape:"square", headSize:1.2, colorSkin:"#a66a49", colorInner:"#8c7656", colorOuter:"#4d514d", colorCloak:"#343735", colorAccent:"#9a6f35" }),
  michal: davidPreset("Michal", { eyeShape:"almond", eyebrowStyle:"arched", hairStyle:"braids", beardStyle:"none", hatStyle:"headscarf", clothingType:"layered_robe", faceShape:"heart", colorInner:"#d5ad77", colorOuter:"#5a304e", colorCloak:"#3e2338", colorAccent:"#b99049" }),
  abigail: davidPreset("Abigail", { eyeShape:"upturned", mouthStyle:"smile", hairStyle:"tied_back", beardStyle:"none", hatStyle:"headscarf", clothingType:"layered_robe", faceShape:"heart", colorSkin:"#ad704e", colorInner:"#d4b071", colorOuter:"#6d4b35", colorCloak:"#48352b", colorAccent:"#9d713e" }),
  bathsheba: davidPreset("Bathsheba", { eyeShape:"almond", hairStyle:"flowing", beardStyle:"none", hatStyle:"headscarf", clothingType:"layered_robe", faceShape:"oval", colorSkin:"#a96e50", colorInner:"#caa97b", colorOuter:"#32596a", colorCloak:"#263f50", colorAccent:"#b99653" }),
  uriah: davidPreset("Uriah the Hittite", { faceShape:"square", eyebrowStyle:"straight", hairStyle:"short", beardStyle:"medium", clothingType:"military_lorica", colorSkin:"#9e6348", colorInner:"#887653", colorOuter:"#49483e", colorCloak:"#34332e", colorAccent:"#876f42" }),
  joab: davidPreset("Joab", { faceShape:"square", chinShape:"cleft", noseShape:"aquiline", eyebrowStyle:"furrowed", hairStyle:"short", beardStyle:"full_round", clothingType:"military_lorica", colorInner:"#786344", colorOuter:"#3c3d38", colorCloak:"#292a27", colorAccent:"#865d32" }),
  nathan: davidPreset("Nathan — Prophet", { foreheadHeight:"high", noseShape:"aquiline", eyeShape:"hooded", eyebrowStyle:"thick", hairStyle:"receding", beardStyle:"long", clothingType:"layered_robe", colorHair:"#b9afa3", colorInner:"#b3976c", colorOuter:"#554537", colorCloak:"#38302b" }),
  absalom: davidPreset("Absalom", { faceShape:"heart", eyeShape:"upturned", eyebrowStyle:"arched", hairStyle:"flowing", hairSize:1.25, beardStyle:"short", clothingType:"layered_robe", colorHair:"#2a1712", colorInner:"#d2ac72", colorOuter:"#4f315c", colorCloak:"#352440", colorAccent:"#bd9246" })
};
