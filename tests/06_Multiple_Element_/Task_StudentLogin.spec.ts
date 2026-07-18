import { test, expect } from '@playwright/test';


test('Verify student can login with valid credentials', async ({ page }) => {

       await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter#');
        const studentHeadingText = page.getByText('Student Login')
        expect(studentHeadingText).toBeVisible();

        //Login
        const studentEmail = await page.getByRole('textbox', {name : 'email'}).fill('student@example.com');
        const studentPassword = await page.getByRole('textbox', {name : 'password'}).fill('password');
        const rememberMeCheckbox = await page.getByRole('checkbox',{name : 'remember'}).check()
        const loginButton = await page.getByRole('button', {name : 'Login'}).click();
        await page.pause();

        //Get the URL

        await expect(page).toHaveURL(/login-success/);
        console.log("Login has been successful")
        
   // Other way of filling the details is first get the element locator then after warsd use fill method.
   /* 
    const username = page.getByRole('textbox', { name: 'email' });
    const password = page.getByRole('textbox', { name: 'password' });
    const remember_me = page.getByRole('checkbox', { name: 'remember' });
    const loginButton = page.getByText('Login to Practice Account');
    await username.fill('standard_user@testingacademy.com');
    await password.fill('tta_secret');
    await remember_me.click();
    await loginButton.click();*/
   
    //await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/multiple_element_filter?email=standard_user%40testingacademy.com&password=tta_secret&remember=yes#login-success');

});

