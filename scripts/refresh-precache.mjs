import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
export function refreshPrecache(dir) {
  const manifestPath = path.join(dir, 'precache-manifest.json');
  const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
  const local = walk(dir).filter(file => !['tools', '__docs', 'art'].includes(path.relative(dir, file).split(path.sep)[0]) && !file.endsWith('.bak') && file !== manifestPath);
  const shared = ['fonts', 'audio/ui', 'audio/sfx', 'audio/transitions', 'svg', `audio/${path.basename(dir).toLowerCase()}`, ...(path.basename(dir) === 'Abraham' ? ['audio/babel'] : [])].flatMap(sub => walk(path.join(root, 'shared', sub)));
  manifest.urls = [...new Set([...local, ...shared, ...walk(path.join(root, 'shared-tools'))].map(file => path.relative(dir, file).split(path.sep).join('/')))].sort();
  manifest.version = '3.0.0-shared';
  fs.writeFileSync(manifestPath, JSON.stringify(manifest) + '\n');
  return manifest.urls.length;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const dir = path.join(root, entry.name);
    if (entry.isDirectory() && fs.existsSync(path.join(dir, 'css', 'fonts.css'))) console.log(`${entry.name}: ${refreshPrecache(dir)} assets`);
  }
}
