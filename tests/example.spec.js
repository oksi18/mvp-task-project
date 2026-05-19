const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);
});

test('page contains heading', async ({ page }) => {
  await page.goto('https://example.com');

  const heading = page.locator('h1');

  await expect(heading).toContainText('Example Domain');
});