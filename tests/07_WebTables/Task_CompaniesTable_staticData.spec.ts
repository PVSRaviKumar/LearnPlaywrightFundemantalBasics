import { test, expect } from '@playwright/test';

//Yoshi → Which Country?
test('Verify Static Data WebTable', async ({ page }) => {


    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

        // First of all, go to the link of the web table, 
    // find the correct Yoshi, 
    // and then use a for loop to find the following simple 

    //table[@id="companies-table"]/tbody/tr[5]/td[3]

    const firstPart = "//table[@id='companies-table']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='companies-table']/tbody/tr").count();
    const cols = await page.locator("//table[@id='companies-table']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
           // console.log(dynamicPath);
            const data = await page.locator(dynamicPath).innerText();
            //console.log(data);
            if (data.includes('Yoshi Tannamuri')) {
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Yoshi Tannamuri In - ${countryText}`);
            }
        }

    }

  // await page.pause();





});

// Pramod solution
/*
// total row count
const rowCount = await page.locator('table tbody tr').count();
expect(rowCount).toBe(6);

// every country in column 3
const countries = await page
  .locator('table tbody tr td:nth-child(3)')
  .allInnerTexts();
expect(countries).toContain('Italy');

// row with Company = Adobe -> read Contact
const adobeContact = await page
  .locator("tr:has(td:text('Adobe')) td:nth-child(2)")
  .innerText();
expect(adobeContact).toBe('Yoshi Tannamuri');

// XPath equivalent — following-sibling::td
const contactByXPath = await page
  .locator("//td[text()='Adobe']/following-sibling::td[1]")
  .innerText();
  
  */