// Canonical character inventory for David. Generated from __docs/david-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "David",
  "defaultPreset": "david_young",
  "groupLabel": "David characters"
};
const STORY_CHARACTER_BASE = {
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
  "colorLip": "#985e50"
};
const storyPreset=(name,overrides={})=>({...STORY_CHARACTER_BASE,name,...overrides});
const CHARACTER_PRESETS_DATA = {
  "david_young": storyPreset("David Young", {}),
  "david": storyPreset("David", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "samuel": storyPreset("Samuel", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "saul": storyPreset("Saul", {"clothingType":"layered_robe","colorOuter":"#6d3f48","colorAccent":"#d4aa45","dualStripe":true,"hairStyle":"curly"}),
  "jonathan": storyPreset("Jonathan", {}),
  "goliath": storyPreset("Goliath", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "abigail": storyPreset("Abigail", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "michal": storyPreset("Michal", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "bathsheba": storyPreset("Bathsheba", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
  "nathan": storyPreset("Nathan", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "absalom": storyPreset("Absalom", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "solomon": storyPreset("Solomon", {"clothingType":"layered_robe","colorOuter":"#6d3f48","colorAccent":"#d4aa45","dualStripe":true,"hairStyle":"curly"}),
};
