#!/usr/bin/env node3
/**
 * standardize-story.js
 *
 * Standardises the folder structure of Bible-stories narrative directories
 * so that every story uses the same layout:
 *
 *   <story>/
 *   ├── data/
 *   │   ├── manifest.json        (act directory — one entry per chapter)
 *   │   ├── act1_<id>.json       (full act data — lines, bg, particle, svg, audio)
 *   │   ├── act2_<id>.json
 *   │   └── canon.json           (story metadata — characters, materials, games)
 *   ├── assets/
 *   │   ├── audio/ping_pong.mp3  (button click SFX)
 *   │   ├── characters/          (all character .svg + .json files)
 *   │   ├── scenes/              (Three.js scene factory .js files)
 *   │   ├── svg/                 (scene foreground / background SVGs)
 *   │   └── fonts/
 *   ├── index.html
 *   ├── <story>-comic.js         (boot loads from data/manifest.json)
 *   └── ...
 *
 * Usage:  node scripts/standardize-story.js <StoryName>
 *         node scripts/standardize-story.js --all
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATE = path.join(ROOT, '__Template');

function log(msg) { console.log(msg); }

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        log(`  + created dir: ${path.relative(ROOT, dir)}`);
    }
}

function copyFile(src, dest) {
    if (fs.existsSync(src) && !fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        log(`  copied ${path.relative(ROOT, src)} -> ${path.relative(ROOT, dest)}`);
    }
}

/**
 * Build a data/manifest.json from a flat story array and write
 * data/actN_<id>.json for each act.
 */
