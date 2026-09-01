// Canonical character inventory for Elisha. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Elisha",
  "defaultPreset": "elisha",
  "groupLabel": "Elisha characters"
};
const ELISHA_BASE = {
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
const elishaPreset = (name, overrides = {}) => ({ ...ELISHA_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "elisha": elishaPreset("Elisha", {"hairStyle":"short","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "elijah": elishaPreset("Elijah", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"hood","clothingType":"prophet_mantle","materialStyle":"herringbone","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "widow": elishaPreset("Widow", {"beardStyle":"none","hairStyle":"shoulder_waves","hatStyle":"veil","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1.1,"hairSize":1.1}),
  "shunammite_woman": elishaPreset("Shunammite Woman", {"beardStyle":"none","hairStyle":"braids","hatStyle":"none","colorOuter":"#53613a","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":1,"hairSize":1.2}),
  "gehazi": elishaPreset("Gehazi", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "naaman": elishaPreset("Naaman", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"locs","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"tartan","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1,"hairSize":1}),
  "servant_girl": elishaPreset("Servant Girl", {"beardStyle":"none","hairStyle":"side_braid","hatStyle":"wrapped_scarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "king_of_israel": elishaPreset("King Of Israel", {"clothingType":"royal_robes","colorOuter":"#365f67","colorAccent":"#d3ad53","dualStripe":true,"hairStyle":"shoulder_waves","hatStyle":"royal_diadem","materialStyle":"dotted","colorInner":"#b78d58","colorCloak":"#263f47","hatSize":1,"hairSize":1.2}),
  "syrian_commander": elishaPreset("Syrian Commander", {"hairStyle":"shaved_sides","hatStyle":"none","clothingType":"military_lorica","materialStyle":"scales","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":0.9}),
};
