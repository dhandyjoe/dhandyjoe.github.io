import { defineConfig } from '@playwright/test';

// Uses the system Chrome so CI/dev need no browser download; GitHub's ubuntu runners ship with Chrome.
export default defineConfig({
  testDir: 'tests',
  webServer: {
    command: 'npm run build && npm run preview -- --port 4399 --ignore-lock',
    url: 'http://localhost:4399',
    timeout: 120_000,
  },
  use: { baseURL: 'http://localhost:4399', channel: 'chrome' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    {
      name: 'mobile',
      use: { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true },
    },
  ],
});
