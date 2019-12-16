"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("./teacher");
const JSONFileManager_1 = require("./JSONFileManager");
const specialty_1 = require("./specialty");
class RegisterTeacher {
    constructor() {
        this.registerFileManager = new JSONFileManager_1.JSONFileManager('class.json');
    }
    create(teacher) {
        const register = this.registerFileManager.getJSONContent();
        register.listTeachers.push(teacher);
        this.registerFileManager.saveToJSON(register);
    }
}
exports.RegisterTeacher = RegisterTeacher;
const newTeacher = new teacher_1.Teacher('Mestre', 'mestre@gmail.com', '03/12/1980', specialty_1.Specialty.HTML);
const newRegister = new RegisterTeacher();
newRegister.create(newTeacher);
//# sourceMappingURL=registerTeacher.js.map