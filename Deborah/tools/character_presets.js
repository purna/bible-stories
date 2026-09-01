// Canonical character inventory for Deborah. Generated from __docs/deborah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Deborah",
  "defaultPreset": "deborah",
  "groupLabel": "Deborah characters"
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
  "deborah": storyPreset("Deborah", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
  "barak": storyPreset("Barak", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "jael": storyPreset("Jael", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "sisera": storyPreset("Sisera", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "jabin": storyPreset("Jabin", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true}),
  "israelite_scout": storyPreset("Israelite Scout", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "village_woman": storyPreset("Village Woman", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
};
