import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const configName = 'mediamesh-package.json';
const checkOnly = process.argv.includes('--check');
const verbose = process.argv.includes('--verbose');

// ---------------------------------------------------------------------------
// Minimal ZIP writer (deflate, UTF-8 names) so packaging needs no dependencies.
// ---------------------------------------------------------------------------
const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(input) {
  // ZIP stores DOS timestamps, which cannot represent dates before 1980.
  // Old asset mtimes otherwise produce a negative day field and crash the
  // writer with ERR_OUT_OF_RANGE.
  const source = input instanceof Date && !Number.isNaN(input.getTime()) ? input : new Date();
  const safe = source.getFullYear() < 1980
    ? new Date(1980, 0, 1, 0, 0, 0)
    : source;
  const time = (safe.getHours() << 11) | (safe.getMinutes() << 5) | (safe.getSeconds() >> 1);
  const day = ((safe.getFullYear() - 1980) << 9) | ((safe.getMonth() + 1) << 5) | safe.getDate();
  return { time, day };
}

function createZip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const entry of entries) {
    const name = Buffer.from(entry.name, 'utf8');
    const raw = entry.data;
    const deflated = zlib.deflateRawSync(raw, { level: 9 });
    const { time, day } = dosDateTime(entry.date ?? new Date());
    const crc = crc32(raw);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(8, 8); // deflate
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(day, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(deflated.length, 18);
    local.writeUInt32LE(raw.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, deflated);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4); // version made by
    central.writeUInt16LE(20, 6); // version needed
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(day, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(deflated.length, 20);
    central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30); // extra
    central.writeUInt16LE(0, 32); // comment
    central.writeUInt16LE(0, 34); // disk
    central.writeUInt16LE(0, 36); // internal attrs
    central.writeUInt32LE(0o644 << 16, 38); // external attrs
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);

    offset += local.length + name.length + deflated.length;
  }

  const centralSize = centrals.reduce((sum, buffer) => sum + buffer.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);

  return Buffer.concat([...locals, ...centrals, end]);
}

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function globToRegExp(glob) {
  let source = '^';
  for (let i = 0; i < glob.length; i++) {
    const char = glob[i];
    if (char === '*') {
      if (glob[i + 1] === '*') {
        i++;
        if (glob[i + 1] === '/') {
          i++;
          source += '(?:.*/)?';
        } else {
          source += '.*';
        }
      } else {
        source += '[^/]*';
      }
    } else if (char === '?') {
      source += '[^/]';
    } else {
      source += char.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    }
  }
  return new RegExp(`${source}$`);
}

function findConfigs(dir, depth = 0, results = []) {
  if (depth > 2) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const folder = path.join(dir, entry.name);
    if (fs.existsSync(path.join(folder, configName))) {
      results.push(folder);
    }
    findConfigs(folder, depth + 1, results);
  }
  return results;
}

function relativeFromRoot(file) {
  return toPosix(path.relative(root, file));
}

// ---------------------------------------------------------------------------
// Story discovery and automatic file collection
// ---------------------------------------------------------------------------
const catalogPath = path.join(root, 'assets/journey/stories.json');
const skippedSitePrefixes = [
  '.git/',
  '.github/',
  'node_modules/',
  'dist/',
  'scripts/',
  'tests/',
  'tools/',
  '__docs/',
  '__Tools/',
  '__games/',
  '__template/',
];
const textExtensions = new Set(['.html', '.htm', '.css', '.js', '.mjs']);
const assetExtensionPattern = /\.(?:html?|css|js|mjs|json|svg|png|jpe?g|webp|gif|ico|mp3|ogg|wav|webm|mp4|woff2?|ttf|otf)$/i;

function normalizeEntry(value) {
  let entry = String(value ?? '').replace(/\\/g, '/').trim();
  while (entry.startsWith('/')) entry = entry.slice(1);
  if (!entry) return '';
  return entry.endsWith('/') ? entry : `${entry}/`;
}

