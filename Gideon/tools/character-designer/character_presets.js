// Canonical character inventory for Gideon. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Gideon",
  "defaultPreset": "gideon",
  "groupLabel": "Gideon characters"
};
const GIDEON_BASE = {
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
const gideonPreset = (name, overrides = {}) => ({ ...GIDEON_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "gideon": gideonPreset("Gideon", {"hairStyle":"short","hatStyle":"shepherd_wrap","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d6b477","colorOuter":"#6f4b32","colorCloak":"#3f3027","colorAccent":"#c99b46","hatSize":0.9,"hairSize":0.9}),
  "angel": gideonPreset("Angel", {"hatStyle":"none","clothingType":"desert_mantle","colorInner":"#e8d9b0","colorOuter":"#8a7a4a","colorCloak":"#5a5040","colorAccent":"#ffd700","colorGarment2":"#f5e6c8","colorSkin":"#e8c8a0","colorHair":"#d4af37","hatSize":1,"hairSize":1}),
  "joash": gideonPreset("Joash", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"wavy","hatStyle":"shepherd_wrap","clothingType":"traveller_cloak","materialStyle":"fine_linen","colorInner":"#b78d58","colorOuter":"#365f67","colorCloak":"#263f47","colorAccent":"#d3ad53","hatSize":1,"hairSize":1}),
  "midianite_soldier": gideonPreset("Midianite Soldier", {"noseShape":"aquiline","eyebrowStyle":"thick","hairStyle":"locs","hatStyle":"none","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c1a178","colorOuter":"#875b34","colorCloak":"#533920","colorAccent":"#d0a34c","hatSize":1,"hairSize":1}),
  "midianite_king": gideonPreset("Midianite King", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748","hairStyle":"curly","hatStyle":"wrapped_scarf","clothingType":"desert_mantle","materialStyle":"herringbone","colorInner":"#d0aa78","colorOuter":"#77414b","colorCloak":"#4c2d36","colorAccent":"#c89749","hatSize":1.1,"hairSize":1.1}),
  "purah": gideonPreset("Purah", {"hatStyle":"skullcap","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#c9a06a","colorOuter":"#4a5a3a","colorCloak":"#2f3a28","colorAccent":"#a88a3a","colorGarment2":"#d8c8a0","colorSkin":"#a06a45","hatSize":0.9,"hairSize":1}),
  "ephraimite": gideonPreset("Ephraimite", {"hairStyle":"receding","hatStyle":"none","clothingType":"work_tunic","materialStyle":"woven_linen","colorInner":"#d8c39b","colorOuter":"#67547a","colorCloak":"#40364f","colorAccent":"#d0ad58","hatSize":1,"hairSize":0.9}),
  "israelite_warrior": gideonPreset("Israelite Warrior", {"hairStyle":"shoulder_waves","colorOuter":"#53613a","hatStyle":"skullcap","clothingType":"work_tunic","materialStyle":"basket_weave","colorInner":"#c2a36b","colorCloak":"#354229","colorAccent":"#b99045","hatSize":0.9,"hairSize":1.2}),
};
