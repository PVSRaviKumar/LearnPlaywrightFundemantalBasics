import { test, expect, Locator } from '@playwright/test';


test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinktexts:string[] = await page.locator("a.list-group-item").allInnerTexts();

    //to print the number of eleemts
    console.log(rightPanelLinktexts.length);

    for (const link of rightPanelLinktexts) {
        console.log(link);
    }
    
    // Normal for loop also can be  used
     for (let i = 0; i < rightPanelLinktexts.length; i++) {
        console.log(rightPanelLinktexts[i]);
    }

    // If the linktexts =forgetten password changed then below code will be fail.
    for(const linktexts of rightPanelLinktexts){

        if(linktexts==="Forgotten Password")
        {
            page.getByText(linktexts).first().click();

        }
    }


 // use hrefs to solve the above problem
 const rightpanellinks:Locator[] =await page.locator("a.list-group-item").all();
 //const rightpanellinks =await page.locator("a.list-group-item").all();

   for(const link of rightpanellinks){
    console.log(await link.getAttribute("href"));
   }
await page.waitForTimeout(5000);

});
/* Pramod Solution

const rightPanelLinks = await page.locator('a.list-group-item').allInnerTexts();
console.log(rightPanelLinks.length);

for (const linkText of rightPanelLinks) {
  if (linkText === 'Forgotten Password') {
    await page.getByText(linkText).first().click();
    break;
  }
}

const footerLinks = await page.locator('footer a').all();
for (const link of footerLinks) {
  console.log(await link.innerText(), await link.getAttribute('href'));
}*/