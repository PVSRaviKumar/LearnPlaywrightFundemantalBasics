import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({ button: 'right' });


    const allOptions: string[] = await page
        .locator('ul.context-menu-list span')
        .allInnerTexts();
    console.log(allOptions);

    await page.getByText('Copy', { exact: true }).first().click();


// Pramod 
/*
import { Browser, chromium, Page } from '@playwright/test';

(async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();
  await page.goto('/playwright/widgets/context-menu.html');

  // 1) right-click the first .context-menu-one span
  await page.locator('span.context-menu-one').first().click({ button: 'right' });

  // 2) read every visible menu item
  const allOptions: string[] = await page
    .locator('ul.context-menu-list span')
    .allInnerTexts();
  console.log(allOptions);

  // 3) click Copy
  await page.getByText('Copy', { exact: true }).click();
})();
*/



});