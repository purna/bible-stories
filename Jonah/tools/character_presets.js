// Canonical character inventory for Jonah. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Jonah",
  "defaultPreset": "jonah",
  "groupLabel": "Jonah characters"
};
const JONAH_BASE = {
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
const jonahPreset = (name, overrides = {}) => ({ ...JONAH_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "jonah": jonahPreset("Jonah", {"hairStyle":"short","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "ship_captain": jonahPreset("Ship Captain", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"none","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "sailor": jonahPreset("Sailor", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"none","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1,"hairSize":1.1}),
  "king_of_nineveh": jonahPreset("King Of Nineveh", {"beardStyle":"none","hairStyle":"crown_braids","hatStyle":"royal_diadem","clothingType":"court_dress","colorOuter":"#53613a","colorAccent":"#b99045","dualStripe":true,"materialStyle":"dotted","colorInner":"#c2a36b","colorCloak":"#354229","hatSize":0.9,"hairSize":1.2}),
  "ninevite": jonahPreset("Ninevite", {"hairStyle":"receding","hatStyle":"hood","clothingType":"tunic","materialStyle":"dotted","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "child": jonahPreset("Child", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"curly","hatStyle":"none","clothingType":"tunic","materialStyle":"fine_linen","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1,"hairSize":1}),
  "messenger": jonahPreset("Messenger", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"shaved_sides","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"woven_linen","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":1.1}),
};
