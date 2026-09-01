// Canonical character inventory for Elijah. Generated from __docs/eiljah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Elijah",
  "defaultPreset": "elijah",
  "groupLabel": "Elijah characters"
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
  "elijah": storyPreset("Elijah", {}),
  "ahab": storyPreset("Ahab", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "jezebel": storyPreset("Jezebel", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "widow_of_zarephath": storyPreset("Widow Of Zarephath", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "widows_son": storyPreset("Widows Son", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
  "obadiah": storyPreset("Obadiah", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "prophet_of_baal": storyPreset("Prophet Of Baal", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "elisha": storyPreset("Elisha", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "naboth": storyPreset("Naboth", {}),
};
