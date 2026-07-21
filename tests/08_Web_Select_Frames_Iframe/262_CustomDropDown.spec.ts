// this is Custom drop down 
import { test, expect } from '@playwright/test';

test('Basic Web Test - Custom Drop down', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    // open the dropdown
    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    //   await page.getByText("JavaScript").click();


    
    await page.getByTestId('experience-trigger').click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();




    await page.pause();

// Pramod Solution 
/*
import { Browser, chromium, Page, expect } from '@playwright/test';

(async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();
  await page.goto('/playwright/tables/dropdowns.html');

  await selectValue(page, 'Choose your preferred programming language', 'Java');
  await selectValue(page, 'Choose your preferred web framework', 'Angular');
  await selectValue(page, 'Select your experience level', 'Mid-level (4-6 years)');
})();

async function selectValue(page: Page, dropDownLabel: string, value: string): Promise<void> {
  await page.locator(`//button[contains(@class,'select-trigger')]//span[text()='${dropDownLabel}']`).click();
  await page.getByText(value, { exact: true }).click();
} 
  
*/



});