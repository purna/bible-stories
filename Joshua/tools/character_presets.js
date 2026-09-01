// Canonical character inventory for Joshua. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Joshua",
  "defaultPreset": "joshua",
  "groupLabel": "Joshua characters"
};
const JOSHUA_BASE = {
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
const joshuaPreset = (name, overrides = {}) => ({ ...JOSHUA_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "joshua": joshuaPreset("Joshua", {"hairStyle":"short","hatStyle":"none","clothingType":"military_lorica","materialStyle":"scales","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":1,"hairSize":0.9}),
  "caleb": joshuaPreset("Caleb", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"shaved_sides","hatStyle":"battle_helmet","clothingType":"military_lorica","materialStyle":"scales","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "rahab": joshuaPreset("Rahab", {"clothingType":"court_dress","colorOuter":"#77414b","colorAccent":"#c89749","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"crown_braids","hatStyle":"royal_diadem","materialStyle":"fine_linen","colorInner":"#d0aa78","colorCloak":"#4c2d36","hatSize":1.1,"hairSize":1.1}),
  "achan": joshuaPreset("Achan", {"hairStyle":"shoulder_waves","colorOuter":"#53613a","hatStyle":"skullcap","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
  "eleazar": joshuaPreset("Eleazar", {"hairStyle":"receding","hatStyle":"turban","clothingType":"priestly_ephod","materialStyle":"fine_linen","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "israelite_scout": joshuaPreset("Israelite Scout", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"shaved_sides","hatStyle":"battle_helmet","clothingType":"military_lorica","materialStyle":"scales","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1.1,"hairSize":1}),
  "gibeonite": joshuaPreset("Gibeonite", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"shaved_sides","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "tribal_leader": joshuaPreset("Tribal Leader", {"hairStyle":"flowing","colorOuter":"#365f67","hatStyle":"wrapped_scarf","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
};
