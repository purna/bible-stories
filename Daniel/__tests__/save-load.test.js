const puppeteer = require('puppeteer');
const wait = ms => new Promise(r => setTimeout(r, ms));

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:8123/index.html', { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.removeItem('daniel-comic-save'));
    await page.reload({ waitUntil: 'networkidle0' });

    await page.click('#startBtn');
    await wait(500);

    // Go to Ch1, make a choice
    await page.select('#chapterSelect', '0');
    await wait(2000);
    for (let i = 0; i < 4; i++) {
        await page.waitForFunction(() => document.querySelector('#nextLineBtn')?.classList.contains('show'), { timeout: 5000 });
        await page.click('#nextLineBtn');
        await wait(1200);
    }
    const buttons = await page.$$('.choiceBtn');
    await buttons[0].click(); // "Tell the guard directly" - loyalty:god
    await wait(800);

    // Verify meter appeared
    const meterVisible1 = !await page.$eval('#meterBar', el => el.classList.contains('hidden'));
    console.log('1. Meter visible after choice:', meterVisible1);

    // Verify save was written
    const savedData = await page.evaluate(() => localStorage.getItem('daniel-comic-save'));
    console.log('2. Save data exists:', !!savedData);
    const save = JSON.parse(savedData);
    console.log('3. Save has decisions:', save.decisions ? JSON.parse(save.decisions).length : 'none');
    console.log('4. Save has hasChosen:', save.hasChosen);

    // Reload page - state should persist
    await page.reload({ waitUntil: 'networkidle0' });
    await wait(500);

    const meterVisible2 = !await page.$eval('#meterBar', el => el.classList.contains('hidden'));
    console.log('5. Meter still visible after reload:', meterVisible2);

    const meterRatio = await page.$eval('#meterFill', el => getComputedStyle(el).getPropertyValue('--meter-ratio').trim());
    console.log('6. Meter ratio after reload:', meterRatio);

    const chapterAfter = await page.$eval('#chapterSelect', el => el.value);
    console.log('7. Chapter after reload:', chapterAfter);

    await browser.close();
    console.log('\n=== Save/load test complete ===');
})().catch(e => {
    console.error('Test failed:', e);
    process.exit(1);
});
