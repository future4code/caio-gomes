"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalPostCreator_1 = require("./normalPostCreator");
const lowerCasePostCreator_1 = require("./lowerCasePostCreator");
const upperCasePostCreator_1 = require("./upperCasePostCreator");
class PostCreatorHandler {
    execute(name, text) {
        if (text.indexOf('&') === 0) {
            new upperCasePostCreator_1.UpperCasePostCreator().create(name, text);
        }
        else if (text.indexOf('%') === 0) {
            new lowerCasePostCreator_1.LowerCasePostCreator().create(name, text);
        }
        else {
            new normalPostCreator_1.NormalPostCreator().create(name, text);
        }
    }
}
exports.PostCreatorHandler = PostCreatorHandler;
const newPost = new PostCreatorHandler();
newPost.execute('Caio', '&post tem que ficar em maiscúlo!');
//# sourceMappingURL=postCreatorHandler.js.map