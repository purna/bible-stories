/**
 * Rewire shot_designer.html to load the split modules instead of an inline
 * <script>. Adds the import map (so js/ modules can `import ... from 'three'`)
 * and the scene selector the SceneLibrary populates.
 *
 * Idempotent: reads the .pre-split.bak backup, not the live file.
 */
import fs from 'node:fs';
import path from 'node:path';

const dir = '/Users/nigelmorris/Documents/GitHub/bible-stories/__Template/tools/shot-designer';
const html = fs.readFileSync(path.join(dir, 'shot_designer.html.pre-split.bak'), 'utf8');

// 1. drop the inline script block, keep the three.js + mp4-muxer UMD tags
const openRe = /^ {4}<script>$/m;
const m = html.match(openRe);
if (!m) throw new Error('inline <script> not found');
const start = html.indexOf(m[0]);
const end = html.indexOf('    </script>', start);
if (end < 0) throw new Error('inline </script> not found');
let out = html.slice(0, start) + html.slice(end + '    </script>'.length);

// 2. import map, so `import ... from 'three'` resolves in js/ modules
if (!out.includes('type="importmap"')) {
  out = out.replace(
    '    <link rel="stylesheet" href="styles.css">',
    [
      '    <link rel="stylesheet" href="styles.css">',
      '',
      '    <!-- Lets the js/ ES modules import three; js/three.js prefers the UMD',
      '         global when present so only one three.js instance is ever created. -->',
      '    <script type="importmap">',
      '    {',
      '        "imports": {',
      '            "three": "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js"',
      '        }',
      '    }',
      '    </script>',
    ].join('\n')
  );
}

// 3. scene selector, populated by SceneLibrary
if (!out.includes('id="scn"')) {
  out = out.replace(
    '        <div id="shots">',
    [
      '        <div class="scn">',
      '            <label for="scn">Scene</label>',
      '            <select id="scn"></select>',
      '            <small id="scne"></small>',
      '        </div>',
      '        <div id="shots">',
    ].join('\n')
  );
}

// 4. entry point
out = out.replace(
  '</body>',
  [
    '    <!-- three.js also arrives as a UMD global for js/three.js to reuse. -->',
    '    <script type="module" src="js/app.js"></script>',
    '</body>',
  ].join('\n')
);

if (/<script>\s*$/.test(out.split('</body>')[0].trimEnd() + '\n')) {
  // no-op: inline script already removed
}

// verify
if (/^ {4}<script>\n[\s\S]*?const R = new THREE/.test(out)) {
  throw new Error('inline script survived');
}
if (!out.includes('js/app.js')) throw new Error('entry point not injected');
if (!out.includes('type="importmap"')) throw new Error('import map not injected');
if (!out.includes('id="scn"')) throw new Error('scene selector not injected');
if (!out.includes('three.min.js')) throw new Error('three UMD tag was lost');
if (!out.includes('mp4-muxer')) throw new Error('mp4-muxer tag was lost');

fs.writeFileSync(path.join(dir, 'shot_designer.html'), out);
const before = html.split('\n').length, after = out.split('\n').length;
console.log(`shot_designer.html  ${before} -> ${after} lines`);
console.log(`  inline script removed, import map + scene selector + module entry added`);
