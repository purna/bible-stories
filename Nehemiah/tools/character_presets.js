// Canonical character inventory for Nehemiah. Generated from __docs/nehemiah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Nehemiah",
  "defaultPreset": "nehemiah",
  "groupLabel": "Nehemiah characters"
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
  "nehemiah": storyPreset("Nehemiah", {}),
  "artaxerxes": storyPreset("Artaxerxes", {"clothingType":"layered_robe","colorOuter":"#395b7a","colorAccent":"#d4aa45","dualStripe":true,"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hanani": storyPreset("Hanani", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "sanballat": storyPreset("Sanballat", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "tobiah": storyPreset("Tobiah", {}),
  "geshem": storyPreset("Geshem", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "ezra": storyPreset("Ezra", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "eliashib": storyPreset("Eliashib", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "wall_builder": storyPreset("Wall Builder", {}),
};
