import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(await fs.readFile(path.join(import.meta.dirname, 'sfx-manifest.json'), 'utf8'));
const args = process.argv.slice(2).map(value => value.toLowerCase());
const force = args.includes('--force');
const requested = new Set(args.filter(value => value !== '--force'));
const stories = requested.size ? manifest.stories.filter(story => requested.has(story.slug) || requested.has(story.folder.toLowerCase())) : manifest.stories;
if (!stories.length) throw new Error('No matching stories. Use a story name, or no arguments for all stories.');

function sourceDoc(story) {
  const rows = story.effects.map(effect => `| \`${effect.file}\` | ${effect.scene} | ${effect.trigger} | ${effect.type} |`).join('\n');
  return `# ${story.title} — SFX Source of Truth

Canonical first-pass production SFX plan. Keep this synchronized with the story data and \`assets/audio/sfx/\`. Comic text such as **CRASH!** remains visual; these files are production audio.

## Direction

Effects should support the comic panels without competing with narration or music. Ambiences may loop with short crossfades; one-shots should be brief, readable, and used only on their named beat. Keep peaks below the music bus and avoid graphic or frightening realism.

## Approved Core Effects

| File | Scene | Trigger | Type |
|---|---|---|---|
${rows}

## Interface Effect

All buttons continue to use \`assets/audio/ping_pong.mp3\`. It is not duplicated in the SFX folder.

## Runtime Integration

- Runtime path: \`assets/audio/sfx/<file>\`.
- Put that path in the triggering line's \`audioSfx\` field; the renderer calls \`audio.playLineSfx(line)\`.
- The audio manager discovers and preloads every line-level \`audioSfx\` entry.
- Prefer OGG for future seamless ambience masters; retain these MP3 downloads as traceable originals.
- Add later effects to \`scripts/sfx-manifest.json\` first, including their license and source page.
`;
}

function linksDoc(story) {
  const rows = story.effects.map(effect => `| \`${effect.file}\` | [Direct MP3](${effect.url}) | [Source page](${effect.sourcePage}) | ${effect.scene}: ${effect.trigger} |`).join('\n');
  return `# ${story.title} — SFX Download Links\n\nThese are the exact sources used by \`scripts/download-sfx.mjs\`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](${manifest.license.url}). Confirm the license again before a commercial release.\n\n| Local file | Download | Provenance | Use |\n|---|---|---|---|\n${rows}\n\n## Download\n\nFrom the repository root:\n\n\`\`\`sh\nnode scripts/download-sfx.mjs ${story.slug}\n\`\`\`\n\nThe downloader refuses HTML/error pages, preserves existing files unless \`--force\` is supplied, and writes into this story only.\n`;
}

for (const story of stories) {
  const docsDir = path.join(root, story.folder, '__docs');
  const audioDir = path.join(root, story.folder, 'assets', 'audio', 'sfx');
  await fs.mkdir(docsDir, { recursive: true });
  await fs.mkdir(audioDir, { recursive: true });
  await fs.writeFile(path.join(docsDir, `${story.slug}-sfx-source-of-truth.md`), sourceDoc(story));
  await fs.writeFile(path.join(docsDir, `${story.slug}-sfx-download-links.md`), linksDoc(story));

  for (const effect of story.effects) {
    const target = path.join(audioDir, effect.file);
    if (!force) {
      try { if ((await fs.stat(target)).size > 1000) { console.log(`skip ${story.folder}/${effect.file}`); continue; } } catch {}
    }
    const response = await fetch(effect.url, { redirect: 'follow' });
    if (!response.ok) throw new Error(`${effect.url}: HTTP ${response.status}`);
    const type = response.headers.get('content-type') || '';
    if (!type.includes('audio') && !type.includes('octet-stream')) throw new Error(`${effect.url}: unexpected content type ${type}`);
    const data = Buffer.from(await response.arrayBuffer());
    const hasId3 = data.subarray(0, 3).toString() === 'ID3';
    const hasFrameSync = data[0] === 0xff && (data[1] & 0xe0) === 0xe0;
    if (data.length < 1000 || (!hasId3 && !hasFrameSync)) throw new Error(`${effect.url}: invalid or incomplete MP3`);
    await fs.writeFile(target, data);
    console.log(`saved ${story.folder}/${effect.file} (${Math.round(data.length / 1024)} KB)`);
  }
}
