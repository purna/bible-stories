// Canonical character inventory for Elisha. Generated from __docs/elisha-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Elisha",
  "defaultPreset": "elisha",
  "groupLabel": "Elisha characters"
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
  "elisha": storyPreset("Elisha", {}),
  "elijah": storyPreset("Elijah", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "widow": storyPreset("Widow", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "shunammite_woman": storyPreset("Shunammite Woman", {"beardStyle":"none","hairStyle":"flowing","hatStyle":"headscarf","colorOuter":"#6d3f48"}),
  "gehazi": storyPreset("Gehazi", {}),
  "naaman": storyPreset("Naaman", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "servant_girl": storyPreset("Servant Girl", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf","faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "king_of_israel": storyPreset("King Of Israel", {"clothingType":"layered_robe","colorOuter":"#6d3f48","colorAccent":"#d4aa45","dualStripe":true,"hairStyle":"curly"}),
  "syrian_commander": storyPreset("Syrian Commander", {}),
};
