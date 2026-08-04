import { test, expect, Locator } from '@playwright/test';

const URL = "https://app.thetestingacademy.com/playwright/widgets/svg"; // replace with target page

test.describe('SVG Handling', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Locate svg root and assert visible', async ({ page }) => {

    const circleshape: Locator = page.locator('#circle-blue');
    await circleshape.click();


    const output = await page.locator('#shapes-output').innerText();
    expect(output).toContain('Blue circle');


    await page.getByRole('button', { name: /Q3 bar/ }).click();
    await page.getByRole('radio', { name: "4 stars" }).click();

    let allbars: Locator[] = await page.locator('.bar').all();

    // logic which is the hegiht, low ......click on that.
    for (const bars of allbars) {
      const q = await bars.getAttribute('data-quarter');
      const heigth = bars.getAttribute('height');

      console.log(q)
      console.log(heigth);

    }

    //await page.pause();


  });

});

//parmaod 
/*// 1) Shape — click by id, assert selected
await page.locator('#circle-blue').click();
await expect(page.locator('#circle-blue')).toHaveClass(/is-selected/);

// 2) Bar chart — by accessible name
await page.getByRole('button', { name: /Q3 bar/ }).click();
await expect(page.getByTestId('bars-output'))
  .toContainText('Q3');

// or by data-testid
await page.getByTestId('bar-q4').click();

// 3) Stars — getByRole works on SVG too
await page.getByRole('radio', { name: '4 stars' }).click();
await expect(page.getByTestId('stars-readout'))
  .toHaveText('Rating: 4 / 5');

// iterate every bar
for (const bar of await page.locator('.bar').all()) {
  const q = await bar.getAttribute('data-quarter');
  await bar.click();
  console.log(q);
}
  */