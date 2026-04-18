const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Hero section
  await page.screenshot({ path: 'screenshot_hero.png', fullPage: false });

  // Scroll down and capture more
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_projects.png', fullPage: false });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_process.png', fullPage: false });

  await page.evaluate(() => window.scrollTo(0, 3300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_services.png', fullPage: false });

  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_footer.png', fullPage: false });

  // Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });

  await browser.close();
  console.log('Screenshots saved!');
})();
