const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

function uniqueSuffix(length = 6) {
  return faker.string.alphanumeric({ length }).toLowerCase();
}

function generateEmployee(options = {}) {
  const firstName = options.firstName || faker.person.firstName();
  const lastName = options.lastName || faker.person.lastName();

  return {
    firstName,
    lastName,
    employeeId: options.employeeId || faker.string.numeric(5),
    email: options.email || faker.internet.email({ firstName, lastName }).toLowerCase(),
  };
}

function generateJobTitle(options = {}) {
  const title = options.title || faker.person.jobTitle();

  return {
    title,
    description: options.description || faker.lorem.sentence(),
  };
}

function generateUniqueText(prefix = 'Test', words = 3) {
  return `${prefix}_${uniqueSuffix()}_${faker.lorem.words(words)}`;
}

function readJson(relativePath) {
  const filePath = path.resolve(__dirname, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = {
  uniqueSuffix,
  generateEmployee,
  generateJobTitle,
  generateUniqueText,
  readJson,
};
