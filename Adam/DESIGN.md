# Adam & Eve Comic — 3D Panel Design Document

## Overview

**Story**: The Story of Adam and Eve (Genesis 1-4) — Creation, Garden of Eden, Fall, and Exile.

**Visual Style**: Toon-shaded cel animation with black outlines, cinematic camera movement, slight atmospheric fog in most scenes, and mouse-driven parallax on SVG fallbacks.

**Engine**: Three.js r128 with `MeshToonMaterial` (gradientMap `[0,128,255]`), `BackSide` outline meshes, `sRGBEncoding`, `ACESFilmicToneMapping`, shadow maps, `FogExp2` atmospheric fog, and `CatmullRomCurve3` splines for flowing organic shapes.

---

## Toon Shader Technical Specification

| Component | Detail |
|-----------|--------|
| Gradient Map | `DataTexture` 3x1, `LuminanceFormat` (or `RedFormat`), values `[0,128,255]` |
| Main Material | `THREE.MeshToonMaterial` with `gradientMap` — flat 3-band cel-shading |
| Outline Material | `THREE.MeshBasicMaterial` color `0x000000`, `side: BackSide`, `opacity: 0.85` |
| Outline Scale | 1.08x (8% larger than main mesh) — added as child of main mesh via `addOutline()` |
| Fog | `THREE.FogExp2` with scene-appropriate color + density (0.0025–0.004) |
| Emissive | `THREE.MeshBasicMaterial` for lights, glows, eyes — unaffected by toon shader |

### Fog Application by Mood

| Mood | Fog Color | Density | Used In |
|------|-----------|---------|---------|
| Cosmic/Vast | `#000000` | 0.0025 | creation_cosmos, creation_days, exile_dawn, exile_driven, garden_paradise |
| Garden/Peaceful | `#1a0e06` | 0.002 | garden_eden, garden_placed, garden_tended, garden_trees, garden_command, garden_warning |
| Forming/Divine | `#0a0e1a` | 0.003 | forming_eve, forming_sleep, forming_names, forming_united |
| Temptation/Dark | `#220000` | 0.0025 | serpent_tree, serpent_deceive, forbidden_fruit, forbidden_taken, the_fall, the_hiding |
| Judgment/Exile | `#0a0502` | 0.003 | exile_eden, exile_judged, cain_abel |

### Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Sky/Night | `#03010a` | Cosmic night backgrounds |
| Earth/Bark | `#8B4513` | Ground, tree trunks |
| Leaf/Green | `#4a7a3a` | Tree foliage |
| Gold | `#FFD84D` | Divine light, Tree of Life |
| Red Fruit | `#FF6B5B` | Forbidden fruit |
| Deep Red | `#8B0000` | Serpent, blood, judgment |
| Skin Adam | `#C8956C` | Adam's skin |
| Skin Eve | `#DCB088` | Eve's skin |
| Water/Teal | `#4ECDC4` | Rivers, forming light |
| Stone | `#8b5a2b` | Gates, altars |
| Metal | `#4a4a4a` | Sword, tools |
| Flames | `#FF6B35` / `#FFD84D` | Flaming sword, divine fire |

---

## Cinematic Camera System

### Camera State (`window._cinema`)
- **theta** — horizontal azimuth angle
- **phi** — vertical inclination angle
- **distance** — camera distance from target
- **roll** — Dutch angle
- **targetX/Y/Z** — look target point

### Per-Scene Camera Techniques

| Scene | Technique |
|-------|-----------|
| creation_cosmos | Slow 360° orbit, breathing zoom, gentle roll |
| creation_light | Push-in on light burst, expanding waves |
| creation_days | Pan between Adam and Eve, creature rhythm |
| garden_eden | Orbit around Tree of Life |
| garden_placed | Orbit around Adam, light descending |
| garden_tended | Pan across creatures |
| garden_trees | Push-pull between two trees |
| garden_command | Orbit around divine light |
| garden_warning | Zoom between trees |
| garden_paradise | Spline-guided orbit (new Spline scene) |
| forming_eve | Orbit around forming Eve |
| forming_names | Orbit with creatures |
| forming_sleep | Close tracking on formation |
| forming_unified | Orbit between Adam and Eve |
| serpent_tree | Tight circling, Dutch angle |
| serpent_deceive | Tight circling, track serpent |
| forbidden_fruit | Push-in on fruit |
| forbidden_taken | Push-in on reaching hand |
| the_fall | (shake) pull-back |
| the_hiding | Reveal hiding |
| exile_eden | Orbit around flaming sword |
| exile_judged | High angle orbit, lightning |
| exile_dawn | Wide melancholy orbit |
| exile_driven | Wide orbit showing finality |
| cain_abel | Pan between brothers, Dutch on Cain |

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
1. **SVG always loads** — every panel gets an SVG background layer with `data-depth` parallax
2. **3D renders transparent** — `WebGLRenderer(alpha: true)` + `scene.background = null` + `setClearColor(0, 0)`
3. **Fog bridges the gap** — each scene's `FogExp2` color matches the intended background, tinting 3D objects to blend with the SVG
4. **Parallax works in background** — mouse movement translates SVG depth layers while 3D camera orbits independently

### CSS z-index stack:
| Layer | Element | z-index | Purpose |
|-------|---------|---------|---------|
| 1 | `#svgLayer.svg-behind` | 0 | SVG background with parallax |
| 2 | `canvas.three-canvas` | 2 | 3D scene (transparent) |
| 4 | `.content-overlay` | 4 | Text, dialogue bubbles, SFX |

## SVG Parallax System

### Scenes with parallax (`data-parallax="true"`):
1. `creation_cosmos` — depth layers: stars (0.2), earth/moon (0.5), ground (0.9)
2. `garden_paradise` — stars (0.2), trees (0.4-0.7), figures (0.9-1.0)
3. `exile_dawn` — stars (0.15), mountains (0.3), gates (0.5), figures (0.9), ground (1.0)
4. `the_fall` — tree/shadows (0.4-0.5), figures (0.85), leaves/fruit (1.0)
5. `cain_abel` — hills (0.1-0.2), altars (0.5-0.6), tension line (0.55), figures (0.85-1.0)
6. `exile_driven` — stars (0.1), mountains (0.15), gates/sword (0.4-0.5), figures (0.9), ground (1.0)

