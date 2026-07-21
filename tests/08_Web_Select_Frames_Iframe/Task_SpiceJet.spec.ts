import { test, expect } from '@playwright/test';



test('Test Spice Jet input location from and to', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");
    //await page.pause();
    await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
    //await page.locator("//div[@data-testid='to-testID-origin']/descendant::input").fill("del");
    await page.getByTestId('to-testID-origin').getByRole('textbox').fill("De");
    //await page.getByTestId("to-testID-destination").click();
    await page.locator('div').filter({ hasText: /^Delhi$/ }).first().click();
   
     //await page.pause();

    //await page.locator("//div[@data-testid='to-testID-destination']/descendant::input").fill("ban");
     await page.getByTestId('to-testID-destination').getByRole('textbox').fill("ban");
    //await page.getByText("Bengaluru", { exact: true }).click();
     await page.locator('div').filter({ hasText: /^Bengaluru$/ }).first().click();
   

 

    
    
    


    
     //await page.pause();
});