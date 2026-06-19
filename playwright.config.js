// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: 'html',
  projects: [
    {
      name: 'stage',
      use: {
        baseURL: 'https://www.saucedemo.com/',
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        testDataFile: 'utils/testData.json'
      }
    }, {
      name: 'prod',
      use: {
        baseURL: 'https://www.google.com/',
        browserName: 'firefox',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        testDataFile: 'utils/testData.json'
      }
    }
  ]
});