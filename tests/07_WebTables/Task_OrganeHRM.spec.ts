import { test, expect } from '@playwright/test';


test('Verify Orange HRM Empolyee details', async ({ page }) => {

    //Login to Portal
        await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login")
        await page.waitForTimeout(10000);
        const userName = await page.getByRole('textbox', {name : 'username'}).fill("admin")
        const Password = await page.getByRole('textbox', {name : 'password'}).fill("Awesomeqa@4321")
        const loginButton = await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")
        await loginButton.click()
    
        await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");
        const header = page.locator("//h6[text()='PIM']");
        await expect(header).toBeVisible();

          //wait for the table to be visible
    await expect(page.locator(".oxd-table-body")).toBeVisible();

//Navigate to PIM option 
//await page.pause();
//await page.waitForTimeout(30000);
        const pimOption = await page.locator("//span[text()='PIM']").click()
       
        const rows = page.locator('.oxd-table-body .oxd-table-row');
        const rowCount = await rows.count();



        console.log("Total Row Count : " + rowCount);



        await page.pause();

});