const fs = require('fs');
const path = require('path');

for (const f of process.argv.slice(2)) {
  const html = fs.readFileSync(f, 'utf8');
  // Extract every <script>...</script> block (inline only).
  const re = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  let i = 0;
  while ((m = re.exec(html))) {
    const src = m[1];
    const tmp = path.join('/tmp', `_check_${i++}_${path.basename(f)}.js`);
    fs.writeFileSync(tmp, src);
    try {
      require('child_process').execSync(`node --check ${JSON.stringify(tmp)}`, { stdio: 'pipe' });
      console.log(`OK    ${f} (inline script #${i})`);
    } catch (e) {
      console.error(`FAIL  ${f} (inline script #${i}):\n${e.stderr.toString()}`);
    }
    fs.unlinkSync(tmp);
  }
}