const fs = require('fs').promises;

// const promise = new Promise((resolve, reject) => {
//   fs.writeFile(`${__dirname}/files/file3.txt`, 'Василий', (error, data) => {
//     if (error) {
//       reject(error);
//     } else {
//       resolve(data);
//     }
//   });
// });

// const append = (path, message) => new Promise((resolve, reject) => {
//   fs.appendFile(path, message, (error) => {
//     if (error) {
//       reject(error);
//     } else {
//       resolve();
//     }
//   });
// });

const promise = fs.writeFile(`${__dirname}/files/file4.txt`, 'Василий');
const append = (path, message) => fs.appendFile(path, message);

promise
  .then(() => append(`${__dirname}/files/file4.txt`, '\n Здравствуй'));

console.log('Andrew');
