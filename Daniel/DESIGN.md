# Daniel — Interactive Comic Design Document

## Overview

**Story**: The Book of Daniel (Daniel 1-6) — exile, discernment, and conviction across four empires and seventy years. From the capture of Jerusalem in 605 BCE through the fall of Babylon, Daniel holds a line that costs nothing to bend once and everything to bend every day.

**Visual Style**: Toon-shaded cel animation with black outlines, cinematic camera movement, mouse-driven parallax on SVG fallbacks. Rich 3D scenes for key story beats; 2D parallax SVGs for dialogue and transitions.

**Engine**: Three.js r128 with `MeshToonMaterial` (gradientMap `[0,128,255]`), `BackSide` outline meshes, `sRGBEncoding`, `ACESFilmicToneMapping`, shadow maps, `FogExp2` atmospheric fog, and canvas-based particle system. Comic UI, dialogue, and vision overlay are plain DOM/CSS.

## Act Summaries

| Act | Title | Summary | Mood | Palette | Key Visuals |
|-----|-------|---------|------|---------|-------------|
| **Act 1** | The King's Table | Daniel and his friends are taken to Babylon as captives. Daniel resolves not to defile himself with the king's food, proposing a humble vegetable test. God honors their faithfulness, making them healthier than their peers. They enter royal service, setting the pattern for Daniel's life: quiet conviction over compromise. | Ancient, overwhelming foreignness transitioning to quiet resolve. Institutional warmth vs. moral clarity. | **Warm** — golds (`#FFD84D`), deep burgundy (`#8B0000`), warm torch (`#FF6B5B`), cool blue shadows (`#1a0e06`) for contrast at decision moments | Ziggurat, Ishtar Gate, Euphrates river, royal table, Daniel half-shadow/half-light at window |
| **Act 2** | The Dream | Nebuchadnezzar has a terrifying dream and demands his wise men interpret it without being told the dream — an impossible task. Daniel prays, receives the vision, and reveals both the dream (a multi-metal statue) and its meaning (four kingdoms replaced by God's eternal kingdom). The king bows to Daniel's God, and Daniel is promoted. | Terror and impossible demand yielding to divine revelation and vindication | **Warm-to-mystical** — court torch warmth (`#FF6B5B`, `#8B0000`) giving way to dream purples (`#B98CFF`), gold (`#FFD84D`), silver (`#C0C0C0`), bronze (`#cd7f32`), iron (`#888888`), clay (`#C8956C`) | Throne room, five-section rotating statue with light burst, kneeling king with crown removed |
| **Act 3** | The Furnace | Nebuchadnezzar builds a colossal golden statue and commands all to bow. Daniel's friends (Shadrach, Meshach, Abednego) refuse, declaring their God can save them — but even if He doesn't, they will not bow. They are thrown into a furnace heated seven times hotter, but a fourth figure appears with them. They emerge unharmed, and the king blesses their God. | Absurd pride → heroic defiance → terror of fire → divine presence and protection | **Hot** — blinding gold (`#FFD84D`) on desert, fire reds (`#FF6B5B`), ember golds, white flames, divine warm glow in the furnace | Colossal golden statue on Dura, three silhouettes against it, flames with fourth figure walking |
| **Act 4** | The Writing on the Wall | King Belshazzar hosts a drunken feast using sacred vessels from Judah's temple. A disembodied hand appears and writes a divine message on the wall. Daniel interprets: MENE (numbered), TEKEL (weighed), PERES (divided). That night Babylon falls to the Medes and Persians. | Decadent pride → supernatural dread → irreversible judgment → destruction | **Warm-to-cold shift** — feast warmth (purple `#2b1220`, wine `#8B0000`) shifting to ominous cold (`#160a14`), then blood-red sky (`#2a0a00`) for Babylon burning | Banquet table with sacred cups, disembodied hand writing Hebrew words, burning city with smoke and embers |
| **Act 5** | The Den | Under King Darius, Daniel rises to highest rank. Jealous satraps trick Darius into a law forbidding prayer to anyone but the king. Daniel prays openly toward Jerusalem as always. He is thrown to the lions, but God sends an angel to shut their mouths. Darius rescues Daniel and blesses his God. An elderly Daniel concludes his faithful life across four kings and two empires. | New order → conspiracy → quiet devotion → entrapment → angelic peace → faithful rest | **Cold-to-warm** — Persian administrative cool (`#f5f0e6`, `#87CEEB`), conspiracy shadows (`#0A0812`), deep stone den (`#030b18`), angelic teal (`#4ECDC4`), dawn warmth, ending in golden hour (`#FFD84D`) | Persian courtiers in tiers, satraps plotting, Daniel at window with cross shadow, lions' den, elderly Daniel at desk |

## ASCII Sketch Convention

Each panel includes a text-based composition sketch using three layers:
- **B** — Background (sky, walls, distant elements)
- **M** — Middleground (main subjects, architecture)
- **F** — Foreground (closest elements, hands, objects)
- **C** — Camera position/movement
- Characters use initials: **D**=Daniel, **N**=Nebuchadnezzar, **B**=Belshazzar, **DA**=Darius, **F**=Friends, **A**=Angel

Example key:
```
[Camera: orbit / static / push-in]
B: stars, night sky
M: throne, columns, king
F: floor, steps
```

## Toon Shader Technical Specification

| Component | Detail |
|-----------|--------|
| Gradient Map | `DataTexture` 3×1, `LuminanceFormat` (or `RedFormat`), values `[0,128,255]` |
| Main Material | `THREE.MeshToonMaterial` with `gradientMap` — flat 3-band cel-shading |
| Outline Material | `THREE.MeshBasicMaterial` color `0x000000`, `side: BackSide`, `opacity: 0.85` |
| Outline Scale | 1.08x (8% larger than main mesh) — added via `addToonPart()` helper |
| Fog | `THREE.FogExp2` with scene-appropriate color + density (0.008–0.02) |
| Emissive | `THREE.MeshBasicMaterial` for lights, glows, fire — unaffected by toon shader |
| Encoding | `sRGBEncoding` + `ACESFilmicToneMapping` on renderer |
| Shadows | Shadow maps enabled, `powerPreference: 'high-performance'` |

### Fog Application by Scene

| Scene | Fog Color | Density | Mood |
|-------|-----------|---------|------|
| `babylon_city` | `#03010a` | 0.008 | Vast night city |
| `throne_room` | `#1a0e06` | 0.01 | Warm court |
| `statue_dream` | `#1a0e06` | 0.015 | Dream depth |
| `hand_writing` | `#160a14` | 0.02 | Ominous chamber |
| `furnace_lit` | none | 0 | Blazing heat |
| `babylon_falls` | `#2a0a00` | 0.01 | Burning city |
| `lions_den_open` | `#030b18` | 0.02 | Deep stone pit |

---

## Cinematic Camera System

### Camera State (`window._cinema`)
- **theta** — horizontal azimuth angle
- **phi** — vertical inclination angle
- **distance** — camera distance from target
- **roll** — Dutch angle (not yet used in Daniel scenes)
- **targetX/Y/Z** — look target point
- **baseTheta / baseDistance** — reset values after drag interaction

### Mouse/Touch Orbit
- Desktop drag and touch drag both orbit the camera horizontally (theta) and vertically (phi)
- `ORBIT_SPEED = 0.008` — delta pixels to radians
- Wheel orbits horizontally (0.06 rad per tick) when in 3D mode
- Camera auto-animates when not dragging (`cameraAnimation(t)` callback per scene)

### Per-Scene Camera Techniques

| Scene | Technique |
|-------|-----------|
| `babylon_city` | Slow orbit at fixed low phi, wide establishing shot |
| `throne_room` | Orbit around throne dais, torch flicker sync |
| `statue_dream` | Slow orbit + breathing zoom, gentle phi oscillation |
| `hand_writing` | Orbit around chamber, slow reveal of writing |
| `furnace_lit` | Low-angle rise from flames toward ceiling opening |
| `babylon_falls` | Orbit with descent, breathing distance |
| `lions_den_open` | Slow rise from pit floor toward dawn opening |

---

## SVG-Behind-3D Layering System

### Architecture

```
#graphicContainer (z-index: 1)
├── #svgLayer.svg-behind (z-index: 0)  ← ALWAYS loaded, parallax-enabled
├── canvas.three-canvas (z-index: 2)    ← 3D scene on top (transparent)
└── .content-overlay (z-index: 4)       ← Text, bubbles, SFX
```

### How it works:
1. **SVG always loads** — every panel gets an SVG background layer with `data-parallax` depth layers
2. **3D renders transparent** — `WebGLRenderer(alpha: true)` + `scene.background = null` + `setClearColor(0, 0)`
3. **Fog bridges the gap** — each scene's `FogExp2` color matches the intended background, tinting 3D objects to blend with the SVG
4. **Parallax works in background** — mouse movement translates SVG depth layers while 3D camera orbits independently

### CSS z-index stack:
| Layer | Element | z-index | Purpose |
|-------|---------|---------|---------|
| 1 | `#svgLayer.svg-behind` | 0 | SVG background with parallax |
| 2 | `canvas.three-canvas` | 2 | 3D scene (transparent) |
| 4 | `.content-overlay` | 4 | Text, dialogue bubbles, SFX |

---

## SVG Parallax System

### Scenes with parallax (`data-parallax="true"`):
1. `babylon_city` — depth layers: stars (0.2), buildings (0.4-0.6), ground (0.9)
2. `throne_room` — columns (0.3), dais (0.5), throne (0.7), torch flames (1.0)
3. `statue_dream` — star field (0.1), statue body (0.5), light burst (0.8)
4. `hand_writing` — chamber walls (0.2), table (0.5), writing (0.7), hand (0.9)
5. `furnace_lit` — walls (0.2), figures (0.5), flames (0.8-1.0)
6. `babylon_falls` — sky (0.1), buildings (0.3-0.5), fire/smoke (0.7-0.9)
7. `lions_den_open` — pit walls (0.2), lions (0.5), angel light (0.8), Daniel (0.9)

### Behavior:
- Mouse over `#svgLayer[data-parallax]` translates each `[data-depth]` element by `(mouseX * 20 * depth, mouseY * 20 * depth)`
- Depth 0 = static, Depth 1.0 = max 20px displacement
- Resets to (0,0) on mouse leave

---

## Scene Registry

7 3D scene factories registered on `window.SCENE_FACTORIES`:

| Key | Chapter | Mode | Key Elements |
|-----|---------|------|-------------|
| `babylon_city` | 1 | 3D + SVG | Ziggurat, Ishtar Gate, Euphrates river, star field, watchtowers |
| `throne_room` | 2 | 3D + SVG | Four columns, stepped dais, golden throne, wall torches |
| `statue_dream` | 2 | 3D + SVG | Five-section statue (gold/silver/bronze/iron/clay), light burst, rays, vision minigame |
| `babylon_court` | 2 | 3D + SVG | King on dais, 24 courtiers in rows, torch sconces |
| `furnace_lit` | 3 | 3D + SVG | Furnace interior, flame planes, heat shimmer, three figures, divine light |
| `golden_statue` | 3 | 3D + SVG | Colossal golden statue, crowd of 60, desert plain |
| `hand_writing` | 4 | 3D + SVG | Stone chamber, glowing Hebrew words, disembodied hand, banquet table |
| `babylon_falls` | 4 | 3D + SVG | Burning city, breached walls, Hanging Gardens, smoke, embers, fire spheres |
| `lions_den_open` | 5 | 3D + SVG | Stone pit, Daniel, six cowering lions, angelic teal light, dawn beam |
| `persian_court` | 5 | 3D + SVG | Darius dais, 24 satraps in tiers, morning light, tapestries |
| `daniel_prays` | 2 | 3D + SVG | Daniel kneeling, night city, oil lamp, star field |
| `nebuchadnezzar_bows` | 2 | 3D + SVG | King kneeling, crown on ground, dawn light, courtiers |
| `daniel_praying_window` | 5 | 3D + SVG | Daniel at window, cross shadow, city below, morning light |

### Fallback Behavior
- If Three.js fails to load or `SCENE_FACTORIES[key]` is missing, falls back to SVG: `assets/svg/scene_{key}.svg`
- SVG layers support `data-parallax` depth layers when `Parallax` module is attached
- Vision scenes use the 3D scene as background with HTML overlay for fragment interaction

---

## Asset Format

### 3D Scene Files (`scenes/*.js`)
Executable scene factories defining:
- `window.initSceneN(group)` — adds geometry meshes with toon-shader conversion
- `window.initSceneLights(group)` — adds lights
- `window.initAllScenes(group)` — convenience wrapper
- `cameraAnimation(t)` — per-scene camera choreography

### SVG Files (`assets/svg/scene_*.svg`)
Layered SVG with `data-parallax` depth values for mouse-driven parallax fallback.

### Vision Scene Data (`data/scenes/*.json`)
Interactive vision minigame definitions with fragment positions, decoy flags, timers, and stakes text.

### Files in `/scenes/`:

| File | Scene | Notes |
|------|-------|-------|
| `babylon_city.js` | babylon_city | City skyline, ziggurat, river, gates |
| `throne_room.js` | throne_room | Columns, dais, throne, torches |
| `statue_dream.js` | statue_dream | Multi-material statue, dream glow, star field |
| `babylon_court.js` | babylon_court | King on dais, 24 courtiers, torch sconces |
| `furnace_lit.js` | furnace_lit | Fire pit, molten stone, heat distortion |
| `golden_statue.js` | golden_statue | Colossal statue, crowd of 60, desert plain |
| `hand_writing.js` | hand_writing | Glowing Hebrew letters, ethereal hand, palace walls |
| `babylon_falls.js` | babylon_falls | Burning city, breached walls, smoke, embers |
| `lions_den_open.js` | lions_den_open | Pit opening, lions, angelic light, Daniel |
| `persian_court.js` | persian_court | Darius dais, 24 satraps in tiers, morning light |
| `daniel_prays.js` | daniel_prays | Daniel kneeling, night city, oil lamp, stars |
| `nebuchadnezzar_bows.js` | nebuchadnezzar_bows | King kneeling, dawn light, courtiers in shock |
| `daniel_praying_window.js` | daniel_praying_window | Daniel at window, cross shadow, city below |

### Files in `/assets/svg/`:

| File | Scene |
|------|-------|
| `scene_babylon_city.svg` | Babylon cityscape |
| `scene_babylon_court.svg` | Royal court |
| `scene_babylon_falls.svg` | Babylon burning |
| `scene_belshazzar_feast.svg` | Belshazzar's feast |
| `scene_daniel_decides.svg` | Daniel at the table |
| `scene_daniel_healthier.svg` | Ten-day test results |
| `scene_daniel_old_man.svg` | Elderly Daniel |
| `scene_daniel_praying_window.svg` | Daniel praying at window |
| `scene_daniel_prays.svg` | Daniel in prayer |
| `scene_daniel_reads.svg` | Daniel reading scrolls |
| `scene_daniel_serve.svg` | Daniel in service |
| `scene_daniel_vegetable_test.svg` | Vegetable test |
| `scene_darius_distressed.svg` | King Darius distressed |
| `scene_darius_running.svg` | Darius running to the den |
| `scene_four_in_furnace.svg` | Fourth figure in the fire |
| `scene_friends_standing.svg` | Shadrach, Meshach, Abednego |
| `scene_furnace_lit.svg` | The furnace |
| `scene_golden_statue.svg` | Golden statue on Dura |
| `scene_hand_writing.svg` | Writing on the wall |
| `scene_lions_den_open.svg` | Lions' den opened |
| `scene_lions_den_sealed.svg` | Den sealed |
| `scene_nebuchadnezzar_bows.svg` | King bows to Daniel's God |
| `scene_persian_court.svg` | Persian court |
| `scene_plain_of_dura.svg` | Plain of Dura |
| `scene_royal_table.svg` | Royal dining table |
| `scene_satraps_plotting.svg` | Satraps plotting |
| `scene_statue_dream.svg` | Statue dream vision |
| `scene_throne_room.svg` | Throne room |
| `scene_training_house.svg` | Training house interior |

### Files in `/data/scenes/`:

| File | Vision Scene |
|------|-------------|
| `statue_dream.json` | Chapter 2 interpretation fragments |
| `writing_wall.json` | Chapter 5 interpretation fragments |

---

## Panel-by-Panel Design

### Chapter 1: The King's Table

#### 1-1: Babylon Cityscape (3D: `babylon_city`)
- **Line**: "Babylon, 605 BCE. The young men of Judah had been taken far from home."
- **Sketch**:
  ```
  [Camera: slow orbit, low phi]
  B: stars, night sky, moon
  M: ziggurat, Ishtar Gate, city walls, watchtowers
  F: Euphrates river
  ```
- **Background**: Night sky (`#03010a`), star field, distant moon silhouette
- **Middleground**: Ziggurat (5 stepped boxes), Ishtar Gate (arch + gold plane), city walls (12 randomized boxes), 6 watchtowers
- **Foreground**: Euphrates river plane (transparent teal, 40% opacity)
- **Environment**: `FogExp2(#03010a, 0.008)` — vast night depth
- **Colors**: Stone, deep red, skin, bark for buildings; gold gate glow; teal river
- **Lighting**: Ambient 0.5, directional sunset gold 1.5 from `(100, 80, 50)`, gate glow emissive plane
- **Mood**: Ancient, overwhelming, foreign
- **Animation**: Subtle emissive pulse on wall materials (`setHSL` with sine)
- **Camera**: Slow orbit at fixed low phi, target at `(-30, -3, -30)`
- **3D**: `scenes/babylon_city.js`
- **SVG**: `assets/svg/scene_babylon_city.svg`

#### 1-2: Training House Interior (svg: `training_house`)
- **Line**: "King Nebuchadnezzar ordered his best captives trained for royal service."
- **Sketch**:
  ```
  [Camera: static, slight Dutch tilt]
  B: stone walls, shelves
  M: table, scroll, lamp
  F: D, H, M, A (seated)
  ```
- **Background**: Stone walls, shelves of papyrus lining the back wall
- **Middleground**: Low table with scroll and stylus, oil lamp
- **Foreground**: Young men (Daniel, Hananiah, Mishael, Azariah) seated at the table
- **Environment**: No fog — interior lighting only
- **Colors**: Warm lamp glow (`#FFD84D`), cool stone (`#2a1a0a`), papyrus (`#f5f0e6`)
- **Lighting**: Oil lamp warm point light, ambient fill
- **Mood**: Cramped, institutional, between two worlds
- **Animation**: Parallax on shelves (depth 0.4) vs. figures (depth 0.8)
- **Camera**: Static. Slight Dutch tilt (2-3 degrees) to convey unease.
- **SVG**: `assets/svg/scene_training_house.svg`

#### 1-3: Royal Table (svg: `royal_table`)
- **Line**: "You will eat from MY royal table — the finest food and wine in all Babylon!"
- **Sketch**:
  ```
  [Camera: static overhead]
  B: hall walls, tapestries
  M: golden table, platters, goblets
  F: king's cup (brightest)
  ```
- **Background**: Banquet hall walls, hanging tapestries
- **Middleground**: Long golden table with platters of food, wine flagons, goblets
- **Foreground**: King's golden cup at dead center (brightest object)
- **Environment**: No fog — warm interior
- **Colors**: Rich gold (`#FFD84D`), deep burgundy (`#8B0000`), burnished bronze (`#cd7f32`), dark wood (`#1e0f0a`)
- **Lighting**: Overhead chandelier brass rods, oil lamps, strong top-down light
- **Mood**: Excess, temptation, abundance
- **Animation**: Parallax on hanging lamps (depth 0.9), table (depth 0.5), floor (depth 0.1)
- **Camera**: Static overhead.
- **SVG**: `assets/svg/scene_royal_table.svg`

#### 1-4: Royal Table (repeat)
- Same scene, speaker shift from Nebuchadnezzar → Narrator. No new design needed.
- **SVG**: `assets/svg/scene_royal_table.svg`

#### 1-5: Daniel Decides (svg: `daniel_decides`)
- **Line**: "I cannot eat the king's food. Not because I'm ungrateful. But because there's one thing I won't give up."
- **Sketch**:
  ```
  [Camera: static, slight push-in]
  B: window, stone walls
  M: table, platter
  F: D (half shadow, half light)
  ```
- **Background**: High window, stone walls in shadow
- **Middleground**: Royal table with platter (blurred backdrop)
- **Foreground**: Daniel at table, half in shadow, half in window light
- **Environment**: No fog — single light source
- **Colors**: Stark contrast — warm gold light (`#FFD84D`) on cool blue shadows (`#1a0e06`). Daniel's robes are neutral brown (`#8b5a2b`).
- **Lighting**: Single shaft of light from high window — key light source
- **Mood**: Moral weight, quiet resolve
- **Animation**: Subtle glow pulse on the window light. Parallax on background elements.
- **Camera**: Static. Slight push-in on the choice moment.
- **SVG**: `assets/svg/scene_daniel_decides.svg`

#### 1-6: Vegetable Test (svg: `daniel_vegetable_test`)
- **Line**: "Give us vegetables and water for ten days."
- **Sketch**:
  ```
  [Camera: static]
  B: arched window, morning light
  M: wooden table, vegetables, jugs
  F: D's hand reaching
  ```
- **Background**: High arched window, morning light
- **Middleground**: Simple wooden table with vegetables, lentils, water jugs
- **Foreground**: Daniel's hand reaching for a cucumber
- **Environment**: No fog — soft diffused morning light
- **Colors**: Earth tones (`#8b5a2b`, `#6b3a1a`), fresh green vegetables (`#4a7a3a`), water reflections (`#4ECDC4`)
- **Lighting**: Morning light through window, soft and diffused
- **Mood**: Humble but dignified, simplicity as strength
- **Animation**: Gentle morning light glow. Subtle sway of plant leaves. Parallax on window (depth 0.9), table (depth 0.5).
- **Camera**: Static.
- **SVG**: `assets/svg/scene_daniel_vegetable_test.svg`

#### 1-7: Daniel Healthier (svg: `daniel_healthier`)
- **Line**: "At the end of ten days, Daniel and his friends looked healthier..."
- **Sketch**:
  ```
  [Camera: static, split-screen]
  B: wall background
  M: D's group (left) | others (right)
  F: none — comparison focus
  ```
- **Background**: Wall background
- **Middleground**: Split composition — Daniel's group on left, other captives on right
- **Foreground**: None — comparison is the focus
- **Environment**: No fog — late afternoon golden hour
- **Colors**: Dawn colors — soft gold (`#FFD84D`), pale peach (`#ffaa80`), muted earth (`#8b5a2b`)
- **Lighting**: Late afternoon light, golden hour tones on faces
- **Mood**: God's provision, quiet vindication
- **Animation**: Subtle glow on Daniel's group. No movement otherwise.
- **Camera**: Static. Split-screen composition. Center divider is a shadow/gap.
- **SVG**: `assets/svg/scene_daniel_healthier.svg`

#### 1-8: Daniel Serving (svg: `daniel_serve`)
- **Line**: "They didn't make a speech about it. They didn't demand to be noticed."
- **Sketch**:
  ```
  [Camera: medium shot]
  B: stone walls, torches
  M: desk, scrolls
  F: D writing, others bringing materials
  ```
- **Background**: Stone walls, torches mounted on walls
- **Middleground**: Daniel at a desk, writing. Scrolls and reports.
- **Foreground**: Other young men bringing materials
- **Environment**: No fog — warm torchlight interior
- **Colors**: Warm torch (`#FF6B5B`), parchment (`#f5f0e6`), royal robes (`#4a2a04`), gold (`#FFD84D`)
- **Lighting**: Lantern light from torches, warm, flickering
- **Mood**: Faithful service, quiet diligence
- **Animation**: Torch flicker (opacity pulse). Subtle writing animation on the scroll. Parallax on torch flames (depth 0.9), desk (depth 0.5), background figures (depth 0.2).
- **Camera**: Medium shot, desk in foreground.
- **SVG**: `assets/svg/scene_daniel_serve.svg`

#### 1-9: Babylon City (repeat) — epilogue of chapter 1
- **Sketch**:
  ```
  [Camera: slow orbit]
  B: stars, night sky
  M: ziggurat, city walls
  F: river
  ```
- **3D**: `scenes/babylon_city.js`
- **SVG**: `assets/svg/scene_babylon_city.svg`

---

### Chapter 2: The Dream

#### 2-1: Throne Room — The Dream (3D: `throne_room`)
- **Line**: "The king had a dream that terrified him."
- **Sketch**:
  ```
  [Camera: orbit around dais]
  B: stars, night sky
  M: 4 columns, dais, throne, N (agitated)
  F: stone floor, torch flames
  ```
- **Background**: Star field (200 stars), sky color `#1a0e06`, high arched windows with moonlight
- **Middleground**: Four towering columns framing the dais, stepped platforms, golden throne with arms, wall torches
- **Foreground**: Stone floor plane
- **Environment**: `FogExp2(#1a0e06, 0.01)` soft warm mist
- **Colors**: Stone, gold throne accents, red torch glow
- **Lighting**: Ambient 0.4, directional court light 1.0 from above, torch point lights (red, intensity flickering)
- **Mood**: Imposing, ancient, powerful
- **Animation**: Torch flicker (`intensity = 1.5 + sin(t*5)*0.3`)
- **Camera**: Orbit around throne dais, phi oscillation
- **3D**: `scenes/throne_room.js`
- **SVG**: `assets/svg/scene_throne_room.svg`

#### 2-2: Royal Court (3D: `babylon_court`)
- **Line**: "Interpret my dream — or ALL the wise men of Babylon die."
- **Sketch**:
  ```
  [Camera: static, slight low angle]
  B: stone walls, torch sconces
  M: N (elevated), 24 courtiers in rows
  F: floor, torch flames
  ```
- **Background**: Stone walls, torch sconces
- **Middleground**: King at center, surrounded by court — fear, confusion on faces
- **Foreground**: None — crowd is the subject
- **Environment**: No fog — torchlit interior
- **Colors**: Fear-inducing — deep red (`#8B0000`) shadows, harsh gold (`#FFD84D`) highlights, warm torch (`#FF6B5B`)
- **Lighting**: Torch sconces along walls, king lit from below by firelight
- **Mood**: Terror, impossible demand
- **Animation**: Torch flicker. Subtle crowd shiver animation. Parallax on torch sconces (depth 0.9), crowd (depth 0.5), walls (depth 0.2).
- **Camera**: Static. Tight crowd composition. The king is slightly elevated.
- **3D**: `scenes/babylon_court.js`
- **SVG**: `assets/svg/scene_babylon_court.svg`

#### 2-3: Daniel Prays (3D: `daniel_prays`)
- **Line**: "No human could answer. But Daniel didn't guess. He prayed first."
- **Sketch**:
  ```
  [Camera: static, through window frame]
  B: night sky, stars, city below
  M: window frame, oil lamp
  F: D kneeling, head bowed
  ```
- **Background**: Night sky with stars visible through window
- **Middleground**: City spread out below the window
- **Foreground**: Daniel kneeling by window, head bowed
- **Environment**: No fog — night exterior
- **Colors**: Cool blue (`#4ECDC4`), warm lamp (`#FFD84D`), city lights (`#cd7f32`), night (`#03010a`)
- **Lighting**: Soft blue moonlight through window, warm oil lamp glow on nearby table
- **Mood**: Intimacy, turning to God
- **Animation**: Gentle prayer glow. Subtle star twinkle. Parallax on window stars (depth 0.95), Daniel (depth 0.7), city (depth 0.3).
- **Camera**: Static. Through the window frame.
- **SVG**: `assets/svg/scene_daniel_prays.svg`

#### 2-4: Daniel Prays (repeat with dialogue)
- Same scene, different line text.
- **SVG**: `assets/svg/scene_daniel_prays.svg`

#### 2-5: Statue Dream Vision (3D: `statue_dream`)
- **Line**: "Your dream: a statue of terrifying brightness. Gold head. Silver chest. Bronze belly. Iron legs. Feet of clay."
- **Sketch**:
  ```
  [Camera: orbit + breathing zoom]
  B: star field, dream clouds
  M: 5-section statue (Au/Ag/Bronze/Fe/Clay)
  F: ground, light rays
  ```
- **Background**: Star field (300 white + 50 gold + 30 purple stars), sky `#1a0e06`, dream clouds
- **Middleground**: Five-section statue on raised platform (gold head, silver chest, bronze belly, iron legs, clay feet), light burst above, 8 light rays
- **Foreground**: Ground plane
- **Environment**: `FogExp2(#1a0e06, 0.015)` dream depth
- **Colors**: Gold (`#FFD84D`), silver (`#C0C0C0`), bronze (`#cd7f32`), iron (`#888888`), clay (`#C8956C`), purple dream accents (`#B98CFF`)
- **Lighting**: Ambient 0.4, directional 1.2, light burst point light (white, pulsing)
- **Mood**: Divine revelation, vast empire, God's kingdom above all
- **Animation**: Statue slow rotation (`rotation.y = t * 0.1`), light burst pulse, ray opacity pulse, breathing zoom
- **Camera**: Orbit + breathing zoom (`distance = base + sin(t*0.3)*5`), gentle phi oscillation
- **Vision Minigame**: 5 real fragments (statue sections) + 1 decoy (shining bronze), 60-second risk timer
- **3D**: `scenes/statue_dream.js`
- **SVG**: `assets/svg/scene_statue_dream.svg`

#### 2-6: Statue Dream Vision (repeat with dialogue)
- Same scene, different line text.
- **3D**: `scenes/statue_dream.js`
- **SVG**: `assets/svg/scene_statue_dream.svg`

#### 2-7: Vision Minigame (vision: `statue_dream`)
- **Line**: "Name the dream correctly — or every wise man in Babylon dies."
- **Sketch**:
  ```
  [Camera: orbit + breathing zoom]
  B: star field, dream clouds
  M: 5-section statue
  F: HTML fragment hotspots
  ```
- **Background**: Star field, dream clouds
- **Middleground**: Five-section statue on platform
- **Foreground**: HTML fragment hotspots over the statue sections
- **Environment**: `FogExp2(#1a0e06, 0.015)` dream depth
- **Colors**: Gold, silver, bronze, iron, clay sections
- **Lighting**: Ambient 0.4, directional 1.2, light burst point light
- **Mood**: Divine revelation, urgency
- **Animation**: Light burst pulse, ray opacity pulse
- **Camera**: Orbit + breathing zoom
- **3D**: `scenes/statue_dream.js`
- **JSON**: `data/scenes/statue_dream.json`
- **SVG**: `assets/svg/scene_statue_dream.svg`

#### 2-8: Nebuchadnezzar Bows (3D: `nebuchadnezzar_bows`)
- **Line**: "Your God is the God of gods and Lord of kings!"
- **Sketch**:
  ```
  [Camera: static, low angle]
  B: palace windows, dawn light
  M: N kneeling, crown in hand
  F: D standing, courtiers (shock)
  ```
- **Background**: Palace windows, dawn light streaming in
- **Middleground**: King kneeling before Daniel, crown in hand
- **Foreground**: Courtiers looking on in shock
- **Environment**: No fog — dawn interior
- **Colors**: Soft dawn purple (`#B98CFF`), gold (`#FFD84D`), royal robes (`#4a2a04`), morning light (`#ffddaa`)
- **Lighting**: Dawn light through windows, king has removed his crown
- **Mood**: Humility, vindication
- **Animation**: Subtle crown glow. Gentle dawn light. Parallax on background courtiers (depth 0.3), king (depth 0.6), crown (depth 1.0).
- **Camera**: Static. Low angle on the king kneeling, Daniel standing.
- **SVG**: `assets/svg/scene_nebuchadnezzar_bows.svg`

#### 2-9: Daniel Serves (repeat from 1-8) — epilogue
- **Sketch**:
  ```
  [Camera: medium shot]
  B: stone walls, torches
  M: desk, scrolls
  F: D writing
  ```
- **SVG**: `assets/svg/scene_daniel_serve.svg`

---

### Chapter 3: The Furnace

#### 3-1: Golden Statue on Dura (3D: `golden_statue`)
- **Line**: "Nebuchadnezzar built a colossal golden statue on the plain of Dura."
- **Sketch**:
  ```
  [Camera: slow orbit, height 12]
  B: desert sky, horizon
  M: golden statue (60m tall), platform
  F: crowd of 60 people, desert ground
  ```
- **Background**: Desert sky, distant horizon
- **Middleground**: Colossal golden image on raised platform, thousands of people in rows below
- **Foreground**: Desert ground plane
- **Environment**: No fog — harsh midday sun
- **Colors**: Blinding gold (`#FFD84D`), desert earth (`#8b5a2b`), blue sky (`#87CEEB`), people in muted colors
- **Lighting**: Harsh midday directional, bright and shadow-casting
- **Mood**: Absurd scale of the king's pride, imposing but false
- **Animation**: Slow camera orbit. Flags flutter in the wind.
- **Camera**: Slow orbit, distance 35 units, height 12 units.
- **3D**: `scenes/golden_statue.js`
- **SVG**: `assets/svg/scene_golden_statue.svg`

#### 3-2: Royal Command (repeat scene, speaker shift)
- **Line**: "BOW DOWN! When the music plays — EVERYONE bows to my image!"
- **Sketch**:
  ```
  [Camera: slow orbit]
  B: desert sky
  M: golden statue, crowd below
  F: desert ground
  ```
- **3D**: `scenes/golden_statue.js`
- **SVG**: `assets/svg/scene_golden_statue.svg`

#### 3-3: Plain of Dura (svg: `plain_of_dura`)
- **Line**: "This test was not designed for Daniel. It was designed for his friends."
- **Sketch**:
  ```
  [Camera: static wide]
  B: desert horizon, sky
  M: golden statue (bg), crowd (rows)
  F: F, M, A standing apart (left)
  ```
- **Background**: Desert horizon, sky
- **Middleground**: Golden statue looming behind, crowd indistinguishable in rows
- **Foreground**: Three figures (Shadrach, Meshach, Abednego) standing apart
- **Environment**: No fog — overhead sun, stark shadows
- **Colors**: Desert gold (`#cd7f32`), statue shine (`#FFD84D`), crowd in muted blues and browns, sky (`#87CEEB` at low opacity)
- **Lighting**: Overhead sun, stark shadows. The plain stretches to the horizon.
- **Mood**: Isolation, choice between conforming and standing alone
- **Animation**: Subtle wind on robes. Crowd rustle animation. Parallax on crowd (depth 0.3), statue (depth 0.5), three friends (depth 0.9).
- **Camera**: Static wide.
- **SVG**: `assets/svg/scene_plain_of_dura.svg`

#### 3-4: Friends Standing (svg: `friends_standing`)
- **Line**: "O king — our God is able to save us. But even if he doesn't — we will not bow."
- **Sketch**:
  ```
  [Camera: static, 3/4 view]
  B: sky gradient, statue (bg, blurred)
  M: F, M, A (close group)
  F: long shadows stretching
  ```
- **Background**: Sky gradient, golden statue out of focus behind
- **Middleground**: Three friends in close group, shoulders squared
- **Foreground**: Their shadows stretching long toward the statue
- **Environment**: No fog — backlit exterior
- **Colors**: Silhouette black (`#0A0812`), statue gold (`#FFD84D` at 40% opacity), sky gradient
- **Lighting**: Backlighting from the sun. The three friends are silhouettes against the golden statue.
- **Mood**: Heroic defiance regardless of outcome
- **Animation**: Subtle glow on their silhouette. Shadow stretch animation. Parallax on background (depth 0.2), friends (depth 0.7).
- **Camera**: Static. Three-quarter view.
- **SVG**: `assets/svg/scene_friends_standing.svg`

#### 3-5: Friends Standing (repeat with full dialogue)
- Same scene, full declaration.
- **Sketch**:
  ```
  [Camera: static, 3/4 view]
  B: sky gradient, statue (bg, blurred)
  M: F, M, A (close group)
  F: long shadows stretching
  ```
- **SVG**: `assets/svg/scene_friends_standing.svg`

#### 3-6: Furnace Lit (3D: `furnace_lit`)
- **Line**: "Heat the furnace SEVEN TIMES HOTTER! Bind them! THROW THEM IN!"
- **Sketch**:
  ```
  [Camera: low-angle rise toward opening]
  B: stone ceiling, dark interior
  M: stone walls, 3 figures bound
  F: 40 flame planes, heat shimmer
  ```
- **Background**: Dark interior `#2a0a00`, stone ceiling above
- **Middleground**: Stone walls, floor, ceiling opening (ring geometry), three figures bound, divine light sphere
- **Foreground**: 40 flame planes, 20 heat shimmer planes
- **Environment**: No fog — the heat should feel unbroken
- **Colors**: Red, ember, gold, white flames; stone; robe-colored figures
- **Lighting**: Divine light (gold, intensity 2, pulsing), candle flicker (red, intensity 1±0.3)
- **Mood**: Terror, heat, divine presence in the fire
- **Animation**: Flame opacity/scale pulse (per-flame speed/offset), heat shimmer rise, divine light pulse
- **Camera**: Low-angle rise toward ceiling opening, phi = 1.2 (shallow angle)
- **3D**: `scenes/furnace_lit.js`
- **SVG**: `assets/svg/scene_furnace_lit.svg`

#### 3-7: Furnace Lit (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: low-angle rise]
  B: stone ceiling
  M: furnace walls, figures
  F: flames, heat shimmer
  ```
- **3D**: `scenes/furnace_lit.js`
- **SVG**: `assets/svg/scene_furnace_lit.svg`

#### 3-8: Four in Furnace (svg: `four_in_furnace`)
- **Line**: "But I see FOUR walking in the fire. And the fourth looks like a son of the gods."
- **Sketch**:
  ```
  [Camera: static, tight]
  B: dark interior, firelight
  M: F, M, A walking + 4th figure (glowing)
  F: flames (sides)
  ```
- **Background**: Firelight from within, dark interior
- **Middleground**: Three friends walking between flames, fourth figure (divine) with soft white glow
- **Foreground**: Flames framing the sides
- **Environment**: No fog — fire interior
- **Colors**: Fire (`#FF6B5B`, `#FFD84D`), figures in neutral tones, fourth figure in soft white glow (`#ffffff` at 50% opacity)
- **Lighting**: Firelight from within. The three friends are visible, but there's a fourth figure beside them.
- **Mood**: Divine presence, protective not threatening
- **Animation**: Fire pulse animation. Subtle glow around the fourth figure. Parallax on flames (depth 0.9), figures (depth 0.5).
- **Camera**: Static. Tight on the four figures.
- **SVG**: `assets/svg/scene_four_in_furnace.svg`

#### 3-9: Friends Standing (repeat)
- **Sketch**:
  ```
  [Camera: static, 3/4 view]
  B: sky gradient
  M: F, M, A
  F: shadows
  ```
- **SVG**: `assets/svg/scene_friends_standing.svg`

#### 3-10: Four in Furnace (repeat) — closing
- **Sketch**:
  ```
  [Camera: static, tight]
  B: dark interior
  M: F, M, A + 4th figure
  F: flames
  ```
- **SVG**: `assets/svg/scene_four_in_furnace.svg`

---

### Chapter 4: The Writing on the Wall

#### 4-1: Belshazzar's Feast (svg: `belshazzar_feast`)
- **Line**: "Tonight we drink from the vessels of Judah's God!"
- **Sketch**:
  ```
  [Camera: static, over-table]
  B: hall walls, hanging torches
  M: banquet table, B reclining, servants
  F: sacred temple cups (center)
  ```
- **Background**: Banquet hall walls, hanging torches
- **Middleground**: Royal banquet table, Belshazzar reclining at head, servants pouring wine
- **Foreground**: Sacred temple cups displayed prominently at center
- **Environment**: No fog — warm torchlight interior
- **Colors**: Deep purple (`#2b1220`), gold (`#FFD84D`), wine red (`#8B0000`), temple gold (`#FFD84D` at high opacity)
- **Lighting**: Torch and oil lamp light, warm decadent atmosphere. Wine cups catch the light.
- **Mood**: Decadence, pride, desecration
- **Animation**: Wine pour animation. Torch flicker. Gentle cup clink. Parallax on hanging torches (depth 0.9), table (depth 0.5), background figures (depth 0.2).
- **Camera**: Static. Over-the-table perspective.
- **SVG**: `assets/svg/scene_belshazzar_feast.svg`

#### 4-2: Belshazzar's Feast (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: static, over-table]
  B: hall walls, torches
  M: table, B, servants
  F: sacred cups
  ```
- **SVG**: `assets/svg/scene_belshazzar_feast.svg`

#### 4-3: Hand Writing — Vision Revealed (3D: `hand_writing`)
- **Line**: "Suddenly, a human hand appeared and wrote on the wall."
- **Sketch**:
  ```
  [Camera: slow orbit around chamber]
  B: dark chamber walls, stone
  M: 3 glowing Hebrew words, banquet table
  F: disembodied hand, courtiers fleeing
  ```
- **Background**: Dark chamber `#160a14`, stone walls and floor
- **Middleground**: Three glowing Hebrew words on back wall, banquet table with golden cups, blood-red table
- **Foreground**: Disembodied hand (arm cylinder + palm sphere + 4 finger boxes) emerging from shadow, courtiers fleeing
- **Environment**: `FogExp2(#160a14, 0.02)` ominous mist
- **Colors**: Gold words (`#FFD84D`), stone walls, deep red table, skin-toned hand, red candle glow
- **Lighting**: Writing point light (gold, intensity 2±0.5), candle point light (red, intensity 1±0.3), ambient 0.3
- **Mood**: Supernatural, judgment, irreversible
- **Animation**: Word glow pulse, hand subtle sway, candle flicker, divine light pulse
- **Camera**: Slow orbit around chamber, target at `(0, -2, -5)`
- **Vision Minigame**: 3 real fragments (MENE, TEKEL, PERES) + 1 decoy (blood wine), 45-second risk timer
- **3D**: `scenes/hand_writing.js`
- **SVG**: `assets/svg/scene_hand_writing.svg`

#### 4-4: Hand Writing (repeat) — king's panic
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: slow orbit]
  B: chamber walls
  M: glowing words
  F: hand, fleeing courtiers
  ```
- **3D**: `scenes/hand_writing.js`
- **SVG**: `assets/svg/scene_hand_writing.svg`

#### 4-5: Daniel Reads (svg: `daniel_reads`)
- **Line**: "No one could read it. The queen remembered Daniel."
- **Sketch**:
  ```
  [Camera: static]
  B: stone wall, archway to writing
  M: D (elderly), scrolls, inkwell
  F: documents, desk items
  ```
- **Background**: Stone wall with writing visible through archway
- **Middleground**: Old Daniel reading scrolls, inkwell, desk
- **Foreground**: Scrolls and documents
- **Environment**: No fog — study interior
- **Colors**: Warm lamp (`#FFD84D`), aged parchment (`#f5f0e6`), Daniel's robes (`#8b5a2b`), wall stone (`#160a14`)
- **Lighting**: Soft study light from oil lamp. Daniel's face illuminated by understanding.
- **Mood**: Wisdom, calm authority
- **Animation**: Subtle lamp glow. Gentle parchment rustle. Parallax on lamp (depth 0.9), Daniel (depth 0.7), wall writing (depth 0.3).
- **Camera**: Static. Daniel at left, archway to wall at right.
- **SVG**: `assets/svg/scene_daniel_reads.svg`

