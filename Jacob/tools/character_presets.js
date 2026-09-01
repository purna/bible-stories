// Canonical character inventory for Jacob. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Jacob",
  "defaultPreset": "jacob_young",
  "groupLabel": "Jacob characters"
};
const JACOB_BASE = {
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
const jacobPreset = (name, overrides = {}) => ({ ...JACOB_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "jacob_young": jacobPreset("Jacob Young", {"hairStyle":"curly","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":1,"hairSize":0.9}),
  "jacob": jacobPreset("Jacob", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"shepherd_wrap","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "esau": jacobPreset("Esau", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":1.1}),
  "isaac": jacobPreset("Isaac", {"hairStyle":"shoulder_waves","colorOuter":"#53613a","hatStyle":"shepherd_wrap","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
  "rebekah": jacobPreset("Rebekah", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "laban": jacobPreset("Laban", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"locs","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"tartan","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1,"hairSize":1}),
  "leah": jacobPreset("Leah", {"beardStyle":"none","hairStyle":"side_braid","hatStyle":"shepherd_wrap","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "rachel": jacobPreset("Rachel", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"wrapped_scarf","colorOuter":"#365f67","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
  "joseph_child": jacobPreset("Joseph Child", {"hairStyle":"curly","hatStyle":"none","clothingType":"tunic","materialStyle":"fine_linen","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":0.9}),
  "angel": jacobPreset("Angel", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"hood","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#c2a36b","colorOuter":"#53613a","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1}),
};
