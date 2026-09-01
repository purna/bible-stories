// Canonical character inventory for Jeremiah. Generated from __docs/jeremiah-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Jeremiah",
  "defaultPreset": "jeremiah",
  "groupLabel": "Jeremiah characters"
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
  "jeremiah": storyPreset("Jeremiah", {}),
  "josiah": storyPreset("Josiah", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "jehoiakim": storyPreset("Jehoiakim", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "zedekiah": storyPreset("Zedekiah", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "baruch": storyPreset("Baruch", {}),
  "ebed_melech": storyPreset("Ebed Melech", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "hananiah": storyPreset("Hananiah", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "temple_priest": storyPreset("Temple Priest", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "babylonian_guard": storyPreset("Babylonian Guard", {}),
};
