import { expect, test } from '@playwright/test';
import { categories, projects } from '../src/data/projects';
import { suite } from '../src/data/tools';

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
});

test('has no horizontal overflow', async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test('theme toggle switches, labels and persists across reload', async ({ page }) => {
  const toggle = page.getByRole('button', { name: 'Switch to dark theme' });
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Switch to light theme' })).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('filters show the right projects and counts', async ({ page }) => {
  const cards = page.locator('.card:visible');
  await expect(cards).toHaveCount(projects.length);
  for (const cat of categories) {
    await page.getByRole('button', { name: new RegExp(`^${cat}`) }).click();
    await expect(cards).toHaveCount(projects.filter((p) => p.cat === cat).length);
    await expect(page.locator('#shown-count')).toHaveText(
      `(${projects.filter((p) => p.cat === cat).length})`,
    );
  }
  await page.getByRole('button', { name: /^All/ }).click();
  await expect(cards).toHaveCount(projects.length);
});

test('every project card links out safely', async ({ page }) => {
  const cards = page.locator('.card');
  await expect(cards).toHaveCount(projects.length);
  for (const [i, p] of projects.entries()) {
    const card = cards.nth(i);
    await expect(card).toHaveAttribute('href', p.url);
    await expect(card).toHaveAttribute('target', '_blank');
    await expect(card).toHaveAttribute('rel', /noopener/);
  }
});

test('scrollspy follows the section in view', async ({ page }) => {
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.evaluate(() => document.getElementById('about')!.scrollIntoView());
  await expect(page.locator('.dock-item[href="#about"]')).toHaveAttribute('aria-current', 'true');
  await expect(page.locator('.dock-item[aria-current="true"]')).toHaveCount(1);
});

test('profile photo loads', async ({ page }) => {
  const photo = page.locator('.photo');
  await photo.scrollIntoViewIfNeeded();
  await expect
    .poll(() => photo.evaluate((i: HTMLImageElement) => i.naturalWidth))
    .toBeGreaterThan(0);
});

test('legacy pages redirect to their section', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page).toHaveURL(/\/#about$/);
  await page.goto('/contact.html');
  await expect(page).toHaveURL(/\/#contact$/);
});

test('test runner shows the final state with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(page.locator('#runner-sum')).toHaveText(`${suite.length} passed · 0 failed`);
});

test('skills band sits at the bottom of the first screen on desktop', async ({ page }, info) => {
  test.skip(info.project.name !== 'desktop', 'mobile hero is a stacked column');
  for (const [width, height] of [
    [1440, 900],
    [1512, 760],
    [1280, 720],
    [1920, 960],
  ] as const) {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    const bottom = await page.locator('.band').evaluate((el) => el.getBoundingClientRect().bottom);
    expect(bottom, `${width}x${height}`).toBeLessThanOrEqual(height + 0.5);
    expect(bottom, `${width}x${height}`).toBeGreaterThan(height - 4);
  }
});
