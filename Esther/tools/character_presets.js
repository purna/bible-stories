// Canonical character inventory for Esther. Generated from __docs/esther-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Esther",
  "defaultPreset": "esther",
  "groupLabel": "Esther characters"
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
  "esther": storyPreset("Esther", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
  "mordecai": storyPreset("Mordecai", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "ahasuerus": storyPreset("Ahasuerus", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "vashti": storyPreset("Vashti", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "haman": storyPreset("Haman", {}),
  "zeresh": storyPreset("Zeresh", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hathach": storyPreset("Hathach", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "palace_guard": storyPreset("Palace Guard", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
};
