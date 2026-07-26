import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vechileFrame: FrameLocator = await page.frameLocator("#frame-one");

    await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
    await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
    await vechileFrame.locator('#RESULT_TextField-3').fill('2012');
    await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vechileFrame.locator('#RESULT_TextField-4').fill('2015');

    await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await vechileFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(output);

    // page.locator("Hi")


    await page.pause();

 //Pramod Solution
 /*
 import { Browser, chromium, FrameLocator, Locator, Page, expect } from '@playwright/test';

(async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();

  // 1) Single iframe — fill the embedded form
  await page.goto('/playwright/frames/index.html');
  const formFrame: FrameLocator = page.frameLocator("iframe[id*='frame-one']");
  await formFrame.locator('#RESULT_TextField-1').fill('Test Automation');

  const previewTitle = await page.locator('h3.details__form-preview-title').innerText();
  console.log(previewTitle);

  // 2) Multi-frame frameset
  await page.goto('/playwright/frames/multi-frames.html');
  const mainFrame: FrameLocator = page.frameLocator("[name='main']");
  const header = await mainFrame.locator('h2').innerText();
  console.log(header);

  // total number of <frame> elements on the page
  const allFrames: Locator[] = await page.locator('//frame').all();
  console.log('total number of frames: ' + allFrames.length);

  for (const frameEle of allFrames) {
    console.log(await frameEle.getAttribute('name'), ': ', await frameEle.getAttribute('src'));
  }

  // page.frames() includes the main page frame too
  console.log(page.frames().length);
})();

*/

});