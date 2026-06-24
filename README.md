# SauceDemo
End to End Dynamic Playwright Automation with Javascript
![Playwright Tests](https://github.com/summit-sakhre/SauceDemo/actions/workflows/playwright.yml/badge.svg)

# Enterprise Playwright E2E Automation Framework (JavaScript)

A production-ready, highly optimized end-to-end automation framework built using **Playwright** and **Plain JavaScript**. This framework demonstrates modern test automation best practices, focusing on execution speed, reliability, maintainability, and seamless CI/CD integration.

## 🚀 Key Framework Features

*   **Page Object Model (POM) Architecture:** Clean separation of test logic and UI elements to ensure low maintenance overhead as the product scales.
*   **Global Authentication Setup (Session Reuse):** Bypasses repetitive UI login steps across tests by capturing cookies and local storage state into a reusable session file, slashing overall test execution time by up to 60%.
*   **Parallel Execution & Retries:** Pre-configured for maximum speed using parallel test workers, alongside built-in execution retries to eliminate false failures from flaky tests.
*   **Robust Flakiness Management:** Utilizes user-facing, web-first assertions (`expect()`) that automatically wait for elements to be stable before executing actions.
*   **Automated CI/CD Pipeline:** Fully integrated with **GitHub Actions** to automatically trigger test suites on code pushes and generate accessible test execution history.
*   **Rich Test Artifacts:** Automatically captures detailed screenshots and video recordings exclusively on test failures to enable instant debugging.

---

## 🛠️ Tech Stack & Prerequisites

*   **Language:** JavaScript (Node.js)
*   **Automation Engine:** Playwright (Latest)
*   **Reporting:** Playwright HTML Reporter
*   **CI/CD Platform:** GitHub Actions

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

---

## 💻 Local Setup & Execution

1. **Clone the repository:**
```bash
   git clone [https://github.com/summit-sakhre/SauceDemo.git](https://github.com/summit-sakhre/SauceDemo.git)
   cd playwright-js-framework