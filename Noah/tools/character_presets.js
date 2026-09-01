// Canonical character inventory for Noah. Generated from __docs/noah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Noah",
  "defaultPreset": "noah",
  "groupLabel": "Noah characters"
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
  "noah": storyPreset("Noah", {}),
  "noahs_wife": storyPreset("Noah’s Wife", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
  "shem": storyPreset("Shem", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "ham": storyPreset("Ham", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "japheth": storyPreset("Japheth", {}),
  "shems_wife": storyPreset("Shems Wife", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hams_wife": storyPreset("Hams Wife", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "japheths_wife": storyPreset("Japheths Wife", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "neighbour": storyPreset("Neighbour", {}),
  "animal_keeper": storyPreset("Animal Keeper", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
};
