// Canonical character inventory for Abraham. Generated from __docs/abraham-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Abraham",
  "defaultPreset": "abraham",
  "groupLabel": "Abraham characters"
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
  "abraham": storyPreset("Abraham", {}),
  "sarah": storyPreset("Sarah", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
  "lot": storyPreset("Lot", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "hagar": storyPreset("Hagar", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "ishmael": storyPreset("Ishmael", {}),
  "isaac": storyPreset("Isaac", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "melchizedek": storyPreset("Melchizedek", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "abimelech": storyPreset("Abimelech", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "eliezer": storyPreset("Eliezer", {}),
};
