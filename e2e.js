const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	await page.goto('https://saadahmad.netlify.app');

	console.log('page loaded');

	await page.setViewport({ height: 1024, width: 1080 });

	const selector = 'body > nav > ul > li:nth-child(3) > a';

	await page.waitForSelector(selector);

	await page.click(selector);

	await browser.close();
})();