#### 4-6: Daniel Reads — Vision Choice (vision: `writing_wall`)
- **Line**: "The writing says: MENE — God has numbered your kingdom. TEKEL — you have been weighed. PERES — your kingdom is divided."
- **Sketch**:
  ```
  [Camera: slow orbit]
  B: dark chamber walls
  M: 3 glowing Hebrew words
  F: HTML fragment hotspots
  ```
- **Background**: Dark chamber, stone walls
- **Middleground**: Three glowing Hebrew words on wall
- **Foreground**: HTML fragment hotspots over the writing
- **Environment**: `FogExp2(#160a14, 0.02)` ominous mist
- **Colors**: Gold words, stone walls
- **Lighting**: Writing point light (gold, intensity 2±0.5)
- **Mood**: Divine judgment in written form
- **Animation**: Word glow pulse
- **Camera**: Slow orbit around chamber
- **3D**: `scenes/hand_writing.js`
- **JSON**: `data/scenes/writing_wall.json`
- **SVG**: `assets/svg/scene_hand_writing.svg`

#### 4-7: Daniel Reads (repeat with full interpretation)
- **Sketch**:
  ```
  [Camera: static]
  B: stone wall, archway
  M: D, scrolls
  F: documents
  ```
- **SVG**: `assets/svg/scene_daniel_reads.svg`

