// Canonical character inventory for Ruth. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Ruth",
  "defaultPreset": "ruth",
  "groupLabel": "Ruth characters"
};
const RUTH_BASE = {
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
const ruthPreset = (name, overrides = {}) => ({ ...RUTH_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "ruth": ruthPreset("Ruth", {"beardStyle":"none","hairStyle":"side_braid","hatStyle":"veil","clothingType":"tunic","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "naomi": ruthPreset("Naomi", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick","clothingType":"traveller_cloak","materialStyle":"fine_linen","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "orpah": ruthPreset("Orpah", {"beardStyle":"none","hairStyle":"shoulder_waves","hatStyle":"wrapped_scarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1.1,"hairSize":1.1}),
  "boaz": ruthPreset("Boaz", {"hairStyle":"shoulder_waves","colorOuter":"#53613a","hatStyle":"shepherd_wrap","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
  "kinsman_redeemer": ruthPreset("Kinsman Redeemer", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "field_overseer": ruthPreset("Field Overseer", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"shaved_sides","hatStyle":"battle_helmet","clothingType":"military_lorica","materialStyle":"scales","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1.1,"hairSize":1}),
  "bethlehem_woman": ruthPreset("Bethlehem Woman", {"beardStyle":"none","hairStyle":"side_braid","hatStyle":"wrapped_scarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "obed": ruthPreset("Obed", {"hairStyle":"flowing","colorOuter":"#365f67","hatStyle":"wrapped_scarf","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
};
