import{test,expect, Locator} from '@playwright/test';
test('verify hover and click the child element',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
   await page.getByTestId('nav-add-ons').hover();

   const subMenus:Locator[] = await page.locator('[data-testid="nav-add-ons"] .submenu a').all()

   console.log('count of subMenus:'+subMenus.length);
   for(const subMenu of subMenus){
    const subMenuText = await subMenu.innerText();
    console.log("SubMenu Text:"+subMenuText);
   }
   await page.getByTestId('test-id-Wifi').click();
   const output= await page.locator('#output').allInnerTexts();
   console.log(output);
    await page.pause();

// pramod 
/*
import { Browser, chromium, Page } from '@playwright/test';

(async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();
  await page.goto('/playwright/widgets/hover-menu.html');

  // 1) hover Add-ons → click Taxi
  await page.getByText('Add-ons', { exact: true }).hover();
  await page.getByTestId('test-id-Taxi').click();

  // 2) nested: Account → Bookings → Upcoming
  await page.getByText('Account', { exact: true }).hover();
  await page.getByText('Bookings', { exact: true }).hover();
  await page.getByTestId('test-id-Upcoming').click();

  // 3) read every Add-ons child after hover
  await page.getByText('Add-ons', { exact: true }).hover();
  const addons = await page
    .locator('[data-testid="nav-add-ons"] .submenu .submenu-item')
    .allInnerTexts();
  console.log(addons);
})();

*/

});