### Behavior:
- Mouse over `#svgLayer[data-parallax]` translates each `[data-depth]` element by `(mouseX * 20 * depth, mouseY * 20 * depth)`
- Depth 0 = static, Depth 1.0 = max 20px displacement
- Resets to (0,0) on mouse leave

---

## Scene Registry

29 scene factories total: 12 original + 12 doubling + 3 new + 1 Spline + 1 river demo.

| Key | Act | JSON | Spline-Based | Notes |
|-----|-----|------|-------------|-------|
| creation_cosmos | Creation | ✅ | — | Cosmic scene, earth/moon/light burst |
| creation_light | Creation | ✅ | — | Light burst, Earth/Moon silhouette |
| creation_separation | Creation | ✅ | — | Light vs darkness spheres, rays |
| creation_days | Creation | — | — | Adam & Eve with animals |
| garden_eden | Garden | — | — | Garden with Tree of Life |
| garden_placed | Garden | — | — | Adam + divine light descending |
| garden_tended | Garden | — | — | Adam with creatures |
| garden_paradise | Garden | ✅ | ✅ JS+GLB | River spline, particle flow |
| garden_trees | Garden | ✅ | — | Two trees, Adam & Eve |
| garden_command | Garden | — | — | Divine command with light rays |
| garden_warning | Garden | — | — | Warning about eating fruit |
| forming_eve | Helper | — | — | Eve forming from light |
| forming_names | Helper | — | — | Adam naming creatures |
| forming_sleep | Helper | — | — | Deep sleep, Eve forming |
| forming_united | Helper | — | — | Adam & Eve united |
| serpent_tree | Temptation | ✅ | — | Tree, serpent, Eve |
| serpent_deceive | Temptation | — | — | Close-up, deception |
| serpent_taken | Temptation | ✅ | — | Eve offers fruit to Adam |
| forbidden_fruit | Temptation | — | — | Eve reaching for fruit |
| forbidden_taken | Temptation | — | — | Taking the fruit |
| the_fall | Temptation | ✅ | — | Shame, fallen fruit, fig leaves |
| the_hiding | Temptation | — | — | Hiding from God |
| exile_eden | Exile | ✅ | — | Gates, flaming sword, exile |
| exile_judged | Exile | — | — | Judgment pronouncement |
| exile_garments | Exile | ✅ | — | Skin garments, divine covering |
| exile_dawn | Exile | — | — | Dawn after exile |
| exile_driven | Exile | — | — | Driven out |
| cain_abel | Exile | ✅ | — | Brothers, altar stones |
| garden_river | Demo | — | — | River spline demo (not in story) |

---

## Panel-by-Panel Design

### Chapter 0: Creation

#### creation_cosmos
- **Line**: "In the beginning, God created the heavens and the earth. The earth was formless and empty — and darkness was over the surface of the deep."
- **Sketch**:
```
Camera: [HIGH ORBIT] looking down at center
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |        (LIGHT)            🌍 🌙
        |       / | | \              
        |      /  |  \              
[FG]    |  *  *  *  *  *  *  *  *  *  *
        |____________________________
                     =
```
- **Background**: Star-speckled cosmic void (`#03010a`), distant moon in silhouette, nebula clouds
- **Middleground**: Earth sphere, light burst at center
- **Foreground**: Stars and nebulae particles
- **Environment**: Ground plane invisible (floating in space), `FogExp2(#000000, 0.0025)` for cosmic depth
- **Colors**: Deep space blue-black, white stars, gold light, teal-tinged Earth
- **Lighting**: White point light (intensity 6, distance 100) at center, ambient (0.4)
- **Mood**: Vast, mysterious, pre-creation emptiness
- **Animation**: Light pulse (`Math.sin(time*0.5)*0.5`), rays pulsing radially
- **Camera**: Slow 360° orbit with breathing zoom, gentle roll oscillation
- **3D**: `scenes/creation_cosmos.js`
- **JSON**: `assets/3d/creation_cosmos.json`
- **SVG**: `assets/svg/scene_creation_cosmos.svg`

#### creation_light
- **Line**: "LET THERE BE LIGHT! Let there be light."
- **Sketch**:
```
Camera: [PUSH-IN] toward center light
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |      (  LIGHT BURST  )
        |     /  /  /  /  /  /  /
        |    🌍                  🌙
        |   ~~~~~~~~ (waves)
[FG]    |  *  *  *  *  *  *  *  *  *  *
        |____________________________
                     =
```
- **Background**: Cosmic darkness with stars visible
- **Middleground**: Massive light burst (white/yellow), Earth and Moon in silhouette
- **Foreground**: Expanding wave rings radiating from light
- **Environment**: Floating in space, `FogExp2(#000000, 0.003)` for ethereal glow
- **Colors**: White-gold light, deep blue-black background, silhouetted Earth/Moon
- **Lighting**: Bright directional light (white, intensity 1.5), ambient (0.3)
- **Mood**: Divine, explosive, transformative
- **Animation**: Light scale pulsing, wave rings expanding outward, lightning flickering
- **Camera**: Push-in on light burst with roll oscillation
- **3D**: `scenes/creation_light.js`
- **JSON**: `assets/3d/creation_light.json`
- **SVG**: `assets/svg/scene_creation_light.svg`

#### creation_separation
- **Line**: "And God saw that the light was good. He separated the light from the darkness."
- **Sketch**:
```
Camera: [ORBIT] around center divide
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |  (LIGHT)    |||    (DARK)
        |  bright     |||     void
        |  sphere     |||     sphere
        |  /  /  /   |||   🌍    🌙
        |  /  /  /   |||   (earth) (moon)
[FG]    |  *  *  *  *  *  *  *  *  *  *
        |____________________________
                     =
```
- **Background**: Cosmic void (`#03010a`) with stars
- **Middleground**: Two large spheres — white light (left, emissive) and black void (right, basic) — with a visible divide between them
- **Foreground**: Earth and Moon in silhouette, light rays radiating from the light sphere
- **Environment**: `FogExp2(#000000, 0.0025)` cosmic fog
- **Colors**: Pure white/gold light vs. pure black void, teal Earth, gray Moon
- **Lighting**: White point light (intensity 3) on left, ambient (0.3)
- **Mood**: Divine separation, order from chaos, clarity
- **Animation**: Light pulses, dark sphere opacity oscillation
- **Camera**: Slow orbit with breathing zoom
- **JSON**: `assets/3d/creation_separation.json`
- **3D**: `scenes/creation_separation.js`
- **SVG**: `assets/svg/scene_creation_separation.svg`

