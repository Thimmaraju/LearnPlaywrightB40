import { test, expect } from '@playwright/test';

import logindata from "../testdata/login.json"


test('Login with valid credentials', async ({ page }) => {

  // Launch the URL 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Entering Username 
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.Username);

  // Entering password 
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  // click on the login button 
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify time at work is visible and dashboard is visible 
  await expect(page.getByText('Time at Work')).toBeVisible({timeout : 40000});
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});

test('Login with Valid username and invalid password', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.Username);

  // Enter invalid password
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify error message
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Login with InValid username and valid password', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Login with inValid username and invalid password', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);

  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('get started link', async ({ page }) => {


  
})