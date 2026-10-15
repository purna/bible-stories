# City of David landing scene

Original, procedural Three.js landscape for the Bible Stories landing page. The city is a stylised interpretation: stone houses, a citadel, defensive walls, cultivated terraces, and olive trees. It is not an archaeological reconstruction.

The landing page keeps the comic cover’s warm cream surface, ink outlines, orange title, halftone overlay, and fixed two-degree tilt. A separate non-interactive light follows the pointer across the background. Twenty-eight translucent, locally drawn cloud banks, each formed from four to seven overlapping puffs in varied sizes, rotations, and mirrored orientations enter from beyond the viewport edges and rise through roughly two screen heights as the menu scrolls, and freeze with the scene when paused or reduced motion is enabled.

The pointer and the accessible viewpoint slider move the camera sideways; scrolling inside the height-limited story menu moves the camera and cloud layers through their depth ranges. The page stays within the viewport, and its cover keeps a fixed two-degree rotation, including hover and reduced-motion states. Foreground geometry, the city, and distant ridgelines produce parallax through real depth. Clouds drift through separate depth layers above the city, using a locally generated canvas texture. Camera damping is time-based, and active animation is capped at 30 frames per second. Rendering stops when hidden or paused, and starts still when the user prefers reduced motion. The pause control freezes the current viewpoint and clouds immediately.

Nine bird silhouettes cross the cloud layers in both directions, with varied sizes, gliding paths, and wing phases. Their movement uses the scene clock, so pause and reduced motion stop both flight and wingbeats. The birds were inspired by [Bert Beckwith’s bird example](https://codepen.io/Bert-Beckwith/pen/LYvEgMZ) and use original vector silhouettes.

The existing local Three.js bundle is loaded from `David/vendor/three.r128.min.js`. No remote textures or 3D services are needed. `fallback.svg` displays when WebGL or the bundle is unavailable. Root offline caching includes all required files. Scene assets use network-first updates online. Localhost previews unregister the root service worker so stale cached styling cannot hide edits.

The layered clouds and gentle damping were inspired by the supplied [Canvallax cloud example](https://codepen.io/GabeTheCoderMan/pen/MWZMJbZ); no additional library is required. The depth and camera movement were inspired by [wakana-k’s Parallax Skybox](https://codepen.io/wakana-k/pen/zYMzmxv). This scene uses original geometry rather than that example’s panorama and depth map.

To verify, serve the repository locally and run `node tests/city-scene-browser.mjs` with Playwright installed and Chrome available. Set `STORY_TEST_URL` if the preview is not at `http://127.0.0.1:8123`.