#### creation_days
- **Line**: "Then God said, 'Let us make mankind in our image.'"
- **Sketch**:
```
Camera: [PAN] between Adam and Eve
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |    T         A         E       T
        |   /         /|\       /|\     /
        |  /        sheep  bird lion   /
        | /                         /
[FG]    |___________________________=
                     |
```
- **Background**: Soft daylight sky gradient
- **Middleground**: Adam (standing, arms wide), Eve (to his right), sheep, lion, birds
- **Foreground**: Ground plane with scattered plants
- **Environment**: Flat ground plane, `FogExp2(#1a0e06, 0.002)` soft morning mist
- **Colors**: Warm earth browns, green leaves, teal accents, skin tones
- **Lighting**: Soft directional (white, 0.8), ambient (0.5), warm
- **Mood**: Peaceful, abundant, life-filled
- **Animation**: Divine light pulsing overhead, animals breathing gently
- **Camera**: Pan between Adam and Eve, gentle orbit
- **3D**: `scenes/creation_days.js`
- **SVG**: `assets/svg/scene_creation_days.svg`
### Chapter 1: The Garden

#### garden_eden
- **Line**: "The Lord God formed a man from the dust of the ground..."
- **Sketch**:
```
Camera: [ORBIT] around Tree of Life
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |    T(Life)    T(Knowledge)
        |   gold        red fruit
        |    \          /
        |     \   A    /   (dust forming)
        |      \  |  /    (transparent)
        |       \ | /
[FG]    |___________________________=
         ~river ~dust particles~
```
- **Background**: Garden sky, distant trees
- **Middleground**: Adam (formed from dust, partially transparent), Tree of Life (golden), garden plants
- **Foreground**: Ground plane with dust particles
- **Environment**: Grassy ground plane, `FogExp2(#1a0e06, 0.002)` morning mist
- **Colors**: Golden Tree of Life, green foliage, earth brown, Adam's skin tone
- **Lighting**: Warm directional (golden, 1.0), ambient (0.6)
- **Mood**: Sacred, tender, life-giving
- **Animation**: Tree of Life glow pulsing, dust particles floating
- **Camera**: Orbit around the Tree of Life
- **3D**: `scenes/garden_eden.js`
- **SVG**: `assets/svg/scene_garden_eden.svg`

#### garden_placed
- **Line**: "I have placed him in the garden to work it and keep it."
- **Sketch**:
```
Camera: [ORBIT] around Adam, light tracking
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       T     T     T     T     T
        |       |     |     |     |     |
        |        \    |    /      |
        |         \   |   /       |
        |          \  |  /        |
        |           \ | /         |
        |            \|/          |
        |             A           |
        |          (light col)    |
[FG]    |___________________________=
                     |
```
- **Background**: Garden backdrop with trees
- **Middleground**: Adam (fully formed), divine light descending from above
- **Foreground**: Ground plane, scattered plants
- **Environment**: `FogExp2(#1a0e06, 0.0025)` gentle mist
- **Colors**: Warm golden light, green garden, earthy browns
- **Lighting**: Divine point light (gold, intensity 1.2) from above, ambient (0.5)
- **Mood**: Reverent, warm, purposeful
- **Animation**: Light scale pulsing, particles floating upward from light
- **Camera**: Slow orbit around Adam, light tracking
- **3D**: `scenes/garden_placed.js`
- **SVG**: `assets/svg/scene_garden_placed.svg`

#### garden_tended
- **Line**: "So the man tended the garden. He named every creature."
- **Sketch**:
```
Camera: [WIDE PAN] showing Adam with all creatures
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |    T        A         🦁      T
        |   /        /|\       /|\    /
        |  /        sheep  bird      /
        | /         🐑     🐦       /
[FG]    |___________________________=
                     |
```
- **Background**: Garden with trees
- **Middleground**: Adam gesturing to sheep, birds in sky, lion resting
- **Foreground**: Ground plane with garden plants
- **Environment**: `FogExp2(#1a0e06, 0.002)` soft morning fog
- **Colors**: Natural daylight palette, earthy browns, greens, skin tones
- **Lighting**: Bright directional (white, 1.0), ambient (0.7)
- **Mood**: Peaceful, companionship, harmony
- **Animation**: Adam's arms gesturing, sheep breathing, birds fluttering wings
- **Camera**: Wide pan showing Adam with all creatures
- **3D**: `scenes/garden_tended.js`
- **SVG**: `assets/svg/scene_garden_tended.svg`

#### garden_trees
- **Line**: "The garden was a paradise — every tree was pleasing..."
- **Sketch**:
```
Camera: [PUSH-PULL] between two trees
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T(K)               T(L)
        |  red fruit          gold
        |    \                /
        |     \   (light)   /
        |      \   divine  /
        |       \  |||   /
        |        \ |||  /
        |         \||| /
        |          A E
        |        (approach)
[FG]    |___________________________=
                     |
```
- **Background**: Garden clearing
- **Middleground**: Tree of Life (golden, left), Tree of Knowledge (red fruit, right), Adam & Eve approaching
- **Foreground**: Ground plane, scattered fruit
- **Environment**: `FogExp2(#1a0e06, 0.0025)` mild mist
- **Colors**: Golden Tree of Life, red forbidden fruit, green foliage, earth brown
- **Lighting**: Divine light between the two trees (gold), ambient (0.5), directional (0.7)
- **Mood**: Temptation tension, beauty, choice
- **Animation**: Divine light scale pulsing between the two trees
- **Camera**: Push-pull between the two trees
- **3D**: `scenes/garden_trees.js`
- **JSON**: `assets/3d/garden_trees.json`
- **SVG**: `assets/svg/scene_garden_trees.svg`

