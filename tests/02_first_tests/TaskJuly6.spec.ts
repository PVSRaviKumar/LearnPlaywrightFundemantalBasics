/*
Browser 
Context - 1 - https://app.thetestingacademy.com/playwright/ttacart/
 Context - 2 → https://tta-bank-digital-973242068062.us-west1.run.app/*/

 import {test,expect} from '@playwright/test';
 
 test("verfiy title" , async({browser})=> {

    let context1 = await browser.newContext();
    let context2 = await browser.newContext();

    let page1 = await context1.newPage();
    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("TTACart: on login page");
    expect(page1).toHaveTitle("TTACart - Login");

    let page2= await context2.newPage();
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("TTABank: on login page");
    await expect(page2).toHaveTitle("TTA Bank - Digital Banking");


 });



