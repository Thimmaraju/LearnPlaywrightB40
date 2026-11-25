// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test("Verify todo app ", async ({page}) =>{

     await page.goto('http://localhost:3000/')

     await page.locator('//input[@class="todo-input"]').fill("Teaching")

     await page.keyboard.press("Enter")
      await page.locator('//input[@class="todo-input"]').fill("Drink water ")

     await page.keyboard.press("Enter")
})