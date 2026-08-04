import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {



        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: 'Untitled 1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'Untitled 2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is test')
            }

            ]);

        await page.locator(".pf-v6-c-button pf-m-secondary").click();



        await page.waitForTimeout(15000);





    });
});
