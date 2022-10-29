const fs = require('fs');

const promise = fs.promises.readFile(`${__dirname}/files/file.txt`, 'utf-8');

promise
  .then((data) => console.log(data));

console.log('Andrew');
