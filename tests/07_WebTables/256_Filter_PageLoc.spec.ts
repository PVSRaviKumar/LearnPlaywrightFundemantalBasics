import { test, expect } from '@playwright/test';


test('Verify Element by Filter', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgottenPasswordLink = page.locator('a.list-group-item')
        .filter({ hasText: 'Forgotten Password' });
    await forgottenPasswordLink.click();
    // await page.pause();


   // in the text-Forgotten Password we can specfify substing also 
    // Order" vs "Order History
    //  /^Order/ Statrst with CSS selector

    // How many links are present 
    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    // to check theprovacy policy in the footer
    const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');





});