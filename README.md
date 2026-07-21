# Learn Playwright Fundamental Basics

This repository is a hands-on Playwright learning workspace for practicing browser automation, locator strategies, assertions, frame handling, file operations, and reporting. It is organized by topic so it can be used as a step-by-step reference for beginners and intermediate learners.

## What this project covers

The examples in this workspace demonstrate:

- Playwright test setup and browser configuration
- Basic test execution, annotations, and assertions
- Locators, commands, and browser interactions
- Multiple-element handling, dynamic tables, and XPath-based table navigation
- Frames, iframes, alerts, SVG elements, and shadow DOM usage
- Keyboard, hover, drag-and-drop, file upload, and file download flows
- Session storage reuse for authenticated scenarios
- Fixtures, hooks, and page-object-style patterns
- Custom HTML reporting and Allure reporting support

## Repository structure

- tests/ contains topic-based Playwright specs grouped by learning area
- tests/01_Basics/ to tests/23_Advance_Framework/ include practice exercises for each module
- tests/07_WebTables/ includes table-related practice examples
- tests/08_Web_Select_Frames_Iframe/ includes select, dropdown, and frame-based examples
- playwright.config.ts contains the Playwright runtime and reporter setup
- package.json lists the project dependencies
- Utils/CustomReporter.ts provides the custom HTML reporter implementation
- playwright-report/ stores Playwright HTML reports
- tta-report/ stores the custom reporting output
- test-results/ stores screenshots, traces, and videos from executed tests

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
npx playwright test tests/08_Web_Select_Frames_Iframe/Task_SpiceJet.spec.ts
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
