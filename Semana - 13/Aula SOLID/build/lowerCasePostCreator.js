"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorPrinter_1 = require("./errorPrinter");
const JSONFileManager_1 = require("./JSONFileManager");
const moment = require("moment");
const post_1 = require("./post");
class LowerCasePostCreator {
    constructor() {
        this.postFileManager = new JSONFileManager_1.JSONFileManager('posts.json');
        this.erroPrinter = new errorPrinter_1.ErrorPrinter();
    }
    create(name, text) {
        if (name && text) {
            const newPostLower = new post_1.Post(name, text.toLowerCase());
            this.postFileManager.saveToJSON(newPostLower);
        }
        else {
            this.erroPrinter.onError('Verifique se digitou corretamente', moment());
        }
    }
}
exports.LowerCasePostCreator = LowerCasePostCreator;
//# sourceMappingURL=lowerCasePostCreator.js.map