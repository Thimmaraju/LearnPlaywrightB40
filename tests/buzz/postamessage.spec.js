import { test, expect } from '@playwright/test';

test('Verify user can post a message on buzz', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('Hey hi all good mng');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await expect(page.getByText('Hey hi all good mng')).toBeVisible();
});