#### 4-9: Babylon Falls (3D: `babylon_falls`)
- **Line**: "That very night, Belshazzar was killed. Babylon fell."
- **Sketch**:
  ```
  [Camera: orbit with descent]
  B: blood-red sky
  M: burning buildings, breached walls, Hanging Gardens
  F: smoke, fire, embers
  ```
- **Background**: Blood-red sky `#2a0a00`
- **Middleground**: 30 randomized building blocks, breached wall sections, Hanging Gardens (3 terraced spheres)
- **Foreground**: 30 smoke spheres, 15 fire spheres, 50 ember spheres
- **Environment**: `FogExp2(#2a0a00, 0.01)` burning haze
- **Colors**: Stone, deep red, skin, bark for buildings; red/gold/white fire; gray smoke
- **Lighting**: Sky point light (deep red, intensity 1±0.2), ambient 0.3
- **Mood**: Destruction, tragedy, prophecy fulfilled
- **Animation**: Smoke rise/scale, fire pulse/scale, ember float, sky light pulse
- **Camera**: Orbit with descent, phi oscillation, breathing distance
- **3D**: `scenes/babylon_falls.js`
- **SVG**: `assets/svg/scene_babylon_falls.svg`

---

### Chapter 5: The Den

#### 5-1: Persian Court (3D: `persian_court`)
- **Line**: "Under King Darius the Mede, Daniel rose again to the highest rank."
- **Sketch**:
  ```
  [Camera: static, Darius at center]
  B: palace walls, high windows
  M: DA (dais, crown), 24 satraps in tiers
  F: marble floor, tapestries
  ```
