import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const configName = 'mediamesh-package.json';
const checkOnly = process.argv.includes('--check');

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

function dosDateTime(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
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
// Package a single story folder
// ---------------------------------------------------------------------------
function packageStory(folder) {
  const configPath = path.join(folder, configName);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const entry = (config.entry ?? relativeFromRoot(folder) + '/').replace(/\/?$/, '/');
  const id = config.id ?? entry.split('/').filter(Boolean).pop();
  const title = config.title ?? id;
  const version = config.version ?? '1.0.0';

  if (config.enabled === false) return null;
  if (!/^[A-Za-z0-9._-]+$/.test(id)) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: invalid id "${id}"`);
  }
  if (!Array.isArray(config.files) || config.files.length === 0) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: "files" must be a non-empty array`);
  }

  const storyFiles = new Map(walk(folder).map((file) => [toPosix(path.relative(folder, file)), file]));
  const sharedFiles = new Map(
    ['shared', 'shared-tools', 'assets/journey']
      .flatMap((dir) => walk(path.join(root, dir)))
      .map((file) => [relativeFromRoot(file), file]),
  );

  const selected = new Map(); // archive path -> absolute source path

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

  // Include the config itself for provenance.
  selected.set(`${entry}${configName}`, configPath);

  const indexArchivePath = `${entry}index.html`;
  if (!selected.has(indexArchivePath)) {
    throw new Error(`${configName} in ${relativeFromRoot(folder)}: package must include index.html`);
  }

  const archiveNames = [...selected.keys()].sort();
  const entries = archiveNames.map((name) => ({
    name,
    data: fs.readFileSync(selected.get(name)),
    date: fs.statSync(selected.get(name)).mtime,
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

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const configs = findConfigs(root);
if (configs.length === 0) {
  console.log('No story folders contain mediamesh-package.json — nothing to package.');
}

const packages = [];
const outputs = [];
for (const folder of configs) {
  const built = packageStory(folder);
  if (!built) {
    console.log(`Skipping disabled ${relativeFromRoot(folder)}/${configName}`);
    continue;
  }
  packages.push(built.descriptor);
  outputs.push(built);
  console.log(
    `${relativeFromRoot(folder)}: ${built.descriptor.files} files -> ${built.fileName} ` +
      `(${(built.buffer.length / 1024).toFixed(1)} KB)`,
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
fs.writeFileSync(
  path.join(distDir, 'manifest.json'),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      format: 'mediamesh-story-package-v1',
      packages,
    },
    null,
    2,
  ) + '\n',
);
console.log(`Wrote ${outputs.length} package(s) to ${toPosix(path.relative(root, distDir))}/`);
