const validator = require('validator');

// 1 Validating Email
const myEmail = 'yugmani@yahoo.com';
const newEmail = 'neEmail@.com';

console.log('My Email: ' + validator.isEmail(myEmail)); //true

console.log('New Email: ' + validator.isEmail(newEmail)); //false

// 2. Validating URL
const myURL = 'www.example.com.np';
const newURL = 'http://google.com';
const noURL = 'http/some.org';

console.log('My URL: ' + validator.isURL(myURL)); //true
console.log('New URL: ' + validator.isURL(newURL)); //true
console.log('No URL: ' + validator.isURL(noURL)); //false

// 3. Validating alphabet
const myAlpha = 'y';
const newAlpha = '7';
const noAlpha = '$';

console.log('My Alpha: ' + validator.isAlpha(myAlpha)); //true
console.log('New Alpha: ' + validator.isAlpha(newAlpha)); // false
console.log('No Alpha: ' + validator.isAlpha(noAlpha)); //false

// 4. Validating alphanumeric
const myAlphaNumeric = 'y3';
const newAlphaNumeric = 'G7';
const noAlphaNumeric = '$2a';

console.log('My alphanumeric: ' + validator.isAlphanumeric(myAlphaNumeric)); //true
console.log('New alphanumeric: ' + validator.isAlphanumeric(newAlphaNumeric)); // true
console.log('No alphanumeric: ' + validator.isAlphanumeric(noAlphaNumeric)); //false

// 5. Boolean validator
const myBoolean = 'true';
const newBoolean = 'false';

const nextBoolean = '0';
const extraBoolean = '1';
const yesBoolean = 'yes';
const noBoolean = 'no';

console.log('My Boolean: ' + validator.isBoolean(myBoolean)); //true
console.log('New Boolean: ' + validator.isBoolean(newBoolean)); // true
console.log('Extra Boolean: ' + validator.isBoolean(extraBoolean)); //true
console.log('next Boolean: ' + validator.isBoolean(nextBoolean)); //true

console.log('Yes Boolean: ' + validator.isBoolean(yesBoolean)); //false
console.log('No Boolean: ' + validator.isBoolean(noBoolean)); //false

