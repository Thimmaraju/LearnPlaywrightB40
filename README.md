# Learn Playwright B40

Playwright test automation project for the OrangeHRM demo application, with additional examples and local-app test coverage.

## Test Areas

- Login validation
- PIM: add employee
- Admin: add job title
- Buzz: post a message
- Playwright website navigation examples
- Local todo application example

## Prerequisites

- Node.js (LTS release recommended)
- npm
- Playwright browser binaries
- Internet access for the OrangeHRM demo site

## Setup

```powershell
npm install
npx playwright install
```

For a complete browser setup on Linux CI, use:

```powershell
npx playwright install --with-deps
```

## Running Tests

Run the complete configured test suite:

```powershell
npx playwright test
```

Run tests with Playwright UI mode:

```powershell
npx playwright test --ui
```

Run a specific test file:

```powershell
npx playwright test tests/login.spec.js
npx playwright test tests/PIM/addemployee.spec.js
npx playwright test tests/admin/addjobtitle.spec.js
npx playwright test tests/buzz/postamessage.spec.js
```

Run tests in a named project:

```powershell
npx playwright test --project=chromium
npx playwright test --project="Microsoft Edge"
npx playwright test --project="Google Chrome"
```

Open the latest HTML report:

```powershell
npx playwright show-report
```

## Project Structure

```text
.github/workflows/       GitHub Actions Playwright workflow
testdata/                JSON test data
tests/                   Playwright test specifications
  PIM/                   PIM module tests
  admin/                 Admin module tests
  buzz/                  Buzz module tests
playwright.config.js     Playwright configuration
package.json             npm dependencies and project metadata
```

## Configuration

[playwright.config.js](playwright.config.js) uses:

- OrangeHRM demo URL: `https://opensource-demo.orangehrmlive.com`
- Test directory: `tests/`
- Chromium, Microsoft Edge, and Google Chrome projects
- 3 local workers and up to 2 retries
- HTML and list reporters
- Trace, screenshot, and video recording
- 60-second test timeout and 20-second expectation timeout

Browser execution is headed by default in UI mode and headless in normal test runs.

## Test Data

Login and module data are stored in JSON files under [testdata/](testdata/). Update these files to change credentials or test values without editing the test specifications.

The included OrangeHRM tests use the demo site's standard credentials:

- Username: `Admin`
- Password: `admin123`

The demo credentials are public demo values and may change if the site is modified or unavailable.

## Generated Files

Playwright output is generated in ignored directories:

- `test-results/` - traces, screenshots, videos, and failure artifacts
- `playwright-report/` - HTML test report

Do not commit generated browser reports or test artifacts.

## CI

[.github/workflows/playwright.yml](.github/workflows/playwright.yml) runs the Playwright suite on pushes and pull requests targeting `main` or `master`. It installs dependencies and browsers, executes tests, and uploads the HTML report as a workflow artifact.