- **Background**: Palace walls, high windows with morning light
- **Middleground**: Darius at dais, satraps and advisors arranged in tiers
- **Foreground**: None — court atmosphere
- **Environment**: No fog — morning administrative light
- **Colors**: Persian blue (`#4a2a04`), administrative white (`#f5f0e6`), gold trim (`#FFD84D`), morning light (`#87CEEB` at 5% opacity)
- **Lighting**: Morning light through high windows. Neutral, no warmth.
- **Mood**: New power structure, systematic, less ornate than Babylon
- **Animation**: Subtle flag ripple. Gentle movement of courtiers. Parallax on hanging tapestries (depth 0.8), courtiers (depth 0.5), floor pattern (depth 0.2).
- **Camera**: Static. Darius at center dais.
- **3D**: `scenes/persian_court.js`
- **SVG**: `assets/svg/scene_persian_court.svg`

#### 5-2: Satraps Plotting (svg: `satraps_plotting`)
- **Line**: "They searched for something — anything — to accuse him of."
- **Sketch**:
  ```
  [Camera: static, over-table]
  B: stone walls, dim lamplight
  M: table, maps, scrolls
  F: satraps leaning in (conspiratorial)
  ```
- **Background**: Stone chamber walls, dim lamplight
- **Middleground**: Table with maps and scrolls
- **Foreground**: Tight group of satraps leaning in, conspiratorial
- **Environment**: No fog — dim lamplight
- **Colors**: Conspiracy shadows (`#0A0812`), map parchment (`#f5f0e6`), torch light (`#FF6B5B` at 60% opacity), Persian robes (`#4a2a04`)
- **Lighting**: Dim lamplight. Shadows on faces. Conspiracy.
- **Mood**: Secretive, forming opposition
- **Animation**: Torch flicker. Subtle hand gestures on the map. Parallax on map (depth 0.6), satraps (depth 0.9), wall torches (depth 0.8).
- **Camera**: Static. Over-the-table view.
- **SVG**: `assets/svg/scene_satraps_plotting.svg`