#### garden_command
- **Line**: "You may eat from any tree. But from the tree of knowledge..."
- **Sketch**:
```
Camera: [ORBIT] around divine light above
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T(K)               T(L)
        |    \                /
        |     \   /  |  \   /
        |      \ /   |   \ /
        |       |   G    |
        |       |  /|\   |
        |       | / | \  |
        |       |/  |  \ |
        |       A   |   E
        |           |
[FG]    |___________________________=
                     |
```
- **Background**: Sacred garden sky
- **Middleground**: Two trees prominent, divine hand/light from above, Adam below
- **Foreground**: Ground plane
- **Environment**: `FogExp2(#1a0e06, 0.003)` — denser divine mist
- **Colors**: Golden divine light, green trees, earth brown, white light beams
- **Lighting**: Overhead divine light (gold, intensity 2.0), ray beams, ambient (0.4)
- **Mood**: Awe-filled, commanding, serious
- **Animation**: Light rays pulsing, divine light descending
- **Camera**: Orbit around the divine light source
- **3D**: `scenes/garden_command.js`
- **SVG**: `assets/svg/scene_garden_command.svg`

#### garden_warning
- **Line**: "For on the day that you eat from it, you will surely die."
- **Sketch**:
```
Camera: [ZOOM] between the two trees
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T(K)   |||   T(L)
        |  red    |||   gold
        |  fruit  |||   fruit
        |         |||
        |         |||  (warning light)
        |         |||   pillars
        |         |||
[FG]    |         A E (small, listening)
        |___________________________=
                     |
```
- **Background**: Darkening garden sky
- **Middleground**: Two trees, Adam and Eve small in foreground, light pillars between trees
- **Foreground**: Adam and Eve figures, ground plane
- **Environment**: `FogExp2(#220000, 0.0025)` — warning fog with red tint
- **Colors**: Red-tinged light, golden Tree of Life, green Knowledge tree, earth brown
- **Lighting**: Divine light warning tone, red-tinged ambient (0.3), directional (0.5)
- **Mood**: Foreboding, serious, prophetic
- **Animation**: Light pillars pulsing intensely, warning flashes
- **Camera**: Zoom between the two trees
- **3D**: `scenes/garden_warning.js`
- **SVG**: `assets/svg/scene_garden_warning.svg`

#### garden_paradise (Spline Scene)
- **Line**: "Thus the garden held its first couple — naked in innocence, walking in peace."
- **Sketch**:
```
Camera: [SPLINE ORBIT] along river curve
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |    T(L)        A ~ ~ E
        |     |         /       \
        |    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
        |   ~   river spline    ~
        |  ~   ~~~~~~~~~~~~     ~
        | ~   ~            ~    ~
[FG]    |___________________________=
         ~ particles flowing ~
```
- **Background**: Night sky with stars and constellation patterns
- **Middleground**: Spline-loaded GLB of Garden of Eden (trees, river, light), Adam & Eve walking
- **Foreground**: River winding along CatmullRomCurve3 path, ground plane with grass
- **Environment**: `FogExp2(#000000, 0.0025)` cosmic fog, floating particles along river spline
- **Colors**: Deep night sky, golden Tree of Life, green foliage, teal river, warm skin tones
- **Lighting**: Golden directional (sun, 1.0), teal river reflections, ambient (0.5)
- **Mood**: Peaceful, idyllic, paradisal
- **Animation**: Divine light orbs floating along river spline, Tree of Life glow pulsing, particles flowing on curve
- **Camera**: Spline-guided orbit following the river's natural curve
- **3D**: `scenes/garden_paradise.js`
- **JSON**: `assets/3d/garden_paradise.json`
- **SVG**: `assets/svg/scene_garden_paradise.svg`
### Chapter 2: Forming Eve

#### forming_eve
- **Line**: "The Lord God said, 'It is not good for the man to be alone.'"
- **Sketch**:
```
Camera: [ORBIT] around forming Eve
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  A(sleep)      (Eve forming)
        |   |            /  |  \
        |   |           /   |   \
        |   |          /  teal  \
        |   |         /   light  \
        |   |        /     |     \
        |   |       /   particles
[FG]    |___________________________=
                     |
```
- **Background**: Night garden (`#0a0e1a` tint)
- **Middleground**: Adam sleeping (on the ground), Eve forming from light (ethereal, transparent)
- **Foreground**: Ground plane, swirling particles
- **Environment**: `FogExp2(#0a0e1a, 0.003)` mystical fog
- **Colors**: Teal forming light, deep blue-black, Adam's earthy tones
- **Lighting**: Teal point light (Eve forming), ambient (0.4), warm directional (0.3)
- **Mood**: Mystical, tender, miraculous
- **Animation**: Light pulse forming Eve, particles swirling upward
- **Camera**: Orbit around the forming Eve
- **3D**: `scenes/forming_eve.js`
- **SVG**: `assets/svg/scene_forming_eve.svg`

#### forming_names
- **Line**: "God brought every creature to Adam to see what he would name them."
- **Sketch**:
```
Camera: [PAN] across all creatures
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T        A    🐑   🦁   🐘  T
        |  |       /|\  sheep lion elephant
        |  |       / \   🐦   (bird)
        |  |           (bird flying)
[FG]    |___________________________=
                     |
```
- **Background**: Daylight garden
- **Middleground**: Adam gesturing to sheep, lion, bird, elephant in a line
- **Foreground**: Ground plane with scattered creatures
- **Environment**: `FogExp2(#1a0e06, 0.002)` gentle morning mist
- **Colors**: Natural daylight, earthy browns, greens, skin tones
- **Lighting**: Bright directional (white, 1.0), ambient (0.7)
- **Mood**: Curious, orderly, purposeful
- **Animation**: Lion breathing cycle, Adam's arm gestures
- **Camera**: Pan across all creatures being named
- **3D**: `scenes/forming_names.js`
- **SVG**: `assets/svg/scene_forming_names.svg`

