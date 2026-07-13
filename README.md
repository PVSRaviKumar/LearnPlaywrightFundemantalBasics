# Learn Playwright Fundamental Basics

This repository is a hands-on Playwright learning workspace focused on browser automation fundamentals. It contains categorized test examples that progressively cover base concepts, locator usage, assertions, browser context handling, hooks, fixtures, and advanced framework patterns.

## Project Structure

- `tests/` contains Playwright spec files grouped by topic and learning stage.
- `playwright.config.ts` configures the test runner, reporter, browser settings, and default screenshot/trace settings.
- `package.json` lists the project dependencies.
- `playwright-report/` stores the generated HTML report for completed test runs.
- `test-results/` stores run-time artifacts such as traces, screenshots, and videos.

## Learning Modules

The repo includes examples for:

- Basics and annotations
- First test execution and browser context concepts
- Locators and commands
- Session storage and browser state behavior
- Alerts, SVG, Shadow DOM, file upload/download
- Tables, frames/iframes, keyboard and drag/drop interactions
- Assertions, hooks, fixtures, and data-driven testing
- Page Object Model and advanced framework topics

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install the required browsers once if needed:

   ```bash
   npx playwright install
   ```

3. Run the full suite:

   ```bash
   npx playwright test
   ```

4. Run a specific browser project:

   ```bash
   npx playwright test --project=chromium
   ```

5. Open the HTML report after a test run:

   ```bash
   npx playwright show-report
   ```

## Notes

- The project is currently configured for the Chromium desktop project in `playwright.config.ts`.
- HTML reports are generated through the built-in Playwright reporter.
- Trace, screenshot, and video capture are enabled to support debugging and learning exercises.
