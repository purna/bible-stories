import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';

const root = path.resolve(import.meta.dirname, '..');
const require = createRequire(path.join(root, 'Daniel', 'package.json'));
const puppeteer = require('puppeteer');
const base = process.env.STORY_TEST_URL || 'http://127.0.0.1:8123';
const out = path.join(root, 'test-artifacts', 'story-smoke');
await fs.mkdir(out, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const failures = [];
for (const story of ['Adam', 'Daniel', 'Eiljah', 'Jonah', 'Moses', 'Noah']) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error' && !message.text().startsWith('Failed to load resource:')) errors.push(message.text()); });
  page.on('requestfailed', request => errors.push(`${request.failure()?.errorText || 'request failed'} ${request.url()}`));
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`${base}/${story}/`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('#comicLoader', { timeout: 5000 }).catch(() => {});
  await page.waitForSelector('#comicLoader', { hidden: true, timeout: 30000 }).catch(async () => page.click('.comic-loader-skip').catch(() => {}));
  await new Promise(resolve => setTimeout(resolve, 550));
  await page.click('#startBtn').catch(() => {});
  await new Promise(resolve => setTimeout(resolve, 700));

  const before = await page.$eval('#stage', node => node.textContent);
  await page.click('#infoToggle');
  await page.keyboard.press('ArrowRight');
  const duringModal = await page.$eval('#stage', node => node.textContent);
  if (before !== duringModal) failures.push(`${story}: navigation changed behind info modal`);
  await page.keyboard.press('Escape');
  await page.screenshot({ path: path.join(out, `${story.toLowerCase()}-desktop.png`), fullPage: true });
  const chapterValues = await page.$$eval('#chapterSelect option', options => options.map(option => option.value));
  for (const [index, value] of chapterValues.entries()) {
    await page.select('#chapterSelect', value);
    await new Promise(resolve => setTimeout(resolve, 220));
    await page.screenshot({ path: path.join(out, `${story.toLowerCase()}-chapter-${index + 1}.png`) });
  }
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.waitForSelector('#comicLoader', { timeout: 5000 }).catch(() => {});
  await page.waitForSelector('#comicLoader', { hidden: true, timeout: 30000 }).catch(async () => page.click('.comic-loader-skip').catch(() => {}));
  await new Promise(resolve => setTimeout(resolve, 550));
  await page.click('#startBtn').catch(() => {});
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ path: path.join(out, `${story.toLowerCase()}-mobile.png`), fullPage: true });
  await page.evaluate(() => 'serviceWorker' in navigator ? navigator.serviceWorker.ready.then(() => true) : true);
  const critical = errors.filter(message => !/favicon|service worker|net::ERR_ABORTED|net::ERR_CONNECTION_RESET http:\/\/127\.0\.0\.1:8123\//i.test(message));
  if (critical.length) failures.push(`${story}: ${critical.join(' | ')}`);
  console.log(`✓ ${story} desktop/mobile and modal isolation`);
  await page.close();
}

const daniel = await browser.newPage();
await daniel.setViewport({ width: 1280, height: 800 });
await daniel.goto(`${base}/Daniel/`, { waitUntil: 'networkidle0' });
await daniel.waitForSelector('#comicLoader', { timeout: 5000 }).catch(() => {});
await daniel.waitForSelector('#comicLoader', { hidden: true, timeout: 30000 }).catch(() => {});
await daniel.click('#startBtn');
await daniel.evaluate(() => {
  const act = STORY.find(item => item.vision === 'statue_dream');
  const line = act.lines.find(item => item.vision === true);
  actIdx = STORY.indexOf(act);
  lineIdx = act.lines.indexOf(line);
  startVisionMinigame(line, VISION_SCENES.find(item => item.id === 'statue_dream'));
});
const meaningfulCount = await daniel.evaluate(() => VisionEngine.totalCount());
const fragments = await daniel.$$('.fragment-hotspot');
for (let index = 0; index < meaningfulCount; index += 1) await fragments[index].click();
await daniel.waitForSelector('.vision-assembly');
await daniel.screenshot({ path: path.join(out, 'daniel-vision-assembly.png') });
const meanings = await daniel.evaluate(() => VisionEngine.getGathered().filter(item => !item.isDecoy).map(item => item.meaning));
for (const meaning of meanings) {
  await daniel.evaluate(text => [...document.querySelectorAll('.vision-assembly-options button')].find(button => button.textContent === text)?.click(), meaning);
}
await daniel.waitForSelector('#choices.show', { timeout: 3000 });
await daniel.screenshot({ path: path.join(out, 'daniel-vision-delivery.png') });
console.log('✓ Daniel collection → assembly → delivery');
await daniel.close();

const jonah = await browser.newPage();
await jonah.setViewport({ width: 1280, height: 800 });
await jonah.goto(`${base}/Jonah/`, { waitUntil: 'networkidle0' });
await jonah.waitForSelector('#comicLoader', { timeout: 5000 }).catch(() => {});
await jonah.waitForSelector('#comicLoader', { hidden: true, timeout: 30000 }).catch(() => {});
await jonah.click('#startBtn');
for (let chapter = 0; chapter < 4; chapter += 1) {
  await jonah.evaluate(index => JonahGame.launch(index, () => {}), chapter);
  await jonah.waitForSelector('#jonahGame:not([hidden])');
  await new Promise(resolve => setTimeout(resolve, 500));
  const playableOrFallback = await jonah.$('#isometric-container canvas, .game-fallback');
  if (!playableOrFallback) failures.push(`Jonah chapter ${chapter + 1}: neither WebGL panel nor illustrated fallback appeared`);
  if (chapter === 2) await jonah.screenshot({ path: path.join(out, 'jonah-nineveh-game.png') });
  await jonah.click('#game-skip-btn');
  await jonah.waitForSelector('#jonahGame', { hidden: true });
}
console.log('✓ Jonah four playable panels boot and return cleanly');
await jonah.close();

const elijah = await browser.newPage();
await elijah.setViewport({ width: 1280, height: 800 });
await elijah.goto(`${base}/Eiljah/`, { waitUntil: 'networkidle0' });
await elijah.waitForSelector('#comicLoader', { hidden: true, timeout: 30000 }).catch(() => {});
await elijah.click('#startBtn');
await elijah.evaluate(async () => {
  const act = STORY.find(item => item.id === 'voice');
  const line = act.lines.find(item => item.interaction === 'hearing');
  actIdx = STORY.indexOf(act);
  lineIdx = act.lines.indexOf(line);
  document.querySelector('#chapterSelect').value = String(actIdx);
  await renderLine();
});
await elijah.waitForSelector('[data-hearing-tuner]');
await elijah.$eval('[data-hearing-x]', input => { input.value = 50; input.dispatchEvent(new Event('input', { bubbles: true })); });
await elijah.$eval('[data-hearing-y]', input => { input.value = 50; input.dispatchEvent(new Event('input', { bubbles: true })); });
await elijah.waitForSelector('[data-hearing-finish]:not([hidden])', { timeout: 7000 });
await elijah.screenshot({ path: path.join(out, 'elijah-hearing-clear.png') });
await elijah.click('[data-hearing-finish]');
await elijah.waitForSelector('#nextLineBtn.show', { timeout: 2000 });
console.log('✓ Elijah hearing layers → stillness → story return');
await elijah.close();

await browser.close();
if (failures.length) {
  failures.forEach(failure => console.error(`✗ ${failure}`));
  process.exit(1);
}
console.log(`All browser smoke checks passed. Screenshots: ${out}`);
