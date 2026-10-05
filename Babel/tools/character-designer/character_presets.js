// Canonical character inventory for Babel. Loaded directly by the browser generator.
const CHARACTER_PRESETS_META = {
  "story": "Babel",
  "defaultPreset": "noah",
  "groupLabel": "Babel characters"
};
const BABEL_BASE = {
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
  "colorLip": "#985e50",
  "materialStyle": "woven_linen"
};
const babelPreset = (name, overrides = {}) => ({ ...BABEL_BASE, name, ...overrides });
const CHARACTER_PRESETS_DATA = {
  "noah": babelPreset("Noah", {"hairStyle":"short"}),
  "nimrod": babelPreset("Nimrod", {"hairStyle":"buzz","beardStyle":"full_round"}),
  "builder": babelPreset("Builder", {"hatStyle":"headscarf","hairStyle":"braids"}),
  "god": babelPreset("The Voice", {"hatStyle":"turban","hairStyle":"flowing"}),
};