#### 5-3: Satraps Plotting (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: static, over-table]
  B: stone walls
  M: table, maps
  F: satraps
  ```
- **SVG**: `assets/svg/scene_satraps_plotting.svg`

#### 5-4: The Trap Law (svg: `satraps_plotting`)
- **Line**: "A new law: for thirty days, anyone who prays... is thrown to the lions."
- **Sketch**:
  ```
  [Camera: static, close-up on scroll]
  B: stone walls, flickering torch
  M: law scroll unfurled
  F: satraps' hands pointing
  ```
- **Background**: Stone chamber walls, flickering torch
- **Middleground**: Scroll of law unfurled on table, satraps pointing
- **Foreground**: None — the scroll is the subject
- **Environment**: No fog — dim lamplight
- **Colors**: Law parchment (`#f5f0e6`) with red seal (`#8B0000`), torch shadows (`#0A0812`), Persian blue robes (`#4a2a04`)
- **Lighting**: Flickering torch. The law scroll is prominently lit.
- **Mood**: Sinister, official, targeted
- **Animation**: Subtle scroll unroll. Writing glow. Parallax on scroll (depth 0.7), hands (depth 0.9), background (depth 0.2).
- **Camera**: Static. Close-up on the scroll.
- **SVG**: `assets/svg/scene_satraps_plotting.svg`

