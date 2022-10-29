const fs = require('fs');

const readDir = new Promise((res, rej) => {
  fs.readdir(`${__dirname}/files`, (error, data) => {
    if (error) rej(error);
    res(data);
  });
});

const totalSize = (arrFiles) => new Promise((resolve, reject) => {
  let total = 0;
  arrFiles.forEach((file, index) => {
    fs.stat(`${__dirname}/files/${file}`, (error, stats) => {
      total += stats.size;
      if (arrFiles.length === index + 1) {
        resolve(total);
      }
    });
  });
});

const write = (size) => new Promise((resolve, reject) => {
  fs.writeFile('./data.txt', `${size.toString()} bytes`, (err) => {
    reject(err);
  });
});

// readDir
//   .then((arrFiles) => totalSize(arrFiles))
//   .then((size) => write(size));

async function write2() {
  const arrFiles = await readDir;
  const total = await totalSize(arrFiles);
  await write(total);
}

write2();
