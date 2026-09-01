// Canonical character inventory for Enoch. Generated from __docs/enoch-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Enoch",
  "defaultPreset": "enoch",
  "groupLabel": "Enoch characters"
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
  "enoch": storyPreset("Enoch", {}),
  "jared": storyPreset("Jared", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "methuselah": storyPreset("Methuselah", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "family_member": storyPreset("Family Member", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "neighbour": storyPreset("Neighbour", {}),
  "traveller": storyPreset("Traveller", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
};