#### forming_sleep
- **Line**: "WHIRR... So the Lord God caused a deep sleep to fall on the man."
- **Sketch**:
```
Camera: [LOW ORBIT] around wound/light stream
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |  A(side) ----light----> (E)
        |   |        stream/spline
        |   |           |
        |   |           |
        |   |        particles
        |   |           |
[FG]    |___________________________=
                     |
```
- **Background**: Dark night (`#0a0e1a`) with deep blue
- **Middleground**: Adam sleeping, Eve forming in a column of teal light
- **Foreground**: Ground plane, swirling particles and mist
- **Environment**: `FogExp2(#0a0e1a, 0.004)` — dense mystical fog
- **Colors**: Dark blue-black, teal divine light, earthy Adam tones
- **Lighting**: Strong teal light (intensity 2.0) from above, ambient (0.2)
- **Mood**: Sacred, mysterious, intimate
- **Animation**: Light forming Eve's shape, particles swirling
- **Camera**: Close tracking on the light formation
- **3D**: `scenes/forming_sleep.js`
- **SVG**: `assets/svg/scene_forming_sleep.svg`

#### forming_united
- **Line**: "This is now bone of my bones, and flesh of my flesh!"
- **Sketch**:
```
Camera: [ORBIT] between Adam and Eve
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |    T(Life)
        |     |
        |   (light)
        |    / \
        |   /   \
        |  A     E
        |  |     |
        |  |  (bond glow)
        |  |_____|
[FG]    |___________________________=
                     |
```
- **Background**: Soft golden-hour garden sky
- **Middleground**: Adam and Eve side by side, Tree of Life behind them
- **Foreground**: Ground plane with garden plants
- **Environment**: `FogExp2(#1a0e06, 0.002)` soft golden mist
- **Colors**: Golden divine blessing, green foliage, skin tones
- **Lighting**: Golden directional (1.0), ambient (0.6), warm
- **Mood**: Joyful, united, blessed
- **Animation**: Gentle breathing motion for both figures, Tree of Life glow
- **Camera**: Orbit between the couple with gentle roll
- **3D**: `scenes/forming_united.js`
- **SVG**: `assets/svg/scene_forming_united.svg`
### Chapter 3: The Temptation

#### serpent_tree
- **Line**: "Did God really say, 'You must not eat from any tree'?"
- **Sketch**:
```
Camera: [TIGHT CIRCLE] + Dutch angle
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       T (Knowledge)
        |       |
        |    ~~S~~~~  (serpent coiled)
        |   ~  head ~
        |    \  |  /
        |     \ | /
        |      E
        |     (approaching)
[FG]    |___________________________=
                     |
```
- **Background**: Dark garden (`#220000` tint)
- **Middleground**: Large tree with Knowledge fruit, curved serpent (TubeGeometry) coiled around trunk, Eve approaching
- **Foreground**: Ground plane with fallen leaves
- **Environment**: `FogExp2(#220000, 0.003)` ominous red fog
- **Colors**: Deep red ambient, green tree, red fruit, Earth-toned serpent
- **Lighting**: Ominous red point light, ambient (0.3), directional (0.5, red-tinted)
- **Mood**: Suspicious, tense, lurking danger
- **Animation**: Serpent swaying (oscillation), red light pulsing
- **Camera**: Tight circling with strong Dutch angle (roll oscillation)
- **3D**: `scenes/serpent_tree.js`
- **JSON**: `assets/3d/serpent_tree.json`
- **SVG**: `assets/svg/scene_serpent_tree.svg`

#### serpent_deceive
- **Line**: "You will not certainly die... you will be like God."
- **Sketch**:
```
Camera: [TIGHT TRACK] serpent head, Dutch
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       T (Knowledge)
        |       |
        |     ~S~  (head raised)
        |    ~ | ~
        |     \|/   (speaking)
        |      E
        |     (listening)
        |    (fruit glow)
[FG]    |___________________________=
                     |
```
- **Background**: Darkened garden
- **Middleground**: Tree central, serpent coiled and speaking, Eve listening, fruit glowing
- **Foreground**: Close ground details
- **Environment**: `FogExp2(#330000, 0.0035)` — dense deceptive fog
- **Colors**: Red-tinged shadows, glowing fruit (gold), green leaves, serpent earth tones
- **Lighting**: Red ominous light, ambient (0.2), fruit emissive glow
- **Mood**: Deceptive, persuasive, dangerous
- **Animation**: Fruit pulsing, serpent swaying, Eve's hand twitching
- **Camera**: Very tight circling tracking the serpent, Dutch angle intensifying
- **3D**: `scenes/serpent_deceive.js`
- **SVG**: `assets/svg/scene_serpent_deceive.svg`

#### serpent_taken
- **Line**: "She gave some to her husband, who was with her. And he ate it."
- **Sketch**:
```
Camera: [PUSH-IN] on handoff
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T(Knowledge)
        |    \
        |     \   E----fruit----> A
        |      \  |              /
        |       \ |             /
        |        S (serpent below)
        |       (ground curve)
[FG]    |___________________________=
                     |
```
- **Background**: Darkened garden (`#330000` tint)
- **Middleground**: Eve offering fruit to Adam (both toon-shaded), curved serpent (CatmullRomCurve3 tube) between them, Knowledge tree behind
- **Foreground**: Fruit glowing in Eve's hand (emissive), ground plane
- **Environment**: `FogExp2(#330000, 0.0035)` dense ominous fog
- **Colors**: Red-tinted shadows, glowing fruit, earth-toned figures, green tree
- **Lighting**: Red ominous point light, ambient (0.3), fruit glow
- **Mood**: Irreversible, complicit, moment of no return
- **Animation**: Fruit glow intensifying, serpent swaying
- **Camera**: Slight Dutch angle, push-in on the handoff
- **JSON**: `assets/3d/serpent_taken.json`
- **3D**: `scenes/serpent_taken.js`
- **SVG**: `assets/svg/scene_serpent_taken.svg`

#### forbidden_fruit
- **Line**: "The fruit was good for food and pleasing to the eye."
- **Sketch**:
```
Camera: [PUSH-IN] on fruit, slight Dutch
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       T (Knowledge)
        |       |
        |      (fruit)
        |       |
        |    ~~~|~~~  (glow)
        |       |
        |      E (hand reaching)
        |       |
        |      S (watching)
[FG]    |___________________________=
                     |
```
- **Background**: Blurred dark garden
- **Middleground**: Large tree with Knowledge fruit (glowing), Eve's hand reaching, serpent watching
- **Foreground**: Extreme close-up, ground details
- **Environment**: `FogExp2(#220000, 0.0025)` subtle ominous mist
- **Colors**: Red-tinted shadows, glowing fruit, green leaves
- **Lighting**: Red key light, ambient (0.3), fruit glow
- **Mood**: Tempting, lustrous, dangerous allure
- **Animation**: Fruit rotating slowly, glow pulsing rhythmically
- **Camera**: Slow push-in on the fruit, slight Dutch
- **3D**: `scenes/forbidden_fruit.js`
- **SVG**: `assets/svg/scene_forbidden_fruit.svg`

