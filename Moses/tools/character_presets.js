// Character presets for the story of Moses (Exodus–Deuteronomy).
// Loaded as a script so the generator also works when opened via file://.
const MOSES_BASE = {
  noseScale: 1, noseShape: "straight", eyeShape: "almond", eyeSpacing: 1,
  eyebrowStyle: "arched", mouthStyle: "neutral", hairStyle: "wavy",
  beardStyle: "short", hatStyle: "none", clothingType: "tunic",
  faceShape: "oval", foreheadHeight: "medium", chinShape: "rounded",
  earSize: 1, earShape: "round", headSize: 1, hairSize: 1, hatSize: 1,
  hatMatchHair: false, dualStripe: false,
  colorInner: "#c7a56a", colorOuter: "#6f4c2d", colorCloak: "#493321",
  colorAccent: "#b78a3d", colorGarment2: "#ddd0ad", colorSkin: "#b9825d",
  colorHair: "#2a1d16", colorEye: "#3d2d24", colorLip: "#985e50"
};

const mosesPreset = (name, overrides = {}) => ({ ...MOSES_BASE, name, ...overrides });

const CHARACTER_PRESETS_DATA = {
  moses_young: mosesPreset("Moses — Prince of Egypt", { hairStyle:"curly", beardStyle:"none", clothingType:"layered_robe", colorInner:"#f0d7a0", colorOuter:"#f5f1df", colorCloak:"#1d6573", colorAccent:"#d4aa45", dualStripe:true }),
  moses: mosesPreset("Moses — Shepherd and Prophet", { noseShape:"aquiline", eyebrowStyle:"thick", hairStyle:"flowing", beardStyle:"long", foreheadHeight:"high", clothingType:"layered_robe", colorHair:"#d8d1c4", colorInner:"#d8c8a3", colorOuter:"#76583b", colorCloak:"#4f3928", colorAccent:"#98713c" }),
  aaron: mosesPreset("Aaron — High Priest", { eyebrowStyle:"thick", beardStyle:"long", hatStyle:"turban", clothingType:"priestly_ephod", colorInner:"#f2eee3", colorOuter:"#295b83", colorCloak:"#702d42", colorAccent:"#d6ad42", colorGarment2:"#8d3c54", dualStripe:true }),
  miriam: mosesPreset("Miriam — Prophetess", { eyeShape:"upturned", hairStyle:"flowing", beardStyle:"none", hatStyle:"headscarf", clothingType:"layered_robe", colorSkin:"#a96f4d", colorInner:"#d7b56d", colorOuter:"#7e3f47", colorCloak:"#55313b", colorAccent:"#d3a74d" }),
  pharaoh: mosesPreset("Pharaoh", { noseShape:"aquiline", eyeShape:"narrow", eyebrowStyle:"straight", hairStyle:"buzz", beardStyle:"pointed", hatStyle:"headscarf", clothingType:"layered_robe", faceShape:"square", chinShape:"square", colorSkin:"#b87548", colorInner:"#f2df9b", colorOuter:"#164e72", colorCloak:"#182f52", colorAccent:"#d8b446", dualStripe:true }),
  pharaohs_daughter: mosesPreset("Pharaoh's Daughter", { eyeShape:"almond", hairStyle:"braids", beardStyle:"none", hatStyle:"headscarf", clothingType:"layered_robe", faceShape:"heart", colorSkin:"#c9875d", colorInner:"#f0d7a0", colorOuter:"#2f7b86", colorCloak:"#24505f", colorAccent:"#d8b446" }),
  zipporah: mosesPreset("Zipporah", { eyeShape:"almond", eyebrowStyle:"straight", hairStyle:"braids", beardStyle:"none", hatStyle:"headscarf", clothingType:"tunic", colorSkin:"#8f593d", colorInner:"#b98350", colorOuter:"#643e2c", colorCloak:"#3f3028", colorAccent:"#bf7e42" }),
  jethro: mosesPreset("Jethro — Priest of Midian", { noseShape:"aquiline", eyebrowStyle:"thick", hairStyle:"receding", beardStyle:"long", hatStyle:"turban", clothingType:"layered_robe", foreheadHeight:"high", colorHair:"#c8c0b4", colorInner:"#c6a672", colorOuter:"#594633", colorCloak:"#3e3329" }),
  joshua: mosesPreset("Joshua", { faceShape:"square", chinShape:"square", eyebrowStyle:"thick", hairStyle:"short", beardStyle:"short", clothingType:"military_lorica", colorInner:"#8f774f", colorOuter:"#4f4937", colorCloak:"#36392f", colorAccent:"#9a7a3f" }),
  caleb: mosesPreset("Caleb", { faceShape:"square", chinShape:"cleft", noseShape:"wide", eyebrowStyle:"thick", hairStyle:"curly", beardStyle:"full_round", clothingType:"tunic", colorSkin:"#9d6748", colorInner:"#a57948", colorOuter:"#60432c", colorCloak:"#3b3129" }),
  israelite_elder: mosesPreset("Israelite Elder", { hairStyle:"receding", beardStyle:"long", hatStyle:"skullcap", foreheadHeight:"high", colorHair:"#bdb5aa", colorInner:"#a88b60", colorOuter:"#5d4935", colorCloak:"#3d332a" }),
  israelite_woman: mosesPreset("Israelite Woman", { hairStyle:"tied_back", beardStyle:"none", hatStyle:"headscarf", clothingType:"peasant_rags", colorSkin:"#ad7654", colorInner:"#a98358", colorOuter:"#72503a", colorCloak:"#4b382b" }),
  egyptian_overseer: mosesPreset("Egyptian Overseer", { eyeShape:"narrow", eyebrowStyle:"straight", hairStyle:"buzz", beardStyle:"none", hatStyle:"headscarf", clothingType:"military_lorica", faceShape:"square", colorSkin:"#bd7648", colorInner:"#d6b66e", colorOuter:"#8a4c30", colorCloak:"#5c3426", colorAccent:"#d1a33e" }),
  korah: mosesPreset("Korah", { eyebrowStyle:"furrowed", mouthStyle:"frown", hairStyle:"curly", beardStyle:"full_round", clothingType:"layered_robe", colorInner:"#aa8357", colorOuter:"#59382d", colorCloak:"#3d2523", colorAccent:"#8d583b" }),
  balaam: mosesPreset("Balaam", { noseShape:"aquiline", eyeShape:"hooded", eyebrowStyle:"arched", hairStyle:"flowing", beardStyle:"pointed", hatStyle:"hood", clothingType:"layered_robe", colorInner:"#88735e", colorOuter:"#473b35", colorCloak:"#2e2928", colorAccent:"#866b3f" })
};
