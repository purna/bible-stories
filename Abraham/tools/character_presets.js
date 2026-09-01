// Canonical character inventory for Abraham. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Abraham",
  "defaultPreset": "abraham",
  "groupLabel": "Abraham characters"
};
const ABRAHAM_BASE = {
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
const abrahamPreset = (name, overrides = {}) => ({ ...ABRAHAM_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "abraham": abrahamPreset("Abraham", {"hairStyle":"short","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "sarah": abrahamPreset("Sarah", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"shepherd_wrap","noseShape":"aquiline","eyebrowStyle":"thick","clothingType":"traveller_cloak","materialStyle":"fine_linen","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "lot": abrahamPreset("Lot", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":1.1}),
  "hagar": abrahamPreset("Hagar", {"beardStyle":"none","hairStyle":"braids","hatStyle":"skullcap","colorOuter":"#53613a","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
  "ishmael": abrahamPreset("Ishmael", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "isaac": abrahamPreset("Isaac", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"locs","hatStyle":"shepherd_wrap","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1.1,"hairSize":1}),
  "melchizedek": abrahamPreset("Melchizedek", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"shaved_sides","hatStyle":"turban","clothingType":"priestly_ephod","materialStyle":"fine_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "abimelech": abrahamPreset("Abimelech", {"hairStyle":"flowing","colorOuter":"#365f67","hatStyle":"wrapped_scarf","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
  "eliezer": abrahamPreset("Eliezer", {"hairStyle":"short","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":0.9}),
};
