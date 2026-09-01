// Canonical character inventory for Samuel. Generated from __docs/samuel-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Samuel",
  "defaultPreset": "samuel_child",
  "groupLabel": "Samuel characters"
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
  "samuel_child": storyPreset("Samuel Child", {}),
  "samuel": storyPreset("Samuel", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hannah": storyPreset("Hannah", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "eli": storyPreset("Eli", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "saul": storyPreset("Saul", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true}),
  "david_young": storyPreset("David Young", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "jonathan": storyPreset("Jonathan", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "jesse": storyPreset("Jesse", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "agag": storyPreset("Agag", {}),
  "israelite_elder": storyPreset("Israelite Elder", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
};
