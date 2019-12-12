"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorPrinter_1 = require("./errorPrinter");
const JSONFileManager_1 = require("./JSONFileManager");
const moment = require("moment");
const post_1 = require("./post");
class UpperCasePostCreator {
    constructor() {
        this.postFileManager = new JSONFileManager_1.JSONFileManager('posts.json');
        this.erroPrinter = new errorPrinter_1.ErrorPrinter();
    }
    create(name, text) {
        if (name && text) {
            const newPostUpper = new post_1.Post(name, text.toUpperCase());
            this.postFileManager.saveToJSON(newPostUpper);
        }
        else {
            this.erroPrinter.onError('Verifique se digitou corretamente', moment());
        }
    }
}
exports.UpperCasePostCreator = UpperCasePostCreator;
//# sourceMappingURL=upperCasePostCreator.js.map