#### forbidden_taken
- **Line**: "She looked at the fruit, longing... Then she took some and ate it."
- **Sketch**:
```
Camera: [EXTREME CLOSE-UP] push-in
         |
[BG]    |  .  .  .  .  .  .  .  .  .  .
        |  .  .  .  .  .  .  .  .  .  .
        |  .  .  .  .  .  .  .  .  .  .
[MG]    |       T trunk
        |       |
        |     (fruit)
        |      |
        |     hand
        |      |
[FG]    |    S (serpent watching)
        |___________________________=
                     =
```
- **Background**: Nearly black garden
- **Middleground**: Eve's hand taking fruit, fruit glowing intensely
- **Foreground**: Extreme close-up of hands and fruit
- **Environment**: `FogExp2(#330000, 0.004)` — dense ominous fog
- **Colors**: Deep red-black, bright gold fruit glow, shadowed greens
- **Lighting**: Dark red key light, fruit emissive glow intensifying
- **Mood**: Irreversible, dramatic, consequential
- **Animation**: Fruit glow intensifying, shadow deepening
- **Camera**: Push-in on hand and fruit with tension Dutch
- **3D**: `scenes/forbidden_taken.js`
- **SVG**: `assets/svg/scene_forbidden_taken.svg`

#### the_fall
- **Line**: "CRACK! The moment the fruit touched their lips, something tore."
- **Sketch**:
```
Camera: [SHAKE] then pull-back
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  T (wilted)
        |   \
        |    \  A (shame, crossed)
        |     \ /|\  (fig leaves)
        |      E (shame, crossed)
        |     /|\  (fig leaves)
        |    /   \
[FG]    |___________________________=
         fallen fruit
```
- **Background**: Sudden darkening sky
- **Middleground**: Adam and Eve in shame (crossed arms, fig leaves), fallen fruit, wilted Tree of Life
- **Foreground**: Ground plane with scattered leaves
- **Environment**: `FogExp2(#0a0502, 0.003)` shame fog
- **Colors**: Dark red-brown, wilted greens, earth tones, deep shadows
- **Mood**: Shock, shame, rupture
- **Animation**: Camera shake (roll oscillation), light dimming
- **Camera**: Simulated camera shake then slow pull-back
- **3D**: `scenes/the_fall.js`
- **JSON**: `assets/3d/the_fall.json`
- **SVG**: `assets/svg/scene_the_fall.svg`

#### the_hiding
- **Line**: "They heard God approaching. And they hid."
- **Sketch**:
```
Camera: [PULL-BACK] revealing hiding
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       T (Knowledge, large)
        |       |
        |     A | E  (hiding behind)
        |      \|/
        |   (crossed arms)
        |    (fig leaves)
[FG]    |___________________________=
         fallen fruit
```
- **Background**: Darkened garden
- **Middleground**: Adam and Eve hiding (behind Tree of Knowledge, crossed arms, fig leaves)
- **Foreground**: Ground plane, fallen fruit
- **Environment**: `FogExp2(#0a0502, 0.0035)` shame mist
- **Colors**: Muted earth tones, dark greens, shadowed browns
- **Lighting**: Dim ambient (0.2), distant god-light behind tree
- **Mood**: Ashamed, fearful, regretful
- **Animation**: Subtle breathing of figures (anxiety)
- **Camera**: Slow pull-back revealing the hiding
- **3D**: `scenes/the_hiding.js`
- **SVG**: `assets/svg/scene_the_hiding.svg`
### Chapter 4: Exile

#### exile_eden
- **Line**: "Adam, where are you?"
- **Sketch**:
```
Camera: [PULL-BACK] around flaming sword
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |    |           |
        |    |    G      |
        |    |   /|\     |
        |    |  / | \    |
        |    | /  |  \   |
        |    |/   |   \  |
        |    |    |    \ |
        |    |    A E   \|  (small, distant)
        |    |   (looking back)
        |   sword (flaming)
[FG]    |___________________________=
         voice rings (concentric)
```
- **Background**: Dark cosmic sky
- **Middleground**: Closed gates of Eden, flaming sword rotating, Adam and Eve small and distant, dead tree
- **Foreground**: Ground plane, scattered leaves
- **Environment**: `FogExp2(#000000, 0.003)` cosmic exile fog
- **Colors**: Flaming orange-gold sword, dark gates (stone gray), starry void
- **Lighting**: Flaming sword point light (orange), ambient (0.3), minimal
- **Mood**: Lost, searching, dramatic
- **Animation**: Sword rotating slowly, flames flickering
- **Camera**: Pull-back orbit around the flaming sword
- **3D**: `scenes/exile_eden.js`
- **JSON**: `assets/3d/exile_eden.json`
- **SVG**: `assets/svg/scene_exile_eden.svg`

#### exile_judged
- **Line**: "Because you have listened to your wife and eaten..."
- **Sketch**:
```
Camera: [HIGH ANGLE] dramatic orbit
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |    |           |
        |    |   sword   |
        |    |  /||||\   |
        |    | / |||| \  |
        |    |/  ||||  \ |
        |    |   ||||   \|
        |    |   gates (closing)
        |       S (cursed serpent)
        |      A E (departing)
[FG]    |___________________________=
         lightning flash
```
- **Background**: Stormy dark sky
- **Middleground**: Gates closing, flaming sword, cursed serpent, Adam & Eve departing
- **Foreground**: Ground plane, scattered vegetation
- **Environment**: `FogExp2(#0a0502, 0.0035)` — judgment fog with wind
- **Colors**: Dark red-gold, orange flames, stone gray gates, deep shadows
- **Lighting**: Judgment lightning (flashing), ambient (0.2), flaming sword
- **Mood**: Judgment, consequence, finality
- **Animation**: Sword rotating, lightning flickering erratically
- **Camera**: High-angle dramatic orbit, lightning-triggered camera shake
- **3D**: `scenes/exile_judged.js`
- **SVG**: `assets/svg/scene_exile_judged.svg`

