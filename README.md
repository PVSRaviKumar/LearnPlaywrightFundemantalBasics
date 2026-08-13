# Learn Playwright Fundamental Basics

This repository is a hands-on Playwright learning workspace for practicing browser automation, locator strategies, assertions, test architecture, reporting, and reusable test patterns. It is organized by topic so it can be used as a practical step-by-step guide for beginners and intermediate learners.

## Project overview

The workspace contains a progressive set of Playwright exercises covering both the basics and more advanced UI automation scenarios. The examples are designed to help learners understand how to automate real web applications, structure tests cleanly, and build reliable testing habits.

### Topics covered

- Playwright setup, browser configuration, and test execution
- Core locators, user interactions, and browser commands
- Assertions, hooks, and fixtures
- Multiple element handling and dynamic tables
- Frames, iframes, alerts, SVG elements, and shadow DOM automation
- Keyboard, hover, drag-and-drop, file upload, and file download scenarios
- Session storage reuse and login flow automation
- Data-driven testing with JSON, CSV, YAML, Excel, Faker-generated values, and SQL-based sources
- Page Object Model patterns for maintainable automation code
- Custom HTML reporting and Allure reporting integration
- Advanced test organization and reusable utility patterns

## Repository structure

- tests/ contains topic-based Playwright specs grouped by learning area
- tests/01_Basics/ through tests/23_Advance_Framework/ include the learning modules
- tests/07_WebTables/ covers dynamic data tables and table-based interactions
- tests/08_Web_Select_Frames_Iframe/ and tests/09_Frame_Iframe/ cover select, dropdown, and frame-based examples
- tests/10_Keyboard_Hover_Drag_Drop/, tests/11_JS_Alerts/, and tests/12_Handle_SVG/ cover advanced UI interactions
- tests/13_Shadow_DOM/, tests/14_FileUpload/, tests/15_File_Download/, and tests/16_Scroll_toElement/ demonstrate browser edge cases
- tests/17_Expect_Assertions/, tests/18_Test_hooks/, tests/19_Data_Driven_Testing/, tests/20_Page_Object_Model/, tests/21_Fixture/, and tests/22_Misc_Concepts/ cover core testing patterns and reusable design practices
- tests/23_Advance_Framework/ is used for broader framework-building examples and organization patterns
- Learnings/ contains reference notes and implementation decisions captured during the learning journey
- Utils/ contains shared helper and reporter utilities
- playwright.config.ts defines the Playwright runtime and report setup
- package.json includes dependencies and scripts used by the project
- playwright-report/ stores browser-generated HTML reports
- tta-report/ stores custom reporting outputs and generated artifacts
- test-results/ stores traces, screenshots, and videos from executed tests

## Current learning focus

This workspace is actively used for practical exercises around:

- Data-driven testing using both synchronous and asynchronous sources
- Page Object Model design for login and workflow-based tests
- Reusable test data management and structured project organization
- Reporting, diagnostics, and debugging workflows for learning-oriented automation projects

## Latest learning note

A recent note in the Learnings folder documents the key decision for Playwright data-driven testing when the source is asynchronous, such as MySQL or Excel files loaded through `exceljs`:

- Synchronous sources such as JSON, CSV, and YAML can be read at module load time and expanded into one `test()` per row.
- Asynchronous sources should be loaded in `test.beforeAll()` and executed through a single test that loops over rows with `test.step()`.
- The output shape should be normalized so the same test logic can run against different data sources without duplicating specs.
- External infrastructure should be guarded with `test.skip(...)` so the suite remains safe on machines without those services.

This note is stored in [Learnings/2026-08-05-ddt-sync-vs-async-data-sources.md](Learnings/2026-08-05-ddt-sync-vs-async-data-sources.md) and is intended as a quick reference when designing reusable data-driven Playwright tests.

## Prerequisites

- Node.js 18+
- npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install the Playwright browser binaries:

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

5. Open the Playwright HTML report:

   ```bash
   npx playwright show-report
   ```

## Useful commands

Run a single spec file:

```bash
npx playwright test tests/18_Test_hooks/292_TestPriority.spec.ts
```

Run the suite using the line reporter and Allure integration:

```bash
npx playwright test --reporter=line,allure-playwright
```

Generate the Allure report locally:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

Open a specific Playwright trace or report after a run:

```bash
npx playwright show-report
```

## Notes

- The default configuration targets Chromium desktop execution in playwright.config.ts
- Trace, screenshot, and video capture remain enabled for debugging and learning
- Certain examples use saved browser session state to demonstrate login reuse and faster test flows
- The workspace includes both custom HTML reporting and Allure-based reporting examples for comparison
- This project is intended as a learning lab and reference repository for structured Playwright automation practice