function normalizeSitePath(value) {
  const cleaned = String(value ?? '').replace(/\\/g, '/').replace(/^\/+/, '');
  if (!cleaned) return '';
  return path.posix.normalize(cleaned).replace(/^\.\//, '');
}

function isExternalReference(reference) {
  const value = String(reference ?? '').trim();
  if (!value) return true;
  if (value.startsWith('#') || value.startsWith('//')) return true;
  return /^[a-z][a-z0-9+.-]*:/i.test(value);
}

function stripQueryAndFragment(reference) {
  return String(reference ?? '').split('#')[0].split('?')[0].trim();
}

function isSkippedSitePath(sitePath) {
  const normalized = normalizeSitePath(sitePath);
  if (!normalized) return true;
  return skippedSitePrefixes.some((prefix) => normalized === prefix.slice(0, -1) || normalized.startsWith(prefix));
}

function isTextSitePath(sitePath) {
  return textExtensions.has(path.posix.extname(sitePath).toLowerCase());
}

function resolveSitePath(baseSitePath, reference) {
  const raw = stripQueryAndFragment(reference);
  if (!raw || isExternalReference(raw)) return null;
  const baseDirectory = path.posix.dirname(normalizeSitePath(baseSitePath));
  const joined = raw.startsWith('/')
    ? normalizeSitePath(raw)
    : path.posix.normalize(path.posix.join(baseDirectory, raw));
  const normalized = normalizeSitePath(joined);
  if (!normalized || normalized === '.' || normalized.startsWith('../')) return null;
  if (isSkippedSitePath(normalized)) return null;
  return normalized;
}

function resolvePrecachePath(entry, reference) {
  const raw = stripQueryAndFragment(reference);
  if (!raw || isExternalReference(raw)) return null;
  if (raw.startsWith('/')) return normalizeSitePath(raw);
  const entryName = entry.replace(/\/$/, '').split('/').filter(Boolean).pop() ?? '';
  if (entryName && (raw === entryName || raw.startsWith(`${entryName}/`))) {
    return normalizeSitePath(path.posix.join(entry, raw.slice(entryName.length)));
  }
  if (raw.startsWith(entry)) return normalizeSitePath(raw);
  return resolveSitePath(`${entry}precache-manifest.json`, raw);
}

function extractReferences(sitePath, body) {
  const extension = path.posix.extname(sitePath).toLowerCase();
  const references = [];

  if (extension === '.html' || extension === '.htm') {
    for (const match of body.matchAll(/(?:src|href|poster|data-src)\s*=\s*["']([^"']+)["']/gi)) {
      references.push(match[1]);
    }
    for (const match of body.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
      references.push(match[1]);
    }
  } else if (extension === '.css') {
    for (const match of body.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
      references.push(match[1]);
    }
  } else if (extension === '.js' || extension === '.mjs') {
    for (const match of body.matchAll(/["'`]([^"'`\s]+?\.(?:html?|css|js|mjs|json|svg|png|jpe?g|webp|gif|ico|mp3|ogg|wav|webm|mp4|woff2?|ttf|otf)(?:\?[^"'`]*)?)["'`]/gi)) {
      references.push(match[1]);
    }
  }

  // Template literals and MIME strings produce plausible-looking but fake
  // paths such as `${stem}.svg` or `application/json,.json`.
  return references.filter((reference) => {
    const value = stripQueryAndFragment(reference);
    if (!value || isExternalReference(value)) return false;
    if (/[${}<>*,\s]/.test(value)) return false;
    return assetExtensionPattern.test(value);
  });
}

function addSiteFile(sources, sitePath) {
  const normalized = normalizeSitePath(sitePath);
  if (!normalized || normalized === '.' || normalized.startsWith('../') || isSkippedSitePath(normalized)) {
    return false;
  }
  const absolute = path.join(root, normalized);
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) return false;
  sources.set(normalized, absolute);
  return true;
}

