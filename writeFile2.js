const fs = require('fs');

// Callback hell. Вначале происходит запись в файл, потом выполняется callback
fs.writeFile(`${__dirname}/files/file2.txt`, '1\n', () => {
  console.log('Файл создан');
  fs.appendFile(`${__dirname}/files/file2.txt`, '2\n', () => {
    console.log('Добавили 2');
    fs.appendFile(`${__dirname}/files/file2.txt`, '3\n', () => {
      console.log('Добавили 3');
      fs.appendFile(`${__dirname}/files/file2.txt`, 'Ой....\n', () => {
        console.log('Добавили ой');
      });
    });
  });
});

console.log('Andrew');
