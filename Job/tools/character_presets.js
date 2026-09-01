// Canonical character inventory for Job. Generated from __docs/job-design-source-of-truth.md.
const CHARACTER_PRESETS_META = {
  "story": "Job",
  "defaultPreset": "job",
  "groupLabel": "Job characters"
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
  "job": storyPreset("Job", {}),
  "jobs_wife": storyPreset("Job’s Wife", {"beardStyle":"none","hairStyle":"braids","hatStyle":"headscarf","noseShape":"aquiline","eyebrowStyle":"thick"}),
  "eliphaz": storyPreset("Eliphaz", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "bildad": storyPreset("Bildad", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "zophar": storyPreset("Zophar", {}),
  "elihu": storyPreset("Elihu", {"noseShape":"aquiline","eyebrowStyle":"thick"}),
  "messenger": storyPreset("Messenger", {"faceShape":"square","chinShape":"square","colorSkin":"#9d6748"}),
  "young_job": storyPreset("Young Job", {"hairStyle":"curly","colorOuter":"#6d3f48"}),
  "restored_daughter": storyPreset("Restored Daughter", {"beardStyle":"none","hairStyle":"tied_back","hatStyle":"headscarf"}),
};
