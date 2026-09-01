// Canonical character inventory for Noah. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Noah",
  "defaultPreset": "noah",
  "groupLabel": "Noah characters"
};
const NOAH_BASE = {
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
const noahPreset = (name, overrides = {}) => ({ ...NOAH_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "noah": noahPreset("Noah", {"hairStyle":"short","hatStyle":"none","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":1,"hairSize":0.9}),
  "noahs_wife": noahPreset("Noah’s Wife", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"shepherd_wrap","noseShape":"aquiline","eyebrowStyle":"thick","clothingType":"traveller_cloak","materialStyle":"basket_weave","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "shem": noahPreset("Shem", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"wrapped_scarf","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1.1,"hairSize":1.1}),
  "ham": noahPreset("Ham", {"hairStyle":"shoulder_waves","colorOuter":"#53613a","hatStyle":"skullcap","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
  "japheth": noahPreset("Japheth", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "shems_wife": noahPreset("Shems Wife", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick","clothingType":"traveller_cloak","materialStyle":"tartan","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1.1,"hairSize":1}),
  "hams_wife": noahPreset("Hams Wife", {"beardStyle":"none","hairStyle":"side_braid","hatStyle":"wrapped_scarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
  "japheths_wife": noahPreset("Japheths Wife", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"none","colorOuter":"#365f67","clothingType":"work_tunic","materialStyle":"fine_linen","colorInner":"#b78d58","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1.2}),
  "neighbour": noahPreset("Neighbour", {"hairStyle":"short","hatStyle":"none","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":0.9}),
  "animal_keeper": noahPreset("Animal Keeper", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"wrapped_scarf","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorOuter":"#53613a","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1}),
};
