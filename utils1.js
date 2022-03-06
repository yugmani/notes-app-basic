const fs = require('fs');

//create a file 'notes.txt' with my name as data
fs.writeFileSync('notes.txt', 'My name is Prasiddha.');

// created an array
const person = ['aa', 'bb', 'cc'];

// create file 'person.txt' with person array.
fs.writeFileSync('person.txt', `${person}`);

// To append some data into existing file 'notes.txt'
fs.appendFileSync('notes.txt', ' I live in LA.');