#### exile_dawn
- **Line**: "Now the man has become like one of us..."
- **Sketch**:
```
Camera: [WIDE MELANCHOLY] orbit
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |    |           |
        |    |   sword   |
        |    |  (flaming)
        |    |
        |    * (dawn star)
        |   / \
        |  /   \
        | A     E  (small, departing)
        |  \   /
        |   \ /
        |  mountains
[FG]    |___________________________=
                     |
```
- **Background**: Dawn sky breaking through night
- **Middleground**: Closed gates, flaming sword, dawn star, distant mountains, small departing figures
- **Foreground**: Ground plane, wilderness growth
- **Environment**: `FogExp2(#000000, 0.0025)` — cosmic dawn mist
- **Colors**: Deep blue-black to orange dawn gradient, golden sword, star light
- **Lighting**: Dawn star (white, 0.8), flaming sword, ambient (0.4)
- **Mood**: Melancholy, reflective, transitional
- **Animation**: Flames flickering, dawn star pulsing
- **Camera**: Wide melancholy orbit, gentle roll
- **3D**: `scenes/exile_dawn.js`
- **SVG**: `assets/svg/scene_exile_dawn.svg`

#### exile_garments
- **Line**: "He made garments of skin for them — covering their nakedness with His own hands."
- **Sketch**:
```
Camera: [GENTLE ORBIT] focus on garments
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |       G (divine light)
        |       |
        |      / \
        |     /   \
        |    A     E
        |    |     |
        |  (cloth) (garments)
        |   draped between
[FG]    |___________________________=
                     |
```
- **Background**: Soft dawn glow over wilderness (`#0a0502` to `#2a1e0c` gradient)
- **Middleground**: Adam and Eve standing covered in skin garments, divine light orb above (golden), cloth draped between them
- **Foreground**: Ground plane with scattered leaves, rocky outcrops
- **Environment**: `FogExp2(#0a0502, 0.0035)` tender shame fog with warmth
- **Colors**: Warm golden-brown garments, golden divine light, muted earth tones
- **Lighting**: Warm directional (gold, 0.6), ambient (0.4), point light at ground level (brown, 0.8)
- **Mood**: Tender, forgiving, covered in grace
- **Animation**: Divine light orbs pulsing, cloth gently moving
- **Camera**: Gentle orbit, focus on the covering garments
- **JSON**: `assets/3d/exile_garments.json`
- **3D**: `scenes/exile_garments.js`
- **SVG**: `assets/svg/scene_exile_garments.svg`

#### exile_driven
- **Line**: "So the Lord drove out the man — to bar the way."
- **Sketch**:
```
Camera: [WIDE ORBIT] showing barrier
         |
[BG]    |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
        |  *  *  *  *  *  *  *  *  *  *
[MG]    |    |           |
        |    |   sword   |
        |    |  (flaming)
        |    |  (embedded)
        |    |
        |   A E (departing)
        |    \   /
        |     \ /
        |  gates (barred)
[FG]    |___________________________=
                     |
```
- **Background**: Starry night (`#03010a`)
- **Middleground**: Gates barred (stone), flaming sword embedded in earth, Adam & Eve departing into distance
- **Foreground**: Ground plane, wilderness weeds
- **Environment**: `FogExp2(#000000, 0.003)` — exile darkness
- **Colors**: Black night, orange-gold flames, stone gray gates, silhouette figures
- **Lighting**: Intense flaming sword, ambient (0.3), starlight
- **Mood**: Final, driven out, hopeless yet promised
- **Animation**: Flames flickering intensely, sword ember particles
- **Camera**: Wide orbit showing the full barrier and departure
- **3D**: `scenes/exile_driven.js`
- **SVG**: `assets/svg/scene_exile_driven.svg`

#### cain_abel
- **Line**: "Years passed. Cain and Abel brought offerings."
- **Sketch**:
```
Camera: [PAN] between brothers
         |
[BG]    |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        |  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
[MG]    |  altar      altar
        |    |          |
        |   grain      blood
        |    |          |
        |   C(angry)  A(peaceful)
        |    |          |
        |    |    ======|  (tension line)
        |    |          |
[FG]    |___________________________=
                     |
```
- **Background**: Dusk sky (`#2a1e0c`)
- **Middleground**: Two stone altar platforms, Cain (angry, arms crossed), Abel (peaceful, arms extended), red tension line between them
- **Foreground**: Ground plane, scattered offerings
- **Environment**: `FogExp2(#0a0502, 0.003)` — tension fog
- **Colors**: Dusk brown-orange, red tension, earth tones, stone gray altars
- **Lighting**: Dim directional (dusk), ambient (0.3), red tension glow
- **Mood**: Tense, divergent, foreboding
- **Animation**: Red tension line pulsing, NoGlow emissive material pulsing
- **Camera**: Pan between brothers, Dutch angle shifting toward Cain
- **3D**: `scenes/cain_abel.js`
- **JSON**: `assets/3d/cain_abel.json`
- **SVG**: `assets/svg/scene_cain_abel.svg`
---

## Design Principles

1. **Toon shader consistency**: All 3D objects use `MeshToonMaterial` with gradientMap for cel-shaded look. Emissive elements (lights, glows) use `MeshBasicMaterial`.

2. **Outline hierarchy**: Main visible objects get black `BackSide` outlines (1.08x scale). Ground planes and full-screen backgrounds do not.

3. **Cinematic camera per scene**: Each scene has a unique `cameraAnimation(t)` function defining camera choreography (orbit, dolly, push/pull, Dutch angle).

4. **Atmospheric fog**: Every scene uses `FogExp2` with scene-appropriate color and density (0.002–0.004) for depth and mood.

5. **Parallax depth**: SVG fallbacks with `data-parallax` have 3-4 depth layers (0.1-1.0) for mouse-driven parallax.

6. **SVG fallback parity**: Every 3D scene has an SVG equivalent for when Three.js is unavailable.

7. **Scene granularity**: Each story line gets its own dedicated scene file for maximum visual specificity.

8. **Spline integration**: `garden_paradise` uses a Spline-exported GLB loaded via `GLTFLoader`, converted to toon shader, with `CatmullRomCurve3` path for particle flow.

