// Canonical character inventory for Isaiah. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Isaiah",
  "defaultPreset": "isaiah",
  "groupLabel": "Isaiah characters"
};
const ISAIAH_BASE = {
  "noseScale": 1,
  "noseShape": "straight",
  "eyeShape": "almond",
  "eyeSpacing": 1,
  "eyebrowStyle": "arched",
  "mouthStyle": "neutral",
  "hairStyle": "wavy",
  "beardStyle": "short",
  "hatStyle": "none",
  "clothingType": "tunic",
  "faceShape": "oval",
  "foreheadHeight": "medium",
  "chinShape": "rounded",
  "earSize": 1,
  "earShape": "round",
  "headSize": 1,
  "hairSize": 1,
  "hatSize": 1,
  "hatMatchHair": false,
  "dualStripe": false,
  "colorInner": "#c7a56a",
  "colorOuter": "#6f4c2d",
  "colorCloak": "#493321",
  "colorAccent": "#b78a3d",
  "colorGarment2": "#ddd0ad",
  "colorSkin": "#b9825d",
  "colorHair": "#2a1d16",
  "colorEye": "#3d2d24",
  "colorLip": "#985e50",
  "materialStyle": "woven_linen"
};
const isaiahPreset = (name, overrides = {}) => ({ ...ISAIAH_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "isaiah": isaiahPreset("Isaiah", {"hairStyle":"short","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "uzziah": isaiahPreset("Uzziah", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"shoulder_waves","hatStyle":"royal_diadem","clothingType":"royal_robes","materialStyle":"dotted","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "ahaz": isaiahPreset("Ahaz", {"clothingType":"royal_robes","colorOuter":"#77414b","colorAccent":"#c89749","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"royal_diadem","materialStyle":"fine_linen","colorInner":"#d0aa78","colorCloak":"#4c2d36","hatSize":1.1,"hairSize":1.1}),
  "hezekiah": isaiahPreset("Hezekiah", {"clothingType":"royal_robes","colorOuter":"#53613a","colorAccent":"#b99045","dualStripe":true,"hairStyle":"shoulder_waves","hatStyle":"royal_diadem","materialStyle":"dotted","colorInner":"#c2a36b","colorCloak":"#354229","hatSize":0.9,"hairSize":1.2}),
  "shear_jashub": isaiahPreset("Shear Jashub", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "mahershalalhashbaz": isaiahPreset("Mahershalalhashbaz", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"locs","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"tartan","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1,"hairSize":1}),
  "seraph": isaiahPreset("Seraph", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"shaved_sides","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "royal_envoy": isaiahPreset("Royal Envoy", {"hairStyle":"flowing","colorOuter":"#365f67","hatStyle":"wrapped_scarf","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
  "sennacherib": isaiahPreset("Sennacherib", {"hairStyle":"short","hatStyle":"skullcap","clothingType":"tunic","materialStyle":"herringbone","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1.1,"hairSize":0.9}),
};
