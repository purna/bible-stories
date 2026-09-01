// Canonical character inventory for Joshua. Generated from __docs/joshua-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Joshua",
  "defaultPreset": "joshua",
  "groupLabel": "Joshua characters"
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
  "joshua": storyPreset("Joshua", {}),
  "caleb": storyPreset("Caleb", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "rahab": storyPreset("Rahab", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "achan": storyPreset("Achan", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "eleazar": storyPreset("Eleazar", {}),
  "israelite_scout": storyPreset("Israelite Scout", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "gibeonite": storyPreset("Gibeonite", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "tribal_leader": storyPreset("Tribal Leader", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
};
