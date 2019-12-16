"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Post {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.date = moment().utcOffset('-0300').format('DD/MM/YYYY HH:mm');
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map