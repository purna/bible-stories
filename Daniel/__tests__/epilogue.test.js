const puppeteer = require('puppeteer');
const wait = ms => new Promise(r => setTimeout(r, ms));

async function goToChapter(page, chapterIndex) {
    await page.select('#chapterSelect', String(chapterIndex));
    await wait(2000);
}

async function advanceToNextLine(page) {
    await page.waitForFunction(() => {
        const el = document.querySelector('#nextLineBtn');
        return el && el.classList.contains('show');
    }, { timeout: 8000 });
    await page.click('#nextLineBtn');
    await wait(800);
}

async function collectAllFragments(page) {
    const hotspots = await page.$$('.fragment-hotspot');
    for (const hotspot of hotspots) {
        const info = await hotspot.evaluate(el => ({
            decoy: el.classList.contains('decoy'),
            collected: el.classList.contains('collected')
        }));
        if (!info.decoy && !info.collected) {
            await hotspot.click();
            await wait(100);
        }
    }
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const consoleMessages = [];
    page.on('console', msg => consoleMessages.push(msg.type().toUpperCase() + ': ' + msg.text()));
    page.on('pageerror', err => consoleMessages.push('ERROR: ' + err.message));

    await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.removeItem('daniel-comic-save'));
    await page.reload({ waitUntil: 'networkidle0' });

    await page.click('#startBtn');
    await wait(500);

    // Chapter 0 (table): choice at line 4
    console.log('Ch0: Navigating...');
    await goToChapter(page, 0);
    for (let i = 0; i < 4; i++) await advanceToNextLine(page);
    let buttons = await page.$$('.choiceBtn');
    console.log('  Choices:', await Promise.all(buttons.map(b => b.evaluate(el => el.textContent.trim()))));
    await buttons[0].click(); // loyalty:god
    await wait(800);

    // Chapter 1 (statue): vision at line 6
    console.log('Ch1: Vision scene...');
    await goToChapter(page, 1);
    for (let i = 0; i < 6; i++) await advanceToNextLine(page);
    const visionVisible = await page.$eval('#visionOverlay', el => el.classList.contains('show'));
    console.log('  Vision overlay:', visionVisible);
    await collectAllFragments(page);
    await wait(500);
    buttons = await page.$$('.choiceBtn');
    console.log('  Delivery:', await Promise.all(buttons.map(b => b.evaluate(el => el.textContent.trim()))));
    await buttons[1].click(); // loyalty:god (plain)
    await wait(800);

    // Chapter 2 (furnace): choice at line 7
    console.log('Ch2: Furnace...');
    await goToChapter(page, 2);
    for (let i = 0; i < 7; i++) await advanceToNextLine(page);
    buttons = await page.$$('.choiceBtn');
    console.log('  Choices:', await Promise.all(buttons.map(b => b.evaluate(el => el.textContent.trim()))));
    await buttons[1].click(); // loyalty:god
    await wait(800);

    // Chapter 3 (writing): vision at line 5
    console.log('Ch3: Vision scene...');
    await goToChapter(page, 3);
    for (let i = 0; i < 5; i++) await advanceToNextLine(page);
    await collectAllFragments(page);
    await wait(500);
    buttons = await page.$$('.choiceBtn');
    console.log('  Delivery:', await Promise.all(buttons.map(b => b.evaluate(el => el.textContent.trim()))));
    await buttons[1].click(); // loyalty:god (refuse reward)
    await wait(800);

    // Chapter 4 (den): choice at line 3
    console.log('Ch4: The Den...');
    await goToChapter(page, 4);
    for (let i = 0; i < 3; i++) await advanceToNextLine(page);
    buttons = await page.$$('.choiceBtn');
    await buttons[1].click(); // loyalty:god (pray)
    await wait(800);

    // Advance to end
    console.log('Ch4: Advancing to epilogue...');
    for (let i = 0; i < 12; i++) {
        try {
            await page.waitForFunction(() => {
                const el = document.querySelector('#nextLineBtn');
                return el && el.classList.contains('show');
            }, { timeout: 6000 });
            await page.click('#nextLineBtn');
            await wait(1500);
        } catch (e) { break; }
    }

    // Check epilogue
    const epilogue = await page.evaluate(() => {
        const lines = Array.from(document.querySelectorAll('.comic-frame .caption, .comic-frame .bubble'));
        return lines.map(el => el.textContent.trim()).filter(t => t.length > 0).slice(-2).join(' | ');
    });
    console.log('\n=== EPILOGUE (last 2 lines) ===');
    console.log(epilogue);

    const hasGodOnlyText = epilogue.includes('Conviction sustained');
    console.log('\nEpilogue shows god_only path:', hasGodOnlyText);

    const meterRatio = await page.$eval('#meterFill', el => getComputedStyle(el).getPropertyValue('--meter-ratio').trim());
    console.log('Final meter ratio:', meterRatio);

    const jsErrors = consoleMessages.filter(m => m.startsWith('ERROR:'));
    console.log('\nConsole errors:', jsErrors.length ? jsErrors : 'none');

    await browser.close();
    console.log('\n=== Test complete ===');
})().catch(e => {
    console.error('Test failed:', e);
    process.exit(1);
});
