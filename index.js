// run `node index.js` in the terminal
console.log(`Hello Node.js v${process.versions.node}!`);

// 1
// ******************************

// importing name from utils2.js;
// const name = require('./utils2.js');
// const location = require('./utils2.js');

// using imported variable
// console.log(name);

//importing name from utils2.js with different name
// const myName = require('./utils2.js');

// using imported variable
// console.log(name);
// console.log(`My name is ${myName}.`);
// console.log(`I am from ${location}.`);

// 2
// ******************************

//importing function addNumbers() from utils2.js;
// const addNumbers = require('./utils2.js');
const add = require('./utils2.js');

// using imported function;
const sum = add(4, 6);
console.log(sum);

// 3
// ******************************

//importing function getNotes() from notes.js
const myNote = require('./notes.js');

// using imported function
const message = myNote();
console.log(message);

