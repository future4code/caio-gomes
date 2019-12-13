"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
class RegisterStudent {
    constructor() {
        this.registerFileManager = new JSONFileManager_1.JSONFileManager('class.json');
    }
    create(student) {
        const register = this.registerFileManager.getJSONContent();
        register.listStudents.push(student);
        this.registerFileManager.saveToJSON(register);
    }
}
exports.RegisterStudent = RegisterStudent;
//# sourceMappingURL=registerStudent.js.map