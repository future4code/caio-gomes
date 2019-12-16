"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const errorPrinter_1 = require("./errorPrinter");
const JSONFileManager_1 = require("./JSONFileManager");
class NormalPostCreator {
    constructor() {
        this.postFileManager = new JSONFileManager_1.JSONFileManager('posts.json');
        this.erroPrinter = new errorPrinter_1.ErrorPrinter();
    }
    create(name, text) {
        if (name && text) {
            this.postFileManager.saveToJSON({ name, text });
        }
        else {
            this.erroPrinter.onError('Verifique se digitou corretamente', moment());
        }
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=normalPostCreator.js.map