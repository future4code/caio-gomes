"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const errorPrinter_1 = require("./errorPrinter");
const JSONFileManager_1 = require("./JSONFileManager");
const postFileManager = new JSONFileManager_1.JSONFileManager('posts.json');
class NormalPostCreator {
    constructor() {
        this.erroPrinter = new errorPrinter_1.ErrorPrinter();
    }
    create(name, text) {
        if (name === undefined || text === undefined) {
            this.erroPrinter.onError('Verifique se digitou corretamente', moment());
        }
        else {
            postFileManager.saveToJSON({ name, text });
        }
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=normalPostCreator.js.map