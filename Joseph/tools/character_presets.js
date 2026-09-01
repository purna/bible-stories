// Canonical character inventory for Joseph. Generated from __docs/joseph-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Joseph",
  "defaultPreset": "joseph_young",
  "groupLabel": "Joseph characters"
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
  "joseph_young": storyPreset("Joseph Young", {}),
  "joseph": storyPreset("Joseph", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "jacob": storyPreset("Jacob", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "reuben": storyPreset("Reuben", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "judah": storyPreset("Judah", {}),
  "benjamin": storyPreset("Benjamin", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "potiphar": storyPreset("Potiphar", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "potiphars_wife": storyPreset("Potiphars Wife", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "cupbearer": storyPreset("Cupbearer", {}),
  "baker": storyPreset("Baker", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "pharaoh": storyPreset("Pharaoh", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
};