// Builds a package file list for a complete story without requiring a
/// mediamesh-package.json. Precache manifests are authoritative when present;
/// a reference crawl fills in nested stories such as Abraham/Babel.
function collectAutoSources(folder, entry) {
  const sources = new Map();
  const warnings = [];
  const missing = [];

  addSiteFile(sources, `${entry}index.html`);
  for (const optional of ['manifest.json', 'favicon.svg', configName]) {
    addSiteFile(sources, `${entry}${optional}`);
  }

  const precachePath = path.join(folder, 'precache-manifest.json');
  if (fs.existsSync(precachePath)) {
    addSiteFile(sources, `${entry}precache-manifest.json`);
    try {
      const precache = JSON.parse(fs.readFileSync(precachePath, 'utf8'));
      for (const url of precache.urls ?? []) {
        const sitePath = resolvePrecachePath(entry, url);
        if (!sitePath) continue;
        if (!addSiteFile(sources, sitePath)) missing.push(sitePath);
      }
    } catch (error) {
      warnings.push(`could not read precache manifest: ${error.message}`);
    }
  } else {
    warnings.push('no precache-manifest.json; using reference crawl only');
  }

  const processed = new Set();
  const queue = [...sources.keys()].filter(isTextSitePath);
  while (queue.length > 0) {
    const sitePath = queue.shift();
    if (processed.has(sitePath)) continue;
    processed.add(sitePath);
    const absolute = sources.get(sitePath);
    if (!absolute) continue;
    let body;
    try {
      body = fs.readFileSync(absolute, 'utf8');
    } catch (_) {
      continue;
    }
    for (const reference of extractReferences(sitePath, body)) {
      const resolved = resolveSitePath(sitePath, reference);
      if (!resolved || !assetExtensionPattern.test(resolved)) continue;
      if (sources.has(resolved)) {
        if (isTextSitePath(resolved) && !processed.has(resolved)) queue.push(resolved);
        continue;
      }
      if (addSiteFile(sources, resolved)) {
        if (isTextSitePath(resolved)) queue.push(resolved);
      } else {
        missing.push(resolved);
      }
    }
  }

  const plausibleMissing = [...new Set(missing)].filter((sitePath) => {
    const base = path.posix.basename(sitePath);
    return assetExtensionPattern.test(base) && !/[${}<>*,\s]/.test(sitePath);
  });
  if (plausibleMissing.length > 0) {
    const sample = plausibleMissing.slice(0, 5).join(', ');
    warnings.push(`${plausibleMissing.length} referenced file(s) were not found (e.g. ${sample})`);
  }

  return { sources, warnings };
}

function versionForStory(folder, config) {
  if (config?.version) return String(config.version);
  const precachePath = path.join(folder, 'precache-manifest.json');
  if (fs.existsSync(precachePath)) {
    try {
      const precache = JSON.parse(fs.readFileSync(precachePath, 'utf8'));
      if (precache.version) return String(precache.version);
    } catch (_) {
      // Fall through to the default version.
    }
  }
  return '1.0.0';
}

