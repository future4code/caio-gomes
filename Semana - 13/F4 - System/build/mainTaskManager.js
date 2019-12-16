"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialty_1 = require("./specialty");
const mobileMission_1 = require("./mobileMission");
const webmission_1 = require("./webmission");
const teacher_1 = require("./teacher");
const student_1 = require("./student");
const JSONFileManager_1 = require("./JSONFileManager");
class MainTaskManager {
    constructor() {
        this.webJSON = new JSONFileManager_1.JSONFileManager('webClass.json');
        this.mobileJSON = new JSONFileManager_1.JSONFileManager('mobileClass.json');
    }
    executeWeb(newClass) {
        this.webJSON.saveToJSON(newClass);
        this.pushTeacherWeb();
        this.pushStudentWeb();
    }
    pushTeacherWeb() {
        const register = this.webJSON.getJSONContent();
        register.listTeachers.push(teacher1);
        this.webJSON.saveToJSON(register);
    }
    pushStudentWeb() {
        const register = this.webJSON.getJSONContent();
        register.listStudents.push(newStudentWeb);
        this.webJSON.saveToJSON(register);
    }
    executeMobile(newClass) {
        this.mobileJSON.saveToJSON(newClass);
        this.pushTeacherMobile();
        this.pushStudentMobile();
    }
    pushTeacherMobile() {
        const register = this.mobileJSON.getJSONContent();
        register.listTeachers.push(teacher2);
        this.mobileJSON.saveToJSON(register);
    }
    pushStudentMobile() {
        const register = this.mobileJSON.getJSONContent();
        register.listStudents.push(newStudentMobile);
        this.mobileJSON.saveToJSON(register);
    }
}
const webClass = [];
const mobileClass = [];
const teachers = [];
const newWebClass = new webmission_1.WebMission('Bruce', '06/01/2020', '06/07/2020', webClass, teachers);
const newMobileClass = new mobileMission_1.MobileMission(1, '06/01/2020', '06/07/2020', mobileClass, teachers);
const newStudentWeb = new student_1.Student('Caio', 'caio@gmail.com', '05/12/1992', newWebClass.patron);
const newStudentMobile = new student_1.Student('Jack', 'jackblack@gmail.com', '23/04/1965', newMobileClass.classNumber);
const teacher1 = new teacher_1.Teacher('Madruga, Seo', 'madruguinha@gmail.com', '17/04/1945', specialty_1.Specialty.React);
const teacher2 = new teacher_1.Teacher('Pai Mei', 'fivepointpalm@gmail.com', '11/11/1850', specialty_1.Specialty.Redux);
const systemF4 = new MainTaskManager();
systemF4.executeWeb(newWebClass);
systemF4.executeMobile(newMobileClass);
//# sourceMappingURL=mainTaskManager.js.map