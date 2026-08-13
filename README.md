# Learn Playwright Fundamental Basics

This repository is a hands-on Playwright learning workspace for practicing browser automation, locator strategies, assertions, frame handling, file operations, and reporting. It is organized by topic so it can be used as a step-by-step reference for beginners and intermediate learners.

## What this project covers

This repository is a structured Playwright learning lab built around hands-on practice. The exercises cover both foundational automation and more advanced browser-testing strategies, and they are organized as progressive modules for self-study.

The examples in this workspace demonstrate:

- Playwright project setup, browser configuration, and test execution
- Basic and advanced assertions, fixtures, and test hooks
- Locator strategies, user interactions, and browser commands
- Multiple-element handling, dynamic tables, and XPath-based data navigation
- Frames, iframes, alerts, SVG elements, and shadow DOM automation
- Keyboard, hover, drag-and-drop, file upload, and file download flows
- Session storage reuse for login and authenticated user flows
- Data-driven testing with JSON, CSV, YAML, Excel, Faker-based inputs, and reusable utilities
- Page Object Model patterns for cleaner and maintainable automation code
- Custom HTML reporting and Allure reporting support
- Recent practice around module-based automation, reusable test data, and page abstraction

## Repository structure

- tests/ contains topic-based Playwright specs grouped by learning area
- tests/01_Basics/ through tests/23_Advance_Framework/ contain the available lesson modules
- tests/07_WebTables/ includes table-related examples
- tests/08_Web_Select_Frames_Iframe/ and tests/09_Frame_Iframe/ cover select, dropdown, and frame-based scenarios
- tests/10_Keyboard_Hover_Drag_Drop/, tests/11_JS_Alerts/, and tests/12_Handle_SVG/ cover advanced UI interactions
- tests/13_Shadow_DOM/, tests/14_FileUpload/, tests/15_File_Download/, and tests/16_Scroll_toElement/ cover browser automation edge cases
- tests/17_Expect_Assertions/, tests/18_Test_hooks/, tests/19_Data_Driven_Testing/, tests/20_Page_Object_Model/, tests/21_Fixture/, and tests/22_Misc_Concepts/ demonstrate core testing patterns
- tests/19_Data_Driven_Testing/ includes JSON, CSV, YAML, Faker, and Excel-driven scenarios
- tests/20_Page_Object_Model/ includes reusable login and inventory page objects to demonstrate maintainable test design
- playwright.config.ts contains the Playwright runtime and reporter setup
- package.json lists project dependencies and scripts
- Utils/CustomReporter.ts provides the custom HTML reporter implementation
- playwright-report/ stores Playwright HTML reports
- tta-report/ stores custom reporting output and generated artifacts
- test-results/ stores screenshots, traces, and videos from executed tests

## Current learning focus

This repository is currently being expanded with practical automation examples for:

- Data-driven testing patterns using external files and reusable utilities
- Page Object Model implementation for login and e-commerce workflows
- Reusable test data management and structured test organization
- Better reporting and debugging output for learning-oriented automation projects

## Prerequisites

- Node.js 18+
- npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install the Playwright browsers:

   ```bash
   npx playwright install
   ```

3. Run the full test suite:

   ```bash
   npx playwright test
   ```

4. Run a specific browser project:

   ```bash
   npx playwright test --project=chromium
   ```

5. Open the Playwright HTML report:

   ```bash
   npx playwright show-report
   ```

## Useful commands

Run a single spec file:

```bash
npx playwright test tests/18_Test_hooks/292_TestPriority.spec.ts
```

Run the suite with the line reporter and Allure:

```bash
npx playwright test --reporter=line,allure-playwright
```

Generate the Allure report locally:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

## Notes

- The default configuration targets Chromium desktop execution in playwright.config.ts
- Trace, screenshot, and video capture remain enabled for debugging and learning
- Some examples use saved browser session state to demonstrate login reuse and faster test flows
- The workspace includes both custom HTML reporting and Allure-based reporting examples for comparison
