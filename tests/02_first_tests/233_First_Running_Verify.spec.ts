import {test,expect} from '@playwright/test';

test("verify firt test case",async ({page}) => {

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle('Login - Wingify');
    const log_image = page.locator('#vow-login-logo');
    //CSS selector use # infront of id
    // id = 'vow-login-logo' in the UI
    await expect(log_image).toBeVisible();
});