// ---------------------------------------------------------------------------
// Package a single story folder
// ---------------------------------------------------------------------------
function packageStory(folder, options = {}) {
  const configPath = path.join(folder, configName);
  const config = options.config ?? JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const entry = normalizeEntry(config.entry ?? relativeFromRoot(folder));
  const id = config.id ?? entry.split('/').filter(Boolean).pop();
  const title = config.title ?? id;
  const version = config.version ?? '1.0.0';

  if (config.enabled === false) return null;
  if (!/^[A-Za-z0-9._-]+$/.test(id)) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: invalid id "${id}"`);
  }
  if (!options.sources && (!Array.isArray(config.files) || config.files.length === 0)) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: "files" must be a non-empty array`);
  }

  const selected = new Map(); // archive path -> absolute source path

  if (options.sources) {
    for (const [archivePath, absolute] of options.sources) {
      selected.set(archivePath, absolute);
    }
  } else {
    const storyFiles = new Map(walk(folder).map((file) => [toPosix(path.relative(folder, file)), file]));
    const sharedFiles = new Map(
      ['shared', 'shared-tools', 'assets/journey']
        .flatMap((dir) => walk(path.join(root, dir)))
        .map((file) => [relativeFromRoot(file), file]),
    );

    for (const rawPattern of config.files) {
      const pattern = String(rawPattern).trim().replace(/^\.\//, '');
      if (!pattern) continue;
      const normalized = path.posix.normalize(pattern);
      const isParent = normalized.startsWith('../');
      const sourceMap = isParent ? sharedFiles : storyFiles;
      const basePrefix = isParent ? normalized.replace(/^(\.\.\/)+/, '') : normalized;

      let matches = [];
      if (sourceMap.has(basePrefix)) {
        matches = [basePrefix];
      } else {
        const matcher = globToRegExp(basePrefix);
        matches = [...sourceMap.keys()].filter((key) => matcher.test(key));
      }
      // Also support "folder/" meaning every file below it.
      if (matches.length === 0 && sourceMap.size && !/[*?]/.test(pattern)) {
        matches = [...sourceMap.keys()].filter((key) => key.startsWith(`${basePrefix.replace(/\/$/, '')}/`));
      }
      if (matches.length === 0) {
        throw new Error(`${configName} in ${relativeFromRoot(folder)}: no files matched "${pattern}"`);
      }

      for (const match of matches) {
        const archivePath = isParent ? match : `${entry}${match}`;
        selected.set(archivePath, sourceMap.get(match));
      }
    }
  }

  // Include an explicit config file for provenance, when the story has one.
  if (fs.existsSync(configPath)) {
    selected.set(`${entry}${configName}`, configPath);
  }

  const indexArchivePath = `${entry}index.html`;
  if (!selected.has(indexArchivePath)) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: package must include index.html`);
  }

  const archiveNames = [...selected.keys()].sort();
  // Fixed timestamps keep archives byte-for-byte reproducible across CI
  // checkouts. Content changes are what should change a package.
  const archiveDate = new Date('1980-01-01T00:00:00Z');
  const entries = archiveNames.map((name) => ({
    name,
    data: fs.readFileSync(selected.get(name)),
    date: archiveDate,
  }));
  const buffer = createZip(entries);
  const fileName = `${id}.zip`;

  return {
    descriptor: {
      id,
      title,
      version,
      entry,
      file: fileName,
      files: entries.length,
      size: buffer.length,
      sha256: crypto.createHash('sha256').update(buffer).digest('hex'),
    },
    fileName,
    buffer,
    archiveNames,
  };
}

function buildStoryJob(story) {
  const entry = normalizeEntry(story.entry ?? `${story.id}/`);
  const folder = path.join(root, entry);
  const index = path.join(folder, 'index.html');
  if (!fs.existsSync(index)) {
    return { skipped: `${story.id}: incomplete (no ${entry}index.html)` };
  }

  const configPath = path.join(folder, configName);
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    if (config.enabled === false) return { skipped: `${story.id}: disabled by ${configName}` };
    if (Array.isArray(config.files) && config.files.length > 0) {
      return {
        built: packageStory(folder, { config }),
        label: `${entry}`,
      };
    }
  }

  const { sources, warnings } = collectAutoSources(folder, entry);
  if (sources.size <= 1) {
    return { skipped: `${story.id}: incomplete (no package files found)` };
  }
  const config = {
    id: story.id,
    title: story.title ?? story.id,
    version: versionForStory(folder, null),
    entry,
  };
  return {
    built: packageStory(folder, { config, sources }),
    label: entry,
    warnings,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const configs = findConfigs(root);
const catalog = fs.existsSync(catalogPath)
  ? JSON.parse(fs.readFileSync(catalogPath, 'utf8'))
  : [];
const catalogFolders = new Set();
const jobs = [];

for (const story of catalog) {
  if (!story?.id) continue;
  const entry = normalizeEntry(story.entry ?? `${story.id}/`);
  catalogFolders.add(path.resolve(root, entry));
  jobs.push({ type: 'catalog', story });
}

// Keep explicit configs that are not in the public catalog (for example a
// private or experimental package).
for (const folder of configs) {
  if (!catalogFolders.has(path.resolve(folder))) jobs.push({ type: 'config', folder });
}

const packages = [];
const outputs = [];
for (const job of jobs) {
  let result;
  if (job.type === 'config') {
    result = { built: packageStory(job.folder), label: relativeFromRoot(job.folder) };
  } else {
    result = buildStoryJob(job.story);
  }

  if (result.skipped) {
    console.log(`Skipping ${result.skipped}`);
    continue;
  }
  if (verbose) {
    for (const warning of result.warnings ?? []) {
      console.warn(`Warning ${result.label}: ${warning}`);
    }
  }
  if (!result.built) continue;
  packages.push(result.built.descriptor);
  outputs.push(result.built);
  console.log(
    `${result.label}: ${result.built.descriptor.files} files -> ${result.built.fileName} ` +
      `(${(result.built.buffer.length / 1024).toFixed(1)} KB)`,
  );
}

if (checkOnly) {
  console.log(`Checked ${packages.length} story package(s).`);
  process.exit(0);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });
for (const output of outputs) {
  fs.writeFileSync(path.join(distDir, output.fileName), output.buffer);
}
packages.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(
  path.join(distDir, 'manifest.json'),
  JSON.stringify(
    {
      format: 'mediamesh-story-package-v1',
      packages,
    },
    null,
    2,
  ) + '\n',
);
console.log(`Wrote ${outputs.length} package(s) to ${toPosix(path.relative(root, distDir))}/`);