function splitStoryJson(storyArray, storyDir) {
    const dataDir = path.join(storyDir, 'data');
    ensureDir(dataDir);

    const acts = storyArray.map((act, idx) => {
        const n = idx + 1;
        const fileName = `act${n}_${act.id}.json`;
        const filePath = path.join(dataDir, fileName);
        fs.writeFileSync(filePath, JSON.stringify(act, null, 2));
        log(`  wrote data/${fileName}`);
        const entry = {
            id: act.id,
            name: act.name,
            file: fileName
        };
        if (act.svg) entry.svg = act.svg;
        if (act.assetFolder) entry.assetFolder = act.assetFolder;
        if (act.assetStem) entry.assetStem = act.assetStem;
        if (act.scene) entry.scene = act.scene;
        if (act.foreground) entry.foreground = act.foreground;
        if (act.particle) entry.particle = act.particle;
        if (act.bg) entry.bg = act.bg;
        if (act.audio) entry.audio = act.audio;
        return entry;
    });

    const manifest = {
        version: '2.0.0',
        acts
    };
    fs.writeFileSync(path.join(dataDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
    log('  wrote data/manifest.json');
}

/**
 * Move character SVGs that live in assets/svg/character_*.svg
 * into assets/characters/<name>.svg (stripping the character_ prefix).
 * Skips files that already exist in the destination to avoid overwriting.
 */
function moveCharacterSvgs(storyDir) {
    const svgDir = path.join(storyDir, 'assets', 'svg');
    const charDir = path.join(storyDir, 'assets', 'characters');
    if (!fs.existsSync(svgDir)) return;

    ensureDir(charDir);
    const svgFiles = fs.readdirSync(svgDir).filter(f => /^character_.+\.svg$/i.test(f));
    for (const file of svgFiles) {
        const stem = file.replace(/^character_/, '');
        const src = path.join(svgDir, file);
        const dest = path.join(charDir, stem);
        if (fs.existsSync(dest)) {
            const srcSize = fs.statSync(src).size;
            const destSize = fs.statSync(dest).size;
            if (srcSize > destSize) {
                fs.copyFileSync(src, dest);
                log(`  replaced assets/characters/${stem} (was ${destSize}B, new ${srcSize}B)`);
            } else {
                log(`  kept assets/characters/${stem} (already exists)`);
            }
        } else {
            fs.copyFileSync(src, dest);
            fs.unlinkSync(src);
            log(`  moved assets/svg/${file} -> assets/characters/${stem}`);
        }
    }
}

/**
 * Consolidate character files that still have the character_ prefix in
 * assets/characters/ — rename them to the template convention
 * (assets/characters/<name>.svg / .json) by stripping the prefix.
 */
function consolidateCharacterFiles(storyDir) {
    const charDir = path.join(storyDir, 'assets', 'characters');
    if (!fs.existsSync(charDir)) return;

    const files = fs.readdirSync(charDir).filter(f => /^character_[A-Za-z0-9_-]+\.(svg|json)$/.test(f));
    for (const file of files) {
        const stem = file.replace(/^character_/, '');
        const src = path.join(charDir, file);
        const dest = path.join(charDir, stem);
        if (fs.existsSync(dest)) {
            fs.unlinkSync(src);
            log(`  removed duplicate assets/characters/${file}`);
        } else {
            fs.renameSync(src, dest);
            log(`  renamed assets/characters/${file} -> ${stem}`);
        }
    }
}
/**
 * Ensure the button-click SFX exists.
 */
function ensurePingPong(storyDir) {
    const audioDir = path.join(storyDir, 'assets', 'audio');
    const target = path.join(audioDir, 'ping_pong.mp3');
    if (!fs.existsSync(target)) {
        ensureDir(audioDir);
        const templateSrc = path.join(TEMPLATE, 'assets', 'audio', 'ping_pong.mp3');
        if (fs.existsSync(templateSrc)) {
            fs.copyFileSync(templateSrc, target);
            log(`  copied template ping_pong.mp3 -> assets/audio/ping_pong.mp3`);
        } else {
            log(`  WARNING: template ping_pong.mp3 not found, skipping`);
        }
    }
}

/**
 * Move story-canon.json to data/canon.json.
 */
function moveCanon(storyDir) {
    const canonPath = path.join(storyDir, 'story-canon.json');
    const dataDir = path.join(storyDir, 'data');
    if (!fs.existsSync(canonPath)) return;
    ensureDir(dataDir);
    const dest = path.join(dataDir, 'canon.json');
    fs.copyFileSync(canonPath, dest);
    log(`  moved story-canon.json -> data/canon.json`);
    fs.unlinkSync(canonPath);
    log(`  removed story-canon.json`);
}

/**
 * Update precache-manifest.json to reference data/ files instead of
 * root-level *-story.json, and fix character path references.
 */
function updatePrecacheManifest(storyDir, storyName) {
    const manifestPath = path.join(storyDir, 'precache-manifest.json');
    if (!fs.existsSync(manifestPath)) return;

    let pm;
    try { pm = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); }
    catch (e) { log(`  could not parse precache-manifest.json`); return; }

    var changed = false;
    var newUrls = [];
    var lowerName = storyName.toLowerCase();
    var prefix = lowerName + '/';  // e.g., "adam/" — some manifests use story-name prefix
    var hasPrefix = (pm.urls || []).some(function (u) { return u.startsWith(lowerName + '/'); });

    for (const url of pm.urls || []) {
        var newUrl = url;

        // Detect the URL format: "Adam/anything" or "anything"
        // Strip story-dir prefix to get path relative to story directory
        var relPath = url;
        if (hasPrefix) {
            relPath = url.substring(prefix.length);
        }

        // Replace root-level *-story.json with data/manifest.json
        if (relPath.match(/^-story\.json$/) || relPath.match(new RegExp('^' + lowerName + '-story\\.json$'))) {
            if (!hasPrefix) {
                newUrls.push('data/manifest.json');
            } else {
                newUrls.push(prefix + 'data/manifest.json');
            }
            changed = true;
            continue;
        }

        // Replace data/story.json with data/manifest.json
        if (relPath === 'data/story.json') {
            if (!hasPrefix) {
                newUrls.push('data/manifest.json');
            } else {
                newUrls.push(prefix + 'data/manifest.json');
            }
            changed = true;
            continue;
        }

        // Fix character_ prefixed paths
        var before = newUrl;
        newUrl = newUrl.replace(/assets\/svg\/character_([A-Za-z0-9_-]+)\.svg/, 'assets/characters/$1.svg');
        newUrl = newUrl.replace(/assets\/characters\/character_([A-Za-z0-9_-]+)\.svg/, 'assets/characters/$1.svg');
        if (newUrl !== before) changed = true;

        newUrls.push(newUrl);
    }

    // Add any missing data/act*.json files that aren't already listed
    var dataDir = path.join(storyDir, 'data');
     if (fs.existsSync(dataDir)) {
        var allJsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
        for (const f of allJsonFiles) {
            var newEntry = hasPrefix ? (prefix + 'data/' + f) : ('data/' + f);
            if (!newUrls.includes(newEntry)) {
                var manifestEntry = hasPrefix ? (prefix + 'data/manifest.json') : 'data/manifest.json';
                var mIdx = newUrls.indexOf(manifestEntry);
                if (mIdx >= 0) {
                    newUrls.splice(mIdx, 0, newEntry);
                } else {
                    newUrls.push(newEntry);
                }
                changed = true;
            }
        }
    }

    // Filter out stale entries (files that no longer exist)
    var originalCount = newUrls.length;
    newUrls = newUrls.filter(function (url) {
        var relPath = url;
        if (hasPrefix) {
            relPath = url.substring(prefix.length);
        }
        var filePath = path.join(storyDir, relPath);
        if (!fs.existsSync(filePath)) {
            log(`  removed stale entry: ${url}`);
            return false;
        }
        return true;
    });
    if (newUrls.length < originalCount) {
        changed = true;
    }

    if (changed) {
        pm.urls = newUrls;
        fs.writeFileSync(manifestPath, JSON.stringify(pm, null, 2), 'utf8');
        log(`  updated precache-manifest.json`);
    }
}
function patchStoryJs(storyDir, storyName, jsFile) {
    const jsPath = path.join(storyDir, jsFile);
    if (!fs.existsSync(jsPath)) {
        log(`  no JS file found, skipping (${jsFile})`);
        return;
    }

    let code = fs.readFileSync(jsPath, 'utf8');
    let changed = false;

    // Pattern 1: fetch('<name>-story.json') -> single-file array
    // Match any <name>-story.json (case-insensitive) and a subsequent STORY = await <var>.json();
    var singleFileRegex = new RegExp(
        "^([ \\t]*)const\\s+\\w+\\s*=\\s*await\\s*fetch\\(['\"][^'\"]*story\\.json['\"]\\);[\\s\\S]*?" +
        "STORY\\s*=\\s*await\\s*\\w+\\.json\\(\\);",
        'msi'
    );

    if (singleFileRegex.test(code)) {
        code = code.replace(singleFileRegex, function (match, capturedIndent) {
            var indent = capturedIndent || '';
            return indent + "const res = await fetch('data/manifest.json');\n" +
                   indent + "const manifest = await res.json();\n" +
                   indent + "STORY = await Promise.all(manifest.acts.map(async act => {\n" +
                   indent + "    const r = await fetch(`data/${act.file}`);\n" +
                   indent + "    return Object.assign(act, await r.json());\n" +
                   indent + "}));";
        });
        changed = true;
        log(`  patched ${jsFile}: root story JSON -> data/ manifest loader`);
    } else if (/fetch\(['"]data\/manifest\.json['"]\)/.test(code)) {
        // Pattern 2: Already uses manifest — nothing to do
        log(`  ${jsFile} already loads from data/manifest.json`);
    } else {
        log(`  could not auto-patch ${jsFile} — no recognized fetch pattern`);
    }

    // Pattern 3: Update character SVG paths
    var before = code;
    code = code.replace(/assets\/svg\/character_([A-Za-z0-9_-]+)\.svg/g, 'assets/characters/$1.svg');
    code = code.replace(/assets\/characters\/character_([A-Za-z0-9_-]+)\.svg/g, 'assets/characters/$1.svg');
    if (code !== before) {
        changed = true;
        log(`  updated character SVG paths in ${jsFile}`);
    }

    if (changed) {
        fs.writeFileSync(jsPath, code, 'utf8');
    }
}

/**
 * Standardise a single story directory.
 */
function standardizeStory(storyName) {
    var storyDir = path.join(ROOT, storyName);
    if (!fs.existsSync(storyDir)) {
        console.error('Story directory not found: ' + storyName);
        return;
    }
    log('\n=== Standardizing ' + storyName + ' ===');

    var files = fs.readdirSync(storyDir);

    // 1. Check for root-level *-story.json
    var storyJsonFile = files.find(function (f) {
        return f.match(new RegExp('^' + storyName + '-story\\.json$')) ||
               f.match(/^-story\.json$/);
    }) || files.find(function (f) { return f.endsWith('-story.json'); });

    if (storyJsonFile) {
        log('Found story data: ' + storyJsonFile);
        var storyData = JSON.parse(fs.readFileSync(path.join(storyDir, storyJsonFile), 'utf8'));
        if (Array.isArray(storyData)) {
            splitStoryJson(storyData, storyDir);
        }
        fs.unlinkSync(path.join(storyDir, storyJsonFile));
        log('removed ' + storyJsonFile);
    } else {
        log('No root-level *-story.json found.');
    }

    // 1b. Check for data/story.json (single-file array already inside data/)
    var dataStoryJson = path.join(storyDir, 'data', 'story.json');
    if (fs.existsSync(dataStoryJson)) {
        log('Found data/story.json');
        var dStoryData = JSON.parse(fs.readFileSync(dataStoryJson, 'utf8'));
        if (Array.isArray(dStoryData)) {
            splitStoryJson(dStoryData, storyDir);
        }
        fs.unlinkSync(dataStoryJson);
        log('removed data/story.json');
    }

    // 2. Move story-canon.json -> data/canon.json
    moveCanon(storyDir);

    // 3. Move character_*.svg -> assets/characters/
    moveCharacterSvgs(storyDir);
    consolidateCharacterFiles(storyDir);

    // 4. Ensure ping_pong.mp3 exists
    ensurePingPong(storyDir);

    // 5. Patch JS to load from data/
    var lowerName = storyName.toLowerCase();
    var jsCandidates = [
        lowerName + '-comic.js',
        lowerName + '-story.js',
        'app.js',
        lowerName + '-field-background.js',
        lowerName + '-scenes-helpers.js'
    ];
    // Fallback: find any *-comic.js or *-story.js if exact name doesn't match
    if (!jsCandidates.some(function (js) { return files.includes(js); })) {
        var fallback = files.find(function (f) {
            return f.match(/-comic\.js$/) || f.match(/-story\.js$/);
        });
        if (fallback) {
            log(`  using fallback JS file: ${fallback}`);
            jsCandidates.push(fallback);
        }
    }
    for (var i = 0; i < jsCandidates.length; i++) {
        var js = jsCandidates[i];
        if (files.includes(js)) {
            patchStoryJs(storyDir, storyName, js);
            break;
        }
    }

    // 6. Update precache-manifest.json
    updatePrecacheManifest(storyDir, storyName);

    log('=== ' + storyName + ' done ===\n');
}

// --- Main ---
var args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log('\nUsage: node scripts/standardize-story.js <StoryName> [--all]\n');
    console.log('Examples:');
    console.log('  node scripts/standardize-story.js Adam');
    console.log('  node scripts/standardize-story.js --all\n');
    process.exit(0);
}

if (args[0] === '--all') {
    var stories = fs.readdirSync(ROOT)
        .filter(function (d) { return d[0] !== '_' && d[0] !== '.' && d !== 'scripts' && d !== 'tests' && d !== 'shared-tools'; })
        .filter(function (d) { return fs.statSync(path.join(ROOT, d)).isDirectory(); })
        .filter(function (d) {
            var hasIndex = fs.existsSync(path.join(ROOT, d, 'index.html'));
            var hasStoryJson = fs.readdirSync(path.join(ROOT, d)).some(function (f) {
                return f.endsWith('-story.json') || f === 'story-canon.json';
            });
            return hasIndex || hasStoryJson;
        });

    console.log('Found ' + stories.length + ' story directories to standardise:\n');
    stories.forEach(function (s) {
        try { standardizeStory(s); }
        catch (e) { console.error('  ERROR in ' + s + ':', e.message); }
    });
    console.log('\nAll stories standardised.');
} else {
    standardizeStory(args[0]);
    console.log('\nDone.');
}
