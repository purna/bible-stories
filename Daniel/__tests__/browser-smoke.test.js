const puppeteer = require('puppeteer');

const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    const consoleMessages = [];

    page.on('console', msg => consoleMessages.push(msg.text()));
    page.on('pageerror', err => errors.push(err.message));

    await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'networkidle0' });

    // Click start button
    await page.click('#startBtn');
    await wait(500);

    // Meter should be hidden before any choice
    const meterBefore = await page.$eval('#meterBar', el => el.classList.contains('hidden'));
    console.log('1. Meter hidden before choice:', meterBefore);

    // Navigate to Chapter 2 (The Dream) — the vision chapter
    await page.select('#chapterSelect', '1');
    await wait(2000);

    const chapterName = await page.$eval('#chapterSelect', el => el.options[el.selectedIndex].text);
    console.log('2. Current chapter:', chapterName);

    // Advance through lines until we reach the vision line (index 6)
    for (let i = 0; i < 7; i++) {
        try {
            await page.waitForFunction(() => {
                const el = document.querySelector('#nextLineBtn');
                return el && el.classList.contains('show');
            }, { timeout: 5000 });
            await page.click('#nextLineBtn');
            await wait(1200);
        } catch (e) {
            console.log('   Stopped advancing at line', i, '(button not visible — may have reached vision/choice)');
            break;
        }
    }

    // Check if vision overlay is visible
    const visionOverlayVisible = await page.$eval('#visionOverlay', el => el.classList.contains('show'));
    console.log('3. Vision overlay visible:', visionOverlayVisible);

    const fragCountText = await page.$eval('#fragCount', el => el.textContent);
    console.log('4. Fragment counter:', fragCountText);

    const hotspots = await page.$$('.fragment-hotspot');
    console.log('5. Fragment hotspots found:', hotspots.length);

    if (hotspots.length > 0) {
        // Click non-decoy hotspots
        for (const hotspot of hotspots) {
            const isDecoy = await hotspot.evaluate(el => el.classList.contains('decoy'));
            if (!isDecoy) {
                await hotspot.click();
                await wait(200);
            }
        }

        // Check if delivery choices appeared
        const choicesVisible = await page.$eval('#choices', el => el.classList.contains('show'));
        console.log('6. Delivery choices visible:', choicesVisible);

        const choiceButtons = await page.$$('.choiceBtn');
        console.log('7. Delivery choice buttons:', choiceButtons.length);

        if (choiceButtons.length >= 2) {
            // Click the "plain" delivery choice (second button)
            await choiceButtons[1].click();
            await wait(800);

            const meterAfter = await page.$eval('#meterBar', el => el.classList.contains('hidden'));
            console.log('8. Meter visible after choice:', !meterAfter);

            const meterRatio = await page.$eval('#meterFill', el => getComputedStyle(el).getPropertyValue('--meter-ratio'));
            console.log('9. Meter ratio:', meterRatio.trim());

            const delayNoteText = await page.$eval('#delayNote', el => el.textContent.trim());
            console.log('10. Delay note:', delayNoteText);
        }
    }

    // Check console for critical errors
    const jsErrors = consoleMessages.filter(m => m.toLowerCase().includes('error') && !m.includes('Failed to fetch'));
    console.log('\nConsole JS errors:', jsErrors.length ? jsErrors : 'none');
    console.log('Page errors:', errors.length ? errors : 'none');

    await browser.close();
    console.log('\n=== Browser test complete ===');
})().catch(e => {
    console.error('Test failed:', e);
    process.exit(1);
});