#### 5-5: Daniel Praying Window (3D: `daniel_praying_window`)
- **Line**: "He opened the window facing Jerusalem. He got down on his knees. And he prayed."
- **Sketch**:
  ```
  [Camera: static, through window]
  B: morning light, cross-shaped shadow
  M: city below
  F: D kneeling at window
  ```
- **Background**: Morning light from the east, window casting cross-shaped shadow on floor
- **Middleground**: City below the window
- **Foreground**: Daniel at the window, kneeling in prayer
- **Environment**: No fog — morning exterior light
- **Colors**: East light (`#ffddaa`), window shadows (`#0A0812`), Daniel's robes (`#8b5a2b`), distant city (`#4a2a04`)
- **Lighting**: Morning light from the east. The window casts a cross-shaped shadow on the floor.
- **Mood**: Devotion, quiet consistency
- **Animation**: Subtle light beam through window. Gentle prayer hand movement. Parallax on window light (depth 0.9), Daniel (depth 0.5), city below (depth 0.1).
- **Camera**: Static. Through the window.
- **SVG**: `assets/svg/scene_daniel_praying_window.svg`

#### 5-6: Daniel Praying Window (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: static, through window]
  B: morning light
  M: city below
  F: D kneeling
  ```
- **SVG**: `assets/svg/scene_daniel_praying_window.svg`

#### 5-7: Darius Distressed (svg: `darius_distressed`)
- **Line**: "I cannot reverse my own law. I'm so sorry, Daniel."
- **Sketch**:
  ```
  [Camera: static]
  B: palace chamber, evening
  M: DA pacing (crown off)
  F: empire map on wall
  ```
- **Background**: Late evening, palace chamber
- **Middleground**: Darius alone, pacing, crown off
- **Foreground**: Map of the empire on the wall behind him
- **Environment**: No fog — evening interior
- **Colors**: Evening purple (`#0d1b2a`), crown gold (`#FFD84D` at 30% opacity), king's robes (`#4a2a04`), parchment map (`#f5f0e6`)
- **Lighting**: Late evening. The palace is lit, but the king's face is in shadow.
- **Mood**: Inner turmoil, tragedy
- **Animation**: Pacing animation. Lamp flicker. Subtle crown shadow on the wall. Parallax on wall map (depth 0.3), Darius (depth 0.7), lamp (depth 0.9).
- **Camera**: Static. Darius in the foreground, pacing.
- **SVG**: `assets/svg/scene_darius_distressed.svg`

