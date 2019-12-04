import { readdir, readFile } from 'fs';

const fileName: string = './textos';

const readDirectory = new Promise((resolve, reject) => {
  readdir(fileName, (err, files) => {
    if (err) {
      reject(err);
    } else {
      resolve(files);
    }
  });
});

readDirectory
  .then(content => {
    console.log(content);
  })
  .catch(e => {
    console.error(e);
  });
