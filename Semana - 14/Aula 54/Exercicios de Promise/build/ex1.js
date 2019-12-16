"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require('path');
const directoryPath = path.join(__dirname, '../textos');
fs_1.readdir(directoryPath, function (err, files) {
    if (err) {
        console.log('Erro');
    }
    else {
        files.forEach(function (file) {
            fs_1.readFile(directoryPath + `/${file}`, (err, data) => {
                if (err) {
                    console.log('ERRO AO ACESSAR TEXTOS');
                }
                else {
                    console.log(data.toString());
                }
            });
        });
    }
});
//# sourceMappingURL=ex1.js.map