#### 5-8: Lions Den Sealed (svg: `lions_den_sealed`)
- **Line**: "Daniel was thrown in. The stone was sealed."
- **Sketch**:
  ```
  [Camera: static, looking down]
  B: deep stone shadows, sky peek
  M: den mouth
  F: stone roller (foreground)
  ```
- **Background**: Deep stone shadows, sky peek above
- **Middleground**: The mouth of the den
- **Foreground**: Stone roller being pushed into place
- **Environment**: No fog — deep stone shadows
- **Colors**: Den stone (`#8b5a2b`), deep shadows (`#030b18`), torch (`#FF6B5B`), sky peek (`#1a0e06`)
- **Lighting**: Deep stone shadows. One torch on the upper ledge.
- **Mood**: Entrapment, finality
- **Animation**: Stone rolling animation. Subtle lion growls (sound + visual rumble). Parallax on torch (depth 0.9), stone (depth 0.6), den mouth (depth 0.3).
- **Camera**: Static. Looking down into the den from above.
- **SVG**: `assets/svg/scene_lions_den_sealed.svg`

#### 5-9: Darius Running (svg: `darius_running`)
- **Line**: "At dawn, the king ran."
- **Sketch**:
  ```
  [Camera: static, low angle]
  B: dawn sky, first light
  M: DA sprinting (robes flying)
  F: courtiers behind, dust cloud
  ```
- **Background**: Dawn sky, first light of morning
- **Middleground**: King Darius sprinting toward the den, robes flying
- **Foreground**: Courtiers behind him looking on
- **Environment**: No fog — dawn exterior
- **Colors**: Dawn gold (`#FFD84D`), running red (`#8B0000`), morning sky (`#ffddaa`), dust (`#8b5a2b`)
- **Lighting**: Dawn — the first light of morning.
- **Mood**: Urgency and hope simultaneously
- **Animation**: Running animation. Dust particles. Sunrise glow intensifying. Parallax on background courtiers (depth 0.2), Darius (depth 0.8), dust cloud (depth 0.6).
- **Camera**: Static. Low angle on Darius running toward the den.
- **SVG**: `assets/svg/scene_darius_running.svg`

#### 5-10: Darius Running (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: static, low angle]
  B: dawn sky
  M: DA running
  F: courtiers, dust
  ```
- **SVG**: `assets/svg/scene_darius_running.svg`

#### 5-11: Lions Den Open (3D: `lions_den_open`)
- **Line**: "My God sent his angel, and the lions' mouths were shut."
- **Sketch**:
  ```
  [Camera: slow rise from pit floor]
  B: deep night sky, dawn opening above
  M: stone pit, 6 lions (cowering), D standing
  F: angelic teal light, dawn beam
  ```
- **Background**: Deep night `#030b18`
- **Middleground**: Stone cylinder walls (open-ended), sandy floor, Daniel figure, 6 lions
- **Foreground**: Angelic teal light sphere, dawn light beam (cone from above)
- **Environment**: `FogExp2(#030b18, 0.02)` deep stone depth
- **Colors**: Stone, robe, skin, teal angel light, dawn white, lion browns
- **Lighting**: Angel point light (teal, intensity 2±0.8), dawn directional 1.0 from above, ambient 0.4
- **Mood**: Peaceful, divine presence, vindication
- **Animation**: Lion cower (body scale.y oscillation), angel light pulse, beam opacity pulse, Daniel gentle sway
- **Camera**: Slow rise from pit floor toward opening, orbit
- **3D**: `scenes/lions_den_open.js`
- **SVG**: `assets/svg/scene_lions_den_open.svg`

#### 5-12: Lions Den Open (repeat)
- Same scene, closing dialogue.
- **Sketch**:
  ```
  [Camera: slow rise]
  B: night sky, dawn opening
  M: stone pit, lions, D
  F: angel light, dawn beam
  ```
- **3D**: `scenes/lions_den_open.js`
- **SVG**: `assets/svg/scene_lions_den_open.svg`

#### 5-13: Daniel Old Man (svg: `daniel_old_man`)
- **Line**: "And Daniel prospered. Through four kings and two empires — he held the line."
- **Sketch**:
  ```
  [Camera: static, medium shot]
  B: window, golden hour light
  M: D (elderly) at desk
  F: scrolls, documents
  ```
- **Background**: Peaceful afternoon light, golden hour through windows
- **Middleground**: Elderly Daniel at his writing desk
- **Foreground**: Scrolls and documents around him
- **Environment**: No fog — peaceful interior
- **Colors**: Golden hour (`#FFD84D`), warm wood (`#8b5a2b`), scrolls (`#f5f0e6`), peaceful shadows (`#2a1a0a`)
- **Lighting**: Peaceful afternoon light. Golden hour through the windows.
- **Mood**: Peace, rest, faithful end
- **Animation**: Gentle page turn. Subtle light through the window. Parallax on window light (depth 0.9), documents (depth 0.5), Daniel (depth 0.7).
- **Camera**: Static. Comfortable medium shot.
- **SVG**: `assets/svg/scene_daniel_old_man.svg`

#### 5-14: Daniel Old Man (repeat)
- Same scene, different line text.
- **Sketch**:
  ```
  [Camera: static]
  B: window, golden hour
  M: D at desk
  F: scrolls
  ```
- **SVG**: `assets/svg/scene_daniel_old_man.svg`

#### 5-15: Epilogue — The End (svg: `daniel_epilogue`)
- **Line**: "THE END — Conviction sustained across seven decades, unbroken."
- **Sketch**:
  ```
  [Camera: static, Daniel centered]
  B: ethereal light convergence
  M: D (old man, hands folded)
  F: phantom images of past scenes
  ```
- **Background**: Ethereal, transcending. Light sources from all previous scenes converge.
- **Middleground**: Daniel as an old man, hands folded
- **Foreground**: Faded images of all his choices floating behind him
- **Environment**: No fog — ethereal light
- **Colors**: Convergence of all palette colors — gold (`#FFD84D`), teal (`#4ECDC4`), purple (`#B98CFF`), earth (`#8b5a2b`), white (`#ffffff`)
- **Lighting**: Ethereal, transcending. The light sources from all previous scenes converge.
- **Mood**: Summary of a life, consequence of faithfulness
- **Animation**: Phantom images fade in/out. Gentle light convergence. Parallax on phantom images (various depths).
- **Camera**: Static. Daniel centered.
- **SVG**: `assets/svg/scene_daniel_epilogue.svg` (conceptual — not yet created)
- **Mood**: Sinister, official, targeted
- **Animation**: Subtle scroll unroll. Writing glow. Parallax on scroll (depth 0.7), hands (depth 0.9), background (depth 0.2).
- **Camera**: Static. Close-up on the scroll.
- **SVG**: `assets/svg/scene_satraps_plotting.svg`

#### 5-5: Daniel Praying Window (svg: `daniel_praying_window`)
- **Line**: "He opened the window facing Jerusalem. He got down on his knees. And he prayed."
- **Background**: Morning light from the east, window casting cross-shaped shadow on floor
- **Middleground**: City below the window
- **Foreground**: Daniel at the window, kneeling in prayer
- **Environment**: No fog — morning exterior light
- **Colors**: East light (`#ffddaa`), window shadows (`#0A0812`), Daniel's robes (`#8b5a2b`), distant city (`#4a2a04`)
- **Lighting**: Morning light from the east. The window casts a cross-shaped shadow on the floor.
- **Mood**: Devotion, quiet consistency
- **Animation**: Subtle light beam through window. Gentle prayer hand movement. Parallax on window light (depth 0.9), Daniel (depth 0.5), city below (depth 0.1).
- **Camera**: Static. Through the window.
- **SVG**: `assets/svg/scene_daniel_praying_window.svg`

#### 5-6: Daniel Praying Window (repeat)
- Same scene, different line text.
- **SVG**: `assets/svg/scene_daniel_praying_window.svg`

