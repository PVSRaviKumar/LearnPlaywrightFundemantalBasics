# Learn Playwright Fundamental Basics

This repository is a hands-on Playwright learning workspace that covers browser automation fundamentals through structured, topic-based test examples. The exercises progressively move from basic test execution and annotations to locators, browser contexts, assertions, hooks, fixtures, page objects, and advanced automation patterns.

## What is included

- `tests/` contains Playwright spec files grouped by learning topic.
- `playwright.config.ts` defines the Playwright configuration, reporters, and browser settings.
- `package.json` contains the project dependencies and runtime metadata.
- `playwright-report/` stores HTML test reports generated during execution.
- `test-results/` stores visual and trace artifacts from test runs.

## Learning modules

The workspace currently includes examples for:

- Basics and test annotations
- First test execution and browser context concepts
- Locators and commands
- Session storage and browser state handling
- Alerts, SVG, Shadow DOM, file upload, and download flows
- Tables, frames and iframes, keyboard interactions, and drag-and-drop
- Assertions, hooks, fixtures, and data-driven testing
- Page Object Model and advanced framework concepts

## Prerequisites

- Node.js 18+ recommended
- npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers if they are not already available:

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

5. Open the generated test report:

   ```bash
   npx playwright show-report
   ```

## Useful notes

- The default project is configured for Chromium desktop execution in `playwright.config.ts`.
- HTML reports are generated using Playwright's built-in reporter.
- Trace, screenshot, and video capture are enabled to aid debugging and learning exercises.
- New test examples are organized in the `tests/` hierarchy by topic to keep the learning path easy to follow.
