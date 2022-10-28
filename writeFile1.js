const fs = require('fs');

// Асинхронная запись в файл, запишется не последовательно
fs.writeFile(`${__dirname}/files/file.txt`, '1\n', () => { console.log('Файл создан'); });
fs.appendFile(`${__dirname}/files/file.txt`, '2\n', () => { console.log('Добавили 2'); });
fs.appendFile(`${__dirname}/files/file.txt`, '3\n', () => { console.log('Добавили 3'); });
fs.appendFile(`${__dirname}/files/file.txt`, 'ой.....\n', () => { console.log('Добавили ой...'); });

// Синхронная запись в файл, запишется последовательно
fs.writeFileSync(`${__dirname}/files/file.txt`, '1\n');
console.log('Файл создан');
fs.appendFileSync(`${__dirname}/files/file.txt`, '2\n');
console.log('Добавили 2');
fs.appendFileSync(`${__dirname}/files/file.txt`, '3\n');
console.log('Добавили 3');
fs.appendFileSync(`${__dirname}/files/file.txt`, 'ой.....\n');

// Выполнится с асинхронным кодом в первую очередь, с синхронным выполнится после
console.log('Hello world!');
