"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fileName = './textos';
const readDirectory = new Promise((resolve, reject) => {
    fs_1.readdir(fileName, (err, files) => {
        if (err) {
            reject(err);
        }
        else {
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
//# sourceMappingURL=ex1.js.map