import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';
test('Verify add employee with basic details', async ({ page }) => {

  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('link', { name: 'PIM' }).click();

  await page.getByRole('link',  { name: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());

  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());

  await page.getByRole('button', { name: 'Save' }).click();
  
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});

