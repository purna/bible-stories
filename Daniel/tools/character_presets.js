// Canonical character inventory for Daniel. Generated from __docs/daniel-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Daniel",
  "defaultPreset": "daniel_young",
  "groupLabel": "Daniel characters"
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
  "daniel_young": storyPreset("Daniel Young", {}),
  "daniel": storyPreset("Daniel", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hananiah": storyPreset("Hananiah", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "mishael": storyPreset("Mishael", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "azariah": storyPreset("Azariah", {}),
  "nebuchadnezzar": storyPreset("Nebuchadnezzar", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "belshazzar": storyPreset("Belshazzar", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "darius": storyPreset("Darius", {"clothingType":"layered_robe","colorOuter":"#6d3f48","colorAccent":"#d4aa45","dualStripe":true,"hairStyle":"curly"}),
  "court_official": storyPreset("Court Official", {}),
  "accusers": storyPreset("Accusers", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "angel": storyPreset("Angel", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
};
