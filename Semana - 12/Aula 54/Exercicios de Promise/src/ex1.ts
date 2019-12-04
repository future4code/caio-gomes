import { readdir, readFile } from 'fs';
const path = require('path');

const directoryPath = path.join(__dirname, '../textos');

readdir(directoryPath, function(err: Error, files: any) {
  if (err) {
    console.log('Erro');
  } else {
    files.forEach(function(file: string) {
      readFile(directoryPath + `/${file}`, (err: Error, data: Buffer)=>{
        if(err){
          console.log('ERRO AO ACESSAR TEXTOS')
        } else {
          console.log(data.toString())
        }
      });
    });
  }
});

