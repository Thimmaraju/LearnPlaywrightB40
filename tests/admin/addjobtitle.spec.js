import { test, expect } from '@playwright/test';

import data from "../../testdata/login.json"

import addjobtitledata from "../../testdata/admin/addjobtitle.json"

import { faker } from '@faker-js/faker';

test('Verify user can add job title', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.Username);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('My Actions')).toBeVisible();

  await page.getByRole('link', { name: 'Admin' }).click();

  await page.getByText('Job').click();

  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  await page.getByRole('button', { name: ' Add' }).click();

  await page.getByRole('textbox').nth(1).click();


  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());

  await page.waitForTimeout(3000)

  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill(addjobtitledata.jobdescription);

  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill(addjobtitledata.notes);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
});