9. **Spline curves**: Organic curved shapes (serpents, rivers, light paths) use `CatmullRomCurve3` + `TubeGeometry` for natural forms.

10. **Narrative pacing**: Camera techniques vary by emotional weight — gentle orbits for peaceful scenes, tight circling + Dutch for tension, dramatic pulls for judgment.

11. **Dual asset pipeline**: Key scenes store layout as JSON in `/assets/3d/` (editable via pixel3d tool). Scene factories load JSON or JS exports, auto-converting materials to toon shader. Character-specific elements added procedurally in JS scene files.

12. **Dual export support**: `loadJSONScene()` parses pixel3d JSON format; `loadJSScene()` loads pixel3d JS exports (`initSceneN` functions) and converts `MeshPhongMaterial` → `MeshToonMaterial`.

13. **SVG-behind-3D layering**: The SVG layer is always rendered as a background (`z-index: 0`), with the Three.js canvas on top (`z-index: 2`). The renderer uses `alpha: true` + `setClearColor(0, 0)` + `scene.background = null` for transparency. The fog (set via `makeFog()`) provides atmospheric tinting that matches the SVG background color, creating seamless depth blending between 2D and 3D layers. SVG parallax still works on mouse movement, adding depth to the background while 3D models animate in the foreground.

## Audio System

### Background Music
Each act has a dedicated background music track that plays on loop:

| Act | ID | Music File (OGG primary, MP3 fallback) |
|-----|----|----------------------------------------|
| 1 | `creation` | `assets/audio/music/Act1_Morning_on_the_Mesa.ogg` |
| 2 | `garden` | `assets/audio/music/Act2_After_the_Spring_Rain.ogg` |
| 3 | `helper` | `assets/audio/music/Act3_Before_the_Sun_Climbs.ogg` |
| 4 | `temptation` | `assets/audio/music/Act4_The_Open_Gate_at_Twilight.ogg` |
| 5 | `exile` | `assets/audio/music/Act5_The_Long_Road_to_Yuma.ogg` |
| 6 | `west` | `assets/audio/music/Act6_West_of_the_Divide.ogg` |

### Sound Effects
- **Navigation**: `assets/audio/ping_pong.mp3` plays when advancing lines or chapters via the Next button.

### Audio Toggle
- **Button**: `#audioToggle` in the bottom-right corner
- **States**: 🔊 (on) / 🔇 (off)
- **Behavior**: Toggle persists for the session; music pauses when off and resumes when toggled back on.

### Implementation
- Audio state managed in `adam-comic.js`:
  - `audioEnabled` — boolean toggle state
  - `currentAudio` — tracks current act audio source
  - `playActAudio(act)` — loads and loops act music
  - `playSfx(path)` — plays one-shot sound effects
  - `toggleAudio()` — toggles audio on/off and updates button icon

---

## Asset Format: `/assets/3d/`

### Two export formats supported (importable via pixel3d tool):

#### JSON Format (`*.json`)
Pixel3d-compatible scene format. Each file describes objects, lights, settings, and camera config:

| Field | Type | Description |
|-------|------|-------------|
| `version` | number | Format version (1) |
| `name` | string | Scene identifier |
| `settings.background` | string | Hex background color |
| `settings.fog` | `{color, density}` | `FogExp2` config |
| `camera` | `{distance, height}` | Default camera position |
| `objects[]` | array | Scene objects |
| `cameraAnimation` | object | Camera choreography params |

**Object format:**
| `type` | Values | Extra Fields |
|--------|--------|--------------|
| `shape` | — | `shapeType` (box/sphere/cylinder/plane), `color`, `material` ({type, color, outline}), `position/rotation/scale`, `userData.aframe.shadow` |
| `light` | — | `lightType` (point/directional/ambient), `color`, `intensity`, `position` |
| `decoration` | `stars`/`rays`/`tensionLine` | `count`, `spread`, `color`, `size`, etc. |

Loader: `loadJSONScene(jsonData, THREE.Scene)` → returns `THREE.Group`

#### JS Format (`*.js`)
Executable scene file defining:
- `window.initScene1(group)` — adds geometry meshes (`MeshPhongMaterial`)
- `window.initSceneLights(group)` — adds lights
- `window.initAllScenes(group)` — convenience wrapper

Loader: `loadJSScene(url, group, callback)` — dynamically loads `<script>`, calls init functions, auto-converts `MeshPhongMaterial` → toon shader + outlines

#### Files in `/assets/3d/`:

| File | Format | Scene | Notes |
|------|--------|-------|-------|
| `scene example.json` | JSON | (demo) | Original pixel3d export format |
| `scene example.js` | JS | (demo) | Original pixel3d JS export |
| `creation_cosmos.json` | JSON | creation_cosmos | Cosmic scene, earth/moon/light |
| `creation_light.json` | JSON | creation_light | Light burst, expanding waves |
| `creation_separation.json` | JSON | creation_separation | Light vs darkness spheres |
| `garden_paradise.json` | JSON | garden_paradise | Garden with river spline |
| `garden_paradise.js` | JS | garden_paradise | Full geometry + lights (toon-converted) |
| `garden_trees.json` | JSON | garden_trees | Two trees, Adam & Eve |
| `serpent_tree.json` | JSON | serpent_tree | Tree, serpent, Eve |
| `serpent_taken.json` | JSON | serpent_taken | Eve offers fruit to Adam |
| `the_fall.json` | JSON | the_fall | Shame, fallen fruit, fig leaves |
| `exile_eden.json` | JSON | exile_eden | Gates, flaming sword, exile |
| `exile_garments.json` | JSON | exile_garments | Skin garments, divine covering |
| `cain_abel.json` | JSON | cain_abel | Brothers, altar stones |

### Workflow:
1. Edit scene in **Spline.app** → Export as GLB → place in `/spline/`
2. OR edit scene in **pixel3d** → Export as JSON/JS → place in `/assets/3d/`
3. Scene factory (`scenes/*.js`) loads asset data via `loadSplineScene()` / `loadJSScene()` / `loadJSONScene()`
4. All materials auto-converted to toon shader with gradientMap + black outlines
5. Comic-specific elements (characters, SFX) added procedurally in the JS scene factory
