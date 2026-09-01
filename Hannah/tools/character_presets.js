// Canonical character inventory for Hannah. Generated from __docs/hannah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Hannah",
  "defaultPreset": "hannah",
  "groupLabel": "Hannah characters"
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
  "hannah": storyPreset("Hannah", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
  "elkanah": storyPreset("Elkanah", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "peninnah": storyPreset("Peninnah", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "eli": storyPreset("Eli", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "samuel_child": storyPreset("Samuel Child", {}),
  "temple_woman": storyPreset("Temple Woman", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
};