#### 5-7: Darius Distressed (svg: `darius_distressed`)
- **Line**: "I cannot reverse my own law. I'm so sorry, Daniel."
- **Background**: Late evening, palace chamber
- **Middleground**: Darius alone, pacing, crown off
- **Foreground**: Map of the empire on the wall behind him
- **Environment**: No fog — evening interior
- **Colors**: Evening purple (`#0d1b2a`), crown gold (`#FFD84D` at 30% opacity), king's robes (`#4a2a04`), parchment map (`#f5f0e6`)
- **Lighting**: Late evening. The palace is lit, but the king's face is in shadow.
- **Mood**: Inner turmoil, tragedy
- **Animation**: Pacing animation. Lamp flicker. Subtle crown shadow on the wall. Parallax on wall map (depth 0.3), Darius (depth 0.7), lamp (depth 0.9).
- **Camera**: Static. Darius in the foreground, pacing.
- **SVG**: `assets/svg/scene_darius_distressed.svg`

#### 5-8: Lions Den Sealed (svg: `lions_den_sealed`)
- **Line**: "Daniel was thrown in. The stone was sealed."
- **Background**: Deep stone shadows, sky peek above
- **Middleground**: The mouth of the den
- **Foreground**: Stone roller being pushed into place
- **Environment**: No fog — deep stone shadows
- **Colors**: Den stone (`#8b5a2b`), deep shadows (`#030b18`), torch (`#FF6B5B`), sky peek (`#1a0e06`)
- **Lighting**: Deep stone shadows. One torch on the upper ledge.
- **Mood**: Entrapment, finality
- **Animation**: Stone rolling animation. Subtle lion growls (sound + visual rumble). Parallax on torch (depth 0.9), stone (depth 0.6), den mouth (depth 0.3).
- **Camera**: Static. Looking down into the den from above.
- **SVG**: `assets/svg/scene_lions_den_sealed.svg`

#### 5-9: Darius Running (svg: `darius_running`)
- **Line**: "At dawn, the king ran."
- **Background**: Dawn sky, first light of morning
- **Middleground**: King Darius sprinting toward the den, robes flying
- **Foreground**: Courtiers behind him looking on
- **Environment**: No fog — dawn exterior
- **Colors**: Dawn gold (`#FFD84D`), running red (`#8B0000`), morning sky (`#ffddaa`), dust (`#8b5a2b`)
- **Lighting**: Dawn — the first light of morning.
- **Mood**: Urgency and hope simultaneously
- **Animation**: Running animation. Dust particles. Sunrise glow intensifying. Parallax on background courtiers (depth 0.2), Darius (depth 0.8), dust cloud (depth 0.6).
- **Camera**: Static. Low angle on Darius running toward the den.
- **SVG**: `assets/svg/scene_darius_running.svg`

#### 5-10: Darius Running (repeat)
- Same scene, different line text.
- **SVG**: `assets/svg/scene_darius_running.svg`

#### 5-11: Lions Den Open (3D: `lions_den_open`)
- **Line**: "My God sent his angel, and the lions' mouths were shut."
- **Background**: Deep night `#030b18`
- **Middleground**: Stone cylinder walls (open-ended), sandy floor, Daniel figure, 6 lions
- **Foreground**: Angelic teal light sphere, dawn light beam (cone from above)
- **Environment**: `FogExp2(#030b18, 0.02)` deep stone depth
- **Colors**: Stone, robe, skin, teal angel light, dawn white, lion browns
- **Lighting**: Angel point light (teal, intensity 2±0.8), dawn directional 1.0 from above, ambient 0.4
- **Mood**: Peaceful, divine presence, vindication
- **Animation**: Lion cower (body scale.y oscillation), angel light pulse, beam opacity pulse, Daniel gentle sway
- **Camera**: Slow rise from pit floor toward opening, orbit
- **3D**: `scenes/lions_den_open.js`
- **SVG**: `assets/svg/scene_lions_den_open.svg`

#### 5-12: Lions Den Open (repeat)
- Same scene, closing dialogue.
- **3D**: `scenes/lions_den_open.js`
- **SVG**: `assets/svg/scene_lions_den_open.svg`

#### 5-13: Daniel Old Man (svg: `daniel_old_man`)
- **Line**: "And Daniel prospered. Through four kings and two empires — he held the line."
- **Background**: Peaceful afternoon light, golden hour through windows
- **Middleground**: Elderly Daniel at his writing desk
- **Foreground**: Scrolls and documents around him
- **Environment**: No fog — peaceful interior
- **Colors**: Golden hour (`#FFD84D`), warm wood (`#8b5a2b`), scrolls (`#f5f0e6`), peaceful shadows (`#2a1a0a`)
- **Lighting**: Peaceful afternoon light. Golden hour through the windows.
- **Mood**: Peace, rest, faithful end
- **Animation**: Gentle page turn. Subtle light through the window. Parallax on window light (depth 0.9), documents (depth 0.5), Daniel (depth 0.7).
- **Camera**: Static. Comfortable medium shot.
- **SVG**: `assets/svg/scene_daniel_old_man.svg`

#### 5-14: Daniel Old Man (repeat)
- Same scene, different line text.
- **SVG**: `assets/svg/scene_daniel_old_man.svg`

#### 5-15: Epilogue — The End (svg: `daniel_epilogue`)
- **Line**: "THE END — Conviction sustained across seven decades, unbroken."
- **Background**: Ethereal, transcending. Light sources from all previous scenes converge.
- **Middleground**: Daniel as an old man, hands folded
- **Foreground**: Faded images of all his choices floating behind him
- **Environment**: No fog — ethereal light
- **Colors**: Convergence of all palette colors — gold (`#FFD84D`), teal (`#4ECDC4`), purple (`#B98CFF`), earth (`#8b5a2b`), white (`#ffffff`)
- **Lighting**: Ethereal, transcending. The light sources from all previous scenes converge.
- **Mood**: Summary of a life, consequence of faithfulness
- **Animation**: Phantom images fade in/out. Gentle light convergence. Parallax on phantom images (various depths).
- **Camera**: Static. Daniel centered.
- **SVG**: `assets/svg/scene_daniel_epilogue.svg` (conceptual — not yet created)

---

## Design Principles

1. **Toon shader consistency**: All 3D objects use `MeshToonMaterial` with gradientMap for cel-shaded look. Emissive elements (lights, glows) use `MeshBasicMaterial`.

2. **Outline hierarchy**: Main visible objects get black `BackSide` outlines (1.08x scale) via `addToonPart()`. Ground planes and full-screen backgrounds do not.

3. **Cinematic camera per scene**: Each scene has a unique `cameraAnimation(t)` function defining camera choreography (orbit, dolly, push/pull, Dutch angle).

4. **Atmospheric fog**: Every scene uses `FogExp2` with scene-appropriate color and density (0.002–0.004) for depth and mood.

5. **Parallax depth**: SVG fallbacks with `data-parallax` have 3-4 depth layers (0.1-1.0) for mouse-driven parallax.

6. **SVG fallback parity**: Every 3D scene has an SVG equivalent for when Three.js is unavailable.

7. **Scene granularity**: Each story line gets its own dedicated scene file for maximum visual specificity.

8. **Narrative pacing**: Camera techniques vary by emotional weight — gentle orbits for peaceful scenes, tight circling + Dutch for tension, dramatic pulls for judgment.

9. **Dual asset pipeline**: Key scenes store layout as JSON in `/assets/3d/` (editable via pixel3d tool). Scene factories load JSON or JS exports, auto-converting materials to toon shader. Character-specific elements added procedurally in JS scene files.

10. **Dual export support**: `loadJSONScene()` parses pixel3d JSON format; `loadJSScene()` loads pixel3d JS exports and converts `MeshPhongMaterial` → `MeshToonMaterial`.

11. **SVG-behind-3D layering**: The SVG layer is always rendered as a background (`z-index: 0`), with the Three.js canvas on top (`z-index: 2`). The renderer uses `alpha: true` + `setClearColor(0, 0)` + `scene.background = null` for transparency. The fog (set via `makeFog()`) provides atmospheric tinting that matches the SVG background color, creating seamless depth blending between 2D and 3D layers. SVG parallax still works on mouse movement, adding depth to the background while 3D models animate in the foreground.

12. **Meter as description, not score**: The Set Apart / Fit In meter is a quiet bar with no numeric popups. It reflects the player's pattern of choices without congratulating or punishing them.

13. **No combat, no fail state**: Tension comes from dialogue stakes, timers, and the interpretation mechanic. A wrong reading writes a consequence flag for later chapters — it doesn't block progress or end the game.
