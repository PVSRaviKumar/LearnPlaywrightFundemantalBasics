import { Locator, Page } from '@playwright/test';
//used the Snap locotor to create the locators for the login page
// instead of creating the locators manaully, we can use the snap locator to create the locators for the login page

export class Loginpage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByTestId("username").or(page.getByRole("textbox", { name: "Username" })).or(page.locator("#user-name"));
        this.password = page.getByTestId("password").or(page.getByRole("textbox", { name: "Password" })).or(page.locator("#password"));
        this.loginButton = page.getByTestId("login-button").or(page.getByRole("button", { name: "Login" })).or(page.locator("#login-button"));
    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    }
}