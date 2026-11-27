const { test, expect } = require('@playwright/test');
const {
  uniqueSuffix,
  generateEmployee,
  generateJobTitle,
  generateUniqueText,
  readJson,
} = require('../testdata/utils');

test.describe('Test data utilities', () => {
  test('generates a unique suffix', () => {
    const suffix = uniqueSuffix();

    expect(suffix).toHaveLength(6);
    expect(suffix).toMatch(/^[a-z0-9]+$/);
  });

  test('generates employee and job title data', () => {
    const employee = generateEmployee();
    const jobTitle = generateJobTitle();

    expect(employee.firstName).toBeTruthy();
    expect(employee.lastName).toBeTruthy();
    expect(employee.employeeId).toMatch(/^\d{5}$/);
    expect(employee.email).toContain('@');
    expect(jobTitle.title).toBeTruthy();
    expect(jobTitle.description).toBeTruthy();
  });

  test('generates unique text and reads JSON fixtures', () => {
    const text = generateUniqueText('Employee');
    const loginData = readJson('login.json');

    expect(text.startsWith('Employee_')).toBe(true);
    expect(loginData.Username).toBeTruthy();
  });
});
